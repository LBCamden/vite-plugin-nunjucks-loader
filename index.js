import * as path from "path";
import njk from "nunjucks";
import { createFilter } from "vite";
import escapeStringRegexp from "escape-string-regexp";
import { transform } from "esbuild";
import { glob } from "glob";
import { realpathSync } from "fs";

const DIRNAME = path.dirname(new URL(import.meta.url).pathname);
const RUNTIME = path.resolve(DIRNAME, "./runtime-dist/bundle.js");
const NJK_SHIM = "virtual:njk-serverless";
const RESOLVED_NJK_SHIM = "\0" + NJK_SHIM;

/**
 *
 * @typedef {{ dir: string, resolveMacro: (x: string) => string }} ComponentLibrary
 *
 * @param {{
 *  templates: string[],
 *  templates: string[],
 *  cwd?: string,
 *  include?: import('vite').FilterPattern,
 *  filters?: Record<string, string>,
 *  exclude?: import('vite').FilterPattern,
 *  decorators?: string[],
 * }} options
 * @returns { import('vite').Plugin }
 */
export default function nunjucksLoader({
  templates,
  cwd = process.cwd(),
  include = [],
  filters = [],
  exclude = [],
  decorators = [],
}) {
  const resolvedTemplateList = templates.flatMap((t) => {
    const mapped = realpathSync(path.resolve(cwd, t));
    const relPath = path.relative(cwd, mapped);

    if (relPath === t) return [];
    else return [[t, relPath]];
  });

  // Resolve template paths that cross symlinks to their original locations
  // this is needed for compatibility with package managers like pnpm that symlink modules
  const resolvedTemplates = Object.fromEntries(resolvedTemplateList);

  // Inverse mapping passed through to loader runtime
  const inverseResolvedTemplates = Object.fromEntries(
    resolvedTemplateList.map(([k, v]) => [v, k]),
  );

  var filter = createFilter(include, exclude);

  /** @type { import('vite').Plugin } */
  const component = {
    name: "vite-plugin-nunjucks-loader",

    resolveId(id) {
      if (id === NJK_SHIM) {
        return RESOLVED_NJK_SHIM;
      }

      return null;
    },

    async load(id) {
      if (id === RESOLVED_NJK_SHIM) {
        for (const templateDir of templates) {
          for (const src of await glob(`${templateDir}/**/*.njk`, { cwd })) {
            this.addWatchFile(path.resolve(src));
          }
        }

        const env = new njk.Environment();
        const paths = templates.map(
          (dir) => `^${escapeStringRegexp(dir)}/.*\.njk`,
        );

        for (const name of Object.keys(filters ?? {})) {
          env.addFilter(name, () => {}, true);
        }

        const jsTemplate = njk.precompile(cwd, {
          include: paths,
          env,
        });

        const transformRes = await transform(jsTemplate, {
          define: {
            window: "globalThis",
          },
        });

        const filterInclude = Object.entries(filters ?? {})
          .flatMap(([key, val]) => [
            `import filter__${key} from ${JSON.stringify(path.resolve(cwd, val))};`,
            `filters[${JSON.stringify(key)}] = filter__${key};`,
          ])
          .join("\n");

        return `
          import { filters, resolveMap } from "${RUNTIME}";

          Object.assign(resolveMap, ${JSON.stringify(inverseResolvedTemplates)});

          ${filterInclude}
          ${transformRes.code}
        `;
      }

      return null;
    },

    async transform(code, id) {
      if (!filter(id) || !isNunjucksFile(id)) {
        return null;
      }

      const output = [
        `import "${NJK_SHIM}"`,
        `import createRender from "${RUNTIME}"`,
        decorators.map(
          (d, i) => `import decorator${i} from "${path.resolve(cwd, d)}"`,
        ),

        `const decorators = [${decorators.map((_, i) => `decorator${i}`)}]`,
      ];

      for (const dirSrc of templates) {
        const dir = resolvedTemplates[dirSrc] ?? dirSrc;
        const absDir = path.resolve(cwd, dir);

        if (id.startsWith(absDir)) {
          const templateName = trimNunjucksPath(id);
          output.push(
            `export default createRender(${JSON.stringify(
              templateName,
            )}, decorators)`,
          );

          return output.join(";\n");
        }
      }

      this.error(
        `No template directory matches ${id}. Have you configured your 'templates' setting correctly on the nunjucks loader?`,
      );
    },

    async handleHotUpdate({ server, file, modules, timestamp }) {
      if (!isNunjucksFile(file)) {
        return modules;
      }

      /**
       * This is potentially inefficient, but need to figure out how to only invalidate the njk module.
       *
       * That said, templates are likely a high percentage of vite's build time and we'd likely need to invalidate all
       * templates at least.
       */
      server.moduleGraph.invalidateAll();

      return modules;
    },
  };

  return component;
}

const NJ_REGEXP = /\.njk(\?.+)?$/;

function isNunjucksFile(path) {
  return NJ_REGEXP.test(path);
}

function trimNunjucksPath(p) {
  return path.relative(process.cwd(), p.replace(NJ_REGEXP, ".njk"));
}

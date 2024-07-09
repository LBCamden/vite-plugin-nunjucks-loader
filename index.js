import * as path from "path";
import njk from "nunjucks";
import { createFilter } from "vite";
import escapeStringRegexp from "escape-string-regexp";
import { transform } from "esbuild";
import { glob } from "glob";

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
 *  include?: import('vite').FilterPattern,
 *   filters?: Record<string, string>,
 *   exclude?: import('vite').FilterPattern,
 * }} options
 * @returns { import('vite').Plugin }
 */
export default function nunjucksLoader({
  templates,
  include = [],
  filters = [],
  exclude = [],
}) {
  var filter = createFilter(include, exclude);

  /** @type { import('vite').Plugin } */
  const component = {
    name: "vite-plugin-nunjucks-loader",

    resolveId(id) {
      if (id === NJK_SHIM) {
        return RESOLVED_NJK_SHIM;
      }
    },

    async load(id) {
      if (id === RESOLVED_NJK_SHIM) {
        for (const templateDir of templates) {
          for (const src of await glob(`${templateDir}/**/*.njk`)) {
            this.addWatchFile(src);
          }
        }

        const env = new njk.Environment(new njk.NodeResolveLoader());
        const paths = templates.map(
          (dir) => `^${escapeStringRegexp(dir)}/.*\.njk`
        );

        for (const name of Object.keys(filters ?? {})) {
          env.addFilter(name, () => {}, true);
        }

        const jsTemplate = njk.precompile(process.cwd(), {
          env: env,
          include: paths,
        });

        const transformRes = await transform(jsTemplate, {
          define: {
            window: "globalThis",
          },
        });

        const filterInclude = Object.entries(filters ?? {})
          .flatMap(([key, val]) => [
            `import filter__${key} from ${JSON.stringify(path.resolve(val))};`,
            `filters[${JSON.stringify(key)}] = filter__${key};`,
          ])
          .join("\n");

        return `
          import { filters } from "${RUNTIME}";

          ${filterInclude}
          ${transformRes.code}
        `;
      }
    },

    async transform(code, id) {
      if (!filter(id) || !id.endsWith(".njk")) {
        return;
      }

      const output = [
        `import "${NJK_SHIM}"`,
        `import render from "${RUNTIME}"`,
      ];

      for (const dir of templates) {
        const absDir = path.resolve(dir);

        if (id.startsWith(absDir)) {
          const templateName = path.relative(process.cwd(), id);
          output.push(
            `export default (ctx) => render(${JSON.stringify(
              templateName
            )}, ctx)`
          );

          return output.join(";\n");
        }
      }
    },

    async handleHotUpdate({ server, file, modules, timestamp }) {
      if (!file.endsWith(".njk")) {
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

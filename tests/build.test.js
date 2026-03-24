import { test } from "node:test";
import assert from "node:assert";
import path from "node:path";
import { build } from "vite";

import nunjucksLoader from "../index.js";

test("renders nunjucks template", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/included/views/hello-world.njk",
  });
  const html = await myTemplate({ name: "world" });

  assert.equal(html, "Hello, world!");
});

test("resolves absolute import", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/included/views/header-macro.njk",
  });
  const html = await myTemplate({ content: "Header content" });

  assert.equal(html, "<header>Header content</header>");
});

test("resolves relative import", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/included/views/header-macro-relative.njk",
  });
  const html = await myTemplate({ content: "Header content" });

  assert.equal(html, "<header>Header content</header>");
});

test("applies sync filters", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/included/views/custom-filter.njk",
    filters: { customFilter: "fixtures/extensions/sync-uppercase.js" },
  });
  const html = await myTemplate({
    content: "hello",
  });

  assert.equal(html, "HELLO");
});

test("applies async filters", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/included/views/custom-filter.njk",
    filters: {
      customFilter: "fixtures/extensions/async-uppercase.js",
    },
  });
  const html = await myTemplate({
    content: "hello",
  });

  assert.equal(html, "HELLO");
});

test("traverses symlinks when imported from nunjucks", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/included/views/include-symlink.njk",
  });
  const html = await myTemplate();

  assert.equal(html, "Hello, symlinks!");
});

test("traverses symlinks when imported from js", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/symlink-target/includer.njk",
  });
  const html = await myTemplate();

  assert.equal(html, "Hello, symlinks!");
});

async function buildAndEval({ entry, ...opts }) {
  const res = await build({
    plugins: [
      nunjucksLoader({
        cwd: import.meta.dirname,
        templates: ["fixtures/included", "fixtures/symlink-src"],
        ...opts,
      }),
    ],
    build: {
      write: false,
      lib: {
        entry: path.resolve(import.meta.dirname, entry),
        formats: ["cjs"],
      },
    },
  });

  const [{ code }] = res[0].output;

  const renderFn = new Function(
    `const exports = {};
    const module = {exports};
    
    ${code};
    
    return module.exports;`,
  )();
  return (params) => renderFn(params).then((html) => html.trim());
}

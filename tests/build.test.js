import { test } from "node:test";
import assert from "node:assert";
import { build } from "vite";

import nunjucksLoader from "../index.js";

test("renders nunjucks template", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/views/hello-world.njk",
  });
  const html = await myTemplate({ name: "world" });

  assert.equal(html, "Hello, world!");
});

test("resolves absolute import", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/views/header-macro.njk",
  });
  const html = await myTemplate({ content: "Header content" });

  assert.equal(html, "<header>Header content</header>");
});

test("resolves relative import", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/views/header-macro-relative.njk",
  });
  const html = await myTemplate({ content: "Header content" });

  assert.equal(html, "<header>Header content</header>");
});

test("applies sync filters", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/views/custom-filter.njk",
    filters: { customFilter: "fixtures/extensions/sync-uppercase.js" },
  });
  const html = await myTemplate({
    content: "hello",
  });

  assert.equal(html, "HELLO");
});

test("applies async filters", async () => {
  const myTemplate = await buildAndEval({
    entry: "fixtures/views/custom-filter.njk",
    filters: { customFilter: "fixtures/extensions/async-uppercase.js" },
  });
  const html = await myTemplate({
    content: "hello",
  });

  assert.equal(html, "HELLO");
});

async function buildAndEval({ entry, ...opts }) {
  const res = await build({
    plugins: [
      nunjucksLoader({
        templates: ["fixtures"],
        ...opts,
      }),
    ],
    build: {
      write: false,
      lib: {
        entry,
        formats: ["cjs"],
      },
    },
  });

  const [{ code }] = res[0].output;

  const renderFn = new Function(
    `const exports = {}; const module = {exports}; ${code}; return module.exports;`
  )();
  return (params) => renderFn(params).then((html) => html.trim());
}

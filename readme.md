# vite-plugin-nunjucks-loader

Adds nunjucks templates to your app bundle so that you can import and run them from js code.

- Works in browsers and serverless environments (cloudflare workers, etc)
- Supports relative and absolute path resolution (include, extends, import)
- Supports importing macros from node_modules
- Supports custom filters (async and sync)

## Use case

You have a library of design system components written in nunjucks that you'd like to use in a modern web stack.

- Render pages using these components on the edge using technologies like cloudflare workers.
- Use these components with vite-based frontend tools like storybook, chromatic, etc.

## Usage

Add the plugin to your vite.config.js:

```javascript
import nunjucks from "vite-plugin-nunjucks-loader"

export default defineConfig({
  // ...
  plugins: [
    nunjucksServerless({
      // All directories to scan for nunjucks templates.
      // All templates in these directories will be added to your bundle. Templates outside them will not.
      //
      // Absolute imports are resolved from the current working directory.
      templates: [
        "views",
        "node_modules/my-macro-library",
      ],
      // Custom filters
      filters: {
        filterName: './path-to-filter.js',
      },
    }),
  ]
})

```

Define your templates in the directories provided to the plugin config:

```html
{% from "node_modules/my-macro-library/header.njk" import Header %}

<html>
  ...
  <body>
    {{ Header({ title: title }) }}
  </body>
</html>

```

Import your templates into js files and call them to transform parameters to html strings:

```javascript
import myPage from "./views/my-page.njk"

const html = await myPage({
  title: "My Page"
})

// "<html>..."
console.log(html)

```

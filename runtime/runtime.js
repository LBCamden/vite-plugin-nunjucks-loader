import "./polyfill";

import njk from "nunjucks";
import { adaptFilter } from "./util";

export const filters = {};
export const resolveMap = {};

function remapPath(name) {
  for (const key in resolveMap) {
    if (name.startsWith(key)) {
      const mapped = resolveMap[key] + name.substring(key.length);
      return mapped;
    }
  }

  return name;
}

/**
 *
 *
 * @param {string} templatePath
 * @param {*} context
 */
export function renderTemplate(templatePath, context) {
  const env = new njk.Environment(new njk.PrecompiledLoader());

  for (const [name, filter] of Object.entries(filters)) {
    env.addFilter(name, adaptFilter(filter), true);
  }

  return new Promise((resolve, reject) =>
    env.render(remapPath(templatePath), context, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    }),
  );
}

/**
 *
 * @typedef {(args: {}) => string} Template
 * @typedef {(template: Template) => Template} TemplateDecorator
 *
 * @param {string} templatePath
 * @param {TemplateDecorator[]} decorators
 * @returns {Template}
 */
export default function createRender(path, decorators) {
  let render = (ctx) => renderTemplate(path, ctx);

  for (const decorate of decorators) {
    render = decorate(render);
  }

  return render;
}

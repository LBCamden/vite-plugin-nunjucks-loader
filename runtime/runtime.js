import "./polyfill";

import njk from "nunjucks";
import { adaptFilter, syncFilter } from "./util";

export const filters = {};
export const resolveMap = {};
export const options = { async: false };

function remapPath(name) {
  for (const key in resolveMap) {
    if (name.startsWith(key)) {
      const mapped = resolveMap[key] + name.substring(key.length);
      return mapped;
    }
  }

  return name;
}

let env;

function getEnv() {
  if (!env) {
    env = new njk.Environment(new njk.PrecompiledLoader());

    for (const [name, filter] of Object.entries(filters)) {
      if (options.async) env.addFilter(name, adaptFilter(filter), true);
      else env.addFilter(name, syncFilter(name, filter));
    }
  }
  return env;
}

/**
 *
 *
 * @param {string} templatePath
 * @param {*} context
 * @returns {Promise<string>}
 */
export function renderTemplate(templatePath, context) {
  // nunjucks delivers a callback render through one module-wide queue, flushed by a timer
  // that whichever render queued first set. On Cloudflare Workers a request cannot wait on
  // another request's timer, so concurrent renders are cancelled as hung. Synchronous
  // renders need no callback, so they are the default.
  if (!options.async) {
    return new Promise((resolve) => resolve(getEnv().render(remapPath(templatePath), context)));
  }

  return new Promise((resolve, reject) =>
    getEnv().render(remapPath(templatePath), context, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    }),
  );
}

/**
 *
 * @typedef {(args: {}) => Promise<string>} Template
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

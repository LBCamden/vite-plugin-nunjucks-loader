import "./polyfill";

import njk from "nunjucks";
import { adaptFilter } from "./util";

const loader = new njk.PrecompiledLoader();

export const filters = {};

/**
 *
 *
 * @param {string} templatePath
 * @param {*} context
 */
export default function renderTemplate(templatePath, context) {
  const env = new njk.Environment(loader);

  for (const [name, filter] of Object.entries(filters)) {
    env.addFilter(name, adaptFilter(filter), true);
  }

  return new Promise((resolve, reject) =>
    env.render(templatePath, context, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    })
  );
}

/**
 * Adapt an async or sync function into the filter/tag function signature expected by nunjucks.
 * 
 * @param {*} fn
 * @returns 
 */
export function adaptFilter(fn) {
  return function () {
    const args = Array.from(arguments);
    const cb = args.pop();

    Promise.resolve(fn(...args)).then(
      (res) => cb(null, res),
      (err) => cb(err, null)
    );
  }
}

/**
 * Wrap a filter for synchronous rendering, failing clearly if it returns a promise.
 *
 * @param {string} name
 * @param {*} fn
 * @returns
 */
export function syncFilter(name, fn) {
  return function () {
    const res = fn(...arguments);

    if (typeof res?.then === "function") {
      throw new Error(
        `Filter "${name}" returned a promise. Set async: true on the nunjucks loader to use async filters.`
      );
    }

    return res;
  }
}
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
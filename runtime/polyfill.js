import njk from 'nunjucks'
import * as path from 'path-webpack'

// workaround: https://github.com/mozilla/nunjucks/issues/755
/** @ts-ignore */
njk.PrecompiledLoader.prototype.resolve = function patchedResolve(from, to) {
  return path.resolve(path.dirname(from), to).replace(/^\//, '')
}

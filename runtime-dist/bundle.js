var we = typeof globalThis < "u" || typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : {};
function be(z) {
  return z && z.__esModule && Object.prototype.hasOwnProperty.call(z, "default") ? z.default : z;
}
var ye = { exports: {} };
/*! Browser bundle of nunjucks 3.2.4 (slim, only works with precompiled templates) */
(function(z, v) {
  (function(h, p) {
    z.exports = p();
  })(typeof self < "u" ? self : we, function() {
    return (
      /******/
      function(s) {
        var h = {};
        function p(u) {
          if (h[u])
            return h[u].exports;
          var n = h[u] = {
            /******/
            i: u,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return s[u].call(n.exports, n, n.exports, p), n.l = !0, n.exports;
        }
        return p.m = s, p.c = h, p.d = function(u, n, a) {
          p.o(u, n) || Object.defineProperty(u, n, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: a
            /******/
          });
        }, p.n = function(u) {
          var n = u && u.__esModule ? (
            /******/
            function() {
              return u.default;
            }
          ) : (
            /******/
            function() {
              return u;
            }
          );
          return p.d(n, "a", n), n;
        }, p.o = function(u, n) {
          return Object.prototype.hasOwnProperty.call(u, n);
        }, p.p = "", p(p.s = 6);
      }([
        /* 0 */
        /***/
        function(s, h) {
        },
        /* 1 */
        /***/
        function(s, l, p) {
          var u = Array.prototype, n = Object.prototype, a = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\\": "&#92;"
          }, O = /[&"'<>\\]/g, l = s.exports = {};
          function d(e, f) {
            return n.hasOwnProperty.call(e, f);
          }
          l.hasOwnProp = d;
          function A(e) {
            return a[e];
          }
          function B(e, f, k) {
            if (k.Update || (k = new l.TemplateError(k)), k.Update(e), !f) {
              var S = k;
              k = new Error(S.message), k.name = S.name;
            }
            return k;
          }
          l._prettifyError = B;
          function j(e, f, k) {
            var S, I;
            e instanceof Error && (I = e, e = I.name + ": " + I.message), Object.setPrototypeOf ? (S = new Error(e), Object.setPrototypeOf(S, j.prototype)) : (S = this, Object.defineProperty(S, "message", {
              enumerable: !1,
              writable: !0,
              value: e
            })), Object.defineProperty(S, "name", {
              value: "Template render error"
            }), Error.captureStackTrace && Error.captureStackTrace(S, this.constructor);
            var G;
            if (I) {
              var $ = Object.getOwnPropertyDescriptor(I, "stack");
              G = $ && ($.get || function() {
                return $.value;
              }), G || (G = function() {
                return I.stack;
              });
            } else {
              var Q = new Error(e).stack;
              G = function() {
                return Q;
              };
            }
            return Object.defineProperty(S, "stack", {
              get: function() {
                return G.call(S);
              }
            }), Object.defineProperty(S, "cause", {
              value: I
            }), S.lineno = f, S.colno = k, S.firstUpdate = !0, S.Update = function(X) {
              var Z = "(" + (X || "unknown path") + ")";
              return this.firstUpdate && (this.lineno && this.colno ? Z += " [Line " + this.lineno + ", Column " + this.colno + "]" : this.lineno && (Z += " [Line " + this.lineno + "]")), Z += `
 `, this.firstUpdate && (Z += " "), this.message = Z + (this.message || ""), this.firstUpdate = !1, this;
            }, S;
          }
          Object.setPrototypeOf ? Object.setPrototypeOf(j.prototype, Error.prototype) : j.prototype = Object.create(Error.prototype, {
            constructor: {
              value: j
            }
          }), l.TemplateError = j;
          function M(e) {
            return e.replace(O, A);
          }
          l.escape = M;
          function V(e) {
            return n.toString.call(e) === "[object Function]";
          }
          l.isFunction = V;
          function D(e) {
            return n.toString.call(e) === "[object Array]";
          }
          l.isArray = D;
          function R(e) {
            return n.toString.call(e) === "[object String]";
          }
          l.isString = R;
          function P(e) {
            return n.toString.call(e) === "[object Object]";
          }
          l.isObject = P;
          function T(e) {
            return e ? typeof e == "string" ? e.split(".") : [e] : [];
          }
          function g(e) {
            var f = T(e);
            return function(S) {
              for (var I = S, G = 0; G < f.length; G++) {
                var $ = f[G];
                if (d(I, $))
                  I = I[$];
                else
                  return;
              }
              return I;
            };
          }
          l.getAttrGetter = g;
          function w(e, f, k) {
            for (var S = {}, I = V(f) ? f : g(f), G = 0; G < e.length; G++) {
              var $ = e[G], Q = I($, G);
              if (Q === void 0 && k === !0)
                throw new TypeError('groupby: attribute "' + f + '" resolved to undefined');
              (S[Q] || (S[Q] = [])).push($);
            }
            return S;
          }
          l.groupBy = w;
          function U(e) {
            return Array.prototype.slice.call(e);
          }
          l.toArray = U;
          function H(e) {
            var f = [];
            if (!e)
              return f;
            for (var k = e.length, S = U(arguments).slice(1), I = -1; ++I < k; )
              y(S, e[I]) === -1 && f.push(e[I]);
            return f;
          }
          l.without = H;
          function J(e, f) {
            for (var k = "", S = 0; S < f; S++)
              k += e;
            return k;
          }
          l.repeat = J;
          function b(e, f, k) {
            if (e != null) {
              if (u.forEach && e.forEach === u.forEach)
                e.forEach(f, k);
              else if (e.length === +e.length)
                for (var S = 0, I = e.length; S < I; S++)
                  f.call(k, e[S], S, e);
            }
          }
          l.each = b;
          function r(e, f) {
            var k = [];
            if (e == null)
              return k;
            if (u.map && e.map === u.map)
              return e.map(f);
            for (var S = 0; S < e.length; S++)
              k[k.length] = f(e[S], S);
            return e.length === +e.length && (k.length = e.length), k;
          }
          l.map = r;
          function c(e, f, k) {
            var S = -1;
            function I() {
              S++, S < e.length ? f(e[S], S, I, k) : k();
            }
            I();
          }
          l.asyncIter = c;
          function o(e, f, k) {
            var S = x(e || {}), I = S.length, G = -1;
            function $() {
              G++;
              var Q = S[G];
              G < I ? f(Q, e[Q], G, I, $) : k();
            }
            $();
          }
          l.asyncFor = o;
          function y(e, f, k) {
            return Array.prototype.indexOf.call(e || [], f, k);
          }
          l.indexOf = y;
          function x(e) {
            var f = [];
            for (var k in e)
              d(e, k) && f.push(k);
            return f;
          }
          l.keys = x;
          function E(e) {
            return x(e).map(function(f) {
              return [f, e[f]];
            });
          }
          l._entries = E;
          function L(e) {
            return x(e).map(function(f) {
              return e[f];
            });
          }
          l._values = L;
          function F(e, f) {
            return e = e || {}, x(f).forEach(function(k) {
              e[k] = f[k];
            }), e;
          }
          l._assign = l.extend = F;
          function i(e, f) {
            if (D(f) || R(f))
              return f.indexOf(e) !== -1;
            if (P(f))
              return e in f;
            throw new Error('Cannot use "in" operator to search for "' + e + '" in unexpected types.');
          }
          l.inOperator = i;
        },
        /* 2 */
        /***/
        function(s, h, p) {
          var u = p(1), n = Array.from, a = typeof Symbol == "function" && Symbol.iterator && typeof n == "function", O = /* @__PURE__ */ function() {
            function r(o, y) {
              this.variables = /* @__PURE__ */ Object.create(null), this.parent = o, this.topLevel = !1, this.isolateWrites = y;
            }
            var c = r.prototype;
            return c.set = function(y, x, E) {
              var L = y.split("."), F = this.variables, i = this;
              if (E && (i = this.resolve(L[0], !0))) {
                i.set(y, x);
                return;
              }
              for (var e = 0; e < L.length - 1; e++) {
                var f = L[e];
                F[f] || (F[f] = {}), F = F[f];
              }
              F[L[L.length - 1]] = x;
            }, c.get = function(y) {
              var x = this.variables[y];
              return x !== void 0 ? x : null;
            }, c.lookup = function(y) {
              var x = this.parent, E = this.variables[y];
              return E !== void 0 ? E : x && x.lookup(y);
            }, c.resolve = function(y, x) {
              var E = x && this.isolateWrites ? void 0 : this.parent, L = this.variables[y];
              return L !== void 0 ? this : E && E.resolve(y);
            }, c.push = function(y) {
              return new r(this, y);
            }, c.pop = function() {
              return this.parent;
            }, r;
          }();
          function l(r, c, o) {
            return function() {
              for (var x = arguments.length, E = new Array(x), L = 0; L < x; L++)
                E[L] = arguments[L];
              var F = j(E), i, e = B(E);
              if (F > r.length)
                i = E.slice(0, r.length), E.slice(i.length, F).forEach(function(S, I) {
                  I < c.length && (e[c[I]] = S);
                }), i.push(e);
              else if (F < r.length) {
                i = E.slice(0, F);
                for (var f = F; f < r.length; f++) {
                  var k = r[f];
                  i.push(e[k]), delete e[k];
                }
                i.push(e);
              } else
                i = E;
              return o.apply(this, i);
            };
          }
          function d(r) {
            return r.__keywords = !0, r;
          }
          function A(r) {
            return r && Object.prototype.hasOwnProperty.call(r, "__keywords");
          }
          function B(r) {
            var c = r.length;
            if (c) {
              var o = r[c - 1];
              if (A(o))
                return o;
            }
            return {};
          }
          function j(r) {
            var c = r.length;
            if (c === 0)
              return 0;
            var o = r[c - 1];
            return A(o) ? c - 1 : c;
          }
          function M(r) {
            if (typeof r != "string")
              return r;
            this.val = r, this.length = r.length;
          }
          M.prototype = Object.create(String.prototype, {
            length: {
              writable: !0,
              configurable: !0,
              value: 0
            }
          }), M.prototype.valueOf = function() {
            return this.val;
          }, M.prototype.toString = function() {
            return this.val;
          };
          function V(r, c) {
            return r instanceof M ? new M(c) : c.toString();
          }
          function D(r) {
            var c = typeof r;
            return c === "string" ? new M(r) : c !== "function" ? r : function(y) {
              var x = r.apply(this, arguments);
              return typeof x == "string" ? new M(x) : x;
            };
          }
          function R(r, c) {
            return r = r ?? "", c && !(r instanceof M) && (r = u.escape(r.toString())), r;
          }
          function P(r, c, o) {
            if (r == null)
              throw new u.TemplateError("attempted to output null or undefined value", c + 1, o + 1);
            return r;
          }
          function T(r, c) {
            if (r != null)
              return typeof r[c] == "function" ? function() {
                for (var o = arguments.length, y = new Array(o), x = 0; x < o; x++)
                  y[x] = arguments[x];
                return r[c].apply(r, y);
              } : r[c];
          }
          function g(r, c, o, y) {
            if (r) {
              if (typeof r != "function")
                throw new Error("Unable to call `" + c + "`, which is not a function");
            } else throw new Error("Unable to call `" + c + "`, which is undefined or falsey");
            return r.apply(o, y);
          }
          function w(r, c, o) {
            var y = c.lookup(o);
            return y !== void 0 ? y : r.lookup(o);
          }
          function U(r, c, o) {
            return r.lineno ? r : new u.TemplateError(r, c, o);
          }
          function H(r, c, o, y) {
            if (u.isArray(r)) {
              var x = r.length;
              u.asyncIter(r, function(L, F, i) {
                switch (c) {
                  case 1:
                    o(L, F, x, i);
                    break;
                  case 2:
                    o(L[0], L[1], F, x, i);
                    break;
                  case 3:
                    o(L[0], L[1], L[2], F, x, i);
                    break;
                  default:
                    L.push(F, x, i), o.apply(this, L);
                }
              }, y);
            } else
              u.asyncFor(r, function(L, F, i, e, f) {
                o(L, F, i, e, f);
              }, y);
          }
          function J(r, c, o, y) {
            var x = 0, E, L;
            function F(I, G) {
              x++, L[I] = G, x === E && y(null, L.join(""));
            }
            if (u.isArray(r))
              if (E = r.length, L = new Array(E), E === 0)
                y(null, "");
              else
                for (var i = 0; i < r.length; i++) {
                  var e = r[i];
                  switch (c) {
                    case 1:
                      o(e, i, E, F);
                      break;
                    case 2:
                      o(e[0], e[1], i, E, F);
                      break;
                    case 3:
                      o(e[0], e[1], e[2], i, E, F);
                      break;
                    default:
                      e.push(i, E, F), o.apply(this, e);
                  }
                }
            else {
              var f = u.keys(r || {});
              if (E = f.length, L = new Array(E), E === 0)
                y(null, "");
              else
                for (var k = 0; k < f.length; k++) {
                  var S = f[k];
                  o(S, r[S], k, E, F);
                }
            }
          }
          function b(r) {
            return typeof r != "object" || r === null || u.isArray(r) ? r : a && Symbol.iterator in r ? n(r) : r;
          }
          s.exports = {
            Frame: O,
            makeMacro: l,
            makeKeywordArgs: d,
            numArgs: j,
            suppressValue: R,
            ensureDefined: P,
            memberLookup: T,
            contextOrFrameLookup: w,
            callWrap: g,
            handleError: U,
            isArray: u.isArray,
            keys: u.keys,
            SafeString: M,
            copySafeness: V,
            markSafe: D,
            asyncEach: H,
            asyncAll: J,
            inOperator: u.inOperator,
            fromIterator: b
          };
        },
        /* 3 */
        /***/
        function(s, h, p) {
          function u(l, d) {
            l.prototype = Object.create(d.prototype), l.prototype.constructor = l, n(l, d);
          }
          function n(l, d) {
            return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(B, j) {
              return B.__proto__ = j, B;
            }, n(l, d);
          }
          var a = p(4), O = /* @__PURE__ */ function(l) {
            u(d, l);
            function d(B) {
              var j;
              return j = l.call(this) || this, j.precompiled = B || {}, j;
            }
            var A = d.prototype;
            return A.getSource = function(j) {
              return this.precompiled[j] ? {
                src: {
                  type: "code",
                  obj: this.precompiled[j]
                },
                path: j
              } : null;
            }, d;
          }(a);
          s.exports = {
            PrecompiledLoader: O
          };
        },
        /* 4 */
        /***/
        function(s, h, p) {
          function u(d, A) {
            d.prototype = Object.create(A.prototype), d.prototype.constructor = d, n(d, A);
          }
          function n(d, A) {
            return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(j, M) {
              return j.__proto__ = M, j;
            }, n(d, A);
          }
          var a = p(0), O = p(5), l = O.EmitterObj;
          s.exports = /* @__PURE__ */ function(d) {
            u(A, d);
            function A() {
              return d.apply(this, arguments) || this;
            }
            var B = A.prototype;
            return B.resolve = function(M, V) {
              return a.resolve(a.dirname(M), V);
            }, B.isRelative = function(M) {
              return M.indexOf("./") === 0 || M.indexOf("../") === 0;
            }, A;
          }(l);
        },
        /* 5 */
        /***/
        function(s, h, p) {
          function u(R, P) {
            for (var T = 0; T < P.length; T++) {
              var g = P[T];
              g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(R, a(g.key), g);
            }
          }
          function n(R, P, T) {
            return P && u(R.prototype, P), Object.defineProperty(R, "prototype", { writable: !1 }), R;
          }
          function a(R) {
            var P = O(R, "string");
            return typeof P == "symbol" ? P : String(P);
          }
          function O(R, P) {
            if (typeof R != "object" || R === null) return R;
            var T = R[Symbol.toPrimitive];
            if (T !== void 0) {
              var g = T.call(R, P);
              if (typeof g != "object") return g;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(R);
          }
          function l(R, P) {
            R.prototype = Object.create(P.prototype), R.prototype.constructor = R, d(R, P);
          }
          function d(R, P) {
            return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, w) {
              return g.__proto__ = w, g;
            }, d(R, P);
          }
          var A = p(13), B = p(1);
          function j(R, P) {
            return typeof R != "function" || typeof P != "function" ? P : function() {
              var g = this.parent;
              this.parent = R;
              var w = P.apply(this, arguments);
              return this.parent = g, w;
            };
          }
          function M(R, P, T) {
            T = T || {}, B.keys(T).forEach(function(w) {
              T[w] = j(R.prototype[w], T[w]);
            });
            var g = /* @__PURE__ */ function(w) {
              l(U, w);
              function U() {
                return w.apply(this, arguments) || this;
              }
              return n(U, [{
                key: "typename",
                get: function() {
                  return P;
                }
              }]), U;
            }(R);
            return B._assign(g.prototype, T), g;
          }
          var V = /* @__PURE__ */ function() {
            function R() {
              this.init.apply(this, arguments);
            }
            var P = R.prototype;
            return P.init = function() {
            }, R.extend = function(g, w) {
              return typeof g == "object" && (w = g, g = "anonymous"), M(this, g, w);
            }, n(R, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), R;
          }(), D = /* @__PURE__ */ function(R) {
            l(P, R);
            function P() {
              var g, w;
              return w = R.call(this) || this, (g = w).init.apply(g, arguments), w;
            }
            var T = P.prototype;
            return T.init = function() {
            }, P.extend = function(w, U) {
              return typeof w == "object" && (U = w, w = "anonymous"), M(this, w, U);
            }, n(P, [{
              key: "typename",
              get: function() {
                return this.constructor.name;
              }
            }]), P;
          }(A);
          s.exports = {
            Obj: V,
            EmitterObj: D
          };
        },
        /* 6 */
        /***/
        function(s, h, p) {
          var u = p(1), n = p(7), a = n.Environment, O = n.Template, l = p(4), d = p(3), A = p(0), B = p(0), j = p(0), M = p(0), V = p(2), D = p(0), R = p(17), P;
          function T(g, w) {
            w = w || {}, u.isObject(g) && (w = g, g = null);
            var U;
            return d.FileSystemLoader ? U = new d.FileSystemLoader(g, {
              watch: w.watch,
              noCache: w.noCache
            }) : d.WebLoader && (U = new d.WebLoader(g, {
              useCache: w.web && w.web.useCache,
              async: w.web && w.web.async
            })), P = new a(U, w), w && w.express && P.express(w.express), P;
          }
          s.exports = {
            Environment: a,
            Template: O,
            Loader: l,
            FileSystemLoader: d.FileSystemLoader,
            NodeResolveLoader: d.NodeResolveLoader,
            PrecompiledLoader: d.PrecompiledLoader,
            WebLoader: d.WebLoader,
            compiler: B,
            parser: j,
            lexer: M,
            runtime: V,
            lib: u,
            nodes: D,
            installJinjaCompat: R,
            configure: T,
            reset: function() {
              P = void 0;
            },
            compile: function(w, U, H, J) {
              return P || T(), new O(w, U, H, J);
            },
            render: function(w, U, H) {
              return P || T(), P.render(w, U, H);
            },
            renderString: function(w, U, H) {
              return P || T(), P.renderString(w, U, H);
            },
            precompile: A ? A.precompile : void 0,
            precompileString: A ? A.precompileString : void 0
          };
        },
        /* 7 */
        /***/
        function(s, h, p) {
          function u(x, E) {
            x.prototype = Object.create(E.prototype), x.prototype.constructor = x, n(x, E);
          }
          function n(x, E) {
            return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, i) {
              return F.__proto__ = i, F;
            }, n(x, E);
          }
          var a = p(8), O = p(11), l = p(1), d = p(0), A = p(12), B = p(3), j = B.FileSystemLoader, M = B.WebLoader, V = B.PrecompiledLoader, D = p(14), R = p(15), P = p(5), T = P.Obj, g = P.EmitterObj, w = p(2), U = w.handleError, H = w.Frame, J = p(16);
          function b(x, E, L) {
            a(function() {
              x(E, L);
            });
          }
          var r = {
            type: "code",
            obj: {
              root: function(E, L, F, i, e) {
                try {
                  e(null, "");
                } catch (f) {
                  e(U(f, null, null));
                }
              }
            }
          }, c = /* @__PURE__ */ function(x) {
            u(E, x);
            function E() {
              return x.apply(this, arguments) || this;
            }
            var L = E.prototype;
            return L.init = function(i, e) {
              var f = this;
              e = this.opts = e || {}, this.opts.dev = !!e.dev, this.opts.autoescape = e.autoescape != null ? e.autoescape : !0, this.opts.throwOnUndefined = !!e.throwOnUndefined, this.opts.trimBlocks = !!e.trimBlocks, this.opts.lstripBlocks = !!e.lstripBlocks, this.loaders = [], i ? this.loaders = l.isArray(i) ? i : [i] : j ? this.loaders = [new j("views")] : M && (this.loaders = [new M("/views")]), typeof globalThis < "u" && globalThis.nunjucksPrecompiled && this.loaders.unshift(new V(globalThis.nunjucksPrecompiled)), this._initLoaders(), this.globals = R(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], l._entries(A).forEach(function(k) {
                var S = k[0], I = k[1];
                return f.addFilter(S, I);
              }), l._entries(D).forEach(function(k) {
                var S = k[0], I = k[1];
                return f.addTest(S, I);
              });
            }, L._initLoaders = function() {
              var i = this;
              this.loaders.forEach(function(e) {
                e.cache = {}, typeof e.on == "function" && (e.on("update", function(f, k) {
                  e.cache[f] = null, i.emit("update", f, k, e);
                }), e.on("load", function(f, k) {
                  i.emit("load", f, k, e);
                }));
              });
            }, L.invalidateCache = function() {
              this.loaders.forEach(function(i) {
                i.cache = {};
              });
            }, L.addExtension = function(i, e) {
              return e.__name = i, this.extensions[i] = e, this.extensionsList.push(e), this;
            }, L.removeExtension = function(i) {
              var e = this.getExtension(i);
              e && (this.extensionsList = l.without(this.extensionsList, e), delete this.extensions[i]);
            }, L.getExtension = function(i) {
              return this.extensions[i];
            }, L.hasExtension = function(i) {
              return !!this.extensions[i];
            }, L.addGlobal = function(i, e) {
              return this.globals[i] = e, this;
            }, L.getGlobal = function(i) {
              if (typeof this.globals[i] > "u")
                throw new Error("global not found: " + i);
              return this.globals[i];
            }, L.addFilter = function(i, e, f) {
              var k = e;
              return f && this.asyncFilters.push(i), this.filters[i] = k, this;
            }, L.getFilter = function(i) {
              if (!this.filters[i])
                throw new Error("filter not found: " + i);
              return this.filters[i];
            }, L.addTest = function(i, e) {
              return this.tests[i] = e, this;
            }, L.getTest = function(i) {
              if (!this.tests[i])
                throw new Error("test not found: " + i);
              return this.tests[i];
            }, L.resolveTemplate = function(i, e, f) {
              var k = i.isRelative && e ? i.isRelative(f) : !1;
              return k && i.resolve ? i.resolve(e, f) : f;
            }, L.getTemplate = function(i, e, f, k, S) {
              var I = this, G = this, $ = null;
              if (i && i.raw && (i = i.raw), l.isFunction(f) && (S = f, f = null, e = e || !1), l.isFunction(e) && (S = e, e = !1), i instanceof y)
                $ = i;
              else {
                if (typeof i != "string")
                  throw new Error("template names must be a string: " + i);
                for (var Q = 0; Q < this.loaders.length; Q++) {
                  var ee = this.loaders[Q];
                  if ($ = ee.cache[this.resolveTemplate(ee, f, i)], $)
                    break;
                }
              }
              if ($)
                if (e && $.compile(), S) {
                  S(null, $);
                  return;
                } else
                  return $;
              var X, Z = function(ue, te) {
                if (!te && !ue && !k && (ue = new Error("template not found: " + i)), ue)
                  if (S) {
                    S(ue);
                    return;
                  } else
                    throw ue;
                var re;
                te ? (re = new y(te.src, I, te.path, e), te.noCache || (te.loader.cache[i] = re)) : re = new y(r, I, "", e), S ? S(null, re) : X = re;
              };
              return l.asyncIter(this.loaders, function(se, ue, te, re) {
                function le(ce, ae) {
                  ce ? re(ce) : ae ? (ae.loader = se, re(null, ae)) : te();
                }
                i = G.resolveTemplate(se, f, i), se.async ? se.getSource(i, le) : le(null, se.getSource(i));
              }, Z), X;
            }, L.express = function(i) {
              return J(this, i);
            }, L.render = function(i, e, f) {
              l.isFunction(e) && (f = e, e = null);
              var k = null;
              return this.getTemplate(i, function(S, I) {
                if (S && f)
                  b(f, S);
                else {
                  if (S)
                    throw S;
                  k = I.render(e, f);
                }
              }), k;
            }, L.renderString = function(i, e, f, k) {
              l.isFunction(f) && (k = f, f = {}), f = f || {};
              var S = new y(i, this, f.path);
              return S.render(e, k);
            }, L.waterfall = function(i, e, f) {
              return O(i, e, f);
            }, E;
          }(g), o = /* @__PURE__ */ function(x) {
            u(E, x);
            function E() {
              return x.apply(this, arguments) || this;
            }
            var L = E.prototype;
            return L.init = function(i, e, f) {
              var k = this;
              this.env = f || new c(), this.ctx = l.extend({}, i), this.blocks = {}, this.exported = [], l.keys(e).forEach(function(S) {
                k.addBlock(S, e[S]);
              });
            }, L.lookup = function(i) {
              return i in this.env.globals && !(i in this.ctx) ? this.env.globals[i] : this.ctx[i];
            }, L.setVariable = function(i, e) {
              this.ctx[i] = e;
            }, L.getVariables = function() {
              return this.ctx;
            }, L.addBlock = function(i, e) {
              return this.blocks[i] = this.blocks[i] || [], this.blocks[i].push(e), this;
            }, L.getBlock = function(i) {
              if (!this.blocks[i])
                throw new Error('unknown block "' + i + '"');
              return this.blocks[i][0];
            }, L.getSuper = function(i, e, f, k, S, I) {
              var G = l.indexOf(this.blocks[e] || [], f), $ = this.blocks[e][G + 1], Q = this;
              if (G === -1 || !$)
                throw new Error('no super block available for "' + e + '"');
              $(i, Q, k, S, I);
            }, L.addExport = function(i) {
              this.exported.push(i);
            }, L.getExported = function() {
              var i = this, e = {};
              return this.exported.forEach(function(f) {
                e[f] = i.ctx[f];
              }), e;
            }, E;
          }(T), y = /* @__PURE__ */ function(x) {
            u(E, x);
            function E() {
              return x.apply(this, arguments) || this;
            }
            var L = E.prototype;
            return L.init = function(i, e, f, k) {
              if (this.env = e || new c(), l.isObject(i))
                switch (i.type) {
                  case "code":
                    this.tmplProps = i.obj;
                    break;
                  case "string":
                    this.tmplStr = i.obj;
                    break;
                  default:
                    throw new Error("Unexpected template object type " + i.type + "; expected 'code', or 'string'");
                }
              else if (l.isString(i))
                this.tmplStr = i;
              else
                throw new Error("src must be a string or an object describing the source");
              if (this.path = f, k)
                try {
                  this._compile();
                } catch (S) {
                  throw l._prettifyError(this.path, this.env.opts.dev, S);
                }
              else
                this.compiled = !1;
            }, L.render = function(i, e, f) {
              var k = this;
              typeof i == "function" ? (f = i, i = {}) : typeof e == "function" && (f = e, e = null);
              var S = !e;
              try {
                this.compile();
              } catch (X) {
                var I = l._prettifyError(this.path, this.env.opts.dev, X);
                if (f)
                  return b(f, I);
                throw I;
              }
              var G = new o(i || {}, this.blocks, this.env), $ = e ? e.push(!0) : new H();
              $.topLevel = !0;
              var Q = null, ee = !1;
              return this.rootRenderFunc(this.env, G, $, w, function(X, Z) {
                if (!(ee && f && typeof Z < "u"))
                  if (X && (X = l._prettifyError(k.path, k.env.opts.dev, X), ee = !0), f)
                    S ? b(f, X, Z) : f(X, Z);
                  else {
                    if (X)
                      throw X;
                    Q = Z;
                  }
              }), Q;
            }, L.getExported = function(i, e, f) {
              typeof i == "function" && (f = i, i = {}), typeof e == "function" && (f = e, e = null);
              try {
                this.compile();
              } catch (I) {
                if (f)
                  return f(I);
                throw I;
              }
              var k = e ? e.push() : new H();
              k.topLevel = !0;
              var S = new o(i || {}, this.blocks, this.env);
              this.rootRenderFunc(this.env, S, k, w, function(I) {
                I ? f(I, null) : f(null, S.getExported());
              });
            }, L.compile = function() {
              this.compiled || this._compile();
            }, L._compile = function() {
              var i;
              if (this.tmplProps)
                i = this.tmplProps;
              else {
                var e = d.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), f = new Function(e);
                i = f();
              }
              this.blocks = this._getBlocks(i), this.rootRenderFunc = i.root, this.compiled = !0;
            }, L._getBlocks = function(i) {
              var e = {};
              return l.keys(i).forEach(function(f) {
                f.slice(0, 2) === "b_" && (e[f.slice(2)] = i[f]);
              }), e;
            }, E;
          }(T);
          s.exports = {
            Environment: c,
            Template: y
          };
        },
        /* 8 */
        /***/
        function(s, h, p) {
          var u = p(9), n = [], a = [], O = u.makeRequestCallFromTimer(l);
          function l() {
            if (a.length)
              throw a.shift();
          }
          s.exports = d;
          function d(B) {
            var j;
            n.length ? j = n.pop() : j = new A(), j.task = B, u(j);
          }
          function A() {
            this.task = null;
          }
          A.prototype.call = function() {
            try {
              this.task.call();
            } catch (B) {
              d.onerror ? d.onerror(B) : (a.push(B), O());
            } finally {
              this.task = null, n[n.length] = this;
            }
          };
        },
        /* 9 */
        /***/
        function(s, h, p) {
          (function(u) {
            s.exports = n;
            function n(D) {
              a.length || O(), a[a.length] = D;
            }
            var a = [], O, l = 0, d = 1024;
            function A() {
              for (; l < a.length; ) {
                var D = l;
                if (l = l + 1, a[D].call(), l > d) {
                  for (var R = 0, P = a.length - l; R < P; R++)
                    a[R] = a[R + l];
                  a.length -= l, l = 0;
                }
              }
              a.length = 0, l = 0;
            }
            var B = typeof u < "u" ? u : self, j = B.MutationObserver || B.WebKitMutationObserver;
            typeof j == "function" ? O = M(A) : O = V(A), n.requestFlush = O;
            function M(D) {
              var R = 1, P = new j(D), T = document.createTextNode("");
              return P.observe(T, { characterData: !0 }), function() {
                R = -R, T.data = R;
              };
            }
            function V(D) {
              return function() {
                var P = setTimeout(g, 0), T = setInterval(g, 50);
                function g() {
                  clearTimeout(P), clearInterval(T), D();
                }
              };
            }
            n.makeRequestCallFromTimer = V;
          }).call(h, p(10));
        },
        /* 10 */
        /***/
        function(s, h) {
          var p;
          p = /* @__PURE__ */ function() {
            return this;
          }();
          try {
            p = p || Function("return this")() || (0, eval)("this");
          } catch {
            typeof globalThis == "object" && (p = globalThis);
          }
          s.exports = p;
        },
        /* 11 */
        /***/
        function(s, h, p) {
          var u, n;
          (function(a) {
            var O = function() {
              var j = Array.prototype.slice.call(arguments);
              typeof j[0] == "function" && j[0].apply(null, j.splice(1));
            }, l = function(j) {
              typeof setImmediate == "function" ? setImmediate(j) : typeof process < "u" && process.nextTick ? process.nextTick(j) : setTimeout(j, 0);
            }, d = function(j) {
              var M = function(V) {
                var D = function() {
                  return j.length && j[V].apply(null, arguments), D.next();
                };
                return D.next = function() {
                  return V < j.length - 1 ? M(V + 1) : null;
                }, D;
              };
              return M(0);
            }, A = Array.isArray || function(j) {
              return Object.prototype.toString.call(j) === "[object Array]";
            }, B = function(j, M, V) {
              var D = V ? l : O;
              if (M = M || function() {
              }, !A(j)) {
                var R = new Error("First argument to waterfall must be an array of functions");
                return M(R);
              }
              if (!j.length)
                return M();
              var P = function(T) {
                return function(g) {
                  if (g)
                    M.apply(null, arguments), M = function() {
                    };
                  else {
                    var w = Array.prototype.slice.call(arguments, 1), U = T.next();
                    U ? w.push(P(U)) : w.push(M), D(function() {
                      T.apply(null, w);
                    });
                  }
                };
              };
              P(d(j))();
            };
            u = [], n = (function() {
              return B;
            }).apply(h, u), n !== void 0 && (s.exports = n);
          })();
        },
        /* 12 */
        /***/
        function(s, a, p) {
          var u = p(1), n = p(2), a = s.exports = {};
          function O(t, m) {
            return t == null || t === !1 ? m : t;
          }
          a.abs = Math.abs;
          function l(t) {
            return t !== t;
          }
          function d(t, m, C) {
            var _, W = [], K = [];
            for (_ = 0; _ < t.length; _++)
              _ % m === 0 && K.length && (W.push(K), K = []), K.push(t[_]);
            if (K.length) {
              if (C)
                for (_ = K.length; _ < m; _++)
                  K.push(C);
              W.push(K);
            }
            return W;
          }
          a.batch = d;
          function A(t) {
            t = O(t, "");
            var m = t.toLowerCase();
            return n.copySafeness(t, m.charAt(0).toUpperCase() + m.slice(1));
          }
          a.capitalize = A;
          function B(t, m) {
            if (t = O(t, ""), m = m || 80, t.length >= m)
              return t;
            var C = m - t.length, _ = u.repeat(" ", C / 2 - C % 2), W = u.repeat(" ", C / 2);
            return n.copySafeness(t, _ + t + W);
          }
          a.center = B;
          function j(t, m, C) {
            return C ? t || m : t !== void 0 ? t : m;
          }
          a.default = j;
          function M(t, m, C) {
            if (!u.isObject(t))
              throw new u.TemplateError("dictsort filter: val must be an object");
            var _ = [];
            for (var W in t)
              _.push([W, t[W]]);
            var K;
            if (C === void 0 || C === "key")
              K = 0;
            else if (C === "value")
              K = 1;
            else
              throw new u.TemplateError("dictsort filter: You can only sort by either key or value");
            return _.sort(function(q, N) {
              var Y = q[K], ne = N[K];
              return m || (u.isString(Y) && (Y = Y.toUpperCase()), u.isString(ne) && (ne = ne.toUpperCase())), Y > ne ? 1 : Y === ne ? 0 : -1;
            }), _;
          }
          a.dictsort = M;
          function V(t, m) {
            return JSON.stringify(t, null, m);
          }
          a.dump = V;
          function D(t) {
            return t instanceof n.SafeString ? t : (t = t ?? "", n.markSafe(u.escape(t.toString())));
          }
          a.escape = D;
          function R(t) {
            return t instanceof n.SafeString ? t : (t = t ?? "", n.markSafe(t.toString()));
          }
          a.safe = R;
          function P(t) {
            return t[0];
          }
          a.first = P;
          function T(t) {
            return t = t ?? "", n.markSafe(u.escape(t.toString()));
          }
          a.forceescape = T;
          function g(t, m) {
            return u.groupBy(t, m, this.env.opts.throwOnUndefined);
          }
          a.groupby = g;
          function w(t, m, C) {
            if (t = O(t, ""), t === "")
              return "";
            m = m || 4;
            var _ = t.split(`
`), W = u.repeat(" ", m), K = _.map(function(q, N) {
              return N === 0 && !C ? q : "" + W + q;
            }).join(`
`);
            return n.copySafeness(t, K);
          }
          a.indent = w;
          function U(t, m, C) {
            return m = m || "", C && (t = u.map(t, function(_) {
              return _[C];
            })), t.join(m);
          }
          a.join = U;
          function H(t) {
            return t[t.length - 1];
          }
          a.last = H;
          function J(t) {
            var m = O(t, "");
            return m !== void 0 ? typeof Map == "function" && m instanceof Map || typeof Set == "function" && m instanceof Set ? m.size : u.isObject(m) && !(m instanceof n.SafeString) ? u.keys(m).length : m.length : 0;
          }
          a.length = J;
          function b(t) {
            if (u.isString(t))
              return t.split("");
            if (u.isObject(t))
              return u._entries(t || {}).map(function(m) {
                var C = m[0], _ = m[1];
                return {
                  key: C,
                  value: _
                };
              });
            if (u.isArray(t))
              return t;
            throw new u.TemplateError("list filter: type not iterable");
          }
          a.list = b;
          function r(t) {
            return t = O(t, ""), t.toLowerCase();
          }
          a.lower = r;
          function c(t) {
            return t == null ? "" : n.copySafeness(t, t.replace(/\r\n|\n/g, `<br />
`));
          }
          a.nl2br = c;
          function o(t) {
            return t[Math.floor(Math.random() * t.length)];
          }
          a.random = o;
          function y(t) {
            function m(C, _, W) {
              _ === void 0 && (_ = "truthy");
              var K = this, q = K.env.getTest(_);
              return u.toArray(C).filter(function(Y) {
                return q.call(K, Y, W) === t;
              });
            }
            return m;
          }
          a.reject = y(!1);
          function x(t, m) {
            return t.filter(function(C) {
              return !C[m];
            });
          }
          a.rejectattr = x, a.select = y(!0);
          function E(t, m) {
            return t.filter(function(C) {
              return !!C[m];
            });
          }
          a.selectattr = E;
          function L(t, m, C, _) {
            var W = t;
            if (m instanceof RegExp)
              return t.replace(m, C);
            typeof _ > "u" && (_ = -1);
            var K = "";
            if (typeof m == "number")
              m = "" + m;
            else if (typeof m != "string")
              return t;
            if (typeof t == "number" && (t = "" + t), typeof t != "string" && !(t instanceof n.SafeString))
              return t;
            if (m === "")
              return K = C + t.split("").join(C) + C, n.copySafeness(t, K);
            var q = t.indexOf(m);
            if (_ === 0 || q === -1)
              return t;
            for (var N = 0, Y = 0; q > -1 && (_ === -1 || Y < _); )
              K += t.substring(N, q) + C, N = q + m.length, Y++, q = t.indexOf(m, N);
            return N < t.length && (K += t.substring(N)), n.copySafeness(W, K);
          }
          a.replace = L;
          function F(t) {
            var m;
            return u.isString(t) ? m = b(t) : m = u.map(t, function(C) {
              return C;
            }), m.reverse(), u.isString(t) ? n.copySafeness(t, m.join("")) : m;
          }
          a.reverse = F;
          function i(t, m, C) {
            m = m || 0;
            var _ = Math.pow(10, m), W;
            return C === "ceil" ? W = Math.ceil : C === "floor" ? W = Math.floor : W = Math.round, W(t * _) / _;
          }
          a.round = i;
          function e(t, m, C) {
            for (var _ = Math.floor(t.length / m), W = t.length % m, K = [], q = 0, N = 0; N < m; N++) {
              var Y = q + N * _;
              N < W && q++;
              var ne = q + (N + 1) * _, oe = t.slice(Y, ne);
              C && N >= W && oe.push(C), K.push(oe);
            }
            return K;
          }
          a.slice = e;
          function f(t, m, C) {
            return C === void 0 && (C = 0), m && (t = u.map(t, function(_) {
              return _[m];
            })), C + t.reduce(function(_, W) {
              return _ + W;
            }, 0);
          }
          a.sum = f, a.sort = n.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(m, C, _, W) {
            var K = this, q = u.map(m, function(Y) {
              return Y;
            }), N = u.getAttrGetter(W);
            return q.sort(function(Y, ne) {
              var oe = W ? N(Y) : Y, fe = W ? N(ne) : ne;
              if (K.env.opts.throwOnUndefined && W && (oe === void 0 || fe === void 0))
                throw new TypeError('sort: attribute "' + W + '" resolved to undefined');
              return !_ && u.isString(oe) && u.isString(fe) && (oe = oe.toLowerCase(), fe = fe.toLowerCase()), oe < fe ? C ? 1 : -1 : oe > fe ? C ? -1 : 1 : 0;
            }), q;
          });
          function k(t) {
            return n.copySafeness(t, t);
          }
          a.string = k;
          function S(t, m) {
            t = O(t, "");
            var C = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, _ = G(t.replace(C, "")), W = "";
            return m ? W = _.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : W = _.replace(/\s+/gi, " "), n.copySafeness(t, W);
          }
          a.striptags = S;
          function I(t) {
            t = O(t, "");
            var m = t.split(" ").map(function(C) {
              return A(C);
            });
            return n.copySafeness(t, m.join(" "));
          }
          a.title = I;
          function G(t) {
            return n.copySafeness(t, t.replace(/^\s*|\s*$/g, ""));
          }
          a.trim = G;
          function $(t, m, C, _) {
            var W = t;
            if (t = O(t, ""), m = m || 255, t.length <= m)
              return t;
            if (C)
              t = t.substring(0, m);
            else {
              var K = t.lastIndexOf(" ", m);
              K === -1 && (K = m), t = t.substring(0, K);
            }
            return t += _ ?? "...", n.copySafeness(W, t);
          }
          a.truncate = $;
          function Q(t) {
            return t = O(t, ""), t.toUpperCase();
          }
          a.upper = Q;
          function ee(t) {
            var m = encodeURIComponent;
            if (u.isString(t))
              return m(t);
            var C = u.isArray(t) ? t : u._entries(t);
            return C.map(function(_) {
              var W = _[0], K = _[1];
              return m(W) + "=" + m(K);
            }).join("&");
          }
          a.urlencode = ee;
          var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, se = /^https?:\/\/.*$/, ue = /^www\./, te = /\.(?:org|net|com)(?:\:|\/|$)/;
          function re(t, m, C) {
            l(m) && (m = 1 / 0);
            var _ = C === !0 ? ' rel="nofollow"' : "", W = t.split(/(\s+)/).filter(function(K) {
              return K && K.length;
            }).map(function(K) {
              var q = K.match(X), N = q ? q[1] : K, Y = N.substr(0, m);
              return se.test(N) ? '<a href="' + N + '"' + _ + ">" + Y + "</a>" : ue.test(N) ? '<a href="http://' + N + '"' + _ + ">" + Y + "</a>" : Z.test(N) ? '<a href="mailto:' + N + '">' + N + "</a>" : te.test(N) ? '<a href="http://' + N + '"' + _ + ">" + Y + "</a>" : K;
            });
            return W.join("");
          }
          a.urlize = re;
          function le(t) {
            t = O(t, "");
            var m = t ? t.match(/\w+/g) : null;
            return m ? m.length : null;
          }
          a.wordcount = le;
          function ce(t, m) {
            var C = parseFloat(t);
            return l(C) ? m : C;
          }
          a.float = ce;
          var ae = n.makeMacro(["value", "default", "base"], [], function(m, C, _) {
            _ === void 0 && (_ = 10);
            var W = parseInt(m, _);
            return l(W) ? C : W;
          });
          a.int = ae, a.d = a.default, a.e = a.escape;
        },
        /* 13 */
        /***/
        function(s, h, p) {
          var u = typeof Reflect == "object" ? Reflect : null, n = u && typeof u.apply == "function" ? u.apply : function(r, c, o) {
            return Function.prototype.apply.call(r, c, o);
          }, a;
          u && typeof u.ownKeys == "function" ? a = u.ownKeys : Object.getOwnPropertySymbols ? a = function(r) {
            return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r));
          } : a = function(r) {
            return Object.getOwnPropertyNames(r);
          };
          function O(b) {
            console && console.warn && console.warn(b);
          }
          var l = Number.isNaN || function(r) {
            return r !== r;
          };
          function d() {
            d.init.call(this);
          }
          s.exports = d, s.exports.once = U, d.EventEmitter = d, d.prototype._events = void 0, d.prototype._eventsCount = 0, d.prototype._maxListeners = void 0;
          var A = 10;
          function B(b) {
            if (typeof b != "function")
              throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof b);
          }
          Object.defineProperty(d, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return A;
            },
            set: function(b) {
              if (typeof b != "number" || b < 0 || l(b))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + b + ".");
              A = b;
            }
          }), d.init = function() {
            (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, d.prototype.setMaxListeners = function(r) {
            if (typeof r != "number" || r < 0 || l(r))
              throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
            return this._maxListeners = r, this;
          };
          function j(b) {
            return b._maxListeners === void 0 ? d.defaultMaxListeners : b._maxListeners;
          }
          d.prototype.getMaxListeners = function() {
            return j(this);
          }, d.prototype.emit = function(r) {
            for (var c = [], o = 1; o < arguments.length; o++) c.push(arguments[o]);
            var y = r === "error", x = this._events;
            if (x !== void 0)
              y = y && x.error === void 0;
            else if (!y)
              return !1;
            if (y) {
              var E;
              if (c.length > 0 && (E = c[0]), E instanceof Error)
                throw E;
              var L = new Error("Unhandled error." + (E ? " (" + E.message + ")" : ""));
              throw L.context = E, L;
            }
            var F = x[r];
            if (F === void 0)
              return !1;
            if (typeof F == "function")
              n(F, this, c);
            else
              for (var i = F.length, e = T(F, i), o = 0; o < i; ++o)
                n(e[o], this, c);
            return !0;
          };
          function M(b, r, c, o) {
            var y, x, E;
            if (B(c), x = b._events, x === void 0 ? (x = b._events = /* @__PURE__ */ Object.create(null), b._eventsCount = 0) : (x.newListener !== void 0 && (b.emit(
              "newListener",
              r,
              c.listener ? c.listener : c
            ), x = b._events), E = x[r]), E === void 0)
              E = x[r] = c, ++b._eventsCount;
            else if (typeof E == "function" ? E = x[r] = o ? [c, E] : [E, c] : o ? E.unshift(c) : E.push(c), y = j(b), y > 0 && E.length > y && !E.warned) {
              E.warned = !0;
              var L = new Error("Possible EventEmitter memory leak detected. " + E.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              L.name = "MaxListenersExceededWarning", L.emitter = b, L.type = r, L.count = E.length, O(L);
            }
            return b;
          }
          d.prototype.addListener = function(r, c) {
            return M(this, r, c, !1);
          }, d.prototype.on = d.prototype.addListener, d.prototype.prependListener = function(r, c) {
            return M(this, r, c, !0);
          };
          function V() {
            if (!this.fired)
              return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function D(b, r, c) {
            var o = { fired: !1, wrapFn: void 0, target: b, type: r, listener: c }, y = V.bind(o);
            return y.listener = c, o.wrapFn = y, y;
          }
          d.prototype.once = function(r, c) {
            return B(c), this.on(r, D(this, r, c)), this;
          }, d.prototype.prependOnceListener = function(r, c) {
            return B(c), this.prependListener(r, D(this, r, c)), this;
          }, d.prototype.removeListener = function(r, c) {
            var o, y, x, E, L;
            if (B(c), y = this._events, y === void 0)
              return this;
            if (o = y[r], o === void 0)
              return this;
            if (o === c || o.listener === c)
              --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete y[r], y.removeListener && this.emit("removeListener", r, o.listener || c));
            else if (typeof o != "function") {
              for (x = -1, E = o.length - 1; E >= 0; E--)
                if (o[E] === c || o[E].listener === c) {
                  L = o[E].listener, x = E;
                  break;
                }
              if (x < 0)
                return this;
              x === 0 ? o.shift() : g(o, x), o.length === 1 && (y[r] = o[0]), y.removeListener !== void 0 && this.emit("removeListener", r, L || c);
            }
            return this;
          }, d.prototype.off = d.prototype.removeListener, d.prototype.removeAllListeners = function(r) {
            var c, o, y;
            if (o = this._events, o === void 0)
              return this;
            if (o.removeListener === void 0)
              return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : o[r] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete o[r]), this;
            if (arguments.length === 0) {
              var x = Object.keys(o), E;
              for (y = 0; y < x.length; ++y)
                E = x[y], E !== "removeListener" && this.removeAllListeners(E);
              return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
            }
            if (c = o[r], typeof c == "function")
              this.removeListener(r, c);
            else if (c !== void 0)
              for (y = c.length - 1; y >= 0; y--)
                this.removeListener(r, c[y]);
            return this;
          };
          function R(b, r, c) {
            var o = b._events;
            if (o === void 0)
              return [];
            var y = o[r];
            return y === void 0 ? [] : typeof y == "function" ? c ? [y.listener || y] : [y] : c ? w(y) : T(y, y.length);
          }
          d.prototype.listeners = function(r) {
            return R(this, r, !0);
          }, d.prototype.rawListeners = function(r) {
            return R(this, r, !1);
          }, d.listenerCount = function(b, r) {
            return typeof b.listenerCount == "function" ? b.listenerCount(r) : P.call(b, r);
          }, d.prototype.listenerCount = P;
          function P(b) {
            var r = this._events;
            if (r !== void 0) {
              var c = r[b];
              if (typeof c == "function")
                return 1;
              if (c !== void 0)
                return c.length;
            }
            return 0;
          }
          d.prototype.eventNames = function() {
            return this._eventsCount > 0 ? a(this._events) : [];
          };
          function T(b, r) {
            for (var c = new Array(r), o = 0; o < r; ++o)
              c[o] = b[o];
            return c;
          }
          function g(b, r) {
            for (; r + 1 < b.length; r++)
              b[r] = b[r + 1];
            b.pop();
          }
          function w(b) {
            for (var r = new Array(b.length), c = 0; c < r.length; ++c)
              r[c] = b[c].listener || b[c];
            return r;
          }
          function U(b, r) {
            return new Promise(function(c, o) {
              function y(E) {
                b.removeListener(r, x), o(E);
              }
              function x() {
                typeof b.removeListener == "function" && b.removeListener("error", y), c([].slice.call(arguments));
              }
              J(b, r, x, { once: !0 }), r !== "error" && H(b, y, { once: !0 });
            });
          }
          function H(b, r, c) {
            typeof b.on == "function" && J(b, "error", r, c);
          }
          function J(b, r, c, o) {
            if (typeof b.on == "function")
              o.once ? b.once(r, c) : b.on(r, c);
            else if (typeof b.addEventListener == "function")
              b.addEventListener(r, function y(x) {
                o.once && b.removeEventListener(r, y), c(x);
              });
            else
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof b);
          }
        },
        /* 14 */
        /***/
        function(s, h, p) {
          var u = p(2).SafeString;
          function n(o) {
            return typeof o == "function";
          }
          h.callable = n;
          function a(o) {
            return o !== void 0;
          }
          h.defined = a;
          function O(o, y) {
            return o % y === 0;
          }
          h.divisibleby = O;
          function l(o) {
            return o instanceof u;
          }
          h.escaped = l;
          function d(o, y) {
            return o === y;
          }
          h.equalto = d, h.eq = h.equalto, h.sameas = h.equalto;
          function A(o) {
            return o % 2 === 0;
          }
          h.even = A;
          function B(o) {
            return !o;
          }
          h.falsy = B;
          function j(o, y) {
            return o >= y;
          }
          h.ge = j;
          function M(o, y) {
            return o > y;
          }
          h.greaterthan = M, h.gt = h.greaterthan;
          function V(o, y) {
            return o <= y;
          }
          h.le = V;
          function D(o, y) {
            return o < y;
          }
          h.lessthan = D, h.lt = h.lessthan;
          function R(o) {
            return o.toLowerCase() === o;
          }
          h.lower = R;
          function P(o, y) {
            return o !== y;
          }
          h.ne = P;
          function T(o) {
            return o === null;
          }
          h.null = T;
          function g(o) {
            return typeof o == "number";
          }
          h.number = g;
          function w(o) {
            return o % 2 === 1;
          }
          h.odd = w;
          function U(o) {
            return typeof o == "string";
          }
          h.string = U;
          function H(o) {
            return !!o;
          }
          h.truthy = H;
          function J(o) {
            return o === void 0;
          }
          h.undefined = J;
          function b(o) {
            return o.toUpperCase() === o;
          }
          h.upper = b;
          function r(o) {
            return typeof Symbol < "u" ? !!o[Symbol.iterator] : Array.isArray(o) || typeof o == "string";
          }
          h.iterable = r;
          function c(o) {
            var y = o != null && typeof o == "object" && !Array.isArray(o);
            return Set ? y && !(o instanceof Set) : y;
          }
          h.mapping = c;
        },
        /* 15 */
        /***/
        function(s, h, p) {
          function u(O) {
            var l = -1;
            return {
              current: null,
              reset: function() {
                l = -1, this.current = null;
              },
              next: function() {
                return l++, l >= O.length && (l = 0), this.current = O[l], this.current;
              }
            };
          }
          function n(O) {
            O = O || ",";
            var l = !0;
            return function() {
              var d = l ? "" : O;
              return l = !1, d;
            };
          }
          function a() {
            return {
              range: function(l, d, A) {
                typeof d > "u" ? (d = l, l = 0, A = 1) : A || (A = 1);
                var B = [];
                if (A > 0)
                  for (var j = l; j < d; j += A)
                    B.push(j);
                else
                  for (var M = l; M > d; M += A)
                    B.push(M);
                return B;
              },
              cycler: function() {
                return u(Array.prototype.slice.call(arguments));
              },
              joiner: function(l) {
                return n(l);
              }
            };
          }
          s.exports = a;
        },
        /* 16 */
        /***/
        function(s, h, p) {
          var u = p(0);
          s.exports = function(a, O) {
            function l(d, A) {
              if (this.name = d, this.path = d, this.defaultEngine = A.defaultEngine, this.ext = u.extname(d), !this.ext && !this.defaultEngine)
                throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
            }
            return l.prototype.render = function(A, B) {
              a.render(this.name, A, B);
            }, O.set("view", l), O.set("nunjucksEnv", a), a;
          };
        },
        /* 17 */
        /***/
        function(s, h, p) {
          function u() {
            var n = this.runtime, a = this.lib, O = this.compiler.Compiler, l = this.parser.Parser;
            this.nodes, this.lexer;
            var d = n.contextOrFrameLookup, A = n.memberLookup, B, j;
            O && (B = O.prototype.assertType), l && (j = l.prototype.parseAggregate);
            function M() {
              n.contextOrFrameLookup = d, n.memberLookup = A, O && (O.prototype.assertType = B), l && (l.prototype.parseAggregate = j);
            }
            n.contextOrFrameLookup = function(g, w, U) {
              var H = d.apply(this, arguments);
              if (H !== void 0)
                return H;
              switch (U) {
                case "True":
                  return !0;
                case "False":
                  return !1;
                case "None":
                  return null;
                default:
                  return;
              }
            };
            function V(T, g, w, U) {
              T = T || [], g === null && (g = U < 0 ? T.length - 1 : 0), w === null ? w = U < 0 ? -1 : T.length : w < 0 && (w += T.length), g < 0 && (g += T.length);
              for (var H = [], J = g; !(J < 0 || J > T.length || U > 0 && J >= w || U < 0 && J <= w); J += U)
                H.push(n.memberLookup(T, J));
              return H;
            }
            function D(T, g) {
              return Object.prototype.hasOwnProperty.call(T, g);
            }
            var R = {
              pop: function(g) {
                if (g === void 0)
                  return this.pop();
                if (g >= this.length || g < 0)
                  throw new Error("KeyError");
                return this.splice(g, 1);
              },
              append: function(g) {
                return this.push(g);
              },
              remove: function(g) {
                for (var w = 0; w < this.length; w++)
                  if (this[w] === g)
                    return this.splice(w, 1);
                throw new Error("ValueError");
              },
              count: function(g) {
                for (var w = 0, U = 0; U < this.length; U++)
                  this[U] === g && w++;
                return w;
              },
              index: function(g) {
                var w;
                if ((w = this.indexOf(g)) === -1)
                  throw new Error("ValueError");
                return w;
              },
              find: function(g) {
                return this.indexOf(g);
              },
              insert: function(g, w) {
                return this.splice(g, 0, w);
              }
            }, P = {
              items: function() {
                return a._entries(this);
              },
              values: function() {
                return a._values(this);
              },
              keys: function() {
                return a.keys(this);
              },
              get: function(g, w) {
                var U = this[g];
                return U === void 0 && (U = w), U;
              },
              has_key: function(g) {
                return D(this, g);
              },
              pop: function(g, w) {
                var U = this[g];
                if (U === void 0 && w !== void 0)
                  U = w;
                else {
                  if (U === void 0)
                    throw new Error("KeyError");
                  delete this[g];
                }
                return U;
              },
              popitem: function() {
                var g = a.keys(this);
                if (!g.length)
                  throw new Error("KeyError");
                var w = g[0], U = this[w];
                return delete this[w], [w, U];
              },
              setdefault: function(g, w) {
                return w === void 0 && (w = null), g in this || (this[g] = w), this[g];
              },
              update: function(g) {
                return a._assign(this, g), null;
              }
            };
            return P.iteritems = P.items, P.itervalues = P.values, P.iterkeys = P.keys, n.memberLookup = function(g, w, U) {
              return arguments.length === 4 ? V.apply(this, arguments) : (g = g || {}, a.isArray(g) && D(R, w) ? R[w].bind(g) : a.isObject(g) && D(P, w) ? P[w].bind(g) : A.apply(this, arguments));
            }, M;
          }
          s.exports = u;
        }
        /******/
      ])
    );
  });
})(ye);
var Ee = ye.exports;
const he = /* @__PURE__ */ be(Ee);
if (!me)
  var me = {
    cwd: function() {
      return "/";
    }
  };
function ie(z) {
  if (typeof z != "string")
    throw new TypeError("Path must be a string. Received " + z);
}
function ve(z, v) {
  for (var s = "", h = -1, p = 0, u, n = 0; n <= z.length; ++n) {
    if (n < z.length)
      u = z.charCodeAt(n);
    else {
      if (u === 47)
        break;
      u = 47;
    }
    if (u === 47) {
      if (!(h === n - 1 || p === 1)) if (h !== n - 1 && p === 2) {
        if (s.length < 2 || s.charCodeAt(s.length - 1) !== 46 || s.charCodeAt(s.length - 2) !== 46) {
          if (s.length > 2) {
            for (var a = s.length - 1, O = a; O >= 0 && s.charCodeAt(O) !== 47; --O)
              ;
            if (O !== a) {
              O === -1 ? s = "" : s = s.slice(0, O), h = n, p = 0;
              continue;
            }
          } else if (s.length === 2 || s.length === 1) {
            s = "", h = n, p = 0;
            continue;
          }
        }
        v && (s.length > 0 ? s += "/.." : s = "..");
      } else
        s.length > 0 ? s += "/" + z.slice(h + 1, n) : s = z.slice(h + 1, n);
      h = n, p = 0;
    } else u === 46 && p !== -1 ? ++p : p = -1;
  }
  return s;
}
function Oe(z, v) {
  var s = v.dir || v.root, h = v.base || (v.name || "") + (v.ext || "");
  return s ? s === v.root ? s + h : s + z + h : h;
}
var pe = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var v = "", s = !1, h, p = arguments.length - 1; p >= -1 && !s; p--) {
      var u;
      p >= 0 ? u = arguments[p] : (h === void 0 && (h = me.cwd()), u = h), ie(u), u.length !== 0 && (v = u + "/" + v, s = u.charCodeAt(0) === 47);
    }
    return v = ve(v, !s), s ? v.length > 0 ? "/" + v : "/" : v.length > 0 ? v : ".";
  },
  normalize: function(v) {
    if (ie(v), v.length === 0)
      return ".";
    var s = v.charCodeAt(0) === 47, h = v.charCodeAt(v.length - 1) === 47;
    return v = ve(v, !s), v.length === 0 && !s && (v = "."), v.length > 0 && h && (v += "/"), s ? "/" + v : v;
  },
  isAbsolute: function(v) {
    return ie(v), v.length > 0 && v.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var v, s = 0; s < arguments.length; ++s) {
      var h = arguments[s];
      ie(h), h.length > 0 && (v === void 0 ? v = h : v += "/" + h);
    }
    return v === void 0 ? "." : pe.normalize(v);
  },
  relative: function(v, s) {
    if (ie(v), ie(s), v === s || (v = pe.resolve(v), s = pe.resolve(s), v === s))
      return "";
    for (var h = 1; h < v.length && v.charCodeAt(h) === 47; ++h)
      ;
    for (var p = v.length, u = p - h, n = 1; n < s.length && s.charCodeAt(n) === 47; ++n)
      ;
    for (var a = s.length, O = a - n, l = u < O ? u : O, d = -1, A = 0; A <= l; ++A) {
      if (A === l) {
        if (O > l) {
          if (s.charCodeAt(n + A) === 47)
            return s.slice(n + A + 1);
          if (A === 0)
            return s.slice(n + A);
        } else u > l && (v.charCodeAt(h + A) === 47 ? d = A : A === 0 && (d = 0));
        break;
      }
      var B = v.charCodeAt(h + A), j = s.charCodeAt(n + A);
      if (B !== j)
        break;
      B === 47 && (d = A);
    }
    var M = "";
    for (A = h + d + 1; A <= p; ++A)
      (A === p || v.charCodeAt(A) === 47) && (M.length === 0 ? M += ".." : M += "/..");
    return M.length > 0 ? M + s.slice(n + d) : (n += d, s.charCodeAt(n) === 47 && ++n, s.slice(n));
  },
  _makeLong: function(v) {
    return v;
  },
  dirname: function(v) {
    if (ie(v), v.length === 0)
      return ".";
    for (var s = v.charCodeAt(0), h = s === 47, p = -1, u = !0, n = v.length - 1; n >= 1; --n)
      if (s = v.charCodeAt(n), s === 47) {
        if (!u) {
          p = n;
          break;
        }
      } else
        u = !1;
    return p === -1 ? h ? "/" : "." : h && p === 1 ? "//" : v.slice(0, p);
  },
  basename: function(v, s) {
    if (s !== void 0 && typeof s != "string")
      throw new TypeError('"ext" argument must be a string');
    ie(v);
    var h = 0, p = -1, u = !0, n;
    if (s !== void 0 && s.length > 0 && s.length <= v.length) {
      if (s.length === v.length && s === v)
        return "";
      var a = s.length - 1, O = -1;
      for (n = v.length - 1; n >= 0; --n) {
        var l = v.charCodeAt(n);
        if (l === 47) {
          if (!u) {
            h = n + 1;
            break;
          }
        } else
          O === -1 && (u = !1, O = n + 1), a >= 0 && (l === s.charCodeAt(a) ? --a === -1 && (p = n) : (a = -1, p = O));
      }
      return h === p ? p = O : p === -1 && (p = v.length), v.slice(h, p);
    } else {
      for (n = v.length - 1; n >= 0; --n)
        if (v.charCodeAt(n) === 47) {
          if (!u) {
            h = n + 1;
            break;
          }
        } else p === -1 && (u = !1, p = n + 1);
      return p === -1 ? "" : v.slice(h, p);
    }
  },
  extname: function(v) {
    ie(v);
    for (var s = -1, h = 0, p = -1, u = !0, n = 0, a = v.length - 1; a >= 0; --a) {
      var O = v.charCodeAt(a);
      if (O === 47) {
        if (!u) {
          h = a + 1;
          break;
        }
        continue;
      }
      p === -1 && (u = !1, p = a + 1), O === 46 ? s === -1 ? s = a : n !== 1 && (n = 1) : s !== -1 && (n = -1);
    }
    return s === -1 || p === -1 || // We saw a non-dot character immediately before the dot
    n === 0 || // The (right-most) trimmed path component is exactly '..'
    n === 1 && s === p - 1 && s === h + 1 ? "" : v.slice(s, p);
  },
  format: function(v) {
    if (v === null || typeof v != "object")
      throw new TypeError(
        'Parameter "pathObject" must be an object, not ' + typeof v
      );
    return Oe("/", v);
  },
  parse: function(v) {
    ie(v);
    var s = { root: "", dir: "", base: "", ext: "", name: "" };
    if (v.length === 0)
      return s;
    var h = v.charCodeAt(0), p = h === 47, u;
    p ? (s.root = "/", u = 1) : u = 0;
    for (var n = -1, a = 0, O = -1, l = !0, d = v.length - 1, A = 0; d >= u; --d) {
      if (h = v.charCodeAt(d), h === 47) {
        if (!l) {
          a = d + 1;
          break;
        }
        continue;
      }
      O === -1 && (l = !1, O = d + 1), h === 46 ? n === -1 ? n = d : A !== 1 && (A = 1) : n !== -1 && (A = -1);
    }
    return n === -1 || O === -1 || // We saw a non-dot character immediately before the dot
    A === 0 || // The (right-most) trimmed path component is exactly '..'
    A === 1 && n === O - 1 && n === a + 1 ? O !== -1 && (a === 0 && p ? s.base = s.name = v.slice(1, O) : s.base = s.name = v.slice(a, O)) : (a === 0 && p ? (s.name = v.slice(1, n), s.base = v.slice(1, O)) : (s.name = v.slice(a, n), s.base = v.slice(a, O)), s.ext = v.slice(n, O)), a > 0 ? s.dir = v.slice(0, a - 1) : p && (s.dir = "/"), s;
  },
  sep: "/",
  delimiter: ":",
  posix: null
}, de = pe;
he.PrecompiledLoader.prototype.resolve = function(v, s) {
  return de.resolve(de.dirname(v), s).replace(/^\//, "");
};
function Le(z) {
  return function() {
    const v = Array.from(arguments), s = v.pop();
    Promise.resolve(z(...v)).then(
      (h) => s(null, h),
      (h) => s(h, null)
    );
  };
}
class Se extends he.PrecompiledLoader {
  // getSource(name) {
  //   return super.getSource(name);
  // }
}
const xe = {}, ge = {};
function ke(z) {
  for (const v in ge)
    if (z.startsWith(v))
      return ge[v] + z.substring(v.length);
  return z;
}
function Ae(z, v) {
  const s = new he.Environment(new Se());
  for (const [h, p] of Object.entries(xe))
    s.addFilter(h, Le(p), !0);
  return new Promise(
    (h, p) => s.render(ke(z), v, (u, n) => {
      u ? p(u) : h(n);
    })
  );
}
function Te(z, v) {
  let s = (h) => Ae(z, h);
  for (const h of v)
    s = h(s);
  return s;
}
export {
  Te as default,
  xe as filters,
  Ae as renderTemplate,
  ge as resolveMap
};

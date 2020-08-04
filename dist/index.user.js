!(function (t) {
  var e = {}
  function n(o) {
    if (e[o]) return e[o].exports
    var r = (e[o] = { i: o, l: !1, exports: {} })
    return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  ;(n.m = t),
    (n.c = e),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var o = Object.create(null)
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          n.d(
            o,
            r,
            function (e) {
              return t[e]
            }.bind(null, r)
          )
      return o
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return n.d(e, 'a', e), e
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = ''),
    n((n.s = 0))
})([
  function (t, e, n) {
    'use strict'
    function o() {}
    n.r(e)
    function r(t) {
      return t()
    }
    function c() {
      return Object.create(null)
    }
    function l(t) {
      t.forEach(r)
    }
    function u(t) {
      return 'function' == typeof t
    }
    function a(t, e) {
      return t != t
        ? e == e
        : t !== e || (t && 'object' == typeof t) || 'function' == typeof t
    }
    new Set()
    function i(t, e, n) {
      t.insertBefore(e, n || null)
    }
    function s(t) {
      t.parentNode.removeChild(t)
    }
    function f(t) {
      return document.createElement(t)
    }
    new Set()
    let d
    function p(t) {
      d = t
    }
    const h = [],
      m = [],
      y = [],
      g = [],
      $ = Promise.resolve()
    let b = !1
    function x() {
      b || ((b = !0), $.then(S))
    }
    function _(t) {
      y.push(t)
    }
    let v = !1
    const w = new Set()
    function S() {
      if (!v) {
        v = !0
        do {
          for (let t = 0; t < h.length; t += 1) {
            const e = h[t]
            p(e), j(e.$$)
          }
          for (h.length = 0; m.length; ) m.pop()()
          for (let t = 0; t < y.length; t += 1) {
            const e = y[t]
            w.has(e) || (w.add(e), e())
          }
          y.length = 0
        } while (h.length)
        for (; g.length; ) g.pop()()
        ;(b = !1), (v = !1), w.clear()
      }
    }
    function j(t) {
      if (null !== t.fragment) {
        t.update(), l(t.before_update)
        const e = t.dirty
        ;(t.dirty = [-1]),
          t.fragment && t.fragment.p(t.ctx, e),
          t.after_update.forEach(_)
      }
    }
    const O = new Set()
    function k(t, e) {
      t && t.i && (O.delete(t), t.i(e))
    }
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof globalThis
      ? globalThis
      : global
    new Set([
      'allowfullscreen',
      'allowpaymentrequest',
      'async',
      'autofocus',
      'autoplay',
      'checked',
      'controls',
      'default',
      'defer',
      'disabled',
      'formnovalidate',
      'hidden',
      'ismap',
      'loop',
      'multiple',
      'muted',
      'nomodule',
      'novalidate',
      'open',
      'playsinline',
      'readonly',
      'required',
      'reversed',
      'selected'
    ])
    let E
    function M(t, e) {
      const n = t.$$
      null !== n.fragment &&
        (l(n.on_destroy),
        n.fragment && n.fragment.d(e),
        (n.on_destroy = n.fragment = null),
        (n.ctx = []))
    }
    function C(t, e, n, a, i, f, m = [-1]) {
      const y = d
      p(t)
      const g = e.props || {},
        $ = (t.$$ = {
          fragment: null,
          ctx: null,
          props: f,
          update: o,
          not_equal: i,
          bound: c(),
          on_mount: [],
          on_destroy: [],
          before_update: [],
          after_update: [],
          context: new Map(y ? y.$$.context : []),
          callbacks: c(),
          dirty: m
        })
      let b = !1
      if (
        (($.ctx = n
          ? n(t, g, (e, n, ...o) => {
              const r = o.length ? o[0] : n
              return (
                $.ctx &&
                  i($.ctx[e], ($.ctx[e] = r)) &&
                  ($.bound[e] && $.bound[e](r),
                  b &&
                    (function (t, e) {
                      ;-1 === t.$$.dirty[0] &&
                        (h.push(t), x(), t.$$.dirty.fill(0)),
                        (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31)
                    })(t, e)),
                n
              )
            })
          : []),
        $.update(),
        (b = !0),
        l($.before_update),
        ($.fragment = !!a && a($.ctx)),
        e.target)
      ) {
        if (e.hydrate) {
          const t = ((v = e.target), Array.from(v.childNodes))
          $.fragment && $.fragment.l(t), t.forEach(s)
        } else $.fragment && $.fragment.c()
        e.intro && k(t.$$.fragment),
          (function (t, e, n) {
            const {
              fragment: o,
              on_mount: c,
              on_destroy: a,
              after_update: i
            } = t.$$
            o && o.m(e, n),
              _(() => {
                const e = c.map(r).filter(u)
                a ? a.push(...e) : l(e), (t.$$.on_mount = [])
              }),
              i.forEach(_)
          })(t, e.target, e.anchor),
          S()
      }
      var v
      p(y)
    }
    'function' == typeof HTMLElement &&
      (E = class extends HTMLElement {
        constructor() {
          super(), this.attachShadow({ mode: 'open' })
        }
        connectedCallback() {
          for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t])
        }
        attributeChangedCallback(t, e, n) {
          this[t] = n
        }
        $destroy() {
          M(this, 1), (this.$destroy = o)
        }
        $on(t, e) {
          const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
          return (
            n.push(e),
            () => {
              const t = n.indexOf(e)
              ;-1 !== t && n.splice(t, 1)
            }
          )
        }
        $set() {}
      })
    class P {
      $destroy() {
        M(this, 1), (this.$destroy = o)
      }
      $on(t, e) {
        const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
        return (
          n.push(e),
          () => {
            const t = n.indexOf(e)
            ;-1 !== t && n.splice(t, 1)
          }
        )
      }
      $set() {}
    }
    function T(t) {
      let e
      return {
        c() {
          ;(e = f('div')), (e.textContent = 'hello')
        },
        m(t, n) {
          i(t, e, n)
        },
        p: o,
        i: o,
        o: o,
        d(t) {
          t && s(e)
        }
      }
    }
    var q = class extends P {
      constructor(t) {
        super(), C(this, t, null, T, a, {})
      }
    }
    const B = 'package-finder-root',
      N = document.createElement('div'),
      H = document.querySelector('.js-site-search')
    ;(N.id = B),
      H.parentNode.insertBefore(N, H.nextSibling),
      new q({ target: document.getElementById(B) })
  }
])

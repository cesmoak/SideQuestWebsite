function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
!(function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  var n = [],
    i = e.document,
    o = Object.getPrototypeOf,
    r = n.slice,
    a = n.concat,
    s = n.push,
    l = n.indexOf,
    c = {},
    u = c.toString,
    d = c.hasOwnProperty,
    p = d.toString,
    f = p.call(Object),
    h = {},
    v = function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    g = function(e) {
      return null != e && e === e.window;
    },
    m = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function y(e, t, n) {
    var o,
      r,
      a = (n = n || i).createElement("script");
    if (((a.text = e), t))
      for (o in m)
        (r = t[o] || (t.getAttribute && t.getAttribute(o))) &&
          a.setAttribute(o, r);
    n.head.appendChild(a).parentNode.removeChild(a);
  }
  function b(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? c[u.call(e)] || "object"
      : typeof e;
  }
  var w = "3.4.1",
    x = function(e, t) {
      return new x.fn.init(e, t);
    },
    k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = b(e);
    return (
      !v(e) &&
      !g(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (x.fn = x.prototype = {
    jquery: w,
    constructor: x,
    length: 0,
    toArray: function() {
      return r.call(this);
    },
    get: function(e) {
      return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function(e) {
      var t = x.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function(e) {
      return x.each(this, e);
    },
    map: function(e) {
      return this.pushStack(
        x.map(this, function(t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function() {
      return this.pushStack(r.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }),
    (x.extend = x.fn.extend = function() {
      var e,
        t,
        n,
        i,
        o,
        r,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        c = !1;
      for (
        "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
          "object" == typeof a || v(a) || (a = {}),
          s === l && ((a = this), s--);
        s < l;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (i = e[t]),
              "__proto__" !== t &&
                a !== i &&
                (c && i && (x.isPlainObject(i) || (o = Array.isArray(i)))
                  ? ((n = a[t]),
                    (r =
                      o && !Array.isArray(n)
                        ? []
                        : o || x.isPlainObject(n)
                        ? n
                        : {}),
                    (o = !1),
                    (a[t] = x.extend(c, r, i)))
                  : void 0 !== i && (a[t] = i));
      return a;
    }),
    x.extend({
      expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== u.call(e) ||
          ((t = o(e)) &&
            ("function" !=
              typeof (n = d.call(t, "constructor") && t.constructor) ||
              p.call(n) !== f))
        );
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function(e, t) {
        y(e, { nonce: t && t.nonce });
      },
      each: function(e, t) {
        var n,
          i = 0;
        if (C(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(k, "");
      },
      makeArray: function(e, t) {
        var n = t || [];
        return (
          null != e &&
            (C(Object(e))
              ? x.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : l.call(t, e, n);
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function(e, t, n) {
        for (var i = [], o = 0, r = e.length, a = !n; o < r; o++)
          !t(e[o], o) !== a && i.push(e[o]);
        return i;
      },
      map: function(e, t, n) {
        var i,
          o,
          r = 0,
          s = [];
        if (C(e))
          for (i = e.length; r < i; r++)
            null != (o = t(e[r], r, n)) && s.push(o);
        else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
        return a.apply([], s);
      },
      guid: 1,
      support: h
    }),
    "function" == typeof Symbol && (x.fn[Symbol.iterator] = n[Symbol.iterator]),
    x.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var T = (function(e) {
    var t,
      n,
      i,
      o,
      r,
      a,
      s,
      l,
      c,
      u,
      d,
      p,
      f,
      h,
      v,
      g,
      m,
      y,
      b,
      w = "sizzle" + 1 * new Date(),
      x = e.document,
      k = 0,
      C = 0,
      T = le(),
      S = le(),
      A = le(),
      E = le(),
      P = function(e, t) {
        return e === t && (d = !0), 0;
      },
      O = {}.hasOwnProperty,
      D = [],
      M = D.pop,
      j = D.push,
      q = D.push,
      N = D.slice,
      _ = function(e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      L =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      I = "[\\x20\\t\\r\\n\\f]",
      H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      z =
        "\\[" +
        I +
        "*(" +
        H +
        ")(?:" +
        I +
        "*([*^$|!~]?=)" +
        I +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        H +
        "))|)" +
        I +
        "*\\]",
      $ =
        ":(" +
        H +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        z +
        ")*)|.*)\\)|)",
      V = new RegExp(I + "+", "g"),
      W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
      R = new RegExp("^" + I + "*," + I + "*"),
      F = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
      X = new RegExp(I + "|>"),
      Q = new RegExp($),
      B = new RegExp("^" + H + "$"),
      Y = {
        ID: new RegExp("^#(" + H + ")"),
        CLASS: new RegExp("^\\.(" + H + ")"),
        TAG: new RegExp("^(" + H + "|[*])"),
        ATTR: new RegExp("^" + z),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            I +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            I +
            "*(?:([+-]|)" +
            I +
            "*(\\d+)|))" +
            I +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + L + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            I +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            I +
            "*((?:-\\d)?\\d*)" +
            I +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      U = /HTML$/i,
      G = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
      ne = function(e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      oe = function(e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function() {
        p();
      },
      ae = we(
        function(e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      q.apply((D = N.call(x.childNodes)), x.childNodes);
    } catch (t) {
      q = {
        apply: D.length
          ? function(e, t) {
              j.apply(e, N.call(t));
            }
          : function(e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            }
      };
    }
    function se(e, t, i, o) {
      var r,
        s,
        c,
        u,
        d,
        h,
        m,
        y = t && t.ownerDocument,
        k = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))
      )
        return i;
      if (
        !o &&
        ((t ? t.ownerDocument || t : x) !== f && p(t), (t = t || f), v)
      ) {
        if (11 !== k && (d = K.exec(e)))
          if ((r = d[1])) {
            if (9 === k) {
              if (!(c = t.getElementById(r))) return i;
              if (c.id === r) return i.push(c), i;
            } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r)
              return i.push(c), i;
          } else {
            if (d[2]) return q.apply(i, t.getElementsByTagName(e)), i;
            if (
              (r = d[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return q.apply(i, t.getElementsByClassName(r)), i;
          }
        if (
          n.qsa &&
          !E[e + " "] &&
          (!g || !g.test(e)) &&
          (1 !== k || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((m = e), (y = t), 1 === k && X.test(e))) {
            for (
              (u = t.getAttribute("id"))
                ? (u = u.replace(ie, oe))
                : t.setAttribute("id", (u = w)),
                s = (h = a(e)).length;
              s--;

            )
              h[s] = "#" + u + " " + be(h[s]);
            (m = h.join(",")), (y = (ee.test(e) && me(t.parentNode)) || t);
          }
          try {
            return q.apply(i, y.querySelectorAll(m)), i;
          } catch (t) {
            E(e, !0);
          } finally {
            u === w && t.removeAttribute("id");
          }
        }
      }
      return l(e.replace(W, "$1"), t, i, o);
    }
    function le() {
      var e = [];
      return function t(n, o) {
        return (
          e.push(n + " ") > i.cacheLength && delete t[e.shift()],
          (t[n + " "] = o)
        );
      };
    }
    function ce(e) {
      return (e[w] = !0), e;
    }
    function ue(e) {
      var t = f.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function de(e, t) {
      for (var n = e.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function he(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function ve(e) {
      return function(t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function ge(e) {
      return ce(function(t) {
        return (
          (t = +t),
          ce(function(n, i) {
            for (var o, r = e([], n.length, t), a = r.length; a--; )
              n[(o = r[a])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = se.support = {}),
    (r = se.isXML = function(e) {
      var t = (e.ownerDocument || e).documentElement;
      return !U.test(e.namespaceURI || (t && t.nodeName) || "HTML");
    }),
    (p = se.setDocument = function(e) {
      var t,
        o,
        a = e ? e.ownerDocument || e : x;
      return (
        a !== f &&
          9 === a.nodeType &&
          a.documentElement &&
          ((h = (f = a).documentElement),
          (v = !r(f)),
          x !== f &&
            (o = f.defaultView) &&
            o.top !== o &&
            (o.addEventListener
              ? o.addEventListener("unload", re, !1)
              : o.attachEvent && o.attachEvent("onunload", re)),
          (n.attributes = ue(function(e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (n.getElementsByTagName = ue(function(e) {
            return (
              e.appendChild(f.createComment("")),
              !e.getElementsByTagName("*").length
            );
          })),
          (n.getElementsByClassName = J.test(f.getElementsByClassName)),
          (n.getById = ue(function(e) {
            return (
              (h.appendChild(e).id = w),
              !f.getElementsByName || !f.getElementsByName(w).length
            );
          })),
          n.getById
            ? ((i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && v) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((i.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                  var n =
                    void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t;
                };
              }),
              (i.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && v) {
                  var n,
                    i,
                    o,
                    r = t.getElementById(e);
                  if (r) {
                    if ((n = r.getAttributeNode("id")) && n.value === e)
                      return [r];
                    for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                      if ((n = r.getAttributeNode("id")) && n.value === e)
                        return [r];
                  }
                  return [];
                }
              })),
          (i.find.TAG = n.getElementsByTagName
            ? function(e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : n.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function(e, t) {
                var n,
                  i = [],
                  o = 0,
                  r = t.getElementsByTagName(e);
                if ("*" === e) {
                  for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }
                return r;
              }),
          (i.find.CLASS =
            n.getElementsByClassName &&
            function(e, t) {
              if (void 0 !== t.getElementsByClassName && v)
                return t.getElementsByClassName(e);
            }),
          (m = []),
          (g = []),
          (n.qsa = J.test(f.querySelectorAll)) &&
            (ue(function(e) {
              (h.appendChild(e).innerHTML =
                "<a id='" +
                w +
                "'></a><select id='" +
                w +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  g.push("[*^$]=" + I + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length ||
                  g.push("\\[" + I + "*(?:value|" + L + ")"),
                e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + w + "+*").length ||
                  g.push(".#.+[+~]");
            }),
            ue(function(e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = f.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length &&
                  g.push("name" + I + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length &&
                  g.push(":enabled", ":disabled"),
                (h.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(":disabled").length &&
                  g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:");
            })),
          (n.matchesSelector = J.test(
            (y =
              h.matches ||
              h.webkitMatchesSelector ||
              h.mozMatchesSelector ||
              h.oMatchesSelector ||
              h.msMatchesSelector)
          )) &&
            ue(function(e) {
              (n.disconnectedMatch = y.call(e, "*")),
                y.call(e, "[s!='']:x"),
                m.push("!=", $);
            }),
          (g = g.length && new RegExp(g.join("|"))),
          (m = m.length && new RegExp(m.join("|"))),
          (t = J.test(h.compareDocumentPosition)),
          (b =
            t || J.test(h.contains)
              ? function(e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                  return (
                    e === i ||
                    !(
                      !i ||
                      1 !== i.nodeType ||
                      !(n.contains
                        ? n.contains(i)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(i))
                    )
                  );
                }
              : function(e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (P = t
            ? function(e, t) {
                if (e === t) return (d = !0), 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  i ||
                  (1 &
                    (i =
                      (e.ownerDocument || e) === (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!n.sortDetached && t.compareDocumentPosition(e) === i)
                    ? e === f || (e.ownerDocument === x && b(x, e))
                      ? -1
                      : t === f || (t.ownerDocument === x && b(x, t))
                      ? 1
                      : u
                      ? _(u, e) - _(u, t)
                      : 0
                    : 4 & i
                    ? -1
                    : 1)
                );
              }
            : function(e, t) {
                if (e === t) return (d = !0), 0;
                var n,
                  i = 0,
                  o = e.parentNode,
                  r = t.parentNode,
                  a = [e],
                  s = [t];
                if (!o || !r)
                  return e === f
                    ? -1
                    : t === f
                    ? 1
                    : o
                    ? -1
                    : r
                    ? 1
                    : u
                    ? _(u, e) - _(u, t)
                    : 0;
                if (o === r) return pe(e, t);
                for (n = e; (n = n.parentNode); ) a.unshift(n);
                for (n = t; (n = n.parentNode); ) s.unshift(n);
                for (; a[i] === s[i]; ) i++;
                return i
                  ? pe(a[i], s[i])
                  : a[i] === x
                  ? -1
                  : s[i] === x
                  ? 1
                  : 0;
              })),
        f
      );
    }),
    (se.matches = function(e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function(e, t) {
      if (
        ((e.ownerDocument || e) !== f && p(e),
        n.matchesSelector &&
          v &&
          !E[t + " "] &&
          (!m || !m.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var i = y.call(e, t);
          if (
            i ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          E(t, !0);
        }
      return 0 < se(t, f, null, [e]).length;
    }),
    (se.contains = function(e, t) {
      return (e.ownerDocument || e) !== f && p(e), b(e, t);
    }),
    (se.attr = function(e, t) {
      (e.ownerDocument || e) !== f && p(e);
      var o = i.attrHandle[t.toLowerCase()],
        r = o && O.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0;
      return void 0 !== r
        ? r
        : n.attributes || !v
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function(e) {
      return (e + "").replace(ie, oe);
    }),
    (se.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function(e) {
      var t,
        i = [],
        o = 0,
        r = 0;
      if (
        ((d = !n.detectDuplicates),
        (u = !n.sortStable && e.slice(0)),
        e.sort(P),
        d)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (o = i.push(r));
        for (; o--; ) e.splice(i[o], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText = function(e) {
      var t,
        n = "",
        i = 0,
        r = e.nodeType;
      if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; (t = e[i++]); ) n += o(t);
      return n;
    }),
    ((i = se.selectors = {
      cacheLength: 50,
      createPseudo: ce,
      match: Y,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" }
      },
      preFilter: {
        ATTR: function(e) {
          return (
            (e[1] = e[1].replace(te, ne)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function(e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || se.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && se.error(e[0]),
            e
          );
        },
        PSEUDO: function(e) {
          var t,
            n = !e[6] && e[2];
          return Y.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                  Q.test(n) &&
                  (t = a(n, !0)) &&
                  (t = n.indexOf(")", n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e
            ? function() {
                return !0;
              }
            : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function(e) {
          var t = T[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
              T(e, function(e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function(e, t, n) {
          return function(i) {
            var o = se.attr(i, e);
            return null == o
              ? "!=" === t
              : !t ||
                  ((o += ""),
                  "=" === t
                    ? o === n
                    : "!=" === t
                    ? o !== n
                    : "^=" === t
                    ? n && 0 === o.indexOf(n)
                    : "*=" === t
                    ? n && -1 < o.indexOf(n)
                    : "$=" === t
                    ? n && o.slice(-n.length) === n
                    : "~=" === t
                    ? -1 < (" " + o.replace(V, " ") + " ").indexOf(n)
                    : "|=" === t &&
                      (o === n || o.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function(e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
            a = "last" !== e.slice(-4),
            s = "of-type" === t;
          return 1 === i && 0 === o
            ? function(e) {
                return !!e.parentNode;
              }
            : function(t, n, l) {
                var c,
                  u,
                  d,
                  p,
                  f,
                  h,
                  v = r !== a ? "nextSibling" : "previousSibling",
                  g = t.parentNode,
                  m = s && t.nodeName.toLowerCase(),
                  y = !l && !s,
                  b = !1;
                if (g) {
                  if (r) {
                    for (; v; ) {
                      for (p = t; (p = p[v]); )
                        if (
                          s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType
                        )
                          return !1;
                      h = v = "only" === e && !h && "nextSibling";
                    }
                    return !0;
                  }
                  if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                    for (
                      b =
                        (f =
                          (c =
                            (u =
                              (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] ||
                              (d[p.uniqueID] = {}))[e] || [])[0] === k &&
                          c[1]) && c[2],
                        p = f && g.childNodes[f];
                      (p = (++f && p && p[v]) || (b = f = 0) || h.pop());

                    )
                      if (1 === p.nodeType && ++b && p === t) {
                        u[e] = [k, f, b];
                        break;
                      }
                  } else if (
                    (y &&
                      (b = f =
                        (c =
                          (u =
                            (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] ||
                            (d[p.uniqueID] = {}))[e] || [])[0] === k && c[1]),
                    !1 === b)
                  )
                    for (
                      ;
                      (p = (++f && p && p[v]) || (b = f = 0) || h.pop()) &&
                      ((s
                        ? p.nodeName.toLowerCase() !== m
                        : 1 !== p.nodeType) ||
                        !++b ||
                        (y &&
                          ((u =
                            (d = p[w] || (p[w] = {}))[p.uniqueID] ||
                            (d[p.uniqueID] = {}))[e] = [k, b]),
                        p !== t));

                    );
                  return (b -= o) === i || (b % i == 0 && 0 <= b / i);
                }
              };
        },
        PSEUDO: function(e, t) {
          var n,
            o =
              i.pseudos[e] ||
              i.setFilters[e.toLowerCase()] ||
              se.error("unsupported pseudo: " + e);
          return o[w]
            ? o(t)
            : 1 < o.length
            ? ((n = [e, e, "", t]),
              i.setFilters.hasOwnProperty(e.toLowerCase())
                ? ce(function(e, n) {
                    for (var i, r = o(e, t), a = r.length; a--; )
                      e[(i = _(e, r[a]))] = !(n[i] = r[a]);
                  })
                : function(e) {
                    return o(e, 0, n);
                  })
            : o;
        }
      },
      pseudos: {
        not: ce(function(e) {
          var t = [],
            n = [],
            i = s(e.replace(W, "$1"));
          return i[w]
            ? ce(function(e, t, n, o) {
                for (var r, a = i(e, null, o, []), s = e.length; s--; )
                  (r = a[s]) && (e[s] = !(t[s] = r));
              })
            : function(e, o, r) {
                return (t[0] = e), i(t, null, r, n), (t[0] = null), !n.pop();
              };
        }),
        has: ce(function(e) {
          return function(t) {
            return 0 < se(e, t).length;
          };
        }),
        contains: ce(function(e) {
          return (
            (e = e.replace(te, ne)),
            function(t) {
              return -1 < (t.textContent || o(t)).indexOf(e);
            }
          );
        }),
        lang: ce(function(e) {
          return (
            B.test(e || "") || se.error("unsupported lang: " + e),
            (e = e.replace(te, ne).toLowerCase()),
            function(t) {
              var n;
              do {
                if (
                  (n = v
                    ? t.lang
                    : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                )
                  return (
                    (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                  );
              } while ((t = t.parentNode) && 1 === t.nodeType);
              return !1;
            }
          );
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function(e) {
          return e === h;
        },
        focus: function(e) {
          return (
            e === f.activeElement &&
            (!f.hasFocus || f.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: ve(!1),
        disabled: ve(!0),
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function(e) {
          return !0 === e.selected;
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function(e) {
          return !i.pseudos.empty(e);
        },
        header: function(e) {
          return Z.test(e.nodeName);
        },
        input: function(e) {
          return G.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function(e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: ge(function() {
          return [0];
        }),
        last: ge(function(e, t) {
          return [t - 1];
        }),
        eq: ge(function(e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ge(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: ge(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: ge(function(e, t, n) {
          for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
          return e;
        }),
        gt: ge(function(e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
          return e;
        })
      }
    }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
    function ye() {}
    function be(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function we(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        a = n && "parentNode" === r,
        s = C++;
      return t.first
        ? function(t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, o);
            return !1;
          }
        : function(t, n, l) {
            var c,
              u,
              d,
              p = [k, s];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || a)
                  if (
                    ((u =
                      (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                      (d[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = u[r]) && c[0] === k && c[1] === s)
                      return (p[2] = c[2]);
                    if (((u[r] = p)[2] = e(t, n, l))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return 1 < e.length
        ? function(t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function ke(e, t, n, i, o) {
      for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
        (r = e[s]) && ((n && !n(r, i, o)) || (a.push(r), c && t.push(s)));
      return a;
    }
    function Ce(e, t, n, i, o, r) {
      return (
        i && !i[w] && (i = Ce(i)),
        o && !o[w] && (o = Ce(o, r)),
        ce(function(r, a, s, l) {
          var c,
            u,
            d,
            p = [],
            f = [],
            h = a.length,
            v =
              r ||
              (function(e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) se(e, t[i], n);
                return n;
              })(t || "*", s.nodeType ? [s] : s, []),
            g = !e || (!r && t) ? v : ke(v, p, e, s, l),
            m = n ? (o || (r ? e : h || i) ? [] : a) : g;
          if ((n && n(g, m, s, l), i))
            for (c = ke(m, f), i(c, [], s, l), u = c.length; u--; )
              (d = c[u]) && (m[f[u]] = !(g[f[u]] = d));
          if (r) {
            if (o || e) {
              if (o) {
                for (c = [], u = m.length; u--; )
                  (d = m[u]) && c.push((g[u] = d));
                o(null, (m = []), c, l);
              }
              for (u = m.length; u--; )
                (d = m[u]) &&
                  -1 < (c = o ? _(r, d) : p[u]) &&
                  (r[c] = !(a[c] = d));
            }
          } else (m = ke(m === a ? m.splice(h, m.length) : m)), o ? o(null, a, m, l) : q.apply(a, m);
        })
      );
    }
    function Te(e) {
      for (
        var t,
          n,
          o,
          r = e.length,
          a = i.relative[e[0].type],
          s = a || i.relative[" "],
          l = a ? 1 : 0,
          u = we(
            function(e) {
              return e === t;
            },
            s,
            !0
          ),
          d = we(
            function(e) {
              return -1 < _(t, e);
            },
            s,
            !0
          ),
          p = [
            function(e, n, i) {
              var o =
                (!a && (i || n !== c)) ||
                ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
              return (t = null), o;
            }
          ];
        l < r;
        l++
      )
        if ((n = i.relative[e[l].type])) p = [we(xe(p), n)];
        else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++);
            return Ce(
              1 < l && xe(p),
              1 < l &&
                be(
                  e
                    .slice(0, l - 1)
                    .concat({ value: " " === e[l - 2].type ? "*" : "" })
                ).replace(W, "$1"),
              n,
              l < o && Te(e.slice(l, o)),
              o < r && Te((e = e.slice(o))),
              o < r && be(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    return (
      (ye.prototype = i.filters = i.pseudos),
      (i.setFilters = new ye()),
      (a = se.tokenize = function(e, t) {
        var n,
          o,
          r,
          a,
          s,
          l,
          c,
          u = S[e + " "];
        if (u) return t ? 0 : u.slice(0);
        for (s = e, l = [], c = i.preFilter; s; ) {
          for (a in ((n && !(o = R.exec(s))) ||
            (o && (s = s.slice(o[0].length) || s), l.push((r = []))),
          (n = !1),
          (o = F.exec(s)) &&
            ((n = o.shift()),
            r.push({ value: n, type: o[0].replace(W, " ") }),
            (s = s.slice(n.length))),
          i.filter))
            !(o = Y[a].exec(s)) ||
              (c[a] && !(o = c[a](o))) ||
              ((n = o.shift()),
              r.push({ value: n, type: a, matches: o }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? se.error(e) : S(e, l).slice(0);
      }),
      (s = se.compile = function(e, t) {
        var n,
          o,
          r,
          s,
          l,
          u,
          d = [],
          h = [],
          g = A[e + " "];
        if (!g) {
          for (t || (t = a(e)), n = t.length; n--; )
            (g = Te(t[n]))[w] ? d.push(g) : h.push(g);
          (g = A(
            e,
            ((o = h),
            (s = 0 < (r = d).length),
            (l = 0 < o.length),
            (u = function(e, t, n, a, u) {
              var d,
                h,
                g,
                m = 0,
                y = "0",
                b = e && [],
                w = [],
                x = c,
                C = e || (l && i.find.TAG("*", u)),
                T = (k += null == x ? 1 : Math.random() || 0.1),
                S = C.length;
              for (
                u && (c = t === f || t || u);
                y !== S && null != (d = C[y]);
                y++
              ) {
                if (l && d) {
                  for (
                    h = 0, t || d.ownerDocument === f || (p(d), (n = !v));
                    (g = o[h++]);

                  )
                    if (g(d, t || f, n)) {
                      a.push(d);
                      break;
                    }
                  u && (k = T);
                }
                s && ((d = !g && d) && m--, e && b.push(d));
              }
              if (((m += y), s && y !== m)) {
                for (h = 0; (g = r[h++]); ) g(b, w, t, n);
                if (e) {
                  if (0 < m) for (; y--; ) b[y] || w[y] || (w[y] = M.call(a));
                  w = ke(w);
                }
                q.apply(a, w),
                  u &&
                    !e &&
                    0 < w.length &&
                    1 < m + r.length &&
                    se.uniqueSort(a);
              }
              return u && ((k = T), (c = x)), b;
            }),
            s ? ce(u) : u)
          )).selector = e;
        }
        return g;
      }),
      (l = se.select = function(e, t, n, o) {
        var r,
          l,
          c,
          u,
          d,
          p = "function" == typeof e && e,
          f = !o && a((e = p.selector || e));
        if (((n = n || []), 1 === f.length)) {
          if (
            2 < (l = f[0] = f[0].slice(0)).length &&
            "ID" === (c = l[0]).type &&
            9 === t.nodeType &&
            v &&
            i.relative[l[1].type]
          ) {
            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0]))
              return n;
            p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
          }
          for (
            r = Y.needsContext.test(e) ? 0 : l.length;
            r-- && !i.relative[(u = (c = l[r]).type)];

          )
            if (
              (d = i.find[u]) &&
              (o = d(
                c.matches[0].replace(te, ne),
                (ee.test(l[0].type) && me(t.parentNode)) || t
              ))
            ) {
              if ((l.splice(r, 1), !(e = o.length && be(l))))
                return q.apply(n, o), n;
              break;
            }
        }
        return (
          (p || s(e, f))(
            o,
            t,
            !v,
            n,
            !t || (ee.test(e) && me(t.parentNode)) || t
          ),
          n
        );
      }),
      (n.sortStable =
        w
          .split("")
          .sort(P)
          .join("") === w),
      (n.detectDuplicates = !!d),
      p(),
      (n.sortDetached = ue(function(e) {
        return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
      })),
      ue(function(e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        de("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function(e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        de("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function(e) {
        return null == e.getAttribute("disabled");
      }) ||
        de(L, function(e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      se
    );
  })(e);
  (x.find = T),
    (x.expr = T.selectors),
    (x.expr[":"] = x.expr.pseudos),
    (x.uniqueSort = x.unique = T.uniqueSort),
    (x.text = T.getText),
    (x.isXMLDoc = T.isXML),
    (x.contains = T.contains),
    (x.escapeSelector = T.escape);
  var S = function(e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && x(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    A = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    E = x.expr.match.needsContext;
  function P(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, t, n) {
    return v(t)
      ? x.grep(e, function(e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? x.grep(e, function(e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? x.grep(e, function(e) {
          return -1 < l.call(t, e) !== n;
        })
      : x.filter(t, e, n);
  }
  (x.filter = function(e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? x.find.matchesSelector(i, e)
          ? [i]
          : []
        : x.find.matches(
            e,
            x.grep(t, function(e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    x.fn.extend({
      find: function(e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            x(e).filter(function() {
              for (t = 0; t < i; t++) if (x.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
        return 1 < i ? x.uniqueSort(n) : n;
      },
      filter: function(e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function(e) {
        return !!D(this, "string" == typeof e && E.test(e) ? x(e) : e || [], !1)
          .length;
      }
    });
  var M,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((x.fn.init = function(e, t, n) {
    var o, r;
    if (!e) return this;
    if (((n = n || M), "string" == typeof e)) {
      if (
        !(o =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : j.exec(e)) ||
        (!o[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (o[1]) {
        if (
          (x.merge(
            this,
            x.parseHTML(
              o[1],
              (t = t instanceof x ? t[0] : t) && t.nodeType
                ? t.ownerDocument || t
                : i,
              !0
            )
          ),
          O.test(o[1]) && x.isPlainObject(t))
        )
          for (o in t) v(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        return this;
      }
      return (
        (r = i.getElementById(o[2])) && ((this[0] = r), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : v(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(x)
      : x.makeArray(e, this);
  }).prototype = x.fn),
    (M = x(i));
  var q = /^(?:parents|prev(?:Until|All))/,
    N = { children: !0, contents: !0, next: !0, prev: !0 };
  function _(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  x.fn.extend({
    has: function(e) {
      var t = x(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
      });
    },
    closest: function(e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        a = "string" != typeof e && x(e);
      if (!E.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && x.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(1 < r.length ? x.uniqueSort(r) : r);
    },
    index: function(e) {
      return e
        ? "string" == typeof e
          ? l.call(x(e), this[0])
          : l.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(e, t) {
      return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }),
    x.each(
      {
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
          return S(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
          return S(e, "parentNode", n);
        },
        next: function(e) {
          return _(e, "nextSibling");
        },
        prev: function(e) {
          return _(e, "previousSibling");
        },
        nextAll: function(e) {
          return S(e, "nextSibling");
        },
        prevAll: function(e) {
          return S(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
          return S(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
          return S(e, "previousSibling", n);
        },
        siblings: function(e) {
          return A((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return A(e.firstChild);
        },
        contents: function(e) {
          return void 0 !== e.contentDocument
            ? e.contentDocument
            : (P(e, "template") && (e = e.content || e),
              x.merge([], e.childNodes));
        }
      },
      function(e, t) {
        x.fn[e] = function(n, i) {
          var o = x.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = x.filter(i, o)),
            1 < this.length &&
              (N[e] || x.uniqueSort(o), q.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var L = /[^\x20\t\r\n\f]+/g;
  function I(e) {
    return e;
  }
  function H(e) {
    throw e;
  }
  function z(e, t, n, i) {
    var o;
    try {
      e && v((o = e.promise))
        ? o
            .call(e)
            .done(t)
            .fail(n)
        : e && v((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (x.Callbacks = function(e) {
    var t;
    e =
      "string" == typeof e
        ? ((t = {}),
          x.each(e.match(L) || [], function(e, n) {
            t[n] = !0;
          }),
          t)
        : x.extend({}, e);
    var n,
      i,
      o,
      r,
      a = [],
      s = [],
      l = -1,
      c = function() {
        for (r = r || e.once, o = n = !0; s.length; l = -1)
          for (i = s.shift(); ++l < a.length; )
            !1 === a[l].apply(i[0], i[1]) &&
              e.stopOnFalse &&
              ((l = a.length), (i = !1));
        e.memory || (i = !1), (n = !1), r && (a = i ? [] : "");
      },
      u = {
        add: function() {
          return (
            a &&
              (i && !n && ((l = a.length - 1), s.push(i)),
              (function t(n) {
                x.each(n, function(n, i) {
                  v(i)
                    ? (e.unique && u.has(i)) || a.push(i)
                    : i && i.length && "string" !== b(i) && t(i);
                });
              })(arguments),
              i && !n && c()),
            this
          );
        },
        remove: function() {
          return (
            x.each(arguments, function(e, t) {
              for (var n; -1 < (n = x.inArray(t, a, n)); )
                a.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function(e) {
          return e ? -1 < x.inArray(e, a) : 0 < a.length;
        },
        empty: function() {
          return a && (a = []), this;
        },
        disable: function() {
          return (r = s = []), (a = i = ""), this;
        },
        disabled: function() {
          return !a;
        },
        lock: function() {
          return (r = s = []), i || n || (a = i = ""), this;
        },
        locked: function() {
          return !!r;
        },
        fireWith: function(e, t) {
          return (
            r ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              s.push(t),
              n || c()),
            this
          );
        },
        fire: function() {
          return u.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!o;
        }
      };
    return u;
  }),
    x.extend({
      Deferred: function(t) {
        var n = [
            [
              "notify",
              "progress",
              x.Callbacks("memory"),
              x.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              x.Callbacks("once memory"),
              x.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              x.Callbacks("once memory"),
              x.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ],
          i = "pending",
          o = {
            state: function() {
              return i;
            },
            always: function() {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function(e) {
              return o.then(null, e);
            },
            pipe: function() {
              var e = arguments;
              return x
                .Deferred(function(t) {
                  x.each(n, function(n, i) {
                    var o = v(e[i[4]]) && e[i[4]];
                    r[i[1]](function() {
                      var e = o && o.apply(this, arguments);
                      e && v(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function(t, i, o) {
              var r = 0;
              function a(t, n, i, o) {
                return function() {
                  var s = this,
                    l = arguments,
                    c = function() {
                      var e, c;
                      if (!(t < r)) {
                        if ((e = i.apply(s, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        v(
                          (c =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then)
                        )
                          ? o
                            ? c.call(e, a(r, n, I, o), a(r, n, H, o))
                            : (r++,
                              c.call(
                                e,
                                a(r, n, I, o),
                                a(r, n, H, o),
                                a(r, n, I, n.notifyWith)
                              ))
                          : (i !== I && ((s = void 0), (l = [e])),
                            (o || n.resolveWith)(s, l));
                      }
                    },
                    u = o
                      ? c
                      : function() {
                          try {
                            c();
                          } catch (c) {
                            x.Deferred.exceptionHook &&
                              x.Deferred.exceptionHook(c, u.stackTrace),
                              r <= t + 1 &&
                                (i !== H && ((s = void 0), (l = [c])),
                                n.rejectWith(s, l));
                          }
                        };
                  t
                    ? u()
                    : (x.Deferred.getStackHook &&
                        (u.stackTrace = x.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return x
                .Deferred(function(e) {
                  n[0][3].add(a(0, e, v(o) ? o : I, e.notifyWith)),
                    n[1][3].add(a(0, e, v(t) ? t : I)),
                    n[2][3].add(a(0, e, v(i) ? i : H));
                })
                .promise();
            },
            promise: function(e) {
              return null != e ? x.extend(e, o) : o;
            }
          },
          r = {};
        return (
          x.each(n, function(e, t) {
            var a = t[2],
              s = t[5];
            (o[t[1]] = a.add),
              s &&
                a.add(
                  function() {
                    i = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (r[t[0]] = function() {
                return (
                  r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + "With"] = a.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function(e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          a = x.Deferred(),
          s = function(e) {
            return function(n) {
              (i[e] = this),
                (o[e] = 1 < arguments.length ? r.call(arguments) : n),
                --t || a.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (z(e, a.done(s(n)).resolve, a.reject, !t),
          "pending" === a.state() || v(o[n] && o[n].then))
        )
          return a.then();
        for (; n--; ) z(o[n], s(n), a.reject);
        return a.promise();
      }
    });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (x.Deferred.exceptionHook = function(t, n) {
    e.console &&
      e.console.warn &&
      t &&
      $.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (x.readyException = function(t) {
      e.setTimeout(function() {
        throw t;
      });
    });
  var V = x.Deferred();
  function W() {
    i.removeEventListener("DOMContentLoaded", W),
      e.removeEventListener("load", W),
      x.ready();
  }
  (x.fn.ready = function(e) {
    return (
      V.then(e).catch(function(e) {
        x.readyException(e);
      }),
      this
    );
  }),
    x.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --x.readyWait : x.isReady) ||
          ((x.isReady = !0) !== e && 0 < --x.readyWait) ||
          V.resolveWith(i, [x]);
      }
    }),
    (x.ready.then = V.then),
    "complete" === i.readyState ||
    ("loading" !== i.readyState && !i.documentElement.doScroll)
      ? e.setTimeout(x.ready)
      : (i.addEventListener("DOMContentLoaded", W),
        e.addEventListener("load", W));
  var R = function(e, t, n, i, o, r, a) {
      var s = 0,
        l = e.length,
        c = null == n;
      if ("object" === b(n))
        for (s in ((o = !0), n)) R(e, t, s, n[s], !0, r, a);
      else if (
        void 0 !== i &&
        ((o = !0),
        v(i) || (a = !0),
        c &&
          (a
            ? (t.call(e, i), (t = null))
            : ((c = t),
              (t = function(e, t, n) {
                return c.call(x(e), n);
              }))),
        t)
      )
        for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
    },
    F = /^-ms-/,
    X = /-([a-z])/g;
  function Q(e, t) {
    return t.toUpperCase();
  }
  function B(e) {
    return e.replace(F, "ms-").replace(X, Q);
  }
  var Y = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function U() {
    this.expando = x.expando + U.uid++;
  }
  (U.uid = 1),
    (U.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                  }))),
          t
        );
      },
      set: function(e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[B(t)] = n;
        else for (i in t) o[B(i)] = t[i];
        return o;
      },
      get: function(e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][B(t)];
      },
      access: function(e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function(e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(B)
              : (t = B(t)) in i
              ? [t]
              : t.match(L) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || x.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !x.isEmptyObject(t);
      }
    });
  var G = new U(),
    Z = new U(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function ee(e, t, n) {
    var i, o;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n =
            "true" === (o = n) ||
            ("false" !== o &&
              ("null" === o
                ? null
                : o === +o + ""
                ? +o
                : J.test(o)
                ? JSON.parse(o)
                : o));
        } catch (e) {}
        Z.set(e, t, n);
      } else n = void 0;
    return n;
  }
  x.extend({
    hasData: function(e) {
      return Z.hasData(e) || G.hasData(e);
    },
    data: function(e, t, n) {
      return Z.access(e, t, n);
    },
    removeData: function(e, t) {
      Z.remove(e, t);
    },
    _data: function(e, t, n) {
      return G.access(e, t, n);
    },
    _removeData: function(e, t) {
      G.remove(e, t);
    }
  }),
    x.fn.extend({
      data: function(e, t) {
        var n,
          i,
          o,
          r = this[0],
          a = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = Z.get(r)), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (i = a[n].name).indexOf("data-") &&
                ((i = B(i.slice(5))), ee(r, i, o[i]));
            G.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function() {
              Z.set(this, e);
            })
          : R(
              this,
              function(t) {
                var n;
                if (r && void 0 === t)
                  return void 0 !== (n = Z.get(r, e))
                    ? n
                    : void 0 !== (n = ee(r, e))
                    ? n
                    : void 0;
                this.each(function() {
                  Z.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function(e) {
        return this.each(function() {
          Z.remove(this, e);
        });
      }
    }),
    x.extend({
      queue: function(e, t, n) {
        var i;
        if (e)
          return (
            (i = G.get(e, (t = (t || "fx") + "queue"))),
            n &&
              (!i || Array.isArray(n)
                ? (i = G.access(e, t, x.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function(e, t) {
        var n = x.queue(e, (t = t || "fx")),
          i = n.length,
          o = n.shift(),
          r = x._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(
              e,
              function() {
                x.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return (
          G.get(e, n) ||
          G.access(e, n, {
            empty: x.Callbacks("once memory").add(function() {
              G.remove(e, [t + "queue", n]);
            })
          })
        );
      }
    }),
    x.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? x.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
              })
        );
      },
      dequeue: function(e) {
        return this.each(function() {
          x.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", []);
      },
      promise: function(e, t) {
        var n,
          i = 1,
          o = x.Deferred(),
          r = this,
          a = this.length,
          s = function() {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = G.get(r[a], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), o.promise(t);
      }
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    ie = ["Top", "Right", "Bottom", "Left"],
    oe = i.documentElement,
    re = function(e) {
      return x.contains(e.ownerDocument, e);
    },
    ae = { composed: !0 };
  oe.getRootNode &&
    (re = function(e) {
      return (
        x.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      );
    });
  var se = function(e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && re(e) && "none" === x.css(e, "display"))
      );
    },
    le = function(e, t, n, i) {
      var o,
        r,
        a = {};
      for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = a[r];
      return o;
    };
  function ce(e, t, n, i) {
    var o,
      r,
      a = 20,
      s = i
        ? function() {
            return i.cur();
          }
        : function() {
            return x.css(e, t, "");
          },
      l = s(),
      c = (n && n[3]) || (x.cssNumber[t] ? "" : "px"),
      u =
        e.nodeType &&
        (x.cssNumber[t] || ("px" !== c && +l)) &&
        ne.exec(x.css(e, t));
    if (u && u[3] !== c) {
      for (c = c || u[3], u = +(l /= 2) || 1; a--; )
        x.style(e, t, u + c),
          (1 - r) * (1 - (r = s() / l || 0.5)) <= 0 && (a = 0),
          (u /= r);
      x.style(e, t, (u *= 2) + c), (n = n || []);
    }
    return (
      n &&
        ((u = +u || +l || 0),
        (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = u), (i.end = o))),
      o
    );
  }
  var ue = {};
  function de(e, t) {
    for (var n, i, o, r, a, s, l, c = [], u = 0, d = e.length; u < d; u++)
      (i = e[u]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((c[u] = G.get(i, "display") || null),
              c[u] || (i.style.display = "")),
            "" === i.style.display &&
              se(i) &&
              (c[u] =
                ((l = a = r = void 0),
                (a = (o = i).ownerDocument),
                (l = ue[(s = o.nodeName)]) ||
                  ((r = a.body.appendChild(a.createElement(s))),
                  (l = x.css(r, "display")),
                  r.parentNode.removeChild(r),
                  "none" === l && (l = "block"),
                  (ue[s] = l)))))
          : "none" !== n && ((c[u] = "none"), G.set(i, "display", n)));
    for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
    return e;
  }
  x.fn.extend({
    show: function() {
      return de(this, !0);
    },
    hide: function() {
      return de(this);
    },
    toggle: function(e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function() {
            se(this) ? x(this).show() : x(this).hide();
          });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
    fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ve = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  function ge(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && P(e, t)) ? x.merge([e], n) : n
    );
  }
  function me(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"));
  }
  (ve.optgroup = ve.option),
    (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
    (ve.th = ve.td);
  var ye,
    be,
    we = /<|&#?\w+;/;
  function xe(e, t, n, i, o) {
    for (
      var r,
        a,
        s,
        l,
        c,
        u,
        d = t.createDocumentFragment(),
        p = [],
        f = 0,
        h = e.length;
      f < h;
      f++
    )
      if ((r = e[f]) || 0 === r)
        if ("object" === b(r)) x.merge(p, r.nodeType ? [r] : r);
        else if (we.test(r)) {
          for (
            a = a || d.appendChild(t.createElement("div")),
              s = (fe.exec(r) || ["", ""])[1].toLowerCase(),
              a.innerHTML =
                (l = ve[s] || ve._default)[1] + x.htmlPrefilter(r) + l[2],
              u = l[0];
            u--;

          )
            a = a.lastChild;
          x.merge(p, a.childNodes), ((a = d.firstChild).textContent = "");
        } else p.push(t.createTextNode(r));
    for (d.textContent = "", f = 0; (r = p[f++]); )
      if (i && -1 < x.inArray(r, i)) o && o.push(r);
      else if (
        ((c = re(r)), (a = ge(d.appendChild(r), "script")), c && me(a), n)
      )
        for (u = 0; (r = a[u++]); ) he.test(r.type || "") && n.push(r);
    return d;
  }
  (ye = i.createDocumentFragment().appendChild(i.createElement("div"))),
    (be = i.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    ye.appendChild(be),
    (h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ye.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
  var ke = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Se() {
    return !0;
  }
  function Ae() {
    return !1;
  }
  function Ee(e, t) {
    return (
      (e ===
        (function() {
          try {
            return i.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Pe(e, t, n, i, o, r) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
        Pe(e, s, n, i, t[s], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = Ae;
    else if (!o) return e;
    return (
      1 === r &&
        ((a = o),
        ((o = function(e) {
          return x().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = x.guid++))),
      e.each(function() {
        x.event.add(this, t, o, i, n);
      })
    );
  }
  function Oe(e, t, n) {
    n
      ? (G.set(e, t, !1),
        x.event.add(e, t, {
          namespace: !1,
          handler: function(e) {
            var i,
              o,
              a = G.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a.length)
                (x.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((a = r.call(arguments)),
                G.set(this, t, a),
                (i = n(this, t)),
                this[t](),
                a !== (o = G.get(this, t)) || i ? G.set(this, t, !1) : (o = {}),
                a !== o)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), o.value
                );
            } else
              a.length &&
                (G.set(this, t, {
                  value: x.event.trigger(
                    x.extend(a[0], x.Event.prototype),
                    a.slice(1),
                    this
                  )
                }),
                e.stopImmediatePropagation());
          }
        }))
      : void 0 === G.get(e, t) && x.event.add(e, t, Se);
  }
  (x.event = {
    global: {},
    add: function(e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        v,
        g = G.get(e);
      if (g)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && x.find.matchesSelector(oe, o),
            n.guid || (n.guid = x.guid++),
            (l = g.events) || (l = g.events = {}),
            (a = g.handle) ||
              (a = g.handle = function(t) {
                return void 0 !== x && x.event.triggered !== t.type
                  ? x.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
            c = (t = (t || "").match(L) || [""]).length;
          c--;

        )
          (f = v = (s = Te.exec(t[c]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            f &&
              ((d = x.event.special[f] || {}),
              (d =
                x.event.special[(f = (o ? d.delegateType : d.bindType) || f)] ||
                {}),
              (u = x.extend(
                {
                  type: f,
                  origType: v,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && x.expr.match.needsContext.test(o),
                  namespace: h.join(".")
                },
                r
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(e, i, h, a)) ||
                  (e.addEventListener && e.addEventListener(f, a))),
              d.add &&
                (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (x.event.global[f] = !0));
    },
    remove: function(e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        v,
        g = G.hasData(e) && G.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(L) || [""]).length; c--; )
          if (
            ((f = v = (s = Te.exec(t[c]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            f)
          ) {
            for (
              d = x.event.special[f] || {},
                p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = r = p.length;
              r--;

            )
              (u = p[r]),
                (!o && v !== u.origType) ||
                  (n && n.guid !== u.guid) ||
                  (s && !s.test(u.namespace)) ||
                  (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                  (p.splice(r, 1),
                  u.selector && p.delegateCount--,
                  d.remove && d.remove.call(e, u));
            a &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                x.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) x.event.remove(e, f + t[c], n, i, !0);
        x.isEmptyObject(l) && G.remove(e, "handle events");
      }
    },
    dispatch: function(e) {
      var t,
        n,
        i,
        o,
        r,
        a,
        s = x.event.fix(e),
        l = new Array(arguments.length),
        c = (G.get(this, "events") || {})[s.type] || [],
        u = x.event.special[s.type] || {};
      for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, s))
      ) {
        for (
          a = x.event.handlers.call(this, s, c), t = 0;
          (o = a[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== r.namespace &&
              !s.rnamespace.test(r.namespace)) ||
              ((s.handleObj = r),
              (s.data = r.data),
              void 0 !==
                (i = (
                  (x.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, l)) &&
                !1 === (s.result = i) &&
                (s.preventDefault(), s.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function(e, t) {
      var n,
        i,
        o,
        r,
        a,
        s = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], a = {}, n = 0; n < l; n++)
              void 0 === a[(o = (i = t[n]).selector + " ")] &&
                (a[o] = i.needsContext
                  ? -1 < x(o, this).index(c)
                  : x.find(o, this, null, [c]).length),
                a[o] && r.push(i);
            r.length && s.push({ elem: c, handlers: r });
          }
      return (
        (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s
      );
    },
    addProp: function(e, t) {
      Object.defineProperty(x.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: v(t)
          ? function() {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function(e) {
      return e[x.expando] ? e : new x.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function(e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && P(t, "input") && Oe(t, "click", Se),
            !1
          );
        },
        trigger: function(e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && P(t, "input") && Oe(t, "click"), !0
          );
        },
        _default: function(e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              P(t, "input") &&
              G.get(t, "click")) ||
            P(t, "a")
          );
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }),
    (x.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (x.Event = function(e, t) {
      if (!(this instanceof x.Event)) return new x.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Se
              : Ae),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && x.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[x.expando] = !0);
    }),
    (x.Event.prototype = {
      constructor: x.Event,
      isDefaultPrevented: Ae,
      isPropagationStopped: Ae,
      isImmediatePropagationStopped: Ae,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Se),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        (this.isPropagationStopped = Se),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Se),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    x.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
          var t = e.button;
          return null == e.which && ke.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        }
      },
      x.event.addProp
    ),
    x.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
      x.event.special[e] = {
        setup: function() {
          return Oe(this, e, Ee), !1;
        },
        trigger: function() {
          return Oe(this, e), !0;
        },
        delegateType: t
      };
    }),
    x.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function(e, t) {
        x.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
            var n,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === this || x.contains(this, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          }
        };
      }
    ),
    x.fn.extend({
      on: function(e, t, n, i) {
        return Pe(this, e, t, n, i);
      },
      one: function(e, t, n, i) {
        return Pe(this, e, t, n, i, 1);
      },
      off: function(e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            x(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ae),
          this.each(function() {
            x.event.remove(this, e, n, t);
          })
        );
      }
    });
  var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Me = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ne(e, t) {
    return (
      (P(e, "table") &&
        P(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        x(e).children("tbody")[0]) ||
      e
    );
  }
  function _e(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Le(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Ie(e, t) {
    var n, i, o, r, a, s, l, c;
    if (1 === t.nodeType) {
      if (
        G.hasData(e) &&
        ((r = G.access(e)), (a = G.set(t, r)), (c = r.events))
      )
        for (o in (delete a.handle, (a.events = {}), c))
          for (n = 0, i = c[o].length; n < i; n++) x.event.add(t, o, c[o][n]);
      Z.hasData(e) && ((s = Z.access(e)), (l = x.extend({}, s)), Z.set(t, l));
    }
  }
  function He(e, t, n, i) {
    t = a.apply([], t);
    var o,
      r,
      s,
      l,
      c,
      u,
      d = 0,
      p = e.length,
      f = p - 1,
      g = t[0],
      m = v(g);
    if (m || (1 < p && "string" == typeof g && !h.checkClone && je.test(g)))
      return e.each(function(o) {
        var r = e.eq(o);
        m && (t[0] = g.call(this, o, r.html())), He(r, t, n, i);
      });
    if (
      p &&
      ((r = (o = xe(t, e[0].ownerDocument, !1, e, i)).firstChild),
      1 === o.childNodes.length && (o = r),
      r || i)
    ) {
      for (l = (s = x.map(ge(o, "script"), _e)).length; d < p; d++)
        (c = o),
          d !== f &&
            ((c = x.clone(c, !0, !0)), l && x.merge(s, ge(c, "script"))),
          n.call(e[d], c, d);
      if (l)
        for (u = s[s.length - 1].ownerDocument, x.map(s, Le), d = 0; d < l; d++)
          he.test((c = s[d]).type || "") &&
            !G.access(c, "globalEval") &&
            x.contains(u, c) &&
            (c.src && "module" !== (c.type || "").toLowerCase()
              ? x._evalUrl &&
                !c.noModule &&
                x._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") })
              : y(c.textContent.replace(qe, ""), c, u));
    }
    return e;
  }
  function ze(e, t, n) {
    for (var i, o = t ? x.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || x.cleanData(ge(i)),
        i.parentNode &&
          (n && re(i) && me(ge(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  x.extend({
    htmlPrefilter: function(e) {
      return e.replace(De, "<$1></$2>");
    },
    clone: function(e, t, n) {
      var i,
        o,
        r,
        a,
        s,
        l,
        c,
        u = e.cloneNode(!0),
        d = re(e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          x.isXMLDoc(e)
        )
      )
        for (a = ge(u), i = 0, o = (r = ge(e)).length; i < o; i++)
          (s = r[i]),
            "input" === (c = (l = a[i]).nodeName.toLowerCase()) &&
            pe.test(s.type)
              ? (l.checked = s.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (r = r || ge(e), a = a || ge(u), i = 0, o = r.length; i < o; i++)
            Ie(r[i], a[i]);
        else Ie(e, u);
      return (
        0 < (a = ge(u, "script")).length && me(a, !d && ge(e, "script")), u
      );
    },
    cleanData: function(e) {
      for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (Y(n)) {
          if ((t = n[G.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
            n[G.expando] = void 0;
          }
          n[Z.expando] && (n[Z.expando] = void 0);
        }
    }
  }),
    x.fn.extend({
      detach: function(e) {
        return ze(this, e, !0);
      },
      remove: function(e) {
        return ze(this, e);
      },
      text: function(e) {
        return R(
          this,
          function(e) {
            return void 0 === e
              ? x.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function() {
        return He(this, arguments, function(e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ne(this, e).appendChild(e);
        });
      },
      prepend: function() {
        return He(this, arguments, function(e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Ne(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return He(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return He(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (x.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function(e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function() {
            return x.clone(this, e, t);
          })
        );
      },
      html: function(e) {
        return R(
          this,
          function(e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Me.test(e) &&
              !ve[(fe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = x.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (x.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function() {
        var e = [];
        return He(
          this,
          arguments,
          function(t) {
            var n = this.parentNode;
            x.inArray(this, e) < 0 &&
              (x.cleanData(ge(this)), n && n.replaceChild(t, this));
          },
          e
        );
      }
    }),
    x.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function(e, t) {
        x.fn[e] = function(e) {
          for (var n, i = [], o = x(e), r = o.length - 1, a = 0; a <= r; a++)
            (n = a === r ? this : this.clone(!0)),
              x(o[a])[t](n),
              s.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Ve = function(t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    We = new RegExp(ie.join("|"), "i");
  function Re(e, t, n) {
    var i,
      o,
      r,
      a,
      s = e.style;
    return (
      (n = n || Ve(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          re(e) ||
          (a = x.style(e, t)),
        !h.pixelBoxStyles() &&
          $e.test(a) &&
          We.test(t) &&
          ((i = s.width),
          (o = s.minWidth),
          (r = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = o),
          (s.maxWidth = r))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !(function() {
    function t() {
      if (u) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          oe.appendChild(c).appendChild(u);
        var t = e.getComputedStyle(u);
        (o = "1%" !== t.top),
          (l = 12 === n(t.marginLeft)),
          (u.style.right = "60%"),
          (s = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (u.style.position = "absolute"),
          (a = 12 === n(u.offsetWidth / 3)),
          oe.removeChild(c),
          (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var o,
      r,
      a,
      s,
      l,
      c = i.createElement("div"),
      u = i.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === u.style.backgroundClip),
      x.extend(h, {
        boxSizingReliable: function() {
          return t(), r;
        },
        pixelBoxStyles: function() {
          return t(), s;
        },
        pixelPosition: function() {
          return t(), o;
        },
        reliableMarginLeft: function() {
          return t(), l;
        },
        scrollboxSize: function() {
          return t(), a;
        }
      }));
  })();
  var Xe = ["Webkit", "Moz", "ms"],
    Qe = i.createElement("div").style,
    Be = {};
  function Ye(e) {
    return (
      x.cssProps[e] ||
      Be[e] ||
      (e in Qe
        ? e
        : (Be[e] =
            (function(e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
                n--;

              )
                if ((e = Xe[n] + t) in Qe) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ze = { position: "absolute", visibility: "hidden", display: "block" },
    Je = { letterSpacing: "0", fontWeight: "400" };
  function Ke(e, t, n) {
    var i = ne.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function et(e, t, n, i, o, r) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (l += x.css(e, n + ie[a], !0, o)),
        i
          ? ("content" === n && (l -= x.css(e, "padding" + ie[a], !0, o)),
            "margin" !== n &&
              (l -= x.css(e, "border" + ie[a] + "Width", !0, o)))
          : ((l += x.css(e, "padding" + ie[a], !0, o)),
            "padding" !== n
              ? (l += x.css(e, "border" + ie[a] + "Width", !0, o))
              : (s += x.css(e, "border" + ie[a] + "Width", !0, o)));
    return (
      !i &&
        0 <= r &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - 0.5
            )
          ) || 0),
      l
    );
  }
  function tt(e, t, n) {
    var i = Ve(e),
      o =
        (!h.boxSizingReliable() || n) &&
        "border-box" === x.css(e, "boxSizing", !1, i),
      r = o,
      a = Re(e, t, i),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!h.boxSizingReliable() && o) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === x.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((o = "border-box" === x.css(e, "boxSizing", !1, i)),
        (r = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        et(e, t, n || (o ? "border" : "content"), r, i, a) +
        "px"
    );
  }
  function nt(e, t, n, i, o) {
    return new nt.prototype.init(e, t, n, i, o);
  }
  x.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Re(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          a,
          s = B(t),
          l = Ge.test(t),
          c = e.style;
        if (
          (l || (t = Ye(s)), (a = x.cssHooks[t] || x.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : c[t];
        "string" == (r = typeof n) &&
          (o = ne.exec(n)) &&
          o[1] &&
          ((n = ce(e, t, o)), (r = "number")),
          null != n &&
            n == n &&
            ("number" !== r ||
              l ||
              (n += (o && o[3]) || (x.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function(e, t, n, i) {
      var o,
        r,
        a,
        s = B(t);
      return (
        Ge.test(t) || (t = Ye(s)),
        (a = x.cssHooks[t] || x.cssHooks[s]) &&
          "get" in a &&
          (o = a.get(e, !0, n)),
        void 0 === o && (o = Re(e, t, i)),
        "normal" === o && t in Je && (o = Je[t]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    }
  }),
    x.each(["height", "width"], function(e, t) {
      x.cssHooks[t] = {
        get: function(e, n, i) {
          if (n)
            return !Ue.test(x.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, t, i)
              : le(e, Ze, function() {
                  return tt(e, t, i);
                });
        },
        set: function(e, n, i) {
          var o,
            r = Ve(e),
            a = !h.scrollboxSize() && "absolute" === r.position,
            s = (a || i) && "border-box" === x.css(e, "boxSizing", !1, r),
            l = i ? et(e, t, i, s, r) : 0;
          return (
            s &&
              a &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(r[t]) -
                  et(e, t, "border", !1, r) -
                  0.5
              )),
            l &&
              (o = ne.exec(n)) &&
              "px" !== (o[3] || "px") &&
              ((e.style[t] = n), (n = x.css(e, t))),
            Ke(0, n, l)
          );
        }
      };
    }),
    (x.cssHooks.marginLeft = Fe(h.reliableMarginLeft, function(e, t) {
      if (t)
        return (
          (parseFloat(Re(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              le(e, { marginLeft: 0 }, function() {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    x.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
      (x.cssHooks[e + t] = {
        expand: function(n) {
          for (
            var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            o[e + ie[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        }
      }),
        "margin" !== e && (x.cssHooks[e + t].set = Ke);
    }),
    x.fn.extend({
      css: function(e, t) {
        return R(
          this,
          function(e, t, n) {
            var i,
              o,
              r = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = Ve(e), o = t.length; a < o; a++)
                r[t[a]] = x.css(e, t[a], !1, i);
              return r;
            }
            return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      }
    }),
    (((x.Tween = nt).prototype = {
      constructor: nt,
      init: function(e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || x.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (x.cssNumber[n] ? "" : "px"));
      },
      cur: function() {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function(e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          (this.pos = t = this.options.duration
            ? x.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              )
            : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = x.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function(e) {
          x.fx.step[e.prop]
            ? x.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!x.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : x.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }).scrollTop = nt.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }),
    (x.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }),
    (x.fx = nt.prototype.init),
    (x.fx.step = {});
  var it,
    ot,
    rt,
    at,
    st = /^(?:toggle|show|hide)$/,
    lt = /queueHooks$/;
  function ct() {
    ot &&
      (!1 === i.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(ct)
        : e.setTimeout(ct, x.fx.interval),
      x.fx.tick());
  }
  function ut() {
    return (
      e.setTimeout(function() {
        it = void 0;
      }),
      (it = Date.now())
    );
  }
  function dt(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o["margin" + (n = ie[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function pt(e, t, n) {
    for (
      var i,
        o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        r = 0,
        a = o.length;
      r < a;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function ft(e, t, n) {
    var i,
      o,
      r = 0,
      a = ft.prefilters.length,
      s = x.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (o) return !1;
        for (
          var t = it || ut(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            r = 0,
            a = c.tweens.length;
          r < a;
          r++
        )
          c.tweens[r].run(i);
        return (
          s.notifyWith(e, [c, i, n]),
          i < 1 && a
            ? n
            : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
        );
      },
      c = s.promise({
        elem: e,
        props: x.extend({}, t),
        opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: it || ut(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var i = x.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function(t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
              : s.rejectWith(e, [c, t]),
            this
          );
        }
      }),
      u = c.props;
    for (
      (function(e, t) {
        var n, i, o, r, a;
        for (n in e)
          if (
            ((o = t[(i = B(n))]),
            (r = e[n]),
            Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
            n !== i && ((e[i] = r), delete e[n]),
            (a = x.cssHooks[i]) && ("expand" in a))
          )
            for (n in ((r = a.expand(r)), delete e[i], r))
              (n in e) || ((e[n] = r[n]), (t[n] = o));
          else t[i] = o;
      })(u, c.opts.specialEasing);
      r < a;
      r++
    )
      if ((i = ft.prefilters[r].call(c, e, u, c.opts)))
        return (
          v(i.stop) &&
            (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      x.map(u, pt, c),
      v(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      x.fx.timer(x.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (x.Animation = x.extend(ft, {
    tweeners: {
      "*": [
        function(e, t) {
          var n = this.createTween(e, t);
          return ce(n.elem, e, ne.exec(t), n), n;
        }
      ]
    },
    tweener: function(e, t) {
      v(e) ? ((t = e), (e = ["*"])) : (e = e.match(L));
      for (var n, i = 0, o = e.length; i < o; i++)
        (ft.tweeners[(n = e[i])] = ft.tweeners[n] || []).unshift(t);
    },
    prefilters: [
      function(e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          p = this,
          f = {},
          h = e.style,
          v = e.nodeType && se(e),
          g = G.get(e, "fxshow");
        for (i in (n.queue ||
          (null == (a = x._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function() {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function() {
            p.always(function() {
              a.unqueued--, x.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (st.test((o = t[i]))) {
            if (
              (delete t[i],
              (r = r || "toggle" === o),
              o === (v ? "hide" : "show"))
            ) {
              if ("show" !== o || !g || void 0 === g[i]) continue;
              v = !0;
            }
            f[i] = (g && g[i]) || x.style(e, i);
          }
        if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f))
          for (i in (d &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (c = g && g.display) && (c = G.get(e, "display")),
            "none" === (u = x.css(e, "display")) &&
              (c
                ? (u = c)
                : (de([e], !0),
                  (c = e.style.display || c),
                  (u = x.css(e, "display")),
                  de([e]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === x.css(e, "float") &&
              (l ||
                (p.done(function() {
                  h.display = c;
                }),
                null == c && (c = "none" === (u = h.display) ? "" : u)),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function() {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1),
          f))
            l ||
              (g
                ? "hidden" in g && (v = g.hidden)
                : (g = G.access(e, "fxshow", { display: c })),
              r && (g.hidden = !v),
              v && de([e], !0),
              p.done(function() {
                for (i in (v || de([e]), G.remove(e, "fxshow"), f))
                  x.style(e, i, f[i]);
              })),
              (l = pt(v ? g[i] : 0, i, p)),
              i in g ||
                ((g[i] = l.start), v && ((l.end = l.start), (l.start = 0)));
      }
    ],
    prefilter: function(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  })),
    (x.speed = function(e, t, n) {
      var i =
        e && "object" == typeof e
          ? x.extend({}, e)
          : {
              complete: n || (!n && t) || (v(e) && e),
              duration: e,
              easing: (n && t) || (t && !v(t) && t)
            };
      return (
        x.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration =
              i.duration in x.fx.speeds
                ? x.fx.speeds[i.duration]
                : x.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function() {
          v(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
        }),
        i
      );
    }),
    x.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function(e, t, n, i) {
        var o = x.isEmptyObject(e),
          r = x.speed(t, n, i),
          a = function() {
            var t = ft(this, x.extend({}, e), r);
            (o || G.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        );
      },
      stop: function(e, t, n) {
        var i = function(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function() {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = x.timers,
              a = G.get(this);
            if (o) a[o] && a[o].stop && i(a[o]);
            else for (o in a) a[o] && a[o].stop && lt.test(o) && i(a[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || x.dequeue(this, e);
          })
        );
      },
      finish: function(e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function() {
            var t,
              n = G.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = x.timers,
              a = i ? i.length : 0;
            for (
              n.finish = !0,
                x.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < a; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    x.each(["toggle", "show", "hide"], function(e, t) {
      var n = x.fn[t];
      x.fn[t] = function(e, i, o) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(dt(t, !0), e, i, o);
      };
    }),
    x.each(
      {
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function(e, t) {
        x.fn[e] = function(e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (x.timers = []),
    (x.fx.tick = function() {
      var e,
        t = 0,
        n = x.timers;
      for (it = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || x.fx.stop(), (it = void 0);
    }),
    (x.fx.timer = function(e) {
      x.timers.push(e), x.fx.start();
    }),
    (x.fx.interval = 13),
    (x.fx.start = function() {
      ot || ((ot = !0), ct());
    }),
    (x.fx.stop = function() {
      ot = null;
    }),
    (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (x.fn.delay = function(t, n) {
      return (
        (t = (x.fx && x.fx.speeds[t]) || t),
        this.queue((n = n || "fx"), function(n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function() {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (rt = i.createElement("input")),
    (at = i.createElement("select").appendChild(i.createElement("option"))),
    (rt.type = "checkbox"),
    (h.checkOn = "" !== rt.value),
    (h.optSelected = at.selected),
    ((rt = i.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (h.radioValue = "t" === rt.value);
  var ht,
    vt = x.expr.attrHandle;
  x.fn.extend({
    attr: function(e, t) {
      return R(this, x.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function(e) {
      return this.each(function() {
        x.removeAttr(this, e);
      });
    }
  }),
    x.extend({
      attr: function(e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? x.prop(e, t, n)
            : ((1 === r && x.isXMLDoc(e)) ||
                (o =
                  x.attrHooks[t.toLowerCase()] ||
                  (x.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void x.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = x.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!h.radioValue && "radio" === t && P(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n,
          i = 0,
          o = t && t.match(L);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      }
    }),
    (ht = {
      set: function(e, t, n) {
        return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }),
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = vt[t] || x.find.attr;
      vt[t] = function(e, t, i) {
        var o,
          r,
          a = t.toLowerCase();
        return (
          i ||
            ((r = vt[a]),
            (vt[a] = o),
            (o = null != n(e, t, i) ? a : null),
            (vt[a] = r)),
          o
        );
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    mt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match(L) || []).join(" ");
  }
  function bt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function wt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(L)) || [];
  }
  x.fn.extend({
    prop: function(e, t) {
      return R(this, x.prop, e, t, 1 < arguments.length);
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[x.propFix[e] || e];
      });
    }
  }),
    x.extend({
      prop: function(e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && x.isXMLDoc(e)) ||
              (o = x.propHooks[(t = x.propFix[t] || t)]),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = x.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    h.optSelected ||
      (x.propHooks.selected = {
        get: function(e) {
          return null;
        },
        set: function(e) {}
      }),
    x.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function() {
        x.propFix[this.toLowerCase()] = this;
      }
    ),
    x.fn.extend({
      addClass: function(e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;
        if (v(e))
          return this.each(function(t) {
            x(this).addClass(e.call(this, t, bt(this)));
          });
        if ((t = wt(e)).length)
          for (; (n = this[l++]); )
            if (((o = bt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))) {
              for (a = 0; (r = t[a++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (s = yt(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function(e) {
        var t,
          n,
          i,
          o,
          r,
          a,
          s,
          l = 0;
        if (v(e))
          return this.each(function(t) {
            x(this).removeClass(e.call(this, t, bt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = wt(e)).length)
          for (; (n = this[l++]); )
            if (((o = bt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))) {
              for (a = 0; (r = t[a++]); )
                for (; -1 < i.indexOf(" " + r + " "); )
                  i = i.replace(" " + r + " ", " ");
              o !== (s = yt(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function(e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : v(e)
          ? this.each(function(n) {
              x(this).toggleClass(e.call(this, n, bt(this), t), t);
            })
          : this.each(function() {
              var t, o, r, a;
              if (i)
                for (o = 0, r = x(this), a = wt(e); (t = a[o++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = bt(this)) && G.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : G.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function(e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && -1 < (" " + yt(bt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      }
    });
  var xt = /\r/g;
  x.fn.extend({
    val: function(e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = v(e)),
          this.each(function(n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, x(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : Array.isArray(o) &&
                  (o = x.map(o, function(e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                x.valHooks[this.type] ||
                x.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(o, "value"))
          ? n
          : "string" == typeof (n = o.value)
          ? n.replace(xt, "")
          : null == n
          ? ""
          : n
        : void 0;
    }
  }),
    x.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = x.find.attr(e, "value");
            return null != t ? t : yt(x.text(e));
          }
        },
        select: {
          get: function(e) {
            var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              l = a ? r + 1 : o.length;
            for (i = r < 0 ? l : a ? r : 0; i < l; i++)
              if (
                ((n = o[i]).selected || i === r) &&
                !n.disabled &&
                (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))
              ) {
                if (((t = x(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function(e, t) {
            for (
              var n, i, o = e.options, r = x.makeArray(t), a = o.length;
              a--;

            )
              ((i = o[a]).selected =
                -1 < x.inArray(x.valHooks.option.get(i), r)) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          }
        }
      }
    }),
    x.each(["radio", "checkbox"], function() {
      (x.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < x.inArray(x(e).val(), t));
        }
      }),
        h.checkOn ||
          (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var kt = /^(?:focusinfocus|focusoutblur)$/,
    Ct = function(e) {
      e.stopPropagation();
    };
  x.extend(x.event, {
    trigger: function(t, n, o, r) {
      var a,
        s,
        l,
        c,
        u,
        p,
        f,
        h,
        m = [o || i],
        y = d.call(t, "type") ? t.type : t,
        b = d.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = l = o = o || i),
        3 !== o.nodeType &&
          8 !== o.nodeType &&
          !kt.test(y + x.event.triggered) &&
          (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
          (u = y.indexOf(":") < 0 && "on" + y),
          ((t = t[x.expando]
            ? t
            : new x.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
          (t.namespace = b.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = o),
          (n = null == n ? [t] : x.makeArray(n, [t])),
          (f = x.event.special[y] || {}),
          r || !f.trigger || !1 !== f.trigger.apply(o, n)))
      ) {
        if (!r && !f.noBubble && !g(o)) {
          for (
            kt.test((c = f.delegateType || y) + y) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            m.push(s), (l = s);
          l === (o.ownerDocument || i) &&
            m.push(l.defaultView || l.parentWindow || e);
        }
        for (a = 0; (s = m[a++]) && !t.isPropagationStopped(); )
          (h = s),
            (t.type = 1 < a ? c : f.bindType || y),
            (p = (G.get(s, "events") || {})[t.type] && G.get(s, "handle")) &&
              p.apply(s, n),
            (p = u && s[u]) &&
              p.apply &&
              Y(s) &&
              ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = y),
          r ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(m.pop(), n)) ||
            !Y(o) ||
            (u &&
              v(o[y]) &&
              !g(o) &&
              ((l = o[u]) && (o[u] = null),
              (x.event.triggered = y),
              t.isPropagationStopped() && h.addEventListener(y, Ct),
              o[y](),
              t.isPropagationStopped() && h.removeEventListener(y, Ct),
              (x.event.triggered = void 0),
              l && (o[u] = l))),
          t.result
        );
      }
    },
    simulate: function(e, t, n) {
      var i = x.extend(new x.Event(), n, { type: e, isSimulated: !0 });
      x.event.trigger(i, null, t);
    }
  }),
    x.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          x.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return x.event.trigger(e, t, n, !0);
      }
    }),
    h.focusin ||
      x.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) {
          x.event.simulate(t, e.target, x.event.fix(e));
        };
        x.event.special[t] = {
          setup: function() {
            var i = this.ownerDocument || this,
              o = G.access(i, t);
            o || i.addEventListener(e, n, !0), G.access(i, t, (o || 0) + 1);
          },
          teardown: function() {
            var i = this.ownerDocument || this,
              o = G.access(i, t) - 1;
            o
              ? G.access(i, t, o)
              : (i.removeEventListener(e, n, !0), G.remove(i, t));
          }
        };
      });
  var Tt = e.location,
    St = Date.now(),
    At = /\?/;
  x.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        x.error("Invalid XML: " + t),
      n
    );
  };
  var Et = /\[\]$/,
    Pt = /\r?\n/g,
    Ot = /^(?:submit|button|image|reset|file)$/i,
    Dt = /^(?:input|select|textarea|keygen)/i;
  function Mt(e, t, n, i) {
    var o;
    if (Array.isArray(t))
      x.each(t, function(t, o) {
        n || Et.test(e)
          ? i(e, o)
          : Mt(
              e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
              o,
              n,
              i
            );
      });
    else if (n || "object" !== b(t)) i(e, t);
    else for (o in t) Mt(e + "[" + o + "]", t[o], n, i);
  }
  (x.param = function(e, t) {
    var n,
      i = [],
      o = function(e, t) {
        var n = v(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
      x.each(e, function() {
        o(this.name, this.value);
      });
    else for (n in e) Mt(n, e[n], t, o);
    return i.join("&");
  }),
    x.fn.extend({
      serialize: function() {
        return x.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = x.prop(this, "elements");
          return e ? x.makeArray(e) : this;
        })
          .filter(function() {
            var e = this.type;
            return (
              this.name &&
              !x(this).is(":disabled") &&
              Dt.test(this.nodeName) &&
              !Ot.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function(e, t) {
            var n = x(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? x.map(n, function(e) {
                  return { name: t.name, value: e.replace(Pt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Pt, "\r\n") };
          })
          .get();
      }
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Nt = /([?&])_=[^&]*/,
    _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    It = /^\/\//,
    Ht = {},
    zt = {},
    $t = "*/".concat("*"),
    Vt = i.createElement("a");
  function Wt(e) {
    return function(t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        o = 0,
        r = t.toLowerCase().match(L) || [];
      if (v(n))
        for (; (i = r[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function Rt(e, t, n, i) {
    var o = {},
      r = e === zt;
    function a(s) {
      var l;
      return (
        (o[s] = !0),
        x.each(e[s] || [], function(e, s) {
          var c = s(t, n, i);
          return "string" != typeof c || r || o[c]
            ? r
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), a(c), !1);
        }),
        l
      );
    }
    return a(t.dataTypes[0]) || (!o["*"] && a("*"));
  }
  function Ft(e, t) {
    var n,
      i,
      o = x.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && x.extend(!0, e, i), e;
  }
  (Vt.href = Tt.href),
    x.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          Tt.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": x.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(e, t) {
        return t ? Ft(Ft(e, x.ajaxSettings), t) : Ft(x.ajaxSettings, e);
      },
      ajaxPrefilter: Wt(Ht),
      ajaxTransport: Wt(zt),
      ajax: function(t, n) {
        "object" == typeof t && ((n = t), (t = void 0));
        var o,
          r,
          a,
          s,
          l,
          c,
          u,
          d,
          p,
          f,
          h = x.ajaxSetup({}, (n = n || {})),
          v = h.context || h,
          g = h.context && (v.nodeType || v.jquery) ? x(v) : x.event,
          m = x.Deferred(),
          y = x.Callbacks("once memory"),
          b = h.statusCode || {},
          w = {},
          k = {},
          C = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (u) {
                if (!s)
                  for (s = {}; (t = _t.exec(a)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function() {
              return u ? a : null;
            },
            setRequestHeader: function(e, t) {
              return (
                null == u &&
                  ((e = k[e.toLowerCase()] = k[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function(e) {
              return null == u && (h.mimeType = e), this;
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (u) T.always(e[T.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function(e) {
              var t = e || C;
              return o && o.abort(t), S(0, t), this;
            }
          };
        if (
          (m.promise(T),
          (h.url = ((t || h.url || Tt.href) + "").replace(
            It,
            Tt.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(L) || [""]),
          null == h.crossDomain)
        ) {
          c = i.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                Vt.protocol + "//" + Vt.host != c.protocol + "//" + c.host);
          } catch (t) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = x.param(h.data, h.traditional)),
          Rt(Ht, h, n, T),
          u)
        )
          return T;
        for (p in ((d = x.event && h.global) &&
          0 == x.active++ &&
          x.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Lt.test(h.type)),
        (r = h.url.replace(qt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(jt, "+"))
          : ((f = h.url.slice(r.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((r += (At.test(r) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((r = r.replace(Nt, "$1")),
              (f = (At.test(r) ? "&" : "?") + "_=" + St++ + f)),
            (h.url = r + f)),
        h.ifModified &&
          (x.lastModified[r] &&
            T.setRequestHeader("If-Modified-Since", x.lastModified[r]),
          x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          T.setRequestHeader("Content-Type", h.contentType),
        T.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          T.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(v, T, h) || u))
          return T.abort();
        if (
          ((C = "abort"),
          y.add(h.complete),
          T.done(h.success),
          T.fail(h.error),
          (o = Rt(zt, h, n, T)))
        ) {
          if (((T.readyState = 1), d && g.trigger("ajaxSend", [T, h]), u))
            return T;
          h.async &&
            0 < h.timeout &&
            (l = e.setTimeout(function() {
              T.abort("timeout");
            }, h.timeout));
          try {
            (u = !1), o.send(w, S);
          } catch (t) {
            if (u) throw t;
            S(-1, t);
          }
        } else S(-1, "No Transport");
        function S(t, n, i, s) {
          var c,
            p,
            f,
            w,
            k,
            C = n;
          u ||
            ((u = !0),
            l && e.clearTimeout(l),
            (o = void 0),
            (a = s || ""),
            (T.readyState = 0 < t ? 4 : 0),
            (c = (200 <= t && t < 300) || 304 === t),
            i &&
              (w = (function(e, t, n) {
                for (
                  var i, o, r, a, s = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === i &&
                      (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                  for (o in s)
                    if (s[o] && s[o].test(i)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (o in n) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      r = o;
                      break;
                    }
                    a || (a = o);
                  }
                  r = r || a;
                }
                if (r) return r !== l[0] && l.unshift(r), n[r];
              })(h, T, i)),
            (w = (function(e, t, n, i) {
              var o,
                r,
                a,
                s,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
              for (r = u.shift(); r; )
                if (
                  (e.responseFields[r] && (n[e.responseFields[r]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = r),
                  (r = u.shift()))
                )
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                    if (!(a = c[l + " " + r] || c["* " + r]))
                      for (o in c)
                        if (
                          (s = o.split(" "))[1] === r &&
                          (a = c[l + " " + s[0]] || c["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = c[o])
                            : !0 !== c[o] && ((r = s[0]), u.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + l + " to " + r
                          };
                        }
                  }
              return { state: "success", data: t };
            })(h, w, T, c)),
            c
              ? (h.ifModified &&
                  ((k = T.getResponseHeader("Last-Modified")) &&
                    (x.lastModified[r] = k),
                  (k = T.getResponseHeader("etag")) && (x.etag[r] = k)),
                204 === t || "HEAD" === h.type
                  ? (C = "nocontent")
                  : 304 === t
                  ? (C = "notmodified")
                  : ((C = w.state), (p = w.data), (c = !(f = w.error))))
              : ((f = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
            (T.status = t),
            (T.statusText = (n || C) + ""),
            c ? m.resolveWith(v, [p, C, T]) : m.rejectWith(v, [T, C, f]),
            T.statusCode(b),
            (b = void 0),
            d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : f]),
            y.fireWith(v, [T, C]),
            d &&
              (g.trigger("ajaxComplete", [T, h]),
              --x.active || x.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function(e, t, n) {
        return x.get(e, t, n, "json");
      },
      getScript: function(e, t) {
        return x.get(e, void 0, t, "script");
      }
    }),
    x.each(["get", "post"], function(e, t) {
      x[t] = function(e, n, i, o) {
        return (
          v(n) && ((o = o || i), (i = n), (n = void 0)),
          x.ajax(
            x.extend(
              { url: e, type: t, dataType: o, data: n, success: i },
              x.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (x._evalUrl = function(e, t) {
      return x.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function() {} },
        dataFilter: function(e) {
          x.globalEval(e, t);
        }
      });
    }),
    x.fn.extend({
      wrapAll: function(e) {
        var t;
        return (
          this[0] &&
            (v(e) && (e = e.call(this[0])),
            (t = x(e, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function() {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function(e) {
        return v(e)
          ? this.each(function(t) {
              x(this).wrapInner(e.call(this, t));
            })
          : this.each(function() {
              var t = x(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function(e) {
        var t = v(e);
        return this.each(function(n) {
          x(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function(e) {
        return (
          this.parent(e)
            .not("body")
            .each(function() {
              x(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (x.expr.pseudos.hidden = function(e) {
      return !x.expr.pseudos.visible(e);
    }),
    (x.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (x.ajaxSettings.xhr = function() {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var Xt = { 0: 200, 1223: 204 },
    Qt = x.ajaxSettings.xhr();
  (h.cors = !!Qt && "withCredentials" in Qt),
    (h.ajax = Qt = !!Qt),
    x.ajaxTransport(function(t) {
      var n, i;
      if (h.cors || (Qt && !t.crossDomain))
        return {
          send: function(o, r) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              o["X-Requested-With"] ||
              (o["X-Requested-With"] = "XMLHttpRequest"),
            o))
              s.setRequestHeader(a, o[a]);
            (n = function(e) {
              return function() {
                n &&
                  ((n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? r(0, "error")
                      : r(s.status, s.statusText)
                    : r(
                        Xt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (i = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = i)
                : (s.onreadystatechange = function() {
                    4 === s.readyState &&
                      e.setTimeout(function() {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (o) {
              if (n) throw o;
            }
          },
          abort: function() {
            n && n();
          }
        };
    }),
    x.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    x.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function(e) {
          return x.globalEval(e), e;
        }
      }
    }),
    x.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    x.ajaxTransport("script", function(e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function(o, r) {
            (t = x("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function(e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              i.head.appendChild(t[0]);
          },
          abort: function() {
            n && n();
          }
        };
    });
  var Bt,
    Yt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Yt.pop() || x.expando + "_" + St++;
      return (this[e] = !0), e;
    }
  }),
    x.ajaxPrefilter("json jsonp", function(t, n, i) {
      var o,
        r,
        a,
        s =
          !1 !== t.jsonp &&
          (Ut.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (o = t.jsonpCallback = v(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Ut, "$1" + o))
            : !1 !== t.jsonp &&
              (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function() {
            return a || x.error(o + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[o]),
          (e[o] = function() {
            a = arguments;
          }),
          i.always(function() {
            void 0 === r ? x(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(o)),
              a && v(r) && r(a[0]),
              (a = r = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      (((Bt = i.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Bt.childNodes.length)),
    (x.parseHTML = function(e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((o = (t = i.implementation.createHTMLDocument(
                  ""
                )).createElement("base")).href = i.location.href),
                t.head.appendChild(o))
              : (t = i)),
          (a = !n && []),
          (r = O.exec(e))
            ? [t.createElement(r[1])]
            : ((r = xe([e], t, a)),
              a && a.length && x(a).remove(),
              x.merge([], r.childNodes)));
      var o, r, a;
    }),
    (x.fn.load = function(e, t, n) {
      var i,
        o,
        r,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((i = yt(e.slice(s))), (e = e.slice(0, s))),
        v(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        0 < a.length &&
          x
            .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
            .done(function(e) {
              (r = arguments),
                a.html(
                  i
                    ? x("<div>")
                        .append(x.parseHTML(e))
                        .find(i)
                    : e
                );
            })
            .always(
              n &&
                function(e, t) {
                  a.each(function() {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    x.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function(e, t) {
        x.fn[t] = function(e) {
          return this.on(t, e);
        };
      }
    ),
    (x.expr.pseudos.animated = function(e) {
      return x.grep(x.timers, function(t) {
        return e === t.elem;
      }).length;
    }),
    (x.offset = {
      setOffset: function(e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l,
          c = x.css(e, "position"),
          u = x(e),
          d = {};
        "static" === c && (e.style.position = "relative"),
          (s = u.offset()),
          (r = x.css(e, "top")),
          (l = x.css(e, "left")),
          ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto")
            ? ((a = (i = u.position()).top), (o = i.left))
            : ((a = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          v(t) && (t = t.call(e, n, x.extend({}, s))),
          null != t.top && (d.top = t.top - s.top + a),
          null != t.left && (d.left = t.left - s.left + o),
          "using" in t ? t.using.call(e, d) : u.css(d);
      }
    }),
    x.fn.extend({
      offset: function(e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function(t) {
                x.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? {
                top:
                  (t = i.getBoundingClientRect()).top +
                  (n = i.ownerDocument.defaultView).pageYOffset,
                left: t.left + n.pageXOffset
              }
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function() {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === x.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0)),
              (o.left += x.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - o.top - x.css(i, "marginTop", !0),
            left: t.left - o.left - x.css(i, "marginLeft", !0)
          };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var e = this.offsetParent;
            e && "static" === x.css(e, "position");

          )
            e = e.offsetParent;
          return e || oe;
        });
      }
    }),
    x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      e,
      t
    ) {
      var n = "pageYOffset" === t;
      x.fn[e] = function(i) {
        return R(
          this,
          function(e, i, o) {
            var r;
            if (
              (g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
              void 0 === o)
            )
              return r ? r[t] : e[i];
            r
              ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
              : (e[i] = o);
          },
          e,
          i,
          arguments.length
        );
      };
    }),
    x.each(["top", "left"], function(e, t) {
      x.cssHooks[t] = Fe(h.pixelPosition, function(e, n) {
        if (n)
          return (n = Re(e, t)), $e.test(n) ? x(e).position()[t] + "px" : n;
      });
    }),
    x.each({ Height: "height", Width: "width" }, function(e, t) {
      x.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(
        n,
        i
      ) {
        x.fn[i] = function(o, r) {
          var a = arguments.length && (n || "boolean" != typeof o),
            s = n || (!0 === o || !0 === r ? "margin" : "border");
          return R(
            this,
            function(t, n, o) {
              var r;
              return g(t)
                ? 0 === i.indexOf("outer")
                  ? t["inner" + e]
                  : t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((r = t.documentElement),
                  Math.max(
                    t.body["scroll" + e],
                    r["scroll" + e],
                    t.body["offset" + e],
                    r["offset" + e],
                    r["client" + e]
                  ))
                : void 0 === o
                ? x.css(t, n, s)
                : x.style(t, n, o, s);
            },
            t,
            a ? o : void 0,
            a
          );
        };
      });
    }),
    x.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function(e, t) {
        x.fn[t] = function(e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    x.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }),
    x.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      }
    }),
    (x.proxy = function(e, t) {
      var n, i, o;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
        return (
          (i = r.call(arguments, 2)),
          ((o = function() {
            return e.apply(t || this, i.concat(r.call(arguments)));
          }).guid = e.guid = e.guid || x.guid++),
          o
        );
    }),
    (x.holdReady = function(e) {
      e ? x.readyWait++ : x.ready(!0);
    }),
    (x.isArray = Array.isArray),
    (x.parseJSON = JSON.parse),
    (x.nodeName = P),
    (x.isFunction = v),
    (x.isWindow = g),
    (x.camelCase = B),
    (x.type = b),
    (x.now = Date.now),
    (x.isNumeric = function(e) {
      var t = x.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function() {
        return x;
      });
  var Gt = e.jQuery,
    Zt = e.$;
  return (
    (x.noConflict = function(t) {
      return e.$ === x && (e.$ = Zt), t && e.jQuery === x && (e.jQuery = Gt), x;
    }),
    t || (e.jQuery = e.$ = x),
    x
  );
});
var _createClass = (function() {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  return function(t, n, i) {
    return n && e(t.prototype, n), i && e(t, i), t;
  };
})();
"undefined" == typeof jQuery &&
  ("function" == typeof require
    ? (jQuery = $ = require("jquery"))
    : (jQuery = $)),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function(t) {
          return e(t);
        })
      : "object" == typeof module && "object" == typeof module.exports
      ? (exports = e(require("jquery")))
      : e(jQuery);
  })(function(e) {
    function t(e) {
      var t = 7.5625,
        n = 2.75;
      return e < 1 / n
        ? t * e * e
        : e < 2 / n
        ? t * (e -= 1.5 / n) * e + 0.75
        : e < 2.5 / n
        ? t * (e -= 2.25 / n) * e + 0.9375
        : t * (e -= 2.625 / n) * e + 0.984375;
    }
    e.easing.jswing = e.easing.swing;
    var n = Math.pow,
      i = Math.sqrt,
      o = Math.sin,
      r = Math.cos,
      a = Math.PI,
      s = 1.70158,
      l = 1.525 * s,
      c = (2 * a) / 3,
      u = (2 * a) / 4.5;
    e.extend(e.easing, {
      def: "easeOutQuad",
      swing: function(t) {
        return e.easing[e.easing.def](t);
      },
      easeInQuad: function(e) {
        return e * e;
      },
      easeOutQuad: function(e) {
        return 1 - (1 - e) * (1 - e);
      },
      easeInOutQuad: function(e) {
        return e < 0.5 ? 2 * e * e : 1 - n(-2 * e + 2, 2) / 2;
      },
      easeInCubic: function(e) {
        return e * e * e;
      },
      easeOutCubic: function(e) {
        return 1 - n(1 - e, 3);
      },
      easeInOutCubic: function(e) {
        return e < 0.5 ? 4 * e * e * e : 1 - n(-2 * e + 2, 3) / 2;
      },
      easeInQuart: function(e) {
        return e * e * e * e;
      },
      easeOutQuart: function(e) {
        return 1 - n(1 - e, 4);
      },
      easeInOutQuart: function(e) {
        return e < 0.5 ? 8 * e * e * e * e : 1 - n(-2 * e + 2, 4) / 2;
      },
      easeInQuint: function(e) {
        return e * e * e * e * e;
      },
      easeOutQuint: function(e) {
        return 1 - n(1 - e, 5);
      },
      easeInOutQuint: function(e) {
        return e < 0.5 ? 16 * e * e * e * e * e : 1 - n(-2 * e + 2, 5) / 2;
      },
      easeInSine: function(e) {
        return 1 - r((e * a) / 2);
      },
      easeOutSine: function(e) {
        return o((e * a) / 2);
      },
      easeInOutSine: function(e) {
        return -(r(a * e) - 1) / 2;
      },
      easeInExpo: function(e) {
        return 0 === e ? 0 : n(2, 10 * e - 10);
      },
      easeOutExpo: function(e) {
        return 1 === e ? 1 : 1 - n(2, -10 * e);
      },
      easeInOutExpo: function(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : e < 0.5
          ? n(2, 20 * e - 10) / 2
          : (2 - n(2, -20 * e + 10)) / 2;
      },
      easeInCirc: function(e) {
        return 1 - i(1 - n(e, 2));
      },
      easeOutCirc: function(e) {
        return i(1 - n(e - 1, 2));
      },
      easeInOutCirc: function(e) {
        return e < 0.5
          ? (1 - i(1 - n(2 * e, 2))) / 2
          : (i(1 - n(-2 * e + 2, 2)) + 1) / 2;
      },
      easeInElastic: function(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : -n(2, 10 * e - 10) * o((10 * e - 10.75) * c);
      },
      easeOutElastic: function(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : n(2, -10 * e) * o((10 * e - 0.75) * c) + 1;
      },
      easeInOutElastic: function(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : e < 0.5
          ? (-n(2, 20 * e - 10) * o((20 * e - 11.125) * u)) / 2
          : (n(2, -20 * e + 10) * o((20 * e - 11.125) * u)) / 2 + 1;
      },
      easeInBack: function(e) {
        return 2.70158 * e * e * e - s * e * e;
      },
      easeOutBack: function(e) {
        return 1 + 2.70158 * n(e - 1, 3) + s * n(e - 1, 2);
      },
      easeInOutBack: function(e) {
        return e < 0.5
          ? (n(2 * e, 2) * (7.189819 * e - l)) / 2
          : (n(2 * e - 2, 2) * ((l + 1) * (2 * e - 2) + l) + 2) / 2;
      },
      easeInBounce: function(e) {
        return 1 - t(1 - e);
      },
      easeOutBounce: t,
      easeInOutBounce: function(e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2;
      }
    });
  }),
  jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(e, t, n, i, o) {
      return (t /= o / 2) < 1
        ? (i / 2) * t * t + n
        : (i / 4) * ((t -= 2) * t * t + 2) + n;
    }
  }),
  jQuery.Velocity
    ? console.log(
        "Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."
      )
    : ((function(e) {
        function t(e) {
          var t = e.length,
            i = n.type(e);
          return (
            "function" !== i &&
            !n.isWindow(e) &&
            (!(1 !== e.nodeType || !t) ||
              "array" === i ||
              0 === t ||
              ("number" == typeof t && t > 0 && t - 1 in e))
          );
        }
        if (!e.jQuery) {
          var n = function(e, t) {
            return new n.fn.init(e, t);
          };
          (n.isWindow = function(e) {
            return null != e && e == e.window;
          }),
            (n.type = function(e) {
              return null == e
                ? e + ""
                : "object" == typeof e || "function" == typeof e
                ? o[a.call(e)] || "object"
                : typeof e;
            }),
            (n.isArray =
              Array.isArray ||
              function(e) {
                return "array" === n.type(e);
              }),
            (n.isPlainObject = function(e) {
              var t;
              if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e))
                return !1;
              try {
                if (
                  e.constructor &&
                  !r.call(e, "constructor") &&
                  !r.call(e.constructor.prototype, "isPrototypeOf")
                )
                  return !1;
              } catch (e) {
                return !1;
              }
              for (t in e);
              return void 0 === t || r.call(e, t);
            }),
            (n.each = function(e, n, i) {
              var o = 0,
                r = e.length,
                a = t(e);
              if (i) {
                if (a) for (; r > o && !1 !== n.apply(e[o], i); o++);
                else for (o in e) if (!1 === n.apply(e[o], i)) break;
              } else if (a) for (; r > o && !1 !== n.call(e[o], o, e[o]); o++);
              else for (o in e) if (!1 === n.call(e[o], o, e[o])) break;
              return e;
            }),
            (n.data = function(e, t, o) {
              if (void 0 === o) {
                var r = (a = e[n.expando]) && i[a];
                if (void 0 === t) return r;
                if (r && t in r) return r[t];
              } else if (void 0 !== t) {
                var a = e[n.expando] || (e[n.expando] = ++n.uuid);
                return (i[a] = i[a] || {}), (i[a][t] = o), o;
              }
            }),
            (n.removeData = function(e, t) {
              var o = e[n.expando],
                r = o && i[o];
              r &&
                n.each(t, function(e, t) {
                  delete r[t];
                });
            }),
            (n.extend = function() {
              var e,
                t,
                i,
                o,
                r,
                a,
                s = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
              for (
                "boolean" == typeof s &&
                  ((u = s), (s = arguments[l] || {}), l++),
                  "object" != typeof s && "function" !== n.type(s) && (s = {}),
                  l === c && ((s = this), l--);
                c > l;
                l++
              )
                if (null != (r = arguments[l]))
                  for (o in r)
                    (e = s[o]),
                      s !== (i = r[o]) &&
                        (u && i && (n.isPlainObject(i) || (t = n.isArray(i)))
                          ? (t
                              ? ((t = !1), (a = e && n.isArray(e) ? e : []))
                              : (a = e && n.isPlainObject(e) ? e : {}),
                            (s[o] = n.extend(u, a, i)))
                          : void 0 !== i && (s[o] = i));
              return s;
            }),
            (n.queue = function(e, i, o) {
              if (e) {
                var r = n.data(e, (i = (i || "fx") + "queue"));
                return o
                  ? (!r || n.isArray(o)
                      ? (r = n.data(
                          e,
                          i,
                          (function(e, n) {
                            var i = [];
                            return (
                              null != e &&
                                (t(Object(e))
                                  ? (function(e, t) {
                                      for (
                                        var n = +t.length, i = 0, o = e.length;
                                        n > i;

                                      )
                                        e[o++] = t[i++];
                                      if (n != n)
                                        for (; void 0 !== t[i]; )
                                          e[o++] = t[i++];
                                      e.length = o;
                                    })(i, "string" == typeof e ? [e] : e)
                                  : [].push.call(i, e)),
                              i
                            );
                          })(o)
                        ))
                      : r.push(o),
                    r)
                  : r || [];
              }
            }),
            (n.dequeue = function(e, t) {
              n.each(e.nodeType ? [e] : e, function(e, i) {
                var o = n.queue(i, (t = t || "fx")),
                  r = o.shift();
                "inprogress" === r && (r = o.shift()),
                  r &&
                    ("fx" === t && o.unshift("inprogress"),
                    r.call(i, function() {
                      n.dequeue(i, t);
                    }));
              });
            }),
            (n.fn = n.prototype = {
              init: function(e) {
                if (e.nodeType) return (this[0] = e), this;
                throw new Error("Not a DOM node.");
              },
              offset: function() {
                var t = this[0].getBoundingClientRect
                  ? this[0].getBoundingClientRect()
                  : { top: 0, left: 0 };
                return {
                  top:
                    t.top +
                    (e.pageYOffset || document.scrollTop || 0) -
                    (document.clientTop || 0),
                  left:
                    t.left +
                    (e.pageXOffset || document.scrollLeft || 0) -
                    (document.clientLeft || 0)
                };
              },
              position: function() {
                function e() {
                  for (
                    var e = this.offsetParent || document;
                    e &&
                    "html" === !e.nodeType.toLowerCase &&
                    "static" === e.style.position;

                  )
                    e = e.offsetParent;
                  return e || document;
                }
                var t = this[0],
                  e = e.apply(t),
                  i = this.offset(),
                  o = /^(?:body|html)$/i.test(e.nodeName)
                    ? { top: 0, left: 0 }
                    : n(e).offset();
                return (
                  (i.top -= parseFloat(t.style.marginTop) || 0),
                  (i.left -= parseFloat(t.style.marginLeft) || 0),
                  e.style &&
                    ((o.top += parseFloat(e.style.borderTopWidth) || 0),
                    (o.left += parseFloat(e.style.borderLeftWidth) || 0)),
                  { top: i.top - o.top, left: i.left - o.left }
                );
              }
            });
          var i = {};
          (n.expando = "velocity" + new Date().getTime()), (n.uuid = 0);
          for (
            var o = {},
              r = o.hasOwnProperty,
              a = o.toString,
              s = "Boolean Number String Function Array Date RegExp Object Error".split(
                " "
              ),
              l = 0;
            l < s.length;
            l++
          )
            o["[object " + s[l] + "]"] = s[l].toLowerCase();
          (n.fn.init.prototype = n.fn), (e.Velocity = { Utilities: n });
        }
      })(window),
      (function(e) {
        "object" == typeof module && "object" == typeof module.exports
          ? (module.exports = e())
          : "function" == typeof define && define.amd
          ? define(e)
          : e();
      })(function() {
        return (function(e, t, n, i) {
          function o(e) {
            return (
              h.isWrapped(e)
                ? (e = [].slice.call(e))
                : h.isNode(e) && (e = [e]),
              e
            );
          }
          function r(e) {
            var t = d.data(e, "velocity");
            return null === t ? i : t;
          }
          function a(e) {
            return function(t) {
              return Math.round(t * e) * (1 / e);
            };
          }
          function s(e, n, i, o) {
            function r(e, t) {
              return 1 - 3 * t + 3 * e;
            }
            function a(e, t) {
              return 3 * t - 6 * e;
            }
            function s(e) {
              return 3 * e;
            }
            function l(e, t, n) {
              return ((r(t, n) * e + a(t, n)) * e + s(t)) * e;
            }
            function c(e, t, n) {
              return 3 * r(t, n) * e * e + 2 * a(t, n) * e + s(t);
            }
            var u = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var d = 0; 4 > d; ++d)
              if (
                "number" != typeof arguments[d] ||
                isNaN(arguments[d]) ||
                !isFinite(arguments[d])
              )
                return !1;
            (e = Math.min(e, 1)),
              (i = Math.min(i, 1)),
              (e = Math.max(e, 0)),
              (i = Math.max(i, 0));
            var p = u ? new Float32Array(11) : new Array(11),
              f = !1,
              h = function(t) {
                return (
                  f ||
                    ((f = !0),
                    (e != n || i != o) &&
                      (function() {
                        for (var t = 0; 11 > t; ++t) p[t] = l(0.1 * t, e, i);
                      })()),
                  e === n && i === o
                    ? t
                    : 0 === t
                    ? 0
                    : 1 === t
                    ? 1
                    : l(
                        (function(t) {
                          for (var n = 0, o = 1; 10 != o && p[o] <= t; ++o)
                            n += 0.1;
                          var r = n + ((t - p[--o]) / (p[o + 1] - p[o])) * 0.1,
                            a = c(r, e, i);
                          return a >= 0.001
                            ? (function(t, n) {
                                for (var o = 0; 4 > o; ++o) {
                                  var r = c(n, e, i);
                                  if (0 === r) return n;
                                  n -= (l(n, e, i) - t) / r;
                                }
                                return n;
                              })(t, r)
                            : 0 == a
                            ? r
                            : (function(t, n, o) {
                                var r,
                                  a,
                                  s = 0;
                                do {
                                  (r = l((a = n + (o - n) / 2), e, i) - t) > 0
                                    ? (o = a)
                                    : (n = a);
                                } while (Math.abs(r) > 1e-7 && ++s < 10);
                                return a;
                              })(t, n, n + 0.1);
                        })(t),
                        n,
                        o
                      )
                );
              };
            h.getControlPoints = function() {
              return [{ x: e, y: n }, { x: i, y: o }];
            };
            var v = "generateBezier(" + [e, n, i, o] + ")";
            return (
              (h.toString = function() {
                return v;
              }),
              h
            );
          }
          function l(e, t) {
            var n = e;
            return (
              h.isString(e)
                ? y.Easings[e] || (n = !1)
                : (n =
                    h.isArray(e) && 1 === e.length
                      ? a.apply(null, e)
                      : h.isArray(e) && 2 === e.length
                      ? b.apply(null, e.concat([t]))
                      : !(!h.isArray(e) || 4 !== e.length) && s.apply(null, e)),
              !1 === n &&
                (n = y.Easings[y.defaults.easing] ? y.defaults.easing : m),
              n
            );
          }
          function c(e) {
            if (e) {
              var t = new Date().getTime(),
                n = y.State.calls.length;
              n > 1e4 &&
                (y.State.calls = (function(e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var o = e[t];
                    o && i.push(o);
                  }
                  return i;
                })(y.State.calls));
              for (var o = 0; n > o; o++)
                if (y.State.calls[o]) {
                  var a = y.State.calls[o],
                    s = a[0],
                    l = a[2],
                    p = a[3],
                    f = !!p,
                    v = null;
                  p || (p = y.State.calls[o][3] = t - 16);
                  for (
                    var g = Math.min((t - p) / l.duration, 1),
                      m = 0,
                      b = s.length;
                    b > m;
                    m++
                  ) {
                    var x = s[m],
                      C = x.element;
                    if (r(C)) {
                      var T = !1;
                      for (var S in (l.display !== i &&
                        null !== l.display &&
                        "none" !== l.display &&
                        ("flex" === l.display &&
                          d.each(
                            [
                              "-webkit-box",
                              "-moz-box",
                              "-ms-flexbox",
                              "-webkit-flex"
                            ],
                            function(e, t) {
                              w.setPropertyValue(C, "display", t);
                            }
                          ),
                        w.setPropertyValue(C, "display", l.display)),
                      l.visibility !== i &&
                        "hidden" !== l.visibility &&
                        w.setPropertyValue(C, "visibility", l.visibility),
                      x))
                        if ("element" !== S) {
                          var A,
                            E = x[S],
                            P = h.isString(E.easing)
                              ? y.Easings[E.easing]
                              : E.easing;
                          if (1 === g) A = E.endValue;
                          else {
                            var O = E.endValue - E.startValue;
                            if (
                              ((A = E.startValue + O * P(g, l, O)),
                              !f && A === E.currentValue)
                            )
                              continue;
                          }
                          if (((E.currentValue = A), "tween" === S)) v = A;
                          else {
                            if (w.Hooks.registered[S]) {
                              var D = w.Hooks.getRoot(S),
                                M = r(C).rootPropertyValueCache[D];
                              M && (E.rootPropertyValue = M);
                            }
                            var j = w.setPropertyValue(
                              C,
                              S,
                              E.currentValue +
                                (0 === parseFloat(A) ? "" : E.unitType),
                              E.rootPropertyValue,
                              E.scrollData
                            );
                            w.Hooks.registered[S] &&
                              (r(C).rootPropertyValueCache[D] = w.Normalizations
                                .registered[D]
                                ? w.Normalizations.registered[D](
                                    "extract",
                                    null,
                                    j[1]
                                  )
                                : j[1]),
                              "transform" === j[0] && (T = !0);
                          }
                        }
                      l.mobileHA &&
                        r(C).transformCache.translate3d === i &&
                        ((r(C).transformCache.translate3d = "(0px, 0px, 0px)"),
                        (T = !0)),
                        T && w.flushTransformCache(C);
                    }
                  }
                  l.display !== i &&
                    "none" !== l.display &&
                    (y.State.calls[o][2].display = !1),
                    l.visibility !== i &&
                      "hidden" !== l.visibility &&
                      (y.State.calls[o][2].visibility = !1),
                    l.progress &&
                      l.progress.call(
                        a[1],
                        a[1],
                        g,
                        Math.max(0, p + l.duration - t),
                        p,
                        v
                      ),
                    1 === g && u(o);
                }
            }
            y.State.isTicking && k(c);
          }
          function u(e, t) {
            if (!y.State.calls[e]) return !1;
            for (
              var n = y.State.calls[e][0],
                o = y.State.calls[e][1],
                a = y.State.calls[e][2],
                s = y.State.calls[e][4],
                l = !1,
                c = 0,
                u = n.length;
              u > c;
              c++
            ) {
              var p = n[c].element;
              if (
                (t ||
                  a.loop ||
                  ("none" === a.display &&
                    w.setPropertyValue(p, "display", a.display),
                  "hidden" === a.visibility &&
                    w.setPropertyValue(p, "visibility", a.visibility)),
                !0 !== a.loop &&
                  (d.queue(p)[1] === i ||
                    !/\.velocityQueueEntryFlag/i.test(d.queue(p)[1])) &&
                  r(p))
              ) {
                (r(p).isAnimating = !1), (r(p).rootPropertyValueCache = {});
                var f = !1;
                d.each(w.Lists.transforms3D, function(e, t) {
                  var n = /^scale/.test(t) ? 1 : 0,
                    o = r(p).transformCache[t];
                  r(p).transformCache[t] !== i &&
                    new RegExp("^\\(" + n + "[^.]").test(o) &&
                    ((f = !0), delete r(p).transformCache[t]);
                }),
                  a.mobileHA &&
                    ((f = !0), delete r(p).transformCache.translate3d),
                  f && w.flushTransformCache(p),
                  w.Values.removeClass(p, "velocity-animating");
              }
              if (!t && a.complete && !a.loop && c === u - 1)
                try {
                  a.complete.call(o, o);
                } catch (e) {
                  setTimeout(function() {
                    throw e;
                  }, 1);
                }
              s && !0 !== a.loop && s(o),
                r(p) &&
                  !0 === a.loop &&
                  !t &&
                  (d.each(r(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) &&
                      360 === parseFloat(t.endValue) &&
                      ((t.endValue = 0), (t.startValue = 360)),
                      /^backgroundPosition/.test(e) &&
                        100 === parseFloat(t.endValue) &&
                        "%" === t.unitType &&
                        ((t.endValue = 0), (t.startValue = 100));
                  }),
                  y(p, "reverse", { loop: !0, delay: a.delay })),
                !1 !== a.queue && d.dequeue(p, a.queue);
            }
            y.State.calls[e] = !1;
            for (var h = 0, v = y.State.calls.length; v > h; h++)
              if (!1 !== y.State.calls[h]) {
                l = !0;
                break;
              }
            !1 === l &&
              ((y.State.isTicking = !1),
              delete y.State.calls,
              (y.State.calls = []));
          }
          var d,
            p = (function() {
              if (n.documentMode) return n.documentMode;
              for (var e = 7; e > 4; e--) {
                var t = n.createElement("div");
                if (
                  ((t.innerHTML =
                    "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e"),
                  t.getElementsByTagName("span").length)
                )
                  return (t = null), e;
              }
              return i;
            })(),
            f = (function() {
              var e = 0;
              return (
                t.webkitRequestAnimationFrame ||
                t.mozRequestAnimationFrame ||
                function(t) {
                  var n,
                    i = new Date().getTime();
                  return (
                    (n = Math.max(0, 16 - (i - e))),
                    (e = i + n),
                    setTimeout(function() {
                      t(i + n);
                    }, n)
                  );
                }
              );
            })(),
            h = {
              isString: function(e) {
                return "string" == typeof e;
              },
              isArray:
                Array.isArray ||
                function(e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                },
              isFunction: function(e) {
                return (
                  "[object Function]" === Object.prototype.toString.call(e)
                );
              },
              isNode: function(e) {
                return e && e.nodeType;
              },
              isNodeList: function(e) {
                return (
                  "object" == typeof e &&
                  /^\[object (HTMLCollection|NodeList|Object)\]$/.test(
                    Object.prototype.toString.call(e)
                  ) &&
                  e.length !== i &&
                  (0 === e.length ||
                    ("object" == typeof e[0] && e[0].nodeType > 0))
                );
              },
              isWrapped: function(e) {
                return e && (e.jquery || (t.Zepto && t.Zepto.zepto.isZ(e)));
              },
              isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement;
              },
              isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0;
              }
            },
            v = !1;
          if (
            (e.fn && e.fn.jquery
              ? ((d = e), (v = !0))
              : (d = t.Velocity.Utilities),
            8 >= p && !v)
          )
            throw new Error(
              "Velocity: IE8 and below require jQuery to be loaded before Velocity."
            );
          if (!(7 >= p)) {
            var g = 400,
              m = "swing",
              y = {
                State: {
                  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ),
                  isAndroid: /Android/i.test(navigator.userAgent),
                  isGingerbread: /Android 2\.3\.[3-7]/i.test(
                    navigator.userAgent
                  ),
                  isChrome: t.chrome,
                  isFirefox: /Firefox/i.test(navigator.userAgent),
                  prefixElement: n.createElement("div"),
                  prefixMatches: {},
                  scrollAnchor: null,
                  scrollPropertyLeft: null,
                  scrollPropertyTop: null,
                  isTicking: !1,
                  calls: []
                },
                CSS: {},
                Utilities: d,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                  queue: "",
                  duration: g,
                  easing: m,
                  begin: i,
                  complete: i,
                  progress: i,
                  display: i,
                  visibility: i,
                  loop: !1,
                  delay: !1,
                  mobileHA: !0,
                  _cacheValues: !0
                },
                init: function(e) {
                  d.data(e, "velocity", {
                    isSVG: h.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                  });
                },
                hook: null,
                mock: !1,
                version: { major: 1, minor: 2, patch: 2 },
                debug: !1
              };
            t.pageYOffset !== i
              ? ((y.State.scrollAnchor = t),
                (y.State.scrollPropertyLeft = "pageXOffset"),
                (y.State.scrollPropertyTop = "pageYOffset"))
              : ((y.State.scrollAnchor =
                  n.documentElement || n.body.parentNode || n.body),
                (y.State.scrollPropertyLeft = "scrollLeft"),
                (y.State.scrollPropertyTop = "scrollTop"));
            var b = (function() {
              function e(e) {
                return -e.tension * e.x - e.friction * e.v;
              }
              function t(t, n, i) {
                var o = {
                  x: t.x + i.dx * n,
                  v: t.v + i.dv * n,
                  tension: t.tension,
                  friction: t.friction
                };
                return { dx: o.v, dv: e(o) };
              }
              function n(n, i) {
                var o = { dx: n.v, dv: e(n) },
                  r = t(n, 0.5 * i, o),
                  a = t(n, 0.5 * i, r),
                  s = t(n, i, a),
                  l = (1 / 6) * (o.dv + 2 * (r.dv + a.dv) + s.dv);
                return (
                  (n.x = n.x + (1 / 6) * (o.dx + 2 * (r.dx + a.dx) + s.dx) * i),
                  (n.v = n.v + l * i),
                  n
                );
              }
              return function e(t, i, o) {
                var r,
                  a,
                  s,
                  l = { x: -1, v: 0, tension: null, friction: null },
                  c = [0],
                  u = 0;
                for (
                  t = parseFloat(t) || 500,
                    i = parseFloat(i) || 20,
                    o = o || null,
                    l.tension = t,
                    l.friction = i,
                    a = (r = null !== o) ? ((u = e(t, i)) / o) * 0.016 : 0.016;
                  (s = n(s || l, a)),
                    c.push(1 + s.x),
                    (u += 16),
                    Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;

                );
                return r
                  ? function(e) {
                      return c[(e * (c.length - 1)) | 0];
                    }
                  : u;
              };
            })();
            (y.Easings = {
              linear: function(e) {
                return e;
              },
              swing: function(e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
              }
            }),
              d.each(
                [
                  ["ease", [0.25, 0.1, 0.25, 1]],
                  ["ease-in", [0.42, 0, 1, 1]],
                  ["ease-out", [0, 0, 0.58, 1]],
                  ["ease-in-out", [0.42, 0, 0.58, 1]],
                  ["easeInSine", [0.47, 0, 0.745, 0.715]],
                  ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                  ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                  ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                  ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                  ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                  ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                  ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                  ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                  ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                  ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                  ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                  ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                  ["easeOutQuint", [0.23, 1, 0.32, 1]],
                  ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                  ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                  ["easeOutExpo", [0.19, 1, 0.22, 1]],
                  ["easeInOutExpo", [1, 0, 0, 1]],
                  ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                  ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                  ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
                ],
                function(e, t) {
                  y.Easings[t[0]] = s.apply(null, t[1]);
                }
              );
            var w = (y.CSS = {
              RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
              },
              Lists: {
                colors: [
                  "fill",
                  "stroke",
                  "stopColor",
                  "color",
                  "backgroundColor",
                  "borderColor",
                  "borderTopColor",
                  "borderRightColor",
                  "borderBottomColor",
                  "borderLeftColor",
                  "outlineColor"
                ],
                transformsBase: [
                  "translateX",
                  "translateY",
                  "scale",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "rotateZ"
                ],
                transforms3D: [
                  "transformPerspective",
                  "translateZ",
                  "scaleZ",
                  "rotateX",
                  "rotateY"
                ]
              },
              Hooks: {
                templates: {
                  textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                  boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                  clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                  backgroundPosition: ["X Y", "0% 0%"],
                  transformOrigin: ["X Y Z", "50% 50% 0px"],
                  perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                  for (o = 0; o < w.Lists.colors.length; o++)
                    w.Hooks.templates[w.Lists.colors[o]] = [
                      "Red Green Blue Alpha",
                      "color" === w.Lists.colors[o]
                        ? "0 0 0 1"
                        : "255 255 255 1"
                    ];
                  var e, t, n;
                  if (p)
                    for (e in w.Hooks.templates) {
                      n = (t = w.Hooks.templates[e])[0].split(" ");
                      var i = t[1].match(w.RegEx.valueSplit);
                      "Color" === n[0] &&
                        (n.push(n.shift()),
                        i.push(i.shift()),
                        (w.Hooks.templates[e] = [n.join(" "), i.join(" ")]));
                    }
                  for (e in w.Hooks.templates)
                    for (var o in (n = (t = w.Hooks.templates[e])[0].split(
                      " "
                    )))
                      w.Hooks.registered[e + n[o]] = [e, o];
                },
                getRoot: function(e) {
                  var t = w.Hooks.registered[e];
                  return t ? t[0] : e;
                },
                cleanRootPropertyValue: function(e, t) {
                  return (
                    w.RegEx.valueUnwrap.test(t) &&
                      (t = t.match(w.RegEx.valueUnwrap)[1]),
                    w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]),
                    t
                  );
                },
                extractValue: function(e, t) {
                  var n = w.Hooks.registered[e];
                  if (n) {
                    var i = n[1];
                    return (t = w.Hooks.cleanRootPropertyValue(n[0], t))
                      .toString()
                      .match(w.RegEx.valueSplit)[i];
                  }
                  return t;
                },
                injectValue: function(e, t, n) {
                  var i = w.Hooks.registered[e];
                  if (i) {
                    var o,
                      r = i[1];
                    return (
                      ((o = (n = w.Hooks.cleanRootPropertyValue(i[0], n))
                        .toString()
                        .match(w.RegEx.valueSplit))[r] = t),
                      o.join(" ")
                    );
                  }
                  return n;
                }
              },
              Normalizations: {
                registered: {
                  clip: function(e, t, n) {
                    switch (e) {
                      case "name":
                        return "clip";
                      case "extract":
                        var i;
                        return w.RegEx.wrappedValueAlreadyExtracted.test(n)
                          ? n
                          : (i = n.toString().match(w.RegEx.valueUnwrap))
                          ? i[1].replace(/,(\s+)?/g, " ")
                          : n;
                      case "inject":
                        return "rect(" + n + ")";
                    }
                  },
                  blur: function(e, t, n) {
                    switch (e) {
                      case "name":
                        return y.State.isFirefox ? "filter" : "-webkit-filter";
                      case "extract":
                        var i = parseFloat(n);
                        if (!i && 0 !== i) {
                          var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                          i = o ? o[1] : 0;
                        }
                        return i;
                      case "inject":
                        return parseFloat(n) ? "blur(" + n + ")" : "none";
                    }
                  },
                  opacity: function(e, t, n) {
                    if (8 >= p)
                      switch (e) {
                        case "name":
                          return "filter";
                        case "extract":
                          var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                          return i ? i[1] / 100 : 1;
                        case "inject":
                          return (
                            (t.style.zoom = 1),
                            parseFloat(n) >= 1
                              ? ""
                              : "alpha(opacity=" +
                                parseInt(100 * parseFloat(n), 10) +
                                ")"
                          );
                      }
                    else
                      switch (e) {
                        case "name":
                          return "opacity";
                        case "extract":
                        case "inject":
                          return n;
                      }
                  }
                },
                register: function() {
                  for (
                    9 >= p ||
                      y.State.isGingerbread ||
                      (w.Lists.transformsBase = w.Lists.transformsBase.concat(
                        w.Lists.transforms3D
                      )),
                      e = 0;
                    e < w.Lists.transformsBase.length;
                    e++
                  )
                    !(function() {
                      var t = w.Lists.transformsBase[e];
                      w.Normalizations.registered[t] = function(e, n, o) {
                        switch (e) {
                          case "name":
                            return "transform";
                          case "extract":
                            return r(n) === i || r(n).transformCache[t] === i
                              ? /^scale/i.test(t)
                                ? 1
                                : 0
                              : r(n).transformCache[t].replace(/[()]/g, "");
                          case "inject":
                            var a = !1;
                            switch (t.substr(0, t.length - 1)) {
                              case "translate":
                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                break;
                              case "scal":
                              case "scale":
                                y.State.isAndroid &&
                                  r(n).transformCache[t] === i &&
                                  1 > o &&
                                  (o = 1),
                                  (a = !/(\d)$/i.test(o));
                                break;
                              case "skew":
                                a = !/(deg|\d)$/i.test(o);
                                break;
                              case "rotate":
                                a = !/(deg|\d)$/i.test(o);
                            }
                            return (
                              a || (r(n).transformCache[t] = "(" + o + ")"),
                              r(n).transformCache[t]
                            );
                        }
                      };
                    })();
                  for (var e = 0; e < w.Lists.colors.length; e++)
                    !(function() {
                      var t = w.Lists.colors[e];
                      w.Normalizations.registered[t] = function(e, n, o) {
                        switch (e) {
                          case "name":
                            return t;
                          case "extract":
                            var r;
                            if (w.RegEx.wrappedValueAlreadyExtracted.test(o))
                              r = o;
                            else {
                              var a,
                                s = {
                                  black: "rgb(0, 0, 0)",
                                  blue: "rgb(0, 0, 255)",
                                  gray: "rgb(128, 128, 128)",
                                  green: "rgb(0, 128, 0)",
                                  red: "rgb(255, 0, 0)",
                                  white: "rgb(255, 255, 255)"
                                };
                              /^[A-z]+$/i.test(o)
                                ? (a = s[o] !== i ? s[o] : s.black)
                                : w.RegEx.isHex.test(o)
                                ? (a =
                                    "rgb(" +
                                    w.Values.hexToRgb(o).join(" ") +
                                    ")")
                                : /^rgba?\(/i.test(o) || (a = s.black),
                                (r = (a || o)
                                  .toString()
                                  .match(w.RegEx.valueUnwrap)[1]
                                  .replace(/,(\s+)?/g, " "));
                            }
                            return (
                              8 >= p ||
                                3 !== r.split(" ").length ||
                                (r += " 1"),
                              r
                            );
                          case "inject":
                            return (
                              8 >= p
                                ? 4 === o.split(" ").length &&
                                  (o = o
                                    .split(/\s+/)
                                    .slice(0, 3)
                                    .join(" "))
                                : 3 === o.split(" ").length && (o += " 1"),
                              (8 >= p ? "rgb" : "rgba") +
                                "(" +
                                o
                                  .replace(/\s+/g, ",")
                                  .replace(/\.(\d)+(?=,)/g, "") +
                                ")"
                            );
                        }
                      };
                    })();
                }
              },
              Names: {
                camelCase: function(e) {
                  return e.replace(/-(\w)/g, function(e, t) {
                    return t.toUpperCase();
                  });
                },
                SVGAttribute: function(e) {
                  var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                  return (
                    (p || (y.State.isAndroid && !y.State.isChrome)) &&
                      (t += "|transform"),
                    new RegExp("^(" + t + ")$", "i").test(e)
                  );
                },
                prefixCheck: function(e) {
                  if (y.State.prefixMatches[e])
                    return [y.State.prefixMatches[e], !0];
                  for (
                    var t = ["", "Webkit", "Moz", "ms", "O"],
                      n = 0,
                      i = t.length;
                    i > n;
                    n++
                  ) {
                    var o;
                    if (
                      ((o =
                        0 === n
                          ? e
                          : t[n] +
                            e.replace(/^\w/, function(e) {
                              return e.toUpperCase();
                            })),
                      h.isString(y.State.prefixElement.style[o]))
                    )
                      return (y.State.prefixMatches[e] = o), [o, !0];
                  }
                  return [e, !1];
                }
              },
              Values: {
                hexToRgb: function(e) {
                  var t;
                  return (
                    (e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(
                      e,
                      t,
                      n,
                      i
                    ) {
                      return t + t + n + n + i + i;
                    })),
                    (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))
                      ? [
                          parseInt(t[1], 16),
                          parseInt(t[2], 16),
                          parseInt(t[3], 16)
                        ]
                      : [0, 0, 0]
                  );
                },
                isCSSNullValue: function(e) {
                  return (
                    0 == e ||
                    /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                  );
                },
                getUnitType: function(e) {
                  return /^(rotate|skew)/i.test(e)
                    ? "deg"
                    : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(
                        e
                      )
                    ? ""
                    : "px";
                },
                getDisplayType: function(e) {
                  var t = e && e.tagName.toString().toLowerCase();
                  return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(
                    t
                  )
                    ? "inline"
                    : /^(li)$/i.test(t)
                    ? "list-item"
                    : /^(tr)$/i.test(t)
                    ? "table-row"
                    : /^(table)$/i.test(t)
                    ? "table"
                    : /^(tbody)$/i.test(t)
                    ? "table-row-group"
                    : "block";
                },
                addClass: function(e, t) {
                  e.classList
                    ? e.classList.add(t)
                    : (e.className += (e.className.length ? " " : "") + t);
                },
                removeClass: function(e, t) {
                  e.classList
                    ? e.classList.remove(t)
                    : (e.className = e.className
                        .toString()
                        .replace(
                          new RegExp(
                            "(^|\\s)" + t.split(" ").join("|") + "(\\s|$)",
                            "gi"
                          ),
                          " "
                        ));
                }
              },
              getPropertyValue: function(e, n, o, a) {
                function s(e, n) {
                  function o() {
                    u && w.setPropertyValue(e, "display", "none");
                  }
                  var l = 0;
                  if (8 >= p) l = d.css(e, n);
                  else {
                    var c,
                      u = !1;
                    if (
                      (/^(width|height)$/.test(n) &&
                        0 === w.getPropertyValue(e, "display") &&
                        ((u = !0),
                        w.setPropertyValue(
                          e,
                          "display",
                          w.Values.getDisplayType(e)
                        )),
                      !a)
                    ) {
                      if (
                        "height" === n &&
                        "border-box" !==
                          w
                            .getPropertyValue(e, "boxSizing")
                            .toString()
                            .toLowerCase()
                      ) {
                        var f =
                          e.offsetHeight -
                          (parseFloat(
                            w.getPropertyValue(e, "borderTopWidth")
                          ) || 0) -
                          (parseFloat(
                            w.getPropertyValue(e, "borderBottomWidth")
                          ) || 0) -
                          (parseFloat(w.getPropertyValue(e, "paddingTop")) ||
                            0) -
                          (parseFloat(w.getPropertyValue(e, "paddingBottom")) ||
                            0);
                        return o(), f;
                      }
                      if (
                        "width" === n &&
                        "border-box" !==
                          w
                            .getPropertyValue(e, "boxSizing")
                            .toString()
                            .toLowerCase()
                      ) {
                        var h =
                          e.offsetWidth -
                          (parseFloat(
                            w.getPropertyValue(e, "borderLeftWidth")
                          ) || 0) -
                          (parseFloat(
                            w.getPropertyValue(e, "borderRightWidth")
                          ) || 0) -
                          (parseFloat(w.getPropertyValue(e, "paddingLeft")) ||
                            0) -
                          (parseFloat(w.getPropertyValue(e, "paddingRight")) ||
                            0);
                        return o(), h;
                      }
                    }
                    (c =
                      r(e) === i
                        ? t.getComputedStyle(e, null)
                        : r(e).computedStyle
                        ? r(e).computedStyle
                        : (r(e).computedStyle = t.getComputedStyle(e, null))),
                      "borderColor" === n && (n = "borderTopColor"),
                      ("" ===
                        (l =
                          9 === p && "filter" === n
                            ? c.getPropertyValue(n)
                            : c[n]) ||
                        null === l) &&
                        (l = e.style[n]),
                      o();
                  }
                  if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                    var v = s(e, "position");
                    ("fixed" === v ||
                      ("absolute" === v && /top|left/i.test(n))) &&
                      (l = d(e).position()[n] + "px");
                  }
                  return l;
                }
                var l;
                if (w.Hooks.registered[n]) {
                  var c = n,
                    u = w.Hooks.getRoot(c);
                  o === i &&
                    (o = w.getPropertyValue(e, w.Names.prefixCheck(u)[0])),
                    w.Normalizations.registered[u] &&
                      (o = w.Normalizations.registered[u]("extract", e, o)),
                    (l = w.Hooks.extractValue(c, o));
                } else if (w.Normalizations.registered[n]) {
                  var f, h;
                  "transform" !==
                    (f = w.Normalizations.registered[n]("name", e)) &&
                    ((h = s(e, w.Names.prefixCheck(f)[0])),
                    w.Values.isCSSNullValue(h) &&
                      w.Hooks.templates[n] &&
                      (h = w.Hooks.templates[n][1])),
                    (l = w.Normalizations.registered[n]("extract", e, h));
                }
                if (!/^[\d-]/.test(l))
                  if (r(e) && r(e).isSVG && w.Names.SVGAttribute(n))
                    if (/^(height|width)$/i.test(n))
                      try {
                        l = e.getBBox()[n];
                      } catch (e) {
                        l = 0;
                      }
                    else l = e.getAttribute(n);
                  else l = s(e, w.Names.prefixCheck(n)[0]);
                return (
                  w.Values.isCSSNullValue(l) && (l = 0),
                  y.debug >= 2 && console.log("Get " + n + ": " + l),
                  l
                );
              },
              setPropertyValue: function(e, n, i, o, a) {
                var s = n;
                if ("scroll" === n)
                  a.container
                    ? (a.container["scroll" + a.direction] = i)
                    : "Left" === a.direction
                    ? t.scrollTo(i, a.alternateValue)
                    : t.scrollTo(a.alternateValue, i);
                else if (
                  w.Normalizations.registered[n] &&
                  "transform" === w.Normalizations.registered[n]("name", e)
                )
                  w.Normalizations.registered[n]("inject", e, i),
                    (s = "transform"),
                    (i = r(e).transformCache[n]);
                else {
                  if (w.Hooks.registered[n]) {
                    var l = n,
                      c = w.Hooks.getRoot(n);
                    (o = o || w.getPropertyValue(e, c)),
                      (i = w.Hooks.injectValue(l, i, o)),
                      (n = c);
                  }
                  if (
                    (w.Normalizations.registered[n] &&
                      ((i = w.Normalizations.registered[n]("inject", e, i)),
                      (n = w.Normalizations.registered[n]("name", e))),
                    (s = w.Names.prefixCheck(n)[0]),
                    8 >= p)
                  )
                    try {
                      e.style[s] = i;
                    } catch (e) {
                      y.debug &&
                        console.log(
                          "Browser does not support [" + i + "] for [" + s + "]"
                        );
                    }
                  else
                    r(e) && r(e).isSVG && w.Names.SVGAttribute(n)
                      ? e.setAttribute(n, i)
                      : (e.style[s] = i);
                  y.debug >= 2 &&
                    console.log("Set " + n + " (" + s + "): " + i);
                }
                return [s, i];
              },
              flushTransformCache: function(e) {
                function t(t) {
                  return parseFloat(w.getPropertyValue(e, t));
                }
                var n = "";
                if (
                  (p || (y.State.isAndroid && !y.State.isChrome)) &&
                  r(e).isSVG
                ) {
                  var i = {
                    translate: [t("translateX"), t("translateY")],
                    skewX: [t("skewX")],
                    skewY: [t("skewY")],
                    scale:
                      1 !== t("scale")
                        ? [t("scale"), t("scale")]
                        : [t("scaleX"), t("scaleY")],
                    rotate: [t("rotateZ"), 0, 0]
                  };
                  d.each(r(e).transformCache, function(e) {
                    /^translate/i.test(e)
                      ? (e = "translate")
                      : /^scale/i.test(e)
                      ? (e = "scale")
                      : /^rotate/i.test(e) && (e = "rotate"),
                      i[e] &&
                        ((n += e + "(" + i[e].join(" ") + ") "), delete i[e]);
                  });
                } else {
                  var o, a;
                  d.each(r(e).transformCache, function(t) {
                    return (
                      (o = r(e).transformCache[t]),
                      "transformPerspective" === t
                        ? ((a = o), !0)
                        : (9 === p && "rotateZ" === t && (t = "rotate"),
                          void (n += t + o + " "))
                    );
                  }),
                    a && (n = "perspective" + a + " " + n);
                }
                w.setPropertyValue(e, "transform", n);
              }
            });
            w.Hooks.register(),
              w.Normalizations.register(),
              (y.hook = function(e, t, n) {
                var a = i;
                return (
                  (e = o(e)),
                  d.each(e, function(e, o) {
                    if ((r(o) === i && y.init(o), n === i))
                      a === i && (a = y.CSS.getPropertyValue(o, t));
                    else {
                      var s = y.CSS.setPropertyValue(o, t, n);
                      "transform" === s[0] && y.CSS.flushTransformCache(o),
                        (a = s);
                    }
                  }),
                  a
                );
              });
            var x = function() {
              function e() {
                return s ? E.promise || null : p;
              }
              function a() {
                function e(e) {
                  function p(e, t) {
                    var n = i,
                      o = i,
                      r = i;
                    return (
                      h.isArray(e)
                        ? ((n = e[0]),
                          (!h.isArray(e[1]) && /^[\d-]/.test(e[1])) ||
                          h.isFunction(e[1]) ||
                          w.RegEx.isHex.test(e[1])
                            ? (r = e[1])
                            : ((h.isString(e[1]) &&
                                !w.RegEx.isHex.test(e[1])) ||
                                h.isArray(e[1])) &&
                              ((o = t ? e[1] : l(e[1], s.duration)),
                              e[2] !== i && (r = e[2])))
                        : (n = e),
                      t || (o = o || s.easing),
                      h.isFunction(n) && (n = n.call(a, T, C)),
                      h.isFunction(r) && (r = r.call(a, T, C)),
                      [n || 0, o, r]
                    );
                  }
                  function f(e, t) {
                    var n, i;
                    return (
                      (i = (t || "0")
                        .toString()
                        .toLowerCase()
                        .replace(/[%A-z]+$/, function(e) {
                          return (n = e), "";
                        })),
                      n || (n = w.Values.getUnitType(e)),
                      [i, n]
                    );
                  }
                  if (s.begin && 0 === T)
                    try {
                      s.begin.call(v, v);
                    } catch (e) {
                      setTimeout(function() {
                        throw e;
                      }, 1);
                    }
                  if ("scroll" === A) {
                    var g,
                      x,
                      k,
                      S = /^x$/i.test(s.axis) ? "Left" : "Top",
                      P = parseFloat(s.offset) || 0;
                    s.container
                      ? h.isWrapped(s.container) || h.isNode(s.container)
                        ? ((s.container = s.container[0] || s.container),
                          (k =
                            (g = s.container["scroll" + S]) +
                            d(a).position()[S.toLowerCase()] +
                            P))
                        : (s.container = null)
                      : ((g =
                          y.State.scrollAnchor[y.State["scrollProperty" + S]]),
                        (x =
                          y.State.scrollAnchor[
                            y.State[
                              "scrollProperty" + ("Left" === S ? "Top" : "Left")
                            ]
                          ]),
                        (k = d(a).offset()[S.toLowerCase()] + P)),
                      (u = {
                        scroll: {
                          rootPropertyValue: !1,
                          startValue: g,
                          currentValue: g,
                          endValue: k,
                          unitType: "",
                          easing: s.easing,
                          scrollData: {
                            container: s.container,
                            direction: S,
                            alternateValue: x
                          }
                        },
                        element: a
                      }),
                      y.debug &&
                        console.log("tweensContainer (scroll): ", u.scroll, a);
                  } else if ("reverse" === A) {
                    if (!r(a).tweensContainer)
                      return void d.dequeue(a, s.queue);
                    for (var O in ("none" === r(a).opts.display &&
                      (r(a).opts.display = "auto"),
                    "hidden" === r(a).opts.visibility &&
                      (r(a).opts.visibility = "visible"),
                    (r(a).opts.loop = !1),
                    (r(a).opts.begin = null),
                    (r(a).opts.complete = null),
                    b.easing || delete s.easing,
                    b.duration || delete s.duration,
                    (s = d.extend({}, r(a).opts, s)),
                    (M = d.extend(!0, {}, r(a).tweensContainer))))
                      if ("element" !== O) {
                        var D = M[O].startValue;
                        (M[O].startValue = M[O].currentValue = M[O].endValue),
                          (M[O].endValue = D),
                          h.isEmptyObject(b) || (M[O].easing = s.easing),
                          y.debug &&
                            console.log(
                              "reverse tweensContainer (" +
                                O +
                                "): " +
                                JSON.stringify(M[O]),
                              a
                            );
                      }
                    u = M;
                  } else if ("start" === A) {
                    var M;
                    for (var N in (r(a).tweensContainer &&
                      !0 === r(a).isAnimating &&
                      (M = r(a).tweensContainer),
                    d.each(m, function(e, t) {
                      if (
                        RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)
                      ) {
                        var n = p(t, !0),
                          o = n[0],
                          r = n[1],
                          a = n[2];
                        if (w.RegEx.isHex.test(o)) {
                          for (
                            var s = ["Red", "Green", "Blue"],
                              l = w.Values.hexToRgb(o),
                              c = a ? w.Values.hexToRgb(a) : i,
                              u = 0;
                            u < s.length;
                            u++
                          ) {
                            var d = [l[u]];
                            r && d.push(r),
                              c !== i && d.push(c[u]),
                              (m[e + s[u]] = d);
                          }
                          delete m[e];
                        }
                      }
                    }),
                    m)) {
                      var _ = p(m[N]),
                        L = _[0],
                        I = _[1],
                        H = _[2];
                      N = w.Names.camelCase(N);
                      var z = w.Hooks.getRoot(N),
                        $ = !1;
                      if (
                        r(a).isSVG ||
                        "tween" === z ||
                        !1 !== w.Names.prefixCheck(z)[1] ||
                        w.Normalizations.registered[z] !== i
                      ) {
                        ((s.display !== i &&
                          null !== s.display &&
                          "none" !== s.display) ||
                          (s.visibility !== i && "hidden" !== s.visibility)) &&
                          /opacity|filter/.test(N) &&
                          !H &&
                          0 !== L &&
                          (H = 0),
                          s._cacheValues && M && M[N]
                            ? (H === i && (H = M[N].endValue + M[N].unitType),
                              ($ = r(a).rootPropertyValueCache[z]))
                            : w.Hooks.registered[N]
                            ? H === i
                              ? (($ = w.getPropertyValue(a, z)),
                                (H = w.getPropertyValue(a, N, $)))
                              : ($ = w.Hooks.templates[z][1])
                            : H === i && (H = w.getPropertyValue(a, N));
                        var V,
                          W,
                          R,
                          F = !1;
                        if (
                          ((H = (V = f(N, H))[0]),
                          (R = V[1]),
                          (L = (V = f(N, L))[0].replace(/^([+-\/*])=/, function(
                            e,
                            t
                          ) {
                            return (F = t), "";
                          })),
                          (W = V[1]),
                          (H = parseFloat(H) || 0),
                          (L = parseFloat(L) || 0),
                          "%" === W &&
                            (/^(fontSize|lineHeight)$/.test(N)
                              ? ((L /= 100), (W = "em"))
                              : /^scale/.test(N)
                              ? ((L /= 100), (W = ""))
                              : /(Red|Green|Blue)$/i.test(N) &&
                                ((L = (L / 100) * 255), (W = ""))),
                          /[\/*]/.test(F))
                        )
                          W = R;
                        else if (R !== W && 0 !== H)
                          if (0 === L) W = R;
                          else {
                            o =
                              o ||
                              (function() {
                                var e = {
                                    myParent: a.parentNode || n.body,
                                    position: w.getPropertyValue(a, "position"),
                                    fontSize: w.getPropertyValue(a, "fontSize")
                                  },
                                  i =
                                    e.position === j.lastPosition &&
                                    e.myParent === j.lastParent,
                                  o = e.fontSize === j.lastFontSize;
                                (j.lastParent = e.myParent),
                                  (j.lastPosition = e.position),
                                  (j.lastFontSize = e.fontSize);
                                var s = 100,
                                  l = {};
                                if (o && i)
                                  (l.emToPx = j.lastEmToPx),
                                    (l.percentToPxWidth =
                                      j.lastPercentToPxWidth),
                                    (l.percentToPxHeight =
                                      j.lastPercentToPxHeight);
                                else {
                                  var c = r(a).isSVG
                                    ? n.createElementNS(
                                        "http://www.w3.org/2000/svg",
                                        "rect"
                                      )
                                    : n.createElement("div");
                                  y.init(c),
                                    e.myParent.appendChild(c),
                                    d.each(
                                      ["overflow", "overflowX", "overflowY"],
                                      function(e, t) {
                                        y.CSS.setPropertyValue(c, t, "hidden");
                                      }
                                    ),
                                    y.CSS.setPropertyValue(
                                      c,
                                      "position",
                                      e.position
                                    ),
                                    y.CSS.setPropertyValue(
                                      c,
                                      "fontSize",
                                      e.fontSize
                                    ),
                                    y.CSS.setPropertyValue(
                                      c,
                                      "boxSizing",
                                      "content-box"
                                    ),
                                    d.each(
                                      [
                                        "minWidth",
                                        "maxWidth",
                                        "width",
                                        "minHeight",
                                        "maxHeight",
                                        "height"
                                      ],
                                      function(e, t) {
                                        y.CSS.setPropertyValue(c, t, s + "%");
                                      }
                                    ),
                                    y.CSS.setPropertyValue(
                                      c,
                                      "paddingLeft",
                                      s + "em"
                                    ),
                                    (l.percentToPxWidth = j.lastPercentToPxWidth =
                                      (parseFloat(
                                        w.getPropertyValue(c, "width", null, !0)
                                      ) || 1) / s),
                                    (l.percentToPxHeight = j.lastPercentToPxHeight =
                                      (parseFloat(
                                        w.getPropertyValue(
                                          c,
                                          "height",
                                          null,
                                          !0
                                        )
                                      ) || 1) / s),
                                    (l.emToPx = j.lastEmToPx =
                                      (parseFloat(
                                        w.getPropertyValue(c, "paddingLeft")
                                      ) || 1) / s),
                                    e.myParent.removeChild(c);
                                }
                                return (
                                  null === j.remToPx &&
                                    (j.remToPx =
                                      parseFloat(
                                        w.getPropertyValue(n.body, "fontSize")
                                      ) || 16),
                                  null === j.vwToPx &&
                                    ((j.vwToPx =
                                      parseFloat(t.innerWidth) / 100),
                                    (j.vhToPx =
                                      parseFloat(t.innerHeight) / 100)),
                                  (l.remToPx = j.remToPx),
                                  (l.vwToPx = j.vwToPx),
                                  (l.vhToPx = j.vhToPx),
                                  y.debug >= 1 &&
                                    console.log(
                                      "Unit ratios: " + JSON.stringify(l),
                                      a
                                    ),
                                  l
                                );
                              })();
                            var X =
                              /margin|padding|left|right|width|text|word|letter/i.test(
                                N
                              ) ||
                              /X$/.test(N) ||
                              "x" === N
                                ? "x"
                                : "y";
                            switch (R) {
                              case "%":
                                H *=
                                  "x" === X
                                    ? o.percentToPxWidth
                                    : o.percentToPxHeight;
                                break;
                              case "px":
                                break;
                              default:
                                H *= o[R + "ToPx"];
                            }
                            switch (W) {
                              case "%":
                                H *=
                                  1 /
                                  ("x" === X
                                    ? o.percentToPxWidth
                                    : o.percentToPxHeight);
                                break;
                              case "px":
                                break;
                              default:
                                H *= 1 / o[W + "ToPx"];
                            }
                          }
                        switch (F) {
                          case "+":
                            L = H + L;
                            break;
                          case "-":
                            L = H - L;
                            break;
                          case "*":
                            L *= H;
                            break;
                          case "/":
                            L = H / L;
                        }
                        (u[N] = {
                          rootPropertyValue: $,
                          startValue: H,
                          currentValue: H,
                          endValue: L,
                          unitType: W,
                          easing: I
                        }),
                          y.debug &&
                            console.log(
                              "tweensContainer (" +
                                N +
                                "): " +
                                JSON.stringify(u[N]),
                              a
                            );
                      } else
                        y.debug &&
                          console.log(
                            "Skipping [" +
                              z +
                              "] due to a lack of browser support."
                          );
                    }
                    u.element = a;
                  }
                  u.element &&
                    (w.Values.addClass(a, "velocity-animating"),
                    q.push(u),
                    "" === s.queue &&
                      ((r(a).tweensContainer = u), (r(a).opts = s)),
                    (r(a).isAnimating = !0),
                    T === C - 1
                      ? (y.State.calls.push([q, v, s, null, E.resolver]),
                        !1 === y.State.isTicking &&
                          ((y.State.isTicking = !0), c()))
                      : T++);
                }
                var o,
                  a = this,
                  s = d.extend({}, y.defaults, b),
                  u = {};
                switch (
                  (r(a) === i && y.init(a),
                  parseFloat(s.delay) &&
                    !1 !== s.queue &&
                    d.queue(a, s.queue, function(e) {
                      (y.velocityQueueEntryFlag = !0),
                        (r(a).delayTimer = {
                          setTimeout: setTimeout(e, parseFloat(s.delay)),
                          next: e
                        });
                    }),
                  s.duration.toString().toLowerCase())
                ) {
                  case "fast":
                    s.duration = 200;
                    break;
                  case "normal":
                    s.duration = g;
                    break;
                  case "slow":
                    s.duration = 600;
                    break;
                  default:
                    s.duration = parseFloat(s.duration) || 1;
                }
                !1 !== y.mock &&
                  (!0 === y.mock
                    ? (s.duration = s.delay = 1)
                    : ((s.duration *= parseFloat(y.mock) || 1),
                      (s.delay *= parseFloat(y.mock) || 1))),
                  (s.easing = l(s.easing, s.duration)),
                  s.begin && !h.isFunction(s.begin) && (s.begin = null),
                  s.progress &&
                    !h.isFunction(s.progress) &&
                    (s.progress = null),
                  s.complete &&
                    !h.isFunction(s.complete) &&
                    (s.complete = null),
                  s.display !== i &&
                    null !== s.display &&
                    ((s.display = s.display.toString().toLowerCase()),
                    "auto" === s.display &&
                      (s.display = y.CSS.Values.getDisplayType(a))),
                  s.visibility !== i &&
                    null !== s.visibility &&
                    (s.visibility = s.visibility.toString().toLowerCase()),
                  (s.mobileHA =
                    s.mobileHA && y.State.isMobile && !y.State.isGingerbread),
                  !1 === s.queue
                    ? s.delay
                      ? setTimeout(e, s.delay)
                      : e()
                    : d.queue(a, s.queue, function(t, n) {
                        return !0 === n
                          ? (E.promise && E.resolver(v), !0)
                          : ((y.velocityQueueEntryFlag = !0), void e(t));
                      }),
                  ("" !== s.queue && "fx" !== s.queue) ||
                    "inprogress" === d.queue(a)[0] ||
                    d.dequeue(a);
              }
              var s,
                p,
                f,
                v,
                m,
                b,
                k =
                  arguments[0] &&
                  (arguments[0].p ||
                    (d.isPlainObject(arguments[0].properties) &&
                      !arguments[0].properties.names) ||
                    h.isString(arguments[0].properties));
              if (
                (h.isWrapped(this)
                  ? ((s = !1), (f = 0), (v = this), (p = this))
                  : ((s = !0),
                    (f = 1),
                    (v = k
                      ? arguments[0].elements || arguments[0].e
                      : arguments[0])),
                (v = o(v)))
              ) {
                k
                  ? ((m = arguments[0].properties || arguments[0].p),
                    (b = arguments[0].options || arguments[0].o))
                  : ((m = arguments[f]), (b = arguments[f + 1]));
                var C = v.length,
                  T = 0;
                if (!/^(stop|finish)$/i.test(m) && !d.isPlainObject(b)) {
                  b = {};
                  for (var S = f + 1; S < arguments.length; S++)
                    h.isArray(arguments[S]) ||
                    (!/^(fast|normal|slow)$/i.test(arguments[S]) &&
                      !/^\d/.test(arguments[S]))
                      ? h.isString(arguments[S]) || h.isArray(arguments[S])
                        ? (b.easing = arguments[S])
                        : h.isFunction(arguments[S]) &&
                          (b.complete = arguments[S])
                      : (b.duration = arguments[S]);
                }
                var A,
                  E = { promise: null, resolver: null, rejecter: null };
                switch (
                  (s &&
                    y.Promise &&
                    (E.promise = new y.Promise(function(e, t) {
                      (E.resolver = e), (E.rejecter = t);
                    })),
                  m)
                ) {
                  case "scroll":
                    A = "scroll";
                    break;
                  case "reverse":
                    A = "reverse";
                    break;
                  case "finish":
                  case "stop":
                    d.each(v, function(e, t) {
                      r(t) &&
                        r(t).delayTimer &&
                        (clearTimeout(r(t).delayTimer.setTimeout),
                        r(t).delayTimer.next && r(t).delayTimer.next(),
                        delete r(t).delayTimer);
                    });
                    var P = [];
                    return (
                      d.each(y.State.calls, function(e, t) {
                        t &&
                          d.each(t[1], function(n, o) {
                            var a = b === i ? "" : b;
                            return (
                              (!0 !== a &&
                                t[2].queue !== a &&
                                (b !== i || !1 !== t[2].queue)) ||
                              void d.each(v, function(n, i) {
                                i === o &&
                                  ((!0 === b || h.isString(b)) &&
                                    (d.each(
                                      d.queue(i, h.isString(b) ? b : ""),
                                      function(e, t) {
                                        h.isFunction(t) && t(null, !0);
                                      }
                                    ),
                                    d.queue(i, h.isString(b) ? b : "", [])),
                                  "stop" === m
                                    ? (r(i) &&
                                        r(i).tweensContainer &&
                                        !1 !== a &&
                                        d.each(r(i).tweensContainer, function(
                                          e,
                                          t
                                        ) {
                                          t.endValue = t.currentValue;
                                        }),
                                      P.push(e))
                                    : "finish" === m && (t[2].duration = 1));
                              })
                            );
                          });
                      }),
                      "stop" === m &&
                        (d.each(P, function(e, t) {
                          u(t, !0);
                        }),
                        E.promise && E.resolver(v)),
                      e()
                    );
                  default:
                    if (!d.isPlainObject(m) || h.isEmptyObject(m)) {
                      if (h.isString(m) && y.Redirects[m]) {
                        var O = (_ = d.extend({}, b)).duration,
                          D = _.delay || 0;
                        return (
                          !0 === _.backwards &&
                            (v = d.extend(!0, [], v).reverse()),
                          d.each(v, function(e, t) {
                            parseFloat(_.stagger)
                              ? (_.delay = D + parseFloat(_.stagger) * e)
                              : h.isFunction(_.stagger) &&
                                (_.delay = D + _.stagger.call(t, e, C)),
                              _.drag &&
                                ((_.duration =
                                  parseFloat(O) ||
                                  (/^(callout|transition)/.test(m) ? 1e3 : g)),
                                (_.duration = Math.max(
                                  _.duration *
                                    (_.backwards ? 1 - e / C : (e + 1) / C),
                                  0.75 * _.duration,
                                  200
                                ))),
                              y.Redirects[m].call(
                                t,
                                t,
                                _ || {},
                                e,
                                C,
                                v,
                                E.promise ? E : i
                              );
                          }),
                          e()
                        );
                      }
                      var M =
                        "Velocity: First argument (" +
                        m +
                        ") was not a property map, a known action, or a registered redirect. Aborting.";
                      return (
                        E.promise ? E.rejecter(new Error(M)) : console.log(M),
                        e()
                      );
                    }
                    A = "start";
                }
                var j = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                  },
                  q = [];
                d.each(v, function(e, t) {
                  h.isNode(t) && a.call(t);
                });
                var N,
                  _ = d.extend({}, y.defaults, b);
                if (((_.loop = parseInt(_.loop)), (N = 2 * _.loop - 1), _.loop))
                  for (var L = 0; N > L; L++) {
                    var I = { delay: _.delay, progress: _.progress };
                    L === N - 1 &&
                      ((I.display = _.display),
                      (I.visibility = _.visibility),
                      (I.complete = _.complete)),
                      x(v, "reverse", I);
                  }
                return e();
              }
            };
            (y = d.extend(x, y)).animate = x;
            var k = t.requestAnimationFrame || f;
            return (
              y.State.isMobile ||
                n.hidden === i ||
                n.addEventListener("visibilitychange", function() {
                  n.hidden
                    ? ((k = function(e) {
                        return setTimeout(function() {
                          e(!0);
                        }, 16);
                      }),
                      c())
                    : (k = t.requestAnimationFrame || f);
                }),
              (e.Velocity = y),
              e !== t &&
                ((e.fn.velocity = x), (e.fn.velocity.defaults = y.defaults)),
              d.each(["Down", "Up"], function(e, t) {
                y.Redirects["slide" + t] = function(e, n, o, r, a, s) {
                  var l = d.extend({}, n),
                    c = l.begin,
                    u = l.complete,
                    p = {
                      height: "",
                      marginTop: "",
                      marginBottom: "",
                      paddingTop: "",
                      paddingBottom: ""
                    },
                    f = {};
                  l.display === i &&
                    (l.display =
                      "Down" === t
                        ? "inline" === y.CSS.Values.getDisplayType(e)
                          ? "inline-block"
                          : "block"
                        : "none"),
                    (l.begin = function() {
                      for (var n in (c && c.call(a, a), p)) {
                        f[n] = e.style[n];
                        var i = y.CSS.getPropertyValue(e, n);
                        p[n] = "Down" === t ? [i, 0] : [0, i];
                      }
                      (f.overflow = e.style.overflow),
                        (e.style.overflow = "hidden");
                    }),
                    (l.complete = function() {
                      for (var t in f) e.style[t] = f[t];
                      u && u.call(a, a), s && s.resolver(a);
                    }),
                    y(e, p, l);
                };
              }),
              d.each(["In", "Out"], function(e, t) {
                y.Redirects["fade" + t] = function(e, n, o, r, a, s) {
                  var l = d.extend({}, n),
                    c = { opacity: "In" === t ? 1 : 0 },
                    u = l.complete;
                  (l.complete =
                    o !== r - 1
                      ? (l.begin = null)
                      : function() {
                          u && u.call(a, a), s && s.resolver(a);
                        }),
                    l.display === i &&
                      (l.display = "In" === t ? "auto" : "none"),
                    y(this, c, l);
                };
              }),
              y
            );
          }
          jQuery.fn.velocity = jQuery.fn.animate;
        })(window.jQuery || window.Zepto || window, window, document);
      })),
  (function(e, t, n, i) {
    "use strict";
    function o(e, t, n) {
      return setTimeout(u(e, n), t);
    }
    function r(e, t, n) {
      return !!Array.isArray(e) && (a(e, n[t], n), !0);
    }
    function a(e, t, n) {
      var o;
      if (e)
        if (e.forEach) e.forEach(t, n);
        else if (e.length !== i)
          for (o = 0; o < e.length; ) t.call(n, e[o], o, e), o++;
        else for (o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e);
    }
    function s(e, t, n) {
      for (var o = Object.keys(t), r = 0; r < o.length; )
        (!n || (n && e[o[r]] === i)) && (e[o[r]] = t[o[r]]), r++;
      return e;
    }
    function l(e, t) {
      return s(e, t, !0);
    }
    function c(e, t, n) {
      var i,
        o = t.prototype;
      ((i = e.prototype = Object.create(o)).constructor = e),
        (i._super = o),
        n && s(i, n);
    }
    function u(e, t) {
      return function() {
        return e.apply(t, arguments);
      };
    }
    function d(e, t) {
      return typeof e == te ? e.apply((t && t[0]) || i, t) : e;
    }
    function p(e, t) {
      return e === i ? t : e;
    }
    function f(e, t, n) {
      a(m(t), function(t) {
        e.addEventListener(t, n, !1);
      });
    }
    function h(e, t, n) {
      a(m(t), function(t) {
        e.removeEventListener(t, n, !1);
      });
    }
    function v(e, t) {
      for (; e; ) {
        if (e == t) return !0;
        e = e.parentNode;
      }
      return !1;
    }
    function g(e, t) {
      return e.indexOf(t) > -1;
    }
    function m(e) {
      return e.trim().split(/\s+/g);
    }
    function y(e, t, n) {
      if (e.indexOf && !n) return e.indexOf(t);
      for (var i = 0; i < e.length; ) {
        if ((n && e[i][n] == t) || (!n && e[i] === t)) return i;
        i++;
      }
      return -1;
    }
    function b(e) {
      return Array.prototype.slice.call(e, 0);
    }
    function w(e, t, n) {
      for (var i = [], o = [], r = 0; r < e.length; ) {
        var a = t ? e[r][t] : e[r];
        y(o, a) < 0 && i.push(e[r]), (o[r] = a), r++;
      }
      return (
        n &&
          (i = t
            ? i.sort(function(e, n) {
                return e[t] > n[t];
              })
            : i.sort()),
        i
      );
    }
    function x(e, t) {
      for (
        var n, o, r = t[0].toUpperCase() + t.slice(1), a = 0;
        a < K.length;

      ) {
        if ((o = (n = K[a]) ? n + r : t) in e) return o;
        a++;
      }
      return i;
    }
    function k(e) {
      var t = e.ownerDocument;
      return t.defaultView || t.parentWindow;
    }
    function C(e, t) {
      var n = this;
      (this.manager = e),
        (this.callback = t),
        (this.element = e.element),
        (this.target = e.options.inputTarget),
        (this.domHandler = function(t) {
          d(e.options.enable, [e]) && n.handler(t);
        }),
        this.init();
    }
    function T(e, t, n) {
      var i = n.pointers.length,
        o = n.changedPointers.length,
        r = t & pe && 0 == i - o,
        a = t & (he | ve) && 0 == i - o;
      (n.isFirst = !!r),
        (n.isFinal = !!a),
        r && (e.session = {}),
        (n.eventType = t),
        (function(e, t) {
          var n = e.session,
            i = t.pointers,
            o = i.length;
          n.firstInput || (n.firstInput = A(t)),
            o > 1 && !n.firstMultiple
              ? (n.firstMultiple = A(t))
              : 1 === o && (n.firstMultiple = !1);
          var r = n.firstInput,
            a = n.firstMultiple,
            s = a ? a.center : r.center,
            l = (t.center = E(i));
          (t.timeStamp = oe()),
            (t.deltaTime = t.timeStamp - r.timeStamp),
            (t.angle = D(s, l)),
            (t.distance = O(s, l)),
            (function(e, t) {
              var n = t.center,
                i = e.offsetDelta || {},
                o = e.prevDelta || {},
                r = e.prevInput || {};
              (t.eventType === pe || r.eventType === he) &&
                ((o = e.prevDelta = { x: r.deltaX || 0, y: r.deltaY || 0 }),
                (i = e.offsetDelta = { x: n.x, y: n.y })),
                (t.deltaX = o.x + (n.x - i.x)),
                (t.deltaY = o.y + (n.y - i.y));
            })(n, t),
            (t.offsetDirection = P(t.deltaX, t.deltaY)),
            (t.scale = a
              ? (function(e, t) {
                  return O(t[0], t[1], Se) / O(e[0], e[1], Se);
                })(a.pointers, i)
              : 1),
            (t.rotation = a
              ? (function(e, t) {
                  return D(t[1], t[0], Se) - D(e[1], e[0], Se);
                })(a.pointers, i)
              : 0),
            S(n, t);
          var c = e.element;
          v(t.srcEvent.target, c) && (c = t.srcEvent.target), (t.target = c);
        })(e, n),
        e.emit("hammer.input", n),
        e.recognize(n),
        (e.session.prevInput = n);
    }
    function S(e, t) {
      var n,
        o,
        r,
        a,
        s = e.lastInterval || t,
        l = t.timeStamp - s.timeStamp;
      if (t.eventType != ve && (l > de || s.velocity === i)) {
        var c = s.deltaX - t.deltaX,
          u = s.deltaY - t.deltaY,
          d = (function(e, t, n) {
            return { x: t / e || 0, y: n / e || 0 };
          })(l, c, u);
        (o = d.x),
          (r = d.y),
          (n = ie(d.x) > ie(d.y) ? d.x : d.y),
          (a = P(c, u)),
          (e.lastInterval = t);
      } else
        (n = s.velocity),
          (o = s.velocityX),
          (r = s.velocityY),
          (a = s.direction);
      (t.velocity = n), (t.velocityX = o), (t.velocityY = r), (t.direction = a);
    }
    function A(e) {
      for (var t = [], n = 0; n < e.pointers.length; )
        (t[n] = {
          clientX: ne(e.pointers[n].clientX),
          clientY: ne(e.pointers[n].clientY)
        }),
          n++;
      return {
        timeStamp: oe(),
        pointers: t,
        center: E(t),
        deltaX: e.deltaX,
        deltaY: e.deltaY
      };
    }
    function E(e) {
      var t = e.length;
      if (1 === t) return { x: ne(e[0].clientX), y: ne(e[0].clientY) };
      for (var n = 0, i = 0, o = 0; t > o; )
        (n += e[o].clientX), (i += e[o].clientY), o++;
      return { x: ne(n / t), y: ne(i / t) };
    }
    function P(e, t) {
      return e === t
        ? ge
        : ie(e) >= ie(t)
        ? e > 0
          ? me
          : ye
        : t > 0
        ? be
        : we;
    }
    function O(e, t, n) {
      n || (n = Te);
      var i = t[n[0]] - e[n[0]],
        o = t[n[1]] - e[n[1]];
      return Math.sqrt(i * i + o * o);
    }
    function D(e, t, n) {
      return (
        n || (n = Te),
        (180 * Math.atan2(t[n[1]] - e[n[1]], t[n[0]] - e[n[0]])) / Math.PI
      );
    }
    function M() {
      (this.evEl = Ee),
        (this.evWin = Pe),
        (this.allow = !0),
        (this.pressed = !1),
        C.apply(this, arguments);
    }
    function j() {
      (this.evEl = Me),
        (this.evWin = je),
        C.apply(this, arguments),
        (this.store = this.manager.session.pointerEvents = []);
    }
    function q() {
      (this.evTarget = Ne),
        (this.evWin = _e),
        (this.started = !1),
        C.apply(this, arguments);
    }
    function N(e, t) {
      var n = b(e.touches),
        i = b(e.changedTouches);
      return t & (he | ve) && (n = w(n.concat(i), "identifier", !0)), [n, i];
    }
    function _() {
      (this.evTarget = Ie), (this.targetIds = {}), C.apply(this, arguments);
    }
    function L(e, t) {
      var n = b(e.touches),
        i = this.targetIds;
      if (t & (pe | fe) && 1 === n.length)
        return (i[n[0].identifier] = !0), [n, n];
      var o,
        r,
        a = b(e.changedTouches),
        s = [],
        l = this.target;
      if (
        ((r = n.filter(function(e) {
          return v(e.target, l);
        })),
        t === pe)
      )
        for (o = 0; o < r.length; ) (i[r[o].identifier] = !0), o++;
      for (o = 0; o < a.length; )
        i[a[o].identifier] && s.push(a[o]),
          t & (he | ve) && delete i[a[o].identifier],
          o++;
      return s.length ? [w(r.concat(s), "identifier", !0), s] : void 0;
    }
    function I() {
      C.apply(this, arguments);
      var e = u(this.handler, this);
      (this.touch = new _(this.manager, e)),
        (this.mouse = new M(this.manager, e));
    }
    function H(e, t) {
      (this.manager = e), this.set(t);
    }
    function z(e) {
      (this.id = re++),
        (this.manager = null),
        (this.options = l(e || {}, this.defaults)),
        (this.options.enable = p(this.options.enable, !0)),
        (this.state = Xe),
        (this.simultaneous = {}),
        (this.requireFail = []);
    }
    function $(e) {
      return e == we
        ? "down"
        : e == be
        ? "up"
        : e == me
        ? "left"
        : e == ye
        ? "right"
        : "";
    }
    function V(e, t) {
      var n = t.manager;
      return n ? n.get(e) : e;
    }
    function W() {
      z.apply(this, arguments);
    }
    function R() {
      W.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function F() {
      W.apply(this, arguments);
    }
    function X() {
      z.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function Q() {
      W.apply(this, arguments);
    }
    function B() {
      W.apply(this, arguments);
    }
    function Y() {
      z.apply(this, arguments),
        (this.pTime = !1),
        (this.pCenter = !1),
        (this._timer = null),
        (this._input = null),
        (this.count = 0);
    }
    function U(e, t) {
      return (
        ((t = t || {}).recognizers = p(t.recognizers, U.defaults.preset)),
        new G(e, t)
      );
    }
    function G(e, t) {
      (this.options = l((t = t || {}), U.defaults)),
        (this.options.inputTarget = this.options.inputTarget || e),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.element = e),
        (this.input = (function(e) {
          return new (e.options.inputClass || (se ? j : le ? _ : ae ? I : M))(
            e,
            T
          );
        })(this)),
        (this.touchAction = new H(this, this.options.touchAction)),
        Z(this, !0),
        a(
          t.recognizers,
          function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
          },
          this
        );
    }
    function Z(e, t) {
      var n = e.element;
      a(e.options.cssProps, function(e, i) {
        n.style[x(n.style, i)] = t ? e : "";
      });
    }
    function J(e, n) {
      var i = t.createEvent("Event");
      i.initEvent(e, !0, !0), (i.gesture = n), n.target.dispatchEvent(i);
    }
    var K = ["", "webkit", "moz", "MS", "ms", "o"],
      ee = t.createElement("div"),
      te = "function",
      ne = Math.round,
      ie = Math.abs,
      oe = Date.now,
      re = 1,
      ae = "ontouchstart" in e,
      se = x(e, "PointerEvent") !== i,
      le =
        ae && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
      ce = "touch",
      ue = "mouse",
      de = 25,
      pe = 1,
      fe = 2,
      he = 4,
      ve = 8,
      ge = 1,
      me = 2,
      ye = 4,
      be = 8,
      we = 16,
      xe = me | ye,
      ke = be | we,
      Ce = xe | ke,
      Te = ["x", "y"],
      Se = ["clientX", "clientY"];
    C.prototype = {
      handler: function() {},
      init: function() {
        this.evEl && f(this.element, this.evEl, this.domHandler),
          this.evTarget && f(this.target, this.evTarget, this.domHandler),
          this.evWin && f(k(this.element), this.evWin, this.domHandler);
      },
      destroy: function() {
        this.evEl && h(this.element, this.evEl, this.domHandler),
          this.evTarget && h(this.target, this.evTarget, this.domHandler),
          this.evWin && h(k(this.element), this.evWin, this.domHandler);
      }
    };
    var Ae = { mousedown: pe, mousemove: fe, mouseup: he },
      Ee = "mousedown",
      Pe = "mousemove mouseup";
    c(M, C, {
      handler: function(e) {
        var t = Ae[e.type];
        t & pe && 0 === e.button && (this.pressed = !0),
          t & fe && 1 !== e.which && (t = he),
          this.pressed &&
            this.allow &&
            (t & he && (this.pressed = !1),
            this.callback(this.manager, t, {
              pointers: [e],
              changedPointers: [e],
              pointerType: ue,
              srcEvent: e
            }));
      }
    });
    var Oe = {
        pointerdown: pe,
        pointermove: fe,
        pointerup: he,
        pointercancel: ve,
        pointerout: ve
      },
      De = { 2: ce, 3: "pen", 4: ue, 5: "kinect" },
      Me = "pointerdown",
      je = "pointermove pointerup pointercancel";
    e.MSPointerEvent &&
      ((Me = "MSPointerDown"),
      (je = "MSPointerMove MSPointerUp MSPointerCancel")),
      c(j, C, {
        handler: function(e) {
          var t = this.store,
            n = !1,
            i = e.type.toLowerCase().replace("ms", ""),
            o = Oe[i],
            r = De[e.pointerType] || e.pointerType,
            a = r == ce,
            s = y(t, e.pointerId, "pointerId");
          o & pe && (0 === e.button || a)
            ? 0 > s && (t.push(e), (s = t.length - 1))
            : o & (he | ve) && (n = !0),
            0 > s ||
              ((t[s] = e),
              this.callback(this.manager, o, {
                pointers: t,
                changedPointers: [e],
                pointerType: r,
                srcEvent: e
              }),
              n && t.splice(s, 1));
        }
      });
    var qe = { touchstart: pe, touchmove: fe, touchend: he, touchcancel: ve },
      Ne = "touchstart",
      _e = "touchstart touchmove touchend touchcancel";
    c(q, C, {
      handler: function(e) {
        var t = qe[e.type];
        if ((t === pe && (this.started = !0), this.started)) {
          var n = N.call(this, e, t);
          t & (he | ve) &&
            0 == n[0].length - n[1].length &&
            (this.started = !1),
            this.callback(this.manager, t, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: ce,
              srcEvent: e
            });
        }
      }
    });
    var Le = { touchstart: pe, touchmove: fe, touchend: he, touchcancel: ve },
      Ie = "touchstart touchmove touchend touchcancel";
    c(_, C, {
      handler: function(e) {
        var t = Le[e.type],
          n = L.call(this, e, t);
        n &&
          this.callback(this.manager, t, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: ce,
            srcEvent: e
          });
      }
    }),
      c(I, C, {
        handler: function(e, t, n) {
          var i = n.pointerType == ue;
          if (n.pointerType == ce) this.mouse.allow = !1;
          else if (i && !this.mouse.allow) return;
          t & (he | ve) && (this.mouse.allow = !0), this.callback(e, t, n);
        },
        destroy: function() {
          this.touch.destroy(), this.mouse.destroy();
        }
      });
    var He = x(ee.style, "touchAction"),
      ze = He !== i,
      $e = "compute",
      Ve = "manipulation",
      We = "none",
      Re = "pan-x",
      Fe = "pan-y";
    H.prototype = {
      set: function(e) {
        e == $e && (e = this.compute()),
          ze && (this.manager.element.style[He] = e),
          (this.actions = e.toLowerCase().trim());
      },
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      compute: function() {
        var e = [];
        return (
          a(this.manager.recognizers, function(t) {
            d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
          }),
          (function(e) {
            if (g(e, We)) return We;
            var t = g(e, Re),
              n = g(e, Fe);
            return t && n
              ? Re + " " + Fe
              : t || n
              ? t
                ? Re
                : Fe
              : g(e, Ve)
              ? Ve
              : "auto";
          })(e.join(" "))
        );
      },
      preventDefaults: function(e) {
        if (!ze) {
          var t = e.srcEvent,
            n = e.offsetDirection;
          if (this.manager.session.prevented) return void t.preventDefault();
          var i = this.actions,
            o = g(i, We),
            r = g(i, Fe),
            a = g(i, Re);
          return o || (r && n & xe) || (a && n & ke)
            ? this.preventSrc(t)
            : void 0;
        }
      },
      preventSrc: function(e) {
        (this.manager.session.prevented = !0), e.preventDefault();
      }
    };
    var Xe = 1,
      Qe = 2,
      Be = 4,
      Ye = 8,
      Ue = Ye,
      Ge = 16;
    (z.prototype = {
      defaults: {},
      set: function(e) {
        return (
          s(this.options, e),
          this.manager && this.manager.touchAction.update(),
          this
        );
      },
      recognizeWith: function(e) {
        if (r(e, "recognizeWith", this)) return this;
        var t = this.simultaneous;
        return (
          t[(e = V(e, this)).id] || ((t[e.id] = e), e.recognizeWith(this)), this
        );
      },
      dropRecognizeWith: function(e) {
        return r(e, "dropRecognizeWith", this)
          ? this
          : ((e = V(e, this)), delete this.simultaneous[e.id], this);
      },
      requireFailure: function(e) {
        if (r(e, "requireFailure", this)) return this;
        var t = this.requireFail;
        return (
          -1 === y(t, (e = V(e, this))) && (t.push(e), e.requireFailure(this)),
          this
        );
      },
      dropRequireFailure: function(e) {
        if (r(e, "dropRequireFailure", this)) return this;
        e = V(e, this);
        var t = y(this.requireFail, e);
        return t > -1 && this.requireFail.splice(t, 1), this;
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function(e) {
        return !!this.simultaneous[e.id];
      },
      emit: function(e) {
        function t(t) {
          n.manager.emit(
            n.options.event +
              (t
                ? (function(e) {
                    return e & Ge
                      ? "cancel"
                      : e & Ye
                      ? "end"
                      : e & Be
                      ? "move"
                      : e & Qe
                      ? "start"
                      : "";
                  })(i)
                : ""),
            e
          );
        }
        var n = this,
          i = this.state;
        Ye > i && t(!0), t(), i >= Ye && t(!0);
      },
      tryEmit: function(e) {
        return this.canEmit() ? this.emit(e) : void (this.state = 32);
      },
      canEmit: function() {
        for (var e = 0; e < this.requireFail.length; ) {
          if (!(this.requireFail[e].state & (32 | Xe))) return !1;
          e++;
        }
        return !0;
      },
      recognize: function(e) {
        var t = s({}, e);
        return d(this.options.enable, [this, t])
          ? (this.state & (Ue | Ge | 32) && (this.state = Xe),
            (this.state = this.process(t)),
            void (this.state & (Qe | Be | Ye | Ge) && this.tryEmit(t)))
          : (this.reset(), void (this.state = 32));
      },
      process: function() {},
      getTouchAction: function() {},
      reset: function() {}
    }),
      c(W, z, {
        defaults: { pointers: 1 },
        attrTest: function(e) {
          var t = this.options.pointers;
          return 0 === t || e.pointers.length === t;
        },
        process: function(e) {
          var t = this.state,
            n = e.eventType,
            i = t & (Qe | Be),
            o = this.attrTest(e);
          return i && (n & ve || !o)
            ? t | Ge
            : i || o
            ? n & he
              ? t | Ye
              : t & Qe
              ? t | Be
              : Qe
            : 32;
        }
      }),
      c(R, W, {
        defaults: { event: "pan", threshold: 10, pointers: 1, direction: Ce },
        getTouchAction: function() {
          var e = this.options.direction,
            t = [];
          return e & xe && t.push(Fe), e & ke && t.push(Re), t;
        },
        directionTest: function(e) {
          var t = this.options,
            n = !0,
            i = e.distance,
            o = e.direction,
            r = e.deltaX,
            a = e.deltaY;
          return (
            o & t.direction ||
              (t.direction & xe
                ? ((o = 0 === r ? ge : 0 > r ? me : ye),
                  (n = r != this.pX),
                  (i = Math.abs(e.deltaX)))
                : ((o = 0 === a ? ge : 0 > a ? be : we),
                  (n = a != this.pY),
                  (i = Math.abs(e.deltaY)))),
            (e.direction = o),
            n && i > t.threshold && o & t.direction
          );
        },
        attrTest: function(e) {
          return (
            W.prototype.attrTest.call(this, e) &&
            (this.state & Qe || (!(this.state & Qe) && this.directionTest(e)))
          );
        },
        emit: function(e) {
          (this.pX = e.deltaX), (this.pY = e.deltaY);
          var t = $(e.direction);
          t && this.manager.emit(this.options.event + t, e),
            this._super.emit.call(this, e);
        }
      }),
      c(F, W, {
        defaults: { event: "pinch", threshold: 0, pointers: 2 },
        getTouchAction: function() {
          return [We];
        },
        attrTest: function(e) {
          return (
            this._super.attrTest.call(this, e) &&
            (Math.abs(e.scale - 1) > this.options.threshold || this.state & Qe)
          );
        },
        emit: function(e) {
          this._super.emit.call(this, e),
            1 !== e.scale &&
              this.manager.emit(
                this.options.event + (e.scale < 1 ? "in" : "out"),
                e
              );
        }
      }),
      c(X, z, {
        defaults: { event: "press", pointers: 1, time: 500, threshold: 5 },
        getTouchAction: function() {
          return ["auto"];
        },
        process: function(e) {
          var t = this.options,
            n = e.pointers.length === t.pointers,
            i = e.distance < t.threshold,
            r = e.deltaTime > t.time;
          if (((this._input = e), !i || !n || (e.eventType & (he | ve) && !r)))
            this.reset();
          else if (e.eventType & pe)
            this.reset(),
              (this._timer = o(
                function() {
                  (this.state = Ue), this.tryEmit();
                },
                t.time,
                this
              ));
          else if (e.eventType & he) return Ue;
          return 32;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function(e) {
          this.state === Ue &&
            (e && e.eventType & he
              ? this.manager.emit(this.options.event + "up", e)
              : ((this._input.timeStamp = oe()),
                this.manager.emit(this.options.event, this._input)));
        }
      }),
      c(Q, W, {
        defaults: { event: "rotate", threshold: 0, pointers: 2 },
        getTouchAction: function() {
          return [We];
        },
        attrTest: function(e) {
          return (
            this._super.attrTest.call(this, e) &&
            (Math.abs(e.rotation) > this.options.threshold || this.state & Qe)
          );
        }
      }),
      c(B, W, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.65,
          direction: xe | ke,
          pointers: 1
        },
        getTouchAction: function() {
          return R.prototype.getTouchAction.call(this);
        },
        attrTest: function(e) {
          var t,
            n = this.options.direction;
          return (
            n & (xe | ke)
              ? (t = e.velocity)
              : n & xe
              ? (t = e.velocityX)
              : n & ke && (t = e.velocityY),
            this._super.attrTest.call(this, e) &&
              n & e.direction &&
              e.distance > this.options.threshold &&
              ie(t) > this.options.velocity &&
              e.eventType & he
          );
        },
        emit: function(e) {
          var t = $(e.direction);
          t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e);
        }
      }),
      c(Y, z, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 2,
          posThreshold: 10
        },
        getTouchAction: function() {
          return [Ve];
        },
        process: function(e) {
          var t = this.options,
            n = e.pointers.length === t.pointers,
            i = e.distance < t.threshold,
            r = e.deltaTime < t.time;
          if ((this.reset(), e.eventType & pe && 0 === this.count))
            return this.failTimeout();
          if (i && r && n) {
            if (e.eventType != he) return this.failTimeout();
            var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
              s = !this.pCenter || O(this.pCenter, e.center) < t.posThreshold;
            if (
              ((this.pTime = e.timeStamp),
              (this.pCenter = e.center),
              s && a ? (this.count += 1) : (this.count = 1),
              (this._input = e),
              0 == this.count % t.taps)
            )
              return this.hasRequireFailures()
                ? ((this._timer = o(
                    function() {
                      (this.state = Ue), this.tryEmit();
                    },
                    t.interval,
                    this
                  )),
                  Qe)
                : Ue;
          }
          return 32;
        },
        failTimeout: function() {
          return (
            (this._timer = o(
              function() {
                this.state = 32;
              },
              this.options.interval,
              this
            )),
            32
          );
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function() {
          this.state == Ue &&
            ((this._input.tapCount = this.count),
            this.manager.emit(this.options.event, this._input));
        }
      }),
      (U.VERSION = "2.0.4"),
      (U.defaults = {
        domEvents: !1,
        touchAction: $e,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [Q, { enable: !1 }],
          [F, { enable: !1 }, ["rotate"]],
          [B, { direction: xe }],
          [R, { direction: xe }, ["swipe"]],
          [Y],
          [Y, { event: "doubletap", taps: 2 }, ["tap"]],
          [X]
        ],
        cssProps: {
          userSelect: "default",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      }),
      (G.prototype = {
        set: function(e) {
          return (
            s(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget &&
              (this.input.destroy(),
              (this.input.target = e.inputTarget),
              this.input.init()),
            this
          );
        },
        stop: function(e) {
          this.session.stopped = e ? 2 : 1;
        },
        recognize: function(e) {
          var t = this.session;
          if (!t.stopped) {
            this.touchAction.preventDefaults(e);
            var n,
              i = this.recognizers,
              o = t.curRecognizer;
            (!o || (o && o.state & Ue)) && (o = t.curRecognizer = null);
            for (var r = 0; r < i.length; )
              (n = i[r]),
                2 === t.stopped || (o && n != o && !n.canRecognizeWith(o))
                  ? n.reset()
                  : n.recognize(e),
                !o && n.state & (Qe | Be | Ye) && (o = t.curRecognizer = n),
                r++;
          }
        },
        get: function(e) {
          if (e instanceof z) return e;
          for (var t = this.recognizers, n = 0; n < t.length; n++)
            if (t[n].options.event == e) return t[n];
          return null;
        },
        add: function(e) {
          if (r(e, "add", this)) return this;
          var t = this.get(e.options.event);
          return (
            t && this.remove(t),
            this.recognizers.push(e),
            (e.manager = this),
            this.touchAction.update(),
            e
          );
        },
        remove: function(e) {
          if (r(e, "remove", this)) return this;
          var t = this.recognizers;
          return (
            (e = this.get(e)),
            t.splice(y(t, e), 1),
            this.touchAction.update(),
            this
          );
        },
        on: function(e, t) {
          var n = this.handlers;
          return (
            a(m(e), function(e) {
              (n[e] = n[e] || []), n[e].push(t);
            }),
            this
          );
        },
        off: function(e, t) {
          var n = this.handlers;
          return (
            a(m(e), function(e) {
              t ? n[e].splice(y(n[e], t), 1) : delete n[e];
            }),
            this
          );
        },
        emit: function(e, t) {
          this.options.domEvents && J(e, t);
          var n = this.handlers[e] && this.handlers[e].slice();
          if (n && n.length) {
            (t.type = e),
              (t.preventDefault = function() {
                t.srcEvent.preventDefault();
              });
            for (var i = 0; i < n.length; ) n[i](t), i++;
          }
        },
        destroy: function() {
          this.element && Z(this, !1),
            (this.handlers = {}),
            (this.session = {}),
            this.input.destroy(),
            (this.element = null);
        }
      }),
      s(U, {
        INPUT_START: pe,
        INPUT_MOVE: fe,
        INPUT_END: he,
        INPUT_CANCEL: ve,
        STATE_POSSIBLE: Xe,
        STATE_BEGAN: Qe,
        STATE_CHANGED: Be,
        STATE_ENDED: Ye,
        STATE_RECOGNIZED: Ue,
        STATE_CANCELLED: Ge,
        STATE_FAILED: 32,
        DIRECTION_NONE: ge,
        DIRECTION_LEFT: me,
        DIRECTION_RIGHT: ye,
        DIRECTION_UP: be,
        DIRECTION_DOWN: we,
        DIRECTION_HORIZONTAL: xe,
        DIRECTION_VERTICAL: ke,
        DIRECTION_ALL: Ce,
        Manager: G,
        Input: C,
        TouchAction: H,
        TouchInput: _,
        MouseInput: M,
        PointerEventInput: j,
        TouchMouseInput: I,
        SingleTouchInput: q,
        Recognizer: z,
        AttrRecognizer: W,
        Tap: Y,
        Pan: R,
        Swipe: B,
        Pinch: F,
        Rotate: Q,
        Press: X,
        on: f,
        off: h,
        each: a,
        merge: l,
        extend: s,
        inherit: c,
        bindFn: u,
        prefixed: x
      }),
      typeof define == te && define.amd
        ? define(function() {
            return U;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = U)
        : (e.Hammer = U);
  })(window, document),
  (function(e) {
    "function" == typeof define && define.amd
      ? define(["jquery", "hammerjs"], e)
      : "object" == typeof exports
      ? e(require("jquery"), require("hammerjs"))
      : e(jQuery, Hammer);
  })(function(e, t) {
    function n(n, i) {
      var o = e(n);
      o.data("hammer") || o.data("hammer", new t(o[0], i));
    }
    (e.fn.hammer = function(e) {
      return this.each(function() {
        n(this, e);
      });
    }),
      (t.Manager.prototype.emit = (function(t) {
        return function(n, i) {
          t.call(this, n, i), e(this.element).trigger({ type: n, gesture: i });
        };
      })(t.Manager.prototype.emit));
  }),
  (function(e) {
    e.Package ? (Materialize = {}) : (e.Materialize = {});
  })(window),
  "undefined" == typeof exports ||
    exports.nodeType ||
    ("undefined" != typeof module &&
      !module.nodeType &&
      module.exports &&
      (exports = module.exports = Materialize),
    (exports.default = Materialize)),
  (function(e) {
    for (
      var t = 0,
        n = ["webkit", "moz"],
        i = e.requestAnimationFrame,
        o = e.cancelAnimationFrame,
        r = n.length;
      --r >= 0 && !i;

    )
      (i = e[n[r] + "RequestAnimationFrame"]),
        (o = e[n[r] + "CancelRequestAnimationFrame"]);
    (i && o) ||
      ((i = function(e) {
        var n = +Date.now(),
          i = Math.max(t + 16, n);
        return setTimeout(function() {
          e((t = i));
        }, i - n);
      }),
      (o = clearTimeout)),
      (e.requestAnimationFrame = i),
      (e.cancelAnimationFrame = o);
  })(window),
  (Materialize.objectSelectorString = function(e) {
    return (
      (e.prop("tagName") || "") +
      (e.attr("id") || "") +
      (e.attr("class") || "")
    ).replace(/\s/g, "");
  }),
  (Materialize.guid = (function() {
    function e() {
      return Math.floor(65536 * (1 + Math.random()))
        .toString(16)
        .substring(1);
    }
    return function() {
      return (
        e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
      );
    };
  })()),
  (Materialize.escapeHash = function(e) {
    return e.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
  }),
  (Materialize.elementOrParentIsFixed = function(e) {
    var t = $(e),
      n = !1;
    return (
      t.add(t.parents()).each(function() {
        if ("fixed" === $(this).css("position")) return (n = !0), !1;
      }),
      n
    );
  });
var Vel,
  getTime =
    Date.now ||
    function() {
      return new Date().getTime();
    };
(Materialize.throttle = function(e, t, n) {
  var i,
    o,
    r,
    a = null,
    s = 0;
  n || (n = {});
  var l = function() {
    (s = !1 === n.leading ? 0 : getTime()),
      (a = null),
      (r = e.apply(i, o)),
      (i = o = null);
  };
  return function() {
    var c = getTime();
    s || !1 !== n.leading || (s = c);
    var u = t - (c - s);
    return (
      (i = this),
      (o = arguments),
      u <= 0
        ? (clearTimeout(a),
          (a = null),
          (s = c),
          (r = e.apply(i, o)),
          (i = o = null))
        : a || !1 === n.trailing || (a = setTimeout(l, u)),
      r
    );
  };
}),
  (Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity),
  (Materialize.Vel = Vel || Velocity),
  (function(e) {
    (e.fn.collapsible = function(t, n) {
      var i = t;
      return (
        (t = e.extend(
          { accordion: void 0, onOpen: void 0, onClose: void 0 },
          t
        )),
        this.each(function() {
          function o(t) {
            (d = u.find("> li > .collapsible-header")),
              t.hasClass("active")
                ? t.parent().addClass("active")
                : t.parent().removeClass("active"),
              t.parent().hasClass("active")
                ? t
                    .siblings(".collapsible-body")
                    .stop(!0, !1)
                    .slideDown({
                      duration: 350,
                      easing: "easeOutQuart",
                      queue: !1,
                      complete: function() {
                        e(this).css("height", "");
                      }
                    })
                : t
                    .siblings(".collapsible-body")
                    .stop(!0, !1)
                    .slideUp({
                      duration: 350,
                      easing: "easeOutQuart",
                      queue: !1,
                      complete: function() {
                        e(this).css("height", "");
                      }
                    }),
              d
                .not(t)
                .removeClass("active")
                .parent()
                .removeClass("active"),
              d
                .not(t)
                .parent()
                .children(".collapsible-body")
                .stop(!0, !1)
                .each(function() {
                  e(this).is(":visible") &&
                    e(this).slideUp({
                      duration: 350,
                      easing: "easeOutQuart",
                      queue: !1,
                      complete: function() {
                        e(this).css("height", ""),
                          s(e(this).siblings(".collapsible-header"));
                      }
                    });
                });
          }
          function r(t) {
            t.hasClass("active")
              ? t.parent().addClass("active")
              : t.parent().removeClass("active"),
              t.parent().hasClass("active")
                ? t
                    .siblings(".collapsible-body")
                    .stop(!0, !1)
                    .slideDown({
                      duration: 350,
                      easing: "easeOutQuart",
                      queue: !1,
                      complete: function() {
                        e(this).css("height", "");
                      }
                    })
                : t
                    .siblings(".collapsible-body")
                    .stop(!0, !1)
                    .slideUp({
                      duration: 350,
                      easing: "easeOutQuart",
                      queue: !1,
                      complete: function() {
                        e(this).css("height", "");
                      }
                    });
          }
          function a(e, n) {
            n || e.toggleClass("active"),
              t.accordion || "accordion" === p || void 0 === p ? o(e) : r(e),
              s(e);
          }
          function s(e) {
            e.hasClass("active")
              ? "function" == typeof t.onOpen && t.onOpen.call(this, e.parent())
              : "function" == typeof t.onClose &&
                t.onClose.call(this, e.parent());
          }
          function l(e) {
            return e.closest("li > .collapsible-header");
          }
          function c() {
            u.off("click.collapse", "> li > .collapsible-header");
          }
          var u = e(this),
            d = e(this).find("> li > .collapsible-header"),
            p = u.data("collapsible");
          if ("destroy" !== i)
            if (n >= 0 && n < d.length) {
              var f = d.eq(n);
              f.length &&
                ("open" === i || ("close" === i && f.hasClass("active"))) &&
                a(f);
            } else
              c(),
                u.on("click.collapse", "> li > .collapsible-header", function(
                  t
                ) {
                  var n = e(t.target);
                  (function(e) {
                    return l(e).length > 0;
                  })(n) && (n = l(n)),
                    a(n);
                }),
                t.accordion || "accordion" === p || void 0 === p
                  ? a(d.filter(".active").first(), !0)
                  : d.filter(".active").each(function() {
                      a(e(this), !0);
                    });
          else c();
        })
      );
    }),
      e(document).ready(function() {
        e(".collapsible").collapsible();
      });
  })(jQuery),
  (function(e) {
    (e.fn.scrollTo = function(t) {
      return (
        e(this).scrollTop(
          e(this).scrollTop() - e(this).offset().top + e(t).offset().top
        ),
        this
      );
    }),
      (e.fn.dropdown = function(t) {
        var n = {
          inDuration: 300,
          outDuration: 225,
          constrainWidth: !0,
          hover: !1,
          gutter: 0,
          belowOrigin: !1,
          alignment: "left",
          stopPropagation: !1
        };
        return "open" === t
          ? (this.each(function() {
              e(this).trigger("open");
            }),
            !1)
          : "close" === t
          ? (this.each(function() {
              e(this).trigger("close");
            }),
            !1)
          : void this.each(function() {
              function i() {
                void 0 !== a.data("induration") &&
                  (s.inDuration = a.data("induration")),
                  void 0 !== a.data("outduration") &&
                    (s.outDuration = a.data("outduration")),
                  void 0 !== a.data("constrainwidth") &&
                    (s.constrainWidth = a.data("constrainwidth")),
                  void 0 !== a.data("hover") && (s.hover = a.data("hover")),
                  void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")),
                  void 0 !== a.data("beloworigin") &&
                    (s.belowOrigin = a.data("beloworigin")),
                  void 0 !== a.data("alignment") &&
                    (s.alignment = a.data("alignment")),
                  void 0 !== a.data("stoppropagation") &&
                    (s.stopPropagation = a.data("stoppropagation"));
              }
              function o(t) {
                "focus" === t && (l = !0),
                  i(),
                  c.addClass("active"),
                  a.addClass("active");
                var n = a[0].getBoundingClientRect().width;
                !0 === s.constrainWidth
                  ? c.css("width", n)
                  : c.css("white-space", "nowrap");
                var o = window.innerHeight,
                  u = a.innerHeight(),
                  d = a.offset().left,
                  p = a.offset().top - e(window).scrollTop(),
                  f = s.alignment,
                  h = 0,
                  v = 0,
                  g = 0;
                !0 === s.belowOrigin && (g = u);
                var m = 0,
                  y = 0,
                  b = a.parent();
                b.is("body") ||
                  (b[0].scrollHeight > b[0].clientHeight &&
                    (m = b[0].scrollTop),
                  b[0].scrollWidth > b[0].clientWidth && (y = b[0].scrollLeft)),
                  d + c.innerWidth() > e(window).width()
                    ? (f = "right")
                    : d - c.innerWidth() + a.innerWidth() < 0 && (f = "left"),
                  p + c.innerHeight() > o &&
                    (p + u - c.innerHeight() < 0
                      ? c.css("max-height", o - p - g)
                      : (g || (g += u), (g -= c.innerHeight()))),
                  "left" === f
                    ? ((h = s.gutter), (v = a.position().left + h))
                    : "right" === f &&
                      (c.stop(!0, !0).css({ opacity: 0, left: 0 }),
                      (v =
                        a.position().left + n - c.width() + (h = -s.gutter))),
                  c.css({
                    position: "absolute",
                    top: a.position().top + g + m,
                    left: v + y
                  }),
                  c
                    .slideDown({
                      queue: !1,
                      duration: s.inDuration,
                      easing: "easeOutCubic",
                      complete: function() {
                        e(this).css("height", "");
                      }
                    })
                    .animate(
                      { opacity: 1 },
                      {
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutSine"
                      }
                    ),
                  setTimeout(function() {
                    e(document).on("click." + c.attr("id"), function(t) {
                      r(), e(document).off("click." + c.attr("id"));
                    });
                  }, 0);
              }
              function r() {
                (l = !1),
                  c.fadeOut(s.outDuration),
                  c.removeClass("active"),
                  a.removeClass("active"),
                  e(document).off("click." + c.attr("id")),
                  setTimeout(function() {
                    c.css("max-height", "");
                  }, s.outDuration);
              }
              var a = e(this),
                s = e.extend({}, n, t),
                l = !1,
                c = e("#" + a.attr("data-activates"));
              if ((i(), a.after(c), s.hover)) {
                var u = !1;
                a.off("click." + a.attr("id")),
                  a.on("mouseenter", function(e) {
                    !1 === u && (o(), (u = !0));
                  }),
                  a.on("mouseleave", function(t) {
                    e(t.toElement || t.relatedTarget)
                      .closest(".dropdown-content")
                      .is(c) || (c.stop(!0, !0), r(), (u = !1));
                  }),
                  c.on("mouseleave", function(t) {
                    e(t.toElement || t.relatedTarget)
                      .closest(".dropdown-button")
                      .is(a) || (c.stop(!0, !0), r(), (u = !1));
                  });
              } else
                a.off("click." + a.attr("id")),
                  a.on("click." + a.attr("id"), function(t) {
                    l ||
                      (a[0] != t.currentTarget ||
                      a.hasClass("active") ||
                      0 !== e(t.target).closest(".dropdown-content").length
                        ? a.hasClass("active") &&
                          (r(), e(document).off("click." + c.attr("id")))
                        : (t.preventDefault(),
                          s.stopPropagation && t.stopPropagation(),
                          o("click")));
                  });
              a.on("open", function(e, t) {
                o(t);
              }),
                a.on("close", r);
            });
      }),
      e(document).ready(function() {
        e(".dropdown-button").dropdown();
      });
  })(jQuery),
  (function(e, t) {
    "use strict";
    var n = {
        opacity: 0.5,
        inDuration: 250,
        outDuration: 250,
        ready: void 0,
        complete: void 0,
        dismissible: !0,
        startingTop: "4%",
        endingTop: "10%"
      },
      i = (function() {
        function i(t, n) {
          _classCallCheck(this, i),
            t[0].M_Modal && t[0].M_Modal.destroy(),
            (this.$el = t),
            (this.options = e.extend({}, i.defaults, n)),
            (this.isOpen = !1),
            (this.$el[0].M_Modal = this),
            (this.id = t.attr("id")),
            (this.openingTrigger = void 0),
            (this.$overlay = e('<div class="modal-overlay"></div>')),
            i._increment++,
            i._count++,
            (this.$overlay[0].style.zIndex = 1e3 + 2 * i._increment),
            (this.$el[0].style.zIndex = 1e3 + 2 * i._increment + 1),
            this.setupEventHandlers();
        }
        return (
          _createClass(
            i,
            [
              {
                key: "getInstance",
                value: function() {
                  return this;
                }
              },
              {
                key: "destroy",
                value: function() {
                  this.removeEventHandlers(),
                    this.$el[0].removeAttribute("style"),
                    this.$overlay[0].parentNode &&
                      this.$overlay[0].parentNode.removeChild(this.$overlay[0]),
                    (this.$el[0].M_Modal = void 0),
                    i._count--;
                }
              },
              {
                key: "setupEventHandlers",
                value: function() {
                  (this.handleOverlayClickBound = this.handleOverlayClick.bind(
                    this
                  )),
                    (this.handleModalCloseClickBound = this.handleModalCloseClick.bind(
                      this
                    )),
                    1 === i._count &&
                      document.body.addEventListener(
                        "click",
                        this.handleTriggerClick
                      ),
                    this.$overlay[0].addEventListener(
                      "click",
                      this.handleOverlayClickBound
                    ),
                    this.$el[0].addEventListener(
                      "click",
                      this.handleModalCloseClickBound
                    );
                }
              },
              {
                key: "removeEventHandlers",
                value: function() {
                  0 === i._count &&
                    document.body.removeEventListener(
                      "click",
                      this.handleTriggerClick
                    ),
                    this.$overlay[0].removeEventListener(
                      "click",
                      this.handleOverlayClickBound
                    ),
                    this.$el[0].removeEventListener(
                      "click",
                      this.handleModalCloseClickBound
                    );
                }
              },
              {
                key: "handleTriggerClick",
                value: function(t) {
                  var n = e(t.target).closest(".modal-trigger");
                  if (t.target && n.length) {
                    var i = n[0].getAttribute("href");
                    i = i ? i.slice(1) : n[0].getAttribute("data-target");
                    var o = document.getElementById(i).M_Modal;
                    o && o.open(n), t.preventDefault();
                  }
                }
              },
              {
                key: "handleOverlayClick",
                value: function() {
                  this.options.dismissible && this.close();
                }
              },
              {
                key: "handleModalCloseClick",
                value: function(t) {
                  var n = e(t.target).closest(".modal-close");
                  t.target && n.length && this.close();
                }
              },
              {
                key: "handleKeydown",
                value: function(e) {
                  27 === e.keyCode && this.options.dismissible && this.close();
                }
              },
              {
                key: "animateIn",
                value: function() {
                  var n = this;
                  e.extend(this.$el[0].style, { display: "block", opacity: 0 }),
                    e.extend(this.$overlay[0].style, {
                      display: "block",
                      opacity: 0
                    }),
                    t(
                      this.$overlay[0],
                      { opacity: this.options.opacity },
                      {
                        duration: this.options.inDuration,
                        queue: !1,
                        ease: "easeOutCubic"
                      }
                    );
                  var i = {
                    duration: this.options.inDuration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                      "function" == typeof n.options.ready &&
                        n.options.ready.call(n, n.$el, n.openingTrigger);
                    }
                  };
                  this.$el[0].classList.contains("bottom-sheet")
                    ? t(this.$el[0], { bottom: 0, opacity: 1 }, i)
                    : (t.hook(this.$el[0], "scaleX", 0.7),
                      (this.$el[0].style.top = this.options.startingTop),
                      t(
                        this.$el[0],
                        { top: this.options.endingTop, opacity: 1, scaleX: 1 },
                        i
                      ));
                }
              },
              {
                key: "animateOut",
                value: function() {
                  var e = this;
                  t(
                    this.$overlay[0],
                    { opacity: 0 },
                    {
                      duration: this.options.outDuration,
                      queue: !1,
                      ease: "easeOutQuart"
                    }
                  );
                  var n = {
                    duration: this.options.outDuration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                      (e.$el[0].style.display = "none"),
                        "function" == typeof e.options.complete &&
                          e.options.complete.call(e, e.$el),
                        e.$overlay[0].parentNode.removeChild(e.$overlay[0]);
                    }
                  };
                  this.$el[0].classList.contains("bottom-sheet")
                    ? t(this.$el[0], { bottom: "-100%", opacity: 0 }, n)
                    : t(
                        this.$el[0],
                        {
                          top: this.options.startingTop,
                          opacity: 0,
                          scaleX: 0.7
                        },
                        n
                      );
                }
              },
              {
                key: "open",
                value: function(e) {
                  if (!this.isOpen) {
                    this.isOpen = !0;
                    var t = document.body;
                    return (
                      (t.style.overflow = "hidden"),
                      this.$el[0].classList.add("open"),
                      t.appendChild(this.$overlay[0]),
                      (this.openingTrigger = e || void 0),
                      this.options.dismissible &&
                        ((this.handleKeydownBound = this.handleKeydown.bind(
                          this
                        )),
                        document.addEventListener(
                          "keydown",
                          this.handleKeydownBound
                        )),
                      this.animateIn(),
                      this
                    );
                  }
                }
              },
              {
                key: "close",
                value: function() {
                  if (this.isOpen)
                    return (
                      (this.isOpen = !1),
                      this.$el[0].classList.remove("open"),
                      (document.body.style.overflow = ""),
                      this.options.dismissible &&
                        document.removeEventListener(
                          "keydown",
                          this.handleKeydownBound
                        ),
                      this.animateOut(),
                      this
                    );
                }
              }
            ],
            [
              {
                key: "init",
                value: function(t, n) {
                  var o = [];
                  return (
                    t.each(function() {
                      o.push(new i(e(this), n));
                    }),
                    o
                  );
                }
              },
              {
                key: "defaults",
                get: function() {
                  return n;
                }
              }
            ]
          ),
          i
        );
      })();
    (i._increment = 0),
      (i._count = 0),
      (Materialize.Modal = i),
      (e.fn.modal = function(t) {
        return i.prototype[t]
          ? "get" === t.slice(0, 3)
            ? this.first()[0].M_Modal[t]()
            : this.each(function() {
                this.M_Modal[t]();
              })
          : "object" != typeof t && t
          ? void e.error("Method " + t + " does not exist on jQuery.modal")
          : (i.init(this, arguments[0]), this);
      });
  })(jQuery, Materialize.Vel),
  (function(e) {
    (e.fn.materialbox = function() {
      return this.each(function() {
        function t() {
          r = !1;
          var t = s.parent(".material-placeholder"),
            i = (window, window, s.data("width")),
            l = s.data("height");
          s.velocity("stop", !0),
            e("#materialbox-overlay").velocity("stop", !0),
            e(".materialbox-caption").velocity("stop", !0),
            e(window).off("scroll.materialbox"),
            e(document).off("keyup.materialbox"),
            e(window).off("resize.materialbox"),
            e("#materialbox-overlay").velocity(
              { opacity: 0 },
              {
                duration: a,
                queue: !1,
                easing: "easeOutQuad",
                complete: function() {
                  (o = !1), e(this).remove();
                }
              }
            ),
            s.velocity(
              { width: i, height: l, left: 0, top: 0 },
              {
                duration: a,
                queue: !1,
                easing: "easeOutQuad",
                complete: function() {
                  t.css({
                    height: "",
                    width: "",
                    position: "",
                    top: "",
                    left: ""
                  }),
                    s.removeAttr("style"),
                    s.attr("style", c),
                    s.removeClass("active"),
                    (r = !0),
                    n && n.css("overflow", "");
                }
              }
            ),
            e(".materialbox-caption").velocity(
              { opacity: 0 },
              {
                duration: a,
                queue: !1,
                easing: "easeOutQuad",
                complete: function() {
                  e(this).remove();
                }
              }
            );
        }
        if (!e(this).hasClass("initialized")) {
          e(this).addClass("initialized");
          var n,
            i,
            o = !1,
            r = !0,
            a = 200,
            s = e(this),
            l = e("<div></div>").addClass("material-placeholder"),
            c = s.attr("style");
          s.wrap(l),
            s.on("click", function() {
              var a = s.parent(".material-placeholder"),
                l = window.innerWidth,
                c = window.innerHeight,
                u = s.width(),
                d = s.height();
              if (!1 === r) return t(), !1;
              if (o && !0 === r) return t(), !1;
              for (
                r = !1,
                  s.addClass("active"),
                  o = !0,
                  a.css({
                    width: a[0].getBoundingClientRect().width,
                    height: a[0].getBoundingClientRect().height,
                    position: "relative",
                    top: 0,
                    left: 0
                  }),
                  n = void 0,
                  i = a[0].parentNode;
                null !== i && !e(i).is(document);

              ) {
                var p = e(i);
                "visible" !== p.css("overflow") &&
                  (p.css("overflow", "visible"),
                  (n = void 0 === n ? p : n.add(p))),
                  (i = i.parentNode);
              }
              s.css({
                position: "absolute",
                "z-index": 1e3,
                "will-change": "left, top, width, height"
              })
                .data("width", u)
                .data("height", d);
              var f = e('<div id="materialbox-overlay"></div>')
                .css({ opacity: 0 })
                .click(function() {
                  !0 === r && t();
                });
              s.before(f);
              var h = f[0].getBoundingClientRect();
              if (
                (f.css({
                  width: l,
                  height: c,
                  left: -1 * h.left,
                  top: -1 * h.top
                }),
                f.velocity(
                  { opacity: 1 },
                  { duration: 275, queue: !1, easing: "easeOutQuad" }
                ),
                "" !== s.data("caption"))
              ) {
                var v = e('<div class="materialbox-caption"></div>');
                v.text(s.data("caption")),
                  e("body").append(v),
                  v.css({ display: "inline" }),
                  v.velocity(
                    { opacity: 1 },
                    { duration: 275, queue: !1, easing: "easeOutQuad" }
                  );
              }
              var g = 0,
                m = 0;
              u / l > d / c
                ? ((g = 0.9 * l), (m = 0.9 * l * (d / u)))
                : ((g = 0.9 * c * (u / d)), (m = 0.9 * c)),
                s.hasClass("responsive-img")
                  ? s.velocity(
                      { "max-width": g, width: u },
                      {
                        duration: 0,
                        queue: !1,
                        complete: function() {
                          s.css({ left: 0, top: 0 }).velocity(
                            {
                              height: m,
                              width: g,
                              left:
                                e(document).scrollLeft() +
                                l / 2 -
                                s.parent(".material-placeholder").offset()
                                  .left -
                                g / 2,
                              top:
                                e(document).scrollTop() +
                                c / 2 -
                                s.parent(".material-placeholder").offset().top -
                                m / 2
                            },
                            {
                              duration: 275,
                              queue: !1,
                              easing: "easeOutQuad",
                              complete: function() {
                                r = !0;
                              }
                            }
                          );
                        }
                      }
                    )
                  : s
                      .css("left", 0)
                      .css("top", 0)
                      .velocity(
                        {
                          height: m,
                          width: g,
                          left:
                            e(document).scrollLeft() +
                            l / 2 -
                            s.parent(".material-placeholder").offset().left -
                            g / 2,
                          top:
                            e(document).scrollTop() +
                            c / 2 -
                            s.parent(".material-placeholder").offset().top -
                            m / 2
                        },
                        {
                          duration: 275,
                          queue: !1,
                          easing: "easeOutQuad",
                          complete: function() {
                            r = !0;
                          }
                        }
                      ),
                e(window).on("scroll.materialbox", function() {
                  o && t();
                }),
                e(window).on("resize.materialbox", function() {
                  o && t();
                }),
                e(document).on("keyup.materialbox", function(e) {
                  27 === e.keyCode && !0 === r && o && t();
                });
            });
        }
      });
    }),
      e(document).ready(function() {
        e(".materialboxed").materialbox();
      });
  })(jQuery),
  (function(e) {
    e.fn.parallax = function() {
      var t = e(window).width();
      return this.each(function(n) {
        function i(n) {
          var i;
          i =
            t < 601
              ? o.height() > 0
                ? o.height()
                : o.children("img").height()
              : o.height() > 0
              ? o.height()
              : 500;
          var r = o.children("img").first(),
            a = r.height() - i,
            s = o.offset().top + i,
            l = o.offset().top,
            c = e(window).scrollTop(),
            u = window.innerHeight,
            d = Math.round(a * ((c + u - l) / (i + u)));
          n && r.css("display", "block"),
            s > c &&
              l < c + u &&
              r.css("transform", "translate3D(-50%," + d + "px, 0)");
        }
        var o = e(this);
        o.addClass("parallax"),
          o
            .children("img")
            .one("load", function() {
              i(!0);
            })
            .each(function() {
              this.complete && e(this).trigger("load");
            }),
          e(window).scroll(function() {
            (t = e(window).width()), i(!1);
          }),
          e(window).resize(function() {
            (t = e(window).width()), i(!1);
          });
      });
    };
  })(jQuery),
  (function(e) {
    var t = {
      init: function(t) {
        t = e.extend(
          { onShow: null, swipeable: !1, responsiveThreshold: 1 / 0 },
          t
        );
        var n = Materialize.objectSelectorString(e(this));
        return this.each(function(i) {
          var o,
            r,
            a,
            s,
            l = n + i,
            c = e(this),
            u = e(window).width(),
            d = c.find("li.tab a"),
            p = c.width(),
            f = e(),
            h = Math.max(p, c[0].scrollWidth) / d.length,
            v = 0,
            g = 0,
            m = !1,
            y = function(e) {
              return Math.ceil(
                p -
                  e.position().left -
                  e[0].getBoundingClientRect().width -
                  c.scrollLeft()
              );
            },
            b = function(e) {
              return Math.floor(e.position().left + c.scrollLeft());
            },
            w = function(e) {
              v - e >= 0
                ? (s.velocity(
                    { right: y(o) },
                    { duration: 300, queue: !1, easing: "easeOutQuad" }
                  ),
                  s.velocity(
                    { left: b(o) },
                    {
                      duration: 300,
                      queue: !1,
                      easing: "easeOutQuad",
                      delay: 90
                    }
                  ))
                : (s.velocity(
                    { left: b(o) },
                    { duration: 300, queue: !1, easing: "easeOutQuad" }
                  ),
                  s.velocity(
                    { right: y(o) },
                    {
                      duration: 300,
                      queue: !1,
                      easing: "easeOutQuad",
                      delay: 90
                    }
                  ));
            };
          t.swipeable && u > t.responsiveThreshold && (t.swipeable = !1),
            0 === (o = e(d.filter('[href="' + location.hash + '"]'))).length &&
              (o = e(this)
                .find("li.tab a.active")
                .first()),
            0 === o.length &&
              (o = e(this)
                .find("li.tab a")
                .first()),
            o.addClass("active"),
            (v = d.index(o)) < 0 && (v = 0),
            void 0 !== o[0] && (r = e(o[0].hash)).addClass("active"),
            c.find(".indicator").length ||
              c.append('<li class="indicator"></li>'),
            (s = c.find(".indicator")),
            c.append(s),
            c.is(":visible") &&
              setTimeout(function() {
                s.css({ right: y(o) }), s.css({ left: b(o) });
              }, 0),
            e(window)
              .off("resize.tabs-" + l)
              .on("resize.tabs-" + l, function() {
                (p = c.width()),
                  (h = Math.max(p, c[0].scrollWidth) / d.length),
                  v < 0 && (v = 0),
                  0 !== h &&
                    0 !== p &&
                    (s.css({ right: y(o) }), s.css({ left: b(o) }));
              }),
            t.swipeable
              ? (d.each(function() {
                  var t = e(Materialize.escapeHash(this.hash));
                  t.addClass("carousel-item"), (f = f.add(t));
                }),
                (a = f.wrapAll('<div class="tabs-content carousel"></div>')),
                f.css("display", ""),
                e(".tabs-content.carousel").carousel({
                  fullWidth: !0,
                  noWrap: !0,
                  onCycleTo: function(e) {
                    if (!m) {
                      var n = v;
                      (v = a.index(e)),
                        o.removeClass("active"),
                        (o = d.eq(v)).addClass("active"),
                        w(n),
                        "function" == typeof t.onShow && t.onShow.call(c[0], r);
                    }
                  }
                }))
              : d.not(o).each(function() {
                  e(Materialize.escapeHash(this.hash)).hide();
                }),
            c.off("click.tabs").on("click.tabs", "a", function(n) {
              if (
                e(this)
                  .parent()
                  .hasClass("disabled")
              )
                n.preventDefault();
              else if (!e(this).attr("target")) {
                (m = !0),
                  (p = c.width()),
                  (h = Math.max(p, c[0].scrollWidth) / d.length),
                  o.removeClass("active");
                var i = r;
                (o = e(this)),
                  (r = e(Materialize.escapeHash(this.hash))),
                  (d = c.find("li.tab a")),
                  o.position(),
                  o.addClass("active"),
                  (g = v),
                  (v = d.index(e(this))) < 0 && (v = 0),
                  t.swipeable
                    ? f.length &&
                      f.carousel("set", v, function() {
                        "function" == typeof t.onShow && t.onShow.call(c[0], r);
                      })
                    : (void 0 !== r &&
                        (r.show(),
                        r.addClass("active"),
                        "function" == typeof t.onShow &&
                          t.onShow.call(this, r)),
                      void 0 === i ||
                        i.is(r) ||
                        (i.hide(), i.removeClass("active"))),
                  setTimeout(function() {
                    m = !1;
                  }, 300),
                  w(g),
                  n.preventDefault();
              }
            });
        });
      },
      select_tab: function(e) {
        this.find('a[href="#' + e + '"]').trigger("click");
      }
    };
    (e.fn.tabs = function(n) {
      return t[n]
        ? t[n].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof n && n
        ? void e.error("Method " + n + " does not exist on jQuery.tabs")
        : t.init.apply(this, arguments);
    }),
      e(document).ready(function() {
        e("ul.tabs").tabs();
      });
  })(jQuery),
  (function(e) {
    e.fn.tooltip = function(n) {
      return "remove" === n
        ? (this.each(function() {
            e("#" + e(this).attr("data-tooltip-id")).remove(),
              e(this).removeAttr("data-tooltip-id"),
              e(this).off("mouseenter.tooltip mouseleave.tooltip");
          }),
          !1)
        : ((n = e.extend(
            { delay: 350, tooltip: "", position: "bottom", html: !1 },
            n
          )),
          this.each(function() {
            var i = Materialize.guid(),
              o = e(this);
            o.attr("data-tooltip-id") &&
              e("#" + o.attr("data-tooltip-id")).remove(),
              o.attr("data-tooltip-id", i);
            var r,
              a,
              s,
              l,
              c,
              u,
              d = function() {
                (r = o.attr("data-html")
                  ? "true" === o.attr("data-html")
                  : n.html),
                  (a =
                    void 0 === (a = o.attr("data-delay")) || "" === a
                      ? n.delay
                      : a),
                  (s =
                    void 0 === (s = o.attr("data-position")) || "" === s
                      ? n.position
                      : s),
                  (l =
                    void 0 === (l = o.attr("data-tooltip")) || "" === l
                      ? n.tooltip
                      : l);
              };
            d(),
              (c = (function() {
                var t = e('<div class="material-tooltip"></div>');
                return (
                  (l = r
                    ? e("<span></span>").html(l)
                    : e("<span></span>").text(l)),
                  t
                    .append(l)
                    .appendTo(e("body"))
                    .attr("id", i),
                  (u = e('<div class="backdrop"></div>')).appendTo(t),
                  t
                );
              })()),
              o.off("mouseenter.tooltip mouseleave.tooltip");
            var p,
              f = !1;
            o.on({
              "mouseenter.tooltip": function(e) {
                p = setTimeout(function() {
                  d(),
                    (f = !0),
                    c.velocity("stop"),
                    u.velocity("stop"),
                    c.css({ visibility: "visible", left: "0px", top: "0px" });
                  var e,
                    n,
                    i,
                    r,
                    a,
                    l,
                    p = o.outerWidth(),
                    h = o.outerHeight(),
                    v = c.outerHeight(),
                    g = c.outerWidth(),
                    m = "0px",
                    y = "0px",
                    b = u[0].offsetWidth,
                    w = u[0].offsetHeight;
                  "top" === s
                    ? ((e = o.offset().top - v - 5),
                      (n = o.offset().left + p / 2 - g / 2),
                      (i = t(n, e, g, v)),
                      (m = "-10px"),
                      u.css({
                        bottom: 0,
                        left: 0,
                        borderRadius: "14px 14px 0 0",
                        transformOrigin: "50% 100%",
                        marginTop: v,
                        marginLeft: g / 2 - b / 2
                      }))
                    : "left" === s
                    ? ((e = o.offset().top + h / 2 - v / 2),
                      (n = o.offset().left - g - 5),
                      (i = t(n, e, g, v)),
                      (y = "-10px"),
                      u.css({
                        top: "-7px",
                        right: 0,
                        width: "14px",
                        height: "14px",
                        borderRadius: "14px 0 0 14px",
                        transformOrigin: "95% 50%",
                        marginTop: v / 2,
                        marginLeft: g
                      }))
                    : "right" === s
                    ? ((e = o.offset().top + h / 2 - v / 2),
                      (n = o.offset().left + p + 5),
                      (i = t(n, e, g, v)),
                      (y = "+10px"),
                      u.css({
                        top: "-7px",
                        left: 0,
                        width: "14px",
                        height: "14px",
                        borderRadius: "0 14px 14px 0",
                        transformOrigin: "5% 50%",
                        marginTop: v / 2,
                        marginLeft: "0px"
                      }))
                    : ((e = o.offset().top + o.outerHeight() + 5),
                      (n = o.offset().left + p / 2 - g / 2),
                      (i = t(n, e, g, v)),
                      (m = "+10px"),
                      u.css({ top: 0, left: 0, marginLeft: g / 2 - b / 2 })),
                    c.css({ top: i.y, left: i.x }),
                    (r = (Math.SQRT2 * g) / parseInt(b)),
                    (a = (Math.SQRT2 * v) / parseInt(w)),
                    (l = Math.max(r, a)),
                    c
                      .velocity(
                        { translateY: m, translateX: y },
                        { duration: 350, queue: !1 }
                      )
                      .velocity(
                        { opacity: 1 },
                        { duration: 300, delay: 50, queue: !1 }
                      ),
                    u
                      .css({ visibility: "visible" })
                      .velocity(
                        { opacity: 1 },
                        { duration: 55, delay: 0, queue: !1 }
                      )
                      .velocity(
                        { scaleX: l, scaleY: l },
                        {
                          duration: 300,
                          delay: 0,
                          queue: !1,
                          easing: "easeInOutQuad"
                        }
                      );
                }, a);
              },
              "mouseleave.tooltip": function() {
                (f = !1),
                  clearTimeout(p),
                  setTimeout(function() {
                    !0 !== f &&
                      (c.velocity(
                        { opacity: 0, translateY: 0, translateX: 0 },
                        { duration: 225, queue: !1 }
                      ),
                      u.velocity(
                        { opacity: 0, scaleX: 1, scaleY: 1 },
                        {
                          duration: 225,
                          queue: !1,
                          complete: function() {
                            u.css({ visibility: "hidden" }),
                              c.css({ visibility: "hidden" }),
                              (f = !1);
                          }
                        }
                      ));
                  }, 225);
              }
            });
          }));
    };
    var t = function(t, n, i, o) {
      var r = t,
        a = n;
      return (
        r < 0
          ? (r = 4)
          : r + i > window.innerWidth && (r -= r + i - window.innerWidth),
        a < 0
          ? (a = 4)
          : a + o > window.innerHeight + e(window).scrollTop &&
            (a -= a + o - window.innerHeight),
        { x: r, y: a }
      );
    };
    e(document).ready(function() {
      e(".tooltipped").tooltip();
    });
  })(jQuery),
  (function(e) {
    "use strict";
    function t(e) {
      var t = "";
      for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
      return t;
    }
    function n(t) {
      var n = (function(e) {
        if (!1 === a.allowEvent(e)) return null;
        for (
          var t = null, n = e.target || e.srcElement;
          null !== n.parentNode;

        ) {
          if (
            !(n instanceof SVGElement) &&
            -1 !== n.className.indexOf("waves-effect")
          ) {
            t = n;
            break;
          }
          n = n.parentNode;
        }
        return t;
      })(t);
      null !== n &&
        (r.show(t, n),
        "ontouchstart" in e &&
          (n.addEventListener("touchend", r.hide, !1),
          n.addEventListener("touchcancel", r.hide, !1)),
        n.addEventListener("mouseup", r.hide, !1),
        n.addEventListener("mouseleave", r.hide, !1),
        n.addEventListener("dragend", r.hide, !1));
    }
    var i = i || {},
      o = document.querySelectorAll.bind(document),
      r = {
        duration: 750,
        show: function(e, n) {
          if (2 === e.button) return !1;
          var i = n || this,
            o = document.createElement("div");
          (o.className = "waves-ripple"), i.appendChild(o);
          var a = (function(e) {
              var t,
                n,
                i = { top: 0, left: 0 },
                o = e && e.ownerDocument;
              return (
                (t = o.documentElement),
                void 0 !== e.getBoundingClientRect &&
                  (i = e.getBoundingClientRect()),
                (n = (function(e) {
                  return (function(e) {
                    return null !== e && e === e.window;
                  })(e)
                    ? e
                    : 9 === e.nodeType && e.defaultView;
                })(o)),
                {
                  top: i.top + n.pageYOffset - t.clientTop,
                  left: i.left + n.pageXOffset - t.clientLeft
                }
              );
            })(i),
            s = e.pageY - a.top,
            l = e.pageX - a.left,
            c = "scale(" + (i.clientWidth / 100) * 10 + ")";
          "touches" in e &&
            ((s = e.touches[0].pageY - a.top),
            (l = e.touches[0].pageX - a.left)),
            o.setAttribute("data-hold", Date.now()),
            o.setAttribute("data-scale", c),
            o.setAttribute("data-x", l),
            o.setAttribute("data-y", s);
          var u = { top: s + "px", left: l + "px" };
          (o.className = o.className + " waves-notransition"),
            o.setAttribute("style", t(u)),
            (o.className = o.className.replace("waves-notransition", "")),
            (u["-webkit-transform"] = c),
            (u["-moz-transform"] = c),
            (u["-ms-transform"] = c),
            (u["-o-transform"] = c),
            (u.transform = c),
            (u.opacity = "1"),
            (u["-webkit-transition-duration"] = r.duration + "ms"),
            (u["-moz-transition-duration"] = r.duration + "ms"),
            (u["-o-transition-duration"] = r.duration + "ms"),
            (u["transition-duration"] = r.duration + "ms"),
            (u["-webkit-transition-timing-function"] =
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
            (u["-moz-transition-timing-function"] =
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
            (u["-o-transition-timing-function"] =
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
            (u["transition-timing-function"] =
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)"),
            o.setAttribute("style", t(u));
        },
        hide: function(e) {
          a.touchup(e);
          var n = this,
            i = null,
            o = n.getElementsByClassName("waves-ripple");
          if (!(o.length > 0)) return !1;
          var s = (i = o[o.length - 1]).getAttribute("data-x"),
            l = i.getAttribute("data-y"),
            c = i.getAttribute("data-scale"),
            u = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
          u < 0 && (u = 0),
            setTimeout(function() {
              i.setAttribute(
                "style",
                t({
                  top: l + "px",
                  left: s + "px",
                  opacity: "0",
                  "-webkit-transition-duration": r.duration + "ms",
                  "-moz-transition-duration": r.duration + "ms",
                  "-o-transition-duration": r.duration + "ms",
                  "transition-duration": r.duration + "ms",
                  "-webkit-transform": c,
                  "-moz-transform": c,
                  "-ms-transform": c,
                  "-o-transform": c,
                  transform: c
                })
              ),
                setTimeout(function() {
                  try {
                    n.removeChild(i);
                  } catch (e) {
                    return !1;
                  }
                }, r.duration);
            }, u);
        },
        wrapInput: function(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if ("input" === n.tagName.toLowerCase()) {
              var i = n.parentNode;
              if (
                "i" === i.tagName.toLowerCase() &&
                -1 !== i.className.indexOf("waves-effect")
              )
                continue;
              var o = document.createElement("i");
              o.className = n.className + " waves-input-wrapper";
              var r = n.getAttribute("style");
              r || (r = ""),
                o.setAttribute("style", r),
                (n.className = "waves-button-input"),
                n.removeAttribute("style"),
                i.replaceChild(o, n),
                o.appendChild(n);
            }
          }
        }
      },
      a = {
        touches: 0,
        allowEvent: function(e) {
          var t = !0;
          return (
            "touchstart" === e.type
              ? (a.touches += 1)
              : "touchend" === e.type || "touchcancel" === e.type
              ? setTimeout(function() {
                  a.touches > 0 && (a.touches -= 1);
                }, 500)
              : "mousedown" === e.type && a.touches > 0 && (t = !1),
            t
          );
        },
        touchup: function(e) {
          a.allowEvent(e);
        }
      };
    (i.displayEffect = function(t) {
      "duration" in (t = t || {}) && (r.duration = t.duration),
        r.wrapInput(o(".waves-effect")),
        "ontouchstart" in e &&
          document.body.addEventListener("touchstart", n, !1),
        document.body.addEventListener("mousedown", n, !1);
    }),
      (i.attach = function(t) {
        "input" === t.tagName.toLowerCase() &&
          (r.wrapInput([t]), (t = t.parentNode)),
          "ontouchstart" in e && t.addEventListener("touchstart", n, !1),
          t.addEventListener("mousedown", n, !1);
      }),
      (e.Waves = i),
      document.addEventListener(
        "DOMContentLoaded",
        function() {
          i.displayEffect();
        },
        !1
      );
  })(window),
  (function(e, t) {
    "use strict";
    var n = {
        displayLength: 1 / 0,
        inDuration: 300,
        outDuration: 375,
        className: void 0,
        completeCallback: void 0,
        activationPercent: 0.8
      },
      i = (function() {
        function i(t, n, o, r) {
          if ((_classCallCheck(this, i), t)) {
            (this.options = {
              displayLength: n,
              className: o,
              completeCallback: r
            }),
              (this.options = e.extend({}, i.defaults, this.options)),
              (this.message = t),
              (this.panning = !1),
              (this.timeRemaining = this.options.displayLength),
              0 === i._toasts.length && i._createContainer(),
              i._toasts.push(this);
            var a = this.createToast();
            (a.M_Toast = this),
              (this.el = a),
              this._animateIn(),
              this.setTimer();
          }
        }
        return (
          _createClass(
            i,
            [
              {
                key: "createToast",
                value: function() {
                  var t = document.createElement("div");
                  if ((t.classList.add("toast"), this.options.className)) {
                    var n,
                      o = this.options.className.split(" "),
                      r = void 0;
                    for (r = 0, n = o.length; r < n; r++) t.classList.add(o[r]);
                  }
                  return (
                    ("object" == typeof HTMLElement
                    ? this.message instanceof HTMLElement
                    : this.message &&
                      "object" == typeof this.message &&
                      null !== this.message &&
                      1 === this.message.nodeType &&
                      "string" == typeof this.message.nodeName)
                      ? t.appendChild(this.message)
                      : this.message instanceof jQuery
                      ? e(t).append(this.message)
                      : (t.innerHTML = this.message),
                    i._container.appendChild(t),
                    t
                  );
                }
              },
              {
                key: "_animateIn",
                value: function() {
                  t(
                    this.el,
                    { top: 0, opacity: 1 },
                    { duration: 300, easing: "easeOutCubic", queue: !1 }
                  );
                }
              },
              {
                key: "setTimer",
                value: function() {
                  var e = this;
                  this.timeRemaining !== 1 / 0 &&
                    (this.counterInterval = setInterval(function() {
                      e.panning || (e.timeRemaining -= 20),
                        e.timeRemaining <= 0 && e.remove();
                    }, 20));
                }
              },
              {
                key: "remove",
                value: function() {
                  var e = this;
                  window.clearInterval(this.counterInterval);
                  var n = this.el.offsetWidth * this.options.activationPercent;
                  this.wasSwiped &&
                    ((this.el.style.transition =
                      "transform .05s, opacity .05s"),
                    (this.el.style.transform = "translateX(" + n + "px)"),
                    (this.el.style.opacity = 0)),
                    t(
                      this.el,
                      { opacity: 0, marginTop: "-40px" },
                      {
                        duration: this.options.outDuration,
                        easing: "easeOutExpo",
                        queue: !1,
                        complete: function() {
                          "function" == typeof e.options.completeCallback &&
                            e.options.completeCallback(),
                            e.el.parentNode.removeChild(e.el),
                            i._toasts.splice(i._toasts.indexOf(e), 1),
                            0 === i._toasts.length && i._removeContainer();
                        }
                      }
                    );
                }
              }
            ],
            [
              {
                key: "_createContainer",
                value: function() {
                  var e = document.createElement("div");
                  e.setAttribute("id", "toast-container"),
                    e.addEventListener("touchstart", i._onDragStart),
                    e.addEventListener("touchmove", i._onDragMove),
                    e.addEventListener("touchend", i._onDragEnd),
                    e.addEventListener("mousedown", i._onDragStart),
                    document.addEventListener("mousemove", i._onDragMove),
                    document.addEventListener("mouseup", i._onDragEnd),
                    document.body.appendChild(e),
                    (i._container = e);
                }
              },
              {
                key: "_removeContainer",
                value: function() {
                  document.removeEventListener("mousemove", i._onDragMove),
                    document.removeEventListener("mouseup", i._onDragEnd),
                    i._container.parentNode.removeChild(i._container),
                    (i._container = null);
                }
              },
              {
                key: "_onDragStart",
                value: function(t) {
                  if (t.target && e(t.target).closest(".toast").length) {
                    var n = e(t.target).closest(".toast")[0].M_Toast;
                    (n.panning = !0),
                      (i._draggedToast = n),
                      n.el.classList.add("panning"),
                      (n.el.style.transition = ""),
                      (n.startingXPos = i._xPos(t)),
                      (n.time = Date.now()),
                      (n.xPos = i._xPos(t));
                  }
                }
              },
              {
                key: "_onDragMove",
                value: function(e) {
                  if (i._draggedToast) {
                    e.preventDefault();
                    var t = i._draggedToast;
                    (t.deltaX = Math.abs(t.xPos - i._xPos(e))),
                      (t.xPos = i._xPos(e)),
                      (t.velocityX = t.deltaX / (Date.now() - t.time)),
                      (t.time = Date.now());
                    var n = t.xPos - t.startingXPos,
                      o = t.el.offsetWidth * t.options.activationPercent;
                    (t.el.style.transform = "translateX(" + n + "px)"),
                      (t.el.style.opacity = 1 - Math.abs(n / o));
                  }
                }
              },
              {
                key: "_onDragEnd",
                value: function(e) {
                  if (i._draggedToast) {
                    var t = i._draggedToast;
                    (t.panning = !1), t.el.classList.remove("panning");
                    var n = t.el.offsetWidth * t.options.activationPercent;
                    Math.abs(t.xPos - t.startingXPos) > n || t.velocityX > 1
                      ? ((t.wasSwiped = !0), t.remove())
                      : ((t.el.style.transition = "transform .2s, opacity .2s"),
                        (t.el.style.transform = ""),
                        (t.el.style.opacity = "")),
                      (i._draggedToast = null);
                  }
                }
              },
              {
                key: "_xPos",
                value: function(e) {
                  return e.targetTouches && e.targetTouches.length >= 1
                    ? e.targetTouches[0].clientX
                    : e.clientX;
                }
              },
              {
                key: "removeAll",
                value: function() {
                  for (var e in i._toasts) i._toasts[e].remove();
                }
              },
              {
                key: "defaults",
                get: function() {
                  return n;
                }
              }
            ]
          ),
          i
        );
      })();
    (i._toasts = []),
      (i._container = null),
      (i._draggedToast = null),
      (Materialize.Toast = i),
      (Materialize.toast = function(e, t, n, o) {
        return new i(e, t, n, o);
      });
  })(jQuery, Materialize.Vel),
  (function(e) {
    var t = {
      init: function(t) {
        (t = e.extend(
          {
            menuWidth: 300,
            edge: "left",
            closeOnClick: !1,
            draggable: !0,
            onOpen: null,
            onClose: null
          },
          t
        )),
          e(this).each(function() {
            var n = e(this),
              i = n.attr("data-activates"),
              o = e("#" + i);
            300 != t.menuWidth && o.css("width", t.menuWidth);
            var r = e('.drag-target[data-sidenav="' + i + '"]');
            t.draggable
              ? (r.length && r.remove(),
                (r = e('<div class="drag-target"></div>').attr(
                  "data-sidenav",
                  i
                )),
                e("body").append(r))
              : (r = e()),
              "left" == t.edge
                ? (o.css("transform", "translateX(-100%)"), r.css({ left: 0 }))
                : (o
                    .addClass("right-aligned")
                    .css("transform", "translateX(100%)"),
                  r.css({ right: 0 })),
              o.hasClass("fixed") &&
                window.innerWidth > 992 &&
                o.css("transform", "translateX(0)"),
              o.hasClass("fixed") &&
                e(window).resize(function() {
                  window.innerWidth > 992
                    ? 0 !== e("#sidenav-overlay").length && s
                      ? a(!0)
                      : o.css("transform", "translateX(0%)")
                    : !1 === s &&
                      o.css(
                        "transform",
                        "left" === t.edge
                          ? "translateX(-100%)"
                          : "translateX(100%)"
                      );
                }),
              !0 === t.closeOnClick &&
                o.on(
                  "click.itemclick",
                  "a:not(.collapsible-header)",
                  function() {
                    (window.innerWidth > 992 && o.hasClass("fixed")) || a();
                  }
                );
            var a = function(n) {
                (s = !1),
                  e("body").css({ overflow: "", width: "" }),
                  e("#sidenav-overlay").velocity(
                    { opacity: 0 },
                    {
                      duration: 200,
                      queue: !1,
                      easing: "easeOutQuad",
                      complete: function() {
                        e(this).remove();
                      }
                    }
                  ),
                  "left" === t.edge
                    ? (r.css({ width: "", right: "", left: "0" }),
                      o.velocity(
                        { translateX: "-100%" },
                        {
                          duration: 200,
                          queue: !1,
                          easing: "easeOutCubic",
                          complete: function() {
                            !0 === n &&
                              (o.removeAttr("style"),
                              o.css("width", t.menuWidth));
                          }
                        }
                      ))
                    : (r.css({ width: "", right: "0", left: "" }),
                      o.velocity(
                        { translateX: "100%" },
                        {
                          duration: 200,
                          queue: !1,
                          easing: "easeOutCubic",
                          complete: function() {
                            !0 === n &&
                              (o.removeAttr("style"),
                              o.css("width", t.menuWidth));
                          }
                        }
                      )),
                  "function" == typeof t.onClose && t.onClose.call(this, o);
              },
              s = !1;
            t.draggable &&
              (r.on("click", function() {
                s && a();
              }),
              r
                .hammer({ prevent_default: !1 })
                .on("pan", function(n) {
                  if ("touch" == n.gesture.pointerType) {
                    var i = n.gesture.center.x;
                    if (0 === i && 0 === n.gesture.center.y) return;
                    var r,
                      l = e("body"),
                      c = e("#sidenav-overlay"),
                      u = l.innerWidth();
                    if (
                      (l.css("overflow", "hidden"),
                      l.width(u),
                      0 === c.length &&
                        ((c = e('<div id="sidenav-overlay"></div>'))
                          .css("opacity", 0)
                          .click(function() {
                            a();
                          }),
                        "function" == typeof t.onOpen && t.onOpen.call(this, o),
                        e("body").append(c)),
                      "left" === t.edge &&
                        (i > t.menuWidth
                          ? (i = t.menuWidth)
                          : i < 0 && (i = 0)),
                      "left" === t.edge)
                    )
                      i < t.menuWidth / 2
                        ? (s = !1)
                        : i >= t.menuWidth / 2 && (s = !0),
                        o.css(
                          "transform",
                          "translateX(" + (i - t.menuWidth) + "px)"
                        );
                    else {
                      i < window.innerWidth - t.menuWidth / 2
                        ? (s = !0)
                        : i >= window.innerWidth - t.menuWidth / 2 && (s = !1);
                      var d = i - t.menuWidth / 2;
                      d < 0 && (d = 0),
                        o.css("transform", "translateX(" + d + "px)");
                    }
                    "left" === t.edge
                      ? c.velocity(
                          { opacity: (r = i / t.menuWidth) },
                          { duration: 10, queue: !1, easing: "easeOutQuad" }
                        )
                      : ((r = Math.abs((i - window.innerWidth) / t.menuWidth)),
                        c.velocity(
                          { opacity: r },
                          { duration: 10, queue: !1, easing: "easeOutQuad" }
                        ));
                  }
                })
                .on("panend", function(n) {
                  if ("touch" == n.gesture.pointerType) {
                    var i = e("#sidenav-overlay"),
                      a = n.gesture.velocityX,
                      l = n.gesture.center.x,
                      c = l - t.menuWidth,
                      u = l - t.menuWidth / 2;
                    c > 0 && (c = 0),
                      u < 0 && (u = 0),
                      "left" === t.edge
                        ? (s && a <= 0.3) || a < -0.5
                          ? (0 !== c &&
                              o.velocity(
                                { translateX: [0, c] },
                                {
                                  duration: 300,
                                  queue: !1,
                                  easing: "easeOutQuad"
                                }
                              ),
                            i.velocity(
                              { opacity: 1 },
                              { duration: 50, queue: !1, easing: "easeOutQuad" }
                            ),
                            r.css({ width: "50%", right: 0, left: "" }),
                            (s = !0))
                          : (!s || a > 0.3) &&
                            (e("body").css({ overflow: "", width: "" }),
                            o.velocity(
                              { translateX: [-1 * t.menuWidth - 10, c] },
                              {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                              }
                            ),
                            i.velocity(
                              { opacity: 0 },
                              {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                  "function" == typeof t.onClose &&
                                    t.onClose.call(this, o),
                                    e(this).remove();
                                }
                              }
                            ),
                            r.css({ width: "10px", right: "", left: 0 }))
                        : (s && a >= -0.3) || a > 0.5
                        ? (0 !== u &&
                            o.velocity(
                              { translateX: [0, u] },
                              {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                              }
                            ),
                          i.velocity(
                            { opacity: 1 },
                            { duration: 50, queue: !1, easing: "easeOutQuad" }
                          ),
                          r.css({ width: "50%", right: "", left: 0 }),
                          (s = !0))
                        : (!s || a < -0.3) &&
                          (e("body").css({ overflow: "", width: "" }),
                          o.velocity(
                            { translateX: [t.menuWidth + 10, u] },
                            { duration: 200, queue: !1, easing: "easeOutQuad" }
                          ),
                          i.velocity(
                            { opacity: 0 },
                            {
                              duration: 200,
                              queue: !1,
                              easing: "easeOutQuad",
                              complete: function() {
                                "function" == typeof t.onClose &&
                                  t.onClose.call(this, o),
                                  e(this).remove();
                              }
                            }
                          ),
                          r.css({ width: "10px", right: 0, left: "" }));
                  }
                })),
              n.off("click.sidenav").on("click.sidenav", function() {
                if (!0 === s) (s = !1), a();
                else {
                  var n = e("body"),
                    i = e('<div id="sidenav-overlay"></div>'),
                    l = n.innerWidth();
                  n.css("overflow", "hidden"),
                    n.width(l),
                    e("body").append(r),
                    "left" === t.edge
                      ? (r.css({ width: "50%", right: 0, left: "" }),
                        o.velocity(
                          { translateX: [0, -1 * t.menuWidth] },
                          { duration: 300, queue: !1, easing: "easeOutQuad" }
                        ))
                      : (r.css({ width: "50%", right: "", left: 0 }),
                        o.velocity(
                          { translateX: [0, t.menuWidth] },
                          { duration: 300, queue: !1, easing: "easeOutQuad" }
                        )),
                    i.css("opacity", 0).click(function() {
                      (s = !1),
                        a(),
                        i.velocity(
                          { opacity: 0 },
                          {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                              e(this).remove();
                            }
                          }
                        );
                    }),
                    e("body").append(i),
                    i.velocity(
                      { opacity: 1 },
                      {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                          s = !0;
                        }
                      }
                    ),
                    "function" == typeof t.onOpen && t.onOpen.call(this, o);
                }
                return !1;
              });
          });
      },
      destroy: function() {
        var t = e("#sidenav-overlay"),
          n = e(
            '.drag-target[data-sidenav="' +
              e(this).attr("data-activates") +
              '"]'
          );
        t.trigger("click"), n.remove(), e(this).off("click"), t.remove();
      },
      show: function() {
        this.trigger("click");
      },
      hide: function() {
        e("#sidenav-overlay").trigger("click");
      }
    };
    e.fn.sideNav = function(n) {
      return t[n]
        ? t[n].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof n && n
        ? void e.error("Method " + n + " does not exist on jQuery.sideNav")
        : t.init.apply(this, arguments);
    };
  })(jQuery),
  (function(e) {
    function t(t, n, i, o) {
      var a = e();
      return (
        e.each(r, function(e, r) {
          if (r.height() > 0) {
            var s = r.offset().top,
              l = r.offset().left,
              c = l + r.width(),
              u = s + r.height();
            !(l > n || c < o || s > i || u < t) && a.push(r);
          }
        }),
        a
      );
    }
    function n(n) {
      ++l;
      var i = o.scrollTop(),
        r = o.scrollLeft(),
        s = r + o.width(),
        u = i + o.height(),
        d = t(i + c.top + n || 200, s + c.right, u + c.bottom, r + c.left);
      e.each(d, function(e, t) {
        "number" != typeof t.data("scrollSpy:ticks") &&
          t.triggerHandler("scrollSpy:enter"),
          t.data("scrollSpy:ticks", l);
      }),
        e.each(a, function(e, t) {
          var n = t.data("scrollSpy:ticks");
          "number" == typeof n &&
            n !== l &&
            (t.triggerHandler("scrollSpy:exit"),
            t.data("scrollSpy:ticks", null));
        }),
        (a = d);
    }
    function i() {
      o.trigger("scrollSpy:winSize");
    }
    var o = e(window),
      r = [],
      a = [],
      s = !1,
      l = 0,
      c = { top: 0, right: 0, bottom: 0, left: 0 };
    (e.scrollSpy = function(t, i) {
      i = e.extend(
        {
          throttle: 100,
          scrollOffset: 200,
          activeClass: "active",
          getActiveElement: function(e) {
            return 'a[href="#' + e + '"]';
          }
        },
        i
      );
      var a = [];
      (t = e(t)).each(function(t, n) {
        r.push(e(n)),
          e(n).data("scrollSpy:id", t),
          e('a[href="#' + e(n).attr("id") + '"]').click(function(t) {
            t.preventDefault();
            var n = e(Materialize.escapeHash(this.hash)).offset().top + 1;
            e("html, body").animate(
              { scrollTop: n - i.scrollOffset },
              { duration: 400, queue: !1, easing: "easeOutCubic" }
            );
          });
      }),
        (c.top = i.offsetTop || 0),
        (c.right = i.offsetRight || 0),
        (c.bottom = i.offsetBottom || 0),
        (c.left = i.offsetLeft || 0);
      var l = Materialize.throttle(function() {
          n(i.scrollOffset);
        }, i.throttle || 100),
        u = function() {
          e(document).ready(l);
        };
      return (
        s || (o.on("scroll", u), o.on("resize", u), (s = !0)),
        setTimeout(u, 0),
        t.on("scrollSpy:enter", function() {
          a = e.grep(a, function(e) {
            return 0 != e.height();
          });
          var t = e(this);
          a[0]
            ? (e(i.getActiveElement(a[0].attr("id"))).removeClass(
                i.activeClass
              ),
              t.data("scrollSpy:id") < a[0].data("scrollSpy:id")
                ? a.unshift(e(this))
                : a.push(e(this)))
            : a.push(e(this)),
            e(i.getActiveElement(a[0].attr("id"))).addClass(i.activeClass);
        }),
        t.on("scrollSpy:exit", function() {
          if (
            (a = e.grep(a, function(e) {
              return 0 != e.height();
            }))[0]
          ) {
            e(i.getActiveElement(a[0].attr("id"))).removeClass(i.activeClass);
            var t = e(this);
            (a = e.grep(a, function(e) {
              return e.attr("id") != t.attr("id");
            }))[0] &&
              e(i.getActiveElement(a[0].attr("id"))).addClass(i.activeClass);
          }
        }),
        t
      );
    }),
      (e.winSizeSpy = function(t) {
        return (
          (e.winSizeSpy = function() {
            return o;
          }),
          (t = t || { throttle: 100 }),
          o.on("resize", Materialize.throttle(i, t.throttle || 100))
        );
      }),
      (e.fn.scrollSpy = function(t) {
        return e.scrollSpy(e(this), t);
      });
  })(jQuery),
  (function(e) {
    e(document).ready(function() {
      Materialize.updateTextFields = function() {
        e(
          "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea"
        ).each(function(t, n) {
          var i = e(this);
          e(n).val().length > 0 ||
          e(n).is(":focus") ||
          n.autofocus ||
          void 0 !== i.attr("placeholder")
            ? i.siblings("label").addClass("active")
            : e(n)[0].validity
            ? i
                .siblings("label")
                .toggleClass("active", !0 === e(n)[0].validity.badInput)
            : i.siblings("label").removeClass("active");
        });
      };
      var t =
        "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
      e(document).on("change", t, function() {
        (0 === e(this).val().length &&
          void 0 === e(this).attr("placeholder")) ||
          e(this)
            .siblings("label")
            .addClass("active"),
          validate_field(e(this));
      }),
        e(document).ready(function() {
          Materialize.updateTextFields();
        }),
        e(document).on("reset", function(n) {
          var i = e(n.target);
          i.is("form") &&
            (i
              .find(t)
              .removeClass("valid")
              .removeClass("invalid"),
            i.find(t).each(function() {
              "" === e(this).attr("value") &&
                e(this)
                  .siblings("label")
                  .removeClass("active");
            }),
            i.find("select.initialized").each(function() {
              var e = i.find("option[selected]").text();
              i.siblings("input.select-dropdown").val(e);
            }));
        }),
        e(document).on("focus", t, function() {
          e(this)
            .siblings("label, .prefix")
            .addClass("active");
        }),
        e(document).on("blur", t, function() {
          var t = e(this),
            n = ".prefix";
          0 === t.val().length &&
            !0 !== t[0].validity.badInput &&
            void 0 === t.attr("placeholder") &&
            (n += ", label"),
            t.siblings(n).removeClass("active"),
            validate_field(t);
        }),
        (window.validate_field = function(e) {
          var t = void 0 !== e.attr("data-length"),
            n = parseInt(e.attr("data-length")),
            i = e.val().length;
          0 !== e.val().length ||
          !1 !== e[0].validity.badInput ||
          e.is(":required")
            ? e.hasClass("validate") &&
              ((e.is(":valid") && t && i <= n) || (e.is(":valid") && !t)
                ? (e.removeClass("invalid"), e.addClass("valid"))
                : (e.removeClass("valid"), e.addClass("invalid")))
            : e.hasClass("validate") &&
              (e.removeClass("valid"), e.removeClass("invalid"));
        }),
        e(document).on(
          "keyup.radio",
          "input[type=radio], input[type=checkbox]",
          function(t) {
            if (9 === t.which)
              return (
                e(this).addClass("tabbed"),
                void e(this).one("blur", function(t) {
                  e(this).removeClass("tabbed");
                })
              );
          }
        );
      var n = e(".hiddendiv").first();
      n.length ||
        ((n = e('<div class="hiddendiv common"></div>')), e("body").append(n)),
        e(".materialize-textarea").each(function() {
          var t = e(this);
          t.data("original-height", t.height()),
            t.data("previous-length", t.val().length);
        }),
        e("body").on(
          "keyup keydown autoresize",
          ".materialize-textarea",
          function() {
            !(function(t) {
              var i = t.css("font-family"),
                o = t.css("font-size"),
                r = t.css("line-height"),
                a = t.css("padding");
              o && n.css("font-size", o),
                i && n.css("font-family", i),
                r && n.css("line-height", r),
                a && n.css("padding", a),
                t.data("original-height") ||
                  t.data("original-height", t.height()),
                "off" === t.attr("wrap") &&
                  n.css("overflow-wrap", "normal").css("white-space", "pre"),
                n.text(t.val() + "\n");
              var s = n.html().replace(/\n/g, "<br>");
              n.html(s),
                t.is(":visible")
                  ? n.css("width", t.width())
                  : n.css("width", e(window).width() / 2),
                t.data("original-height") <= n.height()
                  ? t.css("height", n.height())
                  : t.val().length < t.data("previous-length") &&
                    t.css("height", t.data("original-height")),
                t.data("previous-length", t.val().length);
            })(e(this));
          }
        ),
        e(document).on("change", '.file-field input[type="file"]', function() {
          for (
            var t = e(this)
                .closest(".file-field")
                .find("input.file-path"),
              n = e(this)[0].files,
              i = [],
              o = 0;
            o < n.length;
            o++
          )
            i.push(n[o].name);
          t.val(i.join(", ")), t.trigger("change");
        });
      var i = "input[type=range]",
        o = !1;
      e(i).each(function() {
        var t = e('<span class="thumb"><span class="value"></span></span>');
        e(this).after(t);
      });
      var r = function(e) {
          var t = -7 + parseInt(e.parent().css("padding-left")) + "px";
          e.velocity(
            { height: "30px", width: "30px", top: "-30px", marginLeft: t },
            { duration: 300, easing: "easeOutExpo" }
          );
        },
        a = function(e) {
          var t = e.width() - 15,
            n = parseFloat(e.attr("max")),
            i = parseFloat(e.attr("min"));
          return ((parseFloat(e.val()) - i) / (n - i)) * t;
        };
      e(document).on("change", i, function(t) {
        var n = e(this).siblings(".thumb");
        n.find(".value").html(e(this).val()), n.hasClass("active") || r(n);
        var i = a(e(this));
        n.addClass("active").css("left", i);
      }),
        e(document).on("mousedown touchstart", i, function(t) {
          var n = e(this).siblings(".thumb");
          if (
            (n.length <= 0 &&
              ((n = e(
                '<span class="thumb"><span class="value"></span></span>'
              )),
              e(this).after(n)),
            n.find(".value").html(e(this).val()),
            (o = !0),
            e(this).addClass("active"),
            n.hasClass("active") || r(n),
            "input" !== t.type)
          ) {
            var i = a(e(this));
            n.addClass("active").css("left", i);
          }
        }),
        e(document).on("mouseup touchend", ".range-field", function() {
          (o = !1), e(this).removeClass("active");
        }),
        e(document).on("input mousemove touchmove", ".range-field", function(
          t
        ) {
          var n = e(this).children(".thumb"),
            s = e(this).find(i);
          if (o) {
            n.hasClass("active") || r(n);
            var l = a(s);
            n.addClass("active").css("left", l),
              n.find(".value").html(n.siblings(i).val());
          }
        }),
        e(document).on("mouseout touchleave", ".range-field", function() {
          if (!o) {
            var t = e(this).children(".thumb"),
              n = 7 + parseInt(e(this).css("padding-left")) + "px";
            t.hasClass("active") &&
              t.velocity(
                { height: "0", width: "0", top: "10px", marginLeft: n },
                { duration: 100 }
              ),
              t.removeClass("active");
          }
        }),
        (e.fn.autocomplete = function(t) {
          return (
            (t = e.extend(
              { data: {}, limit: 1 / 0, onAutocomplete: null, minLength: 1 },
              t
            )),
            this.each(function() {
              var n,
                i = e(this),
                o = t.data,
                r = 0,
                a = -1,
                s = i.closest(".input-field");
              if (e.isEmptyObject(o))
                i.off("keyup.autocomplete focus.autocomplete");
              else {
                var l,
                  c = e(
                    '<ul class="autocomplete-content dropdown-content"></ul>'
                  );
                s.length
                  ? (l = s
                      .children(".autocomplete-content.dropdown-content")
                      .first()).length || s.append(c)
                  : (l = i.next(".autocomplete-content.dropdown-content"))
                      .length || i.after(c),
                  l.length && (c = l);
                var u = function(e, t) {
                    var n = t.find("img"),
                      i = t
                        .text()
                        .toLowerCase()
                        .indexOf("" + e.toLowerCase()),
                      o = i + e.length - 1,
                      r = t.text().slice(0, i),
                      a = t.text().slice(i, o + 1),
                      s = t.text().slice(o + 1);
                    t.html(
                      "<span>" +
                        r +
                        "<span class='highlight'>" +
                        a +
                        "</span>" +
                        s +
                        "</span>"
                    ),
                      n.length && t.prepend(n);
                  },
                  d = function() {
                    c.empty(),
                      (a = -1),
                      c.find(".active").removeClass("active"),
                      (n = void 0);
                  };
                i.off("blur.autocomplete").on("blur.autocomplete", function() {
                  d();
                }),
                  i
                    .off("keyup.autocomplete focus.autocomplete")
                    .on("keyup.autocomplete focus.autocomplete", function(a) {
                      r = 0;
                      var s = i.val().toLowerCase();
                      if (13 !== a.which && 38 !== a.which && 40 !== a.which) {
                        if (n !== s && (d(), s.length >= t.minLength))
                          for (var l in o)
                            if (
                              o.hasOwnProperty(l) &&
                              -1 !== l.toLowerCase().indexOf(s)
                            ) {
                              if (r >= t.limit) break;
                              var p = e("<li></li>");
                              p.append(
                                o[l]
                                  ? '<img src="' +
                                      o[l] +
                                      '" class="right circle"><span>' +
                                      l +
                                      "</span>"
                                  : "<span>" + l + "</span>"
                              ),
                                c.append(p),
                                u(s, p),
                                r++;
                            }
                        n = s;
                      }
                    }),
                  i
                    .off("keydown.autocomplete")
                    .on("keydown.autocomplete", function(e) {
                      var t,
                        n = e.which,
                        i = c.children("li").length,
                        o = c.children(".active").first();
                      13 === n && a >= 0
                        ? (t = c.children("li").eq(a)).length &&
                          (t.trigger("mousedown.autocomplete"),
                          e.preventDefault())
                        : (38 !== n && 40 !== n) ||
                          (e.preventDefault(),
                          38 === n && a > 0 && a--,
                          40 === n && a < i - 1 && a++,
                          o.removeClass("active"),
                          a >= 0 &&
                            c
                              .children("li")
                              .eq(a)
                              .addClass("active"));
                    }),
                  c
                    .off("mousedown.autocomplete touchstart.autocomplete")
                    .on(
                      "mousedown.autocomplete touchstart.autocomplete",
                      "li",
                      function() {
                        var n = e(this)
                          .text()
                          .trim();
                        i.val(n),
                          i.trigger("change"),
                          d(),
                          "function" == typeof t.onAutocomplete &&
                            t.onAutocomplete.call(this, n);
                      }
                    );
              }
            })
          );
        });
    }),
      (e.fn.material_select = function(t) {
        function n(e, t, n) {
          var i = e.indexOf(t),
            o = -1 === i;
          return (
            o ? e.push(t) : e.splice(i, 1),
            n
              .siblings("ul.dropdown-content")
              .find("li:not(.optgroup)")
              .eq(t)
              .toggleClass("active"),
            n
              .find("option")
              .eq(t)
              .prop("selected", o),
            (function(e, t) {
              for (var n = "", i = 0, o = e.length; i < o; i++) {
                var r = t
                  .find("option")
                  .eq(e[i])
                  .text();
                n += 0 === i ? r : ", " + r;
              }
              "" === n &&
                (n = t
                  .find("option:disabled")
                  .eq(0)
                  .text()),
                t.siblings("input.select-dropdown").val(n);
            })(e, n),
            o
          );
        }
        e(this).each(function() {
          var i = e(this);
          if (!i.hasClass("browser-default")) {
            var o = !!i.attr("multiple"),
              r = i.attr("data-select-id");
            if (
              (r &&
                (i
                  .parent()
                  .find("span.caret")
                  .remove(),
                i
                  .parent()
                  .find("input")
                  .remove(),
                i.unwrap(),
                e("ul#select-options-" + r).remove()),
              "destroy" === t)
            )
              return (
                i.removeAttr("data-select-id").removeClass("initialized"),
                void e(window).off("click.select")
              );
            var a = Materialize.guid();
            i.attr("data-select-id", a);
            var s = e('<div class="select-wrapper"></div>');
            s.addClass(i.attr("class")),
              i.is(":disabled") && s.addClass("disabled");
            var l = e(
                '<ul id="select-options-' +
                  a +
                  '" class="dropdown-content select-dropdown ' +
                  (o ? "multiple-select-dropdown" : "") +
                  '"></ul>'
              ),
              c = i.children("option, optgroup"),
              u = [],
              d = !1,
              p =
                i.find("option:selected").html() ||
                i.find("option:first").html() ||
                "",
              f = function(t, n, i) {
                var r = n.is(":disabled") ? "disabled " : "",
                  a = "optgroup-option" === i ? "optgroup-option " : "",
                  s = o
                    ? '<input type="checkbox"' + r + "/><label></label>"
                    : "",
                  c = n.data("icon"),
                  u = n.attr("class");
                if (c) {
                  var d = "";
                  return (
                    u && (d = ' class="' + u + '"'),
                    l.append(
                      e(
                        '<li class="' +
                          r +
                          a +
                          '"><img alt="" src="' +
                          c +
                          '"' +
                          d +
                          "><span>" +
                          s +
                          n.html() +
                          "</span></li>"
                      )
                    ),
                    !0
                  );
                }
                l.append(
                  e(
                    '<li class="' +
                      r +
                      a +
                      '"><span>' +
                      s +
                      n.html() +
                      "</span></li>"
                  )
                );
              };
            c.length &&
              c.each(function() {
                if (e(this).is("option"))
                  o ? f(0, e(this), "multiple") : f(0, e(this));
                else if (e(this).is("optgroup")) {
                  var t = e(this).children("option");
                  l.append(
                    e(
                      '<li class="optgroup"><span>' +
                        e(this).attr("label") +
                        "</span></li>"
                    )
                  ),
                    t.each(function() {
                      f(0, e(this), "optgroup-option");
                    });
                }
              }),
              l.find("li:not(.optgroup)").each(function(r) {
                e(this).click(function(a) {
                  if (
                    !e(this).hasClass("disabled") &&
                    !e(this).hasClass("optgroup")
                  ) {
                    var s = !0;
                    o
                      ? (e('input[type="checkbox"]', this).prop(
                          "checked",
                          function(e, t) {
                            return !t;
                          }
                        ),
                        (s = n(u, r, i)),
                        g.trigger("focus"))
                      : (l.find("li").removeClass("active"),
                        e(this).toggleClass("active"),
                        g.val(e(this).text())),
                      m(l, e(this)),
                      i
                        .find("option")
                        .eq(r)
                        .prop("selected", s),
                      i.trigger("change"),
                      void 0 !== t && t();
                  }
                  a.stopPropagation();
                });
              }),
              i.wrap(s);
            var h = e('<span class="caret">&#9660;</span>'),
              v = p.replace(/"/g, "&quot;"),
              g = e(
                '<input type="text" class="select-dropdown" readonly="true" ' +
                  (i.is(":disabled") ? "disabled" : "") +
                  ' data-activates="select-options-' +
                  a +
                  '" value="' +
                  v +
                  '"/>'
              );
            i.before(g),
              g.before(h),
              g.after(l),
              i.is(":disabled") || g.dropdown({ hover: !1 }),
              i.attr("tabindex") &&
                e(g[0]).attr("tabindex", i.attr("tabindex")),
              i.addClass("initialized"),
              g.on({
                focus: function() {
                  if (
                    (e("ul.select-dropdown")
                      .not(l[0])
                      .is(":visible") &&
                      (e("input.select-dropdown").trigger("close"),
                      e(window).off("click.select")),
                    !l.is(":visible"))
                  ) {
                    e(this).trigger("open", ["focus"]);
                    var t = e(this).val();
                    o && t.indexOf(",") >= 0 && (t = t.split(",")[0]);
                    var n = l.find("li").filter(function() {
                      return (
                        e(this)
                          .text()
                          .toLowerCase() === t.toLowerCase()
                      );
                    })[0];
                    m(l, n, !0),
                      e(window)
                        .off("click.select")
                        .on("click.select", function() {
                          o && (d || g.trigger("close")),
                            e(window).off("click.select");
                        });
                  }
                },
                click: function(e) {
                  e.stopPropagation();
                }
              }),
              g.on("blur", function() {
                o || (e(this).trigger("close"), e(window).off("click.select")),
                  l.find("li.selected").removeClass("selected");
              }),
              l.hover(
                function() {
                  d = !0;
                },
                function() {
                  d = !1;
                }
              ),
              o &&
                i.find("option:selected:not(:disabled)").each(function() {
                  var e = this.index;
                  n(u, e, i),
                    l
                      .find("li:not(.optgroup)")
                      .eq(e)
                      .find(":checkbox")
                      .prop("checked", !0);
                });
            var m = function(t, n, i) {
                if (n) {
                  t.find("li.selected").removeClass("selected");
                  var r = e(n);
                  r.addClass("selected"), (o && !i) || l.scrollTo(r);
                }
              },
              y = [];
            g.on("keydown", function(t) {
              if (9 != t.which)
                if (40 != t.which || l.is(":visible")) {
                  if (13 != t.which || l.is(":visible")) {
                    t.preventDefault();
                    var n = String.fromCharCode(t.which).toLowerCase();
                    if (n && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
                      y.push(n);
                      var i = y.join(""),
                        r = l.find("li").filter(function() {
                          return (
                            0 ===
                            e(this)
                              .text()
                              .toLowerCase()
                              .indexOf(i)
                          );
                        })[0];
                      r && m(l, r);
                    }
                    if (13 == t.which) {
                      var a = l.find("li.selected:not(.disabled)")[0];
                      a && (e(a).trigger("click"), o || g.trigger("close"));
                    }
                    40 == t.which &&
                      ((r = l.find("li.selected").length
                        ? l.find("li.selected").next("li:not(.disabled)")[0]
                        : l.find("li:not(.disabled)")[0]),
                      m(l, r)),
                      27 == t.which && g.trigger("close"),
                      38 == t.which &&
                        (r = l
                          .find("li.selected")
                          .prev("li:not(.disabled)")[0]) &&
                        m(l, r),
                      setTimeout(function() {
                        y = [];
                      }, 1e3);
                  }
                } else g.trigger("open");
              else g.trigger("close");
            });
          }
        });
      });
  })(jQuery),
  (function(e) {
    var t = {
      init: function(t) {
        return (
          (t = e.extend(
            { indicators: !0, height: 400, transition: 500, interval: 6e3 },
            t
          )),
          this.each(function() {
            function n(e, t) {
              e.hasClass("center-align")
                ? e.velocity(
                    { opacity: 0, translateY: -100 },
                    { duration: t, queue: !1 }
                  )
                : e.hasClass("right-align")
                ? e.velocity(
                    { opacity: 0, translateX: 100 },
                    { duration: t, queue: !1 }
                  )
                : e.hasClass("left-align") &&
                  e.velocity(
                    { opacity: 0, translateX: -100 },
                    { duration: t, queue: !1 }
                  );
            }
            function i(e) {
              e >= c.length ? (e = 0) : e < 0 && (e = c.length - 1),
                (u = l.find(".active").index()) != e &&
                  ((o = c.eq(u)),
                  ($caption = o.find(".caption")),
                  o.removeClass("active"),
                  o.velocity(
                    { opacity: 0 },
                    {
                      duration: t.transition,
                      queue: !1,
                      easing: "easeOutQuad",
                      complete: function() {
                        c.not(".active").velocity(
                          { opacity: 0, translateX: 0, translateY: 0 },
                          { duration: 0, queue: !1 }
                        );
                      }
                    }
                  ),
                  n($caption, t.transition),
                  t.indicators && r.eq(u).removeClass("active"),
                  c
                    .eq(e)
                    .velocity(
                      { opacity: 1 },
                      {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                      }
                    ),
                  c
                    .eq(e)
                    .find(".caption")
                    .velocity(
                      { opacity: 1, translateX: 0, translateY: 0 },
                      {
                        duration: t.transition,
                        delay: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                      }
                    ),
                  c.eq(e).addClass("active"),
                  t.indicators && r.eq(e).addClass("active"));
            }
            var o,
              r,
              a,
              s = e(this),
              l = s.find("ul.slides").first(),
              c = l.find("> li"),
              u = l.find(".active").index();
            -1 != u && (o = c.eq(u)),
              s.hasClass("fullscreen") ||
                (s.height(t.indicators ? t.height + 40 : t.height),
                l.height(t.height)),
              c.find(".caption").each(function() {
                n(e(this), 0);
              }),
              c.find("img").each(function() {
                var t =
                  "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                e(this).attr("src") !== t &&
                  (e(this).css(
                    "background-image",
                    'url("' + e(this).attr("src") + '")'
                  ),
                  e(this).attr("src", t));
              }),
              t.indicators &&
                ((r = e('<ul class="indicators"></ul>')),
                c.each(function(n) {
                  var o = e('<li class="indicator-item"></li>');
                  o.click(function() {
                    i(
                      l
                        .parent()
                        .find(e(this))
                        .index()
                    ),
                      clearInterval(a),
                      (a = setInterval(function() {
                        (u = l.find(".active").index()),
                          c.length == u + 1 ? (u = 0) : (u += 1),
                          i(u);
                      }, t.transition + t.interval));
                  }),
                    r.append(o);
                }),
                s.append(r),
                (r = s.find("ul.indicators").find("li.indicator-item"))),
              o
                ? o.show()
                : (c
                    .first()
                    .addClass("active")
                    .velocity(
                      { opacity: 1 },
                      {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                      }
                    ),
                  (o = c.eq((u = 0))),
                  t.indicators && r.eq(u).addClass("active")),
              o.find("img").each(function() {
                o.find(".caption").velocity(
                  { opacity: 1, translateX: 0, translateY: 0 },
                  { duration: t.transition, queue: !1, easing: "easeOutQuad" }
                );
              }),
              (a = setInterval(function() {
                i((u = l.find(".active").index()) + 1);
              }, t.transition + t.interval));
            var d = !1,
              p = !1;
            s
              .hammer({ prevent_default: !1 })
              .on("pan", function(e) {
                if ("touch" === e.gesture.pointerType) {
                  clearInterval(a);
                  var t,
                    n = e.gesture.direction,
                    i = e.gesture.deltaX,
                    o = e.gesture.velocityX,
                    r = e.gesture.velocityY;
                  ($curr_slide = l.find(".active")),
                    Math.abs(o) > Math.abs(r) &&
                      $curr_slide.velocity(
                        { translateX: i },
                        { duration: 50, queue: !1, easing: "easeOutQuad" }
                      ),
                    4 === n && (i > s.innerWidth() / 2 || o < -0.65)
                      ? (p = !0)
                      : 2 === n &&
                        (i < (-1 * s.innerWidth()) / 2 || o > 0.65) &&
                        (d = !0),
                    d &&
                      (0 === (t = $curr_slide.next()).length && (t = c.first()),
                      t.velocity(
                        { opacity: 1 },
                        { duration: 300, queue: !1, easing: "easeOutQuad" }
                      )),
                    p &&
                      (0 === (t = $curr_slide.prev()).length && (t = c.last()),
                      t.velocity(
                        { opacity: 1 },
                        { duration: 300, queue: !1, easing: "easeOutQuad" }
                      ));
                }
              })
              .on("panend", function(e) {
                "touch" === e.gesture.pointerType &&
                  (($curr_slide = l.find(".active")),
                  (curr_index = l.find(".active").index()),
                  (!p && !d) || c.length <= 1
                    ? $curr_slide.velocity(
                        { translateX: 0 },
                        { duration: 300, queue: !1, easing: "easeOutQuad" }
                      )
                    : d
                    ? (i(curr_index + 1),
                      $curr_slide.velocity(
                        { translateX: -1 * s.innerWidth() },
                        {
                          duration: 300,
                          queue: !1,
                          easing: "easeOutQuad",
                          complete: function() {
                            $curr_slide.velocity(
                              { opacity: 0, translateX: 0 },
                              { duration: 0, queue: !1 }
                            );
                          }
                        }
                      ))
                    : p &&
                      (i(curr_index - 1),
                      $curr_slide.velocity(
                        { translateX: s.innerWidth() },
                        {
                          duration: 300,
                          queue: !1,
                          easing: "easeOutQuad",
                          complete: function() {
                            $curr_slide.velocity(
                              { opacity: 0, translateX: 0 },
                              { duration: 0, queue: !1 }
                            );
                          }
                        }
                      )),
                  (d = !1),
                  (p = !1),
                  clearInterval(a),
                  (a = setInterval(function() {
                    (u = l.find(".active").index()),
                      c.length == u + 1 ? (u = 0) : (u += 1),
                      i(u);
                  }, t.transition + t.interval)));
              }),
              s.on("sliderPause", function() {
                clearInterval(a);
              }),
              s.on("sliderStart", function() {
                clearInterval(a),
                  (a = setInterval(function() {
                    (u = l.find(".active").index()),
                      c.length == u + 1 ? (u = 0) : (u += 1),
                      i(u);
                  }, t.transition + t.interval));
              }),
              s.on("sliderNext", function() {
                i((u = l.find(".active").index()) + 1);
              }),
              s.on("sliderPrev", function() {
                i((u = l.find(".active").index()) - 1);
              });
          })
        );
      },
      pause: function() {
        e(this).trigger("sliderPause");
      },
      start: function() {
        e(this).trigger("sliderStart");
      },
      next: function() {
        e(this).trigger("sliderNext");
      },
      prev: function() {
        e(this).trigger("sliderPrev");
      }
    };
    e.fn.slider = function(n) {
      return t[n]
        ? t[n].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof n && n
        ? void e.error("Method " + n + " does not exist on jQuery.tooltip")
        : t.init.apply(this, arguments);
    };
  })(jQuery),
  (function(e) {
    e(document).ready(function() {
      e(document).on("click.card", ".card", function(t) {
        if (e(this).find("> .card-reveal").length) {
          var n = e(t.target).closest(".card");
          void 0 === n.data("initialOverflow") &&
            n.data(
              "initialOverflow",
              void 0 === n.css("overflow") ? "" : n.css("overflow")
            ),
            e(t.target).is(e(".card-reveal .card-title")) ||
            e(t.target).is(e(".card-reveal .card-title i"))
              ? e(this)
                  .find(".card-reveal")
                  .velocity(
                    { translateY: 0 },
                    {
                      duration: 225,
                      queue: !1,
                      easing: "easeInOutQuad",
                      complete: function() {
                        e(this).css({ display: "none" }),
                          n.css("overflow", n.data("initialOverflow"));
                      }
                    }
                  )
              : (e(t.target).is(e(".card .activator")) ||
                  e(t.target).is(e(".card .activator i"))) &&
                (n.css("overflow", "hidden"),
                e(this)
                  .find(".card-reveal")
                  .css({ display: "block" })
                  .velocity("stop", !1)
                  .velocity(
                    { translateY: "-100%" },
                    { duration: 300, queue: !1, easing: "easeInOutQuad" }
                  ));
        }
      });
    });
  })(jQuery),
  (function(e) {
    var t = {
      data: [],
      placeholder: "",
      secondaryPlaceholder: "",
      autocompleteOptions: {}
    };
    e(document).ready(function() {
      e(document).on("click", ".chip .close", function(t) {
        e(this)
          .closest(".chips")
          .attr("data-initialized") ||
          e(this)
            .closest(".chip")
            .remove();
      });
    }),
      (e.fn.material_chip = function(n) {
        var i = this;
        if (
          ((this.$el = e(this)),
          (this.$document = e(document)),
          (this.SELS = {
            CHIPS: ".chips",
            CHIP: ".chip",
            INPUT: "input",
            DELETE: ".material-icons",
            SELECTED_CHIP: ".selected"
          }),
          "data" === n)
        )
          return this.$el.data("chips");
        var o = e.extend({}, t, n);
        (i.hasAutocomplete = !e.isEmptyObject(o.autocompleteOptions.data)),
          (this.init = function() {
            var t = 0;
            i.$el.each(function() {
              var n = e(this),
                r = Materialize.guid();
              (i.chipId = r),
                (o.data && o.data instanceof Array) || (o.data = []),
                n.data("chips", o.data),
                n.attr("data-index", t),
                n.attr("data-initialized", !0),
                n.hasClass(i.SELS.CHIPS) || n.addClass("chips"),
                i.chips(n, r),
                t++;
            });
          }),
          (this.handleEvents = function() {
            var t = i.SELS;
            i.$document
              .off("click.chips-focus", t.CHIPS)
              .on("click.chips-focus", t.CHIPS, function(n) {
                e(n.target)
                  .find(t.INPUT)
                  .focus();
              }),
              i.$document
                .off("click.chips-select", t.CHIP)
                .on("click.chips-select", t.CHIP, function(n) {
                  var o = e(n.target);
                  if (o.length) {
                    var r = o.hasClass("selected"),
                      a = o.closest(t.CHIPS);
                    e(t.CHIP).removeClass("selected"),
                      r || i.selectChip(o.index(), a);
                  }
                }),
              i.$document.off("keydown.chips").on("keydown.chips", function(n) {
                if (!e(n.target).is("input, textarea")) {
                  var o,
                    r = i.$document.find(t.CHIP + t.SELECTED_CHIP),
                    a = r.closest(t.CHIPS),
                    s = r.siblings(t.CHIP).length;
                  if (r.length)
                    if (8 === n.which || 46 === n.which) {
                      n.preventDefault(), (o = r.index()), i.deleteChip(o, a);
                      var l = null;
                      o + 1 < s
                        ? (l = o)
                        : (o !== s && o + 1 !== s) || (l = s - 1),
                        l < 0 && (l = null),
                        null !== l && i.selectChip(l, a),
                        s || a.find("input").focus();
                    } else if (37 === n.which) {
                      if ((o = r.index() - 1) < 0) return;
                      e(t.CHIP).removeClass("selected"), i.selectChip(o, a);
                    } else if (39 === n.which) {
                      if (
                        ((o = r.index() + 1),
                        e(t.CHIP).removeClass("selected"),
                        o > s)
                      )
                        return void a.find("input").focus();
                      i.selectChip(o, a);
                    }
                }
              }),
              i.$document
                .off("focusin.chips", t.CHIPS + " " + t.INPUT)
                .on("focusin.chips", t.CHIPS + " " + t.INPUT, function(n) {
                  var i = e(n.target).closest(t.CHIPS);
                  i.addClass("focus"),
                    i.siblings("label, .prefix").addClass("active"),
                    e(t.CHIP).removeClass("selected");
                }),
              i.$document
                .off("focusout.chips", t.CHIPS + " " + t.INPUT)
                .on("focusout.chips", t.CHIPS + " " + t.INPUT, function(n) {
                  var i = e(n.target).closest(t.CHIPS);
                  i.removeClass("focus"),
                    (void 0 !== i.data("chips") && i.data("chips").length) ||
                      i.siblings("label").removeClass("active"),
                    i.siblings(".prefix").removeClass("active");
                }),
              i.$document
                .off("keydown.chips-add", t.CHIPS + " " + t.INPUT)
                .on("keydown.chips-add", t.CHIPS + " " + t.INPUT, function(n) {
                  var o = e(n.target),
                    r = o.closest(t.CHIPS),
                    a = r.children(t.CHIP).length;
                  if (13 === n.which) {
                    if (
                      i.hasAutocomplete &&
                      r.find(".autocomplete-content.dropdown-content").length &&
                      r
                        .find(".autocomplete-content.dropdown-content")
                        .children().length
                    )
                      return;
                    return (
                      n.preventDefault(),
                      i.addChip({ tag: o.val() }, r),
                      void o.val("")
                    );
                  }
                  if (
                    (8 === n.keyCode || 37 === n.keyCode) &&
                    "" === o.val() &&
                    a
                  )
                    return (
                      n.preventDefault(), i.selectChip(a - 1, r), void o.blur()
                    );
                }),
              i.$document
                .off("click.chips-delete", t.CHIPS + " " + t.DELETE)
                .on("click.chips-delete", t.CHIPS + " " + t.DELETE, function(
                  n
                ) {
                  var o = e(n.target),
                    r = o.closest(t.CHIPS),
                    a = o.closest(t.CHIP);
                  n.stopPropagation(),
                    i.deleteChip(a.index(), r),
                    r.find("input").focus();
                });
          }),
          (this.chips = function(t, n) {
            t.empty(),
              t.data("chips").forEach(function(e) {
                t.append(i.renderChip(e));
              }),
              t.append(
                e('<input id="' + n + '" class="input" placeholder="">')
              ),
              i.setPlaceholder(t);
            var r = t.next("label");
            r.length &&
              (r.attr("for", n),
              void 0 !== t.data("chips") &&
                t.data("chips").length &&
                r.addClass("active"));
            var a = e("#" + n);
            i.hasAutocomplete &&
              ((o.autocompleteOptions.onAutocomplete = function(e) {
                i.addChip({ tag: e }, t), a.val(""), a.focus();
              }),
              a.autocomplete(o.autocompleteOptions));
          }),
          (this.renderChip = function(t) {
            if (t.tag) {
              var n = e('<div class="chip"></div>');
              return (
                n.text(t.tag),
                t.image && n.prepend(e("<img />").attr("src", t.image)),
                n.append(e('<i class="material-icons close">close</i>')),
                n
              );
            }
          }),
          (this.setPlaceholder = function(e) {
            void 0 !== e.data("chips") &&
            !e.data("chips").length &&
            o.placeholder
              ? e.find("input").prop("placeholder", o.placeholder)
              : (void 0 === e.data("chips") || e.data("chips").length) &&
                o.secondaryPlaceholder &&
                e.find("input").prop("placeholder", o.secondaryPlaceholder);
          }),
          (this.isValid = function(e, t) {
            for (var n = e.data("chips"), i = !1, o = 0; o < n.length; o++)
              if (n[o].tag === t.tag) return void (i = !0);
            return "" !== t.tag && !i;
          }),
          (this.addChip = function(e, t) {
            if (i.isValid(t, e)) {
              for (
                var n = i.renderChip(e), o = [], r = t.data("chips"), a = 0;
                a < r.length;
                a++
              )
                o.push(r[a]);
              o.push(e),
                t.data("chips", o),
                n.insertBefore(t.find("input")),
                t.trigger("chip.add", e),
                i.setPlaceholder(t);
            }
          }),
          (this.deleteChip = function(e, t) {
            var n = t.data("chips")[e];
            t.find(".chip")
              .eq(e)
              .remove();
            for (var o = [], r = t.data("chips"), a = 0; a < r.length; a++)
              a !== e && o.push(r[a]);
            t.data("chips", o),
              t.trigger("chip.delete", n),
              i.setPlaceholder(t);
          }),
          (this.selectChip = function(e, t) {
            var n = t.find(".chip").eq(e);
            n &&
              !1 === n.hasClass("selected") &&
              (n.addClass("selected"),
              t.trigger("chip.select", t.data("chips")[e]));
          }),
          (this.getChipsElement = function(e, t) {
            return t.eq(e);
          }),
          this.init(),
          this.handleEvents();
      });
  })(jQuery),
  (function(e) {
    e.fn.pushpin = function(t) {
      return "remove" === t
        ? (this.each(function() {
            (id = e(this).data("pushpin-id")) &&
              (e(window).off("scroll." + id),
              e(this)
                .removeData("pushpin-id")
                .removeClass("pin-top pinned pin-bottom")
                .removeAttr("style"));
          }),
          !1)
        : ((t = e.extend({ top: 0, bottom: 1 / 0, offset: 0 }, t)),
          ($index = 0),
          this.each(function() {
            function n(e) {
              e.removeClass("pin-top"),
                e.removeClass("pinned"),
                e.removeClass("pin-bottom");
            }
            function i(i, o) {
              i.each(function() {
                t.top <= o &&
                  t.bottom >= o &&
                  !e(this).hasClass("pinned") &&
                  (n(e(this)),
                  e(this).css("top", t.offset),
                  e(this).addClass("pinned")),
                  o < t.top &&
                    !e(this).hasClass("pin-top") &&
                    (n(e(this)),
                    e(this).css("top", 0),
                    e(this).addClass("pin-top")),
                  o > t.bottom &&
                    !e(this).hasClass("pin-bottom") &&
                    (n(e(this)),
                    e(this).addClass("pin-bottom"),
                    e(this).css("top", t.bottom - a));
              });
            }
            var o = Materialize.guid(),
              r = e(this),
              a = e(this).offset().top;
            e(this).data("pushpin-id", o),
              i(r, e(window).scrollTop()),
              e(window).on("scroll." + o, function() {
                var n = e(window).scrollTop() + t.offset;
                i(r, n);
              });
          }));
    };
  })(jQuery),
  (function(e) {
    e(document).ready(function() {
      (e.fn.reverse = [].reverse),
        e(document).on(
          "mouseenter.fixedActionBtn",
          ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",
          function(n) {
            var i = e(this);
            t(i);
          }
        ),
        e(document).on(
          "mouseleave.fixedActionBtn",
          ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)",
          function(t) {
            var i = e(this);
            n(i);
          }
        ),
        e(document).on(
          "click.fabClickToggle",
          ".fixed-action-btn.click-to-toggle > a",
          function(i) {
            var o = e(this).parent();
            o.hasClass("active") ? n(o) : t(o);
          }
        ),
        e(document).on(
          "click.fabToolbar",
          ".fixed-action-btn.toolbar > a",
          function(t) {
            var n = e(this).parent();
            i(n);
          }
        );
    }),
      e.fn.extend({
        openFAB: function() {
          t(e(this));
        },
        closeFAB: function() {
          n(e(this));
        },
        openToolbar: function() {
          i(e(this));
        },
        closeToolbar: function() {
          o(e(this));
        }
      });
    var t = function(t) {
        var n = t;
        if (!1 === n.hasClass("active")) {
          var i, o;
          !0 === n.hasClass("horizontal") ? (o = 40) : (i = 40),
            n.addClass("active"),
            n
              .find("ul .btn-floating")
              .velocity(
                {
                  scaleY: ".4",
                  scaleX: ".4",
                  translateY: i + "px",
                  translateX: o + "px"
                },
                { duration: 0 }
              );
          var r = 0;
          n.find("ul .btn-floating")
            .reverse()
            .each(function() {
              e(this).velocity(
                {
                  opacity: "1",
                  scaleX: "1",
                  scaleY: "1",
                  translateY: "0",
                  translateX: "0"
                },
                { duration: 80, delay: r }
              ),
                (r += 40);
            });
        }
      },
      n = function(e) {
        var t,
          n,
          i = e;
        !0 === i.hasClass("horizontal") ? (n = 40) : (t = 40),
          i.removeClass("active"),
          i.find("ul .btn-floating").velocity("stop", !0),
          i
            .find("ul .btn-floating")
            .velocity(
              {
                opacity: "0",
                scaleX: ".4",
                scaleY: ".4",
                translateY: t + "px",
                translateX: n + "px"
              },
              { duration: 80 }
            );
      },
      i = function(t) {
        if ("true" !== t.attr("data-open")) {
          var n,
            i,
            r,
            a = window.innerWidth,
            s = window.innerHeight,
            l = t[0].getBoundingClientRect(),
            c = t.find("> a").first(),
            u = t.find("> ul").first(),
            d = e('<div class="fab-backdrop"></div>'),
            p = c.css("background-color");
          c.append(d),
            (n = l.left - a / 2 + l.width / 2),
            (i = s - l.bottom),
            (r = a / d.width()),
            t.attr("data-origin-bottom", l.bottom),
            t.attr("data-origin-left", l.left),
            t.attr("data-origin-width", l.width),
            t.addClass("active"),
            t.attr("data-open", !0),
            t.css({
              "text-align": "center",
              width: "100%",
              bottom: 0,
              left: 0,
              transform: "translateX(" + n + "px)",
              transition: "none"
            }),
            c.css({
              transform: "translateY(" + -i + "px)",
              transition: "none"
            }),
            d.css({ "background-color": p }),
            setTimeout(function() {
              t.css({
                transform: "",
                transition:
                  "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
              }),
                c.css({
                  overflow: "visible",
                  transform: "",
                  transition: "transform .2s"
                }),
                setTimeout(function() {
                  t.css({ overflow: "hidden", "background-color": p }),
                    d.css({
                      transform: "scale(" + r + ")",
                      transition:
                        "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                    }),
                    u.find("> li > a").css({ opacity: 1 }),
                    e(window).on("scroll.fabToolbarClose", function() {
                      o(t),
                        e(window).off("scroll.fabToolbarClose"),
                        e(document).off("click.fabToolbarClose");
                    }),
                    e(document).on("click.fabToolbarClose", function(n) {
                      e(n.target).closest(u).length ||
                        (o(t),
                        e(window).off("scroll.fabToolbarClose"),
                        e(document).off("click.fabToolbarClose"));
                    });
                }, 100);
            }, 0);
        }
      },
      o = function(e) {
        if ("true" === e.attr("data-open")) {
          var t,
            n,
            i = window.innerWidth,
            o = window.innerHeight,
            r = e.attr("data-origin-width"),
            a = e.attr("data-origin-bottom"),
            s = e.attr("data-origin-left"),
            l = e.find("> .btn-floating").first(),
            c = e.find("> ul").first(),
            u = e.find(".fab-backdrop"),
            d = l.css("background-color");
          (t = s - i / 2 + r / 2),
            (n = o - a),
            u.width(),
            e.removeClass("active"),
            e.attr("data-open", !1),
            e.css({ "background-color": "transparent", transition: "none" }),
            l.css({ transition: "none" }),
            u.css({ transform: "scale(0)", "background-color": d }),
            c.find("> li > a").css({ opacity: "" }),
            setTimeout(function() {
              u.remove(),
                e.css({
                  "text-align": "",
                  width: "",
                  bottom: "",
                  left: "",
                  overflow: "",
                  "background-color": "",
                  transform: "translate3d(" + -t + "px,0,0)"
                }),
                l.css({
                  overflow: "",
                  transform: "translate3d(0," + n + "px,0)"
                }),
                setTimeout(function() {
                  e.css({
                    transform: "translate3d(0,0,0)",
                    transition: "transform .2s"
                  }),
                    l.css({
                      transform: "translate3d(0,0,0)",
                      transition:
                        "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                    });
                }, 20);
            }, 200);
        }
      };
  })(jQuery),
  (function(e) {
    (Materialize.fadeInImage = function(t) {
      var n;
      if ("string" == typeof t) n = e(t);
      else {
        if ("object" != typeof t) return;
        n = t;
      }
      n.css({ opacity: 0 }),
        e(n).velocity(
          { opacity: 1 },
          { duration: 650, queue: !1, easing: "easeOutSine" }
        ),
        e(n).velocity(
          { opacity: 1 },
          {
            duration: 1300,
            queue: !1,
            easing: "swing",
            step: function(t, n) {
              n.start = 100;
              var i = t / 100,
                o = 150 - (100 - t) / 1.75;
              o < 100 && (o = 100),
                t >= 0 &&
                  e(this).css({
                    "-webkit-filter":
                      "grayscale(" + i + ")brightness(" + o + "%)",
                    filter: "grayscale(" + i + ")brightness(" + o + "%)"
                  });
            }
          }
        );
    }),
      (Materialize.showStaggeredList = function(t) {
        var n;
        if ("string" == typeof t) n = e(t);
        else {
          if ("object" != typeof t) return;
          n = t;
        }
        var i = 0;
        n.find("li").velocity({ translateX: "-100px" }, { duration: 0 }),
          n.find("li").each(function() {
            e(this).velocity(
              { opacity: "1", translateX: "0" },
              { duration: 800, delay: i, easing: [60, 10] }
            ),
              (i += 120);
          });
      }),
      e(document).ready(function() {
        var t = !1,
          n = !1;
        e(".dismissable").each(function() {
          e(this)
            .hammer({ prevent_default: !1 })
            .on("pan", function(i) {
              if ("touch" === i.gesture.pointerType) {
                var o = e(this),
                  r = i.gesture.direction,
                  a = i.gesture.deltaX,
                  s = i.gesture.velocityX;
                o.velocity(
                  { translateX: a },
                  { duration: 50, queue: !1, easing: "easeOutQuad" }
                ),
                  4 === r && (a > o.innerWidth() / 2 || s < -0.75) && (t = !0),
                  2 === r &&
                    (a < (-1 * o.innerWidth()) / 2 || s > 0.75) &&
                    (n = !0);
              }
            })
            .on("panend", function(i) {
              if (
                (Math.abs(i.gesture.deltaX) < e(this).innerWidth() / 2 &&
                  ((n = !1), (t = !1)),
                "touch" === i.gesture.pointerType)
              ) {
                var o,
                  r = e(this);
                t || n
                  ? ((o = t ? r.innerWidth() : -1 * r.innerWidth()),
                    r.velocity(
                      { translateX: o },
                      {
                        duration: 100,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                          r.css("border", "none"),
                            r.velocity(
                              { height: 0, padding: 0 },
                              {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                  r.remove();
                                }
                              }
                            );
                        }
                      }
                    ))
                  : r.velocity(
                      { translateX: 0 },
                      { duration: 100, queue: !1, easing: "easeOutQuad" }
                    ),
                  (t = !1),
                  (n = !1);
              }
            });
        });
      });
  })(jQuery),
  (function(e) {
    var t = !1;
    Materialize.scrollFire = function(e) {
      var n = Materialize.throttle(function() {
        !(function() {
          for (
            var t = window.pageYOffset + window.innerHeight, n = 0;
            n < e.length;
            n++
          ) {
            var i = e[n],
              o = i.offset,
              r = i.callback,
              a = document.querySelector(i.selector);
            null !== a &&
              t > a.getBoundingClientRect().top + window.pageYOffset + o &&
              !0 !== i.done &&
              ("function" == typeof r
                ? r.call(this, a)
                : "string" == typeof r && new Function(r)(a),
              (i.done = !0));
          }
        })();
      }, e.throttle || 100);
      t ||
        (window.addEventListener("scroll", n),
        window.addEventListener("resize", n),
        (t = !0)),
        setTimeout(n, 0);
    };
  })(jQuery),
  (Materialize.Picker = (function(e) {
    function t(o, a, c, u) {
      function d() {
        return t._.node(
          "div",
          t._.node(
            "div",
            t._.node(
              "div",
              t._.node("div", w.component.nodes(v.open), m.box),
              m.wrap
            ),
            m.frame
          ),
          m.holder
        );
      }
      function p(e) {
        var t = e.keyCode,
          n = /^(8|46)$/.test(t);
        if (27 == t) return w.close(), !1;
        (32 == t || n || (!v.open && w.component.key[t])) &&
          (e.preventDefault(),
          e.stopPropagation(),
          n ? w.clear().close() : w.open());
      }
      function f(e) {
        e.stopPropagation(),
          "focus" == e.type && w.$root.addClass(m.focused),
          w.open();
      }
      if (!o) return t;
      var h = !1,
        v = { id: o.id || "P" + Math.abs(~~(Math.random() * new Date())) },
        g = c ? e.extend(!0, {}, c.defaults, u) : u || {},
        m = e.extend({}, t.klasses(), g.klass),
        y = e(o),
        b = function() {
          return this.start();
        },
        w = (b.prototype = {
          constructor: b,
          $node: y,
          start: function() {
            return v && v.start
              ? w
              : ((v.methods = {}),
                (v.start = !0),
                (v.open = !1),
                (v.type = o.type),
                (o.autofocus = o == r()),
                (o.readOnly = !g.editable),
                (o.id = o.id || v.id),
                "text" != o.type && (o.type = "text"),
                (w.component = new c(w, g)),
                (w.$root = e(
                  t._.node(
                    "div",
                    d(),
                    m.picker,
                    'id="' + o.id + '_root" tabindex="0"'
                  )
                )),
                w.$root
                  .on({
                    keydown: p,
                    focusin: function(e) {
                      w.$root.removeClass(m.focused), e.stopPropagation();
                    },
                    "mousedown click": function(t) {
                      var n = t.target;
                      n != w.$root.children()[0] &&
                        (t.stopPropagation(),
                        "mousedown" != t.type ||
                          e(n).is("input, select, textarea, button, option") ||
                          (t.preventDefault(), w.$root.eq(0).focus()));
                    }
                  })
                  .on({
                    focus: function() {
                      y.addClass(m.target);
                    },
                    blur: function() {
                      y.removeClass(m.target);
                    }
                  })
                  .on("focus.toOpen", f)
                  .on(
                    "click",
                    "[data-pick], [data-nav], [data-clear], [data-close]",
                    function() {
                      var t = e(this),
                        n = t.data(),
                        i = t.hasClass(m.navDisabled) || t.hasClass(m.disabled),
                        o = r();
                      (o = o && (o.type || o.href) && o),
                        (i || (o && !e.contains(w.$root[0], o))) &&
                          w.$root.eq(0).focus(),
                        !i && n.nav
                          ? w.set("highlight", w.component.item.highlight, {
                              nav: n.nav
                            })
                          : !i && "pick" in n
                          ? (w.set("select", n.pick),
                            g.closeOnSelect && w.close(!0))
                          : n.clear
                          ? (w.clear(), g.closeOnSelect && w.close(!0))
                          : n.close && w.close(!0);
                    }
                  ),
                i(w.$root[0], "hidden", !0),
                g.formatSubmit &&
                  (function() {
                    var t;
                    !0 === g.hiddenName
                      ? ((t = o.name), (o.name = ""))
                      : (t =
                          (t = [
                            "string" == typeof g.hiddenPrefix
                              ? g.hiddenPrefix
                              : "",
                            "string" == typeof g.hiddenSuffix
                              ? g.hiddenSuffix
                              : "_submit"
                          ])[0] +
                          o.name +
                          t[1]),
                      (w._hidden = e(
                        '<input type=hidden name="' +
                          t +
                          '"' +
                          (y.data("value") || o.value
                            ? ' value="' + w.get("select", g.formatSubmit) + '"'
                            : "") +
                          ">"
                      )[0]),
                      y.on("change." + v.id, function() {
                        w._hidden.value = o.value
                          ? w.get("select", g.formatSubmit)
                          : "";
                      }),
                      g.container
                        ? e(g.container).append(w._hidden)
                        : y.before(w._hidden);
                  })(),
                y
                  .data(a, w)
                  .addClass(m.input)
                  .attr("tabindex", -1)
                  .val(y.data("value") ? w.get("select", g.format) : o.value),
                g.editable ||
                  y
                    .on("focus." + v.id + " click." + v.id, function(e) {
                      e.preventDefault(), w.$root.eq(0).focus();
                    })
                    .on("keydown." + v.id, p),
                i(o, {
                  haspopup: !0,
                  expanded: !1,
                  readonly: !1,
                  owns: o.id + "_root"
                }),
                g.container
                  ? e(g.container).append(w.$root)
                  : y.before(w.$root),
                w
                  .on({
                    start: w.component.onStart,
                    render: w.component.onRender,
                    stop: w.component.onStop,
                    open: w.component.onOpen,
                    close: w.component.onClose,
                    set: w.component.onSet
                  })
                  .on({
                    start: g.onStart,
                    render: g.onRender,
                    stop: g.onStop,
                    open: g.onOpen,
                    close: g.onClose,
                    set: g.onSet
                  }),
                (h = (function(e) {
                  var t;
                  return (
                    e.currentStyle
                      ? (t = e.currentStyle.position)
                      : window.getComputedStyle &&
                        (t = getComputedStyle(e).position),
                    "fixed" == t
                  );
                })(w.$root.children()[0])),
                o.autofocus && w.open(),
                w.trigger("start").trigger("render"));
          },
          render: function(e) {
            return (
              e
                ? w.$root.html(d())
                : w.$root.find("." + m.box).html(w.component.nodes(v.open)),
              w.trigger("render")
            );
          },
          stop: function() {
            return v.start
              ? (w.close(),
                w._hidden && w._hidden.parentNode.removeChild(w._hidden),
                w.$root.remove(),
                y.removeClass(m.input).removeData(a),
                setTimeout(function() {
                  y.off("." + v.id);
                }, 0),
                (o.type = v.type),
                (o.readOnly = !1),
                w.trigger("stop"),
                (v.methods = {}),
                (v.start = !1),
                w)
              : w;
          },
          open: function(r) {
            return v.open
              ? w
              : (y.addClass(m.active),
                i(o, "expanded", !0),
                setTimeout(function() {
                  w.$root.addClass(m.opened), i(w.$root[0], "hidden", !1);
                }, 0),
                !1 !== r &&
                  ((v.open = !0),
                  h &&
                    l
                      .css("overflow", "hidden")
                      .css("padding-right", "+=" + n()),
                  w.$root.eq(0).focus(),
                  s
                    .on("click." + v.id + " focusin." + v.id, function(e) {
                      var t = e.target;
                      t != o &&
                        t != document &&
                        3 != e.which &&
                        w.close(t === w.$root.children()[0]);
                    })
                    .on("keydown." + v.id, function(n) {
                      var i = n.keyCode,
                        o = w.component.key[i],
                        r = n.target;
                      27 == i
                        ? w.close(!0)
                        : r != w.$root[0] || (!o && 13 != i)
                        ? e.contains(w.$root[0], r) &&
                          13 == i &&
                          (n.preventDefault(), r.click())
                        : (n.preventDefault(),
                          o
                            ? t._.trigger(w.component.key.go, w, [
                                t._.trigger(o)
                              ])
                            : w.$root
                                .find("." + m.highlighted)
                                .hasClass(m.disabled) ||
                              (w.set("select", w.component.item.highlight),
                              g.closeOnSelect && w.close(!0)));
                    })),
                w.trigger("open"));
          },
          close: function(e) {
            return (
              e &&
                (w.$root
                  .off("focus.toOpen")
                  .eq(0)
                  .focus(),
                setTimeout(function() {
                  w.$root.on("focus.toOpen", f);
                }, 0)),
              y.removeClass(m.active),
              i(o, "expanded", !1),
              setTimeout(function() {
                w.$root.removeClass(m.opened + " " + m.focused),
                  i(w.$root[0], "hidden", !0);
              }, 0),
              v.open
                ? ((v.open = !1),
                  h && l.css("overflow", "").css("padding-right", "-=" + n()),
                  s.off("." + v.id),
                  w.trigger("close"))
                : w
            );
          },
          clear: function(e) {
            return w.set("clear", null, e);
          },
          set: function(t, n, i) {
            var o,
              r,
              a = e.isPlainObject(t),
              s = a ? t : {};
            if (((i = a && e.isPlainObject(n) ? n : i || {}), t)) {
              for (o in (a || (s[t] = n), s))
                (r = s[o]),
                  o in w.component.item &&
                    (void 0 === r && (r = null), w.component.set(o, r, i)),
                  ("select" != o && "clear" != o) ||
                    y
                      .val("clear" == o ? "" : w.get(o, g.format))
                      .trigger("change");
              w.render();
            }
            return i.muted ? w : w.trigger("set", s);
          },
          get: function(e, n) {
            if (null != v[(e = e || "value")]) return v[e];
            if ("valueSubmit" == e) {
              if (w._hidden) return w._hidden.value;
              e = "value";
            }
            if ("value" == e) return o.value;
            if (e in w.component.item) {
              if ("string" == typeof n) {
                var i = w.component.get(e);
                return i
                  ? t._.trigger(w.component.formats.toString, w.component, [
                      n,
                      i
                    ])
                  : "";
              }
              return w.component.get(e);
            }
          },
          on: function(t, n, i) {
            var o,
              r,
              a = e.isPlainObject(t),
              s = a ? t : {};
            if (t)
              for (o in (a || (s[t] = n), s))
                (r = s[o]),
                  i && (o = "_" + o),
                  (v.methods[o] = v.methods[o] || []),
                  v.methods[o].push(r);
            return w;
          },
          off: function() {
            var e,
              t,
              n = arguments;
            for (e = 0, namesCount = n.length; e < namesCount; e += 1)
              (t = n[e]) in v.methods && delete v.methods[t];
            return w;
          },
          trigger: function(e, n) {
            var i = function(e) {
              var i = v.methods[e];
              i &&
                i.map(function(e) {
                  t._.trigger(e, w, [n]);
                });
            };
            return i("_" + e), i(e), w;
          }
        });
      return new b();
    }
    function n() {
      if (l.height() <= a.height()) return 0;
      var t = e('<div style="visibility:hidden;width:100px" />').appendTo(
          "body"
        ),
        n = t[0].offsetWidth;
      t.css("overflow", "scroll");
      var i = e('<div style="width:100%" />').appendTo(t)[0].offsetWidth;
      return t.remove(), n - i;
    }
    function i(t, n, i) {
      if (e.isPlainObject(n)) for (var r in n) o(t, r, n[r]);
      else o(t, n, i);
    }
    function o(e, t, n) {
      e.setAttribute(("role" == t ? "" : "aria-") + t, n);
    }
    function r() {
      try {
        return document.activeElement;
      } catch (e) {}
    }
    var a = e(window),
      s = e(document),
      l = e(document.documentElement);
    return (
      (t.klasses = function(e) {
        return {
          picker: (e = e || "picker"),
          opened: e + "--opened",
          focused: e + "--focused",
          input: e + "__input",
          active: e + "__input--active",
          target: e + "__input--target",
          holder: e + "__holder",
          frame: e + "__frame",
          wrap: e + "__wrap",
          box: e + "__box"
        };
      }),
      (t._ = {
        group: function(e) {
          for (
            var n, i = "", o = t._.trigger(e.min, e);
            o <= t._.trigger(e.max, e, [o]);
            o += e.i
          )
            (n = t._.trigger(e.item, e, [o])),
              (i += t._.node(e.node, n[0], n[1], n[2]));
          return i;
        },
        node: function(t, n, i, o) {
          return n
            ? "<" +
                t +
                (i = i ? ' class="' + i + '"' : "") +
                (o = o ? " " + o : "") +
                ">" +
                (n = e.isArray(n) ? n.join("") : n) +
                "</" +
                t +
                ">"
            : "";
        },
        lead: function(e) {
          return (e < 10 ? "0" : "") + e;
        },
        trigger: function(e, t, n) {
          return "function" == typeof e ? e.apply(t, n || []) : e;
        },
        digits: function(e) {
          return /\d/.test(e[1]) ? 2 : 1;
        },
        isDate: function(e) {
          return (
            {}.toString.call(e).indexOf("Date") > -1 &&
            this.isInteger(e.getDate())
          );
        },
        isInteger: function(e) {
          return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0;
        },
        ariaAttr: function(t, n) {
          for (var i in (e.isPlainObject(t) || (t = { attribute: n }),
          (n = ""),
          t))
            n +=
              null == t[i]
                ? ""
                : ("role" == i ? "" : "aria-") + i + '="' + t[i] + '"';
          return n;
        }
      }),
      (t.extend = function(n, i) {
        (e.fn[n] = function(o, r) {
          var a = this.data(n);
          return "picker" == o
            ? a
            : a && "string" == typeof o
            ? t._.trigger(a[o], a, [r])
            : this.each(function() {
                e(this).data(n) || new t(this, n, i, o);
              });
        }),
          (e.fn[n].defaults = i.defaults);
      }),
      t
    );
  })(jQuery)),
  (function(e, t) {
    function n(e, t) {
      var n = this,
        i = e.$node[0],
        o = i.value,
        r = e.$node.data("value"),
        a = r || o,
        s = r ? t.formatSubmit : t.format,
        l = function() {
          return i.currentStyle
            ? "rtl" == i.currentStyle.direction
            : "rtl" == getComputedStyle(e.$root[0]).direction;
        };
      (n.settings = t),
        (n.$node = e.$node),
        (n.queue = {
          min: "measure create",
          max: "measure create",
          now: "now create",
          select: "parse create validate",
          highlight: "parse navigate create validate",
          view: "parse create validate viewset",
          disable: "deactivate",
          enable: "activate"
        }),
        (n.item = {}),
        (n.item.clear = null),
        (n.item.disable = (t.disable || []).slice(0)),
        (n.item.enable = -(function(e) {
          return !0 === e[0] ? e.shift() : -1;
        })(n.item.disable)),
        n
          .set("min", t.min)
          .set("max", t.max)
          .set("now"),
        a
          ? n.set("select", a, { format: s })
          : n.set("select", null).set("highlight", n.item.now),
        (n.key = {
          40: 7,
          38: -7,
          39: function() {
            return l() ? -1 : 1;
          },
          37: function() {
            return l() ? 1 : -1;
          },
          go: function(e) {
            var t = n.item.highlight,
              i = new Date(t.year, t.month, t.date + e);
            n.set("highlight", i, { interval: e }), this.render();
          }
        }),
        e
          .on(
            "render",
            function() {
              e.$root.find("." + t.klass.selectMonth).on("change", function() {
                var n = this.value;
                n &&
                  (e.set("highlight", [
                    e.get("view").year,
                    n,
                    e.get("highlight").date
                  ]),
                  e.$root.find("." + t.klass.selectMonth).trigger("focus"));
              }),
                e.$root.find("." + t.klass.selectYear).on("change", function() {
                  var n = this.value;
                  n &&
                    (e.set("highlight", [
                      n,
                      e.get("view").month,
                      e.get("highlight").date
                    ]),
                    e.$root.find("." + t.klass.selectYear).trigger("focus"));
                });
            },
            1
          )
          .on(
            "open",
            function() {
              var i = "";
              n.disabled(n.get("now")) &&
                (i = ":not(." + t.klass.buttonToday + ")"),
                e.$root.find("button" + i + ", select").attr("disabled", !1);
            },
            1
          )
          .on(
            "close",
            function() {
              e.$root.find("button, select").attr("disabled", !0);
            },
            1
          );
    }
    var i = e._;
    (n.prototype.set = function(e, t, n) {
      var i = this,
        o = i.item;
      return null === t
        ? ("clear" == e && (e = "select"), (o[e] = t), i)
        : ((o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[
            e
          ]
            .split(" ")
            .map(function(o) {
              return (t = i[o](e, t, n));
            })
            .pop()),
          "select" == e
            ? i.set("highlight", o.select, n)
            : "highlight" == e
            ? i.set("view", o.highlight, n)
            : e.match(/^(flip|min|max|disable|enable)$/) &&
              (o.select && i.disabled(o.select) && i.set("select", o.select, n),
              o.highlight &&
                i.disabled(o.highlight) &&
                i.set("highlight", o.highlight, n)),
          i);
    }),
      (n.prototype.get = function(e) {
        return this.item[e];
      }),
      (n.prototype.create = function(e, n, o) {
        var r,
          a = this;
        return (
          (n = void 0 === n ? e : n) == -1 / 0 || n == 1 / 0
            ? (r = n)
            : t.isPlainObject(n) && i.isInteger(n.pick)
            ? (n = n.obj)
            : t.isArray(n)
            ? ((n = new Date(n[0], n[1], n[2])),
              (n = i.isDate(n) ? n : a.create().obj))
            : (n =
                i.isInteger(n) || i.isDate(n)
                  ? a.normalize(new Date(n), o)
                  : a.now(e, n, o)),
          {
            year: r || n.getFullYear(),
            month: r || n.getMonth(),
            date: r || n.getDate(),
            day: r || n.getDay(),
            obj: r || n,
            pick: r || n.getTime()
          }
        );
      }),
      (n.prototype.createRange = function(e, n) {
        var o = this,
          r = function(e) {
            return !0 === e || t.isArray(e) || i.isDate(e) ? o.create(e) : e;
          };
        return (
          i.isInteger(e) || (e = r(e)),
          i.isInteger(n) || (n = r(n)),
          i.isInteger(e) && t.isPlainObject(n)
            ? (e = [n.year, n.month, n.date + e])
            : i.isInteger(n) &&
              t.isPlainObject(e) &&
              (n = [e.year, e.month, e.date + n]),
          { from: r(e), to: r(n) }
        );
      }),
      (n.prototype.withinRange = function(e, t) {
        return (
          (e = this.createRange(e.from, e.to)),
          t.pick >= e.from.pick && t.pick <= e.to.pick
        );
      }),
      (n.prototype.overlapRanges = function(e, t) {
        var n = this;
        return (
          (e = n.createRange(e.from, e.to)),
          (t = n.createRange(t.from, t.to)),
          n.withinRange(e, t.from) ||
            n.withinRange(e, t.to) ||
            n.withinRange(t, e.from) ||
            n.withinRange(t, e.to)
        );
      }),
      (n.prototype.now = function(e, t, n) {
        return (
          (t = new Date()),
          n && n.rel && t.setDate(t.getDate() + n.rel),
          this.normalize(t, n)
        );
      }),
      (n.prototype.navigate = function(e, n, i) {
        var o,
          r,
          a,
          s,
          l = t.isArray(n),
          c = t.isPlainObject(n),
          u = this.item.view;
        if (l || c) {
          for (
            c
              ? ((r = n.year), (a = n.month), (s = n.date))
              : ((r = +n[0]), (a = +n[1]), (s = +n[2])),
              i && i.nav && u && u.month !== a && ((r = u.year), (a = u.month)),
              r = (o = new Date(
                r,
                a + (i && i.nav ? i.nav : 0),
                1
              )).getFullYear(),
              a = o.getMonth();
            new Date(r, a, s).getMonth() !== a;

          )
            s -= 1;
          n = [r, a, s];
        }
        return n;
      }),
      (n.prototype.normalize = function(e) {
        return e.setHours(0, 0, 0, 0), e;
      }),
      (n.prototype.measure = function(e, t) {
        return (
          t
            ? "string" == typeof t
              ? (t = this.parse(e, t))
              : i.isInteger(t) && (t = this.now(e, t, { rel: t }))
            : (t = "min" == e ? -1 / 0 : 1 / 0),
          t
        );
      }),
      (n.prototype.viewset = function(e, t) {
        return this.create([t.year, t.month, 1]);
      }),
      (n.prototype.validate = function(e, n, o) {
        var r,
          a,
          s,
          l,
          c = this,
          u = n,
          d = o && o.interval ? o.interval : 1,
          p = -1 === c.item.enable,
          f = c.item.min,
          h = c.item.max,
          v =
            p &&
            c.item.disable.filter(function(e) {
              if (t.isArray(e)) {
                var o = c.create(e).pick;
                o < n.pick ? (r = !0) : o > n.pick && (a = !0);
              }
              return i.isInteger(e);
            }).length;
        if (
          (!o || !o.nav) &&
          ((!p && c.disabled(n)) ||
            (p && c.disabled(n) && (v || r || a)) ||
            (!p && (n.pick <= f.pick || n.pick >= h.pick)))
        )
          for (
            p && !v && ((!a && d > 0) || (!r && d < 0)) && (d *= -1);
            c.disabled(n) &&
            (Math.abs(d) > 1 &&
              (n.month < u.month || n.month > u.month) &&
              ((n = u), (d = d > 0 ? 1 : -1)),
            n.pick <= f.pick
              ? ((s = !0),
                (d = 1),
                (n = c.create([
                  f.year,
                  f.month,
                  f.date + (n.pick === f.pick ? 0 : -1)
                ])))
              : n.pick >= h.pick &&
                ((l = !0),
                (d = -1),
                (n = c.create([
                  h.year,
                  h.month,
                  h.date + (n.pick === h.pick ? 0 : 1)
                ]))),
            !s || !l);

          )
            n = c.create([n.year, n.month, n.date + d]);
        return n;
      }),
      (n.prototype.disabled = function(e) {
        var n = this,
          o = n.item.disable.filter(function(o) {
            return i.isInteger(o)
              ? e.day === (n.settings.firstDay ? o : o - 1) % 7
              : t.isArray(o) || i.isDate(o)
              ? e.pick === n.create(o).pick
              : t.isPlainObject(o)
              ? n.withinRange(o, e)
              : void 0;
          });
        return (
          (o =
            o.length &&
            !o.filter(function(e) {
              return (
                (t.isArray(e) && "inverted" == e[3]) ||
                (t.isPlainObject(e) && e.inverted)
              );
            }).length),
          -1 === n.item.enable
            ? !o
            : o || e.pick < n.item.min.pick || e.pick > n.item.max.pick
        );
      }),
      (n.prototype.parse = function(e, t, n) {
        var o = this,
          r = {};
        return t && "string" == typeof t
          ? ((n && n.format) || ((n = n || {}).format = o.settings.format),
            o.formats.toArray(n.format).map(function(e) {
              var n = o.formats[e],
                a = n ? i.trigger(n, o, [t, r]) : e.replace(/^!/, "").length;
              n && (r[e] = t.substr(0, a)), (t = t.substr(a));
            }),
            [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d])
          : t;
      }),
      (n.prototype.formats = (function() {
        function e(e, t, n) {
          var i = e.match(/\w+/)[0];
          return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length;
        }
        function t(e) {
          return e.match(/\w+/)[0].length;
        }
        return {
          d: function(e, t) {
            return e ? i.digits(e) : t.date;
          },
          dd: function(e, t) {
            return e ? 2 : i.lead(t.date);
          },
          ddd: function(e, n) {
            return e ? t(e) : this.settings.weekdaysShort[n.day];
          },
          dddd: function(e, n) {
            return e ? t(e) : this.settings.weekdaysFull[n.day];
          },
          m: function(e, t) {
            return e ? i.digits(e) : t.month + 1;
          },
          mm: function(e, t) {
            return e ? 2 : i.lead(t.month + 1);
          },
          mmm: function(t, n) {
            var i = this.settings.monthsShort;
            return t ? e(t, i, n) : i[n.month];
          },
          mmmm: function(t, n) {
            var i = this.settings.monthsFull;
            return t ? e(t, i, n) : i[n.month];
          },
          yy: function(e, t) {
            return e ? 2 : ("" + t.year).slice(2);
          },
          yyyy: function(e, t) {
            return e ? 4 : t.year;
          },
          toArray: function(e) {
            return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
          },
          toString: function(e, t) {
            var n = this;
            return n.formats
              .toArray(e)
              .map(function(e) {
                return (
                  i.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                );
              })
              .join("");
          }
        };
      })()),
      (n.prototype.isDateExact = function(e, n) {
        var o = this;
        return (i.isInteger(e) && i.isInteger(n)) ||
          ("boolean" == typeof e && "boolean" == typeof n)
          ? e === n
          : (i.isDate(e) || t.isArray(e)) && (i.isDate(n) || t.isArray(n))
          ? o.create(e).pick === o.create(n).pick
          : !(!t.isPlainObject(e) || !t.isPlainObject(n)) &&
            o.isDateExact(e.from, n.from) &&
            o.isDateExact(e.to, n.to);
      }),
      (n.prototype.isDateOverlap = function(e, n) {
        var o = this,
          r = o.settings.firstDay ? 1 : 0;
        return i.isInteger(e) && (i.isDate(n) || t.isArray(n))
          ? (e = (e % 7) + r) === o.create(n).day + 1
          : i.isInteger(n) && (i.isDate(e) || t.isArray(e))
          ? (n = (n % 7) + r) === o.create(e).day + 1
          : !(!t.isPlainObject(e) || !t.isPlainObject(n)) &&
            o.overlapRanges(e, n);
      }),
      (n.prototype.flipEnable = function(e) {
        var t = this.item;
        t.enable = e || (-1 == t.enable ? 1 : -1);
      }),
      (n.prototype.deactivate = function(e, n) {
        var o = this,
          r = o.item.disable.slice(0);
        return (
          "flip" == n
            ? o.flipEnable()
            : !1 === n
            ? (o.flipEnable(1), (r = []))
            : !0 === n
            ? (o.flipEnable(-1), (r = []))
            : n.map(function(e) {
                for (var n, a = 0; a < r.length; a += 1)
                  if (o.isDateExact(e, r[a])) {
                    n = !0;
                    break;
                  }
                n ||
                  ((i.isInteger(e) ||
                    i.isDate(e) ||
                    t.isArray(e) ||
                    (t.isPlainObject(e) && e.from && e.to)) &&
                    r.push(e));
              }),
          r
        );
      }),
      (n.prototype.activate = function(e, n) {
        var o = this,
          r = o.item.disable,
          a = r.length;
        return (
          "flip" == n
            ? o.flipEnable()
            : !0 === n
            ? (o.flipEnable(1), (r = []))
            : !1 === n
            ? (o.flipEnable(-1), (r = []))
            : n.map(function(e) {
                var n, s, l, c;
                for (l = 0; l < a; l += 1) {
                  if (o.isDateExact((s = r[l]), e)) {
                    (n = r[l] = null), (c = !0);
                    break;
                  }
                  if (o.isDateOverlap(s, e)) {
                    t.isPlainObject(e)
                      ? ((e.inverted = !0), (n = e))
                      : t.isArray(e)
                      ? (n = e)[3] || n.push("inverted")
                      : i.isDate(e) &&
                        (n = [
                          e.getFullYear(),
                          e.getMonth(),
                          e.getDate(),
                          "inverted"
                        ]);
                    break;
                  }
                }
                if (n)
                  for (l = 0; l < a; l += 1)
                    if (o.isDateExact(r[l], e)) {
                      r[l] = null;
                      break;
                    }
                if (c)
                  for (l = 0; l < a; l += 1)
                    if (o.isDateOverlap(r[l], e)) {
                      r[l] = null;
                      break;
                    }
                n && r.push(n);
              }),
          r.filter(function(e) {
            return null != e;
          })
        );
      }),
      (n.prototype.nodes = function(e) {
        var t = this,
          n = t.settings,
          o = t.item,
          r = o.now,
          a = o.select,
          s = o.highlight,
          l = o.view,
          c = o.disable,
          u = o.min,
          d = o.max,
          p = (function(e, t) {
            return (
              n.firstDay && (e.push(e.shift()), t.push(t.shift())),
              i.node(
                "thead",
                i.node(
                  "tr",
                  i.group({
                    min: 0,
                    max: 6,
                    i: 1,
                    node: "th",
                    item: function(i) {
                      return [
                        e[i],
                        n.klass.weekdays,
                        'scope=col title="' + t[i] + '"'
                      ];
                    }
                  })
                )
              )
            );
          })(
            (n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysLetter).slice(0),
            n.weekdaysFull.slice(0)
          ),
          f = function(e) {
            return i.node(
              "div",
              " ",
              n.klass["nav" + (e ? "Next" : "Prev")] +
                ((e && l.year >= d.year && l.month >= d.month) ||
                (!e && l.year <= u.year && l.month <= u.month)
                  ? " " + n.klass.navDisabled
                  : ""),
              "data-nav=" +
                (e || -1) +
                " " +
                i.ariaAttr({
                  role: "button",
                  controls: t.$node[0].id + "_table"
                }) +
                ' title="' +
                (e ? n.labelMonthNext : n.labelMonthPrev) +
                '"'
            );
          },
          h = function(o) {
            var r = n.showMonthsShort ? n.monthsShort : n.monthsFull;
            return (
              "short_months" == o && (r = n.monthsShort),
              n.selectMonths && null == o
                ? i.node(
                    "select",
                    i.group({
                      min: 0,
                      max: 11,
                      i: 1,
                      node: "option",
                      item: function(e) {
                        return [
                          r[e],
                          0,
                          "value=" +
                            e +
                            (l.month == e ? " selected" : "") +
                            ((l.year == u.year && e < u.month) ||
                            (l.year == d.year && e > d.month)
                              ? " disabled"
                              : "")
                        ];
                      }
                    }),
                    n.klass.selectMonth + " browser-default",
                    (e ? "" : "disabled") +
                      " " +
                      i.ariaAttr({ controls: t.$node[0].id + "_table" }) +
                      ' title="' +
                      n.labelMonthSelect +
                      '"'
                  )
                : "short_months" == o
                ? null != a
                  ? r[a.month]
                  : r[l.month]
                : i.node("div", r[l.month], n.klass.month)
            );
          },
          v = function(o) {
            var r = l.year,
              s = !0 === n.selectYears ? 5 : ~~(n.selectYears / 2);
            if (s) {
              var c = u.year,
                p = d.year,
                f = r - s,
                h = r + s;
              if ((c > f && ((h += c - f), (f = c)), p < h)) {
                var v = f - c,
                  g = h - p;
                (f -= v > g ? g : v), (h = p);
              }
              if (n.selectYears && null == o)
                return i.node(
                  "select",
                  i.group({
                    min: f,
                    max: h,
                    i: 1,
                    node: "option",
                    item: function(e) {
                      return [e, 0, "value=" + e + (r == e ? " selected" : "")];
                    }
                  }),
                  n.klass.selectYear + " browser-default",
                  (e ? "" : "disabled") +
                    " " +
                    i.ariaAttr({ controls: t.$node[0].id + "_table" }) +
                    ' title="' +
                    n.labelYearSelect +
                    '"'
                );
            }
            return "raw" === o && null != a
              ? i.node("div", a.year)
              : i.node("div", r, n.klass.year);
          };
        return (
          (createDayLabel = function() {
            return null != a ? a.date : r.date;
          }),
          (createWeekdayLabel = function() {
            return n.weekdaysShort[null != a ? a.day : r.day];
          }),
          i.node(
            "div",
            i.node("div", v("raw"), n.klass.year_display) +
              i.node(
                "span",
                createWeekdayLabel() + ", ",
                "picker__weekday-display"
              ) +
              i.node("span", h("short_months") + " ", n.klass.month_display) +
              i.node("span", createDayLabel(), n.klass.day_display),
            n.klass.date_display
          ) +
            i.node(
              "div",
              i.node(
                "div",
                i.node("div", h() + v() + f() + f(1), n.klass.header) +
                  i.node(
                    "table",
                    p +
                      i.node(
                        "tbody",
                        i.group({
                          min: 0,
                          max: 5,
                          i: 1,
                          node: "tr",
                          item: function(e) {
                            var o =
                              n.firstDay &&
                              0 === t.create([l.year, l.month, 1]).day
                                ? -7
                                : 0;
                            return [
                              i.group({
                                min: 7 * e - l.day + o + 1,
                                max: function() {
                                  return this.min + 7 - 1;
                                },
                                i: 1,
                                node: "td",
                                item: function(e) {
                                  e = t.create([
                                    l.year,
                                    l.month,
                                    e + (n.firstDay ? 1 : 0)
                                  ]);
                                  var o = a && a.pick == e.pick,
                                    p = s && s.pick == e.pick,
                                    f =
                                      (c && t.disabled(e)) ||
                                      e.pick < u.pick ||
                                      e.pick > d.pick,
                                    h = i.trigger(t.formats.toString, t, [
                                      n.format,
                                      e
                                    ]);
                                  return [
                                    i.node(
                                      "div",
                                      e.date,
                                      (function(t) {
                                        return (
                                          t.push(
                                            l.month == e.month
                                              ? n.klass.infocus
                                              : n.klass.outfocus
                                          ),
                                          r.pick == e.pick &&
                                            t.push(n.klass.now),
                                          o && t.push(n.klass.selected),
                                          p && t.push(n.klass.highlighted),
                                          f && t.push(n.klass.disabled),
                                          t.join(" ")
                                        );
                                      })([n.klass.day]),
                                      "data-pick=" +
                                        e.pick +
                                        " " +
                                        i.ariaAttr({
                                          role: "gridcell",
                                          label: h,
                                          selected:
                                            !(!o || t.$node.val() !== h) ||
                                            null,
                                          activedescendant: !!p || null,
                                          disabled: !!f || null
                                        }) +
                                        " " +
                                        (f ? "" : 'tabindex="0"')
                                    ),
                                    "",
                                    i.ariaAttr({ role: "presentation" })
                                  ];
                                }
                              })
                            ];
                          }
                        })
                      ),
                    n.klass.table,
                    'id="' +
                      t.$node[0].id +
                      '_table" ' +
                      i.ariaAttr({
                        role: "grid",
                        controls: t.$node[0].id,
                        readonly: !0
                      })
                  ),
                n.klass.calendar_container
              ) +
                i.node(
                  "div",
                  i.node(
                    "button",
                    n.today,
                    "btn-flat picker__today waves-effect",
                    "type=button data-pick=" +
                      r.pick +
                      (e && !t.disabled(r) ? "" : " disabled") +
                      " " +
                      i.ariaAttr({ controls: t.$node[0].id })
                  ) +
                    i.node(
                      "button",
                      n.clear,
                      "btn-flat picker__clear waves-effect",
                      "type=button data-clear=1" +
                        (e ? "" : " disabled") +
                        " " +
                        i.ariaAttr({ controls: t.$node[0].id })
                    ) +
                    i.node(
                      "button",
                      n.close,
                      "btn-flat picker__close waves-effect",
                      "type=button data-close=true " +
                        (e ? "" : " disabled") +
                        " " +
                        i.ariaAttr({ controls: t.$node[0].id })
                    ),
                  n.klass.footer
                ),
              "picker__container__wrapper"
            )
        );
      }),
      (n.defaults = (function(e) {
        return {
          labelMonthNext: "Next month",
          labelMonthPrev: "Previous month",
          labelMonthSelect: "Select a month",
          labelYearSelect: "Select a year",
          monthsFull: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          monthsShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          weekdaysFull: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
          today: "Today",
          clear: "Clear",
          close: "Ok",
          closeOnSelect: !1,
          format: "d mmmm, yyyy",
          klass: {
            table: e + "table",
            header: e + "header",
            date_display: e + "date-display",
            day_display: e + "day-display",
            month_display: e + "month-display",
            year_display: e + "year-display",
            calendar_container: e + "calendar-container",
            navPrev: e + "nav--prev",
            navNext: e + "nav--next",
            navDisabled: e + "nav--disabled",
            month: e + "month",
            year: e + "year",
            selectMonth: e + "select--month",
            selectYear: e + "select--year",
            weekdays: e + "weekday",
            day: e + "day",
            disabled: e + "day--disabled",
            selected: e + "day--selected",
            highlighted: e + "day--highlighted",
            now: e + "day--today",
            infocus: e + "day--infocus",
            outfocus: e + "day--outfocus",
            footer: e + "footer",
            buttonClear: e + "button--clear",
            buttonToday: e + "button--today",
            buttonClose: e + "button--close"
          }
        };
      })(e.klasses().picker + "__")),
      e.extend("pickadate", n);
  })(Materialize.Picker, jQuery),
  (function(e) {
    function t(e) {
      return document.createElementNS(l, e);
    }
    function n(e) {
      return (e < 10 ? "0" : "") + e;
    }
    function i(e) {
      var t = ++g + "";
      return e ? e + t : t;
    }
    function o(o, a) {
      function l(e, t) {
        var n = d.offset(),
          i = /^touch/.test(e.type),
          o = n.left + m,
          r = n.top + m,
          l = (i ? e.originalEvent.touches[0] : e).pageX - o,
          c = (i ? e.originalEvent.touches[0] : e).pageY - r,
          u = Math.sqrt(l * l + c * c),
          p = !1;
        if (!t || !(u < y - w || u > y + w)) {
          e.preventDefault();
          var v = setTimeout(function() {
            O.popover.addClass("clockpicker-moving");
          }, 200);
          O.setHand(l, c, !t, !0),
            s.off(f).on(f, function(e) {
              e.preventDefault();
              var t = /^touch/.test(e.type),
                n = (t ? e.originalEvent.touches[0] : e).pageX - o,
                i = (t ? e.originalEvent.touches[0] : e).pageY - r;
              (p || n !== l || i !== c) && ((p = !0), O.setHand(n, i, !1, !0));
            }),
            s.off(h).on(h, function(e) {
              s.off(h), e.preventDefault();
              var n = /^touch/.test(e.type),
                i = (n ? e.originalEvent.changedTouches[0] : e).pageX - o,
                u = (n ? e.originalEvent.changedTouches[0] : e).pageY - r;
              (t || p) && i === l && u === c && O.setHand(i, u),
                "hours" === O.currentView
                  ? O.toggleView("minutes", k / 2)
                  : a.autoclose &&
                    (O.minutesView.addClass("clockpicker-dial-out"),
                    setTimeout(function() {
                      O.done();
                    }, k / 2)),
                d.prepend(_),
                clearTimeout(v),
                O.popover.removeClass("clockpicker-moving"),
                s.off(f);
            });
        }
      }
      var u = e(C),
        d = u.find(".clockpicker-plate"),
        v = u.find(".picker__holder"),
        g = u.find(".clockpicker-hours"),
        T = u.find(".clockpicker-minutes"),
        S = u.find(".clockpicker-am-pm-block"),
        A = "INPUT" === o.prop("tagName"),
        E = A ? o : o.find("input"),
        P = e("label[for=" + E.attr("id") + "]"),
        O = this;
      (this.id = i("cp")),
        (this.element = o),
        (this.holder = v),
        (this.options = a),
        (this.isAppended = !1),
        (this.isShown = !1),
        (this.currentView = "hours"),
        (this.isInput = A),
        (this.input = E),
        (this.label = P),
        (this.popover = u),
        (this.plate = d),
        (this.hoursView = g),
        (this.minutesView = T),
        (this.amPmBlock = S),
        (this.spanHours = u.find(".clockpicker-span-hours")),
        (this.spanMinutes = u.find(".clockpicker-span-minutes")),
        (this.spanAmPm = u.find(".clockpicker-span-am-pm")),
        (this.footer = u.find(".picker__footer")),
        (this.amOrPm = "PM"),
        a.twelvehour &&
          (a.ampmclickable
            ? (this.spanAmPm.empty(),
              e('<div id="click-am">AM</div>')
                .on("click", function() {
                  O.spanAmPm.children("#click-am").addClass("text-primary"),
                    O.spanAmPm
                      .children("#click-pm")
                      .removeClass("text-primary"),
                    (O.amOrPm = "AM");
                })
                .appendTo(this.spanAmPm),
              e('<div id="click-pm">PM</div>')
                .on("click", function() {
                  O.spanAmPm.children("#click-pm").addClass("text-primary"),
                    O.spanAmPm
                      .children("#click-am")
                      .removeClass("text-primary"),
                    (O.amOrPm = "PM");
                })
                .appendTo(this.spanAmPm))
            : (this.spanAmPm.empty(),
              e('<div id="click-am">AM</div>').appendTo(this.spanAmPm),
              e('<div id="click-pm">PM</div>').appendTo(this.spanAmPm))),
        e(
          '<button type="button" class="btn-flat picker__clear" tabindex="' +
            (a.twelvehour ? "3" : "1") +
            '">' +
            a.cleartext +
            "</button>"
        )
          .click(e.proxy(this.clear, this))
          .appendTo(this.footer),
        e(
          '<button type="button" class="btn-flat picker__close" tabindex="' +
            (a.twelvehour ? "3" : "1") +
            '">' +
            a.canceltext +
            "</button>"
        )
          .click(e.proxy(this.hide, this))
          .appendTo(this.footer),
        e(
          '<button type="button" class="btn-flat picker__close" tabindex="' +
            (a.twelvehour ? "3" : "1") +
            '">' +
            a.donetext +
            "</button>"
        )
          .click(e.proxy(this.done, this))
          .appendTo(this.footer),
        this.spanHours.click(e.proxy(this.toggleView, this, "hours")),
        this.spanMinutes.click(e.proxy(this.toggleView, this, "minutes")),
        E.on("focus.clockpicker click.clockpicker", e.proxy(this.show, this));
      var D,
        M,
        j,
        q,
        N = e('<div class="clockpicker-tick"></div>');
      if (a.twelvehour)
        for (D = 1; D < 13; D += 1)
          (M = N.clone()),
            (j = (D / 6) * Math.PI),
            (q = y),
            M.css({
              left: m + Math.sin(j) * q - w,
              top: m - Math.cos(j) * q - w
            }),
            M.html(0 === D ? "00" : D),
            g.append(M),
            M.on(p, l);
      else
        for (D = 0; D < 24; D += 1)
          (M = N.clone()),
            (j = (D / 6) * Math.PI),
            (q = D > 0 && D < 13 ? b : y),
            M.css({
              left: m + Math.sin(j) * q - w,
              top: m - Math.cos(j) * q - w
            }),
            M.html(0 === D ? "00" : D),
            g.append(M),
            M.on(p, l);
      for (D = 0; D < 60; D += 5)
        (M = N.clone()),
          (j = (D / 30) * Math.PI),
          M.css({
            left: m + Math.sin(j) * y - w,
            top: m - Math.cos(j) * y - w
          }),
          M.html(n(D)),
          T.append(M),
          M.on(p, l);
      if (
        (d.on(p, function(t) {
          0 === e(t.target).closest(".clockpicker-tick").length && l(t, !0);
        }),
        c)
      ) {
        var _ = u.find(".clockpicker-canvas"),
          L = t("svg");
        L.setAttribute("class", "clockpicker-svg"),
          L.setAttribute("width", x),
          L.setAttribute("height", x);
        var I = t("g");
        I.setAttribute("transform", "translate(" + m + "," + m + ")");
        var H = t("circle");
        H.setAttribute("class", "clockpicker-canvas-bearing"),
          H.setAttribute("cx", 0),
          H.setAttribute("cy", 0),
          H.setAttribute("r", 4);
        var z = t("line");
        z.setAttribute("x1", 0), z.setAttribute("y1", 0);
        var $ = t("circle");
        $.setAttribute("class", "clockpicker-canvas-bg"),
          $.setAttribute("r", w),
          I.appendChild(z),
          I.appendChild($),
          I.appendChild(H),
          L.appendChild(I),
          _.append(L),
          (this.hand = z),
          (this.bg = $),
          (this.bearing = H),
          (this.g = I),
          (this.canvas = _);
      }
      r(this.options.init);
    }
    function r(e) {
      e && "function" == typeof e && e();
    }
    var a = e(window),
      s = e(document),
      l = "http://www.w3.org/2000/svg",
      c =
        "SVGAngle" in window &&
        (function() {
          var e,
            t = document.createElement("div");
          return (
            (t.innerHTML = "<svg/>"),
            (e = (t.firstChild && t.firstChild.namespaceURI) == l),
            (t.innerHTML = ""),
            e
          );
        })(),
      u = (function() {
        var e = document.createElement("div").style;
        return (
          "transition" in e ||
          "WebkitTransition" in e ||
          "MozTransition" in e ||
          "msTransition" in e ||
          "OTransition" in e
        );
      })(),
      d = "ontouchstart" in window,
      p = "mousedown" + (d ? " touchstart" : ""),
      f = "mousemove.clockpicker" + (d ? " touchmove.clockpicker" : ""),
      h = "mouseup.clockpicker" + (d ? " touchend.clockpicker" : ""),
      v = navigator.vibrate
        ? "vibrate"
        : navigator.webkitVibrate
        ? "webkitVibrate"
        : null,
      g = 0,
      m = 135,
      y = 105,
      b = 70,
      w = 20,
      x = 2 * m,
      k = u ? 350 : 1,
      C = [
        '<div class="clockpicker picker">',
        '<div class="picker__holder">',
        '<div class="picker__frame">',
        '<div class="picker__wrap">',
        '<div class="picker__box">',
        '<div class="picker__date-display">',
        '<div class="clockpicker-display">',
        '<div class="clockpicker-display-column">',
        '<span class="clockpicker-span-hours text-primary"></span>',
        ":",
        '<span class="clockpicker-span-minutes"></span>',
        "</div>",
        '<div class="clockpicker-display-column clockpicker-display-am-pm">',
        '<div class="clockpicker-span-am-pm"></div>',
        "</div>",
        "</div>",
        "</div>",
        '<div class="picker__container__wrapper">',
        '<div class="picker__calendar-container">',
        '<div class="clockpicker-plate">',
        '<div class="clockpicker-canvas"></div>',
        '<div class="clockpicker-dial clockpicker-hours"></div>',
        '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',
        "</div>",
        '<div class="clockpicker-am-pm-block">',
        "</div>",
        "</div>",
        '<div class="picker__footer">',
        "</div>",
        "</div>",
        "</div>",
        "</div>",
        "</div>",
        "</div>",
        "</div>"
      ].join("");
    (o.DEFAULTS = {
      default: "",
      fromnow: 0,
      donetext: "Ok",
      cleartext: "Clear",
      canceltext: "Cancel",
      autoclose: !1,
      ampmclickable: !0,
      darktheme: !1,
      twelvehour: !0,
      vibrate: !0
    }),
      (o.prototype.toggle = function() {
        this[this.isShown ? "hide" : "show"]();
      }),
      (o.prototype.locate = function() {
        var e = this.element,
          t = this.popover;
        e.offset(), e.outerWidth(), e.outerHeight(), t.show();
      }),
      (o.prototype.show = function(t) {
        if (!this.isShown) {
          r(this.options.beforeShow),
            e(":input").each(function() {
              e(this).attr("tabindex", -1);
            });
          var i = this;
          this.input.blur(),
            this.popover.addClass("picker--opened"),
            this.input.addClass("picker__input picker__input--active"),
            e(document.body).css("overflow", "hidden");
          var o = (
            (this.input.prop("value") || this.options.default || "") + ""
          ).split(":");
          if (
            (this.options.twelvehour &&
              void 0 !== o[1] &&
              ((this.amOrPm = o[1].indexOf("AM") > 0 ? "AM" : "PM"),
              (o[1] = o[1].replace("AM", "").replace("PM", ""))),
            "now" === o[0])
          ) {
            var l = new Date(+new Date() + this.options.fromnow);
            (o = [l.getHours(), l.getMinutes()]),
              this.options.twelvehour &&
                (this.amOrPm = o[0] >= 12 && o[0] < 24 ? "PM" : "AM");
          }
          if (
            ((this.hours = +o[0] || 0),
            (this.minutes = +o[1] || 0),
            this.spanHours.html(this.hours),
            this.spanMinutes.html(n(this.minutes)),
            !this.isAppended)
          ) {
            var c = document.querySelector(this.options.container);
            this.options.container && c
              ? c.appendChild(this.popover[0])
              : this.popover.insertAfter(this.input),
              this.options.twelvehour &&
                ("PM" === this.amOrPm
                  ? (this.spanAmPm
                      .children("#click-pm")
                      .addClass("text-primary"),
                    this.spanAmPm
                      .children("#click-am")
                      .removeClass("text-primary"))
                  : (this.spanAmPm
                      .children("#click-am")
                      .addClass("text-primary"),
                    this.spanAmPm
                      .children("#click-pm")
                      .removeClass("text-primary"))),
              a.on("resize.clockpicker" + this.id, function() {
                i.isShown && i.locate();
              }),
              (this.isAppended = !0);
          }
          this.toggleView("hours"),
            this.locate(),
            (this.isShown = !0),
            s.on(
              "click.clockpicker." +
                this.id +
                " focusin.clockpicker." +
                this.id,
              function(t) {
                var n = e(t.target);
                0 === n.closest(i.popover.find(".picker__wrap")).length &&
                  0 === n.closest(i.input).length &&
                  i.hide();
              }
            ),
            s.on("keyup.clockpicker." + this.id, function(e) {
              27 === e.keyCode && i.hide();
            }),
            r(this.options.afterShow);
        }
      }),
      (o.prototype.hide = function() {
        r(this.options.beforeHide),
          this.input.removeClass("picker__input picker__input--active"),
          this.popover.removeClass("picker--opened"),
          e(document.body).css("overflow", "visible"),
          (this.isShown = !1),
          e(":input").each(function(t) {
            e(this).attr("tabindex", t + 1);
          }),
          s.off(
            "click.clockpicker." + this.id + " focusin.clockpicker." + this.id
          ),
          s.off("keyup.clockpicker." + this.id),
          this.popover.hide(),
          r(this.options.afterHide);
      }),
      (o.prototype.toggleView = function(t, n) {
        var i = !1;
        "minutes" === t &&
          "visible" === e(this.hoursView).css("visibility") &&
          (r(this.options.beforeHourSelect), (i = !0));
        var o = "hours" === t,
          a = o ? this.hoursView : this.minutesView,
          s = o ? this.minutesView : this.hoursView;
        (this.currentView = t),
          this.spanHours.toggleClass("text-primary", o),
          this.spanMinutes.toggleClass("text-primary", !o),
          s.addClass("clockpicker-dial-out"),
          a.css("visibility", "visible").removeClass("clockpicker-dial-out"),
          this.resetClock(n),
          clearTimeout(this.toggleViewTimer),
          (this.toggleViewTimer = setTimeout(function() {
            s.css("visibility", "hidden");
          }, k)),
          i && r(this.options.afterHourSelect);
      }),
      (o.prototype.resetClock = function(e) {
        var t = this.currentView,
          n = this[t],
          i = "hours" === t,
          o = n * (Math.PI / (i ? 6 : 30)),
          r = i && n > 0 && n < 13 ? b : y,
          a = Math.sin(o) * r,
          s = -Math.cos(o) * r,
          l = this;
        c && e
          ? (l.canvas.addClass("clockpicker-canvas-out"),
            setTimeout(function() {
              l.canvas.removeClass("clockpicker-canvas-out"), l.setHand(a, s);
            }, e))
          : this.setHand(a, s);
      }),
      (o.prototype.setHand = function(t, i, o, r) {
        var a,
          s = Math.atan2(t, -i),
          l = "hours" === this.currentView,
          u = Math.PI / (l || o ? 6 : 30),
          d = Math.sqrt(t * t + i * i),
          p = this.options,
          f = l && d < (y + b) / 2,
          h = f ? b : y;
        if (
          (p.twelvehour && (h = y),
          s < 0 && (s = 2 * Math.PI + s),
          (s = (a = Math.round(s / u)) * u),
          p.twelvehour
            ? l
              ? 0 === a && (a = 12)
              : (o && (a *= 5), 60 === a && (a = 0))
            : l
            ? (12 === a && (a = 0),
              (a = f ? (0 === a ? 12 : a) : 0 === a ? 0 : a + 12))
            : (o && (a *= 5), 60 === a && (a = 0)),
          this[this.currentView] !== a &&
            v &&
            this.options.vibrate &&
            (this.vibrateTimer ||
              (navigator[v](10),
              (this.vibrateTimer = setTimeout(
                e.proxy(function() {
                  this.vibrateTimer = null;
                }, this),
                100
              )))),
          (this[this.currentView] = a),
          l ? this.spanHours.html(a) : this.spanMinutes.html(n(a)),
          c)
        ) {
          var g = Math.sin(s) * (h - w),
            m = -Math.cos(s) * (h - w),
            x = Math.sin(s) * h,
            k = -Math.cos(s) * h;
          this.hand.setAttribute("x2", g),
            this.hand.setAttribute("y2", m),
            this.bg.setAttribute("cx", x),
            this.bg.setAttribute("cy", k);
        } else
          this[l ? "hoursView" : "minutesView"]
            .find(".clockpicker-tick")
            .each(function() {
              var t = e(this);
              t.toggleClass("active", a === +t.html());
            });
      }),
      (o.prototype.done = function() {
        r(this.options.beforeDone), this.hide(), this.label.addClass("active");
        var e = this.input.prop("value"),
          t = n(this.hours) + ":" + n(this.minutes);
        this.options.twelvehour && (t += this.amOrPm),
          this.input.prop("value", t),
          t !== e &&
            (this.input.triggerHandler("change"),
            this.isInput || this.element.trigger("change")),
          this.options.autoclose && this.input.trigger("blur"),
          r(this.options.afterDone);
      }),
      (o.prototype.clear = function() {
        this.hide(), this.label.removeClass("active");
        var e = this.input.prop("value");
        this.input.prop("value", ""),
          "" !== e &&
            (this.input.triggerHandler("change"),
            this.isInput || this.element.trigger("change")),
          this.options.autoclose && this.input.trigger("blur");
      }),
      (o.prototype.remove = function() {
        this.element.removeData("clockpicker"),
          this.input.off("focus.clockpicker click.clockpicker"),
          this.isShown && this.hide(),
          this.isAppended &&
            (a.off("resize.clockpicker" + this.id), this.popover.remove());
      }),
      (e.fn.pickatime = function(t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
          var i = e(this),
            r = i.data("clockpicker");
          if (r) "function" == typeof r[t] && r[t].apply(r, n);
          else {
            var a = e.extend(
              {},
              o.DEFAULTS,
              i.data(),
              "object" == typeof t && t
            );
            i.data("clockpicker", new o(i, a));
          }
        });
      });
  })(jQuery),
  (function(e) {
    function t() {
      var t = +e(this).attr("data-length"),
        n = +e(this).val().length,
        i = n <= t;
      e(this)
        .parent()
        .find('span[class="character-counter"]')
        .html(n + "/" + t),
        (function(e, t) {
          var n = t.hasClass("invalid");
          e && n
            ? t.removeClass("invalid")
            : e || n || (t.removeClass("valid"), t.addClass("invalid"));
        })(i, e(this));
    }
    function n() {
      e(this)
        .parent()
        .find('span[class="character-counter"]')
        .html("");
    }
    (e.fn.characterCounter = function() {
      return this.each(function() {
        var i = e(this);
        i.parent().find('span[class="character-counter"]').length ||
          (void 0 !== i.attr("data-length") &&
            (i.on("input", t),
            i.on("focus", t),
            i.on("blur", n),
            (function(t) {
              var n = t.parent().find('span[class="character-counter"]');
              n.length ||
                ((n = e("<span/>")
                  .addClass("character-counter")
                  .css("float", "right")
                  .css("font-size", "12px")
                  .css("height", 1)),
                t.parent().append(n));
            })(i)));
      });
    }),
      e(document).ready(function() {
        e("input, textarea").characterCounter();
      });
  })(jQuery),
  (function(e) {
    var t = {
      init: function(t) {
        t = e.extend(
          {
            duration: 200,
            dist: -100,
            shift: 0,
            padding: 0,
            fullWidth: !1,
            indicators: !1,
            noWrap: !1,
            onCycleTo: null
          },
          t
        );
        var n = Materialize.objectSelectorString(e(this));
        return this.each(function(i) {
          function o(e) {
            return e.targetTouches && e.targetTouches.length >= 1
              ? e.targetTouches[0].clientX
              : e.clientX;
          }
          function r(e) {
            return e.targetTouches && e.targetTouches.length >= 1
              ? e.targetTouches[0].clientY
              : e.clientY;
          }
          function a(e) {
            return e >= k ? e % k : e < 0 ? a(k + (e % k)) : e;
          }
          function s(n) {
            I.hasClass("scrolling") || I.addClass("scrolling"),
              null != _ && window.clearTimeout(_),
              (_ = window.setTimeout(function() {
                I.removeClass("scrolling");
              }, t.duration));
            var i,
              o,
              r,
              s,
              l,
              c,
              u,
              d = b;
            if (
              ((m = "number" == typeof n ? n : m),
              (b = Math.floor((m + x / 2) / x)),
              (l = (-(s = (r = m - b * x) < 0 ? 1 : -1) * r * 2) / x),
              (o = k >> 1),
              t.fullWidth
                ? (u = "translateX(0)")
                : ((u = "translateX(" + (I[0].clientWidth - v) / 2 + "px) "),
                  (u += "translateY(" + (I[0].clientHeight - g) / 2 + "px)")),
              z)
            ) {
              var p = b % k,
                f = N.find(".indicator-item.active");
              f.index() !== p &&
                (f.removeClass("active"),
                N.find(".indicator-item")
                  .eq(p)
                  .addClass("active"));
            }
            for (
              (!$ || (b >= 0 && b < k)) &&
                ((c = h[a(b)]),
                e(c).hasClass("active") ||
                  (I.find(".carousel-item").removeClass("active"),
                  e(c).addClass("active")),
                (c.style[P] =
                  u +
                  " translateX(" +
                  -r / 2 +
                  "px) translateX(" +
                  s * t.shift * l * i +
                  "px) translateZ(" +
                  t.dist * l +
                  "px)"),
                (c.style.zIndex = 0),
                (tweenedOpacity = t.fullWidth ? 1 : 1 - 0.2 * l),
                (c.style.opacity = tweenedOpacity),
                (c.style.display = "block")),
                i = 1;
              i <= o;
              ++i
            )
              t.fullWidth
                ? ((zTranslation = t.dist),
                  (tweenedOpacity = i === o && r < 0 ? 1 - l : 1))
                : ((zTranslation = t.dist * (2 * i + l * s)),
                  (tweenedOpacity = 1 - 0.2 * (2 * i + l * s))),
                (!$ || b + i < k) &&
                  (((c = h[a(b + i)]).style[P] =
                    u +
                    " translateX(" +
                    (t.shift + (x * i - r) / 2) +
                    "px) translateZ(" +
                    zTranslation +
                    "px)"),
                  (c.style.zIndex = -i),
                  (c.style.opacity = tweenedOpacity),
                  (c.style.display = "block")),
                t.fullWidth
                  ? ((zTranslation = t.dist),
                    (tweenedOpacity = i === o && r > 0 ? 1 - l : 1))
                  : ((zTranslation = t.dist * (2 * i - l * s)),
                    (tweenedOpacity = 1 - 0.2 * (2 * i - l * s))),
                (!$ || b - i >= 0) &&
                  (((c = h[a(b - i)]).style[P] =
                    u +
                    " translateX(" +
                    ((-x * i - r) / 2 - t.shift) +
                    "px) translateZ(" +
                    zTranslation +
                    "px)"),
                  (c.style.zIndex = -i),
                  (c.style.opacity = tweenedOpacity),
                  (c.style.display = "block"));
            if (
              ((!$ || (b >= 0 && b < k)) &&
                (((c = h[a(b)]).style[P] =
                  u +
                  " translateX(" +
                  -r / 2 +
                  "px) translateX(" +
                  s * t.shift * l +
                  "px) translateZ(" +
                  t.dist * l +
                  "px)"),
                (c.style.zIndex = 0),
                (tweenedOpacity = t.fullWidth ? 1 : 1 - 0.2 * l),
                (c.style.opacity = tweenedOpacity),
                (c.style.display = "block")),
              d !== b && "function" == typeof t.onCycleTo)
            ) {
              var y = I.find(".carousel-item").eq(a(b));
              t.onCycleTo.call(this, y, j);
            }
            "function" == typeof L && (L.call(this, y, j), (L = null));
          }
          function l() {
            var e, t, n;
            (t = (e = Date.now()) - D),
              (D = e),
              (n = m - O),
              (O = m),
              (E = ((1e3 * n) / (1 + t)) * 0.8 + 0.2 * E);
          }
          function c() {
            var e, n;
            S &&
              ((e = Date.now() - D),
              (n = S * Math.exp(-e / t.duration)) > 2 || n < -2
                ? (s(A - n), requestAnimationFrame(c))
                : s(A));
          }
          function u(e) {
            var t = (b % k) - e;
            $ ||
              (t < 0
                ? Math.abs(t + k) < Math.abs(t) && (t += k)
                : t > 0 && Math.abs(t - k) < t && (t -= k)),
              t < 0
                ? I.trigger("carouselNext", [Math.abs(t)])
                : t > 0 && I.trigger("carouselPrev", [t]);
          }
          function d(t) {
            "mousedown" === t.type &&
              e(t.target).is("img") &&
              t.preventDefault(),
              (w = !0),
              (j = !1),
              (q = !1),
              (C = o(t)),
              (T = r(t)),
              (E = S = 0),
              (O = m),
              (D = Date.now()),
              clearInterval(M),
              (M = setInterval(l, 100));
          }
          function p(e) {
            var t, n;
            if (w)
              if (
                ((t = o(e)),
                (y = r(e)),
                (n = C - t),
                Math.abs(T - y) < 30 && !q)
              )
                (n > 2 || n < -2) && ((j = !0), (C = t), s(m + n));
              else {
                if (j) return e.preventDefault(), e.stopPropagation(), !1;
                q = !0;
              }
            if (j) return e.preventDefault(), e.stopPropagation(), !1;
          }
          function f(e) {
            if (w)
              return (
                (w = !1),
                clearInterval(M),
                (A = m),
                (E > 10 || E < -10) && (A = m + (S = 0.9 * E)),
                (A = Math.round(A / x) * x),
                $ && (A >= x * (k - 1) ? (A = x * (k - 1)) : A < 0 && (A = 0)),
                (S = A - m),
                (D = Date.now()),
                requestAnimationFrame(c),
                j && (e.preventDefault(), e.stopPropagation()),
                !1
              );
          }
          var h,
            v,
            g,
            m,
            b,
            w,
            x,
            k,
            C,
            T,
            S,
            A,
            E,
            P,
            O,
            D,
            M,
            j,
            q,
            N = e('<ul class="indicators"></ul>'),
            _ = null,
            L = null,
            I = e(this),
            H = I.find(".carousel-item").length > 1,
            z = (I.attr("data-indicators") || t.indicators) && H,
            $ = I.attr("data-no-wrap") || t.noWrap || !H,
            V = I.attr("data-namespace") || n + i;
          I.attr("data-namespace", V);
          var W = function(t) {
            var n = I.find(".carousel-item.active").length
                ? I.find(".carousel-item.active").first()
                : I.find(".carousel-item").first(),
              i = n.find("img").first();
            if (i.length)
              if (i[0].complete)
                if (i.height() > 0) I.css("height", i.height());
                else {
                  var o = i[0].naturalWidth,
                    r = i[0].naturalHeight,
                    a = (I.width() / o) * r;
                  I.css("height", a);
                }
              else
                i.on("load", function() {
                  I.css("height", e(this).height());
                });
            else if (!t) {
              var s = n.height();
              I.css("height", s);
            }
          };
          if (
            (t.fullWidth &&
              ((t.dist = 0),
              W(),
              z && I.find(".carousel-fixed-item").addClass("with-indicators")),
            I.hasClass("initialized"))
          )
            return (
              e(window).trigger("resize"), I.trigger("carouselNext", [1e-6]), !0
            );
          I.addClass("initialized"),
            (w = !1),
            (m = A = 0),
            (h = []),
            (v = I.find(".carousel-item")
              .first()
              .innerWidth()),
            (g = I.find(".carousel-item")
              .first()
              .innerHeight()),
            (x = 2 * v + t.padding),
            I.find(".carousel-item").each(function(t) {
              if ((h.push(e(this)[0]), z)) {
                var n = e('<li class="indicator-item"></li>');
                0 === t && n.addClass("active"),
                  n.click(function(t) {
                    t.stopPropagation(), u(e(this).index());
                  }),
                  N.append(n);
              }
            }),
            z && I.append(N),
            (k = h.length),
            (P = "transform"),
            ["webkit", "Moz", "O", "ms"].every(function(e) {
              var t = e + "Transform";
              return void 0 === document.body.style[t] || ((P = t), !1);
            });
          var R = Materialize.throttle(function() {
            t.fullWidth
              ? ((v = I.find(".carousel-item")
                  .first()
                  .innerWidth()),
                I.find(".carousel-item.active").height(),
                (x = 2 * v + t.padding),
                (A = m = 2 * b * v),
                W(!0))
              : s();
          }, 200);
          e(window)
            .off("resize.carousel-" + V)
            .on("resize.carousel-" + V, R),
            void 0 !== window.ontouchstart &&
              (I.on("touchstart.carousel", d),
              I.on("touchmove.carousel", p),
              I.on("touchend.carousel", f)),
            I.on("mousedown.carousel", d),
            I.on("mousemove.carousel", p),
            I.on("mouseup.carousel", f),
            I.on("mouseleave.carousel", f),
            I.on("click.carousel", function(n) {
              if (j) return n.preventDefault(), n.stopPropagation(), !1;
              if (!t.fullWidth) {
                var i = e(n.target)
                  .closest(".carousel-item")
                  .index();
                0 != a(b) - i && (n.preventDefault(), n.stopPropagation()),
                  u(i);
              }
            }),
            s(m),
            e(this).on("carouselNext", function(e, t, n) {
              void 0 === t && (t = 1),
                "function" == typeof n && (L = n),
                (A = x * Math.round(m / x) + x * t),
                m !== A &&
                  ((S = A - m), (D = Date.now()), requestAnimationFrame(c));
            }),
            e(this).on("carouselPrev", function(e, t, n) {
              void 0 === t && (t = 1),
                "function" == typeof n && (L = n),
                (A = x * Math.round(m / x) - x * t),
                m !== A &&
                  ((S = A - m), (D = Date.now()), requestAnimationFrame(c));
            }),
            e(this).on("carouselSet", function(e, t, n) {
              void 0 === t && (t = 0), "function" == typeof n && (L = n), u(t);
            });
        });
      },
      next: function(t, n) {
        e(this).trigger("carouselNext", [t, n]);
      },
      prev: function(t, n) {
        e(this).trigger("carouselPrev", [t, n]);
      },
      set: function(t, n) {
        e(this).trigger("carouselSet", [t, n]);
      },
      destroy: function() {
        var t = e(this).attr("data-namespace");
        e(this).removeAttr("data-namespace"),
          e(this).removeClass("initialized"),
          e(this)
            .find(".indicators")
            .remove(),
          e(this).off("carouselNext carouselPrev carouselSet"),
          e(window).off("resize.carousel-" + t),
          void 0 !== window.ontouchstart &&
            e(this).off(
              "touchstart.carousel touchmove.carousel touchend.carousel"
            ),
          e(this).off(
            "mousedown.carousel mousemove.carousel mouseup.carousel mouseleave.carousel click.carousel"
          );
      }
    };
    e.fn.carousel = function(n) {
      return t[n]
        ? t[n].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof n && n
        ? void e.error("Method " + n + " does not exist on jQuery.carousel")
        : t.init.apply(this, arguments);
    };
  })(jQuery),
  (function(e) {
    var t = {
      init: function(t) {
        return this.each(function() {
          var n = e("#" + e(this).attr("data-activates")),
            i = (e("body"), e(this)),
            o = i.parent(".tap-target-wrapper"),
            r = o.find(".tap-target-wave"),
            a = o.find(".tap-target-origin"),
            s = i.find(".tap-target-content");
          o.length ||
            (o = i.wrap(e('<div class="tap-target-wrapper"></div>')).parent()),
            s.length ||
              ((s = e('<div class="tap-target-content"></div>')), i.append(s)),
            r.length ||
              ((r = e('<div class="tap-target-wave"></div>')),
              a.length ||
                ((a = n.clone(!0, !0)).addClass("tap-target-origin"),
                a.removeAttr("id"),
                a.removeAttr("style"),
                r.append(a)),
              o.append(r));
          var l = function() {
              o.is(".open") &&
                (o.removeClass("open"),
                a.off("click.tapTarget"),
                e(document).off("click.tapTarget"),
                e(window).off("resize.tapTarget"));
            },
            c = function() {
              var t = "fixed" === n.css("position");
              if (!t)
                for (
                  var a = n.parents(), l = 0;
                  l < a.length && !(t = "fixed" == e(a[l]).css("position"));
                  l++
                );
              var c = n.outerWidth(),
                u = n.outerHeight(),
                d = t
                  ? n.offset().top - e(document).scrollTop()
                  : n.offset().top,
                p = t
                  ? n.offset().left - e(document).scrollLeft()
                  : n.offset().left,
                f = e(window).width(),
                h = e(window).height(),
                v = f / 2,
                g = h / 2,
                m = p <= v,
                y = p > v,
                b = d <= g,
                w = d > g,
                x = p >= 0.25 * f && p <= 0.75 * f,
                k = i.outerWidth(),
                C = i.outerHeight(),
                T = d + u / 2 - C / 2,
                S = p + c / 2 - k / 2,
                A = t ? "fixed" : "absolute",
                E = x ? k : k / 2 + c,
                P = C / 2,
                O = b ? C / 2 : 0,
                D = m && !x ? k / 2 - c : 0,
                M = c,
                j = w ? "bottom" : "top",
                q = 2 * c,
                N = q,
                _ = C / 2 - N / 2,
                L = k / 2 - q / 2,
                I = {};
              (I.top = b ? T : ""),
                (I.right = y ? f - S - k : ""),
                (I.bottom = w ? h - T - C : ""),
                (I.left = m ? S : ""),
                (I.position = A),
                o.css(I),
                s.css({
                  width: E,
                  height: P,
                  top: O,
                  right: 0,
                  bottom: 0,
                  left: D,
                  padding: M,
                  verticalAlign: j
                }),
                r.css({ top: _, left: L, width: q, height: N });
            };
          "open" == t &&
            (c(),
            o.is(".open") ||
              (o.addClass("open"),
              setTimeout(function() {
                a.off("click.tapTarget").on("click.tapTarget", function(e) {
                  l(), a.off("click.tapTarget");
                }),
                  e(document)
                    .off("click.tapTarget")
                    .on("click.tapTarget", function(t) {
                      l(), e(document).off("click.tapTarget");
                    });
                var t = Materialize.throttle(function() {
                  c();
                }, 200);
                e(window)
                  .off("resize.tapTarget")
                  .on("resize.tapTarget", t);
              }, 0))),
            "close" == t && l();
        });
      },
      open: function() {},
      close: function() {}
    };
    e.fn.tapTarget = function(n) {
      if (t[n] || "object" == typeof n) return t.init.apply(this, arguments);
      e.error("Method " + n + " does not exist on jQuery.tap-target");
    };
  })(jQuery);

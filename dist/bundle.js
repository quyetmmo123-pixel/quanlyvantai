(() => {
  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var r;
  var o;
  var e;
  var f;
  var c;
  var s;
  var a;
  var h;
  var p = {};
  var v = [];
  var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var w = Array.isArray;
  function d(n2, l3) {
    for (var u3 in l3) n2[u3] = l3[u3];
    return n2;
  }
  function g(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l3, u3, t3) {
    var i3, r3, o3, e3 = {};
    for (o3 in u3) "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : e3[o3] = u3[o3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
    return m(l3, e3, i3, r3, null);
  }
  function m(n2, t3, i3, r3, o3) {
    var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
    return null == o3 && null != l.vnode && l.vnode(e3), e3;
  }
  function b() {
    return { current: null };
  }
  function k(n2) {
    return n2.children;
  }
  function x(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function S(n2, l3) {
    if (null == l3) return n2.__ ? S(n2.__, n2.__i + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) return u3.__e;
    return "function" == typeof n2.type ? S(n2) : null;
  }
  function C(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
  }
  function $() {
    for (var n2, u3, t3, r3, o3, f3, c3, s3 = 1; i.length; ) i.length > s3 && i.sort(e), n2 = i.shift(), s3 = i.length, n2.__d && (t3 = void 0, r3 = void 0, o3 = (r3 = (u3 = n2).__v).__e, f3 = [], c3 = [], u3.__P && ((t3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(t3), O(u3.__P, t3, r3, u3.__n, u3.__P.namespaceURI, 32 & r3.__u ? [o3] : null, f3, null == o3 ? S(r3) : o3, !!(32 & r3.__u), c3), t3.__v = r3.__v, t3.__.__k[t3.__i] = t3, N(f3, t3, c3), r3.__e = r3.__ = null, t3.__e != o3 && C(t3)));
    $.__r = 0;
  }
  function I(n2, l3, u3, t3, i3, r3, o3, e3, f3, c3, s3) {
    var a3, h3, y3, w4, d3, g4, _3, m3 = t3 && t3.__k || v, b2 = l3.length;
    for (f3 = P(u3, l3, m3, f3, b2), a3 = 0; a3 < b2; a3++) null != (y3 = u3.__k[a3]) && (h3 = -1 == y3.__i ? p : m3[y3.__i] || p, y3.__i = a3, g4 = O(n2, y3, h3, i3, r3, o3, e3, f3, c3, s3), w4 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && B(h3.ref, null, y3), s3.push(y3.ref, y3.__c || w4, y3)), null == d3 && null != w4 && (d3 = w4), (_3 = !!(4 & y3.__u)) || h3.__k === y3.__k ? f3 = A(y3, f3, n2, _3) : "function" == typeof y3.type && void 0 !== g4 ? f3 = g4 : w4 && (f3 = w4.nextSibling), y3.__u &= -7);
    return u3.__e = d3, f3;
  }
  function P(n2, l3, u3, t3, i3) {
    var r3, o3, e3, f3, c3, s3 = u3.length, a3 = s3, h3 = 0;
    for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f3 = r3 + h3, (o3 = n2.__k[r3] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : w(o3) ? m(k, { children: o3 }, null, null, null) : null == o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c3 = o3.__i = L(o3, u3, f3, a3)) && (a3--, (e3 = u3[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f3 && (c3 == f3 - 1 ? h3-- : c3 == f3 + 1 ? h3++ : (c3 > f3 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
    if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = u3[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = S(e3)), D(e3, e3));
    return t3;
  }
  function A(n2, l3, u3, t3) {
    var i3, r3;
    if ("function" == typeof n2.type) {
      for (i3 = n2.__k, r3 = 0; i3 && r3 < i3.length; r3++) i3[r3] && (i3[r3].__ = n2, l3 = A(i3[r3], l3, u3, t3));
      return l3;
    }
    n2.__e != l3 && (t3 && (l3 && n2.type && !l3.parentNode && (l3 = S(n2)), u3.insertBefore(n2.__e, l3 || null)), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function H(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (w(n2) ? n2.some(function(n3) {
      H(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function L(n2, l3, u3, t3) {
    var i3, r3, o3, e3 = n2.key, f3 = n2.type, c3 = l3[u3], s3 = null != c3 && 0 == (2 & c3.__u);
    if (null === c3 && null == n2.key || s3 && e3 == c3.key && f3 == c3.type) return u3;
    if (t3 > (s3 ? 1 : 0)) {
      for (i3 = u3 - 1, r3 = u3 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f3 == c3.type) return o3;
    }
    return -1;
  }
  function T(n2, l3, u3) {
    "-" == l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || y.test(l3) ? u3 : u3 + "px";
  }
  function j(n2, l3, u3, t3, i3) {
    var r3, o3;
    n: if ("style" == l3) if ("string" == typeof u3) n2.style.cssText = u3;
    else {
      if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u3 && l3 in u3 || T(n2.style, l3, "");
      if (u3) for (l3 in u3) t3 && u3[l3] == t3[l3] || T(n2.style, l3, u3[l3]);
    }
    else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == u3 ? "" : u3;
        break n;
      } catch (n3) {
      }
      "function" == typeof u3 || (null == u3 || false === u3 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
    }
  }
  function F(n2) {
    return function(u3) {
      if (this.l) {
        var t3 = this.l[u3.type + n2];
        if (null == u3.t) u3.t = c++;
        else if (u3.t < t3.u) return;
        return t3(l.event ? l.event(u3) : u3);
      }
    };
  }
  function O(n2, u3, t3, i3, r3, o3, e3, f3, c3, s3) {
    var a3, h3, p3, v3, y3, _3, m3, b2, S2, C4, M3, $3, P4, A4, H3, L3, T4, j4 = u3.type;
    if (null != u3.constructor) return null;
    128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
    n: if ("function" == typeof j4) try {
      if (b2 = u3.props, S2 = "prototype" in j4 && j4.prototype.render, C4 = (a3 = j4.contextType) && i3[a3.__c], M3 = a3 ? C4 ? C4.props.value : a3.__ : i3, t3.__c ? m3 = (h3 = u3.__c = t3.__c).__ = h3.__E : (S2 ? u3.__c = h3 = new j4(b2, M3) : (u3.__c = h3 = new x(b2, M3), h3.constructor = j4, h3.render = E), C4 && C4.sub(h3), h3.props = b2, h3.state || (h3.state = {}), h3.context = M3, h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, j4.getDerivedStateFromProps(b2, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u3, p3) S2 && null == j4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (S2 && null == j4.getDerivedStateFromProps && b2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b2, M3), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b2, h3.__s, M3) || u3.__v == t3.__v) {
          for (u3.__v != t3.__v && (h3.props = b2, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), $3 = 0; $3 < h3._sb.length; $3++) h3.__h.push(h3._sb[$3]);
          h3._sb = [], h3.__h.length && e3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(b2, h3.__s, M3), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v3, y3, _3);
        });
      }
      if (h3.context = M3, h3.props = b2, h3.__P = n2, h3.__e = false, P4 = l.__r, A4 = 0, S2) {
        for (h3.state = h3.__s, h3.__d = false, P4 && P4(u3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++) h3.__h.push(h3._sb[H3]);
        h3._sb = [];
      } else do {
        h3.__d = false, P4 && P4(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++A4 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_3 = h3.getSnapshotBeforeUpdate(v3, y3)), L3 = a3, null != a3 && a3.type === k && null == a3.key && (L3 = V(a3.props.children)), f3 = I(n2, w(L3) ? L3 : [L3], u3, t3, i3, r3, o3, e3, f3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (u3.__v = null, c3 || null != o3) if (n3.then) {
        for (u3.__u |= c3 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
        o3[o3.indexOf(f3)] = null, u3.__e = f3;
      } else {
        for (T4 = o3.length; T4--; ) g(o3[T4]);
        z(u3);
      }
      else u3.__e = t3.__e, u3.__k = t3.__k, n3.then || z(u3);
      l.__e(n3, u3, t3);
    }
    else null == o3 && u3.__v == t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : f3 = u3.__e = q(t3.__e, u3, t3, i3, r3, o3, e3, c3, s3);
    return (a3 = l.diffed) && a3(u3), 128 & u3.__u ? void 0 : f3;
  }
  function z(n2) {
    n2 && n2.__c && (n2.__c.__e = true), n2 && n2.__k && n2.__k.forEach(z);
  }
  function N(n2, u3, t3) {
    for (var i3 = 0; i3 < t3.length; i3++) B(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function V(n2) {
    return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w(n2) ? n2.map(V) : d({}, n2);
  }
  function q(u3, t3, i3, r3, o3, e3, f3, c3, s3) {
    var a3, h3, v3, y3, d3, _3, m3, b2 = i3.props, k4 = t3.props, x4 = t3.type;
    if ("svg" == x4 ? o3 = "http://www.w3.org/2000/svg" : "math" == x4 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a3 = 0; a3 < e3.length; a3++) if ((d3 = e3[a3]) && "setAttribute" in d3 == !!x4 && (x4 ? d3.localName == x4 : 3 == d3.nodeType)) {
        u3 = d3, e3[a3] = null;
        break;
      }
    }
    if (null == u3) {
      if (null == x4) return document.createTextNode(k4);
      u3 = document.createElementNS(o3, x4, k4.is && k4), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
    }
    if (null == x4) b2 === k4 || c3 && u3.data == k4 || (u3.data = k4);
    else {
      if (e3 = e3 && n.call(u3.childNodes), b2 = i3.props || p, !c3 && null != e3) for (b2 = {}, a3 = 0; a3 < u3.attributes.length; a3++) b2[(d3 = u3.attributes[a3]).name] = d3.value;
      for (a3 in b2) if (d3 = b2[a3], "children" == a3) ;
      else if ("dangerouslySetInnerHTML" == a3) v3 = d3;
      else if (!(a3 in k4)) {
        if ("value" == a3 && "defaultValue" in k4 || "checked" == a3 && "defaultChecked" in k4) continue;
        j(u3, a3, null, d3, o3);
      }
      for (a3 in k4) d3 = k4[a3], "children" == a3 ? y3 = d3 : "dangerouslySetInnerHTML" == a3 ? h3 = d3 : "value" == a3 ? _3 = d3 : "checked" == a3 ? m3 = d3 : c3 && "function" != typeof d3 || b2[a3] === d3 || j(u3, a3, d3, b2[a3], o3);
      if (h3) c3 || v3 && (h3.__html == v3.__html || h3.__html == u3.innerHTML) || (u3.innerHTML = h3.__html), t3.__k = [];
      else if (v3 && (u3.innerHTML = ""), I("template" == t3.type ? u3.content : u3, w(y3) ? y3 : [y3], t3, i3, r3, "foreignObject" == x4 ? "http://www.w3.org/1999/xhtml" : o3, e3, f3, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
      c3 || (a3 = "value", "progress" == x4 && null == _3 ? u3.removeAttribute("value") : null != _3 && (_3 !== u3[a3] || "progress" == x4 && !_3 || "option" == x4 && _3 != b2[a3]) && j(u3, a3, _3, b2[a3], o3), a3 = "checked", null != m3 && m3 != u3[a3] && j(u3, a3, m3, b2[a3], o3));
    }
    return u3;
  }
  function B(n2, u3, t3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
      } else n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function D(n2, u3, t3) {
    var i3, r3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || B(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount) try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && D(i3[r3], u3, t3 || "function" != typeof n2.type);
    t3 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function E(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function G(u3, t3, i3) {
    var r3, o3, e3, f3;
    t3 == document && (t3 = document.documentElement), l.__ && l.__(u3, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f3 = [], O(t3, u3 = (!r3 && i3 || t3).__k = _(k, null, [u3]), o3 || p, p, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f3), N(e3, u3, f3);
  }
  function J(n2, l3) {
    G(n2, l3, J);
  }
  function K(l3, u3, t3) {
    var i3, r3, o3, e3, f3 = d({}, l3.props);
    for (o3 in l3.type && l3.type.defaultProps && (e3 = l3.type.defaultProps), u3) "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : f3[o3] = void 0 === u3[o3] && null != e3 ? e3[o3] : u3[o3];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), m(l3.type, f3, i3 || l3.key, r3 || l3.ref, null);
  }
  function Q(n2) {
    function l3(n3) {
      var u3, t3;
      return this.getChildContext || (u3 = /* @__PURE__ */ new Set(), (t3 = {})[l3.__c] = this, this.getChildContext = function() {
        return t3;
      }, this.componentWillUnmount = function() {
        u3 = null;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value != n4.value && u3.forEach(function(n5) {
          n5.__e = true, M(n5);
        });
      }, this.sub = function(n4) {
        u3.add(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u3 && u3.delete(n4), l4 && l4.call(n4);
        };
      }), n3.children;
    }
    return l3.__c = "__cC" + h++, l3.__ = n2, l3.Provider = l3.__l = (l3.Consumer = function(n3, l4) {
      return n3.children(l4);
    }).contextType = l3, l3;
  }
  n = v.slice, l = { __e: function(n2, l3, u3, t3) {
    for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
      if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
    } catch (l4) {
      n2 = l4;
    }
    throw n2;
  } }, u = 0, t = function(n2) {
    return null != n2 && null == n2.constructor;
  }, x.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
  }, x.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = l;
  var e2 = c2.__b;
  var a2 = c2.__r;
  var v2 = c2.diffed;
  var l2 = c2.__c;
  var m2 = c2.unmount;
  var s2 = c2.__;
  function p2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
  }
  function d2(n2) {
    return o2 = 1, h2(D2, n2);
  }
  function h2(n2, u3, i3) {
    var o3 = p2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.__f)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i4 = o3.__c.props !== n3;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), c3 && c3.call(this, n3, t3, r3) || i4;
      };
      r2.__f = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function y2(n2, u3) {
    var i3 = p2(t2++, 3);
    !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.u = u3, r2.__H.__h.push(i3));
  }
  function _2(n2, u3) {
    var i3 = p2(t2++, 4);
    !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.u = u3, r2.__h.push(i3));
  }
  function A2(n2) {
    return o2 = 5, T2(function() {
      return { current: n2 };
    }, []);
  }
  function F2(n2, t3, r3) {
    o2 = 6, _2(function() {
      if ("function" == typeof n2) {
        var r4 = n2(t3());
        return function() {
          n2(null), r4 && "function" == typeof r4 && r4();
        };
      }
      if (n2) return n2.current = t3(), function() {
        return n2.current = null;
      };
    }, null == r3 ? r3 : r3.concat(n2));
  }
  function T2(n2, r3) {
    var u3 = p2(t2++, 7);
    return C2(u3.__H, r3) && (u3.__ = n2(), u3.__H = r3, u3.__h = n2), u3.__;
  }
  function q2(n2, t3) {
    return o2 = 8, T2(function() {
      return n2;
    }, t3);
  }
  function x2(n2) {
    var u3 = r2.context[n2.__c], i3 = p2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function P2(n2, t3) {
    c2.useDebugValue && c2.useDebugValue(t3 ? t3(n2) : n2);
  }
  function g2() {
    var n2 = p2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; ) u3 = u3.__;
      var i3 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c2.__e(t3, n2.__v);
    }
  }
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
    })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
      n3.u && (n3.__H = n3.u), n3.u = void 0;
    })), u2 = r2 = null;
  }, c2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t3);
  }, c2.unmount = function(n2) {
    m2 && m2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
  };
  var k2 = "function" == typeof requestAnimationFrame;
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 35);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3) n2[e3] = t3[e3];
    return n2;
  }
  function E2(n2, t3) {
    for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
    for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
    return false;
  }
  function C3(n2, t3) {
    var e3 = t3(), r3 = d2({ t: { __: e3, u: t3 } }), u3 = r3[0].t, o3 = r3[1];
    return _2(function() {
      u3.__ = e3, u3.u = t3, x3(u3) && o3({ t: u3 });
    }, [n2, e3, t3]), y2(function() {
      return x3(u3) && o3({ t: u3 }), n2(function() {
        x3(u3) && o3({ t: u3 });
      });
    }, [n2]), e3;
  }
  function x3(n2) {
    var t3, e3, r3 = n2.u, u3 = n2.__;
    try {
      var o3 = r3();
      return !((t3 = u3) === (e3 = o3) && (0 !== t3 || 1 / t3 == 1 / e3) || t3 != t3 && e3 != e3);
    } catch (n3) {
      return true;
    }
  }
  function R(n2) {
    n2();
  }
  function w3(n2) {
    return n2;
  }
  function k3() {
    return [false, R];
  }
  var I2 = _2;
  function N2(n2, t3) {
    this.props = n2, this.context = t3;
  }
  function M2(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : E2(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, _(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3.type = n2, u3;
  }
  (N2.prototype = new x()).isPureReactComponent = true, N2.prototype.shouldComponentUpdate = function(n2, t3) {
    return E2(this.props, n2) || E2(this.state, t3);
  };
  var T3 = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T3 && T3(n2);
  };
  var A3 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
  function D3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = A3, t3.render = n2, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  var L2 = function(n2, t3) {
    return null == n2 ? null : H(H(n2).map(t3));
  };
  var O2 = { map: L2, forEach: L2, count: function(n2) {
    return n2 ? H(n2).length : 0;
  }, only: function(n2) {
    var t3 = H(n2);
    if (1 !== t3.length) throw "Children.only";
    return t3[0];
  }, toArray: H };
  var F3 = l.__e;
  l.__e = function(n2, t3, e3, r3) {
    if (n2.then) {
      for (var u3, o3 = t3; o3 = o3.__; ) if ((u3 = o3.__c) && u3.__c) return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
    }
    F3(n2, t3, e3, r3);
  };
  var U = l.unmount;
  function V2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c.__e = true, n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return V2(n3, t3, e3);
    })), n2;
  }
  function W(n2, t3, e3) {
    return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return W(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function P3() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function j3(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function z3(n2) {
    var e3, r3, u3;
    function o3(o4) {
      if (e3 || (e3 = n2()).then(function(n3) {
        r3 = n3.default || n3;
      }, function(n3) {
        u3 = n3;
      }), u3) throw u3;
      if (!r3) throw e3;
      return _(r3, o4);
    }
    return o3.displayName = "Lazy", o3.__f = true, o3;
  }
  function B3() {
    this.i = null, this.l = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), U && U(n2);
  }, (P3.prototype = new x()).__c = function(n2, t3) {
    var e3 = t3.__c, r3 = this;
    null == r3.o && (r3.o = []), r3.o.push(e3);
    var u3 = j3(r3.__v), o3 = false, i3 = function() {
      o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
    };
    e3.__R = i3;
    var l3 = function() {
      if (!--r3.__u) {
        if (r3.state.__a) {
          var n3 = r3.state.__a;
          r3.__v.__k[0] = W(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r3.setState({ __a: r3.__b = null }); t4 = r3.o.pop(); ) t4.forceUpdate();
      }
    };
    r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
  }, P3.prototype.componentWillUnmount = function() {
    this.o = [];
  }, P3.prototype.render = function(n2, e3) {
    if (this.__b) {
      if (this.__v.__k) {
        var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
        this.__v.__k[0] = V2(this.__b, r3, o3.__O = o3.__P);
      }
      this.__b = null;
    }
    var i3 = e3.__a && _(k, null, n2.fallback);
    return i3 && (i3.__u &= -33), [_(k, null, e3.__a ? null : n2.children), i3];
  };
  var H2 = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.l.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e3 = n2.i; e3; ) {
      for (; e3.length > 3; ) e3.pop()();
      if (e3[1] < e3[0]) break;
      n2.i = e3 = e3[2];
    }
  };
  function Z(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function Y(n2) {
    var e3 = this, r3 = n2.h;
    if (e3.componentWillUnmount = function() {
      G(null, e3.v), e3.v = null, e3.h = null;
    }, e3.h && e3.h !== r3 && e3.componentWillUnmount(), !e3.v) {
      for (var u3 = e3.__v; null !== u3 && !u3.__m && null !== u3.__; ) u3 = u3.__;
      e3.h = r3, e3.v = { nodeType: 1, parentNode: r3, childNodes: [], __k: { __m: u3.__m }, contains: function() {
        return true;
      }, insertBefore: function(n3, t3) {
        this.childNodes.push(n3), e3.h.insertBefore(n3, t3);
      }, removeChild: function(n3) {
        this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.h.removeChild(n3);
      } };
    }
    G(_(Z, { context: e3.context }, n2.__v), e3.v);
  }
  function $2(n2, e3) {
    var r3 = _(Y, { __v: n2, h: e3 });
    return r3.containerInfo = e3, r3;
  }
  (B3.prototype = new x()).__a = function(n2) {
    var t3 = this, e3 = j3(t3.__v), r3 = t3.l.get(n2);
    return r3[0]++, function(u3) {
      var o3 = function() {
        t3.props.revealOrder ? (r3.push(u3), H2(t3, n2, r3)) : u3();
      };
      e3 ? e3(o3) : o3();
    };
  }, B3.prototype.render = function(n2) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t3 = H(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
    for (var e3 = t3.length; e3--; ) this.l.set(t3[e3], this.i = [1, 0, this.i]);
    return n2.children;
  }, B3.prototype.componentDidUpdate = B3.prototype.componentDidMount = function() {
    var n2 = this;
    this.l.forEach(function(t3, e3) {
      H2(n2, e3, t3);
    });
  };
  var q3 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103;
  var G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var K2 = /[A-Z0-9]/g;
  var Q2 = "undefined" != typeof document;
  var X = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof /* @__PURE__ */ Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
  };
  function nn(n2, t3, e3) {
    return null == t3.__k && (t3.textContent = ""), G(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function tn(n2, t3, e3) {
    return J(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
    Object.defineProperty(x.prototype, t3, { configurable: true, get: function() {
      return this["UNSAFE_" + t3];
    }, set: function(n2) {
      Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
    } });
  });
  var en = l.event;
  function rn() {
  }
  function un() {
    return this.cancelBubble;
  }
  function on() {
    return this.defaultPrevented;
  }
  l.event = function(n2) {
    return en && (n2 = en(n2)), n2.persist = rn, n2.isPropagationStopped = un, n2.isDefaultPrevented = on, n2.nativeEvent = n2;
  };
  var ln;
  var cn = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var fn = l.vnode;
  l.vnode = function(n2) {
    "string" == typeof n2.type && (function(n3) {
      var t3 = n3.props, e3 = n3.type, u3 = {}, o3 = -1 === e3.indexOf("-");
      for (var i3 in t3) {
        var l3 = t3[i3];
        if (!("value" === i3 && "defaultValue" in t3 && null == l3 || Q2 && "children" === i3 && "noscript" === e3 || "class" === i3 || "className" === i3)) {
          var c3 = i3.toLowerCase();
          "defaultValue" === i3 && "value" in t3 && null == t3.value ? i3 = "value" : "download" === i3 && true === l3 ? l3 = "" : "translate" === c3 && "no" === l3 ? l3 = false : "o" === c3[0] && "n" === c3[1] ? "ondoubleclick" === c3 ? i3 = "ondblclick" : "onchange" !== c3 || "input" !== e3 && "textarea" !== e3 || X(t3.type) ? "onfocus" === c3 ? i3 = "onfocusin" : "onblur" === c3 ? i3 = "onfocusout" : J2.test(i3) && (i3 = c3) : c3 = i3 = "oninput" : o3 && G2.test(i3) ? i3 = i3.replace(K2, "-$&").toLowerCase() : null === l3 && (l3 = void 0), "oninput" === c3 && u3[i3 = c3] && (i3 = "oninputCapture"), u3[i3] = l3;
        }
      }
      "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = H(t3.children).forEach(function(n4) {
        n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
      })), "select" == e3 && null != u3.defaultValue && (u3.value = H(t3.children).forEach(function(n4) {
        n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
      })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", cn)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
    })(n2), n2.$$typeof = q3, fn && fn(n2);
  };
  var an = l.__r;
  l.__r = function(n2) {
    an && an(n2), ln = n2.__c;
  };
  var sn = l.diffed;
  l.diffed = function(n2) {
    sn && sn(n2);
    var t3 = n2.props, e3 = n2.__e;
    null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), ln = null;
  };
  var hn = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
    return ln.__n[n2.__c].props.value;
  }, useCallback: q2, useContext: x2, useDebugValue: P2, useDeferredValue: w3, useEffect: y2, useId: g2, useImperativeHandle: F2, useInsertionEffect: I2, useLayoutEffect: _2, useMemo: T2, useReducer: h2, useRef: A2, useState: d2, useSyncExternalStore: C3, useTransition: k3 } } };
  function dn(n2) {
    return _.bind(null, n2);
  }
  function mn(n2) {
    return !!n2 && n2.$$typeof === q3;
  }
  function pn(n2) {
    return mn(n2) && n2.type === k;
  }
  function yn(n2) {
    return !!n2 && !!n2.displayName && ("string" == typeof n2.displayName || n2.displayName instanceof String) && n2.displayName.startsWith("Memo(");
  }
  function _n(n2) {
    return mn(n2) ? K.apply(null, arguments) : n2;
  }
  function bn(n2) {
    return !!n2.__k && (G(null, n2), true);
  }
  function Sn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  var gn = function(n2, t3) {
    return n2(t3);
  };
  var En = function(n2, t3) {
    return n2(t3);
  };
  var Cn = k;
  var xn = mn;
  var Rn = { useState: d2, useId: g2, useReducer: h2, useEffect: y2, useLayoutEffect: _2, useInsertionEffect: I2, useTransition: k3, useDeferredValue: w3, useSyncExternalStore: C3, startTransition: R, useRef: A2, useImperativeHandle: F2, useMemo: T2, useCallback: q2, useContext: x2, useDebugValue: P2, version: "18.3.1", Children: O2, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $2, createElement: _, createContext: Q, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k, isValidElement: mn, isElement: xn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: x, PureComponent: N2, memo: M2, forwardRef: D3, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P3, SuspenseList: B3, lazy: z3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/compat/client.mjs
  function createRoot(container) {
    return {
      // eslint-disable-next-line
      render: function(children) {
        nn(children, container);
      },
      // eslint-disable-next-line
      unmount: function() {
        bn(container);
      }
    };
  }
  function hydrateRoot(container, children) {
    tn(children, container);
    return createRoot(container);
  }
  var client_default = {
    createRoot,
    hydrateRoot
  };

  // src/data/mockData.ts
  var INITIAL_VEHICLES = [
    {
      id: "V-01",
      plateNumber: "15H-028.66",
      trailerPlate: "15R-012.89",
      model: "Chenglong H7 440HP",
      type: "CONTAINER_40FT",
      maxPayloadTons: 32,
      currentPayloadTons: 26.5,
      utilizationRate: 82.8,
      status: "IN_TRANSIT",
      driverId: "D-01",
      driverName: "Nguy\u1EC5n V\u0103n D\u0169ng",
      driverPhone: "0912.456.789",
      currentLocation: "Km 58, Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng (G\u1EA7n n\xFAt giao B\xECnh Giang)",
      destination: "Kho Samsung Electronics - KCN Y\xEAn Phong, B\u1EAFc Ninh",
      speedKmh: 78,
      fuelPercent: 68,
      odometerKm: 184520,
      portWaitMinutes: 15,
      stdFuelPer100Km: 35.5,
      registrationExpiry: "2027-04-15",
      insuranceExpiry: "2027-05-20",
      lastServiceOdo: 175e3,
      nextServiceOdo: 185e3,
      activeOrderId: "DH-8091"
    },
    {
      id: "V-02",
      plateNumber: "15H-019.52",
      trailerPlate: "15R-018.33",
      model: "Hyundai Xcient 440PS",
      type: "CONTAINER_40FT",
      maxPayloadTons: 32,
      currentPayloadTons: 0,
      utilizationRate: 0,
      status: "EMPTY_RUN",
      driverId: "D-02",
      driverName: "Tr\u1EA7n \u0110\xECnh Tr\u1ECDng",
      driverPhone: "0983.112.334",
      currentLocation: "KCN Y\xEAn Phong (\u0110\xE3 d\u1EE1 h\xE0ng xong t\u1EA1i Kho Logistics s\u1ED1 2)",
      destination: "Ch\u1EDD l\u1EC7nh gh\xE9p \u0111\u01A1n chi\u1EC1u v\u1EC1 v\u1EC1 H\u1EA3i Ph\xF2ng",
      speedKmh: 0,
      fuelPercent: 54,
      odometerKm: 215340,
      portWaitMinutes: 20,
      stdFuelPer100Km: 26,
      registrationExpiry: "2027-08-10",
      insuranceExpiry: "2027-09-05",
      lastServiceOdo: 21e4,
      nextServiceOdo: 22e4
    },
    {
      id: "V-03",
      plateNumber: "15C-229.80",
      trailerPlate: "15R-009.61",
      model: "Dongfeng KL 420HP",
      type: "CONTAINER_40FT",
      maxPayloadTons: 31.5,
      currentPayloadTons: 28,
      utilizationRate: 88.9,
      status: "BOTTLENECK",
      driverId: "D-03",
      driverName: "Ph\u1EA1m Qu\u1ED1c Huy",
      driverPhone: "0904.778.899",
      currentLocation: "C\u1ED5ng B2, C\u1EA3ng T\xE2n V\u0169 - \u0110\xECnh V\u0169, H\u1EA3i Ph\xF2ng",
      destination: "Ch\u1EDD th\u1EE7 t\u1EE5c ki\u1EC3m h\xF3a h\u1EA3i quan & h\u1EA1 v\u1ECF container",
      speedKmh: 0,
      fuelPercent: 42,
      odometerKm: 168900,
      portWaitMinutes: 145,
      // Vượt ngưỡng 90 phút -> Cảnh báo nghẽn
      stdFuelPer100Km: 36,
      registrationExpiry: "2027-02-28",
      insuranceExpiry: "2027-03-15",
      lastServiceOdo: 16e4,
      nextServiceOdo: 17e4,
      activeOrderId: "DH-8088"
    },
    {
      id: "V-04",
      plateNumber: "15C-338.19",
      model: "Hino 500 FL8J (Th\xF9ng k\xEDn 3 ch\xE2n)",
      type: "TRUCK_15T",
      maxPayloadTons: 15,
      currentPayloadTons: 5.8,
      utilizationRate: 38.7,
      status: "LOADING_PORT",
      driverId: "D-04",
      driverName: "V\u0169 V\u0103n Th\u1EAFng",
      driverPhone: "0977.345.612",
      currentLocation: "Kho ngo\u1EA1i quan C\u1EA3ng \u0110\xECnh V\u0169, H\u1EA3i Ph\xF2ng",
      destination: "KCN Qu\u1EBF V\xF5 & KCN Y\xEAn Phong (\u0110ang \u0111\u1EC1 xu\u1EA5t gh\xE9p LTL)",
      speedKmh: 0,
      fuelPercent: 82,
      odometerKm: 98450,
      portWaitMinutes: 45,
      stdFuelPer100Km: 23.5,
      registrationExpiry: "2027-11-20",
      insuranceExpiry: "2027-12-01",
      lastServiceOdo: 9e4,
      nextServiceOdo: 1e5,
      activeOrderId: "DH-8095"
    },
    {
      id: "V-05",
      plateNumber: "15C-188.42",
      trailerPlate: "15R-008.21",
      model: "Howo Sitrak T7H 440HP",
      type: "CONTAINER_40FT",
      maxPayloadTons: 32.5,
      currentPayloadTons: 0,
      utilizationRate: 0,
      status: "MAINTENANCE",
      driverId: "D-05",
      driverName: "B\xF9i Thanh T\xF9ng",
      driverPhone: "0936.554.218",
      currentLocation: "X\u01B0\u1EDFng d\u1ECBch v\u1EE5 k\u1EF9 thu\u1EADt NNP - \u0110\u01B0\u1EDDng 356 \u0110\xECnh V\u0169",
      destination: "B\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3 200.000 km & \u0111\u0103ng ki\u1EC3m",
      speedKmh: 0,
      fuelPercent: 30,
      odometerKm: 200150,
      portWaitMinutes: 0,
      stdFuelPer100Km: 35,
      registrationExpiry: "2026-11-19",
      // CÒN 6 NGÀY HẾT HẠN ĐĂNG KIỂM!
      insuranceExpiry: "2026-11-25",
      lastServiceOdo: 18e4,
      nextServiceOdo: 2e5
    },
    {
      id: "V-06",
      plateNumber: "15H-031.95",
      trailerPlate: "15R-015.44",
      model: "Isuzu Giga 420HP",
      type: "CONTAINER_20FT",
      maxPayloadTons: 26,
      currentPayloadTons: 24.2,
      utilizationRate: 93.1,
      status: "IN_TRANSIT",
      driverId: "D-06",
      driverName: "\u0110\u1EB7ng H\u1EA3i \u0110\u0103ng",
      driverPhone: "0915.890.123",
      currentLocation: "Km 24, QL5 k\xE9o d\xE0i (G\u1EA7n ICD Ti\xEAn S\u01A1n, B\u1EAFc Ninh)",
      destination: "C\u1EA3ng Qu\u1ED1c t\u1EBF L\u1EA1ch Huy\u1EC7n (TC-HICT)",
      speedKmh: 64,
      fuelPercent: 75,
      odometerKm: 142100,
      portWaitMinutes: 10,
      stdFuelPer100Km: 32,
      registrationExpiry: "2027-06-30",
      insuranceExpiry: "2027-07-15",
      lastServiceOdo: 135e3,
      nextServiceOdo: 145e3,
      activeOrderId: "DH-8089"
    },
    {
      id: "V-07",
      plateNumber: "15C-278.55",
      model: "Isuzu Forward FVR (Th\xF9ng mui b\u1EA1t 8 t\u1EA5n)",
      type: "TRUCK_8T",
      maxPayloadTons: 8,
      currentPayloadTons: 0,
      utilizationRate: 0,
      status: "AVAILABLE",
      driverId: "D-07",
      driverName: "Ho\xE0ng Minh Tu\u1EA5n",
      driverPhone: "0988.432.190",
      currentLocation: "B\xE3i \u0111\u1ED7 xe NNP Logistics - Km 5 Nguy\u1EC5n B\u1EC9nh Khi\xEAm, H\u1EA3i Ph\xF2ng",
      destination: "S\u1EB5n s\xE0ng nh\u1EADn l\u1EC7nh \u0111i\u1EC1u \u0111\u1ED9ng",
      speedKmh: 0,
      fuelPercent: 90,
      odometerKm: 76200,
      portWaitMinutes: 0,
      stdFuelPer100Km: 17.5,
      registrationExpiry: "2027-09-12",
      insuranceExpiry: "2027-10-05",
      lastServiceOdo: 7e4,
      nextServiceOdo: 8e4
    },
    {
      id: "V-08",
      plateNumber: "15H-052.77",
      trailerPlate: "15R-022.08",
      model: "Chenglong H7 440HP",
      type: "CONTAINER_40FT",
      maxPayloadTons: 32,
      currentPayloadTons: 29.8,
      utilizationRate: 93.1,
      status: "IN_TRANSIT",
      driverId: "D-08",
      driverName: "L\u01B0\u01A1ng Cao C\u01B0\u1EDDng",
      driverPhone: "0903.654.321",
      currentLocation: "Km 82, Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng (\u0110\u1ECBa ph\u1EADn H\u1EA3i D\u01B0\u01A1ng)",
      destination: "KCN \u0110\xE0i T\u01B0 - Long Bi\xEAn, H\xE0 N\u1ED9i",
      speedKmh: 80,
      fuelPercent: 62,
      odometerKm: 132400,
      portWaitMinutes: 12,
      stdFuelPer100Km: 35,
      registrationExpiry: "2027-05-18",
      insuranceExpiry: "2027-06-10",
      lastServiceOdo: 125e3,
      nextServiceOdo: 135e3,
      activeOrderId: "DH-8093"
    }
  ];
  var INITIAL_ORDERS = [
    {
      id: "DH-8091",
      trackingCode: "NNP-2026-8891",
      customerName: "C\xF4ng ty TNHH Samsung Electronics Vi\u1EC7t Nam (SEV)",
      customerPhone: "0222.369.8888",
      pickupPoint: "C\u1EA3ng \u0110\xECnh V\u0169 - B\u1EBFn s\u1ED1 2, H\u1EA3i Ph\xF2ng",
      deliveryPoint: "Kho Logistics SEV, KCN Y\xEAn Phong, B\u1EAFc Ninh",
      cargoType: "Linh ki\u1EC7n m\xE0n h\xECnh OLED & vi m\u1EA1ch cao c\u1EA5p",
      weightTons: 26.5,
      volumeCbm: 68,
      requiredVehicleType: "CONTAINER_40FT",
      status: "IN_TRANSIT",
      assignedVehiclePlate: "15H-028.66",
      assignedDriverName: "Nguy\u1EC5n V\u0103n D\u0169ng",
      pickupTime: "13:30 13/11/2026",
      etaDelivery: "17:15 13/11/2026",
      distanceKm: 125,
      freightPriceVnd: 58e5,
      isBackhaul: false
    },
    {
      id: "DH-8095",
      trackingCode: "NNP-2026-8895",
      customerName: "C\xF4ng ty CP Nh\u1EF1a R\u1EA1ng \u0110\xF4ng Chi nh\xE1nh B\u1EAFc Ninh",
      customerPhone: "0913.234.567",
      pickupPoint: "Kho Ngo\u1EA1i quan C\u1EA3ng \u0110\xECnh V\u0169, H\u1EA3i Ph\xF2ng",
      deliveryPoint: "KCN Qu\u1EBF V\xF5 1, B\u1EAFc Ninh",
      cargoType: "H\u1EA1t nh\u1EF1a nguy\xEAn sinh Polypropylene (PP)",
      weightTons: 5.8,
      volumeCbm: 14,
      requiredVehicleType: "TRUCK_15T",
      status: "LOADING",
      assignedVehiclePlate: "15C-338.19",
      assignedDriverName: "V\u0169 V\u0103n Th\u1EAFng",
      pickupTime: "14:00 13/11/2026",
      etaDelivery: "18:30 13/11/2026",
      distanceKm: 115,
      freightPriceVnd: 29e5,
      isLtlConsolidated: false
    },
    {
      id: "DH-8096",
      trackingCode: "NNP-2026-8896",
      customerName: "C\xF4ng ty TNHH Bao b\xEC Kim lo\u1EA1i Pegatron Vi\u1EC7t Nam",
      customerPhone: "0978.112.233",
      pickupPoint: "C\u1EA3ng Ch\xF9a V\u1EBD - Kho CFS s\u1ED1 3, H\u1EA3i Ph\xF2ng",
      deliveryPoint: "KCN Y\xEAn Phong 2, B\u1EAFc Ninh",
      cargoType: "Cu\u1ED9n thi\u1EBFc & nh\xF4m l\xE1 m\u1ECFng \u0111\xF3ng pallet",
      weightTons: 8.4,
      volumeCbm: 18,
      requiredVehicleType: "TRUCK_15T",
      status: "PENDING",
      pickupTime: "15:00 13/11/2026",
      etaDelivery: "19:45 13/11/2026",
      distanceKm: 120,
      freightPriceVnd: 34e5,
      isLtlConsolidated: false
    },
    {
      id: "DH-8098",
      trackingCode: "NNP-2026-8898",
      customerName: "T\u1EADp \u0111o\xE0n D\u1EC7t may Qu\u1ED1c t\u1EBF Crystal Martin",
      customerPhone: "0934.889.900",
      pickupPoint: "Nh\xE0 m\xE1y Crystal Martin - KCN Quang Ch\xE2u, B\u1EAFc Giang (gi\xE1p B\u1EAFc Ninh)",
      deliveryPoint: "C\u1EA3ng Qu\u1ED1c t\u1EBF L\u1EA1ch Huy\u1EC7n (TC-HICT) - H\u1EA3i Ph\xF2ng",
      cargoType: "Qu\u1EA7n \xE1o th\u1EDDi trang xu\u1EA5t kh\u1EA9u \u0111\xF3ng Cont 40ft \u0111i b\u1EDD T\xE2y M\u1EF9",
      weightTons: 22,
      volumeCbm: 65,
      requiredVehicleType: "CONTAINER_40FT",
      status: "PENDING",
      pickupTime: "16:00 13/11/2026",
      etaDelivery: "20:30 13/11/2026",
      distanceKm: 128,
      freightPriceVnd: 54e5,
      isBackhaul: true
      // Ứng viên ghép hàng chiều về cho xe 15H-019.52!
    },
    {
      id: "DH-8089",
      trackingCode: "NNP-2026-8889",
      customerName: "C\xF4ng ty TNHH T\xF4n Hoa Sen Chi nh\xE1nh H\u1EA3i D\u01B0\u01A1ng",
      customerPhone: "0220.389.1234",
      pickupPoint: "ICD Ti\xEAn S\u01A1n, B\u1EAFc Ninh",
      deliveryPoint: "C\u1EA3ng Qu\u1ED1c t\u1EBF L\u1EA1ch Huy\u1EC7n (TC-HICT)",
      cargoType: "Cu\u1ED9n th\xE9p c\xE1n ngu\u1ED9i xu\u1EA5t kh\u1EA9u",
      weightTons: 24.2,
      volumeCbm: 25,
      requiredVehicleType: "CONTAINER_20FT",
      status: "IN_TRANSIT",
      assignedVehiclePlate: "15H-031.95",
      assignedDriverName: "\u0110\u1EB7ng H\u1EA3i \u0110\u0103ng",
      pickupTime: "11:00 13/11/2026",
      etaDelivery: "15:30 13/11/2026",
      distanceKm: 110,
      freightPriceVnd: 46e5,
      isBackhaul: true
    },
    {
      id: "DH-8088",
      trackingCode: "NNP-2026-8888",
      customerName: "C\xF4ng ty TNHH Lotte Chemical Vi\u1EC7t Nam",
      customerPhone: "024.382.9900",
      pickupPoint: "C\u1EA3ng T\xE2n V\u0169 - C\u1EA7u 1, \u0110\xECnh V\u0169",
      deliveryPoint: "KCN Ph\u1ED1 N\u1ED1i A, H\u01B0ng Y\xEAn",
      cargoType: "H\u1EA1t nh\u1EF1a Compound k\u1EF9 thu\u1EADt cao",
      weightTons: 28,
      volumeCbm: 60,
      requiredVehicleType: "CONTAINER_40FT",
      status: "LOADING",
      assignedVehiclePlate: "15C-229.80",
      assignedDriverName: "Ph\u1EA1m Qu\u1ED1c Huy",
      pickupTime: "12:00 13/11/2026",
      etaDelivery: "16:45 13/11/2026",
      distanceKm: 85,
      freightPriceVnd: 42e5,
      isBackhaul: false
    },
    {
      id: "DH-8082",
      trackingCode: "NNP-2026-8882",
      customerName: "C\xF4ng ty TNHH LG Display Vi\u1EC7t Nam H\u1EA3i Ph\xF2ng",
      customerPhone: "0225.883.1000",
      pickupPoint: "KCN Tr\xE0ng Du\u1EC7, H\u1EA3i Ph\xF2ng",
      deliveryPoint: "Kho Trung chuy\u1EC3n ICD M\u1EF9 \u0110\xECnh, H\xE0 N\u1ED9i",
      cargoType: "M\xF4-\u0111un hi\u1EC3n th\u1ECB t\u1EF1 \u0111\u1ED9ng h\xF3a",
      weightTons: 14.5,
      volumeCbm: 40,
      requiredVehicleType: "TRUCK_15T",
      status: "DELIVERED",
      assignedVehiclePlate: "15C-341.20",
      assignedDriverName: "Tr\u1EA7n V\u0103n Ki\xEAn",
      pickupTime: "07:30 13/11/2026",
      etaDelivery: "11:30 13/11/2026",
      distanceKm: 110,
      freightPriceVnd: 38e5,
      isBackhaul: false,
      epodSignedAt: "11:42 13/11/2026",
      epodSignerName: "L\xEA V\u0103n Tu\u1EA5n (Th\u1EE7 kho ICD M\u1EF9 \u0110\xECnh)",
      epodNotes: "Ki\u1EC3m \u0111\u1EBFm 24 pallet nguy\xEAn seal ch\xEC, h\xE0ng h\xF3a nguy\xEAn v\u1EB9n \u0111\u1EA1t y\xEAu c\u1EA7u."
    }
  ];
  var INITIAL_SMART_SUGGESTIONS = [
    {
      id: "SUGG-01",
      type: "LTL_MERGE",
      title: "Gom \u0111\u01A1n l\u1EBB (LTL) c\xF9ng h\xE0nh lang H\u1EA3i Ph\xF2ng - B\u1EAFc Ninh",
      description: "Gh\xE9p \u0111\u01A1n #DH-8095 (5.8 t\u1EA5n - R\u1EA1ng \u0110\xF4ng) v\xE0 \u0111\u01A1n ch\u1EDD #DH-8096 (8.4 t\u1EA5n - Pegatron) v\xE0o xe t\u1EA3i 15T (15C-338.19). Gi\xFAp l\u1EA5p \u0111\u1EA7y 94.7% t\u1EA3i tr\u1ECDng th\xF9ng xe thay v\xEC ch\u1EC9 ch\u1EA1y 38.7%!",
      targetVehiclePlate: "15C-338.19",
      matchedOrderIds: ["DH-8095", "DH-8096"],
      originalCapacityPct: 38.7,
      optimizedCapacityPct: 94.7,
      deadheadKmSaved: 115,
      costSavedVnd: 215e4,
      revenueAddedVnd: 34e5,
      pickupRoute: "C\u1EA3ng \u0110\xECnh V\u0169 (l\u1EA5y \u0110\u01A1n 1) -> C\u1EA3ng Ch\xF9a V\u1EBD (+3.5km, l\u1EA5y \u0110\u01A1n 2) -> Cao t\u1ED1c 5B -> KCN Qu\u1EBF V\xF5 -> KCN Y\xEAn Phong",
      isApplied: false
    },
    {
      id: "SUGG-02",
      type: "BACKHAUL_MATCH",
      title: "G\u1EE3i \xFD \u0111\u01A1n h\xE0ng chi\u1EC1u v\u1EC1 (Backhaul): B\u1EAFc Ninh -> C\u1EA3ng L\u1EA1ch Huy\u1EC7n",
      description: "Xe \u0111\u1EA7u k\xE9o 15H-019.52 v\u1EEBa h\u1EA1 h\xE0ng t\u1EA1i KCN Y\xEAn Phong, s\u1EAFp ch\u1EA1y r\u1ED7ng 118km v\u1EC1 H\u1EA3i Ph\xF2ng. H\u1EC7 th\u1ED1ng ph\xE1t hi\u1EC7n \u0111\u01A1n h\xE0ng xu\u1EA5t kh\u1EA9u #DH-8098 (Crystal Martin - 22 t\u1EA5n) t\u1EA1i B\u1EAFc Giang (c\xE1ch ch\u1EC9 14km) c\u1EA7n xe \u0111\xF3ng cont v\u1EC1 C\u1EA3ng L\u1EA1ch Huy\u1EC7n!",
      targetVehiclePlate: "15H-019.52",
      matchedOrderIds: ["DH-8098"],
      originalCapacityPct: 0,
      optimizedCapacityPct: 68.8,
      deadheadKmSaved: 118,
      costSavedVnd: 185e4,
      revenueAddedVnd: 54e5,
      pickupRoute: "KCN Y\xEAn Phong -> Di chuy\u1EC3n r\u1ED7ng 14km qua c\u1EA7u \u0110\xE1p C\u1EA7u sang KCN Quang Ch\xE2u \u0111\xF3ng h\xE0ng -> Theo QL18 & Cao t\u1ED1c HN-HP v\u1EC1 C\u1EA3ng L\u1EA1ch Huy\u1EC7n",
      isApplied: false
    }
  ];
  var INITIAL_BOTTLENECK_ALERTS = [
    {
      id: "BN-01",
      vehiclePlate: "15C-229.80",
      driverName: "Ph\u1EA1m Qu\u1ED1c Huy",
      driverPhone: "0904.778.899",
      location: "C\u1ED5ng B2, C\u1EA3ng T\xE2n V\u0169 - \u0110\xECnh V\u0169, H\u1EA3i Ph\xF2ng",
      waitDurationMinutes: 145,
      thresholdMinutes: 90,
      severity: "CRITICAL",
      reason: "\xD9n t\u1EAFc c\u1EE5c b\u1ED9 t\u1EA1i b\xE3i ki\u1EC3m h\xF3a container s\u1ED1 4 do h\u1EC7 th\u1ED1ng h\u1EA3i quan \u0111i\u1EC7n t\u1EED VNACCS ch\u1EADm ph\u1EA3n h\u1ED3i."
    },
    {
      id: "BN-02",
      vehiclePlate: "15H-034.12",
      driverName: "Nguy\u1EC5n V\u0103n M\u1EA1nh",
      driverPhone: "0912.889.334",
      location: "Tr\u1EA1m d\u1EEBng ngh\u1EC9 Km 52 QL5A (\u0110\u1ECBa ph\u1EADn Kim Th\xE0nh, H\u1EA3i D\u01B0\u01A1ng)",
      waitDurationMinutes: 68,
      thresholdMinutes: 45,
      severity: "WARNING",
      reason: "Xe d\u1EEBng \u0111\u1ED7 v\u01B0\u1EE3t qu\xE1 th\u1EDDi gian ngh\u1EC9 quy \u0111\u1ECBnh c\u1EE7a h\xE0nh tr\xECnh tuy\u1EBFn H\u1EA3i Ph\xF2ng - H\xE0 N\u1ED9i."
    }
  ];
  var INITIAL_DISPATCH_ORDER = {
    id: "L\u0110-2026-089",
    orderId: "DH-8091",
    vehiclePlate: "15H-028.66",
    trailerPlate: "15R-012.89",
    driverName: "Nguy\u1EC5n V\u0103n D\u0169ng",
    driverPhone: "0912.456.789",
    pickupPoint: "C\u1EA3ng \u0110\xECnh V\u0169 - B\u1EBFn C\u1EA7u C\u1EA3ng s\u1ED1 2, H\u1EA3i Ph\xF2ng",
    deliveryPoint: "Kho Logistics SEV, KCN Y\xEAn Phong, B\u1EAFc Ninh",
    cargoType: "Linh ki\u1EC7n m\xE0n h\xECnh OLED & vi m\u1EA1ch cao c\u1EA5p (Cont 40ft)",
    weightTons: 26.5,
    sealNumber: "NNP-SEAL-88910",
    optimalRoute: "C\u1EA3ng \u0110\xECnh V\u0169 -> \u0110\u01B0\u1EDDng 356 -> N\xFAt giao \u0110\xECnh V\u0169 l\xEAn Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng (CT04) -> N\xFAt giao Y\xEAn M\u1EF9 (H\u01B0ng Y\xEAn) r\u1EBD QL39A/V\xE0nh \u0111ai 4 -> Cao t\u1ED1c H\xE0 N\u1ED9i - B\u1EAFc Giang -> KCN Y\xEAn Phong (125 km - 2h15p)",
    tollFeeEstimateVnd: 41e4,
    distanceKm: 125,
    eta: "17:15 13/11/2026",
    currentStep: 3,
    // 3: Đang vận chuyển
    stepTimestamps: {
      step1: "13:05 13/11/2026 (T\xE0i x\u1EBF x\xE1c nh\u1EADn nh\u1EADn l\u1EC7nh)",
      step2: "13:42 13/11/2026 (Check-in C\u1ED5ng C\u1EA3ng \u0110\xECnh V\u0169 & ho\xE0n t\u1EA5t k\u1EB9p ch\xEC seal)",
      step3: "14:20 13/11/2026 (Xu\u1EA5t ph\xE1t l\u0103n b\xE1nh cao t\u1ED1c 5B)"
    }
  };
  var INITIAL_FUEL_LOGS = [
    {
      id: "FL-201",
      vehiclePlate: "15H-028.66",
      driverName: "Nguy\u1EC5n V\u0103n D\u0169ng",
      date: "13/11/2026 08:30",
      stationName: "C\u1EEDa h\xE0ng X\u0103ng d\u1EA7u Petrolimex S\u1ED1 14 - C\u1EA3ng Ch\xF9a V\u1EBD",
      liters: 160,
      amountVnd: 352e4,
      odometerKm: 184420,
      receiptNote: "\u0110\u1ED5 d\u1EA7u Diesel 0.05S-II tr\u01B0\u1EDBc khi v\xE0o c\u1EA3ng nh\u1EADn cont",
      status: "APPROVED"
    },
    {
      id: "FL-202",
      vehiclePlate: "15C-229.80",
      driverName: "Ph\u1EA1m Qu\u1ED1c Huy",
      date: "12/11/2026 19:15",
      stationName: "Tr\u1EA1m X\u0103ng d\u1EA7u PVOIL Km 48 Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng",
      liters: 210,
      amountVnd: 462e4,
      odometerKm: 168650,
      receiptNote: "N\u1EA1p nhi\xEAn li\u1EC7u b\u1ED5 sung chi\u1EC1u ch\u1EA1y H\u1EA3i H\u01B0ng",
      status: "FLAGGED"
    },
    {
      id: "FL-203",
      vehiclePlate: "15H-031.95",
      driverName: "\u0110\u1EB7ng H\u1EA3i \u0110\u0103ng",
      date: "12/11/2026 14:00",
      stationName: "Petrolimex Tr\u1EA1m 23 - KCN Ti\xEAn S\u01A1n B\u1EAFc Ninh",
      liters: 135,
      amountVnd: 297e4,
      odometerKm: 141980,
      receiptNote: "\u0110\u1ED5 chu\u1EA9n b\u1ECB k\xE9o chuy\u1EBFn h\xE0ng cu\u1ED9n th\xE9p v\u1EC1 L\u1EA1ch Huy\u1EC7n",
      status: "APPROVED"
    }
  ];
  var INITIAL_FUEL_AUDITS = [
    {
      id: "FA-101",
      vehiclePlate: "15H-028.66",
      driverName: "Nguy\u1EC5n V\u0103n D\u0169ng",
      tripRoute: "C\u1EA3ng \u0110\xECnh V\u0169 - KCN Y\xEAn Phong (Kh\u1EE9 h\u1ED3i)",
      distanceKm: 250,
      cargoTons: 26.5,
      stdRatePer100Km: 35.5,
      stdFuelLiters: 88.8,
      actualFuelLiters: 84.2,
      varianceLiters: -4.6,
      variancePct: -5.2,
      alertLevel: "SAVED",
      note: "L\xE1i xe duy tr\xEC d\u1EA3i t\u1ED1c \u0111\u1ED9 kinh t\u1EBF 70-75 km/h tr\xEAn cao t\u1ED1c, ti\u1EBFt ki\u1EC7m 4.6 l\xEDt d\u1EA7u so v\u1EDBi \u0111\u1ECBnh m\u1EE9c"
    },
    {
      id: "FA-102",
      vehiclePlate: "15C-229.80",
      driverName: "Ph\u1EA1m Qu\u1ED1c Huy",
      tripRoute: "C\u1EA3ng T\xE2n V\u0169 - KCN Ph\u1ED1 N\u1ED1i A",
      distanceKm: 170,
      cargoTons: 28,
      stdRatePer100Km: 36,
      stdFuelLiters: 61.2,
      actualFuelLiters: 69.8,
      varianceLiters: 8.6,
      variancePct: 14.1,
      alertLevel: "HIGH_ALERT",
      note: "V\u01AF\u1EE2T \u0110\u1ECANH M\u1EE8C +14.1%: Do n\u1ED5 m\xE1y ch\u1EDD \u0111i\u1EC1u h\xF2a trong b\xE3i c\u1EA3ng 145 ph\xFAt khi \xE1ch t\u1EAFc v\xE0 ch\u1EA1y v\xF2ng n\xE9 tr\u1EA1m c\xE2n"
    },
    {
      id: "FA-103",
      vehiclePlate: "15H-031.95",
      driverName: "\u0110\u1EB7ng H\u1EA3i \u0110\u0103ng",
      tripRoute: "ICD Ti\xEAn S\u01A1n - C\u1EA3ng Qu\u1ED1c t\u1EBF L\u1EA1ch Huy\u1EC7n",
      distanceKm: 110,
      cargoTons: 24.2,
      stdRatePer100Km: 32,
      stdFuelLiters: 35.2,
      actualFuelLiters: 35.6,
      varianceLiters: 0.4,
      variancePct: 1.1,
      alertLevel: "NORMAL",
      note: "Ti\xEAu hao trong bi\xEAn \u0111\u1ED9 dung sai cho ph\xE9p (\xB13%)"
    },
    {
      id: "FA-104",
      vehiclePlate: "15C-338.19",
      driverName: "V\u0169 V\u0103n Th\u1EAFng",
      tripRoute: "Kho \u0110\xECnh V\u0169 - KCN Qu\u1EBF V\xF5 - Y\xEAn Phong",
      distanceKm: 135,
      cargoTons: 14.2,
      stdRatePer100Km: 23.5,
      stdFuelLiters: 31.7,
      actualFuelLiters: 30.5,
      varianceLiters: -1.2,
      variancePct: -3.8,
      alertLevel: "SAVED",
      note: "Chuy\u1EBFn xe gh\xE9p LTL th\xE0nh c\xF4ng, ti\xEAu hao tr\xEAn m\u1ED7i t\u1EA5n.km gi\u1EA3m 42%"
    }
  ];
  var MOCK_KPI_DATA = {
    fleetOperationalRate: 91.7,
    // Tỷ lệ xe vận doanh: 44/48 xe đang lăn bánh (mục tiêu >88%)
    payloadUtilizationGamma: 84.6,
    // Hệ số sử dụng trọng tải bình quân gamma (%)
    loadedDistanceBeta: 78.5,
    // Hệ số sử dụng quãng đường có hàng beta (%)
    totalTonKm: 1428500,
    // Tổng sản lượng Tấn.km trong tháng
    totalRevenueVnd: 342e7,
    // Doanh thu tháng: 3.42 tỷ đồng
    totalFuelCostVnd: 10773e5,
    // Chi phí nhiên liệu: 1.077 tỷ đồng (31.5% doanh thu)
    emptyRunPct: 21.5,
    // Tỷ lệ chạy rỗng: chỉ còn 21.5% (giảm mạnh từ 38%)
    fuelSavedLiters: 4850,
    // Tiết kiệm 4,850 lít dầu/tháng nhờ ghép hàng & giảm chạy rỗng
    monthlyComparison: [
      { month: "T06/2026", revenueMil: 2850, fuelCostMil: 1040, emptyRunPct: 37.2, tonKmK: 1120 },
      { month: "T07/2026", revenueMil: 2980, fuelCostMil: 1060, emptyRunPct: 34.8, tonKmK: 1190 },
      { month: "T08/2026", revenueMil: 3120, fuelCostMil: 1050, emptyRunPct: 31.5, tonKmK: 1260 },
      { month: "T09/2026", revenueMil: 3250, fuelCostMil: 1070, emptyRunPct: 27.4, tonKmK: 1340 },
      { month: "T10/2026", revenueMil: 3380, fuelCostMil: 1085, emptyRunPct: 24.1, tonKmK: 1395 },
      { month: "T11/2026", revenueMil: 3420, fuelCostMil: 1077, emptyRunPct: 21.5, tonKmK: 1428 }
    ],
    fleetGroupStats: [
      { groupName: "\u0110\u1EA7u k\xE9o Cont 40ft (24 xe)", vehicleCount: 24, utilizationRatePct: 86.4, emptyRunPct: 19.8, fuelRatePer100Km: 35.2 },
      { groupName: "\u0110\u1EA7u k\xE9o Cont 20ft (12 xe)", vehicleCount: 12, utilizationRatePct: 88.2, emptyRunPct: 22, fuelRatePer100Km: 31.8 },
      { groupName: "Xe t\u1EA3i th\xF9ng 15T (8 xe)", vehicleCount: 8, utilizationRatePct: 81.5, emptyRunPct: 23.5, fuelRatePer100Km: 23.4 },
      { groupName: "Xe t\u1EA3i th\xF9ng 8T (4 xe)", vehicleCount: 4, utilizationRatePct: 78, emptyRunPct: 26.2, fuelRatePer100Km: 17.6 }
    ],
    timeAllocation: [
      { activity: "L\u0103n b\xE1nh c\xF3 h\xE0ng (Loaded Transit)", percentage: 62.4, color: "#0284C7" },
      { activity: "Ch\u1EDD x\u1EBFp d\u1EE1 C\u1EA3ng/Kho (Port/Depot Wait)", percentage: 17.8, color: "#F59E0B" },
      { activity: "Ch\u1EA1y r\u1ED7ng \u0111i\u1EC1u xe (Deadheading)", percentage: 11.2, color: "#EF4444" },
      { activity: "B\u1EA3o d\u01B0\u1EE1ng & D\u1EEBng ngh\u1EC9 k\u1EF9 thu\u1EADt", percentage: 8.6, color: "#8B5CF6" }
    ]
  };

  // src/context/TMSContext.tsx
  var TMSContext = Q(void 0);
  var TMSProvider = ({ children }) => {
    const [activeRole, setActiveRole] = d2("DIRECTOR");
    const [vehicles, setVehicles] = d2(INITIAL_VEHICLES);
    const [orders, setOrders] = d2(INITIAL_ORDERS);
    const [smartSuggestions, setSmartSuggestions] = d2(INITIAL_SMART_SUGGESTIONS);
    const [bottleneckAlerts, setBottleneckAlerts] = d2(INITIAL_BOTTLENECK_ALERTS);
    const [dispatchOrder, setDispatchOrder] = d2(INITIAL_DISPATCH_ORDER);
    const [fuelLogs, setFuelLogs] = d2(INITIAL_FUEL_LOGS);
    const [fuelAudits, setFuelAudits] = d2(INITIAL_FUEL_AUDITS);
    const [kpiData, setKpiData] = d2(MOCK_KPI_DATA);
    const [notifications, setNotifications] = d2([]);
    const showToast = (message, type = "info") => {
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
      setNotifications((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        dismissToast(id);
      }, 4500);
    };
    const dismissToast = (id) => {
      setNotifications((prev) => prev.filter((n2) => n2.id !== id));
    };
    const applySmartSuggestion = (suggId) => {
      const sugg = smartSuggestions.find((s3) => s3.id === suggId);
      if (!sugg || sugg.isApplied) return;
      if (sugg.type === "LTL_MERGE") {
        setVehicles((prev) => prev.map((v3) => {
          if (v3.plateNumber === sugg.targetVehiclePlate) {
            return {
              ...v3,
              currentPayloadTons: 14.2,
              utilizationRate: 94.7,
              status: "IN_TRANSIT",
              destination: "KCN Qu\u1EBF V\xF5 & KCN Y\xEAn Phong (\u0110\xE3 gh\xE9p \u0111\u01A1n k\xE9p)"
            };
          }
          return v3;
        }));
        setOrders((prev) => prev.map((o3) => {
          if (sugg.matchedOrderIds.includes(o3.id)) {
            return {
              ...o3,
              status: "IN_TRANSIT",
              assignedVehiclePlate: sugg.targetVehiclePlate,
              assignedDriverName: "V\u0169 V\u0103n Th\u1EAFng",
              isLtlConsolidated: true
            };
          }
          return o3;
        }));
        setKpiData((prev) => ({
          ...prev,
          payloadUtilizationGamma: 85.8,
          emptyRunPct: 20.8,
          fuelSavedLiters: prev.fuelSavedLiters + 45
        }));
        showToast(`\u0110\xE3 x\xE1c nh\u1EADn gh\xE9p h\xE0ng th\xE0nh c\xF4ng! Xe ${sugg.targetVehiclePlate} n\xE2ng t\u1EA3i tr\u1ECDng l\xEAn 94.7%, ti\u1EBFt ki\u1EC7m 2.150.000\u0111.`, "success");
      } else if (sugg.type === "BACKHAUL_MATCH") {
        setVehicles((prev) => prev.map((v3) => {
          if (v3.plateNumber === sugg.targetVehiclePlate) {
            return {
              ...v3,
              currentPayloadTons: 22,
              utilizationRate: 68.8,
              status: "IN_TRANSIT",
              destination: "C\u1EA3ng L\u1EA1ch Huy\u1EC7n (\u0110\u01A1n h\xE0ng xu\u1EA5t kh\u1EA9u chi\u1EC1u v\u1EC1)"
            };
          }
          return v3;
        }));
        setOrders((prev) => prev.map((o3) => {
          if (sugg.matchedOrderIds.includes(o3.id)) {
            return {
              ...o3,
              status: "IN_TRANSIT",
              assignedVehiclePlate: sugg.targetVehiclePlate,
              assignedDriverName: "Tr\u1EA7n \u0110\xECnh Tr\u1ECDng",
              isBackhaul: true
            };
          }
          return o3;
        }));
        setKpiData((prev) => ({
          ...prev,
          loadedDistanceBeta: 80.2,
          emptyRunPct: 19.8,
          totalRevenueVnd: prev.totalRevenueVnd + 54e5
        }));
        showToast(`\u0110\xE3 nh\u1EADn \u0111\u01A1n chi\u1EC1u v\u1EC1 (Backhaul)! Xe ${sugg.targetVehiclePlate} x\xF3a b\u1ECF 118km ch\u1EA1y r\u1ED7ng, t\u0103ng doanh thu +5.400.000\u0111.`, "success");
      }
      setSmartSuggestions((prev) => prev.map((s3) => s3.id === suggId ? { ...s3, isApplied: true } : s3));
    };
    const createShipmentOrder = (orderData) => {
      const newId = `DH-${Math.floor(8100 + Math.random() * 900)}`;
      const newTracking = `NNP-2026-${Math.floor(9e3 + Math.random() * 999)}`;
      const newOrder = {
        ...orderData,
        id: newId,
        trackingCode: newTracking,
        status: "PENDING"
      };
      setOrders((prev) => [newOrder, ...prev]);
      showToast(`T\u1EA1o \u0111\u01A1n h\xE0ng th\xE0nh c\xF4ng! M\xE3 v\u1EADn \u0111\u01A1n: ${newTracking}. \u0110i\u1EC1u \u0111\u1ED9 vi\xEAn \u0111\xE3 nh\u1EADn \u0111\u01B0\u1EE3c y\xEAu c\u1EA7u.`, "success");
      return newOrder;
    };
    const updateDispatchStep = (step) => {
      const now = /* @__PURE__ */ new Date();
      const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      setDispatchOrder((prev) => {
        const timestamps = { ...prev.stepTimestamps };
        if (step === 1) timestamps.step1 = `${timeStr} (T\xE0i x\u1EBF x\xE1c nh\u1EADn nh\u1EADn l\u1EC7nh)`;
        if (step === 2) timestamps.step2 = `${timeStr} (\u0110\xE3 \u0111\u1EBFn C\u1EA3ng \u0110\xECnh V\u0169 x\u1EBFp h\xE0ng)`;
        if (step === 3) timestamps.step3 = `${timeStr} (Xu\u1EA5t ph\xE1t l\u0103n b\xE1nh v\u1EADn chuy\u1EC3n)`;
        if (step === 4) timestamps.step4 = `${timeStr} (\u0110\xE3 \u0111\u1EBFn KCN Y\xEAn Phong giao h\xE0ng)`;
        return {
          ...prev,
          currentStep: step,
          stepTimestamps: timestamps
        };
      });
      if (step === 2) {
        setVehicles((prev) => prev.map((v3) => v3.plateNumber === dispatchOrder.vehiclePlate ? { ...v3, status: "LOADING_PORT" } : v3));
        setOrders((prev) => prev.map((o3) => o3.id === dispatchOrder.orderId ? { ...o3, status: "LOADING" } : o3));
        showToast(`T\xE0i x\u1EBF b\xE1o: \u0110\xE3 \u0111\u1EBFn C\u1EA3ng x\u1EBFp h\xE0ng v\xE0 ho\xE0n t\u1EA5t th\u1EE7 t\u1EE5c k\u1EB9p ch\xEC.`, "info");
      } else if (step === 3) {
        setVehicles((prev) => prev.map((v3) => v3.plateNumber === dispatchOrder.vehiclePlate ? { ...v3, status: "IN_TRANSIT", speedKmh: 75 } : v3));
        setOrders((prev) => prev.map((o3) => o3.id === dispatchOrder.orderId ? { ...o3, status: "IN_TRANSIT" } : o3));
        showToast(`T\xE0i x\u1EBF b\xE1o: Xe \u0111ang tr\xEAn \u0111\u01B0\u1EDDng v\u1EADn chuy\u1EC3n theo Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng.`, "info");
      } else if (step === 4) {
        setVehicles((prev) => prev.map((v3) => v3.plateNumber === dispatchOrder.vehiclePlate ? { ...v3, status: "AVAILABLE", speedKmh: 0, currentPayloadTons: 0, utilizationRate: 0 } : v3));
        setOrders((prev) => prev.map((o3) => o3.id === dispatchOrder.orderId ? { ...o3, status: "DELIVERED", epodSignedAt: timeStr } : o3));
        showToast(`T\xE0i x\u1EBF b\xE1o: \u0110\xE3 ho\xE0n t\u1EA5t giao h\xE0ng th\xE0nh c\xF4ng t\u1EA1i Kho KCN Y\xEAn Phong!`, "success");
      }
    };
    const submitEpod = (signatureData, signerName, notes) => {
      const now = /* @__PURE__ */ new Date();
      const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      setOrders((prev) => prev.map((o3) => {
        if (o3.id === dispatchOrder.orderId) {
          return {
            ...o3,
            status: "DELIVERED",
            epodSignedAt: timeStr,
            epodSignerName: signerName,
            epodSignatureData: signatureData,
            epodNotes: notes
          };
        }
        return o3;
      }));
      updateDispatchStep(4);
      showToast(`\u0110\xE3 t\u1EA3i l\xEAn v\xE0 k\xFD bi\xEAn b\u1EA3n giao nh\u1EADn e-POD th\xE0nh c\xF4ng! H\u1ED3 s\u01A1 \u0111\xE3 l\u01B0u tr\u1EEF v\xE0o h\u1EC7 th\u1ED1ng.`, "success");
    };
    const submitFuelLog = (logData) => {
      const now = /* @__PURE__ */ new Date();
      const timeStr = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
      const newLog = {
        ...logData,
        id: `FL-${Math.floor(210 + Math.random() * 800)}`,
        date: timeStr,
        status: "APPROVED"
      };
      setFuelLogs((prev) => [newLog, ...prev]);
      setVehicles((prev) => prev.map((v3) => {
        if (v3.plateNumber === logData.vehiclePlate) {
          return {
            ...v3,
            odometerKm: Math.max(v3.odometerKm, logData.odometerKm),
            fuelPercent: 95
          };
        }
        return v3;
      }));
      showToast(`\u0110\xE3 g\u1EEDi phi\u1EBFu khai b\xE1o nhi\xEAn li\u1EC7u (${logData.liters} l\xEDt - ${logData.amountVnd.toLocaleString("vi-VN")} \u0111). \u0110\xE3 \u0111\u1ED1i so\xE1t t\u1EF1 \u0111\u1ED9ng.`, "success");
    };
    const resolveBottleneck = (alertId) => {
      const alert = bottleneckAlerts.find((a3) => a3.id === alertId);
      if (!alert) return;
      setBottleneckAlerts((prev) => prev.filter((a3) => a3.id !== alertId));
      setVehicles((prev) => prev.map((v3) => {
        if (v3.plateNumber === alert.vehiclePlate) {
          return {
            ...v3,
            status: "IN_TRANSIT",
            portWaitMinutes: 10,
            speedKmh: 45
          };
        }
        return v3;
      }));
      showToast(`\u0110\xE3 g\u1EEDi c\xF4ng v\u0103n h\u1ED1i th\xFAc \u0111i\u1EC1u \u0111\u1ED9 C\u1EA3ng v\xE0 gi\u1EA3i t\u1ECFa \u0111i\u1EC3m ngh\u1EBDn cho xe ${alert.vehiclePlate}.`, "info");
    };
    const createNewDispatch = (newDispatch) => {
      const newOrderNumber = `L\u0110-2026-${Math.floor(100 + Math.random() * 899)}`;
      const now = /* @__PURE__ */ new Date();
      const timeStr = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      const created = {
        ...newDispatch,
        id: newOrderNumber,
        currentStep: 1,
        stepTimestamps: {
          step1: `${timeStr} (\u0110i\u1EC1u \u0111\u1ED9 vi\xEAn ph\xE1t l\u1EC7nh tr\u1EF1c tuy\u1EBFn)`
        }
      };
      setDispatchOrder(created);
      setVehicles((prev) => prev.map((v3) => {
        if (v3.plateNumber === newDispatch.vehiclePlate) {
          return {
            ...v3,
            status: "IN_TRANSIT",
            destination: newDispatch.deliveryPoint,
            currentPayloadTons: newDispatch.weightTons,
            utilizationRate: Math.round(newDispatch.weightTons / v3.maxPayloadTons * 100),
            activeOrderId: newDispatch.orderId
          };
        }
        return v3;
      }));
      setOrders((prev) => prev.map((o3) => {
        if (o3.id === newDispatch.orderId) {
          return {
            ...o3,
            status: "DISPATCHED",
            assignedVehiclePlate: newDispatch.vehiclePlate,
            assignedDriverName: newDispatch.driverName
          };
        }
        return o3;
      }));
      showToast(`\u0110\xE3 ph\xE1t l\u1EC7nh \u0111i\u1EC1u \u0111\u1ED9ng ${newOrderNumber} cho t\xE0i x\u1EBF ${newDispatch.driverName} (${newDispatch.vehiclePlate})!`, "success");
    };
    return /* @__PURE__ */ Rn.createElement(
      TMSContext.Provider,
      {
        value: {
          activeRole,
          setActiveRole,
          vehicles,
          orders,
          smartSuggestions,
          bottleneckAlerts,
          dispatchOrder,
          fuelLogs,
          fuelAudits,
          kpiData,
          notifications,
          showToast,
          dismissToast,
          applySmartSuggestion,
          createShipmentOrder,
          updateDispatchStep,
          submitFuelLog,
          submitEpod,
          resolveBottleneck,
          createNewDispatch
        }
      },
      children
    );
  };
  var useTMS = () => {
    const context = x2(TMSContext);
    if (!context) {
      throw new Error("useTMS must be used within a TMSProvider");
    }
    return context;
  };

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/shared/src/utils.js
  var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p22) => p22 ? p22.toUpperCase() : p1.toLowerCase()
  );
  var toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };
  var mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();
  var hasA11yProp = (props) => {
    for (const prop in props) {
      if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
        return true;
      }
    }
  };

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/Icon.js
  var Icon = D3(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    }, ref) => _(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => _(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/createLucideIcon.js
  var createLucideIcon = (iconName, iconNode) => {
    const Component = D3(
      ({ className, ...props }, ref) => _(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        ),
        ...props
      })
    );
    Component.displayName = toPascalCase(iconName);
    return Component;
  };

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/activity.js
  var __iconNode = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ];
  var Activity = createLucideIcon("activity", __iconNode);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/arrow-right.js
  var __iconNode2 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ];
  var ArrowRight = createLucideIcon("arrow-right", __iconNode2);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js
  var __iconNode3 = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ];
  var ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode3);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/award.js
  var __iconNode4 = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv"
      }
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
  ];
  var Award = createLucideIcon("award", __iconNode4);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/building-2.js
  var __iconNode5 = [
    ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
    ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
    ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
    ["path", { d: "M10 6h4", key: "1itunk" }],
    ["path", { d: "M10 10h4", key: "tcdvrf" }],
    ["path", { d: "M10 14h4", key: "kelpxr" }],
    ["path", { d: "M10 18h4", key: "1ulq68" }]
  ];
  var Building2 = createLucideIcon("building-2", __iconNode5);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/calculator.js
  var __iconNode6 = [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
    ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
    ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
    ["path", { d: "M16 10h.01", key: "1m94wz" }],
    ["path", { d: "M12 10h.01", key: "1nrarc" }],
    ["path", { d: "M8 10h.01", key: "19clt8" }],
    ["path", { d: "M12 14h.01", key: "1etili" }],
    ["path", { d: "M8 14h.01", key: "6423bh" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
    ["path", { d: "M8 18h.01", key: "lrp35t" }]
  ];
  var Calculator = createLucideIcon("calculator", __iconNode6);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/calendar.js
  var __iconNode7 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
    ["path", { d: "M3 10h18", key: "8toen8" }]
  ];
  var Calendar = createLucideIcon("calendar", __iconNode7);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/camera.js
  var __iconNode8 = [
    [
      "path",
      {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
        key: "1tc9qg"
      }
    ],
    ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
  ];
  var Camera = createLucideIcon("camera", __iconNode8);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/check.js
  var __iconNode9 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
  var Check = createLucideIcon("check", __iconNode9);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/chevron-right.js
  var __iconNode10 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
  var ChevronRight = createLucideIcon("chevron-right", __iconNode10);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/circle-check-big.js
  var __iconNode11 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
  ];
  var CircleCheckBig = createLucideIcon("circle-check-big", __iconNode11);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/circle-check.js
  var __iconNode12 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ];
  var CircleCheck = createLucideIcon("circle-check", __iconNode12);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/circle-x.js
  var __iconNode13 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }]
  ];
  var CircleX = createLucideIcon("circle-x", __iconNode13);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/clock.js
  var __iconNode14 = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ];
  var Clock = createLucideIcon("clock", __iconNode14);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/download.js
  var __iconNode15 = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ];
  var Download = createLucideIcon("download", __iconNode15);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/eraser.js
  var __iconNode16 = [
    [
      "path",
      {
        d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
        key: "g5wo59"
      }
    ],
    ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
  ];
  var Eraser = createLucideIcon("eraser", __iconNode16);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/file-text.js
  var __iconNode17 = [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
  ];
  var FileText = createLucideIcon("file-text", __iconNode17);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/fuel.js
  var __iconNode18 = [
    ["line", { x1: "3", x2: "15", y1: "22", y2: "22", key: "xegly4" }],
    ["line", { x1: "4", x2: "14", y1: "9", y2: "9", key: "xcnuvu" }],
    ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18", key: "16j0yd" }],
    [
      "path",
      {
        d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
        key: "7cu91f"
      }
    ]
  ];
  var Fuel = createLucideIcon("fuel", __iconNode18);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/gauge.js
  var __iconNode19 = [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
  ];
  var Gauge = createLucideIcon("gauge", __iconNode19);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/info.js
  var __iconNode20 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }]
  ];
  var Info = createLucideIcon("info", __iconNode20);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/map-pin.js
  var __iconNode21 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
  ];
  var MapPin = createLucideIcon("map-pin", __iconNode21);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/maximize-2.js
  var __iconNode22 = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "m21 3-7 7", key: "1l2asr" }],
    ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
    ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
  ];
  var Maximize2 = createLucideIcon("maximize-2", __iconNode22);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/minimize-2.js
  var __iconNode23 = [
    ["path", { d: "m14 10 7-7", key: "oa77jy" }],
    ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
    ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
    ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
  ];
  var Minimize2 = createLucideIcon("minimize-2", __iconNode23);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/navigation.js
  var __iconNode24 = [
    ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
  ];
  var Navigation = createLucideIcon("navigation", __iconNode24);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/pen-tool.js
  var __iconNode25 = [
    [
      "path",
      {
        d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
        key: "nt11vn"
      }
    ],
    [
      "path",
      {
        d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
        key: "15qc1e"
      }
    ],
    ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
    ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
  ];
  var PenTool = createLucideIcon("pen-tool", __iconNode25);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/percent.js
  var __iconNode26 = [
    ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
    ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
    ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]
  ];
  var Percent = createLucideIcon("percent", __iconNode26);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/phone-call.js
  var __iconNode27 = [
    ["path", { d: "M13 2a9 9 0 0 1 9 9", key: "1itnx2" }],
    ["path", { d: "M13 6a5 5 0 0 1 5 5", key: "11nki7" }],
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v"
      }
    ]
  ];
  var PhoneCall = createLucideIcon("phone-call", __iconNode27);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/plus.js
  var __iconNode28 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ];
  var Plus = createLucideIcon("plus", __iconNode28);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/printer.js
  var __iconNode29 = [
    [
      "path",
      {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
        key: "143wyd"
      }
    ],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
    ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
  ];
  var Printer = createLucideIcon("printer", __iconNode29);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/radio.js
  var __iconNode30 = [
    ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
    ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
    ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
    ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
  ];
  var Radio = createLucideIcon("radio", __iconNode30);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/refresh-cw.js
  var __iconNode31 = [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ];
  var RefreshCw = createLucideIcon("refresh-cw", __iconNode31);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/search.js
  var __iconNode32 = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ];
  var Search = createLucideIcon("search", __iconNode32);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/send.js
  var __iconNode33 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3"
      }
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
  ];
  var Send = createLucideIcon("send", __iconNode33);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/shield-check.js
  var __iconNode34 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ];
  var ShieldCheck = createLucideIcon("shield-check", __iconNode34);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/smartphone.js
  var __iconNode35 = [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
    ["path", { d: "M12 18h.01", key: "mhygvu" }]
  ];
  var Smartphone = createLucideIcon("smartphone", __iconNode35);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/sparkles.js
  var __iconNode36 = [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
        key: "4pj2yx"
      }
    ],
    ["path", { d: "M20 3v4", key: "1olli1" }],
    ["path", { d: "M22 5h-4", key: "1gvqau" }],
    ["path", { d: "M4 17v2", key: "vumght" }],
    ["path", { d: "M5 18H3", key: "zchphs" }]
  ];
  var Sparkles = createLucideIcon("sparkles", __iconNode36);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/trending-up.js
  var __iconNode37 = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
  ];
  var TrendingUp = createLucideIcon("trending-up", __iconNode37);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/triangle-alert.js
  var __iconNode38 = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ];
  var TriangleAlert = createLucideIcon("triangle-alert", __iconNode38);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/truck.js
  var __iconNode39 = [
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
    ["path", { d: "M15 18H9", key: "1lyqi6" }],
    [
      "path",
      {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i"
      }
    ],
    ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
    ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
  ];
  var Truck = createLucideIcon("truck", __iconNode39);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/wrench.js
  var __iconNode40 = [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
        key: "cbrjhi"
      }
    ]
  ];
  var Wrench = createLucideIcon("wrench", __iconNode40);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/x.js
  var __iconNode41 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ];
  var X2 = createLucideIcon("x", __iconNode41);

  // C:/Users/quyet/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/zap.js
  var __iconNode42 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db"
      }
    ]
  ];
  var Zap = createLucideIcon("zap", __iconNode42);

  // src/components/common/Header.tsx
  var Header = () => {
    const { activeRole, setActiveRole, bottleneckAlerts, smartSuggestions, vehicles } = useTMS();
    const [time, setTime] = d2("");
    y2(() => {
      const update = () => {
        const now = /* @__PURE__ */ new Date();
        setTime(now.toLocaleTimeString("vi-VN", { hour12: false }) + " - " + now.toLocaleDateString("vi-VN"));
      };
      update();
      const timer = setInterval(update, 1e3);
      return () => clearInterval(timer);
    }, []);
    const unappliedSuggestions = smartSuggestions.filter((s3) => !s3.isApplied).length;
    const onlineVehicles = vehicles.filter((v3) => v3.status !== "MAINTENANCE").length;
    const roles = [
      {
        id: "DIRECTOR",
        label: "Ban Gi\xE1m \u0111\u1ED1c",
        icon: Activity,
        desc: "KPI Hi\u1EC7u su\u1EA5t & B\xE1o c\xE1o"
      },
      {
        id: "DISPATCHER",
        label: "\u0110i\u1EC1u \u0111\u1ED9 vi\xEAn",
        icon: Radio,
        badge: unappliedSuggestions > 0 ? `${unappliedSuggestions} g\u1EE3i \xFD` : void 0,
        desc: "\u0110i\u1EC1u h\xE0nh & Gh\xE9p h\xE0ng"
      },
      {
        id: "DRIVER",
        label: "T\xE0i x\u1EBF",
        icon: Smartphone,
        desc: "Giao di\u1EC7n Mobile App"
      },
      {
        id: "CUSTOMER",
        label: "Kh\xE1ch h\xE0ng",
        icon: Building2,
        desc: "\u0110\u1EB7t xe & Tra c\u1EE9u e-POD"
      },
      {
        id: "FLEET_TECH",
        label: "K\u1EF9 thu\u1EADt & Nhi\xEAn li\u1EC7u",
        icon: Wrench,
        badge: bottleneckAlerts.length > 0 ? `${bottleneckAlerts.length} ngh\u1EBDn` : void 0,
        desc: "H\u1ED3 s\u01A1 xe & \u0110\u1ECBnh m\u1EE9c d\u1EA7u"
      }
    ];
    return /* @__PURE__ */ Rn.createElement("header", { className: "bg-slate-950/95 border-b border-slate-800/80 sticky top-0 z-40 backdrop-blur-md shadow-lg shadow-black/30" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 px-4 py-1.5 border-b border-blue-900/40 text-[11px] text-slate-300 flex flex-wrap items-center justify-between gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5 font-medium text-blue-300" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }), "H\u1EC7 th\u1ED1ng GPS Live: ", /* @__PURE__ */ Rn.createElement("strong", null, onlineVehicles, "/", vehicles.length, " Ph\u01B0\u01A1ng ti\u1EC7n online"), " (Tr\u1EE5c H\u1EA3i Ph\xF2ng - H\xE0 N\u1ED9i - B\u1EAFc Ninh)"), /* @__PURE__ */ Rn.createElement("span", { className: "hidden md:inline-block text-slate-500" }, "|"), /* @__PURE__ */ Rn.createElement("span", { className: "hidden md:flex items-center gap-1 text-slate-300" }, /* @__PURE__ */ Rn.createElement(MapPin, { className: "w-3.5 h-3.5 text-cyan-400" }), " C\u1EE5m C\u1EA3ng H\u1EA3i Ph\xF2ng: C\u1EA3ng \u0110\xECnh V\u0169 \u2022 T\xE2n V\u0169 \u2022 L\u1EA1ch Huy\u1EC7n \u2022 Ch\xF9a V\u1EBD")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-4 text-slate-400" }, unappliedSuggestions > 0 && /* @__PURE__ */ Rn.createElement("span", { className: "bg-blue-900/80 text-blue-200 px-2 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1 border border-blue-700/60 animate-bounce" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-3 h-3 text-amber-300" }), " ", unappliedSuggestions, " \u0110\u1EC1 xu\u1EA5t gh\xE9p h\xE0ng th\xF4ng minh \u0111ang ch\u1EDD duy\u1EC7t"), /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1 font-mono text-slate-300" }, /* @__PURE__ */ Rn.createElement(Clock, { className: "w-3.5 h-3.5 text-slate-400" }), " ", time || "13/11/2026"))), /* @__PURE__ */ Rn.createElement("div", { className: "max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 flex items-center justify-center shadow-lg shadow-blue-500/20 border border-blue-400/30" }, /* @__PURE__ */ Rn.createElement(Truck, { className: "w-6 h-6 text-white" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("h1", { className: "text-lg font-black tracking-wider text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200" }, "NNP LOGISTICS ", /* @__PURE__ */ Rn.createElement("span", { className: "text-cyan-400 font-extrabold text-sm ml-1 px-1.5 py-0.5 rounded bg-blue-950 border border-blue-800" }, "TMS"))), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-400 font-medium truncate max-w-xs md:max-w-none" }, "C\xD4NG TY TNHH \u0110\u1EA6U T\u01AF V\xC0 XU\u1EA4T NH\u1EACP KH\u1EA8U NNP \u2022 ", /* @__PURE__ */ Rn.createElement("span", { className: "text-cyan-300" }, "T\u1ED1i \u01B0u hi\u1EC7u qu\u1EA3 ph\u01B0\u01A1ng ti\u1EC7n v\u1EADn t\u1EA3i")))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 shadow-inner overflow-x-auto max-w-full" }, roles.map((r3) => {
      const Icon2 = r3.icon;
      const isActive = activeRole === r3.id;
      return /* @__PURE__ */ Rn.createElement(
        "button",
        {
          key: r3.id,
          onClick: () => setActiveRole(r3.id),
          className: `relative flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap ${isActive ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md shadow-blue-600/30" : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"}`
        },
        /* @__PURE__ */ Rn.createElement(Icon2, { className: `w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}` }),
        /* @__PURE__ */ Rn.createElement("div", { className: "text-left hidden sm:block" }, /* @__PURE__ */ Rn.createElement("div", null, r3.label)),
        r3.badge && /* @__PURE__ */ Rn.createElement("span", { className: `text-[9px] font-bold px-1.5 py-0.2 rounded-full ${isActive ? "bg-amber-400 text-slate-950" : "bg-red-500/90 text-white"}` }, r3.badge)
      );
    }))));
  };

  // src/components/common/Toast.tsx
  var ToastContainer = () => {
    const { notifications, dismissToast } = useTMS();
    if (notifications.length === 0) return null;
    return /* @__PURE__ */ Rn.createElement("div", { className: "fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-md w-full pointer-events-none" }, notifications.map((n2) => {
      const icons = {
        success: /* @__PURE__ */ Rn.createElement(CircleCheck, { className: "w-5 h-5 text-emerald-400 flex-shrink-0" }),
        warning: /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-5 h-5 text-amber-400 flex-shrink-0" }),
        error: /* @__PURE__ */ Rn.createElement(CircleX, { className: "w-5 h-5 text-rose-400 flex-shrink-0" }),
        info: /* @__PURE__ */ Rn.createElement(Info, { className: "w-5 h-5 text-blue-400 flex-shrink-0" })
      };
      const borders = {
        success: "border-emerald-500/50 bg-slate-900/95 text-slate-100 shadow-emerald-500/10",
        warning: "border-amber-500/50 bg-slate-900/95 text-slate-100 shadow-amber-500/10",
        error: "border-rose-500/50 bg-slate-900/95 text-slate-100 shadow-rose-500/10",
        info: "border-blue-500/50 bg-slate-900/95 text-slate-100 shadow-blue-500/10"
      };
      return /* @__PURE__ */ Rn.createElement(
        "div",
        {
          key: n2.id,
          className: `pointer-events-auto flex items-start gap-3 p-3.5 rounded-xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-slide-in ${borders[n2.type]}`
        },
        icons[n2.type],
        /* @__PURE__ */ Rn.createElement("div", { className: "text-xs font-medium leading-relaxed flex-1" }, n2.message),
        /* @__PURE__ */ Rn.createElement(
          "button",
          {
            onClick: () => dismissToast(n2.id),
            className: "text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
          },
          /* @__PURE__ */ Rn.createElement(X2, { className: "w-3.5 h-3.5" })
        )
      );
    }));
  };

  // src/components/common/Charts.tsx
  var RevenueFuelEmptyChart = ({ data }) => {
    const [hoverIndex, setHoverIndex] = d2(null);
    const maxRevenue = Math.max(...data.map((d3) => d3.revenueMil)) * 1.15;
    const maxEmptyPct = 50;
    const svgWidth = 650;
    const svgHeight = 280;
    const paddingLeft = 50;
    const paddingRight = 50;
    const paddingTop = 30;
    const paddingBottom = 40;
    const chartWidth = svgWidth - paddingLeft - paddingRight;
    const chartHeight = svgHeight - paddingTop - paddingBottom;
    const groupWidth = chartWidth / data.length;
    const barWidth = groupWidth * 0.28;
    const points = data.map((d3, i3) => {
      const x4 = paddingLeft + i3 * groupWidth + groupWidth / 2;
      const y3 = paddingTop + chartHeight - d3.emptyRunPct / maxEmptyPct * chartHeight;
      return { x: x4, y: y3, data: d3 };
    });
    const linePath = points.map((p3, i3) => `${i3 === 0 ? "M" : "L"} ${p3.x} ${p3.y}`).join(" ");
    return /* @__PURE__ */ Rn.createElement("div", { className: "w-full overflow-x-auto bg-slate-900/60 p-4 rounded-xl border border-slate-800" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between mb-3 text-xs gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200" }, "Di\u1EC5n bi\u1EBFn Doanh thu, Chi ph\xED Nhi\xEAn li\u1EC7u & T\u1EF7 l\u1EC7 Ch\u1EA1y r\u1ED7ng (6 th\xE1ng)"), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-3 h-3 rounded-sm bg-blue-500" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-300" }, "Doanh thu (tri\u1EC7u \u0111)")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-3 h-3 rounded-sm bg-amber-500" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-300" }, "Chi ph\xED d\u1EA7u (tri\u1EC7u \u0111)")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-3 h-1 bg-red-400" }), /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-red-400 -ml-2" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-red-300 font-medium" }, "T\u1EF7 l\u1EC7 ch\u1EA1y r\u1ED7ng (%)")))), /* @__PURE__ */ Rn.createElement("svg", { viewBox: `0 0 ${svgWidth} ${svgHeight}`, className: "w-full h-64 select-none" }, [0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
      const y3 = paddingTop + chartHeight * (1 - ratio);
      const revVal = Math.round(maxRevenue * ratio);
      const emptyVal = Math.round(maxEmptyPct * ratio);
      return /* @__PURE__ */ Rn.createElement("g", { key: idx }, /* @__PURE__ */ Rn.createElement("line", { x1: paddingLeft, y1: y3, x2: svgWidth - paddingRight, y2: y3, stroke: "#334155", strokeDasharray: "3 3", opacity: 0.6 }), /* @__PURE__ */ Rn.createElement("text", { x: paddingLeft - 8, y: y3 + 4, textAnchor: "end", className: "text-[10px] fill-slate-400 font-mono" }, revVal, "M"), /* @__PURE__ */ Rn.createElement("text", { x: svgWidth - paddingRight + 8, y: y3 + 4, textAnchor: "start", className: "text-[10px] fill-red-400 font-mono" }, emptyVal, "%"));
    }), data.map((d3, i3) => {
      const groupX = paddingLeft + i3 * groupWidth;
      const revHeight = d3.revenueMil / maxRevenue * chartHeight;
      const fuelHeight = d3.fuelCostMil / maxRevenue * chartHeight;
      const isHovered = hoverIndex === i3;
      return /* @__PURE__ */ Rn.createElement("g", { key: i3, onMouseEnter: () => setHoverIndex(i3), onMouseLeave: () => setHoverIndex(null), className: "cursor-pointer" }, /* @__PURE__ */ Rn.createElement(
        "rect",
        {
          x: groupX,
          y: paddingTop,
          width: groupWidth,
          height: chartHeight,
          fill: isHovered ? "rgba(59, 130, 246, 0.08)" : "transparent",
          rx: 4
        }
      ), /* @__PURE__ */ Rn.createElement(
        "rect",
        {
          x: groupX + groupWidth * 0.18,
          y: paddingTop + chartHeight - revHeight,
          width: barWidth,
          height: revHeight,
          className: "fill-blue-500 transition-all duration-300 hover:fill-blue-400",
          rx: 3
        }
      ), /* @__PURE__ */ Rn.createElement(
        "rect",
        {
          x: groupX + groupWidth * 0.18 + barWidth + 4,
          y: paddingTop + chartHeight - fuelHeight,
          width: barWidth,
          height: fuelHeight,
          className: "fill-amber-500 transition-all duration-300 hover:fill-amber-400",
          rx: 3
        }
      ), /* @__PURE__ */ Rn.createElement(
        "text",
        {
          x: groupX + groupWidth / 2,
          y: svgHeight - 12,
          textAnchor: "middle",
          className: `text-[11px] font-medium transition-colors ${isHovered ? "fill-blue-400 font-bold" : "fill-slate-400"}`
        },
        d3.month
      ));
    }), /* @__PURE__ */ Rn.createElement("path", { d: linePath, fill: "none", stroke: "#F87171", strokeWidth: 2.5, strokeLinecap: "round" }), points.map((p3, i3) => /* @__PURE__ */ Rn.createElement("g", { key: i3, onMouseEnter: () => setHoverIndex(i3), onMouseLeave: () => setHoverIndex(null), className: "cursor-pointer" }, /* @__PURE__ */ Rn.createElement("circle", { cx: p3.x, cy: p3.y, r: hoverIndex === i3 ? 6 : 4, className: "fill-red-500 stroke-slate-900 stroke-2 transition-all" }), /* @__PURE__ */ Rn.createElement("text", { x: p3.x, y: p3.y - 10, textAnchor: "middle", className: "text-[10px] font-bold fill-red-400 font-mono" }, p3.data.emptyRunPct, "%"))), hoverIndex !== null && /* @__PURE__ */ Rn.createElement("g", { transform: `translate(${Math.min(points[hoverIndex].x + 10, svgWidth - 190)}, 35)` }, /* @__PURE__ */ Rn.createElement("rect", { width: 175, height: 82, rx: 6, fill: "#0F172A", stroke: "#38BDF8", strokeWidth: 1, filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))" }), /* @__PURE__ */ Rn.createElement("text", { x: 10, y: 18, className: "text-[11px] font-bold fill-slate-100" }, data[hoverIndex].month), /* @__PURE__ */ Rn.createElement("text", { x: 10, y: 35, className: "text-[10px] fill-blue-400" }, "Doanh thu: ", data[hoverIndex].revenueMil.toLocaleString("vi-VN"), " tr VN\u0110"), /* @__PURE__ */ Rn.createElement("text", { x: 10, y: 50, className: "text-[10px] fill-amber-400" }, "Chi ph\xED d\u1EA7u: ", data[hoverIndex].fuelCostMil.toLocaleString("vi-VN"), " tr VN\u0110"), /* @__PURE__ */ Rn.createElement("text", { x: 10, y: 65, className: "text-[10px] fill-red-400 font-semibold" }, "T\u1EF7 l\u1EC7 ch\u1EA1y r\u1ED7ng: ", data[hoverIndex].emptyRunPct, "%"), /* @__PURE__ */ Rn.createElement("text", { x: 10, y: 77, className: "text-[9px] fill-emerald-400 font-mono" }, "S\u1EA3n l\u01B0\u1EE3ng: ", data[hoverIndex].tonKmK.toLocaleString("vi-VN"), "k T\u1EA5n.km"))));
  };
  var FleetGroupComparisonChart = ({ groups }) => {
    return /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/60 p-4 rounded-xl border border-slate-800" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-semibold text-slate-200" }, "Hi\u1EC7u su\u1EA5t T\u1EA3i tr\u1ECDng vs T\u1EF7 l\u1EC7 Ch\u1EA1y r\u1ED7ng theo Ph\xE2n nh\xF3m xe"), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-emerald-400 font-medium" }, "M\u1EE5c ti\xEAu ch\u1EA1y r\u1ED7ng < 22%")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, groups.map((group, idx) => /* @__PURE__ */ Rn.createElement("div", { key: idx, className: "bg-slate-800/50 p-3 rounded-lg border border-slate-700/60 hover:border-slate-600 transition-colors" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs mb-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-semibold text-slate-100" }, group.groupName), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-mono text-cyan-300" }, "\u0110\u1ECBnh m\u1EE9c: ", group.fuelRatePer100Km, " L/100km")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-1 mb-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-[11px] text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", null, "H\u1EC7 s\u1ED1 l\u1EE3i d\u1EE5ng tr\u1ECDng t\u1EA3i (\u03B3):"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-blue-400" }, group.utilizationRatePct, "%")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-700/60 h-2 rounded-full overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
      "div",
      {
        className: "bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full transition-all duration-500",
        style: { width: `${group.utilizationRatePct}%` }
      }
    ))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-[11px] text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", null, "T\u1EF7 l\u1EC7 km ch\u1EA1y r\u1ED7ng:"), /* @__PURE__ */ Rn.createElement("span", { className: `font-bold ${group.emptyRunPct > 25 ? "text-rose-400" : "text-amber-400"}` }, group.emptyRunPct, "%")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-700/60 h-2 rounded-full overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
      "div",
      {
        className: `h-full rounded-full transition-all duration-500 ${group.emptyRunPct > 25 ? "bg-rose-500" : "bg-amber-500"}`,
        style: { width: `${group.emptyRunPct}%` }
      }
    )))))));
  };
  var TimeAllocationDonutChart = ({ items }) => {
    const size = 180;
    const strokeWidth = 26;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    let currentOffset = 0;
    return /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-col justify-between" }, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-semibold text-slate-200 mb-2" }, "C\u01A1 c\u1EA5u Th\u1EDDi gian Ho\u1EA1t \u0111\u1ED9ng c\u1EE7a \u0110\u1ED9i xe (24/7)"), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-around my-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "relative flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement("svg", { width: size, height: size, className: "transform -rotate-90" }, items.map((item, idx) => {
      const strokeDasharray = `${item.percentage / 100 * circumference} ${circumference}`;
      const strokeDashoffset = -currentOffset;
      currentOffset += item.percentage / 100 * circumference;
      return /* @__PURE__ */ Rn.createElement(
        "circle",
        {
          key: idx,
          cx: size / 2,
          cy: size / 2,
          r: radius,
          fill: "transparent",
          stroke: item.color,
          strokeWidth,
          strokeDasharray,
          strokeDashoffset,
          className: "transition-all duration-500 hover:opacity-90 cursor-pointer"
        }
      );
    })), /* @__PURE__ */ Rn.createElement("div", { className: "absolute text-center" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-xl font-bold text-slate-100" }, "62.4%"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-slate-400 font-medium" }, "L\u0103n b\xE1nh c\xF3 h\xE0ng"))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2 text-xs" }, items.map((item, idx) => /* @__PURE__ */ Rn.createElement("div", { key: idx, className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-3 h-3 rounded-full flex-shrink-0", style: { backgroundColor: item.color } }), /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-300 text-[11px]" }, item.activity), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-100 font-bold font-mono text-[11px]" }, item.percentage, "%")))))), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/50 mt-2" }, "\u{1F4A1} ", /* @__PURE__ */ Rn.createElement("strong", { className: "text-blue-300" }, "Nh\u1EADn \u0111\u1ECBnh v\u1EADn h\xE0nh:"), " Th\u1EDDi gian ch\u1EDD x\u1EBFp d\u1EE1 t\u1EA1i C\u1EA3ng \u0110\xECnh V\u0169 v\xE0 T\xE2n V\u0169 chi\u1EBFm 17.8% (cao h\u01A1n chu\u1EA9n 12%). C\u1EA7n \u0111\u1EA9y m\u1EA1nh l\xE0m th\u1EE7 t\u1EE5c \u0111i\u1EC7n t\u1EED e-Port \u0111\u1EC3 t\u0103ng gi\u1EDD l\u0103n b\xE1nh c\xF3 h\xE0ng."));
  };

  // src/components/director/DirectorDashboard.tsx
  var DirectorDashboard = () => {
    const { kpiData, vehicles, orders } = useTMS();
    const [selectedPeriod, setSelectedPeriod] = d2("MONTH");
    const [selectedCorridor, setSelectedCorridor] = d2("ALL");
    return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-6 animate-fade-in" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 shadow-sm" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("h2", { className: "text-lg font-bold text-white" }, "B\xE1o c\xE1o & Gi\xE1m s\xE1t Hi\u1EC7u su\u1EA5t V\u1EADn t\u1EA3i \u0110o\xE0n xe NNP"), /* @__PURE__ */ Rn.createElement("span", { className: "bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/30" }, "D\u1EEF li\u1EC7u th\u1EDDi gian th\u1EF1c")), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-400 mt-0.5" }, "M\u1EE5c ti\xEAu tr\u1ECDng t\xE2m: N\xE2ng cao h\u1EC7 s\u1ED1 s\u1EED d\u1EE5ng tr\u1ECDng t\u1EA3i (\u03B3) & C\u1EAFt gi\u1EA3m tri\u1EC7t \u0111\u1EC3 t\u1EF7 l\u1EC7 ch\u1EA1y r\u1ED7ng chi\u1EC1u v\u1EC1 (Backhaul)")), /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setSelectedPeriod("MONTH"),
        className: `px-3 py-1.5 rounded-lg font-medium transition-colors ${selectedPeriod === "MONTH" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`
      },
      "Th\xE1ng 11/2026"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setSelectedPeriod("QUARTER"),
        className: `px-3 py-1.5 rounded-lg font-medium transition-colors ${selectedPeriod === "QUARTER" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`
      },
      "Qu\xFD 4/2026"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setSelectedPeriod("YEAR"),
        className: `px-3 py-1.5 rounded-lg font-medium transition-colors ${selectedPeriod === "YEAR" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`
      },
      "N\u0103m 2026"
    )), /* @__PURE__ */ Rn.createElement(
      "select",
      {
        value: selectedCorridor,
        onChange: (e3) => setSelectedCorridor(e3.target.value),
        className: "bg-slate-950 text-slate-300 text-xs rounded-xl px-3 py-2 border border-slate-800 focus:outline-none focus:border-blue-500"
      },
      /* @__PURE__ */ Rn.createElement("option", { value: "ALL" }, "T\u1EA5t c\u1EA3 h\xE0nh lang v\u1EADn t\u1EA3i"),
      /* @__PURE__ */ Rn.createElement("option", { value: "HP_HN" }, "H\u1EA3i Ph\xF2ng \u2194 H\xE0 N\u1ED9i (Cao t\u1ED1c 5B)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "HP_BN" }, "H\u1EA3i Ph\xF2ng \u2194 B\u1EAFc Ninh (Y\xEAn Phong, Qu\u1EBF V\xF5)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "HP_HD" }, "H\u1EA3i Ph\xF2ng \u2194 H\u1EA3i D\u01B0\u01A1ng / H\u01B0ng Y\xEAn")
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => window.print(),
        className: "flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-2 rounded-xl border border-slate-700 transition-colors"
      },
      /* @__PURE__ */ Rn.createElement(Download, { className: "w-3.5 h-3.5" }),
      " Xu\u1EA5t B\xE1o c\xE1o KPI"
    ))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-2xl border border-slate-800/90 shadow-md relative overflow-hidden group hover:border-blue-500/50 transition-all" }, /* @__PURE__ */ Rn.createElement("div", { className: "absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" }), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-slate-400" }, "T\u1EF7 l\u1EC7 Xe v\u1EADn doanh (\u03B1)"), /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement(Truck, { className: "w-4 h-4" }))), /* @__PURE__ */ Rn.createElement("div", { className: "text-2xl font-black text-white tracking-tight flex items-baseline gap-2" }, kpiData.fleetOperationalRate, "%", /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-emerald-400 flex items-center" }, /* @__PURE__ */ Rn.createElement(ArrowUpRight, { className: "w-3.5 h-3.5" }), " +3.4%")), /* @__PURE__ */ Rn.createElement("div", { className: "mt-2 flex items-center justify-between text-[11px] text-slate-400" }, /* @__PURE__ */ Rn.createElement("span", null, "44/48 xe \u0111ang l\u0103n b\xE1nh"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-500" }, "M\u1EE5c ti\xEAu: >88%")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-blue-500 h-full rounded-full", style: { width: `${kpiData.fleetOperationalRate}%` } }))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-2xl border border-slate-800/90 shadow-md relative overflow-hidden group hover:border-cyan-500/50 transition-all" }, /* @__PURE__ */ Rn.createElement("div", { className: "absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" }), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-slate-400" }, "H\u1EC7 s\u1ED1 S\u1EED d\u1EE5ng Tr\u1ECDng t\u1EA3i (\u03B3)"), /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement(Gauge, { className: "w-4 h-4" }))), /* @__PURE__ */ Rn.createElement("div", { className: "text-2xl font-black text-white tracking-tight flex items-baseline gap-2" }, kpiData.payloadUtilizationGamma, "%", /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-emerald-400 flex items-center" }, /* @__PURE__ */ Rn.createElement(ArrowUpRight, { className: "w-3.5 h-3.5" }), " +7.2%")), /* @__PURE__ */ Rn.createElement("div", { className: "mt-2 flex items-center justify-between text-[11px] text-slate-400" }, /* @__PURE__ */ Rn.createElement("span", null, "Nh\u1EDD gh\xE9p h\xE0ng LTL th\xF4ng minh"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-500" }, "Chu\u1EA9n ng\xE0nh: 72%")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-cyan-500 h-full rounded-full", style: { width: `${kpiData.payloadUtilizationGamma}%` } }))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-2xl border border-slate-800/90 shadow-md relative overflow-hidden group hover:border-emerald-500/50 transition-all" }, /* @__PURE__ */ Rn.createElement("div", { className: "absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" }), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-slate-400" }, "Qu\xE3ng \u0111\u01B0\u1EDDng c\xF3 h\xE0ng (\u03B2)"), /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement(Percent, { className: "w-4 h-4" }))), /* @__PURE__ */ Rn.createElement("div", { className: "text-2xl font-black text-white tracking-tight flex items-baseline gap-2" }, kpiData.loadedDistanceBeta, "%", /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-emerald-400 flex items-center" }, /* @__PURE__ */ Rn.createElement(ArrowUpRight, { className: "w-3.5 h-3.5" }), " +5.8%")), /* @__PURE__ */ Rn.createElement("div", { className: "mt-2 flex items-center justify-between text-[11px] text-slate-400" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-amber-400 font-medium" }, "Ch\u1EA1y r\u1ED7ng ch\u1EC9 c\xF2n ", kpiData.emptyRunPct, "%"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-500" }, "Gi\u1EA3m t\u1EEB 38%")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-emerald-500 h-full rounded-full", style: { width: `${kpiData.loadedDistanceBeta}%` } }))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-2xl border border-slate-800/90 shadow-md relative overflow-hidden group hover:border-indigo-500/50 transition-all" }, /* @__PURE__ */ Rn.createElement("div", { className: "absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" }), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-slate-400" }, "T\u1ED5ng S\u1EA3n l\u01B0\u1EE3ng Lu\xE2n chuy\u1EC3n"), /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement(TrendingUp, { className: "w-4 h-4" }))), /* @__PURE__ */ Rn.createElement("div", { className: "text-2xl font-black text-white tracking-tight flex items-baseline gap-2" }, (kpiData.totalTonKm / 1e3).toLocaleString("vi-VN"), "k", /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-400 font-normal" }, "T\u1EA5n.km")), /* @__PURE__ */ Rn.createElement("div", { className: "mt-2 flex items-center justify-between text-[11px] text-slate-400" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-indigo-300 font-medium" }, "+12.8% so v\u1EDBi c\xF9ng k\u1EF3"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-500" }, "Doanh thu 3.42 t\u1EF7 \u0111")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-indigo-500 h-full rounded-full", style: { width: "85%" } })))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "lg:col-span-2" }, /* @__PURE__ */ Rn.createElement(RevenueFuelEmptyChart, { data: kpiData.monthlyComparison })), /* @__PURE__ */ Rn.createElement("div", { className: "lg:col-span-1" }, /* @__PURE__ */ Rn.createElement(TimeAllocationDonutChart, { items: kpiData.timeAllocation }))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, /* @__PURE__ */ Rn.createElement(FleetGroupComparisonChart, { groups: kpiData.fleetGroupStats }), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/60 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ Rn.createElement("h3", { className: "text-xs font-bold text-slate-200 flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(Award, { className: "w-4 h-4 text-amber-400" }), "Hi\u1EC7u Qu\u1EA3 Kinh T\u1EBF Khi \xC1p D\u1EE5ng Thu\u1EADt To\xE1n T\u1ED1i \u01AFu Ph\u01B0\u01A1ng Ti\u1EC7n NNP"), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] bg-blue-900/80 text-blue-200 px-2 py-0.5 rounded font-medium border border-blue-700/50" }, "Th\xE1ng 11/2026")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200" }, "Nhi\xEAn li\u1EC7u ti\u1EBFt ki\u1EC7m nh\u1EDD gi\u1EA3m ch\u1EA1y r\u1ED7ng:"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400" }, "Gi\u1EA3m t\u1EEB 38% r\u1ED7ng xu\u1ED1ng 21.5% tr\xEAn h\xE0nh lang B\u1EAFc Ninh \u2194 H\u1EA3i Ph\xF2ng")), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-sm font-bold text-emerald-400" }, "4,850 L\xEDt d\u1EA7u"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-emerald-300 font-mono" }, "\u2248 106.700.000 VN\u0110"))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200" }, "Doanh thu t\u0103ng th\xEAm t\u1EEB \u0111\u01A1n h\xE0ng chi\u1EC1u v\u1EC1 (Backhaul):"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400" }, "T\u1EADn d\u1EE5ng \u0111\u1EA7u k\xE9o v\u1EEBa tr\u1EA3 h\xE0ng t\u1EA1i Y\xEAn Phong, Qu\u1EBF V\xF5 \u0111\u1EC3 k\xE9o cont xu\u1EA5t kh\u1EA9u")), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-sm font-bold text-blue-400" }, "+380.000.000 VN\u0110"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400" }, "72 chuy\u1EBFn kh\u1EE9 h\u1ED3i"))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-800/40 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200" }, "Hi\u1EC7u qu\u1EA3 gh\xE9p \u0111\u01A1n l\u1EBB (LTL Grouping):"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400" }, "N\xE2ng t\u1EA3i tr\u1ECDng b\xECnh qu\xE2n xe t\u1EA3i th\xF9ng t\u1EEB 40% l\xEAn 84.6%")), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-sm font-bold text-cyan-400" }, "Ti\u1EBFt ki\u1EC7m 28 chuy\u1EBFn"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-cyan-300" }, "Gi\u1EA3m hao m\xF2n & ph\xED BOT"))))), /* @__PURE__ */ Rn.createElement("div", { className: "mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-900/40 to-indigo-900/30 border border-blue-800/50 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs text-blue-200" }, /* @__PURE__ */ Rn.createElement(CircleCheck, { className: "w-4 h-4 text-emerald-400 flex-shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, "T\u1ED5ng l\u1EE3i \xEDch kinh t\u1EBF r\xF2ng thu \u0111\u01B0\u1EE3c trong th\xE1ng:")), /* @__PURE__ */ Rn.createElement("div", { className: "text-base font-black text-white font-mono bg-blue-600/40 px-3 py-1 rounded-lg border border-blue-500/40" }, "+486.700.000 VN\u0110")))));
  };

  // src/components/dispatcher/SmartConsolidation.tsx
  var SmartConsolidation = () => {
    const { smartSuggestions, applySmartSuggestion, orders, vehicles } = useTMS();
    return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-4 rounded-2xl border border-blue-900/60" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-blue-600/30 text-cyan-300 flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-5 h-5 text-amber-300" })), /* @__PURE__ */ Rn.createElement("h3", { className: "text-sm font-bold text-white" }, "\u0110\u1ED9ng C\u01A1 Gh\xE9p H\xE0ng Th\xF4ng Minh & \u0110\u01A1n H\xE0ng Chi\u1EC1u V\u1EC1 (AI Smart Consolidation & Backhaul)")), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-300 mt-1" }, "Thu\u1EADt to\xE1n t\u1EF1 \u0111\u1ED9ng ph\xE2n t\xEDch to\u1EA1 \u0111\u1ED9 GPS, kh\u1ED1i l\u01B0\u1EE3ng \u0111\u01A1n h\xE0ng v\xE0 l\u1ECBch h\u1EA1 h\xE0ng \u0111\u1EC3 gh\xE9p \u0111\u01A1n l\u1EBB (LTL) v\xE0 t\xECm h\xE0ng kh\u1EE9 h\u1ED3i")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs" }, /* @__PURE__ */ Rn.createElement("span", { className: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-lg font-semibold" }, "\u0110\xE3 ti\u1EBFt ki\u1EC7m: 233 km ch\u1EA1y r\u1ED7ng h\xF4m nay"))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4" }, smartSuggestions.map((sugg) => {
      const targetVehicle = vehicles.find((v3) => v3.plateNumber === sugg.targetVehiclePlate);
      const matchedOrdersList = orders.filter((o3) => sugg.matchedOrderIds.includes(o3.id));
      return /* @__PURE__ */ Rn.createElement(
        "div",
        {
          key: sugg.id,
          className: `p-5 rounded-2xl border transition-all ${sugg.isApplied ? "bg-slate-900/40 border-emerald-500/40 opacity-90" : "bg-slate-900/90 border-blue-500/50 shadow-lg shadow-blue-950/40 hover:border-blue-400"}`
        },
        /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start justify-between gap-3 mb-3" }, /* @__PURE__ */ Rn.createElement("span", { className: `text-[11px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${sugg.type === "LTL_MERGE" ? "bg-blue-950 text-cyan-300 border-cyan-800" : "bg-amber-950 text-amber-300 border-amber-800"}` }, /* @__PURE__ */ Rn.createElement(Zap, { className: "w-3.5 h-3.5" }), sugg.type === "LTL_MERGE" ? "GOM \u0110\u01A0N L\u1EBA (LTL GROUPING)" : "\u0110\u01A0N H\xC0NG CHI\u1EC0U V\u1EC0 (BACKHAUL MATCH)"), sugg.isApplied ? /* @__PURE__ */ Rn.createElement("span", { className: "bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-lg border border-emerald-500/40 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Check, { className: "w-3.5 h-3.5" }), " \u0110\xE3 th\u1EF1c thi l\u1EC7nh gh\xE9p") : /* @__PURE__ */ Rn.createElement("span", { className: "bg-amber-500/20 text-amber-300 text-xs font-semibold px-2 py-0.5 rounded-lg border border-amber-500/30" }, "Ch\u1EDD \u0111i\u1EC1u \u0111\u1ED9 ph\xEA duy\u1EC7t")),
        /* @__PURE__ */ Rn.createElement("h4", { className: "text-sm font-bold text-white mb-1.5" }, sugg.title),
        /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-300 leading-relaxed mb-4" }, sugg.description),
        /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-950 p-3.5 rounded-xl border border-slate-800 mb-4 space-y-2.5" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Truck, { className: "w-4 h-4 text-blue-400" }), " Ph\u01B0\u01A1ng ti\u1EC7n \u0111i\u1EC1u \u0111\u1ED9ng:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-white font-mono bg-blue-950 px-2 py-0.5 rounded border border-blue-800" }, sugg.targetVehiclePlate, " (", targetVehicle?.model, ")")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-xs" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "Hi\u1EC7u su\u1EA5t t\u1EA3i tr\u1ECDng tr\u01B0\u1EDBc \u2192 sau khi gh\xE9p:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-bold text-white" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, sugg.originalCapacityPct, "%"), /* @__PURE__ */ Rn.createElement(ArrowRight, { className: "w-3 h-3 inline mx-1.5 text-cyan-400" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-emerald-400 font-extrabold text-sm" }, sugg.optimizedCapacityPct, "%"))), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-800 h-2 rounded-full overflow-hidden flex" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-500 h-full transition-all", style: { width: `${sugg.originalCapacityPct}%` } }), /* @__PURE__ */ Rn.createElement("div", { className: "bg-gradient-to-r from-emerald-500 to-cyan-400 h-full transition-all", style: { width: `${sugg.optimizedCapacityPct - sugg.originalCapacityPct}%` } }))), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 pt-1 border-t border-slate-800/80" }, /* @__PURE__ */ Rn.createElement("strong", { className: "text-slate-300" }, "L\u1ED9 tr\xECnh b\u1ED1c h\xE0ng t\u1ED1i \u01B0u:"), " ", sugg.pickupRoute)),
        /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2 mb-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] font-semibold text-slate-300 uppercase tracking-wider" }, "Chi ti\u1EBFt \u0111\u01A1n h\xE0ng trong chuy\u1EBFn gh\xE9p:"), matchedOrdersList.map((ord) => /* @__PURE__ */ Rn.createElement("div", { key: ord.id, className: "bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60 flex items-center justify-between text-xs" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "font-bold text-slate-200" }, ord.id, " - ", ord.customerName), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 truncate max-w-xs" }, ord.cargoType, " (", ord.weightTons, " T\u1EA5n) \u2022 ", ord.deliveryPoint)), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("div", { className: "font-mono text-cyan-300 font-bold" }, ord.freightPriceVnd.toLocaleString("vi-VN"), " \u0111"), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400" }, "C\u01B0\u1EDBc v\u1EADn t\u1EA3i"))))),
        /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-2 mb-4 text-center" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-emerald-950/40 p-2 rounded-xl border border-emerald-800/50" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-emerald-400 font-medium" }, "C\u1EAFt gi\u1EA3m ch\u1EA1y r\u1ED7ng"), /* @__PURE__ */ Rn.createElement("div", { className: "text-xs font-bold text-white font-mono mt-0.5" }, "-", sugg.deadheadKmSaved, " km r\u1ED7ng")), /* @__PURE__ */ Rn.createElement("div", { className: "bg-blue-950/40 p-2 rounded-xl border border-blue-800/50" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-cyan-300 font-medium" }, "Doanh thu / Ti\u1EBFt ki\u1EC7m r\xF2ng"), /* @__PURE__ */ Rn.createElement("div", { className: "text-xs font-bold text-emerald-400 font-mono mt-0.5" }, "+", sugg.revenueAddedVnd ? sugg.revenueAddedVnd.toLocaleString("vi-VN") : sugg.costSavedVnd.toLocaleString("vi-VN"), " \u0111"))),
        /* @__PURE__ */ Rn.createElement(
          "button",
          {
            disabled: sugg.isApplied,
            onClick: () => applySmartSuggestion(sugg.id),
            className: `w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${sugg.isApplied ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700" : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 active:scale-[0.98]"}`
          },
          sugg.isApplied ? /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement(Check, { className: "w-4 h-4 text-emerald-400" }), " \u0110\xE3 ph\xE1t l\u1EC7nh gh\xE9p th\xE0nh c\xF4ng") : /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement(Zap, { className: "w-4 h-4 text-amber-300" }), " X\xE1c nh\u1EADn gh\xE9p chuy\u1EBFn & Ph\xE1t l\u1EC7nh \u0111i\u1EC1u \u0111\u1ED9ng")
        )
      );
    })));
  };

  // src/components/dispatcher/GPSControlTower.tsx
  var GPSControlTower = () => {
    const { vehicles, bottleneckAlerts, resolveBottleneck } = useTMS();
    const [selectedVehicleId, setSelectedVehicleId] = d2(vehicles[0]?.id || null);
    const selectedVehicle = vehicles.find((v3) => v3.id === selectedVehicleId) || vehicles[0];
    const waypoints = [
      { name: "C\u1EA3ng Qu\u1ED1c t\u1EBF L\u1EA1ch Huy\u1EC7n (TC-HICT)", x: 92, y: 65, type: "PORT" },
      { name: "C\u1EA3ng \u0110\xECnh V\u0169 & T\xE2n V\u0169", x: 80, y: 70, type: "PORT" },
      { name: "C\u1EA3ng Ch\xF9a V\u1EBD & Ho\xE0ng Di\u1EC7u", x: 74, y: 60, type: "PORT" },
      { name: "KCN Tr\xE0ng Du\u1EC7 (LG)", x: 65, y: 58, type: "IZ" },
      { name: "KCN \u0110\u1EA1i An (H\u1EA3i D\u01B0\u01A1ng)", x: 48, y: 55, type: "IZ" },
      { name: "KCN Ph\u1ED1 N\u1ED1i (H\u01B0ng Y\xEAn)", x: 32, y: 62, type: "IZ" },
      { name: "ICD Ti\xEAn S\u01A1n (B\u1EAFc Ninh)", x: 26, y: 38, type: "ICD" },
      { name: "KCN Qu\u1EBF V\xF5 (B\u1EAFc Ninh)", x: 30, y: 32, type: "IZ" },
      { name: "KCN Y\xEAn Phong (Samsung)", x: 18, y: 25, type: "IZ" },
      { name: "ICD M\u1EF9 \u0110\xECnh / KCN \u0110\xE0i T\u01B0 (H\xE0 N\u1ED9i)", x: 12, y: 50, type: "ICD" }
    ];
    return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-6" }, bottleneckAlerts.length > 0 && /* @__PURE__ */ Rn.createElement("div", { className: "bg-rose-950/40 border border-rose-500/50 p-4 rounded-2xl shadow-lg" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-3 h-3 rounded-full bg-rose-500 animate-ping" }), /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-5 h-5 text-rose-400" }), /* @__PURE__ */ Rn.createElement("h3", { className: "text-sm font-bold text-white" }, "C\u1EA3nh B\xE1o \u0110i\u1EC3m Ngh\u1EBDn Th\u1EDDi Gian Th\u1EF1c (", bottleneckAlerts.length, " ph\u01B0\u01A1ng ti\u1EC7n d\u1EEBng \u0111\u1ED7 qu\xE1 th\u1EDDi gian quy \u0111\u1ECBnh)")), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] bg-rose-900 text-rose-200 px-2 py-0.5 rounded font-mono font-semibold" }, "Ng\u01B0\u1EE1ng quy \u0111\u1ECBnh: T\u1ED1i \u0111a 90 ph\xFAt t\u1EA1i C\u1EA3ng/Kho")), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3" }, bottleneckAlerts.map((alert) => /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: alert.id,
        className: "bg-slate-900/90 p-3.5 rounded-xl border border-rose-700/60 flex flex-col justify-between"
      },
      /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs mb-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-rose-300 font-mono text-sm bg-rose-950 px-2 py-0.5 rounded border border-rose-800" }, alert.vehiclePlate), /* @__PURE__ */ Rn.createElement("span", { className: "text-rose-400 font-bold bg-rose-500/20 px-2 py-0.5 rounded" }, "D\u1EEBng \u0111\u1ED7: ", alert.waitDurationMinutes, " ph\xFAt / Gi\u1EDBi h\u1EA1n ", alert.thresholdMinutes, "p")), /* @__PURE__ */ Rn.createElement("div", { className: "text-xs text-slate-300 font-medium mb-1" }, /* @__PURE__ */ Rn.createElement(MapPin, { className: "w-3.5 h-3.5 inline text-rose-400 mr-1" }), alert.location), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-400 italic mb-3" }, alert.reason), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 mb-3 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("span", null, "T\xE0i x\u1EBF: ", /* @__PURE__ */ Rn.createElement("strong", { className: "text-slate-200" }, alert.driverName)), /* @__PURE__ */ Rn.createElement("a", { href: `tel:${alert.driverPhone}`, className: "text-cyan-400 hover:underline flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(PhoneCall, { className: "w-3 h-3" }), " ", alert.driverPhone))),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 pt-2 border-t border-slate-800" }, /* @__PURE__ */ Rn.createElement(
        "button",
        {
          onClick: () => resolveBottleneck(alert.id),
          className: "flex-1 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-rose-900/40"
        },
        /* @__PURE__ */ Rn.createElement(RefreshCw, { className: "w-3.5 h-3.5" }),
        " H\u1ED1i th\xFAc \u0111i\u1EC1u \u0111\u1ED9 c\u1EA3ng / \u0110\u1ED5i c\u1ED5ng ki\u1EC3m h\xF3a"
      ))
    )))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "lg:col-span-2 bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(Radio, { className: "w-4 h-4 text-cyan-400 animate-pulse" }), /* @__PURE__ */ Rn.createElement("h3", { className: "text-sm font-bold text-white" }, "B\u1EA3n \u0110\u1ED3 Gi\xE1m S\xE1t V\u1EADn T\u1EA3i Tr\u1EF1c Tuy\u1EBFn: Tr\u1EE5c C\u1EE5m C\u1EA3ng H\u1EA3i Ph\xF2ng \u2194 H\xE0 N\u1ED9i \u2194 B\u1EAFc Ninh")), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-400 mt-0.5" }, "C\u1EADp nh\u1EADt to\u1EA1 \u0111\u1ED9 GPS t\u1EA7n su\u1EA5t 10 gi\xE2y/l\u1EA7n \u2022 T\xEDch h\u1EE3p c\u1EA3m bi\u1EBFn d\u1EA7u v\xE0 t\u1ED1c \u0111\u1ED9 \u0111\u1ED9ng c\u01A1")), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700" }, "Cao t\u1ED1c 5B & QL5A")), /* @__PURE__ */ Rn.createElement("div", { className: "relative w-full h-80 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden select-none" }, /* @__PURE__ */ Rn.createElement("svg", { className: "w-full h-full opacity-20" }, /* @__PURE__ */ Rn.createElement("defs", null, /* @__PURE__ */ Rn.createElement("pattern", { id: "grid", width: "30", height: "30", patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ Rn.createElement("path", { d: "M 30 0 L 0 0 0 30", fill: "none", stroke: "#38bdf8", strokeWidth: "0.5" }))), /* @__PURE__ */ Rn.createElement("rect", { width: "100%", height: "100%", fill: "url(#grid)" })), /* @__PURE__ */ Rn.createElement("svg", { className: "absolute inset-0 w-full h-full pointer-events-none" }, /* @__PURE__ */ Rn.createElement(
      "path",
      {
        d: "M 80% 70% Q 55% 65% 32% 62% T 12% 50%",
        fill: "none",
        stroke: "#1e3a8a",
        strokeWidth: "10",
        strokeLinecap: "round"
      }
    ), /* @__PURE__ */ Rn.createElement(
      "path",
      {
        d: "M 80% 70% Q 55% 65% 32% 62% T 12% 50%",
        fill: "none",
        stroke: "#38bdf8",
        strokeWidth: "2.5",
        strokeDasharray: "6 4",
        strokeLinecap: "round"
      }
    ), /* @__PURE__ */ Rn.createElement(
      "path",
      {
        d: "M 55% 65% Q 40% 45% 26% 38% T 18% 25%",
        fill: "none",
        stroke: "#1e3a8a",
        strokeWidth: "8",
        strokeLinecap: "round"
      }
    ), /* @__PURE__ */ Rn.createElement(
      "path",
      {
        d: "M 55% 65% Q 40% 45% 26% 38% T 18% 25%",
        fill: "none",
        stroke: "#a855f7",
        strokeWidth: "2",
        strokeDasharray: "4 4",
        strokeLinecap: "round"
      }
    )), waypoints.map((wp, i3) => /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: i3,
        style: { left: `${wp.x}%`, top: `${wp.y}%` },
        className: "absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-10"
      },
      /* @__PURE__ */ Rn.createElement("div", { className: `w-3.5 h-3.5 rounded-full border-2 ${wp.type === "PORT" ? "bg-cyan-500 border-white" : wp.type === "IZ" ? "bg-amber-500 border-white" : "bg-purple-500 border-white"} shadow-md` }),
      /* @__PURE__ */ Rn.createElement("span", { className: "text-[9px] font-bold text-slate-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-slate-700 mt-1 whitespace-nowrap shadow pointer-events-none group-hover:text-cyan-300" }, wp.name)
    )), vehicles.map((v3) => {
      let left = "50%";
      let top = "50%";
      if (v3.plateNumber === "15H-028.66") {
        left = "54%";
        top = "65%";
      } else if (v3.plateNumber === "15H-019.52") {
        left = "20%";
        top = "28%";
      } else if (v3.plateNumber === "15C-229.80") {
        left = "78%";
        top = "68%";
      } else if (v3.plateNumber === "15C-338.19") {
        left = "81%";
        top = "72%";
      } else if (v3.plateNumber === "15H-031.95") {
        left = "28%";
        top = "36%";
      } else if (v3.plateNumber === "15H-052.77") {
        left = "45%";
        top = "64%";
      } else {
        left = "75%";
        top = "62%";
      }
      const isSelected = selectedVehicle?.id === v3.id;
      return /* @__PURE__ */ Rn.createElement(
        "div",
        {
          key: v3.id,
          onClick: () => setSelectedVehicleId(v3.id),
          style: { left, top },
          className: `absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20 ${isSelected ? "scale-125 z-30" : "hover:scale-110"}`
        },
        /* @__PURE__ */ Rn.createElement("div", { className: `relative p-1.5 rounded-full border-2 shadow-xl ${v3.status === "BOTTLENECK" ? "bg-rose-600 border-white animate-bounce" : v3.status === "EMPTY_RUN" ? "bg-amber-500 border-white" : v3.status === "IN_TRANSIT" ? "bg-blue-600 border-cyan-300" : "bg-emerald-600 border-white"}` }, /* @__PURE__ */ Rn.createElement(Truck, { className: "w-3.5 h-3.5 text-white" })),
        /* @__PURE__ */ Rn.createElement("div", { className: `text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shadow mt-1 whitespace-nowrap ${isSelected ? "bg-cyan-400 text-slate-950 border border-white" : "bg-slate-900/90 text-slate-200 border border-slate-700"}` }, v3.plateNumber)
      );
    })), /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800 gap-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-cyan-400" }), " C\u1EA3ng bi\u1EC3n"), /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-400" }), " Khu c\xF4ng nghi\u1EC7p (IZ)"), /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-purple-400" }), " C\u1EA3ng c\u1EA1n ICD")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-blue-500" }), " C\xF3 h\xE0ng"), /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-500" }), " Ch\u1EA1y r\u1ED7ng"), /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-rose-500" }), " Ngh\u1EBDn c\u1EA3ng")))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-slate-400" }, "D\u1EEF li\u1EC7u Gi\xE1m s\xE1t Xe (Telematics)"), /* @__PURE__ */ Rn.createElement("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${selectedVehicle.status === "IN_TRANSIT" ? "bg-blue-500/20 text-blue-300 border border-blue-500/40" : selectedVehicle.status === "EMPTY_RUN" ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : selectedVehicle.status === "BOTTLENECK" ? "bg-rose-500/20 text-rose-300 border border-rose-500/40" : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"}` }, selectedVehicle.status === "IN_TRANSIT" ? "\u0110ANG CH\u1EDE H\xC0NG" : selectedVehicle.status === "EMPTY_RUN" ? "\u0110ANG CH\u1EA0Y R\u1ED6NG" : selectedVehicle.status === "BOTTLENECK" ? "NGH\u1EBCN D\u1EEANG \u0110\u1ED6" : "X\u1EBEP D\u1EE0 C\u1EA2NG")), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-lg font-black text-white font-mono" }, selectedVehicle.plateNumber), /* @__PURE__ */ Rn.createElement("div", { className: "text-xs text-slate-400 mt-0.5" }, selectedVehicle.model, " \u2022 ", selectedVehicle.trailerPlate ? `Mo\xF3c: ${selectedVehicle.trailerPlate}` : "Th\xF9ng li\u1EC1n")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-2 text-slate-300" }, /* @__PURE__ */ Rn.createElement(MapPin, { className: "w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" }), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400 block text-[11px]" }, "V\u1ECB tr\xED GPS hi\u1EC7n th\u1EDDi:"), /* @__PURE__ */ Rn.createElement("strong", { className: "text-white" }, selectedVehicle.currentLocation))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-2 text-slate-300" }, /* @__PURE__ */ Rn.createElement(Navigation, { className: "w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" }), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400 block text-[11px]" }, "\u0110i\u1EC3m \u0111\u1EBFn / L\u1ED9 tr\xECnh:"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-200" }, selectedVehicle.destination))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-2 pt-2 border-t border-slate-800" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/60" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Gauge, { className: "w-3.5 h-3.5 text-cyan-400" }), " T\u1ED1c \u0111\u1ED9 GPS"), /* @__PURE__ */ Rn.createElement("div", { className: "text-base font-bold text-white font-mono mt-0.5" }, selectedVehicle.speedKmh, " ", /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-400" }, "km/h"))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/60" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Fuel, { className: "w-3.5 h-3.5 text-amber-400" }), " B\xECnh nhi\xEAn li\u1EC7u"), /* @__PURE__ */ Rn.createElement("div", { className: "text-base font-bold text-white font-mono mt-0.5" }, selectedVehicle.fuelPercent, "% ", /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-400" }, "d\u1EA7u")))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/60" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-[11px] mb-1" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "H\u1EC7 s\u1ED1 l\u1EE3i d\u1EE5ng tr\u1ECDng t\u1EA3i:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-blue-400" }, selectedVehicle.utilizationRate, "%")), /* @__PURE__ */ Rn.createElement("div", { className: "text-xs font-mono font-semibold text-slate-200 mb-1.5" }, selectedVehicle.currentPayloadTons, " / ", selectedVehicle.maxPayloadTons, " T\u1EA5n"), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-700 h-1.5 rounded-full overflow-hidden" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-blue-500 h-full rounded-full", style: { width: `${selectedVehicle.utilizationRate}%` } }))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400" }, "T\xE0i x\u1EBF ph\u1EE5 tr\xE1ch:"), /* @__PURE__ */ Rn.createElement("div", { className: "font-bold text-slate-200" }, selectedVehicle.driverName)), /* @__PURE__ */ Rn.createElement(
      "a",
      {
        href: `tel:${selectedVehicle.driverPhone}`,
        className: "bg-blue-600/30 hover:bg-blue-600/50 text-cyan-300 border border-blue-500/40 px-2.5 py-1 rounded-lg font-mono text-xs flex items-center gap-1"
      },
      /* @__PURE__ */ Rn.createElement(PhoneCall, { className: "w-3 h-3" }),
      " G\u1ECDi \u0111i\u1EC7n"
    )))))));
  };

  // src/components/dispatcher/DispatchModal.tsx
  var DispatchModal = ({ isOpen, onClose }) => {
    const { vehicles, orders, createNewDispatch } = useTMS();
    const [selectedVehiclePlate, setSelectedVehiclePlate] = d2(vehicles[0]?.plateNumber || "");
    const [selectedOrderId, setSelectedOrderId] = d2(orders.find((o3) => o3.status === "PENDING")?.id || orders[0]?.id || "");
    const [sealNumber, setSealNumber] = d2(`NNP-SEAL-${Math.floor(1e4 + Math.random() * 89999)}`);
    const [optimalRoute, setOptimalRoute] = d2("C\u1EA3ng \u0110\xECnh V\u0169 -> \u0110\u01B0\u1EDDng 356 -> Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng (CT04) -> N\xFAt giao Y\xEAn M\u1EF9 -> KCN Y\xEAn Phong (125km)");
    if (!isOpen) return null;
    const currentVehicle = vehicles.find((v3) => v3.plateNumber === selectedVehiclePlate) || vehicles[0];
    const currentOrder = orders.find((o3) => o3.id === selectedOrderId) || orders[0];
    const handleSubmit = (e3) => {
      e3.preventDefault();
      if (!currentVehicle || !currentOrder) return;
      createNewDispatch({
        orderId: currentOrder.id,
        vehiclePlate: currentVehicle.plateNumber,
        trailerPlate: currentVehicle.trailerPlate,
        driverName: currentVehicle.driverName,
        driverPhone: currentVehicle.driverPhone,
        pickupPoint: currentOrder.pickupPoint,
        deliveryPoint: currentOrder.deliveryPoint,
        cargoType: currentOrder.cargoType,
        weightTons: currentOrder.weightTons,
        sealNumber,
        optimalRoute,
        tollFeeEstimateVnd: 41e4,
        distanceKm: currentOrder.distanceKm || 120,
        eta: currentOrder.etaDelivery || "18:00 13/11/2026"
      });
      onClose();
    };
    return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" }, /* @__PURE__ */ Rn.createElement("div", { className: "px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-blue-600/30 text-cyan-400 flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement(Send, { className: "w-4 h-4" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "text-sm font-bold text-white" }, "Ph\xE1t L\u1EC7nh \u0110i\u1EC1u \u0110\u1ED9ng \u0110i\u1EC7n T\u1EED (E-Dispatch Order)"), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-400" }, "\u0110\u1ED3ng b\u1ED9 t\u1EE9c th\u1EDDi sang \u0111i\u1EC7n tho\u1EA1i c\u1EE7a t\xE0i x\u1EBF v\xE0 kh\xE1ch h\xE0ng"))), /* @__PURE__ */ Rn.createElement("button", { onClick: onClose, className: "text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800" }, /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" }))), /* @__PURE__ */ Rn.createElement("form", { onSubmit: handleSubmit, className: "p-6 space-y-4 overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block text-xs font-semibold text-slate-300 mb-1" }, "Ch\u1ECDn Ph\u01B0\u01A1ng ti\u1EC7n & T\xE0i x\u1EBF:"), /* @__PURE__ */ Rn.createElement(
      "select",
      {
        value: selectedVehiclePlate,
        onChange: (e3) => setSelectedVehiclePlate(e3.target.value),
        className: "w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      },
      vehicles.map((v3) => /* @__PURE__ */ Rn.createElement("option", { key: v3.id, value: v3.plateNumber }, v3.plateNumber, " - ", v3.model, " (TX: ", v3.driverName, " - ", v3.status === "AVAILABLE" ? "\u{1F7E2} S\u1EB5n s\xE0ng" : "\u{1F7E1} " + v3.status, ")"))
    ), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 mt-1" }, "T\xE0i x\u1EBF ph\u1EE5 tr\xE1ch: ", /* @__PURE__ */ Rn.createElement("strong", { className: "text-slate-200" }, currentVehicle?.driverName), " (", currentVehicle?.driverPhone, ")")), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block text-xs font-semibold text-slate-300 mb-1" }, "Ch\u1ECDn \u0110\u01A1n h\xE0ng v\u1EADn chuy\u1EC3n:"), /* @__PURE__ */ Rn.createElement(
      "select",
      {
        value: selectedOrderId,
        onChange: (e3) => setSelectedOrderId(e3.target.value),
        className: "w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      },
      orders.map((o3) => /* @__PURE__ */ Rn.createElement("option", { key: o3.id, value: o3.id }, "[", o3.id, "] ", o3.customerName.substring(0, 30), "... (", o3.weightTons, " T\u1EA5n)"))
    ), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 mt-1" }, "Tr\u1ECDng l\u01B0\u1EE3ng: ", /* @__PURE__ */ Rn.createElement("strong", { className: "text-cyan-300" }, currentOrder?.weightTons, " T\u1EA5n"), " \u2022 ", currentOrder?.cargoType))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-2 text-xs" }, /* @__PURE__ */ Rn.createElement(MapPin, { className: "w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" }), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400" }, "\u0110i\u1EC3m b\u1ED1c h\xE0ng (Pick-up):"), /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200" }, currentOrder?.pickupPoint))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-2 text-xs border-t border-slate-800/80 pt-2" }, /* @__PURE__ */ Rn.createElement(MapPin, { className: "w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" }), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400" }, "\u0110i\u1EC3m tr\u1EA3 h\xE0ng (Drop-off):"), /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200" }, currentOrder?.deliveryPoint)))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block text-xs font-semibold text-slate-300 mb-1" }, "S\u1ED1 K\u1EB9p Ch\xEC / Container Seal:"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: sealNumber,
        onChange: (e3) => setSealNumber(e3.target.value),
        required: true,
        className: "w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500 font-mono"
      }
    )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block text-xs font-semibold text-slate-300 mb-1" }, "\u01AF\u1EDBc t\xEDnh Ph\xED C\u1EA7u \u0111\u01B0\u1EDDng BOT:"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        disabled: true,
        value: "410.000 VN\u0110 (Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng)",
        className: "w-full bg-slate-950/60 text-slate-400 text-xs rounded-xl p-2.5 border border-slate-800 cursor-not-allowed"
      }
    ))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block text-xs font-semibold text-slate-300 mb-1" }, "G\u1EE3i \xFD L\u1ED9 tr\xECnh V\u1EADn T\u1EA3i T\u1ED1i \u01AFu:"), /* @__PURE__ */ Rn.createElement(
      "textarea",
      {
        rows: 2,
        value: optimalRoute,
        onChange: (e3) => setOptimalRoute(e3.target.value),
        className: "w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      }
    )), /* @__PURE__ */ Rn.createElement("div", { className: "pt-3 border-t border-slate-800 flex items-center justify-end gap-3" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: "px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800"
      },
      "H\u1EE7y b\u1ECF"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        type: "submit",
        className: "px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 flex items-center gap-2"
      },
      /* @__PURE__ */ Rn.createElement(Send, { className: "w-4 h-4" }),
      " Ph\xE1t L\u1EC7nh \u0110i\u1EC1u \u0110\u1ED9ng \u0110i\u1EC7n T\u1EED"
    )))));
  };

  // src/components/dispatcher/DispatchBoard.tsx
  var DispatchBoard = () => {
    const { vehicles, orders, smartSuggestions } = useTMS();
    const [activeTab, setActiveTab] = d2("BOARD");
    const [statusFilter, setStatusFilter] = d2("ALL");
    const [typeFilter, setTypeFilter] = d2("ALL");
    const [searchTerm, setSearchTerm] = d2("");
    const [isDispatchModalOpen, setIsDispatchModalOpen] = d2(false);
    const countInTransit = vehicles.filter((v3) => v3.status === "IN_TRANSIT").length;
    const countEmpty = vehicles.filter((v3) => v3.status === "EMPTY_RUN").length;
    const countLoading = vehicles.filter((v3) => v3.status === "LOADING_PORT").length;
    const countBottleneck = vehicles.filter((v3) => v3.status === "BOTTLENECK").length;
    const countMaintenance = vehicles.filter((v3) => v3.status === "MAINTENANCE").length;
    const countAvailable = vehicles.filter((v3) => v3.status === "AVAILABLE").length;
    const filteredVehicles = vehicles.filter((v3) => {
      if (statusFilter !== "ALL" && v3.status !== statusFilter) return false;
      if (typeFilter !== "ALL" && v3.type !== typeFilter) return false;
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        return v3.plateNumber.toLowerCase().includes(term) || v3.driverName.toLowerCase().includes(term) || v3.currentLocation.toLowerCase().includes(term) || v3.destination.toLowerCase().includes(term);
      }
      return true;
    });
    const unappliedCount = smartSuggestions.filter((s3) => !s3.isApplied).length;
    return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-5 animate-fade-in" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 overflow-x-auto" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setActiveTab("BOARD"),
        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "BOARD" ? "bg-blue-600 text-white shadow-md shadow-blue-600/30" : "text-slate-400 hover:text-white hover:bg-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement(Truck, { className: "w-4 h-4" }),
      " B\u1EA3ng \u0110i\u1EC1u Ph\u1ED1i Xe (",
      vehicles.length,
      ")"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setActiveTab("SMART_CONSOLIDATION"),
        className: `relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "SMART_CONSOLIDATION" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30" : "text-slate-400 hover:text-white hover:bg-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-4 h-4 text-amber-300" }),
      " Gh\xE9p H\xE0ng Th\xF4ng Minh (AI LTL & Backhaul)",
      unappliedCount > 0 && /* @__PURE__ */ Rn.createElement("span", { className: "bg-amber-400 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full" }, unappliedCount)
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setActiveTab("GPS_TOWER"),
        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "GPS_TOWER" ? "bg-blue-600 text-white shadow-md shadow-blue-600/30" : "text-slate-400 hover:text-white hover:bg-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement(Radio, { className: "w-4 h-4" }),
      " Gi\xE1m S\xE1t GPS & \u0110i\u1EC3m Ngh\u1EBDn C\u1EA3ng"
    )), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setIsDispatchModalOpen(true),
        className: "flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-900/30 transition-all active:scale-95"
      },
      /* @__PURE__ */ Rn.createElement(Plus, { className: "w-4 h-4" }),
      " Ph\xE1t L\u1EC7nh \u0110i\u1EC1u \u0110\u1ED9ng M\u1EDBi"
    )), activeTab === "SMART_CONSOLIDATION" && /* @__PURE__ */ Rn.createElement(SmartConsolidation, null), activeTab === "GPS_TOWER" && /* @__PURE__ */ Rn.createElement(GPSControlTower, null), activeTab === "BOARD" && /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center gap-2 text-xs" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setStatusFilter("ALL"),
        className: `px-3 py-1.5 rounded-xl font-semibold transition-colors ${statusFilter === "ALL" ? "bg-slate-200 text-slate-900" : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`
      },
      "T\u1EA5t c\u1EA3 (",
      vehicles.length,
      ")"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setStatusFilter("IN_TRANSIT"),
        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${statusFilter === "IN_TRANSIT" ? "bg-blue-600 text-white" : "bg-slate-900 text-slate-400 hover:text-blue-300 border border-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-blue-400" }),
      " \u0110ang ch\u1EDF h\xE0ng (",
      countInTransit,
      ")"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setStatusFilter("EMPTY_RUN"),
        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${statusFilter === "EMPTY_RUN" ? "bg-amber-600 text-white" : "bg-slate-900 text-amber-300 hover:text-amber-200 border border-amber-900/60"}`
      },
      /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-amber-400" }),
      " \u0110ang ch\u1EA1y r\u1ED7ng (",
      countEmpty,
      ") - C\u1EA7n gh\xE9p!"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setStatusFilter("LOADING_PORT"),
        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${statusFilter === "LOADING_PORT" ? "bg-cyan-600 text-white" : "bg-slate-900 text-slate-400 hover:text-cyan-300 border border-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-cyan-400" }),
      " X\u1EBFp/d\u1EE1 t\u1EA1i C\u1EA3ng (",
      countLoading,
      ")"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setStatusFilter("BOTTLENECK"),
        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${statusFilter === "BOTTLENECK" ? "bg-rose-600 text-white" : "bg-slate-900 text-rose-300 hover:text-rose-200 border border-rose-900/60"}`
      },
      /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-rose-400 animate-ping" }),
      " Ngh\u1EBDn c\u1EA3ng (",
      countBottleneck,
      ")"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setStatusFilter("AVAILABLE"),
        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${statusFilter === "AVAILABLE" ? "bg-emerald-600 text-white" : "bg-slate-900 text-slate-400 hover:text-emerald-300 border border-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-400" }),
      " S\u1EB5n s\xE0ng (",
      countAvailable,
      ")"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setStatusFilter("MAINTENANCE"),
        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-colors ${statusFilter === "MAINTENANCE" ? "bg-purple-600 text-white" : "bg-slate-900 text-slate-400 hover:text-purple-300 border border-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-purple-400" }),
      " B\u1EA3o d\u01B0\u1EE1ng (",
      countMaintenance,
      ")"
    )), /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800/80" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 flex-1 max-w-md" }, /* @__PURE__ */ Rn.createElement(Search, { className: "w-4 h-4 text-slate-400" }), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: searchTerm,
        onChange: (e3) => setSearchTerm(e3.target.value),
        placeholder: "T\xECm bi\u1EC3n s\u1ED1 xe, t\xE0i x\u1EBF, v\u1ECB tr\xED GPS...",
        className: "bg-transparent text-xs text-white placeholder-slate-500 w-full focus:outline-none"
      }
    )), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-400" }, "Lo\u1EA1i ph\u01B0\u01A1ng ti\u1EC7n:"), /* @__PURE__ */ Rn.createElement(
      "select",
      {
        value: typeFilter,
        onChange: (e3) => setTypeFilter(e3.target.value),
        className: "bg-slate-900 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none"
      },
      /* @__PURE__ */ Rn.createElement("option", { value: "ALL" }, "T\u1EA5t c\u1EA3 ch\u1EE7ng lo\u1EA1i"),
      /* @__PURE__ */ Rn.createElement("option", { value: "CONTAINER_40FT" }, "\u0110\u1EA7u k\xE9o Container 40ft"),
      /* @__PURE__ */ Rn.createElement("option", { value: "CONTAINER_20FT" }, "\u0110\u1EA7u k\xE9o Container 20ft"),
      /* @__PURE__ */ Rn.createElement("option", { value: "TRUCK_15T" }, "Xe t\u1EA3i th\xF9ng 15 T\u1EA5n"),
      /* @__PURE__ */ Rn.createElement("option", { value: "TRUCK_8T" }, "Xe t\u1EA3i th\xF9ng 8 T\u1EA5n")
    ))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" }, filteredVehicles.map((vehicle) => {
      const activeOrder = orders.find((o3) => o3.id === vehicle.activeOrderId);
      const statusBadges = {
        IN_TRANSIT: { label: "\u0110ang ch\u1EDF h\xE0ng", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
        EMPTY_RUN: { label: "\u0110ang ch\u1EA1y r\u1ED7ng", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" },
        LOADING_PORT: { label: "X\u1EBFp/d\u1EE1 t\u1EA1i c\u1EA3ng", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
        BOTTLENECK: { label: "C\u1EA3nh b\xE1o ngh\u1EBDn", color: "bg-rose-500/20 text-rose-300 border-rose-500/40" },
        MAINTENANCE: { label: "B\u1EA3o d\u01B0\u1EE1ng", color: "bg-purple-500/20 text-purple-300 border-purple-500/40" },
        AVAILABLE: { label: "S\u1EB5n s\xE0ng", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" }
      };
      const badge = statusBadges[vehicle.status];
      return /* @__PURE__ */ Rn.createElement(
        "div",
        {
          key: vehicle.id,
          className: "bg-slate-900/90 rounded-2xl border border-slate-800/90 hover:border-slate-700 p-4 flex flex-col justify-between transition-all duration-200 shadow-md hover:shadow-xl group"
        },
        /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start justify-between gap-2 mb-2" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-black text-sm text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800" }, vehicle.plateNumber), vehicle.trailerPlate && /* @__PURE__ */ Rn.createElement("span", { className: "font-mono text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded" }, vehicle.trailerPlate)), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 mt-1 truncate" }, vehicle.model)), /* @__PURE__ */ Rn.createElement("span", { className: `text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.color}` }, badge.label)), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 mb-3 space-y-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-[11px]" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "Tr\u1ECDng t\u1EA3i ch\u1EDF:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-bold text-slate-200" }, vehicle.currentPayloadTons, " / ", vehicle.maxPayloadTons, " T\u1EA5n (", vehicle.utilizationRate, "%)")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-800 h-1.5 rounded-full overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
          "div",
          {
            className: `h-full rounded-full transition-all duration-300 ${vehicle.utilizationRate >= 80 ? "bg-emerald-500" : vehicle.utilizationRate >= 50 ? "bg-blue-500" : vehicle.utilizationRate > 0 ? "bg-amber-500" : "bg-slate-600"}`,
            style: { width: `${Math.min(vehicle.utilizationRate, 100)}%` }
          }
        ))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-1.5 text-xs mb-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-1.5 text-slate-300" }, /* @__PURE__ */ Rn.createElement(MapPin, { className: "w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-300 line-clamp-1" }, vehicle.currentLocation)), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-1.5 text-slate-400" }, /* @__PURE__ */ Rn.createElement(Navigation, { className: "w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400 line-clamp-1" }, vehicle.destination))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800/80 text-slate-400" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", null, "T\xE0i x\u1EBF:"), /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200 truncate" }, vehicle.driverName)), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("span", null, "T\u1ED1c \u0111\u1ED9 / B\xECnh d\u1EA7u:"), /* @__PURE__ */ Rn.createElement("div", { className: "font-mono font-semibold text-slate-200" }, vehicle.speedKmh, " km/h \u2022 ", vehicle.fuelPercent, "%")))),
        /* @__PURE__ */ Rn.createElement("div", { className: "mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between gap-2" }, vehicle.status === "EMPTY_RUN" ? /* @__PURE__ */ Rn.createElement(
          "button",
          {
            onClick: () => setActiveTab("SMART_CONSOLIDATION"),
            className: "w-full py-1.5 px-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
          },
          /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-3.5 h-3.5" }),
          " T\xECm \u0111\u01A1n chi\u1EC1u v\u1EC1 ngay"
        ) : vehicle.status === "BOTTLENECK" ? /* @__PURE__ */ Rn.createElement(
          "button",
          {
            onClick: () => setActiveTab("GPS_TOWER"),
            className: "w-full py-1.5 px-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
          },
          /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-3.5 h-3.5" }),
          " X\u1EED l\xFD ngh\u1EBDn c\u1EA3ng (",
          vehicle.portWaitMinutes,
          "p)"
        ) : /* @__PURE__ */ Rn.createElement(
          "button",
          {
            onClick: () => setIsDispatchModalOpen(true),
            className: "w-full py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-medium flex items-center justify-center gap-1 transition-colors"
          },
          /* @__PURE__ */ Rn.createElement(Send, { className: "w-3 h-3 text-cyan-400" }),
          " \u0110i\u1EC1u \u0111\u1ED9ng xe"
        ))
      );
    }))), /* @__PURE__ */ Rn.createElement(
      DispatchModal,
      {
        isOpen: isDispatchModalOpen,
        onClose: () => setIsDispatchModalOpen(false)
      }
    ));
  };

  // src/components/driver/EPodModal.tsx
  var EPodModal = ({ isOpen, onClose }) => {
    const { dispatchOrder, submitEpod } = useTMS();
    const canvasRef = A2(null);
    const [isDrawing, setIsDrawing] = d2(false);
    const [hasSignature, setHasSignature] = d2(false);
    const [signerName, setSignerName] = d2("L\xEA Tu\u1EA5n V\u0169 (Th\u1EE7 kho Samsung SEV)");
    const [cargoCondition, setCargoCondition] = d2("\u0110\u1EA7y \u0111\u1EE7 nguy\xEAn seal, kh\xF4ng m\xF3p m\xE9o");
    const [sealConfirmed, setSealConfirmed] = d2(true);
    y2(() => {
      if (isOpen && canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "#0F172A";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.lineWidth = 2.5;
          ctx.lineCap = "round";
          ctx.strokeStyle = "#38BDF8";
        }
      }
    }, [isOpen]);
    if (!isOpen) return null;
    const startDrawing = (e3) => {
      setIsDrawing(true);
      setHasSignature(true);
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e3 ? e3.touches[0].clientX : e3.clientX;
      const clientY = "touches" in e3 ? e3.touches[0].clientY : e3.clientY;
      ctx.beginPath();
      ctx.moveTo(clientX - rect.left, clientY - rect.top);
    };
    const draw = (e3) => {
      if (!isDrawing) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e3 ? e3.touches[0].clientX : e3.clientX;
      const clientY = "touches" in e3 ? e3.touches[0].clientY : e3.clientY;
      ctx.lineTo(clientX - rect.left, clientY - rect.top);
      ctx.stroke();
    };
    const stopDrawing = () => {
      setIsDrawing(false);
    };
    const clearCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "#0F172A";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setHasSignature(false);
    };
    const handleSubmit = (e3) => {
      e3.preventDefault();
      const signatureData = canvasRef.current ? canvasRef.current.toDataURL() : "";
      submitEpod(signatureData, signerName, `${cargoCondition}. S\u1ED1 seal: ${dispatchOrder.sealNumber}`);
      onClose();
    };
    return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]" }, /* @__PURE__ */ Rn.createElement("div", { className: "px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-emerald-600/30 text-emerald-400 flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement(ShieldCheck, { className: "w-5 h-5" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "text-sm font-bold text-white" }, "Bi\xEAn B\u1EA3n Giao Nh\u1EADn \u0110i\u1EC7n T\u1EED (e-POD)"), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-400" }, "K\xFD x\xE1c nh\u1EADn nh\u1EADn h\xE0ng tr\u1EF1c tuy\u1EBFn & B\xE0n giao seal"))), /* @__PURE__ */ Rn.createElement("button", { onClick: onClose, className: "text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800" }, /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" }))), /* @__PURE__ */ Rn.createElement("form", { onSubmit: handleSubmit, className: "p-5 space-y-4 overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1.5 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "M\xE3 l\u1EC7nh \u0111i\u1EC1u \u0111\u1ED9ng:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-bold text-white" }, dispatchOrder.id)), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "Ph\u01B0\u01A1ng ti\u1EC7n / T\xE0i x\u1EBF:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-cyan-300" }, dispatchOrder.vehiclePlate, " (", dispatchOrder.driverName, ")")), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "H\xE0ng ho\xE1:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-medium text-slate-200" }, dispatchOrder.cargoType, " (", dispatchOrder.weightTons, " T\u1EA5n)")), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between border-t border-slate-800 pt-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "S\u1ED1 K\u1EB9p Ch\xEC / Seal:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-extrabold text-amber-300" }, dispatchOrder.sealNumber))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 bg-slate-800/40 p-3 rounded-xl border border-slate-700/60" }, /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "checkbox",
        id: "seal-check",
        checked: sealConfirmed,
        onChange: (e3) => setSealConfirmed(e3.target.checked),
        className: "w-4 h-4 rounded text-blue-600 focus:ring-0 bg-slate-900 border-slate-700"
      }
    ), /* @__PURE__ */ Rn.createElement("label", { htmlFor: "seal-check", className: "text-xs text-slate-200 cursor-pointer" }, "X\xE1c nh\u1EADn s\u1ED1 k\u1EB9p ch\xEC tr\xF9ng kh\u1EDBp v\xE0 c\xF2n nguy\xEAn v\u1EB9n 100% khi b\xE0n giao.")), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block text-xs font-semibold text-slate-300 mb-1" }, "H\u1ECD t\xEAn & Ch\u1EE9c v\u1EE5 ng\u01B0\u1EDDi nh\u1EADn h\xE0ng / Th\u1EE7 kho:"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: signerName,
        onChange: (e3) => setSignerName(e3.target.value),
        required: true,
        className: "w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      }
    )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block text-xs font-semibold text-slate-300 mb-1" }, "Ghi ch\xFA t\xECnh tr\u1EA1ng h\xE0ng ho\xE1 b\xE0n giao:"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: cargoCondition,
        onChange: (e3) => setCargoCondition(e3.target.value),
        className: "w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      }
    )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-1.5" }, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs font-semibold text-slate-300 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(PenTool, { className: "w-3.5 h-3.5 text-cyan-400" }), " K\xFD t\xEAn \u0111i\u1EC7n t\u1EED tr\u1EF1c ti\u1EBFp tr\xEAn m\xE0n h\xECnh:"), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        type: "button",
        onClick: clearCanvas,
        className: "text-[11px] text-slate-400 hover:text-rose-400 flex items-center gap-1"
      },
      /* @__PURE__ */ Rn.createElement(Eraser, { className: "w-3 h-3" }),
      " K\xFD l\u1EA1i"
    )), /* @__PURE__ */ Rn.createElement("div", { className: "border border-slate-700 rounded-xl overflow-hidden bg-slate-950 relative" }, /* @__PURE__ */ Rn.createElement(
      "canvas",
      {
        ref: canvasRef,
        width: 450,
        height: 160,
        onMouseDown: startDrawing,
        onMouseMove: draw,
        onMouseUp: stopDrawing,
        onMouseLeave: stopDrawing,
        onTouchStart: startDrawing,
        onTouchMove: draw,
        onTouchEnd: stopDrawing,
        className: "w-full h-40 touch-none cursor-crosshair"
      }
    ), !hasSignature && /* @__PURE__ */ Rn.createElement("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none text-slate-600 text-xs" }, "(D\xF9ng ng\xF3n tay ho\u1EB7c chu\u1ED9t \u0111\u1EC3 k\xFD t\xEAn x\xE1c nh\u1EADn v\xE0o \u0111\xE2y)"))), /* @__PURE__ */ Rn.createElement("div", { className: "pt-2 flex items-center justify-end gap-3" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: "px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800"
      },
      "\u0110\xF3ng"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        type: "submit",
        disabled: !sealConfirmed,
        className: "px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-900/30 flex items-center gap-2"
      },
      /* @__PURE__ */ Rn.createElement(CircleCheck, { className: "w-4 h-4" }),
      " K\xFD & Ho\xE0n T\u1EA5t Giao H\xE0ng"
    )))));
  };

  // src/components/driver/FuelLogForm.tsx
  var FuelLogForm = ({ onClose }) => {
    const { dispatchOrder, submitFuelLog, vehicles } = useTMS();
    const currentVehicle = vehicles.find((v3) => v3.plateNumber === dispatchOrder.vehiclePlate) || vehicles[0];
    const [stationName, setStationName] = d2("Petrolimex Tr\u1EA1m 14 - C\u1EA3ng Ch\xF9a V\u1EBD, H\u1EA3i Ph\xF2ng");
    const [liters, setLiters] = d2(150);
    const [amountVnd, setAmountVnd] = d2(33e5);
    const [odometerKm, setOdometerKm] = d2(currentVehicle.odometerKm + 120);
    const [receiptNote, setReceiptNote] = d2("\u0110\u1ED5 d\u1EA7u tr\u01B0\u1EDBc khi xu\u1EA5t ph\xE1t cao t\u1ED1c 5B");
    const [hasReceiptPhoto, setHasReceiptPhoto] = d2(true);
    const handleLitersChange = (val) => {
      setLiters(val);
      setAmountVnd(Math.round(val * 22e3));
    };
    const handleSubmit = (e3) => {
      e3.preventDefault();
      submitFuelLog({
        vehiclePlate: dispatchOrder.vehiclePlate,
        driverName: dispatchOrder.driverName,
        stationName,
        liters: Number(liters),
        amountVnd: Number(amountVnd),
        odometerKm: Number(odometerKm),
        receiptNote: `${receiptNote} (\u0110\xE3 \u0111\xEDnh k\xE8m \u1EA3nh ho\xE1 \u0111\u01A1n VAT & \u0111\u1ED3ng h\u1ED3 c\u1ED9t b\u01A1m)`
      });
      if (onClose) onClose();
    };
    return /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between border-b border-slate-800 pb-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement(Fuel, { className: "w-4 h-4" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "text-sm font-bold text-white" }, "Khai B\xE1o Phi\u1EBFu \u0110\u1ED5 Nhi\xEAn Li\u1EC7u Nhanh"), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-400" }, "Xe: ", dispatchOrder.vehiclePlate, " \u2022 T\xE0i x\u1EBF: ", dispatchOrder.driverName))), onClose && /* @__PURE__ */ Rn.createElement("button", { onClick: onClose, className: "text-slate-400 hover:text-white p-1 rounded-lg" }, /* @__PURE__ */ Rn.createElement(X2, { className: "w-4 h-4" }))), /* @__PURE__ */ Rn.createElement("form", { onSubmit: handleSubmit, className: "space-y-3.5 text-xs" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "Tr\u1EA1m X\u0103ng D\u1EA7u \u0110\u1ED5:"), /* @__PURE__ */ Rn.createElement(
      "select",
      {
        value: stationName,
        onChange: (e3) => setStationName(e3.target.value),
        className: "w-full bg-slate-950 text-slate-200 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-amber-500"
      },
      /* @__PURE__ */ Rn.createElement("option", { value: "Petrolimex Tr\u1EA1m 14 - C\u1EA3ng Ch\xF9a V\u1EBD, H\u1EA3i Ph\xF2ng" }, "Petrolimex Tr\u1EA1m 14 - C\u1EA3ng Ch\xF9a V\u1EBD, H\u1EA3i Ph\xF2ng"),
      /* @__PURE__ */ Rn.createElement("option", { value: "Tr\u1EA1m X\u0103ng d\u1EA7u PVOIL \u0110\xECnh V\u0169 - \u0110\u01B0\u1EDDng 356" }, "Tr\u1EA1m X\u0103ng d\u1EA7u PVOIL \u0110\xECnh V\u0169 - \u0110\u01B0\u1EDDng 356"),
      /* @__PURE__ */ Rn.createElement("option", { value: "Tr\u1EA1m PVOIL Km 48 Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng (H\u1EA3i D\u01B0\u01A1ng)" }, "Tr\u1EA1m PVOIL Km 48 Cao t\u1ED1c H\xE0 N\u1ED9i - H\u1EA3i Ph\xF2ng (H\u1EA3i D\u01B0\u01A1ng)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "Petrolimex Tr\u1EA1m 23 - KCN Ti\xEAn S\u01A1n B\u1EAFc Ninh" }, "Petrolimex Tr\u1EA1m 23 - KCN Ti\xEAn S\u01A1n B\u1EAFc Ninh"),
      /* @__PURE__ */ Rn.createElement("option", { value: "Petrolimex KCN Y\xEAn Phong - B\u1EAFc Ninh" }, "Petrolimex KCN Y\xEAn Phong - B\u1EAFc Ninh")
    )), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "S\u1ED1 l\xEDt d\u1EA7u Diesel (L\xEDt):"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "number",
        min: "10",
        max: "600",
        value: liters,
        onChange: (e3) => handleLitersChange(Number(e3.target.value)),
        required: true,
        className: "w-full bg-slate-950 text-white font-mono font-bold text-sm rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-amber-500"
      }
    )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "T\u1ED5ng ti\u1EC1n thanh to\xE1n (VN\u0110):"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "number",
        step: "1000",
        value: amountVnd,
        onChange: (e3) => setAmountVnd(Number(e3.target.value)),
        required: true,
        className: "w-full bg-slate-950 text-emerald-400 font-mono font-bold text-sm rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-amber-500"
      }
    ))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "S\u1ED1 C\xF4ng-t\u01A1-m\xE9t (Odometer) hi\u1EC7n t\u1EA1i tr\xEAn \u0111\u1ED3ng h\u1ED3 xe:"), /* @__PURE__ */ Rn.createElement("div", { className: "relative" }, /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "number",
        value: odometerKm,
        onChange: (e3) => setOdometerKm(Number(e3.target.value)),
        required: true,
        className: "w-full bg-slate-950 text-cyan-300 font-mono font-bold text-sm rounded-xl p-2.5 pl-9 border border-slate-700 focus:outline-none focus:border-cyan-500"
      }
    ), /* @__PURE__ */ Rn.createElement(Gauge, { className: "w-4 h-4 text-slate-500 absolute left-3 top-3" })), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 mt-1 block" }, "L\u1EA7n \u0111\u1ED5 tr\u01B0\u1EDBc: ", currentVehicle.odometerKm.toLocaleString("vi-VN"), " km (\u0110\xE3 ch\u1EA1y +", odometerKm - currentVehicle.odometerKm, " km)")), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(Camera, { className: "w-4 h-4 text-slate-400" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-300 text-xs" }, "\u1EA2nh ch\u1EE5p c\u1ED9t b\u01A1m & H\xF3a \u0111\u01A1n VAT:")), /* @__PURE__ */ Rn.createElement("label", { className: "bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold px-3 py-1.5 rounded-lg cursor-pointer transition-colors border border-slate-700" }, hasReceiptPhoto ? "\u2713 \u0110\xE3 ch\u1EE5p (IMG_0891.JPG)" : "Ch\u1EE5p \u1EA3nh", /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "file",
        className: "hidden",
        onChange: () => setHasReceiptPhoto(true)
      }
    ))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "Ghi ch\xFA chuy\u1EBFn \u0111i / l\xFD do n\u1EA1p:"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: receiptNote,
        onChange: (e3) => setReceiptNote(e3.target.value),
        className: "w-full bg-slate-950 text-slate-300 text-xs rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-amber-500"
      }
    )), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        type: "submit",
        className: "w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs shadow-lg shadow-amber-900/30 flex items-center justify-center gap-1.5 transition-all"
      },
      /* @__PURE__ */ Rn.createElement(Check, { className: "w-4 h-4" }),
      " G\u1EEDi Duy\u1EC7t Phi\u1EBFu Nhi\xEAn Li\u1EC7u"
    )));
  };

  // src/components/driver/DriverMobileView.tsx
  var DriverMobileView = () => {
    const { dispatchOrder, updateDispatchStep, orders, vehicles } = useTMS();
    const [isFullWidth, setIsFullWidth] = d2(false);
    const [activeDriverTab, setActiveDriverTab] = d2("ORDER");
    const [isEpodModalOpen, setIsEpodModalOpen] = d2(false);
    const currentVehicle = vehicles.find((v3) => v3.plateNumber === dispatchOrder.vehiclePlate) || vehicles[0];
    const activeOrder = orders.find((o3) => o3.id === dispatchOrder.orderId);
    const steps = [
      { stepNum: 1, label: "\u0110\xE3 nh\u1EADn l\u1EC7nh", desc: "X\xE1c nh\u1EADn \u0111i\u1EC1u \u0111\u1ED9ng", timestamp: dispatchOrder.stepTimestamps.step1 },
      { stepNum: 2, label: "\u0110\xE3 \u0111\u1EBFn c\u1EA3ng x\u1EBFp h\xE0ng", desc: "Check-in c\u1ED5ng & k\u1EB9p ch\xEC", timestamp: dispatchOrder.stepTimestamps.step2 },
      { stepNum: 3, label: "\u0110ang v\u1EADn chuy\u1EC3n", desc: "L\u0103n b\xE1nh tr\xEAn h\xE0nh tr\xECnh", timestamp: dispatchOrder.stepTimestamps.step3 },
      { stepNum: 4, label: "Ho\xE0n th\xE0nh giao h\xE0ng", desc: "K\xFD nh\u1EADn e-POD", timestamp: dispatchOrder.stepTimestamps.step4 }
    ];
    const handleStepClick = (stepNum) => {
      if (stepNum === 4) {
        setIsEpodModalOpen(true);
      } else {
        updateDispatchStep(stepNum);
      }
    };
    return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4 animate-fade-in flex flex-col items-center" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-full max-w-4xl flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(Smartphone, { className: "w-4 h-4 text-cyan-400" }), /* @__PURE__ */ Rn.createElement("span", { className: "font-semibold text-white" }, "Ph\xE2n H\u1EC7 T\xE0i X\u1EBF (NNP Driver Mobile App)"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400 hidden sm:inline" }, "\u2022 Thi\u1EBFt k\u1EBF chu\u1EA9n c\xF4ng th\xE1i h\u1ECDc cho t\xE0i x\u1EBF \u0111\u01B0\u1EDDng d\xE0i")), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setIsFullWidth(!isFullWidth),
        className: "flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors font-medium"
      },
      isFullWidth ? /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement(Minimize2, { className: "w-3.5 h-3.5" }), " Xem d\u1EA1ng Khung Smartphone") : /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement(Maximize2, { className: "w-3.5 h-3.5" }), " M\u1EDF r\u1ED9ng to\xE0n m\xE0n h\xECnh")
    )), /* @__PURE__ */ Rn.createElement(
      "div",
      {
        className: `w-full transition-all duration-300 ${isFullWidth ? "max-w-4xl" : "max-w-md bg-slate-950 p-3 rounded-[40px] border-4 border-slate-700 shadow-2xl relative shadow-blue-950/50"}`
      },
      !isFullWidth && /* @__PURE__ */ Rn.createElement("div", { className: "w-32 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700" }), /* @__PURE__ */ Rn.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-900" })),
      /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-inner flex flex-col" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-gradient-to-r from-blue-950 to-slate-900 p-4 border-b border-blue-900/40" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-10 h-10 rounded-full bg-blue-600/30 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 font-bold text-sm" }, "TX"), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-white text-sm" }, dispatchOrder.driverName), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-cyan-300 font-mono flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }), "Xe: ", dispatchOrder.vehiclePlate, " (", dispatchOrder.trailerPlate || "Mo\xF3c r\u1EDDi", ")"))), /* @__PURE__ */ Rn.createElement(
        "a",
        {
          href: "tel:19008899",
          className: "bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 p-2 rounded-xl flex items-center gap-1 text-[11px] font-bold"
        },
        /* @__PURE__ */ Rn.createElement(PhoneCall, { className: "w-3.5 h-3.5" }),
        " Hotline"
      )), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800/80 text-xs" }, /* @__PURE__ */ Rn.createElement(
        "button",
        {
          onClick: () => setActiveDriverTab("ORDER"),
          className: `py-1.5 rounded-lg font-bold transition-colors ${activeDriverTab === "ORDER" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`
        },
        "L\u1EC7nh V\u1EADn Chuy\u1EC3n"
      ), /* @__PURE__ */ Rn.createElement(
        "button",
        {
          onClick: () => setActiveDriverTab("FUEL"),
          className: `py-1.5 rounded-lg font-bold transition-colors ${activeDriverTab === "FUEL" ? "bg-amber-600 text-white" : "text-slate-400 hover:text-white"}`
        },
        "Khai B\xE1o Phi\u1EBFu D\u1EA7u"
      ))), /* @__PURE__ */ Rn.createElement("div", { className: "p-4 space-y-4" }, activeDriverTab === "FUEL" ? /* @__PURE__ */ Rn.createElement(FuelLogForm, null) : /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-950 p-4 rounded-2xl border border-slate-800 shadow-md" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-bold text-cyan-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800" }, "L\u1EC6NH: ", dispatchOrder.id), /* @__PURE__ */ Rn.createElement("span", { className: "text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800" }, "Kh\u1ED1i l\u01B0\u1EE3ng: ", dispatchOrder.weightTons, " T\u1EA5n")), /* @__PURE__ */ Rn.createElement("div", { className: "font-bold text-white text-sm mb-1" }, dispatchOrder.cargoType), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 my-2.5 flex items-center justify-between text-xs" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "S\u1ED1 K\u1EB9p Ch\xEC / Seal:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-extrabold text-amber-300 text-sm" }, dispatchOrder.sealNumber)), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2 text-xs pt-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]" }, "A"), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 uppercase font-semibold" }, "\u0110i\u1EC3m b\u1ED1c h\xE0ng:"), /* @__PURE__ */ Rn.createElement("div", { className: "text-slate-200 font-medium" }, dispatchOrder.pickupPoint))), /* @__PURE__ */ Rn.createElement("div", { className: "w-0.5 h-3 bg-slate-700 ml-2" }), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]" }, "B"), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 uppercase font-semibold" }, "\u0110i\u1EC3m giao h\xE0ng:"), /* @__PURE__ */ Rn.createElement("div", { className: "text-slate-200 font-medium" }, dispatchOrder.deliveryPoint)))), /* @__PURE__ */ Rn.createElement("div", { className: "mt-3 p-2.5 bg-blue-950/40 rounded-xl border border-blue-900/60 text-[11px] text-slate-300" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5 text-cyan-300 font-bold mb-1" }, /* @__PURE__ */ Rn.createElement(Navigation, { className: "w-3.5 h-3.5" }), " L\u1ED9 tr\xECnh t\u1ED1i \u01B0u (", dispatchOrder.distanceKm, " km):"), dispatchOrder.optimalRoute)), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("span", null, "C\u1EADp nh\u1EADt ti\u1EBFn \u0111\u1ED9 chuy\u1EBFn \u0111i:"), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-cyan-400 font-mono font-normal" }, "B\u01B0\u1EDBc ", dispatchOrder.currentStep, "/4")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2" }, steps.map((s3) => {
        const isCompleted = dispatchOrder.currentStep >= s3.stepNum;
        const isCurrent = dispatchOrder.currentStep === s3.stepNum;
        return /* @__PURE__ */ Rn.createElement(
          "button",
          {
            key: s3.stepNum,
            onClick: () => handleStepClick(s3.stepNum),
            className: `w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${isCurrent ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-cyan-400 text-white shadow-lg shadow-blue-900/40 scale-[1.01]" : isCompleted ? "bg-slate-950/80 border-emerald-500/40 text-slate-200" : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700"}`
          },
          /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ Rn.createElement(
            "div",
            {
              className: `w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${isCompleted ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-400 border border-slate-700"}`
            },
            isCompleted ? /* @__PURE__ */ Rn.createElement(CircleCheck, { className: "w-5 h-5 text-slate-950" }) : s3.stepNum
          ), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "font-bold text-xs leading-snug" }, s3.label), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] opacity-80" }, s3.desc), s3.timestamp && /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-cyan-300 font-mono mt-0.5" }, "\u2713 ", s3.timestamp))),
          /* @__PURE__ */ Rn.createElement(ChevronRight, { className: `w-4 h-4 ${isCurrent ? "text-white" : "text-slate-600"}` })
        );
      }))), /* @__PURE__ */ Rn.createElement(
        "button",
        {
          onClick: () => setIsEpodModalOpen(true),
          className: "w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all active:scale-95"
        },
        /* @__PURE__ */ Rn.createElement(ShieldCheck, { className: "w-4 h-4" }),
        " K\xFD & T\u1EA3i L\xEAn Bi\xEAn B\u1EA3n Giao Nh\u1EADn e-POD"
      ))))
    ), /* @__PURE__ */ Rn.createElement(
      EPodModal,
      {
        isOpen: isEpodModalOpen,
        onClose: () => setIsEpodModalOpen(false)
      }
    ));
  };

  // src/components/customer/InvoiceModal.tsx
  var InvoiceModal = ({
    order,
    isOpen,
    onClose
  }) => {
    if (!isOpen || !order) return null;
    const basePrice = order.freightPriceVnd || 45e5;
    const vatPrice = Math.round(basePrice * 0.08);
    const totalPrice = basePrice + vatPrice;
    return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]" }, /* @__PURE__ */ Rn.createElement("div", { className: "px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-blue-600/30 text-cyan-400 flex items-center justify-center" }, /* @__PURE__ */ Rn.createElement(ShieldCheck, { className: "w-5 h-5" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "text-sm font-bold text-white" }, "Ch\u1EE9ng T\u1EEB & H\xF3a \u0110\u01A1n V\u1EADn T\u1EA3i \u0110i\u1EC7n T\u1EED"), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-400" }, "M\xE3 v\u1EADn \u0111\u01A1n: ", order.trackingCode))), /* @__PURE__ */ Rn.createElement("button", { onClick: onClose, className: "text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800" }, /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" }))), /* @__PURE__ */ Rn.createElement("div", { className: "p-6 space-y-5 overflow-y-auto bg-slate-950 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between items-start border-b border-slate-800 pb-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h4", { className: "font-black text-sm text-white" }, "C\xD4NG TY TNHH \u0110\u1EA6U T\u01AF V\xC0 XU\u1EA4T NH\u1EACP KH\u1EA8U NNP"), /* @__PURE__ */ Rn.createElement("p", { className: "text-slate-400 text-[11px] mt-0.5" }, "\u0110\u1ECBa ch\u1EC9: Km 5 \u0110\u01B0\u1EDDng 356, KCN \u0110\xECnh V\u0169, \u0110\xF4ng H\u1EA3i 2, H\u1EA3i An, H\u1EA3i Ph\xF2ng"), /* @__PURE__ */ Rn.createElement("p", { className: "text-slate-400 text-[11px]" }, "M\xE3 s\u1ED1 thu\u1EBF: 0201889988 \u2022 Hotline: 1900.8899 \u2022 Email: van-tai@nnplogistics.vn")), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-mono text-cyan-400 font-bold bg-blue-950 px-2 py-1 rounded border border-blue-800" }, "H\xD3A \u0110\u01A0N \u0110I\u1EC6N T\u1EEC"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-slate-500 mt-1" }, "S\u1ED1: NNP-HD/26/", order.id.replace("DH-", "")))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 uppercase font-bold" }, "Kh\xE1ch h\xE0ng / \u0110\u01A1n v\u1ECB nh\u1EADn:"), /* @__PURE__ */ Rn.createElement("div", { className: "font-bold text-slate-100 text-xs mt-0.5" }, order.customerName), /* @__PURE__ */ Rn.createElement("div", { className: "text-slate-400 text-[11px]" }, "\u0110i\u1EC7n tho\u1EA1i: ", order.customerPhone)), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 uppercase font-bold" }, "Ph\u01B0\u01A1ng ti\u1EC7n v\u1EADn chuy\u1EC3n:"), /* @__PURE__ */ Rn.createElement("div", { className: "font-mono font-bold text-cyan-300 text-xs mt-0.5" }, order.assignedVehiclePlate || "15H-028.66", " (TX: ", order.assignedDriverName || "Nguy\u1EC5n V\u0103n D\u0169ng", ")"), /* @__PURE__ */ Rn.createElement("div", { className: "text-slate-400 text-[11px]" }, "Lo\u1EA1i xe: ", order.requiredVehicleType))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between py-1 border-b border-slate-800 text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "Tuy\u1EBFn \u0111\u01B0\u1EDDng:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-medium text-white" }, order.pickupPoint, " \u2192 ", order.deliveryPoint)), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between py-1 border-b border-slate-800 text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "H\xE0ng ho\xE1 v\u1EADn chuy\u1EC3n:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-medium text-white" }, order.cargoType, " (", order.weightTons, " T\u1EA5n)")), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between py-1 border-b border-slate-800 text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "Tr\u1EA1ng th\xE1i giao nh\u1EADn:"), /* @__PURE__ */ Rn.createElement("span", { className: "text-emerald-400 font-bold" }, order.status === "DELIVERED" ? "\u2713 \u0110\xE3 ho\xE0n t\u1EA5t giao h\xE0ng & k\xFD e-POD" : "\u0110ang v\u1EADn chuy\u1EC3n"))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900 rounded-xl border border-slate-800 p-4 space-y-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", null, "C\u01B0\u1EDBc v\u1EADn t\u1EA3i c\u01A1 s\u1EDF:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono" }, basePrice.toLocaleString("vi-VN"), " \u0111")), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-slate-400 text-[11px]" }, /* @__PURE__ */ Rn.createElement("span", null, "Thu\u1EBF GTGT (VAT 8%):"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono" }, vatPrice.toLocaleString("vi-VN"), " \u0111")), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-white font-bold text-sm pt-2 border-t border-slate-800" }, /* @__PURE__ */ Rn.createElement("span", null, "T\u1ED4NG TI\u1EC0N THANH TO\xC1N:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono text-cyan-300" }, totalPrice.toLocaleString("vi-VN"), " VN\u0110"))), order.epodSignedAt && /* @__PURE__ */ Rn.createElement("div", { className: "bg-emerald-950/30 p-3.5 rounded-xl border border-emerald-800/50 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5 text-emerald-400 font-bold text-xs" }, /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-4 h-4" }), " K\xFD nh\u1EADn \u0111i\u1EC7n t\u1EED e-POD h\u1EE3p l\u1EC7"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-300 mt-1" }, "Ng\u01B0\u1EDDi k\xFD: ", /* @__PURE__ */ Rn.createElement("strong", null, order.epodSignerName)), /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-slate-400 font-mono" }, "Th\u1EDDi gian: ", order.epodSignedAt)), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[9px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded font-mono border border-emerald-700" }, "DIGITALLY SIGNED"))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-end gap-3 pt-3 border-t border-slate-800" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => window.print(),
        className: "px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5"
      },
      /* @__PURE__ */ Rn.createElement(Printer, { className: "w-3.5 h-3.5" }),
      " In Ch\u1EE9ng T\u1EEB"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: onClose,
        className: "px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5"
      },
      /* @__PURE__ */ Rn.createElement(Download, { className: "w-3.5 h-3.5" }),
      " T\u1EA3i File PDF e-POD"
    )))));
  };

  // src/components/customer/CustomerPortal.tsx
  var CustomerPortal = () => {
    const { orders, createShipmentOrder } = useTMS();
    const [activeTab, setActiveTab] = d2("TRACKING");
    const [searchTerm, setSearchTerm] = d2("");
    const [selectedOrderForInvoice, setSelectedOrderForInvoice] = d2(null);
    const [customerName, setCustomerName] = d2("C\xF4ng ty TNHH Samsung Electronics Vi\u1EC7t Nam (SEV)");
    const [customerPhone, setCustomerPhone] = d2("0222.369.8888");
    const [pickupPoint, setPickupPoint] = d2("C\u1EA3ng \u0110\xECnh V\u0169 - B\u1EBFn C\u1EA7u C\u1EA3ng s\u1ED1 2, H\u1EA3i Ph\xF2ng");
    const [deliveryPoint, setDeliveryPoint] = d2("Kho Logistics SEV, KCN Y\xEAn Phong, B\u1EAFc Ninh");
    const [vehicleType, setVehicleType] = d2("CONTAINER_40FT");
    const [cargoType, setCargoType] = d2("Linh ki\u1EC7n \u0111i\u1EC7n t\u1EED b\xE1n d\u1EABn & Bo m\u1EA1ch vi x\u1EED l\xFD");
    const [weightTons, setWeightTons] = d2(26.5);
    const [distanceKm, setDistanceKm] = d2(125);
    const [isBackhaulEligible, setIsBackhaulEligible] = d2(true);
    const calculateQuote = () => {
      let ratePerKm = 36e3;
      if (vehicleType === "CONTAINER_40FT") ratePerKm = 42e3;
      if (vehicleType === "CONTAINER_20FT") ratePerKm = 35e3;
      if (vehicleType === "TRUCK_15T") ratePerKm = 28e3;
      if (vehicleType === "TRUCK_8T") ratePerKm = 2e4;
      const baseFreight = distanceKm * ratePerKm;
      const botFee = 41e4;
      const fuelSurcharge = Math.round(baseFreight * 0.08);
      const discountBackhaul = isBackhaulEligible ? Math.round(baseFreight * 0.15) : 0;
      const total = baseFreight + botFee + fuelSurcharge - discountBackhaul;
      return {
        baseFreight,
        botFee,
        fuelSurcharge,
        discountBackhaul,
        total
      };
    };
    const quote = calculateQuote();
    const handleBookingSubmit = (e3) => {
      e3.preventDefault();
      const now = /* @__PURE__ */ new Date();
      const pickupTimeStr = `${now.getHours() + 2}:00 ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      const etaStr = `${now.getHours() + 6}:30 ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      createShipmentOrder({
        customerName,
        customerPhone,
        pickupPoint,
        deliveryPoint,
        cargoType,
        weightTons: Number(weightTons),
        requiredVehicleType: vehicleType,
        pickupTime: pickupTimeStr,
        etaDelivery: etaStr,
        distanceKm,
        freightPriceVnd: quote.total,
        isBackhaul: isBackhaulEligible
      });
      setActiveTab("TRACKING");
    };
    const filteredOrders = orders.filter((o3) => {
      if (!searchTerm) return true;
      const t3 = searchTerm.toLowerCase();
      return o3.trackingCode.toLowerCase().includes(t3) || o3.id.toLowerCase().includes(t3) || o3.customerName.toLowerCase().includes(t3) || o3.cargoType.toLowerCase().includes(t3);
    });
    return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-5 animate-fade-in" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setActiveTab("TRACKING"),
        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "TRACKING" ? "bg-blue-600 text-white shadow-md shadow-blue-600/30" : "text-slate-400 hover:text-white hover:bg-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement(Search, { className: "w-4 h-4" }),
      " Tra C\u1EE9u V\u1EADn \u0110\u01A1n & Ch\u1EE9ng T\u1EEB e-POD (",
      orders.length,
      ")"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setActiveTab("BOOKING"),
        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "BOOKING" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30" : "text-slate-400 hover:text-white hover:bg-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement(Calculator, { className: "w-4 h-4 text-cyan-300" }),
      " \u0110\u1EB7t Xe Tr\u1EF1c Tuy\u1EBFn & B\xE1o Gi\xE1 T\u1EF1 \u0110\u1ED9ng"
    )), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs text-slate-400" }, /* @__PURE__ */ Rn.createElement("span", { className: "hidden sm:inline" }, "C\u1ED5ng d\u1ECBch v\u1EE5 s\u1ED1 kh\xE1ch h\xE0ng:"), /* @__PURE__ */ Rn.createElement("span", { className: "bg-slate-950 text-cyan-400 font-mono font-bold px-2.5 py-1 rounded-lg border border-slate-800" }, "SEV Logistics Portal"))), activeTab === "TRACKING" && /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/90 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3 flex-1 max-w-lg bg-slate-950 px-3.5 py-2.5 rounded-xl border border-slate-700" }, /* @__PURE__ */ Rn.createElement(Search, { className: "w-4 h-4 text-cyan-400" }), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: searchTerm,
        onChange: (e3) => setSearchTerm(e3.target.value),
        placeholder: "Nh\u1EADp m\xE3 v\u1EADn \u0111\u01A1n (VD: NNP-2026-8891), m\xE3 \u0111\u01A1n ho\u1EB7c t\xEAn h\xE0ng...",
        className: "bg-transparent text-xs text-white placeholder-slate-500 w-full focus:outline-none"
      }
    )), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs text-slate-400" }, /* @__PURE__ */ Rn.createElement("span", null, "\u0110ang hi\u1EC3n th\u1ECB ", /* @__PURE__ */ Rn.createElement("strong", null, filteredOrders.length), " \u0111\u01A1n h\xE0ng v\u1EADn chuy\u1EC3n"))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, filteredOrders.map((order) => {
      const statusMap = {
        PENDING: { label: "\u0110ang x\u1EBFp h\xE0ng ch\u1EDD \u0111i\u1EC1u xe", step: 1, color: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
        DISPATCHED: { label: "\u0110\xE3 ph\xE1t l\u1EC7nh - Xe \u0111ang di chuy\u1EC3n \u0111\u1EBFn b\xE3i", step: 2, color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30" },
        LOADING: { label: "\u0110ang b\u1ED1c x\u1EBFp & k\u1EB9p ch\xEC t\u1EA1i C\u1EA3ng H\u1EA3i Ph\xF2ng", step: 3, color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
        IN_TRANSIT: { label: "\u0110ang v\u1EADn chuy\u1EC3n tr\xEAn cao t\u1ED1c", step: 4, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30" },
        DELIVERED: { label: "Giao h\xE0ng th\xE0nh c\xF4ng - \u0110\xE3 k\xFD e-POD", step: 5, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" }
      };
      const currentStatus = statusMap[order.status];
      return /* @__PURE__ */ Rn.createElement(
        "div",
        {
          key: order.id,
          className: "bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-lg space-y-4 hover:border-slate-700 transition-all"
        },
        /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-start justify-between gap-3 border-b border-slate-800/80 pb-3" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-black text-sm text-cyan-400 bg-blue-950 px-2.5 py-1 rounded-lg border border-blue-800" }, order.trackingCode), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-400 font-mono" }, "[", order.id, "]"), order.isBackhaul && /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-800 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-3 h-3 text-amber-300" }), " Tuy\u1EBFn chi\u1EC1u v\u1EC1 (-15% c\u01B0\u1EDBc)")), /* @__PURE__ */ Rn.createElement("div", { className: "font-bold text-white text-xs mt-1.5" }, order.customerName)), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ Rn.createElement("span", { className: `text-xs font-bold px-3 py-1 rounded-full border ${currentStatus.color}` }, currentStatus.label), /* @__PURE__ */ Rn.createElement(
          "button",
          {
            onClick: () => setSelectedOrderForInvoice(order),
            className: "bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors"
          },
          /* @__PURE__ */ Rn.createElement(FileText, { className: "w-3.5 h-3.5 text-cyan-400" }),
          " Xem H\xF3a \u0111\u01A1n & e-POD"
        ))),
        /* @__PURE__ */ Rn.createElement("div", { className: "py-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-5 gap-2 text-center text-[10px]" }, ["1. Ti\u1EBFp nh\u1EADn", "2. Ph\xE2n xe", "3. B\u1ED1c h\xE0ng c\u1EA3ng", "4. \u0110ang v\u1EADn chuy\u1EC3n", "5. \u0110\xE3 giao h\xE0ng"].map((label, idx) => {
          const stepNum = idx + 1;
          const isDone = currentStatus.step >= stepNum;
          const isAct = currentStatus.step === stepNum;
          return /* @__PURE__ */ Rn.createElement("div", { key: idx, className: "flex flex-col items-center" }, /* @__PURE__ */ Rn.createElement(
            "div",
            {
              className: `w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] mb-1 transition-all ${isDone ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20" : "bg-slate-800 text-slate-500"}`
            },
            isDone ? "\u2713" : stepNum
          ), /* @__PURE__ */ Rn.createElement("span", { className: `font-semibold ${isAct ? "text-cyan-300 font-bold" : isDone ? "text-slate-200" : "text-slate-500"}` }, label));
        })), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
          "div",
          {
            className: "bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-500",
            style: { width: `${currentStatus.step / 5 * 100}%` }
          }
        ))),
        /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 uppercase font-semibold" }, "\u0110i\u1EC3m b\u1ED1c h\xE0ng (H\u1EA3i Ph\xF2ng):"), /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200 mt-0.5" }, order.pickupPoint), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400" }, order.pickupTime)), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 uppercase font-semibold" }, "\u0110i\u1EC3m giao nh\u1EADn:"), /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200 mt-0.5" }, order.deliveryPoint), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-cyan-300 font-mono" }, "D\u1EF1 ki\u1EBFn: ", order.etaDelivery)), /* @__PURE__ */ Rn.createElement("div", { className: "border-t md:border-t-0 md:border-l border-slate-800 md:pl-3" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 uppercase font-semibold" }, "Ph\u01B0\u01A1ng ti\u1EC7n & C\u01B0\u1EDBc:"), /* @__PURE__ */ Rn.createElement("div", { className: "font-mono font-bold text-cyan-300 mt-0.5" }, order.assignedVehiclePlate || "\u0110ang \u0111i\u1EC1u xe", " ", order.assignedDriverName ? `(${order.assignedDriverName})` : ""), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-emerald-400 font-bold font-mono mt-0.5" }, order.freightPriceVnd.toLocaleString("vi-VN"), " VN\u0110")))
      );
    }))), activeTab === "BOOKING" && /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "lg:col-span-2 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "text-sm font-bold text-white flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(Calculator, { className: "w-4 h-4 text-cyan-400" }), "Phi\u1EBFu \u0110\u1EB7t Xe V\u1EADn T\u1EA3i Tr\u1EF1c Tuy\u1EBFn (Online Dispatch Request)"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-400 mt-0.5" }, "Nh\u1EADp th\xF4ng tin h\xE0ng ho\xE1 \u0111\u1EC3 h\u1EC7 th\u1ED1ng t\u1EF1 \u0111\u1ED9ng t\xEDnh c\u01B0\u1EDBc v\xE0 x\u1EBFp xe t\u1ED1i \u01B0u t\u1EA3i tr\u1ECDng")), /* @__PURE__ */ Rn.createElement("form", { onSubmit: handleBookingSubmit, className: "space-y-4 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "T\xEAn Doanh Nghi\u1EC7p / Ch\u1EE7 H\xE0ng:"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: customerName,
        onChange: (e3) => setCustomerName(e3.target.value),
        required: true,
        className: "w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      }
    )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "S\u1ED1 \u0110i\u1EC7n Tho\u1EA1i \u0110i\u1EC1u H\xE0ng:"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: customerPhone,
        onChange: (e3) => setCustomerPhone(e3.target.value),
        required: true,
        className: "w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      }
    ))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "\u0110i\u1EC3m L\u1EA5y H\xE0ng (C\u1EA3ng / Kho H\u1EA3i Ph\xF2ng):"), /* @__PURE__ */ Rn.createElement(
      "select",
      {
        value: pickupPoint,
        onChange: (e3) => setPickupPoint(e3.target.value),
        className: "w-full bg-slate-950 text-slate-200 rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      },
      /* @__PURE__ */ Rn.createElement("option", { value: "C\u1EA3ng \u0110\xECnh V\u0169 - B\u1EBFn C\u1EA7u C\u1EA3ng s\u1ED1 2, H\u1EA3i Ph\xF2ng" }, "C\u1EA3ng \u0110\xECnh V\u0169 - B\u1EBFn C\u1EA7u C\u1EA3ng s\u1ED1 2, H\u1EA3i Ph\xF2ng"),
      /* @__PURE__ */ Rn.createElement("option", { value: "C\u1EA3ng T\xE2n V\u0169 - B\xE3i Container, \u0110\xECnh V\u0169" }, "C\u1EA3ng T\xE2n V\u0169 - B\xE3i Container, \u0110\xECnh V\u0169"),
      /* @__PURE__ */ Rn.createElement("option", { value: "C\u1EA3ng Qu\u1ED1c t\u1EBF L\u1EA1ch Huy\u1EC7n (TC-HICT) - H\u1EA3i Ph\xF2ng" }, "C\u1EA3ng Qu\u1ED1c t\u1EBF L\u1EA1ch Huy\u1EC7n (TC-HICT) - H\u1EA3i Ph\xF2ng"),
      /* @__PURE__ */ Rn.createElement("option", { value: "C\u1EA3ng Ch\xF9a V\u1EBD - Kho Ngo\u1EA1i Quan CFS" }, "C\u1EA3ng Ch\xF9a V\u1EBD - Kho Ngo\u1EA1i Quan CFS"),
      /* @__PURE__ */ Rn.createElement("option", { value: "KCN Tr\xE0ng Du\u1EC7, An D\u01B0\u01A1ng, H\u1EA3i Ph\xF2ng" }, "KCN Tr\xE0ng Du\u1EC7, An D\u01B0\u01A1ng, H\u1EA3i Ph\xF2ng")
    )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "\u0110i\u1EC3m Giao H\xE0ng (KCN / Nh\xE0 M\xE1y):"), /* @__PURE__ */ Rn.createElement(
      "select",
      {
        value: deliveryPoint,
        onChange: (e3) => {
          setDeliveryPoint(e3.target.value);
          if (e3.target.value.includes("Y\xEAn Phong")) setDistanceKm(125);
          else if (e3.target.value.includes("Qu\u1EBF V\xF5")) setDistanceKm(115);
          else if (e3.target.value.includes("H\xE0 N\u1ED9i")) setDistanceKm(110);
          else if (e3.target.value.includes("H\u1EA3i D\u01B0\u01A1ng")) setDistanceKm(65);
        },
        className: "w-full bg-slate-950 text-slate-200 rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      },
      /* @__PURE__ */ Rn.createElement("option", { value: "Kho Logistics SEV, KCN Y\xEAn Phong, B\u1EAFc Ninh" }, "Kho Logistics SEV, KCN Y\xEAn Phong, B\u1EAFc Ninh (125 km)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "Nh\xE0 m\xE1y Foxconn - KCN Qu\u1EBF V\xF5 1, B\u1EAFc Ninh" }, "Nh\xE0 m\xE1y Foxconn - KCN Qu\u1EBF V\xF5 1, B\u1EAFc Ninh (115 km)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "ICD M\u1EF9 \u0110\xECnh / KCN \u0110\xE0i T\u01B0, H\xE0 N\u1ED9i" }, "ICD M\u1EF9 \u0110\xECnh / KCN \u0110\xE0i T\u01B0, H\xE0 N\u1ED9i (110 km)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "KCN \u0110\u1EA1i An, TP. H\u1EA3i D\u01B0\u01A1ng" }, "KCN \u0110\u1EA1i An, TP. H\u1EA3i D\u01B0\u01A1ng (65 km)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "KCN Ph\u1ED1 N\u1ED1i A, H\u01B0ng Y\xEAn" }, "KCN Ph\u1ED1 N\u1ED1i A, H\u01B0ng Y\xEAn (85 km)")
    ))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "Lo\u1EA1i Ph\u01B0\u01A1ng Ti\u1EC7n:"), /* @__PURE__ */ Rn.createElement(
      "select",
      {
        value: vehicleType,
        onChange: (e3) => setVehicleType(e3.target.value),
        className: "w-full bg-slate-950 text-slate-200 rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      },
      /* @__PURE__ */ Rn.createElement("option", { value: "CONTAINER_40FT" }, "\u0110\u1EA7u k\xE9o Cont 40ft (HC/DC)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "CONTAINER_20FT" }, "\u0110\u1EA7u k\xE9o Cont 20ft"),
      /* @__PURE__ */ Rn.createElement("option", { value: "TRUCK_15T" }, "Xe t\u1EA3i th\xF9ng k\xEDn 15 T\u1EA5n"),
      /* @__PURE__ */ Rn.createElement("option", { value: "TRUCK_8T" }, "Xe t\u1EA3i th\xF9ng mui b\u1EA1t 8 T\u1EA5n")
    )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "T\xEAn Lo\u1EA1i H\xE0ng Ho\xE1:"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: cargoType,
        onChange: (e3) => setCargoType(e3.target.value),
        required: true,
        className: "w-full bg-slate-950 text-white rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      }
    )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "block font-semibold text-slate-300 mb-1" }, "Kh\u1ED1i L\u01B0\u1EE3ng H\xE0ng (T\u1EA5n):"), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "number",
        step: "0.5",
        min: "1",
        max: "35",
        value: weightTons,
        onChange: (e3) => setWeightTons(Number(e3.target.value)),
        required: true,
        className: "w-full bg-slate-950 text-cyan-300 font-mono font-bold rounded-xl p-2.5 border border-slate-700 focus:outline-none focus:border-blue-500"
      }
    ))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-blue-950/40 p-3.5 rounded-xl border border-blue-800/60 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "checkbox",
        id: "backhaul-check",
        checked: isBackhaulEligible,
        onChange: (e3) => setIsBackhaulEligible(e3.target.checked),
        className: "w-4 h-4 rounded text-blue-600 focus:ring-0 bg-slate-900 border-slate-700"
      }
    ), /* @__PURE__ */ Rn.createElement("label", { htmlFor: "backhaul-check", className: "text-slate-200 cursor-pointer" }, /* @__PURE__ */ Rn.createElement("strong", { className: "text-cyan-300" }, "T\u1EADn d\u1EE5ng khung gi\u1EDD xe ch\u1EA1y r\u1ED7ng chi\u1EC1u v\u1EC1 c\u1EE7a NNP:"), /* @__PURE__ */ Rn.createElement("span", { className: "block text-[11px] text-slate-400" }, "\u0110\u01B0\u1EE3c chi\u1EBFt kh\u1EA5u ngay -15% t\u1ED5ng gi\xE1 c\u01B0\u1EDBc n\u1EBFu ch\u1EA5p nh\u1EADn linh ho\u1EA1t khung gi\u1EDD nh\u1EADn h\xE0ng \xB160 ph\xFAt."))), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-800" }, "TI\u1EBET KI\u1EC6M 15%")), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        type: "submit",
        className: "w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
      },
      /* @__PURE__ */ Rn.createElement(Truck, { className: "w-4 h-4" }),
      " X\xE1c Nh\u1EADn G\u1EEDi Y\xEAu C\u1EA7u \u0110\u1EB7t Xe Ngay"
    ))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-3 border-b border-slate-800 pb-3" }, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-bold text-white uppercase tracking-wider" }, "B\xE1o Gi\xE1 V\u1EADn T\u1EA3i D\u1EF1 Ki\u1EBFn"), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded font-mono border border-emerald-800" }, "REAL-TIME QUOTE")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", null, "C\u1EF1 ly v\u1EADn chuy\u1EC3n d\u1EF1 ki\u1EBFn:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-bold text-white" }, distanceKm, " km")), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", null, "C\u01B0\u1EDBc c\u01A1 s\u1EDF (", vehicleType, "):"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono text-white" }, quote.baseFreight.toLocaleString("vi-VN"), " \u0111")), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", null, "Ph\u1EE5 ph\xED nhi\xEAn li\u1EC7u (8%):"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono text-slate-300" }, "+", quote.fuelSurcharge.toLocaleString("vi-VN"), " \u0111")), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", null, "Ph\xED BOT Cao t\u1ED1c 5B H\xE0 N\u1ED9i - HP:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono text-slate-300" }, "+", quote.botFee.toLocaleString("vi-VN"), " \u0111")), quote.discountBackhaul > 0 && /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-emerald-400 font-semibold bg-emerald-950/40 p-2 rounded-lg border border-emerald-900" }, /* @__PURE__ */ Rn.createElement("span", null, "\u01AFu \u0111\xE3i chi\u1EC1u v\u1EC1 (Backhaul -15%):"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono" }, "-", quote.discountBackhaul.toLocaleString("vi-VN"), " \u0111")))), /* @__PURE__ */ Rn.createElement("div", { className: "pt-4 border-t border-slate-800 mt-4 space-y-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between items-baseline" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-slate-300" }, "T\u1ED4NG C\u01AF\u1EDAC D\u1EF0 KI\u1EBEN:"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xl font-black text-cyan-400 font-mono" }, quote.total.toLocaleString("vi-VN"), " ", /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-400" }, "VN\u0110"))), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800" }, "\u{1F512} Gi\xE1 \u0111\xE3 bao g\u1ED3m b\u1EA3o hi\u1EC3m h\xE0ng ho\xE1 v\xE0 ph\xED c\u1EA7u \u0111\u01B0\u1EDDng cao t\u1ED1c. \u0110\u01A1n h\xE0ng s\u1EBD \u0111\u01B0\u1EE3c chuy\u1EC3n tr\u1EF1c ti\u1EBFp v\xE0o m\xE0n h\xECnh \u0111i\u1EC1u ph\u1ED1i c\u1EE7a NNP Logistics.")))), /* @__PURE__ */ Rn.createElement(
      InvoiceModal,
      {
        order: selectedOrderForInvoice,
        isOpen: !!selectedOrderForInvoice,
        onClose: () => setSelectedOrderForInvoice(null)
      }
    ));
  };

  // src/components/fleet/FleetMaintenance.tsx
  var FleetMaintenance = () => {
    const { vehicles } = useTMS();
    const [searchTerm, setSearchTerm] = d2("");
    const getDaysRemaining = (expiryDateStr) => {
      const today = /* @__PURE__ */ new Date("2026-11-13");
      const expiry = new Date(expiryDateStr);
      const diffTime = expiry.getTime() - today.getTime();
      return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    };
    const filteredVehicles = vehicles.filter((v3) => {
      if (!searchTerm) return true;
      const t3 = searchTerm.toLowerCase();
      return v3.plateNumber.toLowerCase().includes(t3) || v3.model.toLowerCase().includes(t3) || v3.driverName.toLowerCase().includes(t3);
    });
    return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/90 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "text-sm font-bold text-white flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(Wrench, { className: "w-4 h-4 text-cyan-400" }), "H\u1ED3 S\u01A1 K\u1EF9 Thu\u1EADt Ph\u01B0\u01A1ng Ti\u1EC7n & C\u1EA3nh B\xE1o An To\xE0n \u0110\u1ECBnh K\u1EF3"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-400 mt-0.5" }, "T\u1EF1 \u0111\u1ED9ng gi\xE1m s\xE1t h\u1EA1n \u0110\u0103ng ki\u1EC3m, B\u1EA3o hi\u1EC3m TNDS v\xE0 Chu k\u1EF3 b\u1EA3o d\u01B0\u1EE1ng theo km l\u0103n b\xE1nh (Odometer)")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3 bg-slate-950 px-3 py-2 rounded-xl border border-slate-700 w-full sm:w-72" }, /* @__PURE__ */ Rn.createElement(Search, { className: "w-4 h-4 text-slate-400" }), /* @__PURE__ */ Rn.createElement(
      "input",
      {
        type: "text",
        value: searchTerm,
        onChange: (e3) => setSearchTerm(e3.target.value),
        placeholder: "T\xECm bi\u1EC3n s\u1ED1, d\xF2ng xe, t\xE0i x\u1EBF...",
        className: "bg-transparent text-xs text-white placeholder-slate-500 w-full focus:outline-none"
      }
    ))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" }, filteredVehicles.map((vehicle) => {
      const regDays = getDaysRemaining(vehicle.registrationExpiry);
      const insDays = getDaysRemaining(vehicle.insuranceExpiry);
      const kmInterval = vehicle.nextServiceOdo - vehicle.lastServiceOdo;
      const kmDriven = vehicle.odometerKm - vehicle.lastServiceOdo;
      const servicePct = Math.min(Math.round(kmDriven / kmInterval * 100), 100);
      const kmRemaining = Math.max(vehicle.nextServiceOdo - vehicle.odometerKm, 0);
      return /* @__PURE__ */ Rn.createElement(
        "div",
        {
          key: vehicle.id,
          className: `bg-slate-900/90 rounded-2xl border p-4 shadow-md space-y-3.5 transition-all ${regDays <= 7 ? "border-rose-500/80 shadow-rose-950/30" : regDays <= 30 ? "border-amber-500/60" : "border-slate-800 hover:border-slate-700"}`
        },
        /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-black text-sm text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800" }, vehicle.plateNumber), vehicle.trailerPlate && /* @__PURE__ */ Rn.createElement("span", { className: "font-mono text-[10px] text-cyan-300 bg-blue-950 px-1.5 py-0.5 rounded border border-blue-900" }, vehicle.trailerPlate)), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 mt-1" }, vehicle.model)), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded" }, "T\u1EA3i: ", vehicle.maxPayloadTons, " T\u1EA5n")),
        /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1.5" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-xs" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Gauge, { className: "w-3.5 h-3.5 text-cyan-400" }), " Odometer t\u1ED5ng:"), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-bold text-white text-xs" }, vehicle.odometerKm.toLocaleString("vi-VN"), " km")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-1 pt-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-[11px]" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "Chu k\u1EF3 b\u1EA3o d\u01B0\u1EE1ng k\u1EBF ti\u1EBFp:"), /* @__PURE__ */ Rn.createElement("span", { className: `font-mono font-bold ${kmRemaining <= 1e3 ? "text-rose-400" : "text-slate-300"}` }, "C\xF2n ", kmRemaining.toLocaleString("vi-VN"), " km")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-800 h-2 rounded-full overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
          "div",
          {
            className: `h-full rounded-full transition-all duration-300 ${servicePct >= 90 ? "bg-rose-500" : servicePct >= 75 ? "bg-amber-500" : "bg-emerald-500"}`,
            style: { width: `${servicePct}%` }
          }
        )))),
        /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between p-2 rounded-lg bg-slate-800/40 border border-slate-700/50" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Calendar, { className: "w-3.5 h-3.5 text-slate-400" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-300 text-[11px]" }, "H\u1EA1n \u0110\u0103ng ki\u1EC3m:")), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("span", { className: `font-mono font-bold text-[11px] ${regDays <= 7 ? "text-rose-400 font-extrabold" : regDays <= 30 ? "text-amber-400" : "text-emerald-400"}` }, vehicle.registrationExpiry, " (", regDays > 0 ? `C\xF2n ${regDays} ng\xE0y` : "QU\xC1 H\u1EA0N", ")"))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between p-2 rounded-lg bg-slate-800/40 border border-slate-700/50" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(ShieldCheck, { className: "w-3.5 h-3.5 text-slate-400" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-300 text-[11px]" }, "H\u1EA1n B\u1EA3o hi\u1EC3m:")), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-mono text-slate-300 text-[11px]" }, vehicle.insuranceExpiry, " (C\xF2n ", insDays, " ng\xE0y)")))),
        regDays <= 7 ? /* @__PURE__ */ Rn.createElement("div", { className: "bg-rose-950/60 p-2 rounded-xl border border-rose-800/60 text-[10px] text-rose-300 flex items-center gap-1.5 font-bold" }, /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-3.5 h-3.5 text-rose-400 flex-shrink-0" }), "C\u1EA2NH B\xC1O: Ph\u1EA3i \u0111\u1EB7t l\u1ECBch \u0111\u01B0a xe v\xE0o Tr\u1EA1m \u0110\u0103ng ki\u1EC3m 15-01S \u0110\xECnh V\u0169 ngay!") : /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800" }, /* @__PURE__ */ Rn.createElement("span", null, "T\xE0i x\u1EBF: ", vehicle.driverName), /* @__PURE__ */ Rn.createElement("span", { className: "text-emerald-400" }, "\u2713 \u0110\u1EE7 \u0111i\u1EC1u ki\u1EC7n l\u0103n b\xE1nh"))
      );
    })));
  };

  // src/components/fleet/FuelAuditTable.tsx
  var FuelAuditTable = () => {
    const { fuelAudits, fuelLogs } = useTMS();
    const [activeSubTab, setActiveSubTab] = d2("AUDIT");
    const [filterLevel, setFilterLevel] = d2("ALL");
    const filteredAudits = fuelAudits.filter((a3) => {
      if (filterLevel !== "ALL" && a3.alertLevel !== filterLevel) return false;
      return true;
    });
    return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/90 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setActiveSubTab("AUDIT"),
        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeSubTab === "AUDIT" ? "bg-blue-600 text-white shadow-md shadow-blue-600/30" : "text-slate-400 hover:text-white hover:bg-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement(Fuel, { className: "w-4 h-4" }),
      " B\u1EA3ng \u0110\u1ED1i So\xE1t \u0110\u1ECBnh M\u1EE9c Nhi\xEAn Li\u1EC7u (",
      fuelAudits.length,
      ")"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setActiveSubTab("LOGS"),
        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeSubTab === "LOGS" ? "bg-amber-600 text-white shadow-md shadow-amber-600/30" : "text-slate-400 hover:text-white hover:bg-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement(FileText, { className: "w-4 h-4" }),
      " Phi\u1EBFu \u0110\u1ED5 D\u1EA7u T\xE0i X\u1EBF Khai B\xE1o (",
      fuelLogs.length,
      ")"
    )), activeSubTab === "AUDIT" && /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "L\u1ECDc m\u1EE9c \u0111\u1ED9:"), /* @__PURE__ */ Rn.createElement(
      "select",
      {
        value: filterLevel,
        onChange: (e3) => setFilterLevel(e3.target.value),
        className: "bg-slate-950 text-slate-200 text-xs rounded-xl px-3 py-1.5 border border-slate-700 focus:outline-none"
      },
      /* @__PURE__ */ Rn.createElement("option", { value: "ALL" }, "T\u1EA5t c\u1EA3 c\xE1c chuy\u1EBFn"),
      /* @__PURE__ */ Rn.createElement("option", { value: "HIGH_ALERT" }, "\u{1F534} B\u1EA5t th\u01B0\u1EDDng (V\u01B0\u1EE3t \u0111\u1ECBnh m\u1EE9c)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "SAVED" }, "\u{1F7E2} Ti\u1EBFt ki\u1EC7m (D\u01B0\u1EDBi \u0111\u1ECBnh m\u1EE9c)"),
      /* @__PURE__ */ Rn.createElement("option", { value: "NORMAL" }, "\u26AA \u0110\u1EA1t chu\u1EA9n (\xB13%)")
    ))), activeSubTab === "AUDIT" && /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-950 p-4 rounded-2xl border border-slate-800/80 text-xs flex flex-wrap items-center justify-between gap-3 text-slate-300" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-cyan-400" }), /* @__PURE__ */ Rn.createElement("span", null, "\u0110\u1ECBnh m\u1EE9c k\u1EF9 thu\u1EADt NNP:"), /* @__PURE__ */ Rn.createElement("strong", { className: "text-white" }, "\u0110\u1EA7u k\xE9o t\u1EA3i n\u1EB7ng: 35.5 - 36.0 L/100km"), " \u2022", /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "\u0110\u1EA7u k\xE9o r\u1ED7ng: 26.0 L/100km"), " \u2022", /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400" }, "Xe t\u1EA3i 15T: 23.5 L/100km")), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-amber-300 font-medium" }, "\u26A0\uFE0F T\u1EF1 \u0111\u1ED9ng k\xEDch ho\u1EA1t c\u1EDD \u0111\u1ECF khi ti\xEAu hao th\u1EF1c t\u1EBF v\u01B0\u1EE3t > +5% so v\u1EDBi \u0111\u1ECBnh m\u1EE9c")), /* @__PURE__ */ Rn.createElement("div", { className: "overflow-x-auto bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl" }, /* @__PURE__ */ Rn.createElement("table", { className: "w-full text-left text-xs text-slate-300" }, /* @__PURE__ */ Rn.createElement("thead", { className: "bg-slate-950 text-slate-400 uppercase text-[10px] font-bold tracking-wider border-b border-slate-800" }, /* @__PURE__ */ Rn.createElement("tr", null, /* @__PURE__ */ Rn.createElement("th", { className: "py-3.5 px-4" }, "Ph\u01B0\u01A1ng ti\u1EC7n / T\xE0i x\u1EBF"), /* @__PURE__ */ Rn.createElement("th", { className: "py-3.5 px-4" }, "Tuy\u1EBFn h\xE0nh tr\xECnh"), /* @__PURE__ */ Rn.createElement("th", { className: "py-3.5 px-4 text-center" }, "C\u1EF1 ly & T\u1EA3i"), /* @__PURE__ */ Rn.createElement("th", { className: "py-3.5 px-4 text-right" }, "\u0110\u1ECBnh m\u1EE9c chu\u1EA9n"), /* @__PURE__ */ Rn.createElement("th", { className: "py-3.5 px-4 text-right" }, "Th\u1EF1c t\u1EBF ti\xEAu hao"), /* @__PURE__ */ Rn.createElement("th", { className: "py-3.5 px-4 text-right" }, "Ch\xEAnh l\u1EC7ch (\u0394)"), /* @__PURE__ */ Rn.createElement("th", { className: "py-3.5 px-4 text-center" }, "\u0110\xE1nh gi\xE1 & C\u1EA3nh b\xE1o"))), /* @__PURE__ */ Rn.createElement("tbody", { className: "divide-y divide-slate-800/60 font-medium" }, filteredAudits.map((record) => {
      const isHighAlert = record.alertLevel === "HIGH_ALERT";
      const isSaved = record.alertLevel === "SAVED";
      return /* @__PURE__ */ Rn.createElement(
        "tr",
        {
          key: record.id,
          className: `hover:bg-slate-800/40 transition-colors ${isHighAlert ? "bg-rose-950/20" : ""}`
        },
        /* @__PURE__ */ Rn.createElement("td", { className: "py-3 px-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "font-mono font-bold text-white text-xs bg-slate-950 px-2 py-0.5 rounded border border-slate-800 inline-block" }, record.vehiclePlate), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400 mt-0.5" }, record.driverName)),
        /* @__PURE__ */ Rn.createElement("td", { className: "py-3 px-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-100" }, record.tripRoute), record.note && /* @__PURE__ */ Rn.createElement("div", { className: `text-[10px] mt-0.5 max-w-xs ${isHighAlert ? "text-rose-400 font-semibold" : "text-slate-400"}` }, record.note)),
        /* @__PURE__ */ Rn.createElement("td", { className: "py-3 px-4 text-center font-mono" }, /* @__PURE__ */ Rn.createElement("div", null, record.distanceKm, " km"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-slate-400" }, record.cargoTons, " T\u1EA5n h\xE0ng")),
        /* @__PURE__ */ Rn.createElement("td", { className: "py-3 px-4 text-right font-mono" }, /* @__PURE__ */ Rn.createElement("div", null, record.stdFuelLiters, " L\xEDt"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-slate-400" }, "(", record.stdRatePer100Km, " L/100km)")),
        /* @__PURE__ */ Rn.createElement("td", { className: "py-3 px-4 text-right font-mono font-bold text-white" }, /* @__PURE__ */ Rn.createElement("div", null, record.actualFuelLiters, " L\xEDt"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-slate-400" }, "(", (record.actualFuelLiters / record.distanceKm * 100).toFixed(1), " L/100km)")),
        /* @__PURE__ */ Rn.createElement("td", { className: "py-3 px-4 text-right font-mono font-bold" }, /* @__PURE__ */ Rn.createElement("span", { className: isHighAlert ? "text-rose-400" : isSaved ? "text-emerald-400" : "text-slate-300" }, record.varianceLiters > 0 ? `+${record.varianceLiters}` : record.varianceLiters, " L\xEDt"), /* @__PURE__ */ Rn.createElement("div", { className: `text-[10px] ${isHighAlert ? "text-rose-400" : isSaved ? "text-emerald-400" : "text-slate-400"}` }, "(", record.variancePct > 0 ? `+${record.variancePct}%` : `${record.variancePct}%`, ")")),
        /* @__PURE__ */ Rn.createElement("td", { className: "py-3 px-4 text-center" }, isHighAlert ? /* @__PURE__ */ Rn.createElement("span", { className: "inline-flex items-center gap-1 bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold px-2.5 py-1 rounded-full animate-pulse" }, /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-3 h-3 text-rose-400" }), " B\u1EA4T TH\u01AF\u1EDCNG / V\u01AF\u1EE2T M\u1EE8C") : isSaved ? /* @__PURE__ */ Rn.createElement("span", { className: "inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2.5 py-1 rounded-full" }, /* @__PURE__ */ Rn.createElement(Award, { className: "w-3 h-3 text-amber-300" }), " TI\u1EBET KI\u1EC6M T\u1ED0T") : /* @__PURE__ */ Rn.createElement("span", { className: "inline-flex items-center gap-1 bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-full" }, /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-3 h-3 text-cyan-400" }), " \u0110\u1EA0T CHU\u1EA8N"))
      );
    }))))), activeSubTab === "LOGS" && /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" }, fuelLogs.map((log) => /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: log.id,
        className: "bg-slate-900/90 rounded-2xl border border-slate-800 p-4 shadow-md space-y-3"
      },
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "font-mono font-bold text-white text-xs bg-slate-950 px-2 py-0.5 rounded border border-slate-800" }, log.vehiclePlate), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800" }, log.status)),
      /* @__PURE__ */ Rn.createElement("div", { className: "text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "font-semibold text-slate-200" }, log.stationName), /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-slate-400 font-mono mt-0.5" }, log.date)),
      /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs font-mono" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 block" }, "S\u1ED1 l\xEDt n\u1EA1p:"), /* @__PURE__ */ Rn.createElement("strong", { className: "text-cyan-300 text-sm" }, log.liters, " L\xEDt")), /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-500 block" }, "S\u1ED1 ti\u1EC1n:"), /* @__PURE__ */ Rn.createElement("strong", { className: "text-emerald-400 text-sm" }, log.amountVnd.toLocaleString("vi-VN"), " \u0111"))),
      /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-400" }, /* @__PURE__ */ Rn.createElement("span", null, "S\u1ED1 Odometer: "), /* @__PURE__ */ Rn.createElement("strong", { className: "text-slate-200 font-mono" }, log.odometerKm.toLocaleString("vi-VN"), " km")),
      log.receiptNote && /* @__PURE__ */ Rn.createElement("div", { className: "text-[10px] text-slate-400 italic bg-slate-800/40 p-2 rounded-lg border border-slate-700/50" }, log.receiptNote)
    )))));
  };

  // src/components/fleet/FleetTechView.tsx
  var FleetTechView = () => {
    const [activeTab, setActiveTab] = d2("MAINTENANCE");
    return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4 animate-fade-in" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 bg-slate-900/80 p-2 rounded-2xl border border-slate-800 w-fit" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setActiveTab("MAINTENANCE"),
        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "MAINTENANCE" ? "bg-blue-600 text-white shadow-md shadow-blue-600/30" : "text-slate-400 hover:text-white hover:bg-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement(Wrench, { className: "w-4 h-4" }),
      " H\u1ED3 S\u01A1 Ph\u01B0\u01A1ng Ti\u1EC7n & C\u1EA3nh B\xE1o \u0110\u0103ng Ki\u1EC3m"
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => setActiveTab("FUEL_AUDIT"),
        className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "FUEL_AUDIT" ? "bg-amber-600 text-white shadow-md shadow-amber-600/30" : "text-slate-400 hover:text-white hover:bg-slate-800"}`
      },
      /* @__PURE__ */ Rn.createElement(Fuel, { className: "w-4 h-4" }),
      " Qu\u1EA3n L\xFD & \u0110\u1ED1i So\xE1t \u0110\u1ECBnh M\u1EE9c Nhi\xEAn Li\u1EC7u"
    )), activeTab === "MAINTENANCE" ? /* @__PURE__ */ Rn.createElement(FleetMaintenance, null) : /* @__PURE__ */ Rn.createElement(FuelAuditTable, null));
  };

  // src/App.tsx
  var MainContent = () => {
    const { activeRole } = useTMS();
    return /* @__PURE__ */ Rn.createElement("main", { className: "max-w-7xl mx-auto px-4 py-6" }, activeRole === "DIRECTOR" && /* @__PURE__ */ Rn.createElement(DirectorDashboard, null), activeRole === "DISPATCHER" && /* @__PURE__ */ Rn.createElement(DispatchBoard, null), activeRole === "DRIVER" && /* @__PURE__ */ Rn.createElement(DriverMobileView, null), activeRole === "CUSTOMER" && /* @__PURE__ */ Rn.createElement(CustomerPortal, null), activeRole === "FLEET_TECH" && /* @__PURE__ */ Rn.createElement(FleetTechView, null));
  };
  var App = () => {
    return /* @__PURE__ */ Rn.createElement(TMSProvider, null, /* @__PURE__ */ Rn.createElement("div", { className: "min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white" }, /* @__PURE__ */ Rn.createElement(Header, null), /* @__PURE__ */ Rn.createElement("div", { className: "flex-1" }, /* @__PURE__ */ Rn.createElement(MainContent, null)), /* @__PURE__ */ Rn.createElement(ToastContainer, null), /* @__PURE__ */ Rn.createElement("footer", { className: "bg-slate-950 border-t border-slate-900 py-6 text-xs text-slate-500" }, /* @__PURE__ */ Rn.createElement("div", { className: "max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-7 h-7 rounded-lg bg-blue-600/20 text-cyan-400 flex items-center justify-center font-bold" }, /* @__PURE__ */ Rn.createElement(Truck, { className: "w-4 h-4" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("strong", { className: "text-slate-300" }, "C\xD4NG TY TNHH \u0110\u1EA6U T\u01AF V\xC0 XU\u1EA4T NH\u1EACP KH\u1EA8U NNP"), /* @__PURE__ */ Rn.createElement("div", { className: "text-[11px] text-slate-500" }, "H\u1EC7 th\u1ED1ng Qu\u1EA3n l\xFD V\u1EADn t\u1EA3i NNP TMS \u2022 \u0110\u1ED9i xe C\u1EA3ng H\u1EA3i Ph\xF2ng & H\xE0nh lang c\xF4ng nghi\u1EC7p ph\xEDa B\u1EAFc"))), /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center gap-6 text-[11px]" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5 text-slate-400" }, /* @__PURE__ */ Rn.createElement(MapPin, { className: "w-3.5 h-3.5 text-cyan-400" }), " Tr\u1EE5 s\u1EDF: \u0110\xECnh V\u0169, H\u1EA3i An, H\u1EA3i Ph\xF2ng"), /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5 text-slate-400" }, /* @__PURE__ */ Rn.createElement(PhoneCall, { className: "w-3.5 h-3.5 text-emerald-400" }), " T\u1ED5ng \u0111\xE0i: 1900.8899"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-600" }, "\xA9 2026 NNP Logistics. B\u1EA3n quy\u1EC1n gi\u1EA3i ph\xE1p TMS t\u1ED1i \u01B0u ph\u01B0\u01A1ng ti\u1EC7n."))))));
  };
  var App_default = App;

  // src/main.tsx
  var rootElement = document.getElementById("root");
  if (rootElement) {
    const root = client_default.createRoot(rootElement);
    root.render(
      /* @__PURE__ */ Rn.createElement(Rn.StrictMode, null, /* @__PURE__ */ Rn.createElement(App_default, null))
    );
  }
})();
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/activity.js:
lucide-react/dist/esm/icons/arrow-right.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/award.js:
lucide-react/dist/esm/icons/building-2.js:
lucide-react/dist/esm/icons/calculator.js:
lucide-react/dist/esm/icons/calendar.js:
lucide-react/dist/esm/icons/camera.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/circle-x.js:
lucide-react/dist/esm/icons/clock.js:
lucide-react/dist/esm/icons/download.js:
lucide-react/dist/esm/icons/eraser.js:
lucide-react/dist/esm/icons/file-text.js:
lucide-react/dist/esm/icons/fuel.js:
lucide-react/dist/esm/icons/gauge.js:
lucide-react/dist/esm/icons/info.js:
lucide-react/dist/esm/icons/map-pin.js:
lucide-react/dist/esm/icons/maximize-2.js:
lucide-react/dist/esm/icons/minimize-2.js:
lucide-react/dist/esm/icons/navigation.js:
lucide-react/dist/esm/icons/pen-tool.js:
lucide-react/dist/esm/icons/percent.js:
lucide-react/dist/esm/icons/phone-call.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/printer.js:
lucide-react/dist/esm/icons/radio.js:
lucide-react/dist/esm/icons/refresh-cw.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/send.js:
lucide-react/dist/esm/icons/shield-check.js:
lucide-react/dist/esm/icons/smartphone.js:
lucide-react/dist/esm/icons/sparkles.js:
lucide-react/dist/esm/icons/trending-up.js:
lucide-react/dist/esm/icons/triangle-alert.js:
lucide-react/dist/esm/icons/truck.js:
lucide-react/dist/esm/icons/wrench.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/icons/zap.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

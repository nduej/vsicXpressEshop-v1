! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) n.d(o, r, function(e) {
                return t[e]
            }.bind(null, r));
        return o
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "https://widget-v4.tidiochat.com/", n.h = "b357db6ef13a3478dc53", n.cn = "render", n(n.s = 219)
}([, , , , , , , , function(t, e, n) {
    (function(e) {
        var n = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function() {
            return this
        }() || Function("return this")()
    }).call(this, n(13))
}, function(t, e, n) {
    var o = n(8),
        r = n(55).f,
        i = n(22),
        u = n(30),
        c = n(57),
        a = n(126),
        f = n(83);
    t.exports = function(t, e) {
        var n, s, d, l, p, v = t.target,
            h = t.global,
            y = t.stat;
        if (n = h ? o : y ? o[v] || c(v, {}) : (o[v] || {}).prototype)
            for (s in e) {
                if (l = e[s], d = t.noTargetGet ? (p = r(n, s)) && p.value : n[s], !f(h ? s : v + (y ? "." : "#") + s, t.forced) && void 0 !== d) {
                    if (typeof l === typeof d) continue;
                    a(l, d)
                }(t.sham || d && d.sham) && i(l, "sham", !0), u(n, s, l, t)
            }
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (e) {
            return !0
        }
    }
}, , function(t, e, n) {
    var o = n(8),
        r = n(90),
        i = n(18),
        u = n(91),
        c = n(95),
        a = n(130),
        f = r("wks"),
        s = o.Symbol,
        d = a ? s : s && s.withoutSetter || u;
    t.exports = function(t) {
        return i(f, t) || (c && i(s, t) ? f[t] = s[t] : f[t] = d("Symbol." + t)), f[t]
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (o) {
        "object" === typeof window && (n = window)
    }
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        return "object" === typeof t ? null !== t : "function" === typeof t
    }
}, , function(t, e, n) {
    var o = n(14);
    t.exports = function(t) {
        if (!o(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, , function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, , function(t, e, n) {
    var o = n(10);
    t.exports = !o((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }))
}, function(t, e, n) {
    var o = n(47),
        r = Math.min;
    t.exports = function(t) {
        return t > 0 ? r(o(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var o = n(20),
        r = n(28),
        i = n(45);
    t.exports = o ? function(t, e, n) {
        return r.f(t, e, i(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, , function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }
    t.exports = function(t, e, o) {
        return e && n(t.prototype, e), o && n(t, o), t
    }
}, function(t, e, n) {
    var o = n(9),
        r = n(8),
        i = n(64),
        u = [].slice,
        c = function(t) {
            return function(e, n) {
                var o = arguments.length > 2,
                    r = o ? u.call(arguments, 2) : void 0;
                return t(o ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, r)
                } : e, n)
            }
        };
    o({
        global: !0,
        bind: !0,
        forced: /MSIE .\./.test(i)
    }, {
        setTimeout: c(r.setTimeout),
        setInterval: c(r.setInterval)
    })
}, function(t, e) {
    t.exports = function(t) {
        if (void 0 == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function(t, e, n) {
    var o = n(20),
        r = n(87),
        i = n(16),
        u = n(56),
        c = Object.defineProperty;
    e.f = o ? c : function(t, e, n) {
        if (i(t), e = u(e, !0), i(n), r) try {
            return c(t, e, n)
        } catch (o) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, , function(t, e, n) {
    var o = n(8),
        r = n(22),
        i = n(18),
        u = n(57),
        c = n(74),
        a = n(59),
        f = a.get,
        s = a.enforce,
        d = String(String).split("String");
    (t.exports = function(t, e, n, c) {
        var a, f = !!c && !!c.unsafe,
            l = !!c && !!c.enumerable,
            p = !!c && !!c.noTargetGet;
        "function" == typeof n && ("string" != typeof e || i(n, "name") || r(n, "name", e), (a = s(n)).source || (a.source = d.join("string" == typeof e ? e : ""))), t !== o ? (f ? !p && t[e] && (l = !0) : delete t[e], l ? t[e] = n : r(t, e, n)) : l ? t[e] = n : u(e, n)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && f(this).source || c(this)
    }))
}, function(t, e, n) {
    var o = n(73),
        r = n(27);
    t.exports = function(t) {
        return o(r(t))
    }
}, , , , function(t, e, n) {
    var o = n(27);
    t.exports = function(t) {
        return Object(o(t))
    }
}, , , , function(t, e, n) {
    "use strict";
    var o = n(9),
        r = n(10),
        i = n(61),
        u = n(14),
        c = n(35),
        a = n(21),
        f = n(84),
        s = n(94),
        d = n(62),
        l = n(12),
        p = n(63),
        v = l("isConcatSpreadable"),
        h = p >= 51 || !r((function() {
            var t = [];
            return t[v] = !1, t.concat()[0] !== t
        })),
        y = d("concat"),
        m = function(t) {
            if (!u(t)) return !1;
            var e = t[v];
            return void 0 !== e ? !!e : i(t)
        };
    o({
        target: "Array",
        proto: !0,
        forced: !h || !y
    }, {
        concat: function(t) {
            var e, n, o, r, i, u = c(this),
                d = s(u, 0),
                l = 0;
            for (e = -1, o = arguments.length; e < o; e++)
                if (m(i = -1 === e ? u : arguments[e])) {
                    if (l + (r = a(i.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < r; n++, l++) n in i && f(d, l, i[n])
                } else {
                    if (l >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    f(d, l++, i)
                }
            return d.length = l, d
        }
    })
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, , , , , function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    var o = n(128),
        r = n(8),
        i = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, e) {
        return arguments.length < 2 ? i(o[t]) || i(r[t]) : o[t] && o[t][e] || r[t] && r[t][e]
    }
}, function(t, e) {
    var n = Math.ceil,
        o = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t)
    }
}, , , , , , , , function(t, e, n) {
    var o = n(20),
        r = n(102),
        i = n(45),
        u = n(31),
        c = n(56),
        a = n(18),
        f = n(87),
        s = Object.getOwnPropertyDescriptor;
    e.f = o ? s : function(t, e) {
        if (t = u(t), e = c(e, !0), f) try {
            return s(t, e)
        } catch (n) {}
        if (a(t, e)) return i(!r.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var o = n(14);
    t.exports = function(t, e) {
        if (!o(t)) return t;
        var n, r;
        if (e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
        if ("function" == typeof(n = t.valueOf) && !o(r = n.call(t))) return r;
        if (!e && "function" == typeof(n = t.toString) && !o(r = n.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var o = n(8),
        r = n(22);
    t.exports = function(t, e) {
        try {
            r(o, t, e)
        } catch (n) {
            o[t] = e
        }
        return e
    }
}, function(t, e, n) {
    var o = n(8),
        r = n(57),
        i = o["__core-js_shared__"] || r("__core-js_shared__", {});
    t.exports = i
}, function(t, e, n) {
    var o, r, i, u = n(125),
        c = n(8),
        a = n(14),
        f = n(22),
        s = n(18),
        d = n(58),
        l = n(89),
        p = n(75),
        v = c.WeakMap;
    if (u) {
        var h = d.state || (d.state = new v),
            y = h.get,
            m = h.has,
            g = h.set;
        o = function(t, e) {
            return e.facade = t, g.call(h, t, e), e
        }, r = function(t) {
            return y.call(h, t) || {}
        }, i = function(t) {
            return m.call(h, t)
        }
    } else {
        var w = l("state");
        p[w] = !0, o = function(t, e) {
            return e.facade = t, f(t, w, e), e
        }, r = function(t) {
            return s(t, w) ? t[w] : {}
        }, i = function(t) {
            return s(t, w)
        }
    }
    t.exports = {
        set: o,
        get: r,
        has: i,
        enforce: function(t) {
            return i(t) ? r(t) : o(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var n;
                if (!a(e) || (n = r(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var o = n(40);
    t.exports = Array.isArray || function(t) {
        return "Array" == o(t)
    }
}, function(t, e, n) {
    var o = n(10),
        r = n(12),
        i = n(63),
        u = r("species");
    t.exports = function(t) {
        return i >= 51 || !o((function() {
            var e = [];
            return (e.constructor = {})[u] = function() {
                return {
                    foo: 1
                }
            }, 1 !== e[t](Boolean).foo
        }))
    }
}, function(t, e, n) {
    var o, r, i = n(8),
        u = n(64),
        c = i.process,
        a = c && c.versions,
        f = a && a.v8;
    f ? r = (o = f.split("."))[0] + o[1] : u && (!(o = u.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = u.match(/Chrome\/(\d+)/)) && (r = o[1]), t.exports = r && +r
}, function(t, e, n) {
    var o = n(46);
    t.exports = o("navigator", "userAgent") || ""
}, , , , , , , , , function(t, e, n) {
    var o = n(10),
        r = n(40),
        i = "".split;
    t.exports = o((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == r(t) ? i.call(t, "") : Object(t)
    } : Object
}, function(t, e, n) {
    var o = n(58),
        r = Function.toString;
    "function" != typeof o.inspectSource && (o.inspectSource = function(t) {
        return r.call(t)
    }), t.exports = o.inspectSource
}, function(t, e) {
    t.exports = {}
}, , , , , , , function(t, e, n) {
    var o = n(47),
        r = Math.max,
        i = Math.min;
    t.exports = function(t, e) {
        var n = o(t);
        return n < 0 ? r(n + e, 0) : i(n, e)
    }
}, function(t, e, n) {
    var o = n(10),
        r = /#|\.prototype\./,
        i = function(t, e) {
            var n = c[u(t)];
            return n == f || n != a && ("function" == typeof e ? o(e) : !!e)
        },
        u = i.normalize = function(t) {
            return String(t).replace(r, ".").toLowerCase()
        },
        c = i.data = {},
        a = i.NATIVE = "N",
        f = i.POLYFILL = "P";
    t.exports = i
}, function(t, e, n) {
    "use strict";
    var o = n(56),
        r = n(28),
        i = n(45);
    t.exports = function(t, e, n) {
        var u = o(e);
        u in t ? r.f(t, u, i(0, n)) : t[u] = n
    }
}, , , function(t, e, n) {
    var o = n(20),
        r = n(10),
        i = n(88);
    t.exports = !o && !r((function() {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var o = n(8),
        r = n(14),
        i = o.document,
        u = r(i) && r(i.createElement);
    t.exports = function(t) {
        return u ? i.createElement(t) : {}
    }
}, function(t, e, n) {
    var o = n(90),
        r = n(91),
        i = o("keys");
    t.exports = function(t) {
        return i[t] || (i[t] = r(t))
    }
}, function(t, e, n) {
    var o = n(60),
        r = n(58);
    (t.exports = function(t, e) {
        return r[t] || (r[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.8.3",
        mode: o ? "pure" : "global",
        copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    var n = 0,
        o = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + o).toString(36)
    }
}, function(t, e, n) {
    var o = n(31),
        r = n(21),
        i = n(82),
        u = function(t) {
            return function(e, n, u) {
                var c, a = o(e),
                    f = r(a.length),
                    s = i(u, f);
                if (t && n != n) {
                    for (; f > s;)
                        if ((c = a[s++]) != c) return !0
                } else
                    for (; f > s; s++)
                        if ((t || s in a) && a[s] === n) return t || s || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: u(!0),
        indexOf: u(!1)
    }
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, n) {
    var o = n(14),
        r = n(61),
        i = n(12)("species");
    t.exports = function(t, e) {
        var n;
        return r(t) && ("function" != typeof(n = t.constructor) || n !== Array && !r(n.prototype) ? o(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
    }
}, function(t, e, n) {
    var o = n(10);
    t.exports = !!Object.getOwnPropertySymbols && !o((function() {
        return !String(Symbol())
    }))
}, , , , function(t, e, n) {
    var o = n(103),
        r = n(93).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return o(t, r)
    }
}, , , function(t, e, n) {
    "use strict";
    var o = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        i = r && !o.call({
            1: 2
        }, 1);
    e.f = i ? function(t) {
        var e = r(this, t);
        return !!e && e.enumerable
    } : o
}, function(t, e, n) {
    var o = n(18),
        r = n(31),
        i = n(92).indexOf,
        u = n(75);
    t.exports = function(t, e) {
        var n, c = r(t),
            a = 0,
            f = [];
        for (n in c) !o(u, n) && o(c, n) && f.push(n);
        for (; e.length > a;) o(c, n = e[a++]) && (~i(f, n) || f.push(n));
        return f
    }
}, , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    (function(t) {
        ("undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {}).SENTRY_RELEASE = {
            id: "1.107.0"
        }
    }).call(this, n(13))
}, function(t, e, n) {
    var o = n(8),
        r = n(74),
        i = o.WeakMap;
    t.exports = "function" === typeof i && /native code/.test(r(i))
}, function(t, e, n) {
    var o = n(18),
        r = n(127),
        i = n(55),
        u = n(28);
    t.exports = function(t, e) {
        for (var n = r(e), c = u.f, a = i.f, f = 0; f < n.length; f++) {
            var s = n[f];
            o(t, s) || c(t, s, a(e, s))
        }
    }
}, function(t, e, n) {
    var o = n(46),
        r = n(99),
        i = n(129),
        u = n(16);
    t.exports = o("Reflect", "ownKeys") || function(t) {
        var e = r.f(u(t)),
            n = i.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var o = n(8);
    t.exports = o
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var o = n(95);
    t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    n(124), t.exports = n(220)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    n(39), n(26);
    ! function() {
        var t = "boolean" === typeof PRODUCTION_DEVELOPMENT_BUILD && !0 === PRODUCTION_DEVELOPMENT_BUILD,
            e = t ? "".concat("https://widget-v4.tidiochat.com/", "/dist/") : "https://widget-v4.tidiochat.com/";
        var o = function() {
            var t = [],
                e = !1,
                n = !1;

            function o() {
                if (!e) {
                    e = !0;
                    for (var n = 0; n < t.length; n += 1) t[n].fn.call(window, t[n].ctx);
                    t = []
                }
            }

            function r() {
                "complete" === document.readyState && o()
            }
            return function(i, u) {
                if ("function" !== typeof i) throw new TypeError("callback for docReady(fn) must be a function");
                return e ? (setTimeout((function() {
                    i(u)
                }), 1), !1) : (t.push({
                    fn: i,
                    ctx: u
                }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(o, 1) : n || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", o, !1)) : (document.attachEvent("onreadystatechange", r), window.attachEvent("onload", o)), n = !0), !0)
            }
        }();

        function r(t) {
            ! function(t, e) {
                var n = t.contentWindow.document,
                    o = n.createElement("script");
                o.src = e, o.async = !0, n.body.appendChild(o)
            }(t, "".concat(e, "/").concat("1_107_0", "/static/js/widget.").concat(n.h, ".js"))
        }
        var i = n(221).default;
        window.tidioChatApi = new i, o((function() {
            return setTimeout((function() {
                var o = window.document.getElementById("tidio-chat-code"),
                    i = window.Shopify && !0 === window.Shopify.designMode,
                    u = /MSIE|Trident/.test(window.navigator.userAgent);
                if (o || i || u) return !1;
                ! function(t, e, n) {
                    var o = e.createElement("iframe"),
                        r = !1;
                    o.onload = function() {
                        r || (n(o), r = !0)
                    }, o.id = t, o.style.display = "none", o.title = "Tidio Chat code", e.body.appendChild(o), setTimeout((function() {
                        r || (n(o), r = !0)
                    }), 1e3)
                }("tidio-chat-code", window.document, (function(o) {
                    t && window.__REDUX_DEVTOOLS_EXTENSION__ && (o.contentWindow.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__, o.contentWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__),
                        function(t) {
                            var o = "//localhost:3000/static/js/WidgetIframe.js";
                            o = "".concat(e).concat("1_107_0", "/static/js/chunk-WidgetIframe-").concat(n.h, ".js");
                            var r = t.createElement("link");
                            r.rel = "preload", r.as = "script", r.href = o, t.head.appendChild(r)
                        }(o.contentWindow.document),
                        function(t) {
                            var n = "".concat(e, "/tururu.mp3"),
                                o = t.createElement("audio");
                            o.preload = "metadata", o.src = n, t.head.appendChild(o)
                        }(o.contentWindow.document),
                        function(t) {
                            var e = t.createElement("link");
                            e.rel = "preconnect", e.href = "https://socket.tidio.co:443", t.head.appendChild(e)
                        }(o.contentWindow.document),
                        function(t) {
                            var e = t.createElement("link");
                            e.rel = "preconnect", e.href = "https://fonts.gstatic.com", e.crossOrigin = "", t.head.appendChild(e);
                            var n = t.createElement("link");
                            n.rel = "preconnect", n.href = "https://fonts.googleapis.com", t.head.appendChild(n);
                            var o = t.createElement("link");
                            o.rel = "preconnect", o.href = "https://twemoji.maxcdn.com", t.head.appendChild(o)
                        }(o.contentWindow.document), o.contentWindow.tidioChatApi = window.tidioChatApi, "requestIdleCallback" in window ? window.requestIdleCallback((function() {
                            r(o)
                        }), {
                            timeout: 5e3
                        }) : setTimeout((function() {
                            r(o)
                        }), 0)
                }))
            }), 0)
        }))
    }()
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", (function() {
        return c
    }));
    n(39);
    var o = n(24),
        r = n.n(o),
        i = n(25),
        u = n.n(i),
        c = function() {
            function t() {
                r()(this, t), this.eventPrefix = "tidioChat-", this.readyEventWasFired = !1, this.queue = [], this.popUpOpen = this.open, this.popUpHide = this.close, this.chatDisplay = this.display, this.setColorPallete = this.setColorPalette
            }
            return u()(t, [{
                key: "on",
                value: function(t, e) {
                    "ready" === t && this.readyEventWasFired ? e() : document.addEventListener("".concat(this.eventPrefix).concat(t), (function(t) {
                        e(t.data)
                    }), !1)
                }
            }, {
                key: "trigger",
                value: function(t, e) {
                    if ("ready" === t && this.readyEventWasFired) return !1;
                    try {
                        var n = document.createEvent("Event");
                        if (n.initEvent("".concat(this.eventPrefix).concat(t), !0, !0), n.data = e, document.dispatchEvent(n), "ready" === t) {
                            if (this.readyEventWasFired) return !1;
                            this._flushAllFromQueue(), this.readyEventWasFired = !0
                        }
                    } catch (o) {
                        return !1
                    }
                    return !0
                }
            }, {
                key: "method",
                value: function(t, e) {
                    return "ready" === t && "function" === typeof e ? (this.on("ready", e), !0) : (this[t] && this[t](e), !0)
                }
            }, {
                key: "_addToQueue",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.queue.push({
                        method: t,
                        args: e
                    })
                }
            }, {
                key: "_flushAllFromQueue",
                value: function() {
                    for (; 0 !== this.queue.length;) {
                        var t = this.queue.shift(),
                            e = t.method,
                            n = t.args;
                        this[e].apply(null, n)
                    }
                }
            }, {
                key: "open",
                value: function() {
                    this._addToQueue("open")
                }
            }, {
                key: "close",
                value: function() {
                    this._addToQueue("close")
                }
            }, {
                key: "display",
                value: function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this._addToQueue("display", [t])
                }
            }, {
                key: "show",
                value: function() {
                    this._addToQueue("show")
                }
            }, {
                key: "hide",
                value: function() {
                    this._addToQueue("hide")
                }
            }, {
                key: "setColorPalette",
                value: function(t) {
                    this._addToQueue("setColorPalette", [t])
                }
            }, {
                key: "track",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "track",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                    this._addToQueue("track", [t, e, n])
                }
            }, {
                key: "messageFromVisitor",
                value: function(t) {
                    this._addToQueue("messageFromVisitor", [t])
                }
            }, {
                key: "messageFromOperator",
                value: function(t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._addToQueue("messageFromOperator", [t, e])
                }
            }, {
                key: "setVisitorData",
                value: function(t, e) {
                    this._addToQueue("setVisitorData", [t, e])
                }
            }, {
                key: "setContactProperties",
                value: function(t, e) {
                    this._addToQueue("setContactProperties", [t, e])
                }
            }, {
                key: "addVisitorTags",
                value: function(t, e) {
                    this._addToQueue("addVisitorTags", [t, e])
                }
            }, {
                key: "setFeatures",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this._addToQueue("setFeatures", t)
                }
            }]), t
        }()
}]);
! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
        sprintf: !0,
        setLocaleData: !0,
        __: !0,
        _x: !0,
        _n: !0,
        _nx: !0,
        isRTL: !0
    };
    Object.defineProperty(t, "sprintf", {
        enumerable: !0,
        get: function() {
            return i.sprintf
        }
    }), Object.defineProperty(t, "setLocaleData", {
        enumerable: !0,
        get: function() {
            return a.setLocaleData
        }
    }), Object.defineProperty(t, "__", {
        enumerable: !0,
        get: function() {
            return a.__
        }
    }), Object.defineProperty(t, "_x", {
        enumerable: !0,
        get: function() {
            return a._x
        }
    }), Object.defineProperty(t, "_n", {
        enumerable: !0,
        get: function() {
            return a._n
        }
    }), Object.defineProperty(t, "_nx", {
        enumerable: !0,
        get: function() {
            return a._nx
        }
    }), Object.defineProperty(t, "isRTL", {
        enumerable: !0,
        get: function() {
            return a.isRTL
        }
    });
    var i = n(5),
        o = n(2);
    Object.keys(o).forEach((function(e) {
        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return o[e]
            }
        }))
    }));
    var a = n(9)
}, function(e, t) {
    e.exports = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createI18n = void 0;
    var i = r(n(8)),
        o = r(n(10));

    function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(n), !0).forEach((function(t) {
                (0, i.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var s = {
        "": {
            plural_forms: function(e) {
                return 1 === e ? 0 : 1
            }
        }
    };
    t.createI18n = function(e, t) {
        var n = new o.default({}),
            r = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                n.data[t] = u({}, s, {}, n.data[t], {}, e), n.data[t][""] = u({}, s[""], {}, n.data[t][""])
            },
            i = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    o = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0;
                return n.data[e] || r(void 0, e), n.dcnpgettext(e, t, i, o, a)
            },
            a = function(e, t, n) {
                return i(n, t, e)
            };
        return e && r(e, t), {
            setLocaleData: r,
            __: function(e, t) {
                return i(t, void 0, e)
            },
            _x: a,
            _n: function(e, t, n, r) {
                return i(r, void 0, e, t, n)
            },
            _nx: function(e, t, n, r, o) {
                return i(o, r, e, t, n)
            },
            isRTL: function() {
                return "rtl" === a("ltr", "text direction")
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            var t = n(0);
            e.googlesitekit = e.googlesitekit || {}, e.googlesitekit.i18n = e.googlesitekit.i18n || {
                sprintf: t.sprintf,
                setLocaleData: t.setLocaleData,
                __: t.__,
                _x: t._x,
                _n: t._n,
                _nx: t._nx,
                isRTL: t.isRTL
            }
        }.call(this, n(4))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sprintf = function(e) {
        try {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return o.default.sprintf.apply(o.default, [e].concat(n))
        } catch (t) {
            return a("sprintf error: \n\n" + t.toString()), e
        }
    };
    var i = r(n(6)),
        o = r(n(7)),
        a = (0, i.default)(console.error)
}, function(e, t, n) {
    e.exports = function(e, t) {
        var n, r, i = 0;

        function o() {
            var o, a, u = n,
                s = arguments.length;
            e: for (; u;) {
                if (u.args.length === arguments.length) {
                    for (a = 0; a < s; a++)
                        if (u.args[a] !== arguments[a]) {
                            u = u.next;
                            continue e
                        }
                    return u !== n && (u === r && (r = u.prev), u.prev.next = u.next, u.next && (u.next.prev = u.prev), u.next = n, u.prev = null, n.prev = u, n = u), u.val
                }
                u = u.next
            }
            for (o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
            return u = {
                args: o,
                val: e.apply(null, o)
            }, n ? (n.prev = u, u.next = n) : r = u, i === t.maxSize ? (r = r.prev).next = null : i++, n = u, u.val
        }
        return t = t || {}, o.clear = function() {
            n = null, r = null, i = 0
        }, o
    }
}, function(e, t, n) {
    ! function() {
        "use strict";
        var e = {
            not_string: /[^s]/,
            not_bool: /[^t]/,
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            not_json: /[^j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/
        };

        function n(e) {
            return i(a(e), arguments)
        }

        function r(e, t) {
            return n.apply(null, [e].concat(t || []))
        }

        function i(t, r) {
            var i, o, a, u, s, c, f, l, p, d = 1,
                b = t.length,
                g = "";
            for (o = 0; o < b; o++)
                if ("string" == typeof t[o]) g += t[o];
                else if ("object" == typeof t[o]) {
                if ((u = t[o]).keys)
                    for (i = r[d], a = 0; a < u.keys.length; a++) {
                        if (null == i) throw new Error(n('[sprintf] Cannot access property "%s" of undefined value "%s"', u.keys[a], u.keys[a - 1]));
                        i = i[u.keys[a]]
                    } else i = u.param_no ? r[u.param_no] : r[d++];
                if (e.not_type.test(u.type) && e.not_primitive.test(u.type) && i instanceof Function && (i = i()), e.numeric_arg.test(u.type) && "number" != typeof i && isNaN(i)) throw new TypeError(n("[sprintf] expecting number but found %T", i));
                switch (e.number.test(u.type) && (l = i >= 0), u.type) {
                    case "b":
                        i = parseInt(i, 10).toString(2);
                        break;
                    case "c":
                        i = String.fromCharCode(parseInt(i, 10));
                        break;
                    case "d":
                    case "i":
                        i = parseInt(i, 10);
                        break;
                    case "j":
                        i = JSON.stringify(i, null, u.width ? parseInt(u.width) : 0);
                        break;
                    case "e":
                        i = u.precision ? parseFloat(i).toExponential(u.precision) : parseFloat(i).toExponential();
                        break;
                    case "f":
                        i = u.precision ? parseFloat(i).toFixed(u.precision) : parseFloat(i);
                        break;
                    case "g":
                        i = u.precision ? String(Number(i.toPrecision(u.precision))) : parseFloat(i);
                        break;
                    case "o":
                        i = (parseInt(i, 10) >>> 0).toString(8);
                        break;
                    case "s":
                        i = String(i), i = u.precision ? i.substring(0, u.precision) : i;
                        break;
                    case "t":
                        i = String(!!i), i = u.precision ? i.substring(0, u.precision) : i;
                        break;
                    case "T":
                        i = Object.prototype.toString.call(i).slice(8, -1).toLowerCase(), i = u.precision ? i.substring(0, u.precision) : i;
                        break;
                    case "u":
                        i = parseInt(i, 10) >>> 0;
                        break;
                    case "v":
                        i = i.valueOf(), i = u.precision ? i.substring(0, u.precision) : i;
                        break;
                    case "x":
                        i = (parseInt(i, 10) >>> 0).toString(16);
                        break;
                    case "X":
                        i = (parseInt(i, 10) >>> 0).toString(16).toUpperCase()
                }
                e.json.test(u.type) ? g += i : (!e.number.test(u.type) || l && !u.sign ? p = "" : (p = l ? "+" : "-", i = i.toString().replace(e.sign, "")), c = u.pad_char ? "0" === u.pad_char ? "0" : u.pad_char.charAt(1) : " ", f = u.width - (p + i).length, s = u.width && f > 0 ? c.repeat(f) : "", g += u.align ? p + i + s : "0" === c ? p + s + i : s + p + i)
            }
            return g
        }
        var o = Object.create(null);

        function a(t) {
            if (o[t]) return o[t];
            for (var n, r = t, i = [], a = 0; r;) {
                if (null !== (n = e.text.exec(r))) i.push(n[0]);
                else if (null !== (n = e.modulo.exec(r))) i.push("%");
                else {
                    if (null === (n = e.placeholder.exec(r))) throw new SyntaxError("[sprintf] unexpected placeholder");
                    if (n[2]) {
                        a |= 1;
                        var u = [],
                            s = n[2],
                            c = [];
                        if (null === (c = e.key.exec(s))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                        for (u.push(c[1]);
                            "" !== (s = s.substring(c[0].length));)
                            if (null !== (c = e.key_access.exec(s))) u.push(c[1]);
                            else {
                                if (null === (c = e.index_access.exec(s))) throw new SyntaxError("[sprintf] failed to parse named argument key");
                                u.push(c[1])
                            }
                        n[2] = u
                    } else a |= 2;
                    if (3 === a) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                    i.push({
                        placeholder: n[0],
                        param_no: n[1],
                        keys: n[2],
                        sign: n[3],
                        pad_char: n[4],
                        align: n[5],
                        width: n[6],
                        precision: n[7],
                        type: n[8]
                    })
                }
                r = r.substring(n[0].length)
            }
            return o[t] = i
        }
        t.sprintf = n, t.vsprintf = r, "undefined" != typeof window && (window.sprintf = n, window.vsprintf = r, "function" == typeof define && define.amd && define((function() {
            return {
                sprintf: n,
                vsprintf: r
            }
        })))
    }()
}, function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isRTL = t._nx = t._n = t._x = t.__ = t.setLocaleData = void 0;
    var r = (0, n(2).createI18n)(),
        i = r.setLocaleData.bind(r);
    t.setLocaleData = i;
    var o = r.__.bind(r);
    t.__ = o;
    var a = r._x.bind(r);
    t._x = a;
    var u = r._n.bind(r);
    t._n = u;
    var s = r._nx.bind(r);
    t._nx = s;
    var c = r.isRTL.bind(r);
    t.isRTL = c
}, function(e, t, n) {
    "use strict";
    var r, i, o, a;
    n.r(t), n.d(t, "default", (function() {
        return f
    })), r = {
        "(": 9,
        "!": 8,
        "*": 7,
        "/": 7,
        "%": 7,
        "+": 6,
        "-": 6,
        "<": 5,
        "<=": 5,
        ">": 5,
        ">=": 5,
        "==": 4,
        "!=": 4,
        "&&": 3,
        "||": 2,
        "?": 1,
        "?:": 1
    }, i = ["(", "?"], o = {
        ")": ["("],
        ":": ["?", "?:"]
    }, a = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
    var u = {
        "!": function(e) {
            return !e
        },
        "*": function(e, t) {
            return e * t
        },
        "/": function(e, t) {
            return e / t
        },
        "%": function(e, t) {
            return e % t
        },
        "+": function(e, t) {
            return e + t
        },
        "-": function(e, t) {
            return e - t
        },
        "<": function(e, t) {
            return e < t
        },
        "<=": function(e, t) {
            return e <= t
        },
        ">": function(e, t) {
            return e > t
        },
        ">=": function(e, t) {
            return e >= t
        },
        "==": function(e, t) {
            return e === t
        },
        "!=": function(e, t) {
            return e !== t
        },
        "&&": function(e, t) {
            return e && t
        },
        "||": function(e, t) {
            return e || t
        },
        "?:": function(e, t, n) {
            if (e) throw t;
            return n
        }
    };

    function s(e) {
        var t = function(e) {
            for (var t, n, u, s, c = [], f = []; t = e.match(a);) {
                for (n = t[0], (u = e.substr(0, t.index).trim()) && c.push(u); s = f.pop();) {
                    if (o[n]) {
                        if (o[n][0] === s) {
                            n = o[n][1] || n;
                            break
                        }
                    } else if (i.indexOf(s) >= 0 || r[s] < r[n]) {
                        f.push(s);
                        break
                    }
                    c.push(s)
                }
                o[n] || f.push(n), e = e.substr(t.index + n.length)
            }
            return (e = e.trim()) && c.push(e), c.concat(f.reverse())
        }(e);
        return function(e) {
            return function(e, t) {
                var n, r, i, o, a, s, c = [];
                for (n = 0; n < e.length; n++) {
                    if (a = e[n], o = u[a]) {
                        for (r = o.length, i = Array(r); r--;) i[r] = c.pop();
                        try {
                            s = o.apply(null, i)
                        } catch (e) {
                            return e
                        }
                    } else s = t.hasOwnProperty(a) ? t[a] : +a;
                    c.push(s)
                }
                return c[0]
            }(t, e)
        }
    }
    var c = {
        contextDelimiter: "",
        onMissingKey: null
    };

    function f(e, t) {
        var n;
        for (n in this.data = e, this.pluralForms = {}, this.options = {}, c) this.options[n] = void 0 !== t && n in t ? t[n] : c[n]
    }
    f.prototype.getPluralForm = function(e, t) {
        var n, r, i, o, a = this.pluralForms[e];
        return a || ("function" != typeof(i = (n = this.data[e][""])["Plural-Forms"] || n["plural-forms"] || n.plural_forms) && (r = function(e) {
            var t, n, r;
            for (t = e.split(";"), n = 0; n < t.length; n++)
                if (0 === (r = t[n].trim()).indexOf("plural=")) return r.substr(7)
        }(n["Plural-Forms"] || n["plural-forms"] || n.plural_forms), o = s(r), i = function(e) {
            return +o({
                n: e
            })
        }), a = this.pluralForms[e] = i), a(t)
    }, f.prototype.dcnpgettext = function(e, t, n, r, i) {
        var o, a, u;
        return o = void 0 === i ? 0 : this.getPluralForm(e, i), a = n, t && (a = t + this.options.contextDelimiter + n), (u = this.data[e][a]) && u[o] ? u[o] : (this.options.onMissingKey && this.options.onMissingKey(n, e), 0 === o ? n : r)
    }
}]);
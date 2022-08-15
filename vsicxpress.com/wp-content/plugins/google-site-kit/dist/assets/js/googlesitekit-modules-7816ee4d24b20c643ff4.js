(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [17], {
        1: function(e, t) {
            e.exports = googlesitekit.i18n
        },
        105: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Cell
                }));
                var n = r(16),
                    i = r.n(n),
                    o = r(6),
                    a = r.n(o),
                    c = r(17),
                    u = r.n(c),
                    s = r(0),
                    l = r.n(s),
                    d = r(8),
                    f = r.n(d);

                function Cell(t) {
                    var r, n = t.className,
                        o = t.alignTop,
                        c = t.alignMiddle,
                        s = t.alignBottom,
                        l = t.alignRight,
                        d = t.alignLeft,
                        g = t.smAlignRight,
                        v = t.mdAlignRight,
                        p = t.lgAlignRight,
                        b = t.smSize,
                        m = t.smStart,
                        h = t.smOrder,
                        y = t.mdSize,
                        O = t.mdStart,
                        S = t.mdOrder,
                        j = t.lgSize,
                        w = t.lgStart,
                        E = t.lgOrder,
                        k = t.size,
                        _ = t.children,
                        C = u()(t, ["className", "alignTop", "alignMiddle", "alignBottom", "alignRight", "alignLeft", "smAlignRight", "mdAlignRight", "lgAlignRight", "smSize", "smStart", "smOrder", "mdSize", "mdStart", "mdOrder", "lgSize", "lgStart", "lgOrder", "size", "children"]);
                    return e.createElement("div", i()({}, C, {
                        className: f()(n, "mdc-layout-grid__cell", (r = {
                            "mdc-layout-grid__cell--align-top": o,
                            "mdc-layout-grid__cell--align-middle": c,
                            "mdc-layout-grid__cell--align-bottom": s,
                            "mdc-layout-grid__cell--align-right": l,
                            "mdc-layout-grid__cell--align-left": d,
                            "mdc-layout-grid__cell--align-right-phone": g,
                            "mdc-layout-grid__cell--align-right-tablet": v,
                            "mdc-layout-grid__cell--align-right-desktop": p
                        }, a()(r, "mdc-layout-grid__cell--span-".concat(k), 12 >= k && k > 0), a()(r, "mdc-layout-grid__cell--span-".concat(j, "-desktop"), 12 >= j && j > 0), a()(r, "mdc-layout-grid__cell--start-".concat(w, "-desktop"), 12 >= w && w > 0), a()(r, "mdc-layout-grid__cell--order-".concat(E, "-desktop"), 12 >= E && E > 0), a()(r, "mdc-layout-grid__cell--span-".concat(y, "-tablet"), 8 >= y && y > 0), a()(r, "mdc-layout-grid__cell--start-".concat(O, "-tablet"), 8 >= O && O > 0), a()(r, "mdc-layout-grid__cell--order-".concat(S, "-tablet"), 8 >= S && S > 0), a()(r, "mdc-layout-grid__cell--span-".concat(b, "-phone"), 4 >= b && b > 0), a()(r, "mdc-layout-grid__cell--start-".concat(m, "-phone"), 4 >= m && m > 0), a()(r, "mdc-layout-grid__cell--order-".concat(h, "-phone"), 4 >= h && h > 0), r))
                    }), _)
                }
                Cell.propTypes = {
                    smSize: l.a.number,
                    smStart: l.a.number,
                    smOrder: l.a.number,
                    mdSize: l.a.number,
                    mdStart: l.a.number,
                    mdOrder: l.a.number,
                    lgSize: l.a.number,
                    lgStart: l.a.number,
                    lgOrder: l.a.number,
                    size: l.a.number,
                    alignTop: l.a.bool,
                    alignMiddle: l.a.bool,
                    alignBottom: l.a.bool,
                    alignRight: l.a.bool,
                    alignLeft: l.a.bool,
                    smAlignRight: l.a.bool,
                    mdAlignRight: l.a.bool,
                    lgAlignRight: l.a.bool,
                    className: l.a.string,
                    children: l.a.node
                }, Cell.defaultProps = {
                    className: "",
                    size: 0,
                    smSize: 0,
                    smStart: 0,
                    smOrder: 0,
                    mdSize: 0,
                    mdStart: 0,
                    mdOrder: 0,
                    lgSize: 0,
                    lgStart: 0,
                    lgOrder: 0
                }
            }).call(this, r(3))
        },
        106: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Row
                }));
                var n = r(16),
                    i = r.n(n),
                    o = r(17),
                    a = r.n(o),
                    c = r(0),
                    u = r.n(c),
                    s = r(8),
                    l = r.n(s);

                function Row(t) {
                    var r = t.className,
                        n = t.children,
                        o = a()(t, ["className", "children"]);
                    return e.createElement("div", i()({
                        className: l()("mdc-layout-grid__inner", r)
                    }, o), n)
                }
                Row.propTypes = {
                    className: u.a.string,
                    children: u.a.node
                }, Row.defaultProps = {
                    className: ""
                }
            }).call(this, r(3))
        },
        107: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(16),
                    i = r.n(n),
                    o = r(17),
                    a = r.n(o),
                    c = r(0),
                    u = r.n(c),
                    s = r(8),
                    l = r.n(s),
                    d = r(2),
                    f = Object(d.forwardRef)((function(t, r) {
                        var n = t.alignLeft,
                            o = t.fill,
                            c = t.className,
                            u = t.children,
                            s = a()(t, ["alignLeft", "fill", "className", "children"]);
                        return e.createElement("div", i()({
                            className: l()("mdc-layout-grid", c, {
                                "mdc-layout-grid--align-left": n,
                                "mdc-layout-grid--fill": o
                            })
                        }, s, {
                            ref: r
                        }), u)
                    }));
                f.propTypes = {
                    alignLeft: u.a.bool,
                    fill: u.a.bool,
                    className: u.a.string,
                    children: u.a.node
                }, f.defaultProps = {
                    className: ""
                }, t.a = f
            }).call(this, r(3))
        },
        11: function(e, t, r) {
            "use strict";
            r.d(t, "w", (function() {
                return c.b
            })), r.d(t, "t", (function() {
                return u.a
            })), r.d(t, "x", (function() {
                return u.b
            })), r.d(t, "v", (function() {
                return g
            })), r.d(t, "c", (function() {
                return v.b
            })), r.d(t, "k", (function() {
                return v.c
            })), r.d(t, "r", (function() {
                return p.c
            })), r.d(t, "s", (function() {
                return p.d
            })), r.d(t, "o", (function() {
                return p.b
            })), r.d(t, "j", (function() {
                return p.a
            })), r.d(t, "e", (function() {
                return b.a
            })), r.d(t, "p", (function() {
                return O
            })), r.d(t, "d", (function() {
                return S
            })), r.d(t, "g", (function() {
                return j.c
            })), r.d(t, "u", (function() {
                return j.i
            })), r.d(t, "h", (function() {
                return w.b
            })), r.d(t, "n", (function() {
                return w.c
            })), r.d(t, "b", (function() {
                return w.a
            })), r.d(t, "m", (function() {
                return E.b
            })), r.d(t, "i", (function() {
                return E.a
            })), r.d(t, "q", (function() {
                return E.d
            })), r.d(t, "l", (function() {
                return k
            })), r.d(t, "a", (function() {
                return _
            })), r.d(t, "y", (function() {
                return C
            })), r.d(t, "f", (function() {
                return R
            }));
            var n = r(117),
                i = r.n(n),
                o = r(113),
                a = r.n(o),
                c = r(31),
                u = r(63),
                s = r(29),
                l = r.n(s),
                d = r(78),
                f = r.n(d),
                g = function(e) {
                    return f()(JSON.stringify(function e(t) {
                        var r = {};
                        return Object.keys(t).sort().forEach((function(n) {
                            var i = t[n];
                            i && "object" === l()(i) && !Array.isArray(i) && (i = e(i)), r[n] = i
                        })), r
                    }(e)))
                };
            var v = r(80),
                p = (r(84), r(72)),
                b = r(64);

            function m(e) {
                return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function h(e) {
                return "<p>".concat(e.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function y(e) {
                return e.replace(/\n/gi, "<br>")
            }

            function O(e) {
                for (var t = e, r = 0, n = [m, h, y]; r < n.length; r++) {
                    t = (0, n[r])(t)
                }
                return t
            }
            var S = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                j = r(59),
                w = r(85),
                E = r(50),
                k = function(e) {
                    switch (e) {
                        case "minute":
                            return 60;
                        case "hour":
                            return 3600;
                        case "day":
                            return 86400;
                        case "week":
                            return 604800;
                        case "month":
                            return 2592e3;
                        case "year":
                            return 31536e3
                    }
                },
                _ = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var r = (t - e) / e;
                    return isNaN(r) || !i()(r) ? null : r
                },
                C = function(e) {
                    try {
                        return JSON.parse(e) && !!e
                    } catch (e) {
                        return !1
                    }
                },
                R = function(e) {
                    if (!e) return "";
                    var t = e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(t)
                    })).replace(/(\\)/g, "");
                    return a()(t)
                }
        },
        13: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return i
            })), r.d(t, "e", (function() {
                return o
            })), r.d(t, "f", (function() {
                return a
            })), r.d(t, "c", (function() {
                return c
            })), r.d(t, "d", (function() {
                return u
            }));
            var n = "core/user",
                i = "connected_url_mismatch",
                o = "googlesitekit_setup",
                a = "googlesitekit_view_dashboard",
                c = "googlesitekit_manage_options",
                u = "googlesitekit_read_shared_module_data"
        },
        139: function(e, t, r) {
            "use strict";
            var n = r(2);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var o = n.createElement("path", {
                d: "M3.332 24.75h21.335c2.182 0 3.542-2.366 2.451-4.25L16.451 2.07C15.36.184 12.64.184 11.549 2.07L.882 20.5c-1.091 1.884.269 4.25 2.45 4.25zM14 14.833a1.42 1.42 0 01-1.417-1.416v-2.834c0-.779.638-1.416 1.417-1.416.78 0 1.417.637 1.417 1.416v2.834A1.42 1.42 0 0114 14.833zm1.417 5.667h-2.834v-2.833h2.834V20.5z",
                fill: "currentColor",
                fillRule: "nonzero"
            });
            t.a = function SvgError(e) {
                return n.createElement("svg", i({
                    viewBox: "0 0 28 25"
                }, e), o)
            }
        },
        15: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "b", (function() {
                return o
            }));
            var n = "core/site",
                i = "primary",
                o = "secondary"
        },
        157: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return R
            })), r.d(t, "b", (function() {
                return N
            })), r.d(t, "c", (function() {
                return A
            })), r.d(t, "f", (function() {
                return P
            })), r.d(t, "e", (function() {
                return M
            })), r.d(t, "d", (function() {
                return D
            }));
            var n = r(14),
                i = r.n(n),
                o = r(5),
                a = r.n(o),
                c = r(6),
                u = r.n(c),
                s = r(9),
                l = r.n(s),
                d = r(57),
                f = r.n(d),
                g = r(158),
                v = r.n(g),
                p = r(33),
                b = r.n(p),
                m = r(4),
                h = r.n(m),
                y = r(73),
                O = r(76),
                S = r(45),
                j = r(54);

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        u()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var k = h.a.createRegistrySelector,
                _ = j.a.clearError,
                C = j.a.receiveError,
                R = "cannot submit changes while submitting changes",
                N = "cannot submit changes if settings have not changed",
                A = function(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = n.storeName,
                        o = void 0 === i ? void 0 : i,
                        c = n.settingSlugs,
                        s = void 0 === c ? [] : c;
                    l()(e, "type is required."), l()(t, "identifier is required."), l()(r, "datapoint is required.");
                    var d = o || "".concat(e, "/").concat(t),
                        g = {
                            settings: void 0,
                            savedSettings: void 0
                        },
                        p = Object(S.a)({
                            baseName: "getSettings",
                            controlCallback: function() {
                                return b.a.get(e, t, r, {}, {
                                    useCache: !1
                                })
                            },
                            reducerCallback: function(e, t) {
                                return E(E({}, e), {}, {
                                    savedSettings: E({}, t),
                                    settings: E(E({}, t), e.settings || {})
                                })
                            }
                        }),
                        m = Object(S.a)({
                            baseName: "saveSettings",
                            controlCallback: function(n) {
                                var i = n.values;
                                return b.a.set(e, t, r, i)
                            },
                            reducerCallback: function(e, t) {
                                return E(E({}, e), {}, {
                                    savedSettings: E({}, t),
                                    settings: E({}, t)
                                })
                            },
                            argsToParams: function(e) {
                                return {
                                    values: e
                                }
                            },
                            validateParams: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.values;
                                l()(f()(t), "values is required.")
                            }
                        }),
                        y = {},
                        j = {
                            setSettings: function(e) {
                                return l()(f()(e), "values is required."), {
                                    payload: {
                                        values: e
                                    },
                                    type: "SET_SETTINGS"
                                }
                            },
                            rollbackSettings: function() {
                                return {
                                    payload: {},
                                    type: "ROLLBACK_SETTINGS"
                                }
                            },
                            saveSettings: a.a.mark((function e() {
                                var t, r, n, i, o;
                                return a.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.a.commonActions.getRegistry();
                                        case 2:
                                            return t = e.sent, e.next = 5, _("saveSettings", []);
                                        case 5:
                                            return r = t.select(d).getSettings(), e.next = 8, m.actions.fetchSaveSettings(r);
                                        case 8:
                                            if (n = e.sent, i = n.response, !(o = n.error)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 14, C(o, "saveSettings", []);
                                        case 14:
                                            return e.abrupt("return", {
                                                response: i,
                                                error: o
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        w = {},
                        R = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                r = t.type,
                                n = t.payload;
                            switch (r) {
                                case "SET_SETTINGS":
                                    var i = n.values;
                                    return E(E({}, e), {}, {
                                        settings: E(E({}, e.settings || {}), i)
                                    });
                                case "ROLLBACK_SETTINGS":
                                    return E(E({}, e), {}, {
                                        settings: e.savedSettings
                                    });
                                default:
                                    return void 0 !== y[r] ? y[r](e, {
                                        type: r,
                                        payload: n
                                    }) : e
                            }
                        },
                        N = {
                            getSettings: a.a.mark((function e() {
                                var t;
                                return a.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.a.commonActions.getRegistry();
                                        case 2:
                                            if (t = e.sent, t.select(d).getSettings()) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 7, p.actions.fetchGetSettings();
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        A = {
                            getSettings: function(e) {
                                return e.settings
                            },
                            haveSettingsChanged: function(e) {
                                var t = e.settings,
                                    r = e.savedSettings;
                                return !v()(t, r)
                            },
                            hasSettingChanged: function(e, t) {
                                l()(t, "setting is required.");
                                var r = e.settings,
                                    n = e.savedSettings;
                                return !(!r || !n) && !v()(r[t], n[t])
                            },
                            isDoingSaveSettings: function(e) {
                                return Object.values(e.isFetchingSaveSettings).some(Boolean)
                            }
                        };
                    s.forEach((function(e) {
                        var t = Object(O.b)(e),
                            r = Object(O.a)(e);
                        j["set".concat(t)] = function(e) {
                            return l()(void 0 !== e, "value is required for calls to set".concat(t, "().")), {
                                payload: {
                                    value: e
                                },
                                type: "SET_".concat(r)
                            }
                        }, y["SET_".concat(r)] = function(t, r) {
                            var n = r.payload.value;
                            return E(E({}, t), {}, {
                                settings: E(E({}, t.settings || {}), {}, u()({}, e, n))
                            })
                        }, A["get".concat(t)] = k((function(t) {
                            return function() {
                                return (t(d).getSettings() || {})[e]
                            }
                        }))
                    }));
                    var P = h.a.combineStores(h.a.commonStore, p, m, {
                        initialState: g,
                        actions: j,
                        controls: w,
                        reducer: R,
                        resolvers: N,
                        selectors: A
                    });
                    return E(E({}, P), {}, {
                        STORE_NAME: d
                    })
                };

            function P(e, t) {
                return function() {
                    var r = i()(a.a.mark((function r(n) {
                        var i, o, c, u;
                        return a.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (i = n.select, o = n.dispatch, !i(t).haveSettingsChanged()) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.next = 4, o(t).saveSettings();
                                case 4:
                                    if (c = r.sent, !(u = c.error)) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.abrupt("return", {
                                        error: u
                                    });
                                case 8:
                                    return r.next = 10, b.a.invalidateCache("modules", e);
                                case 10:
                                    return r.abrupt("return", {});
                                case 11:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(e) {
                        return r.apply(this, arguments)
                    }
                }()
            }

            function M(e) {
                return function(t) {
                    var r = t.select,
                        n = t.dispatch;
                    return r(e).haveSettingsChanged() ? n(e).rollbackSettings() : {}
                }
            }

            function D(e) {
                return function(t) {
                    var r = Object(y.e)(t)(e),
                        n = r.haveSettingsChanged,
                        i = r.isDoingSubmitChanges;
                    l()(!i(), R), l()(n(), N)
                }
            }
        },
        21: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(16),
                    i = r.n(n),
                    o = r(17),
                    a = r.n(o),
                    c = r(0),
                    u = r.n(c),
                    s = r(8),
                    l = r.n(s),
                    d = r(127),
                    f = r(1),
                    g = r(2),
                    v = Object(g.forwardRef)((function(t, r) {
                        var n, o = t["aria-label"],
                            c = t.arrow,
                            u = t.back,
                            s = t.caps,
                            g = t.children,
                            v = t.className,
                            p = t.danger,
                            b = t.disabled,
                            m = t.external,
                            h = t.hideExternalIndicator,
                            y = t.href,
                            O = t.inherit,
                            S = t.inverse,
                            j = t.onClick,
                            w = t.small,
                            E = t.to,
                            k = a()(t, ["aria-label", "arrow", "back", "caps", "children", "className", "danger", "disabled", "external", "hideExternalIndicator", "href", "inherit", "inverse", "onClick", "small", "to"]),
                            _ = y || E || !j ? E ? "ROUTER_LINK" : m ? "EXTERNAL_LINK" : "LINK" : b ? "BUTTON_DISABLED" : "BUTTON",
                            C = "BUTTON" === _ || "BUTTON_DISABLED" === _ ? "button" : "ROUTER_LINK" === _ ? d.b : "a",
                            R = ("EXTERNAL_LINK" === _ && (n = Object(f._x)("(opens in a new tab)", "screen reader text", "google-site-kit")), "BUTTON_DISABLED" === _ && (n = Object(f._x)("(disabled)", "screen reader text", "google-site-kit")), n ? o ? "".concat(o, " ").concat(n) : "string" == typeof g ? "".concat(g, " ").concat(n) : void 0 : o);
                        return e.createElement(C, i()({
                            "aria-label": R,
                            className: l()("googlesitekit-cta-link", v, {
                                "googlesitekit-cta-link--arrow": c,
                                "googlesitekit-cta-link--external": m && !h,
                                "googlesitekit-cta-link--inverse": S,
                                "googlesitekit-cta-link--back": u,
                                "googlesitekit-cta-link--small": w,
                                "googlesitekit-cta-link--inherit": O,
                                "googlesitekit-cta-link--caps": s,
                                "googlesitekit-cta-link--danger": p,
                                "googlesitekit-cta-link--disabled": b
                            }),
                            disabled: b,
                            href: "LINK" === _ || "EXTERNAL_LINK" === _ ? y : void 0,
                            onClick: j,
                            rel: "EXTERNAL_LINK" === _ ? "noopener noreferrer" : void 0,
                            ref: r,
                            target: "EXTERNAL_LINK" === _ ? "_blank" : void 0,
                            to: E
                        }, k), g)
                    }));
                v.propTypes = {
                    arrow: u.a.bool,
                    back: u.a.bool,
                    caps: u.a.bool,
                    children: u.a.node,
                    className: u.a.string,
                    danger: u.a.bool,
                    disabled: u.a.bool,
                    external: u.a.bool,
                    hideExternalIndicator: u.a.bool,
                    href: u.a.string,
                    inherit: u.a.bool,
                    inverse: u.a.bool,
                    onClick: u.a.func,
                    small: u.a.bool,
                    to: u.a.string
                }, v.defaultProps = {
                    arrow: !1,
                    back: !1,
                    caps: !1,
                    className: "",
                    danger: !1,
                    disabled: !1,
                    external: !1,
                    hideExternalIndicator: !1,
                    href: "",
                    inherit: !1,
                    inverse: !1,
                    small: !1
                }, t.a = v
            }).call(this, r(3))
        },
        22: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return i
            }));
            var n = "core/modules",
                i = "insufficient_module_dependencies"
        },
        28: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return i
            }));
            var n = "_googlesitekitDataLayer",
                i = "data-googlesitekit-gtag"
        },
        30: function(e, t, r) {
            "use strict";
            (function(e) {
                var n, i;
                r.d(t, "a", (function() {
                    return o
                })), r.d(t, "b", (function() {
                    return a
                }));
                var o = new Set((null === (n = e) || void 0 === n || null === (i = n._googlesitekitBaseData) || void 0 === i ? void 0 : i.enabledFeatures) || []),
                    a = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                        return t instanceof Set && t.has(e)
                    }
            }).call(this, r(18))
        },
        31: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return p
                })), r.d(t, "b", (function() {
                    return v
                }));
                var n = r(86),
                    i = e._googlesitekitBaseData || {},
                    o = i.activeModules,
                    a = void 0 === o ? [] : o,
                    c = i.isSiteKitScreen,
                    u = i.trackingEnabled,
                    s = {
                        activeModules: a,
                        trackingEnabled: u,
                        trackingID: i.trackingID,
                        referenceSiteURL: i.referenceSiteURL,
                        userIDHash: i.userIDHash,
                        isSiteKitScreen: c
                    },
                    l = Object(n.a)(s),
                    d = l.enableTracking,
                    f = l.disableTracking,
                    g = (l.isTrackingEnabled, l.initializeSnippet),
                    v = l.trackEvent;

                function p(e) {
                    e ? d() : f()
                }
                c && u && g()
            }).call(this, r(18))
        },
        33: function(e, t) {
            e.exports = googlesitekit.api
        },
        35: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            }));
            var n = function(e) {
                return e instanceof Date && !isNaN(e)
            }
        },
        360: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return b
                }));
                var n = r(5),
                    i = r.n(n),
                    o = r(6),
                    a = r.n(o),
                    c = r(9),
                    u = r.n(c),
                    s = r(33),
                    l = r.n(s),
                    d = r(4),
                    f = r.n(d),
                    g = r(45);

                function v(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function p(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? v(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var b = function(t, r, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        c = o.client,
                        s = void 0 === c || c,
                        d = o.server,
                        v = void 0 === d || d,
                        b = o.storeName,
                        m = void 0 === b ? void 0 : b;
                    u()(t, "type is required."), u()(r, "identifier is required."), u()(n, "datapoint is required.");
                    var h = m || "".concat(t, "/").concat(r),
                        y = {
                            serverNotifications: v ? void 0 : {},
                            clientNotifications: s ? void 0 : {}
                        },
                        O = Object(g.a)({
                            baseName: "getNotifications",
                            controlCallback: function() {
                                return l.a.get(t, r, n)
                            },
                            reducerCallback: function(e, t) {
                                return p(p({}, e), {}, {
                                    serverNotifications: t.reduce((function(e, t) {
                                        return p(p({}, e), {}, a()({}, t.id, t))
                                    }), {})
                                })
                            }
                        }),
                        S = {
                            addNotification: function(e) {
                                return u()(e, "notification is required."), {
                                    payload: {
                                        notification: e
                                    },
                                    type: "ADD_NOTIFICATION"
                                }
                            },
                            removeNotification: function(e) {
                                return u()(e, "id is required."), {
                                    payload: {
                                        id: e
                                    },
                                    type: "REMOVE_NOTIFICATION"
                                }
                            }
                        },
                        j = {},
                        w = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                n = r.type,
                                i = r.payload;
                            switch (n) {
                                case "ADD_NOTIFICATION":
                                    var o = i.notification;
                                    return p(p({}, t), {}, {
                                        clientNotifications: p(p({}, t.clientNotifications || {}), {}, a()({}, o.id, o))
                                    });
                                case "REMOVE_NOTIFICATION":
                                    var c = i.id;
                                    if (void 0 === t.clientNotifications || void 0 === t.clientNotifications[c]) return void 0 !== t.serverNotifications && void 0 !== t.serverNotifications[c] && e.console.warn('Cannot remove server-side notification with ID "'.concat(c, '"; this may be changed in a future release.')), t;
                                    var u = p({}, t.clientNotifications);
                                    return delete u[c], p(p({}, t), {}, {
                                        clientNotifications: u
                                    });
                                default:
                                    return t
                            }
                        },
                        E = {
                            getNotifications: i.a.mark((function e() {
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, O.actions.fetchGetNotifications();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        };
                    v || delete E.getNotifications;
                    var k = {
                            getNotifications: function(e) {
                                var t = e.serverNotifications,
                                    r = e.clientNotifications;
                                return void 0 === t && void 0 === r ? t : Object.values(p(p({}, t || {}), r || {}))
                            }
                        },
                        _ = f.a.combineStores(O, {
                            initialState: y,
                            actions: S,
                            controls: j,
                            reducer: w,
                            resolvers: E,
                            selectors: k
                        });
                    return p(p({}, _), {}, {
                        STORE_NAME: h
                    })
                }
            }).call(this, r(18))
        },
        4: function(e, t) {
            e.exports = googlesitekit.data
        },
        42: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            }));
            var n = r(35),
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = "string" == typeof e;
                    if (!t) return !1;
                    var r = e.split("-");
                    return 3 === r.length && Object(n.a)(new Date(e))
                }
        },
        444: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ModuleSettingsWarning
                }));
                var n = r(4),
                    i = r.n(n),
                    o = r(22),
                    a = r(8),
                    c = r.n(a),
                    u = r(139),
                    s = i.a.useSelect;

                function ModuleSettingsWarning(t) {
                    var r = t.slug,
                        n = s((function(e) {
                            var t;
                            return null === (t = e(o.a)) || void 0 === t ? void 0 : t.getCheckRequirementsError(r)
                        }));
                    return n ? e.createElement("div", {
                        className: c()("googlesitekit-settings-module-warning", "googlesitekit-settings-module-warning--modules-list")
                    }, e.createElement(u.a, {
                        height: "20",
                        width: "23"
                    }), " ", n.message) : null
                }
            }).call(this, r(3))
        },
        45: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return S
            }));
            var n = r(5),
                i = r.n(n),
                o = r(6),
                a = r.n(o),
                c = r(9),
                u = r.n(c),
                s = r(57),
                l = r.n(s),
                d = r(54),
                f = r(76),
                g = r(11);

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                        a()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var b = function(e) {
                    return e
                },
                m = function() {
                    return {}
                },
                h = function() {},
                y = d.a.clearError,
                O = d.a.receiveError,
                S = function(e) {
                    var t, r, n = i.a.mark(x),
                        o = e.baseName,
                        c = e.controlCallback,
                        s = e.reducerCallback,
                        d = void 0 === s ? b : s,
                        v = e.argsToParams,
                        S = void 0 === v ? m : v,
                        j = e.validateParams,
                        w = void 0 === j ? h : j;
                    u()(o, "baseName is required."), u()("function" == typeof c, "controlCallback is required and must be a function."), u()("function" == typeof d, "reducerCallback must be a function."), u()("function" == typeof S, "argsToParams must be a function."), u()("function" == typeof w, "validateParams must be a function.");
                    try {
                        w(S()), r = !1
                    } catch (e) {
                        r = !0
                    }
                    var E = Object(f.b)(o),
                        k = Object(f.a)(o),
                        _ = "FETCH_".concat(k),
                        C = "START_".concat(_),
                        R = "FINISH_".concat(_),
                        N = "CATCH_".concat(_),
                        A = "RECEIVE_".concat(k),
                        P = "fetch".concat(E),
                        M = "receive".concat(E),
                        D = "isFetching".concat(E),
                        T = a()({}, D, {});

                    function x(e, t) {
                        var r, a;
                        return i.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, {
                                        payload: {
                                            params: e
                                        },
                                        type: C
                                    };
                                case 2:
                                    return n.next = 4, y(o, t);
                                case 4:
                                    return n.prev = 4, n.next = 7, {
                                        payload: {
                                            params: e
                                        },
                                        type: _
                                    };
                                case 7:
                                    return r = n.sent, n.next = 10, I[M](r, e);
                                case 10:
                                    return n.next = 12, {
                                        payload: {
                                            params: e
                                        },
                                        type: R
                                    };
                                case 12:
                                    n.next = 23;
                                    break;
                                case 14:
                                    return n.prev = 14, n.t0 = n.catch(4), a = n.t0, n.next = 19, O(a, o, t);
                                case 19:
                                    return n.next = 21, O(a);
                                case 21:
                                    return n.next = 23, {
                                        payload: {
                                            params: e
                                        },
                                        type: N
                                    };
                                case 23:
                                    return n.abrupt("return", {
                                        response: r,
                                        error: a
                                    });
                                case 24:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [4, 14]
                        ])
                    }
                    var I = (t = {}, a()(t, P, (function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            var n = S.apply(void 0, t);
                            return w(n), x(n, t)
                        })), a()(t, M, (function(e, t) {
                            return u()(void 0 !== e, "response is required."), r ? (u()(l()(t), "params is required."), w(t)) : t = {}, {
                                payload: {
                                    response: e,
                                    params: t
                                },
                                type: A
                            }
                        })), t),
                        L = a()({}, _, (function(e) {
                            var t = e.payload;
                            return c(t.params)
                        })),
                        q = a()({}, D, (function(e) {
                            if (void 0 === e[D]) return !1;
                            var t;
                            try {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                                t = S.apply(void 0, n), w(t)
                            } catch (e) {
                                return !1
                            }
                            return !!e[D][Object(g.v)(t)]
                        }));
                    return {
                        initialState: T,
                        actions: I,
                        controls: L,
                        reducer: function(e, t) {
                            var r = t.type,
                                n = t.payload;
                            switch (r) {
                                case C:
                                    var i = n.params;
                                    return p(p({}, e), {}, a()({}, D, p(p({}, e[D]), {}, a()({}, Object(g.v)(i), !0))));
                                case A:
                                    var o = n.response,
                                        c = n.params;
                                    return d(e, o, c);
                                case R:
                                    var u = n.params;
                                    return p(p({}, e), {}, a()({}, D, p(p({}, e[D]), {}, a()({}, Object(g.v)(u), !1))));
                                case N:
                                    var s = n.params;
                                    return p(p({}, e), {}, a()({}, D, p(p({}, e[D]), {}, a()({}, Object(g.v)(s), !1))));
                                default:
                                    return e
                            }
                        },
                        resolvers: {},
                        selectors: q
                    }
                }
        },
        50: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return i
            })), r.d(t, "a", (function() {
                return o
            })), r.d(t, "d", (function() {
                return a
            })), r.d(t, "c", (function() {
                return c
            })), r.d(t, "e", (function() {
                return u
            }));
            var n = r(109);

            function i(e) {
                try {
                    return new URL(e).pathname
                } catch (e) {}
                return null
            }

            function o(e, t) {
                try {
                    return new URL(t, e).href
                } catch (e) {}
                return ("string" == typeof e ? e : "") + ("string" == typeof t ? t : "")
            }

            function a(e) {
                return "string" != typeof e ? e : e.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "")
            }

            function c(e) {
                return /^#\w[A-Za-z0-9-_]*$/.test(e)
            }

            function u(e, t) {
                if (!Object(n.a)(e)) return e;
                if (e.length <= t) return e;
                var r = new URL(e),
                    i = e.replace(r.origin, "");
                if (i.length < t) return i;
                var o = i.length - Math.floor(t) + 1;
                return "…" + i.substr(o)
            }
        },
        51: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            }));
            var n = r(28);

            function i(e) {
                return function() {
                    e[n.a] = e[n.a] || [], e[n.a].push(arguments)
                }
            }
        },
        54: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return p
            })), r.d(t, "b", (function() {
                return b
            }));
            var n = r(6),
                i = r.n(n),
                o = r(29),
                a = r.n(o),
                c = r(9),
                u = r.n(c),
                s = r(78),
                l = r.n(s),
                d = r(11);

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        i()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function v(e, t) {
                if (t && Array.isArray(t)) {
                    var r = t.map((function(e) {
                        return "object" === a()(e) ? Object(d.v)(e) : e
                    }));
                    return "".concat(e, "::").concat(l()(JSON.stringify(r)))
                }
                return e
            }
            var p = {
                receiveError: function(e, t, r) {
                    return u()(e, "error is required."), t && u()(r && Array.isArray(r), "args is required (and must be an array) when baseName is specified."), {
                        type: "RECEIVE_ERROR",
                        payload: {
                            error: e,
                            baseName: t,
                            args: r
                        }
                    }
                },
                clearError: function(e, t) {
                    return e && u()(t && Array.isArray(t), "args is required (and must be an array) when baseName is specified."), {
                        type: "CLEAR_ERROR",
                        payload: {
                            baseName: e,
                            args: t
                        }
                    }
                },
                clearErrors: function(e) {
                    return {
                        type: "CLEAR_ERRORS",
                        payload: {
                            baseName: e
                        }
                    }
                }
            };

            function b() {
                var e = {
                    getErrorForSelector: function(t, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return u()(r, "selectorName is required."), e.getError(t, r, n)
                    },
                    getErrorForAction: function(t, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return u()(r, "actionName is required."), e.getError(t, r, n)
                    },
                    getError: function(e, t, r) {
                        var n = e.error,
                            i = e.errors;
                        return t || r ? (u()(t, "baseName is required."), i[v(t, r)]) : n
                    },
                    getErrors: function(e) {
                        var t = new Set(Object.values(e.errors));
                        return void 0 !== e.error && t.add(e.error), Array.from(t)
                    },
                    hasErrors: function(t) {
                        return e.getErrors(t).length > 0
                    }
                };
                return {
                    initialState: {
                        errors: {},
                        error: void 0
                    },
                    actions: p,
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "RECEIVE_ERROR":
                                var o = n.baseName,
                                    a = n.args,
                                    c = n.error;
                                return g(g({}, e), {}, o ? {
                                    errors: g(g({}, e.errors || {}), {}, i()({}, v(o, a), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var u = n.baseName,
                                    s = n.args,
                                    l = g({}, e);
                                if (u) {
                                    var d = v(u, s);
                                    l.errors = g({}, e.errors || {}), delete l.errors[d]
                                } else l.error = void 0;
                                return l;
                            case "CLEAR_ERRORS":
                                var f = n.baseName,
                                    p = g({}, e);
                                if (f)
                                    for (var b in p.errors = g({}, e.errors || {}), p.errors)(b === f || b.startsWith("".concat(f, "::"))) && delete p.errors[b];
                                else p.errors = {}, p.error = void 0;
                                return p;
                            default:
                                return e
                        }
                    },
                    resolvers: {},
                    selectors: e
                }
            }
        },
        59: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            })), r.d(t, "b", (function() {
                return n
            })), r.d(t, "e", (function() {
                return u
            })), r.d(t, "f", (function() {
                return g
            })), r.d(t, "g", (function() {
                return v
            })), r.d(t, "h", (function() {
                return d.a
            })), r.d(t, "d", (function() {
                return p
            })), r.d(t, "c", (function() {
                return m
            })), r.d(t, "i", (function() {
                return f
            }));
            var n = "Invalid dateString parameter, it must be a string.",
                i = 'Invalid date range, it must be a string with the format "last-x-days".',
                o = r(9),
                a = r.n(o),
                c = r(35),
                u = function(e) {
                    var t = new Date(e);
                    a()(Object(c.a)(t), "Date param must construct to a valid date instance or be a valid date instance itself.");
                    var r = "".concat(t.getMonth() + 1),
                        n = "".concat(t.getDate());
                    return [t.getFullYear(), r.length < 2 ? "0".concat(r) : r, n.length < 2 ? "0".concat(n) : n].join("-")
                },
                s = r(12),
                l = r.n(s),
                d = r(42),
                f = function(e) {
                    a()(Object(d.a)(e), n);
                    var t = e.split("-"),
                        r = l()(t, 3),
                        i = r[0],
                        o = r[1],
                        c = r[2];
                    return new Date(i, o - 1, c)
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = f(e);
                    return r.setDate(r.getDate() - t), u(r)
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e.split("-");
                    return 3 === t.length && "last" === t[0] && !Number.isNaN(t[1]) && !Number.isNaN(parseFloat(t[1])) && "days" === t[2]
                };

            function p(e) {
                var t = e.match(/last-(\d+)-days/);
                if (t && t[1]) return parseInt(t[1], 10);
                throw new Error("Unrecognized date range slug.")
            }
            var b = r(1);

            function m() {
                var e = function(e) {
                    return Object(b.sprintf)(
                        /* translators: %s: number of days */
                        Object(b._n)("Last %s day", "Last %s days", e, "google-site-kit"), e)
                };
                return {
                    "last-7-days": {
                        slug: "last-7-days",
                        label: e(7),
                        days: 7
                    },
                    "last-14-days": {
                        slug: "last-14-days",
                        label: e(14),
                        days: 14
                    },
                    "last-28-days": {
                        slug: "last-28-days",
                        label: e(28),
                        days: 28
                    },
                    "last-90-days": {
                        slug: "last-90-days",
                        label: e(90),
                        days: 90
                    }
                }
            }
        },
        614: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return U
            })), r.d(t, "a", (function() {
                return F
            }));
            var n = r(9),
                i = r.n(n),
                o = r(4),
                a = r.n(o),
                c = r(360),
                u = r(157),
                s = r(54),
                l = r(6),
                d = r.n(l),
                f = r(287),
                g = r(15),
                v = r(13);

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        d()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var m = a.a.createRegistrySelector,
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = t.storeName,
                        n = void 0 === r ? void 0 : r,
                        o = t.adminPage,
                        a = void 0 === o ? "googlesitekit-dashboard" : o,
                        c = t.requiresSetup,
                        u = void 0 === c || c;
                    i()(n, "storeName is required.");
                    var s = {},
                        l = {},
                        d = {},
                        p = function(e) {
                            return e
                        },
                        h = {},
                        y = {
                            getAdminScreenURL: m((function(e) {
                                return function(t, r) {
                                    return e(g.c).getAdminURL(a, r)
                                }
                            })),
                            getAdminReauthURL: m((function(t) {
                                return function(r) {
                                    var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                        o = t(v.a).needsReauthentication();
                                    if (void 0 !== o) {
                                        var a = {};
                                        u || !0 !== i || (a.notification = "authentication_success", a.reAuth = void 0);
                                        var c = t(n).getAdminScreenURL(b({
                                            slug: e,
                                            reAuth: i
                                        }, a));
                                        if (void 0 !== c) {
                                            if (!o) return c;
                                            var s = t(v.a).getConnectURL({
                                                redirectURL: c
                                            });
                                            return Object(f.a)(s, {
                                                status: i
                                            })
                                        }
                                    }
                                }
                            }))
                        };
                    return {
                        STORE_NAME: n,
                        initialState: s,
                        actions: l,
                        controls: d,
                        reducer: p,
                        resolvers: h,
                        selectors: y
                    }
                },
                y = r(5),
                O = r.n(y),
                S = r(73);

            function j(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(r), !0).forEach((function(t) {
                        d()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var E = a.a.createRegistryControl,
                k = s.a.clearError,
                _ = s.a.receiveError;

            function C(e) {
                var t, r = e || {},
                    n = r.submitChanges,
                    i = void 0 === n ? function() {
                        return {}
                    } : n,
                    o = r.rollbackChanges,
                    a = void 0 === o ? function() {
                        return {}
                    } : o,
                    c = r.validateCanSubmitChanges,
                    u = void 0 === c ? function() {} : c,
                    s = {
                        submitChanges: O.a.mark((function e() {
                            var t;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, k("submitChanges", []);
                                    case 2:
                                        return e.next = 4, {
                                            type: "START_SUBMIT_CHANGES",
                                            payload: {}
                                        };
                                    case 4:
                                        return e.next = 6, {
                                            type: "SUBMIT_CHANGES",
                                            payload: {}
                                        };
                                    case 6:
                                        if (!(null == (t = e.sent) ? void 0 : t.error)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 10, _(t.error, "submitChanges", []);
                                    case 10:
                                        return e.next = 12, {
                                            type: "FINISH_SUBMIT_CHANGES",
                                            payload: {}
                                        };
                                    case 12:
                                        return e.abrupt("return", t);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })),
                        rollbackChanges: O.a.mark((function e() {
                            var t;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, {
                                            type: "ROLLBACK_CHANGES",
                                            payload: {}
                                        };
                                    case 2:
                                        return t = e.sent, e.abrupt("return", t);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))
                    },
                    l = (t = {}, d()(t, "SUBMIT_CHANGES", E((function(e) {
                        return function() {
                            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                            return i.apply(void 0, [e].concat(r))
                        }
                    }))), d()(t, "ROLLBACK_CHANGES", E((function(e) {
                        return function() {
                            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                            return a.apply(void 0, [e].concat(r))
                        }
                    }))), t),
                    f = Object(S.g)(u);
                return {
                    initialState: {
                        isDoingSubmitChanges: !1
                    },
                    actions: s,
                    controls: l,
                    reducer: function(e, t) {
                        switch (t.type) {
                            case "START_SUBMIT_CHANGES":
                                return w(w({}, e), {}, {
                                    isDoingSubmitChanges: !0
                                });
                            case "FINISH_SUBMIT_CHANGES":
                                return w(w({}, e), {}, {
                                    isDoingSubmitChanges: !1
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: {},
                    selectors: {
                        canSubmitChanges: f.safeSelector,
                        __dangerousCanSubmitChanges: f.dangerousSelector,
                        isDoingSubmitChanges: function(e) {
                            return !!e.isDoingSubmitChanges
                        }
                    }
                }
            }

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.storeName,
                    n = t.settingSlugs,
                    o = t.adminPage,
                    l = void 0 === o ? "googlesitekit-dashboard" : o,
                    d = t.requiresSetup,
                    f = void 0 === d || d,
                    g = t.submitChanges,
                    v = t.rollbackChanges,
                    p = t.validateCanSubmitChanges,
                    b = t.validateIsSetupBlocked,
                    m = void 0 === b ? void 0 : b;
                i()(e, "slug is required."), i()(r, "storeName is required.");
                var y = Object(c.a)("modules", e, "notifications", {
                        storeName: r
                    }),
                    O = h(e, {
                        storeName: r,
                        adminPage: l,
                        requiresSetup: f
                    }),
                    j = {};
                if (f && m) {
                    var w = Object(S.g)(m, {
                            negate: !0
                        }),
                        E = w.safeSelector,
                        k = w.dangerousSelector;
                    j.selectors = {
                        isSetupBlocked: E,
                        __dangerousIsSetupBlocked: k
                    }
                }
                var _ = {};
                if (void 0 !== n) {
                    var R = Object(u.c)("modules", e, "settings", {
                            storeName: r,
                            settingSlugs: n
                        }),
                        N = C({
                            submitChanges: g || Object(u.f)(e, r),
                            rollbackChanges: v || Object(u.e)(r),
                            validateCanSubmitChanges: p || Object(u.d)(r)
                        });
                    _ = a.a.combineStores(y, R, N, O, Object(s.b)(), j)
                } else _ = a.a.combineStores(a.a.commonStore, y, O, j, Object(s.b)(), C({
                    submitChanges: g,
                    validateCanSubmitChanges: p
                }));
                return _.STORE_NAME = r, _
            }
            var N = r(22);

            function A(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(r), !0).forEach((function(t) {
                        d()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var M, D = {
                    actions: {
                        setModuleSettingsPanelState: function(e, t) {
                            i()(e, "slug is required.");
                            var r = ["closed", "edit", "view"];
                            return i()(r.includes(t), "value should be one of ".concat(r.join(), " ")), {
                                payload: {
                                    slug: e,
                                    value: t
                                },
                                type: "SET_MODULE_SETTINGS_PANEL_STATE"
                            }
                        }
                    },
                    initialState: {
                        settingsPanel: {
                            currentModule: null,
                            isEditing: !1
                        }
                    },
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "SET_MODULE_SETTINGS_PANEL_STATE":
                                var i = n.slug,
                                    o = n.value,
                                    a = P({}, e.settingsPanel);
                                return a.currentModule = "closed" === o ? null : i, a.isEditing = "edit" === o, P(P({}, e), {}, {
                                    settingsPanel: a
                                });
                            default:
                                return e
                        }
                    },
                    selectors: {
                        getModuleSettingsPanelState: function(e, t) {
                            i()(t, "slug is required.");
                            var r = e.settingsPanel,
                                n = r.currentModule,
                                o = r.isEditing;
                            return n === t ? o ? "edit" : "view" : "closed"
                        },
                        isModuleSettingsPanelOpen: function(e, t) {
                            return i()(t, "slug is required."), t === e.settingsPanel.currentModule
                        },
                        isModuleSettingsPanelClosed: function(e, t) {
                            return i()(t, "slug is required."), t !== e.settingsPanel.currentModule
                        },
                        isModuleSettingsPanelEdit: function(e, t) {
                            i()(t, "slug is required.");
                            var r = e.settingsPanel,
                                n = r.currentModule,
                                o = r.isEditing;
                            return t === n && o
                        },
                        isModuleSettingsPanelLocked: function(e, t) {
                            i()(t, "slug is required.");
                            var r = e.settingsPanel,
                                n = r.currentModule,
                                o = r.isEditing;
                            return t !== n && o
                        }
                    }
                },
                T = a.a.createRegistrySelector,
                x = a.a.createRegistryControl,
                I = {
                    actions: {
                        submitChanges: Object(S.f)((function(e) {
                            i()(e, "slug is required.")
                        }), O.a.mark((function e(t) {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, {
                                            type: "SUBMIT_MODULE_CHANGES",
                                            payload: {
                                                slug: t
                                            }
                                        };
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))),
                        rollbackChanges: Object(S.f)((function(e) {
                            i()(e, "slug is required.")
                        }), O.a.mark((function e(t) {
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, {
                                            type: "ROLLBACK_MODULE_CHANGES",
                                            payload: {
                                                slug: t
                                            }
                                        };
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    },
                    controls: (M = {}, d()(M, "SUBMIT_MODULE_CHANGES", x((function(e) {
                        return function(t) {
                            var r = t.payload.slug,
                                n = e.select(N.a).getModuleStoreName(r);
                            if (!n) return {
                                error: "The module '".concat(r, "' does not have a store.")
                            };
                            var i = e.dispatch(n).submitChanges;
                            return i ? i(r) : {
                                error: "The module '".concat(r, "' does not have a submitChanges() action.")
                            }
                        }
                    }))), d()(M, "ROLLBACK_MODULE_CHANGES", x((function(e) {
                        return function(t) {
                            var r = t.payload.slug,
                                n = e.select(N.a).getModuleStoreName(r);
                            if (!n) return {
                                error: "The module '".concat(r, "' does not have a store.")
                            };
                            var i = e.dispatch(n).rollbackChanges;
                            return i ? i(r) : void 0
                        }
                    }))), M),
                    selectors: {
                        isDoingSubmitChanges: T((function(e) {
                            return function(t, r) {
                                var n, o;
                                i()(r, "slug is required.");
                                var a = e(N.a).getModuleStoreName(r);
                                return !!(null === (n = e(a)) || void 0 === n || null === (o = n.isDoingSubmitChanges) || void 0 === o ? void 0 : o.call(n))
                            }
                        })),
                        canSubmitChanges: T((function(e) {
                            return function(t, r) {
                                var n, o;
                                i()(r, "slug is required.");
                                var a = e(N.a).getModuleStoreName(r);
                                return !!(null === (n = e(a)) || void 0 === n || null === (o = n.canSubmitChanges) || void 0 === o ? void 0 : o.call(n))
                            }
                        }))
                    }
                },
                L = r(734),
                q = a.a.combineStores(a.a.commonStore, L.a, Object(s.b)(), D, I),
                U = (q.initialState, q.actions, q.controls, q.reducer, q.resolvers, q.selectors, function(e) {
                    e.registerStore(N.a, q)
                });

            function F(e) {
                var t = e.dispatch;
                return {
                    createModuleStore: R,
                    activateModule: function(e) {
                        return t(N.a).activateModule(e)
                    },
                    deactivateModule: function(e) {
                        return t(N.a).deactivateModule(e)
                    },
                    registerModule: function(e, r) {
                        return t(N.a).registerModule(e, r)
                    }
                }
            }
        },
        62: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    i = r.n(n),
                    o = r(8),
                    a = r.n(o);

                function ChangeArrow(t) {
                    var r = t.direction,
                        n = t.invertColor,
                        i = t.width,
                        o = t.height;
                    return e.createElement("svg", {
                        className: a()("googlesitekit-change-arrow", "googlesitekit-change-arrow--".concat(r), {
                            "googlesitekit-change-arrow--inverted-color": n
                        }),
                        width: i,
                        height: o,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e.createElement("path", {
                        d: "M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",
                        fill: "currentColor"
                    }))
                }
                ChangeArrow.propTypes = {
                    direction: i.a.string,
                    invertColor: i.a.bool,
                    width: i.a.number,
                    height: i.a.number
                }, ChangeArrow.defaultProps = {
                    direction: "up",
                    invertColor: !1,
                    width: 9,
                    height: 9
                }, t.a = ChangeArrow
            }).call(this, r(3))
        },
        63: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return a
            })), r.d(t, "b", (function() {
                return c
            }));
            var n = r(29),
                i = r.n(n),
                o = r(69),
                a = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        __html: o.a.sanitize(e, t)
                    }
                };

            function c(e) {
                var t, r = "object" === i()(e) ? e.toString() : e;
                return null == r || null === (t = r.replace) || void 0 === t ? void 0 : t.call(r, /\/+$/, "")
            }
        },
        64: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            }));
            var n = r(2),
                i = function(e) {
                    return function(t) {
                        return function FilteredComponent(r) {
                            return Object(n.createElement)(n.Fragment, {}, "", Object(n.createElement)(t, r), e)
                        }
                    }
                }
        },
        69: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return i
                }));
                var n = r(118),
                    i = r.n(n)()(e)
            }).call(this, r(18))
        },
        72: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "c", (function() {
                    return S
                })), r.d(t, "d", (function() {
                    return w
                })), r.d(t, "b", (function() {
                    return E
                })), r.d(t, "a", (function() {
                    return k
                }));
                var n = r(12),
                    i = r.n(n),
                    o = r(29),
                    a = r.n(o),
                    c = r(6),
                    u = r.n(c),
                    s = r(17),
                    l = r.n(s),
                    d = r(26),
                    f = r(67),
                    g = r.n(f),
                    v = r(1);

                function p(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function b(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(r), !0).forEach((function(t) {
                            u()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var m = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = h(e, t),
                            n = r.formatUnit,
                            i = r.formatDecimal;
                        try {
                            return n()
                        } catch (e) {
                            return i()
                        }
                    },
                    h = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = parseInt(e, 10), Number.isNaN(e) && (e = 0);
                        var r = Math.floor(e / 60 / 60),
                            n = Math.floor(e / 60 % 60),
                            i = Math.floor(e % 60);
                        return {
                            hours: r,
                            minutes: n,
                            seconds: i,
                            formatUnit: function() {
                                var o = t.unitDisplay,
                                    a = b(b({
                                        unitDisplay: void 0 === o ? "short" : o
                                    }, l()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? w(i, b(b({}, a), {}, {
                                    unit: "second"
                                })) : Object(v.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(v._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), i ? w(i, b(b({}, a), {}, {
                                        unit: "second"
                                    })) : "", n ? w(n, b(b({}, a), {}, {
                                        unit: "minute"
                                    })) : "", r ? w(r, b(b({}, a), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var t = Object(v.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(v.__)("%ds", "google-site-kit"), i);
                                if (0 === e) return t;
                                var o = Object(v.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(v.__)("%dm", "google-site-kit"), n),
                                    a = Object(v.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(v.__)("%dh", "google-site-kit"), r);
                                return Object(v.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(v._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), i ? t : "", n ? o : "", r ? a : "").trim()
                            }
                        }
                    },
                    y = function(e) {
                        return 1e6 <= e ? Math.round(e / 1e5) / 10 : 1e4 <= e ? Math.round(e / 1e3) : 1e3 <= e ? Math.round(e / 100) / 10 : e
                    },
                    O = function(e) {
                        var t = {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        };
                        return 1e6 <= e ? Object(v.sprintf)( // translators: %s: an abbreviated number in millions.
                            Object(v.__)("%sM", "google-site-kit"), w(y(e), e % 10 == 0 ? {} : t)) : 1e4 <= e ? Object(v.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(v.__)("%sK", "google-site-kit"), w(y(e))) : 1e3 <= e ? Object(v.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(v.__)("%sK", "google-site-kit"), w(y(e), e % 10 == 0 ? {} : t)) : w(e, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    S = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(d.isFinite)(e) ? e : Number(e), Object(d.isFinite)(e) || (console.warn("Invalid number", e, a()(e)), e = 0);
                        var r = {};
                        if ("%" === t) r = {
                            style: "percent",
                            maximumFractionDigits: 2
                        };
                        else {
                            if ("s" === t) return m(e, {
                                unitDisplay: "narrow"
                            });
                            t && "string" == typeof t ? r = {
                                style: "currency",
                                currency: t
                            } : Object(d.isPlainObject)(t) && (r = b({}, t))
                        }
                        var n = r,
                            i = n.style,
                            o = void 0 === i ? "metric" : i;
                        return "metric" === o ? O(e) : "duration" === o ? m(e, t) : w(e, r)
                    },
                    j = g()(console.warn),
                    w = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? k() : r,
                            o = l()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(n, o).format(e)
                        } catch (t) {
                            j("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n), ", ").concat(JSON.stringify(o), " ).format( ").concat(a()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, u = ["signDisplay", "compactDisplay"], s = {}, d = 0, f = Object.entries(o); d < f.length; d++) {
                            var g = i()(f[d], 2),
                                v = g[0],
                                p = g[1];
                            c[v] && p === c[v] || (u.includes(v) || (s[v] = p))
                        }
                        try {
                            return new Intl.NumberFormat(n, s).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(n).format(e)
                        }
                    },
                    E = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? k() : r,
                            i = t.style,
                            o = void 0 === i ? "long" : i,
                            a = t.type,
                            c = void 0 === a ? "conjunction" : a;
                        if (Intl.ListFormat) {
                            var u = new Intl.ListFormat(n, {
                                style: o,
                                type: c
                            });
                            return u.format(e)
                        }
                        /* translators: used between list items, there is a space after the comma. */
                        var s = Object(v.__)(", ", "google-site-kit");
                        return e.join(s)
                    },
                    k = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            r = Object(d.get)(t, ["_googlesitekitLegacyData", "locale"]);
                        if (r) {
                            var n = r.match(/^(\w{2})?(_)?(\w{2})/);
                            if (n && n[0]) return n[0].replace(/_/g, "-")
                        }
                        return t.navigator.language
                    }
            }).call(this, r(18))
        },
        73: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return C
            })), r.d(t, "b", (function() {
                return R
            })), r.d(t, "c", (function() {
                return N
            })), r.d(t, "d", (function() {
                return P
            })), r.d(t, "e", (function() {
                return M
            })), r.d(t, "g", (function() {
                return T
            })), r.d(t, "f", (function() {
                return x
            }));
            var n, i = r(5),
                o = r.n(i),
                a = r(23),
                c = r.n(a),
                u = r(6),
                s = r.n(u),
                l = r(9),
                d = r.n(l),
                f = r(207),
                g = r.n(f),
                v = r(67),
                p = r.n(v),
                b = r(104);

            function m(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var y = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = t.reduce((function(e, t) {
                            return h(h({}, e), t)
                        }), {}),
                        i = t.reduce((function(e, t) {
                            return [].concat(c()(e), c()(Object.keys(t)))
                        }), []),
                        o = A(i);
                    return d()(0 === o.length, "collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(o.join(", "), ". Check your data stores for duplicates.")), n
                },
                O = y,
                S = y,
                j = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n, i = [].concat(t);
                    return "function" != typeof i[0] && (n = i.shift()),
                        function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return i.reduce((function(e, r) {
                                return r(e, t)
                            }), e)
                        }
                },
                w = y,
                E = y,
                k = y,
                _ = function(e) {
                    return e
                },
                C = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = k.apply(void 0, c()(t.map((function(e) {
                        return e.initialState || {}
                    }))));
                    return {
                        initialState: n,
                        controls: S.apply(void 0, c()(t.map((function(e) {
                            return e.controls || {}
                        })))),
                        actions: O.apply(void 0, c()(t.map((function(e) {
                            return e.actions || {}
                        })))),
                        reducer: j.apply(void 0, [n].concat(c()(t.map((function(e) {
                            return e.reducer || _
                        }))))),
                        resolvers: w.apply(void 0, c()(t.map((function(e) {
                            return e.resolvers || {}
                        })))),
                        selectors: E.apply(void 0, c()(t.map((function(e) {
                            return e.selectors || {}
                        }))))
                    }
                },
                R = {
                    getRegistry: function() {
                        return {
                            payload: {},
                            type: "GET_REGISTRY"
                        }
                    },
                    await: o.a.mark((function e(t) {
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        payload: {
                                            value: t
                                        },
                                        type: "AWAIT"
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                N = (n = {}, s()(n, "GET_REGISTRY", Object(b.d)((function(e) {
                    return function() {
                        return e
                    }
                }))), s()(n, "AWAIT", (function(e) {
                    return e.payload.value
                })), n),
                A = function(e) {
                    for (var t = [], r = {}, n = 0; n < e.length; n++) {
                        var i = e[n];
                        r[i] = r[i] >= 1 ? r[i] + 1 : 1, r[i] > 1 && t.push(i)
                    }
                    return t
                },
                P = {
                    actions: R,
                    controls: N,
                    reducer: _
                },
                M = function(e) {
                    return function(t) {
                        return D(e(t))
                    }
                },
                D = p()((function(e) {
                    return g()(e, (function(e, t) {
                        return function() {
                            var r = e.apply(void 0, arguments);
                            return d()(void 0 !== r, "".concat(t, "(...) is not resolved")), r
                        }
                    }))
                }));

            function T(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.negate,
                    n = void 0 !== r && r,
                    i = Object(b.e)((function(t) {
                        return function(r) {
                            var i = !n,
                                o = !!n;
                            try {
                                for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++) c[u - 1] = arguments[u];
                                return e.apply(void 0, [t, r].concat(c)), i
                            } catch (e) {
                                return o
                            }
                        }
                    })),
                    o = Object(b.e)((function(t) {
                        return function(r) {
                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                            e.apply(void 0, [t, r].concat(i))
                        }
                    }));
                return {
                    safeSelector: i,
                    dangerousSelector: o
                }
            }

            function x(e, t) {
                return d()("function" == typeof e, "a validator function is required."), d()("function" == typeof t, "an action creator function is required."), d()("Generator" !== e[Symbol.toStringTag] && "GeneratorFunction" !== e[Symbol.toStringTag], "an action’s validator function must not be a generator."),
                    function() {
                        return e.apply(void 0, arguments), t.apply(void 0, arguments)
                    }
            }
        },
        734: function(e, t, r) {
            "use strict";
            (function(e) {
                var n, i = r(5),
                    o = r.n(i),
                    a = r(6),
                    c = r.n(a),
                    u = r(67),
                    s = r.n(u),
                    l = r(735),
                    d = r.n(l),
                    f = r(736),
                    g = r.n(f),
                    v = r(57),
                    p = r.n(v),
                    b = r(9),
                    m = r.n(b),
                    h = r(1),
                    y = r(33),
                    O = r.n(y),
                    S = r(4),
                    j = r.n(S),
                    w = r(22),
                    E = r(15),
                    k = r(13),
                    _ = r(45),
                    C = r(11),
                    R = r(737),
                    N = r(73);

                function A(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function P(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? A(Object(r), !0).forEach((function(t) {
                            c()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var M = j.a.createRegistrySelector,
                    D = j.a.createRegistryControl,
                    T = {
                        slug: "",
                        storeName: null,
                        name: "",
                        description: "",
                        homepage: null,
                        internal: !1,
                        active: !1,
                        connected: !1,
                        dependencies: [],
                        dependants: [],
                        order: 10,
                        features: [],
                        Icon: null,
                        SettingsEditComponent: null,
                        SettingsViewComponent: null,
                        SettingsSetupIncompleteComponent: R.a,
                        SetupComponent: null,
                        checkRequirements: function() {
                            return !0
                        }
                    },
                    x = s()((function(e, t) {
                        var r = g()({}, e, t);
                        return Object.keys(r).map((function(e) {
                            var t = P(P({}, r[e]), {}, {
                                slug: e
                            });
                            return d()(t, {
                                name: e
                            }, T), t
                        })).sort((function(e, t) {
                            return e.order - t.order
                        })).reduce((function(e, t) {
                            return P(P({}, e), {}, c()({}, t.slug, t))
                        }), {})
                    })),
                    I = Object(_.a)({
                        baseName: "getModules",
                        controlCallback: function() {
                            return O.a.get("core", "modules", "list", null, {
                                useCache: !1
                            })
                        },
                        reducerCallback: function(e, t) {
                            return P(P({}, e), {}, {
                                isAwaitingModulesRefresh: !1,
                                serverDefinitions: t.reduce((function(e, t) {
                                    return P(P({}, e), {}, c()({}, t.slug, t))
                                }), {})
                            })
                        }
                    }),
                    L = Object(_.a)({
                        baseName: "setModuleActivation",
                        controlCallback: function(e) {
                            var t = e.slug,
                                r = e.active;
                            return O.a.set("core", "modules", "activation", {
                                slug: t,
                                active: r
                            })
                        },
                        reducerCallback: function(e) {
                            return P(P({}, e), {}, {
                                isAwaitingModulesRefresh: !0
                            })
                        },
                        argsToParams: function(e, t) {
                            return {
                                slug: e,
                                active: t
                            }
                        },
                        validateParams: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.slug,
                                r = e.active;
                            m()(t, "slug is required."), m()(void 0 !== r, "active is required.")
                        }
                    }),
                    q = Object(_.a)({
                        baseName: "checkModuleAccess",
                        controlCallback: function(e) {
                            var t = e.slug;
                            return O.a.set("core", "modules", "check-access", {
                                slug: t
                            })
                        },
                        reducerCallback: function(e, t, r) {
                            var n = t.access,
                                i = r.slug;
                            return P(P({}, e), {}, {
                                moduleAccess: P(P({}, e.moduleAccess), {}, c()({}, i, n))
                            })
                        },
                        argsToParams: function(e) {
                            return {
                                slug: e
                            }
                        },
                        validateParams: function(e) {
                            var t = e.slug;
                            m()(t, "slug is required.")
                        }
                    }),
                    U = {
                        clientDefinitions: {},
                        serverDefinitions: void 0,
                        isAwaitingModulesRefresh: !1,
                        checkRequirementsResults: {},
                        moduleAccess: {}
                    },
                    F = {
                        activateModule: o.a.mark((function e(t) {
                            var r, n, i, a;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, F.setModuleActivation(t, !0);
                                    case 2:
                                        if (r = e.sent, n = r.response, i = r.error, !0 !== (null == n ? void 0 : n.success)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 8, {
                                            payload: {
                                                slug: t
                                            },
                                            type: "SELECT_MODULE_REAUTH_URL"
                                        };
                                    case 8:
                                        return a = e.sent, e.abrupt("return", {
                                            response: P(P({}, n), {}, {
                                                moduleReauthURL: a
                                            }),
                                            error: i
                                        });
                                    case 10:
                                        return e.abrupt("return", {
                                            response: n,
                                            error: i
                                        });
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })),
                        deactivateModule: o.a.mark((function e(t) {
                            var r, n, i;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, F.setModuleActivation(t, !1);
                                    case 2:
                                        return r = e.sent, n = r.response, i = r.error, e.abrupt("return", {
                                            response: n,
                                            error: i
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })),
                        setModuleActivation: Object(N.f)((function(e, t) {
                            m()(e, "slug is required."), m()(void 0 !== t, "active is required.")
                        }), o.a.mark((function e(t, r) {
                            var n, i, a;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, L.actions.fetchSetModuleActivation(t, r);
                                    case 2:
                                        if (n = e.sent, i = n.response, a = n.error, !0 !== (null == i ? void 0 : i.success)) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 8, {
                                            payload: {},
                                            type: "REFETCH_AUTHENTICATION"
                                        };
                                    case 8:
                                        return e.abrupt("return", {
                                            response: i,
                                            error: a
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))),
                        registerModule: Object(N.f)((function(e) {
                            m()(e, "module slug is required")
                        }), o.a.mark((function e(t) {
                            var r, n, i, a, c, u, s, l, d, f, g, v, p, b, m, h, y = arguments;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = y.length > 1 && void 0 !== y[1] ? y[1] : {}, n = r.storeName, i = r.name, a = r.description, c = r.features, u = r.Icon, s = r.order, l = r.homepage, d = r.SettingsEditComponent, f = r.SettingsViewComponent, g = r.SetupComponent, v = r.SettingsSetupIncompleteComponent, p = r.checkRequirements, b = r.screenWidgetContext, m = {
                                            storeName: n,
                                            name: i,
                                            description: a,
                                            features: c,
                                            Icon: u,
                                            order: s,
                                            homepage: l,
                                            SettingsEditComponent: d,
                                            SettingsViewComponent: f,
                                            SetupComponent: g,
                                            SettingsSetupIncompleteComponent: v,
                                            checkRequirements: p,
                                            screenWidgetContext: b
                                        }, e.next = 4, {
                                            payload: {
                                                settings: m,
                                                slug: t
                                            },
                                            type: "REGISTER_MODULE"
                                        };
                                    case 4:
                                        return e.next = 6, j.a.commonActions.getRegistry();
                                    case 6:
                                        return h = e.sent, e.next = 9, h.dispatch(w.a).invalidateResolution("canActivateModule", [t]);
                                    case 9:
                                        return e.next = 11, h.dispatch(w.a).invalidateResolution("getCheckRequirementsError", [t]);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))),
                        receiveCheckRequirementsError: function(e, t) {
                            return m()(e, "slug is required"), m()(p()(t), "error is required and must be an object"), {
                                payload: {
                                    slug: e,
                                    error: t
                                },
                                type: "RECEIVE_CHECK_REQUIREMENTS_ERROR"
                            }
                        },
                        receiveCheckRequirementsSuccess: function(e) {
                            return m()(e, "slug is required"), {
                                payload: {
                                    slug: e
                                },
                                type: "RECEIVE_CHECK_REQUIREMENTS_SUCCESS"
                            }
                        }
                    },
                    B = (n = {}, c()(n, "REFETCH_AUTHENTICATION", D((function(e) {
                        var t = e.dispatch;
                        return function() {
                            return t(k.a).fetchGetAuthentication()
                        }
                    }))), c()(n, "SELECT_MODULE_REAUTH_URL", D((function(e) {
                        var t = e.select;
                        return function(e) {
                            var r, n = e.payload.slug,
                                i = t(w.a).getModuleStoreName(n);
                            if (i) {
                                var o = null === (r = t(i)) || void 0 === r ? void 0 : r.getAdminReauthURL;
                                return o ? o() : t(E.c).getAdminURL("googlesitekit-dashboard")
                            }
                        }
                    }))), n),
                    H = {
                        getModules: o.a.mark((function e() {
                            var t;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, j.a.commonActions.getRegistry();
                                    case 2:
                                        if (t = e.sent, t.select(w.a).getModules()) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 7, I.actions.fetchGetModules();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })),
                        canActivateModule: o.a.mark((function e(t) {
                            var r, n, i, a, c;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, j.a.commonActions.getRegistry();
                                    case 2:
                                        return r = e.sent, e.next = 5, j.a.commonActions.await(r.__experimentalResolveSelect(w.a).getModules());
                                    case 5:
                                        if (n = r.select(w.a).getModule(t)) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        if (i = [], n.dependencies.forEach((function(e) {
                                                var t = r.select(w.a).getModule(e);
                                                (null == t ? void 0 : t.active) || i.push(t.name)
                                            })), !i.length) {
                                            e.next = 17;
                                            break
                                        }
                                        /* translators: Error message text. 1: A flattened list of module names. 2: A module name. */
                                        return a = Object(h.__)("You need to set up %1$s to gain access to %2$s.", "google-site-kit"), c = Object(h.sprintf)(a, Object(C.o)(i), n.name), e.next = 15, F.receiveCheckRequirementsError(t, {
                                            code: w.b,
                                            message: c,
                                            data: {
                                                inactiveModules: i
                                            }
                                        });
                                    case 15:
                                        e.next = 28;
                                        break;
                                    case 17:
                                        return e.prev = 17, e.next = 20, j.a.commonActions.await(n.checkRequirements(r));
                                    case 20:
                                        return e.next = 22, F.receiveCheckRequirementsSuccess(t);
                                    case 22:
                                        e.next = 28;
                                        break;
                                    case 24:
                                        return e.prev = 24, e.t0 = e.catch(17), e.next = 28, F.receiveCheckRequirementsError(t, e.t0);
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [17, 24]
                            ])
                        })),
                        hasModuleAccess: o.a.mark((function e(t) {
                            var r;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, j.a.commonActions.getRegistry();
                                    case 2:
                                        if (r = e.sent, void 0 !== r.select(w.a).hasModuleAccess(t)) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 7, q.actions.fetchCheckModuleAccess(t);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))
                    },
                    G = {
                        getModules: function(e) {
                            var t = e.clientDefinitions,
                                r = e.serverDefinitions;
                            if (void 0 !== r) return x(r, t)
                        },
                        getModule: M((function(e) {
                            return function(t, r) {
                                var n = e(w.a).getModules();
                                if (void 0 !== n) return void 0 === n[r] ? null : n[r]
                            }
                        })),
                        getModuleIcon: M((function(e) {
                            return function(t, r) {
                                var n = e(w.a).getModule(r);
                                if (void 0 !== n) return null === n || null === n.Icon ? null : n.Icon
                            }
                        })),
                        getModuleDependencyNames: M((function(e) {
                            return function(t, r) {
                                var n = e(w.a).getModule(r);
                                if (void 0 !== n) {
                                    if (null === n) return [];
                                    var i = e(w.a).getModules();
                                    return n.dependencies.map((function(e) {
                                        var t;
                                        return (null === (t = i[e]) || void 0 === t ? void 0 : t.name) || e
                                    }))
                                }
                            }
                        })),
                        getModuleDependantNames: M((function(e) {
                            return function(t, r) {
                                var n = e(w.a).getModule(r);
                                if (void 0 !== n) {
                                    if (null === n) return [];
                                    var i = e(w.a).getModules();
                                    return n.dependants.map((function(e) {
                                        var t;
                                        return (null === (t = i[e]) || void 0 === t ? void 0 : t.name) || e
                                    }))
                                }
                            }
                        })),
                        getModuleStoreName: M((function(e) {
                            return function(t, r) {
                                var n = e(w.a).getModule(r);
                                if (void 0 !== n) return null === n ? null : n.storeName
                            }
                        })),
                        isModuleActive: M((function(e) {
                            return function(t, r) {
                                var n = e(w.a).getModule(r);
                                if (void 0 !== n) return null === n ? null : n.active
                            }
                        })),
                        isModuleConnected: M((function(e) {
                            return function(t, r) {
                                var n = e(w.a).getModule(r);
                                if (void 0 !== n) return null === n ? null : n.active && n.connected
                            }
                        })),
                        isDoingSetModuleActivation: M((function(e) {
                            return function(t, r) {
                                if (e(w.a).getModule(r)) return !!e(w.a).isFetchingSetModuleActivation(r, !0) || (!!e(w.a).isFetchingSetModuleActivation(r, !1) || t.isAwaitingModulesRefresh)
                            }
                        })),
                        canActivateModule: function(e, t) {
                            m()(t, "slug is required");
                            var r = e.checkRequirementsResults[t];
                            if (void 0 !== r) return !0 === r
                        },
                        getCheckRequirementsError: M((function(e) {
                            return function(t, r) {
                                return m()(r, "slug is required."), e(w.a).canActivateModule(r) ? null : t.checkRequirementsResults[r]
                            }
                        })),
                        getScreenWidgetContext: M((function(e) {
                            return function(t, r) {
                                var n;
                                m()(r, "slug is required.");
                                var i = e(w.a).getModules();
                                if (void 0 !== i) return (null === (n = i[r]) || void 0 === n ? void 0 : n.screenWidgetContext) || null
                            }
                        })),
                        getModuleFeatures: M((function(e) {
                            return function(t, r) {
                                var n, i = e(w.a).getModules();
                                if (void 0 !== i) return Array.isArray(null === (n = i[r]) || void 0 === n ? void 0 : n.features) ? i[r].features : []
                            }
                        })),
                        hasModuleAccess: function(e, t) {
                            return e.moduleAccess[t]
                        }
                    },
                    z = j.a.combineStores(I, L, q, {
                        initialState: U,
                        actions: F,
                        controls: B,
                        reducer: function(t, r) {
                            var n = r.type,
                                i = r.payload;
                            switch (n) {
                                case "REGISTER_MODULE":
                                    var o = i.slug,
                                        a = i.settings;
                                    return t.clientDefinitions[o] ? (e.console.warn('Could not register module with slug "'.concat(o, '". Module "').concat(o, '" is already registered.')), t) : P(P({}, t), {}, {
                                        clientDefinitions: P(P({}, t.clientDefinitions), {}, c()({}, o, a))
                                    });
                                case "RECEIVE_CHECK_REQUIREMENTS_ERROR":
                                    var u = i.slug,
                                        s = i.error;
                                    return P(P({}, t), {}, {
                                        checkRequirementsResults: P(P({}, t.checkRequirementsResults), {}, c()({}, u, s))
                                    });
                                case "RECEIVE_CHECK_REQUIREMENTS_SUCCESS":
                                    var l = i.slug;
                                    return P(P({}, t), {}, {
                                        checkRequirementsResults: P(P({}, t.checkRequirementsResults), {}, c()({}, l, !0))
                                    });
                                default:
                                    return t
                            }
                        },
                        resolvers: H,
                        selectors: G
                    });
                z.initialState, z.actions, z.controls, z.reducer, z.resolvers, z.selectors;
                t.a = z
            }).call(this, r(18))
        },
        737: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return DefaultSettingsSetupIncomplete
                }));
                var n = r(0),
                    i = r.n(n),
                    o = r(130),
                    a = r(1),
                    c = r(4),
                    u = r.n(c),
                    s = r(21),
                    l = r(444),
                    d = r(93),
                    f = r(22),
                    g = u.a.useSelect;

                function DefaultSettingsSetupIncomplete(t) {
                    var r = t.slug,
                        n = g((function(e) {
                            return e(f.a).getModuleStoreName(r)
                        })),
                        i = g((function(e) {
                            var t, r;
                            return null === (t = e(n)) || void 0 === t || null === (r = t.getAdminReauthURL) || void 0 === r ? void 0 : r.call(t)
                        }));
                    return e.createElement(d.a, {
                        size: 12
                    }, e.createElement(l.a, {
                        slug: r
                    }), Object(o.a)(Object(a.__)("Setup incomplete: <a>continue module setup</a>", "google-site-kit"), {
                        a: e.createElement(s.a, {
                            href: i,
                            inherit: !0
                        })
                    }))
                }
                DefaultSettingsSetupIncomplete.propTypes = {
                    slug: i.a.string.isRequired
                }
            }).call(this, r(3))
        },
        76: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "c", (function() {
                return o
            }));
            var n = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                i = function(e) {
                    return e.replace(/([a-z0-9]{1})([A-Z]{1})/g, "$1_$2").toUpperCase()
                };

            function o(e) {
                return e.split("-").map((function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                })).join("")
            }
        },
        80: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return u
                })), r.d(t, "b", (function() {
                    return s
                })), r.d(t, "c", (function() {
                    return d
                }));
                var n = r(12),
                    i = r.n(n),
                    o = r(1);

                function a(e, t) {
                    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!r) {
                        if (Array.isArray(e) || (r = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return c(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r) return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                            }(e)) || t && e && "number" == typeof e.length) {
                            r && (e = r);
                            var n = 0,
                                i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return n >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[n++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, a = !0,
                        u = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return a = e.done, e
                        },
                        e: function(e) {
                            u = !0, o = e
                        },
                        f: function() {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                    }
                }

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }
                var u = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = null,
                            r = null,
                            n = document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),
                            i = document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");
                        if (n && i) return !1;
                        if (t = document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"), r = document.querySelector("#wp-admin-bar-google-site-kit .ab-item"), null === t && null === r) return !1;
                        var a = document.createElement("span");
                        a.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(e));
                        var c = document.createElement("span");
                        c.setAttribute("class", "plugin-count"), c.setAttribute("aria-hidden", "true"), c.textContent = e;
                        var u = document.createElement("span");
                        return u.setAttribute("class", "screen-reader-text"), u.textContent = Object(o.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(o._n)("%d notification", "%d notifications", e, "google-site-kit"), e), a.appendChild(c), a.appendChild(u), t && null === n && t.appendChild(a), r && null === i && r.appendChild(a), a
                    },
                    s = function() {
                        e.localStorage && e.localStorage.clear(), e.sessionStorage && e.sessionStorage.clear()
                    },
                    l = function(e) {
                        for (var t = location.search.substr(1).split("&"), r = {}, n = 0; n < t.length; n++) r[t[n].split("=")[0]] = decodeURIComponent(t[n].split("=")[1]);
                        return e ? r.hasOwnProperty(e) ? decodeURIComponent(r[e].replace(/\+/g, " ")) : "" : r
                    },
                    d = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                            r = new URL(t.href);
                        if (e) return r.searchParams && r.searchParams.get ? r.searchParams.get(e) : l(e);
                        var n, o = {},
                            c = a(r.searchParams.entries());
                        try {
                            for (c.s(); !(n = c.n()).done;) {
                                var u = i()(n.value, 2),
                                    s = u[0],
                                    d = u[1];
                                o[s] = d
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return o
                    }
            }).call(this, r(18))
        },
        84: function(e, t, r) {
            "use strict";
            (function(e) {
                r(46), r(47)
            }).call(this, r(18))
        },
        85: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "b", (function() {
                    return o
                })), r.d(t, "c", (function() {
                    return a
                })), r.d(t, "a", (function() {
                    return c
                }));
                var n = r(194),
                    i = r(62),
                    o = function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Number.isNaN(Number(t))) return "";
                        var o = r.invertColor,
                            a = void 0 !== o && o;
                        return Object(n.a)(e.createElement(i.a, {
                            direction: t > 0 ? "up" : "down",
                            invertColor: a
                        }))
                    },
                    a = function(e) {
                        var t, r, n, i, o, a, c, u, s, l, d, f, g, v, p;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (r = t.data) || void 0 === r || null === (n = r.rows) || void 0 === n ? void 0 : n.length) || (null == e || null === (i = e[0]) || void 0 === i || null === (o = i.data) || void 0 === o || null === (a = o.rows) || void 0 === a || null === (c = a[0]) || void 0 === c || null === (u = c.metrics) || void 0 === u || null === (s = u[0]) || void 0 === s || null === (l = s.values) || void 0 === l ? void 0 : l[0]) === (null == e || null === (d = e[0]) || void 0 === d || null === (f = d.data) || void 0 === f || null === (g = f.totals) || void 0 === g || null === (v = g[0]) || void 0 === v || null === (p = v.values) || void 0 === p ? void 0 : p[0])
                    },
                    c = function(e, t) {
                        return e > 0 && t > 0 ? e / t - 1 : e > 0 ? 1 : t > 0 ? -1 : 0
                    }
            }).call(this, r(3))
        },
        86: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return l
                }));
                var n = r(6),
                    i = r.n(n),
                    o = r(87),
                    a = r(88);

                function c(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function u(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(r), !0).forEach((function(t) {
                            i()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var s = {
                    currentUserRoles: [],
                    activeModules: [],
                    trackingEnabled: !1,
                    trackingID: "",
                    referenceSiteURL: "",
                    userIDHash: ""
                };

                function l(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                        i = u(u({}, s), t);
                    i.referenceSiteURL && (i.referenceSiteURL = i.referenceSiteURL.toString().replace(/\/+$/, ""));
                    var c = Object(o.a)(i, r);
                    return {
                        enableTracking: function() {
                            i.trackingEnabled = !0
                        },
                        disableTracking: function() {
                            i.trackingEnabled = !1
                        },
                        initializeSnippet: c,
                        isTrackingEnabled: function() {
                            return !!i.trackingEnabled
                        },
                        trackEvent: Object(a.a)(i, r, c, n)
                    }
                }
            }).call(this, r(18))
        },
        87: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return o
                }));
                var n = r(51),
                    i = r(28);

                function o(t, r) {
                    var o, a = Object(n.a)(r);
                    return function() {
                        var r = e.document;
                        if (void 0 === o && (o = !!r.querySelector("script[".concat(i.b, "]"))), !o) {
                            var n = r.createElement("script");
                            n.setAttribute(i.b, ""), n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID, "&l=").concat(i.a), r.head.appendChild(n), a("js", new Date), a("config", t.trackingID, {
                                send_page_view: t.isSiteKitScreen
                            }), o = !0
                        }
                    }
                }
            }).call(this, r(18))
        },
        88: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return g
                }));
                var n = r(5),
                    i = r.n(n),
                    o = r(6),
                    a = r.n(o),
                    c = r(14),
                    u = r.n(c),
                    s = r(51),
                    l = r(30);

                function d(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function f(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? d(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function g(t, r, n, o) {
                    var a = Object(s.a)(r);
                    return function() {
                        var r = u()(i.a.mark((function r(c, u, s, d) {
                            var g, v, p, b, m, h, y, O, S, j;
                            return i.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (b = t.activeModules, m = t.referenceSiteURL, h = t.trackingEnabled, y = t.trackingID, O = t.userIDHash, h) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return n(), S = null !== (g = null === (v = e._googlesitekitUserData) || void 0 === v || null === (p = v.user) || void 0 === p ? void 0 : p.roles) && void 0 !== g ? g : [], j = {
                                            send_to: y,
                                            event_category: c,
                                            event_label: s,
                                            value: d,
                                            dimension1: m,
                                            dimension2: S.join(","),
                                            dimension3: O,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(l.a).join(","),
                                            dimension6: b.join(",")
                                        }, r.abrupt("return", new Promise((function(e) {
                                            var t, r, n = setTimeout((function() {
                                                    o.console.warn('Tracking event "'.concat(u, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                i = function() {
                                                    clearTimeout(n), e()
                                                };
                                            a("event", u, f(f({}, j), {}, {
                                                event_callback: i
                                            })), (null === (t = o._gaUserPrefs) || void 0 === t || null === (r = t.ioo) || void 0 === r ? void 0 : r.call(t)) && i()
                                        })));
                                    case 7:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })));
                        return function(e, t, n, i) {
                            return r.apply(this, arguments)
                        }
                    }()
                }
            }).call(this, r(18))
        },
        93: function(e, t, r) {
            "use strict";
            var n = r(105);
            r.d(t, "a", (function() {
                return n.a
            }));
            var i = r(106);
            r.d(t, "c", (function() {
                return i.a
            }));
            var o = r(107);
            r.d(t, "b", (function() {
                return o.a
            }))
        },
        995: function(e, t, r) {
            "use strict";
            r.r(t),
                function(e) {
                    var n = r(4),
                        i = r.n(n),
                        o = r(614);
                    Object(o.b)(i.a);
                    var a = Object(o.a)(i.a);
                    void 0 === e.googlesitekit && (e.googlesitekit = {}), e.googlesitekit.modules = a, t.default = a
                }.call(this, r(18))
        }
    },
    [
        [995, 1, 0]
    ]
]);
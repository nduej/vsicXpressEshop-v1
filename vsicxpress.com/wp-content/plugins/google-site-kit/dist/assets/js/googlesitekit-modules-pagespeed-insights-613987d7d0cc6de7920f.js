(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [23], {
        1: function(e, t) {
            e.exports = googlesitekit.i18n
        },
        102: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "e", (function() {
                return a
            })), r.d(t, "d", (function() {
                return i
            })), r.d(t, "b", (function() {
                return o
            })), r.d(t, "a", (function() {
                return c
            })), r.d(t, "g", (function() {
                return s
            })), r.d(t, "f", (function() {
                return l
            }));
            var n = "modules/pagespeed-insights",
                a = "mobile",
                i = "desktop",
                o = "data_lab",
                c = "data_field",
                s = "dashboardPageSpeedWidgetStrategy",
                l = "dashboardPageSpeedWidgetDataSource"
        },
        103: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(6),
                    a = r.n(n),
                    i = r(0),
                    o = r.n(i);

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

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function Spinner(t) {
                    var r = t.isSaving,
                        n = t.style,
                        a = void 0 === n ? {} : n;
                    return e.createElement("span", {
                        className: "spinner",
                        style: s({
                            display: r ? "inline-block" : "none",
                            float: "none",
                            marginTop: "0",
                            visibility: "visible"
                        }, a)
                    })
                }
                Spinner.propTypes = {
                    isSaving: o.a.bool,
                    style: o.a.object
                }, t.a = Spinner
            }).call(this, r(3))
        },
        105: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Cell
                }));
                var n = r(16),
                    a = r.n(n),
                    i = r(6),
                    o = r.n(i),
                    c = r(17),
                    s = r.n(c),
                    l = r(0),
                    u = r.n(l),
                    d = r(8),
                    g = r.n(d);

                function Cell(t) {
                    var r, n = t.className,
                        i = t.alignTop,
                        c = t.alignMiddle,
                        l = t.alignBottom,
                        u = t.alignRight,
                        d = t.alignLeft,
                        f = t.smAlignRight,
                        p = t.mdAlignRight,
                        m = t.lgAlignRight,
                        b = t.smSize,
                        v = t.smStart,
                        h = t.smOrder,
                        _ = t.mdSize,
                        O = t.mdStart,
                        y = t.mdOrder,
                        E = t.lgSize,
                        A = t.lgStart,
                        R = t.lgOrder,
                        k = t.size,
                        j = t.children,
                        S = s()(t, ["className", "alignTop", "alignMiddle", "alignBottom", "alignRight", "alignLeft", "smAlignRight", "mdAlignRight", "lgAlignRight", "smSize", "smStart", "smOrder", "mdSize", "mdStart", "mdOrder", "lgSize", "lgStart", "lgOrder", "size", "children"]);
                    return e.createElement("div", a()({}, S, {
                        className: g()(n, "mdc-layout-grid__cell", (r = {
                            "mdc-layout-grid__cell--align-top": i,
                            "mdc-layout-grid__cell--align-middle": c,
                            "mdc-layout-grid__cell--align-bottom": l,
                            "mdc-layout-grid__cell--align-right": u,
                            "mdc-layout-grid__cell--align-left": d,
                            "mdc-layout-grid__cell--align-right-phone": f,
                            "mdc-layout-grid__cell--align-right-tablet": p,
                            "mdc-layout-grid__cell--align-right-desktop": m
                        }, o()(r, "mdc-layout-grid__cell--span-".concat(k), 12 >= k && k > 0), o()(r, "mdc-layout-grid__cell--span-".concat(E, "-desktop"), 12 >= E && E > 0), o()(r, "mdc-layout-grid__cell--start-".concat(A, "-desktop"), 12 >= A && A > 0), o()(r, "mdc-layout-grid__cell--order-".concat(R, "-desktop"), 12 >= R && R > 0), o()(r, "mdc-layout-grid__cell--span-".concat(_, "-tablet"), 8 >= _ && _ > 0), o()(r, "mdc-layout-grid__cell--start-".concat(O, "-tablet"), 8 >= O && O > 0), o()(r, "mdc-layout-grid__cell--order-".concat(y, "-tablet"), 8 >= y && y > 0), o()(r, "mdc-layout-grid__cell--span-".concat(b, "-phone"), 4 >= b && b > 0), o()(r, "mdc-layout-grid__cell--start-".concat(v, "-phone"), 4 >= v && v > 0), o()(r, "mdc-layout-grid__cell--order-".concat(h, "-phone"), 4 >= h && h > 0), r))
                    }), j)
                }
                Cell.propTypes = {
                    smSize: u.a.number,
                    smStart: u.a.number,
                    smOrder: u.a.number,
                    mdSize: u.a.number,
                    mdStart: u.a.number,
                    mdOrder: u.a.number,
                    lgSize: u.a.number,
                    lgStart: u.a.number,
                    lgOrder: u.a.number,
                    size: u.a.number,
                    alignTop: u.a.bool,
                    alignMiddle: u.a.bool,
                    alignBottom: u.a.bool,
                    alignRight: u.a.bool,
                    alignLeft: u.a.bool,
                    smAlignRight: u.a.bool,
                    mdAlignRight: u.a.bool,
                    lgAlignRight: u.a.bool,
                    className: u.a.string,
                    children: u.a.node
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
                    a = r.n(n),
                    i = r(17),
                    o = r.n(i),
                    c = r(0),
                    s = r.n(c),
                    l = r(8),
                    u = r.n(l);

                function Row(t) {
                    var r = t.className,
                        n = t.children,
                        i = o()(t, ["className", "children"]);
                    return e.createElement("div", a()({
                        className: u()("mdc-layout-grid__inner", r)
                    }, i), n)
                }
                Row.propTypes = {
                    className: s.a.string,
                    children: s.a.node
                }, Row.defaultProps = {
                    className: ""
                }
            }).call(this, r(3))
        },
        107: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(16),
                    a = r.n(n),
                    i = r(17),
                    o = r.n(i),
                    c = r(0),
                    s = r.n(c),
                    l = r(8),
                    u = r.n(l),
                    d = r(2),
                    g = Object(d.forwardRef)((function(t, r) {
                        var n = t.alignLeft,
                            i = t.fill,
                            c = t.className,
                            s = t.children,
                            l = o()(t, ["alignLeft", "fill", "className", "children"]);
                        return e.createElement("div", a()({
                            className: u()("mdc-layout-grid", c, {
                                "mdc-layout-grid--align-left": n,
                                "mdc-layout-grid--fill": i
                            })
                        }, l, {
                            ref: r
                        }), s)
                    }));
                g.propTypes = {
                    alignLeft: s.a.bool,
                    fill: s.a.bool,
                    className: s.a.string,
                    children: s.a.node
                }, g.defaultProps = {
                    className: ""
                }, t.a = g
            }).call(this, r(3))
        },
        108: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return a
                })), r.d(t, "b", (function() {
                    return i
                }));
                var n = r(48);

                function a(t, r) {
                    var n = document.querySelector(t);
                    if (!n) return 0;
                    var a = n.getBoundingClientRect().top,
                        o = i(r),
                        c = "#googlesitekit-pagespeed-header" === t ? 80 : 0;
                    return a + e.scrollY - o - c
                }

                function i(e) {
                    var t = 0,
                        r = document.querySelector(".googlesitekit-header");
                    r && (t = e !== n.b ? r.getBoundingClientRect().bottom : r.offsetHeight);
                    var a = document.querySelectorAll(".googlesitekit-navigation, .googlesitekit-entity-header");
                    return t += Array.from(a).reduce((function(e, t) {
                        return e + t.offsetHeight
                    }), 0)
                }
            }).call(this, r(18))
        },
        1088: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(4),
                a = r.n(n),
                i = r(136),
                o = r.n(i),
                c = r(301),
                s = r.n(c),
                l = r(1),
                u = r(115),
                d = r(694),
                g = r(608),
                f = r(2);

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var m = f.createElement("defs", null, f.createElement("radialGradient", {
                    id: "pagespeed-insights_svg__b",
                    cx: 1360.51,
                    cy: 10958.05,
                    r: 458.83,
                    gradientTransform: "matrix(.5 0 0 .5 -675.69 -5476.24)",
                    gradientUnits: "userSpaceOnUse"
                }, f.createElement("stop", {
                    offset: 0,
                    stopColor: "#fff",
                    stopOpacity: .1
                }), f.createElement("stop", {
                    offset: 1,
                    stopColor: "#fff",
                    stopOpacity: 0
                })), f.createElement("linearGradient", {
                    id: "pagespeed-insights_svg__a",
                    x1: 1572.36,
                    y1: 11164.11,
                    x2: 1691.74,
                    y2: 11283.49,
                    gradientTransform: "matrix(.5 0 0 .5 -675.69 -5476.24)",
                    gradientUnits: "userSpaceOnUse"
                }, f.createElement("stop", {
                    offset: 0,
                    stopColor: "#212121",
                    stopOpacity: .2
                }), f.createElement("stop", {
                    offset: 1,
                    stopColor: "#212121",
                    stopOpacity: 0
                }))),
                b = f.createElement("path", {
                    d: "M183.93 25.08v121.19a12.53 12.53 0 01-12.54 12.54H12.58A12.53 12.53 0 010 146.27V25.08z",
                    fill: "#e1e1e1"
                }),
                v = f.createElement("path", {
                    d: "M12.58 0h158.81a12.53 12.53 0 0112.54 12.54v12.54H0V12.54A12.53 12.53 0 0112.58 0z",
                    fill: "#c2c2c2"
                }),
                h = f.createElement("path", {
                    d: "M171.39 0H12.58A12.57 12.57 0 000 12.54v1A12.58 12.58 0 0112.58 1h158.81a12.59 12.59 0 0112.54 12.54v-1A12.58 12.58 0 00171.39 0z",
                    fillOpacity: .2,
                    fill: "#fff"
                }),
                _ = f.createElement("path", {
                    fill: "#212121",
                    fillOpacity: .1,
                    d: "M0 25.08h183.93v1H0z"
                }),
                O = f.createElement("path", {
                    d: "M91.91 62.69a66.76 66.76 0 00-66.76 66.86c0 1.4-.09 3.14 0 4.18h29.13a36.26 36.26 0 010-4.18 37.64 37.64 0 0157.36-32l21-21a66.62 66.62 0 00-40.73-13.86z",
                    fill: "#4285f4"
                }),
                y = f.createElement("path", {
                    d: "M132.64 76.52l-21 21a37.59 37.59 0 0117.9 32 36.26 36.26 0 010 4.18h29.27c.08-1 0-2.78 0-4.18a66.73 66.73 0 00-26.17-53z",
                    fill: "#f44336"
                }),
                E = f.createElement("circle", {
                    fill: "#eee",
                    cx: 16.76,
                    cy: 12.54,
                    r: 4.18
                }),
                A = f.createElement("circle", {
                    fill: "#eee",
                    cx: 33.48,
                    cy: 12.54,
                    r: 4.18
                }),
                R = f.createElement("path", {
                    fill: "#212121",
                    fillOpacity: .1,
                    d: "M171.41 157.76H12.54A12.57 12.57 0 010 145.23v1a12.57 12.57 0 0012.54 12.54h158.87a12.58 12.58 0 0012.59-12.5v-1a12.58 12.58 0 01-12.54 12.53z"
                }),
                k = f.createElement("path", {
                    d: "M132.86 79.06a2.06 2.06 0 00.39-1.22 2.1 2.1 0 00-2.09-2.09 2 2 0 00-1.28.46l-45.57 35.07a12.53 12.53 0 1018.37 16.41l30.17-48.65z",
                    fill: "#9e9e9e"
                }),
                j = f.createElement("path", {
                    d: "M132.82 76.58a2 2 0 01.43 1.26 2.06 2.06 0 01-.39 1.22l-30.17 48.65a12.53 12.53 0 01-18.84 3.05l28.08 28.07h59.47a12.53 12.53 0 0012.54-12.54v-18.61z",
                    fill: "url(#pagespeed-insights_svg__a)"
                }),
                S = f.createElement("path", {
                    d: "M183.93 12.54A12.53 12.53 0 00171.39 0H12.58A12.53 12.53 0 000 12.54v133.73a12.53 12.53 0 0012.54 12.54h158.85a12.53 12.53 0 0012.54-12.54z",
                    fill: "url(#pagespeed-insights_svg__b)"
                });
            var w = function SvgPagespeedInsights(e) {
                    return f.createElement("svg", p({
                        viewBox: "0 0 183.95 158.81"
                    }, e), m, b, v, h, _, O, y, E, A, R, k, f.createElement("path", {
                        d: "M84.31 112.33l45.57-35.09a2.06 2.06 0 011.28-.46 2.09 2.09 0 012 1.55 2 2 0 00-2-2.59 2 2 0 00-1.28.46l-45.57 35.07a12.5 12.5 0 00-4.87 9.92v.56a12.49 12.49 0 014.87-9.42z",
                        style: {
                            isolation: "isolate"
                        },
                        opacity: .2,
                        fill: "#fff"
                    }), f.createElement("path", {
                        d: "M132.86 79.06l-30.17 48.65a12.51 12.51 0 01-23.21-5.93v.48a12.52 12.52 0 0023.24 6.5l30.14-48.66a2 2 0 00.39-1.22 1.91 1.91 0 00-.08-.54 2.31 2.31 0 01-.31.72z",
                        style: {
                            isolation: "isolate"
                        },
                        opacity: .2,
                        fill: "#212121"
                    }), j, S)
                },
                D = r(102),
                N = r(30),
                P = r(5),
                I = r.n(P),
                T = r(6),
                L = r.n(T),
                C = r(9),
                M = r.n(C),
                x = r(109),
                H = r(33),
                F = r.n(H),
                U = r(45);

            function B(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function z(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(r), !0).forEach((function(t) {
                        L()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var q, V = a.a.combineStores,
                Y = a.a.createRegistrySelector,
                W = Object(U.a)({
                    baseName: "getReport",
                    controlCallback: function(e) {
                        var t = e.strategy,
                            r = e.url;
                        return F.a.get("modules", "pagespeed-insights", "pagespeed", {
                            strategy: t,
                            url: r
                        })
                    },
                    reducerCallback: function(e, t, r) {
                        var n = r.strategy,
                            a = r.url;
                        return z(z({}, e), {}, {
                            reports: z(z({}, e.reports), {}, L()({}, "".concat(n, "::").concat(a), z({}, t)))
                        })
                    },
                    argsToParams: function(e, t) {
                        return {
                            strategy: t,
                            url: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.strategy,
                            r = e.url;
                        M()(Object(x.a)(r), "a valid url is required to fetch a report."), M()("string" == typeof t, "a valid strategy is required to fetch a report.")
                    }
                }),
                G = {
                    getReport: I.a.mark((function e(t, r) {
                        return I.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t && r) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, W.actions.fetchGetReport(t, r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                K = {
                    getReport: function(e, t, r) {
                        return e.reports["".concat(r, "::").concat(t)]
                    },
                    getAudits: Y((function(e) {
                        return function(t, r, n) {
                            var a = e(D.c).getReport(r, n);
                            if (void 0 !== a) {
                                var i = ((a || {}).lighthouseResult || {}).audits;
                                return i || {}
                            }
                        }
                    })),
                    getAuditsWithStackPack: Y((function(e) {
                        return function(t, r, n, a) {
                            var i = e(D.c).getAudits(r, n);
                            if (!i) return {};
                            var o = {};
                            return Object.keys(i).forEach((function(t) {
                                e(D.c).getStackPackDescription(r, n, t, a) && (o[t] = i[t])
                            })), o
                        }
                    })),
                    getStackPackDescription: Y((function(e) {
                        return function(t, r, n, a, i) {
                            var o = e(D.c).getReport(r, n);
                            if (void 0 !== o) {
                                var c = ((o || {}).lighthouseResult || []).stackPacks;
                                if (!Array.isArray(c)) return null;
                                var s = c.find((function(e) {
                                    var t = e.id,
                                        r = e.descriptions;
                                    return t === i && !!r[a]
                                }));
                                return s ? {
                                    id: s.id,
                                    icon: s.iconDataURL,
                                    title: s.title,
                                    description: s.descriptions[a]
                                } : null
                            }
                        }
                    }))
                },
                $ = V(W, {
                    initialState: {
                        reports: {}
                    },
                    resolvers: G,
                    selectors: K
                }),
                J = ($.initialState, $.actions, $.controls, $.reducer, $.resolvers, $.selectors, $),
                Z = r(287),
                X = {
                    selectors: {
                        getServiceURL: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t.path,
                                n = t.query,
                                a = "https://pagespeed.web.dev";
                            if (r) {
                                var i = r.match(/^\//) ? r : "/".concat(r);
                                return Object(Z.a)("".concat(a).concat(i), n)
                            }
                            return Object(Z.a)(a, n)
                        }
                    }
                },
                Q = o.a.createModuleStore("pagespeed-insights", {
                    storeName: D.c,
                    requiresSetup: !1,
                    settingSlugs: ["ownerID"]
                }),
                ee = a.a.combineStores(Q, J, X);
            a.a.registerStore(D.c, ee), o.a.registerModule("pagespeed-insights", {
                storeName: D.c,
                SettingsViewComponent: d.a,
                Icon: w,
                features: [Object(l.__)("Website performance reports for mobile and desktop", "google-site-kit")]
            }), q = s.a, Object(N.b)("unifiedDashboard") || q.registerWidget("pagespeedInsightsWebVitals", {
                Component: g.a,
                width: q.WIDGET_WIDTHS.FULL,
                wrapWidget: !1
            }, [u.AREA_DASHBOARD_SPEED, u.AREA_PAGE_DASHBOARD_SPEED]), Object(N.b)("unifiedDashboard") && q.registerWidget("pagespeedInsightsWebVitals", {
                Component: g.a,
                width: q.WIDGET_WIDTHS.FULL,
                wrapWidget: !1
            }, [u.AREA_MAIN_DASHBOARD_SPEED_PRIMARY, u.AREA_ENTITY_DASHBOARD_SPEED_PRIMARY])
        },
        11: function(e, t, r) {
            "use strict";
            r.d(t, "w", (function() {
                return c.b
            })), r.d(t, "t", (function() {
                return s.a
            })), r.d(t, "x", (function() {
                return s.b
            })), r.d(t, "v", (function() {
                return f
            })), r.d(t, "c", (function() {
                return p.b
            })), r.d(t, "k", (function() {
                return p.c
            })), r.d(t, "r", (function() {
                return m.c
            })), r.d(t, "s", (function() {
                return m.d
            })), r.d(t, "o", (function() {
                return m.b
            })), r.d(t, "j", (function() {
                return m.a
            })), r.d(t, "e", (function() {
                return b.a
            })), r.d(t, "p", (function() {
                return O
            })), r.d(t, "d", (function() {
                return y
            })), r.d(t, "g", (function() {
                return E.c
            })), r.d(t, "u", (function() {
                return E.i
            })), r.d(t, "h", (function() {
                return A.b
            })), r.d(t, "n", (function() {
                return A.c
            })), r.d(t, "b", (function() {
                return A.a
            })), r.d(t, "m", (function() {
                return R.b
            })), r.d(t, "i", (function() {
                return R.a
            })), r.d(t, "q", (function() {
                return R.d
            })), r.d(t, "l", (function() {
                return k
            })), r.d(t, "a", (function() {
                return j
            })), r.d(t, "y", (function() {
                return S
            })), r.d(t, "f", (function() {
                return w
            }));
            var n = r(117),
                a = r.n(n),
                i = r(113),
                o = r.n(i),
                c = r(31),
                s = r(63),
                l = r(29),
                u = r.n(l),
                d = r(78),
                g = r.n(d),
                f = function(e) {
                    return g()(JSON.stringify(function e(t) {
                        var r = {};
                        return Object.keys(t).sort().forEach((function(n) {
                            var a = t[n];
                            a && "object" === u()(a) && !Array.isArray(a) && (a = e(a)), r[n] = a
                        })), r
                    }(e)))
                };
            var p = r(80),
                m = (r(84), r(72)),
                b = r(64);

            function v(e) {
                return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function h(e) {
                return "<p>".concat(e.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function _(e) {
                return e.replace(/\n/gi, "<br>")
            }

            function O(e) {
                for (var t = e, r = 0, n = [v, h, _]; r < n.length; r++) {
                    t = (0, n[r])(t)
                }
                return t
            }
            var y = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                E = r(59),
                A = r(85),
                R = r(50),
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
                j = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var r = (t - e) / e;
                    return isNaN(r) || !a()(r) ? null : r
                },
                S = function(e) {
                    try {
                        return JSON.parse(e) && !!e
                    } catch (e) {
                        return !1
                    }
                },
                w = function(e) {
                    if (!e) return "";
                    var t = e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(t)
                    })).replace(/(\\)/g, "");
                    return o()(t)
                }
        },
        115: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "AREA_DASHBOARD_ALL_TRAFFIC", (function() {
                return n
            })), r.d(t, "AREA_DASHBOARD_SEARCH_FUNNEL", (function() {
                return a
            })), r.d(t, "AREA_DASHBOARD_ACQUISITION", (function() {
                return i
            })), r.d(t, "AREA_DASHBOARD_SPEED", (function() {
                return o
            })), r.d(t, "AREA_DASHBOARD_EARNINGS", (function() {
                return c
            })), r.d(t, "AREA_PAGE_DASHBOARD_SEARCH_FUNNEL", (function() {
                return s
            })), r.d(t, "AREA_PAGE_DASHBOARD_ALL_TRAFFIC", (function() {
                return l
            })), r.d(t, "AREA_PAGE_DASHBOARD_ACQUISITION", (function() {
                return u
            })), r.d(t, "AREA_PAGE_DASHBOARD_SPEED", (function() {
                return d
            })), r.d(t, "AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY", (function() {
                return g
            })), r.d(t, "AREA_MAIN_DASHBOARD_CONTENT_PRIMARY", (function() {
                return f
            })), r.d(t, "AREA_MAIN_DASHBOARD_SPEED_PRIMARY", (function() {
                return p
            })), r.d(t, "AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY", (function() {
                return m
            })), r.d(t, "AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY", (function() {
                return b
            })), r.d(t, "AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY", (function() {
                return v
            })), r.d(t, "AREA_ENTITY_DASHBOARD_SPEED_PRIMARY", (function() {
                return h
            })), r.d(t, "AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY", (function() {
                return _
            }));
            var n = "dashboardAllTraffic",
                a = "dashboardSearchFunnel",
                i = "dashboardAcquisition",
                o = "dashboardSpeed",
                c = "dashboardEarnings",
                s = "pageDashboardSearchFunnel",
                l = "pageDashboardAllTraffic",
                u = "pageDashboardAcquisition",
                d = "pageDashboardSpeed",
                g = "mainDashboardTrafficPrimary",
                f = "mainDashboardContentPrimary",
                p = "mainDashboardSpeedPrimary",
                m = "mainDashboardMonetizationPrimary",
                b = "entityDashboardTrafficPrimary",
                v = "entityDashboardContentPrimary",
                h = "entityDashboardSpeedPrimary",
                _ = "entityDashboardMonetizationPrimary";
            t.default = {
                AREA_DASHBOARD_ALL_TRAFFIC: n,
                AREA_DASHBOARD_SEARCH_FUNNEL: a,
                AREA_DASHBOARD_ACQUISITION: i,
                AREA_DASHBOARD_SPEED: o,
                AREA_DASHBOARD_EARNINGS: c,
                AREA_PAGE_DASHBOARD_SEARCH_FUNNEL: s,
                AREA_PAGE_DASHBOARD_ALL_TRAFFIC: l,
                AREA_PAGE_DASHBOARD_ACQUISITION: u,
                AREA_PAGE_DASHBOARD_SPEED: d,
                AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY: g,
                AREA_MAIN_DASHBOARD_CONTENT_PRIMARY: f,
                AREA_MAIN_DASHBOARD_SPEED_PRIMARY: p,
                AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY: m,
                AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY: b,
                AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY: v,
                AREA_ENTITY_DASHBOARD_SPEED_PRIMARY: h,
                AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY: _
            }
        },
        136: function(e, t) {
            e.exports = googlesitekit.modules
        },
        137: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return s
                }));
                var n = r(4),
                    a = r.n(n),
                    i = r(22),
                    o = r(76),
                    c = a.a.useSelect;

                function s(t) {
                    var r = t.moduleName,
                        n = t.FallbackComponent,
                        a = t.IncompleteComponent;
                    return function(t) {
                        var s = function WhenActiveComponent(o) {
                            var s = c((function(e) {
                                return e(i.a).getModule(r)
                            }), [r]);
                            if (!s) return null;
                            var l = n || o.WidgetNull || null;
                            if (!1 === s.active) return l && e.createElement(l, o);
                            if (!1 === s.connected) {
                                var u = a || l;
                                return u && e.createElement(u, o)
                            }
                            return e.createElement(t, o)
                        };
                        return s.displayName = "When".concat(Object(o.c)(r), "Active"), (t.displayName || t.name) && (s.displayName += "(".concat(t.displayName || t.name, ")")), s
                    }
                }
            }).call(this, r(3))
        },
        15: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            })), r.d(t, "b", (function() {
                return i
            }));
            var n = "core/site",
                a = "primary",
                i = "secondary"
        },
        20: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            }));
            var n = r(2),
                a = Object(n.createContext)(""),
                i = (a.Consumer, a.Provider);
            t.b = a
        },
        21: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(16),
                    a = r.n(n),
                    i = r(17),
                    o = r.n(i),
                    c = r(0),
                    s = r.n(c),
                    l = r(8),
                    u = r.n(l),
                    d = r(127),
                    g = r(1),
                    f = r(2),
                    p = Object(f.forwardRef)((function(t, r) {
                        var n, i = t["aria-label"],
                            c = t.arrow,
                            s = t.back,
                            l = t.caps,
                            f = t.children,
                            p = t.className,
                            m = t.danger,
                            b = t.disabled,
                            v = t.external,
                            h = t.hideExternalIndicator,
                            _ = t.href,
                            O = t.inherit,
                            y = t.inverse,
                            E = t.onClick,
                            A = t.small,
                            R = t.to,
                            k = o()(t, ["aria-label", "arrow", "back", "caps", "children", "className", "danger", "disabled", "external", "hideExternalIndicator", "href", "inherit", "inverse", "onClick", "small", "to"]),
                            j = _ || R || !E ? R ? "ROUTER_LINK" : v ? "EXTERNAL_LINK" : "LINK" : b ? "BUTTON_DISABLED" : "BUTTON",
                            S = "BUTTON" === j || "BUTTON_DISABLED" === j ? "button" : "ROUTER_LINK" === j ? d.b : "a",
                            w = ("EXTERNAL_LINK" === j && (n = Object(g._x)("(opens in a new tab)", "screen reader text", "google-site-kit")), "BUTTON_DISABLED" === j && (n = Object(g._x)("(disabled)", "screen reader text", "google-site-kit")), n ? i ? "".concat(i, " ").concat(n) : "string" == typeof f ? "".concat(f, " ").concat(n) : void 0 : i);
                        return e.createElement(S, a()({
                            "aria-label": w,
                            className: u()("googlesitekit-cta-link", p, {
                                "googlesitekit-cta-link--arrow": c,
                                "googlesitekit-cta-link--external": v && !h,
                                "googlesitekit-cta-link--inverse": y,
                                "googlesitekit-cta-link--back": s,
                                "googlesitekit-cta-link--small": A,
                                "googlesitekit-cta-link--inherit": O,
                                "googlesitekit-cta-link--caps": l,
                                "googlesitekit-cta-link--danger": m,
                                "googlesitekit-cta-link--disabled": b
                            }),
                            disabled: b,
                            href: "LINK" === j || "EXTERNAL_LINK" === j ? _ : void 0,
                            onClick: E,
                            rel: "EXTERNAL_LINK" === j ? "noopener noreferrer" : void 0,
                            ref: r,
                            target: "EXTERNAL_LINK" === j ? "_blank" : void 0,
                            to: R
                        }, k), f)
                    }));
                p.propTypes = {
                    arrow: s.a.bool,
                    back: s.a.bool,
                    caps: s.a.bool,
                    children: s.a.node,
                    className: s.a.string,
                    danger: s.a.bool,
                    disabled: s.a.bool,
                    external: s.a.bool,
                    hideExternalIndicator: s.a.bool,
                    href: s.a.string,
                    inherit: s.a.bool,
                    inverse: s.a.bool,
                    onClick: s.a.func,
                    small: s.a.bool,
                    to: s.a.string
                }, p.defaultProps = {
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
                }, t.a = p
            }).call(this, r(3))
        },
        22: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return a
            }));
            var n = "core/modules",
                a = "insufficient_module_dependencies"
        },
        28: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return a
            }));
            var n = "_googlesitekitDataLayer",
                a = "data-googlesitekit-gtag"
        },
        30: function(e, t, r) {
            "use strict";
            (function(e) {
                var n, a;
                r.d(t, "a", (function() {
                    return i
                })), r.d(t, "b", (function() {
                    return o
                }));
                var i = new Set((null === (n = e) || void 0 === n || null === (a = n._googlesitekitBaseData) || void 0 === a ? void 0 : a.enabledFeatures) || []),
                    o = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
                        return t instanceof Set && t.has(e)
                    }
            }).call(this, r(18))
        },
        301: function(e, t) {
            e.exports = googlesitekit.widgets
        },
        31: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return m
                })), r.d(t, "b", (function() {
                    return p
                }));
                var n = r(86),
                    a = e._googlesitekitBaseData || {},
                    i = a.activeModules,
                    o = void 0 === i ? [] : i,
                    c = a.isSiteKitScreen,
                    s = a.trackingEnabled,
                    l = {
                        activeModules: o,
                        trackingEnabled: s,
                        trackingID: a.trackingID,
                        referenceSiteURL: a.referenceSiteURL,
                        userIDHash: a.userIDHash,
                        isSiteKitScreen: c
                    },
                    u = Object(n.a)(l),
                    d = u.enableTracking,
                    g = u.disableTracking,
                    f = (u.isTrackingEnabled, u.initializeSnippet),
                    p = u.trackEvent;

                function m(e) {
                    e ? d() : g()
                }
                c && s && f()
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
        384: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ReportMetric
                }));
                var n = r(0),
                    a = r.n(n),
                    i = r(8),
                    o = r.n(i),
                    c = r(1),
                    s = r(385);

                function ReportMetric(t) {
                    var r = t.title,
                        n = t.description,
                        a = t.displayValue,
                        i = t.category,
                        l = t.isLast;
                    return i = i.toLowerCase(), e.createElement("tr", {
                        className: o()("googlesitekit-pagespeed-report__row", "googlesitekit-pagespeed-report-metric", {
                            "googlesitekit-pagespeed-report__row--last": l
                        })
                    }, e.createElement("td", null, e.createElement("div", {
                        className: "googlesitekit-pagespeed-report-metric__title"
                    }, r), e.createElement("div", {
                        className: "googlesitekit-pagespeed-report-metric__description"
                    }, n)), e.createElement("td", {
                        className: "googlesitekit-pagespeed-report-metric-value googlesitekit-pagespeed-report-metric--".concat(i)
                    }, e.createElement("div", {
                        className: "googlesitekit-pagespeed-report-metric-value-container"
                    }, e.createElement("div", {
                        className: "googlesitekit-pagespeed-report-metric-value__display-value"
                    }, a), e.createElement("div", {
                        className: "googlesitekit-pagespeed-report-metric-value__rating"
                    }, i === s.b && e.createElement("span", null, Object(c._x)("Good", "Performance rating", "google-site-kit")), i === s.a && e.createElement("span", null, Object(c._x)("Needs improvement", "Performance rating", "google-site-kit")), i === s.c && e.createElement("span", null, Object(c._x)("Poor", "Performance rating", "google-site-kit"))))))
                }
                ReportMetric.propTypes = {
                    title: a.a.string.isRequired,
                    description: a.a.string.isRequired,
                    displayValue: a.a.string.isRequired,
                    category: a.a.string.isRequired,
                    isLast: a.a.bool
                }
            }).call(this, r(3))
        },
        385: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            })), r.d(t, "c", (function() {
                return i
            }));
            var n = "fast",
                a = "average",
                i = "slow"
        },
        39: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r(2),
                a = r(94),
                i = r(30),
                o = function(e) {
                    var t = Object(n.useContext)(a.a);
                    return Object(i.b)(e, t)
                }
        },
        4: function(e, t) {
            e.exports = googlesitekit.data
        },
        42: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return a
            }));
            var n = r(35),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = "string" == typeof e;
                    if (!t) return !1;
                    var r = e.split("-");
                    return 3 === r.length && Object(n.a)(new Date(e))
                }
        },
        43: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            }));
            var n = "core/ui",
                a = "activeContextID"
        },
        45: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return y
            }));
            var n = r(5),
                a = r.n(n),
                i = r(6),
                o = r.n(i),
                c = r(9),
                s = r.n(c),
                l = r(57),
                u = r.n(l),
                d = r(54),
                g = r(76),
                f = r(11);

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

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        o()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var b = function(e) {
                    return e
                },
                v = function() {
                    return {}
                },
                h = function() {},
                _ = d.a.clearError,
                O = d.a.receiveError,
                y = function(e) {
                    var t, r, n = a.a.mark(C),
                        i = e.baseName,
                        c = e.controlCallback,
                        l = e.reducerCallback,
                        d = void 0 === l ? b : l,
                        p = e.argsToParams,
                        y = void 0 === p ? v : p,
                        E = e.validateParams,
                        A = void 0 === E ? h : E;
                    s()(i, "baseName is required."), s()("function" == typeof c, "controlCallback is required and must be a function."), s()("function" == typeof d, "reducerCallback must be a function."), s()("function" == typeof y, "argsToParams must be a function."), s()("function" == typeof A, "validateParams must be a function.");
                    try {
                        A(y()), r = !1
                    } catch (e) {
                        r = !0
                    }
                    var R = Object(g.b)(i),
                        k = Object(g.a)(i),
                        j = "FETCH_".concat(k),
                        S = "START_".concat(j),
                        w = "FINISH_".concat(j),
                        D = "CATCH_".concat(j),
                        N = "RECEIVE_".concat(k),
                        P = "fetch".concat(R),
                        I = "receive".concat(R),
                        T = "isFetching".concat(R),
                        L = o()({}, T, {});

                    function C(e, t) {
                        var r, o;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, {
                                        payload: {
                                            params: e
                                        },
                                        type: S
                                    };
                                case 2:
                                    return n.next = 4, _(i, t);
                                case 4:
                                    return n.prev = 4, n.next = 7, {
                                        payload: {
                                            params: e
                                        },
                                        type: j
                                    };
                                case 7:
                                    return r = n.sent, n.next = 10, M[I](r, e);
                                case 10:
                                    return n.next = 12, {
                                        payload: {
                                            params: e
                                        },
                                        type: w
                                    };
                                case 12:
                                    n.next = 23;
                                    break;
                                case 14:
                                    return n.prev = 14, n.t0 = n.catch(4), o = n.t0, n.next = 19, O(o, i, t);
                                case 19:
                                    return n.next = 21, O(o);
                                case 21:
                                    return n.next = 23, {
                                        payload: {
                                            params: e
                                        },
                                        type: D
                                    };
                                case 23:
                                    return n.abrupt("return", {
                                        response: r,
                                        error: o
                                    });
                                case 24:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [4, 14]
                        ])
                    }
                    var M = (t = {}, o()(t, P, (function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            var n = y.apply(void 0, t);
                            return A(n), C(n, t)
                        })), o()(t, I, (function(e, t) {
                            return s()(void 0 !== e, "response is required."), r ? (s()(u()(t), "params is required."), A(t)) : t = {}, {
                                payload: {
                                    response: e,
                                    params: t
                                },
                                type: N
                            }
                        })), t),
                        x = o()({}, j, (function(e) {
                            var t = e.payload;
                            return c(t.params)
                        })),
                        H = o()({}, T, (function(e) {
                            if (void 0 === e[T]) return !1;
                            var t;
                            try {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                                t = y.apply(void 0, n), A(t)
                            } catch (e) {
                                return !1
                            }
                            return !!e[T][Object(f.v)(t)]
                        }));
                    return {
                        initialState: L,
                        actions: M,
                        controls: x,
                        reducer: function(e, t) {
                            var r = t.type,
                                n = t.payload;
                            switch (r) {
                                case S:
                                    var a = n.params;
                                    return m(m({}, e), {}, o()({}, T, m(m({}, e[T]), {}, o()({}, Object(f.v)(a), !0))));
                                case N:
                                    var i = n.response,
                                        c = n.params;
                                    return d(e, i, c);
                                case w:
                                    var s = n.params;
                                    return m(m({}, e), {}, o()({}, T, m(m({}, e[T]), {}, o()({}, Object(f.v)(s), !1))));
                                case D:
                                    var l = n.params;
                                    return m(m({}, e), {}, o()({}, T, m(m({}, e[T]), {}, o()({}, Object(f.v)(l), !1))));
                                default:
                                    return e
                            }
                        },
                        resolvers: {},
                        selectors: H
                    }
                }
        },
        48: function(e, t, r) {
            "use strict";
            r.d(t, "d", (function() {
                return a
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "c", (function() {
                return o
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "e", (function() {
                return s
            }));
            var n = r(125),
                a = "xlarge",
                i = "desktop",
                o = "tablet",
                c = "small";

            function s() {
                var e = Object(n.a)();
                return e > 1280 ? a : e > 960 ? i : e > 600 ? o : c
            }
        },
        50: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return a
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "d", (function() {
                return o
            })), r.d(t, "c", (function() {
                return c
            })), r.d(t, "e", (function() {
                return s
            }));
            var n = r(109);

            function a(e) {
                try {
                    return new URL(e).pathname
                } catch (e) {}
                return null
            }

            function i(e, t) {
                try {
                    return new URL(t, e).href
                } catch (e) {}
                return ("string" == typeof e ? e : "") + ("string" == typeof t ? t : "")
            }

            function o(e) {
                return "string" != typeof e ? e : e.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "")
            }

            function c(e) {
                return /^#\w[A-Za-z0-9-_]*$/.test(e)
            }

            function s(e, t) {
                if (!Object(n.a)(e)) return e;
                if (e.length <= t) return e;
                var r = new URL(e),
                    a = e.replace(r.origin, "");
                if (a.length < t) return a;
                var i = a.length - Math.floor(t) + 1;
                return "…" + a.substr(i)
            }
        },
        51: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return a
            }));
            var n = r(28);

            function a(e) {
                return function() {
                    e[n.a] = e[n.a] || [], e[n.a].push(arguments)
                }
            }
        },
        54: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return m
            })), r.d(t, "b", (function() {
                return b
            }));
            var n = r(6),
                a = r.n(n),
                i = r(29),
                o = r.n(i),
                c = r(9),
                s = r.n(c),
                l = r(78),
                u = r.n(l),
                d = r(11);

            function g(e, t) {
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
                    t % 2 ? g(Object(r), !0).forEach((function(t) {
                        a()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function p(e, t) {
                if (t && Array.isArray(t)) {
                    var r = t.map((function(e) {
                        return "object" === o()(e) ? Object(d.v)(e) : e
                    }));
                    return "".concat(e, "::").concat(u()(JSON.stringify(r)))
                }
                return e
            }
            var m = {
                receiveError: function(e, t, r) {
                    return s()(e, "error is required."), t && s()(r && Array.isArray(r), "args is required (and must be an array) when baseName is specified."), {
                        type: "RECEIVE_ERROR",
                        payload: {
                            error: e,
                            baseName: t,
                            args: r
                        }
                    }
                },
                clearError: function(e, t) {
                    return e && s()(t && Array.isArray(t), "args is required (and must be an array) when baseName is specified."), {
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
                        return s()(r, "selectorName is required."), e.getError(t, r, n)
                    },
                    getErrorForAction: function(t, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return s()(r, "actionName is required."), e.getError(t, r, n)
                    },
                    getError: function(e, t, r) {
                        var n = e.error,
                            a = e.errors;
                        return t || r ? (s()(t, "baseName is required."), a[p(t, r)]) : n
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
                    actions: m,
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "RECEIVE_ERROR":
                                var i = n.baseName,
                                    o = n.args,
                                    c = n.error;
                                return f(f({}, e), {}, i ? {
                                    errors: f(f({}, e.errors || {}), {}, a()({}, p(i, o), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var s = n.baseName,
                                    l = n.args,
                                    u = f({}, e);
                                if (s) {
                                    var d = p(s, l);
                                    u.errors = f({}, e.errors || {}), delete u.errors[d]
                                } else u.error = void 0;
                                return u;
                            case "CLEAR_ERRORS":
                                var g = n.baseName,
                                    m = f({}, e);
                                if (g)
                                    for (var b in m.errors = f({}, e.errors || {}), m.errors)(b === g || b.startsWith("".concat(g, "::"))) && delete m.errors[b];
                                else m.errors = {}, m.error = void 0;
                                return m;
                            default:
                                return e
                        }
                    },
                    resolvers: {},
                    selectors: e
                }
            }
        },
        55: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ProgressBar
                }));
                var n = r(0),
                    a = r.n(n),
                    i = r(8),
                    o = r.n(i);

                function ProgressBar(t) {
                    var r = t.className,
                        n = t.small,
                        a = t.compress,
                        i = t.indeterminate,
                        c = t.height,
                        s = t.progress,
                        l = void 0 !== c ? Math.round(c / 2) : void 0,
                        u = s ? "scaleX(".concat(s, ")") : void 0;
                    return e.createElement("div", {
                        role: "progressbar",
                        style: {
                            marginTop: l,
                            marginBottom: l
                        },
                        className: o()("mdc-linear-progress", r, {
                            "mdc-linear-progress--indeterminate": i,
                            "mdc-linear-progress--small": n,
                            "mdc-linear-progress--compress": a
                        })
                    }, e.createElement("div", {
                        className: "mdc-linear-progress__buffering-dots"
                    }), e.createElement("div", {
                        className: "mdc-linear-progress__buffer"
                    }), e.createElement("div", {
                        className: "mdc-linear-progress__bar mdc-linear-progress__primary-bar",
                        style: {
                            transform: u
                        }
                    }, e.createElement("span", {
                        className: "mdc-linear-progress__bar-inner"
                    })), e.createElement("div", {
                        className: "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"
                    }, e.createElement("span", {
                        className: "mdc-linear-progress__bar-inner"
                    })))
                }
                ProgressBar.propTypes = {
                    className: a.a.string,
                    small: a.a.bool,
                    compress: a.a.bool,
                    indeterminate: a.a.bool,
                    progress: a.a.number,
                    height: a.a.number
                }, ProgressBar.defaultProps = {
                    className: "",
                    small: !1,
                    compress: !1,
                    indeterminate: !0,
                    progress: 0
                }
            }).call(this, r(3))
        },
        553: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return MetricsLearnMoreLink
                }));
                var n = r(1),
                    a = r(21);

                function MetricsLearnMoreLink() {
                    return e.createElement(a.a, {
                        href: "https://web.dev/user-centric-performance-metrics/#how-metrics-are-measured",
                        external: !0,
                        inherit: !0,
                        "aria-label": Object(n.__)("Learn more how metrics are measured.", "google-site-kit")
                    }, Object(n.__)("Learn more", "google-site-kit"))
                }
            }).call(this, r(3))
        },
        569: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return a
            }));
            var n = r(385);

            function a(e) {
                return .9 <= e ? n.b : .5 <= e ? n.a : n.c
            }
        },
        59: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return a
            })), r.d(t, "b", (function() {
                return n
            })), r.d(t, "e", (function() {
                return s
            })), r.d(t, "f", (function() {
                return f
            })), r.d(t, "g", (function() {
                return p
            })), r.d(t, "h", (function() {
                return d.a
            })), r.d(t, "d", (function() {
                return m
            })), r.d(t, "c", (function() {
                return v
            })), r.d(t, "i", (function() {
                return g
            }));
            var n = "Invalid dateString parameter, it must be a string.",
                a = 'Invalid date range, it must be a string with the format "last-x-days".',
                i = r(9),
                o = r.n(i),
                c = r(35),
                s = function(e) {
                    var t = new Date(e);
                    o()(Object(c.a)(t), "Date param must construct to a valid date instance or be a valid date instance itself.");
                    var r = "".concat(t.getMonth() + 1),
                        n = "".concat(t.getDate());
                    return [t.getFullYear(), r.length < 2 ? "0".concat(r) : r, n.length < 2 ? "0".concat(n) : n].join("-")
                },
                l = r(12),
                u = r.n(l),
                d = r(42),
                g = function(e) {
                    o()(Object(d.a)(e), n);
                    var t = e.split("-"),
                        r = u()(t, 3),
                        a = r[0],
                        i = r[1],
                        c = r[2];
                    return new Date(a, i - 1, c)
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = g(e);
                    return r.setDate(r.getDate() - t), s(r)
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e.split("-");
                    return 3 === t.length && "last" === t[0] && !Number.isNaN(t[1]) && !Number.isNaN(parseFloat(t[1])) && "days" === t[2]
                };

            function m(e) {
                var t = e.match(/last-(\d+)-days/);
                if (t && t[1]) return parseInt(t[1], 10);
                throw new Error("Unrecognized date range slug.")
            }
            var b = r(1);

            function v() {
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
        608: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(786),
                    a = r(137);
                t.a = Object(a.a)({
                    moduleName: "pagespeed-insights"
                })((function DashboardPageSpeedWidget(t) {
                    var r = t.Widget;
                    return e.createElement(r, {
                        className: "googlesitekit-pagespeed-widget",
                        noPadding: !0
                    }, e.createElement(n.a, null))
                }))
            }).call(this, r(3))
        },
        62: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    i = r(8),
                    o = r.n(i);

                function ChangeArrow(t) {
                    var r = t.direction,
                        n = t.invertColor,
                        a = t.width,
                        i = t.height;
                    return e.createElement("svg", {
                        className: o()("googlesitekit-change-arrow", "googlesitekit-change-arrow--".concat(r), {
                            "googlesitekit-change-arrow--inverted-color": n
                        }),
                        width: a,
                        height: i,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, e.createElement("path", {
                        d: "M5.625 10L5.625 2.375L9.125 5.875L10 5L5 -1.76555e-07L-2.7055e-07 5L0.875 5.875L4.375 2.375L4.375 10L5.625 10Z",
                        fill: "currentColor"
                    }))
                }
                ChangeArrow.propTypes = {
                    direction: a.a.string,
                    invertColor: a.a.bool,
                    width: a.a.number,
                    height: a.a.number
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
                return o
            })), r.d(t, "b", (function() {
                return c
            }));
            var n = r(29),
                a = r.n(n),
                i = r(69),
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        __html: i.a.sanitize(e, t)
                    }
                };

            function c(e) {
                var t, r = "object" === a()(e) ? e.toString() : e;
                return null == r || null === (t = r.replace) || void 0 === t ? void 0 : t.call(r, /\/+$/, "")
            }
        },
        64: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return a
            }));
            var n = r(2),
                a = function(e) {
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
                    return a
                }));
                var n = r(118),
                    a = r.n(n)()(e)
            }).call(this, r(18))
        },
        694: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return SettingsView
                }));
                var n = r(1),
                    a = r(4),
                    i = r.n(a),
                    o = r(39),
                    c = r(11),
                    s = r(102),
                    l = i.a.useSelect;

                function SettingsView() {
                    var t = l((function(e) {
                            return e(s.c).getAdminScreenURL()
                        })),
                        r = Object(o.a)("unifiedDashboard"),
                        a = "".concat(t, r ? "#speed" : "#googlesitekit-pagespeed-header"),
                        i = Object(n.sprintf)(
                            /* translators: %s is the URL to the Site Kit dashboard. */
                            Object(n.__)('To view insights, <a href="%s">visit the dashboard</a>', "google-site-kit"), a);
                    return e.createElement("p", {
                        dangerouslySetInnerHTML: Object(c.t)(i, {
                            ALLOWED_TAGS: ["a"],
                            ALLOWED_ATTR: ["href"]
                        })
                    })
                }
            }).call(this, r(3))
        },
        7: function(e, t, r) {
            "use strict";
            var n = r(90),
                a = r.n(n);
            r.d(t, "n", (function() {
                return a.a
            })), r.d(t, "c", (function() {
                return n.HelperText
            })), r.d(t, "d", (function() {
                return n.Input
            }));
            var i = r(195);
            r.d(t, "i", (function() {
                return i.a
            }));
            var o = r(242);
            r.d(t, "f", (function() {
                return o.a
            }));
            var c = r(243);
            r.d(t, "h", (function() {
                return c.a
            }));
            var s = r(110),
                l = r.n(s);
            r.d(t, "m", (function() {
                return l.a
            })), r.d(t, "k", (function() {
                return s.Option
            }));
            var u = r(244);
            r.d(t, "j", (function() {
                return u.a
            }));
            var d = r(241);
            r.d(t, "e", (function() {
                return d.a
            }));
            var g = r(240);
            r.d(t, "g", (function() {
                return g.a
            }));
            var f = r(93);
            r.d(t, "a", (function() {
                return f.a
            })), r.d(t, "b", (function() {
                return f.b
            })), r.d(t, "l", (function() {
                return f.c
            }))
        },
        72: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "c", (function() {
                    return y
                })), r.d(t, "d", (function() {
                    return A
                })), r.d(t, "b", (function() {
                    return R
                })), r.d(t, "a", (function() {
                    return k
                }));
                var n = r(12),
                    a = r.n(n),
                    i = r(29),
                    o = r.n(i),
                    c = r(6),
                    s = r.n(c),
                    l = r(17),
                    u = r.n(l),
                    d = r(26),
                    g = r(67),
                    f = r.n(g),
                    p = r(1);

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

                function b(e) {
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
                var v = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = h(e, t),
                            n = r.formatUnit,
                            a = r.formatDecimal;
                        try {
                            return n()
                        } catch (e) {
                            return a()
                        }
                    },
                    h = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = parseInt(e, 10), Number.isNaN(e) && (e = 0);
                        var r = Math.floor(e / 60 / 60),
                            n = Math.floor(e / 60 % 60),
                            a = Math.floor(e % 60);
                        return {
                            hours: r,
                            minutes: n,
                            seconds: a,
                            formatUnit: function() {
                                var i = t.unitDisplay,
                                    o = b(b({
                                        unitDisplay: void 0 === i ? "short" : i
                                    }, u()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? A(a, b(b({}, o), {}, {
                                    unit: "second"
                                })) : Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), a ? A(a, b(b({}, o), {}, {
                                        unit: "second"
                                    })) : "", n ? A(n, b(b({}, o), {}, {
                                        unit: "minute"
                                    })) : "", r ? A(r, b(b({}, o), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var t = Object(p.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(p.__)("%ds", "google-site-kit"), a);
                                if (0 === e) return t;
                                var i = Object(p.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(p.__)("%dm", "google-site-kit"), n),
                                    o = Object(p.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(p.__)("%dh", "google-site-kit"), r);
                                return Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), a ? t : "", n ? i : "", r ? o : "").trim()
                            }
                        }
                    },
                    _ = function(e) {
                        return 1e6 <= e ? Math.round(e / 1e5) / 10 : 1e4 <= e ? Math.round(e / 1e3) : 1e3 <= e ? Math.round(e / 100) / 10 : e
                    },
                    O = function(e) {
                        var t = {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        };
                        return 1e6 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in millions.
                            Object(p.__)("%sM", "google-site-kit"), A(_(e), e % 10 == 0 ? {} : t)) : 1e4 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), A(_(e))) : 1e3 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), A(_(e), e % 10 == 0 ? {} : t)) : A(e, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    y = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(d.isFinite)(e) ? e : Number(e), Object(d.isFinite)(e) || (console.warn("Invalid number", e, o()(e)), e = 0);
                        var r = {};
                        if ("%" === t) r = {
                            style: "percent",
                            maximumFractionDigits: 2
                        };
                        else {
                            if ("s" === t) return v(e, {
                                unitDisplay: "narrow"
                            });
                            t && "string" == typeof t ? r = {
                                style: "currency",
                                currency: t
                            } : Object(d.isPlainObject)(t) && (r = b({}, t))
                        }
                        var n = r,
                            a = n.style,
                            i = void 0 === a ? "metric" : a;
                        return "metric" === i ? O(e) : "duration" === i ? v(e, t) : A(e, r)
                    },
                    E = f()(console.warn),
                    A = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? k() : r,
                            i = u()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(n, i).format(e)
                        } catch (t) {
                            E("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n), ", ").concat(JSON.stringify(i), " ).format( ").concat(o()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, s = ["signDisplay", "compactDisplay"], l = {}, d = 0, g = Object.entries(i); d < g.length; d++) {
                            var f = a()(g[d], 2),
                                p = f[0],
                                m = f[1];
                            c[p] && m === c[p] || (s.includes(p) || (l[p] = m))
                        }
                        try {
                            return new Intl.NumberFormat(n, l).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(n).format(e)
                        }
                    },
                    R = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? k() : r,
                            a = t.style,
                            i = void 0 === a ? "long" : a,
                            o = t.type,
                            c = void 0 === o ? "conjunction" : o;
                        if (Intl.ListFormat) {
                            var s = new Intl.ListFormat(n, {
                                style: i,
                                type: c
                            });
                            return s.format(e)
                        }
                        /* translators: used between list items, there is a space after the comma. */
                        var l = Object(p.__)(", ", "google-site-kit");
                        return e.join(l)
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
        76: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            })), r.d(t, "c", (function() {
                return i
            }));
            var n = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                a = function(e) {
                    return e.replace(/([a-z0-9]{1})([A-Z]{1})/g, "$1_$2").toUpperCase()
                };

            function i(e) {
                return e.split("-").map((function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                })).join("")
            }
        },
        786: function(e, t, r) {
            "use strict";
            (function(e, n) {
                r.d(t, "a", (function() {
                    return DashboardPageSpeed
                }));
                var a = r(5),
                    i = r.n(a),
                    o = r(14),
                    c = r.n(o),
                    s = r(6),
                    l = r.n(s),
                    u = r(12),
                    d = r.n(u),
                    g = r(8),
                    f = r.n(g),
                    p = r(286),
                    m = r.n(p),
                    b = r(330),
                    v = r.n(b),
                    h = r(344),
                    _ = r(99),
                    O = r(2),
                    y = r(1),
                    E = r(33),
                    A = r.n(E),
                    R = r(4),
                    k = r.n(R),
                    j = r(7),
                    S = r(20),
                    w = r(787),
                    D = r(55),
                    N = r(21),
                    P = r(790),
                    I = r(791),
                    T = r(792),
                    L = r(795),
                    C = r(31),
                    M = r(15),
                    x = r(43),
                    H = r(102),
                    F = r(39),
                    U = r(48),
                    B = r(108),
                    z = r(103),
                    q = k.a.useSelect,
                    V = k.a.useDispatch,
                    Y = k.a.useInViewSelect;

                function DashboardPageSpeed() {
                    var t = Object(O.useRef)(),
                        r = Object(O.useState)(!1),
                        a = d()(r, 2),
                        o = a[0],
                        s = a[1],
                        u = Object(O.useContext)(S.b),
                        g = q((function(e) {
                            return e(M.c).getCurrentReferenceURL()
                        })),
                        p = q((function(e) {
                            return e(x.b).getValue(H.g)
                        })) || H.e,
                        b = q((function(e) {
                            return e(x.b).getValue(H.f)
                        })) || H.b,
                        E = q((function(e) {
                            var t = e(H.c);
                            return {
                                isFetchingMobile: !t.hasFinishedResolution("getReport", [g, H.e]),
                                errorMobile: t.getErrorForSelector("getReport", [g, H.e]),
                                isFetchingDesktop: !t.hasFinishedResolution("getReport", [g, H.d]),
                                errorDesktop: t.getErrorForSelector("getReport", [g, H.d])
                            }
                        })),
                        R = E.isFetchingMobile,
                        k = E.isFetchingDesktop,
                        W = E.errorMobile,
                        G = E.errorDesktop,
                        K = Y((function(e) {
                            return e(H.c).getReport(g, H.e)
                        })),
                        $ = Y((function(e) {
                            return e(H.c).getReport(g, H.d)
                        })),
                        J = V(x.b).setValues,
                        Z = V(H.c).invalidateResolution,
                        X = Object(O.useCallback)((function() {
                            return J(l()({}, H.g, H.e))
                        }), [J]),
                        Q = Object(O.useCallback)((function() {
                            return J(l()({}, H.g, H.d))
                        }), [J]),
                        ee = Object(O.useCallback)((function() {
                            return J(l()({}, H.f, H.a))
                        }), [J]),
                        te = Object(O.useCallback)((function() {
                            return J(l()({}, H.f, H.b))
                        }), [J]),
                        re = Object(h.a)(t, {
                            threshold: .25
                        }),
                        ne = !!(null == re ? void 0 : re.intersectionRatio),
                        ae = p === H.e ? R : k;
                    Object(O.useEffect)((function() {
                        ne && !o && (Object(C.b)("".concat(u, "_pagespeed-widget"), "widget_view"), Object(C.b)("".concat(u, "_pagespeed-widget"), "default_tab_view", b.replace("data_", "")), s(!0))
                    }), [ne, b, u, o]);
                    var ie = Object(O.useCallback)((function(e) {
                            var t;
                            0 === e ? (te(), t = "lab") : (ee(), t = "field"), Object(C.b)("".concat(u, "_pagespeed-widget"), "tab_select", t)
                        }), [ee, te, u]),
                        oe = Object(O.useCallback)((function(e) {
                            e.slug === H.d ? Q() : X()
                        }), [Q, X]),
                        ce = Object(O.useCallback)(function() {
                            var e = c()(i.a.mark((function e(t) {
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.next = 3, A.a.invalidateCache("modules", "pagespeed-insights", "pagespeed");
                                        case 3:
                                            Z("getReport", [g, H.d]), Z("getReport", [g, H.e]);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [Z, g]),
                        se = Object(F.a)("unifiedDashboard"),
                        le = Object(U.e)();
                    Object(_.a)((function() {
                        se || "#googlesitekit-pagespeed-header" !== e.location.hash || setTimeout((function() {
                            e.scrollTo({
                                top: Object(B.a)(e.location.hash, le),
                                behavior: "smooth"
                            })
                        }), 10)
                    }));
                    var ue = p === H.e ? K : $,
                        de = p === H.e ? W : G;
                    return Object(O.useEffect)((function() {
                        var e, t;
                        (null == K || null === (e = K.loadingExperience) || void 0 === e ? void 0 : e.metrics) && (null == $ || null === (t = $.loadingExperience) || void 0 === t ? void 0 : t.metrics) && ee()
                    }), [K, $, ee]), !g || ae && !ue || !b ? n.createElement(j.b, {
                        id: "googlesitekit-pagespeed-header"
                    }, n.createElement(j.l, null, n.createElement(j.a, {
                        size: 12
                    }, n.createElement(D.a, null), n.createElement("p", {
                        className: "googlesitekit-text-align-center"
                    }, Object(y.__)("PageSpeed Insights is preparing data…", "google-site-kit"))))) : n.createElement(O.Fragment, null, n.createElement("header", {
                        id: "googlesitekit-pagespeed-header",
                        className: "googlesitekit-pagespeed-widget__header",
                        ref: t
                    }, n.createElement("div", {
                        className: "googlesitekit-pagespeed-widget__data-src-tabs"
                    }, n.createElement(v.a, {
                        activeIndex: [H.b, H.a].indexOf(b),
                        handleActiveIndexUpdate: ie
                    }, n.createElement(m.a, {
                        focusOnActivate: !1,
                        "aria-labelledby": "googlesitekit-pagespeed-widget__data-src-tab-".concat(H.b)
                    }, n.createElement("span", {
                        id: "googlesitekit-pagespeed-widget__data-src-tab-".concat(H.b),
                        className: "mdc-tab__text-label"
                    }, Object(y.__)("In the Lab", "google-site-kit"))), n.createElement(m.a, {
                        focusOnActivate: !1,
                        "aria-labelledby": "googlesitekit-pagespeed-widget__data-src-tab-".concat(H.a)
                    }, n.createElement("span", {
                        id: "googlesitekit-pagespeed-widget__data-src-tab-".concat(H.a),
                        className: "mdc-tab__text-label"
                    }, Object(y.__)("In the Field", "google-site-kit"))))), n.createElement("div", {
                        className: "googlesitekit-pagespeed-widget__device-size-tab-bar-wrapper"
                    }, n.createElement(w.a, {
                        activeTab: p,
                        handleDeviceSizeUpdate: oe
                    }))), ae && n.createElement("div", {
                        className: "googlesitekit-pagespeed-widget__refreshing-progress-bar-wrapper"
                    }, n.createElement(D.a, {
                        compress: !0
                    })), n.createElement("section", {
                        className: f()({
                            "googlesitekit-pagespeed-widget__refreshing": ae
                        })
                    }, b === H.b && n.createElement(P.a, {
                        data: ue,
                        error: de
                    }), b === H.a && n.createElement(I.a, {
                        data: ue,
                        error: de
                    })), !de && n.createElement(T.a, {
                        className: f()({
                            "googlesitekit-pagespeed-widget__refreshing": ae
                        }),
                        referenceURL: g,
                        strategy: p
                    }), n.createElement("div", {
                        className: f()("googlesitekit-pagespeed-report__footer", {
                            "googlesitekit-pagespeed-report__footer--with-action": b === H.b
                        })
                    }, b === H.b && n.createElement("div", null, n.createElement(N.a, {
                        onClick: ce,
                        disabled: ae
                    }, Object(y.__)("Run test again", "google-site-kit")), n.createElement(z.a, {
                        isSaving: ae
                    })), n.createElement(L.a, null)))
                }
            }).call(this, r(18), r(3))
        },
        787: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(286),
                    a = r.n(n),
                    i = r(330),
                    o = r.n(i),
                    c = r(0),
                    s = r.n(c),
                    l = r(2),
                    u = r(1),
                    d = r(788),
                    g = r(789),
                    f = function DeviceSizeTabBar(t) {
                        var r = t.activeTab,
                            n = t.handleDeviceSizeUpdate,
                            i = t.deviceSizes,
                            c = void 0 === i ? [{
                                slug: "mobile",
                                label: Object(u.__)("Mobile", "google-site-kit"),
                                icon: e.createElement(d.a, {
                                    width: "15",
                                    height: "22"
                                })
                            }, {
                                slug: "desktop",
                                label: Object(u.__)("Desktop", "google-site-kit"),
                                icon: e.createElement(g.a, {
                                    width: "23",
                                    height: "17"
                                })
                            }] : i,
                            s = Object(l.useCallback)((function(e) {
                                var t = c[e];
                                n(t, e)
                            }), [c, n]);
                        if (!(null == c ? void 0 : c.length)) return null;
                        var f = c.findIndex((function(e) {
                            return e.slug === r
                        }));
                        return e.createElement(o.a, {
                            className: "googlesitekit-device-size-tab-bar",
                            activeIndex: f,
                            handleActiveIndexUpdate: s
                        }, c.map((function(t, r) {
                            var n = t.icon,
                                i = t.label;
                            return e.createElement(a.a, {
                                key: "google-sitekit-device-size-tab-key-".concat(r),
                                "aria-label": i,
                                focusOnActivate: !1
                            }, n)
                        })))
                    };
                f.propTypes = {
                    activeTab: s.a.string,
                    deviceSizes: s.a.arrayOf(s.a.shape({
                        label: s.a.string,
                        slug: s.a.string,
                        icon: s.a.node
                    })),
                    handleDeviceSizeUpdate: s.a.func
                }, f.defaultProps = {
                    handleDeviceSizeUpdate: function() {}
                }, t.a = f
            }).call(this, r(3))
        },
        788: function(e, t, r) {
            "use strict";
            var n = r(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = n.createElement("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }),
                o = n.createElement("path", {
                    d: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
                    fill: "currentColor"
                });
            t.a = function SvgDeviceSizeMobileIcon(e) {
                return n.createElement("svg", a({
                    viewBox: "5 1 14 22"
                }, e), i, o)
            }
        },
        789: function(e, t, r) {
            "use strict";
            var n = r(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = n.createElement("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }),
                o = n.createElement("path", {
                    d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z",
                    fill: "currentColor"
                });
            t.a = function SvgDeviceSizeDesktopIcon(e) {
                return n.createElement("svg", a({
                    viewBox: "0 4 24 16"
                }, e), i, o)
            }
        },
        790: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return LabReportMetrics
                }));
                var n = r(0),
                    a = r.n(n),
                    i = r(1),
                    o = r(384),
                    c = r(553),
                    s = r(569),
                    l = r(81);

                function LabReportMetrics(t) {
                    var r, n, a, u, d, g, f = t.data,
                        p = t.error,
                        m = null == f || null === (r = f.lighthouseResult) || void 0 === r || null === (n = r.audits) || void 0 === n ? void 0 : n["total-blocking-time"],
                        b = null == f || null === (a = f.lighthouseResult) || void 0 === a || null === (u = a.audits) || void 0 === u ? void 0 : u["largest-contentful-paint"],
                        v = null == f || null === (d = f.lighthouseResult) || void 0 === d || null === (g = d.audits) || void 0 === g ? void 0 : g["cumulative-layout-shift"];
                    return p ? e.createElement("div", {
                        className: "googlesitekit-pagespeed-insights-web-vitals-metrics"
                    }, e.createElement("div", {
                        className: "googlesitekit-pagespeed-report__row googlesitekit-pagespeed-report__row--first"
                    }, e.createElement(l.a, {
                        message: p.message
                    }))) : m && b && v ? e.createElement("div", {
                        className: "googlesitekit-pagespeed-insights-web-vitals-metrics"
                    }, e.createElement("div", {
                        className: "googlesitekit-pagespeed-report__row googlesitekit-pagespeed-report__row--first"
                    }, e.createElement("p", null, Object(i.__)("Lab data is a snapshot of how your page performs right now, measured in tests we run in a controlled environment.", "google-site-kit"), " ", e.createElement(c.a, null))), e.createElement("table", {
                        className: "googlesitekit-table googlesitekit-table--with-list"
                    }, e.createElement("thead", null, e.createElement("tr", null, e.createElement("th", null, Object(i.__)("Metric Name", "google-site-kit")), e.createElement("th", null, Object(i.__)("Metric Value", "google-site-kit")))), e.createElement("tbody", null, e.createElement(o.a, {
                        title: Object(i.__)("Total Blocking Time", "google-site-kit"),
                        description: Object(i.__)("How long people had to wait after the page loaded before they could click something", "google-site-kit"),
                        displayValue: m.displayValue,
                        category: Object(s.a)(m.score)
                    }), e.createElement(o.a, {
                        title: Object(i._x)("Largest Contentful Paint", "core web vitals name", "google-site-kit"),
                        description: Object(i.__)("Time it takes for the page to load", "google-site-kit"),
                        displayValue: b.displayValue,
                        category: Object(s.a)(b.score)
                    }), e.createElement(o.a, {
                        title: Object(i._x)("Cumulative Layout Shift", "core web vitals name", "google-site-kit"),
                        description: Object(i.__)("How stable the elements on the page are", "google-site-kit"),
                        displayValue: v.displayValue,
                        category: Object(s.a)(v.score),
                        isLast: !0
                    })))) : null
                }
                LabReportMetrics.propTypes = {
                    data: a.a.object,
                    error: a.a.object
                }
            }).call(this, r(3))
        },
        791: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return FieldReportMetrics
                }));
                var n = r(0),
                    a = r.n(n),
                    i = r(8),
                    o = r.n(i),
                    c = r(1),
                    s = r(384),
                    l = r(553),
                    u = r(81);

                function FieldReportMetrics(t) {
                    var r, n = t.data,
                        a = t.error,
                        i = (null == n || null === (r = n.loadingExperience) || void 0 === r ? void 0 : r.metrics) || {},
                        d = i.FIRST_INPUT_DELAY_MS,
                        g = i.LARGEST_CONTENTFUL_PAINT_MS,
                        f = i.CUMULATIVE_LAYOUT_SHIFT_SCORE;
                    if (a) return e.createElement("div", {
                        className: "googlesitekit-pagespeed-insights-web-vitals-metrics"
                    }, e.createElement("div", {
                        className: "googlesitekit-pagespeed-report__row googlesitekit-pagespeed-report__row--first"
                    }, e.createElement(u.a, {
                        message: a.message
                    })));
                    if (!d || !g || !f) return e.createElement("div", {
                        className: "googlesitekit-pagespeed-insights-web-vitals-metrics googlesitekit-pagespeed-insights-web-vitals-metrics--field-data-unavailable"
                    }, e.createElement("div", {
                        className: "googlesitekit-pagespeed-insights-web-vitals-metrics__field-data-unavailable-content"
                    }, e.createElement("h3", null, Object(c.__)("Field data unavailable", "google-site-kit")), e.createElement("p", null, Object(c.__)("Field data shows how real users actually loaded and interacted with your page. We don’t have enough real-world experience and speed data for this page. It may be new, or not enough users with Chrome browsers have visited it yet.", "google-site-kit"))));
                    var p = (Math.round(g.percentile / 100) / 10).toFixed(1),
                        m = (f.percentile / 100).toFixed(2);
                    return e.createElement("div", {
                        className: "googlesitekit-pagespeed-insights-web-vitals-metrics"
                    }, e.createElement("div", {
                        className: "googlesitekit-pagespeed-report__row googlesitekit-pagespeed-report__row--first"
                    }, e.createElement("p", null, Object(c.__)("Field data shows how real users actually loaded and interacted with your page over time.", "google-site-kit"), " ", e.createElement(l.a, null))), e.createElement("table", {
                        className: o()("googlesitekit-table", "googlesitekit-table--with-list")
                    }, e.createElement("thead", null, e.createElement("tr", null, e.createElement("th", null, Object(c.__)("Metric Name", "google-site-kit")), e.createElement("th", null, Object(c.__)("Metric Value", "google-site-kit")))), e.createElement("tbody", null, e.createElement(s.a, {
                        title: Object(c._x)("First Input Delay", "core web vitals name", "google-site-kit"),
                        description: Object(c.__)("Time it takes for the browser to respond when people first interact with the page", "google-site-kit"),
                        displayValue: "".concat(d.percentile, " ms"),
                        category: d.category
                    }), e.createElement(s.a, {
                        title: Object(c._x)("Largest Contentful Paint", "core web vitals name", "google-site-kit"),
                        description: Object(c.__)("Time it takes for the page to load", "google-site-kit"),
                        displayValue: "".concat(p, " s"),
                        category: g.category
                    }), e.createElement(s.a, {
                        title: Object(c._x)("Cumulative Layout Shift", "core web vitals name", "google-site-kit"),
                        description: Object(c.__)("How stable the elements on the page are", "google-site-kit"),
                        displayValue: m,
                        category: f.category,
                        isLast: !0
                    }))))
                }
                FieldReportMetrics.propTypes = {
                    data: a.a.object,
                    error: a.a.object
                }
            }).call(this, r(3))
        },
        792: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Recommendations
                }));
                var n = r(0),
                    a = r.n(n),
                    i = r(8),
                    o = r.n(i),
                    c = r(1),
                    s = r(4),
                    l = r.n(s),
                    u = r(102),
                    d = r(793),
                    g = l.a.useSelect;

                function Recommendations(t) {
                    var r = t.className,
                        n = t.referenceURL,
                        a = t.strategy,
                        i = g((function(e) {
                            return e(u.c).hasFinishedResolution("getReport", [n, a])
                        })),
                        s = g((function(e) {
                            var t = e(u.c).getAuditsWithStackPack(n, a, "wordpress");
                            if (!t || !Object.keys(t).length) return [];
                            var r = [];
                            return Object.keys(t).forEach((function(e) {
                                var n = t[e];
                                "numeric" !== n.scoreDisplayMode && "binary" !== n.scoreDisplayMode || n.score >= .9 || r.push({
                                    id: n.id,
                                    title: n.title
                                })
                            })), r
                        }), [n, a, i]);
                    return (null == s ? void 0 : s.length) ? e.createElement("div", {
                        className: o()("googlesitekit-pagespeed--recommendations", r)
                    }, e.createElement("div", {
                        className: "googlesitekit-pagespeed-recommendations__title"
                    }, Object(c.__)("Recommendations on how to improve your site", "google-site-kit")), s.map((function(t) {
                        var r = t.id,
                            i = t.title;
                        return e.createElement(d.a, {
                            key: r,
                            auditID: r,
                            title: i,
                            referenceURL: n,
                            strategy: a
                        })
                    }))) : null
                }
                Recommendations.propTypes = {
                    className: a.a.string,
                    referenceURL: a.a.string.isRequired,
                    strategy: a.a.oneOf([u.e, u.d]).isRequired
                }, Recommendations.defaultProps = {
                    className: ""
                }
            }).call(this, r(3))
        },
        793: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Recommendation
                }));
                var n = r(0),
                    a = r.n(n),
                    i = r(2),
                    o = r(4),
                    c = r.n(o),
                    s = r(20),
                    l = r(102),
                    u = r(794),
                    d = r(11),
                    g = c.a.useSelect;

                function Recommendation(t) {
                    var r = t.auditID,
                        n = t.title,
                        a = t.referenceURL,
                        o = t.strategy,
                        c = Object(i.useContext)(s.b),
                        f = Object(i.useCallback)((function() {
                            Object(d.w)("".concat(c, "_pagespeed-widget"), "stack_pack_expand", r)
                        }), [r, c]),
                        p = g((function(e) {
                            return e(l.c).getStackPackDescription(a, o, r, "wordpress")
                        }));
                    if (!p) return null;
                    var m = Object(d.p)(p.description);
                    return e.createElement(u.a, {
                        id: r,
                        title: n,
                        onOpen: f
                    }, e.createElement("div", {
                        dangerouslySetInnerHTML: Object(d.t)(m, {
                            ALLOWED_TAGS: ["a", "p"],
                            ALLOWED_ATTR: ["href", "rel", "target"]
                        })
                    }))
                }
                Recommendation.propTypes = {
                    auditID: a.a.string.isRequired,
                    title: a.a.string.isRequired,
                    referenceURL: a.a.string.isRequired,
                    strategy: a.a.oneOf([l.e, l.d]).isRequired
                }
            }).call(this, r(3))
        },
        794: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Accordion
                }));
                var n = r(12),
                    a = r.n(n),
                    i = r(0),
                    o = r.n(i),
                    c = r(8),
                    s = r.n(c),
                    l = r(2);

                function Accordion(t) {
                    var r = t.title,
                        n = t.children,
                        i = t.initialOpen,
                        o = t.onOpen,
                        c = t.onClose,
                        u = Object(l.useState)(!!i),
                        d = a()(u, 2),
                        g = d[0],
                        f = d[1];
                    Object(l.useEffect)((function() {
                        g && o && "function" == typeof o ? o() : !g && c && "function" == typeof c && c()
                    }), [g, c, o]);
                    var p = Object(l.useCallback)((function() {
                        f(!g)
                    }), [g]);
                    return e.createElement("div", {
                        className: "googlesitekit-accordion"
                    }, e.createElement("div", {
                        className: s()("googlesitekit-accordion__header", {
                            "is-active": g
                        }),
                        onClick: p,
                        onKeyDown: function() {},
                        tabIndex: 0,
                        role: "button"
                    }, r), e.createElement("div", {
                        className: s()("googlesitekit-accordion__content", {
                            "is-active": g
                        })
                    }, n))
                }
                Accordion.propTypes = {
                    title: o.a.node.isRequired,
                    children: o.a.node.isRequired,
                    initialOpen: o.a.bool,
                    onOpen: o.a.func,
                    onClose: o.a.func
                }
            }).call(this, r(3))
        },
        795: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ReportDetailsLink
                }));
                var n = r(1),
                    a = r(130),
                    i = r(4),
                    o = r.n(i),
                    c = r(102),
                    s = r(15),
                    l = r(21),
                    u = o.a.useSelect;

                function ReportDetailsLink() {
                    var t = u((function(e) {
                            return e(s.c).getCurrentReferenceURL()
                        })),
                        r = u((function(e) {
                            return e(c.c).getServiceURL({
                                path: "report",
                                query: {
                                    url: t
                                }
                            })
                        }));
                    return e.createElement("p", null, Object(a.a)(Object(n.sprintf)(
                        /* translators: %s: link with translated service name */
                        Object(n.__)("View details at %s", "google-site-kit"), "<a>".concat(Object(n._x)("PageSpeed Insights", "Service name", "google-site-kit"), "</a>")), {
                        a: e.createElement(l.a, {
                            href: r,
                            external: !0
                        })
                    }))
                }
            }).call(this, r(3))
        },
        80: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return s
                })), r.d(t, "b", (function() {
                    return l
                })), r.d(t, "c", (function() {
                    return d
                }));
                var n = r(12),
                    a = r.n(n),
                    i = r(1);

                function o(e, t) {
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
                                a = function() {};
                            return {
                                s: a,
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
                                f: a
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, o = !0,
                        s = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            s = !0, i = e
                        },
                        f: function() {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                    }
                }

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }
                var s = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = null,
                            r = null,
                            n = document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),
                            a = document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");
                        if (n && a) return !1;
                        if (t = document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"), r = document.querySelector("#wp-admin-bar-google-site-kit .ab-item"), null === t && null === r) return !1;
                        var o = document.createElement("span");
                        o.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(e));
                        var c = document.createElement("span");
                        c.setAttribute("class", "plugin-count"), c.setAttribute("aria-hidden", "true"), c.textContent = e;
                        var s = document.createElement("span");
                        return s.setAttribute("class", "screen-reader-text"), s.textContent = Object(i.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(i._n)("%d notification", "%d notifications", e, "google-site-kit"), e), o.appendChild(c), o.appendChild(s), t && null === n && t.appendChild(o), r && null === a && r.appendChild(o), o
                    },
                    l = function() {
                        e.localStorage && e.localStorage.clear(), e.sessionStorage && e.sessionStorage.clear()
                    },
                    u = function(e) {
                        for (var t = location.search.substr(1).split("&"), r = {}, n = 0; n < t.length; n++) r[t[n].split("=")[0]] = decodeURIComponent(t[n].split("=")[1]);
                        return e ? r.hasOwnProperty(e) ? decodeURIComponent(r[e].replace(/\+/g, " ")) : "" : r
                    },
                    d = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                            r = new URL(t.href);
                        if (e) return r.searchParams && r.searchParams.get ? r.searchParams.get(e) : u(e);
                        var n, i = {},
                            c = o(r.searchParams.entries());
                        try {
                            for (c.s(); !(n = c.n()).done;) {
                                var s = a()(n.value, 2),
                                    l = s[0],
                                    d = s[1];
                                i[l] = d
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return i
                    }
            }).call(this, r(18))
        },
        81: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    i = r(109),
                    o = r(1),
                    c = r(11);

                function ErrorText(t) {
                    var r = t.message,
                        n = t.reconnectURL;
                    if (!r) return null;
                    var a = Object(o.sprintf)(
                        /* translators: %s: Error message */
                        Object(o.__)("Error: %s", "google-site-kit"), r);
                    n && Object(i.a)(n) && (a = a + " " + Object(o.sprintf)(
                        /* translators: %s: Reconnect URL */
                        Object(o.__)('To fix this, <a href="%s">redo the plugin setup</a>.', "google-site-kit"), n));
                    return e.createElement("div", {
                        className: "googlesitekit-error-text"
                    }, e.createElement("p", {
                        dangerouslySetInnerHTML: Object(c.t)(a, {
                            ALLOWED_TAGS: ["a"],
                            ALLOWED_ATTR: ["href"]
                        })
                    }))
                }
                ErrorText.propTypes = {
                    message: a.a.string.isRequired,
                    reconnectURL: a.a.string
                }, ErrorText.defaultProps = {
                    reconnectURL: ""
                }, t.a = ErrorText
            }).call(this, r(3))
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
                    return i
                })), r.d(t, "c", (function() {
                    return o
                })), r.d(t, "a", (function() {
                    return c
                }));
                var n = r(194),
                    a = r(62),
                    i = function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Number.isNaN(Number(t))) return "";
                        var i = r.invertColor,
                            o = void 0 !== i && i;
                        return Object(n.a)(e.createElement(a.a, {
                            direction: t > 0 ? "up" : "down",
                            invertColor: o
                        }))
                    },
                    o = function(e) {
                        var t, r, n, a, i, o, c, s, l, u, d, g, f, p, m;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (r = t.data) || void 0 === r || null === (n = r.rows) || void 0 === n ? void 0 : n.length) || (null == e || null === (a = e[0]) || void 0 === a || null === (i = a.data) || void 0 === i || null === (o = i.rows) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (s = c.metrics) || void 0 === s || null === (l = s[0]) || void 0 === l || null === (u = l.values) || void 0 === u ? void 0 : u[0]) === (null == e || null === (d = e[0]) || void 0 === d || null === (g = d.data) || void 0 === g || null === (f = g.totals) || void 0 === f || null === (p = f[0]) || void 0 === p || null === (m = p.values) || void 0 === m ? void 0 : m[0])
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
                    return u
                }));
                var n = r(6),
                    a = r.n(n),
                    i = r(87),
                    o = r(88);

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

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var l = {
                    currentUserRoles: [],
                    activeModules: [],
                    trackingEnabled: !1,
                    trackingID: "",
                    referenceSiteURL: "",
                    userIDHash: ""
                };

                function u(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                        a = s(s({}, l), t);
                    a.referenceSiteURL && (a.referenceSiteURL = a.referenceSiteURL.toString().replace(/\/+$/, ""));
                    var c = Object(i.a)(a, r);
                    return {
                        enableTracking: function() {
                            a.trackingEnabled = !0
                        },
                        disableTracking: function() {
                            a.trackingEnabled = !1
                        },
                        initializeSnippet: c,
                        isTrackingEnabled: function() {
                            return !!a.trackingEnabled
                        },
                        trackEvent: Object(o.a)(a, r, c, n)
                    }
                }
            }).call(this, r(18))
        },
        87: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return i
                }));
                var n = r(51),
                    a = r(28);

                function i(t, r) {
                    var i, o = Object(n.a)(r);
                    return function() {
                        var r = e.document;
                        if (void 0 === i && (i = !!r.querySelector("script[".concat(a.b, "]"))), !i) {
                            var n = r.createElement("script");
                            n.setAttribute(a.b, ""), n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID, "&l=").concat(a.a), r.head.appendChild(n), o("js", new Date), o("config", t.trackingID, {
                                send_page_view: t.isSiteKitScreen
                            }), i = !0
                        }
                    }
                }
            }).call(this, r(18))
        },
        88: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return f
                }));
                var n = r(5),
                    a = r.n(n),
                    i = r(6),
                    o = r.n(i),
                    c = r(14),
                    s = r.n(c),
                    l = r(51),
                    u = r(30);

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

                function g(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? d(Object(r), !0).forEach((function(t) {
                            o()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function f(t, r, n, i) {
                    var o = Object(l.a)(r);
                    return function() {
                        var r = s()(a.a.mark((function r(c, s, l, d) {
                            var f, p, m, b, v, h, _, O, y, E;
                            return a.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (b = t.activeModules, v = t.referenceSiteURL, h = t.trackingEnabled, _ = t.trackingID, O = t.userIDHash, h) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return n(), y = null !== (f = null === (p = e._googlesitekitUserData) || void 0 === p || null === (m = p.user) || void 0 === m ? void 0 : m.roles) && void 0 !== f ? f : [], E = {
                                            send_to: _,
                                            event_category: c,
                                            event_label: l,
                                            value: d,
                                            dimension1: v,
                                            dimension2: y.join(","),
                                            dimension3: O,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(u.a).join(","),
                                            dimension6: b.join(",")
                                        }, r.abrupt("return", new Promise((function(e) {
                                            var t, r, n = setTimeout((function() {
                                                    i.console.warn('Tracking event "'.concat(s, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                a = function() {
                                                    clearTimeout(n), e()
                                                };
                                            o("event", s, g(g({}, E), {}, {
                                                event_callback: a
                                            })), (null === (t = i._gaUserPrefs) || void 0 === t || null === (r = t.ioo) || void 0 === r ? void 0 : r.call(t)) && a()
                                        })));
                                    case 7:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })));
                        return function(e, t, n, a) {
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
            var a = r(106);
            r.d(t, "c", (function() {
                return a.a
            }));
            var i = r(107);
            r.d(t, "b", (function() {
                return i.a
            }))
        },
        94: function(e, t, r) {
            "use strict";
            var n = r(2),
                a = r(30),
                i = Object(n.createContext)(a.a);
            t.a = i
        }
    },
    [
        [1088, 1, 0]
    ]
]);
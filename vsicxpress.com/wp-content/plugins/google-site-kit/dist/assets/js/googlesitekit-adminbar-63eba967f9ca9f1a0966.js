(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [3], {
        1: function(e, t) {
            e.exports = googlesitekit.i18n
        },
        10: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return r
            })), n.d(t, "a", (function() {
                return a
            })), n.d(t, "h", (function() {
                return i
            })), n.d(t, "g", (function() {
                return o
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "k", (function() {
                return s
            })), n.d(t, "c", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "s", (function() {
                return f
            })), n.d(t, "r", (function() {
                return g
            })), n.d(t, "t", (function() {
                return p
            })), n.d(t, "p", (function() {
                return m
            })), n.d(t, "q", (function() {
                return v
            })), n.d(t, "n", (function() {
                return b
            })), n.d(t, "o", (function() {
                return h
            })), n.d(t, "l", (function() {
                return y
            })), n.d(t, "m", (function() {
                return O
            })), n.d(t, "j", (function() {
                return k
            })), n.d(t, "i", (function() {
                return E
            }));
            var r = "modules/analytics",
                a = "account_create",
                i = "property_create",
                o = "profile_create",
                c = "analyticsAccountCreate",
                l = "analyticsSetup",
                s = "https://www.googleapis.com/auth/analytics.provision",
                u = "https://www.googleapis.com/auth/analytics.edit",
                d = 1,
                f = "dashboardAllTrafficWidgetDimensionName",
                g = "dashboardAllTrafficWidgetDimensionColor",
                p = "dashboardAllTrafficWidgetDimensionValue",
                m = "dashboardAllTrafficWidgetActiveRowIndex",
                v = "dashboardAllTrafficWidgetLoaded",
                b = "legacy",
                h = "ua",
                y = "ga4",
                O = "ga4-transitional",
                k = "ua",
                E = "ga4"
        },
        100: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            })), n.d(t, "b", (function() {
                return f
            }));
            var r, a = n(6),
                i = n.n(a),
                o = n(34),
                c = n(114),
                l = n(121),
                s = n(122),
                u = (r = {}, i()(r, o.c.QUARTER, 3), i()(r, o.c.HALF, 6), i()(r, o.c.FULL, 12), r),
                d = "googlesitekit-hidden",
                f = [s.a, l.a, c.a]
        },
        101: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return a
            })), n.d(t, "d", (function() {
                return i
            })), n.d(t, "c", (function() {
                return o
            }));
            var r = function(e) {
                    var t = e.format,
                        n = void 0 === t ? "small" : t,
                        r = e.inlineLayout,
                        a = e.hasErrorOrWarning,
                        o = e.hasSmallImageSVG,
                        c = e.hasWinImageSVG,
                        l = {
                            smSize: 4,
                            mdSize: r ? 7 : 8,
                            lgSize: 12
                        },
                        s = i(n);
                    return Object.keys(l).forEach((function(e) {
                        var t = l[e];
                        a && (t -= 1), o && (t -= 1), c && 0 < t - s[e] && (t -= s[e]), l[e] = t
                    })), l
                },
                a = function(e) {
                    switch (e) {
                        case "small":
                            return {};
                        case "larger":
                            return {
                                smOrder: 2,
                                mdOrder: 2,
                                lgOrder: 1
                            };
                        default:
                            return {
                                smOrder: 2,
                                mdOrder: 1
                            }
                    }
                },
                i = function(e) {
                    switch (e) {
                        case "smaller":
                            return {
                                smSize: 4,
                                mdSize: 2,
                                lgSize: 2
                            };
                        case "larger":
                            return {
                                smSize: 4,
                                mdSize: 8,
                                lgSize: 7
                            };
                        default:
                            return {
                                smSize: 4,
                                mdSize: 2,
                                lgSize: 4
                            }
                    }
                },
                o = function(e) {
                    switch (e) {
                        case "larger":
                            return {
                                smOrder: 1,
                                mdOrder: 1,
                                lgOrder: 2
                            };
                        default:
                            return {
                                smOrder: 1,
                                mdOrder: 2
                            }
                    }
                }
        },
        103: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(6),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i);

                function c(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function l(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function Spinner(t) {
                    var n = t.isSaving,
                        r = t.style,
                        a = void 0 === r ? {} : r;
                    return e.createElement("span", {
                        className: "spinner",
                        style: l({
                            display: n ? "inline-block" : "none",
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
            }).call(this, n(3))
        },
        105: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Cell
                }));
                var r = n(16),
                    a = n.n(r),
                    i = n(6),
                    o = n.n(i),
                    c = n(17),
                    l = n.n(c),
                    s = n(0),
                    u = n.n(s),
                    d = n(8),
                    f = n.n(d);

                function Cell(t) {
                    var n, r = t.className,
                        i = t.alignTop,
                        c = t.alignMiddle,
                        s = t.alignBottom,
                        u = t.alignRight,
                        d = t.alignLeft,
                        g = t.smAlignRight,
                        p = t.mdAlignRight,
                        m = t.lgAlignRight,
                        v = t.smSize,
                        b = t.smStart,
                        h = t.smOrder,
                        y = t.mdSize,
                        O = t.mdStart,
                        k = t.mdOrder,
                        E = t.lgSize,
                        _ = t.lgStart,
                        w = t.lgOrder,
                        j = t.size,
                        S = t.children,
                        C = l()(t, ["className", "alignTop", "alignMiddle", "alignBottom", "alignRight", "alignLeft", "smAlignRight", "mdAlignRight", "lgAlignRight", "smSize", "smStart", "smOrder", "mdSize", "mdStart", "mdOrder", "lgSize", "lgStart", "lgOrder", "size", "children"]);
                    return e.createElement("div", a()({}, C, {
                        className: f()(r, "mdc-layout-grid__cell", (n = {
                            "mdc-layout-grid__cell--align-top": i,
                            "mdc-layout-grid__cell--align-middle": c,
                            "mdc-layout-grid__cell--align-bottom": s,
                            "mdc-layout-grid__cell--align-right": u,
                            "mdc-layout-grid__cell--align-left": d,
                            "mdc-layout-grid__cell--align-right-phone": g,
                            "mdc-layout-grid__cell--align-right-tablet": p,
                            "mdc-layout-grid__cell--align-right-desktop": m
                        }, o()(n, "mdc-layout-grid__cell--span-".concat(j), 12 >= j && j > 0), o()(n, "mdc-layout-grid__cell--span-".concat(E, "-desktop"), 12 >= E && E > 0), o()(n, "mdc-layout-grid__cell--start-".concat(_, "-desktop"), 12 >= _ && _ > 0), o()(n, "mdc-layout-grid__cell--order-".concat(w, "-desktop"), 12 >= w && w > 0), o()(n, "mdc-layout-grid__cell--span-".concat(y, "-tablet"), 8 >= y && y > 0), o()(n, "mdc-layout-grid__cell--start-".concat(O, "-tablet"), 8 >= O && O > 0), o()(n, "mdc-layout-grid__cell--order-".concat(k, "-tablet"), 8 >= k && k > 0), o()(n, "mdc-layout-grid__cell--span-".concat(v, "-phone"), 4 >= v && v > 0), o()(n, "mdc-layout-grid__cell--start-".concat(b, "-phone"), 4 >= b && b > 0), o()(n, "mdc-layout-grid__cell--order-".concat(h, "-phone"), 4 >= h && h > 0), n))
                    }), S)
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
            }).call(this, n(3))
        },
        106: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Row
                }));
                var r = n(16),
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    l = n.n(c),
                    s = n(8),
                    u = n.n(s);

                function Row(t) {
                    var n = t.className,
                        r = t.children,
                        i = o()(t, ["className", "children"]);
                    return e.createElement("div", a()({
                        className: u()("mdc-layout-grid__inner", n)
                    }, i), r)
                }
                Row.propTypes = {
                    className: l.a.string,
                    children: l.a.node
                }, Row.defaultProps = {
                    className: ""
                }
            }).call(this, n(3))
        },
        107: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    l = n.n(c),
                    s = n(8),
                    u = n.n(s),
                    d = n(2),
                    f = Object(d.forwardRef)((function(t, n) {
                        var r = t.alignLeft,
                            i = t.fill,
                            c = t.className,
                            l = t.children,
                            s = o()(t, ["alignLeft", "fill", "className", "children"]);
                        return e.createElement("div", a()({
                            className: u()("mdc-layout-grid", c, {
                                "mdc-layout-grid--align-left": r,
                                "mdc-layout-grid--fill": i
                            })
                        }, s, {
                            ref: n
                        }), l)
                    }));
                f.propTypes = {
                    alignLeft: l.a.bool,
                    fill: l.a.bool,
                    className: l.a.string,
                    children: l.a.node
                }, f.defaultProps = {
                    className: ""
                }, t.a = f
            }).call(this, n(3))
        },
        1071: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    var t = n(817),
                        r = n.n(t),
                        a = n(222),
                        i = n(111),
                        o = n(11),
                        c = n(163),
                        l = n(818),
                        s = n(24),
                        u = r()((function() {
                            var t = document.getElementById("js-googlesitekit-adminbar-modules");
                            t && (Object(i.render)(e.createElement(c.a, {
                                viewContext: s.f
                            }, e.createElement(l.a, null)), t), Object(o.w)(s.f, "view_urlsummary"))
                        }));
                    Object(a.a)((function() {
                        var e = document.getElementById("wp-admin-bar-google-site-kit");
                        e && (e.addEventListener("mouseover", u, {
                            once: !0
                        }), e.addEventListener("focusin", u, {
                            once: !0
                        }))
                    }))
                }.call(this, n(3))
        },
        108: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return a
                })), n.d(t, "b", (function() {
                    return i
                }));
                var r = n(48);

                function a(t, n) {
                    var r = document.querySelector(t);
                    if (!r) return 0;
                    var a = r.getBoundingClientRect().top,
                        o = i(n),
                        c = "#googlesitekit-pagespeed-header" === t ? 80 : 0;
                    return a + e.scrollY - o - c
                }

                function i(e) {
                    var t = 0,
                        n = document.querySelector(".googlesitekit-header");
                    n && (t = e !== r.b ? n.getBoundingClientRect().bottom : n.offsetHeight);
                    var a = document.querySelectorAll(".googlesitekit-navigation, .googlesitekit-entity-header");
                    return t += Array.from(a).reduce((function(e, t) {
                        return e + t.offsetHeight
                    }), 0)
                }
            }).call(this, n(18))
        },
        11: function(e, t, n) {
            "use strict";
            n.d(t, "w", (function() {
                return c.b
            })), n.d(t, "t", (function() {
                return l.a
            })), n.d(t, "x", (function() {
                return l.b
            })), n.d(t, "v", (function() {
                return g
            })), n.d(t, "c", (function() {
                return p.b
            })), n.d(t, "k", (function() {
                return p.c
            })), n.d(t, "r", (function() {
                return m.c
            })), n.d(t, "s", (function() {
                return m.d
            })), n.d(t, "o", (function() {
                return m.b
            })), n.d(t, "j", (function() {
                return m.a
            })), n.d(t, "e", (function() {
                return v.a
            })), n.d(t, "p", (function() {
                return O
            })), n.d(t, "d", (function() {
                return k
            })), n.d(t, "g", (function() {
                return E.c
            })), n.d(t, "u", (function() {
                return E.i
            })), n.d(t, "h", (function() {
                return _.b
            })), n.d(t, "n", (function() {
                return _.c
            })), n.d(t, "b", (function() {
                return _.a
            })), n.d(t, "m", (function() {
                return w.b
            })), n.d(t, "i", (function() {
                return w.a
            })), n.d(t, "q", (function() {
                return w.d
            })), n.d(t, "l", (function() {
                return j
            })), n.d(t, "a", (function() {
                return S
            })), n.d(t, "y", (function() {
                return C
            })), n.d(t, "f", (function() {
                return N
            }));
            var r = n(117),
                a = n.n(r),
                i = n(113),
                o = n.n(i),
                c = n(31),
                l = n(63),
                s = n(29),
                u = n.n(s),
                d = n(78),
                f = n.n(d),
                g = function(e) {
                    return f()(JSON.stringify(function e(t) {
                        var n = {};
                        return Object.keys(t).sort().forEach((function(r) {
                            var a = t[r];
                            a && "object" === u()(a) && !Array.isArray(a) && (a = e(a)), n[r] = a
                        })), n
                    }(e)))
                };
            var p = n(80),
                m = (n(84), n(72)),
                v = n(64);

            function b(e) {
                return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function h(e) {
                return "<p>".concat(e.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function y(e) {
                return e.replace(/\n/gi, "<br>")
            }

            function O(e) {
                for (var t = e, n = 0, r = [b, h, y]; n < r.length; n++) {
                    t = (0, r[n])(t)
                }
                return t
            }
            var k = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                E = n(59),
                _ = n(85),
                w = n(50),
                j = function(e) {
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
                S = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var n = (t - e) / e;
                    return isNaN(n) || !a()(n) ? null : n
                },
                C = function(e) {
                    try {
                        return JSON.parse(e) && !!e
                    } catch (e) {
                        return !1
                    }
                },
                N = function(e) {
                    if (!e) return "";
                    var t = e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(t)
                    })).replace(/(\\)/g, "");
                    return o()(t)
                }
        },
        114: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ReportZero
                }));
                var r = n(0),
                    a = n.n(r),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    l = n(22),
                    s = n(83),
                    u = c.a.useSelect;

                function ReportZero(t) {
                    var n = t.moduleSlug,
                        r = u((function(e) {
                            return e(l.a).getModule(n)
                        }));
                    return e.createElement(s.a, {
                        title: Object(i.sprintf)(
                            /* translators: %s: Module name */
                            Object(i.__)("%s Gathering Data", "google-site-kit"), null == r ? void 0 : r.name),
                        description: Object(i.sprintf)(
                            /* translators: %s: Module name */
                            Object(i.__)("%s data is not yet available, please check back later", "google-site-kit"), null == r ? void 0 : r.name)
                    })
                }
                ReportZero.propTypes = {
                    moduleSlug: a.a.string.isRequired
                }
            }).call(this, n(3))
        },
        116: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n(2),
                a = n(4),
                i = n.n(a),
                o = n(34),
                c = i.a.useDispatch;

            function l(e, t, n) {
                var a = c(o.a),
                    i = a.setWidgetState,
                    l = a.unsetWidgetState;
                Object(r.useEffect)((function() {
                    return i(e, t, n),
                        function() {
                            l(e, t, n)
                        }
                }), [e, t, n, i, l])
            }
        },
        121: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(2),
                    o = n(1),
                    c = n(83),
                    l = n(4),
                    s = n.n(l),
                    u = n(13),
                    d = n(22),
                    f = n(38),
                    g = s.a.useSelect,
                    p = s.a.useDispatch,
                    m = function CompleteModuleActivationCTA(t) {
                        var n = t.moduleSlug,
                            r = t.title,
                            a = t.description,
                            l = g((function(e) {
                                return e(d.a).getModule(n)
                            })),
                            s = g((function(e) {
                                return e(d.a).getModuleStoreName(n)
                            })),
                            m = g((function(e) {
                                var t;
                                return null === (t = e(s)) || void 0 === t ? void 0 : t.getAdminReauthURL()
                            })),
                            v = g((function(e) {
                                return e(u.a).hasCapability(u.c)
                            })),
                            b = p(f.a).navigateTo,
                            h = Object(i.useCallback)((function() {
                                return b(m)
                            }), [m, b]);
                        return (null == l ? void 0 : l.name) && m && v ? e.createElement(c.a, {
                            title: r || Object(o.sprintf)(
                                /* translators: %s: Module name */
                                Object(o.__)("Complete %s activation", "google-site-kit"), l.name),
                            description: a || Object(o.sprintf)(
                                /* translators: %s: Module name */
                                Object(o.__)("%s module setup needs to be completed", "google-site-kit"), l.name),
                            ctaLabel: Object(o.__)("Complete setup", "google-site-kit"),
                            "aria-label": Object(o.sprintf)(
                                /* translators: %s: Module name */
                                Object(o.__)("Complete %s setup", "google-site-kit"), l.name),
                            onClick: h
                        }) : null
                    };
                m.propTypes = {
                    moduleSlug: a.a.string.isRequired,
                    title: a.a.string,
                    description: a.a.string
                }, t.a = m
            }).call(this, n(3))
        },
        122: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ActivateModuleCTA
                }));
                var r = n(0),
                    a = n.n(r),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    l = n(22),
                    s = n(187),
                    u = n(83),
                    d = c.a.useSelect;

                function ActivateModuleCTA(t) {
                    var n = t.moduleSlug,
                        r = t.title,
                        a = t.description,
                        o = d((function(e) {
                            return e(l.a).getModule(n)
                        })),
                        c = Object(s.a)(n);
                    if (!c) return null;
                    var f = r,
                        g = a;
                    switch (n) {
                        case "analytics":
                            r || (f = Object(i.__)("Learn more about what visitors do on your site", "google-site-kit")), a || (g = Object(i.__)("Connect with Google Analytics to see unique visitors, goal completions, top pages and more", "google-site-kit"));
                            break;
                        case "pagespeed-insights":
                            a || (g = Object(i.__)("Google PageSpeed Insights gives you metrics about performance, accessibility, SEO and PWA", "google-site-kit"))
                    }
                    return e.createElement(u.a, {
                        title: f || Object(i.sprintf)(
                            /* translators: %s: Module name */
                            Object(i.__)("Activate %s", "google-site-kit"), o.name),
                        description: g || Object(i.sprintf)(
                            /* translators: %s: Module name */
                            Object(i.__)("%s module needs to be configured", "google-site-kit"), o.name),
                        ctaLabel: Object(i.sprintf)(
                            /* translators: %s: Module name */
                            Object(i.__)("Set up %s", "google-site-kit"), o.name),
                        onClick: c
                    })
                }
                ActivateModuleCTA.propTypes = {
                    moduleSlug: a.a.string.isRequired,
                    title: a.a.string,
                    description: a.a.string
                }
            }).call(this, n(3))
        },
        123: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(217),
                    o = n.n(i),
                    c = n(8),
                    l = n.n(c),
                    s = n(131),
                    u = n(2),
                    d = n(1),
                    f = n(19),
                    g = n(21),
                    p = n(7),
                    m = n(103),
                    v = function Dialog(t) {
                        var n = t.dialogActive,
                            r = t.handleDialog,
                            a = t.title,
                            i = t.provides,
                            c = t.handleConfirm,
                            v = t.subtitle,
                            b = t.confirmButton,
                            h = t.dependentModules,
                            y = t.danger,
                            O = t.inProgress,
                            k = void 0 !== O && O,
                            E = Object(u.useCallback)((function(e) {
                                null !== e && p.e.attachTo(e)
                            }), []),
                            _ = Object(s.a)(Dialog),
                            w = "googlesitekit-dialog-label-".concat(_),
                            j = "googlesitekit-dialog-description-".concat(_),
                            S = !(!i || !i.length);
                        return e.createElement("div", {
                            ref: E,
                            className: l()("mdc-dialog", {
                                "mdc-dialog--open": n
                            }),
                            role: "alertdialog",
                            "aria-modal": "true",
                            "aria-labelledby": a ? w : void 0,
                            "aria-describedby": S ? j : void 0,
                            "aria-hidden": n ? "false" : "true",
                            tabIndex: "-1"
                        }, e.createElement("div", {
                            className: "mdc-dialog__scrim"
                        }, " "), e.createElement(o.a, {
                            active: n
                        }, e.createElement("div", null, e.createElement("div", {
                            className: "mdc-dialog__container"
                        }, e.createElement("div", {
                            className: "mdc-dialog__surface"
                        }, a && e.createElement("h2", {
                            id: w,
                            className: "mdc-dialog__title"
                        }, a), v && e.createElement("p", {
                            className: "mdc-dialog__lead"
                        }, v), S && e.createElement("section", {
                            id: j,
                            className: "mdc-dialog__content"
                        }, e.createElement("ul", {
                            className: "mdc-list mdc-list--underlined mdc-list--non-interactive"
                        }, i.map((function(t) {
                            return e.createElement("li", {
                                className: "mdc-list-item",
                                key: t
                            }, e.createElement("span", {
                                className: "mdc-list-item__text"
                            }, t))
                        })))), h && e.createElement("p", {
                            className: "mdc-dialog__dependecies"
                        }, e.createElement("strong", null, Object(d.__)("Note: ", "google-site-kit")), h), e.createElement("footer", {
                            className: "mdc-dialog__actions"
                        }, e.createElement(f.a, {
                            onClick: c,
                            danger: y,
                            disabled: k
                        }, b || Object(d.__)("Disconnect", "google-site-kit")), e.createElement(m.a, {
                            isSaving: k
                        }), e.createElement(g.a, {
                            className: "googlesitekit-margin-left-auto mdc-dialog__cancel-button",
                            onClick: r,
                            inherit: !0,
                            disabled: k
                        }, Object(d.__)("Cancel", "google-site-kit"))))))))
                    };
                v.displayName = "Dialog", v.propTypes = {
                    dialogActive: a.a.bool,
                    handleDialog: a.a.func,
                    handleConfirm: a.a.func.isRequired,
                    title: a.a.string,
                    description: a.a.string,
                    confirmButton: a.a.string,
                    danger: a.a.bool
                }, v.defaultProps = {
                    dialogActive: !1,
                    handleDialog: null,
                    title: null,
                    description: null,
                    confirmButton: null,
                    danger: !1
                }, t.a = v
            }).call(this, n(3))
        },
        126: function(e, t, n) {
            "use strict";

            function Null() {
                return null
            }
            n.d(t, "a", (function() {
                return Null
            }))
        },
        13: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "e", (function() {
                return i
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return l
            }));
            var r = "core/user",
                a = "connected_url_mismatch",
                i = "googlesitekit_setup",
                o = "googlesitekit_view_dashboard",
                c = "googlesitekit_manage_options",
                l = "googlesitekit_read_shared_module_data"
        },
        134: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(8),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = function Badge(t) {
                        var n = t.label,
                            r = t.className;
                        return e.createElement("span", {
                            className: a()("googlesitekit-badge", r)
                        }, n)
                    };
                c.displayName = "Badge", c.propTypes = {
                    label: o.a.string.isRequired
                }, t.a = c
            }).call(this, n(3))
        },
        135: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Checkbox
                }));
                var r = n(8),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = n(2),
                    l = n(103);

                function Checkbox(t) {
                    var n = t.onChange,
                        r = t.id,
                        i = t.name,
                        o = t.value,
                        s = t.checked,
                        u = t.disabled,
                        d = t.children,
                        f = t.tabIndex,
                        g = t.onKeyDown,
                        p = t.loading;
                    return e.createElement("div", {
                        className: "mdc-form-field"
                    }, e.createElement("div", {
                        className: a()("mdc-checkbox", {
                            "mdc-checkbox--disabled": u
                        })
                    }, p ? e.createElement(l.a, {
                        isSaving: !0,
                        style: {
                            margin: "0"
                        }
                    }) : e.createElement(c.Fragment, null, e.createElement("input", {
                        className: "mdc-checkbox__native-control",
                        type: "checkbox",
                        id: r,
                        name: i,
                        value: o,
                        checked: s,
                        disabled: u,
                        onChange: n,
                        tabIndex: f,
                        onKeyDown: g
                    }), e.createElement("div", {
                        className: "mdc-checkbox__background"
                    }, e.createElement("svg", {
                        className: "mdc-checkbox__checkmark",
                        viewBox: "0 0 24 24"
                    }, e.createElement("path", {
                        className: "mdc-checkbox__checkmark-path",
                        fill: "none",
                        d: "M1.73,12.91 8.1,19.28 22.79,4.59"
                    })), e.createElement("div", {
                        className: "mdc-checkbox__mixedmark"
                    })))), e.createElement("label", {
                        htmlFor: r
                    }, d))
                }
                Checkbox.propTypes = {
                    onChange: o.a.func.isRequired,
                    onKeyDown: o.a.func,
                    id: o.a.string.isRequired,
                    name: o.a.string.isRequired,
                    value: o.a.string.isRequired,
                    checked: o.a.bool,
                    disabled: o.a.bool,
                    children: o.a.node.isRequired,
                    tabIndex: o.a.oneOfType([o.a.number, o.a.string]),
                    loading: o.a.bool
                }, Checkbox.defaultProps = {
                    checked: !1,
                    disabled: !1,
                    tabIndex: void 0,
                    onKeyDown: null,
                    loading: !1
                }
            }).call(this, n(3))
        },
        138: function(e, t, n) {
            "use strict";
            var r = n(2),
                a = Object(r.createContext)(!1);
            t.a = a
        },
        139: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                d: "M3.332 24.75h21.335c2.182 0 3.542-2.366 2.451-4.25L16.451 2.07C15.36.184 12.64.184 11.549 2.07L.882 20.5c-1.091 1.884.269 4.25 2.45 4.25zM14 14.833a1.42 1.42 0 01-1.417-1.416v-2.834c0-.779.638-1.416 1.417-1.416.78 0 1.417.637 1.417 1.416v2.834A1.42 1.42 0 0114 14.833zm1.417 5.667h-2.834v-2.833h2.834V20.5z",
                fill: "currentColor",
                fillRule: "nonzero"
            });
            t.a = function SvgError(e) {
                return r.createElement("svg", a({
                    viewBox: "0 0 28 25"
                }, e), i)
            }
        },
        140: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(9),
                a = n.n(r),
                i = function(e, t) {
                    var n = t.dateRangeLength;
                    a()(Array.isArray(e), "report must be an array to partition."), a()(Number.isInteger(n) && n > 0, "dateRangeLength must be a positive integer.");
                    var r = -1 * n;
                    return {
                        currentRange: e.slice(r),
                        compareRange: e.slice(2 * r, r)
                    }
                }
        },
        141: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return s
            })), n.d(t, "c", (function() {
                return p
            })), n.d(t, "b", (function() {
                return m.a
            })), n.d(t, "d", (function() {
                return v
            })), n.d(t, "a", (function() {
                return h
            }));
            var r = n(380),
                a = n.n(r),
                i = n(342),
                o = n.n(i),
                c = n(11),
                l = n(140);

            function s(e) {
                if (void 0 !== e) return !Array.isArray(e) || !e.length || !e.some((function(e) {
                    return e.clicks > 0 || e.ctr > 0 || e.impressions > 0 || e.position > 0
                }))
            }
            var u = n(8),
                d = n.n(u),
                f = n(1),
                g = n(59),
                p = function(e, t, n, r, a) {
                    var i = [
                            [{
                                type: "date",
                                label: Object(f.__)("Day", "google-site-kit")
                            }, {
                                type: "string",
                                role: "tooltip",
                                p: {
                                    html: !0
                                }
                            }, {
                                type: "number",
                                label: n
                            }, {
                                type: "number",
                                label: Object(f.__)("Previous period", "google-site-kit")
                            }]
                        ],
                        o = Object(c.j)(),
                        l = {
                            weekday: "short",
                            month: "short",
                            day: "numeric"
                        };
                    return e.forEach((function(e, s) {
                        var u, p, m = e[r],
                            v = e.keys[0],
                            b = (null === (u = t[s]) || void 0 === u ? void 0 : u[r]) || 0,
                            h = (null === (p = t[s]) || void 0 === p ? void 0 : p.keys[0]) || Object(g.f)(v, a),
                            y = Object(f.sprintf)(
                                /* translators: 1: date for user stats, 2: previous date for user stats comparison */
                                Object(f._x)("%1$s vs %2$s", "Date range for chart tooltip", "google-site-kit"), Object(g.i)(v).toLocaleDateString(o, l), Object(g.i)(h).toLocaleDateString(o, l)),
                            O = Object(c.a)(b, m),
                            k = Object(c.b)(m, b),
                            E = Object(c.h)(k),
                            _ = Object(f.sprintf)(
                                /* translators: 1: selected stat label, 2: numeric value of selected stat, 3: up or down arrow , 4: different change in percentage, %%: percent symbol */
                                Object(f._x)("%1$s: <strong>%2$s</strong> <em>%3$s %4$s%%</em>", "Stat information for chart tooltip", "google-site-kit"), n, Math.abs(m).toFixed(2).replace(/(.00|0)$/, ""), E, Object(c.r)(O));
                        i.push([Object(g.i)(v), '<div class="'.concat(d()("googlesitekit-visualization-tooltip", {
                            "googlesitekit-visualization-tooltip--up": k > 0,
                            "googlesitekit-visualization-tooltip--down": k < 0
                        }), '">\n\t\t\t\t<p>').concat(y, "</p>\n\t\t\t\t<p>").concat(_, "</p>\n\t\t\t</div>"), m, b])
                    })), i
                },
                m = n(281);

            function v(e) {
                return "string" == typeof e && e.length > 0
            }

            function b(e) {
                var t = [
                        [{
                            type: "string",
                            label: "Day"
                        }, {
                            type: "number",
                            label: "Clicks"
                        }, {
                            type: "number",
                            label: "Impressions"
                        }, {
                            type: "number",
                            label: "CTR"
                        }, {
                            type: "number",
                            label: "Position"
                        }]
                    ],
                    n = 0,
                    r = 0,
                    i = 0,
                    c = 0,
                    l = e.length;
                return a()(e, (function(e) {
                    var a = new Date(e.keys[0]);
                    t.push([a.getMonth() + 1 + "/" + a.getUTCDate(), e.clicks, e.impressions, o()(e.ctr, 3), o()(e.position, 3)]), n += e.clicks, r += e.impressions, i += e.ctr, c += e.position
                })), {
                    dataMap: t,
                    totalClicks: n,
                    totalImpressions: r,
                    averageCTR: l > 0 ? i / l : 0,
                    averagePosition: l > 0 ? c / l : 0
                }
            }
            var h = function(e, t) {
                var n = Object(l.a)(e, {
                        dateRangeLength: t
                    }),
                    r = n.compareRange,
                    a = b(n.currentRange),
                    i = b(r);
                return {
                    dataMap: a.dataMap,
                    totalClicks: a.totalClicks,
                    totalImpressions: a.totalImpressions,
                    averageCTR: a.averageCTR,
                    averagePosition: a.averagePosition,
                    totalClicksChange: Object(c.a)(i.totalClicks, a.totalClicks),
                    totalImpressionsChange: Object(c.a)(i.totalImpressions, a.totalImpressions),
                    averageCTRChange: Object(c.a)(i.averageCTR, a.averageCTR),
                    averagePositionChange: Object(c.a)(i.averagePosition, a.averagePosition)
                }
            }
        },
        143: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(1);

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t || {},
                    a = n.slug,
                    i = void 0 === a ? "" : a,
                    o = n.name,
                    c = void 0 === o ? "" : o,
                    l = n.owner,
                    s = void 0 === l ? {} : l;
                if (!i || !c) return e;
                var u = "",
                    d = "";
                return "analytics" === i ? e.match(/account/i) ? u = Object(r.__)("Your Google account does not have sufficient permissions for this Analytics account, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/property/i) ? u = Object(r.__)("Your Google account does not have sufficient permissions for this Analytics property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/view/i) && (u = Object(r.__)("Your Google account does not have sufficient permissions for this Analytics view, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")) : "search-console" === i && (u = Object(r.__)("Your Google account does not have sufficient permissions for this Search Console property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")), u || (u = Object(r.sprintf)(
                    /* translators: %s: module name */
                    Object(r.__)("Your Google account does not have sufficient permissions to access %s data, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit"), c)), s && s.login && (d = Object(r.sprintf)(
                    /* translators: %s: owner name */
                    Object(r.__)('This service was originally connected by the administrator "%s" — you can contact them for more information.', "google-site-kit"), s.login)), d || (d = Object(r.__)("This service was originally connected by an administrator — you can contact them for more information.", "google-site-kit")), "".concat(u, " ").concat(d)
            }
        },
        144: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return FeatureTours
                }));
                var r = n(2),
                    a = n(4),
                    i = n.n(a),
                    o = n(20),
                    c = n(13),
                    l = n(169),
                    s = i.a.useSelect;

                function FeatureTours() {
                    var t = Object(r.useContext)(o.b),
                        n = s((function(e) {
                            var n;
                            return null === (n = e(c.a).getFeatureToursForView(t)) || void 0 === n ? void 0 : n[0]
                        })),
                        a = s((function(e) {
                            return e(c.a).areFeatureToursOnCooldown()
                        }));
                    return !n || a ? null : e.createElement(l.a, {
                        tourID: n.slug,
                        steps: n.steps,
                        gaEventCategory: n.gaEventCategory,
                        callback: n.callback
                    })
                }
            }).call(this, n(3))
        },
        146: function(e, t, n) {
            "use strict";
            var r = n(138),
                a = (r.a.Consumer, r.a.Provider);
            t.a = a
        },
        148: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ModuleIcon
                }));
                var r = n(16),
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    l = n.n(c),
                    s = n(4),
                    u = n.n(s),
                    d = n(22),
                    f = u.a.useSelect;

                function ModuleIcon(t) {
                    var n = t.slug,
                        r = t.size,
                        i = o()(t, ["slug", "size"]),
                        c = f((function(e) {
                            return e(d.a).getModuleIcon(n)
                        }));
                    return c ? e.createElement(c, a()({
                        width: r,
                        height: r
                    }, i)) : null
                }
                ModuleIcon.propTypes = {
                    slug: l.a.string.isRequired,
                    size: l.a.number
                }, ModuleIcon.defaultProps = {
                    size: 33
                }
            }).call(this, n(3))
        },
        15: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return i
            }));
            var r = "core/site",
                a = "primary",
                i = "secondary"
        },
        155: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }),
                o = r.createElement("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                });
            t.a = function SvgWarning(e) {
                return r.createElement("svg", a({
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    "aria-labelledby": "warning-title warning-desc"
                }, e), i, o)
            }
        },
        159: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                d: "M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z",
                fill: "currentColor"
            });
            t.a = function SvgClose(e) {
                return r.createElement("svg", a({
                    viewBox: "0 0 14 14",
                    fill: "none"
                }, e), i)
            }
        },
        160: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(8),
                    o = n.n(i),
                    c = n(2),
                    l = n(7),
                    s = function Radio(t) {
                        var n = t.onClick,
                            r = t.id,
                            a = t.name,
                            i = t.value,
                            s = t.checked,
                            u = t.disabled,
                            d = t.children,
                            f = t.tabIndex,
                            g = t.onKeyDown,
                            p = Object(c.useCallback)((function(e) {
                                if (null !== e) {
                                    var t = new l.f(e),
                                        n = e.querySelector(".mdc-radio");
                                    n && (t.input = new l.h(n))
                                }
                            }), []);
                        return e.createElement("div", {
                            className: "mdc-form-field",
                            ref: p
                        }, e.createElement("div", {
                            className: o()("mdc-radio", {
                                "mdc-radio--disabled": u
                            })
                        }, e.createElement("input", {
                            className: "mdc-radio__native-control",
                            onClick: n,
                            onKeyDown: g,
                            type: "radio",
                            id: r,
                            name: a,
                            value: i,
                            checked: s,
                            disabled: u,
                            tabIndex: f,
                            readOnly: !0
                        }), e.createElement("div", {
                            className: "mdc-radio__background"
                        }, e.createElement("div", {
                            className: "mdc-radio__outer-circle"
                        }), e.createElement("div", {
                            className: "mdc-radio__inner-circle"
                        }))), e.createElement("label", {
                            htmlFor: r
                        }, d))
                    };
                s.propTypes = {
                    onClick: a.a.func,
                    onKeyDown: a.a.func,
                    id: a.a.string.isRequired,
                    name: a.a.string.isRequired,
                    value: a.a.string.isRequired,
                    checked: a.a.bool,
                    disabled: a.a.bool,
                    children: a.a.string.isRequired,
                    tabIndex: a.a.oneOfType([a.a.number, a.a.string])
                }, s.defaultProps = {
                    onClick: null,
                    onKeyDown: null,
                    checked: !1,
                    disabled: !1,
                    tabIndex: void 0
                }, t.a = s
            }).call(this, n(3))
        },
        163: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Root
                }));
                var r = n(12),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = n(2),
                    l = n(4),
                    s = n.n(l),
                    u = n(164),
                    d = n(165),
                    f = n(30),
                    g = n(166),
                    p = n(167),
                    m = n(168),
                    v = n(172),
                    b = n(20),
                    h = n(146);

                function Root(t) {
                    var n = t.children,
                        r = t.registry,
                        i = t.viewContext,
                        o = void 0 === i ? null : i,
                        l = Object(c.useState)({
                            key: "Root",
                            value: !0
                        }),
                        y = a()(l, 1)[0];
                    return e.createElement(h.a, {
                        value: y
                    }, e.createElement(s.a.RegistryProvider, {
                        value: r
                    }, e.createElement(d.a, {
                        value: f.a
                    }, e.createElement(b.a, {
                        value: o
                    }, e.createElement(u.a, null, e.createElement(p.a, null, n, o && e.createElement(m.a, null), e.createElement(v.a, null)), e.createElement(g.a, null))))))
                }
                Root.propTypes = {
                    children: o.a.node,
                    registry: o.a.object,
                    viewContext: o.a.string.isRequired
                }, Root.defaultProps = {
                    registry: s.a
                }
            }).call(this, n(3))
        },
        164: function(e, t, n) {
            "use strict";
            (function(e, r) {
                var a = n(46),
                    i = n.n(a),
                    o = n(47),
                    c = n.n(o),
                    l = n(77),
                    s = n.n(l),
                    u = n(70),
                    d = n.n(u),
                    f = n(71),
                    g = n.n(f),
                    p = n(49),
                    m = n.n(p),
                    v = n(235),
                    b = n.n(v),
                    h = n(0),
                    y = n.n(h),
                    O = n(2),
                    k = n(1),
                    E = n(212),
                    _ = n(334),
                    w = n(335),
                    j = n(20),
                    S = n(44),
                    C = n(21),
                    N = n(19),
                    x = n(11);

                function R(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = m()(e);
                        if (t) {
                            var a = m()(this).constructor;
                            n = Reflect.construct(r, arguments, a)
                        } else n = r.apply(this, arguments);
                        return g()(this, n)
                    }
                }
                var D = function(t) {
                    d()(ErrorHandler, t);
                    var n = R(ErrorHandler);

                    function ErrorHandler(e) {
                        var t;
                        return i()(this, ErrorHandler), (t = n.call(this, e)).state = {
                            error: null,
                            info: null,
                            copied: !1
                        }, t.onErrorClick = t.onErrorClick.bind(s()(t)), t
                    }
                    return c()(ErrorHandler, [{
                        key: "componentDidCatch",
                        value: function(t, n) {
                            e.console.error("Caught an error:", t, n), this.setState({
                                error: t,
                                info: n
                            }), Object(x.w)("react_error", "handle_".concat(this.context || "unknown", "_error"), "".concat(null == t ? void 0 : t.message, "\n").concat(null == n ? void 0 : n.componentStack).slice(0, 500))
                        }
                    }, {
                        key: "onErrorClick",
                        value: function() {
                            var e = this.state,
                                t = e.error,
                                n = e.info;
                            b()("`".concat(null == t ? void 0 : t.message, "\n").concat(null == n ? void 0 : n.componentStack, "`")), this.setState({
                                copied: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.children,
                                t = this.state,
                                n = t.error,
                                a = t.info,
                                i = t.copied;
                            if (!n) return e;
                            var o = r.createElement(E.a, {
                                className: "mdc-button__icon",
                                icon: i ? _.a : w.a
                            });
                            return r.createElement(S.b, {
                                id: "googlesitekit-error",
                                title: Object(k.__)("Site Kit encountered an error", "google-site-kit"),
                                description: r.createElement(O.Fragment, null, r.createElement(N.a, {
                                    trailingIcon: o,
                                    onClick: this.onErrorClick
                                }, Object(k.__)("Copy error to clipboard", "google-site-kit")), r.createElement(C.a, {
                                    href: "https://wordpress.org/support/plugin/google-site-kit/",
                                    external: !0
                                }, Object(k.__)("Report this problem", "google-site-kit"))),
                                isDismissible: !1,
                                format: "small",
                                type: "win-error"
                            }, r.createElement("pre", {
                                className: "googlesitekit-overflow-auto"
                            }, n.message, a.componentStack))
                        }
                    }]), ErrorHandler
                }(O.Component);
                D.contextType = j.b, D.propTypes = {
                    children: y.a.node.isRequired
                }, t.a = D
            }).call(this, n(18), n(3))
        },
        165: function(e, t, n) {
            "use strict";
            var r = n(94),
                a = (r.a.Consumer, r.a.Provider);
            t.a = a
        },
        166: function(e, t, n) {
            "use strict";
            (function(e, r) {
                var a = n(5),
                    i = n.n(a),
                    o = n(14),
                    c = n.n(o),
                    l = n(1),
                    s = n(2),
                    u = n(4),
                    d = n.n(u),
                    f = n(13),
                    g = n(38),
                    p = n(98),
                    m = n(123),
                    v = n(97),
                    b = d.a.useSelect,
                    h = d.a.useDispatch,
                    y = d.a.useRegistry;
                t.a = function PermissionsModal() {
                    var t, n, a, o = y(),
                        u = b((function(e) {
                            return e(f.a).getPermissionScopeError()
                        })),
                        d = b((function(t) {
                            var n;
                            return t(f.a).getConnectURL({
                                additionalScopes: null == u || null === (n = u.data) || void 0 === n ? void 0 : n.scopes,
                                redirectURL: e.location.href
                            })
                        })),
                        O = h(f.a).clearPermissionScopeError,
                        k = h(g.a).navigateTo,
                        E = Object(s.useCallback)((function() {
                            O()
                        }), [O]),
                        _ = Object(s.useCallback)(c()(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(p.c)(o);
                                    case 2:
                                        k(d);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [o, d, k]);
                    return Object(s.useEffect)((function() {
                        (function() {
                            var e = c()(i.a.mark((function e() {
                                var t, n, r;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(null == u || null === (t = u.data) || void 0 === t ? void 0 : t.skipModal) || !(null == u || null === (n = u.data) || void 0 === n || null === (r = n.scopes) || void 0 === r ? void 0 : r.length)) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.next = 3, _();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [_, u]), u ? (null == u || null === (t = u.data) || void 0 === t || null === (n = t.scopes) || void 0 === n ? void 0 : n.length) ? (null == u || null === (a = u.data) || void 0 === a ? void 0 : a.skipModal) ? null : r.createElement(v.a, null, r.createElement(m.a, {
                        title: Object(l.__)("Additional Permissions Required", "google-site-kit"),
                        subtitle: u.message,
                        confirmButton: Object(l.__)("Proceed", "google-site-kit"),
                        dialogActive: !0,
                        handleConfirm: _,
                        handleDialog: E
                    })) : (e.console.warn("permissionsError lacks scopes array to use for redirect, so not showing the PermissionsModal. permissionsError was:", u), null) : null
                }
            }).call(this, n(18), n(3))
        },
        167: function(e, t, n) {
            "use strict";
            var r = n(5),
                a = n.n(r),
                i = n(14),
                o = n.n(i),
                c = n(12),
                l = n.n(c),
                s = n(2),
                u = n(4),
                d = n.n(u),
                f = n(98),
                g = d.a.useRegistry;
            t.a = function RestoreSnapshots(e) {
                var t = e.children,
                    n = g(),
                    r = Object(s.useState)(!1),
                    i = l()(r, 2),
                    c = i[0],
                    u = i[1];
                return Object(s.useEffect)((function() {
                    c || o()(a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(f.b)(n);
                                case 2:
                                    u(!0);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [n, c]), c ? t : null
            }
        },
        168: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return FeatureToursDesktop
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(125),
                    o = n(144);

                function c(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function FeatureToursDesktop(t) {
                    return Object(i.a)() < 783 ? null : e.createElement(o.a, t)
                }
                FeatureToursDesktop.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, o.a.propTypes)
            }).call(this, n(3))
        },
        169: function(e, t, n) {
            "use strict";
            (function(e, r) {
                n.d(t, "a", (function() {
                    return TourTooltips
                }));
                var a = n(6),
                    i = n.n(a),
                    o = n(99),
                    c = n(32),
                    l = n(0),
                    s = n.n(l),
                    u = n(1),
                    d = n(2),
                    f = n(4),
                    g = n.n(f),
                    p = n(43),
                    m = n(13),
                    v = n(31),
                    b = n(20),
                    h = n(170);

                function y(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                var O = g.a.useSelect,
                    k = g.a.useDispatch,
                    E = {
                        options: {
                            arrowColor: "#1A73E8",
                            backgroundColor: "#1A73E8",
                            overlayColor: "rgba(0, 0, 0, 0.6)",
                            textColor: "#ffffff"
                        }
                    },
                    _ = {
                        back: Object(u.__)("Back", "google-site-kit"),
                        close: Object(u.__)("Close", "google-site-kit"),
                        last: Object(u.__)("Got it", "google-site-kit"),
                        next: Object(u.__)("Next", "google-site-kit")
                    },
                    w = {
                        disableAnimation: !0,
                        styles: {
                            arrow: {
                                length: 8,
                                margin: 56,
                                spread: 16
                            },
                            floater: {
                                filter: "drop-shadow(rgba(60, 64, 67, 0.3) 0px 1px 2px) drop-shadow(rgba(60, 64, 67, 0.15) 0px 2px 6px)"
                            }
                        }
                    },
                    j = "feature_tooltip_view",
                    S = "feature_tooltip_advance",
                    C = "feature_tooltip_return",
                    N = "feature_tooltip_dismiss",
                    x = "feature_tooltip_complete";

                function TourTooltips(t) {
                    var n = t.steps,
                        a = t.tourID,
                        l = t.gaEventCategory,
                        s = t.callback,
                        u = "".concat(a, "-step"),
                        f = "".concat(a, "-run"),
                        g = k(p.b).setValue,
                        R = k(m.a).dismissTour,
                        D = Object(d.useContext)(b.b),
                        T = O((function(e) {
                            return e(p.b).getValue(u)
                        })),
                        P = O((function(e) {
                            return e(p.b).getValue(f) && !1 === e(m.a).isTourDismissed(a)
                        }));
                    Object(o.a)((function() {
                        e.document.body.classList.add("googlesitekit-showing-feature-tour"), g(f, !0)
                    }));
                    var A = n.map((function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? y(Object(n), !0).forEach((function(t) {
                                    i()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            disableBeacon: !0,
                            isFixed: !0,
                            placement: "auto"
                        }, e)
                    }));
                    return r.createElement(c.e, {
                        callback: function(t) {
                            ! function(e) {
                                var t = e.index,
                                    n = e.action,
                                    r = e.lifecycle,
                                    a = e.size,
                                    i = e.status,
                                    o = e.type,
                                    s = t + 1,
                                    u = "function" == typeof l ? l(D) : l;
                                o === c.b.TOOLTIP && r === c.c.TOOLTIP ? Object(v.b)(u, j, s) : n === c.a.CLOSE && r === c.c.COMPLETE ? Object(v.b)(u, N, s) : n === c.a.NEXT && i === c.d.FINISHED && o === c.b.TOUR_END && a === s && Object(v.b)(u, x, s), r === c.c.COMPLETE && i !== c.d.FINISHED && (n === c.a.PREV && Object(v.b)(u, C, s), n === c.a.NEXT && Object(v.b)(u, S, s))
                            }(t);
                            var n = t.action,
                                r = t.index,
                                i = t.status,
                                o = t.step,
                                d = t.type,
                                f = n === c.a.CLOSE,
                                p = !f && [c.b.STEP_AFTER, c.b.TARGET_NOT_FOUND].includes(d),
                                m = [c.d.FINISHED, c.d.SKIPPED].includes(i),
                                b = f && d === c.b.STEP_AFTER,
                                h = m || b;
                            if (c.b.STEP_BEFORE === d) {
                                var y, O, k = o.target;
                                "string" == typeof o.target && (k = e.document.querySelector(o.target)), null === (y = k) || void 0 === y || null === (O = y.scrollIntoView) || void 0 === O || O.call(y, {
                                    block: "center"
                                })
                            }
                            p ? function(e, t) {
                                g(u, e + (t === c.a.PREV ? -1 : 1))
                            }(r, n) : h && (e.document.body.classList.remove("googlesitekit-showing-feature-tour"), R(a)), s && s(t)
                        },
                        continuous: !0,
                        disableOverlayClose: !0,
                        disableScrolling: !0,
                        floaterProps: w,
                        locale: _,
                        run: P,
                        showProgress: !0,
                        stepIndex: T,
                        steps: A,
                        styles: E,
                        tooltipComponent: h.a
                    })
                }
                TourTooltips.propTypes = {
                    steps: s.a.arrayOf(s.a.object).isRequired,
                    tourID: s.a.string.isRequired,
                    gaEventCategory: s.a.oneOfType([s.a.string, s.a.func]).isRequired,
                    callback: s.a.func
                }
            }).call(this, n(18), n(3))
        },
        170: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return TourTooltip
                }));
                var r = n(16),
                    a = n.n(r),
                    i = n(161),
                    o = n.n(i),
                    c = n(8),
                    l = n.n(c),
                    s = n(0),
                    u = n.n(s),
                    d = n(171),
                    f = n(159),
                    g = n(19);

                function TourTooltip(t) {
                    var n = t.backProps,
                        r = t.closeProps,
                        c = t.index,
                        s = t.primaryProps,
                        u = t.size,
                        p = t.step,
                        m = t.tooltipProps,
                        v = u > 1 ? Object(d.a)(u) : [],
                        b = function(e) {
                            return l()("googlesitekit-tooltip-indicator", {
                                active: e === c
                            })
                        };
                    return e.createElement("div", a()({
                        className: "googlesitekit-tour-tooltip"
                    }, m), e.createElement(o.a, {
                        className: "googlesitekit-tooltip-card"
                    }, e.createElement("div", {
                        className: "googlesitekit-tooltip-body"
                    }, e.createElement("h2", {
                        className: "googlesitekit-tooltip-title"
                    }, p.title), e.createElement("div", {
                        className: "googlesitekit-tooltip-content"
                    }, p.content)), e.createElement(i.CardActions, {
                        className: "googlesitekit-tooltip-actions"
                    }, e.createElement("ul", {
                        className: "googlesitekit-tooltip-indicators"
                    }, v.map((function(t) {
                        return e.createElement("li", {
                            key: "indicator-".concat(t),
                            className: b(t)
                        })
                    }))), e.createElement("div", {
                        className: "googlesitekit-tooltip-buttons"
                    }, 0 !== c && e.createElement(g.a, a()({
                        className: "googlesitekit-tooltip-button",
                        text: !0
                    }, n), n.title), e.createElement(g.a, a()({
                        className: "googlesitekit-tooltip-button",
                        text: !0
                    }, s), s.title))), e.createElement(g.a, a()({
                        className: "googlesitekit-tooltip-close",
                        text: !0,
                        icon: e.createElement(f.a, {
                            width: "14",
                            height: "14"
                        })
                    }, r))))
                }
                TourTooltip.propTypes = {
                    backProps: u.a.object.isRequired,
                    closeProps: u.a.object.isRequired,
                    index: u.a.number.isRequired,
                    isLastStep: u.a.bool.isRequired,
                    primaryProps: u.a.object.isRequired,
                    size: u.a.number.isRequired,
                    step: u.a.shape({
                        content: u.a.node.isRequired,
                        title: u.a.node.isRequired
                    }).isRequired,
                    tooltipProps: u.a.object.isRequired
                }
            }).call(this, n(3))
        },
        171: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return new Array(null != e ? e : 0).fill().map((function(e, t) {
                    return t
                }))
            }
        },
        172: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(4),
                    a = n.n(r),
                    i = n(15),
                    o = n(13),
                    c = n(173),
                    l = n(97),
                    s = a.a.useSelect;
                t.a = function CurrentSurveyPortal() {
                    var t = s((function(e) {
                            return e(i.c).isUsingProxy()
                        })),
                        n = s((function(e) {
                            return e(o.a).getCurrentSurvey()
                        }));
                    return t && n ? e.createElement(l.a, {
                        slug: "survey"
                    }, e.createElement(c.a, null)) : null
                }
            }).call(this, n(3))
        },
        173: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return CurrentSurvey
                }));
                var r = n(16),
                    a = n.n(r),
                    i = n(23),
                    o = n.n(i),
                    c = n(6),
                    l = n.n(c),
                    s = n(12),
                    u = n.n(s),
                    d = n(99),
                    f = n(239),
                    g = n(2),
                    p = n(1),
                    m = n(4),
                    v = n.n(m),
                    b = n(36),
                    h = n(13),
                    y = n(174),
                    O = n(175),
                    k = n(182),
                    E = n(183),
                    _ = n(184),
                    w = n(186);

                function j(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return S(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
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
                        c = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            c = !0, i = e
                        },
                        f: function() {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                    }
                }

                function S(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function C(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function N(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? C(Object(n), !0).forEach((function(t) {
                            l()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var x = v.a.useDispatch,
                    R = v.a.useSelect,
                    D = ["multi_select", "open_text", "rating", "single_select"];

                function CurrentSurvey() {
                    var t = Object(g.useState)(!1),
                        n = u()(t, 2),
                        r = n[0],
                        i = n[1],
                        c = Object(g.useState)(!1),
                        s = u()(c, 2),
                        m = s[0],
                        v = s[1],
                        S = Object(g.useState)(!1),
                        C = u()(S, 2),
                        T = C[0],
                        P = C[1],
                        A = Object(g.useState)(!1),
                        L = u()(A, 2),
                        M = L[0],
                        q = L[1],
                        I = R((function(e) {
                            return e(h.a).getCurrentSurveyCompletions()
                        })),
                        z = R((function(e) {
                            return e(h.a).getCurrentSurveyQuestions()
                        })),
                        B = R((function(e) {
                            return e(h.a).getCurrentSurveySession()
                        })),
                        F = R((function(e) {
                            return e(h.a).isTrackingEnabled()
                        })),
                        U = B ? "survey-".concat(B.session_id) : null,
                        W = R((function(e) {
                            return e(b.a).getValue(U, "hideSurvey")
                        })),
                        H = R((function(e) {
                            return e(b.a).getValue(U, "answers") || []
                        })),
                        G = x(b.a).setValues,
                        V = x(h.a).sendSurveyEvent;
                    Object(g.useEffect)((function() {
                        (null == z ? void 0 : z.length) && !r && (i(!0), V("survey_shown"))
                    }), [z, r, V]);
                    var K, Q = H.reduce((function(e, t) {
                            return N(N({}, e), {}, l()({}, t.question_ordinal, t.answer.answer.answer_ordinal))
                        }), {}),
                        $ = Math.max.apply(Math, [0].concat(o()(H.map((function(e) {
                            return e.question_ordinal
                        }))))) + 1,
                        Z = null == z ? void 0 : z.find((function(e) {
                            var t = e.question_ordinal,
                                n = e.trigger_condition;
                            if (Array.isArray(n) && n.length > 0) {
                                var r, a = j(n);
                                try {
                                    for (a.s(); !(r = a.n()).done;) {
                                        var i = r.value,
                                            o = Q[i.question_ordinal],
                                            c = i.answer_ordinal || [];
                                        if (o && !c.includes(o)) return $++, !1
                                    }
                                } catch (e) {
                                    a.e(e)
                                } finally {
                                    a.f()
                                }
                            }
                            return t === $
                        })),
                        X = Object(g.useCallback)((function(e) {
                            M || (q(!0), V("question_answered", {
                                question_ordinal: null == Z ? void 0 : Z.question_ordinal,
                                answer: e
                            }), setTimeout((function() {
                                G(U, {
                                    answers: [].concat(o()(H), [{
                                        question_ordinal: null == Z ? void 0 : Z.question_ordinal,
                                        answer: e
                                    }])
                                }), q(!1)
                            }), 300))
                        }), [H, Z, U, V, G, M]);
                    (null == z ? void 0 : z.length) && $ > z.length && ((K = (I || []).find((function(e) {
                        var t, n = j(e.trigger_condition || []);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                if (r.answer_ordinal.includes(Q[r.question_ordinal])) return K = e, !0
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return !1
                    }))) || (K = I[0]));
                    var J = Object(g.useCallback)((function() {
                            var e;
                            V("follow_up_link_clicked", {
                                completion_ordinal: null === (e = K) || void 0 === e ? void 0 : e.completion_ordinal
                            }), V("survey_closed"), G(U, {
                                hideSurvey: !0
                            })
                        }), [U, V, G, K]),
                        Y = Object(g.useCallback)((function() {
                            V("survey_closed"), P(!1)
                        }), [V]),
                        ee = Object(g.useCallback)((function() {
                            G(U, {
                                hideSurvey: !0
                            })
                        }), [U, G]);
                    if (Object(g.useEffect)((function() {
                            var e;
                            K && !m && (v(!0), V("completion_shown", {
                                completion_ordinal: null === (e = K) || void 0 === e ? void 0 : e.completion_ordinal
                            }))
                        }), [m, V, K]), Object(d.a)((function() {
                            P(!0)
                        })), W || !z || !I || void 0 === F) return null;
                    if (K) return e.createElement(f.a, {
                        direction: "up",
                        in: T,
                        onExited: ee
                    }, e.createElement("div", {
                        className: "googlesitekit-survey"
                    }, e.createElement(y.a, {
                        dismissSurvey: Y,
                        ctaOnClick: J,
                        ctaText: K.follow_up_text,
                        ctaURL: K.follow_up_url,
                        title: K.completion_title
                    }, K.completion_text)));
                    if (!D.includes(null == Z ? void 0 : Z.question_type)) return null;
                    var te = {
                        key: Z.question_text,
                        answerQuestion: X,
                        dismissSurvey: Y,
                        question: Z.question_text,
                        submitButtonText: (null == z ? void 0 : z.length) === $ ? Object(p.__)("Submit", "google-site-kit") : Object(p.__)("Next", "google-site-kit")
                    };
                    return e.createElement(f.a, {
                        direction: "up",
                        in: T,
                        onExited: ee
                    }, e.createElement("div", {
                        className: "googlesitekit-survey"
                    }, "multi_select" === Z.question_type && e.createElement(E.a, a()({}, te, {
                        choices: Z.question.answer_choice,
                        minChoices: Z.question.min_choices,
                        maxChoices: Z.question.max_choices
                    })), "open_text" === Z.question_type && e.createElement(k.a, a()({}, te, {
                        subtitle: Z.question.subtitle,
                        placeholder: Z.question.placeholder
                    })), "rating" === Z.question_type && e.createElement(O.a, a()({}, te, {
                        choices: Z.question.answer_choice
                    })), "single_select" === Z.question_type && e.createElement(_.a, a()({}, te, {
                        choices: Z.question.answer_choice
                    })), !1 === F && 1 === (null == Z ? void 0 : Z.question_ordinal) && e.createElement("div", {
                        className: "googlesitekit-survey__footer"
                    }, e.createElement(w.a, null))))
                }
            }).call(this, n(3))
        },
        174: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(19),
                    o = n(60),
                    c = function SurveyCompletion(t) {
                        var n = t.title,
                            r = t.children,
                            a = t.ctaText,
                            c = t.ctaURL,
                            l = t.ctaOnClick,
                            s = t.dismissSurvey;
                        return e.createElement("div", {
                            className: "googlesitekit-survey__completion"
                        }, e.createElement(o.a, {
                            title: n,
                            dismissSurvey: s
                        }), e.createElement("div", {
                            className: "googlesitekit-survey__body"
                        }, r), c && a && e.createElement("div", {
                            className: "googlesitekit-survey__footer"
                        }, e.createElement(i.a, {
                            href: c,
                            onClick: l,
                            target: "_blank"
                        }, a)))
                    };
                c.propTypes = {
                    title: a.a.string.isRequired,
                    children: a.a.node,
                    ctaText: a.a.string,
                    ctaURL: a.a.string,
                    ctaOnClick: a.a.func,
                    dismissSurvey: a.a.func.isRequired
                }, c.defaultProps = {
                    title: "",
                    children: null,
                    ctaText: "",
                    ctaURL: "",
                    ctaOnClick: null
                }, t.a = c
            }).call(this, n(3))
        },
        175: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(60),
                    o = n(176),
                    c = function SurveyQuestionRating(t) {
                        var n = t.question,
                            r = t.choices,
                            a = t.answerQuestion,
                            c = t.dismissSurvey;
                        return e.createElement("div", {
                            className: "googlesitekit-survey__question-rating"
                        }, e.createElement(i.a, {
                            title: n,
                            dismissSurvey: c
                        }), e.createElement("div", {
                            className: "googlesitekit-survey__body"
                        }, e.createElement("div", {
                            className: "googlesitekit-survey__choices"
                        }, r.map((function(t, n) {
                            return e.createElement(o.a, {
                                key: n,
                                choice: t,
                                answerQuestion: a
                            })
                        })))))
                    };
                c.propTypes = {
                    question: a.a.string.isRequired,
                    choices: a.a.arrayOf(a.a.shape({
                        answer_ordinal: a.a.oneOfType([a.a.string, a.a.number]),
                        text: a.a.string
                    })).isRequired,
                    answerQuestion: a.a.func.isRequired,
                    dismissSurvey: a.a.func.isRequired
                }, t.a = c
            }).call(this, n(3))
        },
        176: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(2),
                    o = n(19),
                    c = n(177),
                    l = n(178),
                    s = n(179),
                    u = n(180),
                    d = n(181),
                    f = {
                        1: c.a,
                        2: l.a,
                        3: s.a,
                        4: u.a,
                        5: d.a
                    },
                    g = function SurveyQuestionRatingChoice(t) {
                        var n = t.choice,
                            r = t.answerQuestion,
                            a = Object(i.useCallback)((function() {
                                "function" == typeof r && r({
                                    answer: {
                                        answer_ordinal: n.answer_ordinal
                                    }
                                })
                            }), [r, n]),
                            c = f[n.answer_ordinal];
                        return c ? e.createElement("div", {
                            className: "googlesitekit-survey__choice"
                        }, e.createElement(o.a, {
                            icon: e.createElement(c, {
                                width: 30,
                                height: 30
                            }),
                            "aria-label": n.text,
                            onClick: a
                        }), e.createElement("p", null, n.text)) : null
                    };
                g.propTypes = {
                    choice: a.a.shape({
                        answer_ordinal: a.a.oneOfType([a.a.string, a.a.number]),
                        text: a.a.string
                    }).isRequired
                }, t.a = g
            }).call(this, n(3))
        },
        177: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.985 0C6.705 0 0 6.72 0 15c0 8.28 6.705 15 14.985 15C23.28 30 30 23.28 30 15c0-8.28-6.72-15-15.015-15zM15 27C8.37 27 3 21.63 3 15S8.37 3 15 3s12 5.37 12 12-5.37 12-12 12zm7.5-15.75a2.247 2.247 0 01-2.25 2.25A2.247 2.247 0 0118 11.25 2.247 2.247 0 0120.25 9a2.247 2.247 0 012.25 2.25zM9.75 13.5A2.247 2.247 0 0012 11.25 2.247 2.247 0 009.75 9a2.247 2.247 0 00-2.25 2.25 2.247 2.247 0 002.25 2.25zm-2.415 9c1.2-3.06 4.17-5.25 7.665-5.25s6.465 2.19 7.665 5.25H7.335z",
                fill: "currentColor"
            });
            t.a = function SvgSurveyUnhappy(e) {
                return r.createElement("svg", a({
                    fill: "none"
                }, e), i)
            }
        },
        178: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M30 15c0 8.28-6.72 15-15.015 15C6.705 30 0 23.28 0 15 0 6.72 6.705 0 14.985 0 23.28 0 30 6.72 30 15zm-9.75-1.5a2.247 2.247 0 002.25-2.25A2.247 2.247 0 0020.25 9 2.247 2.247 0 0018 11.25a2.247 2.247 0 002.25 2.25zm-13.725 9c1.245-3.495 4.56-6 8.49-6 3.915 0 7.23 2.505 8.475 6h-3.315c-1.035-1.785-2.955-3-5.16-3-2.22 0-4.125 1.215-5.175 3H6.525zM12 11.25a2.247 2.247 0 01-2.25 2.25 2.247 2.247 0 01-2.25-2.25A2.247 2.247 0 019.75 9 2.247 2.247 0 0112 11.25zM15 3c6.63 0 12 5.37 12 12s-5.37 12-12 12S3 21.63 3 15 8.37 3 15 3z",
                fill: "currentColor"
            });
            t.a = function SvgSurveyDissatisfied(e) {
                return r.createElement("svg", a({
                    fill: "none"
                }, e), i)
            }
        },
        179: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M30 15c0 8.28-6.72 15-15.015 15C6.705 30 0 23.28 0 15 0 6.72 6.705 0 14.985 0 23.28 0 30 6.72 30 15zM9.75 9A2.247 2.247 0 0112 11.25a2.247 2.247 0 01-2.25 2.25 2.247 2.247 0 01-2.25-2.25A2.247 2.247 0 019.75 9zm10.5 0A2.247 2.247 0 0018 11.25a2.247 2.247 0 002.25 2.25 2.247 2.247 0 002.25-2.25A2.247 2.247 0 0020.25 9zM10.5 22.5v-3h9v3h-9zM15 3c6.63 0 12 5.37 12 12s-5.37 12-12 12S3 21.63 3 15 8.37 3 15 3z",
                fill: "currentColor"
            });
            t.a = function SvgSurveyNeutral(e) {
                return r.createElement("svg", a({
                    fill: "none"
                }, e), i)
            }
        },
        180: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M30 15c0 8.28-6.72 15-15.015 15C6.705 30 0 23.28 0 15 0 6.72 6.705 0 14.985 0 23.28 0 30 6.72 30 15zm-9.75-1.5a2.247 2.247 0 002.25-2.25A2.247 2.247 0 0020.25 9 2.247 2.247 0 0018 11.25a2.247 2.247 0 002.25 2.25zm3.225 4.5c-1.245 3.495-4.56 6-8.49 6-3.915 0-7.23-2.505-8.475-6h3.315c1.035 1.785 2.955 3 5.16 3 2.22 0 4.125-1.215 5.175-3h3.315zM12 11.25a2.247 2.247 0 01-2.25 2.25 2.247 2.247 0 01-2.25-2.25A2.247 2.247 0 019.75 9 2.247 2.247 0 0112 11.25zM15 3c6.63 0 12 5.37 12 12s-5.37 12-12 12S3 21.63 3 15 8.37 3 15 3z",
                fill: "currentColor"
            });
            t.a = function SvgSurveySatisfied(e) {
                return r.createElement("svg", a({
                    fill: "none"
                }, e), i)
            }
        },
        181: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.985 0C6.705 0 0 6.72 0 15c0 8.28 6.705 15 14.985 15C23.28 30 30 23.28 30 15c0-8.28-6.72-15-15.015-15zM15 27C8.37 27 3 21.63 3 15S8.37 3 15 3s12 5.37 12 12-5.37 12-12 12zm7.5-15.75a2.247 2.247 0 01-2.25 2.25A2.247 2.247 0 0118 11.25 2.247 2.247 0 0120.25 9a2.247 2.247 0 012.25 2.25zM9.75 13.5A2.247 2.247 0 0012 11.25 2.247 2.247 0 009.75 9a2.247 2.247 0 00-2.25 2.25 2.247 2.247 0 002.25 2.25zM22.665 18c-1.2 3.06-4.17 5.25-7.665 5.25S8.535 21.06 7.335 18h15.33z",
                fill: "currentColor"
            });
            t.a = function SvgSurveyDelighted(e) {
                return r.createElement("svg", a({
                    fill: "none"
                }, e), i)
            }
        },
        182: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(12),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = n(2),
                    l = n(131),
                    s = n(60),
                    u = n(7),
                    d = n(19),
                    f = n(56),
                    g = function SurveyQuestionOpenText(t) {
                        var n = t.question,
                            r = t.answerQuestion,
                            i = t.placeholder,
                            o = t.subtitle,
                            g = t.dismissSurvey,
                            p = t.submitButtonText,
                            m = Object(c.useState)(""),
                            v = a()(m, 2),
                            b = v[0],
                            h = v[1],
                            y = Object(c.useCallback)((function(e) {
                                h(e.target.value.slice(0, 100))
                            }), [h]),
                            O = Object(l.a)(SurveyQuestionOpenText, "SurveyQuestionOpenText");
                        return e.createElement("div", {
                            className: "googlesitekit-survey__open-text"
                        }, e.createElement(s.a, {
                            title: n,
                            dismissSurvey: g
                        }), e.createElement("div", {
                            className: "googlesitekit-survey__body"
                        }, e.createElement(f.a, null, e.createElement("label", {
                            htmlFor: O
                        }, i)), e.createElement(u.n, {
                            name: "survey-opentext-".concat(O),
                            helperText: o ? e.createElement(u.c, {
                                persistent: !0
                            }, o) : void 0,
                            onChange: y,
                            label: i,
                            noLabel: !0
                        }, e.createElement(u.d, {
                            id: O,
                            value: b
                        }))), e.createElement("div", {
                            className: "googlesitekit-survey__footer"
                        }, e.createElement(d.a, {
                            disabled: 0 === b.length,
                            onClick: function() {
                                r({
                                    answer: b
                                })
                            }
                        }, p)))
                    };
                g.propTypes = {
                    question: o.a.string.isRequired,
                    subtitle: o.a.string.isRequired,
                    placeholder: o.a.string.isRequired,
                    answerQuestion: o.a.func.isRequired,
                    dismissSurvey: o.a.func.isRequired,
                    submitButtonText: o.a.string.isRequired
                }, t.a = g
            }).call(this, n(3))
        },
        183: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(12),
                    a = n.n(r),
                    i = n(6),
                    o = n.n(i),
                    c = n(8),
                    l = n.n(c),
                    s = n(0),
                    u = n.n(s),
                    d = n(236),
                    f = n.n(d),
                    g = n(131),
                    p = n(2),
                    m = n(1),
                    v = n(19),
                    b = n(135),
                    h = n(60),
                    y = n(7),
                    O = n(56);

                function k(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function E(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? k(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var _ = function SurveyQuestionMultiSelect(t) {
                    var n = t.question,
                        r = t.choices,
                        i = t.answerQuestion,
                        c = t.dismissSurvey,
                        s = t.minChoices,
                        u = void 0 === s ? 1 : s,
                        d = t.maxChoices,
                        k = t.submitButtonText,
                        _ = Object(g.a)(SurveyQuestionMultiSelect, "SurveyQuestionMultiSelect"),
                        w = r.map((function(e) {
                            return E({
                                answer_ordinal: e.answer_ordinal,
                                selected: !1
                            }, e.write_in ? {
                                answer_text: ""
                            } : {})
                        })),
                        j = f()(w, "answer_ordinal"),
                        S = Object(p.useState)(j),
                        C = a()(S, 2),
                        N = C[0],
                        x = C[1],
                        R = r.filter((function(e) {
                            var t = e.write_in,
                                n = e.answer_ordinal;
                            if (t) {
                                var r = N[n],
                                    a = r.selected,
                                    i = r.answer_text;
                                if (a && 0 === i.length) return !0
                            }
                            return !1
                        })).length > 0,
                        D = Object.values(N).filter((function(e) {
                            return e.selected
                        })).length,
                        T = d && D === d,
                        P = R || D < u;
                    return e.createElement("div", {
                        className: "googlesitekit-survey__multi-select"
                    }, e.createElement(h.a, {
                        title: n,
                        dismissSurvey: c
                    }), e.createElement("div", {
                        className: "googlesitekit-survey__body"
                    }, r.map((function(t) {
                        var n = t.answer_ordinal,
                            r = t.text,
                            a = t.write_in,
                            i = N[n],
                            c = "".concat(_, "-answer-").concat(n);
                        return e.createElement("div", {
                            key: c,
                            className: l()("googlesitekit-survey__multi-select__choice", {
                                "googlesitekit-survey__multi-select__choice--disabled": T && !i.selected
                            })
                        }, e.createElement(b.a, {
                            checked: i.selected,
                            disabled: T && !i.selected,
                            onChange: function() {
                                return function(e) {
                                    var t = E(E({}, N), {}, o()({}, e, E(E({}, N[e]), {}, {
                                        selected: !N[e].selected
                                    })));
                                    x(t)
                                }(n)
                            },
                            value: "".concat(n),
                            id: c,
                            name: c
                        }, r), a && e.createElement(p.Fragment, null, e.createElement(O.a, null, e.createElement("label", {
                            htmlFor: "".concat(c, "-write-in")
                        }, Object(m.sprintf)(
                            /* translators: %s: Option name */
                            Object(m.__)("Text input for option %s", "google-site-kit"), r))), e.createElement(y.n, null, e.createElement(y.d, {
                            id: "".concat(c, "-write-in"),
                            onChange: function(e) {
                                return function(e, t) {
                                    var n, r = E(E({}, N), {}, o()({}, t, E(E({}, N[t]), {}, {
                                        answer_text: null === (n = e.target.value) || void 0 === n ? void 0 : n.slice(0, 100)
                                    })));
                                    x(r)
                                }(e, n)
                            },
                            value: i.answer_text,
                            disabled: !i.selected
                        }))))
                    }))), e.createElement("div", {
                        className: "googlesitekit-survey__footer"
                    }, u > 1 && e.createElement(y.c, {
                        persistent: !0
                    }, Object(m.sprintf)(
                        /* translators: %s: the number of answers. */
                        Object(m.__)("Choose at least %s answers", "google-site-kit"), u)), e.createElement(v.a, {
                        onClick: function() {
                            var e = Object.values(N).filter((function(e) {
                                return e.selected
                            })).map((function(e) {
                                var t = e.answer_ordinal,
                                    n = e.answer_text;
                                return n ? {
                                    answer_ordinal: t,
                                    answer_text: n
                                } : {
                                    answer_ordinal: t
                                }
                            }));
                            i({
                                answer: e
                            })
                        },
                        disabled: P
                    }, k)))
                };
                _.propTypes = {
                    question: u.a.string.isRequired,
                    choices: u.a.arrayOf(u.a.shape({
                        answer_ordinal: u.a.oneOfType([u.a.string, u.a.number]),
                        text: u.a.string,
                        write_in: u.a.bool
                    })).isRequired,
                    answerQuestion: u.a.func.isRequired,
                    dismissSurvey: u.a.func.isRequired,
                    minChoices: u.a.number,
                    maxChoices: u.a.number,
                    submitButtonText: u.a.string.isRequired
                }, t.a = _
            }).call(this, n(3))
        },
        184: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(6),
                    a = n.n(r),
                    i = n(12),
                    o = n.n(i),
                    c = n(0),
                    l = n.n(c),
                    s = n(2),
                    u = n(19),
                    d = n(60),
                    f = n(185);

                function g(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function p(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? g(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var m = function SurveyQuestionSingleSelect(t) {
                    var n = t.question,
                        r = t.choices,
                        a = t.answerQuestion,
                        i = t.dismissSurvey,
                        c = t.submitButtonText,
                        l = Object(s.useState)(""),
                        g = o()(l, 2),
                        m = g[0],
                        v = g[1],
                        b = Object(s.useState)(""),
                        h = o()(b, 2),
                        y = h[0],
                        O = h[1],
                        k = r.map((function(e) {
                            return p(p({}, e), {}, {
                                answer_ordinal: "".concat(e.answer_ordinal)
                            })
                        })),
                        E = !!m && k.filter((function(e) {
                            var t = e.answer_ordinal,
                                n = e.write_in;
                            return t === m && n
                        })).length > 0,
                        _ = "" === m || E && "" === y;
                    return e.createElement("div", {
                        className: "googlesitekit-single-select"
                    }, e.createElement(d.a, {
                        title: n,
                        dismissSurvey: i
                    }), e.createElement("div", {
                        className: "googlesitekit-survey__body"
                    }, k.map((function(t, n) {
                        return e.createElement(f.a, {
                            key: n,
                            value: m,
                            setValue: v,
                            writeIn: y,
                            setWriteIn: O,
                            choice: t
                        })
                    }))), e.createElement("div", {
                        className: "googlesitekit-survey__footer"
                    }, e.createElement(u.a, {
                        onClick: function() {
                            var e = E ? {
                                answer_text: y
                            } : {};
                            a({
                                answer: p({
                                    answer_ordinal: Number(m)
                                }, e)
                            })
                        },
                        disabled: _
                    }, c)))
                };
                m.propTypes = {
                    question: l.a.string.isRequired,
                    choices: l.a.arrayOf(l.a.shape({
                        answer_ordinal: l.a.oneOfType([l.a.string, l.a.number]),
                        text: l.a.string,
                        write_in: l.a.bool
                    })).isRequired,
                    answerQuestion: l.a.func.isRequired,
                    dismissSurvey: l.a.func.isRequired
                }, t.a = m
            }).call(this, n(3))
        },
        185: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(2),
                    o = n(1),
                    c = n(160),
                    l = n(7),
                    s = n(56),
                    u = function SurveyQuestionSingleSelectChoice(t) {
                        var n = t.value,
                            r = t.setValue,
                            a = t.writeIn,
                            u = t.setWriteIn,
                            d = t.choice,
                            f = d.answer_ordinal,
                            g = d.text,
                            p = d.write_in,
                            m = n === f,
                            v = "googlesitekit-survey__multi-select-".concat(f, "-").concat(g);
                        return e.createElement("div", {
                            className: "googlesitekit-single-select__choice"
                        }, e.createElement(c.a, {
                            id: g.replace(/ /g, "-"),
                            value: f,
                            checked: m,
                            name: g,
                            onClick: function() {
                                return r(f)
                            }
                        }, g), p && e.createElement(i.Fragment, null, e.createElement(s.a, null, e.createElement("label", {
                            htmlFor: v
                        }, Object(o.sprintf)(
                            /* translators: %s: Option name */
                            Object(o.__)("Text input for option %s", "google-site-kit"), g))), e.createElement(l.n, null, e.createElement(l.d, {
                            id: v,
                            onChange: function(e) {
                                return u(e.target.value.slice(0, 100))
                            },
                            value: a,
                            disabled: !m
                        }))))
                    };
                u.propTypes = {
                    choice: a.a.shape({
                        answer_ordinal: a.a.oneOfType([a.a.string, a.a.number]),
                        text: a.a.string,
                        write_in: a.a.bool
                    }),
                    value: a.a.string.isRequired,
                    setValue: a.a.func.isRequired,
                    writeIn: a.a.string.isRequired,
                    setWriteIn: a.a.func.isRequired
                }, t.a = u
            }).call(this, n(3))
        },
        186: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SurveyTerms
                }));
                var r = n(1),
                    a = n(130),
                    i = n(4),
                    o = n.n(i),
                    c = n(15),
                    l = n(21),
                    s = o.a.useSelect;

                function SurveyTerms() {
                    var t = s((function(e) {
                            return e(c.c).getGooglePrivacyPolicyURL()
                        })),
                        n = s((function(e) {
                            return e(c.c).getGoogleTermsURL()
                        }));
                    return e.createElement("p", {
                        className: "googlesitekit-survey__terms"
                    }, Object(a.a)(Object(r.__)("By continuing, you agree to allow Google to use your answers and account info to improve services, per our <privacy>Privacy</privacy> & <terms>Terms</terms>.", "google-site-kit"), {
                        privacy: e.createElement(l.a, {
                            href: t,
                            inherit: !0,
                            external: !0
                        }),
                        terms: e.createElement(l.a, {
                            href: n,
                            inherit: !0,
                            external: !0
                        })
                    }))
                }
            }).call(this, n(3))
        },
        187: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var r = n(5),
                a = n.n(r),
                i = n(14),
                o = n.n(i),
                c = n(2),
                l = n(4),
                s = n.n(l),
                u = n(20),
                d = n(15),
                f = n(13),
                g = n(22),
                p = n(38),
                m = n(31),
                v = s.a.useSelect,
                b = s.a.useDispatch;

            function h(e) {
                var t = Object(c.useContext)(u.b),
                    n = v((function(t) {
                        return t(g.a).getModule(e)
                    })),
                    r = v((function(e) {
                        return e(f.a).hasCapability(f.c)
                    })),
                    i = b(g.a).activateModule,
                    l = b(p.a).navigateTo,
                    s = b(d.c).setInternalServerError,
                    h = Object(c.useCallback)(o()(a.a.mark((function n() {
                        var r, o, c;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, i(e);
                                case 2:
                                    if (r = n.sent, o = r.error, c = r.response, o) {
                                        n.next = 11;
                                        break
                                    }
                                    return n.next = 8, Object(m.b)("".concat(t, "_widget-activation-cta"), "activate_module", e);
                                case 8:
                                    l(c.moduleReauthURL), n.next = 12;
                                    break;
                                case 11:
                                    s({
                                        id: "".concat(e, "-setup-error"),
                                        description: o.message
                                    });
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    }))), [i, e, l, s, t]);
                return (null == n ? void 0 : n.name) && r ? h : null
            }
        },
        19: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(8),
                    l = n.n(c),
                    s = n(0),
                    u = n.n(s),
                    d = n(124),
                    f = n(259),
                    g = n(2),
                    p = n(1),
                    m = n(7),
                    v = Object(g.forwardRef)((function(t, n) {
                        var r = t.children,
                            i = t.href,
                            c = t.text,
                            s = t.className,
                            u = t.danger,
                            v = t.disabled,
                            b = t.target,
                            h = t.icon,
                            y = t.trailingIcon,
                            O = t["aria-label"],
                            k = t.title,
                            E = t.tooltip,
                            _ = o()(t, ["children", "href", "text", "className", "danger", "disabled", "target", "icon", "trailingIcon", "aria-label", "title", "tooltip"]),
                            w = Object(g.useCallback)((function(e) {
                                null !== e && m.i.attachTo(e)
                            }), []),
                            j = Object(d.a)(n, w),
                            S = i && !v ? "a" : "button",
                            C = e.createElement(S, a()({
                                className: l()("mdc-button", s, {
                                    "mdc-button--raised": !c,
                                    "mdc-button--danger": u
                                }),
                                href: v ? void 0 : i,
                                ref: j,
                                disabled: !!v,
                                "aria-label": function() {
                                    var e = O;
                                    if ("_blank" !== b) return e;
                                    var t = Object(p._x)("(opens in a new tab)", "screen reader text", "google-site-kit");
                                    return "string" == typeof r && (e = e || r), e ? "".concat(e, " ").concat(t) : t
                                }(),
                                target: b || "_self",
                                role: "a" === S ? "button" : void 0
                            }, _), h, r && e.createElement("span", {
                                className: "mdc-button__label"
                            }, r), y);
                        return E && (k || O) || h && (k || O) && void 0 === r ? e.createElement(f.a, {
                            title: k || O,
                            classes: {
                                popper: "googlesitekit-tooltip-popper",
                                tooltip: "googlesitekit-tooltip"
                            }
                        }, C) : C
                    }));
                v.displayName = "Button", v.propTypes = {
                    onClick: u.a.func,
                    children: u.a.node,
                    href: u.a.string,
                    text: u.a.bool,
                    className: u.a.string,
                    danger: u.a.bool,
                    disabled: u.a.bool,
                    icon: u.a.element,
                    trailingIcon: u.a.element,
                    title: u.a.string,
                    tooltip: u.a.bool
                }, v.defaultProps = {
                    onClick: null,
                    href: null,
                    text: !1,
                    className: "",
                    danger: !1,
                    disabled: !1,
                    icon: null,
                    trailingIcon: null,
                    title: null,
                    tooltip: !1
                }, t.a = v
            }).call(this, n(3))
        },
        190: function(e, t, n) {
            "use strict";

            function r(e) {
                var t, n, r, a, i, o, c, l;
                if (void 0 !== e) return !(null == e || null === (t = e[0]) || void 0 === t || null === (n = t.data) || void 0 === n || null === (r = n.rows) || void 0 === r ? void 0 : r.length) || !(null == e || null === (a = e[0]) || void 0 === a || null === (i = a.data) || void 0 === i || null === (o = i.totals) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (l = c.values) || void 0 === l ? void 0 : l.length) || !e[0].data.totals.some((function(e) {
                    return e.values.some((function(e) {
                        return e > 0
                    }))
                }))
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        192: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ReportError
                }));
                var r = n(0),
                    a = n.n(r),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    l = n(22),
                    s = n(89),
                    u = n(143),
                    d = n(69),
                    f = n(81),
                    g = n(83),
                    p = c.a.useSelect;

                function ReportError(t) {
                    var n, r = t.moduleSlug,
                        a = t.error,
                        o = p((function(e) {
                            return e(l.a).getModule(r)
                        })),
                        c = Object(i.sprintf)(
                            /* translators: %s: module name */
                            Object(i.__)("Data error in %s", "google-site-kit"), null == o ? void 0 : o.name),
                        m = a.message;
                    Object(s.b)(a) && (c = Object(i.sprintf)(
                        /* translators: %s: module name */
                        Object(i.__)("Insufficient permissions in %s", "google-site-kit"), null == o ? void 0 : o.name), m = Object(u.a)(m, o));
                    var v = null == a || null === (n = a.data) || void 0 === n ? void 0 : n.reconnectURL,
                        b = v ? e.createElement(f.a, {
                            message: m,
                            reconnectURL: v
                        }) : d.a.sanitize(m, {
                            ALLOWED_TAGS: []
                        });
                    return e.createElement(g.a, {
                        title: c,
                        description: b,
                        error: !0
                    })
                }
                ReportError.propTypes = {
                    moduleSlug: a.a.string.isRequired,
                    error: a.a.object.isRequired
                }
            }).call(this, n(3))
        },
        20: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(2),
                a = Object(r.createContext)(""),
                i = (a.Consumer, a.Provider);
            t.b = a
        },
        206: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return g
                })), n.d(t, "b", (function() {
                    return m
                }));
                var r = n(16),
                    a = n.n(r),
                    i = n(67),
                    o = n.n(i),
                    c = n(209),
                    l = n(260),
                    s = n(261),
                    u = n(262),
                    d = n(263),
                    f = n(264),
                    g = o()((function(e) {
                        return {
                            Widget: p(e)(c.a),
                            WidgetReportZero: p(e)(l.a),
                            WidgetReportError: p(e)(s.a),
                            WidgetActivateModuleCTA: p(e)(u.a),
                            WidgetCompleteModuleActivationCTA: p(e)(d.a),
                            WidgetNull: p(e)(f.a)
                        }
                    }));

                function p(t) {
                    return function(n) {
                        var r = function WithWidgetSlug(r) {
                            return e.createElement(n, a()({}, r, {
                                widgetSlug: t
                            }))
                        };
                        return r.displayName = "WithWidgetSlug", (n.displayName || n.name) && (r.displayName += "(".concat(n.displayName || n.name, ")")), r
                    }
                }
                var m = function(t) {
                    var n = g(t);
                    return function(t) {
                        var r = function DecoratedComponent(r) {
                            return e.createElement(t, a()({}, r, n))
                        };
                        return r.displayName = "WithWidgetComponentProps", (t.displayName || t.name) && (r.displayName += "(".concat(t.displayName || t.name, ")")), r
                    }
                }
            }).call(this, n(3))
        },
        209: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(8),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = function Widget(t) {
                        var n = t.children,
                            r = t.className,
                            i = t.widgetSlug,
                            o = t.noPadding,
                            c = t.Header,
                            l = t.Footer;
                        return e.createElement("div", {
                            className: a()("googlesitekit-widget", "googlesitekit-widget--".concat(i), {
                                "googlesitekit-widget--no-padding": o
                            }, r)
                        }, c && e.createElement("div", {
                            className: "googlesitekit-widget__header"
                        }, e.createElement(c, null)), e.createElement("div", {
                            className: "googlesitekit-widget__body"
                        }, n), l && e.createElement("div", {
                            className: "googlesitekit-widget__footer"
                        }, e.createElement(l, null)))
                    };
                c.defaultProps = {
                    children: void 0,
                    noPadding: !1
                }, c.propTypes = {
                    children: o.a.node,
                    widgetSlug: o.a.string.isRequired,
                    noPadding: o.a.bool,
                    Header: o.a.elementType,
                    Footer: o.a.elementType
                }, t.a = c
            }).call(this, n(3))
        },
        21: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    l = n.n(c),
                    s = n(8),
                    u = n.n(s),
                    d = n(127),
                    f = n(1),
                    g = n(2),
                    p = Object(g.forwardRef)((function(t, n) {
                        var r, i = t["aria-label"],
                            c = t.arrow,
                            l = t.back,
                            s = t.caps,
                            g = t.children,
                            p = t.className,
                            m = t.danger,
                            v = t.disabled,
                            b = t.external,
                            h = t.hideExternalIndicator,
                            y = t.href,
                            O = t.inherit,
                            k = t.inverse,
                            E = t.onClick,
                            _ = t.small,
                            w = t.to,
                            j = o()(t, ["aria-label", "arrow", "back", "caps", "children", "className", "danger", "disabled", "external", "hideExternalIndicator", "href", "inherit", "inverse", "onClick", "small", "to"]),
                            S = y || w || !E ? w ? "ROUTER_LINK" : b ? "EXTERNAL_LINK" : "LINK" : v ? "BUTTON_DISABLED" : "BUTTON",
                            C = "BUTTON" === S || "BUTTON_DISABLED" === S ? "button" : "ROUTER_LINK" === S ? d.b : "a",
                            N = ("EXTERNAL_LINK" === S && (r = Object(f._x)("(opens in a new tab)", "screen reader text", "google-site-kit")), "BUTTON_DISABLED" === S && (r = Object(f._x)("(disabled)", "screen reader text", "google-site-kit")), r ? i ? "".concat(i, " ").concat(r) : "string" == typeof g ? "".concat(g, " ").concat(r) : void 0 : i);
                        return e.createElement(C, a()({
                            "aria-label": N,
                            className: u()("googlesitekit-cta-link", p, {
                                "googlesitekit-cta-link--arrow": c,
                                "googlesitekit-cta-link--external": b && !h,
                                "googlesitekit-cta-link--inverse": k,
                                "googlesitekit-cta-link--back": l,
                                "googlesitekit-cta-link--small": _,
                                "googlesitekit-cta-link--inherit": O,
                                "googlesitekit-cta-link--caps": s,
                                "googlesitekit-cta-link--danger": m,
                                "googlesitekit-cta-link--disabled": v
                            }),
                            disabled: v,
                            href: "LINK" === S || "EXTERNAL_LINK" === S ? y : void 0,
                            onClick: E,
                            rel: "EXTERNAL_LINK" === S ? "noopener noreferrer" : void 0,
                            ref: n,
                            target: "EXTERNAL_LINK" === S ? "_blank" : void 0,
                            to: w
                        }, j), g)
                    }));
                p.propTypes = {
                    arrow: l.a.bool,
                    back: l.a.bool,
                    caps: l.a.bool,
                    children: l.a.node,
                    className: l.a.string,
                    danger: l.a.bool,
                    disabled: l.a.bool,
                    external: l.a.bool,
                    hideExternalIndicator: l.a.bool,
                    href: l.a.string,
                    inherit: l.a.bool,
                    inverse: l.a.bool,
                    onClick: l.a.func,
                    small: l.a.bool,
                    to: l.a.string
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
            }).call(this, n(3))
        },
        22: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            }));
            var r = "core/modules",
                a = "insufficient_module_dependencies"
        },
        237: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(422),
                a = n.n(r);

            function i(e, t) {
                return a()(e, t) || 0
            }
        },
        24: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {
                return r
            })), n.d(t, "l", (function() {
                return a
            })), n.d(t, "i", (function() {
                return i
            })), n.d(t, "m", (function() {
                return o
            })), n.d(t, "n", (function() {
                return c
            })), n.d(t, "p", (function() {
                return l
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "f", (function() {
                return d
            })), n.d(t, "o", (function() {
                return f
            })), n.d(t, "j", (function() {
                return g
            })), n.d(t, "q", (function() {
                return p
            })), n.d(t, "k", (function() {
                return m
            })), n.d(t, "d", (function() {
                return v
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "c", (function() {
                return h
            })), n.d(t, "b", (function() {
                return y
            }));
            var r = "dashboard",
                a = "pageDashboard",
                i = "dashboardViewOnly",
                o = "pageDashboardViewOnly",
                c = "postsList",
                l = "userInput",
                s = "activation",
                u = "splash",
                d = "adminBar",
                f = "settings",
                g = "module",
                p = "wpDashboard",
                m = "moduleSetup",
                v = "traffic",
                b = "content",
                h = "speed",
                y = "monetization"
        },
        260: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return WidgetReportZero
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(16),
                    o = n.n(i),
                    c = n(17),
                    l = n.n(c),
                    s = n(0),
                    u = n.n(s),
                    d = n(2),
                    f = n(116),
                    g = n(114);

                function p(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function WidgetReportZero(t) {
                    var n = t.widgetSlug,
                        r = t.moduleSlug,
                        a = l()(t, ["widgetSlug", "moduleSlug"]),
                        i = Object(d.useMemo)((function() {
                            return {
                                moduleSlug: r
                            }
                        }), [r]);
                    return Object(f.a)(n, g.a, i), e.createElement(g.a, o()({
                        moduleSlug: r
                    }, a))
                }
                WidgetReportZero.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: u.a.string.isRequired
                }, g.a.propTypes)
            }).call(this, n(3))
        },
        261: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return WidgetReportError
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    l = n.n(c),
                    s = n(192);

                function u(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function WidgetReportError(t) {
                    t.widgetSlug;
                    var n = o()(t, ["widgetSlug"]);
                    return e.createElement(s.a, n)
                }
                WidgetReportError.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? u(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: l.a.string.isRequired
                }, s.a.propTypes)
            }).call(this, n(3))
        },
        262: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return WidgetActivateModuleCTA
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(16),
                    o = n.n(i),
                    c = n(17),
                    l = n.n(c),
                    s = n(0),
                    u = n.n(s),
                    d = n(2),
                    f = n(116),
                    g = n(122);

                function p(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function WidgetActivateModuleCTA(t) {
                    var n = t.widgetSlug,
                        r = t.moduleSlug,
                        a = l()(t, ["widgetSlug", "moduleSlug"]),
                        i = Object(d.useMemo)((function() {
                            return {
                                moduleSlug: r
                            }
                        }), [r]);
                    return Object(f.a)(n, g.a, i), e.createElement(g.a, o()({
                        moduleSlug: r
                    }, a))
                }
                WidgetActivateModuleCTA.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: u.a.string.isRequired
                }, g.a.propTypes)
            }).call(this, n(3))
        },
        263: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return WidgetCompleteModuleActivationCTA
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(16),
                    o = n.n(i),
                    c = n(17),
                    l = n.n(c),
                    s = n(0),
                    u = n.n(s),
                    d = n(2),
                    f = n(116),
                    g = n(121);

                function p(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function WidgetCompleteModuleActivationCTA(t) {
                    var n = t.widgetSlug,
                        r = t.moduleSlug,
                        a = l()(t, ["widgetSlug", "moduleSlug"]),
                        i = Object(d.useMemo)((function() {
                            return {
                                moduleSlug: r
                            }
                        }), [r]);
                    return Object(f.a)(n, g.a, i), e.createElement(g.a, o()({
                        moduleSlug: r
                    }, a))
                }
                WidgetCompleteModuleActivationCTA.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: u.a.string.isRequired
                }, g.a.propTypes)
            }).call(this, n(3))
        },
        264: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return WidgetNull
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = n(116),
                    l = n(126);

                function s(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }
                var u = {};

                function WidgetNull(t) {
                    var n = t.widgetSlug;
                    return Object(c.a)(n, l.a, u), e.createElement(l.a, null)
                }
                WidgetNull.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: o.a.string.isRequired
                }, l.a.propTypes)
            }).call(this, n(3))
        },
        28: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            }));
            var r = "_googlesitekitDataLayer",
                a = "data-googlesitekit-gtag"
        },
        281: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n(9),
                a = n.n(r),
                i = n(42),
                o = function(e) {
                    var t = e.startDate,
                        n = e.endDate;
                    return a()(Object(i.a)(t), "A valid startDate is required."), a()(Object(i.a)(n), "A valid endDate is required."), {
                        start_date: t.replace(/-/g, ""),
                        end_date: n.replace(/-/g, "")
                    }
                }
        },
        30: function(e, t, n) {
            "use strict";
            (function(e) {
                var r, a;
                n.d(t, "a", (function() {
                    return i
                })), n.d(t, "b", (function() {
                    return o
                }));
                var i = new Set((null === (r = e) || void 0 === r || null === (a = r._googlesitekitBaseData) || void 0 === a ? void 0 : a.enabledFeatures) || []),
                    o = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
                        return t instanceof Set && t.has(e)
                    }
            }).call(this, n(18))
        },
        307: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return PreviewGraph
                }));
                var r = n(0),
                    a = n.n(r),
                    i = n(372);

                function PreviewGraph(t) {
                    var n = t.title,
                        r = t.GraphSVG,
                        a = t.showIcons;
                    return e.createElement("div", {
                        className: "googlesitekit-analytics-cta__preview-graph"
                    }, e.createElement("h3", {
                        className: "googlesitekit-analytics-cta__preview-graph--title"
                    }, n), e.createElement("div", null, e.createElement(r, null)), a && e.createElement("div", {
                        className: "googlesitekit-analytics-cta__preview-graph--icons"
                    }, e.createElement(i.a, {
                        className: "googlesitekit-analytics-cta__preview-graph--up-arrow"
                    }), e.createElement("span", {
                        className: "googlesitekit-analytics-cta__preview-graph--bar"
                    })))
                }
                PreviewGraph.propTypes = {
                    title: a.a.string.isRequired,
                    GraphSVG: a.a.elementType.isRequired,
                    showIcons: a.a.bool
                }, PreviewGraph.defaultProps = {
                    showIcons: !0
                }
            }).call(this, n(3))
        },
        31: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return m
                })), n.d(t, "b", (function() {
                    return p
                }));
                var r = n(86),
                    a = e._googlesitekitBaseData || {},
                    i = a.activeModules,
                    o = void 0 === i ? [] : i,
                    c = a.isSiteKitScreen,
                    l = a.trackingEnabled,
                    s = {
                        activeModules: o,
                        trackingEnabled: l,
                        trackingID: a.trackingID,
                        referenceSiteURL: a.referenceSiteURL,
                        userIDHash: a.userIDHash,
                        isSiteKitScreen: c
                    },
                    u = Object(r.a)(s),
                    d = u.enableTracking,
                    f = u.disableTracking,
                    g = (u.isTrackingEnabled, u.initializeSnippet),
                    p = u.trackEvent;

                function m(e) {
                    e ? d() : f()
                }
                c && l && g()
            }).call(this, n(18))
        },
        34: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "a", (function() {
                return i
            }));
            var r = {
                    BOXES: "boxes",
                    COMPOSITE: "composite"
                },
                a = {
                    QUARTER: "quarter",
                    HALF: "half",
                    FULL: "full"
                },
                i = "core/widgets"
        },
        35: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return e instanceof Date && !isNaN(e)
            }
        },
        36: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = "core/forms"
        },
        371: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ActivateAnalyticsCTA
                }));
                var r = n(0),
                    a = n.n(r),
                    i = n(1),
                    o = n(187),
                    c = n(19);

                function ActivateAnalyticsCTA(t) {
                    var n = t.children,
                        r = Object(o.a)("analytics");
                    return r ? e.createElement("div", {
                        className: "googlesitekit-analytics-cta"
                    }, e.createElement("div", {
                        className: "googlesitekit-analytics-cta__preview-graphs"
                    }, n), e.createElement("div", {
                        className: "googlesitekit-analytics-cta__details"
                    }, e.createElement("p", {
                        className: "googlesitekit-analytics-cta--description"
                    }, Object(i.__)("See how many people visit your site from Search and track how you’re achieving your goals.", "google-site-kit")), e.createElement(c.a, {
                        onClick: r
                    }, Object(i.__)("Set up Google Analytics", "google-site-kit")))) : null
                }
                ActivateAnalyticsCTA.propTypes = {
                    children: a.a.node.isRequired
                }
            }).call(this, n(3))
        },
        372: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                d: "M0 3.01l.443.387 1.755-1.534v3.344h.628V1.863L4.578 3.4l.446-.39L2.512.811 0 3.009z",
                fill: "currentColor"
            });
            t.a = function SvgArrowUp(e) {
                return r.createElement("svg", a({
                    viewBox: "0 0 6 6",
                    fill: "none"
                }, e), i)
            }
        },
        38: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = "core/location"
        },
        39: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n(2),
                a = n(94),
                i = n(30),
                o = function(e) {
                    var t = Object(r.useContext)(a.a);
                    return Object(i.b)(e, t)
                }
        },
        4: function(e, t) {
            e.exports = googlesitekit.data
        },
        40: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "b", (function() {
                    return v
                })), n.d(t, "d", (function() {
                    return b
                })), n.d(t, "a", (function() {
                    return h
                })), n.d(t, "c", (function() {
                    return y
                }));
                var r = n(5),
                    a = n.n(r),
                    i = n(14),
                    o = n.n(i);
                n(23);

                function c(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return l(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
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
                        c = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            c = !0, i = e
                        },
                        f: function() {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                    }
                }

                function l(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var s, u = "googlesitekit_".concat("1.72.0", "_"),
                    d = ["sessionStorage", "localStorage"],
                    f = [].concat(d),
                    g = function() {
                        var t = o()(a.a.mark((function t(n) {
                            var r, i;
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = e[n]) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 3:
                                        return t.prev = 3, i = "__storage_test__", r.setItem(i, i), r.removeItem(i), t.abrupt("return", !0);
                                    case 10:
                                        return t.prev = 10, t.t0 = t.catch(3), t.abrupt("return", t.t0 instanceof DOMException && (22 === t.t0.code || 1014 === t.t0.code || "QuotaExceededError" === t.t0.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.t0.name) && 0 !== r.length);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [3, 10]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();

                function p() {
                    return m.apply(this, arguments)
                }

                function m() {
                    return (m = o()(a.a.mark((function t() {
                        var n, r, i;
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (void 0 === s) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", s);
                                case 2:
                                    n = c(f), t.prev = 3, n.s();
                                case 5:
                                    if ((r = n.n()).done) {
                                        t.next = 15;
                                        break
                                    }
                                    if (i = r.value, !s) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("continue", 13);
                                case 9:
                                    return t.next = 11, g(i);
                                case 11:
                                    if (!t.sent) {
                                        t.next = 13;
                                        break
                                    }
                                    s = e[i];
                                case 13:
                                    t.next = 5;
                                    break;
                                case 15:
                                    t.next = 20;
                                    break;
                                case 17:
                                    t.prev = 17, t.t0 = t.catch(3), n.e(t.t0);
                                case 20:
                                    return t.prev = 20, n.f(), t.finish(20);
                                case 23:
                                    return void 0 === s && (s = null), t.abrupt("return", s);
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [3, 17, 20, 23]
                        ])
                    })))).apply(this, arguments)
                }
                var v = function() {
                        var e = o()(a.a.mark((function e(t) {
                            var n, r, i, o, c, l, s;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, p();
                                    case 2:
                                        if (!(n = e.sent)) {
                                            e.next = 10;
                                            break
                                        }
                                        if (!(r = n.getItem("".concat(u).concat(t)))) {
                                            e.next = 10;
                                            break
                                        }
                                        if (i = JSON.parse(r), o = i.timestamp, c = i.ttl, l = i.value, s = i.isError, !o || c && !(Math.round(Date.now() / 1e3) - o < c)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return", {
                                            cacheHit: !0,
                                            value: l,
                                            isError: s
                                        });
                                    case 10:
                                        return e.abrupt("return", {
                                            cacheHit: !1,
                                            value: void 0
                                        });
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    b = function() {
                        var t = o()(a.a.mark((function t(n, r) {
                            var i, o, c, l, s, d, f, g, m = arguments;
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return i = m.length > 2 && void 0 !== m[2] ? m[2] : {}, o = i.ttl, c = void 0 === o ? 3600 : o, l = i.timestamp, s = void 0 === l ? Math.round(Date.now() / 1e3) : l, d = i.isError, f = void 0 !== d && d, t.next = 3, p();
                                    case 3:
                                        if (!(g = t.sent)) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.prev = 5, g.setItem("".concat(u).concat(n), JSON.stringify({
                                            timestamp: s,
                                            ttl: c,
                                            value: r,
                                            isError: f
                                        })), t.abrupt("return", !0);
                                    case 10:
                                        return t.prev = 10, t.t0 = t.catch(5), e.console.warn("Encountered an unexpected storage error:", t.t0), t.abrupt("return", !1);
                                    case 14:
                                        return t.abrupt("return", !1);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [5, 10]
                            ])
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    h = function() {
                        var t = o()(a.a.mark((function t(n) {
                            var r;
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, p();
                                    case 2:
                                        if (!(r = t.sent)) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.prev = 4, r.removeItem("".concat(u).concat(n)), t.abrupt("return", !0);
                                    case 9:
                                        return t.prev = 9, t.t0 = t.catch(4), e.console.warn("Encountered an unexpected storage error:", t.t0), t.abrupt("return", !1);
                                    case 13:
                                        return t.abrupt("return", !1);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [4, 9]
                            ])
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    y = function() {
                        var t = o()(a.a.mark((function t() {
                            var n, r, i, o;
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, p();
                                    case 2:
                                        if (!(n = t.sent)) {
                                            t.next = 14;
                                            break
                                        }
                                        for (t.prev = 4, r = [], i = 0; i < n.length; i++) 0 === (o = n.key(i)).indexOf(u) && r.push(o.substring(u.length));
                                        return t.abrupt("return", r);
                                    case 10:
                                        return t.prev = 10, t.t0 = t.catch(4), e.console.warn("Encountered an unexpected storage error:", t.t0), t.abrupt("return", []);
                                    case 14:
                                        return t.abrupt("return", []);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [4, 10]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
            }).call(this, n(18))
        },
        42: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(35),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = "string" == typeof e;
                    if (!t) return !1;
                    var n = e.split("-");
                    return 3 === n.length && Object(r.a)(new Date(e))
                }
        },
        43: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return a
            }));
            var r = "core/ui",
                a = "activeContextID"
        },
        44: function(e, t, n) {
            "use strict";
            (function(e, r) {
                n.d(t, "a", (function() {
                    return q
                }));
                var a = n(16),
                    i = n.n(a),
                    o = n(6),
                    c = n.n(o),
                    l = n(5),
                    s = n.n(l),
                    u = n(14),
                    d = n.n(u),
                    f = n(12),
                    g = n.n(f),
                    p = n(0),
                    m = n.n(p),
                    v = n(8),
                    b = n.n(v),
                    h = n(218),
                    y = n.n(h),
                    O = n(99),
                    k = n(2),
                    E = n(91),
                    _ = n(7),
                    w = n(108),
                    j = n(50),
                    S = n(63),
                    C = n(74),
                    N = n(19),
                    x = n(155),
                    R = n(139),
                    D = n(21),
                    T = n(134),
                    P = n(148),
                    A = n(40),
                    L = n(48),
                    M = n(101),
                    q = {
                        EXTERNAL: "external",
                        INTERNAL: "internal"
                    };

                function BannerNotification(t) {
                    var n, a = t.anchorLink,
                        o = t.anchorLinkLabel,
                        l = t.badgeLabel,
                        u = t.blockData,
                        f = t.children,
                        p = t.className,
                        m = t.ctaLabel,
                        v = t.ctaLink,
                        h = t.ctaTarget,
                        I = t.description,
                        z = t.dismiss,
                        B = t.dismissExpires,
                        F = t.format,
                        U = t.id,
                        W = t.isDismissible,
                        H = t.learnMoreDescription,
                        G = t.learnMoreLabel,
                        V = t.learnMoreURL,
                        K = t.learnMoreTarget,
                        Q = t.logo,
                        $ = t.module,
                        Z = t.moduleName,
                        X = t.noBottomPadding,
                        J = t.onCTAClick,
                        Y = t.onDismiss,
                        ee = t.onLearnMoreClick,
                        te = t.pageIndex,
                        ne = t.showOnce,
                        re = t.SmallImageSVG,
                        ae = t.title,
                        ie = t.type,
                        oe = t.WinImageSVG,
                        ce = Object(k.useState)(!1),
                        le = g()(ce, 2),
                        se = le[0],
                        ue = le[1],
                        de = Object(k.useState)(!1),
                        fe = g()(de, 2),
                        ge = fe[0],
                        pe = fe[1],
                        me = "notification::dismissed::".concat(U),
                        ve = function() {
                            return Object(A.d)(me, new Date, {
                                ttl: null
                            })
                        },
                        be = Object(L.e)();

                    function he() {
                        return (he = d()(s.a.mark((function e(t) {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.persist(), t.preventDefault(), !Y) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5, Y(t);
                                    case 5:
                                        ye();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function ye() {
                        ue(!0), setTimeout(d()(s.a.mark((function e() {
                            var t;
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, ve();
                                    case 2:
                                        pe(!0), t = new Event("notificationDismissed"), document.dispatchEvent(t);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 350)
                    }

                    function Oe() {
                        return (Oe = d()(s.a.mark((function e(t) {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.persist(), !J) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, J(t);
                                    case 4:
                                        W && ye();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    Object(O.a)(d()(s.a.mark((function e() {
                        var t, n;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(B > 0)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, _e();
                                case 3:
                                    if (!W) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, Object(A.b)(me);
                                case 6:
                                    t = e.sent, n = t.cacheHit, pe(n);
                                case 9:
                                    if (!ne) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 12, ve();
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))));
                    var ke = Object(k.useCallback)((function(t) {
                        Object(j.c)(a) && (t.preventDefault(), e.history.replaceState({}, "", a), e.scrollTo({
                            top: Object(w.a)(a, be),
                            behavior: "smooth"
                        }))
                    }), [a, be]);

                    function Ee() {
                        return (Ee = d()(s.a.mark((function e(t) {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.persist(), null == ee || ee();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }

                    function _e() {
                        return we.apply(this, arguments)
                    }

                    function we() {
                        return (we = d()(s.a.mark((function e() {
                            var t, n, r;
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(A.b)(me);
                                    case 2:
                                        if (t = e.sent, !(n = t.value)) {
                                            e.next = 10;
                                            break
                                        }
                                        if ((r = new Date(n)).setSeconds(r.getSeconds() + parseInt(B, 10)), !(r < new Date)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 10, Object(A.a)(me);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    if (W && (void 0 === ge || ge)) return null;
                    var je, Se = se ? "is-closed" : "is-open",
                        Ce = "large" === F && "win-stats-increase" === ie,
                        Ne = Object(M.d)(F),
                        xe = Object(M.c)(F),
                        Re = Object(M.a)(F),
                        De = Object(M.b)({
                            format: F,
                            inlineLayout: Ce,
                            hasErrorOrWarning: "win-error" === ie || "win-warning" === ie,
                            hasSmallImageSVG: !!re,
                            hasWinImageSVG: !!oe
                        });
                    je = "win-warning" === ie ? r.createElement(x.a, {
                        width: 34
                    }) : "win-error" === ie ? r.createElement(R.a, {
                        width: 28
                    }) : "";
                    var Te = r.createElement(k.Fragment, null, u && r.createElement(_.l, null, y()(u, (function(e, t) {
                            return r.createElement(_.a, {
                                key: t,
                                lgSize: Ce ? 5 : 4
                            }, r.createElement("div", {
                                className: "googlesitekit-publisher-win__stats"
                            }, r.createElement(C.a, e)))
                        })))),
                        Pe = r.createElement(k.Fragment, null, ae && r.createElement("h3", {
                            className: "googlesitekit-heading-2 googlesitekit-publisher-win__title"
                        }, ae, l && r.createElement(T.a, {
                            label: l
                        })), a && o && r.createElement("p", {
                            className: "googlesitekit-publisher-win__link"
                        }, r.createElement(D.a, {
                            href: a,
                            onClick: ke
                        }, o)), I && r.createElement("div", {
                            className: "googlesitekit-publisher-win__desc"
                        }, r.createElement("p", null, Object(k.isValidElement)(I) ? I : r.createElement("span", {
                            dangerouslySetInnerHTML: Object(S.a)(I, {
                                ALLOWED_TAGS: ["strong", "em", "br", "a"],
                                ALLOWED_ATTR: ["href"]
                            })
                        }), G && r.createElement(k.Fragment, null, " ", r.createElement(D.a, {
                            onClick: function(e) {
                                return Ee.apply(this, arguments)
                            },
                            href: V,
                            external: K === q.EXTERNAL,
                            inherit: !0
                        }, G), H), te && r.createElement("span", {
                            className: "googlesitekit-publisher-win__detect"
                        }, te))), f),
                        Ae = $ ? r.createElement(P.a, {
                            slug: $,
                            size: 19
                        }) : r.createElement(E.a, {
                            height: "34",
                            width: "32"
                        }),
                        Le = Ce ? {
                            size: 12,
                            smOrder: 2,
                            mdOrder: 1
                        } : {
                            size: 12
                        };
                    return r.createElement("section", {
                        id: U,
                        className: b()(p, "googlesitekit-publisher-win", (n = {}, c()(n, "googlesitekit-publisher-win--".concat(F), F), c()(n, "googlesitekit-publisher-win--".concat(ie), ie), c()(n, "googlesitekit-publisher-win--".concat(Se), Se), c()(n, "googlesitekit-publisher-win--no-bottom-padding", X), n))
                    }, r.createElement(_.b, {
                        className: b()({
                            "googlesitekit-padding-bottom-0": X
                        })
                    }, r.createElement(_.l, null, Q && r.createElement(_.a, Le, r.createElement("div", {
                        className: "googlesitekit-publisher-win__logo"
                    }, Ae), Z && r.createElement("div", {
                        className: "googlesitekit-publisher-win__module-name"
                    }, Z)), re && r.createElement(_.a, {
                        size: 1,
                        className: "googlesitekit-publisher-win__small-media"
                    }, r.createElement(re, null)), r.createElement(_.a, i()({}, De, Re, {
                        className: "googlesitekit-publisher-win__content"
                    }), Ce ? r.createElement(_.l, null, r.createElement(_.a, {
                        mdSize: 8,
                        lgSize: 5
                    }, Pe), r.createElement(_.a, {
                        alignBottom: !0,
                        mdSize: 8,
                        lgSize: 7
                    }, Te)) : r.createElement(k.Fragment, null, Pe, Te), v && r.createElement(N.a, {
                        className: "googlesitekit-notification__cta",
                        href: v,
                        target: h,
                        onClick: function(e) {
                            return Oe.apply(this, arguments)
                        }
                    }, m), W && z && r.createElement(D.a, {
                        onClick: function(e) {
                            return he.apply(this, arguments)
                        }
                    }, z)), oe && r.createElement(_.a, i()({}, Ne, xe, {
                        alignBottom: "larger" === F && X
                    }), r.createElement("div", {
                        className: "googlesitekit-publisher-win__image-".concat(F)
                    }, r.createElement(oe, null))), ("win-error" === ie || "win-warning" === ie) && r.createElement(_.a, {
                        size: 1
                    }, r.createElement("div", {
                        className: "googlesitekit-publisher-win__icons"
                    }, je)))))
                }
                BannerNotification.propTypes = {
                    id: m.a.string.isRequired,
                    className: m.a.string,
                    title: m.a.string.isRequired,
                    description: m.a.node,
                    learnMoreURL: m.a.string,
                    learnMoreDescription: m.a.string,
                    learnMoreLabel: m.a.string,
                    learnMoreTarget: m.a.oneOf(Object.values(q)),
                    blockData: m.a.array,
                    WinImageSVG: m.a.elementType,
                    SmallImageSVG: m.a.elementType,
                    format: m.a.string,
                    ctaLink: m.a.string,
                    ctaLabel: m.a.string,
                    type: m.a.string,
                    dismiss: m.a.string,
                    isDismissible: m.a.bool,
                    logo: m.a.bool,
                    module: m.a.string,
                    moduleName: m.a.string,
                    pageIndex: m.a.string,
                    dismissExpires: m.a.number,
                    showOnce: m.a.bool,
                    onCTAClick: m.a.func,
                    onDismiss: m.a.func,
                    onLearnMoreClick: m.a.func,
                    anchorLink: m.a.string,
                    anchorLinkLabel: m.a.string,
                    badgeLabel: m.a.string,
                    noBottomPadding: m.a.bool
                }, BannerNotification.defaultProps = {
                    isDismissible: !0,
                    className: "",
                    dismissExpires: 0,
                    showOnce: !1,
                    noBottomPadding: !1,
                    learnMoreTarget: q.EXTERNAL
                }, t.b = BannerNotification
            }).call(this, n(18), n(3))
        },
        448: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                d: "M1 24.053l5-4.825 4 2.193 5.333-2.193 7.334 6.579 6-1.754 3-4.825 4.666 6.579 3.334-1.754L47.333 28 55 19.228l4.333 2.193 5.334-3.509 2 1.316h6L81.333 3 84 9.579l2.333-1.754L89 13.088l12-5.263",
                stroke: "#CCC",
                strokeWidth: 2
            });
            t.a = function SvgCtaGraphVisitors(e) {
                return r.createElement("svg", a({
                    viewBox: "0 0 102 30",
                    fill: "none"
                }, e), i)
            }
        },
        450: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                    d: "M86.66 6.101a22.375 22.375 0 016.226-1.09l.215 7.871a14.544 14.544 0 00-4.046.709L86.66 6.1z",
                    fill: "#DEDEDE"
                }),
                o = r.createElement("path", {
                    d: "M75.423 14.275a22.544 22.544 0 0110.57-7.945l2.628 7.41a14.655 14.655 0 00-6.871 5.164l-6.327-4.63z",
                    fill: "#C6C6C6"
                }),
                c = r.createElement("path", {
                    d: "M75.317 40.725a22.482 22.482 0 01-4.226-12.872 22.637 22.637 0 013.925-13l6.47 4.426a14.714 14.714 0 00-2.552 8.45c.035 3.01.995 5.932 2.747 8.367l-6.364 4.63z",
                    fill: "#F1F1F1"
                }),
                l = r.createElement("path", {
                    d: "M106.601 45.702a22.401 22.401 0 01-16.346 4.074 22.282 22.282 0 01-14.517-8.485l6.217-4.827a14.483 14.483 0 009.436 5.515 14.562 14.562 0 0010.625-2.648l4.585 6.371z",
                    fill: "#959595"
                }),
                s = r.createElement("path", {
                    d: "M93.59 5c4.673 0 9.223 1.466 13.013 4.194a22.369 22.369 0 018.129 11.018 22.624 22.624 0 01-7.567 25.067l-4.783-6.223a14.703 14.703 0 004.919-16.293 14.538 14.538 0 00-5.284-7.162 14.477 14.477 0 00-8.458-2.726L93.59 5z",
                    fill: "#C7C7C7"
                }),
                u = r.createElement("circle", {
                    cx: 83.5,
                    cy: 56.899,
                    r: 1.5,
                    fill: "#959595"
                }),
                d = r.createElement("circle", {
                    cx: 90.5,
                    cy: 56.899,
                    r: 1.5,
                    fill: "#C7C7C7"
                }),
                f = r.createElement("circle", {
                    cx: 97.5,
                    cy: 56.899,
                    r: 1.5,
                    fill: "#DEDEDE"
                }),
                g = r.createElement("circle", {
                    cx: 104.5,
                    cy: 56.899,
                    r: 1.5,
                    fill: "#F1F1F1"
                }),
                p = r.createElement("path", {
                    stroke: "#ECE9F1",
                    strokeWidth: .937,
                    strokeLinecap: "round",
                    d: "M.468 58.531h55.064"
                }),
                m = r.createElement("path", {
                    stroke: "#ECE9F1",
                    strokeWidth: .468,
                    strokeLinecap: "round",
                    d: "M.234 44.765h55.532M.234 30.765h55.532M.234 16.766h55.532"
                }),
                v = r.createElement("path", {
                    opacity: .08,
                    d: "M25.531 47.668c-4.138-1.288-5.95-4.746-9.87-5.24-4.053-.51-7.2 12.53-15.661 13.777V59h56V35.07c-2.25-.486-4.367-17.89-9.25-16.601-4.882 1.288-8.475 20.892-12.365 14.578-3.89-6.313-4.716 15.91-8.854 14.622z",
                    fill: "url(#cta-graph-traffic_svg__paint0_linear_435_1677)"
                }),
                b = r.createElement("path", {
                    d: "M2.766 1.116L.883 6.3h-.77L2.281.612h.496l-.011.504zM4.344 6.3L2.457 1.116 2.445.612h.496L5.117 6.3h-.773zm-.098-2.106v.618H1.051v-.618h3.195zM6.555.3v6h-.727v-6h.727zM8.5.3v6h-.727v-6H8.5zm5.73 5.023v-3.25h.727V6.3h-.691l-.036-.977zm.137-.89l.301-.008c0 .281-.03.541-.09.781a1.678 1.678 0 01-.281.617c-.13.175-.3.311-.512.41a1.845 1.845 0 01-.77.145c-.205 0-.394-.03-.566-.09a1.132 1.132 0 01-.437-.277 1.262 1.262 0 01-.285-.489 2.355 2.355 0 01-.098-.722V2.073h.723v2.735c0 .19.02.347.062.472.044.123.103.22.176.293.075.07.159.12.25.149.094.028.19.043.289.043.307 0 .55-.059.73-.176.18-.12.309-.28.387-.48.08-.204.121-.429.121-.676zm4.152.746c0-.104-.023-.2-.07-.29-.044-.09-.137-.173-.277-.245-.138-.076-.346-.141-.625-.196a4.95 4.95 0 01-.637-.176 1.931 1.931 0 01-.48-.246c-.13-.096-.23-.21-.301-.34a.948.948 0 01-.106-.457c0-.166.037-.324.11-.472.075-.149.18-.28.316-.395.138-.114.304-.204.496-.27.193-.064.408-.097.645-.097.338 0 .627.06.867.18s.423.28.55.48c.128.198.192.418.192.66h-.722a.62.62 0 00-.106-.34.779.779 0 00-.3-.277.971.971 0 00-.481-.11c-.2 0-.363.032-.488.095a.627.627 0 00-.27.23.58.58 0 00-.043.508c.029.06.078.116.148.168.07.05.17.096.297.14.128.045.29.089.489.133.346.078.631.172.855.282.224.109.39.243.5.402.11.159.164.351.164.578a1.126 1.126 0 01-.45.906 1.65 1.65 0 01-.515.258c-.198.06-.42.09-.668.09-.372 0-.687-.066-.945-.2a1.462 1.462 0 01-.586-.515c-.133-.21-.2-.434-.2-.668h.727c.01.198.068.356.172.473a.877.877 0 00.383.246c.151.047.3.07.45.07.197 0 .363-.026.495-.078a.69.69 0 00.31-.215.498.498 0 00.105-.312zm3.426 1.199a2.08 2.08 0 01-.8-.149 1.817 1.817 0 01-.614-.425c-.169-.183-.3-.399-.39-.649a2.38 2.38 0 01-.137-.82v-.164c0-.344.05-.65.152-.918.102-.27.24-.5.414-.688.175-.187.373-.329.594-.425.221-.097.45-.145.688-.145.302 0 .562.052.78.156.222.105.403.25.544.438.14.185.245.404.312.656.068.25.102.524.102.82v.325h-3.156V3.8h2.433v-.055c-.01-.187-.05-.37-.117-.547a.983.983 0 00-.313-.437c-.143-.115-.338-.172-.585-.172a.984.984 0 00-.809.41c-.099.135-.176.3-.23.496-.055.195-.082.42-.082.676v.164c0 .2.027.39.081.566.058.175.14.328.247.461.109.133.24.237.394.313.156.075.334.113.531.113.256 0 .472-.052.649-.156.177-.104.332-.244.465-.418l.437.348c-.091.138-.207.269-.348.394-.14.125-.313.227-.519.305a2.012 2.012 0 01-.723.117zm3.211-3.64V6.3h-.722V2.073h.703l.02.664zm1.32-.688l-.003.672a1.827 1.827 0 00-.352-.031c-.167 0-.314.025-.441.078a.914.914 0 00-.325.218 1.052 1.052 0 00-.21.336c-.05.128-.082.268-.098.422l-.203.117c0-.255.024-.494.074-.718.052-.224.131-.422.238-.594.107-.175.242-.31.407-.406a1.142 1.142 0 01.914-.094zm3.13 3.129a.61.61 0 00-.07-.29c-.045-.09-.138-.173-.278-.245-.138-.076-.346-.141-.625-.196a4.95 4.95 0 01-.637-.176 1.931 1.931 0 01-.48-.246c-.13-.096-.23-.21-.301-.34a.948.948 0 01-.106-.457c0-.166.037-.324.11-.472.075-.149.18-.28.316-.395.138-.114.303-.204.496-.27.193-.064.408-.097.645-.097.338 0 .627.06.867.18s.423.28.55.48c.128.198.192.418.192.66h-.723a.62.62 0 00-.105-.34.778.778 0 00-.3-.277.97.97 0 00-.481-.11c-.2 0-.363.032-.488.095a.627.627 0 00-.27.23.58.58 0 00-.043.508c.029.06.078.116.148.168.07.05.17.096.297.14.128.045.29.089.489.133.346.078.631.172.855.282.224.109.39.243.5.402.11.159.164.351.164.578a1.126 1.126 0 01-.45.906 1.65 1.65 0 01-.515.258c-.198.06-.42.09-.668.09-.372 0-.687-.066-.945-.2a1.462 1.462 0 01-.586-.515c-.133-.21-.2-.434-.2-.668h.727c.01.198.068.356.172.473a.876.876 0 00.383.246c.151.047.3.07.45.07.197 0 .363-.026.495-.078a.69.69 0 00.309-.215.498.498 0 00.105-.312z",
                    fill: "#B8B8B8"
                }),
                h = r.createElement("defs", null, r.createElement("linearGradient", {
                    id: "cta-graph-traffic_svg__paint0_linear_435_1677",
                    x1: 19.094,
                    y1: 18.399,
                    x2: 19.094,
                    y2: 66.554,
                    gradientUnits: "userSpaceOnUse"
                }, r.createElement("stop", {
                    stopColor: "#4F4F4F"
                }), r.createElement("stop", {
                    offset: 1,
                    stopColor: "#4F4F4F",
                    stopOpacity: 0
                })));
            t.a = function SvgCtaGraphTraffic(e) {
                return r.createElement("svg", a({
                    viewBox: "0 0 116 59",
                    fill: "none"
                }, e), i, o, c, l, s, u, d, f, g, p, m, v, b, h)
            }
        },
        48: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return a
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "e", (function() {
                return l
            }));
            var r = n(125),
                a = "xlarge",
                i = "desktop",
                o = "tablet",
                c = "small";

            function l() {
                var e = Object(r.a)();
                return e > 1280 ? a : e > 960 ? i : e > 600 ? o : c
            }
        },
        50: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "e", (function() {
                return l
            }));
            var r = n(109);

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

            function l(e, t) {
                if (!Object(r.a)(e)) return e;
                if (e.length <= t) return e;
                var n = new URL(e),
                    a = e.replace(n.origin, "");
                if (a.length < t) return a;
                var i = a.length - Math.floor(t) + 1;
                return "…" + a.substr(i)
            }
        },
        51: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(28);

            function a(e) {
                return function() {
                    e[r.a] = e[r.a] || [], e[r.a].push(arguments)
                }
            }
        },
        53: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return a
            }));
            var r = "modules/search-console",
                a = 1
        },
        56: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    l = n.n(c),
                    s = n(8),
                    u = n.n(s);

                function VisuallyHidden(t) {
                    var n = t.className,
                        r = t.children,
                        i = o()(t, ["className", "children"]);
                    return r ? e.createElement("span", a()({}, i, {
                        className: u()("screen-reader-text", n)
                    }), r) : null
                }
                VisuallyHidden.propTypes = {
                    className: l.a.string,
                    children: l.a.node
                }, VisuallyHidden.defaultProps = {
                    className: ""
                }, t.a = VisuallyHidden
            }).call(this, n(3))
        },
        59: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "g", (function() {
                return p
            })), n.d(t, "h", (function() {
                return d.a
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "c", (function() {
                return b
            })), n.d(t, "i", (function() {
                return f
            }));
            var r = "Invalid dateString parameter, it must be a string.",
                a = 'Invalid date range, it must be a string with the format "last-x-days".',
                i = n(9),
                o = n.n(i),
                c = n(35),
                l = function(e) {
                    var t = new Date(e);
                    o()(Object(c.a)(t), "Date param must construct to a valid date instance or be a valid date instance itself.");
                    var n = "".concat(t.getMonth() + 1),
                        r = "".concat(t.getDate());
                    return [t.getFullYear(), n.length < 2 ? "0".concat(n) : n, r.length < 2 ? "0".concat(r) : r].join("-")
                },
                s = n(12),
                u = n.n(s),
                d = n(42),
                f = function(e) {
                    o()(Object(d.a)(e), r);
                    var t = e.split("-"),
                        n = u()(t, 3),
                        a = n[0],
                        i = n[1],
                        c = n[2];
                    return new Date(a, i - 1, c)
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = f(e);
                    return n.setDate(n.getDate() - t), l(n)
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
            var v = n(1);

            function b() {
                var e = function(e) {
                    return Object(v.sprintf)(
                        /* translators: %s: number of days */
                        Object(v._n)("Last %s day", "Last %s days", e, "google-site-kit"), e)
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
        60: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(1),
                    o = n(212),
                    c = n(336),
                    l = n(19),
                    s = n(91),
                    u = function SurveyHeader(t) {
                        var n = t.title,
                            r = t.dismissSurvey;
                        return e.createElement("div", {
                            className: "googlesitekit-survey__header"
                        }, e.createElement("div", {
                            className: "googlesitekit-survey__header-logo"
                        }, e.createElement(s.a, {
                            width: 24,
                            height: 24
                        })), e.createElement("div", {
                            className: "googlesitekit-survey__header-details"
                        }, e.createElement("h3", null, n), e.createElement(l.a, {
                            "aria-label": Object(i.__)("Dismiss", "google-site-kit"),
                            icon: e.createElement(o.a, {
                                icon: c.a,
                                size: 40
                            }),
                            onClick: r,
                            className: "googlesitekit-survey__header-close"
                        })))
                    };
                u.propTypes = {
                    title: a.a.string.isRequired,
                    dismissSurvey: a.a.func.isRequired
                }, t.a = u
            }).call(this, n(3))
        },
        62: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(8),
                    o = n.n(i);

                function ChangeArrow(t) {
                    var n = t.direction,
                        r = t.invertColor,
                        a = t.width,
                        i = t.height;
                    return e.createElement("svg", {
                        className: o()("googlesitekit-change-arrow", "googlesitekit-change-arrow--".concat(n), {
                            "googlesitekit-change-arrow--inverted-color": r
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
            }).call(this, n(3))
        },
        63: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return c
            }));
            var r = n(29),
                a = n.n(r),
                i = n(69),
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        __html: i.a.sanitize(e, t)
                    }
                };

            function c(e) {
                var t, n = "object" === a()(e) ? e.toString() : e;
                return null == n || null === (t = n.replace) || void 0 === t ? void 0 : t.call(n, /\/+$/, "")
            }
        },
        64: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(2),
                a = function(e) {
                    return function(t) {
                        return function FilteredComponent(n) {
                            return Object(r.createElement)(r.Fragment, {}, "", Object(r.createElement)(t, n), e)
                        }
                    }
                }
        },
        65: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return u
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = n(8),
                    l = n.n(c),
                    s = n(1),
                    u = {
                        DEFAULT: "default",
                        OVERLAY: "overlay",
                        SMALL: "small",
                        LARGE: "large"
                    };

                function GatheringDataNotice(t) {
                    var n = t.style;
                    return e.createElement("div", {
                        className: l()("googlesitekit-gathering-data-notice", a()({}, "googlesitekit-gathering-data-notice--has-style-".concat(n), !!n))
                    }, e.createElement("span", null, Object(s.__)("Gathering data…", "google-site-kit")))
                }
                GatheringDataNotice.propTypes = {
                    style: o.a.oneOf(Object.values(u))
                }, t.b = GatheringDataNotice
            }).call(this, n(3))
        },
        69: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return a
                }));
                var r = n(118),
                    a = n.n(r)()(e)
            }).call(this, n(18))
        },
        7: function(e, t, n) {
            "use strict";
            var r = n(90),
                a = n.n(r);
            n.d(t, "n", (function() {
                return a.a
            })), n.d(t, "c", (function() {
                return r.HelperText
            })), n.d(t, "d", (function() {
                return r.Input
            }));
            var i = n(195);
            n.d(t, "i", (function() {
                return i.a
            }));
            var o = n(242);
            n.d(t, "f", (function() {
                return o.a
            }));
            var c = n(243);
            n.d(t, "h", (function() {
                return c.a
            }));
            var l = n(110),
                s = n.n(l);
            n.d(t, "m", (function() {
                return s.a
            })), n.d(t, "k", (function() {
                return l.Option
            }));
            var u = n(244);
            n.d(t, "j", (function() {
                return u.a
            }));
            var d = n(241);
            n.d(t, "e", (function() {
                return d.a
            }));
            var f = n(240);
            n.d(t, "g", (function() {
                return f.a
            }));
            var g = n(93);
            n.d(t, "a", (function() {
                return g.a
            })), n.d(t, "b", (function() {
                return g.b
            })), n.d(t, "l", (function() {
                return g.c
            }))
        },
        72: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "c", (function() {
                    return k
                })), n.d(t, "d", (function() {
                    return _
                })), n.d(t, "b", (function() {
                    return w
                })), n.d(t, "a", (function() {
                    return j
                }));
                var r = n(12),
                    a = n.n(r),
                    i = n(29),
                    o = n.n(i),
                    c = n(6),
                    l = n.n(c),
                    s = n(17),
                    u = n.n(s),
                    d = n(26),
                    f = n(67),
                    g = n.n(f),
                    p = n(1);

                function m(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function v(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? m(Object(n), !0).forEach((function(t) {
                            l()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var b = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = h(e, t),
                            r = n.formatUnit,
                            a = n.formatDecimal;
                        try {
                            return r()
                        } catch (e) {
                            return a()
                        }
                    },
                    h = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = parseInt(e, 10), Number.isNaN(e) && (e = 0);
                        var n = Math.floor(e / 60 / 60),
                            r = Math.floor(e / 60 % 60),
                            a = Math.floor(e % 60);
                        return {
                            hours: n,
                            minutes: r,
                            seconds: a,
                            formatUnit: function() {
                                var i = t.unitDisplay,
                                    o = v(v({
                                        unitDisplay: void 0 === i ? "short" : i
                                    }, u()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? _(a, v(v({}, o), {}, {
                                    unit: "second"
                                })) : Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), a ? _(a, v(v({}, o), {}, {
                                        unit: "second"
                                    })) : "", r ? _(r, v(v({}, o), {}, {
                                        unit: "minute"
                                    })) : "", n ? _(n, v(v({}, o), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var t = Object(p.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(p.__)("%ds", "google-site-kit"), a);
                                if (0 === e) return t;
                                var i = Object(p.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(p.__)("%dm", "google-site-kit"), r),
                                    o = Object(p.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(p.__)("%dh", "google-site-kit"), n);
                                return Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), a ? t : "", r ? i : "", n ? o : "").trim()
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
                        return 1e6 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in millions.
                            Object(p.__)("%sM", "google-site-kit"), _(y(e), e % 10 == 0 ? {} : t)) : 1e4 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), _(y(e))) : 1e3 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), _(y(e), e % 10 == 0 ? {} : t)) : _(e, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    k = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(d.isFinite)(e) ? e : Number(e), Object(d.isFinite)(e) || (console.warn("Invalid number", e, o()(e)), e = 0);
                        var n = {};
                        if ("%" === t) n = {
                            style: "percent",
                            maximumFractionDigits: 2
                        };
                        else {
                            if ("s" === t) return b(e, {
                                unitDisplay: "narrow"
                            });
                            t && "string" == typeof t ? n = {
                                style: "currency",
                                currency: t
                            } : Object(d.isPlainObject)(t) && (n = v({}, t))
                        }
                        var r = n,
                            a = r.style,
                            i = void 0 === a ? "metric" : a;
                        return "metric" === i ? O(e) : "duration" === i ? b(e, t) : _(e, n)
                    },
                    E = g()(console.warn),
                    _ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            r = void 0 === n ? j() : n,
                            i = u()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(r, i).format(e)
                        } catch (t) {
                            E("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(r), ", ").concat(JSON.stringify(i), " ).format( ").concat(o()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, l = ["signDisplay", "compactDisplay"], s = {}, d = 0, f = Object.entries(i); d < f.length; d++) {
                            var g = a()(f[d], 2),
                                p = g[0],
                                m = g[1];
                            c[p] && m === c[p] || (l.includes(p) || (s[p] = m))
                        }
                        try {
                            return new Intl.NumberFormat(r, s).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(r).format(e)
                        }
                    },
                    w = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            r = void 0 === n ? j() : n,
                            a = t.style,
                            i = void 0 === a ? "long" : a,
                            o = t.type,
                            c = void 0 === o ? "conjunction" : o;
                        if (Intl.ListFormat) {
                            var l = new Intl.ListFormat(r, {
                                style: i,
                                type: c
                            });
                            return l.format(e)
                        }
                        /* translators: used between list items, there is a space after the comma. */
                        var s = Object(p.__)(", ", "google-site-kit");
                        return e.join(s)
                    },
                    j = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            n = Object(d.get)(t, ["_googlesitekitLegacyData", "locale"]);
                        if (n) {
                            var r = n.match(/^(\w{2})?(_)?(\w{2})/);
                            if (r && r[0]) return r[0].replace(/_/g, "-")
                        }
                        return t.navigator.language
                    }
            }).call(this, n(18))
        },
        74: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(46),
                    a = n.n(r),
                    i = n(47),
                    o = n.n(i),
                    c = n(77),
                    l = n.n(c),
                    s = n(70),
                    u = n.n(s),
                    d = n(71),
                    f = n.n(d),
                    g = n(49),
                    p = n.n(g),
                    m = n(0),
                    v = n.n(m),
                    b = n(8),
                    h = n.n(b),
                    y = n(2),
                    O = n(1),
                    k = n(62),
                    E = n(96),
                    _ = n(65),
                    w = n(30),
                    j = n(11);

                function S(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = p()(e);
                        if (t) {
                            var a = p()(this).constructor;
                            n = Reflect.construct(r, arguments, a)
                        } else n = r.apply(this, arguments);
                        return f()(this, n)
                    }
                }
                var C = function(t) {
                    u()(DataBlock, t);
                    var n = S(DataBlock);

                    function DataBlock(e) {
                        var t;
                        return a()(this, DataBlock), (t = n.call(this, e)).handleClick = t.handleClick.bind(l()(t)), t.handleKeyPress = t.handleKeyPress.bind(l()(t)), t
                    }
                    return o()(DataBlock, [{
                        key: "handleClick",
                        value: function() {
                            var e = this.props,
                                t = e.stat;
                            (0, e.handleStatSelection)(t)
                        }
                    }, {
                        key: "handleKeyPress",
                        value: function(e) {
                            e.preventDefault();
                            var t = this.props,
                                n = t.stat,
                                r = t.handleStatSelection;
                            "Enter" !== e.key && " " !== e.key || r(n)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                n = t.className,
                                r = t.title,
                                a = t.datapoint,
                                i = t.datapointUnit,
                                o = t.change,
                                c = t.changeDataUnit,
                                l = t.context,
                                s = t.period,
                                u = t.selected,
                                d = t.handleStatSelection,
                                f = t.source,
                                g = t.sparkline,
                                p = t.invertChangeColor,
                                m = t.gatheringData,
                                v = t.gatheringDataNoticeStyle,
                                b = "button" === l ? "button" : "",
                                S = g;
                            S && p && (S = Object(y.cloneElement)(g, {
                                invertChangeColor: p
                            }));
                            var C = o;
                            c && (C = "%" === c ? Object(j.r)(o, {
                                style: "percent",
                                signDisplay: "never",
                                maximumFractionDigits: 1
                            }) : Object(j.r)(o, c)), s && (C = Object(O.sprintf)(s, C));
                            var N = void 0 === a ? a : Object(j.r)(a, i || void 0),
                                x = Object(w.b)("zeroDataStates");
                            return e.createElement("div", {
                                className: h()("googlesitekit-data-block", n, "googlesitekit-data-block--".concat(l), {
                                    "googlesitekit-data-block--selected": u,
                                    "googlesitekit-data-block--is-gathering-data": m
                                }),
                                tabIndex: "button" !== l || m ? "-1" : "0",
                                role: d && b,
                                onClick: m ? void 0 : d && this.handleClick,
                                onKeyPress: m ? void 0 : d && this.handleKeyPress,
                                "aria-disabled": m || void 0,
                                "aria-label": d && r,
                                "aria-pressed": d && u
                            }, e.createElement("div", {
                                className: "googlesitekit-data-block__title-datapoint-wrapper"
                            }, e.createElement("h3", {
                                className: " googlesitekit-subheading-1 googlesitekit-data-block__title "
                            }, r), !m && e.createElement("div", {
                                className: "googlesitekit-data-block__datapoint"
                            }, N)), !m && e.createElement(y.Fragment, null, S && e.createElement("div", {
                                className: "googlesitekit-data-block__sparkline"
                            }, S), e.createElement("div", {
                                className: "googlesitekit-data-block__change-source-wrapper"
                            }, e.createElement("div", {
                                className: h()("googlesitekit-data-block__change", {
                                    "googlesitekit-data-block__change--no-change": !o
                                })
                            }, e.createElement(y.Fragment, null, !!o && e.createElement("span", {
                                className: "googlesitekit-data-block__arrow"
                            }, e.createElement(k.a, {
                                direction: 0 < parseFloat(o) ? "up" : "down",
                                invertColor: p
                            })), e.createElement("span", {
                                className: "googlesitekit-data-block__value"
                            }, C))), f && e.createElement(E.a, {
                                className: "googlesitekit-data-block__source",
                                name: f.name,
                                href: f.link,
                                external: null == f ? void 0 : f.external
                            }))), m && x && e.createElement(_.b, {
                                style: v
                            }))
                        }
                    }]), DataBlock
                }(y.Component);
                C.propTypes = {
                    stat: v.a.number,
                    onClick: v.a.func,
                    className: v.a.string,
                    title: v.a.string,
                    datapoint: v.a.oneOfType([v.a.string, v.a.number]),
                    datapointUnit: v.a.string,
                    change: v.a.oneOfType([v.a.string, v.a.number]),
                    changeDataUnit: v.a.oneOfType([v.a.string, v.a.bool]),
                    context: v.a.string,
                    period: v.a.string,
                    selected: v.a.bool,
                    handleStatSelection: v.a.func,
                    invertChangeColor: v.a.bool,
                    gatheringData: v.a.bool,
                    gatheringDataNoticeStyle: v.a.oneOf(Object.values(_.a))
                }, C.defaultProps = {
                    stat: null,
                    onClick: null,
                    className: "",
                    title: "",
                    datapoint: null,
                    datapointUnit: "",
                    change: null,
                    changeDataUnit: "",
                    context: "default",
                    period: "",
                    selected: !1,
                    handleStatSelection: null,
                    invertChangeColor: !1,
                    gatheringData: !1,
                    gatheringDataNoticeStyle: _.a.DEFAULT
                }, t.a = C
            }).call(this, n(3))
        },
        80: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return l
                })), n.d(t, "b", (function() {
                    return s
                })), n.d(t, "c", (function() {
                    return d
                }));
                var r = n(12),
                    a = n.n(r),
                    i = n(1);

                function o(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return c(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
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
                        l = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            l = !0, i = e
                        },
                        f: function() {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (l) throw i
                            }
                        }
                    }
                }

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var l = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = null,
                            n = null,
                            r = document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),
                            a = document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");
                        if (r && a) return !1;
                        if (t = document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"), n = document.querySelector("#wp-admin-bar-google-site-kit .ab-item"), null === t && null === n) return !1;
                        var o = document.createElement("span");
                        o.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(e));
                        var c = document.createElement("span");
                        c.setAttribute("class", "plugin-count"), c.setAttribute("aria-hidden", "true"), c.textContent = e;
                        var l = document.createElement("span");
                        return l.setAttribute("class", "screen-reader-text"), l.textContent = Object(i.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(i._n)("%d notification", "%d notifications", e, "google-site-kit"), e), o.appendChild(c), o.appendChild(l), t && null === r && t.appendChild(o), n && null === a && n.appendChild(o), o
                    },
                    s = function() {
                        e.localStorage && e.localStorage.clear(), e.sessionStorage && e.sessionStorage.clear()
                    },
                    u = function(e) {
                        for (var t = location.search.substr(1).split("&"), n = {}, r = 0; r < t.length; r++) n[t[r].split("=")[0]] = decodeURIComponent(t[r].split("=")[1]);
                        return e ? n.hasOwnProperty(e) ? decodeURIComponent(n[e].replace(/\+/g, " ")) : "" : n
                    },
                    d = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                            n = new URL(t.href);
                        if (e) return n.searchParams && n.searchParams.get ? n.searchParams.get(e) : u(e);
                        var r, i = {},
                            c = o(n.searchParams.entries());
                        try {
                            for (c.s(); !(r = c.n()).done;) {
                                var l = a()(r.value, 2),
                                    s = l[0],
                                    d = l[1];
                                i[s] = d
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return i
                    }
            }).call(this, n(18))
        },
        81: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(109),
                    o = n(1),
                    c = n(11);

                function ErrorText(t) {
                    var n = t.message,
                        r = t.reconnectURL;
                    if (!n) return null;
                    var a = Object(o.sprintf)(
                        /* translators: %s: Error message */
                        Object(o.__)("Error: %s", "google-site-kit"), n);
                    r && Object(i.a)(r) && (a = a + " " + Object(o.sprintf)(
                        /* translators: %s: Reconnect URL */
                        Object(o.__)('To fix this, <a href="%s">redo the plugin setup</a>.', "google-site-kit"), r));
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
            }).call(this, n(3))
        },
        818: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AdminBarApp
                }));
                var r = n(5),
                    a = n.n(r),
                    i = n(14),
                    o = n.n(i),
                    c = n(2),
                    l = n(1),
                    s = n(4),
                    u = n.n(s),
                    d = n(21),
                    f = n(7),
                    g = n(15),
                    p = n(13),
                    m = n(11),
                    v = n(24),
                    b = n(819),
                    h = u.a.useSelect;

                function AdminBarApp() {
                    var t = h((function(e) {
                            return e(g.c).getCurrentEntityURL()
                        })),
                        n = h((function(e) {
                            return e(g.c).getCurrentEntityTitle()
                        })),
                        r = h((function(e) {
                            return e(g.c).getAdminURL("googlesitekit-dashboard", {
                                permaLink: t
                            })
                        })),
                        i = h((function(e) {
                            return e(p.a).getDateRangeNumberOfDays()
                        })),
                        s = Object(c.useCallback)(o()(a.a.mark((function e() {
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(m.w)(v.f, "open_urldetails");
                                    case 2:
                                        document.location.assign(r);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [r]);
                    return r && t ? e.createElement(c.Fragment, null, e.createElement(f.b, null, e.createElement(f.l, null, e.createElement(f.a, {
                        alignMiddle: !0,
                        size: 3
                    }, e.createElement("div", {
                        className: "googlesitekit-adminbar__subtitle"
                    }, Object(l.__)("Stats for", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-adminbar__title"
                    }, n ? Object(m.f)(n) : t, e.createElement("p", {
                        className: "googlesitekit-adminbar__title--date-range"
                    }, Object(l.sprintf)(
                        /* translators: %s: number of days */
                        Object(l._n)("over the last %s day", "over the last %s days", i, "google-site-kit"), i)))), e.createElement(f.a, {
                        alignMiddle: !0,
                        mdSize: 8,
                        lgSize: 7
                    }, e.createElement(b.a, null)), e.createElement(f.a, {
                        alignMiddle: !0,
                        size: 2
                    }, e.createElement(d.a, {
                        className: "googlesitekit-adminbar__link",
                        href: "#",
                        onClick: s
                    }, Object(l.__)("More details", "google-site-kit"))))), e.createElement(d.a, {
                        className: "googlesitekit-adminbar__link googlesitekit-adminbar__link--mobile",
                        href: "#",
                        onClick: s
                    }, Object(l.__)("More details", "google-site-kit"))) : null
                }
            }).call(this, n(3))
        },
        819: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AdminBarWidgets
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(8),
                    o = n.n(i),
                    c = n(2),
                    l = n(4),
                    s = n.n(l),
                    u = n(820),
                    d = n(821),
                    f = n(822),
                    g = n(823),
                    p = n(824),
                    m = n(122),
                    v = n(121),
                    b = n(825),
                    h = n(22),
                    y = n(7),
                    O = n(34),
                    k = n(100),
                    E = n(114),
                    _ = n(206),
                    w = n(39),
                    j = s.a.useSelect,
                    S = Object(_.b)("adminBarImpressions")(u.a),
                    C = Object(_.b)("adminBarClicks")(d.a),
                    N = Object(_.b)("adminBarUniqueVisitors")(f.a),
                    x = Object(_.b)("adminBarSessions")(g.a);

                function AdminBarWidgets() {
                    var t = Object(w.a)("zeroDataStates"),
                        n = j((function(e) {
                            return e(h.a).isModuleConnected("analytics")
                        })),
                        r = j((function(e) {
                            return e(h.a).isModuleActive("analytics")
                        })),
                        i = j((function(e) {
                            var t, n;
                            return (null === (t = e(O.a).getWidgetState("adminBarImpressions")) || void 0 === t ? void 0 : t.Component) === E.a && (null === (n = e(O.a).getWidgetState("adminBarClicks")) || void 0 === n ? void 0 : n.Component) === E.a
                        })),
                        l = j((function(e) {
                            var t, n;
                            return (null === (t = e(O.a).getWidgetState("adminBarUniqueVisitors")) || void 0 === t ? void 0 : t.Component) === E.a && (null === (n = e(O.a).getWidgetState("adminBarSessions")) || void 0 === n ? void 0 : n.Component) === E.a
                        })),
                        s = i && l || i && !n;
                    return e.createElement(c.Fragment, null, s && e.createElement(b.a, null), e.createElement(y.l, {
                        className: o()(a()({}, k.a, s))
                    }, e.createElement(y.a, {
                        lgSize: i ? 6 : 3,
                        mdSize: i ? 4 : 2
                    }, e.createElement(S, null)), e.createElement(y.a, {
                        lgSize: 3,
                        mdSize: 2,
                        className: o()(a()({}, k.a, i))
                    }, e.createElement(C, null)), n && r && e.createElement(c.Fragment, null, e.createElement(y.a, {
                        lgSize: 3,
                        mdSize: 2
                    }, e.createElement(N, null)), e.createElement(y.a, {
                        lgSize: 3,
                        mdSize: 2
                    }, e.createElement(x, null))), (!n || !r) && e.createElement(y.a, {
                        lgSize: 6,
                        mdSize: 4
                    }, !r && t && e.createElement(p.a, null), !r && !t && e.createElement(m.a, {
                        moduleSlug: "analytics"
                    }), r && !n && e.createElement(v.a, {
                        moduleSlug: "analytics"
                    }))))
                }
            }).call(this, n(3))
        },
        82: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(8),
                    o = n.n(i),
                    c = n(48);

                function PreviewBlock(t) {
                    var n = t.className,
                        r = t.width,
                        a = t.height,
                        i = t.shape,
                        l = t.padding,
                        s = t.smallWidth,
                        u = t.smallHeight,
                        d = t.tabletWidth,
                        f = t.tabletHeight,
                        g = t.desktopWidth,
                        p = t.desktopHeight,
                        m = Object(c.e)(),
                        v = r,
                        b = a;
                    return c.b === m && s && u && (v = s, b = u), c.c === m && d && f && (v = d, b = f), (c.d === m || c.a === m) && g && p && (v = g, b = p), e.createElement("div", {
                        className: o()("googlesitekit-preview-block", n, {
                            "googlesitekit-preview-block--padding": l
                        }),
                        style: {
                            width: v,
                            height: b
                        }
                    }, e.createElement("div", {
                        className: o()("googlesitekit-preview-block__wrapper", {
                            "googlesitekit-preview-block__wrapper--circle": "circular" === i
                        })
                    }))
                }
                PreviewBlock.propTypes = {
                    className: a.a.string,
                    width: a.a.string,
                    height: a.a.string,
                    shape: a.a.string,
                    padding: a.a.bool,
                    smallWidth: a.a.string,
                    smallHeight: a.a.string,
                    tabletWidth: a.a.string,
                    tabletHeight: a.a.string,
                    desktopWidth: a.a.string,
                    desktopHeight: a.a.string
                }, PreviewBlock.defaultProps = {
                    className: void 0,
                    width: "100px",
                    height: "100px",
                    shape: "square",
                    padding: !1,
                    smallWidth: void 0,
                    smallHeight: void 0,
                    tabletWidth: void 0,
                    tabletHeight: void 0,
                    desktopWidth: void 0,
                    desktopHeight: void 0
                }, t.a = PreviewBlock
            }).call(this, n(3))
        },
        820: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    a = n.n(r),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    l = n(74),
                    s = n(82),
                    u = n(65),
                    d = n(13),
                    f = n(15),
                    g = n(53),
                    p = n(11),
                    m = n(141),
                    v = n(237),
                    b = n(140),
                    h = n(39),
                    y = c.a.useSelect;
                t.a = function AdminBarImpressions(t) {
                    var n = t.WidgetReportZero,
                        r = t.WidgetReportError,
                        o = Object(h.a)("zeroDataStates"),
                        c = y((function(e) {
                            return e(g.b).isGatheringData()
                        })),
                        O = y((function(e) {
                            return e(f.c).getCurrentEntityURL()
                        })),
                        k = y((function(e) {
                            return e(d.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: g.a
                            })
                        })),
                        E = k.compareStartDate,
                        _ = k.endDate,
                        w = y((function(e) {
                            return e(d.a).getDateRangeNumberOfDays()
                        })),
                        j = {
                            startDate: E,
                            endDate: _,
                            dimensions: "date",
                            url: O
                        },
                        S = y((function(e) {
                            return e(g.b).getReport(j)
                        })),
                        C = y((function(e) {
                            return e(g.b).hasFinishedResolution("getReport", [j])
                        })),
                        N = y((function(e) {
                            return e(g.b).getErrorForSelector("getReport", [j])
                        }));
                    if (!C || void 0 === c) return e.createElement(s.a, {
                        width: "auto",
                        height: "59px"
                    });
                    if (N) return e.createElement(r, {
                        moduleSlug: "search-console",
                        error: N
                    });
                    if (!o && c && Object(m.e)(S)) return e.createElement(n, {
                        moduleSlug: "search-console"
                    });
                    var x = Object(b.a)(S, {
                            dateRangeLength: w
                        }),
                        R = x.compareRange,
                        D = x.currentRange,
                        T = Object(v.a)(D, "impressions"),
                        P = Object(v.a)(R, "impressions"),
                        A = Object(p.a)(P, T),
                        L = o ? {
                            gatheringData: c,
                            gatheringDataNoticeStyle: u.a.SMALL
                        } : {};
                    return e.createElement(l.a, a()({
                        className: "overview-total-impressions",
                        title: Object(i.__)("Total Impressions", "google-site-kit"),
                        datapoint: T,
                        change: A,
                        changeDataUnit: "%"
                    }, L))
                }
            }).call(this, n(3))
        },
        821: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    a = n.n(r),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    l = n(13),
                    s = n(15),
                    u = n(53),
                    d = n(11),
                    f = n(141),
                    g = n(82),
                    p = n(74),
                    m = n(65),
                    v = n(237),
                    b = n(140),
                    h = n(39),
                    y = c.a.useSelect;
                t.a = function AdminBarClicks(t) {
                    var n = t.WidgetReportZero,
                        r = t.WidgetReportError,
                        o = Object(h.a)("zeroDataStates"),
                        c = y((function(e) {
                            return e(u.b).isGatheringData()
                        })),
                        O = y((function(e) {
                            return e(s.c).getCurrentEntityURL()
                        })),
                        k = y((function(e) {
                            return e(l.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: u.a
                            })
                        })),
                        E = k.compareStartDate,
                        _ = k.endDate,
                        w = y((function(e) {
                            return e(l.a).getDateRangeNumberOfDays()
                        })),
                        j = {
                            startDate: E,
                            endDate: _,
                            dimensions: "date",
                            url: O
                        },
                        S = y((function(e) {
                            return e(u.b).getReport(j)
                        })),
                        C = y((function(e) {
                            return e(u.b).hasFinishedResolution("getReport", [j])
                        })),
                        N = y((function(e) {
                            return e(u.b).getErrorForSelector("getReport", [j])
                        }));
                    if (!C || void 0 === c) return e.createElement(g.a, {
                        width: "auto",
                        height: "59px"
                    });
                    if (N) return e.createElement(r, {
                        moduleSlug: "search-console",
                        error: N
                    });
                    if (!o && c && Object(f.e)(S)) return e.createElement(n, {
                        moduleSlug: "search-console"
                    });
                    var x = Object(b.a)(S, {
                            dateRangeLength: w
                        }),
                        R = x.compareRange,
                        D = x.currentRange,
                        T = Object(v.a)(D, "clicks"),
                        P = Object(v.a)(R, "clicks"),
                        A = Object(d.a)(P, T),
                        L = o ? {
                            gatheringData: c,
                            gatheringDataNoticeStyle: m.a.SMALL
                        } : {};
                    return e.createElement(p.a, a()({
                        className: "overview-total-clicks",
                        title: Object(i.__)("Total Clicks", "google-site-kit"),
                        datapoint: T,
                        change: A,
                        changeDataUnit: "%"
                    }, L))
                }
            }).call(this, n(3))
        },
        822: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    a = n.n(r),
                    i = n(6),
                    o = n.n(i),
                    c = n(1),
                    l = n(74),
                    s = n(4),
                    u = n.n(s),
                    d = n(82),
                    f = n(65),
                    g = n(13),
                    p = n(15),
                    m = n(10),
                    v = n(11),
                    b = n(190),
                    h = n(39);

                function y(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function O(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? y(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var k = u.a.useSelect;
                t.a = function AdminBarUniqueVisitors(t) {
                    var n = t.WidgetReportZero,
                        r = t.WidgetReportError,
                        i = Object(h.a)("zeroDataStates"),
                        o = k((function(e) {
                            return e(m.f).isGatheringData()
                        })),
                        s = k((function(e) {
                            return e(p.c).getCurrentEntityURL()
                        })),
                        u = O(O({}, k((function(e) {
                            return e(g.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: m.b
                            })
                        }))), {}, {
                            metrics: [{
                                expression: "ga:users",
                                alias: "Total Users"
                            }],
                            url: s
                        }),
                        y = k((function(e) {
                            return e(m.f).getReport(u)
                        })),
                        E = k((function(e) {
                            return e(m.f).hasFinishedResolution("getReport", [u])
                        })),
                        _ = k((function(e) {
                            return e(m.f).getErrorForSelector("getReport", [u])
                        }));
                    if (!E || void 0 === o) return e.createElement(d.a, {
                        width: "auto",
                        height: "59px"
                    });
                    if (_) return e.createElement(r, {
                        moduleSlug: "analytics",
                        error: _
                    });
                    if (!i && o && Object(b.a)(y)) return e.createElement(n, {
                        moduleSlug: "analytics"
                    });
                    var w = y[0].data.totals,
                        j = w[0].values,
                        S = w[1].values,
                        C = j[0],
                        N = S[0],
                        x = i ? {
                            gatheringData: o,
                            gatheringDataNoticeStyle: f.a.SMALL
                        } : {};
                    return e.createElement(l.a, a()({
                        className: "overview-total-users",
                        title: Object(c.__)("Total Users", "google-site-kit"),
                        datapoint: C,
                        change: Object(v.a)(N, C),
                        changeDataUnit: "%"
                    }, x))
                }
            }).call(this, n(3))
        },
        823: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    a = n.n(r),
                    i = n(6),
                    o = n.n(i),
                    c = n(1),
                    l = n(4),
                    s = n.n(l),
                    u = n(74),
                    d = n(82),
                    f = n(65),
                    g = n(13),
                    p = n(15),
                    m = n(10),
                    v = n(11),
                    b = n(190),
                    h = n(39);

                function y(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function O(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? y(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var k = s.a.useSelect;
                t.a = function AdminBarSessions(t) {
                    var n = t.WidgetReportZero,
                        r = t.WidgetReportError,
                        i = Object(h.a)("zeroDataStates"),
                        o = k((function(e) {
                            return e(m.f).isGatheringData()
                        })),
                        l = k((function(e) {
                            return e(p.c).getCurrentEntityURL()
                        })),
                        s = O(O({}, k((function(e) {
                            return e(g.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: m.b
                            })
                        }))), {}, {
                            dimensions: "ga:date",
                            limit: 10,
                            metrics: [{
                                expression: "ga:sessions",
                                alias: "Sessions"
                            }],
                            url: l
                        }),
                        y = k((function(e) {
                            return e(m.f).getReport(s)
                        })),
                        E = k((function(e) {
                            return e(m.f).hasFinishedResolution("getReport", [s])
                        })),
                        _ = k((function(e) {
                            return e(m.f).getErrorForSelector("getReport", [s])
                        }));
                    if (!E || void 0 === o) return e.createElement(d.a, {
                        width: "auto",
                        height: "59px"
                    });
                    if (_) return e.createElement(r, {
                        moduleSlug: "analytics",
                        error: _
                    });
                    if (!i && o && Object(b.a)(y)) return e.createElement(n, {
                        moduleSlug: "analytics"
                    });
                    var w = y[0].data.totals,
                        j = w[0].values,
                        S = w[1].values,
                        C = j[0],
                        N = Object(v.a)(S[0], j[0]),
                        x = i ? {
                            gatheringData: o,
                            gatheringDataNoticeStyle: f.a.SMALL
                        } : {};
                    return e.createElement(u.a, a()({
                        className: "overview-total-sessions",
                        title: Object(c.__)("Total Sessions", "google-site-kit"),
                        datapoint: C,
                        change: N,
                        changeDataUnit: "%"
                    }, x))
                }
            }).call(this, n(3))
        },
        824: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AdminBarActivateAnalyticsCTA
                }));
                var r = n(1),
                    a = n(450),
                    i = n(448),
                    o = n(371),
                    c = n(307);

                function AdminBarActivateAnalyticsCTA() {
                    return e.createElement(o.a, null, e.createElement(c.a, {
                        title: Object(r.__)("Traffic", "google-site-kit"),
                        GraphSVG: a.a,
                        showIcons: !1
                    }), e.createElement(c.a, {
                        title: Object(r.__)("Unique visitors from Search", "google-site-kit"),
                        GraphSVG: i.a
                    }))
                }
            }).call(this, n(3))
        },
        825: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(1);
                t.a = function AdminBarZeroData() {
                    return e.createElement("div", null, e.createElement("div", {
                        className: "googlesitekit-adminbar__subtitle googlesitekit-font-weight-bold"
                    }, Object(r.__)("No data available yet", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-adminbar__subtitle"
                    }, Object(r.__)("There is no data available for this content yet. This could be because it was recently created or because nobody has accessed it so far.", "google-site-kit")))
                }
            }).call(this, n(3))
        },
        83: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(8),
                    o = n.n(i),
                    c = n(21),
                    l = function CTA(t) {
                        var n = t.title,
                            r = t.description,
                            a = t.ctaLink,
                            i = t.ctaLabel,
                            l = t.ctaLinkExternal,
                            s = t.error,
                            u = t.onClick,
                            d = t["aria-label"];
                        return e.createElement("div", {
                            className: o()("googlesitekit-cta", {
                                "googlesitekit-cta--error": s
                            })
                        }, n && e.createElement("h3", {
                            className: "googlesitekit-cta__title"
                        }, n), r && "string" == typeof r && e.createElement("p", {
                            className: "googlesitekit-cta__description"
                        }, r), r && "string" != typeof r && e.createElement("div", {
                            className: "googlesitekit-cta__description"
                        }, r), i && e.createElement(c.a, {
                            href: a,
                            onClick: u,
                            inverse: !s,
                            caps: !0,
                            arrow: !0,
                            "aria-label": d,
                            external: l,
                            hideExternalIndicator: l
                        }, i))
                    };
                l.propTypes = {
                    title: a.a.string.isRequired,
                    description: a.a.oneOfType([a.a.string, a.a.node]),
                    ctaLink: a.a.string,
                    ctaLinkExternal: a.a.bool,
                    ctaLabel: a.a.string,
                    "aria-label": a.a.string,
                    error: a.a.bool,
                    onClick: a.a.func
                }, l.defaultProps = {
                    title: "",
                    description: "",
                    ctaLink: "",
                    ctaLabel: "",
                    error: !1,
                    onClick: function() {}
                }, t.a = l
            }).call(this, n(3))
        },
        84: function(e, t, n) {
            "use strict";
            (function(e) {
                n(46), n(47)
            }).call(this, n(18))
        },
        85: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "b", (function() {
                    return i
                })), n.d(t, "c", (function() {
                    return o
                })), n.d(t, "a", (function() {
                    return c
                }));
                var r = n(194),
                    a = n(62),
                    i = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Number.isNaN(Number(t))) return "";
                        var i = n.invertColor,
                            o = void 0 !== i && i;
                        return Object(r.a)(e.createElement(a.a, {
                            direction: t > 0 ? "up" : "down",
                            invertColor: o
                        }))
                    },
                    o = function(e) {
                        var t, n, r, a, i, o, c, l, s, u, d, f, g, p, m;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (n = t.data) || void 0 === n || null === (r = n.rows) || void 0 === r ? void 0 : r.length) || (null == e || null === (a = e[0]) || void 0 === a || null === (i = a.data) || void 0 === i || null === (o = i.rows) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (l = c.metrics) || void 0 === l || null === (s = l[0]) || void 0 === s || null === (u = s.values) || void 0 === u ? void 0 : u[0]) === (null == e || null === (d = e[0]) || void 0 === d || null === (f = d.data) || void 0 === f || null === (g = f.totals) || void 0 === g || null === (p = g[0]) || void 0 === p || null === (m = p.values) || void 0 === m ? void 0 : m[0])
                    },
                    c = function(e, t) {
                        return e > 0 && t > 0 ? e / t - 1 : e > 0 ? 1 : t > 0 ? -1 : 0
                    }
            }).call(this, n(3))
        },
        86: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return u
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(87),
                    o = n(88);

                function c(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function l(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
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

                function u(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                        a = l(l({}, s), t);
                    a.referenceSiteURL && (a.referenceSiteURL = a.referenceSiteURL.toString().replace(/\/+$/, ""));
                    var c = Object(i.a)(a, n);
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
                        trackEvent: Object(o.a)(a, n, c, r)
                    }
                }
            }).call(this, n(18))
        },
        87: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return i
                }));
                var r = n(51),
                    a = n(28);

                function i(t, n) {
                    var i, o = Object(r.a)(n);
                    return function() {
                        var n = e.document;
                        if (void 0 === i && (i = !!n.querySelector("script[".concat(a.b, "]"))), !i) {
                            var r = n.createElement("script");
                            r.setAttribute(a.b, ""), r.async = !0, r.src = "https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID, "&l=").concat(a.a), n.head.appendChild(r), o("js", new Date), o("config", t.trackingID, {
                                send_page_view: t.isSiteKitScreen
                            }), i = !0
                        }
                    }
                }
            }).call(this, n(18))
        },
        88: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return g
                }));
                var r = n(5),
                    a = n.n(r),
                    i = n(6),
                    o = n.n(i),
                    c = n(14),
                    l = n.n(c),
                    s = n(51),
                    u = n(30);

                function d(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function f(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? d(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function g(t, n, r, i) {
                    var o = Object(s.a)(n);
                    return function() {
                        var n = l()(a.a.mark((function n(c, l, s, d) {
                            var g, p, m, v, b, h, y, O, k, E;
                            return a.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (v = t.activeModules, b = t.referenceSiteURL, h = t.trackingEnabled, y = t.trackingID, O = t.userIDHash, h) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return r(), k = null !== (g = null === (p = e._googlesitekitUserData) || void 0 === p || null === (m = p.user) || void 0 === m ? void 0 : m.roles) && void 0 !== g ? g : [], E = {
                                            send_to: y,
                                            event_category: c,
                                            event_label: s,
                                            value: d,
                                            dimension1: b,
                                            dimension2: k.join(","),
                                            dimension3: O,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(u.a).join(","),
                                            dimension6: v.join(",")
                                        }, n.abrupt("return", new Promise((function(e) {
                                            var t, n, r = setTimeout((function() {
                                                    i.console.warn('Tracking event "'.concat(l, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                a = function() {
                                                    clearTimeout(r), e()
                                                };
                                            o("event", l, f(f({}, E), {}, {
                                                event_callback: a
                                            })), (null === (t = i._gaUserPrefs) || void 0 === t || null === (n = t.ioo) || void 0 === n ? void 0 : n.call(t)) && a()
                                        })));
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t, r, a) {
                            return n.apply(this, arguments)
                        }
                    }()
                }
            }).call(this, n(18))
        },
        89: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
                return c
            }));
            n(57);
            var r = "missing_required_scopes",
                a = "insufficientPermissions",
                i = "forbidden";

            function o(e) {
                return (null == e ? void 0 : e.code) === r
            }

            function c(e) {
                var t;
                return [a, i].includes(null == e || null === (t = e.data) || void 0 === t ? void 0 : t.reason)
            }
        },
        91: function(e, t, n) {
            "use strict";
            var r = n(2);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                d: "M2.253 12.252l7.399 5.658A13.055 13.055 0 009 22c0 1.43.229 2.805.652 4.09l-7.4 5.658A22.02 22.02 0 010 22c0-3.506.81-6.814 2.253-9.748z",
                fill: "#FBBC05"
            }), r.createElement("path", {
                d: "M9.652 17.91l-7.4-5.658A21.935 21.935 0 0122 0c5.6 0 10.6 2.1 14.5 5.5l-6.4 6.4C27.9 10.1 25.1 9 22 9c-5.77 0-10.64 3.725-12.348 8.91z",
                fill: "#EA4335"
            }), r.createElement("path", {
                d: "M2.25 31.742l7.396-5.67A12.975 12.975 0 0022 35c6.1 0 10.7-3.1 11.8-8.5H22V18h20.5c.3 1.3.5 2.7.5 4 0 14-10 22-21 22A21.935 21.935 0 012.25 31.742z",
                fill: "#34A853"
            }), r.createElement("path", {
                d: "M36.34 38.52l-7.025-5.437c2.297-1.45 3.895-3.685 4.485-6.583H22V18h20.5c.3 1.3.5 2.7.5 4 0 7.17-2.623 12.767-6.66 16.52z",
                fill: "#4285F4"
            }));
            t.a = function SvgLogoG(e) {
                return r.createElement("svg", a({
                    viewBox: "0 0 43 44"
                }, e), i)
            }
        },
        93: function(e, t, n) {
            "use strict";
            var r = n(105);
            n.d(t, "a", (function() {
                return r.a
            }));
            var a = n(106);
            n.d(t, "c", (function() {
                return a.a
            }));
            var i = n(107);
            n.d(t, "b", (function() {
                return i.a
            }))
        },
        94: function(e, t, n) {
            "use strict";
            var r = n(2),
                a = n(30),
                i = Object(r.createContext)(a.a);
            t.a = i
        },
        96: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    a = n.n(r),
                    i = n(8),
                    o = n.n(i),
                    c = n(130),
                    l = n(1),
                    s = n(21);

                function SourceLink(t) {
                    var n = t.name,
                        r = t.href,
                        a = t.className,
                        i = t.external;
                    return e.createElement("div", {
                        className: o()("googlesitekit-source-link", a)
                    }, Object(c.a)(Object(l.sprintf)(
                        /* translators: %s: source link */
                        Object(l.__)("Source: %s", "google-site-kit"), "<a>".concat(n, "</a>")), {
                        a: e.createElement(s.a, {
                            key: "link",
                            href: r,
                            external: i,
                            inherit: !0
                        })
                    }))
                }
                SourceLink.propTypes = {
                    name: a.a.string,
                    href: a.a.string,
                    className: a.a.string,
                    external: a.a.bool
                }, SourceLink.defaultProps = {
                    name: "",
                    href: "",
                    className: "",
                    external: !1
                }, t.a = SourceLink
            }).call(this, n(3))
        },
        97: function(e, t, n) {
            "use strict";
            var r = n(12),
                a = n.n(r),
                i = n(297),
                o = n(0),
                c = n.n(o),
                l = n(2),
                s = n(111);

            function Portal(e) {
                var t = e.children,
                    n = e.slug,
                    r = Object(l.useState)(document.createElement("div")),
                    o = a()(r, 1)[0];
                return Object(i.a)((function() {
                    n && o.classList.add("googlesitekit-portal-".concat(n));
                    var e = document.querySelector(".googlesitekit-plugin") || document.body;
                    return e.appendChild(o),
                        function() {
                            return e.removeChild(o)
                        }
                })), Object(s.createPortal)(t, o)
            }
            Portal.propTypes = {
                slug: c.a.string,
                children: c.a.node
            }, Portal.defaultProps = {
                slug: "",
                children: null
            }, t.a = Portal
        },
        98: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            })), n.d(t, "c", (function() {
                return b
            })), n.d(t, "b", (function() {
                return h
            }));
            var r = n(17),
                a = n.n(r),
                i = n(6),
                o = n.n(i),
                c = n(5),
                l = n.n(c),
                s = n(9),
                u = n.n(s),
                d = n(4),
                f = n.n(d),
                g = n(40),
                p = f.a.createRegistryControl,
                m = function(e) {
                    var t;
                    u()(e, "storeName is required to create a snapshot store.");
                    var n = {},
                        r = {
                            deleteSnapshot: l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, {
                                                payload: {},
                                                type: "DELETE_SNAPSHOT"
                                            };
                                        case 2:
                                            return t = e.sent, e.abrupt("return", t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })),
                            restoreSnapshot: l.a.mark((function e() {
                                var t, n, r, a, i, o, c = arguments;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = c.length > 0 && void 0 !== c[0] ? c[0] : {}, n = t.clearAfterRestore, r = void 0 === n || n, e.next = 4, {
                                                payload: {},
                                                type: "RESTORE_SNAPSHOT"
                                            };
                                        case 4:
                                            if (a = e.sent, i = a.cacheHit, o = a.value, !i) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 10, {
                                                payload: {
                                                    snapshot: o
                                                },
                                                type: "SET_STATE_FROM_SNAPSHOT"
                                            };
                                        case 10:
                                            if (!r) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 13, {
                                                payload: {},
                                                type: "DELETE_SNAPSHOT"
                                            };
                                        case 13:
                                            return e.abrupt("return", i);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })),
                            createSnapshot: l.a.mark((function e() {
                                var t;
                                return l.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, {
                                                payload: {},
                                                type: "CREATE_SNAPSHOT"
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
                        i = (t = {}, o()(t, "DELETE_SNAPSHOT", (function() {
                            return Object(g.a)("datastore::cache::".concat(e))
                        })), o()(t, "CREATE_SNAPSHOT", p((function(t) {
                            return function() {
                                return Object(g.d)("datastore::cache::".concat(e), t.stores[e].store.getState())
                            }
                        }))), o()(t, "RESTORE_SNAPSHOT", (function() {
                            return Object(g.b)("datastore::cache::".concat(e), 3600)
                        })), t);
                    return {
                        initialState: n,
                        actions: r,
                        controls: i,
                        reducer: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                r = t.type,
                                i = t.payload;
                            switch (r) {
                                case "SET_STATE_FROM_SNAPSHOT":
                                    var o = i.snapshot,
                                        c = (o.error, a()(o, ["error"]));
                                    return c;
                                default:
                                    return e
                            }
                        }
                    }
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.a;
                    return Object.values(e.stores).filter((function(e) {
                        return Object.keys(e.getActions()).includes("restoreSnapshot")
                    }))
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.a;
                    return Promise.all(v(e).map((function(e) {
                        return e.getActions().createSnapshot()
                    })))
                },
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.a;
                    return Promise.all(v(e).map((function(e) {
                        return e.getActions().restoreSnapshot()
                    })))
                }
        }
    },
    [
        [1071, 1, 0]
    ]
]);
(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [30], {
        1: function(e, t) {
            e.exports = googlesitekit.i18n
        },
        100: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return l
            })), r.d(t, "a", (function() {
                return d
            })), r.d(t, "b", (function() {
                return g
            }));
            var n, i = r(6),
                o = r.n(i),
                a = r(34),
                c = r(114),
                u = r(121),
                s = r(122),
                l = (n = {}, o()(n, a.c.QUARTER, 3), o()(n, a.c.HALF, 6), o()(n, a.c.FULL, 12), n),
                d = "googlesitekit-hidden",
                g = [s.a, u.a, c.a]
        },
        1009: function(e, t, r) {
            "use strict";
            r.r(t),
                function(e) {
                    var n = r(4),
                        i = r.n(n),
                        o = r(571);
                    Object(o.b)(i.a);
                    var a = Object(o.a)(i.a);
                    Object(o.c)(a), void 0 === e.googlesitekit && (e.googlesitekit = {}), e.googlesitekit.widgets = a, t.default = a
                }.call(this, r(18))
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
                    g = r.n(d);

                function Cell(t) {
                    var r, n = t.className,
                        o = t.alignTop,
                        c = t.alignMiddle,
                        s = t.alignBottom,
                        l = t.alignRight,
                        d = t.alignLeft,
                        f = t.smAlignRight,
                        p = t.mdAlignRight,
                        b = t.lgAlignRight,
                        A = t.smSize,
                        _ = t.smStart,
                        O = t.smOrder,
                        m = t.mdSize,
                        v = t.mdStart,
                        h = t.mdOrder,
                        E = t.lgSize,
                        y = t.lgStart,
                        S = t.lgOrder,
                        R = t.size,
                        D = t.children,
                        T = u()(t, ["className", "alignTop", "alignMiddle", "alignBottom", "alignRight", "alignLeft", "smAlignRight", "mdAlignRight", "lgAlignRight", "smSize", "smStart", "smOrder", "mdSize", "mdStart", "mdOrder", "lgSize", "lgStart", "lgOrder", "size", "children"]);
                    return e.createElement("div", i()({}, T, {
                        className: g()(n, "mdc-layout-grid__cell", (r = {
                            "mdc-layout-grid__cell--align-top": o,
                            "mdc-layout-grid__cell--align-middle": c,
                            "mdc-layout-grid__cell--align-bottom": s,
                            "mdc-layout-grid__cell--align-right": l,
                            "mdc-layout-grid__cell--align-left": d,
                            "mdc-layout-grid__cell--align-right-phone": f,
                            "mdc-layout-grid__cell--align-right-tablet": p,
                            "mdc-layout-grid__cell--align-right-desktop": b
                        }, a()(r, "mdc-layout-grid__cell--span-".concat(R), 12 >= R && R > 0), a()(r, "mdc-layout-grid__cell--span-".concat(E, "-desktop"), 12 >= E && E > 0), a()(r, "mdc-layout-grid__cell--start-".concat(y, "-desktop"), 12 >= y && y > 0), a()(r, "mdc-layout-grid__cell--order-".concat(S, "-desktop"), 12 >= S && S > 0), a()(r, "mdc-layout-grid__cell--span-".concat(m, "-tablet"), 8 >= m && m > 0), a()(r, "mdc-layout-grid__cell--start-".concat(v, "-tablet"), 8 >= v && v > 0), a()(r, "mdc-layout-grid__cell--order-".concat(h, "-tablet"), 8 >= h && h > 0), a()(r, "mdc-layout-grid__cell--span-".concat(A, "-phone"), 4 >= A && A > 0), a()(r, "mdc-layout-grid__cell--start-".concat(_, "-phone"), 4 >= _ && _ > 0), a()(r, "mdc-layout-grid__cell--order-".concat(O, "-phone"), 4 >= O && O > 0), r))
                    }), D)
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
                    g = Object(d.forwardRef)((function(t, r) {
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
                g.propTypes = {
                    alignLeft: u.a.bool,
                    fill: u.a.bool,
                    className: u.a.string,
                    children: u.a.node
                }, g.defaultProps = {
                    className: ""
                }, t.a = g
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
                return f
            })), r.d(t, "c", (function() {
                return p.b
            })), r.d(t, "k", (function() {
                return p.c
            })), r.d(t, "r", (function() {
                return b.c
            })), r.d(t, "s", (function() {
                return b.d
            })), r.d(t, "o", (function() {
                return b.b
            })), r.d(t, "j", (function() {
                return b.a
            })), r.d(t, "e", (function() {
                return A.a
            })), r.d(t, "p", (function() {
                return v
            })), r.d(t, "d", (function() {
                return h
            })), r.d(t, "g", (function() {
                return E.c
            })), r.d(t, "u", (function() {
                return E.i
            })), r.d(t, "h", (function() {
                return y.b
            })), r.d(t, "n", (function() {
                return y.c
            })), r.d(t, "b", (function() {
                return y.a
            })), r.d(t, "m", (function() {
                return S.b
            })), r.d(t, "i", (function() {
                return S.a
            })), r.d(t, "q", (function() {
                return S.d
            })), r.d(t, "l", (function() {
                return R
            })), r.d(t, "a", (function() {
                return D
            })), r.d(t, "y", (function() {
                return T
            })), r.d(t, "f", (function() {
                return j
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
                g = r.n(d),
                f = function(e) {
                    return g()(JSON.stringify(function e(t) {
                        var r = {};
                        return Object.keys(t).sort().forEach((function(n) {
                            var i = t[n];
                            i && "object" === l()(i) && !Array.isArray(i) && (i = e(i)), r[n] = i
                        })), r
                    }(e)))
                };
            var p = r(80),
                b = (r(84), r(72)),
                A = r(64);

            function _(e) {
                return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function O(e) {
                return "<p>".concat(e.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function m(e) {
                return e.replace(/\n/gi, "<br>")
            }

            function v(e) {
                for (var t = e, r = 0, n = [_, O, m]; r < n.length; r++) {
                    t = (0, n[r])(t)
                }
                return t
            }
            var h = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                E = r(59),
                y = r(85),
                S = r(50),
                R = function(e) {
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
                D = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var r = (t - e) / e;
                    return isNaN(r) || !i()(r) ? null : r
                },
                T = function(e) {
                    try {
                        return JSON.parse(e) && !!e
                    } catch (e) {
                        return !1
                    }
                },
                j = function(e) {
                    if (!e) return "";
                    var t = e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(t)
                    })).replace(/(\\)/g, "");
                    return a()(t)
                }
        },
        114: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ReportZero
                }));
                var n = r(0),
                    i = r.n(n),
                    o = r(1),
                    a = r(4),
                    c = r.n(a),
                    u = r(22),
                    s = r(83),
                    l = c.a.useSelect;

                function ReportZero(t) {
                    var r = t.moduleSlug,
                        n = l((function(e) {
                            return e(u.a).getModule(r)
                        }));
                    return e.createElement(s.a, {
                        title: Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("%s Gathering Data", "google-site-kit"), null == n ? void 0 : n.name),
                        description: Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("%s data is not yet available, please check back later", "google-site-kit"), null == n ? void 0 : n.name)
                    })
                }
                ReportZero.propTypes = {
                    moduleSlug: i.a.string.isRequired
                }
            }).call(this, r(3))
        },
        115: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "AREA_DASHBOARD_ALL_TRAFFIC", (function() {
                return n
            })), r.d(t, "AREA_DASHBOARD_SEARCH_FUNNEL", (function() {
                return i
            })), r.d(t, "AREA_DASHBOARD_ACQUISITION", (function() {
                return o
            })), r.d(t, "AREA_DASHBOARD_SPEED", (function() {
                return a
            })), r.d(t, "AREA_DASHBOARD_EARNINGS", (function() {
                return c
            })), r.d(t, "AREA_PAGE_DASHBOARD_SEARCH_FUNNEL", (function() {
                return u
            })), r.d(t, "AREA_PAGE_DASHBOARD_ALL_TRAFFIC", (function() {
                return s
            })), r.d(t, "AREA_PAGE_DASHBOARD_ACQUISITION", (function() {
                return l
            })), r.d(t, "AREA_PAGE_DASHBOARD_SPEED", (function() {
                return d
            })), r.d(t, "AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY", (function() {
                return g
            })), r.d(t, "AREA_MAIN_DASHBOARD_CONTENT_PRIMARY", (function() {
                return f
            })), r.d(t, "AREA_MAIN_DASHBOARD_SPEED_PRIMARY", (function() {
                return p
            })), r.d(t, "AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY", (function() {
                return b
            })), r.d(t, "AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY", (function() {
                return A
            })), r.d(t, "AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY", (function() {
                return _
            })), r.d(t, "AREA_ENTITY_DASHBOARD_SPEED_PRIMARY", (function() {
                return O
            })), r.d(t, "AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY", (function() {
                return m
            }));
            var n = "dashboardAllTraffic",
                i = "dashboardSearchFunnel",
                o = "dashboardAcquisition",
                a = "dashboardSpeed",
                c = "dashboardEarnings",
                u = "pageDashboardSearchFunnel",
                s = "pageDashboardAllTraffic",
                l = "pageDashboardAcquisition",
                d = "pageDashboardSpeed",
                g = "mainDashboardTrafficPrimary",
                f = "mainDashboardContentPrimary",
                p = "mainDashboardSpeedPrimary",
                b = "mainDashboardMonetizationPrimary",
                A = "entityDashboardTrafficPrimary",
                _ = "entityDashboardContentPrimary",
                O = "entityDashboardSpeedPrimary",
                m = "entityDashboardMonetizationPrimary";
            t.default = {
                AREA_DASHBOARD_ALL_TRAFFIC: n,
                AREA_DASHBOARD_SEARCH_FUNNEL: i,
                AREA_DASHBOARD_ACQUISITION: o,
                AREA_DASHBOARD_SPEED: a,
                AREA_DASHBOARD_EARNINGS: c,
                AREA_PAGE_DASHBOARD_SEARCH_FUNNEL: u,
                AREA_PAGE_DASHBOARD_ALL_TRAFFIC: s,
                AREA_PAGE_DASHBOARD_ACQUISITION: l,
                AREA_PAGE_DASHBOARD_SPEED: d,
                AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY: g,
                AREA_MAIN_DASHBOARD_CONTENT_PRIMARY: f,
                AREA_MAIN_DASHBOARD_SPEED_PRIMARY: p,
                AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY: b,
                AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY: A,
                AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY: _,
                AREA_ENTITY_DASHBOARD_SPEED_PRIMARY: O,
                AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY: m
            }
        },
        116: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return u
            }));
            var n = r(2),
                i = r(4),
                o = r.n(i),
                a = r(34),
                c = o.a.useDispatch;

            function u(e, t, r) {
                var i = c(a.a),
                    o = i.setWidgetState,
                    u = i.unsetWidgetState;
                Object(n.useEffect)((function() {
                    return o(e, t, r),
                        function() {
                            u(e, t, r)
                        }
                }), [e, t, r, o, u])
            }
        },
        121: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    i = r.n(n),
                    o = r(2),
                    a = r(1),
                    c = r(83),
                    u = r(4),
                    s = r.n(u),
                    l = r(13),
                    d = r(22),
                    g = r(38),
                    f = s.a.useSelect,
                    p = s.a.useDispatch,
                    b = function CompleteModuleActivationCTA(t) {
                        var r = t.moduleSlug,
                            n = t.title,
                            i = t.description,
                            u = f((function(e) {
                                return e(d.a).getModule(r)
                            })),
                            s = f((function(e) {
                                return e(d.a).getModuleStoreName(r)
                            })),
                            b = f((function(e) {
                                var t;
                                return null === (t = e(s)) || void 0 === t ? void 0 : t.getAdminReauthURL()
                            })),
                            A = f((function(e) {
                                return e(l.a).hasCapability(l.c)
                            })),
                            _ = p(g.a).navigateTo,
                            O = Object(o.useCallback)((function() {
                                return _(b)
                            }), [b, _]);
                        return (null == u ? void 0 : u.name) && b && A ? e.createElement(c.a, {
                            title: n || Object(a.sprintf)(
                                /* translators: %s: Module name */
                                Object(a.__)("Complete %s activation", "google-site-kit"), u.name),
                            description: i || Object(a.sprintf)(
                                /* translators: %s: Module name */
                                Object(a.__)("%s module setup needs to be completed", "google-site-kit"), u.name),
                            ctaLabel: Object(a.__)("Complete setup", "google-site-kit"),
                            "aria-label": Object(a.sprintf)(
                                /* translators: %s: Module name */
                                Object(a.__)("Complete %s setup", "google-site-kit"), u.name),
                            onClick: O
                        }) : null
                    };
                b.propTypes = {
                    moduleSlug: i.a.string.isRequired,
                    title: i.a.string,
                    description: i.a.string
                }, t.a = b
            }).call(this, r(3))
        },
        122: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ActivateModuleCTA
                }));
                var n = r(0),
                    i = r.n(n),
                    o = r(1),
                    a = r(4),
                    c = r.n(a),
                    u = r(22),
                    s = r(187),
                    l = r(83),
                    d = c.a.useSelect;

                function ActivateModuleCTA(t) {
                    var r = t.moduleSlug,
                        n = t.title,
                        i = t.description,
                        a = d((function(e) {
                            return e(u.a).getModule(r)
                        })),
                        c = Object(s.a)(r);
                    if (!c) return null;
                    var g = n,
                        f = i;
                    switch (r) {
                        case "analytics":
                            n || (g = Object(o.__)("Learn more about what visitors do on your site", "google-site-kit")), i || (f = Object(o.__)("Connect with Google Analytics to see unique visitors, goal completions, top pages and more", "google-site-kit"));
                            break;
                        case "pagespeed-insights":
                            i || (f = Object(o.__)("Google PageSpeed Insights gives you metrics about performance, accessibility, SEO and PWA", "google-site-kit"))
                    }
                    return e.createElement(l.a, {
                        title: g || Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("Activate %s", "google-site-kit"), a.name),
                        description: f || Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("%s module needs to be configured", "google-site-kit"), a.name),
                        ctaLabel: Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("Set up %s", "google-site-kit"), a.name),
                        onClick: c
                    })
                }
                ActivateModuleCTA.propTypes = {
                    moduleSlug: i.a.string.isRequired,
                    title: i.a.string,
                    description: i.a.string
                }
            }).call(this, r(3))
        },
        126: function(e, t, r) {
            "use strict";

            function Null() {
                return null
            }
            r.d(t, "a", (function() {
                return Null
            }))
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
        143: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            }));
            var n = r(1);

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t || {},
                    i = r.slug,
                    o = void 0 === i ? "" : i,
                    a = r.name,
                    c = void 0 === a ? "" : a,
                    u = r.owner,
                    s = void 0 === u ? {} : u;
                if (!o || !c) return e;
                var l = "",
                    d = "";
                return "analytics" === o ? e.match(/account/i) ? l = Object(n.__)("Your Google account does not have sufficient permissions for this Analytics account, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/property/i) ? l = Object(n.__)("Your Google account does not have sufficient permissions for this Analytics property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/view/i) && (l = Object(n.__)("Your Google account does not have sufficient permissions for this Analytics view, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")) : "search-console" === o && (l = Object(n.__)("Your Google account does not have sufficient permissions for this Search Console property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")), l || (l = Object(n.sprintf)(
                    /* translators: %s: module name */
                    Object(n.__)("Your Google account does not have sufficient permissions to access %s data, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit"), c)), s && s.login && (d = Object(n.sprintf)(
                    /* translators: %s: owner name */
                    Object(n.__)('This service was originally connected by the administrator "%s" — you can contact them for more information.', "google-site-kit"), s.login)), d || (d = Object(n.__)("This service was originally connected by an administrator — you can contact them for more information.", "google-site-kit")), "".concat(l, " ").concat(d)
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
        187: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return O
            }));
            var n = r(5),
                i = r.n(n),
                o = r(14),
                a = r.n(o),
                c = r(2),
                u = r(4),
                s = r.n(u),
                l = r(20),
                d = r(15),
                g = r(13),
                f = r(22),
                p = r(38),
                b = r(31),
                A = s.a.useSelect,
                _ = s.a.useDispatch;

            function O(e) {
                var t = Object(c.useContext)(l.b),
                    r = A((function(t) {
                        return t(f.a).getModule(e)
                    })),
                    n = A((function(e) {
                        return e(g.a).hasCapability(g.c)
                    })),
                    o = _(f.a).activateModule,
                    u = _(p.a).navigateTo,
                    s = _(d.c).setInternalServerError,
                    O = Object(c.useCallback)(a()(i.a.mark((function r() {
                        var n, a, c;
                        return i.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, o(e);
                                case 2:
                                    if (n = r.sent, a = n.error, c = n.response, a) {
                                        r.next = 11;
                                        break
                                    }
                                    return r.next = 8, Object(b.b)("".concat(t, "_widget-activation-cta"), "activate_module", e);
                                case 8:
                                    u(c.moduleReauthURL), r.next = 12;
                                    break;
                                case 11:
                                    s({
                                        id: "".concat(e, "-setup-error"),
                                        description: a.message
                                    });
                                case 12:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    }))), [o, e, u, s, t]);
                return (null == r ? void 0 : r.name) && n ? O : null
            }
        },
        19: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(16),
                    i = r.n(n),
                    o = r(17),
                    a = r.n(o),
                    c = r(8),
                    u = r.n(c),
                    s = r(0),
                    l = r.n(s),
                    d = r(124),
                    g = r(259),
                    f = r(2),
                    p = r(1),
                    b = r(7),
                    A = Object(f.forwardRef)((function(t, r) {
                        var n = t.children,
                            o = t.href,
                            c = t.text,
                            s = t.className,
                            l = t.danger,
                            A = t.disabled,
                            _ = t.target,
                            O = t.icon,
                            m = t.trailingIcon,
                            v = t["aria-label"],
                            h = t.title,
                            E = t.tooltip,
                            y = a()(t, ["children", "href", "text", "className", "danger", "disabled", "target", "icon", "trailingIcon", "aria-label", "title", "tooltip"]),
                            S = Object(f.useCallback)((function(e) {
                                null !== e && b.i.attachTo(e)
                            }), []),
                            R = Object(d.a)(r, S),
                            D = o && !A ? "a" : "button",
                            T = e.createElement(D, i()({
                                className: u()("mdc-button", s, {
                                    "mdc-button--raised": !c,
                                    "mdc-button--danger": l
                                }),
                                href: A ? void 0 : o,
                                ref: R,
                                disabled: !!A,
                                "aria-label": function() {
                                    var e = v;
                                    if ("_blank" !== _) return e;
                                    var t = Object(p._x)("(opens in a new tab)", "screen reader text", "google-site-kit");
                                    return "string" == typeof n && (e = e || n), e ? "".concat(e, " ").concat(t) : t
                                }(),
                                target: _ || "_self",
                                role: "a" === D ? "button" : void 0
                            }, y), O, n && e.createElement("span", {
                                className: "mdc-button__label"
                            }, n), m);
                        return E && (h || v) || O && (h || v) && void 0 === n ? e.createElement(g.a, {
                            title: h || v,
                            classes: {
                                popper: "googlesitekit-tooltip-popper",
                                tooltip: "googlesitekit-tooltip"
                            }
                        }, T) : T
                    }));
                A.displayName = "Button", A.propTypes = {
                    onClick: l.a.func,
                    children: l.a.node,
                    href: l.a.string,
                    text: l.a.bool,
                    className: l.a.string,
                    danger: l.a.bool,
                    disabled: l.a.bool,
                    icon: l.a.element,
                    trailingIcon: l.a.element,
                    title: l.a.string,
                    tooltip: l.a.bool
                }, A.defaultProps = {
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
                }, t.a = A
            }).call(this, r(3))
        },
        192: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ReportError
                }));
                var n = r(0),
                    i = r.n(n),
                    o = r(1),
                    a = r(4),
                    c = r.n(a),
                    u = r(22),
                    s = r(89),
                    l = r(143),
                    d = r(69),
                    g = r(81),
                    f = r(83),
                    p = c.a.useSelect;

                function ReportError(t) {
                    var r, n = t.moduleSlug,
                        i = t.error,
                        a = p((function(e) {
                            return e(u.a).getModule(n)
                        })),
                        c = Object(o.sprintf)(
                            /* translators: %s: module name */
                            Object(o.__)("Data error in %s", "google-site-kit"), null == a ? void 0 : a.name),
                        b = i.message;
                    Object(s.b)(i) && (c = Object(o.sprintf)(
                        /* translators: %s: module name */
                        Object(o.__)("Insufficient permissions in %s", "google-site-kit"), null == a ? void 0 : a.name), b = Object(l.a)(b, a));
                    var A = null == i || null === (r = i.data) || void 0 === r ? void 0 : r.reconnectURL,
                        _ = A ? e.createElement(g.a, {
                            message: b,
                            reconnectURL: A
                        }) : d.a.sanitize(b, {
                            ALLOWED_TAGS: []
                        });
                    return e.createElement(f.a, {
                        title: c,
                        description: _,
                        error: !0
                    })
                }
                ReportError.propTypes = {
                    moduleSlug: i.a.string.isRequired,
                    error: i.a.object.isRequired
                }
            }).call(this, r(3))
        },
        20: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r(2),
                i = Object(n.createContext)(""),
                o = (i.Consumer, i.Provider);
            t.b = i
        },
        205: function(e, t, r) {
            "use strict";
            r.d(t, "d", (function() {
                return g
            })), r.d(t, "b", (function() {
                return b
            })), r.d(t, "c", (function() {
                return A.a
            })), r.d(t, "a", (function() {
                return c.a
            })), r.d(t, "f", (function() {
                return _
            })), r.d(t, "e", (function() {
                return s
            }));
            var n = r(12),
                i = r.n(n),
                o = r(23),
                a = r.n(o),
                c = r(100),
                u = r(126);

            function s(e) {
                return !!e && e.Component === u.a
            }

            function l(e, t) {
                if (9 !== t) return [e, t];
                for (var r = (e = a()(e)).length - 1; 0 !== t && r >= 0;) 3 === e[r] ? (t -= 3, e[r] = 4) : 6 === e[r] && (t -= 6, e[r] = 8), r--;
                return [e, t]
            }

            function d(e, t) {
                return (Array.isArray(t.width) ? t.width : [t.width]).map((function(t) {
                    return {
                        counter: e + c.c[t],
                        width: t
                    }
                }))
            }

            function g(e, t) {
                var r = [],
                    n = [];
                if (!(null == e ? void 0 : e.length)) return {
                    columnWidths: r,
                    rowIndexes: n
                };
                var o = 0,
                    a = 0,
                    u = function(e, t) {
                        return e.counter - t.counter
                    },
                    g = function(e, t) {
                        var r = e.counter;
                        return t.counter - r
                    },
                    f = function(e) {
                        return e.counter <= 12
                    };
                if (e.forEach((function(p, b) {
                        if (s(t[p.slug])) return r.push(0), void n.push(a);
                        var A = d(o, p),
                            _ = function(e, t, r) {
                                for (; ++e < t.length;)
                                    if (!s(r[t[e].slug])) return t[e];
                                return null
                            }(b, e, t);
                        null !== _ && 0 !== d(A.sort(u)[0].counter, _).filter(f).length || A.some(f) && (A = (A = A.sort(g)).filter(f));
                        var O = A[0].width;
                        if (n.push(a), (o += c.c[O]) > 12) {
                            if (o -= c.c[O], n[b]++, 9 === o) {
                                var m = l(r, o),
                                    v = i()(m, 2);
                                r = v[0], o = v[1]
                            }
                            o = c.c[O], a++
                        } else 12 === o && (o = 0, a++);
                        r.push(c.c[O])
                    })), 9 === o) {
                    var p = l(r, o),
                        b = i()(p, 2);
                    r = b[0], o = b[1]
                }
                return {
                    columnWidths: r,
                    rowIndexes: n
                }
            }
            var f = r(158),
                p = r.n(f);

            function b(e, t, r) {
                var n = r.columnWidths,
                    i = r.rowIndexes,
                    o = [],
                    u = a()(n);
                if (!(null == e ? void 0 : e.length)) return {
                    gridColumnWidths: u,
                    overrideComponents: o
                };
                var s = null,
                    l = -1,
                    d = [];
                if (function(e, t) {
                        for (var r = {}, n = 0; n < e.length; n++) {
                            var i, o = e[n],
                                a = null == t ? void 0 : t[o.slug],
                                u = null == a ? void 0 : a.Component,
                                s = null == a || null === (i = a.metadata) || void 0 === i ? void 0 : i.moduleSlug,
                                l = c.b.includes(u);
                            if (!u || !s || !l) return !1;
                            if (r[s]) {
                                if (r[s] !== u) return !1
                            } else r[s] = u
                        }
                        return !(Object.keys(r).length > 1)
                    }(e, t)) {
                    var g = Array.from({
                        length: e.length - 1
                    }).fill(0);
                    return {
                        overrideComponents: [t[e[0].slug]],
                        gridColumnWidths: [12].concat(a()(g))
                    }
                }
                return e.forEach((function(r, a) {
                    var c, g, f, b, A;
                    if (o.push(null), s = t[r.slug], l = i[a], s)
                        if (g = s, f = t[null === (c = e[a + 1]) || void 0 === c ? void 0 : c.slug], b = l, A = i[a + 1], b === A && p()(g, f)) d.push(n[a]), u[a] = 0;
                        else if (d.length > 0) {
                        d.push(n[a]);
                        var _ = d.reduce((function(e, t) {
                            return e + t
                        }), 0);
                        o[a] = s, u[a] = _, d = []
                    }
                })), {
                    gridColumnWidths: u,
                    overrideComponents: o
                }
            }
            var A = r(206);

            function _(e) {
                return (Array.isArray(e) ? e : [e]).filter((function(e) {
                    return "string" == typeof e && e.length > 0
                }))
            }
        },
        206: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return f
                })), r.d(t, "b", (function() {
                    return b
                }));
                var n = r(16),
                    i = r.n(n),
                    o = r(67),
                    a = r.n(o),
                    c = r(209),
                    u = r(260),
                    s = r(261),
                    l = r(262),
                    d = r(263),
                    g = r(264),
                    f = a()((function(e) {
                        return {
                            Widget: p(e)(c.a),
                            WidgetReportZero: p(e)(u.a),
                            WidgetReportError: p(e)(s.a),
                            WidgetActivateModuleCTA: p(e)(l.a),
                            WidgetCompleteModuleActivationCTA: p(e)(d.a),
                            WidgetNull: p(e)(g.a)
                        }
                    }));

                function p(t) {
                    return function(r) {
                        var n = function WithWidgetSlug(n) {
                            return e.createElement(r, i()({}, n, {
                                widgetSlug: t
                            }))
                        };
                        return n.displayName = "WithWidgetSlug", (r.displayName || r.name) && (n.displayName += "(".concat(r.displayName || r.name, ")")), n
                    }
                }
                var b = function(t) {
                    var r = f(t);
                    return function(t) {
                        var n = function DecoratedComponent(n) {
                            return e.createElement(t, i()({}, n, r))
                        };
                        return n.displayName = "WithWidgetComponentProps", (t.displayName || t.name) && (n.displayName += "(".concat(t.displayName || t.name, ")")), n
                    }
                }
            }).call(this, r(3))
        },
        209: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(8),
                    i = r.n(n),
                    o = r(0),
                    a = r.n(o),
                    c = function Widget(t) {
                        var r = t.children,
                            n = t.className,
                            o = t.widgetSlug,
                            a = t.noPadding,
                            c = t.Header,
                            u = t.Footer;
                        return e.createElement("div", {
                            className: i()("googlesitekit-widget", "googlesitekit-widget--".concat(o), {
                                "googlesitekit-widget--no-padding": a
                            }, n)
                        }, c && e.createElement("div", {
                            className: "googlesitekit-widget__header"
                        }, e.createElement(c, null)), e.createElement("div", {
                            className: "googlesitekit-widget__body"
                        }, r), u && e.createElement("div", {
                            className: "googlesitekit-widget__footer"
                        }, e.createElement(u, null)))
                    };
                c.defaultProps = {
                    children: void 0,
                    noPadding: !1
                }, c.propTypes = {
                    children: a.a.node,
                    widgetSlug: a.a.string.isRequired,
                    noPadding: a.a.bool,
                    Header: a.a.elementType,
                    Footer: a.a.elementType
                }, t.a = c
            }).call(this, r(3))
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
                    g = r(1),
                    f = r(2),
                    p = Object(f.forwardRef)((function(t, r) {
                        var n, o = t["aria-label"],
                            c = t.arrow,
                            u = t.back,
                            s = t.caps,
                            f = t.children,
                            p = t.className,
                            b = t.danger,
                            A = t.disabled,
                            _ = t.external,
                            O = t.hideExternalIndicator,
                            m = t.href,
                            v = t.inherit,
                            h = t.inverse,
                            E = t.onClick,
                            y = t.small,
                            S = t.to,
                            R = a()(t, ["aria-label", "arrow", "back", "caps", "children", "className", "danger", "disabled", "external", "hideExternalIndicator", "href", "inherit", "inverse", "onClick", "small", "to"]),
                            D = m || S || !E ? S ? "ROUTER_LINK" : _ ? "EXTERNAL_LINK" : "LINK" : A ? "BUTTON_DISABLED" : "BUTTON",
                            T = "BUTTON" === D || "BUTTON_DISABLED" === D ? "button" : "ROUTER_LINK" === D ? d.b : "a",
                            j = ("EXTERNAL_LINK" === D && (n = Object(g._x)("(opens in a new tab)", "screen reader text", "google-site-kit")), "BUTTON_DISABLED" === D && (n = Object(g._x)("(disabled)", "screen reader text", "google-site-kit")), n ? o ? "".concat(o, " ").concat(n) : "string" == typeof f ? "".concat(f, " ").concat(n) : void 0 : o);
                        return e.createElement(T, i()({
                            "aria-label": j,
                            className: l()("googlesitekit-cta-link", p, {
                                "googlesitekit-cta-link--arrow": c,
                                "googlesitekit-cta-link--external": _ && !O,
                                "googlesitekit-cta-link--inverse": h,
                                "googlesitekit-cta-link--back": u,
                                "googlesitekit-cta-link--small": y,
                                "googlesitekit-cta-link--inherit": v,
                                "googlesitekit-cta-link--caps": s,
                                "googlesitekit-cta-link--danger": b,
                                "googlesitekit-cta-link--disabled": A
                            }),
                            disabled: A,
                            href: "LINK" === D || "EXTERNAL_LINK" === D ? m : void 0,
                            onClick: E,
                            rel: "EXTERNAL_LINK" === D ? "noopener noreferrer" : void 0,
                            ref: r,
                            target: "EXTERNAL_LINK" === D ? "_blank" : void 0,
                            to: S
                        }, R), f)
                    }));
                p.propTypes = {
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
                return i
            }));
            var n = "core/modules",
                i = "insufficient_module_dependencies"
        },
        260: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return WidgetReportZero
                }));
                var n = r(6),
                    i = r.n(n),
                    o = r(16),
                    a = r.n(o),
                    c = r(17),
                    u = r.n(c),
                    s = r(0),
                    l = r.n(s),
                    d = r(2),
                    g = r(116),
                    f = r(114);

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

                function WidgetReportZero(t) {
                    var r = t.widgetSlug,
                        n = t.moduleSlug,
                        i = u()(t, ["widgetSlug", "moduleSlug"]),
                        o = Object(d.useMemo)((function() {
                            return {
                                moduleSlug: n
                            }
                        }), [n]);
                    return Object(g.a)(r, f.a, o), e.createElement(f.a, a()({
                        moduleSlug: n
                    }, i))
                }
                WidgetReportZero.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(r), !0).forEach((function(t) {
                            i()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: l.a.string.isRequired
                }, f.a.propTypes)
            }).call(this, r(3))
        },
        261: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return WidgetReportError
                }));
                var n = r(6),
                    i = r.n(n),
                    o = r(17),
                    a = r.n(o),
                    c = r(0),
                    u = r.n(c),
                    s = r(192);

                function l(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function WidgetReportError(t) {
                    t.widgetSlug;
                    var r = a()(t, ["widgetSlug"]);
                    return e.createElement(s.a, r)
                }
                WidgetReportError.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(r), !0).forEach((function(t) {
                            i()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: u.a.string.isRequired
                }, s.a.propTypes)
            }).call(this, r(3))
        },
        262: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return WidgetActivateModuleCTA
                }));
                var n = r(6),
                    i = r.n(n),
                    o = r(16),
                    a = r.n(o),
                    c = r(17),
                    u = r.n(c),
                    s = r(0),
                    l = r.n(s),
                    d = r(2),
                    g = r(116),
                    f = r(122);

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

                function WidgetActivateModuleCTA(t) {
                    var r = t.widgetSlug,
                        n = t.moduleSlug,
                        i = u()(t, ["widgetSlug", "moduleSlug"]),
                        o = Object(d.useMemo)((function() {
                            return {
                                moduleSlug: n
                            }
                        }), [n]);
                    return Object(g.a)(r, f.a, o), e.createElement(f.a, a()({
                        moduleSlug: n
                    }, i))
                }
                WidgetActivateModuleCTA.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(r), !0).forEach((function(t) {
                            i()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: l.a.string.isRequired
                }, f.a.propTypes)
            }).call(this, r(3))
        },
        263: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return WidgetCompleteModuleActivationCTA
                }));
                var n = r(6),
                    i = r.n(n),
                    o = r(16),
                    a = r.n(o),
                    c = r(17),
                    u = r.n(c),
                    s = r(0),
                    l = r.n(s),
                    d = r(2),
                    g = r(116),
                    f = r(121);

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

                function WidgetCompleteModuleActivationCTA(t) {
                    var r = t.widgetSlug,
                        n = t.moduleSlug,
                        i = u()(t, ["widgetSlug", "moduleSlug"]),
                        o = Object(d.useMemo)((function() {
                            return {
                                moduleSlug: n
                            }
                        }), [n]);
                    return Object(g.a)(r, f.a, o), e.createElement(f.a, a()({
                        moduleSlug: n
                    }, i))
                }
                WidgetCompleteModuleActivationCTA.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(r), !0).forEach((function(t) {
                            i()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: l.a.string.isRequired
                }, f.a.propTypes)
            }).call(this, r(3))
        },
        264: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return WidgetNull
                }));
                var n = r(6),
                    i = r.n(n),
                    o = r(0),
                    a = r.n(o),
                    c = r(116),
                    u = r(126);

                function s(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }
                var l = {};

                function WidgetNull(t) {
                    var r = t.widgetSlug;
                    return Object(c.a)(r, u.a, l), e.createElement(u.a, null)
                }
                WidgetNull.propTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(r), !0).forEach((function(t) {
                            i()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    widgetSlug: a.a.string.isRequired
                }, u.a.propTypes)
            }).call(this, r(3))
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
                    return b
                })), r.d(t, "b", (function() {
                    return p
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
                    g = l.disableTracking,
                    f = (l.isTrackingEnabled, l.initializeSnippet),
                    p = l.trackEvent;

                function b(e) {
                    e ? d() : g()
                }
                c && u && f()
            }).call(this, r(18))
        },
        33: function(e, t) {
            e.exports = googlesitekit.api
        },
        34: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "c", (function() {
                return i
            })), r.d(t, "a", (function() {
                return o
            }));
            var n = {
                    BOXES: "boxes",
                    COMPOSITE: "composite"
                },
                i = {
                    QUARTER: "quarter",
                    HALF: "half",
                    FULL: "full"
                },
                o = "core/widgets"
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
        361: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return PostSearcherAutoSuggest
                }));
                var n = r(5),
                    i = r.n(n),
                    o = r(14),
                    a = r.n(o),
                    c = r(12),
                    u = r.n(c),
                    s = r(0),
                    l = r.n(s),
                    d = r(200),
                    g = r(2),
                    f = r(1),
                    p = r(68),
                    b = r(33),
                    A = r.n(b),
                    _ = r(4),
                    O = r.n(_),
                    m = r(362),
                    v = r(39),
                    h = r(15),
                    E = O.a.useSelect,
                    y = function() {};

                function PostSearcherAutoSuggest(t) {
                    var r = t.id,
                        n = t.match,
                        o = t.setMatch,
                        c = t.isLoading,
                        s = t.showDropdown,
                        l = void 0 === s || s,
                        b = t.setIsLoading,
                        _ = void 0 === b ? y : b,
                        O = t.setIsActive,
                        S = void 0 === O ? y : O,
                        R = t.autoFocus,
                        D = t.setCanSubmit,
                        T = void 0 === D ? y : D,
                        j = t.onClose,
                        N = void 0 === j ? y : j,
                        w = t.placeholder,
                        k = void 0 === w ? "" : w,
                        I = Object(g.useRef)(),
                        C = Object(g.useState)(""),
                        P = u()(C, 2),
                        L = P[0],
                        B = P[1],
                        H = null == n ? void 0 : n.title,
                        M = Object(m.a)(L, L === H ? 0 : 200),
                        W = Object(g.useState)([]),
                        F = u()(W, 2),
                        x = F[0],
                        U = F[1],
                        Y = Object(f.__)("No results found", "google-site-kit"),
                        G = Object(v.a)("unifiedDashboard"),
                        X = E((function(e) {
                            return e(h.c).getCurrentEntityTitle()
                        })),
                        q = Object(g.useRef)(null),
                        z = Object(g.useCallback)((function() {
                            S(!0)
                        }), [S]),
                        K = Object(g.useCallback)((function(e) {
                            var t, r, n;
                            (null === (t = e.relatedTarget) || void 0 === t ? void 0 : t.classList.contains("autocomplete__option--result")) || (S(!1), B(null !== (r = null !== (n = q.current) && void 0 !== n ? n : X) && void 0 !== r ? r : ""))
                        }), [X, S]),
                        Z = Object(g.useCallback)((function(e) {
                            if (Array.isArray(x) && e !== Y) {
                                var t = x.find((function(t) {
                                    return t.title.toLowerCase() === e.toLowerCase()
                                }));
                                t ? (q.current = t.title, T(!0), o(t), B(t.title)) : q.current = null
                            } else q.current = null, T(!1)
                        }), [x, T, o, Y, B]),
                        $ = Object(g.useCallback)((function(e) {
                            T(!1), B(e.target.value)
                        }), [T]);
                    Object(g.useEffect)((function() {
                        if ("" !== M && M !== X && (null == M ? void 0 : M.toLowerCase()) !== (null == H ? void 0 : H.toLowerCase())) {
                            var e = "undefined" == typeof AbortController ? void 0 : new AbortController;
                            return (t = a()(i.a.mark((function t() {
                                    var r, n;
                                    return i.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return _(!0), r = A.a.get("core", "search", "entity-search", {
                                                    query: encodeURIComponent(M)
                                                }, {
                                                    useCache: !1,
                                                    signal: null == e ? void 0 : e.signal
                                                }), I.current = r, t.prev = 3, t.next = 6, r;
                                            case 6:
                                                n = t.sent, U(n), t.next = 13;
                                                break;
                                            case 10:
                                                t.prev = 10, t.t0 = t.catch(3), U(null);
                                            case 13:
                                                return t.prev = 13, r === I.current && _(!1), t.finish(13);
                                            case 16:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [3, 10, 13, 16]
                                    ])
                                }))), function() {
                                    return t.apply(this, arguments)
                                })(),
                                function() {
                                    return null == e ? void 0 : e.abort()
                                }
                        }
                        var t
                    }), [M, _, X, H]), Object(g.useEffect)((function() {
                        L || U([])
                    }), [L]), Object(g.useEffect)((function() {
                        X && B(X)
                    }), [X]);
                    var Q = Object(g.useRef)(),
                        J = Object(g.useCallback)((function(e) {
                            var t = Q.current;
                            switch (e.keyCode) {
                                case p.e:
                                    (null == t ? void 0 : t.value) && (e.preventDefault(), t.selectionStart = 0, t.selectionEnd = 0);
                                    break;
                                case p.b:
                                    (null == t ? void 0 : t.value) && (e.preventDefault(), t.selectionStart = t.value.length, t.selectionEnd = t.value.length)
                            }
                            if (G) switch (e.keyCode) {
                                case p.d:
                                    return N();
                                case p.c:
                                    return Z(L)
                            }
                        }), [N, Z, L, G]);
                    return e.createElement(d.a, {
                        className: "autocomplete__wrapper",
                        onSelect: Z
                    }, e.createElement(d.b, {
                        ref: Q,
                        id: r,
                        className: "autocomplete__input autocomplete__input--default",
                        type: "text",
                        onBlur: K,
                        onChange: $,
                        onFocus: z,
                        placeholder: k,
                        onKeyDown: J,
                        value: L,
                        autoFocus: R
                    }), (!G || !c) && l && M !== X && "" !== M && 0 === (null == x ? void 0 : x.length) && e.createElement(d.e, {
                        portal: !1
                    }, e.createElement(d.c, {
                        className: "autocomplete__menu autocomplete__menu--inline"
                    }, e.createElement(d.d, {
                        value: Y,
                        className: "autocomplete__option autocomplete__option--no-results"
                    }))), l && "" !== M && M !== X && (null == x ? void 0 : x.length) > 0 && e.createElement(d.e, {
                        portal: !1
                    }, e.createElement(d.c, {
                        className: "autocomplete__menu autocomplete__menu--inline"
                    }, x.map((function(t) {
                        var r = t.id,
                            n = t.title;
                        return e.createElement(d.d, {
                            key: r,
                            value: n,
                            className: "autocomplete__option autocomplete__option--result"
                        })
                    })))))
                }
                PostSearcherAutoSuggest.propTypes = {
                    id: l.a.string,
                    match: l.a.object,
                    setCanSubmit: l.a.func,
                    setMatch: l.a.func,
                    isLoading: l.a.bool,
                    setIsLoading: l.a.func,
                    onKeyDown: l.a.func,
                    autoFocus: l.a.bool,
                    placeholder: l.a.string
                }
            }).call(this, r(3))
        },
        362: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return a
            }));
            var n = r(12),
                i = r.n(n),
                o = r(2);

            function a(e, t) {
                var r = Object(o.useState)(e),
                    n = i()(r, 2),
                    a = n[0],
                    c = n[1];
                return Object(o.useEffect)((function() {
                    var r = setTimeout((function() {
                        c(e)
                    }), t);
                    return function() {
                        clearTimeout(r)
                    }
                }), [e, t]), a
            }
        },
        38: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            }));
            var n = "core/location"
        },
        39: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return a
            }));
            var n = r(2),
                i = r(94),
                o = r(30),
                a = function(e) {
                    var t = Object(n.useContext)(i.a);
                    return Object(o.b)(e, t)
                }
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
                return b
            })), r.d(t, "b", (function() {
                return A
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
                        i()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function p(e, t) {
                if (t && Array.isArray(t)) {
                    var r = t.map((function(e) {
                        return "object" === a()(e) ? Object(d.v)(e) : e
                    }));
                    return "".concat(e, "::").concat(l()(JSON.stringify(r)))
                }
                return e
            }
            var b = {
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

            function A() {
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
                        return t || r ? (u()(t, "baseName is required."), i[p(t, r)]) : n
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
                    actions: b,
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "RECEIVE_ERROR":
                                var o = n.baseName,
                                    a = n.args,
                                    c = n.error;
                                return f(f({}, e), {}, o ? {
                                    errors: f(f({}, e.errors || {}), {}, i()({}, p(o, a), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var u = n.baseName,
                                    s = n.args,
                                    l = f({}, e);
                                if (u) {
                                    var d = p(u, s);
                                    l.errors = f({}, e.errors || {}), delete l.errors[d]
                                } else l.error = void 0;
                                return l;
                            case "CLEAR_ERRORS":
                                var g = n.baseName,
                                    b = f({}, e);
                                if (g)
                                    for (var A in b.errors = f({}, e.errors || {}), b.errors)(A === g || A.startsWith("".concat(g, "::"))) && delete b.errors[A];
                                else b.errors = {}, b.error = void 0;
                                return b;
                            default:
                                return e
                        }
                    },
                    resolvers: {},
                    selectors: e
                }
            }
        },
        571: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return f
            })), r.d(t, "c", (function() {
                return P
            })), r.d(t, "a", (function() {
                return L
            }));
            var n = r(34),
                i = r(4),
                o = r.n(i),
                a = r(739),
                c = r(741),
                u = r(9),
                s = r.n(u),
                l = {
                    selectors: {
                        isWidgetContextActive: (0, o.a.createRegistrySelector)((function(e) {
                            return function(t, r) {
                                return s()(r, "contextSlug is required to check a widget context is active."), e(n.a).getWidgetAreas(r).some((function(t) {
                                    return e(n.a).isWidgetAreaActive(t.slug)
                                }))
                            }
                        }))
                    }
                },
                d = r(54),
                g = o.a.combineStores(o.a.commonStore, a.a, c.a, l, Object(d.b)()),
                f = function(e) {
                    e.registerStore(n.a, g)
                },
                p = r(17),
                b = r.n(p),
                A = r(1),
                _ = r(743),
                O = r(79),
                m = r(115),
                v = r(30),
                h = O.CONTEXT_DASHBOARD,
                E = O.CONTEXT_PAGE_DASHBOARD,
                y = b()(O, ["CONTEXT_DASHBOARD", "CONTEXT_PAGE_DASHBOARD"]),
                S = m.AREA_DASHBOARD_ALL_TRAFFIC,
                R = m.AREA_DASHBOARD_SEARCH_FUNNEL,
                D = m.AREA_DASHBOARD_ACQUISITION,
                T = m.AREA_DASHBOARD_SPEED,
                j = m.AREA_DASHBOARD_EARNINGS,
                N = m.AREA_PAGE_DASHBOARD_SEARCH_FUNNEL,
                w = m.AREA_PAGE_DASHBOARD_ALL_TRAFFIC,
                k = m.AREA_PAGE_DASHBOARD_ACQUISITION,
                I = m.AREA_PAGE_DASHBOARD_SPEED,
                C = b()(m, ["AREA_DASHBOARD_ALL_TRAFFIC", "AREA_DASHBOARD_SEARCH_FUNNEL", "AREA_DASHBOARD_ACQUISITION", "AREA_DASHBOARD_SPEED", "AREA_DASHBOARD_EARNINGS", "AREA_PAGE_DASHBOARD_SEARCH_FUNNEL", "AREA_PAGE_DASHBOARD_ALL_TRAFFIC", "AREA_PAGE_DASHBOARD_ACQUISITION", "AREA_PAGE_DASHBOARD_SPEED"]);

            function P(e) {
                if (e.registerWidgetArea(S, {
                        title: Object(A.__)("Your Traffic at a Glance", "google-site-kit"),
                        subtitle: Object(A.__)("How people found your site", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 1
                    }, h), e.registerWidgetArea(R, {
                        title: Object(A.__)("Search Funnel", "google-site-kit"),
                        subtitle: Object(A.__)("How your site appeared in Search results and how many visitors you got from Search", "google-site-kit"),
                        style: n.b.COMPOSITE,
                        priority: 2
                    }, h), e.registerWidgetArea(D, {
                        title: Object(A.__)("Acquisition", "google-site-kit"),
                        subtitle: Object(A.__)("Your most popular pages and how people found them from Search", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 3
                    }, h), e.registerWidgetArea(T, {
                        title: Object(A.__)("Page Speed and Experience", "google-site-kit"),
                        subtitle: Object(A.__)("How fast your home page loads, how quickly people can interact with your content, and how stable your content is", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 4
                    }, h), e.registerWidgetArea(j, {
                        title: Object(A.__)("Earnings", "google-site-kit"),
                        subtitle: Object(A.__)("How much you’re earning from your content through AdSense", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 5
                    }, h), e.registerWidgetArea(N, {
                        title: Object(A.__)("Search Funnel", "google-site-kit"),
                        subtitle: Object(A.__)("How your site appeared in Search results and how many visitors you got from Search", "google-site-kit"),
                        style: n.b.COMPOSITE,
                        priority: 1
                    }, E), e.registerWidgetArea(w, {
                        title: Object(A.__)("Your Traffic at a Glance", "google-site-kit"),
                        subtitle: Object(A.__)("How people found your page", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 2
                    }, E), e.registerWidgetArea(k, {
                        title: Object(A.__)("Acquisition", "google-site-kit"),
                        subtitle: Object(A.__)("What people searched for to find your page", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 3
                    }, E), e.registerWidgetArea(I, {
                        title: Object(A.__)("Page Speed and Experience", "google-site-kit"),
                        subtitle: Object(A.__)("How fast your page loads, how quickly people can interact with your content, and how stable your content is", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 4
                    }, E), e.registerWidget("urlSearch", {
                        priority: 100,
                        width: [n.c.HALF, n.c.FULL],
                        Component: _.a,
                        wrapWidget: !1
                    }, [D]), Object(v.b)("unifiedDashboard")) {
                    var t = y.CONTEXT_MAIN_DASHBOARD_TRAFFIC,
                        r = y.CONTEXT_MAIN_DASHBOARD_CONTENT,
                        i = y.CONTEXT_MAIN_DASHBOARD_SPEED,
                        o = y.CONTEXT_MAIN_DASHBOARD_MONETIZATION,
                        a = y.CONTEXT_ENTITY_DASHBOARD_TRAFFIC,
                        c = y.CONTEXT_ENTITY_DASHBOARD_CONTENT,
                        u = y.CONTEXT_ENTITY_DASHBOARD_SPEED,
                        s = y.CONTEXT_ENTITY_DASHBOARD_MONETIZATION,
                        l = C.AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY,
                        d = C.AREA_MAIN_DASHBOARD_CONTENT_PRIMARY,
                        g = C.AREA_MAIN_DASHBOARD_SPEED_PRIMARY,
                        f = C.AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY,
                        p = C.AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY,
                        b = C.AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY,
                        O = C.AREA_ENTITY_DASHBOARD_SPEED_PRIMARY,
                        m = C.AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY;
                    e.registerWidgetArea(l, {
                        title: Object(A.__)("Find out how your audience is growing", "google-site-kit"),
                        subtitle: Object(A.__)("Track your site’s traffic over time", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 1
                    }, t), e.registerWidgetArea(d, {
                        title: Object(A.__)("See how your content is doing", "google-site-kit"),
                        subtitle: Object(A.__)("Keep track of your most popular pages and how people found them from Search", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 1
                    }, r), e.registerWidgetArea(g, {
                        title: Object(A.__)("Find out how visitors experience your site", "google-site-kit"),
                        subtitle: Object(A.__)("Keep track of how fast your pages are and get specific recommendations on what to improve", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 1
                    }, i), e.registerWidgetArea(f, {
                        title: Object(A.__)("Find out how much you’re earning from your content", "google-site-kit"),
                        subtitle: Object(A.__)("Track your AdSense revenue over time", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 1
                    }, o), e.registerWidgetArea(p, {
                        title: Object(A.__)("Find out how your audience is growing", "google-site-kit"),
                        subtitle: Object(A.__)("Track traffic to this page over time", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 1
                    }, a), e.registerWidgetArea(b, {
                        title: Object(A.__)("See how your content is doing", "google-site-kit"),
                        subtitle: Object(A.__)("Understand how people found this page from Search", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 1
                    }, c), e.registerWidgetArea(O, {
                        title: Object(A.__)("Find out how visitors experience this page", "google-site-kit"),
                        subtitle: Object(A.__)("Keep track of how fast your page is and get specific recommendations on what to improve", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 1
                    }, u), e.registerWidgetArea(m, {
                        title: Object(A.__)("Find out how much you’re earning from your content", "google-site-kit"),
                        subtitle: Object(A.__)("Track your AdSense revenue over time", "google-site-kit"),
                        style: n.b.BOXES,
                        priority: 1
                    }, s)
                }
            }

            function L(e) {
                var t = e.dispatch,
                    r = e.select,
                    i = {
                        WIDGET_AREA_STYLES: n.b,
                        WIDGET_WIDTHS: n.c,
                        registerWidgetArea: function(e, r, o) {
                            t(n.a).registerWidgetArea(e, r), o && i.assignWidgetArea(e, o)
                        },
                        registerWidget: function(e, r, o) {
                            t(n.a).registerWidget(e, r), o && i.assignWidget(e, o)
                        },
                        assignWidgetArea: function(e, r) {
                            t(n.a).assignWidgetArea(e, r)
                        },
                        assignWidget: function(e, r) {
                            t(n.a).assignWidget(e, r)
                        },
                        isWidgetAreaRegistered: function(e) {
                            return r(n.a).isWidgetAreaRegistered(e)
                        },
                        isWidgetRegistered: function(e) {
                            return r(n.a).isWidgetRegistered(e)
                        }
                    };
                return i
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
                return f
            })), r.d(t, "g", (function() {
                return p
            })), r.d(t, "h", (function() {
                return d.a
            })), r.d(t, "d", (function() {
                return b
            })), r.d(t, "c", (function() {
                return _
            })), r.d(t, "i", (function() {
                return g
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
                g = function(e) {
                    a()(Object(d.a)(e), n);
                    var t = e.split("-"),
                        r = l()(t, 3),
                        i = r[0],
                        o = r[1],
                        c = r[2];
                    return new Date(i, o - 1, c)
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = g(e);
                    return r.setDate(r.getDate() - t), u(r)
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e.split("-");
                    return 3 === t.length && "last" === t[0] && !Number.isNaN(t[1]) && !Number.isNaN(parseFloat(t[1])) && "days" === t[2]
                };

            function b(e) {
                var t = e.match(/last-(\d+)-days/);
                if (t && t[1]) return parseInt(t[1], 10);
                throw new Error("Unrecognized date range slug.")
            }
            var A = r(1);

            function _() {
                var e = function(e) {
                    return Object(A.sprintf)(
                        /* translators: %s: number of days */
                        Object(A._n)("Last %s day", "Last %s days", e, "google-site-kit"), e)
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
        7: function(e, t, r) {
            "use strict";
            var n = r(90),
                i = r.n(n);
            r.d(t, "n", (function() {
                return i.a
            })), r.d(t, "c", (function() {
                return n.HelperText
            })), r.d(t, "d", (function() {
                return n.Input
            }));
            var o = r(195);
            r.d(t, "i", (function() {
                return o.a
            }));
            var a = r(242);
            r.d(t, "f", (function() {
                return a.a
            }));
            var c = r(243);
            r.d(t, "h", (function() {
                return c.a
            }));
            var u = r(110),
                s = r.n(u);
            r.d(t, "m", (function() {
                return s.a
            })), r.d(t, "k", (function() {
                return u.Option
            }));
            var l = r(244);
            r.d(t, "j", (function() {
                return l.a
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
                    return h
                })), r.d(t, "d", (function() {
                    return y
                })), r.d(t, "b", (function() {
                    return S
                })), r.d(t, "a", (function() {
                    return R
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
                    g = r(67),
                    f = r.n(g),
                    p = r(1);

                function b(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function A(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? b(Object(r), !0).forEach((function(t) {
                            u()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var _ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = O(e, t),
                            n = r.formatUnit,
                            i = r.formatDecimal;
                        try {
                            return n()
                        } catch (e) {
                            return i()
                        }
                    },
                    O = function(e) {
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
                                    a = A(A({
                                        unitDisplay: void 0 === o ? "short" : o
                                    }, l()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? y(i, A(A({}, a), {}, {
                                    unit: "second"
                                })) : Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), i ? y(i, A(A({}, a), {}, {
                                        unit: "second"
                                    })) : "", n ? y(n, A(A({}, a), {}, {
                                        unit: "minute"
                                    })) : "", r ? y(r, A(A({}, a), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var t = Object(p.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(p.__)("%ds", "google-site-kit"), i);
                                if (0 === e) return t;
                                var o = Object(p.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(p.__)("%dm", "google-site-kit"), n),
                                    a = Object(p.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(p.__)("%dh", "google-site-kit"), r);
                                return Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), i ? t : "", n ? o : "", r ? a : "").trim()
                            }
                        }
                    },
                    m = function(e) {
                        return 1e6 <= e ? Math.round(e / 1e5) / 10 : 1e4 <= e ? Math.round(e / 1e3) : 1e3 <= e ? Math.round(e / 100) / 10 : e
                    },
                    v = function(e) {
                        var t = {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        };
                        return 1e6 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in millions.
                            Object(p.__)("%sM", "google-site-kit"), y(m(e), e % 10 == 0 ? {} : t)) : 1e4 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), y(m(e))) : 1e3 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), y(m(e), e % 10 == 0 ? {} : t)) : y(e, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    h = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(d.isFinite)(e) ? e : Number(e), Object(d.isFinite)(e) || (console.warn("Invalid number", e, a()(e)), e = 0);
                        var r = {};
                        if ("%" === t) r = {
                            style: "percent",
                            maximumFractionDigits: 2
                        };
                        else {
                            if ("s" === t) return _(e, {
                                unitDisplay: "narrow"
                            });
                            t && "string" == typeof t ? r = {
                                style: "currency",
                                currency: t
                            } : Object(d.isPlainObject)(t) && (r = A({}, t))
                        }
                        var n = r,
                            i = n.style,
                            o = void 0 === i ? "metric" : i;
                        return "metric" === o ? v(e) : "duration" === o ? _(e, t) : y(e, r)
                    },
                    E = f()(console.warn),
                    y = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? R() : r,
                            o = l()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(n, o).format(e)
                        } catch (t) {
                            E("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n), ", ").concat(JSON.stringify(o), " ).format( ").concat(a()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, u = ["signDisplay", "compactDisplay"], s = {}, d = 0, g = Object.entries(o); d < g.length; d++) {
                            var f = i()(g[d], 2),
                                p = f[0],
                                b = f[1];
                            c[p] && b === c[p] || (u.includes(p) || (s[p] = b))
                        }
                        try {
                            return new Intl.NumberFormat(n, s).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(n).format(e)
                        }
                    },
                    S = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? R() : r,
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
                        var s = Object(p.__)(", ", "google-site-kit");
                        return e.join(s)
                    },
                    R = function() {
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
        739: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(6),
                    i = r.n(n),
                    o = r(9),
                    a = r.n(o),
                    c = r(4),
                    u = r.n(c),
                    s = r(34),
                    l = r(740);

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
                            i()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var f = u.a.createRegistrySelector,
                    p = Object.keys(s.b).map((function(e) {
                        return "WIDGET_AREA_STYLES.".concat(e)
                    })).join(", "),
                    b = {
                        assignWidgetArea: function(e, t) {
                            return {
                                payload: {
                                    slug: e,
                                    contextSlugs: "string" == typeof t ? [t] : t
                                },
                                type: "ASSIGN_WIDGET_AREA"
                            }
                        },
                        registerWidgetArea: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t.priority,
                                n = void 0 === r ? 10 : r,
                                i = t.style,
                                o = void 0 === i ? s.b.BOXES : i,
                                c = t.title,
                                u = t.subtitle,
                                l = t.Icon;
                            return a()(e, "slug is required."), a()(c, "settings.title is required."), a()(Object.values(s.b).includes(o), "settings.style must be one of: ".concat(p, ".")), {
                                payload: {
                                    slug: e,
                                    settings: {
                                        priority: n,
                                        style: o,
                                        title: c,
                                        subtitle: u,
                                        Icon: l
                                    }
                                },
                                type: "REGISTER_WIDGET_AREA"
                            }
                        }
                    },
                    A = {
                        isWidgetAreaActive: f((function(e) {
                            return function(t, r) {
                                return a()(r, "widgetAreaSlug is required to check a widget area is active."), e(s.a).getWidgets(r).some((function(t) {
                                    return e(s.a).isWidgetActive(t.slug)
                                }))
                            }
                        })),
                        isWidgetAreaRegistered: function(e, t) {
                            return void 0 !== e.areas[t]
                        },
                        getWidgetAreas: function(e, t) {
                            a()(t, "contextSlug is required.");
                            var r = e.areas,
                                n = e.contextAssignments;
                            return Object(l.a)(Object.values(r).filter((function(e) {
                                return n[t] && n[t].includes(e.slug)
                            })), "priority")
                        },
                        getWidgetArea: function(e, t) {
                            return a()(t, "slug is required."), e.areas[t] || null
                        }
                    };
                t.a = {
                    initialState: {
                        areas: {},
                        contextAssignments: {}
                    },
                    actions: b,
                    controls: {},
                    reducer: function(t, r) {
                        var n = r.type,
                            o = r.payload;
                        switch (n) {
                            case "ASSIGN_WIDGET_AREA":
                                var a = o.slug,
                                    c = o.contextSlugs,
                                    u = t.contextAssignments;
                                return c.forEach((function(e) {
                                    void 0 === u[e] && (u[e] = []), u[e].includes(a) || u[e].push(a)
                                })), g(g({}, t), {}, {
                                    contextAssignments: u
                                });
                            case "REGISTER_WIDGET_AREA":
                                var s = o.slug,
                                    l = o.settings;
                                return void 0 !== t.areas[s] ? (e.console.warn('Could not register widget area with slug "'.concat(s, '". Widget area "').concat(s, '" is already registered.')), t) : g(g({}, t), {}, {
                                    areas: g(g({}, t.areas), {}, i()({}, s, g(g({}, l), {}, {
                                        slug: s
                                    })))
                                });
                            default:
                                return t
                        }
                    },
                    resolvers: {},
                    selectors: A
                }
            }).call(this, r(18))
        },
        740: function(e, t, r) {
            "use strict";

            function n(e, t) {
                return e.sort((function(e, r) {
                    return e[t] > r[t] ? 1 : e[t] < r[t] ? -1 : 0
                }))
            }
            r.d(t, "a", (function() {
                return n
            }))
        },
        741: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(6),
                    i = r.n(n),
                    o = r(9),
                    a = r.n(o),
                    c = r(742),
                    u = r.n(c),
                    s = r(4),
                    l = r.n(s),
                    d = r(205),
                    g = r(34);

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

                function p(e) {
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
                var b = l.a.createRegistrySelector,
                    A = Object.keys(g.c).map((function(e) {
                        return "WIDGET_WIDTHS.".concat(e)
                    })).join(", "),
                    _ = {
                        areaAssignments: {},
                        registryKey: void 0,
                        widgets: {},
                        widgetStates: {}
                    },
                    O = {
                        assignWidget: function(e, t) {
                            return {
                                payload: {
                                    slug: e,
                                    areaSlugs: "string" == typeof t ? [t] : t
                                },
                                type: "ASSIGN_WIDGET"
                            }
                        },
                        registerWidget: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t.Component,
                                n = t.priority,
                                i = void 0 === n ? 10 : n,
                                o = t.width,
                                c = void 0 === o ? g.c.QUARTER : o,
                                u = t.wrapWidget,
                                s = void 0 === u || u,
                                l = t.modules,
                                f = Object.values(g.c);
                            return a()(r, "component is required to register a widget."), a()(Array.isArray(c) && c.some(f.includes, f) || !Array.isArray(c) && f.includes(c), "Widget width should be one of: ".concat(A, ', but "').concat(c, '" was provided.')), {
                                payload: {
                                    slug: e,
                                    settings: {
                                        Component: r,
                                        priority: i,
                                        width: c,
                                        wrapWidget: s,
                                        modules: Object(d.f)(l)
                                    }
                                },
                                type: "REGISTER_WIDGET"
                            }
                        },
                        setWidgetState: function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return {
                                payload: {
                                    slug: e,
                                    Component: t,
                                    metadata: r
                                },
                                type: "SET_WIDGET_STATE"
                            }
                        },
                        unsetWidgetState: function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return {
                                payload: {
                                    slug: e,
                                    Component: t,
                                    metadata: r
                                },
                                type: "UNSET_WIDGET_STATE"
                            }
                        }
                    },
                    m = {
                        isWidgetActive: b((function(e) {
                            return function(t, r) {
                                return a()(r, "slug is required to check a widget is active."), !Object(d.e)(e(g.a).getWidgetState(r))
                            }
                        })),
                        isWidgetRegistered: function(e, t) {
                            return void 0 !== e.widgets[t]
                        },
                        getWidgets: function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                n = r.modules;
                            a()(t, "widgetAreaSlug is required.");
                            var i = e.areaAssignments,
                                o = Object.values(e.widgets).filter((function(e) {
                                    var r;
                                    return null === (r = i[t]) || void 0 === r ? void 0 : r.includes(e.slug)
                                }));
                            if (n) {
                                var c = Object(d.f)(n);
                                o = o.filter((function(e) {
                                    var t;
                                    return !(null === (t = e.modules) || void 0 === t ? void 0 : t.length) || u()(e.modules, c).length === c.length
                                }))
                            }
                            return o.sort((function(e, t) {
                                return e.priority - t.priority
                            }))
                        },
                        getWidget: function(e, t) {
                            return a()(t, "slug is required to get a widget."), e.widgets[t] || null
                        },
                        getWidgetState: function(e, t) {
                            return e.widgetStates[t] || null
                        },
                        getWidgetStates: function(e) {
                            return e.widgetStates
                        }
                    };
                t.a = {
                    initialState: _,
                    actions: O,
                    controls: {},
                    reducer: function(t, r) {
                        var n = r.type,
                            o = r.payload;
                        switch (n) {
                            case "ASSIGN_WIDGET":
                                var a = o.slug,
                                    c = o.areaSlugs,
                                    u = t.areaAssignments;
                                return c.forEach((function(e) {
                                    void 0 === u[e] && (u[e] = []), u[e].includes(a) || u[e].push(a)
                                })), p(p({}, t), {}, {
                                    areaAssignments: u
                                });
                            case "REGISTER_WIDGET":
                                var s = o.slug,
                                    l = o.settings;
                                return void 0 !== t.widgets[s] ? (e.console.warn('Could not register widget with slug "'.concat(s, '". Widget "').concat(s, '" is already registered.')), t) : p(p({}, t), {}, {
                                    widgets: p(p({}, t.widgets), {}, i()({}, s, p(p({}, l), {}, {
                                        slug: s
                                    })))
                                });
                            case "SET_WIDGET_STATE":
                                var d = o.slug,
                                    g = o.Component,
                                    f = o.metadata;
                                return p(p({}, t), {}, {
                                    widgetStates: p(p({}, t.widgetStates), {}, i()({}, d, {
                                        Component: g,
                                        metadata: f
                                    }))
                                });
                            case "UNSET_WIDGET_STATE":
                                var b, A, _ = o.slug,
                                    O = o.Component,
                                    m = o.metadata,
                                    v = p({}, t.widgetStates);
                                return (null == v || null === (b = v[_]) || void 0 === b ? void 0 : b.Component) === O && (null == v || null === (A = v[_]) || void 0 === A ? void 0 : A.metadata) === m && delete v[_], p(p({}, t), {}, {
                                    widgetStates: v
                                });
                            default:
                                return t
                        }
                    },
                    resolvers: {},
                    selectors: m
                }
            }).call(this, r(18))
        },
        743: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(5),
                    i = r.n(n),
                    o = r(14),
                    a = r.n(o),
                    c = r(12),
                    u = r.n(c),
                    s = r(2),
                    l = r(1),
                    d = r(4),
                    g = r.n(d),
                    f = r(7),
                    p = r(20),
                    b = r(31),
                    A = r(15),
                    _ = r(38),
                    O = r(19),
                    m = r(361),
                    v = g.a.useSelect,
                    h = g.a.useDispatch;
                t.a = function URLSearchWidget(t) {
                    var r = t.Widget,
                        n = Object(s.useState)(!1),
                        o = u()(n, 2),
                        c = o[0],
                        d = o[1],
                        g = Object(s.useState)({}),
                        E = u()(g, 2),
                        y = E[0],
                        S = E[1],
                        R = Object(s.useContext)(p.b),
                        D = v((function(e) {
                            return (null == y ? void 0 : y.url) ? e(A.c).getAdminURL("googlesitekit-dashboard", {
                                permaLink: y.url
                            }) : null
                        })),
                        T = h(_.a).navigateTo,
                        j = Object(s.useCallback)(a()(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!D) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, Object(b.b)("".concat(R, "_urlsearch-widget"), "open_urldetails");
                                    case 3:
                                        T(D);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [D, T, R]);
                    return e.createElement(f.a, null, e.createElement(r, {
                        Header: function Header() {
                            return e.createElement("h3", {
                                className: "googlesitekit-subheading-1 googlesitekit-widget__header-title"
                            }, Object(l.__)("Search for individual page or post information", "google-site-kit"))
                        },
                        noPadding: !0
                    }, e.createElement(f.b, null, e.createElement(f.l, null, e.createElement(f.a, {
                        size: 12
                    }, e.createElement("div", {
                        className: "googlesitekit-post-searcher"
                    }, e.createElement("label", {
                        className: "googlesitekit-post-searcher__label",
                        htmlFor: "urlsearch-autocomplete"
                    }, Object(l.__)("Title or URL", "google-site-kit")), e.createElement(m.a, {
                        id: "urlsearch-autocomplete",
                        setCanSubmit: d,
                        setMatch: S
                    }), e.createElement("div", {
                        className: "googlesitekit-post-searcher__button-wrapper"
                    }, e.createElement(O.a, {
                        onClick: j,
                        className: "googlesitekit-post-searcher__button",
                        disabled: !c
                    }, Object(l.__)("View Data", "google-site-kit")))))))))
                }
            }).call(this, r(3))
        },
        79: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "CONTEXT_DASHBOARD", (function() {
                return n
            })), r.d(t, "CONTEXT_PAGE_DASHBOARD", (function() {
                return i
            })), r.d(t, "CONTEXT_MODULE_SEARCH_CONSOLE", (function() {
                return o
            })), r.d(t, "CONTEXT_MODULE_ANALYTICS", (function() {
                return a
            })), r.d(t, "CONTEXT_MODULE_ADSENSE", (function() {
                return c
            })), r.d(t, "CONTEXT_MAIN_DASHBOARD_TRAFFIC", (function() {
                return u
            })), r.d(t, "CONTEXT_MAIN_DASHBOARD_CONTENT", (function() {
                return s
            })), r.d(t, "CONTEXT_MAIN_DASHBOARD_SPEED", (function() {
                return l
            })), r.d(t, "CONTEXT_MAIN_DASHBOARD_MONETIZATION", (function() {
                return d
            })), r.d(t, "CONTEXT_ENTITY_DASHBOARD_TRAFFIC", (function() {
                return g
            })), r.d(t, "CONTEXT_ENTITY_DASHBOARD_CONTENT", (function() {
                return f
            })), r.d(t, "CONTEXT_ENTITY_DASHBOARD_SPEED", (function() {
                return p
            })), r.d(t, "CONTEXT_ENTITY_DASHBOARD_MONETIZATION", (function() {
                return b
            }));
            var n = "dashboard",
                i = "pageDashboard",
                o = "moduleSearchConsole",
                a = "moduleAnalytics",
                c = "moduleAdsense",
                u = "mainDashboardTraffic",
                s = "mainDashboardContent",
                l = "mainDashboardSpeed",
                d = "mainDashboardMonetization",
                g = "entityDashboardTraffic",
                f = "entityDashboardContent",
                p = "entityDashboardSpeed",
                b = "entityDashboardMonetization";
            t.default = {
                CONTEXT_DASHBOARD: n,
                CONTEXT_PAGE_DASHBOARD: i,
                CONTEXT_MODULE_SEARCH_CONSOLE: o,
                CONTEXT_MODULE_ANALYTICS: a,
                CONTEXT_MODULE_ADSENSE: c,
                CONTEXT_MAIN_DASHBOARD_TRAFFIC: u,
                CONTEXT_MAIN_DASHBOARD_CONTENT: s,
                CONTEXT_MAIN_DASHBOARD_SPEED: l,
                CONTEXT_MAIN_DASHBOARD_MONETIZATION: d,
                CONTEXT_ENTITY_DASHBOARD_TRAFFIC: g,
                CONTEXT_ENTITY_DASHBOARD_CONTENT: f,
                CONTEXT_ENTITY_DASHBOARD_SPEED: p,
                CONTEXT_ENTITY_DASHBOARD_MONETIZATION: b
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
        81: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    i = r.n(n),
                    o = r(109),
                    a = r(1),
                    c = r(11);

                function ErrorText(t) {
                    var r = t.message,
                        n = t.reconnectURL;
                    if (!r) return null;
                    var i = Object(a.sprintf)(
                        /* translators: %s: Error message */
                        Object(a.__)("Error: %s", "google-site-kit"), r);
                    n && Object(o.a)(n) && (i = i + " " + Object(a.sprintf)(
                        /* translators: %s: Reconnect URL */
                        Object(a.__)('To fix this, <a href="%s">redo the plugin setup</a>.', "google-site-kit"), n));
                    return e.createElement("div", {
                        className: "googlesitekit-error-text"
                    }, e.createElement("p", {
                        dangerouslySetInnerHTML: Object(c.t)(i, {
                            ALLOWED_TAGS: ["a"],
                            ALLOWED_ATTR: ["href"]
                        })
                    }))
                }
                ErrorText.propTypes = {
                    message: i.a.string.isRequired,
                    reconnectURL: i.a.string
                }, ErrorText.defaultProps = {
                    reconnectURL: ""
                }, t.a = ErrorText
            }).call(this, r(3))
        },
        83: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    i = r.n(n),
                    o = r(8),
                    a = r.n(o),
                    c = r(21),
                    u = function CTA(t) {
                        var r = t.title,
                            n = t.description,
                            i = t.ctaLink,
                            o = t.ctaLabel,
                            u = t.ctaLinkExternal,
                            s = t.error,
                            l = t.onClick,
                            d = t["aria-label"];
                        return e.createElement("div", {
                            className: a()("googlesitekit-cta", {
                                "googlesitekit-cta--error": s
                            })
                        }, r && e.createElement("h3", {
                            className: "googlesitekit-cta__title"
                        }, r), n && "string" == typeof n && e.createElement("p", {
                            className: "googlesitekit-cta__description"
                        }, n), n && "string" != typeof n && e.createElement("div", {
                            className: "googlesitekit-cta__description"
                        }, n), o && e.createElement(c.a, {
                            href: i,
                            onClick: l,
                            inverse: !s,
                            caps: !0,
                            arrow: !0,
                            "aria-label": d,
                            external: u,
                            hideExternalIndicator: u
                        }, o))
                    };
                u.propTypes = {
                    title: i.a.string.isRequired,
                    description: i.a.oneOfType([i.a.string, i.a.node]),
                    ctaLink: i.a.string,
                    ctaLinkExternal: i.a.bool,
                    ctaLabel: i.a.string,
                    "aria-label": i.a.string,
                    error: i.a.bool,
                    onClick: i.a.func
                }, u.defaultProps = {
                    title: "",
                    description: "",
                    ctaLink: "",
                    ctaLabel: "",
                    error: !1,
                    onClick: function() {}
                }, t.a = u
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
                        var t, r, n, i, o, a, c, u, s, l, d, g, f, p, b;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (r = t.data) || void 0 === r || null === (n = r.rows) || void 0 === n ? void 0 : n.length) || (null == e || null === (i = e[0]) || void 0 === i || null === (o = i.data) || void 0 === o || null === (a = o.rows) || void 0 === a || null === (c = a[0]) || void 0 === c || null === (u = c.metrics) || void 0 === u || null === (s = u[0]) || void 0 === s || null === (l = s.values) || void 0 === l ? void 0 : l[0]) === (null == e || null === (d = e[0]) || void 0 === d || null === (g = d.data) || void 0 === g || null === (f = g.totals) || void 0 === f || null === (p = f[0]) || void 0 === p || null === (b = p.values) || void 0 === b ? void 0 : b[0])
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
                    return f
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

                function g(e) {
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

                function f(t, r, n, o) {
                    var a = Object(s.a)(r);
                    return function() {
                        var r = u()(i.a.mark((function r(c, u, s, d) {
                            var f, p, b, A, _, O, m, v, h, E;
                            return i.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (A = t.activeModules, _ = t.referenceSiteURL, O = t.trackingEnabled, m = t.trackingID, v = t.userIDHash, O) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return n(), h = null !== (f = null === (p = e._googlesitekitUserData) || void 0 === p || null === (b = p.user) || void 0 === b ? void 0 : b.roles) && void 0 !== f ? f : [], E = {
                                            send_to: m,
                                            event_category: c,
                                            event_label: s,
                                            value: d,
                                            dimension1: _,
                                            dimension2: h.join(","),
                                            dimension3: v,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(l.a).join(","),
                                            dimension6: A.join(",")
                                        }, r.abrupt("return", new Promise((function(e) {
                                            var t, r, n = setTimeout((function() {
                                                    o.console.warn('Tracking event "'.concat(u, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                i = function() {
                                                    clearTimeout(n), e()
                                                };
                                            a("event", u, g(g({}, E), {}, {
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
        89: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "c", (function() {
                return a
            })), r.d(t, "b", (function() {
                return c
            }));
            r(57);
            var n = "missing_required_scopes",
                i = "insufficientPermissions",
                o = "forbidden";

            function a(e) {
                return (null == e ? void 0 : e.code) === n
            }

            function c(e) {
                var t;
                return [i, o].includes(null == e || null === (t = e.data) || void 0 === t ? void 0 : t.reason)
            }
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
        94: function(e, t, r) {
            "use strict";
            var n = r(2),
                i = r(30),
                o = Object(n.createContext)(i.a);
            t.a = o
        }
    },
    [
        [1009, 1, 0]
    ]
]);
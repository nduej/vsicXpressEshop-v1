(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [24], {
        1: function(e, t) {
            e.exports = googlesitekit.i18n
        },
        10: function(e, t, r) {
            "use strict";
            r.d(t, "f", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            })), r.d(t, "h", (function() {
                return o
            })), r.d(t, "g", (function() {
                return i
            })), r.d(t, "d", (function() {
                return c
            })), r.d(t, "e", (function() {
                return s
            })), r.d(t, "k", (function() {
                return l
            })), r.d(t, "c", (function() {
                return u
            })), r.d(t, "b", (function() {
                return d
            })), r.d(t, "s", (function() {
                return g
            })), r.d(t, "r", (function() {
                return f
            })), r.d(t, "t", (function() {
                return p
            })), r.d(t, "p", (function() {
                return b
            })), r.d(t, "q", (function() {
                return m
            })), r.d(t, "n", (function() {
                return v
            })), r.d(t, "o", (function() {
                return h
            })), r.d(t, "l", (function() {
                return y
            })), r.d(t, "m", (function() {
                return O
            })), r.d(t, "j", (function() {
                return j
            })), r.d(t, "i", (function() {
                return S
            }));
            var n = "modules/analytics",
                a = "account_create",
                o = "property_create",
                i = "profile_create",
                c = "analyticsAccountCreate",
                s = "analyticsSetup",
                l = "https://www.googleapis.com/auth/analytics.provision",
                u = "https://www.googleapis.com/auth/analytics.edit",
                d = 1,
                g = "dashboardAllTrafficWidgetDimensionName",
                f = "dashboardAllTrafficWidgetDimensionColor",
                p = "dashboardAllTrafficWidgetDimensionValue",
                b = "dashboardAllTrafficWidgetActiveRowIndex",
                m = "dashboardAllTrafficWidgetLoaded",
                v = "legacy",
                h = "ua",
                y = "ga4",
                O = "ga4-transitional",
                j = "ua",
                S = "ga4"
        },
        105: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Cell
                }));
                var n = r(16),
                    a = r.n(n),
                    o = r(6),
                    i = r.n(o),
                    c = r(17),
                    s = r.n(c),
                    l = r(0),
                    u = r.n(l),
                    d = r(8),
                    g = r.n(d);

                function Cell(t) {
                    var r, n = t.className,
                        o = t.alignTop,
                        c = t.alignMiddle,
                        l = t.alignBottom,
                        u = t.alignRight,
                        d = t.alignLeft,
                        f = t.smAlignRight,
                        p = t.mdAlignRight,
                        b = t.lgAlignRight,
                        m = t.smSize,
                        v = t.smStart,
                        h = t.smOrder,
                        y = t.mdSize,
                        O = t.mdStart,
                        j = t.mdOrder,
                        S = t.lgSize,
                        _ = t.lgStart,
                        E = t.lgOrder,
                        k = t.size,
                        D = t.children,
                        w = s()(t, ["className", "alignTop", "alignMiddle", "alignBottom", "alignRight", "alignLeft", "smAlignRight", "mdAlignRight", "lgAlignRight", "smSize", "smStart", "smOrder", "mdSize", "mdStart", "mdOrder", "lgSize", "lgStart", "lgOrder", "size", "children"]);
                    return e.createElement("div", a()({}, w, {
                        className: g()(n, "mdc-layout-grid__cell", (r = {
                            "mdc-layout-grid__cell--align-top": o,
                            "mdc-layout-grid__cell--align-middle": c,
                            "mdc-layout-grid__cell--align-bottom": l,
                            "mdc-layout-grid__cell--align-right": u,
                            "mdc-layout-grid__cell--align-left": d,
                            "mdc-layout-grid__cell--align-right-phone": f,
                            "mdc-layout-grid__cell--align-right-tablet": p,
                            "mdc-layout-grid__cell--align-right-desktop": b
                        }, i()(r, "mdc-layout-grid__cell--span-".concat(k), 12 >= k && k > 0), i()(r, "mdc-layout-grid__cell--span-".concat(S, "-desktop"), 12 >= S && S > 0), i()(r, "mdc-layout-grid__cell--start-".concat(_, "-desktop"), 12 >= _ && _ > 0), i()(r, "mdc-layout-grid__cell--order-".concat(E, "-desktop"), 12 >= E && E > 0), i()(r, "mdc-layout-grid__cell--span-".concat(y, "-tablet"), 8 >= y && y > 0), i()(r, "mdc-layout-grid__cell--start-".concat(O, "-tablet"), 8 >= O && O > 0), i()(r, "mdc-layout-grid__cell--order-".concat(j, "-tablet"), 8 >= j && j > 0), i()(r, "mdc-layout-grid__cell--span-".concat(m, "-phone"), 4 >= m && m > 0), i()(r, "mdc-layout-grid__cell--start-".concat(v, "-phone"), 4 >= v && v > 0), i()(r, "mdc-layout-grid__cell--order-".concat(h, "-phone"), 4 >= h && h > 0), r))
                    }), D)
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
                    o = r(17),
                    i = r.n(o),
                    c = r(0),
                    s = r.n(c),
                    l = r(8),
                    u = r.n(l);

                function Row(t) {
                    var r = t.className,
                        n = t.children,
                        o = i()(t, ["className", "children"]);
                    return e.createElement("div", a()({
                        className: u()("mdc-layout-grid__inner", r)
                    }, o), n)
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
                    o = r(17),
                    i = r.n(o),
                    c = r(0),
                    s = r.n(c),
                    l = r(8),
                    u = r.n(l),
                    d = r(2),
                    g = Object(d.forwardRef)((function(t, r) {
                        var n = t.alignLeft,
                            o = t.fill,
                            c = t.className,
                            s = t.children,
                            l = i()(t, ["alignLeft", "fill", "className", "children"]);
                        return e.createElement("div", a()({
                            className: u()("mdc-layout-grid", c, {
                                "mdc-layout-grid--align-left": n,
                                "mdc-layout-grid--fill": o
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
        1086: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(4),
                a = r.n(n),
                o = r(136),
                i = r.n(o),
                c = r(301),
                s = r.n(c),
                l = r(1),
                u = r(695),
                d = (r(530), r(697)),
                g = r(796),
                f = r(797),
                p = r(609),
                b = r(798),
                m = r(799),
                v = r(803),
                h = r(115),
                y = r(2);

            function O() {
                return (O = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var j = y.createElement("path", {
                    fill: "#525252",
                    d: "M97.15 2.73c.46-.55 1.37-1.64 1.82-2.2 27-.1 53.98-.04 80.97-.02.44.5 1.32 1.5 1.75 2 .1.15.4.43.5.57.18.16.5.48.68.65.25.23.77.67 1.03.9.33.3.98.92 1.3 1.24.26.25.76.75 1 1 .25.23.7.7.96.94.25.25.74.75.98 1 .25.25.76.75 1 1 .27.26.78.76 1.03 1.02.25.25.76.75 1.02 1 .23.25.72.73.96.97l1 1c.24.24.73.73.98 1 .3.3.93.94 1.24 1.26.23.26.67.78.9 1.04.17.2.5.55.67.73.18.2.56.6.75.78.43.45 1.3 1.3 1.72 1.76.14.15.43.46.57.6.07.13.25.37.33.48.27.56.8 1.67 1.08 2.22.2 5.67-.07 11.34.06 17-7.7-.1-15.4-.1-23.08.02.26-.16.8-.47 1.07-.63-.7-6.6-.7-13.24-.58-19.87-26.28-.02-52.56-.02-78.83 0 .17 6.83-.08 13.64-.44 20.46l1.27.04c-7.8-.1-15.63-.12-23.44-.02.12-5.66-.14-11.32.03-16.98.3-.57.86-1.72 1.15-2.3.1-.1.26-.34.35-.46.15-.16.45-.47.6-.63.44-.45 1.33-1.3 1.77-1.75.2-.18.6-.56.78-.75.22-.22.65-.64.86-.85.24-.23.7-.7.94-.94.25-.24.74-.73.98-1 .25-.22.74-.72 1-.96.23-.26.72-.75.96-1 .24-.23.7-.7.94-.95.2-.23.63-.67.84-.9.32-.32.96-1 1.28-1.33l1.28-1.2c.2-.2.62-.6.83-.8.23-.22.7-.68.9-.9.26-.24.75-.73 1-.97s.72-.73.97-.97c.23-.24.7-.7.94-.94l.8-.8c.1-.14.35-.4.46-.54zm37.7 166.57c2.8-14.95 12.87-28.3 26.16-35.56.2 12.76.08 25.53-.04 38.3.03 2.54-.08 5.12.42 7.63 6.28 4 13.18 6.96 19.6 10.74 6.25-3.25 12.47-6.6 18.7-9.9 2.18-.66 1.4-3.2 1.62-4.93-.06-13.9-.1-27.82 0-41.73 10.12 4.16 17.33 12.82 23 21.85 1.95 6.62 4.35 13.27 4.08 20.3.38 16.85-9.32 33.53-24.3 41.32-1.08.74-2.8 1.17-2.66 2.8-.96 9.1-.42 18.3.17 27.4h-41c.3-9.72.8-19.43-.05-29.14-7.56-3.6-14.02-9.35-18.68-16.3-6.28-9.55-8.7-21.48-7.03-32.76z"
                }),
                S = y.createElement("path", {
                    fill: "#4d4d4d",
                    d: "M96.68 3.26c.12-.13.36-.4.47-.53-.1.13-.35.4-.47.53zm85.02-.76c.12.14.4.42.52.56-.13-.14-.4-.42-.53-.56zM95.9 4.06c.2-.2.6-.6.78-.8-.2.2-.6.6-.78.8zm86.32-1c.17.16.5.48.67.65-.2-.15-.5-.47-.7-.63zM94.96 5c.23-.24.7-.7.94-.94-.24.24-.7.7-.94.93zm87.94-1.3c.25.23.77.67 1.03.9-.26-.23-.78-.67-1.04-.9zM93.98 5.96c.24-.24.73-.73.98-.97-.25.22-.74.7-.98.95zm89.95-1.36c.32.3.97.92 1.3 1.24-.33-.32-.98-.94-1.3-1.25zM93 6.93c.25-.24.74-.73.98-.97l-.97.97zm92.22-1.1l1 1-1-1zm-93.12 2c.22-.22.68-.7.9-.9-.22.2-.68.68-.9.9zm94.13-1l.95.95c-.24-.24-.7-.7-.95-.94zm-94.97 1.8c.2-.2.62-.6.83-.8-.23.2-.64.6-.85.8zm95.92-.85zm-97.2 2.05l1.28-1.2-1.28 1.2zm98.18-1.06c.25.26.76.76 1 1.02-.24-.28-.75-.78-1-1.04zm-99.46 2.4c.32-.33.96-1 1.28-1.34-.32.34-.96 1-1.28 1.34zM189.17 9.8c.26.24.77.74 1.02 1-.27-.26-.78-.76-1.04-1zm-101.3 2.25c.2-.22.62-.66.83-.88-.2.22-.63.66-.84.88zM190.2 10.8c.25.25.76.75 1.02 1-.26-.25-.77-.75-1.03-1zM86.92 13c.24-.23.7-.7.94-.95-.23.24-.7.72-.94.96zm104.3-1.2c.24.25.73.73.97.97-.26-.24-.75-.72-1-.96zM85.95 14c.24-.26.73-.75.97-1-.24.25-.73.74-.97 1zm106.25-1.23zm-107.24 2.2c.25-.24.74-.74 1-.98-.26.22-.75.72-1 .96zm108.24-1.2c.24.25.73.74.98 1-.25-.26-.74-.75-1-1zm-109.22 2.2c.25-.26.74-.75.98-1-.24.25-.73.74-.98 1zm110.2-1.2c.3.3.93.95 1.24 1.27-.3-.32-.93-.96-1.24-1.28zM83.04 16.9c.24-.23.7-.7.94-.94l-.94.94zm112.38-.86c.23.26.67.78.9 1.04-.23-.26-.67-.78-.9-1.04zm-113.24 1.7c.22-.2.65-.63.86-.84-.2.2-.64.63-.86.85zm114.14-.66c.17.2.5.55.67.73-.2-.16-.5-.52-.7-.7zM81.4 18.5c.2-.18.6-.56.78-.75-.2.2-.6.57-.8.76zm115.6-.7c.18.2.56.6.75.78-.2-.2-.57-.58-.76-.77zM79.02 20.88c.15-.16.45-.47.6-.63-.15.16-.45.47-.6.63zm120.45-.55zm-120.8 1c.1-.1.26-.33.35-.45-.1.12-.26.35-.34.46zm121.37-.4c.08.13.26.37.34.48-.08-.1-.26-.33-.34-.45z",
                    opacity: .47
                }),
                _ = y.createElement("path", {
                    fill: "#d8d9da",
                    d: "M40.3 40.66c12.4-.04 24.8.04 37.2-.04 7.8-.1 15.62-.1 23.43.02 25.83.02 51.66.02 77.5 0 7.68-.1 15.38-.12 23.08-.02 13.27.05 26.5.06 39.76 0C253.9 53.07 266.42 65.67 279 78.2v165.98c-1.32 1.53-2.82 3.45-5.07 3.3-8.86.12-17.72 0-26.57.04-.42-18.84-.05-37.68-.18-56.52-.1-4.3.55-8.73-.8-12.9 1.9-4.46.78-9.4 1.04-14.1-.2-15.05.4-30.14-.3-45.2-.66-11.58-.07-23.2-.3-34.8-.15-1.27.04-2.84-1-3.78-2.52-2.72-6.54-1.6-9.8-1.8-64.34.05-128.67.04-193 0-3.28.2-7.3-.97-9.8 1.8-1.05.92-.9 2.46-1.05 3.7-.24 11.63.4 23.27-.3 34.88-.26 3.07-.36 6.15-.32 9.23.15 39.83-.14 79.66.14 119.5-8.9-.26-17.78.14-26.65-.05-2.24.14-3.72-1.78-5.06-3.27V78.3c13.35-12.6 26.9-25.07 40.3-37.64zM52.6 86.8c6.7-1.8 13.87 5.82 11.3 12.38-1.67 5.15-8.2 8.87-13.24 6.06-3.68-1.78-6.6-5.98-5.97-10.17.94-3.9 3.8-7.48 7.9-8.26zm19.16 9.23c-.2-6.04 6.67-11.2 12.37-8.95 4.2 1 6.32 5.1 7.3 8.96-.83 3.42-2 7.26-5.5 8.8-5.96 4.1-14.94-1.8-14.17-8.8zm-26.43 38.3c23.17-.1 46.34.07 69.5-.05.3 26.85.12 53.72.08 80.58-23.2 0-46.4.14-69.6-.05.13-26.8.05-53.63.04-80.45zm.8 96.92c31.16-.04 62.33-.07 93.5.02 0 5.4-.08 10.82.12 16.23-2.8-.12-5.63-.16-8.44-.1-3.52.13-7.07.16-10.6-.02-1.46-.03-2.9-.03-4.37 0-23.74.25-47.48-.03-71.23.13 1.76-5.24.62-10.83 1.03-16.24z"
                }),
                E = y.createElement("path", {
                    fill: "#4189f8",
                    d: "M33.22 80.23c2.5-2.78 6.52-1.6 9.8-1.8 64.33.03 128.66.04 193-.02 3.26.24 7.28-.9 9.8 1.83 1.04.94.85 2.5 1 3.78.23 11.6-.36 23.23.3 34.8-71.75.1-143.5.1-215.26 0 .7-11.6.07-23.24.3-34.87.16-1.24 0-2.78 1.06-3.7m19.38 6.6c-4.1.77-6.95 4.35-7.9 8.25-.65 4.2 2.28 8.4 5.96 10.17 5.03 2.8 11.57-.9 13.24-6.06 2.57-6.58-4.6-14.2-11.3-12.4m19.16 9.23c-.77 7 8.2 12.9 14.16 8.82 3.5-1.55 4.68-5.4 5.5-8.8-.97-3.86-3.1-7.97-7.3-8.97-5.7-2.25-12.55 2.9-12.36 8.95z"
                }),
                k = y.createElement("path", {
                    fill: "#fff",
                    d: "M31.86 118.8c71.75.1 143.5.1 215.27 0 .68 15.06.08 30.15.3 45.2-.27 4.7.86 9.64-1.05 14.1-7.74-7.1-13.8-15.87-22.07-22.42-5.66-9.03-12.87-17.7-23-21.85-.1 13.9-.05 27.82 0 41.73-2.63-1.17-4.42-3.44-6.27-5.52-4.96-5.4-10.38-10.37-15.13-15.95-6.08-7-13.2-13.03-18.9-20.37-13.28 7.26-23.35 20.6-26.15 35.56-1.67 11.27.75 23.2 7.03 32.76 4.66 6.94 11.12 12.7 18.68 16.3.85 9.7.35 19.4.04 29.13h-20.85c-.2-5.4-.13-10.83-.12-16.24-31.17-.1-62.34-.06-93.5-.02-.4 5.4.73 11-1.04 16.26-4.48 0-8.95-.02-13.4.02-.3-39.83 0-79.66-.16-119.5-.04-3.07.06-6.15.3-9.22m13.48 15.54c0 26.82.1 53.65-.05 80.47 23.2.2 46.42.08 69.63.07.05-26.86.22-53.73-.07-80.58-23.16.1-46.33-.04-69.5.05z"
                }),
                D = y.createElement("path", {
                    fill: "#bdbdbd",
                    d: "M161 133.74c5.7 7.34 12.82 13.36 18.9 20.35 4.74 5.56 10.16 10.53 15.12 15.93 1.85 2.08 3.64 4.35 6.27 5.52-.24 1.72.54 4.27-1.64 4.93-6.23 3.3-12.45 6.64-18.7 9.9-6.42-3.77-13.32-6.74-19.6-10.73-.5-2.5-.4-5.1-.42-7.64.12-12.75.24-25.52.06-38.3zm63.3 21.94c8.27 6.55 14.34 15.32 22.08 22.42 1.35 4.17.7 8.6.8 12.9.13 18.84-.24 37.68.18 56.52-15.26-.04-30.5-.02-45.77 0-.6-9.13-1.15-18.32-.2-27.43-.13-1.64 1.6-2.07 2.66-2.8 15-7.8 24.7-24.47 24.3-41.33.28-7.02-2.12-13.67-4.06-20.3z"
                });
            var w = function SvgSearchConsole(e) {
                    return y.createElement("svg", O({
                        viewBox: "0 0 279 248"
                    }, e), j, S, _, E, k, D)
                },
                R = r(53),
                A = r(34),
                P = r(30),
                C = r(5),
                N = r.n(C),
                T = r(14),
                x = r.n(T),
                I = r(9),
                L = r.n(I),
                M = r(33),
                W = r.n(M),
                F = r(73),
                U = r(141),
                z = r(157);

            function H() {
                return (H = x()(N.a.mark((function e(t) {
                    var r, n, a, o;
                    return N.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.select, n = t.dispatch, !r(R.b).haveSettingsChanged()) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 4, n(R.b).saveSettings();
                            case 4:
                                if (a = e.sent, !(o = a.error)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: o
                                });
                            case 8:
                                return e.next = 10, W.a.invalidateCache("modules", "search-console");
                            case 10:
                                return e.abrupt("return", {});
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var G = i.a.createModuleStore("search-console", {
                    storeName: R.b,
                    settingSlugs: ["propertyID", "ownerID"],
                    adminPage: Object(P.b)("unifiedDashboard") ? void 0 : "googlesitekit-module-search-console",
                    requiresSetup: !1,
                    submitChanges: function(e) {
                        return H.apply(this, arguments)
                    },
                    validateCanSubmitChanges: function(e) {
                        var t = Object(F.e)(e)(R.b),
                            r = t.getPropertyID,
                            n = t.haveSettingsChanged;
                        L()(Object(U.d)(r()), "a valid propertyID is required to submit changes"), L()(n(), z.b)
                    }
                }),
                q = r(6),
                B = r.n(q),
                Y = r(57),
                V = r.n(Y),
                K = r(13),
                $ = r(15),
                Z = r(11),
                Q = r(45),
                X = r(285);

            function J(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(r), !0).forEach((function(t) {
                        B()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var te = a.a.createRegistrySelector,
                re = Object(Q.a)({
                    baseName: "getReport",
                    storeName: R.b,
                    controlCallback: function(e) {
                        var t = e.options;
                        return W.a.get("modules", "search-console", "searchanalytics", t)
                    },
                    reducerCallback: function(e, t, r) {
                        var n = r.options;
                        return ee(ee({}, e), {}, {
                            reports: ee(ee({}, e.reports), {}, B()({}, Object(Z.v)(n), t))
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            options: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.options;
                        L()(V()(t), "Options for Search Console report must be an object."), L()(Object(X.a)(t), "Either date range or start/end dates must be provided for Search Console report.");
                        var r = t.dimensions;
                        r && L()(Object(X.d)(r), "Dimensions for Search Console report must be either a string or an array of strings")
                    }
                }),
                ne = {
                    getReport: N.a.mark((function e() {
                        var t, r, n = arguments;
                        return N.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.next = 3, a.a.commonActions.getRegistry();
                                case 3:
                                    if (r = e.sent, !r.select(R.b).getReport(t)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return e.next = 9, re.actions.fetchGetReport(t);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                ae = {
                    getReport: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = e.reports;
                        return r[Object(Z.v)(t)]
                    },
                    isGatheringData: te((function(e) {
                        return function() {
                            var t = {
                                    compare: !0,
                                    offsetDays: R.a
                                },
                                r = e($.c).getCurrentEntityURL(),
                                n = e(K.a).getDateRangeDates(t),
                                a = {
                                    dimensions: "date",
                                    startDate: n.compareStartDate,
                                    endDate: n.endDate
                                };
                            r && (a.url = r);
                            var o = e(R.b).getReport(a);
                            if (void 0 !== o) return !Array.isArray(o) || !o.length
                        }
                    })),
                    hasZeroData: te((function(e) {
                        return function() {
                            var t = {
                                    compare: !0,
                                    offsetDays: R.a
                                },
                                r = e($.c).getCurrentEntityURL(),
                                n = e(K.a).getDateRangeDates(t),
                                a = {
                                    dimensions: "date",
                                    startDate: n.compareStartDate,
                                    endDate: n.endDate
                                };
                            r && (a.url = r);
                            var o = e(R.b).getReport(a),
                                i = e(R.b).isGatheringData();
                            if (void 0 !== o && void 0 !== i) {
                                var c = Object(U.e)(o);
                                return !1 !== i || !1 !== c
                            }
                        }
                    }))
                },
                oe = a.a.combineStores(re, {
                    initialState: {
                        reports: {}
                    },
                    resolvers: ne,
                    selectors: ae
                }),
                ie = (oe.initialState, oe.actions, oe.controls, oe.reducer, oe.resolvers, oe.selectors, oe),
                ce = r(17),
                se = r.n(ce),
                le = r(287);

            function ue(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function de(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ue(Object(r), !0).forEach((function(t) {
                        B()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ge = a.a.createRegistrySelector,
                fe = {
                    getServiceURL: ge((function(e) {
                        return function(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = r.path,
                                a = r.query,
                                o = e(K.a).getEmail();
                            if (void 0 !== o) {
                                var i = "https://search.google.com/search-console",
                                    c = de(de({}, a), {}, {
                                        authuser: o
                                    });
                                if (n) {
                                    var s = "/".concat(n.replace(/^\//, ""));
                                    return Object(le.a)("".concat(i).concat(s), c)
                                }
                                return Object(le.a)(i, c)
                            }
                        }
                    })),
                    getServiceReportURL: ge((function(e) {
                        return function(t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e(R.b).getPropertyID(),
                                a = fe.isDomainProperty(t),
                                o = e($.c).getReferenceSiteURL(),
                                i = r.page,
                                c = void 0 === i ? a ? "*".concat(Object(Z.x)(o)) : void 0 : i,
                                s = se()(r, ["page"]),
                                l = "/performance/search-analytics",
                                u = de(de({
                                    page: c
                                }, s), {}, {
                                    resource_id: n
                                });
                            return fe.getServiceURL(t, {
                                path: l,
                                query: u
                            })
                        }
                    })),
                    isDomainProperty: ge((function(e) {
                        return function() {
                            var t = e(R.b).getPropertyID();
                            return t && t.startsWith("sc-domain:")
                        }
                    }))
                },
                pe = {
                    selectors: fe
                };

            function be(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? be(Object(r), !0).forEach((function(t) {
                        B()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ve, he = Object(Q.a)({
                    baseName: "getMatchedProperties",
                    controlCallback: function() {
                        return W.a.get("modules", "search-console", "matched-sites", {}, {
                            useCache: !0
                        })
                    },
                    reducerCallback: function(e, t) {
                        return me(me({}, e), {}, {
                            properties: t
                        })
                    }
                }),
                ye = {
                    properties: void 0
                },
                Oe = {
                    getMatchedProperties: N.a.mark((function e() {
                        var t;
                        return N.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    if (t = e.sent, void 0 !== t.select(R.b).getMatchedProperties()) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, he.actions.fetchGetMatchedProperties();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                je = a.a.combineStores(he, {
                    initialState: ye,
                    actions: {},
                    controls: {},
                    reducer: function(e, t) {
                        t.type;
                        return e
                    },
                    resolvers: Oe,
                    selectors: {
                        getMatchedProperties: function(e) {
                            return e.properties
                        }
                    }
                }),
                Se = (je.initialState, je.actions, je.controls, je.reducer, je.resolvers, je.selectors, je),
                _e = a.a.combineStores(G, ie, pe, Se);
            _e.initialState, _e.actions, _e.controls, _e.reducer, _e.resolvers, _e.selectors;
            a.a.registerStore(R.b, _e), i.a.registerModule("search-console", {
                storeName: R.b,
                SettingsEditComponent: d.a,
                SettingsViewComponent: u.a,
                Icon: w,
                screenWidgetContext: "moduleSearchConsole"
            }), ve = s.a, Object(P.b)("unifiedDashboard") || (ve.registerWidget("searchConsoleImpressions", {
                Component: g.a,
                width: ve.WIDGET_WIDTHS.QUARTER,
                priority: 1,
                wrapWidget: !0
            }, [h.AREA_DASHBOARD_SEARCH_FUNNEL, h.AREA_PAGE_DASHBOARD_SEARCH_FUNNEL]), ve.registerWidget("searchConsoleClicks", {
                Component: f.a,
                width: ve.WIDGET_WIDTHS.QUARTER,
                priority: 2,
                wrapWidget: !0
            }, [h.AREA_DASHBOARD_SEARCH_FUNNEL, h.AREA_PAGE_DASHBOARD_SEARCH_FUNNEL]), ve.registerWidget("searchConsolePopularKeywords", {
                Component: p.a,
                width: [ve.WIDGET_WIDTHS.HALF, ve.WIDGET_WIDTHS.FULL],
                priority: 1,
                wrapWidget: !1
            }, [h.AREA_DASHBOARD_ACQUISITION, h.AREA_PAGE_DASHBOARD_ACQUISITION]), ve.registerWidget("searchConsoleModuleOverview", {
                Component: m.a,
                width: ve.WIDGET_WIDTHS.FULL,
                priority: 1,
                wrapWidget: !1
            }, ["moduleSearchConsoleMain"]), ve.registerWidgetArea("moduleSearchConsoleMain", {
                priority: 1,
                style: A.b.BOXES,
                title: Object(l.__)("Overview", "google-site-kit")
            }, "moduleSearchConsole"), ve.registerWidget("searchConsoleModulePopularKeywords", {
                Component: b.a,
                width: [ve.WIDGET_WIDTHS.FULL],
                priority: 2,
                wrapWidget: !1
            }, ["moduleSearchConsoleMain"])), Object(P.b)("unifiedDashboard") && (ve.registerWidget("searchConsolePopularKeywords", {
                Component: p.a,
                width: [ve.WIDGET_WIDTHS.HALF, ve.WIDGET_WIDTHS.FULL],
                priority: 1,
                wrapWidget: !1
            }, [h.AREA_MAIN_DASHBOARD_CONTENT_PRIMARY, h.AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY]), ve.registerWidget("searchFunnel", {
                Component: v.a,
                width: [ve.WIDGET_WIDTHS.FULL],
                priority: 3,
                wrapWidget: !1
            }, [h.AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY, h.AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY]))
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
                return b.c
            })), r.d(t, "s", (function() {
                return b.d
            })), r.d(t, "o", (function() {
                return b.b
            })), r.d(t, "j", (function() {
                return b.a
            })), r.d(t, "e", (function() {
                return m.a
            })), r.d(t, "p", (function() {
                return O
            })), r.d(t, "d", (function() {
                return j
            })), r.d(t, "g", (function() {
                return S.c
            })), r.d(t, "u", (function() {
                return S.i
            })), r.d(t, "h", (function() {
                return _.b
            })), r.d(t, "n", (function() {
                return _.c
            })), r.d(t, "b", (function() {
                return _.a
            })), r.d(t, "m", (function() {
                return E.b
            })), r.d(t, "i", (function() {
                return E.a
            })), r.d(t, "q", (function() {
                return E.d
            })), r.d(t, "l", (function() {
                return k
            })), r.d(t, "a", (function() {
                return D
            })), r.d(t, "y", (function() {
                return w
            })), r.d(t, "f", (function() {
                return R
            }));
            var n = r(117),
                a = r.n(n),
                o = r(113),
                i = r.n(o),
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
                b = (r(84), r(72)),
                m = r(64);

            function v(e) {
                return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function h(e) {
                return "<p>".concat(e.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function y(e) {
                return e.replace(/\n/gi, "<br>")
            }

            function O(e) {
                for (var t = e, r = 0, n = [v, h, y]; r < n.length; r++) {
                    t = (0, n[r])(t)
                }
                return t
            }
            var j = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                S = r(59),
                _ = r(85),
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
                D = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var r = (t - e) / e;
                    return isNaN(r) || !a()(r) ? null : r
                },
                w = function(e) {
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
                    return i()(t)
                }
        },
        112: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return StoreErrorNotices
                }));
                var n = r(6),
                    a = r.n(n),
                    o = r(0),
                    i = r.n(o),
                    c = r(4),
                    s = r.n(c),
                    l = r(191),
                    u = r(22),
                    d = r(89),
                    g = r(143);

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
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var b = s.a.useSelect;

                function StoreErrorNotices(t) {
                    var r = t.moduleSlug,
                        n = t.storeName,
                        a = t.shouldDisplayError,
                        o = b((function(e) {
                            return e(n).getErrors()
                        })),
                        i = b((function(e) {
                            return e(u.a).getModule(r)
                        })),
                        c = [];
                    return o.filter((function(e) {
                        return !(!(null == e ? void 0 : e.message) || c.includes(e.message)) && (c.push(e.message), !0)
                    })).map((function(e) {
                        return Object(d.b)(e) && (e = p(p({}, e), {}, {
                            message: Object(g.a)(e.message, i)
                        })), e
                    })).map((function(t, r) {
                        return e.createElement(l.a, {
                            key: r,
                            error: t,
                            shouldDisplayError: a
                        })
                    }))
                }
                StoreErrorNotices.propTypes = {
                    storeName: i.a.string.isRequired,
                    shouldDisplayError: i.a.func,
                    moduleSlug: i.a.string
                }
            }).call(this, r(3))
        },
        114: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ReportZero
                }));
                var n = r(0),
                    a = r.n(n),
                    o = r(1),
                    i = r(4),
                    c = r.n(i),
                    s = r(22),
                    l = r(83),
                    u = c.a.useSelect;

                function ReportZero(t) {
                    var r = t.moduleSlug,
                        n = u((function(e) {
                            return e(s.a).getModule(r)
                        }));
                    return e.createElement(l.a, {
                        title: Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("%s Gathering Data", "google-site-kit"), null == n ? void 0 : n.name),
                        description: Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("%s data is not yet available, please check back later", "google-site-kit"), null == n ? void 0 : n.name)
                    })
                }
                ReportZero.propTypes = {
                    moduleSlug: a.a.string.isRequired
                }
            }).call(this, r(3))
        },
        115: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, "AREA_DASHBOARD_ALL_TRAFFIC", (function() {
                return n
            })), r.d(t, "AREA_DASHBOARD_SEARCH_FUNNEL", (function() {
                return a
            })), r.d(t, "AREA_DASHBOARD_ACQUISITION", (function() {
                return o
            })), r.d(t, "AREA_DASHBOARD_SPEED", (function() {
                return i
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
                return b
            })), r.d(t, "AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY", (function() {
                return m
            })), r.d(t, "AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY", (function() {
                return v
            })), r.d(t, "AREA_ENTITY_DASHBOARD_SPEED_PRIMARY", (function() {
                return h
            })), r.d(t, "AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY", (function() {
                return y
            }));
            var n = "dashboardAllTraffic",
                a = "dashboardSearchFunnel",
                o = "dashboardAcquisition",
                i = "dashboardSpeed",
                c = "dashboardEarnings",
                s = "pageDashboardSearchFunnel",
                l = "pageDashboardAllTraffic",
                u = "pageDashboardAcquisition",
                d = "pageDashboardSpeed",
                g = "mainDashboardTrafficPrimary",
                f = "mainDashboardContentPrimary",
                p = "mainDashboardSpeedPrimary",
                b = "mainDashboardMonetizationPrimary",
                m = "entityDashboardTrafficPrimary",
                v = "entityDashboardContentPrimary",
                h = "entityDashboardSpeedPrimary",
                y = "entityDashboardMonetizationPrimary";
            t.default = {
                AREA_DASHBOARD_ALL_TRAFFIC: n,
                AREA_DASHBOARD_SEARCH_FUNNEL: a,
                AREA_DASHBOARD_ACQUISITION: o,
                AREA_DASHBOARD_SPEED: i,
                AREA_DASHBOARD_EARNINGS: c,
                AREA_PAGE_DASHBOARD_SEARCH_FUNNEL: s,
                AREA_PAGE_DASHBOARD_ALL_TRAFFIC: l,
                AREA_PAGE_DASHBOARD_ACQUISITION: u,
                AREA_PAGE_DASHBOARD_SPEED: d,
                AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY: g,
                AREA_MAIN_DASHBOARD_CONTENT_PRIMARY: f,
                AREA_MAIN_DASHBOARD_SPEED_PRIMARY: p,
                AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY: b,
                AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY: m,
                AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY: v,
                AREA_ENTITY_DASHBOARD_SPEED_PRIMARY: h,
                AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY: y
            }
        },
        121: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    o = r(2),
                    i = r(1),
                    c = r(83),
                    s = r(4),
                    l = r.n(s),
                    u = r(13),
                    d = r(22),
                    g = r(38),
                    f = l.a.useSelect,
                    p = l.a.useDispatch,
                    b = function CompleteModuleActivationCTA(t) {
                        var r = t.moduleSlug,
                            n = t.title,
                            a = t.description,
                            s = f((function(e) {
                                return e(d.a).getModule(r)
                            })),
                            l = f((function(e) {
                                return e(d.a).getModuleStoreName(r)
                            })),
                            b = f((function(e) {
                                var t;
                                return null === (t = e(l)) || void 0 === t ? void 0 : t.getAdminReauthURL()
                            })),
                            m = f((function(e) {
                                return e(u.a).hasCapability(u.c)
                            })),
                            v = p(g.a).navigateTo,
                            h = Object(o.useCallback)((function() {
                                return v(b)
                            }), [b, v]);
                        return (null == s ? void 0 : s.name) && b && m ? e.createElement(c.a, {
                            title: n || Object(i.sprintf)(
                                /* translators: %s: Module name */
                                Object(i.__)("Complete %s activation", "google-site-kit"), s.name),
                            description: a || Object(i.sprintf)(
                                /* translators: %s: Module name */
                                Object(i.__)("%s module setup needs to be completed", "google-site-kit"), s.name),
                            ctaLabel: Object(i.__)("Complete setup", "google-site-kit"),
                            "aria-label": Object(i.sprintf)(
                                /* translators: %s: Module name */
                                Object(i.__)("Complete %s setup", "google-site-kit"), s.name),
                            onClick: h
                        }) : null
                    };
                b.propTypes = {
                    moduleSlug: a.a.string.isRequired,
                    title: a.a.string,
                    description: a.a.string
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
                    a = r.n(n),
                    o = r(1),
                    i = r(4),
                    c = r.n(i),
                    s = r(22),
                    l = r(187),
                    u = r(83),
                    d = c.a.useSelect;

                function ActivateModuleCTA(t) {
                    var r = t.moduleSlug,
                        n = t.title,
                        a = t.description,
                        i = d((function(e) {
                            return e(s.a).getModule(r)
                        })),
                        c = Object(l.a)(r);
                    if (!c) return null;
                    var g = n,
                        f = a;
                    switch (r) {
                        case "analytics":
                            n || (g = Object(o.__)("Learn more about what visitors do on your site", "google-site-kit")), a || (f = Object(o.__)("Connect with Google Analytics to see unique visitors, goal completions, top pages and more", "google-site-kit"));
                            break;
                        case "pagespeed-insights":
                            a || (f = Object(o.__)("Google PageSpeed Insights gives you metrics about performance, accessibility, SEO and PWA", "google-site-kit"))
                    }
                    return e.createElement(u.a, {
                        title: g || Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("Activate %s", "google-site-kit"), i.name),
                        description: f || Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("%s module needs to be configured", "google-site-kit"), i.name),
                        ctaLabel: Object(o.sprintf)(
                            /* translators: %s: Module name */
                            Object(o.__)("Set up %s", "google-site-kit"), i.name),
                        onClick: c
                    })
                }
                ActivateModuleCTA.propTypes = {
                    moduleSlug: a.a.string.isRequired,
                    title: a.a.string,
                    description: a.a.string
                }
            }).call(this, r(3))
        },
        13: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return a
            })), r.d(t, "e", (function() {
                return o
            })), r.d(t, "f", (function() {
                return i
            })), r.d(t, "c", (function() {
                return c
            })), r.d(t, "d", (function() {
                return s
            }));
            var n = "core/user",
                a = "connected_url_mismatch",
                o = "googlesitekit_setup",
                i = "googlesitekit_view_dashboard",
                c = "googlesitekit_manage_options",
                s = "googlesitekit_read_shared_module_data"
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
                    o = r(22),
                    i = r(76),
                    c = a.a.useSelect;

                function s(t) {
                    var r = t.moduleName,
                        n = t.FallbackComponent,
                        a = t.IncompleteComponent;
                    return function(t) {
                        var s = function WhenActiveComponent(i) {
                            var s = c((function(e) {
                                return e(o.a).getModule(r)
                            }), [r]);
                            if (!s) return null;
                            var l = n || i.WidgetNull || null;
                            if (!1 === s.active) return l && e.createElement(l, i);
                            if (!1 === s.connected) {
                                var u = a || l;
                                return u && e.createElement(u, i)
                            }
                            return e.createElement(t, i)
                        };
                        return s.displayName = "When".concat(Object(i.c)(r), "Active"), (t.displayName || t.name) && (s.displayName += "(".concat(t.displayName || t.name, ")")), s
                    }
                }
            }).call(this, r(3))
        },
        140: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r(9),
                a = r.n(n),
                o = function(e, t) {
                    var r = t.dateRangeLength;
                    a()(Array.isArray(e), "report must be an array to partition."), a()(Number.isInteger(r) && r > 0, "dateRangeLength must be a positive integer.");
                    var n = -1 * r;
                    return {
                        currentRange: e.slice(n),
                        compareRange: e.slice(2 * n, n)
                    }
                }
        },
        141: function(e, t, r) {
            "use strict";
            r.d(t, "e", (function() {
                return l
            })), r.d(t, "c", (function() {
                return p
            })), r.d(t, "b", (function() {
                return b.a
            })), r.d(t, "d", (function() {
                return m
            })), r.d(t, "a", (function() {
                return h
            }));
            var n = r(380),
                a = r.n(n),
                o = r(342),
                i = r.n(o),
                c = r(11),
                s = r(140);

            function l(e) {
                if (void 0 !== e) return !Array.isArray(e) || !e.length || !e.some((function(e) {
                    return e.clicks > 0 || e.ctr > 0 || e.impressions > 0 || e.position > 0
                }))
            }
            var u = r(8),
                d = r.n(u),
                g = r(1),
                f = r(59),
                p = function(e, t, r, n, a) {
                    var o = [
                            [{
                                type: "date",
                                label: Object(g.__)("Day", "google-site-kit")
                            }, {
                                type: "string",
                                role: "tooltip",
                                p: {
                                    html: !0
                                }
                            }, {
                                type: "number",
                                label: r
                            }, {
                                type: "number",
                                label: Object(g.__)("Previous period", "google-site-kit")
                            }]
                        ],
                        i = Object(c.j)(),
                        s = {
                            weekday: "short",
                            month: "short",
                            day: "numeric"
                        };
                    return e.forEach((function(e, l) {
                        var u, p, b = e[n],
                            m = e.keys[0],
                            v = (null === (u = t[l]) || void 0 === u ? void 0 : u[n]) || 0,
                            h = (null === (p = t[l]) || void 0 === p ? void 0 : p.keys[0]) || Object(f.f)(m, a),
                            y = Object(g.sprintf)(
                                /* translators: 1: date for user stats, 2: previous date for user stats comparison */
                                Object(g._x)("%1$s vs %2$s", "Date range for chart tooltip", "google-site-kit"), Object(f.i)(m).toLocaleDateString(i, s), Object(f.i)(h).toLocaleDateString(i, s)),
                            O = Object(c.a)(v, b),
                            j = Object(c.b)(b, v),
                            S = Object(c.h)(j),
                            _ = Object(g.sprintf)(
                                /* translators: 1: selected stat label, 2: numeric value of selected stat, 3: up or down arrow , 4: different change in percentage, %%: percent symbol */
                                Object(g._x)("%1$s: <strong>%2$s</strong> <em>%3$s %4$s%%</em>", "Stat information for chart tooltip", "google-site-kit"), r, Math.abs(b).toFixed(2).replace(/(.00|0)$/, ""), S, Object(c.r)(O));
                        o.push([Object(f.i)(m), '<div class="'.concat(d()("googlesitekit-visualization-tooltip", {
                            "googlesitekit-visualization-tooltip--up": j > 0,
                            "googlesitekit-visualization-tooltip--down": j < 0
                        }), '">\n\t\t\t\t<p>').concat(y, "</p>\n\t\t\t\t<p>").concat(_, "</p>\n\t\t\t</div>"), b, v])
                    })), o
                },
                b = r(281);

            function m(e) {
                return "string" == typeof e && e.length > 0
            }

            function v(e) {
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
                    r = 0,
                    n = 0,
                    o = 0,
                    c = 0,
                    s = e.length;
                return a()(e, (function(e) {
                    var a = new Date(e.keys[0]);
                    t.push([a.getMonth() + 1 + "/" + a.getUTCDate(), e.clicks, e.impressions, i()(e.ctr, 3), i()(e.position, 3)]), r += e.clicks, n += e.impressions, o += e.ctr, c += e.position
                })), {
                    dataMap: t,
                    totalClicks: r,
                    totalImpressions: n,
                    averageCTR: s > 0 ? o / s : 0,
                    averagePosition: s > 0 ? c / s : 0
                }
            }
            var h = function(e, t) {
                var r = Object(s.a)(e, {
                        dateRangeLength: t
                    }),
                    n = r.compareRange,
                    a = v(r.currentRange),
                    o = v(n);
                return {
                    dataMap: a.dataMap,
                    totalClicks: a.totalClicks,
                    totalImpressions: a.totalImpressions,
                    averageCTR: a.averageCTR,
                    averagePosition: a.averagePosition,
                    totalClicksChange: Object(c.a)(o.totalClicks, a.totalClicks),
                    totalImpressionsChange: Object(c.a)(o.totalImpressions, a.totalImpressions),
                    averageCTRChange: Object(c.a)(o.averageCTR, a.averageCTR),
                    averagePositionChange: Object(c.a)(o.averagePosition, a.averagePosition)
                }
            }
        },
        143: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return a
            }));
            var n = r(1);

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t || {},
                    a = r.slug,
                    o = void 0 === a ? "" : a,
                    i = r.name,
                    c = void 0 === i ? "" : i,
                    s = r.owner,
                    l = void 0 === s ? {} : s;
                if (!o || !c) return e;
                var u = "",
                    d = "";
                return "analytics" === o ? e.match(/account/i) ? u = Object(n.__)("Your Google account does not have sufficient permissions for this Analytics account, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/property/i) ? u = Object(n.__)("Your Google account does not have sufficient permissions for this Analytics property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/view/i) && (u = Object(n.__)("Your Google account does not have sufficient permissions for this Analytics view, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")) : "search-console" === o && (u = Object(n.__)("Your Google account does not have sufficient permissions for this Search Console property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")), u || (u = Object(n.sprintf)(
                    /* translators: %s: module name */
                    Object(n.__)("Your Google account does not have sufficient permissions to access %s data, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit"), c)), l && l.login && (d = Object(n.sprintf)(
                    /* translators: %s: owner name */
                    Object(n.__)('This service was originally connected by the administrator "%s" — you can contact them for more information.', "google-site-kit"), l.login)), d || (d = Object(n.__)("This service was originally connected by an administrator — you can contact them for more information.", "google-site-kit")), "".concat(u, " ").concat(d)
            }
        },
        149: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            }));
            var n = r(9),
                a = r.n(n),
                o = r(42),
                i = function(e) {
                    var t = e.startDate,
                        r = e.endDate,
                        n = e.compareStartDate,
                        i = e.compareEndDate;
                    a()(Object(o.a)(t), "A valid startDate is required."), a()(Object(o.a)(r), "A valid endDate is required.");
                    var c = {
                        "_u.date00": t.replace(/-/g, ""),
                        "_u.date01": r.replace(/-/g, "")
                    };
                    return (n || i) && (a()(Object(o.a)(n) && Object(o.a)(i), "Valid compareStartDate and compareEndDate values are required."), c["_u.date10"] = n.replace(/-/g, ""), c["_u.date11"] = i.replace(/-/g, "")), c
                }
        },
        15: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            })), r.d(t, "b", (function() {
                return o
            }));
            var n = "core/site",
                a = "primary",
                o = "secondary"
        },
        157: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return R
            })), r.d(t, "b", (function() {
                return A
            })), r.d(t, "c", (function() {
                return P
            })), r.d(t, "f", (function() {
                return C
            })), r.d(t, "e", (function() {
                return N
            })), r.d(t, "d", (function() {
                return T
            }));
            var n = r(14),
                a = r.n(n),
                o = r(5),
                i = r.n(o),
                c = r(6),
                s = r.n(c),
                l = r(9),
                u = r.n(l),
                d = r(57),
                g = r.n(d),
                f = r(158),
                p = r.n(f),
                b = r(33),
                m = r.n(b),
                v = r(4),
                h = r.n(v),
                y = r(73),
                O = r(76),
                j = r(45),
                S = r(54);

            function _(e, t) {
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
                    t % 2 ? _(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var k = h.a.createRegistrySelector,
                D = S.a.clearError,
                w = S.a.receiveError,
                R = "cannot submit changes while submitting changes",
                A = "cannot submit changes if settings have not changed",
                P = function(e, t, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        a = n.storeName,
                        o = void 0 === a ? void 0 : a,
                        c = n.settingSlugs,
                        l = void 0 === c ? [] : c;
                    u()(e, "type is required."), u()(t, "identifier is required."), u()(r, "datapoint is required.");
                    var d = o || "".concat(e, "/").concat(t),
                        f = {
                            settings: void 0,
                            savedSettings: void 0
                        },
                        b = Object(j.a)({
                            baseName: "getSettings",
                            controlCallback: function() {
                                return m.a.get(e, t, r, {}, {
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
                        v = Object(j.a)({
                            baseName: "saveSettings",
                            controlCallback: function(n) {
                                var a = n.values;
                                return m.a.set(e, t, r, a)
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
                                u()(g()(t), "values is required.")
                            }
                        }),
                        y = {},
                        S = {
                            setSettings: function(e) {
                                return u()(g()(e), "values is required."), {
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
                            saveSettings: i.a.mark((function e() {
                                var t, r, n, a, o;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.a.commonActions.getRegistry();
                                        case 2:
                                            return t = e.sent, e.next = 5, D("saveSettings", []);
                                        case 5:
                                            return r = t.select(d).getSettings(), e.next = 8, v.actions.fetchSaveSettings(r);
                                        case 8:
                                            if (n = e.sent, a = n.response, !(o = n.error)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 14, w(o, "saveSettings", []);
                                        case 14:
                                            return e.abrupt("return", {
                                                response: a,
                                                error: o
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        _ = {},
                        R = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                r = t.type,
                                n = t.payload;
                            switch (r) {
                                case "SET_SETTINGS":
                                    var a = n.values;
                                    return E(E({}, e), {}, {
                                        settings: E(E({}, e.settings || {}), a)
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
                        A = {
                            getSettings: i.a.mark((function e() {
                                var t;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.a.commonActions.getRegistry();
                                        case 2:
                                            if (t = e.sent, t.select(d).getSettings()) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 7, b.actions.fetchGetSettings();
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        P = {
                            getSettings: function(e) {
                                return e.settings
                            },
                            haveSettingsChanged: function(e) {
                                var t = e.settings,
                                    r = e.savedSettings;
                                return !p()(t, r)
                            },
                            hasSettingChanged: function(e, t) {
                                u()(t, "setting is required.");
                                var r = e.settings,
                                    n = e.savedSettings;
                                return !(!r || !n) && !p()(r[t], n[t])
                            },
                            isDoingSaveSettings: function(e) {
                                return Object.values(e.isFetchingSaveSettings).some(Boolean)
                            }
                        };
                    l.forEach((function(e) {
                        var t = Object(O.b)(e),
                            r = Object(O.a)(e);
                        S["set".concat(t)] = function(e) {
                            return u()(void 0 !== e, "value is required for calls to set".concat(t, "().")), {
                                payload: {
                                    value: e
                                },
                                type: "SET_".concat(r)
                            }
                        }, y["SET_".concat(r)] = function(t, r) {
                            var n = r.payload.value;
                            return E(E({}, t), {}, {
                                settings: E(E({}, t.settings || {}), {}, s()({}, e, n))
                            })
                        }, P["get".concat(t)] = k((function(t) {
                            return function() {
                                return (t(d).getSettings() || {})[e]
                            }
                        }))
                    }));
                    var C = h.a.combineStores(h.a.commonStore, b, v, {
                        initialState: f,
                        actions: S,
                        controls: _,
                        reducer: R,
                        resolvers: A,
                        selectors: P
                    });
                    return E(E({}, C), {}, {
                        STORE_NAME: d
                    })
                };

            function C(e, t) {
                return function() {
                    var r = a()(i.a.mark((function r(n) {
                        var a, o, c, s;
                        return i.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (a = n.select, o = n.dispatch, !a(t).haveSettingsChanged()) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.next = 4, o(t).saveSettings();
                                case 4:
                                    if (c = r.sent, !(s = c.error)) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.abrupt("return", {
                                        error: s
                                    });
                                case 8:
                                    return r.next = 10, m.a.invalidateCache("modules", e);
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

            function N(e) {
                return function(t) {
                    var r = t.select,
                        n = t.dispatch;
                    return r(e).haveSettingsChanged() ? n(e).rollbackSettings() : {}
                }
            }

            function T(e) {
                return function(t) {
                    var r = Object(y.e)(t)(e),
                        n = r.haveSettingsChanged,
                        a = r.isDoingSubmitChanges;
                    u()(!a(), R), u()(n(), A)
                }
            }
        },
        187: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return h
            }));
            var n = r(5),
                a = r.n(n),
                o = r(14),
                i = r.n(o),
                c = r(2),
                s = r(4),
                l = r.n(s),
                u = r(20),
                d = r(15),
                g = r(13),
                f = r(22),
                p = r(38),
                b = r(31),
                m = l.a.useSelect,
                v = l.a.useDispatch;

            function h(e) {
                var t = Object(c.useContext)(u.b),
                    r = m((function(t) {
                        return t(f.a).getModule(e)
                    })),
                    n = m((function(e) {
                        return e(g.a).hasCapability(g.c)
                    })),
                    o = v(f.a).activateModule,
                    s = v(p.a).navigateTo,
                    l = v(d.c).setInternalServerError,
                    h = Object(c.useCallback)(i()(a.a.mark((function r() {
                        var n, i, c;
                        return a.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, o(e);
                                case 2:
                                    if (n = r.sent, i = n.error, c = n.response, i) {
                                        r.next = 11;
                                        break
                                    }
                                    return r.next = 8, Object(b.b)("".concat(t, "_widget-activation-cta"), "activate_module", e);
                                case 8:
                                    s(c.moduleReauthURL), r.next = 12;
                                    break;
                                case 11:
                                    l({
                                        id: "".concat(e, "-setup-error"),
                                        description: i.message
                                    });
                                case 12:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    }))), [o, e, s, l, t]);
                return (null == r ? void 0 : r.name) && n ? h : null
            }
        },
        19: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(16),
                    a = r.n(n),
                    o = r(17),
                    i = r.n(o),
                    c = r(8),
                    s = r.n(c),
                    l = r(0),
                    u = r.n(l),
                    d = r(124),
                    g = r(259),
                    f = r(2),
                    p = r(1),
                    b = r(7),
                    m = Object(f.forwardRef)((function(t, r) {
                        var n = t.children,
                            o = t.href,
                            c = t.text,
                            l = t.className,
                            u = t.danger,
                            m = t.disabled,
                            v = t.target,
                            h = t.icon,
                            y = t.trailingIcon,
                            O = t["aria-label"],
                            j = t.title,
                            S = t.tooltip,
                            _ = i()(t, ["children", "href", "text", "className", "danger", "disabled", "target", "icon", "trailingIcon", "aria-label", "title", "tooltip"]),
                            E = Object(f.useCallback)((function(e) {
                                null !== e && b.i.attachTo(e)
                            }), []),
                            k = Object(d.a)(r, E),
                            D = o && !m ? "a" : "button",
                            w = e.createElement(D, a()({
                                className: s()("mdc-button", l, {
                                    "mdc-button--raised": !c,
                                    "mdc-button--danger": u
                                }),
                                href: m ? void 0 : o,
                                ref: k,
                                disabled: !!m,
                                "aria-label": function() {
                                    var e = O;
                                    if ("_blank" !== v) return e;
                                    var t = Object(p._x)("(opens in a new tab)", "screen reader text", "google-site-kit");
                                    return "string" == typeof n && (e = e || n), e ? "".concat(e, " ").concat(t) : t
                                }(),
                                target: v || "_self",
                                role: "a" === D ? "button" : void 0
                            }, _), h, n && e.createElement("span", {
                                className: "mdc-button__label"
                            }, n), y);
                        return S && (j || O) || h && (j || O) && void 0 === n ? e.createElement(g.a, {
                            title: j || O,
                            classes: {
                                popper: "googlesitekit-tooltip-popper",
                                tooltip: "googlesitekit-tooltip"
                            }
                        }, w) : w
                    }));
                m.displayName = "Button", m.propTypes = {
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
                }, m.defaultProps = {
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
                }, t.a = m
            }).call(this, r(3))
        },
        190: function(e, t, r) {
            "use strict";

            function n(e) {
                var t, r, n, a, o, i, c, s;
                if (void 0 !== e) return !(null == e || null === (t = e[0]) || void 0 === t || null === (r = t.data) || void 0 === r || null === (n = r.rows) || void 0 === n ? void 0 : n.length) || !(null == e || null === (a = e[0]) || void 0 === a || null === (o = a.data) || void 0 === o || null === (i = o.totals) || void 0 === i || null === (c = i[0]) || void 0 === c || null === (s = c.values) || void 0 === s ? void 0 : s.length) || !e[0].data.totals.some((function(e) {
                    return e.values.some((function(e) {
                        return e > 0
                    }))
                }))
            }
            r.d(t, "a", (function() {
                return n
            }))
        },
        191: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ErrorNotice
                }));
                var n = r(0),
                    a = r.n(n),
                    o = r(89),
                    i = r(81);

                function ErrorNotice(t) {
                    var r, n = t.error,
                        a = t.shouldDisplayError,
                        c = void 0 === a ? function() {
                            return !0
                        } : a;
                    return n && !Object(o.c)(n) && c(n) ? e.createElement(i.a, {
                        message: n.message,
                        reconnectURL: null === (r = n.data) || void 0 === r ? void 0 : r.reconnectURL
                    }) : null
                }
                ErrorNotice.propTypes = {
                    error: a.a.shape({
                        message: a.a.string
                    }),
                    shouldDisplayError: a.a.func
                }
            }).call(this, r(3))
        },
        196: function(e, t, r) {
            "use strict";
            t.a = function(e) {
                if ("string" == typeof e && e.match(/[0-9]{8}/)) {
                    var t = e.slice(0, 4),
                        r = Number(e.slice(4, 6)) - 1,
                        n = e.slice(6, 8);
                    return new Date(t, r.toString(), n)
                }
                return !1
            }
        },
        199: function(e, t, r) {
            "use strict";
            var n = r(0),
                a = r.n(n),
                o = function DisplaySetting(e) {
                    return e.value || " "
                };
            o.propTypes = {
                value: a.a.oneOfType([a.a.string, a.a.bool, a.a.number])
            }, t.a = o
        },
        20: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r(2),
                a = Object(n.createContext)(""),
                o = (a.Consumer, a.Provider);
            t.b = a
        },
        201: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    o = r(8),
                    i = r.n(o),
                    c = r(82);

                function PreviewTable(t) {
                    for (var r = t.rows, n = t.rowHeight, a = t.padding, o = [], s = 0; r > s; s++) o.push(e.createElement("div", {
                        className: "googlesitekit-preview-table__row",
                        key: "table-row-" + s
                    }, e.createElement(c.a, {
                        width: "100%",
                        height: n + "px"
                    })));
                    return e.createElement("div", {
                        className: i()("googlesitekit-preview-table", {
                            "googlesitekit-preview-table--padding": a
                        })
                    }, o)
                }
                PreviewTable.propTypes = {
                    rows: a.a.number,
                    rowHeight: a.a.number,
                    padding: a.a.bool
                }, PreviewTable.defaultProps = {
                    rows: 11,
                    rowHeight: 35,
                    padding: !1
                }, t.a = PreviewTable
            }).call(this, r(3))
        },
        202: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return GoogleChart
                }));
                var n = r(6),
                    a = r.n(n),
                    o = r(16),
                    i = r.n(o),
                    c = r(23),
                    s = r.n(c),
                    l = r(12),
                    u = r.n(l),
                    d = r(17),
                    g = r.n(d),
                    f = (r(442), r(8)),
                    p = r.n(f),
                    b = r(0),
                    m = r.n(b),
                    v = r(341),
                    h = r(296),
                    y = r.n(h),
                    O = r(284),
                    j = r.n(O),
                    S = r(2),
                    _ = r(82),
                    E = r(39),
                    k = r(13),
                    D = r(65),
                    w = r(4);

                function R(e, t) {
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
                        t % 2 ? R(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var P = r.n(w).a.useSelect;

                function GoogleChart(t) {
                    var r = t.chartEvents,
                        n = t.chartType,
                        a = t.children,
                        o = t.className,
                        c = t.data,
                        l = t.getChartWrapper,
                        d = t.height,
                        f = t.loaded,
                        b = t.loadingHeight,
                        m = t.loadingWidth,
                        h = t.onMouseOver,
                        O = t.onMouseOut,
                        w = t.onReady,
                        R = t.onSelect,
                        A = t.selectedStats,
                        C = t.width,
                        N = t.options,
                        T = t.gatheringData,
                        x = void 0 !== T && T,
                        I = g()(t, ["chartEvents", "chartType", "children", "className", "data", "getChartWrapper", "height", "loaded", "loadingHeight", "loadingWidth", "onMouseOver", "onMouseOut", "onReady", "onSelect", "selectedStats", "width", "options", "gatheringData"]),
                        L = Object(E.a)("zeroDataStates"),
                        M = P((function(e) {
                            return e(k.a).getDateRangeDates()
                        })),
                        W = M.startDate,
                        F = M.endDate,
                        U = Object(S.useState)(!1),
                        z = u()(U, 2),
                        H = z[0],
                        G = z[1],
                        q = [];
                    (null == c ? void 0 : c.length) && (q = c[0].reduce((function(e, t, r) {
                        return (null == t ? void 0 : t.role) ? [].concat(s()(e), [r]) : e
                    }), []));
                    var B = c;
                    (null == A ? void 0 : A.length) > 0 && (B = c.map((function(e) {
                        return e.filter((function(e, t) {
                            return 0 === t || A.includes(t - 1) || q.includes(t - 1)
                        }))
                    })));
                    var Y = b || d,
                        V = m || C;
                    Y && !V && (V = "100%"), V && !Y && (Y = "100%");
                    var K = "PieChart" === n ? "circular" : "square",
                        $ = e.createElement("div", {
                            className: "googlesitekit-chart-loading"
                        }, e.createElement(_.a, {
                            className: "googlesitekit-chart-loading__wrapper",
                            height: Y,
                            shape: K,
                            width: V
                        })),
                        Z = Object(S.useRef)(),
                        Q = Object(S.useRef)();
                    if (Object(S.useEffect)((function() {
                            return function() {
                                if (Q.current && Z.current) {
                                    var e = Q.current.visualization.events;
                                    e.removeAllListeners(Z.current.getChart()), e.removeAllListeners(Z.current)
                                }
                            }
                        }), []), Object(S.useLayoutEffect)((function() {
                            var e, t;
                            h && (null === (e = Q.current) || void 0 === e || e.visualization.events.addListener(Z.current.getChart(), "onmouseover", (function(e) {
                                h(e, {
                                    chartWrapper: Z.current,
                                    google: Q.current
                                })
                            })));
                            O && (null === (t = Q.current) || void 0 === t || t.visualization.events.addListener(Z.current.getChart(), "onmouseout", (function(e) {
                                O(e, {
                                    chartWrapper: Z.current,
                                    google: Q.current
                                })
                            })))
                        }), [h, O]), !f) return e.createElement("div", {
                        className: p()("googlesitekit-chart", "googlesitekit-chart-loading__forced", o)
                    }, $);
                    var X = s()(r || []);
                    w && X.push({
                        eventName: "ready",
                        callback: w
                    }), R && X.push({
                        eventName: "select",
                        callback: R
                    });
                    var J, ee, te, re, ne, ae, oe, ie, ce = j()(N);
                    L && x && "LineChart" === n && ((null == N || null === (J = N.vaxis) || void 0 === J || null === (ee = J.viewWindow) || void 0 === ee ? void 0 : ee.min) || y()(ce, "vAxis.viewWindow.min", 0), (null == N || null === (te = N.vaxis) || void 0 === te || null === (re = te.viewWindow) || void 0 === re ? void 0 : re.max) || y()(ce, "vAxis.viewWindow.max", 2500), (null == N || null === (ne = N.hAxis) || void 0 === ne || null === (ae = ne.viewWindow) || void 0 === ae ? void 0 : ae.min) || (y()(ce, "hAxis.viewWindow.min", new Date(W)), delete ce.hAxis.ticks), (null == N || null === (oe = N.hAxis) || void 0 === oe || null === (ie = oe.viewWindow) || void 0 === ie ? void 0 : ie.max) || (y()(ce, "hAxis.viewWindow.max", new Date(F)), delete ce.hAxis.ticks));
                    return e.createElement("div", {
                        className: p()("googlesitekit-chart", "googlesitekit-chart--".concat(n), o),
                        tabIndex: -1
                    }, e.createElement(v.a, i()({
                        className: "googlesitekit-chart__inner",
                        chartEvents: X,
                        chartType: n,
                        chartVersion: "49",
                        data: B,
                        loader: $,
                        height: d,
                        getChartWrapper: function(e, t) {
                            var r, n, a;
                            (H || G(!0), e !== Z.current) && (null === (r = Q.current) || void 0 === r || r.visualization.events.removeAllListeners(null === (n = Z.current) || void 0 === n ? void 0 : n.getChart()), null === (a = Q.current) || void 0 === a || a.visualization.events.removeAllListeners(Z.current));
                            Z.current = e, Q.current = t, l && l(e, t)
                        },
                        width: C,
                        options: ce
                    }, I)), L && x && H && e.createElement(D.b, {
                        style: D.a.OVERLAY
                    }), a)
                }
                GoogleChart.propTypes = {
                    className: m.a.string,
                    children: m.a.node,
                    chartEvents: m.a.arrayOf(m.a.shape({
                        eventName: m.a.string,
                        callback: m.a.func
                    })),
                    chartType: m.a.oneOf(["LineChart", "PieChart"]).isRequired,
                    data: m.a.array,
                    getChartWrapper: m.a.func,
                    height: m.a.string,
                    loaded: m.a.bool,
                    loadingHeight: m.a.string,
                    loadingWidth: m.a.string,
                    onMouseOut: m.a.func,
                    onMouseOver: m.a.func,
                    onReady: m.a.func,
                    onSelect: m.a.func,
                    selectedStats: m.a.arrayOf(m.a.number),
                    width: m.a.string,
                    options: m.a.object,
                    gatheringData: m.a.bool
                }, GoogleChart.defaultProps = A(A({}, v.a.defaultProps), {}, {
                    loaded: !0
                })
            }).call(this, r(3))
        },
        21: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(16),
                    a = r.n(n),
                    o = r(17),
                    i = r.n(o),
                    c = r(0),
                    s = r.n(c),
                    l = r(8),
                    u = r.n(l),
                    d = r(127),
                    g = r(1),
                    f = r(2),
                    p = Object(f.forwardRef)((function(t, r) {
                        var n, o = t["aria-label"],
                            c = t.arrow,
                            s = t.back,
                            l = t.caps,
                            f = t.children,
                            p = t.className,
                            b = t.danger,
                            m = t.disabled,
                            v = t.external,
                            h = t.hideExternalIndicator,
                            y = t.href,
                            O = t.inherit,
                            j = t.inverse,
                            S = t.onClick,
                            _ = t.small,
                            E = t.to,
                            k = i()(t, ["aria-label", "arrow", "back", "caps", "children", "className", "danger", "disabled", "external", "hideExternalIndicator", "href", "inherit", "inverse", "onClick", "small", "to"]),
                            D = y || E || !S ? E ? "ROUTER_LINK" : v ? "EXTERNAL_LINK" : "LINK" : m ? "BUTTON_DISABLED" : "BUTTON",
                            w = "BUTTON" === D || "BUTTON_DISABLED" === D ? "button" : "ROUTER_LINK" === D ? d.b : "a",
                            R = ("EXTERNAL_LINK" === D && (n = Object(g._x)("(opens in a new tab)", "screen reader text", "google-site-kit")), "BUTTON_DISABLED" === D && (n = Object(g._x)("(disabled)", "screen reader text", "google-site-kit")), n ? o ? "".concat(o, " ").concat(n) : "string" == typeof f ? "".concat(f, " ").concat(n) : void 0 : o);
                        return e.createElement(w, a()({
                            "aria-label": R,
                            className: u()("googlesitekit-cta-link", p, {
                                "googlesitekit-cta-link--arrow": c,
                                "googlesitekit-cta-link--external": v && !h,
                                "googlesitekit-cta-link--inverse": j,
                                "googlesitekit-cta-link--back": s,
                                "googlesitekit-cta-link--small": _,
                                "googlesitekit-cta-link--inherit": O,
                                "googlesitekit-cta-link--caps": l,
                                "googlesitekit-cta-link--danger": b,
                                "googlesitekit-cta-link--disabled": m
                            }),
                            disabled: m,
                            href: "LINK" === D || "EXTERNAL_LINK" === D ? y : void 0,
                            onClick: S,
                            rel: "EXTERNAL_LINK" === D ? "noopener noreferrer" : void 0,
                            ref: r,
                            target: "EXTERNAL_LINK" === D ? "_blank" : void 0,
                            to: E
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
        234: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = function WidgetHeaderTitle(t) {
                        var r = t.title;
                        return e.createElement("h3", {
                            className: "googlesitekit-subheading-1 googlesitekit-widget__header-title"
                        }, r)
                    };
                a.propTypes = {
                    title: r.n(n).a.string.isRequired
                }, t.a = a
            }).call(this, r(3))
        },
        237: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r(422),
                a = r.n(n);

            function o(e, t) {
                return a()(e, t) || 0
            }
        },
        24: function(e, t, r) {
            "use strict";
            r.d(t, "g", (function() {
                return n
            })), r.d(t, "l", (function() {
                return a
            })), r.d(t, "i", (function() {
                return o
            })), r.d(t, "m", (function() {
                return i
            })), r.d(t, "n", (function() {
                return c
            })), r.d(t, "p", (function() {
                return s
            })), r.d(t, "e", (function() {
                return l
            })), r.d(t, "h", (function() {
                return u
            })), r.d(t, "f", (function() {
                return d
            })), r.d(t, "o", (function() {
                return g
            })), r.d(t, "j", (function() {
                return f
            })), r.d(t, "q", (function() {
                return p
            })), r.d(t, "k", (function() {
                return b
            })), r.d(t, "d", (function() {
                return m
            })), r.d(t, "a", (function() {
                return v
            })), r.d(t, "c", (function() {
                return h
            })), r.d(t, "b", (function() {
                return y
            }));
            var n = "dashboard",
                a = "pageDashboard",
                o = "dashboardViewOnly",
                i = "pageDashboardViewOnly",
                c = "postsList",
                s = "userInput",
                l = "activation",
                u = "splash",
                d = "adminBar",
                g = "settings",
                f = "module",
                p = "wpDashboard",
                b = "moduleSetup",
                m = "traffic",
                v = "content",
                h = "speed",
                y = "monetization"
        },
        245: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ReportTable
                }));
                var n = r(8),
                    a = r.n(n),
                    o = r(291),
                    i = r.n(o),
                    c = r(9),
                    s = r.n(c),
                    l = r(0),
                    u = r.n(l),
                    d = r(39),
                    g = r(65);

                function ReportTable(t) {
                    var r = t.rows,
                        n = t.columns,
                        o = t.className,
                        c = t.limit,
                        l = t.zeroState,
                        u = t.gatheringData,
                        f = void 0 !== u && u,
                        p = Object(d.a)("zeroDataStates");
                    s()(Array.isArray(r), "rows must be an array."), s()(Array.isArray(n), "columns must be an array."), n.forEach((function(e) {
                        var t = e.Component,
                            r = e.field,
                            n = void 0 === r ? null : r;
                        s()(t || null !== n, "each column must define a Component and/or a field.")
                    })), s()(Number.isInteger(c) || void 0 === c, "limit must be an integer, if provided.");
                    var b = n.filter((function(e) {
                        return !e.hideOnMobile
                    }));
                    return e.createElement("div", {
                        className: a()("googlesitekit-table", "googlesitekit-table--with-list", {
                            "googlesitekit-table--gathering-data": f
                        }, o)
                    }, e.createElement("table", {
                        className: a()("googlesitekit-table__wrapper", "googlesitekit-table__wrapper--".concat(n.length, "-col"), "googlesitekit-table__wrapper--mobile-".concat(b.length, "-col"))
                    }, e.createElement("thead", {
                        className: "googlesitekit-table__head"
                    }, e.createElement("tr", {
                        className: "googlesitekit-table__head-row"
                    }, n.map((function(t, r) {
                        var n = t.title,
                            o = t.description,
                            i = t.primary,
                            c = t.hideOnMobile,
                            s = t.className;
                        return e.createElement("th", {
                            className: a()("googlesitekit-table__head-item", {
                                "googlesitekit-table__head-item--primary": i
                            }, {
                                "hidden-on-mobile": c
                            }, s),
                            "data-tooltip": o,
                            key: "googlesitekit-table__head-row-".concat(r)
                        }, n)
                    })))), e.createElement("tbody", {
                        className: "googlesitekit-table__body"
                    }, p && f && e.createElement("tr", {
                        className: "googlesitekit-table__body-row"
                    }, e.createElement("td", {
                        className: "googlesitekit-table__body-item googlesitekit-table__body-item-wrap",
                        colSpan: n.length
                    }, e.createElement(g.b, null))), (!p || !f) && !(null == r ? void 0 : r.length) && l && e.createElement("tr", {
                        className: "googlesitekit-table__body-row"
                    }, e.createElement("td", {
                        className: "googlesitekit-table__body-item googlesitekit-table__body-item-wrap",
                        colSpan: n.length
                    }, e.createElement(l, null))), !f && r.slice(0, c).map((function(t, r) {
                        return e.createElement("tr", {
                            className: "googlesitekit-table__body-row",
                            key: "googlesitekit-table__body-row-".concat(r)
                        }, n.map((function(r, n) {
                            var o = r.Component,
                                c = r.field,
                                s = r.hideOnMobile,
                                l = r.className,
                                u = void 0 !== c ? i()(t, c) : void 0;
                            return e.createElement("td", {
                                key: "googlesitekit-table__body-item-".concat(n),
                                className: a()("googlesitekit-table__body-item", {
                                    "hidden-on-mobile": s
                                }, l)
                            }, e.createElement("div", {
                                className: "googlesitekit-table__body-item-content"
                            }, o && e.createElement(o, {
                                row: t,
                                fieldValue: u
                            }), !o && u))
                        })))
                    })))))
                }
                ReportTable.propTypes = {
                    rows: u.a.arrayOf(u.a.oneOfType([u.a.array, u.a.object])).isRequired,
                    columns: u.a.arrayOf(u.a.shape({
                        title: u.a.string,
                        description: u.a.string,
                        primary: u.a.bool,
                        className: u.a.string,
                        field: u.a.string,
                        hideOnMobile: u.a.bool,
                        Component: u.a.componentType
                    })).isRequired,
                    className: u.a.string,
                    limit: u.a.number,
                    zeroState: u.a.func,
                    gatheringData: u.a.bool
                }
            }).call(this, r(3))
        },
        256: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    o = r(202);

                function Sparkline(t) {
                    var r = t.change,
                        n = t.data,
                        a = t.invertChangeColor,
                        i = t.loadingHeight;
                    if (!n) return null;
                    var c = [];
                    if (null === r) c.push("green");
                    else {
                        var s = a ? "red" : "green",
                            l = a ? "green" : "red";
                        c.push(0 <= (parseFloat(r) || 0) ? s : l)
                    }
                    var u = {
                        title: "",
                        backgroundColor: "transparent",
                        curveType: "line",
                        width: "100%",
                        height: "50",
                        enableInteractivity: !1,
                        chartArea: {
                            height: "100%",
                            width: "100%"
                        },
                        legend: {
                            position: "none"
                        },
                        axisFontSize: 0,
                        hAxis: {
                            baselineColor: "none",
                            ticks: []
                        },
                        vAxis: {
                            baselineColor: "none",
                            ticks: []
                        },
                        axes: [],
                        colors: c
                    };
                    return n.slice(1).some((function(e) {
                        return e[1] > 0
                    })) || (u.vAxis.minValue = 0, u.vAxis.maxValue = 1), e.createElement("div", {
                        className: "googlesitekit-analytics-sparkline-chart-wrap"
                    }, e.createElement(o.a, {
                        chartType: "LineChart",
                        data: n,
                        loadingHeight: i,
                        options: u
                    }))
                }
                Sparkline.propTypes = {
                    invertChangeColor: a.a.bool,
                    loadingHeight: a.a.string
                }, Sparkline.defaultProps = {
                    invertChangeColor: !1,
                    loadingHeight: "46px"
                }, t.a = Sparkline
            }).call(this, r(3))
        },
        278: function(e, t, r) {
            "use strict";
            (function(e, n) {
                var a = r(12),
                    o = r.n(a),
                    i = r(0),
                    c = r.n(i),
                    s = r(26),
                    l = r(8),
                    u = r.n(l),
                    d = r(2);

                function TableOverflowContainer(t) {
                    var r = t.children,
                        a = Object(d.useState)(!1),
                        i = o()(a, 2),
                        c = i[0],
                        l = i[1],
                        g = Object(d.useRef)();
                    Object(d.useEffect)((function() {
                        f();
                        var t = Object(s.debounce)(f, 100);
                        return e.addEventListener("resize", t),
                            function() {
                                return e.removeEventListener("resize", t)
                            }
                    }), []);
                    var f = function() {
                        if (g.current) {
                            var e = g.current,
                                t = e.scrollLeft,
                                r = e.scrollWidth - e.offsetWidth;
                            l(t < r - 16 && 0 < r - 16)
                        }
                    };
                    return n.createElement("div", {
                        onScroll: Object(s.debounce)(f, 100),
                        className: u()("googlesitekit-table-overflow", {
                            "googlesitekit-table-overflow--gradient": c
                        })
                    }, n.createElement("div", {
                        ref: g,
                        className: "googlesitekit-table-overflow__container"
                    }, r))
                }
                TableOverflowContainer.propTypes = {
                    children: c.a.element
                }, t.a = TableOverflowContainer
            }).call(this, r(18), r(3))
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
        281: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return i
            }));
            var n = r(9),
                a = r.n(n),
                o = r(42),
                i = function(e) {
                    var t = e.startDate,
                        r = e.endDate;
                    return a()(Object(o.a)(t), "A valid startDate is required."), a()(Object(o.a)(r), "A valid endDate is required."), {
                        start_date: t.replace(/-/g, ""),
                        end_date: r.replace(/-/g, "")
                    }
                }
        },
        282: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    o = r(21),
                    i = function WidgetHeaderCTA(t) {
                        var r = t.href,
                            n = t.label,
                            a = t.external;
                        return e.createElement("div", {
                            className: "googlesitekit-widget__header--cta"
                        }, e.createElement(o.a, {
                            href: r,
                            external: a
                        }, n))
                    };
                i.propTypes = {
                    href: a.a.string,
                    label: a.a.string.isRequired,
                    external: a.a.bool
                }, i.defaultProps = {
                    href: "",
                    external: !0
                }, t.a = i
            }).call(this, r(3))
        },
        285: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return o
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "d", (function() {
                return s
            }));
            var n = r(29),
                a = r.n(n);

            function o(e, t) {
                return "string" == typeof e || (!("object" !== a()(e) || !t(e)) || !!Array.isArray(e) && e.every((function(e) {
                    return "string" == typeof e || "object" === a()(e) && t(e)
                })))
            }

            function i(e) {
                var t = e.dateRange,
                    r = e.startDate,
                    n = e.endDate,
                    a = r && r.match(/^\d{4}-\d{2}-\d{2}$/),
                    o = n && n.match(/^\d{4}-\d{2}-\d{2}$/),
                    i = t && t.match(/^last-\d+-days$/);
                return a && o || i
            }

            function c(e) {
                var t = function(e) {
                    var t = e.hasOwnProperty("fieldName") && !!e.fieldName,
                        r = e.hasOwnProperty("sortOrder") && e.sortOrder.toString().match(/(ASCENDING|DESCENDING)/i);
                    return t && r
                };
                return Array.isArray(e) ? e.every((function(e) {
                    return "object" === a()(e) && t(e)
                })) : "object" === a()(e) && t(e)
            }

            function s(e) {
                return "string" == typeof e || !!Array.isArray(e) && e.every((function(e) {
                    return "string" == typeof e
                }))
            }
        },
        30: function(e, t, r) {
            "use strict";
            (function(e) {
                var n, a;
                r.d(t, "a", (function() {
                    return o
                })), r.d(t, "b", (function() {
                    return i
                }));
                var o = new Set((null === (n = e) || void 0 === n || null === (a = n._googlesitekitBaseData) || void 0 === a ? void 0 : a.enabledFeatures) || []),
                    i = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                        return t instanceof Set && t.has(e)
                    }
            }).call(this, r(18))
        },
        301: function(e, t) {
            e.exports = googlesitekit.widgets
        },
        307: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return PreviewGraph
                }));
                var n = r(0),
                    a = r.n(n),
                    o = r(372);

                function PreviewGraph(t) {
                    var r = t.title,
                        n = t.GraphSVG,
                        a = t.showIcons;
                    return e.createElement("div", {
                        className: "googlesitekit-analytics-cta__preview-graph"
                    }, e.createElement("h3", {
                        className: "googlesitekit-analytics-cta__preview-graph--title"
                    }, r), e.createElement("div", null, e.createElement(n, null)), a && e.createElement("div", {
                        className: "googlesitekit-analytics-cta__preview-graph--icons"
                    }, e.createElement(o.a, {
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
            }).call(this, r(3))
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
                    a = e._googlesitekitBaseData || {},
                    o = a.activeModules,
                    i = void 0 === o ? [] : o,
                    c = a.isSiteKitScreen,
                    s = a.trackingEnabled,
                    l = {
                        activeModules: i,
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

                function b(e) {
                    e ? d() : g()
                }
                c && s && f()
            }).call(this, r(18))
        },
        33: function(e, t) {
            e.exports = googlesitekit.api
        },
        339: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r(291),
                a = r.n(n);

            function o(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return e.map((function(e, n) {
                    return [a()(e, r), a()(e, t, 0 === n ? "" : 0)]
                }))
            }
        },
        34: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "c", (function() {
                return a
            })), r.d(t, "a", (function() {
                return o
            }));
            var n = {
                    BOXES: "boxes",
                    COMPOSITE: "composite"
                },
                a = {
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
        371: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ActivateAnalyticsCTA
                }));
                var n = r(0),
                    a = r.n(n),
                    o = r(1),
                    i = r(187),
                    c = r(19);

                function ActivateAnalyticsCTA(t) {
                    var r = t.children,
                        n = Object(i.a)("analytics");
                    return n ? e.createElement("div", {
                        className: "googlesitekit-analytics-cta"
                    }, e.createElement("div", {
                        className: "googlesitekit-analytics-cta__preview-graphs"
                    }, r), e.createElement("div", {
                        className: "googlesitekit-analytics-cta__details"
                    }, e.createElement("p", {
                        className: "googlesitekit-analytics-cta--description"
                    }, Object(o.__)("See how many people visit your site from Search and track how you’re achieving your goals.", "google-site-kit")), e.createElement(c.a, {
                        onClick: n
                    }, Object(o.__)("Set up Google Analytics", "google-site-kit")))) : null
                }
                ActivateAnalyticsCTA.propTypes = {
                    children: a.a.node.isRequired
                }
            }).call(this, r(3))
        },
        372: function(e, t, r) {
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
            var o = n.createElement("path", {
                d: "M0 3.01l.443.387 1.755-1.534v3.344h.628V1.863L4.578 3.4l.446-.39L2.512.811 0 3.009z",
                fill: "currentColor"
            });
            t.a = function SvgArrowUp(e) {
                return n.createElement("svg", a({
                    viewBox: "0 0 6 6",
                    fill: "none"
                }, e), o)
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
                return i
            }));
            var n = r(2),
                a = r(94),
                o = r(30),
                i = function(e) {
                    var t = Object(n.useContext)(a.a);
                    return Object(o.b)(e, t)
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
        426: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n.a
            })), r.d(t, "b", (function() {
                return ZeroDataMessage
            }));
            var n = r(696),
                a = r(0),
                o = r.n(a),
                i = r(1),
                c = r(4),
                s = r.n(c),
                l = r(15),
                u = s.a.useSelect;

            function ZeroDataMessage(e) {
                var t = e.skipPrefix,
                    r = u((function(e) {
                        return e(l.c).getCurrentEntityURL()
                    })) ? Object(i.__)("Your page hasn’t appeared in Search yet", "google-site-kit") : Object(i.__)("Your site hasn’t appeared in Search yet", "google-site-kit");
                return t ? r : Object(i.sprintf)(
                    /* translators: %s: message explaining why there is no data */
                    Object(i.__)("No data to display: %s", "google-site-kit"), r)
            }
            ZeroDataMessage.propTypes = {
                skipPrefix: o.a.bool
            }
        },
        442: function(e, t, r) {
            (function(e) {
                Object.prototype.hasOwnProperty.call(e, "google") || (e.google = void 0)
            }).call(this, r(18))
        },
        448: function(e, t, r) {
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
            var o = n.createElement("path", {
                d: "M1 24.053l5-4.825 4 2.193 5.333-2.193 7.334 6.579 6-1.754 3-4.825 4.666 6.579 3.334-1.754L47.333 28 55 19.228l4.333 2.193 5.334-3.509 2 1.316h6L81.333 3 84 9.579l2.333-1.754L89 13.088l12-5.263",
                stroke: "#CCC",
                strokeWidth: 2
            });
            t.a = function SvgCtaGraphVisitors(e) {
                return n.createElement("svg", a({
                    viewBox: "0 0 102 30",
                    fill: "none"
                }, e), o)
            }
        },
        45: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return j
            }));
            var n = r(5),
                a = r.n(n),
                o = r(6),
                i = r.n(o),
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

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        i()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var m = function(e) {
                    return e
                },
                v = function() {
                    return {}
                },
                h = function() {},
                y = d.a.clearError,
                O = d.a.receiveError,
                j = function(e) {
                    var t, r, n = a.a.mark(I),
                        o = e.baseName,
                        c = e.controlCallback,
                        l = e.reducerCallback,
                        d = void 0 === l ? m : l,
                        p = e.argsToParams,
                        j = void 0 === p ? v : p,
                        S = e.validateParams,
                        _ = void 0 === S ? h : S;
                    s()(o, "baseName is required."), s()("function" == typeof c, "controlCallback is required and must be a function."), s()("function" == typeof d, "reducerCallback must be a function."), s()("function" == typeof j, "argsToParams must be a function."), s()("function" == typeof _, "validateParams must be a function.");
                    try {
                        _(j()), r = !1
                    } catch (e) {
                        r = !0
                    }
                    var E = Object(g.b)(o),
                        k = Object(g.a)(o),
                        D = "FETCH_".concat(k),
                        w = "START_".concat(D),
                        R = "FINISH_".concat(D),
                        A = "CATCH_".concat(D),
                        P = "RECEIVE_".concat(k),
                        C = "fetch".concat(E),
                        N = "receive".concat(E),
                        T = "isFetching".concat(E),
                        x = i()({}, T, {});

                    function I(e, t) {
                        var r, i;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, {
                                        payload: {
                                            params: e
                                        },
                                        type: w
                                    };
                                case 2:
                                    return n.next = 4, y(o, t);
                                case 4:
                                    return n.prev = 4, n.next = 7, {
                                        payload: {
                                            params: e
                                        },
                                        type: D
                                    };
                                case 7:
                                    return r = n.sent, n.next = 10, L[N](r, e);
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
                                    return n.prev = 14, n.t0 = n.catch(4), i = n.t0, n.next = 19, O(i, o, t);
                                case 19:
                                    return n.next = 21, O(i);
                                case 21:
                                    return n.next = 23, {
                                        payload: {
                                            params: e
                                        },
                                        type: A
                                    };
                                case 23:
                                    return n.abrupt("return", {
                                        response: r,
                                        error: i
                                    });
                                case 24:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [4, 14]
                        ])
                    }
                    var L = (t = {}, i()(t, C, (function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            var n = j.apply(void 0, t);
                            return _(n), I(n, t)
                        })), i()(t, N, (function(e, t) {
                            return s()(void 0 !== e, "response is required."), r ? (s()(u()(t), "params is required."), _(t)) : t = {}, {
                                payload: {
                                    response: e,
                                    params: t
                                },
                                type: P
                            }
                        })), t),
                        M = i()({}, D, (function(e) {
                            var t = e.payload;
                            return c(t.params)
                        })),
                        W = i()({}, T, (function(e) {
                            if (void 0 === e[T]) return !1;
                            var t;
                            try {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                                t = j.apply(void 0, n), _(t)
                            } catch (e) {
                                return !1
                            }
                            return !!e[T][Object(f.v)(t)]
                        }));
                    return {
                        initialState: x,
                        actions: L,
                        controls: M,
                        reducer: function(e, t) {
                            var r = t.type,
                                n = t.payload;
                            switch (r) {
                                case w:
                                    var a = n.params;
                                    return b(b({}, e), {}, i()({}, T, b(b({}, e[T]), {}, i()({}, Object(f.v)(a), !0))));
                                case P:
                                    var o = n.response,
                                        c = n.params;
                                    return d(e, o, c);
                                case R:
                                    var s = n.params;
                                    return b(b({}, e), {}, i()({}, T, b(b({}, e[T]), {}, i()({}, Object(f.v)(s), !1))));
                                case A:
                                    var l = n.params;
                                    return b(b({}, e), {}, i()({}, T, b(b({}, e[T]), {}, i()({}, Object(f.v)(l), !1))));
                                default:
                                    return e
                            }
                        },
                        resolvers: {},
                        selectors: W
                    }
                }
        },
        473: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(6),
                    a = r.n(n),
                    o = r(2),
                    i = r(1),
                    c = r(53),
                    s = r(13),
                    l = r(59),
                    u = r(281),
                    d = r(234),
                    g = r(282),
                    f = r(4);

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
                var b = r.n(f).a.useSelect;
                t.a = function Header() {
                    var t = b((function(e) {
                            return e(s.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: c.a
                            })
                        })),
                        r = b((function(e) {
                            return e(c.b).getServiceReportURL(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                                        a()(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }({}, Object(u.a)(t)))
                        })),
                        n = b((function(e) {
                            return e(s.a).getDateRange()
                        })),
                        f = Object(l.d)(n);
                    return e.createElement(o.Fragment, null, e.createElement(d.a, {
                        title: Object(i.sprintf)(
                            /* translators: %s: number of days */
                            Object(i._n)("Top search queries over last %s days", "Top search queries over last %s days", f, "google-site-kit"), f)
                    }), e.createElement(g.a, {
                        href: r,
                        label: Object(i.sprintf)(
                            /* translators: %s: module name. */
                            Object(i.__)("See full stats in %s", "google-site-kit"), Object(i._x)("Search Console", "Service name", "google-site-kit"))
                    }))
                }
            }).call(this, r(3))
        },
        474: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Footer
                }));
                var n = r(6),
                    a = r.n(n),
                    o = r(1),
                    i = r(4),
                    c = r.n(i),
                    s = r(53),
                    l = r(13),
                    u = r(96),
                    d = r(281);

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
                var p = c.a.useSelect;

                function Footer() {
                    var t = p((function(e) {
                        var t = e(l.a).getDateRangeDates({
                            offsetDays: s.a
                        });
                        return {
                            serviceURL: e(s.b).getServiceReportURL(f({}, Object(d.a)(t)))
                        }
                    })).serviceURL;
                    return e.createElement(u.a, {
                        className: "googlesitekit-data-block__source",
                        name: Object(o._x)("Search Console", "Service name", "google-site-kit"),
                        href: t,
                        external: !0
                    })
                }
            }).call(this, r(3))
        },
        475: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(1),
                    a = r(13),
                    o = r(234),
                    i = r(4),
                    c = r.n(i).a.useSelect;
                t.a = function Header() {
                    var t = c((function(e) {
                        return e(a.a).getDateRangeNumberOfDays()
                    }));
                    return e.createElement(o.a, {
                        title: Object(n.sprintf)(
                            /* translators: %s: number of days */
                            Object(n._n)("Search traffic over the last %s day", "Search traffic over the last %s days", t, "google-site-kit"), t)
                    })
                }
            }).call(this, r(3))
        },
        48: function(e, t, r) {
            "use strict";
            r.d(t, "d", (function() {
                return a
            })), r.d(t, "a", (function() {
                return o
            })), r.d(t, "c", (function() {
                return i
            })), r.d(t, "b", (function() {
                return c
            })), r.d(t, "e", (function() {
                return s
            }));
            var n = r(125),
                a = "xlarge",
                o = "desktop",
                i = "tablet",
                c = "small";

            function s() {
                var e = Object(n.a)();
                return e > 1280 ? a : e > 960 ? o : e > 600 ? i : c
            }
        },
        50: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return a
            })), r.d(t, "a", (function() {
                return o
            })), r.d(t, "d", (function() {
                return i
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

            function o(e, t) {
                try {
                    return new URL(t, e).href
                } catch (e) {}
                return ("string" == typeof e ? e : "") + ("string" == typeof t ? t : "")
            }

            function i(e) {
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
                var o = a.length - Math.floor(t) + 1;
                return "…" + a.substr(o)
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
        53: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            }));
            var n = "modules/search-console",
                a = 1
        },
        530: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return SettingsForm
                }));
                var n = r(53),
                    a = r(426),
                    o = r(112);

                function SettingsForm() {
                    return e.createElement("div", {
                        className: "googlesitekit-search-console-settings-fields"
                    }, e.createElement(o.a, {
                        moduleSlug: "search-console",
                        storeName: n.b
                    }), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(a.a, null)))
                }
            }).call(this, r(3))
        },
        54: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return b
            })), r.d(t, "b", (function() {
                return m
            }));
            var n = r(6),
                a = r.n(n),
                o = r(29),
                i = r.n(o),
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
                        return "object" === i()(e) ? Object(d.v)(e) : e
                    }));
                    return "".concat(e, "::").concat(u()(JSON.stringify(r)))
                }
                return e
            }
            var b = {
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

            function m() {
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
                    actions: b,
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "RECEIVE_ERROR":
                                var o = n.baseName,
                                    i = n.args,
                                    c = n.error;
                                return f(f({}, e), {}, o ? {
                                    errors: f(f({}, e.errors || {}), {}, a()({}, p(o, i), c))
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
                                    b = f({}, e);
                                if (g)
                                    for (var m in b.errors = f({}, e.errors || {}), b.errors)(m === g || m.startsWith("".concat(g, "::"))) && delete b.errors[m];
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
        55: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ProgressBar
                }));
                var n = r(0),
                    a = r.n(n),
                    o = r(8),
                    i = r.n(o);

                function ProgressBar(t) {
                    var r = t.className,
                        n = t.small,
                        a = t.compress,
                        o = t.indeterminate,
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
                        className: i()("mdc-linear-progress", r, {
                            "mdc-linear-progress--indeterminate": o,
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
        554: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ActivateAnalyticsCTA
                }));
                var n = r(1),
                    a = r(448),
                    o = r(555),
                    i = r(371),
                    c = r(307);

                function ActivateAnalyticsCTA() {
                    return e.createElement(i.a, null, e.createElement(c.a, {
                        title: Object(n.__)("Unique visitors from Search", "google-site-kit"),
                        GraphSVG: a.a
                    }), e.createElement(c.a, {
                        title: Object(n.__)("Goals completed", "google-site-kit"),
                        GraphSVG: o.a
                    }))
                }
            }).call(this, r(3))
        },
        555: function(e, t, r) {
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
            var o = n.createElement("path", {
                    d: "M101 35.5H1V0",
                    stroke: "#CCC"
                }),
                i = n.createElement("path", {
                    d: "M2 24.685l24.5-7.404L51 25 75.5 8.774 100 2",
                    stroke: "#CCC",
                    strokeWidth: 2
                });
            t.a = function SvgCtaGraphGoals(e) {
                return n.createElement("svg", a({
                    viewBox: "0 0 101 36",
                    fill: "none"
                }, e), o, i)
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
                return b
            })), r.d(t, "c", (function() {
                return v
            })), r.d(t, "i", (function() {
                return g
            }));
            var n = "Invalid dateString parameter, it must be a string.",
                a = 'Invalid date range, it must be a string with the format "last-x-days".',
                o = r(9),
                i = r.n(o),
                c = r(35),
                s = function(e) {
                    var t = new Date(e);
                    i()(Object(c.a)(t), "Date param must construct to a valid date instance or be a valid date instance itself.");
                    var r = "".concat(t.getMonth() + 1),
                        n = "".concat(t.getDate());
                    return [t.getFullYear(), r.length < 2 ? "0".concat(r) : r, n.length < 2 ? "0".concat(n) : n].join("-")
                },
                l = r(12),
                u = r.n(l),
                d = r(42),
                g = function(e) {
                    i()(Object(d.a)(e), n);
                    var t = e.split("-"),
                        r = u()(t, 3),
                        a = r[0],
                        o = r[1],
                        c = r[2];
                    return new Date(a, o - 1, c)
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

            function b(e) {
                var t = e.match(/last-(\d+)-days/);
                if (t && t[1]) return parseInt(t[1], 10);
                throw new Error("Unrecognized date range slug.")
            }
            var m = r(1);

            function v() {
                var e = function(e) {
                    return Object(m.sprintf)(
                        /* translators: %s: number of days */
                        Object(m._n)("Last %s day", "Last %s days", e, "google-site-kit"), e)
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
        609: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(6),
                    a = r.n(n),
                    o = r(1),
                    i = r(4),
                    c = r.n(i),
                    s = r(53),
                    l = r(15),
                    u = r(13),
                    d = r(137),
                    g = r(201),
                    f = r(96),
                    p = r(141),
                    b = r(278),
                    m = r(245),
                    v = r(21),
                    h = r(11),
                    y = r(426),
                    O = r(39);

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

                function S(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? j(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var _ = c.a.useSelect,
                    E = c.a.useInViewSelect;
                t.a = Object(d.a)({
                    moduleName: "search-console"
                })((function DashboardPopularKeywordsWidget(t) {
                    var r = t.Widget,
                        n = t.WidgetReportZero,
                        a = t.WidgetReportError,
                        i = Object(O.a)("zeroDataStates"),
                        c = E((function(e) {
                            return e(s.b).isGatheringData()
                        })),
                        d = _((function(e) {
                            return e(u.a).getDateRangeDates({
                                offsetDays: s.a
                            })
                        })),
                        j = S(S({}, d), {}, {
                            dimensions: "query",
                            limit: 10
                        }),
                        k = _((function(e) {
                            return e(l.c).getCurrentEntityURL()
                        }));
                    k && (j.url = k);
                    var D = E((function(e) {
                            return e(s.b).getReport(j)
                        })),
                        w = _((function(e) {
                            return e(s.b).getErrorForSelector("getReport", [j])
                        })),
                        R = _((function(e) {
                            return !e(s.b).hasFinishedResolution("getReport", [j])
                        })),
                        A = _((function(e) {
                            return e(s.b).getServiceReportURL(S(S({}, Object(p.b)(d)), {}, {
                                page: k ? "!".concat(k) : void 0
                            }))
                        })),
                        P = function Footer() {
                            return e.createElement(f.a, {
                                className: "googlesitekit-data-block__source",
                                name: Object(o._x)("Search Console", "Service name", "google-site-kit"),
                                href: A,
                                external: !0
                            })
                        };
                    if (w) return e.createElement(r, {
                        Footer: P
                    }, e.createElement(a, {
                        moduleSlug: "search-console",
                        error: w
                    }));
                    if (R || void 0 === c) return e.createElement(r, {
                        noPadding: !0,
                        Footer: P
                    }, e.createElement(g.a, {
                        padding: !0
                    }));
                    if (!i && c && Object(p.e)(D)) return e.createElement(r, {
                        Footer: P
                    }, e.createElement(n, {
                        moduleSlug: "search-console"
                    }));
                    var C = [{
                        title: k ? Object(o.__)("Top search queries for your page", "google-site-kit") : Object(o.__)("Top search queries for your site", "google-site-kit"),
                        description: Object(o.__)("Most searched for keywords related to your content", "google-site-kit"),
                        primary: !0,
                        field: "keys.0",
                        Component: function Component(t) {
                            var r = t.fieldValue,
                                n = _((function(e) {
                                    var t = e(u.a).getDateRangeDates({
                                            offsetDays: s.a
                                        }),
                                        n = e(l.c).getCurrentEntityURL();
                                    return e(s.b).getServiceReportURL(S(S({}, Object(p.b)(t)), {}, {
                                        query: "!".concat(r),
                                        page: n ? "!".concat(n) : void 0
                                    }))
                                }));
                            return e.createElement(v.a, {
                                href: n,
                                external: !0,
                                inherit: !0
                            }, r)
                        }
                    }, {
                        title: Object(o.__)("Clicks", "google-site-kit"),
                        description: Object(o.__)("Number of times users clicked on your content in search results", "google-site-kit"),
                        Component: function Component(t) {
                            var r = t.row;
                            return e.createElement("span", null, Object(h.r)(r.clicks, {
                                style: "decimal"
                            }))
                        }
                    }, {
                        title: Object(o.__)("Impressions", "google-site-kit"),
                        description: Object(o.__)("Counted each time your content appears in search results", "google-site-kit"),
                        Component: function Component(t) {
                            var r = t.row;
                            return e.createElement("span", null, Object(h.r)(r.impressions, {
                                style: "decimal"
                            }))
                        }
                    }];
                    return e.createElement(r, {
                        noPadding: !0,
                        Footer: P
                    }, e.createElement(b.a, null, e.createElement(m.a, {
                        rows: D,
                        columns: C,
                        zeroState: y.b,
                        gatheringData: c
                    })))
                }))
            }).call(this, r(3))
        },
        61: function(e, t, r) {
            "use strict";
            r.d(t, "n", (function() {
                return _
            })), r.d(t, "l", (function() {
                return E.a
            })), r.d(t, "d", (function() {
                return m
            })), r.d(t, "e", (function() {
                return v
            })), r.d(t, "j", (function() {
                return h
            })), r.d(t, "k", (function() {
                return y
            })), r.d(t, "i", (function() {
                return O
            })), r.d(t, "h", (function() {
                return j
            })), r.d(t, "g", (function() {
                return m
            })), r.d(t, "f", (function() {
                return S
            })), r.d(t, "c", (function() {
                return k
            })), r.d(t, "m", (function() {
                return A
            })), r.d(t, "b", (function() {
                return P
            })), r.d(t, "a", (function() {
                return N
            }));
            var n = r(23),
                a = r.n(n),
                o = r(26),
                i = r(8),
                c = r.n(i),
                s = r(1),
                l = r(72),
                u = r(196),
                d = r(11),
                g = r(140),
                f = r(12),
                p = r.n(f),
                b = r(10),
                m = function(e) {
                    return (parseInt(e, 10) || 0) > 0
                };

            function v(e) {
                return e === b.a || m(e)
            }

            function h(e) {
                return "string" == typeof e && /^UA-\d+-\d+$/.test(e)
            }

            function y(e) {
                return e === b.h || h(e)
            }

            function O(e) {
                return e === b.g || m(e)
            }

            function j(e) {
                return "string" == typeof e && e.trim().length > 0
            }

            function S(e) {
                return "string" == typeof e && /^AW-[0-9]+$/.test(e)
            }

            function _(e) {
                if (!h(e)) return !1;
                var t = e.match(/^UA-(\d+)-(\d+)/),
                    r = p()(t, 3);
                return {
                    accountID: r[1],
                    propertyID: e,
                    number: r[2]
                }
            }
            var E = r(190);

            function k(e, t) {
                for (var r = 1; r < e.length; r++) {
                    var n, a;
                    if (null === (n = e[r]) || void 0 === n || null === (a = n[t]) || void 0 === a ? void 0 : a[0]) return "HH:mm:ss"
                }
                return "mm:ss"
            }
            var D = r(50);

            function w(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return R(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return R(e, t)
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
                var o, i = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function A(e, t) {
                var r, n = (Array.isArray(t) ? t : [t]).map(D.d),
                    a = w(e);
                try {
                    for (a.s(); !(r = a.n()).done;) {
                        var o = r.value,
                            i = o.websiteUrl;
                        if (i) {
                            var c, s = w(n);
                            try {
                                for (s.s(); !(c = s.n()).done;) {
                                    if (c.value === Object(D.d)(i)) return o
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                        }
                    }
                } catch (e) {
                    a.e(e)
                } finally {
                    a.f()
                }
                return null
            }

            function P(e) {
                var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.keyColumnIndex,
                    o = void 0 === a ? 0 : a,
                    i = n.maxSlices,
                    c = n.withOthers,
                    l = void 0 !== c && c,
                    u = n.tooltipCallback,
                    d = (null == e ? void 0 : e[0]) || {},
                    g = d.data,
                    f = void 0 === g ? {} : g,
                    p = f.rows,
                    b = void 0 === p ? [] : p,
                    m = f.totals,
                    v = void 0 === m ? [] : m,
                    h = "function" == typeof u,
                    y = ["Source", "Percent"];
                h && y.push({
                    type: "string",
                    role: "tooltip",
                    p: {
                        html: !0
                    }
                });
                var O = (null == v || null === (t = v[0]) || void 0 === t || null === (r = t.values) || void 0 === r ? void 0 : r[o]) || 0,
                    j = [y],
                    S = l,
                    _ = b.length,
                    E = 1;
                i > 0 ? (S = l && b.length > i, _ = Math.min(b.length, S ? i - 1 : i)) : (S = !1, _ = b.length);
                for (var k = 0; k < _; k++) {
                    var D = b[k],
                        w = D.metrics[0].values[o],
                        R = O > 0 ? w / O : 0;
                    E -= R;
                    var A = [D.dimensions[0], R];
                    h && A.push(u(D, A)), j.push(A)
                }
                if (S && E > 0) {
                    var P = [Object(s.__)("Others", "google-site-kit"), E];
                    h && P.push(u(null, P)), j.push(P)
                }
                return j
            }

            function C(e, t, r) {
                var n = [];
                return Object(o.each)(e, (function(e) {
                    if (e.metrics) {
                        var a = e.metrics[t].values,
                            o = e.dimensions[0],
                            i = Object(u.a)(o);
                        n.push([i, a[r]])
                    }
                })), n
            }

            function N(e, t, r) {
                var n, i, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [Object(s.__)("Users", "google-site-kit"), Object(s.__)("Sessions", "google-site-kit"), Object(s.__)("Bounce Rate %", "google-site-kit"), Object(s.__)("Session Duration", "google-site-kit")],
                    b = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [function(e) {
                        return parseFloat(e).toLocaleString()
                    }, function(e) {
                        return parseFloat(e).toLocaleString()
                    }, function(e) {
                        return Object(d.r)(e / 100, {
                            style: "percent",
                            signDisplay: "never",
                            maximumFractionDigits: 2
                        })
                    }, function(e) {
                        return Object(d.r)(e, "s")
                    }];
                if (!Array.isArray(null === (n = e[0]) || void 0 === n || null === (i = n.data) || void 0 === i ? void 0 : i.rows)) return !1;
                var m = a()(e[0].data.rows),
                    v = m.length;
                if (2 * r > v) {
                    for (var h = new Date, y = 0; r > y; y++) {
                        var O = (h.getMonth() + 1).toString(),
                            j = h.getDate().toString(),
                            S = h.getFullYear().toString() + (2 > O.length ? "0" : "") + O + (2 > j.length ? "0" : "") + j;
                        if (y > v) {
                            var _ = {
                                dimensions: [S],
                                metrics: [{
                                    values: [0, 0, 0, 0, 0]
                                }]
                            };
                            m.unshift(_)
                        }
                        h.setDate(h.getDate() - 1)
                    }
                    m.push([0, 0])
                }
                var E = p[t] === Object(s.__)("Session Duration", "google-site-kit"),
                    k = E ? "timeofday" : "number",
                    D = [
                        [{
                            type: "date",
                            label: Object(s.__)("Day", "google-site-kit")
                        }, {
                            type: "string",
                            role: "tooltip",
                            p: {
                                html: !0
                            }
                        }, {
                            type: k,
                            label: p[t]
                        }, {
                            type: k,
                            label: Object(s.__)("Previous period", "google-site-kit")
                        }]
                    ],
                    w = Object(g.a)(m, {
                        dateRangeLength: r
                    }),
                    R = w.compareRange,
                    A = w.currentRange,
                    P = C(A, u, t),
                    N = C(R, f, t),
                    T = Object(l.a)(),
                    x = {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    };
                return Object(o.each)(P, (function(e, r) {
                    if (e[0] && e[1] && N[r]) {
                        var n = parseFloat(N[r][1]),
                            a = Object(d.b)(e[1], n),
                            o = Object(d.h)(a),
                            i = Object(s.sprintf)(
                                /* translators: 1: date for user stats, 2: previous date for user stats comparison */
                                Object(s._x)("%1$s vs %2$s", "Date range for chart tooltip", "google-site-kit"), e[0].toLocaleDateString(T, x), N[r][0].toLocaleDateString(T, x)),
                            l = Object(s.sprintf)(
                                /* translators: 1: selected stat label, 2: numeric value of selected stat, 3: up or down arrow , 4: different change in percentage */
                                Object(s._x)("%1$s: <strong>%2$s</strong> <em>%3$s %4$s</em>", "Stat information for chart tooltip", "google-site-kit"), p[t], b[t](e[1]), o, Object(d.r)(Math.abs(a), "%"));
                        D.push([e[0], '<div class="'.concat(c()("googlesitekit-visualization-tooltip", {
                            "googlesitekit-visualization-tooltip--up": a > 0,
                            "googlesitekit-visualization-tooltip--down": a < 0
                        }), '">\n\t\t\t\t<p>').concat(i, "</p>\n\t\t\t\t<p>").concat(l, "</p>\n\t\t\t</div>"), E ? Object(d.d)(e[1]) : e[1], E ? Object(d.d)(N[r][1]) : N[r][1]])
                    }
                })), D
            }
        },
        610: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return AnalyticsStats
                }));
                var n = r(6),
                    a = r.n(n),
                    o = r(12),
                    i = r.n(o),
                    c = r(0),
                    s = r.n(c),
                    l = r(4),
                    u = r.n(l),
                    d = r(7),
                    g = r(22),
                    f = r(61),
                    p = r(202);

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

                function m(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? b(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var v = u.a.useSelect;

                function AnalyticsStats(t) {
                    var r = t.data,
                        n = t.selectedStats,
                        a = t.dateRangeLength,
                        o = t.dataLabels,
                        c = t.dataFormats,
                        s = t.statsColor,
                        l = t.gatheringData,
                        u = v((function(e) {
                            return e(g.a).isModuleConnected("analytics")
                        }));
                    if (!v((function(e) {
                            return e(g.a).isModuleActive("analytics")
                        })) || !u) return null;
                    var b = Object(f.a)(r, n, a, 0, 1, o, c) || [],
                        h = b.slice(1).map((function(e) {
                            return i()(e, 1)[0]
                        })),
                        y = m(m({}, AnalyticsStats.chartOptions), {}, {
                            hAxis: m(m({}, AnalyticsStats.chartOptions.hAxis), {}, {
                                ticks: h
                            }),
                            vAxis: m({}, AnalyticsStats.chartOptions.vAxis),
                            series: {
                                0: {
                                    color: s,
                                    targetAxisIndex: 0
                                },
                                1: {
                                    color: s,
                                    targetAxisIndex: 0,
                                    lineDashStyle: [3, 3],
                                    lineWidth: 1
                                }
                            }
                        });
                    if (!b.slice(1).some((function(e) {
                            return e[2] > 0 || e[3] > 0
                        }))) {
                        var O = {
                            0: 1,
                            1: 100
                        }[n];
                        y.vAxis.viewWindow.max = O
                    } else y.vAxis.viewWindow.max = void 0;
                    return e.createElement(d.b, {
                        className: "googlesitekit-analytics-site-stats"
                    }, e.createElement(d.l, null, e.createElement(d.a, {
                        size: 12
                    }, e.createElement(p.a, {
                        chartType: "LineChart",
                        data: b,
                        loadingHeight: "270px",
                        loadingWidth: "100%",
                        options: y,
                        gatheringData: l
                    }))))
                }
                AnalyticsStats.propTypes = {
                    data: s.a.arrayOf(s.a.object).isRequired,
                    dateRangeLength: s.a.number.isRequired,
                    selectedStats: s.a.number.isRequired,
                    dataLabels: s.a.arrayOf(s.a.string).isRequired,
                    dataFormats: s.a.arrayOf(s.a.func).isRequired,
                    statsColor: s.a.string.isRequired,
                    gatheringData: s.a.bool
                }, AnalyticsStats.chartOptions = {
                    chart: {
                        title: ""
                    },
                    curveType: "function",
                    height: 270,
                    width: "100%",
                    chartArea: {
                        height: "80%",
                        width: "100%",
                        left: 60
                    },
                    legend: {
                        position: "top",
                        textStyle: {
                            color: "#616161",
                            fontSize: 12
                        }
                    },
                    hAxis: {
                        format: "M/d/yy",
                        gridlines: {
                            color: "#fff"
                        },
                        textStyle: {
                            color: "#616161",
                            fontSize: 12
                        }
                    },
                    vAxis: {
                        gridlines: {
                            color: "#eee"
                        },
                        minorGridlines: {
                            color: "#eee"
                        },
                        textStyle: {
                            color: "#616161",
                            fontSize: 12
                        },
                        titleTextStyle: {
                            color: "#616161",
                            fontSize: 12,
                            italic: !1
                        },
                        viewWindow: {
                            min: 0
                        }
                    },
                    focusTarget: "category",
                    crosshair: {
                        color: "gray",
                        opacity: .1,
                        orientation: "vertical",
                        trigger: "both"
                    },
                    tooltip: {
                        isHtml: !0,
                        trigger: "both"
                    }
                }
            }).call(this, r(3))
        },
        62: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    o = r(8),
                    i = r.n(o);

                function ChangeArrow(t) {
                    var r = t.direction,
                        n = t.invertColor,
                        a = t.width,
                        o = t.height;
                    return e.createElement("svg", {
                        className: i()("googlesitekit-change-arrow", "googlesitekit-change-arrow--".concat(r), {
                            "googlesitekit-change-arrow--inverted-color": n
                        }),
                        width: a,
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
                return i
            })), r.d(t, "b", (function() {
                return c
            }));
            var n = r(29),
                a = r.n(n),
                o = r(69),
                i = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        __html: o.a.sanitize(e, t)
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
        65: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return u
                }));
                var n = r(6),
                    a = r.n(n),
                    o = r(0),
                    i = r.n(o),
                    c = r(8),
                    s = r.n(c),
                    l = r(1),
                    u = {
                        DEFAULT: "default",
                        OVERLAY: "overlay",
                        SMALL: "small",
                        LARGE: "large"
                    };

                function GatheringDataNotice(t) {
                    var r = t.style;
                    return e.createElement("div", {
                        className: s()("googlesitekit-gathering-data-notice", a()({}, "googlesitekit-gathering-data-notice--has-style-".concat(r), !!r))
                    }, e.createElement("span", null, Object(l.__)("Gathering data…", "google-site-kit")))
                }
                GatheringDataNotice.propTypes = {
                    style: i.a.oneOf(Object.values(u))
                }, t.b = GatheringDataNotice
            }).call(this, r(3))
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
        695: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return SettingsView
                }));
                var n = r(1),
                    a = r(2),
                    o = r(4),
                    i = r.n(o),
                    c = r(53),
                    s = r(199),
                    l = i.a.useSelect;

                function SettingsView() {
                    var t = l((function(e) {
                        return e(c.b).getPropertyID()
                    }));
                    return e.createElement(a.Fragment, null, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(n.__)("Connected Property", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(s.a, {
                        value: t
                    })))
                }
            }).call(this, r(3))
        },
        696: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return PropertySelect
                }));
                var n = r(2),
                    a = r(1),
                    o = r(4),
                    i = r.n(o),
                    c = r(53),
                    s = r(55),
                    l = r(7),
                    u = r(31),
                    d = r(20),
                    g = i.a.useSelect,
                    f = i.a.useDispatch;

                function PropertySelect() {
                    var t = Object(n.useContext)(d.b),
                        r = g((function(e) {
                            return e(c.b).getPropertyID()
                        })),
                        o = g((function(e) {
                            return e(c.b).getMatchedProperties()
                        })),
                        i = g((function(e) {
                            return e(c.b).hasFinishedResolution("getMatchedProperties")
                        })),
                        p = f(c.b).setPropertyID,
                        b = Object(n.useCallback)((function(e, n) {
                            var a = n.dataset.value;
                            r !== a && (p(a), Object(u.b)("".concat(t, "_search-console"), "change_property"))
                        }), [r, p, t]);
                    return i ? e.createElement(l.m, {
                        className: "googlesitekit-search-console__select-property",
                        label: Object(a.__)("Property", "google-site-kit"),
                        value: r,
                        onEnhancedChange: b,
                        enhanced: !0,
                        outlined: !0
                    }, (o || []).map((function(t) {
                        var r = t.siteURL;
                        return e.createElement(l.k, {
                            key: r,
                            value: r
                        }, r.startsWith("sc-domain:") ? Object(a.sprintf)(
                            /* translators: %s: domain name */
                            Object(a.__)("%s (domain property)", "google-site-kit"), r.replace(/^sc-domain:/, "")) : r)
                    }))) : e.createElement(s.a, {
                        small: !0
                    })
                }
            }).call(this, r(3))
        },
        697: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return SettingsEdit
                }));
                var n = r(4),
                    a = r.n(n),
                    o = r(53),
                    i = r(55),
                    c = r(530),
                    s = a.a.useSelect;

                function SettingsEdit() {
                    s((function(e) {
                        return e(o.b).getMatchedProperties()
                    }));
                    var t, r = s((function(e) {
                            return e(o.b).isDoingSubmitChanges()
                        })),
                        n = s((function(e) {
                            return e(o.b).hasFinishedResolution("getMatchedProperties")
                        }));
                    return t = r || !n ? e.createElement(i.a, null) : e.createElement(c.a, null), e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--search-console"
                    }, t)
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
            var o = r(195);
            r.d(t, "i", (function() {
                return o.a
            }));
            var i = r(242);
            r.d(t, "f", (function() {
                return i.a
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
                    return j
                })), r.d(t, "d", (function() {
                    return _
                })), r.d(t, "b", (function() {
                    return E
                })), r.d(t, "a", (function() {
                    return k
                }));
                var n = r(12),
                    a = r.n(n),
                    o = r(29),
                    i = r.n(o),
                    c = r(6),
                    s = r.n(c),
                    l = r(17),
                    u = r.n(l),
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

                function m(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? b(Object(r), !0).forEach((function(t) {
                            s()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
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
                                var o = t.unitDisplay,
                                    i = m(m({
                                        unitDisplay: void 0 === o ? "short" : o
                                    }, u()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? _(a, m(m({}, i), {}, {
                                    unit: "second"
                                })) : Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), a ? _(a, m(m({}, i), {}, {
                                        unit: "second"
                                    })) : "", n ? _(n, m(m({}, i), {}, {
                                        unit: "minute"
                                    })) : "", r ? _(r, m(m({}, i), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var t = Object(p.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(p.__)("%ds", "google-site-kit"), a);
                                if (0 === e) return t;
                                var o = Object(p.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(p.__)("%dm", "google-site-kit"), n),
                                    i = Object(p.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(p.__)("%dh", "google-site-kit"), r);
                                return Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), a ? t : "", n ? o : "", r ? i : "").trim()
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
                    j = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(d.isFinite)(e) ? e : Number(e), Object(d.isFinite)(e) || (console.warn("Invalid number", e, i()(e)), e = 0);
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
                            } : Object(d.isPlainObject)(t) && (r = m({}, t))
                        }
                        var n = r,
                            a = n.style,
                            o = void 0 === a ? "metric" : a;
                        return "metric" === o ? O(e) : "duration" === o ? v(e, t) : _(e, r)
                    },
                    S = f()(console.warn),
                    _ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? k() : r,
                            o = u()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(n, o).format(e)
                        } catch (t) {
                            S("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n), ", ").concat(JSON.stringify(o), " ).format( ").concat(i()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, s = ["signDisplay", "compactDisplay"], l = {}, d = 0, g = Object.entries(o); d < g.length; d++) {
                            var f = a()(g[d], 2),
                                p = f[0],
                                b = f[1];
                            c[p] && b === c[p] || (s.includes(p) || (l[p] = b))
                        }
                        try {
                            return new Intl.NumberFormat(n, l).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(n).format(e)
                        }
                    },
                    E = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? k() : r,
                            a = t.style,
                            o = void 0 === a ? "long" : a,
                            i = t.type,
                            c = void 0 === i ? "conjunction" : i;
                        if (Intl.ListFormat) {
                            var s = new Intl.ListFormat(n, {
                                style: o,
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
        73: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return w
            })), r.d(t, "b", (function() {
                return R
            })), r.d(t, "c", (function() {
                return A
            })), r.d(t, "d", (function() {
                return C
            })), r.d(t, "e", (function() {
                return N
            })), r.d(t, "g", (function() {
                return x
            })), r.d(t, "f", (function() {
                return I
            }));
            var n, a = r(5),
                o = r.n(a),
                i = r(23),
                c = r.n(i),
                s = r(6),
                l = r.n(s),
                u = r(9),
                d = r.n(u),
                g = r(207),
                f = r.n(g),
                p = r(67),
                b = r.n(p),
                m = r(104);

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

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                        l()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
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
                        a = t.reduce((function(e, t) {
                            return [].concat(c()(e), c()(Object.keys(t)))
                        }), []),
                        o = P(a);
                    return d()(0 === o.length, "collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(o.join(", "), ". Check your data stores for duplicates.")), n
                },
                O = y,
                j = y,
                S = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n, a = [].concat(t);
                    return "function" != typeof a[0] && (n = a.shift()),
                        function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return a.reduce((function(e, r) {
                                return r(e, t)
                            }), e)
                        }
                },
                _ = y,
                E = y,
                k = y,
                D = function(e) {
                    return e
                },
                w = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = k.apply(void 0, c()(t.map((function(e) {
                        return e.initialState || {}
                    }))));
                    return {
                        initialState: n,
                        controls: j.apply(void 0, c()(t.map((function(e) {
                            return e.controls || {}
                        })))),
                        actions: O.apply(void 0, c()(t.map((function(e) {
                            return e.actions || {}
                        })))),
                        reducer: S.apply(void 0, [n].concat(c()(t.map((function(e) {
                            return e.reducer || D
                        }))))),
                        resolvers: _.apply(void 0, c()(t.map((function(e) {
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
                A = (n = {}, l()(n, "GET_REGISTRY", Object(m.d)((function(e) {
                    return function() {
                        return e
                    }
                }))), l()(n, "AWAIT", (function(e) {
                    return e.payload.value
                })), n),
                P = function(e) {
                    for (var t = [], r = {}, n = 0; n < e.length; n++) {
                        var a = e[n];
                        r[a] = r[a] >= 1 ? r[a] + 1 : 1, r[a] > 1 && t.push(a)
                    }
                    return t
                },
                C = {
                    actions: R,
                    controls: A,
                    reducer: D
                },
                N = function(e) {
                    return function(t) {
                        return T(e(t))
                    }
                },
                T = b()((function(e) {
                    return f()(e, (function(e, t) {
                        return function() {
                            var r = e.apply(void 0, arguments);
                            return d()(void 0 !== r, "".concat(t, "(...) is not resolved")), r
                        }
                    }))
                }));

            function x(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.negate,
                    n = void 0 !== r && r,
                    a = Object(m.e)((function(t) {
                        return function(r) {
                            var a = !n,
                                o = !!n;
                            try {
                                for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) c[s - 1] = arguments[s];
                                return e.apply(void 0, [t, r].concat(c)), a
                            } catch (e) {
                                return o
                            }
                        }
                    })),
                    o = Object(m.e)((function(t) {
                        return function(r) {
                            for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                            e.apply(void 0, [t, r].concat(a))
                        }
                    }));
                return {
                    safeSelector: a,
                    dangerousSelector: o
                }
            }

            function I(e, t) {
                return d()("function" == typeof e, "a validator function is required."), d()("function" == typeof t, "an action creator function is required."), d()("Generator" !== e[Symbol.toStringTag] && "GeneratorFunction" !== e[Symbol.toStringTag], "an action’s validator function must not be a generator."),
                    function() {
                        return e.apply(void 0, arguments), t.apply(void 0, arguments)
                    }
            }
        },
        74: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(46),
                    a = r.n(n),
                    o = r(47),
                    i = r.n(o),
                    c = r(77),
                    s = r.n(c),
                    l = r(70),
                    u = r.n(l),
                    d = r(71),
                    g = r.n(d),
                    f = r(49),
                    p = r.n(f),
                    b = r(0),
                    m = r.n(b),
                    v = r(8),
                    h = r.n(v),
                    y = r(2),
                    O = r(1),
                    j = r(62),
                    S = r(96),
                    _ = r(65),
                    E = r(30),
                    k = r(11);

                function D(e) {
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
                        var r, n = p()(e);
                        if (t) {
                            var a = p()(this).constructor;
                            r = Reflect.construct(n, arguments, a)
                        } else r = n.apply(this, arguments);
                        return g()(this, r)
                    }
                }
                var w = function(t) {
                    u()(DataBlock, t);
                    var r = D(DataBlock);

                    function DataBlock(e) {
                        var t;
                        return a()(this, DataBlock), (t = r.call(this, e)).handleClick = t.handleClick.bind(s()(t)), t.handleKeyPress = t.handleKeyPress.bind(s()(t)), t
                    }
                    return i()(DataBlock, [{
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
                                r = t.stat,
                                n = t.handleStatSelection;
                            "Enter" !== e.key && " " !== e.key || n(r)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                r = t.className,
                                n = t.title,
                                a = t.datapoint,
                                o = t.datapointUnit,
                                i = t.change,
                                c = t.changeDataUnit,
                                s = t.context,
                                l = t.period,
                                u = t.selected,
                                d = t.handleStatSelection,
                                g = t.source,
                                f = t.sparkline,
                                p = t.invertChangeColor,
                                b = t.gatheringData,
                                m = t.gatheringDataNoticeStyle,
                                v = "button" === s ? "button" : "",
                                D = f;
                            D && p && (D = Object(y.cloneElement)(f, {
                                invertChangeColor: p
                            }));
                            var w = i;
                            c && (w = "%" === c ? Object(k.r)(i, {
                                style: "percent",
                                signDisplay: "never",
                                maximumFractionDigits: 1
                            }) : Object(k.r)(i, c)), l && (w = Object(O.sprintf)(l, w));
                            var R = void 0 === a ? a : Object(k.r)(a, o || void 0),
                                A = Object(E.b)("zeroDataStates");
                            return e.createElement("div", {
                                className: h()("googlesitekit-data-block", r, "googlesitekit-data-block--".concat(s), {
                                    "googlesitekit-data-block--selected": u,
                                    "googlesitekit-data-block--is-gathering-data": b
                                }),
                                tabIndex: "button" !== s || b ? "-1" : "0",
                                role: d && v,
                                onClick: b ? void 0 : d && this.handleClick,
                                onKeyPress: b ? void 0 : d && this.handleKeyPress,
                                "aria-disabled": b || void 0,
                                "aria-label": d && n,
                                "aria-pressed": d && u
                            }, e.createElement("div", {
                                className: "googlesitekit-data-block__title-datapoint-wrapper"
                            }, e.createElement("h3", {
                                className: " googlesitekit-subheading-1 googlesitekit-data-block__title "
                            }, n), !b && e.createElement("div", {
                                className: "googlesitekit-data-block__datapoint"
                            }, R)), !b && e.createElement(y.Fragment, null, D && e.createElement("div", {
                                className: "googlesitekit-data-block__sparkline"
                            }, D), e.createElement("div", {
                                className: "googlesitekit-data-block__change-source-wrapper"
                            }, e.createElement("div", {
                                className: h()("googlesitekit-data-block__change", {
                                    "googlesitekit-data-block__change--no-change": !i
                                })
                            }, e.createElement(y.Fragment, null, !!i && e.createElement("span", {
                                className: "googlesitekit-data-block__arrow"
                            }, e.createElement(j.a, {
                                direction: 0 < parseFloat(i) ? "up" : "down",
                                invertColor: p
                            })), e.createElement("span", {
                                className: "googlesitekit-data-block__value"
                            }, w))), g && e.createElement(S.a, {
                                className: "googlesitekit-data-block__source",
                                name: g.name,
                                href: g.link,
                                external: null == g ? void 0 : g.external
                            }))), b && A && e.createElement(_.b, {
                                style: m
                            }))
                        }
                    }]), DataBlock
                }(y.Component);
                w.propTypes = {
                    stat: m.a.number,
                    onClick: m.a.func,
                    className: m.a.string,
                    title: m.a.string,
                    datapoint: m.a.oneOfType([m.a.string, m.a.number]),
                    datapointUnit: m.a.string,
                    change: m.a.oneOfType([m.a.string, m.a.number]),
                    changeDataUnit: m.a.oneOfType([m.a.string, m.a.bool]),
                    context: m.a.string,
                    period: m.a.string,
                    selected: m.a.bool,
                    handleStatSelection: m.a.func,
                    invertChangeColor: m.a.bool,
                    gatheringData: m.a.bool,
                    gatheringDataNoticeStyle: m.a.oneOf(Object.values(_.a))
                }, w.defaultProps = {
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
                }, t.a = w
            }).call(this, r(3))
        },
        76: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return a
            })), r.d(t, "c", (function() {
                return o
            }));
            var n = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                a = function(e) {
                    return e.replace(/([a-z0-9]{1})([A-Z]{1})/g, "$1_$2").toUpperCase()
                };

            function o(e) {
                return e.split("-").map((function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                })).join("")
            }
        },
        796: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(23),
                    a = r.n(n),
                    o = r(6),
                    i = r.n(o),
                    c = r(1),
                    s = r(4),
                    l = r.n(s),
                    u = r(53),
                    d = r(15),
                    g = r(13),
                    f = r(141),
                    p = r(11),
                    b = r(339),
                    m = r(31),
                    v = r(137),
                    h = r(74),
                    y = r(256),
                    O = r(82),
                    j = r(237),
                    S = r(281),
                    _ = r(140),
                    E = r(39);

                function k(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }
                var D = l.a.useSelect,
                    w = l.a.useInViewSelect;
                t.a = Object(v.a)({
                    moduleName: "search-console"
                })((function DashboardImpressionsWidget(t) {
                    var r = t.WidgetReportZero,
                        n = t.WidgetReportError,
                        o = Object(E.a)("zeroDataStates"),
                        s = w((function(e) {
                            return e(u.b).isGatheringData()
                        })),
                        l = D((function(e) {
                            return e(g.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: u.a
                            })
                        })),
                        v = l.compareStartDate,
                        R = l.startDate,
                        A = l.endDate,
                        P = D((function(e) {
                            return e(u.b).getPropertyID()
                        })),
                        C = D((function(e) {
                            return e(d.c).getCurrentEntityURL()
                        })),
                        N = D((function(e) {
                            return e(u.b).isDomainProperty()
                        })),
                        T = D((function(e) {
                            return e(d.c).getReferenceSiteURL()
                        })),
                        x = Object(p.x)(T),
                        I = {
                            dimensions: "date",
                            startDate: v,
                            endDate: A
                        },
                        L = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? k(Object(r), !0).forEach((function(t) {
                                    i()(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({
                            resource_id: P
                        }, Object(S.a)({
                            startDate: R,
                            endDate: A
                        }));
                    C ? (I.url = C, L.page = "!".concat(C)) : N && x && (L.page = "*".concat(x));
                    var M = D((function(e) {
                            var t = e(u.b);
                            return {
                                error: t.getErrorForSelector("getReport", [I]),
                                loading: !t.hasFinishedResolution("getReport", [I]),
                                serviceURL: t.getServiceURL({
                                    path: "/performance/search-analytics",
                                    query: L
                                })
                            }
                        })),
                        W = M.error,
                        F = M.loading,
                        U = M.serviceURL,
                        z = w((function(e) {
                            return e(u.b).getReport(I)
                        })),
                        H = D((function(e) {
                            return e(g.a).getDateRangeNumberOfDays()
                        }));
                    if (W) return Object(m.b)("plugin_setup", "search_console_error", W.message), e.createElement(n, {
                        moduleSlug: "search-console",
                        error: W
                    });
                    if (F || void 0 === s) return e.createElement(O.a, {
                        width: "100%",
                        height: "202px"
                    });
                    if (!o && s && Object(f.e)(z)) return e.createElement(r, {
                        moduleSlug: "search-console"
                    });
                    var G = Object(_.a)(z, {
                            dateRangeLength: H
                        }),
                        q = G.compareRange,
                        B = G.currentRange,
                        Y = Object(j.a)(B, "impressions"),
                        V = Object(j.a)(q, "impressions"),
                        K = Object(p.a)(V, Y),
                        $ = [
                            [{
                                type: "string",
                                label: "Day"
                            }, {
                                type: "number",
                                label: "Clicks"
                            }]
                        ].concat(a()(Object(b.a)(B, "impressions", "keys.0").map((function(e) {
                            var t = new Date(e[0]);
                            return ["".concat(t.getMonth() + 1, "/").concat(t.getUTCDate()), e[1]]
                        }))));
                    return e.createElement(h.a, {
                        className: "overview-total-impressions",
                        title: Object(c.__)("Impressions", "google-site-kit"),
                        datapoint: Y,
                        change: K,
                        changeDataUnit: "%",
                        source: {
                            name: Object(c._x)("Search Console", "Service name", "google-site-kit"),
                            link: U,
                            external: !0
                        },
                        sparkline: e.createElement(y.a, {
                            data: $,
                            change: K,
                            gatheringData: s
                        }),
                        gatheringData: s
                    })
                }))
            }).call(this, r(3))
        },
        797: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(23),
                    a = r.n(n),
                    o = r(6),
                    i = r.n(o),
                    c = r(1),
                    s = r(4),
                    l = r.n(s),
                    u = r(53),
                    d = r(15),
                    g = r(13),
                    f = r(339),
                    p = r(11),
                    b = r(31),
                    m = r(141),
                    v = r(137),
                    h = r(74),
                    y = r(256),
                    O = r(82),
                    j = r(237),
                    S = r(281),
                    _ = r(140),
                    E = r(39);

                function k(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }
                var D = l.a.useSelect,
                    w = l.a.useInViewSelect;
                t.a = Object(v.a)({
                    moduleName: "search-console"
                })((function DashboardClicksWidget(t) {
                    var r = t.WidgetReportZero,
                        n = t.WidgetReportError,
                        o = Object(E.a)("zeroDataStates"),
                        s = w((function(e) {
                            return e(u.b).isGatheringData()
                        })),
                        l = D((function(e) {
                            return e(g.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: u.a
                            })
                        })),
                        v = l.compareStartDate,
                        R = l.startDate,
                        A = l.endDate,
                        P = D((function(e) {
                            return e(u.b).getPropertyID()
                        })),
                        C = D((function(e) {
                            return e(d.c).getCurrentEntityURL()
                        })),
                        N = D((function(e) {
                            return e(u.b).isDomainProperty()
                        })),
                        T = D((function(e) {
                            return e(d.c).getReferenceSiteURL()
                        })),
                        x = Object(p.x)(T),
                        I = {
                            dimensions: "date",
                            startDate: v,
                            endDate: A
                        },
                        L = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? k(Object(r), !0).forEach((function(t) {
                                    i()(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({
                            resource_id: P
                        }, Object(S.a)({
                            startDate: R,
                            endDate: A
                        }));
                    C ? (I.url = C, L.page = "!".concat(C)) : N && x && (L.page = "*".concat(x));
                    var M = D((function(e) {
                            var t = e(u.b);
                            return {
                                error: t.getErrorForSelector("getReport", [I]),
                                loading: !t.hasFinishedResolution("getReport", [I]),
                                serviceURL: t.getServiceURL({
                                    path: "/performance/search-analytics",
                                    query: L
                                })
                            }
                        })),
                        W = M.error,
                        F = M.loading,
                        U = M.serviceURL,
                        z = w((function(e) {
                            return e(u.b).getReport(I)
                        })),
                        H = D((function(e) {
                            return e(g.a).getDateRangeNumberOfDays()
                        }));
                    if (W) return Object(b.b)("plugin_setup", "search_console_error", W.message), e.createElement(n, {
                        moduleSlug: "search-console",
                        error: W
                    });
                    if (F || void 0 === s) return e.createElement(O.a, {
                        width: "100%",
                        height: "202px"
                    });
                    if (!o && s && Object(m.e)(z)) return e.createElement(r, {
                        moduleSlug: "search-console"
                    });
                    var G = Object(_.a)(z, {
                            dateRangeLength: H
                        }),
                        q = G.compareRange,
                        B = G.currentRange,
                        Y = Object(j.a)(B, "clicks"),
                        V = Object(j.a)(q, "clicks"),
                        K = Object(p.a)(V, Y),
                        $ = [
                            [{
                                type: "string",
                                label: "Day"
                            }, {
                                type: "number",
                                label: "Clicks"
                            }]
                        ].concat(a()(Object(f.a)(B, "clicks", "keys.0").map((function(e) {
                            var t = new Date(e[0]);
                            return ["".concat(t.getMonth() + 1, "/").concat(t.getUTCDate()), e[1]]
                        }))));
                    return e.createElement(h.a, {
                        className: "overview-total-clicks",
                        title: Object(c.__)("Clicks", "google-site-kit"),
                        datapoint: Y,
                        change: K,
                        changeDataUnit: "%",
                        source: {
                            name: Object(c._x)("Search Console", "Service name", "google-site-kit"),
                            link: U,
                            external: !0
                        },
                        sparkline: e.createElement(y.a, {
                            data: $,
                            change: K,
                            gatheringData: s
                        }),
                        gatheringData: s
                    })
                }))
            }).call(this, r(3))
        },
        798: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ModulePopularKeywordsWidget
                }));
                var n = r(6),
                    a = r.n(n),
                    o = r(0),
                    i = r.n(o),
                    c = r(1),
                    s = r(4),
                    l = r.n(s),
                    u = r(13),
                    d = r(53),
                    g = r(11),
                    f = r(141),
                    p = r(201),
                    b = r(21),
                    m = r(278),
                    v = r(245),
                    h = r(426),
                    y = r(39),
                    O = r(473),
                    j = r(474);

                function S(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function _(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? S(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var E = l.a.useSelect,
                    k = l.a.useInViewSelect;

                function ModulePopularKeywordsWidget(t) {
                    var r = t.Widget,
                        n = t.WidgetReportZero,
                        a = t.WidgetReportError,
                        o = Object(y.a)("zeroDataStates"),
                        i = k((function(e) {
                            return e(d.b).isGatheringData()
                        })),
                        s = E((function(e) {
                            return e(u.a).getDateRangeDates({
                                offsetDays: d.a
                            })
                        })),
                        l = s.startDate,
                        S = s.endDate,
                        D = {
                            startDate: l,
                            endDate: S,
                            dimensions: "query",
                            limit: 10
                        },
                        w = E((function(e) {
                            return {
                                isLoading: !e(d.b).hasFinishedResolution("getReport", [D]),
                                error: e(d.b).getErrorForSelector("getReport", [D])
                            }
                        })),
                        R = w.isLoading,
                        A = w.error,
                        P = k((function(e) {
                            return e(d.b).getReport(D)
                        }));
                    if (R || void 0 === i) return e.createElement(r, {
                        noPadding: !0,
                        Header: O.a,
                        Footer: j.a
                    }, e.createElement(p.a, {
                        padding: !0
                    }));
                    if (A) return e.createElement(r, {
                        Header: O.a,
                        Footer: j.a
                    }, e.createElement(a, {
                        moduleSlug: "search-console",
                        error: A
                    }));
                    if (!o && i && Object(f.e)(P)) return e.createElement(r, {
                        Header: O.a,
                        Footer: j.a
                    }, e.createElement(n, {
                        moduleSlug: "search-console"
                    }));
                    var C = [{
                        title: Object(c.__)("Keyword", "google-site-kit"),
                        description: Object(c.__)("Most searched for keywords related to your content", "google-site-kit"),
                        primary: !0,
                        field: "keys.0",
                        Component: function Component(t) {
                            var r = t.fieldValue,
                                n = E((function(e) {
                                    return e(d.b).getServiceReportURL(_(_({}, Object(f.b)({
                                        startDate: l,
                                        endDate: S
                                    })), {}, {
                                        query: "!".concat(r)
                                    }))
                                }));
                            return e.createElement(b.a, {
                                href: n,
                                external: !0,
                                inherit: !0
                            }, r)
                        }
                    }, {
                        title: Object(c.__)("Clicks", "google-site-kit"),
                        description: Object(c.__)("Number of times users clicked on your content in search results", "google-site-kit"),
                        Component: function Component(t) {
                            var r = t.row;
                            return e.createElement("span", null, Object(g.r)(r.clicks, {
                                style: "decimal"
                            }))
                        }
                    }, {
                        title: Object(c.__)("Impressions", "google-site-kit"),
                        description: Object(c.__)("Counted each time your content appears in search results", "google-site-kit"),
                        Component: function Component(t) {
                            var r = t.row;
                            return e.createElement("span", null, Object(g.r)(r.impressions, {
                                style: "decimal"
                            }))
                        }
                    }];
                    return e.createElement(r, {
                        noPadding: !0,
                        Header: O.a,
                        Footer: j.a
                    }, e.createElement(m.a, null, e.createElement(v.a, {
                        rows: P,
                        columns: C,
                        zeroState: h.b,
                        gatheringData: i
                    })))
                }
                ModulePopularKeywordsWidget.propTypes = {
                    Widget: i.a.func.isRequired,
                    WidgetReportZero: i.a.func.isRequired,
                    WidgetReportError: i.a.func.isRequired
                }
            }).call(this, r(3))
        },
        799: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return ModuleOverviewWidget
                }));
                var n = r(12),
                    a = r.n(n),
                    o = r(0),
                    i = r.n(o),
                    c = r(2),
                    s = r(1),
                    l = r(4),
                    u = r.n(l),
                    d = r(53),
                    g = r(13),
                    f = r(141),
                    p = r(39),
                    b = r(82),
                    m = r(800),
                    v = r(801),
                    h = r(802),
                    y = u.a.useSelect,
                    O = u.a.useInViewSelect;

                function ModuleOverviewWidget(t) {
                    var r = t.Widget,
                        n = t.WidgetReportZero,
                        o = t.WidgetReportError,
                        i = Object(p.a)("zeroDataStates"),
                        s = Object(c.useState)(0),
                        l = a()(s, 2),
                        u = l[0],
                        j = l[1],
                        S = y((function(e) {
                            return e(g.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: d.a
                            })
                        })),
                        _ = S.endDate,
                        E = S.compareStartDate,
                        k = O((function(e) {
                            return e(d.b).isGatheringData()
                        })),
                        D = {
                            startDate: E,
                            endDate: _,
                            dimensions: "date"
                        },
                        w = O((function(e) {
                            return e(d.b).getReport(D)
                        })),
                        R = y((function(e) {
                            return e(d.b).getErrorForSelector("getReport", [D])
                        })),
                        A = y((function(e) {
                            return !e(d.b).hasFinishedResolution("getReport", [D])
                        })),
                        P = y((function(e) {
                            return e(g.a).getDateRangeNumberOfDays()
                        })),
                        C = function WidgetHeader() {
                            return e.createElement(m.a, {
                                metrics: ModuleOverviewWidget.metrics,
                                selectedStats: u
                            })
                        };
                    return A || void 0 === k ? e.createElement(r, {
                        Header: C,
                        noPadding: !0
                    }, e.createElement(b.a, {
                        width: "100%",
                        height: "190px",
                        padding: !0
                    }), e.createElement(b.a, {
                        width: "100%",
                        height: "270px",
                        padding: !0
                    })) : R ? e.createElement(r, {
                        Header: C
                    }, e.createElement(o, {
                        moduleSlug: "search-console",
                        error: R
                    })) : !i && k && Object(f.e)(w) ? e.createElement(r, {
                        Header: C
                    }, e.createElement(n, {
                        moduleSlug: "search-console"
                    })) : e.createElement(r, {
                        noPadding: !0,
                        Header: C
                    }, e.createElement(v.a, {
                        data: w,
                        handleStatsSelection: j,
                        selectedStats: u,
                        dateRangeLength: P,
                        gatheringData: k
                    }), e.createElement(h.a, {
                        data: w,
                        dateRangeLength: P,
                        selectedStats: u,
                        metrics: ModuleOverviewWidget.metrics,
                        gatheringData: k
                    }))
                }
                ModuleOverviewWidget.metrics = [{
                    color: "#4285f4",
                    label: Object(s.__)("Clicks", "google-site-kit"),
                    metric: "clicks"
                }, {
                    color: "#27bcd4",
                    label: Object(s.__)("Impressions", "google-site-kit"),
                    metric: "impressions"
                }, {
                    color: "#1b9688",
                    label: Object(s.__)("CTR", "google-site-kit"),
                    metric: "ctr"
                }, {
                    color: "#673ab7",
                    label: Object(s.__)("Position", "google-site-kit"),
                    metric: "position"
                }], ModuleOverviewWidget.propTypes = {
                    Widget: i.a.elementType.isRequired,
                    WidgetReportZero: i.a.elementType.isRequired,
                    WidgetReportError: i.a.elementType.isRequired
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
                    o = r(1);

                function i(e, t) {
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
                    var o, i = !0,
                        s = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return i = e.done, e
                        },
                        e: function(e) {
                            s = !0, o = e
                        },
                        f: function() {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (s) throw o
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
                        var i = document.createElement("span");
                        i.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(e));
                        var c = document.createElement("span");
                        c.setAttribute("class", "plugin-count"), c.setAttribute("aria-hidden", "true"), c.textContent = e;
                        var s = document.createElement("span");
                        return s.setAttribute("class", "screen-reader-text"), s.textContent = Object(o.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(o._n)("%d notification", "%d notifications", e, "google-site-kit"), e), i.appendChild(c), i.appendChild(s), t && null === n && t.appendChild(i), r && null === a && r.appendChild(i), i
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
                        var n, o = {},
                            c = i(r.searchParams.entries());
                        try {
                            for (c.s(); !(n = c.n()).done;) {
                                var s = a()(n.value, 2),
                                    l = s[0],
                                    d = s[1];
                                o[l] = d
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
        800: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(6),
                    a = r.n(n),
                    o = r(0),
                    i = r.n(o),
                    c = r(2),
                    s = r(1),
                    l = r(53),
                    u = r(13),
                    d = r(141),
                    g = r(234),
                    f = r(282),
                    p = r(4);

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
                var m = r.n(p).a.useSelect,
                    v = function Header(t) {
                        var r = t.metrics,
                            n = t.selectedStats,
                            o = m((function(e) {
                                return e(u.a).getDateRangeDates({
                                    offsetDays: l.a
                                })
                            })),
                            i = m((function(e) {
                                var t;
                                return e(l.b).getServiceReportURL(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? b(Object(r), !0).forEach((function(t) {
                                            a()(e, t, r[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        }))
                                    }
                                    return e
                                }({
                                    metrics: null === (t = r[n]) || void 0 === t ? void 0 : t.metric
                                }, Object(d.b)(o)))
                            })),
                            p = m((function(e) {
                                return e(u.a).getDateRangeNumberOfDays()
                            }));
                        return e.createElement(c.Fragment, null, e.createElement(g.a, {
                            title: Object(s.sprintf)(
                                /* translators: %s: number of days */
                                Object(s._n)("Overview for the last %s day", "Overview for the last %s days", p, "google-site-kit"), p)
                        }), e.createElement(f.a, {
                            href: i,
                            label: Object(s.sprintf)(
                                /* translators: %s: module name. */
                                Object(s.__)("See full stats in %s", "google-site-kit"), Object(s._x)("Search Console", "Service name", "google-site-kit"))
                        }))
                    };
                v.propTypes = {
                    metrics: i.a.arrayOf(i.a.object),
                    selectedStats: i.a.number.isRequired
                }, t.a = v
            }).call(this, r(3))
        },
        801: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Overview
                }));
                var n = r(0),
                    a = r.n(n),
                    o = r(1),
                    i = r(7),
                    c = r(141),
                    s = r(74);

                function Overview(t) {
                    var r = t.data,
                        n = t.selectedStats,
                        a = t.handleStatsSelection,
                        l = t.dateRangeLength,
                        u = t.gatheringData,
                        d = Object(c.a)(r, l),
                        g = d.totalClicks,
                        f = d.totalImpressions,
                        p = d.averageCTR,
                        b = d.averagePosition,
                        m = d.totalClicksChange,
                        v = d.totalImpressionsChange,
                        h = d.averageCTRChange,
                        y = d.averagePositionChange,
                        O = {
                            smSize: 2,
                            mdSize: 2,
                            lgSize: 3
                        };
                    return e.createElement(i.b, null, e.createElement(i.l, null, e.createElement(i.a, O, e.createElement(s.a, {
                        stat: 0,
                        className: "googlesitekit-data-block--clicks googlesitekit-data-block--button-1",
                        title: Object(o.__)("Total Clicks", "google-site-kit"),
                        datapoint: g,
                        change: m,
                        changeDataUnit: "%",
                        context: "button",
                        selected: 0 === n,
                        handleStatSelection: a,
                        gatheringData: u
                    })), e.createElement(i.a, O, e.createElement(s.a, {
                        stat: 1,
                        className: "googlesitekit-data-block--impressions googlesitekit-data-block--button-2",
                        title: Object(o.__)("Total Impressions", "google-site-kit"),
                        datapoint: f,
                        change: v,
                        changeDataUnit: "%",
                        context: "button",
                        selected: 1 === n,
                        handleStatSelection: a,
                        gatheringData: u
                    })), e.createElement(i.a, O, e.createElement(s.a, {
                        stat: 2,
                        className: "googlesitekit-data-block--position googlesitekit-data-block--button-3",
                        title: Object(o.__)("Average CTR", "google-site-kit"),
                        datapoint: p,
                        datapointUnit: "%",
                        change: h,
                        changeDataUnit: "%",
                        context: "button",
                        selected: 2 === n,
                        handleStatSelection: a,
                        gatheringData: u
                    })), e.createElement(i.a, O, e.createElement(s.a, {
                        stat: 3,
                        className: "googlesitekit-data-block--ctr googlesitekit-data-block--button-4",
                        title: Object(o.__)("Average Position", "google-site-kit"),
                        datapoint: b,
                        change: y,
                        changeDataUnit: "%",
                        context: "button",
                        selected: 3 === n,
                        handleStatSelection: a,
                        gatheringData: u
                    }))))
                }
                Overview.propTypes = {
                    data: a.a.arrayOf(a.a.object),
                    selectedStats: a.a.number.isRequired,
                    handleStatsSelection: a.a.func.isRequired,
                    gatheringData: a.a.bool
                }
            }).call(this, r(3))
        },
        802: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return Stats
                }));
                var n = r(12),
                    a = r.n(n),
                    o = r(0),
                    i = r.n(o),
                    c = r(1),
                    s = r(141),
                    l = r(7),
                    u = r(202),
                    d = r(140);

                function Stats(t) {
                    var r = t.data,
                        n = t.metrics,
                        o = t.selectedStats,
                        i = t.dateRangeLength,
                        g = t.gatheringData,
                        f = Object(d.a)(r, {
                            dateRangeLength: i
                        }),
                        p = f.compareRange,
                        b = f.currentRange,
                        m = Object(s.c)(b, p, n[o].label, n[o].metric, i),
                        v = m.slice(1).map((function(e) {
                            return a()(e, 1)[0]
                        })),
                        h = {
                            chart: {
                                title: Object(c.__)("Search Traffic Summary", "google-site-kit")
                            },
                            curveType: "function",
                            height: 270,
                            width: "100%",
                            chartArea: {
                                height: "80%",
                                width: "100%",
                                left: 60
                            },
                            legend: {
                                position: "top",
                                textStyle: {
                                    color: "#616161",
                                    fontSize: 12
                                }
                            },
                            hAxis: {
                                format: "M/d/yy",
                                gridlines: {
                                    color: "#fff"
                                },
                                textStyle: {
                                    color: "#616161",
                                    fontSize: 12
                                },
                                ticks: v
                            },
                            vAxis: {
                                direction: 3 === o ? -1 : 1,
                                gridlines: {
                                    color: "#eee"
                                },
                                minorGridlines: {
                                    color: "#eee"
                                },
                                textStyle: {
                                    color: "#616161",
                                    fontSize: 12
                                },
                                titleTextStyle: {
                                    color: "#616161",
                                    fontSize: 12,
                                    italic: !1
                                },
                                viewWindow: {
                                    min: 0
                                }
                            },
                            series: {
                                0: {
                                    color: n[o].color,
                                    targetAxisIndex: 0
                                },
                                1: {
                                    color: n[o].color,
                                    targetAxisIndex: 0,
                                    lineDashStyle: [3, 3],
                                    lineWidth: 1
                                }
                            },
                            tooltip: {
                                isHtml: !0,
                                trigger: "both"
                            },
                            focusTarget: "category",
                            crosshair: {
                                color: "gray",
                                opacity: .1,
                                orientation: "vertical",
                                trigger: "both"
                            }
                        };
                    return Object(s.e)(r) ? h.vAxis.viewWindow.max = 100 : h.vAxis.viewWindow.max = void 0, e.createElement(l.b, {
                        className: "googlesitekit-search-console-site-stats"
                    }, e.createElement(l.l, null, e.createElement(l.a, {
                        size: 12
                    }, e.createElement(u.a, {
                        chartType: "LineChart",
                        data: m,
                        loadingHeight: "270px",
                        loadingWidth: "100%",
                        options: h,
                        gatheringData: g
                    }))))
                }
                Stats.propTypes = {
                    data: i.a.arrayOf(i.a.object).isRequired,
                    dateRangeLength: i.a.number.isRequired,
                    metrics: i.a.arrayOf(i.a.object).isRequired,
                    selectedStats: i.a.number.isRequired,
                    gatheringData: i.a.bool
                }
            }).call(this, r(3))
        },
        803: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(6),
                    a = r.n(n),
                    o = r(12),
                    i = r.n(o),
                    c = r(0),
                    s = r.n(c),
                    l = r(2),
                    u = r(1),
                    d = r(109),
                    g = r(4),
                    f = r.n(g),
                    p = r(53),
                    b = r(10),
                    m = r(15),
                    v = r(13),
                    h = r(11),
                    y = r(82),
                    O = r(475),
                    j = r(804),
                    S = r(805),
                    _ = r(807),
                    E = r(610),
                    k = r(554),
                    D = r(22),
                    w = r(122),
                    R = r(121),
                    A = r(7),
                    P = r(114),
                    C = r(39),
                    N = r(48);

                function T(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function x(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? T(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var I = f.a.useSelect,
                    L = f.a.useInViewSelect,
                    M = function SearchFunnelWidget(t) {
                        var r = t.Widget,
                            n = t.WidgetReportZero,
                            a = t.WidgetReportError,
                            o = Object(l.useState)(0),
                            c = i()(o, 2),
                            s = c[0],
                            g = c[1],
                            f = Object(C.a)("zeroDataStates"),
                            T = Object(N.e)(),
                            M = I((function(e) {
                                return e(D.a).isModuleConnected("analytics")
                            })),
                            W = I((function(e) {
                                return e(D.a).isModuleActive("analytics")
                            })),
                            F = I((function(e) {
                                return e(v.a).getDateRangeNumberOfDays()
                            })),
                            U = I((function(e) {
                                return e(m.c).getCurrentEntityURL()
                            })),
                            z = I((function(e) {
                                return e(v.a).getDateRangeDates({
                                    compare: !0,
                                    offsetDays: p.a
                                })
                            })),
                            H = z.endDate,
                            G = z.compareStartDate,
                            q = I((function(e) {
                                return e(v.a).getDateRangeDates({
                                    compare: !0,
                                    offsetDays: b.b
                                })
                            })),
                            B = L((function(e) {
                                return M ? e(b.f).getGoals() : {}
                            })),
                            Y = I((function(e) {
                                return !!M && !e(b.f).hasFinishedResolution("getGoals", [])
                            })),
                            V = I((function(e) {
                                return M ? e(b.f).getErrorForSelector("getGoals", []) : null
                            })),
                            K = {
                                startDate: G,
                                endDate: H,
                                dimensions: "date"
                            },
                            $ = x(x({}, q), {}, {
                                metrics: [{
                                    expression: "ga:goalCompletionsAll",
                                    alias: "Goal Completions"
                                }, "ga:bounceRate"]
                            }),
                            Z = x(x(x({}, q), $), {}, {
                                dimensions: "ga:date"
                            }),
                            Q = x(x({}, q), {}, {
                                metrics: [{
                                    expression: "ga:users",
                                    alias: "Total Users"
                                }],
                                dimensions: ["ga:date"],
                                dimensionFilters: {
                                    "ga:channelGrouping": "Organic Search"
                                }
                            });
                        Object(d.a)(U) && (K.url = U, $.url = U, Z.url = U, Q.url = U);
                        var X = L((function(e) {
                                return e(p.b).getReport(K)
                            })),
                            J = I((function(e) {
                                return e(p.b).getErrorForSelector("getReport", [K])
                            })),
                            ee = I((function(e) {
                                return !e(p.b).hasFinishedResolution("getReport", [K])
                            })),
                            te = I((function(e) {
                                return !!M && !e(b.f).hasFinishedResolution("getReport", [$])
                            })),
                            re = L((function(e) {
                                return M ? e(b.f).getReport($) : null
                            })),
                            ne = I((function(e) {
                                return !!M && e(b.f).getErrorForSelector("getReport", [$])
                            })),
                            ae = I((function(e) {
                                return !!M && !e(b.f).hasFinishedResolution("getReport", [Z])
                            })),
                            oe = L((function(e) {
                                return M ? e(b.f).getReport(Z) : null
                            })),
                            ie = I((function(e) {
                                return !!M && e(b.f).getErrorForSelector("getReport", [Z])
                            })),
                            ce = I((function(e) {
                                return !!M && !e(b.f).hasFinishedResolution("getReport", [Q])
                            })),
                            se = L((function(e) {
                                return M ? e(b.f).getReport(Q) : null
                            })),
                            le = I((function(e) {
                                return !!M && e(b.f).getErrorForSelector("getReport", [Q])
                            })),
                            ue = L((function(e) {
                                return !!M && e(b.f).isGatheringData()
                            })),
                            de = L((function(e) {
                                return e(p.b).isGatheringData()
                            })),
                            ge = function WidgetFooter() {
                                return e.createElement(j.a, {
                                    metrics: SearchFunnelWidget.metrics,
                                    selectedStats: s
                                })
                            };
                        if (J) return e.createElement(r, {
                            Header: O.a,
                            Footer: ge
                        }, e.createElement(a, {
                            moduleSlug: "search-console",
                            error: J
                        }));
                        if (ee || te || ae || ce || Y || void 0 === X || void 0 === re || void 0 === oe || void 0 === se || void 0 === B || void 0 === ue || void 0 === de) return e.createElement(r, {
                            Header: O.a,
                            Footer: ge,
                            noPadding: !0
                        }, e.createElement(y.a, {
                            width: "100%",
                            height: "190px",
                            padding: !0
                        }), e.createElement(y.a, {
                            width: "100%",
                            height: "270px",
                            padding: !0
                        }));
                        if (de && !f) {
                            var fe = {
                                smSize: 4,
                                mdSize: 4,
                                lgSize: 6
                            };
                            return e.createElement(r, {
                                Header: O.a,
                                Footer: ge
                            }, M && W && e.createElement(n, {
                                moduleSlug: "search-console"
                            }), (!M || !W) && e.createElement(A.l, null, e.createElement(A.a, fe, e.createElement(P.a, {
                                moduleSlug: "search-console"
                            })), e.createElement(A.a, fe, !W && e.createElement(w.a, {
                                moduleSlug: "analytics"
                            }), W && !M && e.createElement(R.a, {
                                moduleSlug: "analytics"
                            }))))
                        }
                        return e.createElement(r, {
                            noPadding: !0,
                            Header: O.a,
                            Footer: ge
                        }, e.createElement(S.a, {
                            analyticsData: re,
                            analyticsGoalsData: B,
                            analyticsVisitorsData: se,
                            searchConsoleData: X,
                            handleStatsSelection: g,
                            selectedStats: s,
                            dateRangeLength: F,
                            error: ne || ie || le || V,
                            WidgetReportError: a
                        }), (0 === s || 1 === s) && e.createElement(_.a, {
                            data: X,
                            dateRangeLength: F,
                            selectedStats: s,
                            metrics: SearchFunnelWidget.metrics,
                            gatheringData: de
                        }), !W && !M && f && N.b === T && e.createElement(A.b, null, e.createElement(A.l, null, e.createElement(A.a, null, e.createElement(k.a, null)))), 2 === s && e.createElement(E.a, {
                            data: se,
                            dateRangeLength: F,
                            selectedStats: 0,
                            metrics: SearchFunnelWidget.metrics,
                            dataLabels: [Object(u.__)("Unique Visitors", "google-site-kit")],
                            dataFormats: [function(e) {
                                return parseFloat(e).toLocaleString()
                            }],
                            statsColor: SearchFunnelWidget.metrics[s].color,
                            gatheringData: ue
                        }), (3 === s || 4 === s) && e.createElement(E.a, {
                            data: oe,
                            dateRangeLength: F,
                            selectedStats: s - 3,
                            metrics: SearchFunnelWidget.metrics,
                            dataLabels: [Object(u.__)("Goals", "google-site-kit"), Object(u.__)("Bounce Rate %", "google-site-kit")],
                            dataFormats: [function(e) {
                                return parseFloat(e).toLocaleString()
                            }, function(e) {
                                return Object(h.r)(e / 100, {
                                    style: "percent",
                                    signDisplay: "never",
                                    maximumFractionDigits: 2
                                })
                            }],
                            statsColor: SearchFunnelWidget.metrics[s].color,
                            gatheringData: ue
                        }))
                    };
                M.metrics = [{
                    id: "impressions",
                    color: "#4285f4",
                    label: Object(u.__)("Impressions", "google-site-kit"),
                    metric: "impressions",
                    service: "search-console"
                }, {
                    id: "clicks",
                    color: "#27bcd4",
                    label: Object(u.__)("Clicks", "google-site-kit"),
                    metric: "clicks",
                    service: "search-console"
                }, {
                    id: "users",
                    color: "#1b9688",
                    label: Object(u.__)("Users", "google-site-kit"),
                    service: "analytics"
                }, {
                    id: "goals",
                    color: "#673ab7",
                    label: Object(u.__)("Goals", "google-site-kit"),
                    service: "analytics"
                }, {
                    id: "bounce-rate",
                    color: "#673ab7",
                    label: Object(u.__)("Bounce Rate", "google-site-kit"),
                    service: "analytics"
                }], M.propTypes = {
                    Widget: s.a.elementType.isRequired,
                    WidgetReportZero: s.a.elementType.isRequired,
                    WidgetReportError: s.a.elementType.isRequired
                }, t.a = M
            }).call(this, r(3))
        },
        804: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(6),
                    a = r.n(n),
                    o = r(0),
                    i = r.n(o),
                    c = r(109),
                    s = r(1),
                    l = r(53),
                    u = r(13),
                    d = r(15),
                    g = r(141),
                    f = r(11),
                    p = r(10),
                    b = r(149),
                    m = r(96),
                    v = r(4);

                function h(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function y(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? h(Object(r), !0).forEach((function(t) {
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var O = r.n(v).a.useSelect,
                    j = function Footer(t) {
                        var r, n = t.metrics,
                            a = t.selectedStats,
                            o = O((function(e) {
                                return e(l.b).getPropertyID()
                            })),
                            i = O((function(e) {
                                return e(l.b).isDomainProperty()
                            })),
                            v = O((function(e) {
                                return Object(f.x)(e(d.c).getReferenceSiteURL())
                            })),
                            h = O((function(e) {
                                return e(d.c).getCurrentEntityURL()
                            })),
                            j = O((function(e) {
                                return e(u.a).getDateRangeDates({
                                    offsetDays: l.a
                                })
                            })),
                            S = y({
                                resource_id: o,
                                metrics: null === (r = n[a]) || void 0 === r ? void 0 : r.metric
                            }, Object(g.b)(j));
                        h ? S.page = "!".concat(h) : i && v && (S.page = "*".concat(v));
                        var _ = O((function(e) {
                                return e(l.b).getServiceReportURL(S)
                            })),
                            E = [];
                        Object(c.a)(h) && E.push("analytics.pagePath:".concat(Object(f.m)(h)));
                        var k = O((function(e) {
                                return e(u.a).getDateRangeDates({
                                    compare: !0,
                                    offsetDays: p.b
                                })
                            })),
                            D = O((function(e) {
                                return e(p.f).getServiceReportURL("conversions-goals-overview", y(y({}, Object(b.a)(k)), {}, {
                                    "_r.drilldown": E.join(",")
                                }))
                            })),
                            w = O((function(e) {
                                return e(p.f).getServiceReportURL("visitors-overview", y(y({}, Object(b.a)(k)), {}, {
                                    "_r.drilldown": E.join(",")
                                }))
                            })),
                            R = {
                                users: O((function(e) {
                                    return e(p.f).getServiceReportURL("acquisition-channels", y(y({}, Object(b.a)(k)), {}, {
                                        "_r.drilldown": [].concat(E, ["analytics.trafficChannel:Organic Search"]).join(",")
                                    }))
                                })),
                                goals: D,
                                "bounce-rate": w
                            },
                            A = null == n ? void 0 : n[a],
                            P = A.service,
                            C = A.id;
                        return "search-console" === P ? e.createElement(m.a, {
                            href: _,
                            name: Object(s._x)("Search Console", "Service name", "google-site-kit"),
                            external: !0
                        }) : e.createElement(m.a, {
                            href: R[C],
                            name: Object(s._x)("Analytics", "Service name", "google-site-kit"),
                            external: !0
                        })
                    };
                j.propTypes = {
                    metrics: i.a.arrayOf(i.a.object),
                    selectedStats: i.a.number.isRequired
                }, t.a = j
            }).call(this, r(3))
        },
        805: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(16),
                    a = r.n(n),
                    o = r(12),
                    i = r.n(o),
                    c = r(0),
                    s = r.n(c),
                    l = r(1),
                    u = r(2),
                    d = r(4),
                    g = r.n(d),
                    f = r(7),
                    p = r(141),
                    b = r(11),
                    m = r(22),
                    v = r(15),
                    h = r(10),
                    y = r(38),
                    O = r(53),
                    j = r(39),
                    S = r(95),
                    _ = r(121),
                    E = r(122),
                    k = r(554),
                    D = r(806),
                    w = r(83),
                    R = r(74),
                    A = r(55),
                    P = r(114),
                    C = r(48),
                    N = g.a.useSelect,
                    T = g.a.useInViewSelect;

                function x(e, t) {
                    var r, n, a, o, c, s, l, u, d, g, f, p, m = i()(e, 1),
                        v = m[0],
                        h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    return {
                        datapoint: (null == v || null === (r = v.data) || void 0 === r || null === (n = r.totals) || void 0 === n || null === (a = n[0]) || void 0 === a || null === (o = a.values) || void 0 === o ? void 0 : o[t]) / h,
                        change: Object(b.a)(null == v || null === (c = v.data) || void 0 === c || null === (s = c.totals) || void 0 === s || null === (l = s[1]) || void 0 === l || null === (u = l.values) || void 0 === u ? void 0 : u[t], null == v || null === (d = v.data) || void 0 === d || null === (g = d.totals) || void 0 === g || null === (f = g[0]) || void 0 === f || null === (p = f.values) || void 0 === p ? void 0 : p[t])
                    }
                }
                var I = function Overview(t) {
                    var r, n, o = t.analyticsData,
                        i = t.analyticsGoalsData,
                        c = t.analyticsVisitorsData,
                        s = t.searchConsoleData,
                        d = t.selectedStats,
                        g = t.handleStatsSelection,
                        b = t.dateRangeLength,
                        I = t.error,
                        L = t.WidgetReportError,
                        M = Object(S.c)(),
                        W = Object(j.a)("zeroDataStates"),
                        F = Object(C.e)(),
                        U = N((function(e) {
                            return e(m.a).isModuleConnected("analytics")
                        })),
                        z = N((function(e) {
                            return e(m.a).isModuleActive("analytics")
                        })),
                        H = z && U,
                        G = N((function(e) {
                            return e(h.f).getAdminReauthURL()
                        })),
                        q = N((function(e) {
                            return e(y.a).isNavigatingTo(G)
                        })),
                        B = T((function(e) {
                            return !!H && e(h.f).isGatheringData()
                        })),
                        Y = T((function(e) {
                            return e(O.b).isGatheringData()
                        })),
                        V = Object(p.a)(s, b),
                        K = V.totalClicks,
                        $ = V.totalImpressions,
                        Z = V.totalClicksChange,
                        Q = V.totalImpressionsChange,
                        X = null,
                        J = null,
                        ee = null,
                        te = null,
                        re = null,
                        ne = null;
                    if (z && Array.isArray(o) && Array.isArray(c)) {
                        var ae, oe, ie, ce, se, le, ue, de;
                        X = x(o, 0, 100).change, J = null == o || null === (ae = o[0]) || void 0 === ae || null === (oe = ae.data) || void 0 === oe || null === (ie = oe.totals) || void 0 === ie || null === (ce = ie[0]) || void 0 === ce ? void 0 : ce.values[0];
                        var ge = x(o, 1, 100);
                        ee = ge.datapoint, te = ge.change, re = null == c || null === (se = c[0]) || void 0 === se || null === (le = se.data) || void 0 === le || null === (ue = le.totals) || void 0 === ue || null === (de = ue[0]) || void 0 === de ? void 0 : de.values[0], ne = x(c, 0, 100).change
                    }
                    var fe = U && !B && !W && !I || U && W && !I,
                        pe = fe && M === S.b && !(null == i || null === (r = i.items) || void 0 === r ? void 0 : r.length),
                        be = {
                            smSize: 2,
                            mdSize: pe && W ? 4 : 2,
                            lgSize: 3
                        },
                        me = {
                            smSize: 4,
                            mdSize: 4,
                            lgSize: 6
                        },
                        ve = N((function(e) {
                            return e(v.c).getGoogleSupportURL({
                                path: "/analytics/answer/1032415",
                                hash: "create_or_edit_goals"
                            })
                        }));
                    return e.createElement(f.b, null, e.createElement(f.l, null, e.createElement(f.a, be, e.createElement(R.a, {
                        stat: 0,
                        className: "googlesitekit-data-block--impressions googlesitekit-data-block--button-1",
                        title: Object(l.__)("Total Impressions", "google-site-kit"),
                        datapoint: $,
                        change: Q,
                        changeDataUnit: "%",
                        context: "button",
                        selected: 0 === d,
                        handleStatSelection: g,
                        gatheringData: Y
                    })), e.createElement(f.a, be, e.createElement(R.a, {
                        stat: 1,
                        className: "googlesitekit-data-block--clicks googlesitekit-data-block--button-2",
                        title: Object(l.__)("Total Clicks", "google-site-kit"),
                        datapoint: K,
                        change: Z,
                        changeDataUnit: "%",
                        context: "button",
                        selected: 1 === d,
                        handleStatSelection: g,
                        gatheringData: Y
                    })), q && e.createElement(f.a, a()({}, me, {
                        className: "googlesitekit-data-block__loading"
                    }), e.createElement(A.a, null)), (!U || !z) && !q && e.createElement(f.a, me, !z && W && C.b !== F && e.createElement(k.a, null), !z && !W && e.createElement(E.a, {
                        moduleSlug: "analytics"
                    }), z && !U && e.createElement(_.a, {
                        moduleSlug: "analytics"
                    })), H && I && e.createElement(f.a, me, e.createElement(L, {
                        moduleSlug: "analytics",
                        error: I
                    })), B && !I && !W && e.createElement(f.a, me, e.createElement(P.a, {
                        moduleSlug: "analytics"
                    })), fe && e.createElement(u.Fragment, null, e.createElement(f.a, be, e.createElement(R.a, {
                        stat: 2,
                        className: "googlesitekit-data-block--visitors googlesitekit-data-block--button-3",
                        title: Object(l.__)("Unique Visitors from Search", "google-site-kit"),
                        datapoint: re,
                        change: ne,
                        changeDataUnit: "%",
                        context: "button",
                        selected: 2 === d,
                        handleStatSelection: g,
                        gatheringData: B
                    })), e.createElement(f.a, be, pe && W && e.createElement(D.a, null), pe && !W && e.createElement(w.a, {
                        title: Object(l.__)("Use goals to measure success", "google-site-kit"),
                        description: Object(l.__)("Goals measure how well your site or app fulfills your target objectives", "google-site-kit"),
                        ctaLink: ve,
                        ctaLabel: Object(l.__)("Create a new goal", "google-site-kit"),
                        ctaLinkExternal: !0
                    }), M === S.b && (null == i || null === (n = i.items) || void 0 === n ? void 0 : n.length) > 0 && e.createElement(R.a, {
                        stat: 3,
                        className: "googlesitekit-data-block--goals googlesitekit-data-block--button-4",
                        title: Object(l.__)("Goals", "google-site-kit"),
                        datapoint: J,
                        change: X,
                        changeDataUnit: "%",
                        context: "button",
                        selected: 3 === d,
                        handleStatSelection: g,
                        gatheringData: B
                    }), M === S.a && e.createElement(R.a, {
                        stat: 4,
                        className: "googlesitekit-data-block--bounce googlesitekit-data-block--button-4",
                        title: Object(l.__)("Bounce Rate", "google-site-kit"),
                        datapoint: ee,
                        datapointUnit: "%",
                        change: te,
                        changeDataUnit: "%",
                        context: "button",
                        selected: 4 === d,
                        handleStatSelection: g,
                        gatheringData: B,
                        invertChangeColor: !0
                    })))))
                };
                I.propTypes = {
                    analyticsData: s.a.oneOfType([s.a.arrayOf(s.a.object), s.a.object]),
                    analyticsGoalsData: s.a.oneOfType([s.a.arrayOf(s.a.object), s.a.object]),
                    analyticsVisitorsData: s.a.oneOfType([s.a.arrayOf(s.a.object), s.a.object]),
                    searchConsoleData: s.a.arrayOf(s.a.object),
                    selectedStats: s.a.number.isRequired,
                    handleStatsSelection: s.a.func.isRequired,
                    error: s.a.object,
                    WidgetReportError: s.a.elementType.isRequired
                }, t.a = I
            }).call(this, r(3))
        },
        806: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return CreateGoalCTA
                }));
                var n = r(1),
                    a = r(4),
                    o = r.n(a),
                    i = r(15),
                    c = r(19),
                    s = r(307),
                    l = r(555),
                    u = o.a.useSelect;

                function CreateGoalCTA() {
                    var t = u((function(e) {
                        return e(i.c).getGoogleSupportURL({
                            path: "/analytics/answer/1032415",
                            hash: "create_or_edit_goals"
                        })
                    }));
                    return e.createElement("div", {
                        className: "googlesitekit-analytics-cta"
                    }, e.createElement("div", {
                        className: "googlesitekit-analytics-cta__preview-graphs"
                    }, e.createElement(s.a, {
                        title: Object(n.__)("Goals completed", "google-site-kit"),
                        GraphSVG: l.a
                    })), e.createElement("div", {
                        className: "googlesitekit-analytics-cta__details"
                    }, e.createElement("p", {
                        className: "googlesitekit-analytics-cta--description"
                    }, Object(n.__)("Set up goals to track how well your site fulfills your business objectives.", "google-site-kit")), e.createElement(c.a, {
                        href: t,
                        target: "_blank"
                    }, Object(n.__)("Create a new goal", "google-site-kit"))))
                }
            }).call(this, r(3))
        },
        807: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return SearchConsoleStats
                }));
                var n = r(6),
                    a = r.n(n),
                    o = r(12),
                    i = r.n(o),
                    c = r(0),
                    s = r.n(c),
                    l = r(1),
                    u = r(141),
                    d = r(7),
                    g = r(140),
                    f = r(202);

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
                            a()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function SearchConsoleStats(t) {
                    var r = t.data,
                        n = t.metrics,
                        a = t.selectedStats,
                        o = t.dateRangeLength,
                        c = t.gatheringData,
                        s = Object(g.a)(r, {
                            dateRangeLength: o
                        }),
                        l = s.compareRange,
                        p = s.currentRange,
                        m = Object(u.c)(p, l, n[a].label, n[a].metric, o),
                        v = m.slice(1).map((function(e) {
                            return i()(e, 1)[0]
                        })),
                        h = b(b({}, SearchConsoleStats.chartOptions), {}, {
                            hAxis: {
                                format: "M/d/yy",
                                gridlines: {
                                    color: "#fff"
                                },
                                textStyle: {
                                    color: "#616161",
                                    fontSize: 12
                                },
                                ticks: v
                            },
                            series: {
                                0: {
                                    color: n[a].color,
                                    targetAxisIndex: 0
                                },
                                1: {
                                    color: n[a].color,
                                    targetAxisIndex: 0,
                                    lineDashStyle: [3, 3],
                                    lineWidth: 1
                                }
                            }
                        }),
                        y = !m.slice(1).some((function(e) {
                            return e[2] > 0 || e[3] > 0
                        }));
                    return h.vAxis.viewWindow.max = y ? 1 : void 0, e.createElement(d.b, {
                        className: "googlesitekit-search-console-site-stats"
                    }, e.createElement(d.l, null, e.createElement(d.a, {
                        size: 12
                    }, e.createElement(f.a, {
                        chartType: "LineChart",
                        data: m,
                        loadingHeight: "270px",
                        loadingWidth: "100%",
                        options: h,
                        gatheringData: c
                    }))))
                }
                SearchConsoleStats.propTypes = {
                    data: s.a.arrayOf(s.a.object).isRequired,
                    dateRangeLength: s.a.number.isRequired,
                    metrics: s.a.arrayOf(s.a.object).isRequired,
                    selectedStats: s.a.number.isRequired
                }, SearchConsoleStats.chartOptions = {
                    chart: {
                        title: Object(l.__)("Search Traffic Summary", "google-site-kit")
                    },
                    curveType: "function",
                    height: 270,
                    width: "100%",
                    chartArea: {
                        height: "80%",
                        width: "100%",
                        left: 60
                    },
                    legend: {
                        position: "top",
                        textStyle: {
                            color: "#616161",
                            fontSize: 12
                        }
                    },
                    vAxis: {
                        direction: 1,
                        gridlines: {
                            color: "#eee"
                        },
                        minorGridlines: {
                            color: "#eee"
                        },
                        textStyle: {
                            color: "#616161",
                            fontSize: 12
                        },
                        titleTextStyle: {
                            color: "#616161",
                            fontSize: 12,
                            italic: !1
                        },
                        viewWindow: {
                            min: 0
                        }
                    },
                    tooltip: {
                        isHtml: !0,
                        trigger: "both"
                    },
                    focusTarget: "category",
                    crosshair: {
                        color: "gray",
                        opacity: .1,
                        orientation: "vertical",
                        trigger: "both"
                    }
                }
            }).call(this, r(3))
        },
        81: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    o = r(109),
                    i = r(1),
                    c = r(11);

                function ErrorText(t) {
                    var r = t.message,
                        n = t.reconnectURL;
                    if (!r) return null;
                    var a = Object(i.sprintf)(
                        /* translators: %s: Error message */
                        Object(i.__)("Error: %s", "google-site-kit"), r);
                    n && Object(o.a)(n) && (a = a + " " + Object(i.sprintf)(
                        /* translators: %s: Reconnect URL */
                        Object(i.__)('To fix this, <a href="%s">redo the plugin setup</a>.', "google-site-kit"), n));
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
        82: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    o = r(8),
                    i = r.n(o),
                    c = r(48);

                function PreviewBlock(t) {
                    var r = t.className,
                        n = t.width,
                        a = t.height,
                        o = t.shape,
                        s = t.padding,
                        l = t.smallWidth,
                        u = t.smallHeight,
                        d = t.tabletWidth,
                        g = t.tabletHeight,
                        f = t.desktopWidth,
                        p = t.desktopHeight,
                        b = Object(c.e)(),
                        m = n,
                        v = a;
                    return c.b === b && l && u && (m = l, v = u), c.c === b && d && g && (m = d, v = g), (c.d === b || c.a === b) && f && p && (m = f, v = p), e.createElement("div", {
                        className: i()("googlesitekit-preview-block", r, {
                            "googlesitekit-preview-block--padding": s
                        }),
                        style: {
                            width: m,
                            height: v
                        }
                    }, e.createElement("div", {
                        className: i()("googlesitekit-preview-block__wrapper", {
                            "googlesitekit-preview-block__wrapper--circle": "circular" === o
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
            }).call(this, r(3))
        },
        83: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    o = r(8),
                    i = r.n(o),
                    c = r(21),
                    s = function CTA(t) {
                        var r = t.title,
                            n = t.description,
                            a = t.ctaLink,
                            o = t.ctaLabel,
                            s = t.ctaLinkExternal,
                            l = t.error,
                            u = t.onClick,
                            d = t["aria-label"];
                        return e.createElement("div", {
                            className: i()("googlesitekit-cta", {
                                "googlesitekit-cta--error": l
                            })
                        }, r && e.createElement("h3", {
                            className: "googlesitekit-cta__title"
                        }, r), n && "string" == typeof n && e.createElement("p", {
                            className: "googlesitekit-cta__description"
                        }, n), n && "string" != typeof n && e.createElement("div", {
                            className: "googlesitekit-cta__description"
                        }, n), o && e.createElement(c.a, {
                            href: a,
                            onClick: u,
                            inverse: !l,
                            caps: !0,
                            arrow: !0,
                            "aria-label": d,
                            external: s,
                            hideExternalIndicator: s
                        }, o))
                    };
                s.propTypes = {
                    title: a.a.string.isRequired,
                    description: a.a.oneOfType([a.a.string, a.a.node]),
                    ctaLink: a.a.string,
                    ctaLinkExternal: a.a.bool,
                    ctaLabel: a.a.string,
                    "aria-label": a.a.string,
                    error: a.a.bool,
                    onClick: a.a.func
                }, s.defaultProps = {
                    title: "",
                    description: "",
                    ctaLink: "",
                    ctaLabel: "",
                    error: !1,
                    onClick: function() {}
                }, t.a = s
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
                    return i
                })), r.d(t, "a", (function() {
                    return c
                }));
                var n = r(194),
                    a = r(62),
                    o = function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Number.isNaN(Number(t))) return "";
                        var o = r.invertColor,
                            i = void 0 !== o && o;
                        return Object(n.a)(e.createElement(a.a, {
                            direction: t > 0 ? "up" : "down",
                            invertColor: i
                        }))
                    },
                    i = function(e) {
                        var t, r, n, a, o, i, c, s, l, u, d, g, f, p, b;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (r = t.data) || void 0 === r || null === (n = r.rows) || void 0 === n ? void 0 : n.length) || (null == e || null === (a = e[0]) || void 0 === a || null === (o = a.data) || void 0 === o || null === (i = o.rows) || void 0 === i || null === (c = i[0]) || void 0 === c || null === (s = c.metrics) || void 0 === s || null === (l = s[0]) || void 0 === l || null === (u = l.values) || void 0 === u ? void 0 : u[0]) === (null == e || null === (d = e[0]) || void 0 === d || null === (g = d.data) || void 0 === g || null === (f = g.totals) || void 0 === f || null === (p = f[0]) || void 0 === p || null === (b = p.values) || void 0 === b ? void 0 : b[0])
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
                    o = r(87),
                    i = r(88);

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
                    var c = Object(o.a)(a, r);
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
                        trackEvent: Object(i.a)(a, r, c, n)
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
                    a = r(28);

                function o(t, r) {
                    var o, i = Object(n.a)(r);
                    return function() {
                        var r = e.document;
                        if (void 0 === o && (o = !!r.querySelector("script[".concat(a.b, "]"))), !o) {
                            var n = r.createElement("script");
                            n.setAttribute(a.b, ""), n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID, "&l=").concat(a.a), r.head.appendChild(n), i("js", new Date), i("config", t.trackingID, {
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
                    a = r.n(n),
                    o = r(6),
                    i = r.n(o),
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
                            i()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function f(t, r, n, o) {
                    var i = Object(l.a)(r);
                    return function() {
                        var r = s()(a.a.mark((function r(c, s, l, d) {
                            var f, p, b, m, v, h, y, O, j, S;
                            return a.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (m = t.activeModules, v = t.referenceSiteURL, h = t.trackingEnabled, y = t.trackingID, O = t.userIDHash, h) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return n(), j = null !== (f = null === (p = e._googlesitekitUserData) || void 0 === p || null === (b = p.user) || void 0 === b ? void 0 : b.roles) && void 0 !== f ? f : [], S = {
                                            send_to: y,
                                            event_category: c,
                                            event_label: l,
                                            value: d,
                                            dimension1: v,
                                            dimension2: j.join(","),
                                            dimension3: O,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(u.a).join(","),
                                            dimension6: m.join(",")
                                        }, r.abrupt("return", new Promise((function(e) {
                                            var t, r, n = setTimeout((function() {
                                                    o.console.warn('Tracking event "'.concat(s, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                a = function() {
                                                    clearTimeout(n), e()
                                                };
                                            i("event", s, g(g({}, S), {}, {
                                                event_callback: a
                                            })), (null === (t = o._gaUserPrefs) || void 0 === t || null === (r = t.ioo) || void 0 === r ? void 0 : r.call(t)) && a()
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
        89: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "c", (function() {
                return i
            })), r.d(t, "b", (function() {
                return c
            }));
            r(57);
            var n = "missing_required_scopes",
                a = "insufficientPermissions",
                o = "forbidden";

            function i(e) {
                return (null == e ? void 0 : e.code) === n
            }

            function c(e) {
                var t;
                return [a, o].includes(null == e || null === (t = e.data) || void 0 === t ? void 0 : t.reason)
            }
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
            var o = r(107);
            r.d(t, "b", (function() {
                return o.a
            }))
        },
        94: function(e, t, r) {
            "use strict";
            var n = r(2),
                a = r(30),
                o = Object(n.createContext)(a.a);
            t.a = o
        },
        95: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return i
            })), r.d(t, "a", (function() {
                return c
            })), r.d(t, "c", (function() {
                return s
            }));
            var n = r(2),
                a = r(24),
                o = r(20),
                i = a.g,
                c = a.l;

            function s() {
                var e = Object(n.useContext)(o.b);
                return e === a.g || e === a.i ? i : e === a.l || e === a.m ? c : null
            }
        },
        96: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    a = r.n(n),
                    o = r(8),
                    i = r.n(o),
                    c = r(130),
                    s = r(1),
                    l = r(21);

                function SourceLink(t) {
                    var r = t.name,
                        n = t.href,
                        a = t.className,
                        o = t.external;
                    return e.createElement("div", {
                        className: i()("googlesitekit-source-link", a)
                    }, Object(c.a)(Object(s.sprintf)(
                        /* translators: %s: source link */
                        Object(s.__)("Source: %s", "google-site-kit"), "<a>".concat(r, "</a>")), {
                        a: e.createElement(l.a, {
                            key: "link",
                            href: n,
                            external: o,
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
            }).call(this, r(3))
        }
    },
    [
        [1086, 1, 0]
    ]
]);
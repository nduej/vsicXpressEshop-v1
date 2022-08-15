(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [22], {
        1: function(e, t) {
            e.exports = googlesitekit.i18n
        },
        10: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "h", (function() {
                return a
            })), n.d(t, "g", (function() {
                return o
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "k", (function() {
                return u
            })), n.d(t, "c", (function() {
                return l
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
                return b
            })), n.d(t, "n", (function() {
                return v
            })), n.d(t, "o", (function() {
                return h
            })), n.d(t, "l", (function() {
                return y
            })), n.d(t, "m", (function() {
                return O
            })), n.d(t, "j", (function() {
                return _
            })), n.d(t, "i", (function() {
                return S
            }));
            var r = "modules/analytics",
                i = "account_create",
                a = "property_create",
                o = "profile_create",
                c = "analyticsAccountCreate",
                s = "analyticsSetup",
                u = "https://www.googleapis.com/auth/analytics.provision",
                l = "https://www.googleapis.com/auth/analytics.edit",
                d = 1,
                f = "dashboardAllTrafficWidgetDimensionName",
                g = "dashboardAllTrafficWidgetDimensionColor",
                p = "dashboardAllTrafficWidgetDimensionValue",
                m = "dashboardAllTrafficWidgetActiveRowIndex",
                b = "dashboardAllTrafficWidgetLoaded",
                v = "legacy",
                h = "ua",
                y = "ga4",
                O = "ga4-transitional",
                _ = "ua",
                S = "ga4"
        },
        105: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Cell
                }));
                var r = n(16),
                    i = n.n(r),
                    a = n(6),
                    o = n.n(a),
                    c = n(17),
                    s = n.n(c),
                    u = n(0),
                    l = n.n(u),
                    d = n(8),
                    f = n.n(d);

                function Cell(t) {
                    var n, r = t.className,
                        a = t.alignTop,
                        c = t.alignMiddle,
                        u = t.alignBottom,
                        l = t.alignRight,
                        d = t.alignLeft,
                        g = t.smAlignRight,
                        p = t.mdAlignRight,
                        m = t.lgAlignRight,
                        b = t.smSize,
                        v = t.smStart,
                        h = t.smOrder,
                        y = t.mdSize,
                        O = t.mdStart,
                        _ = t.mdOrder,
                        S = t.lgSize,
                        k = t.lgStart,
                        j = t.lgOrder,
                        E = t.size,
                        w = t.children,
                        N = s()(t, ["className", "alignTop", "alignMiddle", "alignBottom", "alignRight", "alignLeft", "smAlignRight", "mdAlignRight", "lgAlignRight", "smSize", "smStart", "smOrder", "mdSize", "mdStart", "mdOrder", "lgSize", "lgStart", "lgOrder", "size", "children"]);
                    return e.createElement("div", i()({}, N, {
                        className: f()(r, "mdc-layout-grid__cell", (n = {
                            "mdc-layout-grid__cell--align-top": a,
                            "mdc-layout-grid__cell--align-middle": c,
                            "mdc-layout-grid__cell--align-bottom": u,
                            "mdc-layout-grid__cell--align-right": l,
                            "mdc-layout-grid__cell--align-left": d,
                            "mdc-layout-grid__cell--align-right-phone": g,
                            "mdc-layout-grid__cell--align-right-tablet": p,
                            "mdc-layout-grid__cell--align-right-desktop": m
                        }, o()(n, "mdc-layout-grid__cell--span-".concat(E), 12 >= E && E > 0), o()(n, "mdc-layout-grid__cell--span-".concat(S, "-desktop"), 12 >= S && S > 0), o()(n, "mdc-layout-grid__cell--start-".concat(k, "-desktop"), 12 >= k && k > 0), o()(n, "mdc-layout-grid__cell--order-".concat(j, "-desktop"), 12 >= j && j > 0), o()(n, "mdc-layout-grid__cell--span-".concat(y, "-tablet"), 8 >= y && y > 0), o()(n, "mdc-layout-grid__cell--start-".concat(O, "-tablet"), 8 >= O && O > 0), o()(n, "mdc-layout-grid__cell--order-".concat(_, "-tablet"), 8 >= _ && _ > 0), o()(n, "mdc-layout-grid__cell--span-".concat(b, "-phone"), 4 >= b && b > 0), o()(n, "mdc-layout-grid__cell--start-".concat(v, "-phone"), 4 >= v && v > 0), o()(n, "mdc-layout-grid__cell--order-".concat(h, "-phone"), 4 >= h && h > 0), n))
                    }), w)
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
            }).call(this, n(3))
        },
        106: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Row
                }));
                var r = n(16),
                    i = n.n(r),
                    a = n(17),
                    o = n.n(a),
                    c = n(0),
                    s = n.n(c),
                    u = n(8),
                    l = n.n(u);

                function Row(t) {
                    var n = t.className,
                        r = t.children,
                        a = o()(t, ["className", "children"]);
                    return e.createElement("div", i()({
                        className: l()("mdc-layout-grid__inner", n)
                    }, a), r)
                }
                Row.propTypes = {
                    className: s.a.string,
                    children: s.a.node
                }, Row.defaultProps = {
                    className: ""
                }
            }).call(this, n(3))
        },
        107: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    i = n.n(r),
                    a = n(17),
                    o = n.n(a),
                    c = n(0),
                    s = n.n(c),
                    u = n(8),
                    l = n.n(u),
                    d = n(2),
                    f = Object(d.forwardRef)((function(t, n) {
                        var r = t.alignLeft,
                            a = t.fill,
                            c = t.className,
                            s = t.children,
                            u = o()(t, ["alignLeft", "fill", "className", "children"]);
                        return e.createElement("div", i()({
                            className: l()("mdc-layout-grid", c, {
                                "mdc-layout-grid--align-left": r,
                                "mdc-layout-grid--fill": a
                            })
                        }, u, {
                            ref: n
                        }), s)
                    }));
                f.propTypes = {
                    alignLeft: s.a.bool,
                    fill: s.a.bool,
                    className: s.a.string,
                    children: s.a.node
                }, f.defaultProps = {
                    className: ""
                }, t.a = f
            }).call(this, n(3))
        },
        1087: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                i = n.n(r),
                a = n(136),
                o = n.n(a),
                c = n(1),
                s = (n(528), n(691)),
                u = n(692),
                l = (n(529), n(693)),
                d = n(552),
                f = n(153),
                g = n(6),
                p = n.n(g),
                m = n(17),
                b = n.n(m),
                v = n(9),
                h = n.n(v),
                y = n(157),
                O = n(73),
                _ = n(317);

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        p()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j, E, w, N, A, D, P, T, x = o.a.createModuleStore("optimize", {
                storeName: f.a,
                settingSlugs: ["ampExperimentJSON", "optimizeID", "ownerID", "placeAntiFlickerSnippet"],
                validateCanSubmitChanges: function(e) {
                    var t = Object(O.e)(e)(f.a),
                        n = t.getOptimizeID,
                        r = t.getAMPExperimentJSON,
                        i = t.haveSettingsChanged,
                        a = t.isDoingSubmitChanges;
                    h()(!a(), y.a), h()(i(), y.b);
                    var o = r();
                    h()(Object(_.a)(o), "ampExperimentJSON must be valid JSON if set");
                    var c = n();
                    h()("" === c || Object(_.b)(c), "a valid optimizeID is required")
                }
            });
            E = (j = x).actions, w = j.selectors, N = b()(j, ["actions", "selectors"]), A = E.setAmpExperimentJSON, D = b()(E, ["setAmpExperimentJSON"]), P = w.getAmpExperimentJSON, T = b()(w, ["getAmpExperimentJSON"]);
            var C = x = k(k({}, N), {}, {
                    actions: k(k({}, D), {}, {
                        setAMPExperimentJSON: A
                    }),
                    selectors: k(k({}, T), {}, {
                        getAMPExperimentJSON: P
                    })
                }),
                I = {
                    selectors: {
                        getSetupSuccessContent: function() {
                            return {
                                description: Object(c.__)("To set up experiments and see the results, go to ", "google-site-kit"),
                                learnMore: {
                                    label: Object(c._x)("Optimize", "Service name", "google-site-kit"),
                                    url: "https://optimize.withgoogle.com/"
                                }
                            }
                        }
                    }
                },
                L = n(287),
                R = n(13);

            function z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(n), !0).forEach((function(t) {
                        p()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var U = {
                    selectors: {
                        getServiceURL: (0, i.a.createRegistrySelector)((function(e) {
                            return function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = n.path,
                                    i = n.query,
                                    a = e(R.a).getEmail();
                                if (void 0 !== a) {
                                    var o = "https://optimize.google.com/optimize/home/",
                                        c = i ? M(M({}, i), {}, {
                                            authuser: a
                                        }) : {
                                            authuser: a
                                        },
                                        s = Object(L.a)(o, c);
                                    if (r) {
                                        var u = "/".concat(r.replace(/^\//, ""));
                                        return "".concat(s, "#").concat(u)
                                    }
                                    return s
                                }
                            }
                        }))
                    }
                },
                F = i.a.combineStores(C, I, U);
            i.a.registerStore(f.a, F), o.a.registerModule("optimize", {
                storeName: f.a,
                SettingsEditComponent: u.a,
                SettingsViewComponent: l.a,
                SetupComponent: s.a,
                Icon: d.a,
                features: [Object(c.__)("A/B or multivariate testing", "google-site-kit"), Object(c.__)("Improvement tracking", "google-site-kit"), Object(c.__)("Probability and confidence calculations", "google-site-kit")]
            })
        },
        11: function(e, t, n) {
            "use strict";
            n.d(t, "w", (function() {
                return c.b
            })), n.d(t, "t", (function() {
                return s.a
            })), n.d(t, "x", (function() {
                return s.b
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
                return b.a
            })), n.d(t, "p", (function() {
                return O
            })), n.d(t, "d", (function() {
                return _
            })), n.d(t, "g", (function() {
                return S.c
            })), n.d(t, "u", (function() {
                return S.i
            })), n.d(t, "h", (function() {
                return k.b
            })), n.d(t, "n", (function() {
                return k.c
            })), n.d(t, "b", (function() {
                return k.a
            })), n.d(t, "m", (function() {
                return j.b
            })), n.d(t, "i", (function() {
                return j.a
            })), n.d(t, "q", (function() {
                return j.d
            })), n.d(t, "l", (function() {
                return E
            })), n.d(t, "a", (function() {
                return w
            })), n.d(t, "y", (function() {
                return N
            })), n.d(t, "f", (function() {
                return A
            }));
            var r = n(117),
                i = n.n(r),
                a = n(113),
                o = n.n(a),
                c = n(31),
                s = n(63),
                u = n(29),
                l = n.n(u),
                d = n(78),
                f = n.n(d),
                g = function(e) {
                    return f()(JSON.stringify(function e(t) {
                        var n = {};
                        return Object.keys(t).sort().forEach((function(r) {
                            var i = t[r];
                            i && "object" === l()(i) && !Array.isArray(i) && (i = e(i)), n[r] = i
                        })), n
                    }(e)))
                };
            var p = n(80),
                m = (n(84), n(72)),
                b = n(64);

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
                for (var t = e, n = 0, r = [v, h, y]; n < r.length; n++) {
                    t = (0, r[n])(t)
                }
                return t
            }
            var _ = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                S = n(59),
                k = n(85),
                j = n(50),
                E = function(e) {
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
                w = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var n = (t - e) / e;
                    return isNaN(n) || !i()(n) ? null : n
                },
                N = function(e) {
                    try {
                        return JSON.parse(e) && !!e
                    } catch (e) {
                        return !1
                    }
                },
                A = function(e) {
                    if (!e) return "";
                    var t = e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(t)
                    })).replace(/(\\)/g, "");
                    return o()(t)
                }
        },
        112: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return StoreErrorNotices
                }));
                var r = n(6),
                    i = n.n(r),
                    a = n(0),
                    o = n.n(a),
                    c = n(4),
                    s = n.n(c),
                    u = n(191),
                    l = n(22),
                    d = n(89),
                    f = n(143);

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
                            i()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var m = s.a.useSelect;

                function StoreErrorNotices(t) {
                    var n = t.moduleSlug,
                        r = t.storeName,
                        i = t.shouldDisplayError,
                        a = m((function(e) {
                            return e(r).getErrors()
                        })),
                        o = m((function(e) {
                            return e(l.a).getModule(n)
                        })),
                        c = [];
                    return a.filter((function(e) {
                        return !(!(null == e ? void 0 : e.message) || c.includes(e.message)) && (c.push(e.message), !0)
                    })).map((function(e) {
                        return Object(d.b)(e) && (e = p(p({}, e), {}, {
                            message: Object(f.a)(e.message, o)
                        })), e
                    })).map((function(t, n) {
                        return e.createElement(u.a, {
                            key: n,
                            error: t,
                            shouldDisplayError: i
                        })
                    }))
                }
                StoreErrorNotices.propTypes = {
                    storeName: o.a.string.isRequired,
                    shouldDisplayError: o.a.func,
                    moduleSlug: o.a.string
                }
            }).call(this, n(3))
        },
        129: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    i = n.n(r),
                    a = n(8),
                    o = n.n(a),
                    c = n(131),
                    s = n(2),
                    u = n(68),
                    l = n(7),
                    d = function Switch(t) {
                        var n = t.onClick,
                            r = t.label,
                            i = t.checked,
                            a = t.disabled,
                            d = t.hideLabel,
                            f = Object(c.a)(Switch),
                            g = Object(s.useCallback)((function(e) {
                                null !== e && l.j.attachTo(e)
                            }), []),
                            p = Object(s.useCallback)((function(e) {
                                "function" == typeof n && u.c === e.keyCode && n(e)
                            }), [n]),
                            m = "googlesitekit-switch-".concat(f);
                        return e.createElement(s.Fragment, null, e.createElement("div", {
                            "aria-checked": i ? "true" : "false",
                            className: o()("mdc-switch", {
                                "mdc-switch--checked": i,
                                "mdc-switch--disabled": a
                            }),
                            onClick: n,
                            onKeyDown: p,
                            role: "switch",
                            ref: g,
                            tabIndex: 0
                        }, e.createElement("div", {
                            className: "mdc-switch__track"
                        }, " "), e.createElement("div", {
                            className: "mdc-switch__thumb-underlay"
                        }, e.createElement("div", {
                            className: "mdc-switch__thumb"
                        }, e.createElement("input", {
                            type: "checkbox",
                            id: m,
                            className: "mdc-switch__native-control",
                            role: "switch",
                            checked: i,
                            disabled: a,
                            readOnly: !0
                        })))), e.createElement("label", {
                            className: o()({
                                "screen-reader-only": d
                            }),
                            htmlFor: m
                        }, r))
                    };
                d.propTypes = {
                    id: i.a.string,
                    onClick: i.a.func,
                    label: i.a.node.isRequired,
                    checked: i.a.bool,
                    disabled: i.a.bool,
                    hideLabel: i.a.bool
                }, d.defaultProps = {
                    checked: !1,
                    disabled: !1,
                    hideLabel: !0
                }, t.a = d
            }).call(this, n(3))
        },
        13: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "e", (function() {
                return a
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return s
            }));
            var r = "core/user",
                i = "connected_url_mismatch",
                a = "googlesitekit_setup",
                o = "googlesitekit_view_dashboard",
                c = "googlesitekit_manage_options",
                s = "googlesitekit_read_shared_module_data"
        },
        136: function(e, t) {
            e.exports = googlesitekit.modules
        },
        143: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(1);

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t || {},
                    i = n.slug,
                    a = void 0 === i ? "" : i,
                    o = n.name,
                    c = void 0 === o ? "" : o,
                    s = n.owner,
                    u = void 0 === s ? {} : s;
                if (!a || !c) return e;
                var l = "",
                    d = "";
                return "analytics" === a ? e.match(/account/i) ? l = Object(r.__)("Your Google account does not have sufficient permissions for this Analytics account, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/property/i) ? l = Object(r.__)("Your Google account does not have sufficient permissions for this Analytics property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/view/i) && (l = Object(r.__)("Your Google account does not have sufficient permissions for this Analytics view, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")) : "search-console" === a && (l = Object(r.__)("Your Google account does not have sufficient permissions for this Search Console property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")), l || (l = Object(r.sprintf)(
                    /* translators: %s: module name */
                    Object(r.__)("Your Google account does not have sufficient permissions to access %s data, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit"), c)), u && u.login && (d = Object(r.sprintf)(
                    /* translators: %s: owner name */
                    Object(r.__)('This service was originally connected by the administrator "%s" — you can contact them for more information.', "google-site-kit"), u.login)), d || (d = Object(r.__)("This service was originally connected by an administrator — you can contact them for more information.", "google-site-kit")), "".concat(l, " ").concat(d)
            }
        },
        15: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return a
            }));
            var r = "core/site",
                i = "primary",
                a = "secondary"
        },
        153: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = "modules/optimize"
        },
        157: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            })), n.d(t, "b", (function() {
                return D
            })), n.d(t, "c", (function() {
                return P
            })), n.d(t, "f", (function() {
                return T
            })), n.d(t, "e", (function() {
                return x
            })), n.d(t, "d", (function() {
                return C
            }));
            var r = n(14),
                i = n.n(r),
                a = n(5),
                o = n.n(a),
                c = n(6),
                s = n.n(c),
                u = n(9),
                l = n.n(u),
                d = n(57),
                f = n.n(d),
                g = n(158),
                p = n.n(g),
                m = n(33),
                b = n.n(m),
                v = n(4),
                h = n.n(v),
                y = n(73),
                O = n(76),
                _ = n(45),
                S = n(54);

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

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach((function(t) {
                        s()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var E = h.a.createRegistrySelector,
                w = S.a.clearError,
                N = S.a.receiveError,
                A = "cannot submit changes while submitting changes",
                D = "cannot submit changes if settings have not changed",
                P = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = r.storeName,
                        a = void 0 === i ? void 0 : i,
                        c = r.settingSlugs,
                        u = void 0 === c ? [] : c;
                    l()(e, "type is required."), l()(t, "identifier is required."), l()(n, "datapoint is required.");
                    var d = a || "".concat(e, "/").concat(t),
                        g = {
                            settings: void 0,
                            savedSettings: void 0
                        },
                        m = Object(_.a)({
                            baseName: "getSettings",
                            controlCallback: function() {
                                return b.a.get(e, t, n, {}, {
                                    useCache: !1
                                })
                            },
                            reducerCallback: function(e, t) {
                                return j(j({}, e), {}, {
                                    savedSettings: j({}, t),
                                    settings: j(j({}, t), e.settings || {})
                                })
                            }
                        }),
                        v = Object(_.a)({
                            baseName: "saveSettings",
                            controlCallback: function(r) {
                                var i = r.values;
                                return b.a.set(e, t, n, i)
                            },
                            reducerCallback: function(e, t) {
                                return j(j({}, e), {}, {
                                    savedSettings: j({}, t),
                                    settings: j({}, t)
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
                        S = {
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
                            saveSettings: o.a.mark((function e() {
                                var t, n, r, i, a;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.a.commonActions.getRegistry();
                                        case 2:
                                            return t = e.sent, e.next = 5, w("saveSettings", []);
                                        case 5:
                                            return n = t.select(d).getSettings(), e.next = 8, v.actions.fetchSaveSettings(n);
                                        case 8:
                                            if (r = e.sent, i = r.response, !(a = r.error)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 14, N(a, "saveSettings", []);
                                        case 14:
                                            return e.abrupt("return", {
                                                response: i,
                                                error: a
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        k = {},
                        A = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                n = t.type,
                                r = t.payload;
                            switch (n) {
                                case "SET_SETTINGS":
                                    var i = r.values;
                                    return j(j({}, e), {}, {
                                        settings: j(j({}, e.settings || {}), i)
                                    });
                                case "ROLLBACK_SETTINGS":
                                    return j(j({}, e), {}, {
                                        settings: e.savedSettings
                                    });
                                default:
                                    return void 0 !== y[n] ? y[n](e, {
                                        type: n,
                                        payload: r
                                    }) : e
                            }
                        },
                        D = {
                            getSettings: o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.a.commonActions.getRegistry();
                                        case 2:
                                            if (t = e.sent, t.select(d).getSettings()) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 7, m.actions.fetchGetSettings();
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
                                    n = e.savedSettings;
                                return !p()(t, n)
                            },
                            hasSettingChanged: function(e, t) {
                                l()(t, "setting is required.");
                                var n = e.settings,
                                    r = e.savedSettings;
                                return !(!n || !r) && !p()(n[t], r[t])
                            },
                            isDoingSaveSettings: function(e) {
                                return Object.values(e.isFetchingSaveSettings).some(Boolean)
                            }
                        };
                    u.forEach((function(e) {
                        var t = Object(O.b)(e),
                            n = Object(O.a)(e);
                        S["set".concat(t)] = function(e) {
                            return l()(void 0 !== e, "value is required for calls to set".concat(t, "().")), {
                                payload: {
                                    value: e
                                },
                                type: "SET_".concat(n)
                            }
                        }, y["SET_".concat(n)] = function(t, n) {
                            var r = n.payload.value;
                            return j(j({}, t), {}, {
                                settings: j(j({}, t.settings || {}), {}, s()({}, e, r))
                            })
                        }, P["get".concat(t)] = E((function(t) {
                            return function() {
                                return (t(d).getSettings() || {})[e]
                            }
                        }))
                    }));
                    var T = h.a.combineStores(h.a.commonStore, m, v, {
                        initialState: g,
                        actions: S,
                        controls: k,
                        reducer: A,
                        resolvers: D,
                        selectors: P
                    });
                    return j(j({}, T), {}, {
                        STORE_NAME: d
                    })
                };

            function T(e, t) {
                return function() {
                    var n = i()(o.a.mark((function n(r) {
                        var i, a, c, s;
                        return o.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (i = r.select, a = r.dispatch, !i(t).haveSettingsChanged()) {
                                        n.next = 8;
                                        break
                                    }
                                    return n.next = 4, a(t).saveSettings();
                                case 4:
                                    if (c = n.sent, !(s = c.error)) {
                                        n.next = 8;
                                        break
                                    }
                                    return n.abrupt("return", {
                                        error: s
                                    });
                                case 8:
                                    return n.next = 10, b.a.invalidateCache("modules", e);
                                case 10:
                                    return n.abrupt("return", {});
                                case 11:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }()
            }

            function x(e) {
                return function(t) {
                    var n = t.select,
                        r = t.dispatch;
                    return n(e).haveSettingsChanged() ? r(e).rollbackSettings() : {}
                }
            }

            function C(e) {
                return function(t) {
                    var n = Object(y.e)(t)(e),
                        r = n.haveSettingsChanged,
                        i = n.isDoingSubmitChanges;
                    l()(!i(), A), l()(r(), D)
                }
            }
        },
        19: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    i = n.n(r),
                    a = n(17),
                    o = n.n(a),
                    c = n(8),
                    s = n.n(c),
                    u = n(0),
                    l = n.n(u),
                    d = n(124),
                    f = n(259),
                    g = n(2),
                    p = n(1),
                    m = n(7),
                    b = Object(g.forwardRef)((function(t, n) {
                        var r = t.children,
                            a = t.href,
                            c = t.text,
                            u = t.className,
                            l = t.danger,
                            b = t.disabled,
                            v = t.target,
                            h = t.icon,
                            y = t.trailingIcon,
                            O = t["aria-label"],
                            _ = t.title,
                            S = t.tooltip,
                            k = o()(t, ["children", "href", "text", "className", "danger", "disabled", "target", "icon", "trailingIcon", "aria-label", "title", "tooltip"]),
                            j = Object(g.useCallback)((function(e) {
                                null !== e && m.i.attachTo(e)
                            }), []),
                            E = Object(d.a)(n, j),
                            w = a && !b ? "a" : "button",
                            N = e.createElement(w, i()({
                                className: s()("mdc-button", u, {
                                    "mdc-button--raised": !c,
                                    "mdc-button--danger": l
                                }),
                                href: b ? void 0 : a,
                                ref: E,
                                disabled: !!b,
                                "aria-label": function() {
                                    var e = O;
                                    if ("_blank" !== v) return e;
                                    var t = Object(p._x)("(opens in a new tab)", "screen reader text", "google-site-kit");
                                    return "string" == typeof r && (e = e || r), e ? "".concat(e, " ").concat(t) : t
                                }(),
                                target: v || "_self",
                                role: "a" === w ? "button" : void 0
                            }, k), h, r && e.createElement("span", {
                                className: "mdc-button__label"
                            }, r), y);
                        return S && (_ || O) || h && (_ || O) && void 0 === r ? e.createElement(f.a, {
                            title: _ || O,
                            classes: {
                                popper: "googlesitekit-tooltip-popper",
                                tooltip: "googlesitekit-tooltip"
                            }
                        }, N) : N
                    }));
                b.displayName = "Button", b.propTypes = {
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
                }, b.defaultProps = {
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
                }, t.a = b
            }).call(this, n(3))
        },
        191: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ErrorNotice
                }));
                var r = n(0),
                    i = n.n(r),
                    a = n(89),
                    o = n(81);

                function ErrorNotice(t) {
                    var n, r = t.error,
                        i = t.shouldDisplayError,
                        c = void 0 === i ? function() {
                            return !0
                        } : i;
                    return r && !Object(a.c)(r) && c(r) ? e.createElement(o.a, {
                        message: r.message,
                        reconnectURL: null === (n = r.data) || void 0 === n ? void 0 : n.reconnectURL
                    }) : null
                }
                ErrorNotice.propTypes = {
                    error: i.a.shape({
                        message: i.a.string
                    }),
                    shouldDisplayError: i.a.func
                }
            }).call(this, n(3))
        },
        199: function(e, t, n) {
            "use strict";
            var r = n(0),
                i = n.n(r),
                a = function DisplaySetting(e) {
                    return e.value || " "
                };
            a.propTypes = {
                value: i.a.oneOfType([i.a.string, i.a.bool, i.a.number])
            }, t.a = a
        },
        21: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    i = n.n(r),
                    a = n(17),
                    o = n.n(a),
                    c = n(0),
                    s = n.n(c),
                    u = n(8),
                    l = n.n(u),
                    d = n(127),
                    f = n(1),
                    g = n(2),
                    p = Object(g.forwardRef)((function(t, n) {
                        var r, a = t["aria-label"],
                            c = t.arrow,
                            s = t.back,
                            u = t.caps,
                            g = t.children,
                            p = t.className,
                            m = t.danger,
                            b = t.disabled,
                            v = t.external,
                            h = t.hideExternalIndicator,
                            y = t.href,
                            O = t.inherit,
                            _ = t.inverse,
                            S = t.onClick,
                            k = t.small,
                            j = t.to,
                            E = o()(t, ["aria-label", "arrow", "back", "caps", "children", "className", "danger", "disabled", "external", "hideExternalIndicator", "href", "inherit", "inverse", "onClick", "small", "to"]),
                            w = y || j || !S ? j ? "ROUTER_LINK" : v ? "EXTERNAL_LINK" : "LINK" : b ? "BUTTON_DISABLED" : "BUTTON",
                            N = "BUTTON" === w || "BUTTON_DISABLED" === w ? "button" : "ROUTER_LINK" === w ? d.b : "a",
                            A = ("EXTERNAL_LINK" === w && (r = Object(f._x)("(opens in a new tab)", "screen reader text", "google-site-kit")), "BUTTON_DISABLED" === w && (r = Object(f._x)("(disabled)", "screen reader text", "google-site-kit")), r ? a ? "".concat(a, " ").concat(r) : "string" == typeof g ? "".concat(g, " ").concat(r) : void 0 : a);
                        return e.createElement(N, i()({
                            "aria-label": A,
                            className: l()("googlesitekit-cta-link", p, {
                                "googlesitekit-cta-link--arrow": c,
                                "googlesitekit-cta-link--external": v && !h,
                                "googlesitekit-cta-link--inverse": _,
                                "googlesitekit-cta-link--back": s,
                                "googlesitekit-cta-link--small": k,
                                "googlesitekit-cta-link--inherit": O,
                                "googlesitekit-cta-link--caps": u,
                                "googlesitekit-cta-link--danger": m,
                                "googlesitekit-cta-link--disabled": b
                            }),
                            disabled: b,
                            href: "LINK" === w || "EXTERNAL_LINK" === w ? y : void 0,
                            onClick: S,
                            rel: "EXTERNAL_LINK" === w ? "noopener noreferrer" : void 0,
                            ref: n,
                            target: "EXTERNAL_LINK" === w ? "_blank" : void 0,
                            to: j
                        }, E), g)
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
            }).call(this, n(3))
        },
        22: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var r = "core/modules",
                i = "insufficient_module_dependencies"
        },
        25: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "h", (function() {
                return l
            }));
            var r = "modules/tagmanager",
                i = "account_create",
                a = "container_create",
                o = "web",
                c = "amp",
                s = "tagmanagerSetup",
                u = "https://www.googleapis.com/auth/tagmanager.edit.containers",
                l = "SETUP_WITH_ANALYTICS"
        },
        28: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var r = "_googlesitekitDataLayer",
                i = "data-googlesitekit-gtag"
        },
        30: function(e, t, n) {
            "use strict";
            (function(e) {
                var r, i;
                n.d(t, "a", (function() {
                    return a
                })), n.d(t, "b", (function() {
                    return o
                }));
                var a = new Set((null === (r = e) || void 0 === r || null === (i = r._googlesitekitBaseData) || void 0 === i ? void 0 : i.enabledFeatures) || []),
                    o = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
                        return t instanceof Set && t.has(e)
                    }
            }).call(this, n(18))
        },
        300: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "b", (function() {
                    return p
                })), n.d(t, "a", (function() {
                    return m
                })), n.d(t, "d", (function() {
                    return b
                })), n.d(t, "c", (function() {
                    return TrackingExclusionSwitches
                }));
                var r, i = n(6),
                    a = n.n(i),
                    o = n(2),
                    c = n(1),
                    s = n(4),
                    u = n.n(s),
                    l = n(10),
                    d = n(129),
                    f = u.a.useSelect,
                    g = u.a.useDispatch,
                    p = "loggedinUsers",
                    m = "contentCreators",
                    b = (r = {}, a()(r, p, Object(c.__)("All logged-in users", "google-site-kit")), a()(r, m, Object(c.__)("Users that can write posts", "google-site-kit")), r);

                function TrackingExclusionSwitches() {
                    var t, n = f((function(e) {
                            return e(l.f).getTrackingDisabled()
                        })),
                        r = g(l.f).setTrackingDisabled;
                    t = n && n.includes(p) ? Object(c.__)("All logged-in users will be excluded from Analytics tracking", "google-site-kit") : n && n.includes(m) ? Object(c.__)("Users that can write posts will be excluded from Analytics tracking", "google-site-kit") : Object(c.__)("All logged-in users will be included in Analytics tracking", "google-site-kit");
                    var i = Object(o.useCallback)((function(e, t) {
                            var i = t ? n.concat(e) : n.filter((function(t) {
                                return t !== e
                            }));
                            r(i)
                        }), [n, r]),
                        a = Object(o.useCallback)((function(e) {
                            var t = e.target.checked;
                            i(m, t)
                        }), [i]),
                        s = Object(o.useCallback)((function(e) {
                            var t = e.target.checked;
                            i(p, t)
                        }), [i]);
                    return Array.isArray(n) ? e.createElement("fieldset", {
                        className: "googlesitekit-analytics-trackingdisabled"
                    }, e.createElement("legend", {
                        className: "googlesitekit-setup-module__text"
                    }, Object(c.__)("Exclude from Analytics", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-item"
                    }, e.createElement(d.a, {
                        label: b[p],
                        checked: n.includes(p),
                        onClick: s,
                        hideLabel: !1
                    })), !n.includes(p) && e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-item"
                    }, e.createElement(d.a, {
                        label: b[m],
                        checked: n.includes(m),
                        onClick: a,
                        hideLabel: !1
                    }))), e.createElement("p", {
                        className: "googlesitekit-margin-top-0"
                    }, t)) : null
                }
            }).call(this, n(3))
        },
        302: function(e, t, n) {
            "use strict";
            var r = n(684);
            n.d(t, "a", (function() {
                return r.a
            }));
            var i = n(685);
            n.d(t, "c", (function() {
                return i.a
            }));
            var a = n(686);
            n.d(t, "d", (function() {
                return a.a
            }));
            var o = n(687);
            n.d(t, "e", (function() {
                return o.a
            }));
            var c = n(688);
            n.d(t, "g", (function() {
                return c.a
            }));
            var s = n(689);
            n.d(t, "f", (function() {
                return s.a
            }));
            var u = n(690);
            n.d(t, "b", (function() {
                return u.a
            }))
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
                    i = e._googlesitekitBaseData || {},
                    a = i.activeModules,
                    o = void 0 === a ? [] : a,
                    c = i.isSiteKitScreen,
                    s = i.trackingEnabled,
                    u = {
                        activeModules: o,
                        trackingEnabled: s,
                        trackingID: i.trackingID,
                        referenceSiteURL: i.referenceSiteURL,
                        userIDHash: i.userIDHash,
                        isSiteKitScreen: c
                    },
                    l = Object(r.a)(u),
                    d = l.enableTracking,
                    f = l.disableTracking,
                    g = (l.isTrackingEnabled, l.initializeSnippet),
                    p = l.trackEvent;

                function m(e) {
                    e ? d() : f()
                }
                c && s && g()
            }).call(this, n(18))
        },
        317: function(e, t, n) {
            "use strict";

            function r(e) {
                return "string" == typeof e && /^(GTM|OPT)-[A-Z0-9]+$/.test(e)
            }

            function i(e) {
                if (!e) return !0;
                if ("string" != typeof e) return !1;
                try {
                    return JSON.parse(e), !0
                } catch (e) {
                    return !1
                }
            }
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            }))
        },
        33: function(e, t) {
            e.exports = googlesitekit.api
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
        38: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = "core/location"
        },
        4: function(e, t) {
            e.exports = googlesitekit.data
        },
        41: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "d", (function() {
                return a
            })), n.d(t, "a", (function() {
                return o
            }));
            var r = "modules/analytics-4",
                i = "property_create",
                a = "webdatastream_create",
                o = 10
        },
        42: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(35),
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = "string" == typeof e;
                    if (!t) return !1;
                    var n = e.split("-");
                    return 3 === n.length && Object(r.a)(new Date(e))
                }
        },
        45: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return _
            }));
            var r = n(5),
                i = n.n(r),
                a = n(6),
                o = n.n(a),
                c = n(9),
                s = n.n(c),
                u = n(57),
                l = n.n(u),
                d = n(54),
                f = n(76),
                g = n(11);

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

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        o()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
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
                y = d.a.clearError,
                O = d.a.receiveError,
                _ = function(e) {
                    var t, n, r = i.a.mark(L),
                        a = e.baseName,
                        c = e.controlCallback,
                        u = e.reducerCallback,
                        d = void 0 === u ? b : u,
                        p = e.argsToParams,
                        _ = void 0 === p ? v : p,
                        S = e.validateParams,
                        k = void 0 === S ? h : S;
                    s()(a, "baseName is required."), s()("function" == typeof c, "controlCallback is required and must be a function."), s()("function" == typeof d, "reducerCallback must be a function."), s()("function" == typeof _, "argsToParams must be a function."), s()("function" == typeof k, "validateParams must be a function.");
                    try {
                        k(_()), n = !1
                    } catch (e) {
                        n = !0
                    }
                    var j = Object(f.b)(a),
                        E = Object(f.a)(a),
                        w = "FETCH_".concat(E),
                        N = "START_".concat(w),
                        A = "FINISH_".concat(w),
                        D = "CATCH_".concat(w),
                        P = "RECEIVE_".concat(E),
                        T = "fetch".concat(j),
                        x = "receive".concat(j),
                        C = "isFetching".concat(j),
                        I = o()({}, C, {});

                    function L(e, t) {
                        var n, o;
                        return i.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, {
                                        payload: {
                                            params: e
                                        },
                                        type: N
                                    };
                                case 2:
                                    return r.next = 4, y(a, t);
                                case 4:
                                    return r.prev = 4, r.next = 7, {
                                        payload: {
                                            params: e
                                        },
                                        type: w
                                    };
                                case 7:
                                    return n = r.sent, r.next = 10, R[x](n, e);
                                case 10:
                                    return r.next = 12, {
                                        payload: {
                                            params: e
                                        },
                                        type: A
                                    };
                                case 12:
                                    r.next = 23;
                                    break;
                                case 14:
                                    return r.prev = 14, r.t0 = r.catch(4), o = r.t0, r.next = 19, O(o, a, t);
                                case 19:
                                    return r.next = 21, O(o);
                                case 21:
                                    return r.next = 23, {
                                        payload: {
                                            params: e
                                        },
                                        type: D
                                    };
                                case 23:
                                    return r.abrupt("return", {
                                        response: n,
                                        error: o
                                    });
                                case 24:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [4, 14]
                        ])
                    }
                    var R = (t = {}, o()(t, T, (function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var r = _.apply(void 0, t);
                            return k(r), L(r, t)
                        })), o()(t, x, (function(e, t) {
                            return s()(void 0 !== e, "response is required."), n ? (s()(l()(t), "params is required."), k(t)) : t = {}, {
                                payload: {
                                    response: e,
                                    params: t
                                },
                                type: P
                            }
                        })), t),
                        z = o()({}, w, (function(e) {
                            var t = e.payload;
                            return c(t.params)
                        })),
                        M = o()({}, C, (function(e) {
                            if (void 0 === e[C]) return !1;
                            var t;
                            try {
                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                                t = _.apply(void 0, r), k(t)
                            } catch (e) {
                                return !1
                            }
                            return !!e[C][Object(g.v)(t)]
                        }));
                    return {
                        initialState: I,
                        actions: R,
                        controls: z,
                        reducer: function(e, t) {
                            var n = t.type,
                                r = t.payload;
                            switch (n) {
                                case N:
                                    var i = r.params;
                                    return m(m({}, e), {}, o()({}, C, m(m({}, e[C]), {}, o()({}, Object(g.v)(i), !0))));
                                case P:
                                    var a = r.response,
                                        c = r.params;
                                    return d(e, a, c);
                                case A:
                                    var s = r.params;
                                    return m(m({}, e), {}, o()({}, C, m(m({}, e[C]), {}, o()({}, Object(g.v)(s), !1))));
                                case D:
                                    var u = r.params;
                                    return m(m({}, e), {}, o()({}, C, m(m({}, e[C]), {}, o()({}, Object(g.v)(u), !1))));
                                default:
                                    return e
                            }
                        },
                        resolvers: {},
                        selectors: M
                    }
                }
        },
        50: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return a
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "e", (function() {
                return s
            }));
            var r = n(109);

            function i(e) {
                try {
                    return new URL(e).pathname
                } catch (e) {}
                return null
            }

            function a(e, t) {
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
                if (!Object(r.a)(e)) return e;
                if (e.length <= t) return e;
                var n = new URL(e),
                    i = e.replace(n.origin, "");
                if (i.length < t) return i;
                var a = i.length - Math.floor(t) + 1;
                return "…" + i.substr(a)
            }
        },
        51: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(28);

            function i(e) {
                return function() {
                    e[r.a] = e[r.a] || [], e[r.a].push(arguments)
                }
            }
        },
        528: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupForm
                }));
                var r = n(5),
                    i = n.n(r),
                    a = n(14),
                    o = n.n(a),
                    c = n(0),
                    s = n.n(c),
                    u = n(2),
                    l = n(1),
                    d = n(4),
                    f = n.n(d),
                    g = n(19),
                    p = n(153),
                    m = n(317),
                    b = n(112),
                    v = n(81),
                    h = n(302),
                    y = f.a.useSelect,
                    O = f.a.useDispatch;

                function SetupForm(t) {
                    var n = t.finishSetup,
                        r = y((function(e) {
                            return e(p.a).canSubmitChanges()
                        })),
                        a = y((function(e) {
                            return e(p.a).getOptimizeID()
                        })),
                        c = O(p.a).submitChanges,
                        s = Object(u.useCallback)(function() {
                            var e = o()(i.a.mark((function e(t) {
                                var r;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.next = 3, c();
                                        case 3:
                                            r = e.sent, r.error || n();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [n, c]);
                    return e.createElement("form", {
                        className: "googlesitekit-optimize-setup__form",
                        onSubmit: s
                    }, e.createElement(b.a, {
                        moduleSlug: "optimize",
                        storeName: p.a
                    }), e.createElement(h.d, null), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(h.c, null)), !Object(m.b)(a) && a && e.createElement(v.a, {
                        message: Object(l.__)("Not a valid Optimize ID.", "google-site-kit")
                    }), e.createElement(h.b, null), e.createElement(h.a, null), e.createElement(h.g, null), e.createElement(h.e, null), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, e.createElement(g.a, {
                        disabled: !r
                    }, Object(l.__)("Configure Optimize", "google-site-kit"))))
                }
                SetupForm.propTypes = {
                    finishSetup: s.a.func
                }, SetupForm.defaultProps = {
                    finishSetup: function() {}
                }
            }).call(this, n(3))
        },
        529: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsForm
                }));
                var r = n(1),
                    i = n(4),
                    a = n.n(i),
                    o = n(153),
                    c = n(317),
                    s = n(81),
                    u = n(302),
                    l = n(112),
                    d = a.a.useSelect;

                function SettingsForm() {
                    var t = d((function(e) {
                        return e(o.a).getOptimizeID()
                    }));
                    return e.createElement("div", {
                        className: "googlesitekit-optimize-settings-fields"
                    }, e.createElement(l.a, {
                        moduleSlug: "optimize",
                        storeName: o.a
                    }), e.createElement(u.d, null), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(u.c, null)), !Object(c.b)(t) && t && e.createElement(s.a, {
                        message: Object(r.__)("Not a valid Optimize ID.", "google-site-kit")
                    }), e.createElement(u.b, null), e.createElement(u.f, null), e.createElement(u.a, null), e.createElement(u.g, null))
                }
            }).call(this, n(3))
        },
        54: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            })), n.d(t, "b", (function() {
                return b
            }));
            var r = n(6),
                i = n.n(r),
                a = n(29),
                o = n.n(a),
                c = n(9),
                s = n.n(c),
                u = n(78),
                l = n.n(u),
                d = n(11);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        i()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e, t) {
                if (t && Array.isArray(t)) {
                    var n = t.map((function(e) {
                        return "object" === o()(e) ? Object(d.v)(e) : e
                    }));
                    return "".concat(e, "::").concat(l()(JSON.stringify(n)))
                }
                return e
            }
            var m = {
                receiveError: function(e, t, n) {
                    return s()(e, "error is required."), t && s()(n && Array.isArray(n), "args is required (and must be an array) when baseName is specified."), {
                        type: "RECEIVE_ERROR",
                        payload: {
                            error: e,
                            baseName: t,
                            args: n
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
                    getErrorForSelector: function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return s()(n, "selectorName is required."), e.getError(t, n, r)
                    },
                    getErrorForAction: function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return s()(n, "actionName is required."), e.getError(t, n, r)
                    },
                    getError: function(e, t, n) {
                        var r = e.error,
                            i = e.errors;
                        return t || n ? (s()(t, "baseName is required."), i[p(t, n)]) : r
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
                        var n = t.type,
                            r = t.payload;
                        switch (n) {
                            case "RECEIVE_ERROR":
                                var a = r.baseName,
                                    o = r.args,
                                    c = r.error;
                                return g(g({}, e), {}, a ? {
                                    errors: g(g({}, e.errors || {}), {}, i()({}, p(a, o), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var s = r.baseName,
                                    u = r.args,
                                    l = g({}, e);
                                if (s) {
                                    var d = p(s, u);
                                    l.errors = g({}, e.errors || {}), delete l.errors[d]
                                } else l.error = void 0;
                                return l;
                            case "CLEAR_ERRORS":
                                var f = r.baseName,
                                    m = g({}, e);
                                if (f)
                                    for (var b in m.errors = g({}, e.errors || {}), m.errors)(b === f || b.startsWith("".concat(f, "::"))) && delete m.errors[b];
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
        55: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ProgressBar
                }));
                var r = n(0),
                    i = n.n(r),
                    a = n(8),
                    o = n.n(a);

                function ProgressBar(t) {
                    var n = t.className,
                        r = t.small,
                        i = t.compress,
                        a = t.indeterminate,
                        c = t.height,
                        s = t.progress,
                        u = void 0 !== c ? Math.round(c / 2) : void 0,
                        l = s ? "scaleX(".concat(s, ")") : void 0;
                    return e.createElement("div", {
                        role: "progressbar",
                        style: {
                            marginTop: u,
                            marginBottom: u
                        },
                        className: o()("mdc-linear-progress", n, {
                            "mdc-linear-progress--indeterminate": a,
                            "mdc-linear-progress--small": r,
                            "mdc-linear-progress--compress": i
                        })
                    }, e.createElement("div", {
                        className: "mdc-linear-progress__buffering-dots"
                    }), e.createElement("div", {
                        className: "mdc-linear-progress__buffer"
                    }), e.createElement("div", {
                        className: "mdc-linear-progress__bar mdc-linear-progress__primary-bar",
                        style: {
                            transform: l
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
                    className: i.a.string,
                    small: i.a.bool,
                    compress: i.a.bool,
                    indeterminate: i.a.bool,
                    progress: i.a.number,
                    height: i.a.number
                }, ProgressBar.defaultProps = {
                    className: "",
                    small: !1,
                    compress: !1,
                    indeterminate: !0,
                    progress: 0
                }
            }).call(this, n(3))
        },
        552: function(e, t, n) {
            "use strict";
            var r = n(2);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var a = r.createElement("g", {
                fill: "none"
            }, r.createElement("g", {
                transform: "translate(0 57)"
            }, r.createElement("path", {
                d: "M102 21c-.15-11.83-9.95-21-22-21H22C10.6.53 1 9.53 1 21s9.6 21.47 21 22h37v35c0 12.23 10.12 22 22 22 11.87 0 21-9.77 21-22V21z",
                fill: "#B366F6"
            }), r.createElement("circle", {
                fill: "#8430CE",
                cx: 21.5,
                cy: 21.5,
                r: 21.5
            })), r.createElement("path", {
                d: "M159 21c-.15-11.83-9.95-21-22-21H79C67.6.53 58 9.53 58 21s9.6 21.47 21 22h37v35c0 12.23 10.12 22 22 22 11.87 0 21-9.77 21-22V21z",
                fill: "#C58AF8"
            }));
            t.a = function SvgOptimize(e) {
                return r.createElement("svg", i({
                    viewBox: "0 0 159 157"
                }, e), a)
            }
        },
        59: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "g", (function() {
                return p
            })), n.d(t, "h", (function() {
                return d.a
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "i", (function() {
                return f
            }));
            var r = "Invalid dateString parameter, it must be a string.",
                i = 'Invalid date range, it must be a string with the format "last-x-days".',
                a = n(9),
                o = n.n(a),
                c = n(35),
                s = function(e) {
                    var t = new Date(e);
                    o()(Object(c.a)(t), "Date param must construct to a valid date instance or be a valid date instance itself.");
                    var n = "".concat(t.getMonth() + 1),
                        r = "".concat(t.getDate());
                    return [t.getFullYear(), n.length < 2 ? "0".concat(n) : n, r.length < 2 ? "0".concat(r) : r].join("-")
                },
                u = n(12),
                l = n.n(u),
                d = n(42),
                f = function(e) {
                    o()(Object(d.a)(e), r);
                    var t = e.split("-"),
                        n = l()(t, 3),
                        i = n[0],
                        a = n[1],
                        c = n[2];
                    return new Date(i, a - 1, c)
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = f(e);
                    return n.setDate(n.getDate() - t), s(n)
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
            var b = n(1);

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
        62: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    i = n.n(r),
                    a = n(8),
                    o = n.n(a);

                function ChangeArrow(t) {
                    var n = t.direction,
                        r = t.invertColor,
                        i = t.width,
                        a = t.height;
                    return e.createElement("svg", {
                        className: o()("googlesitekit-change-arrow", "googlesitekit-change-arrow--".concat(n), {
                            "googlesitekit-change-arrow--inverted-color": r
                        }),
                        width: i,
                        height: a,
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
                i = n.n(r),
                a = n(69),
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        __html: a.a.sanitize(e, t)
                    }
                };

            function c(e) {
                var t, n = "object" === i()(e) ? e.toString() : e;
                return null == n || null === (t = n.replace) || void 0 === t ? void 0 : t.call(n, /\/+$/, "")
            }
        },
        64: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(2),
                i = function(e) {
                    return function(t) {
                        return function FilteredComponent(n) {
                            return Object(r.createElement)(r.Fragment, {}, "", Object(r.createElement)(t, n), e)
                        }
                    }
                }
        },
        684: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AMPExperimentJSONField
                }));
                var r = n(2),
                    i = n(1),
                    a = n(4),
                    o = n.n(a),
                    c = n(7),
                    s = n(8),
                    u = n.n(s),
                    l = n(153),
                    d = n(15),
                    f = n(10),
                    g = n(317),
                    p = n(21),
                    m = n(81),
                    b = o.a.useSelect,
                    v = o.a.useDispatch;

                function AMPExperimentJSONField() {
                    var t = b((function(e) {
                            return e(l.a).getAMPExperimentJSON()
                        })),
                        n = b((function(e) {
                            return e(d.c).getAMPMode()
                        })),
                        a = b((function(e) {
                            return e(f.f).getUseSnippet()
                        })),
                        o = v(l.a).setAMPExperimentJSON,
                        s = Object(r.useCallback)((function(e) {
                            o(e.target.value)
                        }), [o]);
                    return a && n ? e.createElement(r.Fragment, null, e.createElement("p", null, Object(i.__)("Please input your AMP experiment settings in JSON format below.", "google-site-kit"), " ", e.createElement(p.a, {
                        href: "https://developers.google.com/optimize/devguides/amp-experiments",
                        external: !0,
                        inherit: !0
                    }, Object(i.__)("Learn More", "google-site-kit"))), e.createElement(c.n, {
                        className: u()("mdc-text-field", {
                            "mdc-text-field--error": !Object(g.a)(t)
                        }),
                        name: "amp-experiment",
                        onChange: s,
                        textarea: !0
                    }, e.createElement(c.d, {
                        inputType: "textarea",
                        value: t
                    })), !Object(g.a)(t) && e.createElement(m.a, {
                        message: Object(i.__)("AMP experiment settings are not in a valid JSON format.", "google-site-kit")
                    })) : null
                }
            }).call(this, n(3))
        },
        685: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return OptimizeIDField
                }));
                var r = n(8),
                    i = n.n(r),
                    a = n(2),
                    o = n(1),
                    c = n(4),
                    s = n.n(c),
                    u = n(7),
                    l = n(153),
                    d = n(317),
                    f = s.a.useSelect,
                    g = s.a.useDispatch;

                function OptimizeIDField() {
                    var t = f((function(e) {
                            return e(l.a).getOptimizeID()
                        })),
                        n = g(l.a).setOptimizeID,
                        r = Object(a.useCallback)((function(e) {
                            n(e.target.value)
                        }), [n]),
                        c = !Object(d.b)(t) && t;
                    return e.createElement("div", {
                        className: "googlesitekit-optimize__container-id"
                    }, e.createElement(u.n, {
                        className: i()("mdc-text-field", {
                            "mdc-text-field--error": c
                        }),
                        label: Object(o.__)("Optimize Container ID", "google-site-kit"),
                        name: "optimizeID",
                        onChange: r,
                        helperText: c && e.createElement(u.c, {
                            persistent: !0
                        }, Object(o.__)("Format: GTM-XXXXXXX or OPT-XXXXXXX", "google-site-kit")),
                        outlined: !0,
                        required: !0
                    }, e.createElement(u.d, {
                        value: t
                    })))
                }
            }).call(this, n(3))
        },
        686: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return OptimizeIDFieldInstructions
                }));
                var r = n(1),
                    i = n(4),
                    a = n.n(i),
                    o = n(15),
                    c = n(21),
                    s = a.a.useSelect;

                function OptimizeIDFieldInstructions() {
                    var t = s((function(e) {
                        return e(o.c).getGoogleSupportURL({
                            path: "/optimize/answer/6211921"
                        })
                    }));
                    return e.createElement("p", null, Object(r.__)("Please copy and paste your Optimize ID to complete your setup.", "google-site-kit"), " ", e.createElement(c.a, {
                        href: t,
                        external: !0,
                        inherit: !0
                    }, Object(r.__)("You can locate this here.", "google-site-kit")))
                }
            }).call(this, n(3))
        },
        687: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return OptimizeSnippetNotice
                }));
                var r = n(1),
                    i = n(4),
                    a = n.n(i),
                    o = n(10),
                    c = n(41),
                    s = n(22),
                    u = a.a.useSelect;

                function OptimizeSnippetNotice() {
                    var t = u((function(e) {
                            return e(s.a).isModuleConnected("analytics-4")
                        })),
                        n = u((function(e) {
                            return e(c.b).getUseSnippet()
                        })),
                        i = u((function(e) {
                            return e(o.f).getUseSnippet()
                        })),
                        a = null;
                    return i || !t || n ? i || t && !n ? t && !n && i && (a = Object(r.__)("Site Kit is currently configured to not place the Google Analytics 4 snippet. If you have manually inserted this snippet, you will have to modify it to include the Optimize ID, or alternatively you will need to enable Site Kit to place it.", "google-site-kit")) : a = Object(r.__)("Site Kit is currently configured to not place the Universal Analytics snippet. If you have manually inserted this snippet, you will have to modify it to include the Optimize ID, or alternatively you will need to enable Site Kit to place it.", "google-site-kit") : a = Object(r.__)("Site Kit is currently configured to neither place the Universal Analytics snippet nor the Google Analytics 4 snippet. If you have manually inserted these snippets, you will have to modify them to include the Optimize ID, or alternatively you will need to enable Site Kit to place them.", "google-site-kit"), a ? e.createElement("p", null, a) : null
                }
            }).call(this, n(3))
        },
        688: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return UseSnippetInstructions
                }));
                var r = n(2),
                    i = n(1),
                    a = n(4),
                    o = n.n(a),
                    c = n(63),
                    s = n(153),
                    u = n(10),
                    l = n(25),
                    d = n(22),
                    f = n(15),
                    g = o.a.useSelect;

                function UseSnippetInstructions() {
                    var t = g((function(e) {
                            return e(s.a).getOptimizeID()
                        })),
                        n = g((function(e) {
                            return e(d.a).isModuleActive("analytics")
                        })),
                        a = g((function(e) {
                            return e(u.f).getUseSnippet()
                        })),
                        o = g((function(e) {
                            return e(d.a).isModuleActive("tagmanager")
                        })),
                        p = g((function(e) {
                            return e(l.g).getUseSnippet()
                        })),
                        m = g((function(e) {
                            return e(f.c).getAdminURL("googlesitekit-settings")
                        })),
                        b = g((function(e) {
                            return e(f.c).getGoogleSupportURL({
                                path: "/optimize/answer/6314801"
                            })
                        })),
                        v = g((function(e) {
                            return e(f.c).getGoogleSupportURL({
                                path: "/optimize/answer/6262084"
                            })
                        }));
                    return n ? !1 === a && o && p ? e.createElement(r.Fragment, null, e.createElement("p", null, Object(i.__)("You are using auto insert snippet with Tag Manager", "google-site-kit")), e.createElement("p", {
                        dangerouslySetInnerHTML: Object(c.a)(Object(i.sprintf)(
                            /* translators: %s: external URL with instructions */
                            Object(i.__)('<a href="%s">Click here</a> for how to implement Optimize tag through your Tag Manager', "google-site-kit"), b), {
                            ALLOWED_TAGS: ["a"],
                            ALLOWED_ATTR: ["href"]
                        })
                    })) : !1 === a ? e.createElement(r.Fragment, null, e.createElement("p", null, Object(i.__)("You disabled Analytics auto insert snippet. If you are using Google Analytics code snippet, add the code below:", "google-site-kit")), e.createElement("pre", null, 'ga("require", "', t || "GTM-XXXXXXX", '");'), e.createElement("p", {
                        dangerouslySetInnerHTML: Object(c.a)(Object(i.sprintf)(
                            /* translators: %s: external URL with instructions */
                            Object(i.__)('<a href="%s">Click here</a> for how to implement Optimize tag in Google Analytics Code Snippet', "google-site-kit"), v), {
                            ALLOWED_TAGS: ["a"],
                            ALLOWED_ATTR: ["href"]
                        })
                    })) : null : e.createElement(r.Fragment, null, e.createElement("p", null, Object(i.__)("Google Analytics must be active to use Optimize", "google-site-kit")), e.createElement("p", {
                        dangerouslySetInnerHTML: Object(c.a)(Object(i.sprintf)(
                            /* translators: %s: Analytics connect URL in Site Kit */
                            Object(i.__)('<a href="%s">Click here</a> to connect Google Analytics', "google-site-kit"), "".concat(m, "#connect")), {
                            ALLOWED_TAGS: ["a"],
                            ALLOWED_ATTR: ["href"]
                        })
                    }))
                }
            }).call(this, n(3))
        },
        689: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return PlaceAntiFlickerSwitch
                }));
                var r = n(2),
                    i = n(130),
                    a = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(129),
                    u = n(21),
                    l = n(15),
                    d = n(153),
                    f = c.a.useSelect,
                    g = c.a.useDispatch;

                function PlaceAntiFlickerSwitch() {
                    var t, n = f((function(e) {
                            return e(d.a).getPlaceAntiFlickerSnippet()
                        })),
                        o = g(d.a).setPlaceAntiFlickerSnippet,
                        c = f((function(e) {
                            return e(l.c).getGoogleSupportURL({
                                path: "/optimize/answer/7100284"
                            })
                        }));
                    t = n ? Object(a.__)("Site Kit will add the code automatically. <a>Learn more</a>.", "google-site-kit") : Object(a.__)("Site Kit will not add the code to your site. <a>Learn more</a>.", "google-site-kit");
                    var p = Object(r.useCallback)((function() {
                        o(!n)
                    }), [n, o]);
                    return void 0 === n ? null : e.createElement("fieldset", {
                        className: "googlesitekit-optimize-anti-flicker"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-item"
                    }, e.createElement(s.a, {
                        label: Object(a.__)("Place anti-flicker snippet on your site", "google-site-kit"),
                        checked: n,
                        onClick: p,
                        hideLabel: !1
                    }))), e.createElement("p", {
                        className: "googlesitekit-margin-top-0"
                    }, Object(i.a)(t, {
                        a: e.createElement(u.a, {
                            href: c,
                            external: !0,
                            inherit: !0,
                            "aria-label": Object(a.__)("Learn more about the anti-flicker snippet.", "google-site-kit")
                        })
                    })))
                }
            }).call(this, n(3))
        },
        69: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return i
                }));
                var r = n(118),
                    i = n.n(r)()(e)
            }).call(this, n(18))
        },
        690: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(130),
                    i = n(1),
                    a = n(4),
                    o = n.n(a),
                    c = n(21),
                    s = n(10),
                    u = n(300),
                    l = o.a.useSelect;
                t.a = function AnalyticsNotice() {
                    var t = l((function(e) {
                        return e(s.f).getTrackingDisabled()
                    }));
                    return void 0 === t || !(null == t ? void 0 : t.includes(u.b)) && !(null == t ? void 0 : t.includes(u.a)) ? null : e.createElement("p", null, Object(r.a)(Object(i.__)("Analytics is currently set to not track some logged-in users. If you’re setting up or testing experiments on <a>optimize.google.com</a>, make sure you’re not logged in to your WordPress site, otherwise the experiment will fail.", "google-site-kit"), {
                        a: e.createElement(c.a, {
                            href: "https://optimize.google.com",
                            external: !0,
                            inherit: !0
                        })
                    }))
                }
            }).call(this, n(3))
        },
        691: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupMain
                }));
                var r = n(0),
                    i = n.n(r),
                    a = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(552),
                    u = n(528),
                    l = n(55),
                    d = n(153),
                    f = n(38),
                    g = c.a.useSelect;

                function SetupMain(t) {
                    var n, r = t.finishSetup,
                        i = g((function(e) {
                            return e(d.a).isDoingSubmitChanges()
                        })),
                        o = g((function(e) {
                            return e(f.a).isNavigating()
                        }));
                    return n = i || o ? e.createElement(l.a, null) : e.createElement(u.a, {
                        finishSetup: r
                    }), e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--optimize"
                    }, e.createElement("div", {
                        className: "googlesitekit-setup-module__logo"
                    }, e.createElement(s.a, {
                        width: "33",
                        height: "33"
                    })), e.createElement("h2", {
                        className: "googlesitekit-heading-3 googlesitekit-setup-module__title"
                    }, Object(a._x)("Optimize", "Service name", "google-site-kit")), n)
                }
                SetupMain.propTypes = {
                    finishSetup: i.a.func
                }, SetupMain.defaultProps = {
                    finishSetup: function() {}
                }
            }).call(this, n(3))
        },
        692: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsEdit
                }));
                var r = n(4),
                    i = n.n(r),
                    a = n(153),
                    o = n(529),
                    c = n(55),
                    s = i.a.useSelect;

                function SettingsEdit() {
                    var t;
                    return t = s((function(e) {
                        return e(a.a).isDoingSubmitChanges()
                    })) ? e.createElement(c.a, null) : e.createElement(o.a, null), e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--optimize"
                    }, t)
                }
            }).call(this, n(3))
        },
        693: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsView
                }));
                var r = n(1),
                    i = n(4),
                    a = n.n(i),
                    o = n(199),
                    c = n(153),
                    s = n(112),
                    u = a.a.useSelect;

                function SettingsView() {
                    var t = u((function(e) {
                            return e(c.a).getOptimizeID()
                        })),
                        n = u((function(e) {
                            return e(c.a).getPlaceAntiFlickerSnippet()
                        }));
                    return e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--optimize"
                    }, e.createElement(s.a, {
                        moduleSlug: "optimize",
                        storeName: c.a
                    }), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(r.__)("Your Optimize Container ID", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(o.a, {
                        value: t
                    }))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(r.__)("Anti-flicker snippet", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, n ? Object(r.__)("Snippet is inserted", "google-site-kit") : Object(r.__)("Snippet is not inserted", "google-site-kit")))))
                }
            }).call(this, n(3))
        },
        7: function(e, t, n) {
            "use strict";
            var r = n(90),
                i = n.n(r);
            n.d(t, "n", (function() {
                return i.a
            })), n.d(t, "c", (function() {
                return r.HelperText
            })), n.d(t, "d", (function() {
                return r.Input
            }));
            var a = n(195);
            n.d(t, "i", (function() {
                return a.a
            }));
            var o = n(242);
            n.d(t, "f", (function() {
                return o.a
            }));
            var c = n(243);
            n.d(t, "h", (function() {
                return c.a
            }));
            var s = n(110),
                u = n.n(s);
            n.d(t, "m", (function() {
                return u.a
            })), n.d(t, "k", (function() {
                return s.Option
            }));
            var l = n(244);
            n.d(t, "j", (function() {
                return l.a
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
                    return _
                })), n.d(t, "d", (function() {
                    return k
                })), n.d(t, "b", (function() {
                    return j
                })), n.d(t, "a", (function() {
                    return E
                }));
                var r = n(12),
                    i = n.n(r),
                    a = n(29),
                    o = n.n(a),
                    c = n(6),
                    s = n.n(c),
                    u = n(17),
                    l = n.n(u),
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

                function b(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? m(Object(n), !0).forEach((function(t) {
                            s()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var v = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = h(e, t),
                            r = n.formatUnit,
                            i = n.formatDecimal;
                        try {
                            return r()
                        } catch (e) {
                            return i()
                        }
                    },
                    h = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = parseInt(e, 10), Number.isNaN(e) && (e = 0);
                        var n = Math.floor(e / 60 / 60),
                            r = Math.floor(e / 60 % 60),
                            i = Math.floor(e % 60);
                        return {
                            hours: n,
                            minutes: r,
                            seconds: i,
                            formatUnit: function() {
                                var a = t.unitDisplay,
                                    o = b(b({
                                        unitDisplay: void 0 === a ? "short" : a
                                    }, l()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? k(i, b(b({}, o), {}, {
                                    unit: "second"
                                })) : Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), i ? k(i, b(b({}, o), {}, {
                                        unit: "second"
                                    })) : "", r ? k(r, b(b({}, o), {}, {
                                        unit: "minute"
                                    })) : "", n ? k(n, b(b({}, o), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var t = Object(p.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(p.__)("%ds", "google-site-kit"), i);
                                if (0 === e) return t;
                                var a = Object(p.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(p.__)("%dm", "google-site-kit"), r),
                                    o = Object(p.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(p.__)("%dh", "google-site-kit"), n);
                                return Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), i ? t : "", r ? a : "", n ? o : "").trim()
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
                            Object(p.__)("%sM", "google-site-kit"), k(y(e), e % 10 == 0 ? {} : t)) : 1e4 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), k(y(e))) : 1e3 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), k(y(e), e % 10 == 0 ? {} : t)) : k(e, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    _ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(d.isFinite)(e) ? e : Number(e), Object(d.isFinite)(e) || (console.warn("Invalid number", e, o()(e)), e = 0);
                        var n = {};
                        if ("%" === t) n = {
                            style: "percent",
                            maximumFractionDigits: 2
                        };
                        else {
                            if ("s" === t) return v(e, {
                                unitDisplay: "narrow"
                            });
                            t && "string" == typeof t ? n = {
                                style: "currency",
                                currency: t
                            } : Object(d.isPlainObject)(t) && (n = b({}, t))
                        }
                        var r = n,
                            i = r.style,
                            a = void 0 === i ? "metric" : i;
                        return "metric" === a ? O(e) : "duration" === a ? v(e, t) : k(e, n)
                    },
                    S = g()(console.warn),
                    k = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            r = void 0 === n ? E() : n,
                            a = l()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(r, a).format(e)
                        } catch (t) {
                            S("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(r), ", ").concat(JSON.stringify(a), " ).format( ").concat(o()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, s = ["signDisplay", "compactDisplay"], u = {}, d = 0, f = Object.entries(a); d < f.length; d++) {
                            var g = i()(f[d], 2),
                                p = g[0],
                                m = g[1];
                            c[p] && m === c[p] || (s.includes(p) || (u[p] = m))
                        }
                        try {
                            return new Intl.NumberFormat(r, u).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(r).format(e)
                        }
                    },
                    j = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            r = void 0 === n ? E() : n,
                            i = t.style,
                            a = void 0 === i ? "long" : i,
                            o = t.type,
                            c = void 0 === o ? "conjunction" : o;
                        if (Intl.ListFormat) {
                            var s = new Intl.ListFormat(r, {
                                style: a,
                                type: c
                            });
                            return s.format(e)
                        }
                        /* translators: used between list items, there is a space after the comma. */
                        var u = Object(p.__)(", ", "google-site-kit");
                        return e.join(u)
                    },
                    E = function() {
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
        73: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return N
            })), n.d(t, "b", (function() {
                return A
            })), n.d(t, "c", (function() {
                return D
            })), n.d(t, "d", (function() {
                return T
            })), n.d(t, "e", (function() {
                return x
            })), n.d(t, "g", (function() {
                return I
            })), n.d(t, "f", (function() {
                return L
            }));
            var r, i = n(5),
                a = n.n(i),
                o = n(23),
                c = n.n(o),
                s = n(6),
                u = n.n(s),
                l = n(9),
                d = n.n(l),
                f = n(207),
                g = n.n(f),
                p = n(67),
                m = n.n(p),
                b = n(104);

            function v(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        u()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = t.reduce((function(e, t) {
                            return h(h({}, e), t)
                        }), {}),
                        i = t.reduce((function(e, t) {
                            return [].concat(c()(e), c()(Object.keys(t)))
                        }), []),
                        a = P(i);
                    return d()(0 === a.length, "collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(a.join(", "), ". Check your data stores for duplicates.")), r
                },
                O = y,
                _ = y,
                S = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r, i = [].concat(t);
                    return "function" != typeof i[0] && (r = i.shift()),
                        function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return i.reduce((function(e, n) {
                                return n(e, t)
                            }), e)
                        }
                },
                k = y,
                j = y,
                E = y,
                w = function(e) {
                    return e
                },
                N = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = E.apply(void 0, c()(t.map((function(e) {
                        return e.initialState || {}
                    }))));
                    return {
                        initialState: r,
                        controls: _.apply(void 0, c()(t.map((function(e) {
                            return e.controls || {}
                        })))),
                        actions: O.apply(void 0, c()(t.map((function(e) {
                            return e.actions || {}
                        })))),
                        reducer: S.apply(void 0, [r].concat(c()(t.map((function(e) {
                            return e.reducer || w
                        }))))),
                        resolvers: k.apply(void 0, c()(t.map((function(e) {
                            return e.resolvers || {}
                        })))),
                        selectors: j.apply(void 0, c()(t.map((function(e) {
                            return e.selectors || {}
                        }))))
                    }
                },
                A = {
                    getRegistry: function() {
                        return {
                            payload: {},
                            type: "GET_REGISTRY"
                        }
                    },
                    await: a.a.mark((function e(t) {
                        return a.a.wrap((function(e) {
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
                D = (r = {}, u()(r, "GET_REGISTRY", Object(b.d)((function(e) {
                    return function() {
                        return e
                    }
                }))), u()(r, "AWAIT", (function(e) {
                    return e.payload.value
                })), r),
                P = function(e) {
                    for (var t = [], n = {}, r = 0; r < e.length; r++) {
                        var i = e[r];
                        n[i] = n[i] >= 1 ? n[i] + 1 : 1, n[i] > 1 && t.push(i)
                    }
                    return t
                },
                T = {
                    actions: A,
                    controls: D,
                    reducer: w
                },
                x = function(e) {
                    return function(t) {
                        return C(e(t))
                    }
                },
                C = m()((function(e) {
                    return g()(e, (function(e, t) {
                        return function() {
                            var n = e.apply(void 0, arguments);
                            return d()(void 0 !== n, "".concat(t, "(...) is not resolved")), n
                        }
                    }))
                }));

            function I(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.negate,
                    r = void 0 !== n && n,
                    i = Object(b.e)((function(t) {
                        return function(n) {
                            var i = !r,
                                a = !!r;
                            try {
                                for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) c[s - 1] = arguments[s];
                                return e.apply(void 0, [t, n].concat(c)), i
                            } catch (e) {
                                return a
                            }
                        }
                    })),
                    a = Object(b.e)((function(t) {
                        return function(n) {
                            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                            e.apply(void 0, [t, n].concat(i))
                        }
                    }));
                return {
                    safeSelector: i,
                    dangerousSelector: a
                }
            }

            function L(e, t) {
                return d()("function" == typeof e, "a validator function is required."), d()("function" == typeof t, "an action creator function is required."), d()("Generator" !== e[Symbol.toStringTag] && "GeneratorFunction" !== e[Symbol.toStringTag], "an action’s validator function must not be a generator."),
                    function() {
                        return e.apply(void 0, arguments), t.apply(void 0, arguments)
                    }
            }
        },
        76: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return a
            }));
            var r = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                i = function(e) {
                    return e.replace(/([a-z0-9]{1})([A-Z]{1})/g, "$1_$2").toUpperCase()
                };

            function a(e) {
                return e.split("-").map((function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                })).join("")
            }
        },
        80: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return s
                })), n.d(t, "b", (function() {
                    return u
                })), n.d(t, "c", (function() {
                    return d
                }));
                var r = n(12),
                    i = n.n(r),
                    a = n(1);

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
                                i = function() {};
                            return {
                                s: i,
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
                                f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, o = !0,
                        s = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            s = !0, a = e
                        },
                        f: function() {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw a
                            }
                        }
                    }
                }

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var s = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = null,
                            n = null,
                            r = document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),
                            i = document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");
                        if (r && i) return !1;
                        if (t = document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"), n = document.querySelector("#wp-admin-bar-google-site-kit .ab-item"), null === t && null === n) return !1;
                        var o = document.createElement("span");
                        o.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(e));
                        var c = document.createElement("span");
                        c.setAttribute("class", "plugin-count"), c.setAttribute("aria-hidden", "true"), c.textContent = e;
                        var s = document.createElement("span");
                        return s.setAttribute("class", "screen-reader-text"), s.textContent = Object(a.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(a._n)("%d notification", "%d notifications", e, "google-site-kit"), e), o.appendChild(c), o.appendChild(s), t && null === r && t.appendChild(o), n && null === i && n.appendChild(o), o
                    },
                    u = function() {
                        e.localStorage && e.localStorage.clear(), e.sessionStorage && e.sessionStorage.clear()
                    },
                    l = function(e) {
                        for (var t = location.search.substr(1).split("&"), n = {}, r = 0; r < t.length; r++) n[t[r].split("=")[0]] = decodeURIComponent(t[r].split("=")[1]);
                        return e ? n.hasOwnProperty(e) ? decodeURIComponent(n[e].replace(/\+/g, " ")) : "" : n
                    },
                    d = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                            n = new URL(t.href);
                        if (e) return n.searchParams && n.searchParams.get ? n.searchParams.get(e) : l(e);
                        var r, a = {},
                            c = o(n.searchParams.entries());
                        try {
                            for (c.s(); !(r = c.n()).done;) {
                                var s = i()(r.value, 2),
                                    u = s[0],
                                    d = s[1];
                                a[u] = d
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return a
                    }
            }).call(this, n(18))
        },
        81: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(0),
                    i = n.n(r),
                    a = n(109),
                    o = n(1),
                    c = n(11);

                function ErrorText(t) {
                    var n = t.message,
                        r = t.reconnectURL;
                    if (!n) return null;
                    var i = Object(o.sprintf)(
                        /* translators: %s: Error message */
                        Object(o.__)("Error: %s", "google-site-kit"), n);
                    r && Object(a.a)(r) && (i = i + " " + Object(o.sprintf)(
                        /* translators: %s: Reconnect URL */
                        Object(o.__)('To fix this, <a href="%s">redo the plugin setup</a>.', "google-site-kit"), r));
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
                    return a
                })), n.d(t, "c", (function() {
                    return o
                })), n.d(t, "a", (function() {
                    return c
                }));
                var r = n(194),
                    i = n(62),
                    a = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Number.isNaN(Number(t))) return "";
                        var a = n.invertColor,
                            o = void 0 !== a && a;
                        return Object(r.a)(e.createElement(i.a, {
                            direction: t > 0 ? "up" : "down",
                            invertColor: o
                        }))
                    },
                    o = function(e) {
                        var t, n, r, i, a, o, c, s, u, l, d, f, g, p, m;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (n = t.data) || void 0 === n || null === (r = n.rows) || void 0 === r ? void 0 : r.length) || (null == e || null === (i = e[0]) || void 0 === i || null === (a = i.data) || void 0 === a || null === (o = a.rows) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (s = c.metrics) || void 0 === s || null === (u = s[0]) || void 0 === u || null === (l = u.values) || void 0 === l ? void 0 : l[0]) === (null == e || null === (d = e[0]) || void 0 === d || null === (f = d.data) || void 0 === f || null === (g = f.totals) || void 0 === g || null === (p = g[0]) || void 0 === p || null === (m = p.values) || void 0 === m ? void 0 : m[0])
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
                    return l
                }));
                var r = n(6),
                    i = n.n(r),
                    a = n(87),
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

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(n), !0).forEach((function(t) {
                            i()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var u = {
                    currentUserRoles: [],
                    activeModules: [],
                    trackingEnabled: !1,
                    trackingID: "",
                    referenceSiteURL: "",
                    userIDHash: ""
                };

                function l(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                        i = s(s({}, u), t);
                    i.referenceSiteURL && (i.referenceSiteURL = i.referenceSiteURL.toString().replace(/\/+$/, ""));
                    var c = Object(a.a)(i, n);
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
                        trackEvent: Object(o.a)(i, n, c, r)
                    }
                }
            }).call(this, n(18))
        },
        87: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return a
                }));
                var r = n(51),
                    i = n(28);

                function a(t, n) {
                    var a, o = Object(r.a)(n);
                    return function() {
                        var n = e.document;
                        if (void 0 === a && (a = !!n.querySelector("script[".concat(i.b, "]"))), !a) {
                            var r = n.createElement("script");
                            r.setAttribute(i.b, ""), r.async = !0, r.src = "https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID, "&l=").concat(i.a), n.head.appendChild(r), o("js", new Date), o("config", t.trackingID, {
                                send_page_view: t.isSiteKitScreen
                            }), a = !0
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
                    i = n.n(r),
                    a = n(6),
                    o = n.n(a),
                    c = n(14),
                    s = n.n(c),
                    u = n(51),
                    l = n(30);

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

                function g(t, n, r, a) {
                    var o = Object(u.a)(n);
                    return function() {
                        var n = s()(i.a.mark((function n(c, s, u, d) {
                            var g, p, m, b, v, h, y, O, _, S;
                            return i.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (b = t.activeModules, v = t.referenceSiteURL, h = t.trackingEnabled, y = t.trackingID, O = t.userIDHash, h) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return r(), _ = null !== (g = null === (p = e._googlesitekitUserData) || void 0 === p || null === (m = p.user) || void 0 === m ? void 0 : m.roles) && void 0 !== g ? g : [], S = {
                                            send_to: y,
                                            event_category: c,
                                            event_label: u,
                                            value: d,
                                            dimension1: v,
                                            dimension2: _.join(","),
                                            dimension3: O,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(l.a).join(","),
                                            dimension6: b.join(",")
                                        }, n.abrupt("return", new Promise((function(e) {
                                            var t, n, r = setTimeout((function() {
                                                    a.console.warn('Tracking event "'.concat(s, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                i = function() {
                                                    clearTimeout(r), e()
                                                };
                                            o("event", s, f(f({}, S), {}, {
                                                event_callback: i
                                            })), (null === (t = a._gaUserPrefs) || void 0 === t || null === (n = t.ioo) || void 0 === n ? void 0 : n.call(t)) && i()
                                        })));
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t, r, i) {
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
                i = "insufficientPermissions",
                a = "forbidden";

            function o(e) {
                return (null == e ? void 0 : e.code) === r
            }

            function c(e) {
                var t;
                return [i, a].includes(null == e || null === (t = e.data) || void 0 === t ? void 0 : t.reason)
            }
        },
        93: function(e, t, n) {
            "use strict";
            var r = n(105);
            n.d(t, "a", (function() {
                return r.a
            }));
            var i = n(106);
            n.d(t, "c", (function() {
                return i.a
            }));
            var a = n(107);
            n.d(t, "b", (function() {
                return a.a
            }))
        }
    },
    [
        [1087, 1, 0]
    ]
]);
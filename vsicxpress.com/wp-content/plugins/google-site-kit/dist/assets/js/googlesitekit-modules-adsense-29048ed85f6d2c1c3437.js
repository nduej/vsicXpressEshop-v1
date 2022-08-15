(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [18], {
        1: function(e, t) {
            e.exports = googlesitekit.i18n
        },
        10: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "h", (function() {
                return i
            })), n.d(t, "g", (function() {
                return o
            })), n.d(t, "d", (function() {
                return c
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "k", (function() {
                return l
            })), n.d(t, "c", (function() {
                return u
            })), n.d(t, "b", (function() {
                return d
            })), n.d(t, "s", (function() {
                return m
            })), n.d(t, "r", (function() {
                return g
            })), n.d(t, "t", (function() {
                return f
            })), n.d(t, "p", (function() {
                return p
            })), n.d(t, "q", (function() {
                return b
            })), n.d(t, "n", (function() {
                return y
            })), n.d(t, "o", (function() {
                return v
            })), n.d(t, "l", (function() {
                return h
            })), n.d(t, "m", (function() {
                return E
            })), n.d(t, "j", (function() {
                return A
            })), n.d(t, "i", (function() {
                return S
            }));
            var a = "modules/analytics",
                r = "account_create",
                i = "property_create",
                o = "profile_create",
                c = "analyticsAccountCreate",
                s = "analyticsSetup",
                l = "https://www.googleapis.com/auth/analytics.provision",
                u = "https://www.googleapis.com/auth/analytics.edit",
                d = 1,
                m = "dashboardAllTrafficWidgetDimensionName",
                g = "dashboardAllTrafficWidgetDimensionColor",
                f = "dashboardAllTrafficWidgetDimensionValue",
                p = "dashboardAllTrafficWidgetActiveRowIndex",
                b = "dashboardAllTrafficWidgetLoaded",
                y = "legacy",
                v = "ua",
                h = "ga4",
                E = "ga4-transitional",
                A = "ua",
                S = "ga4"
        },
        100: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return u
            })), n.d(t, "a", (function() {
                return d
            })), n.d(t, "b", (function() {
                return m
            }));
            var a, r = n(6),
                i = n.n(r),
                o = n(34),
                c = n(114),
                s = n(121),
                l = n(122),
                u = (a = {}, i()(a, o.c.QUARTER, 3), i()(a, o.c.HALF, 6), i()(a, o.c.FULL, 12), a),
                d = "googlesitekit-hidden",
                m = [l.a, s.a, c.a]
        },
        103: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(6),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i);

                function c(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function Spinner(t) {
                    var n = t.isSaving,
                        a = t.style,
                        r = void 0 === a ? {} : a;
                    return e.createElement("span", {
                        className: "spinner",
                        style: s({
                            display: n ? "inline-block" : "none",
                            float: "none",
                            marginTop: "0",
                            visibility: "visible"
                        }, r)
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
                var a = n(16),
                    r = n.n(a),
                    i = n(6),
                    o = n.n(i),
                    c = n(17),
                    s = n.n(c),
                    l = n(0),
                    u = n.n(l),
                    d = n(8),
                    m = n.n(d);

                function Cell(t) {
                    var n, a = t.className,
                        i = t.alignTop,
                        c = t.alignMiddle,
                        l = t.alignBottom,
                        u = t.alignRight,
                        d = t.alignLeft,
                        g = t.smAlignRight,
                        f = t.mdAlignRight,
                        p = t.lgAlignRight,
                        b = t.smSize,
                        y = t.smStart,
                        v = t.smOrder,
                        h = t.mdSize,
                        E = t.mdStart,
                        A = t.mdOrder,
                        S = t.lgSize,
                        _ = t.lgStart,
                        T = t.lgOrder,
                        O = t.size,
                        k = t.children,
                        I = s()(t, ["className", "alignTop", "alignMiddle", "alignBottom", "alignRight", "alignLeft", "smAlignRight", "mdAlignRight", "lgAlignRight", "smSize", "smStart", "smOrder", "mdSize", "mdStart", "mdOrder", "lgSize", "lgStart", "lgOrder", "size", "children"]);
                    return e.createElement("div", r()({}, I, {
                        className: m()(a, "mdc-layout-grid__cell", (n = {
                            "mdc-layout-grid__cell--align-top": i,
                            "mdc-layout-grid__cell--align-middle": c,
                            "mdc-layout-grid__cell--align-bottom": l,
                            "mdc-layout-grid__cell--align-right": u,
                            "mdc-layout-grid__cell--align-left": d,
                            "mdc-layout-grid__cell--align-right-phone": g,
                            "mdc-layout-grid__cell--align-right-tablet": f,
                            "mdc-layout-grid__cell--align-right-desktop": p
                        }, o()(n, "mdc-layout-grid__cell--span-".concat(O), 12 >= O && O > 0), o()(n, "mdc-layout-grid__cell--span-".concat(S, "-desktop"), 12 >= S && S > 0), o()(n, "mdc-layout-grid__cell--start-".concat(_, "-desktop"), 12 >= _ && _ > 0), o()(n, "mdc-layout-grid__cell--order-".concat(T, "-desktop"), 12 >= T && T > 0), o()(n, "mdc-layout-grid__cell--span-".concat(h, "-tablet"), 8 >= h && h > 0), o()(n, "mdc-layout-grid__cell--start-".concat(E, "-tablet"), 8 >= E && E > 0), o()(n, "mdc-layout-grid__cell--order-".concat(A, "-tablet"), 8 >= A && A > 0), o()(n, "mdc-layout-grid__cell--span-".concat(b, "-phone"), 4 >= b && b > 0), o()(n, "mdc-layout-grid__cell--start-".concat(y, "-phone"), 4 >= y && y > 0), o()(n, "mdc-layout-grid__cell--order-".concat(v, "-phone"), 4 >= v && v > 0), n))
                    }), k)
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
                var a = n(16),
                    r = n.n(a),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(8),
                    u = n.n(l);

                function Row(t) {
                    var n = t.className,
                        a = t.children,
                        i = o()(t, ["className", "children"]);
                    return e.createElement("div", r()({
                        className: u()("mdc-layout-grid__inner", n)
                    }, i), a)
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
                var a = n(16),
                    r = n.n(a),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(8),
                    u = n.n(l),
                    d = n(2),
                    m = Object(d.forwardRef)((function(t, n) {
                        var a = t.alignLeft,
                            i = t.fill,
                            c = t.className,
                            s = t.children,
                            l = o()(t, ["alignLeft", "fill", "className", "children"]);
                        return e.createElement("div", r()({
                            className: u()("mdc-layout-grid", c, {
                                "mdc-layout-grid--align-left": a,
                                "mdc-layout-grid--fill": i
                            })
                        }, l, {
                            ref: n
                        }), s)
                    }));
                m.propTypes = {
                    alignLeft: s.a.bool,
                    fill: s.a.bool,
                    className: s.a.string,
                    children: s.a.node
                }, m.defaultProps = {
                    className: ""
                }, t.a = m
            }).call(this, n(3))
        },
        1080: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n(4),
                i = n.n(r),
                o = n(136),
                c = n.n(o),
                s = n(301),
                l = n.n(s),
                u = n(5),
                d = n.n(u),
                m = n(14),
                g = n.n(m),
                f = n(1),
                p = n(115),
                b = (n(500), n(504), n(505), n(506), n(507), n(508), n(659)),
                y = (n(509), n(445), n(497)),
                v = (n(660), n(510), n(515), n(516), n(512), n(513), n(514), n(511), n(661)),
                h = (n(517), n(662)),
                E = n(663),
                A = (n(518), n(664)),
                S = n(670),
                _ = n(671),
                T = n(672),
                O = n(519),
                k = n(673),
                I = n(379),
                N = n(27),
                j = n(311),
                C = n(34),
                D = n(30),
                w = n(6),
                R = n.n(w),
                P = n(9),
                M = n.n(P),
                Z = n(157),
                L = n(210),
                G = n(73);

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var B = i.a.commonActions,
                F = i.a.createRegistryControl,
                W = {
                    originalAccountStatus: void 0,
                    originalUseSnippet: void 0
                },
                H = {
                    completeAccountSetup: d.a.mark((function e() {
                        var t;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, {
                                        payload: {},
                                        type: "COMPLETE_ACCOUNT_SETUP"
                                    };
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    completeSiteSetup: d.a.mark((function e() {
                        var t;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, {
                                        payload: {},
                                        type: "COMPLETE_SITE_SETUP"
                                    };
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    receiveOriginalAccountStatus: function(e) {
                        return M()(e, "originalAccountStatus is required."), {
                            payload: {
                                originalAccountStatus: e
                            },
                            type: "RECEIVE_ORIGINAL_ACCOUNT_STATUS"
                        }
                    },
                    receiveOriginalUseSnippet: function(e) {
                        return M()(e, "originalUseSnippet is required."), {
                            payload: {
                                originalUseSnippet: e
                            },
                            type: "RECEIVE_ORIGINAL_USE_SNIPPET"
                        }
                    }
                },
                q = (a = {}, R()(a, "COMPLETE_ACCOUNT_SETUP", F((function(e) {
                    return g()(d.a.mark((function t() {
                        var n;
                        return d.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.dispatch(N.b).setAccountSetupComplete(!0);
                                case 2:
                                    if (e.select(N.b).canSubmitChanges()) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 5, e.dispatch(N.b).setAccountSetupComplete(!1);
                                case 5:
                                    return t.abrupt("return", !1);
                                case 6:
                                    return t.next = 8, e.dispatch(N.b).submitChanges();
                                case 8:
                                    if (n = t.sent, !n.error) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 13, e.dispatch(N.b).setAccountSetupComplete(!1);
                                case 13:
                                    return t.abrupt("return", !1);
                                case 14:
                                    return t.abrupt("return", !0);
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }))), R()(a, "COMPLETE_SITE_SETUP", F((function(e) {
                    return g()(d.a.mark((function t() {
                        var n;
                        return d.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.dispatch(N.b).setSiteSetupComplete(!0);
                                case 2:
                                    if (e.select(N.b).canSubmitChanges()) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.next = 5, e.dispatch(N.b).setSiteSetupComplete(!1);
                                case 5:
                                    return t.abrupt("return", !1);
                                case 6:
                                    return t.next = 8, e.dispatch(N.b).submitChanges();
                                case 8:
                                    if (n = t.sent, !n.error) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 13, e.dispatch(N.b).setSiteSetupComplete(!1);
                                case 13:
                                    return t.abrupt("return", !1);
                                case 14:
                                    return t.abrupt("return", !0);
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }))), a),
                K = {
                    getOriginalAccountStatus: d.a.mark((function e() {
                        var t;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, B.getRegistry();
                                case 2:
                                    if (t = e.sent, void 0 === t.select(N.b).getOriginalAccountStatus()) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    t.select(N.b).getSettings();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    getOriginalUseSnippet: d.a.mark((function e() {
                        var t;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, B.getRegistry();
                                case 2:
                                    if (t = e.sent, void 0 === t.select(N.b).getOriginalUseSnippet()) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    t.select(N.b).getSettings();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                z = {
                    isDoingSaveUseSnippet: function(e) {
                        return Object.values(e.isFetchingSaveUseSnippet).some(Boolean)
                    },
                    getOriginalAccountStatus: function(e) {
                        return e.originalAccountStatus
                    },
                    getOriginalUseSnippet: function(e) {
                        return e.originalUseSnippet
                    }
                };
            var V = i.a.combineStores({
                    initialState: W,
                    actions: H,
                    controls: q,
                    reducer: function(e, t) {
                        var n = t.type,
                            a = t.payload;
                        switch (n) {
                            case "RECEIVE_ORIGINAL_ACCOUNT_STATUS":
                                var r = a.originalAccountStatus;
                                return U(U({}, e), {}, {
                                    originalAccountStatus: r
                                });
                            case "RECEIVE_ORIGINAL_USE_SNIPPET":
                                var i = a.originalUseSnippet;
                                return U(U({}, e), {}, {
                                    originalUseSnippet: i
                                });
                            case "RECEIVE_GET_SETTINGS":
                                var o = a.response,
                                    c = o.accountStatus,
                                    s = o.useSnippet;
                                return U(U(U({}, e), void 0 === e.originalAccountStatus && {
                                    originalAccountStatus: c
                                }), void 0 === e.originalUseSnippet && {
                                    originalUseSnippet: s
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: K,
                    selectors: z
                }),
                Y = (V.initialState, V.actions, V.controls, V.reducer, V.resolvers, V.selectors, V),
                $ = c.a.createModuleStore("adsense", {
                    storeName: N.b,
                    settingSlugs: ["accountID", "clientID", "useSnippet", "accountStatus", "siteStatus", "accountSetupComplete", "siteSetupComplete", "ownerID", "webStoriesAdUnit", "autoAdsDisabled"],
                    adminPage: Object(D.b)("unifiedDashboard") ? void 0 : "googlesitekit-module-adsense",
                    validateCanSubmitChanges: function(e) {
                        var t = Object(G.e)(e)(N.b),
                            n = t.getAccountID,
                            a = t.getClientID,
                            r = t.getAccountStatus,
                            i = t.haveSettingsChanged,
                            o = t.isDoingSubmitChanges;
                        M()(!o(), Z.a), M()(i(), Z.b), M()(r(), "require an account status to be present");
                        var c = n();
                        M()("" === c || Object(L.b)(c), "require account ID to be either empty (if impossible to determine) or valid");
                        var s = a();
                        M()("" === s || Object(L.c)(s), "require client ID to be either empty (if impossible to determine) or valid")
                    },
                    validateIsSetupBlocked: function(e) {
                        if (e(N.b).isAdBlockerActive()) throw new Error("Ad blocker detected")
                    }
                }),
                J = n(23),
                Q = n.n(J),
                X = n(33),
                ee = n.n(X),
                te = n(45),
                ne = n(54);

            function ae(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ae(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ie = Object(te.a)({
                    baseName: "getAccounts",
                    controlCallback: function() {
                        return ee.a.get("modules", "adsense", "accounts", void 0, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t) {
                        return re(re({}, e), {}, {
                            accounts: Q()(t)
                        })
                    }
                }),
                oe = {
                    accounts: void 0
                },
                ce = {
                    resetAccounts: d.a.mark((function e() {
                        var t, n;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    return t = e.sent, n = t.dispatch, e.next = 6, {
                                        payload: {},
                                        type: "RESET_ACCOUNTS"
                                    };
                                case 6:
                                    return e.next = 8, ne.a.clearErrors("getAccounts");
                                case 8:
                                    return e.abrupt("return", n(N.b).invalidateResolutionForStoreSelector("getAccounts"));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                se = {
                    getAccounts: d.a.mark((function e() {
                        var t;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    if (t = e.sent, !t.select(N.b).getAccounts()) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return e.next = 8, ie.actions.fetchGetAccounts();
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                le = i.a.combineStores(ie, {
                    initialState: oe,
                    actions: ce,
                    reducer: function(e, t) {
                        switch (t.type) {
                            case "RESET_ACCOUNTS":
                                var n = e.savedSettings || {},
                                    a = n.accountID,
                                    r = n.clientID,
                                    i = n.accountStatus,
                                    o = n.siteStatus,
                                    c = n.accountSetupComplete,
                                    s = n.siteSetupComplete;
                                return re(re({}, e), {}, {
                                    accounts: oe.accounts,
                                    settings: re(re({}, e.settings || {}), {}, {
                                        accountID: a,
                                        clientID: r,
                                        accountStatus: i,
                                        siteStatus: o,
                                        accountSetupComplete: c,
                                        siteSetupComplete: s
                                    })
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: se,
                    selectors: {
                        getAccounts: function(e) {
                            return e.accounts
                        }
                    }
                }),
                ue = (le.initialState, le.actions, le.controls, le.reducer, le.resolvers, le.selectors, le);

            function de(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? de(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ge = Object(te.a)({
                    baseName: "getAdUnits",
                    controlCallback: function(e) {
                        var t = e.accountID,
                            n = e.clientID;
                        return ee.a.get("modules", "adsense", "adunits", {
                            accountID: t,
                            clientID: n
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.accountID,
                            r = n.clientID;
                        return me(me({}, e), {}, {
                            adunits: me(me({}, e.adunits), {}, R()({}, "".concat(a, "::").concat(r), t))
                        })
                    },
                    argsToParams: function(e, t) {
                        return {
                            accountID: e,
                            clientID: t
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID,
                            n = e.clientID;
                        M()(t, "accountID is required."), M()(n, "clientID is required.")
                    }
                }),
                fe = {
                    getAdUnits: d.a.mark((function e(t, n) {
                        var a;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (void 0 !== t && void 0 !== n) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, i.a.commonActions.getRegistry();
                                case 4:
                                    if (a = e.sent, !a.select(N.b).getAdUnits(t, n)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    return e.next = 10, ge.actions.fetchGetAdUnits(t, n);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                pe = {
                    getAdUnits: function(e, t, n) {
                        if (void 0 !== t && void 0 !== n) return e.adunits["".concat(t, "::").concat(n)]
                    }
                },
                be = i.a.combineStores(ge, {
                    initialState: {
                        adunits: {}
                    },
                    actions: {},
                    reducer: function(e, t) {
                        t.type;
                        return e
                    },
                    resolvers: fe,
                    selectors: pe
                }),
                ye = (be.initialState, be.actions, be.controls, be.reducer, be.resolvers, be.selectors, be);

            function ve(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function he(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ee = Object(te.a)({
                    baseName: "getAlerts",
                    controlCallback: function(e) {
                        var t = e.accountID;
                        return ee.a.get("modules", "adsense", "alerts", {
                            accountID: t
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.accountID;
                        return he(he({}, e), {}, {
                            alerts: he(he({}, e.alerts), {}, R()({}, a, Q()(t)))
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            accountID: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID;
                        M()(t, "accountID is required.")
                    }
                }),
                Ae = {
                    resetAlerts: d.a.mark((function e() {
                        var t, n;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    return t = e.sent, n = t.dispatch, e.next = 6, {
                                        payload: {},
                                        type: "RESET_ALERTS"
                                    };
                                case 6:
                                    return e.next = 8, ne.a.clearErrors("getAlerts");
                                case 8:
                                    return e.abrupt("return", n(N.b).invalidateResolutionForStoreSelector("getAlerts"));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                Se = {
                    getAlerts: d.a.mark((function e(t) {
                        var n;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (void 0 !== t && Object(L.b)(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, i.a.commonActions.getRegistry();
                                case 4:
                                    if (n = e.sent, !n.select(N.b).getAlerts(t)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    return e.next = 10, Ee.actions.fetchGetAlerts(t);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                _e = {
                    getAlerts: function(e, t) {
                        if (void 0 !== t) return e.alerts[t]
                    }
                },
                Te = i.a.combineStores(Ee, {
                    initialState: {
                        alerts: {}
                    },
                    actions: Ae,
                    reducer: function(e, t) {
                        switch (t.type) {
                            case "RESET_ALERTS":
                                var n = e.savedSettings || {},
                                    a = n.accountStatus,
                                    r = n.siteStatus,
                                    i = n.accountSetupComplete,
                                    o = n.siteSetupComplete;
                                return he(he({}, e), {}, {
                                    alerts: Oe.alerts,
                                    settings: he(he({}, e.settings || {}), {}, {
                                        accountStatus: a,
                                        siteStatus: r,
                                        accountSetupComplete: i,
                                        siteSetupComplete: o
                                    })
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: Se,
                    selectors: _e
                }),
                Oe = Te.initialState,
                ke = (Te.actions, Te.controls, Te.reducer, Te.resolvers, Te.selectors, Te);

            function Ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ie(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var je = Object(te.a)({
                    baseName: "getClients",
                    controlCallback: function(e) {
                        var t = e.accountID;
                        return ee.a.get("modules", "adsense", "clients", {
                            accountID: t
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.accountID;
                        return Ne(Ne({}, e), {}, {
                            clients: Ne(Ne({}, e.clients), {}, R()({}, a, Q()(t)))
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            accountID: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID;
                        M()(t, "accountID is required.")
                    }
                }),
                Ce = {
                    resetClients: d.a.mark((function e() {
                        var t, n;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    return t = e.sent, n = t.dispatch, e.next = 6, {
                                        payload: {},
                                        type: "RESET_CLIENTS"
                                    };
                                case 6:
                                    return e.next = 8, ne.a.clearErrors("getClients");
                                case 8:
                                    return e.abrupt("return", n(N.b).invalidateResolutionForStoreSelector("getClients"));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                De = {
                    getClients: d.a.mark((function e(t) {
                        var n;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (void 0 !== t && Object(L.b)(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, i.a.commonActions.getRegistry();
                                case 4:
                                    if (n = e.sent, !n.select(N.b).getClients(t)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    return e.next = 10, je.actions.fetchGetClients(t);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                we = {
                    getClients: function(e, t) {
                        if (void 0 !== t) return e.clients[t]
                    }
                },
                Re = i.a.combineStores(je, {
                    initialState: {
                        clients: {}
                    },
                    actions: Ce,
                    reducer: function(e, t) {
                        switch (t.type) {
                            case "RESET_CLIENTS":
                                var n = e.savedSettings || {},
                                    a = n.clientID,
                                    r = n.accountStatus,
                                    i = n.siteStatus,
                                    o = n.accountSetupComplete,
                                    c = n.siteSetupComplete;
                                return Ne(Ne({}, e), {}, {
                                    clients: Pe.clients,
                                    settings: Ne(Ne({}, e.settings || {}), {}, {
                                        clientID: a,
                                        accountStatus: r,
                                        siteStatus: i,
                                        accountSetupComplete: o,
                                        siteSetupComplete: c
                                    })
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: De,
                    selectors: we
                }),
                Pe = Re.initialState,
                Me = (Re.actions, Re.controls, Re.reducer, Re.resolvers, Re.selectors, Re),
                Ze = n(57),
                Le = n.n(Ze),
                Ge = n(11),
                xe = n(285),
                Ue = n(429),
                Be = n.n(Ue),
                Fe = ["ACTIVE_VIEW_MEASURABILITY", "ACTIVE_VIEW_TIME", "ACTIVE_VIEW_VIEWABILITY", "AD_REQUESTS_COVERAGE", "AD_REQUESTS_CTR", "AD_REQUESTS_RPM", "AD_REQUESTS_SPAM_RATIO", "AD_REQUESTS", "ADS_PER_IMPRESSION", "CLICKS_SPAM_RATIO", "CLICKS", "COST_PER_CLICK", "ESTIMATED_EARNINGS", "IMPRESSIONS_CTR", "IMPRESSIONS_RPM", "IMPRESSIONS_SPAM_RATIO", "IMPRESSIONS", "INDIVIDUAL_AD_IMPRESSIONS_CTR", "INDIVIDUAL_AD_IMPRESSIONS_RPM", "INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO", "INDIVIDUAL_AD_IMPRESSIONS", "MATCHED_AD_REQUESTS_CTR", "MATCHED_AD_REQUESTS_RPM", "MATCHED_AD_REQUESTS_SPAM_RATIO", "MATCHED_AD_REQUESTS", "METRIC_UNSPECIFIED", "PAGE_VIEWS_CTR", "PAGE_VIEWS_RPM", "PAGE_VIEWS_SPAM_RATIO", "PAGE_VIEWS", "TOTAL_EARNINGS", "TOTAL_IMPRESSIONS", "WEBSEARCH_RESULT_PAGES"],
                We = ["ACCOUNT_NAME", "AD_CLIENT_ID", "AD_FORMAT_CODE", "AD_FORMAT_NAME", "AD_PLACEMENT_CODE", "AD_PLACEMENT_NAME", "AD_UNIT_ID", "AD_UNIT_NAME", "AD_UNIT_SIZE_CODE", "AD_UNIT_SIZE_NAME", "BID_TYPE_CODE", "BID_TYPE_NAME", "BUYER_NETWORK_ID", "BUYER_NETWORK_NAME", "CONTENT_PLATFORM_CODE", "CONTENT_PLATFORM_NAME", "COUNTRY_CODE", "COUNTRY_NAME", "CREATIVE_SIZE_CODE", "CREATIVE_SIZE_NAME", "CUSTOM_CHANNEL_ID", "CUSTOM_CHANNEL_NAME", "CUSTOM_SEARCH_STYLE_ID", "CUSTOM_SEARCH_STYLE_NAME", "DATE", "DIMENSION_UNSPECIFIED", "DOMAIN_CODE", "DOMAIN_NAME", "DOMAIN_REGISTRANT", "MONTH", "OWNED_SITE_DOMAIN_NAME", "OWNED_SITE_ID", "PLATFORM_TYPE_CODE", "PLATFORM_TYPE_NAME", "PRODUCT_CODE", "PRODUCT_NAME", "REQUESTED_AD_TYPE_CODE", "REQUESTED_AD_TYPE_NAME", "SERVED_AD_TYPE_CODE", "SERVED_AD_TYPE_NAME", "TARGETING_TYPE_CODE", "TARGETING_TYPE_NAME", "URL_CHANNEL_ID", "URL_CHANNEL_NAME", "WEBSEARCH_QUERY_STRING", "WEEK"];

            function He(e) {
                var t = Be()(e);
                M()(t.length, "at least one metric is required.");
                var n = t.filter((function(e) {
                    return !Fe.includes(e)
                }));
                M()(0 === n.length, "invalid AdSense metrics requested: ".concat(n.toString()))
            }

            function qe(e) {
                var t = Be()(e);
                M()(t.length, "at least one dimension is required.");
                var n = t.filter((function(e) {
                    return !We.includes(e)
                }));
                M()(0 === n.length, "invalid AdSense dimensions requested: ".concat(n.toString()))
            }

            function Ke(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ke(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ve = Object(te.a)({
                    baseName: "getReport",
                    controlCallback: function(e) {
                        var t = e.options;
                        return ee.a.get("modules", "adsense", "earnings", t)
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.options;
                        return ze(ze({}, e), {}, {
                            reports: ze(ze({}, e.reports), {}, R()({}, Object(Ge.v)(a), t))
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
                        M()(Le()(t), "options must be an object."), M()("today" === t.dateRange || Object(xe.a)(t), "Either date range or start/end dates must be provided for AdSense report.");
                        var n = t.orderby,
                            a = t.metrics,
                            r = t.dimensions;
                        M()(Object(xe.d)(a), "Metrics for an AdSense report must be either a string or an array of strings."), He(a), r && (M()(Object(xe.d)(r), "Dimensions for an AdSense report must be either a string or an array of strings."), qe(r)), n && M()(Object(xe.b)(n), 'Orders for an AdSense report must be either an object or an array of objects where each object should have "fieldName" and "sortOrder" properties.')
                    }
                }),
                Ye = {
                    getReport: d.a.mark((function e() {
                        var t, n, a = arguments;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, e.next = 3, i.a.commonActions.getRegistry();
                                case 3:
                                    if (n = e.sent, !n.select(N.b).getReport(t)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return e.next = 9, Ve.actions.fetchGetReport(t);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                $e = {
                    getReport: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.reports;
                        return n[Object(Ge.v)(t)]
                    }
                },
                Je = i.a.combineStores(Ve, {
                    initialState: {
                        reports: {}
                    },
                    resolvers: Ye,
                    selectors: $e
                }),
                Qe = (Je.initialState, Je.actions, Je.controls, Je.reducer, Je.resolvers, Je.selectors, Je),
                Xe = n(322);

            function et(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? et(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : et(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var nt = i.a.commonActions,
                at = i.a.createRegistrySelector,
                rt = Object(te.a)({
                    baseName: "getTagPermission",
                    controlCallback: function(e) {
                        var t = e.clientID;
                        return ee.a.get("modules", "adsense", "tag-permission", {
                            clientID: t
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = t.accountID,
                            r = t.permission,
                            i = n.clientID;
                        return tt(tt({}, e), {}, {
                            tagPermissions: tt(tt({}, e.tagPermissions || {}), {}, R()({}, i, {
                                accountID: a,
                                permission: r
                            }))
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            clientID: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.clientID;
                        M()(t, "clientID is required.")
                    }
                }),
                it = Object(Xe.a)({
                    storeName: N.b,
                    tagMatchers: [/google_ad_client: ?["|'](.*?)["|']/, /<(?:script|amp-auto-ads) [^>]*data-ad-client="([^"]+)"/],
                    isValidTag: L.c
                }),
                ot = {
                    getTagPermission: d.a.mark((function e(t) {
                        var n;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (void 0 !== t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, nt.getRegistry();
                                case 4:
                                    if (n = e.sent, void 0 === n.select(N.b).getTagPermission(t)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    return e.next = 10, rt.actions.fetchGetTagPermission(t);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                ct = {
                    hasExistingTagPermission: at((function(e) {
                        return function() {
                            var t = e(N.b).hasExistingTag();
                            if (void 0 !== t) {
                                if (t) {
                                    var n = e(N.b).getExistingTag();
                                    return e(N.b).hasTagPermission(n)
                                }
                                return null
                            }
                        }
                    })),
                    hasTagPermission: at((function(e) {
                        return function(t, n) {
                            return (e(N.b).getTagPermission(n) || {}).permission
                        }
                    })),
                    getTagPermission: function(e, t) {
                        return e.tagPermissions[t]
                    }
                },
                st = i.a.combineStores(it, rt, {
                    initialState: {
                        tagPermissions: {}
                    },
                    resolvers: ot,
                    selectors: ct
                }),
                lt = (st.initialState, st.actions, st.controls, st.reducer, st.resolvers, st.selectors, st);

            function ut(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function dt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ut(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ut(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var mt = Object(te.a)({
                    baseName: "getURLChannels",
                    controlCallback: function(e) {
                        var t = e.accountID,
                            n = e.clientID;
                        return ee.a.get("modules", "adsense", "urlchannels", {
                            accountID: t,
                            clientID: n
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.accountID,
                            r = n.clientID;
                        return dt(dt({}, e), {}, {
                            urlchannels: dt(dt({}, e.urlchannels), {}, R()({}, "".concat(a, "::").concat(r), Q()(t)))
                        })
                    },
                    argsToParams: function(e, t) {
                        return {
                            accountID: e,
                            clientID: t
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID,
                            n = e.clientID;
                        M()(t, "accountID is required."), M()(n, "clientID is required.")
                    }
                }),
                gt = {
                    resetURLChannels: d.a.mark((function e() {
                        var t, n;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    return t = e.sent, n = t.dispatch, e.next = 6, {
                                        payload: {},
                                        type: "RESET_URLCHANNELS"
                                    };
                                case 6:
                                    return e.next = 8, ne.a.clearErrors("getURLChannels");
                                case 8:
                                    return e.abrupt("return", n(N.b).invalidateResolutionForStoreSelector("getURLChannels"));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                ft = {
                    getURLChannels: d.a.mark((function e(t, n) {
                        var a, r, o;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (void 0 !== t && void 0 !== n) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, i.a.commonActions.getRegistry();
                                case 4:
                                    if (a = e.sent, !a.select(N.b).getURLChannels(t, n)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    return e.next = 10, mt.actions.fetchGetURLChannels(t, n);
                                case 10:
                                    if (r = e.sent, !(o = r.error)) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.next = 15, ne.a.receiveError(o, "getURLChannels", [t, n]);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                pt = {
                    getURLChannels: function(e, t, n) {
                        if (void 0 !== t && void 0 !== n) return e.urlchannels["".concat(t, "::").concat(n)]
                    }
                },
                bt = i.a.combineStores(mt, {
                    initialState: {
                        urlchannels: {}
                    },
                    actions: gt,
                    reducer: function(e, t) {
                        switch (t.type) {
                            case "RESET_URLCHANNELS":
                                var n = e.savedSettings || {},
                                    a = n.siteStatus,
                                    r = n.siteSetupComplete;
                                return dt(dt({}, e), {}, {
                                    urlchannels: yt.urlchannels,
                                    settings: dt(dt({}, e.settings || {}), {}, {
                                        siteStatus: a,
                                        siteSetupComplete: r
                                    })
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: ft,
                    selectors: pt
                }),
                yt = bt.initialState,
                vt = (bt.actions, bt.controls, bt.reducer, bt.resolvers, bt.selectors, bt),
                ht = n(754),
                Et = n(22);

            function At(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function St(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? At(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _t = {
                    isAdBlockerActive: void 0
                },
                Tt = {
                    checkAdBlocker: d.a.mark((function e() {
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, {
                                        payload: {},
                                        type: "CHECK_ADBLOCKER"
                                    };
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    receiveIsAdBlockerActive: function(e) {
                        return M()("boolean" == typeof e, "isAdBlockerActive must be boolean."), {
                            payload: {
                                isAdBlockerActive: e
                            },
                            type: "RECEIVE_IS_ADBLOCKER_ACTIVE"
                        }
                    }
                },
                Ot = R()({}, "CHECK_ADBLOCKER", g()(d.a.mark((function e() {
                    var t;
                    return d.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Object(ht.detectAnyAdblocker)();
                            case 2:
                                if (!e.sent) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", !0);
                            case 4:
                                return e.prev = 4, t = ["google-site-kit=/adsense/pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", "timestamp=".concat(Date.now())], e.next = 8, fetch("/favicon.ico?".concat(t.join("&")), {
                                    credentials: "omit",
                                    redirect: "manual"
                                });
                            case 8:
                                e.next = 13;
                                break;
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(4), e.abrupt("return", !0);
                            case 13:
                                return e.abrupt("return", !1);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [4, 10]
                    ])
                })))),
                kt = {
                    isAdBlockerActive: d.a.mark((function() {
                        var e, t, n;
                        return d.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    if (e = a.sent, t = e.select(N.b).isAdBlockerActive(), void 0 === t) {
                                        a.next = 6;
                                        break
                                    }
                                    return a.abrupt("return");
                                case 6:
                                    return a.next = 8, Tt.checkAdBlocker();
                                case 8:
                                    return n = a.sent, a.next = 11, Tt.receiveIsAdBlockerActive(n);
                                case 11:
                                case "end":
                                    return a.stop()
                            }
                        }), t)
                    }))
                },
                It = {
                    isAdBlockerActive: function(e) {
                        var t = e.isAdBlockerActive;
                        return t
                    },
                    getAdBlockerWarningMessage: i.a.createRegistrySelector((function(e) {
                        return function() {
                            var t = e(N.b).isAdBlockerActive();
                            if (void 0 !== t) return t ? e(Et.a).isModuleConnected("adsense") ? Object(f.__)("Ad blocker detected; please disable it to get the latest AdSense data", "google-site-kit") : Object(f.__)("Ad blocker detected; please disable it to set up AdSense", "google-site-kit") : null
                        }
                    }))
                },
                Nt = {
                    initialState: _t,
                    actions: Tt,
                    controls: Ot,
                    reducer: function(e, t) {
                        var n = t.payload;
                        switch (t.type) {
                            case "RECEIVE_IS_ADBLOCKER_ACTIVE":
                                var a = n.isAdBlockerActive;
                                return St(St({}, e), {}, {
                                    isAdBlockerActive: a
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: kt,
                    selectors: It
                },
                jt = n(287),
                Ct = n(13),
                Dt = n(15),
                wt = n(396);

            function Rt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Rt(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Mt = i.a.createRegistrySelector,
                Zt = {
                    selectors: {
                        getServiceURL: Mt((function(e) {
                            return function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    a = n.path,
                                    r = n.query,
                                    i = e(Ct.a).getEmail();
                                if (void 0 !== i) {
                                    var o = "https://www.google.com/adsense/new/u/0",
                                        c = r ? Pt(Pt({}, r), {}, {
                                            authuser: i
                                        }) : {
                                            authuser: i
                                        };
                                    if (a) {
                                        var s = "/".concat(a.replace(/^\//, ""));
                                        return Object(jt.a)("".concat(o).concat(s), c)
                                    }
                                    return Object(jt.a)(o, c)
                                }
                            }
                        })),
                        getServiceCreateAccountURL: Mt((function(e) {
                            return function() {
                                var t = e(Dt.c).getReferenceSiteURL(),
                                    n = {
                                        source: "site-kit",
                                        utm_source: "site-kit",
                                        utm_medium: "wordpress_signup"
                                    };
                                return void 0 !== t && (n.url = t), Object(jt.a)("https://www.google.com/adsense/signup", n)
                            }
                        })),
                        getServiceAccountURL: Mt((function(e) {
                            return function() {
                                var t = e(N.b).getAccountID();
                                if (void 0 !== t) {
                                    var n = "".concat(t, "/home");
                                    return e(N.b).getServiceURL({
                                        path: n,
                                        query: {
                                            source: "site-kit"
                                        }
                                    })
                                }
                            }
                        })),
                        getServiceAccountSiteURL: Mt((function(e) {
                            return function() {
                                var t = e(N.b).getAccountID(),
                                    n = e(Dt.c).getReferenceSiteURL();
                                if (void 0 !== t && void 0 !== n) {
                                    var a = "".concat(t, "/home"),
                                        r = {
                                            source: "site-kit",
                                            url: Object(wt.a)(n) || n
                                        };
                                    return e(N.b).getServiceURL({
                                        path: a,
                                        query: r
                                    })
                                }
                            }
                        })),
                        getServiceReportURL: Mt((function(e) {
                            return function(t, n) {
                                var a = e(N.b).getAccountID();
                                if (void 0 !== a) {
                                    var r = Pt({}, n),
                                        i = e(Dt.c).getReferenceSiteURL(),
                                        o = i && Object(wt.a)(i);
                                    o && (r.dd = "1YsiteY1Y".concat(o, "Y").concat(o));
                                    var c = "".concat(a, "/reporting");
                                    return e(N.b).getServiceURL({
                                        path: c,
                                        query: r
                                    })
                                }
                            }
                        })),
                        getServiceAccountManageSiteURL: Mt((function(e) {
                            return function() {
                                var t = e(N.b).getAccountID(),
                                    n = e(Dt.c).getReferenceSiteURL();
                                if (void 0 !== t && void 0 !== n) {
                                    var a = "".concat(t, "/sites/my-sites"),
                                        r = {
                                            source: "site-kit",
                                            url: Object(wt.a)(n) || n
                                        };
                                    return e(N.b).getServiceURL({
                                        path: a,
                                        query: r
                                    })
                                }
                            }
                        })),
                        getServiceAccountManageSitesURL: Mt((function(e) {
                            return function() {
                                var t = e(N.b).getAccountID();
                                if (void 0 !== t) {
                                    var n = "".concat(t, "/sites/my-sites");
                                    return e(N.b).getServiceURL({
                                        path: n,
                                        query: {
                                            source: "site-kit"
                                        }
                                    })
                                }
                            }
                        })),
                        getServiceAccountSiteAdsPreviewURL: Mt((function(e) {
                            return function() {
                                var t = e(N.b).getAccountID(),
                                    n = e(Dt.c).getReferenceSiteURL();
                                if (void 0 !== t && void 0 !== n) {
                                    var a = "".concat(t, "/myads/sites/preview"),
                                        r = {
                                            source: "site-kit",
                                            url: Object(wt.a)(n) || n
                                        };
                                    return e(N.b).getServiceURL({
                                        path: a,
                                        query: r
                                    })
                                }
                            }
                        }))
                    }
                };

            function Lt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Gt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Lt(Object(n), !0).forEach((function(t) {
                        R()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var xt, Ut, Bt = i.a.createRegistrySelector,
                Ft = Object(te.a)({
                    baseName: "getSites",
                    controlCallback: function(e) {
                        var t = e.accountID;
                        return ee.a.get("modules", "adsense", "sites", {
                            accountID: t
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.accountID;
                        return Gt(Gt({}, e), {}, {
                            sites: Gt(Gt({}, e.sites), {}, R()({}, a, Q()(t)))
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            accountID: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID;
                        M()(t, "accountID is required.")
                    }
                }),
                Wt = {
                    resetSites: d.a.mark((function e() {
                        var t, n;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    return t = e.sent, n = t.dispatch, e.next = 6, {
                                        payload: {},
                                        type: "RESET_SITES"
                                    };
                                case 6:
                                    return e.next = 8, ne.a.clearErrors("getSites");
                                case 8:
                                    return e.abrupt("return", n(N.b).invalidateResolutionForStoreSelector("getSites"));
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                Ht = {
                    getSites: d.a.mark((function e(t) {
                        var n;
                        return d.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (void 0 !== t && Object(L.b)(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, i.a.commonActions.getRegistry();
                                case 4:
                                    if (n = e.sent, !n.select(N.b).getSites(t)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    return e.next = 10, Ft.actions.fetchGetSites(t);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                qt = {
                    getSites: function(e, t) {
                        if (void 0 !== t) return e.sites[t]
                    },
                    getSite: Bt((function(e) {
                        return function(t, n, a) {
                            return function(e, t) {
                                if (void 0 !== e && void 0 !== t) {
                                    var n = t.toLowerCase(),
                                        a = e.findIndex((function(e) {
                                            return 0 <= n.indexOf(e.domain.toLowerCase())
                                        }));
                                    return -1 === a ? null : e[a]
                                }
                            }(e(N.b).getSites(n), a)
                        }
                    })),
                    getCurrentSite: Bt((function(e) {
                        return function(t, n) {
                            var a = e(Dt.c).getReferenceSiteURL(),
                                r = new URL(a);
                            return e(N.b).getSite(n, r.origin)
                        }
                    }))
                },
                Kt = i.a.combineStores(Ft, {
                    initialState: {
                        sites: {}
                    },
                    actions: Wt,
                    reducer: function(e, t) {
                        switch (t.type) {
                            case "RESET_SITES":
                                var n = e.savedSettings || {},
                                    a = n.siteID,
                                    r = n.accountStatus,
                                    i = n.siteStatus,
                                    o = n.accountSetupComplete,
                                    c = n.siteSetupComplete;
                                return Gt(Gt({}, e), {}, {
                                    sites: zt.sites,
                                    settings: Gt(Gt({}, e.settings || {}), {}, {
                                        siteID: a,
                                        accountStatus: r,
                                        siteStatus: i,
                                        accountSetupComplete: o,
                                        siteSetupComplete: c
                                    })
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: Ht,
                    selectors: qt
                }),
                zt = Kt.initialState,
                Vt = (Kt.actions, Kt.controls, Kt.reducer, Kt.resolvers, Kt.selectors, Kt),
                Yt = i.a.combineStores($, ue, ye, ke, Me, Qe, lt, vt, Y, Nt, Zt, Vt);
            Yt.initialState, Yt.actions, Yt.controls, Yt.reducer, Yt.resolvers, Yt.selectors;
            i.a.registerStore(N.b, Yt), c.a.registerModule("adsense", {
                storeName: N.b,
                SettingsEditComponent: v.a,
                SettingsViewComponent: E.a,
                SettingsSetupIncompleteComponent: h.a,
                SetupComponent: Object(D.b)("adsenseSetupV2") ? y.a : b.a,
                Icon: I.a,
                features: [Object(f.__)("Intelligent, automatic ad placement", "google-site-kit"), Object(f.__)("Revenue from ads placed on your site", "google-site-kit"), Object(f.__)("AdSense insights through Site Kit", "google-site-kit")],
                checkRequirements: (xt = g()(d.a.mark((function e(t) {
                    var n;
                    return d.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t.__experimentalResolveSelect(N.b).isAdBlockerActive();
                            case 2:
                                if (e.sent) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                throw n = t.select(N.b).getAdBlockerWarningMessage(), {
                                    code: j.d,
                                    message: n,
                                    data: null
                                };
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), function(e) {
                    return xt.apply(this, arguments)
                }),
                screenWidgetContext: j.c
            }), (Ut = l.a).registerWidget("adBlockerWarning", {
                Component: _.a,
                width: Ut.WIDGET_WIDTHS.FULL,
                priority: 1,
                wrapWidget: !1
            }, [p.AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY, j.b]), Object(D.b)("unifiedDashboard") && (Ut.registerWidget("adsenseModuleOverview", {
                Component: k.a,
                width: Ut.WIDGET_WIDTHS.FULL,
                priority: 2,
                wrapWidget: !1
            }, [p.AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY]), Ut.registerWidget("adsenseConnectCTA", {
                Component: T.a,
                width: [Ut.WIDGET_WIDTHS.FULL],
                priority: 2,
                wrapWidget: !1
            }, [p.AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY]), Ut.registerWidget("adsenseTopEarningPages", {
                Component: S.a,
                width: [Ut.WIDGET_WIDTHS.HALF, Ut.WIDGET_WIDTHS.FULL],
                priority: 3,
                wrapWidget: !1
            }, [p.AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY])), Object(D.b)("unifiedDashboard") || (Ut.registerWidgetArea(j.b, {
                priority: 1,
                style: C.b.BOXES,
                title: Object(f.__)("Overview", "google-site-kit")
            }, j.c), Ut.registerWidget("adsenseSummary", {
                Component: A.a,
                width: Ut.WIDGET_WIDTHS.HALF,
                priority: 1,
                wrapWidget: !1
            }, [p.AREA_DASHBOARD_EARNINGS]), Ut.registerWidget("adsenseTopEarningPages", {
                Component: S.a,
                width: [Ut.WIDGET_WIDTHS.HALF, Ut.WIDGET_WIDTHS.FULL],
                priority: 2,
                wrapWidget: !1
            }, [p.AREA_DASHBOARD_EARNINGS]), Ut.registerWidget("adsenseModuleOverview", {
                Component: k.a,
                width: Ut.WIDGET_WIDTHS.FULL,
                priority: 2,
                wrapWidget: !1
            }, [j.b]), Ut.registerWidget("adsenseModuleTopEarningPages", {
                Component: O.a,
                width: Ut.WIDGET_WIDTHS.FULL,
                priority: 2,
                wrapWidget: !1
            }, [j.b]))
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
                return f.b
            })), n.d(t, "k", (function() {
                return f.c
            })), n.d(t, "r", (function() {
                return p.c
            })), n.d(t, "s", (function() {
                return p.d
            })), n.d(t, "o", (function() {
                return p.b
            })), n.d(t, "j", (function() {
                return p.a
            })), n.d(t, "e", (function() {
                return b.a
            })), n.d(t, "p", (function() {
                return E
            })), n.d(t, "d", (function() {
                return A
            })), n.d(t, "g", (function() {
                return S.c
            })), n.d(t, "u", (function() {
                return S.i
            })), n.d(t, "h", (function() {
                return _.b
            })), n.d(t, "n", (function() {
                return _.c
            })), n.d(t, "b", (function() {
                return _.a
            })), n.d(t, "m", (function() {
                return T.b
            })), n.d(t, "i", (function() {
                return T.a
            })), n.d(t, "q", (function() {
                return T.d
            })), n.d(t, "l", (function() {
                return O
            })), n.d(t, "a", (function() {
                return k
            })), n.d(t, "y", (function() {
                return I
            })), n.d(t, "f", (function() {
                return N
            }));
            var a = n(117),
                r = n.n(a),
                i = n(113),
                o = n.n(i),
                c = n(31),
                s = n(63),
                l = n(29),
                u = n.n(l),
                d = n(78),
                m = n.n(d),
                g = function(e) {
                    return m()(JSON.stringify(function e(t) {
                        var n = {};
                        return Object.keys(t).sort().forEach((function(a) {
                            var r = t[a];
                            r && "object" === u()(r) && !Array.isArray(r) && (r = e(r)), n[a] = r
                        })), n
                    }(e)))
                };
            var f = n(80),
                p = (n(84), n(72)),
                b = n(64);

            function y(e) {
                return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function v(e) {
                return "<p>".concat(e.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function h(e) {
                return e.replace(/\n/gi, "<br>")
            }

            function E(e) {
                for (var t = e, n = 0, a = [y, v, h]; n < a.length; n++) {
                    t = (0, a[n])(t)
                }
                return t
            }
            var A = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                S = n(59),
                _ = n(85),
                T = n(50),
                O = function(e) {
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
                k = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var n = (t - e) / e;
                    return isNaN(n) || !r()(n) ? null : n
                },
                I = function(e) {
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
        112: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return StoreErrorNotices
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i),
                    c = n(4),
                    s = n.n(c),
                    l = n(191),
                    u = n(22),
                    d = n(89),
                    m = n(143);

                function g(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function f(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? g(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var p = s.a.useSelect;

                function StoreErrorNotices(t) {
                    var n = t.moduleSlug,
                        a = t.storeName,
                        r = t.shouldDisplayError,
                        i = p((function(e) {
                            return e(a).getErrors()
                        })),
                        o = p((function(e) {
                            return e(u.a).getModule(n)
                        })),
                        c = [];
                    return i.filter((function(e) {
                        return !(!(null == e ? void 0 : e.message) || c.includes(e.message)) && (c.push(e.message), !0)
                    })).map((function(e) {
                        return Object(d.b)(e) && (e = f(f({}, e), {}, {
                            message: Object(m.a)(e.message, o)
                        })), e
                    })).map((function(t, n) {
                        return e.createElement(l.a, {
                            key: n,
                            error: t,
                            shouldDisplayError: r
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
        114: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ReportZero
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(22),
                    l = n(83),
                    u = c.a.useSelect;

                function ReportZero(t) {
                    var n = t.moduleSlug,
                        a = u((function(e) {
                            return e(s.a).getModule(n)
                        }));
                    return e.createElement(l.a, {
                        title: Object(i.sprintf)(
                            /* translators: %s: Module name */
                            Object(i.__)("%s Gathering Data", "google-site-kit"), null == a ? void 0 : a.name),
                        description: Object(i.sprintf)(
                            /* translators: %s: Module name */
                            Object(i.__)("%s data is not yet available, please check back later", "google-site-kit"), null == a ? void 0 : a.name)
                    })
                }
                ReportZero.propTypes = {
                    moduleSlug: r.a.string.isRequired
                }
            }).call(this, n(3))
        },
        115: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "AREA_DASHBOARD_ALL_TRAFFIC", (function() {
                return a
            })), n.d(t, "AREA_DASHBOARD_SEARCH_FUNNEL", (function() {
                return r
            })), n.d(t, "AREA_DASHBOARD_ACQUISITION", (function() {
                return i
            })), n.d(t, "AREA_DASHBOARD_SPEED", (function() {
                return o
            })), n.d(t, "AREA_DASHBOARD_EARNINGS", (function() {
                return c
            })), n.d(t, "AREA_PAGE_DASHBOARD_SEARCH_FUNNEL", (function() {
                return s
            })), n.d(t, "AREA_PAGE_DASHBOARD_ALL_TRAFFIC", (function() {
                return l
            })), n.d(t, "AREA_PAGE_DASHBOARD_ACQUISITION", (function() {
                return u
            })), n.d(t, "AREA_PAGE_DASHBOARD_SPEED", (function() {
                return d
            })), n.d(t, "AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY", (function() {
                return m
            })), n.d(t, "AREA_MAIN_DASHBOARD_CONTENT_PRIMARY", (function() {
                return g
            })), n.d(t, "AREA_MAIN_DASHBOARD_SPEED_PRIMARY", (function() {
                return f
            })), n.d(t, "AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY", (function() {
                return p
            })), n.d(t, "AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY", (function() {
                return b
            })), n.d(t, "AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY", (function() {
                return y
            })), n.d(t, "AREA_ENTITY_DASHBOARD_SPEED_PRIMARY", (function() {
                return v
            })), n.d(t, "AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY", (function() {
                return h
            }));
            var a = "dashboardAllTraffic",
                r = "dashboardSearchFunnel",
                i = "dashboardAcquisition",
                o = "dashboardSpeed",
                c = "dashboardEarnings",
                s = "pageDashboardSearchFunnel",
                l = "pageDashboardAllTraffic",
                u = "pageDashboardAcquisition",
                d = "pageDashboardSpeed",
                m = "mainDashboardTrafficPrimary",
                g = "mainDashboardContentPrimary",
                f = "mainDashboardSpeedPrimary",
                p = "mainDashboardMonetizationPrimary",
                b = "entityDashboardTrafficPrimary",
                y = "entityDashboardContentPrimary",
                v = "entityDashboardSpeedPrimary",
                h = "entityDashboardMonetizationPrimary";
            t.default = {
                AREA_DASHBOARD_ALL_TRAFFIC: a,
                AREA_DASHBOARD_SEARCH_FUNNEL: r,
                AREA_DASHBOARD_ACQUISITION: i,
                AREA_DASHBOARD_SPEED: o,
                AREA_DASHBOARD_EARNINGS: c,
                AREA_PAGE_DASHBOARD_SEARCH_FUNNEL: s,
                AREA_PAGE_DASHBOARD_ALL_TRAFFIC: l,
                AREA_PAGE_DASHBOARD_ACQUISITION: u,
                AREA_PAGE_DASHBOARD_SPEED: d,
                AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY: m,
                AREA_MAIN_DASHBOARD_CONTENT_PRIMARY: g,
                AREA_MAIN_DASHBOARD_SPEED_PRIMARY: f,
                AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY: p,
                AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY: b,
                AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY: y,
                AREA_ENTITY_DASHBOARD_SPEED_PRIMARY: v,
                AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY: h
            }
        },
        119: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "g", (function() {
                return i
            })), n.d(t, "h", (function() {
                return o
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "f", (function() {
                return l
            })), n.d(t, "a", (function() {
                return u
            })), n.d(t, "i", (function() {
                return d
            })), n.d(t, "k", (function() {
                return m
            })), n.d(t, "o", (function() {
                return g
            })), n.d(t, "j", (function() {
                return f
            })), n.d(t, "m", (function() {
                return p
            })), n.d(t, "n", (function() {
                return b
            })), n.d(t, "l", (function() {
                return y
            })), n.d(t, "q", (function() {
                return v
            })), n.d(t, "s", (function() {
                return h
            })), n.d(t, "p", (function() {
                return E
            })), n.d(t, "r", (function() {
                return A
            })), n.d(t, "u", (function() {
                return S
            })), n.d(t, "t", (function() {
                return _
            }));
            var a = "disapproved",
                r = "graylisted",
                i = "pending",
                o = "pending-tasks",
                c = "none",
                s = "multiple",
                l = "no-client",
                u = "approved",
                d = "added",
                m = "needs-attention",
                g = "requires-review",
                f = "getting-ready",
                p = "ready",
                b = "ready-no-auto-ads",
                y = "none";

            function v(e) {
                var t = e.accounts,
                    n = e.clients,
                    a = e.alerts,
                    i = e.urlChannels,
                    o = e.accountsError,
                    d = e.alertsError,
                    m = e.urlChannelsError,
                    g = e.previousAccountID,
                    f = e.previousClientID;
                return void 0 === t || void 0 === g ? T(o) : E({
                    accounts: t,
                    previousAccountID: g
                }) ? void 0 !== n && void 0 !== f ? void 0 === a ? O(d) : a.some((function(e) {
                    return "graylisted-publisher" === e.type
                })) ? r : A({
                    clients: n,
                    previousClientID: f
                }) ? void 0 === i ? k(m) : u : l : void 0 : t.length ? s : c
            }
            var h = function(e) {
                    var t = e.urlChannels,
                        n = e.siteURL;
                    if (void 0 !== t && void 0 !== n) {
                        var a = n.toLowerCase();
                        return t.some((function(e) {
                            return 0 <= a.indexOf(e.uriPattern.toLowerCase())
                        })) ? d : y
                    }
                },
                E = function(e) {
                    var t = e.accounts,
                        n = e.previousAccountID;
                    if (void 0 !== t && t.length) {
                        if (t.length > 1) {
                            if (!n) return;
                            return t.reduce((function(e, t) {
                                return t._id === n ? n : e
                            }), void 0)
                        }
                        return t[0]._id
                    }
                },
                A = function(e) {
                    var t = e.clients,
                        n = e.previousClientID;
                    if (void 0 !== t) {
                        var a = t.filter((function(e) {
                            return "AFC" === e.productCode
                        }));
                        if (a.length) {
                            if (a.length > 1 && n) {
                                var r = a.reduce((function(e, t) {
                                    return t._id === n ? n : e
                                }), "");
                                if (r) return r
                            }
                            return a[0]._id
                        }
                    }
                },
                S = function(e) {
                    return e === r || e === i
                },
                _ = function(e) {
                    return T(e) || O(e) || k(e)
                },
                T = function(e) {
                    return I(e, "noAdSenseAccount") ? c : I(e, "disapprovedAccount") ? a : void 0
                },
                O = function(e) {
                    if (I(e, "accountPendingReview")) return i
                };

            function k(e) {
                if ((null == e ? void 0 : e.message) && "ad client not found." === e.message.toLowerCase()) return i
            }
            var I = function(e, t) {
                return !(!e || !e.data) && t === e.data.reason
            }
        },
        121: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(2),
                    o = n(1),
                    c = n(83),
                    s = n(4),
                    l = n.n(s),
                    u = n(13),
                    d = n(22),
                    m = n(38),
                    g = l.a.useSelect,
                    f = l.a.useDispatch,
                    p = function CompleteModuleActivationCTA(t) {
                        var n = t.moduleSlug,
                            a = t.title,
                            r = t.description,
                            s = g((function(e) {
                                return e(d.a).getModule(n)
                            })),
                            l = g((function(e) {
                                return e(d.a).getModuleStoreName(n)
                            })),
                            p = g((function(e) {
                                var t;
                                return null === (t = e(l)) || void 0 === t ? void 0 : t.getAdminReauthURL()
                            })),
                            b = g((function(e) {
                                return e(u.a).hasCapability(u.c)
                            })),
                            y = f(m.a).navigateTo,
                            v = Object(i.useCallback)((function() {
                                return y(p)
                            }), [p, y]);
                        return (null == s ? void 0 : s.name) && p && b ? e.createElement(c.a, {
                            title: a || Object(o.sprintf)(
                                /* translators: %s: Module name */
                                Object(o.__)("Complete %s activation", "google-site-kit"), s.name),
                            description: r || Object(o.sprintf)(
                                /* translators: %s: Module name */
                                Object(o.__)("%s module setup needs to be completed", "google-site-kit"), s.name),
                            ctaLabel: Object(o.__)("Complete setup", "google-site-kit"),
                            "aria-label": Object(o.sprintf)(
                                /* translators: %s: Module name */
                                Object(o.__)("Complete %s setup", "google-site-kit"), s.name),
                            onClick: v
                        }) : null
                    };
                p.propTypes = {
                    moduleSlug: r.a.string.isRequired,
                    title: r.a.string,
                    description: r.a.string
                }, t.a = p
            }).call(this, n(3))
        },
        122: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ActivateModuleCTA
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(22),
                    l = n(187),
                    u = n(83),
                    d = c.a.useSelect;

                function ActivateModuleCTA(t) {
                    var n = t.moduleSlug,
                        a = t.title,
                        r = t.description,
                        o = d((function(e) {
                            return e(s.a).getModule(n)
                        })),
                        c = Object(l.a)(n);
                    if (!c) return null;
                    var m = a,
                        g = r;
                    switch (n) {
                        case "analytics":
                            a || (m = Object(i.__)("Learn more about what visitors do on your site", "google-site-kit")), r || (g = Object(i.__)("Connect with Google Analytics to see unique visitors, goal completions, top pages and more", "google-site-kit"));
                            break;
                        case "pagespeed-insights":
                            r || (g = Object(i.__)("Google PageSpeed Insights gives you metrics about performance, accessibility, SEO and PWA", "google-site-kit"))
                    }
                    return e.createElement(u.a, {
                        title: m || Object(i.sprintf)(
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
                    moduleSlug: r.a.string.isRequired,
                    title: r.a.string,
                    description: r.a.string
                }
            }).call(this, n(3))
        },
        123: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(217),
                    o = n.n(i),
                    c = n(8),
                    s = n.n(c),
                    l = n(131),
                    u = n(2),
                    d = n(1),
                    m = n(19),
                    g = n(21),
                    f = n(7),
                    p = n(103),
                    b = function Dialog(t) {
                        var n = t.dialogActive,
                            a = t.handleDialog,
                            r = t.title,
                            i = t.provides,
                            c = t.handleConfirm,
                            b = t.subtitle,
                            y = t.confirmButton,
                            v = t.dependentModules,
                            h = t.danger,
                            E = t.inProgress,
                            A = void 0 !== E && E,
                            S = Object(u.useCallback)((function(e) {
                                null !== e && f.e.attachTo(e)
                            }), []),
                            _ = Object(l.a)(Dialog),
                            T = "googlesitekit-dialog-label-".concat(_),
                            O = "googlesitekit-dialog-description-".concat(_),
                            k = !(!i || !i.length);
                        return e.createElement("div", {
                            ref: S,
                            className: s()("mdc-dialog", {
                                "mdc-dialog--open": n
                            }),
                            role: "alertdialog",
                            "aria-modal": "true",
                            "aria-labelledby": r ? T : void 0,
                            "aria-describedby": k ? O : void 0,
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
                        }, r && e.createElement("h2", {
                            id: T,
                            className: "mdc-dialog__title"
                        }, r), b && e.createElement("p", {
                            className: "mdc-dialog__lead"
                        }, b), k && e.createElement("section", {
                            id: O,
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
                        })))), v && e.createElement("p", {
                            className: "mdc-dialog__dependecies"
                        }, e.createElement("strong", null, Object(d.__)("Note: ", "google-site-kit")), v), e.createElement("footer", {
                            className: "mdc-dialog__actions"
                        }, e.createElement(m.a, {
                            onClick: c,
                            danger: h,
                            disabled: A
                        }, y || Object(d.__)("Disconnect", "google-site-kit")), e.createElement(p.a, {
                            isSaving: A
                        }), e.createElement(g.a, {
                            className: "googlesitekit-margin-left-auto mdc-dialog__cancel-button",
                            onClick: a,
                            inherit: !0,
                            disabled: A
                        }, Object(d.__)("Cancel", "google-site-kit"))))))))
                    };
                b.displayName = "Dialog", b.propTypes = {
                    dialogActive: r.a.bool,
                    handleDialog: r.a.func,
                    handleConfirm: r.a.func.isRequired,
                    title: r.a.string,
                    description: r.a.string,
                    confirmButton: r.a.string,
                    danger: r.a.bool
                }, b.defaultProps = {
                    dialogActive: !1,
                    handleDialog: null,
                    title: null,
                    description: null,
                    confirmButton: null,
                    danger: !1
                }, t.a = b
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
        129: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(8),
                    o = n.n(i),
                    c = n(131),
                    s = n(2),
                    l = n(68),
                    u = n(7),
                    d = function Switch(t) {
                        var n = t.onClick,
                            a = t.label,
                            r = t.checked,
                            i = t.disabled,
                            d = t.hideLabel,
                            m = Object(c.a)(Switch),
                            g = Object(s.useCallback)((function(e) {
                                null !== e && u.j.attachTo(e)
                            }), []),
                            f = Object(s.useCallback)((function(e) {
                                "function" == typeof n && l.c === e.keyCode && n(e)
                            }), [n]),
                            p = "googlesitekit-switch-".concat(m);
                        return e.createElement(s.Fragment, null, e.createElement("div", {
                            "aria-checked": r ? "true" : "false",
                            className: o()("mdc-switch", {
                                "mdc-switch--checked": r,
                                "mdc-switch--disabled": i
                            }),
                            onClick: n,
                            onKeyDown: f,
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
                            id: p,
                            className: "mdc-switch__native-control",
                            role: "switch",
                            checked: r,
                            disabled: i,
                            readOnly: !0
                        })))), e.createElement("label", {
                            className: o()({
                                "screen-reader-only": d
                            }),
                            htmlFor: p
                        }, a))
                    };
                d.propTypes = {
                    id: r.a.string,
                    onClick: r.a.func,
                    label: r.a.node.isRequired,
                    checked: r.a.bool,
                    disabled: r.a.bool,
                    hideLabel: r.a.bool
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
                return a
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "e", (function() {
                return i
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return s
            }));
            var a = "core/user",
                r = "connected_url_mismatch",
                i = "googlesitekit_setup",
                o = "googlesitekit_view_dashboard",
                c = "googlesitekit_manage_options",
                s = "googlesitekit_read_shared_module_data"
        },
        132: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return y
            })), n.d(t, "a", (function() {
                return v
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "d", (function() {
                return A
            }));
            var a = n(6),
                r = n.n(a),
                i = n(2);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = i.createElement("path", {
                d: "M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27z"
            });
            var s = function SvgInfoIcon(e) {
                return i.createElement("svg", o({
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                }, e), c)
            };

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var u = i.createElement("path", {
                d: "M0 4h2v7H0zm0-4h2v2H0z",
                fill: "currentColor",
                fillRule: "evenodd"
            });
            var d = function SvgSuggestionIcon(e) {
                return i.createElement("svg", l({
                    viewBox: "0 0 2 11"
                }, e), u)
            };

            function m() {
                return (m = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var g = i.createElement("path", {
                d: "M0 0h2v7H0zm0 10h2v2H0z",
                fill: "currentColor",
                fillRule: "evenodd"
            });
            var f, p = function SvgWarningIcon(e) {
                    return i.createElement("svg", m({
                        viewBox: "0 0 2 12"
                    }, e), g)
                },
                b = n(126),
                y = "warning",
                v = "info",
                h = "suggestion",
                E = (f = {}, r()(f, v, s), r()(f, y, p), r()(f, h, d), f),
                A = function(e) {
                    return E[e] || b.a
                }
        },
        136: function(e, t) {
            e.exports = googlesitekit.modules
        },
        137: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return s
                }));
                var a = n(4),
                    r = n.n(a),
                    i = n(22),
                    o = n(76),
                    c = r.a.useSelect;

                function s(t) {
                    var n = t.moduleName,
                        a = t.FallbackComponent,
                        r = t.IncompleteComponent;
                    return function(t) {
                        var s = function WhenActiveComponent(o) {
                            var s = c((function(e) {
                                return e(i.a).getModule(n)
                            }), [n]);
                            if (!s) return null;
                            var l = a || o.WidgetNull || null;
                            if (!1 === s.active) return l && e.createElement(l, o);
                            if (!1 === s.connected) {
                                var u = r || l;
                                return u && e.createElement(u, o)
                            }
                            return e.createElement(t, o)
                        };
                        return s.displayName = "When".concat(Object(o.c)(n), "Active"), (t.displayName || t.name) && (s.displayName += "(".concat(t.displayName || t.name, ")")), s
                    }
                }
            }).call(this, n(3))
        },
        139: function(e, t, n) {
            "use strict";
            var a = n(2);

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = a.createElement("path", {
                d: "M3.332 24.75h21.335c2.182 0 3.542-2.366 2.451-4.25L16.451 2.07C15.36.184 12.64.184 11.549 2.07L.882 20.5c-1.091 1.884.269 4.25 2.45 4.25zM14 14.833a1.42 1.42 0 01-1.417-1.416v-2.834c0-.779.638-1.416 1.417-1.416.78 0 1.417.637 1.417 1.416v2.834A1.42 1.42 0 0114 14.833zm1.417 5.667h-2.834v-2.833h2.834V20.5z",
                fill: "currentColor",
                fillRule: "nonzero"
            });
            t.a = function SvgError(e) {
                return a.createElement("svg", r({
                    viewBox: "0 0 28 25"
                }, e), i)
            }
        },
        140: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n(9),
                r = n.n(a),
                i = function(e, t) {
                    var n = t.dateRangeLength;
                    r()(Array.isArray(e), "report must be an array to partition."), r()(Number.isInteger(n) && n > 0, "dateRangeLength must be a positive integer.");
                    var a = -1 * n;
                    return {
                        currentRange: e.slice(a),
                        compareRange: e.slice(2 * a, a)
                    }
                }
        },
        143: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(1);

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t || {},
                    r = n.slug,
                    i = void 0 === r ? "" : r,
                    o = n.name,
                    c = void 0 === o ? "" : o,
                    s = n.owner,
                    l = void 0 === s ? {} : s;
                if (!i || !c) return e;
                var u = "",
                    d = "";
                return "analytics" === i ? e.match(/account/i) ? u = Object(a.__)("Your Google account does not have sufficient permissions for this Analytics account, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/property/i) ? u = Object(a.__)("Your Google account does not have sufficient permissions for this Analytics property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/view/i) && (u = Object(a.__)("Your Google account does not have sufficient permissions for this Analytics view, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")) : "search-console" === i && (u = Object(a.__)("Your Google account does not have sufficient permissions for this Search Console property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")), u || (u = Object(a.sprintf)(
                    /* translators: %s: module name */
                    Object(a.__)("Your Google account does not have sufficient permissions to access %s data, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit"), c)), l && l.login && (d = Object(a.sprintf)(
                    /* translators: %s: owner name */
                    Object(a.__)('This service was originally connected by the administrator "%s" — you can contact them for more information.', "google-site-kit"), l.login)), d || (d = Object(a.__)("This service was originally connected by an administrator — you can contact them for more information.", "google-site-kit")), "".concat(u, " ").concat(d)
            }
        },
        149: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(9),
                r = n.n(a),
                i = n(42),
                o = function(e) {
                    var t = e.startDate,
                        n = e.endDate,
                        a = e.compareStartDate,
                        o = e.compareEndDate;
                    r()(Object(i.a)(t), "A valid startDate is required."), r()(Object(i.a)(n), "A valid endDate is required.");
                    var c = {
                        "_u.date00": t.replace(/-/g, ""),
                        "_u.date01": n.replace(/-/g, "")
                    };
                    return (a || o) && (r()(Object(i.a)(a) && Object(i.a)(o), "Valid compareStartDate and compareEndDate values are required."), c["_u.date10"] = a.replace(/-/g, ""), c["_u.date11"] = o.replace(/-/g, "")), c
                }
        },
        15: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));
            var a = "core/site",
                r = "primary",
                i = "secondary"
        },
        150: function(e, t, n) {
            "use strict";
            var a = n(655);
            n.d(t, "a", (function() {
                return a.a
            }));
            var r = n(363);
            n.d(t, "b", (function() {
                return r.a
            }));
            var i = n(656);
            n.d(t, "d", (function() {
                return i.a
            }));
            n(411);
            var o = n(657);
            n.d(t, "f", (function() {
                return o.a
            }));
            var c = n(658);
            n.d(t, "e", (function() {
                return c.a
            }));
            n(502);
            var s = n(326);
            n.d(t, "c", (function() {
                return s.c
            }));
            n(503)
        },
        157: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return N
            })), n.d(t, "b", (function() {
                return j
            })), n.d(t, "c", (function() {
                return C
            })), n.d(t, "f", (function() {
                return D
            })), n.d(t, "e", (function() {
                return w
            })), n.d(t, "d", (function() {
                return R
            }));
            var a = n(14),
                r = n.n(a),
                i = n(5),
                o = n.n(i),
                c = n(6),
                s = n.n(c),
                l = n(9),
                u = n.n(l),
                d = n(57),
                m = n.n(d),
                g = n(158),
                f = n.n(g),
                p = n(33),
                b = n.n(p),
                y = n(4),
                v = n.n(y),
                h = n(73),
                E = n(76),
                A = n(45),
                S = n(54);

            function _(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? _(Object(n), !0).forEach((function(t) {
                        s()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var O = v.a.createRegistrySelector,
                k = S.a.clearError,
                I = S.a.receiveError,
                N = "cannot submit changes while submitting changes",
                j = "cannot submit changes if settings have not changed",
                C = function(e, t, n) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = a.storeName,
                        i = void 0 === r ? void 0 : r,
                        c = a.settingSlugs,
                        l = void 0 === c ? [] : c;
                    u()(e, "type is required."), u()(t, "identifier is required."), u()(n, "datapoint is required.");
                    var d = i || "".concat(e, "/").concat(t),
                        g = {
                            settings: void 0,
                            savedSettings: void 0
                        },
                        p = Object(A.a)({
                            baseName: "getSettings",
                            controlCallback: function() {
                                return b.a.get(e, t, n, {}, {
                                    useCache: !1
                                })
                            },
                            reducerCallback: function(e, t) {
                                return T(T({}, e), {}, {
                                    savedSettings: T({}, t),
                                    settings: T(T({}, t), e.settings || {})
                                })
                            }
                        }),
                        y = Object(A.a)({
                            baseName: "saveSettings",
                            controlCallback: function(a) {
                                var r = a.values;
                                return b.a.set(e, t, n, r)
                            },
                            reducerCallback: function(e, t) {
                                return T(T({}, e), {}, {
                                    savedSettings: T({}, t),
                                    settings: T({}, t)
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
                                u()(m()(t), "values is required.")
                            }
                        }),
                        h = {},
                        S = {
                            setSettings: function(e) {
                                return u()(m()(e), "values is required."), {
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
                                var t, n, a, r, i;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, v.a.commonActions.getRegistry();
                                        case 2:
                                            return t = e.sent, e.next = 5, k("saveSettings", []);
                                        case 5:
                                            return n = t.select(d).getSettings(), e.next = 8, y.actions.fetchSaveSettings(n);
                                        case 8:
                                            if (a = e.sent, r = a.response, !(i = a.error)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 14, I(i, "saveSettings", []);
                                        case 14:
                                            return e.abrupt("return", {
                                                response: r,
                                                error: i
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        _ = {},
                        N = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                n = t.type,
                                a = t.payload;
                            switch (n) {
                                case "SET_SETTINGS":
                                    var r = a.values;
                                    return T(T({}, e), {}, {
                                        settings: T(T({}, e.settings || {}), r)
                                    });
                                case "ROLLBACK_SETTINGS":
                                    return T(T({}, e), {}, {
                                        settings: e.savedSettings
                                    });
                                default:
                                    return void 0 !== h[n] ? h[n](e, {
                                        type: n,
                                        payload: a
                                    }) : e
                            }
                        },
                        j = {
                            getSettings: o.a.mark((function e() {
                                var t;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, v.a.commonActions.getRegistry();
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
                        C = {
                            getSettings: function(e) {
                                return e.settings
                            },
                            haveSettingsChanged: function(e) {
                                var t = e.settings,
                                    n = e.savedSettings;
                                return !f()(t, n)
                            },
                            hasSettingChanged: function(e, t) {
                                u()(t, "setting is required.");
                                var n = e.settings,
                                    a = e.savedSettings;
                                return !(!n || !a) && !f()(n[t], a[t])
                            },
                            isDoingSaveSettings: function(e) {
                                return Object.values(e.isFetchingSaveSettings).some(Boolean)
                            }
                        };
                    l.forEach((function(e) {
                        var t = Object(E.b)(e),
                            n = Object(E.a)(e);
                        S["set".concat(t)] = function(e) {
                            return u()(void 0 !== e, "value is required for calls to set".concat(t, "().")), {
                                payload: {
                                    value: e
                                },
                                type: "SET_".concat(n)
                            }
                        }, h["SET_".concat(n)] = function(t, n) {
                            var a = n.payload.value;
                            return T(T({}, t), {}, {
                                settings: T(T({}, t.settings || {}), {}, s()({}, e, a))
                            })
                        }, C["get".concat(t)] = O((function(t) {
                            return function() {
                                return (t(d).getSettings() || {})[e]
                            }
                        }))
                    }));
                    var D = v.a.combineStores(v.a.commonStore, p, y, {
                        initialState: g,
                        actions: S,
                        controls: _,
                        reducer: N,
                        resolvers: j,
                        selectors: C
                    });
                    return T(T({}, D), {}, {
                        STORE_NAME: d
                    })
                };

            function D(e, t) {
                return function() {
                    var n = r()(o.a.mark((function n(a) {
                        var r, i, c, s;
                        return o.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (r = a.select, i = a.dispatch, !r(t).haveSettingsChanged()) {
                                        n.next = 8;
                                        break
                                    }
                                    return n.next = 4, i(t).saveSettings();
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

            function w(e) {
                return function(t) {
                    var n = t.select,
                        a = t.dispatch;
                    return n(e).haveSettingsChanged() ? a(e).rollbackSettings() : {}
                }
            }

            function R(e) {
                return function(t) {
                    var n = Object(h.e)(t)(e),
                        a = n.haveSettingsChanged,
                        r = n.isDoingSubmitChanges;
                    u()(!r(), N), u()(a(), j)
                }
            }
        },
        187: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            }));
            var a = n(5),
                r = n.n(a),
                i = n(14),
                o = n.n(i),
                c = n(2),
                s = n(4),
                l = n.n(s),
                u = n(20),
                d = n(15),
                m = n(13),
                g = n(22),
                f = n(38),
                p = n(31),
                b = l.a.useSelect,
                y = l.a.useDispatch;

            function v(e) {
                var t = Object(c.useContext)(u.b),
                    n = b((function(t) {
                        return t(g.a).getModule(e)
                    })),
                    a = b((function(e) {
                        return e(m.a).hasCapability(m.c)
                    })),
                    i = y(g.a).activateModule,
                    s = y(f.a).navigateTo,
                    l = y(d.c).setInternalServerError,
                    v = Object(c.useCallback)(o()(r.a.mark((function n() {
                        var a, o, c;
                        return r.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, i(e);
                                case 2:
                                    if (a = n.sent, o = a.error, c = a.response, o) {
                                        n.next = 11;
                                        break
                                    }
                                    return n.next = 8, Object(p.b)("".concat(t, "_widget-activation-cta"), "activate_module", e);
                                case 8:
                                    s(c.moduleReauthURL), n.next = 12;
                                    break;
                                case 11:
                                    l({
                                        id: "".concat(e, "-setup-error"),
                                        description: o.message
                                    });
                                case 12:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    }))), [i, e, s, l, t]);
                return (null == n ? void 0 : n.name) && a ? v : null
            }
        },
        188: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "d", (function() {
                return i
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            }));
            var a = n(26),
                r = [{
                    countryCode: "AF",
                    displayName: "Afghanistan",
                    defaultTimeZoneId: "Asia/Kabul",
                    timeZone: [{
                        timeZoneId: "Asia/Kabul",
                        displayName: "(GMT+04:30) Afghanistan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "AL",
                    displayName: "Albania",
                    defaultTimeZoneId: "Europe/Tirane",
                    timeZone: [{
                        timeZoneId: "Europe/Tirane",
                        displayName: "(GMT+02:00) Albania Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "DZ",
                    displayName: "Algeria",
                    defaultTimeZoneId: "Africa/Algiers",
                    timeZone: [{
                        timeZoneId: "Africa/Algiers",
                        displayName: "(GMT+01:00) Algeria Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "AS",
                    displayName: "American Samoa",
                    defaultTimeZoneId: "Pacific/Pago_Pago",
                    timeZone: [{
                        timeZoneId: "Pacific/Pago_Pago",
                        displayName: "(GMT-11:00) American Samoa Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "AD",
                    displayName: "Andorra",
                    defaultTimeZoneId: "Europe/Andorra",
                    timeZone: [{
                        timeZoneId: "Europe/Andorra",
                        displayName: "(GMT+02:00) Andorra Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "AQ",
                    displayName: "Antarctica",
                    defaultTimeZoneId: "Antarctica/Palmer",
                    timeZone: [{
                        timeZoneId: "Antarctica/Palmer",
                        displayName: "(GMT-03:00) Palmer Time"
                    }, {
                        timeZoneId: "Antarctica/Rothera",
                        displayName: "(GMT-03:00) Rothera Time"
                    }, {
                        timeZoneId: "Antarctica/Syowa",
                        displayName: "(GMT+03:00) Syowa Time"
                    }, {
                        timeZoneId: "Antarctica/Mawson",
                        displayName: "(GMT+05:00) Mawson Time"
                    }, {
                        timeZoneId: "Antarctica/Vostok",
                        displayName: "(GMT+06:00) Vostok Time"
                    }, {
                        timeZoneId: "Antarctica/Davis",
                        displayName: "(GMT+07:00) Davis Time"
                    }, {
                        timeZoneId: "Antarctica/Casey",
                        displayName: "(GMT+08:00) Casey Time"
                    }, {
                        timeZoneId: "Antarctica/DumontDUrville",
                        displayName: "(GMT+10:00) Dumont d’Urville Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "AR",
                    displayName: "Argentina",
                    defaultTimeZoneId: "America/Buenos_Aires",
                    timeZone: [{
                        timeZoneId: "America/Buenos_Aires",
                        displayName: "(GMT-03:00) Buenos Aires Time"
                    }, {
                        timeZoneId: "America/Cordoba",
                        displayName: "(GMT-03:00) Cordoba Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "AM",
                    displayName: "Armenia",
                    defaultTimeZoneId: "Asia/Yerevan",
                    timeZone: [{
                        timeZoneId: "Asia/Yerevan",
                        displayName: "(GMT+04:00) Armenia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "AU",
                    displayName: "Australia",
                    defaultTimeZoneId: "Australia/Perth",
                    timeZone: [{
                        timeZoneId: "Australia/Perth",
                        displayName: "(GMT+08:00) Perth Time"
                    }, {
                        timeZoneId: "Australia/Adelaide",
                        displayName: "(GMT+09:30) Adelaide Time"
                    }, {
                        timeZoneId: "Australia/Darwin",
                        displayName: "(GMT+09:30) Darwin Time"
                    }, {
                        timeZoneId: "Australia/Brisbane",
                        displayName: "(GMT+10:00) Brisbane Time"
                    }, {
                        timeZoneId: "Australia/Hobart",
                        displayName: "(GMT+10:00) Hobart Time"
                    }, {
                        timeZoneId: "Australia/Melbourne",
                        displayName: "(GMT+10:00) Melbourne Time"
                    }, {
                        timeZoneId: "Australia/Sydney",
                        displayName: "(GMT+10:00) Sydney Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "AT",
                    displayName: "Austria",
                    defaultTimeZoneId: "Europe/Vienna",
                    timeZone: [{
                        timeZoneId: "Europe/Vienna",
                        displayName: "(GMT+02:00) Austria Time"
                    }],
                    tosLocale: {
                        language: "de",
                        country: "DE"
                    }
                }, {
                    countryCode: "AZ",
                    displayName: "Azerbaijan",
                    defaultTimeZoneId: "Asia/Baku",
                    timeZone: [{
                        timeZoneId: "Asia/Baku",
                        displayName: "(GMT+04:00) Azerbaijan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "BS",
                    displayName: "Bahamas",
                    defaultTimeZoneId: "America/Nassau",
                    timeZone: [{
                        timeZoneId: "America/Nassau",
                        displayName: "(GMT-04:00) Bahamas Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "BD",
                    displayName: "Bangladesh",
                    defaultTimeZoneId: "Asia/Dhaka",
                    timeZone: [{
                        timeZoneId: "Asia/Dhaka",
                        displayName: "(GMT+06:00) Bangladesh Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "BB",
                    displayName: "Barbados",
                    defaultTimeZoneId: "America/Barbados",
                    timeZone: [{
                        timeZoneId: "America/Barbados",
                        displayName: "(GMT-04:00) Barbados Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "BY",
                    displayName: "Belarus",
                    defaultTimeZoneId: "Europe/Minsk",
                    timeZone: [{
                        timeZoneId: "Europe/Minsk",
                        displayName: "(GMT+03:00) Belarus Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "BE",
                    displayName: "Belgium",
                    defaultTimeZoneId: "Europe/Brussels",
                    timeZone: [{
                        timeZoneId: "Europe/Brussels",
                        displayName: "(GMT+02:00) Belgium Time"
                    }],
                    tosLocale: {
                        language: "fr",
                        country: "FR"
                    }
                }, {
                    countryCode: "BZ",
                    displayName: "Belize",
                    defaultTimeZoneId: "America/Belize",
                    timeZone: [{
                        timeZoneId: "America/Belize",
                        displayName: "(GMT-06:00) Belize Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "BM",
                    displayName: "Bermuda",
                    defaultTimeZoneId: "Atlantic/Bermuda",
                    timeZone: [{
                        timeZoneId: "Atlantic/Bermuda",
                        displayName: "(GMT-03:00) Bermuda Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "BT",
                    displayName: "Bhutan",
                    defaultTimeZoneId: "Asia/Thimphu",
                    timeZone: [{
                        timeZoneId: "Asia/Thimphu",
                        displayName: "(GMT+06:00) Bhutan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "BO",
                    displayName: "Bolivia",
                    defaultTimeZoneId: "America/La_Paz",
                    timeZone: [{
                        timeZoneId: "America/La_Paz",
                        displayName: "(GMT-04:00) Bolivia Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "BA",
                    displayName: "Bosnia & Herzegovina",
                    defaultTimeZoneId: "Europe/Sarajevo",
                    timeZone: [{
                        timeZoneId: "Europe/Sarajevo",
                        displayName: "(GMT+02:00) Bosnia & Herzegovina Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "BR",
                    displayName: "Brazil",
                    defaultTimeZoneId: "America/Rio_Branco",
                    timeZone: [{
                        timeZoneId: "America/Rio_Branco",
                        displayName: "(GMT-05:00) Rio Branco Time"
                    }, {
                        timeZoneId: "America/Boa_Vista",
                        displayName: "(GMT-04:00) Boa Vista Time"
                    }, {
                        timeZoneId: "America/Campo_Grande",
                        displayName: "(GMT-04:00) Campo Grande Time"
                    }, {
                        timeZoneId: "America/Cuiaba",
                        displayName: "(GMT-04:00) Cuiaba Time"
                    }, {
                        timeZoneId: "America/Manaus",
                        displayName: "(GMT-04:00) Manaus Time"
                    }, {
                        timeZoneId: "America/Porto_Velho",
                        displayName: "(GMT-04:00) Porto Velho Time"
                    }, {
                        timeZoneId: "America/Araguaina",
                        displayName: "(GMT-03:00) Araguaina Time"
                    }, {
                        timeZoneId: "America/Bahia",
                        displayName: "(GMT-03:00) Bahia Time"
                    }, {
                        timeZoneId: "America/Belem",
                        displayName: "(GMT-03:00) Belem Time"
                    }, {
                        timeZoneId: "America/Fortaleza",
                        displayName: "(GMT-03:00) Fortaleza Time"
                    }, {
                        timeZoneId: "America/Maceio",
                        displayName: "(GMT-03:00) Maceio Time"
                    }, {
                        timeZoneId: "America/Recife",
                        displayName: "(GMT-03:00) Recife Time"
                    }, {
                        timeZoneId: "America/Sao_Paulo",
                        displayName: "(GMT-03:00) Sao Paulo Time"
                    }, {
                        timeZoneId: "America/Noronha",
                        displayName: "(GMT-02:00) Noronha Time"
                    }],
                    tosLocale: {
                        language: "pt",
                        country: "BR"
                    }
                }, {
                    countryCode: "IO",
                    displayName: "British Indian Ocean Territory",
                    defaultTimeZoneId: "Indian/Chagos",
                    timeZone: [{
                        timeZoneId: "Indian/Chagos",
                        displayName: "(GMT+06:00) British Indian Ocean Territory Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "BN",
                    displayName: "Brunei",
                    defaultTimeZoneId: "Asia/Brunei",
                    timeZone: [{
                        timeZoneId: "Asia/Brunei",
                        displayName: "(GMT+08:00) Brunei Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "BG",
                    displayName: "Bulgaria",
                    defaultTimeZoneId: "Europe/Sofia",
                    timeZone: [{
                        timeZoneId: "Europe/Sofia",
                        displayName: "(GMT+03:00) Bulgaria Time"
                    }],
                    tosLocale: {
                        language: "bg",
                        country: "BG"
                    }
                }, {
                    countryCode: "CA",
                    displayName: "Canada",
                    defaultTimeZoneId: "America/Dawson",
                    timeZone: [{
                        timeZoneId: "America/Dawson",
                        displayName: "(GMT-07:00) Dawson Time"
                    }, {
                        timeZoneId: "America/Vancouver",
                        displayName: "(GMT-07:00) Vancouver Time"
                    }, {
                        timeZoneId: "America/Whitehorse",
                        displayName: "(GMT-07:00) Whitehorse Time"
                    }, {
                        timeZoneId: "America/Edmonton",
                        displayName: "(GMT-06:00) Edmonton Time"
                    }, {
                        timeZoneId: "America/Yellowknife",
                        displayName: "(GMT-06:00) Yellowknife Time"
                    }, {
                        timeZoneId: "America/Dawson_Creek",
                        displayName: "(GMT-07:00) Dawson Creek Time"
                    }, {
                        timeZoneId: "America/Winnipeg",
                        displayName: "(GMT-05:00) Winnipeg Time"
                    }, {
                        timeZoneId: "America/Regina",
                        displayName: "(GMT-06:00) Regina Time"
                    }, {
                        timeZoneId: "America/Iqaluit",
                        displayName: "(GMT-04:00) Iqaluit Time"
                    }, {
                        timeZoneId: "America/Toronto",
                        displayName: "(GMT-04:00) Toronto Time"
                    }, {
                        timeZoneId: "America/Halifax",
                        displayName: "(GMT-03:00) Halifax Time"
                    }, {
                        timeZoneId: "America/St_Johns",
                        displayName: "(GMT-02:30) St. John’s Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "CV",
                    displayName: "Cape Verde",
                    defaultTimeZoneId: "Atlantic/Cape_Verde",
                    timeZone: [{
                        timeZoneId: "Atlantic/Cape_Verde",
                        displayName: "(GMT-01:00) Cape Verde Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "TD",
                    displayName: "Chad",
                    defaultTimeZoneId: "Africa/Ndjamena",
                    timeZone: [{
                        timeZoneId: "Africa/Ndjamena",
                        displayName: "(GMT+01:00) Chad Time"
                    }],
                    tosLocale: {
                        language: "fr",
                        country: "FR"
                    }
                }, {
                    countryCode: "CL",
                    displayName: "Chile",
                    defaultTimeZoneId: "Pacific/Easter",
                    timeZone: [{
                        timeZoneId: "Pacific/Easter",
                        displayName: "(GMT-06:00) Easter Time"
                    }, {
                        timeZoneId: "America/Santiago",
                        displayName: "(GMT-04:00) Chile Time"
                    }, {
                        timeZoneId: "America/Punta_Arenas",
                        displayName: "(GMT-03:00) Punta Arenas Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "CN",
                    displayName: "China",
                    defaultTimeZoneId: "Asia/Shanghai",
                    timeZone: [{
                        timeZoneId: "Asia/Shanghai",
                        displayName: "(GMT+08:00) China Time"
                    }],
                    tosLocale: {
                        language: "zh",
                        country: "CN"
                    }
                }, {
                    countryCode: "CX",
                    displayName: "Christmas Island",
                    defaultTimeZoneId: "Indian/Christmas",
                    timeZone: [{
                        timeZoneId: "Indian/Christmas",
                        displayName: "(GMT+07:00) Christmas Island Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "CC",
                    displayName: "Cocos (Keeling) Islands",
                    defaultTimeZoneId: "Indian/Cocos",
                    timeZone: [{
                        timeZoneId: "Indian/Cocos",
                        displayName: "(GMT+06:30) Cocos (Keeling) Islands Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "CO",
                    displayName: "Colombia",
                    defaultTimeZoneId: "America/Bogota",
                    timeZone: [{
                        timeZoneId: "America/Bogota",
                        displayName: "(GMT-05:00) Colombia Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "CK",
                    displayName: "Cook Islands",
                    defaultTimeZoneId: "Pacific/Rarotonga",
                    timeZone: [{
                        timeZoneId: "Pacific/Rarotonga",
                        displayName: "(GMT-10:00) Cook Islands Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "CR",
                    displayName: "Costa Rica",
                    defaultTimeZoneId: "America/Costa_Rica",
                    timeZone: [{
                        timeZoneId: "America/Costa_Rica",
                        displayName: "(GMT-06:00) Costa Rica Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "CI",
                    displayName: "Côte d’Ivoire",
                    defaultTimeZoneId: "Africa/Abidjan",
                    timeZone: [{
                        timeZoneId: "Africa/Abidjan",
                        displayName: "(GMT+00:00) Côte d’Ivoire Time"
                    }],
                    tosLocale: {
                        language: "fr",
                        country: "FR"
                    }
                }, {
                    countryCode: "HR",
                    displayName: "Croatia",
                    defaultTimeZoneId: "Europe/Zagreb",
                    timeZone: [{
                        timeZoneId: "Europe/Zagreb",
                        displayName: "(GMT+02:00) Croatia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "CU",
                    displayName: "Cuba",
                    defaultTimeZoneId: "America/Havana",
                    timeZone: [{
                        timeZoneId: "America/Havana",
                        displayName: "(GMT-04:00) Cuba Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "CW",
                    displayName: "Curaçao",
                    defaultTimeZoneId: "America/Curacao",
                    timeZone: [{
                        timeZoneId: "America/Curacao",
                        displayName: "(GMT-04:00) Curaçao Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "CY",
                    displayName: "Cyprus",
                    defaultTimeZoneId: "Asia/Nicosia",
                    timeZone: [{
                        timeZoneId: "Asia/Nicosia",
                        displayName: "(GMT+03:00) Nicosia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "CZ",
                    displayName: "Czechia",
                    defaultTimeZoneId: "Europe/Prague",
                    timeZone: [{
                        timeZoneId: "Europe/Prague",
                        displayName: "(GMT+02:00) Czechia Time"
                    }],
                    tosLocale: {
                        language: "cs",
                        country: "CZ"
                    }
                }, {
                    countryCode: "DK",
                    displayName: "Denmark",
                    defaultTimeZoneId: "Europe/Copenhagen",
                    timeZone: [{
                        timeZoneId: "Europe/Copenhagen",
                        displayName: "(GMT+02:00) Denmark Time"
                    }],
                    tosLocale: {
                        language: "da",
                        country: "DK"
                    }
                }, {
                    countryCode: "DO",
                    displayName: "Dominican Republic",
                    defaultTimeZoneId: "America/Santo_Domingo",
                    timeZone: [{
                        timeZoneId: "America/Santo_Domingo",
                        displayName: "(GMT-04:00) Dominican Republic Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "EC",
                    displayName: "Ecuador",
                    defaultTimeZoneId: "Pacific/Galapagos",
                    timeZone: [{
                        timeZoneId: "Pacific/Galapagos",
                        displayName: "(GMT-06:00) Galapagos Time"
                    }, {
                        timeZoneId: "America/Guayaquil",
                        displayName: "(GMT-05:00) Ecuador Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "EG",
                    displayName: "Egypt",
                    defaultTimeZoneId: "Africa/Cairo",
                    timeZone: [{
                        timeZoneId: "Africa/Cairo",
                        displayName: "(GMT+02:00) Egypt Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "SV",
                    displayName: "El Salvador",
                    defaultTimeZoneId: "America/El_Salvador",
                    timeZone: [{
                        timeZoneId: "America/El_Salvador",
                        displayName: "(GMT-06:00) El Salvador Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "EE",
                    displayName: "Estonia",
                    defaultTimeZoneId: "Europe/Tallinn",
                    timeZone: [{
                        timeZoneId: "Europe/Tallinn",
                        displayName: "(GMT+03:00) Estonia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "FK",
                    displayName: "Falkland Islands (Islas Malvinas)",
                    defaultTimeZoneId: "Atlantic/Stanley",
                    timeZone: [{
                        timeZoneId: "Atlantic/Stanley",
                        displayName: "(GMT-03:00) Falkland Islands (Islas Malvinas) Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "FO",
                    displayName: "Faroe Islands",
                    defaultTimeZoneId: "Atlantic/Faeroe",
                    timeZone: [{
                        timeZoneId: "Atlantic/Faeroe",
                        displayName: "(GMT+01:00) Faroe Islands Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "FJ",
                    displayName: "Fiji",
                    defaultTimeZoneId: "Pacific/Fiji",
                    timeZone: [{
                        timeZoneId: "Pacific/Fiji",
                        displayName: "(GMT+12:00) Fiji Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "FI",
                    displayName: "Finland",
                    defaultTimeZoneId: "Europe/Helsinki",
                    timeZone: [{
                        timeZoneId: "Europe/Helsinki",
                        displayName: "(GMT+03:00) Finland Time"
                    }],
                    tosLocale: {
                        language: "fi",
                        country: "FI"
                    }
                }, {
                    countryCode: "FR",
                    displayName: "France",
                    defaultTimeZoneId: "Europe/Paris",
                    timeZone: [{
                        timeZoneId: "Europe/Paris",
                        displayName: "(GMT+02:00) France Time"
                    }],
                    tosLocale: {
                        language: "fr",
                        country: "FR"
                    }
                }, {
                    countryCode: "GF",
                    displayName: "French Guiana",
                    defaultTimeZoneId: "America/Cayenne",
                    timeZone: [{
                        timeZoneId: "America/Cayenne",
                        displayName: "(GMT-03:00) French Guiana Time"
                    }],
                    tosLocale: {
                        language: "fr",
                        country: "FR"
                    }
                }, {
                    countryCode: "PF",
                    displayName: "French Polynesia",
                    defaultTimeZoneId: "Pacific/Tahiti",
                    timeZone: [{
                        timeZoneId: "Pacific/Tahiti",
                        displayName: "(GMT-10:00) Tahiti Time"
                    }, {
                        timeZoneId: "Pacific/Marquesas",
                        displayName: "(GMT-09:30) Marquesas Time"
                    }, {
                        timeZoneId: "Pacific/Gambier",
                        displayName: "(GMT-09:00) Gambier Time"
                    }],
                    tosLocale: {
                        language: "fr",
                        country: "FR"
                    }
                }, {
                    countryCode: "TF",
                    displayName: "French Southern Territories",
                    defaultTimeZoneId: "Indian/Kerguelen",
                    timeZone: [{
                        timeZoneId: "Indian/Kerguelen",
                        displayName: "(GMT+05:00) French Southern Territories Time"
                    }],
                    tosLocale: {
                        language: "fr",
                        country: "FR"
                    }
                }, {
                    countryCode: "GE",
                    displayName: "Georgia",
                    defaultTimeZoneId: "Asia/Tbilisi",
                    timeZone: [{
                        timeZoneId: "Asia/Tbilisi",
                        displayName: "(GMT+04:00) Georgia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "DE",
                    displayName: "Germany",
                    defaultTimeZoneId: "Europe/Berlin",
                    timeZone: [{
                        timeZoneId: "Europe/Berlin",
                        displayName: "(GMT+02:00) Germany Time"
                    }],
                    tosLocale: {
                        language: "de",
                        country: "DE"
                    }
                }, {
                    countryCode: "GH",
                    displayName: "Ghana",
                    defaultTimeZoneId: "Africa/Accra",
                    timeZone: [{
                        timeZoneId: "Africa/Accra",
                        displayName: "(GMT+00:00) Ghana Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "GI",
                    displayName: "Gibraltar",
                    defaultTimeZoneId: "Europe/Gibraltar",
                    timeZone: [{
                        timeZoneId: "Europe/Gibraltar",
                        displayName: "(GMT+02:00) Gibraltar Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "GR",
                    displayName: "Greece",
                    defaultTimeZoneId: "Europe/Athens",
                    timeZone: [{
                        timeZoneId: "Europe/Athens",
                        displayName: "(GMT+03:00) Greece Time"
                    }],
                    tosLocale: {
                        language: "el",
                        country: "GR"
                    }
                }, {
                    countryCode: "GL",
                    displayName: "Greenland",
                    defaultTimeZoneId: "America/Thule",
                    timeZone: [{
                        timeZoneId: "America/Thule",
                        displayName: "(GMT-03:00) Thule Time"
                    }, {
                        timeZoneId: "America/Godthab",
                        displayName: "(GMT-02:00) Nuuk Time"
                    }, {
                        timeZoneId: "America/Scoresbysund",
                        displayName: "(GMT+00:00) Ittoqqortoormiit Time"
                    }, {
                        timeZoneId: "America/Danmarkshavn",
                        displayName: "(GMT+00:00) Danmarkshavn Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "GU",
                    displayName: "Guam",
                    defaultTimeZoneId: "Pacific/Guam",
                    timeZone: [{
                        timeZoneId: "Pacific/Guam",
                        displayName: "(GMT+10:00) Guam Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "GT",
                    displayName: "Guatemala",
                    defaultTimeZoneId: "America/Guatemala",
                    timeZone: [{
                        timeZoneId: "America/Guatemala",
                        displayName: "(GMT-06:00) Guatemala Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "GW",
                    displayName: "Guinea-Bissau",
                    defaultTimeZoneId: "Africa/Bissau",
                    timeZone: [{
                        timeZoneId: "Africa/Bissau",
                        displayName: "(GMT+00:00) Guinea-Bissau Time"
                    }],
                    tosLocale: {
                        language: "fr",
                        country: "FR"
                    }
                }, {
                    countryCode: "GY",
                    displayName: "Guyana",
                    defaultTimeZoneId: "America/Guyana",
                    timeZone: [{
                        timeZoneId: "America/Guyana",
                        displayName: "(GMT-04:00) Guyana Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "HT",
                    displayName: "Haiti",
                    defaultTimeZoneId: "America/Port-au-Prince",
                    timeZone: [{
                        timeZoneId: "America/Port-au-Prince",
                        displayName: "(GMT-04:00) Haiti Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "HN",
                    displayName: "Honduras",
                    defaultTimeZoneId: "America/Tegucigalpa",
                    timeZone: [{
                        timeZoneId: "America/Tegucigalpa",
                        displayName: "(GMT-06:00) Honduras Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "HK",
                    displayName: "Hong Kong",
                    defaultTimeZoneId: "Asia/Hong_Kong",
                    timeZone: [{
                        timeZoneId: "Asia/Hong_Kong",
                        displayName: "(GMT+08:00) Hong Kong Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "HU",
                    displayName: "Hungary",
                    defaultTimeZoneId: "Europe/Budapest",
                    timeZone: [{
                        timeZoneId: "Europe/Budapest",
                        displayName: "(GMT+02:00) Hungary Time"
                    }],
                    tosLocale: {
                        language: "hu",
                        country: "HU"
                    }
                }, {
                    countryCode: "IS",
                    displayName: "Iceland",
                    defaultTimeZoneId: "Atlantic/Reykjavik",
                    timeZone: [{
                        timeZoneId: "Atlantic/Reykjavik",
                        displayName: "(GMT+00:00) Iceland Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "IN",
                    displayName: "India",
                    defaultTimeZoneId: "Asia/Calcutta",
                    timeZone: [{
                        timeZoneId: "Asia/Calcutta",
                        displayName: "(GMT+05:30) India Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "ID",
                    displayName: "Indonesia",
                    defaultTimeZoneId: "Asia/Jakarta",
                    timeZone: [{
                        timeZoneId: "Asia/Jakarta",
                        displayName: "(GMT+07:00) Jakarta Time"
                    }, {
                        timeZoneId: "Asia/Makassar",
                        displayName: "(GMT+08:00) Makassar Time"
                    }, {
                        timeZoneId: "Asia/Jayapura",
                        displayName: "(GMT+09:00) Jayapura Time"
                    }],
                    tosLocale: {
                        language: "in",
                        country: "ID"
                    }
                }, {
                    countryCode: "IR",
                    displayName: "Iran",
                    defaultTimeZoneId: "Asia/Tehran",
                    timeZone: [{
                        timeZoneId: "Asia/Tehran",
                        displayName: "(GMT+04:30) Iran Time"
                    }]
                }, {
                    countryCode: "IQ",
                    displayName: "Iraq",
                    defaultTimeZoneId: "Asia/Baghdad",
                    timeZone: [{
                        timeZoneId: "Asia/Baghdad",
                        displayName: "(GMT+03:00) Iraq Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "IE",
                    displayName: "Ireland",
                    defaultTimeZoneId: "Europe/Dublin",
                    timeZone: [{
                        timeZoneId: "Europe/Dublin",
                        displayName: "(GMT+01:00) Ireland Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "IL",
                    displayName: "Israel",
                    defaultTimeZoneId: "Asia/Jerusalem",
                    timeZone: [{
                        timeZoneId: "Asia/Jerusalem",
                        displayName: "(GMT+03:00) Israel Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "IT",
                    displayName: "Italy",
                    defaultTimeZoneId: "Europe/Rome",
                    timeZone: [{
                        timeZoneId: "Europe/Rome",
                        displayName: "(GMT+02:00) Italy Time"
                    }],
                    tosLocale: {
                        language: "it",
                        country: "IT"
                    }
                }, {
                    countryCode: "JM",
                    displayName: "Jamaica",
                    defaultTimeZoneId: "America/Jamaica",
                    timeZone: [{
                        timeZoneId: "America/Jamaica",
                        displayName: "(GMT-05:00) Jamaica Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "JP",
                    displayName: "Japan",
                    defaultTimeZoneId: "Asia/Tokyo",
                    timeZone: [{
                        timeZoneId: "Asia/Tokyo",
                        displayName: "(GMT+09:00) Japan Time"
                    }],
                    tosLocale: {
                        language: "ja",
                        country: "JP"
                    }
                }, {
                    countryCode: "JO",
                    displayName: "Jordan",
                    defaultTimeZoneId: "Asia/Amman",
                    timeZone: [{
                        timeZoneId: "Asia/Amman",
                        displayName: "(GMT+03:00) Jordan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "KZ",
                    displayName: "Kazakhstan",
                    defaultTimeZoneId: "Asia/Aqtau",
                    timeZone: [{
                        timeZoneId: "Asia/Aqtau",
                        displayName: "(GMT+05:00) Aqtau Time"
                    }, {
                        timeZoneId: "Asia/Aqtobe",
                        displayName: "(GMT+05:00) Aqtobe Time"
                    }, {
                        timeZoneId: "Asia/Almaty",
                        displayName: "(GMT+06:00) Almaty Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "KE",
                    displayName: "Kenya",
                    defaultTimeZoneId: "Africa/Nairobi",
                    timeZone: [{
                        timeZoneId: "Africa/Nairobi",
                        displayName: "(GMT+03:00) Kenya Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "KI",
                    displayName: "Kiribati",
                    defaultTimeZoneId: "Pacific/Tarawa",
                    timeZone: [{
                        timeZoneId: "Pacific/Tarawa",
                        displayName: "(GMT+12:00) Tarawa Time"
                    }, {
                        timeZoneId: "Pacific/Enderbury",
                        displayName: "(GMT+13:00) Enderbury Time"
                    }, {
                        timeZoneId: "Pacific/Kiritimati",
                        displayName: "(GMT+14:00) Kiritimati Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "KG",
                    displayName: "Kyrgyzstan",
                    defaultTimeZoneId: "Asia/Bishkek",
                    timeZone: [{
                        timeZoneId: "Asia/Bishkek",
                        displayName: "(GMT+06:00) Kyrgyzstan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "LV",
                    displayName: "Latvia",
                    defaultTimeZoneId: "Europe/Riga",
                    timeZone: [{
                        timeZoneId: "Europe/Riga",
                        displayName: "(GMT+03:00) Latvia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "LB",
                    displayName: "Lebanon",
                    defaultTimeZoneId: "Asia/Beirut",
                    timeZone: [{
                        timeZoneId: "Asia/Beirut",
                        displayName: "(GMT+03:00) Lebanon Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "LR",
                    displayName: "Liberia",
                    defaultTimeZoneId: "Africa/Monrovia",
                    timeZone: [{
                        timeZoneId: "Africa/Monrovia",
                        displayName: "(GMT+00:00) Liberia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "LY",
                    displayName: "Libya",
                    defaultTimeZoneId: "Africa/Tripoli",
                    timeZone: [{
                        timeZoneId: "Africa/Tripoli",
                        displayName: "(GMT+02:00) Libya Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "LT",
                    displayName: "Lithuania",
                    defaultTimeZoneId: "Europe/Vilnius",
                    timeZone: [{
                        timeZoneId: "Europe/Vilnius",
                        displayName: "(GMT+03:00) Lithuania Time"
                    }],
                    tosLocale: {
                        language: "lt",
                        country: "LT"
                    }
                }, {
                    countryCode: "LU",
                    displayName: "Luxembourg",
                    defaultTimeZoneId: "Europe/Luxembourg",
                    timeZone: [{
                        timeZoneId: "Europe/Luxembourg",
                        displayName: "(GMT+02:00) Luxembourg Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "MO",
                    displayName: "Macao",
                    defaultTimeZoneId: "Asia/Macau",
                    timeZone: [{
                        timeZoneId: "Asia/Macau",
                        displayName: "(GMT+08:00) Macao Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "MY",
                    displayName: "Malaysia",
                    defaultTimeZoneId: "Asia/Kuala_Lumpur",
                    timeZone: [{
                        timeZoneId: "Asia/Kuala_Lumpur",
                        displayName: "(GMT+08:00) Malaysia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "MV",
                    displayName: "Maldives",
                    defaultTimeZoneId: "Indian/Maldives",
                    timeZone: [{
                        timeZoneId: "Indian/Maldives",
                        displayName: "(GMT+05:00) Maldives Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "MT",
                    displayName: "Malta",
                    defaultTimeZoneId: "Europe/Malta",
                    timeZone: [{
                        timeZoneId: "Europe/Malta",
                        displayName: "(GMT+02:00) Malta Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "MH",
                    displayName: "Marshall Islands",
                    defaultTimeZoneId: "Pacific/Kwajalein",
                    timeZone: [{
                        timeZoneId: "Pacific/Kwajalein",
                        displayName: "(GMT+12:00) Kwajalein Time"
                    }, {
                        timeZoneId: "Pacific/Majuro",
                        displayName: "(GMT+12:00) Marshall Islands Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "MQ",
                    displayName: "Martinique",
                    defaultTimeZoneId: "America/Martinique",
                    timeZone: [{
                        timeZoneId: "America/Martinique",
                        displayName: "(GMT-04:00) Martinique Time"
                    }],
                    tosLocale: {
                        language: "fr",
                        country: "FR"
                    }
                }, {
                    countryCode: "MU",
                    displayName: "Mauritius",
                    defaultTimeZoneId: "Indian/Mauritius",
                    timeZone: [{
                        timeZoneId: "Indian/Mauritius",
                        displayName: "(GMT+04:00) Mauritius Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "MX",
                    displayName: "Mexico",
                    defaultTimeZoneId: "America/Tijuana",
                    timeZone: [{
                        timeZoneId: "America/Tijuana",
                        displayName: "(GMT-07:00) Tijuana Time"
                    }, {
                        timeZoneId: "America/Mazatlan",
                        displayName: "(GMT-06:00) Mazatlan Time"
                    }, {
                        timeZoneId: "America/Hermosillo",
                        displayName: "(GMT-07:00) Hermosillo Time"
                    }, {
                        timeZoneId: "America/Mexico_City",
                        displayName: "(GMT-05:00) Mexico City Time"
                    }, {
                        timeZoneId: "America/Cancun",
                        displayName: "(GMT-05:00) Cancun Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "FM",
                    displayName: "Micronesia",
                    defaultTimeZoneId: "Pacific/Truk",
                    timeZone: [{
                        timeZoneId: "Pacific/Truk",
                        displayName: "(GMT+10:00) Chuuk Time"
                    }, {
                        timeZoneId: "Pacific/Kosrae",
                        displayName: "(GMT+11:00) Kosrae Time"
                    }, {
                        timeZoneId: "Pacific/Ponape",
                        displayName: "(GMT+11:00) Pohnpei Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "MD",
                    displayName: "Moldova",
                    defaultTimeZoneId: "Europe/Chisinau",
                    timeZone: [{
                        timeZoneId: "Europe/Chisinau",
                        displayName: "(GMT+03:00) Moldova Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "MC",
                    displayName: "Monaco",
                    defaultTimeZoneId: "Europe/Monaco",
                    timeZone: [{
                        timeZoneId: "Europe/Monaco",
                        displayName: "(GMT+02:00) Monaco Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "MN",
                    displayName: "Mongolia",
                    defaultTimeZoneId: "Asia/Hovd",
                    timeZone: [{
                        timeZoneId: "Asia/Hovd",
                        displayName: "(GMT+07:00) Hovd Time"
                    }, {
                        timeZoneId: "Asia/Choibalsan",
                        displayName: "(GMT+08:00) Choibalsan Time"
                    }, {
                        timeZoneId: "Asia/Ulaanbaatar",
                        displayName: "(GMT+08:00) Ulaanbaatar Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "MA",
                    displayName: "Morocco",
                    defaultTimeZoneId: "Africa/Casablanca",
                    timeZone: [{
                        timeZoneId: "Africa/Casablanca",
                        displayName: "(GMT+01:00) Morocco Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "MZ",
                    displayName: "Mozambique",
                    defaultTimeZoneId: "Africa/Maputo",
                    timeZone: [{
                        timeZoneId: "Africa/Maputo",
                        displayName: "(GMT+02:00) Mozambique Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "MM",
                    displayName: "Myanmar (Burma)",
                    defaultTimeZoneId: "Asia/Rangoon",
                    timeZone: [{
                        timeZoneId: "Asia/Rangoon",
                        displayName: "(GMT+06:30) Myanmar (Burma) Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "NA",
                    displayName: "Namibia",
                    defaultTimeZoneId: "Africa/Windhoek",
                    timeZone: [{
                        timeZoneId: "Africa/Windhoek",
                        displayName: "(GMT+02:00) Namibia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "NR",
                    displayName: "Nauru",
                    defaultTimeZoneId: "Pacific/Nauru",
                    timeZone: [{
                        timeZoneId: "Pacific/Nauru",
                        displayName: "(GMT+12:00) Nauru Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "NP",
                    displayName: "Nepal",
                    defaultTimeZoneId: "Asia/Katmandu",
                    timeZone: [{
                        timeZoneId: "Asia/Katmandu",
                        displayName: "(GMT+05:45) Nepal Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "NL",
                    displayName: "Netherlands",
                    defaultTimeZoneId: "Europe/Amsterdam",
                    timeZone: [{
                        timeZoneId: "Europe/Amsterdam",
                        displayName: "(GMT+02:00) Netherlands Time"
                    }],
                    tosLocale: {
                        language: "nl",
                        country: "NL"
                    }
                }, {
                    countryCode: "NC",
                    displayName: "New Caledonia",
                    defaultTimeZoneId: "Pacific/Noumea",
                    timeZone: [{
                        timeZoneId: "Pacific/Noumea",
                        displayName: "(GMT+11:00) New Caledonia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "NZ",
                    displayName: "New Zealand",
                    defaultTimeZoneId: "Pacific/Auckland",
                    timeZone: [{
                        timeZoneId: "Pacific/Auckland",
                        displayName: "(GMT+12:00) New Zealand Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "NI",
                    displayName: "Nicaragua",
                    defaultTimeZoneId: "America/Managua",
                    timeZone: [{
                        timeZoneId: "America/Managua",
                        displayName: "(GMT-06:00) Nicaragua Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "NG",
                    displayName: "Nigeria",
                    defaultTimeZoneId: "Africa/Lagos",
                    timeZone: [{
                        timeZoneId: "Africa/Lagos",
                        displayName: "(GMT+01:00) Nigeria Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "NU",
                    displayName: "Niue",
                    defaultTimeZoneId: "Pacific/Niue",
                    timeZone: [{
                        timeZoneId: "Pacific/Niue",
                        displayName: "(GMT-11:00) Niue Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "NF",
                    displayName: "Norfolk Island",
                    defaultTimeZoneId: "Pacific/Norfolk",
                    timeZone: [{
                        timeZoneId: "Pacific/Norfolk",
                        displayName: "(GMT+11:00) Norfolk Island Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "KP",
                    displayName: "North Korea",
                    defaultTimeZoneId: "Asia/Pyongyang",
                    timeZone: [{
                        timeZoneId: "Asia/Pyongyang",
                        displayName: "(GMT+09:00) North Korea Time"
                    }]
                }, {
                    countryCode: "MK",
                    displayName: "North Macedonia",
                    defaultTimeZoneId: "Europe/Skopje",
                    timeZone: [{
                        timeZoneId: "Europe/Skopje",
                        displayName: "(GMT+02:00) North Macedonia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "NO",
                    displayName: "Norway",
                    defaultTimeZoneId: "Europe/Oslo",
                    timeZone: [{
                        timeZoneId: "Europe/Oslo",
                        displayName: "(GMT+02:00) Norway Time"
                    }],
                    tosLocale: {
                        language: "no",
                        country: "NO"
                    }
                }, {
                    countryCode: "PK",
                    displayName: "Pakistan",
                    defaultTimeZoneId: "Asia/Karachi",
                    timeZone: [{
                        timeZoneId: "Asia/Karachi",
                        displayName: "(GMT+05:00) Pakistan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "PW",
                    displayName: "Palau",
                    defaultTimeZoneId: "Pacific/Palau",
                    timeZone: [{
                        timeZoneId: "Pacific/Palau",
                        displayName: "(GMT+09:00) Palau Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "PS",
                    displayName: "Palestine",
                    defaultTimeZoneId: "Asia/Gaza",
                    timeZone: [{
                        timeZoneId: "Asia/Gaza",
                        displayName: "(GMT+03:00) Gaza Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "PA",
                    displayName: "Panama",
                    defaultTimeZoneId: "America/Panama",
                    timeZone: [{
                        timeZoneId: "America/Panama",
                        displayName: "(GMT-05:00) Panama Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "PG",
                    displayName: "Papua New Guinea",
                    defaultTimeZoneId: "Pacific/Port_Moresby",
                    timeZone: [{
                        timeZoneId: "Pacific/Port_Moresby",
                        displayName: "(GMT+10:00) Port Moresby Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "PY",
                    displayName: "Paraguay",
                    defaultTimeZoneId: "America/Asuncion",
                    timeZone: [{
                        timeZoneId: "America/Asuncion",
                        displayName: "(GMT-04:00) Paraguay Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "PE",
                    displayName: "Peru",
                    defaultTimeZoneId: "America/Lima",
                    timeZone: [{
                        timeZoneId: "America/Lima",
                        displayName: "(GMT-05:00) Peru Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "PH",
                    displayName: "Philippines",
                    defaultTimeZoneId: "Asia/Manila",
                    timeZone: [{
                        timeZoneId: "Asia/Manila",
                        displayName: "(GMT+08:00) Philippines Time"
                    }],
                    tosLocale: {
                        language: "tl",
                        country: "PH"
                    }
                }, {
                    countryCode: "PN",
                    displayName: "Pitcairn Islands",
                    defaultTimeZoneId: "Pacific/Pitcairn",
                    timeZone: [{
                        timeZoneId: "Pacific/Pitcairn",
                        displayName: "(GMT-08:00) Pitcairn Islands Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "PL",
                    displayName: "Poland",
                    defaultTimeZoneId: "Europe/Warsaw",
                    timeZone: [{
                        timeZoneId: "Europe/Warsaw",
                        displayName: "(GMT+02:00) Poland Time"
                    }],
                    tosLocale: {
                        language: "pl",
                        country: "PL"
                    }
                }, {
                    countryCode: "PT",
                    displayName: "Portugal",
                    defaultTimeZoneId: "Atlantic/Azores",
                    timeZone: [{
                        timeZoneId: "Atlantic/Azores",
                        displayName: "(GMT+00:00) Azores Time"
                    }, {
                        timeZoneId: "Europe/Lisbon",
                        displayName: "(GMT+01:00) Portugal Time"
                    }],
                    tosLocale: {
                        language: "pt",
                        country: "PT"
                    }
                }, {
                    countryCode: "PR",
                    displayName: "Puerto Rico",
                    defaultTimeZoneId: "America/Puerto_Rico",
                    timeZone: [{
                        timeZoneId: "America/Puerto_Rico",
                        displayName: "(GMT-04:00) Puerto Rico Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "QA",
                    displayName: "Qatar",
                    defaultTimeZoneId: "Asia/Qatar",
                    timeZone: [{
                        timeZoneId: "Asia/Qatar",
                        displayName: "(GMT+03:00) Qatar Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "RE",
                    displayName: "Réunion",
                    defaultTimeZoneId: "Indian/Reunion",
                    timeZone: [{
                        timeZoneId: "Indian/Reunion",
                        displayName: "(GMT+04:00) Réunion Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "RO",
                    displayName: "Romania",
                    defaultTimeZoneId: "Europe/Bucharest",
                    timeZone: [{
                        timeZoneId: "Europe/Bucharest",
                        displayName: "(GMT+03:00) Romania Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "RU",
                    displayName: "Russia",
                    defaultTimeZoneId: "Europe/Kaliningrad",
                    timeZone: [{
                        timeZoneId: "Europe/Kaliningrad",
                        displayName: "(GMT+02:00) Kaliningrad Time"
                    }, {
                        timeZoneId: "Europe/Moscow",
                        displayName: "(GMT+03:00) Moscow Time"
                    }, {
                        timeZoneId: "Europe/Samara",
                        displayName: "(GMT+04:00) Samara Time"
                    }, {
                        timeZoneId: "Asia/Yekaterinburg",
                        displayName: "(GMT+05:00) Yekaterinburg Time"
                    }, {
                        timeZoneId: "Asia/Omsk",
                        displayName: "(GMT+06:00) Omsk Time"
                    }, {
                        timeZoneId: "Asia/Krasnoyarsk",
                        displayName: "(GMT+07:00) Krasnoyarsk Time"
                    }, {
                        timeZoneId: "Asia/Irkutsk",
                        displayName: "(GMT+08:00) Irkutsk Time"
                    }, {
                        timeZoneId: "Asia/Yakutsk",
                        displayName: "(GMT+09:00) Yakutsk Time"
                    }, {
                        timeZoneId: "Asia/Vladivostok",
                        displayName: "(GMT+10:00) Vladivostok Time"
                    }, {
                        timeZoneId: "Asia/Magadan",
                        displayName: "(GMT+11:00) Magadan Time"
                    }, {
                        timeZoneId: "Asia/Kamchatka",
                        displayName: "(GMT+12:00) Kamchatka Time"
                    }],
                    tosLocale: {
                        language: "ru",
                        country: "RU"
                    }
                }, {
                    countryCode: "WS",
                    displayName: "Samoa",
                    defaultTimeZoneId: "Pacific/Apia",
                    timeZone: [{
                        timeZoneId: "Pacific/Apia",
                        displayName: "(GMT+13:00) Samoa Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "SM",
                    displayName: "San Marino",
                    defaultTimeZoneId: "Europe/San_Marino",
                    timeZone: [{
                        timeZoneId: "Europe/San_Marino",
                        displayName: "(GMT+02:00) San Marino Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "ST",
                    displayName: "São Tomé & Príncipe",
                    defaultTimeZoneId: "Africa/Sao_Tome",
                    timeZone: [{
                        timeZoneId: "Africa/Sao_Tome",
                        displayName: "(GMT+00:00) São Tomé & Príncipe Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "SA",
                    displayName: "Saudi Arabia",
                    defaultTimeZoneId: "Asia/Riyadh",
                    timeZone: [{
                        timeZoneId: "Asia/Riyadh",
                        displayName: "(GMT+03:00) Saudi Arabia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "RS",
                    displayName: "Serbia",
                    defaultTimeZoneId: "Europe/Belgrade",
                    timeZone: [{
                        timeZoneId: "Europe/Belgrade",
                        displayName: "(GMT+02:00) Serbia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "SC",
                    displayName: "Seychelles",
                    defaultTimeZoneId: "Indian/Mahe",
                    timeZone: [{
                        timeZoneId: "Indian/Mahe",
                        displayName: "(GMT+04:00) Seychelles Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "SG",
                    displayName: "Singapore",
                    defaultTimeZoneId: "Asia/Singapore",
                    timeZone: [{
                        timeZoneId: "Asia/Singapore",
                        displayName: "(GMT+08:00) Singapore Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "SK",
                    displayName: "Slovakia",
                    defaultTimeZoneId: "Europe/Bratislava",
                    timeZone: [{
                        timeZoneId: "Europe/Bratislava",
                        displayName: "(GMT+02:00) Slovakia Time"
                    }],
                    tosLocale: {
                        language: "sk",
                        country: "SK"
                    }
                }, {
                    countryCode: "SI",
                    displayName: "Slovenia",
                    defaultTimeZoneId: "Europe/Ljubljana",
                    timeZone: [{
                        timeZoneId: "Europe/Ljubljana",
                        displayName: "(GMT+02:00) Slovenia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "SB",
                    displayName: "Solomon Islands",
                    defaultTimeZoneId: "Pacific/Guadalcanal",
                    timeZone: [{
                        timeZoneId: "Pacific/Guadalcanal",
                        displayName: "(GMT+11:00) Solomon Islands Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "ZA",
                    displayName: "South Africa",
                    defaultTimeZoneId: "Africa/Johannesburg",
                    timeZone: [{
                        timeZoneId: "Africa/Johannesburg",
                        displayName: "(GMT+02:00) South Africa Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "GS",
                    displayName: "South Georgia & South Sandwich Islands",
                    defaultTimeZoneId: "Atlantic/South_Georgia",
                    timeZone: [{
                        timeZoneId: "Atlantic/South_Georgia",
                        displayName: "(GMT-02:00) South Georgia & South Sandwich Islands Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "KR",
                    displayName: "South Korea",
                    defaultTimeZoneId: "Asia/Seoul",
                    timeZone: [{
                        timeZoneId: "Asia/Seoul",
                        displayName: "(GMT+09:00) South Korea Time"
                    }],
                    tosLocale: {
                        language: "ko",
                        country: "KR"
                    }
                }, {
                    countryCode: "ES",
                    displayName: "Spain",
                    defaultTimeZoneId: "Atlantic/Canary",
                    timeZone: [{
                        timeZoneId: "Atlantic/Canary",
                        displayName: "(GMT+01:00) Canary Time"
                    }, {
                        timeZoneId: "Africa/Ceuta",
                        displayName: "(GMT+02:00) Ceuta Time"
                    }, {
                        timeZoneId: "Europe/Madrid",
                        displayName: "(GMT+02:00) Spain Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "LK",
                    displayName: "Sri Lanka",
                    defaultTimeZoneId: "Asia/Colombo",
                    timeZone: [{
                        timeZoneId: "Asia/Colombo",
                        displayName: "(GMT+05:30) Sri Lanka Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "PM",
                    displayName: "St. Pierre & Miquelon",
                    defaultTimeZoneId: "America/Miquelon",
                    timeZone: [{
                        timeZoneId: "America/Miquelon",
                        displayName: "(GMT-02:00) St. Pierre & Miquelon Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "SD",
                    displayName: "Sudan",
                    defaultTimeZoneId: "Africa/Khartoum",
                    timeZone: [{
                        timeZoneId: "Africa/Khartoum",
                        displayName: "(GMT+02:00) Sudan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "SR",
                    displayName: "Suriname",
                    defaultTimeZoneId: "America/Paramaribo",
                    timeZone: [{
                        timeZoneId: "America/Paramaribo",
                        displayName: "(GMT-03:00) Suriname Time"
                    }],
                    tosLocale: {
                        language: "nl",
                        country: "NL"
                    }
                }, {
                    countryCode: "SJ",
                    displayName: "Svalbard & Jan Mayen",
                    defaultTimeZoneId: "Arctic/Longyearbyen",
                    timeZone: [{
                        timeZoneId: "Arctic/Longyearbyen",
                        displayName: "(GMT+02:00) Svalbard & Jan Mayen Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "SE",
                    displayName: "Sweden",
                    defaultTimeZoneId: "Europe/Stockholm",
                    timeZone: [{
                        timeZoneId: "Europe/Stockholm",
                        displayName: "(GMT+02:00) Sweden Time"
                    }],
                    tosLocale: {
                        language: "sv",
                        country: "SE"
                    }
                }, {
                    countryCode: "CH",
                    displayName: "Switzerland",
                    defaultTimeZoneId: "Europe/Zurich",
                    timeZone: [{
                        timeZoneId: "Europe/Zurich",
                        displayName: "(GMT+02:00) Switzerland Time"
                    }],
                    tosLocale: {
                        language: "de",
                        country: "DE"
                    }
                }, {
                    countryCode: "SY",
                    displayName: "Syria",
                    defaultTimeZoneId: "Asia/Damascus",
                    timeZone: [{
                        timeZoneId: "Asia/Damascus",
                        displayName: "(GMT+03:00) Syria Time"
                    }]
                }, {
                    countryCode: "TW",
                    displayName: "Taiwan",
                    defaultTimeZoneId: "Asia/Taipei",
                    timeZone: [{
                        timeZoneId: "Asia/Taipei",
                        displayName: "(GMT+08:00) Taiwan Time"
                    }],
                    tosLocale: {
                        language: "zh",
                        country: "TW"
                    }
                }, {
                    countryCode: "TJ",
                    displayName: "Tajikistan",
                    defaultTimeZoneId: "Asia/Dushanbe",
                    timeZone: [{
                        timeZoneId: "Asia/Dushanbe",
                        displayName: "(GMT+05:00) Tajikistan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "TH",
                    displayName: "Thailand",
                    defaultTimeZoneId: "Asia/Bangkok",
                    timeZone: [{
                        timeZoneId: "Asia/Bangkok",
                        displayName: "(GMT+07:00) Thailand Time"
                    }],
                    tosLocale: {
                        language: "th",
                        country: "TH"
                    }
                }, {
                    countryCode: "TL",
                    displayName: "Timor-Leste",
                    defaultTimeZoneId: "Asia/Dili",
                    timeZone: [{
                        timeZoneId: "Asia/Dili",
                        displayName: "(GMT+09:00) Timor-Leste Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "TK",
                    displayName: "Tokelau",
                    defaultTimeZoneId: "Pacific/Fakaofo",
                    timeZone: [{
                        timeZoneId: "Pacific/Fakaofo",
                        displayName: "(GMT+13:00) Tokelau Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "TO",
                    displayName: "Tonga",
                    defaultTimeZoneId: "Pacific/Tongatapu",
                    timeZone: [{
                        timeZoneId: "Pacific/Tongatapu",
                        displayName: "(GMT+13:00) Tonga Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "TT",
                    displayName: "Trinidad & Tobago",
                    defaultTimeZoneId: "America/Port_of_Spain",
                    timeZone: [{
                        timeZoneId: "America/Port_of_Spain",
                        displayName: "(GMT-04:00) Trinidad & Tobago Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "TN",
                    displayName: "Tunisia",
                    defaultTimeZoneId: "Africa/Tunis",
                    timeZone: [{
                        timeZoneId: "Africa/Tunis",
                        displayName: "(GMT+01:00) Tunisia Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "TR",
                    displayName: "Turkey",
                    defaultTimeZoneId: "Europe/Istanbul",
                    timeZone: [{
                        timeZoneId: "Europe/Istanbul",
                        displayName: "(GMT+03:00) Turkey Time"
                    }],
                    tosLocale: {
                        language: "tr",
                        country: "TR"
                    }
                }, {
                    countryCode: "TM",
                    displayName: "Turkmenistan",
                    defaultTimeZoneId: "Asia/Ashgabat",
                    timeZone: [{
                        timeZoneId: "Asia/Ashgabat",
                        displayName: "(GMT+05:00) Turkmenistan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "TC",
                    displayName: "Turks & Caicos Islands",
                    defaultTimeZoneId: "America/Grand_Turk",
                    timeZone: [{
                        timeZoneId: "America/Grand_Turk",
                        displayName: "(GMT-04:00) Turks & Caicos Islands Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "TV",
                    displayName: "Tuvalu",
                    defaultTimeZoneId: "Pacific/Funafuti",
                    timeZone: [{
                        timeZoneId: "Pacific/Funafuti",
                        displayName: "(GMT+12:00) Tuvalu Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "UM",
                    displayName: "U.S. Outlying Islands",
                    defaultTimeZoneId: "Pacific/Wake",
                    timeZone: [{
                        timeZoneId: "Pacific/Wake",
                        displayName: "(GMT+12:00) Wake Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "UA",
                    displayName: "Ukraine",
                    defaultTimeZoneId: "Europe/Kiev",
                    timeZone: [{
                        timeZoneId: "Europe/Kiev",
                        displayName: "(GMT+03:00) Ukraine Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "AE",
                    displayName: "United Arab Emirates",
                    defaultTimeZoneId: "Asia/Dubai",
                    timeZone: [{
                        timeZoneId: "Asia/Dubai",
                        displayName: "(GMT+04:00) United Arab Emirates Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "GB",
                    displayName: "United Kingdom",
                    defaultTimeZoneId: "Etc/GMT",
                    timeZone: [{
                        timeZoneId: "Etc/GMT",
                        displayName: "(GMT+00:00) GMT"
                    }, {
                        timeZoneId: "Europe/London",
                        displayName: "(GMT+01:00) United Kingdom Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "US",
                    displayName: "United States",
                    defaultTimeZoneId: "America/Los_Angeles",
                    timeZone: [{
                        timeZoneId: "Pacific/Honolulu",
                        displayName: "(GMT-10:00) Honolulu Time"
                    }, {
                        timeZoneId: "America/Anchorage",
                        displayName: "(GMT-08:00) Anchorage Time"
                    }, {
                        timeZoneId: "America/Los_Angeles",
                        displayName: "(GMT-07:00) Los Angeles Time"
                    }, {
                        timeZoneId: "America/Boise",
                        displayName: "(GMT-06:00) Boise Time"
                    }, {
                        timeZoneId: "America/Denver",
                        displayName: "(GMT-06:00) Denver Time"
                    }, {
                        timeZoneId: "America/Phoenix",
                        displayName: "(GMT-07:00) Phoenix Time"
                    }, {
                        timeZoneId: "America/Chicago",
                        displayName: "(GMT-05:00) Chicago Time"
                    }, {
                        timeZoneId: "America/Detroit",
                        displayName: "(GMT-04:00) Detroit Time"
                    }, {
                        timeZoneId: "America/New_York",
                        displayName: "(GMT-04:00) New York Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "UY",
                    displayName: "Uruguay",
                    defaultTimeZoneId: "America/Montevideo",
                    timeZone: [{
                        timeZoneId: "America/Montevideo",
                        displayName: "(GMT-03:00) Uruguay Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "UZ",
                    displayName: "Uzbekistan",
                    defaultTimeZoneId: "Asia/Tashkent",
                    timeZone: [{
                        timeZoneId: "Asia/Tashkent",
                        displayName: "(GMT+05:00) Uzbekistan Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "VU",
                    displayName: "Vanuatu",
                    defaultTimeZoneId: "Pacific/Efate",
                    timeZone: [{
                        timeZoneId: "Pacific/Efate",
                        displayName: "(GMT+11:00) Vanuatu Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "US"
                    }
                }, {
                    countryCode: "VA",
                    displayName: "Vatican City",
                    defaultTimeZoneId: "Europe/Vatican",
                    timeZone: [{
                        timeZoneId: "Europe/Vatican",
                        displayName: "(GMT+02:00) Vatican City Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "VE",
                    displayName: "Venezuela",
                    defaultTimeZoneId: "America/Caracas",
                    timeZone: [{
                        timeZoneId: "America/Caracas",
                        displayName: "(GMT-04:00) Venezuela Time"
                    }],
                    tosLocale: {
                        language: "es",
                        country: "ES"
                    }
                }, {
                    countryCode: "VN",
                    displayName: "Vietnam",
                    defaultTimeZoneId: "Asia/Saigon",
                    timeZone: [{
                        timeZoneId: "Asia/Saigon",
                        displayName: "(GMT+07:00) Vietnam Time"
                    }],
                    tosLocale: {
                        language: "vi",
                        country: "VN"
                    }
                }, {
                    countryCode: "WF",
                    displayName: "Wallis & Futuna",
                    defaultTimeZoneId: "Pacific/Wallis",
                    timeZone: [{
                        timeZoneId: "Pacific/Wallis",
                        displayName: "(GMT+12:00) Wallis & Futuna Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }, {
                    countryCode: "EH",
                    displayName: "Western Sahara",
                    defaultTimeZoneId: "Africa/El_Aaiun",
                    timeZone: [{
                        timeZoneId: "Africa/El_Aaiun",
                        displayName: "(GMT+01:00) Western Sahara Time"
                    }],
                    tosLocale: {
                        language: "en",
                        country: "GB"
                    }
                }],
                i = r.reduce((function(e, t) {
                    return e[t.countryCode] = t.timeZone, e
                }), {}),
                o = Object(a.keyBy)(r, "countryCode"),
                c = r.reduce((function(e, t) {
                    return t.timeZone.forEach((function(n) {
                        var a = n.timeZoneId;
                        return e[a] = t.countryCode
                    })), e
                }), {})
        },
        19: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(16),
                    r = n.n(a),
                    i = n(17),
                    o = n.n(i),
                    c = n(8),
                    s = n.n(c),
                    l = n(0),
                    u = n.n(l),
                    d = n(124),
                    m = n(259),
                    g = n(2),
                    f = n(1),
                    p = n(7),
                    b = Object(g.forwardRef)((function(t, n) {
                        var a = t.children,
                            i = t.href,
                            c = t.text,
                            l = t.className,
                            u = t.danger,
                            b = t.disabled,
                            y = t.target,
                            v = t.icon,
                            h = t.trailingIcon,
                            E = t["aria-label"],
                            A = t.title,
                            S = t.tooltip,
                            _ = o()(t, ["children", "href", "text", "className", "danger", "disabled", "target", "icon", "trailingIcon", "aria-label", "title", "tooltip"]),
                            T = Object(g.useCallback)((function(e) {
                                null !== e && p.i.attachTo(e)
                            }), []),
                            O = Object(d.a)(n, T),
                            k = i && !b ? "a" : "button",
                            I = e.createElement(k, r()({
                                className: s()("mdc-button", l, {
                                    "mdc-button--raised": !c,
                                    "mdc-button--danger": u
                                }),
                                href: b ? void 0 : i,
                                ref: O,
                                disabled: !!b,
                                "aria-label": function() {
                                    var e = E;
                                    if ("_blank" !== y) return e;
                                    var t = Object(f._x)("(opens in a new tab)", "screen reader text", "google-site-kit");
                                    return "string" == typeof a && (e = e || a), e ? "".concat(e, " ").concat(t) : t
                                }(),
                                target: y || "_self",
                                role: "a" === k ? "button" : void 0
                            }, _), v, a && e.createElement("span", {
                                className: "mdc-button__label"
                            }, a), h);
                        return S && (A || E) || v && (A || E) && void 0 === a ? e.createElement(m.a, {
                            title: A || E,
                            classes: {
                                popper: "googlesitekit-tooltip-popper",
                                tooltip: "googlesitekit-tooltip"
                            }
                        }, I) : I
                    }));
                b.displayName = "Button", b.propTypes = {
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
        190: function(e, t, n) {
            "use strict";

            function a(e) {
                var t, n, a, r, i, o, c, s;
                if (void 0 !== e) return !(null == e || null === (t = e[0]) || void 0 === t || null === (n = t.data) || void 0 === n || null === (a = n.rows) || void 0 === a ? void 0 : a.length) || !(null == e || null === (r = e[0]) || void 0 === r || null === (i = r.data) || void 0 === i || null === (o = i.totals) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (s = c.values) || void 0 === s ? void 0 : s.length) || !e[0].data.totals.some((function(e) {
                    return e.values.some((function(e) {
                        return e > 0
                    }))
                }))
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        191: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ErrorNotice
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(89),
                    o = n(81);

                function ErrorNotice(t) {
                    var n, a = t.error,
                        r = t.shouldDisplayError,
                        c = void 0 === r ? function() {
                            return !0
                        } : r;
                    return a && !Object(i.c)(a) && c(a) ? e.createElement(o.a, {
                        message: a.message,
                        reconnectURL: null === (n = a.data) || void 0 === n ? void 0 : n.reconnectURL
                    }) : null
                }
                ErrorNotice.propTypes = {
                    error: r.a.shape({
                        message: r.a.string
                    }),
                    shouldDisplayError: r.a.func
                }
            }).call(this, n(3))
        },
        196: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                if ("string" == typeof e && e.match(/[0-9]{8}/)) {
                    var t = e.slice(0, 4),
                        n = Number(e.slice(4, 6)) - 1,
                        a = e.slice(6, 8);
                    return new Date(t, n.toString(), a)
                }
                return !1
            }
        },
        199: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                i = function DisplaySetting(e) {
                    return e.value || " "
                };
            i.propTypes = {
                value: r.a.oneOfType([r.a.string, r.a.bool, r.a.number])
            }, t.a = i
        },
        20: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n(2),
                r = Object(a.createContext)(""),
                i = (r.Consumer, r.Provider);
            t.b = r
        },
        201: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(8),
                    o = n.n(i),
                    c = n(82);

                function PreviewTable(t) {
                    for (var n = t.rows, a = t.rowHeight, r = t.padding, i = [], s = 0; n > s; s++) i.push(e.createElement("div", {
                        className: "googlesitekit-preview-table__row",
                        key: "table-row-" + s
                    }, e.createElement(c.a, {
                        width: "100%",
                        height: a + "px"
                    })));
                    return e.createElement("div", {
                        className: o()("googlesitekit-preview-table", {
                            "googlesitekit-preview-table--padding": r
                        })
                    }, i)
                }
                PreviewTable.propTypes = {
                    rows: r.a.number,
                    rowHeight: r.a.number,
                    padding: r.a.bool
                }, PreviewTable.defaultProps = {
                    rows: 11,
                    rowHeight: 35,
                    padding: !1
                }, t.a = PreviewTable
            }).call(this, n(3))
        },
        202: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return GoogleChart
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(16),
                    o = n.n(i),
                    c = n(23),
                    s = n.n(c),
                    l = n(12),
                    u = n.n(l),
                    d = n(17),
                    m = n.n(d),
                    g = (n(442), n(8)),
                    f = n.n(g),
                    p = n(0),
                    b = n.n(p),
                    y = n(341),
                    v = n(296),
                    h = n.n(v),
                    E = n(284),
                    A = n.n(E),
                    S = n(2),
                    _ = n(82),
                    T = n(39),
                    O = n(13),
                    k = n(65),
                    I = n(4);

                function N(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function j(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? N(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var C = n.n(I).a.useSelect;

                function GoogleChart(t) {
                    var n = t.chartEvents,
                        a = t.chartType,
                        r = t.children,
                        i = t.className,
                        c = t.data,
                        l = t.getChartWrapper,
                        d = t.height,
                        g = t.loaded,
                        p = t.loadingHeight,
                        b = t.loadingWidth,
                        v = t.onMouseOver,
                        E = t.onMouseOut,
                        I = t.onReady,
                        N = t.onSelect,
                        j = t.selectedStats,
                        D = t.width,
                        w = t.options,
                        R = t.gatheringData,
                        P = void 0 !== R && R,
                        M = m()(t, ["chartEvents", "chartType", "children", "className", "data", "getChartWrapper", "height", "loaded", "loadingHeight", "loadingWidth", "onMouseOver", "onMouseOut", "onReady", "onSelect", "selectedStats", "width", "options", "gatheringData"]),
                        Z = Object(T.a)("zeroDataStates"),
                        L = C((function(e) {
                            return e(O.a).getDateRangeDates()
                        })),
                        G = L.startDate,
                        x = L.endDate,
                        U = Object(S.useState)(!1),
                        B = u()(U, 2),
                        F = B[0],
                        W = B[1],
                        H = [];
                    (null == c ? void 0 : c.length) && (H = c[0].reduce((function(e, t, n) {
                        return (null == t ? void 0 : t.role) ? [].concat(s()(e), [n]) : e
                    }), []));
                    var q = c;
                    (null == j ? void 0 : j.length) > 0 && (q = c.map((function(e) {
                        return e.filter((function(e, t) {
                            return 0 === t || j.includes(t - 1) || H.includes(t - 1)
                        }))
                    })));
                    var K = p || d,
                        z = b || D;
                    K && !z && (z = "100%"), z && !K && (K = "100%");
                    var V = "PieChart" === a ? "circular" : "square",
                        Y = e.createElement("div", {
                            className: "googlesitekit-chart-loading"
                        }, e.createElement(_.a, {
                            className: "googlesitekit-chart-loading__wrapper",
                            height: K,
                            shape: V,
                            width: z
                        })),
                        $ = Object(S.useRef)(),
                        J = Object(S.useRef)();
                    if (Object(S.useEffect)((function() {
                            return function() {
                                if (J.current && $.current) {
                                    var e = J.current.visualization.events;
                                    e.removeAllListeners($.current.getChart()), e.removeAllListeners($.current)
                                }
                            }
                        }), []), Object(S.useLayoutEffect)((function() {
                            var e, t;
                            v && (null === (e = J.current) || void 0 === e || e.visualization.events.addListener($.current.getChart(), "onmouseover", (function(e) {
                                v(e, {
                                    chartWrapper: $.current,
                                    google: J.current
                                })
                            })));
                            E && (null === (t = J.current) || void 0 === t || t.visualization.events.addListener($.current.getChart(), "onmouseout", (function(e) {
                                E(e, {
                                    chartWrapper: $.current,
                                    google: J.current
                                })
                            })))
                        }), [v, E]), !g) return e.createElement("div", {
                        className: f()("googlesitekit-chart", "googlesitekit-chart-loading__forced", i)
                    }, Y);
                    var Q = s()(n || []);
                    I && Q.push({
                        eventName: "ready",
                        callback: I
                    }), N && Q.push({
                        eventName: "select",
                        callback: N
                    });
                    var X, ee, te, ne, ae, re, ie, oe, ce = A()(w);
                    Z && P && "LineChart" === a && ((null == w || null === (X = w.vaxis) || void 0 === X || null === (ee = X.viewWindow) || void 0 === ee ? void 0 : ee.min) || h()(ce, "vAxis.viewWindow.min", 0), (null == w || null === (te = w.vaxis) || void 0 === te || null === (ne = te.viewWindow) || void 0 === ne ? void 0 : ne.max) || h()(ce, "vAxis.viewWindow.max", 2500), (null == w || null === (ae = w.hAxis) || void 0 === ae || null === (re = ae.viewWindow) || void 0 === re ? void 0 : re.min) || (h()(ce, "hAxis.viewWindow.min", new Date(G)), delete ce.hAxis.ticks), (null == w || null === (ie = w.hAxis) || void 0 === ie || null === (oe = ie.viewWindow) || void 0 === oe ? void 0 : oe.max) || (h()(ce, "hAxis.viewWindow.max", new Date(x)), delete ce.hAxis.ticks));
                    return e.createElement("div", {
                        className: f()("googlesitekit-chart", "googlesitekit-chart--".concat(a), i),
                        tabIndex: -1
                    }, e.createElement(y.a, o()({
                        className: "googlesitekit-chart__inner",
                        chartEvents: Q,
                        chartType: a,
                        chartVersion: "49",
                        data: q,
                        loader: Y,
                        height: d,
                        getChartWrapper: function(e, t) {
                            var n, a, r;
                            (F || W(!0), e !== $.current) && (null === (n = J.current) || void 0 === n || n.visualization.events.removeAllListeners(null === (a = $.current) || void 0 === a ? void 0 : a.getChart()), null === (r = J.current) || void 0 === r || r.visualization.events.removeAllListeners($.current));
                            $.current = e, J.current = t, l && l(e, t)
                        },
                        width: D,
                        options: ce
                    }, M)), Z && P && F && e.createElement(k.b, {
                        style: k.a.OVERLAY
                    }), r)
                }
                GoogleChart.propTypes = {
                    className: b.a.string,
                    children: b.a.node,
                    chartEvents: b.a.arrayOf(b.a.shape({
                        eventName: b.a.string,
                        callback: b.a.func
                    })),
                    chartType: b.a.oneOf(["LineChart", "PieChart"]).isRequired,
                    data: b.a.array,
                    getChartWrapper: b.a.func,
                    height: b.a.string,
                    loaded: b.a.bool,
                    loadingHeight: b.a.string,
                    loadingWidth: b.a.string,
                    onMouseOut: b.a.func,
                    onMouseOver: b.a.func,
                    onReady: b.a.func,
                    onSelect: b.a.func,
                    selectedStats: b.a.arrayOf(b.a.number),
                    width: b.a.string,
                    options: b.a.object,
                    gatheringData: b.a.bool
                }, GoogleChart.defaultProps = j(j({}, y.a.defaultProps), {}, {
                    loaded: !0
                })
            }).call(this, n(3))
        },
        203: function(e, t, n) {
            "use strict";
            var a = n(319);
            n.d(t, "b", (function() {
                return a.a
            }));
            var r = n(132);
            n.d(t, "a", (function() {
                return r.a
            }))
        },
        21: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(16),
                    r = n.n(a),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(8),
                    u = n.n(l),
                    d = n(127),
                    m = n(1),
                    g = n(2),
                    f = Object(g.forwardRef)((function(t, n) {
                        var a, i = t["aria-label"],
                            c = t.arrow,
                            s = t.back,
                            l = t.caps,
                            g = t.children,
                            f = t.className,
                            p = t.danger,
                            b = t.disabled,
                            y = t.external,
                            v = t.hideExternalIndicator,
                            h = t.href,
                            E = t.inherit,
                            A = t.inverse,
                            S = t.onClick,
                            _ = t.small,
                            T = t.to,
                            O = o()(t, ["aria-label", "arrow", "back", "caps", "children", "className", "danger", "disabled", "external", "hideExternalIndicator", "href", "inherit", "inverse", "onClick", "small", "to"]),
                            k = h || T || !S ? T ? "ROUTER_LINK" : y ? "EXTERNAL_LINK" : "LINK" : b ? "BUTTON_DISABLED" : "BUTTON",
                            I = "BUTTON" === k || "BUTTON_DISABLED" === k ? "button" : "ROUTER_LINK" === k ? d.b : "a",
                            N = ("EXTERNAL_LINK" === k && (a = Object(m._x)("(opens in a new tab)", "screen reader text", "google-site-kit")), "BUTTON_DISABLED" === k && (a = Object(m._x)("(disabled)", "screen reader text", "google-site-kit")), a ? i ? "".concat(i, " ").concat(a) : "string" == typeof g ? "".concat(g, " ").concat(a) : void 0 : i);
                        return e.createElement(I, r()({
                            "aria-label": N,
                            className: u()("googlesitekit-cta-link", f, {
                                "googlesitekit-cta-link--arrow": c,
                                "googlesitekit-cta-link--external": y && !v,
                                "googlesitekit-cta-link--inverse": A,
                                "googlesitekit-cta-link--back": s,
                                "googlesitekit-cta-link--small": _,
                                "googlesitekit-cta-link--inherit": E,
                                "googlesitekit-cta-link--caps": l,
                                "googlesitekit-cta-link--danger": p,
                                "googlesitekit-cta-link--disabled": b
                            }),
                            disabled: b,
                            href: "LINK" === k || "EXTERNAL_LINK" === k ? h : void 0,
                            onClick: S,
                            rel: "EXTERNAL_LINK" === k ? "noopener noreferrer" : void 0,
                            ref: n,
                            target: "EXTERNAL_LINK" === k ? "_blank" : void 0,
                            to: T
                        }, O), g)
                    }));
                f.propTypes = {
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
                }, f.defaultProps = {
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
                }, t.a = f
            }).call(this, n(3))
        },
        210: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return i
            })), n.d(t, "a", (function() {
                return d
            })), n.d(t, "b", (function() {
                return m.a
            })), n.d(t, "c", (function() {
                return m.b
            })), n.d(t, "e", (function() {
                return g
            }));
            var a = n(380),
                r = n.n(a);

            function i(e) {
                var t;
                if (void 0 !== e) {
                    var n = e || {},
                        a = n.rows,
                        r = n.totals;
                    return !(null == a ? void 0 : a.length) || (!(null == r || null === (t = r.cells) || void 0 === t ? void 0 : t.length) || !r.cells.some((function(e) {
                        return (null == e ? void 0 : e.value) > 0
                    })))
                }
            }
            n(324);
            var o = n(8),
                c = n.n(o),
                s = n(1),
                l = n(11);

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.year,
                    n = void 0 === t ? 0 : t,
                    a = e.month,
                    r = void 0 === a ? 1 : a,
                    i = e.day,
                    o = void 0 === i ? 0 : i;
                return new Date(n, r - 1, o)
            }

            function d(e, t, n, a, r) {
                for (var i = [
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
                            type: "number",
                            label: n
                        }, {
                            type: "number",
                            label: Object(s.__)("Previous period", "google-site-kit")
                        }]
                    ], o = function(e) {
                        var t = new Date(e);
                        return t.setDate(e.getDate() + 1), t
                    }, d = function(e) {
                        return function(t) {
                            return e.getTime() === Object(l.u)(t.cells[0].value).getTime()
                        }
                    }, m = u(e.startDate), g = u(t.startDate), f = u(e.endDate), p = Object(l.j)(), b = {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    }; m <= f;) {
                    var y, v, h, E, A, S, _ = parseFloat((null === (y = ((null == e ? void 0 : e.rows) || []).find(d(m))) || void 0 === y || null === (v = y.cells) || void 0 === v || null === (h = v[a]) || void 0 === h ? void 0 : h.value) || 0),
                        T = parseFloat((null === (E = ((null == t ? void 0 : t.rows) || []).find(d(g))) || void 0 === E || null === (A = E.cells) || void 0 === A || null === (S = A[a]) || void 0 === S ? void 0 : S.value) || 0),
                        O = Object(l.b)(_, T),
                        k = Object(l.h)(O),
                        I = Object(s.sprintf)(
                            /* translators: 1: date for user stats, 2: previous date for user stats comparison */
                            Object(s._x)("%1$s vs %2$s", "Date range for chart tooltip", "google-site-kit"), m.toLocaleDateString(p, b), g.toLocaleDateString(p, b)),
                        N = Object(l.r)(_, null == r ? void 0 : r.currencyCode);
                    "METRIC_RATIO" === (null == r ? void 0 : r.type) && (N = Object(l.r)(_, "%"));
                    var j = Object(s.sprintf)(
                        /* translators: 1: selected stat label, 2: numeric value of selected stat, 3: up or down arrow , 4: different change in percentage, %%: percent symbol */
                        Object(s._x)("%1$s: <strong>%2$s</strong> <em>%3$s %4$s%%</em>", "Stat information for chart tooltip", "google-site-kit"), n, N, k, Math.abs(O).toFixed(2).replace(/(.00|0)$/, ""));
                    i.push([m, '<div class="'.concat(c()("googlesitekit-visualization-tooltip", {
                        "googlesitekit-visualization-tooltip--up": O > 0,
                        "googlesitekit-visualization-tooltip--down": O < 0
                    }), '">\n\t\t\t\t<p>').concat(I, "</p>\n\t\t\t\t<p>").concat(j, "</p>\n\t\t\t</div>"), _, T]), m = o(m), g = o(g)
                }
                return i
            }
            n(119);
            var m = n(501);
            n(396);

            function g(e) {
                var t = [
                    [{
                        type: "date",
                        label: "Day"
                    }, {
                        type: "number",
                        label: "RPM"
                    }, {
                        type: "number",
                        label: "Earnings"
                    }, {
                        type: "number",
                        label: "Impressions"
                    }]
                ];
                return r()(e, (function(e) {
                    var n = new Date(e.cells[0].value);
                    t.push([n, e.cells[2].value, e.cells[1].value, e.cells[3].value])
                })), {
                    dataMap: t
                }
            }
        },
        22: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return r
            }));
            var a = "core/modules",
                r = "insufficient_module_dependencies"
        },
        224: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(52),
                    r = n.n(a),
                    i = n(225),
                    o = e._googlesitekitAPIFetchData || {},
                    c = o.nonce,
                    s = o.nonceEndpoint,
                    l = o.preloadedData,
                    u = o.rootURL;
                r.a.nonceEndpoint = s, r.a.nonceMiddleware = r.a.createNonceMiddleware(c), r.a.rootURLMiddleware = r.a.createRootURLMiddleware(u), r.a.preloadingMiddleware = Object(i.a)(l), r.a.use(r.a.nonceMiddleware), r.a.use(r.a.mediaUploadMiddleware), r.a.use(r.a.rootURLMiddleware), r.a.use(r.a.preloadingMiddleware), t.default = r.a
            }).call(this, n(18))
        },
        225: function(e, t, n) {
            "use strict";
            var a = n(220);
            t.a = function(e) {
                var t = Object.keys(e).reduce((function(t, n) {
                        return t[Object(a.getStablePath)(n)] = e[n], t
                    }), {}),
                    n = !1;
                return function(e, r) {
                    if (n) return r(e);
                    setTimeout((function() {
                        n = !0
                    }), 1e3);
                    var i = e.parse,
                        o = void 0 === i || i,
                        c = e.path;
                    if ("string" == typeof e.path) {
                        var s, l = (null === (s = e.method) || void 0 === s ? void 0 : s.toUpperCase()) || "GET",
                            u = Object(a.getStablePath)(c);
                        if (o && "GET" === l && t[u]) {
                            var d = Promise.resolve(t[u].body);
                            return delete t[u], d
                        }
                        if ("OPTIONS" === l && t[l] && t[l][u]) {
                            var m = Promise.resolve(t[l][u]);
                            return delete t[l][u], m
                        }
                    }
                    return r(e)
                }
            }
        },
        233: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return CreateAccountField
                }));
                var a = n(7),
                    r = n(8),
                    i = n.n(r);

                function CreateAccountField(t) {
                    var n = t.hasError,
                        r = t.value,
                        o = t.setValue,
                        c = t.name,
                        s = t.label;
                    return void 0 === r ? null : e.createElement(a.n, {
                        className: i()("mdc-text-field", {
                            "mdc-text-field--error": n
                        }),
                        label: s,
                        name: c,
                        onChange: function(e) {
                            o(e.target.value, c)
                        },
                        outlined: !0,
                        required: !0
                    }, e.createElement(a.d, {
                        name: c,
                        value: r,
                        id: "googlesitekit_analytics_account_create_".concat(c)
                    }))
                }
            }).call(this, n(3))
        },
        234: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = function WidgetHeaderTitle(t) {
                        var n = t.title;
                        return e.createElement("h3", {
                            className: "googlesitekit-subheading-1 googlesitekit-widget__header-title"
                        }, n)
                    };
                r.propTypes = {
                    title: n.n(a).a.string.isRequired
                }, t.a = r
            }).call(this, n(3))
        },
        245: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ReportTable
                }));
                var a = n(8),
                    r = n.n(a),
                    i = n(291),
                    o = n.n(i),
                    c = n(9),
                    s = n.n(c),
                    l = n(0),
                    u = n.n(l),
                    d = n(39),
                    m = n(65);

                function ReportTable(t) {
                    var n = t.rows,
                        a = t.columns,
                        i = t.className,
                        c = t.limit,
                        l = t.zeroState,
                        u = t.gatheringData,
                        g = void 0 !== u && u,
                        f = Object(d.a)("zeroDataStates");
                    s()(Array.isArray(n), "rows must be an array."), s()(Array.isArray(a), "columns must be an array."), a.forEach((function(e) {
                        var t = e.Component,
                            n = e.field,
                            a = void 0 === n ? null : n;
                        s()(t || null !== a, "each column must define a Component and/or a field.")
                    })), s()(Number.isInteger(c) || void 0 === c, "limit must be an integer, if provided.");
                    var p = a.filter((function(e) {
                        return !e.hideOnMobile
                    }));
                    return e.createElement("div", {
                        className: r()("googlesitekit-table", "googlesitekit-table--with-list", {
                            "googlesitekit-table--gathering-data": g
                        }, i)
                    }, e.createElement("table", {
                        className: r()("googlesitekit-table__wrapper", "googlesitekit-table__wrapper--".concat(a.length, "-col"), "googlesitekit-table__wrapper--mobile-".concat(p.length, "-col"))
                    }, e.createElement("thead", {
                        className: "googlesitekit-table__head"
                    }, e.createElement("tr", {
                        className: "googlesitekit-table__head-row"
                    }, a.map((function(t, n) {
                        var a = t.title,
                            i = t.description,
                            o = t.primary,
                            c = t.hideOnMobile,
                            s = t.className;
                        return e.createElement("th", {
                            className: r()("googlesitekit-table__head-item", {
                                "googlesitekit-table__head-item--primary": o
                            }, {
                                "hidden-on-mobile": c
                            }, s),
                            "data-tooltip": i,
                            key: "googlesitekit-table__head-row-".concat(n)
                        }, a)
                    })))), e.createElement("tbody", {
                        className: "googlesitekit-table__body"
                    }, f && g && e.createElement("tr", {
                        className: "googlesitekit-table__body-row"
                    }, e.createElement("td", {
                        className: "googlesitekit-table__body-item googlesitekit-table__body-item-wrap",
                        colSpan: a.length
                    }, e.createElement(m.b, null))), (!f || !g) && !(null == n ? void 0 : n.length) && l && e.createElement("tr", {
                        className: "googlesitekit-table__body-row"
                    }, e.createElement("td", {
                        className: "googlesitekit-table__body-item googlesitekit-table__body-item-wrap",
                        colSpan: a.length
                    }, e.createElement(l, null))), !g && n.slice(0, c).map((function(t, n) {
                        return e.createElement("tr", {
                            className: "googlesitekit-table__body-row",
                            key: "googlesitekit-table__body-row-".concat(n)
                        }, a.map((function(n, a) {
                            var i = n.Component,
                                c = n.field,
                                s = n.hideOnMobile,
                                l = n.className,
                                u = void 0 !== c ? o()(t, c) : void 0;
                            return e.createElement("td", {
                                key: "googlesitekit-table__body-item-".concat(a),
                                className: r()("googlesitekit-table__body-item", {
                                    "hidden-on-mobile": s
                                }, l)
                            }, e.createElement("div", {
                                className: "googlesitekit-table__body-item-content"
                            }, i && e.createElement(i, {
                                row: t,
                                fieldValue: u
                            }), !i && u))
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
            }).call(this, n(3))
        },
        25: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "h", (function() {
                return u
            }));
            var a = "modules/tagmanager",
                r = "account_create",
                i = "container_create",
                o = "web",
                c = "amp",
                s = "tagmanagerSetup",
                l = "https://www.googleapis.com/auth/tagmanager.edit.containers",
                u = "SETUP_WITH_ANALYTICS"
        },
        254: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return b
            }));
            var a = n(5),
                r = n.n(a),
                i = n(14),
                o = n.n(i),
                c = n(9),
                s = n.n(c),
                l = n(323),
                u = n.n(l),
                d = n(224),
                m = n(109),
                g = n(287),
                f = n(15),
                p = function(e, t) {
                    var n = t.find((function(t) {
                        return t.test(e)
                    }));
                    return !!n && n.exec(e)[1]
                },
                b = u()(function() {
                    var e = o()(r.a.mark((function e(t) {
                        var n, a, i, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.homeURL, a = t.ampMode, s()(Object(m.a)(n), "homeURL must be valid URL"), i = [n], f.b !== a) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.prev = 4, e.next = 7, Object(d.default)({
                                        path: "/wp/v2/posts?per_page=1"
                                    }).then((function(e) {
                                        return e.slice(0, 1).map((function(e) {
                                            return Object(g.a)(e.link, {
                                                amp: 1
                                            })
                                        })).pop()
                                    }));
                                case 7:
                                    (o = e.sent) && i.push(o), e.next = 14;
                                    break;
                                case 11:
                                    return e.prev = 11, e.t0 = e.catch(4), e.abrupt("return", i);
                                case 14:
                                    return e.abrupt("return", i);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 11]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }())
        },
        256: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(202);

                function Sparkline(t) {
                    var n = t.change,
                        a = t.data,
                        r = t.invertChangeColor,
                        o = t.loadingHeight;
                    if (!a) return null;
                    var c = [];
                    if (null === n) c.push("green");
                    else {
                        var s = r ? "red" : "green",
                            l = r ? "green" : "red";
                        c.push(0 <= (parseFloat(n) || 0) ? s : l)
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
                    return a.slice(1).some((function(e) {
                        return e[1] > 0
                    })) || (u.vAxis.minValue = 0, u.vAxis.maxValue = 1), e.createElement("div", {
                        className: "googlesitekit-analytics-sparkline-chart-wrap"
                    }, e.createElement(i.a, {
                        chartType: "LineChart",
                        data: a,
                        loadingHeight: o,
                        options: u
                    }))
                }
                Sparkline.propTypes = {
                    invertChangeColor: r.a.bool,
                    loadingHeight: r.a.string
                }, Sparkline.defaultProps = {
                    invertChangeColor: !1,
                    loadingHeight: "46px"
                }, t.a = Sparkline
            }).call(this, n(3))
        },
        27: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "d", (function() {
                return i
            })), n.d(t, "f", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "e", (function() {
                return s
            }));
            var a = "modules/adsense",
                r = 1,
                i = "NEEDS_ATTENTION",
                o = "REQUIRES_REVIEW",
                c = "GETTING_READY",
                s = "READY"
        },
        278: function(e, t, n) {
            "use strict";
            (function(e, a) {
                var r = n(12),
                    i = n.n(r),
                    o = n(0),
                    c = n.n(o),
                    s = n(26),
                    l = n(8),
                    u = n.n(l),
                    d = n(2);

                function TableOverflowContainer(t) {
                    var n = t.children,
                        r = Object(d.useState)(!1),
                        o = i()(r, 2),
                        c = o[0],
                        l = o[1],
                        m = Object(d.useRef)();
                    Object(d.useEffect)((function() {
                        g();
                        var t = Object(s.debounce)(g, 100);
                        return e.addEventListener("resize", t),
                            function() {
                                return e.removeEventListener("resize", t)
                            }
                    }), []);
                    var g = function() {
                        if (m.current) {
                            var e = m.current,
                                t = e.scrollLeft,
                                n = e.scrollWidth - e.offsetWidth;
                            l(t < n - 16 && 0 < n - 16)
                        }
                    };
                    return a.createElement("div", {
                        onScroll: Object(s.debounce)(g, 100),
                        className: u()("googlesitekit-table-overflow", {
                            "googlesitekit-table-overflow--gradient": c
                        })
                    }, a.createElement("div", {
                        ref: m,
                        className: "googlesitekit-table-overflow__container"
                    }, n))
                }
                TableOverflowContainer.propTypes = {
                    children: c.a.element
                }, t.a = TableOverflowContainer
            }).call(this, n(18), n(3))
        },
        28: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return r
            }));
            var a = "_googlesitekitDataLayer",
                r = "data-googlesitekit-gtag"
        },
        280: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return GA4PropertyNotice
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(1),
                    o = n(203),
                    c = n(21);

                function GA4PropertyNotice(t) {
                    var n = t.notice,
                        a = t.children;
                    return e.createElement(o.b, {
                        type: o.a,
                        LearnMore: function LearnMore() {
                            return e.createElement(c.a, {
                                href: "https://sitekit.withgoogle.com/documentation/using-site-kit/ga4/",
                                external: !0,
                                inherit: !0
                            }, Object(i.__)("Learn more", "google-site-kit"))
                        },
                        notice: n
                    }, a)
                }
                GA4PropertyNotice.propTypes = {
                    children: r.a.node,
                    notice: r.a.string.isRequired
                }
            }).call(this, n(3))
        },
        282: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(21),
                    o = function WidgetHeaderCTA(t) {
                        var n = t.href,
                            a = t.label,
                            r = t.external;
                        return e.createElement("div", {
                            className: "googlesitekit-widget__header--cta"
                        }, e.createElement(i.a, {
                            href: n,
                            external: r
                        }, a))
                    };
                o.propTypes = {
                    href: r.a.string,
                    label: r.a.string.isRequired,
                    external: r.a.bool
                }, o.defaultProps = {
                    href: "",
                    external: !0
                }, t.a = o
            }).call(this, n(3))
        },
        285: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return i
            })), n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "d", (function() {
                return s
            }));
            var a = n(29),
                r = n.n(a);

            function i(e, t) {
                return "string" == typeof e || (!("object" !== r()(e) || !t(e)) || !!Array.isArray(e) && e.every((function(e) {
                    return "string" == typeof e || "object" === r()(e) && t(e)
                })))
            }

            function o(e) {
                var t = e.dateRange,
                    n = e.startDate,
                    a = e.endDate,
                    r = n && n.match(/^\d{4}-\d{2}-\d{2}$/),
                    i = a && a.match(/^\d{4}-\d{2}-\d{2}$/),
                    o = t && t.match(/^last-\d+-days$/);
                return r && i || o
            }

            function c(e) {
                var t = function(e) {
                    var t = e.hasOwnProperty("fieldName") && !!e.fieldName,
                        n = e.hasOwnProperty("sortOrder") && e.sortOrder.toString().match(/(ASCENDING|DESCENDING)/i);
                    return t && n
                };
                return Array.isArray(e) ? e.every((function(e) {
                    return "object" === r()(e) && t(e)
                })) : "object" === r()(e) && t(e)
            }

            function s(e) {
                return "string" == typeof e || !!Array.isArray(e) && e.every((function(e) {
                    return "string" == typeof e
                }))
            }
        },
        299: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return GA4Notice
                }));
                var a = n(1),
                    r = n(203),
                    i = n(21);

                function GA4Notice() {
                    return e.createElement(r.b, {
                        type: r.a,
                        LearnMore: function LearnMore() {
                            return e.createElement(i.a, {
                                href: "https://sitekit.withgoogle.com/documentation/using-site-kit/ga4/",
                                external: !0,
                                inherit: !0
                            }, Object(a.__)("Learn more here.", "google-site-kit"))
                        },
                        notice: Object(a.__)("Got a Google Analytics 4 (GA4) property and want to find out how to use it with Site Kit?", "google-site-kit")
                    })
                }
            }).call(this, n(3))
        },
        30: function(e, t, n) {
            "use strict";
            (function(e) {
                var a, r;
                n.d(t, "a", (function() {
                    return i
                })), n.d(t, "b", (function() {
                    return o
                }));
                var i = new Set((null === (a = e) || void 0 === a || null === (r = a._googlesitekitBaseData) || void 0 === r ? void 0 : r.enabledFeatures) || []),
                    o = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
                        return t instanceof Set && t.has(e)
                    }
            }).call(this, n(18))
        },
        300: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "b", (function() {
                    return f
                })), n.d(t, "a", (function() {
                    return p
                })), n.d(t, "d", (function() {
                    return b
                })), n.d(t, "c", (function() {
                    return TrackingExclusionSwitches
                }));
                var a, r = n(6),
                    i = n.n(r),
                    o = n(2),
                    c = n(1),
                    s = n(4),
                    l = n.n(s),
                    u = n(10),
                    d = n(129),
                    m = l.a.useSelect,
                    g = l.a.useDispatch,
                    f = "loggedinUsers",
                    p = "contentCreators",
                    b = (a = {}, i()(a, f, Object(c.__)("All logged-in users", "google-site-kit")), i()(a, p, Object(c.__)("Users that can write posts", "google-site-kit")), a);

                function TrackingExclusionSwitches() {
                    var t, n = m((function(e) {
                            return e(u.f).getTrackingDisabled()
                        })),
                        a = g(u.f).setTrackingDisabled;
                    t = n && n.includes(f) ? Object(c.__)("All logged-in users will be excluded from Analytics tracking", "google-site-kit") : n && n.includes(p) ? Object(c.__)("Users that can write posts will be excluded from Analytics tracking", "google-site-kit") : Object(c.__)("All logged-in users will be included in Analytics tracking", "google-site-kit");
                    var r = Object(o.useCallback)((function(e, t) {
                            var r = t ? n.concat(e) : n.filter((function(t) {
                                return t !== e
                            }));
                            a(r)
                        }), [n, a]),
                        i = Object(o.useCallback)((function(e) {
                            var t = e.target.checked;
                            r(p, t)
                        }), [r]),
                        s = Object(o.useCallback)((function(e) {
                            var t = e.target.checked;
                            r(f, t)
                        }), [r]);
                    return Array.isArray(n) ? e.createElement("fieldset", {
                        className: "googlesitekit-analytics-trackingdisabled"
                    }, e.createElement("legend", {
                        className: "googlesitekit-setup-module__text"
                    }, Object(c.__)("Exclude from Analytics", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-item"
                    }, e.createElement(d.a, {
                        label: b[f],
                        checked: n.includes(f),
                        onClick: s,
                        hideLabel: !1
                    })), !n.includes(f) && e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-item"
                    }, e.createElement(d.a, {
                        label: b[p],
                        checked: n.includes(p),
                        onClick: i,
                        hideLabel: !1
                    }))), e.createElement("p", {
                        className: "googlesitekit-margin-top-0"
                    }, t)) : null
                }
            }).call(this, n(3))
        },
        301: function(e, t) {
            e.exports = googlesitekit.widgets
        },
        31: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return p
                })), n.d(t, "b", (function() {
                    return f
                }));
                var a = n(86),
                    r = e._googlesitekitBaseData || {},
                    i = r.activeModules,
                    o = void 0 === i ? [] : i,
                    c = r.isSiteKitScreen,
                    s = r.trackingEnabled,
                    l = {
                        activeModules: o,
                        trackingEnabled: s,
                        trackingID: r.trackingID,
                        referenceSiteURL: r.referenceSiteURL,
                        userIDHash: r.userIDHash,
                        isSiteKitScreen: c
                    },
                    u = Object(a.a)(l),
                    d = u.enableTracking,
                    m = u.disableTracking,
                    g = (u.isTrackingEnabled, u.initializeSnippet),
                    f = u.trackEvent;

                function p(e) {
                    e ? d() : m()
                }
                c && s && g()
            }).call(this, n(18))
        },
        311: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return a
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return o
            }));
            var a = "adblocker_active",
                r = "moduleAdsense",
                i = "moduleAdsenseMain",
                o = "adsense-connect-cta"
        },
        319: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsNotice
                }));
                var a = n(8),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i),
                    c = n(320),
                    s = n(321),
                    l = n(132);

                function SettingsNotice(t) {
                    var n = t.children,
                        a = t.type,
                        i = t.Icon,
                        o = void 0 === i ? Object(l.d)(a) : i,
                        u = n ? s.a : c.a;
                    return e.createElement("div", {
                        className: r()("googlesitekit-settings-notice", "googlesitekit-settings-notice--".concat(a), {
                            "googlesitekit-settings-notice--single-row": !n,
                            "googlesitekit-settings-notice--multi-row": n
                        })
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-notice__icon"
                    }, e.createElement(o, {
                        width: "20",
                        height: "20"
                    })), e.createElement("div", {
                        className: "googlesitekit-settings-notice__body"
                    }, e.createElement(u, t)))
                }
                SettingsNotice.propTypes = {
                    children: o.a.node,
                    notice: o.a.node.isRequired,
                    type: o.a.oneOf([l.a, l.c, l.b]),
                    Icon: o.a.elementType,
                    LearnMore: o.a.elementType
                }, SettingsNotice.defaultProps = {
                    type: l.a
                }
            }).call(this, n(3))
        },
        320: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsNoticeSingleRow
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(2);

                function SettingsNoticeSingleRow(t) {
                    var n = t.notice,
                        a = t.LearnMore;
                    return e.createElement(i.Fragment, null, e.createElement("div", {
                        className: "googlesitekit-settings-notice__text"
                    }, n), a && e.createElement("div", {
                        className: "googlesitekit-settings-notice__learn-more"
                    }, e.createElement(a, null)))
                }
                SettingsNoticeSingleRow.propTypes = {
                    notice: r.a.node.isRequired,
                    LearnMore: r.a.elementType
                }
            }).call(this, n(3))
        },
        321: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsNoticeMultiRow
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(2);

                function SettingsNoticeMultiRow(t) {
                    var n = t.notice,
                        a = t.LearnMore,
                        r = t.children;
                    return e.createElement(i.Fragment, null, e.createElement("div", {
                        className: "googlesitekit-settings-notice__text"
                    }, n), e.createElement("div", {
                        className: "googlesitekit-settings-notice__inner-row"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-notice__children-container"
                    }, r), a && e.createElement("div", {
                        className: "googlesitekit-settings-notice__learn-more"
                    }, e.createElement(a, null))))
                }
                SettingsNoticeMultiRow.propTypes = {
                    children: r.a.node.isRequired,
                    notice: r.a.node.isRequired,
                    LearnMore: r.a.elementType
                }
            }).call(this, n(3))
        },
        322: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            }));
            var a = n(6),
                r = n.n(a),
                i = n(14),
                o = n.n(i),
                c = n(5),
                s = n.n(c),
                l = n(9),
                u = n.n(l),
                d = n(4),
                m = n.n(d),
                g = n(15),
                f = n(254);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function y(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return v(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
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

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            var h = m.a.createRegistryControl,
                E = m.a.createRegistrySelector,
                A = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.storeName,
                        a = t.isValidTag,
                        i = t.tagMatchers;
                    u()("string" == typeof n && n, "storeName is required."), u()("function" == typeof a, "isValidTag must be a function."), u()(Array.isArray(i), "tagMatchers must be an Array.");
                    var c = {
                            existingTag: void 0
                        },
                        l = {
                            fetchGetExistingTag: function() {
                                return {
                                    payload: {},
                                    type: "FETCH_GET_EXISTING_TAG"
                                }
                            },
                            receiveGetExistingTag: function(e) {
                                return u()(null === e || "string" == typeof e, "existingTag must be a tag string or null."), {
                                    payload: {
                                        existingTag: a(e) ? e : null
                                    },
                                    type: "RECEIVE_GET_EXISTING_TAG"
                                }
                            },
                            waitForExistingTag: s.a.mark((function e() {
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, {
                                                payload: {},
                                                type: "WAIT_FOR_EXISTING_TAG"
                                            };
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        d = (e = {}, r()(e, "FETCH_GET_EXISTING_TAG", h((function(e) {
                            return o()(s.a.mark((function t() {
                                var n, a, r, o, c, l, u, d;
                                return s.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = e.select(g.c).getHomeURL(), a = e.select(g.c).getAMPMode(), t.next = 4, Object(f.b)({
                                                homeURL: n,
                                                ampMode: a
                                            });
                                        case 4:
                                            r = t.sent, o = y(r), t.prev = 6, o.s();
                                        case 8:
                                            if ((c = o.n()).done) {
                                                t.next = 18;
                                                break
                                            }
                                            return l = c.value, t.next = 12, e.dispatch(g.c).waitForHTMLForURL(l);
                                        case 12:
                                            if (u = e.select(g.c).getHTMLForURL(l), !(d = Object(f.a)(u, i))) {
                                                t.next = 16;
                                                break
                                            }
                                            return t.abrupt("return", d);
                                        case 16:
                                            t.next = 8;
                                            break;
                                        case 18:
                                            t.next = 23;
                                            break;
                                        case 20:
                                            t.prev = 20, t.t0 = t.catch(6), o.e(t.t0);
                                        case 23:
                                            return t.prev = 23, o.f(), t.finish(23);
                                        case 26:
                                            return t.abrupt("return", null);
                                        case 27:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [6, 20, 23, 26]
                                ])
                            })))
                        }))), r()(e, "WAIT_FOR_EXISTING_TAG", h((function(e) {
                            return function() {
                                var t = function() {
                                    return void 0 !== e.select(n).getExistingTag()
                                };
                                return !!t() || new Promise((function(n) {
                                    var a = e.subscribe((function() {
                                        t() && (a(), n())
                                    }))
                                }))
                            }
                        }))), e),
                        p = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                n = t.type,
                                a = t.payload;
                            switch (n) {
                                case "RECEIVE_GET_EXISTING_TAG":
                                    var r = a.existingTag;
                                    return b(b({}, e), {}, {
                                        existingTag: r
                                    });
                                default:
                                    return e
                            }
                        },
                        v = {
                            getExistingTag: s.a.mark((function e() {
                                var t, a;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, m.a.commonActions.getRegistry();
                                        case 2:
                                            if (void 0 !== (t = e.sent).select(n).getExistingTag()) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 6, l.fetchGetExistingTag();
                                        case 6:
                                            a = e.sent, t.dispatch(n).receiveGetExistingTag(a);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        A = {
                            getExistingTag: function(e) {
                                return e.existingTag
                            },
                            hasExistingTag: E((function(e) {
                                return function() {
                                    var t = e(n).getExistingTag();
                                    if (void 0 !== t) return !!t
                                }
                            }))
                        },
                        S = {
                            initialState: c,
                            actions: l,
                            controls: d,
                            reducer: p,
                            resolvers: v,
                            selectors: A
                        };
                    return b(b({}, S), {}, {
                        STORE_NAME: n
                    })
                }
        },
        324: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(501);

            function r(e) {
                if (Object(a.b)(e)) return e.match(/pub-\d+$/)[0]
            }
        },
        326: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "b", (function() {
                    return f
                })), n.d(t, "a", (function() {
                    return p
                })), n.d(t, "d", (function() {
                    return b
                })), n.d(t, "c", (function() {
                    return AutoAdExclusionSwitches
                }));
                var a, r = n(6),
                    i = n.n(r),
                    o = n(2),
                    c = n(1),
                    s = n(4),
                    l = n.n(s),
                    u = n(27),
                    d = n(129),
                    m = l.a.useSelect,
                    g = l.a.useDispatch,
                    f = "loggedinUsers",
                    p = "contentCreators",
                    b = (a = {}, i()(a, f, Object(c.__)("All logged-in users", "google-site-kit")), i()(a, p, Object(c.__)("Users who can write posts", "google-site-kit")), a);

                function AutoAdExclusionSwitches() {
                    var t, n = m((function(e) {
                            return e(u.b).getAutoAdsDisabled()
                        })),
                        a = g(u.b).setAutoAdsDisabled;
                    t = n && n.includes(f) ? Object(c.__)("Ads will not be displayed for all logged-in users", "google-site-kit") : n && n.includes(p) ? Object(c.__)("Ads will not be displayed for users that can write posts", "google-site-kit") : Object(c.__)("Ads will be displayed for all users", "google-site-kit");
                    var r = Object(o.useCallback)((function(e, t) {
                            var r = t ? n.concat(e) : n.filter((function(t) {
                                return t !== e
                            }));
                            a(r)
                        }), [n, a]),
                        i = Object(o.useCallback)((function(e) {
                            var t = e.target.checked;
                            r(p, t)
                        }), [r]),
                        s = Object(o.useCallback)((function(e) {
                            var t = e.target.checked;
                            r(f, t)
                        }), [r]);
                    return Array.isArray(n) ? e.createElement("fieldset", {
                        className: "googlesitekit-analytics-auto-ads-disabled"
                    }, e.createElement("legend", {
                        className: "googlesitekit-setup-module__text"
                    }, Object(c.__)("Exclude from Ads", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-item"
                    }, e.createElement(d.a, {
                        label: b[f],
                        checked: n.includes(f),
                        onClick: s,
                        hideLabel: !1
                    })), !n.includes(f) && e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-item"
                    }, e.createElement(d.a, {
                        label: b[p],
                        checked: n.includes(p),
                        onClick: i,
                        hideLabel: !1
                    }))), e.createElement("p", {
                        className: "googlesitekit-margin-top-0"
                    }, t)) : null
                }
            }).call(this, n(3))
        },
        329: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AdSenseLinkCTA
                }));
                var a = n(1),
                    r = n(4),
                    i = n.n(r),
                    o = n(83),
                    c = n(15),
                    s = i.a.useSelect;

                function AdSenseLinkCTA() {
                    var t = s((function(e) {
                        return e(c.c).getGoogleSupportURL({
                            path: "/adsense/answer/6084409"
                        })
                    }));
                    return e.createElement(o.a, {
                        title: Object(a.__)("Link Analytics and AdSense", "google-site-kit"),
                        description: Object(a.__)("Get reports for your top earning pages by linking your Analytics and AdSense accounts", "google-site-kit"),
                        ctaLink: t,
                        ctaLabel: Object(a.__)("Learn more", "google-site-kit"),
                        ctaLinkExternal: !0
                    })
                }
            }).call(this, n(3))
        },
        33: function(e, t) {
            e.exports = googlesitekit.api
        },
        339: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = n(291),
                r = n.n(a);

            function i(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return e.map((function(e, a) {
                    return [r()(e, n), r()(e, t, 0 === a ? "" : 0)]
                }))
            }
        },
        34: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            }));
            var a = {
                    BOXES: "boxes",
                    COMPOSITE: "composite"
                },
                r = {
                    QUARTER: "quarter",
                    HALF: "half",
                    FULL: "full"
                },
                i = "core/widgets"
        },
        345: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AccountCreate
                }));
                var a = n(5),
                    r = n.n(a),
                    i = n(14),
                    o = n.n(i),
                    c = n(12),
                    s = n.n(c),
                    l = n(1),
                    u = n(2),
                    d = n(4),
                    m = n.n(d),
                    g = n(10),
                    f = n(15),
                    p = n(13),
                    b = n(36),
                    y = n(38),
                    v = n(89),
                    h = n(11),
                    E = n(364),
                    A = n(7),
                    S = n(19),
                    _ = n(21),
                    T = n(55),
                    O = n(112),
                    k = n(280),
                    I = n(365),
                    N = n(366),
                    j = n(367),
                    C = n(368),
                    D = n(369),
                    w = n(20),
                    R = m.a.useDispatch,
                    P = m.a.useSelect;

                function AccountCreate() {
                    var t = Object(u.useState)(!1),
                        n = s()(t, 2),
                        a = n[0],
                        i = n[1],
                        c = P((function(e) {
                            return {
                                accounts: e(g.f).getAccounts(),
                                hasResolvedAccounts: e(g.f).hasFinishedResolution("getAccounts")
                            }
                        })),
                        d = c.accounts,
                        m = c.hasResolvedAccounts,
                        M = P((function(e) {
                            return e(g.f).getAccountTicketTermsOfServiceURL()
                        })),
                        Z = P((function(e) {
                            return e(g.f).canSubmitAccountCreate()
                        })),
                        L = P((function(e) {
                            return e(g.f).isDoingCreateAccount()
                        })),
                        G = P((function(e) {
                            return e(p.a).hasScope(g.k)
                        })),
                        x = P((function(e) {
                            return e(p.a).hasScope(g.c)
                        })),
                        U = P((function(e) {
                            return e(b.a).hasForm(g.d)
                        })),
                        B = P((function(e) {
                            return e(b.a).getValue(g.d, "autoSubmit")
                        })),
                        F = P((function(e) {
                            return e(f.c).getReferenceSiteURL()
                        })),
                        W = P((function(e) {
                            return e(f.c).getSiteName()
                        })),
                        H = P((function(e) {
                            return e(f.c).getTimezone()
                        })),
                        q = Object(u.useContext)(w.b),
                        K = R(b.a).setValues,
                        z = R(y.a).navigateTo,
                        V = R(g.f).createAccount,
                        Y = R(p.a).setPermissionScopeError;
                    Object(u.useEffect)((function() {
                        M && z(M)
                    }), [M, z]), Object(u.useEffect)((function() {
                        U || K(g.d, Object(E.a)({
                            siteName: W,
                            siteURL: F,
                            timezone: H
                        }))
                    }), [U, W, F, H, K]);
                    var $ = Object(u.useCallback)(o()(r.a.mark((function e() {
                        var t, n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = [], G && x || (t.push(g.k), t.push(g.c)), !(t.length > 0)) {
                                        e.next = 6;
                                        break
                                    }
                                    return K(g.d, {
                                        autoSubmit: !0
                                    }), Y({
                                        code: v.a,
                                        message: Object(l.__)("Additional permissions are required to create a new Analytics account.", "google-site-kit"),
                                        data: {
                                            status: 403,
                                            scopes: t,
                                            skipModal: !0
                                        }
                                    }), e.abrupt("return");
                                case 6:
                                    return K(g.d, {
                                        autoSubmit: !1
                                    }), e.next = 9, Object(h.w)("".concat(q, "_analytics"), "create_account", "proxy");
                                case 9:
                                    return e.next = 11, V();
                                case 11:
                                    n = e.sent, n.error || i(!0);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [V, i, G, x, Y, K, q]);
                    Object(u.useEffect)((function() {
                        G && B && $()
                    }), [G, B, $]);
                    var J = R(g.f).rollbackSettings,
                        Q = Object(u.useCallback)((function() {
                            return J()
                        }), [J]);
                    return L || a || !m || void 0 === G ? e.createElement(T.a, null) : e.createElement("div", null, e.createElement(O.a, {
                        moduleSlug: "analytics",
                        storeName: g.f
                    }), e.createElement("h3", {
                        className: "googlesitekit-heading-4"
                    }, Object(l.__)("Create your Analytics account", "google-site-kit")), e.createElement("p", null, Object(l.__)("We’ve pre-filled the required information for your new account. Confirm or edit any details:", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(A.a, {
                        size: 6
                    }, e.createElement(N.a, null)), e.createElement(A.a, {
                        size: 6
                    }, e.createElement(j.a, null)), e.createElement(A.a, {
                        size: 6
                    }, e.createElement(C.a, null))), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(D.a, null), e.createElement(I.a, null)), e.createElement("p", null, G && e.createElement("span", null, Object(l.__)("You will be redirected to Google Analytics to accept the terms of service.", "google-site-kit")), !G && e.createElement("span", null, Object(l.__)("You will need to give Site Kit permission to create an Analytics account on your behalf and also accept the Google Analytics terms of service.", "google-site-kit"))), e.createElement(k.a, {
                        notice: Object(l.__)("This will create both a Google Analytics 4 and Universal Analytics property.", "google-site-kit")
                    }), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, e.createElement(S.a, {
                        disabled: !Z,
                        onClick: $
                    }, Object(l.__)("Create Account", "google-site-kit")), d && !!d.length && e.createElement(_.a, {
                        className: "googlesitekit-setup-module__sub-action",
                        onClick: Q
                    }, Object(l.__)("Back", "google-site-kit"))))
                }
            }).call(this, n(3))
        },
        346: function(e, t, n) {
            "use strict";
            (function(e, a) {
                n.d(t, "a", (function() {
                    return AccountCreateLegacy
                }));
                var r = n(5),
                    i = n.n(r),
                    o = n(14),
                    c = n.n(o),
                    s = n(2),
                    l = n(1),
                    u = n(4),
                    d = n.n(u),
                    m = n(19),
                    g = n(21),
                    f = n(55),
                    p = n(11),
                    b = n(10),
                    y = n(112),
                    v = n(299),
                    h = n(20),
                    E = d.a.useSelect,
                    A = d.a.useDispatch;

                function AccountCreateLegacy() {
                    var t = E((function(e) {
                            return {
                                accounts: e(b.f).getAccounts(),
                                hasResolvedAccounts: e(b.f).hasFinishedResolution("getAccounts")
                            }
                        })),
                        n = t.accounts,
                        r = t.hasResolvedAccounts,
                        o = E((function(e) {
                            return e(b.f).getAccountID()
                        })),
                        u = b.a === o,
                        d = E((function(e) {
                            return e(b.f).getServiceURL({
                                path: "/provision/SignUp"
                            })
                        })),
                        S = Object(s.useContext)(h.b),
                        _ = Object(s.useCallback)(function() {
                            var t = c()(i.a.mark((function t(n) {
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n.preventDefault(), t.next = 3, Object(p.w)("".concat(S, "_analytics"), "create_account", "custom-oauth");
                                        case 3:
                                            e.open(d, "_blank");
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), [d, S]),
                        T = A(b.f).resetAccounts,
                        O = Object(s.useCallback)((function() {
                            T()
                        }), [T]);
                    return r ? a.createElement("div", null, a.createElement(v.a, null), a.createElement(y.a, {
                        moduleSlug: "analytics",
                        storeName: b.f
                    }), !u && n && 0 === n.length && a.createElement("p", null, Object(l.__)('Looks like you don\'t have an Analytics account yet. Once you create it, click on "Re-fetch my account" and Site Kit will locate it.', "google-site-kit")), u && a.createElement(s.Fragment, null, a.createElement("p", null, Object(l.__)("To create a new account, click the button below which will open the Google Analytics account creation screen in a new window.", "google-site-kit")), a.createElement("p", null, Object(l.__)("Once completed, click the link below to re-fetch your accounts to continue.", "google-site-kit"))), a.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, a.createElement(m.a, {
                        onClick: _
                    }, Object(l.__)("Create an account", "google-site-kit")), a.createElement("div", {
                        className: "googlesitekit-setup-module__sub-action"
                    }, a.createElement(g.a, {
                        onClick: O
                    }, Object(l.__)("Re-fetch My Account", "google-site-kit"))))) : a.createElement(f.a, null)
                }
            }).call(this, n(18), n(3))
        },
        347: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AccountSelect
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(55),
                    s = n(7),
                    l = n(10),
                    u = n(25),
                    d = n(11),
                    m = n(20),
                    g = o.a.useSelect,
                    f = o.a.useDispatch;

                function AccountSelect() {
                    var t = Object(a.useContext)(m.b),
                        n = g((function(e) {
                            return e(l.f).getAccountID()
                        })),
                        i = g((function(e) {
                            return {
                                accounts: e(l.f).getAccounts(),
                                hasResolvedAccounts: e(l.f).hasFinishedResolution("getAccounts")
                            }
                        })),
                        o = i.accounts,
                        p = i.hasResolvedAccounts,
                        b = g((function(e) {
                            var t = {
                                hasExistingTag: e(l.f).hasExistingTag(),
                                hasGTMPropertyID: !1
                            };
                            return t.hasExistingTag || (t.hasGTMPropertyID = !!e(u.g).getSingleAnalyticsPropertyID()), t
                        })),
                        y = b.hasExistingTag,
                        v = b.hasGTMPropertyID,
                        h = f(l.f).selectAccount,
                        E = Object(a.useCallback)((function(e, a) {
                            var r = a.dataset.value;
                            if (n !== r) {
                                h(r);
                                var i = r === l.a ? "change_account_new" : "change_account";
                                Object(d.w)("".concat(t, "_analytics"), i)
                            }
                        }), [n, h, t]);
                    return p ? e.createElement(s.m, {
                        className: "googlesitekit-analytics__select-account",
                        label: Object(r.__)("Account", "google-site-kit"),
                        value: n,
                        onEnhancedChange: E,
                        disabled: y || v,
                        enhanced: !0,
                        outlined: !0
                    }, (o || []).concat({
                        id: l.a,
                        name: Object(r.__)("Set up a new account", "google-site-kit")
                    }).map((function(t, n) {
                        var a = t.id,
                            r = t.name;
                        return e.createElement(s.k, {
                            key: n,
                            value: a
                        }, r)
                    }))) : e.createElement(c.a, {
                        small: !0
                    })
                }
            }).call(this, n(3))
        },
        348: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AdsConversionIDTextField
                }));
                var a = n(8),
                    r = n.n(a),
                    i = n(2),
                    o = n(1),
                    c = n(4),
                    s = n.n(c),
                    l = n(7),
                    u = n(10),
                    d = n(56),
                    m = n(61),
                    g = s.a.useSelect,
                    f = s.a.useDispatch;

                function AdsConversionIDTextField() {
                    var t = g((function(e) {
                            return e(u.f).getAdsConversionID()
                        })),
                        n = g((function(e) {
                            return e(u.f).getCanUseSnippet() && e(u.f).getUseSnippet()
                        })),
                        a = f(u.f).setAdsConversionID,
                        c = Object(i.useCallback)((function(e) {
                            var n = e.currentTarget.value.trim().toUpperCase();
                            "AW-".length < n.length && !/^AW-/.test(n) && (n = "AW-".concat(n)), n !== t && a(n)
                        }), [t, a]),
                        s = Boolean(!t || Object(m.f)(t));
                    return s && !n ? null : e.createElement("div", null, e.createElement(l.n, {
                        label: Object(o.__)("Ads Conversion ID", "google-site-kit"),
                        className: r()({
                            "mdc-text-field--error": !s
                        }),
                        helperText: !s && e.createElement(l.c, {
                            persistent: !0
                        }, Object(o.__)("Conversion IDs must be in the format: AW-XXXXX", "google-site-kit")),
                        trailingIcon: !s && e.createElement("span", {
                            className: "googlesitekit-text-field-icon--error"
                        }, e.createElement(d.a, null, Object(o.__)("Error", "google-site-kit"))),
                        outlined: !0
                    }, e.createElement(l.d, {
                        value: t,
                        onChange: c
                    })), e.createElement("p", null, Object(o.__)("If you’re using Google Ads, insert your Ads conversion ID if you’d like Site Kit to place the snippet on your site", "google-site-kit")))
                }
            }).call(this, n(3))
        },
        349: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AnonymizeIPSwitch
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(10),
                    s = n(15),
                    l = n(129),
                    u = n(21),
                    d = o.a.useSelect,
                    m = o.a.useDispatch;

                function AnonymizeIPSwitch() {
                    var t = d((function(e) {
                            return e(c.f).getAnonymizeIP()
                        })),
                        n = d((function(e) {
                            return e(c.f).getUseSnippet()
                        })),
                        i = d((function(e) {
                            return e(s.c).getAMPMode()
                        })),
                        o = d((function(e) {
                            return e(s.c).getGoogleSupportURL({
                                path: "/analytics/answer/2763052"
                            })
                        })),
                        g = m(c.f).setAnonymizeIP,
                        f = Object(a.useCallback)((function() {
                            g(!t)
                        }), [t, g]);
                    return n && "primary" !== i && void 0 !== t ? e.createElement("div", {
                        className: "googlesitekit-analytics-anonymizeip"
                    }, e.createElement(l.a, {
                        label: Object(r.__)("Anonymize IP addresses", "google-site-kit"),
                        onClick: f,
                        checked: t,
                        hideLabel: !1
                    }), e.createElement("p", null, t ? Object(r.__)("IP addresses will be anonymized.", "google-site-kit") : Object(r.__)("IP addresses will not be anonymized.", "google-site-kit"), " ", e.createElement(u.a, {
                        href: o,
                        external: !0,
                        inherit: !0,
                        "aria-label": Object(r.__)("Learn more about IP anonymization.", "google-site-kit")
                    }, Object(r.__)("Learn more", "google-site-kit")))) : null
                }
            }).call(this, n(3))
        },
        35: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e) {
                return e instanceof Date && !isNaN(e)
            }
        },
        350: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ExistingGTMPropertyError
                }));
                var a = n(1),
                    r = n(4),
                    i = n.n(r),
                    o = n(10),
                    c = n(25),
                    s = n(81),
                    l = i.a.useSelect;

                function ExistingGTMPropertyError() {
                    var t = l((function(e) {
                            return e(c.g).getSingleAnalyticsPropertyID()
                        })),
                        n = l((function(e) {
                            return e(o.f).hasTagPermission(t)
                        }));
                    if (!t || n || void 0 === n) return null;
                    var r = Object(a.sprintf)(
                        /* translators: %s: Property id of the existing tag */
                        Object(a.__)("You’re already using Google Analytics through Google Tag Manager with the property %s, but your account doesn’t seem to have access to this Analytics property. You can either modify your Tag Manager configuration to use a different property, or request access to this property from your team.", "google-site-kit"), t);
                    return e.createElement(s.a, {
                        message: r
                    })
                }
            }).call(this, n(3))
        },
        351: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ExistingGTMPropertyNotice
                }));
                var a = n(1),
                    r = n(4),
                    i = n.n(r),
                    o = n(10),
                    c = n(25),
                    s = i.a.useSelect;

                function ExistingGTMPropertyNotice() {
                    var t = s((function(e) {
                            return e(c.g).getSingleAnalyticsPropertyID()
                        })),
                        n = s((function(e) {
                            return e(o.f).hasTagPermission(t)
                        }));
                    if (!t || !n) return null;
                    var r = Object(a.sprintf)(
                        /* translators: %s: Analytics tag ID */
                        Object(a.__)("You’re already using Google Analytics through Google Tag Manager with the property %s. Site Kit will therefore not place an Analytics tag because Tag Manager already covers it.", "google-site-kit"), t);
                    return e.createElement("p", null, r)
                }
            }).call(this, n(3))
        },
        352: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ExistingTagError
                }));
                var a = n(1),
                    r = n(4),
                    i = n.n(r),
                    o = n(10),
                    c = n(81),
                    s = i.a.useSelect;

                function ExistingTagError() {
                    var t = s((function(e) {
                        return e(o.f).getExistingTag()
                    }));
                    if (!t) return null;
                    var n = Object(a.sprintf)(
                        /* translators: %s: Property id of the existing tag */
                        Object(a.__)("We've detected there's already an existing Analytics tag on your site (ID %s), but your account doesn't seem to have access to this Analytics property. You can either remove the existing tag and connect to a different account, or request access to this property from your team.", "google-site-kit"), t);
                    return e.createElement(c.a, {
                        message: n
                    })
                }
            }).call(this, n(3))
        },
        353: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ExistingTagNotice
                }));
                var a = n(1),
                    r = n(4),
                    i = n.n(r),
                    o = n(10),
                    c = n(41),
                    s = i.a.useSelect;

                function ExistingTagNotice() {
                    var t, n = s((function(e) {
                            return {
                                hasExistingTag: e(o.f).hasExistingTag(),
                                existingTag: e(o.f).getExistingTag(),
                                propertyID: e(o.f).getPropertyID()
                            }
                        })),
                        r = s((function(e) {
                            return {
                                hasExistingTag: e(c.b).hasExistingTag(),
                                existingTag: e(c.b).getExistingTag(),
                                measurementID: e(c.b).getMeasurementID()
                            }
                        }));
                    return n.hasExistingTag && !r.hasExistingTag ? t = n.existingTag === n.propertyID ? Object(a.sprintf)(
                        /* translators: %s: Analytics tag ID */
                        Object(a.__)("An existing Universal Analytics tag was found on your site with the ID %s. Since this tag refers to the same property selected here, Site Kit will not place its own tag and rely on the existing one. If later on you decide to remove this tag, Site Kit can place a new tag for you.", "google-site-kit"), n.existingTag) : Object(a.sprintf)(
                        /* translators: %s: Analytics tag ID */
                        Object(a.__)("An existing Universal Analytics tag was found on your site with the ID %s.", "google-site-kit"), n.existingTag) : !n.hasExistingTag && r.hasExistingTag ? t = r.existingTag === r.measurementID ? Object(a.sprintf)(
                        /* translators: %s: Analytics 4 measurement ID */
                        Object(a.__)("An existing Google Analytics 4 tag was found on your site with the ID %s. Since this tag refers to the same property selected here, Site Kit will not place its own tag and rely on the existing one. If later on you decide to remove this tag, Site Kit can place a new tag for you.", "google-site-kit"), r.existingTag) : Object(a.sprintf)(
                        /* translators: %s: Analytics 4 measurement ID */
                        Object(a.__)("An existing Google Analytics 4 tag was found on your site with the ID %s.", "google-site-kit"), r.existingTag) : n.hasExistingTag && r.hasExistingTag && (t = n.existingTag === n.propertyID && r.existingTag === r.measurementID ? Object(a.sprintf)(
                        /* translators: %1$s: Analytics tag ID, %2$s: Analytics 4 measurement ID */
                        Object(a.__)("An existing Universal Analytics tag with the ID %1$s and an existing Google Analytics 4 tag with the ID %2$s were found on your site. Since these tags refer to the same properties selected here, Site Kit will not place its own tags and rely on the existing ones. If later on you decide to remove these tags, Site Kit can place new tags for you.", "google-site-kit"), n.existingTag, r.existingTag) : n.existingTag === n.propertyID && r.existingTag !== r.measurementID ? Object(a.sprintf)(
                        /* translators: %1$s: Analytics tag ID, %2$s: Analytics 4 measurement ID */
                        Object(a.__)("An existing Universal Analytics tag with the ID %1$s and an existing Google Analytics 4 tag with the ID %2$s were found on your site. Since the Universal Analytics tag refers to the same property selected here, Site Kit will not place its own tag and rely on the existing one.", "google-site-kit"), n.existingTag, r.existingTag) : n.existingTag !== n.propertyID && r.existingTag === r.measurementID ? Object(a.sprintf)(
                        /* translators: %1$s: Analytics tag ID, %2$s: Analytics 4 measurement ID */
                        Object(a.__)("An existing Universal Analytics tag with the ID %1$s and an existing Google Analytics 4 tag with the ID %2$s were found on your site. Since the Google Analytics 4 tag refers to the same property selected here, Site Kit will not place its own tag and rely on the existing one. If later on you decide to remove this tag, Site Kit can place a new tag for you.", "google-site-kit"), n.existingTag, r.existingTag) : Object(a.sprintf)(
                        /* translators: %1$s: Analytics tag ID, %2$s: Analytics 4 measurement ID */
                        Object(a.__)("An existing Universal Analytics tag with the ID %1$s and an existing Google Analytics 4 tag with the ID %2$s were found on your site.", "google-site-kit"), n.existingTag, r.existingTag)), t ? e.createElement("p", null, t) : null
                }
            }).call(this, n(3))
        },
        354: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ProfileNameTextField
                }));
                var a = n(99),
                    r = n(2),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(36),
                    l = n(7),
                    u = n(10),
                    d = n(56),
                    m = c.a.useSelect,
                    g = c.a.useDispatch;

                function ProfileNameTextField() {
                    var t, n, o = m((function(e) {
                            return e(u.f).getAccountID()
                        })),
                        c = m((function(e) {
                            return e(u.f).getPropertyID()
                        })),
                        f = m((function(e) {
                            return e(u.f).getProfiles(o, c)
                        })),
                        p = m((function(e) {
                            return e(u.f).getProfileID()
                        })),
                        b = m((function(e) {
                            return e(s.a).getValue(u.e, "profileName")
                        })),
                        y = g(s.a).setValues,
                        v = Object(r.useCallback)((function(e) {
                            var t = e.currentTarget;
                            y(u.e, {
                                profileName: t.value
                            })
                        }), [y]);
                    return Object(a.a)((function() {
                        b || y(u.e, {
                            profileName: Object(i._x)("All Web Site Data", "default Analytics view name", "google-site-kit")
                        })
                    })), p !== u.g ? null : (Array.isArray(f) && f.some((function(e) {
                        return e.name === b
                    })) && (t = e.createElement(l.c, {
                        persistent: !0
                    }, Object(i.__)("A view with this name already exists.", "google-site-kit")), n = e.createElement("span", {
                        className: "googlesitekit-text-field-icon--warning"
                    }, e.createElement(d.a, null, Object(i.__)("Warning", "google-site-kit")))), e.createElement("div", {
                        className: "googlesitekit-analytics-profilename"
                    }, e.createElement(l.n, {
                        label: Object(i.__)("View Name", "google-site-kit"),
                        outlined: !0,
                        helperText: t,
                        trailingIcon: n
                    }, e.createElement(l.d, {
                        value: b,
                        onChange: v
                    })), e.createElement("p", null, Object(i.__)("You can make changes to this view (e.g. exclude URL query parameters) in Google Analytics.", "google-site-kit"))))
                }
            }).call(this, n(3))
        },
        355: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ProfileSelect
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(7),
                    s = n(55),
                    l = n(10),
                    u = n(61),
                    d = n(11),
                    m = n(20),
                    g = o.a.useSelect,
                    f = o.a.useDispatch;

                function ProfileSelect() {
                    var t = g((function(e) {
                            return e(l.f).getAccountID()
                        })),
                        n = g((function(e) {
                            return e(l.f).getPropertyID()
                        })),
                        i = g((function(e) {
                            return e(l.f).getProfileID()
                        })),
                        o = g((function(e) {
                            return e(l.f).getProfiles(t, n)
                        })),
                        p = g((function(e) {
                            return !e(l.f).hasFinishedResolution("getAccounts") || e(l.f).isResolving("getProperties", [t]) || e(l.f).isResolving("getProfiles", [t, n])
                        })),
                        b = f(l.f).setProfileID,
                        y = Object(a.useContext)(m.b),
                        v = Object(a.useCallback)((function(e, t) {
                            var n = t.dataset.value;
                            if (i !== n) {
                                b(t.dataset.value);
                                var a = n === l.g ? "change_profile_new" : "change_profile";
                                Object(d.w)("".concat(y, "_analytics"), a)
                            }
                        }), [i, b, y]);
                    return Object(u.e)(t) && Object(u.k)(n) ? p ? e.createElement(s.a, {
                        small: !0
                    }) : e.createElement(c.m, {
                        className: "googlesitekit-analytics__select-profile",
                        label: Object(r.__)("View", "google-site-kit"),
                        value: i,
                        onEnhancedChange: v,
                        enhanced: !0,
                        outlined: !0
                    }, (o || []).concat({
                        id: l.g,
                        name: Object(r.__)("Set up a new view", "google-site-kit")
                    }).map((function(t, n) {
                        var a = t.id,
                            r = t.name;
                        return e.createElement(c.k, {
                            key: n,
                            value: a
                        }, r)
                    }))) : null
                }
            }).call(this, n(3))
        },
        356: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return PropertySelect
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(7),
                    s = n(55),
                    l = n(10),
                    u = n(25),
                    d = n(61),
                    m = n(11),
                    g = n(20),
                    f = o.a.useSelect,
                    p = o.a.useDispatch;

                function PropertySelect() {
                    var t = f((function(e) {
                            var t = {
                                accountID: e(l.f).getAccountID(),
                                properties: [],
                                isResolvingProperties: !1
                            };
                            return t.accountID && (t.properties = e(l.f).getProperties(t.accountID), t.isResolvingProperties = e(l.f).isResolving("getProperties", [t.accountID])), t
                        })),
                        n = t.accountID,
                        i = t.properties,
                        o = t.isResolvingProperties,
                        b = f((function(e) {
                            return e(l.f).hasExistingTag()
                        })),
                        y = f((function(e) {
                            return !!e(u.g).getSingleAnalyticsPropertyID()
                        })),
                        v = f((function(e) {
                            return e(l.f).getPropertyID()
                        })),
                        h = f((function(e) {
                            return e(l.f).hasFinishedResolution("getAccounts")
                        })),
                        E = p(l.f).selectProperty,
                        A = Object(a.useContext)(g.b),
                        S = Object(a.useCallback)((function(e, t) {
                            var n = t.dataset.value;
                            if (v !== n) {
                                E(n, t.dataset.internalId);
                                var a = n === l.h ? "change_property_new" : "change_property";
                                Object(m.w)("".concat(A, "_analytics"), a, "ua")
                            }
                        }), [v, E, A]);
                    return Object(d.e)(n) ? !h || o ? e.createElement(s.a, {
                        small: !0
                    }) : e.createElement(c.m, {
                        className: "googlesitekit-analytics__select-property",
                        label: Object(r.__)("Property", "google-site-kit"),
                        value: v,
                        onEnhancedChange: S,
                        disabled: b || y,
                        enhanced: !0,
                        outlined: !0
                    }, (i || []).concat({
                        id: l.h,
                        name: Object(r.__)("Set up a new property", "google-site-kit")
                    }).map((function(t, n) {
                        var a = t.id,
                            i = t.name,
                            o = t.internalWebPropertyId;
                        return e.createElement(c.k, {
                            key: n,
                            value: a,
                            "data-internal-id": o
                        }, o ? Object(r.sprintf)(
                            /* translators: %1$s: property name, %2$s: property ID */
                            Object(r.__)("%1$s (%2$s)", "google-site-kit"), i, a) : i)
                    }))) : null
                }
            }).call(this, n(3))
        },
        357: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return PropertySelectIncludingGA4
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(5),
                    o = n.n(i),
                    c = n(14),
                    s = n.n(c),
                    l = n(2),
                    u = n(1),
                    d = n(4),
                    m = n.n(d),
                    g = n(7),
                    f = n(55),
                    p = n(41),
                    b = n(10),
                    y = n(61),
                    v = n(11),
                    h = n(20);

                function E(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function A(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? E(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var S = m.a.useSelect,
                    _ = m.a.useDispatch;

                function PropertySelectIncludingGA4() {
                    var t = S((function(e) {
                            return e(b.f).getAccountID()
                        })),
                        n = S((function(e) {
                            return e(b.f).getPropertiesIncludingGA4(t) || []
                        })),
                        a = S((function(e) {
                            return e(p.b).getPropertyID()
                        })),
                        r = S((function(e) {
                            return e(b.f).getPropertyID()
                        })),
                        i = S((function(e) {
                            var n = !e(b.f).hasFinishedResolution("getAccounts"),
                                a = !e(p.b).hasFinishedResolution("getProperties", [t]),
                                r = !e(b.f).hasFinishedResolution("getProperties", [t]);
                            return n || r || a
                        })),
                        c = S((function(e) {
                            return e(b.f).getPrimaryPropertyType()
                        })) === b.i ? a : r,
                        d = _(p.b),
                        m = _(b.f),
                        E = Object(l.useContext)(h.b),
                        T = Object(l.useCallback)(function() {
                            var e = s()(o.a.mark((function e(n, a) {
                                var r, i, s, l, u, g, f, p, y, h, A;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = a.dataset.value, i = a.dataset.internalId, c !== r) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (r === b.h ? Object(v.w)("".concat(E, "_analytics"), "change_property_new", "ua") : (s = i ? "ua" : "ga4", Object(v.w)("".concat(E, "_analytics"), "change_property", s)), !i && r !== b.h) {
                                                e.next = 20;
                                                break
                                            }
                                            return e.next = 8, d.matchAccountProperty(t);
                                        case 8:
                                            if (!(null == (f = e.sent) ? void 0 : f._id)) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 12, d.matchWebDataStream(f._id);
                                        case 12:
                                            p = e.sent;
                                        case 13:
                                            m.selectProperty(r, i), m.setPrimaryPropertyType(b.j), d.setPropertyID((null == f ? void 0 : f._id) || ""), d.setWebDataStreamID((null === (l = p) || void 0 === l ? void 0 : l._id) || ""), d.setMeasurementID((null === (u = p) || void 0 === u || null === (g = u.webStreamData) || void 0 === g ? void 0 : g.measurementId) || ""), e.next = 32;
                                            break;
                                        case 20:
                                            return e.next = 22, m.findMatchedProperty(t);
                                        case 22:
                                            if (!(null == (h = e.sent) ? void 0 : h.id)) {
                                                e.next = 27;
                                                break
                                            }
                                            return e.next = 26, m.findPropertyProfile(t, h.id, h.defaultProfileId);
                                        case 26:
                                            A = e.sent;
                                        case 27:
                                            d.selectProperty(r), m.setPrimaryPropertyType(b.i), m.setPropertyID((null == h ? void 0 : h.id) || ""), m.setInternalWebPropertyID((null == h ? void 0 : h.internalWebPropertyId) || ""), m.setProfileID((null === (y = A) || void 0 === y ? void 0 : y.id) || "");
                                        case 32:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), [t, c, d, m, E]);
                    if (!Object(y.d)(t)) return null;
                    if (i) return e.createElement(f.a, {
                        small: !0
                    });
                    var O = n.map((function(e) {
                        return A(A({}, e), {}, {
                            id: e._id || e.id,
                            name: e.displayName || e.name
                        })
                    }));
                    return e.createElement(g.m, {
                        className: "googlesitekit-analytics__select-property",
                        label: Object(u.__)("Property", "google-site-kit"),
                        value: c,
                        onEnhancedChange: T,
                        enhanced: !0,
                        outlined: !0
                    }, (O || []).concat({
                        id: b.h,
                        name: Object(u.__)("Set up a new property", "google-site-kit")
                    }).map((function(t) {
                        var n = t.id,
                            a = t.name,
                            r = t.internalWebPropertyId;
                        return e.createElement(g.k, {
                            key: n,
                            value: n,
                            "data-internal-id": r
                        }, n === b.h ? a : Object(u.sprintf)(
                            /* translators: 1: Property name. 2: Property ID. */
                            Object(u._x)("%1$s (%2$s)", "{property name} ({property id})", "google-site-kit"), a, n))
                    })))
                }
            }).call(this, n(3))
        },
        358: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return UseSnippetSwitch
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(10),
                    s = n(129),
                    l = n(11),
                    u = n(20),
                    d = o.a.useSelect,
                    m = o.a.useDispatch;

                function UseSnippetSwitch() {
                    var t = Object(a.useContext)(u.b),
                        n = d((function(e) {
                            return e(c.f).getUseSnippet()
                        })),
                        i = d((function(e) {
                            return e(c.f).getCanUseSnippet()
                        })),
                        o = m(c.f).setUseSnippet,
                        g = Object(a.useCallback)((function() {
                            var e = !n;
                            o(e), Object(l.w)("".concat(t, "_analytics"), e ? "enable_tag" : "disable_tag", "ua")
                        }), [n, o, t]);
                    return void 0 === n ? null : e.createElement("div", {
                        className: "googlesitekit-analytics-usesnippet"
                    }, e.createElement(s.a, {
                        label: Object(r.__)("Place Universal Analytics code", "google-site-kit"),
                        checked: n,
                        onClick: g,
                        hideLabel: !1,
                        disabled: !i
                    }), e.createElement("p", null, !1 === i && e.createElement("span", null, Object(r.__)("The code is controlled by the Tag Manager module.", "google-site-kit"), " "), i && n && e.createElement("span", null, Object(r.__)("Site Kit will add the UA code automatically.", "google-site-kit"), " "), i && !n && e.createElement("span", null, Object(r.__)("Site Kit will not add the UA code to your site.", "google-site-kit"), " ")))
                }
            }).call(this, n(3))
        },
        359: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return GA4ActivateSwitch
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(1),
                    o = n(2),
                    c = n(4),
                    s = n.n(c),
                    l = n(36),
                    u = n(10),
                    d = n(11),
                    m = n(20),
                    g = n(129),
                    f = n(21),
                    p = s.a.useSelect,
                    b = s.a.useDispatch;

                function GA4ActivateSwitch(t) {
                    var n = t.onActivate,
                        a = Object(o.useContext)(m.b),
                        r = p((function(e) {
                            return e(l.a).getValue(u.e, "enableGA4")
                        })),
                        c = b(l.a).setValues,
                        s = Object(o.useCallback)((function() {
                            c(u.e, {
                                enableGA4: !0
                            }), Object(d.w)("".concat(a, "_analytics"), "activate_ga4"), "function" == typeof n && n()
                        }), [c, n, a]);
                    return e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement(g.a, {
                        label: e.createElement(o.Fragment, null, Object(i.__)("Activate Google Analytics 4 and place code on your site.", "google-site-kit"), " ", e.createElement(f.a, {
                            href: "https://sitekit.withgoogle.com/documentation/using-site-kit/ga4/",
                            external: !0,
                            inherit: !0
                        }, Object(i.__)("Learn more", "google-site-kit"))),
                        checked: r,
                        onClick: s,
                        hideLabel: !1
                    }))
                }
                GA4ActivateSwitch.propTypes = {
                    onActivate: r.a.func
                }
            }).call(this, n(3))
        },
        36: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = "core/forms"
        },
        363: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AdBlockerWarning
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i),
                    c = n(8),
                    s = n.n(c),
                    l = n(4),
                    u = n.n(l),
                    d = n(139),
                    m = n(27),
                    g = u.a.useSelect;

                function AdBlockerWarning(t) {
                    var n = t.context,
                        a = g((function(e) {
                            return e(m.b).getAdBlockerWarningMessage()
                        }));
                    return a ? e.createElement("div", {
                        className: s()("googlesitekit-settings-module-warning", r()({}, "googlesitekit-settings-module-warning--".concat(n), n))
                    }, e.createElement(d.a, {
                        height: "20",
                        width: "23"
                    }), " ", a) : null
                }
                AdBlockerWarning.propTypes = {
                    context: o.a.string
                }, AdBlockerWarning.defaultProps = {
                    context: ""
                }
            }).call(this, n(3))
        },
        364: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var a = n(9),
                r = n.n(a),
                i = n(1),
                o = n(109),
                c = n(188);

            function s(e) {
                var t = e.siteName,
                    n = e.siteURL,
                    a = e.timezone,
                    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Intl.DateTimeFormat().resolvedOptions().timeZone;
                r()(Object(o.a)(n), "a valid siteURL is required.");
                var l = new URL(n),
                    u = l.hostname,
                    d = l.pathname,
                    m = c.c[a] ? a : s;
                return {
                    accountName: t || u,
                    propertyName: "".concat(u).concat(d).replace(/\/$/, ""),
                    profileName: Object(i._x)("All Web Site Data", "default Analytics view name", "google-site-kit"),
                    countryCode: c.c[m],
                    timezone: m
                }
            }
        },
        365: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return TimezoneSelect
                }));
                var a = n(2),
                    r = n(1),
                    i = n(7),
                    o = n(188),
                    c = n(4),
                    s = n.n(c),
                    l = n(10),
                    u = n(36),
                    d = s.a.useSelect,
                    m = s.a.useDispatch;

                function TimezoneSelect() {
                    var t = d((function(e) {
                            return e(u.a).getValue(l.d, "countryCode")
                        })),
                        n = d((function(e) {
                            return e(u.a).getValue(l.d, "timezone")
                        })),
                        c = m(u.a).setValues,
                        s = Object(a.useCallback)((function(e, t) {
                            c(l.d, {
                                timezone: t.dataset.value
                            })
                        }), [c]);
                    return e.createElement(i.m, {
                        className: "googlesitekit-analytics__select-timezone",
                        label: Object(r.__)("Timezone", "google-site-kit"),
                        value: n,
                        onEnhancedChange: s,
                        disabled: !t,
                        enhanced: !0,
                        outlined: !0
                    }, (o.d[t] || []).map((function(t, n) {
                        var a = t.timeZoneId,
                            r = t.displayName;
                        return e.createElement(i.k, {
                            key: n,
                            value: a
                        }, r)
                    })))
                }
            }).call(this, n(3))
        },
        366: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AccountField
                }));
                var a = n(2),
                    r = n(1),
                    i = n(233),
                    o = n(4),
                    c = n.n(o),
                    s = n(10),
                    l = n(36),
                    u = c.a.useSelect,
                    d = c.a.useDispatch;

                function AccountField() {
                    var t = u((function(e) {
                            return e(l.a).getValue(s.d, "accountName")
                        })),
                        n = d(l.a).setValues,
                        o = Object(a.useCallback)((function(e) {
                            n(s.d, {
                                accountName: e
                            })
                        }), [n]);
                    return e.createElement(i.a, {
                        label: Object(r.__)("Account", "google-site-kit"),
                        hasError: !t,
                        value: t,
                        setValue: o,
                        name: "account"
                    })
                }
            }).call(this, n(3))
        },
        367: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return PropertyField
                }));
                var a = n(2),
                    r = n(1),
                    i = n(233),
                    o = n(4),
                    c = n.n(o),
                    s = n(10),
                    l = n(36),
                    u = c.a.useSelect,
                    d = c.a.useDispatch;

                function PropertyField() {
                    var t = u((function(e) {
                            return e(l.a).getValue(s.d, "propertyName")
                        })),
                        n = d(l.a).setValues,
                        o = Object(a.useCallback)((function(e) {
                            n(s.d, {
                                propertyName: e
                            })
                        }), [n]);
                    return e.createElement(i.a, {
                        label: Object(r.__)("Property", "google-site-kit"),
                        value: t,
                        hasError: !t,
                        setValue: o,
                        name: "property"
                    })
                }
            }).call(this, n(3))
        },
        368: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ProfileField
                }));
                var a = n(2),
                    r = n(1),
                    i = n(233),
                    o = n(4),
                    c = n.n(o),
                    s = n(10),
                    l = n(36),
                    u = c.a.useSelect,
                    d = c.a.useDispatch;

                function ProfileField() {
                    var t = u((function(e) {
                            return e(l.a).getValue(s.d, "profileName")
                        })),
                        n = d(l.a).setValues,
                        o = Object(a.useCallback)((function(e) {
                            n(s.d, {
                                profileName: e
                            })
                        }), [n]);
                    return e.createElement(i.a, {
                        label: Object(r.__)("View", "google-site-kit"),
                        value: t,
                        hasError: !t,
                        setValue: o,
                        name: "profile"
                    })
                }
            }).call(this, n(3))
        },
        369: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return CountrySelect
                }));
                var a = n(2),
                    r = n(1),
                    i = n(7),
                    o = n(188),
                    c = n(4),
                    s = n.n(c),
                    l = n(10),
                    u = n(36),
                    d = s.a.useSelect,
                    m = s.a.useDispatch;

                function CountrySelect() {
                    var t = d((function(e) {
                            return e(u.a).getValue(l.d, "countryCode")
                        })),
                        n = m(u.a).setValues,
                        c = Object(a.useCallback)((function(e, a) {
                            var r = a.dataset.value;
                            r !== t && o.b[r] && n(l.d, {
                                countryCode: r,
                                timezone: o.b[r].defaultTimeZoneId
                            })
                        }), [n, t]);
                    return e.createElement(i.m, {
                        className: "googlesitekit-analytics__select-country",
                        label: Object(r.__)("Country", "google-site-kit"),
                        value: t,
                        onEnhancedChange: c,
                        enhanced: !0,
                        outlined: !0
                    }, o.a.map((function(t, n) {
                        var a = t.countryCode,
                            r = t.displayName;
                        return e.createElement(i.k, {
                            key: n,
                            value: a
                        }, r)
                    })))
                }
            }).call(this, n(3))
        },
        379: function(e, t, n) {
            "use strict";
            var a = n(2);

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var i = a.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, a.createElement("path", {
                d: "M107.91 41.72c7.73-13.22 3.14-30.12-10.24-37.75C84.29-3.66 67.18.87 59.45 14.09c-.35.59-.66 1.2-.96 1.81l-26.1 44.66a27.172 27.172 0 00-1.6 2.75L3.67 110.1l48.45 27.16 26.98-46.4c.29-.44.57-.89.84-1.35.27-.46.52-.93.76-1.39l26.11-44.67c.38-.57.76-1.14 1.1-1.73z",
                fill: "#FBBC04"
            }), a.createElement("path", {
                d: "M52.34 137.11c-7.68 13.43-25 18.38-38.31 10.62-13.31-7.76-18.02-24.57-10.34-38s24.86-18.39 38.16-10.64c13.3 7.75 18.18 24.59 10.49 38.02z",
                fill: "#34A853"
            }), a.createElement("path", {
                d: "M158.79 51.86c-13.23-7.62-30.15-3.1-37.79 10.1l-27.66 47.8c-7.64 13.2-3.11 30.08 10.13 37.7 13.23 7.62 30.15 3.1 37.79-10.1l27.66-47.8c7.63-13.2 3.1-30.08-10.13-37.7z",
                fill: "#4285F4"
            }));
            t.a = function SvgAdsense(e) {
                return a.createElement("svg", r({
                    viewBox: "0 0 173 152"
                }, e), i)
            }
        },
        38: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = "core/location"
        },
        39: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(2),
                r = n(94),
                i = n(30),
                o = function(e) {
                    var t = Object(a.useContext)(r.a);
                    return Object(i.b)(e, t)
                }
        },
        396: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(748),
                r = function(e) {
                    var t = new URL(e);
                    return Object(a.parse)(t.hostname).domain
                }
        },
        4: function(e, t) {
            e.exports = googlesitekit.data
        },
        41: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "d", (function() {
                return i
            })), n.d(t, "a", (function() {
                return o
            }));
            var a = "modules/analytics-4",
                r = "property_create",
                i = "webdatastream_create",
                o = 10
        },
        411: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SiteSteps
                }));
                var a = n(1),
                    r = n(4),
                    i = n.n(r),
                    o = n(21),
                    c = n(27),
                    s = i.a.useSelect;

                function SiteSteps() {
                    var t = s((function(e) {
                            return e(c.b).getServiceAccountManageSitesURL()
                        })),
                        n = s((function(e) {
                            return e(c.b).getServiceAccountSiteAdsPreviewURL()
                        })),
                        r = [{
                            linkText: Object(a.__)("Enabled auto ads for your site", "google-site-kit"),
                            linkURL: n
                        }, {
                            linkText: Object(a.__)('Verified that your site is marked as "Ready"', "google-site-kit"),
                            linkURL: t
                        }];
                    return e.createElement("div", {
                        className: "googlesitekit-setup-module__list-wrapper"
                    }, e.createElement("ol", {
                        className: "googlesitekit-setup-module__list"
                    }, r.map((function(t, n) {
                        return e.createElement("li", {
                            className: "googlesitekit-setup-module__list-item",
                            key: n
                        }, e.createElement(o.a, {
                            href: t.linkURL,
                            external: !0,
                            inherit: !0
                        }, t.linkText))
                    }))))
                }
            }).call(this, n(3))
        },
        417: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n(9),
                r = n.n(a),
                i = n(42),
                o = function(e) {
                    r()(e, "A dates object is required.");
                    var t = e.startDate,
                        n = e.endDate;
                    return r()(Object(i.a)(t), "A valid startDate is required."), r()(Object(i.a)(n), "A valid endDate is required."), {
                        d: "".concat(t.replace(/-/g, "/"), "-").concat(n.replace(/-/g, "/"))
                    }
                }
        },
        418: function(e, t, n) {
            "use strict";

            function a(e, t) {
                var n, a;
                return !(400 !== (null == e ? void 0 : e.code) || !(null === (n = e.message) || void 0 === n || null === (a = n.startsWith) || void 0 === a ? void 0 : a.call(n, "Restricted metric"))) && (!(t instanceof RegExp || "string" == typeof t) || e.message.match(/ga:[a-z]+/gi).some((function(e) {
                    return e.match(t)
                })))
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        42: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(35),
                r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = "string" == typeof e;
                    if (!t) return !1;
                    var n = e.split("-");
                    return 3 === n.length && Object(a.a)(new Date(e))
                }
        },
        431: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Header
                }));
                var a = n(1),
                    r = n(2),
                    i = n(4),
                    o = n.n(i),
                    c = n(27),
                    s = n(13),
                    l = n(10),
                    u = n(149),
                    d = n(234),
                    m = n(282),
                    g = o.a.useSelect;

                function Header() {
                    var t = g((function(e) {
                            var t = e(s.a).getDateRangeDates({
                                    offsetDays: c.a
                                }),
                                n = t.startDate,
                                a = t.endDate;
                            return {
                                currentDayCount: e(s.a).getDateRangeNumberOfDays(),
                                analyticsMainURL: e(l.f).getServiceReportURL("content-publisher-overview", Object(u.a)({
                                    startDate: n,
                                    endDate: a
                                }))
                            }
                        })),
                        n = t.currentDayCount,
                        i = t.analyticsMainURL,
                        o = Object(a.sprintf)(
                            /* translators: %s: number of days */
                            Object(a._n)("Performance by page over the last %s day", "Performance by page over the last %s days", n, "google-site-kit"), n),
                        f = Object(a.sprintf)(
                            /* translators: %s: module name. */
                            Object(a.__)("See full stats in %s", "google-site-kit"), Object(a._x)("Analytics", "Service name", "google-site-kit"));
                    return e.createElement(r.Fragment, null, e.createElement(d.a, {
                        title: o
                    }), e.createElement(m.a, {
                        href: i,
                        label: f,
                        external: !0
                    }))
                }
            }).call(this, n(3))
        },
        442: function(e, t, n) {
            (function(e) {
                Object.prototype.hasOwnProperty.call(e, "google") || (e.google = void 0)
            }).call(this, n(18))
        },
        445: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupSiteAdded
                }));
                var a = n(5),
                    r = n.n(a),
                    i = n(14),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(2),
                    u = n(1),
                    d = n(4),
                    m = n.n(d),
                    g = n(19),
                    f = n(27),
                    p = n(411),
                    b = n(150),
                    y = m.a.useSelect,
                    v = m.a.useDispatch;

                function SetupSiteAdded(t) {
                    var n = t.finishSetup,
                        a = y((function(e) {
                            return e(f.b).isDoingSubmitChanges()
                        })),
                        i = v(f.b).completeSiteSetup,
                        c = Object(l.useCallback)(o()(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!a) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, i();
                                    case 4:
                                        e.sent && n();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [a, n, i]);
                    return e.createElement(l.Fragment, null, e.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, Object(u.__)("Let’s get your site ready for ads", "google-site-kit")), e.createElement(b.d, null), e.createElement("p", null, Object(u.__)("In order for your site to display ads, make sure you’ve completed these steps in AdSense", "google-site-kit")), e.createElement(p.a, null), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, e.createElement(g.a, {
                        onClick: c,
                        disabled: a
                    }, Object(u.__)("Continue", "google-site-kit"))))
                }
                SetupSiteAdded.propTypes = {
                    finishSetup: s.a.func
                }, SetupSiteAdded.defaultProps = {
                    finishSetup: function() {}
                }
            }).call(this, n(3))
        },
        45: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return A
            }));
            var a = n(5),
                r = n.n(a),
                i = n(6),
                o = n.n(i),
                c = n(9),
                s = n.n(c),
                l = n(57),
                u = n.n(l),
                d = n(54),
                m = n(76),
                g = n(11);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        o()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = function(e) {
                    return e
                },
                y = function() {
                    return {}
                },
                v = function() {},
                h = d.a.clearError,
                E = d.a.receiveError,
                A = function(e) {
                    var t, n, a = r.a.mark(M),
                        i = e.baseName,
                        c = e.controlCallback,
                        l = e.reducerCallback,
                        d = void 0 === l ? b : l,
                        f = e.argsToParams,
                        A = void 0 === f ? y : f,
                        S = e.validateParams,
                        _ = void 0 === S ? v : S;
                    s()(i, "baseName is required."), s()("function" == typeof c, "controlCallback is required and must be a function."), s()("function" == typeof d, "reducerCallback must be a function."), s()("function" == typeof A, "argsToParams must be a function."), s()("function" == typeof _, "validateParams must be a function.");
                    try {
                        _(A()), n = !1
                    } catch (e) {
                        n = !0
                    }
                    var T = Object(m.b)(i),
                        O = Object(m.a)(i),
                        k = "FETCH_".concat(O),
                        I = "START_".concat(k),
                        N = "FINISH_".concat(k),
                        j = "CATCH_".concat(k),
                        C = "RECEIVE_".concat(O),
                        D = "fetch".concat(T),
                        w = "receive".concat(T),
                        R = "isFetching".concat(T),
                        P = o()({}, R, {});

                    function M(e, t) {
                        var n, o;
                        return r.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, {
                                        payload: {
                                            params: e
                                        },
                                        type: I
                                    };
                                case 2:
                                    return a.next = 4, h(i, t);
                                case 4:
                                    return a.prev = 4, a.next = 7, {
                                        payload: {
                                            params: e
                                        },
                                        type: k
                                    };
                                case 7:
                                    return n = a.sent, a.next = 10, Z[w](n, e);
                                case 10:
                                    return a.next = 12, {
                                        payload: {
                                            params: e
                                        },
                                        type: N
                                    };
                                case 12:
                                    a.next = 23;
                                    break;
                                case 14:
                                    return a.prev = 14, a.t0 = a.catch(4), o = a.t0, a.next = 19, E(o, i, t);
                                case 19:
                                    return a.next = 21, E(o);
                                case 21:
                                    return a.next = 23, {
                                        payload: {
                                            params: e
                                        },
                                        type: j
                                    };
                                case 23:
                                    return a.abrupt("return", {
                                        response: n,
                                        error: o
                                    });
                                case 24:
                                case "end":
                                    return a.stop()
                            }
                        }), a, null, [
                            [4, 14]
                        ])
                    }
                    var Z = (t = {}, o()(t, D, (function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var a = A.apply(void 0, t);
                            return _(a), M(a, t)
                        })), o()(t, w, (function(e, t) {
                            return s()(void 0 !== e, "response is required."), n ? (s()(u()(t), "params is required."), _(t)) : t = {}, {
                                payload: {
                                    response: e,
                                    params: t
                                },
                                type: C
                            }
                        })), t),
                        L = o()({}, k, (function(e) {
                            var t = e.payload;
                            return c(t.params)
                        })),
                        G = o()({}, R, (function(e) {
                            if (void 0 === e[R]) return !1;
                            var t;
                            try {
                                for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
                                t = A.apply(void 0, a), _(t)
                            } catch (e) {
                                return !1
                            }
                            return !!e[R][Object(g.v)(t)]
                        }));
                    return {
                        initialState: P,
                        actions: Z,
                        controls: L,
                        reducer: function(e, t) {
                            var n = t.type,
                                a = t.payload;
                            switch (n) {
                                case I:
                                    var r = a.params;
                                    return p(p({}, e), {}, o()({}, R, p(p({}, e[R]), {}, o()({}, Object(g.v)(r), !0))));
                                case C:
                                    var i = a.response,
                                        c = a.params;
                                    return d(e, i, c);
                                case N:
                                    var s = a.params;
                                    return p(p({}, e), {}, o()({}, R, p(p({}, e[R]), {}, o()({}, Object(g.v)(s), !1))));
                                case j:
                                    var l = a.params;
                                    return p(p({}, e), {}, o()({}, R, p(p({}, e[R]), {}, o()({}, Object(g.v)(l), !1))));
                                default:
                                    return e
                            }
                        },
                        resolvers: {},
                        selectors: G
                    }
                }
        },
        48: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "e", (function() {
                return s
            }));
            var a = n(125),
                r = "xlarge",
                i = "desktop",
                o = "tablet",
                c = "small";

            function s() {
                var e = Object(a.a)();
                return e > 1280 ? r : e > 960 ? i : e > 600 ? o : c
            }
        },
        497: function(e, t, n) {
            "use strict";
            (function(e, a) {
                n.d(t, "a", (function() {
                    return SetupMain
                }));
                var r = n(5),
                    i = n.n(r),
                    o = n(14),
                    c = n.n(o),
                    s = n(12),
                    l = n.n(s),
                    u = n(400),
                    d = n(1),
                    m = n(2),
                    g = n(4),
                    f = n.n(g),
                    p = n(55),
                    b = n(379),
                    y = n(510),
                    v = n(515),
                    h = n(516),
                    E = n(20),
                    A = n(11),
                    S = n(15),
                    _ = n(150),
                    T = n(27),
                    O = n(119),
                    k = f.a.useSelect,
                    I = f.a.useDispatch;

                function SetupMain() {
                    var t, n = Object(m.useContext)(E.b),
                        r = "".concat(n, "_adsense"),
                        o = I(T.b),
                        s = o.clearError,
                        g = o.resetAccounts,
                        f = o.resetAlerts,
                        N = o.resetClients,
                        j = o.resetSites,
                        C = o.resetURLChannels,
                        D = o.setAccountID,
                        w = o.setAccountStatus,
                        R = o.submitChanges,
                        P = Object(m.useState)(!1),
                        M = l()(P, 2),
                        Z = M[0],
                        L = M[1],
                        G = Object(m.useState)(!1),
                        x = l()(G, 2),
                        U = x[0],
                        B = x[1],
                        F = k((function(e) {
                            return e(S.c).getReferenceSiteURL()
                        })),
                        W = k((function(e) {
                            return e(T.b).isAdBlockerActive()
                        })),
                        H = k((function(e) {
                            return e(T.b).getAccounts()
                        })),
                        q = k((function(e) {
                            return e(T.b).getAccountID()
                        })),
                        K = k((function(e) {
                            return e(T.b).hasSettingChanged("accountID")
                        })),
                        z = k((function(e) {
                            return e(T.b).getClientID()
                        })),
                        V = k((function(e) {
                            return e(T.b).hasSettingChanged("clientID")
                        })),
                        Y = k((function(e) {
                            return e(T.b).getError("getAccounts", [])
                        })),
                        $ = k((function(e) {
                            return e(T.b).canSubmitChanges()
                        })),
                        J = Object(O.p)({
                            accounts: H,
                            previousAccountID: q
                        }),
                        Q = null == H ? void 0 : H.find((function(e) {
                            return e._id === J
                        })),
                        X = k((function(e) {
                            return e(T.b).getClients(J)
                        })),
                        ee = k((function(e) {
                            return e(T.b).getAlerts(J)
                        })),
                        te = k((function(e) {
                            return e(T.b).getError("getAlerts", [J])
                        })),
                        ne = Object(O.r)({
                            clients: X,
                            previousClientID: z
                        }),
                        ae = k((function(e) {
                            return e(T.b).getURLChannels(J, ne)
                        })),
                        re = k((function(e) {
                            return e(T.b).getErrorForSelector("getURLChannels", [J, ne])
                        })),
                        ie = Object(O.q)({
                            accounts: H,
                            clients: X,
                            alerts: ee,
                            urlChannels: ae,
                            accountsError: Y,
                            alertsError: te,
                            urlChannelsError: re,
                            previousAccountID: q,
                            previousClientID: z
                        }),
                        oe = k((function(e) {
                            return e(T.b).hasSettingChanged("accountStatus")
                        })),
                        ce = Object(O.s)({
                            urlChannels: ae,
                            siteURL: F
                        }),
                        se = k((function(e) {
                            return e(T.b).hasSettingChanged("siteStatus")
                        }));
                    return Object(u.a)((function() {
                        (K && void 0 !== J || V && void 0 !== ne || oe && void 0 !== ie || se && void 0 !== ce) && L(!0)
                    }), [J, K, ne, V, ie, oe, ce, se]), Object(m.useEffect)((function() {
                        !J || 1 !== (null == H ? void 0 : H.length) || q || 1 === (null == H ? void 0 : H.length) && -1 === H.findIndex((function(e) {
                            return e._id === J
                        })) || (1 === (null == H ? void 0 : H.length) && !q || 1 === (null == H ? void 0 : H.length) && -1 === H.findIndex((function(e) {
                            return e._id === J
                        }))) && (D(J), L(!0))
                    }), [H, J, q, D]), Object(m.useEffect)((function() {
                        0 === (null == H ? void 0 : H.length) ? w(O.e) : (null == H ? void 0 : H.length) > 1 && !J && w(O.d)
                    }), [w, J, H]), Object(m.useEffect)((function() {
                        Z && !U && $ && (L(!1), c()(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return B(!0), e.next = 3, R();
                                    case 3:
                                        B(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))())
                    }), [Z, U, $, R]), Object(m.useEffect)((function() {
                        var t, n = !1,
                            a = function() {
                                t = e.setTimeout((function() {
                                    n = !0
                                }), 15e3)
                            },
                            r = function() {
                                e.clearTimeout(t), n && (n = !1, void 0 !== ie && O.a !== ie && (s(), g(), f(), N(), j(), C()))
                            };
                        return e.addEventListener("focus", r), e.addEventListener("blur", a),
                            function() {
                                e.removeEventListener("focus", r), e.removeEventListener("blur", a), e.clearTimeout(t)
                            }
                    }), [ie, s, g, f, N, j, C]), Object(m.useEffect)((function() {
                        void 0 !== ie && Object(A.w)(r, "receive_account_state", ie)
                    }), [r, ie]), Object(m.useEffect)((function() {
                        void 0 !== ce && Object(A.w)(r, "receive_site_state", ce)
                    }), [r, ce]), void 0 === H ? a.createElement(p.a, null) : (t = H.length ? J ? a.createElement(y.a, {
                        account: Q
                    }) : a.createElement(h.a, null) : a.createElement(v.a, null), a.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--adsense"
                    }, a.createElement("div", {
                        className: "googlesitekit-setup-module__step"
                    }, a.createElement("div", {
                        className: "googlesitekit-setup-module__logo"
                    }, a.createElement(b.a, {
                        width: "33",
                        height: "33"
                    })), a.createElement("h2", {
                        className: "googlesitekit-heading-3 googlesitekit-setup-module__title"
                    }, Object(d._x)("AdSense", "Service name", "google-site-kit"))), a.createElement("div", {
                        className: "googlesitekit-setup-module__step"
                    }, a.createElement(_.b, null), !W && t)))
                }
            }).call(this, n(18), n(3))
        },
        50: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return i
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "e", (function() {
                return s
            }));
            var a = n(109);

            function r(e) {
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
                if (!Object(a.a)(e)) return e;
                if (e.length <= t) return e;
                var n = new URL(e),
                    r = e.replace(n.origin, "");
                if (r.length < t) return r;
                var i = r.length - Math.floor(t) + 1;
                return "…" + r.substr(i)
            }
        },
        500: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccountApproved
                }));
                var a = n(5),
                    r = n.n(a),
                    i = n(14),
                    o = n.n(i),
                    c = n(2),
                    s = n(1),
                    l = n(4),
                    u = n.n(l),
                    d = n(19),
                    m = n(27),
                    g = n(324),
                    f = n(119),
                    p = n(150),
                    b = u.a.useSelect,
                    y = u.a.useDispatch;

                function SetupAccountApproved() {
                    var t = b((function(e) {
                            return e(m.b).getExistingTag()
                        })),
                        n = b((function(e) {
                            return e(m.b).hasExistingTagPermission()
                        })),
                        a = b((function(e) {
                            return e(m.b).getOriginalAccountStatus()
                        })),
                        i = b((function(e) {
                            return e(m.b).isDoingSubmitChanges()
                        })),
                        l = y(m.b).completeAccountSetup,
                        u = Object(c.useCallback)(o()(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!i) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, l();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [i, l]);
                    if (void 0 === t || void 0 === a) return null;
                    var v, h, E, A, S = "" === a || f.a === a;
                    return v = S ? Object(s.__)("Let Site Kit place AdSense code on your site to get your site approved", "google-site-kit") : Object(s.__)("Keep AdSense code placed by Site Kit", "google-site-kit"), t && n ? (h = !1, A = E = Object(s.__)("You’ve already got an AdSense code on your site for this account, we recommend you use Site Kit to place code to get the most out of AdSense.", "google-site-kit")) : t ? (h = !0, E = Object(s.sprintf)(
                        /* translators: %s: account ID */
                        Object(s.__)("Site Kit detected AdSense code for a different account %s on your site. For a better ads experience, you should remove AdSense code that’s not linked to this AdSense account.", "google-site-kit"), Object(g.a)(t)), A = Object(s.__)("Please note that AdSense will not show ads on your website unless you’ve already placed the code.", "google-site-kit")) : (h = !1, A = Object(s.__)("Please note that AdSense will not show ads on your website unless you’ve already placed the code.", "google-site-kit")), e.createElement(c.Fragment, null, e.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, S && e.createElement("span", null, Object(s.__)("Looks like you’re already using AdSense", "google-site-kit")), !S && e.createElement("span", null, Object(s.__)("Your account is ready to use AdSense", "google-site-kit"))), e.createElement(p.d, null), e.createElement("p", null, S && e.createElement("span", null, Object(s.__)("Site Kit will place AdSense code on your site to connect your site to AdSense and help you get the most out of ads. This means Google will automatically place ads for you in all the best places.", "google-site-kit")), !S && e.createElement("span", null, Object(s.__)("Site Kit has placed AdSense code on your site to connect your site to AdSense and help you get the most out of ads. This means Google will automatically place ads for you in all the best places.", "google-site-kit"))), h && e.createElement(p.f, null), e.createElement(p.e, {
                        label: v,
                        checkedMessage: E,
                        uncheckedMessage: A,
                        saveOnChange: !0
                    }), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, e.createElement(d.a, {
                        onClick: u,
                        disabled: i
                    }, Object(s.__)("Continue", "google-site-kit"))))
                }
            }).call(this, n(3))
        },
        501: function(e, t, n) {
            "use strict";

            function a(e) {
                return "string" == typeof e && /^pub-\d+$/.test(e)
            }

            function r(e) {
                return "string" == typeof e && /^ca-pub-\d+$/.test(e)
            }
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return r
            }))
        },
        502: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return WebStoriesAdUnitSelect
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(7),
                    s = n(55),
                    l = n(27),
                    u = o.a.useSelect,
                    d = o.a.useDispatch;

                function WebStoriesAdUnitSelect() {
                    var t = u((function(e) {
                            return e(l.b).getAccountID()
                        })),
                        n = u((function(e) {
                            return e(l.b).getClientID()
                        })),
                        i = u((function(e) {
                            return e(l.b).getWebStoriesAdUnit()
                        })),
                        o = u((function(e) {
                            return {
                                adunits: e(l.b).getAdUnits(t, n),
                                hasResolvedAdUnits: e(l.b).hasFinishedResolution("getAdUnits", [t, n])
                            }
                        })),
                        m = o.adunits,
                        g = o.hasResolvedAdUnits,
                        f = d(l.b).setWebStoriesAdUnit,
                        p = Object(a.useCallback)((function(e, t) {
                            var n = t.dataset.value;
                            i !== n && f(n)
                        }), [i, f]);
                    return g ? e.createElement(c.m, {
                        className: "googlesitekit-adsense__select-field",
                        label: Object(r.__)("Web Stories Ad Unit", "google-site-kit"),
                        value: i,
                        onEnhancedChange: p,
                        enhanced: !0,
                        outlined: !0
                    }, e.createElement(c.k, {
                        value: ""
                    }, Object(r.__)("Select ad unit", "google-site-kit")), (m || []).map((function(t) {
                        var n = t._id,
                            a = t.displayName;
                        return e.createElement(c.k, {
                            key: n,
                            value: n
                        }, a)
                    }))) : e.createElement(s.a, {
                        small: !0
                    })
                }
            }).call(this, n(3))
        },
        503: function(e, t, n) {
            "use strict";
            (function(e, a) {
                n.d(t, "a", (function() {
                    return AdSenseConnectCTA
                }));
                var r = n(5),
                    i = n.n(r),
                    o = n(14),
                    c = n.n(o),
                    s = n(12),
                    l = n.n(s),
                    u = n(344),
                    d = n(1),
                    m = n(68),
                    g = n(2),
                    f = n(130),
                    p = n(4),
                    b = n.n(p),
                    y = n(27),
                    v = n(7),
                    h = n(311),
                    E = n(13),
                    A = n(15),
                    S = n(22),
                    _ = n(38),
                    T = n(11),
                    O = n(21),
                    k = n(19),
                    I = n(97),
                    N = n(123),
                    j = n(379),
                    C = n(20),
                    D = b.a.useSelect,
                    w = b.a.useDispatch;

                function AdSenseConnectCTA() {
                    var t = Object(g.useState)(!1),
                        n = l()(t, 2),
                        r = n[0],
                        o = n[1],
                        s = w(E.a).dismissItem,
                        p = w(_.a).navigateTo,
                        b = w(S.a).activateModule,
                        R = w(A.c).setInternalServerError,
                        P = Object(g.useContext)(C.b),
                        M = Object(g.useRef)(),
                        Z = Object(g.useState)(!1),
                        L = l()(Z, 2),
                        G = L[0],
                        x = L[1],
                        U = Object(u.a)(M, {
                            threshold: .25
                        }),
                        B = !!(null == U ? void 0 : U.intersectionRatio);
                    Object(g.useEffect)((function() {
                        B && !G && (Object(T.w)("".concat(P, "_adsense-cta-widget"), "widget_view"), x(!0))
                    }), [B, P, G]);
                    var F = D((function(e) {
                            return e(A.c).getGoogleSupportURL({
                                path: "/adsense/answer/9724"
                            })
                        })),
                        W = D((function(e) {
                            return e(y.b).getAdminReauthURL()
                        })),
                        H = D((function(e) {
                            return e(E.a).isDismissingItem(h.a)
                        })),
                        q = D((function(e) {
                            return e(S.a).isModuleActive("adsense")
                        })),
                        K = D((function(e) {
                            return e(S.a).isModuleConnected("adsense")
                        })),
                        z = Object(g.useCallback)(c()(i.a.mark((function e() {
                            var t, n, a;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, b("adsense");
                                    case 2:
                                        if (t = e.sent, n = t.response, !(a = t.error)) {
                                            e.next = 8;
                                            break
                                        }
                                        return R({
                                            id: "setup-module-error",
                                            description: a.message
                                        }), e.abrupt("return", null);
                                    case 8:
                                        return e.next = 10, Object(T.w)("".concat(P, "_adsense-cta-widget"), "activate_module", "adsense");
                                    case 10:
                                        p(n.moduleReauthURL);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [b, p, R, P]),
                        V = Object(g.useCallback)((function() {
                            return p(W)
                        }), [W, p]),
                        Y = Object(g.useCallback)((function() {
                            Object(T.w)("".concat(P, "_adsense-cta-widget"), "dismiss_widget"), o(!0)
                        }), [P]),
                        $ = Object(g.useCallback)(c()(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(T.w)("".concat(P, "_adsense-cta-widget"), "dismiss_dialog_confirm");
                                    case 2:
                                        return e.next = 4, s(h.a);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [s, P]),
                        J = Object(g.useCallback)((function() {
                            Object(T.w)("".concat(P, "_adsense-cta-widget"), "dismiss_dialog_cancel"), o(!1)
                        }), [P]);
                    return Object(g.useEffect)((function() {
                        var t = function(e) {
                            m.d === e.keyCode && o(!1)
                        };
                        return e.addEventListener("keyup", t),
                            function() {
                                e.removeEventListener("keyup", t)
                            }
                    }), []), a.createElement("section", {
                        className: "googlesitekit-setup__wrapper googlesitekit-setup__wrapper--adsense-connect",
                        ref: M
                    }, a.createElement(v.b, null, a.createElement(v.l, null, a.createElement(v.a, {
                        size: 12
                    }, a.createElement("p", {
                        className: "googlesitekit-setup__intro-title"
                    }, Object(d.__)("Connect Service", "google-site-kit")), a.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--adsense"
                    }, a.createElement("div", {
                        className: "googlesitekit-setup-module__step"
                    }, a.createElement("div", {
                        className: "googlesitekit-setup-module__logo"
                    }, a.createElement(j.a, {
                        width: "33",
                        height: "33"
                    })), a.createElement("h2", {
                        className: "googlesitekit-heading-3 googlesitekit-setup-module__title"
                    }, Object(d._x)("AdSense", "Service name", "google-site-kit"))), a.createElement("div", {
                        className: "googlesitekit-setup-module__step"
                    }, a.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, a.createElement("span", null, Object(d.__)("Monetization metrics are powered by Google AdSense", "google-site-kit"))), a.createElement("p", null, Object(d.__)("Earn money by placing ads on your site. Google AdSense will help you place ads in exactly the right places to optimize how much you earn from your content.", "google-site-kit")), a.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, !q && a.createElement(k.a, {
                        onClick: z
                    }, Object(d.__)("Connect", "google-site-kit")), q && !K && a.createElement(k.a, {
                        onClick: V
                    }, Object(d.__)("Complete setup", "google-site-kit")), a.createElement(O.a, {
                        onClick: Y,
                        inherit: !0
                    }, Object(d.__)("Maybe later", "google-site-kit"))), a.createElement("p", {
                        className: "googlesitekit-setup-module__footer-text"
                    }, Object(f.a)(Object(d.__)("AdSense accounts are <a>subject to review and approval</a> by the Google AdSense team.", "google-site-kit"), {
                        a: a.createElement(O.a, {
                            href: F,
                            external: !0,
                            hideExternalIndicator: !0,
                            inherit: !0
                        })
                    })), a.createElement(I.a, null, a.createElement(N.a, {
                        dialogActive: r,
                        handleConfirm: $,
                        handleDialog: J,
                        title: Object(d.__)("This will remove the Monetization section from your dashboard", "google-site-kit"),
                        confirmButton: Object(d.__)("Yes, remove", "google-site-kit"),
                        dependentModules: Object(d.__)("You can always reactivate it by connecting Google AdSense in Settings", "google-site-kit"),
                        inProgress: H
                    }))))))))
                }
            }).call(this, n(18), n(3))
        },
        504: function(e, t, n) {
            "use strict";
            (function(e, a) {
                n.d(t, "a", (function() {
                    return SetupAccountCreate
                }));
                var r = n(5),
                    i = n.n(r),
                    o = n(14),
                    c = n.n(o),
                    s = n(2),
                    l = n(1),
                    u = n(4),
                    d = n.n(u),
                    m = n(19),
                    g = n(21),
                    f = n(20),
                    p = n(11),
                    b = n(324),
                    y = n(27),
                    v = n(15),
                    h = n(13),
                    E = n(150),
                    A = d.a.useSelect;

                function SetupAccountCreate() {
                    var t = Object(s.useContext)(f.b),
                        n = "".concat(t, "_adsense"),
                        r = A((function(e) {
                            return e(v.c).getReferenceSiteURL()
                        })),
                        o = A((function(e) {
                            return e(h.a).getEmail()
                        })),
                        u = A((function(e) {
                            return e(y.b).getExistingTag()
                        })),
                        d = A((function(e) {
                            return e(y.b).getServiceCreateAccountURL()
                        })),
                        S = A((function(e) {
                            return e(v.c).getGoogleSupportURL({
                                path: "/adsense/answer/2659101"
                            })
                        })),
                        _ = Object(s.useCallback)(function() {
                            var t = c()(i.a.mark((function t(a) {
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return a.preventDefault(), t.next = 3, Object(p.w)(n, "create_account");
                                        case 3:
                                            e.open(d, "_blank");
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(), [d, n]);
                    return r && o && void 0 !== u ? a.createElement(s.Fragment, null, a.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, Object(l.__)("Create your AdSense account", "google-site-kit")), a.createElement(E.d, null), a.createElement("p", null, Object(l.__)("Site Kit will place AdSense code on every page across your site. This means Google will automatically place ads for you in all the best places.", "google-site-kit")), a.createElement(E.f, null), a.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, a.createElement(m.a, {
                        onClick: _,
                        href: d
                    }, Object(l.__)("Create AdSense Account", "google-site-kit"))), a.createElement("p", {
                        className: "googlesitekit-setup-module__footer-text"
                    }, u && Object(l.sprintf)(
                        /* translators: 1: client ID, 2: user email address, 3: account ID */
                        Object(l.__)("Site Kit detected AdSense code %1$s on your page. We recommend you remove that code or add %2$s as a user to the AdSense account %3$s.", "google-site-kit"), u, o, Object(b.a)(u)), !u && Object(l.sprintf)(
                        /* translators: %s: user email address */
                        Object(l.__)("Already use AdSense? Add %s as a user to an existing AdSense account.", "google-site-kit"), o), " ", a.createElement(g.a, {
                        href: S,
                        inherit: !0,
                        external: !0,
                        "aria-label": Object(l.__)("Learn more about adding a user to an existing AdSense account", "google-site-kit")
                    }, Object(l.__)("Learn more", "google-site-kit")))) : null
                }
            }).call(this, n(18), n(3))
        },
        505: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccountDisapproved
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(21),
                    s = n(27),
                    l = n(150),
                    u = o.a.useSelect;

                function SetupAccountDisapproved() {
                    var t = u((function(e) {
                            return e(s.b).getAccountID()
                        })),
                        n = u((function(e) {
                            return e(s.b).getServiceAccountURL()
                        }));
                    return void 0 !== t && n ? e.createElement(a.Fragment, null, e.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, Object(r.__)("Your site isn’t ready to show ads yet", "google-site-kit")), e.createElement(l.d, null), e.createElement("p", null, Object(r.__)("You need to fix some things before we can connect Site Kit to your AdSense account.", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, e.createElement(c.a, {
                        href: n,
                        external: !0
                    }, Object(r.__)("Go to AdSense to find out how to fix the issue", "google-site-kit")))) : null
                }
            }).call(this, n(3))
        },
        506: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccountNoClient
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(21),
                    s = n(150),
                    l = n(15),
                    u = o.a.useSelect;

                function SetupAccountNoClient() {
                    var t = u((function(e) {
                        return e(l.c).getGoogleSupportURL({
                            path: "/adsense/answer/6023158"
                        })
                    }));
                    return e.createElement(a.Fragment, null, e.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, Object(r.__)("Looks like you have an AdMob account", "google-site-kit")), e.createElement(s.d, null), e.createElement("p", null, Object(r.__)("To start using AdSense, you need to update your account so that you can connect your site to AdSense.", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, e.createElement(c.a, {
                        href: t,
                        external: !0,
                        "aria-label": Object(r.__)("Learn more about updating your AdSense account", "google-site-kit")
                    }, Object(r.__)("Learn more", "google-site-kit"))))
                }
            }).call(this, n(3))
        },
        507: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccountPending
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(21),
                    s = n(27),
                    l = n(150),
                    u = o.a.useSelect;

                function SetupAccountPending() {
                    var t = u((function(e) {
                        return e(s.b).getServiceAccountManageSiteURL()
                    }));
                    return t ? e.createElement(a.Fragment, null, e.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, Object(r.__)("Your account is getting ready", "google-site-kit")), e.createElement(l.d, null), e.createElement("p", null, Object(r.__)("Site Kit has placed AdSense code on every page across your site.", "google-site-kit"), " ", Object(r.__)("After you’ve finished setting up your account, we’ll let you know when your site is ready to show ads. This usually takes less than a day, but it can sometimes take a bit longer.", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, e.createElement(c.a, {
                        href: t,
                        external: !0
                    }, Object(r.__)("Go to your AdSense account to check on your site’s status or to complete setting up", "google-site-kit")))) : null
                }
            }).call(this, n(3))
        },
        508: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccountSelect
                }));
                var a = n(2),
                    r = n(1),
                    i = n(150);

                function SetupAccountSelect() {
                    return e.createElement(a.Fragment, null, e.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, Object(r.__)("Select your AdSense account", "google-site-kit")), e.createElement(i.d, null), e.createElement("p", null, Object(r.__)("Looks like you have multiple AdSense accounts associated with your Google account. Select the account to use with Site Kit below.", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(i.a, null)))
                }
            }).call(this, n(3))
        },
        509: function(e, t, n) {
            "use strict";
            (function(e, a) {
                n.d(t, "a", (function() {
                    return SetupSiteAdd
                }));
                var r = n(2),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(19),
                    l = n(27),
                    u = n(150),
                    d = c.a.useSelect;

                function SetupSiteAdd() {
                    var t = d((function(e) {
                            return e(l.b).getAccountID()
                        })),
                        n = d((function(e) {
                            return e(l.b).getServiceAccountManageSiteURL()
                        })),
                        o = Object(r.useCallback)((function(t) {
                            t.preventDefault(), e.open(n, "_blank")
                        }), [n]);
                    return t && n ? a.createElement(r.Fragment, null, a.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, Object(i.__)("Add site to your AdSense account", "google-site-kit")), a.createElement(u.d, null), a.createElement("p", null, Object(i.__)("We’ve detected that you haven’t added this site to your AdSense account yet.", "google-site-kit")), a.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, a.createElement(s.a, {
                        onClick: o,
                        href: n
                    }, Object(i.__)("Add site to AdSense", "google-site-kit")))) : null
                }
            }).call(this, n(18), n(3))
        },
        51: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(28);

            function r(e) {
                return function() {
                    e[a.a] = e[a.a] || [], e[a.a].push(arguments)
                }
            }
        },
        510: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccount
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(2),
                    o = n(4),
                    c = n.n(o),
                    s = n(27),
                    l = n(119),
                    u = n(55),
                    d = n(511),
                    m = n(512),
                    g = n(513),
                    f = n(514),
                    p = c.a.useSelect,
                    b = c.a.useDispatch;

                function SetupAccount(t) {
                    var n = t.account,
                        a = n._id,
                        r = n.pendingTasks,
                        o = p((function(e) {
                            return e(s.b).getClientID()
                        })),
                        c = p((function(e) {
                            return e(s.b).getClients(a)
                        })),
                        y = p((function(e) {
                            return e(s.b).getCurrentSite(a)
                        })),
                        v = Object(l.r)({
                            clients: c || []
                        }),
                        h = b(s.b),
                        E = h.setClientID,
                        A = h.setAccountStatus;
                    return Object(i.useEffect)((function() {
                        !v || o && o === v || E(v)
                    }), [E, o, v]), Object(i.useEffect)((function() {
                        var e;
                        void 0 !== c && (v ? (null == y || null === (e = y.pendingTasks) || void 0 === e ? void 0 : e.length) > 0 ? A(l.h) : A(l.a) : A(l.f))
                    }), [c, A, v, y]), void 0 === c || void 0 === y ? e.createElement(u.a, null) : v ? null === y ? e.createElement(g.a, {
                        accountID: a
                    }) : (null == r ? void 0 : r.length) > 0 ? e.createElement(f.a, {
                        accountID: a
                    }) : e.createElement(d.a, {
                        accountID: a,
                        site: y
                    }) : e.createElement(m.a, {
                        accountID: a
                    })
                }
                SetupAccount.propTypes = {
                    account: r.a.shape({
                        _id: r.a.string,
                        pendingTasks: r.a.arrayOf(r.a.object)
                    })
                }
            }).call(this, n(3))
        },
        511: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccountSite
                }));
                var a = n(5),
                    r = n.n(a),
                    i = n(14),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(2),
                    u = n(1),
                    d = n(4),
                    m = n.n(d),
                    g = n(19),
                    f = n(27),
                    p = n(119),
                    b = m.a.useSelect,
                    y = m.a.useDispatch;

                function SetupAccountSite(t) {
                    var n, a = t.accountID,
                        i = t.site,
                        c = t.finishSetup,
                        s = i.autoAdsEnabled,
                        d = i.domain,
                        m = i.state,
                        v = y(f.b),
                        h = v.setSiteStatus,
                        E = v.completeSiteSetup,
                        A = v.completeAccountSetup,
                        S = b((function(e) {
                            return e(f.b).isDoingSubmitChanges()
                        })),
                        _ = Object(l.useCallback)(o()(r.a.mark((function e() {
                            var t, n;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!S) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, E();
                                    case 4:
                                        return t = e.sent, e.next = 7, A();
                                    case 7:
                                        n = e.sent, t && n && "function" == typeof c && c();
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [S, c, E, A]);
                    switch (Object(l.useEffect)((function() {
                        var e;
                        switch (m) {
                            case f.d:
                                e = p.k;
                                break;
                            case f.f:
                                e = p.o;
                                break;
                            case f.c:
                                e = p.j;
                                break;
                            case f.e:
                                e = s ? p.m : p.n
                        }
                        e && h(e)
                    }), [s, h, m]), m) {
                        case f.d:
                            n = "TODO: UI to inform that site ".concat(d, " (in account ").concat(a, ") needs attention");
                            break;
                        case f.f:
                            n = "TODO: UI to inform that site ".concat(d, " (in account ").concat(a, ") requires review");
                            break;
                        case f.c:
                            n = "TODO: UI to inform that site ".concat(d, " (in account ").concat(a, ") is getting ready");
                            break;
                        case f.e:
                            n = s ? "TODO: UI to inform that site ".concat(d, " (in account ").concat(a, ") is ready, with auto ads enabled") : "TODO: UI to inform that site ".concat(d, " (in account ").concat(a, ") is ready, with auto ads disabled")
                    }
                    return e.createElement("div", null, e.createElement("p", null, n), m === f.e && e.createElement("div", null, e.createElement(g.a, {
                        onClick: _,
                        disabled: S
                    }, Object(u.__)("Continue", "google-site-kit"))))
                }
                SetupAccountSite.propTypes = {
                    accountID: s.a.string.isRequired,
                    site: s.a.shape({
                        autoAdsEnabled: s.a.bool,
                        domain: s.a.string,
                        state: s.a.string
                    }).isRequired,
                    finishSetup: s.a.func
                }
            }).call(this, n(3))
        },
        512: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccountNoClient
                }));
                var a = n(0),
                    r = n.n(a);

                function SetupAccountNoClient(t) {
                    var n = t.accountID;
                    return e.createElement("div", null, "TODO: UI for lack of AFC client in account ", n)
                }
                SetupAccountNoClient.propTypes = {
                    accountID: r.a.string.isRequired
                }
            }).call(this, n(3))
        },
        513: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccountCreateSite
                }));
                var a = n(0),
                    r = n.n(a);

                function SetupAccountCreateSite(t) {
                    var n = t.accountID;
                    return e.createElement("div", null, "TODO: UI to create a new site in account ", n)
                }
                SetupAccountCreateSite.propTypes = {
                    accountID: r.a.string.isRequired
                }
            }).call(this, n(3))
        },
        514: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupAccountPendingTasks
                }));
                var a = n(0),
                    r = n.n(a);

                function SetupAccountPendingTasks(t) {
                    var n = t.accountID;
                    return e.createElement("div", null, "TODO: UI for pending tasks in account ", n)
                }
                SetupAccountPendingTasks.propTypes = {
                    accountID: r.a.string.isRequired
                }
            }).call(this, n(3))
        },
        515: function(e, t, n) {
            "use strict";
            (function(e) {
                function SetupCreateAccount() {
                    return e.createElement("div", null, "TODO: UI to create new account")
                }
                n.d(t, "a", (function() {
                    return SetupCreateAccount
                }))
            }).call(this, n(3))
        },
        516: function(e, t, n) {
            "use strict";
            (function(e) {
                function SetupSelectAccount() {
                    return e.createElement("div", null, "TODO: UI to select account")
                }
                n.d(t, "a", (function() {
                    return SetupSelectAccount
                }))
            }).call(this, n(3))
        },
        517: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsForm
                }));
                var a = n(1),
                    r = n(2),
                    i = n(4),
                    o = n.n(i),
                    c = n(27),
                    s = n(324),
                    l = n(150),
                    u = n(55),
                    d = n(502),
                    m = n(21),
                    g = n(15),
                    f = o.a.useSelect;

                function SettingsForm() {
                    var t, n, i = f((function(e) {
                            return e(g.c).isWebStoriesActive()
                        })),
                        o = f((function(e) {
                            return e(c.b).getClientID()
                        })),
                        p = f((function(e) {
                            return {
                                existingTag: e(c.b).getExistingTag(),
                                hasResolvedGetExistingTag: e(c.b).hasFinishedResolution("getExistingTag")
                            }
                        })),
                        b = p.existingTag;
                    if (!p.hasResolvedGetExistingTag) return e.createElement(u.a, null);
                    b && b === o ? n = t = Object(a.__)("You’ve already got an AdSense code on your site for this account, we recommend you use Site Kit to place code to get the most out of AdSense.", "google-site-kit") : b ? (t = Object(a.sprintf)(
                        /* translators: %s: account ID */
                        Object(a.__)("Site Kit detected AdSense code for a different account %s on your site. For a better ads experience, you should remove AdSense code that’s not linked to this AdSense account.", "google-site-kit"), Object(s.a)(b)), n = Object(a.__)("Please note that AdSense will not show ads on your website unless you’ve already placed the code.", "google-site-kit")) : n = Object(a.__)("Please note that AdSense will not show ads on your website unless you’ve already placed the code.", "google-site-kit");
                    return e.createElement("div", {
                        className: "googlesitekit-adsense-settings-fields"
                    }, e.createElement(l.d, null), e.createElement(l.e, {
                        checkedMessage: t,
                        uncheckedMessage: n
                    }), i && e.createElement(r.Fragment, null, e.createElement(d.a, null), e.createElement("p", null, Object(a.__)("This ad unit will be used for your Web Stories.", "google-site-kit"), " ", e.createElement(m.a, {
                        href: "https://support.google.com/adsense/answer/10175505#create-an-ad-unit-for-web-stories",
                        external: !0,
                        inherit: !0,
                        "aria-label": Object(a.__)("Learn more about Ad Sense Web Stories.", "google-site-kit")
                    }, Object(a.__)("Learn more", "google-site-kit")))), e.createElement(l.c, null))
                }
            }).call(this, n(3))
        },
        518: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return DashboardZeroData
                }));
                var a = n(1),
                    r = n(7),
                    i = n(411);

                function DashboardZeroData() {
                    return e.createElement(r.b, {
                        fill: !0
                    }, e.createElement(r.l, null, e.createElement(r.a, {
                        size: 12
                    }, e.createElement("h3", {
                        className: "googlesitekit-heading-4 googlesitekit-setup-module__title"
                    }, Object(a.__)("No ad impressions yet", "google-site-kit")), e.createElement("p", null, Object(a.__)("You don’t have any ad impressions yet. Make sure you’ve completed these steps in AdSense:", "google-site-kit")), e.createElement(i.a, null))))
                }
            }).call(this, n(3))
        },
        519: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(284),
                    o = n.n(i),
                    c = n(4),
                    s = n.n(c),
                    l = n(201),
                    u = n(329),
                    d = n(27),
                    m = n(13),
                    g = n(10),
                    f = n(190),
                    p = n(137),
                    b = n(418),
                    y = n(431),
                    v = n(750),
                    h = s.a.useSelect,
                    E = s.a.useInViewSelect;

                function ModuleTopEarningPagesWidget(t) {
                    var n, a, r, i = t.Widget,
                        c = t.WidgetReportZero,
                        s = t.WidgetReportError,
                        p = h((function(e) {
                            return e(m.a).getDateRangeDates({
                                offsetDays: d.a
                            })
                        })),
                        A = {
                            startDate: p.startDate,
                            endDate: p.endDate,
                            dimensions: ["ga:pagePath"],
                            metrics: [{
                                expression: "ga:adsenseRevenue",
                                alias: "Earnings"
                            }, {
                                expression: "ga:adsenseECPM",
                                alias: "Page RPM"
                            }, {
                                expression: "ga:adsensePageImpressions",
                                alias: "Impressions"
                            }],
                            orderby: {
                                fieldName: "ga:adsenseRevenue",
                                sortOrder: "DESCENDING"
                            },
                            limit: 10
                        },
                        S = h((function(e) {
                            return {
                                isAdSenseLinked: e(g.f).getAdsenseLinked(),
                                error: e(g.f).getErrorForSelector("getReport", [A])
                            }
                        })),
                        _ = S.isAdSenseLinked,
                        T = S.error,
                        O = E((function(e) {
                            return e(g.f).getReport(A)
                        })),
                        k = E((function(e) {
                            return e(g.f).getPageTitles(O, A)
                        })),
                        I = h((function(e) {
                            return !((void 0 !== T || void 0 !== k) && e(g.f).hasFinishedResolution("getReport", [A]))
                        }));
                    return _ ? I ? e.createElement(i, {
                        noPadding: !0,
                        Header: y.a
                    }, e.createElement(l.a, {
                        padding: !0
                    })) : T && !Object(b.a)(T) ? e.createElement(i, {
                        Header: y.a
                    }, e.createElement(s, {
                        error: T,
                        moduleSlug: "adsense"
                    })) : Object(f.a)(O) || Object(b.a)(T) ? e.createElement(i, {
                        Header: y.a
                    }, e.createElement(c, {
                        moduleSlug: "adsense"
                    })) : (((null == O || null === (n = O[0]) || void 0 === n || null === (a = n.data) || void 0 === a || null === (r = a.rows) || void 0 === r ? void 0 : r.length) ? o()(O[0].data.rows) : []).forEach((function(e) {
                        var t = e.dimensions[0];
                        e.dimensions.unshift(k[t])
                    })), e.createElement(i, {
                        noPadding: !0,
                        Header: y.a
                    }, e.createElement(v.a, {
                        report: O
                    }))) : e.createElement(i, {
                        Header: y.a
                    }, e.createElement(u.a, null))
                }
                ModuleTopEarningPagesWidget.propTypes = {
                    Widget: r.a.func.isRequired,
                    WidgetReportZero: r.a.func.isRequired,
                    WidgetReportError: r.a.func.isRequired
                }, t.a = Object(p.a)({
                    moduleName: "analytics"
                })(ModuleTopEarningPagesWidget)
            }).call(this, n(3))
        },
        54: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return b
            }));
            var a = n(6),
                r = n.n(a),
                i = n(29),
                o = n.n(i),
                c = n(9),
                s = n.n(c),
                l = n(78),
                u = n.n(l),
                d = n(11);

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t) {
                if (t && Array.isArray(t)) {
                    var n = t.map((function(e) {
                        return "object" === o()(e) ? Object(d.v)(e) : e
                    }));
                    return "".concat(e, "::").concat(u()(JSON.stringify(n)))
                }
                return e
            }
            var p = {
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
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return s()(n, "selectorName is required."), e.getError(t, n, a)
                    },
                    getErrorForAction: function(t, n) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return s()(n, "actionName is required."), e.getError(t, n, a)
                    },
                    getError: function(e, t, n) {
                        var a = e.error,
                            r = e.errors;
                        return t || n ? (s()(t, "baseName is required."), r[f(t, n)]) : a
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
                        var n = t.type,
                            a = t.payload;
                        switch (n) {
                            case "RECEIVE_ERROR":
                                var i = a.baseName,
                                    o = a.args,
                                    c = a.error;
                                return g(g({}, e), {}, i ? {
                                    errors: g(g({}, e.errors || {}), {}, r()({}, f(i, o), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var s = a.baseName,
                                    l = a.args,
                                    u = g({}, e);
                                if (s) {
                                    var d = f(s, l);
                                    u.errors = g({}, e.errors || {}), delete u.errors[d]
                                } else u.error = void 0;
                                return u;
                            case "CLEAR_ERRORS":
                                var m = a.baseName,
                                    p = g({}, e);
                                if (m)
                                    for (var b in p.errors = g({}, e.errors || {}), p.errors)(b === m || b.startsWith("".concat(m, "::"))) && delete p.errors[b];
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
        547: function(e, t, n) {
            "use strict";

            function a(e) {
                var t, n = null == e || null === (t = e.headers) || void 0 === t ? void 0 : t[0].currencyCode;
                return n ? {
                    style: "currency",
                    currency: n
                } : {
                    style: "decimal",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        55: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ProgressBar
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(8),
                    o = n.n(i);

                function ProgressBar(t) {
                    var n = t.className,
                        a = t.small,
                        r = t.compress,
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
                        className: o()("mdc-linear-progress", n, {
                            "mdc-linear-progress--indeterminate": i,
                            "mdc-linear-progress--small": a,
                            "mdc-linear-progress--compress": r
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
                    className: r.a.string,
                    small: r.a.bool,
                    compress: r.a.bool,
                    indeterminate: r.a.bool,
                    progress: r.a.number,
                    height: r.a.number
                }, ProgressBar.defaultProps = {
                    className: "",
                    small: !1,
                    compress: !1,
                    indeterminate: !0,
                    progress: 0
                }
            }).call(this, n(3))
        },
        56: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(16),
                    r = n.n(a),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(8),
                    u = n.n(l);

                function VisuallyHidden(t) {
                    var n = t.className,
                        a = t.children,
                        i = o()(t, ["className", "children"]);
                    return a ? e.createElement("span", r()({}, i, {
                        className: u()("screen-reader-text", n)
                    }), a) : null
                }
                VisuallyHidden.propTypes = {
                    className: s.a.string,
                    children: s.a.node
                }, VisuallyHidden.defaultProps = {
                    className: ""
                }, t.a = VisuallyHidden
            }).call(this, n(3))
        },
        567: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(2),
                    r = n(1),
                    i = n(27),
                    o = n(13),
                    c = n(39),
                    s = n(417),
                    l = n(234),
                    u = n(282),
                    d = n(4),
                    m = n.n(d).a.useSelect;
                t.a = function Header() {
                    var t = Object(c.a)("unifiedDashboard"),
                        n = m((function(e) {
                            return e(o.a).getDateRangeDates({
                                offsetDays: i.a
                            })
                        })),
                        d = m((function(e) {
                            return e(i.b).getServiceReportURL(Object(s.a)(n))
                        })),
                        g = m((function(e) {
                            return e(o.a).getDateRangeNumberOfDays()
                        }));
                    return e.createElement(a.Fragment, null, e.createElement(l.a, {
                        title: Object(r.sprintf)(
                            /* translators: %s: number of days */
                            Object(r._n)("Performance over the last %s day", "Performance over the last %s days", g, "google-site-kit"), g)
                    }), !t && e.createElement(u.a, {
                        href: d,
                        label: Object(r.sprintf)(
                            /* translators: %s: module name. */
                            Object(r.__)("See full stats in %s", "google-site-kit"), Object(r._x)("AdSense", "Service name", "google-site-kit"))
                    }))
                }
            }).call(this, n(3))
        },
        59: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "h", (function() {
                return d.a
            })), n.d(t, "d", (function() {
                return p
            })), n.d(t, "c", (function() {
                return y
            })), n.d(t, "i", (function() {
                return m
            }));
            var a = "Invalid dateString parameter, it must be a string.",
                r = 'Invalid date range, it must be a string with the format "last-x-days".',
                i = n(9),
                o = n.n(i),
                c = n(35),
                s = function(e) {
                    var t = new Date(e);
                    o()(Object(c.a)(t), "Date param must construct to a valid date instance or be a valid date instance itself.");
                    var n = "".concat(t.getMonth() + 1),
                        a = "".concat(t.getDate());
                    return [t.getFullYear(), n.length < 2 ? "0".concat(n) : n, a.length < 2 ? "0".concat(a) : a].join("-")
                },
                l = n(12),
                u = n.n(l),
                d = n(42),
                m = function(e) {
                    o()(Object(d.a)(e), a);
                    var t = e.split("-"),
                        n = u()(t, 3),
                        r = n[0],
                        i = n[1],
                        c = n[2];
                    return new Date(r, i - 1, c)
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = m(e);
                    return n.setDate(n.getDate() - t), s(n)
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e.split("-");
                    return 3 === t.length && "last" === t[0] && !Number.isNaN(t[1]) && !Number.isNaN(parseFloat(t[1])) && "days" === t[2]
                };

            function p(e) {
                var t = e.match(/last-(\d+)-days/);
                if (t && t[1]) return parseInt(t[1], 10);
                throw new Error("Unrecognized date range slug.")
            }
            var b = n(1);

            function y() {
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
        61: function(e, t, n) {
            "use strict";
            n.d(t, "n", (function() {
                return _
            })), n.d(t, "l", (function() {
                return T.a
            })), n.d(t, "d", (function() {
                return b
            })), n.d(t, "e", (function() {
                return y
            })), n.d(t, "j", (function() {
                return v
            })), n.d(t, "k", (function() {
                return h
            })), n.d(t, "i", (function() {
                return E
            })), n.d(t, "h", (function() {
                return A
            })), n.d(t, "g", (function() {
                return b
            })), n.d(t, "f", (function() {
                return S
            })), n.d(t, "c", (function() {
                return O
            })), n.d(t, "m", (function() {
                return j
            })), n.d(t, "b", (function() {
                return C
            })), n.d(t, "a", (function() {
                return w
            }));
            var a = n(23),
                r = n.n(a),
                i = n(26),
                o = n(8),
                c = n.n(o),
                s = n(1),
                l = n(72),
                u = n(196),
                d = n(11),
                m = n(140),
                g = n(12),
                f = n.n(g),
                p = n(10),
                b = function(e) {
                    return (parseInt(e, 10) || 0) > 0
                };

            function y(e) {
                return e === p.a || b(e)
            }

            function v(e) {
                return "string" == typeof e && /^UA-\d+-\d+$/.test(e)
            }

            function h(e) {
                return e === p.h || v(e)
            }

            function E(e) {
                return e === p.g || b(e)
            }

            function A(e) {
                return "string" == typeof e && e.trim().length > 0
            }

            function S(e) {
                return "string" == typeof e && /^AW-[0-9]+$/.test(e)
            }

            function _(e) {
                if (!v(e)) return !1;
                var t = e.match(/^UA-(\d+)-(\d+)/),
                    n = f()(t, 3);
                return {
                    accountID: n[1],
                    propertyID: e,
                    number: n[2]
                }
            }
            var T = n(190);

            function O(e, t) {
                for (var n = 1; n < e.length; n++) {
                    var a, r;
                    if (null === (a = e[n]) || void 0 === a || null === (r = a[t]) || void 0 === r ? void 0 : r[0]) return "HH:mm:ss"
                }
                return "mm:ss"
            }
            var k = n(50);

            function I(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return N(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return N(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var a = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[a++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: r
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

            function N(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function j(e, t) {
                var n, a = (Array.isArray(t) ? t : [t]).map(k.d),
                    r = I(e);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var i = n.value,
                            o = i.websiteUrl;
                        if (o) {
                            var c, s = I(a);
                            try {
                                for (s.s(); !(c = s.n()).done;) {
                                    if (c.value === Object(k.d)(o)) return i
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                        }
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return null
            }

            function C(e) {
                var t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = a.keyColumnIndex,
                    i = void 0 === r ? 0 : r,
                    o = a.maxSlices,
                    c = a.withOthers,
                    l = void 0 !== c && c,
                    u = a.tooltipCallback,
                    d = (null == e ? void 0 : e[0]) || {},
                    m = d.data,
                    g = void 0 === m ? {} : m,
                    f = g.rows,
                    p = void 0 === f ? [] : f,
                    b = g.totals,
                    y = void 0 === b ? [] : b,
                    v = "function" == typeof u,
                    h = ["Source", "Percent"];
                v && h.push({
                    type: "string",
                    role: "tooltip",
                    p: {
                        html: !0
                    }
                });
                var E = (null == y || null === (t = y[0]) || void 0 === t || null === (n = t.values) || void 0 === n ? void 0 : n[i]) || 0,
                    A = [h],
                    S = l,
                    _ = p.length,
                    T = 1;
                o > 0 ? (S = l && p.length > o, _ = Math.min(p.length, S ? o - 1 : o)) : (S = !1, _ = p.length);
                for (var O = 0; O < _; O++) {
                    var k = p[O],
                        I = k.metrics[0].values[i],
                        N = E > 0 ? I / E : 0;
                    T -= N;
                    var j = [k.dimensions[0], N];
                    v && j.push(u(k, j)), A.push(j)
                }
                if (S && T > 0) {
                    var C = [Object(s.__)("Others", "google-site-kit"), T];
                    v && C.push(u(null, C)), A.push(C)
                }
                return A
            }

            function D(e, t, n) {
                var a = [];
                return Object(i.each)(e, (function(e) {
                    if (e.metrics) {
                        var r = e.metrics[t].values,
                            i = e.dimensions[0],
                            o = Object(u.a)(i);
                        a.push([o, r[n]])
                    }
                })), a
            }

            function w(e, t, n) {
                var a, o, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    g = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [Object(s.__)("Users", "google-site-kit"), Object(s.__)("Sessions", "google-site-kit"), Object(s.__)("Bounce Rate %", "google-site-kit"), Object(s.__)("Session Duration", "google-site-kit")],
                    p = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [function(e) {
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
                if (!Array.isArray(null === (a = e[0]) || void 0 === a || null === (o = a.data) || void 0 === o ? void 0 : o.rows)) return !1;
                var b = r()(e[0].data.rows),
                    y = b.length;
                if (2 * n > y) {
                    for (var v = new Date, h = 0; n > h; h++) {
                        var E = (v.getMonth() + 1).toString(),
                            A = v.getDate().toString(),
                            S = v.getFullYear().toString() + (2 > E.length ? "0" : "") + E + (2 > A.length ? "0" : "") + A;
                        if (h > y) {
                            var _ = {
                                dimensions: [S],
                                metrics: [{
                                    values: [0, 0, 0, 0, 0]
                                }]
                            };
                            b.unshift(_)
                        }
                        v.setDate(v.getDate() - 1)
                    }
                    b.push([0, 0])
                }
                var T = f[t] === Object(s.__)("Session Duration", "google-site-kit"),
                    O = T ? "timeofday" : "number",
                    k = [
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
                            type: O,
                            label: f[t]
                        }, {
                            type: O,
                            label: Object(s.__)("Previous period", "google-site-kit")
                        }]
                    ],
                    I = Object(m.a)(b, {
                        dateRangeLength: n
                    }),
                    N = I.compareRange,
                    j = I.currentRange,
                    C = D(j, u, t),
                    w = D(N, g, t),
                    R = Object(l.a)(),
                    P = {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    };
                return Object(i.each)(C, (function(e, n) {
                    if (e[0] && e[1] && w[n]) {
                        var a = parseFloat(w[n][1]),
                            r = Object(d.b)(e[1], a),
                            i = Object(d.h)(r),
                            o = Object(s.sprintf)(
                                /* translators: 1: date for user stats, 2: previous date for user stats comparison */
                                Object(s._x)("%1$s vs %2$s", "Date range for chart tooltip", "google-site-kit"), e[0].toLocaleDateString(R, P), w[n][0].toLocaleDateString(R, P)),
                            l = Object(s.sprintf)(
                                /* translators: 1: selected stat label, 2: numeric value of selected stat, 3: up or down arrow , 4: different change in percentage */
                                Object(s._x)("%1$s: <strong>%2$s</strong> <em>%3$s %4$s</em>", "Stat information for chart tooltip", "google-site-kit"), f[t], p[t](e[1]), i, Object(d.r)(Math.abs(r), "%"));
                        k.push([e[0], '<div class="'.concat(c()("googlesitekit-visualization-tooltip", {
                            "googlesitekit-visualization-tooltip--up": r > 0,
                            "googlesitekit-visualization-tooltip--down": r < 0
                        }), '">\n\t\t\t\t<p>').concat(o, "</p>\n\t\t\t\t<p>").concat(l, "</p>\n\t\t\t</div>"), T ? Object(d.d)(e[1]) : e[1], T ? Object(d.d)(w[n][1]) : w[n][1]])
                    }
                })), k
            }
        },
        62: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(8),
                    o = n.n(i);

                function ChangeArrow(t) {
                    var n = t.direction,
                        a = t.invertColor,
                        r = t.width,
                        i = t.height;
                    return e.createElement("svg", {
                        className: o()("googlesitekit-change-arrow", "googlesitekit-change-arrow--".concat(n), {
                            "googlesitekit-change-arrow--inverted-color": a
                        }),
                        width: r,
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
                    direction: r.a.string,
                    invertColor: r.a.bool,
                    width: r.a.number,
                    height: r.a.number
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
            var a = n(29),
                r = n.n(a),
                i = n(69),
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        __html: i.a.sanitize(e, t)
                    }
                };

            function c(e) {
                var t, n = "object" === r()(e) ? e.toString() : e;
                return null == n || null === (t = n.replace) || void 0 === t ? void 0 : t.call(n, /\/+$/, "")
            }
        },
        64: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n(2),
                r = function(e) {
                    return function(t) {
                        return function FilteredComponent(n) {
                            return Object(a.createElement)(a.Fragment, {}, "", Object(a.createElement)(t, n), e)
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
                var a = n(6),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i),
                    c = n(8),
                    s = n.n(c),
                    l = n(1),
                    u = {
                        DEFAULT: "default",
                        OVERLAY: "overlay",
                        SMALL: "small",
                        LARGE: "large"
                    };

                function GatheringDataNotice(t) {
                    var n = t.style;
                    return e.createElement("div", {
                        className: s()("googlesitekit-gathering-data-notice", r()({}, "googlesitekit-gathering-data-notice--has-style-".concat(n), !!n))
                    }, e.createElement("span", null, Object(l.__)("Gathering data…", "google-site-kit")))
                }
                GatheringDataNotice.propTypes = {
                    style: o.a.oneOf(Object.values(u))
                }, t.b = GatheringDataNotice
            }).call(this, n(3))
        },
        655: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AccountSelect
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(7),
                    s = n(11),
                    l = n(55),
                    u = n(20),
                    d = n(27),
                    m = o.a.useSelect,
                    g = o.a.useDispatch;

                function AccountSelect() {
                    var t = Object(a.useContext)(u.b),
                        n = "".concat(t, "_adsense"),
                        i = m((function(e) {
                            return e(d.b).getAccountID()
                        })),
                        o = m((function(e) {
                            return {
                                accounts: e(d.b).getAccounts(),
                                hasResolvedAccounts: e(d.b).hasFinishedResolution("getAccounts")
                            }
                        })),
                        f = o.accounts,
                        p = o.hasResolvedAccounts,
                        b = g(d.b).setAccountID,
                        y = Object(a.useCallback)((function(e, t) {
                            var a = t.dataset.value;
                            i !== a && (b(a), Object(s.w)(n, "change_account"))
                        }), [i, n, b]);
                    return p ? e.createElement(c.m, {
                        className: "googlesitekit-adsense__select-account",
                        label: Object(r.__)("Account", "google-site-kit"),
                        value: i,
                        onEnhancedChange: y,
                        enhanced: !0,
                        outlined: !0
                    }, (f || []).map((function(t, n) {
                        var a = t._id,
                            r = t.displayName;
                        return e.createElement(c.k, {
                            key: n,
                            value: a
                        }, r)
                    }))) : e.createElement(l.a, {
                        small: !0
                    })
                }
            }).call(this, n(3))
        },
        656: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ErrorNotices
                }));
                var a = n(2),
                    r = n(27),
                    i = n(119),
                    o = n(112);

                function ErrorNotices() {
                    var t = Object(a.useCallback)((function(e) {
                        return void 0 === Object(i.t)(e)
                    }), []);
                    return e.createElement(o.a, {
                        moduleSlug: "adsense",
                        storeName: r.b,
                        shouldDisplayError: t
                    })
                }
            }).call(this, n(3))
        },
        657: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return UserProfile
                }));
                var a = n(4),
                    r = n.n(a),
                    i = n(55),
                    o = n(13),
                    c = r.a.useSelect;

                function UserProfile() {
                    var t = c((function(e) {
                            return e(o.a).getEmail()
                        })),
                        n = c((function(e) {
                            return e(o.a).getPicture()
                        }));
                    return c((function(e) {
                        return e(o.a).hasFinishedResolution("getUser")
                    })) ? e.createElement("p", {
                        className: "googlesitekit-setup-module__user"
                    }, e.createElement("img", {
                        className: "googlesitekit-setup-module__user-image",
                        src: n,
                        alt: ""
                    }), e.createElement("span", {
                        className: "googlesitekit-setup-module__user-email"
                    }, t)) : e.createElement(i.a, {
                        small: !0
                    })
                }
            }).call(this, n(3))
        },
        658: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return UseSnippetSwitch
                }));
                var a = n(5),
                    r = n.n(a),
                    i = n(14),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(400),
                    u = n(2),
                    d = n(1),
                    m = n(4),
                    g = n.n(m),
                    f = n(129),
                    p = n(203),
                    b = n(20),
                    y = n(11),
                    v = n(27),
                    h = g.a.useSelect,
                    E = g.a.useDispatch;

                function UseSnippetSwitch(t) {
                    var n = t.label,
                        a = void 0 === n ? Object(d.__)("Let Site Kit place AdSense code on your site", "google-site-kit") : n,
                        i = t.checkedMessage,
                        c = t.uncheckedMessage,
                        s = t.saveOnChange,
                        m = Object(u.useContext)(b.b),
                        g = "".concat(m, "_adsense"),
                        A = h((function(e) {
                            return e(v.b).getUseSnippet()
                        })),
                        S = h((function(e) {
                            return e(v.b).isDoingSubmitChanges()
                        })),
                        _ = E(v.b),
                        T = _.setUseSnippet,
                        O = _.saveSettings,
                        k = Object(u.useCallback)(o()(r.a.mark((function e() {
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (T(!A), !s) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, O();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [A, s, T, O]);
                    return Object(l.a)((function() {
                        Object(y.w)(g, A ? "enable_tag" : "disable_tag")
                    }), [g, A]), void 0 === A ? null : e.createElement(u.Fragment, null, e.createElement("div", {
                        className: "googlesitekit-setup-module__switch"
                    }, e.createElement(f.a, {
                        label: a,
                        onClick: k,
                        checked: A,
                        disabled: S,
                        hideLabel: !1
                    }), " ", e.createElement("span", {
                        className: "googlesitekit-recommended"
                    }, Object(d.__)("Recommended", "google-site-kit"))), A && i && e.createElement(p.b, {
                        notice: i
                    }), !A && c && e.createElement(p.b, {
                        notice: c
                    }))
                }
                UseSnippetSwitch.propTypes = {
                    label: s.a.string,
                    checkedMessage: s.a.string,
                    uncheckedMessage: s.a.string,
                    saveOnChange: s.a.bool
                }, UseSnippetSwitch.defaultProps = {
                    saveOnChange: !1
                }
            }).call(this, n(3))
        },
        659: function(e, t, n) {
            "use strict";
            (function(e, a) {
                n.d(t, "a", (function() {
                    return SetupMain
                }));
                var r = n(5),
                    i = n.n(r),
                    o = n(14),
                    c = n.n(o),
                    s = n(12),
                    l = n.n(s),
                    u = n(0),
                    d = n.n(u),
                    m = n(2),
                    g = n(1),
                    f = n(4),
                    p = n.n(f),
                    b = n(379),
                    y = n(55),
                    v = n(81),
                    h = n(27),
                    E = n(15),
                    A = n(38),
                    S = n(119),
                    _ = n(11),
                    T = n(504),
                    O = n(508),
                    k = n(505),
                    I = n(507),
                    N = n(506),
                    j = n(500),
                    C = n(509),
                    D = n(445),
                    w = n(20),
                    R = n(150),
                    P = p.a.useSelect,
                    M = p.a.useDispatch;

                function SetupMain(t) {
                    var n = t.finishSetup,
                        r = Object(m.useContext)(w.b),
                        o = "".concat(r, "_adsense"),
                        s = P((function(e) {
                            return e(E.c).getReferenceSiteURL()
                        })),
                        u = P((function(e) {
                            return e(A.a).isNavigating()
                        })),
                        d = P((function(e) {
                            return e(h.b).getAccountID()
                        })),
                        f = P((function(e) {
                            return e(h.b).getClientID()
                        })),
                        p = P((function(e) {
                            return e(h.b).getAccountStatus()
                        })),
                        Z = P((function(e) {
                            return e(h.b).getSiteStatus()
                        })),
                        L = P((function(e) {
                            return e(h.b).getAccountSetupComplete()
                        })),
                        G = P((function(e) {
                            return e(h.b).getSiteSetupComplete()
                        })),
                        x = P((function(e) {
                            return e(h.b).isDoingSubmitChanges()
                        })),
                        U = P((function(e) {
                            return e(h.b).canSubmitChanges()
                        })),
                        B = P((function(e) {
                            return e(h.b).getAccounts()
                        })),
                        F = Object(S.p)({
                            accounts: B,
                            previousAccountID: d
                        }),
                        W = P((function(e) {
                            return e(h.b).getClients(F)
                        })),
                        H = Object(S.r)({
                            clients: W,
                            previousClientID: f
                        }),
                        q = P((function(e) {
                            return e(h.b).getAlerts(F)
                        })),
                        K = P((function(e) {
                            return e(h.b).getURLChannels(F, H)
                        })),
                        z = P((function(e) {
                            return e(h.b).getErrorForSelector("getURLChannels", [F, H])
                        })),
                        V = P((function(e) {
                            return e(h.b).getError("getAccounts", [])
                        })),
                        Y = P((function(e) {
                            return e(h.b).getError("getAlerts", [F])
                        })),
                        $ = P((function(e) {
                            return e(h.b).hasErrors()
                        })),
                        J = Object(S.q)({
                            accounts: B,
                            clients: W,
                            alerts: q,
                            urlChannels: K,
                            accountsError: V,
                            alertsError: Y,
                            urlChannelsError: z,
                            previousAccountID: d,
                            previousClientID: f
                        }),
                        Q = Object(S.s)({
                            urlChannels: K,
                            siteURL: s
                        }),
                        X = M(h.b),
                        ee = X.clearError,
                        te = X.setAccountID,
                        ne = X.setClientID,
                        ae = X.setAccountStatus,
                        re = X.setSiteStatus,
                        ie = X.setAccountSetupComplete,
                        oe = X.setSiteSetupComplete,
                        ce = X.setUseSnippet,
                        se = X.submitChanges,
                        le = X.resetAccounts,
                        ue = X.resetAlerts,
                        de = X.resetClients,
                        me = X.resetURLChannels,
                        ge = Object(m.useState)(!1),
                        fe = l()(ge, 2),
                        pe = fe[0],
                        be = fe[1];
                    Object(m.useEffect)((function() {
                        void 0 !== d && void 0 !== F && d !== F && (te(F), be(!0))
                    }), [d, F, te]), Object(m.useEffect)((function() {
                        void 0 !== f && void 0 !== H && f !== H && (ne(H), be(!0))
                    }), [f, H, ne]), Object(m.useEffect)((function() {
                        void 0 !== p && void 0 !== J && p !== J && (J !== S.a && (ie(!1), oe(!1), ce(!0)), ae(J), be(!0))
                    }), [p, J, ie, oe, ce, ae]), Object(m.useEffect)((function() {
                        void 0 !== Z && void 0 !== Q && Z !== Q && (Q !== S.i && oe(!1), re(Q), be(!0))
                    }), [Z, Q, oe, re]);
                    var ye = Object(m.useState)(!1),
                        ve = l()(ye, 2),
                        he = ve[0],
                        Ee = ve[1];
                    Object(m.useEffect)((function() {
                        pe && !he && U && (be(!1), c()(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return Ee(!0), e.next = 3, se();
                                    case 3:
                                        Ee(!1);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))())
                    }), [pe, he, U, se]);
                    var Ae = P((function(e) {
                        return e(h.b).isAdBlockerActive()
                    }));
                    Object(m.useEffect)((function() {
                        var t, n = 0,
                            a = function() {
                                t = e.setInterval((function() {
                                    n++
                                }), 1e3)
                            },
                            r = function() {
                                e.clearTimeout(t), n < 15 ? n = 0 : (n = 0, void 0 !== J && S.a !== J && (ee(), le(), ue(), de(), me()))
                            };
                        return e.addEventListener("focus", r), e.addEventListener("blur", a),
                            function() {
                                e.removeEventListener("focus", r), e.removeEventListener("blur", a), e.clearTimeout(t)
                            }
                    }), [J, ee, le, ue, de, me]);
                    var Se, _e = P((function(e) {
                        return e(h.b).getExistingTag()
                    }));
                    if (Object(m.useEffect)((function() {
                            void 0 !== J && Object(_.w)(o, "receive_account_status", J)
                        }), [o, J]), Object(m.useEffect)((function() {
                            void 0 !== Q && Object(_.w)(o, "receive_site_status", Q)
                        }), [o, Q]), void 0 === J && !$ || void 0 === _e || x && !he || u) Se = a.createElement(y.a, null);
                    else if (J === S.a && L)
                        if (void 0 === Q) Se = a.createElement(y.a, null);
                        else if (Q === S.i && G) Se = a.createElement(D.a, {
                        finishSetup: n
                    });
                    else switch (Q) {
                        case S.l:
                            Se = a.createElement(C.a, null);
                            break;
                        case S.i:
                            Se = a.createElement(D.a, {
                                finishSetup: n
                            });
                            break;
                        default:
                            Se = $ ? a.createElement(R.d, null) : a.createElement(v.a, {
                                message: Object(g.sprintf)(
                                    /* translators: %s: invalid site status identifier */
                                    Object(g.__)("Invalid site status: %s", "google-site-kit"), Q)
                            })
                    } else switch (J) {
                        case S.e:
                            Se = a.createElement(T.a, null);
                            break;
                        case S.d:
                            Se = a.createElement(O.a, null);
                            break;
                        case S.b:
                            Se = a.createElement(k.a, null);
                            break;
                        case S.c:
                        case S.g:
                            Se = a.createElement(I.a, null);
                            break;
                        case S.f:
                            Se = a.createElement(N.a, null);
                            break;
                        case S.a:
                            Se = a.createElement(j.a, null);
                            break;
                        default:
                            Se = $ ? a.createElement(R.d, null) : a.createElement(v.a, {
                                message: Object(g.sprintf)(
                                    /* translators: %s: invalid account status identifier */
                                    Object(g.__)("Invalid account status: %s", "google-site-kit"), J)
                            })
                    }
                    return a.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--adsense"
                    }, a.createElement("div", {
                        className: "googlesitekit-setup-module__step"
                    }, a.createElement("div", {
                        className: "googlesitekit-setup-module__logo"
                    }, a.createElement(b.a, {
                        width: "33",
                        height: "33"
                    })), a.createElement("h2", {
                        className: "googlesitekit-heading-3 googlesitekit-setup-module__title"
                    }, Object(g._x)("AdSense", "Service name", "google-site-kit"))), a.createElement("div", {
                        className: "googlesitekit-setup-module__step"
                    }, a.createElement(R.b, null), !Ae && Se))
                }
                SetupMain.propTypes = {
                    finishSetup: d.a.func
                }, SetupMain.defaultProps = {
                    finishSetup: function() {}
                }
            }).call(this, n(18), n(3))
        },
        660: function(e, t, n) {
            "use strict";
            (function(e) {
                n(2), n(1);
                var t = n(4),
                    a = n.n(t);
                n(27), n(324), n(150), a.a.useSelect, a.a.useDispatch
            }).call(this, n(3))
        },
        661: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsEdit
                }));
                var a = n(4),
                    r = n.n(a),
                    i = n(27),
                    o = n(517),
                    c = n(55),
                    s = r.a.useSelect;

                function SettingsEdit() {
                    var t;
                    return t = s((function(e) {
                        return e(i.b).isDoingSubmitChanges()
                    })) ? e.createElement(c.a, null) : e.createElement(o.a, null), e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--adsense"
                    }, t)
                }
            }).call(this, n(3))
        },
        662: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsSetupIncomplete
                }));
                var a = n(2),
                    r = n(130),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(21),
                    l = n(27),
                    u = n(119),
                    d = n(150),
                    m = c.a.useSelect;

                function SettingsSetupIncomplete() {
                    var t, n, o = m((function(e) {
                            return e(l.b).getAccountStatus()
                        })),
                        c = Object(u.u)(o),
                        g = m((function(e) {
                            return e(l.b).getAdminReauthURL()
                        }));
                    return c ? (
                        /* translators: %s: link with next step */
                        t = Object(i.__)("Site Kit has placed AdSense code on your site: %s", "google-site-kit"), n = Object(i.__)("check module page", "google-site-kit")) : (
                        /* translators: %s: link with next step */
                        t = Object(i.__)("Setup incomplete: %s", "google-site-kit"), n = Object(i.__)("continue module setup", "google-site-kit")), e.createElement(a.Fragment, null, e.createElement(d.b, null), Object(r.a)(Object(i.sprintf)(t, "<a>".concat(n, "</a>")), {
                        a: e.createElement(s.a, {
                            className: "googlesitekit-settings-module__edit-button",
                            href: g,
                            inherit: !0
                        })
                    }))
                }
            }).call(this, n(3))
        },
        663: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsView
                }));
                var a = n(1),
                    r = n(4),
                    i = n.n(r),
                    o = n(199),
                    c = n(21),
                    s = n(15),
                    l = n(326),
                    u = n(27),
                    d = n(119),
                    m = n(150),
                    g = i.a.useSelect;

                function SettingsView() {
                    var t, n, r = g((function(e) {
                            return e(u.b).getAccountID()
                        })),
                        i = g((function(e) {
                            return e(u.b).getClientID()
                        })),
                        f = g((function(e) {
                            return e(u.b).getAccountStatus()
                        })),
                        p = g((function(e) {
                            return e(u.b).getUseSnippet()
                        })),
                        b = g((function(e) {
                            return e(u.b).getExistingTag()
                        })),
                        y = g((function(e) {
                            return e(u.b).getServiceAccountManageSitesURL()
                        })),
                        v = g((function(e) {
                            return e(s.c).isWebStoriesActive()
                        })),
                        h = g((function(e) {
                            return e(u.b).getWebStoriesAdUnit()
                        })),
                        E = g((function(e) {
                            return e(u.b).getAutoAdsDisabled() || []
                        }));
                    switch (f) {
                        case d.a:
                            t = Object(a.__)("Your account has been approved", "google-site-kit");
                            break;
                        case d.g:
                        case d.c:
                            t = Object(a.__)("We’re getting your site ready for ads. This usually takes less than a day, but it can sometimes take a bit longer", "google-site-kit");
                            break;
                        case d.f:
                        case d.b:
                            t = Object(a.__)("You need to fix some issues before your account is approved. Go to AdSense to find out how to fix it", "google-site-kit");
                            break;
                        default:
                            t = Object(a.__)("Your site isn’t ready to show ads yet", "google-site-kit")
                    }
                    n = p ? Object(a.__)("The AdSense code has been placed on your site", "google-site-kit") : b && b === i ? Object(a.__)("The AdSense code has been placed by another plugin or theme", "google-site-kit") : Object(a.__)("The AdSense code has not been placed on your site", "google-site-kit");
                    var A = Object(a.__)("Ads are currently displayed for all visitors", "google-site-kit");
                    return E.includes(l.b) && E.includes(l.a) ? A = Object(a.__)("All logged-in users and users who can write posts", "google-site-kit") : E.includes(l.b) ? A = l.d[l.b] : E.includes(l.a) && (A = l.d[l.a]), e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--adsense"
                    }, e.createElement(m.d, null), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(a.__)("Publisher ID", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(o.a, {
                        value: r
                    }))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(a.__)("Account Status", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, t)), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(a.__)("Site Status", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(c.a, {
                        href: y,
                        className: "googlesitekit-settings-module__cta-button",
                        inherit: !0,
                        external: !0
                    }, Object(a.__)("Check your site status", "google-site-kit"))))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(a.__)("AdSense Code", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, n))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(a.__)("Excluded from ads", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, A))), v && e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(a.__)("Web Stories Ad Unit", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, !h && e.createElement("span", null, Object(a.__)("None", "google-site-kit")), h && e.createElement(o.a, {
                        value: h
                    }))))))
                }
            }).call(this, n(3))
        },
        664: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(6),
                    r = n.n(a),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(27),
                    l = n(13),
                    u = n(210),
                    d = n(339),
                    m = n(137),
                    g = n(7),
                    f = n(82),
                    p = n(74),
                    b = n(256),
                    y = n(417),
                    v = n(363);

                function h(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function E(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? h(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var A = c.a.useSelect,
                    S = c.a.useInViewSelect;
                t.a = Object(m.a)({
                    moduleName: "adsense"
                })((function DashboardSummaryWidget(t) {
                    var n, a, r, o, c, m, h, _, T, O = t.Widget,
                        k = t.WidgetReportZero,
                        I = t.WidgetReportError,
                        N = A((function(e) {
                            return e(l.a).getDateRangeDates({
                                offsetDays: s.a,
                                compare: !0
                            })
                        })),
                        j = N.startDate,
                        C = N.endDate,
                        D = {
                            startDate: N.compareStartDate,
                            endDate: N.compareEndDate,
                            metrics: ["ESTIMATED_EARNINGS", "PAGE_VIEWS_RPM", "IMPRESSIONS"]
                        },
                        w = {
                            startDate: j,
                            endDate: C,
                            metrics: ["ESTIMATED_EARNINGS", "PAGE_VIEWS_RPM", "IMPRESSIONS"]
                        },
                        R = E(E({}, w), {}, {
                            dimensions: ["DATE"]
                        }),
                        P = Object(y.a)({
                            startDate: j,
                            endDate: C
                        }),
                        M = A((function(e) {
                            return {
                                loading: !e(s.b).hasFinishedResolution("getReport", [w]) || !e(s.b).hasFinishedResolution("getReport", [D]) || !e(s.b).hasFinishedResolution("getReport", [R]),
                                error: e(s.b).getErrorForSelector("getReport", [w]) || e(s.b).getErrorForSelector("getReport", [D]) || e(s.b).getErrorForSelector("getReport", [R]),
                                rpmReportURL: e(s.b).getServiceReportURL(E(E({}, P), {}, {
                                    gm: "pageViewsRpm"
                                })),
                                earningsURL: e(s.b).getServiceReportURL(E(E({}, P), {}, {
                                    gm: "earnings"
                                })),
                                impressionsURL: e(s.b).getServiceReportURL(E(E({}, P), {}, {
                                    gm: "monetizableImpressions"
                                })),
                                isAdblockerActive: e(s.b).isAdBlockerActive()
                            }
                        })),
                        Z = M.error,
                        L = M.loading,
                        G = M.rpmReportURL,
                        x = M.earningsURL,
                        U = M.impressionsURL,
                        B = M.isAdblockerActive,
                        F = S((function(e) {
                            return e(s.b).getReport(w)
                        })),
                        W = S((function(e) {
                            return e(s.b).getReport(D)
                        })),
                        H = S((function(e) {
                            return e(s.b).getReport(R)
                        }));
                    if (B) return e.createElement(O, null, e.createElement(v.a, null));
                    if (L) return e.createElement(O, null, e.createElement(f.a, {
                        width: "100%",
                        height: "276px"
                    }));
                    if (Z) return e.createElement(O, null, e.createElement(I, {
                        moduleSlug: "adsense",
                        error: Z
                    }));
                    if (Object(u.d)(W) && Object(u.d)(F) && Object(u.d)(H)) return e.createElement(O, null, e.createElement(k, {
                        moduleSlug: "adsense"
                    }));
                    var q = Object(u.e)((null == H ? void 0 : H.rows) || []),
                        K = F.headers.find((function(e) {
                            return null !== e.currencyCode && 0 < e.currencyCode.length
                        })),
                        z = !!K && K.currencyCode;
                    return e.createElement(O, {
                        className: "googlesitekit-dashboard-adsense-stats",
                        noPadding: !0
                    }, e.createElement(g.b, null, e.createElement(g.l, null, e.createElement(g.a, {
                        size: 12
                    }, e.createElement(p.a, {
                        className: "overview-adsense-rpm",
                        title: Object(i.__)("Page RPM", "google-site-kit"),
                        datapoint: (null === (n = F.totals) || void 0 === n ? void 0 : n.cells[1].value) || 0,
                        datapointUnit: z,
                        change: (null === (a = F.totals) || void 0 === a ? void 0 : a.cells[1].value) || 0 - (null === (r = W.totals) || void 0 === r ? void 0 : r.cells[1].value) || 0,
                        changeDataUnit: z,
                        source: {
                            name: Object(i._x)("AdSense", "Service name", "google-site-kit"),
                            link: G,
                            external: !0
                        },
                        sparkline: H && e.createElement(b.a, {
                            data: Object(d.a)(q.dataMap, 2),
                            change: 1
                        }),
                        context: "compact"
                    })), e.createElement(g.a, {
                        size: 12
                    }, e.createElement(p.a, {
                        className: "overview-adsense-earnings",
                        title: Object(i.__)("Total Earnings", "google-site-kit"),
                        datapoint: (null === (o = F.totals) || void 0 === o ? void 0 : o.cells[0].value) || 0,
                        datapointUnit: z,
                        source: {
                            name: Object(i._x)("AdSense", "Service name", "google-site-kit"),
                            link: x,
                            external: !0
                        },
                        change: (null === (c = F.totals) || void 0 === c ? void 0 : c.cells[0].value) || 0 - (null === (m = W.totals) || void 0 === m ? void 0 : m.cells[0].value) || 0,
                        changeDataUnit: z,
                        sparkline: H && e.createElement(b.a, {
                            data: Object(d.a)(q.dataMap, 1),
                            change: 1
                        }),
                        context: "compact"
                    })), e.createElement(g.a, {
                        size: 12
                    }, e.createElement(p.a, {
                        className: "overview-adsense-impressions",
                        title: Object(i.__)("Ad Impressions", "google-site-kit"),
                        datapoint: (null === (h = F.totals) || void 0 === h ? void 0 : h.cells[2].value) || 0,
                        change: (null === (_ = F.totals) || void 0 === _ ? void 0 : _.cells[2].value) || 0 - (null === (T = W.totals) || void 0 === T ? void 0 : T.cells[2].value) || 0,
                        changeDataUnit: !0,
                        source: {
                            name: Object(i._x)("AdSense", "Service name", "google-site-kit"),
                            link: U,
                            external: !0
                        },
                        sparkline: H && e.createElement(b.a, {
                            data: Object(d.a)(q.dataMap, 3),
                            change: 1
                        }),
                        context: "compact"
                    })))))
                }))
            }).call(this, n(3))
        },
        670: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(12),
                    r = n.n(a),
                    i = n(1),
                    o = n(616),
                    c = n(4),
                    s = n.n(c),
                    l = n(10),
                    u = n(13),
                    d = n(27),
                    m = n(137),
                    g = n(201),
                    f = n(96),
                    p = n(61),
                    b = n(278),
                    y = n(245),
                    v = n(21),
                    h = n(363),
                    E = n(149),
                    A = n(92),
                    S = n(11),
                    _ = n(547),
                    T = n(39),
                    O = s.a.useSelect,
                    k = s.a.useInViewSelect;
                t.a = Object(o.a)(Object(m.a)({
                    moduleName: "adsense"
                }), Object(m.a)({
                    moduleName: "analytics"
                }))((function DashboardTopEarningPagesWidget(t) {
                    var n, a, o = t.Widget,
                        c = t.WidgetReportZero,
                        s = t.WidgetReportError,
                        m = Object(T.a)("zeroDataStates"),
                        I = k((function(e) {
                            return e(l.f).isGatheringData()
                        })),
                        N = O((function(e) {
                            return e(u.a).getDateRangeDates({
                                offsetDays: l.b
                            })
                        })),
                        j = N.startDate,
                        C = N.endDate,
                        D = {
                            startDate: j,
                            endDate: C,
                            dimensions: ["ga:pageTitle", "ga:pagePath"],
                            metrics: [{
                                expression: "ga:adsenseRevenue",
                                alias: "Earnings"
                            }, {
                                expression: "ga:adsenseECPM",
                                alias: "Page RPM"
                            }, {
                                expression: "ga:adsensePageImpressions",
                                alias: "Impressions"
                            }],
                            orderby: {
                                fieldName: "ga:adsenseRevenue",
                                sortOrder: "DESCENDING"
                            },
                            limit: 5
                        },
                        w = k((function(e) {
                            return e(l.f).getReport(D)
                        })),
                        R = k((function(e) {
                            return e(d.b).getReport({
                                startDate: j,
                                endDate: C,
                                metrics: "ESTIMATED_EARNINGS"
                            })
                        })),
                        P = O((function(e) {
                            return {
                                analyticsMainURL: e(l.f).getServiceReportURL("content-publisher-overview", Object(E.a)({
                                    startDate: j,
                                    endDate: C
                                })),
                                error: e(l.f).getErrorForSelector("getReport", [D]),
                                loading: !e(l.f).hasFinishedResolution("getReport", [D]),
                                isAdSenseLinked: e(l.f).getAdsenseLinked(),
                                isAdblockerActive: e(d.b).isAdBlockerActive()
                            }
                        })),
                        M = P.analyticsMainURL,
                        Z = P.error,
                        L = P.loading,
                        G = P.isAdSenseLinked,
                        x = P.isAdblockerActive,
                        U = Object(_.a)(R),
                        B = function Footer() {
                            return e.createElement(f.a, {
                                className: "googlesitekit-data-block__source",
                                name: Object(i._x)("Analytics", "Service name", "google-site-kit"),
                                href: M,
                                external: !0
                            })
                        };
                    if (x) return e.createElement(o, {
                        Footer: B
                    }, e.createElement(h.a, null));
                    if (L || void 0 === I) return e.createElement(o, {
                        noPadding: !0,
                        Footer: B
                    }, e.createElement(g.a, {
                        rows: 5,
                        padding: !0
                    }));
                    if (!G) return e.createElement(o, {
                        Footer: B
                    }, e.createElement(A.d, null));
                    if (Z) return e.createElement(o, {
                        Footer: B
                    }, e.createElement(s, {
                        moduleSlug: "analytics",
                        error: Z
                    }));
                    if (!m && I && Object(p.l)(w)) return e.createElement(o, {
                        Footer: B
                    }, e.createElement(c, {
                        moduleSlug: "analytics"
                    }));
                    var F = [{
                        title: Object(i.__)("Top Earning Pages", "google-site-kit"),
                        tooltip: Object(i.__)("Top Earning Pages", "google-site-kit"),
                        primary: !0,
                        Component: function Component(t) {
                            var n = t.row,
                                a = r()(n.dimensions, 2),
                                i = a[0],
                                o = a[1];
                            return e.createElement(v.a, {
                                href: o,
                                children: i,
                                external: !0,
                                inherit: !0
                            })
                        }
                    }, {
                        title: Object(i.__)("Earnings", "google-site-kit"),
                        tooltip: Object(i.__)("Earnings", "google-site-kit"),
                        field: "metrics.0.values.0",
                        Component: function Component(t) {
                            var n = t.fieldValue;
                            return e.createElement("span", null, Object(S.r)(n, U))
                        }
                    }];
                    return e.createElement(o, {
                        noPadding: !0,
                        Footer: B
                    }, e.createElement(b.a, null, e.createElement(y.a, {
                        rows: (null == w || null === (n = w[0]) || void 0 === n || null === (a = n.data) || void 0 === a ? void 0 : a.rows) || [],
                        columns: F,
                        zeroState: A.t,
                        gatheringData: I
                    })))
                }))
            }).call(this, n(3))
        },
        671: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(4),
                    o = n.n(i),
                    c = n(27),
                    s = n(363),
                    l = n(137),
                    u = o.a.useSelect;

                function AdBlockerWarningWidget(t) {
                    var n = t.Widget,
                        a = t.WidgetNull;
                    return u((function(e) {
                        return e(c.b).isAdBlockerActive()
                    })) ? e.createElement(n, {
                        noPadding: !0
                    }, e.createElement(s.a, null)) : e.createElement(a, null)
                }
                AdBlockerWarningWidget.propTypes = {
                    Widget: r.a.elementType.isRequired
                }, t.a = Object(l.a)({
                    moduleName: "adsense"
                })(AdBlockerWarningWidget)
            }).call(this, n(3))
        },
        672: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(4),
                    o = n.n(i),
                    c = n(503),
                    s = n(311),
                    l = n(13),
                    u = n(22),
                    d = o.a.useSelect;

                function AdSenseConnectCTAWidget(t) {
                    var n = t.Widget,
                        a = t.WidgetNull,
                        r = d((function(e) {
                            return e(u.a).isModuleConnected("adsense")
                        })),
                        i = d((function(e) {
                            return e(l.a).isItemDismissed(s.a)
                        }));
                    return r || i ? e.createElement(a, null) : e.createElement(n, {
                        noPadding: !0
                    }, e.createElement(c.a, null))
                }
                AdSenseConnectCTAWidget.propTypes = {
                    Widget: r.a.elementType.isRequired
                }, t.a = AdSenseConnectCTAWidget
            }).call(this, n(3))
        },
        673: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(16),
                    r = n.n(a),
                    i = n(6),
                    o = n.n(i),
                    c = n(12),
                    s = n.n(c),
                    l = n(0),
                    u = n.n(l),
                    d = n(2),
                    m = n(1),
                    g = n(27),
                    f = n(13),
                    p = n(39),
                    b = n(210),
                    y = n(518),
                    v = n(100),
                    h = n(82),
                    E = n(137),
                    A = n(567),
                    S = n(751),
                    _ = n(752),
                    T = n(753),
                    O = n(4),
                    k = n.n(O);

                function I(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function N(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? I(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var j = k.a.useSelect,
                    C = k.a.useInViewSelect,
                    D = function ModuleOverviewWidget(t) {
                        var n = t.Widget,
                            a = t.WidgetReportZero,
                            i = t.WidgetReportError,
                            o = Object(p.a)("unifiedDashboard"),
                            c = Object(d.useState)(0),
                            l = s()(c, 2),
                            u = l[0],
                            m = l[1],
                            E = j((function(e) {
                                return e(f.a).getDateRangeDates({
                                    compare: !0
                                })
                            })),
                            O = E.startDate,
                            k = E.endDate,
                            I = E.compareStartDate,
                            D = E.compareEndDate,
                            w = {
                                metrics: Object.keys(ModuleOverviewWidget.metrics),
                                startDate: O,
                                endDate: k
                            },
                            R = {
                                metrics: Object.keys(ModuleOverviewWidget.metrics),
                                startDate: I,
                                endDate: D
                            },
                            P = N(N({}, w), {}, {
                                dimensions: ["DATE"]
                            }),
                            M = N(N({}, R), {}, {
                                dimensions: ["DATE"]
                            }),
                            Z = C((function(e) {
                                return e(g.b).getReport(w)
                            })),
                            L = C((function(e) {
                                return e(g.b).getReport(R)
                            })),
                            G = C((function(e) {
                                return e(g.b).getReport(P)
                            })),
                            x = C((function(e) {
                                return e(g.b).getReport(M)
                            })),
                            U = j((function(e) {
                                return !(e(g.b).hasFinishedResolution("getReport", [w]) && e(g.b).hasFinishedResolution("getReport", [R]) && e(g.b).hasFinishedResolution("getReport", [P]) && e(g.b).hasFinishedResolution("getReport", [M]))
                            })),
                            B = j((function(e) {
                                return e(g.b).getErrorForSelector("getReport", [w]) || e(g.b).getErrorForSelector("getReport", [R]) || e(g.b).getErrorForSelector("getReport", [P]) || e(g.b).getErrorForSelector("getReport", [M])
                            })),
                            F = o ? {
                                Footer: S.a
                            } : {};
                        return U ? e.createElement(n, r()({
                            Header: A.a
                        }, F, {
                            noPadding: !0
                        }), e.createElement(h.a, {
                            width: "100%",
                            height: "190px",
                            padding: !0
                        }), e.createElement(h.a, {
                            width: "100%",
                            height: "270px",
                            padding: !0
                        })) : B ? e.createElement(n, r()({
                            Header: A.a
                        }, F), e.createElement(i, {
                            moduleSlug: "adsense",
                            error: B
                        })) : Object(b.d)(Z) || Object(b.d)(G) ? e.createElement(n, {
                            noPadding: !0
                        }, e.createElement(y.a, null), e.createElement("div", {
                            className: v.a
                        }, e.createElement(a, {
                            moduleSlug: "adsense"
                        }))) : e.createElement(n, r()({
                            noPadding: !0,
                            Header: A.a
                        }, F), e.createElement(_.a, {
                            metrics: ModuleOverviewWidget.metrics,
                            currentRangeData: Z,
                            previousRangeData: L,
                            selectedStats: u,
                            handleStatsSelection: m
                        }), e.createElement(T.a, {
                            metrics: ModuleOverviewWidget.metrics,
                            currentRangeData: G,
                            previousRangeData: x,
                            selectedStats: u
                        }))
                    };
                D.propTypes = {
                    Widget: u.a.elementType.isRequired,
                    WidgetReportZero: u.a.elementType.isRequired,
                    WidgetReportError: u.a.elementType.isRequired
                }, D.metrics = {
                    ESTIMATED_EARNINGS: Object(m.__)("Earnings", "google-site-kit"),
                    PAGE_VIEWS_RPM: Object(m.__)("Page RPM", "google-site-kit"),
                    IMPRESSIONS: Object(m.__)("Impressions", "google-site-kit"),
                    PAGE_VIEWS_CTR: Object(m.__)("Page CTR", "google-site-kit")
                }, t.a = Object(E.a)({
                    moduleName: "adsense"
                })(D)
            }).call(this, n(3))
        },
        69: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return r
                }));
                var a = n(118),
                    r = n.n(a)()(e)
            }).call(this, n(18))
        },
        7: function(e, t, n) {
            "use strict";
            var a = n(90),
                r = n.n(a);
            n.d(t, "n", (function() {
                return r.a
            })), n.d(t, "c", (function() {
                return a.HelperText
            })), n.d(t, "d", (function() {
                return a.Input
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
            var s = n(110),
                l = n.n(s);
            n.d(t, "m", (function() {
                return l.a
            })), n.d(t, "k", (function() {
                return s.Option
            }));
            var u = n(244);
            n.d(t, "j", (function() {
                return u.a
            }));
            var d = n(241);
            n.d(t, "e", (function() {
                return d.a
            }));
            var m = n(240);
            n.d(t, "g", (function() {
                return m.a
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
                    return A
                })), n.d(t, "d", (function() {
                    return _
                })), n.d(t, "b", (function() {
                    return T
                })), n.d(t, "a", (function() {
                    return O
                }));
                var a = n(12),
                    r = n.n(a),
                    i = n(29),
                    o = n.n(i),
                    c = n(6),
                    s = n.n(c),
                    l = n(17),
                    u = n.n(l),
                    d = n(26),
                    m = n(67),
                    g = n.n(m),
                    f = n(1);

                function p(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function b(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? p(Object(n), !0).forEach((function(t) {
                            s()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var y = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = v(e, t),
                            a = n.formatUnit,
                            r = n.formatDecimal;
                        try {
                            return a()
                        } catch (e) {
                            return r()
                        }
                    },
                    v = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = parseInt(e, 10), Number.isNaN(e) && (e = 0);
                        var n = Math.floor(e / 60 / 60),
                            a = Math.floor(e / 60 % 60),
                            r = Math.floor(e % 60);
                        return {
                            hours: n,
                            minutes: a,
                            seconds: r,
                            formatUnit: function() {
                                var i = t.unitDisplay,
                                    o = b(b({
                                        unitDisplay: void 0 === i ? "short" : i
                                    }, u()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? _(r, b(b({}, o), {}, {
                                    unit: "second"
                                })) : Object(f.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(f._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), r ? _(r, b(b({}, o), {}, {
                                        unit: "second"
                                    })) : "", a ? _(a, b(b({}, o), {}, {
                                        unit: "minute"
                                    })) : "", n ? _(n, b(b({}, o), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var t = Object(f.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(f.__)("%ds", "google-site-kit"), r);
                                if (0 === e) return t;
                                var i = Object(f.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(f.__)("%dm", "google-site-kit"), a),
                                    o = Object(f.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(f.__)("%dh", "google-site-kit"), n);
                                return Object(f.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(f._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), r ? t : "", a ? i : "", n ? o : "").trim()
                            }
                        }
                    },
                    h = function(e) {
                        return 1e6 <= e ? Math.round(e / 1e5) / 10 : 1e4 <= e ? Math.round(e / 1e3) : 1e3 <= e ? Math.round(e / 100) / 10 : e
                    },
                    E = function(e) {
                        var t = {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        };
                        return 1e6 <= e ? Object(f.sprintf)( // translators: %s: an abbreviated number in millions.
                            Object(f.__)("%sM", "google-site-kit"), _(h(e), e % 10 == 0 ? {} : t)) : 1e4 <= e ? Object(f.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(f.__)("%sK", "google-site-kit"), _(h(e))) : 1e3 <= e ? Object(f.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(f.__)("%sK", "google-site-kit"), _(h(e), e % 10 == 0 ? {} : t)) : _(e, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    A = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(d.isFinite)(e) ? e : Number(e), Object(d.isFinite)(e) || (console.warn("Invalid number", e, o()(e)), e = 0);
                        var n = {};
                        if ("%" === t) n = {
                            style: "percent",
                            maximumFractionDigits: 2
                        };
                        else {
                            if ("s" === t) return y(e, {
                                unitDisplay: "narrow"
                            });
                            t && "string" == typeof t ? n = {
                                style: "currency",
                                currency: t
                            } : Object(d.isPlainObject)(t) && (n = b({}, t))
                        }
                        var a = n,
                            r = a.style,
                            i = void 0 === r ? "metric" : r;
                        return "metric" === i ? E(e) : "duration" === i ? y(e, t) : _(e, n)
                    },
                    S = g()(console.warn),
                    _ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            a = void 0 === n ? O() : n,
                            i = u()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(a, i).format(e)
                        } catch (t) {
                            S("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(a), ", ").concat(JSON.stringify(i), " ).format( ").concat(o()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, s = ["signDisplay", "compactDisplay"], l = {}, d = 0, m = Object.entries(i); d < m.length; d++) {
                            var g = r()(m[d], 2),
                                f = g[0],
                                p = g[1];
                            c[f] && p === c[f] || (s.includes(f) || (l[f] = p))
                        }
                        try {
                            return new Intl.NumberFormat(a, l).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(a).format(e)
                        }
                    },
                    T = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            a = void 0 === n ? O() : n,
                            r = t.style,
                            i = void 0 === r ? "long" : r,
                            o = t.type,
                            c = void 0 === o ? "conjunction" : o;
                        if (Intl.ListFormat) {
                            var s = new Intl.ListFormat(a, {
                                style: i,
                                type: c
                            });
                            return s.format(e)
                        }
                        /* translators: used between list items, there is a space after the comma. */
                        var l = Object(f.__)(", ", "google-site-kit");
                        return e.join(l)
                    },
                    O = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            n = Object(d.get)(t, ["_googlesitekitLegacyData", "locale"]);
                        if (n) {
                            var a = n.match(/^(\w{2})?(_)?(\w{2})/);
                            if (a && a[0]) return a[0].replace(/_/g, "-")
                        }
                        return t.navigator.language
                    }
            }).call(this, n(18))
        },
        73: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return I
            })), n.d(t, "b", (function() {
                return N
            })), n.d(t, "c", (function() {
                return j
            })), n.d(t, "d", (function() {
                return D
            })), n.d(t, "e", (function() {
                return w
            })), n.d(t, "g", (function() {
                return P
            })), n.d(t, "f", (function() {
                return M
            }));
            var a, r = n(5),
                i = n.n(r),
                o = n(23),
                c = n.n(o),
                s = n(6),
                l = n.n(s),
                u = n(9),
                d = n.n(u),
                m = n(207),
                g = n.n(m),
                f = n(67),
                p = n.n(f),
                b = n(104);

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(n), !0).forEach((function(t) {
                        l()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var a = t.reduce((function(e, t) {
                            return v(v({}, e), t)
                        }), {}),
                        r = t.reduce((function(e, t) {
                            return [].concat(c()(e), c()(Object.keys(t)))
                        }), []),
                        i = C(r);
                    return d()(0 === i.length, "collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(i.join(", "), ". Check your data stores for duplicates.")), a
                },
                E = h,
                A = h,
                S = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var a, r = [].concat(t);
                    return "function" != typeof r[0] && (a = r.shift()),
                        function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return r.reduce((function(e, n) {
                                return n(e, t)
                            }), e)
                        }
                },
                _ = h,
                T = h,
                O = h,
                k = function(e) {
                    return e
                },
                I = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var a = O.apply(void 0, c()(t.map((function(e) {
                        return e.initialState || {}
                    }))));
                    return {
                        initialState: a,
                        controls: A.apply(void 0, c()(t.map((function(e) {
                            return e.controls || {}
                        })))),
                        actions: E.apply(void 0, c()(t.map((function(e) {
                            return e.actions || {}
                        })))),
                        reducer: S.apply(void 0, [a].concat(c()(t.map((function(e) {
                            return e.reducer || k
                        }))))),
                        resolvers: _.apply(void 0, c()(t.map((function(e) {
                            return e.resolvers || {}
                        })))),
                        selectors: T.apply(void 0, c()(t.map((function(e) {
                            return e.selectors || {}
                        }))))
                    }
                },
                N = {
                    getRegistry: function() {
                        return {
                            payload: {},
                            type: "GET_REGISTRY"
                        }
                    },
                    await: i.a.mark((function e(t) {
                        return i.a.wrap((function(e) {
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
                j = (a = {}, l()(a, "GET_REGISTRY", Object(b.d)((function(e) {
                    return function() {
                        return e
                    }
                }))), l()(a, "AWAIT", (function(e) {
                    return e.payload.value
                })), a),
                C = function(e) {
                    for (var t = [], n = {}, a = 0; a < e.length; a++) {
                        var r = e[a];
                        n[r] = n[r] >= 1 ? n[r] + 1 : 1, n[r] > 1 && t.push(r)
                    }
                    return t
                },
                D = {
                    actions: N,
                    controls: j,
                    reducer: k
                },
                w = function(e) {
                    return function(t) {
                        return R(e(t))
                    }
                },
                R = p()((function(e) {
                    return g()(e, (function(e, t) {
                        return function() {
                            var n = e.apply(void 0, arguments);
                            return d()(void 0 !== n, "".concat(t, "(...) is not resolved")), n
                        }
                    }))
                }));

            function P(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.negate,
                    a = void 0 !== n && n,
                    r = Object(b.e)((function(t) {
                        return function(n) {
                            var r = !a,
                                i = !!a;
                            try {
                                for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) c[s - 1] = arguments[s];
                                return e.apply(void 0, [t, n].concat(c)), r
                            } catch (e) {
                                return i
                            }
                        }
                    })),
                    i = Object(b.e)((function(t) {
                        return function(n) {
                            for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++) r[i - 1] = arguments[i];
                            e.apply(void 0, [t, n].concat(r))
                        }
                    }));
                return {
                    safeSelector: r,
                    dangerousSelector: i
                }
            }

            function M(e, t) {
                return d()("function" == typeof e, "a validator function is required."), d()("function" == typeof t, "an action creator function is required."), d()("Generator" !== e[Symbol.toStringTag] && "GeneratorFunction" !== e[Symbol.toStringTag], "an action’s validator function must not be a generator."),
                    function() {
                        return e.apply(void 0, arguments), t.apply(void 0, arguments)
                    }
            }
        },
        74: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(46),
                    r = n.n(a),
                    i = n(47),
                    o = n.n(i),
                    c = n(77),
                    s = n.n(c),
                    l = n(70),
                    u = n.n(l),
                    d = n(71),
                    m = n.n(d),
                    g = n(49),
                    f = n.n(g),
                    p = n(0),
                    b = n.n(p),
                    y = n(8),
                    v = n.n(y),
                    h = n(2),
                    E = n(1),
                    A = n(62),
                    S = n(96),
                    _ = n(65),
                    T = n(30),
                    O = n(11);

                function k(e) {
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
                        var n, a = f()(e);
                        if (t) {
                            var r = f()(this).constructor;
                            n = Reflect.construct(a, arguments, r)
                        } else n = a.apply(this, arguments);
                        return m()(this, n)
                    }
                }
                var I = function(t) {
                    u()(DataBlock, t);
                    var n = k(DataBlock);

                    function DataBlock(e) {
                        var t;
                        return r()(this, DataBlock), (t = n.call(this, e)).handleClick = t.handleClick.bind(s()(t)), t.handleKeyPress = t.handleKeyPress.bind(s()(t)), t
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
                                a = t.handleStatSelection;
                            "Enter" !== e.key && " " !== e.key || a(n)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                n = t.className,
                                a = t.title,
                                r = t.datapoint,
                                i = t.datapointUnit,
                                o = t.change,
                                c = t.changeDataUnit,
                                s = t.context,
                                l = t.period,
                                u = t.selected,
                                d = t.handleStatSelection,
                                m = t.source,
                                g = t.sparkline,
                                f = t.invertChangeColor,
                                p = t.gatheringData,
                                b = t.gatheringDataNoticeStyle,
                                y = "button" === s ? "button" : "",
                                k = g;
                            k && f && (k = Object(h.cloneElement)(g, {
                                invertChangeColor: f
                            }));
                            var I = o;
                            c && (I = "%" === c ? Object(O.r)(o, {
                                style: "percent",
                                signDisplay: "never",
                                maximumFractionDigits: 1
                            }) : Object(O.r)(o, c)), l && (I = Object(E.sprintf)(l, I));
                            var N = void 0 === r ? r : Object(O.r)(r, i || void 0),
                                j = Object(T.b)("zeroDataStates");
                            return e.createElement("div", {
                                className: v()("googlesitekit-data-block", n, "googlesitekit-data-block--".concat(s), {
                                    "googlesitekit-data-block--selected": u,
                                    "googlesitekit-data-block--is-gathering-data": p
                                }),
                                tabIndex: "button" !== s || p ? "-1" : "0",
                                role: d && y,
                                onClick: p ? void 0 : d && this.handleClick,
                                onKeyPress: p ? void 0 : d && this.handleKeyPress,
                                "aria-disabled": p || void 0,
                                "aria-label": d && a,
                                "aria-pressed": d && u
                            }, e.createElement("div", {
                                className: "googlesitekit-data-block__title-datapoint-wrapper"
                            }, e.createElement("h3", {
                                className: " googlesitekit-subheading-1 googlesitekit-data-block__title "
                            }, a), !p && e.createElement("div", {
                                className: "googlesitekit-data-block__datapoint"
                            }, N)), !p && e.createElement(h.Fragment, null, k && e.createElement("div", {
                                className: "googlesitekit-data-block__sparkline"
                            }, k), e.createElement("div", {
                                className: "googlesitekit-data-block__change-source-wrapper"
                            }, e.createElement("div", {
                                className: v()("googlesitekit-data-block__change", {
                                    "googlesitekit-data-block__change--no-change": !o
                                })
                            }, e.createElement(h.Fragment, null, !!o && e.createElement("span", {
                                className: "googlesitekit-data-block__arrow"
                            }, e.createElement(A.a, {
                                direction: 0 < parseFloat(o) ? "up" : "down",
                                invertColor: f
                            })), e.createElement("span", {
                                className: "googlesitekit-data-block__value"
                            }, I))), m && e.createElement(S.a, {
                                className: "googlesitekit-data-block__source",
                                name: m.name,
                                href: m.link,
                                external: null == m ? void 0 : m.external
                            }))), p && j && e.createElement(_.b, {
                                style: b
                            }))
                        }
                    }]), DataBlock
                }(h.Component);
                I.propTypes = {
                    stat: b.a.number,
                    onClick: b.a.func,
                    className: b.a.string,
                    title: b.a.string,
                    datapoint: b.a.oneOfType([b.a.string, b.a.number]),
                    datapointUnit: b.a.string,
                    change: b.a.oneOfType([b.a.string, b.a.number]),
                    changeDataUnit: b.a.oneOfType([b.a.string, b.a.bool]),
                    context: b.a.string,
                    period: b.a.string,
                    selected: b.a.bool,
                    handleStatSelection: b.a.func,
                    invertChangeColor: b.a.bool,
                    gatheringData: b.a.bool,
                    gatheringDataNoticeStyle: b.a.oneOf(Object.values(_.a))
                }, I.defaultProps = {
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
                }, t.a = I
            }).call(this, n(3))
        },
        750: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Table
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(12),
                    o = n.n(i),
                    c = n(1),
                    s = n(0),
                    l = n.n(s),
                    u = n(4),
                    d = n.n(u),
                    m = n(245),
                    g = n(278),
                    f = n(21),
                    p = n(10),
                    b = n(27),
                    y = n(13),
                    v = n(547),
                    h = n(11),
                    E = n(149),
                    A = n(92);

                function S(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }
                var _ = d.a.useSelect,
                    T = d.a.useInViewSelect;

                function Table(t) {
                    var n, a, i = t.report,
                        s = _((function(e) {
                            return e(y.a).getDateRangeDates({
                                offsetDays: p.b
                            })
                        })),
                        l = s.startDate,
                        u = s.endDate,
                        d = T((function(e) {
                            return e(b.b).getReport({
                                startDate: l,
                                endDate: u,
                                metrics: "ESTIMATED_EARNINGS"
                            })
                        })),
                        O = Object(v.a)(d),
                        k = [{
                            title: Object(c.__)("Page Title", "google-site-kit"),
                            description: Object(c.__)("Page Title", "google-site-kit"),
                            primary: !0,
                            Component: function Component(t) {
                                var n = t.row,
                                    a = o()(n.dimensions, 2),
                                    i = a[0],
                                    c = a[1],
                                    s = _((function(e) {
                                        return e(y.a).getDateRangeDates({
                                            offsetDays: p.b
                                        })
                                    })),
                                    l = _((function(e) {
                                        return e(p.f).getServiceReportURL("content-pages", function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? S(Object(n), !0).forEach((function(t) {
                                                    r()(e, t, n[t])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                }))
                                            }
                                            return e
                                        }({
                                            "explorer-table.plotKeys": "[]",
                                            "_r.drilldown": "analytics.pagePath:".concat(c)
                                        }, Object(E.a)(s)))
                                    }));
                                return e.createElement(f.a, {
                                    href: l,
                                    external: !0,
                                    inherit: !0
                                }, i)
                            }
                        }, {
                            title: Object(c.__)("Earnings", "google-site-kit"),
                            description: Object(c.__)("Earnings", "google-site-kit"),
                            field: "metrics.0.values.0",
                            Component: function Component(t) {
                                var n = t.fieldValue;
                                return e.createElement("span", null, Object(h.r)(n, O))
                            }
                        }, {
                            title: Object(c.__)("Page RPM", "google-site-kit"),
                            description: Object(c.__)("Page RPM", "google-site-kit"),
                            field: "metrics.0.values.1",
                            Component: function Component(t) {
                                var n = t.fieldValue;
                                return e.createElement("span", null, Object(h.r)(n, O))
                            }
                        }, {
                            title: Object(c.__)("Impressions", "google-site-kit"),
                            description: Object(c.__)("Impressions", "google-site-kit"),
                            field: "metrics.0.values.2",
                            hideOnMobile: !0,
                            Component: function Component(t) {
                                var n = t.fieldValue;
                                return e.createElement("span", null, Object(h.r)(n, {
                                    style: "decimal"
                                }))
                            }
                        }];
                    return e.createElement(g.a, null, e.createElement(m.a, {
                        rows: (null == i || null === (n = i[0]) || void 0 === n || null === (a = n.data) || void 0 === a ? void 0 : a.rows) || [],
                        columns: k,
                        zeroState: A.t
                    }))
                }
                Table.propTypes = {
                    report: l.a.arrayOf(l.a.object).isRequired
                }
            }).call(this, n(3))
        },
        751: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(1),
                    r = n(27),
                    i = n(13),
                    o = n(417),
                    c = n(96),
                    s = n(4),
                    l = n.n(s).a.useSelect;
                t.a = function Footer() {
                    var t = l((function(e) {
                            return e(i.a).getDateRangeDates({
                                offsetDays: r.a
                            })
                        })),
                        n = l((function(e) {
                            return e(r.b).getServiceReportURL(Object(o.a)(t))
                        }));
                    return e.createElement(c.a, {
                        href: n,
                        name: Object(a._x)("AdSense", "Service name", "google-site-kit"),
                        external: !0
                    })
                }
            }).call(this, n(3))
        },
        752: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(7),
                    o = n(11),
                    c = n(74),
                    s = function Overview(t) {
                        var n, a, r = t.metrics,
                            s = t.currentRangeData,
                            l = t.previousRangeData,
                            u = t.selectedStats,
                            d = t.handleStatsSelection,
                            m = s.totals,
                            g = s.headers,
                            f = l.totals,
                            p = {
                                smSize: 2,
                                mdSize: 2,
                                lgSize: 3
                            };
                        return e.createElement(i.b, null, e.createElement(i.l, null, e.createElement(i.a, p, e.createElement(c.a, {
                            stat: 0,
                            className: "googlesitekit-data-block--page-rpm googlesitekit-data-block--button-1",
                            title: r[g[0].name],
                            datapoint: (null == m ? void 0 : m.cells[0].value) || 0,
                            datapointUnit: null === (n = g[0]) || void 0 === n ? void 0 : n.currencyCode,
                            change: Object(o.a)((null == f ? void 0 : f.cells[0].value) || 0, (null == m ? void 0 : m.cells[0].value) || 0),
                            changeDataUnit: "%",
                            context: "button",
                            selected: 0 === u,
                            handleStatSelection: d
                        })), e.createElement(i.a, p, e.createElement(c.a, {
                            stat: 1,
                            className: "googlesitekit-data-block--page-rpm googlesitekit-data-block--button-2",
                            title: r[g[1].name],
                            datapoint: (null == m ? void 0 : m.cells[1].value) || 0,
                            datapointUnit: null === (a = g[1]) || void 0 === a ? void 0 : a.currencyCode,
                            change: Object(o.a)((null == f ? void 0 : f.cells[1].value) || 0, (null == m ? void 0 : m.cells[1].value) || 0),
                            changeDataUnit: "%",
                            context: "button",
                            selected: 1 === u,
                            handleStatSelection: d
                        })), e.createElement(i.a, p, e.createElement(c.a, {
                            stat: 2,
                            className: "googlesitekit-data-block--page-rpm googlesitekit-data-block--button-3",
                            title: r[g[2].name],
                            datapoint: (null == m ? void 0 : m.cells[2].value) || 0,
                            change: Object(o.a)((null == f ? void 0 : f.cells[2].value) || 0, (null == m ? void 0 : m.cells[2].value) || 0),
                            changeDataUnit: "%",
                            context: "button",
                            selected: 2 === u,
                            handleStatSelection: d
                        })), e.createElement(i.a, p, e.createElement(c.a, {
                            stat: 3,
                            className: "googlesitekit-data-block--impression googlesitekit-data-block--button-4",
                            title: r[g[3].name],
                            datapoint: (null == m ? void 0 : m.cells[3].value) || 0,
                            datapointUnit: "%",
                            change: Object(o.a)((null == f ? void 0 : f.cells[3].value) || 0, (null == m ? void 0 : m.cells[3].value) || 0),
                            changeDataUnit: "%",
                            context: "button",
                            selected: 3 === u,
                            handleStatSelection: d
                        }))))
                    };
                s.propTypes = {
                    metrics: r.a.object,
                    currentRangeData: r.a.object,
                    previousRangeData: r.a.object,
                    selectedStats: r.a.number.isRequired,
                    handleStatsSelection: r.a.func.isRequired
                }, t.a = s
            }).call(this, n(3))
        },
        753: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Stats
                }));
                var a = n(12),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i),
                    c = n(210),
                    s = n(7),
                    l = n(202);

                function Stats(t) {
                    var n = t.metrics,
                        a = t.currentRangeData,
                        i = t.previousRangeData,
                        o = t.selectedStats,
                        u = Object(c.a)(a, i, Object.values(n)[o], o + 1, a.headers[o + 1]),
                        d = ["#4285f4", "#27bcd4", "#1b9688", "#673ab7"],
                        m = {
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
                                ticks: u.slice(1).map((function(e) {
                                    return r()(e, 1)[0]
                                }))
                            },
                            vAxis: {
                                format: {
                                    METRIC_TALLY: void 0,
                                    METRIC_CURRENCY: "currency",
                                    METRIC_RATIO: "percent",
                                    METRIC_DECIMAL: "decimal",
                                    METRIC_MILLISECONDS: void 0
                                }[a.headers[o + 1].type],
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
                            },
                            series: {
                                0: {
                                    color: d[o],
                                    targetAxisIndex: 0
                                },
                                1: {
                                    color: d[o],
                                    targetAxisIndex: 0,
                                    lineDashStyle: [3, 3],
                                    lineWidth: 1
                                }
                            }
                        };
                    return Object(c.d)(a) && Object(c.d)(i) ? m.vAxis.viewWindow.max = 100 : m.vAxis.viewWindow.max = void 0, e.createElement(s.b, {
                        className: "googlesitekit-adsense-site-stats"
                    }, e.createElement(s.l, null, e.createElement(s.a, {
                        size: 12
                    }, e.createElement(l.a, {
                        chartType: "LineChart",
                        data: u,
                        loadingHeight: "270px",
                        loadingWidth: "100%",
                        options: m
                    }))))
                }
                Stats.propTypes = {
                    metrics: o.a.object,
                    currentRangeData: o.a.object,
                    previousRangeData: o.a.object,
                    selectedStats: o.a.number.isRequired
                }
            }).call(this, n(3))
        },
        76: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            }));
            var a = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                r = function(e) {
                    return e.replace(/([a-z0-9]{1})([A-Z]{1})/g, "$1_$2").toUpperCase()
                };

            function i(e) {
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
                    return l
                })), n.d(t, "c", (function() {
                    return d
                }));
                var a = n(12),
                    r = n.n(a),
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
                            var a = 0,
                                r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return a >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[a++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, o = !0,
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
                            s = !0, i = e
                        },
                        f: function() {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                    }
                }

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a
                }
                var s = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = null,
                            n = null,
                            a = document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),
                            r = document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");
                        if (a && r) return !1;
                        if (t = document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"), n = document.querySelector("#wp-admin-bar-google-site-kit .ab-item"), null === t && null === n) return !1;
                        var o = document.createElement("span");
                        o.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(e));
                        var c = document.createElement("span");
                        c.setAttribute("class", "plugin-count"), c.setAttribute("aria-hidden", "true"), c.textContent = e;
                        var s = document.createElement("span");
                        return s.setAttribute("class", "screen-reader-text"), s.textContent = Object(i.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(i._n)("%d notification", "%d notifications", e, "google-site-kit"), e), o.appendChild(c), o.appendChild(s), t && null === a && t.appendChild(o), n && null === r && n.appendChild(o), o
                    },
                    l = function() {
                        e.localStorage && e.localStorage.clear(), e.sessionStorage && e.sessionStorage.clear()
                    },
                    u = function(e) {
                        for (var t = location.search.substr(1).split("&"), n = {}, a = 0; a < t.length; a++) n[t[a].split("=")[0]] = decodeURIComponent(t[a].split("=")[1]);
                        return e ? n.hasOwnProperty(e) ? decodeURIComponent(n[e].replace(/\+/g, " ")) : "" : n
                    },
                    d = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                            n = new URL(t.href);
                        if (e) return n.searchParams && n.searchParams.get ? n.searchParams.get(e) : u(e);
                        var a, i = {},
                            c = o(n.searchParams.entries());
                        try {
                            for (c.s(); !(a = c.n()).done;) {
                                var s = r()(a.value, 2),
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
            }).call(this, n(18))
        },
        81: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(109),
                    o = n(1),
                    c = n(11);

                function ErrorText(t) {
                    var n = t.message,
                        a = t.reconnectURL;
                    if (!n) return null;
                    var r = Object(o.sprintf)(
                        /* translators: %s: Error message */
                        Object(o.__)("Error: %s", "google-site-kit"), n);
                    a && Object(i.a)(a) && (r = r + " " + Object(o.sprintf)(
                        /* translators: %s: Reconnect URL */
                        Object(o.__)('To fix this, <a href="%s">redo the plugin setup</a>.', "google-site-kit"), a));
                    return e.createElement("div", {
                        className: "googlesitekit-error-text"
                    }, e.createElement("p", {
                        dangerouslySetInnerHTML: Object(c.t)(r, {
                            ALLOWED_TAGS: ["a"],
                            ALLOWED_ATTR: ["href"]
                        })
                    }))
                }
                ErrorText.propTypes = {
                    message: r.a.string.isRequired,
                    reconnectURL: r.a.string
                }, ErrorText.defaultProps = {
                    reconnectURL: ""
                }, t.a = ErrorText
            }).call(this, n(3))
        },
        82: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(8),
                    o = n.n(i),
                    c = n(48);

                function PreviewBlock(t) {
                    var n = t.className,
                        a = t.width,
                        r = t.height,
                        i = t.shape,
                        s = t.padding,
                        l = t.smallWidth,
                        u = t.smallHeight,
                        d = t.tabletWidth,
                        m = t.tabletHeight,
                        g = t.desktopWidth,
                        f = t.desktopHeight,
                        p = Object(c.e)(),
                        b = a,
                        y = r;
                    return c.b === p && l && u && (b = l, y = u), c.c === p && d && m && (b = d, y = m), (c.d === p || c.a === p) && g && f && (b = g, y = f), e.createElement("div", {
                        className: o()("googlesitekit-preview-block", n, {
                            "googlesitekit-preview-block--padding": s
                        }),
                        style: {
                            width: b,
                            height: y
                        }
                    }, e.createElement("div", {
                        className: o()("googlesitekit-preview-block__wrapper", {
                            "googlesitekit-preview-block__wrapper--circle": "circular" === i
                        })
                    }))
                }
                PreviewBlock.propTypes = {
                    className: r.a.string,
                    width: r.a.string,
                    height: r.a.string,
                    shape: r.a.string,
                    padding: r.a.bool,
                    smallWidth: r.a.string,
                    smallHeight: r.a.string,
                    tabletWidth: r.a.string,
                    tabletHeight: r.a.string,
                    desktopWidth: r.a.string,
                    desktopHeight: r.a.string
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
        83: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(8),
                    o = n.n(i),
                    c = n(21),
                    s = function CTA(t) {
                        var n = t.title,
                            a = t.description,
                            r = t.ctaLink,
                            i = t.ctaLabel,
                            s = t.ctaLinkExternal,
                            l = t.error,
                            u = t.onClick,
                            d = t["aria-label"];
                        return e.createElement("div", {
                            className: o()("googlesitekit-cta", {
                                "googlesitekit-cta--error": l
                            })
                        }, n && e.createElement("h3", {
                            className: "googlesitekit-cta__title"
                        }, n), a && "string" == typeof a && e.createElement("p", {
                            className: "googlesitekit-cta__description"
                        }, a), a && "string" != typeof a && e.createElement("div", {
                            className: "googlesitekit-cta__description"
                        }, a), i && e.createElement(c.a, {
                            href: r,
                            onClick: u,
                            inverse: !l,
                            caps: !0,
                            arrow: !0,
                            "aria-label": d,
                            external: s,
                            hideExternalIndicator: s
                        }, i))
                    };
                s.propTypes = {
                    title: r.a.string.isRequired,
                    description: r.a.oneOfType([r.a.string, r.a.node]),
                    ctaLink: r.a.string,
                    ctaLinkExternal: r.a.bool,
                    ctaLabel: r.a.string,
                    "aria-label": r.a.string,
                    error: r.a.bool,
                    onClick: r.a.func
                }, s.defaultProps = {
                    title: "",
                    description: "",
                    ctaLink: "",
                    ctaLabel: "",
                    error: !1,
                    onClick: function() {}
                }, t.a = s
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
                var a = n(194),
                    r = n(62),
                    i = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Number.isNaN(Number(t))) return "";
                        var i = n.invertColor,
                            o = void 0 !== i && i;
                        return Object(a.a)(e.createElement(r.a, {
                            direction: t > 0 ? "up" : "down",
                            invertColor: o
                        }))
                    },
                    o = function(e) {
                        var t, n, a, r, i, o, c, s, l, u, d, m, g, f, p;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (n = t.data) || void 0 === n || null === (a = n.rows) || void 0 === a ? void 0 : a.length) || (null == e || null === (r = e[0]) || void 0 === r || null === (i = r.data) || void 0 === i || null === (o = i.rows) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (s = c.metrics) || void 0 === s || null === (l = s[0]) || void 0 === l || null === (u = l.values) || void 0 === u ? void 0 : u[0]) === (null == e || null === (d = e[0]) || void 0 === d || null === (m = d.data) || void 0 === m || null === (g = m.totals) || void 0 === g || null === (f = g[0]) || void 0 === f || null === (p = f.values) || void 0 === p ? void 0 : p[0])
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
                var a = n(6),
                    r = n.n(a),
                    i = n(87),
                    o = n(88);

                function c(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function s(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
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
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                        r = s(s({}, l), t);
                    r.referenceSiteURL && (r.referenceSiteURL = r.referenceSiteURL.toString().replace(/\/+$/, ""));
                    var c = Object(i.a)(r, n);
                    return {
                        enableTracking: function() {
                            r.trackingEnabled = !0
                        },
                        disableTracking: function() {
                            r.trackingEnabled = !1
                        },
                        initializeSnippet: c,
                        isTrackingEnabled: function() {
                            return !!r.trackingEnabled
                        },
                        trackEvent: Object(o.a)(r, n, c, a)
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
                var a = n(51),
                    r = n(28);

                function i(t, n) {
                    var i, o = Object(a.a)(n);
                    return function() {
                        var n = e.document;
                        if (void 0 === i && (i = !!n.querySelector("script[".concat(r.b, "]"))), !i) {
                            var a = n.createElement("script");
                            a.setAttribute(r.b, ""), a.async = !0, a.src = "https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID, "&l=").concat(r.a), n.head.appendChild(a), o("js", new Date), o("config", t.trackingID, {
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
                var a = n(5),
                    r = n.n(a),
                    i = n(6),
                    o = n.n(i),
                    c = n(14),
                    s = n.n(c),
                    l = n(51),
                    u = n(30);

                function d(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }

                function m(e) {
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

                function g(t, n, a, i) {
                    var o = Object(l.a)(n);
                    return function() {
                        var n = s()(r.a.mark((function n(c, s, l, d) {
                            var g, f, p, b, y, v, h, E, A, S;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (b = t.activeModules, y = t.referenceSiteURL, v = t.trackingEnabled, h = t.trackingID, E = t.userIDHash, v) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return a(), A = null !== (g = null === (f = e._googlesitekitUserData) || void 0 === f || null === (p = f.user) || void 0 === p ? void 0 : p.roles) && void 0 !== g ? g : [], S = {
                                            send_to: h,
                                            event_category: c,
                                            event_label: l,
                                            value: d,
                                            dimension1: y,
                                            dimension2: A.join(","),
                                            dimension3: E,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(u.a).join(","),
                                            dimension6: b.join(",")
                                        }, n.abrupt("return", new Promise((function(e) {
                                            var t, n, a = setTimeout((function() {
                                                    i.console.warn('Tracking event "'.concat(s, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                r = function() {
                                                    clearTimeout(a), e()
                                                };
                                            o("event", s, m(m({}, S), {}, {
                                                event_callback: r
                                            })), (null === (t = i._gaUserPrefs) || void 0 === t || null === (n = t.ioo) || void 0 === n ? void 0 : n.call(t)) && r()
                                        })));
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e, t, a, r) {
                            return n.apply(this, arguments)
                        }
                    }()
                }
            }).call(this, n(18))
        },
        89: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
                return c
            }));
            n(57);
            var a = "missing_required_scopes",
                r = "insufficientPermissions",
                i = "forbidden";

            function o(e) {
                return (null == e ? void 0 : e.code) === a
            }

            function c(e) {
                var t;
                return [r, i].includes(null == e || null === (t = e.data) || void 0 === t ? void 0 : t.reason)
            }
        },
        92: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a.a
            })), n.d(t, "b", (function() {
                return r.a
            })), n.d(t, "c", (function() {
                return i.a
            })), n.d(t, "e", (function() {
                return o.a
            })), n.d(t, "d", (function() {
                return c.a
            })), n.d(t, "f", (function() {
                return s.a
            })), n.d(t, "g", (function() {
                return l.a
            })), n.d(t, "h", (function() {
                return u.a
            })), n.d(t, "i", (function() {
                return d.a
            })), n.d(t, "j", (function() {
                return m.a
            })), n.d(t, "n", (function() {
                return g.a
            })), n.d(t, "l", (function() {
                return f.a
            })), n.d(t, "o", (function() {
                return p.a
            })), n.d(t, "p", (function() {
                return b.a
            })), n.d(t, "q", (function() {
                return y.a
            })), n.d(t, "r", (function() {
                return v.c
            })), n.d(t, "s", (function() {
                return h.a
            })), n.d(t, "k", (function() {
                return E.a
            })), n.d(t, "m", (function() {
                return A.a
            })), n.d(t, "t", (function() {
                return ZeroDataMessage
            }));
            var a = n(345),
                r = n(346),
                i = n(347),
                o = n(348),
                c = n(329),
                s = n(349),
                l = n(350),
                u = n(351),
                d = n(352),
                m = n(353),
                g = n(354),
                f = n(299),
                p = n(355),
                b = n(356),
                y = n(357),
                v = n(300),
                h = n(358),
                E = n(359),
                A = n(280),
                S = n(0),
                _ = n.n(S),
                T = n(1),
                O = n(4),
                k = n.n(O),
                I = n(15),
                N = k.a.useSelect;

            function ZeroDataMessage(e) {
                var t = e.skipPrefix,
                    n = N((function(e) {
                        return e(I.c).getCurrentEntityURL()
                    })) ? Object(T.__)("Your page hasn’t gotten any visitors yet", "google-site-kit") : Object(T.__)("Your site hasn’t gotten any visitors yet", "google-site-kit");
                return t ? n : Object(T.sprintf)(
                    /* translators: %s: message explaining why there is no data */
                    Object(T.__)("No data to display: %s", "google-site-kit"), n)
            }
            ZeroDataMessage.propTypes = {
                skipPrefix: _.a.bool
            }
        },
        93: function(e, t, n) {
            "use strict";
            var a = n(105);
            n.d(t, "a", (function() {
                return a.a
            }));
            var r = n(106);
            n.d(t, "c", (function() {
                return r.a
            }));
            var i = n(107);
            n.d(t, "b", (function() {
                return i.a
            }))
        },
        94: function(e, t, n) {
            "use strict";
            var a = n(2),
                r = n(30),
                i = Object(a.createContext)(r.a);
            t.a = i
        },
        96: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(8),
                    o = n.n(i),
                    c = n(130),
                    s = n(1),
                    l = n(21);

                function SourceLink(t) {
                    var n = t.name,
                        a = t.href,
                        r = t.className,
                        i = t.external;
                    return e.createElement("div", {
                        className: o()("googlesitekit-source-link", r)
                    }, Object(c.a)(Object(s.sprintf)(
                        /* translators: %s: source link */
                        Object(s.__)("Source: %s", "google-site-kit"), "<a>".concat(n, "</a>")), {
                        a: e.createElement(l.a, {
                            key: "link",
                            href: a,
                            external: i,
                            inherit: !0
                        })
                    }))
                }
                SourceLink.propTypes = {
                    name: r.a.string,
                    href: r.a.string,
                    className: r.a.string,
                    external: r.a.bool
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
            var a = n(12),
                r = n.n(a),
                i = n(297),
                o = n(0),
                c = n.n(o),
                s = n(2),
                l = n(111);

            function Portal(e) {
                var t = e.children,
                    n = e.slug,
                    a = Object(s.useState)(document.createElement("div")),
                    o = r()(a, 1)[0];
                return Object(i.a)((function() {
                    n && o.classList.add("googlesitekit-portal-".concat(n));
                    var e = document.querySelector(".googlesitekit-plugin") || document.body;
                    return e.appendChild(o),
                        function() {
                            return e.removeChild(o)
                        }
                })), Object(l.createPortal)(t, o)
            }
            Portal.propTypes = {
                slug: c.a.string,
                children: c.a.node
            }, Portal.defaultProps = {
                slug: "",
                children: null
            }, t.a = Portal
        }
    },
    [
        [1080, 1, 0]
    ]
]);
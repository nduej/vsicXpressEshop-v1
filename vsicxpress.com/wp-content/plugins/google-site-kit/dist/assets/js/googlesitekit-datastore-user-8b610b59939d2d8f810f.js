(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [14], {
        1: function(e, t) {
            e.exports = googlesitekit.i18n
        },
        10: function(e, t, r) {
            "use strict";
            r.d(t, "f", (function() {
                return n
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "h", (function() {
                return a
            })), r.d(t, "g", (function() {
                return o
            })), r.d(t, "d", (function() {
                return c
            })), r.d(t, "e", (function() {
                return u
            })), r.d(t, "k", (function() {
                return s
            })), r.d(t, "c", (function() {
                return l
            })), r.d(t, "b", (function() {
                return f
            })), r.d(t, "s", (function() {
                return d
            })), r.d(t, "r", (function() {
                return p
            })), r.d(t, "t", (function() {
                return g
            })), r.d(t, "p", (function() {
                return v
            })), r.d(t, "q", (function() {
                return b
            })), r.d(t, "n", (function() {
                return y
            })), r.d(t, "o", (function() {
                return m
            })), r.d(t, "l", (function() {
                return h
            })), r.d(t, "m", (function() {
                return O
            })), r.d(t, "j", (function() {
                return S
            })), r.d(t, "i", (function() {
                return E
            }));
            var n = "modules/analytics",
                i = "account_create",
                a = "property_create",
                o = "profile_create",
                c = "analyticsAccountCreate",
                u = "analyticsSetup",
                s = "https://www.googleapis.com/auth/analytics.provision",
                l = "https://www.googleapis.com/auth/analytics.edit",
                f = 1,
                d = "dashboardAllTrafficWidgetDimensionName",
                p = "dashboardAllTrafficWidgetDimensionColor",
                g = "dashboardAllTrafficWidgetDimensionValue",
                v = "dashboardAllTrafficWidgetActiveRowIndex",
                b = "dashboardAllTrafficWidgetLoaded",
                y = "legacy",
                m = "ua",
                h = "ga4",
                O = "ga4-transitional",
                S = "ua",
                E = "ga4"
        },
        1082: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(4),
                i = r.n(n),
                a = r(54),
                o = r(5),
                c = r.n(o),
                u = r(6),
                s = r.n(u),
                l = r(33),
                f = r.n(l),
                d = r(13),
                p = r(45);

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

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var b = i.a.createRegistrySelector;

            function y(e) {
                return b((function(t) {
                    return function() {
                        return (t(d.a).getAuthentication() || {})[e]
                    }
                }))
            }
            var m = Object(p.a)({
                    baseName: "getAuthentication",
                    controlCallback: function() {
                        return f.a.get("core", "user", "authentication", void 0, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t) {
                        return v(v({}, e), {}, {
                            authentication: t
                        })
                    }
                }),
                h = {
                    authentication: void 0,
                    authError: null
                },
                O = {
                    setAuthError: function(e) {
                        return {
                            payload: {
                                error: e
                            },
                            type: "SET_AUTH_ERROR"
                        }
                    },
                    clearAuthError: function() {
                        return {
                            payload: {},
                            type: "CLEAR_AUTH_ERROR"
                        }
                    }
                },
                S = {
                    getAuthentication: c.a.mark((function e() {
                        var t;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    if (t = e.sent, (0, t.select)(d.a).getAuthentication()) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, m.actions.fetchGetAuthentication();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                E = {
                    getAuthentication: function(e) {
                        return e.authentication
                    },
                    hasScope: b((function(e) {
                        return function(t, r) {
                            var n = e(d.a).getGrantedScopes(t);
                            if (void 0 !== n) return n.includes(r)
                        }
                    })),
                    isAuthenticated: y("authenticated"),
                    getGrantedScopes: y("grantedScopes"),
                    getRequiredScopes: y("requiredScopes"),
                    getUnsatisfiedScopes: y("unsatisfiedScopes"),
                    needsReauthentication: y("needsReauthentication"),
                    getDisconnectedReason: y("disconnectedReason"),
                    getConnectedProxyURL: y("connectedProxyURL"),
                    getPreviousConnectedProxyURL: y("previousConnectedProxyURL"),
                    getAuthError: function(e) {
                        return e.authError
                    }
                },
                _ = i.a.combineStores(m, {
                    initialState: h,
                    actions: O,
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "SET_AUTH_ERROR":
                                return v(v({}, e), {}, {
                                    authError: n.error
                                });
                            case "CLEAR_AUTH_ERROR":
                                return v(v({}, e), {}, {
                                    authError: null
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: S,
                    selectors: E
                }),
                w = (_.initialState, _.actions, _.controls, _.reducer, _.resolvers, _.selectors, _),
                j = r(9),
                k = r.n(j),
                I = r(59);

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

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var x = {
                dateRange: "last-28-days",
                referenceDate: Object(I.e)(new Date)
            };
            var R = {
                    getDateRange: function(e) {
                        return e.dateRange
                    },
                    getDateRangeDates: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.compare,
                            n = void 0 !== r && r,
                            i = t.offsetDays,
                            a = void 0 === i ? 0 : i,
                            o = t.referenceDate,
                            c = void 0 === o ? e.referenceDate : o,
                            u = R.getDateRange(e),
                            s = Object(I.f)(c, a),
                            l = u.match("-(.*)-"),
                            f = Number(l ? l[1] : 28),
                            d = Object(I.f)(s, f - 1),
                            p = {
                                startDate: d,
                                endDate: s
                            };
                        if (n) {
                            var g = Object(I.f)(d, 1),
                                v = Object(I.f)(g, f - 1);
                            p.compareStartDate = v, p.compareEndDate = g
                        }
                        return p
                    },
                    getDateRangeNumberOfDays: function(e) {
                        var t = R.getDateRange(e).match(/-(\d+)-/);
                        return parseInt(t ? t[1] : 28, 10)
                    },
                    getReferenceDate: function(e) {
                        return e.referenceDate
                    }
                },
                A = {
                    initialState: x,
                    actions: {
                        setDateRange: function(e) {
                            return k()(e, "Date range slug is required."), k()(Object(I.g)(e), I.a), {
                                type: "SET_DATE_RANGE",
                                payload: {
                                    slug: e
                                }
                            }
                        },
                        setReferenceDate: function(e) {
                            return k()(e, "Date string is required."), k()(Object(I.h)(e), I.b), {
                                type: "SET_REFERENCE_DATE",
                                payload: {
                                    dateString: e
                                }
                            }
                        }
                    },
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "SET_DATE_RANGE":
                                return D(D({}, e), {}, {
                                    dateRange: n.slug
                                });
                            case "SET_REFERENCE_DATE":
                                return D(D({}, e), {}, {
                                    referenceDate: n.dateString
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: {},
                    selectors: R
                };

            function P(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var N = i.a.createRegistrySelector,
                U = Object(p.a)({
                    baseName: "disconnect",
                    controlCallback: function() {
                        return f.a.set("core", "user", "disconnect")
                    },
                    reducerCallback: function(e, t) {
                        return C(C({}, e), {}, {
                            disconnected: t
                        })
                    }
                }),
                L = {
                    disconnected: void 0
                },
                q = {
                    disconnect: c.a.mark((function e() {
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, U.actions.fetchDisconnect();
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                V = {
                    isDoingDisconnect: N((function(e) {
                        return function() {
                            return e(d.a).isFetchingDisconnect()
                        }
                    }))
                },
                F = i.a.combineStores(U, {
                    initialState: L,
                    actions: q,
                    selectors: V
                }),
                M = (F.initialState, F.actions, F.controls, F.reducer, F.resolvers, F.selectors, F),
                G = r(73);

            function H(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var K = i.a.createRegistrySelector,
                $ = i.a.commonActions.getRegistry;

            function Y(e, t) {
                return B(B({}, e), {}, {
                    dismissedItems: Array.isArray(t) ? t : []
                })
            }
            var J, W, z = Object(p.a)({
                    baseName: "getDismissedItems",
                    controlCallback: function() {
                        return f.a.get("core", "user", "dismissed-items", {}, {
                            useCache: !1
                        })
                    },
                    reducerCallback: Y
                }),
                Q = Object(p.a)({
                    baseName: "dismissItem",
                    controlCallback: function(e) {
                        var t = e.slug,
                            r = e.expiresInSeconds;
                        return f.a.set("core", "user", "dismiss-item", {
                            slug: t,
                            expiration: r
                        })
                    },
                    reducerCallback: Y,
                    argsToParams: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return {
                            slug: e,
                            expiresInSeconds: t
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.slug,
                            r = e.expiresInSeconds;
                        k()(t, "slug is required."), k()(Number.isInteger(r), "expiresInSeconds must be an integer.")
                    }
                }),
                Z = {
                    dismissedItems: void 0
                },
                X = {
                    dismissItem: Object(G.f)((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.expiresInSeconds,
                            n = void 0 === r ? 0 : r;
                        k()(e, "A tour slug is required to dismiss a tour."), k()(Number.isInteger(n), "expiresInSeconds must be an integer.")
                    }), c.a.mark((function e(t) {
                        var r, n, i, a = arguments;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = a.length > 1 && void 0 !== a[1] ? a[1] : {}, n = r.expiresInSeconds, i = void 0 === n ? 0 : n, e.next = 4, Q.actions.fetchDismissItem(t, i);
                                case 4:
                                    return e.abrupt("return", e.sent);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                },
                ee = {
                    getDismissedItems: c.a.mark((function e() {
                        var t, r;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, $();
                                case 2:
                                    if (t = e.sent, r = t.select, void 0 !== r(d.a).getDismissedItems()) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, z.actions.fetchGetDismissedItems();
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                te = {
                    getDismissedItems: function(e) {
                        return e.dismissedItems
                    },
                    isItemDismissed: K((function(e) {
                        return function(t, r) {
                            var n;
                            return null === (n = e(d.a).getDismissedItems()) || void 0 === n ? void 0 : n.includes(r)
                        }
                    })),
                    isDismissingItem: K((function(e) {
                        return function(t, r) {
                            return e(d.a).isFetchingDismissItem(r)
                        }
                    }))
                },
                re = i.a.combineStores({
                    initialState: Z,
                    actions: X,
                    resolvers: ee,
                    selectors: te
                }, Q, z),
                ne = {
                    actions: re.actions,
                    controls: re.controls,
                    initialState: re.initialState,
                    reducer: re.reducer,
                    resolvers: re.resolvers,
                    selectors: re.selectors
                },
                ie = r(14),
                ae = r.n(ie),
                oe = r(725),
                ce = r.n(oe),
                ue = r(1),
                se = r(24),
                le = r(43),
                fe = r(22),
                de = r(10),
                pe = {
                    slug: "helpVisibility",
                    contexts: [se.g, se.i, se.l, se.m],
                    version: "1.29.0",
                    gaEventCategory: function(e) {
                        return "".concat(e, "_headerbar_helpmenu")
                    },
                    steps: [{
                        target: ".googlesitekit-help-menu",
                        title: Object(ue.__)("Need help?", "google-site-kit"),
                        content: Object(ue.__)("Access the Site Kit docs or ask a question in our support forum from here.", "google-site-kit"),
                        placement: "bottom-start"
                    }]
                },
                ge = r(726),
                ve = r(37),
                be = {
                    slug: "ideaHubPostsTable",
                    contexts: [se.n],
                    version: "1.43.0",
                    gaEventCategory: ve.n,
                    checkRequirements: (J = ae()(c.a.mark((function e(t) {
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (document.querySelector(".googlesitekit-idea-hub__post")) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return e.next = 4, t.__experimentalResolveSelect(fe.a).getModules();
                                case 4:
                                    return e.abrupt("return", t.select(fe.a).isModuleConnected("idea-hub"));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function(e) {
                        return J.apply(this, arguments)
                    }),
                    steps: [{
                        target: ".googlesitekit-idea-hub__post",
                        title: Object(ue.__)("Get started writing about your saved ideas", "google-site-kit"),
                        content: Object(ue.__)("Drafts you created from Idea Hub within Site Kit appear here for easy access.", "google-site-kit")
                    }]
                },
                ye = r(730),
                me = [{
                    slug: "allTrafficWidget",
                    contexts: [se.g, se.i],
                    version: "1.25.0",
                    gaEventCategory: function(e) {
                        return "".concat(e, "_all-traffic-widget")
                    },
                    checkRequirements: function() {
                        var e = ae()(c.a.mark((function e(t) {
                            return c.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.__experimentalResolveSelect(fe.a).getModules();
                                    case 2:
                                        if (t.select(fe.a).isModuleConnected("analytics")) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 4:
                                        return e.next = 6, new Promise((function(e) {
                                            setTimeout((function r() {
                                                t.select(le.b).getValue(de.q) ? e() : setTimeout(r, 250)
                                            }), 250)
                                        }));
                                    case 6:
                                        return e.abrupt("return", !0);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    steps: [{
                        target: ".googlesitekit-widget--analyticsAllTraffic__totals",
                        title: Object(ue.__)("It’s now easier to see your site’s traffic at a glance", "google-site-kit"),
                        content: Object(ue.__)("Check the trend graph to see how your traffic changed over time", "google-site-kit"),
                        placement: "top"
                    }, {
                        target: ".googlesitekit-widget--analyticsAllTraffic__dimensions",
                        title: Object(ue.__)("See where your visitors come from", "google-site-kit"),
                        content: Object(ue.__)("Click on the chart slices to see how each segment has changed over time", "google-site-kit"),
                        placement: "top"
                    }, {
                        target: ".googlesitekit-header__date-range-selector-menu",
                        title: Object(ue.__)("Check how your traffic changed since you last looked", "google-site-kit"),
                        content: Object(ue.__)("Select a time frame to see the comparison with the previous time period", "google-site-kit")
                    }]
                }, pe, ge.a, be, ye.a],
                he = r(40);

            function Oe(e, t) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return Se(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Se(e, t)
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
                var a, o = !0,
                    c = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        c = !0, a = e
                    },
                    f: function() {
                        try {
                            o || null == r.return || r.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function Se(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Ee(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function _e(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ee(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ee(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var we, je = i.a.createRegistrySelector,
                ke = i.a.createRegistryControl,
                Ie = i.a.commonActions.getRegistry,
                Te = Object(p.a)({
                    baseName: "getDismissedTours",
                    controlCallback: function() {
                        return f.a.get("core", "user", "dismissed-tours", {}, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t) {
                        return _e(_e({}, e), {}, {
                            dismissedTourSlugs: t
                        })
                    }
                }),
                De = Object(p.a)({
                    baseName: "dismissTour",
                    controlCallback: function(e) {
                        var t = e.slug;
                        return f.a.set("core", "user", "dismiss-tour", {
                            slug: t
                        })
                    },
                    reducerCallback: function(e, t) {
                        return _e(_e({}, e), {}, {
                            dismissedTourSlugs: t
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            slug: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.slug;
                        k()(t, "slug is required.")
                    }
                }),
                xe = {
                    lastDismissedAt: void 0,
                    dismissedTourSlugs: void 0,
                    tours: me,
                    viewTours: {}
                },
                Re = {
                    dismissTour: Object(G.f)((function(e) {
                        k()(e, "A tour slug is required to dismiss a tour.")
                    }), c.a.mark((function e(t) {
                        var r, n, i;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ie();
                                case 2:
                                    if (r = e.sent, !(n = r.select)(d.a).isFetchingDismissTour(t)) {
                                        e.next = 7;
                                        break
                                    }
                                    return i = n(d.a).getDismissedFeatureTourSlugs(), e.abrupt("return", {
                                        response: i,
                                        error: void 0
                                    });
                                case 7:
                                    return e.next = 9, {
                                        type: "DISMISS_TOUR",
                                        payload: {
                                            slug: t
                                        }
                                    };
                                case 9:
                                    return e.next = 11, Ue.setLastDismissedAt(Date.now());
                                case 11:
                                    return e.next = 13, De.actions.fetchDismissTour(t);
                                case 13:
                                    return e.abrupt("return", e.sent);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    receiveFeatureToursForView: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.viewContext;
                        return k()(Array.isArray(e), "viewTours must be an array."), k()(r, "viewContext is required."), {
                            payload: {
                                viewTours: e,
                                viewContext: r
                            },
                            type: "RECEIVE_READY_TOURS"
                        }
                    },
                    receiveAllFeatureTours: function(e) {
                        return k()(Array.isArray(e), "tours must be an array."), {
                            payload: {
                                tours: e
                            },
                            type: "RECEIVE_TOURS"
                        }
                    },
                    receiveLastDismissedAt: function(e) {
                        return k()(void 0 !== e, "A timestamp is required."), {
                            type: "RECEIVE_LAST_DISMISSED_AT",
                            payload: {
                                timestamp: e
                            }
                        }
                    },
                    setLastDismissedAt: Object(G.f)((function(e) {
                        k()(e, "A timestamp is required.")
                    }), c.a.mark((function e(t) {
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, {
                                        type: "CACHE_LAST_DISMISSED_AT",
                                        payload: {
                                            timestamp: t
                                        }
                                    };
                                case 2:
                                    return e.next = 4, {
                                        type: "RECEIVE_LAST_DISMISSED_AT",
                                        payload: {
                                            timestamp: t
                                        }
                                    };
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                },
                Ae = (W = {}, s()(W, "CHECK_TOUR_REQUIREMENTS", ke((function(e) {
                    return function() {
                        var t = ae()(c.a.mark((function t(r) {
                            var n, i, a, o;
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = r.payload, i = n.tour, a = n.viewContext, i.contexts.includes(a)) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 4:
                                        if (o = e.select(d.a).getInitialSiteKitVersion()) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 9:
                                        if (!ce.a.compare(o, i.version, ">=")) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 11:
                                        return t.next = 13, e.__experimentalResolveSelect(d.a).getDismissedFeatureTourSlugs();
                                    case 13:
                                        if (!e.select(d.a).isTourDismissed(i.slug)) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 15:
                                        if (!i.checkRequirements) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.next = 18, i.checkRequirements(e);
                                    case 18:
                                        return t.abrupt("return", !!t.sent);
                                    case 19:
                                        return t.abrupt("return", !0);
                                    case 20:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }))), s()(W, "CACHE_LAST_DISMISSED_AT", (we = ae()(c.a.mark((function e(t) {
                    var r, n;
                    return c.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = t.payload, n = r.timestamp, e.next = 4, Object(he.d)("feature_tour_last_dismissed_at", n, {
                                    ttl: 7200
                                });
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), function(e) {
                    return we.apply(this, arguments)
                })), W),
                Pe = {
                    getDismissedFeatureTourSlugs: c.a.mark((function e() {
                        var t, r;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ie();
                                case 2:
                                    if (t = e.sent, r = t.select, void 0 !== r(d.a).getDismissedFeatureTourSlugs()) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, Te.actions.fetchGetDismissedTours();
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    getFeatureToursForView: c.a.mark((function e(t) {
                        var r, n, i, a, o, u;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ie();
                                case 2:
                                    r = e.sent, n = r.select(d.a).getAllFeatureTours(), i = [], a = Oe(n), e.prev = 6, a.s();
                                case 8:
                                    if ((o = a.n()).done) {
                                        e.next = 16;
                                        break
                                    }
                                    return u = o.value, e.next = 12, {
                                        payload: {
                                            tour: u,
                                            viewContext: t
                                        },
                                        type: "CHECK_TOUR_REQUIREMENTS"
                                    };
                                case 12:
                                    e.sent && i.push(u);
                                case 14:
                                    e.next = 8;
                                    break;
                                case 16:
                                    e.next = 21;
                                    break;
                                case 18:
                                    e.prev = 18, e.t0 = e.catch(6), a.e(e.t0);
                                case 21:
                                    return e.prev = 21, a.f(), e.finish(21);
                                case 24:
                                    return e.next = 26, Ue.receiveFeatureToursForView(i, {
                                        viewContext: t
                                    });
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [6, 18, 21, 24]
                        ])
                    })),
                    getLastDismissedAt: c.a.mark((function e() {
                        var t, r;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.await(Object(he.b)("feature_tour_last_dismissed_at"));
                                case 2:
                                    return t = e.sent, r = t.value, e.next = 6, Ue.receiveLastDismissedAt(r || null);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                Ce = {
                    getDismissedFeatureTourSlugs: function(e) {
                        return e.dismissedTourSlugs
                    },
                    getFeatureToursForView: function(e, t) {
                        return e.viewTours[t]
                    },
                    getAllFeatureTours: function(e) {
                        return e.tours
                    },
                    isTourDismissed: je((function(e) {
                        return function(t, r) {
                            var n = e(d.a).getDismissedFeatureTourSlugs();
                            if (void 0 !== n) return n.includes(r)
                        }
                    })),
                    getLastDismissedAt: function(e) {
                        return e.lastDismissedAt
                    },
                    areFeatureToursOnCooldown: je((function(e) {
                        return function() {
                            var t = e(d.a).getLastDismissedAt();
                            if (void 0 !== t) {
                                if (null === t) return !1;
                                var r = t + 72e5;
                                return Date.now() < r
                            }
                        }
                    }))
                },
                Ne = i.a.combineStores({
                    initialState: xe,
                    actions: Re,
                    controls: Ae,
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "DISMISS_TOUR":
                                var i = n.slug,
                                    a = e.dismissedTourSlugs,
                                    o = void 0 === a ? [] : a;
                                return o.includes(i) ? e : _e(_e({}, e), {}, {
                                    dismissedTourSlugs: o.concat(i)
                                });
                            case "RECEIVE_READY_TOURS":
                                var c = n.viewContext,
                                    u = n.viewTours;
                                return _e(_e({}, e), {}, {
                                    viewTours: _e(_e({}, e.viewTours), {}, s()({}, c, u))
                                });
                            case "RECEIVE_TOURS":
                                return _e(_e({}, e), {}, {
                                    tours: n.tours
                                });
                            case "RECEIVE_LAST_DISMISSED_AT":
                                return _e(_e({}, e), {}, {
                                    lastDismissedAt: n.timestamp
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: Pe,
                    selectors: Ce
                }, De, Te),
                Ue = Ne.actions,
                Le = Ne.controls,
                qe = Ne.initialState,
                Ve = Ne.reducer,
                Fe = Ne.resolvers,
                Me = Ne.selectors,
                Ge = {
                    actions: Ue,
                    controls: Le,
                    initialState: qe,
                    reducer: Ve,
                    resolvers: Fe,
                    selectors: Me
                },
                He = r(360),
                Be = Object(He.a)("core", "user", "notifications", {
                    server: !1
                }),
                Ke = r(731),
                $e = r(57),
                Ye = r.n($e),
                Je = r(415);

            function We(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? We(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : We(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Qe = i.a.createRegistrySelector,
                Ze = Object(p.a)({
                    baseName: "triggerSurvey",
                    controlCallback: function(e) {
                        var t = e.triggerID;
                        return f.a.set("core", "user", "survey-trigger", {
                            triggerID: t
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            triggerID: e
                        }
                    },
                    reducerCallback: function(e, t) {
                        var r = t.survey_payload,
                            n = t.session;
                        return tt.getCurrentSurvey(e) ? e : ze(ze({}, e), {}, {
                            currentSurvey: r,
                            currentSurveySession: n
                        })
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.triggerID;
                        k()("string" == typeof t && t.length, "triggerID is required and must be a string")
                    }
                }),
                Xe = Object(p.a)({
                    baseName: "sendSurveyEvent",
                    controlCallback: function(e) {
                        var t = e.event,
                            r = e.session;
                        return f.a.set("core", "user", "survey-event", {
                            event: t,
                            session: r
                        })
                    },
                    argsToParams: function(e, t) {
                        return {
                            event: e,
                            session: t
                        }
                    }
                }),
                et = {
                    triggerSurvey: Object(G.f)((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.ttl,
                            n = void 0 === r ? 0 : r;
                        k()("string" == typeof e && e.length, "triggerID is required and must be a string"), k()(Ye()(t), "options must be an object"), k()("number" == typeof n, "options.ttl must be a number")
                    }), c.a.mark((function e(t) {
                        var r, n, a, o, u, s, l, f, p, g, v, b = arguments;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = b.length > 1 && void 0 !== b[1] ? b[1] : {}, n = r.ttl, a = void 0 === n ? 0 : n, e.next = 4, i.a.commonActions.getRegistry();
                                case 4:
                                    if (o = e.sent, u = o.select, s = o.__experimentalResolveSelect, !u(d.a).getCurrentSurvey()) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return", {});
                                case 9:
                                    return e.next = 11, i.a.commonActions.await(s(d.a).getAuthentication());
                                case 11:
                                    if (u(d.a).isAuthenticated()) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.abrupt("return", {});
                                case 13:
                                    return l = Object(Je.a)("core", "user", "survey-trigger", {
                                        triggerID: t
                                    }), e.next = 16, i.a.commonActions.await(Object(he.b)(l));
                                case 16:
                                    if (f = e.sent, !1 !== f.cacheHit) {
                                        e.next = 27;
                                        break
                                    }
                                    return e.next = 21, Ze.actions.fetchTriggerSurvey(t);
                                case 21:
                                    if (p = e.sent, g = p.response, !(v = p.error)) {
                                        e.next = 26;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        response: g,
                                        error: v
                                    });
                                case 26:
                                    a > 0 && setTimeout(ae()(c.a.mark((function e() {
                                        return c.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, Object(he.d)(l, {}, {
                                                        ttl: a
                                                    });
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), 3e4);
                                case 27:
                                    return e.abrupt("return", {
                                        response: {},
                                        error: !1
                                    });
                                case 28:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    sendSurveyEvent: Object(G.f)((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        k()("string" == typeof e && e.length, "eventID is required and must be a string"), k()(Ye()(t), "eventData must be an object")
                    }), c.a.mark((function e(t) {
                        var r, n, a, o, u, l, f, p, g = arguments;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = g.length > 1 && void 0 !== g[1] ? g[1] : {}, n = s()({}, t, r), e.next = 4, i.a.commonActions.getRegistry();
                                case 4:
                                    if (a = e.sent, o = a.select, !(u = o(d.a).getCurrentSurveySession())) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.next = 10, Xe.actions.fetchSendSurveyEvent(n, u);
                                case 10:
                                    return l = e.sent, f = l.response, p = l.error, e.abrupt("return", {
                                        response: f,
                                        error: p
                                    });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                },
                tt = {
                    getCurrentSurvey: function(e) {
                        return e.currentSurvey
                    },
                    getCurrentSurveySession: function(e) {
                        return e.currentSurveySession
                    },
                    getCurrentSurveyCompletions: Qe((function(e) {
                        return function() {
                            var t = e(d.a).getCurrentSurvey();
                            return (null == t ? void 0 : t.completion) || null
                        }
                    })),
                    getCurrentSurveyQuestions: Qe((function(e) {
                        return function() {
                            var t = e(d.a).getCurrentSurvey();
                            return (null == t ? void 0 : t.question) || null
                        }
                    }))
                },
                rt = i.a.combineStores(Ze, Xe, {
                    initialState: {
                        currentSurvey: null,
                        currentSurveySession: null
                    },
                    actions: et,
                    selectors: tt
                }),
                nt = (rt.initialState, rt.actions, rt.selectors, rt);

            function it(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function at(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? it(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : it(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ot, ct = a.a.receiveError,
                ut = a.a.clearError,
                st = function(e, t) {
                    return at(at({}, e), {}, {
                        tracking: t
                    })
                },
                lt = Object(p.a)({
                    baseName: "getTracking",
                    controlCallback: function() {
                        return f.a.get("core", "user", "tracking")
                    },
                    reducerCallback: st
                }),
                ft = Object(p.a)({
                    baseName: "setTracking",
                    controlCallback: function(e) {
                        return f.a.set("core", "user", "tracking", {
                            enabled: !!e
                        })
                    },
                    reducerCallback: st,
                    argsToParams: function(e) {
                        return e
                    }
                }),
                dt = {
                    tracking: void 0,
                    isSavingTrackingEnabled: !1
                },
                pt = {
                    setTrackingEnabled: c.a.mark((function e(t) {
                        var r, n, i;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ut("setTrackingEnabled", [t]);
                                case 2:
                                    return e.next = 4, {
                                        type: "SET_TRACKING_ENABLED_SAVING_ACTION",
                                        payload: {
                                            isSaving: !0
                                        }
                                    };
                                case 4:
                                    return e.next = 6, ft.actions.fetchSetTracking(t);
                                case 6:
                                    if (r = e.sent, n = r.response, !(i = r.error)) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 12, ct(i, "setTrackingEnabled", [t]);
                                case 12:
                                    return e.next = 14, {
                                        type: "SET_TRACKING_ENABLED_SAVING_ACTION",
                                        payload: {
                                            isSaving: !1
                                        }
                                    };
                                case 14:
                                    return e.abrupt("return", {
                                        response: n,
                                        error: i
                                    });
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                gt = {
                    isTrackingEnabled: c.a.mark((function e() {
                        var t;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    if (t = e.sent, void 0 !== (0, t.select)(d.a).isTrackingEnabled()) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, lt.actions.fetchGetTracking();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                vt = i.a.combineStores(lt, ft, {
                    initialState: dt,
                    actions: pt,
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "SET_TRACKING_ENABLED_SAVING_ACTION":
                                return at(at({}, e), {}, {
                                    isSavingTrackingEnabled: n.isSaving
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: gt,
                    selectors: {
                        isSavingTrackingEnabled: function(e) {
                            return !!(null == e ? void 0 : e.isSavingTrackingEnabled)
                        },
                        isTrackingEnabled: function(e) {
                            var t = e.tracking;
                            return null == t ? void 0 : t.enabled
                        }
                    }
                }),
                bt = (vt.initialState, vt.actions, vt.controls, vt.reducer, vt.resolvers, vt.selectors, vt),
                yt = r(732);

            function mt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ht(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mt(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mt(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Ot = i.a.commonActions,
                St = i.a.createRegistryControl,
                Et = i.a.createRegistrySelector,
                _t = a.a.receiveError,
                wt = a.a.clearError;

            function jt(e, t) {
                return ht(ht({}, e), {}, {
                    inputSettings: t
                })
            }
            var kt, It = Object(p.a)({
                    baseName: "getUserInputSettings",
                    controlCallback: (kt = ae()(c.a.mark((function e() {
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", f.a.get("core", "user", "user-input-settings", void 0, {
                                        useCache: !1
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() {
                        return kt.apply(this, arguments)
                    }),
                    reducerCallback: jt
                }),
                Tt = Object(p.a)({
                    baseName: "saveUserInputSettings",
                    controlCallback: function(e) {
                        return f.a.set("core", "user", "user-input-settings", {
                            settings: e
                        })
                    },
                    reducerCallback: jt,
                    argsToParams: function(e) {
                        return e
                    },
                    validateParams: function(e) {
                        k()(Ye()(e), "valid settings are required.")
                    }
                }),
                Dt = {
                    inputSettings: void 0,
                    isSavingInputSettings: !1
                },
                xt = {
                    setUserInputSettingsFromCache: c.a.mark((function e() {
                        var t, r, n, i;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, {
                                        type: "GET_CACHED_USER_INPUT_SETTINGS",
                                        payload: {}
                                    };
                                case 2:
                                    if (!(t = e.sent).cacheHit) {
                                        e.next = 12;
                                        break
                                    }
                                    r = 0, n = Object.keys(t.value);
                                case 5:
                                    if (!(r < n.length)) {
                                        e.next = 12;
                                        break
                                    }
                                    return i = n[r], e.next = 9, xt.setUserInputSetting(i, t.value[i].values);
                                case 9:
                                    r++, e.next = 5;
                                    break;
                                case 12:
                                    return e.abrupt("return", t.cacheHit ? t.value : {});
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    setUserInputSetting: c.a.mark((function e(t, r) {
                        var n, a;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    if (n = e.sent, a = r.map((function(e) {
                                            return e.trim()
                                        })), "completed" === n.select(d.a).getUserInputState()) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, {
                                        type: "SET_CACHED_USER_INPUT_SETTING",
                                        payload: {
                                            settingID: t,
                                            values: a
                                        }
                                    };
                                case 7:
                                    return e.abrupt("return", {
                                        type: "SET_USER_INPUT_SETTING",
                                        payload: {
                                            settingID: t,
                                            values: a
                                        }
                                    });
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    saveUserInputSettings: c.a.mark((function e() {
                        var t, r, n, a, o, u, l, f;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.a.commonActions.getRegistry();
                                case 2:
                                    return t = e.sent, e.next = 5, wt("saveUserInputSettings", []);
                                case 5:
                                    return r = function(e) {
                                        return e.trim()
                                    }, n = function(e) {
                                        return e.length > 0
                                    }, a = t.select(d.a).getUserInputSettings(), o = Object.keys(a).reduce((function(e, t) {
                                        var i;
                                        return ht(ht({}, e), {}, s()({}, t, ((null === (i = a[t]) || void 0 === i ? void 0 : i.values) || []).map(r).filter(n)))
                                    }), {}), e.next = 11, {
                                        type: "SET_USER_INPUT_SETTINGS_SAVING_FLAG",
                                        payload: {
                                            isSaving: !0
                                        }
                                    };
                                case 11:
                                    return e.next = 13, Tt.actions.fetchSaveUserInputSettings(o);
                                case 13:
                                    if (u = e.sent, l = u.response, !(f = u.error)) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.next = 19, _t(f, "saveUserInputSettings", []);
                                case 19:
                                    return e.next = 21, {
                                        type: "DELETE_CACHED_USER_INPUT_SETTINGS",
                                        payload: {}
                                    };
                                case 21:
                                    return e.next = 23, {
                                        type: "SET_USER_INPUT_SETTINGS_SAVING_FLAG",
                                        payload: {
                                            isSaving: !1
                                        }
                                    };
                                case 23:
                                    return e.abrupt("return", {
                                        response: l,
                                        error: f
                                    });
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                Rt = (ot = {}, s()(ot, "DELETE_CACHED_USER_INPUT_SETTINGS", (function() {
                    return Object(he.a)("userInputSettings")
                })), s()(ot, "GET_CACHED_USER_INPUT_SETTINGS", (function() {
                    return Object(he.b)("userInputSettings")
                })), s()(ot, "SET_CACHED_USER_INPUT_SETTING", St((function(e) {
                    return function() {
                        var t = ae()(c.a.mark((function t(r) {
                            var n, i, a, o;
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = r.payload, i = n.settingID, a = n.values, (o = e.select(d.a).getUserInputSettings() || {})[i] = {
                                            values: a
                                        }, t.abrupt("return", Object(he.d)("userInputSettings", o));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }))), ot),
                At = {
                    getUserInputSettings: c.a.mark((function e() {
                        var t, r;
                        return c.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ot.getRegistry();
                                case 2:
                                    if (t = e.sent, (r = t.select)(d.a).getUserInputSettings()) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, It.actions.fetchGetUserInputSettings();
                                case 7:
                                    if ("completed" === r(d.a).getUserInputState()) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 10, xt.setUserInputSettingsFromCache();
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                Pt = {
                    isSavingUserInputSettings: function(e) {
                        return !!(null == e ? void 0 : e.isSavingInputSettings)
                    },
                    getUserInputSettings: function(e) {
                        return e.inputSettings
                    },
                    getUserInputSetting: Et((function(e) {
                        return function(t, r) {
                            var n, i = null === (n = (e(d.a).getUserInputSettings() || {})[r]) || void 0 === n ? void 0 : n.values;
                            return Array.isArray(i) ? i : []
                        }
                    })),
                    getUserInputSettingScope: Et((function(e) {
                        return function(t, r) {
                            var n;
                            return null === (n = (e(d.a).getUserInputSettings() || {})[r]) || void 0 === n ? void 0 : n.scope
                        }
                    })),
                    getUserInputSettingAuthor: Et((function(e) {
                        return function(t, r) {
                            var n;
                            return null === (n = (e(d.a).getUserInputSettings() || {})[r]) || void 0 === n ? void 0 : n.author
                        }
                    }))
                },
                Ct = i.a.combineStores(It, Tt, {
                    initialState: Dt,
                    actions: xt,
                    controls: Rt,
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "SET_USER_INPUT_SETTING":
                                return ht(ht({}, e), {}, {
                                    inputSettings: ht(ht({}, e.inputSettings), {}, s()({}, n.settingID, ht(ht({}, (e.inputSettings || {})[n.settingID] || {}), {}, {
                                        values: n.values
                                    })))
                                });
                            case "SET_USER_INPUT_SETTINGS_SAVING_FLAG":
                                return ht(ht({}, e), {}, {
                                    isSavingInputSettings: n.isSaving
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: At,
                    selectors: Pt
                }),
                Nt = (Ct.initialState, Ct.actions, Ct.controls, Ct.reducer, Ct.resolvers, Ct.selectors, Ct),
                Ut = i.a.combineStores(i.a.commonStore, Object(a.b)(), w, A, M, ne, Ge, Be, Ke.a, nt, bt, yt.a, Nt);
            Ut.initialState, Ut.actions, Ut.controls, Ut.reducer, Ut.resolvers, Ut.selectors;
            i.a.registerStore(d.a, Ut)
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
                return p
            })), r.d(t, "c", (function() {
                return g.b
            })), r.d(t, "k", (function() {
                return g.c
            })), r.d(t, "r", (function() {
                return v.c
            })), r.d(t, "s", (function() {
                return v.d
            })), r.d(t, "o", (function() {
                return v.b
            })), r.d(t, "j", (function() {
                return v.a
            })), r.d(t, "e", (function() {
                return b.a
            })), r.d(t, "p", (function() {
                return O
            })), r.d(t, "d", (function() {
                return S
            })), r.d(t, "g", (function() {
                return E.c
            })), r.d(t, "u", (function() {
                return E.i
            })), r.d(t, "h", (function() {
                return _.b
            })), r.d(t, "n", (function() {
                return _.c
            })), r.d(t, "b", (function() {
                return _.a
            })), r.d(t, "m", (function() {
                return w.b
            })), r.d(t, "i", (function() {
                return w.a
            })), r.d(t, "q", (function() {
                return w.d
            })), r.d(t, "l", (function() {
                return j
            })), r.d(t, "a", (function() {
                return k
            })), r.d(t, "y", (function() {
                return I
            })), r.d(t, "f", (function() {
                return T
            }));
            var n = r(117),
                i = r.n(n),
                a = r(113),
                o = r.n(a),
                c = r(31),
                u = r(63),
                s = r(29),
                l = r.n(s),
                f = r(78),
                d = r.n(f),
                p = function(e) {
                    return d()(JSON.stringify(function e(t) {
                        var r = {};
                        return Object.keys(t).sort().forEach((function(n) {
                            var i = t[n];
                            i && "object" === l()(i) && !Array.isArray(i) && (i = e(i)), r[n] = i
                        })), r
                    }(e)))
                };
            var g = r(80),
                v = (r(84), r(72)),
                b = r(64);

            function y(e) {
                return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function m(e) {
                return "<p>".concat(e.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function h(e) {
                return e.replace(/\n/gi, "<br>")
            }

            function O(e) {
                for (var t = e, r = 0, n = [y, m, h]; r < n.length; r++) {
                    t = (0, n[r])(t)
                }
                return t
            }
            var S = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                E = r(59),
                _ = r(85),
                w = r(50),
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
                k = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var r = (t - e) / e;
                    return isNaN(r) || !i()(r) ? null : r
                },
                I = function(e) {
                    try {
                        return JSON.parse(e) && !!e
                    } catch (e) {
                        return !1
                    }
                },
                T = function(e) {
                    if (!e) return "";
                    var t = e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(t)
                    })).replace(/(\\)/g, "");
                    return o()(t)
                }
        },
        13: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return i
            })), r.d(t, "e", (function() {
                return a
            })), r.d(t, "f", (function() {
                return o
            })), r.d(t, "c", (function() {
                return c
            })), r.d(t, "d", (function() {
                return u
            }));
            var n = "core/user",
                i = "connected_url_mismatch",
                a = "googlesitekit_setup",
                o = "googlesitekit_view_dashboard",
                c = "googlesitekit_manage_options",
                u = "googlesitekit_read_shared_module_data"
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
        224: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(52),
                    i = r.n(n),
                    a = r(225),
                    o = e._googlesitekitAPIFetchData || {},
                    c = o.nonce,
                    u = o.nonceEndpoint,
                    s = o.preloadedData,
                    l = o.rootURL;
                i.a.nonceEndpoint = u, i.a.nonceMiddleware = i.a.createNonceMiddleware(c), i.a.rootURLMiddleware = i.a.createRootURLMiddleware(l), i.a.preloadingMiddleware = Object(a.a)(s), i.a.use(i.a.nonceMiddleware), i.a.use(i.a.mediaUploadMiddleware), i.a.use(i.a.rootURLMiddleware), i.a.use(i.a.preloadingMiddleware), t.default = i.a
            }).call(this, r(18))
        },
        225: function(e, t, r) {
            "use strict";
            var n = r(220);
            t.a = function(e) {
                var t = Object.keys(e).reduce((function(t, r) {
                        return t[Object(n.getStablePath)(r)] = e[r], t
                    }), {}),
                    r = !1;
                return function(e, i) {
                    if (r) return i(e);
                    setTimeout((function() {
                        r = !0
                    }), 1e3);
                    var a = e.parse,
                        o = void 0 === a || a,
                        c = e.path;
                    if ("string" == typeof e.path) {
                        var u, s = (null === (u = e.method) || void 0 === u ? void 0 : u.toUpperCase()) || "GET",
                            l = Object(n.getStablePath)(c);
                        if (o && "GET" === s && t[l]) {
                            var f = Promise.resolve(t[l].body);
                            return delete t[l], f
                        }
                        if ("OPTIONS" === s && t[s] && t[s][l]) {
                            var d = Promise.resolve(t[s][l]);
                            return delete t[s][l], d
                        }
                    }
                    return i(e)
                }
            }
        },
        24: function(e, t, r) {
            "use strict";
            r.d(t, "g", (function() {
                return n
            })), r.d(t, "l", (function() {
                return i
            })), r.d(t, "i", (function() {
                return a
            })), r.d(t, "m", (function() {
                return o
            })), r.d(t, "n", (function() {
                return c
            })), r.d(t, "p", (function() {
                return u
            })), r.d(t, "e", (function() {
                return s
            })), r.d(t, "h", (function() {
                return l
            })), r.d(t, "f", (function() {
                return f
            })), r.d(t, "o", (function() {
                return d
            })), r.d(t, "j", (function() {
                return p
            })), r.d(t, "q", (function() {
                return g
            })), r.d(t, "k", (function() {
                return v
            })), r.d(t, "d", (function() {
                return b
            })), r.d(t, "a", (function() {
                return y
            })), r.d(t, "c", (function() {
                return m
            })), r.d(t, "b", (function() {
                return h
            }));
            var n = "dashboard",
                i = "pageDashboard",
                a = "dashboardViewOnly",
                o = "pageDashboardViewOnly",
                c = "postsList",
                u = "userInput",
                s = "activation",
                l = "splash",
                f = "adminBar",
                d = "settings",
                p = "module",
                g = "wpDashboard",
                v = "moduleSetup",
                b = "traffic",
                y = "content",
                m = "speed",
                h = "monetization"
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
                    return a
                })), r.d(t, "b", (function() {
                    return o
                }));
                var a = new Set((null === (n = e) || void 0 === n || null === (i = n._googlesitekitBaseData) || void 0 === i ? void 0 : i.enabledFeatures) || []),
                    o = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
                        return t instanceof Set && t.has(e)
                    }
            }).call(this, r(18))
        },
        31: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return v
                })), r.d(t, "b", (function() {
                    return g
                }));
                var n = r(86),
                    i = e._googlesitekitBaseData || {},
                    a = i.activeModules,
                    o = void 0 === a ? [] : a,
                    c = i.isSiteKitScreen,
                    u = i.trackingEnabled,
                    s = {
                        activeModules: o,
                        trackingEnabled: u,
                        trackingID: i.trackingID,
                        referenceSiteURL: i.referenceSiteURL,
                        userIDHash: i.userIDHash,
                        isSiteKitScreen: c
                    },
                    l = Object(n.a)(s),
                    f = l.enableTracking,
                    d = l.disableTracking,
                    p = (l.isTrackingEnabled, l.initializeSnippet),
                    g = l.trackEvent;

                function v(e) {
                    e ? f() : d()
                }
                c && u && p()
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
                    a = r(6),
                    o = r.n(a),
                    c = r(9),
                    u = r.n(c),
                    s = r(33),
                    l = r.n(s),
                    f = r(4),
                    d = r.n(f),
                    p = r(45);

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

                function v(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? g(Object(r), !0).forEach((function(t) {
                            o()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var b = function(t, r, n) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        c = a.client,
                        s = void 0 === c || c,
                        f = a.server,
                        g = void 0 === f || f,
                        b = a.storeName,
                        y = void 0 === b ? void 0 : b;
                    u()(t, "type is required."), u()(r, "identifier is required."), u()(n, "datapoint is required.");
                    var m = y || "".concat(t, "/").concat(r),
                        h = {
                            serverNotifications: g ? void 0 : {},
                            clientNotifications: s ? void 0 : {}
                        },
                        O = Object(p.a)({
                            baseName: "getNotifications",
                            controlCallback: function() {
                                return l.a.get(t, r, n)
                            },
                            reducerCallback: function(e, t) {
                                return v(v({}, e), {}, {
                                    serverNotifications: t.reduce((function(e, t) {
                                        return v(v({}, e), {}, o()({}, t.id, t))
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
                        E = {},
                        _ = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                n = r.type,
                                i = r.payload;
                            switch (n) {
                                case "ADD_NOTIFICATION":
                                    var a = i.notification;
                                    return v(v({}, t), {}, {
                                        clientNotifications: v(v({}, t.clientNotifications || {}), {}, o()({}, a.id, a))
                                    });
                                case "REMOVE_NOTIFICATION":
                                    var c = i.id;
                                    if (void 0 === t.clientNotifications || void 0 === t.clientNotifications[c]) return void 0 !== t.serverNotifications && void 0 !== t.serverNotifications[c] && e.console.warn('Cannot remove server-side notification with ID "'.concat(c, '"; this may be changed in a future release.')), t;
                                    var u = v({}, t.clientNotifications);
                                    return delete u[c], v(v({}, t), {}, {
                                        clientNotifications: u
                                    });
                                default:
                                    return t
                            }
                        },
                        w = {
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
                    g || delete w.getNotifications;
                    var j = {
                            getNotifications: function(e) {
                                var t = e.serverNotifications,
                                    r = e.clientNotifications;
                                return void 0 === t && void 0 === r ? t : Object.values(v(v({}, t || {}), r || {}))
                            }
                        },
                        k = d.a.combineStores(O, {
                            initialState: h,
                            actions: S,
                            controls: E,
                            reducer: _,
                            resolvers: w,
                            selectors: j
                        });
                    return v(v({}, k), {}, {
                        STORE_NAME: m
                    })
                }
            }).call(this, r(18))
        },
        37: function(e, t, r) {
            "use strict";
            r.d(t, "t", (function() {
                return i
            })), r.d(t, "i", (function() {
                return a
            })), r.d(t, "m", (function() {
                return o
            })), r.d(t, "k", (function() {
                return c
            })), r.d(t, "l", (function() {
                return u
            })), r.d(t, "j", (function() {
                return s
            })), r.d(t, "p", (function() {
                return l
            })), r.d(t, "a", (function() {
                return f
            })), r.d(t, "c", (function() {
                return d
            })), r.d(t, "d", (function() {
                return p
            })), r.d(t, "b", (function() {
                return g
            })), r.d(t, "e", (function() {
                return v
            })), r.d(t, "g", (function() {
                return b
            })), r.d(t, "f", (function() {
                return y
            })), r.d(t, "h", (function() {
                return m
            })), r.d(t, "o", (function() {
                return h
            })), r.d(t, "n", (function() {
                return O
            })), r.d(t, "r", (function() {
                return S
            })), r.d(t, "s", (function() {
                return E
            })), r.d(t, "q", (function() {
                return _
            }));
            var n = r(24),
                i = "modules/idea-hub",
                a = "IDEA_HUB_BUTTON_CREATE",
                o = "IDEA_HUB_BUTTON_VIEW",
                c = "IDEA_HUB_BUTTON_PIN",
                u = "IDEA_HUB_BUTTON_UNPIN",
                s = "IDEA_HUB_BUTTON_DELETE",
                l = 5,
                f = "IDEA_HUB_ACTIVITY_CREATING_DRAFT",
                d = "IDEA_HUB_ACTIVITY_DRAFT_CREATED",
                p = "IDEA_HUB_ACTIVITY_IS_DELETING",
                g = "IDEA_HUB_ACTIVITY_DELETED",
                v = "IDEA_HUB_ACTIVITY_IS_PINNING",
                b = "IDEA_HUB_ACTIVITY_PINNED",
                y = "IDEA_HUB_ACTIVITY_IS_UNPINNING",
                m = "IDEA_HUB_ACTIVITY_UNPINNED",
                h = "".concat(n.q, "_idea-hub-saved-ideas-notification"),
                O = "".concat(n.n, "_idea-hub"),
                S = "new-ideas",
                E = "saved-ideas",
                _ = "draft-ideas"
        },
        4: function(e, t) {
            e.exports = googlesitekit.data
        },
        40: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "b", (function() {
                    return b
                })), r.d(t, "d", (function() {
                    return y
                })), r.d(t, "a", (function() {
                    return m
                })), r.d(t, "c", (function() {
                    return h
                }));
                var n = r(5),
                    i = r.n(n),
                    a = r(14),
                    o = r.n(a);
                r(23);

                function c(e, t) {
                    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!r) {
                        if (Array.isArray(e) || (r = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return u(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r) return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
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
                    var a, o = !0,
                        c = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            c = !0, a = e
                        },
                        f: function() {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                    }
                }

                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }
                var s, l = "googlesitekit_".concat("1.72.0", "_"),
                    f = ["sessionStorage", "localStorage"],
                    d = [].concat(f),
                    p = function() {
                        var t = o()(i.a.mark((function t(r) {
                            var n, a;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = e[r]) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 3:
                                        return t.prev = 3, a = "__storage_test__", n.setItem(a, a), n.removeItem(a), t.abrupt("return", !0);
                                    case 10:
                                        return t.prev = 10, t.t0 = t.catch(3), t.abrupt("return", t.t0 instanceof DOMException && (22 === t.t0.code || 1014 === t.t0.code || "QuotaExceededError" === t.t0.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.t0.name) && 0 !== n.length);
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

                function g() {
                    return v.apply(this, arguments)
                }

                function v() {
                    return (v = o()(i.a.mark((function t() {
                        var r, n, a;
                        return i.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (void 0 === s) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", s);
                                case 2:
                                    r = c(d), t.prev = 3, r.s();
                                case 5:
                                    if ((n = r.n()).done) {
                                        t.next = 15;
                                        break
                                    }
                                    if (a = n.value, !s) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("continue", 13);
                                case 9:
                                    return t.next = 11, p(a);
                                case 11:
                                    if (!t.sent) {
                                        t.next = 13;
                                        break
                                    }
                                    s = e[a];
                                case 13:
                                    t.next = 5;
                                    break;
                                case 15:
                                    t.next = 20;
                                    break;
                                case 17:
                                    t.prev = 17, t.t0 = t.catch(3), r.e(t.t0);
                                case 20:
                                    return t.prev = 20, r.f(), t.finish(20);
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
                var b = function() {
                        var e = o()(i.a.mark((function e(t) {
                            var r, n, a, o, c, u, s;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, g();
                                    case 2:
                                        if (!(r = e.sent)) {
                                            e.next = 10;
                                            break
                                        }
                                        if (!(n = r.getItem("".concat(l).concat(t)))) {
                                            e.next = 10;
                                            break
                                        }
                                        if (a = JSON.parse(n), o = a.timestamp, c = a.ttl, u = a.value, s = a.isError, !o || c && !(Math.round(Date.now() / 1e3) - o < c)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return", {
                                            cacheHit: !0,
                                            value: u,
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
                    y = function() {
                        var t = o()(i.a.mark((function t(r, n) {
                            var a, o, c, u, s, f, d, p, v = arguments;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return a = v.length > 2 && void 0 !== v[2] ? v[2] : {}, o = a.ttl, c = void 0 === o ? 3600 : o, u = a.timestamp, s = void 0 === u ? Math.round(Date.now() / 1e3) : u, f = a.isError, d = void 0 !== f && f, t.next = 3, g();
                                    case 3:
                                        if (!(p = t.sent)) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.prev = 5, p.setItem("".concat(l).concat(r), JSON.stringify({
                                            timestamp: s,
                                            ttl: c,
                                            value: n,
                                            isError: d
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
                        return function(e, r) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    m = function() {
                        var t = o()(i.a.mark((function t(r) {
                            var n;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, g();
                                    case 2:
                                        if (!(n = t.sent)) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.prev = 4, n.removeItem("".concat(l).concat(r)), t.abrupt("return", !0);
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
                    h = function() {
                        var t = o()(i.a.mark((function t() {
                            var r, n, a, o;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, g();
                                    case 2:
                                        if (!(r = t.sent)) {
                                            t.next = 14;
                                            break
                                        }
                                        for (t.prev = 4, n = [], a = 0; a < r.length; a++) 0 === (o = r.key(a)).indexOf(l) && n.push(o.substring(l.length));
                                        return t.abrupt("return", n);
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
            }).call(this, r(18))
        },
        415: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return y
                }));
                var n = r(5),
                    i = r.n(n),
                    a = r(14),
                    o = r.n(a),
                    c = r(9),
                    u = r.n(c),
                    s = r(224),
                    l = r(287),
                    f = r(40),
                    d = r(11),
                    p = r(89),
                    g = r(443),
                    v = r(13),
                    b = !0,
                    y = function(e, t, r) {
                        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            i = [e, t, r].filter((function(e) {
                                return !!e && e.length
                            }));
                        return 3 === i.length && n && n.constructor === Object && Object.keys(n).length && i.push(Object(d.v)(n)), i.join("::")
                    },
                    m = function(t) {
                        var r, n, i, a, o = null === (r = e.googlesitekit) || void 0 === r || null === (n = r.data) || void 0 === n || null === (i = n.dispatch) || void 0 === i ? void 0 : i.call(n, v.a);
                        o && (t.code === p.a ? o.setPermissionScopeError(t) : (null === (a = t.data) || void 0 === a ? void 0 : a.reconnectURL) && o.setAuthError(t))
                    },
                    h = function() {
                        var t = o()(i.a.mark((function t(r, n, a) {
                            var o, c, d, p, v, b, h, O, S, _, w, j, k, I, T, D, x, R = arguments;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (o = R.length > 3 && void 0 !== R[3] ? R[3] : {}, c = o.bodyParams, d = o.cacheTTL, p = void 0 === d ? 3600 : d, v = o.method, b = void 0 === v ? "GET" : v, h = o.queryParams, O = o.useCache, S = void 0 === O ? void 0 : O, _ = o.signal, u()(r, "`type` argument for requests is required."), u()(n, "`identifier` argument for requests is required."), u()(a, "`datapoint` argument for requests is required."), w = "GET" === b && (void 0 !== S ? S : E()), j = y(r, n, a, h), !w) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.next = 9, Object(f.b)(j);
                                    case 9:
                                        if (k = t.sent, I = k.cacheHit, T = k.value, !k.isError) {
                                            t.next = 16;
                                            break
                                        }
                                        throw m(T), T;
                                    case 16:
                                        if (!I) {
                                            t.next = 18;
                                            break
                                        }
                                        return t.abrupt("return", T);
                                    case 18:
                                        return t.prev = 18, t.next = 21, Object(s.default)({
                                            data: c,
                                            method: b,
                                            signal: _,
                                            path: Object(l.a)("/google-site-kit/v1/".concat(r, "/").concat(n, "/data/").concat(a), h)
                                        });
                                    case 21:
                                        if (D = t.sent, !w) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.next = 25, Object(f.d)(j, D, {
                                            ttl: p
                                        });
                                    case 25:
                                        return t.abrupt("return", D);
                                    case 28:
                                        if (t.prev = 28, t.t0 = t.catch(18), !(null == _ ? void 0 : _.aborted)) {
                                            t.next = 32;
                                            break
                                        }
                                        throw t.t0;
                                    case 32:
                                        if (!(null === t.t0 || void 0 === t.t0 || null === (x = t.t0.data) || void 0 === x ? void 0 : x.cacheTTL)) {
                                            t.next = 35;
                                            break
                                        }
                                        return t.next = 35, Object(f.d)(j, t.t0, {
                                            ttl: t.t0.data.cacheTTL,
                                            isError: !0
                                        });
                                    case 35:
                                        throw Object(g.a)({
                                            method: b,
                                            datapoint: a,
                                            type: r,
                                            identifier: n,
                                            error: t.t0
                                        }), m(t.t0), e.console.error("Google Site Kit API Error", "method:".concat(b), "datapoint:".concat(a), "type:".concat(r), "identifier:".concat(n), 'error:"'.concat(t.t0.message, '"')), t.t0;
                                    case 39:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [18, 28]
                            ])
                        })));
                        return function(e, r, n) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    O = function() {
                        var e = o()(i.a.mark((function e(t, r, n, a) {
                            var o, c, u, s, l, f, d = arguments;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = d.length > 4 && void 0 !== d[4] ? d[4] : {}, c = o.cacheTTL, u = void 0 === c ? 3600 : c, s = o.useCache, l = void 0 === s ? void 0 : s, f = o.signal, e.abrupt("return", h(t, r, n, {
                                            cacheTTL: u,
                                            queryParams: a,
                                            useCache: l,
                                            signal: f
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r, n, i) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    S = function() {
                        var e = o()(i.a.mark((function e(t, r, n, a) {
                            var o, c, u, s, l, f, d, p = arguments;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = p.length > 4 && void 0 !== p[4] ? p[4] : {}, c = o.method, u = void 0 === c ? "POST" : c, s = o.queryParams, l = void 0 === s ? {} : s, f = o.signal, e.next = 3, h(t, r, n, {
                                            bodyParams: {
                                                data: a
                                            },
                                            method: u,
                                            queryParams: l,
                                            useCache: !1,
                                            signal: f
                                        });
                                    case 3:
                                        return d = e.sent, e.next = 6, _(t, r, n);
                                    case 6:
                                        return e.abrupt("return", d);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r, n, i) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    E = function() {
                        return b
                    },
                    _ = function() {
                        var e = o()(i.a.mark((function e(t, r, n) {
                            var a;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = y(t, r, n), e.next = 3, Object(f.c)();
                                    case 3:
                                        e.sent.forEach((function(e) {
                                            0 === e.indexOf(a) && Object(f.a)(e)
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    w = {
                        invalidateCache: _,
                        get: O,
                        set: S,
                        setUsingCache: function(e) {
                            return b = !!e
                        },
                        usingCache: E
                    };
                t.b = w
            }).call(this, r(18))
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
        43: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return i
            }));
            var n = "core/ui",
                i = "activeContextID"
        },
        443: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return s
            }));
            var n = r(5),
                i = r.n(n),
                a = r(14),
                o = r.n(a),
                c = r(11),
                u = ["fetch_error"];

            function s(e) {
                return l.apply(this, arguments)
            }

            function l() {
                return (l = o()(i.a.mark((function e(t) {
                    var r, n, a, o, s, l, f, d;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (a = t.method, o = t.type, s = t.identifier, l = t.datapoint, (f = t.error) && !u.includes(null == f ? void 0 : f.code)) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return d = "code: ".concat(f.code), (null === (r = f.data) || void 0 === r ? void 0 : r.reason) && (d += ", reason: ".concat(f.data.reason)), e.next = 7, Object(c.w)("api_error", "".concat(a, ":").concat(o, "/").concat(s, "/data/").concat(l), "".concat(f.message, " (").concat(d, ")"), (null === (n = f.data) || void 0 === n ? void 0 : n.status) || f.code);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        45: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return S
            }));
            var n = r(5),
                i = r.n(n),
                a = r(6),
                o = r.n(a),
                c = r(9),
                u = r.n(c),
                s = r(57),
                l = r.n(s),
                f = r(54),
                d = r(76),
                p = r(11);

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

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(r), !0).forEach((function(t) {
                        o()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
                m = function() {},
                h = f.a.clearError,
                O = f.a.receiveError,
                S = function(e) {
                    var t, r, n = i.a.mark(N),
                        a = e.baseName,
                        c = e.controlCallback,
                        s = e.reducerCallback,
                        f = void 0 === s ? b : s,
                        g = e.argsToParams,
                        S = void 0 === g ? y : g,
                        E = e.validateParams,
                        _ = void 0 === E ? m : E;
                    u()(a, "baseName is required."), u()("function" == typeof c, "controlCallback is required and must be a function."), u()("function" == typeof f, "reducerCallback must be a function."), u()("function" == typeof S, "argsToParams must be a function."), u()("function" == typeof _, "validateParams must be a function.");
                    try {
                        _(S()), r = !1
                    } catch (e) {
                        r = !0
                    }
                    var w = Object(d.b)(a),
                        j = Object(d.a)(a),
                        k = "FETCH_".concat(j),
                        I = "START_".concat(k),
                        T = "FINISH_".concat(k),
                        D = "CATCH_".concat(k),
                        x = "RECEIVE_".concat(j),
                        R = "fetch".concat(w),
                        A = "receive".concat(w),
                        P = "isFetching".concat(w),
                        C = o()({}, P, {});

                    function N(e, t) {
                        var r, o;
                        return i.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, {
                                        payload: {
                                            params: e
                                        },
                                        type: I
                                    };
                                case 2:
                                    return n.next = 4, h(a, t);
                                case 4:
                                    return n.prev = 4, n.next = 7, {
                                        payload: {
                                            params: e
                                        },
                                        type: k
                                    };
                                case 7:
                                    return r = n.sent, n.next = 10, U[A](r, e);
                                case 10:
                                    return n.next = 12, {
                                        payload: {
                                            params: e
                                        },
                                        type: T
                                    };
                                case 12:
                                    n.next = 23;
                                    break;
                                case 14:
                                    return n.prev = 14, n.t0 = n.catch(4), o = n.t0, n.next = 19, O(o, a, t);
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
                    var U = (t = {}, o()(t, R, (function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            var n = S.apply(void 0, t);
                            return _(n), N(n, t)
                        })), o()(t, A, (function(e, t) {
                            return u()(void 0 !== e, "response is required."), r ? (u()(l()(t), "params is required."), _(t)) : t = {}, {
                                payload: {
                                    response: e,
                                    params: t
                                },
                                type: x
                            }
                        })), t),
                        L = o()({}, k, (function(e) {
                            var t = e.payload;
                            return c(t.params)
                        })),
                        q = o()({}, P, (function(e) {
                            if (void 0 === e[P]) return !1;
                            var t;
                            try {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                                t = S.apply(void 0, n), _(t)
                            } catch (e) {
                                return !1
                            }
                            return !!e[P][Object(p.v)(t)]
                        }));
                    return {
                        initialState: C,
                        actions: U,
                        controls: L,
                        reducer: function(e, t) {
                            var r = t.type,
                                n = t.payload;
                            switch (r) {
                                case I:
                                    var i = n.params;
                                    return v(v({}, e), {}, o()({}, P, v(v({}, e[P]), {}, o()({}, Object(p.v)(i), !0))));
                                case x:
                                    var a = n.response,
                                        c = n.params;
                                    return f(e, a, c);
                                case T:
                                    var u = n.params;
                                    return v(v({}, e), {}, o()({}, P, v(v({}, e[P]), {}, o()({}, Object(p.v)(u), !1))));
                                case D:
                                    var s = n.params;
                                    return v(v({}, e), {}, o()({}, P, v(v({}, e[P]), {}, o()({}, Object(p.v)(s), !1))));
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
                return a
            })), r.d(t, "d", (function() {
                return o
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

            function u(e, t) {
                if (!Object(n.a)(e)) return e;
                if (e.length <= t) return e;
                var r = new URL(e),
                    i = e.replace(r.origin, "");
                if (i.length < t) return i;
                var a = i.length - Math.floor(t) + 1;
                return "…" + i.substr(a)
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
                return v
            })), r.d(t, "b", (function() {
                return b
            }));
            var n = r(6),
                i = r.n(n),
                a = r(29),
                o = r.n(a),
                c = r(9),
                u = r.n(c),
                s = r(78),
                l = r.n(s),
                f = r(11);

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

            function p(e) {
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

            function g(e, t) {
                if (t && Array.isArray(t)) {
                    var r = t.map((function(e) {
                        return "object" === o()(e) ? Object(f.v)(e) : e
                    }));
                    return "".concat(e, "::").concat(l()(JSON.stringify(r)))
                }
                return e
            }
            var v = {
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
                        return t || r ? (u()(t, "baseName is required."), i[g(t, r)]) : n
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
                    actions: v,
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "RECEIVE_ERROR":
                                var a = n.baseName,
                                    o = n.args,
                                    c = n.error;
                                return p(p({}, e), {}, a ? {
                                    errors: p(p({}, e.errors || {}), {}, i()({}, g(a, o), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var u = n.baseName,
                                    s = n.args,
                                    l = p({}, e);
                                if (u) {
                                    var f = g(u, s);
                                    l.errors = p({}, e.errors || {}), delete l.errors[f]
                                } else l.error = void 0;
                                return l;
                            case "CLEAR_ERRORS":
                                var d = n.baseName,
                                    v = p({}, e);
                                if (d)
                                    for (var b in v.errors = p({}, e.errors || {}), v.errors)(b === d || b.startsWith("".concat(d, "::"))) && delete v.errors[b];
                                else v.errors = {}, v.error = void 0;
                                return v;
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
                return p
            })), r.d(t, "g", (function() {
                return g
            })), r.d(t, "h", (function() {
                return f.a
            })), r.d(t, "d", (function() {
                return v
            })), r.d(t, "c", (function() {
                return y
            })), r.d(t, "i", (function() {
                return d
            }));
            var n = "Invalid dateString parameter, it must be a string.",
                i = 'Invalid date range, it must be a string with the format "last-x-days".',
                a = r(9),
                o = r.n(a),
                c = r(35),
                u = function(e) {
                    var t = new Date(e);
                    o()(Object(c.a)(t), "Date param must construct to a valid date instance or be a valid date instance itself.");
                    var r = "".concat(t.getMonth() + 1),
                        n = "".concat(t.getDate());
                    return [t.getFullYear(), r.length < 2 ? "0".concat(r) : r, n.length < 2 ? "0".concat(n) : n].join("-")
                },
                s = r(12),
                l = r.n(s),
                f = r(42),
                d = function(e) {
                    o()(Object(f.a)(e), n);
                    var t = e.split("-"),
                        r = l()(t, 3),
                        i = r[0],
                        a = r[1],
                        c = r[2];
                    return new Date(i, a - 1, c)
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = d(e);
                    return r.setDate(r.getDate() - t), u(r)
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e.split("-");
                    return 3 === t.length && "last" === t[0] && !Number.isNaN(t[1]) && !Number.isNaN(parseFloat(t[1])) && "days" === t[2]
                };

            function v(e) {
                var t = e.match(/last-(\d+)-days/);
                if (t && t[1]) return parseInt(t[1], 10);
                throw new Error("Unrecognized date range slug.")
            }
            var b = r(1);

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
        62: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    i = r.n(n),
                    a = r(8),
                    o = r.n(a);

                function ChangeArrow(t) {
                    var r = t.direction,
                        n = t.invertColor,
                        i = t.width,
                        a = t.height;
                    return e.createElement("svg", {
                        className: o()("googlesitekit-change-arrow", "googlesitekit-change-arrow--".concat(r), {
                            "googlesitekit-change-arrow--inverted-color": n
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
                i = r.n(n),
                a = r(69),
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        __html: a.a.sanitize(e, t)
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
                    return _
                })), r.d(t, "b", (function() {
                    return w
                })), r.d(t, "a", (function() {
                    return j
                }));
                var n = r(12),
                    i = r.n(n),
                    a = r(29),
                    o = r.n(a),
                    c = r(6),
                    u = r.n(c),
                    s = r(17),
                    l = r.n(s),
                    f = r(26),
                    d = r(67),
                    p = r.n(d),
                    g = r(1);

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

                function b(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? v(Object(r), !0).forEach((function(t) {
                            u()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var y = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = m(e, t),
                            n = r.formatUnit,
                            i = r.formatDecimal;
                        try {
                            return n()
                        } catch (e) {
                            return i()
                        }
                    },
                    m = function(e) {
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
                                var a = t.unitDisplay,
                                    o = b(b({
                                        unitDisplay: void 0 === a ? "short" : a
                                    }, l()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? _(i, b(b({}, o), {}, {
                                    unit: "second"
                                })) : Object(g.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(g._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), i ? _(i, b(b({}, o), {}, {
                                        unit: "second"
                                    })) : "", n ? _(n, b(b({}, o), {}, {
                                        unit: "minute"
                                    })) : "", r ? _(r, b(b({}, o), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var t = Object(g.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(g.__)("%ds", "google-site-kit"), i);
                                if (0 === e) return t;
                                var a = Object(g.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(g.__)("%dm", "google-site-kit"), n),
                                    o = Object(g.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(g.__)("%dh", "google-site-kit"), r);
                                return Object(g.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(g._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), i ? t : "", n ? a : "", r ? o : "").trim()
                            }
                        }
                    },
                    h = function(e) {
                        return 1e6 <= e ? Math.round(e / 1e5) / 10 : 1e4 <= e ? Math.round(e / 1e3) : 1e3 <= e ? Math.round(e / 100) / 10 : e
                    },
                    O = function(e) {
                        var t = {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        };
                        return 1e6 <= e ? Object(g.sprintf)( // translators: %s: an abbreviated number in millions.
                            Object(g.__)("%sM", "google-site-kit"), _(h(e), e % 10 == 0 ? {} : t)) : 1e4 <= e ? Object(g.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(g.__)("%sK", "google-site-kit"), _(h(e))) : 1e3 <= e ? Object(g.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(g.__)("%sK", "google-site-kit"), _(h(e), e % 10 == 0 ? {} : t)) : _(e, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    S = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(f.isFinite)(e) ? e : Number(e), Object(f.isFinite)(e) || (console.warn("Invalid number", e, o()(e)), e = 0);
                        var r = {};
                        if ("%" === t) r = {
                            style: "percent",
                            maximumFractionDigits: 2
                        };
                        else {
                            if ("s" === t) return y(e, {
                                unitDisplay: "narrow"
                            });
                            t && "string" == typeof t ? r = {
                                style: "currency",
                                currency: t
                            } : Object(f.isPlainObject)(t) && (r = b({}, t))
                        }
                        var n = r,
                            i = n.style,
                            a = void 0 === i ? "metric" : i;
                        return "metric" === a ? O(e) : "duration" === a ? y(e, t) : _(e, r)
                    },
                    E = p()(console.warn),
                    _ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? j() : r,
                            a = l()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(n, a).format(e)
                        } catch (t) {
                            E("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n), ", ").concat(JSON.stringify(a), " ).format( ").concat(o()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, u = ["signDisplay", "compactDisplay"], s = {}, f = 0, d = Object.entries(a); f < d.length; f++) {
                            var p = i()(d[f], 2),
                                g = p[0],
                                v = p[1];
                            c[g] && v === c[g] || (u.includes(g) || (s[g] = v))
                        }
                        try {
                            return new Intl.NumberFormat(n, s).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(n).format(e)
                        }
                    },
                    w = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? j() : r,
                            i = t.style,
                            a = void 0 === i ? "long" : i,
                            o = t.type,
                            c = void 0 === o ? "conjunction" : o;
                        if (Intl.ListFormat) {
                            var u = new Intl.ListFormat(n, {
                                style: a,
                                type: c
                            });
                            return u.format(e)
                        }
                        /* translators: used between list items, there is a space after the comma. */
                        var s = Object(g.__)(", ", "google-site-kit");
                        return e.join(s)
                    },
                    j = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            r = Object(f.get)(t, ["_googlesitekitLegacyData", "locale"]);
                        if (r) {
                            var n = r.match(/^(\w{2})?(_)?(\w{2})/);
                            if (n && n[0]) return n[0].replace(/_/g, "-")
                        }
                        return t.navigator.language
                    }
            }).call(this, r(18))
        },
        726: function(e, t, r) {
            "use strict";
            (function(e) {
                var n, i = r(5),
                    a = r.n(i),
                    o = r(14),
                    c = r.n(o),
                    u = r(32),
                    s = r(1),
                    l = r(24),
                    f = r(22),
                    d = r(37),
                    p = {
                        slug: "ideaHubModule",
                        contexts: [l.g, l.i],
                        version: "1.43.0",
                        checkRequirements: (n = c()(a.a.mark((function e(t) {
                            var r, n, i;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.__experimentalResolveSelect(f.a).getModules();
                                    case 2:
                                        if (r = t.select(f.a).isModuleActive("idea-hub"), n = t.select(f.a).isModuleConnected("idea-hub"), r && n) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 6:
                                        return e.next = 8, t.__experimentalResolveSelect(d.t).getNewIdeas();
                                    case 8:
                                        return i = e.sent, e.abrupt("return", !!i.length);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e) {
                            return n.apply(this, arguments)
                        }),
                        steps: [{
                            target: ".googlesitekit-widget--ideaHubIdeas",
                            title: Object(s.__)("Get inspiration for new topics to write about!", "google-site-kit"),
                            content: Object(s.__)("These ideas are based on unanswered searches related to the content of your site. They are organized by topics and will refresh every 2-3 days.", "google-site-kit")
                        }, {
                            target: ".googlesitekit-idea-hub__actions--create",
                            title: Object(s.__)("Start a draft", "google-site-kit"),
                            content: Object(s.__)("Found an interesting idea you want to write about? Create a draft! You can always get back to it later on the Posts page.", "google-site-kit")
                        }, {
                            target: ".googlesitekit-idea-hub__idea--single",
                            title: Object(s.__)("Save for later or dismiss", "google-site-kit"),
                            content: Object(s.__)('If you’re not ready to create a draft about an idea just yet, add it to your "Saved" list and revisit later. If you don’t like an idea, you can dismiss it from your list.', "google-site-kit"),
                            placement: "top"
                        }],
                        gaEventCategory: function(e) {
                            return "".concat(e, "_idea-hub-widget")
                        },
                        callback: function(t) {
                            var r = t.type,
                                n = t.index;
                            if ([u.b.STEP_BEFORE, u.b.STEP_AFTER].includes(r) && 2 === n) {
                                var i = "googlesitekit-idea-hub__actions--unhide",
                                    a = e.document.querySelector(".googlesitekit-idea-hub__actions--pin"),
                                    o = e.document.querySelector(".googlesitekit-idea-hub__actions--delete");
                                a && o && (r === u.b.STEP_BEFORE && (a.classList.add(i), o.classList.add(i)), r === u.b.STEP_AFTER && (a.classList.remove(i), o.classList.remove(i)))
                            }
                        }
                    };
                t.a = p
            }).call(this, r(18))
        },
        73: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return I
            })), r.d(t, "b", (function() {
                return T
            })), r.d(t, "c", (function() {
                return D
            })), r.d(t, "d", (function() {
                return R
            })), r.d(t, "e", (function() {
                return A
            })), r.d(t, "g", (function() {
                return C
            })), r.d(t, "f", (function() {
                return N
            }));
            var n, i = r(5),
                a = r.n(i),
                o = r(23),
                c = r.n(o),
                u = r(6),
                s = r.n(u),
                l = r(9),
                f = r.n(l),
                d = r(207),
                p = r.n(d),
                g = r(67),
                v = r.n(g),
                b = r(104);

            function y(e, t) {
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
                    t % 2 ? y(Object(r), !0).forEach((function(t) {
                        s()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var h = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = t.reduce((function(e, t) {
                            return m(m({}, e), t)
                        }), {}),
                        i = t.reduce((function(e, t) {
                            return [].concat(c()(e), c()(Object.keys(t)))
                        }), []),
                        a = x(i);
                    return f()(0 === a.length, "collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(a.join(", "), ". Check your data stores for duplicates.")), n
                },
                O = h,
                S = h,
                E = function() {
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
                _ = h,
                w = h,
                j = h,
                k = function(e) {
                    return e
                },
                I = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = j.apply(void 0, c()(t.map((function(e) {
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
                        reducer: E.apply(void 0, [n].concat(c()(t.map((function(e) {
                            return e.reducer || k
                        }))))),
                        resolvers: _.apply(void 0, c()(t.map((function(e) {
                            return e.resolvers || {}
                        })))),
                        selectors: w.apply(void 0, c()(t.map((function(e) {
                            return e.selectors || {}
                        }))))
                    }
                },
                T = {
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
                D = (n = {}, s()(n, "GET_REGISTRY", Object(b.d)((function(e) {
                    return function() {
                        return e
                    }
                }))), s()(n, "AWAIT", (function(e) {
                    return e.payload.value
                })), n),
                x = function(e) {
                    for (var t = [], r = {}, n = 0; n < e.length; n++) {
                        var i = e[n];
                        r[i] = r[i] >= 1 ? r[i] + 1 : 1, r[i] > 1 && t.push(i)
                    }
                    return t
                },
                R = {
                    actions: T,
                    controls: D,
                    reducer: k
                },
                A = function(e) {
                    return function(t) {
                        return P(e(t))
                    }
                },
                P = v()((function(e) {
                    return p()(e, (function(e, t) {
                        return function() {
                            var r = e.apply(void 0, arguments);
                            return f()(void 0 !== r, "".concat(t, "(...) is not resolved")), r
                        }
                    }))
                }));

            function C(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.negate,
                    n = void 0 !== r && r,
                    i = Object(b.e)((function(t) {
                        return function(r) {
                            var i = !n,
                                a = !!n;
                            try {
                                for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) c[u - 1] = arguments[u];
                                return e.apply(void 0, [t, r].concat(c)), i
                            } catch (e) {
                                return a
                            }
                        }
                    })),
                    a = Object(b.e)((function(t) {
                        return function(r) {
                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                            e.apply(void 0, [t, r].concat(i))
                        }
                    }));
                return {
                    safeSelector: i,
                    dangerousSelector: a
                }
            }

            function N(e, t) {
                return f()("function" == typeof e, "a validator function is required."), f()("function" == typeof t, "an action creator function is required."), f()("Generator" !== e[Symbol.toStringTag] && "GeneratorFunction" !== e[Symbol.toStringTag], "an action’s validator function must not be a generator."),
                    function() {
                        return e.apply(void 0, arguments), t.apply(void 0, arguments)
                    }
            }
        },
        730: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(32),
                    i = r(1),
                    a = r(24),
                    o = r(30),
                    c = {
                        slug: "unifiedDashboard",
                        contexts: [a.g, a.i],
                        version: "1.68.0",
                        gaEventCategory: function(e) {
                            return "".concat(e, "_unified-dashboard")
                        },
                        checkRequirements: function() {
                            return Object(o.b)("unifiedDashboard")
                        },
                        steps: [{
                            target: ".googlesitekit-navigation",
                            title: Object(i.__)("New! Navigate your dashboard easily with the dashboard tabs", "google-site-kit"),
                            content: Object(i.__)("Jump straight to the relevant section in your dashboard with just one click - no more scrolling.", "google-site-kit"),
                            placement: "bottom"
                        }, {
                            target: ".googlesitekit-entity-search",
                            title: Object(i.__)("Check stats for a specific post", "google-site-kit"),
                            content: Object(i.__)("Search by URL or by post title and your dashboard will be filtered to show stats just for that URL.", "google-site-kit"),
                            placement: "bottom"
                        }, {
                            target: ".googlesitekit-widget--searchFunnel",
                            title: Object(i.__)("See trends over time for your site’s Search metrics", "google-site-kit"),
                            content: Object(i.__)("The updated Search Funnel shows you a more comprehensive view of how traffic from Search is changing.", "google-site-kit"),
                            placement: "top-end"
                        }],
                        callback: function(t) {
                            var r = t.type,
                                i = t.index;
                            n.b.TOOLTIP === r && 2 === i && setTimeout((function() {
                                var t = e.document.querySelector(".googlesitekit-tour-tooltip"),
                                    r = e.document.querySelector("#wpadminbar");
                                t && r && e.scrollTo({
                                    top: e.scrollY + t.getBoundingClientRect().top - r.offsetHeight,
                                    behavior: "smooth"
                                })
                            }), 50)
                        }
                    };
                t.a = c
            }).call(this, r(18))
        },
        731: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(23),
                    i = r.n(n),
                    a = r(5),
                    o = r.n(a),
                    c = r(6),
                    u = r.n(c),
                    s = r(9),
                    l = r.n(s),
                    f = r(4),
                    d = r.n(f),
                    p = r(13),
                    g = r(22);

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

                function b(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? v(Object(r), !0).forEach((function(t) {
                            u()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var y = d.a.createRegistrySelector,
                    m = {
                        permissionError: null,
                        capabilities: void 0
                    },
                    h = {
                        clearPermissionScopeError: function() {
                            return {
                                payload: {},
                                type: "CLEAR_PERMISSION_SCOPE_ERROR"
                            }
                        },
                        setPermissionScopeError: function(e) {
                            return l()(e, "permissionError is required."), {
                                payload: {
                                    permissionError: e
                                },
                                type: "SET_PERMISSION_SCOPE_ERROR"
                            }
                        },
                        receiveCapabilities: function(e) {
                            return {
                                type: "RECEIVE_CAPABILITIES",
                                payload: {
                                    capabilities: e
                                }
                            }
                        }
                    },
                    O = {
                        getCapabilities: o.a.mark((function t() {
                            var r, n;
                            return o.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, d.a.commonActions.getRegistry();
                                    case 2:
                                        if (!t.sent.select(p.a).getCapabilities()) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 5:
                                        return (null === (r = e._googlesitekitUserData) || void 0 === r ? void 0 : r.permissions) || e.console.error("Could not load core/user permissions."), t.next = 8, h.receiveCapabilities(null === (n = e._googlesitekitUserData) || void 0 === n ? void 0 : n.permissions);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))
                    },
                    S = {
                        getPermissionScopeError: function(e) {
                            return e.permissionError
                        },
                        getCapabilities: function(e) {
                            return e.capabilities
                        },
                        getViewableModules: y((function(e) {
                            return function() {
                                var t = e(g.a).getModules();
                                if (void 0 !== t) return Object.values(t).reduce((function(t, r) {
                                    var n = e(p.a).hasCapability(p.d, r.slug);
                                    return r.shareable && n ? [].concat(i()(t), [r.slug]) : t
                                }), [])
                            }
                        })),
                        hasCapability: y((function(e) {
                            return function(t, r) {
                                for (var n = e(p.a).getCapabilities(), i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++) a[o - 2] = arguments[o];
                                if (a.length > 0 && (r = "".concat(r, "::").concat(JSON.stringify(a))), n) return !!n[r]
                            }
                        }))
                    };
                t.a = {
                    initialState: m,
                    actions: h,
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "CLEAR_PERMISSION_SCOPE_ERROR":
                                return b(b({}, e), {}, {
                                    permissionError: null
                                });
                            case "SET_PERMISSION_SCOPE_ERROR":
                                var i = n.permissionError;
                                return b(b({}, e), {}, {
                                    permissionError: i
                                });
                            case "RECEIVE_CAPABILITIES":
                                var a = n.capabilities;
                                return b(b({}, e), {}, {
                                    capabilities: a
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: O,
                    selectors: S
                }
            }).call(this, r(18))
        },
        732: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(5),
                    i = r.n(n),
                    a = r(6),
                    o = r.n(a),
                    c = r(9),
                    u = r.n(c),
                    s = r(287),
                    l = r(4),
                    f = r.n(l),
                    d = r(13);

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

                function g(e) {
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
                var v = f.a.createRegistrySelector,
                    b = {
                        connectURL: void 0,
                        initialVersion: void 0,
                        user: void 0,
                        verified: void 0
                    },
                    y = {
                        receiveConnectURL: function(e) {
                            return u()(e, "connectURL is required."), {
                                payload: {
                                    connectURL: e
                                },
                                type: "RECEIVE_CONNECT_URL"
                            }
                        },
                        receiveUserInfo: function(e) {
                            return u()(e, "userInfo is required."), {
                                payload: {
                                    user: e
                                },
                                type: "RECEIVE_USER_INFO"
                            }
                        },
                        receiveInitialSiteKitVersion: function(e) {
                            return u()(e, "initialVersion is required."), {
                                payload: {
                                    initialVersion: e
                                },
                                type: "RECEIVE_USER_INITIAL_SITE_KIT_VERSION"
                            }
                        },
                        receiveUserIsVerified: function(e) {
                            return u()(void 0 !== e, "userIsVerified is required."), {
                                payload: {
                                    verified: e
                                },
                                type: "RECEIVE_USER_IS_VERIFIED"
                            }
                        },
                        receiveUserInputState: function(e) {
                            return u()(e, "userInputState is required."), {
                                payload: {
                                    userInputState: e
                                },
                                type: "RECEIVE_USER_INPUT_STATE"
                            }
                        }
                    },
                    m = {
                        getConnectURL: i.a.mark((function t() {
                            var r, n;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, f.a.commonActions.getRegistry();
                                    case 2:
                                        if (r = t.sent, !(0, r.select)(d.a).getConnectURL()) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        if (e._googlesitekitUserData) {
                                            t.next = 9;
                                            break
                                        }
                                        return e.console.error("Could not load core/user info."), t.abrupt("return");
                                    case 9:
                                        return n = e._googlesitekitUserData.connectURL, t.next = 12, y.receiveConnectURL(n);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })),
                        getUser: i.a.mark((function t() {
                            var r, n;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, f.a.commonActions.getRegistry();
                                    case 2:
                                        if (r = t.sent, void 0 === (0, r.select)(d.a).getUser()) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        if (e._googlesitekitUserData) {
                                            t.next = 9;
                                            break
                                        }
                                        return e.console.error("Could not load core/user info."), t.abrupt("return");
                                    case 9:
                                        return n = e._googlesitekitUserData.user, t.next = 12, y.receiveUserInfo(n);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })),
                        getInitialSiteKitVersion: i.a.mark((function t() {
                            var r, n;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, f.a.commonActions.getRegistry();
                                    case 2:
                                        if (r = t.sent, void 0 === (0, r.select)(d.a).getInitialSiteKitVersion()) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        if (e._googlesitekitUserData) {
                                            t.next = 9;
                                            break
                                        }
                                        return e.console.error("Could not load core/user info."), t.abrupt("return");
                                    case 9:
                                        if (!(n = e._googlesitekitUserData.initialVersion)) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.next = 13, y.receiveInitialSiteKitVersion(n);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })),
                        isVerified: i.a.mark((function t() {
                            var r, n;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, f.a.commonActions.getRegistry();
                                    case 2:
                                        if (r = t.sent, void 0 === (0, r.select)(d.a).isVerified()) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        if (e._googlesitekitUserData) {
                                            t.next = 9;
                                            break
                                        }
                                        return e.console.error("Could not load core/user info."), t.abrupt("return");
                                    case 9:
                                        return n = e._googlesitekitUserData.verified, t.next = 12, y.receiveUserIsVerified(n);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })),
                        getUserInputState: i.a.mark((function t() {
                            var r, n;
                            return i.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, f.a.commonActions.getRegistry();
                                    case 2:
                                        if (r = t.sent, !(0, r.select)(d.a).getUserInputState()) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        if (e._googlesitekitUserData) {
                                            t.next = 9;
                                            break
                                        }
                                        return e.console.error("Could not load core/user info."), t.abrupt("return");
                                    case 9:
                                        return n = e._googlesitekitUserData.userInputState, t.next = 12, y.receiveUserInputState(n);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))
                    },
                    h = {
                        getUser: function(e) {
                            return e.user
                        },
                        getConnectURL: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t.additionalScopes,
                                n = void 0 === r ? [] : r,
                                i = t.redirectURL,
                                a = void 0 === i ? void 0 : i,
                                o = e.connectURL,
                                c = {
                                    redirect: a
                                };
                            if (void 0 !== o) {
                                if (null == n ? void 0 : n.length) {
                                    var u = n.map((function(e) {
                                        return e.replace(/^http(s)?:/, "gttp$1:")
                                    }));
                                    return Object(s.a)(o, g(g({}, c), {}, {
                                        additional_scopes: u
                                    }))
                                }
                                return Object(s.a)(o, c)
                            }
                        },
                        getID: v((function(e) {
                            return function() {
                                var t = e(d.a).getUser();
                                return void 0 !== t ? t.id : t
                            }
                        })),
                        getName: v((function(e) {
                            return function() {
                                var t = e(d.a).getUser();
                                return void 0 !== t ? t.name : t
                            }
                        })),
                        getEmail: v((function(e) {
                            return function() {
                                var t = e(d.a).getUser();
                                return void 0 !== t ? t.email : t
                            }
                        })),
                        getPicture: v((function(e) {
                            return function() {
                                var t = e(d.a).getUser();
                                return void 0 !== t ? t.picture : t
                            }
                        })),
                        getInitialSiteKitVersion: function(e) {
                            return e.initialVersion
                        },
                        isVerified: function(e) {
                            return e.verified
                        },
                        getUserInputState: function(e) {
                            return e.userInputState
                        }
                    };
                t.a = {
                    initialState: b,
                    actions: y,
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "RECEIVE_CONNECT_URL":
                                var i = n.connectURL;
                                return g(g({}, e), {}, {
                                    connectURL: i
                                });
                            case "RECEIVE_USER_INFO":
                                var a = n.user;
                                return g(g({}, e), {}, {
                                    user: a
                                });
                            case "RECEIVE_USER_INITIAL_SITE_KIT_VERSION":
                                var o = n.initialVersion;
                                return g(g({}, e), {}, {
                                    initialVersion: o
                                });
                            case "RECEIVE_USER_IS_VERIFIED":
                                var c = n.verified;
                                return g(g({}, e), {}, {
                                    verified: c
                                });
                            case "RECEIVE_USER_INPUT_STATE":
                                var u = n.userInputState;
                                return g(g({}, e), {}, {
                                    userInputState: u
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: m,
                    selectors: h
                }
            }).call(this, r(18))
        },
        76: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "c", (function() {
                return a
            }));
            var n = function(e) {
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
        80: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return u
                })), r.d(t, "b", (function() {
                    return s
                })), r.d(t, "c", (function() {
                    return f
                }));
                var n = r(12),
                    i = r.n(n),
                    a = r(1);

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
                    var a, o = !0,
                        u = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            u = !0, a = e
                        },
                        f: function() {
                            try {
                                o || null == r.return || r.return()
                            } finally {
                                if (u) throw a
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
                        var o = document.createElement("span");
                        o.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(e));
                        var c = document.createElement("span");
                        c.setAttribute("class", "plugin-count"), c.setAttribute("aria-hidden", "true"), c.textContent = e;
                        var u = document.createElement("span");
                        return u.setAttribute("class", "screen-reader-text"), u.textContent = Object(a.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(a._n)("%d notification", "%d notifications", e, "google-site-kit"), e), o.appendChild(c), o.appendChild(u), t && null === n && t.appendChild(o), r && null === i && r.appendChild(o), o
                    },
                    s = function() {
                        e.localStorage && e.localStorage.clear(), e.sessionStorage && e.sessionStorage.clear()
                    },
                    l = function(e) {
                        for (var t = location.search.substr(1).split("&"), r = {}, n = 0; n < t.length; n++) r[t[n].split("=")[0]] = decodeURIComponent(t[n].split("=")[1]);
                        return e ? r.hasOwnProperty(e) ? decodeURIComponent(r[e].replace(/\+/g, " ")) : "" : r
                    },
                    f = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                            r = new URL(t.href);
                        if (e) return r.searchParams && r.searchParams.get ? r.searchParams.get(e) : l(e);
                        var n, a = {},
                            c = o(r.searchParams.entries());
                        try {
                            for (c.s(); !(n = c.n()).done;) {
                                var u = i()(n.value, 2),
                                    s = u[0],
                                    f = u[1];
                                a[s] = f
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return a
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
                    return a
                })), r.d(t, "c", (function() {
                    return o
                })), r.d(t, "a", (function() {
                    return c
                }));
                var n = r(194),
                    i = r(62),
                    a = function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Number.isNaN(Number(t))) return "";
                        var a = r.invertColor,
                            o = void 0 !== a && a;
                        return Object(n.a)(e.createElement(i.a, {
                            direction: t > 0 ? "up" : "down",
                            invertColor: o
                        }))
                    },
                    o = function(e) {
                        var t, r, n, i, a, o, c, u, s, l, f, d, p, g, v;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (r = t.data) || void 0 === r || null === (n = r.rows) || void 0 === n ? void 0 : n.length) || (null == e || null === (i = e[0]) || void 0 === i || null === (a = i.data) || void 0 === a || null === (o = a.rows) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (u = c.metrics) || void 0 === u || null === (s = u[0]) || void 0 === s || null === (l = s.values) || void 0 === l ? void 0 : l[0]) === (null == e || null === (f = e[0]) || void 0 === f || null === (d = f.data) || void 0 === d || null === (p = d.totals) || void 0 === p || null === (g = p[0]) || void 0 === g || null === (v = g.values) || void 0 === v ? void 0 : v[0])
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
                    a = r(87),
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
                    var c = Object(a.a)(i, r);
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
                        trackEvent: Object(o.a)(i, r, c, n)
                    }
                }
            }).call(this, r(18))
        },
        87: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return a
                }));
                var n = r(51),
                    i = r(28);

                function a(t, r) {
                    var a, o = Object(n.a)(r);
                    return function() {
                        var r = e.document;
                        if (void 0 === a && (a = !!r.querySelector("script[".concat(i.b, "]"))), !a) {
                            var n = r.createElement("script");
                            n.setAttribute(i.b, ""), n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID, "&l=").concat(i.a), r.head.appendChild(n), o("js", new Date), o("config", t.trackingID, {
                                send_page_view: t.isSiteKitScreen
                            }), a = !0
                        }
                    }
                }
            }).call(this, r(18))
        },
        88: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return p
                }));
                var n = r(5),
                    i = r.n(n),
                    a = r(6),
                    o = r.n(a),
                    c = r(14),
                    u = r.n(c),
                    s = r(51),
                    l = r(30);

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

                function d(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? f(Object(r), !0).forEach((function(t) {
                            o()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function p(t, r, n, a) {
                    var o = Object(s.a)(r);
                    return function() {
                        var r = u()(i.a.mark((function r(c, u, s, f) {
                            var p, g, v, b, y, m, h, O, S, E;
                            return i.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (b = t.activeModules, y = t.referenceSiteURL, m = t.trackingEnabled, h = t.trackingID, O = t.userIDHash, m) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return n(), S = null !== (p = null === (g = e._googlesitekitUserData) || void 0 === g || null === (v = g.user) || void 0 === v ? void 0 : v.roles) && void 0 !== p ? p : [], E = {
                                            send_to: h,
                                            event_category: c,
                                            event_label: s,
                                            value: f,
                                            dimension1: y,
                                            dimension2: S.join(","),
                                            dimension3: O,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(l.a).join(","),
                                            dimension6: b.join(",")
                                        }, r.abrupt("return", new Promise((function(e) {
                                            var t, r, n = setTimeout((function() {
                                                    a.console.warn('Tracking event "'.concat(u, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                i = function() {
                                                    clearTimeout(n), e()
                                                };
                                            o("event", u, d(d({}, E), {}, {
                                                event_callback: i
                                            })), (null === (t = a._gaUserPrefs) || void 0 === t || null === (r = t.ioo) || void 0 === r ? void 0 : r.call(t)) && i()
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
                return o
            })), r.d(t, "b", (function() {
                return c
            }));
            r(57);
            var n = "missing_required_scopes",
                i = "insufficientPermissions",
                a = "forbidden";

            function o(e) {
                return (null == e ? void 0 : e.code) === n
            }

            function c(e) {
                var t;
                return [i, a].includes(null == e || null === (t = e.data) || void 0 === t ? void 0 : t.reason)
            }
        }
    },
    [
        [1082, 1, 0]
    ]
]);
(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [12], {
        1: function(e, t) {
            e.exports = googlesitekit.i18n
        },
        1084: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(4),
                o = r.n(n),
                i = r(5),
                a = r.n(i),
                c = r(6),
                u = r.n(c),
                s = r(33),
                l = r.n(s),
                f = r(15),
                p = r(45);

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

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), !0).forEach((function(t) {
                        u()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var g = o.a.createRegistrySelector,
                b = Object(p.a)({
                    baseName: "getConnection",
                    controlCallback: function() {
                        return l.a.get("core", "site", "connection", void 0, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t) {
                        return v(v({}, e), {}, {
                            connection: t
                        })
                    }
                }),
                y = {
                    connection: void 0
                },
                m = {
                    getConnection: a.a.mark((function e() {
                        var t;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, o.a.commonActions.getRegistry();
                                case 2:
                                    if (t = e.sent, t.select(f.c).getConnection()) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, b.actions.fetchGetConnection();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                O = {
                    getConnection: function(e) {
                        return e.connection
                    },
                    getOwnerID: g((function(e) {
                        return function() {
                            return (e(f.c).getConnection() || {}).ownerID
                        }
                    })),
                    hasConnectedAdmins: g((function(e) {
                        return function() {
                            return (e(f.c).getConnection() || {}).hasConnectedAdmins
                        }
                    })),
                    isConnected: g((function(e) {
                        return function() {
                            var t = e(f.c).getConnection();
                            return void 0 !== t ? t.connected : t
                        }
                    })),
                    isResettable: g((function(e) {
                        return function() {
                            var t = e(f.c).getConnection();
                            return void 0 !== t ? t.resettable : t
                        }
                    })),
                    isSetupCompleted: g((function(e) {
                        return function() {
                            var t = e(f.c).getConnection();
                            return void 0 !== t ? t.setupCompleted : t
                        }
                    })),
                    hasMultipleAdmins: g((function(e) {
                        return function() {
                            var t;
                            return null === (t = e(f.c).getConnection()) || void 0 === t ? void 0 : t.hasMultipleAdmins
                        }
                    }))
                },
                h = o.a.combineStores(b, {
                    initialState: y,
                    resolvers: m,
                    selectors: O
                }),
                j = (h.initialState, h.actions, h.controls, h.reducer, h.resolvers, h.selectors, h),
                w = r(17),
                S = r.n(w),
                R = r(9),
                P = r.n(R),
                E = r(57),
                k = r.n(E),
                L = r(1);

            function D(e, t) {
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
                    t % 2 ? D(Object(r), !0).forEach((function(t) {
                        u()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var x, A = {
                    internalServerError: void 0
                },
                U = {
                    setInternalServerError: function(e) {
                        P()(k()(e), "internalServerError must be a plain object.");
                        var t = e.title,
                            r = void 0 === t ? Object(L.__)("Internal Server Error", "google-site-kit") : t,
                            n = e.format,
                            o = void 0 === n ? "small" : n,
                            i = e.type;
                        return {
                            type: "SET_SERVER_ERROR",
                            payload: {
                                internalServerError: _({
                                    title: r,
                                    format: o,
                                    type: void 0 === i ? "win-error" : i
                                }, S()(e, ["title", "format", "type"]))
                            }
                        }
                    },
                    clearInternalServerError: function() {
                        return {
                            type: "CLEAR_SERVER_ERROR"
                        }
                    }
                },
                N = o.a.combineStores({
                    initialState: A,
                    actions: U,
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "SET_SERVER_ERROR":
                                return _(_({}, e), {}, {
                                    internalServerError: n.internalServerError
                                });
                            case "CLEAR_SERVER_ERROR":
                                return _(_({}, e), {}, {
                                    internalServerError: void 0
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: {},
                    selectors: {
                        getInternalServerError: function(e) {
                            return e.internalServerError
                        }
                    }
                }),
                I = (N.initialState, N.actions, N.controls, N.reducer, N.resolvers, N.selectors, N),
                C = r(14),
                T = r.n(C),
                M = r(109),
                F = r(287),
                q = r(254);

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

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(r), !0).forEach((function(t) {
                        u()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var K, B = o.a.createRegistryControl,
                z = Object(p.a)({
                    baseName: "getHTMLForURL",
                    argsToParams: function(e) {
                        return {
                            url: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.url;
                        P()(Object(M.a)(t), "a valid url is required to fetch HTML.")
                    },
                    controlCallback: (K = T()(a.a.mark((function e(t) {
                        var r, n, o, i, c;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.url, n = {
                                        credentials: "omit"
                                    }, o = {
                                        tagverify: 1,
                                        timestamp: Date.now()
                                    }, e.next = 5, fetch(Object(F.a)(r, o), n);
                                case 5:
                                    return i = e.sent, e.prev = 6, e.next = 9, i.text();
                                case 9:
                                    return c = e.sent, e.abrupt("return", void 0 !== c ? c : null);
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(6), e.abrupt("return", null);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [6, 13]
                        ])
                    }))), function(e) {
                        return K.apply(this, arguments)
                    }),
                    reducerCallback: function(e, t, r) {
                        var n = r.url;
                        return G(G({}, e), {}, {
                            htmlForURL: G(G({}, e.htmlForURL), {}, u()({}, n, t))
                        })
                    }
                }),
                $ = {
                    resetHTMLForURL: a.a.mark((function e(t) {
                        var r, n;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, o.a.commonActions.getRegistry();
                                case 2:
                                    return r = e.sent, n = r.dispatch, e.next = 6, {
                                        payload: {
                                            url: t
                                        },
                                        type: "RESET_HTML_FOR_URL"
                                    };
                                case 6:
                                    return e.abrupt("return", n(f.c).invalidateResolutionForStoreSelector("getHTMLForURL"));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    checkForSetupTag: a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, {
                                        payload: {},
                                        type: "CHECK_FOR_SETUP_TAG"
                                    };
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    waitForHTMLForURL: a.a.mark((function e(t) {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, {
                                        payload: {
                                            url: t
                                        },
                                        type: "WAIT_FOR_HTML_FOR_URL"
                                    };
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                V = (x = {}, u()(x, "WAIT_FOR_HTML_FOR_URL", B((function(e) {
                    return function(t) {
                        var r = t.payload.url;
                        return e.__experimentalResolveSelect(f.c).getHTMLForURL(r)
                    }
                }))), u()(x, "CHECK_FOR_SETUP_TAG", B((function(e) {
                    return T()(a.a.mark((function t() {
                        var r, n, o, i, c, u, s, p;
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return i = !1, t.prev = 1, t.next = 4, l.a.set("core", "site", "setup-tag");
                                case 4:
                                    return c = t.sent, o = c.token, t.next = 8, e.select(f.c).getHomeURL();
                                case 8:
                                    return u = t.sent, t.next = 11, e.dispatch(f.c).fetchGetHTMLForURL(u);
                                case 11:
                                    s = t.sent, n = s.response, r = s.error, t.next = 19;
                                    break;
                                case 16:
                                    t.prev = 16, t.t0 = t.catch(1), r = "check_fetch_failed";
                                case 19:
                                    return r || (p = Object(q.a)(n, [/<meta name="googlesitekit-setup" content="([a-z0-9-]+)"/]), (i = o === p) || (r = "setup_token_mismatch")), t.abrupt("return", {
                                        response: i,
                                        error: r
                                    });
                                case 21:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 16]
                        ])
                    })))
                }))), x),
                Y = {
                    getHTMLForURL: a.a.mark((function e(t) {
                        var r;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, o.a.commonActions.getRegistry();
                                case 2:
                                    if (r = e.sent, void 0 !== r.select(f.c).getHTMLForURL(t)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, z.actions.fetchGetHTMLForURL(t);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                J = o.a.combineStores(z, {
                    initialState: {
                        htmlForURL: {}
                    },
                    actions: $,
                    controls: V,
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "RESET_HTML_FOR_URL":
                                var o = n.url;
                                return G(G({}, e), {}, {
                                    htmlForURL: G(G({}, e.htmlForURL), {}, u()({}, o, void 0))
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: Y,
                    selectors: {
                        getHTMLForURL: function(e, t) {
                            return e.htmlForURL[t]
                        }
                    }
                }),
                W = (J.initialState, J.actions, J.controls, J.reducer, J.resolvers, J.selectors, J),
                Z = r(723),
                Q = o.a.createRegistrySelector,
                X = Object(p.a)({
                    baseName: "reset",
                    controlCallback: function() {
                        return l.a.set("core", "site", "reset")
                    }
                }),
                ee = {
                    reset: a.a.mark((function e() {
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, X.actions.fetchReset();
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                te = {
                    isDoingReset: Q((function(e) {
                        return function() {
                            return e(f.c).isFetchingReset()
                        }
                    }))
                },
                re = o.a.combineStores(X, {
                    initialState: {},
                    actions: ee,
                    selectors: te
                }),
                ne = (re.initialState, re.actions, re.controls, re.reducer, re.resolvers, re.selectors, re);

            function oe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? oe(Object(r), !0).forEach((function(t) {
                        u()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var ae = o.a.commonActions,
                ce = o.a.combineStores,
                ue = o.a.createRegistrySelector,
                se = Object(p.a)({
                    baseName: "getAdminBarSettings",
                    controlCallback: function() {
                        var e = T()(a.a.mark((function e() {
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", l.a.get("core", "site", "admin-bar-settings", void 0, {
                                            useCache: !1
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    reducerCallback: function(e, t) {
                        return ie(ie({}, e), {}, {
                            adminBarSettings: ie(ie({}, e.adminBarSettings || {}), t)
                        })
                    }
                }),
                le = Object(p.a)({
                    baseName: "setAdminBarSettings",
                    controlCallback: function(e) {
                        var t = e.enabled;
                        return l.a.set("core", "site", "admin-bar-settings", {
                            enabled: t
                        })
                    },
                    reducerCallback: function(e, t) {
                        return ie(ie({}, e), {}, {
                            adminBarSettings: ie(ie({}, e.adminBarSettings || {}), t)
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            enabled: e.enabled
                        }
                    },
                    validateParams: function(e) {
                        var t = e.enabled;
                        P()("boolean" == typeof t, "enabled must be of boolean type")
                    }
                }),
                fe = {
                    adminBarSettings: void 0
                },
                pe = {
                    setShowAdminBar: a.a.mark((function e(t) {
                        var r, n, o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, le.actions.fetchSetAdminBarSettings({
                                        enabled: t
                                    });
                                case 2:
                                    return r = e.sent, n = r.response, o = r.error, e.abrupt("return", {
                                        response: n,
                                        error: o
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                };
            var de = {
                    getAdminBarSettings: a.a.mark((function e() {
                        var t, r;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ae.getRegistry();
                                case 2:
                                    if (t = e.sent, r = t.select, void 0 !== r(f.c).getAdminBarSettings()) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, se.actions.fetchGetAdminBarSettings();
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                ve = {
                    getAdminBarSettings: function(e) {
                        return e.adminBarSettings
                    },
                    getShowAdminBar: ue((function(e) {
                        return function() {
                            var t;
                            return null === (t = e(f.c).getAdminBarSettings()) || void 0 === t ? void 0 : t.enabled
                        }
                    }))
                },
                ge = ce(se, le, {
                    initialState: fe,
                    actions: pe,
                    controls: {},
                    reducer: function(e, t) {
                        return t.type, e
                    },
                    resolvers: de,
                    selectors: ve
                }),
                be = (ge.initialState, ge.actions, ge.controls, ge.reducer, ge.resolvers, ge.selectors, ge),
                ye = r(11);

            function me(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? me(Object(r), !0).forEach((function(t) {
                        u()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : me(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var he = o.a.createRegistrySelector,
                je = {
                    selectors: {
                        getGoogleLocaleAwareURL: function(e, t) {
                            var r, n = Object(ye.j)(),
                                o = t || {},
                                i = o.website,
                                a = o.path,
                                c = o.query,
                                u = o.hash,
                                s = o.locale,
                                l = void 0 === s ? (null === (r = n.match(/^([a-zA-Z]+[-_]?[a-zA-Z]*)/)) || void 0 === r ? void 0 : r[0]) || n : s;
                            if (!a) return null;
                            var f = new URL(i);
                            f.pathname = a, f.hash = u || "";
                            var p = Oe(Oe({}, c), {}, {
                                hl: l
                            });
                            for (var d in p) f.searchParams.set(d, p[d]);
                            return f.toString()
                        },
                        getGoogleSupportURL: he((function(e) {
                            return function(t, r) {
                                return e(f.c).getGoogleLocaleAwareURL(Oe(Oe({}, r), {}, {
                                    website: "https://support.google.com"
                                }))
                            }
                        })),
                        getGooglePrivacyPolicyURL: he((function(e) {
                            return function() {
                                return e(f.c).getGoogleLocaleAwareURL({
                                    website: "https://myaccount.google.com",
                                    path: "/privacypolicy"
                                })
                            }
                        })),
                        getGoogleTermsURL: he((function(e) {
                            return function() {
                                return e(f.c).getGoogleLocaleAwareURL({
                                    website: "https://policies.google.com",
                                    path: "/terms"
                                })
                            }
                        }))
                    }
                };

            function we(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? we(Object(r), !0).forEach((function(t) {
                        u()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : we(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var Re = Object(p.a)({
                    baseName: "getDeveloperPluginState",
                    controlCallback: function() {
                        return l.a.get("core", "site", "developer-plugin", void 0, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t) {
                        return Se(Se({}, e), {}, {
                            developerPluginState: t
                        })
                    }
                }),
                Pe = {
                    developerPluginState: void 0
                },
                Ee = {
                    getDeveloperPluginState: a.a.mark((function e() {
                        var t;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, o.a.commonActions.getRegistry();
                                case 2:
                                    if (t = e.sent, t.select(f.c).getDeveloperPluginState()) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, Re.actions.fetchGetDeveloperPluginState();
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                ke = o.a.combineStores(Re, {
                    initialState: Pe,
                    resolvers: Ee,
                    selectors: {
                        getDeveloperPluginState: function(e) {
                            return e.developerPluginState
                        }
                    }
                }),
                Le = (ke.initialState, ke.actions, ke.controls, ke.reducer, ke.resolvers, ke.selectors, ke),
                De = r(360),
                _e = r(73),
                xe = r(54),
                Ae = "accepted",
                Ue = "dismissed",
                Ne = function(e) {
                    return "string" == typeof e
                },
                Ie = Object(p.a)({
                    baseName: "markNotification",
                    controlCallback: function(e) {
                        var t = e.notificationID,
                            r = e.notificationState;
                        return l.a.set("core", "site", "mark-notification", {
                            notificationID: t,
                            notificationState: r
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            notificationID: e.notificationID,
                            notificationState: e.notificationState
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.notificationID,
                            r = e.notificationState;
                        P()([Ae, Ue].includes(r), "notificationState must be accepted or dismissed."), P()(Ne(t), "a valid notification ID is required to mark a notification.")
                    }
                }),
                Ce = {
                    acceptNotification: Object(_e.f)((function(e) {
                        P()(Ne(e), "a valid notification ID is required to accept a notification.")
                    }), a.a.mark((function e(t) {
                        var r, n, o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ie.actions.fetchMarkNotification({
                                        notificationID: t,
                                        notificationState: Ae
                                    });
                                case 2:
                                    if (r = e.sent, n = r.response, !(o = r.error)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, xe.a.receiveError(o, "acceptNotification", [t]);
                                case 8:
                                    return e.abrupt("return", {
                                        response: n,
                                        error: o
                                    });
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    dismissNotification: Object(_e.f)((function(e) {
                        P()(Ne(e), "a valid notification ID is required to dismiss a notification.")
                    }), a.a.mark((function e(t) {
                        var r, n, o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ie.actions.fetchMarkNotification({
                                        notificationID: t,
                                        notificationState: Ue
                                    });
                                case 2:
                                    if (r = e.sent, n = r.response, !(o = r.error)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, xe.a.receiveError(o, "dismissNotification", [t]);
                                case 8:
                                    return e.abrupt("return", {
                                        response: n,
                                        error: o
                                    });
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                },
                Te = o.a.combineStores(Object(De.a)("core", "site", "notifications", {
                    storeName: f.c
                }), Ie, {
                    actions: Ce
                }),
                Me = r(1114);

            function Fe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Fe(Object(r), !0).forEach((function(t) {
                        u()(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fe(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var He = {
                    initialState: {
                        registryKey: void 0
                    },
                    actions: {
                        setRegistryKey: function(e) {
                            return P()(e, "registryKey is required."), {
                                payload: {
                                    registryKey: e
                                },
                                type: "SET_REGISTRY_KEY"
                            }
                        }
                    },
                    resolvers: {
                        getRegistryKey: a.a.mark((function e() {
                            var t, r;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, o.a.commonActions.getRegistry();
                                    case 2:
                                        if (t = e.sent, r = t.select(f.c).getRegistryKey()) {
                                            e.next = 8;
                                            break
                                        }
                                        return r = Object(Me.a)(), e.next = 8, t.dispatch(f.c).setRegistryKey(r);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))
                    },
                    reducer: function(e, t) {
                        var r = t.payload;
                        switch (t.type) {
                            case "SET_REGISTRY_KEY":
                                var n = r.registryKey;
                                return qe(qe({}, e), {}, {
                                    registryKey: n
                                });
                            default:
                                return e
                        }
                    },
                    selectors: {
                        getRegistryKey: function(e) {
                            return e.registryKey
                        }
                    }
                },
                Ge = o.a.combineStores(o.a.commonStore, j, I, W, Z.a, Le, ne, be, je, Te, He, Object(xe.b)());
            Ge.initialState, Ge.actions, Ge.controls, Ge.reducer, Ge.resolvers, Ge.selectors;
            o.a.registerStore(f.c, Ge)
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
                return d
            })), r.d(t, "c", (function() {
                return v.b
            })), r.d(t, "k", (function() {
                return v.c
            })), r.d(t, "r", (function() {
                return g.c
            })), r.d(t, "s", (function() {
                return g.d
            })), r.d(t, "o", (function() {
                return g.b
            })), r.d(t, "j", (function() {
                return g.a
            })), r.d(t, "e", (function() {
                return b.a
            })), r.d(t, "p", (function() {
                return h
            })), r.d(t, "d", (function() {
                return j
            })), r.d(t, "g", (function() {
                return w.c
            })), r.d(t, "u", (function() {
                return w.i
            })), r.d(t, "h", (function() {
                return S.b
            })), r.d(t, "n", (function() {
                return S.c
            })), r.d(t, "b", (function() {
                return S.a
            })), r.d(t, "m", (function() {
                return R.b
            })), r.d(t, "i", (function() {
                return R.a
            })), r.d(t, "q", (function() {
                return R.d
            })), r.d(t, "l", (function() {
                return P
            })), r.d(t, "a", (function() {
                return E
            })), r.d(t, "y", (function() {
                return k
            })), r.d(t, "f", (function() {
                return L
            }));
            var n = r(117),
                o = r.n(n),
                i = r(113),
                a = r.n(i),
                c = r(31),
                u = r(63),
                s = r(29),
                l = r.n(s),
                f = r(78),
                p = r.n(f),
                d = function(e) {
                    return p()(JSON.stringify(function e(t) {
                        var r = {};
                        return Object.keys(t).sort().forEach((function(n) {
                            var o = t[n];
                            o && "object" === l()(o) && !Array.isArray(o) && (o = e(o)), r[n] = o
                        })), r
                    }(e)))
                };
            var v = r(80),
                g = (r(84), r(72)),
                b = r(64);

            function y(e) {
                return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function m(e) {
                return "<p>".concat(e.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function O(e) {
                return e.replace(/\n/gi, "<br>")
            }

            function h(e) {
                for (var t = e, r = 0, n = [y, m, O]; r < n.length; r++) {
                    t = (0, n[r])(t)
                }
                return t
            }
            var j = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                w = r(59),
                S = r(85),
                R = r(50),
                P = function(e) {
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
                E = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var r = (t - e) / e;
                    return isNaN(r) || !o()(r) ? null : r
                },
                k = function(e) {
                    try {
                        return JSON.parse(e) && !!e
                    } catch (e) {
                        return !1
                    }
                },
                L = function(e) {
                    if (!e) return "";
                    var t = e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(t)
                    })).replace(/(\\)/g, "");
                    return a()(t)
                }
        },
        15: function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return n
            })), r.d(t, "a", (function() {
                return o
            })), r.d(t, "b", (function() {
                return i
            }));
            var n = "core/site",
                o = "primary",
                i = "secondary"
        },
        224: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(52),
                    o = r.n(n),
                    i = r(225),
                    a = e._googlesitekitAPIFetchData || {},
                    c = a.nonce,
                    u = a.nonceEndpoint,
                    s = a.preloadedData,
                    l = a.rootURL;
                o.a.nonceEndpoint = u, o.a.nonceMiddleware = o.a.createNonceMiddleware(c), o.a.rootURLMiddleware = o.a.createRootURLMiddleware(l), o.a.preloadingMiddleware = Object(i.a)(s), o.a.use(o.a.nonceMiddleware), o.a.use(o.a.mediaUploadMiddleware), o.a.use(o.a.rootURLMiddleware), o.a.use(o.a.preloadingMiddleware), t.default = o.a
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
                return function(e, o) {
                    if (r) return o(e);
                    setTimeout((function() {
                        r = !0
                    }), 1e3);
                    var i = e.parse,
                        a = void 0 === i || i,
                        c = e.path;
                    if ("string" == typeof e.path) {
                        var u, s = (null === (u = e.method) || void 0 === u ? void 0 : u.toUpperCase()) || "GET",
                            l = Object(n.getStablePath)(c);
                        if (a && "GET" === s && t[l]) {
                            var f = Promise.resolve(t[l].body);
                            return delete t[l], f
                        }
                        if ("OPTIONS" === s && t[s] && t[s][l]) {
                            var p = Promise.resolve(t[s][l]);
                            return delete t[s][l], p
                        }
                    }
                    return o(e)
                }
            }
        },
        254: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return g
            })), r.d(t, "b", (function() {
                return b
            }));
            var n = r(5),
                o = r.n(n),
                i = r(14),
                a = r.n(i),
                c = r(9),
                u = r.n(c),
                s = r(323),
                l = r.n(s),
                f = r(224),
                p = r(109),
                d = r(287),
                v = r(15),
                g = function(e, t) {
                    var r = t.find((function(t) {
                        return t.test(e)
                    }));
                    return !!r && r.exec(e)[1]
                },
                b = l()(function() {
                    var e = a()(o.a.mark((function e(t) {
                        var r, n, i, a;
                        return o.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.homeURL, n = t.ampMode, u()(Object(p.a)(r), "homeURL must be valid URL"), i = [r], v.b !== n) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.prev = 4, e.next = 7, Object(f.default)({
                                        path: "/wp/v2/posts?per_page=1"
                                    }).then((function(e) {
                                        return e.slice(0, 1).map((function(e) {
                                            return Object(d.a)(e.link, {
                                                amp: 1
                                            })
                                        })).pop()
                                    }));
                                case 7:
                                    (a = e.sent) && i.push(a), e.next = 14;
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
        28: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return o
            }));
            var n = "_googlesitekitDataLayer",
                o = "data-googlesitekit-gtag"
        },
        30: function(e, t, r) {
            "use strict";
            (function(e) {
                var n, o;
                r.d(t, "a", (function() {
                    return i
                })), r.d(t, "b", (function() {
                    return a
                }));
                var i = new Set((null === (n = e) || void 0 === n || null === (o = n._googlesitekitBaseData) || void 0 === o ? void 0 : o.enabledFeatures) || []),
                    a = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
                        return t instanceof Set && t.has(e)
                    }
            }).call(this, r(18))
        },
        31: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "a", (function() {
                    return g
                })), r.d(t, "b", (function() {
                    return v
                }));
                var n = r(86),
                    o = e._googlesitekitBaseData || {},
                    i = o.activeModules,
                    a = void 0 === i ? [] : i,
                    c = o.isSiteKitScreen,
                    u = o.trackingEnabled,
                    s = {
                        activeModules: a,
                        trackingEnabled: u,
                        trackingID: o.trackingID,
                        referenceSiteURL: o.referenceSiteURL,
                        userIDHash: o.userIDHash,
                        isSiteKitScreen: c
                    },
                    l = Object(n.a)(s),
                    f = l.enableTracking,
                    p = l.disableTracking,
                    d = (l.isTrackingEnabled, l.initializeSnippet),
                    v = l.trackEvent;

                function g(e) {
                    e ? f() : p()
                }
                c && u && d()
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
                    o = r.n(n),
                    i = r(6),
                    a = r.n(i),
                    c = r(9),
                    u = r.n(c),
                    s = r(33),
                    l = r.n(s),
                    f = r(4),
                    p = r.n(f),
                    d = r(45);

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

                function g(e) {
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
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        c = i.client,
                        s = void 0 === c || c,
                        f = i.server,
                        v = void 0 === f || f,
                        b = i.storeName,
                        y = void 0 === b ? void 0 : b;
                    u()(t, "type is required."), u()(r, "identifier is required."), u()(n, "datapoint is required.");
                    var m = y || "".concat(t, "/").concat(r),
                        O = {
                            serverNotifications: v ? void 0 : {},
                            clientNotifications: s ? void 0 : {}
                        },
                        h = Object(d.a)({
                            baseName: "getNotifications",
                            controlCallback: function() {
                                return l.a.get(t, r, n)
                            },
                            reducerCallback: function(e, t) {
                                return g(g({}, e), {}, {
                                    serverNotifications: t.reduce((function(e, t) {
                                        return g(g({}, e), {}, a()({}, t.id, t))
                                    }), {})
                                })
                            }
                        }),
                        j = {
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
                        w = {},
                        S = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                                r = arguments.length > 1 ? arguments[1] : void 0,
                                n = r.type,
                                o = r.payload;
                            switch (n) {
                                case "ADD_NOTIFICATION":
                                    var i = o.notification;
                                    return g(g({}, t), {}, {
                                        clientNotifications: g(g({}, t.clientNotifications || {}), {}, a()({}, i.id, i))
                                    });
                                case "REMOVE_NOTIFICATION":
                                    var c = o.id;
                                    if (void 0 === t.clientNotifications || void 0 === t.clientNotifications[c]) return void 0 !== t.serverNotifications && void 0 !== t.serverNotifications[c] && e.console.warn('Cannot remove server-side notification with ID "'.concat(c, '"; this may be changed in a future release.')), t;
                                    var u = g({}, t.clientNotifications);
                                    return delete u[c], g(g({}, t), {}, {
                                        clientNotifications: u
                                    });
                                default:
                                    return t
                            }
                        },
                        R = {
                            getNotifications: o.a.mark((function e() {
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.actions.fetchGetNotifications();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        };
                    v || delete R.getNotifications;
                    var P = {
                            getNotifications: function(e) {
                                var t = e.serverNotifications,
                                    r = e.clientNotifications;
                                return void 0 === t && void 0 === r ? t : Object.values(g(g({}, t || {}), r || {}))
                            }
                        },
                        E = p.a.combineStores(h, {
                            initialState: O,
                            actions: j,
                            controls: w,
                            reducer: S,
                            resolvers: R,
                            selectors: P
                        });
                    return g(g({}, E), {}, {
                        STORE_NAME: m
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
                return o
            }));
            var n = r(35),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = "string" == typeof e;
                    if (!t) return !1;
                    var r = e.split("-");
                    return 3 === r.length && Object(n.a)(new Date(e))
                }
        },
        45: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return j
            }));
            var n = r(5),
                o = r.n(n),
                i = r(6),
                a = r.n(i),
                c = r(9),
                u = r.n(c),
                s = r(57),
                l = r.n(s),
                f = r(54),
                p = r(76),
                d = r(11);

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

            function g(e) {
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
                y = function() {
                    return {}
                },
                m = function() {},
                O = f.a.clearError,
                h = f.a.receiveError,
                j = function(e) {
                    var t, r, n = o.a.mark(I),
                        i = e.baseName,
                        c = e.controlCallback,
                        s = e.reducerCallback,
                        f = void 0 === s ? b : s,
                        v = e.argsToParams,
                        j = void 0 === v ? y : v,
                        w = e.validateParams,
                        S = void 0 === w ? m : w;
                    u()(i, "baseName is required."), u()("function" == typeof c, "controlCallback is required and must be a function."), u()("function" == typeof f, "reducerCallback must be a function."), u()("function" == typeof j, "argsToParams must be a function."), u()("function" == typeof S, "validateParams must be a function.");
                    try {
                        S(j()), r = !1
                    } catch (e) {
                        r = !0
                    }
                    var R = Object(p.b)(i),
                        P = Object(p.a)(i),
                        E = "FETCH_".concat(P),
                        k = "START_".concat(E),
                        L = "FINISH_".concat(E),
                        D = "CATCH_".concat(E),
                        _ = "RECEIVE_".concat(P),
                        x = "fetch".concat(R),
                        A = "receive".concat(R),
                        U = "isFetching".concat(R),
                        N = a()({}, U, {});

                    function I(e, t) {
                        var r, a;
                        return o.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, {
                                        payload: {
                                            params: e
                                        },
                                        type: k
                                    };
                                case 2:
                                    return n.next = 4, O(i, t);
                                case 4:
                                    return n.prev = 4, n.next = 7, {
                                        payload: {
                                            params: e
                                        },
                                        type: E
                                    };
                                case 7:
                                    return r = n.sent, n.next = 10, C[A](r, e);
                                case 10:
                                    return n.next = 12, {
                                        payload: {
                                            params: e
                                        },
                                        type: L
                                    };
                                case 12:
                                    n.next = 23;
                                    break;
                                case 14:
                                    return n.prev = 14, n.t0 = n.catch(4), a = n.t0, n.next = 19, h(a, i, t);
                                case 19:
                                    return n.next = 21, h(a);
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
                    var C = (t = {}, a()(t, x, (function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            var n = j.apply(void 0, t);
                            return S(n), I(n, t)
                        })), a()(t, A, (function(e, t) {
                            return u()(void 0 !== e, "response is required."), r ? (u()(l()(t), "params is required."), S(t)) : t = {}, {
                                payload: {
                                    response: e,
                                    params: t
                                },
                                type: _
                            }
                        })), t),
                        T = a()({}, E, (function(e) {
                            var t = e.payload;
                            return c(t.params)
                        })),
                        M = a()({}, U, (function(e) {
                            if (void 0 === e[U]) return !1;
                            var t;
                            try {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                                t = j.apply(void 0, n), S(t)
                            } catch (e) {
                                return !1
                            }
                            return !!e[U][Object(d.v)(t)]
                        }));
                    return {
                        initialState: N,
                        actions: C,
                        controls: T,
                        reducer: function(e, t) {
                            var r = t.type,
                                n = t.payload;
                            switch (r) {
                                case k:
                                    var o = n.params;
                                    return g(g({}, e), {}, a()({}, U, g(g({}, e[U]), {}, a()({}, Object(d.v)(o), !0))));
                                case _:
                                    var i = n.response,
                                        c = n.params;
                                    return f(e, i, c);
                                case L:
                                    var u = n.params;
                                    return g(g({}, e), {}, a()({}, U, g(g({}, e[U]), {}, a()({}, Object(d.v)(u), !1))));
                                case D:
                                    var s = n.params;
                                    return g(g({}, e), {}, a()({}, U, g(g({}, e[U]), {}, a()({}, Object(d.v)(s), !1))));
                                default:
                                    return e
                            }
                        },
                        resolvers: {},
                        selectors: M
                    }
                }
        },
        50: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return o
            })), r.d(t, "a", (function() {
                return i
            })), r.d(t, "d", (function() {
                return a
            })), r.d(t, "c", (function() {
                return c
            })), r.d(t, "e", (function() {
                return u
            }));
            var n = r(109);

            function o(e) {
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
                    o = e.replace(r.origin, "");
                if (o.length < t) return o;
                var i = o.length - Math.floor(t) + 1;
                return "…" + o.substr(i)
            }
        },
        51: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r(28);

            function o(e) {
                return function() {
                    e[n.a] = e[n.a] || [], e[n.a].push(arguments)
                }
            }
        },
        54: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return g
            })), r.d(t, "b", (function() {
                return b
            }));
            var n = r(6),
                o = r.n(n),
                i = r(29),
                a = r.n(i),
                c = r(9),
                u = r.n(c),
                s = r(78),
                l = r.n(s),
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

            function d(e) {
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

            function v(e, t) {
                if (t && Array.isArray(t)) {
                    var r = t.map((function(e) {
                        return "object" === a()(e) ? Object(f.v)(e) : e
                    }));
                    return "".concat(e, "::").concat(l()(JSON.stringify(r)))
                }
                return e
            }
            var g = {
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
                            o = e.errors;
                        return t || r ? (u()(t, "baseName is required."), o[v(t, r)]) : n
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
                    actions: g,
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.type,
                            n = t.payload;
                        switch (r) {
                            case "RECEIVE_ERROR":
                                var i = n.baseName,
                                    a = n.args,
                                    c = n.error;
                                return d(d({}, e), {}, i ? {
                                    errors: d(d({}, e.errors || {}), {}, o()({}, v(i, a), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var u = n.baseName,
                                    s = n.args,
                                    l = d({}, e);
                                if (u) {
                                    var f = v(u, s);
                                    l.errors = d({}, e.errors || {}), delete l.errors[f]
                                } else l.error = void 0;
                                return l;
                            case "CLEAR_ERRORS":
                                var p = n.baseName,
                                    g = d({}, e);
                                if (p)
                                    for (var b in g.errors = d({}, e.errors || {}), g.errors)(b === p || b.startsWith("".concat(p, "::"))) && delete g.errors[b];
                                else g.errors = {}, g.error = void 0;
                                return g;
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
                return o
            })), r.d(t, "b", (function() {
                return n
            })), r.d(t, "e", (function() {
                return u
            })), r.d(t, "f", (function() {
                return d
            })), r.d(t, "g", (function() {
                return v
            })), r.d(t, "h", (function() {
                return f.a
            })), r.d(t, "d", (function() {
                return g
            })), r.d(t, "c", (function() {
                return y
            })), r.d(t, "i", (function() {
                return p
            }));
            var n = "Invalid dateString parameter, it must be a string.",
                o = 'Invalid date range, it must be a string with the format "last-x-days".',
                i = r(9),
                a = r.n(i),
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
                f = r(42),
                p = function(e) {
                    a()(Object(f.a)(e), n);
                    var t = e.split("-"),
                        r = l()(t, 3),
                        o = r[0],
                        i = r[1],
                        c = r[2];
                    return new Date(o, i - 1, c)
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = p(e);
                    return r.setDate(r.getDate() - t), u(r)
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e.split("-");
                    return 3 === t.length && "last" === t[0] && !Number.isNaN(t[1]) && !Number.isNaN(parseFloat(t[1])) && "days" === t[2]
                };

            function g(e) {
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
                    o = r.n(n),
                    i = r(8),
                    a = r.n(i);

                function ChangeArrow(t) {
                    var r = t.direction,
                        n = t.invertColor,
                        o = t.width,
                        i = t.height;
                    return e.createElement("svg", {
                        className: a()("googlesitekit-change-arrow", "googlesitekit-change-arrow--".concat(r), {
                            "googlesitekit-change-arrow--inverted-color": n
                        }),
                        width: o,
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
                    direction: o.a.string,
                    invertColor: o.a.bool,
                    width: o.a.number,
                    height: o.a.number
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
                o = r.n(n),
                i = r(69),
                a = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        __html: i.a.sanitize(e, t)
                    }
                };

            function c(e) {
                var t, r = "object" === o()(e) ? e.toString() : e;
                return null == r || null === (t = r.replace) || void 0 === t ? void 0 : t.call(r, /\/+$/, "")
            }
        },
        64: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r(2),
                o = function(e) {
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
                    return o
                }));
                var n = r(118),
                    o = r.n(n)()(e)
            }).call(this, r(18))
        },
        72: function(e, t, r) {
            "use strict";
            (function(e) {
                r.d(t, "c", (function() {
                    return j
                })), r.d(t, "d", (function() {
                    return S
                })), r.d(t, "b", (function() {
                    return R
                })), r.d(t, "a", (function() {
                    return P
                }));
                var n = r(12),
                    o = r.n(n),
                    i = r(29),
                    a = r.n(i),
                    c = r(6),
                    u = r.n(c),
                    s = r(17),
                    l = r.n(s),
                    f = r(26),
                    p = r(67),
                    d = r.n(p),
                    v = r(1);

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

                function b(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? g(Object(r), !0).forEach((function(t) {
                            u()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var y = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = m(e, t),
                            n = r.formatUnit,
                            o = r.formatDecimal;
                        try {
                            return n()
                        } catch (e) {
                            return o()
                        }
                    },
                    m = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = parseInt(e, 10), Number.isNaN(e) && (e = 0);
                        var r = Math.floor(e / 60 / 60),
                            n = Math.floor(e / 60 % 60),
                            o = Math.floor(e % 60);
                        return {
                            hours: r,
                            minutes: n,
                            seconds: o,
                            formatUnit: function() {
                                var i = t.unitDisplay,
                                    a = b(b({
                                        unitDisplay: void 0 === i ? "short" : i
                                    }, l()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? S(o, b(b({}, a), {}, {
                                    unit: "second"
                                })) : Object(v.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(v._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), o ? S(o, b(b({}, a), {}, {
                                        unit: "second"
                                    })) : "", n ? S(n, b(b({}, a), {}, {
                                        unit: "minute"
                                    })) : "", r ? S(r, b(b({}, a), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var t = Object(v.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(v.__)("%ds", "google-site-kit"), o);
                                if (0 === e) return t;
                                var i = Object(v.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(v.__)("%dm", "google-site-kit"), n),
                                    a = Object(v.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(v.__)("%dh", "google-site-kit"), r);
                                return Object(v.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(v._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), o ? t : "", n ? i : "", r ? a : "").trim()
                            }
                        }
                    },
                    O = function(e) {
                        return 1e6 <= e ? Math.round(e / 1e5) / 10 : 1e4 <= e ? Math.round(e / 1e3) : 1e3 <= e ? Math.round(e / 100) / 10 : e
                    },
                    h = function(e) {
                        var t = {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        };
                        return 1e6 <= e ? Object(v.sprintf)( // translators: %s: an abbreviated number in millions.
                            Object(v.__)("%sM", "google-site-kit"), S(O(e), e % 10 == 0 ? {} : t)) : 1e4 <= e ? Object(v.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(v.__)("%sK", "google-site-kit"), S(O(e))) : 1e3 <= e ? Object(v.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(v.__)("%sK", "google-site-kit"), S(O(e), e % 10 == 0 ? {} : t)) : S(e, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    j = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(f.isFinite)(e) ? e : Number(e), Object(f.isFinite)(e) || (console.warn("Invalid number", e, a()(e)), e = 0);
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
                            o = n.style,
                            i = void 0 === o ? "metric" : o;
                        return "metric" === i ? h(e) : "duration" === i ? y(e, t) : S(e, r)
                    },
                    w = d()(console.warn),
                    S = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? P() : r,
                            i = l()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(n, i).format(e)
                        } catch (t) {
                            w("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n), ", ").concat(JSON.stringify(i), " ).format( ").concat(a()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, u = ["signDisplay", "compactDisplay"], s = {}, f = 0, p = Object.entries(i); f < p.length; f++) {
                            var d = o()(p[f], 2),
                                v = d[0],
                                g = d[1];
                            c[v] && g === c[v] || (u.includes(v) || (s[v] = g))
                        }
                        try {
                            return new Intl.NumberFormat(n, s).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(n).format(e)
                        }
                    },
                    R = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.locale,
                            n = void 0 === r ? P() : r,
                            o = t.style,
                            i = void 0 === o ? "long" : o,
                            a = t.type,
                            c = void 0 === a ? "conjunction" : a;
                        if (Intl.ListFormat) {
                            var u = new Intl.ListFormat(n, {
                                style: i,
                                type: c
                            });
                            return u.format(e)
                        }
                        /* translators: used between list items, there is a space after the comma. */
                        var s = Object(v.__)(", ", "google-site-kit");
                        return e.join(s)
                    },
                    P = function() {
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
        723: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(17),
                    o = r.n(n),
                    i = r(5),
                    a = r.n(i),
                    c = r(6),
                    u = r.n(c),
                    s = r(9),
                    l = r.n(s),
                    f = r(724),
                    p = r.n(f),
                    d = r(287),
                    v = r(389),
                    g = r(4),
                    b = r.n(g),
                    y = r(15),
                    m = r(11);

                function O(e, t) {
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
                        t % 2 ? O(Object(r), !0).forEach((function(t) {
                            u()(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }
                var j = b.a.createRegistrySelector;

                function w(e) {
                    return j((function(t) {
                        return function() {
                            return (t(y.c).getSiteInfo() || {})[e]
                        }
                    }))
                }
                var S = {
                        siteInfo: void 0,
                        permaLink: !1
                    },
                    R = {
                        receiveSiteInfo: function(e) {
                            return l()(e, "siteInfo is required."), {
                                payload: {
                                    siteInfo: e
                                },
                                type: "RECEIVE_SITE_INFO"
                            }
                        },
                        receivePermaLinkParam: function(e) {
                            return l()(e, "permaLink is required."), {
                                payload: {
                                    permaLink: e
                                },
                                type: "RECEIVE_PERMALINK_PARAM"
                            }
                        }
                    },
                    P = {
                        getSiteInfo: a.a.mark((function t() {
                            var r, n, o, i, c, u, s, l, f, p, d, v, g, m, O, h;
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, b.a.commonActions.getRegistry();
                                    case 2:
                                        if (!t.sent.select(y.c).getSiteInfo()) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 5:
                                        if (e._googlesitekitBaseData && e._googlesitekitEntityData) {
                                            t.next = 8;
                                            break
                                        }
                                        return e.console.error("Could not load core/site info."), t.abrupt("return");
                                    case 8:
                                        return r = e._googlesitekitBaseData, n = r.adminURL, o = r.ampMode, i = r.homeURL, c = r.proxyPermissionsURL, u = r.proxySetupURL, s = r.referenceSiteURL, l = r.siteName, f = r.timezone, p = r.usingProxy, d = r.webStoriesActive, v = e._googlesitekitEntityData, g = v.currentEntityID, m = v.currentEntityTitle, O = v.currentEntityType, h = v.currentEntityURL, t.next = 12, R.receiveSiteInfo({
                                            adminURL: n,
                                            ampMode: o,
                                            currentEntityID: g,
                                            currentEntityTitle: m,
                                            currentEntityType: O,
                                            currentEntityURL: h,
                                            homeURL: i,
                                            proxyPermissionsURL: c,
                                            proxySetupURL: u,
                                            referenceSiteURL: s,
                                            siteName: l,
                                            timezone: f,
                                            usingProxy: !!p,
                                            webStoriesActive: d
                                        });
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))
                    },
                    E = {
                        getSiteInfo: function(e) {
                            return e.siteInfo
                        },
                        getAdminURL: j((function(e) {
                            return function(t, r) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    i = e(y.c).getSiteInfo() || {},
                                    a = i.adminURL;
                                if (void 0 === a || void 0 === r) return a;
                                var c = "/" === a[a.length - 1] ? a : "".concat(a, "/"),
                                    u = r,
                                    s = "admin.php";
                                if (-1 !== r.indexOf(".php?")) {
                                    var l = r.split("?");
                                    if (!(u = p.a.parse(l.pop()).page)) return a;
                                    s = l.shift()
                                }
                                n.page;
                                var f = o()(n, ["page"]);
                                return Object(d.a)("".concat(c).concat(s), h({
                                    page: u
                                }, f))
                            }
                        })),
                        getAMPMode: w("ampMode"),
                        getCurrentEntityID: w("currentEntityID"),
                        getCurrentEntityTitle: w("currentEntityTitle"),
                        getCurrentEntityType: w("currentEntityType"),
                        getCurrentEntityURL: w("currentEntityURL"),
                        getHomeURL: w("homeURL"),
                        getReferenceSiteURL: w("referenceSiteURL"),
                        getProxySetupURL: w("proxySetupURL"),
                        getProxyPermissionsURL: w("proxyPermissionsURL"),
                        getCurrentReferenceURL: j((function(e) {
                            return function() {
                                var t = e(y.c).getCurrentEntityURL();
                                return null !== t ? t : e(y.c).getReferenceSiteURL()
                            }
                        })),
                        isAMP: j((function(e) {
                            return function() {
                                var t = e(y.c).getAMPMode();
                                if (void 0 !== t) return !!t
                            }
                        })),
                        isPrimaryAMP: j((function(e) {
                            return function() {
                                var t = e(y.c).getAMPMode();
                                if (void 0 !== t) return t === y.a
                            }
                        })),
                        isSecondaryAMP: j((function(e) {
                            return function() {
                                var t = e(y.c).getAMPMode();
                                if (void 0 !== t) return t === y.b
                            }
                        })),
                        getTimezone: w("timezone"),
                        isUsingProxy: w("usingProxy"),
                        getSiteName: w("siteName"),
                        getPermaLinkParam: function(t) {
                            if (t.permaLink) return t.permaLink;
                            var r = Object(v.a)(e.location.href, "permaLink");
                            return r || !1
                        },
                        isWebStoriesActive: w("webStoriesActive"),
                        isSiteURLMatch: j((function(e) {
                            return function(t, r) {
                                var n = e(y.c).getReferenceSiteURL();
                                return Object(m.q)(n) === Object(m.q)(r)
                            }
                        })),
                        getSiteURLPermutations: j((function(e) {
                            return function() {
                                var t = e(y.c).getReferenceSiteURL(),
                                    r = [],
                                    n = new URL(t);
                                return n.hostname = n.hostname.replace(/^www\./i, ""), n.protocol = "http", r.push(Object(m.x)(n)), n.protocol = "https", r.push(Object(m.x)(n)), n.hostname = "www." + n.hostname, r.push(Object(m.x)(n)), n.protocol = "http", r.push(Object(m.x)(n)), r
                            }
                        }))
                    };
                t.a = {
                    initialState: S,
                    actions: R,
                    controls: {},
                    reducer: function(e, t) {
                        var r = t.payload;
                        switch (t.type) {
                            case "RECEIVE_SITE_INFO":
                                var n = r.siteInfo,
                                    o = n.adminURL,
                                    i = n.ampMode,
                                    a = n.currentEntityID,
                                    c = n.currentEntityTitle,
                                    u = n.currentEntityType,
                                    s = n.currentEntityURL,
                                    l = n.homeURL,
                                    f = n.proxyPermissionsURL,
                                    p = n.proxySetupURL,
                                    d = n.referenceSiteURL,
                                    v = n.siteName,
                                    g = n.timezone,
                                    b = n.usingProxy,
                                    y = n.webStoriesActive;
                                return h(h({}, e), {}, {
                                    siteInfo: {
                                        adminURL: o,
                                        ampMode: i,
                                        currentEntityID: parseInt(a, 10),
                                        currentEntityTitle: c,
                                        currentEntityType: u,
                                        currentEntityURL: s,
                                        homeURL: l,
                                        proxyPermissionsURL: f,
                                        proxySetupURL: p,
                                        referenceSiteURL: d,
                                        siteName: v,
                                        timezone: g,
                                        usingProxy: b,
                                        webStoriesActive: y
                                    }
                                });
                            case "RECEIVE_PERMALINK_PARAM":
                                var m = r.permaLink;
                                return h(h({}, e), {}, {
                                    permaLink: m
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: P,
                    selectors: E
                }
            }).call(this, r(18))
        },
        73: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return k
            })), r.d(t, "b", (function() {
                return L
            })), r.d(t, "c", (function() {
                return D
            })), r.d(t, "d", (function() {
                return x
            })), r.d(t, "e", (function() {
                return A
            })), r.d(t, "g", (function() {
                return N
            })), r.d(t, "f", (function() {
                return I
            }));
            var n, o = r(5),
                i = r.n(o),
                a = r(23),
                c = r.n(a),
                u = r(6),
                s = r.n(u),
                l = r(9),
                f = r.n(l),
                p = r(207),
                d = r.n(p),
                v = r(67),
                g = r.n(v),
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
            var O = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = t.reduce((function(e, t) {
                            return m(m({}, e), t)
                        }), {}),
                        o = t.reduce((function(e, t) {
                            return [].concat(c()(e), c()(Object.keys(t)))
                        }), []),
                        i = _(o);
                    return f()(0 === i.length, "collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(i.join(", "), ". Check your data stores for duplicates.")), n
                },
                h = O,
                j = O,
                w = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n, o = [].concat(t);
                    return "function" != typeof o[0] && (n = o.shift()),
                        function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return o.reduce((function(e, r) {
                                return r(e, t)
                            }), e)
                        }
                },
                S = O,
                R = O,
                P = O,
                E = function(e) {
                    return e
                },
                k = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = P.apply(void 0, c()(t.map((function(e) {
                        return e.initialState || {}
                    }))));
                    return {
                        initialState: n,
                        controls: j.apply(void 0, c()(t.map((function(e) {
                            return e.controls || {}
                        })))),
                        actions: h.apply(void 0, c()(t.map((function(e) {
                            return e.actions || {}
                        })))),
                        reducer: w.apply(void 0, [n].concat(c()(t.map((function(e) {
                            return e.reducer || E
                        }))))),
                        resolvers: S.apply(void 0, c()(t.map((function(e) {
                            return e.resolvers || {}
                        })))),
                        selectors: R.apply(void 0, c()(t.map((function(e) {
                            return e.selectors || {}
                        }))))
                    }
                },
                L = {
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
                D = (n = {}, s()(n, "GET_REGISTRY", Object(b.d)((function(e) {
                    return function() {
                        return e
                    }
                }))), s()(n, "AWAIT", (function(e) {
                    return e.payload.value
                })), n),
                _ = function(e) {
                    for (var t = [], r = {}, n = 0; n < e.length; n++) {
                        var o = e[n];
                        r[o] = r[o] >= 1 ? r[o] + 1 : 1, r[o] > 1 && t.push(o)
                    }
                    return t
                },
                x = {
                    actions: L,
                    controls: D,
                    reducer: E
                },
                A = function(e) {
                    return function(t) {
                        return U(e(t))
                    }
                },
                U = g()((function(e) {
                    return d()(e, (function(e, t) {
                        return function() {
                            var r = e.apply(void 0, arguments);
                            return f()(void 0 !== r, "".concat(t, "(...) is not resolved")), r
                        }
                    }))
                }));

            function N(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = t.negate,
                    n = void 0 !== r && r,
                    o = Object(b.e)((function(t) {
                        return function(r) {
                            var o = !n,
                                i = !!n;
                            try {
                                for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++) c[u - 1] = arguments[u];
                                return e.apply(void 0, [t, r].concat(c)), o
                            } catch (e) {
                                return i
                            }
                        }
                    })),
                    i = Object(b.e)((function(t) {
                        return function(r) {
                            for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                            e.apply(void 0, [t, r].concat(o))
                        }
                    }));
                return {
                    safeSelector: o,
                    dangerousSelector: i
                }
            }

            function I(e, t) {
                return f()("function" == typeof e, "a validator function is required."), f()("function" == typeof t, "an action creator function is required."), f()("Generator" !== e[Symbol.toStringTag] && "GeneratorFunction" !== e[Symbol.toStringTag], "an action’s validator function must not be a generator."),
                    function() {
                        return e.apply(void 0, arguments), t.apply(void 0, arguments)
                    }
            }
        },
        76: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return o
            })), r.d(t, "c", (function() {
                return i
            }));
            var n = function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                o = function(e) {
                    return e.replace(/([a-z0-9]{1})([A-Z]{1})/g, "$1_$2").toUpperCase()
                };

            function i(e) {
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
                    o = r.n(n),
                    i = r(1);

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
                                o = function() {};
                            return {
                                s: o,
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
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, a = !0,
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
                            u = !0, i = e
                        },
                        f: function() {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (u) throw i
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
                            o = document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");
                        if (n && o) return !1;
                        if (t = document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"), r = document.querySelector("#wp-admin-bar-google-site-kit .ab-item"), null === t && null === r) return !1;
                        var a = document.createElement("span");
                        a.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(e));
                        var c = document.createElement("span");
                        c.setAttribute("class", "plugin-count"), c.setAttribute("aria-hidden", "true"), c.textContent = e;
                        var u = document.createElement("span");
                        return u.setAttribute("class", "screen-reader-text"), u.textContent = Object(i.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(i._n)("%d notification", "%d notifications", e, "google-site-kit"), e), a.appendChild(c), a.appendChild(u), t && null === n && t.appendChild(a), r && null === o && r.appendChild(a), a
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
                        var n, i = {},
                            c = a(r.searchParams.entries());
                        try {
                            for (c.s(); !(n = c.n()).done;) {
                                var u = o()(n.value, 2),
                                    s = u[0],
                                    f = u[1];
                                i[s] = f
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
                    return a
                })), r.d(t, "a", (function() {
                    return c
                }));
                var n = r(194),
                    o = r(62),
                    i = function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Number.isNaN(Number(t))) return "";
                        var i = r.invertColor,
                            a = void 0 !== i && i;
                        return Object(n.a)(e.createElement(o.a, {
                            direction: t > 0 ? "up" : "down",
                            invertColor: a
                        }))
                    },
                    a = function(e) {
                        var t, r, n, o, i, a, c, u, s, l, f, p, d, v, g;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (r = t.data) || void 0 === r || null === (n = r.rows) || void 0 === n ? void 0 : n.length) || (null == e || null === (o = e[0]) || void 0 === o || null === (i = o.data) || void 0 === i || null === (a = i.rows) || void 0 === a || null === (c = a[0]) || void 0 === c || null === (u = c.metrics) || void 0 === u || null === (s = u[0]) || void 0 === s || null === (l = s.values) || void 0 === l ? void 0 : l[0]) === (null == e || null === (f = e[0]) || void 0 === f || null === (p = f.data) || void 0 === p || null === (d = p.totals) || void 0 === d || null === (v = d[0]) || void 0 === v || null === (g = v.values) || void 0 === g ? void 0 : g[0])
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
                    o = r.n(n),
                    i = r(87),
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
                            o()(e, t, r[t])
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
                        o = u(u({}, s), t);
                    o.referenceSiteURL && (o.referenceSiteURL = o.referenceSiteURL.toString().replace(/\/+$/, ""));
                    var c = Object(i.a)(o, r);
                    return {
                        enableTracking: function() {
                            o.trackingEnabled = !0
                        },
                        disableTracking: function() {
                            o.trackingEnabled = !1
                        },
                        initializeSnippet: c,
                        isTrackingEnabled: function() {
                            return !!o.trackingEnabled
                        },
                        trackEvent: Object(a.a)(o, r, c, n)
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
                    o = r(28);

                function i(t, r) {
                    var i, a = Object(n.a)(r);
                    return function() {
                        var r = e.document;
                        if (void 0 === i && (i = !!r.querySelector("script[".concat(o.b, "]"))), !i) {
                            var n = r.createElement("script");
                            n.setAttribute(o.b, ""), n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js?id=".concat(t.trackingID, "&l=").concat(o.a), r.head.appendChild(n), a("js", new Date), a("config", t.trackingID, {
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
                    return d
                }));
                var n = r(5),
                    o = r.n(n),
                    i = r(6),
                    a = r.n(i),
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

                function d(t, r, n, i) {
                    var a = Object(s.a)(r);
                    return function() {
                        var r = u()(o.a.mark((function r(c, u, s, f) {
                            var d, v, g, b, y, m, O, h, j, w;
                            return o.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (b = t.activeModules, y = t.referenceSiteURL, m = t.trackingEnabled, O = t.trackingID, h = t.userIDHash, m) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return n(), j = null !== (d = null === (v = e._googlesitekitUserData) || void 0 === v || null === (g = v.user) || void 0 === g ? void 0 : g.roles) && void 0 !== d ? d : [], w = {
                                            send_to: O,
                                            event_category: c,
                                            event_label: s,
                                            value: f,
                                            dimension1: y,
                                            dimension2: j.join(","),
                                            dimension3: h,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(l.a).join(","),
                                            dimension6: b.join(",")
                                        }, r.abrupt("return", new Promise((function(e) {
                                            var t, r, n = setTimeout((function() {
                                                    i.console.warn('Tracking event "'.concat(u, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                o = function() {
                                                    clearTimeout(n), e()
                                                };
                                            a("event", u, p(p({}, w), {}, {
                                                event_callback: o
                                            })), (null === (t = i._gaUserPrefs) || void 0 === t || null === (r = t.ioo) || void 0 === r ? void 0 : r.call(t)) && o()
                                        })));
                                    case 7:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })));
                        return function(e, t, n, o) {
                            return r.apply(this, arguments)
                        }
                    }()
                }
            }).call(this, r(18))
        }
    },
    [
        [1084, 1, 0]
    ]
]);
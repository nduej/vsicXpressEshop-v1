(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [20], {
        1: function(t, e) {
            t.exports = googlesitekit.i18n
        },
        10: function(t, e, r) {
            "use strict";
            r.d(e, "f", (function() {
                return n
            })), r.d(e, "a", (function() {
                return a
            })), r.d(e, "h", (function() {
                return o
            })), r.d(e, "g", (function() {
                return i
            })), r.d(e, "d", (function() {
                return c
            })), r.d(e, "e", (function() {
                return u
            })), r.d(e, "k", (function() {
                return s
            })), r.d(e, "c", (function() {
                return l
            })), r.d(e, "b", (function() {
                return f
            })), r.d(e, "s", (function() {
                return p
            })), r.d(e, "r", (function() {
                return d
            })), r.d(e, "t", (function() {
                return v
            })), r.d(e, "p", (function() {
                return g
            })), r.d(e, "q", (function() {
                return b
            })), r.d(e, "n", (function() {
                return y
            })), r.d(e, "o", (function() {
                return m
            })), r.d(e, "l", (function() {
                return h
            })), r.d(e, "m", (function() {
                return O
            })), r.d(e, "j", (function() {
                return w
            })), r.d(e, "i", (function() {
                return S
            }));
            var n = "modules/analytics",
                a = "account_create",
                o = "property_create",
                i = "profile_create",
                c = "analyticsAccountCreate",
                u = "analyticsSetup",
                s = "https://www.googleapis.com/auth/analytics.provision",
                l = "https://www.googleapis.com/auth/analytics.edit",
                f = 1,
                p = "dashboardAllTrafficWidgetDimensionName",
                d = "dashboardAllTrafficWidgetDimensionColor",
                v = "dashboardAllTrafficWidgetDimensionValue",
                g = "dashboardAllTrafficWidgetActiveRowIndex",
                b = "dashboardAllTrafficWidgetLoaded",
                y = "legacy",
                m = "ua",
                h = "ga4",
                O = "ga4-transitional",
                w = "ua",
                S = "ga4"
        },
        1085: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(4),
                a = r.n(n),
                o = r(41),
                i = r(5),
                c = r.n(i),
                u = r(6),
                s = r.n(u),
                l = r(33),
                f = r.n(l),
                p = r(45);

            function d(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(r), !0).forEach((function(e) {
                        s()(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var g = Object(p.a)({
                    baseName: "getAccountSummaries",
                    controlCallback: function() {
                        return f.a.get("modules", "analytics-4", "account-summaries", {}, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(t, e) {
                        return v(v({}, t), {}, {
                            accountSummaries: e
                        })
                    }
                }),
                b = {
                    accountSummaries: void 0
                },
                y = {
                    getAccountSummaries: c.a.mark((function t() {
                        var e;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    if (e = t.sent, void 0 !== e.select(o.b).getAccountSummaries()) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 7, g.actions.fetchGetAccountSummaries();
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))
                },
                m = a.a.combineStores(g, {
                    initialState: b,
                    actions: {},
                    controls: {},
                    reducer: function(t, e) {
                        e.type;
                        return t
                    },
                    resolvers: y,
                    selectors: {
                        getAccountSummaries: function(t) {
                            return t.accountSummaries
                        }
                    }
                }),
                h = (m.initialState, m.actions, m.controls, m.reducer, m.resolvers, m.selectors, m),
                O = {
                    isAdminAPIWorking: function(t) {
                        for (var e in t.errors)
                            if (e.startsWith("getProperties::") || e.startsWith("getWebDataStreams::") || e.startsWith("getAccountSummaries::")) return !1;
                        if (Object.keys(t.properties).length > 0) return !0
                    }
                },
                w = a.a.combineStores({
                    selectors: O
                }),
                S = (w.initialState, w.actions, w.controls, w.reducer, w.resolvers, w.selectors, w),
                j = r(136),
                k = r.n(j),
                x = r(14),
                D = r.n(x),
                A = r(9),
                E = r.n(A),
                P = r(73),
                _ = r(293),
                I = r(157),
                R = r(36),
                T = r(10);

            function C() {
                return (C = D()(c.a.mark((function t(e) {
                    var r, n, a, i, u, s, l, p, d, v, g, b, y;
                    return c.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (r = e.select, n = e.dispatch, (a = r(o.b).getPropertyID()) !== o.c) {
                                    t.next = 15;
                                    break
                                }
                                return i = r(T.f).getAccountID(), t.next = 6, n(o.b).createProperty(i);
                            case 6:
                                if (u = t.sent, s = u.response, !(l = u.error)) {
                                    t.next = 11;
                                    break
                                }
                                return t.abrupt("return", {
                                    error: l
                                });
                            case 11:
                                a = s._id, n(o.b).setPropertyID(a), n(o.b).setWebDataStreamID(o.d), n(o.b).setMeasurementID("");
                            case 15:
                                if (p = r(o.b).getWebDataStreamID(), !a || p !== o.d && Object(_.d)(p)) {
                                    t.next = 26;
                                    break
                                }
                                return t.next = 19, n(o.b).createWebDataStream(a);
                            case 19:
                                if (d = t.sent, v = d.response, !(g = d.error)) {
                                    t.next = 24;
                                    break
                                }
                                return t.abrupt("return", {
                                    error: g
                                });
                            case 24:
                                n(o.b).setWebDataStreamID(v._id), n(o.b).setMeasurementID(v.webStreamData.measurementId);
                            case 26:
                                if (!r(o.b).haveSettingsChanged()) {
                                    t.next = 33;
                                    break
                                }
                                return t.next = 29, n(o.b).saveSettings();
                            case 29:
                                if (b = t.sent, !(y = b.error)) {
                                    t.next = 33;
                                    break
                                }
                                return t.abrupt("return", {
                                    error: y
                                });
                            case 33:
                                return t.next = 35, f.a.invalidateCache("modules", "analytics-4");
                            case 35:
                                return t.abrupt("return", {});
                            case 36:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var N = k.a.createModuleStore("analytics-4", {
                    storeName: o.b,
                    settingSlugs: ["propertyID", "webDataStreamID", "measurementID", "useSnippet"],
                    submitChanges: function(t) {
                        return C.apply(this, arguments)
                    },
                    rollbackChanges: function(t) {
                        var e = t.select,
                            r = t.dispatch;
                        r(R.a).setValues(T.e, {
                            enableGA4: void 0
                        }), e(o.b).haveSettingsChanged() && r(o.b).rollbackSettings()
                    },
                    validateCanSubmitChanges: function(t) {
                        if (!1 !== t(o.b).isAdminAPIWorking()) {
                            var e = Object(P.e)(t)(o.b),
                                r = e.haveSettingsChanged,
                                n = e.isDoingSubmitChanges,
                                a = e.getPropertyID,
                                i = e.getWebDataStreamID;
                            (0, Object(P.e)(t)(T.f).haveSettingsChanged)() || E()(r(), I.b), E()(!n(), I.a);
                            var c = a();
                            E()(Object(_.c)(c), "a valid propertyID is required to submit changes"), c !== o.c && E()(Object(_.e)(i()), "a valid webDataStreamID is required to submit changes")
                        }
                    }
                }),
                M = r(23),
                L = r.n(M),
                U = r(15),
                W = r(11),
                G = r(772),
                F = r.n(G),
                q = r(773),
                $ = r.n(q);

            function H(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return B(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return B(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
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
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        c = !0, o = t
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

            function B(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function z(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? z(Object(r), !0).forEach((function(e) {
                        s()(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var V = a.a.createRegistryControl,
                J = a.a.createRegistrySelector,
                K = Object(p.a)({
                    baseName: "getWebDataStreams",
                    controlCallback: function(t) {
                        var e = t.propertyID;
                        return f.a.get("modules", "analytics-4", "webdatastreams", {
                            propertyID: e
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(t, e, r) {
                        var n = r.propertyID;
                        return Z(Z({}, t), {}, {
                            webdatastreams: Z(Z({}, t.webdatastreams), {}, s()({}, n, Array.isArray(e) ? e : []))
                        })
                    },
                    argsToParams: function(t) {
                        return {
                            propertyID: t
                        }
                    },
                    validateParams: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.propertyID;
                        E()(Object(_.b)(e), "A valid GA4 propertyID is required.")
                    }
                }),
                X = Object(p.a)({
                    baseName: "getWebDataStreamsBatch",
                    controlCallback: function(t) {
                        var e = t.propertyIDs;
                        return f.a.get("modules", "analytics-4", "webdatastreams-batch", {
                            propertyIDs: e
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(t, e) {
                        return Z(Z({}, t), {}, {
                            webdatastreams: Z(Z({}, t.webdatastreams), e || {})
                        })
                    },
                    argsToParams: function(t) {
                        return {
                            propertyIDs: t
                        }
                    },
                    validateParams: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.propertyIDs;
                        E()(Array.isArray(e), "GA4 propertyIDs must be an array."), e.forEach((function(t) {
                            E()(Object(_.b)(t), "A valid GA4 propertyID is required.")
                        }))
                    }
                }),
                Y = Object(p.a)({
                    baseName: "createWebDataStream",
                    controlCallback: function(t) {
                        var e = t.propertyID;
                        return f.a.set("modules", "analytics-4", "create-webdatastream", {
                            propertyID: e
                        })
                    },
                    reducerCallback: function(t, e, r) {
                        var n = r.propertyID;
                        return Z(Z({}, t), {}, {
                            webdatastreams: Z(Z({}, t.webdatastreams), {}, s()({}, n, [].concat(L()(t.webdatastreams[n] || []), [e])))
                        })
                    },
                    argsToParams: function(t) {
                        return {
                            propertyID: t
                        }
                    },
                    validateParams: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.propertyID;
                        E()(Object(_.b)(e), "A valid GA4 propertyID is required.")
                    }
                }),
                Q = {
                    createWebDataStream: Object(P.f)((function(t) {
                        E()(t, "GA4 propertyID is required.")
                    }), c.a.mark((function t(e) {
                        var r, n, a;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Y.actions.fetchCreateWebDataStream(e);
                                case 2:
                                    return r = t.sent, n = r.response, a = r.error, t.abrupt("return", {
                                        response: n,
                                        error: a
                                    });
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))),
                    matchWebDataStream: c.a.mark((function t(e) {
                        var r;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Q.waitForWebDataStreams(e);
                                case 2:
                                    return t.next = 4, a.a.commonActions.getRegistry();
                                case 4:
                                    return r = t.sent, t.abrupt("return", r.select(o.b).getMatchingWebDataStream(e));
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })),
                    waitForWebDataStreams: c.a.mark((function t(e) {
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, {
                                        payload: {
                                            propertyID: e
                                        },
                                        type: "WAIT_FOR_WEBDATASTREAMS"
                                    };
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))
                },
                tt = s()({}, "WAIT_FOR_WEBDATASTREAMS", V((function(t) {
                    var e = t.__experimentalResolveSelect;
                    return function() {
                        var t = D()(c.a.mark((function t(r) {
                            var n, a;
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = r.payload, a = n.propertyID, t.next = 4, e(o.b).getWebDataStreams(a);
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
                }))),
                et = {
                    getWebDataStreams: c.a.mark((function t(e) {
                        var r;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    if (r = t.sent, void 0 !== r.select(o.b).getWebDataStreams(e)) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 7, K.actions.fetchGetWebDataStreams(e);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })),
                    getWebDataStreamsBatch: c.a.mark((function t(e) {
                        var r, n, i, u, s, l;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    if (r = t.sent, n = r.select(o.b).getWebDataStreamsBatch(e) || {}, i = Object.keys(n), !((u = $()(e, i)).length > 0)) {
                                        t.next = 15;
                                        break
                                    }
                                    s = 0;
                                case 8:
                                    if (!(s < u.length)) {
                                        t.next = 15;
                                        break
                                    }
                                    return l = u.slice(s, s + o.a), t.next = 12, X.actions.fetchGetWebDataStreamsBatch(l);
                                case 12:
                                    s += o.a, t.next = 8;
                                    break;
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))
                },
                rt = {
                    getWebDataStreams: function(t, e) {
                        return t.webdatastreams[e]
                    },
                    getMatchingWebDataStream: J((function(t) {
                        return function(e, r) {
                            var n = t(o.b).getWebDataStreams(r);
                            if (void 0 !== n) {
                                var a, i = H(n);
                                try {
                                    for (i.s(); !(a = i.n()).done;) {
                                        var c, u = a.value;
                                        if (t(U.c).isSiteURLMatch(null === (c = u.webStreamData) || void 0 === c ? void 0 : c.defaultUri)) return u
                                    }
                                } catch (t) {
                                    i.e(t)
                                } finally {
                                    i.f()
                                }
                                return null
                            }
                        }
                    })),
                    getWebDataStreamsBatch: function(t, e) {
                        return F()(t.webdatastreams, e)
                    }
                },
                nt = a.a.combineStores(K, X, Y, {
                    initialState: {
                        webdatastreams: {}
                    },
                    actions: Q,
                    controls: tt,
                    reducer: function(t, e) {
                        e.type;
                        return t
                    },
                    resolvers: et,
                    selectors: rt
                }),
                at = (nt.initialState, nt.actions),
                ot = (nt.controls, nt.reducer, nt.resolvers, nt.selectors, nt),
                it = r(61);

            function ct(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return ut(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ut(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
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
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        c = !0, o = t
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

            function ut(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function st(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function lt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? st(Object(r), !0).forEach((function(e) {
                        s()(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : st(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var ft = a.a.commonActions,
                pt = a.a.createRegistryControl,
                dt = Object(p.a)({
                    baseName: "getProperty",
                    controlCallback: function(t) {
                        var e = t.propertyID;
                        return f.a.get("modules", "analytics-4", "property", {
                            propertyID: e
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(t, e, r) {
                        var n = r.propertyID;
                        return lt(lt({}, t), {}, {
                            propertiesByID: lt(lt({}, t.propertiesByID), {}, s()({}, n, e))
                        })
                    },
                    argsToParams: function(t) {
                        return {
                            propertyID: t
                        }
                    },
                    validateParams: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.propertyID;
                        E()(e, "propertyID is required.")
                    }
                }),
                vt = Object(p.a)({
                    baseName: "getProperties",
                    controlCallback: function(t) {
                        var e = t.accountID;
                        return f.a.get("modules", "analytics-4", "properties", {
                            accountID: e
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(t, e, r) {
                        var n = r.accountID;
                        return lt(lt({}, t), {}, {
                            properties: lt(lt({}, t.properties), {}, s()({}, n, e)),
                            propertiesByID: e.reduce((function(t, e) {
                                return lt(lt({}, t), {}, s()({}, e._id, e))
                            }), t.propertiesByID || {})
                        })
                    },
                    argsToParams: function(t) {
                        return {
                            accountID: t
                        }
                    },
                    validateParams: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.accountID;
                        E()(e, "accountID is required.")
                    }
                }),
                gt = Object(p.a)({
                    baseName: "createProperty",
                    controlCallback: function(t) {
                        var e = t.accountID;
                        return f.a.set("modules", "analytics-4", "create-property", {
                            accountID: e
                        })
                    },
                    reducerCallback: function(t, e, r) {
                        var n = r.accountID;
                        return lt(lt({}, t), {}, {
                            properties: lt(lt({}, t.properties), {}, s()({}, n, [].concat(L()(t.properties[n] || []), [e])))
                        })
                    },
                    argsToParams: function(t) {
                        return {
                            accountID: t
                        }
                    },
                    validateParams: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.accountID;
                        E()(e, "accountID is required.")
                    }
                }),
                bt = {
                    createProperty: function(t) {
                        return E()(t, "accountID is required."), c.a.mark((function e() {
                            var r, n, a;
                            return c.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, gt.actions.fetchCreateProperty(t);
                                    case 2:
                                        return r = e.sent, n = r.response, a = r.error, e.abrupt("return", {
                                            response: n,
                                            error: a
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))()
                    },
                    selectProperty: Object(P.f)((function(t) {
                        E()(Object(_.c)(t), "A valid propertyID selection is required.")
                    }), c.a.mark((function t(e) {
                        var r, n;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    if ((r = t.sent).dispatch(o.b).setPropertyID(e), r.dispatch(o.b).setWebDataStreamID(o.d), r.dispatch(o.b).setMeasurementID(""), o.c !== e) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    return t.next = 10, at.waitForWebDataStreams(e);
                                case 10:
                                    (n = r.select(o.b).getMatchingWebDataStream(e)) && (r.dispatch(o.b).setWebDataStreamID(n._id), r.dispatch(o.b).setMeasurementID(n.webStreamData.measurementId));
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))),
                    findMatchedProperty: c.a.mark((function t() {
                        var e, r, n, i;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, ft.getRegistry();
                                case 2:
                                    return e = t.sent, t.next = 5, a.a.commonActions.await(e.__experimentalResolveSelect(o.b).getAccountSummaries());
                                case 5:
                                    if (r = t.sent, Array.isArray(r) && 0 !== r.length) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 8:
                                    return n = e.select(U.c).getReferenceSiteURL(), i = r.reduce((function(t, e) {
                                        var r = e.propertySummaries;
                                        return [].concat(L()(t), L()((r || []).map((function(t) {
                                            return t._id
                                        }))))
                                    }), []), t.next = 12, a.a.commonActions.await(e.dispatch(o.b).matchPropertyByURL(i, n));
                                case 12:
                                    return t.abrupt("return", t.sent);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })),
                    matchAccountProperty: c.a.mark((function t(e) {
                        var r, n, i, u;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    return r = t.sent, t.next = 5, bt.waitForProperties(e);
                                case 5:
                                    return n = r.select(U.c).getReferenceSiteURL(), i = r.select(o.b).getProperties(e), t.next = 9, bt.matchPropertyByURL((i || []).map((function(t) {
                                        return t._id
                                    })), n);
                                case 9:
                                    return u = t.sent, t.abrupt("return", u);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })),
                    matchAndSelectProperty: c.a.mark((function t(e) {
                        var r, n, a, o = arguments;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r = o.length > 1 && void 0 !== o[1] ? o[1] : "", t.next = 3, bt.matchAccountProperty(e);
                                case 3:
                                    if (n = t.sent, !(a = (null == n ? void 0 : n._id) || r)) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 8, bt.selectProperty(a);
                                case 8:
                                    return t.abrupt("return", n);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })),
                    matchPropertyByURL: c.a.mark((function t(e, r) {
                        var n, a, i, u, s, l, f, p, d, v, g, b;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, ft.getRegistry();
                                case 2:
                                    n = t.sent, a = (Array.isArray(r) ? r : [r]).filter((function(t) {
                                        return "string" == typeof t
                                    })).map(W.q), i = 0;
                                case 5:
                                    if (!(i < e.length)) {
                                        t.next = 52;
                                        break
                                    }
                                    return u = e.slice(i, i + o.a), t.next = 9, ft.await(n.__experimentalResolveSelect(o.b).getWebDataStreamsBatch(u));
                                case 9:
                                    s = t.sent, t.t0 = c.a.keys(s);
                                case 11:
                                    if ((t.t1 = t.t0()).done) {
                                        t.next = 49;
                                        break
                                    }
                                    l = t.t1.value, f = ct(s[l]), t.prev = 14, f.s();
                                case 16:
                                    if ((p = f.n()).done) {
                                        t.next = 39;
                                        break
                                    }
                                    d = p.value, v = ct(a), t.prev = 19, v.s();
                                case 21:
                                    if ((g = v.n()).done) {
                                        t.next = 29;
                                        break
                                    }
                                    if (g.value !== Object(W.q)(null === (b = d.webStreamData) || void 0 === b ? void 0 : b.defaultUri)) {
                                        t.next = 27;
                                        break
                                    }
                                    return t.next = 26, ft.await(n.__experimentalResolveSelect(o.b).getProperty(l));
                                case 26:
                                    return t.abrupt("return", t.sent);
                                case 27:
                                    t.next = 21;
                                    break;
                                case 29:
                                    t.next = 34;
                                    break;
                                case 31:
                                    t.prev = 31, t.t2 = t.catch(19), v.e(t.t2);
                                case 34:
                                    return t.prev = 34, v.f(), t.finish(34);
                                case 37:
                                    t.next = 16;
                                    break;
                                case 39:
                                    t.next = 44;
                                    break;
                                case 41:
                                    t.prev = 41, t.t3 = t.catch(14), f.e(t.t3);
                                case 44:
                                    return t.prev = 44, f.f(), t.finish(44);
                                case 47:
                                    t.next = 11;
                                    break;
                                case 49:
                                    i += o.a, t.next = 5;
                                    break;
                                case 52:
                                    return t.abrupt("return", null);
                                case 53:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [14, 41, 44, 47],
                            [19, 31, 34, 37]
                        ])
                    })),
                    matchPropertyByMeasurementID: c.a.mark((function t(e, r) {
                        var n, a, i, u, s, l, f, p, d, v, g, b;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, ft.getRegistry();
                                case 2:
                                    n = t.sent, a = Array.isArray(r) ? r : [r], i = 0;
                                case 5:
                                    if (!(i < e.length)) {
                                        t.next = 52;
                                        break
                                    }
                                    return u = e.slice(i, i + o.a), t.next = 9, ft.await(n.__experimentalResolveSelect(o.b).getWebDataStreamsBatch(u));
                                case 9:
                                    s = t.sent, t.t0 = c.a.keys(s);
                                case 11:
                                    if ((t.t1 = t.t0()).done) {
                                        t.next = 49;
                                        break
                                    }
                                    l = t.t1.value, f = ct(s[l]), t.prev = 14, f.s();
                                case 16:
                                    if ((p = f.n()).done) {
                                        t.next = 39;
                                        break
                                    }
                                    d = p.value, v = ct(a), t.prev = 19, v.s();
                                case 21:
                                    if ((g = v.n()).done) {
                                        t.next = 29;
                                        break
                                    }
                                    if (g.value !== (null === (b = d.webStreamData) || void 0 === b ? void 0 : b.measurementId)) {
                                        t.next = 27;
                                        break
                                    }
                                    return t.next = 26, ft.await(n.__experimentalResolveSelect(o.b).getProperty(l));
                                case 26:
                                    return t.abrupt("return", t.sent);
                                case 27:
                                    t.next = 21;
                                    break;
                                case 29:
                                    t.next = 34;
                                    break;
                                case 31:
                                    t.prev = 31, t.t2 = t.catch(19), v.e(t.t2);
                                case 34:
                                    return t.prev = 34, v.f(), t.finish(34);
                                case 37:
                                    t.next = 16;
                                    break;
                                case 39:
                                    t.next = 44;
                                    break;
                                case 41:
                                    t.prev = 41, t.t3 = t.catch(14), f.e(t.t3);
                                case 44:
                                    return t.prev = 44, f.f(), t.finish(44);
                                case 47:
                                    t.next = 11;
                                    break;
                                case 49:
                                    i += o.a, t.next = 5;
                                    break;
                                case 52:
                                    return t.abrupt("return", null);
                                case 53:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [14, 41, 44, 47],
                            [19, 31, 34, 37]
                        ])
                    })),
                    waitForProperties: c.a.mark((function t(e) {
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, {
                                        payload: {
                                            accountID: e
                                        },
                                        type: "WAIT_FOR_PROPERTIES"
                                    };
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))
                },
                yt = s()({}, "WAIT_FOR_PROPERTIES", pt((function(t) {
                    var e = t.__experimentalResolveSelect;
                    return function() {
                        var t = D()(c.a.mark((function t(r) {
                            var n, a;
                            return c.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = r.payload, a = n.accountID, t.next = 4, e(o.b).getProperties(a);
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
                })));
            var mt = {
                    getProperties: c.a.mark((function t(e) {
                        var r;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (Object(it.d)(e)) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4, a.a.commonActions.getRegistry();
                                case 4:
                                    if (r = t.sent, void 0 !== r.select(o.b).getProperties(e)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 9, vt.actions.fetchGetProperties(e);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })),
                    getProperty: c.a.mark((function t(e) {
                        var r;
                        return c.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    if (r = t.sent, void 0 !== r.select(o.b).getProperty(e)) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 7, dt.actions.fetchGetProperty(e);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))
                },
                ht = a.a.combineStores(gt, vt, dt, {
                    initialState: {
                        properties: {},
                        propertiesByID: {}
                    },
                    actions: bt,
                    controls: yt,
                    reducer: function(t, e) {
                        return e.type, t
                    },
                    resolvers: mt,
                    selectors: {
                        getProperties: function(t, e) {
                            return t.properties[e]
                        },
                        getProperty: function(t, e) {
                            return t.propertiesByID[e]
                        }
                    }
                }),
                Ot = (ht.initialState, ht.actions, ht.controls, ht.reducer, ht.resolvers, ht.selectors, ht),
                wt = r(322);
            var St = Object(wt.a)({
                    storeName: o.b,
                    tagMatchers: function() {
                        for (var t = [/__gaTracker\s*\(\s*['|"]create['|"]\s*,\s*['|"](G-[a-zA-Z0-9]+)['|"], ?['|"]auto['|"]\s*\)/i, /_gaq\.push\s*\(\s*\[\s*['|"][^_]*_setAccount['|"]\s*,\s*['|"](G-[a-zA-Z0-9]+)['|"]\s*],?\s*\)/i, /<amp-analytics\s+[^>]*type="gtag"[^>]*>[^<]*<script\s+type="application\/json">[^<]*"gtag_id"\s*:\s*"(G-[a-zA-Z0-9]+)"/i, /<amp-analytics\s+[^>]*type="googleanalytics"[^>]*>[^<]*<script\s+type="application\/json">[^<]*"account"\s*:\s*"(G-[a-zA-Z0-9]+)"/i], e = 0, r = ["", "www\\."]; e < r.length; e++) {
                            var n = r[e];
                            t.push(new RegExp("<script\\s+[^>]*src=['|\"]https?://".concat(n, "googletagmanager\\.com/gtag/js\\?id=(G-[a-zA-Z0-9]+)['|\"][^>]*><\/script>"), "i"), new RegExp("<script\\s+[^>]*src=['|\"]https?://".concat(n, "googletagmanager\\.com/gtag/js\\?id=(G-[a-zA-Z0-9]+)['|\"][^/]*/>"), "i"))
                        }
                        for (var a = 0, o = ["__gaTracker", "ga", "gtag"]; a < o.length; a++) {
                            var i = o[a];
                            t.push(new RegExp("".concat(i, "\\s*\\(\\s*['|\"]create['|\"]\\s*,\\s*['|\"](G-[a-zA-Z0-9]+)['|\"],\\s*['|\"]auto['|\"]\\s*\\)"), "i"), new RegExp("".concat(i, "\\s*\\(\\s*['|\"]config['|\"]\\s*,\\s*['|\"](G-[a-zA-Z0-9]+)['|\"]\\s*\\)"), "i"))
                        }
                        return t
                    }(),
                    isValidTag: _.a
                }),
                jt = a.a.combineStores(St),
                kt = (jt.initialState, jt.actions, jt.controls, jt.reducer, jt.resolvers, jt.selectors, jt),
                xt = r(98),
                Dt = a.a.combineStores(h, S, N, Object(xt.a)(o.b), Ot, kt, ot);
            Dt.initialState, Dt.actions, Dt.controls, Dt.reducer, Dt.resolvers, Dt.selectors;
            a.a.registerStore(o.b, Dt)
        },
        11: function(t, e, r) {
            "use strict";
            r.d(e, "w", (function() {
                return c.b
            })), r.d(e, "t", (function() {
                return u.a
            })), r.d(e, "x", (function() {
                return u.b
            })), r.d(e, "v", (function() {
                return d
            })), r.d(e, "c", (function() {
                return v.b
            })), r.d(e, "k", (function() {
                return v.c
            })), r.d(e, "r", (function() {
                return g.c
            })), r.d(e, "s", (function() {
                return g.d
            })), r.d(e, "o", (function() {
                return g.b
            })), r.d(e, "j", (function() {
                return g.a
            })), r.d(e, "e", (function() {
                return b.a
            })), r.d(e, "p", (function() {
                return O
            })), r.d(e, "d", (function() {
                return w
            })), r.d(e, "g", (function() {
                return S.c
            })), r.d(e, "u", (function() {
                return S.i
            })), r.d(e, "h", (function() {
                return j.b
            })), r.d(e, "n", (function() {
                return j.c
            })), r.d(e, "b", (function() {
                return j.a
            })), r.d(e, "m", (function() {
                return k.b
            })), r.d(e, "i", (function() {
                return k.a
            })), r.d(e, "q", (function() {
                return k.d
            })), r.d(e, "l", (function() {
                return x
            })), r.d(e, "a", (function() {
                return D
            })), r.d(e, "y", (function() {
                return A
            })), r.d(e, "f", (function() {
                return E
            }));
            var n = r(117),
                a = r.n(n),
                o = r(113),
                i = r.n(o),
                c = r(31),
                u = r(63),
                s = r(29),
                l = r.n(s),
                f = r(78),
                p = r.n(f),
                d = function(t) {
                    return p()(JSON.stringify(function t(e) {
                        var r = {};
                        return Object.keys(e).sort().forEach((function(n) {
                            var a = e[n];
                            a && "object" === l()(a) && !Array.isArray(a) && (a = t(a)), r[n] = a
                        })), r
                    }(t)))
                };
            var v = r(80),
                g = (r(84), r(72)),
                b = r(64);

            function y(t) {
                return t.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function m(t) {
                return "<p>".concat(t.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function h(t) {
                return t.replace(/\n/gi, "<br>")
            }

            function O(t) {
                for (var e = t, r = 0, n = [y, m, h]; r < n.length; r++) {
                    e = (0, n[r])(e)
                }
                return e
            }
            var w = function(t) {
                    return t = parseFloat(t), isNaN(t) || 0 === t ? [0, 0, 0, 0] : [Math.floor(t / 60 / 60), Math.floor(t / 60 % 60), Math.floor(t % 60), Math.floor(1e3 * t) - 1e3 * Math.floor(t)]
                },
                S = r(59),
                j = r(85),
                k = r(50),
                x = function(t) {
                    switch (t) {
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
                D = function(t, e) {
                    if ("0" === t || 0 === t || isNaN(t)) return null;
                    var r = (e - t) / t;
                    return isNaN(r) || !a()(r) ? null : r
                },
                A = function(t) {
                    try {
                        return JSON.parse(t) && !!t
                    } catch (t) {
                        return !1
                    }
                },
                E = function(t) {
                    if (!t) return "";
                    var e = t.replace(/&#(\d+);/g, (function(t, e) {
                        return String.fromCharCode(e)
                    })).replace(/(\\)/g, "");
                    return i()(e)
                }
        },
        136: function(t, e) {
            t.exports = googlesitekit.modules
        },
        140: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            }));
            var n = r(9),
                a = r.n(n),
                o = function(t, e) {
                    var r = e.dateRangeLength;
                    a()(Array.isArray(t), "report must be an array to partition."), a()(Number.isInteger(r) && r > 0, "dateRangeLength must be a positive integer.");
                    var n = -1 * r;
                    return {
                        currentRange: t.slice(n),
                        compareRange: t.slice(2 * n, n)
                    }
                }
        },
        15: function(t, e, r) {
            "use strict";
            r.d(e, "c", (function() {
                return n
            })), r.d(e, "a", (function() {
                return a
            })), r.d(e, "b", (function() {
                return o
            }));
            var n = "core/site",
                a = "primary",
                o = "secondary"
        },
        157: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return E
            })), r.d(e, "b", (function() {
                return P
            })), r.d(e, "c", (function() {
                return _
            })), r.d(e, "f", (function() {
                return I
            })), r.d(e, "e", (function() {
                return R
            })), r.d(e, "d", (function() {
                return T
            }));
            var n = r(14),
                a = r.n(n),
                o = r(5),
                i = r.n(o),
                c = r(6),
                u = r.n(c),
                s = r(9),
                l = r.n(s),
                f = r(57),
                p = r.n(f),
                d = r(158),
                v = r.n(d),
                g = r(33),
                b = r.n(g),
                y = r(4),
                m = r.n(y),
                h = r(73),
                O = r(76),
                w = r(45),
                S = r(54);

            function j(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? j(Object(r), !0).forEach((function(e) {
                        u()(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var x = m.a.createRegistrySelector,
                D = S.a.clearError,
                A = S.a.receiveError,
                E = "cannot submit changes while submitting changes",
                P = "cannot submit changes if settings have not changed",
                _ = function(t, e, r) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        a = n.storeName,
                        o = void 0 === a ? void 0 : a,
                        c = n.settingSlugs,
                        s = void 0 === c ? [] : c;
                    l()(t, "type is required."), l()(e, "identifier is required."), l()(r, "datapoint is required.");
                    var f = o || "".concat(t, "/").concat(e),
                        d = {
                            settings: void 0,
                            savedSettings: void 0
                        },
                        g = Object(w.a)({
                            baseName: "getSettings",
                            controlCallback: function() {
                                return b.a.get(t, e, r, {}, {
                                    useCache: !1
                                })
                            },
                            reducerCallback: function(t, e) {
                                return k(k({}, t), {}, {
                                    savedSettings: k({}, e),
                                    settings: k(k({}, e), t.settings || {})
                                })
                            }
                        }),
                        y = Object(w.a)({
                            baseName: "saveSettings",
                            controlCallback: function(n) {
                                var a = n.values;
                                return b.a.set(t, e, r, a)
                            },
                            reducerCallback: function(t, e) {
                                return k(k({}, t), {}, {
                                    savedSettings: k({}, e),
                                    settings: k({}, e)
                                })
                            },
                            argsToParams: function(t) {
                                return {
                                    values: t
                                }
                            },
                            validateParams: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.values;
                                l()(p()(e), "values is required.")
                            }
                        }),
                        h = {},
                        S = {
                            setSettings: function(t) {
                                return l()(p()(t), "values is required."), {
                                    payload: {
                                        values: t
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
                            saveSettings: i.a.mark((function t() {
                                var e, r, n, a, o;
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, m.a.commonActions.getRegistry();
                                        case 2:
                                            return e = t.sent, t.next = 5, D("saveSettings", []);
                                        case 5:
                                            return r = e.select(f).getSettings(), t.next = 8, y.actions.fetchSaveSettings(r);
                                        case 8:
                                            if (n = t.sent, a = n.response, !(o = n.error)) {
                                                t.next = 14;
                                                break
                                            }
                                            return t.next = 14, A(o, "saveSettings", []);
                                        case 14:
                                            return t.abrupt("return", {
                                                response: a,
                                                error: o
                                            });
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))
                        },
                        j = {},
                        E = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                e = arguments.length > 1 ? arguments[1] : void 0,
                                r = e.type,
                                n = e.payload;
                            switch (r) {
                                case "SET_SETTINGS":
                                    var a = n.values;
                                    return k(k({}, t), {}, {
                                        settings: k(k({}, t.settings || {}), a)
                                    });
                                case "ROLLBACK_SETTINGS":
                                    return k(k({}, t), {}, {
                                        settings: t.savedSettings
                                    });
                                default:
                                    return void 0 !== h[r] ? h[r](t, {
                                        type: r,
                                        payload: n
                                    }) : t
                            }
                        },
                        P = {
                            getSettings: i.a.mark((function t() {
                                var e;
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, m.a.commonActions.getRegistry();
                                        case 2:
                                            if (e = t.sent, e.select(f).getSettings()) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.next = 7, g.actions.fetchGetSettings();
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))
                        },
                        _ = {
                            getSettings: function(t) {
                                return t.settings
                            },
                            haveSettingsChanged: function(t) {
                                var e = t.settings,
                                    r = t.savedSettings;
                                return !v()(e, r)
                            },
                            hasSettingChanged: function(t, e) {
                                l()(e, "setting is required.");
                                var r = t.settings,
                                    n = t.savedSettings;
                                return !(!r || !n) && !v()(r[e], n[e])
                            },
                            isDoingSaveSettings: function(t) {
                                return Object.values(t.isFetchingSaveSettings).some(Boolean)
                            }
                        };
                    s.forEach((function(t) {
                        var e = Object(O.b)(t),
                            r = Object(O.a)(t);
                        S["set".concat(e)] = function(t) {
                            return l()(void 0 !== t, "value is required for calls to set".concat(e, "().")), {
                                payload: {
                                    value: t
                                },
                                type: "SET_".concat(r)
                            }
                        }, h["SET_".concat(r)] = function(e, r) {
                            var n = r.payload.value;
                            return k(k({}, e), {}, {
                                settings: k(k({}, e.settings || {}), {}, u()({}, t, n))
                            })
                        }, _["get".concat(e)] = x((function(e) {
                            return function() {
                                return (e(f).getSettings() || {})[t]
                            }
                        }))
                    }));
                    var I = m.a.combineStores(m.a.commonStore, g, y, {
                        initialState: d,
                        actions: S,
                        controls: j,
                        reducer: E,
                        resolvers: P,
                        selectors: _
                    });
                    return k(k({}, I), {}, {
                        STORE_NAME: f
                    })
                };

            function I(t, e) {
                return function() {
                    var r = a()(i.a.mark((function r(n) {
                        var a, o, c, u;
                        return i.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (a = n.select, o = n.dispatch, !a(e).haveSettingsChanged()) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.next = 4, o(e).saveSettings();
                                case 4:
                                    if (c = r.sent, !(u = c.error)) {
                                        r.next = 8;
                                        break
                                    }
                                    return r.abrupt("return", {
                                        error: u
                                    });
                                case 8:
                                    return r.next = 10, b.a.invalidateCache("modules", t);
                                case 10:
                                    return r.abrupt("return", {});
                                case 11:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(t) {
                        return r.apply(this, arguments)
                    }
                }()
            }

            function R(t) {
                return function(e) {
                    var r = e.select,
                        n = e.dispatch;
                    return r(t).haveSettingsChanged() ? n(t).rollbackSettings() : {}
                }
            }

            function T(t) {
                return function(e) {
                    var r = Object(h.e)(e)(t),
                        n = r.haveSettingsChanged,
                        a = r.isDoingSubmitChanges;
                    l()(!a(), E), l()(n(), P)
                }
            }
        },
        190: function(t, e, r) {
            "use strict";

            function n(t) {
                var e, r, n, a, o, i, c, u;
                if (void 0 !== t) return !(null == t || null === (e = t[0]) || void 0 === e || null === (r = e.data) || void 0 === r || null === (n = r.rows) || void 0 === n ? void 0 : n.length) || !(null == t || null === (a = t[0]) || void 0 === a || null === (o = a.data) || void 0 === o || null === (i = o.totals) || void 0 === i || null === (c = i[0]) || void 0 === c || null === (u = c.values) || void 0 === u ? void 0 : u.length) || !t[0].data.totals.some((function(t) {
                    return t.values.some((function(t) {
                        return t > 0
                    }))
                }))
            }
            r.d(e, "a", (function() {
                return n
            }))
        },
        196: function(t, e, r) {
            "use strict";
            e.a = function(t) {
                if ("string" == typeof t && t.match(/[0-9]{8}/)) {
                    var e = t.slice(0, 4),
                        r = Number(t.slice(4, 6)) - 1,
                        n = t.slice(6, 8);
                    return new Date(e, r.toString(), n)
                }
                return !1
            }
        },
        224: function(t, e, r) {
            "use strict";
            (function(t) {
                var n = r(52),
                    a = r.n(n),
                    o = r(225),
                    i = t._googlesitekitAPIFetchData || {},
                    c = i.nonce,
                    u = i.nonceEndpoint,
                    s = i.preloadedData,
                    l = i.rootURL;
                a.a.nonceEndpoint = u, a.a.nonceMiddleware = a.a.createNonceMiddleware(c), a.a.rootURLMiddleware = a.a.createRootURLMiddleware(l), a.a.preloadingMiddleware = Object(o.a)(s), a.a.use(a.a.nonceMiddleware), a.a.use(a.a.mediaUploadMiddleware), a.a.use(a.a.rootURLMiddleware), a.a.use(a.a.preloadingMiddleware), e.default = a.a
            }).call(this, r(18))
        },
        225: function(t, e, r) {
            "use strict";
            var n = r(220);
            e.a = function(t) {
                var e = Object.keys(t).reduce((function(e, r) {
                        return e[Object(n.getStablePath)(r)] = t[r], e
                    }), {}),
                    r = !1;
                return function(t, a) {
                    if (r) return a(t);
                    setTimeout((function() {
                        r = !0
                    }), 1e3);
                    var o = t.parse,
                        i = void 0 === o || o,
                        c = t.path;
                    if ("string" == typeof t.path) {
                        var u, s = (null === (u = t.method) || void 0 === u ? void 0 : u.toUpperCase()) || "GET",
                            l = Object(n.getStablePath)(c);
                        if (i && "GET" === s && e[l]) {
                            var f = Promise.resolve(e[l].body);
                            return delete e[l], f
                        }
                        if ("OPTIONS" === s && e[s] && e[s][l]) {
                            var p = Promise.resolve(e[s][l]);
                            return delete e[s][l], p
                        }
                    }
                    return a(t)
                }
            }
        },
        254: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return g
            })), r.d(e, "b", (function() {
                return b
            }));
            var n = r(5),
                a = r.n(n),
                o = r(14),
                i = r.n(o),
                c = r(9),
                u = r.n(c),
                s = r(323),
                l = r.n(s),
                f = r(224),
                p = r(109),
                d = r(287),
                v = r(15),
                g = function(t, e) {
                    var r = e.find((function(e) {
                        return e.test(t)
                    }));
                    return !!r && r.exec(t)[1]
                },
                b = l()(function() {
                    var t = i()(a.a.mark((function t(e) {
                        var r, n, o, i;
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = e.homeURL, n = e.ampMode, u()(Object(p.a)(r), "homeURL must be valid URL"), o = [r], v.b !== n) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.prev = 4, t.next = 7, Object(f.default)({
                                        path: "/wp/v2/posts?per_page=1"
                                    }).then((function(t) {
                                        return t.slice(0, 1).map((function(t) {
                                            return Object(d.a)(t.link, {
                                                amp: 1
                                            })
                                        })).pop()
                                    }));
                                case 7:
                                    (i = t.sent) && o.push(i), t.next = 14;
                                    break;
                                case 11:
                                    return t.prev = 11, t.t0 = t.catch(4), t.abrupt("return", o);
                                case 14:
                                    return t.abrupt("return", o);
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [4, 11]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }())
        },
        28: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            })), r.d(e, "b", (function() {
                return a
            }));
            var n = "_googlesitekitDataLayer",
                a = "data-googlesitekit-gtag"
        },
        293: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return a
            })), r.d(e, "c", (function() {
                return o
            })), r.d(e, "d", (function() {
                return i
            })), r.d(e, "e", (function() {
                return c
            })), r.d(e, "a", (function() {
                return u
            }));
            var n = r(41);

            function a(t) {
                return "string" == typeof t && /^\w+$/.test(t)
            }

            function o(t) {
                return t === n.c || a(t)
            }

            function i(t) {
                return "string" == typeof t && /^\d+$/.test(t)
            }

            function c(t) {
                return t === n.d || i(t)
            }

            function u(t) {
                return "string" == typeof t && /^G-[a-zA-Z0-9]+$/.test(t)
            }
        },
        30: function(t, e, r) {
            "use strict";
            (function(t) {
                var n, a;
                r.d(e, "a", (function() {
                    return o
                })), r.d(e, "b", (function() {
                    return i
                }));
                var o = new Set((null === (n = t) || void 0 === n || null === (a = n._googlesitekitBaseData) || void 0 === a ? void 0 : a.enabledFeatures) || []),
                    i = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                        return e instanceof Set && e.has(t)
                    }
            }).call(this, r(18))
        },
        31: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return g
                })), r.d(e, "b", (function() {
                    return v
                }));
                var n = r(86),
                    a = t._googlesitekitBaseData || {},
                    o = a.activeModules,
                    i = void 0 === o ? [] : o,
                    c = a.isSiteKitScreen,
                    u = a.trackingEnabled,
                    s = {
                        activeModules: i,
                        trackingEnabled: u,
                        trackingID: a.trackingID,
                        referenceSiteURL: a.referenceSiteURL,
                        userIDHash: a.userIDHash,
                        isSiteKitScreen: c
                    },
                    l = Object(n.a)(s),
                    f = l.enableTracking,
                    p = l.disableTracking,
                    d = (l.isTrackingEnabled, l.initializeSnippet),
                    v = l.trackEvent;

                function g(t) {
                    t ? f() : p()
                }
                c && u && d()
            }).call(this, r(18))
        },
        322: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return w
            }));
            var n = r(6),
                a = r.n(n),
                o = r(14),
                i = r.n(o),
                c = r(5),
                u = r.n(c),
                s = r(9),
                l = r.n(s),
                f = r(4),
                p = r.n(f),
                d = r(15),
                v = r(254);

            function g(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(r), !0).forEach((function(e) {
                        a()(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function y(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return m(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
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
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        c = !0, o = t
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

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var h = p.a.createRegistryControl,
                O = p.a.createRegistrySelector,
                w = function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.storeName,
                        n = e.isValidTag,
                        o = e.tagMatchers;
                    l()("string" == typeof r && r, "storeName is required."), l()("function" == typeof n, "isValidTag must be a function."), l()(Array.isArray(o), "tagMatchers must be an Array.");
                    var c = {
                            existingTag: void 0
                        },
                        s = {
                            fetchGetExistingTag: function() {
                                return {
                                    payload: {},
                                    type: "FETCH_GET_EXISTING_TAG"
                                }
                            },
                            receiveGetExistingTag: function(t) {
                                return l()(null === t || "string" == typeof t, "existingTag must be a tag string or null."), {
                                    payload: {
                                        existingTag: n(t) ? t : null
                                    },
                                    type: "RECEIVE_GET_EXISTING_TAG"
                                }
                            },
                            waitForExistingTag: u.a.mark((function t() {
                                return u.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, {
                                                payload: {},
                                                type: "WAIT_FOR_EXISTING_TAG"
                                            };
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))
                        },
                        f = (t = {}, a()(t, "FETCH_GET_EXISTING_TAG", h((function(t) {
                            return i()(u.a.mark((function e() {
                                var r, n, a, i, c, s, l, f;
                                return u.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.select(d.c).getHomeURL(), n = t.select(d.c).getAMPMode(), e.next = 4, Object(v.b)({
                                                homeURL: r,
                                                ampMode: n
                                            });
                                        case 4:
                                            a = e.sent, i = y(a), e.prev = 6, i.s();
                                        case 8:
                                            if ((c = i.n()).done) {
                                                e.next = 18;
                                                break
                                            }
                                            return s = c.value, e.next = 12, t.dispatch(d.c).waitForHTMLForURL(s);
                                        case 12:
                                            if (l = t.select(d.c).getHTMLForURL(s), !(f = Object(v.a)(l, o))) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.abrupt("return", f);
                                        case 16:
                                            e.next = 8;
                                            break;
                                        case 18:
                                            e.next = 23;
                                            break;
                                        case 20:
                                            e.prev = 20, e.t0 = e.catch(6), i.e(e.t0);
                                        case 23:
                                            return e.prev = 23, i.f(), e.finish(23);
                                        case 26:
                                            return e.abrupt("return", null);
                                        case 27:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [6, 20, 23, 26]
                                ])
                            })))
                        }))), a()(t, "WAIT_FOR_EXISTING_TAG", h((function(t) {
                            return function() {
                                var e = function() {
                                    return void 0 !== t.select(r).getExistingTag()
                                };
                                return !!e() || new Promise((function(r) {
                                    var n = t.subscribe((function() {
                                        e() && (n(), r())
                                    }))
                                }))
                            }
                        }))), t),
                        g = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                                e = arguments.length > 1 ? arguments[1] : void 0,
                                r = e.type,
                                n = e.payload;
                            switch (r) {
                                case "RECEIVE_GET_EXISTING_TAG":
                                    var a = n.existingTag;
                                    return b(b({}, t), {}, {
                                        existingTag: a
                                    });
                                default:
                                    return t
                            }
                        },
                        m = {
                            getExistingTag: u.a.mark((function t() {
                                var e, n;
                                return u.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, p.a.commonActions.getRegistry();
                                        case 2:
                                            if (void 0 !== (e = t.sent).select(r).getExistingTag()) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.next = 6, s.fetchGetExistingTag();
                                        case 6:
                                            n = t.sent, e.dispatch(r).receiveGetExistingTag(n);
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))
                        },
                        w = {
                            getExistingTag: function(t) {
                                return t.existingTag
                            },
                            hasExistingTag: O((function(t) {
                                return function() {
                                    var e = t(r).getExistingTag();
                                    if (void 0 !== e) return !!e
                                }
                            }))
                        },
                        S = {
                            initialState: c,
                            actions: s,
                            controls: f,
                            reducer: g,
                            resolvers: m,
                            selectors: w
                        };
                    return b(b({}, S), {}, {
                        STORE_NAME: r
                    })
                }
        },
        33: function(t, e) {
            t.exports = googlesitekit.api
        },
        35: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = function(t) {
                return t instanceof Date && !isNaN(t)
            }
        },
        36: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "core/forms"
        },
        4: function(t, e) {
            t.exports = googlesitekit.data
        },
        40: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "b", (function() {
                    return b
                })), r.d(e, "d", (function() {
                    return y
                })), r.d(e, "a", (function() {
                    return m
                })), r.d(e, "c", (function() {
                    return h
                }));
                var n = r(5),
                    a = r.n(n),
                    o = r(14),
                    i = r.n(o);
                r(23);

                function c(t, e) {
                    var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!r) {
                        if (Array.isArray(t) || (r = function(t, e) {
                                if (!t) return;
                                if ("string" == typeof t) return u(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                "Object" === r && t.constructor && (r = t.constructor.name);
                                if ("Map" === r || "Set" === r) return Array.from(t);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
                            }(t)) || e && t && "number" == typeof t.length) {
                            r && (t = r);
                            var n = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return n >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[n++]
                                    }
                                },
                                e: function(t) {
                                    throw t
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
                            r = r.call(t)
                        },
                        n: function() {
                            var t = r.next();
                            return i = t.done, t
                        },
                        e: function(t) {
                            c = !0, o = t
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

                function u(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                    return n
                }
                var s, l = "googlesitekit_".concat("1.72.0", "_"),
                    f = ["sessionStorage", "localStorage"],
                    p = [].concat(f),
                    d = function() {
                        var e = i()(a.a.mark((function e(r) {
                            var n, o;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t[r]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 3:
                                        return e.prev = 3, o = "__storage_test__", n.setItem(o, o), n.removeItem(o), e.abrupt("return", !0);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(3), e.abrupt("return", e.t0 instanceof DOMException && (22 === e.t0.code || 1014 === e.t0.code || "QuotaExceededError" === e.t0.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.t0.name) && 0 !== n.length);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();

                function v() {
                    return g.apply(this, arguments)
                }

                function g() {
                    return (g = i()(a.a.mark((function e() {
                        var r, n, o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (void 0 === s) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", s);
                                case 2:
                                    r = c(p), e.prev = 3, r.s();
                                case 5:
                                    if ((n = r.n()).done) {
                                        e.next = 15;
                                        break
                                    }
                                    if (o = n.value, !s) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("continue", 13);
                                case 9:
                                    return e.next = 11, d(o);
                                case 11:
                                    if (!e.sent) {
                                        e.next = 13;
                                        break
                                    }
                                    s = t[o];
                                case 13:
                                    e.next = 5;
                                    break;
                                case 15:
                                    e.next = 20;
                                    break;
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(3), r.e(e.t0);
                                case 20:
                                    return e.prev = 20, r.f(), e.finish(20);
                                case 23:
                                    return void 0 === s && (s = null), e.abrupt("return", s);
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 17, 20, 23]
                        ])
                    })))).apply(this, arguments)
                }
                var b = function() {
                        var t = i()(a.a.mark((function t(e) {
                            var r, n, o, i, c, u, s;
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, v();
                                    case 2:
                                        if (!(r = t.sent)) {
                                            t.next = 10;
                                            break
                                        }
                                        if (!(n = r.getItem("".concat(l).concat(e)))) {
                                            t.next = 10;
                                            break
                                        }
                                        if (o = JSON.parse(n), i = o.timestamp, c = o.ttl, u = o.value, s = o.isError, !i || c && !(Math.round(Date.now() / 1e3) - i < c)) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.abrupt("return", {
                                            cacheHit: !0,
                                            value: u,
                                            isError: s
                                        });
                                    case 10:
                                        return t.abrupt("return", {
                                            cacheHit: !1,
                                            value: void 0
                                        });
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    y = function() {
                        var e = i()(a.a.mark((function e(r, n) {
                            var o, i, c, u, s, f, p, d, g = arguments;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = g.length > 2 && void 0 !== g[2] ? g[2] : {}, i = o.ttl, c = void 0 === i ? 3600 : i, u = o.timestamp, s = void 0 === u ? Math.round(Date.now() / 1e3) : u, f = o.isError, p = void 0 !== f && f, e.next = 3, v();
                                    case 3:
                                        if (!(d = e.sent)) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.prev = 5, d.setItem("".concat(l).concat(r), JSON.stringify({
                                            timestamp: s,
                                            ttl: c,
                                            value: n,
                                            isError: p
                                        })), e.abrupt("return", !0);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(5), t.console.warn("Encountered an unexpected storage error:", e.t0), e.abrupt("return", !1);
                                    case 14:
                                        return e.abrupt("return", !1);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, 10]
                            ])
                        })));
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    m = function() {
                        var e = i()(a.a.mark((function e(r) {
                            var n;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, v();
                                    case 2:
                                        if (!(n = e.sent)) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.prev = 4, n.removeItem("".concat(l).concat(r)), e.abrupt("return", !0);
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(4), t.console.warn("Encountered an unexpected storage error:", e.t0), e.abrupt("return", !1);
                                    case 13:
                                        return e.abrupt("return", !1);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 9]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    h = function() {
                        var e = i()(a.a.mark((function e() {
                            var r, n, o, i;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, v();
                                    case 2:
                                        if (!(r = e.sent)) {
                                            e.next = 14;
                                            break
                                        }
                                        for (e.prev = 4, n = [], o = 0; o < r.length; o++) 0 === (i = r.key(o)).indexOf(l) && n.push(i.substring(l.length));
                                        return e.abrupt("return", n);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(4), t.console.warn("Encountered an unexpected storage error:", e.t0), e.abrupt("return", []);
                                    case 14:
                                        return e.abrupt("return", []);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 10]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
            }).call(this, r(18))
        },
        41: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return n
            })), r.d(e, "c", (function() {
                return a
            })), r.d(e, "d", (function() {
                return o
            })), r.d(e, "a", (function() {
                return i
            }));
            var n = "modules/analytics-4",
                a = "property_create",
                o = "webdatastream_create",
                i = 10
        },
        42: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return a
            }));
            var n = r(35),
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = "string" == typeof t;
                    if (!e) return !1;
                    var r = t.split("-");
                    return 3 === r.length && Object(n.a)(new Date(t))
                }
        },
        45: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return w
            }));
            var n = r(5),
                a = r.n(n),
                o = r(6),
                i = r.n(o),
                c = r(9),
                u = r.n(c),
                s = r(57),
                l = r.n(s),
                f = r(54),
                p = r(76),
                d = r(11);

            function v(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(r), !0).forEach((function(e) {
                        i()(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var b = function(t) {
                    return t
                },
                y = function() {
                    return {}
                },
                m = function() {},
                h = f.a.clearError,
                O = f.a.receiveError,
                w = function(t) {
                    var e, r, n = a.a.mark(N),
                        o = t.baseName,
                        c = t.controlCallback,
                        s = t.reducerCallback,
                        f = void 0 === s ? b : s,
                        v = t.argsToParams,
                        w = void 0 === v ? y : v,
                        S = t.validateParams,
                        j = void 0 === S ? m : S;
                    u()(o, "baseName is required."), u()("function" == typeof c, "controlCallback is required and must be a function."), u()("function" == typeof f, "reducerCallback must be a function."), u()("function" == typeof w, "argsToParams must be a function."), u()("function" == typeof j, "validateParams must be a function.");
                    try {
                        j(w()), r = !1
                    } catch (t) {
                        r = !0
                    }
                    var k = Object(p.b)(o),
                        x = Object(p.a)(o),
                        D = "FETCH_".concat(x),
                        A = "START_".concat(D),
                        E = "FINISH_".concat(D),
                        P = "CATCH_".concat(D),
                        _ = "RECEIVE_".concat(x),
                        I = "fetch".concat(k),
                        R = "receive".concat(k),
                        T = "isFetching".concat(k),
                        C = i()({}, T, {});

                    function N(t, e) {
                        var r, i;
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, {
                                        payload: {
                                            params: t
                                        },
                                        type: A
                                    };
                                case 2:
                                    return n.next = 4, h(o, e);
                                case 4:
                                    return n.prev = 4, n.next = 7, {
                                        payload: {
                                            params: t
                                        },
                                        type: D
                                    };
                                case 7:
                                    return r = n.sent, n.next = 10, M[R](r, t);
                                case 10:
                                    return n.next = 12, {
                                        payload: {
                                            params: t
                                        },
                                        type: E
                                    };
                                case 12:
                                    n.next = 23;
                                    break;
                                case 14:
                                    return n.prev = 14, n.t0 = n.catch(4), i = n.t0, n.next = 19, O(i, o, e);
                                case 19:
                                    return n.next = 21, O(i);
                                case 21:
                                    return n.next = 23, {
                                        payload: {
                                            params: t
                                        },
                                        type: P
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
                    var M = (e = {}, i()(e, I, (function() {
                            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                            var n = w.apply(void 0, e);
                            return j(n), N(n, e)
                        })), i()(e, R, (function(t, e) {
                            return u()(void 0 !== t, "response is required."), r ? (u()(l()(e), "params is required."), j(e)) : e = {}, {
                                payload: {
                                    response: t,
                                    params: e
                                },
                                type: _
                            }
                        })), e),
                        L = i()({}, D, (function(t) {
                            var e = t.payload;
                            return c(e.params)
                        })),
                        U = i()({}, T, (function(t) {
                            if (void 0 === t[T]) return !1;
                            var e;
                            try {
                                for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                                e = w.apply(void 0, n), j(e)
                            } catch (t) {
                                return !1
                            }
                            return !!t[T][Object(d.v)(e)]
                        }));
                    return {
                        initialState: C,
                        actions: M,
                        controls: L,
                        reducer: function(t, e) {
                            var r = e.type,
                                n = e.payload;
                            switch (r) {
                                case A:
                                    var a = n.params;
                                    return g(g({}, t), {}, i()({}, T, g(g({}, t[T]), {}, i()({}, Object(d.v)(a), !0))));
                                case _:
                                    var o = n.response,
                                        c = n.params;
                                    return f(t, o, c);
                                case E:
                                    var u = n.params;
                                    return g(g({}, t), {}, i()({}, T, g(g({}, t[T]), {}, i()({}, Object(d.v)(u), !1))));
                                case P:
                                    var s = n.params;
                                    return g(g({}, t), {}, i()({}, T, g(g({}, t[T]), {}, i()({}, Object(d.v)(s), !1))));
                                default:
                                    return t
                            }
                        },
                        resolvers: {},
                        selectors: U
                    }
                }
        },
        50: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return a
            })), r.d(e, "a", (function() {
                return o
            })), r.d(e, "d", (function() {
                return i
            })), r.d(e, "c", (function() {
                return c
            })), r.d(e, "e", (function() {
                return u
            }));
            var n = r(109);

            function a(t) {
                try {
                    return new URL(t).pathname
                } catch (t) {}
                return null
            }

            function o(t, e) {
                try {
                    return new URL(e, t).href
                } catch (t) {}
                return ("string" == typeof t ? t : "") + ("string" == typeof e ? e : "")
            }

            function i(t) {
                return "string" != typeof t ? t : t.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "")
            }

            function c(t) {
                return /^#\w[A-Za-z0-9-_]*$/.test(t)
            }

            function u(t, e) {
                if (!Object(n.a)(t)) return t;
                if (t.length <= e) return t;
                var r = new URL(t),
                    a = t.replace(r.origin, "");
                if (a.length < e) return a;
                var o = a.length - Math.floor(e) + 1;
                return "…" + a.substr(o)
            }
        },
        51: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return a
            }));
            var n = r(28);

            function a(t) {
                return function() {
                    t[n.a] = t[n.a] || [], t[n.a].push(arguments)
                }
            }
        },
        54: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return g
            })), r.d(e, "b", (function() {
                return b
            }));
            var n = r(6),
                a = r.n(n),
                o = r(29),
                i = r.n(o),
                c = r(9),
                u = r.n(c),
                s = r(78),
                l = r.n(s),
                f = r(11);

            function p(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(r), !0).forEach((function(e) {
                        a()(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function v(t, e) {
                if (e && Array.isArray(e)) {
                    var r = e.map((function(t) {
                        return "object" === i()(t) ? Object(f.v)(t) : t
                    }));
                    return "".concat(t, "::").concat(l()(JSON.stringify(r)))
                }
                return t
            }
            var g = {
                receiveError: function(t, e, r) {
                    return u()(t, "error is required."), e && u()(r && Array.isArray(r), "args is required (and must be an array) when baseName is specified."), {
                        type: "RECEIVE_ERROR",
                        payload: {
                            error: t,
                            baseName: e,
                            args: r
                        }
                    }
                },
                clearError: function(t, e) {
                    return t && u()(e && Array.isArray(e), "args is required (and must be an array) when baseName is specified."), {
                        type: "CLEAR_ERROR",
                        payload: {
                            baseName: t,
                            args: e
                        }
                    }
                },
                clearErrors: function(t) {
                    return {
                        type: "CLEAR_ERRORS",
                        payload: {
                            baseName: t
                        }
                    }
                }
            };

            function b() {
                var t = {
                    getErrorForSelector: function(e, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return u()(r, "selectorName is required."), t.getError(e, r, n)
                    },
                    getErrorForAction: function(e, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return u()(r, "actionName is required."), t.getError(e, r, n)
                    },
                    getError: function(t, e, r) {
                        var n = t.error,
                            a = t.errors;
                        return e || r ? (u()(e, "baseName is required."), a[v(e, r)]) : n
                    },
                    getErrors: function(t) {
                        var e = new Set(Object.values(t.errors));
                        return void 0 !== t.error && e.add(t.error), Array.from(e)
                    },
                    hasErrors: function(e) {
                        return t.getErrors(e).length > 0
                    }
                };
                return {
                    initialState: {
                        errors: {},
                        error: void 0
                    },
                    actions: g,
                    controls: {},
                    reducer: function(t, e) {
                        var r = e.type,
                            n = e.payload;
                        switch (r) {
                            case "RECEIVE_ERROR":
                                var o = n.baseName,
                                    i = n.args,
                                    c = n.error;
                                return d(d({}, t), {}, o ? {
                                    errors: d(d({}, t.errors || {}), {}, a()({}, v(o, i), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var u = n.baseName,
                                    s = n.args,
                                    l = d({}, t);
                                if (u) {
                                    var f = v(u, s);
                                    l.errors = d({}, t.errors || {}), delete l.errors[f]
                                } else l.error = void 0;
                                return l;
                            case "CLEAR_ERRORS":
                                var p = n.baseName,
                                    g = d({}, t);
                                if (p)
                                    for (var b in g.errors = d({}, t.errors || {}), g.errors)(b === p || b.startsWith("".concat(p, "::"))) && delete g.errors[b];
                                else g.errors = {}, g.error = void 0;
                                return g;
                            default:
                                return t
                        }
                    },
                    resolvers: {},
                    selectors: t
                }
            }
        },
        59: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return a
            })), r.d(e, "b", (function() {
                return n
            })), r.d(e, "e", (function() {
                return u
            })), r.d(e, "f", (function() {
                return d
            })), r.d(e, "g", (function() {
                return v
            })), r.d(e, "h", (function() {
                return f.a
            })), r.d(e, "d", (function() {
                return g
            })), r.d(e, "c", (function() {
                return y
            })), r.d(e, "i", (function() {
                return p
            }));
            var n = "Invalid dateString parameter, it must be a string.",
                a = 'Invalid date range, it must be a string with the format "last-x-days".',
                o = r(9),
                i = r.n(o),
                c = r(35),
                u = function(t) {
                    var e = new Date(t);
                    i()(Object(c.a)(e), "Date param must construct to a valid date instance or be a valid date instance itself.");
                    var r = "".concat(e.getMonth() + 1),
                        n = "".concat(e.getDate());
                    return [e.getFullYear(), r.length < 2 ? "0".concat(r) : r, n.length < 2 ? "0".concat(n) : n].join("-")
                },
                s = r(12),
                l = r.n(s),
                f = r(42),
                p = function(t) {
                    i()(Object(f.a)(t), n);
                    var e = t.split("-"),
                        r = l()(e, 3),
                        a = r[0],
                        o = r[1],
                        c = r[2];
                    return new Date(a, o - 1, c)
                },
                d = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        r = p(t);
                    return r.setDate(r.getDate() - e), u(r)
                },
                v = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        e = t.split("-");
                    return 3 === e.length && "last" === e[0] && !Number.isNaN(e[1]) && !Number.isNaN(parseFloat(e[1])) && "days" === e[2]
                };

            function g(t) {
                var e = t.match(/last-(\d+)-days/);
                if (e && e[1]) return parseInt(e[1], 10);
                throw new Error("Unrecognized date range slug.")
            }
            var b = r(1);

            function y() {
                var t = function(t) {
                    return Object(b.sprintf)(
                        /* translators: %s: number of days */
                        Object(b._n)("Last %s day", "Last %s days", t, "google-site-kit"), t)
                };
                return {
                    "last-7-days": {
                        slug: "last-7-days",
                        label: t(7),
                        days: 7
                    },
                    "last-14-days": {
                        slug: "last-14-days",
                        label: t(14),
                        days: 14
                    },
                    "last-28-days": {
                        slug: "last-28-days",
                        label: t(28),
                        days: 28
                    },
                    "last-90-days": {
                        slug: "last-90-days",
                        label: t(90),
                        days: 90
                    }
                }
            }
        },
        61: function(t, e, r) {
            "use strict";
            r.d(e, "n", (function() {
                return j
            })), r.d(e, "l", (function() {
                return k.a
            })), r.d(e, "d", (function() {
                return b
            })), r.d(e, "e", (function() {
                return y
            })), r.d(e, "j", (function() {
                return m
            })), r.d(e, "k", (function() {
                return h
            })), r.d(e, "i", (function() {
                return O
            })), r.d(e, "h", (function() {
                return w
            })), r.d(e, "g", (function() {
                return b
            })), r.d(e, "f", (function() {
                return S
            })), r.d(e, "c", (function() {
                return x
            })), r.d(e, "m", (function() {
                return P
            })), r.d(e, "b", (function() {
                return _
            })), r.d(e, "a", (function() {
                return R
            }));
            var n = r(23),
                a = r.n(n),
                o = r(26),
                i = r(8),
                c = r.n(i),
                u = r(1),
                s = r(72),
                l = r(196),
                f = r(11),
                p = r(140),
                d = r(12),
                v = r.n(d),
                g = r(10),
                b = function(t) {
                    return (parseInt(t, 10) || 0) > 0
                };

            function y(t) {
                return t === g.a || b(t)
            }

            function m(t) {
                return "string" == typeof t && /^UA-\d+-\d+$/.test(t)
            }

            function h(t) {
                return t === g.h || m(t)
            }

            function O(t) {
                return t === g.g || b(t)
            }

            function w(t) {
                return "string" == typeof t && t.trim().length > 0
            }

            function S(t) {
                return "string" == typeof t && /^AW-[0-9]+$/.test(t)
            }

            function j(t) {
                if (!m(t)) return !1;
                var e = t.match(/^UA-(\d+)-(\d+)/),
                    r = v()(e, 3);
                return {
                    accountID: r[1],
                    propertyID: t,
                    number: r[2]
                }
            }
            var k = r(190);

            function x(t, e) {
                for (var r = 1; r < t.length; r++) {
                    var n, a;
                    if (null === (n = t[r]) || void 0 === n || null === (a = n[e]) || void 0 === a ? void 0 : a[0]) return "HH:mm:ss"
                }
                return "mm:ss"
            }
            var D = r(50);

            function A(t, e) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return E(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return E(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        r && (t = r);
                        var n = 0,
                            a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return n >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[n++]
                                }
                            },
                            e: function(t) {
                                throw t
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
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return i = t.done, t
                    },
                    e: function(t) {
                        c = !0, o = t
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

            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function P(t, e) {
                var r, n = (Array.isArray(e) ? e : [e]).map(D.d),
                    a = A(t);
                try {
                    for (a.s(); !(r = a.n()).done;) {
                        var o = r.value,
                            i = o.websiteUrl;
                        if (i) {
                            var c, u = A(n);
                            try {
                                for (u.s(); !(c = u.n()).done;) {
                                    if (c.value === Object(D.d)(i)) return o
                                }
                            } catch (t) {
                                u.e(t)
                            } finally {
                                u.f()
                            }
                        }
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                return null
            }

            function _(t) {
                var e, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.keyColumnIndex,
                    o = void 0 === a ? 0 : a,
                    i = n.maxSlices,
                    c = n.withOthers,
                    s = void 0 !== c && c,
                    l = n.tooltipCallback,
                    f = (null == t ? void 0 : t[0]) || {},
                    p = f.data,
                    d = void 0 === p ? {} : p,
                    v = d.rows,
                    g = void 0 === v ? [] : v,
                    b = d.totals,
                    y = void 0 === b ? [] : b,
                    m = "function" == typeof l,
                    h = ["Source", "Percent"];
                m && h.push({
                    type: "string",
                    role: "tooltip",
                    p: {
                        html: !0
                    }
                });
                var O = (null == y || null === (e = y[0]) || void 0 === e || null === (r = e.values) || void 0 === r ? void 0 : r[o]) || 0,
                    w = [h],
                    S = s,
                    j = g.length,
                    k = 1;
                i > 0 ? (S = s && g.length > i, j = Math.min(g.length, S ? i - 1 : i)) : (S = !1, j = g.length);
                for (var x = 0; x < j; x++) {
                    var D = g[x],
                        A = D.metrics[0].values[o],
                        E = O > 0 ? A / O : 0;
                    k -= E;
                    var P = [D.dimensions[0], E];
                    m && P.push(l(D, P)), w.push(P)
                }
                if (S && k > 0) {
                    var _ = [Object(u.__)("Others", "google-site-kit"), k];
                    m && _.push(l(null, _)), w.push(_)
                }
                return w
            }

            function I(t, e, r) {
                var n = [];
                return Object(o.each)(t, (function(t) {
                    if (t.metrics) {
                        var a = t.metrics[e].values,
                            o = t.dimensions[0],
                            i = Object(l.a)(o);
                        n.push([i, a[r]])
                    }
                })), n
            }

            function R(t, e, r) {
                var n, i, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    v = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [Object(u.__)("Users", "google-site-kit"), Object(u.__)("Sessions", "google-site-kit"), Object(u.__)("Bounce Rate %", "google-site-kit"), Object(u.__)("Session Duration", "google-site-kit")],
                    g = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [function(t) {
                        return parseFloat(t).toLocaleString()
                    }, function(t) {
                        return parseFloat(t).toLocaleString()
                    }, function(t) {
                        return Object(f.r)(t / 100, {
                            style: "percent",
                            signDisplay: "never",
                            maximumFractionDigits: 2
                        })
                    }, function(t) {
                        return Object(f.r)(t, "s")
                    }];
                if (!Array.isArray(null === (n = t[0]) || void 0 === n || null === (i = n.data) || void 0 === i ? void 0 : i.rows)) return !1;
                var b = a()(t[0].data.rows),
                    y = b.length;
                if (2 * r > y) {
                    for (var m = new Date, h = 0; r > h; h++) {
                        var O = (m.getMonth() + 1).toString(),
                            w = m.getDate().toString(),
                            S = m.getFullYear().toString() + (2 > O.length ? "0" : "") + O + (2 > w.length ? "0" : "") + w;
                        if (h > y) {
                            var j = {
                                dimensions: [S],
                                metrics: [{
                                    values: [0, 0, 0, 0, 0]
                                }]
                            };
                            b.unshift(j)
                        }
                        m.setDate(m.getDate() - 1)
                    }
                    b.push([0, 0])
                }
                var k = v[e] === Object(u.__)("Session Duration", "google-site-kit"),
                    x = k ? "timeofday" : "number",
                    D = [
                        [{
                            type: "date",
                            label: Object(u.__)("Day", "google-site-kit")
                        }, {
                            type: "string",
                            role: "tooltip",
                            p: {
                                html: !0
                            }
                        }, {
                            type: x,
                            label: v[e]
                        }, {
                            type: x,
                            label: Object(u.__)("Previous period", "google-site-kit")
                        }]
                    ],
                    A = Object(p.a)(b, {
                        dateRangeLength: r
                    }),
                    E = A.compareRange,
                    P = A.currentRange,
                    _ = I(P, l, e),
                    R = I(E, d, e),
                    T = Object(s.a)(),
                    C = {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    };
                return Object(o.each)(_, (function(t, r) {
                    if (t[0] && t[1] && R[r]) {
                        var n = parseFloat(R[r][1]),
                            a = Object(f.b)(t[1], n),
                            o = Object(f.h)(a),
                            i = Object(u.sprintf)(
                                /* translators: 1: date for user stats, 2: previous date for user stats comparison */
                                Object(u._x)("%1$s vs %2$s", "Date range for chart tooltip", "google-site-kit"), t[0].toLocaleDateString(T, C), R[r][0].toLocaleDateString(T, C)),
                            s = Object(u.sprintf)(
                                /* translators: 1: selected stat label, 2: numeric value of selected stat, 3: up or down arrow , 4: different change in percentage */
                                Object(u._x)("%1$s: <strong>%2$s</strong> <em>%3$s %4$s</em>", "Stat information for chart tooltip", "google-site-kit"), v[e], g[e](t[1]), o, Object(f.r)(Math.abs(a), "%"));
                        D.push([t[0], '<div class="'.concat(c()("googlesitekit-visualization-tooltip", {
                            "googlesitekit-visualization-tooltip--up": a > 0,
                            "googlesitekit-visualization-tooltip--down": a < 0
                        }), '">\n\t\t\t\t<p>').concat(i, "</p>\n\t\t\t\t<p>").concat(s, "</p>\n\t\t\t</div>"), k ? Object(f.d)(t[1]) : t[1], k ? Object(f.d)(R[r][1]) : R[r][1]])
                    }
                })), D
            }
        },
        62: function(t, e, r) {
            "use strict";
            (function(t) {
                var n = r(0),
                    a = r.n(n),
                    o = r(8),
                    i = r.n(o);

                function ChangeArrow(e) {
                    var r = e.direction,
                        n = e.invertColor,
                        a = e.width,
                        o = e.height;
                    return t.createElement("svg", {
                        className: i()("googlesitekit-change-arrow", "googlesitekit-change-arrow--".concat(r), {
                            "googlesitekit-change-arrow--inverted-color": n
                        }),
                        width: a,
                        height: o,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t.createElement("path", {
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
                }, e.a = ChangeArrow
            }).call(this, r(3))
        },
        63: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return i
            })), r.d(e, "b", (function() {
                return c
            }));
            var n = r(29),
                a = r.n(n),
                o = r(69),
                i = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        __html: o.a.sanitize(t, e)
                    }
                };

            function c(t) {
                var e, r = "object" === a()(t) ? t.toString() : t;
                return null == r || null === (e = r.replace) || void 0 === e ? void 0 : e.call(r, /\/+$/, "")
            }
        },
        64: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return a
            }));
            var n = r(2),
                a = function(t) {
                    return function(e) {
                        return function FilteredComponent(r) {
                            return Object(n.createElement)(n.Fragment, {}, "", Object(n.createElement)(e, r), t)
                        }
                    }
                }
        },
        69: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return a
                }));
                var n = r(118),
                    a = r.n(n)()(t)
            }).call(this, r(18))
        },
        72: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "c", (function() {
                    return w
                })), r.d(e, "d", (function() {
                    return j
                })), r.d(e, "b", (function() {
                    return k
                })), r.d(e, "a", (function() {
                    return x
                }));
                var n = r(12),
                    a = r.n(n),
                    o = r(29),
                    i = r.n(o),
                    c = r(6),
                    u = r.n(c),
                    s = r(17),
                    l = r.n(s),
                    f = r(26),
                    p = r(67),
                    d = r.n(p),
                    v = r(1);

                function g(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function b(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? g(Object(r), !0).forEach((function(e) {
                            u()(t, e, r[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        }))
                    }
                    return t
                }
                var y = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = m(t, e),
                            n = r.formatUnit,
                            a = r.formatDecimal;
                        try {
                            return n()
                        } catch (t) {
                            return a()
                        }
                    },
                    m = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t = parseInt(t, 10), Number.isNaN(t) && (t = 0);
                        var r = Math.floor(t / 60 / 60),
                            n = Math.floor(t / 60 % 60),
                            a = Math.floor(t % 60);
                        return {
                            hours: r,
                            minutes: n,
                            seconds: a,
                            formatUnit: function() {
                                var o = e.unitDisplay,
                                    i = b(b({
                                        unitDisplay: void 0 === o ? "short" : o
                                    }, l()(e, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === t ? j(a, b(b({}, i), {}, {
                                    unit: "second"
                                })) : Object(v.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(v._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), a ? j(a, b(b({}, i), {}, {
                                        unit: "second"
                                    })) : "", n ? j(n, b(b({}, i), {}, {
                                        unit: "minute"
                                    })) : "", r ? j(r, b(b({}, i), {}, {
                                        unit: "hour"
                                    })) : "").trim()
                            },
                            formatDecimal: function() {
                                var e = Object(v.sprintf)( // translators: %s number of seconds with "s" as the abbreviated unit.
                                    Object(v.__)("%ds", "google-site-kit"), a);
                                if (0 === t) return e;
                                var o = Object(v.sprintf)( // translators: %s number of minutes with "m" as the abbreviated unit.
                                        Object(v.__)("%dm", "google-site-kit"), n),
                                    i = Object(v.sprintf)( // translators: %s number of hours with "h" as the abbreviated unit.
                                        Object(v.__)("%dh", "google-site-kit"), r);
                                return Object(v.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(v._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), a ? e : "", n ? o : "", r ? i : "").trim()
                            }
                        }
                    },
                    h = function(t) {
                        return 1e6 <= t ? Math.round(t / 1e5) / 10 : 1e4 <= t ? Math.round(t / 1e3) : 1e3 <= t ? Math.round(t / 100) / 10 : t
                    },
                    O = function(t) {
                        var e = {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        };
                        return 1e6 <= t ? Object(v.sprintf)( // translators: %s: an abbreviated number in millions.
                            Object(v.__)("%sM", "google-site-kit"), j(h(t), t % 10 == 0 ? {} : e)) : 1e4 <= t ? Object(v.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(v.__)("%sK", "google-site-kit"), j(h(t))) : 1e3 <= t ? Object(v.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(v.__)("%sK", "google-site-kit"), j(h(t), t % 10 == 0 ? {} : e)) : j(t, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    w = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        t = Object(f.isFinite)(t) ? t : Number(t), Object(f.isFinite)(t) || (console.warn("Invalid number", t, i()(t)), t = 0);
                        var r = {};
                        if ("%" === e) r = {
                            style: "percent",
                            maximumFractionDigits: 2
                        };
                        else {
                            if ("s" === e) return y(t, {
                                unitDisplay: "narrow"
                            });
                            e && "string" == typeof e ? r = {
                                style: "currency",
                                currency: e
                            } : Object(f.isPlainObject)(e) && (r = b({}, e))
                        }
                        var n = r,
                            a = n.style,
                            o = void 0 === a ? "metric" : a;
                        return "metric" === o ? O(t) : "duration" === o ? y(t, e) : j(t, r)
                    },
                    S = d()(console.warn),
                    j = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = e.locale,
                            n = void 0 === r ? x() : r,
                            o = l()(e, ["locale"]);
                        try {
                            return new Intl.NumberFormat(n, o).format(t)
                        } catch (e) {
                            S("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(n), ", ").concat(JSON.stringify(o), " ).format( ").concat(i()(t), " )"), e.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, u = ["signDisplay", "compactDisplay"], s = {}, f = 0, p = Object.entries(o); f < p.length; f++) {
                            var d = a()(p[f], 2),
                                v = d[0],
                                g = d[1];
                            c[v] && g === c[v] || (u.includes(v) || (s[v] = g))
                        }
                        try {
                            return new Intl.NumberFormat(n, s).format(t)
                        } catch (e) {
                            return new Intl.NumberFormat(n).format(t)
                        }
                    },
                    k = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = e.locale,
                            n = void 0 === r ? x() : r,
                            a = e.style,
                            o = void 0 === a ? "long" : a,
                            i = e.type,
                            c = void 0 === i ? "conjunction" : i;
                        if (Intl.ListFormat) {
                            var u = new Intl.ListFormat(n, {
                                style: o,
                                type: c
                            });
                            return u.format(t)
                        }
                        /* translators: used between list items, there is a space after the comma. */
                        var s = Object(v.__)(", ", "google-site-kit");
                        return t.join(s)
                    },
                    x = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            r = Object(f.get)(e, ["_googlesitekitLegacyData", "locale"]);
                        if (r) {
                            var n = r.match(/^(\w{2})?(_)?(\w{2})/);
                            if (n && n[0]) return n[0].replace(/_/g, "-")
                        }
                        return e.navigator.language
                    }
            }).call(this, r(18))
        },
        73: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return A
            })), r.d(e, "b", (function() {
                return E
            })), r.d(e, "c", (function() {
                return P
            })), r.d(e, "d", (function() {
                return I
            })), r.d(e, "e", (function() {
                return R
            })), r.d(e, "g", (function() {
                return C
            })), r.d(e, "f", (function() {
                return N
            }));
            var n, a = r(5),
                o = r.n(a),
                i = r(23),
                c = r.n(i),
                u = r(6),
                s = r.n(u),
                l = r(9),
                f = r.n(l),
                p = r(207),
                d = r.n(p),
                v = r(67),
                g = r.n(v),
                b = r(104);

            function y(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(r), !0).forEach((function(e) {
                        s()(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var h = function() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    var n = e.reduce((function(t, e) {
                            return m(m({}, t), e)
                        }), {}),
                        a = e.reduce((function(t, e) {
                            return [].concat(c()(t), c()(Object.keys(e)))
                        }), []),
                        o = _(a);
                    return f()(0 === o.length, "collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(o.join(", "), ". Check your data stores for duplicates.")), n
                },
                O = h,
                w = h,
                S = function() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    var n, a = [].concat(e);
                    return "function" != typeof a[0] && (n = a.shift()),
                        function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return a.reduce((function(t, r) {
                                return r(t, e)
                            }), t)
                        }
                },
                j = h,
                k = h,
                x = h,
                D = function(t) {
                    return t
                },
                A = function() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    var n = x.apply(void 0, c()(e.map((function(t) {
                        return t.initialState || {}
                    }))));
                    return {
                        initialState: n,
                        controls: w.apply(void 0, c()(e.map((function(t) {
                            return t.controls || {}
                        })))),
                        actions: O.apply(void 0, c()(e.map((function(t) {
                            return t.actions || {}
                        })))),
                        reducer: S.apply(void 0, [n].concat(c()(e.map((function(t) {
                            return t.reducer || D
                        }))))),
                        resolvers: j.apply(void 0, c()(e.map((function(t) {
                            return t.resolvers || {}
                        })))),
                        selectors: k.apply(void 0, c()(e.map((function(t) {
                            return t.selectors || {}
                        }))))
                    }
                },
                E = {
                    getRegistry: function() {
                        return {
                            payload: {},
                            type: "GET_REGISTRY"
                        }
                    },
                    await: o.a.mark((function t(e) {
                        return o.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", {
                                        payload: {
                                            value: e
                                        },
                                        type: "AWAIT"
                                    });
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))
                },
                P = (n = {}, s()(n, "GET_REGISTRY", Object(b.d)((function(t) {
                    return function() {
                        return t
                    }
                }))), s()(n, "AWAIT", (function(t) {
                    return t.payload.value
                })), n),
                _ = function(t) {
                    for (var e = [], r = {}, n = 0; n < t.length; n++) {
                        var a = t[n];
                        r[a] = r[a] >= 1 ? r[a] + 1 : 1, r[a] > 1 && e.push(a)
                    }
                    return e
                },
                I = {
                    actions: E,
                    controls: P,
                    reducer: D
                },
                R = function(t) {
                    return function(e) {
                        return T(t(e))
                    }
                },
                T = g()((function(t) {
                    return d()(t, (function(t, e) {
                        return function() {
                            var r = t.apply(void 0, arguments);
                            return f()(void 0 !== r, "".concat(e, "(...) is not resolved")), r
                        }
                    }))
                }));

            function C(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = e.negate,
                    n = void 0 !== r && r,
                    a = Object(b.e)((function(e) {
                        return function(r) {
                            var a = !n,
                                o = !!n;
                            try {
                                for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) c[u - 1] = arguments[u];
                                return t.apply(void 0, [e, r].concat(c)), a
                            } catch (t) {
                                return o
                            }
                        }
                    })),
                    o = Object(b.e)((function(e) {
                        return function(r) {
                            for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                            t.apply(void 0, [e, r].concat(a))
                        }
                    }));
                return {
                    safeSelector: a,
                    dangerousSelector: o
                }
            }

            function N(t, e) {
                return f()("function" == typeof t, "a validator function is required."), f()("function" == typeof e, "an action creator function is required."), f()("Generator" !== t[Symbol.toStringTag] && "GeneratorFunction" !== t[Symbol.toStringTag], "an action’s validator function must not be a generator."),
                    function() {
                        return t.apply(void 0, arguments), e.apply(void 0, arguments)
                    }
            }
        },
        76: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return n
            })), r.d(e, "a", (function() {
                return a
            })), r.d(e, "c", (function() {
                return o
            }));
            var n = function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                a = function(t) {
                    return t.replace(/([a-z0-9]{1})([A-Z]{1})/g, "$1_$2").toUpperCase()
                };

            function o(t) {
                return t.split("-").map((function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                })).join("")
            }
        },
        80: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return u
                })), r.d(e, "b", (function() {
                    return s
                })), r.d(e, "c", (function() {
                    return f
                }));
                var n = r(12),
                    a = r.n(n),
                    o = r(1);

                function i(t, e) {
                    var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!r) {
                        if (Array.isArray(t) || (r = function(t, e) {
                                if (!t) return;
                                if ("string" == typeof t) return c(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                "Object" === r && t.constructor && (r = t.constructor.name);
                                if ("Map" === r || "Set" === r) return Array.from(t);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e)
                            }(t)) || e && t && "number" == typeof t.length) {
                            r && (t = r);
                            var n = 0,
                                a = function() {};
                            return {
                                s: a,
                                n: function() {
                                    return n >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[n++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: a
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, i = !0,
                        u = !1;
                    return {
                        s: function() {
                            r = r.call(t)
                        },
                        n: function() {
                            var t = r.next();
                            return i = t.done, t
                        },
                        e: function(t) {
                            u = !0, o = t
                        },
                        f: function() {
                            try {
                                i || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                    }
                }

                function c(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                    return n
                }
                var u = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = null,
                            r = null,
                            n = document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),
                            a = document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");
                        if (n && a) return !1;
                        if (e = document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"), r = document.querySelector("#wp-admin-bar-google-site-kit .ab-item"), null === e && null === r) return !1;
                        var i = document.createElement("span");
                        i.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(t));
                        var c = document.createElement("span");
                        c.setAttribute("class", "plugin-count"), c.setAttribute("aria-hidden", "true"), c.textContent = t;
                        var u = document.createElement("span");
                        return u.setAttribute("class", "screen-reader-text"), u.textContent = Object(o.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(o._n)("%d notification", "%d notifications", t, "google-site-kit"), t), i.appendChild(c), i.appendChild(u), e && null === n && e.appendChild(i), r && null === a && r.appendChild(i), i
                    },
                    s = function() {
                        t.localStorage && t.localStorage.clear(), t.sessionStorage && t.sessionStorage.clear()
                    },
                    l = function(t) {
                        for (var e = location.search.substr(1).split("&"), r = {}, n = 0; n < e.length; n++) r[e[n].split("=")[0]] = decodeURIComponent(e[n].split("=")[1]);
                        return t ? r.hasOwnProperty(t) ? decodeURIComponent(r[t].replace(/\+/g, " ")) : "" : r
                    },
                    f = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                            r = new URL(e.href);
                        if (t) return r.searchParams && r.searchParams.get ? r.searchParams.get(t) : l(t);
                        var n, o = {},
                            c = i(r.searchParams.entries());
                        try {
                            for (c.s(); !(n = c.n()).done;) {
                                var u = a()(n.value, 2),
                                    s = u[0],
                                    f = u[1];
                                o[s] = f
                            }
                        } catch (t) {
                            c.e(t)
                        } finally {
                            c.f()
                        }
                        return o
                    }
            }).call(this, r(18))
        },
        84: function(t, e, r) {
            "use strict";
            (function(t) {
                r(46), r(47)
            }).call(this, r(18))
        },
        85: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "b", (function() {
                    return o
                })), r.d(e, "c", (function() {
                    return i
                })), r.d(e, "a", (function() {
                    return c
                }));
                var n = r(194),
                    a = r(62),
                    o = function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (Number.isNaN(Number(e))) return "";
                        var o = r.invertColor,
                            i = void 0 !== o && o;
                        return Object(n.a)(t.createElement(a.a, {
                            direction: e > 0 ? "up" : "down",
                            invertColor: i
                        }))
                    },
                    i = function(t) {
                        var e, r, n, a, o, i, c, u, s, l, f, p, d, v, g;
                        if (void 0 !== t) return 1 === (null == t || null === (e = t[0]) || void 0 === e || null === (r = e.data) || void 0 === r || null === (n = r.rows) || void 0 === n ? void 0 : n.length) || (null == t || null === (a = t[0]) || void 0 === a || null === (o = a.data) || void 0 === o || null === (i = o.rows) || void 0 === i || null === (c = i[0]) || void 0 === c || null === (u = c.metrics) || void 0 === u || null === (s = u[0]) || void 0 === s || null === (l = s.values) || void 0 === l ? void 0 : l[0]) === (null == t || null === (f = t[0]) || void 0 === f || null === (p = f.data) || void 0 === p || null === (d = p.totals) || void 0 === d || null === (v = d[0]) || void 0 === v || null === (g = v.values) || void 0 === g ? void 0 : g[0])
                    },
                    c = function(t, e) {
                        return t > 0 && e > 0 ? t / e - 1 : t > 0 ? 1 : e > 0 ? -1 : 0
                    }
            }).call(this, r(3))
        },
        86: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return l
                }));
                var n = r(6),
                    a = r.n(n),
                    o = r(87),
                    i = r(88);

                function c(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function u(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(r), !0).forEach((function(e) {
                            a()(t, e, r[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        }))
                    }
                    return t
                }
                var s = {
                    currentUserRoles: [],
                    activeModules: [],
                    trackingEnabled: !1,
                    trackingID: "",
                    referenceSiteURL: "",
                    userIDHash: ""
                };

                function l(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                        a = u(u({}, s), e);
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
        87: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return o
                }));
                var n = r(51),
                    a = r(28);

                function o(e, r) {
                    var o, i = Object(n.a)(r);
                    return function() {
                        var r = t.document;
                        if (void 0 === o && (o = !!r.querySelector("script[".concat(a.b, "]"))), !o) {
                            var n = r.createElement("script");
                            n.setAttribute(a.b, ""), n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js?id=".concat(e.trackingID, "&l=").concat(a.a), r.head.appendChild(n), i("js", new Date), i("config", e.trackingID, {
                                send_page_view: e.isSiteKitScreen
                            }), o = !0
                        }
                    }
                }
            }).call(this, r(18))
        },
        88: function(t, e, r) {
            "use strict";
            (function(t) {
                r.d(e, "a", (function() {
                    return d
                }));
                var n = r(5),
                    a = r.n(n),
                    o = r(6),
                    i = r.n(o),
                    c = r(14),
                    u = r.n(c),
                    s = r(51),
                    l = r(30);

                function f(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function p(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? f(Object(r), !0).forEach((function(e) {
                            i()(t, e, r[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        }))
                    }
                    return t
                }

                function d(e, r, n, o) {
                    var i = Object(s.a)(r);
                    return function() {
                        var r = u()(a.a.mark((function r(c, u, s, f) {
                            var d, v, g, b, y, m, h, O, w, S;
                            return a.a.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (b = e.activeModules, y = e.referenceSiteURL, m = e.trackingEnabled, h = e.trackingID, O = e.userIDHash, m) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return n(), w = null !== (d = null === (v = t._googlesitekitUserData) || void 0 === v || null === (g = v.user) || void 0 === g ? void 0 : g.roles) && void 0 !== d ? d : [], S = {
                                            send_to: h,
                                            event_category: c,
                                            event_label: s,
                                            value: f,
                                            dimension1: y,
                                            dimension2: w.join(","),
                                            dimension3: O,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(l.a).join(","),
                                            dimension6: b.join(",")
                                        }, r.abrupt("return", new Promise((function(t) {
                                            var e, r, n = setTimeout((function() {
                                                    o.console.warn('Tracking event "'.concat(u, '" (category "').concat(c, '") took too long to fire.')), t()
                                                }), 1e3),
                                                a = function() {
                                                    clearTimeout(n), t()
                                                };
                                            i("event", u, p(p({}, S), {}, {
                                                event_callback: a
                                            })), (null === (e = o._gaUserPrefs) || void 0 === e || null === (r = e.ioo) || void 0 === r ? void 0 : r.call(e)) && a()
                                        })));
                                    case 7:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })));
                        return function(t, e, n, a) {
                            return r.apply(this, arguments)
                        }
                    }()
                }
            }).call(this, r(18))
        },
        98: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return g
            })), r.d(e, "c", (function() {
                return y
            })), r.d(e, "b", (function() {
                return m
            }));
            var n = r(17),
                a = r.n(n),
                o = r(6),
                i = r.n(o),
                c = r(5),
                u = r.n(c),
                s = r(9),
                l = r.n(s),
                f = r(4),
                p = r.n(f),
                d = r(40),
                v = p.a.createRegistryControl,
                g = function(t) {
                    var e;
                    l()(t, "storeName is required to create a snapshot store.");
                    var r = {},
                        n = {
                            deleteSnapshot: u.a.mark((function t() {
                                var e;
                                return u.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, {
                                                payload: {},
                                                type: "DELETE_SNAPSHOT"
                                            };
                                        case 2:
                                            return e = t.sent, t.abrupt("return", e);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })),
                            restoreSnapshot: u.a.mark((function t() {
                                var e, r, n, a, o, i, c = arguments;
                                return u.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e = c.length > 0 && void 0 !== c[0] ? c[0] : {}, r = e.clearAfterRestore, n = void 0 === r || r, t.next = 4, {
                                                payload: {},
                                                type: "RESTORE_SNAPSHOT"
                                            };
                                        case 4:
                                            if (a = t.sent, o = a.cacheHit, i = a.value, !o) {
                                                t.next = 13;
                                                break
                                            }
                                            return t.next = 10, {
                                                payload: {
                                                    snapshot: i
                                                },
                                                type: "SET_STATE_FROM_SNAPSHOT"
                                            };
                                        case 10:
                                            if (!n) {
                                                t.next = 13;
                                                break
                                            }
                                            return t.next = 13, {
                                                payload: {},
                                                type: "DELETE_SNAPSHOT"
                                            };
                                        case 13:
                                            return t.abrupt("return", o);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })),
                            createSnapshot: u.a.mark((function t() {
                                var e;
                                return u.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, {
                                                payload: {},
                                                type: "CREATE_SNAPSHOT"
                                            };
                                        case 2:
                                            return e = t.sent, t.abrupt("return", e);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))
                        },
                        o = (e = {}, i()(e, "DELETE_SNAPSHOT", (function() {
                            return Object(d.a)("datastore::cache::".concat(t))
                        })), i()(e, "CREATE_SNAPSHOT", v((function(e) {
                            return function() {
                                return Object(d.d)("datastore::cache::".concat(t), e.stores[t].store.getState())
                            }
                        }))), i()(e, "RESTORE_SNAPSHOT", (function() {
                            return Object(d.b)("datastore::cache::".concat(t), 3600)
                        })), e);
                    return {
                        initialState: r,
                        actions: n,
                        controls: o,
                        reducer: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
                                e = arguments.length > 1 ? arguments[1] : void 0,
                                n = e.type,
                                o = e.payload;
                            switch (n) {
                                case "SET_STATE_FROM_SNAPSHOT":
                                    var i = o.snapshot,
                                        c = (i.error, a()(i, ["error"]));
                                    return c;
                                default:
                                    return t
                            }
                        }
                    }
                },
                b = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.a;
                    return Object.values(t.stores).filter((function(t) {
                        return Object.keys(t.getActions()).includes("restoreSnapshot")
                    }))
                },
                y = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.a;
                    return Promise.all(b(t).map((function(t) {
                        return t.getActions().createSnapshot()
                    })))
                },
                m = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.a;
                    return Promise.all(b(t).map((function(t) {
                        return t.getActions().restoreSnapshot()
                    })))
                }
        }
    },
    [
        [1085, 1, 0]
    ]
]);
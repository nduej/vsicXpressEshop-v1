(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [19], {
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
                return g
            })), n.d(t, "r", (function() {
                return m
            })), n.d(t, "t", (function() {
                return f
            })), n.d(t, "p", (function() {
                return p
            })), n.d(t, "q", (function() {
                return y
            })), n.d(t, "n", (function() {
                return v
            })), n.d(t, "o", (function() {
                return b
            })), n.d(t, "l", (function() {
                return h
            })), n.d(t, "m", (function() {
                return O
            })), n.d(t, "j", (function() {
                return T
            })), n.d(t, "i", (function() {
                return E
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
                g = "dashboardAllTrafficWidgetDimensionName",
                m = "dashboardAllTrafficWidgetDimensionColor",
                f = "dashboardAllTrafficWidgetDimensionValue",
                p = "dashboardAllTrafficWidgetActiveRowIndex",
                y = "dashboardAllTrafficWidgetLoaded",
                v = "legacy",
                b = "ua",
                h = "ga4",
                O = "ga4-transitional",
                T = "ua",
                E = "ga4"
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
                    g = n.n(d);

                function Cell(t) {
                    var n, a = t.className,
                        i = t.alignTop,
                        c = t.alignMiddle,
                        l = t.alignBottom,
                        u = t.alignRight,
                        d = t.alignLeft,
                        m = t.smAlignRight,
                        f = t.mdAlignRight,
                        p = t.lgAlignRight,
                        y = t.smSize,
                        v = t.smStart,
                        b = t.smOrder,
                        h = t.mdSize,
                        O = t.mdStart,
                        T = t.mdOrder,
                        E = t.lgSize,
                        _ = t.lgStart,
                        A = t.lgOrder,
                        k = t.size,
                        S = t.children,
                        N = s()(t, ["className", "alignTop", "alignMiddle", "alignBottom", "alignRight", "alignLeft", "smAlignRight", "mdAlignRight", "lgAlignRight", "smSize", "smStart", "smOrder", "mdSize", "mdStart", "mdOrder", "lgSize", "lgStart", "lgOrder", "size", "children"]);
                    return e.createElement("div", r()({}, N, {
                        className: g()(a, "mdc-layout-grid__cell", (n = {
                            "mdc-layout-grid__cell--align-top": i,
                            "mdc-layout-grid__cell--align-middle": c,
                            "mdc-layout-grid__cell--align-bottom": l,
                            "mdc-layout-grid__cell--align-right": u,
                            "mdc-layout-grid__cell--align-left": d,
                            "mdc-layout-grid__cell--align-right-phone": m,
                            "mdc-layout-grid__cell--align-right-tablet": f,
                            "mdc-layout-grid__cell--align-right-desktop": p
                        }, o()(n, "mdc-layout-grid__cell--span-".concat(k), 12 >= k && k > 0), o()(n, "mdc-layout-grid__cell--span-".concat(E, "-desktop"), 12 >= E && E > 0), o()(n, "mdc-layout-grid__cell--start-".concat(_, "-desktop"), 12 >= _ && _ > 0), o()(n, "mdc-layout-grid__cell--order-".concat(A, "-desktop"), 12 >= A && A > 0), o()(n, "mdc-layout-grid__cell--span-".concat(h, "-tablet"), 8 >= h && h > 0), o()(n, "mdc-layout-grid__cell--start-".concat(O, "-tablet"), 8 >= O && O > 0), o()(n, "mdc-layout-grid__cell--order-".concat(T, "-tablet"), 8 >= T && T > 0), o()(n, "mdc-layout-grid__cell--span-".concat(y, "-phone"), 4 >= y && y > 0), o()(n, "mdc-layout-grid__cell--start-".concat(v, "-phone"), 4 >= v && v > 0), o()(n, "mdc-layout-grid__cell--order-".concat(b, "-phone"), 4 >= b && b > 0), n))
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
                    g = Object(d.forwardRef)((function(t, n) {
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
                g.propTypes = {
                    alignLeft: s.a.bool,
                    fill: s.a.bool,
                    className: s.a.string,
                    children: s.a.node
                }, g.defaultProps = {
                    className: ""
                }, t.a = g
            }).call(this, n(3))
        },
        1081: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(4),
                r = n.n(a),
                i = n(136),
                o = n.n(i),
                c = n(301),
                s = n.n(c),
                l = n(1),
                u = n(30),
                d = n(115),
                g = n(34),
                m = n(548),
                f = n(10),
                p = (n(520), n(674)),
                y = (n(521), n(522), n(523), n(524), n(675)),
                v = (n(525), n(677)),
                b = (n(526), n(527), n(606)),
                h = n(762),
                O = n(763),
                T = n(764),
                E = n(765),
                _ = n(766),
                A = n(678),
                k = n(679),
                S = n(680),
                N = n(98),
                I = n(5),
                j = n.n(I),
                D = n(14),
                w = n.n(D),
                P = n(9),
                C = n.n(P),
                R = n(33),
                x = n.n(R),
                Z = n(36),
                M = n(22),
                G = n(25),
                L = n(41),
                U = n(157),
                F = n(61),
                B = n(73),
                W = n(89);

            function H(e) {
                return z.apply(this, arguments)
            }

            function z() {
                return (z = w()(j.a.mark((function e(t) {
                    var n, a, r, i;
                    return j.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.select, a = t.dispatch, n(L.b).haveSettingsChanged()) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", {});
                            case 3:
                                return e.next = 5, a(L.b).submitChanges();
                            case 5:
                                if (r = e.sent, i = r.error, !Object(W.c)(i)) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: i
                                });
                            case 9:
                                return e.abrupt("return", {});
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function V() {
                return (V = w()(j.a.mark((function e(t) {
                    var n, a, r, i, o, c, s, l, u, d, g, m, p, y, v, b, h, O, T, E;
                    return j.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.select, a = t.dispatch, (r = n(f.f).getPropertyID()) !== f.h) {
                                    e.next = 14;
                                    break
                                }
                                return i = n(f.f).getAccountID(), e.next = 6, a(f.f).createProperty(i);
                            case 6:
                                if (o = e.sent, c = o.response, !(s = o.error)) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: s
                                });
                            case 11:
                                r = c.id, a(f.f).setPropertyID(c.id), a(f.f).setInternalWebPropertyID(c.internalWebPropertyId);
                            case 14:
                                if (n(f.f).getProfileID() !== f.g) {
                                    e.next = 26;
                                    break
                                }
                                return l = n(Z.a).getValue(f.e, "profileName"), u = n(f.f).getAccountID(), e.next = 20, a(f.f).createProfile(u, r, {
                                    profileName: l
                                });
                            case 20:
                                if (d = e.sent, g = d.response, !(m = d.error)) {
                                    e.next = 25;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: m
                                });
                            case 25:
                                a(f.f).setProfileID(g.id);
                            case 26:
                                if (p = n(L.b).getPropertyID(), y = n(L.b).getWebDataStreamID(), p !== L.c && y !== L.d) {
                                    e.next = 35;
                                    break
                                }
                                return e.next = 31, H(t);
                            case 31:
                                if (v = e.sent, !(b = v.error)) {
                                    e.next = 35;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: b
                                });
                            case 35:
                                if (!n(f.f).haveSettingsChanged()) {
                                    e.next = 42;
                                    break
                                }
                                return e.next = 38, a(f.f).saveSettings();
                            case 38:
                                if (h = e.sent, !(O = h.error)) {
                                    e.next = 42;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: O
                                });
                            case 42:
                                return e.next = 44, x.a.invalidateCache("modules", "analytics");
                            case 44:
                                return e.next = 46, H(t);
                            case 46:
                                if (T = e.sent, !(E = T.error)) {
                                    e.next = 50;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: E
                                });
                            case 50:
                                return e.abrupt("return", {});
                            case 51:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var q = o.a.createModuleStore("analytics", {
                    storeName: f.f,
                    settingSlugs: ["accountID", "adsConversionID", "anonymizeIP", "canUseSnippet", "internalWebPropertyID", "ownerID", "profileID", "propertyID", "trackingDisabled", "useSnippet"],
                    adminPage: Object(u.b)("unifiedDashboard") ? void 0 : "googlesitekit-module-analytics",
                    submitChanges: function(e) {
                        return V.apply(this, arguments)
                    },
                    rollbackChanges: function(e) {
                        var t = e.select,
                            n = e.dispatch;
                        n(L.b).rollbackChanges(), n(Z.a).setValues(f.e, {
                            enableGA4: void 0
                        }), t(f.f).haveSettingsChanged() && n(f.f).rollbackSettings()
                    },
                    validateCanSubmitChanges: function(e) {
                        var t = Object(B.e)(e),
                            n = t(f.f),
                            a = n.getAccountID,
                            r = n.getAdsConversionID,
                            i = n.getInternalWebPropertyID,
                            o = n.getProfileID,
                            c = n.getPropertyID,
                            s = n.hasExistingTagPermission,
                            l = n.hasTagPermission,
                            u = n.haveSettingsChanged,
                            d = n.isDoingSubmitChanges;
                        if (C()(!d(), U.a), t(M.a).isModuleActive("tagmanager")) {
                            var g = t(G.g).getSingleAnalyticsPropertyID();
                            C()(!Object(F.j)(g) || !1 !== l(g), "cannot submit changes without having permissions for GTM property ID")
                        }
                        if (C()(u() || e(L.b).haveSettingsChanged(), U.b), C()(Object(F.d)(a()), "a valid accountID is required to submit changes"), C()(Object(F.k)(c()), "a valid propertyID is required to submit changes"), C()(Object(F.i)(o()), "a valid profileID is required to submit changes"), r() && C()(Object(F.f)(r()), "a valid adsConversionID is required to submit changes"), o() === f.g) {
                            var m = e(Z.a).getValue(f.e, "profileName");
                            C()(Object(F.h)(m), "a valid profile name is required to submit changes")
                        }
                        C()(!Object(F.j)(c()) || Object(F.g)(i()), "cannot submit changes with incorrect internal webPropertyID"), C()(!1 !== s(), "cannot submit without proper permissions"), e(f.f).canUseGA4Controls() && e(L.b).__dangerousCanSubmitChanges()
                    }
                }),
                K = n(6),
                Y = n.n(K),
                $ = n(57),
                J = n.n($),
                X = n(45),
                Q = n(54),
                ee = n(322);

            function te(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(n), !0).forEach((function(t) {
                        Y()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ae = r.a.createRegistrySelector,
                re = r.a.createRegistryControl,
                ie = Object(X.a)({
                    baseName: "getTagPermission",
                    controlCallback: function(e) {
                        var t = e.propertyID;
                        return x.a.get("modules", "analytics", "tag-permission", {
                            propertyID: t
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = t.accountID,
                            r = t.permission,
                            i = n.propertyID;
                        return ne(ne({}, e), {}, {
                            tagPermissions: ne(ne({}, e.tagPermissions || {}), {}, Y()({}, i, {
                                accountID: a,
                                permission: r
                            }))
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            propertyID: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.propertyID;
                        C()(t, "propertyID is required.")
                    }
                }),
                oe = Object(ee.a)({
                    storeName: f.f,
                    tagMatchers: [/<script [^>]*src=['|"]https:\/\/www.googletagmanager.com\/gtag\/js\?id=(UA-.*?)['|"][^>]*><\/script>/, /<script[^>]*>[^<]+google-analytics\.com\/analytics\.js[^<]+(UA-\d+-\d+)/, /__gaTracker\( ?['|"]create['|"], ?['|"](UA-.*?)['|"], ?['|"]auto['|"] ?\)/, /ga\( ?['|"]create['|"], ?['|"](UA-.*?)['|"], ?['|"]auto['|"] ?\)/, /_gaq.push\( ?\[ ?['|"]_setAccount['|"], ?['|"](UA-.*?)['|"] ?] ?\)/, /<amp-analytics [^>]*type="gtag"[^>]*>[^<]*<script type="application\/json">[^<]*"gtag_id":\s*"(UA-[^"]+)"/, /<amp-analytics [^>]*type="googleanalytics"[^>]*>[^<]*<script type="application\/json">[^<]*"account":\s*"(UA-[^"]+)"/],
                    isValidTag: F.j
                }),
                ce = {
                    waitForTagPermission: function(e) {
                        return {
                            payload: {
                                propertyID: e
                            },
                            type: "WAIT_FOR_TAG_PERMISSION"
                        }
                    }
                },
                se = Y()({}, "WAIT_FOR_TAG_PERMISSION", re((function(e) {
                    return function(t) {
                        var n = t.payload.propertyID,
                            a = e.select(f.f),
                            r = a.getTagPermission,
                            i = a.hasFinishedResolution;
                        r(n);
                        var o = function() {
                            return i("getTagPermission", [n])
                        };
                        if (!o()) return new Promise((function(t) {
                            var n = e.subscribe((function() {
                                o() && (n(), t())
                            }))
                        }))
                    }
                }))),
                le = {
                    getTagPermission: j.a.mark((function e(t) {
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Object(F.j)(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, r.a.commonActions.getRegistry();
                                case 4:
                                    if (void 0 === e.sent.select(f.f).getTagPermission(t)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return e.next = 9, ie.actions.fetchGetTagPermission(t);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                ue = {
                    hasExistingTagPermission: ae((function(e) {
                        return function() {
                            var t = e(f.f).hasExistingTag();
                            if (void 0 !== t) {
                                if (t) {
                                    var n = e(f.f).getExistingTag();
                                    return e(f.f).hasTagPermission(n)
                                }
                                return null
                            }
                        }
                    })),
                    hasTagPermission: ae((function(e) {
                        return function(t, n) {
                            return (e(f.f).getTagPermission(n) || {}).permission
                        }
                    })),
                    getTagPermission: function(e, t) {
                        return e.tagPermissions[t]
                    }
                },
                de = r.a.combineStores(oe, ie, {
                    initialState: {
                        tagPermissions: {}
                    },
                    actions: ce,
                    controls: se,
                    resolvers: le,
                    selectors: ue
                }),
                ge = (de.initialState, de.actions),
                me = (de.controls, de.reducer, de.resolvers, de.selectors, de),
                fe = n(23),
                pe = n.n(fe),
                ye = n(15);

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

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(Object(n), !0).forEach((function(t) {
                        Y()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var he = Q.a.clearError,
                Oe = Q.a.receiveError,
                Te = r.a.createRegistrySelector,
                Ee = r.a.createRegistryControl,
                _e = Object(X.a)({
                    baseName: "getPropertiesProfiles",
                    controlCallback: function(e) {
                        var t = e.accountID;
                        return x.a.get("modules", "analytics", "properties-profiles", {
                            accountID: t
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.accountID;
                        return be(be({}, e), {}, {
                            isAwaitingPropertiesProfilesCompletion: be(be({}, e.isAwaitingPropertiesProfilesCompletion), {}, Y()({}, a, !0))
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
                        C()(t, "accountID is required.")
                    }
                }),
                Ae = Object(X.a)({
                    baseName: "createProperty",
                    controlCallback: function(e) {
                        var t = e.accountID;
                        return x.a.set("modules", "analytics", "create-property", {
                            accountID: t
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.accountID;
                        return be(be({}, e), {}, {
                            properties: be(be({}, e.properties), {}, Y()({}, a, [].concat(pe()(e.properties[a] || []), [t])))
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
                        C()(t, "accountID is required.")
                    }
                }),
                ke = {
                    properties: {},
                    isAwaitingPropertiesProfilesCompletion: {},
                    matchedProperty: void 0,
                    primaryPropertyType: f.j
                },
                Se = {
                    createProperty: Object(B.f)((function(e) {
                        C()(e, "accountID is required.")
                    }), j.a.mark((function e(t) {
                        var n, a, r;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Ae.actions.fetchCreateProperty(t);
                                case 2:
                                    return n = e.sent, a = n.response, r = n.error, e.abrupt("return", {
                                        response: a,
                                        error: r
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    receiveMatchedProperty: function(e) {
                        return C()(e, "matchedProperty is required."), {
                            payload: {
                                matchedProperty: e
                            },
                            type: "RECEIVE_MATCHED_PROPERTY"
                        }
                    },
                    selectProperty: Object(B.f)((function(e) {
                        C()(Object(F.k)(e), "A valid propertyID selection is required.")
                    }), j.a.mark((function e(t) {
                        var n, a, i, o, c, s, l, u = arguments;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = u.length > 1 && void 0 !== u[1] ? u[1] : "", e.next = 3, r.a.commonActions.getRegistry();
                                case 3:
                                    if (i = e.sent, o = i.select(f.f).getAccountID(), Object(F.d)(o)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    if (i.dispatch(f.f).setPropertyID(t), f.h !== t) {
                                        e.next = 11;
                                        break
                                    }
                                    return i.dispatch(f.f).setProfileID(f.g), e.abrupt("return");
                                case 11:
                                    return e.next = 13, Se.waitForProperties(o);
                                case 13:
                                    return c = i.select(f.f).getPropertyByID(t) || {}, a || (a = c.internalWebPropertyId), i.dispatch(f.f).setInternalWebPropertyID(a || ""), s = i.select(f.f).getProfileID(), e.next = 19, r.a.commonActions.await(i.__experimentalResolveSelect(f.f).getProfiles(o, t));
                                case 19:
                                    if (l = e.sent, Array.isArray(l)) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 22:
                                    if (!s || !l.some((function(e) {
                                            return e.id === s
                                        }))) {
                                        e.next = 24;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 24:
                                    if (!c.defaultProfileId || !l.some((function(e) {
                                            return e.id === c.defaultProfileId
                                        }))) {
                                        e.next = 27;
                                        break
                                    }
                                    return i.dispatch(f.f).setProfileID(c.defaultProfileId), e.abrupt("return");
                                case 27:
                                    i.dispatch(f.f).setProfileID((null === (n = l[0]) || void 0 === n ? void 0 : n.id) || f.g);
                                case 28:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    findMatchedProperty: j.a.mark((function e(t) {
                        var n, a, i;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Se.waitForProperties(t);
                                case 2:
                                    return e.next = 4, r.a.commonActions.getRegistry();
                                case 4:
                                    return n = e.sent, a = n.select(ye.c).getSiteURLPermutations(), i = n.select(f.f).getProperties(t), e.abrupt("return", Object(F.m)(i, a));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    receiveGetProperties: function(e, t) {
                        var n = t.accountID;
                        return C()(Array.isArray(e), "properties must be an array."), C()(n, "accountID is required."), {
                            payload: {
                                properties: e,
                                accountID: n
                            },
                            type: "RECEIVE_GET_PROPERTIES"
                        }
                    },
                    receivePropertiesProfilesCompletion: function(e) {
                        return C()(e, "accountID is required."), {
                            payload: {
                                accountID: e
                            },
                            type: "RECEIVE_PROPERTIES_PROFILES_COMPLETION"
                        }
                    },
                    waitForProperties: function(e) {
                        return {
                            payload: {
                                accountID: e
                            },
                            type: "WAIT_FOR_PROPERTIES"
                        }
                    },
                    setPrimaryPropertyType: function(e) {
                        return C()([f.j, f.i].includes(e), 'type must be "'.concat(f.j, '" or "').concat(f.i, '"')), {
                            payload: {
                                primaryPropertyType: e
                            },
                            type: "SET_PRIMARY_PROPERTY_TYPE"
                        }
                    }
                },
                Ne = Y()({}, "WAIT_FOR_PROPERTIES", Ee((function(e) {
                    return function(t) {
                        var n = t.payload.accountID,
                            a = function() {
                                return void 0 !== e.select(f.f).getProperties(n)
                            };
                        return !!a() || new Promise((function(t) {
                            var n = e.subscribe((function() {
                                a() && (n(), t())
                            }))
                        }))
                    }
                }))),
                Ie = {
                    getProperties: j.a.mark((function e(t) {
                        var n, a, i, o, c, s, l, u;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Object(F.d)(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, r.a.commonActions.getRegistry();
                                case 4:
                                    return n = e.sent, e.next = 7, he("getProperties", [t]);
                                case 7:
                                    if (void 0 !== n.select(f.f).getProperties(t)) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 11, _e.actions.fetchGetPropertiesProfiles(t);
                                case 11:
                                    if (a = e.sent, i = a.response, o = a.error, c = n.dispatch, i && (c(f.f).receiveGetProperties(i.properties, {
                                            accountID: t
                                        }), (null === (s = i.profiles) || void 0 === s || null === (l = s[0]) || void 0 === l ? void 0 : l.webPropertyId) && (u = i.profiles[0].webPropertyId, c(f.f).receiveGetProfiles(i.profiles, {
                                            accountID: t,
                                            propertyID: u
                                        })), i.matchedProperty && c(f.f).receiveMatchedProperty(i.matchedProperty), i.properties), c(f.f).receivePropertiesProfilesCompletion(t), !o) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.next = 20, Oe(o, "getProperties", [t]);
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                je = {
                    getPropertyByID: function(e, t) {
                        if (Object(F.j)(t)) {
                            var n = Object(F.n)(t).accountID;
                            return (e.properties[n] || []).find((function(e) {
                                return e.id === t
                            }))
                        }
                    },
                    getPrimaryPropertyType: function(e) {
                        return e.primaryPropertyType
                    },
                    getMatchedProperty: function(e) {
                        return e.matchedProperty
                    },
                    getProperties: function(e, t) {
                        return e.properties[t]
                    },
                    isDoingCreateProperty: Te((function(e) {
                        return function(t, n) {
                            return e(f.f).isFetchingCreateProperty(n)
                        }
                    })),
                    isDoingGetProperties: Te((function(e) {
                        return function(t, n) {
                            return !(!n || !t.isAwaitingPropertiesProfilesCompletion[n]) || e(f.f).isFetchingGetPropertiesProfiles(n)
                        }
                    })),
                    getPropertiesIncludingGA4: Te((function(e) {
                        return function(t, n) {
                            var a = e(f.f).getProperties(n);
                            if (void 0 !== a) {
                                var r = e(L.b).getProperties(n);
                                if (void 0 !== r) {
                                    a = a.concat(r);
                                    var i = function(e) {
                                            return !!e._id
                                        },
                                        o = function(e, t) {
                                            return e < t ? -1 : e > t ? 1 : 0
                                        };
                                    return a.sort((function(e, t) {
                                        var n = i(e) ? e.displayName : e.name,
                                            a = i(t) ? t.displayName : t.name;
                                        if (n !== a) return o(n, a);
                                        var r = i(e) ? e._id : e.id,
                                            c = i(t) ? t._id : t.id;
                                        return o(r, c)
                                    }))
                                }
                            }
                        }
                    }))
                },
                De = r.a.combineStores(_e, Ae, {
                    initialState: ke,
                    actions: Se,
                    controls: Ne,
                    reducer: function(e, t) {
                        var n = t.type,
                            a = t.payload;
                        switch (n) {
                            case "RECEIVE_MATCHED_PROPERTY":
                                var r = a.matchedProperty;
                                return be(be({}, e), {}, {
                                    matchedProperty: r
                                });
                            case "RECEIVE_GET_PROPERTIES":
                                var i = a.properties,
                                    o = a.accountID;
                                return be(be({}, e), {}, {
                                    properties: be(be({}, e.properties), {}, Y()({}, o, pe()(i)))
                                });
                            case "RECEIVE_PROPERTIES_PROFILES_COMPLETION":
                                var c = a.accountID;
                                return be(be({}, e), {}, {
                                    isAwaitingPropertiesProfilesCompletion: be(be({}, e.isAwaitingPropertiesProfilesCompletion), {}, Y()({}, c, !1))
                                });
                            case "SET_PRIMARY_PROPERTY_TYPE":
                                var s = a.primaryPropertyType;
                                return be(be({}, e), {}, {
                                    primaryPropertyType: s
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: Ie,
                    selectors: je
                }),
                we = (De.initialState, De.actions),
                Pe = (De.controls, De.reducer, De.resolvers, De.selectors, De);

            function Ce(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ce(Object(n), !0).forEach((function(t) {
                        Y()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var xe = r.a.createRegistrySelector,
                Ze = Q.a.receiveError,
                Me = Q.a.clearError,
                Ge = Q.a.clearErrors,
                Le = Object(X.a)({
                    baseName: "getAccountsPropertiesProfiles",
                    controlCallback: function(e) {
                        var t = e.data;
                        return x.a.get("modules", "analytics", "accounts-properties-profiles", t, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e) {
                        return Re(Re({}, e), {}, {
                            isAwaitingAccountsPropertiesProfilesCompletion: !0
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            data: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.data;
                        C()(J()(t), "data must be an object.")
                    }
                }),
                Ue = Object(X.a)({
                    baseName: "createAccount",
                    controlCallback: function(e) {
                        var t = e.data;
                        return x.a.set("modules", "analytics", "create-account-ticket", t)
                    },
                    reducerCallback: function(e, t) {
                        var n = t.id;
                        return Re(Re({}, e), {}, {
                            accountTicketID: n
                        })
                    },
                    argsToParams: function(e) {
                        return {
                            data: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.data;
                        C()(J()(t), "data must be an object.")
                    }
                }),
                Fe = {
                    accounts: void 0,
                    isAwaitingAccountsPropertiesProfilesCompletion: !1,
                    accountTicketID: void 0,
                    finishedSelectingAccount: void 0
                },
                Be = {
                    receiveGetAccounts: function(e) {
                        return C()(Array.isArray(e), "accounts must be an array."), {
                            payload: {
                                accounts: e
                            },
                            type: "RECEIVE_GET_ACCOUNTS"
                        }
                    },
                    receiveAccountsPropertiesProfilesCompletion: function() {
                        return {
                            payload: {},
                            type: "RECEIVE_ACCOUNTS_PROPERTIES_PROFILES_COMPLETION"
                        }
                    },
                    resetAccounts: j.a.mark((function e() {
                        var t, n;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.a.commonActions.getRegistry();
                                case 2:
                                    return t = e.sent, n = t.dispatch, e.next = 6, {
                                        payload: {},
                                        type: "RESET_ACCOUNTS"
                                    };
                                case 6:
                                    return e.abrupt("return", n(f.f).invalidateResolutionForStoreSelector("getAccounts"));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    selectAccount: Object(B.f)((function(e) {
                        C()(Object(F.e)(e), "A valid accountID is required to select.")
                    }), j.a.mark((function e(t) {
                        var n, a, i, o, c, s, l, u, d, g, m;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.a.commonActions.getRegistry();
                                case 2:
                                    return i = e.sent, o = {
                                        type: "FINISH_SELECTING_ACCOUNT",
                                        payload: {}
                                    }, e.next = 6, {
                                        type: "START_SELECTING_ACCOUNT",
                                        payload: {}
                                    };
                                case 6:
                                    return e.next = 8, Ge();
                                case 8:
                                    if (i.dispatch(f.f).setSettings({
                                            accountID: t,
                                            internalWebPropertyID: "",
                                            propertyID: "",
                                            profileID: ""
                                        }), f.a !== t) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 12, o;
                                case 12:
                                    return e.abrupt("return");
                                case 13:
                                    return e.next = 15, we.findMatchedProperty(t);
                                case 15:
                                    if (c = e.sent, s = null === (n = c) || void 0 === n ? void 0 : n.id, c || (l = i.select(f.f).getProperties(t), c = {
                                            id: 0 === l.length ? f.h : "",
                                            internalWebPropertyId: ""
                                        }), !(null === (a = c) || void 0 === a ? void 0 : a.id)) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 21, we.selectProperty(null === (u = c) || void 0 === u ? void 0 : u.id, null === (d = c) || void 0 === d ? void 0 : d.internalWebPropertyId);
                                case 21:
                                    e.next = 25;
                                    break;
                                case 23:
                                    i.dispatch(f.f).setPropertyID(""), i.dispatch(f.f).setProfileID("");
                                case 25:
                                    if (i.select(f.f).canUseGA4Controls()) {
                                        e.next = 29;
                                        break
                                    }
                                    return e.next = 28, o;
                                case 28:
                                    return e.abrupt("return");
                                case 29:
                                    return i.dispatch(f.f).setPrimaryPropertyType(f.j), g = i.dispatch(L.b).matchAndSelectProperty(t, L.c), e.next = 33, r.a.commonActions.await(g);
                                case 33:
                                    return m = e.sent, (null == m ? void 0 : m._id) && !s && i.dispatch(f.f).setPrimaryPropertyType(f.i), e.next = 38, o;
                                case 38:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    createAccount: j.a.mark((function e() {
                        var t, n, a, i, o, c, s;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.a.commonActions.getRegistry();
                                case 2:
                                    return t = e.sent, n = t.select(Z.a), a = n.getValue, i = {
                                        accountName: a(f.d, "accountName"),
                                        propertyName: a(f.d, "propertyName"),
                                        profileName: a(f.d, "profileName"),
                                        timezone: a(f.d, "timezone")
                                    }, e.next = 7, Me("createAccount", []);
                                case 7:
                                    return e.next = 9, Ue.actions.fetchCreateAccount(i);
                                case 9:
                                    if (o = e.sent, c = o.response, !(s = o.error)) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.next = 15, Ze(s, "createAccount", []);
                                case 15:
                                    return e.abrupt("return", {
                                        response: c,
                                        error: s
                                    });
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                We = {
                    getAccounts: j.a.mark((function e() {
                        var t, n, a, i, o, c, s, l, u, d, g, m, p, y, v, b, h, O, T, E, _, A;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.a.commonActions.getRegistry();
                                case 2:
                                    return n = e.sent, e.next = 5, Me("getAccounts", []);
                                case 5:
                                    if (a = n.select(f.f).getAccounts(), i = n.select(f.f).getMatchedProperty(), void 0 !== a) {
                                        e.next = 26;
                                        break
                                    }
                                    return e.next = 10, ge.waitForExistingTag();
                                case 10:
                                    if (!(c = n.select(f.f).getExistingTag())) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.next = 14, ge.waitForTagPermission(c);
                                case 14:
                                    s = n.select(f.f).getTagPermission(c);
                                case 15:
                                    return e.next = 17, Le.actions.fetchGetAccountsPropertiesProfiles({
                                        existingPropertyID: c,
                                        existingAccountID: null === (o = s) || void 0 === o ? void 0 : o.accountID
                                    });
                                case 17:
                                    if (l = e.sent, u = l.response, d = l.error, g = n.dispatch, u && (g(f.f).receiveGetAccounts(u.accounts), (null === (m = u.properties) || void 0 === m || null === (p = m[0]) || void 0 === p ? void 0 : p.accountId) && (b = u.properties[0].accountId, g(f.f).receiveGetProperties(u.properties, {
                                            accountID: b
                                        })), (null === (y = u.profiles) || void 0 === y || null === (v = y[0]) || void 0 === v ? void 0 : v.webPropertyId) && (h = u.profiles[0].webPropertyId, O = u.profiles[0].accountId, g(f.f).receiveGetProfiles(u.profiles, {
                                            accountID: O,
                                            propertyID: h
                                        })), u.matchedProperty && g(f.f).receiveMatchedProperty(u.matchedProperty), i = u.matchedProperty), !d) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.next = 25, Ze(d, "getAccounts", []);
                                case 25:
                                    g(f.f).receiveAccountsPropertiesProfilesCompletion();
                                case 26:
                                    if (T = n.select(f.f).getAccountID(), !i || T) {
                                        e.next = 32;
                                        break
                                    }
                                    return T = i.accountId, n.dispatch(f.f).setAccountID(i.accountId), e.next = 32, we.selectProperty(i.id, i.internalWebPropertyId);
                                case 32:
                                    if (!n.select(M.a).isModuleConnected("analytics")) {
                                        e.next = 35;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 35:
                                    if (i || T) {
                                        e.next = 45;
                                        break
                                    }
                                    return e.next = 38, r.a.commonActions.await(n.dispatch(L.b).findMatchedProperty());
                                case 38:
                                    if (!(null == (E = e.sent) ? void 0 : E._accountID)) {
                                        e.next = 45;
                                        break
                                    }
                                    return n.dispatch(f.f).setAccountID(null == E ? void 0 : E._accountID), n.dispatch(f.f).setPrimaryPropertyType(f.i), e.next = 44, r.a.commonActions.await(n.dispatch(L.b).selectProperty(E._id));
                                case 44:
                                    return e.abrupt("return");
                                case 45:
                                    if ((A = n.select(L.b).getPropertyID()) !== L.c) {
                                        e.next = 48;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 48:
                                    if (!A) {
                                        e.next = 52;
                                        break
                                    }
                                    return e.next = 51, r.a.commonActions.await(n.__experimentalResolveSelect(L.b).getProperty(A));
                                case 51:
                                    _ = e.sent;
                                case 52:
                                    if (!T || (null === (t = _) || void 0 === t ? void 0 : t._accountID) === T) {
                                        e.next = 55;
                                        break
                                    }
                                    return e.next = 55, r.a.commonActions.await(n.dispatch(L.b).matchAndSelectProperty(T, L.c));
                                case 55:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                He = {
                    getAccounts: function(e) {
                        return e.accounts
                    },
                    isDoingGetAccounts: function(e) {
                        return !!e.isAwaitingAccountsPropertiesProfilesCompletion || Object.values(e.isFetchingGetAccountsPropertiesProfiles).some(Boolean)
                    },
                    isDoingCreateAccount: function(e) {
                        return Object.values(e.isFetchingCreateAccount).some(Boolean)
                    },
                    getAccountTicketTermsOfServiceURL: xe((function(e) {
                        return function(t) {
                            var n = t.accountTicketID,
                                a = e(f.f).getServiceURL({
                                    path: "/termsofservice/".concat(n),
                                    query: {
                                        provisioningSignup: "false"
                                    }
                                });
                            if (void 0 !== n && a) return a
                        }
                    })),
                    canSubmitAccountCreate: xe((function(e) {
                        return function() {
                            var t = e(Z.a).getValue;
                            return !!t(f.d, "accountName") && (!!t(f.d, "propertyName") && (!!t(f.d, "profileName") && !!t(f.d, "timezone")))
                        }
                    })),
                    hasFinishedSelectingAccount: function(e) {
                        return e.finishedSelectingAccount
                    }
                },
                ze = r.a.combineStores(Le, Ue, {
                    initialState: Fe,
                    actions: Be,
                    reducer: function(e, t) {
                        var n = t.type,
                            a = t.payload;
                        switch (n) {
                            case "START_SELECTING_ACCOUNT":
                                return Re(Re({}, e), {}, {
                                    finishedSelectingAccount: !1
                                });
                            case "FINISH_SELECTING_ACCOUNT":
                                return Re(Re({}, e), {}, {
                                    finishedSelectingAccount: !0
                                });
                            case "RECEIVE_GET_ACCOUNTS":
                                var r = a.accounts;
                                return Re(Re({}, e), {}, {
                                    accounts: r
                                });
                            case "RECEIVE_ACCOUNTS_PROPERTIES_PROFILES_COMPLETION":
                                return Re(Re({}, e), {}, {
                                    isAwaitingAccountsPropertiesProfilesCompletion: !1
                                });
                            case "RESET_ACCOUNTS":
                                return Re(Re({}, e), {}, {
                                    accounts: Fe.accounts,
                                    settings: Re(Re({}, e.settings), {}, {
                                        accountID: void 0,
                                        propertyID: void 0,
                                        internalWebPropertyID: void 0,
                                        profileID: void 0
                                    })
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: We,
                    selectors: He
                }),
                Ve = (ze.initialState, ze.actions, ze.controls, ze.reducer, ze.resolvers, ze.selectors, ze);

            function qe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? qe(Object(n), !0).forEach((function(t) {
                        Y()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ye = r.a.createRegistryControl,
                $e = {
                    adsenseLinked: void 0
                },
                Je = {
                    setAdsenseLinked: function(e) {
                        return {
                            payload: {
                                adsenseLinked: !!e
                            },
                            type: "SET_ADSENSE_LINKED"
                        }
                    }
                },
                Xe = Y()({}, "__ADSENSE_LINKED_GET_SETTINGS", Ye((function(e) {
                    return function() {
                        return e.__experimentalResolveSelect(f.f).getSettings()
                    }
                }))),
                Qe = {
                    getAdsenseLinked: j.a.mark((function e() {
                        var t, n, a;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.a.commonActions.getRegistry();
                                case 2:
                                    if (t = e.sent, void 0 === (0, t.select)(f.f).getAdsenseLinked()) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return e.next = 8, {
                                        type: "__ADSENSE_LINKED_GET_SETTINGS"
                                    } || {};
                                case 8:
                                    return n = e.sent, a = n.adsenseLinked, e.next = 12, Je.setAdsenseLinked(a);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                et = {
                    initialState: $e,
                    actions: Je,
                    controls: Xe,
                    reducer: function(e, t) {
                        var n = t.type,
                            a = t.payload;
                        switch (n) {
                            case "SET_ADSENSE_LINKED":
                                var r = a.adsenseLinked;
                                return Ke(Ke({}, e), {}, {
                                    adsenseLinked: r
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: Qe,
                    selectors: {
                        getAdsenseLinked: function(e) {
                            return e.adsenseLinked
                        }
                    }
                };

            function tt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function nt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tt(Object(n), !0).forEach((function(t) {
                        Y()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var at = Object(X.a)({
                    baseName: "getGoals",
                    controlCallback: function() {
                        return x.a.get("modules", "analytics", "goals")
                    },
                    reducerCallback: function(e, t) {
                        return nt(nt({}, e), {}, {
                            goals: t
                        })
                    }
                }),
                rt = {
                    goals: void 0
                },
                it = {
                    getGoals: j.a.mark((function e() {
                        var t;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, r.a.commonActions.getRegistry();
                                case 2:
                                    if (t = e.sent, !t.select(f.f).getGoals()) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return e.next = 8, at.actions.fetchGetGoals();
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                ot = r.a.combineStores(at, {
                    initialState: rt,
                    resolvers: it,
                    selectors: {
                        getGoals: function(e) {
                            return e.goals
                        }
                    }
                }),
                ct = (ot.initialState, ot.actions, ot.controls, ot.reducer, ot.resolvers, ot.selectors, ot),
                st = {
                    selectors: {
                        getSetupSuccessContent: function() {
                            return {
                                description: Object(l.__)("You’ll only see Universal Analytics data for now.", "google-site-kit"),
                                learnMore: {
                                    label: Object(l.__)("Learn more", "google-site-kit"),
                                    url: "https://sitekit.withgoogle.com/documentation/using-site-kit/ga4/"
                                }
                            }
                        }
                    }
                };

            function lt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function ut(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? lt(Object(n), !0).forEach((function(t) {
                        Y()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var dt = r.a.createRegistrySelector,
                gt = Object(X.a)({
                    baseName: "getProfiles",
                    controlCallback: function(e) {
                        var t = e.accountID,
                            n = e.propertyID;
                        return x.a.get("modules", "analytics", "profiles", {
                            accountID: t,
                            propertyID: n
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.accountID,
                            r = n.propertyID;
                        return ut(ut({}, e), {}, {
                            profiles: ut(ut({}, e.profiles), {}, Y()({}, "".concat(a, "::").concat(r), pe()(t)))
                        })
                    },
                    argsToParams: function(e, t) {
                        return {
                            accountID: e,
                            propertyID: t
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID,
                            n = e.propertyID;
                        C()(Object(F.d)(t), "a valid account ID is required to fetch profiles for."), C()(Object(F.j)(n), "a valid property ID is required to fetch profiles for.")
                    }
                }),
                mt = Object(X.a)({
                    baseName: "createProfile",
                    controlCallback: function(e) {
                        var t = e.accountID,
                            n = e.propertyID,
                            a = e.profileName;
                        return x.a.set("modules", "analytics", "create-profile", {
                            accountID: t,
                            propertyID: n,
                            profileName: a
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.accountID,
                            r = n.propertyID;
                        return ut(ut({}, e), {}, {
                            profiles: ut(ut({}, e.profiles), {}, Y()({}, "".concat(a, "::").concat(r), [].concat(pe()(e.profiles["".concat(a, "::").concat(r)] || []), [t])))
                        })
                    },
                    argsToParams: function(e, t, n) {
                        return {
                            accountID: e,
                            propertyID: t,
                            profileName: n.profileName
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID,
                            n = e.propertyID,
                            a = e.profileName;
                        C()(Object(F.d)(t), "a valid account ID is required to create a profiles."), C()(Object(F.j)(n), "a valid property ID is required to create a profile."), C()(Object(F.h)(a), "a valid name is required to create a profile.")
                    }
                }),
                ft = {
                    createProfile: Object(B.f)((function(e, t, n) {
                        var a = n.profileName;
                        C()(Object(F.d)(e), "a valid account ID is required to create a profile."), C()(Object(F.j)(t), "a valid property ID is required to create a profile."), C()(Object(F.h)(a), "a valid name is required to create a profile.")
                    }), j.a.mark((function e(t, n, a) {
                        var r, i, o, c;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = a.profileName, e.next = 3, mt.actions.fetchCreateProfile(t, n, {
                                        profileName: r
                                    });
                                case 3:
                                    return i = e.sent, o = i.response, c = i.error, e.abrupt("return", {
                                        response: o,
                                        error: c
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    findPropertyProfile: j.a.mark((function e(t, n) {
                        var a, i, o, c, s = arguments;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = s.length > 2 && void 0 !== s[2] ? s[2] : "", e.next = 3, r.a.commonActions.getRegistry();
                                case 3:
                                    return i = e.sent, e.next = 6, r.a.commonActions.await(i.__experimentalResolveSelect(f.f).getProfiles(t, n));
                                case 6:
                                    if (o = e.sent, !a) {
                                        e.next = 11;
                                        break
                                    }
                                    if (!(c = o.find((function(e) {
                                            return e.id === a
                                        })))) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", c);
                                case 11:
                                    return e.abrupt("return", o[0]);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                pt = {
                    getProfiles: j.a.mark((function e(t, n) {
                        var a, i, o, c, s;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Object(F.d)(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (Object(F.j)(n)) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return e.next = 6, r.a.commonActions.getRegistry();
                                case 6:
                                    if (a = e.sent, i = a.select(f.f).getProfiles(t, n)) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 11, gt.actions.fetchGetProfiles(t, n);
                                case 11:
                                    o = e.sent, i = o.response;
                                case 13:
                                    c = a.select(f.f).getProfileID(), i && !c && (s = i[0] || {
                                        id: f.g
                                    }, a.dispatch(f.f).setProfileID(s.id));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                yt = {
                    getProfiles: function(e, t, n) {
                        return e.profiles["".concat(t, "::").concat(n)]
                    },
                    isDoingCreateProfile: function(e) {
                        return Object.values(e.isFetchingCreateProfile).some(Boolean)
                    },
                    isDoingGetProfiles: dt((function(e) {
                        return function(t, n, a) {
                            return e(f.f).isFetchingGetProfiles(n, a)
                        }
                    }))
                },
                vt = r.a.combineStores(gt, mt, {
                    initialState: {
                        profiles: {}
                    },
                    actions: ft,
                    resolvers: pt,
                    selectors: yt
                }),
                bt = (vt.initialState, vt.actions, vt.controls, vt.reducer, vt.resolvers, vt.selectors, vt),
                ht = n(13),
                Ot = n(11),
                Tt = n(418),
                Et = n(17),
                _t = n.n(Et),
                At = n(429),
                kt = n.n(At),
                St = n(67);

            function report_normalization_ownKeys(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function report_normalization_objectSpread(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? report_normalization_ownKeys(Object(n), !0).forEach((function(t) {
                        Y()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : report_normalization_ownKeys(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Nt = n.n(St)()((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.metrics,
                        n = e.dimensions,
                        a = _t()(e, ["metrics", "dimensions"]);
                    return report_normalization_objectSpread({
                        metrics: report_normalization_normalizeMetrics(t),
                        dimensions: report_normalization_normalizeDimensions(n)
                    }, a)
                })),
                report_normalization_normalizeMetrics = function(e) {
                    return kt()(e).map((function(e) {
                        return "string" == typeof e ? {
                            expression: e
                        } : e
                    })).filter((function(e) {
                        return J()(e)
                    }))
                },
                report_normalization_normalizeDimensions = function(e) {
                    return kt()(e).map((function(e) {
                        return "string" == typeof e ? {
                            name: e
                        } : e
                    })).filter((function(e) {
                        return J()(e)
                    }))
                },
                It = n(285),
                jt = n(29),
                Dt = n.n(jt);

            function wt(e) {
                return Object(It.c)(e, (function(e) {
                    var t = e.hasOwnProperty("expression") && "string" == typeof e.expression,
                        n = !e.hasOwnProperty("alias") || "string" == typeof e.alias;
                    return t && n
                }))
            }

            function Pt(e) {
                return Object(It.c)(e, (function(e) {
                    return e.hasOwnProperty("name") && "string" == typeof e.name
                }))
            }

            function Ct(e) {
                var t = ["number", "string"];
                return Object.keys(e).every((function(n) {
                    return t.includes(Dt()(e[n])) && "string" == typeof n || Array.isArray(e[n]) && Object.keys(e[n]).every((function(a) {
                        return t.includes(Dt()(e[n][a])) && t.includes(Dt()(a))
                    }))
                }))
            }

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

            function xt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Rt(Object(n), !0).forEach((function(t) {
                        Y()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Zt = r.a.createRegistrySelector,
                Mt = Object(X.a)({
                    baseName: "getReport",
                    controlCallback: function(e) {
                        var t = e.options;
                        return x.a.get("modules", "analytics", "report", Nt(t))
                    },
                    reducerCallback: function(e, t, n) {
                        var a = n.options;
                        return xt(xt({}, e), {}, {
                            reports: xt(xt({}, e.reports), {}, Y()({}, Object(Ot.v)(a), t))
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
                        C()(J()(t), "Options for Analytics report must be an object."), C()(Object(It.a)(t), "Either date range or start/end dates must be provided for Analytics report.");
                        var n = Nt(t),
                            a = n.metrics,
                            r = n.dimensions,
                            i = n.dimensionFilters,
                            o = n.orderby;
                        C()(a.length, "Requests must specify at least one metric for an Analytics report."), C()(wt(a), 'Metrics for an Analytics report must be either a string, an array of strings, an object, an array of objects or a mix of strings and objects. If an object is used, it must have "expression" and "alias" properties.'), r && C()(Pt(r), 'Dimensions for an Analytics report must be either a string, an array of strings, an object, an array of objects or a mix of strings and objects. If an object is used, it must have "name" property.'), i && C()(Ct(i), "Dimension filters must be a map of dimension names as keys and dimension values as values."), o && C()(Object(It.b)(o), 'Orders for an Analytics report must be either an object or an array of objects where each object should have "fieldName" and "sortOrder" properties.')
                    }
                }),
                Gt = {
                    getReport: j.a.mark((function e() {
                        var t, n, a, i, o = arguments;
                        return j.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, e.next = 3, r.a.commonActions.getRegistry();
                                case 3:
                                    if (n = e.sent, !n.select(f.f).getReport(t)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return e.next = 9, Mt.actions.fetchGetReport(t);
                                case 9:
                                    if (a = e.sent, i = a.error, !Nt(t).metrics.some((function(e) {
                                            var t = e.expression;
                                            return /^ga:adsense/.test(t)
                                        }))) {
                                        e.next = 19;
                                        break
                                    }
                                    if (!Object(Tt.a)(i, "ga:adsense")) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 15, Je.setAdsenseLinked(!1);
                                case 15:
                                    e.next = 19;
                                    break;
                                case 17:
                                    return e.next = 19, Je.setAdsenseLinked(!0);
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                Lt = {
                    getReport: function(e, t) {
                        return e.reports[Object(Ot.v)(t)]
                    },
                    getPageTitles: Zt((function(e) {
                        return function(t, n) {
                            var a, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                o = i.startDate,
                                c = i.endDate;
                            if (Array.isArray(n)) {
                                var s = [],
                                    u = 5;
                                (n || []).forEach((function(e) {
                                    var t = e.columnHeader,
                                        n = e.data;
                                    if (Array.isArray(null == t ? void 0 : t.dimensions) && Array.isArray(null == n ? void 0 : n.rows) && t.dimensions.includes("ga:pagePath")) {
                                        var a = t.dimensions.indexOf("ga:pagePath");
                                        ((null == n ? void 0 : n.rows) || []).forEach((function(e) {
                                            var t = e.dimensions;
                                            s.includes(t[a]) || s.push(t[a])
                                        }))
                                    }
                                }));
                                var d = {};
                                if (!s.length) return d;
                                var g = {
                                        startDate: o,
                                        endDate: c,
                                        dimensions: ["ga:pagePath", "ga:pageTitle"],
                                        dimensionFilters: {
                                            "ga:pagePath": s.sort()
                                        },
                                        metrics: [{
                                            expression: "ga:pageviews",
                                            alias: "Pageviews"
                                        }],
                                        orderby: [{
                                            fieldName: "ga:pageviews",
                                            sortOrder: "DESCENDING"
                                        }],
                                        limit: u * s.length
                                    },
                                    m = e(f.f).getReport(g);
                                if (void 0 !== m) return ((null == m || null === (a = m[0]) || void 0 === a || null === (r = a.data) || void 0 === r ? void 0 : r.rows) || []).forEach((function(e) {
                                    var t = e.dimensions;
                                    d[t[0]] || (d[t[0]] = t[1])
                                })), s.forEach((function(e) {
                                    d[e] || (d[e] = Object(l.__)("(unknown)", "google-site-kit"))
                                })), d
                            }
                        }
                    })),
                    isGatheringData: Zt((function(e) {
                        return function() {
                            var t, n, a, r, i, o = e(ht.a).getDateRangeDates({
                                    offsetDays: f.b
                                }),
                                c = {
                                    dimensions: ["ga:date"],
                                    metrics: [{
                                        expression: "ga:users"
                                    }],
                                    startDate: o.startDate,
                                    endDate: o.endDate
                                },
                                s = e(ye.c).getCurrentEntityURL();
                            s && (c.url = s);
                            var l = e(f.f).getReport(c);
                            if (void 0 !== l) return !Array.isArray(null == l || null === (t = l[0]) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.rows) || 0 === (null == l || null === (a = l[0]) || void 0 === a || null === (r = a.data) || void 0 === r || null === (i = r.rows) || void 0 === i ? void 0 : i.length)
                        }
                    })),
                    hasZeroData: Zt((function(e) {
                        return function() {
                            var t = e(ht.a).getDateRangeDates({
                                    offsetDays: f.b
                                }),
                                n = {
                                    dimensions: ["ga:date"],
                                    metrics: [{
                                        expression: "ga:users"
                                    }],
                                    startDate: t.startDate,
                                    endDate: t.endDate
                                },
                                a = e(ye.c).getCurrentEntityURL();
                            a && (n.url = a);
                            var r = e(f.f).getReport(n),
                                i = e(f.f).isGatheringData();
                            if (void 0 !== r && void 0 !== i) {
                                var o = Object(F.l)(r);
                                return !1 !== i || !1 !== o
                            }
                        }
                    }))
                },
                Ut = r.a.combineStores(Mt, {
                    initialState: {
                        reports: {}
                    },
                    resolvers: Gt,
                    selectors: Lt
                }),
                Ft = (Ut.initialState, Ut.actions, Ut.controls, Ut.reducer, Ut.resolvers, Ut.selectors, Ut),
                Bt = n(464),
                Wt = n.n(Bt),
                Ht = n(287),
                zt = n(12),
                Vt = n.n(zt),
                qt = encodeURIComponent("/"),
                Kt = qt.replace("%", "~"),
                Yt = function(e) {
                    return C()(J()(e), "report args must be a plain object"), Object.entries(e).filter((function(e) {
                        return void 0 !== Vt()(e, 2)[1]
                    })).map((function(e) {
                        var t = Vt()(e, 2),
                            n = t[0],
                            a = t[1];
                        return "".concat(n, "=").concat(function(e) {
                            return encodeURIComponent(e).replace(new RegExp(qt, "g"), Kt)
                        }(a))
                    })).join("&")
                },
                $t = n(465);

            function Jt() {
                var e = Wt()(["/report/", "/a", "w", "p", "/"]);
                return Jt = function() {
                    return e
                }, e
            }

            function Xt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Qt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Xt(Object(n), !0).forEach((function(t) {
                        Y()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var en, tn = r.a.createRegistrySelector,
                nn = {
                    getServiceURL: tn((function(e) {
                        return function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                a = n.path,
                                r = n.query,
                                i = e(ht.a).getEmail();
                            if (void 0 !== i) {
                                var o = "https://analytics.google.com/analytics/web/",
                                    c = r ? Qt(Qt({}, r), {}, {
                                        authuser: i
                                    }) : {
                                        authuser: i
                                    },
                                    s = Object(Ht.a)(o, c);
                                if (a) {
                                    var l = "/".concat(a.replace(/^\//, ""));
                                    return "".concat(s, "#").concat(l)
                                }
                                return s
                            }
                        }
                    })),
                    getServiceReportURL: tn((function(e) {
                        return function(t, n) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                r = e(f.f).getAccountID(),
                                i = e(f.f).getInternalWebPropertyID(),
                                o = e(f.f).getProfileID();
                            if (C()(n, "type is required to get a service report URL."), r && i && o) {
                                var c = Yt(a),
                                    s = Object($t.a)(Jt(), n, r, i, o);
                                return c && (s += "".concat(c, "/")), nn.getServiceURL(t, {
                                    path: s
                                })
                            }
                        }
                    }))
                },
                an = {
                    selectors: nn
                },
                rn = r.a.createRegistrySelector,
                on = {
                    getSetupFlowMode: rn((function(e) {
                        return function() {
                            if (!1 === e(L.b).isAdminAPIWorking()) return f.n;
                            if (void 0 !== e(f.f).getSettings()) {
                                var t = e(f.f).getAccountID();
                                if (!t || t === f.a) return f.o;
                                var n = e(L.b).getProperties(t);
                                if (void 0 !== n) {
                                    if (0 === n.length) return f.o;
                                    var a = e(f.f).getProperties(t);
                                    if (void 0 !== a) return 0 === a.length ? f.l : f.m
                                }
                            }
                        }
                    })),
                    canUseGA4Controls: rn((function(e) {
                        return function() {
                            if (e(Z.a).getValue(f.e, "enableGA4")) return !0;
                            var t = e(M.a).isModuleConnected;
                            return t("analytics") === t("analytics-4")
                        }
                    }))
                },
                cn = r.a.combineStores({
                    selectors: on
                }),
                sn = (cn.initialState, cn.actions, cn.controls, cn.reducer, cn.resolvers, cn.selectors, cn),
                ln = r.a.combineStores(q, Ve, et, ct, st, Pe, bt, Ft, Object(N.a)(f.f), me, an, sn);
            ln.initialState, ln.actions, ln.controls, ln.reducer, ln.resolvers, ln.selectors;
            r.a.registerStore(f.f, ln), o.a.registerModule("analytics", {
                storeName: f.f,
                SettingsEditComponent: y.a,
                SettingsViewComponent: v.a,
                SetupComponent: p.a,
                Icon: m.a,
                features: [Object(l.__)("Audience overview", "google-site-kit"), Object(l.__)("Top pages", "google-site-kit"), Object(l.__)("Top acquisition channels", "google-site-kit")],
                screenWidgetContext: "moduleAnalytics"
            }), en = s.a, Object(u.b)("unifiedDashboard") || (en.registerWidget("analyticsAllTraffic", {
                Component: b.a,
                width: en.WIDGET_WIDTHS.FULL,
                priority: 1,
                wrapWidget: !1
            }, [d.AREA_DASHBOARD_ALL_TRAFFIC, d.AREA_PAGE_DASHBOARD_ALL_TRAFFIC]), en.registerWidget("analyticsUniqueVisitors", {
                Component: T.a,
                width: en.WIDGET_WIDTHS.QUARTER,
                priority: 3,
                wrapWidget: !0
            }, [d.AREA_DASHBOARD_SEARCH_FUNNEL, d.AREA_PAGE_DASHBOARD_SEARCH_FUNNEL]), en.registerWidget("analyticsGoals", {
                Component: O.a,
                width: en.WIDGET_WIDTHS.QUARTER,
                priority: 4,
                wrapWidget: !0
            }, [d.AREA_DASHBOARD_SEARCH_FUNNEL]), en.registerWidget("analyticsBounceRate", {
                Component: E.a,
                width: en.WIDGET_WIDTHS.QUARTER,
                priority: 4,
                wrapWidget: !0
            }, [d.AREA_PAGE_DASHBOARD_SEARCH_FUNNEL]), en.registerWidget("analyticsPopularPages", {
                Component: h.a,
                width: en.WIDGET_WIDTHS.HALF,
                priority: 3,
                wrapWidget: !1
            }, [d.AREA_DASHBOARD_ACQUISITION]), en.registerWidget("analyticsModuleAcquisitionChannels", {
                Component: S.a,
                width: en.WIDGET_WIDTHS.FULL,
                priority: 3,
                wrapWidget: !1
            }, ["moduleAnalyticsMain"]), en.registerWidgetArea("moduleAnalyticsMain", {
                priority: 1,
                style: g.b.BOXES,
                title: Object(l.__)("Overview", "google-site-kit")
            }, "moduleAnalytics"), en.registerWidget("analyticsModuleOverview", {
                Component: A.a,
                width: en.WIDGET_WIDTHS.FULL,
                priority: 1,
                wrapWidget: !1
            }, ["moduleAnalyticsMain"]), en.registerWidget("analyticsModulePopularPages", {
                Component: k.a,
                width: en.WIDGET_WIDTHS.FULL,
                priority: 2,
                wrapWidget: !1
            }, ["moduleAnalyticsMain"])), Object(u.b)("unifiedDashboard") && (en.registerWidget("analyticsAllTraffic", {
                Component: b.a,
                width: en.WIDGET_WIDTHS.FULL,
                priority: 1,
                wrapWidget: !1
            }, [d.AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY, d.AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY]), en.registerWidget("analyticsOverallPageMetrics", {
                Component: _.a,
                width: en.WIDGET_WIDTHS.FULL,
                priority: 3,
                wrapWidget: !1
            }, [d.AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY]), en.registerWidget("analyticsModulePopularPages", {
                Component: k.a,
                width: en.WIDGET_WIDTHS.FULL,
                priority: 4,
                wrapWidget: !1
            }, [d.AREA_MAIN_DASHBOARD_CONTENT_PRIMARY]))
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
                return m
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
                return y.a
            })), n.d(t, "p", (function() {
                return O
            })), n.d(t, "d", (function() {
                return T
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
                return A.b
            })), n.d(t, "i", (function() {
                return A.a
            })), n.d(t, "q", (function() {
                return A.d
            })), n.d(t, "l", (function() {
                return k
            })), n.d(t, "a", (function() {
                return S
            })), n.d(t, "y", (function() {
                return N
            })), n.d(t, "f", (function() {
                return I
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
                g = n.n(d),
                m = function(e) {
                    return g()(JSON.stringify(function e(t) {
                        var n = {};
                        return Object.keys(t).sort().forEach((function(a) {
                            var r = t[a];
                            r && "object" === u()(r) && !Array.isArray(r) && (r = e(r)), n[a] = r
                        })), n
                    }(e)))
                };
            var f = n(80),
                p = (n(84), n(72)),
                y = n(64);

            function v(e) {
                return e.replace(/\[([^\]]+)\]\((https?:\/\/[^\/]+\.\w+\/?.*?)\)/gi, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            }

            function b(e) {
                return "<p>".concat(e.replace(/\n{2,}/g, "</p><p>"), "</p>")
            }

            function h(e) {
                return e.replace(/\n/gi, "<br>")
            }

            function O(e) {
                for (var t = e, n = 0, a = [v, b, h]; n < a.length; n++) {
                    t = (0, a[n])(t)
                }
                return t
            }
            var T = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                E = n(59),
                _ = n(85),
                A = n(50),
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
                S = function(e, t) {
                    if ("0" === e || 0 === e || isNaN(e)) return null;
                    var n = (t - e) / e;
                    return isNaN(n) || !r()(n) ? null : n
                },
                N = function(e) {
                    try {
                        return JSON.parse(e) && !!e
                    } catch (e) {
                        return !1
                    }
                },
                I = function(e) {
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
                    g = n(143);

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

                function f(e) {
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
                            message: Object(g.a)(e.message, o)
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
                return g
            })), n.d(t, "AREA_MAIN_DASHBOARD_CONTENT_PRIMARY", (function() {
                return m
            })), n.d(t, "AREA_MAIN_DASHBOARD_SPEED_PRIMARY", (function() {
                return f
            })), n.d(t, "AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY", (function() {
                return p
            })), n.d(t, "AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY", (function() {
                return y
            })), n.d(t, "AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY", (function() {
                return v
            })), n.d(t, "AREA_ENTITY_DASHBOARD_SPEED_PRIMARY", (function() {
                return b
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
                g = "mainDashboardTrafficPrimary",
                m = "mainDashboardContentPrimary",
                f = "mainDashboardSpeedPrimary",
                p = "mainDashboardMonetizationPrimary",
                y = "entityDashboardTrafficPrimary",
                v = "entityDashboardContentPrimary",
                b = "entityDashboardSpeedPrimary",
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
                AREA_MAIN_DASHBOARD_TRAFFIC_PRIMARY: g,
                AREA_MAIN_DASHBOARD_CONTENT_PRIMARY: m,
                AREA_MAIN_DASHBOARD_SPEED_PRIMARY: f,
                AREA_MAIN_DASHBOARD_MONETIZATION_PRIMARY: p,
                AREA_ENTITY_DASHBOARD_TRAFFIC_PRIMARY: y,
                AREA_ENTITY_DASHBOARD_CONTENT_PRIMARY: v,
                AREA_ENTITY_DASHBOARD_SPEED_PRIMARY: b,
                AREA_ENTITY_DASHBOARD_MONETIZATION_PRIMARY: h
            }
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
                            g = Object(c.a)(Switch),
                            m = Object(s.useCallback)((function(e) {
                                null !== e && u.j.attachTo(e)
                            }), []),
                            f = Object(s.useCallback)((function(e) {
                                "function" == typeof n && l.c === e.keyCode && n(e)
                            }), [n]),
                            p = "googlesitekit-switch-".concat(g);
                        return e.createElement(s.Fragment, null, e.createElement("div", {
                            "aria-checked": r ? "true" : "false",
                            className: o()("mdc-switch", {
                                "mdc-switch--checked": r,
                                "mdc-switch--disabled": i
                            }),
                            onClick: n,
                            onKeyDown: f,
                            role: "switch",
                            ref: m,
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
                return v
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "d", (function() {
                return T
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

            function g() {
                return (g = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var m = i.createElement("path", {
                d: "M0 0h2v7H0zm0 10h2v2H0z",
                fill: "currentColor",
                fillRule: "evenodd"
            });
            var f, p = function SvgWarningIcon(e) {
                    return i.createElement("svg", g({
                        viewBox: "0 0 2 12"
                    }, e), m)
                },
                y = n(126),
                v = "warning",
                b = "info",
                h = "suggestion",
                O = (f = {}, r()(f, b, s), r()(f, v, p), r()(f, h, d), f),
                T = function(e) {
                    return O[e] || y.a
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
        157: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return I
            })), n.d(t, "b", (function() {
                return j
            })), n.d(t, "c", (function() {
                return D
            })), n.d(t, "f", (function() {
                return w
            })), n.d(t, "e", (function() {
                return P
            })), n.d(t, "d", (function() {
                return C
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
                g = n.n(d),
                m = n(158),
                f = n.n(m),
                p = n(33),
                y = n.n(p),
                v = n(4),
                b = n.n(v),
                h = n(73),
                O = n(76),
                T = n(45),
                E = n(54);

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

            function A(e) {
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
            var k = b.a.createRegistrySelector,
                S = E.a.clearError,
                N = E.a.receiveError,
                I = "cannot submit changes while submitting changes",
                j = "cannot submit changes if settings have not changed",
                D = function(e, t, n) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = a.storeName,
                        i = void 0 === r ? void 0 : r,
                        c = a.settingSlugs,
                        l = void 0 === c ? [] : c;
                    u()(e, "type is required."), u()(t, "identifier is required."), u()(n, "datapoint is required.");
                    var d = i || "".concat(e, "/").concat(t),
                        m = {
                            settings: void 0,
                            savedSettings: void 0
                        },
                        p = Object(T.a)({
                            baseName: "getSettings",
                            controlCallback: function() {
                                return y.a.get(e, t, n, {}, {
                                    useCache: !1
                                })
                            },
                            reducerCallback: function(e, t) {
                                return A(A({}, e), {}, {
                                    savedSettings: A({}, t),
                                    settings: A(A({}, t), e.settings || {})
                                })
                            }
                        }),
                        v = Object(T.a)({
                            baseName: "saveSettings",
                            controlCallback: function(a) {
                                var r = a.values;
                                return y.a.set(e, t, n, r)
                            },
                            reducerCallback: function(e, t) {
                                return A(A({}, e), {}, {
                                    savedSettings: A({}, t),
                                    settings: A({}, t)
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
                        h = {},
                        E = {
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
                            saveSettings: o.a.mark((function e() {
                                var t, n, a, r, i;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b.a.commonActions.getRegistry();
                                        case 2:
                                            return t = e.sent, e.next = 5, S("saveSettings", []);
                                        case 5:
                                            return n = t.select(d).getSettings(), e.next = 8, v.actions.fetchSaveSettings(n);
                                        case 8:
                                            if (a = e.sent, r = a.response, !(i = a.error)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 14, N(i, "saveSettings", []);
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
                        I = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                n = t.type,
                                a = t.payload;
                            switch (n) {
                                case "SET_SETTINGS":
                                    var r = a.values;
                                    return A(A({}, e), {}, {
                                        settings: A(A({}, e.settings || {}), r)
                                    });
                                case "ROLLBACK_SETTINGS":
                                    return A(A({}, e), {}, {
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
                                            return e.next = 2, b.a.commonActions.getRegistry();
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
                        D = {
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
                        var t = Object(O.b)(e),
                            n = Object(O.a)(e);
                        E["set".concat(t)] = function(e) {
                            return u()(void 0 !== e, "value is required for calls to set".concat(t, "().")), {
                                payload: {
                                    value: e
                                },
                                type: "SET_".concat(n)
                            }
                        }, h["SET_".concat(n)] = function(t, n) {
                            var a = n.payload.value;
                            return A(A({}, t), {}, {
                                settings: A(A({}, t.settings || {}), {}, s()({}, e, a))
                            })
                        }, D["get".concat(t)] = k((function(t) {
                            return function() {
                                return (t(d).getSettings() || {})[e]
                            }
                        }))
                    }));
                    var w = b.a.combineStores(b.a.commonStore, p, v, {
                        initialState: m,
                        actions: E,
                        controls: _,
                        reducer: I,
                        resolvers: j,
                        selectors: D
                    });
                    return A(A({}, w), {}, {
                        STORE_NAME: d
                    })
                };

            function w(e, t) {
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
                                    return n.next = 10, y.a.invalidateCache("modules", e);
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

            function P(e) {
                return function(t) {
                    var n = t.select,
                        a = t.dispatch;
                    return n(e).haveSettingsChanged() ? a(e).rollbackSettings() : {}
                }
            }

            function C(e) {
                return function(t) {
                    var n = Object(h.e)(t)(e),
                        a = n.haveSettingsChanged,
                        r = n.isDoingSubmitChanges;
                    u()(!r(), I), u()(a(), j)
                }
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
                    g = n(259),
                    m = n(2),
                    f = n(1),
                    p = n(7),
                    y = Object(m.forwardRef)((function(t, n) {
                        var a = t.children,
                            i = t.href,
                            c = t.text,
                            l = t.className,
                            u = t.danger,
                            y = t.disabled,
                            v = t.target,
                            b = t.icon,
                            h = t.trailingIcon,
                            O = t["aria-label"],
                            T = t.title,
                            E = t.tooltip,
                            _ = o()(t, ["children", "href", "text", "className", "danger", "disabled", "target", "icon", "trailingIcon", "aria-label", "title", "tooltip"]),
                            A = Object(m.useCallback)((function(e) {
                                null !== e && p.i.attachTo(e)
                            }), []),
                            k = Object(d.a)(n, A),
                            S = i && !y ? "a" : "button",
                            N = e.createElement(S, r()({
                                className: s()("mdc-button", l, {
                                    "mdc-button--raised": !c,
                                    "mdc-button--danger": u
                                }),
                                href: y ? void 0 : i,
                                ref: k,
                                disabled: !!y,
                                "aria-label": function() {
                                    var e = O;
                                    if ("_blank" !== v) return e;
                                    var t = Object(f._x)("(opens in a new tab)", "screen reader text", "google-site-kit");
                                    return "string" == typeof a && (e = e || a), e ? "".concat(e, " ").concat(t) : t
                                }(),
                                target: v || "_self",
                                role: "a" === S ? "button" : void 0
                            }, _), b, a && e.createElement("span", {
                                className: "mdc-button__label"
                            }, a), h);
                        return E && (T || O) || b && (T || O) && void 0 === a ? e.createElement(g.a, {
                            title: T || O,
                            classes: {
                                popper: "googlesitekit-tooltip-popper",
                                tooltip: "googlesitekit-tooltip"
                            }
                        }, N) : N
                    }));
                y.displayName = "Button", y.propTypes = {
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
                }, y.defaultProps = {
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
                }, t.a = y
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
        192: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ReportError
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(22),
                    l = n(89),
                    u = n(143),
                    d = n(69),
                    g = n(81),
                    m = n(83),
                    f = c.a.useSelect;

                function ReportError(t) {
                    var n, a = t.moduleSlug,
                        r = t.error,
                        o = f((function(e) {
                            return e(s.a).getModule(a)
                        })),
                        c = Object(i.sprintf)(
                            /* translators: %s: module name */
                            Object(i.__)("Data error in %s", "google-site-kit"), null == o ? void 0 : o.name),
                        p = r.message;
                    Object(l.b)(r) && (c = Object(i.sprintf)(
                        /* translators: %s: module name */
                        Object(i.__)("Insufficient permissions in %s", "google-site-kit"), null == o ? void 0 : o.name), p = Object(u.a)(p, o));
                    var y = null == r || null === (n = r.data) || void 0 === n ? void 0 : n.reconnectURL,
                        v = y ? e.createElement(g.a, {
                            message: p,
                            reconnectURL: y
                        }) : d.a.sanitize(p, {
                            ALLOWED_TAGS: []
                        });
                    return e.createElement(m.a, {
                        title: c,
                        description: v,
                        error: !0
                    })
                }
                ReportError.propTypes = {
                    moduleSlug: r.a.string.isRequired,
                    error: r.a.object.isRequired
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
                    g = n.n(d),
                    m = (n(442), n(8)),
                    f = n.n(m),
                    p = n(0),
                    y = n.n(p),
                    v = n(341),
                    b = n(296),
                    h = n.n(b),
                    O = n(284),
                    T = n.n(O),
                    E = n(2),
                    _ = n(82),
                    A = n(39),
                    k = n(13),
                    S = n(65),
                    N = n(4);

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

                function j(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? I(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var D = n.n(N).a.useSelect;

                function GoogleChart(t) {
                    var n = t.chartEvents,
                        a = t.chartType,
                        r = t.children,
                        i = t.className,
                        c = t.data,
                        l = t.getChartWrapper,
                        d = t.height,
                        m = t.loaded,
                        p = t.loadingHeight,
                        y = t.loadingWidth,
                        b = t.onMouseOver,
                        O = t.onMouseOut,
                        N = t.onReady,
                        I = t.onSelect,
                        j = t.selectedStats,
                        w = t.width,
                        P = t.options,
                        C = t.gatheringData,
                        R = void 0 !== C && C,
                        x = g()(t, ["chartEvents", "chartType", "children", "className", "data", "getChartWrapper", "height", "loaded", "loadingHeight", "loadingWidth", "onMouseOver", "onMouseOut", "onReady", "onSelect", "selectedStats", "width", "options", "gatheringData"]),
                        Z = Object(A.a)("zeroDataStates"),
                        M = D((function(e) {
                            return e(k.a).getDateRangeDates()
                        })),
                        G = M.startDate,
                        L = M.endDate,
                        U = Object(E.useState)(!1),
                        F = u()(U, 2),
                        B = F[0],
                        W = F[1],
                        H = [];
                    (null == c ? void 0 : c.length) && (H = c[0].reduce((function(e, t, n) {
                        return (null == t ? void 0 : t.role) ? [].concat(s()(e), [n]) : e
                    }), []));
                    var z = c;
                    (null == j ? void 0 : j.length) > 0 && (z = c.map((function(e) {
                        return e.filter((function(e, t) {
                            return 0 === t || j.includes(t - 1) || H.includes(t - 1)
                        }))
                    })));
                    var V = p || d,
                        q = y || w;
                    V && !q && (q = "100%"), q && !V && (V = "100%");
                    var K = "PieChart" === a ? "circular" : "square",
                        Y = e.createElement("div", {
                            className: "googlesitekit-chart-loading"
                        }, e.createElement(_.a, {
                            className: "googlesitekit-chart-loading__wrapper",
                            height: V,
                            shape: K,
                            width: q
                        })),
                        $ = Object(E.useRef)(),
                        J = Object(E.useRef)();
                    if (Object(E.useEffect)((function() {
                            return function() {
                                if (J.current && $.current) {
                                    var e = J.current.visualization.events;
                                    e.removeAllListeners($.current.getChart()), e.removeAllListeners($.current)
                                }
                            }
                        }), []), Object(E.useLayoutEffect)((function() {
                            var e, t;
                            b && (null === (e = J.current) || void 0 === e || e.visualization.events.addListener($.current.getChart(), "onmouseover", (function(e) {
                                b(e, {
                                    chartWrapper: $.current,
                                    google: J.current
                                })
                            })));
                            O && (null === (t = J.current) || void 0 === t || t.visualization.events.addListener($.current.getChart(), "onmouseout", (function(e) {
                                O(e, {
                                    chartWrapper: $.current,
                                    google: J.current
                                })
                            })))
                        }), [b, O]), !m) return e.createElement("div", {
                        className: f()("googlesitekit-chart", "googlesitekit-chart-loading__forced", i)
                    }, Y);
                    var X = s()(n || []);
                    N && X.push({
                        eventName: "ready",
                        callback: N
                    }), I && X.push({
                        eventName: "select",
                        callback: I
                    });
                    var Q, ee, te, ne, ae, re, ie, oe, ce = T()(P);
                    Z && R && "LineChart" === a && ((null == P || null === (Q = P.vaxis) || void 0 === Q || null === (ee = Q.viewWindow) || void 0 === ee ? void 0 : ee.min) || h()(ce, "vAxis.viewWindow.min", 0), (null == P || null === (te = P.vaxis) || void 0 === te || null === (ne = te.viewWindow) || void 0 === ne ? void 0 : ne.max) || h()(ce, "vAxis.viewWindow.max", 2500), (null == P || null === (ae = P.hAxis) || void 0 === ae || null === (re = ae.viewWindow) || void 0 === re ? void 0 : re.min) || (h()(ce, "hAxis.viewWindow.min", new Date(G)), delete ce.hAxis.ticks), (null == P || null === (ie = P.hAxis) || void 0 === ie || null === (oe = ie.viewWindow) || void 0 === oe ? void 0 : oe.max) || (h()(ce, "hAxis.viewWindow.max", new Date(L)), delete ce.hAxis.ticks));
                    return e.createElement("div", {
                        className: f()("googlesitekit-chart", "googlesitekit-chart--".concat(a), i),
                        tabIndex: -1
                    }, e.createElement(v.a, o()({
                        className: "googlesitekit-chart__inner",
                        chartEvents: X,
                        chartType: a,
                        chartVersion: "49",
                        data: z,
                        loader: Y,
                        height: d,
                        getChartWrapper: function(e, t) {
                            var n, a, r;
                            (B || W(!0), e !== $.current) && (null === (n = J.current) || void 0 === n || n.visualization.events.removeAllListeners(null === (a = $.current) || void 0 === a ? void 0 : a.getChart()), null === (r = J.current) || void 0 === r || r.visualization.events.removeAllListeners($.current));
                            $.current = e, J.current = t, l && l(e, t)
                        },
                        width: w,
                        options: ce
                    }, x)), Z && R && B && e.createElement(S.b, {
                        style: S.a.OVERLAY
                    }), r)
                }
                GoogleChart.propTypes = {
                    className: y.a.string,
                    children: y.a.node,
                    chartEvents: y.a.arrayOf(y.a.shape({
                        eventName: y.a.string,
                        callback: y.a.func
                    })),
                    chartType: y.a.oneOf(["LineChart", "PieChart"]).isRequired,
                    data: y.a.array,
                    getChartWrapper: y.a.func,
                    height: y.a.string,
                    loaded: y.a.bool,
                    loadingHeight: y.a.string,
                    loadingWidth: y.a.string,
                    onMouseOut: y.a.func,
                    onMouseOver: y.a.func,
                    onReady: y.a.func,
                    onSelect: y.a.func,
                    selectedStats: y.a.arrayOf(y.a.number),
                    width: y.a.string,
                    options: y.a.object,
                    gatheringData: y.a.bool
                }, GoogleChart.defaultProps = j(j({}, v.a.defaultProps), {}, {
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
                    g = n(1),
                    m = n(2),
                    f = Object(m.forwardRef)((function(t, n) {
                        var a, i = t["aria-label"],
                            c = t.arrow,
                            s = t.back,
                            l = t.caps,
                            m = t.children,
                            f = t.className,
                            p = t.danger,
                            y = t.disabled,
                            v = t.external,
                            b = t.hideExternalIndicator,
                            h = t.href,
                            O = t.inherit,
                            T = t.inverse,
                            E = t.onClick,
                            _ = t.small,
                            A = t.to,
                            k = o()(t, ["aria-label", "arrow", "back", "caps", "children", "className", "danger", "disabled", "external", "hideExternalIndicator", "href", "inherit", "inverse", "onClick", "small", "to"]),
                            S = h || A || !E ? A ? "ROUTER_LINK" : v ? "EXTERNAL_LINK" : "LINK" : y ? "BUTTON_DISABLED" : "BUTTON",
                            N = "BUTTON" === S || "BUTTON_DISABLED" === S ? "button" : "ROUTER_LINK" === S ? d.b : "a",
                            I = ("EXTERNAL_LINK" === S && (a = Object(g._x)("(opens in a new tab)", "screen reader text", "google-site-kit")), "BUTTON_DISABLED" === S && (a = Object(g._x)("(disabled)", "screen reader text", "google-site-kit")), a ? i ? "".concat(i, " ").concat(a) : "string" == typeof m ? "".concat(m, " ").concat(a) : void 0 : i);
                        return e.createElement(N, r()({
                            "aria-label": I,
                            className: u()("googlesitekit-cta-link", f, {
                                "googlesitekit-cta-link--arrow": c,
                                "googlesitekit-cta-link--external": v && !b,
                                "googlesitekit-cta-link--inverse": T,
                                "googlesitekit-cta-link--back": s,
                                "googlesitekit-cta-link--small": _,
                                "googlesitekit-cta-link--inherit": O,
                                "googlesitekit-cta-link--caps": l,
                                "googlesitekit-cta-link--danger": p,
                                "googlesitekit-cta-link--disabled": y
                            }),
                            disabled: y,
                            href: "LINK" === S || "EXTERNAL_LINK" === S ? h : void 0,
                            onClick: E,
                            rel: "EXTERNAL_LINK" === S ? "noopener noreferrer" : void 0,
                            ref: n,
                            target: "EXTERNAL_LINK" === S ? "_blank" : void 0,
                            to: A
                        }, k), m)
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
                            var g = Promise.resolve(t[l][u]);
                            return delete t[l][u], g
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
                    g = n(65);

                function ReportTable(t) {
                    var n = t.rows,
                        a = t.columns,
                        i = t.className,
                        c = t.limit,
                        l = t.zeroState,
                        u = t.gatheringData,
                        m = void 0 !== u && u,
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
                            "googlesitekit-table--gathering-data": m
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
                    }, f && m && e.createElement("tr", {
                        className: "googlesitekit-table__body-row"
                    }, e.createElement("td", {
                        className: "googlesitekit-table__body-item googlesitekit-table__body-item-wrap",
                        colSpan: a.length
                    }, e.createElement(g.b, null))), (!f || !m) && !(null == n ? void 0 : n.length) && l && e.createElement("tr", {
                        className: "googlesitekit-table__body-row"
                    }, e.createElement("td", {
                        className: "googlesitekit-table__body-item googlesitekit-table__body-item-wrap",
                        colSpan: a.length
                    }, e.createElement(l, null))), !m && n.slice(0, c).map((function(t, n) {
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
                return y
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
                g = n(109),
                m = n(287),
                f = n(15),
                p = function(e, t) {
                    var n = t.find((function(t) {
                        return t.test(e)
                    }));
                    return !!n && n.exec(e)[1]
                },
                y = u()(function() {
                    var e = o()(r.a.mark((function e(t) {
                        var n, a, i, o;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.homeURL, a = t.ampMode, s()(Object(g.a)(n), "homeURL must be valid URL"), i = [n], f.b !== a) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.prev = 4, e.next = 7, Object(d.default)({
                                        path: "/wp/v2/posts?per_page=1"
                                    }).then((function(e) {
                                        return e.slice(0, 1).map((function(e) {
                                            return Object(m.a)(e.link, {
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
                        g = Object(d.useRef)();
                    Object(d.useEffect)((function() {
                        m();
                        var t = Object(s.debounce)(m, 100);
                        return e.addEventListener("resize", t),
                            function() {
                                return e.removeEventListener("resize", t)
                            }
                    }), []);
                    var m = function() {
                        if (g.current) {
                            var e = g.current,
                                t = e.scrollLeft,
                                n = e.scrollWidth - e.offsetWidth;
                            l(t < n - 16 && 0 < n - 16)
                        }
                    };
                    return a.createElement("div", {
                        onScroll: Object(s.debounce)(m, 100),
                        className: u()("googlesitekit-table-overflow", {
                            "googlesitekit-table-overflow--gradient": c
                        })
                    }, a.createElement("div", {
                        ref: g,
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
        293: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "c", (function() {
                return i
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "e", (function() {
                return c
            })), n.d(t, "a", (function() {
                return s
            }));
            var a = n(41);

            function r(e) {
                return "string" == typeof e && /^\w+$/.test(e)
            }

            function i(e) {
                return e === a.c || r(e)
            }

            function o(e) {
                return "string" == typeof e && /^\d+$/.test(e)
            }

            function c(e) {
                return e === a.d || o(e)
            }

            function s(e) {
                return "string" == typeof e && /^G-[a-zA-Z0-9]+$/.test(e)
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
                    return y
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
                    g = l.a.useSelect,
                    m = l.a.useDispatch,
                    f = "loggedinUsers",
                    p = "contentCreators",
                    y = (a = {}, i()(a, f, Object(c.__)("All logged-in users", "google-site-kit")), i()(a, p, Object(c.__)("Users that can write posts", "google-site-kit")), a);

                function TrackingExclusionSwitches() {
                    var t, n = g((function(e) {
                            return e(u.f).getTrackingDisabled()
                        })),
                        a = m(u.f).setTrackingDisabled;
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
                        label: y[f],
                        checked: n.includes(f),
                        onClick: s,
                        hideLabel: !1
                    })), !n.includes(f) && e.createElement("div", {
                        className: "googlesitekit-settings-module__inline-item"
                    }, e.createElement(d.a, {
                        label: y[p],
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
                    g = u.disableTracking,
                    m = (u.isTrackingEnabled, u.initializeSnippet),
                    f = u.trackEvent;

                function p(e) {
                    e ? d() : g()
                }
                c && s && m()
            }).call(this, n(18))
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
                return T
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
                g = n.n(d),
                m = n(15),
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

            function y(e) {
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

            function v(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return b(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
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

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            var h = g.a.createRegistryControl,
                O = g.a.createRegistrySelector,
                T = function() {
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
                                            return n = e.select(m.c).getHomeURL(), a = e.select(m.c).getAMPMode(), t.next = 4, Object(f.b)({
                                                homeURL: n,
                                                ampMode: a
                                            });
                                        case 4:
                                            r = t.sent, o = v(r), t.prev = 6, o.s();
                                        case 8:
                                            if ((c = o.n()).done) {
                                                t.next = 18;
                                                break
                                            }
                                            return l = c.value, t.next = 12, e.dispatch(m.c).waitForHTMLForURL(l);
                                        case 12:
                                            if (u = e.select(m.c).getHTMLForURL(l), !(d = Object(f.a)(u, i))) {
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
                                    return y(y({}, e), {}, {
                                        existingTag: r
                                    });
                                default:
                                    return e
                            }
                        },
                        b = {
                            getExistingTag: s.a.mark((function e() {
                                var t, a;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, g.a.commonActions.getRegistry();
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
                        T = {
                            getExistingTag: function(e) {
                                return e.existingTag
                            },
                            hasExistingTag: O((function(e) {
                                return function() {
                                    var t = e(n).getExistingTag();
                                    if (void 0 !== t) return !!t
                                }
                            }))
                        },
                        E = {
                            initialState: c,
                            actions: l,
                            controls: d,
                            reducer: p,
                            resolvers: b,
                            selectors: T
                        };
                    return y(y({}, E), {}, {
                        STORE_NAME: n
                    })
                }
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
                    g = n.n(d),
                    m = n(10),
                    f = n(15),
                    p = n(13),
                    y = n(36),
                    v = n(38),
                    b = n(89),
                    h = n(11),
                    O = n(364),
                    T = n(7),
                    E = n(19),
                    _ = n(21),
                    A = n(55),
                    k = n(112),
                    S = n(280),
                    N = n(365),
                    I = n(366),
                    j = n(367),
                    D = n(368),
                    w = n(369),
                    P = n(20),
                    C = g.a.useDispatch,
                    R = g.a.useSelect;

                function AccountCreate() {
                    var t = Object(u.useState)(!1),
                        n = s()(t, 2),
                        a = n[0],
                        i = n[1],
                        c = R((function(e) {
                            return {
                                accounts: e(m.f).getAccounts(),
                                hasResolvedAccounts: e(m.f).hasFinishedResolution("getAccounts")
                            }
                        })),
                        d = c.accounts,
                        g = c.hasResolvedAccounts,
                        x = R((function(e) {
                            return e(m.f).getAccountTicketTermsOfServiceURL()
                        })),
                        Z = R((function(e) {
                            return e(m.f).canSubmitAccountCreate()
                        })),
                        M = R((function(e) {
                            return e(m.f).isDoingCreateAccount()
                        })),
                        G = R((function(e) {
                            return e(p.a).hasScope(m.k)
                        })),
                        L = R((function(e) {
                            return e(p.a).hasScope(m.c)
                        })),
                        U = R((function(e) {
                            return e(y.a).hasForm(m.d)
                        })),
                        F = R((function(e) {
                            return e(y.a).getValue(m.d, "autoSubmit")
                        })),
                        B = R((function(e) {
                            return e(f.c).getReferenceSiteURL()
                        })),
                        W = R((function(e) {
                            return e(f.c).getSiteName()
                        })),
                        H = R((function(e) {
                            return e(f.c).getTimezone()
                        })),
                        z = Object(u.useContext)(P.b),
                        V = C(y.a).setValues,
                        q = C(v.a).navigateTo,
                        K = C(m.f).createAccount,
                        Y = C(p.a).setPermissionScopeError;
                    Object(u.useEffect)((function() {
                        x && q(x)
                    }), [x, q]), Object(u.useEffect)((function() {
                        U || V(m.d, Object(O.a)({
                            siteName: W,
                            siteURL: B,
                            timezone: H
                        }))
                    }), [U, W, B, H, V]);
                    var $ = Object(u.useCallback)(o()(r.a.mark((function e() {
                        var t, n;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = [], G && L || (t.push(m.k), t.push(m.c)), !(t.length > 0)) {
                                        e.next = 6;
                                        break
                                    }
                                    return V(m.d, {
                                        autoSubmit: !0
                                    }), Y({
                                        code: b.a,
                                        message: Object(l.__)("Additional permissions are required to create a new Analytics account.", "google-site-kit"),
                                        data: {
                                            status: 403,
                                            scopes: t,
                                            skipModal: !0
                                        }
                                    }), e.abrupt("return");
                                case 6:
                                    return V(m.d, {
                                        autoSubmit: !1
                                    }), e.next = 9, Object(h.w)("".concat(z, "_analytics"), "create_account", "proxy");
                                case 9:
                                    return e.next = 11, K();
                                case 11:
                                    n = e.sent, n.error || i(!0);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [K, i, G, L, Y, V, z]);
                    Object(u.useEffect)((function() {
                        G && F && $()
                    }), [G, F, $]);
                    var J = C(m.f).rollbackSettings,
                        X = Object(u.useCallback)((function() {
                            return J()
                        }), [J]);
                    return M || a || !g || void 0 === G ? e.createElement(A.a, null) : e.createElement("div", null, e.createElement(k.a, {
                        moduleSlug: "analytics",
                        storeName: m.f
                    }), e.createElement("h3", {
                        className: "googlesitekit-heading-4"
                    }, Object(l.__)("Create your Analytics account", "google-site-kit")), e.createElement("p", null, Object(l.__)("We’ve pre-filled the required information for your new account. Confirm or edit any details:", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(T.a, {
                        size: 6
                    }, e.createElement(I.a, null)), e.createElement(T.a, {
                        size: 6
                    }, e.createElement(j.a, null)), e.createElement(T.a, {
                        size: 6
                    }, e.createElement(D.a, null))), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(w.a, null), e.createElement(N.a, null)), e.createElement("p", null, G && e.createElement("span", null, Object(l.__)("You will be redirected to Google Analytics to accept the terms of service.", "google-site-kit")), !G && e.createElement("span", null, Object(l.__)("You will need to give Site Kit permission to create an Analytics account on your behalf and also accept the Google Analytics terms of service.", "google-site-kit"))), e.createElement(S.a, {
                        notice: Object(l.__)("This will create both a Google Analytics 4 and Universal Analytics property.", "google-site-kit")
                    }), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, e.createElement(E.a, {
                        disabled: !Z,
                        onClick: $
                    }, Object(l.__)("Create Account", "google-site-kit")), d && !!d.length && e.createElement(_.a, {
                        className: "googlesitekit-setup-module__sub-action",
                        onClick: X
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
                    g = n(19),
                    m = n(21),
                    f = n(55),
                    p = n(11),
                    y = n(10),
                    v = n(112),
                    b = n(299),
                    h = n(20),
                    O = d.a.useSelect,
                    T = d.a.useDispatch;

                function AccountCreateLegacy() {
                    var t = O((function(e) {
                            return {
                                accounts: e(y.f).getAccounts(),
                                hasResolvedAccounts: e(y.f).hasFinishedResolution("getAccounts")
                            }
                        })),
                        n = t.accounts,
                        r = t.hasResolvedAccounts,
                        o = O((function(e) {
                            return e(y.f).getAccountID()
                        })),
                        u = y.a === o,
                        d = O((function(e) {
                            return e(y.f).getServiceURL({
                                path: "/provision/SignUp"
                            })
                        })),
                        E = Object(s.useContext)(h.b),
                        _ = Object(s.useCallback)(function() {
                            var t = c()(i.a.mark((function t(n) {
                                return i.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n.preventDefault(), t.next = 3, Object(p.w)("".concat(E, "_analytics"), "create_account", "custom-oauth");
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
                        }(), [d, E]),
                        A = T(y.f).resetAccounts,
                        k = Object(s.useCallback)((function() {
                            A()
                        }), [A]);
                    return r ? a.createElement("div", null, a.createElement(b.a, null), a.createElement(v.a, {
                        moduleSlug: "analytics",
                        storeName: y.f
                    }), !u && n && 0 === n.length && a.createElement("p", null, Object(l.__)('Looks like you don\'t have an Analytics account yet. Once you create it, click on "Re-fetch my account" and Site Kit will locate it.', "google-site-kit")), u && a.createElement(s.Fragment, null, a.createElement("p", null, Object(l.__)("To create a new account, click the button below which will open the Google Analytics account creation screen in a new window.", "google-site-kit")), a.createElement("p", null, Object(l.__)("Once completed, click the link below to re-fetch your accounts to continue.", "google-site-kit"))), a.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, a.createElement(g.a, {
                        onClick: _
                    }, Object(l.__)("Create an account", "google-site-kit")), a.createElement("div", {
                        className: "googlesitekit-setup-module__sub-action"
                    }, a.createElement(m.a, {
                        onClick: k
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
                    g = n(20),
                    m = o.a.useSelect,
                    f = o.a.useDispatch;

                function AccountSelect() {
                    var t = Object(a.useContext)(g.b),
                        n = m((function(e) {
                            return e(l.f).getAccountID()
                        })),
                        i = m((function(e) {
                            return {
                                accounts: e(l.f).getAccounts(),
                                hasResolvedAccounts: e(l.f).hasFinishedResolution("getAccounts")
                            }
                        })),
                        o = i.accounts,
                        p = i.hasResolvedAccounts,
                        y = m((function(e) {
                            var t = {
                                hasExistingTag: e(l.f).hasExistingTag(),
                                hasGTMPropertyID: !1
                            };
                            return t.hasExistingTag || (t.hasGTMPropertyID = !!e(u.g).getSingleAnalyticsPropertyID()), t
                        })),
                        v = y.hasExistingTag,
                        b = y.hasGTMPropertyID,
                        h = f(l.f).selectAccount,
                        O = Object(a.useCallback)((function(e, a) {
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
                        onEnhancedChange: O,
                        disabled: v || b,
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
                    g = n(61),
                    m = s.a.useSelect,
                    f = s.a.useDispatch;

                function AdsConversionIDTextField() {
                    var t = m((function(e) {
                            return e(u.f).getAdsConversionID()
                        })),
                        n = m((function(e) {
                            return e(u.f).getCanUseSnippet() && e(u.f).getUseSnippet()
                        })),
                        a = f(u.f).setAdsConversionID,
                        c = Object(i.useCallback)((function(e) {
                            var n = e.currentTarget.value.trim().toUpperCase();
                            "AW-".length < n.length && !/^AW-/.test(n) && (n = "AW-".concat(n)), n !== t && a(n)
                        }), [t, a]),
                        s = Boolean(!t || Object(g.f)(t));
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
                    g = o.a.useDispatch;

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
                        m = g(c.f).setAnonymizeIP,
                        f = Object(a.useCallback)((function() {
                            m(!t)
                        }), [t, m]);
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
                    g = c.a.useSelect,
                    m = c.a.useDispatch;

                function ProfileNameTextField() {
                    var t, n, o = g((function(e) {
                            return e(u.f).getAccountID()
                        })),
                        c = g((function(e) {
                            return e(u.f).getPropertyID()
                        })),
                        f = g((function(e) {
                            return e(u.f).getProfiles(o, c)
                        })),
                        p = g((function(e) {
                            return e(u.f).getProfileID()
                        })),
                        y = g((function(e) {
                            return e(s.a).getValue(u.e, "profileName")
                        })),
                        v = m(s.a).setValues,
                        b = Object(r.useCallback)((function(e) {
                            var t = e.currentTarget;
                            v(u.e, {
                                profileName: t.value
                            })
                        }), [v]);
                    return Object(a.a)((function() {
                        y || v(u.e, {
                            profileName: Object(i._x)("All Web Site Data", "default Analytics view name", "google-site-kit")
                        })
                    })), p !== u.g ? null : (Array.isArray(f) && f.some((function(e) {
                        return e.name === y
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
                        value: y,
                        onChange: b
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
                    g = n(20),
                    m = o.a.useSelect,
                    f = o.a.useDispatch;

                function ProfileSelect() {
                    var t = m((function(e) {
                            return e(l.f).getAccountID()
                        })),
                        n = m((function(e) {
                            return e(l.f).getPropertyID()
                        })),
                        i = m((function(e) {
                            return e(l.f).getProfileID()
                        })),
                        o = m((function(e) {
                            return e(l.f).getProfiles(t, n)
                        })),
                        p = m((function(e) {
                            return !e(l.f).hasFinishedResolution("getAccounts") || e(l.f).isResolving("getProperties", [t]) || e(l.f).isResolving("getProfiles", [t, n])
                        })),
                        y = f(l.f).setProfileID,
                        v = Object(a.useContext)(g.b),
                        b = Object(a.useCallback)((function(e, t) {
                            var n = t.dataset.value;
                            if (i !== n) {
                                y(t.dataset.value);
                                var a = n === l.g ? "change_profile_new" : "change_profile";
                                Object(d.w)("".concat(v, "_analytics"), a)
                            }
                        }), [i, y, v]);
                    return Object(u.e)(t) && Object(u.k)(n) ? p ? e.createElement(s.a, {
                        small: !0
                    }) : e.createElement(c.m, {
                        className: "googlesitekit-analytics__select-profile",
                        label: Object(r.__)("View", "google-site-kit"),
                        value: i,
                        onEnhancedChange: b,
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
                    g = n(11),
                    m = n(20),
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
                        y = f((function(e) {
                            return e(l.f).hasExistingTag()
                        })),
                        v = f((function(e) {
                            return !!e(u.g).getSingleAnalyticsPropertyID()
                        })),
                        b = f((function(e) {
                            return e(l.f).getPropertyID()
                        })),
                        h = f((function(e) {
                            return e(l.f).hasFinishedResolution("getAccounts")
                        })),
                        O = p(l.f).selectProperty,
                        T = Object(a.useContext)(m.b),
                        E = Object(a.useCallback)((function(e, t) {
                            var n = t.dataset.value;
                            if (b !== n) {
                                O(n, t.dataset.internalId);
                                var a = n === l.h ? "change_property_new" : "change_property";
                                Object(g.w)("".concat(T, "_analytics"), a, "ua")
                            }
                        }), [b, O, T]);
                    return Object(d.e)(n) ? !h || o ? e.createElement(s.a, {
                        small: !0
                    }) : e.createElement(c.m, {
                        className: "googlesitekit-analytics__select-property",
                        label: Object(r.__)("Property", "google-site-kit"),
                        value: b,
                        onEnhancedChange: E,
                        disabled: y || v,
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
                    g = n.n(d),
                    m = n(7),
                    f = n(55),
                    p = n(41),
                    y = n(10),
                    v = n(61),
                    b = n(11),
                    h = n(20);

                function O(e, t) {
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
                        t % 2 ? O(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var E = g.a.useSelect,
                    _ = g.a.useDispatch;

                function PropertySelectIncludingGA4() {
                    var t = E((function(e) {
                            return e(y.f).getAccountID()
                        })),
                        n = E((function(e) {
                            return e(y.f).getPropertiesIncludingGA4(t) || []
                        })),
                        a = E((function(e) {
                            return e(p.b).getPropertyID()
                        })),
                        r = E((function(e) {
                            return e(y.f).getPropertyID()
                        })),
                        i = E((function(e) {
                            var n = !e(y.f).hasFinishedResolution("getAccounts"),
                                a = !e(p.b).hasFinishedResolution("getProperties", [t]),
                                r = !e(y.f).hasFinishedResolution("getProperties", [t]);
                            return n || r || a
                        })),
                        c = E((function(e) {
                            return e(y.f).getPrimaryPropertyType()
                        })) === y.i ? a : r,
                        d = _(p.b),
                        g = _(y.f),
                        O = Object(l.useContext)(h.b),
                        A = Object(l.useCallback)(function() {
                            var e = s()(o.a.mark((function e(n, a) {
                                var r, i, s, l, u, m, f, p, v, h, T;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = a.dataset.value, i = a.dataset.internalId, c !== r) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (r === y.h ? Object(b.w)("".concat(O, "_analytics"), "change_property_new", "ua") : (s = i ? "ua" : "ga4", Object(b.w)("".concat(O, "_analytics"), "change_property", s)), !i && r !== y.h) {
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
                                            g.selectProperty(r, i), g.setPrimaryPropertyType(y.j), d.setPropertyID((null == f ? void 0 : f._id) || ""), d.setWebDataStreamID((null === (l = p) || void 0 === l ? void 0 : l._id) || ""), d.setMeasurementID((null === (u = p) || void 0 === u || null === (m = u.webStreamData) || void 0 === m ? void 0 : m.measurementId) || ""), e.next = 32;
                                            break;
                                        case 20:
                                            return e.next = 22, g.findMatchedProperty(t);
                                        case 22:
                                            if (!(null == (h = e.sent) ? void 0 : h.id)) {
                                                e.next = 27;
                                                break
                                            }
                                            return e.next = 26, g.findPropertyProfile(t, h.id, h.defaultProfileId);
                                        case 26:
                                            T = e.sent;
                                        case 27:
                                            d.selectProperty(r), g.setPrimaryPropertyType(y.i), g.setPropertyID((null == h ? void 0 : h.id) || ""), g.setInternalWebPropertyID((null == h ? void 0 : h.internalWebPropertyId) || ""), g.setProfileID((null === (v = T) || void 0 === v ? void 0 : v.id) || "");
                                        case 32:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), [t, c, d, g, O]);
                    if (!Object(v.d)(t)) return null;
                    if (i) return e.createElement(f.a, {
                        small: !0
                    });
                    var k = n.map((function(e) {
                        return T(T({}, e), {}, {
                            id: e._id || e.id,
                            name: e.displayName || e.name
                        })
                    }));
                    return e.createElement(m.m, {
                        className: "googlesitekit-analytics__select-property",
                        label: Object(u.__)("Property", "google-site-kit"),
                        value: c,
                        onEnhancedChange: A,
                        enhanced: !0,
                        outlined: !0
                    }, (k || []).concat({
                        id: y.h,
                        name: Object(u.__)("Set up a new property", "google-site-kit")
                    }).map((function(t) {
                        var n = t.id,
                            a = t.name,
                            r = t.internalWebPropertyId;
                        return e.createElement(m.k, {
                            key: n,
                            value: n,
                            "data-internal-id": r
                        }, n === y.h ? a : Object(u.sprintf)(
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
                    g = o.a.useDispatch;

                function UseSnippetSwitch() {
                    var t = Object(a.useContext)(u.b),
                        n = d((function(e) {
                            return e(c.f).getUseSnippet()
                        })),
                        i = d((function(e) {
                            return e(c.f).getCanUseSnippet()
                        })),
                        o = g(c.f).setUseSnippet,
                        m = Object(a.useCallback)((function() {
                            var e = !n;
                            o(e), Object(l.w)("".concat(t, "_analytics"), e ? "enable_tag" : "disable_tag", "ua")
                        }), [n, o, t]);
                    return void 0 === n ? null : e.createElement("div", {
                        className: "googlesitekit-analytics-usesnippet"
                    }, e.createElement(s.a, {
                        label: Object(r.__)("Place Universal Analytics code", "google-site-kit"),
                        checked: n,
                        onClick: m,
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
                    g = n(20),
                    m = n(129),
                    f = n(21),
                    p = s.a.useSelect,
                    y = s.a.useDispatch;

                function GA4ActivateSwitch(t) {
                    var n = t.onActivate,
                        a = Object(o.useContext)(g.b),
                        r = p((function(e) {
                            return e(l.a).getValue(u.e, "enableGA4")
                        })),
                        c = y(l.a).setValues,
                        s = Object(o.useCallback)((function() {
                            c(u.e, {
                                enableGA4: !0
                            }), Object(d.w)("".concat(a, "_analytics"), "activate_ga4"), "function" == typeof n && n()
                        }), [c, n, a]);
                    return e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement(m.a, {
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
                    g = c.c[a] ? a : s;
                return {
                    accountName: t || u,
                    propertyName: "".concat(u).concat(d).replace(/\/$/, ""),
                    profileName: Object(i._x)("All Web Site Data", "default Analytics view name", "google-site-kit"),
                    countryCode: c.c[g],
                    timezone: g
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
                    g = s.a.useDispatch;

                function TimezoneSelect() {
                    var t = d((function(e) {
                            return e(u.a).getValue(l.d, "countryCode")
                        })),
                        n = d((function(e) {
                            return e(u.a).getValue(l.d, "timezone")
                        })),
                        c = g(u.a).setValues,
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
                    g = s.a.useDispatch;

                function CountrySelect() {
                    var t = d((function(e) {
                            return e(u.a).getValue(l.d, "countryCode")
                        })),
                        n = g(u.a).setValues,
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
        370: function(e, t, n) {
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
            var i = a.createElement("ellipse", {
                    cx: 175.51,
                    cy: 381.74,
                    rx: 104,
                    ry: 8.26,
                    fill: "#F1F3F4"
                }),
                o = a.createElement("path", {
                    stroke: "#E8EAED",
                    strokeLinecap: "round",
                    strokeMiterlimit: 10,
                    strokeWidth: 6,
                    d: "M200 10v31.42M105 35.46l15.71 27.2M35.46 105l27.2 15.71M10 200h31.42M35.46 295l27.2-15.71M364.54 295l-27.2-15.71M390 200h-31.42M364.54 105l-27.2 15.71M295 35.46l-15.71 27.2"
                }),
                c = a.createElement("path", {
                    d: "M201.85 238.9l61.65 74a20 20 0 011 24.29l-30 42.81h32.13",
                    stroke: "#1967D2",
                    strokeLinejoin: "round",
                    strokeWidth: 9.27
                }),
                s = a.createElement("path", {
                    stroke: "#1967D2",
                    strokeLinejoin: "round",
                    strokeWidth: 9.27,
                    d: "M214.03 222.14L114.03 380h-29.6"
                }),
                l = a.createElement("path", {
                    stroke: "#185ABC",
                    strokeLinejoin: "round",
                    strokeWidth: 9.27,
                    d: "M201.85 238.9l46.71 56.1M214.03 222.14L167.87 295"
                }),
                u = a.createElement("path", {
                    d: "M129.21 229.83l-11.7-42.66A50 50 0 01136 133.78L191 93a10 10 0 004-8V61.71M270.79 229.83l11.7-42.66A50 50 0 00264 133.78L209.05 93a10 10 0 01-4.05-8V61.71",
                    stroke: "#4285F4",
                    strokeLinejoin: "round",
                    strokeWidth: 9.27
                }),
                d = a.createElement("path", {
                    d: "M199.87 289.41a81.45 81.45 0 0081.58-81.32l-162.9-.26a81.45 81.45 0 0081.32 81.58z",
                    fill: "#1A73E8"
                }),
                g = a.createElement("path", {
                    d: "M172.86 256.89c13.38 16.47 37.19 21.05 54.28 0",
                    stroke: "#FFF",
                    strokeMiterlimit: 10,
                    strokeWidth: 6.66
                });
            t.a = function SvgZeroStateBlue(e) {
                return a.createElement("svg", r({
                    viewBox: "0 0 400 400",
                    fill: "none"
                }, e), i, o, c, s, l, u, d, g)
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
        392: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return DetailsPermaLinks
                }));
                var a = n(8),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i),
                    c = n(2),
                    s = n(4),
                    l = n.n(s),
                    u = n(15),
                    d = n(21),
                    g = n(11),
                    m = l.a.useSelect;

                function DetailsPermaLinks(t) {
                    var n = t.title,
                        a = t.path,
                        i = t.serviceURL,
                        o = m((function(e) {
                            return e(u.c).getReferenceSiteURL()
                        })),
                        s = Object(g.i)(o, a),
                        l = m((function(e) {
                            return e(u.c).getAdminURL("googlesitekit-dashboard", {
                                permaLink: s
                            })
                        }));
                    return e.createElement(c.Fragment, null, e.createElement(d.a, {
                        href: i || l,
                        inherit: !0,
                        external: !!i
                    }, n), e.createElement(d.a, {
                        className: r()("googlesitekit-display-block", "googlesitekit-overflow-wrap-break-word"),
                        href: s,
                        target: "_blank",
                        small: !0,
                        inherit: !0
                    }, a))
                }
                DetailsPermaLinks.propTypes = {
                    title: o.a.string,
                    path: o.a.string,
                    serviceURL: o.a.string
                }
            }).call(this, n(3))
        },
        4: function(e, t) {
            e.exports = googlesitekit.data
        },
        40: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "b", (function() {
                    return y
                })), n.d(t, "d", (function() {
                    return v
                })), n.d(t, "a", (function() {
                    return b
                })), n.d(t, "c", (function() {
                    return h
                }));
                var a = n(5),
                    r = n.n(a),
                    i = n(14),
                    o = n.n(i);
                n(23);

                function c(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return s(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
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

                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a
                }
                var l, u = "googlesitekit_".concat("1.72.0", "_"),
                    d = ["sessionStorage", "localStorage"],
                    g = [].concat(d),
                    m = function() {
                        var t = o()(r.a.mark((function t(n) {
                            var a, i;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (a = e[n]) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", !1);
                                    case 3:
                                        return t.prev = 3, i = "__storage_test__", a.setItem(i, i), a.removeItem(i), t.abrupt("return", !0);
                                    case 10:
                                        return t.prev = 10, t.t0 = t.catch(3), t.abrupt("return", t.t0 instanceof DOMException && (22 === t.t0.code || 1014 === t.t0.code || "QuotaExceededError" === t.t0.name || "NS_ERROR_DOM_QUOTA_REACHED" === t.t0.name) && 0 !== a.length);
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

                function f() {
                    return p.apply(this, arguments)
                }

                function p() {
                    return (p = o()(r.a.mark((function t() {
                        var n, a, i;
                        return r.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (void 0 === l) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", l);
                                case 2:
                                    n = c(g), t.prev = 3, n.s();
                                case 5:
                                    if ((a = n.n()).done) {
                                        t.next = 15;
                                        break
                                    }
                                    if (i = a.value, !l) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("continue", 13);
                                case 9:
                                    return t.next = 11, m(i);
                                case 11:
                                    if (!t.sent) {
                                        t.next = 13;
                                        break
                                    }
                                    l = e[i];
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
                                    return void 0 === l && (l = null), t.abrupt("return", l);
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [3, 17, 20, 23]
                        ])
                    })))).apply(this, arguments)
                }
                var y = function() {
                        var e = o()(r.a.mark((function e(t) {
                            var n, a, i, o, c, s, l;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, f();
                                    case 2:
                                        if (!(n = e.sent)) {
                                            e.next = 10;
                                            break
                                        }
                                        if (!(a = n.getItem("".concat(u).concat(t)))) {
                                            e.next = 10;
                                            break
                                        }
                                        if (i = JSON.parse(a), o = i.timestamp, c = i.ttl, s = i.value, l = i.isError, !o || c && !(Math.round(Date.now() / 1e3) - o < c)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return", {
                                            cacheHit: !0,
                                            value: s,
                                            isError: l
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
                    v = function() {
                        var t = o()(r.a.mark((function t(n, a) {
                            var i, o, c, s, l, d, g, m, p = arguments;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return i = p.length > 2 && void 0 !== p[2] ? p[2] : {}, o = i.ttl, c = void 0 === o ? 3600 : o, s = i.timestamp, l = void 0 === s ? Math.round(Date.now() / 1e3) : s, d = i.isError, g = void 0 !== d && d, t.next = 3, f();
                                    case 3:
                                        if (!(m = t.sent)) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.prev = 5, m.setItem("".concat(u).concat(n), JSON.stringify({
                                            timestamp: l,
                                            ttl: c,
                                            value: a,
                                            isError: g
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
                    b = function() {
                        var t = o()(r.a.mark((function t(n) {
                            var a;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, f();
                                    case 2:
                                        if (!(a = t.sent)) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.prev = 4, a.removeItem("".concat(u).concat(n)), t.abrupt("return", !0);
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
                        var t = o()(r.a.mark((function t() {
                            var n, a, i, o;
                            return r.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, f();
                                    case 2:
                                        if (!(n = t.sent)) {
                                            t.next = 14;
                                            break
                                        }
                                        for (t.prev = 4, a = [], i = 0; i < n.length; i++) 0 === (o = n.key(i)).indexOf(u) && a.push(o.substring(u.length));
                                        return t.abrupt("return", a);
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
        412: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return PropertySelect
                }));
                var a = n(8),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i),
                    c = n(2),
                    s = n(1),
                    l = n(4),
                    u = n.n(l),
                    d = n(7),
                    g = n(55),
                    m = n(41),
                    f = n(10),
                    p = n(61),
                    y = n(293),
                    v = n(11),
                    b = n(20),
                    h = u.a.useSelect,
                    O = u.a.useDispatch;

                function PropertySelect(t) {
                    var n = t.label,
                        a = h((function(e) {
                            return e(f.f).getAccountID()
                        })),
                        i = h((function(e) {
                            return e(m.b).getProperties(a) || []
                        })),
                        o = h((function(e) {
                            return e(m.b).getPropertyID()
                        })),
                        l = h((function(e) {
                            return !e(f.f).hasFinishedResolution("getAccounts") || !e(m.b).hasFinishedResolution("getProperties", [a]) || !1 === e(f.f).hasFinishedSelectingAccount()
                        })),
                        u = O(m.b).selectProperty,
                        T = Object(c.useContext)(b.b),
                        E = Object(c.useCallback)((function(e, t) {
                            var n = t.dataset.value;
                            if (o !== n) {
                                var a = n === m.c ? "change_property_new" : "change_property";
                                u(n), Object(v.w)("".concat(T, "_analytics"), a, "ga4")
                            }
                        }), [o, u, T]);
                    if (!Object(p.d)(a)) return null;
                    if (l) return e.createElement(g.a, {
                        height: 100,
                        small: !0
                    });
                    var _ = Object(y.c)(o);
                    return e.createElement(d.m, {
                        className: r()("googlesitekit-analytics__select-property", {
                            "mdc-select--invalid": !_
                        }),
                        label: n || Object(s.__)("Property", "google-site-kit"),
                        value: o,
                        onEnhancedChange: E,
                        disabled: !Object(p.d)(a),
                        enhanced: !0,
                        outlined: !0
                    }, (i || []).concat({
                        _id: m.c,
                        displayName: Object(s.__)("Set up a new property", "google-site-kit")
                    }).map((function(t, n) {
                        var a = t._id,
                            r = t.displayName;
                        return e.createElement(d.k, {
                            key: n,
                            value: a
                        }, a === m.c ? r : Object(s.sprintf)(
                            /* translators: 1: Property name. 2: Property ID. */
                            Object(s.__)("%1$s (%2$s)", "google-site-kit"), r, a))
                    })))
                }
                PropertySelect.propTypes = {
                    label: o.a.string
                }
            }).call(this, n(3))
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
        43: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "a", (function() {
                return r
            }));
            var a = "core/ui",
                r = "activeContextID"
        },
        442: function(e, t, n) {
            (function(e) {
                Object.prototype.hasOwnProperty.call(e, "google") || (e.google = void 0)
            }).call(this, n(18))
        },
        45: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return T
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
                g = n(76),
                m = n(11);

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
            var y = function(e) {
                    return e
                },
                v = function() {
                    return {}
                },
                b = function() {},
                h = d.a.clearError,
                O = d.a.receiveError,
                T = function(e) {
                    var t, n, a = r.a.mark(x),
                        i = e.baseName,
                        c = e.controlCallback,
                        l = e.reducerCallback,
                        d = void 0 === l ? y : l,
                        f = e.argsToParams,
                        T = void 0 === f ? v : f,
                        E = e.validateParams,
                        _ = void 0 === E ? b : E;
                    s()(i, "baseName is required."), s()("function" == typeof c, "controlCallback is required and must be a function."), s()("function" == typeof d, "reducerCallback must be a function."), s()("function" == typeof T, "argsToParams must be a function."), s()("function" == typeof _, "validateParams must be a function.");
                    try {
                        _(T()), n = !1
                    } catch (e) {
                        n = !0
                    }
                    var A = Object(g.b)(i),
                        k = Object(g.a)(i),
                        S = "FETCH_".concat(k),
                        N = "START_".concat(S),
                        I = "FINISH_".concat(S),
                        j = "CATCH_".concat(S),
                        D = "RECEIVE_".concat(k),
                        w = "fetch".concat(A),
                        P = "receive".concat(A),
                        C = "isFetching".concat(A),
                        R = o()({}, C, {});

                    function x(e, t) {
                        var n, o;
                        return r.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, {
                                        payload: {
                                            params: e
                                        },
                                        type: N
                                    };
                                case 2:
                                    return a.next = 4, h(i, t);
                                case 4:
                                    return a.prev = 4, a.next = 7, {
                                        payload: {
                                            params: e
                                        },
                                        type: S
                                    };
                                case 7:
                                    return n = a.sent, a.next = 10, Z[P](n, e);
                                case 10:
                                    return a.next = 12, {
                                        payload: {
                                            params: e
                                        },
                                        type: I
                                    };
                                case 12:
                                    a.next = 23;
                                    break;
                                case 14:
                                    return a.prev = 14, a.t0 = a.catch(4), o = a.t0, a.next = 19, O(o, i, t);
                                case 19:
                                    return a.next = 21, O(o);
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
                    var Z = (t = {}, o()(t, w, (function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var a = T.apply(void 0, t);
                            return _(a), x(a, t)
                        })), o()(t, P, (function(e, t) {
                            return s()(void 0 !== e, "response is required."), n ? (s()(u()(t), "params is required."), _(t)) : t = {}, {
                                payload: {
                                    response: e,
                                    params: t
                                },
                                type: D
                            }
                        })), t),
                        M = o()({}, S, (function(e) {
                            var t = e.payload;
                            return c(t.params)
                        })),
                        G = o()({}, C, (function(e) {
                            if (void 0 === e[C]) return !1;
                            var t;
                            try {
                                for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) a[r - 1] = arguments[r];
                                t = T.apply(void 0, a), _(t)
                            } catch (e) {
                                return !1
                            }
                            return !!e[C][Object(m.v)(t)]
                        }));
                    return {
                        initialState: R,
                        actions: Z,
                        controls: M,
                        reducer: function(e, t) {
                            var n = t.type,
                                a = t.payload;
                            switch (n) {
                                case N:
                                    var r = a.params;
                                    return p(p({}, e), {}, o()({}, C, p(p({}, e[C]), {}, o()({}, Object(m.v)(r), !0))));
                                case D:
                                    var i = a.response,
                                        c = a.params;
                                    return d(e, i, c);
                                case I:
                                    var s = a.params;
                                    return p(p({}, e), {}, o()({}, C, p(p({}, e[C]), {}, o()({}, Object(m.v)(s), !1))));
                                case j:
                                    var l = a.params;
                                    return p(p({}, e), {}, o()({}, C, p(p({}, e[C]), {}, o()({}, Object(m.v)(l), !1))));
                                default:
                                    return e
                            }
                        },
                        resolvers: {},
                        selectors: G
                    }
                }
        },
        465: function(e, t, n) {
            "use strict";

            function a(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                return e.reduce((function(e, t, a) {
                    return e + t + encodeURIComponent(n[a] || "")
                }), "")
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        468: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Header
                }));
                var a = n(1),
                    r = n(2),
                    i = n(4),
                    o = n.n(i),
                    c = n(13),
                    s = n(10),
                    l = n(234),
                    u = n(282),
                    d = n(149),
                    g = o.a.useSelect;

                function Header() {
                    var t = g((function(e) {
                            return e(c.a).getDateRangeDates({
                                offsetDays: s.b
                            })
                        })),
                        n = g((function(e) {
                            return e(s.f).getServiceReportURL("visitors-overview", Object(d.a)(t))
                        })),
                        i = g((function(e) {
                            return e(c.a).getDateRangeNumberOfDays()
                        })),
                        o = Object(a.sprintf)(
                            /* translators: %s: number of days */
                            Object(a._n)("Audience overview for the last %s day", "Audience overview for the last %s days", i, "google-site-kit"), i),
                        m = Object(a.sprintf)(
                            /* translators: %s: module name. */
                            Object(a.__)("See full stats in %s", "google-site-kit"), Object(a._x)("Analytics", "Service name", "google-site-kit"));
                    return e.createElement(r.Fragment, null, e.createElement(l.a, {
                        title: o
                    }), e.createElement(u.a, {
                        href: n,
                        label: m,
                        external: !0
                    }))
                }
            }).call(this, n(3))
        },
        469: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Header
                }));
                var a = n(1),
                    r = n(2),
                    i = n(4),
                    o = n.n(i),
                    c = n(13),
                    s = n(10),
                    l = n(39),
                    u = n(234),
                    d = n(282),
                    g = n(149),
                    m = o.a.useSelect;

                function Header() {
                    var t = Object(l.a)("unifiedDashboard"),
                        n = m((function(e) {
                            return e(c.a).getDateRangeDates({
                                offsetDays: s.b
                            })
                        })),
                        i = m((function(e) {
                            return e(s.f).getServiceReportURL("content-pages", Object(g.a)(n))
                        })),
                        o = m((function(e) {
                            return e(c.a).getDateRangeNumberOfDays()
                        })),
                        f = Object(a.sprintf)(
                            /* translators: %s: number of days */
                            Object(a._n)("Top content over the last %s day", "Top content over the last %s days", o, "google-site-kit"), o),
                        p = Object(a.sprintf)(
                            /* translators: %s: module name. */
                            Object(a.__)("See full stats in %s", "google-site-kit"), Object(a._x)("Analytics", "Service name", "google-site-kit"));
                    return e.createElement(r.Fragment, null, e.createElement(u.a, {
                        title: f
                    }), !t && e.createElement(d.a, {
                        href: i,
                        label: p,
                        external: !0
                    }))
                }
            }).call(this, n(3))
        },
        470: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Footer
                }));
                var a = n(1),
                    r = n(4),
                    i = n.n(r),
                    o = n(13),
                    c = n(10),
                    s = n(96),
                    l = n(149),
                    u = i.a.useSelect;

                function Footer() {
                    var t = u((function(e) {
                            return e(o.a).getDateRangeDates({
                                offsetDays: c.b
                            })
                        })),
                        n = u((function(e) {
                            return e(c.f).getServiceReportURL("content-pages", Object(l.a)(t))
                        }));
                    return e.createElement(s.a, {
                        href: n,
                        name: Object(a._x)("Analytics", "Service name", "google-site-kit"),
                        external: !0
                    })
                }
            }).call(this, n(3))
        },
        471: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Header
                }));
                var a = n(1),
                    r = n(2),
                    i = n(4),
                    o = n.n(i),
                    c = n(10),
                    s = n(234),
                    l = n(282),
                    u = n(13),
                    d = n(149),
                    g = o.a.useSelect;

                function Header() {
                    var t = g((function(e) {
                            return e(u.a).getDateRangeDates({
                                offsetDays: c.b
                            })
                        })),
                        n = g((function(e) {
                            return e(c.f).getServiceReportURL("trafficsources-overview", Object(d.a)(t))
                        })),
                        i = g((function(e) {
                            return e(u.a).getDateRangeNumberOfDays()
                        })),
                        o = Object(a.sprintf)(
                            /* translators: %s: number of days */
                            Object(a._n)("Top acquisition channels over the last %s day", "Top acquisition channels over the last %s days", i, "google-site-kit"), i),
                        m = Object(a.sprintf)(
                            /* translators: %s: module name. */
                            Object(a.__)("See full stats in %s", "google-site-kit"), Object(a._x)("Analytics", "Service name", "google-site-kit"));
                    return e.createElement(r.Fragment, null, e.createElement(s.a, {
                        title: o
                    }), e.createElement(l.a, {
                        href: n,
                        label: m,
                        external: !0
                    }))
                }
            }).call(this, n(3))
        },
        472: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Footer
                }));
                var a = n(1),
                    r = n(4),
                    i = n.n(r),
                    o = n(13),
                    c = n(10),
                    s = n(96),
                    l = n(149),
                    u = i.a.useSelect;

                function Footer() {
                    var t = u((function(e) {
                            return e(o.a).getDateRangeDates({
                                offsetDays: c.b
                            })
                        })),
                        n = u((function(e) {
                            return e(c.f).getServiceReportURL("trafficsources-overview", Object(l.a)(t))
                        }));
                    return e.createElement(s.a, {
                        className: "googlesitekit-data-block__source",
                        name: Object(a._x)("Analytics", "Service name", "google-site-kit"),
                        href: n,
                        external: !0
                    })
                }
            }).call(this, n(3))
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
        520: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupForm
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
                    g = n.n(d),
                    m = n(19),
                    f = n(10),
                    p = n(13),
                    y = n(36),
                    v = n(89),
                    b = n(521),
                    h = n(522),
                    O = n(523),
                    T = n(524),
                    E = g.a.useSelect,
                    _ = g.a.useDispatch;

                function SetupForm(t) {
                    var n = t.finishSetup,
                        a = E((function(e) {
                            return e(f.f).canSubmitChanges()
                        })),
                        i = E((function(e) {
                            return e(p.a).hasScope(f.c)
                        })),
                        c = E((function(e) {
                            return e(y.a).getValue(f.e, "autoSubmit")
                        })),
                        s = E((function(e) {
                            return e(f.f).getSetupFlowMode()
                        })),
                        d = _(y.a).setValues,
                        g = _(f.f).submitChanges,
                        A = Object(l.useCallback)(function() {
                            var e = o()(r.a.mark((function e(t) {
                                var a, i;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), e.next = 3, g();
                                        case 3:
                                            a = e.sent, i = a.error, Object(v.c)(i) && d(f.e, {
                                                autoSubmit: !0
                                            }), i || (d(f.e, {
                                                autoSubmit: !1
                                            }), n());
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [n, d, g]);
                    return Object(l.useEffect)((function() {
                        c && i && A({
                            preventDefault: function() {}
                        })
                    }), [i, c, A]), e.createElement("form", {
                        className: "googlesitekit-analytics-setup__form",
                        onSubmit: A
                    }, s === f.n && e.createElement(b.a, null), s === f.o && e.createElement(h.a, null), s === f.l && e.createElement(O.a, null), s === f.m && e.createElement(T.a, null), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, e.createElement(m.a, {
                        disabled: !a
                    }, Object(u.__)("Configure Analytics", "google-site-kit"))))
                }
                SetupForm.propTypes = {
                    finishSetup: s.a.func
                }, SetupForm.defaultProps = {
                    finishSetup: function() {}
                }
            }).call(this, n(3))
        },
        521: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupFormLegacy
                }));
                var a = n(1),
                    r = n(2),
                    i = n(4),
                    o = n.n(i),
                    c = n(10),
                    s = n(112),
                    l = n(92),
                    u = o.a.useSelect;

                function SetupFormLegacy() {
                    var t = u((function(e) {
                            return e(c.f).getAccounts()
                        })) || [],
                        n = u((function(e) {
                            return e(c.f).hasExistingTag()
                        })),
                        i = u((function(e) {
                            return e(c.f).getProfileID()
                        }));
                    return e.createElement(r.Fragment, null, e.createElement(l.l, null), e.createElement(s.a, {
                        moduleSlug: "analytics",
                        storeName: c.f
                    }), e.createElement(l.j, null), !n && e.createElement(l.h, null), !!t.length && !n && e.createElement("p", {
                        className: "googlesitekit-margin-bottom-0"
                    }, Object(a.__)("Please select the account information below. You can change this view later in your settings.", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(l.c, null), e.createElement(l.p, null), e.createElement(l.o, null)), i === c.g && e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs googlesitekit-setup-module__inputs--multiline"
                    }, e.createElement(l.n, null)))
                }
            }).call(this, n(3))
        },
        522: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupFormUA
                }));
                var a = n(99),
                    r = n(1),
                    i = n(2),
                    o = n(4),
                    c = n.n(o),
                    s = n(92),
                    l = n(10),
                    u = n(41),
                    d = n(280),
                    g = n(112),
                    m = c.a.useSelect,
                    f = c.a.useDispatch;

                function SetupFormUA() {
                    var t = f(u.b).selectProperty,
                        n = m((function(e) {
                            return e(l.f).getAccounts()
                        })) || [],
                        o = m((function(e) {
                            return e(l.f).hasExistingTag()
                        })),
                        c = m((function(e) {
                            return e(l.f).getProfileID()
                        })),
                        p = m((function(e) {
                            return e(l.f).getAccountID()
                        })),
                        y = m((function(e) {
                            return e(l.f).getPropertyID()
                        })),
                        v = p && p !== l.a && y;
                    return Object(a.a)((function() {
                        t(u.c)
                    })), e.createElement(i.Fragment, null, e.createElement(g.a, {
                        moduleSlug: "analytics",
                        storeName: l.f
                    }), e.createElement(s.j, null), !o && e.createElement(s.h, null), !!n.length && !o && e.createElement("p", {
                        className: "googlesitekit-margin-bottom-0"
                    }, Object(r.__)("Please select the account information below. You can change this view later in your settings.", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(s.c, null), e.createElement(s.p, null), e.createElement(s.o, null)), c === l.g && e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs googlesitekit-setup-module__inputs--multiline"
                    }, e.createElement(s.n, null)), v && e.createElement(d.a, {
                        notice: Object(r.__)("A Google Analytics 4 property will also be created.", "google-site-kit")
                    }))
                }
            }).call(this, n(3))
        },
        523: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupFormGA4
                }));
                var a = n(99),
                    r = n(1),
                    i = n(2),
                    o = n(4),
                    c = n.n(o),
                    s = n(36),
                    l = n(10),
                    u = n(41),
                    d = n(112),
                    g = n(412),
                    m = n(92),
                    f = c.a.useSelect,
                    p = c.a.useDispatch;

                function SetupFormGA4() {
                    var t = f((function(e) {
                            return e(l.f).getAccounts()
                        })) || [],
                        n = f((function(e) {
                            return e(u.b).hasExistingTag()
                        })),
                        o = f((function(e) {
                            return e(u.b).getExistingTag()
                        })),
                        c = f((function(e) {
                            return e(u.b).getMeasurementID()
                        })),
                        y = f((function(e) {
                            return e(u.b).getPropertyID()
                        })),
                        v = f((function(e) {
                            return e(l.f).getAccountID()
                        })),
                        b = p(l.f).selectProperty,
                        h = p(s.a).setValues,
                        O = p(u.b).setUseSnippet,
                        T = v && v !== l.a && y;
                    return Object(a.a)((function() {
                        b(l.h), h(l.e, {
                            profileName: Object(r._x)("All Web Site Data", "default Analytics view name", "google-site-kit")
                        })
                    })), Object(i.useEffect)((function() {
                        n && O(o !== c)
                    }), [O, n, o, c]), e.createElement(i.Fragment, null, e.createElement(d.a, {
                        moduleSlug: "analytics",
                        storeName: l.f
                    }), e.createElement(m.j, null), !!t.length && e.createElement("p", {
                        className: "googlesitekit-margin-bottom-0"
                    }, Object(r.__)("Please select the account information below. You can change this view later in your settings.", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(m.c, null), e.createElement(g.a, null)), T && e.createElement(m.m, {
                        notice: Object(r.__)("An associated Universal Analytics property will also be created.", "google-site-kit")
                    }))
                }
            }).call(this, n(3))
        },
        524: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupFormGA4Transitional
                }));
                var a = n(1),
                    r = n(2),
                    i = n(4),
                    o = n.n(i),
                    c = n(41),
                    s = n(10),
                    l = n(112),
                    u = n(412),
                    d = n(92),
                    g = o.a.useSelect,
                    m = o.a.useDispatch;

                function SetupFormGA4Transitional() {
                    var t = g((function(e) {
                            return e(s.f).getAccounts()
                        })) || [],
                        n = g((function(e) {
                            return e(s.f).getPrimaryPropertyType()
                        })),
                        i = g((function(e) {
                            return e(s.f).hasExistingTag()
                        })),
                        o = g((function(e) {
                            return e(s.f).getExistingTag()
                        })),
                        f = g((function(e) {
                            return e(s.f).getAccountID()
                        })),
                        p = g((function(e) {
                            return e(s.f).getPropertyID()
                        })),
                        y = g((function(e) {
                            return e(s.f).getProfileID()
                        })),
                        v = g((function(e) {
                            return e(c.b).getPropertyID()
                        })),
                        b = g((function(e) {
                            return e(c.b).getExistingTag()
                        })),
                        h = g((function(e) {
                            return e(c.b).getMeasurementID()
                        })),
                        O = m(s.f).setUseSnippet,
                        T = m(c.b).setUseSnippet,
                        E = n === s.j ? p : v,
                        _ = f && f !== s.a && E;
                    Object(r.useEffect)((function() {
                        O(o !== p), T(b !== h)
                    }), [O, o, p, T, b, h]);
                    var A = n === s.j ? Object(a.__)("You need to connect the Google Analytics 4 property that’s associated with this Universal Analytics property.", "google-site-kit") : Object(a.__)("You need to connect the Universal Analytics property that’s associated with this Google Analytics 4 property.", "google-site-kit");
                    return e.createElement(r.Fragment, null, e.createElement(l.a, {
                        moduleSlug: "analytics",
                        storeName: s.f
                    }), e.createElement(d.j, null), !!t.length && !i && e.createElement("p", {
                        className: "googlesitekit-margin-bottom-0"
                    }, Object(a.__)("Please select the account information below. You can change this view later in your settings.", "google-site-kit")), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(d.c, null), e.createElement(d.q, null), n === s.j && e.createElement(d.o, null)), y === s.g && n === s.j && e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs googlesitekit-setup-module__inputs--multiline"
                    }, e.createElement(d.n, null)), _ && e.createElement(d.m, {
                        notice: A
                    }, n === s.i && e.createElement(r.Fragment, null, e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(d.p, null), e.createElement(d.o, null)), y === s.g && e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs googlesitekit-setup-module__inputs--multiline"
                    }, e.createElement(d.n, null))), n === s.j && e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(u.a, null))))
                }
            }).call(this, n(3))
        },
        525: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsForm
                }));
                var a = n(2),
                    r = n(4),
                    i = n.n(r),
                    o = n(92),
                    c = n(112),
                    s = n(10),
                    l = n(25),
                    u = n(526),
                    d = n(527),
                    g = n(61),
                    m = i.a.useSelect;

                function SettingsForm() {
                    var t = m((function(e) {
                            return e(s.f).getAccountID()
                        })),
                        n = m((function(e) {
                            return e(s.f).hasExistingTag()
                        })),
                        r = m((function(e) {
                            return e(s.f).getUseSnippet()
                        })),
                        i = m((function(e) {
                            return e(l.g).getUseSnippet()
                        })),
                        f = m((function(e) {
                            return e(l.g).getSingleAnalyticsPropertyID()
                        })),
                        p = r || i && f;
                    return e.createElement(a.Fragment, null, e.createElement(c.a, {
                        moduleSlug: "analytics",
                        storeName: s.f
                    }), e.createElement(o.j, null), !n && e.createElement(o.h, null), e.createElement(u.a, null), e.createElement(d.a, null), Object(g.d)(t) && e.createElement(a.Fragment, null, e.createElement(o.f, null), p && e.createElement(o.r, null), e.createElement(o.e, null)))
                }
            }).call(this, n(3))
        },
        526: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsControls
                }));
                var a = n(4),
                    r = n.n(a),
                    i = n(10),
                    o = n(92),
                    c = r.a.useSelect;

                function SettingsControls() {
                    var t = c((function(e) {
                        return e(i.f).getProfileID()
                    }));
                    return e.createElement("div", {
                        className: "googlesitekit-settings-module__fields-group"
                    }, e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(o.c, null), e.createElement(o.p, null), e.createElement(o.o, null)), t === i.g && e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs googlesitekit-setup-module__inputs--multiline"
                    }, e.createElement(o.n, null)), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs googlesitekit-setup-module__inputs--multiline"
                    }, e.createElement(o.s, null)))
                }
            }).call(this, n(3))
        },
        527: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return GA4SettingsControls
                }));
                var a = n(5),
                    r = n.n(a),
                    i = n(14),
                    o = n.n(i),
                    c = n(12),
                    s = n.n(c),
                    l = n(400),
                    u = n(1),
                    d = n(2),
                    g = n(4),
                    m = n.n(g),
                    f = n(36),
                    p = n(41),
                    y = n(10),
                    v = n(7),
                    b = n(92),
                    h = n(605),
                    O = n(55),
                    T = m.a.useSelect,
                    E = m.a.useDispatch;

                function GA4SettingsControls() {
                    var t = Object(d.useState)(),
                        n = s()(t, 2),
                        a = n[0],
                        i = n[1],
                        c = Object(d.useState)(),
                        g = s()(c, 2),
                        m = g[0],
                        _ = g[1],
                        A = T((function(e) {
                            return e(y.f).getAccountID()
                        })),
                        k = T((function(e) {
                            return e(p.b).getProperties(A)
                        })),
                        S = T((function(e) {
                            return e(p.b).isAdminAPIWorking()
                        })),
                        N = T((function(e) {
                            return e(f.a).getValue(y.e, "enableGA4")
                        })),
                        I = T((function(e) {
                            return e(p.b).getPropertyID()
                        })),
                        j = E(p.b),
                        D = j.matchAccountProperty,
                        w = j.matchWebDataStream,
                        P = j.setPropertyID,
                        C = j.setWebDataStreamID,
                        R = j.setMeasurementID;
                    Object(l.a)((function() {
                        var e = function() {
                            var e = o()(r.a.mark((function e() {
                                var t, n;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, D(A);
                                        case 2:
                                            if (t = e.sent, i(t), !(null == t ? void 0 : t._id)) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 7, w(t._id);
                                        case 7:
                                            n = e.sent, _(n);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        S && (i(void 0), _(void 0), e())
                    }), [A, D, w, S]);
                    var x = Object(d.useCallback)((function() {
                            var e = (null == k ? void 0 : k.length) > 0,
                                t = e ? "" : p.c,
                                n = e ? "" : p.d,
                                r = (a || {})._id,
                                i = void 0 === r ? t : r,
                                o = (m || {})._id,
                                c = void 0 === o ? n : o;
                            P(i), C(c), R((null == m ? void 0 : m.webStreamData.measurementId) || "")
                        }), [k, a, m, P, C, R]),
                        Z = !I && !N;
                    return void 0 === S ? e.createElement(O.a, {
                        height: Z ? 180 : 212,
                        small: !0
                    }) : S ? e.createElement("div", {
                        className: "googlesitekit-settings-module__fields-group"
                    }, e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, !Z && e.createElement(h.a, {
                        label: Object(u.__)("Google Analytics 4 Property", "google-site-kit")
                    }), Z && e.createElement(v.m, {
                        className: "googlesitekit-analytics__select-property",
                        label: Object(u.__)("Google Analytics 4 Property", "google-site-kit"),
                        value: (null == a ? void 0 : a._id) || "",
                        disabled: !0,
                        enhanced: !0,
                        outlined: !0
                    }, e.createElement(v.k, {
                        value: (null == a ? void 0 : a._id) || ""
                    }, (null == a ? void 0 : a._id) && (null == a ? void 0 : a.displayName) ? Object(u.sprintf)(
                        /* translators: 1: Property name. 2: Property ID. */
                        Object(u.__)("%1$s (%2$s)", "google-site-kit"), a.displayName, a._id) : ""))), Z && e.createElement(b.k, {
                        onActivate: x
                    }), !Z && e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs googlesitekit-setup-module__inputs--multiline"
                    }, e.createElement(h.b, null))) : null
                }
            }).call(this, n(3))
        },
        54: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "b", (function() {
                return y
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

            function m(e) {
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

            function y() {
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
                                return m(m({}, e), {}, i ? {
                                    errors: m(m({}, e.errors || {}), {}, r()({}, f(i, o), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var s = a.baseName,
                                    l = a.args,
                                    u = m({}, e);
                                if (s) {
                                    var d = f(s, l);
                                    u.errors = m({}, e.errors || {}), delete u.errors[d]
                                } else u.error = void 0;
                                return u;
                            case "CLEAR_ERRORS":
                                var g = a.baseName,
                                    p = m({}, e);
                                if (g)
                                    for (var y in p.errors = m({}, e.errors || {}), p.errors)(y === g || y.startsWith("".concat(g, "::"))) && delete p.errors[y];
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
        548: function(e, t, n) {
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
                d: "M48 46.376a6.629 6.629 0 01-2.18 4.952 6.466 6.466 0 01-5.11 1.625c-3.339-.495-5.789-3.433-5.708-6.848V6.891C34.925 3.475 37.379.537 40.72.045a6.469 6.469 0 015.102 1.631A6.63 6.63 0 0148 6.622v39.754z",
                fill: "#F9AB00"
            }), a.createElement("path", {
                d: "M6.5 40.002a6.489 6.489 0 014.594 1.901 6.51 6.51 0 011.906 4.6 6.51 6.51 0 01-1.906 4.596A6.489 6.489 0 016.5 53a6.489 6.489 0 01-4.594-1.9A6.51 6.51 0 010 46.501a6.51 6.51 0 011.905-4.6A6.489 6.489 0 016.5 40v.002zM24.348 20.002c-3.62.197-6.429 3.256-6.346 6.908v17.644c0 4.79 2.092 7.696 5.16 8.314a6.498 6.498 0 005.442-1.358A6.61 6.61 0 0031 46.4V26.605a6.624 6.624 0 00-1.912-4.668A6.519 6.519 0 0024.459 20l-.111.002z",
                fill: "#E37400",
                fillRule: "nonzero"
            }));
            t.a = function SvgAnalytics(e) {
                return a.createElement("svg", r({
                    viewBox: "0 0 48 53"
                }, e), i)
            }
        },
        549: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var a = n(2),
                r = n(4),
                i = n.n(r),
                o = n(10),
                c = n(22),
                s = n(25),
                l = i.a.useSelect,
                u = i.a.useDispatch;

            function d() {
                var e = u(o.f),
                    t = e.setAccountID,
                    n = e.selectProperty,
                    r = e.setUseSnippet,
                    i = l((function(e) {
                        return e(c.a).isModuleActive("tagmanager")
                    })),
                    d = l((function(e) {
                        var t = {
                            existingTag: e(o.f).getExistingTag(),
                            existingTagPermission: !1,
                            existingTagAccountID: "",
                            gtmAnalyticsPropertyID: "",
                            gtmAnalyticsAccountID: "",
                            gtmAnalyticsPermission: !1
                        };
                        if (t.existingTag) {
                            var n = e(o.f).getTagPermission(t.existingTag) || {},
                                a = n.permission,
                                r = void 0 !== a && a,
                                i = n.accountID,
                                c = void 0 === i ? "" : i;
                            r && (t.existingTagPermission = r, t.existingTagAccountID = c)
                        } else if (t.gtmAnalyticsPropertyID = e(s.g).getSingleAnalyticsPropertyID(), t.gtmAnalyticsPropertyID) {
                            var l = e(o.f).getTagPermission(t.gtmAnalyticsPropertyID) || {},
                                u = l.permission,
                                d = void 0 !== u && u,
                                g = l.accountID,
                                m = void 0 === g ? "" : g;
                            d && (t.gtmAnalyticsAccountID = m, t.gtmAnalyticsPermission = d)
                        }
                        return t
                    })),
                    g = d.existingTag,
                    m = d.existingTagAccountID,
                    f = d.existingTagPermission,
                    p = d.gtmAnalyticsPropertyID,
                    y = d.gtmAnalyticsAccountID,
                    v = d.gtmAnalyticsPermission;
                Object(a.useEffect)((function() {
                    g ? (r(!1), f && m && (t(m), n(g))) : i && p && v && y && (t(y), n(p))
                }), [g, m, f, p, y, v, i, n, t, r])
            }
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
        59: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "f", (function() {
                return m
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "h", (function() {
                return d.a
            })), n.d(t, "d", (function() {
                return p
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "i", (function() {
                return g
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
                g = function(e) {
                    o()(Object(d.a)(e), a);
                    var t = e.split("-"),
                        n = u()(t, 3),
                        r = n[0],
                        i = n[1],
                        c = n[2];
                    return new Date(r, i - 1, c)
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = g(e);
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
            var y = n(1);

            function v() {
                var e = function(e) {
                    return Object(y.sprintf)(
                        /* translators: %s: number of days */
                        Object(y._n)("Last %s day", "Last %s days", e, "google-site-kit"), e)
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
        605: function(e, t, n) {
            "use strict";
            var a = n(412);
            n.d(t, "a", (function() {
                return a.a
            }));
            var r = n(676);
            n.d(t, "b", (function() {
                return r.a
            }))
        },
        606: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(6),
                    r = n.n(a),
                    i = n(12),
                    o = n.n(i),
                    c = n(1),
                    s = n(2),
                    l = n(109),
                    u = n(4),
                    d = n.n(u),
                    g = n(10),
                    m = n(15),
                    f = n(13),
                    p = n(43),
                    y = n(93),
                    v = n(61),
                    b = n(149),
                    h = n(11),
                    O = n(137),
                    T = n(96),
                    E = n(755),
                    _ = n(756),
                    A = n(757),
                    k = n(758),
                    S = n(761),
                    N = n(39);

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

                function j(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? I(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var D = d.a.useSelect,
                    w = d.a.useInViewSelect,
                    P = d.a.useDispatch;
                t.a = Object(O.a)({
                    moduleName: "analytics"
                })((function DashboardAllTrafficWidget(t) {
                    var n = t.Widget,
                        a = t.WidgetReportZero,
                        i = t.WidgetReportError,
                        u = Object(N.a)("zeroDataStates"),
                        d = w((function(e) {
                            return e(g.f).isGatheringData()
                        })),
                        O = Object(s.useState)(!0),
                        I = o()(O, 2),
                        C = I[0],
                        R = I[1],
                        x = Object(s.useState)(""),
                        Z = o()(x, 2),
                        M = Z[0],
                        G = Z[1],
                        L = D((function(e) {
                            return e(f.a).getDateRange()
                        })),
                        U = D((function(e) {
                            return e(p.b).getValue(g.s) || "ga:channelGrouping"
                        })),
                        F = D((function(e) {
                            return e(p.b).getValue(g.t)
                        })),
                        B = D((function(e) {
                            return e(m.c).getCurrentEntityURL()
                        })),
                        W = D((function(e) {
                            return e(f.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: g.b
                            })
                        })),
                        H = W.startDate,
                        z = W.endDate,
                        V = W.compareStartDate,
                        q = W.compareEndDate,
                        K = {
                            startDate: H,
                            endDate: z,
                            metrics: [{
                                expression: "ga:users"
                            }]
                        },
                        Y = j(j({}, K), {}, {
                            compareStartDate: V,
                            compareEndDate: q,
                            dimensions: [U],
                            orderby: {
                                fieldName: "ga:users",
                                sortOrder: "DESCENDING"
                            },
                            limit: 6
                        }),
                        $ = j(j({}, K), {}, {
                            dimensions: ["ga:date"]
                        }),
                        J = j(j({}, K), {}, {
                            compareStartDate: V,
                            compareEndDate: q
                        });
                    B && (Y.url = B, $.url = B, J.url = B), U && F && ($.dimensionFilters = r()({}, U, F), J.dimensionFilters = r()({}, U, F));
                    var X, Q = D((function(e) {
                            return e(g.f).hasFinishedResolution("getReport", [Y])
                        })),
                        ee = D((function(e) {
                            return e(g.f).getErrorForSelector("getReport", [Y])
                        })),
                        te = w((function(e) {
                            return e(g.f).getReport(Y)
                        })),
                        ne = D((function(e) {
                            return e(g.f).hasFinishedResolution("getReport", [$])
                        })),
                        ae = D((function(e) {
                            return e(g.f).getErrorForSelector("getReport", [$])
                        })),
                        re = w((function(e) {
                            return e(g.f).getReport($)
                        })),
                        ie = D((function(e) {
                            return e(g.f).hasFinishedResolution("getReport", [J])
                        })),
                        oe = D((function(e) {
                            return e(g.f).getErrorForSelector("getReport", [J])
                        })),
                        ce = w((function(e) {
                            return e(g.f).getReport(J)
                        }));
                    switch (U) {
                        case "ga:country":
                            X = "visitors-geo";
                            break;
                        case "ga:deviceCategory":
                            X = "visitors-mobile-overview";
                            break;
                        case "ga:channelGrouping":
                        default:
                            X = "trafficsources-overview"
                    }
                    var se = Object(b.a)({
                        startDate: H,
                        endDate: z,
                        compareStartDate: V,
                        compareEndDate: q
                    });
                    Object(l.a)(B) && (se["explorer-table.plotKeys"] = "[]", se["_r.drilldown"] = "analytics.pagePath:".concat(Object(h.m)(B)));
                    var le = D((function(e) {
                        return e(g.f).getServiceReportURL(X, se)
                    }));
                    Object(s.useEffect)((function() {
                        L !== M ? (R(!0), G(L)) : Q && ie && ne && R(!1)
                    }), [Q, ie, ne, L, M]);
                    var ue = P(p.b).setValue;
                    if (Object(s.useEffect)((function() {
                            C && Q && ie && ne && ue(g.q, !0)
                        }), [C, Q, ie, ne, ue]), ee) return e.createElement(n, null, e.createElement(i, {
                        moduleSlug: "analytics",
                        error: ee
                    }));
                    var de = Object(v.l)(te);
                    if (!u && d && de) return e.createElement(n, null, e.createElement(a, {
                        moduleSlug: "analytics"
                    }));
                    var ge = !u && de;
                    return e.createElement(n, {
                        className: "googlesitekit-widget--footer-v2 googlesitekit-widget__analytics--all-traffic",
                        Footer: function Footer() {
                            return e.createElement(T.a, {
                                className: "googlesitekit-data-block__source",
                                name: Object(c._x)("Analytics", "Service name", "google-site-kit"),
                                href: le,
                                external: !0
                            })
                        },
                        noPadding: !0
                    }, e.createElement(y.b, null, e.createElement(y.c, null, e.createElement(y.a, {
                        className: "googlesitekit-widget--analyticsAllTraffic__totals",
                        lgSize: 7,
                        mdSize: 8
                    }, e.createElement(E.a, {
                        loaded: ie && !C,
                        report: ce,
                        error: oe,
                        dimensionValue: F,
                        gatheringData: d
                    }), e.createElement(_.a, {
                        loaded: ne && !C,
                        error: ae,
                        report: re,
                        gatheringData: d
                    })), e.createElement(y.a, {
                        className: "googlesitekit-widget--analyticsAllTraffic__dimensions",
                        lgSize: 5,
                        mdSize: 8
                    }, e.createElement(A.a, {
                        loaded: !C,
                        dimensionName: U,
                        gatheringData: d,
                        isZeroData: de
                    }), !ge && e.createElement(k.a, {
                        dimensionName: U,
                        dimensionValue: F,
                        gatheringData: d,
                        loaded: Q && !C,
                        report: te
                    }), ge && e.createElement(S.a, null)))))
                }))
            }).call(this, n(3))
        },
        61: function(e, t, n) {
            "use strict";
            n.d(t, "n", (function() {
                return _
            })), n.d(t, "l", (function() {
                return A.a
            })), n.d(t, "d", (function() {
                return y
            })), n.d(t, "e", (function() {
                return v
            })), n.d(t, "j", (function() {
                return b
            })), n.d(t, "k", (function() {
                return h
            })), n.d(t, "i", (function() {
                return O
            })), n.d(t, "h", (function() {
                return T
            })), n.d(t, "g", (function() {
                return y
            })), n.d(t, "f", (function() {
                return E
            })), n.d(t, "c", (function() {
                return k
            })), n.d(t, "m", (function() {
                return j
            })), n.d(t, "b", (function() {
                return D
            })), n.d(t, "a", (function() {
                return P
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
                g = n(140),
                m = n(12),
                f = n.n(m),
                p = n(10),
                y = function(e) {
                    return (parseInt(e, 10) || 0) > 0
                };

            function v(e) {
                return e === p.a || y(e)
            }

            function b(e) {
                return "string" == typeof e && /^UA-\d+-\d+$/.test(e)
            }

            function h(e) {
                return e === p.h || b(e)
            }

            function O(e) {
                return e === p.g || y(e)
            }

            function T(e) {
                return "string" == typeof e && e.trim().length > 0
            }

            function E(e) {
                return "string" == typeof e && /^AW-[0-9]+$/.test(e)
            }

            function _(e) {
                if (!b(e)) return !1;
                var t = e.match(/^UA-(\d+)-(\d+)/),
                    n = f()(t, 3);
                return {
                    accountID: n[1],
                    propertyID: e,
                    number: n[2]
                }
            }
            var A = n(190);

            function k(e, t) {
                for (var n = 1; n < e.length; n++) {
                    var a, r;
                    if (null === (a = e[n]) || void 0 === a || null === (r = a[t]) || void 0 === r ? void 0 : r[0]) return "HH:mm:ss"
                }
                return "mm:ss"
            }
            var S = n(50);

            function N(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return I(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
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

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function j(e, t) {
                var n, a = (Array.isArray(t) ? t : [t]).map(S.d),
                    r = N(e);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var i = n.value,
                            o = i.websiteUrl;
                        if (o) {
                            var c, s = N(a);
                            try {
                                for (s.s(); !(c = s.n()).done;) {
                                    if (c.value === Object(S.d)(o)) return i
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

            function D(e) {
                var t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = a.keyColumnIndex,
                    i = void 0 === r ? 0 : r,
                    o = a.maxSlices,
                    c = a.withOthers,
                    l = void 0 !== c && c,
                    u = a.tooltipCallback,
                    d = (null == e ? void 0 : e[0]) || {},
                    g = d.data,
                    m = void 0 === g ? {} : g,
                    f = m.rows,
                    p = void 0 === f ? [] : f,
                    y = m.totals,
                    v = void 0 === y ? [] : y,
                    b = "function" == typeof u,
                    h = ["Source", "Percent"];
                b && h.push({
                    type: "string",
                    role: "tooltip",
                    p: {
                        html: !0
                    }
                });
                var O = (null == v || null === (t = v[0]) || void 0 === t || null === (n = t.values) || void 0 === n ? void 0 : n[i]) || 0,
                    T = [h],
                    E = l,
                    _ = p.length,
                    A = 1;
                o > 0 ? (E = l && p.length > o, _ = Math.min(p.length, E ? o - 1 : o)) : (E = !1, _ = p.length);
                for (var k = 0; k < _; k++) {
                    var S = p[k],
                        N = S.metrics[0].values[i],
                        I = O > 0 ? N / O : 0;
                    A -= I;
                    var j = [S.dimensions[0], I];
                    b && j.push(u(S, j)), T.push(j)
                }
                if (E && A > 0) {
                    var D = [Object(s.__)("Others", "google-site-kit"), A];
                    b && D.push(u(null, D)), T.push(D)
                }
                return T
            }

            function w(e, t, n) {
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

            function P(e, t, n) {
                var a, o, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    m = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
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
                var y = r()(e[0].data.rows),
                    v = y.length;
                if (2 * n > v) {
                    for (var b = new Date, h = 0; n > h; h++) {
                        var O = (b.getMonth() + 1).toString(),
                            T = b.getDate().toString(),
                            E = b.getFullYear().toString() + (2 > O.length ? "0" : "") + O + (2 > T.length ? "0" : "") + T;
                        if (h > v) {
                            var _ = {
                                dimensions: [E],
                                metrics: [{
                                    values: [0, 0, 0, 0, 0]
                                }]
                            };
                            y.unshift(_)
                        }
                        b.setDate(b.getDate() - 1)
                    }
                    y.push([0, 0])
                }
                var A = f[t] === Object(s.__)("Session Duration", "google-site-kit"),
                    k = A ? "timeofday" : "number",
                    S = [
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
                            label: f[t]
                        }, {
                            type: k,
                            label: Object(s.__)("Previous period", "google-site-kit")
                        }]
                    ],
                    N = Object(g.a)(y, {
                        dateRangeLength: n
                    }),
                    I = N.compareRange,
                    j = N.currentRange,
                    D = w(j, u, t),
                    P = w(I, m, t),
                    C = Object(l.a)(),
                    R = {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    };
                return Object(i.each)(D, (function(e, n) {
                    if (e[0] && e[1] && P[n]) {
                        var a = parseFloat(P[n][1]),
                            r = Object(d.b)(e[1], a),
                            i = Object(d.h)(r),
                            o = Object(s.sprintf)(
                                /* translators: 1: date for user stats, 2: previous date for user stats comparison */
                                Object(s._x)("%1$s vs %2$s", "Date range for chart tooltip", "google-site-kit"), e[0].toLocaleDateString(C, R), P[n][0].toLocaleDateString(C, R)),
                            l = Object(s.sprintf)(
                                /* translators: 1: selected stat label, 2: numeric value of selected stat, 3: up or down arrow , 4: different change in percentage */
                                Object(s._x)("%1$s: <strong>%2$s</strong> <em>%3$s %4$s</em>", "Stat information for chart tooltip", "google-site-kit"), f[t], p[t](e[1]), i, Object(d.r)(Math.abs(r), "%"));
                        S.push([e[0], '<div class="'.concat(c()("googlesitekit-visualization-tooltip", {
                            "googlesitekit-visualization-tooltip--up": r > 0,
                            "googlesitekit-visualization-tooltip--down": r < 0
                        }), '">\n\t\t\t\t<p>').concat(o, "</p>\n\t\t\t\t<p>").concat(l, "</p>\n\t\t\t</div>"), A ? Object(d.d)(e[1]) : e[1], A ? Object(d.d)(P[n][1]) : P[n][1]])
                    }
                })), S
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
        674: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupMain
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(548),
                    l = n(520),
                    u = n(55),
                    d = n(10),
                    g = n(15),
                    m = n(38),
                    f = n(25),
                    p = n(549),
                    y = n(92),
                    v = c.a.useSelect;

                function SetupMain(t) {
                    var n = t.finishSetup,
                        a = v((function(e) {
                            return e(d.f).getAccounts()
                        })),
                        r = v((function(e) {
                            return e(d.f).getAccountID()
                        })),
                        o = v((function(e) {
                            return e(d.f).hasExistingTag()
                        })),
                        c = v((function(e) {
                            return e(d.f).hasExistingTagPermission()
                        })),
                        b = v((function(e) {
                            return e(d.f).isDoingSubmitChanges()
                        })),
                        h = v((function(e) {
                            return e(d.f).hasFinishedResolution("getAccounts")
                        })),
                        O = v((function(e) {
                            return e(g.c).isUsingProxy()
                        })),
                        T = v((function(e) {
                            return e(m.a).isNavigating()
                        })),
                        E = v((function(e) {
                            return e(d.f).getSetupFlowMode()
                        })),
                        _ = v((function(e) {
                            var t = e(f.g).getSingleAnalyticsPropertyID();
                            return {
                                hasGTMAnalyticsPropertyID: !!t,
                                hasGTMAnalyticsPropertyIDPermission: !!t && e(d.f).hasTagPermission(t)
                            }
                        })),
                        A = _.hasGTMAnalyticsPropertyID,
                        k = _.hasGTMAnalyticsPropertyIDPermission;
                    Object(p.a)();
                    var S, N = d.a === r;
                    return S = b || !h || T || void 0 === E ? e.createElement(u.a, null) : o && !1 === c ? e.createElement(y.i, null) : A && !k ? e.createElement(y.g, null) : N || Array.isArray(a) && !a.length ? O ? e.createElement(y.a, null) : e.createElement(y.b, null) : e.createElement(l.a, {
                        finishSetup: n
                    }), e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--analytics"
                    }, e.createElement("div", {
                        className: "googlesitekit-setup-module__logo"
                    }, e.createElement(s.a, {
                        width: "33",
                        height: "33"
                    })), e.createElement("h2", {
                        className: "googlesitekit-heading-3 googlesitekit-setup-module__title"
                    }, Object(i._x)("Analytics", "Service name", "google-site-kit")), S)
                }
                SetupMain.propTypes = {
                    finishSetup: r.a.func
                }, SetupMain.defaultProps = {
                    finishSetup: function() {}
                }
            }).call(this, n(3))
        },
        675: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsEdit
                }));
                var a = n(4),
                    r = n.n(a),
                    i = n(10),
                    o = n(15),
                    c = n(25),
                    s = n(549),
                    l = n(525),
                    u = n(55),
                    d = n(92),
                    g = r.a.useSelect;

                function SettingsEdit() {
                    var t = g((function(e) {
                            return e(i.f).getAccounts()
                        })) || [],
                        n = g((function(e) {
                            return e(i.f).getAccountID()
                        })),
                        a = g((function(e) {
                            return e(i.f).hasExistingTag()
                        })),
                        r = g((function(e) {
                            return e(i.f).hasExistingTagPermission()
                        })),
                        m = g((function(e) {
                            return e(i.f).isDoingSubmitChanges()
                        })),
                        f = g((function(e) {
                            return e(i.f).hasFinishedResolution("getAccounts")
                        })),
                        p = g((function(e) {
                            return e(o.c).isUsingProxy()
                        })),
                        y = g((function(e) {
                            var t = e(c.g).getSingleAnalyticsPropertyID();
                            return {
                                hasGTMAnalyticsPropertyID: !!t,
                                hasGTMAnalyticsPropertyIDPermission: !!t && e(i.f).hasTagPermission(t)
                            }
                        })),
                        v = y.hasGTMAnalyticsPropertyID,
                        b = y.hasGTMAnalyticsPropertyIDPermission;
                    Object(s.a)();
                    var h, O = i.a === n;
                    return h = m || !f ? e.createElement(u.a, null) : a && !1 === r ? e.createElement(d.i, null) : a || !v || b ? !t.length || O ? p ? e.createElement(d.a, null) : e.createElement(d.b, null) : e.createElement(l.a, null) : e.createElement(d.g, null), e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--analytics"
                    }, h)
                }
            }).call(this, n(3))
        },
        676: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return UseSnippetSwitch
                }));
                var a = n(2),
                    r = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(41),
                    s = n(11),
                    l = n(129),
                    u = n(20),
                    d = o.a.useSelect,
                    g = o.a.useDispatch;

                function UseSnippetSwitch() {
                    var t = Object(a.useContext)(u.b),
                        n = d((function(e) {
                            return e(c.b).getUseSnippet()
                        })),
                        i = g(c.b).setUseSnippet,
                        o = Object(a.useCallback)((function() {
                            var e = !n;
                            i(e), Object(s.w)("".concat(t, "_analytics"), e ? "enable_tag" : "disable_tag", "ga4")
                        }), [n, i, t]);
                    return void 0 === n ? null : e.createElement("div", {
                        className: "googlesitekit-analytics-usesnippet"
                    }, e.createElement(l.a, {
                        label: Object(r.__)("Place Google Analytics 4 code", "google-site-kit"),
                        checked: n,
                        onClick: o,
                        hideLabel: !1
                    }), e.createElement("p", null, n && e.createElement("span", null, Object(r.__)("Site Kit will add the GA4 code automatically.", "google-site-kit")), !n && e.createElement("span", null, Object(r.__)("Site Kit will not add the GA4 code to your site.", "google-site-kit"))))
                }
            }).call(this, n(3))
        },
        677: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsView
                }));
                var a = n(464),
                    r = n.n(a),
                    i = n(1),
                    o = n(130),
                    c = n(2),
                    s = n(4),
                    l = n.n(s),
                    u = n(199),
                    d = n(15),
                    g = n(10),
                    m = n(41),
                    f = n(300),
                    p = n(92),
                    y = n(112),
                    v = n(21),
                    b = n(56),
                    h = n(465);

                function O() {
                    var e = r()(["/a", "p", "/admin/streams/table/", ""]);
                    return O = function() {
                        return e
                    }, e
                }

                function T() {
                    var e = r()(["/a", "w", "p", "/admin/view/settings"]);
                    return T = function() {
                        return e
                    }, e
                }
                var E = l.a.useSelect;

                function SettingsView() {
                    var t = E((function(e) {
                            return e(m.b).getPropertyID()
                        })),
                        n = E((function(e) {
                            return e(m.b).getMeasurementID()
                        })),
                        a = E((function(e) {
                            return e(m.b).getWebDataStreamID()
                        })),
                        r = E((function(e) {
                            return e(m.b).getUseSnippet()
                        })),
                        s = E((function(e) {
                            return e(g.f).getAccountID()
                        })),
                        l = E((function(e) {
                            return e(g.f).getPropertyID()
                        })),
                        _ = E((function(e) {
                            return e(g.f).getInternalWebPropertyID()
                        })),
                        A = E((function(e) {
                            return e(g.f).getProfileID()
                        })),
                        k = E((function(e) {
                            return e(g.f).getAdsConversionID()
                        })),
                        S = E((function(e) {
                            return e(g.f).getUseSnippet()
                        })),
                        N = E((function(e) {
                            return e(g.f).getCanUseSnippet()
                        })),
                        I = E((function(e) {
                            return e(g.f).getAnonymizeIP()
                        })),
                        j = E((function(e) {
                            return e(g.f).getTrackingDisabled()
                        })) || [],
                        D = E((function(e) {
                            return e(d.c).getAMPMode()
                        })),
                        w = E((function(e) {
                            return e(g.f).hasExistingTag()
                        })),
                        P = E((function(e) {
                            return e(g.f).hasExistingTagPermission()
                        })),
                        C = E((function(e) {
                            return e(g.f).getServiceURL({
                                path: Object(h.a)(T(), s, _, A)
                            })
                        })),
                        R = E((function(e) {
                            return e(g.f).getServiceURL({
                                path: Object(h.a)(O(), s, t, a)
                            })
                        }));
                    return e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--analytics"
                    }, (!w || P) && e.createElement(y.a, {
                        moduleSlug: "analytics",
                        storeName: g.f
                    }), w && !P && void 0 !== P && e.createElement(p.i, null), w && P && void 0 !== P && e.createElement(p.j, null), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(i.__)("Account", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(u.a, {
                        value: s
                    }))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(i.__)("Property", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(u.a, {
                        value: l
                    }))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(i.__)("View", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(u.a, {
                        value: A
                    }))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item googlesitekit-settings-module__meta-item--data-only"
                    }, e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data googlesitekit-settings-module__meta-item-data--tiny"
                    }, e.createElement(v.a, {
                        href: C,
                        external: !0,
                        inherit: !0
                    }, Object(o.a)(Object(i.__)("Edit <VisuallyHidden>Universal Analytics property view </VisuallyHidden>in Analytics", "google-site-kit"), {
                        VisuallyHidden: e.createElement(b.a, null)
                    }))))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(i.__)("Universal Analytics Code Snippet", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, !1 === N && e.createElement("span", null, Object(i.__)("The code is controlled by the Tag Manager module.", "google-site-kit")), N && S && e.createElement("span", null, Object(i.__)("Snippet is inserted", "google-site-kit")), N && !S && !w && e.createElement("span", null, Object(i.__)("Snippet is not inserted", "google-site-kit")), N && !S && w && e.createElement("span", null, Object(i.__)("Inserted by another plugin or theme", "google-site-kit"))))), t && t !== m.c && e.createElement(c.Fragment, null, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(i.__)("Google Analytics 4 Property", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(u.a, {
                        value: t
                    }))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(o.a)(Object(i.__)("<VisuallyHidden>Google Analytics 4</VisuallyHidden> Measurement ID", "google-site-kit"), {
                        VisuallyHidden: e.createElement(b.a, null)
                    })), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(u.a, {
                        value: n
                    }))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item googlesitekit-settings-module__meta-item--data-only"
                    }, e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data googlesitekit-settings-module__meta-item-data--tiny"
                    }, e.createElement(v.a, {
                        href: R,
                        external: !0,
                        inherit: !0
                    }, Object(o.a)(Object(i.__)("Edit <VisuallyHidden>Google Analytics 4 web data stream </VisuallyHidden>in Analytics", "google-site-kit"), {
                        VisuallyHidden: e.createElement(b.a, null)
                    }))))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(i.__)("Google Analytics 4 Code Snippet", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, r && e.createElement("span", null, Object(i.__)("Snippet is inserted", "google-site-kit")), !r && e.createElement("span", null, Object(i.__)("Snippet is not inserted", "google-site-kit")))))), S && "primary" !== D && e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(i.__)("IP Address Anonymization", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, I && e.createElement("span", null, Object(i.__)("IP addresses are being anonymized", "google-site-kit")), !I && e.createElement("span", null, Object(i.__)("IP addresses are not being anonymized", "google-site-kit"))))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(i.__)("Excluded from Analytics", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, !!j.length && j.map((function(e) {
                        return f.d[e]
                    })).join(Object(i._x)(", ", "list separator", "google-site-kit")), !j.length && Object(i.__)("Analytics is currently enabled for all visitors.", "google-site-kit")))), N && S && e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(i.__)("Ads Conversion ID", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, k ? e.createElement(u.a, {
                        value: k
                    }) : Object(i.__)("None", "google-site-kit")))))
                }
            }).call(this, n(3))
        },
        678: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ModuleOverviewWidget
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(12),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(2),
                    u = n(4),
                    d = n.n(u),
                    g = n(13),
                    m = n(10),
                    f = n(61),
                    p = n(82),
                    y = n(468),
                    v = n(767),
                    b = n(768),
                    h = n(39);

                function O(e, t) {
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
                        t % 2 ? O(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var E = d.a.useSelect,
                    _ = d.a.useInViewSelect;

                function ModuleOverviewWidget(t) {
                    var n = t.Widget,
                        a = t.WidgetReportError,
                        r = t.WidgetReportZero,
                        i = Object(h.a)("zeroDataStates"),
                        c = Object(l.useState)(0),
                        s = o()(c, 2),
                        u = s[0],
                        d = s[1],
                        O = _((function(e) {
                            return e(m.f).isGatheringData()
                        })),
                        A = E((function(e) {
                            return e(g.a).getDateRangeDates({
                                compare: !0,
                                offsetDays: m.b
                            })
                        })),
                        k = T(T({}, A), {}, {
                            metrics: ["ga:users", "ga:sessions", "ga:bounceRate", "ga:avgSessionDuration"]
                        }),
                        S = T(T({}, A), {}, {
                            dimensions: "ga:date",
                            metrics: ["ga:users", "ga:sessions", "ga:bounceRate", "ga:avgSessionDuration"]
                        }),
                        N = E((function(e) {
                            return e(m.f).hasFinishedResolution("getReport", [k])
                        })),
                        I = _((function(e) {
                            return e(m.f).getReport(k)
                        })),
                        j = E((function(e) {
                            return e(m.f).getErrorForSelector("getReport", [k])
                        })),
                        D = E((function(e) {
                            return e(m.f).hasFinishedResolution("getReport", [S])
                        })),
                        w = _((function(e) {
                            return e(m.f).getReport(S)
                        })),
                        P = E((function(e) {
                            return e(m.f).getErrorForSelector("getReport", [S])
                        }));
                    return N && D && void 0 !== O ? j || P ? e.createElement(n, {
                        Header: y.a
                    }, e.createElement(a, {
                        moduleSlug: "analytics",
                        error: j || P
                    })) : !i && O && Object(f.l)(I) ? e.createElement(n, {
                        Header: y.a
                    }, e.createElement(r, {
                        moduleSlug: "analytics"
                    })) : e.createElement(n, {
                        Header: y.a,
                        noPadding: !0
                    }, e.createElement(v.a, {
                        report: I,
                        selectedStat: u,
                        handleStatSelection: d
                    }), e.createElement(b.a, {
                        selectedStat: u,
                        report: w,
                        gatheringData: O
                    })) : e.createElement(n, {
                        Header: y.a,
                        noPadding: !0
                    }, e.createElement(p.a, {
                        width: "100%",
                        height: "190px",
                        padding: !0
                    }), e.createElement(p.a, {
                        width: "100%",
                        height: "270px",
                        padding: !0
                    }))
                }
                ModuleOverviewWidget.propTypes = {
                    Widget: s.a.elementType.isRequired,
                    WidgetReportError: s.a.elementType.isRequired,
                    WidgetReportZero: s.a.elementType.isRequired
                }
            }).call(this, n(3))
        },
        679: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(12),
                    r = n.n(a),
                    i = n(6),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(284),
                    u = n.n(l),
                    d = n(1),
                    g = n(4),
                    m = n.n(g),
                    f = n(13),
                    p = n(10),
                    y = n(11),
                    v = n(137),
                    b = n(149),
                    h = n(61),
                    O = n(278),
                    T = n(392),
                    E = n(245),
                    _ = n(201),
                    A = n(92),
                    k = n(469),
                    S = n(470),
                    N = n(39);

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

                function j(e) {
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
                var D = m.a.useSelect,
                    w = m.a.useInViewSelect;

                function ModulePopularPagesWidget(t) {
                    var n, a, i, o = t.Widget,
                        c = t.WidgetReportError,
                        s = t.WidgetReportZero,
                        l = w((function(e) {
                            return e(p.f).isGatheringData()
                        })),
                        g = D((function(e) {
                            return e(f.a).getDateRangeDates({
                                offsetDays: p.b
                            })
                        })),
                        m = Object(N.a)("zeroDataStates"),
                        v = Object(N.a)("unifiedDashboard"),
                        I = j(j({}, g), {}, {
                            dimensions: ["ga:pagePath"],
                            metrics: [{
                                expression: "ga:pageviews",
                                alias: "Pageviews"
                            }, {
                                expression: "ga:uniquePageviews",
                                alias: "Unique Pageviews"
                            }, {
                                expression: "ga:bounceRate",
                                alias: "Bounce rate"
                            }, {
                                expression: "ga:avgSessionDuration",
                                alias: "Session Duration"
                            }],
                            orderby: [{
                                fieldName: "ga:pageviews",
                                sortOrder: "DESCENDING"
                            }],
                            limit: 10
                        }),
                        P = D((function(e) {
                            return e(p.f).getErrorForSelector("getReport", [I])
                        })),
                        C = w((function(e) {
                            return e(p.f).getReport(I)
                        })),
                        R = w((function(e) {
                            return P ? void 0 : e(p.f).getPageTitles(C, I)
                        }));
                    if (!D((function(e) {
                            var t = e(p.f).hasFinishedResolution("getReport", [I]);
                            return void 0 !== P || t && void 0 !== R
                        })) || void 0 === l) return e.createElement(o, {
                        Header: k.a,
                        Footer: S.a,
                        noPadding: !0
                    }, e.createElement(_.a, {
                        padding: !0
                    }));
                    if (P) return e.createElement(o, {
                        Header: k.a,
                        Footer: S.a
                    }, e.createElement(c, {
                        moduleSlug: "analytics",
                        error: P
                    }));
                    if (!m && l && Object(h.l)(C)) return e.createElement(o, {
                        Header: k.a,
                        Footer: S.a
                    }, e.createElement(s, {
                        moduleSlug: "analytics"
                    }));
                    var x = [{
                        title: Object(d.__)("Title", "google-site-kit"),
                        description: Object(d.__)("Page Title", "google-site-kit"),
                        primary: !0,
                        Component: function Component(t) {
                            var n = t.row,
                                a = r()(n.dimensions, 2),
                                i = a[0],
                                o = a[1],
                                c = D((function(e) {
                                    return e(p.f).getServiceReportURL("content-drilldown", j({
                                        "explorer-table.plotKeys": "[]",
                                        "_r.drilldown": "analytics.pagePath:".concat(o)
                                    }, Object(b.a)(g)))
                                }));
                            return e.createElement(T.a, {
                                title: i,
                                path: o,
                                serviceURL: c
                            })
                        }
                    }, {
                        title: Object(d.__)("Pageviews", "google-site-kit"),
                        description: Object(d.__)("Pageviews", "google-site-kit"),
                        field: "metrics.0.values.0",
                        Component: function Component(t) {
                            var n = t.fieldValue;
                            return e.createElement("span", null, Object(y.r)(n, {
                                style: "decimal"
                            }))
                        }
                    }, {
                        title: Object(d.__)("Unique Pageviews", "google-site-kit"),
                        description: Object(d.__)("Unique Pageviews", "google-site-kit"),
                        hideOnMobile: !0,
                        field: "metrics.0.values.1",
                        Component: function Component(t) {
                            var n = t.fieldValue;
                            return e.createElement("span", null, Object(y.r)(n, {
                                style: "decimal"
                            }))
                        }
                    }, {
                        title: Object(d.__)("Bounce Rate", "google-site-kit"),
                        description: Object(d.__)("Bounce Rate", "google-site-kit"),
                        hideOnMobile: !0,
                        field: "metrics.0.values.2",
                        Component: function Component(t) {
                            var n = t.fieldValue;
                            return e.createElement("span", null, Object(y.r)(Number(n) / 100, "%"))
                        }
                    }];
                    v && x.push({
                        title: Object(d.__)("Session Duration", "google-site-kit"),
                        description: Object(d.__)("Session Duration", "google-site-kit"),
                        hideOnMobile: !0,
                        field: "metrics.0.values.3",
                        Component: function Component(t) {
                            var n = t.fieldValue;
                            return e.createElement("span", null, Object(y.r)(n, "s"))
                        }
                    });
                    var Z = (null == C || null === (n = C[0]) || void 0 === n || null === (a = n.data) || void 0 === a || null === (i = a.rows) || void 0 === i ? void 0 : i.length) ? u()(C[0].data.rows) : [];
                    return Z.forEach((function(e) {
                        var t = e.dimensions[0];
                        e.dimensions.unshift(R[t])
                    })), e.createElement(o, {
                        Header: k.a,
                        Footer: S.a,
                        noPadding: !0
                    }, e.createElement(O.a, null, e.createElement(E.a, {
                        rows: Z,
                        columns: x,
                        zeroState: A.t,
                        gatheringData: l
                    })))
                }
                ModulePopularPagesWidget.propTypes = {
                    Widget: s.a.elementType.isRequired,
                    WidgetReportError: s.a.elementType.isRequired,
                    WidgetReportZero: s.a.elementType.isRequired
                }, t.a = Object(v.a)({
                    moduleName: "analytics"
                })(ModulePopularPagesWidget)
            }).call(this, n(3))
        },
        680: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ModuleAcquisitionChannelsWidget
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i),
                    c = n(4),
                    s = n.n(c),
                    l = n(13),
                    u = n(10),
                    d = n(61),
                    g = n(7),
                    m = n(82),
                    f = n(201),
                    p = n(471),
                    y = n(769),
                    v = n(771),
                    b = n(472),
                    h = n(39);

                function O(e, t) {
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
                        t % 2 ? O(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var E = s.a.useSelect,
                    _ = s.a.useInViewSelect;

                function ModuleAcquisitionChannelsWidget(t) {
                    var n = t.Widget,
                        a = t.WidgetReportZero,
                        r = t.WidgetReportError,
                        i = Object(h.a)("zeroDataStates"),
                        o = _((function(e) {
                            return e(u.f).isGatheringData()
                        })),
                        c = T(T({}, E((function(e) {
                            return e(l.a).getDateRangeDates({
                                offsetDays: u.b
                            })
                        }))), {}, {
                            dimensions: "ga:channelGrouping",
                            metrics: [{
                                expression: "ga:sessions",
                                alias: "Sessions"
                            }, {
                                expression: "ga:users",
                                alias: "Users"
                            }, {
                                expression: "ga:newUsers",
                                alias: "New Users"
                            }],
                            orderby: [{
                                fieldName: "ga:users",
                                sortOrder: "DESCENDING"
                            }],
                            limit: 10
                        }),
                        s = E((function(e) {
                            return e(u.f).getErrorForSelector("getReport", [c])
                        })),
                        O = E((function(e) {
                            return e(u.f).hasFinishedResolution("getReport", [c])
                        })),
                        A = _((function(e) {
                            return e(u.f).getReport(c)
                        }));
                    if (!O || void 0 === o) return e.createElement(n, {
                        Header: p.a,
                        Footer: b.a
                    }, e.createElement(g.b, null, e.createElement(g.l, null, e.createElement(g.a, {
                        lgSize: 4,
                        mdSize: 4,
                        smSize: 4
                    }, e.createElement(m.a, {
                        width: "282px",
                        height: "282px",
                        shape: "circular"
                    })), e.createElement(g.a, {
                        lgSize: 8,
                        mdSize: 4,
                        smSize: 4
                    }, e.createElement(f.a, {
                        rows: 4,
                        rowHeight: 50
                    })))));
                    if (s) return e.createElement(n, {
                        Header: p.a,
                        Footer: b.a
                    }, e.createElement(r, {
                        moduleSlug: "analytics",
                        error: s
                    }));
                    var k = Object(d.l)(A);
                    return !i && o && k ? e.createElement(n, {
                        Header: p.a,
                        Footer: b.a
                    }, e.createElement(a, {
                        moduleSlug: "analytics"
                    })) : e.createElement(n, {
                        Header: p.a,
                        Footer: b.a,
                        noPadding: !0
                    }, e.createElement(g.b, null, e.createElement(g.l, null, !k && e.createElement(g.a, {
                        lgSize: 4,
                        mdSize: 4,
                        smSize: 4
                    }, e.createElement(v.a, {
                        report: A,
                        gatheringData: o
                    })), e.createElement(g.a, {
                        lgSize: k ? 12 : 8,
                        mdSize: 8,
                        smSize: 4
                    }, e.createElement(y.a, {
                        report: A,
                        gatheringData: o
                    })))))
                }
                ModuleAcquisitionChannelsWidget.propTypes = {
                    Widget: o.a.elementType.isRequired,
                    WidgetReportError: o.a.elementType.isRequired,
                    WidgetReportZero: o.a.elementType.isRequired
                }
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
            var g = n(240);
            n.d(t, "g", (function() {
                return g.a
            }));
            var m = n(93);
            n.d(t, "a", (function() {
                return m.a
            })), n.d(t, "b", (function() {
                return m.b
            })), n.d(t, "l", (function() {
                return m.c
            }))
        },
        72: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "c", (function() {
                    return T
                })), n.d(t, "d", (function() {
                    return _
                })), n.d(t, "b", (function() {
                    return A
                })), n.d(t, "a", (function() {
                    return k
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
                    g = n(67),
                    m = n.n(g),
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

                function y(e) {
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
                var v = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = b(e, t),
                            a = n.formatUnit,
                            r = n.formatDecimal;
                        try {
                            return a()
                        } catch (e) {
                            return r()
                        }
                    },
                    b = function(e) {
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
                                    o = y(y({
                                        unitDisplay: void 0 === i ? "short" : i
                                    }, u()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? _(r, y(y({}, o), {}, {
                                    unit: "second"
                                })) : Object(f.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(f._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), r ? _(r, y(y({}, o), {}, {
                                        unit: "second"
                                    })) : "", a ? _(a, y(y({}, o), {}, {
                                        unit: "minute"
                                    })) : "", n ? _(n, y(y({}, o), {}, {
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
                    O = function(e) {
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
                    T = function(e) {
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
                            } : Object(d.isPlainObject)(t) && (n = y({}, t))
                        }
                        var a = n,
                            r = a.style,
                            i = void 0 === r ? "metric" : r;
                        return "metric" === i ? O(e) : "duration" === i ? v(e, t) : _(e, n)
                    },
                    E = m()(console.warn),
                    _ = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            a = void 0 === n ? k() : n,
                            i = u()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(a, i).format(e)
                        } catch (t) {
                            E("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(a), ", ").concat(JSON.stringify(i), " ).format( ").concat(o()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, s = ["signDisplay", "compactDisplay"], l = {}, d = 0, g = Object.entries(i); d < g.length; d++) {
                            var m = r()(g[d], 2),
                                f = m[0],
                                p = m[1];
                            c[f] && p === c[f] || (s.includes(f) || (l[f] = p))
                        }
                        try {
                            return new Intl.NumberFormat(a, l).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(a).format(e)
                        }
                    },
                    A = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            a = void 0 === n ? k() : n,
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
                    k = function() {
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
                return N
            })), n.d(t, "b", (function() {
                return I
            })), n.d(t, "c", (function() {
                return j
            })), n.d(t, "d", (function() {
                return w
            })), n.d(t, "e", (function() {
                return P
            })), n.d(t, "g", (function() {
                return R
            })), n.d(t, "f", (function() {
                return x
            }));
            var a, r = n(5),
                i = n.n(r),
                o = n(23),
                c = n.n(o),
                s = n(6),
                l = n.n(s),
                u = n(9),
                d = n.n(u),
                g = n(207),
                m = n.n(g),
                f = n(67),
                p = n.n(f),
                y = n(104);

            function v(e, t) {
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
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        l()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var a = t.reduce((function(e, t) {
                            return b(b({}, e), t)
                        }), {}),
                        r = t.reduce((function(e, t) {
                            return [].concat(c()(e), c()(Object.keys(t)))
                        }), []),
                        i = D(r);
                    return d()(0 === i.length, "collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(i.join(", "), ". Check your data stores for duplicates.")), a
                },
                O = h,
                T = h,
                E = function() {
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
                A = h,
                k = h,
                S = function(e) {
                    return e
                },
                N = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var a = k.apply(void 0, c()(t.map((function(e) {
                        return e.initialState || {}
                    }))));
                    return {
                        initialState: a,
                        controls: T.apply(void 0, c()(t.map((function(e) {
                            return e.controls || {}
                        })))),
                        actions: O.apply(void 0, c()(t.map((function(e) {
                            return e.actions || {}
                        })))),
                        reducer: E.apply(void 0, [a].concat(c()(t.map((function(e) {
                            return e.reducer || S
                        }))))),
                        resolvers: _.apply(void 0, c()(t.map((function(e) {
                            return e.resolvers || {}
                        })))),
                        selectors: A.apply(void 0, c()(t.map((function(e) {
                            return e.selectors || {}
                        }))))
                    }
                },
                I = {
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
                j = (a = {}, l()(a, "GET_REGISTRY", Object(y.d)((function(e) {
                    return function() {
                        return e
                    }
                }))), l()(a, "AWAIT", (function(e) {
                    return e.payload.value
                })), a),
                D = function(e) {
                    for (var t = [], n = {}, a = 0; a < e.length; a++) {
                        var r = e[a];
                        n[r] = n[r] >= 1 ? n[r] + 1 : 1, n[r] > 1 && t.push(r)
                    }
                    return t
                },
                w = {
                    actions: I,
                    controls: j,
                    reducer: S
                },
                P = function(e) {
                    return function(t) {
                        return C(e(t))
                    }
                },
                C = p()((function(e) {
                    return m()(e, (function(e, t) {
                        return function() {
                            var n = e.apply(void 0, arguments);
                            return d()(void 0 !== n, "".concat(t, "(...) is not resolved")), n
                        }
                    }))
                }));

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.negate,
                    a = void 0 !== n && n,
                    r = Object(y.e)((function(t) {
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
                    i = Object(y.e)((function(t) {
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

            function x(e, t) {
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
                    g = n.n(d),
                    m = n(49),
                    f = n.n(m),
                    p = n(0),
                    y = n.n(p),
                    v = n(8),
                    b = n.n(v),
                    h = n(2),
                    O = n(1),
                    T = n(62),
                    E = n(96),
                    _ = n(65),
                    A = n(30),
                    k = n(11);

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
                        var n, a = f()(e);
                        if (t) {
                            var r = f()(this).constructor;
                            n = Reflect.construct(a, arguments, r)
                        } else n = a.apply(this, arguments);
                        return g()(this, n)
                    }
                }
                var N = function(t) {
                    u()(DataBlock, t);
                    var n = S(DataBlock);

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
                                g = t.source,
                                m = t.sparkline,
                                f = t.invertChangeColor,
                                p = t.gatheringData,
                                y = t.gatheringDataNoticeStyle,
                                v = "button" === s ? "button" : "",
                                S = m;
                            S && f && (S = Object(h.cloneElement)(m, {
                                invertChangeColor: f
                            }));
                            var N = o;
                            c && (N = "%" === c ? Object(k.r)(o, {
                                style: "percent",
                                signDisplay: "never",
                                maximumFractionDigits: 1
                            }) : Object(k.r)(o, c)), l && (N = Object(O.sprintf)(l, N));
                            var I = void 0 === r ? r : Object(k.r)(r, i || void 0),
                                j = Object(A.b)("zeroDataStates");
                            return e.createElement("div", {
                                className: b()("googlesitekit-data-block", n, "googlesitekit-data-block--".concat(s), {
                                    "googlesitekit-data-block--selected": u,
                                    "googlesitekit-data-block--is-gathering-data": p
                                }),
                                tabIndex: "button" !== s || p ? "-1" : "0",
                                role: d && v,
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
                            }, I)), !p && e.createElement(h.Fragment, null, S && e.createElement("div", {
                                className: "googlesitekit-data-block__sparkline"
                            }, S), e.createElement("div", {
                                className: "googlesitekit-data-block__change-source-wrapper"
                            }, e.createElement("div", {
                                className: b()("googlesitekit-data-block__change", {
                                    "googlesitekit-data-block__change--no-change": !o
                                })
                            }, e.createElement(h.Fragment, null, !!o && e.createElement("span", {
                                className: "googlesitekit-data-block__arrow"
                            }, e.createElement(T.a, {
                                direction: 0 < parseFloat(o) ? "up" : "down",
                                invertColor: f
                            })), e.createElement("span", {
                                className: "googlesitekit-data-block__value"
                            }, N))), g && e.createElement(E.a, {
                                className: "googlesitekit-data-block__source",
                                name: g.name,
                                href: g.link,
                                external: null == g ? void 0 : g.external
                            }))), p && j && e.createElement(_.b, {
                                style: y
                            }))
                        }
                    }]), DataBlock
                }(h.Component);
                N.propTypes = {
                    stat: y.a.number,
                    onClick: y.a.func,
                    className: y.a.string,
                    title: y.a.string,
                    datapoint: y.a.oneOfType([y.a.string, y.a.number]),
                    datapointUnit: y.a.string,
                    change: y.a.oneOfType([y.a.string, y.a.number]),
                    changeDataUnit: y.a.oneOfType([y.a.string, y.a.bool]),
                    context: y.a.string,
                    period: y.a.string,
                    selected: y.a.bool,
                    handleStatSelection: y.a.func,
                    invertChangeColor: y.a.bool,
                    gatheringData: y.a.bool,
                    gatheringDataNoticeStyle: y.a.oneOf(Object.values(_.a))
                }, N.defaultProps = {
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
                }, t.a = N
            }).call(this, n(3))
        },
        755: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return TotalUserCount
                }));
                var a = n(12),
                    r = n.n(a),
                    i = n(6),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(8),
                    u = n.n(l),
                    d = n(2),
                    g = n(212),
                    m = n(888),
                    f = n(1),
                    p = n(4),
                    y = n.n(p),
                    v = n(13),
                    b = n(11),
                    h = n(62),
                    O = n(82),
                    T = n(192),
                    E = n(43),
                    _ = n(10),
                    A = n(21),
                    k = n(65),
                    S = n(39),
                    N = y.a.useSelect,
                    I = y.a.useDispatch;

                function TotalUserCount(t) {
                    var n, a, i, c, s, l, p = t.loaded,
                        y = t.error,
                        j = t.report,
                        D = t.dimensionValue,
                        w = t.gatheringData,
                        P = Object(S.a)("zeroDataStates"),
                        C = N((function(e) {
                            return e(v.a).getDateRange()
                        })),
                        R = I(E.b).setValues;
                    if (!p) return e.createElement(O.a, {
                        className: "googlesitekit-widget--analyticsAllTraffic__totalcount--loading",
                        width: "220px",
                        height: "90px",
                        shape: "square"
                    });
                    if (y) return e.createElement(T.a, {
                        moduleSlug: "analytics",
                        error: y
                    });
                    var x = ((null == j || null === (n = j[0]) || void 0 === n ? void 0 : n.data) || {}).totals || [],
                        Z = r()(x, 2),
                        M = Z[0],
                        G = Z[1],
                        L = Object(b.a)(null == G || null === (a = G.values) || void 0 === a ? void 0 : a[0], null == M || null === (i = M.values) || void 0 === i ? void 0 : i[0]),
                        U = null,
                        F = null === (c = Object(b.g)()[C]) || void 0 === c ? void 0 : c.days;
                    return F && (U = Object(f.sprintf)(
                        /* translators: %s number of days */
                        Object(f.__)("compared to the previous %s days", "google-site-kit"), F)), e.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__totalcount googlesitekit-data-block"
                    }, e.createElement("h3", {
                        className: "googlesitekit-subheading-1 googlesitekit-data-block__title"
                    }, !D && e.createElement("span", null, Object(f.__)("All Users", "google-site-kit"), " "), D && e.createElement(d.Fragment, null, D && e.createElement(A.a, {
                        onClick: function() {
                            var e;
                            R((e = {}, o()(e, _.t, ""), o()(e, _.r, ""), e))
                        }
                    }, Object(f.__)("All Users", "google-site-kit")), !D && e.createElement("span", null, Object(f.__)("All Users", "google-site-kit")), e.createElement(g.a, {
                        icon: m.a,
                        size: "18",
                        fill: "currentColor"
                    }), e.createElement("span", null, D))), w && P && e.createElement(k.b, {
                        style: k.a.LARGE
                    }), !(w && P) && e.createElement(d.Fragment, null, !!(null == M || null === (s = M.values) || void 0 === s ? void 0 : s[0]) && e.createElement("div", {
                        className: "googlesitekit-data-block__datapoint"
                    }, Object(b.r)(null == M || null === (l = M.values) || void 0 === l ? void 0 : l[0])), e.createElement("div", {
                        className: "googlesitekit-data-block__change"
                    }, L && e.createElement("span", {
                        className: "googlesitekit-data-block__arrow"
                    }, e.createElement(h.a, {
                        direction: 0 <= L ? "up" : "down",
                        width: 9,
                        height: 9
                    })), e.createElement("span", {
                        className: u()("googlesitekit-data-block__value", {
                            "googlesitekit-data-block__value--up": 0 < L,
                            "googlesitekit-data-block__value--down": 0 > L
                        })
                    }, Object(b.r)(Math.abs(L), {
                        style: "percent",
                        maximumFractionDigits: 1
                    })), e.createElement("span", {
                        className: "googlesitekit-data-block__suffix"
                    }, U))))
                }
                TotalUserCount.propTypes = {
                    loaded: s.a.bool,
                    report: s.a.arrayOf(s.a.object),
                    dimensionValue: s.a.string,
                    gatheringData: s.a.bool
                }
            }).call(this, n(3))
        },
        756: function(e, t, n) {
            "use strict";
            (function(e, a) {
                n.d(t, "a", (function() {
                    return UserCountGraph
                }));
                var r = n(6),
                    i = n.n(r),
                    o = n(23),
                    c = n.n(o),
                    s = n(12),
                    l = n.n(s),
                    u = n(0),
                    d = n.n(u),
                    g = n(1),
                    m = n(2),
                    f = n(4),
                    p = n.n(f),
                    y = n(43),
                    v = n(13),
                    b = n(10),
                    h = n(202),
                    O = n(196),
                    T = n(192);

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
                var _ = p.a.useSelect;

                function UserCountGraph(t) {
                    var n, r, o, s, u, d, f, p, A, k, S, N, I, j, D = t.loaded,
                        w = t.error,
                        P = t.report,
                        C = t.gatheringData,
                        R = _((function(e) {
                            return e(v.a).getDateRangeDates({
                                offsetDays: b.b
                            })
                        })),
                        x = R.startDate,
                        Z = R.endDate,
                        M = _((function(e) {
                            return e(v.a).getDateRangeNumberOfDays()
                        })),
                        G = _((function(e) {
                            return e(y.b).getValue(b.r) || "#1a73e8"
                        })),
                        L = Object(m.useState)(e.matchMedia("(max-width: 450px)")),
                        U = l()(L, 2),
                        F = U[0],
                        B = U[1],
                        W = Object(m.useState)(e.matchMedia("(min-width: 451px) and (max-width: 1280px")),
                        H = l()(W, 2),
                        z = H[0],
                        V = H[1],
                        q = Object(m.useState)(e.matchMedia("(min-width: 1281px)")),
                        K = l()(q, 2),
                        Y = K[0],
                        $ = K[1];
                    if (Object(m.useEffect)((function() {
                            var t = function() {
                                B(e.matchMedia("(max-width: 450px)")), V(e.matchMedia("(min-width: 451px) and (max-width: 1280px")), $(e.matchMedia("(min-width: 1281px)"))
                            };
                            return e.addEventListener("resize", t),
                                function() {
                                    e.removeEventListener("resize", t)
                                }
                        }), []), w) return a.createElement(T.a, {
                        moduleSlug: "analytics",
                        error: w
                    });
                    var J = Array.isArray(null == P || null === (n = P[0]) || void 0 === n || null === (r = n.data) || void 0 === r ? void 0 : r.rows) ? null == P || null === (o = P[0]) || void 0 === o || null === (s = o.data) || void 0 === s ? void 0 : s.rows : [],
                        X = [
                            [{
                                type: "date",
                                label: Object(g.__)("Day", "google-site-kit")
                            }, {
                                type: "number",
                                label: Object(g.__)("Users", "google-site-kit")
                            }]
                        ].concat(c()(J.map((function(e) {
                            var t = e.metrics,
                                n = e.dimensions;
                            return [Object(O.a)(n[0]), t[0].values[0]]
                        })))),
                        Q = 1,
                        ee = 2;
                    F.matches && (M > 28 ? Q = 8 : M > 7 && (Q = 3), M > 7 && (ee = 3)), z.matches && (M > 28 ? Q = 5 : M > 7 && (Q = 2), M > 7 && (ee = 3)), Y.matches && (M > 28 && (Q = 5), M > 7 && (ee = 4));
                    var te = new Date(x);
                    te.setDate(new Date(x).getDate() + Q);
                    var ne = new Date(Z);
                    ne.setDate(new Date(Z).getDate() - Q);
                    var ae = [],
                        re = ee - 1;
                    for (ee -= 2; ee > 0;) {
                        var ie = new Date(Z);
                        ie.setDate(new Date(Z).getDate() - ee * (M / re)), ae.push(ie), ee -= 1
                    }
                    var oe = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? E(Object(n), !0).forEach((function(t) {
                                i()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, UserCountGraph.chartOptions);
                    return oe.series[0].color = G, oe.hAxis.ticks = [te].concat(ae, [ne]), (null == P || null === (u = P[0]) || void 0 === u || null === (d = u.data) || void 0 === d || null === (f = d.totals) || void 0 === f || null === (p = f[0]) || void 0 === p || null === (A = p.values) || void 0 === A ? void 0 : A[0]) && 0 !== parseInt(null == P || null === (k = P[0]) || void 0 === k || null === (S = k.data) || void 0 === S || null === (N = S.totals) || void 0 === N || null === (I = N[0]) || void 0 === I || null === (j = I.values) || void 0 === j ? void 0 : j[0], 10) ? oe.vAxis.viewWindow.max = void 0 : oe.vAxis.viewWindow.max = 100, a.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__user-count-chart"
                    }, a.createElement(h.a, {
                        chartType: "LineChart",
                        data: X,
                        height: "368px",
                        loadingHeight: "340px",
                        loaded: D,
                        options: oe,
                        gatheringData: C,
                        width: "100%"
                    }))
                }
                UserCountGraph.propTypes = {
                    loaded: d.a.bool,
                    error: d.a.shape({}),
                    report: d.a.arrayOf(d.a.object),
                    gatheringData: d.a.bool
                }, UserCountGraph.chartOptions = {
                    animation: {
                        startup: !0
                    },
                    curveType: "function",
                    height: 340,
                    width: "100%",
                    colors: ["#1a73e8"],
                    chartArea: {
                        left: "1%",
                        height: 300,
                        top: 21,
                        width: "90%"
                    },
                    legend: {
                        position: "none"
                    },
                    hAxis: {
                        backgroundColor: "#eef4fd",
                        format: "MMM d",
                        gridlines: {
                            color: "#ffffff"
                        },
                        textPosition: "out",
                        textStyle: {
                            color: "#616161",
                            fontSize: 12
                        }
                    },
                    vAxis: {
                        gridlines: {
                            color: "#ece9f1"
                        },
                        lineWidth: 3,
                        minorGridlines: {
                            color: "#ffffff"
                        },
                        minValue: 0,
                        textStyle: {
                            color: "#616161",
                            fontSize: 12
                        },
                        textPosition: "out",
                        viewWindow: {
                            min: 0
                        }
                    },
                    series: {
                        0: {
                            lineWidth: 3,
                            targetAxisIndex: 1
                        }
                    },
                    crosshair: {
                        color: "#1a73e8",
                        opacity: .1,
                        orientation: "vertical"
                    }
                }
            }).call(this, n(18), n(3))
        },
        757: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return DimensionTabs
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(0),
                    o = n.n(i),
                    c = n(286),
                    s = n.n(c),
                    l = n(330),
                    u = n.n(l),
                    d = n(2),
                    g = n(1),
                    m = n(4),
                    f = n.n(m),
                    p = n(20),
                    y = n(43),
                    v = n(10),
                    b = n(82),
                    h = n(7),
                    O = n(11),
                    T = n(39),
                    E = f.a.useDispatch,
                    _ = [{
                        tabText: Object(g.__)("Channels", "google-site-kit"),
                        dimensionName: "ga:channelGrouping"
                    }, {
                        tabText: Object(g.__)("Locations", "google-site-kit"),
                        dimensionName: "ga:country"
                    }, {
                        tabText: Object(g.__)("Devices", "google-site-kit"),
                        dimensionName: "ga:deviceCategory"
                    }];

                function DimensionTabs(t) {
                    var n = t.dimensionName,
                        a = t.gatheringData,
                        i = t.loaded,
                        o = t.isZeroData,
                        c = Object(d.useContext)(p.b),
                        l = E(y.b).setValues,
                        g = Object(T.a)("zeroDataStates"),
                        m = _.findIndex((function(e) {
                            return e.dimensionName === n
                        })),
                        f = Object(d.useCallback)((function(e) {
                            var t, n = (_[e] || {}).dimensionName;
                            l((t = {}, r()(t, v.s, n), r()(t, v.t, ""), r()(t, v.r, ""), r()(t, v.p, null), t)), Object(O.w)("".concat(c, "_all-traffic-widget"), "tab_select", n)
                        }), [l, c]);
                    return i ? e.createElement(d.Fragment, null, e.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__tabs hidden-on-mobile"
                    }, e.createElement(u.a, {
                        activeIndex: m,
                        handleActiveIndexUpdate: f
                    }, _.map((function(t) {
                        return e.createElement(s.a, {
                            key: t.dimensionName,
                            className: "mdc-tab--min-width",
                            focusOnActivate: !1,
                            disabled: a || g && o
                        }, e.createElement("span", {
                            className: "mdc-tab__text-label"
                        }, t.tabText))
                    })))), e.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__tabs--small"
                    }, e.createElement(h.m, {
                        enhanced: !0,
                        onEnhancedChange: f,
                        outlined: !0,
                        value: "dimension-name-".concat(m),
                        disabled: a || g && o
                    }, _.map((function(t, n) {
                        return e.createElement(h.k, {
                            key: n,
                            value: "dimension-name-".concat(n)
                        }, t.tabText)
                    }))))) : e.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__tabs--loading"
                    }, e.createElement(b.a, {
                        width: "100px",
                        height: "40px",
                        shape: "square"
                    }), e.createElement(b.a, {
                        width: "100px",
                        height: "40px",
                        shape: "square"
                    }), e.createElement(b.a, {
                        width: "100px",
                        height: "40px",
                        shape: "square"
                    }))
                }
                DimensionTabs.propTypes = {
                    dimensionName: o.a.string.isRequired,
                    gatheringData: o.a.bool,
                    isZeroData: o.a.bool,
                    loaded: o.a.bool
                }
            }).call(this, n(3))
        },
        758: function(e, t, n) {
            "use strict";
            (function(e, a) {
                n.d(t, "a", (function() {
                    return UserDimensionsPieChart
                }));
                var r = n(6),
                    i = n.n(r),
                    o = n(12),
                    c = n.n(o),
                    s = n(8),
                    l = n.n(s),
                    u = n(0),
                    d = n.n(u),
                    g = n(759),
                    m = n.n(g),
                    f = n(284),
                    p = n.n(f),
                    y = n(2),
                    v = n(1),
                    b = n(68),
                    h = n(4),
                    O = n.n(h),
                    T = n(20),
                    E = n(15),
                    _ = n(43),
                    A = n(10),
                    k = n(11),
                    S = n(61),
                    N = n(202),
                    I = n(21),
                    j = n(82),
                    D = n(760),
                    w = n(39),
                    P = O.a.useDispatch,
                    C = O.a.useSelect;

                function UserDimensionsPieChart(t) {
                    var n, r, o, s, u, d, g, f, h, O, R, x, Z = t.dimensionName,
                        M = t.dimensionValue,
                        G = t.gatheringData,
                        L = t.loaded,
                        U = t.report,
                        F = Object(w.a)("zeroDataStates"),
                        B = Object(y.useState)(!1),
                        W = c()(B, 2),
                        H = W[0],
                        z = W[1],
                        V = Object(y.useContext)(T.b),
                        q = C((function(e) {
                            return e(E.c).getGoogleSupportURL({
                                path: "/analytics/answer/1009671"
                            })
                        })),
                        K = C((function(e) {
                            return e(E.c).getGoogleSupportURL({
                                path: "/analytics/answer/2820717"
                            })
                        })),
                        Y = C((function(e) {
                            return e(_.b).getValue(A.r)
                        })),
                        $ = C((function(e) {
                            return e(_.b).getValue(A.p)
                        })),
                        J = C((function(e) {
                            return e(A.f).hasZeroData()
                        })),
                        X = P(_.b).setValues,
                        Q = Object(y.useRef)(),
                        ee = Object(y.useRef)();
                    Object(y.useEffect)((function() {
                        var t = function(e) {
                                var t, n = (e || {}).target;
                                if (null == n || null === (t = n.classList) || void 0 === t ? void 0 : t.contains("googlesitekit-cta-link__tooltip")) {
                                    var a = n.dataset.rowLabel;
                                    "(other)" !== a && "(not set)" !== a || Object(k.w)("".concat(V, "_all-traffic-widget"), "help_click", a)
                                }
                            },
                            n = ee.current,
                            a = function() {
                                var e;
                                return X((e = {}, i()(e, A.t, ""), i()(e, A.r, ""), i()(e, A.p, null), e))
                            },
                            r = function() {
                                return !(m()($) || void 0 === $ || !M && !Y)
                            },
                            o = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                (null == e ? void 0 : e.keyCode) === b.d && r() && a()
                            },
                            c = function(e) {
                                var t;
                                r() && !(null == e || null === (t = e.target) || void 0 === t ? void 0 : t.closest(".googlesitekit-widget--analyticsAllTraffic__legend")) && a()
                            };
                        return n && (n.addEventListener("click", t), e.addEventListener("click", c), e.addEventListener("keyup", o)),
                            function() {
                                n && (n.removeEventListener("click", t), e.removeEventListener("click", c), e.removeEventListener("keyup", o))
                            }
                    }), [X, $, M, Y, V]);
                    var te = {
                        current: null == U || null === (n = U[0]) || void 0 === n || null === (r = n.data) || void 0 === r || null === (o = r.totals) || void 0 === o || null === (s = o[0]) || void 0 === s || null === (u = s.values) || void 0 === u ? void 0 : u[0],
                        previous: null == U || null === (d = U[0]) || void 0 === d || null === (g = d.data) || void 0 === g || null === (f = g.totals) || void 0 === f || null === (h = f[1]) || void 0 === h || null === (O = h.values) || void 0 === O ? void 0 : O[0]
                    };
                    ((null == U || null === (R = U[0]) || void 0 === R || null === (x = R.data) || void 0 === x ? void 0 : x.rows) || []).forEach((function(e) {
                        var t = e.metrics;
                        te.current -= t[0].values[0], te.previous -= t[1].values[0]
                    }));
                    var ne = function(e, t, n) {
                            return '<p>\n\t\t\t<a\n\t\t\t\thref="'.concat(e, '"\n\t\t\t\tclass="googlesitekit-cta-link googlesitekit-cta-link--external googlesitekit-cta-link--inherit googlesitekit-cta-link__tooltip"\n\t\t\t\ttarget="_blank"\n\t\t\t\trel="noreferrer noopener"\n\t\t\t\tdata-row-label="').concat(n, '"\n\t\t\t>\n\t\t\t\t').concat(t, "\n\t\t\t</a>\n\t\t</p>")
                        },
                        ae = Object(S.b)(U, {
                            keyColumnIndex: 0,
                            maxSlices: 5,
                            withOthers: !0,
                            tooltipCallback: function(e, t) {
                                var n, a, r, i = (null == e || null === (n = e.metrics) || void 0 === n || null === (a = n[1]) || void 0 === a || null === (r = a.values) || void 0 === r ? void 0 : r[0]) > 0 ? 100 * e.metrics[0].values[0] / e.metrics[1].values[0] - 100 : 100;
                                null === e && te.previous > 0 && (i = 100 * te.current / te.previous - 100);
                                var o = Object(k.h)(i),
                                    c = e ? e.metrics[0].values[0] : te.current,
                                    s = Object(v.sprintf)(
                                        /* translators: 1: numeric value of users, 2: up or down arrow , 3: different change in percentage, %%: percent symbol */
                                        Object(v._x)("Users: <strong>%1$s</strong> <em>%2$s %3$s%%</em>", "Stat information for the user dimensions chart tooltip", "google-site-kit"), Object(k.s)(c), o, Object(k.s)(Math.abs(i), {
                                            maximumFractionDigits: 2
                                        })),
                                    u = t[0].toLowerCase(),
                                    d = "googlesitekit-visualization-tooltip-".concat(u.replace(/\W+/, "_")),
                                    g = "<p>\n\t\t\t\t\t".concat(
                                        /* translators: %s: dimension label */
                                        Object(v.sprintf)(Object(v.__)("%s:", "google-site-kit"), t[0].toUpperCase()), "\n\t\t\t\t\t<b>").concat(Object(k.s)(t[1], {
                                        maximumFractionDigits: 1,
                                        style: "percent"
                                    }), "</b>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t").concat(s, "\n\t\t\t\t</p>");
                                if (u === Object(v.__)("Others", "google-site-kit").toLowerCase()) switch (Z) {
                                    case "ga:country":
                                        g += "<p>".concat(Object(v.__)("See the full list of locations in Analytics", "google-site-kit"), "</p>");
                                        break;
                                    case "ga:deviceCategory":
                                        g += "<p>".concat(Object(v.__)("See the full list of devices in Analytics", "google-site-kit"), "</p>");
                                        break;
                                    case "ga:channelGrouping":
                                    default:
                                        g += "<p>".concat(Object(v.__)("See the full list of channels in Analytics", "google-site-kit"), "</p>")
                                }
                                return q && "(other)" === u && (g += ne(q, Object(v.sprintf)(
                                    /* translators: %s: pie slice label */
                                    Object(v.__)('Learn more about what "%s" means', "google-site-kit"), u), u)), K && "(not set)" === u && (g += ne(K, Object(v.sprintf)(
                                    /* translators: %s: pie slice label */
                                    Object(v.__)('Learn more about what "%s" means', "google-site-kit"), u), u)), g = '<div class="'.concat(l()("googlesitekit-visualization-tooltip", d, {
                                    "googlesitekit-visualization-tooltip--up": i > 0,
                                    "googlesitekit-visualization-tooltip--down": i < 0
                                }), '">\n\t\t\t\t\t').concat(g, "\n\t\t\t\t</div>")
                            }
                        }),
                        re = UserDimensionsPieChart.chartOptions.slices,
                        ie = p()(UserDimensionsPieChart.chartOptions),
                        oe = {
                            "ga:channelGrouping": Object(v.__)("<span>By</span> channels", "google-site-kit"),
                            "ga:country": Object(v.__)("<span>By</span> locations", "google-site-kit"),
                            "ga:deviceCategory": Object(v.__)("<span>By</span> devices", "google-site-kit")
                        };
                    G && (oe = {
                        "ga:channelGrouping": Object(v.__)("gathering data…", "google-site-kit")
                    }, ie.pieSliceText = "none", ie.tooltip.trigger = "none", ie.sliceVisibilityThreshold = 1);
                    var ce = L ? Object(k.t)(oe[Z] || "", {
                            ALLOWED_TAGS: ["span"],
                            ALLOWED_ATTR: []
                        }) : {
                            __html: ""
                        },
                        se = Object(k.n)(U);
                    se && (ie.pieSliceText = "none"), (null == M ? void 0 : M.length) ? ie.tooltip.trigger = "selection" : ie.tooltip.trigger = "focus";
                    var le = F && J;
                    return a.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__dimensions-container"
                    }, a.createElement("div", {
                        ref: ee,
                        className: l()("googlesitekit-widget--analyticsAllTraffic__dimensions-chart", {
                            "googlesitekit-widget--analyticsAllTraffic__slice-selected": !!M,
                            "googlesitekit-widget--analyticsAllTraffic__selectable": H
                        })
                    }, le && a.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__chart-zero-data"
                    }, a.createElement(D.a, null)), !le && a.createElement(N.a, {
                        chartType: "PieChart",
                        data: ae || [],
                        getChartWrapper: function(e) {
                            Q.current = e
                        },
                        gatheringData: G,
                        height: "368px",
                        loaded: L,
                        loadingHeight: "300px",
                        loadingWidth: "300px",
                        onMouseOut: function() {
                            z(!1)
                        },
                        onMouseOver: function(e, t) {
                            var n = t.chartWrapper,
                                a = e.row;
                            null == a && z(!1);
                            var r = n.getDataTable();
                            z(r.getValue(a, 0) !== Object(v.__)("Others", "google-site-kit"))
                        },
                        onReady: function(e) {
                            var t, n, a = e.chartWrapper.getChart();
                            if (M && !(null === (t = a.getSelection()) || void 0 === t ? void 0 : t.length)) {
                                var r, o, c, s, l = ae.findIndex((function(e) {
                                    return e[0] === M
                                })) - 1;
                                if (l >= 0) {
                                    if (a.setSelection([{
                                            row: l
                                        }]), $ !== l || ((null === (r = re[l]) || void 0 === r ? void 0 : r.color) || Y) !== Y) X((c = {}, i()(c, A.p, l), i()(c, A.r, (null === (o = re[l]) || void 0 === o ? void 0 : o.color) || Y), c))
                                } else X((s = {}, i()(s, A.t, ""), i()(s, A.r, ""), i()(s, A.p, null), s))
                            }!M && (null === (n = a.getSelection()) || void 0 === n ? void 0 : n.length) && (a.setSelection([]), null !== $ && X(i()({}, A.p, null))), M || "" === Y || X(i()({}, A.r, ""))
                        },
                        onSelect: function(e) {
                            var t, n = e.chartWrapper,
                                a = n.getChart(),
                                r = ((null === (t = a.getSelection()) || void 0 === t ? void 0 : t[0]) || {}).row;
                            if (null == r) {
                                var o;
                                X((o = {}, i()(o, A.t, ""), i()(o, A.r, ""), i()(o, A.p, null), o))
                            } else {
                                var c = n.getDataTable();
                                if (c) {
                                    var s, l, u = c.getValue(r, 0);
                                    if (Object(v.__)("Others", "google-site-kit") === u) null == $ ? a.setSelection([]) : a.setSelection([{
                                        row: $
                                    }]);
                                    else X((l = {}, i()(l, A.r, null === (s = re[r]) || void 0 === s ? void 0 : s.color), i()(l, A.t, u), i()(l, A.p, r), l)), Object(k.w)("".concat(V, "_all-traffic-widget"), "slice_select", "".concat(Z, ":").concat(u))
                                }
                            }
                        },
                        options: ie,
                        width: "100%"
                    }, a.createElement("div", {
                        className: l()({
                            "googlesitekit-widget--analyticsAllTraffic__dimensions-chart-gathering-data": G,
                            "googlesitekit-widget--analyticsAllTraffic__dimensions-chart-title": !G
                        }),
                        dangerouslySetInnerHTML: ce
                    })), a.createElement("div", {
                        "aria-label": G ? Object(v.__)("A pie chart for Analytics that is gathering data, so has no data to display.", "google-site-kit") : void 0,
                        className: l()("googlesitekit-widget--analyticsAllTraffic__legend", {
                            "googlesitekit-widget--analyticsAllTraffic__legend--single": se
                        }),
                        role: "region"
                    }, L && !le && (null == ae ? void 0 : ae.slice(1).map((function(e, t) {
                        var n, r = c()(e, 1)[0],
                            o = r === M,
                            s = null === (n = re[t]) || void 0 === n ? void 0 : n.color,
                            u = Object(v.__)("Others", "google-site-kit") === r;
                        return a.createElement(I.a, {
                            key: r,
                            onClick: function() {
                                return function(e) {
                                    var t;
                                    if (Q.current) {
                                        var n = Q.current.getDataTable().getValue(e, 0);
                                        if (!(Object(v.__)("Others", "google-site-kit") === n)) {
                                            var a, r = ((null === (t = Q.current.getChart().getSelection()) || void 0 === t ? void 0 : t[0]) || {}).row;
                                            if (r === e) X((a = {}, i()(a, A.t, ""), i()(a, A.r, ""), i()(a, A.p, null), a));
                                            else if (n) {
                                                var o, c;
                                                X((c = {}, i()(c, A.r, null === (o = re[r]) || void 0 === o ? void 0 : o.color), i()(c, A.t, n), i()(c, A.p, e), c)), Object(k.w)("".concat(V, "_all-traffic-widget"), "slice_select", "".concat(Z, ":").concat(n))
                                            }
                                        }
                                    }
                                }(t)
                            },
                            className: l()("googlesitekit-widget--analyticsAllTraffic__legend-slice", {
                                "googlesitekit-widget--analyticsAllTraffic__legend-active": o,
                                "googlesitekit-widget--analyticsAllTraffic__legend-others": u
                            }),
                            disabled: G
                        }, a.createElement("span", {
                            className: "googlesitekit-widget--analyticsAllTraffic__dot",
                            style: {
                                backgroundColor: s
                            }
                        }), a.createElement("span", {
                            className: "googlesitekit-widget--analyticsAllTraffic__label",
                            "data-label": r
                        }, r), a.createElement("span", {
                            className: "googlesitekit-widget--analyticsAllTraffic__underlay",
                            style: {
                                backgroundColor: s
                            }
                        }))
                    }))), !L && a.createElement(y.Fragment, null, a.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__legend-slice"
                    }, a.createElement("span", {
                        className: "googlesitekit-widget--analyticsAllTraffic__dot",
                        style: {
                            backgroundColor: "#ccc"
                        }
                    }), a.createElement(j.a, {
                        height: "18px",
                        width: "68px",
                        shape: "square"
                    })), a.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__legend-slice"
                    }, a.createElement("span", {
                        className: "googlesitekit-widget--analyticsAllTraffic__dot",
                        style: {
                            backgroundColor: "#ccc"
                        }
                    }), a.createElement(j.a, {
                        height: "18px",
                        width: "52px",
                        shape: "square"
                    })), a.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__legend-slice"
                    }, a.createElement("span", {
                        className: "googlesitekit-widget--analyticsAllTraffic__dot",
                        style: {
                            backgroundColor: "#ccc"
                        }
                    }), a.createElement(j.a, {
                        height: "18px",
                        width: "40px",
                        shape: "square"
                    })), a.createElement("div", {
                        className: "googlesitekit-widget--analyticsAllTraffic__legend-slice"
                    }, a.createElement("span", {
                        className: "googlesitekit-widget--analyticsAllTraffic__dot",
                        style: {
                            backgroundColor: "#ccc"
                        }
                    }), a.createElement(j.a, {
                        height: "18px",
                        width: "52px",
                        shape: "square"
                    }))))))
                }
                UserDimensionsPieChart.defaultProps = {
                    dimensionName: "ga:channelGrouping"
                }, UserDimensionsPieChart.chartOptions = {
                    chartArea: {
                        left: "auto",
                        height: 300,
                        top: "auto",
                        width: "100%"
                    },
                    backgroundColor: "transparent",
                    fontSize: 12,
                    height: 368,
                    legend: {
                        position: "none"
                    },
                    pieHole: .6,
                    pieSliceTextStyle: {
                        color: "black",
                        fontSize: 12
                    },
                    slices: {
                        0: {
                            color: "#ffcd33"
                        },
                        1: {
                            color: "#c196ff"
                        },
                        2: {
                            color: "#9de3fe"
                        },
                        3: {
                            color: "#ff7fc6"
                        },
                        4: {
                            color: "#ff886b"
                        }
                    },
                    title: null,
                    tooltip: {
                        isHtml: !0,
                        trigger: "focus"
                    },
                    width: "100%"
                }, UserDimensionsPieChart.propTypes = {
                    dimensionName: d.a.string.isRequired,
                    dimensionValue: d.a.string,
                    gatheringData: d.a.bool,
                    report: d.a.arrayOf(d.a.object),
                    loaded: d.a.bool
                }
            }).call(this, n(18), n(3))
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
        760: function(e, t, n) {
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
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M119 238c65.722 0 119-53.278 119-119C238 53.278 184.722 0 119 0 53.278 0 0 53.278 0 119c0 65.722 53.278 119 119 119zm0-42c42.526 0 77-34.474 77-77s-34.474-77-77-77-77 34.474-77 77 34.474 77 77 77z",
                fill: "currentColor"
            });
            t.a = function SvgPieChartZeroData(e) {
                return a.createElement("svg", r({
                    viewBox: "0 0 238 238",
                    fill: "none"
                }, e), i)
            }
        },
        761: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return EmptyPieChart
                }));
                var a = n(1),
                    r = n(370),
                    i = n(7),
                    o = n(92);

                function EmptyPieChart() {
                    return e.createElement(i.b, {
                        className: "googlesitekit-widget--analyticsAllTraffic__empty-dimensions-chart"
                    }, e.createElement(i.l, null, e.createElement(i.a, {
                        size: 12
                    }, e.createElement(r.a, null)), e.createElement(i.a, {
                        size: 12
                    }, e.createElement("h4", null, Object(a.__)("No data to display", "google-site-kit")), e.createElement("p", null, e.createElement(o.t, {
                        skipPrefix: !0
                    })))))
                }
            }).call(this, n(3))
        },
        762: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(12),
                    r = n.n(a),
                    i = n(284),
                    o = n.n(i),
                    c = n(1),
                    s = n(4),
                    l = n.n(s),
                    u = n(10),
                    d = n(13),
                    g = n(137),
                    m = n(201),
                    f = n(96),
                    p = n(61),
                    y = n(278),
                    v = n(149),
                    b = n(245),
                    h = n(392),
                    O = n(11),
                    T = n(92),
                    E = n(39),
                    _ = l.a.useSelect,
                    A = l.a.useInViewSelect;
                var k = [{
                    title: Object(c.__)("Most popular content", "google-site-kit"),
                    primary: !0,
                    Component: function Component(t) {
                        var n = t.row,
                            a = r()(n.dimensions, 2),
                            i = a[0],
                            o = a[1];
                        return e.createElement(h.a, {
                            title: i,
                            path: o
                        })
                    }
                }, {
                    title: Object(c.__)("Views", "google-site-kit"),
                    field: "metrics.0.values.0",
                    Component: function Component(t) {
                        var n = t.fieldValue;
                        return e.createElement("span", null, Object(O.r)(n, {
                            style: "decimal"
                        }))
                    }
                }];
                t.a = Object(g.a)({
                    moduleName: "analytics"
                })((function DashboardPopularPagesWidget(t) {
                    var n, a, r, i = t.Widget,
                        s = t.WidgetReportZero,
                        l = t.WidgetReportError,
                        g = Object(E.a)("zeroDataStates"),
                        h = A((function(e) {
                            return e(u.f).isGatheringData()
                        })),
                        O = _((function(e) {
                            return e(d.a).getDateRangeDates({
                                offsetDays: u.b
                            })
                        })),
                        S = O.startDate,
                        N = O.endDate,
                        I = O.compareStartDate,
                        j = O.compareEndDate,
                        D = {
                            startDate: S,
                            endDate: N,
                            dimensions: ["ga:pagePath"],
                            metrics: [{
                                expression: "ga:pageviews",
                                alias: "Pageviews"
                            }],
                            orderby: [{
                                fieldName: "ga:pageviews",
                                sortOrder: "DESCENDING"
                            }],
                            limit: 10
                        },
                        w = _((function(e) {
                            return e(u.f).getServiceReportURL("content-pages", Object(v.a)({
                                startDate: S,
                                endDate: N,
                                compareStartDate: I,
                                compareEndDate: j
                            }))
                        })),
                        P = _((function(e) {
                            return e(u.f).getErrorForSelector("getReport", [D])
                        })),
                        C = A((function(e) {
                            return e(u.f).getReport(D)
                        })),
                        R = A((function(e) {
                            return P ? void 0 : e(u.f).getPageTitles(C, D)
                        })),
                        x = function Footer() {
                            return e.createElement(f.a, {
                                className: "googlesitekit-data-block__source",
                                name: Object(c._x)("Analytics", "Service name", "google-site-kit"),
                                href: w,
                                external: !0
                            })
                        };
                    if (_((function(e) {
                            return !((void 0 !== P || void 0 !== R) && e(u.f).hasFinishedResolution("getReport", [D]))
                        })) || void 0 === h) return e.createElement(i, {
                        noPadding: !0,
                        Footer: x
                    }, e.createElement(m.a, {
                        padding: !0
                    }));
                    if (P) return e.createElement(i, {
                        Footer: x
                    }, e.createElement(l, {
                        moduleSlug: "analytics",
                        error: P
                    }));
                    if (!g && h && Object(p.l)(C)) return e.createElement(i, {
                        Footer: x
                    }, e.createElement(s, {
                        moduleSlug: "analytics"
                    }));
                    var Z = (null == C || null === (n = C[0]) || void 0 === n || null === (a = n.data) || void 0 === a || null === (r = a.rows) || void 0 === r ? void 0 : r.length) ? o()(C[0].data.rows) : [];
                    return Z.forEach((function(e) {
                        var t = e.dimensions[0];
                        e.dimensions.unshift(R[t])
                    })), e.createElement(i, {
                        noPadding: !0,
                        Footer: x
                    }, e.createElement(y.a, null, e.createElement(b.a, {
                        rows: Z,
                        columns: k,
                        zeroState: T.t,
                        gatheringData: h
                    })))
                }))
            }).call(this, n(3))
        },
        763: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(6),
                    r = n.n(a),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(10),
                    l = n(13),
                    u = n(15),
                    d = n(137),
                    g = n(82),
                    m = n(74),
                    f = n(256),
                    p = n(83),
                    y = n(11),
                    v = n(196),
                    b = n(61),
                    h = n(149),
                    O = n(39);

                function T(e, t) {
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
                        t % 2 ? T(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var _ = c.a.useSelect,
                    A = c.a.useInViewSelect;
                t.a = Object(d.a)({
                    moduleName: "analytics",
                    FallbackComponent: function FallbackComponent(t) {
                        var n = t.WidgetActivateModuleCTA;
                        return e.createElement(n, {
                            moduleSlug: "analytics"
                        })
                    },
                    IncompleteComponent: function IncompleteComponent(t) {
                        var n = t.WidgetCompleteModuleActivationCTA;
                        return e.createElement(n, {
                            moduleSlug: "analytics"
                        })
                    }
                })((function DashboardGoalsWidget(t) {
                    var n, a, r, o, c = t.WidgetReportZero,
                        d = t.WidgetReportError,
                        T = Object(O.a)("zeroDataStates"),
                        k = A((function(e) {
                            return e(s.f).isGatheringData()
                        })),
                        S = _((function(e) {
                            return e(u.c).getCurrentEntityURL()
                        })),
                        N = _((function(e) {
                            return e(l.a).getDateRangeDates({
                                offsetDays: s.b,
                                compare: !0
                            })
                        })),
                        I = N.compareStartDate,
                        j = N.compareEndDate,
                        D = N.startDate,
                        w = N.endDate,
                        P = {
                            compareStartDate: I,
                            compareEndDate: j,
                            startDate: D,
                            endDate: w,
                            dimensions: "ga:date",
                            metrics: [{
                                expression: "ga:goalCompletionsAll",
                                alias: "Goal Completions"
                            }]
                        },
                        C = {
                            startDate: D,
                            endDate: w,
                            url: S,
                            compareStartDate: I,
                            compareEndDate: j,
                            metrics: [{
                                expression: "ga:users",
                                alias: "Total Users"
                            }]
                        },
                        R = _((function(e) {
                            var t = e(s.f),
                                n = !t.hasFinishedResolution("getGoals", []) || !t.hasFinishedResolution("getReport", [P]) || !t.hasFinishedResolution("getReport", [C]);
                            return {
                                error: t.getErrorForSelector("getGoals", []) || t.getErrorForSelector("getReport", [P]),
                                loading: n,
                                serviceURL: t.getServiceReportURL("conversions-goals-overview", E({}, Object(h.a)({
                                    startDate: D,
                                    endDate: w,
                                    compareStartDate: I,
                                    compareEndDate: j
                                })))
                            }
                        })),
                        x = R.error,
                        Z = R.loading,
                        M = R.serviceURL,
                        G = A((function(e) {
                            return e(s.f).getGoals()
                        })),
                        L = A((function(e) {
                            return e(s.f).getReport(P)
                        })),
                        U = A((function(e) {
                            return e(s.f).getReport(C)
                        })),
                        F = _((function(e) {
                            return e(u.c).getGoogleSupportURL({
                                path: "/analytics/answer/1032415",
                                hash: "create_or_edit_goals"
                            })
                        }));
                    if (x) return e.createElement(d, {
                        moduleSlug: "analytics",
                        error: x
                    });
                    if (Z || void 0 === k) return e.createElement(g.a, {
                        width: "100%",
                        height: "202px"
                    });
                    if (!T && k && Object(b.l)(U)) return e.createElement(c, {
                        moduleSlug: "analytics"
                    });
                    if (!(null == G || null === (n = G.items) || void 0 === n ? void 0 : n.length)) return e.createElement(p.a, {
                        title: Object(i.__)("Use goals to measure success", "google-site-kit"),
                        description: Object(i.__)("Goals measure how well your site or app fulfills your target objectives", "google-site-kit"),
                        ctaLink: F,
                        ctaLabel: Object(i.__)("Create a new goal", "google-site-kit"),
                        ctaLinkExternal: !0
                    });
                    for (var B = [
                            [{
                                type: "date",
                                label: "Day"
                            }, {
                                type: "number",
                                label: "Bounce Rate"
                            }]
                        ], W = (null == L || null === (a = L[0]) || void 0 === a ? void 0 : a.data) || {}, H = W.totals, z = void 0 === H ? [] : H, V = W.rows, q = void 0 === V ? [] : V, K = Math.ceil(q.length / 2); K < q.length; K++) {
                        var Y = q[K].metrics[0].values,
                            $ = q[K].dimensions[0],
                            J = Object(v.a)($);
                        B.push([J, Y[0]])
                    }
                    var X = (null === (r = z[0]) || void 0 === r ? void 0 : r.values) || [],
                        Q = (null === (o = z[1]) || void 0 === o ? void 0 : o.values) || [],
                        ee = X[0] || 0,
                        te = Object(y.a)(Q[0] || 0, X[0] || 0);
                    return e.createElement(m.a, {
                        className: "overview-goals-completed",
                        title: Object(i.__)("Goals Completed", "google-site-kit"),
                        datapoint: ee,
                        change: te,
                        changeDataUnit: "%",
                        source: {
                            name: Object(i._x)("Analytics", "Service name", "google-site-kit"),
                            link: M,
                            external: !0
                        },
                        sparkline: e.createElement(f.a, {
                            data: B,
                            change: te,
                            gatheringData: k
                        }),
                        gatheringData: k
                    })
                }))
            }).call(this, n(3))
        },
        764: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(6),
                    r = n.n(a),
                    i = n(1),
                    o = n(109),
                    c = n(4),
                    s = n.n(c),
                    l = n(10),
                    u = n(15),
                    d = n(13),
                    g = n(137),
                    m = n(82),
                    f = n(74),
                    p = n(256),
                    y = n(11),
                    v = n(196),
                    b = n(61),
                    h = n(149),
                    O = n(39);

                function T(e, t) {
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
                        t % 2 ? T(Object(n), !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var _ = s.a.useSelect,
                    A = s.a.useInViewSelect;
                t.a = Object(g.a)({
                    moduleName: "analytics",
                    FallbackComponent: function FallbackComponent(t) {
                        var n = t.WidgetActivateModuleCTA;
                        return e.createElement(n, {
                            moduleSlug: "analytics"
                        })
                    },
                    IncompleteComponent: function IncompleteComponent(t) {
                        var n = t.WidgetCompleteModuleActivationCTA;
                        return e.createElement(n, {
                            moduleSlug: "analytics"
                        })
                    }
                })((function DashboardSearchVisitorsWidget(t) {
                    var n, a, r, c, s, g, T, k = t.WidgetReportZero,
                        S = t.WidgetReportError,
                        N = Object(O.a)("zeroDataStates"),
                        I = A((function(e) {
                            return e(l.f).isGatheringData()
                        })),
                        j = _((function(e) {
                            return e(u.c).getCurrentEntityURL()
                        })),
                        D = _((function(e) {
                            return e(d.a).getDateRangeDates({
                                offsetDays: l.b,
                                compare: !0
                            })
                        })),
                        w = D.compareStartDate,
                        P = D.compareEndDate,
                        C = D.startDate,
                        R = D.endDate,
                        x = E({
                            startDate: C,
                            endDate: R,
                            metrics: [{
                                expression: "ga:users",
                                alias: "Users"
                            }]
                        }, j && {
                            url: j
                        }),
                        Z = E({
                            dimensions: ["ga:date"],
                            dimensionFilters: {
                                "ga:channelGrouping": "Organic Search"
                            }
                        }, x),
                        M = E({
                            compareStartDate: w,
                            compareEndDate: P,
                            dimensionFilters: {
                                "ga:channelGrouping": "Organic Search"
                            }
                        }, x),
                        G = E({
                            compareStartDate: w,
                            compareEndDate: P
                        }, x),
                        L = _((function(e) {
                            var t = e(l.f),
                                n = ["analytics.trafficChannel:Organic Search"];
                            return Object(o.a)(j) && n.push("analytics.pagePath:".concat(Object(y.m)(j))), {
                                loading: !t.hasFinishedResolution("getReport", [Z]) || !t.hasFinishedResolution("getReport", [M]) || !t.hasFinishedResolution("getReport", [G]),
                                error: t.getErrorForSelector("getReport", [Z]) || t.getErrorForSelector("getReport", [M]) || t.getErrorForSelector("getReport", [G]),
                                serviceURL: t.getServiceReportURL("acquisition-channels", E({
                                    "_r.drilldown": n.join(",")
                                }, Object(h.a)({
                                    startDate: C,
                                    endDate: R,
                                    compareStartDate: w,
                                    compareEndDate: P
                                })))
                            }
                        })),
                        U = L.loading,
                        F = L.error,
                        B = L.serviceURL,
                        W = A((function(e) {
                            return e(l.f).getReport(Z)
                        })),
                        H = A((function(e) {
                            return e(l.f).getReport(M)
                        })),
                        z = A((function(e) {
                            return e(l.f).getReport(G)
                        }));
                    if (F) return e.createElement(S, {
                        moduleSlug: "analytics",
                        error: F
                    });
                    if (U || void 0 === I) return e.createElement(m.a, {
                        width: "100%",
                        height: "202px"
                    });
                    if (!N && I && (Object(b.l)(W) || Object(b.l)(H)) && Object(b.l)(z)) return e.createElement(k, {
                        moduleSlug: "analytics"
                    });
                    for (var V = [
                            [{
                                type: "date",
                                label: "Day"
                            }, {
                                type: "number",
                                label: "Unique Visitors from Search"
                            }]
                        ], q = (null == W || null === (n = W[0]) || void 0 === n || null === (a = n.data) || void 0 === a ? void 0 : a.rows) || [], K = 0; K < q.length; K++) {
                        var Y = q[K].metrics[0].values,
                            $ = q[K].dimensions[0],
                            J = Object(v.a)($);
                        V.push([J, Y[0]])
                    }
                    var X = ((null == H || null === (r = H[0]) || void 0 === r ? void 0 : r.data) || {}).totals,
                        Q = void 0 === X ? [] : X,
                        ee = (null === (c = Q[0]) || void 0 === c || null === (s = c.values) || void 0 === s ? void 0 : s[0]) || 0,
                        te = (null === (g = Q[1]) || void 0 === g || null === (T = g.values) || void 0 === T ? void 0 : T[0]) || 0,
                        ne = Object(y.a)(te, ee);
                    return e.createElement(f.a, {
                        className: "overview-total-users",
                        title: Object(i.__)("Unique Visitors from Search", "google-site-kit"),
                        datapoint: ee,
                        change: ne,
                        changeDataUnit: "%",
                        source: {
                            name: Object(i._x)("Analytics", "Service name", "google-site-kit"),
                            link: B,
                            external: !0
                        },
                        sparkline: e.createElement(p.a, {
                            data: V,
                            change: ne,
                            gatheringData: I
                        }),
                        gatheringData: I
                    })
                }))
            }).call(this, n(3))
        },
        765: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(6),
                    r = n.n(a),
                    i = n(1),
                    o = n(109),
                    c = n(4),
                    s = n.n(c),
                    l = n(10),
                    u = n(15),
                    d = n(13),
                    g = n(137),
                    m = n(82),
                    f = n(74),
                    p = n(256),
                    y = n(11),
                    v = n(196),
                    b = n(61),
                    h = n(149),
                    O = n(39);

                function T(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, a)
                    }
                    return n
                }
                var E = s.a.useSelect,
                    _ = s.a.useInViewSelect;
                t.a = Object(g.a)({
                    moduleName: "analytics",
                    FallbackComponent: function FallbackComponent(t) {
                        var n = t.WidgetActivateModuleCTA;
                        return e.createElement(n, {
                            moduleSlug: "analytics"
                        })
                    },
                    IncompleteComponent: function IncompleteComponent(t) {
                        var n = t.WidgetCompleteModuleActivationCTA;
                        return e.createElement(n, {
                            moduleSlug: "analytics"
                        })
                    }
                })((function DashboardBounceRateWidget(t) {
                    var n, a, c, s = t.WidgetReportZero,
                        g = t.WidgetReportError,
                        A = Object(O.a)("zeroDataStates"),
                        k = _((function(e) {
                            return e(l.f).isGatheringData()
                        })),
                        S = E((function(e) {
                            return e(u.c).getCurrentEntityURL()
                        })),
                        N = E((function(e) {
                            return e(d.a).getDateRangeDates({
                                offsetDays: l.b,
                                compare: !0
                            })
                        })),
                        I = N.compareStartDate,
                        j = N.compareEndDate,
                        D = N.startDate,
                        w = N.endDate,
                        P = {
                            compareStartDate: I,
                            compareEndDate: j,
                            startDate: D,
                            endDate: w,
                            dimensions: "ga:date",
                            metrics: [{
                                expression: "ga:bounceRate",
                                alias: "Bounce Rate"
                            }]
                        };
                    Object(o.a)(S) && (P.url = S, c = "analytics.pagePath:".concat(Object(y.m)(S)));
                    var C = E((function(e) {
                            return e(l.f).getErrorForSelector("getReport", [P])
                        })),
                        R = E((function(e) {
                            return e(l.f).getServiceReportURL("visitors-overview", function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? T(Object(n), !0).forEach((function(t) {
                                        r()(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                "_r.drilldown": c
                            }, Object(h.a)({
                                startDate: D,
                                endDate: w,
                                compareStartDate: I,
                                compareEndDate: j
                            })))
                        })),
                        x = _((function(e) {
                            return e(l.f).getReport(P)
                        }));
                    if (E((function(e) {
                            return !e(l.f).hasFinishedResolution("getReport", [P])
                        }))) return e.createElement(m.a, {
                        width: "100%",
                        height: "202px"
                    });
                    if (C) return e.createElement(g, {
                        moduleSlug: "analytics",
                        error: C
                    });
                    if (!A && k && Object(b.l)(x)) return e.createElement(s, {
                        moduleSlug: "analytics"
                    });
                    for (var Z = [
                            [{
                                type: "date",
                                label: "Day"
                            }, {
                                type: "number",
                                label: "Bounce Rate"
                            }]
                        ], M = (null == x || null === (n = x[0]) || void 0 === n || null === (a = n.data) || void 0 === a ? void 0 : a.rows) || [], G = Math.ceil(M.length / 2); G < M.length; G++) {
                        var L = M[G].metrics[0].values,
                            U = M[G].dimensions[0],
                            F = Object(v.a)(U);
                        Z.push([F, L[0]])
                    }
                    var B = x[0].data.totals,
                        W = B[0].values[0] / 100,
                        H = B[1].values[0] / 100,
                        z = Object(y.a)(H, W);
                    return e.createElement(f.a, {
                        className: "overview-bounce-rate",
                        title: Object(i.__)("Bounce Rate", "google-site-kit"),
                        datapoint: W,
                        datapointUnit: "%",
                        change: z,
                        changeDataUnit: "%",
                        invertChangeColor: !0,
                        source: {
                            name: Object(i._x)("Analytics", "Service name", "google-site-kit"),
                            link: R,
                            external: !0
                        },
                        sparkline: e.createElement(p.a, {
                            data: Z,
                            change: z,
                            gatheringData: k
                        }),
                        gatheringData: k
                    })
                }))
            }).call(this, n(3))
        },
        766: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(17),
                    r = n.n(a),
                    i = n(6),
                    o = n.n(i),
                    c = n(1),
                    s = n(109),
                    l = n(4),
                    u = n.n(l),
                    d = n(10),
                    g = n(13),
                    m = n(15),
                    f = n(93),
                    p = n(82),
                    y = n(74),
                    v = n(256),
                    b = n(96),
                    h = n(137),
                    O = n(149),
                    T = n(11),
                    E = n(196),
                    _ = n(61),
                    A = n(234),
                    k = n(30);

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

                function N(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? S(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var I = u.a.useSelect,
                    j = u.a.useInViewSelect;
                t.a = Object(h.a)({
                    moduleName: "analytics"
                })((function DashboardOverallPageMetricsWidget(t) {
                    var n = t.Widget,
                        a = t.WidgetReportZero,
                        i = t.WidgetReportError,
                        o = Object(k.b)("zeroDataStates"),
                        l = j((function(e) {
                            return e(d.f).isGatheringData()
                        })),
                        u = function() {
                            var e = I((function(e) {
                                    return e(g.a).getDateRangeDates({
                                        offsetDays: d.b,
                                        compare: !0
                                    })
                                })),
                                t = I((function(e) {
                                    return e(m.c).getCurrentEntityURL()
                                })),
                                n = N(N({}, e), {}, {
                                    dimensions: ["ga:date"],
                                    metrics: [{
                                        expression: "ga:pageviews",
                                        alias: "Pageviews"
                                    }, {
                                        expression: "ga:uniquePageviews",
                                        alias: "Unique Pageviews"
                                    }, {
                                        expression: "ga:bounceRate",
                                        alias: "Bounce Rate"
                                    }, {
                                        expression: "ga:avgSessionDuration",
                                        alias: "Session Duration"
                                    }],
                                    url: t
                                }),
                                a = Object(O.a)(e);
                            Object(s.a)(t) && (a["explorer-table.plotKeys"] = "[]", a["_r.drilldown"] = "analytics.pagePath:".concat(Object(T.m)(t)));
                            var r = I((function(e) {
                                    return !e(d.f).hasFinishedResolution("getReport", [n])
                                })),
                                i = I((function(e) {
                                    return e(d.f).getErrorForSelector("getReport", [n])
                                })),
                                o = I((function(e) {
                                    return e(d.f).getServiceReportURL("visitors-overview", a)
                                }));
                            return {
                                report: j((function(e) {
                                    return e(d.f).getReport(n)
                                })),
                                serviceURL: o,
                                isLoading: r,
                                error: i
                            }
                        }(),
                        h = u.report,
                        S = u.serviceURL,
                        D = u.isLoading,
                        w = u.error,
                        P = I((function(e) {
                            return e(g.a).getDateRangeNumberOfDays()
                        })),
                        C = function Footer() {
                            return e.createElement(b.a, {
                                className: "googlesitekit-data-block__source",
                                name: Object(c._x)("Analytics", "Service name", "google-site-kit"),
                                href: S,
                                external: !0
                            })
                        };
                    if (D || void 0 === l) return e.createElement(n, {
                        Footer: C
                    }, e.createElement(p.a, {
                        width: "100%",
                        height: "222px"
                    }));
                    if (w) return e.createElement(n, {
                        Footer: C
                    }, e.createElement(i, {
                        moduleSlug: "analytics",
                        error: w
                    }));
                    if (l && Object(_.l)(h) && !o) return e.createElement(n, {
                        Footer: C
                    }, e.createElement(a, {
                        moduleSlug: "analytics"
                    }));
                    var R = function(e) {
                        var t, n, a, i = [{
                                metric: "ga:pageviews",
                                title: Object(c.__)("Pageviews", "google-site-kit"),
                                sparkLineData: [
                                    [{
                                        type: "date",
                                        label: "Day"
                                    }, {
                                        type: "number",
                                        label: "Pageviews"
                                    }]
                                ],
                                total: 0,
                                change: 0
                            }, {
                                metric: "ga:uniquePageviews",
                                title: Object(c.__)("Unique Pageviews", "google-site-kit"),
                                sparkLineData: [
                                    [{
                                        type: "date",
                                        label: "Day"
                                    }, {
                                        type: "number",
                                        label: "Unique Pageviews"
                                    }]
                                ],
                                total: 0,
                                change: 0
                            }, {
                                metric: "ga:bounceRate",
                                title: Object(c.__)("Bounce Rate", "google-site-kit"),
                                sparkLineData: [
                                    [{
                                        type: "date",
                                        label: "Day"
                                    }, {
                                        type: "number",
                                        label: "Bounce Rate"
                                    }]
                                ],
                                datapointUnit: "%",
                                datapointDivider: 100,
                                total: 0,
                                change: 0
                            }, {
                                metric: "ga:avgSessionDuration",
                                title: Object(c.__)("Session Duration", "google-site-kit"),
                                sparkLineData: [
                                    [{
                                        type: "date",
                                        label: "Day"
                                    }, {
                                        type: "number",
                                        label: "Session Duration"
                                    }]
                                ],
                                datapointUnit: "s",
                                total: 0,
                                change: 0
                            }],
                            o = (null == e || null === (t = e[0]) || void 0 === t ? void 0 : t.data) || {},
                            s = o.totals,
                            l = void 0 === s ? [] : s,
                            u = o.rows,
                            d = void 0 === u ? [] : u,
                            g = (null === (n = l[0]) || void 0 === n ? void 0 : n.values) || [],
                            m = (null === (a = l[1]) || void 0 === a ? void 0 : a.values) || [];
                        return i.map((function(e, t) {
                            for (var n = e.datapointDivider, a = void 0 === n ? 1 : n, i = r()(e, ["datapointDivider"]), o = Math.ceil(d.length / 2); o < d.length; o++) {
                                var c = d[o].metrics[0].values,
                                    s = d[o].dimensions[0],
                                    l = Object(E.a)(s);
                                i.sparkLineData.push([l, c[t]])
                            }
                            return i.total = (g[t] || 0) / a, i.change = Object(T.a)(m[t] || 0, g[t] || 0), i
                        }))
                    }(h);
                    return e.createElement(n, {
                        Header: function Header() {
                            return e.createElement(A.a, {
                                title: Object(c.sprintf)(
                                    /* translators: %s: number of days */
                                    Object(c._n)("Overall page metrics over the last %s day", "Overall page metrics over the last %s days", P, "google-site-kit"), P)
                            })
                        },
                        Footer: C
                    }, e.createElement(f.b, null, e.createElement(f.c, null, R.map((function(t) {
                        var n = t.metric,
                            a = t.title,
                            r = t.sparkLineData,
                            i = t.datapointUnit,
                            o = t.total,
                            c = t.change;
                        return e.createElement(f.a, {
                            key: n,
                            smSize: 2,
                            lgSize: 3
                        }, e.createElement(y.a, {
                            title: a,
                            datapoint: o,
                            datapointUnit: i,
                            change: c,
                            changeDataUnit: "%",
                            gatheringData: l,
                            sparkline: e.createElement(v.a, {
                                data: r,
                                change: c,
                                gatheringData: l
                            })
                        }))
                    })))))
                }))
            }).call(this, n(3))
        },
        767: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Overview
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(12),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(1),
                    u = n(4),
                    d = n.n(u),
                    g = n(10),
                    m = n(7),
                    f = n(74),
                    p = n(11);

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
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var b = d.a.useInViewSelect;

                function h(e, t) {
                    var n, a, r, i, c, s, l, u, d, g, m, f, y = o()(e, 1),
                        v = y[0],
                        b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    return {
                        datapoint: (null == v || null === (n = v.data) || void 0 === n || null === (a = n.totals) || void 0 === a || null === (r = a[0]) || void 0 === r || null === (i = r.values) || void 0 === i ? void 0 : i[t]) / b,
                        change: Object(p.a)(null == v || null === (c = v.data) || void 0 === c || null === (s = c.totals) || void 0 === s || null === (l = s[1]) || void 0 === l || null === (u = l.values) || void 0 === u ? void 0 : u[t], null == v || null === (d = v.data) || void 0 === d || null === (g = d.totals) || void 0 === g || null === (m = g[0]) || void 0 === m || null === (f = m.values) || void 0 === f ? void 0 : f[t])
                    }
                }

                function Overview(t) {
                    var n = t.report,
                        a = t.selectedStat,
                        r = t.handleStatSelection,
                        i = b((function(e) {
                            return e(g.f).isGatheringData()
                        })),
                        o = [v({
                            title: Object(l.__)("Users", "google-site-kit"),
                            className: "googlesitekit-data-block--users googlesitekit-data-block--button-1"
                        }, h(n, 0)), v({
                            title: Object(l.__)("Sessions", "google-site-kit"),
                            className: "googlesitekit-data-block--sessions googlesitekit-data-block--button-2"
                        }, h(n, 1)), v({
                            title: Object(l.__)("Bounce Rate", "google-site-kit"),
                            className: "googlesitekit-data-block--bounce googlesitekit-data-block--button-3",
                            datapointUnit: "%",
                            invertChangeColor: !0
                        }, h(n, 2, 100)), v({
                            title: Object(l.__)("Session Duration", "google-site-kit"),
                            className: "googlesitekit-data-block--duration googlesitekit-data-block--button-4",
                            datapointUnit: "s"
                        }, h(n, 3))];
                    return e.createElement(m.b, null, e.createElement(m.l, null, o.map((function(t, n) {
                        return e.createElement(m.a, {
                            key: n,
                            smSize: 2,
                            mdSize: 2,
                            lgSize: 3
                        }, e.createElement(f.a, {
                            stat: n,
                            className: t.className,
                            title: t.title,
                            datapoint: t.datapoint,
                            change: t.change,
                            changeDataUnit: "%",
                            context: "button",
                            selected: a === n,
                            handleStatSelection: r,
                            datapointUnit: t.datapointUnit,
                            invertChangeColor: t.invertChangeColor,
                            gatheringData: i
                        }))
                    }))))
                }
                Overview.propTypes = {
                    report: s.a.arrayOf(s.a.object),
                    selectedStat: s.a.number.isRequired,
                    handleStatSelection: s.a.func.isRequired
                }
            }).call(this, n(3))
        },
        768: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SiteStats
                }));
                var a = n(6),
                    r = n.n(a),
                    i = n(12),
                    o = n.n(i),
                    c = n(0),
                    s = n.n(c),
                    l = n(4),
                    u = n.n(l),
                    d = n(13),
                    g = n(61),
                    m = n(202),
                    f = n(7);

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

                function y(e) {
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
                var v = u.a.useSelect;

                function SiteStats(t) {
                    var n, a, r = t.selectedStat,
                        i = t.report,
                        c = void 0 === i ? [] : i,
                        s = t.gatheringData,
                        l = v((function(e) {
                            return e(d.a).getDateRangeNumberOfDays()
                        })),
                        u = Object(g.a)(c, r, l, 0, 1);
                    "timeofday" === (null === (n = u[0][r]) || void 0 === n ? void 0 : n.type) && (a = Object(g.c)(u, r));
                    var p = u.slice(1).map((function(e) {
                            return o()(e, 1)[0]
                        })),
                        b = y(y({}, SiteStats.options), {}, {
                            hAxis: y(y({}, SiteStats.options.hAxis), {}, {
                                ticks: p
                            }),
                            vAxis: y(y({}, SiteStats.options.vAxis), {}, {
                                format: a
                            }),
                            series: {
                                0: {
                                    color: SiteStats.colorMap[r],
                                    targetAxisIndex: 0
                                },
                                1: {
                                    color: SiteStats.colorMap[r],
                                    targetAxisIndex: 0,
                                    lineDashStyle: [3, 3],
                                    lineWidth: 1
                                }
                            }
                        });
                    return Object(g.l)(c) ? b.vAxis.viewWindow.max = 100 : b.vAxis.viewWindow.max = void 0, e.createElement(f.b, {
                        className: "googlesitekit-analytics-site-stats"
                    }, e.createElement(f.l, null, e.createElement(f.a, {
                        size: 12
                    }, e.createElement(m.a, {
                        chartType: "LineChart",
                        data: u,
                        options: b,
                        gatheringData: s,
                        loadingHeight: "270px",
                        loadingWidth: "100%"
                    }))))
                }
                SiteStats.propTypes = {
                    selectedStat: s.a.number.isRequired,
                    report: s.a.arrayOf(s.a.object),
                    gatheringData: s.a.bool
                }, SiteStats.colorMap = {
                    0: "#4285f4",
                    1: "#27bcd4",
                    2: "#1b9688",
                    3: "#673ab7"
                }, SiteStats.options = {
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
            }).call(this, n(3))
        },
        769: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AcquisitionChannelsTable
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    s = n(13),
                    l = n(11),
                    u = n(770),
                    d = n(245),
                    g = n(92),
                    m = c.a.useSelect;

                function AcquisitionChannelsTable(t) {
                    var n, a, r, o, c, f, p, y = t.report,
                        v = t.gatheringData,
                        b = m((function(e) {
                            return e(s.a).getDateRangeNumberOfDays()
                        })),
                        h = null == y || null === (n = y[0]) || void 0 === n || null === (a = n.data) || void 0 === a || null === (r = a.totals) || void 0 === r || null === (o = r[0]) || void 0 === o || null === (c = o.values) || void 0 === c ? void 0 : c[1],
                        O = -1,
                        T = [{
                            title: Object(i.__)("Channel", "google-site-kit"),
                            tooltip: Object(i.__)("Channel refers to where your traffic originated from", "google-site-kit"),
                            Component: function Component(t) {
                                var n = t.row;
                                return e.createElement("span", null, n.dimensions[0])
                            }
                        }, {
                            title: Object(i.__)("Users", "google-site-kit"),
                            tooltip: Object(i.__)("Number of users that originated from that traffic", "google-site-kit"),
                            field: "metrics.0.values.0",
                            Component: function Component(t) {
                                var n = t.fieldValue;
                                return e.createElement("span", null, Object(l.r)(n, {
                                    style: "decimal"
                                }))
                            }
                        }, {
                            title: Object(i.__)("New Users", "google-site-kit"),
                            tooltip: Object(i.sprintf)(
                                /* translators: %s: number of days */
                                Object(i._n)("Number of new users to visit your page over last %s day", "Number of new users to visit your page over last %s days", b, "google-site-kit"), b),
                            field: "metrics.0.values.1",
                            Component: function Component(t) {
                                var n = t.fieldValue;
                                return e.createElement("span", null, Object(l.r)(n, {
                                    style: "decimal"
                                }))
                            }
                        }, {
                            title: Object(i.__)("Sessions", "google-site-kit"),
                            tooltip: Object(i.sprintf)(
                                /* translators: %s: number of days */
                                Object(i._n)("Number of sessions users had on your website over last %s day", "Number of sessions users had on your website over last %s days", b, "google-site-kit"), b),
                            field: "metrics.0.values.2",
                            Component: function Component(t) {
                                var n = t.fieldValue;
                                return e.createElement("span", null, Object(l.r)(n, {
                                    style: "decimal"
                                }))
                            }
                        }, {
                            title: Object(i.__)("Percentage", "google-site-kit"),
                            tooltip: Object(i.__)("Percentage of sessions", "google-site-kit"),
                            field: "metrics.0.values.1",
                            Component: function Component(t) {
                                var n = t.fieldValue,
                                    a = 0;
                                return 0 < h && (a = n / h), O += 1, e.createElement("div", {
                                    key: "minichart-analytics-top-as-" + O,
                                    className: "googlesitekit-table__body-item-chart-wrap"
                                }, Object(l.r)(isFinite(a) ? a : 0, "%"), e.createElement(u.a, {
                                    change: a,
                                    index: O
                                }))
                            }
                        }];
                    return e.createElement("div", {
                        className: "googlesitekit-details-widget"
                    }, e.createElement(d.a, {
                        rows: (null == y || null === (f = y[0]) || void 0 === f || null === (p = f.data) || void 0 === p ? void 0 : p.rows) || [],
                        columns: T,
                        zeroState: g.t,
                        gatheringData: v
                    }))
                }
                AcquisitionChannelsTable.propTypes = {
                    report: r.a.arrayOf(r.a.object),
                    gatheringData: r.a.bool
                }
            }).call(this, n(3))
        },
        770: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n(0),
                    r = n.n(a),
                    i = n(202);

                function MiniChart(t) {
                    var n = t.index,
                        a = t.change,
                        r = {
                            backgroundColor: "transparent",
                            chartArea: {
                                width: "100%",
                                height: "100%"
                            },
                            enableInteractivity: !1,
                            height: 28,
                            legend: {
                                position: "none"
                            },
                            slices: {
                                0: {
                                    color: ["#178EC5", "#54B23B", "#EB5729", "#ECED33", "#34CBE3", "#82E88E"][n]
                                },
                                1: {
                                    color: "#e6e6e6"
                                }
                            },
                            title: null,
                            tooltip: {
                                trigger: "none"
                            },
                            width: 28
                        },
                        o = +(100 * a).toFixed(1),
                        c = [
                            ["source", "percent"],
                            ["", o],
                            ["", 100 - o]
                        ];
                    return e.createElement("div", {
                        className: "googlesitekit-mini-chart"
                    }, e.createElement(i.a, {
                        chartType: "PieChart",
                        data: c,
                        loadingHeight: "24px",
                        options: r
                    }))
                }
                MiniChart.propTypes = {
                    index: r.a.number.isRequired,
                    change: r.a.number.isRequired
                }, t.a = MiniChart
            }).call(this, n(3))
        },
        771: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return PieChart
                }));
                var a = n(0),
                    r = n.n(a),
                    i = n(202),
                    o = n(61);

                function PieChart(t) {
                    var n = t.report,
                        a = t.gatheringData,
                        r = Object(o.b)(n, {
                            keyColumnIndex: 1
                        });
                    return e.createElement("div", {
                        className: "googlesitekit-chart googlesitekit-chart--pie"
                    }, e.createElement(i.a, {
                        data: r,
                        options: PieChart.options,
                        gatheringData: a,
                        chartType: "PieChart",
                        id: "overview-piechart",
                        loadingHeight: "230px",
                        loadingWidth: "230px"
                    }))
                }
                PieChart.options = {
                    chartArea: {
                        width: "100%",
                        height: "100%"
                    },
                    backgroundColor: "transparent",
                    height: 250,
                    legend: {
                        alignment: "center",
                        textStyle: {
                            color: "#5b5b61",
                            fontSize: 12
                        }
                    },
                    slices: {
                        0: {
                            color: "#178EC5"
                        },
                        1: {
                            color: "#54B23B"
                        },
                        2: {
                            color: "#EB5729"
                        },
                        3: {
                            color: "#ECED33"
                        },
                        4: {
                            color: "#34CBE3"
                        },
                        5: {
                            color: "#82E88E"
                        }
                    },
                    title: null,
                    width: "100%"
                }, PieChart.propTypes = {
                    report: r.a.arrayOf(r.a.object),
                    gatheringData: r.a.bool
                }
            }).call(this, n(3))
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
                        g = t.tabletHeight,
                        m = t.desktopWidth,
                        f = t.desktopHeight,
                        p = Object(c.e)(),
                        y = a,
                        v = r;
                    return c.b === p && l && u && (y = l, v = u), c.c === p && d && g && (y = d, v = g), (c.d === p || c.a === p) && m && f && (y = m, v = f), e.createElement("div", {
                        className: o()("googlesitekit-preview-block", n, {
                            "googlesitekit-preview-block--padding": s
                        }),
                        style: {
                            width: y,
                            height: v
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
                        var t, n, a, r, i, o, c, s, l, u, d, g, m, f, p;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (n = t.data) || void 0 === n || null === (a = n.rows) || void 0 === a ? void 0 : a.length) || (null == e || null === (r = e[0]) || void 0 === r || null === (i = r.data) || void 0 === i || null === (o = i.rows) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (s = c.metrics) || void 0 === s || null === (l = s[0]) || void 0 === l || null === (u = l.values) || void 0 === u ? void 0 : u[0]) === (null == e || null === (d = e[0]) || void 0 === d || null === (g = d.data) || void 0 === g || null === (m = g.totals) || void 0 === m || null === (f = m[0]) || void 0 === f || null === (p = f.values) || void 0 === p ? void 0 : p[0])
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
                    return m
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

                function g(e) {
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

                function m(t, n, a, i) {
                    var o = Object(l.a)(n);
                    return function() {
                        var n = s()(r.a.mark((function n(c, s, l, d) {
                            var m, f, p, y, v, b, h, O, T, E;
                            return r.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (y = t.activeModules, v = t.referenceSiteURL, b = t.trackingEnabled, h = t.trackingID, O = t.userIDHash, b) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return a(), T = null !== (m = null === (f = e._googlesitekitUserData) || void 0 === f || null === (p = f.user) || void 0 === p ? void 0 : p.roles) && void 0 !== m ? m : [], E = {
                                            send_to: h,
                                            event_category: c,
                                            event_label: l,
                                            value: d,
                                            dimension1: v,
                                            dimension2: T.join(","),
                                            dimension3: O,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(u.a).join(","),
                                            dimension6: y.join(",")
                                        }, n.abrupt("return", new Promise((function(e) {
                                            var t, n, a = setTimeout((function() {
                                                    i.console.warn('Tracking event "'.concat(s, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                r = function() {
                                                    clearTimeout(a), e()
                                                };
                                            o("event", s, g(g({}, E), {}, {
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
                return g.a
            })), n.d(t, "n", (function() {
                return m.a
            })), n.d(t, "l", (function() {
                return f.a
            })), n.d(t, "o", (function() {
                return p.a
            })), n.d(t, "p", (function() {
                return y.a
            })), n.d(t, "q", (function() {
                return v.a
            })), n.d(t, "r", (function() {
                return b.c
            })), n.d(t, "s", (function() {
                return h.a
            })), n.d(t, "k", (function() {
                return O.a
            })), n.d(t, "m", (function() {
                return T.a
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
                g = n(353),
                m = n(354),
                f = n(299),
                p = n(355),
                y = n(356),
                v = n(357),
                b = n(300),
                h = n(358),
                O = n(359),
                T = n(280),
                E = n(0),
                _ = n.n(E),
                A = n(1),
                k = n(4),
                S = n.n(k),
                N = n(15),
                I = S.a.useSelect;

            function ZeroDataMessage(e) {
                var t = e.skipPrefix,
                    n = I((function(e) {
                        return e(N.c).getCurrentEntityURL()
                    })) ? Object(A.__)("Your page hasn’t gotten any visitors yet", "google-site-kit") : Object(A.__)("Your site hasn’t gotten any visitors yet", "google-site-kit");
                return t ? n : Object(A.sprintf)(
                    /* translators: %s: message explaining why there is no data */
                    Object(A.__)("No data to display: %s", "google-site-kit"), n)
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
        98: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "b", (function() {
                return b
            }));
            var a = n(17),
                r = n.n(a),
                i = n(6),
                o = n.n(i),
                c = n(5),
                s = n.n(c),
                l = n(9),
                u = n.n(l),
                d = n(4),
                g = n.n(d),
                m = n(40),
                f = g.a.createRegistryControl,
                p = function(e) {
                    var t;
                    u()(e, "storeName is required to create a snapshot store.");
                    var n = {},
                        a = {
                            deleteSnapshot: s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
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
                            restoreSnapshot: s.a.mark((function e() {
                                var t, n, a, r, i, o, c = arguments;
                                return s.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = c.length > 0 && void 0 !== c[0] ? c[0] : {}, n = t.clearAfterRestore, a = void 0 === n || n, e.next = 4, {
                                                payload: {},
                                                type: "RESTORE_SNAPSHOT"
                                            };
                                        case 4:
                                            if (r = e.sent, i = r.cacheHit, o = r.value, !i) {
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
                                            if (!a) {
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
                            createSnapshot: s.a.mark((function e() {
                                var t;
                                return s.a.wrap((function(e) {
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
                            return Object(m.a)("datastore::cache::".concat(e))
                        })), o()(t, "CREATE_SNAPSHOT", f((function(t) {
                            return function() {
                                return Object(m.d)("datastore::cache::".concat(e), t.stores[e].store.getState())
                            }
                        }))), o()(t, "RESTORE_SNAPSHOT", (function() {
                            return Object(m.b)("datastore::cache::".concat(e), 3600)
                        })), t);
                    return {
                        initialState: n,
                        actions: a,
                        controls: i,
                        reducer: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                a = t.type,
                                i = t.payload;
                            switch (a) {
                                case "SET_STATE_FROM_SNAPSHOT":
                                    var o = i.snapshot,
                                        c = (o.error, r()(o, ["error"]));
                                    return c;
                                default:
                                    return e
                            }
                        }
                    }
                },
                y = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.a;
                    return Object.values(e.stores).filter((function(e) {
                        return Object.keys(e.getActions()).includes("restoreSnapshot")
                    }))
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.a;
                    return Promise.all(y(e).map((function(e) {
                        return e.getActions().createSnapshot()
                    })))
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.a;
                    return Promise.all(y(e).map((function(e) {
                        return e.getActions().restoreSnapshot()
                    })))
                }
        }
    },
    [
        [1081, 1, 0]
    ]
]);
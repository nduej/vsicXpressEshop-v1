(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [26], {
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
                return u
            })), n.d(t, "k", (function() {
                return s
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "b", (function() {
                return g
            })), n.d(t, "s", (function() {
                return f
            })), n.d(t, "r", (function() {
                return d
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
                return j
            })), n.d(t, "i", (function() {
                return _
            }));
            var r = "modules/analytics",
                a = "account_create",
                i = "property_create",
                o = "profile_create",
                c = "analyticsAccountCreate",
                u = "analyticsSetup",
                s = "https://www.googleapis.com/auth/analytics.provision",
                l = "https://www.googleapis.com/auth/analytics.edit",
                g = 1,
                f = "dashboardAllTrafficWidgetDimensionName",
                d = "dashboardAllTrafficWidgetDimensionColor",
                p = "dashboardAllTrafficWidgetDimensionValue",
                m = "dashboardAllTrafficWidgetActiveRowIndex",
                v = "dashboardAllTrafficWidgetLoaded",
                b = "legacy",
                h = "ua",
                y = "ga4",
                O = "ga4-transitional",
                j = "ua",
                _ = "ga4"
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
                    u = n.n(c),
                    s = n(0),
                    l = n.n(s),
                    g = n(8),
                    f = n.n(g);

                function Cell(t) {
                    var n, r = t.className,
                        i = t.alignTop,
                        c = t.alignMiddle,
                        s = t.alignBottom,
                        l = t.alignRight,
                        g = t.alignLeft,
                        d = t.smAlignRight,
                        p = t.mdAlignRight,
                        m = t.lgAlignRight,
                        v = t.smSize,
                        b = t.smStart,
                        h = t.smOrder,
                        y = t.mdSize,
                        O = t.mdStart,
                        j = t.mdOrder,
                        _ = t.lgSize,
                        S = t.lgStart,
                        k = t.lgOrder,
                        w = t.size,
                        E = t.children,
                        A = u()(t, ["className", "alignTop", "alignMiddle", "alignBottom", "alignRight", "alignLeft", "smAlignRight", "mdAlignRight", "lgAlignRight", "smSize", "smStart", "smOrder", "mdSize", "mdStart", "mdOrder", "lgSize", "lgStart", "lgOrder", "size", "children"]);
                    return e.createElement("div", a()({}, A, {
                        className: f()(r, "mdc-layout-grid__cell", (n = {
                            "mdc-layout-grid__cell--align-top": i,
                            "mdc-layout-grid__cell--align-middle": c,
                            "mdc-layout-grid__cell--align-bottom": s,
                            "mdc-layout-grid__cell--align-right": l,
                            "mdc-layout-grid__cell--align-left": g,
                            "mdc-layout-grid__cell--align-right-phone": d,
                            "mdc-layout-grid__cell--align-right-tablet": p,
                            "mdc-layout-grid__cell--align-right-desktop": m
                        }, o()(n, "mdc-layout-grid__cell--span-".concat(w), 12 >= w && w > 0), o()(n, "mdc-layout-grid__cell--span-".concat(_, "-desktop"), 12 >= _ && _ > 0), o()(n, "mdc-layout-grid__cell--start-".concat(S, "-desktop"), 12 >= S && S > 0), o()(n, "mdc-layout-grid__cell--order-".concat(k, "-desktop"), 12 >= k && k > 0), o()(n, "mdc-layout-grid__cell--span-".concat(y, "-tablet"), 8 >= y && y > 0), o()(n, "mdc-layout-grid__cell--start-".concat(O, "-tablet"), 8 >= O && O > 0), o()(n, "mdc-layout-grid__cell--order-".concat(j, "-tablet"), 8 >= j && j > 0), o()(n, "mdc-layout-grid__cell--span-".concat(v, "-phone"), 4 >= v && v > 0), o()(n, "mdc-layout-grid__cell--start-".concat(b, "-phone"), 4 >= b && b > 0), o()(n, "mdc-layout-grid__cell--order-".concat(h, "-phone"), 4 >= h && h > 0), n))
                    }), E)
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
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    u = n.n(c),
                    s = n(8),
                    l = n.n(s);

                function Row(t) {
                    var n = t.className,
                        r = t.children,
                        i = o()(t, ["className", "children"]);
                    return e.createElement("div", a()({
                        className: l()("mdc-layout-grid__inner", n)
                    }, i), r)
                }
                Row.propTypes = {
                    className: u.a.string,
                    children: u.a.node
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
                    u = n.n(c),
                    s = n(8),
                    l = n.n(s),
                    g = n(2),
                    f = Object(g.forwardRef)((function(t, n) {
                        var r = t.alignLeft,
                            i = t.fill,
                            c = t.className,
                            u = t.children,
                            s = o()(t, ["alignLeft", "fill", "className", "children"]);
                        return e.createElement("div", a()({
                            className: l()("mdc-layout-grid", c, {
                                "mdc-layout-grid--align-left": r,
                                "mdc-layout-grid--fill": i
                            })
                        }, s, {
                            ref: n
                        }), u)
                    }));
                f.propTypes = {
                    alignLeft: u.a.bool,
                    fill: u.a.bool,
                    className: u.a.string,
                    children: u.a.node
                }, f.defaultProps = {
                    className: ""
                }, t.a = f
            }).call(this, n(3))
        },
        1083: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4),
                a = n.n(r),
                i = n(136),
                o = n.n(i),
                c = n(1),
                u = (n(533), n(534), n(713)),
                s = n(714),
                l = (n(540), n(715)),
                g = n(556),
                f = n(25),
                d = n(98),
                p = n(6),
                m = n.n(p),
                v = n(17),
                b = n.n(v),
                h = n(5),
                y = n.n(h),
                O = n(14),
                j = n.n(O),
                _ = n(9),
                S = n.n(_),
                k = n(33),
                w = n.n(k),
                E = n(36),
                A = n(258),
                C = n(157),
                D = n(22),
                I = n(15),
                P = n(10),
                x = n(73);

            function N() {
                return (N = j()(y.a.mark((function e(t) {
                    var n, r, a, i, o, c, u, s, l, g, d, p, m;
                    return y.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.select, r = t.dispatch, a = n(f.g).getAccountID(), n(f.g).getContainerID() !== f.b) {
                                    e.next = 16;
                                    break
                                }
                                return i = n(E.a).getValue(f.f, "containerName"), e.next = 7, r(f.g).createContainer(a, f.d, {
                                    containerName: i
                                });
                            case 7:
                                if (o = e.sent, c = o.response, !(u = o.error)) {
                                    e.next = 12;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: u
                                });
                            case 12:
                                return e.next = 14, r(f.g).setContainerID(c.publicId);
                            case 14:
                                return e.next = 16, r(f.g).setInternalContainerID(c.containerId);
                            case 16:
                                if (n(f.g).getAMPContainerID() !== f.b) {
                                    e.next = 30;
                                    break
                                }
                                return s = n(E.a).getValue(f.f, "ampContainerName"), e.next = 21, r(f.g).createContainer(a, f.c, {
                                    containerName: s
                                });
                            case 21:
                                if (l = e.sent, g = l.response, !(d = l.error)) {
                                    e.next = 26;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: d
                                });
                            case 26:
                                return e.next = 28, r(f.g).setAMPContainerID(g.publicId);
                            case 28:
                                return e.next = 30, r(f.g).setInternalAMPContainerID(g.containerId);
                            case 30:
                                if (!n(f.g).haveSettingsChanged()) {
                                    e.next = 41;
                                    break
                                }
                                return e.next = 33, r(f.g).saveSettings();
                            case 33:
                                if (p = e.sent, !(m = p.error)) {
                                    e.next = 37;
                                    break
                                }
                                return e.abrupt("return", {
                                    error: m
                                });
                            case 37:
                                if (!n(D.a).isModuleConnected("analytics")) {
                                    e.next = 41;
                                    break
                                }
                                return e.next = 41, r(P.f).fetchGetSettings();
                            case 41:
                                return e.next = 43, w.a.invalidateCache("modules", "tagmanager");
                            case 43:
                                return e.abrupt("return", {});
                            case 44:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(n), !0).forEach((function(t) {
                        m()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var M, L, F, U, G, q, V, H, B, z, K = o.a.createModuleStore("tagmanager", {
                storeName: f.g,
                settingSlugs: ["accountID", "ampContainerID", "containerID", "internalContainerID", "internalAMPContainerID", "useSnippet", "ownerID", "gaPropertyID"],
                submitChanges: function(e) {
                    return N.apply(this, arguments)
                },
                validateCanSubmitChanges: function(e) {
                    var t = Object(x.e)(e),
                        n = t(f.g),
                        r = n.getAccountID,
                        a = n.getContainerID,
                        i = n.getContainers,
                        o = n.getAMPContainerID,
                        c = n.getInternalContainerID,
                        u = n.getInternalAMPContainerID,
                        s = n.getSingleAnalyticsPropertyID,
                        l = n.hasAnyAnalyticsPropertyID,
                        g = n.hasExistingTag,
                        d = n.hasExistingTagPermission,
                        p = n.hasMultipleAnalyticsPropertyIDs,
                        m = n.haveSettingsChanged,
                        v = n.isDoingSubmitChanges,
                        b = t(I.c),
                        h = b.isAMP,
                        y = b.isSecondaryAMP,
                        O = t(D.a).isModuleActive,
                        j = t(P.f).getPropertyID,
                        _ = r();
                    if (S()(!v(), C.a), S()(m(), C.b), S()(Object(A.c)(_), "a valid accountID is required to submit changes"), a() === f.b) {
                        var k = e(E.a).getValue(f.f, "containerName");
                        S()(Object(A.e)(k), "a valid container name is required to submit changes");
                        var w = i(_),
                            N = Object(A.a)(k);
                        S()(Object(A.b)(k, w), 'a container with "'.concat(N, '" name already exists'))
                    }
                    if (h()) {
                        var T = o();
                        if (S()(Object(A.f)(T), "a valid ampContainerID selection is required to submit changes"), Object(A.d)(T) && S()(Object(A.g)(u()), "a valid internalAMPContainerID is required to submit changes"), T === f.b) {
                            var R = e(E.a).getValue(f.f, "ampContainerName");
                            S()(Object(A.e)(R), "a valid container name is required to submit changes");
                            var M = i(_),
                                L = Object(A.a)(R);
                            S()(Object(A.b)(R, M), 'an AMP container with "'.concat(L, '" name already exists'))
                        }
                    }
                    h() && !y() || (S()(Object(A.f)(a()), "a valid containerID selection is required to submit changes"), Object(A.d)(a()) && S()(Object(A.g)(c()), "a valid internalContainerID is required to submit changes")), S()(!p(), "containers with Analytics tags must reference a single property ID to submit changes"), O("analytics") && j() && l() && S()(s() === j(), "single GTM Analytics property ID must match Analytics property ID"), g() && S()(d(), "existing tag permission is required to submit changes")
                }
            });
            L = (M = K).actions, F = M.selectors, U = b()(M, ["actions", "selectors"]), G = L.setAmpContainerID, q = L.setGaPropertyID, V = b()(L, ["setAmpContainerID", "setGaPropertyID"]), H = F.getAmpContainerID, B = F.getGaPropertyID, z = b()(F, ["getAmpContainerID", "getGaPropertyID"]);
            var $ = K = R(R({}, U), {}, {
                    actions: R(R({}, V), {}, {
                        setAMPContainerID: G,
                        setGAPropertyID: q
                    }),
                    selectors: R(R({}, z), {}, {
                        getAMPContainerID: H,
                        getGAPropertyID: B
                    })
                }),
                W = n(23),
                Y = n.n(W),
                X = n(193),
                J = n(45);

            function Z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Q(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Z(Object(n), !0).forEach((function(t) {
                        m()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ee = a.a.createRegistrySelector,
                te = a.a.createRegistryControl,
                ne = Object(J.a)({
                    baseName: "getContainers",
                    argsToParams: function(e) {
                        return {
                            accountID: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID;
                        S()(Object(X.b)(t), "A valid accountID is required to fetch containers.")
                    },
                    controlCallback: function(e) {
                        var t = e.accountID;
                        return w.a.get("modules", "tagmanager", "containers", {
                            accountID: t
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var r = n.accountID;
                        return Q(Q({}, e), {}, {
                            containers: Q(Q({}, e.containers), {}, m()({}, r, t))
                        })
                    }
                }),
                re = Object(J.a)({
                    baseName: "createContainer",
                    argsToParams: function(e, t, n) {
                        return {
                            accountID: e,
                            usageContext: t,
                            containerName: n.containerName
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID,
                            n = e.usageContext,
                            r = e.containerName;
                        S()(Object(X.b)(t), "A valid accountID is required to create a container."), S()(Object(X.h)(n), "A valid usageContext is required to create a container."), S()(Object(X.e)(r), "A valid containerName is required to create a container.")
                    },
                    controlCallback: function(e) {
                        var t = e.accountID,
                            n = e.usageContext,
                            r = e.containerName;
                        return w.a.set("modules", "tagmanager", "create-container", {
                            accountID: t,
                            usageContext: n,
                            name: r
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var r = n.accountID;
                        return Q(Q({}, e), {}, {
                            containers: Q(Q({}, e.containers), {}, m()({}, r, [].concat(Y()(e.containers[r] || []), [t])))
                        })
                    }
                }),
                ae = {
                    createContainer: Object(x.f)((function(e, t, n) {
                        var r = n.containerName;
                        S()(Object(X.b)(e), "A valid accountID is required to create a container."), S()(Object(X.h)(t), "A valid usageContext is required to create a container."), S()(Object(X.e)(r), "A valid containerName is required to create a container.")
                    }), y.a.mark((function e(t, n, r) {
                        var a, i, o, c;
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = r.containerName, e.next = 3, re.actions.fetchCreateContainer(t, n, {
                                        containerName: a
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
                    selectContainerByID: Object(x.f)((function(e) {
                        S()(Object(X.d)(e), "A valid container ID is required to select a container by ID.")
                    }), y.a.mark((function e(t) {
                        var n, r, i, o, c;
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    if (n = e.sent, r = n.select, i = n.dispatch, o = r(f.g).getAccountID(), Object(X.b)(o)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 8:
                                    return e.next = 10, ae.waitForContainers(o);
                                case 10:
                                    if (c = r(f.g).getContainerByID(o, t)) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 13:
                                    c.usageContext.includes(f.d) ? (i(f.g).setContainerID(t), i(f.g).setInternalContainerID(c.containerId)) : c.usageContext.includes(f.c) && (i(f.g).setAMPContainerID(t), i(f.g).setInternalAMPContainerID(c.containerId));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    waitForContainers: Object(x.f)((function(e) {
                        S()(Object(X.b)(e), "A valid accountID is required to wait for containers.")
                    }), y.a.mark((function e(t) {
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        payload: {
                                            accountID: t
                                        },
                                        type: "WAIT_FOR_CONTAINERS"
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                },
                ie = m()({}, "WAIT_FOR_CONTAINERS", te((function(e) {
                    return function(t) {
                        var n = t.payload.accountID;
                        e.select(f.g).getContainers(n);
                        var r = function() {
                            return e.select(f.g).hasFinishedResolution("getContainers", [n])
                        };
                        if (!r()) return new Promise((function(t) {
                            var n = e.subscribe((function() {
                                r() && (n(), t())
                            }))
                        }))
                    }
                }))),
                oe = {
                    getContainers: y.a.mark((function e(t) {
                        var n;
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Object(X.b)(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, a.a.commonActions.getRegistry();
                                case 4:
                                    if (n = e.sent, (0, n.select)(f.g).getContainers(t)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 9, ne.actions.fetchGetContainers(t);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                ce = {
                    getContainerByID: ee((function(e) {
                        return function(t, n, r) {
                            var a = e(f.g).getContainers(n);
                            if (void 0 !== a) return a.find((function(e) {
                                var t = e.publicId;
                                return r === t
                            })) || null
                        }
                    })),
                    getWebContainers: ee((function(e) {
                        return function(t, n) {
                            var r = e(f.g).getContainers(n);
                            if (Array.isArray(r)) return r.filter((function(e) {
                                return e.usageContext.includes(f.d)
                            }))
                        }
                    })),
                    getAMPContainers: ee((function(e) {
                        return function(t, n) {
                            var r = e(f.g).getContainers(n);
                            if (Array.isArray(r)) return r.filter((function(e) {
                                return e.usageContext.includes(f.c)
                            }))
                        }
                    })),
                    getContainers: function(e, t) {
                        return e.containers[t]
                    },
                    isDoingGetContainers: ee((function(e) {
                        return function(t, n) {
                            return e(f.g).isFetchingGetContainers(n)
                        }
                    })),
                    isDoingCreateContainer: function(e) {
                        return Object.values(e.isFetchingCreateContainer).some(Boolean)
                    }
                },
                ue = a.a.combineStores(ne, re, {
                    initialState: {
                        containers: {}
                    },
                    actions: ae,
                    controls: ie,
                    resolvers: oe,
                    selectors: ce
                }),
                se = (ue.initialState, ue.actions),
                le = (ue.controls, ue.reducer, ue.resolvers, ue.selectors, ue);

            function ge(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ge(Object(n), !0).forEach((function(t) {
                        m()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var de = a.a.createRegistrySelector,
                pe = Object(J.a)({
                    baseName: "getAccounts",
                    controlCallback: function() {
                        return w.a.get("modules", "tagmanager", "accounts", null, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t) {
                        return fe(fe({}, e), {}, {
                            accounts: t
                        })
                    }
                }),
                me = {
                    accounts: void 0
                },
                ve = {
                    resetAccounts: y.a.mark((function e() {
                        var t, n;
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    return t = e.sent, n = t.dispatch, e.next = 6, {
                                        payload: {},
                                        type: "RESET_ACCOUNTS"
                                    };
                                case 6:
                                    n(f.g).invalidateResolutionForStoreSelector("getAccounts");
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })),
                    selectAccount: Object(x.f)((function(e) {
                        S()(Object(X.c)(e), "A valid accountID selection is required to select.")
                    }), y.a.mark((function e(t) {
                        var n, r, i, o, c, u, s, l;
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    if (n = e.sent, r = n.select, i = n.dispatch, t !== r(f.g).getAccountID()) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    if (i(f.g).setAccountID(t), i(f.g).setContainerID(""), i(f.g).setInternalContainerID(""), i(f.g).setAMPContainerID(""), i(f.g).setInternalAMPContainerID(""), P.a !== t && !r(f.g).hasExistingTag()) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 14:
                                    return e.next = 16, se.waitForContainers(t);
                                case 16:
                                    o = r(I.c), c = o.isAMP, u = o.isSecondaryAMP, c() && !u() || ((s = r(f.g).getWebContainers(t)).length ? 1 === s.length && (i(f.g).setContainerID(s[0].publicId), i(f.g).setInternalContainerID(s[0].containerId)) : (i(f.g).setContainerID(f.b), i(f.g).setInternalContainerID(""))), c() && ((l = r(f.g).getAMPContainers(t)).length ? 1 === l.length && (i(f.g).setAMPContainerID(l[0].publicId), i(f.g).setInternalAMPContainerID(l[0].containerId)) : (i(f.g).setAMPContainerID(f.b), i(f.g).setInternalAMPContainerID("")));
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                },
                be = {
                    getAccounts: y.a.mark((function e() {
                        var t, n, r, i, o, c;
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, a.a.commonActions.getRegistry();
                                case 2:
                                    if (n = e.sent, r = n.select, i = n.dispatch, o = r(f.g).getAccounts()) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 9, pe.actions.fetchGetAccounts();
                                case 9:
                                    c = e.sent, o = c.response;
                                case 11:
                                    1 !== (null === (t = o) || void 0 === t ? void 0 : t.length) || r(f.g).getAccountID() || i(f.g).selectAccount(o[0].accountId);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                he = {
                    getAccounts: function(e) {
                        return e.accounts
                    },
                    isDoingGetAccounts: de((function(e) {
                        return function() {
                            return e(f.g).isFetchingGetAccounts()
                        }
                    }))
                },
                ye = a.a.combineStores(pe, {
                    initialState: me,
                    actions: ve,
                    reducer: function(e, t) {
                        switch (t.type) {
                            case "RESET_ACCOUNTS":
                                return fe(fe({}, e), {}, {
                                    accounts: void 0,
                                    settings: fe(fe({}, e.settings), {}, {
                                        accountID: void 0,
                                        ampContainerID: void 0,
                                        containerID: void 0,
                                        internalAMPContainerID: void 0,
                                        internalContainerID: void 0
                                    })
                                });
                            default:
                                return e
                        }
                    },
                    resolvers: be,
                    selectors: he
                }),
                Oe = (ye.initialState, ye.actions, ye.controls, ye.reducer, ye.resolvers, ye.selectors, ye),
                je = n(322),
                _e = n(536);

            function Se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Se(Object(n), !0).forEach((function(t) {
                        m()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var we = a.a.createRegistrySelector,
                Ee = Object(J.a)({
                    baseName: "getTagPermission",
                    argsToParams: function(e) {
                        return {
                            containerID: e
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.containerID;
                        S()(Object(X.d)(t), "A valid containerID is required to for fetching permission.")
                    },
                    controlCallback: function(e) {
                        var t = e.containerID;
                        return w.a.get("modules", "tagmanager", "tag-permission", {
                            containerID: t
                        }, {
                            useCache: !1
                        })
                    },
                    reducerCallback: function(e, t, n) {
                        var r = t.accountID,
                            a = t.permission,
                            i = n.containerID;
                        return ke(ke({}, e), {}, {
                            tagPermission: ke(ke({}, e.tagPermission), {}, m()({}, i, {
                                accountID: r,
                                permission: a
                            }))
                        })
                    }
                }),
                Ae = Object(je.a)({
                    storeName: f.g,
                    tagMatchers: _e.a,
                    isValidTag: X.d
                }),
                Ce = {
                    getTagPermission: y.a.mark((function e(t) {
                        var n;
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Object(X.d)(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, a.a.commonActions.getRegistry();
                                case 4:
                                    if (n = e.sent, void 0 !== (0, n.select)(f.g).hasTagPermission(t)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 9, Ee.actions.fetchGetTagPermission(t);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                De = {
                    getTagPermission: function(e, t) {
                        return e.tagPermission[t]
                    },
                    hasTagPermission: we((function(e) {
                        return function(t, n) {
                            var r = (e(f.g).getTagPermission(n) || {}).permission;
                            if (void 0 !== r) return !!r
                        }
                    })),
                    hasExistingTagPermission: we((function(e) {
                        return function() {
                            var t = e(f.g).hasExistingTag();
                            if (void 0 !== t) {
                                if (t) {
                                    var n = e(f.g).getExistingTag();
                                    return e(f.g).hasTagPermission(n)
                                }
                                return null
                            }
                        }
                    }))
                },
                Ie = a.a.combineStores(Ae, Ee, {
                    initialState: {
                        tagPermission: {}
                    },
                    resolvers: Ce,
                    selectors: De
                }),
                Pe = (Ie.initialState, Ie.actions, Ie.controls, Ie.reducer, Ie.resolvers, Ie.selectors, Ie),
                xe = n(61);

            function Ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ne(Object(n), !0).forEach((function(t) {
                        m()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Re, Me = a.a.createRegistrySelector,
                Le = Object(J.a)({
                    baseName: "getLiveContainerVersion",
                    argsToParams: function(e, t) {
                        return {
                            accountID: e,
                            internalContainerID: t
                        }
                    },
                    validateParams: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.accountID,
                            n = e.internalContainerID;
                        S()(Object(X.b)(t), "A valid accountID is required to fetch or receive a live container version."), S()(Object(X.g)(n), "A valid internalContainerID is required to fetch or receive a live container version.")
                    },
                    controlCallback: (Re = j()(y.a.mark((function e(t) {
                        var n, r;
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.accountID, r = t.internalContainerID, e.prev = 1, e.next = 4, w.a.get("modules", "tagmanager", "live-container-version", {
                                        accountID: n,
                                        internalContainerID: r
                                    }, {
                                        useCache: !1
                                    });
                                case 4:
                                    return e.abrupt("return", e.sent);
                                case 7:
                                    if (e.prev = 7, e.t0 = e.catch(1), 404 !== e.t0.code) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", null);
                                case 11:
                                    throw e.t0;
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 7]
                        ])
                    }))), function(e) {
                        return Re.apply(this, arguments)
                    }),
                    reducerCallback: function(e, t, n) {
                        var r = n.accountID,
                            a = n.internalContainerID;
                        return Te(Te({}, e), {}, {
                            liveContainerVersions: Te(Te({}, e.liveContainerVersions), {}, m()({}, "".concat(r, "::").concat(a), t))
                        })
                    }
                }),
                Fe = {
                    getLiveContainerVersion: y.a.mark((function e(t, n) {
                        var r;
                        return y.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Object(X.b)(t) && Object(X.g)(n)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, a.a.commonActions.getRegistry();
                                case 4:
                                    if (r = e.sent, void 0 !== (0, r.select)(f.g).getLiveContainerVersion(t, n)) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 9, Le.actions.fetchGetLiveContainerVersion(t, n);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))
                },
                Ue = {
                    getAnalyticsPropertyIDs: Me((function(e) {
                        return function() {
                            var t = e(I.c),
                                n = t.isAMP,
                                r = t.isSecondaryAMP,
                                a = e(f.g).getAccountID();
                            if (!Object(X.b)(a)) return [];
                            var i = new Set,
                                o = e(f.g).getInternalContainerID();
                            n() && !r() || !Object(X.g)(o) || i.add(e(f.g).getLiveContainerAnalyticsPropertyID(a, o));
                            var c = e(f.g).getInternalAMPContainerID();
                            return n() && Object(X.g)(c) && i.add(e(f.g).getLiveContainerAnalyticsPropertyID(a, c)), i.has(void 0) ? void 0 : Array.from(i)
                        }
                    })),
                    getLiveContainerAnalyticsPropertyID: Me((function(e) {
                        return function(t, n, r) {
                            var a = e(f.g).getLiveContainerAnalyticsTag(n, r);
                            if (void 0 !== a) {
                                if (null == a ? void 0 : a.parameter) {
                                    var i, o, c, u = null === (i = a.parameter.find((function(e) {
                                        return "trackingId" === e.key
                                    }))) || void 0 === i ? void 0 : i.value;
                                    if (!u) u = null === (c = a.parameter.find((function(e) {
                                        return "gaSettings" === e.key
                                    }))) || void 0 === c ? void 0 : c.value;
                                    if (null === (o = u) || void 0 === o ? void 0 : o.startsWith("{{")) {
                                        var s;
                                        u = u.replace(/(\{\{|\}\})/g, "");
                                        var l = e(f.g).getLiveContainerVariable(n, r, u);
                                        u = null == l || null === (s = l.parameter.find((function(e) {
                                            return "trackingId" === e.key
                                        }))) || void 0 === s ? void 0 : s.value
                                    }
                                    if (Object(xe.j)(u)) return u
                                }
                                return null
                            }
                        }
                    })),
                    getLiveContainerAnalyticsTag: Me((function(e) {
                        return function(t, n, r) {
                            var a = e(f.g).getLiveContainerVersion(n, r);
                            if (void 0 !== a) {
                                if (null == a ? void 0 : a.tag) {
                                    var i = a.container.usageContext[0] === f.d ? "ua" : "ua_amp";
                                    return a.tag.find((function(e) {
                                        return e.type === i
                                    })) || null
                                }
                                return null
                            }
                        }
                    })),
                    getLiveContainerVariable: Me((function(e) {
                        return function(t, n, r, a) {
                            var i = e(f.g).getLiveContainerVersion(n, r);
                            if (void 0 !== i) return (null == i ? void 0 : i.variable) && i.variable.find((function(e) {
                                return e.name === a
                            })) || null
                        }
                    })),
                    getLiveContainerVersion: function(e, t, n) {
                        return e.liveContainerVersions["".concat(t, "::").concat(n)]
                    },
                    getSingleAnalyticsPropertyID: Me((function(e) {
                        return function() {
                            var t = e(f.g).getAnalyticsPropertyIDs();
                            if (void 0 !== t) return 1 === t.length && t[0]
                        }
                    })),
                    hasAnyAnalyticsPropertyID: Me((function(e) {
                        return function() {
                            var t = e(f.g).getAnalyticsPropertyIDs();
                            if (void 0 !== t) return t.some((function(e) {
                                return null !== e
                            }))
                        }
                    })),
                    hasMultipleAnalyticsPropertyIDs: Me((function(e) {
                        return function() {
                            var t = e(f.g).getAnalyticsPropertyIDs();
                            if (void 0 !== t) return t.length > 1
                        }
                    })),
                    isDoingGetLiveContainerVersion: Me((function(e) {
                        return function(t, n, r) {
                            return e(f.g).isFetchingGetLiveContainerVersion(n, r)
                        }
                    }))
                },
                Ge = a.a.combineStores(Le, {
                    initialState: {
                        liveContainerVersions: {}
                    },
                    resolvers: Fe,
                    selectors: Ue
                }),
                qe = (Ge.initialState, Ge.actions, Ge.controls, Ge.reducer, Ge.resolvers, Ge.selectors, Ge),
                Ve = n(287),
                He = n(13);

            function Be(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Be(Object(n), !0).forEach((function(t) {
                        m()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Be(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ke = {
                    selectors: {
                        getServiceURL: (0, a.a.createRegistrySelector)((function(e) {
                            return function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = n.path,
                                    a = n.query,
                                    i = e(He.a).getEmail();
                                if (void 0 !== i) {
                                    var o = "https://tagmanager.google.com/",
                                        c = a ? ze(ze({}, a), {}, {
                                            authuser: i
                                        }) : {
                                            authuser: i
                                        },
                                        u = Object(Ve.a)(o, c);
                                    if (r) {
                                        var s = "/".concat(r.replace(/^\//, ""));
                                        return "".concat(u, "#").concat(s)
                                    }
                                    return u
                                }
                            }
                        }))
                    }
                },
                $e = a.a.combineStores($, Oe, le, Pe, qe, Object(d.a)(f.g), Ke);
            $e.initialState, $e.actions, $e.controls, $e.reducer, $e.resolvers, $e.selectors;
            a.a.registerStore(f.g, $e), o.a.registerModule("tagmanager", {
                storeName: f.g,
                SettingsEditComponent: s.a,
                SettingsViewComponent: l.a,
                SetupComponent: u.a,
                Icon: g.a,
                features: [Object(c.__)("Create tags without updating code", "google-site-kit")]
            })
        },
        11: function(e, t, n) {
            "use strict";
            n.d(t, "w", (function() {
                return c.b
            })), n.d(t, "t", (function() {
                return u.a
            })), n.d(t, "x", (function() {
                return u.b
            })), n.d(t, "v", (function() {
                return d
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
                return j
            })), n.d(t, "g", (function() {
                return _.c
            })), n.d(t, "u", (function() {
                return _.i
            })), n.d(t, "h", (function() {
                return S.b
            })), n.d(t, "n", (function() {
                return S.c
            })), n.d(t, "b", (function() {
                return S.a
            })), n.d(t, "m", (function() {
                return k.b
            })), n.d(t, "i", (function() {
                return k.a
            })), n.d(t, "q", (function() {
                return k.d
            })), n.d(t, "l", (function() {
                return w
            })), n.d(t, "a", (function() {
                return E
            })), n.d(t, "y", (function() {
                return A
            })), n.d(t, "f", (function() {
                return C
            }));
            var r = n(117),
                a = n.n(r),
                i = n(113),
                o = n.n(i),
                c = n(31),
                u = n(63),
                s = n(29),
                l = n.n(s),
                g = n(78),
                f = n.n(g),
                d = function(e) {
                    return f()(JSON.stringify(function e(t) {
                        var n = {};
                        return Object.keys(t).sort().forEach((function(r) {
                            var a = t[r];
                            a && "object" === l()(a) && !Array.isArray(a) && (a = e(a)), n[r] = a
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
            var j = function(e) {
                    return e = parseFloat(e), isNaN(e) || 0 === e ? [0, 0, 0, 0] : [Math.floor(e / 60 / 60), Math.floor(e / 60 % 60), Math.floor(e % 60), Math.floor(1e3 * e) - 1e3 * Math.floor(e)]
                },
                _ = n(59),
                S = n(85),
                k = n(50),
                w = function(e) {
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
                    var n = (t - e) / e;
                    return isNaN(n) || !a()(n) ? null : n
                },
                A = function(e) {
                    try {
                        return JSON.parse(e) && !!e
                    } catch (e) {
                        return !1
                    }
                },
                C = function(e) {
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
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = n(4),
                    u = n.n(c),
                    s = n(191),
                    l = n(22),
                    g = n(89),
                    f = n(143);

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

                function p(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? d(Object(n), !0).forEach((function(t) {
                            a()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
                var m = u.a.useSelect;

                function StoreErrorNotices(t) {
                    var n = t.moduleSlug,
                        r = t.storeName,
                        a = t.shouldDisplayError,
                        i = m((function(e) {
                            return e(r).getErrors()
                        })),
                        o = m((function(e) {
                            return e(l.a).getModule(n)
                        })),
                        c = [];
                    return i.filter((function(e) {
                        return !(!(null == e ? void 0 : e.message) || c.includes(e.message)) && (c.push(e.message), !0)
                    })).map((function(e) {
                        return Object(g.b)(e) && (e = p(p({}, e), {}, {
                            message: Object(f.a)(e.message, o)
                        })), e
                    })).map((function(t, n) {
                        return e.createElement(s.a, {
                            key: n,
                            error: t,
                            shouldDisplayError: a
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
                    a = n.n(r),
                    i = n(8),
                    o = n.n(i),
                    c = n(131),
                    u = n(2),
                    s = n(68),
                    l = n(7),
                    g = function Switch(t) {
                        var n = t.onClick,
                            r = t.label,
                            a = t.checked,
                            i = t.disabled,
                            g = t.hideLabel,
                            f = Object(c.a)(Switch),
                            d = Object(u.useCallback)((function(e) {
                                null !== e && l.j.attachTo(e)
                            }), []),
                            p = Object(u.useCallback)((function(e) {
                                "function" == typeof n && s.c === e.keyCode && n(e)
                            }), [n]),
                            m = "googlesitekit-switch-".concat(f);
                        return e.createElement(u.Fragment, null, e.createElement("div", {
                            "aria-checked": a ? "true" : "false",
                            className: o()("mdc-switch", {
                                "mdc-switch--checked": a,
                                "mdc-switch--disabled": i
                            }),
                            onClick: n,
                            onKeyDown: p,
                            role: "switch",
                            ref: d,
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
                            checked: a,
                            disabled: i,
                            readOnly: !0
                        })))), e.createElement("label", {
                            className: o()({
                                "screen-reader-only": g
                            }),
                            htmlFor: m
                        }, r))
                    };
                g.propTypes = {
                    id: a.a.string,
                    onClick: a.a.func,
                    label: a.a.node.isRequired,
                    checked: a.a.bool,
                    disabled: a.a.bool,
                    hideLabel: a.a.bool
                }, g.defaultProps = {
                    checked: !1,
                    disabled: !1,
                    hideLabel: !0
                }, t.a = g
            }).call(this, n(3))
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
                return u
            }));
            var r = "core/user",
                a = "connected_url_mismatch",
                i = "googlesitekit_setup",
                o = "googlesitekit_view_dashboard",
                c = "googlesitekit_manage_options",
                u = "googlesitekit_read_shared_module_data"
        },
        136: function(e, t) {
            e.exports = googlesitekit.modules
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
                    u = n.owner,
                    s = void 0 === u ? {} : u;
                if (!i || !c) return e;
                var l = "",
                    g = "";
                return "analytics" === i ? e.match(/account/i) ? l = Object(r.__)("Your Google account does not have sufficient permissions for this Analytics account, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/property/i) ? l = Object(r.__)("Your Google account does not have sufficient permissions for this Analytics property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit") : e.match(/view/i) && (l = Object(r.__)("Your Google account does not have sufficient permissions for this Analytics view, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")) : "search-console" === i && (l = Object(r.__)("Your Google account does not have sufficient permissions for this Search Console property, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit")), l || (l = Object(r.sprintf)(
                    /* translators: %s: module name */
                    Object(r.__)("Your Google account does not have sufficient permissions to access %s data, so you won’t be able to see stats from it on the Site Kit dashboard.", "google-site-kit"), c)), s && s.login && (g = Object(r.sprintf)(
                    /* translators: %s: owner name */
                    Object(r.__)('This service was originally connected by the administrator "%s" — you can contact them for more information.', "google-site-kit"), s.login)), g || (g = Object(r.__)("This service was originally connected by an administrator — you can contact them for more information.", "google-site-kit")), "".concat(l, " ").concat(g)
            }
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
        157: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return C
            })), n.d(t, "b", (function() {
                return D
            })), n.d(t, "c", (function() {
                return I
            })), n.d(t, "f", (function() {
                return P
            })), n.d(t, "e", (function() {
                return x
            })), n.d(t, "d", (function() {
                return N
            }));
            var r = n(14),
                a = n.n(r),
                i = n(5),
                o = n.n(i),
                c = n(6),
                u = n.n(c),
                s = n(9),
                l = n.n(s),
                g = n(57),
                f = n.n(g),
                d = n(158),
                p = n.n(d),
                m = n(33),
                v = n.n(m),
                b = n(4),
                h = n.n(b),
                y = n(73),
                O = n(76),
                j = n(45),
                _ = n(54);

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
                        u()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var w = h.a.createRegistrySelector,
                E = _.a.clearError,
                A = _.a.receiveError,
                C = "cannot submit changes while submitting changes",
                D = "cannot submit changes if settings have not changed",
                I = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        a = r.storeName,
                        i = void 0 === a ? void 0 : a,
                        c = r.settingSlugs,
                        s = void 0 === c ? [] : c;
                    l()(e, "type is required."), l()(t, "identifier is required."), l()(n, "datapoint is required.");
                    var g = i || "".concat(e, "/").concat(t),
                        d = {
                            settings: void 0,
                            savedSettings: void 0
                        },
                        m = Object(j.a)({
                            baseName: "getSettings",
                            controlCallback: function() {
                                return v.a.get(e, t, n, {}, {
                                    useCache: !1
                                })
                            },
                            reducerCallback: function(e, t) {
                                return k(k({}, e), {}, {
                                    savedSettings: k({}, t),
                                    settings: k(k({}, t), e.settings || {})
                                })
                            }
                        }),
                        b = Object(j.a)({
                            baseName: "saveSettings",
                            controlCallback: function(r) {
                                var a = r.values;
                                return v.a.set(e, t, n, a)
                            },
                            reducerCallback: function(e, t) {
                                return k(k({}, e), {}, {
                                    savedSettings: k({}, t),
                                    settings: k({}, t)
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
                        _ = {
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
                                var t, n, r, a, i;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, h.a.commonActions.getRegistry();
                                        case 2:
                                            return t = e.sent, e.next = 5, E("saveSettings", []);
                                        case 5:
                                            return n = t.select(g).getSettings(), e.next = 8, b.actions.fetchSaveSettings(n);
                                        case 8:
                                            if (r = e.sent, a = r.response, !(i = r.error)) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 14, A(i, "saveSettings", []);
                                        case 14:
                                            return e.abrupt("return", {
                                                response: a,
                                                error: i
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        S = {},
                        C = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                n = t.type,
                                r = t.payload;
                            switch (n) {
                                case "SET_SETTINGS":
                                    var a = r.values;
                                    return k(k({}, e), {}, {
                                        settings: k(k({}, e.settings || {}), a)
                                    });
                                case "ROLLBACK_SETTINGS":
                                    return k(k({}, e), {}, {
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
                                            if (t = e.sent, t.select(g).getSettings()) {
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
                        I = {
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
                    s.forEach((function(e) {
                        var t = Object(O.b)(e),
                            n = Object(O.a)(e);
                        _["set".concat(t)] = function(e) {
                            return l()(void 0 !== e, "value is required for calls to set".concat(t, "().")), {
                                payload: {
                                    value: e
                                },
                                type: "SET_".concat(n)
                            }
                        }, y["SET_".concat(n)] = function(t, n) {
                            var r = n.payload.value;
                            return k(k({}, t), {}, {
                                settings: k(k({}, t.settings || {}), {}, u()({}, e, r))
                            })
                        }, I["get".concat(t)] = w((function(t) {
                            return function() {
                                return (t(g).getSettings() || {})[e]
                            }
                        }))
                    }));
                    var P = h.a.combineStores(h.a.commonStore, m, b, {
                        initialState: d,
                        actions: _,
                        controls: S,
                        reducer: C,
                        resolvers: D,
                        selectors: I
                    });
                    return k(k({}, P), {}, {
                        STORE_NAME: g
                    })
                };

            function P(e, t) {
                return function() {
                    var n = a()(o.a.mark((function n(r) {
                        var a, i, c, u;
                        return o.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (a = r.select, i = r.dispatch, !a(t).haveSettingsChanged()) {
                                        n.next = 8;
                                        break
                                    }
                                    return n.next = 4, i(t).saveSettings();
                                case 4:
                                    if (c = n.sent, !(u = c.error)) {
                                        n.next = 8;
                                        break
                                    }
                                    return n.abrupt("return", {
                                        error: u
                                    });
                                case 8:
                                    return n.next = 10, v.a.invalidateCache("modules", e);
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

            function N(e) {
                return function(t) {
                    var n = Object(y.e)(t)(e),
                        r = n.haveSettingsChanged,
                        a = n.isDoingSubmitChanges;
                    l()(!a(), C), l()(r(), D)
                }
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
                    u = n.n(c),
                    s = n(0),
                    l = n.n(s),
                    g = n(124),
                    f = n(259),
                    d = n(2),
                    p = n(1),
                    m = n(7),
                    v = Object(d.forwardRef)((function(t, n) {
                        var r = t.children,
                            i = t.href,
                            c = t.text,
                            s = t.className,
                            l = t.danger,
                            v = t.disabled,
                            b = t.target,
                            h = t.icon,
                            y = t.trailingIcon,
                            O = t["aria-label"],
                            j = t.title,
                            _ = t.tooltip,
                            S = o()(t, ["children", "href", "text", "className", "danger", "disabled", "target", "icon", "trailingIcon", "aria-label", "title", "tooltip"]),
                            k = Object(d.useCallback)((function(e) {
                                null !== e && m.i.attachTo(e)
                            }), []),
                            w = Object(g.a)(n, k),
                            E = i && !v ? "a" : "button",
                            A = e.createElement(E, a()({
                                className: u()("mdc-button", s, {
                                    "mdc-button--raised": !c,
                                    "mdc-button--danger": l
                                }),
                                href: v ? void 0 : i,
                                ref: w,
                                disabled: !!v,
                                "aria-label": function() {
                                    var e = O;
                                    if ("_blank" !== b) return e;
                                    var t = Object(p._x)("(opens in a new tab)", "screen reader text", "google-site-kit");
                                    return "string" == typeof r && (e = e || r), e ? "".concat(e, " ").concat(t) : t
                                }(),
                                target: b || "_self",
                                role: "a" === E ? "button" : void 0
                            }, S), h, r && e.createElement("span", {
                                className: "mdc-button__label"
                            }, r), y);
                        return _ && (j || O) || h && (j || O) && void 0 === r ? e.createElement(f.a, {
                            title: j || O,
                            classes: {
                                popper: "googlesitekit-tooltip-popper",
                                tooltip: "googlesitekit-tooltip"
                            }
                        }, A) : A
                    }));
                v.displayName = "Button", v.propTypes = {
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
                var t, n, r, a, i, o, c, u;
                if (void 0 !== e) return !(null == e || null === (t = e[0]) || void 0 === t || null === (n = t.data) || void 0 === n || null === (r = n.rows) || void 0 === r ? void 0 : r.length) || !(null == e || null === (a = e[0]) || void 0 === a || null === (i = a.data) || void 0 === i || null === (o = i.totals) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (u = c.values) || void 0 === u ? void 0 : u.length) || !e[0].data.totals.some((function(e) {
                    return e.values.some((function(e) {
                        return e > 0
                    }))
                }))
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        191: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ErrorNotice
                }));
                var r = n(0),
                    a = n.n(r),
                    i = n(89),
                    o = n(81);

                function ErrorNotice(t) {
                    var n, r = t.error,
                        a = t.shouldDisplayError,
                        c = void 0 === a ? function() {
                            return !0
                        } : a;
                    return r && !Object(i.c)(r) && c(r) ? e.createElement(o.a, {
                        message: r.message,
                        reconnectURL: null === (n = r.data) || void 0 === n ? void 0 : n.reconnectURL
                    }) : null
                }
                ErrorNotice.propTypes = {
                    error: a.a.shape({
                        message: a.a.string
                    }),
                    shouldDisplayError: a.a.func
                }
            }).call(this, n(3))
        },
        193: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "a", (function() {
                return l
            })), n.d(t, "f", (function() {
                return g
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "h", (function() {
                return d
            }));
            var r = n(25),
                a = n(423),
                i = function(e) {
                    return (parseInt(e, 10) || 0) > 0
                };

            function o(e) {
                return i(e)
            }

            function c(e) {
                return e === r.a || o(e)
            }

            function u(e) {
                return "string" == typeof e && /^GTM-[A-Z0-9]+$/.test(e)
            }

            function s(e) {
                return "string" == typeof e && Object(a.a)(e).length > 0
            }

            function l(e, t) {
                var n = Object(a.a)(e);
                return !Array.isArray(t) || !t.some((function(e) {
                    var t = e.name;
                    return Object(a.a)(t) === n
                }))
            }

            function g(e) {
                return e === r.b || u(e)
            }

            function f(e) {
                return i(e)
            }

            function d(e) {
                return [r.d, r.c].includes(e)
            }
        },
        196: function(e, t, n) {
            "use strict";
            t.a = function(e) {
                if ("string" == typeof e && e.match(/[0-9]{8}/)) {
                    var t = e.slice(0, 4),
                        n = Number(e.slice(4, 6)) - 1,
                        r = e.slice(6, 8);
                    return new Date(t, n.toString(), r)
                }
                return !1
            }
        },
        199: function(e, t, n) {
            "use strict";
            var r = n(0),
                a = n.n(r),
                i = function DisplaySetting(e) {
                    return e.value || " "
                };
            i.propTypes = {
                value: a.a.oneOfType([a.a.string, a.a.bool, a.a.number])
            }, t.a = i
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
        21: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(16),
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(0),
                    u = n.n(c),
                    s = n(8),
                    l = n.n(s),
                    g = n(127),
                    f = n(1),
                    d = n(2),
                    p = Object(d.forwardRef)((function(t, n) {
                        var r, i = t["aria-label"],
                            c = t.arrow,
                            u = t.back,
                            s = t.caps,
                            d = t.children,
                            p = t.className,
                            m = t.danger,
                            v = t.disabled,
                            b = t.external,
                            h = t.hideExternalIndicator,
                            y = t.href,
                            O = t.inherit,
                            j = t.inverse,
                            _ = t.onClick,
                            S = t.small,
                            k = t.to,
                            w = o()(t, ["aria-label", "arrow", "back", "caps", "children", "className", "danger", "disabled", "external", "hideExternalIndicator", "href", "inherit", "inverse", "onClick", "small", "to"]),
                            E = y || k || !_ ? k ? "ROUTER_LINK" : b ? "EXTERNAL_LINK" : "LINK" : v ? "BUTTON_DISABLED" : "BUTTON",
                            A = "BUTTON" === E || "BUTTON_DISABLED" === E ? "button" : "ROUTER_LINK" === E ? g.b : "a",
                            C = ("EXTERNAL_LINK" === E && (r = Object(f._x)("(opens in a new tab)", "screen reader text", "google-site-kit")), "BUTTON_DISABLED" === E && (r = Object(f._x)("(disabled)", "screen reader text", "google-site-kit")), r ? i ? "".concat(i, " ").concat(r) : "string" == typeof d ? "".concat(d, " ").concat(r) : void 0 : i);
                        return e.createElement(A, a()({
                            "aria-label": C,
                            className: l()("googlesitekit-cta-link", p, {
                                "googlesitekit-cta-link--arrow": c,
                                "googlesitekit-cta-link--external": b && !h,
                                "googlesitekit-cta-link--inverse": j,
                                "googlesitekit-cta-link--back": u,
                                "googlesitekit-cta-link--small": S,
                                "googlesitekit-cta-link--inherit": O,
                                "googlesitekit-cta-link--caps": s,
                                "googlesitekit-cta-link--danger": m,
                                "googlesitekit-cta-link--disabled": v
                            }),
                            disabled: v,
                            href: "LINK" === E || "EXTERNAL_LINK" === E ? y : void 0,
                            onClick: _,
                            rel: "EXTERNAL_LINK" === E ? "noopener noreferrer" : void 0,
                            ref: n,
                            target: "EXTERNAL_LINK" === E ? "_blank" : void 0,
                            to: k
                        }, w), d)
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
            }).call(this, n(3))
        },
        211: function(e, t, n) {
            "use strict";
            var r = n(705);
            n.d(t, "b", (function() {
                return r.a
            }));
            var a = n(706);
            n.d(t, "c", (function() {
                return a.a
            }));
            n(535);
            var i = n(707);
            n.d(t, "a", (function() {
                return i.a
            }));
            var o = n(708);
            n.d(t, "d", (function() {
                return o.a
            }));
            n(413), n(414);
            var c = n(709);
            n.d(t, "e", (function() {
                return c.a
            }));
            var u = n(538);
            n.d(t, "f", (function() {
                return u.a
            }));
            var s = n(539);
            n.d(t, "g", (function() {
                return s.a
            }));
            var l = n(710);
            n.d(t, "h", (function() {
                return l.a
            }));
            var g = n(711);
            n.d(t, "i", (function() {
                return g.a
            }));
            n(537);
            var f = n(712);
            n.d(t, "j", (function() {
                return f.a
            }))
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
        224: function(e, t, n) {
            "use strict";
            (function(e) {
                var r = n(52),
                    a = n.n(r),
                    i = n(225),
                    o = e._googlesitekitAPIFetchData || {},
                    c = o.nonce,
                    u = o.nonceEndpoint,
                    s = o.preloadedData,
                    l = o.rootURL;
                a.a.nonceEndpoint = u, a.a.nonceMiddleware = a.a.createNonceMiddleware(c), a.a.rootURLMiddleware = a.a.createRootURLMiddleware(l), a.a.preloadingMiddleware = Object(i.a)(s), a.a.use(a.a.nonceMiddleware), a.a.use(a.a.mediaUploadMiddleware), a.a.use(a.a.rootURLMiddleware), a.a.use(a.a.preloadingMiddleware), t.default = a.a
            }).call(this, n(18))
        },
        225: function(e, t, n) {
            "use strict";
            var r = n(220);
            t.a = function(e) {
                var t = Object.keys(e).reduce((function(t, n) {
                        return t[Object(r.getStablePath)(n)] = e[n], t
                    }), {}),
                    n = !1;
                return function(e, a) {
                    if (n) return a(e);
                    setTimeout((function() {
                        n = !0
                    }), 1e3);
                    var i = e.parse,
                        o = void 0 === i || i,
                        c = e.path;
                    if ("string" == typeof e.path) {
                        var u, s = (null === (u = e.method) || void 0 === u ? void 0 : u.toUpperCase()) || "GET",
                            l = Object(r.getStablePath)(c);
                        if (o && "GET" === s && t[l]) {
                            var g = Promise.resolve(t[l].body);
                            return delete t[l], g
                        }
                        if ("OPTIONS" === s && t[s] && t[s][l]) {
                            var f = Promise.resolve(t[s][l]);
                            return delete t[s][l], f
                        }
                    }
                    return a(e)
                }
            }
        },
        25: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {
                return r
            })), n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "f", (function() {
                return u
            })), n.d(t, "e", (function() {
                return s
            })), n.d(t, "h", (function() {
                return l
            }));
            var r = "modules/tagmanager",
                a = "account_create",
                i = "container_create",
                o = "web",
                c = "amp",
                u = "tagmanagerSetup",
                s = "https://www.googleapis.com/auth/tagmanager.edit.containers",
                l = "SETUP_WITH_ANALYTICS"
        },
        254: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            })), n.d(t, "b", (function() {
                return v
            }));
            var r = n(5),
                a = n.n(r),
                i = n(14),
                o = n.n(i),
                c = n(9),
                u = n.n(c),
                s = n(323),
                l = n.n(s),
                g = n(224),
                f = n(109),
                d = n(287),
                p = n(15),
                m = function(e, t) {
                    var n = t.find((function(t) {
                        return t.test(e)
                    }));
                    return !!n && n.exec(e)[1]
                },
                v = l()(function() {
                    var e = o()(a.a.mark((function e(t) {
                        var n, r, i, o;
                        return a.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.homeURL, r = t.ampMode, u()(Object(f.a)(n), "homeURL must be valid URL"), i = [n], p.b !== r) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.prev = 4, e.next = 7, Object(g.default)({
                                        path: "/wp/v2/posts?per_page=1"
                                    }).then((function(e) {
                                        return e.slice(0, 1).map((function(e) {
                                            return Object(d.a)(e.link, {
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
        258: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r.a
            })), n.d(t, "c", (function() {
                return a.b
            })), n.d(t, "d", (function() {
                return a.d
            })), n.d(t, "e", (function() {
                return a.e
            })), n.d(t, "b", (function() {
                return a.a
            })), n.d(t, "f", (function() {
                return a.f
            })), n.d(t, "g", (function() {
                return a.g
            }));
            var r = n(423),
                a = n(193);
            n(536)
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
                    u = a.trackingEnabled,
                    s = {
                        activeModules: o,
                        trackingEnabled: u,
                        trackingID: a.trackingID,
                        referenceSiteURL: a.referenceSiteURL,
                        userIDHash: a.userIDHash,
                        isSiteKitScreen: c
                    },
                    l = Object(r.a)(s),
                    g = l.enableTracking,
                    f = l.disableTracking,
                    d = (l.isTrackingEnabled, l.initializeSnippet),
                    p = l.trackEvent;

                function m(e) {
                    e ? g() : f()
                }
                c && u && d()
            }).call(this, n(18))
        },
        322: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return j
            }));
            var r = n(6),
                a = n.n(r),
                i = n(14),
                o = n.n(i),
                c = n(5),
                u = n.n(c),
                s = n(9),
                l = n.n(s),
                g = n(4),
                f = n.n(g),
                d = n(15),
                p = n(254);

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
                        a()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function b(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return h(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
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

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var y = f.a.createRegistryControl,
                O = f.a.createRegistrySelector,
                j = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.storeName,
                        r = t.isValidTag,
                        i = t.tagMatchers;
                    l()("string" == typeof n && n, "storeName is required."), l()("function" == typeof r, "isValidTag must be a function."), l()(Array.isArray(i), "tagMatchers must be an Array.");
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
                            receiveGetExistingTag: function(e) {
                                return l()(null === e || "string" == typeof e, "existingTag must be a tag string or null."), {
                                    payload: {
                                        existingTag: r(e) ? e : null
                                    },
                                    type: "RECEIVE_GET_EXISTING_TAG"
                                }
                            },
                            waitForExistingTag: u.a.mark((function e() {
                                return u.a.wrap((function(e) {
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
                        g = (e = {}, a()(e, "FETCH_GET_EXISTING_TAG", y((function(e) {
                            return o()(u.a.mark((function t() {
                                var n, r, a, o, c, s, l, g;
                                return u.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = e.select(d.c).getHomeURL(), r = e.select(d.c).getAMPMode(), t.next = 4, Object(p.b)({
                                                homeURL: n,
                                                ampMode: r
                                            });
                                        case 4:
                                            a = t.sent, o = b(a), t.prev = 6, o.s();
                                        case 8:
                                            if ((c = o.n()).done) {
                                                t.next = 18;
                                                break
                                            }
                                            return s = c.value, t.next = 12, e.dispatch(d.c).waitForHTMLForURL(s);
                                        case 12:
                                            if (l = e.select(d.c).getHTMLForURL(s), !(g = Object(p.a)(l, i))) {
                                                t.next = 16;
                                                break
                                            }
                                            return t.abrupt("return", g);
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
                        }))), a()(e, "WAIT_FOR_EXISTING_TAG", y((function(e) {
                            return function() {
                                var t = function() {
                                    return void 0 !== e.select(n).getExistingTag()
                                };
                                return !!t() || new Promise((function(n) {
                                    var r = e.subscribe((function() {
                                        t() && (r(), n())
                                    }))
                                }))
                            }
                        }))), e),
                        m = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                n = t.type,
                                r = t.payload;
                            switch (n) {
                                case "RECEIVE_GET_EXISTING_TAG":
                                    var a = r.existingTag;
                                    return v(v({}, e), {}, {
                                        existingTag: a
                                    });
                                default:
                                    return e
                            }
                        },
                        h = {
                            getExistingTag: u.a.mark((function e() {
                                var t, r;
                                return u.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, f.a.commonActions.getRegistry();
                                        case 2:
                                            if (void 0 !== (t = e.sent).select(n).getExistingTag()) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 6, s.fetchGetExistingTag();
                                        case 6:
                                            r = e.sent, t.dispatch(n).receiveGetExistingTag(r);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))
                        },
                        j = {
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
                        _ = {
                            initialState: c,
                            actions: s,
                            controls: g,
                            reducer: m,
                            resolvers: h,
                            selectors: j
                        };
                    return v(v({}, _), {}, {
                        STORE_NAME: n
                    })
                }
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
        36: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = "core/forms"
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
                                if ("string" == typeof e) return u(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
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

                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var s, l = "googlesitekit_".concat("1.72.0", "_"),
                    g = ["sessionStorage", "localStorage"],
                    f = [].concat(g),
                    d = function() {
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
                                    return t.next = 11, d(i);
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
                            var n, r, i, o, c, u, s;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, p();
                                    case 2:
                                        if (!(n = e.sent)) {
                                            e.next = 10;
                                            break
                                        }
                                        if (!(r = n.getItem("".concat(l).concat(t)))) {
                                            e.next = 10;
                                            break
                                        }
                                        if (i = JSON.parse(r), o = i.timestamp, c = i.ttl, u = i.value, s = i.isError, !o || c && !(Math.round(Date.now() / 1e3) - o < c)) {
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
                    b = function() {
                        var t = o()(a.a.mark((function t(n, r) {
                            var i, o, c, u, s, g, f, d, m = arguments;
                            return a.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return i = m.length > 2 && void 0 !== m[2] ? m[2] : {}, o = i.ttl, c = void 0 === o ? 3600 : o, u = i.timestamp, s = void 0 === u ? Math.round(Date.now() / 1e3) : u, g = i.isError, f = void 0 !== g && g, t.next = 3, p();
                                    case 3:
                                        if (!(d = t.sent)) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.prev = 5, d.setItem("".concat(l).concat(n), JSON.stringify({
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
                                        return t.prev = 4, r.removeItem("".concat(l).concat(n)), t.abrupt("return", !0);
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
                                        for (t.prev = 4, r = [], i = 0; i < n.length; i++) 0 === (o = n.key(i)).indexOf(l) && r.push(o.substring(l.length));
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
        413: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ContainerNameTextField
                }));
                var r = n(6),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = n(8),
                    u = n.n(c),
                    s = n(2),
                    l = n(1),
                    g = n(4),
                    f = n.n(g),
                    d = n(25),
                    p = n(36),
                    m = n(7),
                    v = n(258),
                    b = f.a.useSelect,
                    h = f.a.useDispatch;

                function ContainerNameTextField(t) {
                    var n = t.label,
                        r = t.name,
                        i = b((function(e) {
                            var t = e(d.g).getAccountID();
                            return e(d.g).getContainers(t)
                        })),
                        o = b((function(e) {
                            return e(p.a).getValue(d.f, r)
                        })),
                        c = h(p.a).setValues,
                        g = Object(s.useCallback)((function(e) {
                            var t = e.currentTarget;
                            c(d.f, a()({}, r, t.value))
                        }), [r, c]),
                        f = Object(v.b)(o, i),
                        y = o && !f ? e.createElement(m.c, {
                            persistent: !0
                        }, Object(l.__)("A container with this name already exists.", "google-site-kit")) : void 0,
                        O = y ? e.createElement("span", {
                            className: "googlesitekit-text-field-icon--error"
                        }) : void 0;
                    return e.createElement("div", {
                        className: u()("googlesitekit-tagmanager-containername", "googlesitekit-tagmanager-".concat(r))
                    }, e.createElement(m.n, {
                        className: u()({
                            "mdc-text-field--error": !o || !f
                        }),
                        label: n,
                        outlined: !0,
                        helperText: y,
                        trailingIcon: O
                    }, e.createElement(m.d, {
                        id: r,
                        name: r,
                        value: o,
                        onChange: g
                    })))
                }
                ContainerNameTextField.propTypes = {
                    label: o.a.string.isRequired,
                    name: o.a.string.isRequired
                }
            }).call(this, n(3))
        },
        414: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ContainerSelect
                }));
                var r = n(16),
                    a = n.n(r),
                    i = n(17),
                    o = n.n(i),
                    c = n(8),
                    u = n.n(c),
                    s = n(0),
                    l = n.n(s),
                    g = n(1),
                    f = n(4),
                    d = n.n(f),
                    p = n(7),
                    m = n(25),
                    v = n(55),
                    b = n(258),
                    h = d.a.useSelect;

                function ContainerSelect(t) {
                    var n = t.containers,
                        r = t.className,
                        i = t.value,
                        c = o()(t, ["containers", "className", "value"]),
                        s = h((function(e) {
                            return e(m.g).getAccountID()
                        })),
                        l = h((function(e) {
                            return e(m.g).hasExistingTag()
                        })),
                        f = h((function(e) {
                            return e(m.g).hasFinishedResolution("getAccounts")
                        })),
                        d = h((function(e) {
                            return e(m.g).hasFinishedResolution("getContainers", [s])
                        }));
                    return f && d ? e.createElement(p.m, a()({
                        className: u()("googlesitekit-tagmanager__select-container", r),
                        disabled: l || !Object(b.c)(s),
                        value: i,
                        enhanced: !0,
                        outlined: !0
                    }, c), (n || []).concat({
                        publicId: m.b,
                        name: Object(g.__)("Set up a new container", "google-site-kit")
                    }).map((function(t) {
                        var n = t.publicId,
                            r = t.name,
                            a = t.containerId;
                        return e.createElement(p.k, {
                            key: n,
                            value: n,
                            "data-internal-id": a
                        }, r)
                    }))) : e.createElement(v.a, {
                        small: !0
                    })
                }
                ContainerSelect.propTypes = {
                    containers: l.a.arrayOf(l.a.object)
                }
            }).call(this, n(3))
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
        423: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(113),
                a = n.n(r);

            function i(e) {
                var t = e;
                return t = (t = (t = (t = (t = (t = a()(t)).trim()).replace(/^_+/, "")).normalize("NFD").replace(/[\u0300-\u036f]/g, "")).replace(/[^a-zA-Z0-9_., -]/g, "")).replace(/\s+/g, " ")
            }
        },
        45: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return j
            }));
            var r = n(5),
                a = n.n(r),
                i = n(6),
                o = n.n(i),
                c = n(9),
                u = n.n(c),
                s = n(57),
                l = n.n(s),
                g = n(54),
                f = n(76),
                d = n(11);

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
            var v = function(e) {
                    return e
                },
                b = function() {
                    return {}
                },
                h = function() {},
                y = g.a.clearError,
                O = g.a.receiveError,
                j = function(e) {
                    var t, n, r = a.a.mark(R),
                        i = e.baseName,
                        c = e.controlCallback,
                        s = e.reducerCallback,
                        g = void 0 === s ? v : s,
                        p = e.argsToParams,
                        j = void 0 === p ? b : p,
                        _ = e.validateParams,
                        S = void 0 === _ ? h : _;
                    u()(i, "baseName is required."), u()("function" == typeof c, "controlCallback is required and must be a function."), u()("function" == typeof g, "reducerCallback must be a function."), u()("function" == typeof j, "argsToParams must be a function."), u()("function" == typeof S, "validateParams must be a function.");
                    try {
                        S(j()), n = !1
                    } catch (e) {
                        n = !0
                    }
                    var k = Object(f.b)(i),
                        w = Object(f.a)(i),
                        E = "FETCH_".concat(w),
                        A = "START_".concat(E),
                        C = "FINISH_".concat(E),
                        D = "CATCH_".concat(E),
                        I = "RECEIVE_".concat(w),
                        P = "fetch".concat(k),
                        x = "receive".concat(k),
                        N = "isFetching".concat(k),
                        T = o()({}, N, {});

                    function R(e, t) {
                        var n, o;
                        return a.a.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, {
                                        payload: {
                                            params: e
                                        },
                                        type: A
                                    };
                                case 2:
                                    return r.next = 4, y(i, t);
                                case 4:
                                    return r.prev = 4, r.next = 7, {
                                        payload: {
                                            params: e
                                        },
                                        type: E
                                    };
                                case 7:
                                    return n = r.sent, r.next = 10, M[x](n, e);
                                case 10:
                                    return r.next = 12, {
                                        payload: {
                                            params: e
                                        },
                                        type: C
                                    };
                                case 12:
                                    r.next = 23;
                                    break;
                                case 14:
                                    return r.prev = 14, r.t0 = r.catch(4), o = r.t0, r.next = 19, O(o, i, t);
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
                    var M = (t = {}, o()(t, P, (function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var r = j.apply(void 0, t);
                            return S(r), R(r, t)
                        })), o()(t, x, (function(e, t) {
                            return u()(void 0 !== e, "response is required."), n ? (u()(l()(t), "params is required."), S(t)) : t = {}, {
                                payload: {
                                    response: e,
                                    params: t
                                },
                                type: I
                            }
                        })), t),
                        L = o()({}, E, (function(e) {
                            var t = e.payload;
                            return c(t.params)
                        })),
                        F = o()({}, N, (function(e) {
                            if (void 0 === e[N]) return !1;
                            var t;
                            try {
                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                                t = j.apply(void 0, r), S(t)
                            } catch (e) {
                                return !1
                            }
                            return !!e[N][Object(d.v)(t)]
                        }));
                    return {
                        initialState: T,
                        actions: M,
                        controls: L,
                        reducer: function(e, t) {
                            var n = t.type,
                                r = t.payload;
                            switch (n) {
                                case A:
                                    var a = r.params;
                                    return m(m({}, e), {}, o()({}, N, m(m({}, e[N]), {}, o()({}, Object(d.v)(a), !0))));
                                case I:
                                    var i = r.response,
                                        c = r.params;
                                    return g(e, i, c);
                                case C:
                                    var u = r.params;
                                    return m(m({}, e), {}, o()({}, N, m(m({}, e[N]), {}, o()({}, Object(d.v)(u), !1))));
                                case D:
                                    var s = r.params;
                                    return m(m({}, e), {}, o()({}, N, m(m({}, e[N]), {}, o()({}, Object(d.v)(s), !1))));
                                default:
                                    return e
                            }
                        },
                        resolvers: {},
                        selectors: F
                    }
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
                return u
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

            function u(e, t) {
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
        533: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupErrorNotice
                }));
                var r = n(4),
                    a = n.n(r),
                    i = n(25),
                    o = n(10),
                    c = n(22),
                    u = n(112),
                    s = n(81),
                    l = a.a.useSelect;

                function SetupErrorNotice() {
                    var t = [l((function(e) {
                        return e(c.a).getErrorForAction("activateModule", ["analytics"])
                    })), l((function(e) {
                        var t = e(o.f).getSettings();
                        return e(o.f).getErrorForAction("saveSettings", [t])
                    }))].filter(Boolean);
                    return t.length ? t.map((function(t) {
                        var n = t.message,
                            r = t.reconnectURL;
                        return e.createElement(s.a, {
                            key: n,
                            message: n,
                            reconnectURL: r
                        })
                    })) : e.createElement(u.a, {
                        moduleSlug: "tagmanager",
                        storeName: i.g
                    })
                }
            }).call(this, n(3))
        },
        534: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupForm
                }));
                var r = n(5),
                    a = n.n(r),
                    i = n(14),
                    o = n.n(i),
                    c = n(0),
                    u = n.n(c),
                    s = n(2),
                    l = n(1),
                    g = n(4),
                    f = n.n(g),
                    d = n(25),
                    p = n(36),
                    m = n(13),
                    v = n(22),
                    b = n(89),
                    h = n(211),
                    y = n(19),
                    O = n(21),
                    j = n(533),
                    _ = n(539),
                    S = f.a.useSelect,
                    k = f.a.useDispatch;

                function SetupForm(t) {
                    var n = t.finishSetup,
                        r = S((function(e) {
                            return e(d.g).canSubmitChanges()
                        })),
                        i = S((function(e) {
                            return e(d.g).getSingleAnalyticsPropertyID()
                        })),
                        c = S((function(e) {
                            return e(v.a).isModuleActive("analytics")
                        })),
                        u = S((function(e) {
                            return e(m.a).hasScope(d.e)
                        })),
                        g = S((function(e) {
                            return e(p.a).getValue(d.f, "autoSubmit")
                        }), []),
                        f = S((function(e) {
                            return e(p.a).getValue(d.f, "submitMode")
                        }), []),
                        w = k(p.a).setValues,
                        E = k(v.a).activateModule,
                        A = k(d.g).submitChanges,
                        C = Object(s.useCallback)(o()(a.a.mark((function e() {
                            var t, r, i, u, s, l, g = arguments;
                            return a.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = g.length > 0 && void 0 !== g[0] ? g[0] : {}, r = t.submitMode, i = function() {
                                            var e = o()(a.a.mark((function e(t) {
                                                var n, r;
                                                return a.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, t();
                                                        case 2:
                                                            if (e.t0 = e.sent, e.t0) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            e.t0 = {};
                                                        case 5:
                                                            if (n = e.t0, !(r = n.error)) {
                                                                e.next = 9;
                                                                break
                                                            }
                                                            throw r;
                                                        case 9:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), w(d.f, {
                                            submitMode: r,
                                            submitInProgress: !0
                                        }), e.prev = 3, e.next = 6, i((function() {
                                            return A()
                                        }));
                                    case 6:
                                        if (w(d.f, {
                                                autoSubmit: !1
                                            }), r !== d.h || c) {
                                            e.next = 20;
                                            break
                                        }
                                        return e.next = 10, i((function() {
                                            return E("analytics")
                                        }));
                                    case 10:
                                        return e.next = 12, E("analytics");
                                    case 12:
                                        if (u = e.sent, s = u.response, !(l = u.error)) {
                                            e.next = 17;
                                            break
                                        }
                                        throw l;
                                    case 17:
                                        n(s.moduleReauthURL), e.next = 21;
                                        break;
                                    case 20:
                                        n();
                                    case 21:
                                        e.next = 26;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t0 = e.catch(3), Object(b.c)(e.t0) && w(d.f, {
                                            autoSubmit: !0
                                        });
                                    case 26:
                                        w(d.f, {
                                            submitInProgress: !1
                                        });
                                    case 27:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 23]
                            ])
                        }))), [n, c, E, A, w]);
                    Object(s.useEffect)((function() {
                        g && u && C({
                            submitMode: f
                        })
                    }), [u, g, C, f]);
                    var D = !(!i || c),
                        I = Object(s.useCallback)((function(e) {
                            e.preventDefault();
                            var t = D ? d.h : "";
                            C({
                                submitMode: t
                            })
                        }), [C, D]),
                        P = Object(s.useCallback)((function() {
                            return C()
                        }), [C]);
                    return e.createElement("form", {
                        className: "googlesitekit-tagmanager-setup__form",
                        onSubmit: I
                    }, e.createElement(j.a, null), e.createElement(_.a, null), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(h.c, null), e.createElement(h.j, null), e.createElement(h.a, null), e.createElement(h.h, null)), e.createElement(h.d, null), e.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, D && e.createElement(s.Fragment, null, e.createElement(y.a, {
                        disabled: !r
                    }, Object(l.__)("Continue to Analytics setup", "google-site-kit")), e.createElement(O.a, {
                        className: "googlesitekit-setup-module__sub-action",
                        type: "button",
                        onClick: P,
                        disabled: !r,
                        inherit: !0
                    }, Object(l.__)("Complete setup without Analytics", "google-site-kit"))), !D && e.createElement(y.a, {
                        disabled: !r
                    }, Object(l.__)("Confirm & Continue", "google-site-kit"))))
                }
                SetupForm.propTypes = {
                    finishSetup: u.a.func
                }
            }).call(this, n(3))
        },
        535: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AMPContainerNameTextField
                }));
                var r = n(99),
                    a = n(1),
                    i = n(109),
                    o = n(4),
                    c = n.n(o),
                    u = n(25),
                    s = n(15),
                    l = n(36),
                    g = n(413),
                    f = c.a.useSelect,
                    d = c.a.useDispatch;

                function AMPContainerNameTextField() {
                    var t = f((function(e) {
                            return e(u.g).getAMPContainerID()
                        })),
                        n = f((function(e) {
                            return e(s.c).getSiteName()
                        })),
                        o = f((function(e) {
                            return e(s.c).getReferenceSiteURL()
                        })),
                        c = f((function(e) {
                            return e(l.a).getValue(u.f, "ampContainerName")
                        }), []),
                        p = n;
                    !p && Object(i.a)(o) && (p = new URL(o).hostname), p += " AMP";
                    var m = d(l.a).setValues;
                    return Object(r.a)((function() {
                        c || m(u.f, {
                            ampContainerName: p
                        })
                    })), t !== u.b ? null : e.createElement(g.a, {
                        name: "ampContainerName",
                        label: Object(a.__)("AMP Container Name", "google-site-kit")
                    })
                }
            }).call(this, n(3))
        },
        536: function(e, t, n) {
            "use strict";
            t.a = [/<script[^>]*>[^>]+?www.googletagmanager.com\/gtm[^>]+?['|"](GTM-[0-9A-Z]+)['|"]/, /<script[^>]*src=['|"]https:\/\/www.googletagmanager.com\/gtm\.js\?id=(GTM-[0-9A-Z]+)['|"]/, /<script[^>]*src=['|"]https:\/\/www.googletagmanager.com\/ns.html\?id=(GTM-[0-9A-Z]+)['|"]/, /<amp-analytics [^>]*config=['|"]https:\/\/www.googletagmanager.com\/amp.json\?id=(GTM-[0-9A-Z]+)['|"]/]
        },
        537: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return WebContainerNameTextField
                }));
                var r = n(99),
                    a = n(1),
                    i = n(109),
                    o = n(4),
                    c = n.n(o),
                    u = n(25),
                    s = n(15),
                    l = n(36),
                    g = n(413),
                    f = c.a.useSelect,
                    d = c.a.useDispatch;

                function WebContainerNameTextField() {
                    var t = f((function(e) {
                            return e(u.g).getContainerID()
                        })),
                        n = f((function(e) {
                            return e(s.c).getSiteName()
                        })),
                        o = f((function(e) {
                            return e(s.c).isSecondaryAMP()
                        })),
                        c = f((function(e) {
                            return e(s.c).getReferenceSiteURL()
                        })),
                        p = f((function(e) {
                            return e(l.a).getValue(u.f, "containerName")
                        }), []),
                        m = n;
                    !m && Object(i.a)(c) && (m = new URL(c).hostname);
                    var v = d(l.a).setValues;
                    if (Object(r.a)((function() {
                            p || v(u.f, {
                                containerName: m
                            })
                        })), t !== u.b) return null;
                    var b = o ? Object(a.__)("Web Container Name", "google-site-kit") : Object(a.__)("Container Name", "google-site-kit");
                    return e.createElement(g.a, {
                        name: "containerName",
                        label: b
                    })
                }
            }).call(this, n(3))
        },
        538: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ExistingTagNotice
                }));
                var r = n(1),
                    a = n(4),
                    i = n.n(a),
                    o = n(25),
                    c = i.a.useSelect;

                function ExistingTagNotice() {
                    var t = c((function(e) {
                        return e(o.g).getExistingTag()
                    }));
                    return t ? e.createElement("p", null, Object(r.sprintf)( // translators: %s: the existing container ID.
                        Object(r.__)("An existing tag was found on your site (%s). If you later decide to replace this tag, Site Kit can place the new tag for you. Make sure you remove the old tag first.", "google-site-kit"), t)) : null
                }
            }).call(this, n(3))
        },
        539: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return FormInstructions
                }));
                var r = n(1),
                    a = n(4),
                    i = n.n(a),
                    o = n(15),
                    c = n(22),
                    u = n(25),
                    s = n(10),
                    l = n(538),
                    g = n(81),
                    f = i.a.useSelect;

                function FormInstructions() {
                    var t = f((function(e) {
                            return e(u.g).hasExistingTag()
                        })),
                        n = f((function(e) {
                            return e(o.c).isSecondaryAMP()
                        })),
                        a = f((function(e) {
                            return e(u.g).getSingleAnalyticsPropertyID()
                        })),
                        i = f((function(e) {
                            return e(u.g).hasMultipleAnalyticsPropertyIDs()
                        })),
                        d = f((function(e) {
                            return e(s.f).getPropertyID()
                        })),
                        p = f((function(e) {
                            return e(c.a).isModuleActive("analytics")
                        }));
                    if (i) {
                        var m = Object(r.__)("Looks like you’re already using Google Analytics within your Google Tag Manager configurations. However, the configured Analytics tags reference different property IDs, or the setup process was not fully completed. You need to configure the same Analytics property in both containers.", "google-site-kit");
                        return e.createElement(g.a, {
                            message: m
                        })
                    }
                    if (p && a) {
                        if (a !== d) {
                            /* translators: %1$s: Tag Manager Analytics property ID, %2$s: Analytics property ID */
                            var v = Object(r.__)("Looks like you’re already using Google Analytics within your Google Tag Manager configuration. However, its Analytics property %1$s is different from the Analytics property %2$s, which is currently selected in the plugin. You need to configure the same Analytics property in both places.", "google-site-kit");
                            return e.createElement(g.a, {
                                message: Object(r.sprintf)(v, a, d)
                            })
                        }
                        return e.createElement("p", null, Object(r.sprintf)(
                            /* translators: %s: Analytics property ID */
                            Object(r.__)("Looks like you’re using Google Analytics. Your Analytics property %s is already set up in your Google Tag Manager configuration, so Site Kit will switch to using Google Tag Manager for Analytics.", "google-site-kit"), a))
                    }
                    return !p && a ? e.createElement("p", null, Object(r.__)("Looks like you’re already using Google Analytics within your Google Tag Manager configuration. Activate the Google Analytics module in Site Kit to see relevant insights in your dashboard.", "google-site-kit")) : t ? e.createElement(l.a, null) : n ? e.createElement("p", null, Object(r.__)("Looks like your site is using paired AMP. Please select your Tag Manager account and relevant containers below, the snippets will be inserted automatically on your site.", "google-site-kit")) : e.createElement("p", null, Object(r.__)("Please select your Tag Manager account and container below, the snippet will be inserted automatically on your site.", "google-site-kit"))
                }
            }).call(this, n(3))
        },
        54: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            })), n.d(t, "b", (function() {
                return v
            }));
            var r = n(6),
                a = n.n(r),
                i = n(29),
                o = n.n(i),
                c = n(9),
                u = n.n(c),
                s = n(78),
                l = n.n(s),
                g = n(11);

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

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        a()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e, t) {
                if (t && Array.isArray(t)) {
                    var n = t.map((function(e) {
                        return "object" === o()(e) ? Object(g.v)(e) : e
                    }));
                    return "".concat(e, "::").concat(l()(JSON.stringify(n)))
                }
                return e
            }
            var m = {
                receiveError: function(e, t, n) {
                    return u()(e, "error is required."), t && u()(n && Array.isArray(n), "args is required (and must be an array) when baseName is specified."), {
                        type: "RECEIVE_ERROR",
                        payload: {
                            error: e,
                            baseName: t,
                            args: n
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

            function v() {
                var e = {
                    getErrorForSelector: function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return u()(n, "selectorName is required."), e.getError(t, n, r)
                    },
                    getErrorForAction: function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return u()(n, "actionName is required."), e.getError(t, n, r)
                    },
                    getError: function(e, t, n) {
                        var r = e.error,
                            a = e.errors;
                        return t || n ? (u()(t, "baseName is required."), a[p(t, n)]) : r
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
                                var i = r.baseName,
                                    o = r.args,
                                    c = r.error;
                                return d(d({}, e), {}, i ? {
                                    errors: d(d({}, e.errors || {}), {}, a()({}, p(i, o), c))
                                } : {
                                    error: c
                                });
                            case "CLEAR_ERROR":
                                var u = r.baseName,
                                    s = r.args,
                                    l = d({}, e);
                                if (u) {
                                    var g = p(u, s);
                                    l.errors = d({}, e.errors || {}), delete l.errors[g]
                                } else l.error = void 0;
                                return l;
                            case "CLEAR_ERRORS":
                                var f = r.baseName,
                                    m = d({}, e);
                                if (f)
                                    for (var v in m.errors = d({}, e.errors || {}), m.errors)(v === f || v.startsWith("".concat(f, "::"))) && delete m.errors[v];
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
        540: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsForm
                }));
                var r = n(211),
                    a = n(112),
                    i = n(25);

                function SettingsForm() {
                    return e.createElement("div", {
                        className: "googlesitekit-tagmanager-settings-fields"
                    }, e.createElement(a.a, {
                        moduleSlug: "tagmanager",
                        storeName: i.g
                    }), e.createElement(r.g, null), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs"
                    }, e.createElement(r.c, null), e.createElement(r.j, null), e.createElement(r.a, null), e.createElement(r.h, null)), e.createElement(r.d, null), e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs googlesitekit-setup-module__inputs--multiline"
                    }, e.createElement(r.i, null)))
                }
            }).call(this, n(3))
        },
        55: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ProgressBar
                }));
                var r = n(0),
                    a = n.n(r),
                    i = n(8),
                    o = n.n(i);

                function ProgressBar(t) {
                    var n = t.className,
                        r = t.small,
                        a = t.compress,
                        i = t.indeterminate,
                        c = t.height,
                        u = t.progress,
                        s = void 0 !== c ? Math.round(c / 2) : void 0,
                        l = u ? "scaleX(".concat(u, ")") : void 0;
                    return e.createElement("div", {
                        role: "progressbar",
                        style: {
                            marginTop: s,
                            marginBottom: s
                        },
                        className: o()("mdc-linear-progress", n, {
                            "mdc-linear-progress--indeterminate": i,
                            "mdc-linear-progress--small": r,
                            "mdc-linear-progress--compress": a
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
            }).call(this, n(3))
        },
        556: function(e, t, n) {
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
                transform: "translate(.422 .422)"
            }, r.createElement("path", {
                d: "M16.091 30.725l14.461-14.543 6.817 6.856L22.908 37.58z",
                fill: "#8ab4f8"
            }), r.createElement("path", {
                d: "M22.91 8.496L16.09 1.64 1.63 16.182a4.867 4.867 0 000 6.854L16.09 37.58l6.817-6.855L11.856 19.61z",
                fill: "#4285f4"
            }), r.createElement("ellipse", {
                cx: 19.5,
                cy: 34.153,
                fill: "#1967d2",
                rx: 4.82,
                ry: 4.847
            }), r.createElement("path", {
                d: "M37.37 16.182L22.91 1.639a4.801 4.801 0 00-6.817 0 4.867 4.867 0 000 6.855l14.46 14.542a4.801 4.801 0 006.817 0 4.867 4.867 0 000-6.854z",
                fill: "#8ab4f8"
            }));
            t.a = function SvgTagmanager(e) {
                return r.createElement("svg", a({
                    viewBox: "0 0 40 40"
                }, e), i)
            }
        },
        557: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var r = n(2),
                a = n(4),
                i = n.n(a),
                o = n(25),
                c = i.a.useSelect,
                u = i.a.useDispatch;

            function s() {
                var e = c((function(e) {
                        return e(o.g).getSingleAnalyticsPropertyID()
                    })),
                    t = u(o.g).setGAPropertyID;
                Object(r.useEffect)((function() {
                    void 0 !== e && t(e || "")
                }), [e, t])
            }
        },
        562: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var r = n(5),
                a = n.n(r),
                i = n(14),
                o = n.n(i),
                c = n(2),
                u = n(4),
                s = n.n(u),
                l = n(25),
                g = s.a.useSelect,
                f = s.a.useDispatch;

            function d() {
                var e = g((function(e) {
                        return e(l.g).hasExistingTag()
                    })),
                    t = g((function(e) {
                        return e(l.g).getExistingTag()
                    })),
                    n = g((function(e) {
                        return e(l.g).getContainerID()
                    })),
                    r = g((function(e) {
                        return e(l.g).getTagPermission(t)
                    })),
                    i = g((function(e) {
                        return e(l.g).hasExistingTagPermission()
                    })),
                    u = f(l.g),
                    s = u.selectAccount,
                    d = u.selectContainerByID,
                    p = u.setUseSnippet;
                Object(c.useEffect)((function() {
                    o()(a.a.mark((function o() {
                        return a.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (e && t === n && p(!1), !e || !i) {
                                        a.next = 6;
                                        break
                                    }
                                    return a.next = 4, s(r.accountID);
                                case 4:
                                    return a.next = 6, d(t);
                                case 6:
                                case "end":
                                    return a.stop()
                            }
                        }), o)
                    })))()
                }), [e, t, i, r, s, d, p, n])
            }
        },
        59: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return r
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "f", (function() {
                return d
            })), n.d(t, "g", (function() {
                return p
            })), n.d(t, "h", (function() {
                return g.a
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
                u = function(e) {
                    var t = new Date(e);
                    o()(Object(c.a)(t), "Date param must construct to a valid date instance or be a valid date instance itself.");
                    var n = "".concat(t.getMonth() + 1),
                        r = "".concat(t.getDate());
                    return [t.getFullYear(), n.length < 2 ? "0".concat(n) : n, r.length < 2 ? "0".concat(r) : r].join("-")
                },
                s = n(12),
                l = n.n(s),
                g = n(42),
                f = function(e) {
                    o()(Object(g.a)(e), r);
                    var t = e.split("-"),
                        n = l()(t, 3),
                        a = n[0],
                        i = n[1],
                        c = n[2];
                    return new Date(a, i - 1, c)
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = f(e);
                    return n.setDate(n.getDate() - t), u(n)
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
        61: function(e, t, n) {
            "use strict";
            n.d(t, "n", (function() {
                return S
            })), n.d(t, "l", (function() {
                return k.a
            })), n.d(t, "d", (function() {
                return v
            })), n.d(t, "e", (function() {
                return b
            })), n.d(t, "j", (function() {
                return h
            })), n.d(t, "k", (function() {
                return y
            })), n.d(t, "i", (function() {
                return O
            })), n.d(t, "h", (function() {
                return j
            })), n.d(t, "g", (function() {
                return v
            })), n.d(t, "f", (function() {
                return _
            })), n.d(t, "c", (function() {
                return w
            })), n.d(t, "m", (function() {
                return D
            })), n.d(t, "b", (function() {
                return I
            })), n.d(t, "a", (function() {
                return x
            }));
            var r = n(23),
                a = n.n(r),
                i = n(26),
                o = n(8),
                c = n.n(o),
                u = n(1),
                s = n(72),
                l = n(196),
                g = n(11),
                f = n(140),
                d = n(12),
                p = n.n(d),
                m = n(10),
                v = function(e) {
                    return (parseInt(e, 10) || 0) > 0
                };

            function b(e) {
                return e === m.a || v(e)
            }

            function h(e) {
                return "string" == typeof e && /^UA-\d+-\d+$/.test(e)
            }

            function y(e) {
                return e === m.h || h(e)
            }

            function O(e) {
                return e === m.g || v(e)
            }

            function j(e) {
                return "string" == typeof e && e.trim().length > 0
            }

            function _(e) {
                return "string" == typeof e && /^AW-[0-9]+$/.test(e)
            }

            function S(e) {
                if (!h(e)) return !1;
                var t = e.match(/^UA-(\d+)-(\d+)/),
                    n = p()(t, 3);
                return {
                    accountID: n[1],
                    propertyID: e,
                    number: n[2]
                }
            }
            var k = n(190);

            function w(e, t) {
                for (var n = 1; n < e.length; n++) {
                    var r, a;
                    if (null === (r = e[n]) || void 0 === r || null === (a = r[t]) || void 0 === a ? void 0 : a[0]) return "HH:mm:ss"
                }
                return "mm:ss"
            }
            var E = n(50);

            function A(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return C(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
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

            function C(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function D(e, t) {
                var n, r = (Array.isArray(t) ? t : [t]).map(E.d),
                    a = A(e);
                try {
                    for (a.s(); !(n = a.n()).done;) {
                        var i = n.value,
                            o = i.websiteUrl;
                        if (o) {
                            var c, u = A(r);
                            try {
                                for (u.s(); !(c = u.n()).done;) {
                                    if (c.value === Object(E.d)(o)) return i
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
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

            function I(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = r.keyColumnIndex,
                    i = void 0 === a ? 0 : a,
                    o = r.maxSlices,
                    c = r.withOthers,
                    s = void 0 !== c && c,
                    l = r.tooltipCallback,
                    g = (null == e ? void 0 : e[0]) || {},
                    f = g.data,
                    d = void 0 === f ? {} : f,
                    p = d.rows,
                    m = void 0 === p ? [] : p,
                    v = d.totals,
                    b = void 0 === v ? [] : v,
                    h = "function" == typeof l,
                    y = ["Source", "Percent"];
                h && y.push({
                    type: "string",
                    role: "tooltip",
                    p: {
                        html: !0
                    }
                });
                var O = (null == b || null === (t = b[0]) || void 0 === t || null === (n = t.values) || void 0 === n ? void 0 : n[i]) || 0,
                    j = [y],
                    _ = s,
                    S = m.length,
                    k = 1;
                o > 0 ? (_ = s && m.length > o, S = Math.min(m.length, _ ? o - 1 : o)) : (_ = !1, S = m.length);
                for (var w = 0; w < S; w++) {
                    var E = m[w],
                        A = E.metrics[0].values[i],
                        C = O > 0 ? A / O : 0;
                    k -= C;
                    var D = [E.dimensions[0], C];
                    h && D.push(l(E, D)), j.push(D)
                }
                if (_ && k > 0) {
                    var I = [Object(u.__)("Others", "google-site-kit"), k];
                    h && I.push(l(null, I)), j.push(I)
                }
                return j
            }

            function P(e, t, n) {
                var r = [];
                return Object(i.each)(e, (function(e) {
                    if (e.metrics) {
                        var a = e.metrics[t].values,
                            i = e.dimensions[0],
                            o = Object(l.a)(i);
                        r.push([o, a[n]])
                    }
                })), r
            }

            function x(e, t, n) {
                var r, o, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    p = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [Object(u.__)("Users", "google-site-kit"), Object(u.__)("Sessions", "google-site-kit"), Object(u.__)("Bounce Rate %", "google-site-kit"), Object(u.__)("Session Duration", "google-site-kit")],
                    m = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [function(e) {
                        return parseFloat(e).toLocaleString()
                    }, function(e) {
                        return parseFloat(e).toLocaleString()
                    }, function(e) {
                        return Object(g.r)(e / 100, {
                            style: "percent",
                            signDisplay: "never",
                            maximumFractionDigits: 2
                        })
                    }, function(e) {
                        return Object(g.r)(e, "s")
                    }];
                if (!Array.isArray(null === (r = e[0]) || void 0 === r || null === (o = r.data) || void 0 === o ? void 0 : o.rows)) return !1;
                var v = a()(e[0].data.rows),
                    b = v.length;
                if (2 * n > b) {
                    for (var h = new Date, y = 0; n > y; y++) {
                        var O = (h.getMonth() + 1).toString(),
                            j = h.getDate().toString(),
                            _ = h.getFullYear().toString() + (2 > O.length ? "0" : "") + O + (2 > j.length ? "0" : "") + j;
                        if (y > b) {
                            var S = {
                                dimensions: [_],
                                metrics: [{
                                    values: [0, 0, 0, 0, 0]
                                }]
                            };
                            v.unshift(S)
                        }
                        h.setDate(h.getDate() - 1)
                    }
                    v.push([0, 0])
                }
                var k = p[t] === Object(u.__)("Session Duration", "google-site-kit"),
                    w = k ? "timeofday" : "number",
                    E = [
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
                            type: w,
                            label: p[t]
                        }, {
                            type: w,
                            label: Object(u.__)("Previous period", "google-site-kit")
                        }]
                    ],
                    A = Object(f.a)(v, {
                        dateRangeLength: n
                    }),
                    C = A.compareRange,
                    D = A.currentRange,
                    I = P(D, l, t),
                    x = P(C, d, t),
                    N = Object(s.a)(),
                    T = {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    };
                return Object(i.each)(I, (function(e, n) {
                    if (e[0] && e[1] && x[n]) {
                        var r = parseFloat(x[n][1]),
                            a = Object(g.b)(e[1], r),
                            i = Object(g.h)(a),
                            o = Object(u.sprintf)(
                                /* translators: 1: date for user stats, 2: previous date for user stats comparison */
                                Object(u._x)("%1$s vs %2$s", "Date range for chart tooltip", "google-site-kit"), e[0].toLocaleDateString(N, T), x[n][0].toLocaleDateString(N, T)),
                            s = Object(u.sprintf)(
                                /* translators: 1: selected stat label, 2: numeric value of selected stat, 3: up or down arrow , 4: different change in percentage */
                                Object(u._x)("%1$s: <strong>%2$s</strong> <em>%3$s %4$s</em>", "Stat information for chart tooltip", "google-site-kit"), p[t], m[t](e[1]), i, Object(g.r)(Math.abs(a), "%"));
                        E.push([e[0], '<div class="'.concat(c()("googlesitekit-visualization-tooltip", {
                            "googlesitekit-visualization-tooltip--up": a > 0,
                            "googlesitekit-visualization-tooltip--down": a < 0
                        }), '">\n\t\t\t\t<p>').concat(o, "</p>\n\t\t\t\t<p>").concat(s, "</p>\n\t\t\t</div>"), k ? Object(g.d)(e[1]) : e[1], k ? Object(g.d)(x[n][1]) : x[n][1]])
                    }
                })), E
            }
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
            var u = n(110),
                s = n.n(u);
            n.d(t, "m", (function() {
                return s.a
            })), n.d(t, "k", (function() {
                return u.Option
            }));
            var l = n(244);
            n.d(t, "j", (function() {
                return l.a
            }));
            var g = n(241);
            n.d(t, "e", (function() {
                return g.a
            }));
            var f = n(240);
            n.d(t, "g", (function() {
                return f.a
            }));
            var d = n(93);
            n.d(t, "a", (function() {
                return d.a
            })), n.d(t, "b", (function() {
                return d.b
            })), n.d(t, "l", (function() {
                return d.c
            }))
        },
        705: function(e, t, n) {
            "use strict";
            (function(e, r) {
                n.d(t, "a", (function() {
                    return AccountCreate
                }));
                var a = n(2),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    u = n(25),
                    s = n(13),
                    l = n(112),
                    g = n(21),
                    f = n(19),
                    d = n(55),
                    p = n(31),
                    m = n(20),
                    v = c.a.useSelect,
                    b = c.a.useDispatch;

                function AccountCreate() {
                    var t = Object(a.useContext)(m.b),
                        n = v((function(e) {
                            return e(u.g).hasFinishedResolution("getAccounts")
                        })),
                        o = v((function(e) {
                            return e(s.a).hasFinishedResolution("getUser")
                        })),
                        c = v((function(e) {
                            return e(u.g).getServiceURL({
                                path: "admin/accounts/create"
                            })
                        })),
                        h = b(u.g).resetAccounts,
                        y = Object(a.useCallback)((function() {
                            h()
                        }), [h]),
                        O = Object(a.useCallback)((function() {
                            Object(p.b)("".concat(t, "_tagmanager"), "create_account"), e.window.open(c, "_blank")
                        }), [c, t]);
                    return n && o ? r.createElement("div", null, r.createElement(l.a, {
                        moduleSlug: "tagmanager",
                        storeName: u.g
                    }), r.createElement("p", null, Object(i.__)("To create a new account, click the button below which will open the Google Tag Manager account creation screen in a new window.", "google-site-kit")), r.createElement("p", null, Object(i.__)("Once completed, click the link below to re-fetch your accounts to continue.", "google-site-kit")), r.createElement("div", {
                        className: "googlesitekit-setup-module__action"
                    }, r.createElement(f.a, {
                        onClick: O
                    }, Object(i.__)("Create an account", "google-site-kit")), r.createElement("div", {
                        className: "googlesitekit-setup-module__sub-action"
                    }, r.createElement(g.a, {
                        onClick: y
                    }, Object(i.__)("Re-fetch My Account", "google-site-kit"))))) : r.createElement(d.a, null)
                }
            }).call(this, n(18), n(3))
        },
        706: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AccountSelect
                }));
                var r = n(2),
                    a = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(25),
                    u = n(55),
                    s = n(7),
                    l = n(31),
                    g = n(20),
                    f = o.a.useSelect,
                    d = o.a.useDispatch;

                function AccountSelect() {
                    var t = Object(r.useContext)(g.b),
                        n = f((function(e) {
                            return {
                                accounts: e(c.g).getAccounts(),
                                hasResolvedAccounts: e(c.g).hasFinishedResolution("getAccounts")
                            }
                        })),
                        i = n.accounts,
                        o = n.hasResolvedAccounts,
                        p = f((function(e) {
                            return e(c.g).getAccountID()
                        })),
                        m = f((function(e) {
                            return e(c.g).hasExistingTag()
                        })),
                        v = d(c.g).selectAccount,
                        b = Object(r.useCallback)((function(e, n) {
                            var r = n.dataset.value;
                            if (p !== r) {
                                var a = r === c.a ? "change_account_new" : "change_account";
                                Object(l.b)("".concat(t, "_tagmanager"), a), v(r)
                            }
                        }), [p, v, t]);
                    return o ? e.createElement(s.m, {
                        className: "googlesitekit-tagmanager__select-account",
                        label: Object(a.__)("Account", "google-site-kit"),
                        value: p,
                        onEnhancedChange: b,
                        disabled: m,
                        enhanced: !0,
                        outlined: !0
                    }, (i || []).concat({
                        accountId: c.a,
                        name: Object(a.__)("Set up a new account", "google-site-kit")
                    }).map((function(t) {
                        var n = t.accountId,
                            r = t.name;
                        return e.createElement(s.k, {
                            key: n,
                            value: n
                        }, r)
                    }))) : e.createElement(u.a, {
                        small: !0
                    })
                }
            }).call(this, n(3))
        },
        707: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return AMPContainerSelect
                }));
                var r = n(2),
                    a = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(25),
                    u = n(15),
                    s = n(414),
                    l = n(31),
                    g = n(20),
                    f = o.a.useSelect,
                    d = o.a.useDispatch;

                function AMPContainerSelect() {
                    var t = Object(r.useContext)(g.b),
                        n = f((function(e) {
                            return e(c.g).getAccountID()
                        })),
                        i = f((function(e) {
                            return e(c.g).getAMPContainerID()
                        })),
                        o = f((function(e) {
                            return e(c.g).getAMPContainers(n)
                        })),
                        p = f((function(e) {
                            return e(u.c).isAMP()
                        })),
                        m = f((function(e) {
                            return e(u.c).isSecondaryAMP()
                        })),
                        v = d(c.g),
                        b = v.setAMPContainerID,
                        h = v.setInternalAMPContainerID,
                        y = Object(r.useCallback)((function(e, n) {
                            var r = n.dataset,
                                a = r.value,
                                o = r.internalId;
                            if (i !== a) {
                                var u = a === c.b ? "change_amp_container_new" : "change_amp_container";
                                Object(l.b)("".concat(t, "_tagmanager"), u), b(a), h(o || "")
                            }
                        }), [i, b, h, t]);
                    if (!p) return null;
                    var O = m ? Object(a.__)("AMP Container", "google-site-kit") : Object(a.__)("Container", "google-site-kit");
                    return e.createElement(s.a, {
                        className: "googlesitekit-tagmanager__select-container--amp",
                        label: O,
                        value: i,
                        containers: o,
                        onEnhancedChange: y
                    })
                }
            }).call(this, n(3))
        },
        708: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ContainerNames
                }));
                var r = n(4),
                    a = n.n(r),
                    i = n(535),
                    o = n(537),
                    c = n(25),
                    u = a.a.useSelect;

                function ContainerNames() {
                    var t = u((function(e) {
                            return e(c.g).getContainerID()
                        })),
                        n = u((function(e) {
                            return e(c.g).getAMPContainerID()
                        }));
                    return t !== c.b && n !== c.b ? null : e.createElement("div", {
                        className: "googlesitekit-setup-module__inputs googlesitekit-setup-module__inputs--collapsed"
                    }, t === c.b && e.createElement(o.a, null), n === c.b && e.createElement(i.a, null))
                }
            }).call(this, n(3))
        },
        709: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return ExistingTagError
                }));
                var r = n(1),
                    a = n(4),
                    i = n.n(a),
                    o = n(25),
                    c = n(81),
                    u = i.a.useSelect;

                function ExistingTagError() {
                    var t = u((function(e) {
                        return e(o.g).getExistingTag()
                    }));
                    if (!t) return null;
                    var n = Object(r.sprintf)(
                        /* translators: %s: container ID of the existing tag */
                        Object(r.__)("We’ve detected there’s already an existing Tag Manager tag on your site (%s), but your account doesn’t seem to have the necessary access to this container. You can either remove the existing tag and connect to a different account, or request access to this container from your team.", "google-site-kit"), t);
                    return e.createElement(c.a, {
                        message: n
                    })
                }
            }).call(this, n(3))
        },
        710: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return TagCheckProgress
                }));
                var r = n(8),
                    a = n.n(r),
                    i = n(0),
                    o = n.n(i),
                    c = n(1),
                    u = n(4),
                    s = n.n(u),
                    l = n(25),
                    g = n(55),
                    f = s.a.useSelect;

                function TagCheckProgress(t) {
                    var n = t.className;
                    return f((function(e) {
                        var t = e(l.g).getAccountID(),
                            n = e(l.g).getInternalContainerID(),
                            r = e(l.g).getInternalAMPContainerID();
                        return e(l.g).isResolving("getLiveContainerVersion", [t, n]) || e(l.g).isResolving("getLiveContainerVersion", [t, r])
                    })) ? e.createElement("div", {
                        className: a()(n)
                    }, e.createElement("small", null, Object(c.__)("Checking tags…", "google-site-kit")), e.createElement(g.a, {
                        small: !0,
                        compress: !0
                    })) : null
                }
                TagCheckProgress.propTypes = {
                    className: o.a.string
                }, TagCheckProgress.defaultProps = {
                    className: ""
                }
            }).call(this, n(3))
        },
        711: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return UseSnippetSwitch
                }));
                var r = n(2),
                    a = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(25),
                    u = n(129),
                    s = o.a.useSelect,
                    l = o.a.useDispatch;

                function UseSnippetSwitch() {
                    var t = s((function(e) {
                            return e(c.g).getUseSnippet()
                        })),
                        n = l(c.g).setUseSnippet,
                        i = Object(r.useCallback)((function() {
                            n(!t)
                        }), [t, n]);
                    return void 0 === t ? null : e.createElement("div", {
                        className: "googlesitekit-tagmanager-usesnippet"
                    }, e.createElement(u.a, {
                        label: Object(a.__)("Let Site Kit place code on your site", "google-site-kit"),
                        checked: t,
                        onClick: i,
                        hideLabel: !1
                    }), e.createElement("p", null, t ? Object(a.__)("Site Kit will add the code automatically.", "google-site-kit") : Object(a.__)("Site Kit will not add the code to your site.", "google-site-kit")))
                }
            }).call(this, n(3))
        },
        712: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return WebContainerSelect
                }));
                var r = n(2),
                    a = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(25),
                    u = n(15),
                    s = n(414),
                    l = n(31),
                    g = n(20),
                    f = o.a.useSelect,
                    d = o.a.useDispatch;

                function WebContainerSelect() {
                    var t = Object(r.useContext)(g.b),
                        n = f((function(e) {
                            return e(c.g).getAccountID()
                        })),
                        i = f((function(e) {
                            return e(c.g).getContainerID()
                        })),
                        o = f((function(e) {
                            return e(c.g).getWebContainers(n)
                        })),
                        p = f((function(e) {
                            return e(u.c).isPrimaryAMP()
                        })),
                        m = f((function(e) {
                            return e(u.c).isSecondaryAMP()
                        })),
                        v = d(c.g),
                        b = v.setContainerID,
                        h = v.setInternalContainerID,
                        y = Object(r.useCallback)((function(e, n) {
                            var r = n.dataset,
                                a = r.value,
                                o = r.internalId;
                            if (i !== a) {
                                var u = a === c.b ? "change_container_new" : "change_container";
                                Object(l.b)("".concat(t, "_tagmanager"), u), b(a), h(o || "")
                            }
                        }), [i, b, h, t]);
                    if (p) return null;
                    var O = m ? Object(a.__)("Web Container", "google-site-kit") : Object(a.__)("Container", "google-site-kit");
                    return e.createElement(s.a, {
                        className: "googlesitekit-tagmanager__select-container--web",
                        label: O,
                        value: i,
                        containers: o,
                        onEnhancedChange: y
                    })
                }
            }).call(this, n(3))
        },
        713: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SetupMain
                }));
                var r = n(0),
                    a = n.n(r),
                    i = n(1),
                    o = n(4),
                    c = n.n(o),
                    u = n(556),
                    s = n(534),
                    l = n(55),
                    g = n(25),
                    f = n(36),
                    d = n(38),
                    p = n(562),
                    m = n(211),
                    v = n(557),
                    b = c.a.useSelect;

                function SetupMain(t) {
                    var n, r = t.finishSetup,
                        a = b((function(e) {
                            return e(g.g).getAccounts()
                        })),
                        o = b((function(e) {
                            return e(g.g).getAccountID()
                        })),
                        c = b((function(e) {
                            return e(g.g).hasExistingTag()
                        })),
                        h = b((function(e) {
                            return e(g.g).hasExistingTagPermission()
                        })),
                        y = b((function(e) {
                            return e(g.g).isDoingSubmitChanges()
                        })),
                        O = b((function(e) {
                            return e(g.g).hasFinishedResolution("getAccounts")
                        })),
                        j = b((function(e) {
                            return e(f.a).getValue(g.f, "submitInProgress")
                        })),
                        _ = b((function(e) {
                            return e(d.a).isNavigating()
                        })),
                        S = g.a === o;
                    return Object(p.a)(), Object(v.a)(), n = y || !O || _ || j || void 0 === c || void 0 === h ? e.createElement(l.a, null) : c && !1 === h ? e.createElement(m.e, null) : S || !(null == a ? void 0 : a.length) ? e.createElement(m.b, null) : e.createElement(s.a, {
                        finishSetup: r
                    }), e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--tagmanager"
                    }, e.createElement("div", {
                        className: "googlesitekit-setup-module__logo"
                    }, e.createElement(u.a, {
                        width: "33",
                        height: "33"
                    })), e.createElement("h2", {
                        className: "googlesitekit-heading-3 googlesitekit-setup-module__title"
                    }, Object(i._x)("Tag Manager", "Service name", "google-site-kit")), n)
                }
                SetupMain.propTypes = {
                    finishSetup: a.a.func
                }, SetupMain.defaultProps = {
                    finishSetup: function() {}
                }
            }).call(this, n(3))
        },
        714: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsEdit
                }));
                var r = n(4),
                    a = n.n(r),
                    i = n(55),
                    o = n(25),
                    c = n(562),
                    u = n(557),
                    s = n(211),
                    l = n(540),
                    g = a.a.useSelect;

                function SettingsEdit() {
                    var t, n = g((function(e) {
                            return e(o.g).getAccounts()
                        })) || [],
                        r = g((function(e) {
                            return e(o.g).getAccountID()
                        })),
                        a = g((function(e) {
                            return e(o.g).hasExistingTag()
                        })),
                        f = g((function(e) {
                            return e(o.g).hasExistingTagPermission()
                        })),
                        d = g((function(e) {
                            return e(o.g).isDoingSubmitChanges()
                        })),
                        p = g((function(e) {
                            return e(o.g).hasFinishedResolution("getAccounts")
                        })),
                        m = o.a === r;
                    return Object(c.a)(), Object(u.a)(), t = d || !p || void 0 === a || void 0 === f ? e.createElement(i.a, null) : a && !1 === f ? e.createElement(s.e, null) : m || !(null == n ? void 0 : n.length) ? e.createElement(s.b, null) : e.createElement(l.a, null), e.createElement("div", {
                        className: "googlesitekit-setup-module googlesitekit-setup-module--tagmanager"
                    }, t)
                }
            }).call(this, n(3))
        },
        715: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return SettingsView
                }));
                var r = n(2),
                    a = n(1),
                    i = n(4),
                    o = n.n(i),
                    c = n(199),
                    u = n(15),
                    s = n(25),
                    l = n(211),
                    g = n(112),
                    f = o.a.useSelect;

                function SettingsView() {
                    var t = f((function(e) {
                            return e(s.g).getAccountID()
                        })),
                        n = f((function(e) {
                            return e(s.g).getContainerID()
                        })),
                        i = f((function(e) {
                            return e(s.g).getAMPContainerID()
                        })),
                        o = f((function(e) {
                            return e(s.g).getUseSnippet()
                        })),
                        d = f((function(e) {
                            return e(s.g).hasExistingTag()
                        })),
                        p = f((function(e) {
                            return e(s.g).hasExistingTagPermission()
                        })),
                        m = f((function(e) {
                            return e(u.c).isAMP()
                        })),
                        v = f((function(e) {
                            return e(u.c).isSecondaryAMP()
                        }));
                    return e.createElement(r.Fragment, null, (!d || p) && e.createElement(g.a, {
                        moduleSlug: "tagmanager",
                        storeName: s.g
                    }), d && !p && void 0 !== p && e.createElement(l.e, null), d && p && void 0 !== p && e.createElement(l.f, null), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(a.__)("Account", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(c.a, {
                        value: t
                    }))), (!m || v) && e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, v && e.createElement("span", null, Object(a.__)("Web Container ID", "google-site-kit")), !v && e.createElement("span", null, Object(a.__)("Container ID", "google-site-kit"))), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(c.a, {
                        value: n
                    }))), m && e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, v && e.createElement("span", null, Object(a.__)("AMP Container ID", "google-site-kit")), !v && e.createElement("span", null, Object(a.__)("Container ID", "google-site-kit"))), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, e.createElement(c.a, {
                        value: i
                    })))), e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-items"
                    }, e.createElement("div", {
                        className: "googlesitekit-settings-module__meta-item"
                    }, e.createElement("h5", {
                        className: "googlesitekit-settings-module__meta-item-type"
                    }, Object(a.__)("Tag Manager Code Snippet", "google-site-kit")), e.createElement("p", {
                        className: "googlesitekit-settings-module__meta-item-data"
                    }, o && e.createElement("span", null, Object(a.__)("Snippet is inserted", "google-site-kit")), !o && e.createElement("span", null, Object(a.__)("Snippet is not inserted", "google-site-kit"))), d && e.createElement("p", null, Object(a.__)("Placing two tags at the same time is not recommended.", "google-site-kit")))))
                }
            }).call(this, n(3))
        },
        72: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "c", (function() {
                    return j
                })), n.d(t, "d", (function() {
                    return S
                })), n.d(t, "b", (function() {
                    return k
                })), n.d(t, "a", (function() {
                    return w
                }));
                var r = n(12),
                    a = n.n(r),
                    i = n(29),
                    o = n.n(i),
                    c = n(6),
                    u = n.n(c),
                    s = n(17),
                    l = n.n(s),
                    g = n(26),
                    f = n(67),
                    d = n.n(f),
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
                            u()(e, t, n[t])
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
                                    }, l()(t, ["unitDisplay"])), {}, {
                                        style: "unit"
                                    });
                                return 0 === e ? S(a, v(v({}, o), {}, {
                                    unit: "second"
                                })) : Object(p.sprintf)(
                                    /* translators: 1: formatted seconds, 2: formatted minutes, 3: formatted hours */
                                    Object(p._x)("%3$s %2$s %1$s", "duration of time: hh mm ss", "google-site-kit"), a ? S(a, v(v({}, o), {}, {
                                        unit: "second"
                                    })) : "", r ? S(r, v(v({}, o), {}, {
                                        unit: "minute"
                                    })) : "", n ? S(n, v(v({}, o), {}, {
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
                            Object(p.__)("%sM", "google-site-kit"), S(y(e), e % 10 == 0 ? {} : t)) : 1e4 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), S(y(e))) : 1e3 <= e ? Object(p.sprintf)( // translators: %s: an abbreviated number in thousands.
                            Object(p.__)("%sK", "google-site-kit"), S(y(e), e % 10 == 0 ? {} : t)) : S(e, {
                            signDisplay: "never",
                            maximumFractionDigits: 1
                        })
                    },
                    j = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e = Object(g.isFinite)(e) ? e : Number(e), Object(g.isFinite)(e) || (console.warn("Invalid number", e, o()(e)), e = 0);
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
                            } : Object(g.isPlainObject)(t) && (n = v({}, t))
                        }
                        var r = n,
                            a = r.style,
                            i = void 0 === a ? "metric" : a;
                        return "metric" === i ? O(e) : "duration" === i ? b(e, t) : S(e, n)
                    },
                    _ = d()(console.warn),
                    S = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            r = void 0 === n ? w() : n,
                            i = l()(t, ["locale"]);
                        try {
                            return new Intl.NumberFormat(r, i).format(e)
                        } catch (t) {
                            _("Site Kit numberFormat error: Intl.NumberFormat( ".concat(JSON.stringify(r), ", ").concat(JSON.stringify(i), " ).format( ").concat(o()(e), " )"), t.message)
                        }
                        for (var c = {
                                currencyDisplay: "narrow",
                                currencySign: "accounting",
                                style: "unit"
                            }, u = ["signDisplay", "compactDisplay"], s = {}, g = 0, f = Object.entries(i); g < f.length; g++) {
                            var d = a()(f[g], 2),
                                p = d[0],
                                m = d[1];
                            c[p] && m === c[p] || (u.includes(p) || (s[p] = m))
                        }
                        try {
                            return new Intl.NumberFormat(r, s).format(e)
                        } catch (t) {
                            return new Intl.NumberFormat(r).format(e)
                        }
                    },
                    k = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.locale,
                            r = void 0 === n ? w() : n,
                            a = t.style,
                            i = void 0 === a ? "long" : a,
                            o = t.type,
                            c = void 0 === o ? "conjunction" : o;
                        if (Intl.ListFormat) {
                            var u = new Intl.ListFormat(r, {
                                style: i,
                                type: c
                            });
                            return u.format(e)
                        }
                        /* translators: used between list items, there is a space after the comma. */
                        var s = Object(p.__)(", ", "google-site-kit");
                        return e.join(s)
                    },
                    w = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                            n = Object(g.get)(t, ["_googlesitekitLegacyData", "locale"]);
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
                return A
            })), n.d(t, "b", (function() {
                return C
            })), n.d(t, "c", (function() {
                return D
            })), n.d(t, "d", (function() {
                return P
            })), n.d(t, "e", (function() {
                return x
            })), n.d(t, "g", (function() {
                return T
            })), n.d(t, "f", (function() {
                return R
            }));
            var r, a = n(5),
                i = n.n(a),
                o = n(23),
                c = n.n(o),
                u = n(6),
                s = n.n(u),
                l = n(9),
                g = n.n(l),
                f = n(207),
                d = n.n(f),
                p = n(67),
                m = n.n(p),
                v = n(104);

            function b(e, t) {
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
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        s()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
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
                        a = t.reduce((function(e, t) {
                            return [].concat(c()(e), c()(Object.keys(t)))
                        }), []),
                        i = I(a);
                    return g()(0 === i.length, "collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(i.join(", "), ". Check your data stores for duplicates.")), r
                },
                O = y,
                j = y,
                _ = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r, a = [].concat(t);
                    return "function" != typeof a[0] && (r = a.shift()),
                        function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return a.reduce((function(e, n) {
                                return n(e, t)
                            }), e)
                        }
                },
                S = y,
                k = y,
                w = y,
                E = function(e) {
                    return e
                },
                A = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = w.apply(void 0, c()(t.map((function(e) {
                        return e.initialState || {}
                    }))));
                    return {
                        initialState: r,
                        controls: j.apply(void 0, c()(t.map((function(e) {
                            return e.controls || {}
                        })))),
                        actions: O.apply(void 0, c()(t.map((function(e) {
                            return e.actions || {}
                        })))),
                        reducer: _.apply(void 0, [r].concat(c()(t.map((function(e) {
                            return e.reducer || E
                        }))))),
                        resolvers: S.apply(void 0, c()(t.map((function(e) {
                            return e.resolvers || {}
                        })))),
                        selectors: k.apply(void 0, c()(t.map((function(e) {
                            return e.selectors || {}
                        }))))
                    }
                },
                C = {
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
                D = (r = {}, s()(r, "GET_REGISTRY", Object(v.d)((function(e) {
                    return function() {
                        return e
                    }
                }))), s()(r, "AWAIT", (function(e) {
                    return e.payload.value
                })), r),
                I = function(e) {
                    for (var t = [], n = {}, r = 0; r < e.length; r++) {
                        var a = e[r];
                        n[a] = n[a] >= 1 ? n[a] + 1 : 1, n[a] > 1 && t.push(a)
                    }
                    return t
                },
                P = {
                    actions: C,
                    controls: D,
                    reducer: E
                },
                x = function(e) {
                    return function(t) {
                        return N(e(t))
                    }
                },
                N = m()((function(e) {
                    return d()(e, (function(e, t) {
                        return function() {
                            var n = e.apply(void 0, arguments);
                            return g()(void 0 !== n, "".concat(t, "(...) is not resolved")), n
                        }
                    }))
                }));

            function T(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.negate,
                    r = void 0 !== n && n,
                    a = Object(v.e)((function(t) {
                        return function(n) {
                            var a = !r,
                                i = !!r;
                            try {
                                for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) c[u - 1] = arguments[u];
                                return e.apply(void 0, [t, n].concat(c)), a
                            } catch (e) {
                                return i
                            }
                        }
                    })),
                    i = Object(v.e)((function(t) {
                        return function(n) {
                            for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) a[i - 1] = arguments[i];
                            e.apply(void 0, [t, n].concat(a))
                        }
                    }));
                return {
                    safeSelector: a,
                    dangerousSelector: i
                }
            }

            function R(e, t) {
                return g()("function" == typeof e, "a validator function is required."), g()("function" == typeof t, "an action creator function is required."), g()("Generator" !== e[Symbol.toStringTag] && "GeneratorFunction" !== e[Symbol.toStringTag], "an action’s validator function must not be a generator."),
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
                return a
            })), n.d(t, "c", (function() {
                return i
            }));
            var r = function(e) {
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
        80: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return u
                })), n.d(t, "b", (function() {
                    return s
                })), n.d(t, "c", (function() {
                    return g
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
                        u = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return o = e.done, e
                        },
                        e: function(e) {
                            u = !0, i = e
                        },
                        f: function() {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                    }
                }

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }
                var u = function() {
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
                        var u = document.createElement("span");
                        return u.setAttribute("class", "screen-reader-text"), u.textContent = Object(i.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(i._n)("%d notification", "%d notifications", e, "google-site-kit"), e), o.appendChild(c), o.appendChild(u), t && null === r && t.appendChild(o), n && null === a && n.appendChild(o), o
                    },
                    s = function() {
                        e.localStorage && e.localStorage.clear(), e.sessionStorage && e.sessionStorage.clear()
                    },
                    l = function(e) {
                        for (var t = location.search.substr(1).split("&"), n = {}, r = 0; r < t.length; r++) n[t[r].split("=")[0]] = decodeURIComponent(t[r].split("=")[1]);
                        return e ? n.hasOwnProperty(e) ? decodeURIComponent(n[e].replace(/\+/g, " ")) : "" : n
                    },
                    g = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                            n = new URL(t.href);
                        if (e) return n.searchParams && n.searchParams.get ? n.searchParams.get(e) : l(e);
                        var r, i = {},
                            c = o(n.searchParams.entries());
                        try {
                            for (c.s(); !(r = c.n()).done;) {
                                var u = a()(r.value, 2),
                                    s = u[0],
                                    g = u[1];
                                i[s] = g
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
                        var t, n, r, a, i, o, c, u, s, l, g, f, d, p, m;
                        if (void 0 !== e) return 1 === (null == e || null === (t = e[0]) || void 0 === t || null === (n = t.data) || void 0 === n || null === (r = n.rows) || void 0 === r ? void 0 : r.length) || (null == e || null === (a = e[0]) || void 0 === a || null === (i = a.data) || void 0 === i || null === (o = i.rows) || void 0 === o || null === (c = o[0]) || void 0 === c || null === (u = c.metrics) || void 0 === u || null === (s = u[0]) || void 0 === s || null === (l = s.values) || void 0 === l ? void 0 : l[0]) === (null == e || null === (g = e[0]) || void 0 === g || null === (f = g.data) || void 0 === f || null === (d = f.totals) || void 0 === d || null === (p = d[0]) || void 0 === p || null === (m = p.values) || void 0 === m ? void 0 : m[0])
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

                function u(e) {
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

                function l(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                        a = u(u({}, s), t);
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
                    return d
                }));
                var r = n(5),
                    a = n.n(r),
                    i = n(6),
                    o = n.n(i),
                    c = n(14),
                    u = n.n(c),
                    s = n(51),
                    l = n(30);

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

                function f(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? g(Object(n), !0).forEach((function(t) {
                            o()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function d(t, n, r, i) {
                    var o = Object(s.a)(n);
                    return function() {
                        var n = u()(a.a.mark((function n(c, u, s, g) {
                            var d, p, m, v, b, h, y, O, j, _;
                            return a.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (v = t.activeModules, b = t.referenceSiteURL, h = t.trackingEnabled, y = t.trackingID, O = t.userIDHash, h) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        return r(), j = null !== (d = null === (p = e._googlesitekitUserData) || void 0 === p || null === (m = p.user) || void 0 === m ? void 0 : m.roles) && void 0 !== d ? d : [], _ = {
                                            send_to: y,
                                            event_category: c,
                                            event_label: s,
                                            value: g,
                                            dimension1: b,
                                            dimension2: j.join(","),
                                            dimension3: O,
                                            dimension4: "1.72.0",
                                            dimension5: Array.from(l.a).join(","),
                                            dimension6: v.join(",")
                                        }, n.abrupt("return", new Promise((function(e) {
                                            var t, n, r = setTimeout((function() {
                                                    i.console.warn('Tracking event "'.concat(u, '" (category "').concat(c, '") took too long to fire.')), e()
                                                }), 1e3),
                                                a = function() {
                                                    clearTimeout(r), e()
                                                };
                                            o("event", u, f(f({}, _), {}, {
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
                u = n.n(c),
                s = n(9),
                l = n.n(s),
                g = n(4),
                f = n.n(g),
                d = n(40),
                p = f.a.createRegistryControl,
                m = function(e) {
                    var t;
                    l()(e, "storeName is required to create a snapshot store.");
                    var n = {},
                        r = {
                            deleteSnapshot: u.a.mark((function e() {
                                var t;
                                return u.a.wrap((function(e) {
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
                            restoreSnapshot: u.a.mark((function e() {
                                var t, n, r, a, i, o, c = arguments;
                                return u.a.wrap((function(e) {
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
                            createSnapshot: u.a.mark((function e() {
                                var t;
                                return u.a.wrap((function(e) {
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
                            return Object(d.a)("datastore::cache::".concat(e))
                        })), o()(t, "CREATE_SNAPSHOT", p((function(t) {
                            return function() {
                                return Object(d.d)("datastore::cache::".concat(e), t.stores[e].store.getState())
                            }
                        }))), o()(t, "RESTORE_SNAPSHOT", (function() {
                            return Object(d.b)("datastore::cache::".concat(e), 3600)
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
        [1083, 1, 0]
    ]
]);
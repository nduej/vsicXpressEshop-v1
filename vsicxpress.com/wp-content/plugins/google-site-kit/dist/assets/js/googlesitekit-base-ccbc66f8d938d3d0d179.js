(window.__googlesitekit_webpackJsonp = window.__googlesitekit_webpackJsonp || []).push([
    [5], {
        1: function(t, e) {
            t.exports = googlesitekit.i18n
        },
        1078: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    var e = n(80);
                    if ("toplevel_page_googlesitekit-dashboard" !== t.pagenow && "site-kit_page_googlesitekit-splash" !== t.pagenow && "admin_page_googlesitekit-splash" !== t.pagenow && t.localStorage) {
                        var o = t.localStorage.getItem("googlesitekit::total-notifications") || 0;
                        Object(e.a)(o)
                    }
                    var r = document.querySelector("#wp-admin-bar-logout a");
                    r || (r = document.querySelector(".sidebar__me-signout button")), r && r.addEventListener("click", (function() {
                        Object(e.b)()
                    }))
                }.call(this, n(18))
        },
        80: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return c
                })), n.d(e, "b", (function() {
                    return u
                })), n.d(e, "c", (function() {
                    return g
                }));
                var o = n(12),
                    r = n.n(o),
                    i = n(1);

                function a(t, e) {
                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!n) {
                        if (Array.isArray(t) || (n = function(t, e) {
                                if (!t) return;
                                if ("string" == typeof t) return l(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                "Object" === n && t.constructor && (n = t.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(t);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(t, e)
                            }(t)) || e && t && "number" == typeof t.length) {
                            n && (t = n);
                            var o = 0,
                                r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return o >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[o++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, a = !0,
                        c = !1;
                    return {
                        s: function() {
                            n = n.call(t)
                        },
                        n: function() {
                            var t = n.next();
                            return a = t.done, t
                        },
                        e: function(t) {
                            c = !0, i = t
                        },
                        f: function() {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (c) throw i
                            }
                        }
                    }
                }

                function l(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                    return o
                }
                var c = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = null,
                            n = null,
                            o = document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),
                            r = document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");
                        if (o && r) return !1;
                        if (e = document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"), n = document.querySelector("#wp-admin-bar-google-site-kit .ab-item"), null === e && null === n) return !1;
                        var a = document.createElement("span");
                        a.setAttribute("class", "googlesitekit-notifications-counter update-plugins count-".concat(t));
                        var l = document.createElement("span");
                        l.setAttribute("class", "plugin-count"), l.setAttribute("aria-hidden", "true"), l.textContent = t;
                        var c = document.createElement("span");
                        return c.setAttribute("class", "screen-reader-text"), c.textContent = Object(i.sprintf)(
                            /* translators: %d is the number of notifications */
                            Object(i._n)("%d notification", "%d notifications", t, "google-site-kit"), t), a.appendChild(l), a.appendChild(c), e && null === o && e.appendChild(a), n && null === r && n.appendChild(a), a
                    },
                    u = function() {
                        t.localStorage && t.localStorage.clear(), t.sessionStorage && t.sessionStorage.clear()
                    },
                    s = function(t) {
                        for (var e = location.search.substr(1).split("&"), n = {}, o = 0; o < e.length; o++) n[e[o].split("=")[0]] = decodeURIComponent(e[o].split("=")[1]);
                        return t ? n.hasOwnProperty(t) ? decodeURIComponent(n[t].replace(/\+/g, " ")) : "" : n
                    },
                    g = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location,
                            n = new URL(e.href);
                        if (t) return n.searchParams && n.searchParams.get ? n.searchParams.get(t) : s(t);
                        var o, i = {},
                            l = a(n.searchParams.entries());
                        try {
                            for (l.s(); !(o = l.n()).done;) {
                                var c = r()(o.value, 2),
                                    u = c[0],
                                    g = c[1];
                                i[u] = g
                            }
                        } catch (t) {
                            l.e(t)
                        } finally {
                            l.f()
                        }
                        return i
                    }
            }).call(this, n(18))
        }
    },
    [
        [1078, 1, 0]
    ]
]);
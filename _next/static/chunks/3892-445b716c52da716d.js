(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3892], {
    619: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return s
            }
        });
        var n = r(2322)
          , o = r(4589)
          , a = r(7348);
        function i(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(r);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    i(e, t, r[t])
                }
                ))
            }
            return e
        }
        function u(e, t) {
            if (null == e)
                return {};
            var r, n, o = function(e, t) {
                if (null == e)
                    return {};
                var r, n, o = {}, a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    r = a[n],
                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
            }
            return o
        }
        function c() {
            var e, t, r = (e = ["\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n"],
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            })));
            return c = function() {
                return r
            }
            ,
            r
        }
        var f = r(6769).Z.div(c());
        function s(e) {
            var t = e.menus
              , r = void 0 === t ? [] : t
              , i = new URL(window.location).search;
            return (0,
            n.jsx)(o.M, {
                children: (0,
                n.jsx)(a.E.div, {
                    className: "text-white mobile-menu-bg shadow-lg",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: r.map((function(e) {
                        var t = e.ref
                          , r = e.content
                          , o = u(e, ["ref", "content"]);
                        return (0,
                        n.jsx)(f, {
                            className: "p-4 px-5 font-medium text-sm leading-7",
                            children: (0,
                            n.jsxs)("a", l({
                                href: "".concat(t).concat(i),
                                className: "flex justify-between"
                            }, o, {
                                children: [(0,
                                n.jsx)("span", {
                                    children: r
                                }), (0,
                                n.jsx)("span", {
                                    children: (0,
                                    n.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: (0,
                                        n.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                        })
                                    })
                                })]
                            }))
                        }, t)
                    }
                    ))
                })
            })
        }
    },
    162: function(e, t, r) {
        "use strict";
        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function o(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a = [], i = !0, l = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); i = !0)
                            ;
                    } catch (u) {
                        l = !0,
                        o = u
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (l)
                                throw o
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return n(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return n(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        t.default = void 0;
        var a, i = (a = r(2784)) && a.__esModule ? a : {
            default: a
        }, l = r(9918), u = r(3642), c = r(2030);
        var f = {};
        function s(e, t, r, n) {
            if (e && l.isLocalURL(t)) {
                e.prefetch(t, r, n).catch((function(e) {
                    0
                }
                ));
                var o = n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
                f[t + "%" + r + (o ? "%" + o : "")] = !0
            }
        }
        var p = function(e) {
            var t, r = !1 !== e.prefetch, n = u.useRouter(), a = i.default.useMemo((function() {
                var t = o(l.resolveHref(n, e.href, !0), 2)
                  , r = t[0]
                  , a = t[1];
                return {
                    href: r,
                    as: e.as ? l.resolveHref(n, e.as) : a || r
                }
            }
            ), [n, e.href, e.as]), p = a.href, d = a.as, y = e.children, v = e.replace, b = e.shallow, h = e.scroll, m = e.locale;
            "string" === typeof y && (y = i.default.createElement("a", null, y));
            var g = (t = i.default.Children.only(y)) && "object" === typeof t && t.ref
              , w = o(c.useIntersection({
                rootMargin: "200px"
            }), 2)
              , j = w[0]
              , O = w[1]
              , x = i.default.useCallback((function(e) {
                j(e),
                g && ("function" === typeof g ? g(e) : "object" === typeof g && (g.current = e))
            }
            ), [g, j]);
            i.default.useEffect((function() {
                var e = O && r && l.isLocalURL(p)
                  , t = "undefined" !== typeof m ? m : n && n.locale
                  , o = f[p + "%" + d + (t ? "%" + t : "")];
                e && !o && s(n, p, d, {
                    locale: t
                })
            }
            ), [d, p, O, m, r, n]);
            var k = {
                ref: x,
                onClick: function(e) {
                    t.props && "function" === typeof t.props.onClick && t.props.onClick(e),
                    e.defaultPrevented || function(e, t, r, n, o, a, i, u) {
                        ("A" !== e.currentTarget.nodeName || !function(e) {
                            var t = e.currentTarget.target;
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) && l.isLocalURL(r)) && (e.preventDefault(),
                        null == i && n.indexOf("#") >= 0 && (i = !1),
                        t[o ? "replace" : "push"](r, n, {
                            shallow: a,
                            locale: u,
                            scroll: i
                        }))
                    }(e, n, p, d, v, b, h, m)
                },
                onMouseEnter: function(e) {
                    t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e),
                    l.isLocalURL(p) && s(n, p, d, {
                        priority: !0
                    })
                }
            };
            if (e.passHref || "a" === t.type && !("href"in t.props)) {
                var E = "undefined" !== typeof m ? m : n && n.locale
                  , L = n && n.isLocaleDomain && l.getDomainLocale(d, E, n && n.locales, n && n.domainLocales);
                k.href = L || l.addBasePath(l.addLocale(d, E, n && n.defaultLocale))
            }
            return i.default.cloneElement(t, k)
        };
        t.default = p
    },
    2030: function(e, t, r) {
        "use strict";
        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++)
                n[r] = e[r];
            return n
        }
        function o(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != r) {
                    var n, o, a = [], i = !0, l = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value),
                        !t || a.length !== t); i = !0)
                            ;
                    } catch (u) {
                        l = !0,
                        o = u
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (l)
                                throw o
                        }
                    }
                    return a
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return n(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return n(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            var t = e.rootMargin
              , r = e.disabled || !l
              , n = a.useRef()
              , c = o(a.useState(!1), 2)
              , f = c[0]
              , s = c[1]
              , p = a.useCallback((function(e) {
                n.current && (n.current(),
                n.current = void 0),
                r || f || e && e.tagName && (n.current = function(e, t, r) {
                    var n = function(e) {
                        var t = e.rootMargin || ""
                          , r = u.get(t);
                        if (r)
                            return r;
                        var n = new Map
                          , o = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                var t = n.get(e.target)
                                  , r = e.isIntersecting || e.intersectionRatio > 0;
                                t && r && t(r)
                            }
                            ))
                        }
                        ),e);
                        return u.set(t, r = {
                            id: t,
                            observer: o,
                            elements: n
                        }),
                        r
                    }(r)
                      , o = n.id
                      , a = n.observer
                      , i = n.elements;
                    return i.set(e, t),
                    a.observe(e),
                    function() {
                        i.delete(e),
                        a.unobserve(e),
                        0 === i.size && (a.disconnect(),
                        u.delete(o))
                    }
                }(e, (function(e) {
                    return e && s(e)
                }
                ), {
                    rootMargin: t
                }))
            }
            ), [r, t, f]);
            return a.useEffect((function() {
                if (!l && !f) {
                    var e = i.requestIdleCallback((function() {
                        return s(!0)
                    }
                    ));
                    return function() {
                        return i.cancelIdleCallback(e)
                    }
                }
            }
            ), [f]),
            [p, f]
        }
        ;
        var a = r(2784)
          , i = r(9071)
          , l = "undefined" !== typeof IntersectionObserver;
        var u = new Map
    },
    9097: function(e, t, r) {
        e.exports = r(162)
    }
}]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9626], {
    3131: function(n, e, t) {
        "use strict";
        t.d(e, {
            W: function() {
                return r
            }
        });
        var o = t(2322);
        function a(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        var r = function(n) {
            return (0,
            o.jsx)("div", function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}
                      , o = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }
                    )))),
                    o.forEach((function(e) {
                        a(n, e, t[e])
                    }
                    ))
                }
                return n
            }({}, n, {
                className: "w-full max-w-7xl mx-auto px-6 md:px-4  ".concat(n.className)
            }))
        }
    },
    4176: function(n, e, t) {
        "use strict";
        t.d(e, {
            v: function() {
                return l
            }
        });
        var o = t(2322)
          , a = t(4304)
          , r = t.n(a);
        function s(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function i(n, e) {
            if (null == n)
                return {};
            var t, o, a = function(n, e) {
                if (null == n)
                    return {};
                var t, o, a = {}, r = Object.keys(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || (a[t] = n[t]);
                return a
            }(n, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (a[t] = n[t])
            }
            return a
        }
        var l = function(n) {
            var e = n.message
              , t = n.as
              , a = n.children
              , l = i(n, ["message", "as", "children"])
              , d = t || "span";
            return (0,
            o.jsx)(d, function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}
                      , o = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }
                    )))),
                    o.forEach((function(e) {
                        s(n, e, t[e])
                    }
                    ))
                }
                return n
            }({}, l, {
                dangerouslySetInnerHTML: {
                    __html: r().sanitize(e || a)
                }
            }))
        }
    },
    4027: function(n, e, t) {
        "use strict";
        t.d(e, {
            zx: function() {
                return c
            },
            LR: function() {
                return b
            },
            rI: function() {
                return y
            },
            RV: function() {
                return f
            },
            iz: function() {
                return u
            }
        });
        var o = t(2810)
          , a = t(6769);
        function r(n, e) {
            return e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        function s() {
            var n = r(["\n\tpadding: 12px 16px;\n\tborder-radius: 6px;\n"]);
            return s = function() {
                return n
            }
            ,
            n
        }
        function i() {
            var n = r(["\n\tcolor: #fff;\n\tfont-weight: 700;\n\tfont-size: 72px;\n\n\t@media screen and (max-width: 991px) {\n\t\tfont-size: 40px;\n\t}\n\n\t@media screen and (max-width: 767px) {\n\t\tfont-size: 30px;\n\t}\n"]);
            return i = function() {
                return n
            }
            ,
            n
        }
        function l() {
            var n = r(["\n\tpadding: 12px 16px;\n\tborder-radius: 30px;\n"]);
            return l = function() {
                return n
            }
            ,
            n
        }
        function d() {
            var n = r(["\n\tposition: relative;\n\tz-index: 4;\n\tmargin-top: 30px;\n\tmargin-right: 0px;\n\tmargin-bottom: 48px;\n\tjustify-content: flex-start;\n\tcolor: #8d8d95;\n\tfont-size: 19px;\n\tline-height: 140%;\n\tfont-weight: 400;\n\twidth: 70vw;\n\tmax-width: 460px;\n\n\t@media screen and (max-width: 991px) {\n\t\tmargin-bottom: 30px;\n\t\tz-index: 5;\n\t\tmargin-top: 20px;\n\t\tcolor: #d5d5da;\n\t\tfont-size: 18px;\n\t\tline-height: 150%;\n\t}\n\n\t@media screen and (max-width: 767px) {\n\t\tfont-size: 16px;\n\t}\n"]);
            return d = function() {
                return n
            }
            ,
            n
        }
        function p() {
            var n = r(["\n\twidth: 100%;\n\theight: 0.5px;\n\tmargin-bottom: 80px;\n\tbackground-color: #8d8d95; \n\topacity: 0.5;\n}\n"]);
            return p = function() {
                return n
            }
            ,
            n
        }
        function h() {
            var n = r(["\n\twidth: 80%;\n\theight: 0.8px; \n\tbackground-color: #4E5460;\n\tmargin: auto;\n\t@media only screen and (max-width: 480px){\n\t\twidth: 90%;\n\t}\n"]);
            return h = function() {
                return n
            }
            ,
            n
        }
        var c = (0,
        a.Z)(o.zx)(s())
          , b = a.Z.h1(i())
          , y = (0,
        a.Z)(o.zx)(l())
          , f = a.Z.div(d())
          , u = a.Z.div(p());
        a.Z.hr(h())
    },
    6462: function(n, e, t) {
        "use strict";
        t.d(e, {
            a: function() {
                return a
            }
        });
        var o = t(2784);
        function a(n) {
            var e = (0,
            o.useState)(!1)
              , t = e[0]
              , a = e[1];
            return (0,
            o.useEffect)((function() {
                var e = window.matchMedia(n);
                e.matches !== t && a(e.matches);
                var o = function() {
                    a(e.matches)
                };
                return e.addListener(o),
                function() {
                    return e.removeListener(o)
                }
            }
            ), [t, n]),
            t
        }
    },
    1378: function(n, e, t) {
        "use strict";
        t.d(e, {
            O: function() {
                return l
            },
            M: function() {
                return d
            }
        });
        var o = t(2322)
          , a = t(3658);
        function r(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function s(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {}
                  , o = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                }
                )))),
                o.forEach((function(e) {
                    r(n, e, t[e])
                }
                ))
            }
            return n
        }
        function i(n, e) {
            if (null == n)
                return {};
            var t, o, a = function(n, e) {
                if (null == n)
                    return {};
                var t, o, a = {}, r = Object.keys(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || (a[t] = n[t]);
                return a
            }(n, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (a[t] = n[t])
            }
            return a
        }
        var l = function(n) {
            var e = n.dark
              , t = i(n, ["dark"]);
            return (0,
            o.jsxs)(a.JO, s({
                viewBox: "0 0 16 16"
            }, t, {
                children: [(0,
                o.jsx)("g", {
                    clipPath: "url(#clip0)",
                    children: (0,
                    o.jsx)("path", {
                        d: "M4.71676 15.6999C4.40143 15.4893 4.12143 15.2313 3.88743 14.9333C3.63209 14.6246 3.39543 14.2999 3.17809 13.9639C2.66743 13.2173 2.26809 12.4006 1.99143 11.5399C1.65809 10.5386 1.49609 9.57994 1.49609 8.64194C1.49609 7.59527 1.72276 6.68194 2.16409 5.91527C2.49076 5.31527 2.97743 4.81327 3.56409 4.4606C4.13076 4.10727 4.79076 3.91393 5.45743 3.9006C5.69076 3.9006 5.94409 3.93393 6.21076 4.0006C6.40409 4.05393 6.63743 4.1406 6.92409 4.24727C7.29076 4.38727 7.49076 4.47393 7.55743 4.49393C7.77076 4.57394 7.95076 4.60727 8.09076 4.60727C8.19743 4.60727 8.35076 4.57394 8.52076 4.5206C8.61743 4.48727 8.80076 4.42727 9.06076 4.31393C9.31809 4.2206 9.52209 4.1406 9.68409 4.0806C9.93076 4.00727 10.1694 3.9406 10.3841 3.90727C10.6441 3.86727 10.9021 3.85393 11.1494 3.87393C11.6228 3.90727 12.0561 4.00727 12.4428 4.15393C13.1228 4.42727 13.6714 4.85394 14.0808 5.4606C13.9074 5.56727 13.7474 5.69127 13.5974 5.82727C13.2728 6.11394 12.9974 6.45394 12.7774 6.8306C12.4908 7.34394 12.3441 7.92394 12.3481 8.5106C12.3581 9.2326 12.5414 9.86727 12.9081 10.4173C13.1661 10.8173 13.5108 11.1599 13.9308 11.4413C14.1374 11.5813 14.3188 11.6779 14.4908 11.7413C14.4108 11.9913 14.3228 12.2346 14.2208 12.4746C13.9894 13.0126 13.7141 13.5279 13.3874 14.0146C13.0994 14.4346 12.8728 14.7479 12.7008 14.9546C12.4328 15.2746 12.1741 15.5146 11.9141 15.6859C11.6274 15.8759 11.2908 15.9766 10.9461 15.9766C10.7128 15.9866 10.4794 15.9566 10.2568 15.8919C10.0634 15.8286 9.87276 15.7573 9.68609 15.6766C9.49076 15.5873 9.28876 15.5113 9.08276 15.4499C8.82943 15.3833 8.56943 15.3513 8.30676 15.3519C8.04009 15.3519 7.78009 15.3853 7.53343 15.4486C7.32676 15.5073 7.12676 15.5793 6.92876 15.6653C6.64876 15.7819 6.46543 15.8586 6.35876 15.8919C6.14276 15.9559 5.92143 15.9946 5.69876 16.0086C5.35209 16.0086 5.02943 15.9086 4.70809 15.7086L4.71676 15.6999ZM9.28609 3.39327C8.83276 3.61993 8.40209 3.71593 7.97076 3.68393C7.90409 3.25327 7.97076 2.8106 8.15076 2.32593C8.31076 1.9126 8.52409 1.53927 8.81743 1.20593C9.12409 0.859268 9.49076 0.572601 9.90409 0.365934C10.3441 0.139268 10.7641 0.0192676 11.1641 -0.000732422C11.2174 0.452601 11.1641 0.899268 10.9974 1.37927C10.8454 1.80593 10.6188 2.19927 10.3308 2.5526C10.0408 2.89927 9.68076 3.18593 9.27343 3.3926L9.28609 3.39327Z",
                        fill: e ? "black" : "white"
                    })
                }), (0,
                o.jsx)("defs", {
                    children: (0,
                    o.jsx)("clipPath", {
                        id: "clip0",
                        children: (0,
                        o.jsx)("rect", {
                            width: "16",
                            height: "16",
                            fill: "white"
                        })
                    })
                })]
            }))
        }
          , d = function(n) {
            var e = n.dark
              , t = i(n, ["dark"]);
            return (0,
            o.jsx)(a.JO, s({
                viewBox: "0 0 16 16"
            }, t, {
                children: (0,
                o.jsx)("path", {
                    d: "M0.813438 0C0.793438 0.062 0.773438 0.123333 0.773438 0.205333V15.6913C0.773438 15.836 0.814104 15.918 0.896104 16L8.5061 7.938L0.813438 0ZM9.01944 8.472L10.9868 10.502L8.1781 12.102C8.1781 12.102 4.6081 14.1313 2.63944 15.2613L9.01944 8.472ZM9.55344 7.918L11.6641 10.1127C11.9948 9.92867 14.5781 8.45133 14.9468 8.246C15.3361 8.02067 15.2968 7.71267 14.9661 7.54867C14.6601 7.37867 12.0768 5.89867 11.6861 5.65867L9.55077 7.92L9.55344 7.918ZM9.0181 7.38467L11.0074 5.272L8.1681 3.65133C8.1681 3.65133 3.53944 1.00333 1.99944 0.119333L9.01944 7.38467H9.0181Z",
                    fill: e ? "black" : "white"
                })
            }))
        }
    },
    9626: function(n, e, t) {
        "use strict";
        t.d(e, {
            CL: function() {
                return ct
            },
            mR: function() {
                return An
            },
            OT: function() {
                return Ne.O
            },
            QD: function() {
                return Ae
            },
            HK: function() {
                return rt
            },
            tR: function() {
                return at
            },
            pR: function() {
                return Qe
            },
            zx: function() {
                return y.zx
            },
            In: function() {
                return Vn
            },
            AG: function() {
                return Tt
            },
            l9: function() {
                return It
            },
            W2: function() {
                return i.W
            },
            Op: function() {
                return Gn
            },
            iz: function() {
                return y.iz
            },
            ce: function() {
                return Lt
            },
            dG: function() {
                return st
            },
            $_: function() {
                return bt
            },
            h4: function() {
                return yt
            },
            VM: function() {
                return ft
            },
            KS: function() {
                return Ct
            },
            J: function() {
                return gn
            },
            RV: function() {
                return y.RV
            },
            LR: function() {
                return y.LR
            },
            Rg: function() {
                return dn
            },
            kz: function() {
                return U
            },
            Ks: function() {
                return Bn
            },
            Ar: function() {
                return ut
            },
            TR: function() {
                return De
            },
            v0: function() {
                return l.v
            },
            Wz: function() {
                return $e
            },
            AC: function() {
                return gt
            },
            uH: function() {
                return Pt
            },
            HZ: function() {
                return At
            },
            xn: function() {
                return St
            },
            Jd: function() {
                return Bt
            },
            Tf: function() {
                return Mt
            },
            hJ: function() {
                return pt
            },
            RL: function() {
                return ht
            },
            _R: function() {
                return Y
            },
            E4: function() {
                return F
            },
            MX: function() {
                return Ne.M
            },
            ag: function() {
                return z
            },
            HJ: function() {
                return mt
            },
            MS: function() {
                return kt
            },
            $0: function() {
                return vt
            },
            Z1: function() {
                return x
            },
            ZG: function() {
                return T
            },
            i$: function() {
                return wt
            },
            Kd: function() {
                return He
            },
            aB: function() {
                return xt
            },
            ac: function() {
                return Ge.a
            }
        });
        var o = t(564)
          , a = t(4452)
          , r = t(7348)
          , s = t(5237)
          , i = (t(1733),
        t(3131))
          , l = t(4176)
          , d = t(2322)
          , p = t(2784)
          , h = t(7704)
          , c = t(5536)
          , b = t(6669)
          , y = t(4027);
        function f(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, o = new Array(e); t < e; t++)
                o[t] = n[t];
            return o
        }
        function u(n, e) {
            return function(n) {
                if (Array.isArray(n))
                    return n
            }(n) || function(n, e) {
                var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (null != t) {
                    var o, a, r = [], s = !0, i = !1;
                    try {
                        for (t = t.call(n); !(s = (o = t.next()).done) && (r.push(o.value),
                        !e || r.length !== e); s = !0)
                            ;
                    } catch (l) {
                        i = !0,
                        a = l
                    } finally {
                        try {
                            s || null == t.return || t.return()
                        } finally {
                            if (i)
                                throw a
                        }
                    }
                    return r
                }
            }(n, e) || function(n, e) {
                if (!n)
                    return;
                if ("string" === typeof n)
                    return f(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                "Object" === t && n.constructor && (t = n.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return f(n, e)
            }(n, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var m = b.vN.status
          , g = b.vN.title
          , w = b.vN.description
          , x = function() {
            var n = (0,
            c._)()
              , e = u((0,
            h.YD)({
                threshold: .5,
                triggerOnce: !1
            }), 2)
              , t = e[0]
              , a = e[1]
              , r = {
                hidden: {
                    opacity: 0
                },
                show: {
                    opacity: 1
                }
            };
            return (0,
            p.useEffect)((function() {
                a && n.start("show"),
                a || n.start("hidden")
            }
            ), [n, a]),
            (0,
            d.jsx)(d.Fragment, {
                children: (0,
                d.jsx)(Pt, {
                    bg: "black",
                    padding: "80px 0",
                    color: "white",
                    ref: t,
                    children: (0,
                    d.jsx)(i.W, {
                        children: (0,
                        d.jsxs)(o.kC, {
                            flexDirection: ["column", "column", "row-reverse", "row-reverse"],
                            alignItems: "center",
                            children: [(0,
                            d.jsxs)(Pt, {
                                width: ["100%", "100%", "50%"],
                                pl: [0, 0, "38px", "185px"],
                                children: [(0,
                                d.jsx)(T, {
                                    children: m
                                }), (0,
                                d.jsx)(o.X6, {
                                    fontWeight: "500",
                                    py: "16px",
                                    fontSize: "28px",
                                    children: g
                                }), (0,
                                d.jsx)(o.xv, {
                                    fontWeight: "300",
                                    width: "75%",
                                    children: w
                                })]
                            }), (0,
                            d.jsx)(Pt, {
                                width: ["100%", "100%", "50%"],
                                pt: "32px",
                                children: (0,
                                d.jsx)(At, {
                                    variants: {
                                        hidden: {
                                            opacity: 0
                                        },
                                        show: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: .75
                                            }
                                        }
                                    },
                                    animate: n,
                                    children: ["6", "9", "12", "18"].map((function(n) {
                                        return (0,
                                        d.jsx)(Bt, {
                                            src: "/images/".concat(n, ".svg"),
                                            alt: "".concat(n, " months"),
                                            width: ["60px", "80px", "26%", "100%"],
                                            pr: "8px",
                                            variants: r
                                        }, n)
                                    }
                                    ))
                                })
                            })]
                        })
                    })
                })
            })
        }
          , k = t(8442);
        function v(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function C(n, e) {
            if (null == n)
                return {};
            var t, o, a = function(n, e) {
                if (null == n)
                    return {};
                var t, o, a = {}, r = Object.keys(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || (a[t] = n[t]);
                return a
            }(n, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (a[t] = n[t])
            }
            return a
        }
        var T = function(n) {
            var e = n.type
              , t = void 0 === e ? "primary" : e
              , o = n.children
              , a = C(n, ["type", "children"]);
            return (0,
            d.jsx)(k.Vp, function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}
                      , o = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }
                    )))),
                    o.forEach((function(e) {
                        v(n, e, t[e])
                    }
                    ))
                }
                return n
            }({
                sx: {
                    backgroundColor: "brand.".concat(t),
                    textTransform: "uppercase",
                    padding: "5px 16px",
                    lineHeight: "20px"
                },
                size: ["md"],
                variant: "solid",
                fontSize: ["12px"],
                color: "black",
                m: ["0px auto 25px", "0px auto 25px", "0px 0px 25px"]
            }, a, {
                children: o
            }))
        }
          , I = t(9392)
          , L = t.n(I);
        function P(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, o = new Array(e); t < e; t++)
                o[t] = n[t];
            return o
        }
        function B(n, e) {
            return function(n) {
                if (Array.isArray(n))
                    return n
            }(n) || function(n, e) {
                var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (null != t) {
                    var o, a, r = [], s = !0, i = !1;
                    try {
                        for (t = t.call(n); !(s = (o = t.next()).done) && (r.push(o.value),
                        !e || r.length !== e); s = !0)
                            ;
                    } catch (l) {
                        i = !0,
                        a = l
                    } finally {
                        try {
                            s || null == t.return || t.return()
                        } finally {
                            if (i)
                                throw a
                        }
                    }
                    return r
                }
            }(n, e) || function(n, e) {
                if (!n)
                    return;
                if ("string" === typeof n)
                    return P(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                "Object" === t && n.constructor && (t = n.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return P(n, e)
            }(n, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var A = b.lq.status
          , S = b.lq.title
          , M = b.lq.description
          , D = b.lq.images
          , N = D.cover
          , j = D.banner
          , U = function() {
            var n = (0,
            c._)()
              , e = B((0,
            h.YD)({
                threshold: .5,
                triggerOnce: !1
            }), 2)
              , t = e[0]
              , r = e[1];
            return (0,
            p.useEffect)((function() {
                r && n.start("show"),
                r || n.start("hidden")
            }
            ), [n, r]),
            (0,
            d.jsx)(Pt, {
                bg: "black",
                padding: "80px 0",
                color: "white",
                ref: t,
                height: "860px",
                display: "flex",
                alignItems: "center",
                children: (0,
                d.jsx)(i.W, {
                    children: (0,
                    d.jsxs)(o.kC, {
                        flexDirection: ["column", "column", "row", "row"],
                        alignItems: "center",
                        children: [(0,
                        d.jsxs)(Pt, {
                            width: ["100%", "100%", "50%"],
                            pl: [0, 0, "64px"],
                            variants: {
                                hidden: {
                                    opacity: 0
                                },
                                show: {
                                    opacity: 1
                                }
                            },
                            animate: n,
                            display: ["flex", "flex", "block"],
                            flexDirection: ["column", "column", "row"],
                            justifyContent: ["center", "center", "flex-start"],
                            alignItems: ["center"],
                            children: [(0,
                            d.jsx)(T, {
                                type: "secondary",
                                children: A
                            }), (0,
                            d.jsx)(o.X6, {
                                fontWeight: "500",
                                py: "16px",
                                fontSize: "28px",
                                children: S
                            }), (0,
                            d.jsx)(o.xv, {
                                fontWeight: "300",
                                width: ["75%", "60%", "75%"],
                                children: M
                            })]
                        }), (0,
                        d.jsxs)(o.xu, {
                            className: L()["image-container"],
                            width: ["100%", "100%", "40%"],
                            display: "flex",
                            justifyContent: "center",
                            marginTop: ["40px", "40px", 0],
                            children: [(0,
                            d.jsx)(a.Ee, {
                                src: N,
                                alt: "",
                                className: L().cover,
                                width: ["180px", "230px", "270px"],
                                loading: "lazy"
                            }), (0,
                            d.jsx)(Bt, {
                                src: j,
                                alt: "Joining banner",
                                position: "absolute",
                                width: ["160px", "200px", "220px"],
                                top: ["200px", "200px", "236px", "236px"],
                                variants: {
                                    hidden: {
                                        opacity: 0,
                                        scale: 0,
                                        y: 50
                                    },
                                    show: {
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                        transition: {
                                            delay: 1
                                        }
                                    }
                                },
                                animate: n,
                                loading: "lazy"
                            })]
                        })]
                    })
                })
            })
        };
        function R(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, o = new Array(e); t < e; t++)
                o[t] = n[t];
            return o
        }
        function E(n, e) {
            return function(n) {
                if (Array.isArray(n))
                    return n
            }(n) || function(n, e) {
                var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (null != t) {
                    var o, a, r = [], s = !0, i = !1;
                    try {
                        for (t = t.call(n); !(s = (o = t.next()).done) && (r.push(o.value),
                        !e || r.length !== e); s = !0)
                            ;
                    } catch (l) {
                        i = !0,
                        a = l
                    } finally {
                        try {
                            s || null == t.return || t.return()
                        } finally {
                            if (i)
                                throw a
                        }
                    }
                    return r
                }
            }(n, e) || function(n, e) {
                if (!n)
                    return;
                if ("string" === typeof n)
                    return R(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                "Object" === t && n.constructor && (t = n.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return R(n, e)
            }(n, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var F = function() {
            var n = (0,
            c._)()
              , e = E((0,
            h.YD)({
                threshold: .5,
                triggerOnce: !1
            }), 2)
              , t = e[0]
              , a = e[1];
            return (0,
            p.useEffect)((function() {
                a && n.start("show"),
                a || n.start("hidden")
            }
            ), [n, a]),
            (0,
            d.jsx)(d.Fragment, {
                children: (0,
                d.jsx)(Pt, {
                    bg: "black",
                    padding: "80px 0",
                    color: "white",
                    ref: t,
                    children: (0,
                    d.jsxs)(i.W, {
                        children: [(0,
                        d.jsxs)(o.kC, {
                            alignItems: ["left", "left", "center", "center"],
                            flexDir: "column",
                            children: [(0,
                            d.jsxs)(o.X6, {
                                as: "h3",
                                children: [" ", b.OD.title]
                            }), (0,
                            d.jsxs)(o.kC, {
                                alignItems: ["left", "left", "center", "center"],
                                flexDir: "column",
                                style: {
                                    color: "hsla(0, 0%, 100%, 0.8)",
                                    margin: "20px 0px 40px 0px"
                                },
                                children: [(0,
                                d.jsx)(o.xv, {
                                    fontSize: "xl",
                                    children: b.OD.description
                                }), (0,
                                d.jsx)(o.xv, {
                                    fontSize: "xl",
                                    children: b.OD.caption
                                })]
                            })]
                        }), (0,
                        d.jsxs)(o.kC, {
                            alignItems: "center",
                            justifyContent: "space-around",
                            children: [(0,
                            d.jsx)(Pt, {
                                variants: {
                                    hidden: {
                                        opacity: 0,
                                        x: "50%"
                                    },
                                    show: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            delay: 2
                                        }
                                    }
                                },
                                animate: n,
                                id: "pay-card-1",
                                children: (0,
                                d.jsxs)(At, {
                                    children: [(0,
                                    d.jsx)(Bt, {
                                        height: "95%",
                                        paddingTop: "14px",
                                        position: "absolute",
                                        paddingLeft: ["9px", "9px", "18px", "18px"],
                                        src: "/images/bill_part1.svg",
                                        pr: "20px",
                                        alt: "Bill part 1"
                                    }), (0,
                                    d.jsx)(Bt, {
                                        width: "90%",
                                        src: "/images/card_bg.svg",
                                        alt: ""
                                    })]
                                })
                            }), (0,
                            d.jsx)(Pt, {
                                style: {
                                    position: "relative"
                                },
                                children: (0,
                                d.jsxs)(At, {
                                    children: [(0,
                                    d.jsx)(Bt, {
                                        variants: {
                                            hidden: {
                                                opacity: 0
                                            },
                                            show: {
                                                opacity: 1,
                                                transition: {
                                                    delay: 2.5
                                                }
                                            }
                                        },
                                        animate: n,
                                        height: "95%",
                                        paddingTop: "14px",
                                        position: "absolute",
                                        src: "/images/bill_part2.svg",
                                        pr: "20px",
                                        alt: "Bill part 2"
                                    }), (0,
                                    d.jsx)(Bt, {
                                        animate: n,
                                        variants: {
                                            hidden: {
                                                opacity: 1
                                            },
                                            show: {
                                                opacity: 0,
                                                transition: {
                                                    delay: 1
                                                }
                                            }
                                        },
                                        height: "95%",
                                        paddingTop: "14px",
                                        position: "absolute",
                                        src: "/images/bill_full.svg",
                                        pr: "20px",
                                        alt: "Bill in full"
                                    }), (0,
                                    d.jsx)(Bt, {
                                        width: "90%",
                                        src: "/images/card_bg.svg",
                                        alt: ""
                                    })]
                                })
                            }), (0,
                            d.jsx)(Pt, {
                                variants: {
                                    hidden: {
                                        opacity: 0,
                                        x: "-50%"
                                    },
                                    show: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            delay: 2
                                        }
                                    }
                                },
                                animate: n,
                                children: (0,
                                d.jsxs)(At, {
                                    children: [(0,
                                    d.jsx)(Bt, {
                                        variants: {
                                            hidden: {
                                                opacity: 0
                                            },
                                            show: {
                                                opacity: 1,
                                                x: 0,
                                                transition: {
                                                    delay: 3
                                                }
                                            }
                                        },
                                        animate: n,
                                        height: "95%",
                                        paddingTop: "14px",
                                        position: "absolute",
                                        src: "/images/bill_part3.svg",
                                        pr: "20px",
                                        alt: "Bill part 3"
                                    }), (0,
                                    d.jsx)(Bt, {
                                        width: "90%",
                                        src: "/images/card_bg.svg",
                                        alt: ""
                                    })]
                                })
                            })]
                        })]
                    })
                })
            })
        };
        function O(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, o = new Array(e); t < e; t++)
                o[t] = n[t];
            return o
        }
        function q(n, e) {
            return function(n) {
                if (Array.isArray(n))
                    return n
            }(n) || function(n, e) {
                var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (null != t) {
                    var o, a, r = [], s = !0, i = !1;
                    try {
                        for (t = t.call(n); !(s = (o = t.next()).done) && (r.push(o.value),
                        !e || r.length !== e); s = !0)
                            ;
                    } catch (l) {
                        i = !0,
                        a = l
                    } finally {
                        try {
                            s || null == t.return || t.return()
                        } finally {
                            if (i)
                                throw a
                        }
                    }
                    return r
                }
            }(n, e) || function(n, e) {
                if (!n)
                    return;
                if ("string" === typeof n)
                    return O(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                "Object" === t && n.constructor && (t = n.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return O(n, e)
            }(n, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var z = function() {
            var n = (0,
            c._)()
              , e = q((0,
            h.YD)({
                threshold: .5,
                triggerOnce: !1
            }), 2)
              , t = e[0]
              , a = e[1]
              , r = {
                hidden: {
                    opacity: 0,
                    scale: 0
                },
                show: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 1.5
                    }
                }
            };
            return (0,
            p.useEffect)((function() {
                a && n.start("show"),
                a || n.start("hidden")
            }
            ), [n, a]),
            (0,
            d.jsx)(d.Fragment, {
                children: (0,
                d.jsx)(Pt, {
                    bg: "black",
                    padding: "80px 0",
                    color: "white",
                    ref: t,
                    children: (0,
                    d.jsx)(i.W, {
                        style: {
                            padding: "2em"
                        },
                        children: (0,
                        d.jsxs)(o.kC, {
                            flexDirection: ["column", "column", "column", "row"],
                            alignItems: "center",
                            children: [(0,
                            d.jsx)(o.kC, {
                                children: (0,
                                d.jsxs)(Pt, {
                                    width: ["100%", "100%", "100%", "80%", "50%"],
                                    children: [(0,
                                    d.jsxs)(o.X6, {
                                        as: "h3",
                                        children: [" ", b.Xv.title]
                                    }), (0,
                                    d.jsx)(o.kC, {
                                        alignItems: "center",
                                        flexDir: "column",
                                        color: "hsla(0, 0%, 100%, 0.8)",
                                        margin: "20px 0px 40px 0px",
                                        children: (0,
                                        d.jsx)(o.xv, {
                                            fontSize: "xl",
                                            children: b.Xv.description
                                        })
                                    })]
                                })
                            }), (0,
                            d.jsx)(o.kC, {
                                children: (0,
                                d.jsxs)(Pt, {
                                    width: ["100%"],
                                    padding: ["12em 9em", "12em 9em", "21em 16em", "16em"],
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    children: [(0,
                                    d.jsx)(Bt, {
                                        variants: r,
                                        animate: n,
                                        height: ["25em", "25em", "35em", "35em"],
                                        position: "absolute",
                                        src: "/images/confetti.png",
                                        loading: "lazy",
                                        alt: ""
                                    }), (0,
                                    d.jsx)(Bt, {
                                        variants: r,
                                        animate: n,
                                        height: ["16em", "16em", "22em", "22em"],
                                        position: "absolute",
                                        src: "/images/gradient_circle.svg",
                                        loading: "lazy",
                                        alt: ""
                                    }), (0,
                                    d.jsx)(Pt, {
                                        style: {
                                            position: "absolute"
                                        },
                                        variants: r,
                                        animate: n,
                                        children: (0,
                                        d.jsx)(o.xv, {
                                            fontSize: "3xl",
                                            color: "black",
                                            children: (0,
                                            d.jsxs)("strong", {
                                                children: [b.Xv.rewardsPercent, " ", (0,
                                                d.jsx)("br", {}), " ", b.Xv.rewards]
                                            })
                                        })
                                    }), (0,
                                    d.jsx)(Bt, {
                                        variants: {
                                            hidden: {
                                                opacity: 1
                                            },
                                            show: {
                                                opacity: 0,
                                                transition: {
                                                    duration: 1.5
                                                }
                                            }
                                        },
                                        animate: n,
                                        height: ["15em", "15em", "20em", "20em"],
                                        position: "absolute",
                                        src: "/images/top_chart.svg",
                                        alt: ""
                                    }), (0,
                                    d.jsx)(Bt, {
                                        variants: {
                                            hidden: {
                                                opacity: 1,
                                                marginLeft: "1%",
                                                marginTop: "1%"
                                            },
                                            show: {
                                                opacity: 0,
                                                marginLeft: "0%",
                                                marginTop: "0%",
                                                transition: {
                                                    duration: 1.5
                                                }
                                            }
                                        },
                                        animate: n,
                                        height: ["15em", "15em", "20em", "20em"],
                                        position: "absolute",
                                        src: "/images/right_chart.svg",
                                        alt: ""
                                    }), (0,
                                    d.jsx)(Bt, {
                                        variants: {
                                            hidden: {
                                                opacity: 1,
                                                marginLeft: "-1%",
                                                marginTop: "1%"
                                            },
                                            show: {
                                                opacity: 0,
                                                marginLeft: "0%",
                                                marginTop: "0%",
                                                transition: {
                                                    duration: 1.5
                                                }
                                            }
                                        },
                                        animate: n,
                                        height: ["15em", "15em", "20em", "20em"],
                                        position: "absolute",
                                        src: "/images/left_chart.svg",
                                        alt: ""
                                    })]
                                })
                            })]
                        })
                    })
                })
            })
        };
        function _(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function W(n, e) {
            if (null == n)
                return {};
            var t, o, a = function(n, e) {
                if (null == n)
                    return {};
                var t, o, a = {}, r = Object.keys(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || (a[t] = n[t]);
                return a
            }(n, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (a[t] = n[t])
            }
            return a
        }
        function Y(n) {
            var e = n.showCaption
              , t = void 0 === e || e
              , a = W(n, ["showCaption"])
              , r = b.Nw.caption
              , s = b.Nw.header
              , i = b.Nw.charges;
            return (0,
            d.jsx)(o.kC, function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}
                      , o = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }
                    )))),
                    o.forEach((function(e) {
                        _(n, e, t[e])
                    }
                    ))
                }
                return n
            }({
                w: "100%",
                flexDir: "column",
                alignItems: "center",
                id: "open-for-beta"
            }, a, {
                children: (0,
                d.jsxs)(o.kC, {
                    w: "100%",
                    maxW: "1330px",
                    p: ["110px 15px", "110px 45px", "200px 45px"],
                    alignItems: ["", "", "", "flex-end"],
                    flexDir: ["column", "column", "column", "row"],
                    justifyContent: ["", "", "", "center"],
                    children: [(0,
                    d.jsxs)(o.kC, {
                        flexWrap: "nowrap",
                        mr: "11vw",
                        flexDir: "column",
                        justifyContent: ["", "", "", "center"],
                        children: [t ? (0,
                        d.jsx)(o.xv, {
                            color: "#8d8d95",
                            fontSize: ["14px", "14px", "20px"],
                            lineHeight: "160%",
                            fontWeight: "400",
                            marginBottom: "20px",
                            children: r
                        }) : null, (0,
                        d.jsx)(o.X6, {
                            bgGradient: "linear(96.57deg, #00DCC8 19.83%, #2BE3A1 84.64%)",
                            bgClip: "text",
                            fontSize: ["3.25em", "3.25em", "3.75em", "5.5em"],
                            fontWeight: "medium",
                            mb: ["20px", "40px", "40px", "40px"],
                            children: s.map((function(n, e) {
                                return (0,
                                d.jsx)(o.xv, {
                                    lineHeight: "1",
                                    w: "100%",
                                    children: n
                                }, e)
                            }
                            ))
                        })]
                    }), (0,
                    d.jsx)(o.kC, {
                        justifyContent: ["", "", "", "center"],
                        fontSize: ["20px", "20px", "22px"],
                        lineHeight: "140%",
                        fontWeight: "300",
                        marginBottom: ["0", "0", "0", "58px"],
                        maxWidth: "324px",
                        children: (0,
                        d.jsx)(l.v, {
                            as: "p",
                            message: i
                        })
                    })]
                })
            }))
        }
        var H = t(2810)
          , G = t(6769)
          , Z = t(3980)
          , K = t.n(Z)
          , V = t(3686);
        function J(n, e) {
            return e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        function X() {
            var n = J(["\n  display: flex;\n  width: 100%;\n  min-width: 460px;\n  &.dark {\n    background-color: transparent;\n    padding: 0;\n    border: 1px solid #fff;\n    border-radius: 8px;\n  }\n\n  @media screen and (max-width: 767px) {\n    min-width: 0;\n  }\n"]);
            return X = function() {
                return n
            }
            ,
            n
        }
        function Q() {
            var n = J(["\n\tbackground-color: #28282A;\n\tcolor: #fff;\n\toutline: none;\n\tpadding: 16px;\n\tfont-size: 18px;\n\tline-height: 32px;\n  flex: 1;\n\n  &::placeholder {\n    color: #f1f1f1 !important;\n  }\n\n  @media screen and (max-width: 640px) {\n    padding: 8px 12px !important;\n    font-size:16px;\n    line-height:1.5;\n  }\n\n  &.dark {\n    background-color: #fff;\n    color: #212121;\n    border-radius: 6px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n\n    &::placeholder {\n      color: #000 !important;\n    }\n\n    @media screen and (max-width: 640px) {\n      padding: 8px 12px !important;\n    }\n  \n  }\n"]);
            return Q = function() {
                return n
            }
            ,
            n
        }
        function $() {
            var n = J(["\n  color: #000;\n  background-color: #fff;\n  border-radius: 12px;\n  padding: 9px 15px;\n  outline: none;\n  font-weight: 500;\n  transition: color 300ms ease, background-color 300ms ease;\n  height: inherit;\n  &.dark {\n    color: #fff;\n    background-color: #000;\n    border-radius: 8px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n\n    &:hover {\n      background-color: #00dcc8;\n      color: #000;\n    }\n  }\n"]);
            return $ = function() {
                return n
            }
            ,
            n
        }
        function nn() {
            var n = J(["\n  display: none;\n\n  @media screen and (max-width: 767px) {\n    display: inline-block;\n  }\n"]);
            return nn = function() {
                return n
            }
            ,
            n
        }
        function en() {
            var n = J(["\n  display: inline-block;\n\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n"]);
            return en = function() {
                return n
            }
            ,
            n
        }
        var tn = G.Z.div(X())
          , on = G.Z.input(Q())
          , an = (0,
        G.Z)(H.zx)($())
          , rn = G.Z.span(nn())
          , sn = G.Z.span(en())
          , ln = {
            variant: K().string,
            placeholder: K().string,
            label: K().string
        };
        function dn(n) {
            var e = n.variant
              , t = void 0 === e ? "basic" : e
              , a = n.placeholder
              , r = void 0 === a ? "Enter Phone Number" : a
              , s = n.label
              , i = void 0 === s ? "Get Started" : s
              , l = n.formName
              , h = void 0 === l ? "landingpage" : l
              , c = (0,
            p.useState)("")
              , y = c[0]
              , f = c[1]
              , u = (0,
            p.useState)(!0)
              , m = u[0]
              , g = u[1]
              , w = (0,
            V.R2)()
              , x = w.isLoading
              , k = w.isError
              , v = w.isSuccess;
            return (0,
            d.jsxs)(o.kC, {
                flexDir: "column",
                children: [v && !x ? (0,
                d.jsx)(o.xv, {
                    color: "white",
                    children: b.aN.submitMessage
                }) : (0,
                d.jsxs)(tn, {
                    className: t,
                    children: [(0,
                    d.jsx)(on, {
                        placeholder: r,
                        type: "number",
                        className: t,
                        required: !0,
                        value: y,
                        onChange: function(n) {
                            var e = n.target.value;
                            m || g(!0),
                            e.length <= 10 && f(n.target.value)
                        }
                    }), (0,
                    d.jsxs)(an, {
                        isLoading: x,
                        disabled: x,
                        onClick: function(n) {
                            if (n.preventDefault(),
                            (0,
                            V.Dm)(y)) {
                                var e = (0,
                                V.GZ)({
                                    phone: y
                                }, h);
                                w.mutate(e)
                            } else
                                g(!1)
                        },
                        className: t,
                        type: "submit",
                        children: [(0,
                        d.jsx)(sn, {
                            children: i
                        }), (0,
                        d.jsx)(rn, {
                            children: "Submit"
                        })]
                    })]
                }), !m && (0,
                d.jsx)(o.xv, {
                    mt: "20px",
                    color: "white",
                    children: "Please enter a valid phone number."
                }), k && !x && m && (0,
                d.jsx)(o.xv, {
                    mt: "20px",
                    color: "white",
                    children: b.aN.errorMessage
                })]
            })
        }
        function pn(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function hn(n, e) {
            return e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        function cn() {
            var n = hn(["\n\twidth: 100%;\n\theight: 100vh;\n\tposition: relative;\n\ttop: 0;\n\tleft: 0;\n\tbackground: #000000;\n"]);
            return cn = function() {
                return n
            }
            ,
            n
        }
        function bn() {
            var n = hn(["\n\tobject-fit: cover;\n\twidth: 100%;\n\theight: 100vh;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n"]);
            return bn = function() {
                return n
            }
            ,
            n
        }
        function yn() {
            var n = hn(["\n\tposition: relative;\n\theight: 100vh;\n\t// width: 100vw;\n\ttext-align: center;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\t\n\n\tdiv.content {\n\t\twidth: 60vw;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t@media screen and (max-width: 640px) {\n\t\t\twidth: 100vw;\n\t\t}\n\t}\n"]);
            return yn = function() {
                return n
            }
            ,
            n
        }
        dn.propTypes = ln,
        dn.defaultProps = {
            variant: "basic"
        };
        var fn = G.Z.div(cn())
          , un = G.Z.video(bn())
          , mn = G.Z.div(yn())
          , gn = function(n) {
            var e = n.mediaUrls
              , t = void 0 === e ? [{
                src: "/videos/uni_black_desktop.webm",
                type: "video/webm"
            }, {
                src: "/videos/uni_black_desktop.mp4",
                type: "video/mp4"
            }] : e
              , o = n.children
              , a = void 0 === o ? (0,
            d.jsx)("h1", {
                children: "Pay one-third with UNI card"
            }) : o
              , r = n.noVideo
              , s = void 0 !== r && r;
            return (0,
            d.jsxs)(fn, {
                children: [s ? null : (0,
                d.jsx)(un, {
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    disablePictureInPicture: !0,
                    children: t.map((function(n) {
                        return (0,
                        d.jsx)("source", function(n) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {}
                                  , o = Object.keys(t);
                                "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                                }
                                )))),
                                o.forEach((function(e) {
                                    pn(n, e, t[e])
                                }
                                ))
                            }
                            return n
                        }({}, n), n.src)
                    }
                    ))
                }), (0,
                d.jsx)(mn, {
                    children: (0,
                    d.jsx)("div", {
                        className: "content",
                        children: a
                    })
                })]
            })
        };
        function wn(n, e) {
            return e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        function xn() {
            var n = wn(['\n\tposition: relative;\n\tdisplay: flex;\n\toverflow: hidden;\n\theight: 100vh;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: #000;\n\topacity: 1;\n\n\tbackground-image: url("/images/landing_hero_desktop.png");\n\tbackground-position: 65% 0%;\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n\n\t@media screen and (max-width: 479px) {\n\t\tbackground-image: url("/images/landing_hero_mobile.png");\n\t\tbackground-position: 50% 50%;\n\t\tbackground-size: contain;\n\t}\n']);
            return xn = function() {
                return n
            }
            ,
            n
        }
        function kn() {
            var n = wn(["\n\tdisplay: flex;\n\twidth: 100vw;\n\theight: 100vh;\n\tmax-width: none;\n\tjustify-content: center;\n\talign-items: center;\n\n\t@media screen and (max-width: 767px) {\n\t\toverflow: visible;\n\t\theight: 550px;\n\t\tjustify-content: center;\n\t\talign-items: flex-start;\n\t}\n\n\t@media screen and (max-width: 479px) {\n\t\theight: auto;\n\t\tmax-width: none;\n\t\tpadding-bottom: 0px;\n\t}\n}\n"]);
            return kn = function() {
                return n
            }
            ,
            n
        }
        function vn() {
            var n = wn(["\n\tdisplay: flex;\n\twidth: 100%;\n\tmax-width: 1330px;\n\tpadding-right: 30px;\n\tpadding-left: 30px;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\t@media screen and (max-width: 767px) {\n\t\toverflow: hidden;\n\t\twidth: 100vw;\n\t\tpadding-right: 25px;\n\t\tpadding-left: 25px;\n\t\tflex-direction: column;\n\t}\n"]);
            return vn = function() {
                return n
            }
            ,
            n
        }
        function Cn() {
            var n = wn(["\n\tposition: relative;\n\n\t@media screen and (max-width: 991px) {\n\t\twidth: auto;\n\t\tmargin-top: 100px;\n\t\tpadding-left: 20px;\n\t}\n\t\n\t@media screen and (max-width: 767px) {\n\t\tposition: absolute;\n\t\tleft: 0%;\n\t\ttop: auto;\n\t\tright: 0%;\n\t\tbottom: 0%;\n\t\tdisplay: flex;\n\t\tmargin-top: 0px;\n\t\tmargin-left: 0px;\n\t\tpadding: 30px 25px 40px;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tbackground-image: linear-gradient(180deg, transparent, #000 57%);\n\t}\n"]);
            return Cn = function() {
                return n
            }
            ,
            n
        }
        var Tn = G.Z.div(xn())
          , In = G.Z.div(kn())
          , Ln = G.Z.div(vn())
          , Pn = G.Z.div(Cn())
          , Bn = function(n) {
            var e = n.children;
            return (0,
            d.jsx)(Tn, {
                children: (0,
                d.jsx)(In, {
                    children: (0,
                    d.jsx)(Ln, {
                        children: (0,
                        d.jsx)(Pn, {
                            children: e
                        })
                    })
                })
            })
        }
          , An = function(n) {
            var e = n.formName;
            return (0,
            d.jsx)(o.xu, {
                bg: "#000",
                children: (0,
                d.jsxs)(o.kC, {
                    textAlign: "center",
                    w: "auto",
                    maxW: "1270px",
                    p: ["0 15px 60px", "0 15px 80px", "0 15px 120px"],
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "auto",
                    children: [(0,
                    d.jsx)(y.iz, {}), (0,
                    d.jsx)(o.kC, {
                        maxW: "540px",
                        children: (0,
                        d.jsx)(dn, {
                            formName: e,
                            variant: "dark"
                        })
                    })]
                })
            })
        }
          , Sn = t(6517)
          , Mn = "Congratulations!"
          , Dn = "Your coupon code is successfully applied."
          , Nn = "Get Uni Pay 1/3rd Card"
          , jn = {
            errorMessage: "Oops! Something went wrong.",
            states: [{
                name: "name",
                title: "Fill the below details to redeem your voucher",
                subtitle: "You will get 25% off upto \u20b9200 on your first transaction",
                content: "",
                ctaLabel: "Submit"
            }, {
                name: "done",
                title: "Congratulations! You\u2019ve successfully redeemed your voucher",
                subtitle: "<p>We have got your details. All you need to do is download the app and complete your quick application.</p>\n\n        <p class='mt-4'>98% of the users get their card in <br />\n        less than <span class='positive-color'>3-5 mins</span>.</p>",
                content: "",
                showClose: !0,
                ctaLabel: "Download App",
                link: {
                    href: "https://unicards.onelink.me/KRuW/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "google-btn-2"
                }
            }]
        };
        function Un(n, e) {
            return e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        function Rn() {
            var n = Un(["\n\twidth: 90vw;\n\tmax-width: 365px;\n\tpadding: 40px;\n\n  @media screen and (max-width: 480px) {\n    padding: 24px;\n  }\n\n\theader {\n\t\tpadding: 0;\n\t\t\n\t\t span {\n\t\t\tfont-size: 1.875rem;\n\t\t\tline-height: 1.2;\n\n\t\t\t@media (max-width: 479px) {\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t}\n\t\t}\n\t}\n"]);
            return Rn = function() {
                return n
            }
            ,
            n
        }
        function En() {
            var n = Un(["\n\tpadding: 10px 0;\n\tcolor: #8D8D95;\n\tfont-size: 18px;\n\tline-height: 21.5px;\n"]);
            return En = function() {
                return n
            }
            ,
            n
        }
        function Fn() {
            var n = Un(["\n\tjustify-content: center;\n\tpadding: 0;\n\tpadding-top:16px\n"]);
            return Fn = function() {
                return n
            }
            ,
            n
        }
        function On() {
            var n = Un(["\n\tmargin-top: 24px;\n"]);
            return On = function() {
                return n
            }
            ,
            n
        }
        function qn() {
            var n = Un(["\n\twidth: 100%;\n\tbackground: #000000;\n\tborder-radius: 12px;\n\tcolor: #ffffff;\n\tfont-size: 0.875rem;\n\n\t:hover {\n\t\tbackground: #0D9C8E;\n\t}\n\n\t:focus {\n\t\toutline: none;\n\t}\n"]);
            return qn = function() {
                return n
            }
            ,
            n
        }
        var zn = (0,
        G.Z)(Sn.hz)(Rn())
          , _n = (0,
        G.Z)(Sn.fe)(En())
          , Wn = (0,
        G.Z)(Sn.mz)(Fn())
          , Yn = G.Z.div(On())
          , Hn = (0,
        G.Z)(H.zx)(qn());
        function Gn(n) {
            var e = n.onClose;
            return (0,
            d.jsxs)(Sn.u_, {
                isOpen: !0,
                isCentered: !0,
                size: "xs",
                closeOnEsc: !1,
                children: [(0,
                d.jsx)(Sn.ZA, {}), (0,
                d.jsxs)(zn, {
                    children: [(0,
                    d.jsxs)(Sn.xB, {
                        children: [(0,
                        d.jsxs)("svg", {
                            width: "51",
                            height: "50",
                            viewBox: "0 0 51 50",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            d.jsx)("path", {
                                d: "M28.6914 0.81042C30.7562 -0.747304 33.7243 0.0315583 34.8858 2.36814C35.6601 4.05568 37.4668 4.96435 39.2735 4.70473C41.8546 4.3153 44.1775 6.39226 44.0484 8.98847C44.0484 10.8058 45.2099 12.4933 46.8876 13.1424C49.3395 14.0511 50.3719 16.9069 49.2105 19.2435C48.3071 20.8012 48.5652 22.8782 49.8557 24.1763C51.6624 26.1234 51.2753 29.1091 49.0814 30.6668C47.5328 31.7053 46.8876 33.5226 47.2747 35.34C47.92 37.9362 46.2423 40.4026 43.6613 40.6622C41.8546 40.792 40.306 42.2199 39.9188 43.9074C39.2735 46.5036 36.5635 47.9316 34.2406 46.8931C32.5629 46.244 30.6271 46.6335 29.4657 48.0614C27.788 50.0085 24.6908 50.0085 23.0131 48.0614C21.8517 46.6335 19.9159 46.244 18.2382 46.8931C15.7863 47.8018 13.0762 46.3738 12.56 43.9074C12.1728 42.0901 10.6242 40.792 8.8175 40.6622C6.23648 40.4026 4.42976 37.8064 5.20407 35.34C5.72027 33.5226 4.94597 31.7053 3.39735 30.6668C1.20349 29.2389 0.816332 26.1234 2.62305 24.1763C3.91356 22.8782 4.04261 20.8012 3.2683 19.2435C1.97779 16.9069 3.13925 14.0511 5.59122 13.1424C7.26888 12.4933 8.43034 10.9356 8.43034 8.98847C8.43034 6.39226 10.6242 4.3153 13.2052 4.70473C15.0119 4.96435 16.8187 4.05568 17.593 2.36814C18.7544 0.0315583 21.7226 -0.747304 23.9165 0.81042C25.207 1.8489 27.1427 1.8489 28.6914 0.81042Z",
                                fill: "#107B72"
                            }), (0,
                            d.jsx)("path", {
                                d: "M26.3825 0.787246C28.3843 -0.725934 31.2619 0.0306558 32.3879 2.30043C33.1386 3.9397 34.8902 4.82239 36.6418 4.5702C39.144 4.1919 41.3961 6.20947 41.271 8.73144C41.271 10.4968 42.397 12.1361 44.0234 12.7666C46.4006 13.6493 47.4015 16.4234 46.2755 18.6932C45.3997 20.2064 45.6499 22.224 46.9011 23.4849C48.6526 25.3764 48.2773 28.2767 46.1504 29.7899C44.649 30.7987 44.0234 32.564 44.3988 34.3294C45.0244 36.8514 43.3979 39.2472 40.8956 39.4994C39.144 39.6255 37.6427 41.0126 37.2673 42.6519C36.6418 45.1739 34.0144 46.5609 31.7624 45.5522C30.1359 44.9217 28.2592 45.3 27.1332 46.687C25.5067 48.5785 22.504 48.5785 20.8775 46.687C19.7515 45.3 17.8748 44.9217 16.2483 45.5522C13.8712 46.4348 11.2438 45.0478 10.7433 42.6519C10.368 40.8865 8.86663 39.6255 7.11504 39.4994C4.61278 39.2472 2.86119 36.7253 3.61187 34.3294C4.11233 32.564 3.36165 30.7987 1.86029 29.7899C-0.266638 28.4028 -0.641978 25.3764 1.10961 23.4849C2.36074 22.224 2.48585 20.2064 1.73517 18.6932C0.484041 16.4234 1.61006 13.6493 3.98721 12.7666C5.61368 12.1361 6.7397 10.6229 6.7397 8.73144C6.7397 6.20947 8.86663 4.1919 11.3689 4.5702C13.1205 4.82239 14.8721 3.9397 15.6227 2.30043C16.7488 0.0306558 19.6264 -0.725934 21.7533 0.787246C23.0044 1.79603 24.8811 1.79603 26.3825 0.787246Z",
                                fill: "#00DCC8"
                            }), (0,
                            d.jsx)("path", {
                                d: "M14.2461 24.7452L20.2515 30.7979C20.3766 30.924 20.5018 30.924 20.5018 30.7979L33.6386 17.5576",
                                stroke: "white",
                                strokeWidth: "4",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round"
                            })]
                        }), (0,
                        d.jsx)("span", {
                            children: Mn
                        })]
                    }), (0,
                    d.jsxs)(_n, {
                        children: [(0,
                        d.jsx)("span", {
                            children: Dn
                        }), (0,
                        d.jsx)(Yn, {
                            className: "uni-gradient-border"
                        })]
                    }), (0,
                    d.jsx)(Wn, {
                        children: (0,
                        d.jsx)(Hn, {
                            onClick: e,
                            children: Nn
                        })
                    })]
                })]
            })
        }
        function Zn(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function Kn(n, e) {
            if (null == n)
                return {};
            var t, o, a = function(n, e) {
                if (null == n)
                    return {};
                var t, o, a = {}, r = Object.keys(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || (a[t] = n[t]);
                return a
            }(n, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (a[t] = n[t])
            }
            return a
        }
        var Vn = function(n) {
            var e = n.isDark
              , t = void 0 !== e && e
              , o = n.children
              , a = Kn(n, ["isDark", "children"]);
            return (0,
            d.jsx)(H.zx, function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}
                      , o = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }
                    )))),
                    o.forEach((function(e) {
                        Zn(n, e, t[e])
                    }
                    ))
                }
                return n
            }({
                width: "240px",
                h: "56px",
                fontSize: "15px",
                variant: "outline",
                bgColor: t ? "#000" : "#fff",
                color: t ? "#fff" : "#000",
                fill: t ? "#fff" : "#000",
                fontWeight: "500",
                _hover: {
                    bg: "#45454a",
                    color: "#00dcc8",
                    fill: "#00dcc8"
                }
            }, a, {
                children: o
            }))
        }
          , Jn = t(1042)
          , Xn = t(6701)
          , Qn = t.n(Xn);
        function $n(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function ne(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {}
                  , o = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                }
                )))),
                o.forEach((function(e) {
                    $n(n, e, t[e])
                }
                ))
            }
            return n
        }
        function ee(n, e) {
            return e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        function te() {
            var n = ee(["\n  width: 100% !important;\n  height: 100% !important;\n"]);
            return te = function() {
                return n
            }
            ,
            n
        }
        function oe() {
            var n = ee(["\n\twidth: 100%;\n\tmax-width: 730px;\n  border-radius: 12px;\n  max-height: 480px;\n  background: #fff;\n\n\t@media screen and (max-width: 640px) {\n    width: 100%;\n    height:100%;\n\t\tmax-width: 365px;\n    max-height: 590px;\n\t}\n\n\theader {\n\t\tpadding: 0;\n\t\t\n\t\t span {\n\t\t\tfont-size: 1.875rem;\n\t\t\tline-height: 1.2;\n\n\t\t\t@media (max-width: 479px) {\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t}\n\t\t}\n\t}\n"]);
            return oe = function() {
                return n
            }
            ,
            n
        }
        function ae() {
            var n = ee(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tpadding: 0;\n\n\t@media screen and (max-width: 640px) {\n\t\tflex-direction: column;\n\t\tmax-width: 365px;\n\t}\n\n"]);
            return ae = function() {
                return n
            }
            ,
            n
        }
        function re() {
            var n = ee(["\n\tflex:1;\n\tpadding: 24px 48px 18px 50px;\n\n  @media screen and (max-width: 640px) {\n    padding: 32px;\n  }\n\n  @media screen and (max-width: 480px) {\n    padding: 24px;\n  }\n"]);
            return re = function() {
                return n
            }
            ,
            n
        }
        function se() {
            var n = ee(["\n  display: flex;\n  align-items: center;\n"]);
            return se = function() {
                return n
            }
            ,
            n
        }
        function ie() {
            var n = ee(["\n  line-height: 28px;\n  border-bottom: 1px solid rgb(226, 232, 240);\n"]);
            return ie = function() {
                return n
            }
            ,
            n
        }
        function le() {
            var n = ee(["\n  flex: 1;\n  margin-left: 16px;\n"]);
            return le = function() {
                return n
            }
            ,
            n
        }
        function de() {
            var n = ee(['\n\tbackground-image: url("/images/gapy_desktop_bg.png");\n\tbackground-size: cover;\n\tbackground-repeat: no-repeat;\n  border-bottom-right-radius: 12px;\n  border-top-right-radius: 12px;\n\twidth: 348px;\n\theight: 480px;\n\n\t@media screen and (max-width: 640px) {\n\t\tbackground-image: url("/images/gpay_mobile.png");\n\t\twidth: 100%;\n\t\tmax-width: 365px;\n\t\tmax-height: 170px;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n\t}\n']);
            return de = function() {
                return n
            }
            ,
            n
        }
        function pe() {
            var n = ee(["\n  color: red;\n  font-size: 14px;\n  text-align: center;\n"]);
            return pe = function() {
                return n
            }
            ,
            n
        }
        function he() {
            var n = ee(["\n  font-size: 10px;\n  line-height: 1.3;\n"]);
            return he = function() {
                return n
            }
            ,
            n
        }
        function ce() {
            var n = ee(["\n  background: transparent;\n  font-weight: 400;\n  text-decoration: underline;\n  color: #8D8D95;\n  outline: none;\n\n  &:hover, \n  &:active, \n  &:focus {\n    background: transparent;\n    outline: none;\n  }\n"]);
            return ce = function() {
                return n
            }
            ,
            n
        }
        function be() {
            var n = ee(["\n  border-bottom: 1px solid rgb(226, 232, 240);\n"]);
            return be = function() {
                return n
            }
            ,
            n
        }
        var ye = /\d{3}[A-Z]{1}\d{4}[A-Z]{1}\d{5}[A-Z]{2}/
          , fe = (0,
        G.Z)(Sn.ZA)(te())
          , ue = (0,
        G.Z)(Sn.hz)(oe())
          , me = (0,
        G.Z)(Sn.fe)(ae())
          , ge = G.Z.div(re())
          , we = G.Z.div(se())
          , xe = G.Z.span(ie())
          , ke = (0,
        G.Z)(Jn.II)(le())
          , ve = G.Z.div(de())
          , Ce = (0,
        G.Z)(o.xv)(pe())
          , Te = G.Z.label(he())
          , Ie = (0,
        G.Z)(H.zx)(ce())
          , Le = (0,
        G.Z)(o.kC)(be())
          , Pe = function(n) {
            var e = n.content
              , t = n.handleSubmit
              , a = n.form
              , r = a.isLoading
              , s = a.isError
              , i = (0,
            p.useState)({})
              , l = i[0]
              , h = l.name
              , c = void 0 === h ? "" : h
              , b = l.phone
              , y = void 0 === b ? "" : b
              , f = l.couponCode
              , u = void 0 === f ? "" : f
              , m = i[1]
              , g = (0,
            p.useState)(!1)
              , w = g[0]
              , x = g[1]
              , k = function(n) {
                var e = n.target
                  , t = e.name
                  , o = e.value;
                m((function(n) {
                    return ne({}, n, $n({}, t, o))
                }
                ))
            };
            return (0,
            d.jsxs)(d.Fragment, {
                children: [(0,
                d.jsx)(o.xv, {
                    fontSize: 24,
                    lineHeight: 1.2,
                    fontWeight: 400,
                    mb: 6,
                    mt: 4,
                    children: e.title
                }), (0,
                d.jsx)(o.xv, {
                    fontSize: 14,
                    lineHeight: 1.3,
                    fontWeight: 400,
                    color: "#8D8D95",
                    children: e.subtitle
                }), (0,
                d.jsxs)(o.kC, {
                    direction: "column",
                    pt: 6,
                    children: [(0,
                    d.jsx)(Te, {
                        htmlFor: "name",
                        children: "Coupon Code"
                    }), (0,
                    d.jsxs)(Le, {
                        children: [(0,
                        d.jsx)(Jn.II, {
                            id: "couponCode",
                            name: "couponCode",
                            variant: "flushed",
                            placeholder: "Coupon Code",
                            onChange: k,
                            value: u,
                            autoFocus: !0,
                            borderBottom: "none",
                            className: Qn().input,
                            disabled: w
                        }), w ? (0,
                        d.jsxs)(o.kC, {
                            className: "positive-color ".concat(Qn()["apply-action"]),
                            alignItems: "center",
                            children: [(0,
                            d.jsx)("svg", {
                                width: "11",
                                height: "9",
                                viewBox: "0 0 11 9",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                d.jsx)("path", {
                                    d: "M2.89402 8.02446C2.67437 8.0215 2.45826 7.96868 2.262 7.86999C2.06575 7.77129 1.89448 7.6293 1.76113 7.45474L0.161367 5.63613C0.0434596 5.48974 -0.0133907 5.30349 0.00266919 5.11621C0.0187291 4.92893 0.10646 4.75508 0.247569 4.63091C0.388678 4.50673 0.572273 4.44182 0.760074 4.4497C0.947875 4.45758 1.12539 4.53765 1.25559 4.67321L2.75469 6.37948C2.77136 6.39842 2.79179 6.4137 2.81467 6.42435C2.83755 6.43499 2.8624 6.44077 2.88763 6.44132C2.91286 6.44187 2.93794 6.43718 2.96126 6.42754C2.98459 6.41789 3.00566 6.40352 3.02314 6.38531L8.93197 0.226996C8.99797 0.157543 9.07701 0.101771 9.16457 0.062863C9.25213 0.0239555 9.34649 0.00267497 9.44228 0.000236366C9.53806 -0.00220224 9.63338 0.0142488 9.72281 0.0486504C9.81223 0.083052 9.89401 0.13473 9.96346 0.200735C10.0329 0.266739 10.0887 0.345777 10.1276 0.433335C10.1665 0.520894 10.1878 0.615259 10.1902 0.711042C10.1927 0.806825 10.1762 0.90215 10.1418 0.991575C10.1074 1.081 10.0557 1.16277 9.98972 1.23223L4.00648 7.52987C3.86951 7.68986 3.69857 7.81728 3.50612 7.90284C3.31367 7.9884 3.10456 8.02995 2.89402 8.02446Z",
                                    fill: "#31B4A1"
                                })
                            }), "Applied"]
                        }) : (0,
                        d.jsx)(Ie, {
                            onClick: function() {
                                x(!0)
                            },
                            className: Qn()["apply-action"],
                            disabled: !u || !ye.test(u),
                            children: "Apply"
                        })]
                    }), u && !ye.test(u) && (0,
                    d.jsx)(Ce, {
                        children: "Please enter valid coupon."
                    })]
                }), (0,
                d.jsxs)(o.kC, {
                    direction: "column",
                    pt: 6,
                    children: [(0,
                    d.jsx)(Te, {
                        htmlFor: "name",
                        children: "Full Name"
                    }), (0,
                    d.jsx)(Jn.II, {
                        id: "name",
                        name: "name",
                        variant: "flushed",
                        placeholder: "Your Name",
                        onChange: k,
                        value: c,
                        className: Qn().input
                    })]
                }), (0,
                d.jsxs)(o.kC, {
                    direction: "column",
                    pt: 6,
                    children: [(0,
                    d.jsx)(Te, {
                        htmlFor: "phone-number",
                        children: "Phone Number"
                    }), (0,
                    d.jsxs)(we, {
                        children: [(0,
                        d.jsx)(xe, {
                            children: "\ud83c\uddee\ud83c\uddf3 +91"
                        }), (0,
                        d.jsx)(ke, {
                            id: "phone-number",
                            name: "phone",
                            variant: "flushed",
                            placeholder: "Your Phone Number",
                            value: y,
                            onChange: k,
                            className: "".concat(Qn().input, " flex-1")
                        })]
                    })]
                }), (0,
                d.jsxs)("div", {
                    style: {
                        marginTop: 24
                    },
                    children: [(0,
                    d.jsx)(H.zx, {
                        isFullWidth: !0,
                        bgColor: "#000",
                        color: "#fff",
                        borderRadius: 12,
                        fontWeight: "unset",
                        disabled: !(0,
                        V.Dm)(y) || r,
                        _hover: {
                            color: "#00DCC8"
                        },
                        onClick: function() {
                            t({
                                name: c,
                                phone: y
                            })
                        },
                        isLoading: r,
                        loadingText: "Submitting",
                        children: e.ctaLabel
                    }), s && !r && (0,
                    d.jsx)(Ce, {
                        children: jn.errorMessage
                    })]
                })]
            })
        }
          , Be = function(n) {
            var e = n.content;
            return (0,
            d.jsxs)(d.Fragment, {
                children: [(0,
                d.jsx)(o.xv, {
                    fontSize: 24,
                    lineHeight: 1.2,
                    fontWeight: 400,
                    mb: 6,
                    mt: 4,
                    children: e.title
                }), (0,
                d.jsx)(o.xv, {
                    fontSize: 14,
                    lineHeight: 1.3,
                    fontWeight: 400,
                    color: "#8D8D95",
                    children: (0,
                    d.jsx)(l.v, {
                        children: e.subtitle
                    })
                }), (0,
                d.jsx)("div", {
                    style: {
                        marginTop: 88
                    },
                    children: (0,
                    d.jsx)(H.zx, ne({
                        as: "a",
                        isFullWidth: !0,
                        bgColor: "#000",
                        color: "#fff",
                        borderRadius: 12,
                        fontWeight: "unset",
                        _hover: {
                            color: "#00DCC8"
                        }
                    }, e.link, {
                        children: e.ctaLabel
                    }))
                })]
            })
        };
        function Ae(n) {
            var e = n.onClose
              , t = (0,
            p.useState)(0)
              , o = t[0]
              , a = t[1]
              , r = jn.states[o || 0]
              , s = function() {
                return a((function(n) {
                    return n + 1
                }
                ))
            }
              , i = (0,
            V.R2)()
              , l = function(n) {
                var e = (0,
                V.GZ)(n, "gapy_landing_form");
                i.mutate(e)
            };
            (0,
            p.useEffect)((function() {
                i.isSuccess && a(1)
            }
            ), [i.isSuccess]);
            return (0,
            d.jsxs)(Sn.u_, {
                isOpen: !0,
                isCentered: !0,
                closeOnEsc: !1,
                children: [(0,
                d.jsx)(fe, {}), (0,
                d.jsx)(ue, {
                    children: (0,
                    d.jsxs)(me, {
                        children: [(0,
                        d.jsxs)(ge, {
                            children: [r.showClose ? (0,
                            d.jsx)("button", {
                                onClick: e,
                                children: (0,
                                d.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0,
                                    d.jsx)("path", {
                                        d: "M17.507 15.84l-3.96-3.96a.295.295 0 010-.417l3.96-3.96a1.179 1.179 0 10-1.667-1.667l-3.96 3.96a.295.295 0 01-.417 0l-3.96-3.96a1.179 1.179 0 00-1.667 1.667l3.96 3.96a.295.295 0 010 .417l-3.96 3.96a1.179 1.179 0 101.667 1.667l3.96-3.96a.295.295 0 01.417 0l3.96 3.96a1.179 1.179 0 101.667-1.667z",
                                        fill: "#020203"
                                    })
                                })
                            }) : (0,
                            d.jsx)("button", {
                                onClick: 0 === o ? e : function() {
                                    return a((function(n) {
                                        return n - 1
                                    }
                                    ))
                                }
                                ,
                                children: (0,
                                d.jsx)("svg", {
                                    width: "24",
                                    height: "15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0,
                                    d.jsx)("path", {
                                        d: "M8.3 14.692c-.43.415-1.12.41-1.543-.012L.313 8.252a1.058 1.058 0 010-1.504L6.757.32A1.105 1.105 0 018.299.308c.43.415.435 1.093.013 1.515L3.696 6.43h19.213c.603 0 1.091.48 1.091 1.071 0 .592-.488 1.071-1.09 1.071H3.695l4.616 4.606c.422.422.417 1.1-.013 1.515z",
                                        fill: "#000"
                                    })
                                })
                            }), function() {
                                var n = Pe;
                                switch (o) {
                                case 0:
                                    n = Pe;
                                    break;
                                case 1:
                                    n = Be;
                                    break;
                                default:
                                    n = Pe
                                }
                                return (0,
                                d.jsx)(n, {
                                    content: r,
                                    onClose: e,
                                    nextStep: s,
                                    handleSubmit: l,
                                    form: i
                                })
                            }()]
                        }), (0,
                        d.jsx)(ve, {})]
                    })
                })]
            })
        }
        var Se = t(4157)
          , Me = t.n(Se)
          , De = function(n) {
            n.isLight;
            return (0,
            d.jsxs)("svg", {
                className: Me().logo_white,
                viewBox: "0 0 85 60",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                d.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z",
                    fill: "black"
                }), (0,
                d.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z",
                    fill: "black"
                })]
            })
        }
          , Ne = t(1378);
        function je(n, e) {
            return e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
        function Ue() {
            var n = je(["\n  width: 100% !important;\n  height: 100% !important;\n  background: rgba(0,0,0,0.8);\n"]);
            return Ue = function() {
                return n
            }
            ,
            n
        }
        function Re() {
            var n = je(["\n\twidth: 100%;\n"]);
            return Re = function() {
                return n
            }
            ,
            n
        }
        function Ee() {
            var n = je(["\n\twidth: 100%;\n\tmargin: 0;\n\tposition: relative;\n\tpadding-top: 40px;\n\tbackground: #000;\n"]);
            return Ee = function() {
                return n
            }
            ,
            n
        }
        function Fe() {
            var n = je(["\n\twidth: 80px;\n\tposition: absolute;\n\tright: 20px;\n\ttop: 0;\n\tcolor: #fff;\n\tbackground: transparent;\n\tz-index: 1000;\n\tfont-size: 20px;\n\toutline: none;\n  transition: all 0.5s ease-in;\n\n\t&:hover {\n\t\tbackground: transparent;\n\t}\n\n  @media screen and (max-width: 640px) {\n    font-size: 16px;\n    width: 54px;\n    height: 32px;\n  }\n"]);
            return Fe = function() {
                return n
            }
            ,
            n
        }
        function Oe() {
            var n = je(["\n\tpadding: 0;\n"]);
            return Oe = function() {
                return n
            }
            ,
            n
        }
        var qe = (0,
        G.Z)(Sn.ZA)(Ue())
          , ze = G.Z.iframe(Re())
          , _e = (0,
        G.Z)(Sn.hz)(Ee())
          , We = (0,
        G.Z)(H.zx)(Fe())
          , Ye = (0,
        G.Z)(Sn.fe)(Oe());
        function He(n) {
            var e = n.onClose
              , t = n.src
              , a = void 0 === t ? "https://www.youtube.com/embed/QtGpZ7mbpyU" : t;
            return (0,
            d.jsxs)(Sn.u_, {
                isOpen: !0,
                isCentered: !0,
                size: "6xl",
                motionPreset: "slideInBottom",
                onClose: e,
                children: [(0,
                d.jsx)(qe, {}), (0,
                d.jsxs)(_e, {
                    children: [(0,
                    d.jsx)(We, {
                        onClick: e,
                        children: "Close X"
                    }), (0,
                    d.jsx)(Ye, {
                        children: (0,
                        d.jsx)(o.oM, {
                            ratio: 16 / 9,
                            children: (0,
                            d.jsx)(ze, {
                                src: a,
                                title: "Win the battle with Uni card | The Ultimate Weapon",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: !0
                            })
                        })
                    })]
                })]
            })
        }
        var Ge = t(6462)
          , Ze = t(2487)
          , Ke = t.n(Ze);
        function Ve(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function Je(n, e) {
            if (null == n)
                return {};
            var t, o, a = function(n, e) {
                if (null == n)
                    return {};
                var t, o, a = {}, r = Object.keys(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || (a[t] = n[t]);
                return a
            }(n, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (a[t] = n[t])
            }
            return a
        }
        var Xe = function(n) {
            var e = n.title
              , t = n.subtitle
              , o = n.className
              , a = void 0 === o ? "" : o
              , r = Je(n, ["title", "subtitle", "className"]);
            return (0,
            d.jsx)("div", function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}
                      , o = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }
                    )))),
                    o.forEach((function(e) {
                        Ve(n, e, t[e])
                    }
                    ))
                }
                return n
            }({
                className: "".concat(Ke().header, " flex w-full h-56 sm:h-[300px] text-white relative bg-cover items-end md:items-center justify-end md:justify-self-auto ").concat(a)
            }, r, {
                children: (0,
                d.jsxs)(i.W, {
                    children: [(0,
                    d.jsx)("h3", {
                        className: "text-xl sm:text-4xl w-full md:w-3/5 sm:leading-10 font-bold",
                        children: e
                    }), t && (0,
                    d.jsx)("h4", {
                        className: "text-sm sm:text-3xl sm:leading-10",
                        children: t
                    })]
                })
            }))
        };
        function Qe(n) {
            var e = n.title
              , t = n.subtitle
              , o = n.children
              , a = n.type;
            return (0,
            d.jsxs)(ut, {
                useWhiteHeader: !0,
                showHeaderActions: !1,
                children: [(0,
                d.jsx)(mt, {
                    title: e
                }), (0,
                d.jsxs)("main", {
                    className: "pt-20",
                    children: [(0,
                    d.jsx)(Xe, {
                        title: e,
                        subtitle: t,
                        className: "message" === a ? "".concat(Ke().blank, " flex justify-center items-center") : ""
                    }), "message" === a ? null : (0,
                    d.jsx)(i.W, {
                        children: o
                    })]
                })]
            })
        }
        function $e(n) {
            var e = n.title
              , t = n.subtitle
              , o = n.children
              , a = n.type;
            return (0,
            d.jsxs)(d.Fragment, {
                children: [(0,
                d.jsx)(mt, {
                    title: e
                }), (0,
                d.jsx)(Xe, {
                    title: e,
                    subtitle: t,
                    className: "message" === a ? "".concat(Ke()["blank-mobile"], " flex justify-center items-center") : ""
                }), "message" === a ? null : (0,
                d.jsx)(i.W, {
                    children: o
                })]
            })
        }
        var nt = t(7875);
        function et(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function tt(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {}
                  , o = Object.keys(t);
                "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                }
                )))),
                o.forEach((function(e) {
                    et(n, e, t[e])
                }
                ))
            }
            return n
        }
        function ot(n) {
            var e = n.item
              , t = n.num
              , o = void 0 === t ? "" : t;
            if ("object" !== typeof e)
                return (0,
                d.jsx)(l.v, {
                    as: "p",
                    size: "xl",
                    message: e
                }, o);
            switch (e.type) {
            case "table":
                return function(n) {
                    var e = n.data
                      , t = void 0 === e ? {} : e
                      , o = t.headers
                      , a = void 0 === o ? [] : o
                      , r = t.tableData
                      , s = void 0 === r ? [] : r
                      , i = [];
                    return (0,
                    d.jsx)("div", {
                        className: "max-w-[100vw] overflow-x-auto",
                        children: (0,
                        d.jsxs)("table", {
                            className: "border border-solid border-black",
                            children: [(0,
                            d.jsx)("thead", {
                                children: (0,
                                d.jsx)("tr", {
                                    className: "border border-solid border-black",
                                    children: a.map((function(n, e) {
                                        var t = n.label
                                          , o = n.accessor;
                                        return i.push(o),
                                        (0,
                                        d.jsx)("th", {
                                            className: "border border-solid border-black p-[10px]",
                                            children: t
                                        }, e)
                                    }
                                    ))
                                })
                            }), (0,
                            d.jsx)("tbody", {
                                children: s.map((function(n, e) {
                                    return (0,
                                    d.jsx)("tr", {
                                        className: "border border-solid border-black",
                                        children: i.map((function(e, t) {
                                            return (0,
                                            d.jsx)("td", {
                                                className: "border border-solid border-black p-[10px]",
                                                children: n[e]
                                            }, t)
                                        }
                                        ))
                                    }, e)
                                }
                                ))
                            })]
                        })
                    })
                }(e);
            case "list":
                var a = e.style
                  , r = e.contentType
                  , s = e.description
                  , i = e.data;
                return (0,
                d.jsxs)(d.Fragment, {
                    children: [s && s.map((function(n, e) {
                        return ot({
                            item: n,
                            num: e
                        })
                    }
                    )), i && (0,
                    d.jsx)(r, {
                        className: "py-0 px-5",
                        style: tt({}, a),
                        children: i.map((function(n, e) {
                            return (0,
                            d.jsx)("li", {
                                children: ot({
                                    item: n
                                })
                            }, e)
                        }
                        ))
                    })]
                });
            case "step":
                var p = e.sectionData
                  , h = void 0 === p ? [] : p;
                return (0,
                d.jsx)(d.Fragment, {
                    children: h.map((function(n, e) {
                        return (0,
                        d.jsxs)("div", {
                            className: "my-[10px]",
                            children: [(0,
                            d.jsxs)("p", {
                                className: "font-bold",
                                children: ["Step ", e]
                            }), (0,
                            d.jsx)("p", {
                                children: n
                            }, e)]
                        }, e)
                    }
                    ))
                });
            default:
                var c = e.data
                  , b = void 0 === c ? null : c;
                return b ? b.map((function(n, e) {
                    return ot({
                        item: n,
                        num: e
                    })
                }
                )) : (0,
                d.jsx)(l.v, {
                    size: "xl",
                    message: e
                })
            }
        }
        function at(n) {
            var e = n.content
              , t = n.sectionHeader
              , o = void 0 === t ? {} : t
              , a = o.label
              , r = void 0 === a ? null : a
              , s = o.style
              , i = void 0 === s ? {} : s;
            return (0,
            d.jsxs)(d.Fragment, {
                children: [r && (0,
                d.jsx)("div", {
                    className: "heading-label",
                    children: (0,
                    d.jsx)(l.v, {
                        message: r,
                        style: tt({}, i),
                        as: "h3"
                    })
                }), e && (0,
                d.jsx)("div", {
                    className: "text-tx-gray",
                    children: e.map((function(n, e) {
                        return ot({
                            item: n,
                            num: e
                        })
                    }
                    ))
                })]
            })
        }
        function rt(n) {
            var e = n.body;
            return (0,
            d.jsx)("div", {
                children: e.map((function(n, e) {
                    var t = n.title;
                    return (0,
                    d.jsxs)("div", {
                        children: [(0,
                        d.jsxs)("div", {
                            className: "my-4 sm:mt-10",
                            children: [(0,
                            d.jsx)("div", {
                                className: "text-tx-green-primary text:sm sm:text-xl sm:leading-10 flex flex-1 text-left",
                                children: (0,
                                nt.u)(e + 1)
                            }), (0,
                            d.jsx)("div", {
                                className: "text-2xl sm:text-4xl leading-10 font-bold",
                                children: t
                            })]
                        }), (0,
                        d.jsx)("div", {
                            className: "text-tx-gray",
                            children: ot({
                                item: n
                            })
                        })]
                    }, e)
                }
                ))
            })
        }
        function st(n) {
            var e = n.endingNote;
            return (0,
            d.jsx)("div", {
                className: "note pt-20 pb-20",
                children: e && (0,
                d.jsx)(l.v, {
                    size: "xl",
                    message: e.note,
                    style: e.style
                })
            })
        }
        function it(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function lt(n, e) {
            if (null == n)
                return {};
            var t, o, a = function(n, e) {
                if (null == n)
                    return {};
                var t, o, a = {}, r = Object.keys(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || (a[t] = n[t]);
                return a
            }(n, e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                for (o = 0; o < r.length; o++)
                    t = r[o],
                    e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (a[t] = n[t])
            }
            return a
        }
        function dt() {
            var n, e, t = (n = ["\n  position: absolute;\n  z-index: 100;\n  width: 100%;\n  height: calc((100% - 80px));\n\n  div {\n    width: 100%;\n    height: 100%;\n    max-width: 1280px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding: 20px;\n\n    @media screen and (max-width: 765px) {\n      flex-direction: row;\n      align-items: flex-start;\n    }\n  }\n"],
            e || (e = n.slice(0)),
            Object.freeze(Object.defineProperties(n, {
                raw: {
                    value: Object.freeze(e)
                }
            })));
            return dt = function() {
                return t
            }
            ,
            t
        }
        var pt = G.Z.div(dt())
          , ht = function(n) {
            var e = n.toggleAudio
              , t = lt(n, ["toggleAudio"])
              , o = (0,
            p.useState)(!0)
              , a = o[0]
              , r = o[1];
            return (0,
            d.jsx)("button", function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}
                      , o = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }
                    )))),
                    o.forEach((function(e) {
                        it(n, e, t[e])
                    }
                    ))
                }
                return n
            }({
                onClick: function() {
                    r((function(n) {
                        return !n
                    }
                    )),
                    e()
                },
                style: {
                    borderColor: a ? "#FB7A7A" : "#51d27d"
                }
            }, t, {
                children: (0,
                d.jsxs)("svg", {
                    width: "40",
                    height: "40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0,
                    d.jsx)("circle", {
                        cx: "20",
                        cy: "20",
                        r: "19.75",
                        fill: "#000",
                        fillOpacity: ".47",
                        stroke: "url(#a)",
                        strokeWidth: ".5"
                    }), a ? (0,
                    d.jsxs)(d.Fragment, {
                        children: [(0,
                        d.jsx)("path", {
                            d: "m25 22.002 2-2m0 0 2-2m-2 2-2-2m2 2 2 2m-15.414 1H12a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.586l4.707-4.707c.63-.63 1.707-.184 1.707.707v14c0 .89-1.077 1.337-1.707.707l-4.707-4.707Z",
                            stroke: "#fff",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0,
                        d.jsx)("defs", {
                            children: (0,
                            d.jsxs)("linearGradient", {
                                id: "a",
                                x1: "45",
                                y1: "-11",
                                x2: "-8.5",
                                y2: "23.5",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                d.jsx)("stop", {
                                    stopColor: "#FF685F"
                                }), (0,
                                d.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FCFCFC",
                                    stopOpacity: ".2"
                                })]
                            })
                        })]
                    }) : (0,
                    d.jsxs)(d.Fragment, {
                        children: [(0,
                        d.jsx)("path", {
                            d: "M23.535 16.466a5 5 0 0 1 0 7.072m2.829-9.9a9 9 0 0 1 0 12.728m-12.778-3.364H12a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.586l4.707-4.707c.63-.63 1.707-.184 1.707.707v14c0 .89-1.077 1.337-1.707.707l-4.707-4.707Z",
                            stroke: "#fff",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0,
                        d.jsx)("defs", {
                            children: (0,
                            d.jsxs)("linearGradient", {
                                id: "a",
                                x1: "45",
                                y1: "-11",
                                x2: "-8.5",
                                y2: "23.5",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0,
                                d.jsx)("stop", {
                                    stopColor: "#6FFCC9"
                                }), (0,
                                d.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FCFCFC",
                                    stopOpacity: ".2"
                                })]
                            })
                        })]
                    })]
                })
            }))
        }
          , ct = (0,
        s.default)((function() {
            return t.e(4339).then(t.bind(t, 4339))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [4339]
                }
            }
        })
          , bt = (0,
        s.default)((function() {
            return t.e(8071).then(t.bind(t, 8071))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [8071]
                }
            }
        })
          , yt = (0,
        s.default)((function() {
            return Promise.all([t.e(3892), t.e(157)]).then(t.bind(t, 157))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [157]
                }
            }
        })
          , ft = (0,
        s.default)((function() {
            return t.e(7280).then(t.bind(t, 7280))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [7280]
                }
            }
        })
          , ut = (0,
        s.default)((function() {
            return t.e(8137).then(t.bind(t, 8137))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [8137]
                }
            }
        })
          , mt = (0,
        s.default)((function() {
            return t.e(3129).then(t.bind(t, 3129))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [3129]
                }
            }
        })
          , gt = (0,
        s.default)((function() {
            return t.e(8261).then(t.bind(t, 8261))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [8261]
                }
            }
        })
          , wt = (0,
        s.default)((function() {
            return Promise.all([t.e(8198), t.e(3725)]).then(t.bind(t, 3725))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [3725]
                }
            }
        })
          , xt = (0,
        s.default)((function() {
            return t.e(3645).then(t.bind(t, 3645))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [3645]
                }
            }
        })
          , kt = (0,
        s.default)((function() {
            return Promise.all([t.e(1457), t.e(5480), t.e(1398)]).then(t.bind(t, 1398))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [1398]
                }
            }
        })
          , vt = (0,
        s.default)((function() {
            return t.e(8548).then(t.bind(t, 8548))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [8548]
                }
            }
        })
          , Ct = (0,
        s.default)((function() {
            return t.e(5623).then(t.bind(t, 5510))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [5510]
                }
            }
        })
          , Tt = (0,
        s.default)((function() {
            return t.e(3039).then(t.bind(t, 3039))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [3039]
                }
            }
        })
          , It = (0,
        s.default)((function() {
            return t.e(8102).then(t.bind(t, 8102))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [8102]
                }
            }
        })
          , Lt = ((0,
        s.default)((function() {
            return t.e(3201).then(t.bind(t, 3201))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [3201]
                }
            }
        }),
        (0,
        s.default)((function() {
            return t.e(7541).then(t.bind(t, 7541))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [7541]
                }
            }
        }),
        (0,
        s.default)((function() {
            return t.e(3649).then(t.bind(t, 3649))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [3649]
                }
            }
        }),
        (0,
        s.default)((function() {
            return t.e(7647).then(t.bind(t, 7647))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [7647]
                }
            }
        }),
        (0,
        s.default)((function() {
            return t.e(3858).then(t.bind(t, 3858))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [3858]
                }
            }
        }))
          , Pt = (0,
        r.E)(o.xu)
          , Bt = (0,
        r.E)(a.Ee)
          , At = (0,
        r.E)(o.kC)
          , St = (0,
        r.E)(o.X6)
          , Mt = (0,
        r.E)(o.xv)
    },
    6669: function(n, e, t) {
        "use strict";
        t.d(e, {
            rt: function() {
                return v
            },
            jZ: function() {
                return s
            },
            aN: function() {
                return x
            },
            vN: function() {
                return b
            },
            QY: function() {
                return r
            },
            Fs: function() {
                return o
            },
            rP: function() {
                return a
            },
            lq: function() {
                return y
            },
            nD: function() {
                return I
            },
            aF: function() {
                return d
            },
            iE: function() {
                return T
            },
            Nw: function() {
                return f
            },
            OD: function() {
                return h
            },
            Z6: function() {
                return m
            },
            Ut: function() {
                return u
            },
            Lw: function() {
                return w
            },
            OK: function() {
                return l
            },
            Xv: function() {
                return c
            },
            Dk: function() {
                return k
            },
            xw: function() {
                return g
            },
            ol: function() {
                return p
            }
        });
        var o = {
            logo: {
                src: "/images/logo_white.svg",
                alt: "Uni Logo"
            },
            navs: [{
                type: "link",
                label: "Apply Now",
                href: "/apply",
                className: "apply_btn"
            }],
            navsGrowth: [{
                type: "link",
                label: "Apply Now",
                href: "/growth/apply",
                className: "apply_btn"
            }]
        }
          , a = {
            title: "The Pay 1/3rd </br> Revolution <br />is here.",
            intro: 'With the <span class="uni-gradient-primary">Uni Pay 1/3rd Card</span>',
            subtitle: "Pay in <strong> 3 parts over 3 months </strong> at no extra costs or, <br>\n Pay in <strong> 1 month for 1% cashback </strong>",
            actions: [{
                label: "Get Started",
                type: "primary",
                link: "/apply",
                _hover: {
                    bg: "brand.secondary"
                },
                className: "apply_btn",
                w: ["176px", "196px", "176px", "176px", "240px"]
            }, {
                label: "Learn More",
                type: "secondary",
                link: "#open-for-beta",
                bg: "transparent",
                variant: "outline",
                color: "white",
                _hover: {
                    color: "white",
                    opacity: .6
                },
                w: ["160px", "160px", "170px", "170px", "200px"]
            }]
        }
          , r = {
            download: {
                msg: "Download to get started",
                links: [{
                    type: "Google Play Store",
                    icon: "/images/googleplay.svg",
                    label: "Google Play",
                    href: "https://unicards.onelink.me/KRuW/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "google-btn-2",
                    iconComp: "Google"
                }, {
                    type: "Apple App Store",
                    icon: "/images/apple_appstore.svg",
                    label: "App Store",
                    href: "https://uni-growth.onelink.me/v6cm/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "apple-btn-2",
                    iconComp: "Apple"
                }]
            },
            address: {
                logo: "/images/logo_white.svg",
                content: "Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI Colony, Koramangala, Bengaluru, Karnataka 560034",
                contactUsLabel: "Contact Us:",
                phoneNo: "080 68216821",
                emailSupportLabel: "Email:",
                emailSupport: "care@uni.club"
            },
            socialLinks: [{
                label: "Instagram",
                link: "https://www.instagram.com/uni_cards/"
            }, {
                label: "LinkedIn",
                link: "https://www.linkedin.com/company/uni-cards"
            }, {
                label: "Twitter",
                link: "https://twitter.com/cards_uni"
            }, {
                label: "Facebook",
                link: "https://www.facebook.com/Uni-Cards-104179288358904"
            }, {
                label: "Careers",
                link: t(3542).env.NEXT_CAREER_WEBSITE_LINK
            }],
            internalLinks: [{
                label: "Credit Card T&Cs",
                link: "/docs/Credit_Card_MITC.pdf",
                target: "_blank",
                testId: "nxwave-tnc"
            }, {
                label: "Uni T&Cs",
                link: "/privacy-policy-main",
                target: "_blank",
                testId: "uni-tnc"
            }, {
                label: "Lending Partner TnCs",
                link: "/nbfc-terms",
                target: "_blank",
                testId: "nbfc-tnc"
            }]
        }
          , s = {
            title: "ABOUT US",
            content: "We are a new-age fintech with a mission to reimagine and deliver an unmatched credit experience to millions of Indians. We are backed by marquee investors.",
            investors: [{
                name: "Lightspeed",
                logo: "/images/lightspeed_logo.svg",
                loading: "lazy"
            }, {
                name: "Accel",
                logo: "/images/accel_logo.svg",
                height: "36px",
                loading: "lazy"
            }]
        }
          , i = t(2322)
          , l = {
            title: "More reasons to love Uni",
            message: "We crafted a unique credit experience with you at the centre to enable you to do more.",
            statuses: [{
                title: "Nothing is hidden here",
                message: "100% money back guarantee if a charge or fee is applied without your knowledge.",
                img: "/images/transparency.png"
            }, {
                title: "We\u2019re always there for you",
                message: 'Happy to help whenever you\'d like. Reach us over email at - \n\t\t\t<a href="mailto:care@uni.club" style="color:#fff061;">care@uni.club</a>\n\t\t\t or \n\t\t\t<a href="https://api.whatsapp.com/send/?phone=%2B918867704440&amp;text&amp;app_absent=0" style="color:#fff061;" target="_blank">Whatsapp.</a>',
                img: "/images/care_social.svg"
            }, {
                title: (0,
                i.jsxs)(i.Fragment, {
                    children: ["Super ", (0,
                    i.jsx)("br", {}), " secure"]
                }),
                message: "Our systems ensure all your data is safe, secure & encrypted and no one can access it.",
                img: "/images/shield.png"
            }]
        }
          , d = {
            title: "More reasons to love Uni",
            description: "We crafted a unique credit experience with you at the centre to enable you to do more."
        }
          , p = {
            topText: "POWERED BY",
            heading: 'Uni Pay 1/3rd Card is accepted at <span style="color: #15b7a8;">99.9%</span> of the merchants across the\n    country that accept credit or debit cards.',
            comingSoon: "COMING SOON",
            scan: "Scan & Pay",
            feature: "Use your credit line to easily scan and pay at your favorite stores."
        }
          , h = {
            title: "Pay in 3 parts",
            description: "Pay for anything and everything and just pay 1/3rd every month.",
            caption: "Nothing more, not even a rupee."
        }
          , c = {
            title: "1% Rewards when you Pay in Full",
            description: "Choose to pay in full, post the 30 days free credit period & enjoy 1% rewards in the form of cashback.",
            rewardsPercent: "Get 1%",
            rewards: "Rewards"
        }
          , b = {
            status: "coming soon",
            title: "Split into longer EMIs",
            description: "Take all the time you need. Choose affordable longer EMI plans from 6, 9, 12, 18+ months."
        }
          , y = {
            status: "limited time offer",
            title: "No Joining Fee",
            description: "Yes, you read that right! No joining fee, no annual charges for our early customers.",
            images: {
                cover: "/images/phone_screen.svg",
                banner: "/images/phone_joining_fees.svg"
            }
        }
          , f = {
            caption: "UNI PAY 1/3RD CARD",
            header: ["It's different", "It's unique", "It's powerful."],
            charges: "First of a kind innovation that lets you pay your monthly spends in <b>3 parts</b> over <b>3 months</b> for <b>NO EXTRA</b> charges."
        }
          , u = {
            tabs: [{
                key: "termsAndConditions",
                label: "Terms and Conditions"
            }, {
                key: "privacyPolicy",
                label: "Privacy Policy"
            }],
            headerTitle: {
                title: "Uni User Terms and Condition and Privacy Policy | Uni Cards",
                description: "All that makes your Uni experience, a safe and a secure one. Please read carefully."
            },
            labels: {
                lastUpdated: "Updated on 1st Dec 2022",
                note: {
                    subNote1: "Please write to ",
                    subNote2: "care@uni.club",
                    subNote3: " in case of any issues."
                }
            }
        }
          , m = {
            tabs: [{
                key: "sbm",
                label: "Uni \u2013 SBM BANK",
                caption: "CO BRANDED PREPAID CARD"
            }],
            headerTitle: {
                title: "Uni Cards - Co Branded Prepaid Cards",
                description: "These terms and conditions (\u201cTerms and Conditions\u201d) apply to & regulate the provisions of prepaid payment instruments namely Uni - SBM Bank Card",
                caption: "TERMS AND CONDITIONS"
            },
            labels: {
                lastUpdated: "Updated on 29th Jul 2021",
                note: {
                    subNote1: "Please write to ",
                    subNote2: "care@uni.club",
                    subNote3: " in case of any issues."
                }
            }
        }
          , g = {
            termsAndConditions: {
                introduction: ["This document is an electronic record in accordance with the Information Technology Act, 2000 and rules, as amended from time to time.", "You acknowledge that You have read and understood these \u201c<b>Terms</b>\u201d. These Terms will applicable on You for accessing the \u201c<b>Portal</b>\u201d and using \u201c<b>Uni Services</b>\u201d and managed and operated by Uniorbit Technologies Private Limited or \u201c<b>Uni</b>\u201d (a company registered under the Companies Act 2013 with registered office at Block-X, 303, Siddhartha Apartments, Landmark \u2013 Near Sant Colambo School, Pitampura, North West Delhi, Delhi \u2013 110034, and corporate office at 3rd Floor, Indiqube Sigma, Nexus Koramangala, 1A Block, Koramangala, Bengaluru-560034). If You do not agree with any of these Terms, including any future modifications to these Terms, You must immediately cease accessing and/or using the Portal and Uni Services. Uni shall have the right to modify these Terms at any time and publish the same on the Portal. You must keep yourself up to date and read these Terms at close intervals.", "Your acceptance of these Terms will operate as a binding agreement between You and Uni, in respect of Your use of Uni Services and the Portal."],
                content: [{
                    title: "Definition",
                    description: ["All of the defined and capitalized terms in these Terms will have the meaning assigned to them here below:", {
                        type: "ul",
                        data: ["<b>\u201cAccount\u201d</b> shall mean and refer to the account created by the User on the Portal, for availing Uni Services.", "<b>\u201cApplicable Laws\u201d</b> shall mean and include all applicable statutes, enactments, acts of legislature or the Parliament, laws, ordinances, rules, by-laws, regulations, notifications, guidelines, policies, directions, directives and orders of any governmental authority, tribunal, board, or a court and applicable international treaties and regulations, in force at the relevant time in India.", "<b>\u201cCard\u201d</b> shall  mean  a  prepaid  card  issued  by  a  licensed  entity  (\u201c<b>Card Issuer</b>\u201d),  and facilitated by Uni under a co-branding arrangement.", "<b>\u201cLender\u201d</b> shall mean and include banks, non-banking financial institutions and other credit providers that provide loans to You.", "<b>\u201cLoan\u201d</b> shall mean and refer to the loans and advances offered by Lenders to You as per Your agreement with such Lenders.", "<b>\u201cMerchant\u201d</b> shall mean any merchant/seller on which the User is transacting using Uni Services.", "<b>\u201cMerchant Platform\u201d</b> shall mean the mobile or other application, web-application, weblink or any other platform owned and/or operated by the Merchant for sale of its products/services.", "<b>\u201cPortal\u201d</b> refers to the website or mobile application or any other internet platform managed and operated by Uniorbit Technologies Private Limited (hereinafter referred to as \u201c<b>Uni</b>\u201d or \u201c<b>Us</b>\u201d or \u201c<b>We</b>\u201d).", "<b>\u201cPrivacy Policy\u201d</b> shall mean the privacy policy of Uni applicable to You.", "<b>\u201cTransaction\u201d</b> shall mean every request made by the User for sending or receiving of payments including payments to Merchants or fund transfers etc or any other services as provided on Portal such as investments, insurance etc.", "<b>\u201cUni Services\u201d</b> shall mean the facilitation services offered by Uni, including but not limited to (a) facilitation, maintenance and management of various credit facilities, and (b) collecting and settlement of funds to merchants, and (c) other services offered by Uni on the Portal including investment, insurances etc. Uni reserves the right to add, remove or modify any features in the Uni Services as and when it deems fit.", "<b>\u201cUser\u201d</b> shall mean and refer to any individual or legal entity who registers with Uni to receive the Uni Services.", "<b>\u201cWe\u201d</b> or <b>\u201cwe\u201d</b> or <b>\u201cus\u201d</b> means Uni.", "<b>\u201cYou\u201d</b> or <b>\u201cyou\u201d</b> or <b>\u201cyour\u201d</b> means a User."]
                    }],
                    body: null
                }, {
                    title: "Eligibility",
                    description: ["In order to use the Portal and Uni Services, you are required to be (i) atleast 18 years of age; (ii) legally competent to contract under the Indian Contract Act 1872 satisfy the below criteria; (iii) citizen of India; (iv) tax resident of India and (v) represent that you have read and understood these Terms and are not legally or otherwise barred from using the Portal or Uni Services."],
                    body: null
                }, {
                    title: "Uni Services",
                    description: ["Uni Services are payment solutions offered to you by Uni, which enables you to send (and receive) payments to and from Merchants, other Users or other third parties using the Portal. In order to provide the Uni Services, Uni may partner with third party entities at its sole discretion. The access to Uni Services to You, may also be conditional upon satisfying requirement of any such third parties. Further, You may be required to accept additional terms and conditions and meet additional requirements for using such third-party services. Uni will not be responsible or liable to You for any loss incurred by You as a result of your interaction with a third-party product or service on the Portal.", "Note that Uni bears no responsibility for any sale of any products/ services by Merchant or others and these terms & conditions are independent of any other terms which You sign up for including Merchants and other third parties."],
                    body: null
                }, {
                    title: "Uni Account",
                    description: [{
                        type: "ul",
                        data: ["You can register as a User by providing necessary information that we may deem fit and may require from time to time. This will be communicated to you on the Portal. You understand and agree that you are responsible for the accuracy of the information you provide for account creation. We shall bear no liability for false, inaccurate or incomplete information provided by you.", "Please note that we reserve the right to terminate or suspend your account at any time, if any information provided by you is false, inaccurate or incomplete or if we discover that you are not eligible to use Uni Services or for any other reason that we deem fit and we are not obliged to provide you the reasons for such termination or suspension. Note that in case of any change or modification in the information provided by you, please inform us immediately.", "You agree that the information provided by you will be used to determine your eligibility to use the Uni Services. Further, the information shared by you may also be shared with third parties for determining your eligibility to use third party services, as and when required.", "You will receive identification and password for your account. Please keep your account details confidential. We shall not be liable for any loss that you may incur as a result of someone else using your password or account or accessing your device, either with or without your knowledge. You will be responsible for all the activity on your account. Your Account is non-transferable and is not capable of being transferred to anyone else. We shall not be liable for any claims, damages, liabilities etc. that may be suffered by you or any third party as a consequence of any unauthorized use of your account, and you shall be solely liable for the same.", "You hereby expressly consent to receive communications from us or from any person authorized by us, on your registered phone number (via phone calls/SMS) and/or e-mail id. You agree that any communication so received by you will not amount to spam, unsolicited communication or a violation of your registration on the national do not call registry.", "You hereby agree and consent to using the Account, Portal and Uni Services in accordance with Applicable Laws and only for its intended purpose.", "You understand that we have the right at all times to disclose your information as necessary to comply with Applicable Laws, or any valid government/other authority\u2019s request.", "We may establish general practices and limits concerning the use of Uni Services. We reserve the right to change, suspend or discontinue any aspect of Portal or Uni Services at any time, without notice and without liability, including reserving the right to impose limits, decline processing of any Transaction.", "We do not warrant that the functions contained in the Portal will be uninterrupted or error free, and we shall not be responsible for any interruptions (including, but not limited to, power outages, system failures or other interruptions that may affect the receipt, processing, acceptance, completion or settlement of Transactions).", "We may, directly or through service providers, monitor your Transactions for high-risk practices or for fraudulent transactions. Uni retains the right to suspend your Account, if Uni believes that there is suspicious or unusual activity on your Account.", "Note that we retain the right to reject a Transaction and/or settlement of payments at our sole discretion without assigning any reason, including but not limited to reasons of risk management, suspicion of fraudulent, illegal or doubtful Transactions, selling of prohibited items etc.", "Uni may be required to undertake action on the Account as per directions from a statutory or governmental authority or as may be mandated by the Merchant/Lender or others (as applicable)."]
                    }],
                    body: null
                }, {
                    title: "Closing Account",
                    description: ["You shall continue to be registered with Uni, unless you request closure or deletion or deactivation of your Account. However, it is clarified that Uni can suspend/ terminate your account at the request of third-party Lenders (where applicable) or at its sole discretion for any reason whatsoever."],
                    body: null
                }, {
                    title: "Loan",
                    description: [{
                        type: "ul",
                        data: ["You understand that Uni may facilitate Loans to you from Lenders, to enable you to use the Loans for purchase, fund transfers and other permitted activities as per Applicable Law. Uni offers a technology platform i.e. the Portal through which such Loan can be conveniently accessed/ used.", "To avail the Loan, the Lenders may seek your KYC. The Lender has authorised Uni to collect your KYC information on its behalf  and you agree to submit the same to Uni for any verification. You are responsible to ensure that your KYC details with the Lenders are current and accurate.", "The Loan may be used through multiple form factors, as enabled for you by Lenders or Uni, including cards or bank transfer etc. If you opt for any of these features, then additional KYC or such other requirement may be placed on you.", "You agree that you shall fully read and understand the terms of use of the Loan or such other documentation entered into between you and the Lender, before availing the Loan. It is to be noted that the Lender shall have the discretion to determine your eligibility to avail the Loan. There shall be no recourse to Uni for such decisions made the Lenders. For this purpose, you authorise Uni to share your information with Lenders.", "We shall maintain necessary records in respect of the Loan availed by You and such other information as required and permitted under the Applicable Laws. You agree that such records and/or information shall be sufficient proof of the Loans, which you shall not dispute.", "You shall use the Loan only for purposes permitted by the Lender and in accordance with Applicable Laws.", "Uni shall send communications regarding the Loan to you from time to time, on the Portal or otherwise.", "You shall use the Loan only for purposes permitted by the Lender and in accordance with Applicable Laws.", "For any repayment towards the Loan or other applicable charges, you have authorised the Lender, Uni and any of their service providers to collect such amounts from you from time to time and take all steps necessary to collect such payments."]
                    }],
                    body: null
                }, {
                    title: "Card",
                    description: [{
                        type: "ul",
                        data: ["You understand that Uni may facilitate the issuance of the Card to you from Card Issuers, to enable you to use the Loan through the Card.", "The Card Issuers may seek your KYC for  the issuance of the Card. Uni will collect such KYC information on behalf of Card Issuers and conduct a verification process. You are responsible to ensure that your KYC details with the Card Issuers are current and accurate.", "You agree that you shall fully read and understand the terms of use of the Card or such other documentation entered into between you and the Card Issuer. The terms of use of the Card are present below and shall be available for reference on the Portal as well a) SBM Card TC", "Uni shall send communications regarding the Loan to you from time to time, on the Portal or otherwise.", "You shall use the Card only in accordance with the terms of the Card Issuer and as per Applicable Laws."]
                    }],
                    body: null
                }, {
                    title: "Charges",
                    description: ["You agree and acknowledge that in addition to any charges applied on you by third parties, including Lenders, for using their services, Uni may also charge you for Uni Services. The same will be communicated to you on the Portal from time to time. Any charges applied to you by Uni shall be subject to applicable taxes.", "Please note that some merchants like fuel stations or government agencies may levy a surcharge or such other charges on your Transaction, which will be charged to your Card. You may refer to your transaction history to see details of the same."],
                    body: null
                }, {
                    title: "Privacy and Communications",
                    description: ["You agree and specifically consent that we may collect, store, share and use your personal data and any communications made through the Portal, in accordance with Applicable Laws and our Privacy Policy. The Privacy Policy explains how we treat your data and protect your privacy.", "You agree to receive communications from Uni via SMS, email for Transactions, alerts, reminders, marketing, advertising, complaints, service related, feedback etc."],
                    body: null
                }, {
                    title: "Intellectual Property",
                    description: ["We do not grant you any rights to the intellectual property rights in the Portal or Uni Services. Nothing contained herein shall authorize you to use, apply, invade or in any manner exploit or infringe the intellectual property rights of Uni without prior written consent."],
                    body: null
                }, {
                    title: "Third Party Services",
                    description: ["We do not take responsibility or liability for the actions, products, content and services on the Portal, which are linked to Merchants/Lenders and/or third party web applications, platforms etc. using Our APIs or otherwise. In addition, We may provide links to the third party web-applications, platforms etc. and certain other businesses on the Portal. We assume no responsibility for examining or evaluating the products and services offered by such third parties."],
                    body: null
                }, {
                    title: "Disputes and Grievances",
                    hasHtml: !0,
                    description: ['We are not obligated to mediate disputes between You and Merchant/ Lenders. We can assist in enabling communications regarding a dispute. In case of any complaint regarding Uni Services, please contact (a) <a href="mailto:care@uni.club" style="color:#00dcc8; font-weight: 400;">care@uni.club</a> (b) <a href="mailto:gro@uni.clubb" style="color:#00dcc8; font-weight: 400;">gro@uni.club</a>'],
                    body: null
                }, {
                    title: "Disclaimer",
                    description: ["Except for Our role as provided under these Terms, We are not involved in any underlying Transaction between You, any other User, Merchant, Lender or other third party.", 'Uni Services and the Portal are provided on an "as is" and "as available" basis. We disclaim all warranties of any kind, whether express or implied, including without limitation, any representation or warranty for accuracy, availability, continuity, uninterrupted access, timeliness, sequence, quality, performance, security, merchantability, fitness for any particular purpose, non-infringement or completeness.'],
                    body: null
                }, {
                    title: "Indemnity and Liability",
                    hasHtml: !0,
                    description: ['You agree to indemnify, defend and hold harmless Uni and its and their directors, officers, employees, and other applicable third parties (collectively "Indemnified Parties") from and against any and all claims, demands, causes of action, debt or liability, including reasonable attorney fees, arising out of, relating to, or which may arise from:', '<ol style="width: 85%; margin-top: 20px; margin-bottom: 20px; margin-left: 40px; list-style-type: lower-alpha;"><li>your use of Uni Services;</li><li>any breach by you of these Terms or Applicable Laws.</li></ol>', "Uni, its directors, officers, employees will not responsible or liable to you or any third party for any indirect, consequential, special, punitive or exemplary damages or losses which may be incurred in connection with the Portal and Uni Services. It is also clarified that Uni shall not be responsible for any failure, delay etc cause due to a force majeure event."],
                    body: null
                }, {
                    title: "Governing Law and Jurisdiction",
                    description: ["These Terms shall be governed under the laws of India with the courts at Bangalore, Karnataka having exclusive jurisdiction."],
                    body: null
                }, {
                    title: "Amendment",
                    description: ["We have the right, in our sole and absolute discretion, to change, modify, or amend any portion of these Terms at any time."],
                    body: null
                }, {
                    title: "Entire Agreement",
                    description: ["These Terms, together with the Privacy Policy, constitutes the entire agreement between the User and Uni with respect to the Uni Services and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the User and Uni with respect to Uni Services."],
                    body: null
                }]
            },
            privacyPolicy: {
                introduction: ["This Privacy Policy is meant to help you understand what information we collect from you, why we collect it, how we use it and what you can do to update, manage, delete your information. You consent to the treatment of your information in the manner provided in this Privacy Policy"],
                content: [{
                    title: "What we collect",
                    description: ["The below mentioned information is collected to the extent permitted under the applicable laws/regulation amended from time to time:", {
                        type: "ul",
                        data: ["Basic information about you such as name, email id and phone number etc required Account opening.", "Information required by the Lenders, Merchants or other third parties for providing their products/ services to you. This information includes your KYC data, like identity proof or address proof, gender or bank account information.", "Device level data such as IP address or device identification mark are collected while you use the Portal as security requirements.", "Grievance related information on any complaints or queries raised by you to your support or grievance team.", "Other information required from time to time as per the applicable laws/regulation."]
                    }],
                    body: null
                }, {
                    title: "How we use your information",
                    description: ["The information provided by you, will be used to provide the Uni Services and other third party services to you on the Portal, including:", {
                        type: "ul",
                        data: ["Account opening", "Verification of identity", "Providing Uni services", "KYC checks", "Credit checks", "Authentication and authorization of Transactions", "Communications", "Collections or recovery of Loan", "Customer support", "Marketing and product research", "Disclosure to third party services providers of Uni", "Disclosure to partner institutions of Uni like Lenders", "Disclosure to government entities or regulators or courts or such other similar bodies", "And such other purpose as required for the Uni Services."]
                    }],
                    body: null
                }, {
                    title: "Restriction on use of data",
                    hasHtml: !0,
                    description: ["Uni and its Lenders or other third parties shall access and use your information, based on your usage of the Portal and consent provided therein or as per any applicable law/guidelines. Uni shall take all reasonable steps to ensure that the information received from you is secure and is accessible only to the relevant persons."],
                    body: null
                }, {
                    title: "Correction",
                    hasHtml: !0,
                    description: ['If you notice any errors in the your information, you may write to us at <a href="mailto:care@uni.club" style="color:#00dcc8; font-weight: 400;">care@uni.club</a> to rectify the error.'],
                    body: null
                }, {
                    title: "Retention",
                    description: ["We may retain your information with us to provide Uni Services. Post termination of your Account, we may retain your information for audit purposes or as required under Applicable Laws."],
                    body: null
                }, {
                    title: "Data Deletion",
                    hasHtml: !0,
                    description: ['At any time, you may choose to withdraw consent for your information, and seek deletion/ return of the same from our records. This will be subject to Applicable Laws, and any requirement by Lenders. Please write to us at <a href="mailto:care@uni.club" style="color:#00dcc8; font-weight: 400;">care@uni.club</a>.'],
                    body: null
                }, {
                    title: "Security",
                    description: ["We shall endeavour to protect the security, integrity and privacy of your information. Note that we are not liable for any third party breaches to the security of your information. Please beware of phishing attacks. We are not responsible for any loss or damage if you share any Account information or otherwise to such phishing attacks."],
                    body: null
                }, {
                    title: "Links to Third Parties Sites",
                    description: ["Our application has a links to third-party websites. Your use of these features may result in the collection, processing or sharing of information about you, depending on the feature. We are not aware for the practices of such third parties."],
                    body: null
                }, {
                    title: "Changes to Privacy Policy",
                    description: ["We reserve the right to modify this Policy at any time, at our sole discretion. Please keep yourself updated of the same from time to time."],
                    body: null
                }, {
                    title: "Grievance Officer",
                    hasHtml: !0,
                    description: ["In accordance with Information Technology Act, 2000 and the Information Technology(Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the name and contact details of the Grievance Officer are provided below:", " <div><strong>Nodal grievance redressal officer</strong></div>\n          <br />\n          <div>Mr Danish Mirza</div>\n          <div>Contact: 080 6821 6821</div>\n          <div>Email: gro@uni.club</div>\n          <br />\n          <div>Address:</div>\n          <div>Branch Office,</div>\n          <div>Uniorbit Technologies Pvt Ltd.</div>\n          <div>Obeya Zing, No 80/3</div>\n          <div>Gayathri Mansion, 2nd &amp; 4th Floor</div>\n          <div>Dr. Puneeth Rajkumar Road,</div>\n          <div>Above Toyota showroom,</div>\n          <div>Bellandur, Bangalore 560103</div>"],
                    body: null
                }]
            }
        }
          , w = {
            rbl: {
                logoUrl: "/images/rbl_bank_logo.svg",
                introduction: ["This Prepaid Card is issued to you by RBL Bank Limited (\u201cRBL Bank\u201d or \u201cBank\u201d) in association with Uniorbit Technologies Pvt Ltd (referred as \u201cUni\u201d here in after) as Co-Brand Partner of the RBL Bank ltd.", "RBL Bank having registered office at Shahupuri, Kolhapur \u2013 416 001 and corporate office at One Indiabulls Centre, Tower 2B, 6th Floor, 841, Senapati Bapat Marg, Lower Parel, Mumbai- 400013 and Uni is having registered office at Block-X, 303, Siddhartha Apartments, Landmark Near Sant Colambo School, Pitampura, North West Delhi, Delhi, 110034.", "Clicking on the \u2018Submit\u2019 or \u2018I Agree\u2019 or any similar tab/icon would constitute acceptance of the below terms and conditions and the MITC by the Cardholder and the Cardholder shall be bound by the same.", "<b>Terms and Conditions</b>", "These Terms and Conditions shall govern the purchase and usage of the Uni RBL Co-Branded Prepaid Card (\u201cCard/the Card\u201d). The Cardholder (which shall have the meaning as defined below) hereby agrees to abide by and shall observe compliance with these Terms and Conditions (\u201cTerms and Conditions\u201d or \u201cMITC\u201d) at all times.", "Cardholder shall be referred to as \u201cUser\u201d. User undertakes to comply with all the relevant notifications/ guidelines/circulars issued by the Reserve Bank/ Bank/ any other competent authority/ statutory or regulatory body/ies governing the issue and use of the Card. The Bank and Uni disclaims all liability on account of any breach by the User of the applicable notifications/ guidelines / circulars governing usage of the Cards in force and from time to time. If the Terms and Conditions are not acceptable, the Cardholder must not use the Card and immediately return the Card to the Bank."],
                content: [{
                    title: "Applicability",
                    description: ["These Terms and Conditions are in addition to Applicable Law and the usage of the products and services available through various channels of the Bank, including but not limited to internet banking and phone banking facilities, with the use of Card, shall be subject to these Terms and Conditions.", "Please note that Card is non-transferable in nature. Each Cardholder is permitted to maintain and operate only one Card. These Terms and Conditions (along with any amendments here after) set out the contractual relationship between the issuer of the Card and each Cardholder under for the usage and issuance of the Card.", "As a Cardholder, please make sure you have read and understood each of these Terms and Conditions carefully, before using the Card."],
                    body: null
                }, {
                    title: "Definitions",
                    hasHtml: !0,
                    description: [{
                        type: "ul",
                        data: ["<b>\u201cApplicable Law\u201d</b> shall means any relevant statute, law (including common law), regulation, ordinance, rule, notification, bye-law, guideline, treaties, judgment, order, decree, approval, directive, requirement or other restriction issued by any regulatory, judicial, statutory authority, or NPCI or any agreements entered into with any Governmental Authority or NPCI, or any similar form of decision of, or determination by, or any interpretation, policy or administration or order issued by any Governmental Authority of any of the foregoing, in each case having the force of law and whether in effect as of the date of the Terms and Conditions or thereafter.", "<b>\u201cApplication Form\u201d</b> shall mean and include the application submitted/required to be submitted by the User to the Bank in the digital or physical form and manner stipulated by Bank from time to time for availing the Card.", "<b>\u201cATM\u201d</b> means Visa/MasterCard/RuPay or any other Card network enabled Automated Teller Machines in India.", "<b>\u201cAvailable Amount\u201d</b> means in relation to a Card, the amount available at a given point of time for use on the Card, being a sum of amount(s) loaded/deposited in the Card Account as reduced by a) the amount(s) utilized by using the Card for transaction(s); and b) charges, costs and expenses on the Card charged by the Bank to the Card Account.", "<b>\u201cBusiness Day\u201d</b> means a day on which the relevant office of RBL Bank is open for normal business transactions.", "<b>\u201cBusiness hours\u201d</b> means hours on a Business Day during which the relevant office of RBL Bank and is open for normal business transactions.", "<b>\u201cCard\u201d</b> or <b>\u201cRBL Bank Limited Reloadable Prepaid Card\u201d</b> or <b>\u201cUni RBL Co-branded Prepaid Card\u201d</b> shall mean the Open Loop co-brand prepaid Visa card offered by RBL Bank in association with Uni in capacity of Co-branding partner of the Bank, issued in terms hereof.", "<b>\u201cCard Account\u201d</b> shall mean the account opened in the name of the Cardholder and maintained with the Bank for the purpose of usage of the Prepaid Card as per the Terms and Conditions contained herein.", "<b>\u201cCash Limit\u201d</b> shall mean the maximum amount of cash that the Cardholder can withdraw through ATMs by using the Card on any given day or for such periods as maybe stipulated by Bank and as per instructions/directions of regulatory authority, from time to time, provided that in no event shall such amount be more than the amounts loaded in Card. Bank reserves the right to disable cash withdrawal services or revise the Cash Limit, based on the request of the Corporate on whose request the Card has been issued to the Cardholder or at its own discretion for any reason whatsoever.", "<b>\u201cCardholder\u201d</b> shall mean such individuals, to whom the Card has been issued by the Bank upon the request of Uni and who are is authorized to hold and use the Card subject to the terms and conditions contained herein.", "<b>\u201cCharges\u201d</b> means such charges payable by the Cardholder including those as set out in these Terms and Conditions as amended from time to time by the Bank at its sole discretion or as specifically communicated to the Cardholder.", "<b>\u201cCharge Slip\u201d</b> means voucher printed after using Prepaid Card in a swipe machine/POS to pay for any transactions performed using the card. It indicates the details of the transaction such as the amount, time of the transaction, date, location etc.", "<b>\u201cCorporate\u201d</b> is any company who can request for prepaid card from the Bank on behalf of the customer and also load money in the prepaid card/wallet.", "<b>\u201cCustomer Care Centre\u201d</b> refers to E-Mail/Phone Banking provided by the Bank as mentioned in the MITC.", "<b>\u201cMerchant Establishment\u201c</b> shall mean any establishment, wherever located in India, which honour MasterCard/Visa/Rupay Card and shall include among others, stores, shops, restaurants, hotels, airlines, cash advance points including ATMs and mail order advertisers.", "<b>\u201cNBFC\u201c</b> shall mean a non-banking finance company registered with Reserve Bank of India.", "<b>\u201cPIN\u201c</b> or <b>Personal Identification Number</b> means the secret Personal Identification Number pertaining to the Cardholder provided by Bank to enable usage of Card and/or subsequently changed by the Cardholder as per his/her choice from time to time, in relation to the Card.", "<b>\u201cPOS\u201c/\u201cEDC\u201c</b> means Point of Sale/Electronic Data Capturing machines used at Merchant Establishments in India, capable of processing card transactions and at which, the Cardholder can use his/her Card to make payments for purchases, subject to approval by the Bank / Uni.", "<b>\u201cStatement\u201c</b> means a statement made available by the Bank to the Cardholder setting out the financial transactions that have been made using the Card along with balance if any, in the Card Account.", "<b>\u201dSchedule of Charges\u201d/ \u201cTariff Annexure\u201d</b> means an annexure detailing the Charges applicable for the services offered on the Card.", "<b>\u201cTransaction Instruction\u201c means any instruction given by a Card Holder, directly or indirectly, to Bank, to effect a transaction on the Card.", "<b>\u201cOnline Transaction\u201c</b> shall mean the buying and selling of goods and services or transmitting of funds or data over an electronic network, primarily Internet.", "<b>\u201cUni Mobile Application\u201c</b> Shall mean the mobile application used to access Uni RBL Co-branded Card, available in IOS or Google Play store, which can be downloaded by the customer/card holder in order to manage its Uni RBL - Co-branded Card and wallet."]
                    }],
                    body: null
                }, {
                    title: "Interpretation",
                    description: [{
                        type: "ul",
                        data: ['All references to singular include plural and vice versa and the word "includes" should be construed as "without limitation".', "Words importing any gender include the other gender.", "Reference to any statute, ordinance or other law includes all regulations and other instruments and all consolidations, amendments, re-enactments or replacements for the time being in force.", "All headings, bold typing and italics (if any) have been inserted for convenience of reference only and do not define limit or affect the meaning or interpretation of the Terms and Conditions and Conditions.", "References to VISA regulations pertain to the guidelines issued by VISA to all the member banks of its network."]
                    }],
                    body: null
                }, {
                    title: "Eligibility Criteria",
                    description: [{
                        type: "ul",
                        data: ["Only individuals having attained the age of at least 18 years may use Card for transactions in India in Indian Rupee denominations only.", "In order to register, create and use the Card, the Bank may require the Cardholder to submit certain personal information of the Cardholder, including but not limited to Cardholder\u2019s name, address, mobile phone number, e-mail address, date of birth, preferred language of communication, etc. to the Bank. The Cardholder gives consent to Uni to share Cardholder\u2019s information with the Bank.", "No individual or entity shall misrepresent its identity, age, other demographic, parental, residence, ownership, nature of business information or other such information required to enforce any laws and regulations of India, intentionally or accidentally, and wrongfully use PPIs.", "The Bank/Uni may make further enquiries to verify/authenticate the identity of the Cardholder. In this regard, the Cardholder is responsible to ensure that the personal information provided is, at all times, true, accurate, correct, latest and complete."]
                    }],
                    body: null
                }, {
                    title: "Feature and Restrictions on the Card",
                    description: [{
                        type: "ul",
                        data: ["The Card is not transferable and a zero-balance card at the time of issue.", "The Uni / RBL Bank shall not be required to reload the Card or otherwise add to the Card Balance, at the request of the Cardholder. Further, the Bank may add or deduct amounts from the Card Balance in accordance with the instructions of the Uni and Bank shall not be liable to the Cardholder for any such additions or deductions.", "The Card can only be loaded through a NBFC/Corporate funding, the customer will not have options to add funds to this Uni RBL Co-branded card from his own account.", "No interest shall be paid or payable by Bank or Uni on the balance on the Card. It shall be subject to the Terms and Conditions mentioned herein and any additional conditions stipulated by Bank or Uni from time to time.", "The Cardholder shall sign on the reverse of the Card immediately upon receipt of the same, and ensure that the signature on all transaction slips signed by the Cardholder are similar to the signature provided by the Cardholder on the Card and the Application Form submitted to Bank via Uni. In case the Cardholder desires to alter his/her signature, the Cardholder shall intimate the Uni about the same and execute necessary documents as prescribed by Bank/Uni and/or under law, in this regard."]
                    }],
                    body: null
                }, {
                    title: "Issuance and Usage of the Card",
                    description: [{
                        type: "ul",
                        data: ["The Card issued is valid for use only in India and for the purchase of goods/services in Indian currency only. The Card will be valid for a period as mentioned on the face of the Card or mobile application of the Cardholder or upto 5 years from the date of issuance.", "The Card is valid for use at physical Merchant Establishments, Online Transactions and ATM Cash Withdrawals only", "For the purposes of using the Card, the Cardholder is required to authenticate himself with PIN.", "Bank, Uni, and the Merchant Establishment concerned, reserve the right, at any time, to refuse the use of the Card. Any charge levied by the Merchant Establishment on the purchase made by the Cardholder using the Card, shall be paid by the Cardholder with the Merchant Establishment directly and Bank and Uni shall not be responsible for the same. Any dispute pertaining to such charges levied shall be settled between the Cardholder and the concerned Merchant Establishment. Bank and Uni shall not be liable in any manner, whatsoever, for the same.", "The Cardholder undertakes to act in good faith at all times in relation to all dealings with the Card, Bank and Uni. The Cardholder accepts full responsibility for wrongful use of the Card or any use of the Card in contravention of the Terms and Conditions contained herein and, undertakes and agrees to indemnify the Bank and Uni to make good any loss, damage, interest, conversion, any other financial charge that Bank may incur and/or suffer, whether directly or indirectly, as a result of the Cardholder violating the provisions thereof.", "The Cardholder agrees that he/she will not use the Card as payment for any illegal purchase. The Card cannot be used for making purchases of prohibited items/services under the applicable laws of India including for any kind of gambling, purchase of lottery tickets, banned or prescribed magazines/services, participation in sweepstakes, payment for call-back services, etc.", "As per the RBI guideline on the Issuance and Operation of Prepaid Instruments in India the maximum balance on a prepaid card is regulated based on prevailing RBI guidelines at any given point of time and Bank reserves the right to modify such limits at its sole discretion from time to time based on then prevailing regulatory guidelines and its internal policies.", "The Bank and Uni reserves unto itself the absolute discretion and liberty to decline or approve the Transaction authorization requests on the Card, without assigning any reason thereof. The Bank and Uni shall not be liable in any manner whatsoever for decline of any transaction.", "Bank and Uni may, at its sole discretion, utilize the services of external service provider/s or agents and on such terms as required or necessary, in relation to the Cards.", "The Cardholder accepts and acknowledges that Bank and Uni shall not be liable for the services provided by Merchant Establishment to the Card Holder.", "The Cardholder accepts and acknowledges that the Card is not transferable or assignable by the Cardholder under any circumstances.", "To protect the interest of the Cardholder from an un-authorised use, it is advised that Cardholder shall keep the Card under his/her personal custody at all the times, and shall under no circumstances whatsoever allow the Card to be used by any other individual. The Cardholder will sign on the reverse of the Card in the signature panel immediately upon receipt of the Card.", "The Cardholder unconditionally and irrevocably authorizes the Bank to deliver and handover the Card to the Cardholder or the Corporate which will distribute it to the Cardholder.", "The Bank shall not be liable or responsible for any act or omission on the part of the entity, in connection with the delivery of the Card to the Cardholder.", "The Bank, Uni and the Merchant Establishments, reserves the right to refuse the acceptance of the Card at any time for any reasons whatsoever, without any prior intimation to the Cardholder.", "The Cardholder shall sign and retain all the charge slips generated for each of the Transaction consummated at a Merchant Establishment.", "The Bank and Uni shall not be obliged to provide copies of the charge slips or transaction slips to the Cardholder", "Any charge or cost levied by the Merchant Establishment in relation to any Transaction, shall be directly settled by the Cardholder with the Merchant Establishment.", "The Cardholder shall unconditionally keep the Bank and Uni indemnified against any loss or damage caused to the Bank and Uni on account of dishonoring the payment instructions as a result of insufficient funds in the Card Account.", "The Cardholder agrees that Bank and Uni shall be entitled to deduct the amount of such loss or damaged caused to the Bank and Uni directly from the Card Account.", "The Cardholder acknowledges that all refunds in case of failed, returned, rejected, or cancelled Transactions done by the Cardholder using any other payment instrument cannot be credited in the Card.", "The Cardholder acknowledges that funds for all reversals including but not limited to failed, returned, rejected, cancelled chargeback Transactions does not constitute as wallet/card balance, and will be refunded back to the funding source using which the wallet/card was loaded/funded.", {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-roman",
                                padding: "revert"
                            },
                            description: "The Cardholder hereby acknowledges and agrees that the Card shall not be loaded or reloaded beyond the limits as specified below and amended from time to time as per applicable laws or as determined by the Bank. <br /> <b>Cards issued with full KYC:</b>",
                            nestedHeader: null,
                            nestedContent: ["<i><u>Limits:</u></i>The amount loaded in such full KYC card during any month shall not exceed Rs.2,00,000/-.", "The amount outstanding at any point of time shall not exceed Rs.200,000/-. The maximum outstanding balance in your card cannot exceed Rs.200,000 at any point in time for full KYC.", "Uni -RBL Co-branded program does not support Min. KYC Prepaid instrument."]
                        }, "The Cardholder hereby acknowledges and agrees that if there are no Transaction for a consecutive period of one (1) year on the Card, subject to validity of the Card, the Card shall be made inactive by the Bank by sending a notice to the Cardholder.", "The Card can only be reactivated by the Bank after validations and requisite due diligence of the Cardholder, as stipulated by the Bank, from time to time.", "The Cardholder hereby agrees to receive SMS or emailing alerts from the Bank and/or Uni for all Transactions done using the Card. The SMS or emailing alerts from the Bank and/or Uni shall stipulate debit and credit Transactions, balance available or remaining on the Card or such other information or details as stipulated by the Uni and/or Bank, from time to time.", "The Cardholder shall ensure that it sets up the PIN in Uni-RBL Co-branded mobile application after the physical card is received by him/her in a sealed mailer and memorize it. The Cardholder can change the PIN to the PIN of his/her choice through Uni\u2019s mobile application and shall also change the PIN at regular intervals as may be required by Bank or Uni\u2019s policies. Under any circumstances the Cardholder should not disclose his/her PIN to anyone. To protect the interest of the Cardholder from an un-authorized use it is advised that you shall keep the Card under your personal custody at all the times and shall under no circumstances whatsoever allow the Card to be used by any other individual. The Cardholder shall be solely responsible for the consequences arising out of the disclosure of his/her PIN, including any unauthorized use of the Card. Any instructions given by means of the Card and the PIN, whether in conjunction or independently, shall be deemed to be instructions given by the Cardholder, and the Bank and Uni shall be entitled to assume that those instructions are given by the Cardholder.", "Information concerning the Card, including the Available Amount and Card history can be viewed on the Uni mobile application or accessed also via the Customer Care Center."]
                    }],
                    body: null
                }, {
                    title: "Adding Funds to the Card",
                    description: [{
                        type: "ul",
                        data: ["Subject to Applicable Law, the operating rules and any limits applicable to the Card as described in the agreement entered by the Bank and Uni. Upon receipt and processing of request to add funds to the Card, Bank shall add funds to the designated Card subject to limits as specified above and as amended from time to time under Applicable laws or such other amount as determined by the Bank.", "The Cardholder/Corporate shall bear the costs as provided in Annexure towards issuance of the Card(s) during the currency of the Terms.", "Uni RBL \u2013 Co-Branded program does not allow the customer/cardholder to load/fund the wallet/card. The loading is only allowed from a pre-designated source which is Corporate/NBFC as per the agreement with the bank."]
                    }],
                    body: null
                }, {
                    title: "Expiration, Cancellation, Non-distribution and Termination",
                    description: [{
                        type: "ul",
                        data: ["The Cardholder shall be intimated 45 days prior to the expiry date of card by SMS and/ or E-mail.", {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-roman",
                                padding: "revert"
                            },
                            description: "The Bank shall terminate the Card with immediate effect upon the occurrence of any of the following events:",
                            nestedHeader: null,
                            nestedContent: ["The Cardholder intimating the loss of the Card;", "Any breach of Terms and Conditions by the Cardholder;", "Upon specific request from the Cardholder to cancel or suspend the Card;", "Bank is unable or otherwise prevented from processing payments in relation to the Card for reasons beyond its reasonable control (including but not limited to restrictions imposed by law or regulation);", "Demise of the Cardholder;", "Reported lunacy/insanity/unsound mind of the Cardholder;", "If the Bank deems that the facility is being misused / improperly used in anyway", "If any adverse report is received from any governing or monitoring authority; and", "Bank mistakenly issues the Card", "If any adverse report is received from any of the Banks/ Branches in the network or from any governing or monitoring authority."]
                        }, {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-roman",
                                padding: "revert"
                            },
                            description: "Bank or Uni may at its sole discretion and in accordance with these Terms and Conditions, Applicable Law and Bank\u2019s or Uni\u2019s policies and procedures decide not to issue, or to cancel or suspend, a Card or the user of the Card without limiting Bank\u2019s or Uni\u2019s rights under this Agreement, Bank or Uni may cancel any Card if:",
                            nestedHeader: null,
                            nestedContent: ["There has been no activity on the Card during the preceding ninety (90) days post its issuance to the Cardholder."]
                        }, {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-roman",
                                padding: "revert"
                            },
                            description: "Uni as Co-branding partner of the Prepaid program of RBL Bank or the bank itself , at its sole discretion, shall not be obligated to issue a Card, and may suspend or cancel any Card and all or any Services if -",
                            nestedHeader: null,
                            nestedContent: ["If the Bank or Uni is unable to verify the identity of the Cardholder", "If the Bank or Uni is not satisfied with the details provided by the Cardholder;", "Upon termination of this Agreement; or", "If the request for issuance of Card or its use is not in compliance with the operating rules and/or Applicable Law."]
                        }, "<b>Non-Distribution:</b> The Bank may at any time instruct Uni its Co-brand partner, not to distribute Cards to any person due to reasons of compliance with the operating rules and/or Applicable Law, in which case Corporate shall immediately prevent any Card being so distributed and where requested confirm in writing this as soon as possible to the Bank. The Corporate shall not distribute Card outside the Territory.", "<b>Notice of Cancellation:</b> Bank or Uni may cancel or suspend a Card at any time for any reason, with or without notice, pursuant to a requirement under operating rules and/or Applicable Law.", "In the event of a Card program closure or at the time of renewal of Card, Uni at its sole discretion reserves the right to provide a card type that is different from the existing card type held by the card member. The limits on any Card are as per the sole discretion of Uni, at any point in time."]
                    }],
                    body: null
                }, {
                    title: "Replacement of Card",
                    description: ["The Card issued to the Cardholder shall remain the property of the Bank and shall be surrendered to the Bank, on request. The Cardholder shall return the Card to the Bank or Uni for cancellation in the event the services are no longer required by the Cardholder or if the services are withdrawn by the Bank or Uni for any reason whatsoever, on request."],
                    body: null
                }, {
                    title: "Force majeure",
                    description: ["Cardholder agrees that the Uni and Bank shall not be liable for any damages, losses (direct or indirect) whatsoever, due to disruption or non-availability of any of services/facilities due to technical fault/error or any failure in telecommunication network or any error in any software or hardware systems beyond the control of the Uni and Bank.", "Cardholder agrees that the Bank or Uni may disclose, in strict confidence, to other institutions, such Personal Information as may be reasonably necessary for reasons inclusive of:", {
                        type: "nested",
                        contentType: "ol",
                        nestedStyle: {
                            listStyleType: "lower-roman",
                            padding: "revert"
                        },
                        description: null,
                        nestedHeader: null,
                        nestedContent: ["For participation in any telecommunication or electronic clearing network", "In compliance with a legal directive", "For credit rating by recognized credit rating agencies", "For fraud prevention purposes", "To credit information bureaus."]
                    }],
                    body: null
                }, {
                    title: "Indemnity",
                    description: ["In consideration of the Bank and Uni providing the Cardholder with the facility of the Card, the User shall indemnify and hold the Bank and Uni, along with its authorised representatives, employees, agents and subcontractors, harmless against all actions, claims, demands, proceedings, losses, damages, costs, charges and expenses whatsoever which the Bank and Uni , along with their authorised representatives, employees, agents and subcontractors, may at any time incur, sustain, suffer or be put to as a consequence of or by reason of or arising indirectly or directly out of:", , {
                        type: "nested",
                        contentType: "ol",
                        nestedStyle: {
                            listStyleType: "lower-roman",
                            padding: "revert"
                        },
                        description: null,
                        nestedHeader: null,
                        nestedContent: ["Providing the Card to the Cardholder;", "Providing any of the services hereunder or due to any negligence/mistake/misconduct, directly or indirectly, on Cardholder's part; or", "Breach or non-compliance of any of the Terms and Conditions and Conditions and/or Applicable Laws", "Any fault, error, failure of the Card at Shared Networks and/or Merchant Establishment; or", "By reason of the Bank and Uni acting in good faith taking or refusing to take action on any instruction given by the Cardholder; or", "any breach of the representations, warranties, and covenants made by the Cardholder.", "fraud or dishonesty relating to any Transaction by the Cardholder."]
                    }],
                    body: null
                }, {
                    title: "Right of Lien/Set off",
                    description: ["Cardholder hereby grants and confirms the existence of the right of lien and set-off with the Bank, which the Bank may at any time without prejudice to any of its specific rights under any other agreements with me, at its sole discretion and without notice to me utilize to appropriate any moneys belonging to him (excluding funds received from NBFC/Corporate) and lying/deposited with the Bank or due by the Bank to him, towards any of the Bank\u2019s dues and outstanding under or in respect of a loan facility, including any charges/fees/dues payable under these Terms and Conditions."],
                    body: null
                }, {
                    title: "Liability",
                    description: ["13.1. Notwithstanding anything to the contrary the Bank and Uni, or its successors, assigns, and each of their directors, officers, employees, associates, agents, and representatives shall, in no event be liable, directly or indirectly, to the Cardholder or any other person for any direct, indirect, incidental, special, consequential, punitive or economic loss, expense, damage or any downtime costs, loss of revenue or business opportunities, loss of profit, loss of anticipated savings or business, loss of data, loss of goodwill or loss of value of any equipment including software in case of:", {
                        type: "nested",
                        contentType: "ol",
                        nestedStyle: {
                            listStyleType: "lower-roman",
                            padding: "revert"
                        },
                        description: null,
                        nestedHeader: null,
                        nestedContent: ["arising from or in connection with any access, use or the inability to access or use of Card, howsoever caused and regardless of the form of action (including tort or strict liability);", "as a result of improper usage, virus, corruption, or malfunction of any computer or mobile phone or other telecommunications equipment used to access Card or any technical breakdown of the payment system, downtime, mechanical failure, ATM or POS Terminal which is beyond its reasonable control or in case the breakdown of the payment system was recognizable for the Cardholder, by a message on the display of the device or device/ website or otherwise known to the Cardholder.", "for any service failures or disruptions (including but not limited to, loss of data) attributable to a systems or equipment failure or due to reliance by Bank or Uni on third party products or interdependencies including but not limited to, electricity or telecommunications.", "for non-availability of the funds credited to the Card due to restrictions on convertibility or transferability, requisitions, involuntary transfers, acts of war or civil strike or other similar causes beyond Bank\u2019s or Uni\u2019s control, in which circumstance no other branch, subsidiary or affiliate of the Bank or Uni shall be responsible thereof.", "for the consequences arising out of the interruption of its business by Acts of God, riots, civil commotions, insurrections, epidemics, wars, or any other causes beyond its control, or any other causes beyond its control, or by any strikes or lockouts.", "by reason of any failure to comply with the Cardholder\u2019s instructions, when such failure is caused due to reason beyond the control of RBL Bank or Uni, the opinion of RBL Bank and Uni being final in this regard.", {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-alpha",
                                padding: "revert"
                            },
                            description: "the Cardholder fails to promptly inform Uni in case of:",
                            nestedHeader: null,
                            nestedContent: ["any change in details maintained with the Uni or the payment details;", "any incorrect or inaccurate details provided by the Cardholder and the instructions undertaken and executed by the Uni; or", "Amendment, revocation, or termination of or alteration of the information contained in the Application."]
                        }, "Any misstatement, misrepresentation, error or omission by the Cardholder in any details disclosed to Uni;", "Act or omission of any Merchant Establishment or any Third Party, including but not limited to, any equipment or software providers, any service providers, any network providers (including but not limited to telecommunications providers, internet browser providers and internet access providers), or any agent or subcontractor of any of the foregoing, including refusal in honoring or accepting the Card or any malfunction of systems;", "The Cardholder\u2019s inability to effect or complete any Transaction due to system maintenance or breakdown/non-availability of the Cardholder Portal or any network;", "Non receipt of any communication/SMS/Transaction from the Uni due to reasons not attributable to the Uni.", "Misplacement of Card by the courier, or loss-in-transit of the Card mailer.", {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-alpha",
                                padding: "revert"
                            },
                            description: "The Cardholder shall be liable:",
                            nestedHeader: null,
                            nestedContent: ["in case of any breach of these Terms and Conditions by her/him or in the event of her/his non- compliance with the Applicable Law;", "to immediately notify the Uni in case of any unauthorized use of the Card. In such cases, the Cardholder shall bear the loss sustained by it up to the time of notification to the Uni subject to any limits stipulated by the Uni, except in cases where the Cardholder has acted fraudulently, knowingly or with negligence.", "Handing over of the Card by the Cardholder to anybody other than the designated employees of Uni at Uni\u2019s premises", "Effecting Transaction instructions other than by a Cardholder"]
                        }, "Any injury to the credit, character and reputation of the Cardholder alleged to have been caused by the re-possession of the Card and/or,", "Any request for its return or the refusal of any Merchant Establishment to honour or accept the Card.", "The exercise by Uni of its right to demand and procure the surrender of the Card prior to the expiry date exposed on its face or termination by the Uni of the services and Card."]
                    }, "13.2. The Cardholder\u2019s liability for the loss incurred in case of any unauthorised transaction undertaken through the account shall be subject to the Uni\u2019s compensation policy, updated from time to time, in accordance with the Applicable Law and available on the Bank\u2019s website.", "13.3. The Uni or Bank is under no obligation to monitor the Merchant Establishment\u2019s service/products used by the Cardholder. The Merchant Establishment alone will be responsible for all obligations under the contract including (without limitation) warranties or guarantees. Any dispute with or complaint against any Merchant Establishment must be directly resolved by the Cardholder with the Merchant Establishment. It is clarified that the Bank or Uni shall not be responsible or liable for any deficiency in goods and/or services purchased using the Card.", "13.4. The Cardholders are instructed to satisfy themselves regarding the quality, quantity, and fitness of any good and/or service before purchasing the same including but not limited to any defect in quality of goods or services supplied."],
                    body: null
                }, {
                    title: "Charges",
                    description: [{
                        type: "ul",
                        data: ["Charges shall include voluntary and involuntary charge, details of which are given hereunder:"]
                    }, {
                        type: "nested",
                        contentType: "ul",
                        nestedStyle: {
                            listStyleType: "lower-roman",
                            paddingLeft: "80px"
                        },
                        nestedHeaderStyle: {
                            padding: "40px"
                        },
                        description: null,
                        nestedHeader: "<b>Voluntary charge</b>",
                        nestedContent: ["The amount of any purchase of any goods or services made by a transaction instruction.", "Any amount which the Cardholder has requested Uni to debit the card account with, by virtue of a transaction instruction."]
                    }, {
                        type: "nested",
                        contentType: "ul",
                        nestedStyle: {
                            listStyleType: "lower-roman",
                            paddingLeft: "80px"
                        },
                        description: null,
                        nestedHeader: "<b>Involuntary charge</b>",
                        nestedHeaderStyle: {
                            padding: "40px"
                        },
                        nestedContent: ["Any fees charged by Uni in respect of the Card, including replacement, renewal, handling and other fees, if any. These fees are non-refundable.", "Service charges on specific types of transactions. The method of computation of such charges will be as notified by Uni, from time to time."]
                    }, {
                        type: "ul",
                        data: ["Uni record of the amount of any charge shall, in the absence of manifest error, be final and binding on the Card Holder, and shall be conclusive in any case where Uni has effected any payment.", "All statutory taxes, all other duties (including stamp duty and relevant registration charges, if any, in connection with the card) and taxes (of any description whatsoever) as may be levied from time to time by the government or other authority in respect of or in connection with the card, will be borne by the Card Holder.", "For details on charges, the User must refer to the schedule of charges on the Uni Mobile Application. These charges are subject to changes at the sole discretion of Uni and the same shall be binding on the Card holder."]
                    }],
                    body: null
                }, {
                    title: "Lost, stolen or misuse of Cards",
                    description: ["User agrees that the obligation of the safety and security of the Card shall solely rest with the Cardholder as the case maybe. If the Card or its PIN is lost, stolen or misused, as the case may be, the Cardholder shall immediately contact the Customer Service Centre on the telephone numbers listed on the backside of the Card. The Cardholder must file a report with the local police and send a copy of the same to the Uni. The Uni upon adequate verification of information will suspend the Card temporarily. The Cardholder is solely liable for any transaction or loss incurred due to the loss of the Card, up to the time where the Card is suspended by the Uni. The Card shall be blocked immediately after reporting. Uni and Bank reserves the right to block the Card on suspected risk of compromise in order to protect the interest of the Card holder and to avoid misuse in any manner on the Card Account. Uni or Bank shall not be liable for any loss by the misuse of the Card. The charges for usage of such services shall be borne by the Cardholder. The Cardholder will be liable for all transactional loss / any incidental charges incurred on the Card until the Card is hot listed /cancelled. Bank or Uni shall not be liable for the misuse, loss or theft of Cards. The Card holder will not hold Uni and Bank liable in case of any improper/ fraudulent/unauthorised/ duplicate/ erroneous use of the Card and/or the PIN. Uni and Bank will also not be liable for any consequences connected with the use/ misuse of the Card by any third party due to the Card falling in the hands of any third party or the PIN coming to the knowledge of any third party leading to unauthorized access. Card holder will be responsible and shall indemnify Bank and Uni against any liability, costs or damages arising out of such misuse / use by third parties based upon or relating to such access and use, or otherwise. In case of loss of the Card the new Card will be reissued at the sole discretion of the Uni and as per the charges determined by the Uni."],
                    body: null
                }, {
                    title: "Disclaimer of Warranties",
                    description: ["The Bank and Uni disclaim all warranties, express or implied, regarding correspondence with description, satisfactory quality, fitness for a particular purpose and non-infringement of any services or any goods provided or incidental to the services provided under this Agreement Subject to the aforesaid the Bank and Uni disclaim all warranties, express or implied, other than those specifically agreed by it."],
                    body: null
                }, {
                    title: "Disclosures",
                    description: ["The Cardholder acknowledges that the information on his/her usage of Card is exchanged amongst banks and financial entities that provide corporate facilities. Acceptance of an Application for Card is based on no adverse reports of the individual\u2019s creditworthiness and compliance of KYC norms. Bank or Uni may report to other banks or financial entities any delinquencies or suspicious activities and/or transactions done on the card, and/or withdrawal of the Cardholder\u2019s facility to use the card.", "Uni and the Bank may use your information or data (including personal or sensitive personal data or information) in connection with the services associated with the Card. In this regard, you agree and consent for Uni to share such data or information with the Bank.", "The purpose of such data sharing is for Uni to update its records, provide curated offers and services with respect to the Card.", "The Cardholder can opt out of such data sharing at any point of time by cancelling the Card. The Cardholder can do so by calling the Customer Care Centre.", "Based on the receipt of adverse reports, Uni or Bank may cancel the Card. Uni or Bank shall not be obliged to disclose to the Cardholder the name of the bank or financial entity, from where it received, or to which it disclosed information. The Cardholder shall forthwith notify Uni of any change in his/her address for communication as stated in the application form for the Card. Bank and Uni reserves the right to change the Cardholder\u2019s address in its records if such change in address comes to the notice of Bank or Uni. The responsibility shall be solely of the Cardholder to ensure that Bank and Uni have been informed of the correct address for communication, and Bank and Uni disclaim all liability in case of an incorrect address resulting in any loss or liability for the Cardholder.", {
                        type: "nested",
                        contentType: "ol",
                        nestedStyle: {
                            listStyleType: "lower-alpha",
                            padding: "revert"
                        },
                        description: "The Cardholder authorizes the Bank or Uni to disclose, exchange, share or part with all or any information or documents relating to the Cardholder\u2019s details and payment history information pertaining to and contained in these Terms and Conditions and Conditions, or as expressed in the Application made for the Card or in the dealings between the Cardholder and the Bank /Uni for any purpose to:",
                        nestedHeader: null,
                        nestedContent: ["Bank\u2019s Head office or to any other branches, subsidiaries or associated or affiliated companies of the Bank;", "Professional advisers of the Bank;", "Any potential or actual purchaser/assignee of the Bank or of any of its businesses, rights, assets, or obligations; or", "to any other person where disclosure is required under Applicable Laws"]
                    }, "The Cardholder agrees to adhere to and comply with all such Terms and Conditions and Conditions as Bank / Uni or its affiliates may prescribe, from time to time, for facilities/services availed of by the Cardholder."],
                    body: null
                }, {
                    title: "Governing Law and Jurisdiction",
                    description: ["These Terms and Conditions and / or the transaction shall be governed by applicable Indian Law and regulations and all courts in Mumbai shall have the exclusive jurisdiction as regards any claims or matters arising out of the use of the Card."],
                    body: null
                }, {
                    title: "Responsibility for Disputes with ME or Shared Network",
                    description: ["Bank or Uni shall not in any manner be responsible for any disputes regarding goods and services received by the Cardholder including the quality, value warranty, delay of delivery, non-delivery, non- receipt of any goods or services. It must be clearly understood that the Card is only a facility to the Cardholder to avail facilities and the Bank or Uni hold out no warranty or make no representation about quality, quantity, value, delivery or otherwise, howsoever regarding goods or services, and any such disputes should be resolved by the Cardholder with the merchant directly. Any dispute in respect of a Shared Network will be resolved as per VISA regulations. Bank or Uni do not accept responsibility for any dealings the Cardholder may have with Shared Networks. Should the Cardholder have any complaints concerning any Shared Network ATM (if any), the matter should be resolved by the Cardholder with the Shared Network, and failure to do so will not relieve him from any obligations to Bank or Uni. However, the Cardholder should notify Uni of the complaint immediately."],
                    body: null
                }, {
                    title: "Quality of goods & services",
                    description: ["Bank or Uni shall not, in anyway, be responsible for merchandise, merchandise warranty or any services purchased, or availed of by the Cardholder from Merchant Establishment, including on account of deficiency in services delay in delivery, non-delivery, non-receipt of goods or receipt of defective goods by the Card Holder. It must be distinctly understood that the card is purely a facility to the Cardholder to purchase goods and/or avail of services, Bank or Uni hold out no warranty or makes no representation about quality, delivery or otherwise of the merchandise and of the services provided by the Merchant Establishment. Any dispute or claim regarding the merchandise or services must be solved by the Cardholder with the Merchant Establishment. The existence of the claim or dispute shall not relieve the Cardholder of his/her obligation to pay all the charges and the Cardholder agrees to pay promptly such charges, dues, notwithstanding any dispute or claim, whatsoever. However, the Cardholder should notify Uni of the complaint immediately."],
                    body: null
                }, {
                    title: "Amendment of Terms and Conditions",
                    description: ["Uni or Bank reserve the right to change, at any time, these Terms and Conditions and Conditions, features and benefits offered on the card including, without limitation to, changes which affect existing balances or rates. The Cardholder shall be liable for all charges incurred and all other obligations under these revised Terms and Conditions.", "Uni may communicate the amended Terms and Conditions by hosting the same on its website or Mobile Application or in any other manner as decided by the Uni. The Cardholder shall be responsible for regularly reviewing these Terms and Conditions including amendments thereto as may be posted on the website/mobile application of Uni and shall be deemed to have accepted the amended Terms and Conditions by continuing to use the Card.", "Uni or Bank may, at any time and subject to applicable law, change or delete or any provision, add or change to, these Terms and Conditions and Conditions. This includes the right to add or change (including to increase or decrease) any charges. Revised Terms and Conditions shall be updated on the Mobile Application / Website of Uni."],
                    body: null
                }, {
                    title: "Banks and Uni Authority",
                    description: ["The Bank and Uni have the absolute discretion to withdraw the Card and/or the services thereby provided or amend or supplement any of the above Terms and Condition at any time without prior notice to the Cardholder.", "All authorizations and power conferred on the Bank or Uni by regulatory or statutory authority and in accordance with Applicable Law are irrevocable.", "The Card is the property of the Uni and must be returned to an authorized person of the Uni on request or surrender the Card to the Uni in the event of the Cardholder no longer requiring the services or is directed to do so by the Uni.", "The Uni shall have the right to not return the application, the photographs, information, and documents submitted by the Cardholder. The Uni shall, without notice to or without any consent of the Cardholder, be absolutely entitled and have full right, power and authority to make disclosure of any information relating to Cardholder including personal information, details in relation to documents, products/services offered, defaults, security, obligations of Cardholder, to the Credit Information Bureau of India (CIBIL) and/or any other governmental/regulatory/statutory or private agency/entity, credit bureau, RBI, the Bank other branches/subsidiaries/affiliates/rating agencies, service providers, other banks/financial institutions, any third parties, any assignees/potential assignees of transferees, who may need the information and may process the information, publish in such manner and through such medium as may be deemed necessary by the publisher/Bank/RBI, including publishing the name as part of willful defaulter\u2019s list from time to time.", "The Uni shall have the right to make use of the information of the Cardholder for the purpose of KYC information verification, credit risk analysis, or for other related purposes. In this connection, the Cardholder waives the privilege of privacy and privacy of contract.", "The Uni shall have the right, without notice to or without any consent of the Cardholder to approach, make enquiries, obtain information, from any person including other banks/finance entities/credit bureaus, Cardholder\u2019s family members, any other person related to the Cardholder, to obtain any information for assessing track record, credit risk, or for establishing contact with the Cardholder or for the purpose of recovery of dues from the Cardholder.", "In the event of any disagreement or dispute between Uni and/or Bank and the Cardholder regarding the materiality of any matter including of any event, occurrence, circumstance, change, fact, information, document, authorisation, proceeding, act, omission, claims, breach, default or otherwise, the decision of the Uni as to the materiality of any of the foregoing shall be final and binding on Cardholder. The Cardholder shall be bound by these Terms and Conditions and policies stipulated by Uni, from time to time, in this regard."],
                    body: null
                }, {
                    title: "Severability and Waiver",
                    description: ["Each of the provisions of these Terms and Conditions is severable and distinct from the others and if at any time, one or more of such provisions is or becomes illegal or unenforceable in any respect under the laws of any jurisdiction, the legality, validity, or enforceability of the remaining provisions shall not be affected in any way. No act, delay or omission by the Uni shall affect its rights, powers and remedies under these Terms and Conditions and Conditions or other further exercise of such rights, powers or remedies. The rights and remedies under these Terms and Conditions are cumulative and not exclusive of other rights and remedies provided by law."],
                    body: null
                }, {
                    title: "Notices",
                    description: ["The Bank or Uni may provide the Cardholder with notices and communications in relation to the Card by e-mail, SMS, push notifications, regular postal mail or postings on its Cardholder Portal or by any other reasonable means, at the registered contact details provided at the time of the Application. All notices in connection with the Card addressed to the Uni shall be in email as provided below and all notices shall be deemed to be received by the Uni only upon acknowledgment of receipt of the same in writing by the Uni.", "Customer Support Email id: care@uni.club`"],
                    body: null
                }, {
                    title: "Unauthorized Transactions, Customer Complaints and Disputes/Grievance Redressal/ escalation",
                    hasHtml: !0,
                    description: ["25.1. Since the transactions using the Card requires authentication by secret PIN known to the Cardholder only any charge slip, or other payment requisition irrespective of whether it has the signature of Cardholder therein shall be conclusive proof that the charge recorded on such a charge slip or other requisition, was properly incurred by the Card Holder. The other payment requisition referred to in this clause shall include any and all payment pertaining to permissible expenses incurred by a Cardholder for online transactions or at a Merchant Establishment by use of the card which is not recorded as a charge. Any disputed transaction on the card shall be raised by the Cardholder/s with Uni\u2019s Customer care center only within ninety (90) days from the date of the transaction. Any dispute raised by the Cardholder/s after ninety (90) days from the date of the transaction shall not be entertained and the Bank or Uni shall not be liable for the same in any manner whatsoever.", "Contact particulars of 24-hour call center: 080 68216821", "In the event you are not satisfied with the resolution to your queries, you may send a mail to our Customer care email and we will resolve the query within 10 working days. For more details refer to Uni Mobile Application", "<b>Level 1 \u2013</b> Please call Uni on our toll free number - 080 68216821 for any queries / complaints", "<b>Level 2 -</b> In case the Cardholder is not satisfied with the response of Level 1, Cardholder can Call us at our Cardholder Care Centre No. +91 22 7120 9091 or Email us at ppihelpdesk@rblbank.com.", "<b>Level 3 -</b> In case the Cardholder is not satisfied with the response of Level 2, Cardhoder can write to the Bank\u2019s Nodal officer for resolution. Nodal officer will respond in 10 days.", {
                        type: "table",
                        data: {
                            headers: [{
                                label: "Nodal Officer Name",
                                accessor: "officerName"
                            }, {
                                label: "Location / Zone",
                                accessor: "location"
                            }, {
                                label: "Address",
                                accessor: "address"
                            }, {
                                label: "Contact Number",
                                accessor: "contact"
                            }, {
                                label: "Email ID",
                                accessor: "emailId"
                            }],
                            tableData: [{
                                officerName: "Ms Preethi Vijaygop al",
                                location: "South & Goa",
                                address: "RBL Bank Limited (Formerly: The Ratnakar Bank Limited) First Floor, Rashmi Towers , No.1, Valluvarkottam High Road, Nungambakkam, Chennai \u2013 600034",
                                contact: "044-40431529",
                                emailId: "regionalnodalofficersouth@rblbank. com"
                            }, {
                                officerName: "Mr. Zaheerul Hasan",
                                location: "Delhi, NCR, Uttar Pradesh, Gujarat, Rajastha n, Punjab",
                                address: "RBL Bank Limited Upper Ground Floor, Hansalaya Building, 15, Barakhamba Road, New Delhi, 110001.",
                                contact: "011-49386421",
                                emailId: "regionalnodalofficernorth@rblbank.c om"
                            }, {
                                officerName: "Ms. Michelle Alistair",
                                location: "MP & Kolkata",
                                address: "RBL Bank Limited Thapar House, 25 Brabourne Road, 1st Floor, Kolkata \u2013 700001.",
                                contact: "033-40330168",
                                emailId: "regionalnodalofficereast@rblbank.com"
                            }, {
                                officerName: "Ms. Sejal Rajput",
                                location: "Maharashtra",
                                address: "RBL Bank Limited India Bulls Centre, Tower 2B, 9th Floor, 841 Senapati BapatMarg, Lower Parel \u2013 400 013.",
                                contact: "022-43020781",
                                emailId: "regionalnodalofficerwest@rblbank.com"
                            }]
                        }
                    }, "In case you are still not satisfied with the response of the Bank, the same can be escalated to the Principal Nodal officer at \u201cprincipalnodalofficer@rblbank.com\u201d", "The Principal Nodal Officer will respond within 10 days.", "<b>Banking Ombudsman</b>", "If the reply from Principal Nodal Officer fails to address the said grievance, Cardholder/Corporate may write to the Banking Ombudsman. Please follow the link to reach the Banking Ombudsman - https://www.rbi.org.in/commonman/English/Scripts/AgainstBankABO.aspx", "25.2. The liability of the Bank/ Uni / Cardholder for any unauthorized transaction shall be:", {
                        type: "ul",
                        data: ["Zero Liability of a Cardholder - A Cardholder\u2019s entitlement to zero liability shall arise where the unauthorized transaction occurs in the following manner:", {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-alpha",
                                padding: "revert"
                            },
                            description: null,
                            nestedHeader: null,
                            nestedContent: ["Contributory fraud/ negligence/ deficiency on the part of the Uni or Bank (irrespective of whether or not the transaction is reported by the Cardholder)", "Third party breach where the deficiency lies neither with the bank nor with Uni nor with the Cardholder but lies elsewhere in the system, and the Cardholder notifies the Uni within three working days of receiving the communication from the Uni regarding the unauthorized transaction."]
                        }]
                    }, "25.3. Limited Liability of a Cardholder - A Cardholder shall be liable for the loss occurring due to unauthorized transactions in the following cases:", {
                        type: "ul",
                        data: ["Zero Liability of a Cardholder - A Cardholder\u2019s entitlement to zero liability shall arise where the unauthorized transaction occurs in the following manner:", {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-alpha",
                                padding: "revert"
                            },
                            description: null,
                            nestedHeader: null,
                            nestedContent: ["In cases where the loss is due to negligence by a Cardholder, such as where he has shared the payment credentials, the Cardholder will bear the entire loss until he reports the unauthorized transaction to the Bank through Customer Care Centre. Any loss occurring after the reporting of the unauthorized transaction shall be borne by the Bank.", "In cases where the responsibility for the unauthorized electronic banking transaction lies neither with the Bank nor with the Cardholder, but lies elsewhere in the system and when there is a delay (of four to seven working days after receiving the communication from the Bank) on the part of the Cardholder in notifying the Bank of such a transaction, the per transaction liability of the Cardholder shall be limited to the transaction value or Rs 10,000/- whichever is lower."]
                        }]
                    }, "25.4. In case the Cardholder notifies the Bank through Customer Care Centre after seven working days of receiving the communication from the Bank regarding the unauthorized transaction, the Cardholder liability shall be determined as per the Bank\u2019s board approved policy."],
                    body: null
                }]
            },
            sbm: {
                logoUrl: "/images/sbm_bank_logo.png",
                introduction: ["<b>GENERAL TERMS AND CONDITIONS</b>", "These terms and conditions (\u201cTerms and Conditions\u201d) apply to and regulate the provisions of prepaid payment instruments namely Uni - SBM Bank Card(s) (collectively \u201cPrepaid Cards\u201d or \u201cCards\u201d or \u201cPPIs\u201d) provided by Uniorbit Technologies Pvt Ltd (the Company\u201d). The PPIs are issued by SBM Bank (India) Limited (\u201cBank\u201d). The Card is a co-branded Prepaid Card marketed by Uni.", "By completing the sign-up process for availing any of the Cards, you are deemed to have expressly read, understood and accepted each and every Terms and Conditions mentioned herein. You agree to be bound by all the Terms and Conditions mentioned herein, as may be amended from time to time", "In these Terms and Conditions, \u201cWe\u201d, \u201cUs\u201d or \u201cOur\u201d refers to the SBM Bank, or the Company acting on behalf of SBM Bank. \u201cYou\u201d or \u201cYour\u201d refers to the individual purchasing or using the Prepaid Card."],
                content: [{
                    title: "Definitions",
                    description: ["In these Terms and Conditions, unless the contrary intention appears and/or the context otherwise requires, capitalized terms defined by:", {
                        type: "ul",
                        styles: {
                            listStyleType: "lower-roman"
                        },
                        data: ["inclusion in quotations and/ or parenthesis have the meanings so  ascribed;  and", {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-alpha",
                                padding: "revert"
                            },
                            description: null,
                            nestedHeader: "the  following  terms  shall  have  the  meanings assigned to them herein below",
                            nestedContent: ["\u201cAccount\u201d refers to a prepaid account opened in the name of the customer  with  the  Bank  for  the  purpose  of  monitoring  the  limits available on such PPIs.", "\u201cBusiness Day\u201d means a day other than a Sunday, 2nd or 4th Saturday  of  a  Month  or  Public  Holiday  as  defined  under  Section 25 of Negotiable Instrument Act, 1881 on which banks are open to transact business of banking.", "\u201cCharges\u201d  means such levy, costs  and charges  levied by  Us for usage of the PPIs, as amended from time to time.", "\u201cCustomer\u201d  or  \u201cHolder\u201d  or  \u201cYou\u201d  shall  mean  any  person  to whom the PPI is issued and who is authorised to hold and use the same against the value stored on such PPI.", "\u201cCustomer  Care  Centre\u201d  refers  to  contact  centre  provided  by Us for addressing all queries, complaints raised by the Customer or any details or information sought by the Customer in relation to the PPIs.", "\u201cEDC\u201d  or  \u201cElectronic  Data  Capture\u201d  Machine  means  terminal, printer, other peripheral  and  accessory and  necessary  software  on which the PPI can be swiped or used to initiate a transaction.", "\u201cInternet Payment Gateway\u201d means the protocol stipulated/to be stipulated by Us authorizing the payments made using PPI over the internet upon authentication of the Customer.", "\u201cKYC\u201d shall mean Know Your Customer guidelines adopted by Us for the purpose of identification and verification of the Customer, pursuant to the Regulations issued by Reserve Bank of India, from time to time.", "\u201cMerchant  Establishments\u201d  shall  mean  such  physical establishments  (including  but  not  limited  to  stores,  shops, restaurants,  hotels,  etc.)  and  Reloadable  stores  (in  any  type  of electronic form including but not limited to e-commerce platforms, digital marketplaces, etc.) located in India, having a specific contract with  Us  (or  a  contract  through  a  payment  aggregator  /  payment gateway / card network) for accepting PPI.", "\u201cPayment Channel\u201d shall mean various modes of transactions including but not limited to EDC/POS terminals/kiosks/Internet Payment Gateway/Mobile based payment solutions and various other modes as intimated by Us from time to time.", "\u201cPersonal  Identification  Number  (PIN)\u201d  is  a  numeric  password setup by the customer on the Company mobile application.", "\u201cPOS\u201d or \u201cPoint of Sale\u201d means electronic terminals maintained by Merchant Establishments in India at which the Customer can use the PPI subject to terms and conditions of this agreement.", "\u201cPPI\u201d shall mean a prepaid instrument which includes gift cards and meal cards that facilitates purchases against the value stored on such PPIs as defined in the Regulations.", "\u201cRegulations\u201d  shall  mean  the  master  directions,  circulars, notifications,  rules,  guidelines,  regulations,  etc.  issued  by  Reserve Bank of India or any other competent authority related to issuance and operation of prepaid payment instruments in India, as amended from time to time.", "\u201cSchedule of Charges\u201d shall mean the details of fees or Charges as may be prescribed by Us from time to time and displayed on our website.", "\u201cTransaction\u201d means any transaction initiated by the Customer using PPI at any Merchant Establishment or any cash withdrawal from an ATM.", "\u201cSBM Bank\u201d or \u201cIssuer\u201d shall mean SBM Bank (India) Limited (CIN  No.  U65999MH2017FLC293229),  a  company  incorporated in  India  under  the provisions  of Companies Act  2013  and a  banking company under the Banking Regulations Act 1949 and who is licensed to  carry  on  its  business  of  banking  by  the  Reserve  Bank  of  India (\u201cRBI\u201d)  and  having  its  Registered  Once  at  101,  Raheja  Centre,1st Floor Free Press Journal Marg, Nariman Point Mumbai, Maharashtra 400021 (hereinafter called \u201cSBM Bank\u201d or \u201cBank\u201d which expression shall, unless repugnant to the context thereof, mean and include its successors and assigns).", "\u201cUni\u201d or \u201cthe Company\u201d shall mean Uniorbit Technologies Private Limited, a company within the meaning of the Companies Act, 2013, having  its  registered  once  at  Block-X,  303,  Siddhartha Apartments, Landmark Near Sant Colambo School, Pitampura,  North West Delhi, Delhi, 110034", "\u201cForce Majeure\u201d includes any Acts of God, riots, civil commotions, insurrections, pandemic, epidemics, wars, or any other causes beyond Our control, or by any strikes or lockouts"]
                        }]
                    }]
                }, {
                    title: "ISSUANCE AND USAGE OF PPI",
                    description: [{
                        type: "ul",
                        data: ["The PPI shall be Our exclusive property", "The PPI shall be valid only within the territory of India and for transactions  in  Indian  Rupees  only.  The  PPI  cannot  be  used  outside the territory of India or for any transactions denominated in foreign currency. The PPI should be used by individuals atleast 18 years of age. We reserve the right to refuse the usage of the Card. We reserve the right to decline authorizing any particular transaction without assigning any reason thereof and without any liability or recourse to Us.", "The Customer shall be required to sign on the reverse side of the PPI (if the PPI is in the card form) immediately upon its receipt. We reserve the right to reject or cancel any Transaction in absence of the signature or mismatch of the signature, without further notice or intimation to the Customer.", "The PPI shall not be transferable to other individual or third party under any circumstances.", "We shall not be liable to pay any interest on any balance maintained in the PPI at any point in time. The PPI is a zero-balance card at the time of issue.", "The  Customer  agrees  and  confirms  that  the  PIN  shall,  under  no circumstances be revealed by the Customer to any relative or family members or third party. The Customer shall be solely responsible and liable for the consequences arising out of such unauthorized disclosure of PIN and/or unauthorized  usage  of  the PPI. We disclaim all responsibility and liability arising out of or in connection with the unauthorized usage of the PPI and/or any loss or damage, whether direct or indirect, incurred by the Customer as a result of such misuse. If the Customer forgets or misplaces the PIN, the Customer should visit the website or mobile application, or any other mode as may be made available by Us for re-generation of PIN.", "We will inform or intimate the Customer 45 days prior to the expiry of the PPI through SMS on the registered mobile number and/or email of the Customer or as specified in the Regulations applicable from time to time. Customer needs to utilize the entire credit balance available on the PPI prior to its expiry. In case the Customer does not utilize the credit balance available on the PPI within the validity period, the Customer can approach Us for renewal of the PPI. In case the Customer does not approach Us within a specified period, the outstanding credit balance available on the PPI will be transferred to a fund in compliance with the Regulations.", "The Customer shall sign and retain all the charge slips generated for each of the Transaction consummated at a Merchant Establishment. We shall not be obliged to provide copies of the charge slips or transaction slips to the Customer. Any such request by the Customer will be at Our sole discretion The Customer agrees that we shall be entitled to charge additional cost or charge for providing copies of the charge or transaction slips.", "Any charge or cost levied by the Merchant Establishment in relation to any Transaction shall be directly settled by the Customer with the Merchant Establishment. We shall not be liable or responsible, either directly or indirectly, for any act or omission on the part of the Merchant Establishment or the charges or cost levied by them in relation to the Transaction.", "All refunds and adjustments due to any Merchant Establishments on account of device error or communication link will be processed manually and the Account will be credited after due verification by Us pursuant  to  the  applicable  rules,  Regulation  and  our  internal  policy. The Customer acknowledges that all refunds in case of failed, returned, rejected or cancelled Transactions or reversals and charge backs cannot be used by the Customer and would instead go back to source. The Customer  shall  unconditionally  keep  Us  indemnified  against  any loss or damage caused to Us on account of dishonoring the payment instructions  as  a  result  of  insufficient  funds  in  the  Account.  The Customer agrees that we shall be entitled to deduct the amount of such loss or damages caused to Us directly from the Account", "The Customer undertakes to act in good faith at all times in relation to all dealings of the PPI. The Customer accepts full responsibility for any illegal or wrongful use of the PPI in contravention to the Terms and Conditions contained herein and indemnifies Us against any loss, damage or any financial charges that We may incur in the process of such transactions", "The Customer hereby agrees not to use the PPI for making payment(s) of any goods and services, which is illegal under the laws. The PPI cannot be used for making purchases of prohibited or contraband products or services like lottery tickets, banned or prohibited magazines, participation in sweepstakes, purchase of bitcoins, payment for call-back services, etc", "We do not take any responsibility for any loss, damage or injuries suffered  or  caused  to  the  Customer  in  connection  with  the  service, quality of goods and services provided by the Merchant Establishment, refusal to accept (conditional acceptance) the PPI by Merchant Establishment, inability or disruption (technical issues) to use the PPI at Merchant Establishment or any error in any software or hardware systems beyond Our control.", "The Customer hereby acknowledges and agrees that if there is no Transaction for a consecutive period of one (1) year on the PPI or 90 days consecutively after the issuance of the PPI, subject to validity of the PPI, the same shall be made inactive by Us after sending a notice to the Customer. The PPI can only be reactivated by Us after validations and requisite due diligence, as stipulated from time to time.", "The Customer hereby agrees to receive SMS or email alerts from Us for all Transactions done using the PPI. The SMS or email alerts from Us shall stipulate debit and credit Transactions, balance available or remaining on the PPI or such other information or details as stipulated by Us, from time to time.", "The Customer agrees that We may, at our sole discretion, utilize the services of external service provider(s) or agent(s) on such terms as required or necessary, for provisioning of the services in relation to the PPI.", "The  Customer  shall  have  access  to  Frequently  Asked  Questions (\u201cFAQ\u201d) as uploaded by Us on our website, from time to time."]
                    }, "<b>Cards issued with full KYC</b>", "<b>Limits:</b> The per transaction limit cannot exceed Rs.2,00,000/-.", "The Customer agrees that the Card cannot be loaded, reloaded or used beyond the limits prescribed under the prevailing Regulations and Our internal policies. We reserve the right to change the limits in accordance with such Regulations and Our internal policies"]
                }, {
                    title: "BREACH",
                    description: [{
                        type: "ul",
                        data: ["In the event of any breach of these Terms and conditions by the Customer, We shall have the sole right to forthwith cancel or terminate the PPI without having any liability, claim, demand or dispute against Us", "The Customer undertakes and agrees to indemnify and hold Us and Our authorized representatives harmless against any loss, damage, claim, penalty, cost, charges or expenses (including legal counsel fees)  that  We may  incur  and/or  suffer, whether  directly  or  indirectly, as a result of the Customer committing any breach of the Terms and Conditions contained herein.", "The Customer also undertakes and agrees to indemnify and hold Us and Our authorized representatives harmless against any direct, indirect, incidental, special, consequential, punitive or economic loss, expense including legal counsel fees, damage, downtime costs or any loss of revenue caused by factors not completely in Our control, including but not limited to Force Majeure events, service/technical failures at own facilities or third parties used by Us, error or omission at a Merchant Establishment, misplacement of card by postal/courier agencies"]
                    }]
                }, {
                    title: "TERM & TERMINATION",
                    description: [{
                        type: "ul",
                        data: ["The PPI shall be valid until the expiry date printed on the face of the PPI.", "The Customer agrees and undertakes to destroy the PPI upon its expiry", "The  Customer agrees that the  PPI shall be defaced  by cutting off the top right-hand corner, ensuring that both the hologram and the magnetic strip have been cut and has been destroyed or received by us. The Customer agrees that the Customer shall continue to be liable for any Charges incurred on the PPI prior to its termination, irrespective of the fact whether the Customer has or claims to have destroyed the PPI.", {
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-roman",
                                padding: "revert"
                            },
                            description: null,
                            nestedHeader: "We may at Our sole discretion terminate the PPI if:",
                            nestedContent: ["the Customer is declared insolvent or in case of death of the Customer or Customer is declared of unsound mind.", "the Customer committing breach of any of the terms, conditions, stipulations or its obligations under these Terms and Conditions.", "any restriction imposed on the Customer by an Order of a competent Court or Order issued by any regulatory or statutory authority in India or any investigating agency", "the program becomes illegal under the applicable laws, and Regulations", "the program is terminated", "The Customer reports that the Card is lost or requests to cancel or suspend his Card"]
                        }, "We, at our sole discretion, reserve the right to, either temporarily or  permanently,  withdraw  the  privileges  on  the  PPI  and/or terminate the PPI at any time without giving any notice or assigning any reason thereof. In case of a temporary withdrawal, the privileges attached to the PPI shall be reinstated by Us at our sole discretion. In case of a permanent withdrawal, we have a right to cancel the PPI permanently. However, it is made distinctly clear that withdrawal (temporary or permanent) shall constitute automatic withdrawal of all benefits, privileges and services attached to the PPI. The Customer agrees that in the event of temporary or permanent withdrawal of the PPI, the Customer shall continue to be fully liable for all Charges incurred  on  the  PPI  prior  to  such  withdrawal,  together  with  all other applicable Charges thereon, unless otherwise specified by us.", "If We  temporarily or  permanently, withdraw  the privileges  or terminates the PPI, We will on best effort basis, promptly notify the Customer. We shall not  be held liable or  responsible for any such delays or laches in receipt of such notification.", "Upon termination of the PPI as stated above, the balance amount, if any lying in the Account will be refunded back to the source."]
                    }]
                }, {
                    title: "CHARGES",
                    description: [{
                        type: "ul",
                        data: [{
                            type: "nested",
                            contentType: "ol",
                            nestedStyle: {
                                listStyleType: "lower-roman",
                                padding: "revert"
                            },
                            description: null,
                            nestedHeader: "Charges shall include:",
                            nestedContent: ["Any fees charged by Us in respect of the PPI, including replacement, renewal, handling and other fees, if any", "Service Charges on specific types of Transactions. The method of computation  of  such  Charges will  be as  notified  by Us  from  time to time.", "Such other Charges as mentioned in the mobile application provided to the Customer."]
                        }, "Charges shall be non-refundable, non-transferrable and non-assignable in nature.", "All  Charges,  in  the  absence  of  manifest  error,  shall  be  final  and binding on the Customer and shall be conclusive in nature.", "All statutory taxes including goods and service tax, imposts, duties (of any description whatsoever) as may be levied from time to time by Government of India or other competent authority in respect of or in connection with the PPI, shall be borne by the Customer", "All Charges related to the PPI will be charged on the Account, as may be levied from time to time. The Customer shall become liable to pay as soon as a charge has been incurred by use of the PPI."]
                    }]
                }, {
                    title: "LOST, STOLEN OR MISUSED PPI",
                    description: [{
                        type: "ul",
                        data: ["If the PPI is lost or stolen, the Customer must immediately report such loss or theft to Customer Care Centre and request for immediate suspension of the PPI.", "The Customer acknowledges that once the PPI is reported lost, stolen or damaged, such PPI cannot be used again, even if found subsequently.", "The Customer is responsible for the security of the PPI and shall take all steps towards ensuring that the PPI is not misused. In the event we determine or receive any information that the Customer has neglected or refused or failed to take steps as indicated above, in case of loss, theft or destruction of the PPI, we reserve the sole right to cancel or terminate such PPI.", "No  liability  shall  accrue  upon  the  Customer for  any  unauthorized transactions done on the PPI, after such PPI has been reported lost, stolen or damaged by the Customer. All liabilities accrued on the PPI, post reporting by the Customer shall be borne by Us. However, in case of any dispute relating to the time of reporting and/ or transaction(s) made on the PPI, post reporting of the PPI being lost, stolen or misused, all Our decisions shall be final and binding on the Customer."]
                    }]
                }, {
                    title: "EXCLUSION OF LIABILITY",
                    description: ["We shall be under no liability or responsibility to the Customer or any third party, in respect of any special, indirect, incidental, consequential, punitive or exemplary loss or damage including, but not limited to,  lost  profits  in  connection  with  this  arrangement.  We  disclaim all warranties, express or implied, regarding correspondence with description,  satisfactory  quality,  fitness  for  a  particular  purpose  and non-infringement of any services or any goods provided or incidental to the services provided under this arrangement."]
                }, {
                    title: "DISPUTED TRANSACTIONS",
                    description: [{
                        type: "ul",
                        data: ["Any charge or Transaction slip or other payment requisition received by Us for payment shall be conclusive proof of such Charge, unless the PPI is lost, stolen or fraudulently misused and evidenced by the Customer.", "All disputed Transactions in relation to the PPI shall be required to be raised with Our Customer Care Centre as mentioned in Clause XIII below, within fifteen (15) Business Days from the date of the disputed Transaction. The Customer acknowledges that any request, after fifteen (15) Business Days from the date of the disputed Transaction shall not be accepted by Us."]
                    }]
                }, {
                    title: "QUALITY OF GOODS AND SERVICES",
                    description: ["Any dispute with or complaint against any Merchant Establishment regarding any goods purchased or services availed must be directly resolved by the Customer with the Merchant Establishment. The Customer agrees to satisfy himself regarding the quality, quantity, and fitness of  any good  and/or  service before  confirming the  purchase of the same.", "We hold out no warranty or make no representation about quality, quantity, value, delivery or otherwise, howsoever regarding goods or services, and any such disputes should be resolved by the Customer with the Merchant Establishment directly. Any disputes with the shared network like Visa/Mastercard/Rupay for Transactions will be resolved by the Customer directly with the network."]
                }, {
                    title: "DISCLOSURES",
                    description: ["The Customer acknowledges and consents to sharing of information pertaining to the Customer and the usage of the PPI with any other banks  or  financial  or  statutory  or  regulatory  authorities  only  in  case of  any  financial  misuse/fraud/legal  cases  where  RBI,  any  regulatory authority, Government of India or Court directs Us to disclose such information.", "The Customer acknowledges and agrees that We may report to any other banks or financial or statutory or regulatory authorities, any Customer delinquencies and/or the usage of the PPI only in case of any financial misuse/fraud/legal cases where RBI, any regulatory authority, Government of India or Court directs Us to disclose such information. We shall not be obliged to disclose the details of such banks or financial or statutory or regulatory authorities to the Customer, including the  extent  of  such  disclosure  unless  RBI,  any  regulatory  authority, Government of India or Court expressly permits Us to disclose the name of the said financial entity.", "The Customer hereby authorizes Us and Our agents to exchange, share or part with all the information relating to the Customer\u2019s details and payment history with our group companies or Affiliates only in case of  any  financial  misuse/fraud/legal  cases  where  RBI,  any  regulatory authority, Government of India or Court directs Us to disclose such information", "he Customer hereby authorizes Us to use his information or data (including personal or sensitive personal data or information) in connection with the services associated with the Card including to update its records, provide curated offers and services to the Customer."]
                }, {
                    title: "GOVERNING LAW AND JURISDICTION",
                    description: ["All disputes arising in relation to these Terms and Conditions shall be governed by and construed in accordance with the laws of India and shall be subject to the exclusive jurisdiction of the Courts of Bangalore."]
                }, {
                    title: "AMENDMENT OF THE TERMS AND CONDITIONS",
                    description: [{
                        type: "ul",
                        data: ["We reserve the sole right to change, these Terms and conditions, features and benefits offered on the PPI, including but not limited to Charges.", "We shall communicate the amended Terms and Conditions by hosting them on Our website or in any other manner as decided by Us.", "The Customer shall be responsible for regularly reviewing these Terms and Conditions, including amendments thereto as may be posted on Our website and shall be deemed to have accepted the amended Terms and Conditions by continuing to use the PPI."]
                    }]
                }, {
                    title: "CUSTOMER GRIEVANCE REDRESSAL",
                    description: [{
                        type: "ul",
                        data: ['In the event of any dispute or grievance in relation to the PPI and/or these Terms and Conditions, the Customer may contact the Customer Care Centre on details available on the Company mobile application / or on the physical card. <br/>Customer support email id: customercare@sbmbank.co.in<br />Customer support phone number: 1800 1033 817<br />Customer grievance online request: <a style="text-decoration: underline; color: black;" href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php">Click here</a>', "In the event the dispute or grievance in relation to the PPI and/or these Terms and Conditions is not adequately addressed or resolved by the Customer Care Centre of the Company, the Customer may approach the Nodal  Officer of  the Bank,  details of  which can  be found  on the Bank website.", "We agree that all complaints, disputes or grievance raised by the Customer shall be addressed and/or resolved in a time bound manner.", "The Customer may at any time approach the Banking Ombudsman for the grievance redressal. The list of Banking Ombudsman is available on the website of Reserve Bank of India i.e. www.rbi.org.in ."]
                    }]
                }]
            }
        }
          , x = {
            seoTitle: "Apply for Uni Cards",
            submitMessageGrowth: (0,
            i.jsxs)(i.Fragment, {
                children: ["Thank you for your interest in the Uni Pay 1/3rd Card.", (0,
                i.jsx)("br", {}), " Download the Uni Cards app now and get your Uni Pay 1/3rd Card in minutes."]
            }),
            submitMessage: (0,
            i.jsxs)(i.Fragment, {
                children: ["Thank you for your interest in the Uni Pay 1/3rd Card.", (0,
                i.jsx)("br", {}), " Download the Uni Cards app now and get your Uni Pay 1/3rd Card in minutes."]
            }),
            heading: "The Pay 1/3rd life awaits you.",
            caption: "Excited? We are thrilled. Fill the short form below to get access to the Uni Pay 1/3rd Card.",
            nextStep: "By submitting this information, you agree to be contacted by Uni Cards\n    over Call, SMS, Email or WhatsApp to guide you through your\n    application.",
            apply: "Submit",
            errorMessage: "Oops! Something went wrong while submitting the form.",
            download: "Download to get started",
            playStore: "Google Play",
            appStore: "Apple App Store",
            applyFormFields: [{
                label: "Name",
                placeholder: "Full Name",
                key: "name",
                errors: {
                    specialCharacterError: "Special characters not allowed!",
                    minLength: "Please enter more than 3 characters",
                    maxLength: "Please enter less than 64 characters"
                }
            }, {
                label: "Phone Number",
                placeholder: "XXXXXXXXXX",
                key: "phone",
                errors: {
                    required: "Phone number is required.",
                    invalid: "Please enter a valid phone number."
                }
            }, {
                label: "Email ID",
                placeholder: "email@example.com",
                key: "email",
                errors: {
                    invalid: "Please enter a valid email."
                }
            }, {
                label: "PAN",
                placeholder: "This will not effect you credit score",
                key: "pan",
                errors: {
                    invalid: "Please enter a valid PAN."
                }
            }],
            offlineMarketingFormName: "offline-marketing",
            applyFormName: "apply_form"
        }
          , k = {
            intro: {
                title: "Spend anywhere and everywhere",
                textImg: "/images/pay_in_3_text.svg"
            },
            emergency: {
                title: "for emergency and bills",
                textImg: "/images/pay_in_3_text.svg",
                bgImg: "/images/bills.png"
            },
            groceries: {
                title: "for groceries & essentials",
                textImg: "/images/pay_in_3_text.svg",
                bgImg: "/images/Grocery-bag.K03-1.png"
            },
            fashion: {
                title: "for fashion sale",
                textImg: "/images/pay_in_3_text.svg",
                bgImg: "/images/Shopping-Bag.H11-1.png"
            },
            party: {
                textImg: "/images/throw_a_party_text.svg",
                textImgAlt: "Or even throw a party & just Pay 1/3rd every month",
                bgImg: "/images/Party-Rainbow-Shutter-Shades-Glasses.K15-1.png"
            }
        }
          , v = {
            headerTitle: "Uni User Terms and Condition and Privacy Policy",
            introduction: ["This document is an electronic record in accordance with the Information Technology Act, 2000 and rules, as amended from time to time.", "You acknowledge that You have read and understood these \u201cTerms\u201d.  These Terms will applicable on You for accessing the \u201cPortal\u201d and using \u201cUni Services\u201d and managed and operated by Uniorbit Technologies Private Limited or \u201cUni\u201d (a company registered under the Companies Act 2013 with registered office at Block-X, 303, Siddhartha Apartments, Landmark \u2013 Near Sant Colambo School, Pitampura, North West Delhi, Delhi \u2013 110034). If You do not agree with any of these Terms, including any future modifications to these Terms, You must immediately cease accessing and/or using the Portal and Uni Services.  Uni shall have the right to modify these Terms at any time and publish the same on the Portal.  You must keep yourself up to date and read these Terms at close intervals.", "Your acceptance of these Terms will operate as a binding agreement between You and Uni, in respect of Your use of Uni Services and the Portal."],
            termsAndPolicy: [{
                title: {
                    label: "1. Definition",
                    as: "h3"
                },
                description: ["All of the defined and capitalized terms in these Terms will have the meaning assigned to them here below:"],
                body: {
                    type: "ul",
                    data: ["<b>\u201cAccount\u201d</b> shall mean and refer to the account created by the User on the Portal, for availing Uni Services.", "<b>\u201cApplicable Laws\u201d</b> shall mean and include all applicable statutes, enactments, acts of legislature or the Parliament, laws, ordinances, rules, by-laws, regulations, notifications, guidelines, policies, directions, directives and orders of any governmental authority, tribunal, board, or a court and applicable international treaties and regulations, in force at the relevant time in India.", "<b>\u201cLender\u201d</b> shall mean and include banks, non-banking financial institutions and other credit providers that provide loans to You.", "<b>\u201cLoan\u201d</b> shall mean and refer to the loans and advances offered by Lenders to You as per Your agreement with such Lenders.", "<b>\u201cMerchant\u201d</b> shall mean any merchant/seller on which the User is transaction using Uni Services.", "<b>\u201cMerchant Platform\u201d</b> shall mean the mobile or other application, web-application, weblink or any other platform owned and/or operated by the Merchant for sale of its products/services.", "<b>\u201cPortal\u201d</b> refers to the website or mobile application or any other internet platform managed and operated by Uniorbit Technologies Private Limited (hereinafter referred to as \u201cUni\u201d or \u201cUs\u201d or \u201cWe\u201d).", "<b>\u201cPrivacy Policy\u201d</b> shall mean the privacy policy of Uni applicable to You.", "<b>\u201cTransaction\u201d</b> shall mean every request made by the User for sending or receiving of payments including payments to Merchants or fund transfers etc.", "<b>\u201cUni Services\u201d</b> shall mean the payment facilitation services offered by Uni, including but not limited to (a) facilitation, maintenance and management of various credit facilities, and (b) collecting and settlement of funds to merchants. Uni reserves the right to add, remove or modify any features in the Uni Services as and when it deems fit.", "<b>\u201cUser\u201d</b> shall mean and refer to any individual or legal entity who registers with Uni to receive the Uni Services.", "<b>\u201cWe\u201d</b> or <b>\u201cwe\u201d</b> or <b>\u201cus\u201d</b> means Uni.", "<b>\u201cYou\u201d</b> or <b>\u201cyou\u201d</b> or <b>\u201cyour\u201d</b> means a User."]
                }
            }, {
                title: {
                    label: "2. Eligibility",
                    as: "h3"
                },
                description: ["ln order to use the Portal and Uni Services, you are required to be (i) atleast 18 years of age; (ii) legally competent to contract under the Indian Contract Act 1872 satisfy the below criteria; (iii) citizen of India; (iv) tax resident of India and (v) represent that you have read and understood these Terms and are not legally or otherwise barred from using the Portal or Uni Services."],
                body: null
            }, {
                title: {
                    label: "3. Uni Services",
                    as: "h3"
                },
                description: ["Uni Services are payment solutions offered to you by Uni, which enables you to send (and receive) payments to and from Merchants, other Users or other third parties using the Portal. In order to provide the Uni Services, Uni may partner with third party entities at its sole discretion. The access to Uni Services to You, may also be conditional upon satisfying requirement of any such third parties. Further, You may be required to accept additional terms and conditions and meet additional requirements for using such third-party services. Uni will not be responsible or liable to You for any loss incurred by You as a result of your interaction with a third-party product or service on the Portal.", "Note that Uni bears no responsibility for any sale of any products/ services by Merchant or others and these terms & conditions are independent of any other terms which You sign up for including Merchants and other third parties."],
                body: null
            }, {
                title: {
                    label: "4. Uni Account",
                    as: "h3"
                },
                description: [],
                body: {
                    type: "ul",
                    data: ["You can register as a User by providing necessary information that we may deem fit and may require from time to time. This will be communicated to you on the Portal. You understand and agree that you are responsible for the accuracy of the information you provide for account creation. We shall bear no liability for false, inaccurate or incomplete information provided by you.", "Please note that we reserve the right to terminate or suspend your account at any time, if any information provided by you is false, inaccurate or incomplete or if we discover that you are not eligible to use Uni Services or for any other reason that we deem fit and we are not obliged to provide you the reasons for such termination or suspension. Note that in case of any change or modification in the information provided by you, please inform us immediately.", "You agree that the information provided by you will be used to determine your eligibility to use the Uni Services. Further, the information shared by you may also be shared with third parties for determining your eligibility to use third party services, as and when required.", "You will receive identification and password for your account. Please keep your account details confidential. We shall not be liable for any loss that you may incur as a result of someone else using your password or account or accessing your device, either with or without your knowledge. You will be responsible for all the activity on your account. Your Account is non-transferable and is not capable of being transferred to anyone else. We shall not be liable for any claims, damages, liabilities etc. that may be suffered by you or any third party as a consequence of any unauthorized use of your account, and you shall be solely liable for the same.", "You hereby expressly consent to receive communications from us or from any person authorized by us, on your registered phone number (via phone calls/SMS) and/or e-mail id. You agree that any communication so received by you will not amount to spam, unsolicited communication or a violation of your registration on the national do not call registry.", "You hereby agree and consent to using the Account, Portal and Uni Services in accordance with Applicable Laws and only for its intended purpose.", "You understand that we have the right at all times to disclose your information as necessary to comply with Applicable Laws, or any valid government/other authority\u2019s request.", "We may establish general practices and limits concerning the use of Uni Services. We reserve the right to change, suspend or discontinue any aspect of Portal or Uni Services at any time, without notice and without liability, including reserving the right to impose limits, decline processing of any Transaction.", "We do not warrant that the functions contained in the Portal will be uninterrupted or error free, and we shall not be responsible for any interruptions (including, but not limited to, power outages, system failures or other interruptions that may affect the receipt, processing, acceptance, completion or settlement of Transactions).", "We may, directly or through service providers, monitor your Transactions for high-risk practices or for fraudulent transactions. Uni retains the right to suspend your Account, if Uni believes that there is suspicious or unusual activity on your Account.", "Note that we retain the right to reject a Transaction and/or settlement of payments at our sole discretion without assigning any reason, including but not limited to  reasons of risk management, suspicion of fraudulent, illegal or doubtful Transactions, selling of prohibited items etc.", "Uni may be required to undertake action on the Account as per directions from a statutory or governmental authority or as may be mandated by the Merchant/Lender or others (as applicable)."]
                }
            }, {
                title: {
                    label: "5. Closing Account",
                    as: "h3"
                },
                description: ["You shall continue to be registered with Uni, unless you  request closure or deletion or deactivation of your Account. However, it is clarified that Uni can suspend/ terminate your account at the request of third-party Lenders (where applicable) or at its sole discretion for any reason whatsoever."],
                body: null
            }, {
                title: {
                    label: "6. Loan",
                    as: "h3"
                },
                description: [],
                body: {
                    type: "ul",
                    data: ["You understand that Uni may facilitate Loans to you from Lenders, to enable you to use the Loans for purchase, fund transfers and other permitted activities as per Applicable Law. Uni offers a technology platform i.e. the Portal through which such Loan can be conveniently accessed/ used.", "To avail the Loan, the Lenders may seek your KYC. The Lender has authorised Uni to collect your KYC information on its behalf and you agree to submit the same to Uni for any verification. You are responsible to ensure that your KYC details with the Lenders are current and accurate.", "The Loan may be used through multiple form factors, as enabled for you by Lenders or Uni, including cards or bank transfer etc. If you opt for any of these features, then additional KYC or such other requirement may be placed on you.", "You agree that you shall fully read and understand the terms of use of the Loan or such other documentation entered into between you and the Lender, before availing the Loan. It is to be noted that the Lender shall have the discretion to determine your eligibility to avail the Loan. There shall be no recourse to Uni for such decisions made the Lenders. For this purpose, you authorise Uni to share your information with Lenders.", "We shall maintain necessary records in respect of the Loan availed by You and Transactions made using the Loan and such other information. You agree that such records shall be sufficient proof of the Transactions entered into between you and Merchant/Lenders or others, which you shall not dispute.Uni shall send communications regarding the Loan to you from time to time, on the Portal or otherwise.", "You shall use the Loan only for purposes permitted by the Lender and in accordance with Applicable Laws.", "For any repayment towards the Loan or other applicable charges, you have authorised the Lender, Uni and any of their service providers to collect such amounts from you from time to time and take all steps necessary to collect such payments."]
                }
            }, {
                title: {
                    label: "7. Charges",
                    as: "h3"
                },
                description: ["You agree and acknowledge that in addition to any charges applied on you by third parties, including Lenders, for using their services, Uni may also charge you for Uni Services. The same will be communicated to you on the Portal from time to time. Any charges applied to you by Uni shall be subject to applicable taxes."],
                body: null
            }, {
                title: {
                    label: "8. Privacy and Communications",
                    as: "h3"
                },
                description: ["You agree and specifically consent that we may collect, store, share and use your personal data and any communications made through the Portal, in accordance with Applicable Laws and our Privacy Policy. The Privacy Policy explains how we treat your data and protect your privacy.", "You agree to receive communications from Uni via SMS, email for Transactions, alerts, reminders, marketing, advertising, complaints, service related, feedback etc."],
                body: null
            }, {
                title: {
                    label: "9. Intellectual Property",
                    as: "h3"
                },
                description: ["We do not grant you any rights to the intellectual property rights in the Portal or Uni Services. Nothing contained herein shall authorize you to use, apply, invade or in any manner exploit or infringe the intellectual property rights of Uni without prior written consent."],
                body: null
            }, {
                title: {
                    label: "10. Third Party Services",
                    as: "h3"
                },
                description: ["We do not take responsibility or liability for the actions, products, content and services on the Portal, which are linked to Merchants/Lenders and/or third party web applications, platforms etc. using Our APIs or otherwise. In addition, We may provide links to the third party web-applications, platforms etc. and certain other businesses on the Portal. We assume no responsibility for examining or evaluating the products and services offered by such third parties."],
                body: null
            }, {
                title: {
                    label: "11. Disputes and Grievances",
                    as: "h3"
                },
                hasHtml: !0,
                description: ['We are not obligated to mediate disputes between You and Merchant/ Lenders. We can assist in enabling communications regarding a dispute. In case of any complaint regarding Uni Services, please write an email to <a href="mailto:care@uni.club" style="color:#00dcc8; font-weight: 400;">care@uni.club.</a>'],
                body: null
            }, {
                title: {
                    label: "12. Disclaimer",
                    as: "h3"
                },
                description: ["Except for Our role as provided under these Terms, We are not involved in any underlying Transaction between You, any other User, Merchant, Lender or other third party.", 'Uni Services and the Portal are provided on an "as is" and "as available" basis. We disclaim all warranties of any kind, whether express or implied, including without limitation, any representation or warranty for accuracy, availability, continuity, uninterrupted access, timeliness, sequence, quality, performance, security, merchantability, fitness for any particular purpose, non-infringement or completeness.'],
                body: null
            }, {
                title: {
                    label: "13. Indemnity and Liability",
                    as: "h3"
                },
                hasHtml: !0,
                description: ['You agree to indemnify, defend and hold harmless Uni and its and their directors, officers, employees, and other applicable third parties (collectively "Indemnified Parties") from and against any and all claims, demands, causes of action, debt or liability, including reasonable attorney fees, arising out of, relating to, or which may arise from:', '<ol style="width: 85%; margin-top: 20px; margin-bottom: 20px; margin-left: 40px; list-style-type: lower-alpha;"><li>your use of Uni Services;</li><li>any breach by you of these Terms or Applicable Laws.</li></ol>', "Uni, its directors, officers, employees will not responsible or liable to you or any third party for any indirect, consequential, special, punitive or exemplary damages or losses which may be incurred in connection with the Portal and Uni Services. It is also clarified that Uni shall not be responsible for any failure, delay etc cause due to a force majeure event."],
                body: null
            }, {
                title: {
                    label: "14. Governing Law and Jurisdiction",
                    as: "h3"
                },
                description: ["These Terms shall be governed under the laws of India with the courts at Bangalore, Karnataka having exclusive jurisdiction."],
                body: null
            }, {
                title: {
                    label: "15. Amendment",
                    as: "h3"
                },
                description: ["We have the right, in our sole and absolute discretion, to change, modify, or amend any portion of these Terms at any time."],
                body: null
            }, {
                title: {
                    label: "16.Entire Agreement",
                    as: "h3"
                },
                description: ["These Terms, together with the Privacy Policy, constitutes the entire agreement between the User and Uni with respect to the Uni Services and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the User and Uni with respect to Uni Services."],
                body: null
            }, {
                title: {
                    label: "Privacy Policy",
                    size: "xl"
                },
                description: ["This Privacy Policy is meant to help you understand what information we collect from you, why we collect it, how we use it and what you can do to update, manage, delete your information. You consent to the treatment of your information in the manner provided in this Privacy Policy."],
                body: null
            }, {
                title: {
                    label: "What we collect",
                    size: "xl"
                },
                description: ["This Privacy Policy is meant to help you understand what information we collect from you, why we collect it, how we use it and what you can do to update, manage, delete your information. You consent to the treatment of your information in the manner provided in this Privacy Policy."],
                body: {
                    type: "ul",
                    data: ["Basic information about you such as name, email id and phone number etc required Account opening.", "Transaction level information including details of purchases, Loan used, payment method etc, which are related to the Uni Services.", "Information required by the Lenders, Merchants or other third parties for providing their products/ services to you. This information includes your KYC data, like identity proof or address proof, gender or bank account information.", "Device level data such as IP address or device identification mark are collected while you use the Portal as security requirements.", "Grievance related information on any complaints or queries raised by you to your support or grievance team.", "Other information required from time to time."]
                }
            }, {
                title: {
                    label: "How we use your information",
                    size: "xl"
                },
                description: ["The information provided by you, will be used to provide the Uni Services and other third party services to you on the Portal, including:"],
                body: {
                    type: "ul",
                    data: ["Account openingVerification of identity", "Providing Uni services", "KYC checks", "Credit checks", "Authentication and authorization of Transactions", "Communications", "Collections or recovery of Loan", "Customer support", "Marketing and product research", "Disclosure to third party services providers of Uni", "Disclosure to partner institutions of Uni like Lenders", "Disclosure to government entities or regulators or courts or such other similar bodies", "And such other purpose as required for the Uni Services."]
                }
            }, {
                title: {
                    label: "Correction",
                    size: "xl"
                },
                hasHtml: !0,
                description: ['In you notice any errors in the your information, you may write to us at <a href="mailto:care@uni.club" style="color:#00dcc8; font-weight: 400;">care@uni.club</a> to rectify the error.'],
                body: null
            }, {
                title: {
                    label: "Retention",
                    size: "xl"
                },
                description: ["We may retain your information with us to provide Uni Services. Post termination of your Account, we may retain your information for audit purposes or as required under Applicable Laws."],
                body: null
            }, {
                title: {
                    label: "Data Deletion",
                    size: "xl"
                },
                hasHtml: !0,
                description: ['At any time, you may choose to withdraw consent for your information, and seek deletion/ return of the same from our records. This will be subject to Applicable Laws, and any requirement by Lenders. Please write to us at <a href="mailto:care@uni.club" style="color:#00dcc8; font-weight: 400;">care@uni.club</a>.'],
                body: null
            }, {
                title: {
                    label: "Security",
                    size: "xl"
                },
                description: ["We may retain your information with us to provide Uni Services. Post termination of your Account, we may retain your information for audit purposes or as required under Applicable Laws."],
                body: null
            }, {
                title: {
                    label: "Links to Third Parties Sites",
                    size: "xl"
                },
                description: ["Our application has a links to third-party websites. Your use of these features may result in the collection, processing or sharing of information about you, depending on the feature. We are not aware for the practices of such third parties."],
                body: null
            }, {
                title: {
                    label: "Changes to Privacy Policy",
                    size: "xl"
                },
                description: ["We reserve the right to modify this Policy at any time, at our sole discretion. Please keep yourself updated of the same from time to time."],
                body: null
            }, {
                title: {
                    label: "Grievance",
                    size: "xl"
                },
                hasHtml: !0,
                description: ['Please write to <a href="mailto:care@uni.club" style="color:#00dcc8; font-weight: 400;">care@uni.club</a>. in case of any issues.'],
                body: null
            }]
        }
          , C = t(7875)
          , T = {
            tabs: [{
                key: "dmi",
                label: "Uni \u2013 DMI",
                caption: "Most Important Terms and Conditions"
            }, {
                key: "lendbox",
                label: "Uni \u2013 Lendbox",
                caption: "Most Important Terms and Conditions"
            }, {
                key: "liquiloan",
                label: "Uni \u2013 Liquiloans",
                caption: "Most Important Terms and Conditions"
            }],
            headerTitle: {
                title: "NBFC",
                description: "Terms & conditions about our partnership and association with DMI, Liquiloans, Lendbox and Northern Arc",
                caption: "MOST IMPORTANT TERMS AND CONDITIONS"
            },
            labels: {
                lastUpdated: "Updated on 1st Dec 2022",
                note: {
                    subNote1: "Please write to ",
                    subNote2: "care@uni.club",
                    subNote3: " in case of any issues."
                }
            }
        }
          , I = {
            liquiloan: {
                name: "liquiloan",
                content: "\n\n\n<div>\n<div>\n<a href=\"https://www.liquiloans.com/\">\n<img height=\"50px\" width=\"50px\" src=\"https://cdn.uni.club/assets/images/liquiloans_logo.png\" style=\"display: inline-block; width:150px\">\n</a>\n</div>\n\n<p align=center class=MsoNormal style='margin-top:0in;margin-right:150.65pt;\nmargin-bottom:0in;margin-left:159.75pt;margin-bottom:.0001pt;text-align:center;\nborder:none'><b><span\n        style='color:black'> <u>LOAN AGREEMENT</u></span></b></p>\n\n<p align=center class=MsoNormal style='margin-top:0in;margin-right:150.65pt;\nmargin-bottom:0in;margin-left:159.75pt;margin-bottom:.0001pt;text-align:center;\nborder:none'><b><u><span style='color:black'><span\n        style='text-decoration:none'>&nbsp;</span></span></u></b></p>\n\n<p class=MsoNormal style='margin-right:10.15pt;text-align:justify;border:none'><span\n        style='color:black'>THIS LOAN AGREEMENT (\u201c<b>Loan Agreement</b>\u201d\nor \u201c<b>Agreement</b>\u201d) is made at the place and on the date as stated in the\nSanction Letter, BY and BETWEEN</span></p>\n\n<p class=MsoNormal style='margin-right:10.15pt;text-align:justify;border:none'><span\n        style='color:black'>The Borrower, as described in Schedule 1\nhereunder (referred to as the \u201c<b>Borrower</b>\u201d which expression shall be\ndeemed to mean and include his / her / their respective heirs, administrators,\nexecutors, legal representatives and the term \u2018Borrower\u2019 shall include any\nco-borrowers also)  </span></p>\n<p style=\"text-align: center;\">AND</p>\n\n<p>NDX P2P Private Limited and lenders on its platform (hereinafter referred to as &ldquo;<strong>LiquiLoans</strong>&rdquo;) and Trillionloans Fintech Private Limited (hereinafter referred to as &ldquo;<strong>Trillionloans</strong>&rdquo;), through a co-lending arrangement have agreed to grant the Loan (defined below) to the Borrower (collectively referred to as the &ldquo;<strong>Lender</strong>&rdquo;) as described in the Sanction Letter. The Lender and the Borrower hereinafter be referred to individually as &lsquo;<strong>Party&rsquo;</strong> or collectively as &lsquo;<strong>Parties&rsquo;</strong>.</p>\n\n\n<p class=MsoNormal style='margin-right:10.15pt;text-align:justify;border:none'><span\n        style='color:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-right:10.15pt;text-align:justify;border:none'><span\n        style='color:black'>This document is an electronic record in\nterms of Information Technology Act, 2000 and rules thereunder as applicable to\nelectronic records in various statutes as amended by the Information Technology\nAct, 2000. This electronic record is generated by a computer system and does\nnot require any physical or digital signatures.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='border:none'><b><span style='\ncolor:black'>WHEREAS</span></b></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.65pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>A.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>LiquiLoans is a non-banking financial company engaged in the business of providing peer to peer lending platform for enabling of loan facilitation via online medium or otherwise, to a wide range of participants. Trilionloans is a non-banking financial company engaged in the business of providing loan to a wide range of participants. Both LiquiLoans and Trillionloans have agreed to a co-lending arrangement, through which they shall  provide the Loan to the Borrowers jointly acting as the Lender.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.65pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>B.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower intends\nto avail Loan as per the terms of this Loan Agreement. The key aspects of the\nLoan are provided in the \u201c<b>Sanction Letter</b>\u201d (as provided in Schedule 1\nand amended from time to time) and Most Important Terms and Conditions or \u201c<b>MITC</b>\u201d\n(as provided in Schedule 2 and amended from time to time). </span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.65pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>C.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower has submitted an application form (which forms the basis of this Agreement) for the Loan. This application form has been completed, electronically agreed by the Borrower(s) and shared with the Lender.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.65pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>D.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Lender has conducted the requisite due diligence of the participants, credit assessment and risk profiling of the Borrower. The Lender being satisfied with the information, has agreed to grant the Loan, on the terms and conditions as contained in this Agreement hereof.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.65pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>E.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style='color:black'><strong>Service Providers: </strong>The Lender has authorized various third parties to provide services with regard to onboarding, management and collections from the Borrower and act as a customer touch points besides Lender&rsquo;s own personnel. These third parties also include Uniorbit Technologies Private Limited (&ldquo;<strong>Uni</strong>&rdquo;) and its agents.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.65pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>F.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Loan will be\nfacilitated via the online account opened for the Borrower on the mobile\napplication or website operated by Uniorbit Technologies Private Limited (\u201c<b>Uni</b>\u201d),\nhereafter called the \u201c<b>Service Platform</b>\u201d. The Loan may be availed by the\nBorrower through the Service Platform. </span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='border:none'><b><span style='\ncolor:black'>NOW, THEREFORE, THE PARTIES HEREBY AGREE AS UNDER</span></b><span\n        style='color:black'>:</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>1.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>ELIGIBILITY</span></p>\n\n<p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>1.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Only individuals\nhaving attained the age of at least 18 years are citizens and residents of\nIndia, may be eligible for the Loan. </span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>1.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Lender will analyze\nthe application form (any other information submitted by the Borrower) and\nperform KYC and credit checks, before onboarding a Borrower. </span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>1.3<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower is\nresponsible to ensure that all information provided is, at all times, true,\naccurate, correct, latest and complete. The Borrower hereby acknowledges and\nagrees that the Lender shall immediately be notified, in case of any change in any\ndetails submitted by the Borrower in the application form. </span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>1.4<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>For the purposes of ascertaining eligibility to avail the Loan, Lender shall have the right to (either directly or through its agents or Service Providers), evaluate and examine: (i) the information and documents provided in the application form; and (ii) transfer this information to affiliates, agents that are engaged by Lender/ Service Providers in this regard. </span></p>\n\n<p class=Default><span lang=EN-IN style='color:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>2.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>SANCTION </span></p>\n\n<p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>2.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Subject to the\nsatisfaction of the Lender of the information provided by Borrower in the\napplication form and credit assessment of the Borrower, the Lender shall make\navailable to the Borrower, a loan in the form of a unsecured line of credit (\u201c<b>Loan</b>\u201d).\n</span></p>\n\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>2.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The amount of Loan\navailable for use to the Borrower is provided in the Sanction Letter issued to\nthe Borrower. Please note that the Lender reserve the right to modify the Loan\namount at any time for any reason, including credit assessment, timely\nrepayment etc. </span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>2.3<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Loan shall be\nvalid for a period of 36 months from the date of issue of this Loan Agreement and\nthe Sanction Letter, subject to cancellations and renewals. </span></p>\n\n<p class=MsoNormal style='margin-right:12.4pt;text-align:justify;border:none'><span\n        style='color:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>3.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>LOAN TERMS</span></p>\n\n<p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>3.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The features of the\nLoan and the applicable charges shall be as per the Sanction Letter in Schedule\n1 and MITC provided in Schedule 2. These may be updated from time to time, at\nthe discretion of the Lender as intimated via the Service Platform. </span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\nborder:none'><span style='color:black'>&nbsp;</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>3.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>For the avoidance of\ndoubt, Loan is being provided to the Borrower by enabling the use of a third-party\ntechnology platform i.e. Service Platform. The Borrower understands that the\ndisbursement of the Loan shall be made directly to the beneficiary i.e.\nmerchant or such other as requested by Borrower via Service Platform. \xa0</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>3.3<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The disbursement of\nthe Loan shall be made through normal banking channels, on a real time basis\nfor every request made by the Borrower. The Lender shall not, in\nany event or circumstance whatsoever, be liable or be construed as being liable\nin case there is any delay(s) in disbursement / non disbursement of the Loan on\naccount of any technical or system errors or for any other reason.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>3.4<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Repayment of the Loan,\nwith interest or other charges shall be in the manner set out in MITC and\nSanction Letter. The repayment of Loan shall commence and continue irrespective\nof the non/delayed delivery of any purchase from any merchant/ dealer/ seller/\nmanufacturer. Any dispute or difference whatsoever, relating to non-functioning\nof product for any reason or any other product related queries, shall not\nentitle the Borrower to withhold or delay payment of Loan and such non-payment\nor delay shall be construed as an event of default under this Agreement, unless\nprovided otherwise in the MITC/ Sanction Letter.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>3.5<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Borrower acknowledges\nand agrees that Lender shall have the right to collect the payments\ndue, either directly or through agents or third-party Service Providers. </span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>3.6<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Lender or Service\nPlatform is not responsible if any merchant/ seller/ dealer/ seller does not accept\nthe Loan as valid payment. The Borrower acknowledges and agrees that Lender may cancel/ suspend/ terminate the Loan (in whole or part) at any\ntime, with or without prior notice to the Borrower. </span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>3.7<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Lender\nretain the right to offer the Loan to the Borrower for such period as it deems\nappropriate and retain the right to withdraw the offer of the Loan at any point\nin time, without assigning any reason. </span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>3.8<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Information on the\nLoan and other day to day communications shall be made on the Service Platform.\n</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>4.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>COVENANTS, TERMS AND\nCONDITIONS</span></p>\n\n<p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower is liable\nto repay the Loan as per the MITC, notwithstanding any failure by the Lender to\nmake any repayment demand for the said Loan.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower shall be\nliable to pay / bear all taxes including any good and services tax (\u201c<b>GST</b>\u201d)\nthat may be applicable from time to time, in respect of / in relation to the\ntransaction contemplated herein.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.3<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower shall be\nexclusively responsible for getting the delivery of the product(s) from the\nmanufacturer/dealer/seller, as the case may be, and the Lender/ Service\nPlatform shall not be liable or responsible for delay in delivery or\nnon-delivery of the product(s), delay in disbursement of the Loan, any\ndemurrage cost or the quality condition or fitness of the product(s).</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.4<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower shall at\nall times adhere to the terms and conditions set out in this Agreement and any\namendments hereto.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.5<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Lender shall have the right to appropriate the amounts paid by the Borrower\nin such manner, as the Lender may, in its sole discretion deem fit and\nappropriate.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.6<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Lender shall at any time, at its absolute discretion have the right to combine\nor consolidate or divide any of the accounts of the Borrower and/or set-off or\ntransfer or appropriate any sum(s) standing to the credit of any of such\naccounts in or towards part or full satisfaction of the liabilities of the\nBorrower on any other account or in any respect.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.7<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Nothing contained\nherein shall prejudice or adversely affect any general or special lien or right\nto set-off to which the Lender is or may by law or otherwise be entitled, or\nany rights or remedies of the Lender.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.8<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>It is hereby accepted\nby the Parties that the amounts stated by the Lender as due from the Borrower, shall be final and\nconclusive proof of the correctness of any sum claimed by the Lender to be due\nfrom the Borrower in respect of this Agreement. The primary mode of such communication\nof dues of the Borrower shall be the Service Platform, or in absence of which a\nstatement of account made out from the books of the Lender, without production\nof any voucher, documents or other papers whether in support thereof or\notherwise and the same shall be final and binding on the Borrower. The Parties\nhereby agree that the same shall not be disputed by the Borrower, other than\nfor any manifest errors therein.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.9<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The right of the\nLender to recover the dues from the Borrower shall be exercised by the\nLender or by their authorized representatives, or any\ncollection agency appointed for the purpose, and the Borrower hereby agrees to\nsuch collection mechanism and collection authority.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.10<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower shall\nduring business hours permit the Lender or their authorized\nrepresentatives to inspect the place of business / residence of the Borrower\nand also agrees to produce any documents / additional documents as may be\nrequired by the Lender from time to time. Further, the Borrower\nhereby agrees to permit the Lender and their authorized\nrepresentatives to contact / meet the Borrower at their place of residence and\n/ or employment and / or any other place for collection of dues under this\nAgreement.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.11<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower agrees to\npay all the applicable charges as per the Agreement hereto together with all\ntaxes as may be applicable from time to time.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.12<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Interest and all other\ncharges shall accrue from day to day and shall be computed on the basis of the\nactual number of days elapsed / actual number of days in a year.</span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:12.5pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>4.13<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The rights and\nbenefits available to the Lender in terms of this Agreement, whether against\nthe Borrower or otherwise, shall equally be available to\ntheir agents / assigns.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>5.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>SECURITY</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>The Loan is unsecured and no security has\nbeen provided by the Borrower to the Lender to secure his repayment / payment\nobligations in terms of this Agreement.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>6.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>EVENTS OF DEFAULT AND\nCONSEQUENCES:</span></p>\n\n<p class=MsoListParagraph style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>6.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The following shall\namount to an event of default under this Agreement (each an \u201c<b>Event of\nDefault</b>\u201d):</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>i.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Non-compliance /\nbreach by the Borrower of any of the terms and conditions of this Agreement or\nany other document entered into in respect of this Loan or any other financial\nassistance availed of by the Borrower from the Lender;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>ii.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Incapacity of the\nBorrower to enter into a contract in terms of the Contract Act, 1872;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>iii.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>Non-adherence to the Repayment Schedule or\nany default in making any payments under this Agreement;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>iv.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>Any filing for insolvency, bankruptcy,\nwinding up, dissolution of the Borrower or inability of the Borrower to repay\nhis debts;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>v.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Concealment of any\nmaterial document, information or event by the Borrower.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>vi.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>Submission of any forged document or any\nmisrepresentation by the Borrower;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>vii.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>Non-compliance/breach by the Borrower of\nany law including but not limited to the clauses of Non-Banking Financial\nCompany - Peer to Peer Lending Platform (Reserve Bank) Directions, 2017;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>viii.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>Occurrence of force majeure;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>ix.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>Failure to furnish any\ninformation/documents as required by Lenders;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.55pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>x.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>In the event a\nBorrower makes any compromise or settlement with the Lender for repayment to\nsuch Lender; Any other event which in the sole opinion of the Lender\nwould endanger the repayment of the Loan.</span></p>\n\n<p class=MsoListParagraph style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>6.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>If there is an Event\nof Default, the following consequences may be applicable to the Borrower, at\nthe discretion of the Lender, notwithstanding any and all remedies\nthat the Lender may have in law:</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.5pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>i.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Lender shall have the right to recall and accelerate the entire Loan\ntogether with interest for the entire period, penalties arising on account of\ndefault and other charges, as mentioned in Schedule 1 and 2 hereunder and the\nsame shall accordingly become immediately due and payable.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.5pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>ii.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Lender shall be entitled to proceed against and take any\naction against the Borrower in order to realize the amounts due and payable by\nthe Borrower, whether with or without intervention of any court of law/\ntribunals.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.5pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>iii.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>The Lender shall be entitled to initiate criminal proceeding or any other </span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.5pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>&nbsp;&nbsp;&nbsp;&nbsp;<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>\nappropriate actions against the Borrower if at any time the Lender at its sole discretion\nhave sufficient grounds to believe that\nthe Borrower has made any misrepresentations and / or submitted any forged\ndocuments or fabricated data.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.5pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>iv.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>All rights and powers conferred on the\nLender under this Agreement shall be in addition and supplemental to any rights\nthe Lender have as a creditor against the Borrower under any law for the time\nbeing in force and shall not be in derogation thereof.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>7.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>REPRESENTATIONS OF THE\nBORROWER AND OTHER UNDERTAKINGS/ COVENANTS:</span></p>\n\n<p class=MsoListParagraph style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>7.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower\nrepresents and warrants that:</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.7pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>i.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>the execution,\ndelivery and performance of this Agreement are within his powers and capacity,\ndo not contravene any contract binding on or affecting his or any of his\nproperties, do not violate any applicable law or regulation;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.7pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>ii.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>this Agreement is\nvalid and binding upon the Borrower;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.7pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>iii.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>there is no pending or threatened action\nwhich may materially adversely affect the validity or enforceability of this\nAgreement and/or the obligations of the Borrower to repay the Loan;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.7pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>iv.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>all information provided by the Borrower\nunder or with respect to this Agreement is correct and true and is not\nmisleading in any respect;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.7pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>v.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>the Borrower hereby\nconfirms that the funds availed under this Agreement will be utilized only for\nthe Purpose as stated in Schedule 2 and the Borrower shall not utilize the Loan\nproceeds for any other or any illegal purpose.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.7pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>vi.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>the execution and performance of this\nAgreement by the Borrower constitutes, and the exercise by the Borrower of his\nrights and performance of his obligations hereunder shall constitute private\nand commercial acts done and performed for private and commercial purposes.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.7pt;margin-bottom:\n0in;margin-left:49.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>vii.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>the Borrower understands and agrees to limit his obligations to a maximum of INR 10 lakhs across all peer to peer lending platforms within India</span></p>\n\n<p class=MsoListParagraphCxSpFirst style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>7.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower hereby\naccepts and confirms that it has no objection to the Lender administering the\nLoan through third Parties. The Borrower confirms that the\nLender may, either partly or in full delegate such of those activities to any\nthird party (including Service Platform) as it may deem fit in\nthe circumstances. Such delegation of work, would, <i>inter alia</i> include\nthe right and authority to collect any outstanding amount on behalf of the\nLender and to perform and execute all lawful acts, deeds and matters and things\nconnected therewith and incidental thereto including sending notices to the\nBorrower, receiving cash against issue of the receipt, cheques and drafts.\xa0 For\nthe purpose aforesaid as also for any other purposes, at the sole discretion of\nthe Lender, the Lender/ Service Platform shall be\nentitled to disclose to the third party the details of the Borrower, the Loan,\nthe outstanding amount and any other information for effectively discharging\nthe work assigned to the third party and the Borrower hereby consents to such\ndisclosure by the Lender/ Service Platform. Notwithstanding any\nsuch delegation by the Lender/ Service Platform, the\nLender shall not be responsible and / or liable for any unlawful/\nnegligent acts, deeds, matters and things done by such third parties.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>7.3<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower shall\nbear all costs and other expenses incurred in relation to the Loan and in\ncomplying with the terms and conditions in respect thereof, including any and\nall costs incurred in connection with this Agreement.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>7.4<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower hereby\nconfirms his liability and shall reimburse / pay any tax that the Lender may have to pay to the government or any authority whether judicial/\nquasi-judicial, or administrative authority, in respect of / in relation to the\nLoan.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>7.5<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower hereby authorizes\nthe Lender, at the cost and risk of the Borrower, to engage one or\nmore person(s) / agencies to verify any fact or information furnished by,\nconcerning and pertaining to the Borrower and collect the outstanding amount\nand may furnish to such person/s such documents, information, facts and figures\nas it may deem fit.</span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>7.6<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Any claim, losses,\ndemands, actions, costs, expenses and liabilities incurred or suffered by the\nLender by reason of non-payment or insufficient payment of stamp\nduty on this Agreement and any documents and other writings which may be\nexecuted by the Borrower pursuant to or in relation to the Loan, will be borne and\npayable by the Borrower.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>8.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>INDEMNIFICATION</span></p>\n\n<p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>8.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower shall\nindemnify and hold the Lender, Service Platform and their\ndirectors, officers, employees, agents and advisers harmless against losses,\nclaims, demands, liabilities, or damages which are sustained as a result of any\nact, deed, conduct, error, or omission of the Borrower, its agents, or\nassignees, or for improper performance or non-performance relating to the Loan,\nthis Agreement or any other document executed in pursuance to this Agreement.</span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>8.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower hereby\nagrees to indemnify the Lender, Service Platform and their\nofficers, representatives</span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:12.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>&nbsp;&nbsp;&nbsp;<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>\nand agents against any loss or expenses sustained or\nincurred by them as a result of:</span></p>\n\n<p class=MsoNormal style='margin-left:49.65pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>(i)<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>the Borrower failing\nto take necessary action to protect the Lender\u2019s/ Service Platform\u2019s\ninterests.</span></p>\n\n<p class=MsoNormal style='margin-left:49.65pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>(ii)<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>default on the part of the Borrower in\ncomplying with the provisions of any Loan document/s;</span></p>\n\n<p class=MsoNormal style='margin-left:49.65pt;text-align:justify;text-indent:\n-21.3pt;border:none'><span style='color:black'>(iii)<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp; </span></span><span\n        style='color:black'>the occurrence of any Event of Default;</span></p>\n\n\n<p class=MsoListParagraph style='margin-top:0.2in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>8.3<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower will not\nseek to claim or recover from the Lender and/ or Service\nPlatform, on any grounds whatsoever and/or in any circumstances whatsoever\n(whether now or hereafter existing), any purported damages or compensation,\ndirect, indirect or consequential, for any acts or actions whatsoever of the\nLender and / or Service Platform hereunder and/or in\nrespect of the Loan, taken or omitted by the Lender and /\nor Service Platform in terms hereof and/or pursuant hereto and/or to protect\nany of its interests and rights as the Lender or a creditor or a Service Provider,\nand the Borrower hereby expressly waives any right to seek or make any such\nclaim or recovery on any grounds whatsoever.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>9.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>TERM AND TERMINATION</span></p>\n\n<p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:12.6pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>9.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>This Agreement shall\nbecome effective upon the date of signing of this Agreement as provided in\nSchedule I of this Agreement and shall stand terminated on the date the\nBorrower has repaid the Loan in full along with interest, default interest,\nbank charges and any other costs, charges and expenses as mentioned herein, and\nfulfilled all other obligations under the Agreement to the satisfaction of the\nLender.</span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:12.6pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>9.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower does not have the right to terminate this Agreement in any situation except with the written consent of the Lender by repaying the entire amounts due under this Agreement.\n</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>10.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>GOVERNING LAW AND\nJURISDICTION</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>This Agreement shall be governed and\nconstrued in accordance with the laws of India and the Parties hereto submit to\nthe exclusive jurisdiction of the courts situates at Mumbai. </span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>11.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>WAIVER</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>The Lender\u2019s failure to\nexercise or delay in exercising any right, power, privilege or remedy under the\nAgreement will not operate as a waiver or acquiescence, nor will any single or\npartial exercise of any right, power, privilege or remedy prevent any further\nor exercise of any other right, power, privilege or remedy.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>12.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>SEVERABILITY</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>If any provision in this Agreement shall\nbe found or be held to be invalid or unenforceable, then the meaning of said\nprovision shall be construed, to the extent feasible, so as to render the\nprovision enforceable, and, if no feasible interpretation would save such\nprovision, it shall be severed from the remainder of this Agreement and in such\nan event, the Parties shall use best efforts to negotiate, in good faith, a\nsubstitute, valid and enforceable provision or agreement, which most nearly\nreflects the Parties\u2019 intent in entering into this Agreement.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>13.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>DISCLOSURE OF\nINFORMATION</span></p>\n\n<p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:5.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>13.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower accepts,\nconfirms and consents for the disclosure and sharing by the Lender\nof all or any information and data relating to the Borrower, the facilities,\nany other transactions that the Borrower has with the Lender, the Borrower\u2019s account,\nand the agreements and documents related to the Loans and transactions,\nincluding but not limited to information relating to default, if any, committed\nby the Borrower, in the discharge of the Borrower\u2019s obligations in relation to\nthe Loan or other transactions, as the Lender may deem appropriate and\nnecessary to disclose and furnish, to the Reserve Bank of India (\u201c<b>RBI</b>\u201d)\nand/or credit information companies and/or to any other agency or body, to\nother lenders including assignees and potential assignees, to its professional\nadvisers, consultants and Service Providers engaged by it in relation to the\nLoan, to the acquaintances of the Borrower and/or as required under law or any\napplicable regulation, or at the order or at the request of a court of law, any\nstatutory, regulatory or supervisory authority.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:5.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>13.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower\nundertakes and covenants that it shall provide all information, including\ninformation regarding other credit facilities enjoyed by the Borrower, as and\nwhen required by the Lender. The Borrower declares that the\ninformation furnished to the Lender from time to time is and shall be true and\ncorrect.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:5.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>13.3<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower hereby\nfurther agrees that in case the Borrower fails to pay the dues herein or\ncommits default in the repayment of the Loan instalment(s) or interest thereon\non due date(s), or the account of the Borrower becomes non-performing assets as\nper the RBI\u2019s norms, the Lender will be at liberty to disclose or publish in\nprint and / or electronic </span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:5.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'>\n<span style='color:black'>&nbsp;&nbsp;&nbsp;&nbsp;<span\n    style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span>\n    <span style='color:black'>\nmedia the photograph(s), name(s) and address(es) of\nthe Borrower as willful defaulter along with the details of \n\noutstanding dues\npayable.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:5.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>13.4<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower accepts\nthat the RBI or the credit information companies and / or any other agency so\nauthorized, or any statutory, regulatory or supervisory authority or other\nlenders / potential lenders, may use, process and disseminate the said\n\ninformation and data disclosed by the Lender in such manner as deemed fit by\nthem and the Borrower shall not hold the Lender responsible or liable in this\nregard.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0.2in;margin-right:5.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>13.5<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Lender may disclose to the Borrower all such information relating to the\nLoan, as may be reasonably requested by it, in accordance with the applicable\nlaws.</span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:5.4pt;\nmargin-bottom:0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>13.6<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower\nauthorizes the Lender to disclose, from time to time any information relating\nto the Loans to any parent / subsidiary / affiliates / associate entity of the\nLender, and to third parties engaged by the Lender,\nfor the purpose of marketing of services and products.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>14.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>NOTICES</span></p>\n\n<p class=MsoListParagraphCxSpFirst style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>14.1<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>Every notice, request,\ndemand or other communication under this Agreement shall:</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:5.65pt;\nmargin-bottom:0in;margin-left:56.7pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>(a)<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>be in writing,\ndelivered by hand, or by registered post / speed post, acknowledgement due, or\nby courier or any other mode as decided by the Lender;</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:5.65pt;\nmargin-bottom:0in;margin-left:56.7pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>(b)<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>be deemed to have been\nreceived by the Borrower when delivered by hand, at the time so delivered, and\nif given by registered post acknowledgement due, 72 hours after it has been put\ninto post; and</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:5.65pt;\nmargin-bottom:0in;margin-left:56.7pt;margin-bottom:.0001pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>(c)<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>be sent to the\nBorrower to the address mentioned in Schedule 1 hereto or to such other address\nas either Party may in writing hereafter notify to the other Party.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>14.2<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Lender/ Service Platform may (but not be obliged to) call the Borrower to\npay any dues that is outstanding. The Borrower hereby specifically authorizes\nthe Lender/ Service Platform to make such calls or send SMS or\nemails, and further acknowledges that the same shall not be considered as unsolicited\ncalls / SMS / emails.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>14.3<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower hereby\nagrees to pay charges as mentioned in Schedule 2 here to for each of the\nnotices being sent to him / them.</span></p>\n\n<p class=MsoListParagraphCxSpMiddle style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>14.4<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower has read\nthe entire Agreement, including the Loan details and the terms of repayment, the\nfees, costs, charges and expenses payable as clearly enumerated in the Schedule\nto this Agreement or as communicated separately to the Borrower. The Borrower\nfurther confirms that the entire Agreement is filled in their presence and that\nthe contents provided herein is explained in the language understood by the\nBorrower. The Borrower further confirms having executed the Agreement and\nagrees to remit the dues in terms of the Schedule 2 hereunder.</span></p>\n\n<p class=MsoListParagraphCxSpLast style='margin-left:28.35pt;text-align:justify;\ntext-indent:-28.35pt;border:none'><span style='color:black'>14.5<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Borrower can\nconnect to the customer grievance officer of the Lender at </span><a\n        href=\"mailto:grievance@liquilaons.com\"><span style='\ncolor:black'>grievance@liquilaons.com</span></a><span style='\ncolor:black'> in case of any questions regarding the Loan or this Agreement.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>15.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>RELATIONSHIP</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>Each Party hereto is an independent party\nand nothing contained herein shall be construed to be inconsistent with this\nrelationship or status. Nothing in this Agreement shall be in any way construed\nto constitute either Party as the agent, employee or representative of the\nother or constitute a partnership between the Parties and no Party shall have\nany authority to bind the other Party otherwise than under this Agreement.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>16.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>AUTHORIZATION</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>The persons signing this Agreement on\nbehalf of the Parties represent and covenant that they have the requisite\nauthority to so sign and execute this Agreement on behalf of the Parties for\nwhom they are signing.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>17.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>HEADINGS</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>The headings of various articles and\nclauses herein are inserted for convenience of reference and are not deemed to\naffect the construction thereof.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>18.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>SPECIFIC PERFORMANCE</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>The Parties agree that damages may not be\nan adequate remedy and the Parties shall be entitled to seek an injunction,\nrestraining order, right for recovery, suit for specific performance or such\nother equitable relief as a court of competent jurisdiction may deem necessary\nor appropriate to restrain the other Parties from committing any violation or\nenforce the performance of the covenants and obligations contained in this\nAgreement.\xa0 These injunctive remedies are cumulative and are in addition to any\nother rights and remedies the Parties may have at law or in equity.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>19.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>VARIATION </span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>No variation of this Agreement shall be\nvalid unless it is in writing (which, for this purpose, also includes through\nemail) and signed by or on behalf of each of the Parties. The expression\n\u2018variation\u2019 includes any variation, amendments, \n\nsupplement, deletion or\nreplacement however effected. In case of any variation through email, the\nvariation shall be deemed to have been accepted by the Borrower if so\ncommunicated by the email-id provided by the Borrower for availing the Loan.</span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>20.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>ENTIRE AGREEMENT</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>This Agreement, together with the\ndocuments executed / exchanged by the Parties in relation to the Loan including\nthe application form, supersede all prior discussions and agreements (whether\noral or written, including all correspondence) between the Parties with respect\nto, or in relation to the Loan, and this Agreement, along with the Schedules\nhereto, together with the documents executed / exchanged by the Parties in\nrelation to the Loan including the application form, contains the sole and\nentire agreement between the Parties with respect to the Loan.<a name=\"_gjdgxs\"></a></span></p>\n\n<p class=MsoNormal style='border:none'><span style='\ncolor:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>21.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>A copy of this\nAgreement has been provided to the Borrower at the time of the making of the\napplication for the Loan and by filling and signing the application form, the\nBorrower is deemed to have agreed to the terms and conditions of this Loan\nAgreement and to be bound by the terms and conditions hereof.</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;border:none'><span\n        style='color:black'>&nbsp;</span></p>\n\n<p class=MsoNormal style='margin-top:0in;margin-right:12.4pt;margin-bottom:\n0in;margin-left:28.35pt;margin-bottom:.0001pt;text-align:justify;text-indent:\n-28.35pt;border:none'><span style='color:black'>22.<span\n        style='font:7.0pt \"Times New Roman\"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n</span></span><span style='color:black'>The Schedules and\nrecitals to this Agreement shall form an integral part of this Agreement. </span></p>\n\n</div>\n<p style='border:none'><span style='font-size:10.0pt;\ncolor:black'>&nbsp;</span></p>\n<p style='border:none'><span style='font-size:10.0pt;\ncolor:black'>&nbsp;</span></p>\n\n    <p align=center style='margin-right:8.15pt;text-align:center;\nborder:none'><u><span style='font-size:10.0pt;color:black'>SCHEDULE</span></u><span\n            style='font-size:10.0pt;color:black'> <u>2</u></span></p>\n\n            <p style='text-align: center;'><strong>Most Important Terms of the Loan (MITC)</strong></p>\n            <p style='text-align: center;'><strong>Section 1: General Product Construct</strong></p>\n            \n            <div>\n            <table\n                style='border-color: black;'\n                border='1'\n                cellspacing='0'\n                cellpadding='5'\n              >\n                <tbody>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><strong>Sl No.</strong></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><strong>Description&nbsp;</strong></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><strong>Particulars</strong></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.1&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Loan Type & End Purpose\n                      </span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>The Loan is in the form of a Line\n                          of Credit. It shall be referred to as &ldquo;</span><strong>Credit\n                          Line</strong><span style='font-weight: 400;'>&rdquo; throughout\n                          this MITC. It shall be accessible through the &ldquo;</span><strong\n                        >Service Platform</strong><span style='font-weight: 400;'>&rdquo;,\n                          namely the website, mobile application or such other platform as\n                          made available to the Borrower from time to time.</span></p>\n                          <p>The Borrower may use this Credit Line for personal purposes.</p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.2</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Sanction Date</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Sanction Date is the date from\n                          which the Borrower can start availing the Loan and the same is\n                          mentioned in the Sanction Letter issued to the Borrower.&nbsp;</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.3&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Facility Sanctioned</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Under this Loan Agreement,\n                          Lender(s) will provide a term loan in the form of a Credit Line,\n                          upto a maximum sum of INR ______ per Borrower. The maximum\n                          amount eligible (referred as Eligible Credit Line hereafter) as\n                          Loan for each Borrower will be communicated in the Sanction\n                          Letter.&nbsp;&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'>The Loan is determined on the basis\n                          of multitude of factors such as your credit assessment, loan\n                          application, timely repayment, etc. by the Lender.&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'></span>Accordingly, Lender reserves the right to increase with the consent the Borrower or decrease or suspend or cancel or modify the Loan /Eligible Credit Line from time to time, depending on these factors or without assigning any reason. The change in Loan will be communicated to the Borrower electronically at the time of change or in a revised Sanction Letter as the case may be. \n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.4&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>The Validity of the Facility</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Loan is valid for ___ months\n                          from the Sanction Date.&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'>At the expiry or earlier\n                          termination of the Loan facility, Lender may, at the request of\n                          the Borrower, renew the Loan subject to any applicable due\n                          diligence and for further periods at its sole discretion.\n                          Documents (if any) required for renewal of the facility to be\n                          submitted to Lender</span><strong>, </strong><span\n                          style='font-weight: 400;'\n                        >at least 30 days before expiry.&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'>The Outstanding Balance </span><em\n                        ><span style='font-weight: 400;'>(refer 1.9)</span></em><span\n                          style='font-weight: 400;'\n                        >, if any, at the time of expiry of the Loan will need to be repaid\n                          in full.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.5&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>KYC</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>The Borrower shall share his/her\n                          Proof of identity and Proof of address with Lender and the Lender\n                          shall validate the same before sanctioning the Loan/line. Lender\n                          may also seek KYC of the Borrower at any point of time for ongoing\n                          due diligence or regulatory purposes.&nbsp;</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.6</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Transaction&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><strong>Transaction </strong><span style='font-weight: 400;'>refers\n                          to every request or order placed by the Borrower for utilizing the\n                          Loan facility. This is also referred as &ldquo;Drawdown&rdquo; in\n                          this MITC.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.7</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Drawdowns</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>There will be 2 types of\n                        </span><strong>Drawdowns</strong><span\n                          style='font-weight: 400;'\n                        >.&nbsp;&nbsp;</span></p>\n                        <ol style=\"list-style: lower-roman;\">\n                          <li> Pay Later</li>\n                          <li>EMI</li>\n                        </ol>\n                      \n                      <p><span style='font-weight: 400;'>Please refer to Section 2 for more\n                          details on Pay Later Drawdowns.&nbsp;</span></p>\n                      <p><span style='font-weight: 400;'>Please note that the default\n                          Drawdown shall be Pay Later. Thereafter, Borrower may convert\n                          these to EMI. The Borrower may be given the option to directly\n                          choose EMI Drawdown. Note that the option and eligibility to\n                          convert will be communicated electronically to the Borrower from\n                          time to time.&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'>Please note that the Lender\n                          reserves the right to decline a Drawdown at any time without\n                          assigning any reason whatsoever.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.8&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Outstanding Balance</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><strong>Outstanding Balance </strong><span\n                          style='font-weight: 400;'\n                        >is the sum of all remaining unpaid Drawdowns at any point of time\n                          along with unpaid Fees, Interest or other charges.</span></p>\n                      \n                      <p><strong>Refund</strong><span style='font-weight: 400;'>(s) for each\n                          Drawdown would be adjusted against the Outstanding Balance. At the\n                          time of processing refunds, the Borrower will be made aware of the\n                          manner of such handling.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.9&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Statement Date &amp; Statement\n                          Period&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>A statement will be generated on a\n                          fixed date every month (&ldquo;Statement</span><strong>\n                          Date</strong><span style='font-weight: 400;'>&rdquo;). The time\n                          duration between one Statement Date to the next is referred to as\n                          the &ldquo;</span><strong>Statement Period</strong><span\n                          style='font-weight: 400;'\n                        >&rdquo; (refer illustration below).&nbsp;&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'>The Statement Date may vary for\n                          each Borrower depending on the Sanction Date and the same will be\n                          communicated to Borrower on the Service Platform.&nbsp;</span></p>\n                      <p><span\n                          style='font-weight: 400;'\n                        >Illustration:&nbsp;&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'>If the Borrower&rsquo;s Statement\n                          Date is the 26th of every month, then the Statement Period for the\n                          user will be from 26th January to 25th February 26th February to\n                          25th March, and so on.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.10</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Statement Amount&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>The Statement</span>\n                        <span style='font-weight: 400;'>Amount shall mean the total Drawdown\n                          amount(s) in a particular Statement Period.</span></p>\n                      \n                      <p><span style='font-weight: 400;'>Illustration:</span></p>\n                      <p><span style='font-weight: 400;'>If you spent INR 9,000 in a\n                          Statement Period, then on the Statement Date, INR 9,000 will be\n                          added to the Statement Amount.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.11&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Due Date</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Due Date can be up to 10 days from\n                          Statement Date. Please note that the exact Due Date for payment\n                          will be communicated to you on the Service Platform.&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'>If the Borrower fails to pay on or\n                          before the Due Date, then such default&nbsp;&nbsp;</span></p>\n                      <ul style=\"list-style-type: lower-roman; padding-left: 24px;\">\n                        <li style='font-weight: 400;'><span style='font-weight: 400;'>Will\n                            impact credit rating,&nbsp;</span></li>\n                        <li style='font-weight: 400;'><span style='font-weight: 400;'>May\n                            lead to suspension of Loan,&nbsp;</span></li>\n                        <li style='font-weight: 400;'><span style='font-weight: 400;'>May\n                            attract late fees.</span></li>\n                      </ul>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.12&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Late Fee</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>You may be charged </span><strong\n                        >Late Fee </strong><span style='font-weight: 400;'>by the Lender</span>\n                        <span style='font-weight: 400;'>for any delay in repayment of\n                          Minimum Instalment (refer to Section 2 and 3) beyond the Due Date.\n                          The Late Fee shall be based on the Statement Amount as per\n                          below-defined slabs. The Late Fee for the current month&rsquo;s\n                          dues shall be charged in the next Statement Amount and shall\n                          continue to get charged on a monthly basis, until the dues are\n                          cleared.</span></p>\n                          <br />\n                          Note: Exact slabs will be communicated to you along with the loan agreement. \n                          <br />\n                          <br />\n                          \n                      <p><span style='font-weight: 400;'>Illustration:&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'>If the Statement Period for the\n                          user is from 26th January to 25th February, then the Statement\n                          Date would be 26th February and the Due Date for this Statement\n                          Period would be 5th March. Let us assume, the Statement Amount is\n                          INR 19,500/-. If a Borrower does not pay on or before the 5th of\n                          March, a Late Fee of INR 2000/- (say) would be\n                          charged to the Borrower. Now, let us further assume that the\n                          Borrower has continued to default in the repayment in the next\n                          Statement Period also and he has not made any further purchases.\n                          Then, on the Due Date of 5th April, on the previous Statement\n                          Amount an additional Late Fee of INR 2000 will be levied on the\n                          Borrower for the 2nd month of default. Now Borrower needs to be\n                          pay Statement Amount + Newly applied Late Fee along with previous\n                          month Late Fee i.e., INR 23,500 (19,500 + 2000 + 2000).</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.13&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Communications from Lender</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\" colspan='2'>\n                      <p><span style='font-weight: 400;'>Please note that the Lender\n                          reserves the right to change this MITC, including changes to fees,\n                          charges, interests and others, wholly or partly, from time to time\n                          and such change would be notified to the Borrower electronically\n                          or on the Service Platform or in the Sanction Letter.&nbsp;&nbsp;</span></p>\n                      \n                      <p><span style='font-weight: 400;'>Details specific to a Borrower,\n                          which are not part of this MITC, will be available in the Sanction\n                          Letter, Key Fact Statement (KFS) or on Service Platform.&nbsp;</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>1.14</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Taxes&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\" colspan='2'>\n                      <p><span style='font-weight: 400;'>All fees and charges shall be\n                          exclusive of applicable taxes, except wherever mentioned.</span></p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            \n            <p style='text-align: center;'><strong>Section 2: Pay Later Drawdown</strong></p>\n            <p style='text-align: center;'><em><span style='font-weight: 400;'>(Note: This\n                  includes Pay in Full early repayment option. All the mentioned details in\n                  Section 1 are applicable for this section as well, until expressly\n                  modified under this section.)</span></em></p>\n            \n            <div>\n              <table\n                style='border-color: black;'\n                border='1'\n                cellspacing='0'\n                cellpadding='5'\n              >\n                <tbody>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><strong>Sl&nbsp;</strong></p>\n                      <p><strong>No&nbsp;</strong></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><strong>Description&nbsp;</strong></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><strong>Particulars</strong></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>2.1&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Repayment options for Pay Later</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>For the Pay Later, the Borrower can\n                          choose the following repayment options:&nbsp;</span></p>\n                      <ol>\n                        <li style='font-weight: 400;'><strong>Regular payment option:\n                          </strong><span style='font-weight: 400;'>The Customer may choose\n                            to pay the Drawdown amount in up to 24 instalments, subject to\n                            Minimum Instalment. For availing this option, the customer has\n                            to pay a Carry Forward Fee</span><strong>. </strong><span\n                            style='font-weight: 400;'\n                          >Please refer Section 2.2 for a detailed illustration</span><strong\n                          >.</strong><span style='font-weight: 400;'>&nbsp;</span></li>\n                      </ol>\n                      \n                      <ol>\n                        <li style='font-weight: 400;'><strong>Pay in Full early repayment\n                            option:\n                          </strong><span style='font-weight: 400;'>The Customer may choose\n                            to pay the complete Drawdown amount on or before the first Due\n                            Date. No Carry Forward Fee is chargeable for this repayment\n                            option. If you spent INR 9,000 in a Statement Period, then on or\n                            before the Due Date, Borrower needs to pay INR 9,000.</span></li>\n                      </ol>\n                      \n                      <p><span style='font-weight: 400;'>The Borrower may have an option for\n                          converting Pay Later Drawdown to EMI type.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'> 2.2</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Repayment Schedule for Pay Later</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>This is the repayment schedule for\n                          regular payment option.&nbsp;</span></p>\n                      <p><span style='font-weight: 400;'>Illustration:&nbsp;</span></p>\n                      <p><span style='font-weight: 400;'>The below illustration details a\n                          Repayment Schedule of a drawdown for INR 15,000/- and chooses to\n                          Pay in Full type and only pays Minimum Instalment for a max tenure\n                          of 24 months.&nbsp;</span></p>\n                      \n                      <ul>\n                        <li style='font-weight: 400;'><span\n                            style='font-weight: 400;'\n                          >Drawdown Amount = INR 15000/-&nbsp;</span></li>\n                        <li style='font-weight: 400;'><span\n                            style='font-weight: 400;'\n                          >Maximum repayment tenure = 24 months.&nbsp;</span></li>\n                        <li style='font-weight: 400;'><span\n                            style='font-weight: 400;'\n                          >Minimum Instalment = 7.5% of Outstanding Balance of Pay Later +\n                            Carry Forward Fee.</span></li>\n                        <li style='font-weight: 400;'><span style='font-weight: 400;'>Carry\n                            Forward Amount = Principal to be paid - Principal Paid&nbsp;</span></li>\n                        <li style='font-weight: 400;'><span style='font-weight: 400;'>Carry\n                            Forward Fee = 4% of Carry Forward Amount (for this example)</span></li>\n                      </ul>\n                      \n                      \n            <table\n                        style='border-color: black;'\n                        cellspacing='0'\n                        cellpadding='5'\n                      >\n                        <tbody>\n                          <tr>\n                            <td style=\"border: 1px solid black;\"><b>Instalment <br />No.</b></td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><strong>Due Date</strong></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><strong>Principal to be paid</strong></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><strong>Principal Paid</strong></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><strong>Remaining Principal</strong></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><strong>Carry Forward Amount</strong></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><strong>Carry Forward Fees levied</strong></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><strong>Minimum Instalment</strong></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">1</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Feb-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1125</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1125</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>13875</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>13875</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>555</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1680</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">2</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Mar-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1041</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1041</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>12834</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>12834</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>513</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1554</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">3</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Apr-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>963</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>963</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>11872</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>11872</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>475</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1437</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">4</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-May-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>890</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>890</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>10981</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>10981</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>439</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1330</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">5</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Jun-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>824</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>824</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>10158</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>10158</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>406</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1230</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">6</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Jul-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>762</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>762</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>9396</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>9396</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>376</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1138</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">7</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Aug-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>705</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>705</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>8691</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>8691</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>348</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>1052</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">8</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Sep-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>652</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>652</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>8039</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>8039</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>322</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>973</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">9</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Oct-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>603</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>603</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>7436</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>7436</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>297</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>900</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">10</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Nov-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>558</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>558</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>6879</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>6879</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>275</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>833</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">11</td> \n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Dec-21</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>516</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>516</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>6363</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>6363</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>255</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>770</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">12</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Jan-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>477</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>477</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5886</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5886</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>235</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>713</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">13</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Feb-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>441</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>441</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5444</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5444</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>218</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>659</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">14</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Mar-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>408</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>408</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5036</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5036</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>201</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>610</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">15</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Apr-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>378</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>378</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>4658</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>4658</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>186</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>564</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">16</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-May-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>349</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>349</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>4309</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>4309</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>172</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>522</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">17</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Jun-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>323</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>323</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>3986</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>3986</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>159</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>483</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">18</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Jul-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>299</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>299</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>3687</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>3687</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>147</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>446</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">19</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Aug-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>277</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>277</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>3410</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>3410</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>136</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>413</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">20</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Sep-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>256</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>256</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>3154</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>3154</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>126</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>382</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">21</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Oct-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>237</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>237</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>2918</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>2918</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>117</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>353</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">22</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Nov-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>219</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>219</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>2699</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>2699</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>108</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>327</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">23</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Dec-22</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>202</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>202</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>2497</span></p>\n                            </td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>2497</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>100</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>302</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">24</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>5-Jan-23</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>2497</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>2497</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">&nbsp;</td>\n                            <td style=\"border-top: none; border-bottom: none;\">&nbsp;</td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>0</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>0</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>2497</span></p>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>2.3</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Carry Forward Fee</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>If you choose to pay any amount\n                          less than the Drawdown amount, a Carry Forward Fee of up to __%\n                          would be charged upfront by the Lender, immediately after due date\n                          on the Carry Forward Amount. The exact amount of Carry Forward\n                          Fees for the Borrower will be communicated electronically at the\n                          time of repayment.</span></p>\n                      \n                      <p><span style='font-weight: 400;'>Illustration:</span></p>\n                      \n                      <p><span style='font-weight: 400;'>If the Statement Period for the\n                          user is from 26th January to 25th February, then the Statement\n                          Date would be 26th February and the Due Date for this Period would\n                          be 5th March.</span></p>\n                      \n                      <p><span style='font-weight: 400;'>Let us assume, Outstanding Balance\n                          of INR 40,000/- and Minimum Instalment is 7.5% (say) of the\n                          Outstanding Balance i.e., INR 3000/-. If a Borrower pays the\n                          amount of INR 3000/- then a Carry Forward Fees of 3.5% will to be\n                          charged on the Carry Forward Amount of INR 37,000/-.</span></p>\n                      \n                      <p><span style='font-weight: 400;'>Hence, Carry Forward Fees of INR\n                          37,000 * 3.5% = INR 1295/- would be charged upfront along with INR\n                          3000/- and Carry Forward Amount of 37,000/- will be added to next\n                          statement period.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>2.3&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Prepayment of Draw-down</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>The Borrower may wish to pre-pay\n                          the Loan before Statement Date. Such pre-payment will be without\n                          any charges; however, the Lender reserves the right to modify this\n                          from time to time.&nbsp;</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>2.4</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Pre-closure&nbsp;</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Borrower may also have the option\n                          to pre-close or foreclosure before the end of the tenure of the\n                          Drawdown. No pre-closure charges will be levied. However, Lender\n                          reserves the right to modify this from time to time.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>2.7</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>Charges</span></p>\n                    </td>\n                    <td style=\"border: 1px solid black;\">\n                      <p><span style='font-weight: 400;'>The Loan may be utilized for\n                          various purpose or end use, subject to additional charges. The\n                          charges applicable for the Pay Later are as below:</span></p>\n                      \n                      <table\n                        style='border-color: black;'\n                        border='1'\n                        cellspacing='0'\n                        cellpadding='5'\n                      >\n                        <tbody>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">\n                              <p><strong>Purpose&nbsp;</strong></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><strong>Convenience Fee</strong></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>Ad hoc request for Bank\n                                  transfers, cash withdrawals or on other channels</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>Upto __% on Drawdown Amount</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td rowspan='2'>\n                              <p><span style='font-weight: 400;'>Pre-fixed request for Bank\n                                  transfers</span></p>\n                            </td>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>No charges if the customer\n                                  requests pre fixed&nbsp; transfer on specific date(s) as\n                                  communicated in the service platform and charges up to __%\n                                  otherwise</span>\n                                <span style='font-weight: 400;'>subject to discretion of the\n                                  Lender.</span></p>\n                            </td>\n                          </tr>\n                          <tr>\n                            <td style=\"border: 1px solid black;\">\n                              <p><span style='font-weight: 400;'>Annual fee of up to Rs.\n                                  ___/- p.a, may be levied for availing this service if/as\n                                  mentioned on the Service Platform.</span></p>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            \n            <p style=\"text-align: center;\"><strong>Section 3: EMI Drawdowns</strong></p>\n            <p style=\"text-align: center;\"><em><span style=\"font-weight: 400;\">(Note: All the mentioned details in Section 1 are applicable for the EMI section as well unless mentioned explicitly otherwise)</span></em></p>\n            \n            <table style=\"border-color: black;\" border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n              <tbody>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><strong>Sl&nbsp;</strong></p>\n              <p><strong>No.&nbsp;</strong></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><strong>Description&nbsp;</strong></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><strong>Particulars</strong></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3.1</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">EMI&nbsp;</span></p>\n              <p><span style=\"font-weight: 400;\">Conversions &amp; Tenures</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">EMI Tenure can range up to a maximum of 24 months.&nbsp;</span></p>\n              \n              <p><span style=\"font-weight: 400;\">The Borrower may have an option for converting Pay Later type Drawdown to EMI of his/her own choice of the tenure through Service Platform before the relevant Due Date.&nbsp;</span></p>\n              <p><span style=\"font-weight: 400;\">Alternatively, in some cases, the Borrower may be given the option to directly choose EMI Drawdown at the time of any Drawdown.&nbsp;</span></p>\n              <p><span style=\"font-weight: 400;\">Drawdowns at certain merchant categories are excluded from EMI conversions as mentioned in Section 3.7.</span></p>\n              <p><span style=\"font-weight: 400;\">Note that for EMI Drawdowns, the Borrower needs to the pay back the entire Statement Amount on or before the Due Date, failing which applicable late fee, penalties etc. may be charged to the Borrower</span></p>\n              <p><span style=\"font-weight: 400;\">Please note that the Lender reserves the right to decline a Drawdown from EMI conversion at any time without assigning any reason whatsoever.</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3.2</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Repayment&nbsp;</span></p>\n              <p><span style=\"font-weight: 400;\">Schedule for&nbsp;</span></p>\n              <p><span style=\"font-weight: 400;\">EMI</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Borrower needs to pay Minimum Instalment on or before the Due Date to avoid any late fees.</span></p>\n              \n              <p><span style=\"font-weight: 400;\">Illustration:</span></p>\n              <p><span style=\"font-weight: 400;\">Sample EMI Repayment Schedule:</span></p>\n              <ul>\n              <li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Drawdown Amount = INR 18000/-&nbsp;</span></li>\n              <li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Repayment tenure = 6 months.</span></li>\n              <li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">APR = 24%</span></li>\n              <li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">EMI as per to reducing principal method = INR 3213.46/-&nbsp;</span></li>\n              <li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Minimum Instalment = EMI itself.</span></li>\n              </ul>\n              \n              <table style=\"border-color: black;\" border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n              <tbody>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Month</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Principal</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Interest</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Loan Outstanding&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">EMI</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">&nbsp;</td>\n              <td style=\"border: 1px solid black;\">&nbsp;</td>\n              <td style=\"border: 1px solid black;\">&nbsp;</td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">18000.00</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">&nbsp;</td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">M1&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">2853.46&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">360.00&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">15146.54&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3213.46</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">M2&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">2910.53&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">302.93&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">12236.00&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3213.46</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">M3&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">2968.74&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">244.72&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">9267.26&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3213.46</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">M4&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3028.12&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">185.35&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">6239.14&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3213.46</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">M5&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3088.68&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">124.78&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3150.46&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3213.46</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">M6&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3150.46&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">63.01&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">0.00&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3213.46</span></p>\n              </td>\n              </tr>\n              </tbody>\n              </table>\n              \n              <p><span style=\"font-weight: 400;\">Note:</span></p>\n              <ul>\n              <li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Consequent to the calculation of interest on a daily basis, the EMI may vary for a particular month and shall be adjusted (in a manner decided by the lender from time to time) and the same shall be communicated to the borrower via the service platform.&nbsp;</span></li>\n              <li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">For the First EMI, the Interest will be calculated from the date of the drawdown</span></li>\n              </ul>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3.3&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Prepayment of&nbsp;</span></p>\n              <p><span style=\"font-weight: 400;\">Draw Down</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Borrower may have the option to pre-pay EMI Drawdowns before the Statement Date. There would be no prepayment charges levied in case of Borrower choosing this option.</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3.4</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Pre-closure of an EMI Type&nbsp;</span></p>\n              <p><span style=\"font-weight: 400;\">Drawdowns</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Borrower would have the option to pre-close or foreclose the EMI type of Drawdown fully before the end of the tenure of such Drawdown. There would be no pre closure charges levied in case of Borrower choosing this option. The Borrower may be eligible to receive Interest Waiver</span> <span style=\"font-weight: 400;\">on all the pre-closed/ foreclosed EMI(s) which are not yet due in the immediate Statement Period. This will be communicated to the Borrower electronically.&nbsp;</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">3.5</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Charges&nbsp;</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">The charges applicable for EMI are as below:</span></p>\n              \n              <table style=\"border-color: black;\" border=\"1\" cellspacing=\"0\" cellpadding=\"5\">\n              <tbody>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><strong>Description&nbsp;</strong></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><strong>Processing Fee&nbsp;</strong></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><strong>Interest</strong></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Bank transfers, cash withdrawals or on other channels</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Up to a maximum of __% of the Drawdown Amount</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Up to APR of __%</span></p>\n              </td>\n              </tr>\n              <tr>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Pre-fixed request for Bank transfers</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Up to a maximum of __% of the Drawdown Amount</span></p>\n              </td>\n              <td style=\"border: 1px solid black;\">\n              <p><span style=\"font-weight: 400;\">Up to APR of __%</span></p>\n              </td>\n              </tr>\n              </tbody>\n              </table>\n              </td>\n              </tr>\n              </tbody>\n              </table>\n            \n\n        \n                                                        <h2 class='font-semibold text-base py-4'>Grievance:</h2>\n                                                        <p><strong>Nodal grievance redressal officer of LSP</strong></p>\n<p>Mr Danish Mirza,<br />Contact: 080 6821 6821<br />Email: care@uni.club, gro@uni.club<br />Address: <br />Branch Office,<br />Uniorbit Technologies Pvt Ltd.<br />Obeya Zing, No 80/3<br />Gayathri Mansion, 2nd &amp; 4th Floor<br />Dr. Puneeth Rajkumar Road,<br />Above Toyota showroom, <br />Bellandur, Bangalore 560103</p>\n<br /><p><strong>Nodal grievance redressal officer of NDX P2P Pvt Ltd</strong></p>\n<p>Mr. Achal Mittal, Founder <br />Contact: +91-022-489-04685<br />Email ID: grievances@liquiloans.com<br /> <br />Address: 1st Floor, B-104,<br />\"The Qube\" having C.T.S. No. 1498, A/2,M.V. Road, Hasan Pada Rd, Mittal Industrial Estate,<br />Marol Andheri (East), Mumbai, Maharashtra 400059<br /> <br />Grievances portal: https:/ www.liquiloans.com/customer-grievances-redressal- mechanism</p>\n<br /><p><strong>Nodal grievance redressal officer of Trillion Loans Fintech Pvt Ltd</strong></p>\n<p>Mr. Niraj Muraka <br />Contact: +91-022-489-04685<br />Email ID: grievances@liquiloans.com<br /> <br />Address: 1st Floor, B-104,<br />\"The Qube\" having C.T.S. No. 1498, A/2,M.V. Road, Hasan Pada Rd, Mittal Industrial Estate,<br />Marol Andheri (East), Mumbai, Maharashtra 400059<br /> <br />Grievances portal: https:/ www.liquiloans.com/customer-grievances-redressal- mechanism</p>\n<br />\n                                                    </div>\n        \n</div>\n",
                logoUrl: ""
            },
            lendbox: {
                name: "lendbox",
                content: '\n<div>\n<div>\n<a href="https://www.lendbox.in/">\n<img height="50px" width="50px" src="https://cdn.uni.club/assets/backend/lendbox_logo.png" style="display: inline-block; width:150px">\n</a>\n</div>\n\n    <p class=\'text-center pt-4\'>LENDBOX LOAN AGREEMENT</p>\n\n    <p align=center  style=\'text-align:center;border:none\'><b><u><span style=\'font-size:10.0pt;color:black\'>BY AND BETWEEN</span></u></b></p>\n\n    <p>\n        Lender(s) registered with Transactree Technologies Private Limited (\u201cLendbox\u201d), a P2P NBFC licensed by the\n        Reserve Bank of India, on the platform <a href="www.lendbox.in">www.lendbox.in</a>\n    </p>\n\n\n    <p align=center  style=\'text-align:center;border:none\'><b><u><span style=\'font-size:10.0pt;color:black\'>AND</span></u></b></p>\n\n    <p><b>The \u201cBorrower\u201d as described in Annexure 3 hereunder,</b> which expression unless repugnant to the context\n        shall mean and includes its legal representatives, permitted assigns and successors.</p>\n\n    <p>The Lender and the Borrower are hereinafter individually referred to as the <b>\u201cParty\u201d</b> and collectively\n        as the <b>\u201cParties\u201d</b>. </p>\n\n    <p><b>WHEREAS</b> the Parties have agreed to enter into this agreement on the terms and conditions contained\n        hereinafter as follows:</p>\n    <table>\n        <tbody>\n            <tr>\n                <td>\n                    1. The Lender agrees to lend to the Borrower and the Borrower agrees to borrow an unsecured line\n                    of credit (\u201cLoan\u201d) in accordance with the terms and conditions mentioned in Annexure 2 and\n                    Annexure 3 (namely the MITC and the Sanction Letter) hereunder.\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    2. The Lenders for the Loan will be determined by Lendbox. The Lender to this Loan may be more\n                    than one depending on the total Loan amount. For detailed lender information visit\n                    www.lendbox.in\n                </td>\n            </tr>\n\n            <tr>\n                <td>\n                    3. Lendbox has entered into an agreement with Uniorbit technologies Private Limited (hereinafter\n                    referred to as the \u201cPartner\u201d or \u201cUni\u201d). The Borrower is a customer registered on the PARTNER\u2019S\n                    platform and BOTH PARTIES agree that the terms of this agreement are subject to the terms and\n                    conditions laid down in the agreement signed between Lendbox & PARTNER \u2013 described in detail in\n                    Annexure 1.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    4. Lendbox has authorized various third parties to provide services with regard to onboarding,\n                    management and collections from the Borrower and act as a customer touch points besides\n                    Lendbox\u2019s own personnel. These third parties also include Uniorbit Technologies Private Limited\n                    (\u201cUni\u201d) and its agents.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    5. The Parties acknowledge that the transaction of lending and repayment is being facilitated by\n                    Transactree Technologies Private Limited (hereinafter \u201cLendbox\u201d) through their platform. Lendbox\n                    shall partner with Uni, whereby the Loan will be facilitated via the online account opened for\n                    the Borrower on the mobile application or website operated by Uni, hereafter called the \u201cService\n                    Platform\u201d. The Loan may be availed by the Borrower through the Service Platform.</td>\n            </tr>\n            <tr>\n                <td>\n                    6. The Lender shall deposit the amount in the unique virtual escrow account being operated by\n                    Lendbox details of which have been provided to the Lender. The amount shall be transferred and\n                    disbursed from the escrow account set up by Lendbox and Partner for disbursements in no later\n                    than 48 hours from the time of funding of the escrow account by the Lender, subject to any\n                    banking holiday and such delay if any will not change the terms and conditions of the Loan\n                    repayment in any manner. It is the Partner\u2019s responsibility to transfer the amount into\n                    Borrower\u2019s account or into any other account identified by the Borrower, such as the merchant\n                    etc.from the escrow account The Borrower shall deposit the repayments for the Loan through the\n                    Service Platform, and the Partner shall transfer these repayments in the account specified by\n                    Lendbox, being the escrow account of Lendbox for repayments based on the terms and conditions of\n                    the loan repayment mentioned in Annexure 2.</td>\n            </tr>\n            <tr>\n                <td>\n                    7. The Borrower shall repay the Loan (including interest, additional interest and other charges\n                    thereon) in accordance with Annexure 2 hereunder. It is hereby clarified that the Lendbox acting\n                    on behalf of lender(s) reserves the right to modify including increase, decrease or suspend the\n                    line or credit mentioned in Annexure 2 at any time, at its sole discretion. In the event of any\n                    material and significant modification to\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Annexure 2, Lendbox shall issue a fresh Sanction Letter, in the manner provided in Annexure 3 to\n                    the Borrower.</td>\n            </tr>\n            <tr>\n                <td>\n                    8. The Loan is unsecured and no security has been provided by the Borrower to the Lender to\n                    secure his repayment/ payment obligations in terms of this Agreement.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    9. The Borrower may, subject to applicable law, prepay the entire outstanding Loan Amount along\n                    with interest, additional interest and other charges as applicable, at any time as per the\n                    repayment schedule specified in Annexure 2.</td>\n            </tr>\n            <tr>\n                <td>\n                    10. Each Party represents and warrants that it is entitled to enter into this Agreement and to\n                    undertake the obligations herein contained. The Lender represents and warrants that the funds\n                    for the Loan as specified in Annexure 3 shall be ready and available in the escrow account of\n                    Lendbox on or prior to the date of this Agreement, failing which the repayment schedule, Loan\n                    due date, billing date etc would be altered.</td>\n            </tr>\n            <tr>\n                <td>\n                    11. Each Party further represents and warrants that its respective signatory, as applicable, to\n                    this Agreement are duly authorized to execute the same in a manner binding upon the Party and\n                    that all approvals and procedures necessary for vesting such authority in its signatory have\n                    been duly obtained and complied with.</td>\n            </tr>\n            <tr>\n                <td>\n                    12. The occurrence of any of the following events, or events similar thereto, shall each\n                    constitute an event of default (\u201c<b>Event of Default</b>\u201d):\n                    <ol style=\'list-style-type: lower-alpha;\'>\n                        <li>The Borrower does not pay any amount due and payable pursuant to this Agreement in\n                            accordance with the terms of this Agreement on the date such amount is payable;</li>\n                        <li>The breach of, or omission to observe, or default by the Borrower in observing any of\n                            its obligations, covenants, warranties, undertakings under this Agreement;</li>\n                        <li>Any representation or statement made or deemed to be made by the Borrower in this\n                            Agreement or any other document delivered by or on behalf of the Borrower under or in\n                            connection with the Agreement being or being proven to have been incorrect or misleading\n                            when made or deemed to be made; or</li>\n                        <li>The Borrower is declared insolvent or files for insolvency or any attachment, distress\n                            execution or any other such process is initiated against the Borrower.</li>\n                    </ol>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    13. Upon the occurrence of an Event of Default, the Lender and Lendbox on behalf of the Lender,\n                    shall, without the requirement of serving any notice/default notice to the Borrower:\n                    <ol>\n                        <li>declare that the Loan Amount, together with accrued interest, additional interest and\n                            all other amounts accrued or outstanding under this Agreement be immediately due and\n                            payable, whereupon they shall become immediately due and payable;</li>\n                        <li>encash or present for encashment, the undated, postdated, signed cheques provided as\n                            Collateral in order to recover any or all of the amounts outstanding to the Lender; or\n                        </li>\n                        <li>exercise such other rights as may be available to the Lender under Applicable Law.</li>\n                    </ol>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    14. This Agreement shall come into force on the date of execution of this Agreement and shall\n                    remain in full force until the repayment of the entire portion of the Loan Amount along with all\n                    interest, additional interest, dues, charges, taxes as may be applicable.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    15. The Parties agree and undertake that they shall, at all times, during the continuance of\n                    this Agreement, ensure that all the terms and conditions of this Agreement and all information\n                    relating to the Loan Amount shall be kept confidential (\u201c<b>Confidential Information</b>\u201d) and\n                    they shall not disclose any information relating to this Agreement to any third party, without\n                    the prior written consent of the other Party other than information relating to:\n                    <ol>\n                        <li>information and data relating to it; </li>\n                        <li>information or data relating to any credit facility availed by / to be availed by it;\n                        </li>\n                        <li>default if any committed by it in discharge of our such obligation, as the Lender may\n                            deem appropriate and necessary to disclose and furnish to credit information agencies\n                            and any other agency authorized in this behalf by Reserve Bank of India; which shall not\n                            be considered confidential in nature.</li>\n                    </ol>\n\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <table>\n        <tbody>\n            <tr>\n                <td>\n                    16. The Borrower agrees and undertakes that the information and data furnished by it to the\n                    Lender and to Lendbox pursuant to this Agreement and in relation thereto, are true and correct\n                    and consents that any agency authorized by the Lender or Lendbox may use and process the\n                    information and data provided under this agreement.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    17. The Borrower shall indemnify and hold the Lender and Lendbox harmless from and against any\n                    and all loss, damage or other consequences which may arise or result from giving the Loan to the\n                    Borrower and shall reimburse the Lender and/or Lendbox upon demand all such sums and shall upon\n                    request appear and defend at the Borrower\u2019s own cost and expenses any action which may be\n                    brought against the Lender in connection therewith and shall accept the statement of account\n                    presented by the party claiming the loss as conclusive proof of the correctness of any such\n                    claim to be due from him.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    18. The Agreement shall be governed by the laws of India and courts at [Delhi] shall have\n                    exclusive jurisdiction to settle any disputes which may arise out of or in connection with this\n                    Agreement. The Parties irrevocably agree to submit to that jurisdiction, to the exclusion of\n                    other Courts.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    19. The Borrower shall reimburse and pay to the Lender all costs, charges and expenses,\n                    including stamp duty and legal costs on actual basis and other charges and expenses which may be\n                    incurred in preparation of these presents and related to and or incidental documents and\n                    enforcement of the rights of the Lender there under or any other document security created /\n                    executed by the Borrower in favour of the Lender.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    20. The Borrower shall not assign any of its rights or obligations under this Agreement. The\n                    Lender may assign this Agreement and all rights hereunder or transfer the benefit of the whole\n                    or any part of this Agreement to any third party through Lendbox, without the prior consent of\n                    the Borrower. Lendbox shall inform the Borrower of such assignment through their platform <a\n                        href="www.lendbox.in">www.lendbox.in</a> within 5 working days of such assignment.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    21. Notwithstanding anything contained herein, the parties agree that they have authorized\n                    Lendbox to appoint a suitable agency as the recovery agent (\u201cRecovery Agent\u201d) for recovery of\n                    any amounts due and payable under this Agreement. The Recovery Agents shall take all such\n                    reasonable steps as might be necessary for recovery; however, the Recovery Agents do not\n                    guarantee an assured recovery of dues. That the charges being levied by the Recovery Agent shall\n                    be to the account of the Lender. The Parties understand that Lendbox is only offering its\n                    assistance in recovery on account of a default and in no manner is liable for any default, being\n                    a marketplace for prospective lenders and borrowers to meet and interact. For the purpose of\n                    this Loan, The Recovery Agent shall be Uni and it\u2019s service providers or sub-agents.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    22. The rights, powers and remedies given to the Lender by this Agreement shall be in addition\n                    to all rights, powers and remedies given to the Lender by virtue of any other security, statute\n                    or rule of law.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    23. The Parties hereto confirm and acknowledge that this Agreement shall constitute the entire\n                    agreement between them and shall supersede and override all previous communications, either oral\n                    or written, between the Parties with respect to the subject matter of this Agreement, and no\n                    agreement or understanding varying or extending the same shall be binding upon any Party hereto\n                    unless arising out of the specific provisions of this Agreement.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    24. No amendment, modification or addition to this Agreement shall be binding on all the Parties\n                    hereto unless set forth in writing and executed by them or through their duly authorized\n                    representatives.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    25. If any term, provision, covenant or restriction of this Agreement is held by a court of\n                    competent jurisdiction to be invalid, void or unenforceable, the remainder of the terms,\n                    provisions, covenants and restrictions of this Agreement shall remain in full force and effect\n                    and shall in no way be affected, impaired or invalidated.\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    26. Any notice or demand hereunder shall be in writing and sent through post at the address\n                    specified above or the address last known to the Party sending the notice. Any notice sent under\n                    this agreement shall be deemed to be delivered 2 business days following the dispatch of the\n                    notice.\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <p  style=\'border:none\'><span style=\'font-size:10.0pt;\ncolor:black\'>&nbsp;</span></p>\n    <p  style=\'border:none\'><span style=\'font-size:10.0pt;\ncolor:black\'>&nbsp;</span></p>\n    <p  style=\'border:none\'><span style=\'font-size:10.0pt;\ncolor:black\'>&nbsp;</span></p>\n\n\n\n    <p style=\'text-transform: uppercase;\'>IN WITNESS WHEREOF, THE PARTIES HAVE EXECUTED AND DELIVERED THIS AGREEMENT\n        ON THE DAY AND YEAR FIRST ABOVE WRITTEN.</p>\n\n    <div>\n        <p style=\'float:left\'>For and on behalf of Lender</p>\n        <p style=\'float:right\'>For and on behalf of Borrower (as per the Sanction Letter)</p>\n    </div>\n\n    <div style="padding-top: 50px;">\n        <p>\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026</p>\n        <p>{{fullName}}</p>\n    </div>\n\n    <div style="page-break-before:always">&nbsp;</div>\n\n\n\n\n    <div>\n        <p align=center  style=\'margin-right:8.15pt;text-align:center;\nborder:none\'><u><span style=\'font-size:10.0pt;color:black\'>Annexure</span></u><span\n                style=\'font-size:10.0pt;color:black\'> <u>1</u></span></p>\n\n        <p>PARTNER: Uniorbit technologies Private Limited (CIN U72900DL2020PTC368642)\xa0</p>\n        <p>Lendbox has entered into a service agreement with Uniorbit technologies Private Limited dated 29/09/2021\n            to provide Line of Credit to their customers.</p>\n    </div>\n\n    <p align=center  style=\'margin-right:8.15pt;text-align:center;\nborder:none\'><u><span style=\'font-size:10.0pt;color:black\'>Annexure</span></u><span\n            style=\'font-size:10.0pt;color:black\'> <u>2</u></span></p>\n\n    <p align=center style=\'margin-top:0in;text-align:center\'>\n        <span style=\'font-size:\n10.0pt;color:black\'>MITC</a></span>\n    </p>\n\n    <p style=\'text-align: center;\'><strong>Most Important Terms of the Loan (MITC)</strong></p>\n    <p style=\'text-align: center;\'><strong>Section 1: General Product Construct</strong></p>\n    \n    <div>\n    <table\n        style=\'border-color: black;\'\n        border=\'1\'\n        cellspacing=\'0\'\n        cellpadding=\'5\'\n      >\n        <tbody>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><strong>Sl No.</strong></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><strong>Description&nbsp;</strong></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><strong>Particulars</strong></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.1&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Loan Type & End Purpose\n              </span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>The Loan is in the form of a Line\n                  of Credit. It shall be referred to as &ldquo;</span><strong>Credit\n                  Line</strong><span style=\'font-weight: 400;\'>&rdquo; throughout\n                  this MITC. It shall be accessible through the &ldquo;</span><strong\n                >Service Platform</strong><span style=\'font-weight: 400;\'>&rdquo;,\n                  namely the website, mobile application or such other platform as\n                  made available to the Borrower from time to time.</span></p>\n                  <p>The Borrower may use this Credit Line for personal purposes.</p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.2</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Sanction Date</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Sanction Date is the date from\n                  which the Borrower can start availing the Loan and the same is\n                  mentioned in the Sanction Letter issued to the Borrower.&nbsp;</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.3&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Facility Sanctioned</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Under this Loan Agreement,\n                  Lender(s) will provide a term loan in the form of a Credit Line,\n                  upto a maximum sum of INR ______ per Borrower. The maximum\n                  amount eligible (referred as Eligible Credit Line hereafter) as\n                  Loan for each Borrower will be communicated in the Sanction\n                  Letter.&nbsp;&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>The Loan is determined on the basis\n                  of multitude of factors such as your credit assessment, loan\n                  application, timely repayment, etc. by the Lender.&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'></span>Accordingly, Lender reserves the right to increase with the consent the Borrower or decrease or suspend or cancel or modify the Loan /Eligible Credit Line from time to time, depending on these factors or without assigning any reason. The change in Loan will be communicated to the Borrower electronically at the time of change or in a revised Sanction Letter as the case may be. \n              </p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.4&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>The Validity of the Facility</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Loan is valid for ___ months\n                  from the Sanction Date.&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>At the expiry or earlier\n                  termination of the Loan facility, Lender may, at the request of\n                  the Borrower, renew the Loan subject to any applicable due\n                  diligence and for further periods at its sole discretion.\n                  Documents (if any) required for renewal of the facility to be\n                  submitted to Lender</span><strong>, </strong><span\n                  style=\'font-weight: 400;\'\n                >at least 30 days before expiry.&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>The Outstanding Balance </span><em\n                ><span style=\'font-weight: 400;\'>(refer 1.9)</span></em><span\n                  style=\'font-weight: 400;\'\n                >, if any, at the time of expiry of the Loan will need to be repaid\n                  in full.</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.5&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>KYC</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>The Borrower shall share his/her\n                  Proof of identity and Proof of address with Lender and the Lender\n                  shall validate the same before sanctioning the Loan/line. Lender\n                  may also seek KYC of the Borrower at any point of time for ongoing\n                  due diligence or regulatory purposes.&nbsp;</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.6</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Transaction&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><strong>Transaction </strong><span style=\'font-weight: 400;\'>refers\n                  to every request or order placed by the Borrower for utilizing the\n                  Loan facility. This is also referred as &ldquo;Drawdown&rdquo; in\n                  this MITC.</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.7</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Drawdowns</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>There will be 2 types of\n                </span><strong>Drawdowns</strong><span\n                  style=\'font-weight: 400;\'\n                >.&nbsp;&nbsp;</span></p>\n                <ol style="list-style: lower-roman;">\n                  <li> Pay Later</li>\n                  <li>EMI</li>\n                </ol>\n              \n              <p><span style=\'font-weight: 400;\'>Please refer to Section 2 for more\n                  details on Pay Later Drawdowns.&nbsp;</span></p>\n              <p><span style=\'font-weight: 400;\'>Please note that the default\n                  Drawdown shall be Pay Later. Thereafter, Borrower may convert\n                  these to EMI. The Borrower may be given the option to directly\n                  choose EMI Drawdown. Note that the option and eligibility to\n                  convert will be communicated electronically to the Borrower from\n                  time to time.&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>Please note that the Lender\n                  reserves the right to decline a Drawdown at any time without\n                  assigning any reason whatsoever.</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.8&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Outstanding Balance</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><strong>Outstanding Balance </strong><span\n                  style=\'font-weight: 400;\'\n                >is the sum of all remaining unpaid Drawdowns at any point of time\n                  along with unpaid Fees, Interest or other charges.</span></p>\n              \n              <p><strong>Refund</strong><span style=\'font-weight: 400;\'>(s) for each\n                  Drawdown would be adjusted against the Outstanding Balance. At the\n                  time of processing refunds, the Borrower will be made aware of the\n                  manner of such handling.</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.9&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Statement Date &amp; Statement\n                  Period&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>A statement will be generated on a\n                  fixed date every month (&ldquo;Statement</span><strong>\n                  Date</strong><span style=\'font-weight: 400;\'>&rdquo;). The time\n                  duration between one Statement Date to the next is referred to as\n                  the &ldquo;</span><strong>Statement Period</strong><span\n                  style=\'font-weight: 400;\'\n                >&rdquo; (refer illustration below).&nbsp;&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>The Statement Date may vary for\n                  each Borrower depending on the Sanction Date and the same will be\n                  communicated to Borrower on the Service Platform.&nbsp;</span></p>\n              <p><span\n                  style=\'font-weight: 400;\'\n                >Illustration:&nbsp;&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>If the Borrower&rsquo;s Statement\n                  Date is the 26th of every month, then the Statement Period for the\n                  user will be from 26th January to 25th February 26th February to\n                  25th March, and so on.</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.10</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Statement Amount&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>The Statement</span>\n                <span style=\'font-weight: 400;\'>Amount shall mean the total Drawdown\n                  amount(s) in a particular Statement Period.</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>Illustration:</span></p>\n              <p><span style=\'font-weight: 400;\'>If you spent INR 9,000 in a\n                  Statement Period, then on the Statement Date, INR 9,000 will be\n                  added to the Statement Amount.</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.11&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Due Date</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Due Date can be up to 10 days from\n                  Statement Date. Please note that the exact Due Date for payment\n                  will be communicated to you on the Service Platform.&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>If the Borrower fails to pay on or\n                  before the Due Date, then such default&nbsp;&nbsp;</span></p>\n              <ul style="list-style-type: lower-roman; padding-left: 24px;">\n                <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>Will\n                    impact credit rating,&nbsp;</span></li>\n                <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>May\n                    lead to suspension of Loan,&nbsp;</span></li>\n                <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>May\n                    attract late fees.</span></li>\n              </ul>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.12&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Late Fee</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>You may be charged </span><strong\n                >Late Fee </strong><span style=\'font-weight: 400;\'>by the Lender</span>\n                <span style=\'font-weight: 400;\'>for any delay in repayment of\n                  Minimum Instalment (refer to Section 2 and 3) beyond the Due Date.\n                  The Late Fee shall be based on the Statement Amount as per\n                  below-defined slabs. The Late Fee for the current month&rsquo;s\n                  dues shall be charged in the next Statement Amount and shall\n                  continue to get charged on a monthly basis, until the dues are\n                  cleared.</span></p>\n                  <br />\n                  Note: Exact slabs will be communicated to you along with the loan agreement. \n                  <br />\n                  <br />\n                  \n              <p><span style=\'font-weight: 400;\'>Illustration:&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>If the Statement Period for the\n                  user is from 26th January to 25th February, then the Statement\n                  Date would be 26th February and the Due Date for this Statement\n                  Period would be 5th March. Let us assume, the Statement Amount is\n                  INR 19,500/-. If a Borrower does not pay on or before the 5th of\n                  March, a Late Fee of INR 2000/- (say) would be\n                  charged to the Borrower. Now, let us further assume that the\n                  Borrower has continued to default in the repayment in the next\n                  Statement Period also and he has not made any further purchases.\n                  Then, on the Due Date of 5th April, on the previous Statement\n                  Amount an additional Late Fee of INR 2000 will be levied on the\n                  Borrower for the 2nd month of default. Now Borrower needs to be\n                  pay Statement Amount + Newly applied Late Fee along with previous\n                  month Late Fee i.e., INR 23,500 (19,500 + 2000 + 2000).</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.13&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Communications from Lender</span></p>\n            </td>\n            <td style="border: 1px solid black;" colspan=\'2\'>\n              <p><span style=\'font-weight: 400;\'>Please note that the Lender\n                  reserves the right to change this MITC, including changes to fees,\n                  charges, interests and others, wholly or partly, from time to time\n                  and such change would be notified to the Borrower electronically\n                  or on the Service Platform or in the Sanction Letter.&nbsp;&nbsp;</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>Details specific to a Borrower,\n                  which are not part of this MITC, will be available in the Sanction\n                  Letter, Key Fact Statement (KFS) or on Service Platform.&nbsp;</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>1.14</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Taxes&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;" colspan=\'2\'>\n              <p><span style=\'font-weight: 400;\'>All fees and charges shall be\n                  exclusive of applicable taxes, except wherever mentioned.</span></p>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    \n    <p style=\'text-align: center;\'><strong>Section 2: Pay Later Drawdown</strong></p>\n    <p style=\'text-align: center;\'><em><span style=\'font-weight: 400;\'>(Note: This\n          includes Pay in Full early repayment option. All the mentioned details in\n          Section 1 are applicable for this section as well, until expressly\n          modified under this section.)</span></em></p>\n    \n    <div>\n      <table\n        style=\'border-color: black;\'\n        border=\'1\'\n        cellspacing=\'0\'\n        cellpadding=\'5\'\n      >\n        <tbody>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><strong>Sl&nbsp;</strong></p>\n              <p><strong>No&nbsp;</strong></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><strong>Description&nbsp;</strong></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><strong>Particulars</strong></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>2.1&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Repayment options for Pay Later</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>For the Pay Later, the Borrower can\n                  choose the following repayment options:&nbsp;</span></p>\n              <ol>\n                <li style=\'font-weight: 400;\'><strong>Regular payment option:\n                  </strong><span style=\'font-weight: 400;\'>The Customer may choose\n                    to pay the Drawdown amount in up to 24 instalments, subject to\n                    Minimum Instalment. For availing this option, the customer has\n                    to pay a Carry Forward Fee</span><strong>. </strong><span\n                    style=\'font-weight: 400;\'\n                  >Please refer Section 2.2 for a detailed illustration</span><strong\n                  >.</strong><span style=\'font-weight: 400;\'>&nbsp;</span></li>\n              </ol>\n              \n              <ol>\n                <li style=\'font-weight: 400;\'><strong>Pay in Full early repayment\n                    option:\n                  </strong><span style=\'font-weight: 400;\'>The Customer may choose\n                    to pay the complete Drawdown amount on or before the first Due\n                    Date. No Carry Forward Fee is chargeable for this repayment\n                    option. If you spent INR 9,000 in a Statement Period, then on or\n                    before the Due Date, Borrower needs to pay INR 9,000.</span></li>\n              </ol>\n              \n              <p><span style=\'font-weight: 400;\'>The Borrower may have an option for\n                  converting Pay Later Drawdown to EMI type.</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'> 2.2</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Repayment Schedule for Pay Later</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>This is the repayment schedule for\n                  regular payment option.&nbsp;</span></p>\n              <p><span style=\'font-weight: 400;\'>Illustration:&nbsp;</span></p>\n              <p><span style=\'font-weight: 400;\'>The below illustration details a\n                  Repayment Schedule of a drawdown for INR 15,000/- and chooses to\n                  Pay in Full type and only pays Minimum Instalment for a max tenure\n                  of 24 months.&nbsp;</span></p>\n              \n              <ul>\n                <li style=\'font-weight: 400;\'><span\n                    style=\'font-weight: 400;\'\n                  >Drawdown Amount = INR 15000/-&nbsp;</span></li>\n                <li style=\'font-weight: 400;\'><span\n                    style=\'font-weight: 400;\'\n                  >Maximum repayment tenure = 24 months.&nbsp;</span></li>\n                <li style=\'font-weight: 400;\'><span\n                    style=\'font-weight: 400;\'\n                  >Minimum Instalment = 7.5% of Outstanding Balance of Pay Later +\n                    Carry Forward Fee.</span></li>\n                <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>Carry\n                    Forward Amount = Principal to be paid - Principal Paid&nbsp;</span></li>\n                <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>Carry\n                    Forward Fee = 4% of Carry Forward Amount (for this example)</span></li>\n              </ul>\n              \n              \n    <table\n                style=\'border-color: black;\'\n                cellspacing=\'0\'\n                cellpadding=\'5\'\n              >\n                <tbody>\n                  <tr>\n                    <td style="border: 1px solid black;"><b>Instalment <br />No.</b></td>\n                    <td style="border: 1px solid black;">\n                      <p><strong>Due Date</strong></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><strong>Principal to be paid</strong></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><strong>Principal Paid</strong></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><strong>Remaining Principal</strong></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><strong>Carry Forward Amount</strong></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><strong>Carry Forward Fees levied</strong></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><strong>Minimum Instalment</strong></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">1</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Feb-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1125</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1125</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>13875</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>13875</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>555</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1680</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">2</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Mar-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1041</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1041</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>12834</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>12834</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>513</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1554</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">3</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Apr-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>963</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>963</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>11872</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>11872</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>475</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1437</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">4</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-May-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>890</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>890</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>10981</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>10981</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>439</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1330</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">5</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Jun-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>824</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>824</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>10158</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>10158</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>406</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1230</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">6</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Jul-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>762</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>762</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>9396</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>9396</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>376</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1138</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">7</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Aug-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>705</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>705</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>8691</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>8691</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>348</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>1052</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">8</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Sep-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>652</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>652</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>8039</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>8039</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>322</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>973</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">9</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Oct-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>603</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>603</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>7436</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>7436</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>297</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>900</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">10</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Nov-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>558</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>558</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>6879</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>6879</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>275</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>833</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">11</td> \n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Dec-21</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>516</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>516</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>6363</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>6363</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>255</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>770</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">12</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Jan-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>477</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>477</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5886</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5886</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>235</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>713</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">13</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Feb-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>441</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>441</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5444</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5444</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>218</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>659</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">14</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Mar-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>408</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>408</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5036</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5036</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>201</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>610</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">15</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Apr-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>378</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>378</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>4658</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>4658</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>186</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>564</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">16</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-May-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>349</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>349</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>4309</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>4309</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>172</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>522</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">17</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Jun-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>323</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>323</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>3986</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>3986</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>159</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>483</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">18</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Jul-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>299</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>299</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>3687</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>3687</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>147</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>446</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">19</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Aug-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>277</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>277</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>3410</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>3410</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>136</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>413</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">20</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Sep-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>256</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>256</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>3154</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>3154</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>126</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>382</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">21</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Oct-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>237</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>237</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>2918</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>2918</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>117</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>353</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">22</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Nov-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>219</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>219</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>2699</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>2699</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>108</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>327</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">23</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Dec-22</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>202</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>202</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>2497</span></p>\n                    </td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>2497</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>100</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>302</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">24</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>5-Jan-23</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>2497</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>2497</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">&nbsp;</td>\n                    <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>0</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>0</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>2497</span></p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>2.3</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Carry Forward Fee</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>If you choose to pay any amount\n                  less than the Drawdown amount, a Carry Forward Fee of up to __%\n                  would be charged upfront by the Lender, immediately after due date\n                  on the Carry Forward Amount. The exact amount of Carry Forward\n                  Fees for the Borrower will be communicated electronically at the\n                  time of repayment.</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>Illustration:</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>If the Statement Period for the\n                  user is from 26th January to 25th February, then the Statement\n                  Date would be 26th February and the Due Date for this Period would\n                  be 5th March.</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>Let us assume, Outstanding Balance\n                  of INR 40,000/- and Minimum Instalment is 7.5% (say) of the\n                  Outstanding Balance i.e., INR 3000/-. If a Borrower pays the\n                  amount of INR 3000/- then a Carry Forward Fees of 3.5% will to be\n                  charged on the Carry Forward Amount of INR 37,000/-.</span></p>\n              \n              <p><span style=\'font-weight: 400;\'>Hence, Carry Forward Fees of INR\n                  37,000 * 3.5% = INR 1295/- would be charged upfront along with INR\n                  3000/- and Carry Forward Amount of 37,000/- will be added to next\n                  statement period.</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>2.3&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Prepayment of Draw-down</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>The Borrower may wish to pre-pay\n                  the Loan before Statement Date. Such pre-payment will be without\n                  any charges; however, the Lender reserves the right to modify this\n                  from time to time.&nbsp;</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>2.4</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Pre-closure&nbsp;</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Borrower may also have the option\n                  to pre-close or foreclosure before the end of the tenure of the\n                  Drawdown. No pre-closure charges will be levied. However, Lender\n                  reserves the right to modify this from time to time.</span></p>\n            </td>\n          </tr>\n          <tr>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>2.7</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>Charges</span></p>\n            </td>\n            <td style="border: 1px solid black;">\n              <p><span style=\'font-weight: 400;\'>The Loan may be utilized for\n                  various purpose or end use, subject to additional charges. The\n                  charges applicable for the Pay Later are as below:</span></p>\n              \n              <table\n                style=\'border-color: black;\'\n                border=\'1\'\n                cellspacing=\'0\'\n                cellpadding=\'5\'\n              >\n                <tbody>\n                  <tr>\n                    <td style="border: 1px solid black;">\n                      <p><strong>Purpose&nbsp;</strong></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><strong>Convenience Fee</strong></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>Ad hoc request for Bank\n                          transfers, cash withdrawals or on other channels</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>Upto __% on Drawdown Amount</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td rowspan=\'2\'>\n                      <p><span style=\'font-weight: 400;\'>Pre-fixed request for Bank\n                          transfers</span></p>\n                    </td>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>No charges if the customer\n                          requests pre fixed&nbsp; transfer on specific date(s) as\n                          communicated in the service platform and charges up to __%\n                          otherwise</span>\n                        <span style=\'font-weight: 400;\'>subject to discretion of the\n                          Lender.</span></p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style="border: 1px solid black;">\n                      <p><span style=\'font-weight: 400;\'>Annual fee of up to Rs.\n                          ___/- p.a, may be levied for availing this service if/as\n                          mentioned on the Service Platform.</span></p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    \n    <p style="text-align: center;"><strong>Section 3: EMI Drawdowns</strong></p>\n    <p style="text-align: center;"><em><span style="font-weight: 400;">(Note: All the mentioned details in Section 1 are applicable for the EMI section as well unless mentioned explicitly otherwise)</span></em></p>\n    \n    <table style="border-color: black;" border="1" cellspacing="0" cellpadding="5">\n      <tbody>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><strong>Sl&nbsp;</strong></p>\n      <p><strong>No.&nbsp;</strong></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><strong>Description&nbsp;</strong></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><strong>Particulars</strong></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3.1</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">EMI&nbsp;</span></p>\n      <p><span style="font-weight: 400;">Conversions &amp; Tenures</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">EMI Tenure can range up to a maximum of 24 months.&nbsp;</span></p>\n      \n      <p><span style="font-weight: 400;">The Borrower may have an option for converting Pay Later type Drawdown to EMI of his/her own choice of the tenure through Service Platform before the relevant Due Date.&nbsp;</span></p>\n      <p><span style="font-weight: 400;">Alternatively, in some cases, the Borrower may be given the option to directly choose EMI Drawdown at the time of any Drawdown.&nbsp;</span></p>\n      <p><span style="font-weight: 400;">Drawdowns at certain merchant categories are excluded from EMI conversions as mentioned in Section 3.7.</span></p>\n      <p><span style="font-weight: 400;">Note that for EMI Drawdowns, the Borrower needs to the pay back the entire Statement Amount on or before the Due Date, failing which applicable late fee, penalties etc. may be charged to the Borrower</span></p>\n      <p><span style="font-weight: 400;">Please note that the Lender reserves the right to decline a Drawdown from EMI conversion at any time without assigning any reason whatsoever.</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3.2</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Repayment&nbsp;</span></p>\n      <p><span style="font-weight: 400;">Schedule for&nbsp;</span></p>\n      <p><span style="font-weight: 400;">EMI</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Borrower needs to pay Minimum Instalment on or before the Due Date to avoid any late fees.</span></p>\n      \n      <p><span style="font-weight: 400;">Illustration:</span></p>\n      <p><span style="font-weight: 400;">Sample EMI Repayment Schedule:</span></p>\n      <ul>\n      <li style="font-weight: 400;"><span style="font-weight: 400;">Drawdown Amount = INR 18000/-&nbsp;</span></li>\n      <li style="font-weight: 400;"><span style="font-weight: 400;">Repayment tenure = 6 months.</span></li>\n      <li style="font-weight: 400;"><span style="font-weight: 400;">APR = 24%</span></li>\n      <li style="font-weight: 400;"><span style="font-weight: 400;">EMI as per to reducing principal method = INR 3213.46/-&nbsp;</span></li>\n      <li style="font-weight: 400;"><span style="font-weight: 400;">Minimum Instalment = EMI itself.</span></li>\n      </ul>\n      \n      <table style="border-color: black;" border="1" cellspacing="0" cellpadding="5">\n      <tbody>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Month</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Principal</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Interest</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Loan Outstanding&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">EMI</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">&nbsp;</td>\n      <td style="border: 1px solid black;">&nbsp;</td>\n      <td style="border: 1px solid black;">&nbsp;</td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">18000.00</span></p>\n      </td>\n      <td style="border: 1px solid black;">&nbsp;</td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">M1&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">2853.46&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">360.00&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">15146.54&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3213.46</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">M2&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">2910.53&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">302.93&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">12236.00&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3213.46</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">M3&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">2968.74&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">244.72&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">9267.26&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3213.46</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">M4&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3028.12&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">185.35&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">6239.14&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3213.46</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">M5&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3088.68&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">124.78&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3150.46&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3213.46</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">M6&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3150.46&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">63.01&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">0.00&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3213.46</span></p>\n      </td>\n      </tr>\n      </tbody>\n      </table>\n      \n      <p><span style="font-weight: 400;">Note:</span></p>\n      <ul>\n      <li style="font-weight: 400;"><span style="font-weight: 400;">Consequent to the calculation of interest on a daily basis, the EMI may vary for a particular month and shall be adjusted (in a manner decided by the lender from time to time) and the same shall be communicated to the borrower via the service platform.&nbsp;</span></li>\n      <li style="font-weight: 400;"><span style="font-weight: 400;">For the First EMI, the Interest will be calculated from the date of the drawdown</span></li>\n      </ul>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3.3&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Prepayment of&nbsp;</span></p>\n      <p><span style="font-weight: 400;">Draw Down</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Borrower may have the option to pre-pay EMI Drawdowns before the Statement Date. There would be no prepayment charges levied in case of Borrower choosing this option.</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3.4</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Pre-closure of an EMI Type&nbsp;</span></p>\n      <p><span style="font-weight: 400;">Drawdowns</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Borrower would have the option to pre-close or foreclose the EMI type of Drawdown fully before the end of the tenure of such Drawdown. There would be no pre closure charges levied in case of Borrower choosing this option. The Borrower may be eligible to receive Interest Waiver</span> <span style="font-weight: 400;">on all the pre-closed/ foreclosed EMI(s) which are not yet due in the immediate Statement Period. This will be communicated to the Borrower electronically.&nbsp;</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">3.5</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Charges&nbsp;</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">The charges applicable for EMI are as below:</span></p>\n      \n      <table style="border-color: black;" border="1" cellspacing="0" cellpadding="5">\n      <tbody>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><strong>Description&nbsp;</strong></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><strong>Processing Fee&nbsp;</strong></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><strong>Interest</strong></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Bank transfers, cash withdrawals or on other channels</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Up to a maximum of __% of the Drawdown Amount</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Up to APR of __%</span></p>\n      </td>\n      </tr>\n      <tr>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Pre-fixed request for Bank transfers</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Up to a maximum of __% of the Drawdown Amount</span></p>\n      </td>\n      <td style="border: 1px solid black;">\n      <p><span style="font-weight: 400;">Up to APR of __%</span></p>\n      </td>\n      </tr>\n      </tbody>\n      </table>\n      </td>\n      </tr>\n      </tbody>\n      </table>\n    \n\n<h2 class=\'font-semibold text-base py-4\'>Grievance:</h2>\n<p><strong>Nodal grievance redressal officer of LSP</strong></p>\n<p>Mr Danish Mirza<br />Contact: 080 6821 6821<br />Email ID: care@uni.club, gro@uni.club<br />\n  <br />Address: <br />Branch Office,<br />Uniorbit Technologies Pvt Ltd.<br />Obeya Zing, No 80/3<br />Gayathri Mansion, 2nd &amp; 4th Floor<br />Dr. Puneeth Rajkumar Road,<br />Above Toyota showroom, <br />Bellandur, Bangalore 560103</p>\n  <br /><p><strong>Grievance redressal officer of Transtactree Technologies Pvt Ltd (Lendbox)</strong></p>\n<p>Mrs. Tamanna Mehta,<br />Contact: +91-8860628026<br />Email ID: grievances@lendbox.in<br /><br />\n  Address: L-92, second floor, above punjab woolen co New Delhi - 110 067<br />\n  <br />Grievances portal: https://lendbox-dwh.s3.ap-south-1.amazonaws.com/website/documents/Grievance-Redressal.pdf</p>\n               <br />\n\n</div>\n        ',
                logoUrl: ""
            },
            dmi: {
                name: "dmi",
                content: '\n<div>\n    <div>\n            <a href="https://www.dmifinance.in/index.html">\n                <img height="50px" width="50px" src="https://cdn.uni.club/assets/backend/dmi_logo.png" style="display: inline-block;">\n            </a>\n    </div>\n    <h3>DMI FINANCE PRIVATE LIMITED</h3>\n    <p>\n        <b>\n            <u>\n                <span>\n                    GENERAL TERMS AND CONDITIONS OF LOAN\n                </span>\n            </u>\n        </b>\n    </p>\n\n<p>\n    GENERAL TERMS AND CONDITIONS OF LOAN (<b>\u201cGC\u201d</b>) for loans by <b>DMI\n    Finance Private Limited</b> having its registered office at Express\n    Building, Third Floor, 9-10, Bahadur Shah Zafar Marg, New Delhi\n    \u2013 110002 (<b>\u2018DMI\u2019</b> which shall mean and include its successors and\n    assigns)\n</p>\n\n<table>\n    <tbody>\n        <tr>\n            <td>\n                <b>1. DEFINITIONS </b>\n                <p>\n                    1.1 The terms and expressions contained in these GC\n                    and the Loan Application Form are defined as under:\n                </p>\n                <p><b>\u201cAvailability Period\u201d</b> shall mean the\n                    period within which the Borrower can request a\n                    Drawdown from the Facility and is as detailed in\n                    the Loan Details Sheet;</p>\n                <p><b>\u201cAvailable Facility Amount\u201d</b> means at any\n                    point of time the undrawn amount of the\n                    Facility, including any amount of the Facility\n                    which becomes available pursuant to any\n                    repayment or prepayment of all or part of any\n                    previous Drawdown; </p>\n                <p><b>\u201cBorrower\u201d</b> means the borrower as described in\n                        the Loan Details Sheet;</p>\n                <p><b> \u201cBorrower\u2019s Dues\u201d</b> means all sums payable\n                    by the Borrower to DMI, including outstanding\n                    Facility, Interest, all other charges, costs and\n                    expenses;</p>\n\n                <p><b> \u201cDrawdown\u201d</b> shall mean each drawdown of\n                    the Facility within the Availability Period and\n                    as per the terms of the Financing Documents,\n                    including drawdown of any amount which becomes\n                    available against the Facility, pursuant to\n                    prepayment/ repayment of any earlier Drawdown;</p>\n                <p><b>\u201cDue Date\u201d</b> in respect of any payment means\n                    the date on which any amount is due from the\n                    Borrower to DMI. </p>\n                <p><b>\u201cEMI\u201d</b> means the equated monthly amount to\n                    be paid by the Borrower towards repayment of all\n                    outstanding Drawdowns and payment of interest\n                    (if applicable) as per Financing Documents; </p>\n                <p><b>\u201cFacility\u201d</b> means the maximum drawdown\n                    limit granted by DMI to the Borrower as per Loan\n                    Details Sheet, which may be available to the\n                    Borrower as a revolving credit;</p>\n                <p><b>\u201cFinancing Documents\u201d</b> means these GC, the\n                    Loan Application, the Loan Details Sheet,\n                    including the annexures hereto and any documents\n                    executed by the Borrower or as required by DMI,\n                    as amended from time to time;</p>\n                <p><b>\u201cLoan Application\u201d</b> means the application\n                    in the prescribed form as submitted from time to\n                    time by the Borrower to DMI for seeking\n                    financing;</p>\n                <p><b>\u201cLoan Details Sheet\u201d</b> means the Loan\n                    Details Sheet executed between DMI and Borrower,\n                    from time to time;</p>\n                <p><b>\u201cMaterial Adverse Effect\u201d</b> means any event\n                    which in DMI\u2019s opinion would have an adverse\n                    effect on (i) Borrower\u2019s ability to pay the\n                    Borrower\u2019s Dues or (ii) recoverability of the\n                    Borrower\u2019s Dues;</p>\n                <p><b>\u201cOverdue Interest Rate\u201d</b> means the default\n                    interest as prescribed in the Loan Details Sheet\n                    which is payable on all amounts which are not\n                    paid on their respective Due Dates; \u201cPurpose\u201d\n                    means the utilization of each Drawdown as\n                    mentioned in the Loan Details Sheet including\n                    for purchase of any product from Vendors;</p>\n                <p><b>\u201cProduct\u201d</b> shall mean, if applicable, a\n                    product purchased by the Borrower from any\n                    Vendor and in line with the Purpose provided in\n                    the Loan Details Sheet;</p>\n                <p><b>\u201cVendor\u201d</b> shall mean the vendors, including\n                    e-commerce website as approved by DMI from time\n                    to time in respect of which financing would be\n                    provided by DMI for purchase of any Products.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">.1A. In this GC, (a) the singular includes the\n                    plural (and vice versa) and (b) reference to a\n                    gender shall include references to the female,\n                    male and neutral genders.</p>\n            </td>\n        </tr>\n</tbody>\n</table>\n\n<table>\n<tbody>\n        <tr class="row">\n            <td>\n                <p class=MsoNormal><span style=\'font-size:10.0pt;\'>&nbsp;</span></p>\n                <b>2. <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>DISBURSEMENT </b>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">\n                    2.1\n                    <span>&nbsp;&nbsp;</span>\n                    The Borrower may at any time during the\n                    Availability Period, request disbursement of any\n                    amount to the extent of the Available Facility\n                    Amount. DMI shall have the sole and absolute\n                    discretion to allow or reject Drawdown against\n                    such request. The Facility may be in the nature\n                    of a revolving credit and the Available Facility\n                    Amount may change during the Availability Period\n                    on account of prepayments/repayment.\n                    Notwithstanding anything contained in this GC,\n                    DMI shall have the absolute right to cancel or\n                    refuse any further Drawdowns from the Facility\n                    at its sole discretion as it may deem fit,\n                    including on account of any change in credit\n                    evaluation of the Borrower.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">2.2 <span>&nbsp;&nbsp;</span>Disbursement of any Drawdown directly to any\n                    vendor / seller/ healthcare institution or its\n                    authorized person for any Purpose shall be\n                    treated as having been disbursed to the\n                    Borrower. </p>\n\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                "> 2.3 <span>&nbsp;&nbsp;</span>For details on the features of the Facility,\n                    interest rates and other charges, please refer\n                    to Annexure 1 containing the MITC.</p>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                "> \n                3. <span>&nbsp;&nbsp;</span>The Borrower shall pay non-refundable processing\n                charges as stated in the Loan Details Sheet, along\n                with tax thereof, which may be added as a deemed\n                disbursement to the first Drawdown and the Borrower\n                will accordingly be liable for entire Drawdown, if\n                applicable as per the MITC.<b>INTEREST AND REPAYMENT</b></p>\n\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.1 <span>&nbsp;&nbsp;</span>The Borrower will pay Interest (if\n                    applicable) on each Drawdown made by the\n                    Borrower of the Facility and all other amounts\n                    due as provided in Loan Details Sheet and the\n                    interest shall be compounded on a monthly basis.\n                    The Borrower will be liable for the entire\n                    Drawdown amount and shall pay the full amount\n                    for each Drawdown. However, in such cases, in\n                    the event the installment is not paid on the Due\n                    Date, all overdue amounts shall accrue Interest\n                    at the prescribed rate (\u201cOverdue Interest Rate\u201d)\n                    which shall be computed from the respective due\n                    dates for payments and the interest shall be\n                    compounded on a monthly basis.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.2 <span>&nbsp;&nbsp;</span>The Borrower acknowledges that in case of\n                    identified Purpose, Drawdown may be allowed on\n                    zero interest basis and in such cases the return\n                    shall be made available to DMI by way of\n                    one-time non-refundable upfront discount\n                    provided by vendors/healthcare institutions on\n                    selected Purposes as mutually agreed between DMI\n                    and vendor / its authorized representative.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.3 <span>&nbsp;&nbsp;</span>The tenure of each Drawdown shall be as\n                    provided in the Loan Details Sheet. EMI shall be\n                    as calculated by DMI as required for\n                    amortization of Drawdowns within their\n                    respective tenure and Interest payable thereon\n                    and not exceeding the maximum EMI as provided in\n                    the Loan Details Sheet. EMI shall only be\n                    towards principal outstanding and Interest\n                    thereon and does not include any default\n                    interest or any other charges payable by the\n                    Borrower pursuant to Financing Documents. </p>\n                \n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.4 <span>&nbsp;&nbsp;</span>The payment of each EMI on time is the\n                    essence of the contract. The Borrower\n                    acknowledges that s/he has understood the method\n                    of computation of EMI and shall not dispute the\n                    same.</p>\n                    <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.5 <span>&nbsp;&nbsp;</span>Notwithstanding anything stated elsewhere in\n                    the Financing Documents, all Borrower\u2019s Dues,\n                    including EMI, shall be payable by the Borrower\n                    to DMI as and when demanded by DMI, at its sole\n                    discretion and without requirement of any reason\n                    being assigned. The Borrower shall pay such\n                    amounts, without any delay or demur, within 15\n                    (fifteen) days of such demand.</p>\n                \n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">\n                3.6 <span>&nbsp;&nbsp;</span>DMI shall be entitled to prospectively revise\n                    the rate of interest, if so required under any\n                    applicable law and DMI may recompute the EMI\n                    /the number of EMI for repayment of outstanding\n                    Facility and interest. Any such change as\n                    intimated by DMI to Borrower will be final and\n                    binding on the Borrower. In case of such\n                    revision the Borrower shall be entitled to\n                    prepay, within 30 (thirty) days of such\n                    revision, the entire outstanding Facility along\n                    with accrued Interest (if applicable), without\n                    any prepayment penalty.</p>\n                \n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;">\n                    3.7 <span>&nbsp;&nbsp;</span>In case of delayed payments, without\n                    prejudice to all other rights of DMI, DMI shall\n                    be entitled to Overdue Interest Rate (as\n                    prescribed in Loan Details Sheet) from the\n                    Borrower for the period of delay.\n                </p>\n\n            <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">\n                3.8 <span>&nbsp;&nbsp;</span>The Borrower may pre-pay any Drawdown prior\n                    to its scheduled tenure only with the prior\n                    approval of DMI and subject to such conditions\n                    and prepayment charges, as stipulated by DMI.\n                </p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.9 <span>&nbsp;&nbsp;</span>The Borrower shall bear all interest, tax,\n                    duties, cess duties and other forms of taxes\n                    whether applicable now or in the future, payable\n                    under any law at any time in respect of any\n                    payments made to DMI under the Financing\n                    Documents. If these are incurred by DMI, these\n                    shall be recoverable from the Borrower and will\n                    carry interest at the rate of Overdue Interest\n                    Rate from the date of payment till\n                    reimbursement.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.10 <span>&nbsp;&nbsp;</span>Notwithstanding any terms and conditions to\n                    the contrary contained in the Financing\n                    Documents, the amounts repaid by the Borrower\n                    shall be appropriated firstly towards cost,\n                    charges, expenses and other monies; secondly\n                    towards Overdue Interest Rate, if any; thirdly\n                    towards Interest; and lastly towards repayment\n                    of principal amount of a Facility. </p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.11 <span>&nbsp;&nbsp;</span>Interest (if applicable), Overdue Interest\n                    Rate and all other charges shall accrue from day\n                    to day and shall be computed on the basis of 365\n                    days a year and the actual number of days\n                    elapsed.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.12 <span>&nbsp;&nbsp;</span>If the due date for any payment is not a\n                    business day, the amount will be paid by\n                    Borrower on immediately succeeding business day.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.13 <span>&nbsp;&nbsp;</span>All sums payable by the Borrower to DMI\n                    shall be paid without any deductions whatsoever.\n                    Credit/ discharge for payment will be given only\n                    on realization of amounts due.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">3.14 <span>&nbsp;&nbsp;</span>This Clause 3 shall be applicable on the\n                    Borrower, in accordance with the MITC. </p>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                <p class=MsoNormal><span style=\'font-size:10.0pt;\'>&nbsp;</span></p>\n                <b>4 <span>&nbsp;&nbsp;</span>MODE OF PAYMENT, REPAYMENT AND PREPAYMENT</b>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">4.1 <span>&nbsp;&nbsp;</span>The Borrower shall, as required by DMI from\n                    time to time, provide (i) (\u201cEMANDATEs\u201d) or (ii)\n                    National Automated Clearing House (Debit\n                    Clearing)/ any other electronic or other\n                    clearing mandate (collectively referred to as\n                    \u201cNACH\u201d) as notified by the Reserve Bank of India\n                    (\u201cRBI\u201d) against Borrower\u2019s bank account for\n                    payment of dues. Such EMANDATEs/NACH shall be\n                    drawn from such bank and from such location as\n                    agreed to by DMI. The Borrower shall honor all\n                    payments without fail on first presentation/ due\n                    dates. EMANDATE/ NACH provided by the Borrower\n                    may be utilized by DMI for realization of any\n                    Borrower\u2019s Dues. The Borrower hereby\n                    unconditionally and irrevocably authorizes DMI\n                    to take all actions required for such\n                    realization. The Borrower shall promptly (and in\n                    any event within seven (7) days) replace the\n                    EMANDATE and/or the NACH and/or other documents\n                    executed for payment of Borrower\u2019s Dues as may\n                    be required by DMI from time to time, at its\n                    sole discretion.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">4.2 <span>&nbsp;&nbsp;</span>The Borrower shall, at all times maintain\n                    sufficient funds in his/her bank account/s for\n                    due payment of the Borrower\u2019s Dues on respective\n                    Due Dates. Borrower shall not close the bank\n                    account/s from which the EMANDATE / NACH have\n                    been issued or cancel or issues instructions to\n                    the bank or to DMI to stop or delay payment\n                    under the EMANDATE / NACH and DMI is not bound\n                    to take notice of any such communication. </p>\n                    <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">4.3 <span>&nbsp;&nbsp;</span>The Borrower agrees and acknowledges that the\n                    EMANDATE/ NACH have been issued voluntarily in\n                    discharge of the Borrower\u2019s Dues and not by way\n                    of a security for any purpose whatsoever. The\n                    Borrower also acknowledges that dishonor of any\n                    EMANDATE/ NACH is a criminal offence under the\n                    Negotiable Instruments Act, 1881/The Payment and\n                    Settlements Act, 2007. The Borrower shall be\n                    liable to pay dishonour charges for each\n                    EMANDATE/ NACH dishonour (as prescribed in Loan\n                    Details Sheet). </p>\n                    <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">4.4 <span>&nbsp;&nbsp;</span>Any dispute or difference of any nature\n                    whatsoever shall not entitle the Borrower to\n                    withhold or delay payment of any EMIs or other\n                    sum and DMI shall be entitled to present the\n                    EMANDATE/ NACH on the respective due dates.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">4.5 <span>&nbsp;&nbsp;</span>Notwithstanding the issuance of EMANDATE /\n                    NACH, the Borrower will be solely responsible to\n                    ensure timely payment of dues. </p>\n\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">4.6 <span>&nbsp;&nbsp;</span>The Borrower agrees and acknowledges that in\n                    the event of payment of dues through modes other\n                    than eMandate / NACH (if enabled by DMI), there\n                    can be additional charges for transactions and\n                    the same shall be borne by the Borrower.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">4.7 <span>&nbsp;&nbsp;</span>This Clause 4 shall be applicable on the\n                    Borrower in accordance with the MITC. </p>\n\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                <p> <b>5. <span>&nbsp;&nbsp;</span>BORROWER\u2019S COVENANTS, REPRESENTATION AND\n                        WARRANTIES</b></p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">5.1 <span>&nbsp;&nbsp;</span>The Borrower shall:</p>\n                <ul style=\'list-style-type: lower-roman;\'>\n                    <li>Observe and perform all its obligations\n                        under the Financing Documents.</li>\n                    <li>Immediately deliver to DMI all documents,\n                        including bank account statements as may be\n                        required by DMI from time to time. The\n                        Borrower also authorizes DMI to communicate\n                        independently with (i) any bank where the\n                        Borrower maintains an account and to seek\n                        details and statement in respect of such\n                        account from the bank and (ii) with any\n                        employer of any Borrower as DMI may deem\n                        necessary, including for monitoring\n                        Borrower\u2019s creditworthiness. </li>\n                    <li>Immediately notify DMI of any litigations or\n                        legal proceedings against any Borrower.</li>\n                    <li>Notify DMI of any Material Adverse Effect or\n                        Event of Default.</li>\n\n                    <li>Notify DMI in writing of all changes in the\n                        location/ address of office /residence\n                        /place of business or any\n                        change/resignation/termination / closure of\n                        employment/ profession /business.</li>\n                    <li>Not leave India for employment or business\n                        or long term stay abroad without fully\n                        repaying the Facility then outstanding,\n                        together with interest and other dues and\n                        charges. </li>\n                    <li>Provide security, if any, as specified in\n                        Financing Documents or as may be required by\n                        DMI in case of any change in credit\n                        worthiness of any Borrower (as determined by\n                        DMI). </li>\n\n                    <li>Ensure deposit of salary and / or business\n                        proceeds in the account from which\n                        EMANDATEs/ECS have been issued to DMI, if\n                        applicable.</li>\n                    <li>On or prior to the first Drawdown take a\n                        credit life insurance policy if required by\n                        DMI under the MITC, which shall include a\n                        cover for accidents, death, permanent\n                        disability and unemployment and such other\n                        terms as shall be acceptable to DMI.</li>\n                    <li>Comply at all times with applicable laws,\n                        including, Prevention of Money Laundering\n                        Act, 2002.</li>\n                    <li>Utilise each Drawdown only for the Purpose.</li>\n                </ul>\n\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">5.2 <span>&nbsp;&nbsp;</span>Each Borrower represents and warrants to DMI\n                    as under:</p>\n                <ul style=\'list-style-type: lower-roman;\'>\n                    <li>All the information provided by Borrower in\n                        the Loan Application and any other document,\n                        whether or not relevant for ascertaining the\n                        credit worthiness of the Borrower, is true\n                        and correct and not misleading in any\n                        manner;</li>\n                    <li>The Borrower is capable of and entitled\n                        under all applicable laws to execute and\n                        perform the Financing Documents and the\n                        transactions thereunder;</li>\n                    <li>The Borrower is above 18 years of age and\n                        this GC is a legal, valid and binding\n                        obligation on him/her, enforceable against\n                        him/her in accordance with its terms;</li>\n                    <li>The Borrower declares that he/ she is not\n                        prohibited by any law from availing this\n                        Facility;</li>\n                    <li>No event has occurred which shall\n                        prejudicially affect the interest of DMI or\n                        affect the financial conditions of Borrower\n                        or affect his/her liability to perform all\n                        or any of their obligations under the\n                        Financing Documents;</li>\n                    <li>Borrower is not in default of payment of any\n                        taxes or government dues;</li>\n                    <li><The Borrower will do all acts, deeds and\n                            things, as required by DMI to give\n                            effect to the terms of this GC; </li>\n                    <li>That there are no bankruptcy or insolvency\n                        proceedings against the Borrower.</li>\n                </ul>\n\n\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">5.3 <span>&nbsp;&nbsp;</span>The Borrower gives its consent to DMI to\n                    use/store all the information provided by the\n                    Borrower or otherwise procured by DMI in the\n                    manner it deems fit including for the purposes\n                    of this Facility or for its business and\n                    understands and agrees that DMI may disclose\n                    such information to its contractors, agents and\n                    any other third parties.</p>\n\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">5.4 <span>&nbsp;&nbsp;</span>In the event the Facility/Drawdown is for\n                    purchase of any Product, the Borrower also\n                    undertakes and covenants as below: </p>\n                <ul style=\'list-style-type: lower-roman;\'>\n                    <li>The Vendor shall be exclusively responsible\n                        for delivery of the Product and DMI shall\n                        not be liable for any delay in delivery or\n                        non-delivery of the Product and/or with\n                        respect to the quality, condition, fitness,\n                        suitability or otherwise whatsoever of the\n                        said Product;</li>\n                    <li>In the case Product cancellation, DMI will\n                        treat the relevant Facility repaid only if\n                        the Vendor refunds the amount to DMI upon\n                        compliance by the Borrower with the refund\n                        policy of the Vendor. In case of such\n                        refund, DMI shall refund the EMI, if any,\n                        paid by the Borrower, less Interest if any\n                        for the period between purchase and refund,\n                        and treat the Facility/Drawdown as fully\n                        discharged. The processing fees will not be\n                        reimbursed and will be adjusted against the\n                        refund, if any; </li>\n                </ul>\n\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                <p><b>6 <span>&nbsp;&nbsp;</span>EVENTS OF DEFAULT</b></p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">6.1 <span>&nbsp;&nbsp;</span>The following acts/events, shall each\n                    constitute an \u201cEvent of Default\u201d by the Borrower\n                    for the purposes of each Facility:</p>\n\n                <ul style=\'list-style-type: lower-roman;\'>\n                    <li>The Borrower fails to make payment of any\n                        Borrower\u2019s Dues on Due Date;</li>\n                    <li>Breach of any terms, covenants,\n                        representation, warranty, declaration or\n                        confirmation under the Financing Documents;</li>\n                    <li>Any fraud or misrepresentation or\n                        concealment of material information by\n                        Borrower which could have affected decision\n                        of DMI to grant any Facility; </li>\n                    <li>Death, lunacy or any other permanent\n                        disability of the Borrower;</li>\n                    <li>Borrower utilises the Drawdown for any\n                        purpose other than the Purpose;</li>\n                    <li>Occurrence of any events, conditions or\n                        circumstances (including any change in law)\n                        which in the sole and absolute opinion of\n                        DMI could have a Material Adverse Effect,\n                        including limitation of any proceedings or\n                        action for bankruptcy/liquidation/\n                        insolvency of the Borrower or attachment /\n                        restraint of any of its assets;</li>\n                </ul>\n\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">6.2 <span>&nbsp;&nbsp;</span>The decision of DMI as to whether or not an\n                    Event of Default has occurred shall be binding\n                    upon the Borrower.</p>\n\n\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                <p><b>7 <span>&nbsp;&nbsp;</span>CONSEQUENCES OF DEFAULT</b></p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">7.1 <span>&nbsp;&nbsp;</span>Upon occurrence of any of the Events of\n                    Default and at any time thereafter, DMI shall\n                    have the right, but not the obligation to\n                    declare all sums outstanding in respect of the\n                    Facility, whether due or not, immediately\n                    repayable and upon the Borrower failing to make\n                    the said payments within 15 (fifteen) days\n                    thereof, DMI may at its sole discretion exercise\n                    any other right or remedy which may be available\n                    to DMI under any applicable law, including\n                    seeking any injunctive relief or attachment\n                    against the Borrower or their assets.\n                    Notwithstanding the aforesaid, in the event of\n                    the Borrower failing to make the payment of the\n                    Borrower\u2019s Dues within 90 (ninety) days from the\n                    Due Date of such payment, DMI shall, inter alia,\n                    have the right to classify the same as a\n                    non-performing asset (NPA) and report it\n                    accordingly to the credit bureaus.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">7.2 <span>&nbsp;&nbsp;</span>The Borrower shall also be liable for payment\n                    of all legal and other costs and expenses\n                    resulting from the foregoing defaults or the\n                    exercise of DMI remedies.</p>\n               \n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                <p><b>8 <span>&nbsp;&nbsp;</span>DISCLOSURES</b></p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">8.1 <span>&nbsp;&nbsp;</span>The Borrower acknowledges and authorizes DMI\n                    to disclose all information and data relating to\n                    Borrower, the Facility, Drawdowns, default if\n                    any, committed by Borrower to such third\n                    parties/ agencies as DMI may deem appropriate\n                    and necessary to disclose and/or as authorized\n                    by RBI, \n                    </p>\n                    </td>\n                    </tr>\n                    </tbody>\n                    </table>\n\n<table>\n<tbody>\n<tr>\n<td>\n    <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">\n                    including TransUnion CIBIL Limited\n                    (\u201cCIBIL\u201d). The Borrower also acknowledges and\n                    authorizes such information to be used,\n                    processed by DMI / third parties/ CIBIL / RBI as\n                    they may deem fit and in accordance with\n                    applicable laws. Further in Event of Default,\n                    DMI and such agencies shall have an unqualified\n                    right to disclose or publish the name of the\n                    Borrower /or its directors/\n                    partners/co-applicants, as applicable, as\n                    \u2018defaulters\u2019 in such manner and through such\n                    medium as DMI / CIBIL/ RBI/ other authorized\n                    agency in their absolute discretion may think\n                    fit, including in newspapers, magazines and\n                    social media.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">8.2 <span>&nbsp;&nbsp;</span>The Borrower shall not hold DMI responsible\n                    for sharing and/or disclosing the information\n                    now or in future and also for any consequences\n                    suffered by the Borrower and/or other by reason\n                    thereof. The provisions of this clause 8 shall\n                    survive termination of the GC and the repayment\n                    of the Borrower\u2019s Dues.</p>\n\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                <p><b>9 <span>&nbsp;&nbsp;</span>MISCELLANEOUS</b></p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.1 <span>&nbsp;&nbsp;</span>The entries made in records of DMI shall be\n                    conclusive evidence of existence and of the\n                    amount Borrower\u2019s Dues and any statement of dues\n                    furnished by DMI shall be accepted by and be\n                    binding on the Borrower.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.2 <span>&nbsp;&nbsp;</span>Borrower\u2019s liability for repayment of the\n                    Borrower\u2019s Dues shall, in case where more than\n                    one Borrower have jointly applied for any\n                    Facility, be joint and several. </p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.3 <span>&nbsp;&nbsp;</span>Borrower shall execute all documents and\n                    amendments and shall co-operate with DMI as\n                    required by DMI (i) to comply with any RBI\n                    guidelines / directives or (ii) for giving DMI\n                    full benefit of rights under the Financing\n                    Documents. Without prejudice to the aforesaid\n                    the Borrower hereby irrevocably consents that on\n                    its failure to do so, such changes shall be\n                    deemed to be incorporated in the Financing\n                    Documents and shall be binding on the Borrower.\n                </p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.4 <span>&nbsp;&nbsp;</span>Notwithstanding any suspension or termination\n                    of any Facility, all right and remedies of DMI\n                    as per Financing Documents shall continue to\n                    survive until the receipt by DMI of the\n                    Borrower\u2019s Dues in full.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.5 <span>&nbsp;&nbsp;</span>The Borrower acknowledges that the rate of\n                    interest, penal charges, service charges and\n                    other charges payable and or agreed to be paid\n                    by the Borrower under Financing Documents are\n                    reasonable and acceptable to him/ her.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.6 <span>&nbsp;&nbsp;</span>The Borrower expressly recognizes and accepts\n                    that DMI shall without prejudice to its rights\n                    to perform such activities itself or through its\n                    office employees be entitled and has full power\n                    and authority so to appoint one or more third\n                    parties (hereinafter referred to as \u201cService\n                    Providers\u201d) as DMI may select and to delegate to\n                    such party all or any of its functions, rights\n                    and power under Financing Documents relating to\n                    the sourcing, identity and verification of\n                    information pertaining to the Borrower,\n                    administration, monitoring of the Facility and\n                    to perform and execute all lawful acts, deeds,\n                    matters and things connected therewith and\n                    incidental thereto including sending notices,\n                    contacting Borrower, receiving\n                    Cash/Cheques/Drafts/ Mandates from the Borrower\n                    in favour of DMI.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.7 <span>&nbsp;&nbsp;</span>The Borrower acknowledges that the financing\n                    transaction hereunder gives rise to a\n                    relationship of debtor and creditor as between\n                    him / her and DMI and not in respect of any\n                    service rendered/to be rendered by DMI.\n                    Accordingly, the provisions of the Consumer\n                    Protection Act, 1986 shall not apply to the\n                    transaction hereunder.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.8 <span>&nbsp;&nbsp;</span>The Borrower hereby authorizes DMI to verify\n                    all information and documents including, income\n                    proof documents, residence documents, address\n                    proof documents, identity documents and other\n                    such documents containing personal and financial\n                    information as are submitted by them for\n                    obtaining any Facility and that they also\n                    consent to subsequent retention of the same by\n                    DMI.</p>\n\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.9 <span>&nbsp;&nbsp;</span>The Borrower acknowledges and authorizes DMI\n                    to procure Borrower\u2019s PAN No./copy of Pan Card,\n                    other identity proof and Bank Account details,\n                    from time to time and to also generate / obtain\n                    CIBIL, Experian, Hunter reports and such other\n                    reports as and when DMI may deem fit. The\n                    Borrower also hereby gives consent and\n                    authorizes DMI to undertake its KYC verification\n                    by Aadhar e-KYC or otherwise and undertake all\n                    such actions as may be required on its behalf or\n                    otherwise to duly complete the process of such\n                    verification including by way of Aadhar e-KYC\n                    and share such information with any authority\n                    and store such information in a manner it deems\n                    fit.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.10 <span>&nbsp;&nbsp;</span>In the event of any disagreement or dispute\n                    between DMI and the Borrower regarding the\n                    materiality of any matter including of any event\n                    occurrence, circumstance, change, fact\n                    information, document, authorization,\n                    proceeding, act, omission, claims, breach,\n                    default or otherwise, the opinion of DMI as to\n                    the materiality of any of the foregoing shall be\n                    final and binding on the Borrower.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.11 <span>&nbsp;&nbsp;</span>The Borrower and DMI may mutually agree on\n                    grant of a fresh facility on the terms and\n                    conditions of the GC and by execution of such\n                    further letter/undertaking by the Borrower as\n                    may be required by DMI.</p>\n                <p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">9.12 <span>&nbsp;&nbsp;</span>In case of any conflict between this GC and\n                    the MITC, the terms of the MITC shall prevail.\n                </p>\n\n\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                <p><b>10 <span>&nbsp;&nbsp;</span>SEVERABILITY</b></p>\n                The Borrower acknowledges that each of his/her\n                obligations under these Financing Documents is\n                independent and severable from the rest.\n            </td>\n        </tr>\n\n        <tr>\n        <td>\n            <p><b>11 <span>&nbsp;&nbsp;</span>GOVERNING LAW AND JURISDICTION</b></p>\n<p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">11.1 <span>&nbsp;&nbsp;</span>All Facility and the Financing Documents shall be governed by and construed in accordance with the laws of India.</p>\n<p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">11.2 <span>&nbsp;&nbsp;</span>All disputes, differences and / or claims arising out of these presents or as to the construction, meaning or effect hereof or as to the right and liabilities of the parties under the Financing Documents shall be settled by arbitration in accordance with the provision of the Arbitration and Conciliation Act, 1996 or any statutory amendments thereof or any statute enacted for replacement therefore and shall be referred to the sole Arbitration of a person to be appointed by DMI. The place of arbitration shall be Delhi and proceeding shall be under fast track procedure as laid down in Section 29(B) of the Act. The awards including interim awards of the arbitration shall be final and binding on all parties concerned. The arbitrator may pass the award without stating any reasons in such award.</p>\n<p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">11.3 <span>&nbsp;&nbsp;</span>Further, the present clause shall survive the termination of Financing Documents. The Courts at Delhi, India shall have exclusive jurisdiction (subject to the arbitration proceedings which are to be also conducted in Delhi, India) over any or all disputes arising out of the Financing Documents. </p>\n\n        </td>\n        </tr>\n\n        <tr>\n        <td>\n            <p><b>12 <span>&nbsp;&nbsp;</span>NOTICES</b></p>\n<p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">12.1 <span>&nbsp;&nbsp;</span>Any notice to be given to the Borrower in respect of Financing Documents shall be deemed to have been validly given if served on the Borrower or sent by registered post to or left at the address of the Borrower existing or last known business or private address. Any such notice sent by registered post shall be deemed to have been received by the Borrower within 48 hours from the time of its posting. Any notice to DMI shall be deemed to have been valid only if received by DMI at its abovestated address.</p>\n\n        </td>\n        </tr>\n\n        <tr>\n        <td>\n            <p><b>13 <span>&nbsp;&nbsp;</span>ASSIGNMENT</b></p>\n<p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">13.1 <span>&nbsp;&nbsp;</span>The Borrower shall not be entitled to jointly or severally transfer or assign all or any of their right or obligation or duties under the Financing Documents to any person directly or indirectly or create any third party interest in favour of any person without the prior written consent of DMI.</p>\n\n<p style="\n                    margin-top: 0in;\n                    margin-right: 0in;\n                    margin-bottom: 0in;\n                    margin-left: 27pt;\n                    text-align: justify;\n                    text-justify: inter-ideograph;\n                    text-indent: -27pt;\n                    line-height: normal;\n                ">13.2 <span>&nbsp;&nbsp;</span>DMI shall be entitled to sell, transfer, assign or securitise in any manner whatsoever (in whole or in part and including through grant of participation rights) all or any of its benefits, right, obligation, duties and / or liabilities under Financing Documents, without the prior written consent of, or intimation to the Borrower in such manner and such terms as DMI may decide. In the event of such transfer, assignment or securitization, the Borrower shall perform and be liable to perform their obligation under the Financing Documents to such assignee or transferor. In such event, the Borrower shall substitute the remaining EMANDATEs/ECS (if applicable to Borrower) in favour of the transferee/ assignee if called upon to do so by DMI.</p>\n\n        </td>\n        </tr>\n\n        <tr>\n        <td>\n            <p><b>14 <span>&nbsp;&nbsp;</span>INDEMNITY</b></p>\n<p>The Borrower hereby indemnifies, defends and holds DMI, its employees, representatives and consultants harmless from time to time and at all times against any liability, claim, loss, judgment, damage, cost or expense (including, without limitation, reasonable attorney\u2019s fees and expenses) as a result of or arising out of any failure by the Borrower to observe or perform any of the terms and conditions and obligations contained in the Financing Documents or Event of Default or the exercise of any of the rights by DMI under the Financing Documents, including for any enforcement of security or recovery of Borrower\u2019s Dues.</p>\n        </td>\n        </tr>\n\n        <tr>\n        <td>\n            <p><b>15 <span>&nbsp;&nbsp;</span>Acceptance:  </b></p>\n<p><b>I / We am / are aware that DMI shall agree to become a party to this GC only after satisfying itself with regard to all conditions and details filled by me / us in the GC and other Financing Documents in consonance with DMI policy.  I / We agree that this GC shall be concluded and become legally binding on the date when the authorized officer of DMI signing this at Delhi or on the date of first disbursement, whichever is earlier. </b></p>\n<p>By clicking \u201cI accept\u201d, the Borrower electronically signs these GC and agrees to be legally bound by its terms. The Borrower\u2019s acceptance of these GC shall constitute: (i) the Borrower\u2019s agreement to irrevocably accept and to be unconditionally bound by all the terms and conditions set out in these GC; and (ii) the Borrower\u2019s acknowledgement and confirmation that these GC (along with the Financing Documents) have been duly read and fully understood by the Borrower.</p>\n\n        </td>\n        </tr>\n    </tbody>\n</table>\n<p align=center class=MsoNormal style=\'text-align:center;border:none\'>&nbsp;</p>\n\n\x3c!-- annexure one (MITC section) starts --\x3e\n\n\n<div style="page-break-before:always">&nbsp;</div>\n<div>\n    <img height="50px" width="50px" src="https://cdn.uni.club/assets/backend/dmi_logo.png" style="display: inline-block;">\n    <h3 class="inline-block">DMI FINANCE PRIVATE LIMITED</h3>\n</div>\n\n<p align=center class=MsoNormal\n    style=\'margin-right:8.15pt;text-align:center;\n    border:none\'><u><span style=\'font-size:10.0pt;color:black\'>Annexure</span></u><span\n        style=\'font-size:10.0pt;color:black\'> <u>1</u></span></p>\n\n<p align=center style=\'margin-top:0in;text-align:center\'>\n    <span style=\'font-size:\n        10.0pt;color:black\'>MITC</a></span>\n</p>\n\n\n\n<p style=\'text-align: center;\'><strong>Most Important Terms of the Loan (MITC)</strong></p>\n<p style=\'text-align: center;\'><strong>Section 1: General Product Construct</strong></p>\n\n<div>\n<table\n    style=\'border-color: black;\'\n    border=\'1\'\n    cellspacing=\'0\'\n    cellpadding=\'5\'\n  >\n    <tbody>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><strong>Sl No.</strong></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><strong>Description&nbsp;</strong></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><strong>Particulars</strong></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.1&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Loan Type & End Purpose\n          </span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>The Loan is in the form of a Line\n              of Credit. It shall be referred to as &ldquo;</span><strong>Credit\n              Line</strong><span style=\'font-weight: 400;\'>&rdquo; throughout\n              this MITC. It shall be accessible through the &ldquo;</span><strong\n            >Service Platform</strong><span style=\'font-weight: 400;\'>&rdquo;,\n              namely the website, mobile application or such other platform as\n              made available to the Borrower from time to time.</span></p>\n              <p>The Borrower may use this Credit Line for personal purposes.</p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.2</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Sanction Date</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Sanction Date is the date from\n              which the Borrower can start availing the Loan and the same is\n              mentioned in the Sanction Letter issued to the Borrower.&nbsp;</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.3&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Facility Sanctioned</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Under this Loan Agreement,\n              Lender(s) will provide a term loan in the form of a Credit Line,\n              upto a maximum sum of INR ______ per Borrower. The maximum\n              amount eligible (referred as Eligible Credit Line hereafter) as\n              Loan for each Borrower will be communicated in the Sanction\n              Letter.&nbsp;&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>The Loan is determined on the basis\n              of multitude of factors such as your credit assessment, loan\n              application, timely repayment, etc. by the Lender.&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'></span>Accordingly, Lender reserves the right to increase with the consent the Borrower or decrease or suspend or cancel or modify the Loan /Eligible Credit Line from time to time, depending on these factors or without assigning any reason. The change in Loan will be communicated to the Borrower electronically at the time of change or in a revised Sanction Letter as the case may be. \n          </p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.4&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>The Validity of the Facility</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Loan is valid for ___ months\n              from the Sanction Date.&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>At the expiry or earlier\n              termination of the Loan facility, Lender may, at the request of\n              the Borrower, renew the Loan subject to any applicable due\n              diligence and for further periods at its sole discretion.\n              Documents (if any) required for renewal of the facility to be\n              submitted to Lender</span><strong>, </strong><span\n              style=\'font-weight: 400;\'\n            >at least 30 days before expiry.&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>The Outstanding Balance </span><em\n            ><span style=\'font-weight: 400;\'>(refer 1.9)</span></em><span\n              style=\'font-weight: 400;\'\n            >, if any, at the time of expiry of the Loan will need to be repaid\n              in full.</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.5&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>KYC</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>The Borrower shall share his/her\n              Proof of identity and Proof of address with Lender and the Lender\n              shall validate the same before sanctioning the Loan/line. Lender\n              may also seek KYC of the Borrower at any point of time for ongoing\n              due diligence or regulatory purposes.&nbsp;</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.6</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Transaction&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><strong>Transaction </strong><span style=\'font-weight: 400;\'>refers\n              to every request or order placed by the Borrower for utilizing the\n              Loan facility. This is also referred as &ldquo;Drawdown&rdquo; in\n              this MITC.</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.7</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Drawdowns</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>There will be 2 types of\n            </span><strong>Drawdowns</strong><span\n              style=\'font-weight: 400;\'\n            >.&nbsp;&nbsp;</span></p>\n            <ol style="list-style: lower-roman;">\n              <li> Pay Later</li>\n              <li>EMI</li>\n            </ol>\n          \n          <p><span style=\'font-weight: 400;\'>Please refer to Section 2 for more\n              details on Pay Later Drawdowns.&nbsp;</span></p>\n          <p><span style=\'font-weight: 400;\'>Please note that the default\n              Drawdown shall be Pay Later. Thereafter, Borrower may convert\n              these to EMI. The Borrower may be given the option to directly\n              choose EMI Drawdown. Note that the option and eligibility to\n              convert will be communicated electronically to the Borrower from\n              time to time.&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>Please note that the Lender\n              reserves the right to decline a Drawdown at any time without\n              assigning any reason whatsoever.</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.8&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Outstanding Balance</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><strong>Outstanding Balance </strong><span\n              style=\'font-weight: 400;\'\n            >is the sum of all remaining unpaid Drawdowns at any point of time\n              along with unpaid Fees, Interest or other charges.</span></p>\n          \n          <p><strong>Refund</strong><span style=\'font-weight: 400;\'>(s) for each\n              Drawdown would be adjusted against the Outstanding Balance. At the\n              time of processing refunds, the Borrower will be made aware of the\n              manner of such handling.</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.9&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Statement Date &amp; Statement\n              Period&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>A statement will be generated on a\n              fixed date every month (&ldquo;Statement</span><strong>\n              Date</strong><span style=\'font-weight: 400;\'>&rdquo;). The time\n              duration between one Statement Date to the next is referred to as\n              the &ldquo;</span><strong>Statement Period</strong><span\n              style=\'font-weight: 400;\'\n            >&rdquo; (refer illustration below).&nbsp;&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>The Statement Date may vary for\n              each Borrower depending on the Sanction Date and the same will be\n              communicated to Borrower on the Service Platform.&nbsp;</span></p>\n          <p><span\n              style=\'font-weight: 400;\'\n            >Illustration:&nbsp;&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>If the Borrower&rsquo;s Statement\n              Date is the 26th of every month, then the Statement Period for the\n              user will be from 26th January to 25th February 26th February to\n              25th March, and so on.</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.10</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Statement Amount&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>The Statement</span>\n            <span style=\'font-weight: 400;\'>Amount shall mean the total Drawdown\n              amount(s) in a particular Statement Period.</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>Illustration:</span></p>\n          <p><span style=\'font-weight: 400;\'>If you spent INR 9,000 in a\n              Statement Period, then on the Statement Date, INR 9,000 will be\n              added to the Statement Amount.</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.11&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Due Date</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Due Date can be up to 10 days from\n              Statement Date. Please note that the exact Due Date for payment\n              will be communicated to you on the Service Platform.&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>If the Borrower fails to pay on or\n              before the Due Date, then such default&nbsp;&nbsp;</span></p>\n          <ul style="list-style-type: lower-roman; padding-left: 24px;">\n            <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>Will\n                impact credit rating,&nbsp;</span></li>\n            <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>May\n                lead to suspension of Loan,&nbsp;</span></li>\n            <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>May\n                attract late fees.</span></li>\n          </ul>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.12&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Late Fee</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>You may be charged </span><strong\n            >Late Fee </strong><span style=\'font-weight: 400;\'>by the Lender</span>\n            <span style=\'font-weight: 400;\'>for any delay in repayment of\n              Minimum Instalment (refer to Section 2 and 3) beyond the Due Date.\n              The Late Fee shall be based on the Statement Amount as per\n              below-defined slabs. The Late Fee for the current month&rsquo;s\n              dues shall be charged in the next Statement Amount and shall\n              continue to get charged on a monthly basis, until the dues are\n              cleared.</span></p>\n              <br />\n              Note: Exact slabs will be communicated to you along with the loan agreement. \n              <br />\n              <br />\n              \n          <p><span style=\'font-weight: 400;\'>Illustration:&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>If the Statement Period for the\n              user is from 26th January to 25th February, then the Statement\n              Date would be 26th February and the Due Date for this Statement\n              Period would be 5th March. Let us assume, the Statement Amount is\n              INR 19,500/-. If a Borrower does not pay on or before the 5th of\n              March, a Late Fee of INR 2000/- (say) would be\n              charged to the Borrower. Now, let us further assume that the\n              Borrower has continued to default in the repayment in the next\n              Statement Period also and he has not made any further purchases.\n              Then, on the Due Date of 5th April, on the previous Statement\n              Amount an additional Late Fee of INR 2000 will be levied on the\n              Borrower for the 2nd month of default. Now Borrower needs to be\n              pay Statement Amount + Newly applied Late Fee along with previous\n              month Late Fee i.e., INR 23,500 (19,500 + 2000 + 2000).</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.13&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Communications from Lender</span></p>\n        </td>\n        <td style="border: 1px solid black;" colspan=\'2\'>\n          <p><span style=\'font-weight: 400;\'>Please note that the Lender\n              reserves the right to change this MITC, including changes to fees,\n              charges, interests and others, wholly or partly, from time to time\n              and such change would be notified to the Borrower electronically\n              or on the Service Platform or in the Sanction Letter.&nbsp;&nbsp;</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>Details specific to a Borrower,\n              which are not part of this MITC, will be available in the Sanction\n              Letter, Key Fact Statement (KFS) or on Service Platform.&nbsp;</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>1.14</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Taxes&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;" colspan=\'2\'>\n          <p><span style=\'font-weight: 400;\'>All fees and charges shall be\n              exclusive of applicable taxes, except wherever mentioned.</span></p>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p style=\'text-align: center;\'><strong>Section 2: Pay Later Drawdown</strong></p>\n<p style=\'text-align: center;\'><em><span style=\'font-weight: 400;\'>(Note: This\n      includes Pay in Full early repayment option. All the mentioned details in\n      Section 1 are applicable for this section as well, until expressly\n      modified under this section.)</span></em></p>\n\n<div>\n  <table\n    style=\'border-color: black;\'\n    border=\'1\'\n    cellspacing=\'0\'\n    cellpadding=\'5\'\n  >\n    <tbody>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><strong>Sl&nbsp;</strong></p>\n          <p><strong>No&nbsp;</strong></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><strong>Description&nbsp;</strong></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><strong>Particulars</strong></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>2.1&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Repayment options for Pay Later</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>For the Pay Later, the Borrower can\n              choose the following repayment options:&nbsp;</span></p>\n          <ol>\n            <li style=\'font-weight: 400;\'><strong>Regular payment option:\n              </strong><span style=\'font-weight: 400;\'>The Customer may choose\n                to pay the Drawdown amount in up to 24 instalments, subject to\n                Minimum Instalment. For availing this option, the customer has\n                to pay a Carry Forward Fee</span><strong>. </strong><span\n                style=\'font-weight: 400;\'\n              >Please refer Section 2.2 for a detailed illustration</span><strong\n              >.</strong><span style=\'font-weight: 400;\'>&nbsp;</span></li>\n          </ol>\n          \n          <ol>\n            <li style=\'font-weight: 400;\'><strong>Pay in Full early repayment\n                option:\n              </strong><span style=\'font-weight: 400;\'>The Customer may choose\n                to pay the complete Drawdown amount on or before the first Due\n                Date. No Carry Forward Fee is chargeable for this repayment\n                option. If you spent INR 9,000 in a Statement Period, then on or\n                before the Due Date, Borrower needs to pay INR 9,000.</span></li>\n          </ol>\n          \n          <p><span style=\'font-weight: 400;\'>The Borrower may have an option for\n              converting Pay Later Drawdown to EMI type.</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'> 2.2</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Repayment Schedule for Pay Later</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>This is the repayment schedule for\n              regular payment option.&nbsp;</span></p>\n          <p><span style=\'font-weight: 400;\'>Illustration:&nbsp;</span></p>\n          <p><span style=\'font-weight: 400;\'>The below illustration details a\n              Repayment Schedule of a drawdown for INR 15,000/- and chooses to\n              Pay in Full type and only pays Minimum Instalment for a max tenure\n              of 24 months.&nbsp;</span></p>\n          \n          <ul>\n            <li style=\'font-weight: 400;\'><span\n                style=\'font-weight: 400;\'\n              >Drawdown Amount = INR 15000/-&nbsp;</span></li>\n            <li style=\'font-weight: 400;\'><span\n                style=\'font-weight: 400;\'\n              >Maximum repayment tenure = 24 months.&nbsp;</span></li>\n            <li style=\'font-weight: 400;\'><span\n                style=\'font-weight: 400;\'\n              >Minimum Instalment = 7.5% of Outstanding Balance of Pay Later +\n                Carry Forward Fee.</span></li>\n            <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>Carry\n                Forward Amount = Principal to be paid - Principal Paid&nbsp;</span></li>\n            <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>Carry\n                Forward Fee = 4% of Carry Forward Amount (for this example)</span></li>\n          </ul>\n          \n          \n<table\n            style=\'border-color: black;\'\n            cellspacing=\'0\'\n            cellpadding=\'5\'\n          >\n            <tbody>\n              <tr>\n                <td style="border: 1px solid black;"><b>Instalment <br />No.</b></td>\n                <td style="border: 1px solid black;">\n                  <p><strong>Due Date</strong></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><strong>Principal to be paid</strong></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><strong>Principal Paid</strong></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><strong>Remaining Principal</strong></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><strong>Carry Forward Amount</strong></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><strong>Carry Forward Fees levied</strong></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><strong>Minimum Instalment</strong></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">1</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Feb-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1125</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1125</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>13875</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>13875</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>555</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1680</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">2</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Mar-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1041</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1041</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>12834</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>12834</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>513</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1554</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">3</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Apr-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>963</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>963</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>11872</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>11872</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>475</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1437</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">4</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-May-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>890</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>890</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>10981</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>10981</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>439</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1330</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">5</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Jun-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>824</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>824</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>10158</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>10158</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>406</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1230</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">6</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Jul-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>762</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>762</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>9396</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>9396</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>376</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1138</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">7</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Aug-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>705</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>705</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>8691</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>8691</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>348</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>1052</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">8</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Sep-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>652</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>652</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>8039</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>8039</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>322</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>973</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">9</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Oct-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>603</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>603</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>7436</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>7436</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>297</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>900</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">10</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Nov-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>558</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>558</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>6879</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>6879</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>275</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>833</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">11</td> \n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Dec-21</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>516</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>516</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>6363</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>6363</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>255</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>770</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">12</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Jan-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>477</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>477</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5886</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5886</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>235</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>713</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">13</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Feb-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>441</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>441</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5444</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5444</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>218</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>659</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">14</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Mar-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>408</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>408</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5036</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5036</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>201</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>610</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">15</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Apr-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>378</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>378</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>4658</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>4658</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>186</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>564</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">16</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-May-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>349</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>349</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>4309</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>4309</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>172</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>522</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">17</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Jun-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>323</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>323</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>3986</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>3986</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>159</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>483</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">18</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Jul-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>299</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>299</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>3687</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>3687</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>147</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>446</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">19</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Aug-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>277</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>277</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>3410</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>3410</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>136</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>413</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">20</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Sep-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>256</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>256</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>3154</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>3154</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>126</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>382</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">21</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Oct-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>237</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>237</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>2918</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>2918</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>117</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>353</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">22</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Nov-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>219</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>219</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>2699</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>2699</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>108</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>327</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">23</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Dec-22</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>202</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>202</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>2497</span></p>\n                </td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>2497</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>100</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>302</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">24</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>5-Jan-23</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>2497</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>2497</span></p>\n                </td>\n                <td style="border: 1px solid black;">&nbsp;</td>\n                <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>0</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>0</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>2497</span></p>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>2.3</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Carry Forward Fee</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>If you choose to pay any amount\n              less than the Drawdown amount, a Carry Forward Fee of up to __%\n              would be charged upfront by the Lender, immediately after due date\n              on the Carry Forward Amount. The exact amount of Carry Forward\n              Fees for the Borrower will be communicated electronically at the\n              time of repayment.</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>Illustration:</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>If the Statement Period for the\n              user is from 26th January to 25th February, then the Statement\n              Date would be 26th February and the Due Date for this Period would\n              be 5th March.</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>Let us assume, Outstanding Balance\n              of INR 40,000/- and Minimum Instalment is 7.5% (say) of the\n              Outstanding Balance i.e., INR 3000/-. If a Borrower pays the\n              amount of INR 3000/- then a Carry Forward Fees of 3.5% will to be\n              charged on the Carry Forward Amount of INR 37,000/-.</span></p>\n          \n          <p><span style=\'font-weight: 400;\'>Hence, Carry Forward Fees of INR\n              37,000 * 3.5% = INR 1295/- would be charged upfront along with INR\n              3000/- and Carry Forward Amount of 37,000/- will be added to next\n              statement period.</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>2.3&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Prepayment of Draw-down</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>The Borrower may wish to pre-pay\n              the Loan before Statement Date. Such pre-payment will be without\n              any charges; however, the Lender reserves the right to modify this\n              from time to time.&nbsp;</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>2.4</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Pre-closure&nbsp;</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Borrower may also have the option\n              to pre-close or foreclosure before the end of the tenure of the\n              Drawdown. No pre-closure charges will be levied. However, Lender\n              reserves the right to modify this from time to time.</span></p>\n        </td>\n      </tr>\n      <tr>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>2.7</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>Charges</span></p>\n        </td>\n        <td style="border: 1px solid black;">\n          <p><span style=\'font-weight: 400;\'>The Loan may be utilized for\n              various purpose or end use, subject to additional charges. The\n              charges applicable for the Pay Later are as below:</span></p>\n          \n          <table\n            style=\'border-color: black;\'\n            border=\'1\'\n            cellspacing=\'0\'\n            cellpadding=\'5\'\n          >\n            <tbody>\n              <tr>\n                <td style="border: 1px solid black;">\n                  <p><strong>Purpose&nbsp;</strong></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><strong>Convenience Fee</strong></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>Ad hoc request for Bank\n                      transfers, cash withdrawals or on other channels</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>Upto __% on Drawdown Amount</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td rowspan=\'2\'>\n                  <p><span style=\'font-weight: 400;\'>Pre-fixed request for Bank\n                      transfers</span></p>\n                </td>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>No charges if the customer\n                      requests pre fixed&nbsp; transfer on specific date(s) as\n                      communicated in the service platform and charges up to __%\n                      otherwise</span>\n                    <span style=\'font-weight: 400;\'>subject to discretion of the\n                      Lender.</span></p>\n                </td>\n              </tr>\n              <tr>\n                <td style="border: 1px solid black;">\n                  <p><span style=\'font-weight: 400;\'>Annual fee of up to Rs.\n                      ___/- p.a, may be levied for availing this service if/as\n                      mentioned on the Service Platform.</span></p>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<p style="text-align: center;"><strong>Section 3: EMI Drawdowns</strong></p>\n<p style="text-align: center;"><em><span style="font-weight: 400;">(Note: All the mentioned details in Section 1 are applicable for the EMI section as well unless mentioned explicitly otherwise)</span></em></p>\n\n<table style="border-color: black;" border="1" cellspacing="0" cellpadding="5">\n  <tbody>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><strong>Sl&nbsp;</strong></p>\n  <p><strong>No.&nbsp;</strong></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><strong>Description&nbsp;</strong></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><strong>Particulars</strong></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3.1</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">EMI&nbsp;</span></p>\n  <p><span style="font-weight: 400;">Conversions &amp; Tenures</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">EMI Tenure can range up to a maximum of 24 months.&nbsp;</span></p>\n  \n  <p><span style="font-weight: 400;">The Borrower may have an option for converting Pay Later type Drawdown to EMI of his/her own choice of the tenure through Service Platform before the relevant Due Date.&nbsp;</span></p>\n  <p><span style="font-weight: 400;">Alternatively, in some cases, the Borrower may be given the option to directly choose EMI Drawdown at the time of any Drawdown.&nbsp;</span></p>\n  <p><span style="font-weight: 400;">Drawdowns at certain merchant categories are excluded from EMI conversions as mentioned in Section 3.7.</span></p>\n  <p><span style="font-weight: 400;">Note that for EMI Drawdowns, the Borrower needs to the pay back the entire Statement Amount on or before the Due Date, failing which applicable late fee, penalties etc. may be charged to the Borrower</span></p>\n  <p><span style="font-weight: 400;">Please note that the Lender reserves the right to decline a Drawdown from EMI conversion at any time without assigning any reason whatsoever.</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3.2</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Repayment&nbsp;</span></p>\n  <p><span style="font-weight: 400;">Schedule for&nbsp;</span></p>\n  <p><span style="font-weight: 400;">EMI</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Borrower needs to pay Minimum Instalment on or before the Due Date to avoid any late fees.</span></p>\n  \n  <p><span style="font-weight: 400;">Illustration:</span></p>\n  <p><span style="font-weight: 400;">Sample EMI Repayment Schedule:</span></p>\n  <ul>\n  <li style="font-weight: 400;"><span style="font-weight: 400;">Drawdown Amount = INR 18000/-&nbsp;</span></li>\n  <li style="font-weight: 400;"><span style="font-weight: 400;">Repayment tenure = 6 months.</span></li>\n  <li style="font-weight: 400;"><span style="font-weight: 400;">APR = 24%</span></li>\n  <li style="font-weight: 400;"><span style="font-weight: 400;">EMI as per to reducing principal method = INR 3213.46/-&nbsp;</span></li>\n  <li style="font-weight: 400;"><span style="font-weight: 400;">Minimum Instalment = EMI itself.</span></li>\n  </ul>\n  \n  <table style="border-color: black;" border="1" cellspacing="0" cellpadding="5">\n  <tbody>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Month</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Principal</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Interest</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Loan Outstanding&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">EMI</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">&nbsp;</td>\n  <td style="border: 1px solid black;">&nbsp;</td>\n  <td style="border: 1px solid black;">&nbsp;</td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">18000.00</span></p>\n  </td>\n  <td style="border: 1px solid black;">&nbsp;</td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">M1&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">2853.46&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">360.00&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">15146.54&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3213.46</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">M2&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">2910.53&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">302.93&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">12236.00&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3213.46</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">M3&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">2968.74&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">244.72&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">9267.26&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3213.46</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">M4&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3028.12&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">185.35&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">6239.14&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3213.46</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">M5&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3088.68&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">124.78&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3150.46&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3213.46</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">M6&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3150.46&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">63.01&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">0.00&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3213.46</span></p>\n  </td>\n  </tr>\n  </tbody>\n  </table>\n  \n  <p><span style="font-weight: 400;">Note:</span></p>\n  <ul>\n  <li style="font-weight: 400;"><span style="font-weight: 400;">Consequent to the calculation of interest on a daily basis, the EMI may vary for a particular month and shall be adjusted (in a manner decided by the lender from time to time) and the same shall be communicated to the borrower via the service platform.&nbsp;</span></li>\n  <li style="font-weight: 400;"><span style="font-weight: 400;">For the First EMI, the Interest will be calculated from the date of the drawdown</span></li>\n  </ul>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3.3&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Prepayment of&nbsp;</span></p>\n  <p><span style="font-weight: 400;">Draw Down</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Borrower may have the option to pre-pay EMI Drawdowns before the Statement Date. There would be no prepayment charges levied in case of Borrower choosing this option.</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3.4</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Pre-closure of an EMI Type&nbsp;</span></p>\n  <p><span style="font-weight: 400;">Drawdowns</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Borrower would have the option to pre-close or foreclose the EMI type of Drawdown fully before the end of the tenure of such Drawdown. There would be no pre closure charges levied in case of Borrower choosing this option. The Borrower may be eligible to receive Interest Waiver</span> <span style="font-weight: 400;">on all the pre-closed/ foreclosed EMI(s) which are not yet due in the immediate Statement Period. This will be communicated to the Borrower electronically.&nbsp;</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">3.5</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Charges&nbsp;</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">The charges applicable for EMI are as below:</span></p>\n  \n  <table style="border-color: black;" border="1" cellspacing="0" cellpadding="5">\n  <tbody>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><strong>Description&nbsp;</strong></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><strong>Processing Fee&nbsp;</strong></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><strong>Interest</strong></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Bank transfers, cash withdrawals or on other channels</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Up to a maximum of __% of the Drawdown Amount</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Up to APR of __%</span></p>\n  </td>\n  </tr>\n  <tr>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Pre-fixed request for Bank transfers</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Up to a maximum of __% of the Drawdown Amount</span></p>\n  </td>\n  <td style="border: 1px solid black;">\n  <p><span style="font-weight: 400;">Up to APR of __%</span></p>\n  </td>\n  </tr>\n  </tbody>\n  </table>\n  </td>\n  </tr>\n  </tbody>\n  </table>\n<br />\n<b\n></span\n></b\n><b\n><span style=" color: black"\n>Grievance:\n</span></b\n>\n</p>\n  <p><strong>Nodal grievance redressal officer of LSP</strong></p>\n  <p>Mr Danish Mirza\n    <br />Contact: 080 6821 6821<br />Email ID: care@uni.club, <a href="mailto:gro@uni.club">gro@uni.club</a></p>\n  <p><br />Address: <br />Branch Office,<br />Uniorbit Technologies Pvt Ltd.<br />Obeya Zing, No 80/3<br />Gayathri Mansion, 2nd &amp; 4th Floor<br />Dr. Puneeth Rajkumar Road,<br />Above Toyota showroom, <br />Bellandur, Bangalore 560103</p>\n  <br />\n  <p><strong>Grievance redressal officer of DMI Finance Pvt Ltd</strong></p>\n  <p>Mr. Ashish Sarin, Senior Vice President - Customer Success<br />Contact: 011-41204444<br />Email ID: head.services@dmifinance.in, grievance@dmifinance.in<br /><br />Address: Express Building, 3rd Floor, 9-10, Bahadur Shah Zafar Marg, New Delhi-110002<br />\n    <br />Grievances portal: https://www.dmifinance.in/investor-grievance-redressal.html</p>\n\n<div class=\'footer\' style=\'padding-top: 40px\'>\n<div><b>Website</b> - <a href="https://www.dmifinance.in">www.dmifinance.in</a></div>\n<div><b>Customer Portal</b> - <a href=\'https://portal.dmifinance\'>https://portal.dmifinance.in/</a></div>\n<div><b>WhatsApp</b> - 93506 57100 (<a href=\'https://bit.ly/DMIFINWA\'>https://bit.ly/DMIFINWA</a>)</div>\n<br />\n</div> \n</div>\n',
                logoUrl: ""
            }
        }
          , L = {
            name: "northern_arc",
            content: '\n<div style="padding-bottom: 30px">\n<table style="width:100%">\n<tr>\n  <td>\n  <a href="https://www.northernarc.com/">\n    <img src="https://email-assets.uni.club/images/na.png" alt=\'na_png\' width=150\n      height=90 />\n  </a>\n  </td>\n</tr>\n</table>\n\n  <div>\n    <p class="p1" style="text-align: center;"><strong>APPLICATION FORM</strong></p>\n    <p class="p3"><strong>I. &nbsp; &nbsp;INTRODUCTION</strong></p>\n    <ol>\n      <li style="padding-bottom:20px">1. This application form together with its schedule\n        (&ldquo;<strong>MITC</strong>&rdquo;) and annexure\n        (&ldquo;<strong>Loan Terms and</strong><strong>Conditions</strong>&rdquo;) appended hereto constitutes the loan\n        application (hereinafter referred to as the\n        &ldquo;<strong>Loan</strong><strong>Application</strong>&rdquo;).&nbsp;</li>\n      <li style="padding-bottom:20px">2. All applicants and co-applicants (if any) (collectively,\n        &ldquo;<strong>Applicant</strong>&rdquo; or\n        &ldquo;<strong>Borrower</strong>&rdquo;), which expression shall mean each one of them unless repugnant to the\n        context and shall also mean and include their legal heirs, representatives in interest, executors,\n        administrators, successors and permitted assigns as the context may admit or require) who wish to avail of the\n        Loan (<em>as defined hereinafter</em>) from the Lender (<em>as defined hereinafter)</em> may apply for the same\n        by submitting the Loan Application complete in all respects along with supporting documents to the Service\n        Platform (<em>as defined hereinafter)</em>.&nbsp;</li>\n      <li style="padding-bottom:20px">3. Request of the Loan by Applicant vide the Loan Application, sanction of the Loan\n        by Lender, disbursement of\n        the Loan, repayment of the Loan and payment of interest thereon along with other monies payable, and other\n        incidental and ancillary matters in relation to the Loan shall be subject to and governed by the terms and\n        conditions contained in the Loan Documents. <strong>Loan Documents</strong> means the Loan Application,\n        Repayment Schedule, Sanction Letter and includes all writings and other agreement(s), document(s) or deed(s)\n        executed or entered into, or to be executed or entered into, by the Applicant or, as the case may be, any other\n        person, in relation, or pertaining, to the Loan and each such Loan Document as amended from time to time and\n        &ldquo;<strong>Loan Document</strong>&rdquo; shall mean any one of them.</li>\n      <li style="padding-bottom:20px">4. Submission of the Loan Application to the Service Platform constitutes an\n        expression of willingness to\n        contract on the Loan Terms and Conditions and Most Important Terms of the Loan, made with an express intention\n        that it is to become binding on the Applicant irrevocably as soon as it is submitted to the Service Platform and\n        the Applicant hereby expressly acknowledges that the disbursement of the Loan (or any part thereof) shall\n        constitute such acceptance by the Lender resulting in formation of a binding contract between the Applicant and\n        the Lender. PROVIDED HOWEVER, the absolute discretion to accept or reject the Loan Application submitted by the\n        Applicant shall be with the Lender.&nbsp;</li>\n      <li style="padding-bottom:20px"><strong>5. Neither</strong><strong>the submission of the Loan Application by the\n          Applicant to the Service\n          Platform nor the receipt of the Loan Application by the Service Platform constitutes any commitment from any\n          Lender to lend (on either an express or implied basis) and does not impose any obligations on any\n          Lender.</strong></li>\n      <li style="padding-bottom:20px">6. All capitalised terms used but not specifically defined hereinabove shall have the\n        respective meanings given\n        to such terms in the Loan Terms and Conditions.</li>\n    </ol>\n\n    <p class="p3"><strong>II. &nbsp; &nbsp;DETAILS OF THE APPLICANT (INCLUDING CO-APPLICANT(S), IF ANY)</strong></p>\n\n\n\n\n\n    <p class="p3"><strong>II. &nbsp; &nbsp; DETAILS OF THE LOAN AND OTHER CHARGES</strong></p>\n    <em>As detailed in Schedule I (MITC) below. </em>\n\n    <p class="p3"><strong>II. &nbsp; &nbsp; DECLARATIONS/UNDERTAKINGS</strong></p>\n\n    <ol>\n      <li>1. I/We declare that all the particulars and information and details given/filled in this Loan Application are\n        true, correct, complete and up-to-date in all respects and that I/we have not withheld any information\n        whatsoever. I / We agree and confirm that the Schedule and Annexure appended hereto are deemed to be an integral\n        part of the Loan Application.</li>\n      <li>2. I/we do hereby represent, warrant, make and confirm to Lender each of the representations, declarations,\n        warranties and confirmations set out in the Loan Application and do hereby further represent, warrant and\n        confirm to Lender that each of such representations, declarations, warranties and confirmations are, true,\n        correct, valid and subsisting in every respect as of the date of this Loan Application, and all such\n        representations, declarations, warranties and agreements shall survive the submission of this Loan Application,\n        the provision of the Loan pursuant to this Loan Application and the repayment/payment in full of the Loan and\n        all monies in respect thereof.</li>\n      <li>3. I/We confirm that no insolvency proceedings or suits for recovery of outstanding dues or monies whatsoever or\n        for attachment of my/our assets or properties and/or any criminal proceedings have been initiated and/or are\n        impending against me/us and that I/we have never been adjudicated insolvent by any court or other authority.\n        I/We have not taken any action and no other steps have been taken or legal proceedings started by or against\n        me/us in any court of law / other authorities for winding up, dissolution, administration or re-organisation or\n        for the appointment of a receiver, administrator, administrative receiver, trustee or similar officer or for\n        my/our assets.</li>\n      <li>4. I/We confirm that I/we shall use the Loan only for the end use specified in the Schedule and the Loan shall\n        not be used for any improper or illegal or unlawful purposes/activities.</li>\n      <li>5. I/We have fully read and understood all the terms and conditions contained in this Loan Application (including\n        but not limited to the Schedule and the Annexure), copy of which has been provided to me/us.</li>\n\n\n\n\n      <li>6. I /We acknowledge and agree that the grant of the Loan by Lender to me / us shall be subject to compliance by\n        me / us of the terms and conditions contained in the Loan Application and other Loan Documents.&nbsp;</li>\n      <li>7. I/We confirm that all details and terms (including the amount of the Loan, rate of interest, default interest\n        rate, charges and fees) have been filled-in this Loan Application (including the Schedule of Details) prior to\n        submission of the same to Service Platform and that there are no blanks.&nbsp;</li>\n      <li>8. I/We understand and acknowledge that the Loan if provided by Lender, based on this Loan Application submitted\n        by me/us, is a commercial transaction and I/we waive any defence under usury or other laws relating to the\n        charging of the interest.</li>\n      <li>9. I/We understand and acknowledge that Lender shall have the absolute discretion, without assigning any reasons\n        (unless required by applicable law), to reject our application and not sanction/disburse the Loan and that\n        Lender shall not be responsible/liable in any manner whatsoever to me/us for such rejection or any delay in\n        notifying me/us of such rejection and any costs, losses, damages or expenses, or other consequences, caused by\n        reason of such rejection/non-disbursement or any delay in notifying me/us of such rejection / non-disbursement.\n      </li>\n      <li>10. This Loan Application has been duly and validly executed by me/us or on my/our behalf and when accepted/acted\n        upon by Lender/Service Platform would constitute legal and valid obligations that are binding on and enforceable\n        against me/us in accordance with the terms and conditions contained in the Loan Documents.&nbsp;</li>\n      <li>11. I/We have exercised due care and caution and have made well informed independent decision (including if\n        necessary, obtaining of advise of tax/legal/accounting/financial/other professionals) prior to applying for the\n        Loan and signing the Loan Documents.</li>\n      <li>12. I understand and acknowledge that the rate of interest for the same product and tenor sanction by the Lender\n        during same period by different customers need not be the same. It could vary for different customers depending\n        upon consideration of all or combination of multiple factors including but not limited to the following:\n      \n        </li>\n        </ol>\n        <br/>\n        <ul>\n        <li>i. Credit and default risk in the related business segment&nbsp;</li>\n        <li>ii. Historical performance of similar homogeneous clients&nbsp;</li>\n        <li>iii.Profile of the applicant&nbsp;</li>\n        <li>iv.Industry segment&nbsp;</li>\n        <li>v.Repayment track record of the applicant</li>\n        <li>vi.Nature and value of collateral security&nbsp;</li>\n        <li>vii.Secured Vs unsecured loan&nbsp;</li>\n        <li>viii.Loan ticket size&nbsp;</li>\n        <li>ix.Credit rating of the applicant</li>\n        <li>x.Loan tenor&nbsp;</li>\n        <li>xi.Location delinquency and collection performance&nbsp;</li>\n        <li>xii.Other indebtedness of the applicant</li>\n      </ul>\n    <p style="padding-top:60px"><strong>FOR AND ON BEHALF OF APPLICANT</strong></p>\n  </div>\n\n  \n\n  \x3c!-- annexure one (MITC section) starts --\x3e\n\n\n  <p align=center class=MsoNormal style=\'margin-right:8.15pt;text-align:center;\n                border:none\'><u><span style=\'font-size:10.0pt;color:black\'>Schedule</span></u><span\n      style=\'font-size:10.0pt;color:black\'> <u>1</u></span></p>\n\n  <p align=center style=\'margin-top:0in;text-align:center\'>\n    <span style=\'font-size:\n                    10.0pt;color:black\'>MITC</a></span>\n  </p>\n  <p align=center style=\'margin-top:0in;text-align:center\'>\n    <span style=\'font-size:\n                    10.0pt;color:black\'>Details of the Loan as mentioned in the Sanction Letter</a></span>\n  </p>\n\n\n\n  <p style=\'text-align: center;\'><strong>Most Important Terms of the Loan (MITC)</strong></p>\n  <p style=\'text-align: center;\'><strong>Section 1: General Product Construct</strong></p>\n  \n  <div>\n  <table\n      style=\'border-color: black;\'\n      border=\'1\'\n      cellspacing=\'0\'\n      cellpadding=\'5\'\n    >\n      <tbody>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><strong>Sl No.</strong></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><strong>Description&nbsp;</strong></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><strong>Particulars</strong></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.1&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Loan Type & End Purpose\n            </span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>The Loan is in the form of a Line\n                of Credit. It shall be referred to as &ldquo;</span><strong>Credit\n                Line</strong><span style=\'font-weight: 400;\'>&rdquo; throughout\n                this MITC. It shall be accessible through the &ldquo;</span><strong\n              >Service Platform</strong><span style=\'font-weight: 400;\'>&rdquo;,\n                namely the website, mobile application or such other platform as\n                made available to the Borrower from time to time.</span></p>\n                <p>The Borrower may use this Credit Line for personal purposes.</p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.2</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Sanction Date</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Sanction Date is the date from\n                which the Borrower can start availing the Loan and the same is\n                mentioned in the Sanction Letter issued to the Borrower.&nbsp;</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.3&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Facility Sanctioned</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Under this Loan Agreement,\n                Lender(s) will provide a term loan in the form of a Credit Line,\n                upto a maximum sum of INR ______ per Borrower. The maximum\n                amount eligible (referred as Eligible Credit Line hereafter) as\n                Loan for each Borrower will be communicated in the Sanction\n                Letter.&nbsp;&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>The Loan is determined on the basis\n                of multitude of factors such as your credit assessment, loan\n                application, timely repayment, etc. by the Lender.&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'></span>Accordingly, Lender reserves the right to increase with the consent the Borrower or decrease or suspend or cancel or modify the Loan /Eligible Credit Line from time to time, depending on these factors or without assigning any reason. The change in Loan will be communicated to the Borrower electronically at the time of change or in a revised Sanction Letter as the case may be. \n            </p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.4&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>The Validity of the Facility</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Loan is valid for ___ months\n                from the Sanction Date.&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>At the expiry or earlier\n                termination of the Loan facility, Lender may, at the request of\n                the Borrower, renew the Loan subject to any applicable due\n                diligence and for further periods at its sole discretion.\n                Documents (if any) required for renewal of the facility to be\n                submitted to Lender</span><strong>, </strong><span\n                style=\'font-weight: 400;\'\n              >at least 30 days before expiry.&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>The Outstanding Balance </span><em\n              ><span style=\'font-weight: 400;\'>(refer 1.9)</span></em><span\n                style=\'font-weight: 400;\'\n              >, if any, at the time of expiry of the Loan will need to be repaid\n                in full.</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.5&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>KYC</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>The Borrower shall share his/her\n                Proof of identity and Proof of address with Lender and the Lender\n                shall validate the same before sanctioning the Loan/line. Lender\n                may also seek KYC of the Borrower at any point of time for ongoing\n                due diligence or regulatory purposes.&nbsp;</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.6</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Transaction&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><strong>Transaction </strong><span style=\'font-weight: 400;\'>refers\n                to every request or order placed by the Borrower for utilizing the\n                Loan facility. This is also referred as &ldquo;Drawdown&rdquo; in\n                this MITC.</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.7</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Drawdowns</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>There will be 2 types of\n              </span><strong>Drawdowns</strong><span\n                style=\'font-weight: 400;\'\n              >.&nbsp;&nbsp;</span></p>\n              <ol style="list-style: lower-roman;">\n                <li> Pay Later</li>\n                <li>EMI</li>\n              </ol>\n            \n            <p><span style=\'font-weight: 400;\'>Please refer to Section 2 for more\n                details on Pay Later Drawdowns.&nbsp;</span></p>\n            <p><span style=\'font-weight: 400;\'>Please note that the default\n                Drawdown shall be Pay Later. Thereafter, Borrower may convert\n                these to EMI. The Borrower may be given the option to directly\n                choose EMI Drawdown. Note that the option and eligibility to\n                convert will be communicated electronically to the Borrower from\n                time to time.&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>Please note that the Lender\n                reserves the right to decline a Drawdown at any time without\n                assigning any reason whatsoever.</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.8&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Outstanding Balance</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><strong>Outstanding Balance </strong><span\n                style=\'font-weight: 400;\'\n              >is the sum of all remaining unpaid Drawdowns at any point of time\n                along with unpaid Fees, Interest or other charges.</span></p>\n            \n            <p><strong>Refund</strong><span style=\'font-weight: 400;\'>(s) for each\n                Drawdown would be adjusted against the Outstanding Balance. At the\n                time of processing refunds, the Borrower will be made aware of the\n                manner of such handling.</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.9&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Statement Date &amp; Statement\n                Period&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>A statement will be generated on a\n                fixed date every month (&ldquo;Statement</span><strong>\n                Date</strong><span style=\'font-weight: 400;\'>&rdquo;). The time\n                duration between one Statement Date to the next is referred to as\n                the &ldquo;</span><strong>Statement Period</strong><span\n                style=\'font-weight: 400;\'\n              >&rdquo; (refer illustration below).&nbsp;&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>The Statement Date may vary for\n                each Borrower depending on the Sanction Date and the same will be\n                communicated to Borrower on the Service Platform.&nbsp;</span></p>\n            <p><span\n                style=\'font-weight: 400;\'\n              >Illustration:&nbsp;&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>If the Borrower&rsquo;s Statement\n                Date is the 26th of every month, then the Statement Period for the\n                user will be from 26th January to 25th February 26th February to\n                25th March, and so on.</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.10</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Statement Amount&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>The Statement</span>\n              <span style=\'font-weight: 400;\'>Amount shall mean the total Drawdown\n                amount(s) in a particular Statement Period.</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>Illustration:</span></p>\n            <p><span style=\'font-weight: 400;\'>If you spent INR 9,000 in a\n                Statement Period, then on the Statement Date, INR 9,000 will be\n                added to the Statement Amount.</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.11&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Due Date</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Due Date can be up to 10 days from\n                Statement Date. Please note that the exact Due Date for payment\n                will be communicated to you on the Service Platform.&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>If the Borrower fails to pay on or\n                before the Due Date, then such default&nbsp;&nbsp;</span></p>\n            <ul style="list-style-type: lower-roman; padding-left: 24px;">\n              <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>Will\n                  impact credit rating,&nbsp;</span></li>\n              <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>May\n                  lead to suspension of Loan,&nbsp;</span></li>\n              <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>May\n                  attract late fees.</span></li>\n            </ul>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.12&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Late Fee</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>You may be charged </span><strong\n              >Late Fee </strong><span style=\'font-weight: 400;\'>by the Lender</span>\n              <span style=\'font-weight: 400;\'>for any delay in repayment of\n                Minimum Instalment (refer to Section 2 and 3) beyond the Due Date.\n                The Late Fee shall be based on the Statement Amount as per\n                below-defined slabs. The Late Fee for the current month&rsquo;s\n                dues shall be charged in the next Statement Amount and shall\n                continue to get charged on a monthly basis, until the dues are\n                cleared.</span></p>\n                <br />\n                Note: Exact slabs will be communicated to you along with the loan agreement. \n                <br />\n                <br />\n                \n            <p><span style=\'font-weight: 400;\'>Illustration:&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>If the Statement Period for the\n                user is from 26th January to 25th February, then the Statement\n                Date would be 26th February and the Due Date for this Statement\n                Period would be 5th March. Let us assume, the Statement Amount is\n                INR 19,500/-. If a Borrower does not pay on or before the 5th of\n                March, a Late Fee of INR 2000/- (say) would be\n                charged to the Borrower. Now, let us further assume that the\n                Borrower has continued to default in the repayment in the next\n                Statement Period also and he has not made any further purchases.\n                Then, on the Due Date of 5th April, on the previous Statement\n                Amount an additional Late Fee of INR 2000 will be levied on the\n                Borrower for the 2nd month of default. Now Borrower needs to be\n                pay Statement Amount + Newly applied Late Fee along with previous\n                month Late Fee i.e., INR 23,500 (19,500 + 2000 + 2000).</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.13&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Communications from Lender</span></p>\n          </td>\n          <td style="border: 1px solid black;" colspan=\'2\'>\n            <p><span style=\'font-weight: 400;\'>Please note that the Lender\n                reserves the right to change this MITC, including changes to fees,\n                charges, interests and others, wholly or partly, from time to time\n                and such change would be notified to the Borrower electronically\n                or on the Service Platform or in the Sanction Letter.&nbsp;&nbsp;</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>Details specific to a Borrower,\n                which are not part of this MITC, will be available in the Sanction\n                Letter, Key Fact Statement (KFS) or on Service Platform.&nbsp;</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>1.14</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Taxes&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;" colspan=\'2\'>\n            <p><span style=\'font-weight: 400;\'>All fees and charges shall be\n                exclusive of applicable taxes, except wherever mentioned.</span></p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  \n  <p style=\'text-align: center;\'><strong>Section 2: Pay Later Drawdown</strong></p>\n  <p style=\'text-align: center;\'><em><span style=\'font-weight: 400;\'>(Note: This\n        includes Pay in Full early repayment option. All the mentioned details in\n        Section 1 are applicable for this section as well, until expressly\n        modified under this section.)</span></em></p>\n  \n  <div>\n    <table\n      style=\'border-color: black;\'\n      border=\'1\'\n      cellspacing=\'0\'\n      cellpadding=\'5\'\n    >\n      <tbody>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><strong>Sl&nbsp;</strong></p>\n            <p><strong>No&nbsp;</strong></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><strong>Description&nbsp;</strong></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><strong>Particulars</strong></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>2.1&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Repayment options for Pay Later</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>For the Pay Later, the Borrower can\n                choose the following repayment options:&nbsp;</span></p>\n            <ol>\n              <li style=\'font-weight: 400;\'><strong>Regular payment option:\n                </strong><span style=\'font-weight: 400;\'>The Customer may choose\n                  to pay the Drawdown amount in up to 24 instalments, subject to\n                  Minimum Instalment. For availing this option, the customer has\n                  to pay a Carry Forward Fee</span><strong>. </strong><span\n                  style=\'font-weight: 400;\'\n                >Please refer Section 2.2 for a detailed illustration</span><strong\n                >.</strong><span style=\'font-weight: 400;\'>&nbsp;</span></li>\n            </ol>\n            \n            <ol>\n              <li style=\'font-weight: 400;\'><strong>Pay in Full early repayment\n                  option:\n                </strong><span style=\'font-weight: 400;\'>The Customer may choose\n                  to pay the complete Drawdown amount on or before the first Due\n                  Date. No Carry Forward Fee is chargeable for this repayment\n                  option. If you spent INR 9,000 in a Statement Period, then on or\n                  before the Due Date, Borrower needs to pay INR 9,000.</span></li>\n            </ol>\n            \n            <p><span style=\'font-weight: 400;\'>The Borrower may have an option for\n                converting Pay Later Drawdown to EMI type.</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'> 2.2</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Repayment Schedule for Pay Later</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>This is the repayment schedule for\n                regular payment option.&nbsp;</span></p>\n            <p><span style=\'font-weight: 400;\'>Illustration:&nbsp;</span></p>\n            <p><span style=\'font-weight: 400;\'>The below illustration details a\n                Repayment Schedule of a drawdown for INR 15,000/- and chooses to\n                Pay in Full type and only pays Minimum Instalment for a max tenure\n                of 24 months.&nbsp;</span></p>\n            \n            <ul>\n              <li style=\'font-weight: 400;\'><span\n                  style=\'font-weight: 400;\'\n                >Drawdown Amount = INR 15000/-&nbsp;</span></li>\n              <li style=\'font-weight: 400;\'><span\n                  style=\'font-weight: 400;\'\n                >Maximum repayment tenure = 24 months.&nbsp;</span></li>\n              <li style=\'font-weight: 400;\'><span\n                  style=\'font-weight: 400;\'\n                >Minimum Instalment = 7.5% of Outstanding Balance of Pay Later +\n                  Carry Forward Fee.</span></li>\n              <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>Carry\n                  Forward Amount = Principal to be paid - Principal Paid&nbsp;</span></li>\n              <li style=\'font-weight: 400;\'><span style=\'font-weight: 400;\'>Carry\n                  Forward Fee = 4% of Carry Forward Amount (for this example)</span></li>\n            </ul>\n            \n            \n  <table\n              style=\'border-color: black;\'\n              cellspacing=\'0\'\n              cellpadding=\'5\'\n            >\n              <tbody>\n                <tr>\n                  <td style="border: 1px solid black;"><b>Instalment <br />No.</b></td>\n                  <td style="border: 1px solid black;">\n                    <p><strong>Due Date</strong></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><strong>Principal to be paid</strong></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><strong>Principal Paid</strong></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><strong>Remaining Principal</strong></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><strong>Carry Forward Amount</strong></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><strong>Carry Forward Fees levied</strong></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><strong>Minimum Instalment</strong></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">1</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Feb-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1125</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1125</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>13875</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>13875</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>555</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1680</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">2</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Mar-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1041</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1041</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>12834</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>12834</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>513</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1554</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">3</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Apr-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>963</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>963</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>11872</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>11872</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>475</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1437</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">4</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-May-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>890</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>890</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>10981</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>10981</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>439</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1330</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">5</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Jun-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>824</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>824</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>10158</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>10158</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>406</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1230</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">6</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Jul-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>762</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>762</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>9396</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>9396</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>376</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1138</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">7</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Aug-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>705</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>705</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>8691</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>8691</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>348</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>1052</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">8</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Sep-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>652</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>652</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>8039</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>8039</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>322</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>973</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">9</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Oct-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>603</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>603</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>7436</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>7436</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>297</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>900</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">10</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Nov-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>558</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>558</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>6879</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>6879</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>275</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>833</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">11</td> \n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Dec-21</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>516</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>516</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>6363</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>6363</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>255</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>770</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">12</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Jan-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>477</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>477</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5886</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5886</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>235</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>713</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">13</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Feb-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>441</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>441</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5444</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5444</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>218</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>659</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">14</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Mar-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>408</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>408</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5036</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5036</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>201</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>610</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">15</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Apr-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>378</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>378</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>4658</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>4658</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>186</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>564</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">16</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-May-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>349</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>349</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>4309</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>4309</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>172</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>522</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">17</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Jun-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>323</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>323</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>3986</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>3986</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>159</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>483</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">18</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Jul-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>299</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>299</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>3687</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>3687</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>147</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>446</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">19</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Aug-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>277</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>277</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>3410</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>3410</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>136</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>413</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">20</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Sep-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>256</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>256</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>3154</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>3154</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>126</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>382</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">21</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Oct-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>237</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>237</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>2918</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>2918</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>117</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>353</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">22</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Nov-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>219</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>219</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>2699</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>2699</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>108</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>327</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">23</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Dec-22</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>202</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>202</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>2497</span></p>\n                  </td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>2497</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>100</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>302</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">24</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>5-Jan-23</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>2497</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>2497</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">&nbsp;</td>\n                  <td style="border-top: none; border-bottom: none;">&nbsp;</td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>0</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>0</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>2497</span></p>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>2.3</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Carry Forward Fee</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>If you choose to pay any amount\n                less than the Drawdown amount, a Carry Forward Fee of up to __%\n                would be charged upfront by the Lender, immediately after due date\n                on the Carry Forward Amount. The exact amount of Carry Forward\n                Fees for the Borrower will be communicated electronically at the\n                time of repayment.</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>Illustration:</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>If the Statement Period for the\n                user is from 26th January to 25th February, then the Statement\n                Date would be 26th February and the Due Date for this Period would\n                be 5th March.</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>Let us assume, Outstanding Balance\n                of INR 40,000/- and Minimum Instalment is 7.5% (say) of the\n                Outstanding Balance i.e., INR 3000/-. If a Borrower pays the\n                amount of INR 3000/- then a Carry Forward Fees of 3.5% will to be\n                charged on the Carry Forward Amount of INR 37,000/-.</span></p>\n            \n            <p><span style=\'font-weight: 400;\'>Hence, Carry Forward Fees of INR\n                37,000 * 3.5% = INR 1295/- would be charged upfront along with INR\n                3000/- and Carry Forward Amount of 37,000/- will be added to next\n                statement period.</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>2.3&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Prepayment of Draw-down</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>The Borrower may wish to pre-pay\n                the Loan before Statement Date. Such pre-payment will be without\n                any charges; however, the Lender reserves the right to modify this\n                from time to time.&nbsp;</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>2.4</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Pre-closure&nbsp;</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Borrower may also have the option\n                to pre-close or foreclosure before the end of the tenure of the\n                Drawdown. No pre-closure charges will be levied. However, Lender\n                reserves the right to modify this from time to time.</span></p>\n          </td>\n        </tr>\n        <tr>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>2.7</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>Charges</span></p>\n          </td>\n          <td style="border: 1px solid black;">\n            <p><span style=\'font-weight: 400;\'>The Loan may be utilized for\n                various purpose or end use, subject to additional charges. The\n                charges applicable for the Pay Later are as below:</span></p>\n            \n            <table\n              style=\'border-color: black;\'\n              border=\'1\'\n              cellspacing=\'0\'\n              cellpadding=\'5\'\n            >\n              <tbody>\n                <tr>\n                  <td style="border: 1px solid black;">\n                    <p><strong>Purpose&nbsp;</strong></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><strong>Convenience Fee</strong></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>Ad hoc request for Bank\n                        transfers, cash withdrawals or on other channels</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>Upto __% on Drawdown Amount</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td rowspan=\'2\'>\n                    <p><span style=\'font-weight: 400;\'>Pre-fixed request for Bank\n                        transfers</span></p>\n                  </td>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>No charges if the customer\n                        requests pre fixed&nbsp; transfer on specific date(s) as\n                        communicated in the service platform and charges up to __%\n                        otherwise</span>\n                      <span style=\'font-weight: 400;\'>subject to discretion of the\n                        Lender.</span></p>\n                  </td>\n                </tr>\n                <tr>\n                  <td style="border: 1px solid black;">\n                    <p><span style=\'font-weight: 400;\'>Annual fee of up to Rs.\n                        ___/- p.a, may be levied for availing this service if/as\n                        mentioned on the Service Platform.</span></p>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  \n  <p style="text-align: center;"><strong>Section 3: EMI Drawdowns</strong></p>\n  <p style="text-align: center;"><em><span style="font-weight: 400;">(Note: All the mentioned details in Section 1 are applicable for the EMI section as well unless mentioned explicitly otherwise)</span></em></p>\n  \n  <table style="border-color: black;" border="1" cellspacing="0" cellpadding="5">\n    <tbody>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><strong>Sl&nbsp;</strong></p>\n    <p><strong>No.&nbsp;</strong></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><strong>Description&nbsp;</strong></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><strong>Particulars</strong></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3.1</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">EMI&nbsp;</span></p>\n    <p><span style="font-weight: 400;">Conversions &amp; Tenures</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">EMI Tenure can range up to a maximum of 24 months.&nbsp;</span></p>\n    \n    <p><span style="font-weight: 400;">The Borrower may have an option for converting Pay Later type Drawdown to EMI of his/her own choice of the tenure through Service Platform before the relevant Due Date.&nbsp;</span></p>\n    <p><span style="font-weight: 400;">Alternatively, in some cases, the Borrower may be given the option to directly choose EMI Drawdown at the time of any Drawdown.&nbsp;</span></p>\n    <p><span style="font-weight: 400;">Drawdowns at certain merchant categories are excluded from EMI conversions as mentioned in Section 3.7.</span></p>\n    <p><span style="font-weight: 400;">Note that for EMI Drawdowns, the Borrower needs to the pay back the entire Statement Amount on or before the Due Date, failing which applicable late fee, penalties etc. may be charged to the Borrower</span></p>\n    <p><span style="font-weight: 400;">Please note that the Lender reserves the right to decline a Drawdown from EMI conversion at any time without assigning any reason whatsoever.</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3.2</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Repayment&nbsp;</span></p>\n    <p><span style="font-weight: 400;">Schedule for&nbsp;</span></p>\n    <p><span style="font-weight: 400;">EMI</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Borrower needs to pay Minimum Instalment on or before the Due Date to avoid any late fees.</span></p>\n    \n    <p><span style="font-weight: 400;">Illustration:</span></p>\n    <p><span style="font-weight: 400;">Sample EMI Repayment Schedule:</span></p>\n    <ul>\n    <li style="font-weight: 400;"><span style="font-weight: 400;">Drawdown Amount = INR 18000/-&nbsp;</span></li>\n    <li style="font-weight: 400;"><span style="font-weight: 400;">Repayment tenure = 6 months.</span></li>\n    <li style="font-weight: 400;"><span style="font-weight: 400;">APR = 24%</span></li>\n    <li style="font-weight: 400;"><span style="font-weight: 400;">EMI as per to reducing principal method = INR 3213.46/-&nbsp;</span></li>\n    <li style="font-weight: 400;"><span style="font-weight: 400;">Minimum Instalment = EMI itself.</span></li>\n    </ul>\n    \n    <table style="border-color: black;" border="1" cellspacing="0" cellpadding="5">\n    <tbody>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Month</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Principal</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Interest</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Loan Outstanding&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">EMI</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">&nbsp;</td>\n    <td style="border: 1px solid black;">&nbsp;</td>\n    <td style="border: 1px solid black;">&nbsp;</td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">18000.00</span></p>\n    </td>\n    <td style="border: 1px solid black;">&nbsp;</td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">M1&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">2853.46&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">360.00&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">15146.54&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3213.46</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">M2&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">2910.53&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">302.93&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">12236.00&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3213.46</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">M3&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">2968.74&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">244.72&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">9267.26&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3213.46</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">M4&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3028.12&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">185.35&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">6239.14&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3213.46</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">M5&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3088.68&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">124.78&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3150.46&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3213.46</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">M6&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3150.46&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">63.01&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">0.00&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3213.46</span></p>\n    </td>\n    </tr>\n    </tbody>\n    </table>\n    \n    <p><span style="font-weight: 400;">Note:</span></p>\n    <ul>\n    <li style="font-weight: 400;"><span style="font-weight: 400;">Consequent to the calculation of interest on a daily basis, the EMI may vary for a particular month and shall be adjusted (in a manner decided by the lender from time to time) and the same shall be communicated to the borrower via the service platform.&nbsp;</span></li>\n    <li style="font-weight: 400;"><span style="font-weight: 400;">For the First EMI, the Interest will be calculated from the date of the drawdown</span></li>\n    </ul>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3.3&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Prepayment of&nbsp;</span></p>\n    <p><span style="font-weight: 400;">Draw Down</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Borrower may have the option to pre-pay EMI Drawdowns before the Statement Date. There would be no prepayment charges levied in case of Borrower choosing this option.</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3.4</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Pre-closure of an EMI Type&nbsp;</span></p>\n    <p><span style="font-weight: 400;">Drawdowns</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Borrower would have the option to pre-close or foreclose the EMI type of Drawdown fully before the end of the tenure of such Drawdown. There would be no pre closure charges levied in case of Borrower choosing this option. The Borrower may be eligible to receive Interest Waiver</span> <span style="font-weight: 400;">on all the pre-closed/ foreclosed EMI(s) which are not yet due in the immediate Statement Period. This will be communicated to the Borrower electronically.&nbsp;</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">3.5</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Charges&nbsp;</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">The charges applicable for EMI are as below:</span></p>\n    \n    <table style="border-color: black;" border="1" cellspacing="0" cellpadding="5">\n    <tbody>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><strong>Description&nbsp;</strong></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><strong>Processing Fee&nbsp;</strong></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><strong>Interest</strong></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Bank transfers, cash withdrawals or on other channels</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Up to a maximum of __% of the Drawdown Amount</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Up to APR of __%</span></p>\n    </td>\n    </tr>\n    <tr>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Pre-fixed request for Bank transfers</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Up to a maximum of __% of the Drawdown Amount</span></p>\n    </td>\n    <td style="border: 1px solid black;">\n    <p><span style="font-weight: 400;">Up to APR of __%</span></p>\n    </td>\n    </tr>\n    </tbody>\n    </table>\n    </td>\n    </tr>\n    </tbody>\n    </table>\n  \n    <h2 class=\'font-semibold text-base py-4\'>Grievance:</h2>\n    <div><strong>Nodal grievance redressal officer of LSP</strong></div>\n    <br />\n    <div>Mr Danish Mirza</div>\n    <div>Contact: 080 6821 6821</div>\n    <div>Email: care@uni.club, gro@uni.club</div>\n    <br />\n    <div>Address:</div>\n    <div>Branch Office,</div>\n    <div>Uniorbit Technologies Pvt Ltd.</div>\n    <div>Obeya Zing, No 80/3</div>\n    <div>Gayathri Mansion, 2nd &amp; 4th Floor</div>\n    <div>Dr. Puneeth Rajkumar Road,</div>\n    <div>Above Toyota showroom,</div>\n    <div>Bellandur, Bangalore 560103</div>\n    <div>&nbsp;</div>\n    <div><strong>Grievance redressal officer of Northern Arc Capital Limited</strong></div>\n    <div>&nbsp;</div>\n    <div>Mr. Yuvaraj Sivakumar</div>\n    <div>Contact: 1800 4198 766</div>\n    <div>Email ID: gro@northernarc.com</div>\n    <br />\n    <div>Address: IIT M Research Park, Phase 1, 10th Floor</div>\n    <div>No. 1, Kanagam Village</div>\n    <div>Taramani, Chennai &ndash; 600 113</div>\n    <br />\n    <div>Grievances portal: https://www.northernarc.com/grievance-redressal-mechanism</div>\n    </div>\n  \n\n<div class="loan-terms-and-conditions">\n  \n  <p style="text-align: center;"><strong><em>Annexure I</em></strong></p>\n<p style="text-align: center;"><strong>LOAN TERMS AND CONDITIONS</strong></p>\n\n<ol>\n<li>1. Northern Arc Capital Limited (&ldquo;<strong>the Lender</strong>&rdquo;) agrees to lend to the Applicant and the Applicant agrees to borrow an unsecured line of credit (&ldquo;<strong>Loan</strong>&rdquo;) in accordance with the terms and conditions mentioned in Schedule 1 and hereunder.&nbsp;</li>\n<li>2. Lender has authorized certain third parties to provide services with regard to onboarding, management and collections from the Applicant and act as a customer touch points. These third parties also include Uniorbit Technologies Private Limited (&ldquo;<strong>Uni</strong>&rdquo;) and its agents.&nbsp;</li>\n<li>3. The Loan will be facilitated via the online account opened for the Applicant on the mobile application or website operated by Uni, hereafter called the &ldquo;<strong>Service Platform</strong>&rdquo;. The Loan may be availed by the Applicant through the Service Platform.</li>\n<li>4. The Applicant understands that the disbursement of the Loan shall be made directly to the beneficiary i.e. merchant or such other as requested by the Applicant via Service Platform. The disbursement of the Loan shall be made through normal banking channels, on a real time basis for every request made by the Applicant.</li>\n<li>5. Sanction and disbursement of the Loan shall be at the absolute discretion of Lender, subject to consideration of this Loan Application and all other particulars / documents (whether in relation to KYC or otherwise) furnished by the Applicant and compliance of all formalities and terms and conditions (including these Loan Terms and Conditions) by the Applicant in connection with the availing / disbursement of the Loan to the satisfaction of Lender. The Lender will only be obliged to fund a Loan in accordance with Loan Documents if there no Event of Default.</li>\n<li>6. Notwithstanding anything contained in the Loan Documents, Uni/ Lender shall have the unconditional right to cancel all or any undrawn portion of the Loan, in whole or in part, at any time during the subsistence of the Loan, without giving any prior notice to Applicant, for any reason whatsoever, including but not limited to occurrence of an event which in the opinion of the Lender constitutes or may constitute deterioration in the creditworthiness of the Applicant, or non-compliance of any terms and conditions of any Loan Document.</li>\n<li>7. The Applicant shall repay the Loan (including interest, additional interest and other charges thereon) in accordance with Schedule 1. It is hereby clarified that the Lender reserves the right to modify \n\n  including increase, decrease or suspend the line or credit mentioned in Schedule 1 at any time, at its sole discretion. In the event of any material and significant modification to Schedule 1, Lender shall issue a fresh Sanction Letter to the Applicant.&nbsp;</li>\n<li>8. The Loan is unsecured and no security has been provided by the Applicant to the Lender to secure his repayment/ payment obligations in terms of this Agreement.</li>\n<li>9. The Applicant may, subject to applicable law, prepay the entire outstanding Loan Amount to Lender along with interest, additional interest and other charges as applicable, at any time as per the repayment schedule specified in Schedule 1.&nbsp;</li>\n<li>10. The occurrence of any of the following events, or events similar thereto, shall each constitute an event of default (&ldquo;<strong>Event of Default</strong>&rdquo;):\n\n<ol style="list-style-type: lower-alpha;padding-left: 40px;">\n<li>The Applicant does not pay any amount due and payable pursuant to the Loan Documents in accordance with the terms of this Agreement on the date such amount is payable;</li>\n<li>Any representation or statement made or deemed to be made by the Applicant in this Agreement or any other Loan Document being or being proven to have been incorrect or misleading when made or deemed to be made; or</li>\n<li>The Applicant is declared insolvent or files for insolvency or any attachment, distress execution or any other such process is initiated against the Applicant.</li>\n<li>Any default in performance of any obligations or breach of any terms under any Loan Document by the Applicant;</li>\n<li>Any financial indebtedness of the Applicant is not paid when due or within any originally applicable grace period;</li>\n<li>One or more events, conditions or circumstances whether related or not, (including any change in Applicable Law) has occurred or is reasonably expected to occur which could have a Material Adverse Change; (For the purpose of this clause, Material Adverse Change means any set of circumstances or events, which is or may, reasonably determined by Uni/ Lender, be expected to have a material and adverse effect upon the Applicant or its business, financial condition, results and/or operations.)</li>\n</ol>\n</li>\n<li>11. Upon the occurrence of an Event of Default, the Lender, may, without the requirement of serving any notice/default notice to the Applicant:\n\n<ol style="list-style-type: lower-alpha;padding-left: 40px;">\n<li>declare that the Loan Amount, together with accrued interest, additional interest and all other amounts accrued or outstanding under this Agreement be immediately due and payable, whereupon they shall become immediately due and payable;</li>\n<li>cancel any further disbursement of Loan,</li>\n<li>stipulate such other conditions or amend any terms of the Loan Documents as Lender considers necessary,</li>\n<li>Lender otherwise shall be entitled to proceed against the Applicant and exercise such other rights as may be available to the Lender under the applicable Law in order to realize the amounts due and payable by the Applicant.</li>\n</ol>\n</li>\n<li>12. The Borrower acknowledges that any delay or default in payment of any amount due and payable under the Loan might adversely affect the Borrower&rsquo;s credit score. The Borrower further acknowledges that the Loan might be classified in the Lender&rsquo;s books as a special mention account (SMA) if any amount due and payable thereunder is overdue.</li>\n<li>13. For example, if any principle, interest, or any other amount is scheduled to be paid on the 31st day of a given month ("Scheduled Date") and such amount is not fully paid on or before such day, then the relevant loan account will be classified as SMA-0 as of such day. If the overdue continues for more than 30 days from the Scheduled Date&nbsp;upto 60 days from the Scheduled Date, then the account will be classified as SMA-1. If the overdue continues for more than 60 days from the Scheduled Date upto 90 days from the Scheduled Date, then the account will be classified as SMA-2. If the overdue continues for more than 90 days from the Scheduled Date, then the account will be classified as Non-Performing \n\n  Asset (NPA). Once a loan is classified as a NPA, it shall remain as such till the time all overdue amounts are paid.\n\n<p>Please refer the below illustration.</p>\n<table style="border-collapse: collapse;border: 1px solid black; text-align: center;" border="1">\n<tbody>\n<tr>\n<td colspan="3">\n<p>Scheduled Date:&nbsp;March 31, 2021</p>\n</td>\n</tr>\n<tr>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>Classification</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>Date of classification</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>Condition for classification</p>\n</td>\n</tr>\n<tr>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>SMA-0</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>Scheduled Date</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>If the amount(s) scheduled to be paid on the Scheduled Date is not paid on the Scheduled Date.</p>\n</td>\n</tr>\n<tr>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>SMA -1</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>April 30, 2021</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>If any amount remains overdue for more than 30 days from the Scheduled Date.</p>\n</td>\n</tr>\n<tr>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>SMA-2</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>May 30, 2021</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>If any amount remains overdue for more than 60 days from the Scheduled Date.</p>\n</td>\n</tr>\n<tr>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>NPA</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>June 29, 2021</p>\n</td>\n<td style="border-collapse: collapse;border: 1px solid black;">\n<p>If any amount remains overdue for more than 90 days from the Scheduled Date.</p>\n</td>\n</tr>\n</tbody>\n</table>\n</li>\n<li>14. The Applicant agrees and undertakes that the information and data furnished by it to the Lender pursuant to this Agreement and in relation thereto, are true and correct and consents that any agency authorized by the Lender may use and process the information and data provided under this agreement.</li>\n<li>15. The Agreement shall be governed by the laws of India and courts at Bengaluru shall have exclusive jurisdiction to settle any disputes which may arise out of or in connection with this Agreement. The Parties irrevocably agree to submit to that jurisdiction, to the exclusion of other Courts.</li>\n<li>16. The Applicant shall reimburse and pay to the Lender all costs, charges and expenses, including stamp duty and legal costs on actual basis and other charges and expenses which may be incurred in preparation of these presents and related to and or incidental documents and enforcement of the rights of the Lender there under or any other document security created / executed by the Applicant in favour of the Lender.</li>\n<li>17. Applicant may not assign this Agreement or any of its rights hereunder without the prior written consent of Lender, and without which any such assignment shall be void and of no force or effect.</li>\n<li>18. Applicant expressly acknowledges and agrees that Lender may, at any time, without requiring the prior consent from the Applicant or any other person and without giving notice to the Applicant any other person, sell, transfer, assign, securitise, novate, part with any or all of its receivables arising in relation to the Loan and its rights and benefits and obligations (if any) under all or any of the Loan Documents, to any third party (&ldquo;<strong>Assignee</strong>&rdquo;), in any manner whatsoever including by direct assignment or by the process of securitisation. Applicant irrevocably and unconditionally confirms that it shall continue to be bound by the terms herein and other Loan Documents notwithstanding such transfer or assignment by Lender and that the Assignee shall acquire an interest in the Loan Documents forthwith.</li>\n<li>19. Notwithstanding anything contained herein, the Parties agree that they have authorized Lender to appoint a suitable agency as the recovery agent (&ldquo;<strong>Recovery Agent</strong>&rdquo;) for recovery of any amounts due and payable under this Agreement. The Recovery Agents shall take all such reasonable steps as might be necessary for recovery; however, the Recovery Agents do not guarantee an assured recovery of dues. That the charges being levied by the Recovery Agent shall be to the account of the Lender.&nbsp;</li>\n<li>20. The Applicant shall indemnify and hold the Lender and Service Platform and their directors, officers, employees, agents and advisers harmless against losses, claims, demands, liabilities, or damages \n\n  which are sustained as a result of any act, deed, conduct, error, or omission of the Applicant, its agents, or assignees, or for improper performance or non-performance relating to the Loan, this Agreement or any other document executed in pursuance to this Agreement.</li>\n<li>21. The Applicant accepts, confirms and consents for the disclosure and sharing by the Lender and the Service Platform of all or any information and data relating to the Applicant, the Loan, any other transactions that the Applicant has with the Lender, the agreements and documents related to the facilities and transactions, including but not limited to information relating to payments and default, if any, committed by the Applicant, in the discharge of the Applicant&rsquo;s obligations in relation to the facilities or other transactions, as the Lender or Service Platform may deem appropriate and necessary to disclose and furnish, to the RBI; CICs; Information Utility and/or to any other regulatory authority, department, agency or body as authorized in this behalf under applicable law.</li>\n<li>22. The rights, powers and remedies given to the Lender by this Agreement shall be in addition to all rights, powers and remedies given to the Lender by virtue of any other security, statute or rule of law.</li>\n<li>23. No amendment, modification or addition to this Agreement shall be binding on all the Parties hereto unless set forth in writing and executed by them or through their duly authorized representatives.</li>\n<li>24. If any term, provision, covenant or restriction of this Agreement is held by a court of competent jurisdiction to be invalid, void or unenforceable, the remainder of the terms, provisions, covenants and restrictions of this Agreement shall remain in full force and effect and shall in no way be affected, impaired or invalidated.</li>\n<li>25. Any notice or demand hereunder shall be in writing and sent through post at the address specified above or the address last known to the Party sending the notice. Any notice sent under this agreement shall be deemed to be delivered 2 business days following the dispatch of the notice.&nbsp;</li>\n</ol>\n\n  </div>\n  </div>\n',
            logoUrl: ""
        };
        (0,
        C.c)("true") && (T.tabs.push({
            key: "northern_arc",
            label: "Uni \u2013 Northern Arc",
            caption: "Most Important Terms and Conditions"
        }),
        I.northern_arc = L)
    },
    3686: function(n, e, t) {
        "use strict";
        t.d(e, {
            GZ: function() {
                return p
            },
            R2: function() {
                return c
            },
            Dm: function() {
                return b
            },
            mL: function() {
                return y
            }
        });
        var o = t(9644)
          , a = t.n(o)
          , r = t(2066);
        function s(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, o = new Array(e); t < e; t++)
                o[t] = n[t];
            return o
        }
        function i(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t,
            n
        }
        function l(n, e) {
            return function(n) {
                if (Array.isArray(n))
                    return n
            }(n) || function(n, e) {
                var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (null != t) {
                    var o, a, r = [], s = !0, i = !1;
                    try {
                        for (t = t.call(n); !(s = (o = t.next()).done) && (r.push(o.value),
                        !e || r.length !== e); s = !0)
                            ;
                    } catch (l) {
                        i = !0,
                        a = l
                    } finally {
                        try {
                            s || null == t.return || t.return()
                        } finally {
                            if (i)
                                throw a
                        }
                    }
                    return r
                }
            }(n, e) || function(n, e) {
                if (!n)
                    return;
                if ("string" === typeof n)
                    return s(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                "Object" === t && n.constructor && (t = n.constructor.name);
                if ("Map" === t || "Set" === t)
                    return Array.from(t);
                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                    return s(n, e)
            }(n, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var d = ["utm_source", "utm_campaign"]
          , p = function(n, e) {
            var t = window.location.href
              , o = {}
              , a = new URLSearchParams(window.location.search)
              , r = !0
              , s = !1
              , p = void 0;
            try {
                for (var h, c = a[Symbol.iterator](); !(r = (h = c.next()).done); r = !0) {
                    var b = l(h.value, 2)
                      , y = b[0]
                      , f = b[1];
                    d.includes(y) && (o[y] = f)
                }
            } catch (u) {
                s = !0,
                p = u
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (s)
                        throw p
                }
            }
            return function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {}
                      , o = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }
                    )))),
                    o.forEach((function(e) {
                        i(n, e, t[e])
                    }
                    ))
                }
                return n
            }({}, n, {
                utm_params: t,
                form_name: e,
                event_name: "WEBSITE_LEAD_EVENT"
            }, o)
        };
        function h(n) {
            var e = n.event
              , t = void 0 === e ? "LeadSubmit" : e
              , o = n.leadId
              , a = void 0 === o ? (1e8 * Math.random()).toFixed() : o
              , r = n.product
              , s = void 0 === r ? "Card" : r
              , i = n.formLocation
              , l = void 0 === i ? "apply_form" : i;
            window.dataLayer = window.dataLayer || [],
            window.dataLayer.push({
                event: t,
                LeadID: a,
                Product: s,
                formLocation: l
            }),
            console.log("lead submit event", l)
        }
        function c() {
            return (0,
            r.useMutation)((function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return a().post("https://web.uni.club/v1/lead", JSON.stringify(n), {
                    headers: {
                        "content-type": "application/json"
                    }
                })
            }
            ), {
                onSuccess: function(n, e) {
                    h({
                        formLocation: e.form_name
                    })
                },
                onError: function() {
                    console.log("some error occurred")
                }
            })
        }
        var b = function(n) {
            return 10 === n.length && /[6-9]{1}[0-9]{9}/.test(n)
        }
          , y = {
            NAME: /^[A-Za-z\s]+$/,
            PHONE: /[6-9]{1}[0-9]{9}/,
            PAN: /[A-Z, a-z]{5}[0-9]{4}[A-Z, a-z]{1}/,
            EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },
    7875: function(n, e, t) {
        "use strict";
        t.d(e, {
            u: function() {
                return o
            },
            c: function() {
                return a
            }
        });
        var o = function(n) {
            return n < 10 ? "0" + n : n
        }
          , a = function(n) {
            return "true" === n
        }
    },
    6701: function(n) {
        n.exports = {
            input: "ApplyModal_input__mAI_d",
            "apply-action": "ApplyModal_apply-action__2og6L"
        }
    },
    2487: function(n) {
        n.exports = {
            header: "Blog_header__g14U8",
            "full-height": "Blog_full-height__knBAK",
            blank: "Blog_blank__zpw0p",
            "blank-mobile": "Blog_blank-mobile__GY4Fr"
        }
    },
    9392: function(n) {
        n.exports = {
            "image-container": "JoiningFees_image-container__EFHHX",
            cover: "JoiningFees_cover__iyT4H"
        }
    },
    4157: function(n) {
        n.exports = {
            logo_white: "Logo_logo_white__zowGB"
        }
    }
}]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8102], {
    766: function(e) {
        var t, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, o = (t = "undefined" != typeof WeakMap ? new WeakMap : 0,
        (e,o)=>t && t.get(e) || (o = ((e,t,o,s)=>{
            if (t && "object" == typeof t || "function" == typeof t)
                for (let l of i(t))
                    !a.call(e, l) && (o || "default" !== l) && n(e, l, {
                        get: ()=>t[l],
                        enumerable: !(s = r(t, l)) || s.enumerable
                    });
            return e
        }
        )((e=>n(e, "__esModule", {
            value: !0
        }))({}), e, 1),
        t && t.set(e, o),
        o)), s = {};
        ((e,t)=>{
            for (var r in t)
                n(e, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
        )(s, {
            ANDROID: ()=>y,
            GOLDEN_RATIO: ()=>w,
            IOS: ()=>h,
            SORTING_ORDER: ()=>v,
            bytesToSize: ()=>N,
            convertCamelCaseToNormalText: ()=>p,
            convertDatetoTimestamp: ()=>u,
            delay: ()=>b,
            formatNumber: ()=>l,
            formatNumberWithoutCurrency: ()=>d,
            getBrowser: ()=>T,
            getCookie: ()=>E,
            getOSName: ()=>W,
            isAndroid: ()=>k,
            isAppleDevice: ()=>I,
            isIOS: ()=>C,
            isMacOS: ()=>P,
            isMobile: ()=>S,
            isSafari: ()=>O,
            isWebpSupported: ()=>A,
            pipe: ()=>B,
            replaceSpacesWithUnderscores: ()=>m,
            runPromiseInSequence: ()=>_,
            snakeCaseToString: ()=>f,
            sortByKey: ()=>j,
            stringReplacer: ()=>x,
            stringToBoolean: ()=>M,
            toDigit: ()=>c
        });
        var l = (e,t="\u20b9",n="en-IN")=>isNaN(e) ? 0 : `${t} ${new Intl.NumberFormat(n).format(e) || e}`
          , c = (e,t=2)=>e.toFixed(t)
          , d = (e,t="en-IN")=>isNaN(e) ? 0 : `${new Intl.NumberFormat(t).format(e) || e}`;
        function u(e) {
            return Date.parse(e)
        }
        var f = (e="")=>e.split("_").join(" ")
          , p = (e="")=>e.replace(/([A-Z])/g, " $1").replace(/^./, (e=>e.toUpperCase()))
          , m = (e="")=>e.replace(/ /g, "_");
        function x(e="", t, n) {
            return e.replace(t, n)
        }
        var g, v = {
            ASC: "ASC",
            DESC: "DESC"
        }, w = 1.618, h = "IOS", y = "ANDROID", j = (e,t=v.ASC)=>(n,r)=>{
            let i = n[e]
              , a = r[e];
            if (t === v.ASC) {
                if (i < a)
                    return -1;
                if (i > a)
                    return 1
            } else {
                if (i < a)
                    return 1;
                if (i > a)
                    return -1
            }
            return 0
        }
        ;
        function N(e) {
            if (0 === e)
                return "0 Byte";
            let t = parseInt(`${Math.floor(Math.log(e) / Math.log(1024))}`);
            return Math.round(e / Math.pow(1024, t)) + " " + ["Bytes", "KB", "MB", "GB", "TB"][t]
        }
        var b = async e=>await new Promise((t=>setTimeout((()=>{
            t(e)
        }
        ), e)));
        async function A() {
            if (void 0 !== g)
                return g;
            try {
                return g = await new Promise((e=>{
                    let t = new Image;
                    t.onload = function() {
                        e(2 === t.width && 1 === t.height)
                    }
                    ,
                    t.onerror = function() {
                        e(!1)
                    }
                    ,
                    t.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="
                }
                ))
            } catch {
                return !1
            }
        }
        function O() {
            return /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform)
        }
        function S() {
            return k() || C()
        }
        function P() {
            return navigator.platform.toLowerCase().indexOf("mac") >= 0
        }
        function C() {
            return !!(navigator.platform && ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].indexOf(navigator.platform) > -1) || /iPad|iPhone|iPod/.test(navigator.userAgent)
        }
        function k() {
            return navigator.userAgent.toLowerCase().indexOf("android") > -1
        }
        function I() {
            return navigator.platform ? ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod", "MacIntel"].indexOf(navigator.platform) > -1 : /iPad|iPhone|iPod|Mac\sOS\sX/.test(navigator.userAgent)
        }
        function W() {
            let {userAgent: e} = window.navigator
              , t = "Unknown";
            return -1 !== e.indexOf("Windows NT 10.0") && (t = "Windows 10"),
            -1 !== e.indexOf("Windows NT 6.2") && (t = "Windows 8"),
            -1 !== e.indexOf("Windows NT 6.1") && (t = "Windows 7"),
            -1 !== e.indexOf("Windows NT 6.0") && (t = "Windows Vista"),
            -1 !== e.indexOf("Windows NT 5.1") && (t = "Windows XP"),
            -1 !== e.indexOf("Windows NT 5.0") && (t = "Windows 2000"),
            -1 !== e.indexOf("Mac") && (t = "Mac/iOS"),
            -1 !== e.indexOf("X11") && (t = "UNIX"),
            -1 !== e.indexOf("Linux") && (t = "Linux"),
            t
        }
        function T() {
            let {userAgent: e} = window.navigator
              , t = "";
            return t = -1 !== e.indexOf("Chrome") ? "Chrome" : -1 !== e.indexOf("Safari") ? "Safari" : -1 !== e.indexOf("Firefox") ? "Firefox" : "Unknown",
            t
        }
        function M(e) {
            switch (e.toLowerCase().trim()) {
            case "true":
            case "yes":
            case "1":
                return !0;
            case "false":
            case "no":
            case "0":
            case null:
                return !1;
            default:
                return Boolean(e)
            }
        }
        function E(e) {
            let t = `; ${document.cookie}`.split(`; ${e}=`);
            if (2 === t.length)
                return t.pop().split(";").shift()
        }
        var B = (...e)=>t=>e.reduce(((e,t)=>t(e)), t)
          , _ = (e,t)=>e.reduce(((e,t)=>e.then(t)), Promise.resolve(t));
        e.exports = o(s)
    },
    2903: function(e, t, n) {
        "use strict";
        function r() {
            var e, t, n = (e = ["\n"],
            t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            })));
            return r = function() {
                return n
            }
            ,
            n
        }
        var i = n(6769).Z.img(r());
        t.Z = i
    },
    8102: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return f
            }
        });
        var r = n(2322)
          , i = n(2903)
          , a = n(4176);
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , r = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                )))),
                r.forEach((function(t) {
                    o(e, t, n[t])
                }
                ))
            }
            return e
        }
        function l(e) {
            var t = e.content
              , n = void 0 === t ? [] : t
              , o = e.rowClassName
              , l = void 0 === o ? "" : o;
            return (0,
            r.jsx)(r.Fragment, {
                children: n.map((function(e, t) {
                    var n = e.media
                      , o = e.content
                      , c = e.headerCaption
                      , d = void 0 === c ? null : c
                      , u = e.footerCaption
                      , f = void 0 === u ? null : u;
                    return (0,
                    r.jsxs)("div", {
                        className: "flex md:items-center ".concat(t % 2 === 0 ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse", "\n                \n                w-full font-medium justify-center ").concat(l, " md:pt-[70px] py-0 md:py-[60px] md:px-8"),
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]",
                            children: [d && (0,
                            r.jsx)("div", {
                                className: "info-top-caption",
                                children: (0,
                                r.jsx)(a.v, {
                                    message: d,
                                    as: "div"
                                })
                            }), (0,
                            r.jsx)("div", {
                                className: "w-full md:w-[300px] lg:w-[510px]",
                                children: (0,
                                r.jsx)(a.v, {
                                    message: o,
                                    as: "div"
                                })
                            }), f && (0,
                            r.jsx)("div", {
                                className: "info-caption",
                                children: f.message ? (0,
                                r.jsx)(a.v, {
                                    className: "leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]",
                                    message: f.message,
                                    as: "div"
                                }) : (0,
                                r.jsx)(i.Z, s({
                                    src: f.src
                                }, f.attributes, {
                                    className: "mt-10 h-[50px]",
                                    loading: "lazy",
                                    alt: ""
                                }))
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: "w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]",
                            children: n
                        })]
                    }, t)
                }
                ))
            })
        }
        var c = n(9626)
          , d = n(501)
          , u = n(766);
        n(7348),
        (0,
        u.isWebpSupported)();
        (0,
        u.isWebpSupported)();
        (0,
        u.isWebpSupported)();
        function f() {
            d.Z;
            var e = function() {
                return (0,
                r.jsx)("div", {
                    className: "flex justify-center overflow-hidden",
                    children: (0,
                    r.jsx)("div", {
                        className: "relative w-[280px] lg:w-[448px]",
                        children: (0,
                        r.jsx)("img", {
                            src: "/images/one_percent_cashback.png",
                            className: ""
                        })
                    })
                })
            }
              , t = function() {
                return (0,
                r.jsx)("div", {
                    className: "flex justify-center overflow-hidden",
                    children: (0,
                    r.jsx)("div", {
                        className: "relative w-[280px] lg:w-[448px]",
                        children: (0,
                        r.jsx)("img", {
                            src: "/images/five_x_rewards.png",
                            className: ""
                        })
                    })
                })
            }
              , n = function() {
                return (0,
                r.jsx)("div", {
                    className: "flex justify-center overflow-hidden",
                    children: (0,
                    r.jsx)("div", {
                        className: "relative w-[280px] lg:w-[448px]",
                        children: (0,
                        r.jsx)("img", {
                            src: "/images/forex_globe.png",
                            className: ""
                        })
                    })
                })
            }
              , i = [{
                media: (0,
                r.jsx)(e, {}),
                content: '<span style="font-weight:700;">1% assured cashback on your spends.</span><span style="font-weight:400;color:#9EA7AE;">The more you spend, the more you earn.</span>',
                headerCaption: null,
                footerCaption: {
                    message: "Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions."
                }
            }, {
                media: (0,
                r.jsx)(t, {}),
                content: '<span style="font-weight:700;">5x more value than your cashback,</span><span style="font-weight:400;color:#9EA7AE;"> only at the Uni Store.</span>',
                headerCaption: null,
                footerCaption: null
            }, {
                media: (0,
                r.jsx)(n, {}),
                content: '<span style="font-weight:700;">Zero Forex Markup.</span><br /><span style="font-weight:400;color:#9EA7AE;"> Go international, without any fees.</span>',
                footerCaption: null
            }];
            return (0,
            r.jsx)(c.W2, {
                className: "px-8",
                children: (0,
                r.jsxs)("div", {
                    className: "flex justify-center flex-col",
                    children: [(0,
                    r.jsx)(l, {
                        content: i
                    }), (0,
                    r.jsx)("div", {
                        className: "flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center",
                        children: (0,
                        r.jsxs)("p", {
                            children: ["Lifetime ", (0,
                            r.jsx)("span", {
                                className: "text-uni-green",
                                children: "free. "
                            }), (0,
                            r.jsx)("span", {
                                className: "block sm:inline-block md:text-center",
                                children: "No joining fee."
                            }), (0,
                            r.jsx)("span", {
                                className: "block md:text-center",
                                children: " No annual charges. "
                            })]
                        })
                    })]
                })
            })
        }
    },
    501: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var r = n(2322)
          , i = n(766)
          , a = n(9626)
          , o = (0,
        i.isWebpSupported)() ? "webp" : "png";
        function s() {
            return (0,
            r.jsx)("div", {
                className: "flex justify-center overflow-hidden",
                children: (0,
                r.jsxs)("div", {
                    className: "relative w-[280px] lg:w-[448px]",
                    children: [(0,
                    r.jsx)(a.Jd, {
                        variants: {
                            hidden: {
                                opacity: 0,
                                y: 100
                            },
                            visible: {
                                opacity: 1,
                                y: 0
                            }
                        },
                        transition: {
                            delay: .3,
                            duration: 1
                        },
                        viewport: {
                            once: !0
                        },
                        whileInView: "visible",
                        initial: "hidden",
                        src: "/images/redesign/semi-circle.svg",
                        alt: "",
                        className: "animate z-0 absolute w-[215px] lg:w-[380px] right-[60px] top-7"
                    }), (0,
                    r.jsx)(a.Jd, {
                        src: "/images/redesign/places.".concat(o),
                        alt: "",
                        className: "relative z-10 -left-4 -bottom-4 w-[280px] lg:w-[448px]"
                    })]
                })
            })
        }
    }
}]);

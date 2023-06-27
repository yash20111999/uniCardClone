(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9560, 8548, 7647], {
    766: function(e) {
        var n, t = Object.defineProperty, i = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, s = (n = "undefined" != typeof WeakMap ? new WeakMap : 0,
        (e,s)=>n && n.get(e) || (s = ((e,n,s,o)=>{
            if (n && "object" == typeof n || "function" == typeof n)
                for (let l of r(n))
                    !a.call(e, l) && (s || "default" !== l) && t(e, l, {
                        get: ()=>n[l],
                        enumerable: !(o = i(n, l)) || o.enumerable
                    });
            return e
        }
        )((e=>t(e, "__esModule", {
            value: !0
        }))({}), e, 1),
        n && n.set(e, s),
        s)), o = {};
        ((e,n)=>{
            for (var i in n)
                t(e, i, {
                    get: n[i],
                    enumerable: !0
                })
        }
        )(o, {
            ANDROID: ()=>j,
            GOLDEN_RATIO: ()=>w,
            IOS: ()=>v,
            SORTING_ORDER: ()=>g,
            bytesToSize: ()=>y,
            convertCamelCaseToNormalText: ()=>m,
            convertDatetoTimestamp: ()=>d,
            delay: ()=>N,
            formatNumber: ()=>l,
            formatNumberWithoutCurrency: ()=>u,
            getBrowser: ()=>I,
            getCookie: ()=>L,
            getOSName: ()=>B,
            isAndroid: ()=>P,
            isAppleDevice: ()=>M,
            isIOS: ()=>k,
            isMacOS: ()=>S,
            isMobile: ()=>O,
            isSafari: ()=>A,
            isWebpSupported: ()=>C,
            pipe: ()=>W,
            replaceSpacesWithUnderscores: ()=>x,
            runPromiseInSequence: ()=>E,
            snakeCaseToString: ()=>f,
            sortByKey: ()=>b,
            stringReplacer: ()=>p,
            stringToBoolean: ()=>D,
            toDigit: ()=>c
        });
        var l = (e,n="\u20b9",t="en-IN")=>isNaN(e) ? 0 : `${n} ${new Intl.NumberFormat(t).format(e) || e}`
          , c = (e,n=2)=>e.toFixed(n)
          , u = (e,n="en-IN")=>isNaN(e) ? 0 : `${new Intl.NumberFormat(n).format(e) || e}`;
        function d(e) {
            return Date.parse(e)
        }
        var f = (e="")=>e.split("_").join(" ")
          , m = (e="")=>e.replace(/([A-Z])/g, " $1").replace(/^./, (e=>e.toUpperCase()))
          , x = (e="")=>e.replace(/ /g, "_");
        function p(e="", n, t) {
            return e.replace(n, t)
        }
        var h, g = {
            ASC: "ASC",
            DESC: "DESC"
        }, w = 1.618, v = "IOS", j = "ANDROID", b = (e,n=g.ASC)=>(t,i)=>{
            let r = t[e]
              , a = i[e];
            if (n === g.ASC) {
                if (r < a)
                    return -1;
                if (r > a)
                    return 1
            } else {
                if (r < a)
                    return 1;
                if (r > a)
                    return -1
            }
            return 0
        }
        ;
        function y(e) {
            if (0 === e)
                return "0 Byte";
            let n = parseInt(`${Math.floor(Math.log(e) / Math.log(1024))}`);
            return Math.round(e / Math.pow(1024, n)) + " " + ["Bytes", "KB", "MB", "GB", "TB"][n]
        }
        var N = async e=>await new Promise((n=>setTimeout((()=>{
            n(e)
        }
        ), e)));
        async function C() {
            if (void 0 !== h)
                return h;
            try {
                return h = await new Promise((e=>{
                    let n = new Image;
                    n.onload = function() {
                        e(2 === n.width && 1 === n.height)
                    }
                    ,
                    n.onerror = function() {
                        e(!1)
                    }
                    ,
                    n.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="
                }
                ))
            } catch {
                return !1
            }
        }
        function A() {
            return /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform)
        }
        function O() {
            return P() || k()
        }
        function S() {
            return navigator.platform.toLowerCase().indexOf("mac") >= 0
        }
        function k() {
            return !!(navigator.platform && ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].indexOf(navigator.platform) > -1) || /iPad|iPhone|iPod/.test(navigator.userAgent)
        }
        function P() {
            return navigator.userAgent.toLowerCase().indexOf("android") > -1
        }
        function M() {
            return navigator.platform ? ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod", "MacIntel"].indexOf(navigator.platform) > -1 : /iPad|iPhone|iPod|Mac\sOS\sX/.test(navigator.userAgent)
        }
        function B() {
            let {userAgent: e} = window.navigator
              , n = "Unknown";
            return -1 !== e.indexOf("Windows NT 10.0") && (n = "Windows 10"),
            -1 !== e.indexOf("Windows NT 6.2") && (n = "Windows 8"),
            -1 !== e.indexOf("Windows NT 6.1") && (n = "Windows 7"),
            -1 !== e.indexOf("Windows NT 6.0") && (n = "Windows Vista"),
            -1 !== e.indexOf("Windows NT 5.1") && (n = "Windows XP"),
            -1 !== e.indexOf("Windows NT 5.0") && (n = "Windows 2000"),
            -1 !== e.indexOf("Mac") && (n = "Mac/iOS"),
            -1 !== e.indexOf("X11") && (n = "UNIX"),
            -1 !== e.indexOf("Linux") && (n = "Linux"),
            n
        }
        function I() {
            let {userAgent: e} = window.navigator
              , n = "";
            return n = -1 !== e.indexOf("Chrome") ? "Chrome" : -1 !== e.indexOf("Safari") ? "Safari" : -1 !== e.indexOf("Firefox") ? "Firefox" : "Unknown",
            n
        }
        function D(e) {
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
        function L(e) {
            let n = `; ${document.cookie}`.split(`; ${e}=`);
            if (2 === n.length)
                return n.pop().split(";").shift()
        }
        var W = (...e)=>n=>e.reduce(((e,n)=>n(e)), n)
          , E = (e,n)=>e.reduce(((e,n)=>e.then(n)), Promise.resolve(n));
        e.exports = s(o)
    },
    2903: function(e, n, t) {
        "use strict";
        function i() {
            var e, n, t = (e = ["\n"],
            n || (n = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            })));
            return i = function() {
                return t
            }
            ,
            t
        }
        var r = t(6769).Z.img(i());
        n.Z = r
    },
    8645: function(e, n, t) {
        "use strict";
        t.d(n, {
            JO: function() {
                return l
            },
            aM: function() {
                return c
            },
            lM: function() {
                return d
            },
            AY: function() {
                return f
            },
            ZP: function() {
                return m
            }
        });
        var i = t(2322)
          , r = t(2784)
          , a = t(5251)
          , s = t(7676)
          , o = t(632);
        function l(e) {
            return e.valid ? (0,
            i.jsx)("svg", {
                width: "20",
                height: "14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                i.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.668.332a1.132 1.132 0 0 1 0 1.6L8.504 13.098a1.887 1.887 0 0 1-2.668 0L.332 7.593a1.132 1.132 0 0 1 1.6-1.601l5.238 5.237L18.067.332a1.132 1.132 0 0 1 1.601 0Z",
                    fill: "#79E691"
                })
            }) : (0,
            i.jsx)("svg", {
                width: "4",
                height: "17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                i.jsx)("path", {
                    d: "M2.688 11.664 3.336 0H.048l.648 11.664h1.992Zm-.984 5.328c.96 0 1.68-.72 1.68-1.68s-.72-1.68-1.68-1.68c-.984 0-1.704.72-1.704 1.68s.72 1.68 1.704 1.68Z",
                    fill: "#F48282"
                })
            })
        }
        var c = function() {
            return (0,
            i.jsx)("svg", {
                width: "14",
                height: "15",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                i.jsx)("path", {
                    d: "M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z",
                    fill: "#fff"
                })
            })
        };
        function u(e) {
            return e.isLoading ? (0,
            i.jsxs)("span", {
                className: "inline-flex items-center justify-center",
                children: [(0,
                i.jsxs)("svg", {
                    className: "animate-spin mr-4 h-5 w-5 text-black",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0,
                    i.jsx)("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }), (0,
                    i.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })]
                }), a.q.applyingBtn]
            }) : (0,
            i.jsx)("span", {
                children: a.q.applyButtonLabel
            })
        }
        function d(e) {
            var n = e.consentGiven
              , t = e.toggleConsent;
            return (0,
            i.jsxs)("div", {
                className: "consent flex items-center py-4 px-2 max-w-xs",
                children: [(0,
                i.jsx)("input", {
                    type: "checkbox",
                    checked: n,
                    onChange: t,
                    id: "consent-msg"
                }), (0,
                i.jsx)("label", {
                    htmlFor: "consent-msg",
                    className: "consent text-white md:text-black text-[10px] leading-3 cursor-pointer",
                    children: a.q.consentMsg
                })]
            })
        }
        function f(e) {
            var n = e.children;
            return (0,
            i.jsx)("section", {
                className: "hidden sm:block fixed bottom-0 w-screen bg-uni-grey py-5 z-10",
                children: (0,
                i.jsx)("div", {
                    className: "mx-auto max-w-7xl px-12 w-full flex justify-between",
                    children: n
                })
            })
        }
        function m(e) {
            var n = e.formName
              , t = void 0 === n ? "hero_section" : n
              , f = e.showFull
              , m = void 0 !== f && f
              , x = (0,
            r.useContext)(o.Z)
              , p = x.isValid
              , h = x.isLoading
              , g = x.isSuccess
              , w = x.consentGiven
              , v = x.isButtonDisabled
              , j = x.clearInput
              , b = x.phone
              , y = x.handleChange
              , N = x.handleSubmit
              , C = x.toggleConsent;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)("div", {
                    className: "flex justify-between items-center ".concat(g ? "hidden" : "block", " ").concat(m ? "w-full" : "max-w-[94vw]"),
                    children: (0,
                    i.jsxs)("div", {
                        className: "flex ".concat(m ? "w-full flex-row justify-between items-center" : "flex-col"),
                        children: [(0,
                        i.jsx)("form", {
                            onSubmit: function(e) {
                                e.preventDefault(),
                                p & !g && N({
                                    phone: b,
                                    commsOptIn: w
                                }, t)
                            },
                            children: (0,
                            i.jsxs)("div", {
                                className: "flex bg-black p-1 pl-2 rounded-xl justify-between",
                                children: [(0,
                                i.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0,
                                    i.jsx)("input", {
                                        onChange: y,
                                        className: "bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44",
                                        placeholder: a.q.phonePlaceholder,
                                        value: b
                                    }), (0,
                                    i.jsx)("span", {
                                        className: "w-6 flex items-center justify-end h-full",
                                        children: b.length ? b.length < 10 ? (0,
                                        i.jsx)("button", {
                                            type: "button",
                                            onClick: j,
                                            children: (0,
                                            i.jsx)(c, {})
                                        }) : (0,
                                        i.jsx)(l, {
                                            valid: p
                                        }) : null
                                    })]
                                }), (0,
                                i.jsx)("button", {
                                    type: "submit",
                                    className: "text-center text-sm leading-7 justify-between pt-2 ml-2 bg-uni-yellow rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed",
                                    disabled: v,
                                    children: (0,
                                    i.jsx)(u, {
                                        isLoading: h
                                    })
                                })]
                            })
                        }), (0,
                        i.jsx)(d, {
                            toggleConsent: C,
                            consentGiven: w
                        })]
                    })
                }), (0,
                i.jsx)(s.Z, {
                    isSmall: !m,
                    hide: !g
                })]
            })
        }
    },
    9317: function(e, n, t) {
        "use strict";
        t.d(n, {
            q: function() {
                return h
            },
            V: function() {
                return w
            }
        });
        var i = t(2322)
          , r = t(2784)
          , a = t(4589)
          , s = t(7348)
          , o = t(6769)
          , l = t(6669)
          , c = t(8645)
          , u = t(632)
          , d = t(7676);
        function f(e, n) {
            return n || (n = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(n)
                }
            }))
        }
        function m() {
            var e = f([""]);
            return m = function() {
                return e
            }
            ,
            e
        }
        function x() {
            var e = f(["\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 110%);\n"]);
            return x = function() {
                return e
            }
            ,
            e
        }
        var p = o.Z.img(m())
          , h = o.Z.div(x())
          , g = l.aN.applyFormName;
        function w(e) {
            var n = e.formName
              , t = void 0 === n ? g : n
              , o = (0,
            r.useContext)(u.Z)
              , l = o.isValid
              , f = o.isLoading
              , m = o.isOpen
              , x = o.isSuccess
              , h = o.phone
              , w = o.consentGiven
              , v = o.isButtonDisabled
              , j = o.clearInput
              , b = o.toggleInput
              , y = o.handleSubmit
              , N = o.handleChange
              , C = o.toggleConsent;
            return (0,
            i.jsx)("div", {
                className: "w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium",
                children: x ? (0,
                i.jsx)("div", {
                    className: "flex justify-center",
                    children: (0,
                    i.jsx)(d.Z, {})
                }) : (0,
                i.jsxs)("div", {
                    className: "flex flex-col transition-all ease-in",
                    children: [(0,
                    i.jsx)(a.M, {
                        children: m && (0,
                        i.jsx)(s.E.div, {
                            initial: {
                                y: 40,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: 40,
                                opacity: 0
                            },
                            className: "phone-input-container",
                            children: (0,
                            i.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0,
                                i.jsx)("input", {
                                    id: "phone",
                                    value: h,
                                    className: "phone-input w-full text-lg border-0 outline-none rounded-tr-xl rounded-tl-xl py-3",
                                    onChange: N,
                                    placeholder: "Enter your phone number",
                                    autoComplete: "off",
                                    onKeyDown: N
                                }), (0,
                                i.jsx)("span", {
                                    className: "w-6",
                                    children: h.length ? h.length < 10 ? (0,
                                    i.jsx)("button", {
                                        onClick: function() {
                                            j(),
                                            b()
                                        },
                                        children: (0,
                                        i.jsx)(c.aM, {})
                                    }) : (0,
                                    i.jsx)(c.JO, {
                                        valid: l
                                    }) : null
                                })]
                            })
                        })
                    }), (0,
                    i.jsx)("button", {
                        className: "p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]",
                        onClick: function() {
                            h && l && m ? (y({
                                phone: h,
                                commsOptIn: w
                            }, t),
                            j(),
                            b()) : b()
                        },
                        disabled: v,
                        children: f ? (0,
                        i.jsxs)("span", {
                            className: "inline-flex items-center justify-center",
                            children: [(0,
                            i.jsxs)("svg", {
                                className: "animate-spin mr-4 h-5 w-5 text-black",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0,
                                i.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0,
                                i.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), "Applying ..."]
                        }) : (0,
                        i.jsxs)(i.Fragment, {
                            children: [(0,
                            i.jsx)("span", {
                                children: "Apply now"
                            }), (0,
                            i.jsx)(p, {
                                src: "/images/right_arrow.svg",
                                alt: "right_arrow",
                                width: "21px",
                                className: "inline ml-3"
                            })]
                        })
                    }), m || f ? (0,
                    i.jsx)(c.lM, {
                        consentGiven: w,
                        toggleConsent: C
                    }) : null]
                })
            })
        }
    },
    7676: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var i = t(2322)
          , r = t(5251);
        function a(e) {
            var n = e.isSmall
              , t = void 0 === n || n
              , a = e.hide
              , s = void 0 !== a && a;
            return (0,
            i.jsxs)("div", {
                className: "flex ".concat(s ? "hidden" : "block", " ").concat(t ? "max-w-xs flex-col justify-start" : "w-full flex-row items-center justify-between"),
                children: [(0,
                i.jsx)("div", {
                    className: "w-full max-w-[300px]",
                    children: (0,
                    i.jsx)("a", {
                        href: r.q.downloadLink,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]",
                        children: (0,
                        i.jsx)("div", {
                            className: "w-full flex justify-center items-center",
                            children: (0,
                            i.jsx)("span", {
                                children: "Download"
                            })
                        })
                    })
                }), (0,
                i.jsx)("div", {
                    className: "my-2",
                    children: (0,
                    i.jsxs)("p", {
                        className: "text-white md:text-black text-[10px] leading-3",
                        children: ["Thank you for your interest in the Uni Card.", (0,
                        i.jsx)("br", {}), " Download the Uni Cards app now and get your Uni Card in minutes."]
                    })
                })]
            })
        }
    },
    7647: function(e, n, t) {
        "use strict";
        t.r(n);
        var i = t(2322)
          , r = t(9626)
          , a = t(8548)
          , s = 'At Uni, we\u2019re committed to <span class="uni-gradient-primary"> delivering an unmatched credit experience </span> for millions of Indians.'
          , o = [{
            name: "SBM Bank",
            src: "/images/SBM.svg",
            alt: "sbm bank"
        }];
        n.default = function() {
            return (0,
            i.jsx)(a.default, {
                background: "bg-[#222627] lg:py-[120px]",
                children: (0,
                i.jsxs)(r.W2, {
                    className: "md:flex md:flex-col text-left md:text-center",
                    children: [(0,
                    i.jsx)("p", {
                        className: "mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]",
                        children: (0,
                        i.jsx)(r.v0, {
                            as: "span",
                            message: s
                        })
                    }), (0,
                    i.jsx)("p", {
                        className: "mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl",
                        children: "On this mission, we\u2019ve partnered with some of the best in the business."
                    }), (0,
                    i.jsx)("div", {
                        className: "md:mt-24 flex flex-row justify-center flex-wrap",
                        children: o.map((function(e) {
                            var n = e.name
                              , t = e.alt
                              , r = e.src;
                            return (0,
                            i.jsx)("div", {
                                className: "flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4",
                                children: (0,
                                i.jsx)("img", {
                                    className: "w-full h-full",
                                    src: r,
                                    alt: t
                                })
                            }, n)
                        }
                        ))
                    })]
                })
            })
        }
    },
    632: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return o
            },
            C: function() {
                return l
            }
        });
        var i = t(2322)
          , r = t(2784)
          , a = t(3686)
          , s = /\d/
          , o = (0,
        r.createContext)();
        function l(e) {
            var n = e.children
              , t = (0,
            r.useState)(!1)
              , l = t[0]
              , c = t[1]
              , u = (0,
            r.useState)(!1)
              , d = u[0]
              , f = u[1]
              , m = (0,
            r.useState)("")
              , x = m[0]
              , p = m[1]
              , h = (0,
            r.useState)(!0)
              , g = h[0]
              , w = h[1]
              , v = (0,
            a.R2)()
              , j = v.isLoading
              , b = v.isSuccess;
            (0,
            r.useEffect)((function() {
                c(!1)
            }
            ), [b]);
            var y = function() {
                return !b && c((function(e) {
                    return !e
                }
                ))
            }
              , N = function() {
                return p("")
            }
              , C = (0,
            r.useMemo)((function() {
                return x && !d || !g
            }
            ), [x, d, g]);
            return (0,
            i.jsx)(o.Provider, {
                value: {
                    isOpen: l,
                    isValid: d,
                    isLoading: j,
                    isSuccess: b,
                    consentGiven: g,
                    phone: x,
                    isButtonDisabled: C,
                    toggleInput: y,
                    clearInput: N,
                    handleChange: function(e) {
                        var n = e.target.value
                          , t = e.key
                          , i = e.type;
                        if (!n || s.test(n) && !(n.length > 10)) {
                            if ("keydown" === i && "Escape" === t)
                                return N(),
                                void y();
                            p(n),
                            f((0,
                            a.Dm)(n))
                        }
                    },
                    handleSubmit: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "hero_apply_form"
                          , t = (0,
                        a.GZ)(e, n);
                        v.mutate(t)
                    },
                    toggleConsent: function() {
                        w((function(e) {
                            return !e
                        }
                        ))
                    }
                },
                children: n
            })
        }
    },
    8548: function(e, n, t) {
        "use strict";
        t.r(n);
        var i = t(2322);
        n.default = function(e) {
            var n = e.children
              , t = e.background;
            return (0,
            i.jsx)("section", {
                className: "py-12 lg:py-[100px] ".concat(t),
                children: n
            })
        }
    },
    5251: function(e, n, t) {
        "use strict";
        t.d(n, {
            q: function() {
                return i
            }
        });
        var i = {
            phonePlaceholder: "Enter Phone Number",
            applyButtonLabel: "Apply Now",
            applyingBtn: "Applying...",
            consentMsg: "You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.",
            downloadLink: "https://uni-growth.onelink.me/v6cm/"
        }
    }
}]);

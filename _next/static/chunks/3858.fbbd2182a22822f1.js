"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3858, 8548], {
    3858: function(e, r, n) {
        n.r(r);
        var t = n(2322)
          , l = n(8548)
          , a = n(9626);
        function c(e, r) {
            if (null == e)
                return {};
            var n, t, l = function(e, r) {
                if (null == e)
                    return {};
                var n, t, l = {}, a = Object.keys(e);
                for (t = 0; t < a.length; t++)
                    n = a[t],
                    r.indexOf(n) >= 0 || (l[n] = e[n]);
                return l
            }(e, r);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (t = 0; t < a.length; t++)
                    n = a[t],
                    r.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
            }
            return l
        }
        var o = n(6669).QY.download;
        r.default = function() {
            return (0,
            t.jsx)(l.default, {
                background: "bg-background-gradient lg:py-[100px] bg-cover download-bg",
                children: (0,
                t.jsxs)(a.W2, {
                    className: "md:flex md:justify-around items-center my-4",
                    children: [(0,
                    t.jsx)("p", {
                        className: "mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight",
                        children: "Download now to get started"
                    }), (0,
                    t.jsx)("div", {
                        className: "flex",
                        children: o.links.map((function(e) {
                            var r, n = e.type, l = e.label, o = (e.link,
                            e.iconComp), d = e.href, s = e.className;
                            c(e, ["type", "label", "link", "iconComp", "href", "className"]);
                            return (0,
                            t.jsxs)("a", {
                                href: d,
                                className: "w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black ".concat(s),
                                children: [(r = o,
                                "Google" === r ? (0,
                                t.jsx)(a.MX, {
                                    dark: !0,
                                    mr: 2
                                }) : (0,
                                t.jsx)(a.OT, {
                                    dark: !0,
                                    mr: 2
                                })), l]
                            }, n)
                        }
                        ))
                    })]
                })
            })
        }
    },
    8548: function(e, r, n) {
        n.r(r);
        var t = n(2322);
        r.default = function(e) {
            var r = e.children
              , n = e.background;
            return (0,
            t.jsx)("section", {
                className: "py-12 lg:py-[100px] ".concat(n),
                children: r
            })
        }
    }
}]);

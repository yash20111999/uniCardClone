"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3129], {
    3129: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return o
            }
        });
        var i = n(2322)
          , r = n(7729)
          , a = n(3542);
        function o(e) {
            var t = e.title
              , n = void 0 === t ? "Uni Cards - The Pay 1/3rd Card" : t
              , o = e.description
              , c = void 0 === o ? "The Pay 1/3rd revolution is here. With Uni Pay 1/3rd Card pay in 3 parts over 3 months for no extra cost or, pay in 1 month and get 1% cashback." : o
              , s = e.criteoTag
              , d = void 0 !== s && s;
            return (0,
            i.jsxs)(r.default, {
                children: [(0,
                i.jsx)("title", {
                    children: n
                }), (0,
                i.jsx)("link", {
                    rel: "icon",
                    href: "/images/favicon.ico"
                }), (0,
                i.jsx)("meta", {
                    name: "description",
                    content: c
                }), (0,
                i.jsx)("meta", {
                    property: "og:title",
                    content: n
                }), (0,
                i.jsx)("meta", {
                    property: "og:description",
                    content: c
                }), (0,
                i.jsx)("meta", {
                    property: "og:image",
                    content: "/images/card_preview.jpeg"
                }), (0,
                i.jsx)("meta", {
                    name: "og:type",
                    content: "website"
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:site",
                    content: "@cards_uni"
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:title",
                    content: n
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:description",
                    content: c
                }), (0,
                i.jsx)("meta", {
                    name: "twitter:image",
                    content: "/images/card_preview.jpeg"
                }), d && (0,
                i.jsx)("script", {
                    dangerouslySetInnerHTML: {
                        __html: 'window.criteo_q = window.criteo_q || [];\n              var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";\n              window.criteo_q.push(\n                { event: "setAccount", account: '.concat(a.env.NEXT_PUBLIC, '},\n                { event: "setSiteType", type: deviceType},\n              );')
                    }
                })]
            })
        }
    }
}]);

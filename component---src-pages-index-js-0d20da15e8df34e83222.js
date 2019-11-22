(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(157),o=a(192),l=a(156);t.default=function(){return r.a.createElement(i.a,{location:"/"},r.a.createElement(l.a,{title:"Home"}),r.a.createElement("p",null,"Welcome on my website, I'm please to propose you some interactive explanations."),r.a.createElement(o.a,{articleLocation:"/tic-tac-toe/",title:"tic-tac-toe AI",description:"Can you defeat an AI at tic-tac-toe? That's the challenge of this article. Lets try to beat it before studying how it works."}))}},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(155),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},155:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},156:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(177),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,c=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c},{name:"google-site-verification",content:"H5I7MCgD6ip6rafQkiIUvhaoQXlvfJoK3H4KHSg7ZZs"}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},157:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(154),c=(a(168),a(169),a(262)),s=a(263),u=a(267),m=a(173),p=a.n(m),g=a(170),d=a.n(g),f=function(e){var t=e.currentLanguage,a=void 0===t?"English":t,n=e.languages,i=void 0===n?[{name:"Français",file:"fr"},{name:"English",file:""}]:n,o=e.location,m=void 0===o?"/":o,g=r.a.useState(null),f=g[0],h=g[1];return r.a.createElement("div",{className:d.a.root},r.a.createElement(c.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},className:d.a.menuTitle},r.a.createElement(p.a,null),r.a.createElement("span",null,a)),r.a.createElement(s.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:function(){h(null)},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},className:d.a.menu},i.map(function(e){return r.a.createElement(u.a,{key:e.file,selected:a===e.name},r.a.createElement(l.a,{className:d.a.link,to:m+"/"+e.file},e.name))})))},h=a(174),E=a.n(h),v=function(e){var t=e.siteTitle,a=e.currentLanguage,n=void 0===a?"English":a,i=e.location,o=e.languages,c=void 0===o?{"Français":"fr",English:""}:o;return console.log(i),r.a.createElement("header",{className:E.a.header},r.a.createElement("div",{className:E.a.container},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(l.a,{to:"/"+c[n],className:E.a.title},t)," ",("Français"===n?"par":"from")+" ",r.a.createElement(l.a,{to:"/about/"+c[n],className:E.a.subtitle},"Alexandre Fauquette")),r.a.createElement(f,{currentLanguage:n,location:i,style:{float:"right"}})))};v.propTypes={siteTitle:o.a.string},v.defaultProps={siteTitle:""};var y=v,w=(a(175),a(176)),b=a.n(w),T=function(e){var t=e.children,a=e.location,n=e.currentLanguage,i=void 0===n?"English":n;return r.a.createElement("div",{className:b.a.root},r.a.createElement(y,Object.assign({siteTitle:"A Mathematical Journey"},{currentLanguage:i,location:a})),r.a.createElement("main",null,r.a.createElement("article",null,t)),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};T.propTypes={children:o.a.node.isRequired};t.a=T},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},161:function(e){e.exports={data:{site:{siteMetadata:{title:"A Math Journey",description:"When equations are not cristal clear, there is a solution: explorable explanation",author:"Alexandre Fauquette"}}}}},192:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(154),o=a(210),l=a.n(o);t.a=function(e){var t=e.articleLocation,a=e.title,n=e.image,o=e.description;return r.a.createElement(i.a,{to:t},r.a.createElement("div",{className:l.a.root},r.a.createElement("h2",null,a),n&&r.a.createElement("img",{src:n,alt:""}),r.a.createElement("p",null,o)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0d20da15e8df34e83222.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(156),o=a(155),l=a(208),c=a.n(l),s=a(190),u=a.n(s);t.default=function(){return r.a.createElement(i.a,{location:"/about"},r.a.createElement(o.a,{title:"About"}),r.a.createElement("div",{className:c.a.root},r.a.createElement("h2",null,"About"),r.a.createElement("img",{src:u.a,alt:"profile"}),r.a.createElement("p",null,"Welcome on my website! I'm a french graduate engineer. I enjoy math an computer science. This web site is still at its beggining. Howeaver, I hope you will like those"," ",r.a.createElement("a",{href:"https://explorabl.es/"},"explorable explanations")," (explications If you have questions, avises or comments, do not hesitate to contact me by mail, ",r.a.createElement("a",{href:"https://twitter.com/AleFauquette"},"twitter")," or"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/alexandre-fauquette/"},"linkedin"),".")))}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(154),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},155:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(176),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,c=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c},{name:"google-site-verification",content:"H5I7MCgD6ip6rafQkiIUvhaoQXlvfJoK3H4KHSg7ZZs"}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},156:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(153),c=(a(167),a(168),a(261)),s=a(262),u=a(266),m=a(172),p=a.n(m),g=a(169),d=a.n(g),f=function(e){var t=e.currentLanguage,a=void 0===t?"English":t,n=e.languages,i=void 0===n?[{name:"Français",file:"fr"},{name:"English",file:""}]:n,o=e.location,m=void 0===o?"/":o,g=r.a.useState(null),f=g[0],h=g[1];return r.a.createElement("div",{className:d.a.root},r.a.createElement(c.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},className:d.a.menuTitle},r.a.createElement(p.a,null),r.a.createElement("span",null,a)),r.a.createElement(s.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:function(){h(null)},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},className:d.a.menu},i.map(function(e){return r.a.createElement(u.a,{key:e.file,selected:a===e.name},r.a.createElement(l.a,{className:d.a.link,to:m+"/"+e.file},e.name))})))},h=a(173),E=a.n(h),v=function(e){var t=e.siteTitle,a=e.currentLanguage,n=void 0===a?"English":a,i=e.location,o=e.languages,c=void 0===o?{"Français":"fr",English:""}:o;return console.log(i),r.a.createElement("header",{className:E.a.header},r.a.createElement("div",{className:E.a.container},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(l.a,{to:"/"+c[n],className:E.a.title},t)," ",("Français"===n?"par":"from")+" ",r.a.createElement(l.a,{to:"/about/"+c[n],className:E.a.subtitle},"Alexandre Fauquette")),r.a.createElement(f,{currentLanguage:n,location:i,style:{float:"right"}})))};v.propTypes={siteTitle:o.a.string},v.defaultProps={siteTitle:""};var b=v,w=(a(174),a(175)),y=a.n(w),x=function(e){var t=e.children,a=e.location,n=e.currentLanguage,i=void 0===n?"English":n;return r.a.createElement("div",{className:y.a.root},r.a.createElement(b,Object.assign({siteTitle:"A Mathematical Journey"},{currentLanguage:i,location:a})),r.a.createElement("main",null,r.a.createElement("article",null,t)),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};x.propTypes={children:o.a.node.isRequired};t.a=x},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},160:function(e){e.exports={data:{site:{siteMetadata:{title:"A Math Journey",description:"When equations are not cristal clear, there is a solution: explorable explanation",author:"Alexandre Fauquette"}}}}},190:function(e,t,a){e.exports=a.p+"static/AlexF-150-4e80e8fb69ee60335917529e891b5906.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-index-js-cac078c3109d00e4249b.js.map
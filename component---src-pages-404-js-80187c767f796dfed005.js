(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(156),l=a(155);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(154),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},155:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(176),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,o=n.data.site,s=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s},{name:"google-site-verification",content:"H5I7MCgD6ip6rafQkiIUvhaoQXlvfJoK3H4KHSg7ZZs"}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},156:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(153),s=(a(167),a(168),a(261)),c=a(262),u=a(266),m=a(172),p=a.n(m),d=a(169),g=a.n(d),f=function(e){var t=e.currentLanguage,a=void 0===t?"English":t,n=e.languages,i=void 0===n?[{name:"Français",file:"fr"},{name:"English",file:""}]:n,l=e.location,m=void 0===l?"/":l,d=r.a.useState(null),f=d[0],h=d[1];return r.a.createElement("div",{className:g.a.root},r.a.createElement(s.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},className:g.a.menuTitle},r.a.createElement(p.a,null),r.a.createElement("span",null,a)),r.a.createElement(c.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:function(){h(null)},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},className:g.a.menu},i.map(function(e){return r.a.createElement(u.a,{key:e.file,selected:a===e.name},r.a.createElement(o.a,{className:g.a.link,to:m+"/"+e.file},e.name))})))},h=a(173),E=a.n(h),v=function(e){var t=e.siteTitle,a=e.currentLanguage,n=void 0===a?"English":a,i=e.location,l=e.languages,s=void 0===l?{"Français":"fr",English:""}:l;return console.log(i),r.a.createElement("header",{className:E.a.header},r.a.createElement("div",{className:E.a.container},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(o.a,{to:"/"+s[n],className:E.a.title},t)," ",("Français"===n?"par":"from")+" ",r.a.createElement(o.a,{to:"/about/"+s[n],className:E.a.subtitle},"Alexandre Fauquette")),r.a.createElement(f,{currentLanguage:n,location:i,style:{float:"right"}})))};v.propTypes={siteTitle:l.a.string},v.defaultProps={siteTitle:""};var y=v,w=(a(174),a(175)),b=a.n(w),N=function(e){var t=e.children,a=e.location,n=e.currentLanguage,i=void 0===n?"English":n;return r.a.createElement("div",{className:b.a.root},r.a.createElement(y,Object.assign({siteTitle:"A Mathematical Journey"},{currentLanguage:i,location:a})),r.a.createElement("main",null,r.a.createElement("article",null,t)),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};N.propTypes={children:l.a.node.isRequired};t.a=N},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},160:function(e){e.exports={data:{site:{siteMetadata:{title:"A Math Journey",description:"When equations are not cristal clear, there is a solution: explorable explanation",author:"Alexandre Fauquette"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-80187c767f796dfed005.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(156),o=a(191),l=a(155);t.default=function(){return r.a.createElement(i.a,{location:"/",currentLanguage:"Français"},r.a.createElement(l.a,{title:"Accueil"}),r.a.createElement("p",null,"Bienvenu sur mon site, Je vous y trouverez des exmplications interactives."),r.a.createElement(o.a,{articleLocation:"/tic-tac-toe/fr",title:"AI pour un morpion",description:"Pouvez vous battre une intelligence au morpion ? Tel est la défis de cet article. Essayez de battre mon IA avant de découvrir comment elle fonctionne."}))}},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(154),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},155:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(176),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,c=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},156:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(153),c=(a(167),a(168),a(261)),s=a(262),u=a(266),m=a(172),p=a.n(m),d=a(169),g=a.n(d),f=function(e){var t=e.currentLanguage,a=void 0===t?"English":t,n=e.languages,i=void 0===n?[{name:"Français",file:"fr"},{name:"English",file:""}]:n,o=e.location,m=void 0===o?"/":o,d=r.a.useState(null),f=d[0],E=d[1];return r.a.createElement("div",{className:g.a.root},r.a.createElement(c.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)},className:g.a.menuTitle},r.a.createElement(p.a,null),r.a.createElement("span",null,a)),r.a.createElement(s.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:function(){E(null)},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},className:g.a.menu},i.map(function(e){return r.a.createElement(u.a,{key:e.file,selected:a===e.name},r.a.createElement(l.a,{className:g.a.link,to:m+"/"+e.file},e.name))})))},E=a(173),v=a.n(E),h=function(e){var t=e.siteTitle,a=e.currentLanguage,n=void 0===a?"English":a,i=e.location,o=e.languages,c=void 0===o?{"Français":"fr",English:""}:o;return console.log(i),r.a.createElement("header",{className:v.a.header},r.a.createElement("div",{className:v.a.container},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(l.a,{to:"/"+c[n],className:v.a.title},t)," ",("Français"===n?"par":"from")+" ",r.a.createElement(l.a,{to:"/about/"+c[n],className:v.a.subtitle},"Alexandre Fauquette")),r.a.createElement(f,{currentLanguage:n,location:i,style:{float:"right"}})))};h.propTypes={siteTitle:o.a.string},h.defaultProps={siteTitle:""};var y=h,b=(a(174),a(175)),w=a.n(b),T=function(e){var t=e.children,a=e.location,n=e.currentLanguage,i=void 0===n?"English":n;return r.a.createElement("div",{className:w.a.root},r.a.createElement(y,Object.assign({siteTitle:"A Mathematical Journey"},{currentLanguage:i,location:a})),r.a.createElement("main",null,r.a.createElement("article",null,t)),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};T.propTypes={children:o.a.node.isRequired};t.a=T},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},160:function(e){e.exports={data:{site:{siteMetadata:{title:"A Math Journey",description:"When equations are not cristal clear, there is a solution: explorable explanation",author:"Alexandre Fauquette"}}}}},191:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(153),o=a(209),l=a.n(o);t.a=function(e){var t=e.articleLocation,a=e.title,n=e.image,o=e.description;return r.a.createElement(i.a,{to:t},r.a.createElement("div",{className:l.a.root},r.a.createElement("h2",null,a),n&&r.a.createElement("img",{src:n}),r.a.createElement("p",null,o)))}}}]);
//# sourceMappingURL=component---src-pages-fr-js-fd64b374ba56ae92328b.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(157),l=a(156),o=a(209),c=a.n(o),s=a(191),u=a.n(s);t.default=function(){return r.a.createElement(i.a,{location:"/about"},r.a.createElement(l.a,{title:"About"}),r.a.createElement("div",{className:c.a.root},r.a.createElement("h2",null,"About"),r.a.createElement("img",{src:u.a,alt:"profile"}),r.a.createElement("p",null,"Welcome on my website! I'm a french graduate engineer. I enjoy math an computer science. This web site is still at its beggining. Howeaver, I hope you will like those"," ",r.a.createElement("a",{href:"https://explorabl.es/"},"explorable explanations")," (explications If you have questions, avises or comments, do not hesitate to contact me by mail, ",r.a.createElement("a",{href:"https://twitter.com/AleFauquette"},"twitter")," or"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/alexandre-fauquette/"},"linkedin"),".")))}},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(155),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},155:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},156:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(177),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,o=n.data.site,c=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c},{name:"google-site-verification",content:"H5I7MCgD6ip6rafQkiIUvhaoQXlvfJoK3H4KHSg7ZZs"}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},157:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(154),c=(a(168),a(169),a(262)),s=a(263),u=a(267),m=a(173),p=a.n(m),g=a(170),d=a.n(g),f=function(e){var t=e.currentLanguage,a=void 0===t?"English":t,n=e.languages,i=void 0===n?[{name:"Français",file:"fr"},{name:"English",file:""}]:n,l=e.location,m=void 0===l?"/":l,g=r.a.useState(null),f=g[0],h=g[1];return r.a.createElement("div",{className:d.a.root},r.a.createElement(c.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},className:d.a.menuTitle},r.a.createElement(p.a,null),r.a.createElement("span",null,a)),r.a.createElement(s.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:function(){h(null)},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},className:d.a.menu},i.map(function(e){return r.a.createElement(u.a,{key:e.file,selected:a===e.name},r.a.createElement(o.a,{className:d.a.link,to:m+"/"+e.file},e.name))})))},h=a(174),E=a.n(h),v=function(e){var t=e.siteTitle,a=e.currentLanguage,n=void 0===a?"English":a,i=e.location,l=e.languages,c=void 0===l?{"Français":"fr",English:""}:l;return r.a.createElement("header",{className:E.a.header},r.a.createElement("div",{className:E.a.firstLine},r.a.createElement(o.a,{to:"/"+c[n],className:E.a.title},r.a.createElement("h1",{style:{margin:0}},t)),r.a.createElement(f,{currentLanguage:n,location:i,style:{float:"right"}})),r.a.createElement("ol",{className:E.a.menu},r.a.createElement("li",null,r.a.createElement(o.a,{to:"/about/"+c[n],className:E.a.subtitle},"About")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/"+c[n],className:E.a.title},"Home"))))};v.propTypes={siteTitle:l.a.string},v.defaultProps={siteTitle:""};var b=v,w=(a(175),a(176)),y=a.n(w),x=function(e){var t=e.children,a=e.location,n=e.currentLanguage,i=void 0===n?"English":n;return r.a.createElement("div",{className:y.a.root},r.a.createElement(b,Object.assign({siteTitle:"A Mathematical Journey"},{currentLanguage:i,location:a})),r.a.createElement("main",null,r.a.createElement("article",{className:y.a.article},t)),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};x.propTypes={children:l.a.node.isRequired};t.a=x},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},161:function(e){e.exports={data:{site:{siteMetadata:{title:"A Math Journey",description:"When equations are not cristal clear, there is a solution: explorable explanation",author:"Alexandre Fauquette"}}}}},191:function(e,t,a){e.exports=a.p+"static/AlexF-150-4e80e8fb69ee60335917529e891b5906.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-index-js-6eb8339ef661a54224c2.js.map
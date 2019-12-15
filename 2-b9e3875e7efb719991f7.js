(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{154:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(4),o=n.n(r),l=n(33),s=n.n(l);n.d(t,"a",function(){return s.a});n(155),a.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},155:function(e,t,n){var i;e.exports=(i=n(158))&&i.default||i},156:function(e,t,n){"use strict";var i=n(161),a=n(0),r=n.n(a),o=n(4),l=n.n(o),s=n(177),c=n.n(s);function u(e){var t=e.description,n=e.lang,a=e.meta,o=e.title,l=i.data.site,s=t||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s},{name:"google-site-verification",content:"H5I7MCgD6ip6rafQkiIUvhaoQXlvfJoK3H4KHSg7ZZs"}].concat(a)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},157:function(e,t,n){"use strict";n(34);var i=n(0),a=n.n(i),r=n(4),o=n.n(r),l=n(154),s=(n(168),n(169),n(262)),c=n(263),u=n(267),h=n(173),m=n.n(h),d=n(170),f=n.n(d),g=function(e){var t=e.currentLanguage,n=void 0===t?"English":t,i=e.languages,r=void 0===i?[{name:"Français",file:"fr"},{name:"English",file:""}]:i,o=e.location,h=void 0===o?"/":o,d=a.a.useState(null),g=d[0],p=d[1];return a.a.createElement("div",{className:f.a.root},a.a.createElement(s.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},className:f.a.menuTitle},a.a.createElement(m.a,null),a.a.createElement("span",null,n)),a.a.createElement(c.a,{id:"simple-menu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:function(){p(null)},getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},className:f.a.menu},r.map(function(e){return a.a.createElement(u.a,{key:e.file,selected:n===e.name},a.a.createElement(l.a,{className:f.a.link,to:h+"/"+e.file},e.name))})))},p=n(174),E=n.n(p),v=function(e){var t=e.siteTitle,n=e.currentLanguage,i=void 0===n?"English":n,r=e.location,o=e.languages,s=void 0===o?{"Français":"fr",English:""}:o;return a.a.createElement("header",{className:E.a.header},a.a.createElement("div",{className:E.a.container},a.a.createElement("h1",{style:{margin:0}},a.a.createElement(l.a,{to:"/"+s[i],className:E.a.title},t)," ",("Français"===i?"par":"from")+" ",a.a.createElement(l.a,{to:"/about/"+s[i],className:E.a.subtitle},"Alexandre Fauquette")),a.a.createElement(g,{currentLanguage:i,location:r,style:{float:"right"}})))};v.propTypes={siteTitle:o.a.string},v.defaultProps={siteTitle:""};var w=v,y=(n(175),n(176)),T=n.n(y),L=function(e){var t=e.children,n=e.location,i=e.currentLanguage,r=void 0===i?"English":i;return a.a.createElement("div",{className:T.a.root},a.a.createElement(w,Object.assign({siteTitle:"A Mathematical Journey"},{currentLanguage:r,location:n})),a.a.createElement("main",null,a.a.createElement("article",null,t)),a.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))};L.propTypes={children:o.a.node.isRequired};t.a=L},158:function(e,t,n){"use strict";n.r(t);n(34);var i=n(0),a=n.n(i),r=n(4),o=n.n(r),l=n(55),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},161:function(e){e.exports={data:{site:{siteMetadata:{title:"A Math Journey",description:"When equations are not cristal clear, there is a solution: explorable explanation",author:"Alexandre Fauquette"}}}}},165:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){function e(){this.PLAYERS=["X","O"],this.NULL="n",this.EMPTY=".",this.UNKNOW="?"}var t=e.prototype;return t.actions=function(e){for(var t=[],n=0;n<9;n++)"."===e[n]&&t.push(n);return t},t.getPlayerID=function(e){if(9===e.length){for(var t=0,n=0;n<9;n++)"."!==e[n]&&t++;return t%2}return 1===e.length?this.PLAYERS.indexOf(e):null},t.getPlayer=function(e){return this.PLAYERS[this.getPlayerID(e)]},t.getAdversary=function(e){return e===this.PLAYERS[0]?this.PLAYERS[1]:e===this.PLAYERS[1]?this.PLAYERS[0]:void 0},t.play=function(e,t){var n=this.getPlayer(e);return e.substring(0,t)+n+e.substring(t+1)},t.isFull=function(e){for(var t=0;t<9;t++)if("."===e[t])return!1;return!0},t.isFinished=function(e){for(var t=0;t<3;t++){if(e[3*t]===e[3*t+1]&&e[3*t+1]===e[3*t+2]&&e[3*t]!==this.EMPTY)return!0;if(e[t]===e[3+t]&&e[3+t]===e[6+t]&&e[t]!==this.EMPTY)return!0}return e[0]===e[4]&&e[4]===e[8]&&e[0]!==this.EMPTY||(e[2]===e[4]&&e[4]===e[6]&&e[2]!==this.EMPTY||this.isFull(e))},t.getWinner=function(e){for(var t=0;t<3;t++){if(e[3*t]===e[3*t+1]&&e[3*t+1]===e[3*t+2]&&e[3*t]!==this.EMPTY)return e[3*t];if(e[t]===e[3+t]&&e[3+t]===e[6+t]&&e[t]!==this.EMPTY)return e[t]}return e[0]===e[4]&&e[4]===e[8]&&e[0]!==this.EMPTY?e[0]:e[2]===e[4]&&e[4]===e[6]&&e[2]!==this.EMPTY?e[2]:this.isFull(e)?this.NULL:this.UNKNOW},t.getVictory=function(e){for(var t=0;t<3;t++){if(e[3*t]===e[3*t+1]&&e[3*t+1]===e[3*t+2]&&e[3*t]!==this.EMPTY)return[{col:0,line:t},{col:2,line:t}];if(e[t]===e[3+t]&&e[3+t]===e[6+t]&&e[t]!==this.EMPTY)return[{col:t,line:0},{col:t,line:2}]}return e[0]===e[4]&&e[4]===e[8]&&e[0]!==this.EMPTY?[{col:0,line:0},{col:2,line:2}]:e[2]===e[4]&&e[4]===e[6]&&e[2]!==this.EMPTY?[{col:2,line:0},{col:0,line:2}]:[]},e}()},166:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"d",function(){return o});n(77),n(34),n(75),n(76);var i=new(n(165).a);function a(e,t,n,r){var o,l,s=[],c=i.PLAYERS[n],u=i.PLAYERS[(1+n)%2];if(void 0===e[t]&&(e[t]={ends:t,curentPlayer:n,winner:"",timeToWin:null}),i.getWinner(t)!==i.UNKNOW)return o=i.getWinner(t).toLowerCase(),e[t].winner=o,e[t].timeToWin=1,e[t].final=!0,{winner:o,timeToWin:1};for(var h=0;h<9;h++)if(e[t].ends[h]===i.EMPTY){var m=t.substring(0,h)+c+t.substring(h+1),d=void 0,f=void 0,g=void 0;void 0!==e[m]&&""!==e[m].winner?(d=e[m].winner,f=e[m].timeToWin):(d=(g=a(e,m,(n+1)%2,r)).winner,f=g.timeToWin),e[t].ends=e[t].ends.substring(0,h)+d+e[t].ends.substring(h+1),s.push({winner:d,timeToWin:f})}return s.map(function(e){return e.winner}).includes(c.toLowerCase())?(l=Math.min.apply(Math,s.map(function(e){return e.winner===c.toLowerCase()?e.timeToWin:null}).filter(function(e){return null!==e})),o=c.toLowerCase()):s.map(function(e){return e.winner}).includes(i.NULL)?(l=Math.min.apply(Math,s.map(function(e){return e.winner===i.NULL?e.timeToWin:null}).filter(function(e){return null!==e})),o=i.NULL):s.map(function(e){return e.winner}).includes(u.toLowerCase())&&(l=Math.min.apply(Math,s.map(function(e){return e.winner===u.toLowerCase()?e.timeToWin:null}).filter(function(e){return null!==e})),o=u.toLowerCase()),e[t].winner=o,e[t].timeToWin=n===r?l:s.map(function(e){return e.timeToWin}).reduce(function(e,t){return e+t}),{winner:e[t].winner,timeToWin:e[t].timeToWin}}function r(e){var t=0,n=[],i=[],a=i.join(""),r=e[a],o=!1,l=[];l.push(Object.assign({},r,{x:i.length,y:t,id:a}));var s=[[0,0]];for(r.childrenActions.length>0&&(n.push(0),i.push(r.childrenActions[0]),r=e[i.join("")]);n.length>0;){i=[];for(var c=0;c<n.length;c++)i.push(e[i.join("")].childrenActions[n[c]]);var u=i.join("");r=e[u],o?(r=e[i.slice(0,-1).join("")],s.pop(),n[n.length-1]=n[n.length-1]+1):(l.push(Object.assign({},r,{x:i.length,y:t,id:u,parent:s[s.length-1]})),s.push([i.length,t]),r.childrenActions.length>0?n.push(0):(r=e[i.slice(0,-1).join("")],s.pop(),n[n.length-1]=n[n.length-1]+1)),n[n.length-1]>=r.childrenActions.length||r.retracted?(n.pop(),o=!0):(0!==n[n.length-1]&&(t+=1),o=!1)}return l}function o(e,t,n,a,r,l){if(i.isFinished(a))t[n]={grid:a,ends:a,childrenActions:[],timeToWin:e[a].timeToWin,winner:e[a].winner};else{var s=i.actions(a);if(r===l){var c,u,h=1e6;s.forEach(function(t){u=i.play(a,t),e[u].timeToWin<h&&e[u].winner===e[a].winner&&(h=e[u].timeToWin,c=t)}),t[n]={grid:a,ends:e[a].ends,childrenActions:[c],timeToWin:e[a].timeToWin,winner:e[a].winner},o(e,t,n+c,i.play(a,c),(r+1)%2,l)}else t[n]={grid:a,ends:e[a].ends,childrenActions:s,timeToWin:e[a].timeToWin,winner:e[a].winner},s.forEach(function(s){o(e,t,n+s,i.play(a,s),(r+1)%2,l)})}}var l={};function s(e){var t=l[e].ends,n=l[e].winner,a=i.getPlayer(e),r=[];if(n===a.toLowerCase())for(var o,s=0;s<9;s++)t[s]===n&&((o=l[i.play(e,s)].ends.split("").filter(function(e){return e===a.toLowerCase()}).length)>0?r=[s]:0===o&&r.push(s));else if(n===i.NULL)for(var c=0;c<9;c++)t[c]===i.NULL&&r.push(c);else for(var u=0;u<9;u++)e[u]===i.EMPTY&&r.push(u);return r[Math.floor(r.length*Math.random())]}a(l,".........",0,2)},167:function(e,t,n){"use strict";n(77);var i=n(0),a=n.n(i),r=n(243),o=n.n(r),l=function(e){var t=e.width,n=e.height,i=e.state,r=e.winner,l=e.solution,s=e.transform,c=e.localAction,u=e.globalAction,h=e.victory,m=e.addedIndex;return a.a.createElement("g",{className:o.a.board+" "+o.a.winner+" "+(u?o.a.pointerClickable:""),transform:s,onClick:u?u():void 0},a.a.createElement("rect",{x:0,y:0,width:t,height:n,className:""+(r?"x"===r.toLowerCase()?o.a.winnerX:"o"===r.toLowerCase()?o.a.winnerO:"."===r.toLowerCase()?o.a.winnerUnKnoned:"n"===r.toLowerCase()?o.a.winnerNull:"n"===r.toLowerCase()?o.a.winnerSelected:"":"")}),a.a.createElement("g",{className:o.a.elements},i.split("").map(function(e,i){var r=t/6+Math.floor(i%3)*t/3,s=n/6+Math.floor(i/3)*n/3;switch(e){case"X":return a.a.createElement("g",{key:i,className:o.a.X+" "+(m===i?o.a.justAdded:"")},a.a.createElement("line",{x1:r-.4*t/3,y1:s-.4*n/3,x2:r+.4*t/3,y2:s+.4*n/3}),a.a.createElement("line",{x1:r+.4*t/3,y1:s-.4*n/3,x2:r-.4*t/3,y2:s+.4*n/3}));case"O":return a.a.createElement("g",{key:i,className:o.a.O+" "+(m===i?o.a.justAdded:"")},a.a.createElement("circle",{r:.4*Math.min(t,n)/3,cx:r,cy:s}));default:return a.a.createElement("rect",{key:i,x:r-.4*t/3,y:s-.4*n/3,width:.8*t/3,height:.8*n/3,className:(l&&("x"===l[i]?o.a.solutionX:"o"===l[i]?o.a.solutionO:"."===l[i]?o.a.solutionUnKnoned:"n"===l[i]?o.a.solutionNull:"n"===l[i]?o.a.solutionSelected:o.a.empty))+" "+(!l&&c?o.a.clickable:"")+" ",onClick:c?c(i):void 0})}})),a.a.createElement("g",{className:o.a.grid},a.a.createElement("line",{x1:1*t/3,y1:"0",x2:1*t/3,y2:n}),a.a.createElement("line",{x1:2*t/3,y1:"0",x2:2*t/3,y2:n}),a.a.createElement("line",{x1:"0",y1:1*n/3,x2:t,y2:1*n/3}),a.a.createElement("line",{x1:"0",y1:2*n/3,x2:t,y2:2*n/3})),h&&2===h.length&&a.a.createElement("line",{x1:t/6+t*h[1].col/3,y1:n/6+n*h[1].line/3,x2:t/6+t*h[0].col/3,y2:n/6+n*h[0].line/3,className:o.a.winningLine}))};t.a=l},184:function(e,t,n){"use strict";n(34);var i=n(7),a=n.n(i),r=n(0),o=n.n(r),l=n(167),s=n(165),c=n(185),u=n(166),h=new s.a,m=function(e){function t(t){var n;n=e.call(this,t)||this;var i={};Object(u.b)(i,".........",0,t.robot);var a={};return Object(u.d)(i,a,"",".........",0,t.robot),n.state={robot:t.robot,tree:a,initialTree:a,height:a[""].timeToWin,heightLimited:!0},n}a()(t,e);var n=t.prototype;return n.toogleChildrens=function(e){var t=this;return function(){return function(){var n;t.setState({tree:Object.assign({},t.state.tree,(n={},n[e]=Object.assign({},t.state.tree[e],{retracted:!t.state.tree[e].retracted}),n))})}}},n.reset=function(){var e=this;return function(){e.setState(Object.assign({},e.state,{tree:e.state.initialTree}))}},n.toogleHeightLimited=function(){var e=this;return function(){e.setState(Object.assign({},e.state,{heightLimited:!e.state.heightLimited}))}},n.render=function(){var e=this,t=Object(u.e)(this.state.tree),n=t.reduce(function(e,t){return Math.max(e,t.y)},0);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:this.state.heightLimited?"limit-height":"free-height"},o.a.createElement("svg",{viewBox:"0 0 1000 "+100*(n+1),style:{width:"100%"}},t.map(function(t){return o.a.createElement(o.a.Fragment,{key:t.id},o.a.createElement(l.a,{width:75,height:75,state:t.grid,transform:"translate("+(12+100*t.x)+","+(12+100*t.y)+")",globalAction:e.toogleChildrens(t.id),winner:t.winner,victory:h.getVictory(t.grid),addedIndex:t.id&&parseInt(t.id.charAt(t.id.length-1))}),t.parent&&o.a.createElement(c.a,{x0:14+100*t.parent[0]+75,y0:12+100*t.parent[1]+37.5,x1:10+100*t.x,y1:12+100*t.y+37.5}))}))),100*(n+1)>500&&o.a.createElement("button",{onClick:this.toogleHeightLimited(),className:"treeExtension"},this.state.heightLimited?"Extand":"Retract"),o.a.createElement("button",{onClick:this.reset()},"RESET"))},t}(o.a.Component);t.a=m},185:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=function(e){var t=e.x0,n=e.y0,i=e.x1,r=e.y1;return a.a.createElement("path",{style:{stroke:"var(--gray-700)",strokeWidth:3,fill:"none"},d:"M"+t+" "+n+" H"+(i+t)/2+" V"+r+" H"+i})};t.a=r}}]);
//# sourceMappingURL=2-b9e3875e7efb719991f7.js.map
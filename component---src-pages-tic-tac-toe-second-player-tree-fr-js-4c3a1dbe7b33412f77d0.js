(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FkfF:function(e,t,n){"use strict";n("HQhv");var r=n("q1tI"),i=n.n(r),a=n("adID"),o=n.n(a),s=function(e){var t=e.width,n=e.height,r=e.state,a=e.winner,s=e.solution,l=e.transform,c=e.localAction,u=e.globalAction,h=e.victory,f=e.addedIndex;return i.a.createElement("g",{className:o.a.board+" "+o.a.winner+" "+(u?o.a.pointerClickable:""),transform:l,onClick:u?u():void 0},i.a.createElement("rect",{x:0,y:0,width:t,height:n,className:""+(a?"x"===a.toLowerCase()?o.a.winnerX:"o"===a.toLowerCase()?o.a.winnerO:"."===a.toLowerCase()?o.a.winnerUnKnoned:"n"===a.toLowerCase()?o.a.winnerNull:"n"===a.toLowerCase()?o.a.winnerSelected:"":"")}),i.a.createElement("g",{className:o.a.elements},r.split("").map((function(e,r){var a=t/6+Math.floor(r%3)*t/3,l=n/6+Math.floor(r/3)*n/3;switch(e){case"X":return i.a.createElement("g",{key:r,className:o.a.X+" "+(f===r?o.a.justAdded:"")},i.a.createElement("line",{x1:a-.4*t/3,y1:l-.4*n/3,x2:a+.4*t/3,y2:l+.4*n/3}),i.a.createElement("line",{x1:a+.4*t/3,y1:l-.4*n/3,x2:a-.4*t/3,y2:l+.4*n/3}));case"O":return i.a.createElement("g",{key:r,className:o.a.O+" "+(f===r?o.a.justAdded:"")},i.a.createElement("circle",{r:.4*Math.min(t,n)/3,cx:a,cy:l}));default:return i.a.createElement("rect",{key:r,x:a-.4*t/3,y:l-.4*n/3,width:.8*t/3,height:.8*n/3,className:(s&&("x"===s[r]?o.a.solutionX:"o"===s[r]?o.a.solutionO:"."===s[r]?o.a.solutionUnKnoned:"n"===s[r]?o.a.solutionNull:"n"===s[r]?o.a.solutionSelected:o.a.empty))+" "+(!s&&c?o.a.clickable:"")+" ",onClick:c?c(r):void 0})}}))),i.a.createElement("g",{className:o.a.grid},i.a.createElement("line",{x1:1*t/3,y1:"0",x2:1*t/3,y2:n}),i.a.createElement("line",{x1:2*t/3,y1:"0",x2:2*t/3,y2:n}),i.a.createElement("line",{x1:"0",y1:1*n/3,x2:t,y2:1*n/3}),i.a.createElement("line",{x1:"0",y1:2*n/3,x2:t,y2:2*n/3})),h&&2===h.length&&i.a.createElement("line",{x1:t/6+t*h[1].col/3,y1:n/6+n*h[1].line/3,x2:t/6+t*h[0].col/3,y2:n/6+n*h[0].line/3,className:o.a.winningLine}))};t.a=s},UxJq:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),a=function(e){var t=e.x0,n=e.y0,r=e.x1,a=e.y1;return i.a.createElement("path",{style:{stroke:"var(--gray-700)",strokeWidth:3,fill:"none"},d:"M"+t+" "+n+" H"+(r+t)/2+" V"+a+" H"+r})};t.a=a},WYMk:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){this.PLAYERS=["X","O"],this.NULL="n",this.EMPTY=".",this.UNKNOW="?"}var t=e.prototype;return t.actions=function(e){for(var t=[],n=0;n<9;n++)"."===e[n]&&t.push(n);return t},t.getPlayerID=function(e){if(9===e.length){for(var t=0,n=0;n<9;n++)"."!==e[n]&&t++;return t%2}return 1===e.length?this.PLAYERS.indexOf(e):null},t.getPlayer=function(e){return this.PLAYERS[this.getPlayerID(e)]},t.getAdversary=function(e){return e===this.PLAYERS[0]?this.PLAYERS[1]:e===this.PLAYERS[1]?this.PLAYERS[0]:void 0},t.play=function(e,t){var n=this.getPlayer(e);return e.substring(0,t)+n+e.substring(t+1)},t.isFull=function(e){for(var t=0;t<9;t++)if("."===e[t])return!1;return!0},t.isFinished=function(e){for(var t=0;t<3;t++){if(e[3*t]===e[3*t+1]&&e[3*t+1]===e[3*t+2]&&e[3*t]!==this.EMPTY)return!0;if(e[t]===e[3+t]&&e[3+t]===e[6+t]&&e[t]!==this.EMPTY)return!0}return e[0]===e[4]&&e[4]===e[8]&&e[0]!==this.EMPTY||(e[2]===e[4]&&e[4]===e[6]&&e[2]!==this.EMPTY||this.isFull(e))},t.getWinner=function(e){for(var t=0;t<3;t++){if(e[3*t]===e[3*t+1]&&e[3*t+1]===e[3*t+2]&&e[3*t]!==this.EMPTY)return e[3*t];if(e[t]===e[3+t]&&e[3+t]===e[6+t]&&e[t]!==this.EMPTY)return e[t]}return e[0]===e[4]&&e[4]===e[8]&&e[0]!==this.EMPTY?e[0]:e[2]===e[4]&&e[4]===e[6]&&e[2]!==this.EMPTY?e[2]:this.isFull(e)?this.NULL:this.UNKNOW},t.getVictory=function(e){for(var t=0;t<3;t++){if(e[3*t]===e[3*t+1]&&e[3*t+1]===e[3*t+2]&&e[3*t]!==this.EMPTY)return[{col:0,line:t},{col:2,line:t}];if(e[t]===e[3+t]&&e[3+t]===e[6+t]&&e[t]!==this.EMPTY)return[{col:t,line:0},{col:t,line:2}]}return e[0]===e[4]&&e[4]===e[8]&&e[0]!==this.EMPTY?[{col:0,line:0},{col:2,line:2}]:e[2]===e[4]&&e[4]===e[6]&&e[2]!==this.EMPTY?[{col:2,line:0},{col:0,line:2}]:[]},e}()},"ckL+":function(e,t,n){"use strict";n("E5k/");var r=n("q1tI"),i=n.n(r),a=n("FkfF"),o=n("WYMk"),s=n("UxJq"),l=n("tyHl");var c=new o.a,u=function(e){var t,n;function r(t){var n;n=e.call(this,t)||this;var r={};Object(l.b)(r,".........",0,t.robot);var i={};return Object(l.d)(r,i,"",".........",0,t.robot),n.state={robot:t.robot,tree:i,initialTree:i,height:i[""].timeToWin,heightLimited:!0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.toogleChildrens=function(e){var t=this;return function(){return function(){var n;t.setState({tree:Object.assign({},t.state.tree,(n={},n[e]=Object.assign({},t.state.tree[e],{retracted:!t.state.tree[e].retracted}),n))})}}},o.reset=function(){var e=this;return function(){e.setState(Object.assign({},e.state,{tree:e.state.initialTree}))}},o.toogleHeightLimited=function(){var e=this;return function(){e.setState(Object.assign({},e.state,{heightLimited:!e.state.heightLimited}))}},o.render=function(){var e=this,t=Object(l.e)(this.state.tree),n=t.reduce((function(e,t){return Math.max(e,t.y)}),0);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:this.state.heightLimited?"limit-height":"free-height"},i.a.createElement("svg",{viewBox:"0 0 1000 "+100*(n+1),style:{width:"100%"}},t.map((function(t){return i.a.createElement(i.a.Fragment,{key:t.id},i.a.createElement(a.a,{width:75,height:75,state:t.grid,transform:"translate("+(12+100*t.x)+","+(12+100*t.y)+")",globalAction:e.toogleChildrens(t.id),winner:t.winner,victory:c.getVictory(t.grid),addedIndex:t.id&&parseInt(t.id.charAt(t.id.length-1))}),t.parent&&i.a.createElement(s.a,{x0:14+100*t.parent[0]+75,y0:12+100*t.parent[1]+37.5,x1:10+100*t.x,y1:12+100*t.y+37.5}))})))),100*(n+1)>500&&i.a.createElement("button",{onClick:this.toogleHeightLimited(),className:"treeExtension"},this.state.heightLimited?"Extend":"Retract"),i.a.createElement("button",{onClick:this.reset()},"RESET"))},r}(i.a.Component);t.a=u},tyHl:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return s}));n("YbXK"),n("cFtU"),n("q8oJ"),n("8npG"),n("m210"),n("4DPX"),n("rzGZ"),n("HQhv"),n("E5k/"),n("gu/5"),n("eoYm");function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=new(n("WYMk").a);function a(e,t,n,o){var s,l,c=[],u=i.PLAYERS[n],h=i.PLAYERS[(1+n)%2];if(void 0===e[t]&&(e[t]={ends:t,curentPlayer:n,winner:"",timeToWin:null}),i.getWinner(t)!==i.UNKNOW)return s=i.getWinner(t).toLowerCase(),e[t].winner=s,e[t].timeToWin=1,e[t].final=!0,{winner:s,timeToWin:1};for(var f=0;f<9;f++)if(e[t].ends[f]===i.EMPTY){var d=t.substring(0,f)+u+t.substring(f+1),m=void 0,g=void 0,p=void 0;void 0!==e[d]&&""!==e[d].winner?(m=e[d].winner,g=e[d].timeToWin):(m=(p=a(e,d,(n+1)%2,o)).winner,g=p.timeToWin),e[t].ends=e[t].ends.substring(0,f)+m+e[t].ends.substring(f+1),c.push({winner:m,timeToWin:g})}return c.map((function(e){return e.winner})).includes(u.toLowerCase())?(l=Math.min.apply(Math,r(c.map((function(e){return e.winner===u.toLowerCase()?e.timeToWin:null})).filter((function(e){return null!==e})))),s=u.toLowerCase()):c.map((function(e){return e.winner})).includes(i.NULL)?(l=Math.min.apply(Math,r(c.map((function(e){return e.winner===i.NULL?e.timeToWin:null})).filter((function(e){return null!==e})))),s=i.NULL):c.map((function(e){return e.winner})).includes(h.toLowerCase())&&(l=Math.min.apply(Math,r(c.map((function(e){return e.winner===h.toLowerCase()?e.timeToWin:null})).filter((function(e){return null!==e})))),s=h.toLowerCase()),e[t].winner=s,e[t].timeToWin=n===o?l:c.map((function(e){return e.timeToWin})).reduce((function(e,t){return e+t})),{winner:e[t].winner,timeToWin:e[t].timeToWin}}function o(e){var t=0,n=[],r=[],i=r.join(""),a=e[i],o=!1,s=[];s.push(Object.assign({},a,{x:r.length,y:t,id:i}));var l=[[0,0]];for(a.childrenActions.length>0&&(n.push(0),r.push(a.childrenActions[0]),a=e[r.join("")]);n.length>0;){r=[];for(var c=0;c<n.length;c++)r.push(e[r.join("")].childrenActions[n[c]]);var u=r.join("");a=e[u],o?(a=e[r.slice(0,-1).join("")],l.pop(),n[n.length-1]=n[n.length-1]+1):(s.push(Object.assign({},a,{x:r.length,y:t,id:u,parent:l[l.length-1]})),l.push([r.length,t]),a.childrenActions.length>0?n.push(0):(a=e[r.slice(0,-1).join("")],l.pop(),n[n.length-1]=n[n.length-1]+1)),n[n.length-1]>=a.childrenActions.length||a.retracted?(n.pop(),o=!0):(0!==n[n.length-1]&&(t+=1),o=!1)}return s}function s(e,t,n,r,a,o){if(i.isFinished(r))t[n]={grid:r,ends:r,childrenActions:[],timeToWin:e[r].timeToWin,winner:e[r].winner};else{var l=i.actions(r);if(a===o){var c,u,h=1e6;l.forEach((function(t){u=i.play(r,t),e[u].timeToWin<h&&e[u].winner===e[r].winner&&(h=e[u].timeToWin,c=t)})),t[n]={grid:r,ends:e[r].ends,childrenActions:[c],timeToWin:e[r].timeToWin,winner:e[r].winner},s(e,t,n+c,i.play(r,c),(a+1)%2,o)}else t[n]={grid:r,ends:e[r].ends,childrenActions:l,timeToWin:e[r].timeToWin,winner:e[r].winner},l.forEach((function(l){s(e,t,n+l,i.play(r,l),(a+1)%2,o)}))}}var l={};function c(e){var t=l[e].ends,n=l[e].winner,r=i.getPlayer(e),a=[];if(n===r.toLowerCase())for(var o,s=0;s<9;s++)t[s]===n&&((o=l[i.play(e,s)].ends.split("").filter((function(e){return e===r.toLowerCase()})).length)>0?a=[s]:0===o&&a.push(s));else if(n===i.NULL)for(var c=0;c<9;c++)t[c]===i.NULL&&a.push(c);else for(var u=0;u<9;u++)e[u]===i.EMPTY&&a.push(u);return a[Math.floor(a.length*Math.random())]}a(l,".........",0,2)},uDAi:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("Bl7J"),o=n("Wbzz"),s=n("vrFN"),l=n("ckL+");t.default=function(){return i.a.createElement(a.a,{location:"/tic-tac-toe/second-player-tree",currentLanguage:"Français"},i.a.createElement(s.a,{title:"Morpion"}),i.a.createElement("p",null,"Cette page présente l'arbre des possibilités du premier joueur face à une IA. Le fonctionnement de l'IA, et les clés de lecture de cet arbre se trouvent dans ",i.a.createElement(o.Link,{to:"/tic-tac-toe/fr"},"l'article principal"),"."),i.a.createElement("noscript",null,"Pour faire fonctionner les animations, merci d'activer votre javscript."),i.a.createElement(l.a,{robot:1}))}}}]);
//# sourceMappingURL=component---src-pages-tic-tac-toe-second-player-tree-fr-js-4c3a1dbe7b33412f77d0.js.map
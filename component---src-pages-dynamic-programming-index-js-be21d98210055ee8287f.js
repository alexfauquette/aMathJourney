(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"37PQ":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("npEy"),l=n("ek38"),o=n("UPs1"),u=n.n(o),i=n("JZaS"),s=n("ABAZ"),d=n("AIfd"),m=n("2srm"),f=n.n(m),h=function(e){var t=e.solutions,n=e.selectedSolution,c=e.setSelectedSolution,l=e.MAX_NUMBER_TO_DISPLAY,o=Object(a.useState)(0),u=o[0],i=o[1];return r.a.createElement("div",null,t.slice(u*l,(u+1)*l).map((function(e){var t=e.word1,a=e.word2;return r.a.createElement(d.c,{key:t+"-"+a,word1:t,word2:a,onEnter:function(){return c(t+"-"+a)},isSelected:t+"-"+a===n})})),t.length>l&&r.a.createElement("div",{className:f.a.buttonContainer},u>0?r.a.createElement("button",{onClick:function(){i((function(e){return e-1}))}},"Prev"):r.a.createElement("div",null),r.a.createElement("p",null,u*l+1,"-",(u+1)*l," / ",t.length),t.length>(u+1)*l&&r.a.createElement("button",{onClick:function(){i((function(e){return e+1}))}},"Next")))},v=(n("YbXK"),n("cFtU"),n("q8oJ"),n("m210"),n("4DPX"),n("y7hu"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("gu/5"),n("eoYm"),n("HQhv"),n("S1/F")),E=n.n(v);function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var b=function(e,t){return t.includes(e)},p=function(e){var t=e.links,n=e.showSolutions,a=e.selectedSolution;return r.a.createElement(r.a.Fragment,null,Object.keys(t).reduce((function(e,c){return[].concat(g(e),g(t[c].map((function(e){var t=e.dx,o=e.dy,u=e.paths,i=c.split("-"),s=i[0],d=i[1],m=0===t?0:0===o?l.d:l.d/l.h,f=0===o?0:0===t?l.d:l.d/l.h;return s.length+t>0&&d.length+o>0?r.a.createElement("line",{x1:l.a*(s.length+t+.5)+m,y1:l.a*(d.length+o+.5)+f,x2:l.a*(s.length+.5)-m,y2:l.a*(d.length+.5)-f,className:E.a.link+" "+(n&&0===u.length?E.a.transparent:"")+" "+(n&&b(a,u)?t===o?s[s.length-1]===d[d.length-1]?E.a.matchLink:E.a.missmatchLink:E.a.emptyLink:"")}):null}))))}),[]))};t.a=function(e){var t=e.startWord1,n=e.startWord2,o=Object(a.useState)(t),d=o[0],m=o[1],f=Object(a.useState)(n),v=f[0],E=f[1],b=Object(a.useState)("_"),y=b[0],w=b[1],S=Object(a.useState)("_"),_=S[0],x=S[1],A=Object(a.useState)({"_-_":0}),N=A[0],C=A[1],B=Object(a.useState)({}),W=B[0],O=B[1],j=Object(a.useState)(!0),k=j[0],L=j[1],q=Object(a.useState)(!1),F=q[0],U=q[1],I=Object(a.useState)([]),M=I[0],P=I[1],Z=Object(a.useState)(""),G=Z[0],D=Z[1];Object(a.useEffect)((function(){C({"_-_":0}),O({}),L(!0),w("_"),x("_"),U(!1),P([])}),[d,v]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:u.a.grid},r.a.createElement("div",{className:u.a.inputContainer},r.a.createElement("input",{onChange:function(e){return m(e.target.value.toUpperCase())},value:d}),r.a.createElement("input",{onChange:function(e){return E(e.target.value.toUpperCase())},value:v})),r.a.createElement("svg",{viewBox:"0 0 "+l.a*(d.length+2)+" "+l.a*(v.length+2),style:{width:"100%",maxHeight:"20cm"}},r.a.createElement(c.b,{word1:d,word2:v}),r.a.createElement(c.a,{word1:d,word2:v,values:N}),k&&r.a.createElement(i.a,{subWord1:y,subWord2:_,values:N,setValues:C,links:W,setLinks:O,subStep:"COMPUTE"}),r.a.createElement(p,{links:W,showSolutions:F,selectedSolution:G}))),r.a.createElement("div",{className:u.a.explanation},F?r.a.createElement(h,{solutions:M,selectedSolution:G,setSelectedSolution:D,MAX_NUMBER_TO_DISPLAY:10}):r.a.createElement(s.a,{subWord1:y,subWord2:_,values:N}))),r.a.createElement("button",{onClick:function(){var e=function(e,t,n,a){return e.length<n.length+1?{subWord1:"_"+n.slice(0,e.length),subWord2:t}:t.length<a.length+1?{subWord1:"_",subWord2:"_"+a.slice(0,t.length)}:null}(y,_,d,v);if(e||F){if(!F){var t=e.subWord1,n=e.subWord2;w(t),x(n)}}else{var a=function e(t,n,a){if(!t[n])return a;var r=n.split("-"),c=r[0],l=r[1];return t[n].reduce((function(n,r){var o=r.dx,u=r.dy,i=c.slice(0,c.length+o),s=l.slice(0,l.length+u),d=c.slice(c.length+o,c.length),m=l.slice(l.length+u,l.length),f=i+"-"+s,h=a.map((function(e){var t=e.word1,n=e.word2;return{word1:""+(d||"_")+t,word2:""+(m||"_")+n}}));return[].concat(g(n),g(e(t,f,h)))}),[])}(W,"_"+d+"-_"+v,[{word1:"",word2:""}]);P(a),O(function(e,t){return t.forEach((function(t){for(var n=t.word1,a=t.word2,r=function(t){var r=n.slice(0,t).split("").filter((function(e){return"_"!==e})).join(""),c=a.slice(0,t).split("").filter((function(e){return"_"!==e})).join(""),l=n.slice(t-1,t),o=a.slice(t-1,t),u="_"===l?0:-1,i="_"===o?0:-1,s="_"+r+"-_"+c;e[s]=e[s].map((function(e){var t=e.dx,r=e.dy,c=e.paths;return t===u&&r===i?{dx:t,dy:r,paths:[].concat(g(c),[n+"-"+a])}:{dx:t,dy:r,paths:c}}))},c=1;c<=n.length;c++)r(c)})),e}(W,a)),L(!1),U(!0)}}},"Next"))}},ABAZ:function(e,t,n){"use strict";n("v9g0"),n("rzGZ"),n("Dq+y"),n("8npG");var a=n("q1tI"),r=n.n(a),c=n("ek38"),l=n("sUBO"),o=n.n(l),u=n("AIfd"),i=n("JZaS");t.a=function(e){var t=e.subWord1,n=e.subWord2,a=e.values,l=e.subStep;l=l||c.e;var s=t+"-"+n,d=c.f.slice(0,c.f.length-1).map((function(e){var r=e.dx,c=e.dy,l=e.color;if(t.length+r>0&&n.length+c>0){var o=t.slice(0,t.length+r),u=n.slice(0,n.length+c),s=t.slice(t.length+r,t.length),d=n.slice(n.length+c,n.length),m=a[o+"-"+u];return{subSolution1:o,subSolution2:u,char1:s,char2:d,value:m,score:"number"==typeof m?m+Object(i.b)(s,d):"?",color:l}}})).filter((function(e){return!!e})),m=d.find((function(e){return"?"===e.score}));return r.a.createElement("div",{className:o.a.container},r.a.createElement("div",{className:o.a.recurrenceShowBlock},r.a.createElement(u.e,{word1:t,word2:n})," =",r.a.createElement("div",{className:o.a.solutionsContainer},d.map((function(e){var t=e.subSolution2,n=e.subSolution1,a=e.char2,c=e.char1,l=e.color;return r.a.createElement("div",{className:o.a.alignLeft},r.a.createElement(u.e,{word1:n,word2:t,color:l}),r.a.createElement(u.a,{char1:c,char2:a}))})))),m?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"We don't know the minimal cost of"," ",r.a.createElement(u.e,{word1:m.subSolution1,word2:m.subSolution2})),r.a.createElement("p",null,"You need it to compute the minimal cost of"," ",r.a.createElement(u.e,{word1:t,word2:n}))):r.a.createElement("div",{className:o.a.recurrenceShowBlock},r.a.createElement(u.b,{value:a[t+"-"+n]}),"=",d.length>1?" max ":"",r.a.createElement("div",{className:o.a.solutionsContainer+"\n              "+(d.length>1?o.a.leftBar:"")},d.map((function(e){var t=e.subSolution2,n=e.subSolution1,c=e.char2,l=e.char1,i=e.color,d=e.score;return r.a.createElement("div",{className:o.a.alignLeft+" "+o.a.computationLine+" "+(d!==a[s]?o.a.hideLine:"")},r.a.createElement(u.b,{value:a[n+"-"+t],color:i})," + ",r.a.createElement(u.d,{char1:l,char2:c})," = "+d)})))))}},AIfd:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return m}));n("HQhv"),n("Ll4R");var a=n("q1tI"),r=n.n(a),c=n("T6R5"),l=n.n(c),o=n("JZaS"),u=function(e){var t=e.word1,n=e.word2,a=e.color;return r.a.createElement("div",{className:l.a.wordsContainer,style:a?{borderColor:a}:{}},r.a.createElement("p",{className:l.a.word1},t||"_"),r.a.createElement("p",{className:l.a.word2},n||"_"))},i=function(e){var t=e.char1,n=e.char2;return r.a.createElement("div",{className:l.a.charsContainer+" "+(t===n?l.a.match:t&&n&&"_"!==t&&"_"!==n?l.a.mismatch:l.a.withEmpty)},r.a.createElement("p",{className:l.a.char1},t||"_"),r.a.createElement("p",{className:l.a.char2},n||"_"))},s=function(e){var t=e.value,n=e.color;return r.a.createElement("span",{className:l.a.score,style:n?{borderColor:n}:{}},"number"==typeof t?t:"?")},d=function(e){var t=e.char1,n=e.char2;return r.a.createElement("span",{className:""+(t===n?l.a.matchValue:t&&n&&"_"!==t&&"_"!==n?l.a.mismatchValue:l.a.withEmptyValue)},Object(o.b)(t,n))},m=function(e){var t=e.word1,n=e.word2,a=e.onEnter,c=e.isSelected;return r.a.createElement("div",{onMouseEnter:a,className:l.a.solutionContainer+" "+(c?l.a.isSelected:"")},t.split("").map((function(e,a){return r.a.createElement(i,{char1:t[a],char2:n[a]})})))}},AzMy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("npEy"),l=n("ek38"),o=n("wtBA"),u=n.n(o),i=n("JZaS"),s=n("ABAZ");t.a=function(e){var t=e.startWord1,n=e.startWord2,o=Object(a.useState)(t),d=o[0],m=o[1],f=Object(a.useState)(n),h=f[0],v=f[1],E=Object(a.useState)("_"+t),g=E[0],b=E[1],p=Object(a.useState)("_"+n),y=p[0],w=p[1],S=Object(a.useState)({"_-_":0}),_=S[0],x=S[1];return r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:u.a.grid},r.a.createElement("div",{className:u.a.inputContainer},r.a.createElement("input",{onChange:function(e){return m(e.target.value.toUpperCase())},value:d}),r.a.createElement("input",{onChange:function(e){return v(e.target.value.toUpperCase())},value:h})),r.a.createElement("svg",{viewBox:"0 0 "+l.a*(d.length+2)+" "+l.a*(h.length+2),style:{width:"100%",maxHeight:"20cm"}},r.a.createElement(c.b,{word1:d,word2:h}),r.a.createElement(c.a,{word1:d,word2:h,values:_}),r.a.createElement(i.a,{subWord1:g,subWord2:y,values:_,setValues:x,subStep:"COMPUTE"}),r.a.createElement(c.c,{word1:d,word2:h,onEnter:function(e,t){return function(){b(e),w(t)}}}))),r.a.createElement("div",{className:u.a.explanation},r.a.createElement(s.a,{subWord1:g,subWord2:y,values:_})))}},JZaS:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));n("y7hu"),n("E5k/"),n("Ggvi"),n("zGcK"),n("rzGZ"),n("Dq+y"),n("8npG");var a=n("q1tI"),r=n.n(a),c=n("ek38"),l=n("h9Fj"),o=n.n(l),u=function(e,t){return e===t?1:"_"===e||"_"===t?-2:""===e||""===t?-2:-1};t.a=function(e){var t=e.subWord1,n=e.subWord2,a=e.values,l=e.setValues,i=e.links,s=e.setLinks,d=e.subStep;d=d||c.e;var m,f,h,v=t+"-"+n,E=!1,g={};(E=!0,c.f.slice(0,c.f.length-1).forEach((function(e,r){var c=e.dx,l=e.dy;if(t.length+c>0&&n.length+l>0){var o=t.slice(0,t.length+c),i=n.slice(0,n.length+l),s=t.slice(t.length+c,t.length),d=n.slice(n.length+l,n.length);"number"==typeof a[o+"-"+i]?g[r]={value:a[o+"-"+i]+u(s,d),dx:c,dy:l}:E=!1}})),E)&&(m=Object.keys(g).map((function(e){return g[e].value})).sort((function(e,t){return t-e}))[0],"number"!=typeof a[v]&&(l(Object.assign({},a,((f={})[v]=m,f))),i&&s&&s(Object.assign({},i,((h={})[v]=Object.keys(g).filter((function(e){return g[e].value===m})).map((function(e){return{dx:g[e].dx,dy:g[e].dy,paths:[]}})),h)))));return r.a.createElement(r.a.Fragment,null,c.f.slice(0,c.f.length-1).map((function(e,a){var l=e.dx,u=e.dy,i=0===l?0:0===u?c.d:c.d/c.h,s=0===u?0:0===l?c.d:c.d/c.h;return t.length+l>0&&n.length+u>0?r.a.createElement("line",{x1:c.a*(t.length+l+.5)+i,y1:c.a*(n.length+u+.5)+s,x2:c.a*(t.length+.5)-i,y2:c.a*(n.length+.5)-s,className:o.a.link+" "+(d===c.g?o.a.saveLink:d===c.b&&E&&g[a]&&g[a].value===m?o.a.goodLink:d===c.b&&E?o.a.badLink:o.a.notComputableLink)}):null})),c.f.map((function(e,a){var l=e.dx,u=e.dy,i=e.color;return t.length+l>0&&n.length+u>0?r.a.createElement("circle",{cx:c.a*(t.length+l+.5),cy:c.a*(n.length+u+.5),r:c.d,className:o.a.circle+"  "+(d===c.g?o.a.saveCircle:d===c.b&&E&&g[a]&&g[a].value===m?o.a.goodCircle:c.f.length===a+1?o.a.resultCircle:d===c.b&&E?o.a.badCircle:o.a.notComputableCircle),style:d===c.e?{stroke:i}:{}}):null})))}},ek38:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return s}));var a=40,r=a/2-1,c=a/3,l=Math.sqrt(2),o=[{dx:-1,dy:-1,color:"red"},{dx:0,dy:-1,color:"blue"},{dx:-1,dy:0,color:"green"},{dx:0,dy:0,color:"orange"}],u="PRESENT",i="COMPUTE",s="SAVE"},npEy:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return d}));n("YbXK"),n("cFtU"),n("q8oJ"),n("m210"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("HQhv");var a=n("q1tI"),r=n.n(a),c=n("VwVl"),l=n.n(c),o=n("ek38");function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=function(e){var t=e.word1,n=e.word2,a=e.subWord1,c=e.subWord2;return r.a.createElement(r.a.Fragment,null,("_"+t).split("").map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("line",{x1:o.a*(t+1),y1:0,x2:o.a*(t+1),y2:o.a*(n.length+2),className:l.a.tableLine}),r.a.createElement("text",{"text-anchor":"middle","dominant-baseline":"middle",x:o.a*(t+1.5),y:.5*o.a,className:a&&t<a.length?l.a.subWord1:l.a.nomalWord},e))})),("_"+n).split("").map((function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("line",{x1:0,y1:o.a*(n+1),x2:o.a*(t.length+2),y2:o.a*(n+1),className:l.a.tableLine}),r.a.createElement("text",{"text-anchor":"middle","dominant-baseline":"middle",y:o.a*(n+1.5),x:.5*o.a,className:c&&n<c.length?l.a.subWord2:l.a.nomalWord},e))})))},s=function(e){var t=e.word1,n=e.word2,a=e.onEnter;return r.a.createElement(r.a.Fragment,null,("_"+t).split("").reduce((function(e,c,i){return[].concat(u(e),u(("_"+n).split("").map((function(e,c){return r.a.createElement("circle",{className:l.a.interactiveCircle,cx:o.a*(i+1.5),cy:o.a*(c+1.5),r:o.c,onMouseEnter:a(("_"+t).slice(0,i+1),("_"+n).slice(0,c+1))})}))))}),("_"+n).split("").map((function(e,c){return r.a.createElement("circle",{className:l.a.interactiveCircle,cx:1.5*o.a,cy:o.a*(c+1.5),r:o.c,onMouseEnter:a(("_"+t).slice(0,1),("_"+n).slice(0,c+1))})}))))},d=function(e){var t=e.word1,n=e.word2,a=e.values;return r.a.createElement(r.a.Fragment,null,("_"+t).split("").reduce((function(e,c,i){return[].concat(u(e),u(("_"+n).split("").map((function(e,c){var u=("_"+t).slice(0,i+1)+"-"+("_"+n).slice(0,c+1),s=a[u];return void 0!==s?r.a.createElement(r.a.Fragment,null,r.a.createElement("circle",{className:l.a.interactiveCircle,cx:o.a*(i+1.5),cy:o.a*(c+1.5),r:o.d}),r.a.createElement("text",{"text-anchor":"middle","dominant-baseline":"middle",x:o.a*(i+1.5),y:o.a*(c+1.5)},s)):null}))))}),("_"+n).split("").map((function(e,t){var c="_-"+("_"+n).slice(0,t+1),u=a[c];return u?r.a.createElement(r.a.Fragment,null,r.a.createElement("circle",{className:l.a.interactiveCircle,cx:1.5*o.a,cy:o.a*(t+1.5),r:o.d}),r.a.createElement("text",{"text-anchor":"middle","dominant-baseline":"middle",x:1.5*o.a,y:o.a*(t+1.5)},u)):null}))))}},oSmq:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("npEy"),l=n("ek38"),o=n("Un7w"),u=n.n(o);t.a=function(e){var t=e.startWord1,n=e.startWord2,o=Object(a.useState)(t),i=o[0],s=o[1],d=Object(a.useState)(n),m=d[0],f=d[1],h=Object(a.useState)("_"+t),v=h[0],E=h[1],g=Object(a.useState)("_"+n),b=g[0],p=g[1];return r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:u.a.inputContainer},r.a.createElement("input",{onChange:function(e){return s(e.target.value.toUpperCase())},value:i}),r.a.createElement("input",{onChange:function(e){return f(e.target.value.toUpperCase())},value:m})),r.a.createElement("svg",{viewBox:"0 0 "+l.a*(i.length+2)+" "+l.a*(m.length+2),style:{width:"100%",maxHeight:"20cm"}},r.a.createElement(c.b,{word1:i,word2:m,subWord1:v,subWord2:b}),r.a.createElement(c.c,{word1:i,word2:m,onEnter:function(e,t){return function(){E(e),p(t)}}}),r.a.createElement("circle",{className:u.a.activeCircle,cx:l.a*(v.length+.5),cy:l.a*(b.length+.5),r:l.a/4})),r.a.createElement("p",{className:u.a.text+" "+u.a.text1},v.slice(1)||"_"),r.a.createElement("p",{className:u.a.text+" "+u.a.text2},b.slice(1)||"_"))}},rVkv:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("oSmq"),l=n("AzMy"),o=n("37PQ");t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{startWord1:"ABCD",startWord2:"ABD"}),r.a.createElement(c.a,{startWord1:"ABBABABBBAA",startWord2:"ABBABABABBAB"}),r.a.createElement(l.a,{startWord1:"ABBABABBBAA",startWord2:"ABBABABABBAB"}))}}}]);
//# sourceMappingURL=component---src-pages-dynamic-programming-index-js-be21d98210055ee8287f.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5YR5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=i(a("q1tI")),r=i(a("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.refreshMathJax()}},{key:"componentDidUpdate",value:function(){this.refreshMathJax()}},{key:"refreshMathJax",value:function(){var e=this.context.MathJax;if(!e)throw Error("Could not find MathJax while attempting typeset! Probably MathJax script hasn't been loaded or MathJax.Context is not in the hierarchy");e.Hub.Queue(e.Hub.Typeset(this.div,this.props.onRender))}},{key:"render",value:function(){var e=this,t=this.props;t.classes,t.options;return o.default.createElement("div",{key:this.props.text,ref:function(t){return e.div=t}},this.props.text)}}]),t}(o.default.Component);c.contextTypes={MathJax:r.default.object},t.default=c},Ddbg:function(e,t,a){e.exports={paramameters:"classes-module--paramameters--2BfT6",dragging:"classes-module--dragging--2k4vj",removeInteractions:"classes-module--removeInteractions--1L5ig",active:"classes-module--active--JUtsx",draggable:"classes-module--draggable--3KS4L",fadeElement:"classes-module--fadeElement--1k2pi",disable:"classes-module--disable--Ts8aA"}},LklE:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("gBsj"),i=a.n(r),l=a("Bl7J"),s=a("vrFN"),c=a("k1TG"),u=a("aXB2"),d=a("iuhU"),p=a("8j0Q");var h=n.createContext();var f=h;var y=a("H2TA"),x=a("ye/S"),b=a("VD++"),m=a("NqtD"),v=n.forwardRef((function(e,t){var a=e.edge,o=void 0!==a&&a,r=e.children,i=e.classes,l=e.className,s=e.color,p=void 0===s?"default":s,h=e.disabled,f=void 0!==h&&h,y=e.disableFocusRipple,x=void 0!==y&&y,v=e.size,g=void 0===v?"medium":v,M=Object(u.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.createElement(b.a,Object(c.a)({className:Object(d.a)(i.root,l,"default"!==p&&i["color".concat(Object(m.a)(p))],f&&i.disabled,"small"===g&&i["size".concat(Object(m.a)(g))],{start:i.edgeStart,end:i.edgeEnd}[o]),centerRipple:!0,focusRipple:!x,disabled:f,ref:t},M),n.createElement("span",{className:i.label},r))})),g=Object(y.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(x.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(x.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(x.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(v),M=n.forwardRef((function(e,t){var a,o,r,i,l,s,h,y=e.autoFocus,x=e.checked,b=e.checkedIcon,m=e.classes,v=e.className,M=e.defaultChecked,E=e.disabled,k=e.icon,w=e.id,j=e.inputProps,O=e.inputRef,S=e.name,C=e.onBlur,L=e.onChange,_=e.onFocus,R=e.readOnly,z=e.required,F=e.tabIndex,J=e.type,T=e.value,D=Object(u.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),P=(a={controlled:x,default:Boolean(M),name:"SwitchBase",state:"checked"},o=a.controlled,r=a.default,a.name,a.state,i=n.useRef(void 0!==o).current,l=n.useState(r),s=l[0],h=l[1],[i?o:s,n.useCallback((function(e){i||h(e)}),[])]),N=Object(p.a)(P,2),I=N[0],B=N[1],H=n.useContext(f),q=E;H&&void 0===q&&(q=H.disabled);var U="checkbox"===J||"radio"===J;return n.createElement(g,Object(c.a)({component:"span",className:Object(d.a)(m.root,v,I&&m.checked,q&&m.disabled),disabled:q,tabIndex:null,role:void 0,onFocus:function(e){_&&_(e),H&&H.onFocus&&H.onFocus(e)},onBlur:function(e){C&&C(e),H&&H.onBlur&&H.onBlur(e)},ref:t},D),n.createElement("input",Object(c.a)({autoFocus:y,checked:x,defaultChecked:M,className:m.input,disabled:q,id:U&&w,name:S,onChange:function(e){var t=e.target.checked;B(t),L&&L(e,t)},readOnly:R,ref:O,required:z,tabIndex:F,type:J,value:T},j)),I?b:k)})),E=Object(y.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(M),k=a("HR5l");function w(e,t){var a=function(t,a){return o.a.createElement(k.a,Object(c.a)({ref:a},t),e)};return a.muiName=k.a.muiName,o.a.memo(o.a.forwardRef(a))}var j=w(n.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),O=w(n.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),S=w(n.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"})),C=n.createElement(O,null),L=n.createElement(j,null),_=n.createElement(S,null),R=n.forwardRef((function(e,t){var a=e.checkedIcon,o=void 0===a?C:a,r=e.classes,i=e.color,l=void 0===i?"secondary":i,s=e.icon,p=void 0===s?L:s,h=e.indeterminate,f=void 0!==h&&h,y=e.indeterminateIcon,x=void 0===y?_:y,b=e.inputProps,v=e.size,g=void 0===v?"medium":v,M=Object(u.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),k=f?x:p,w=f?x:o;return n.createElement(E,Object(c.a)({type:"checkbox",classes:{root:Object(d.a)(r.root,r["color".concat(Object(m.a)(l))],f&&r.indeterminate),checked:r.checked,disabled:r.disabled},color:l,inputProps:Object(c.a)({"data-indeterminate":f},b),icon:n.cloneElement(k,{fontSize:void 0===k.props.fontSize&&"small"===g?g:k.props.fontSize}),checkedIcon:n.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===g?g:w.props.fontSize}),ref:t},M))})),z=Object(y.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(x.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(x.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(R);var F=function(e){var t=(void 0===e?{}:e).liveMeasure,a=void 0===t||t,o=Object(n.useState)({}),r=o[0],i=o[1],l=Object(n.useState)(null),s=l[0],c=l[1],u=Object(n.useCallback)((function(e){c(e)}),[]);return Object(n.useLayoutEffect)((function(){if(s){var e=function(){return window.requestAnimationFrame((function(){return i(function(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:"x"in t?t.x:t.top,left:"y"in t?t.y:t.left,x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top,right:t.right,bottom:t.bottom}}(s))}))};if(e(),a)return window.addEventListener("resize",e),window.addEventListener("scroll",e),function(){window.removeEventListener("resize",e),window.removeEventListener("scroll",e)}}}),[s]),[u,r,s]},J=function(e){var t=e.lambda1,a=e.setLambda1,r=e.lambda2,i=e.setLambda2,l=e.isDiagonalizable,s=e.setIsDiagonalizable,c=e.classes,u=Object(n.useState)(null),d=u[0],p=u[1],h=F(),f=h[0],y=h[1],x=y.width,b=y.height;return o.a.createElement("div",null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-50 -50 100 100",ref:f,onMouseUp:function(){return p(null)},onMouseLeave:function(){return p(null)},onMouseMove:null===d?null:function(e){var n=10*(e.nativeEvent.offsetX-x/2)/x,o=10*(e.nativeEvent.offsetY-b/2)/b;n-=n%.1,o-=o%.1,0===r.y&&Math.abs(o)<.75?1===d?a(Object.assign({},t,{x:n})):i(Object.assign({},r,{x:n})):1===d?(i({x:n,y:-o}),a({x:n,y:o})):(a({x:n,y:-o}),i({x:n,y:o}))},className:d?c.dragging:""},o.a.createElement("path",{d:"M -50 0 L 50 0",style:{stroke:"black"}}),o.a.createElement("path",{d:"M 0 -50 L 0 50",style:{stroke:"black"}}),o.a.createElement("circle",{cx:10*t.x,cy:10*t.y,r:5,onMouseDown:function(){return p(1)}}),o.a.createElement("circle",{cx:10*r.x,cy:10*r.y,r:5,onMouseDown:function(){return p(2)},style:{fill:"red"}})),o.a.createElement("br",null),o.a.createElement(z,{checked:t.x!==r.x||0!==t.y||l,onChange:function(e){return s(e.target.checked)},disabled:t.x!==r.x||0!==t.y}),o.a.createElement("label",null,"is Diagonalizable"))},T=a("8o2o"),D=function(e,t,a,n,o,r,i,l){var s=[];if(0===t.y){var c=n.x*o.y-n.y*o.x,u={x:(o.y*e.x-o.x*e.y)/c,y:(-n.y*e.x+n.x*e.y)/c};if(i<l){for(var d=i;d<l;d+=.05)if(a.x!==t.x||r?s.push({x:Math.exp(d*t.x)*u.x*n.x+Math.exp(d*a.x)*u.y*o.x,y:Math.exp(d*t.x)*u.x*n.y+Math.exp(d*a.x)*u.y*o.y}):s.push({x:Math.exp(d*t.x)*u.x*n.x+Math.exp(d*a.x)*u.y*o.x+d*Math.exp(d*t.x)*u.y*n.x,y:Math.exp(d*t.x)*u.x*n.y+Math.exp(d*a.x)*u.y*o.y+d*Math.exp(d*t.x)*u.y*n.y}),Math.abs(s[s.length-1].x)>10||Math.abs(s[s.length-1].x)>10)return s}else for(var p=i;p>l;p-=.05)if(a.x!==t.x||r?s.push({x:Math.exp(p*t.x)*u.x*n.x+Math.exp(p*a.x)*u.y*o.x,y:Math.exp(p*t.x)*u.x*n.y+Math.exp(p*a.x)*u.y*o.y}):s.push({x:Math.exp(p*t.x)*u.x*n.x+Math.exp(p*a.x)*u.y*o.x+p*Math.exp(p*t.x)*u.y*n.x,y:Math.exp(p*t.x)*u.x*n.y+Math.exp(p*a.x)*u.y*o.y+p*Math.exp(p*t.x)*u.y*n.y}),Math.abs(s[s.length-1].x)>10||Math.abs(s[s.length-1].x)>10)return s;return s}var h=Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2)),f=Math.atan2(e.y,e.x);if(i<l){for(var y=i;y<l;y+=.05)if(s.push({x:Math.cos(f-Math.abs(t.y)*y)*h*Math.exp(t.x*y),y:Math.sin(f-Math.abs(t.y)*y)*h*Math.exp(t.x*y)}),Math.abs(s[s.length-1].x)>10||Math.abs(s[s.length-1].x)>10)return s}else for(var x=i;x>l;x-=.05)if(s.push({x:Math.cos(f-Math.abs(t.y)*x)*h*Math.exp(t.x*x),y:Math.sin(f-Math.abs(t.y)*x)*h*Math.exp(t.x*x)}),Math.abs(s[s.length-1].x)>10||Math.abs(s[s.length-1].x)>10)return s;return s},P=function(e){var t=e.lambda1,a=e.lambda2,r=e.s1,i=e.s2,l=e.isDiagonalizable,s=Object(T.a)(e,["lambda1","lambda2","s1","s2","isDiagonalizable"]),c=function(e,t,a,n,o){var r=[];if(0!=e.y)for(var i=-5;i<6;i+=10)Math.abs(e.x)>1&&(r.push(D({x:i,y:-i},e,t,a,n,o,0,5)),r.push(D({x:i,y:i},e,t,a,n,o,0,5)),r.push(D({x:i,y:-i},e,t,a,n,o,0,-5)),r.push(D({x:i,y:i},e,t,a,n,o,0,-5))),0!==e.x&&(r.push(D({x:i,y:0},e,t,a,n,o,0,5)),r.push(D({x:0,y:i},e,t,a,n,o,0,5)),r.push(D({x:i,y:0},e,t,a,n,o,0,-5)),r.push(D({x:0,y:i},e,t,a,n,o,0,-5))),0===e.x&&(r.push(D({x:0,y:1},e,t,a,n,o,0,10)),r.push(D({x:0,y:3},e,t,a,n,o,0,10)),r.push(D({x:0,y:5},e,t,a,n,o,0,10)));else{var l=0,s=5;e.x>=0&&t.x>=0&&(l=-5,s=0);for(var c=-5.5;c<6;c+=2)r.push(D({x:c,y:5},e,t,a,n,o,l,s)),r.push(D({x:c,y:-5},e,t,a,n,o,l,s));for(var u=-4.5;u<5;u+=2)r.push(D({x:5,y:u},e,t,a,n,o,l,s)),r.push(D({x:-5,y:u},e,t,a,n,o,l,s))}return r}(t,a,r,i,l),u=Object(n.useState)(null),d=u[0],p=u[1],h=Object(n.useState)(!0),f=h[0],y=h[1],x=Object(n.useState)([]),b=x[0],m=x[1],v=F(),g=v[0],M=v[1],E=M.width,k=M.height;return Object(n.useEffect)((function(){m(null===d?null:D(d,t,a,r,i,l,0,10))}),[d]),o.a.createElement("div",{style:{display:"flex",justifyContent:"left",alignItems:"flex-start"}},o.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",ref:g,viewBox:"-50 -50 100 100",style:{width:"fit-content"},onMouseLeave:function(){return p(null)},onMouseMove:function(e){var t=10*(e.nativeEvent.offsetX-E/2)/E,a=10*(e.nativeEvent.offsetY-k/2)/k;p({x:t,y:a})}},s),o.a.createElement("path",{d:"M -50 0 L 50 0",style:{stroke:"black"}}),o.a.createElement("path",{d:"M 0 -50 L 0 50",style:{stroke:"black"}}),c.map((function(e,t){return o.a.createElement("path",{key:t,d:"M "+e.map((function(e){return 10*e.x+" "+10*e.y})).join(" L "),style:{stroke:"green",fill:"none"}})})),d&&d.x&&d.y&&o.a.createElement("circle",{cx:10*d.x,cy:10*d.y,r:2,style:{fill:"gray"}}),b&&o.a.createElement("path",{d:"M "+b.map((function(e){return 10*e.x+" "+10*e.y})).join(" L "),style:{stroke:"gray",fill:"none"}}),f&&o.a.createElement(o.a.Fragment,null,0===r.x?o.a.createElement("path",{d:"M 0 50 L 0 -50",style:{stroke:"black",fill:"none",strokeDasharray:"4, 4"}}):o.a.createElement("path",{d:"M -50 "+50*-r.y/r.x+" L 50 "+50*r.y/r.x,style:{stroke:"black",fill:"none",strokeDasharray:"4, 4"}}),0===i.x?o.a.createElement("path",{d:"M 0 50 L 0 -50",style:{stroke:"red",fill:"none",strokeDasharray:"4, 4"}}):o.a.createElement("path",{d:"M -50 "+50*-i.y/i.x+" L 50 "+50*i.y/i.x,style:{stroke:"red",fill:"none",strokeDasharray:"4, 4"}}))),o.a.createElement(z,{checked:f,onChange:function(e){return y(e.target.checked)}}),o.a.createElement("label",null,"Show S vectors"))},N=function(e){var t=e.s1,a=e.setS1,r=e.s2,i=e.setS2,l=e.classes,s=Object(T.a)(e,["s1","setS1","s2","setS2","classes"]),c=Object(n.useState)(null),u=c[0],d=c[1],p=F(),h=p[0],f=p[1],y=f.width,x=f.height;return o.a.createElement("div",s,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-50 -50 100 100",ref:h,onMouseUp:function(){return d(null)},onMouseLeave:function(){return d(null)},onMouseMove:null===u?null:function(e){var n=10*(e.nativeEvent.offsetX-y/2)/y,o=10*(e.nativeEvent.offsetY-x/2)/x;n-=n%.1,o-=o%.1,Math.pow(n,2)+Math.pow(o,2)>.5&&(1===u&&Math.abs(o*r.x-n*r.y)>.5?a({x:n,y:o}):2===u&&Math.abs(o*t.x-n*t.y)>.5&&i({x:n,y:o}))},className:u?l.dragging:""},o.a.createElement("path",{d:"M -50 0 L 50 0",style:{stroke:"black"}}),o.a.createElement("path",{d:"M 0 -50 L 0 50",style:{stroke:"black"}}),o.a.createElement("path",{d:"M 0 0 L "+10*t.x+" "+10*t.y,style:{stroke:"black"}}),o.a.createElement("path",{d:"M 0 0 L "+10*r.x+" "+10*r.y,style:{stroke:"red"}}),o.a.createElement("circle",{className:(u?l.dragging:l.draggable)+" "+l.fadeElement,cx:10*t.x,cy:10*t.y,r:5,onMouseDown:function(){return d(1)}}),o.a.createElement("circle",{className:(u?l.dragging:l.draggable)+" "+l.fadeElement,cx:10*r.x,cy:10*r.y,r:5,onMouseDown:function(){return d(2)},style:{fill:"red"}})))},I=a("Ddbg"),B=a.n(I),H=function(e){var t=e.x,a=e.y;return a=-a,t.toFixed(1)+(a>0?"+i"+a.toFixed(1):a<0?"-i"+Math.abs(a.toFixed(1)):"")};t.default=function(){var e,t,a,r,c,u,d=Object(n.useState)({x:-3,y:0}),p=d[0],h=d[1],f=Object(n.useState)({x:-1,y:0}),y=f[0],x=f[1],b=Object(n.useState)({x:1,y:1}),m=b[0],v=b[1],g=Object(n.useState)({x:-1,y:1}),M=g[0],E=g[1],k=Object(n.useState)(!0),w=k[0],j=k[1];return o.a.createElement(l.a,{location:"/referentiel",isFull:!0},o.a.createElement(s.a,{title:"referentiel"}),o.a.createElement("noscript",null,"You need to enable JavaScript to run this app."),o.a.createElement("h1",null,"Dyn Syst"),o.a.createElement("div",{className:B.a.paramameters},o.a.createElement("div",null,o.a.createElement(i.a.Context,{input:"ascii"},o.a.createElement(i.a.Node,{inline:!0},"D = [["+H(p)+", "+(w||p.x!==y.x||0!==y.y?"0":"1")+"],[0,"+H(y)+"]]"))),o.a.createElement("div",null,o.a.createElement(i.a.Context,{input:"ascii"},o.a.createElement(i.a.Node,{inline:!0},"S = "+(t=M,a=(e=m).x,r=e.y,c=t.x,u=t.y,r=-r,u=-u,"[["+a.toFixed(1)+", "+c.toFixed(1)+"],["+r.toFixed(1)+", "+u.toFixed(1)+"]]")))),o.a.createElement("div",null,o.a.createElement(i.a.Context,{input:"ascii"},o.a.createElement(i.a.Node,{inline:!0},"A = S^{-1}DS = "+function(e,t,a,n,o){var r=e.x,i=e.y,l=t.x,s=t.y,c=a.x,u=a.y,d=n.x,p=n.y;i=-i,s=-s;var h=c*(p=-p)-(u=-u)*d,f=r*c,y=r*d,x=l*u,b=l*p;o||0!==i||(f+=u,y+=p);var m=(p*f-d*x)/h,v=(p*y-d*b)/h,g=(-u*f+c*x)/h,M=(-u*y+c*b)/h;if(0!==i){var E=i*c,k=i*d,w=s*u,j=s*p,O=(p*k-d*j)/h,S=(-u*E+c*w)/h,C=(-u*k+c*j)/h;return"[["+H({x:m,y:(p*E-d*w)/h})+", "+H({x:v,y:O})+"], ["+H({x:g,y:S})+", "+H({x:M,y:C})+"]]"}return"[["+m.toFixed(1)+", "+v.toFixed(1)+"], ["+g.toFixed(1)+", "+M.toFixed(1)+"]]"}(p,y,m,M,w))))),o.a.createElement("div",{className:B.a.paramameters},o.a.createElement(J,{lambda1:p,setLambda1:h,lambda2:y,setLambda2:x,isDiagonalizable:w,setIsDiagonalizable:j,classes:B.a}),o.a.createElement(N,{className:0!==p.y?B.a.disable:B.a.active,s1:m,setS1:v,s2:M,setS2:E,classes:B.a}),o.a.createElement("div",null)),o.a.createElement(P,{lambda1:p,lambda2:y,s1:m,s2:M,isDiagonalizable:w,className:B.a.removeInteractions}))}},MuZe:function(e,t){function a(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var a in t)e.setAttribute(a,t[a])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?a:n)(i,o),i.onload||a(i,o),r.appendChild(i)}},Wmmy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=i(a("q1tI")),r=i(a("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c={ascii:"asciimath",tex:"tex"},u=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.typeset()}},{key:"componentDidUpdate",value:function(e){var t=e.inline!==this.props.inline||e.children!==this.props.children;this.typeset(t)}},{key:"shouldComponentUpdate",value:function(e,t,a){return e.children!==this.props.children||e.inline!==this.props.inline}},{key:"componentWillUnmount",value:function(){this.clear()}},{key:"clear",value:function(){var e=this.context.MathJax;if(this.script){var t=e.Hub.getJaxFor(this.script);t&&t.Remove()}}},{key:"typeset",value:function(e){var t=this.context.MathJax;if(!t)throw Error("Could not find MathJax while attempting typeset! Probably MathJax script hasn't been loaded or MathJax.Context is not in the hierarchy");var a=this.props.children;e&&this.clear(),!e&&this.script||this.setScriptText(a),t.Hub.Queue(t.Hub.Reprocess(this.script,this.props.onRender))}},{key:"setScriptText",value:function(e){var t=this.props.inline,a=c[this.context.input];this.script||(this.script=document.createElement("script"),this.script.type="math/"+a+"; "+(t?"":"mode=display"),this.refs.node.appendChild(this.script)),"text"in this.script?this.script.text=e:this.script.textContent=e}},{key:"render",value:function(){return o.default.createElement("span",{ref:"node"})}}]),t}(o.default.Component);u.propTypes={inline:r.default.bool,children:r.default.node.isRequired,onRender:r.default.func},u.contextTypes={MathJax:r.default.object,input:r.default.string},u.defaultProps={inline:!1,onRender:function(){}},t.default=u},gBsj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Text=t.Context=t.Node=void 0;var n=i(a("Wmmy")),o=i(a("lM78")),r=i(a("5YR5"));function i(e){return e&&e.__esModule?e:{default:e}}t.Node=n.default,t.Context=o.default,t.Text=r.default,t.default={Node:n.default,Context:o.default,Text:r.default}},lM78:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=l(a("q1tI")),r=l(a("17x9")),i=l(a("MuZe"));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loaded:!1},a.onLoad=a.onLoad.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"getChildContext",value:function(){return{MathJax:"undefined"==typeof MathJax?void 0:MathJax,input:this.props.input}}},{key:"componentDidMount",value:function(){var e=this.props.script;if(!e)return this.onLoad();(0,i.default)(e,this.onLoad)}},{key:"onLoad",value:function(){var e=this,t=this.props.options;MathJax.Hub.Config(t),MathJax.Hub.Register.StartupHook("End",(function(){MathJax.Hub.processSectionDelay=e.props.delay,e.props.didFinishTypeset&&e.props.didFinishTypeset(),e.props.onLoad&&e.props.onLoad(),e.setState({loaded:!0})})),MathJax.Hub.Register.MessageHook("Math Processing Error",(function(t){e.props.onError&&e.props.onError(MathJax,t)}))}},{key:"render",value:function(){if(!this.state.loaded&&!this.props.noGate)return this.props.loading;var e=this.props.children;return o.default.Children.only(e)}}]),t}(o.default.Component);s.propTypes={children:r.default.node.isRequired,didFinishTypeset:r.default.func,script:r.default.oneOfType([r.default.string,r.default.oneOf([!1])]),input:r.default.oneOf(["ascii","tex"]),delay:r.default.number,options:r.default.object,loading:r.default.node,noGate:r.default.bool},s.childContextTypes={MathJax:r.default.object,input:r.default.string},s.defaultProps={script:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML",input:"ascii",delay:0,options:{},loading:null,noGate:!1},t.default=s}}]);
//# sourceMappingURL=component---src-pages-linear-system-index-js-df76b825df6ef8032f33.js.map
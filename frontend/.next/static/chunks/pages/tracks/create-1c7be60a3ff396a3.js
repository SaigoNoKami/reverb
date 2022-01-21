(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{6782:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7462),o=n(3366),a=n(7294),i=n(6010),l=n(5170),s=n(7634),c=n(6312),u=n(9480),d=n(5358);function p(e){return(0,d.Z)("MuiCard",e)}(0,n(4118).Z)("MuiCard",["root"]);var v=n(5893);const f=["className","raised"],m=(0,s.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var h=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCard"}),{className:a,raised:s=!1}=n,u=(0,o.Z)(n,f),d=(0,r.Z)({},n,{raised:s}),h=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)})(d);return(0,v.jsx)(m,(0,r.Z)({className:(0,i.Z)(h.root,a),elevation:s?8:void 0,ref:t,styleProps:d},u))}))},9515:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tracks/create",function(){return n(67)}])},1780:function(e,t,n){"use strict";n.d(t,{o:function(){return m}});var r={};n.r(r),n.d(r,{pauseTrack:function(){return s},playTrack:function(){return l},setActiveTrack:function(){return p},setCurrentTime:function(){return d},setDuration:function(){return c},setVolume:function(){return u}});var o=n(5617),a=n(9569),i=n(6716),l=function(){return{type:i.N.PLAY}},s=function(){return{type:i.N.PAUSE}},c=function(e){return{type:i.N.SET_DURATION,payload:e}},u=function(e){return{type:i.N.SET_VOLUME,payload:e}},d=function(e){return{type:i.N.SET_CURRENT_TIME,payload:e}},p=function(e){return{type:i.N.SET_ACTIVE,payload:e}};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},r),m=function(){var e=(0,o.I0)();return(0,a.DE)(f,e)}},719:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var r=n(7294),o=function(e){var t=(0,r.useState)(e),n=t[0],o=t[1];return{value:n,onChange:function(e){o(e.target.value)}}}},5062:function(e,t,n){"use strict";n.d(t,{i:function(){return r}});var r=n(5617).v9},9382:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var r=n(5893),o=n(7294),a=n(3609),i=n(7099),l=n(2712),s=n(5192),c=n(5782),u=n(8739),d=n(2276),p=n(8884),v=n(9875),f=n(9798),m=n(7658),h=n(3),x=n(8497),b=n(2865),y=n(1163);function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){o=!0,a=s}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j=[{text:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430",href:"/"},{text:"\u0422\u0440\u0435\u043a\u0438",href:"/tracks"},{text:"\u0410\u043b\u044c\u0431\u043e\u043c\u0438",href:"/albums"}];function g(){var e=Z(o.useState(!1),2),t=e[0],n=e[1],g=(0,y.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.ZP,{}),(0,r.jsx)(l.Z,{position:"fixed",children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(d.Z,{color:"inherit","aria-label":"open drawer",onClick:function(){n(!0)},edge:"start",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(u.Z,{variant:"h6",noWrap:!0,component:"div",children:"Reverb"})]})}),(0,r.jsxs)(a.ZP,{variant:"persistent",anchor:"left",open:t,children:[(0,r.jsx)("div",{children:(0,r.jsx)(d.Z,{onClick:function(){n(!1)},children:(0,r.jsx)(v.Z,{})})}),(0,r.jsx)(c.Z,{children:j.map((function(e,t){var n=e.text,o=e.href;return(0,r.jsxs)(f.ZP,{button:!0,onClick:function(){return g.push(o)},children:[(0,r.jsx)(m.Z,{children:t%2===0?(0,r.jsx)(x.Z,{}):(0,r.jsx)(b.Z,{})}),(0,r.jsx)(h.Z,{primary:n})]},o)}))})]})]})}var P,L=n(551),S=n(5507),C=n(7067),N=n(2149),w=n(9753),M=n(7962),R=n.n(M),k=function(e){var t=e.left,n=e.right,o=e.onChange;return(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("input",{type:"range",min:0,max:n,value:t,onChange:o}),(0,r.jsxs)("div",{children:[t," / ",n]})]})},T=n(5062),E=n(1780),O=function(){var e=(0,T.i)((function(e){return e.player})),t=e.pause,n=e.volume,a=e.active,i=e.duration,l=e.currentTime,s=(0,E.o)(),c=s.pauseTrack,u=s.playTrack,p=s.setVolume,v=s.setCurrentTime,f=s.setDuration;s.setActiveTrack;(0,o.useEffect)((function(){P?(m(),h()):P=new Audio}),[a]);var m=function(){a&&(P.src="http://diw4nk35u3ll.cloudfront.net/"+a.audio,P.volume=n/100,P.onloadedmetadata=function(){f(Math.ceil(P.duration))},P.ontimeupdate=function(){v(Math.ceil(P.currentTime))})},h=function(){t?(u(),P.play()):(c(),P.pause())};return a?(0,r.jsxs)("div",{className:R().player,children:[(0,r.jsx)(d.Z,{onClick:h,children:t?(0,r.jsx)(S.Z,{}):(0,r.jsx)(C.Z,{})}),(0,r.jsxs)(w.ZP,{container:!0,direction:"column",style:{width:200,margin:"0 20px"},children:[(0,r.jsx)("div",{children:null===a||void 0===a?void 0:a.name}),(0,r.jsx)("div",{style:{fontSize:12,color:"gray"},children:null===a||void 0===a?void 0:a.artist})]}),(0,r.jsx)(k,{left:l,right:i,onChange:function(e){P.currentTime=Number(e.target.value),v(Number(e.target.value))}}),(0,r.jsx)(N.Z,{style:{marginLeft:"auto"}}),(0,r.jsx)(k,{left:n,right:100,onChange:function(e){P.volume=Number(e.target.value)/100,p(Number(e.target.value))}})]}):null},_=n(9008),z=function(e){var t=e.children,n=e.title,o=e.description,a=e.keywords;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(_.default,{children:[(0,r.jsx)("title",{children:n||"\u041c\u0443\u0437\u0438\u0447\u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430"}),(0,r.jsx)("meta",{name:"description",content:"\u041c\u0443\u0437\u0438\u0447\u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430. \u0412\u0456\u0434\u043f\u0440\u0430\u0432 \u0441\u0432\u0456\u0439 \u0442\u0440\u0435\u043a \u0443 \u0432\u0456\u0447\u043d\u0456\u0441\u0442\u044c."+o}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"keywords",content:a||"\u041c\u0443\u0437\u0438\u043a\u0430, \u0442\u0440\u0435\u043a\u0438, \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0446\u0456"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{httpEquiv:"Content-Security-Policy",content:"upgrade-insecure-requests"})]}),(0,r.jsx)(g,{}),(0,r.jsx)(L.Z,{style:{margin:"90px 0"},children:t}),(0,r.jsx)(O,{})]})}},67:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return de}});var r=n(5893),o=n(7294),a=n(9382),i=n(551),l=n(3366),s=n(7462),c=n(6010),u=n(5170),d=n(6312),p=n(7634),v=n(5358),f=n(4118);function m(e){return(0,v.Z)("MuiStepper",e)}(0,f.Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);var h=n(3353);var x=o.createContext({});var b=o.createContext({});function y(e){return(0,v.Z)("MuiStepConnector",e)}(0,f.Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Z=["className"],j=(0,p.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})((({styleProps:e})=>(0,s.Z)({flex:"1 1 auto"},"vertical"===e.orientation&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"}))),g=(0,p.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{const{styleProps:n}=e;return[t.line,t[`line${(0,h.Z)(n.orientation)}`]]}})((({styleProps:e,theme:t})=>(0,s.Z)({display:"block",borderColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]},"horizontal"===e.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===e.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})));var P=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStepConnector"}),{className:a}=n,i=(0,l.Z)(n,Z),{alternativeLabel:p,orientation:v="horizontal"}=o.useContext(x),{active:f,disabled:m,completed:P}=o.useContext(b),L=(0,s.Z)({},n,{alternativeLabel:p,orientation:v,active:f,completed:P,disabled:m}),S=(e=>{const{classes:t,orientation:n,alternativeLabel:r,active:o,completed:a,disabled:i}=e,l={root:["root",n,r&&"alternativeLabel",o&&"active",a&&"completed",i&&"disabled"],line:["line",`line${(0,h.Z)(n)}`]};return(0,u.Z)(l,y,t)})(L);return(0,r.jsx)(j,(0,s.Z)({className:(0,c.Z)(S.root,a),ref:t,styleProps:L},i,{children:(0,r.jsx)(g,{className:S.line,styleProps:L})}))}));const L=["activeStep","alternativeLabel","children","className","connector","nonLinear","orientation"],S=(0,p.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel]}})((({styleProps:e})=>(0,s.Z)({display:"flex"},"horizontal"===e.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===e.orientation&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"}))),C=(0,r.jsx)(P,{});var N=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStepper"}),{activeStep:a=0,alternativeLabel:i=!1,children:p,className:v,connector:f=C,nonLinear:h=!1,orientation:b="horizontal"}=n,y=(0,l.Z)(n,L),Z=(0,s.Z)({},n,{alternativeLabel:i,orientation:b}),j=(e=>{const{orientation:t,alternativeLabel:n,classes:r}=e,o={root:["root",t,n&&"alternativeLabel"]};return(0,u.Z)(o,m,r)})(Z),g=o.Children.toArray(p).filter(Boolean),P=g.map(((e,t)=>o.cloneElement(e,(0,s.Z)({index:t,last:t+1===g.length},e.props)))),N=o.useMemo((()=>({activeStep:a,alternativeLabel:i,connector:f,nonLinear:h,orientation:b})),[a,i,f,h,b]);return(0,r.jsx)(x.Provider,{value:N,children:(0,r.jsx)(S,(0,s.Z)({styleProps:Z,className:(0,c.Z)(j.root,v),ref:t},y,{children:P}))})}));function w(e){return(0,v.Z)("MuiStep",e)}(0,f.Z)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const M=["active","children","className","completed","disabled","expanded","index","last"],R=(0,p.ZP)("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:n}=e;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})((({styleProps:e})=>(0,s.Z)({},"horizontal"===e.orientation&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})));var k=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStep"}),{active:a,children:i,className:p,completed:v,disabled:f,expanded:m=!1,index:h,last:y}=n,Z=(0,l.Z)(n,M),{activeStep:j,connector:g,alternativeLabel:P,orientation:L,nonLinear:S}=o.useContext(x);let[C=!1,N=!1,k=!1]=[a,v,f];j===h?C=void 0===a||a:!S&&j>h?N=void 0===v||v:!S&&j<h&&(k=void 0===f||f);const T=o.useMemo((()=>({index:h,last:y,expanded:m,icon:h+1,active:C,completed:N,disabled:k})),[h,y,m,C,N,k]),E=(0,s.Z)({},n,{active:C,orientation:L,alternativeLabel:P,completed:N,disabled:k,expanded:m}),O=(e=>{const{classes:t,orientation:n,alternativeLabel:r,completed:o}=e,a={root:["root",n,r&&"alternativeLabel",o&&"completed"]};return(0,u.Z)(a,w,t)})(E),_=(0,r.jsxs)(R,(0,s.Z)({className:(0,c.Z)(O.root,p),ref:t,styleProps:E},Z,{children:[g&&P&&0!==h?g:null,i]}));return(0,r.jsx)(b.Provider,{value:T,children:g&&!P&&0!==h?(0,r.jsxs)(o.Fragment,{children:[g,_]}):_})})),T=n(1177),E=(0,T.Z)((0,r.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),O=(0,T.Z)((0,r.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),_=n(4687);function z(e){return(0,v.Z)("MuiStepIcon",e)}var I,A=(0,f.Z)("MuiStepIcon",["root","active","completed","error","text"]);const $=["active","className","completed","error","icon"],D=(0,p.ZP)(_.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:e.palette.text.disabled,[`&.${A.completed}`]:{color:e.palette.primary.main},[`&.${A.active}`]:{color:e.palette.primary.main},[`&.${A.error}`]:{color:e.palette.error.main}}))),F=(0,p.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})((({theme:e})=>({fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})));var W=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStepIcon"}),{active:o=!1,className:a,completed:i=!1,error:p=!1,icon:v}=n,f=(0,l.Z)(n,$),m=(0,s.Z)({},n,{active:o,completed:i,error:p}),h=(e=>{const{classes:t,active:n,completed:r,error:o}=e,a={root:["root",n&&"active",r&&"completed",o&&"error"],text:["text"]};return(0,u.Z)(a,z,t)})(m);if("number"===typeof v||"string"===typeof v){const e=(0,c.Z)(a,h.root);return p?(0,r.jsx)(D,(0,s.Z)({as:O,className:e,ref:t,styleProps:m},f)):i?(0,r.jsx)(D,(0,s.Z)({as:E,className:e,ref:t,styleProps:m},f)):(0,r.jsxs)(D,(0,s.Z)({className:e,ref:t,styleProps:m},f,{children:[I||(I=(0,r.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,r.jsx)(F,{className:h.text,x:"12",y:"16",textAnchor:"middle",styleProps:m,children:v})]}))}return v}));function V(e){return(0,v.Z)("MuiStepLabel",e)}var G=(0,f.Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]);const U=["children","className","componentsProps","error","icon","optional","StepIconComponent","StepIconProps"],H=(0,p.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{styleProps:n}=e;return[t.root,t[n.orientation]]}})((({styleProps:e})=>(0,s.Z)({display:"flex",alignItems:"center",[`&.${G.alternativeLabel}`]:{flexDirection:"column"},[`&.${G.disabled}`]:{cursor:"default"}},"vertical"===e.orientation&&{textAlign:"left",padding:"8px 0"}))),X=(0,p.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})((({theme:e})=>(0,s.Z)({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${G.active}`]:{color:e.palette.text.primary,fontWeight:500},[`&.${G.completed}`]:{color:e.palette.text.primary,fontWeight:500},[`&.${G.alternativeLabel}`]:{textAlign:"center",marginTop:16},[`&.${G.error}`]:{color:e.palette.error.main}}))),q=(0,p.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})((()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${G.alternativeLabel}`]:{paddingRight:0}}))),B=(0,p.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})((({theme:e})=>({width:"100%",color:e.palette.text.secondary}))),Y=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStepLabel"}),{children:a,className:i,componentsProps:p={},error:v=!1,icon:f,optional:m,StepIconComponent:h,StepIconProps:y}=n,Z=(0,l.Z)(n,U),{alternativeLabel:j,orientation:g}=o.useContext(x),{active:P,disabled:L,completed:S,icon:C}=o.useContext(b),N=f||C;let w=h;N&&!w&&(w=W);const M=(0,s.Z)({},n,{active:P,alternativeLabel:j,completed:S,disabled:L,error:v,orientation:g}),R=(e=>{const{classes:t,orientation:n,active:r,completed:o,error:a,disabled:i,alternativeLabel:l}=e,s={root:["root",n,a&&"error",i&&"disabled",l&&"alternativeLabel"],label:["label",r&&"active",o&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",l&&"alternativeLabel"],labelContainer:["labelContainer"]};return(0,u.Z)(s,V,t)})(M);return(0,r.jsxs)(H,(0,s.Z)({className:(0,c.Z)(R.root,i),ref:t,styleProps:M},Z,{children:[N||w?(0,r.jsx)(q,{className:R.iconContainer,styleProps:M,children:(0,r.jsx)(w,(0,s.Z)({completed:S,active:P,error:v,icon:N},y))}):null,(0,r.jsxs)(B,{className:R.labelContainer,styleProps:M,children:[a?(0,r.jsx)(X,(0,s.Z)({className:R.label,styleProps:M},p.label,{children:a})):null,m]})]}))}));Y.muiName="StepLabel";var J=Y,K=n(9753),Q=n(6782),ee=["\u041e\u043f\u0438\u0441 \u0442\u0440\u0435\u043a\u0443","\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043e\u0431\u043a\u043b\u0430\u0434\u0438\u043d\u043a\u0443","\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0430\u0443\u0434\u0456\u043e"],te=function(e){var t=e.activeStep,n=e.children;return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(N,{activeStep:t,children:ee.map((function(e,n){return(0,r.jsx)(k,{completed:t>n,children:(0,r.jsx)(J,{children:e})},n)}))}),(0,r.jsx)(K.ZP,{container:!0,justifyContent:"center",style:{margin:"70px 0 ",height:270},children:(0,r.jsx)(Q.Z,{style:{width:600},children:n})})]})},ne=n(2233),re=n(8513),oe=function(e){var t=e.setFile,n=e.accept,a=e.children,i=(0,o.useRef)();return(0,r.jsxs)("div",{onClick:function(){return i.current.click()},children:[(0,r.jsx)("input",{type:"file",accept:n,style:{display:"none"},ref:i,onChange:function(e){t(e.target.files[0])}}),a]})},ae=n(719),ie=n(9669),le=n.n(ie),se=n(1163);function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ce(e,t,n[t])}))}return e}var de=function(){var e=(0,o.useState)(0),t=e[0],n=e[1],i=(0,o.useState)(null),l=i[0],s=i[1],c=(0,o.useState)(null),u=c[0],d=c[1],p=(0,ae.G)(""),v=(0,ae.G)(""),f=(0,ae.G)(""),m=(0,se.useRouter)();return(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(te,{activeStep:t,children:[0===t&&(0,r.jsxs)(K.ZP,{container:!0,direction:"column",style:{padding:20},children:[(0,r.jsx)(ne.Z,ue({},p,{style:{marginTop:10},label:"\u041d\u0430\u0437\u0432\u0430 \u0442\u0440\u0435\u043a\u0443"})),(0,r.jsx)(ne.Z,ue({},v,{style:{marginTop:10},label:"\u0406\u043c'\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0446\u044f"})),(0,r.jsx)(ne.Z,ue({},f,{style:{marginTop:10},label:"\u041e\u043f\u0438\u0441",multiline:!0,rows:3}))]}),1===t&&(0,r.jsx)(oe,{setFile:s,accept:"image/*",children:(0,r.jsx)(re.Z,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043e\u0431\u043a\u043b\u0430\u0434\u0438\u043d\u043a\u0443"})}),2===t&&(0,r.jsx)(oe,{setFile:d,accept:"audio/*",children:(0,r.jsx)(re.Z,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0430\u0443\u0434\u0456\u043e"})})]}),(0,r.jsxs)(K.ZP,{container:!0,justifyContent:"space-between",children:[(0,r.jsx)(re.Z,{disabled:0===t,onClick:function(){n((function(e){return e-1}))},children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c"}),(0,r.jsx)(re.Z,{onClick:function(){if(2!==t)n((function(e){return e+1}));else{var e=new FormData;e.append("name",p.value),e.append("text",f.value),e.append("artist",v.value),e.append("picture",l),e.append("audio",u),le().post("http://localhost:5000/tracks",e).then((function(e){return m.push("/tracks")})).catch((function(e){return console.log(e)}))}},children:"\u0414\u0430\u043b\u0456"})]})]})}},7962:function(e){e.exports={player:"Player_player__H5WBX"}}},function(e){e.O(0,[650,997,774,888,179],(function(){return t=9515,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
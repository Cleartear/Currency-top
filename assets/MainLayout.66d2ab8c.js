import{u as Z,a as ee,Q as te,c as A,g as ne}from"./dom.114b8313.js";import{c as S,h as oe,a as W,b as le,d as ie}from"./render.4ae5a789.js";import{c as f,h as v,r as p,i as K,o as H,a as E,n as X,d as D,g as Q,l as F,e as Y,f as C,w as x,j as M,p as G,k as re,m as R,q as ae,_ as se,s as ue,t as ce,u as de,v as q,x as _,y as fe,z as ve}from"./index.a84d63f1.js";var he=S({name:"QAvatar",props:{...Z,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:a}){const t=ee(e),n=f(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),o=f(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const s=e.icon!==void 0?[v(te,{name:e.icon})]:void 0;return v("div",{class:n.value,style:t.value},[v("div",{class:"q-avatar__content row flex-center overflow-hidden",style:o.value},oe(a.default,s))])}}}),me=S({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const t=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>v("div",{class:t.value},W(a.default))}}),ge=S({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const t=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>v("div",{class:t.value,role:"toolbar"},W(a.default))}});function be(){const e=p(!K.value);return e.value===!1&&H(()=>{e.value=!0}),e}const J=typeof ResizeObserver!="undefined",I=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var N=S({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let t=null,n,o={width:-1,height:-1};function s(u){u===!0||e.debounce===0||e.debounce==="0"?c():t===null&&(t=setTimeout(c,e.debounce))}function c(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:u,offsetHeight:i}=n;(u!==o.width||i!==o.height)&&(o={width:u,height:i},a("resize",o))}}const{proxy:m}=Q();if(J===!0){let u;const i=g=>{n=m.$el.parentNode,n?(u=new ResizeObserver(s),u.observe(n),c()):g!==!0&&D(()=>{i(!0)})};return H(()=>{i()}),E(()=>{t!==null&&clearTimeout(t),u!==void 0&&(u.disconnect!==void 0?u.disconnect():n&&u.unobserve(n))}),X}else{let g=function(){t!==null&&(clearTimeout(t),t=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,F.passive),i=void 0)},b=function(){g(),n&&n.contentDocument&&(i=n.contentDocument.defaultView,i.addEventListener("resize",s,F.passive),c())};const u=be();let i;return H(()=>{D(()=>{n=m.$el,n&&b()})}),E(g),m.trigger=s,()=>{if(u.value===!0)return v("object",{style:I.style,tabindex:-1,type:"text/html",data:I.url,"aria-hidden":"true",onLoad:b})}}}}),ye=S({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:t}){const{proxy:{$q:n}}=Q(),o=Y(M,C);if(o===C)return console.error("QHeader needs to be child of QLayout"),C;const s=p(parseInt(e.heightHint,10)),c=p(!0),m=f(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||n.platform.is.ios&&o.isContainer.value===!0),u=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?s.value:0;const l=s.value-o.scroll.value.position;return l>0?l:0}),i=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),g=f(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),b=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=f(()=>{const l=o.rows.value.top,y={};return l[0]==="l"&&o.left.space===!0&&(y[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),l[2]==="r"&&o.right.space===!0&&(y[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),y});function d(l,y){o.update("header",l,y)}function w(l,y){l.value!==y&&(l.value=y)}function O({height:l}){w(s,l),d("size",l)}function V(l){g.value===!0&&w(c,!0),t("focusin",l)}x(()=>e.modelValue,l=>{d("space",l),w(c,!0),o.animate()}),x(u,l=>{d("offset",l)}),x(()=>e.reveal,l=>{l===!1&&w(c,e.modelValue)}),x(c,l=>{o.animate(),t("reveal",l)}),x(o.scroll,l=>{e.reveal===!0&&w(c,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const L={};return o.instances.header=L,e.modelValue===!0&&d("size",s.value),d("space",e.modelValue),d("offset",u.value),E(()=>{o.instances.header===L&&(o.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const l=le(a.default,[]);return e.elevated===!0&&l.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(v(N,{debounce:0,onResize:O})),v("header",{class:b.value,style:z.value,onFocusin:V},l)}}}),we=S({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:t}}=Q(),n=Y(M,C);if(n===C)return console.error("QPageContainer needs to be child of QLayout"),C;G(re,!0);const o=f(()=>{const s={};return n.header.space===!0&&(s.paddingTop=`${n.header.size}px`),n.right.space===!0&&(s[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(s.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(s[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),s});return()=>v("div",{class:"q-page-container",style:o.value},W(a.default))}});const pe=[null,document,document.body,document.scrollingElement,document.documentElement];function ze(e,a){let t=ne(a);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return pe.includes(t)?window:t}function xe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Se(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let P;function k(){if(P!==void 0)return P;const e=document.createElement("p"),a=document.createElement("div");A(e,{width:"100%",height:"200px"}),A(a,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),a.appendChild(e),document.body.appendChild(a);const t=e.offsetWidth;a.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=a.clientWidth),a.remove(),P=t-n,P}const{passive:U}=F,Te=["both","horizontal","vertical"];var qe=S({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Te.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:a}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,o,s;x(()=>e.scrollTarget,()=>{u(),m()});function c(){n!==null&&n();const b=Math.max(0,xe(o)),z=Se(o),d={top:b-t.position.top,left:z-t.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const w=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";t.position={top:b,left:z},t.directionChanged=t.direction!==w,t.delta=d,t.directionChanged===!0&&(t.direction=w,t.inflectionPoint=t.position),a("scroll",{...t})}function m(){o=ze(s,e.scrollTarget),o.addEventListener("scroll",i,U),i(!0)}function u(){o!==void 0&&(o.removeEventListener("scroll",i,U),o=void 0)}function i(b){if(b===!0||e.debounce===0||e.debounce==="0")c();else if(n===null){const[z,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];n=()=>{d(z),n=null}}}const{proxy:g}=Q();return x(()=>g.$q.lang.rtl,c),H(()=>{s=g.$el.parentNode,m()}),E(()=>{n!==null&&n(),u()}),Object.assign(g,{trigger:i,getPosition:()=>t}),X}}),_e=S({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:t}){const{proxy:{$q:n}}=Q(),o=p(null),s=p(n.screen.height),c=p(e.container===!0?0:n.screen.width),m=p({position:0,direction:"down",inflectionPoint:0}),u=p(0),i=p(K.value===!0?0:k()),g=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),z=f(()=>i.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=f(()=>i.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function w(r){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};m.value=h,e.onScroll!==void 0&&t("scroll",h)}}function O(r){const{height:h,width:T}=r;let $=!1;s.value!==h&&($=!0,s.value=h,e.onScrollHeight!==void 0&&t("scrollHeight",h),L()),c.value!==T&&($=!0,c.value=T),$===!0&&e.onResize!==void 0&&t("resize",r)}function V({height:r}){u.value!==r&&(u.value=r,L())}function L(){if(e.container===!0){const r=s.value>u.value?k():0;i.value!==r&&(i.value=r)}}let l=null;const y={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:s,containerHeight:u,scrollbarWidth:i,totalWidth:f(()=>c.value+i.value),rows:f(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:m,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,h,T){y[r][h]=T}};if(G(M,y),k()>0){let T=function(){r=null,h.classList.remove("hide-scrollbar")},$=function(){if(r===null){if(h.scrollHeight>n.screen.height)return;h.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(T,300)},B=function(j){r!==null&&j==="remove"&&(clearTimeout(r),T()),window[`${j}EventListener`]("resize",$)},r=null;const h=document.body;x(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),ae(()=>{B("remove")})}return()=>{const r=ie(a.default,[v(qe,{onScroll:w}),v(N,{onResize:O})]),h=v("div",{class:g.value,style:b.value,ref:e.container===!0?void 0:o,tabindex:-1},r);return e.container===!0?v("div",{class:"q-layout-container overflow-hidden",ref:o},[v(N,{onResize:V}),v("div",{class:"absolute-full",style:z.value},[v("div",{class:"scroll",style:d.value},[h])])]):h}}});const Ce={},Le=ve("img",{src:"icons/icon-128x128.png"},null,-1);function $e(e,a){const t=ue("router-view");return ce(),de(_e,{view:"lHh Lpr lFf"},{default:q(()=>[_(ye,{elevated:""},{default:q(()=>[_(ge,null,{default:q(()=>[_(he,null,{default:q(()=>[Le]),_:1}),_(me,null,{default:q(()=>[fe(" Currency Top ")]),_:1})]),_:1})]),_:1}),_(we,null,{default:q(()=>[_(t)]),_:1})]),_:1})}var He=se(Ce,[["render",$e]]);export{He as default};

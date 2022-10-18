(function(){"use strict";var t={2166:function(t,e,n){var r=n(9242),o=n(3396);function u(t,e){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(n,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(n,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o.Wm)(r)],64)}var i=n(89);const a={},l=(0,i.Z)(a,[["render",u]]);var s=l,c=n(2483);const d=t=>((0,o.dD)("data-v-f5839c9a"),t=t(),(0,o.Cn)(),t),f={class:"container mt-5"},p={class:"d-flex justify-content-center"},m={class:"card p-4 width mb-4"},v=d((()=>(0,o._)("h3",{class:"mb-0 text-start"},"Form gmail",-1))),b=d((()=>(0,o._)("hr",{class:"mt-1 mb-4"},null,-1))),g={class:"text-start mb-3"},h=d((()=>(0,o._)("label",{for:"inputEmail"},[(0,o._)("strong",null,"Email")],-1))),y={class:"text-start mb-3"},w=d((()=>(0,o._)("label",{for:"inputPassword"},[(0,o._)("strong",null,"Password")],-1))),_={class:"d-flex justify-content-start align-items-center"};function k(t,e,n,r,u,i){const a=(0,o.up)("AppInput"),l=(0,o.up)("AppButtons");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",p,[(0,o._)("div",m,[v,b,(0,o._)("div",g,[h,(0,o.Wm)(a,{modelValue:u.inputValueMail,"onUpdate:modelValue":e[0]||(e[0]=t=>u.inputValueMail=t),modelModifiers:{trim:!0},type:"email",id:"inputEmail"},null,8,["modelValue"])]),(0,o._)("div",y,[w,(0,o.Wm)(a,{modelValue:u.inputValuePass,"onUpdate:modelValue":e[1]||(e[1]=t=>u.inputValuePass=t),modelModifiers:{trim:!0},type:"password",id:"inputPassword"},null,8,["modelValue"])]),(0,o._)("div",_,[(0,o.Wm)(l,{color:"success",size:"sm",class:"rounded-pill"},{default:(0,o.w5)((()=>[(0,o.Uk)("Sign In")])),_:1}),(0,o.Wm)(l,{color:"danger",size:"sm",class:"rounded-pill"},{default:(0,o.w5)((()=>[(0,o.Uk)("Forgot password?")])),_:1})])])])])}var V=n(7139);function O(t,e,n,r,u,i){return(0,o.wg)(),(0,o.iD)("button",{class:(0,V.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:e[0]||(e[0]=e=>t.$emit("click"))},[(0,o.WI)(t.$slots,"default")],2)}var j={name:"AppButtons",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]};const P=(0,i.Z)(j,[["render",O]]);var S=P;const x=["value"];function A(t,e,n,r,u,i){return(0,o.wg)(),(0,o.iD)("input",{class:(0,V.C_)(["mb-1",n.size]),value:n.modelValue,onInput:e[0]||(e[0]=(...t)=>i.updateInput&&i.updateInput(...t))},null,42,x)}var C={name:"MyInput",props:{modelValue:{type:String,default:""},size:{type:String,default:"form-control"},type:{type:String,default:"text"},id:{type:String,default:""}},emits:["update:modelValue"],methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const I=(0,i.Z)(C,[["render",A]]);var M=I,E={name:"HomeView",components:{AppButtons:S,AppInput:M},data(){return{inputValueMail:"",inputValuePass:""}}};const T=(0,i.Z)(E,[["render",k],["__scopeId","data-v-f5839c9a"]]);var W=T;const U=[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],z=(0,c.p7)({history:(0,c.PO)("/formGmail/"),routes:U});var D=z,$=n(65),B=(0,$.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(s).use(B).use(D).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return t[r](u,u.exports,n),u.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,u){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],u=t[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&u||i>=u)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,u<i&&(i=u));if(a){t.splice(c--,1);var s=o();void 0!==s&&(e=s)}}return e}u=u||0;for(var c=t.length;c>0&&t[c-1][2]>u;c--)t[c]=t[c-1];t[c]=[r,o,u]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.c28dfed8.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="form-gmail:";n.l=function(r,o,u,i){if(t[r])t[r].push(o);else{var a,l;if(void 0!==u)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+u){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+u),a.src=r),t[r]=[o];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/formGmail/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=u);var i=n.p+n.u(e),a=new Error,l=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};n.l(i,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,u,i=r[0],a=r[1],l=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var c=l(n)}for(e&&e(r);s<i.length;s++)u=i[s],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(c)},r=self["webpackChunkform_gmail"]=self["webpackChunkform_gmail"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2166)}));r=n.O(r)})();
//# sourceMappingURL=app.a547e1da.js.map
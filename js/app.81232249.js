(function(){"use strict";var e={4285:function(e,t,n){var i=n(9242),s=n(3396);const a={key:0,class:"position-reletive center-margin"};function o(e,t,n,i,o,u){const r=(0,s.up)("router-link"),l=(0,s.up)("NavBar"),c=(0,s.up)("SentModal"),m=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[o.isAuth?((0,s.wg)(),(0,s.j4)(l,{key:1,class:"m-3",onLogout:u.logout},null,8,["onLogout"])):((0,s.wg)(),(0,s.iD)("nav",a,[(0,s.Wm)(r,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Main")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(r,{to:"/form"},{default:(0,s.w5)((()=>[(0,s.Uk)("Form")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(r,{to:"/about"},{default:(0,s.w5)((()=>[(0,s.Uk)("About")])),_:1})])),o.modal?((0,s.wg)(),(0,s.j4)(c,{key:2,onClose:t[0]||(t[0]=e=>o.modal=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)("You are logged out of your account")])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(m)],64)}n(7658);const u={class:"d-flex justify-content-between align-items-center"},r={class:"div"},l=(0,s._)("h5",{class:"mb-0 text-dark"},"Gmail",-1),c={class:"d-flex justify-content-end align-items-center"},m=(0,s._)("h6",{class:"me-3 mb-0 text-dark"},"Main",-1),d=(0,s._)("h6",{class:"me-3 mb-0 text-dark"},"Mail",-1);function p(e,t,n,a,o,p){const f=(0,s.up)("router-link"),g=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",r,[(0,s.Wm)(f,{to:"/",class:"text-decoration-none"},{default:(0,s.w5)((()=>[l])),_:1})]),(0,s._)("div",c,[(0,s.Wm)(f,{to:"/",class:"text-decoration-none"},{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(f,{to:"/mail",class:"text-decoration-none"},{default:(0,s.w5)((()=>[d])),_:1}),(0,s.Wm)(g,{color:"warning",size:"md",class:"rounded-pill text-white",onClick:(0,i.iM)(p.OutLog,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Uk)("Go out")])),_:1},8,["onClick"])])])}var f=n(7139);function g(e,t,n,i,a,o){return(0,s.wg)(),(0,s.iD)("button",{class:(0,f.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click"))},[(0,s.WI)(e.$slots,"default")],2)}var v={name:"AppButtons",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]},h=n(89);const b=(0,h.Z)(v,[["render",g]]);var w=b,_={name:"NavBar",components:{AppButtons:w},inject:["logout"],methods:{OutLog(){this.logout(),this.modal=!0}}};const k=(0,h.Z)(_,[["render",p]]);var x=k;const q={class:"m-auto bg-light border border-success rounded p-5 d-flex flex-column"};function y(e,t,n,i,a,o){return(0,s.wg)(),(0,s.iD)("div",{class:"modal d-flex p-4 backdrop",onClick:t[0]||(t[0]=t=>e.$emit("close"))},[(0,s._)("div",q,[(0,s.WI)(e.$slots,"default")])])}var A={name:"SentModal",emits:["close"]};const S=(0,h.Z)(A,[["render",y]]);var W=S,j={components:{NavBar:x,SentModal:W},data(){return{modal:!1,isAuth:!1}},methods:{login(){this.isAuth=!0,this.$router.push("/dashboard")},logout(){this.isAuth=!1,this.$router.push("/"),this.modal=!0}},provide(){return{login:this.login,logout:this.logout,isAuth:(0,s.Fl)((()=>this.isAuth))}}};const I=(0,h.Z)(j,[["render",o]]);var C=I,D=n(2483);const N=e=>((0,s.dD)("data-v-a0ee77a2"),e=e(),(0,s.Cn)(),e),O={class:"container mt-5"},M={class:"d-flex justify-content-center"},P={class:"card p-4 width mb-4"},U=N((()=>(0,s._)("h3",{class:"mb-0 text-start"},"Form gmail",-1))),Z=N((()=>(0,s._)("hr",{class:"mt-1 mb-4"},null,-1)));function z(e,t,n,i,a,o){const u=(0,s.up)("InputLogin");return(0,s.wg)(),(0,s.iD)("div",O,[(0,s._)("div",M,[(0,s._)("div",P,[U,Z,(0,s.Wm)(u)])])])}const B=e=>((0,s.dD)("data-v-cf9467f6"),e=e(),(0,s.Cn)(),e),F={class:"mb-3 d-flex flex-column"},$=B((()=>(0,s._)("label",{for:"email",class:"text-start"},[(0,s._)("strong",null,"Email")],-1))),L={class:"mb-3 d-flex flex-column"},V=B((()=>(0,s._)("label",{for:"password",class:"text-start"},[(0,s._)("strong",null,"Password")],-1))),E={class:"d-flex justify-content-start align-items-center"};function T(e,t,n,i,a,o){const u=(0,s.up)("Field"),r=(0,s.up)("ErrorMessage"),l=(0,s.up)("AppButtons"),c=(0,s.up)("router-link"),m=(0,s.up)("Form");return(0,s.wg)(),(0,s.j4)(m,{onSubmit:o.onSubmit,"validation-schema":o.schema},{default:(0,s.w5)((()=>[(0,s._)("div",F,[$,(0,s.Wm)(u,{modelValue:a.inputEmail,"onUpdate:modelValue":t[0]||(t[0]=e=>a.inputEmail=e),modelModifiers:{trim:!0},type:"text",id:"email",name:"email",class:"mb-1"},null,8,["modelValue"]),(0,s.Wm)(r,{name:"email",class:"dangerous text-start lh-1 fontsizeSmall"})]),(0,s._)("div",L,[V,(0,s.Wm)(u,{modelValue:a.inputPassword,"onUpdate:modelValue":t[1]||(t[1]=e=>a.inputPassword=e),modelModifiers:{trim:!0},type:"password",name:"password",id:"password",class:"mb-1",autocomplete:"true"},null,8,["modelValue"]),(0,s.Wm)(r,{name:"password",class:"dangerous text-start lh-1 fontsizeSmall"})]),(0,s._)("div",E,[(0,s.Wm)(l,{color:"success",size:"sm",class:"rounded-pill",type:"submit"},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign In")])),_:1}),(0,s.Wm)(c,{to:"/forget"},{default:(0,s.w5)((({navigate:e})=>[(0,s.Wm)(l,{color:"danger",size:"sm",class:"rounded-pill",onClick:e},{default:(0,s.w5)((()=>[(0,s.Uk)("Forgot password?")])),_:2},1032,["onClick"])])),_:1})])])),_:1},8,["onSubmit","validation-schema"])}var Y=n(5708),G=n(3634),R={name:"InputLogin",components:{Form:Y.l0,Field:Y.gN,ErrorMessage:Y.Bc,AppButtons:w},data(){return{inputEmail:"",inputPassword:""}},computed:{schema(){return G.Ry({email:G.Z_().required().email(),password:G.Z_().min(8)})}},inject:["login"],methods:{onSubmit(){this.login()}}};const H=(0,h.Z)(R,[["render",T],["__scopeId","data-v-cf9467f6"]]);var Q=H,K={name:"FormView",components:{InputLogin:Q}};const J=(0,h.Z)(K,[["render",z],["__scopeId","data-v-a0ee77a2"]]);var X=J;const ee={class:"about"},te=(0,s._)("h1",null,"This is an about page",-1),ne=[te];function ie(e,t){return(0,s.wg)(),(0,s.iD)("div",ee,ne)}const se={},ae=(0,h.Z)(se,[["render",ie]]);var oe=ae;const ue={class:"container"},re={class:"card width40 p-3 d-flex flex-column align-items-center justify-content-center m-auto"},le=(0,s._)("div",{class:"text-center"},[(0,s._)("h4",{class:"mb-3 p-1"},"Forget password?")],-1);function ce(e,t,n,i,a,o){const u=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",ue,[(0,s._)("div",re,[le,(0,s.Wm)(u,{color:"danger",size:"sm",class:"rounded-pill width40",onClick:o.toLogin},{default:(0,s.w5)((()=>[(0,s.Uk)("Return to login")])),_:1},8,["onClick"]),(0,s.Wm)(u,{color:"success",size:"sm",class:"rounded-pill width40",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},{default:(0,s.w5)((()=>[(0,s.Uk)("To main")])),_:1})])])}var me={name:"Forget",components:{AppButtons:w},methods:{toLogin(){this.$router.push("/form")}}};const de=(0,h.Z)(me,[["render",ce]]);var pe=de;const fe={class:"d-flex justify-content-between align-items-center"},ge={class:"container position-relative"},ve={key:0,class:"position-absolute top-0 start-100 middlePosition"},he=(0,s._)("div",{class:""},[(0,s._)("h1",{class:"mb-4"},"Welcome to main page")],-1),be=(0,s._)("p",null," Nam porttitor consectetur sapien vitae malesuada. Ut in lectus eget ante gravida tincidunt eu non mauris. Ut sit amet leo mi. Vestibulum convallis vulputate odio. Vivamus non risus vitae nunc fermentum dictum quis in lacus. Pellentesque non tincidunt quam, vehicula faucibus nulla. Aliquam erat volutpat. Nunc a sollicitudin ipsum, lobortis congue nulla. Pellentesque non lectus lorem. Sed imperdiet placerat lorem id consequat. Fusce at placerat massa. ",-1);function we(e,t,n,i,a,o){const u=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",fe,[(0,s._)("div",ge,[o.isAuth?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",ve,[(0,s.Wm)(u,{color:"danger",size:"sm",class:"",onClick:t[0]||(t[0]=t=>e.$router.push("/form"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Sing in")])),_:1})])),he,be])])}var _e={name:"Main",components:{AppButtons:w},inject:["isAuth"]};const ke=(0,h.Z)(_e,[["render",we]]);var xe=ke;const qe={class:"container"},ye=(0,s._)("div",{class:"bg-success p-2 bg-opacity-75 card p-3"},[(0,s._)("div",{class:"d-flex justify-content-between align-items-center"},[(0,s._)("h6",{class:"text-start text-white"},"You have successfully logged in")])],-1),Ae=[ye];function Se(e,t){return(0,s.wg)(),(0,s.iD)("div",qe,Ae)}const We={},je=(0,h.Z)(We,[["render",Se]]);var Ie=je;const Ce={class:"container"},De={class:"form-control p-4 position-relative"},Ne={class:"title-left p-2"},Oe={class:"mb-0"},Me=(0,s._)("hr",{class:"vl"},null,-1);function Pe(e,t,n,i,a,o){const u=(0,s.up)("AppIcon");return(0,s.wg)(),(0,s.iD)("div",Ce,[(0,s._)("div",De,[(0,s.Wm)(u,{class:"position-absolute top-0 end-0"}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.lists,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"d-flex justify-content-between align-items-center"},[(0,s._)("div",Ne,[(0,s._)("h6",Oe,(0,f.zw)(e.title),1)]),Me])))),128))])])}function Ue(e,t,n,i,a,o){return(0,s.wg)(),(0,s.iD)("i",{class:(0,f.C_)([n.size,"mdi",`mdi-${n.name}`]),style:(0,f.j5)({color:n.color})},null,6)}var Ze={name:"AppIcon",props:{name:{type:String,default:"close-octagon-outline"},color:{type:String,default:"black"},size:{type:String,default:"md"}}};const ze=(0,h.Z)(Ze,[["render",Ue]]);var Be=ze,Fe={name:"MailView",components:{AppIcon:Be},data(){return{lists:[{title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",descriptions:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,\t\t\t\t\t\texercitationem? Corrupti ab modi vero sequi consequatur cumqu\t\t\t\t\t\texpedita ducimus quidem dolor!/"},{title:"Donec vitae tincidunt nisi",descriptions:"Nullam nulla erat, aliquet non sodales nec, elementum ac risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis accumsan massa non tempus. Integer vitae gravida leo. Phasellus vel ex at turpis finibus dictum eget eget dolor. Nulla efficitur at nisl vel elementum"},{title:"Integer nec pellentesque sapien",descriptions:"Integer nec pellentesque sapien. Proin ut quam dapibus, mollis purus quis, fermentum est. Maecenas eu mollis erat. Integer fermentum turpis quis rhoncus suscipit. Nam ultricies erat in mauris consequat lobortis. Nullam rutrum, dolor eu tempor euismod, nibh libero lacinia diam, non rhoncus enim lorem nec enim. Sed a interdum augue. Quisque sed malesuada nulla."},{title:"Vestibulum at eros scelerisque, elementum leo nec, porta libero",descriptions:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis accumsan massa non tempus. Integer vitae gravida leo."},{title:"Sed libero enim",descriptions:"Sed libero enim, cursus sed vulputate sed, egestas nec velit. Nullam ante nunc, finibus sed euismod quis, congue rutrum elit. Sed purus arcu, congue eu mi eu, ornare ultricies ante. Aliquam vitae ligula elit. Phasellus varius massa vel auctor molestie. Aenean convallis lacus sed tristique elementum. Nulla sed rutrum lacus. Pellentesque quis consectetur erat, a condimentum magna. Cras facilisis venenatis ante, eget cursus sapien pulvinar in. Sed placerat sed lacus at ultrices. Aliquam bibendum mauris nec suscipit feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas efficitur risus enim. Nam dapibus mi id quam sagittis, ac auctor augue suscipit. Aenean a ullamcorper nisl. Duis hendrerit libero sit amet ligula luctus, in placerat ante tristique"},{title:"Aliquam vitae ligula elit",descriptions:"Nullam nulla erat, aliquet non sodales nec, elementum ac risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"},{title:"Phasellus vel ex at turpis finibus dictum eget eget dolor",descriptions:"Nullam rutrum, dolor eu tempor euismod, nibh libero lacinia diam, non rhoncus enim lorem nec enim. Sed a interdum augue. Quisque sed malesuada nulla"},{title:"Nullam nulla erat",descriptions:"Etiam porttitor molestie ipsum, sed rutrum nibh tempor eget. Praesent fringilla efficitur faucibus"},{title:"Nullam rutrum, dolor eu tempor euismod",descriptions:"Nullam nulla erat, aliquet non sodales nec, elementum ac risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer lobortis accumsan massa non tempus. Integer vitae gravida leo"}]}}};const $e=(0,h.Z)(Fe,[["render",Pe]]);var Le=$e;const Ve=[{path:"/",name:"main",component:xe},{path:"/form",name:"form",component:X},{path:"/about",name:"about",component:oe},{path:"/forget",name:"forget",component:pe},{path:"/dashboard",name:"dashboard",component:Ie},{path:"/mail",name:"mail",component:Le}],Ee=(0,D.p7)({history:(0,D.PO)("/formGmail/"),routes:Ve});var Te=Ee,Ye=n(65),Ge=(0,Ye.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const Re=(0,i.ri)(C);Re.use(Ge).use(Te).mount("#app"),Re.config.unwrapInjectedRef=!0}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={id:i,loaded:!1,exports:{}};return e[i](a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,a){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],a=e[c][2];for(var u=!0,r=0;r<i.length;r++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[r])}))?i.splice(r--,1):(u=!1,a<o&&(o=a));if(u){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,a,o=i[0],u=i[1],r=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in u)n.o(u,s)&&(n.m[s]=u[s]);if(r)var c=r(n)}for(t&&t(i);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},i=self["webpackChunkform_gmail"]=self["webpackChunkform_gmail"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4285)}));i=n.O(i)})();
//# sourceMappingURL=app.81232249.js.map
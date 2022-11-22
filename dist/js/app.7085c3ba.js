(function(){"use strict";var e={2512:function(e,t,n){var o=n(9242),s=n(3396),a=n(7139);const i={key:0,class:"position-reletive"},l={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"},r=(0,s._)("span",{class:"visually-hidden"},"unread messages",-1);function c(e,t,n,o,c,u){const d=(0,s.up)("router-link"),m=(0,s.up)("AppButtons"),p=(0,s.up)("NavBar"),g=(0,s.up)("SentModal"),v=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[c.isAuth?((0,s.wg)(),(0,s.j4)(p,{key:1,class:"m-3",onLogout:u.logout},null,8,["onLogout"])):((0,s.wg)(),(0,s.iD)("nav",i,[(0,s.Wm)(d,{to:"/",class:"p-2 border border-success p-2 border-opacity-10 rounded-pill me-3"},{default:(0,s.w5)((()=>[(0,s.Uk)("Main")])),_:1}),(0,s.Wm)(d,{to:"/form",class:"p-2 border border-success p-2 border-opacity-10 rounded-pill me-3"},{default:(0,s.w5)((()=>[(0,s.Uk)("Form")])),_:1}),(0,s.Wm)(d,{to:"/composition",class:"p-2 border border-success p-2 border-opacity-10 rounded-pill me-3"},{default:(0,s.w5)((()=>[(0,s.Uk)("Composition")])),_:1}),(0,s.Wm)(d,{to:"/task",class:"p-2 border border-success p-2 border-opacity-10 rounded-pill me-3"},{default:(0,s.w5)((()=>[(0,s.Uk)("Task board")])),_:1}),(0,s.Wm)(d,{to:"/about",class:"p-2 border border-success p-2 border-opacity-10 rounded-pill me-3"},{default:(0,s.w5)((()=>[(0,s.Uk)("About "),(0,s._)("span",l,[(0,s.Uk)((0,a.zw)(e.count)+" ",1),r])])),_:1}),(0,s.Wm)(m,{size:"sm",onClick:u.addFive,color:"outline-info",class:"addHover"},{default:(0,s.w5)((()=>[(0,s.Uk)("Add 5")])),_:1},8,["onClick"])])),c.modal?((0,s.wg)(),(0,s.j4)(g,{key:2,onClose:t[0]||(t[0]=e=>c.modal=!1)},{default:(0,s.w5)((()=>[(0,s.Uk)("You are logged out of your account")])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(v)],64)}n(7658);const u={class:"d-flex justify-content-between align-items-center"},d={class:"div"},m=(0,s._)("h5",{class:"mb-0 text-dark"},"Gmail",-1),p={class:"d-flex justify-content-end align-items-center"},g=(0,s._)("h6",{class:"me-3 mb-0 text-dark"},"Main",-1),v=["onClick"],f=(0,s._)("h6",{class:"me-3 mb-0 text-dark"},"Mail",-1),h=[f];function k(e,t,n,o,i,l){const r=(0,s.up)("router-link"),c=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",d,[(0,s.Wm)(r,{to:"/",class:"text-decoration-none"},{default:(0,s.w5)((()=>[m])),_:1})]),(0,s._)("div",p,[(0,s.Wm)(r,{to:"/",class:"text-decoration-none"},{default:(0,s.w5)((()=>[g])),_:1}),(0,s.Wm)(r,{to:"/mail",custom:""},{default:(0,s.w5)((({navigate:t})=>[(0,s._)("a",{onClick:t,class:(0,a.C_)(["text-decoration-none",{"router-link-active":e.$route.path.includes("mail")}])},h,10,v)])),_:1}),(0,s.Wm)(c,{color:"warning",size:"md",class:"rounded-pill text-white",onClick:l.OutLog},{default:(0,s.w5)((()=>[(0,s.Uk)("Go out")])),_:1},8,["onClick"])])])}function w(e,t,n,o,i,l){return(0,s.wg)(),(0,s.iD)("button",{class:(0,a.C_)(["btn m-1",[`btn-${n.color}`,`btn-${n.size}`]]),onClick:t[0]||(t[0]=t=>e.$emit("click"))},[(0,s.WI)(e.$slots,"default")],2)}var b={name:"AppButtons",props:{color:{type:String,default:"primary"},size:{type:String,default:"lg"},type:{type:String,default:"button"}},emits:["click"]},_=n(89);const y=(0,_.Z)(b,[["render",w]]);var x=y,C={name:"NavBar",components:{AppButtons:x},inject:["logout"],methods:{OutLog(){this.logout(),this.modal=!0}}};const A=(0,_.Z)(C,[["render",k]]);var T=A;const S={class:"m-auto bg-light border border-success rounded p-5 d-flex flex-column"};function I(e,t,n,o,a,i){return(0,s.wg)(),(0,s.iD)("div",{class:"modal d-flex p-4 backdrop",onClick:t[0]||(t[0]=t=>e.$emit("close"))},[(0,s._)("div",S,[(0,s.WI)(e.$slots,"default")])])}var D={name:"SentModal",emits:["close"]};const W=(0,_.Z)(D,[["render",I]]);var z=W,V=n(65),U={components:{NavBar:T,SentModal:z,AppButtons:x},data(){const e=localStorage.getItem("authorization");return{modal:!1,isAuth:e}},computed:{...(0,V.Se)("count",["count"])},methods:{login(){this.isAuth=!0,localStorage.setItem("authorization",this.isAuth);const e=localStorage.getItem("lastPage");this.$router.push(e||"/dashboard")},logout(){this.isAuth=!1,localStorage.setItem("lastPage",this.$route.path),this.$router.push("/"),this.modal=!0,localStorage.removeItem("authorization")},...(0,V.OI)("count",["add"]),addFive(){this.add({value:5})}},provide(){return{login:this.login,logout:this.logout,isAuth:(0,s.Fl)((()=>this.isAuth))}}};const E=(0,_.Z)(U,[["render",c]]);var $=E,B=n(2483);const F=(0,s._)("h3",{class:"mb-0 text-start"},"Form gmail",-1);function j(e,t,n,o,a,i){const l=(0,s.up)("InputLogin"),r=(0,s.up)("FormsTemplate");return(0,s.wg)(),(0,s.j4)(r,null,{header:(0,s.w5)((()=>[F])),default:(0,s.w5)((()=>[(0,s.Wm)(l)])),_:1})}const Z=e=>((0,s.dD)("data-v-cf9467f6"),e=e(),(0,s.Cn)(),e),O={class:"mb-3 d-flex flex-column"},N=Z((()=>(0,s._)("label",{for:"email",class:"text-start"},[(0,s._)("strong",null,"Email")],-1))),q={class:"mb-3 d-flex flex-column"},M=Z((()=>(0,s._)("label",{for:"password",class:"text-start"},[(0,s._)("strong",null,"Password")],-1))),H={class:"d-flex justify-content-start align-items-center"};function L(e,t,n,o,a,i){const l=(0,s.up)("Field"),r=(0,s.up)("ErrorMessage"),c=(0,s.up)("AppButtons"),u=(0,s.up)("router-link"),d=(0,s.up)("Form");return(0,s.wg)(),(0,s.j4)(d,{onSubmit:i.onSubmit,"validation-schema":i.schema},{default:(0,s.w5)((()=>[(0,s._)("div",O,[N,(0,s.Wm)(l,{modelValue:a.inputEmail,"onUpdate:modelValue":t[0]||(t[0]=e=>a.inputEmail=e),modelModifiers:{trim:!0},type:"text",id:"email",name:"email",class:"mb-1"},null,8,["modelValue"]),(0,s.Wm)(r,{name:"email",class:"dangerous text-start lh-1 fontsizeSmall"})]),(0,s._)("div",q,[M,(0,s.Wm)(l,{modelValue:a.inputPassword,"onUpdate:modelValue":t[1]||(t[1]=e=>a.inputPassword=e),modelModifiers:{trim:!0},type:"password",name:"password",id:"password",class:"mb-1",autocomplete:"true"},null,8,["modelValue"]),(0,s.Wm)(r,{name:"password",class:"dangerous text-start lh-1 fontsizeSmall"})]),(0,s._)("div",H,[(0,s.Wm)(c,{color:"success",size:"sm",class:"rounded-pill",type:"submit"},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign In")])),_:1}),(0,s.Wm)(u,{to:"/forget"},{default:(0,s.w5)((({navigate:e})=>[(0,s.Wm)(c,{color:"danger",size:"sm",class:"rounded-pill",onClick:e},{default:(0,s.w5)((()=>[(0,s.Uk)("Forgot password?")])),_:2},1032,["onClick"])])),_:1})])])),_:1},8,["onSubmit","validation-schema"])}var P=n(5708),R=n(3634),K={name:"InputLogin",components:{Form:P.l0,Field:P.gN,ErrorMessage:P.Bc,AppButtons:x},data(){return{inputEmail:"",inputPassword:""}},computed:{schema(){return R.Ry({email:R.Z_().required().email(),password:R.Z_().min(8)})}},inject:["login"],methods:{onSubmit(){this.login()}}};const J=(0,_.Z)(K,[["render",L],["__scopeId","data-v-cf9467f6"]]);var Y=J;const G={class:"container mt-5"},X={class:"d-flex justify-content-center"},Q={class:"card p-3 width55 mb-4"},ee=(0,s._)("hr",{class:"mt-1 mb-4"},null,-1);function te(e,t,n,o,a,i){return(0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("div",X,[(0,s._)("div",Q,[(0,s.WI)(e.$slots,"header",{},(()=>[(0,s.Uk)("Title")])),ee,(0,s.WI)(e.$slots,"default")])])])}var ne={name:"FormsTemplate"};const oe=(0,_.Z)(ne,[["render",te]]);var se=oe,ae={name:"FormView",components:{InputLogin:Y,FormsTemplate:se}};const ie=(0,_.Z)(ae,[["render",j]]);var le=ie;const re={class:"vuex"},ce={class:"d-flex justify-content-center align-items-center p-4"},ue={class:"mb-0 pe-3"};function de(e,t,n,o,i,l){const r=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",re,[(0,s._)("h3",null,(0,a.zw)(e.upprcaseTitle),1),(0,s._)("div",ce,[(0,s._)("h4",ue,"Counter: "+(0,a.zw)(e.count)+" ("+(0,a.zw)(e.doubleCount)+")",1),(0,s.Wm)(r,{color:"success",size:"sm",onClick:e.increment},{default:(0,s.w5)((()=>[(0,s.Uk)("Add")])),_:1},8,["onClick"]),(0,s.Wm)(r,{color:"success",size:"sm",onClick:t[0]||(t[0]=t=>e.incrementAsync({value:10}))},{default:(0,s.w5)((()=>[(0,s.Uk)("Add 10")])),_:1}),(0,s.Wm)(r,{color:"danger",size:"sm",onClick:e.reset},{default:(0,s.w5)((()=>[(0,s.Uk)("Reset")])),_:1},8,["onClick"])])])}var me={name:"AboutView",components:{AppButtons:x},computed:{...(0,V.Se)(["upprcaseTitle"]),...(0,V.Se)("count",["count","doubleCount"])},methods:{...(0,V.OI)("count",["increment","reset"]),...(0,V.nv)("count",["incrementAsync"])}};const pe=(0,_.Z)(me,[["render",de]]);var ge=pe;const ve={class:"container"},fe={class:"card width40 p-3 d-flex flex-column align-items-center justify-content-center m-auto"},he=(0,s._)("div",{class:"text-center"},[(0,s._)("h4",{class:"mb-3 p-1"},"Forget password?")],-1);function ke(e,t,n,o,a,i){const l=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",ve,[(0,s._)("div",fe,[he,(0,s.Wm)(l,{color:"danger",size:"sm",class:"rounded-pill width40",onClick:i.toLogin},{default:(0,s.w5)((()=>[(0,s.Uk)("Return to login")])),_:1},8,["onClick"]),(0,s.Wm)(l,{color:"success",size:"sm",class:"rounded-pill width40",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},{default:(0,s.w5)((()=>[(0,s.Uk)("To main")])),_:1})])])}var we={name:"Forget",components:{AppButtons:x},methods:{toLogin(){this.$router.push("/form")}}};const be=(0,_.Z)(we,[["render",ke]]);var _e=be;const ye={class:"d-flex justify-content-between align-items-center"},xe={class:"container position-relative"},Ce={key:0,class:"position-absolute top-0 start-100 middlePosition"},Ae=(0,s._)("div",null,[(0,s._)("h1",{class:"mb-4"},"Welcome to main page")],-1),Te=(0,s._)("p",null," Nam porttitor consectetur sapien vitae malesuada. Ut in lectus eget ante gravida tincidunt eu non mauris. Ut sit amet leo mi. Vestibulum convallis vulputate odio. Vivamus non risus vitae nunc fermentum dictum quis in lacus. Pellentesque non tincidunt quam, vehicula faucibus nulla. Aliquam erat volutpat. Nunc a sollicitudin ipsum, lobortis congue nulla. Pellentesque non lectus lorem. Sed imperdiet placerat lorem id consequat. Fusce at placerat massa. ",-1);function Se(e,t,n,o,a,i){const l=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",ye,[(0,s._)("div",xe,[i.isAuth?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",Ce,[(0,s.Wm)(l,{color:"danger",size:"sm",class:"",onClick:t[0]||(t[0]=t=>e.$router.push({path:"/form",query:{page:e.$route.path}}))},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign in")])),_:1})])),Ae,Te])])}var Ie={name:"Main",components:{AppButtons:x},inject:["isAuth"]};const De=(0,_.Z)(Ie,[["render",Se]]);var We=De;const ze={class:"container"},Ve={class:"bg-success p-2 bg-opacity-75 card p-3"},Ue=(0,s._)("div",{class:"d-flex justify-content-between align-items-center"},[(0,s._)("h6",{class:"text-start text-white"},"You have successfully logged in")],-1),Ee=(0,s._)("strong",null,"To mail",-1);function $e(e,t,n,o,a,i){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",ze,[(0,s._)("div",Ve,[Ue,(0,s.Wm)(l,{to:{name:"mail"}},{default:(0,s.w5)((()=>[Ee])),_:1})])])}var Be={beforeRouteLeave(e,t,n){const o=confirm("Are you sure you want to switch?");o?n():n(!1)}};const Fe=(0,_.Z)(Be,[["render",$e]]);var je=Fe;const Ze={class:"container"},Oe={class:"navbar"},Ne=(0,s._)("div",{class:"div"},[(0,s._)("h4",{class:"mb-0"},"Vue composition Api"),(0,s._)("hr",{class:"m-2"})],-1),qe={class:"navbar"},Me={class:"container with-nav"};function He(e,t,n,o,a,i){const l=(0,s.up)("router-link"),r=(0,s.up)("router-view"),c=(0,s.up)("AppButtons"),u=(0,s.up)("AppAlert");return(0,s.wg)(),(0,s.iD)("div",Ze,[(0,s._)("header",Oe,[Ne,(0,s._)("ul",qe,[(0,s._)("li",null,[(0,s.Wm)(l,{to:"/approach",class:"black addHover me-4"},{default:(0,s.w5)((()=>[(0,s.Uk)("Composition approach")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(l,{to:"/reusable",class:"black addHover me-4"},{default:(0,s.w5)((()=>[(0,s.Uk)("Reusable")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(l,{to:"/vuex",class:"black addHover me-4"},{default:(0,s.w5)((()=>[(0,s.Uk)("Vuex")])),_:1})])])]),(0,s._)("div",Me,[(0,s.Wm)(r)]),(0,s.Wm)(c,{size:"sm",color:"outline-info",class:"m-4 addHover",onClick:e.toggle},{default:(0,s.w5)((()=>[(0,s.Uk)("Show message")])),_:1},8,["onClick"]),e.alert?((0,s.wg)(),(0,s.j4)(u,{key:0,class:"width70 m-auto mb-4",title:"Composition message",color:"danger",text:"Neque quisquam est qui dolorem ipsum quia dolor!",onClose:e.close},null,8,["onClose"])):(0,s.kq)("",!0)])}const Le={class:"mx-3"},Pe={class:"alert-title"},Re={class:"m-0"};function Ke(e,t,n,o,i,l){return(0,s.wg)(),(0,s.iD)("div",{class:(0,a.C_)(["alert d-flex justify-content-center align-items-start",[`alert-${n.color}`]]),role:"alert",onClick:t[0]||(t[0]=t=>e.$emit("close"))},[(0,s._)("div",Le,[(0,s._)("h6",Pe,(0,a.zw)(n.title),1),(0,s._)("p",Re,(0,a.zw)(n.text),1)])],2)}var Je={name:"AppAlert",emits:["close"],props:{title:{type:String,default:"I am a title component"},text:{type:String,default:"I am a text component"},color:{type:String,requeired:!1,default:"primary",validator(e){return["secondary","success","danger","warning","info","light","dark"].includes(e)}}}};const Ye=(0,_.Z)(Je,[["render",Ke]]);var Ge=Ye,Xe=n(4870);function Qe(){const e=(0,Xe.iH)(!1),t=()=>e.value=!e.value,n=()=>e.value=!1;return{alert:e,close:n,toggle:t}}var et={name:"CompositionView",components:{AppAlert:Ge,AppButtons:x},setup(){return{...Qe()}}};const tt=(0,_.Z)(et,[["render",He]]);var nt=tt;const ot={class:"container"},st={class:"form-control p-3"},at=(0,s._)("h5",null,"Reusable",-1);function it(e,t,n,o,i,l){const r=(0,s.up)("AppAlert"),c=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",ot,[o.simpleAlert?((0,s.wg)(),(0,s.j4)(r,{key:0,class:"width70 m-auto mb-4",title:"Composition",color:"success",text:"Neque quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",onClose:o.closeAlert},null,8,["onClose"])):(0,s.kq)("",!0),(0,s._)("div",st,[at,(0,s.Wm)(c,{size:"sm",color:"outline-success",onClick:o.toggle},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(o.simpleAlert?"Close":"Show message"),1)])),_:1},8,["onClick"]),(0,s.Wm)(c,{size:"sm",color:"outline-success",onClick:o.navigate},{default:(0,s.w5)((()=>[(0,s.Uk)("To main")])),_:1},8,["onClick"])])])}var lt={name:"ReusableView",components:{AppAlert:Ge,AppButtons:x},setup(){const e=(0,Xe.qj)({type:"warning",title:"Reactive alert"}),{alert:t,close:n,toggle:o}=Qe(),s=(0,B.tv)(),a=()=>{s.push("/composition")};return{navigate:a,alert:e,simpleAlert:t,closeAlert:n,toggle:o,close:close}}};const rt=(0,_.Z)(lt,[["render",it]]);var ct=rt;const ut={class:"container d-flex align-items-start"},dt={class:"form-control p-4 width70 m-auto"},mt=(0,s._)("h3",null,"Vue Composition",-1),pt=(0,s._)("small",null,"data,methods,computed,watch",-1),gt=(0,s._)("hr",null,null,-1),vt={class:"d-flex justify-content-center align-items-center mb-5"},ft={class:"me-3"};function ht(e,t,n,i,l,r){const c=(0,s.up)("AppButtons"),u=(0,s.up)("VueInfo");return(0,s.wg)(),(0,s.iD)("div",ut,[(0,s.Wm)(c,{size:"sm",onClick:i.back,color:"outline-secondary"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Back")])),_:1},8,["onClick"]),(0,s._)("div",dt,[mt,pt,gt,(0,s._)("h6",null,[(0,s.Uk)(" Name: "),(0,s._)("strong",null,(0,a.zw)(i.name),1)]),(0,s._)("p",null,[(0,s.Uk)(" Version: "),(0,s._)("strong",null,(0,a.zw)(i.version)+" ("+(0,a.zw)(i.doubleVersion)+")",1)]),(0,s._)("div",vt,[(0,s._)("div",ft,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.firstName=e),onKeyup:t[1]||(t[1]=(0,o.D2)(((...e)=>i.change&&i.change(...e)),["enter"]))},null,544),[[o.nr,i.firstName]])]),(0,s.Wm)(c,{size:"sm",onClick:i.change,color:"outline-success"},{default:(0,s.w5)((()=>[(0,s.Uk)("Change")])),_:1},8,["onClick"])]),(0,s.Wm)(u,{name:i.name,version:i.version,onChangeVersion:i.changeVersion},null,8,["name","version","onChangeVersion"])])])}const kt={class:"form-control p-4"};function wt(e,t,n,o,i,l){const r=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",kt,[(0,s._)("h6",null,[(0,s.Uk)(" Title: "),(0,s._)("strong",null,(0,a.zw)(n.name),1)]),(0,s._)("p",null,[(0,s.Uk)(" Version: "),(0,s._)("strong",null,(0,a.zw)(n.version)+" ("+(0,a.zw)(o.doubleVersion)+")",1)]),(0,s.Wm)(r,{size:"sm",color:"outline-warning",onClick:o.changeToThird},{default:(0,s.w5)((()=>[(0,s.Uk)("Change to third version")])),_:1},8,["onClick"])])}var bt={name:"VueInfo",components:{AppButtons:x},props:["name","version"],emits:["change-version"],setup(e,t){function n(){t.emit("change-version",3)}return console.log(t),{changeToThird:n,doubleVersion:(0,s.Fl)((()=>2*e.version))}}};const _t=(0,_.Z)(bt,[["render",wt]]);var yt=_t,xt={name:"ApproachView",components:{AppButtons:x,VueInfo:yt},setup(){const e=(0,Xe.iH)("VueJs"),t=(0,Xe.iH)(3),n=(0,Xe.iH)(null),o=(0,Xe.iH)(""),a=(0,B.tv)(),i=()=>{a.push("/composition")},l=(0,s.Fl)((()=>2*t.value));function r(){e.value="VUE JS!",t.value=5,o.value="",console.log(o.value)}function c(e){t.value=e}return console.log("created"),(0,s.wF)((()=>{console.log("onBeforeMount")})),(0,s.bv)((()=>{console.log("onMounted")})),(0,s.Xn)((()=>{console.log("onBeforeUpdate")})),(0,s.Jd)((()=>{console.log("onBeforeUnmount")})),(0,s.ic)((()=>{console.log("onUpdated")})),(0,s.YP)([l,e],((e,t)=>{console.log("new version",e[0]),console.log("new name",e[1]),console.log("old version",t[0]),console.log("old name",t[1])})),{name:e,version:t,change:r,doubleVersion:l,textInput:n,firstName:o,changeVersion:c,back:i}}};const Ct=(0,_.Z)(xt,[["render",ht]]);var At=Ct;const Tt={class:"container"},St={class:"card p-4"};function It(e,t,n,o,i,l){return(0,s.wg)(),(0,s.iD)("div",Tt,[(0,s._)("div",St,[(0,s._)("h4",null,(0,a.zw)(o.appTitle),1)])])}var Dt={name:"VuexView",setup(){const e=(0,V.oR)();return{appTitle:e.getters.appTitle.toUpperCase()}}};const Wt=(0,_.Z)(Dt,[["render",It]]);var zt=Wt;const Vt={class:"container"},Ut={class:"navbar"},Et={class:"d-flex justify-content-start align-items-center"},$t=(0,s._)("h4",{class:"mb-0 success p-2"},"Task list",-1),Bt={class:"navbar"},Ft={class:"mb-5"},jt={class:"d-flex flex-wrap mb-3"},Zt={class:""},Ot={key:0,class:"m-2 text-start"};function Nt(e,t,n,o,i,l){const r=(0,s.up)("AppIcon"),c=(0,s.up)("router-link"),u=(0,s.up)("AppButtons"),d=(0,s.up)("FormTask");return(0,s.wg)(),(0,s.iD)("div",Vt,[(0,s._)("header",Ut,[(0,s._)("div",Et,[(0,s.Wm)(r,{name:"clipboard-list-outline",size:"mdx",color:"success"}),$t]),(0,s._)("ul",Bt,[(0,s._)("li",null,[(0,s.Wm)(c,{to:"/task",class:"black addHover me-4"},{default:(0,s.w5)((()=>[(0,s.Uk)("All tasks")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(c,{to:"/create",class:"black addHover me-4"},{default:(0,s.w5)((()=>[(0,s.Uk)("Create")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(c,{to:"/done",class:"black addHover me-4"},{default:(0,s.w5)((()=>[(0,s.Uk)("Done")])),_:1})])])]),(0,s._)("h4",Ft," Total active: "+(0,a.zw)(e.activeTasksCount)+" "+(0,a.zw)(e.activeTasksCount<2?"task":"tasks"),1),(0,s._)("div",jt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.tasks,((t,n)=>((0,s.wg)(),(0,s.iD)("div",{key:n},[(0,s.Wm)(d,{task:t,index:n,showDescription:!1},{toggle:(0,s.w5)((()=>[(0,s.Wm)(u,{size:"x",class:"rounded-pill ms-2 btnActive",color:t.active?"outline-success":"outline-danger",onClick:t=>e.$store.commit("tasks/toggleActive",n)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.active?"Active":"Inactive"),1)])),_:2},1032,["color","onClick"])])),default:(0,s.w5)((()=>[(0,s._)("div",Zt,[(0,s.Wm)(u,{size:"sm",color:"outline-success",class:"me-5",onClick:e=>l.readMore(n)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(i.expandedItemIndex===n?"hide":"Read more"),1)])),_:2},1032,["onClick"]),(0,s.Wm)(u,{size:"sm",color:"outline-info",class:"addHover",onClick:t=>e.$router.push("/task/"+n)},{default:(0,s.w5)((()=>[(0,s.Uk)("Expand ")])),_:2},1032,["onClick"])]),i.expandedItemIndex===n?((0,s.wg)(),(0,s.iD)("div",Ot,(0,a.zw)(t.description[0].toUpperCase()+t.description.slice(1)),1)):(0,s.kq)("",!0)])),_:2},1032,["task","index"])])))),128))])])}var qt=n(1812);const Mt={class:"card p-4 m-3"},Ht={class:"align-items-center d-flex justify-content-between"},Lt={class:"d-flex align-items-center"},Pt={key:0,class:"mb-0 text-start me-3"},Rt={key:1},Kt={class:"d-flex align-items-center"},Jt=(0,s._)("hr",{class:"mt-1 mb-3"},null,-1),Yt={class:"d-flex align-items-center mb-3"},Gt={key:0},Xt={class:"text-start mb-0"},Qt=(0,s._)("strong",{class:"me-3"},"Deadline:",-1),en={key:1},tn={key:0,class:"d-flex align-items-center mb-3"},nn={key:0},on={class:"text-start mb-0"},sn=(0,s._)("strong",{class:"me-3"},"Description:",-1),an={key:1};function ln(e,t,n,i,l,r){const c=(0,s.up)("AppInput"),u=(0,s.up)("EditSaveTask");return(0,s.wg)(),(0,s.iD)("div",Mt,[(0,s._)("div",Ht,[(0,s._)("div",Lt,[l.isEditingTitle?((0,s.wg)(),(0,s.iD)("div",Rt,[(0,s.Wm)(c,{modelValue:l.localTask.title,"onUpdate:modelValue":t[0]||(t[0]=e=>l.localTask.title=e),onKeypress:(0,o.D2)(r.onSave,["enter"])},null,8,["modelValue","onKeypress"])])):((0,s.wg)(),(0,s.iD)("h6",Pt,(0,a.zw)(n.task.title[0].toUpperCase()+n.task.title.slice(1)),1)),(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(u,{onOnSave:r.onSave,onClick:t[1]||(t[1]=e=>l.isEditingTitle=!0),isEditing:l.isEditingTitle},null,8,["onOnSave","isEditing"])],512),[[o.F8,n.editable]])]),(0,s._)("div",Kt,[(0,s.WI)(e.$slots,"label"),(0,s.WI)(e.$slots,"toggle")])]),Jt,(0,s._)("div",Yt,[l.isEditingDate?((0,s.wg)(),(0,s.iD)("div",en,[(0,s.Wm)(c,{modelValue:l.localTask.date,"onUpdate:modelValue":t[2]||(t[2]=e=>l.localTask.date=e),onKeypress:(0,o.D2)(r.onSave,["enter"])},null,8,["modelValue","onKeypress"])])):((0,s.wg)(),(0,s.iD)("div",Gt,[(0,s._)("p",Xt,[Qt,(0,s.Uk)(" "+(0,a.zw)(n.task.date),1)])])),(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(u,{onOnSave:r.onSave,onClick:t[3]||(t[3]=e=>l.isEditingDate=!0),isEditing:l.isEditingDate},null,8,["onOnSave","isEditing"])],512),[[o.F8,n.editable]])]),n.showDescription?((0,s.wg)(),(0,s.iD)("div",tn,[l.isEditingDescrip?((0,s.wg)(),(0,s.iD)("div",an,[(0,s.Wm)(c,{modelValue:l.localTask.description,"onUpdate:modelValue":t[4]||(t[4]=e=>l.localTask.description=e),onKeypress:(0,o.D2)(r.onSave,["enter"])},null,8,["modelValue","onKeypress"])])):((0,s.wg)(),(0,s.iD)("div",nn,[(0,s._)("p",on,[sn,(0,s.Uk)(" "+(0,a.zw)(n.task.description),1)])])),(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(u,{onOnSave:r.onSave,onClick:t[5]||(t[5]=e=>l.isEditingDescrip=!0),isEditing:l.isEditingDescrip},null,8,["onOnSave","isEditing"])],512),[[o.F8,n.editable]])])):(0,s.kq)("",!0),(0,s.WI)(e.$slots,"default")])}const rn=["type","id","name","value"];function cn(e,t,n,o,i,l){return(0,s.wg)(),(0,s.iD)("input",{type:n.type,class:(0,a.C_)(["m-1",n.size]),id:n.id,name:n.name,value:n.modelValue,onInput:t[0]||(t[0]=(...e)=>l.updateInput&&l.updateInput(...e))},null,42,rn)}var un={name:"AppInput",props:{modelValue:{type:String,default:""},size:{type:String,default:"form-control"},type:{type:String,default:"text"},id:{type:String},name:{type:String}},emits:["update:modelValue"],methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const dn=(0,_.Z)(un,[["render",cn],["__scopeId","data-v-6fbd80b3"]]);var mn=dn;function pn(e,t,n,o,a,i){const l=(0,s.up)("AppIcon"),r=(0,s.up)("AppButtons");return n.isEditing?((0,s.wg)(),(0,s.j4)(r,{key:1,size:"sm",color:"btn-outline-secondary",onClick:t[1]||(t[1]=t=>e.$emit("onSave"))},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"checkbox-marked-circle-outline",size:"sm",color:"success"})])),_:1})):((0,s.wg)(),(0,s.j4)(r,{key:0,size:"sm",color:"btn-outline-secondary",onClick:t[0]||(t[0]=t=>e.$emit("click"))},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{name:"pencil",size:"sm",color:"success"})])),_:1}))}var gn={name:"EditSaveTask",components:{AppIcon:qt.Z,AppButtons:x},props:{isEditing:{type:Boolean,default:!1}},emits:["onSave","click"]};const vn=(0,_.Z)(gn,[["render",pn]]);var fn=vn,hn={name:"FormTask",components:{AppButtons:x,AppIcon:qt.Z,AppInput:mn,EditSaveTask:fn},data(){return{isEditingTitle:!1,isEditingDate:!1,isEditingDescrip:!1,localTask:{...this.task}}},props:{task:{type:Object,default:null},index:{type:[String,Number]},editable:{type:Boolean},showDescription:{type:Boolean}},methods:{onSave(){this.$store.commit("tasks/saveTask",{index:this.$route.params.index,value:this.localTask}),this.isEditingTitle=!1,this.isEditingDescrip=!1;const e=new Date;e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),new Date(this.localTask.date)>e?(this.$toast.success("The data edited successfully"),this.isEditingDate=!1):this.$toast.error("Enter a valid date")}}};const kn=(0,_.Z)(hn,[["render",ln]]);var wn=kn,bn={name:"TaskView",components:{AppIcon:qt.Z,AppButtons:x,FormTask:wn},data(){return{expandedItemIndex:null}},computed:{...(0,V.rn)({tasks:e=>e.tasks.collection}),...(0,V.Se)("tasks",["activeTasksCount"])},methods:{readMore(e){this.expandedItemIndex===e?this.expandedItemIndex=null:this.expandedItemIndex=e}}};const _n=(0,_.Z)(bn,[["render",Nt]]);var yn=_n;const xn=(0,s._)("h3",{class:"mb-0 text-start"},"Create a new task",-1),Cn={class:"mb-2 text-start"},An=(0,s._)("label",{for:"title",class:"mb-0 ms-2"},[(0,s._)("strong",null,"Title task")],-1),Tn={class:"div"},Sn=(0,s._)("p",{class:"dangerous fw-lighter ms-2"},"Title is too short",-1),In=[Sn],Dn=(0,s._)("p",{class:"dangerous fw-lighter ms-2"}," Title is too long, write shorter please ",-1),Wn=[Dn],zn={class:"mb-2 text-start"},Vn=(0,s._)("label",{for:"date",class:"mb-0 ms-2"},[(0,s._)("strong",null,"Deadline date")],-1),Un={class:"div"},En=(0,s._)("p",{class:"dangerous fw-lighter ms-2"},"Enter date!",-1),$n=[En],Bn={class:"mb-2 text-start d-flex flex-column"},Fn=(0,s._)("label",{for:"description",class:"mb-0 ms-2"},[(0,s._)("strong",null,"Description")],-1),jn={class:"d-flex align-items-start"};function Zn(e,t,n,a,i,l){const r=(0,s.up)("AppInput"),c=(0,s.up)("AppButtons"),u=(0,s.up)("FormsTemplate");return(0,s.wg)(),(0,s.j4)(u,null,{header:(0,s.w5)((()=>[xn])),default:(0,s.w5)((()=>[(0,s._)("form",Cn,[An,(0,s.Wm)(r,{modelValue:i.title,"onUpdate:modelValue":t[0]||(t[0]=e=>i.title=e),modelModifiers:{trim:!0},name:"title",id:"title"},null,8,["modelValue"]),(0,s._)("div",Tn,[(0,s.wy)((0,s._)("div",null,In,512),[[o.F8,i.title.length<3&&0!==i.title.length]]),(0,s.wy)((0,s._)("div",null,Wn,512),[[o.F8,i.title.length>40]])])]),(0,s._)("form",zn,[Vn,(0,s.Wm)(r,{modelValue:i.date,"onUpdate:modelValue":t[1]||(t[1]=e=>i.date=e),type:"date",name:"date",id:"date"},null,8,["modelValue"]),(0,s._)("div",Un,[(0,s.wy)((0,s._)("div",null,$n,512),[[o.F8,!i.date&&i.isVisible]])])]),(0,s._)("form",Bn,[Fn,(0,s.wy)((0,s._)("textarea",{id:"description",name:"description","onUpdate:modelValue":t[2]||(t[2]=e=>i.description=e),rows:"4",cols:"50",class:"textarea",onKeypress:t[3]||(t[3]=(0,o.D2)(((...e)=>l.createFormTask&&l.createFormTask(...e)),["enter"]))},null,544),[[o.nr,i.description,void 0,{trim:!0}]])]),(0,s._)("div",jn,[(0,s.Wm)(c,{type:"button",size:"sm",color:"outline-success",class:"m-2 addHover",disabled:i.title.length<3||!i.date||i.description.length<3,onClick:l.createFormTask},{default:(0,s.w5)((()=>[(0,s.Uk)("Create")])),_:1},8,["disabled","onClick"]),(0,s.Wm)(c,{type:"button",size:"sm",color:"outline-danger",class:"m-2",onClick:t[4]||(t[4]=t=>e.$router.push("/task"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Close")])),_:1})])])),_:1})}var On={name:"CreateView",components:{AppInput:mn,FormsTemplate:se,AppButtons:x},data(){return{title:"",date:"",description:"",isVisible:!1}},methods:{createFormTask(){if(!isNaN(this.date))return void(this.isVisible=!0);this.isVisible=!1,this.$store.commit("tasks/addTask",{title:this.title,date:this.date,description:this.description});const e=new Date;if(e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),!(new Date(this.date)>=e))return this.date="",void this.$toast.error("Enter a valid date");this.$toast.success("The data edited successfully"),this.$router.push("/task")}}};const Nn=(0,_.Z)(On,[["render",Zn]]);var qn=Nn;const Mn={class:"container mt-2"},Hn={class:"d-flex align-items-center justify-content-between"},Ln={class:"d-flex m-auto align-items-center"},Pn={class:"mb-0 p-2"};function Rn(e,t,n,o,i,l){const r=(0,s.up)("AppIcon"),c=(0,s.up)("AppButtons");return(0,s.wg)(),(0,s.iD)("div",Mn,[(0,s._)("div",Hn,[(0,s.Wm)(c,{size:"sm",color:"btn-outline-secondary",class:"m-2",onClick:t[0]||(t[0]=t=>e.$router.push("/task"))},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{name:"keyboard-return",size:"mdx",color:"success"})])),_:1}),(0,s._)("div",Ln,[(0,s.Wm)(r,{name:"check",size:"md",color:"success"}),(0,s._)("h5",Pn,"Done: "+(0,a.zw)(n.number)+" tasks",1)])])])}var Kn={name:"DoneTaskView",components:{AppIcon:qt.Z,AppButtons:x},props:{number:{type:Number,default:0}}};const Jn=(0,_.Z)(Kn,[["render",Rn]]);var Yn=Jn;const Gn=e=>((0,s.dD)("data-v-07414dd7"),e=e(),(0,s.Cn)(),e),Xn={class:"container"},Qn={key:0},eo={class:"m-4"},to={class:"d-flex align-items-start"},no=Gn((()=>(0,s._)("p",{class:"mb-0"},"Status:",-1))),oo={key:0,class:"btnActive rounded-pill border border-success m-2"},so=Gn((()=>(0,s._)("span",{class:"success"},"Active",-1))),ao=[so],io={key:1,class:"btnActive rounded-pill border border-danger m-2"},lo=Gn((()=>(0,s._)("span",{class:"dangerous"},"Inactive",-1))),ro=[lo],co={class:""},uo={key:1},mo=Gn((()=>(0,s._)("h6",{class:"dangerous"},"No task",-1))),po=[mo];function go(e,t,n,o,i,l){const r=(0,s.up)("AppIcon"),c=(0,s.up)("AppButtons"),u=(0,s.up)("FormTask");return(0,s.wg)(),(0,s.iD)("div",Xn,[e.tasks[e.$route.params.index]?((0,s.wg)(),(0,s.iD)("div",Qn,[(0,s._)("h5",eo,"The task "+(0,a.zw)(e.$route.params.index),1),(0,s._)("div",to,[(0,s.Wm)(c,{size:"sm",color:"btn-outline-secondary",class:"m-2",onClick:t[0]||(t[0]=t=>e.$router.push("/task"))},{default:(0,s.w5)((()=>[(0,s.Wm)(r,{name:"keyboard-return",size:"mdx",color:"success"})])),_:1}),(0,s.Wm)(u,{task:e.tasks[e.$route.params.index],index:e.$route.params.index,editable:!0,showDescription:!0,class:"m-auto"},{label:(0,s.w5)((()=>[no])),toggle:(0,s.w5)((()=>[e.tasks[e.$route.params.index].active?((0,s.wg)(),(0,s.iD)("div",oo,ao)):((0,s.wg)(),(0,s.iD)("div",io,ro))])),default:(0,s.w5)((()=>[(0,s._)("div",co,[(0,s.Wm)(c,{size:"xs",class:"rounded-pill ms-2",color:"outline-success",onClick:t[1]||(t[1]=t=>e.$store.commit("tasks/toggleActive",e.$route.params.index))},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.tasks[e.$route.params.index].active?"Cancel":"Take to work"),1)])),_:1}),(0,s.Wm)(c,{size:"xs",class:"rounded-pill ms-2",color:"danger",onClick:t[2]||(t[2]=t=>l.deleteTask(e.$route.params.index))},{default:(0,s.w5)((()=>[(0,s.Uk)("Delete")])),_:1})])])),_:1},8,["task","index"])])])):((0,s.wg)(),(0,s.iD)("div",uo,po))])}var vo={name:"LookTaskView",components:{FormTask:wn,AppButtons:x,AppIcon:qt.Z,EditSaveTask:fn},data(){return{editingTaskId:null,editingValue:null}},computed:{...(0,V.rn)({tasks:e=>e.tasks.collection})},methods:{deleteTask(e){this.$router.push("/task"),this.$store.commit("tasks/deleteTask",e)},async onSaveItem(){try{await this.$store.dispatch("resumeItems/editItem",{id:this.editingTaskId,value:this.editingValue}),this.editingTaskId=null,this.editingValue=null,this.$toast.success("Edited successfuly")}catch(e){this.$toast.warning("Something went wrong")}}}};const fo=(0,_.Z)(vo,[["render",go],["__scopeId","data-v-07414dd7"]]);var ho=fo;const ko={class:"container"},wo=(0,s._)("h4",{class:"success"},"Oops, there is no such page....",-1),bo=[wo];function _o(e,t,n,o,a,i){return(0,s.wg)(),(0,s.iD)("div",ko,bo)}var yo={name:"NotFound",components:{}};const xo=(0,_.Z)(yo,[["render",_o]]);var Co=xo;const Ao=()=>n.e(520).then(n.bind(n,8520)),To=[{path:"/",name:"main",component:We},{path:"/form",name:"form",component:le},{path:"/about",name:"about",component:ge},{path:"/forget",name:"forget",component:_e,meta:{cantEnter:!0}},{path:"/dashboard",name:"dashboard",component:je,beforeEnter(){console.log("beforeEnter")}},{path:"/mail/:mailId?",name:"mail",component:Ao},{path:"/composition",name:"composition",component:nt},{path:"/reusable",name:"reusable",component:ct},{path:"/approach",name:"approach",component:At},{path:"/vuex",name:"vuex",component:zt},{path:"/task/:index",name:"LookTaskView",component:ho},{path:"/task",name:"task",component:yn},{path:"/create",name:"create",component:qn},{path:"/done",name:"done",component:Yn},{path:"/:notFound(.*)",component:Co}],So=(0,B.p7)({history:(0,B.r5)("/formGmail/"),routes:To});var Io=So,Do={namespaced:!0,state(){return{count:0}},getters:{count(e){return e.count>150?0:e.count},doubleCount(e,t,n,o){return 2*t.count}},mutations:{increment(e){e.count++},reset(e){e.count=0},add(e,t){e.count+=t.value}},actions:{incrementAsync(e,t){setTimeout((()=>{e.commit("add",t)}),150)}}},Wo={changeTitle(e,t){e.appTitle=t}},zo={changeTitle(e,t){e("changeTitle",t)}},Vo={state(){return{title:"This is Vuex + Composition"}},getters:{appTitle(e){return e.title.trim()}}},Uo={namespaced:!0,state(){const e=JSON.parse(localStorage.getItem("saveTask"))||[];return{collection:e}},getters:{activeTasksCount(e){const t=e.collection.filter((e=>e.active));return t.length}},mutations:{addTask(e,t){e.collection.push({...t,active:!1}),localStorage.setItem("saveTask",JSON.stringify(e.collection))},toggleActive(e,t){e.collection[t].active=!e.collection[t].active,localStorage.setItem("saveTask",JSON.stringify(e.collection))},deleteTask(e,t){e.collection.splice(t,1),localStorage.setItem("saveTask",JSON.stringify(e.collection))},saveTask(e,t){e.collection[t.index]=t.value,localStorage.setItem("saveTask",JSON.stringify(e.collection))}}},Eo=(0,V.MT)({plugins:[(0,V.hu)()],modules:{count:Do,compositions:Vo,tasks:Uo},state(){return{appTitle:"Vuex working"}},mutations:Wo,actions:zo,getters:{upprcaseTitle(e){return e.appTitle.toUpperCase()}}}),$o=n(6215),Bo=n.n($o);const Fo=(0,o.ri)($);Fo.use(Eo).use(Io).use(Bo()).mount("#app"),Fo.config.unwrapInjectedRef=!0},1812:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(3396),s=n(7139);function a(e,t,n,a,i,l){return(0,o.wg)(),(0,o.iD)("i",{class:(0,s.C_)([n.size,"mdi",`mdi-${n.name}`,n.color])},null,2)}var i={name:"AppIcon",props:{name:{type:String,default:"close-octagon-outline"},color:{type:String,default:"black"},size:{type:String,default:"md"}}},l=n(89);const r=(0,l.Z)(i,[["render",a]]);var c=r}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],s=e[u][1],a=e[u][2];for(var l=!0,r=0;r<o.length;r++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".1ce76b40.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".cc8a1d97.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="form-gmail:";n.l=function(o,s,a,i){if(e[o])e[o].push(s);else{var l,r;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(r=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=o),e[o]=[s];var m=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var s=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),r&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/formGmail/"}(),function(){var e=function(e,t,n,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var a=function(a){if(s.onerror=s.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=i,r.request=l,s.parentNode.removeChild(s),o(r)}};return s.onerror=s.onload=a,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var s=n[o],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===e||a===t))return s}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){s=i[o],a=s.getAttribute("data-href");if(a===e||a===t)return s}},o=function(o){return new Promise((function(s,a){var i=n.miniCssF(o),l=n.p+i;if(t(i,l))return s();e(o,l,s,a)}))},s={143:0};n.f.miniCss=function(e,t){var n={520:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=o(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)o.push(s[2]);else{var a=new Promise((function(n,o){s=e[t]=[n,o]}));o.push(s[2]=a);var i=n.p+n.u(t),l=new Error,r=function(o){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,s[1](l)}};n.l(i,r,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,a,i=o[0],l=o[1],r=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(r)var u=r(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkform_gmail"]=self["webpackChunkform_gmail"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2512)}));o=n.O(o)})();
//# sourceMappingURL=app.7085c3ba.js.map
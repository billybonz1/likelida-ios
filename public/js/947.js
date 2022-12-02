"use strict";(globalThis["webpackChunklikelida_project"]=globalThis["webpackChunklikelida_project"]||[]).push([[947],{3642:(s,e,t)=>{t.d(e,{f:()=>o});var a=t(1569),r=t(2136);const o={data(){return{store:null,msg:{email:!1,password:!1},reg:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}},beforeMount(){this.store=(0,r.J)(),this.isLogin()},methods:{validateEmail(){this.reg.test(this.email)?this.msg.email="":this.msg.email="Please enter a valid email address"},validatePassword(){this.password!==this.confirmPassword?this.msg.password="Passwords do not match":this.msg.password=""},async isLogin(){const s=await a.server.post("isLogin",{},{headers:{"Access-Control-Allow-Origin":"*"}});s.data.isLogin&&(this.store.setCurrentUser(s.data.user),this.$router.push("recipes"))}}}},2136:(s,e,t)=>{t.d(e,{J:()=>o});var a=t(3746),r=t(1569);const o=(0,a.Q_)("posts",{state:()=>({posts:null,ingredients:null,postSingle:null,currentUser:null}),getters:{getPosts:s=>(console.log("state.posts >>"),console.log(s.posts),s.posts),getIngredients:s=>(console.log("state.ingredients >>"),console.log(s.ingredients),s.ingredients),getPostSingle:s=>(console.log("state.postSingle >>"),console.log(s.postSingle),s.postSingle),getCurrentUser:s=>s.currentUser},actions:{setCurrentUser(s){this.currentUser=s},async loadAllPosts(){try{const s=await r.server.get("posts");return this.posts=s.data,!0}catch(s){if(s)throw s}},async loadPosts(s){try{const e=await r.server.get("posts-list",{params:{page:s}});return this.posts=e.data,!0}catch(e){if(e)throw e}},async loadAllIngredients(){try{const s=await r.server.get("ingredients");return this.ingredients=s.data,!0}catch(s){if(s)throw s}},async loadSearchByIngredients(s){try{const e=await r.server.get("search-by-ingredients?ids="+s);return this.ingredients=e.data.ingredients,this.posts=e.data.posts,!0}catch(e){if(e)throw e}},async loadSinglePost(s){try{const e=await r.server.get("posts/"+s);return this.postSingle=e.data.data,!0}catch(e){if(e)throw e}}},persist:!0})},7947:(s,e,t)=>{t.r(e),t.d(e,{default:()=>E});var a=t(9835),r=t(6970);const o={class:"mx-auto max-w-4xl mb-5 relative",style:{padding:"20px"}},i=(0,a.Uk)(" ← "),l=(0,a._)("h5",{class:"mt-5",style:{"margin-bottom":"20px"}},"Register with Email",-1),n={class:"row items-center all-pointer-events"},d=(0,a.Uk)(" Email "),m=(0,a.Uk)("Email address"),c={class:"row items-center all-pointer-events"},g=(0,a.Uk)(" Password "),p=(0,a.Uk)("Password"),u={class:"row items-center all-pointer-events"},w=(0,a.Uk)(" Confirm Password "),h=(0,a.Uk)("Password"),f=(0,a.Uk)(" REGISTER "),b=(0,a.Uk)(" Already have an account? Please login ");function v(s,e,t,v,y,P){const k=(0,a.up)("q-btn"),U=(0,a.up)("q-icon"),_=(0,a.up)("q-tooltip"),x=(0,a.up)("q-input");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(k,{flat:"",to:"/",style:{cursor:"pointer"}},{default:(0,a.w5)((()=>[i])),_:1}),l,(0,a._)("div",null,[""!==y.message?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,r.C_)([{error:this.error,success:!this.error},"message"])},(0,r.zw)(y.message),3)):(0,a.kq)("",!0),(0,a.Wm)(x,{error:!!s.msg.email,"error-message":s.msg.email,white:"",rounded:"",outlined:"",borderless:"",modelValue:y.email,"onUpdate:modelValue":e[0]||(e[0]=s=>y.email=s),onBlur:s.validateEmail,"label-slot":"",clearable:"",class:"text-white rounded-borders"},{label:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(U,{class:"q-mr-xs",size:"24px",name:"mail"}),d,(0,a.Wm)(_,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,a.w5)((()=>[m])),_:1})])])),_:1},8,["error","error-message","modelValue","onBlur"]),(0,a.Wm)(x,{rounded:"",outlined:"",modelValue:y.password,"onUpdate:modelValue":e[2]||(e[2]=s=>y.password=s),type:y.isPwd?"password":"text",onKeyup:e[3]||(e[3]=e=>s.validatePassword()),onBlur:e[4]||(e[4]=e=>s.validatePassword()),"label-slot":"",clearable:"",class:"mt-5 q-field--with-bottom"},{label:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Wm)(U,{class:"q-mr-xs",size:"24px",name:"password"}),g,(0,a.Wm)(_,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,a.w5)((()=>[p])),_:1})])])),append:(0,a.w5)((()=>[(0,a.Wm)(U,{name:y.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[1]||(e[1]=s=>y.isPwd=!y.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type"]),(0,a.Wm)(x,{error:!!s.msg.password,"error-message":s.msg.password,rounded:"",outlined:"",modelValue:y.confirmPassword,"onUpdate:modelValue":e[5]||(e[5]=s=>y.confirmPassword=s),onKeyup:e[6]||(e[6]=e=>s.validatePassword()),onBlur:e[7]||(e[7]=e=>s.validatePassword()),type:y.isPwd?"password":"text","label-slot":"",clearable:"",class:"mt-5"},{label:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a.Wm)(U,{class:"q-mr-xs",size:"24px",name:"password"}),w,(0,a.Wm)(_,{class:"bg-grey-8",anchor:"top left",self:"bottom left",offset:[0,8]},{default:(0,a.w5)((()=>[h])),_:1})])])),_:1},8,["error","error-message","modelValue","type"]),(0,a.Wm)(k,{loading:y.loading,onClick:e[8]||(e[8]=s=>P.register()),disable:P.disabledButton,class:"bg-primary",style:{color:"#fff",display:"block",margin:"0 auto"}},{default:(0,a.w5)((()=>[f])),_:1},8,["loading","disable"])]),(0,a.Wm)(k,{flat:"",to:"/login"},{default:(0,a.w5)((()=>[b])),_:1})])}var y=t(499),P=t(1569),k=t(3642),U=t(2136);const _={mixins:[k.f],mounted(){this.store=(0,U.J)()},data(){return{password:(0,y.iH)(""),confirmPassword:(0,y.iH)(""),isPwd:(0,y.iH)(!0),email:(0,y.iH)(""),store:null,message:"",error:!1,loading:!1}},computed:{disabledButton(){return!(""===this.msg.password&&""===this.msg.email)}},methods:{async register(){this.error=!1,this.message="";const s={email:this.email,password:this.password};this.loading=!0;const e=await P.server.post("register",s,{headers:{"Access-Control-Allow-Origin":"*"}});this.loading=!1,e.data&&(this.error=!e.data.status,e.data.error?"validation.unique"===e.data.error&&(this.message="User with current email already exists"):this.message=e.data.message),console.log(this.error,this.message)}}};var x=t(1639),W=t(9379),C=t(6611),q=t(2857),A=t(6858),S=t(8149),V=t(9984),B=t.n(V);const Z=(0,x.Z)(_,[["render",v]]),E=Z;B()(_,"components",{QBtn:W.Z,QInput:C.Z,QIcon:q.Z,QTooltip:A.Z,QField:S.Z})}}]);
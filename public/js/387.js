"use strict";(globalThis["webpackChunklikelida_project"]=globalThis["webpackChunklikelida_project"]||[]).push([[387],{2136:(t,s,e)=>{e.d(s,{J:()=>l});var a=e(3746),r=e(1569);const l=(0,a.Q_)("posts",{state:()=>({posts:null,ingredients:null,postSingle:null,currentUser:null}),getters:{getPosts:t=>(console.log("state.posts >>"),console.log(t.posts),t.posts),getIngredients:t=>(console.log("state.ingredients >>"),console.log(t.ingredients),t.ingredients),getPostSingle:t=>(console.log("state.postSingle >>"),console.log(t.postSingle),t.postSingle),getCurrentUser:t=>t.currentUser},actions:{setCurrentUser(t){this.currentUser=t},async loadAllPosts(){try{const t=await r.server.get("posts");return this.posts=t.data,!0}catch(t){if(t)throw t}},async loadPosts(t){try{const s=await r.server.get("posts-list",{params:{page:t}});return this.posts=s.data,!0}catch(s){if(s)throw s}},async loadAllIngredients(){try{const t=await r.server.get("ingredients");return this.ingredients=t.data,!0}catch(t){if(t)throw t}},async loadSearchByIngredients(t){try{const s=await r.server.get("search-by-ingredients?ids="+t);return this.ingredients=s.data.ingredients,this.posts=s.data.posts,!0}catch(s){if(s)throw s}},async loadSinglePost(t){try{const s=await r.server.get("posts/"+t);return this.postSingle=s.data.data,!0}catch(s){if(s)throw s}}},persist:!0})},6387:(t,s,e)=>{e.r(s),e.d(s,{default:()=>W});var a=e(9835),r=e(6970),l=e(499),o=e(2136);const n={class:"q-pa-md"},i={class:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"},c={class:"text-yellow"},d=(0,a._)("div",{class:"q-mt-md"},"Loading...",-1),u={class:"text-bold lg:text-lg text-sm mt-2"},g={class:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"},p={class:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"},m={class:"row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"},h={methods:{onClickButton(t){this.$router.push({name:"recipesId",params:{id:t}})}}},A=Object.assign(h,{__name:"GallPage",setup(t){const s=(0,o.J)(),e=(0,l.iH)([]),h=(0,l.iH)(1);let A=1;function w(){return A++,"r-40-"+A%4}return(0,a.bv)((async()=>{await s.loadAllPosts(),s.getPosts&&(e.value=s.getPosts)})),(t,s)=>{const l=(0,a.up)("q-spinner-ios"),o=(0,a.up)("q-img"),A=(0,a.up)("q-bnt"),f=(0,a.up)("q-carousel-slide"),v=(0,a.up)("q-carousel");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(v,{modelValue:h.value,"onUpdate:modelValue":s[0]||(s[0]=t=>h.value=t),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary",padding:"",arrows:"",height:"300px",class:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{name:1,class:"column no-wrap"},{default:(0,a.w5)((()=>[(0,a._)("div",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.value.breakfast,(s=>((0,a.wg)(),(0,a.iD)("div",{key:s.id},[(0,a.Wm)(A,{onClick:e=>t.onClickButton(s.id)},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{alt:s.name_ru,src:s.image,fit:"fill","placeholder-src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==",class:(0,r.C_)(["cursor-pointer",w()]),onClick:e=>t.onClickButton(s.id)},{loading:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Wm)(l),d])])),_:2},1032,["alt","src","class","onClick"]),(0,a._)("div",u,(0,r.zw)(s.name_ru),1)])),_:2},1032,["onClick"])])))),128))])])),_:1}),(0,a.Wm)(f,{name:2,class:"column no-wrap"},{default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a.Wm)(o,{class:"rounded-borders col-6 full-height",src:"https://cdn.quasar.dev/img/parallax2.jpg"}),(0,a.Wm)(o,{class:"rounded-borders col-6 full-height",src:"https://cdn.quasar.dev/img/quasar.jpg"})])])),_:1}),(0,a.Wm)(f,{name:3,class:"column no-wrap"},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a.Wm)(o,{class:"rounded-borders col-6 full-height",src:"https://cdn.quasar.dev/img/cat.jpg"}),(0,a.Wm)(o,{class:"rounded-borders col-6 full-height",src:"https://cdn.quasar.dev/img/linux-avatar.png"})])])),_:1}),(0,a.Wm)(f,{name:4,class:"column no-wrap"},{default:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a.Wm)(o,{class:"rounded-borders col-6 full-height",src:"https://cdn.quasar.dev/img/material.png"}),(0,a.Wm)(o,{class:"rounded-borders col-6 full-height",src:"https://cdn.quasar.dev/img/donuts.png"})])])),_:1})])),_:1},8,["modelValue"])])}}});var w=e(960),f=e(1694),v=e(335),q=e(8359),y=e(9984),E=e.n(y);const b=A,W=b;E()(A,"components",{QCarousel:w.Z,QCarouselSlide:f.Z,QImg:v.Z,QSpinnerIos:q.Z})}}]);
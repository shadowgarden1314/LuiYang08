import{a7 as $,d as P,T as R,a2 as b,u as q,B as z,Q as y,e as F,a8 as V,a9 as B,aa as M,_ as N,f as T,o as U,c as A,g as D,l as v}from"./index_prod-d64bafc2.js";const E=({appId:s,appKey:u,avatar:h,placeholder:f,visitor:e,lang:d,meta:o,requiredFields:_,avatarForce:t,path:n})=>{new Valine({el:"#vcomments",appId:s,appKey:u,avatar:h,placeholder:f,visitor:e,lang:d,meta:o??[],requiredFields:_??[],avatarForce:t,path:$(n)})},k={en:"en",cn:"zh"},K=P({name:"ObComment",props:{title:{type:String,default:""},body:{type:String,default:""},uid:{type:String,default:""}},components:{Title:R},setup(s){const u=b(s).title,h=b(s).body,f=b(s).uid,e=q(),d=z();let o;const _=(t,n,c)=>{const x=!t||t===""?"":t,S=!n||n===""?window.location.href:`${window.location.href} 
 ${n}`,I=e.themeConfig.plugins.gitalk.id==="pathname"?window.location.pathname:c;if(d.setCache({title:t,body:n,uid:c}),!!e.configReady){if(e.themeConfig.plugins.gitalk.enable){const i=e.themeConfig.plugins.gitalk.proxy===""?"https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token":e.themeConfig.plugins.gitalk.proxy,{clientID:a,clientSecret:l,repo:p,owner:g,admin:r,language:m}=e.themeConfig.plugins.gitalk;V({clientID:a,clientSecret:l,repo:p,owner:g,admin:r,language:m,uid:I,title:x,body:S,proxy:i})}else if(e.themeConfig.plugins.valine.enable){const{app_id:i,app_key:a,avatar:l,placeholder:p,visitor:g,lang:r,meta:m,requiredFields:w,avatarForce:C}=e.themeConfig.plugins.valine;E({appId:i,appKey:a,avatar:l,placeholder:p,visitor:g,lang:r,meta:m,requiredFields:w,avatarForce:C,path:window.location.pathname})}else if(e.themeConfig.plugins.twikoo.enable){const{envId:i,region:a,lang:l}=e.themeConfig.plugins.twikoo;B({envId:i,region:a,lang:l,path:window.location.pathname})}else if(e.themeConfig.plugins.waline.enable){const{serverURL:i,login:a,reaction:l,meta:p,requiredMeta:g,commentSorting:r,wordLimit:m,imageUploader:w,pageSize:C}=e.themeConfig.plugins.waline;o=M({serverURL:i,lang:k[e.locale??"en"],login:a,reaction:l,meta:p,requiredMeta:g,commentSorting:r,wordLimit:m,imageUploader:w,pageSize:C})}}};y(()=>e.configReady,(t,n)=>{if(!n&&t){const c=d.cachePost;_(c.title,c.body,c.uid)}}),y(()=>e.locale,(t,n)=>{o&&t!==void 0&&t!==n&&o.update({lang:k[t]})}),F(()=>{_(u.value,h.value,f.value)})}});const O={class:"bg-ob-deep-800 p-4 mt-8 lg:px-14 lg:py-10 rounded-2xl shadow-xl mb-8 lg:mb-0"},Q=v("div",{id:"gitalk-container"},null,-1),j=v("div",{id:"vcomments"},null,-1),G=v("div",{id:"tcomment"},null,-1),H=v("div",{id:"waline"},null,-1);function J(s,u,h,f,e,d){const o=T("Title");return U(),A("div",O,[D(o,{title:"titles.comment",paddings:"pb-2 pt-0"},null,8,["title"]),Q,j,G,H])}const W=N(K,[["render",J]]);export{W as C};

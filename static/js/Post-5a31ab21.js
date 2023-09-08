import{P as z}from"./PostStats-47a7531b.js";import{d as D,C as L,S as R,X as E,a2 as I,O as N,Y as O,E as q,i as F,p as J,A as U,V as X,b as Y,r as P,a3 as j,B as G,$ as K,j as g,a4 as Q,n as W,_ as Z,g as p,v as H,o as s,c as n,q as o,l as T,t as l,F as x,s as tt,R as M,w as V,k as et,h as i,z as A,J as ot}from"./index_prod-00ee5e98.js";import{T as st,u as nt}from"./useLightBox-030ab4f9.js";import{C as it}from"./Comment-1ba49d9f.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const at=D({name:"ObPost",components:{Sidebar:L,Toc:st,Comment:it,SubTitle:R,Article:E,Profile:I,SvgIcon:N,PostStats:z},setup(){const t=O(),r=q(),h=F(),f=J(),m=U(),y=X(),{t:a}=Y(),c=P(new j),u=P(!0),d=P(),{enabledCommentPlugin:b}=G(),{initializeLightBox:C}=nt(),v=async()=>{var S,$;u.value=!0,c.value=new j,window.scrollTo({top:0});let e=String(m.params.slug);e=e.indexOf(",")?e.replace(/[,]+/g,"/"):e,await r.fetchPost(e).then(B=>{c.value=B,t.setTitle(c.value.title),f.setHeaderImage(B.cover),u.value=!1}),h.hexoConfig.writing.highlight.enable&&console.error("[Aurora Config Error]: Please turn off [Hightlightjs] and enable [Prismjs] instead. "),h.hexoConfig.writing.prismjs.preprocess&&console.error("[Aurora Config Error]: Please set Hexo config's prismjs' [preprocess] property to false! "),await W(),C(),(S=d.value)==null||S.getCommentCount(),($=d.value)==null||$.getPostView(),Prism.highlightAll()};K(()=>m.params,e=>{e.slug&&m.fullPath.indexOf("#")===-1&&v()});const w=e=>{e===""&&(e=window.location.href),window.location.href=e},_=e=>{y.push({name:"post-search",query:{tag:e}})},k=e=>{y.push({name:"post-search",query:{category:e}})};return{avatarClasses:g(()=>({"hover:opacity-50 cursor-pointer":!0,[h.themeConfig.theme.profile_shape]:!0})),isMobile:g(()=>f.isMobile),currentPath:g(()=>m.path),pluginConfigs:g(()=>h.themeConfig.plugins),enabledComment:g(()=>c.value.comments&&b.value.plugin!==""),postStatsRef:d,SvgTypes:Q,commonStore:f,fetchData:v,handleAuthorClick:w,navigateToTag:_,navigateToCategory:k,loading:u,post:c,t:a}},mounted(){this.fetchData()},beforeUnmount(){this.commonStore.resetHeaderImage()}}),lt={class:"flex flex-col mt-20"},rt={class:"main-grid"},pt={class:"post-header"},ct={class:"post-labels"},ut={key:2},dt=["onClick"],ht=o("em",{class:"opacity-50"},"#",-1),mt={key:2},gt=o("b",{class:"opacity-50"},"#",-1),ft={key:0,class:"post-title text-white"},vt={class:"flex flex-row items-center justify-start mt-8 mb-4"},yt={key:0,class:"post-footer"},bt=["alt"],Ct={class:"text-white opacity-80"},wt={class:"opacity-70"},_t={key:1,class:"post-footer"},kt={class:"flex flex-row items-center"},St={class:"text-ob-dim mt-1"},Pt={class:"main-grid"},Tt=["innerHTML"],At={key:1,class:"bg-ob-deep-800 px-14 py-16 rounded-2xl shadow-xl block min-h-screen"},$t=o("br",null,null,-1),Bt=o("br",null,null,-1),jt=o("br",null,null,-1),Ht={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols2 gap-6 mt-6"},Mt={key:0,class:"flex flex-col w-full h-full mr-0 lg:mr-4"},Vt={key:1,class:"flex flex-col w-full h-full"},zt={key:2,id:"comments"};function Dt(t,r,h,f,m,y){const a=p("ob-skeleton"),c=p("PostStats"),u=p("SubTitle"),d=p("Article"),b=p("Comment"),C=p("Profile"),v=p("Toc"),w=p("Sidebar"),_=H("lazy"),k=H("scroll-spy");return s(),n("div",lt,[o("div",rt,[o("div",pt,[o("span",ct,[t.loading?(s(),T(a,{key:0,tag:"b",height:"20px",width:"35px"})):!t.loading&&t.post.categories&&t.post.categories.length>0?(s(),n("b",{key:1,onClick:r[0]||(r[0]=e=>t.navigateToCategory(t.post.categories[0].slug))},[o("span",null,l(t.post.categories[0].name),1)])):(s(),n("b",ut,l(t.t("settings.default-category")),1)),o("ul",null,[t.loading?(s(),T(a,{key:0,count:2,tag:"li",height:"16px",width:"35px",class:"mr-2"})):!t.loading&&t.post.tags&&t.post.tags.length>0?(s(!0),n(x,{key:1},tt(t.post.tags,e=>(s(),n("li",{key:e.slug,onClick:S=>t.navigateToTag(e.slug)},[ht,M(" "+l(e.name),1)],8,dt))),128)):(s(),n("li",mt,[gt,M(" "+l(t.t("settings.default-tag")),1)]))])]),t.post.title?(s(),n("h1",ft,l(t.post.title),1)):(s(),T(a,{key:1,class:"post-title text-white uppercase",width:"100%",height:"clamp(1.2rem, calc(1rem + 3.5vw), 4rem)"})),o("div",vt,[t.post.author&&t.post.count_time.symbolsTime?(s(),n("div",yt,[V(o("img",{class:et(t.avatarClasses),alt:`author-${t.post.author.name}`,onClick:r[1]||(r[1]=e=>t.handleAuthorClick(t.post.author.link))},null,10,bt),[[_,t.post.author.avatar||""]]),o("span",Ct,[o("strong",{class:"text-white pr-1.5 hover:opacity-50 cursor-pointer",onClick:r[2]||(r[2]=e=>t.handleAuthorClick(t.post.author.link))},l(t.post.author.name),1),o("span",wt,l(t.t("settings.shared-on"))+" "+l(t.t(t.post.date.month))+" "+l(t.post.date.day)+", "+l(t.post.date.year),1)])])):(s(),n("div",_t,[o("div",kt,[i(a,{class:"mr-2",height:"28px",width:"28px",circle:!0}),o("span",St,[i(a,{height:"20px",width:"150px"})])])])),i(c,{"post-word-count":t.post.count_time.symbolsCount,"post-time-count":t.post.count_time.symbolsTime,"post-title":t.post.title,"current-path":t.currentPath,"plugin-configs":t.pluginConfigs,comments:t.enabledComment,ref:"postStatsRef"},null,8,["post-word-count","post-time-count","post-title","current-path","plugin-configs","comments"])])])]),o("div",Pt,[o("div",null,[t.post.content?V((s(),n("div",{key:0,class:"post-html",innerHTML:t.post.content},null,8,Tt)),[[k,{sectionSelector:"h1, h2, h3, h4, h5, h6"}]]):(s(),n("div",At,[i(a,{tag:"div",count:1,height:"36px",width:"150px",class:"mb-6"}),$t,i(a,{tag:"div",count:35,height:"16px",width:"100px",class:"mr-2"}),Bt,jt,i(a,{tag:"div",count:25,height:"16px",width:"100px",class:"mr-2"})])),o("div",Ht,[t.post.prev_post.title?(s(),n("div",Mt,[i(u,{title:"settings.paginator.prev",icon:"arrow-left-circle"}),i(d,{data:t.post.prev_post},null,8,["data"])])):A("",!0),t.post.next_post.title?(s(),n("div",Vt,[i(u,{title:"settings.paginator.next",side:t.isMobile?"left":"right",icon:"arrow-right-circle"},null,8,["side"]),i(d,{data:t.post.next_post},null,8,["data"])])):A("",!0)]),t.enabledComment&&t.post.title&&t.post.text&&t.post.uid?(s(),n("div",zt,[i(b,{title:t.post.title,body:t.post.text,uid:t.post.uid},null,8,["title","body","uid"])])):A("",!0)]),o("div",null,[i(w,null,{default:ot(()=>[i(C,{author:t.post.author.slug||""},null,8,["author"]),i(v,{toc:t.post.toc,comments:t.enabledComment},null,8,["toc","comments"])]),_:1})])])])}const Ot=Z(at,[["render",Dt]]);export{Ot as default};
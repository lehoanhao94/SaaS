import{_ as w,a as B}from"./Bc8VYRnG.js";import x from"./BikVs_Kq.js";import{_ as P,a as S}from"./CFARCz7r.js";import{d as U,s as D,af as d,ag as H,ah as R,D as T,a9 as t,c as r,L as p,$ as b,w as c,h as l,ai as m,aB as q,am as A,i,e as E,q as f,ak as M}from"./Cja1rsWx.js";import"./B8M2g7tr.js";import"./Dnd51l0P.js";const N={key:1},J=U({__name:"[...slug]",async setup(V){let a,o;const s=D(),{data:e}=([a,o]=d(()=>m(s.path,()=>f(s.path).findOne(),"$BiR4XG95H5")),a=await a,o(),a);if(!e.value)throw H({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:u}=([a,o]=d(()=>m(`${s.path}-surround`,()=>f("/docs").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(M(s.path)),{default:()=>[]})),a=await a,o(),a);R({title:e.value.title,ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description});const h=T(()=>q(e.value));return(G,L)=>{const g=w,k=x,y=P,v=B,$=S,C=A;return t(e)?(r(),p(C,{key:0},b({default:c(()=>[i(g,{title:t(e).title,description:t(e).description,links:t(e).links,headline:t(h)},null,8,["title","description","links","headline"]),i(v,{prose:""},{default:c(()=>{var n;return[t(e).body?(r(),p(k,{key:0,value:t(e)},null,8,["value"])):l("",!0),(n=t(u))!=null&&n.length?(r(),E("hr",N)):l("",!0),i(y,{surround:t(u)},null,8,["surround"])]}),_:1})]),_:2},[t(e).toc!==!1?{name:"right",fn:c(()=>{var n,_;return[i($,{links:(_=(n=t(e).body)==null?void 0:n.toc)==null?void 0:_.links},null,8,["links"])]}),key:"0"}:void 0]),1024)):l("",!0)}}});export{J as default};

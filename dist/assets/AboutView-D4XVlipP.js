import{_ as m,N as g,F as v,u as b,r as F,o as f,a as s,b as k,c as N,d as a,e,t as o,j as i,p as S,i as B}from"./index-qcyWWWVt.js";const V={name:"RepoDetails",components:{NavBar:g,Footer:v},setup(){const r=b().params.id,c=F({});return f(()=>{fetch(`https://api.github.com/repos/Dennardavid/${r}`).then(t=>t.json()).then(t=>{c.value=t,console.log(t)}).catch(t=>{console.log(t)})}),{details:c}}},w=n=>(S("data-v-8b164962"),n=n(),B(),n),y={id:"repodetail"},j={class:"repodetail-card"},x={class:"repo_card"},D={class:"just"},I={class:"repo-name"},R={class:"repo-mini-details"},C={class:"repo-stats"},E={class:"repo-stats"},G={class:"repo-stats"},L=w(()=>e("p",null," License: ",-1)),M={class:"buttondiv"},z={class:"page_buttons"},A=["href"];function T(n,r,c,t,W,q){const d=s("NavBar"),_=s("FaGithub"),l=s("FaRegStar"),p=s("FaEye"),h=s("FaCodeFork"),u=s("Footer");return k(),N("div",y,[a(d),e("div",j,[e("section",x,[e("div",D,[a(_,{class:"justimg"})]),e("h1",I,o(t.details.name),1),e("div",R,[e("p",C,[a(l),i(" Stars: "+o(t.details.stargazers_count),1)]),e("p",E,[a(p),i(" Watch: "+o(t.details.watchers),1)]),e("p",G,[a(h),i(" Forks: "+o(t.details.forks),1)])]),e("p",null," Main Language: "+o(t.details.language===null?"none":t.details.language),1),L,e("p",null,"Date created: "+o(t.details.created_at),1),e("p",null,"Visibility: "+o(t.details.visibility),1),e("div",M,[e("button",z,[e("a",{href:`https://github.com/${t.details.full_name}`,target:"_blank",rel:"noreferrer",class:"viewongit"}," View on Github ",8,A)])])])]),a(u)])}const J=m(V,[["render",T],["__scopeId","data-v-8b164962"]]);export{J as default};

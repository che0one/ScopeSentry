import{d as e,r as l,s as t,e as a,P as i,H as o,F as r,K as s,C as n,o as p,c as u,a as m,w as c,N as d,y as h,t as g,f as v,O as f,l as x,_ as j}from"./index-vMt5tOuI.js";import{u as b}from"./useTable-DO6t6Zuf.js";import{E as y}from"./el-card-CiG9T01-.js";import{E as _}from"./el-select-oq3jOrDj.js";import"./el-tag-C3mt1pWb.js";import"./el-popper-CJZHtU_A.js";import{E as w,a as S}from"./el-col-CK66atlO.js";import{E as L,a as k}from"./el-descriptions-item-uaW-dWMN.js";import{E}from"./el-text-JTnFT2W3.js";import{_ as R}from"./Dialog.vue_vue_type_style_index_0_lang-BoLcmuNj.js";import{_ as z}from"./Table.vue_vue_type_script_lang-kKqRQLK4.js";import{u as H}from"./useCrudSchemas-gxupr6De.js";import{r as U}from"./index-znw49gEj.js";import C from"./Csearch-DF880vSD.js";import"./useInput-CPyPMgc8.js";import"./index-DMmJY3Ph.js";import"./isEqual-D2Iw95Gj.js";import"./debounce-heHWUU1E.js";import"./refs-B-F76yq7.js";import"./el-table-column-Ty7HKRWd.js";import"./el-checkbox-DZAdOJwr.js";import"./isArrayLikeObject-4WqnSTxS.js";import"./raf-RUFdlNuH.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-image-viewer-CkZtWhln.js";import"./tsxHelper-C3yG_Ynk.js";import"./el-dropdown-item-C2usTBce.js";import"./castArray-DsRHGUHq.js";import"./index-BjDunm1X.js";import"./tree-BfZhwLPs.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-DYamwFJW.js";import"./el-divider-RjUq80nQ.js";import"./el-tree-select-eURulGpf.js";import"./index-eyqQYDWr.js";import"./useIcon-D1gqy2ud.js";import"./exportData.vue_vue_type_script_setup_true_lang-ncKTqQw8.js";import"./el-tab-pane-zqlH3GjE.js";import"./el-form-CrZErb9v.js";import"./el-radio-group-PFBUXVzP.js";import"./el-space-CvMwlCn7.js";import"./index-DO8QlVWZ.js";const q={style:{whiteSpace:"pre-line",width:"500px"}},P={style:{whiteSpace:"pre-line"}};function T(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)}const W=j(e({__name:"vul",props:{projectList:{}},setup(e){const{t:f}=x(),j=[{keyword:"url",example:'url="http://example.com"',explain:f("searchHelp.url")},{keyword:"vulname",example:'vulname="nginxwebui-runcmd-rce"',explain:f("searchHelp.vulname")},{keyword:"level",example:'level="info"',explain:f("searchHelp.level")},{keyword:"matched",example:'matched="https://example.com"',explain:f("searchHelp.matched")},{keyword:"request",example:'request="cmd=whoami"',explain:f("searchHelp.vulRequest")},{keyword:"response",example:'response="root"',explain:f("searchHelp.response")},{keyword:"project",example:'project="Hackerone"',explain:f("searchHelp.project")}],W=l(""),V=e=>{W.value=e,$()},M=t([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:f("tableDemo.index"),type:"index",minWidth:55},{field:"url",label:"URL",minWidth:100},{field:"vulnerability",label:"Vulnerability",minWidth:100},{field:"level",label:"Level",minWidth:100,columnKey:"level",formatter:(e,l,t)=>{if(null==t)return a("div",null,null);let o="",r="";return"critical"===t?(o="red",r=f("poc.critical")):"high"===t?(o="orange",r=f("poc.high")):"medium"===t?(o="yellow",r=f("poc.medium")):"low"===t?(o="blue",r=f("poc.low")):"info"===t?(o="green",r=f("poc.info")):"unknown"===t&&(o="gray",r=f("poc.unknown")),a(S,{gutter:20,style:"width: 80%"},{default:()=>[a(w,{span:1},{default:()=>[a(i,{icon:"clarity:circle-solid",color:o},null)]}),a(w,{span:5},{default:()=>[a(E,{type:"info"},T(r)?r:{default:()=>[r]})]})]})},filters:[{text:f("poc.critical"),value:"critical"},{text:f("poc.high"),value:"high"},{text:f("poc.medium"),value:"medium"},{text:f("poc.low"),value:"low"},{text:f("poc.info"),value:"info"},{text:f("poc.unknown"),value:"unknown"}]},{field:"matched",label:"Matched",minWidth:200},{field:"time",label:f("asset.time"),minWidth:200},{field:"action",label:f("tableDemo.action"),formatter:(e,l,t)=>{let i;return a(r,null,[a(o,{type:"primary",onClick:()=>te(e)},T(i=f("asset.detail"))?i:{default:()=>[i]})])},minWidth:100}]),{allSchemas:D}=H(M),{tableRegister:I,tableState:A,tableMethods:O}=b({fetchDataApi:async()=>{const{currentPage:e,pageSize:l}=A,t=await((e,l,t,a)=>U.post({url:"/api/vul/data",data:{search:e,pageIndex:l,pageSize:t,filter:a}}))(W.value,e.value,l.value,ae);return{list:t.data.list,total:t.data.total}},immediate:!1}),{loading:F,dataList:N,total:K,currentPage:B,pageSize:X}=A,{getList:$,getElTableExpose:G}=O;function J(){return{background:"var(--el-fill-color-light)"}}X.value=20,s((()=>{Y(),window.addEventListener("resize",Y)}));const Q=l(0),Y=()=>{const e=window.innerHeight||document.documentElement.clientHeight;Q.value=.7*e},Z=t({URL:"",Vulnerability:"",Level:"",Matched:"",Time:"",Request:"",Response:""}),ee=l(""),le=l(!1),te=e=>{const l=e.level;ee.value="";let t="";"critical"===l?(ee.value="red",t=f("poc.critical")):"high"===l?(ee.value="orange",t=f("poc.high")):"medium"===l?(ee.value="yellow",t=f("poc.medium")):"low"===l?(ee.value="blue",t=f("poc.low")):"info"===l?(ee.value="green",t=f("poc.info")):"unknown"===l&&(ee.value="gray",t=f("poc.unknown")),Z.Level=t,Z.Vulnerability=e.vulnerability,Z.Matched=e.matched,Z.Time=e.time,Z.URL=e.url,Z.Request=e.request,Z.Response=e.response,le.value=!0},ae=t({}),ie=async e=>{Object.assign(ae,e),$()},oe=(e,l)=>{Object.assign(ae,l),W.value=e,$()};return(e,l)=>{const t=n("ElScrollbar");return p(),u(r,null,[a(C,{getList:m($),handleSearch:V,searchKeywordsData:j,index:"vulnerability",getElTableExpose:m(G),handleFilterSearch:oe,projectList:e.$props.projectList},null,8,["getList","getElTableExpose","projectList"]),a(m(S),null,{default:c((()=>[a(m(w),null,{default:c((()=>[a(m(y),null,{default:c((()=>[a(m(z),{pageSize:m(X),"onUpdate:pageSize":l[0]||(l[0]=e=>d(X)?X.value=e:null),currentPage:m(B),"onUpdate:currentPage":l[1]||(l[1]=e=>d(B)?B.value=e:null),columns:m(D).tableColumns,data:m(N),stripe:"",border:!0,"max-height":Q.value,loading:m(F),resizable:!0,onRegister:m(I),onFilterChange:ie,headerCellStyle:J,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),a(m(w),{":span":24},{default:c((()=>[a(m(y),null,{default:c((()=>[a(m(_),{pageSize:m(X),"onUpdate:pageSize":l[2]||(l[2]=e=>d(X)?X.value=e:null),currentPage:m(B),"onUpdate:currentPage":l[3]||(l[3]=e=>d(B)?B.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:m(K)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),a(m(R),{modelValue:le.value,"onUpdate:modelValue":l[4]||(l[4]=e=>le.value=e),title:m(f)("asset.detail"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},width:"70%","max-height":Q.value},{default:c((()=>[a(m(L),{border:!0,column:2},{default:c((()=>[a(m(k),{label:"URL"},{default:c((()=>[h(g(Z.URL),1)])),_:1}),a(m(k),{label:"Level",width:"100"},{default:c((()=>[a(m(i),{icon:"clarity:circle-solid",color:ee.value},null,8,["color"]),a(m(E),{type:"info"},{default:c((()=>[h(g(Z.Level),1)])),_:1})])),_:1}),a(m(k),{label:"Vulnerability"},{default:c((()=>[h(g(Z.Vulnerability),1)])),_:1}),a(m(k),{label:"Matched"},{default:c((()=>[h(g(Z.Matched),1)])),_:1}),a(m(k),{label:"Time",span:2},{default:c((()=>[h(g(Z.Time),1)])),_:1}),a(m(k),{label:"Request"},{default:c((()=>[a(t,{"max-height":Q.value,"max-width":"maxHeight"},{default:c((()=>[v("div",q,g(Z.Request),1)])),_:1},8,["max-height"])])),_:1}),a(m(k),{label:"Response"},{default:c((()=>[a(t,{"max-height":Q.value},{default:c((()=>[v("div",P,g(Z.Response),1)])),_:1},8,["max-height"])])),_:1})])),_:1})])),_:1},8,["modelValue","title","max-height"])],64)}}}),[["__scopeId","data-v-766a3cd8"]]);export{W as default};
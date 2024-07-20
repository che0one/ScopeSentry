import{u as e,i as a,F as s}from"./useForm-BQoVwWU0.js";import{d as o,z as t,l as n,C as l,o as i,c,i as r,w as d,y as u,t as h,a as m,j as p,F as w,r as f,a5 as g,aU as b,bA as v,e as y,R as x,K as S,aE as E,bB as R,bC as F,bw as L,ay as j}from"./index-vMt5tOuI.js";import{u as k}from"./useIcon-D1gqy2ud.js";const V=o({__name:"ActionButton",props:{showSearch:t.bool.def(!0),showReset:t.bool.def(!0),showExpand:t.bool.def(!1),visible:t.bool.def(!0),searchLoading:t.bool.def(!1),resetLoading:t.bool.def(!1)},emits:["search","reset","expand"],setup(e,{emit:a}){const s=a,{t:o}=n(),t=()=>{s("search")},f=()=>{s("reset")},g=()=>{s("expand")};return(a,s)=>{const n=l("BaseButton");return i(),c(w,null,[e.showSearch?(i(),r(n,{key:0,type:"primary",loading:e.searchLoading,icon:m(k)({icon:"ep:search"}),onClick:t},{default:d((()=>[u(h(m(o)("common.query")),1)])),_:1},8,["loading","icon"])):p("",!0),e.showReset?(i(),r(n,{key:1,loading:e.resetLoading,plain:"",icon:m(k)({icon:"ep:refresh-right"}),onClick:f},{default:d((()=>[u(h(m(o)("common.reset")),1)])),_:1},8,["loading","icon"])):p("",!0),e.showExpand?(i(),r(n,{key:2,icon:m(k)({icon:e.visible?"ep:arrow-up":"ep:arrow-down"}),text:"",onClick:g},{default:d((()=>[u(h(m(o)(e.visible?"common.shrink":"common.expand")),1)])),_:1},8,["icon"])):p("",!0)],64)}}}),_=o({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:t.bool.def(!1),labelWidth:t.oneOfType([String,Number]).def("auto"),layout:t.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttonPosition:t.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:t.bool.def(!0),showReset:t.bool.def(!0),showExpand:t.bool.def(!1),expandField:t.string.def(""),inline:t.bool.def(!0),removeNoValueItem:t.bool.def(!0),model:{type:Object,default:()=>({})},searchLoading:t.bool.def(!1),resetLoading:t.bool.def(!1)},emits:["search","reset","register","validate"],setup(o,{expose:t,emit:n}){const l=o,r=n,d=f(!0),h=f(l.model),j=g((()=>{const e=m(I);let a=b(e.schema);if(e.showExpand&&e.expandField&&!m(d)){const s=v(a,(a=>a.field===e.expandField));a.map(((e,a)=>(e.hidden=a>=s,e)))}return"inline"===e.layout&&(a=a.concat([{field:"action",formItemProps:{labelWidth:"0px",slots:{default:()=>y("div",null,[y(V,{showSearch:e.showSearch,showReset:e.showReset,showExpand:e.showExpand,searchLoading:e.searchLoading,resetLoading:e.resetLoading,visible:d.value,onExpand:z,onReset:q,onSearch:W},null)]),label:()=>y("span",null,[u(" ")])}}}])),a})),{formRegister:k,formMethods:_}=e(),{getElFormExpose:C,getFormData:O,getFormExpose:P}=_,A=f({}),B=f({}),I=g((()=>{const e={...l};return Object.assign(e,m(B)),e})),M=f([]);x((()=>m(j)),(async(e=[])=>{h.value=a(e,m(h)),M.value=e}),{immediate:!0,deep:!0});const N=async()=>{const e=await O();return m(I).removeNoValueItem?Object.keys(e).reduce(((a,s)=>{const o=e[s];return R(o)||(F(o)?Object.keys(o).length>0&&(a[s]=o):a[s]=o),a}),{}):e},W=async()=>{const e=await C();await(null==e?void 0:e.validate((async e=>{if(e){const e=await N();r("search",e)}})))},q=async()=>{const e=await C();null==e||e.resetFields();const a=await N();r("reset",a)},D=g((()=>({textAlign:m(I).buttonPosition}))),z=async()=>{d.value=!m(d)},K={getElFormExpose:C,setProps:(e={})=>{B.value=Object.assign(m(B),e),A.value=e},setSchema:e=>{const{schema:a}=m(I);for(const s of a)for(const a of e)s.field===a.field&&L(s,a.path,a.value)},setValues:async(e={})=>{h.value=Object.assign(l.model,m(h),e);const a=await P();null==a||a.setValues(e)},delSchema:e=>{const{schema:a}=m(I),s=v(a,(a=>a.field===e));s>-1&&a.splice(s,1)},addSchema:(e,a)=>{const{schema:s}=m(I);void 0===a?s.push(e):s.splice(a,0,e)}};S((()=>{r("register",K)})),t(K);const T=(e,a,s)=>{r("validate",e,a,s)};return(e,a)=>(i(),c(w,null,[y(m(s),{model:h.value,"is-custom":!1,"label-width":I.value.labelWidth,"hide-required-asterisk":"",inline:I.value.inline,"is-col":I.value.isCol,schema:M.value,onRegister:m(k),onValidate:T},null,8,["model","label-width","inline","is-col","schema","onRegister"]),"bottom"===o.layout?(i(),c("div",{key:0,style:E(D.value)},[y(V,{"show-reset":I.value.showReset,"show-search":I.value.showSearch,"show-expand":I.value.showExpand,"search-loading":I.value.searchLoading,"reset-loading":I.value.resetLoading,onExpand:z,onReset:q,onSearch:W},null,8,["show-reset","show-search","show-expand","search-loading","reset-loading"])],4)):p("",!0)],64))}}),C=()=>{const e=f(),a=async()=>{await j();const a=m(e);return a};return{searchRegister:a=>{e.value=a},searchMethods:{setProps:async(e={})=>{const s=await a();null==s||s.setProps(e),e.model&&(null==s||s.setValues(e.model))},setValues:async e=>{const s=await a();null==s||s.setValues(e)},setSchema:async e=>{const s=await a();null==s||s.setSchema(e)},addSchema:async(e,s)=>{const o=await a();null==o||o.addSchema(e,s)},delSchema:async e=>{const s=await a();null==s||s.delSchema(e)},getFormData:async()=>{const e=await a();return null==e?void 0:e.formModel}}}};export{_,C as u};
import{j as p,r as g,z as o,k as d,l as m,H as t,B as n,u as s,q as k,F as u,e as v}from"./framework.b3e0f3f4.js";import{a as h}from"./index.87ec4bd3.js";const x=u("\u4E2D\u6587"),S=u("autoInsertSpace"),C=p({setup(f){const e=g({autoInsertSpace:!0});return(l,c)=>{const _=o("el-button"),r=o("el-config-provider"),a=o("el-checkbox");return d(),m("div",null,[t(r,{button:s(e)},{default:n(()=>[t(_,null,{default:n(()=>[x]),_:1})]),_:1},8,["button"]),k("div",null,[t(a,{modelValue:s(e).autoInsertSpace,"onUpdate:modelValue":c[0]||(c[0]=i=>s(e).autoInsertSpace=i)},{default:n(()=>[S]),_:1},8,["modelValue"])])])}}});var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const j=u("open"),V=p({setup(f){const e=g({max:3}),l=()=>{h("this is a message.")};return(c,_)=>{const r=o("el-button"),a=o("el-config-provider");return d(),m("div",null,[t(a,{message:s(e)},{default:n(()=>[t(r,{onClick:l},{default:n(()=>[j]),_:1})]),_:1},8,["message"])])}}});var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const y=u(" Switch Lang "),z=p({setup(f){const e=v({name:"zh-cn",el:{colorpicker:{confirm:"\u786E\u5B9A",clear:"\u6E05\u7A7A"}}}),l=v({name:"en",el:{colorpicker:{confirm:"Confirm",clear:"Clear"}}}),c=()=>{const _=e.value;e.value=l.value,l.value=_};return(_,r)=>{const a=o("el-color-picker"),i=o("el-config-provider"),b=o("el-button");return d(),m("div",null,[t(i,{locale:l.value},{default:n(()=>[t(a,{"model-value":"",style:{"vertical-align":"middle"}})]),_:1},8,["locale"]),t(b,{style:{"margin-left":"8px","vertical-align":"middle"},onClick:c},{default:n(()=>[y]),_:1})])}}});var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});export{I as _,M as a,T as b};
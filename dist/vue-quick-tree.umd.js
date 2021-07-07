var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,o)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,__spreadValues=(e,t)=>{for(var o in t||(t={}))__hasOwnProp.call(t,o)&&__defNormalProp(e,o,t[o]);if(__getOwnPropSymbols)for(var o of __getOwnPropSymbols(t))__propIsEnum.call(t,o)&&__defNormalProp(e,o,t[o]);return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueQuickTree={},e.Vue)}(this,(function(e,t){"use strict";const o={show:!1,type:"dashed",color:"#adadad",width:1};var r=new class{constructor(){this.activeNode={}}deleteActiveNodeChild(){const{nodeList:e,activeChild:t}=this.activeNode;if(e&&t){const o=e.findIndex((e=>JSON.stringify(e)==JSON.stringify(t)));-1!==o&&e.splice(o,1),this.activeNode={}}}updateActiveNode(e){this.activeNode=e}},d=t.defineComponent({name:"tree",props:{modelValue:{type:Array},indentLevel:{default:10,type:Number},border:{default:()=>__spreadValues({},o),type:Object},allowDragNDrop:{default:!1,type:Boolean}},emits:{"update:modelValue":e=>!0},computed:{nodes(){return this.modelValue},nodeBorder(){return{borderLeft:`${this.border.width||o.width}px ${this.border.type||o.type} ${this.border.color||o.color}`}},getIndentLevel(){return`${this.indentLevel}px`}},methods:{onDragNode(e,t){t.dataTransfer&&this.allowDragNDrop&&(t.dataTransfer.setData("text/plain",JSON.stringify(e)),r.updateActiveNode({nodeList:this.modelValue,activeChild:e}))},onDropNode(e,t){if(t.dataTransfer&&this.allowDragNDrop){const o=JSON.parse(t.dataTransfer.getData("text/plain"));if(!e||!o)return;if(JSON.stringify(e)===JSON.stringify(o))return;if(e.validator&&!e.validator(o,e))return;e.children.push(o),this.$emit("update:modelValue",this.nodes),r.deleteActiveNodeChild()}}}});const n=t.withScopeId("data-v-9d2039d0"),a=n(((e,o,r,d,a,l)=>{const i=t.resolveComponent("tree",!0);return t.openBlock(),t.createBlock("ul",null,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.nodes,((r,d)=>(t.openBlock(),t.createBlock("li",{key:d,draggable:!0,onDragover:o[1]||(o[1]=t.withModifiers((()=>{}),["stop","prevent"])),onDragenter:o[2]||(o[2]=t.withModifiers((()=>{}),["stop","prevent"])),onDragstart:t.withModifiers((t=>e.onDragNode(r,t)),["stop"]),onDrop:t.withModifiers((t=>e.onDropNode(r,t)),["prevent","stop"])},[t.renderSlot(e.$slots,"node",{node:r},(()=>[t.createTextVNode(t.toDisplayString(r.name),1)]),!0),r.children?(t.openBlock(),t.createBlock(i,{key:0,modelValue:r.children,"onUpdate:modelValue":e=>r.children=e,"indent-level":e.indentLevel,border:e.border,style:__spreadValues({paddingLeft:e.getIndentLevel},e.nodeBorder)},t.createSlots({_:2},[t.renderList(e.$slots,((o,r)=>({name:r,fn:n((o=>[t.renderSlot(e.$slots,r,o,void 0,!0)]))})))]),1032,["modelValue","onUpdate:modelValue","indent-level","border","style"])):t.createCommentVNode("",!0)],40,["onDragstart","onDrop"])))),128))])}));d.render=a,d.__scopeId="data-v-9d2039d0",e.VueQuickTree=d,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));

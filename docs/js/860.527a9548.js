"use strict";(self["webpackChunkp_vue2_grid_layout"]=self["webpackChunkp_vue2_grid_layout"]||[]).push([[860],{8860:function(t,e,r){r.r(e),r.d(e,{default:function(){return a}});var u=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"url"}},[t._v("Url")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputUrl,expression:"inputUrl"}],staticClass:"form-control",attrs:{type:"url",id:"url"},domProps:{value:t.inputUrl},on:{change:t.handleInput,input:function(e){e.target.composing||(t.inputUrl=e.target.value)}}})])])},s=[],i=r(6369),l=(0,i.defineComponent)({props:{itemId:{type:String,required:!0},itemProps:{type:Object,required:!0,default:()=>({url:"https://www.tecmundo.com.br/"})}},data:()=>({debounce:0,inputUrl:""}),created(){this.inputUrl=this.$props.itemProps.url||"https://www.tecmundo.com.br/"},methods:{updateValues(){const t={url:`${this.inputUrl}`};this.$store.dispatch("updateItemProps",{id:this.$props.itemId,props:t}),this.$emit("setItemProps",t)},handleInput(){clearTimeout(this.debounce),this.debounce=setTimeout((()=>{this.updateValues()}),500)}}}),n=l,o=r(1001),p=(0,o.Z)(n,u,s,!1,null,null,null),a=p.exports}}]);
//# sourceMappingURL=860.527a9548.js.map
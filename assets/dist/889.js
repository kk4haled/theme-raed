"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[889],{602:(t,s,e)=>{e.d(s,{H:()=>h});class i extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,s){var e;return null===(e=this.getElement(t))||void 0===e?void 0:e.getAttribute(s)}val(t){return this.getAttribute(t,"value")}}const h=new i},889:(t,s,e)=>{e.r(s),e.d(s,{salla_button:()=>n});var i=e(531),h=e(602);const n=class{constructor(t){(0,i.r)(this,t),this.kind="primary",this.loading=!1,this.disabled=!1,this.hostAttributes={};for(let t=0;t<this.host.attributes.length;t++)this.hostAttributes[this.host.attributes[t].name]=this.host.attributes[t].value;this.hostAttributes.type=this.hostAttributes.type||"button",this.hostAttributes.class=(this.hostAttributes.class||"")+" s-button-btn btn--has-loading btn-"+this.kind,delete this.hostAttributes.kind,delete this.hostAttributes.id}async load(){return this.host.setAttribute("loading",""),this.host}async stop(){return this.host.removeAttribute("loading"),this.host}async disable(){this.host.setAttribute("disabled","")}async enable(){this.host.removeAttribute("disabled")}handleVisible(t,s){this.btn.classList.remove("btn-"+s),this.btn.classList.add("btn-"+t)}handleLoading(t){h.H.toggleElement(this.btn,"btn--is-loading","btn--no-loading",(()=>t))}render(){return(0,i.h)("button",Object.assign({ref:t=>this.btn=t,disabled:this.disabled},this.hostAttributes),(0,i.h)("slot",null),this.loading?(0,i.h)("span",{class:"loader loader--small s-button-loader"}):"")}get host(){return(0,i.g)(this)}static get watchers(){return{kind:["handleVisible"],loading:["handleLoading"]}}};n.style=":host{display:block}"}}]);
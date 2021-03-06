/*!
 * flow-adaptive-vue v1.0.0
 * (c) SashaSansay
 * Released under the MIT License.
 */
'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index_module = createCommonjsModule(function (module) {
module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}n.r(t);var u=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultSettings={maximum:9999,minimum:859,maxFont:9999,minFont:1,minWidth:0,maxWidth:9999,fontRatio:35,breakPoints:[]},this.settings=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){i(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}({},this.defaultSettings,{},t),"undefined"!=typeof window&&(window.addEventListener("resize",(function(){return n.handleResize()})),this.handleResize());}var t,n;return t=e,(n=[{key:"handleResize",value:function(){var e=this.settings,t=this.defaultSettings,n=this.settings.breakPoints,r=window.innerWidth,i=n.find((function(e){return r>=(e.minWidth||t.minWidth)&&r<=(e.maxWidth||t.maxWidth)}))||e,o=i.fontRatio,u=i.maxFont,a=i.minFont,f=i.minWidth,c=i.maxWidth||t.maxWidth,l=f||t.minWidth,s=r>c?c:r<l?l:r,d=u||t.maxFont,p=a||t.minFont,m=s/(o||t.fontRatio),b=m>d?d:m<p?p:m;document.documentElement.style.fontSize="".concat(b,"px");}}])&&o(t.prototype,n),e}();t.default=u;}]);
});

var FlowAdaptive = unwrapExports(index_module);

var index = {
  install: function install(Vue, settings) {
    Vue.prototype.$flowAdaptive = null;
    Vue.mixin({
      mounted: function mounted() {
        Vue.prototype.$flowAdaptive = new FlowAdaptive(settings);
      }
    });
  }
};

module.exports = index;

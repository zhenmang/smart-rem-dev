/*!
 * rem.js v2.3.2
 * (c) 2018 lyp
 * Released under the MIT License.
 */
/* eslint-disable */
"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};(function(e,t){(typeof exports==="undefined"?"undefined":_typeof(exports))==="object"&&typeof module!=="undefined"?module.exports=t():typeof define==="function"&&define.amd?define(t):(e=e||self,e.smartRem=t())})(undefined,function(){return function smartRem(t){if(t===undefined){t=750}else{var n=!isNaN(t)&&typeof t==="number"&&t>0;if(!n){throw new Error("Argument of rem must be a number which greater than zero")}}var o=document;var i=window;var r=o.documentElement;var f=document.createElement("style");f.type="text/css";r.firstElementChild&&r.firstElementChild.appendChild(f);var u=void 0;var d=void 0;function m(){d=/Mobi/.test(navigator.userAgent)?r.getBoundingClientRect().width:r.clientWidth||o.body.clientWidth;var e=d/t*100;f.innerText="html{font-size:"+e+"px !important;}"}m();i.addEventListener?i.addEventListener("resize",function(){i.clearTimeout(u);u=i.setTimeout(m,288)},false):i.onresize=function(){i.clearTimeout(u);u=i.setTimeout(m,288)}}});

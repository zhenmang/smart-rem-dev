'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * smart-rem.js
 * (c) 2018 lyp
 * Released under the MIT License.
 */
/* eslint-disable */
(function (global, factory) {
  (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global = global || self;
})(undefined, function () {
  return function smartRem(designWidth) {
    if (designWidth === undefined) {
      designWidth = 750;
    } else {
      var correctInput = !isNaN(designWidth) && typeof designWidth === 'number' && designWidth > 0;
      if (!correctInput) {
        throw new Error('Argument of rem must be a number which greater than zero');
      }
    }
    var win = window;
    var doc = win.document;
    var docEl = doc.documentElement;
    var remStyle = document.createElement('style');
    remStyle.type = 'text/css';
    docEl.firstElementChild && docEl.firstElementChild.appendChild(remStyle);
    var tid = void 0;
    var width = void 0;
    function refreshRem() {
      width = /Mobi/.test(navigator.userAgent) ? docEl.getBoundingClientRect().width : docEl.clientWidth || doc.body.clientWidth;
      var rem = width / designWidth * 100;
      remStyle.innerText = 'html{font-size:' + rem + 'px !important;}';
    }
    refreshRem();
    win.addEventListener ? win.addEventListener('resize', function () {
      win.clearTimeout(tid);
      tid = win.setTimeout(refreshRem, 288);
    }, false) : win.onresize = function () {
      win.clearTimeout(tid);
      tid = win.setTimeout(refreshRem, 288);
    };
  };
});

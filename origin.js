/*!
 * rem.js v2.3.2
 * (c) 2018 lyp
 * Released under the MIT License.
 */
/* eslint-disable */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.smartRem = factory());
}(this, function () {
  return function smartRem (designWidth) {
    if (designWidth === undefined) {
      designWidth = 750
    } else {
      const correctInput = !isNaN(designWidth) && (typeof designWidth === 'number') && designWidth > 0
      if (!correctInput) {
        throw new Error('Argument of rem must be a number which greater than zero')
      }
    }
    const win = window
    const doc = win.document
    const docEl = doc.documentElement
    let remStyle = document.createElement('style')
    remStyle.type = 'text/css'
    docEl.firstElementChild && docEl.firstElementChild.appendChild(remStyle)
    let tid
    let width
    function refreshRem () {
      width = /Mobi/.test(navigator.userAgent) ? (docEl.getBoundingClientRect().width) : (docEl.clientWidth || doc.body.clientWidth)
      let rem = (width / designWidth) * 100
      remStyle.innerText = 'html{font-size:' + rem + 'px !important;}'
    }
    refreshRem()
    win.addEventListener ? (win.addEventListener('resize', function () {
      win.clearTimeout(tid)
      tid = win.setTimeout(refreshRem, 288)
    }, false)) : win.onresize = function () {
      win.clearTimeout(tid)
      tid = win.setTimeout(refreshRem, 288)
    }
  }
}))


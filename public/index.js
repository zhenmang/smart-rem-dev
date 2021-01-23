/*!
 * smart-rem.js
 * (c) 2018 lyp
 * Released under the MIT License.
 */
/* eslint-disable */
module.exports = function smartRem (designWidth, designHeight) {

  var len = arguments.length;
  var tempArr = [];
  if (len === 0) {
    designWidth = 750;
  }
  var correctArg1 = tempArr.slice.call(arguments, 0).every(function(it) {
    return typeof it === 'number' && !isNaN(it)
  });
  var correctArg2 = tempArr.slice.call(arguments, 0).every(function(it, index) {
    var isStringNumber = typeof it === 'string' && !isNaN(+it.slice(0, -2));
    if (isStringNumber) {
      if (index === 0) {
        designWidth = +(designWidth.includes('px') ? designWidth.slice(0, -2) : designWidth);
      } else {
        designHeight = +(designHeight.includes('px') ? designHeight.slice(0, -2) : designHeight);
      }
    }
    return isStringNumber;
  });
  var isCorrect = correctArg1 || correctArg2;
  if (!isCorrect) {
    throw new Error('The correct usage of smart rem is smartRem(375, 667) or smartRem(375)');
  }

  var win = window;
  var doc = win.document;
  var docEl = doc.documentElement;
  var remStyle = document.createElement('style');
  var isMob = /Mobi/.test(navigator.userAgent);
  var tid;
  var width;
  var rem;
  docEl.firstElementChild && docEl.firstElementChild.appendChild(remStyle);

  function refreshRem () {
    var rect = docEl.getBoundingClientRect();
    var body = doc.body;
    width = isMob ? rect.width : (docEl.clientWidth || body.clientWidth);
    height = isMob ? rect.height : (docEl.clientHeight || body.clientHeight);
    if (designWidth && typeof designWidth === 'number') {
      rem = (width / designWidth) * 100;
    } else if (designHeight && typeof designHeight === 'number') {
      rem = (height / designHeight) * 100;
    } else {
      throw new Error('The correct usage of smart rem is smartRem(375, 667) or smartRem(375)');
    }
    remStyle.innerText = 'html{font-size:' + rem + 'px !important;}';
  }
  refreshRem();
  win.addEventListener ? (win.addEventListener('resize', function () {
    win.clearTimeout(tid);
    tid = win.setTimeout(refreshRem, 288);
  }, false)) : win.onresize = function () {
    win.clearTimeout(tid);
    tid = win.setTimeout(refreshRem, 288);
  }
}

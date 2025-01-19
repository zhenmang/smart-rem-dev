export default function smartRem (designWidth: number|string, designHeight?: number|string): void {

  const len: number = arguments.length;
  const tempArr: Array<number|string> = [];
  if (len === 0) { 
    designWidth = 750;
  }
  const correctArg1 = tempArr.slice.call(arguments, 0).every(function(it) {
    return typeof it === 'number' && !isNaN(it)
  });
  const correctArg2 = tempArr.slice.call(arguments, 0).every(function(it, index) {
    const isStringNumber = typeof it === 'string' && !isNaN(+it.slice(0, -2));
    if (isStringNumber) {
      if (index === 0) {
        designWidth = designWidth as string
        designWidth = +(designWidth.includes('px') ? designWidth.slice(0, -2) : designWidth);
      } else {
        designHeight = designHeight as string
        designHeight = +(designHeight.includes('px') ? designHeight.slice(0, -2) : designHeight);
      }
    }
    return isStringNumber;
  });
  const isCorrect = correctArg1 || correctArg2;
  if (!isCorrect) {
    throw new Error('The correct example of smart-rem is smartRem(375, 667) or smartRem(375)');
  }

  const win = window;
  const doc = win.document;
  const docEl = doc.documentElement;
  const remStyle = document.createElement('style');
  const isMob = /Mobi/.test(navigator.userAgent);
  let tid;
  let width;  
  let height;
  let rem;
  docEl.firstElementChild && docEl.firstElementChild.appendChild(remStyle);

  function refreshRem (): void {
    const rect = docEl.getBoundingClientRect();
    const body = doc.body;
    width = isMob ? rect.width : (docEl.clientWidth || body.clientWidth);
    height = isMob ? rect.height : (docEl.clientHeight || body.clientHeight);
    if (designWidth && typeof designWidth === 'number') {
      rem = (width / designWidth) * 100;
    } else if (designHeight && typeof designHeight === 'number') {
      rem = (height / designHeight) * 100;
    } else {
      throw new Error('The correct example of smart-rem is smartRem(375, 667) or smartRem(375)');
    }
    remStyle.innerText = 'html{font-size:' + rem + 'px !important;}';
  }
  refreshRem();
  win.addEventListener ? (win.addEventListener('resize', function () {
    win.clearTimeout(tid);
    tid = win.setTimeout(refreshRem, 150);
  }, false)) : win.onresize = function () {
    win.clearTimeout(tid);
    tid = win.setTimeout(refreshRem, 150);
  }
}

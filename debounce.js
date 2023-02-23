function fn(a) {
  // 只在这里处理防抖
  console.log(a)
}
// 处理防抖,lodash: debounce方法
// 参数1：要防抖的函数
// 参数2：时间
function debounce(func, delay) {
  let timeid; // 声明了变量
  return function (...args) {
    let that = this
    clearTimeout(timeid)
    timeid = setTimeout(() => {
      func.apply(that, args)
    }, delay)
  }
}

const debounceFn = debounce(fn, 700)
debounceFn(1)
debounceFn(2)
debounceFn(3)
setTimeout(() => {
  debounceFn(4)
}, 800)
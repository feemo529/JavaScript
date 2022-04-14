// 1. 普通函数 this 指向window
function fn() {
  console.log('普通函数的this' + this)
}
window.fn()
// 2. 对象的方法 this指向的是对象 o
var o = {
  sayHi: function () {
    console.log('对象方法的this:' + this)
  }
}
o.sayHi()
// 3. 构造函数 this 指向 ldh 这个实例对象 原型对象里面的this 指向的也是 ldh这个实例对象
function Star() {}
Star.prototype.sing = function () {}
var ldh = new Star()
// 4. 绑定事件函数 this 指向的是函数的调用者 btn这个按钮对象
var btn = document.querySelector('button')
btn.onclick = function () {
  console.log('绑定时间函数的this:' + this)
}
// 5. 定时器函数 this 指向的也是window
window.setTimeout(function () {
  console.log('定时器的this:' + this)
}, 1000)
// 6. 立即执行函数 this还是指向window
;(function () {
  console.log('立即执行函数的this' + this)
})()

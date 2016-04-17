// jquery对象结构的构造原理
// {
//   0:dom,
//   1:dom,
//   length:2,
//   __proto__:{
//     addclass:fn,
//     eq:fn,
//     first:fn,
//     last:fn,
//     __poroto__:object
//   }
// }
// 数字  字符串  数组  对象  函数

// var A  = {
//   push:function (value) {
//     this[this.length] = value;
//     this.length += 1;
//   },
//   shift:function () {
//
//   }
// };
// var myArray =  Object.create(A);
// myArray[0] = 1;
// myArray[1] = 2;
// myArray[2] = 3;
// myArray.length = 3;
// myArray.push(4);

// function myArray (){
//   for (var i = 0; i < arguments.length; i++) {
//     this[i] = arguments[i];
//   }
//   this.length = arguments.length;
// }
// myArray.prototype.push(value){
//   this[this.length] = value;
//   this.length += 1;
// }
// var arr = new myArray(1,2,3,4,5);
// arr.push(1);

// 1.得到了一个对象 {}
//   通过构造函数.call({})  把构造函数作为新对象的一个临时方法
//   调用了一次 (所以在构造函数的this全部都指向了新对象)
// 2.得到对象的原型链并不是object 而是 构造函数 身上的prototype属性

(function () {
  function jq(s) {
    var els = document.querySelectorAll(s);
    for (var i = 0; i < els.length; i++) {
      this[i] = els[i];
    }
    this.length = els.length;
  }
  jq.prototype.css = function (key,value) {
    for (var i = 0; i < this.length; i++) {
      this[i].style[key] = value;
    }
    return this;
  }
  function $ (s) {
    retur new jq(s);
  }
  window.$ = $;
})();

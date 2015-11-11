window.onload = function(){
  // http://www.ecma-international.org/ecma-262/5.1/

  // -----------函数也是一个对象--------
  // 在函数这个对象中,有一个无论在控制台,还是在断点里都看不到的隐藏属性
  // '调用'
  // 这个属性中放了一段代码
  // 当我们用 () 去调用函数的时候
  // 实际上是取出 '调用' 这个属性的值,然后执行它
  // 从一个普通的对象中去取值,js解析器做的是求值操作
  // 但是当从函数对象中取值的时候,如果取出来的是隐藏的那个'调用'属性的值,
  // Js解析器就不再是求值了,而是eval它(也即是当一段js代码来运行);
  // 这就是函数的与众不同之处.  它居然可以被调用....

  //伪对象 数字,字符串,布尔值
  //真对象 null 数组 对象 函数

  // var dd = {
  //   a:1,
  //   b:{c:1,d:2},
  //   c:function(){},
  // };
  // var dd = [function(){},function(){}];
  // var add = function( a,b,c,d,e,f,g,h ){
  //   var c  = a+b*b + a;
  //   return c;
  //-----------------------函数的应用----------------
  //-----函数的定义----
  //1.
  // var fn = function(){

  // };
  // function notGood (){

  // }
  // (function(){
  //   alert(1);
  // })();
  // //函数可以定义在任何地方(任何允许一个正常的表达式出现的地方)
  // var arr = [ function()  { alert('我定义在数组中');} ];
  // var obj = { pop:function(){ alert('我定义在对象中');} };
  // arr[0]();
  // obj.pop();
  // var fn1 = function(){
  //   var fn2 = function(a){
  //     return a++;
  //   };
  // };
  // -----函数的调用----
  // 当我们定义了一个函数之后,在该函数的可被见区域内,任何位置都可以通过
  // 名字(引用)+ ()  去调用该函数
  // !!!!!!!! 以引用形式定义的函数 必须先定义,后调用
  // var containD = function(s){
  //   //...........
  // };
  // containD();
  // for ( var i = 0;  i < i;  i++){
  //   containD(i);
  // }
  // var shuDu = function(){
  //   var s = 'adfafa';
  //   containD(s);
  // };
  // shuDu();
  //三类调用:  1.自己调用; 2.被另外一个函数调用  3.被浏览器调用;
  // document.onclick = function(){
  //   alert('点我干嘛?');
  // };
  //-----函数的参数----
  // 形参( 定义函数的时候出现在括号中的 变量)
  // 实参( 调用函数的时候出现在括号中的 表达式或者变量)
  // 调用的时候实参会按照顺序把值传给形参
  // 如果形参和实参不能一一对应
  // 实参少了, 空着的形参会变成undefined;
  // 形参少了, 所有的参数都会被记录在 arguments 这个类数组对象中
  var fn = function(a,b){
    console.log(arguments);
  };
  fn(1,2,3,4);
  var add = function(){
    var r = 0;
    for ( var i = 0;  i < arguments.length;  i++){
      r += arguments[i];
    }
    return r;
  };
  console.log( add(1,2,3,4,5,5) );
  // 函数的参数可以是任何类型的数据(不限制类型)

  var test = function(){ return 3; };
  // var fn = function(){
  //   console.log( arguments[arguments.length-1]() );
  //   return arguments[arguments.length-1];
  // };
  // console.log(  fn( 'ss', [1,2,3,4,5], {a:1,b:2}, test )()  );
  //-----函数的作为对象的属性----
  // var obj = {
  //   a:1,
  //   b:2,
  //   c:function(){}};
  // var fakeArray = {
  //   0:1,     // fakeArray.push(1)
  //   1:'a',
  //   2:{c:1,b:2},
  //   3:[1,2,3],
  //   length:4,
  //   push:function(){
  //     for ( var i = 0;  i < arguments.length;  i++){
  //       this[this.length] = arguments[i];
  //       this.length += 1;
  //     }
  //     return this.length;
  //   },
  //   pop:function(){
  //     var r = this[ this.length - 1 ];
  //     delete  this[ --this.length ];
  //     return r;
  //   }
  // };
  // console.log( fakeArray );
  // console.log( fakeArray.push(1,'a','b') );
  // console.log( fakeArray );
  // var c = {a:1,b:2};
  // c.c = 3;

  // Array.prototype.aa  = function(){
  //   console.log('haha');
  // };

  // var c = {a:1,b:2};
  // var d = Object.create(c);
  // var e = Object.create(c);
  // d.e = 1;
  // d.f = 2;
  // c.cccc = function(){
  //   console.log('哈哈');
  // };
  // d.cccc();
  // c 被称为obj的方法 ;

  //-----函数作用域----
  // if( 5>4){
  //   var cc = '12';
  //   if(6>4){
  //     var dd = function(){
  //       return 2;
  //     };
  //   }
  // }
  // for ( var i = 0;  i < 12;  i++){
  //   console.log(i);
  // }
  // console.log(i);
  // console.log( cc , dd() );

  // var aaaa = 13;
  // var fn = function(){
  //   var eeeee = 12;
  //   var fffff = 13;
  // };
  // console.log(eeeee,fffff);
  ////////////////////////////////////
  //  var a = 12,b=13;
  //  if(){  if(){ var c = 13 } }
  //  for(){ if(){}  var d = 13 }
  //
  //  var c = function(){    }
  //  c();
  //---------------------------------
  //  var fn = function(){
  //      var ee = 12, var ff = 12;
  //      for ( var i = 0;  i < .length;  i++){}
  //      var fn2 = function(){  var x=1, var y = 2  }
  //      console.log(x,y)
  //  }
  //  在javascript中只有函数会把变量锁在自己内部,从函数外无法得到.
  ////////////////////////////////////
  var a = 12;
  var fn = function(){
    var b = 11;
    var fn2  = function(){
      var c = 9; var a = 13;
      a++;b++;c++;
      console.log(a,b,c);
    };
    fn2();
    a++; console.log(a,b);
  };
  fn();
  console.log(a);

  // 函数的形参也作为内部的变量被锁死在函数中.
  var string = 'abcde';
  var ss = function(num){
    num = num.slice(-2);
  };
  ss(string);
  console.log(string);

  var array = ['a','b','c','d','e'];
  var aa = function( num ){
    num  = num.splice(-2); //['d','e']
    // num.splice(-2);
  };
  aa( array );
  console.log(array);
  //-----函数的递归调用----

  var jiechang = function(n){
    if(n == 0){
      return 1;
    }else{
      return  n * jiechang(n-1);
    }
  };
  console.log( jiechang(10) );
    // return  10 * jiechang(9)
    // return  9  * jiechang(8)
    // return  8  * jiechang(7)
    // return  7  * jiechang(6)
    // return  6  * jiechang(5)
    // return  5  * jiechang(4)
    // return  4  * jiechang(3)
    // return  3  * jiechang(2)
    // return  2  * jiechang(1)
    // return  1  * jiechang(0)
  //               归并排序
  var sort = function(arr1,arr2){
    var r = [];
    while( arr1.length && arr2.length ){
      if( arr1[0] < arr2[0] ){
        r.push( arr1.shift() );
      }else{
        r.push( arr2.shift() );
      }
    }
    for ( var i = 0; i < arr1.length;  i++){r.push( arr1[i] );}
    for ( i = 0; i < arr2.length;  i++){ r.push(arr2[i] );}
    return r;
  };

  //-----函数中的闭包概念----
  var b = 12;
  var fn = function(){
    console.log(b);
  };
  //函数在定义的时候 会记录自己当前的可见区域   (作用域链)
  fn();
  //1.
  var fn = function(){
    var aaaaa = 11;
    return function(){
      return aaaaa;
    };
  };
  console.log( fn()() );
  var fn  = (function(){
    var cc = 1;
    var dd = 2;
    var ee = 3;
    return  function(){
      return cc;
    };
  })();
  var c = [ {a:1,b:2},{c:1,d:2},{e:1,f:2} ];
  // for ( var i = 0;  i < c.length;  i++){
  //   c[i].aaa = (function(aa){
  //     return function(){
  //       console.log(aa);
  //     };
  //   })(i);
  // }
  //-----函数中的级联概念----
  var div = {
    width:100,
    height:200,
    border:null,
    biankuan:function(){ this.width += 100; return this;   },
    biangao:function() { this.height += 100; return this;  },
    jia:function(){this.border ='1px solid red';return this;}
  };
  div.biangao().biankuan().jia().biangao().biankuan();
  console.log(div);
  //链式调用

  //-----函数中回调函数的概念----
  var cc = function(){
    alert('成功了!!该我上场了!!');
  };
  var dd = function(fn){
    var r = 0;
    for ( var i = 0;  i < 1000000000;  i++){
      r += i;
    }
    if(r) { fn();  }
  };
  dd(cc);

  //   如何使用New关键字创建对象,处理继承
  //   prototype是怎么回事?
  //   in 操作符检测对象属性  hasOwnProperty 检测对象自带的属性
  //   <s>Number对象中的 parseInt  parseFloat </s>
  //   <s>数据转换函数的总结  Number() String() Boolea();</s>

  //   函数方法中的sort() map()等涉及到闭包和回调的函数;
  //   字符串方法中的replace()  match() 等涉及到正则表达式部分的函数
  //   运算符作用于不同类型数据的时候令人困惑的转换规则
  //   this在不同调用模式中的指向
};

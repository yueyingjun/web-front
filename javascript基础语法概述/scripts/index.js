//是什么   ----->   javascript 是一门 程序  语言
//能做什么 ----->   能做一切程序语言可以处理的计算逻辑部分,以及他自己擅长的特定用途部分(操作web页面)
//程序语言功能的简单划分 ---->1.基础部分(存储计算逻辑)  2.特定用途部分
//程序语言基础部分需要(必须)实现的功能 (把对机器指令的操作抽象成人和机器都看懂的代码)
// ------>    读 写 擦除  左移 右移 暂停
//接下来是javascript语言的基础部分
// window.onload = function(){
//   var aa = 13;       //aa叫做变量;
//   console.log( aa ); //直接通过变量名字去读取变量
//   aa = 14;
//   console.log(aa);
//   var bb  =  aa + 4;
//   console.log(bb);
//   if( bb == 24 ){
//     console.log(1);
//   }else{
//     console.log(2);
//   }
//   //-------------- 数据操作   逻辑操作 ----------------
//   var cc = 12;
//   var dd = 12.5;
//   var ee = '我是中国人';
//   var ff = [1,2,3,'我是中国人'];
//   var gg = {
//     name:'中国'  ,
//     renshu:'12亿' ,
//     tudimianji:'960万平方公里'
//   };
//   console.log(cc,dd,ee,ff,gg);
//   // + - * /        > >= < <=  == !=    && || !
//   if(5>4){console.log(1);}else{console.log(2);}
//   for ( var i = 0;  i < 10;  i++){
//     console.log(i);
//   }
//   //-----------------------------------
// };

window.onload = function(){
  //------------数据操作-----------

  //定义变量使用var关键字 接一个变量名字

  //变量名字必须以字母开头(_ $) [永远不要用单字母变量]
  //变量名字不能使用javascript语言的关键字
  //(var if else for break continue return while switch class);
  //在程序中给变量起名字必须要有意义   var PI = 3.1415926;
  //程序中用到的变量如果是常量,我们让它的变量名是全大写
  //var UP = 37;  var DOWN = 38; var LEFT = 36; var RIGHT = 39;
  //if( press == UP){console.log(1);}

  //------- 一次定义多个变量,同时赋值 -----------
  // var
  // UP = 37,
  // DOWN = 38,
  // LEFT = 36,
  // RIGHT = 39;

  //-------- 一次声明多个变量,随后赋值-----------
  // var UP,DOWN,LEFT,RIGHT;
  // UP = 37,DOWN = 38,LEFT = 36,RIGHT = 39;
  // console.log(UP,DOWN,LEFT,RIGHT);

  //----------好多个变量值一样--------------
  // var firstNumber = secondNumber = 0;
  // firstNumber  = secondNumber = 20;
  // console.log(firstNumber,secondNumber);


  //如果不使用var 关键字定义变量  该变量会成为全局变量
  // xxx = {
  //   username:'aaa',
  //   password:'12345'
  // };
  // console.log(xxx);
  //变量只需要定义一次,随后再想使用或者改变变量的时候,都不用再使用var关键字.
  // var aa = 1;
  // function bb(){
  //   // var aa = 12;
  //   aa = 12;
  // }
  // console.log(aa);



  //变量可以存储的数据类型
  //javascript中的变量可以存储任何类型的数据.不需要做任何特殊声明
  //数据类型

  //数字(number)              1  1.2
  //字符串(string)            'xxxx'
  //数组(object)              [1,2,3]
  //对象(object)              {name:1,age:2}
  //函数(function)            function(){}

  //布尔型(boolean)            true  false (给if判断提供依据)
  //NULL(object)              null        (用来清空数据)
  //UNDEFINED(undefined)      undefined   (用来检测声明未赋值的变量)
  //javascript代码的执行顺序是自上向下一行一行解释执行,
  //碰到错误行会中断执行
  //如果只声明没有赋值 它的值是undefined;
  function gongchang( bianliang ){
    if( typeof(bianliang) == 'function' ){return 'bianliang 是一个函数';}
    if( typeof(bianliang)== 'string'    ){return 'bianliang 是一个字符串';}
    if( typeof(bianliang) == 'number'   ){return '数字';}
    if( typeof(bianliang) == 'boolean'  ){return '布尔型';}
    if( typeof(bianliang) == 'undefined'){return 'undefined';}
    if( typeof(bianliang) == 'object'){
      if( Array.isArray(bianliang) ){
        return '数组';
      }else if( bianliang == null){
        return '这是一个null';
      }else{
        return '这是一个对象';
      }
    }
    return 'string';
  }

  var test  = {};
  var fanhuizhi1 = gongchang(test);
  console.log(fanhuizhi1);

  var aa = [1,3,4,5,6];
  var fanhuizhi2 = gongchang(aa);
  console.log(fanhuizhi2);

  // var aa = 1;
  // var bb = 1.2;
  // var cc = '这是一个字符串';
  // var dd = ['这','是','数','组'];
  // var ee = {
  //   name:'bill',
  //   age:'12',
  //   money:'a lot'
  // };
  // console.log(aa,bb,cc,dd,ee);

  //------------逻辑操作-----------
};

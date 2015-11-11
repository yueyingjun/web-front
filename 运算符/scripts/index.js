window.onload = function(){
  //运算分类
  //+ - * / %  运算
  //> <　>= <= == === != !== ! 它们会返回true或者false;

  //&&
  //且运算会从左到右计算每一个表达式
  //碰到一个逻辑假(0,NaN,'',false,undefined,nul)
  //就停止运算,得到该逻辑假的值
  //如果它一个逻辑假都没有碰到,会返回最后一个表达式的值.
  var obj = {
    name:{a:3,b:4},
    age:2
  };
  console.log( obj.name && obj.name.c );

  //||
  //或运算会从左到右计算每一个表达式
  //碰到一个逻辑真
  //就停止运算,得到该逻辑真的值
  //如果它一个逻辑真都没有碰到,会返回最后一个表达式的值.
  function kaishipao(s){
    var speed = s||60;
    return true;
  }
  var state = kaishipao();

  //在javascript中当所有的数据类型被强制转为布尔值的时候
  //以下值为假,其他都是真.
  //number     0  NaN
  //string     ''
  //undefined  undefined
  //null       null
  //boolean    false

  //关于语句和表达式
  var a = 12;   //从开始到分号叫做一条语句;
  var c = a > 3;//语句中的有些部分是表达式;
  //表达式一般都是有值的.javascript会对表达式求值

  // 常见运算符号的优先级
  // . [] ()
  // ! delete new
  // + -
  // > < >= <=
  // === != ==
  // &&
  // ||

  //tips 目前的内置函数
  // Boolean()  Number()  String()  typeof()
  // Array.isArray();
  // alert()
  //---------
  // console.log();
  function aa(){}
  console.log(  Boolean(aa())   );
};

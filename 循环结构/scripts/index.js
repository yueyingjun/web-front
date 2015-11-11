window.onload = function(){
  // -------
  var
  aa = 1,             //number
  bb = 1.2,           //number
  cc = 'string',      //string
  dd = [1,2,3,4,5],   //object     Array.isArray();
  ee = {name:1,age:2},//object
  ff = undefined,     //undefined  == undefined
  gg = null,          //object     == null
  hh = function(){},  //function
  ii = true;          //boolean
  //Number()  String()  Boolean();

  //() + - * / %   > < >= <= != === == && || !
  //( )  .  []
  //! delete new ++ --
  //* / %
  //+ -
  //> < >= <=
  //==  !=  ===
  //&&
  //||
  // console.log(  5 && undefined && 4-3 );
  // console.log(  5 || undefined || 4-3 );
  // -- 所有的逻辑假
  // 0  NaN  ''  undefined null false
  // NaN == NaN  (false)   isNaN();
  //一个任意类型的数据,把它转换为数字之后
  //不是NaN  就把它输出


  //-------------------------------------------
  // var plusTen = function( num ){ //plusTen叫做函数的名字
    //写在function后面括号中的 num 叫做函数的形式参数;
    //形式参数可以是多个,也可以没有
    // return  num + 10;
    //return 关键字后面表达式的值 叫做函数的返回值
    //一个函数只能有一个返回值
    //函数碰到return 语句 就会停止顺序执行.
  // };//函数的定义
  // plusTen( 10+3 );
  //函数名+() 叫做函数的调用
  //函数名+() 构成的表达式 的值 == 函数的返回值;
  //函数在调用的时候在括号中写入的表达式叫做函数的实际参数;

  //---- 函数也可以在局部范围内改变代码的执行顺序 ----
  var add = function( x1,x2 ){
    var result = x1 + x2;
    return result;
  };
  add(4,5);

  // 立方和   4 5
  // var ccc = 12, ddd=13;
  // var lifanghe = function( aa,bb ){
  //   return aa*aa*aa + bb*bb*bb;
  // };
  // console.log( lifanghe(ccc,ddd) );
  var sanweishu = function(n){
    var r = 0;
    r = r + n%10;
    n = Math.floor(n/10);
    r = r + n%10;
    n = Math.floor(n/10);
    r = r + n%10;
    n = Math.floor(n/10);
    return r;
  };
  var siweishu = function(n){
    var r = 0;
    r = r + n%10;
    n = Math.floor(n/10);
    r = r + n%10;
    n = Math.floor(n/10);
    r = r + n%10;
    n = Math.floor(n/10);
    r = r + n%10;
    n = Math.floor(n/10);
    return r;
  };
  var wuweishu = function(n){
    var r = 0;
    r = r + n%10;
    n = Math.floor(n/10);
    r = r + n%10;
    n = Math.floor(n/10);
    r = r + n%10;
    n = Math.floor(n/10);
    r = r + n%10;
    n = Math.floor(n/10);
    r = r + n%10;
    n = Math.floor(n/10);
    return r;
  };
  // console.log( wuweishu(34512) );
  //----------------循环结构-------------
  //循环结构也是在局部范围内改变代码的执行顺序

  //在for循环中使用的变量  i j k
  for(var i = 0 ; i<= 100 ; i++ ){
    // console.log(   ( i%2 == 0)?i:'奇数'  );
  }
  // ++ --
  // c++ 作为一个表达式或者某个表达式的一部分
  // 它的规则是先取c得值 然后让c自增1
  // ++c 作为一个表达式或者某个表达式的一部分
  // 它的规则是取c自增1的值, 同时让c自增1;
  // =  *=  +=  -=  %=
  var a = 1;
  a += 2; // a  = a + 2;
  a -= 4;
  a *= 4;
  a /= 4;
  a %= 4;
  //0   1000
  //定义一个变量  he 默认值为0
  //循环开始从 i=0  到  i=1000
  //每次把 he 加上 i 放到 he这个变量里
  var he = 0;
  for(var i = 0; i<=1000; i++ ){
    he = he + i;
  }
  /*
   *  @prama   {number} num
   *  @return  {number}
   *  @example 10   55(1+2+3+4+5+6+7+8+9+10)
   */
  var sum = function(num){
    //防御式编程,永远不要想当然,要考虑函数的所有调用情况
    if( typeof(num) != 'number' ){
      // console.log('传错参数了,参数类型为数字');
      return -1;
    }
    if( num < 0){
      // console.log('请不要传入负数');
      return -1;
    }
    var result = 0;
    for(var i=1; i<= num; i++){
      result +=  i;
    }
    return result;
  };
  // console.log( sum(-20) );
  //45  45*44*43*42*41   1;
  /*
   * @prama  {number} n
   * @return {number}
   * @example 45  45*44*43********1;
   */
  var jiechang  = function(n){
    var result = 1;
    for(var i = 1; i<=n; i++){
      result = result*i;
    }
    return result;
  };
  // console.log(  jiechang(45) );
  //   5   2
  //   3   1
  //   6   4
  //   找出最小的能满足这个条件的人数
  //   遍历0-1000000的数,
  //   %5 == 2  %3==1  %6==4 如果碰到一个满足条件的.
  //   return这个数

  /*
   * @param
   * @return {number}
   * 5 2  3 1  6 4   22
   */
  var dianbing = function(){
    for( var i=0; i< Infinity ; i++){
      if( i%5 == 2 && i%3 == 1 && i%6 == 4){
        return i;
      }
    }
    return -1;
  };

  var jisuanqingkuang = function( range ){
    var jishuqi = 0;
    for(var i=0; i<=range; i++){
      if(i%5 == 2 && i%3 == 1 && i%6  == 4){
        jishuqi ++;
      }
    }
    return jishuqi;
  };
  // console.log(  jisuanqingkuang(9000) );

  var dianbingzuida = function(range){
    for(var i = range; i>0; i--){
      if(i%5 == 2 && i%3 == 1 && i%6 == 4){
        return i;
      }
    }
    return -1;
  };
  var addNumber = function(n){
    // return  ( n == 0 ) ? 0:( (n%9 == 0) ? 9 : n%9 );
  };

  for(var i=0; i<34; i++){
    console.log('hello');
  }
  //确定循环次数的时候,一般都会使用 i递增的形式;
  //让 i 不停的递增,直到i == 34;
  var n = 100,index = 0;
  while( n ){
    var randomNumber = Math.floor( Math.random()*100);
    if(randomNumber == 65){
      n = false;
    }
  }
  //while循环:当括号里的条件为逻辑真的时候,循环一直执行,直到条件为逻辑假;
  var diannaodianshu  = Math.floor(Math.random()*6 + 1);
  document.write('这是电脑的点数:');
  document.write(diannaodianshu);
  document.write('<br/>');
  document.write('这是我的点数:');
  // var zuobi = function(){
  //   var n = Math.floor(Math.random()*6+1);
  //   while( n  < diannaodianshu ){
  //     n = Math.floor(Math.random()*6 +1);
  //   }
  //   return n;
  // };
  // var nidexuanze = prompt('yes or no');
  // while( nidexuanze !== 'yes' ){
  //   nidexuanze = prompt('yes or no');
  // }
  // alert('恭喜');


  //分支结构 循环结构 函数
  //-----------------break continue ------------
  for(var i= 0; i<100; i++){
    if( i%2 == 0 ){
      continue;
    }
    console.log(i);
  }
  //在循环中利用i的值以及i前后的值
  var pow = function(n){return n*n;};
  for ( var i = 0;  i < 100;  i++){
    if( i%2 !== 0){ continue; }
    if( pow(i-2) + pow(i) == pow(i+2)  ){
      console.log(i-2,i,i+2);
      break;
    }
  }
  //如果一段代码中需要3层循环来完成它的逻辑
  //我们可以把它视为错误的代码   n3 n2
  for ( var i = 1;  i <= 10;  i++){
    for(var j = i; j <= 10; j++){
      for ( var k = j;  k <= 10;  k++){
        if( i*i + j*j == k*k){
          console.log(i,j,k);
        }
      }
    }
  }
  // 头  15
  // 脚  40
  // 问  有多少兔 有多少鸡
  var jitu  = function(tou,jiao){
    for(var i = 1; i<=tou; i++){
      for(var j=1; j<=tou; j++){
        if( i+j == tou &&  i*4 + j*2 == jiao){
          return [i,j];
        }
      }
    }
  };
  console.log( jitu(15,40)  );




};

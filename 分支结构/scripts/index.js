window.onload = function(){
  // 在javascript中
  // 代码在正常情况下是按照从上到下的顺序去解释执行的.
  // 解释执行:照顺序执行正确的代码,碰到错误中断;
  // (注意,如果已经确认正确的功能出现了问题,可能是新加入的代码有错误,导致解释执行错乱)
  // (新加入代码的大多数错误都是括号匹配出现问题)

  //-------分支条件可以在局部范围内改变代码的执行顺序-----
  // var aa = 10;
  // aa = aa + 20;
  // if( aa * 2  <  54 ){
  //   console.log(1);
  // }else{
  //   console.log(2);
  // }
  //----省略掉else的情况---
  // if( aa > 12){
  //   console.log('else省略掉的情况');
  // }
  //----if else if  elseif else
  // if(aa > 12){
  //   console.log(1);
  // }else if(aa > 13){
  //   console.log(2);
  // }else if(aa > 14){
  //   console.log(3);
  // }else{
  //   console.log(4);
  // }
  //-------------
  // var b = (5>4)?'11':'22';


  // var
  // cc = 1000,
  // dd = 200,
  // ee = 134;
  // if(cc>dd&&cc>ee){console.log(cc);}
  // if(dd>cc&&dd>ee){console.log(dd);}
  // if(ee>cc&&ee>dd){console.log(ee);}
  // var max = (((cc>dd)?cc:dd )>ee)?((cc>dd)?cc:dd):ee;
  // var max = cc;
  // if(max < dd){ max = dd;}
  // if(max < ee){ max = ee;}
  // console.log(max);

  // var score = Number(  prompt( '请输入分数!' )  ) ;
  // 90 - 100     优秀
  // 80 - 89      良好
  // 70 - 79      正常
  // 60 - 69      及格
  // if(score >=60 && score < 70){
  //   console.log('及格');
  // }else if(score >=70 && score < 80){
  //   console.log('正常');
  // }else if( score < 0 || score>100){
  //   console.log('0-100');
  // }else if( isNaN(score)  ){
  //   console.log('别闹');
  // }
  //单变量多区间值的if判断 都使用 if  else if 的方式
  //把高频区间安排在前面,方便程序少做判断.
  //单变量多值的if判断
  var httpStateCode = 200;
  // switch( httpStateCode ){
  //   case 200:
  //       console.log('ok');
  //       break;
  //   case 301:
  //       console.log('rede');
  //       break;
  //   case 404:
  //       console.log('aaa');
  //       break;
  //   default:
  //       console.log('别闹');
  // }

  //由一个条件来决定某个变量不同的值(一般是两个);
  var isReload = ( httpStateCode == 200 ) ? false:true;

  // if(httpStateCode  == 200 ){
  //   isReload = false;
  // }else{
  //   isReload = true;
  // }
  // if( httpStateCode == 200 ){
  //   console.log('ok');
  // }else if(httpStateCode == 301){
  //   console.log('re');
  // }else if(httpStateCode == 404 ){
  //   console.log('not fond');
  // }else{
  //   console.log('别闹');
  // }

  // 200   ok
  // 301   redirect
  // 404   not found
  // 501   bad gate way
  // xxx   别闹


  // 0  - 59      不及格
  // 100  0       请输入0-100中间的分数
  // abc          别闹.
  // isNaN去抓住非法数字
  //
  //  cc>dd && cc>ee   cc
  //  dd>cc && dd>ee   dd
  //  ee>cc && ee>dd   ee
  //  ( cond ) ? (3+2) : v2;
  //  ( cc和dd中最大的数  > ee )?cc和dd中最大的数:ee;
  // (  ( (cc>dd)?cc:dd )  > ee )?( (cc>dd)?cc:dd ):ee;
};
///1. 整理一下
///2.     139  13  4
          19996999999 88 16 7
function(num){
  888 % 10
  88.8/10 %10  Math.floor(88.8) 88
  return 0-9;
}

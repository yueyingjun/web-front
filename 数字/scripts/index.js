window.onload = function(){
  var chongfu=function(nums){
    var count=1;
    // [1,1,2,2,3,3]; [1,1,2,2,3,3]  [1,2,2,2,3,3]
    // [1,2,2,2,3,3]  [1,2,3,2,3,3]  [1,2,3,2,3,3]
    // [1,2,3]
    for(var i=1;i<nums.length;i++){
      if( nums[i] != nums[i-1] ){
        nums[count]= nums[i];
        count++;
      }
    }
    nums.length = count;
    return nums;
  };
  console.log(chongfu( [1,1,3,2,0,1,2,3,8,8,8,9] ));

  //---------数字------------
  //---数字是一种数据类型,它是不可变的.
  //---数组也是一种数据类型,它是可变的.
  var a = 1;
  var b = a;
  a = 5;

  // 引用:
  // 把一个数组赋值给另一个变量的时候
  // 实际上是赋值的 到该数组的引用
  var c = [ 1,3,4,5,6];
  var d = c;
  c[0] = 100;
  console.log(d[0]);
  //当我们想要复制一个数组的时候,永远不要使用赋值符号.
  //复制一个数组
  var d  = [];
  for(var i=0; i<c.length; i++){
    d.push(c[i]);
  }
  //------------数字的方法----------
  var num = 12;
  // num.toFixed(n)
  // 应用  精确到小数点后n位
  // 函数表达式的值 是一个精确到n位的 字符串类型表示的数字;

  var twoToTen = function(num){
    var arr = [],result=0;
    while(num){arr.push(num%10); num = Math.floor(num/10);}
    for ( var i = 0;  i < arr.length;  i++){
      if(arr[i] === 0){ continue; }
      result += arr[i]*Math.pow(2,i);
    }
    return result;
  };
  console.log(twoToTen(10111));
  var twoToTen2 = function(num){
    var result=0,index=0;
    while(num){
      result += num%10 * Math.pow(2,index++);
      num = Math.floor(num/10);
    }
    return result;
  };
  console.log(twoToTen2(10111));
  var twoToTen3 = function(num){
    num = String(num);
    var result = 0;
    for(var c in num){
      result += num[c] * Math.pow(2,num.length - c - 1);
    }
    return result;
  };
  console.log(twoToTen3(10111));
  //---------------Math-------------
  //ceil floor
  //max  min
  //sqrt pow
  //round
  //abs
  //random


[
  [0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,0,1,1,1,1,1],
]





};

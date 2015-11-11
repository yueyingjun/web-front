window.onload = function(){
  //数据操作  逻辑操作
  //---------数据存储--------------
  //变量  数据类型
  //---------逻辑操作--------------
  //运算符(表达式)
  //分支结构  循环结构
  //---------语言的扩充------------
  //函数
  //随机生成5个数,找出其中最大的.
  var
  a1 = Math.random()*100,
  a2 = Math.random()*100,
  a3 = Math.random()*100,
  a4 = Math.random()*100,
  a5 = Math.random()*100;
  var max = a1;
  if( max < a2){ max = a2;}
  if( max < a3){ max = a3;}
  if( max < a4){ max = a4;}
  if( max < a5){ max = a5;}
  console.log( max );

  //--------数组-------------
  //数组的定义(数组是一种数据的存储方式);
  //怎么去表示一个数组(Array)
  var arr1 = [];//声明了一个空数组;
  var arr2 = [100,200,300,400,500];

  //数组的取值(想从数组中取出值,必须用中括号加下标去取)
  console.log( arr2[2] );

  //修改数组中的某个值
  arr2[3] = 600;
  arr2[20] = 100;  //越界:使用的下标超出数组中的最大下标

  //删除数组中的某个值
  delete arr2[1]; //[100,undefined,300,400,500]

  //数组顺序增加元素
  //[100,200,300,400,500];
  arr2[5] = 600;
  arr2.push(600,700,800,900);

  //数组中可以存储什么类型的元素?
  var any = [
    1,
    '11',
    [1,2],
    {a:1,b:2},
    undefined,
    null,
    true,
    function(){}
  ];
  console.log( any[2][1] );

  //数组的遍历
  for(var i=0; i<8; i++){
    console.log( any[i] );
  }

  //数组中常用的 属性
  var bb = [3,4,5,6,7,'11'];
  console.log( bb.length );
  bb[ bb.length ] = 33;
  console.log( bb[ bb.length - 1] );
  console.log( bb[0] );
  for( var i = 0; i<bb.length; i++){
    console.log(bb[i]);
  }
  //length属性是可设置的
  bb.length = 3;
  console.log(bb);
  bb.length = 7;
  console.log(bb);
  //减小length值 会删除掉数组中的一部分;
  //增大length值 会用undefined去填充增大的部分;

  //--------会改变数组值的一些方法------------
  var dd = [1,2,3,4,5];
  //在数组的开头添加一个元素
  //调用表达式的值是unshift操作完成后数组的长度
  dd.unshift();
  //给数组的末尾增加一个元素
  //调用表达式的值是push操作完成后数组的长度
  dd.push(1,2,3,4);
  //从数组的开头抛出一个元素
  //调用表达式的值就是抛出来那个元素
  dd.shift();
  //从数组末尾抛出一个元素
  //调用表达式的值就是抛出去那个元素
  dd.pop();
  //翻转数组
  //调用表达式的值就是翻转完成后的数组
  dd.reverse();
  //随意的截取数组;
  //调用表达式的值是一个数组,数组里放的是我们截取出的部分
  //n1 n2  从下标n1开始(包括n1自己)往右截取n2个元素
  //n1(+)  从下标n1开始(包括n1自己)往右截取到数组末尾
  //n1(-)  从数组右侧开始往左截取n1个元素;
  var ee = [1,2,3,4,5,6,7,8,9,10];
  var e1 = ee.splice(0,3);  //e1:       ee
  var e2 = ee.splice(5);    //e2:       ee
  var e3 = ee.splice(-3);   //e3:       ee
  // [3,2,1,2, 1,2,0,34]
  // [1,2,0,34, 3,2,1,2]
  // nums  k=4
  /*
   * @param { number[] } num
   * @param { number } k
   * @return
   * @189 example  [1,2,3,4,5,6,7,8] 3 [4,5,6,7,8,1,2,3]
   */
  var rotateArrayByK = function(num,k){
    var tmp = num.splice(k);
    var len = tmp.length;
    for(var i = 0 ; i<len; i++){
      num.unshift(tmp.pop());
    }
  };
  var aa = [1,2,3,4,5,6,7,8];
  console.log(aa);
  rotateArrayByK(aa,2);
  console.log(aa);

  /*
   * @param { number[] } num
   * @param { number } k
   * @return
   * @189 example  [1,2,3,4,5,6,7,8] 4 [5,6,7,8,1,2,3,4]
   */
  //  1.用数组表示一个数字 [5,6,7] 代表567  把这个数+1 同样还用数组表示  [5,6,8]        [9,9,9] [1,0,0,0]
  //  2.写一个函数,接受两个参数 一个数组 一个数字 移除掉这个数组中所有等于这个数字的元素 返回新的数组长度
  //    [3,3,3,3,3,1,2,3,4,5,3,2,1]  移除3  [1,2,4,5]
  //  3.写一个函数,接受一个参数,让所有的相邻重复元素只保留一个
  // 1思路:  66
  // 判断数组最后一位  如果比9小  最后一位+1  返回数组
  // 如果就是9 把它写为0 找上一位 如果还是9 继续改成0 继续往上找
  // 直到找到一个不是9的  把它加1       [3,9,9,9]  [4,0,0,0]
  // 如果全是9,在数组开头unshift 一个1; [9,9,9,9] [1,0,0,0,0]
  // 2思路:  26 27 (第3题思路同2,让遍历的i从1开始,比较 i-1 和 i)
  // 维持一个变量index从0一直增加
  // 遍历数组
  var remove = function( nums,val ){
    var count = 0;
    for( var i=0; i<nums.length; i++ ){
      if( nums[i] != val ){
        nums[count]  = nums[i];
        count ++;
      }
    }
    nums.length = count;
    return nums;
  };
  console.log(  remove([3,4,5,4,3,3,3,9,3],4)  );
  // [3,4,5]  [3,4,6]
  var addOne  = function(nums){
    if( nums[ nums.length - 1] < 9 ){
      nums[ nums.length - 1 ] += 1;
      return nums;
    }
    var l = nums.length - 1;
    while(  nums[ l ] == 9 ){
      nums[l] = 0;
      if( l-- == 0 )    { nums.unshift(1); break;}
      if(nums[ l ] != 9){ nums[ l ] +=  1; break;}
    }
    return nums;
  };
  // 在设计函数的时候,
  // 不要让所有的return语句都出现在条件或循环内部
  // 为了避免一个本来应该有返回值的函数没有任何return;
  console.log(  addOne( [9,9,9,9,9,9] )   );












  //-----------------------------------
  //利用循环去创建一个数组
  //[2,3,8,19,20]
  var s = [];
  for(var i = 0; i<5; i++){
    s.push(Math.floor(Math.random()*100)) ;
  }
  // console.log(s);

  //利用循环去操作一个数组
  // for(var i = 0; i< suijishuzu.length ; i++){
  //   if ( suijishuzu[i]%2 == 0){
  //     suijishuzu[i] = 0;
  //   }else{
  //     suijishuzu[i] *= 3;
  //   }
  // }
  // console.log(suijishuzu);
  var max  = s[0];
  for(var i = 0; i<s.length; i++){
    if( max < s[i] ){
      max  = s[i];
    }
  }
  var aa = [3,4,5,8,9];
  var bb = [];
  // 利用 unshift 给bb添加元素
  // bb  [9,8,5,4,3]
  for(var i = 0 ; i<5; i++){
    bb.unshift( aa.shift() );
  }
  // aa  [ 1,3,2,2,1,12,0,0,0 ]
  // 设置一个变量index = 0;
  // 遍历aa
  // 碰到一个非0的数 就让 aa[index++] 等于那个数
  // 这样可以把所有的非0数放到数组的最前面
  // 再遍历一次aa  从index开始遍历
  // 随后数组中的每个值都置为0
  // 283;

  var
  cc = [1,0,3,4,5,6,8],
  len = cc.length;
  for ( var i = 0;  i < len;  i++){
    if( cc[i] == 0){
      cc[ cc.length - 1 ] = 0;
    }
  }
  //永远不要在循环内部随意改变数组的长度
  //小优化 循环判断条件中用到的Array.length
  //可以提前存储在一个变量中;
};

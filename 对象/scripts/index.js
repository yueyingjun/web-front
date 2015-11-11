window.onload = function(){// 总结
  // var a=1,b=2,c=3;
  // typeof() 对数据的检测结果

  // 'number' 'string' 'boolean' 'undefined' (null)
  // 以上为不可变数据类型

  // 'object'(Array)  'object'(Object)  'function'(Function)
  // 以上为可变的数据类型 以"键 - 值"对的方式存储

  // [1,2,4,5]; { 0:1, 1:2, 2:4, 3:5, length:4};
  // {name:'bill Gates', age:'74'}

  // ! ()
  // [] . delete new ++ --
  // % * /
  // + -
  // == != === >= <= > <
  // &&
  // ||
  // ?:

  // if()   if()else()  if()else if()else if()else() // 单值多区间 (if else if else if)
  // 单变量多值
  // var a = 300;
  // switch(a){
  // case 300:
  //   a += 200;
  //   break;
  // case 400:
  //   a += 100;
  //   break;
  // default:
  //   a += -100;
  // }
  // 由某个条件决定变量的两个值
  // var ee = ( 5>4 )?3:4;

  //循环结构  break  continue
  // var cc = [];
  // for(var i=0; i<12; i++){
    //调整if括号里的逻辑  让所有主要执行的代码都出现在if中;
    // if( !cc[0]  ){
    //   1
    //   2
    //   3
    //   4
    //   5
    // }else{
    //   1
    // }
  // }
  // while(  ){  //括号里的表达式为真则一直执行
  // }



  // Boolean
  // ---------javascript所有的假值--------
  // 0 NaN '' undefined null false
  // Boolean()

  // Number
  // -12
  // NaN   isNaN()
  // 10/0  Infinity
  // 在控制台定义一个变量 var a  = 5;  通过a.可以调出来
  // toFixed();
  // Math.PI  Math.E
  // ceil  floor round
  // pow  sqrt
  // max  min
  // random  abs

  // String
  // var s = '12313';
  // s = 'aaa'
  // s[3]
  // 字符串的连接  '' + a + + + + +;
  // 字符串累加连接
  // var s = '0123456789';  s = s + xx; s += xx;
  // for ( var i = 0;  i < 10;  i++){
  //   s =  s + i;
  // }
  var s = 'ab c fdfefg';
  // s.charCodeAt(1)     String.fromCharCod(987);
  // s.trim()  s.trimLeft()  s.trinRight()
  // s.indexOf('fd')  s.lastIndexOf('f')
  // s.endsWidth('efg')  s.startsWidth('ab ')
  // s.slice( -3 )    ->  s.subString()  s.subStr(3)
  // s.toLowerCase()  s.toUpperCase();
  // s.length;


  //-----------------------------------------------------
  // 数组
  // var arr = [1,2,3,4,5];
  // 数组中可以放任何类型的数据
  // 增 删 改 查
  // arr[arr.length] = 6;
  // delete arr[0];
  // arr[13] = 6;
  // console.log( arr[10000] );
  // 数组中的方法
  // arr.push() arr.unshift()  arr.pop()  arr.shift()
  // arr.splice(-3)   //arr.length = arr.length - 3;
  // arr.reverse()
  // ----
  // arr.slice(1,2)  arr.concat()
  // 引用
  var a = '1234';
  var b = a;
  a = '2345';
  var aa = [1,2,3,4,5];
  var dd = aa;
  var cc = [1,2,3,4,5];
  //判断两个数组中的元素是否一一相等
  var equalArray = function(arr1,arr2){
    if ( arr1 == arr2 ){ return true; }
    if ( arr1.length != arr2.length  ) { return false;}
    for(var i =0 ; i< arr1.length; i++){
      if( arr1[i] != arr2[i] ){return false;}
    }
    return true;
  };
  //-----------------------------------------------
  var obj = {
    a:101,
    b:202,
    c:3333,
    d:111,
    e:3333
  };
  console.log( obj.f);
  if( obj.f ){
    obj.f  =  obj.f + 1;
  }else{
    obj.f = 1;
  }
  //-------------------------------------
  // {a:23,b:345,c:22,d:21......................}
  var s = 'long long ago there was a story.... that story was very long .........';

  var countLetter = function(s){
    var dict = {};
    for ( var i = 0;  i < s.length;  i++){
      var letter = s[i];
      if( !dict[ letter ]) {  dict[ letter ] = 1; }
      else{ dict[ letter ]+= 1; }
    }
    return dict;
  };
  console.log( countLetter( s ) );





  // 找出一篇英文文章中  每个字母出现的频次
  // 测试足够多的样本  根据结果设计一个你认为理想的键盘


  //  [1,2,3,4,5,6,7]
  //  检测数组中是否出现重复元素 出现返回true  未出现返回false;
  //  21  5050
  var contaiD = function(arr){
    for(var i=0; i<arr.length; i++){
      for(var j=i+1;j<arr.length; j++){
        if( arr[i] == arr[j]) return true;
      }
    }
    return false;
  };
  var contaiD2 = function(arr){
    var zidian = {};
    for(var i = 0 ; i<arr.length; i++){
      if( zidian[ arr[i]  ] ){
        return true;
      }else{
        zidian[ arr[i]  ] = true;
      }
    }
    return false;
  };



  // ---------------------对象-------------------------
  // 对象是一种由  属性:值 对 构成的 可变的数据存储方式
  // 对象的定义( 字面量 )
  // 姓名   年龄  性别  年级  学号  身份证号
  // 张三   14    男   3     003  10xx
  // 苹果  3斤
  // 鸡蛋  5个
  // 电脑  20
  // 卡车  2
  //js中所有的可变数据类型都是由对象这种 属性:值对 组成的;
  //1  '12323' undefined  null //true false
  //数组  对象  函数
  var shoppingList = {
    apple:'3kg',
    egg:'3',
    computer:20,
    car:2
  };

  var jobs = {
    name:'jobs',
    age:'unknow',
    title:'Apple inc CEO',
    'marjor-work':'invited iPhone'
  };
  var cc = {
    name:'jobs',
    age:'unknow',
    title:'Apple inc CEO',
    'marjor-work':'invited iPhone'
  };
  //对象的读取
  console.log( jobs['title'] ); console.log( jobs.title );
  //更新元素
  jobs.title = 'Google in CEO';
  //新增元素
  jobs.money = 'a lot';
  //删除元素
  delete jobs.name;
  // 对象是引用


  // 对象的遍历
  var b = [ 11,2,3,4,5,6 ];
  for(var i=0; i<b.length; i++){
    console.log(b[i]);
  }
  //第一种方式
  var bb = {name:1,age:3,number:4};
  for ( var l  in  bb ){
    console.log( l, bb[ l ]);
  }
  //这种方式的缺点 顺序不可控
  bb.sex = 'nan';
  for ( var l  in  bb ){
    console.log( l, bb[ l ]);
  }
  //第二种  顺序可控的遍历方式
  var  index = ['name','sex','age','number'];
  for ( var i = 0;  i < index.length;  i++){
    console.log( index[i], bb[ index[i] ]);
  }
  // 1.建一个空字典  遍历arr 在arr中碰到一个字典中没有的元素, 就把它作为属性放进字典,值设置为它的位置  如果碰到字典的属性中有的元素,就比较现在的遍历位置和该属性中放置的上次它出现的位置, 看这两个位置之间的差是否在k范围内,如果在,返回true    如果遍历完都没有符合条件的,返回false;
  // 2.建一个字典  遍历数组, 以数组中的元素为属性,出现次数为值构建这个字典 ,构建完成后  遍历这个字典, 从它里面找出次数最多的那个属性.把那个属性记录在某个变量中  返回这个变量

  // 217 找出数组中有无重复元素
  // 219 找出数组中 k 步内有无重复元素
  // 169 找出数组中出现次数最多的元素

  var aa = [5,4,3,2,1,1,1,1,1,0];
  var hasRepeatElement = function(arr){
    var dict = {};
    for( var i=0; i<arr.length; i++){
      if( !dict[ arr[i] ] ){
        dict[ arr[i] ]  = 1;
      }else{
        return true;
      }
    }
    return false;
  };







  var bb = { a:12, b:13, c:5, d:22, e:33, f:12, h:22};
  var zongcishu = 0;
  for(var l in bb){
    zongcishu += bb[l];
  }
  for(var l in bb){
    bb[l] =  ( bb[l]/zongcishu ).toFixed(3);
  }
  console.log(bb);



  var v = ['a','b','c','e','f'];
  // 0 1 2 3 4 5
  o = {'a':1,'b':2,'c':3,'d':4,'e':5};
  // o['a']
  // o.a
  o.a = 3;
  delete o['b'];
  for(var i in o){
    console.log(o[i]);
  }

  var b = ['d','c','b'];
  for ( var i = 0;  i < b.length;  i++){
    console.log( o[ b[i] ] );
  }


  var o = {a:1,b:2,c:3,d:4,e:5};
  var cccc = o;
  var dddd ={a:1,b:2,c:3,d:4,e:5};
  console.log(cccc == o);
  console.log(dddd == o);

  //-----------------------------------
  var cc = 'abcdefaeb';
  var dict = {};
  // var dict = {a:2,b:2,c:1,d:1,e:2,f:1};
  for(var i =0 ; i<cc.length; i++){
    if( !dict[ cc[i] ] ){
      dict[ cc[i] ]  = 1;
    }else{
      dict[ cc[i] ] += 1;
    }
  }
  var arr = [
    '53..7....',
    '6..195...',
    '.........',
    '...3.....',
    '.........',
    '.........',
    '.........',
    '.........',
    '.........'
  ];
  var containD = function(s){
    var dict = {};
    for ( var i = 0;  i < s.length;  i++){
      var index = s[i];
      if( index == '.') {continue;}
      if( !dict[index] ){
        dict[index] = true;
      }else{
        return true;
      }
    }
    return false;
  };
  var isValidShuDu = function(sudu){
    for ( var i = 0;  i < sudu.length;  i++){
      if( containD( sudu[i] ) ){ return false;}
    }
    for ( var i = 0;  i < sudu.length;  i++){
      var s = '';
      for ( var j = 0;  j < sudu.length;  j++){
        s += sudu[j][i];
      }
      if( containD( s ) ){return false;}
    }
    for ( var i = 0;  i < sudu.length;  i++){
      var hang = Math.floor(i/3)*3;   // 3 0
      var lie  = i % 3 * 3;
      var s = '';
      for ( var row = hang;  row < hang+3;  row++){
        for ( var col = lie;  col < lie+3;  col++){
          s += sudu[row][col];
        }  // 36
      }
      if(containD(s)){return false;}
    }
    return true;
  };

  //---------------------
  var ha =function (nums,k){
    // if (nums.length ==2&&nums[0]==nums[1]){
    //   return true;
    // }if(nums.length==2&&nums[0]!=nums[1]){
    //   return false;
    // }
    // [1,2,3,1,5,6,7,8,9,10,11,12,10]
    for(var i=0;i<nums.length;i++){
      var aa={};
      for(var j=i;j<=k+i&&(k+i<nums.length);j++){
        if(aa[nums[j]]){return true;}
        else{aa[nums[j]]=true;}
      }
    }
    return false;
  };
  //-------------------------

  var arr = [1,2,3];

  // var arr = {
  //   0:1,
  //   1:2,
  //   length:2;
  // };
  // arr.pop();

  // var maokedongwu  = {
  //   mao:'you',
  //   zhuazi:'you',
  //   huxu:'you'
  // };
  // var mao = Object.create(maokedongwu);
  // mao.zhualaoshu = 'hui';
  // mao.shangshu = 'hui';
  // var wojiademao = Object.create(mao);
  // wojiademao.maimeng = 'hui';
  // 理解 > 应用

  // ---------------------------------------------------
  // 所有的对象 都以一个Js提供的原始的对象(Object)作为原型
  // 以 { } 直接创建的对象, 会有一个隐藏的连接到原始对象得属性

  // var a = {aa:1,bb:2};
  // var b = Object.create(a);
  // Object.create()  方法的意思是:以a作为原型创造一个对象b;
  // 以这种方式创建的对象b,能访问a对象身上的所有属性.
  // ( 对象 能访问自己原型链上 的任何一个对象的属性 )

  // var arr = Object.create(Array);
  // arr[0] = 1;
  // arr[1] = 2;
  // arr[2] = 3;
  // arr['length'] = 3;
  // var arr = [1,2,3];




  // 对拥有原型链的对象进行增删改查时需要注意的事项

  // 增加一个属性不会增加到原型身上
  // 修改一个它本身没有,但是原型身上有的属性 相当于增加

  // 删除一个属性a 会让原型中的a(如果有的话)浮现(在读取的时候)
  // 我们能删掉原型身上的属性吗? delete运算符不会删掉原型身上的属性
  // 删除原型对象身上的某个属性,会让所有以该对象为原型的对象丢失该属性

  // 读取规则:会顺着原型链从上到下去找属性,找到就返回,没找到返回undefined

  // 有一些特殊的对象(函数,数组),我们在控制台中看不到它的结构
  // 需要用断点去查看他们的对象结构

  // 1.在控制台中尝试有原型链的对象的增删改查
  // 2.利用断点查看一个数组对象的原型链



  //对象(数组是一个特殊的对象)中可以存储任何类型的值;
  var obj = {
    n:1,
    s:'abcd',
    b:true,
    a:[1,2,3,4,5],
    o:{a:1,b:2},
    f:function(){},
    //<s> u:undefined, </s>
    l:null
  };



  //////////////////////////

  var sort=function(arr1,arr2){
    var r=[];
    while(arr1.length!=0&&arr2.length!=0){
      if(arr1[0]<arr2[0]){
        r.push(arr1.shift());
      }else{
        r.push(arr2.shift());
      }
    }
    for(var i=0;i<arr1.length;i++){r.push(arr1[i]);}
    for(var i=0;i<arr2.length;i++){r.push(arr2[i]);}
    return r;
  };
  var split=function(arr){
    if(arr.length==1){return arr;}
    var i=Math.floor(arr.length/2),
        left=arr.slice(0,i),
        right=arr.slice(i);
    return sort(split(left),split(right));
  };

  // 在javascript中没有递归优化(尾递归优化)
  // 递归层数过多会报错

  split( [192,34,1,8, 24,33,0,11] );
  // 128


//     xxxxxxxx   128
// 1   xxxx  xxxx
// 2  xx xx  xx xx
// 4 x x x x x x x x
// 8
// 16

  // 1. return  sort( split([192,34,1,8]), split([24,33,0,11]) )

  // 2. return  sort( split([192,34]), split([1,8]) )
  // 3. return  sort( split([192]), split([34]) )
  // 4. return  sort( split([1]), split([8]) )

  // 5. return  sort( split([24,33]),split([0,11]) )
  // 6. return  sort( split([24]),split([33]) )
  // 7. return  sort( split([0]),split([11]) )
  var count = 0;
  var sort = function(){count++;};
  var splict =function(){};
  var randomArray = [];
  for ( var i = 0;  i < 100;  i++){
    randomArray.push(Math.floor( Math.random()*100 ));
  }
  split( randomArray );
  console.log(count);




};

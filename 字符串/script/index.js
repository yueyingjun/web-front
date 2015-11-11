window.onload = function(){
  //------- 数据类型:字符串    ----------
  //------- 数据存储 和 逻辑操作 -----
  // var root = {
  //   c:{e:1,f:2},
  //   d:{g:3,h:4}
  // };
  //    root
  //   c   d
  // e  f g  h
  // var arr = []; // push  pop shift unshift
  // reverse   splice(3,5)
  // slice  concat
  // Math
  // PI
  // floor ceil round
  // pow  sqrt
  // random abs
  // max min
  // var a = [1,2];
  // Math.max(a[0],a[1]);
  var s = String('abcdef');
  var arr = [1,2,3,4,5];
  //重要: 字符串和数字一样是不可变的;
  //字符串的存储方式和数组类似(当把它当一个对象去用的时候);
  // var s = {
  //   0:'a',
  //   1:'b',
  //   2:'c',
  //   3:'d'
  // };
  //关于字符串不可变的例子
  var s  = 'abcdefg';
  // console.log(s[3]);
  s[3] = 'z';
  // console.log(s);
  // 因为字符串是不可变的,
  // 所以几乎所有字符串身上的方法都会返回一个新的字符串
  //------字符串的连接------
  var tishi = '这是你的用户名';
  var userName = '张三';
  var zuhe = tishi + userName;
  //  + 号作用于两个字符串的效果就是把他们连接起来
  //  '' + 9  就会把这个数字转成字符串
  //  'aa' + 'bb' + 'cc' + 'ee' 可以拼接很多;
  //  'aa' +  c.pop()  + 'dd' + Math.random();
  //  连接表达式中只要出现一个字符串类型的,最终结果就一定是一个字符串
  // -------字符串常用方法-------------
  // n代表一个数字  s代表一个字符

  // 去除字符串左右的空格
  // s.trim() //s.trimLeft() //s.trimRight()
  // 截取字符串中的一部分 返回的是一个新字符串
  // 1个参数 5    从下标5到结束(包括下标5)
  // 1个参数 -3   从右开始截取3个
  // 2个参数 3 6  下标 >=3 和 <6 的字符串
  // s.slice(start,end)    --> subString  subStr
  // 查找x这个字符串在s中第一次出现的位置
  // 如果没找到 返回-1  找到 返回位置的下标
  // s.indexOf(x)
  // 查找x这个字符串在s中最后一次出现的位置
  // 如果没找到 返回-1  找到 返回位置的下标
  // s.lastIndexOf(x)
  // 查找n这个下标位置的字符的ASCII码
  // s.charCodeAt(n)
  // 字符串大小写转换 生成一个转换后的字符串
  // s.toUpperCase(); // s.toLowerCase();
  // 一般用来检测前缀 和 有规律的结尾
  // 返回布尔值 true or false
  // s.endsWith(s) // s.startsWith(s)

  var lianxi = '   -webkit-1ni      ni         -moz-   ';
  // 1.去掉开始和结尾的空格 ,然后把数字1后面的两个字符大写,
  // 2.如果它以-moz-结尾,开头7个字符大写
  // 3.找到'-' 最后一次出现的位置 把它前面的3个字符移除;


  // console.log( String.fromCharCode(10000) );
  // for(var i =10000 ; i< 20000; i++){
  //   console.log( i, String.fromCharCode(i) );
  // }

  var s = 'abcdefg';
  console.log( s.charCodeAt(1) );
  //遍历一个字符串
  for(var i=0; i<s.length; i++){
    console.log( s[i], s[i].charCodeAt(0)  );
  }
  //把1到100的所有的偶数拼成一个字符串;
  var ns = '';
  for(var i = 0; i<s.length; i++){
    if(i%2 == 0){
      ns = ns + i;
    }
  }
  //反着遍历字符串
  var ss  = 'abcdef';
  for(var i = ss.length-1; i>=0; i-- ){
    console.log(ss[i]);
  }
  //把一个字符串末尾的空格去掉
  var ss = '   adfafa   adfafa   fadfa     ';
  var count = 0,ns = '';
  for(var i = ss.length-1; i>=0; i--){
    if( ss[i] == ' '){count++;}else{break;}
  }
  for(var i=0; i< ss.length - count; i++){
    ns += ss[i];
  }
  //一个末尾没有空格的字符串' afafa  afafa';




  //1. 58.'    Hello  world   '  函数返回最后一个单词的长度
  //2. 125.' abC,l,   cBA' 这样一个字符串判断它是不是回文(abclcba)
  //3. 20.'(){[]'       '( ,aacc{ee [ ,:;{for ()}]})'
  // 这样一个字符串  判断它的括号匹配是不是正确的



  // 1.返回字符串中最后一个单词的长度
  //声明一个空字符串  ns 用来存储最后一个单词  //去掉原字符串中右侧的空格
  //反序遍历原数组 每次拿出一个字符累加到ns 碰到空格就停止; //返回新字符串 ns 的长度
  // 2.回文判断  'aBc:""d,  ,CBa'
  // 声明一个空字符串 ns // 遍历字符串  所有字符码不在a-z A-Z之间的字符都不要累加到ns
  // 净化完成之后,ns 转成全小写字母或全大写字母
  // 遍历ns  执行 ns.length/2 次     // 每次比较 ns[i] 和 ns[ns.length-i-1]
  // 只要出现一个不相等的,就返回false; 全相当 返回true;
  // 3.括号匹配  '(){}[]';
  //声明一个空数组 n[]
  //每碰到 ( ) { } [ ]中的任意一个,就把它push到n;
  //每次push之前要先做检测,
  //看看刚遇到的这个符号和n中的最后一个是否是一对
  //如果是一对,就不要push了,从数组中pop一个出去
  //最后如果是空数组,那就是匹配,非空,则为不匹配
  //如何判断他们是否为一对?  提示()的码相差1 []码相差2 {}码相差2;
  // 58  125 20
  //-------------------------------------------------------
  var lastWordLength = function(s){
    var count = 0; s = s.trimRight();
    for( var i =s.length - 1; i>=0; i-- ){
      if( s[i].charCodeAt(0) == 32  ){break;}
      count++;
    }
    return count;
  };
  console.log(  lastWordLength(' hello    workd    '));
  //-------------------------------------------------------
  //-------------------------------------------------------
  var isHuiWen = function(s){
    var ns = '';
    for(var i = 0; i<s.length; i++){
      if( s[i] >= 'a' && s[i]<='z' || s[i]>='A'  && s[i] <= 'Z'){ns += s[i];}
    }
    ns = ns.toLowerCase();
    for ( var i = 0;  i < ns.length/2;  i++){
      if(ns[i] !== ns[ns.length-i-1]){return false;}
    }
    return true;
  };
  console.log(isHuiWen('  aBck1,;;;;;  : 1KCbA  ')); // abckkcba
  //------------------------------------------------------------------


  var isPiPei = function(s){
    var stack = [];
    for( var i=0; i<s.length; i++){
      if(s[i] == '('||s[i] == ')'||s[i] == '['||s[i] == ']'||s[i] == '{'||s[i] == '}'){
        if( stack[0] ){
          var step = s[i].charCodeAt(0) - stack[stack.length-1].charCodeAt(0);
          if( step == 1 || step == 2){stack.pop();}else{stack.push(s[i]);}
        }else{
          stack.push(s[i]);
        }
      }
    }
    return !stack.length;
  };
  console.log( isPiPei('(....{adfa[] }) '));
};

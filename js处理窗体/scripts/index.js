window.onload = function(){
  //客户端Js的执行顺序
  //1.从头到尾解析所有的js代码
  //2.浏览器得到交互操作(鼠标操作,键盘操作,时间,其他)之后,调用已经定义过的函数

  // var fn  = function(){
  //   var c = 12;
  //   return function(){
  //     console.log(c);
  //   };
  // };
  // setTimeout(fn(),2000);
  // setTimeout(function(){
  //   console.log(22);
  // },1000);

  // for ( var i = 0;  i < 10;  i++){
  //   setTimeout(function(){
  //     console.log(i);
  //   },1000);
  // }
  // for ( i = 0;  i < 100;  i++){
  // }
  // var a1 = setTimeout(function(){
  //   console.log(333);
  // },1000);
  // var a2 = setTimeout(function(){
  //   console.log(4);
  // },1000);
  // var arr = [];
  // for ( var i = 0;  i < 5;  i++){
  //   arr.push( setTimeout( function(){console.log(1);} , 1000) );
  // }
  // clearTimeout(a1); //接受一个计时器编号,停掉那个计时器

  // console.log(a1,a2);
  // console.log(arr);

  // setTimeout函数的返回值 是一个计时器编号  (在webkit浏览器中)
  // 编号的规则为: 编号从1开始,
  // 在页面从头到尾执行的过程中,每碰到一个setTimeout函数
  // 编号+1;

  //告诉系统多少时间之后调用一个函数  &&  仅调用一次
  //一般用来做延时操作

  // var fn = function(){
  //   console.log('我会在5s之后出现');
  // };
  // var timerId = setTimeout(fn,5000);
  // clearTimeout(timerId);

  // setInterval();  clearInterval();
  // var cc = setInterval(function(){
  //   console.log('setInterval,1s');
  // },1000);
  // console.log(cc);
  // 1 2 3 4 5 6 7 8 9 10
  // var i = 1;
  // var fn  = function(){
    // console.log(i);
    // if(i == 10){
    //   clearInterval(timerId);
    // }
    // i = i + 1;
  // };
  // var timerId = setInterval(fn,1000);
  // setTimeout(function(){
  //   clearInterval(timerId);
  // },11000);

  var el =  document.getElementById('d');
  el.style.marginLeft = '100px';

  var margin = 100;
  var move = function(){
    el.style.marginLeft = margin + 'px';
    if(margin == 500){
      clearInterval(cc);
    }
    margin += 1;
  };
  var cc = setInterval(move,10);




  var el2 = document.getElementById('e'),
      left = 0, top = 0;
  var cishu      = (innerHeight-102) /1;
  var zengliang  = (innerWidth -102)  /cishu;
  var xiepao = function(){
    el2.style.top  = top + 'px';
    el2.style.left = left + 'px';
    top  += 1;
    left += zengliang;
    if(top == innerHeight - 102){
      clearInterval(ee);
    }
  };
  var ee = setInterval(xiepao,5);
  // 1.var el = document.getElemenetById('string')
  // 2.var els = document.getElementsByClassName('string')

  // 3.el.style.width = '120px';
  // 4.el.innerHTML  = 5;

  // 5.el.onclick = function(){
  //    location.reload();
  // }

  // 6.location.reload()  location.assign()  location.replace()
  // 7.setTimeout()  setInterval()






  // -------------------------------------
  // location
  // location.href      获取url
  // location.port      获取端口号
  // location.protocal  获取协议

  // location.assign()  把当前url替换成新的  参数是字符串 采用相对路径
  // location.replace() 同assign() 但是不会产生历史记录
  // location.reload()  重新载入当前页面

  // location.assign('login.html');




  // history

  // history.length;
  // history.forward();
  // history.back();
  // histroy.go(-2);
  var aElement = document.getElementById('click');
  aElement.onclick = function(){
    window.open('login.html','login','width=800');
  };











};

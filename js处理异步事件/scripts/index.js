window.onload = function(){
  // 基础部分
  // number  string  null undefined Boolean  -> Array  Object  Function
  // + -  >= <= %  &&
  // while  for   if else  elseif switch
  // var arr = ['a','b','c','d','e'];
  // console.log(arr);
  // var o1 = {a:1,b:2};
  // var o2 = Object.create(o1);
  // o2.c = 3;
  // o2.d = 4;
  // var fn  = function(){
  //   console.log(1);
  // };

  //函数对象的特有属性  prototype
  // var Document = {
  //   aa:1,
  //   bb:2,
  //   cc:3,
  //   dd:function(){
  //     console.log(this.aa);
  //   }
  // };
  // 创建对象的另外一种方式.(非常常用)
  // var daxiang = function(tui,bizi){
  //   this.tui =  tui||4;
  //   this.bizi = bizi||'chang';
  // };
  // daxiang.prototype.cai = function(){
  //   console.log('cai cai cai');
  // };
  // daxiang.prototype.heshui = function(){
  //   console.log('heshui, heshui');
  // };
  // var mengma1 = new daxiang(8,'duan');
  // var mengma2 = new daxiang();
  // mengma1.cai();
  // mengma2.heshui();
  //----------------------------------
  //-------------------------
  var Circle = function(x,y,r){
    this.x = x||10;
    this.y = y||10;
    this.r = r||10;
  };
  Circle.prototype.juli = function(){
    return  Math.sqrt( Math.pow(this.y,2) + Math.pow(this.x ,2) );
  };
  Circle.prototype.mianji = function(){
    return Math.PI * Math.pow(this.r,2);
  };
  Circle.prototype.draw = function(){
    var el = document.createElement('div');
    el.style.width =  2*this.r + 'px';
    el.style.height = 2*this.r + 'px';
    el.style.borderRadius =  '50%';
    el.style.position = 'absolute';
    el.style.top =  this.x - this.r + 'px';
    el.style.left = this.y - this.r + 'px';
    el.style.opacity = '0.5';
    var red  = Math.floor(Math.random()*255);
    var green  = Math.floor(Math.random()*255);
    var blue  = Math.floor(Math.random()*255);
    el.style.background = 'rgb('+red+','+blue+','+green+')';
    var body = document.getElementById('body');
    body.appendChild(el);
  };
  var index = 0;
  var timerId  = setInterval(function(){
    var x = Math.floor( Math.random()*(innerHeight - 50) );
    var y = Math.floor( Math.random()*(innerWidth-50) );
    var r = Math.floor( Math.random()*30);
    var c  =  new Circle(x,y,r);
    c.draw();
    index++;
    if(index == 30){ clearInterval(timerId);}
  },5);
  // new关键字 + 函数调用表达式 会创建一个对象
  // 这个对象并不以那个函数为原型,而是以函数身上的某个属性作为原型
  // 函数身上的prototype这个属性.


  // var d = document;
  // var el = document.querySelector('#test');

  //var el = document.getElmentById()
  //var nel = document.createElement();
  //document.getElementsByClassName()
  //document.querySelector()
  //document.querySelectorAll()

  //el.children  el.lastElementChild  el.firstElementChild
  //el.parentElement  el.nextElementSibling  el.previousElementSibling

  //el.parentElement.appendChild(nel);
  //el.parentElement.insertBefore(nel,el.firstElementChild);
  //el.parentElement.removeChild(el.lastElementChild);

  //el.offsetTop  el.offsetLeft  el.getBoundingClientRect()
  //document.body.scrollTop
  //innerWidth  innnerHeight
  //getComputedStyle(el)


  //-----------------------------------------------
  // var els  = document.getElementsByClassName('aaa');
  // for ( var i = 0;  i < els.length;  i++){
  //   els[i].onclick = function(){
  //     console.log(1);
  //   };
  // }
  //事件对象
  // document.onclick = function(e){    //e被称为事件对象
  //   //e.clientX  e.clientY
  //   if( e.altKey && e.shiftKey){
  //     location.reload();
  //   }
  // };
  var body = document.getElementById('body');
  var el  = document.createElement('div');
  var kaiguan = false;
  document.onclick = function(e){
    if(e.shiftKey){
      el.setAttribute('class','shikongbing');
      body.appendChild(el);
      kaiguan = true;
      return;
    }
    if(kaiguan){
      el.style.top = e.clientY - el.offsetWidth/2 + 'px';
      el.style.left = e.clientX -el.offsetHeight/2 + 'px';
      el.style.opacity = '0.1';
      kaiguan = false;
      var  oo = 0.1;
      clearInterval(timerId);
      var timerId = setInterval(function(){
        el.style.opacity = oo;
        oo += 0.9/100;
        if(oo>=1){clearInterval(timerId);kaiguan = true;}
      },10);
    }
  };
  //1.摁住shift单击的时候在页面左上角创建一个div
  //2.单击的页面任何位置 让该div去到该位置
  //3.让div到达你点击的位置时处于半透明状态,隔一段时间透明度才会变成1;
  //4.给你的div设置一个默认速度,让他跑的越远,冻结时间就越长;
  //5.冻结期间是不能再移动的.
  // 6.试着操作多个
  //事件原理...浏览器监测到某种行为,帮我们自动调用一个写好的函数
  //事件对象...浏览器在调用这个写好的函数时,会向这个函数传递参数,
  //           这个参数是一个对象,里面记录了浏览器监测到的行为的细节.
  //           这个对象被称为事件对象

  //           不同的事件,事件对象是有区别的.
  var test = document.getElementById('test');
  test.onmousedown = function(e){
    var x = e.layerX;
    var y = e.layerY;
    document.onmousemove = function(e){
      var s = document.body.scrollTop;
      var top = e.clientY - y + s;
      var left = e.clientX - x;
      top = (top<0)?0:top;
      left = (left<0)?0:left;
      test.style.top = top  + 'px';
      test.style.left = left  + 'px';
    };
  };
  document.onmouseup = function(){
    document.onmousemove = null;
  };

  //onmousedown  onmouseup  onmousemove

  document.onkeydown = function(e){
    console.log(e);
  }

  

};

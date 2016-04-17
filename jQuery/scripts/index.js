window.onload = function(){
  // 1.接受一个字符串   字符串的书写规则为css选择器
  //   $函数会根据选择器去页面中选取元素，构建一个对象
  //   对象的结构为
  // {
  // 	0:el,
  // 	1:el,
  // 	...,
  //  n:el,
  //  length:n,
  //  __proto__:{
  //    ....好几百函数
  //  }
  // }
  // 2.接受一个 普通的javascript DOM 对象
  //   或者是一个存放了很多javascript DOM对象的 类数组对象
  //   同样会构建一个对象
  //   对象的结构同上 都是把一个个的javascript DOM对象 按数组的方式，
  //   存放在递增的下标中

  // console.dir( $('div') );
  // console.dir( $( $('div')[0] ).addClass() )

  //jQuery不推荐使用原生的代码( DOM API借口 )
  //jQuery中很少需要使用for循环；
  // var arr = ['a.png','b.png','c.png','d.png'];
  // $('img').attr('src',function(index){
  // 	return arr[index];
  // });

  // console.log( $('div').css('width') );

  // $('div').css({
  // 	width:'100px',
  // 	height:'200px',
  // 	border:'10px solid red'
  // })
  // $('div').css('width','800px')

  // $('div').css('width',function(){
  // 	return '30px';
  // })
  // $('div').css({
  // 	width:function(){return '10px'},
  // 	height:function(index){
  // 	    return 10*index + 10;
  // 	},
  // 	border:function(){return '10px solid black'},
  // })

  // $('div').hover( function(){
  // },function(){
  // } );
  // nav.onclick  = function(e){
  // 	console.log(e.altKey);
  // };

  // jQuery中的事件对象用法和原生js中一样
  // 实际上e这个对象已经被jQuery重新处理了一遍(主要是解决兼容性问题)
  
  // $('div').click([1,2,3,4,5],function(e){
  // 	var i = $('div').index(this);
  // 	$(this).html( e.data[i] );
  // });

  // $(document).click(function(){
  // 	$('div').fadeOut('slow','swing',function(){
  // 	    $(this).css({
  // 	    	display:'block',
  // 	    	height:'200px'
  // 	    }); 
  // 	});
  // })
  // $('#addClass').click(function(){
  //   var arr = ['red','blue','orange','green'];
  //   $('#addClass .test').addClass(function(index){
  //     return arr[index];
  //   });
  //   $('#addClass .test').height(function(index){
  //     return 30*index + 10;
  //   });
  // });
  // 原生js dom 部分的顺序 

  // 1.选取元素
  // document.getElementById
  // document.getElementsByClassName
  // document.getElemetsByTagName
  // document.getElementsByName
  // <input type="text" name='a' value='12'/>
  // document.querySelector
  // document.querySelectorAll

  // 2.创建元素
  // document.createElement
  // p.appendChild(el)
  // p.insertBefore(el,anotherchild)
  // p.removeChild(el)

  // 3.根据逻辑关系再次寻找元素
  // el.parentElement  el.parentNode
  // el.children       el.childNodes
  // el.nextElementSibling       el.nextSibling
  // el.previousElementSibling   el.previousSibling
  // el.firstElementChild        el.firstChild
  // el.lastElementChild         el.lastChild

  // 4.对元素属性的操作
  // el.getAttribute() 
  // el.className
  // el.id
  // el.setAttribute() 
  // el.removeAttribute() 
  // el.hasAttribute() 

  // 元素性质
  // el.nodeType
  // el.nodeName
  // el.nodeValue

  // 5.对样式的操作
  // el.style.xxxx 

  // 6.其他操作
  // el.innerHTML
  // getComputedStyle(el)   el.currentStyle

  // offsetWidth   offsetHeight 
  // offsetTop     offsetLeft
  // offsetParent
  // getBoundingClientRect();



  // 7.事件
  // click dblclick mousedown  mouseup
  // mouseover mouseout  mouseenter mouseleave
  // mousemove mousewheel
  // keyup  keydown  keypress(可打印字符)
  // blur  focus  change
  // 事件对象
  // e.layerX    e.offsetX
  // e.layerY    e.offsetY
  // e.clientX   e.clientY
  // e.keyCode
  // e.shiftKey  e.altKey e.ctrlKey
  // e.target  || e.srcElement
  // e.stopPropagation() 调整html结构来阻止冒泡
  // e.preventDefault()  默认行为
  // onmousedown(e){e.preventDefault()}阻止双击选中文字的默认行为
  // return false; 一般用来阻挡a标签跳转

  // 浏览器的 events-loop 行为 (代码的执行顺序)
  // console.log(1);
  // setTimeout(function(){
  //   console.log(2);
  // },0);
  // console.log(3);

  //8.Date && RegExp &&　ajax
  // var d = new Date();
  // getFullYear  getMonth  getDate getDay
  // getHours     getMinutes  getSeconds  getMilliseconds
  // getTime
  // var d = new RegExp();
  // var req = new XMLHttpRequest();
  // req.open('get','http://localhost/aa');
  // req.send();
  // req.onreadystateChange
  // req.response
  // req.readyState
  // req.status
  // req.DONE
  //浏览器不允许ajax跨域;

  //=======================
  //选取元素  创建元素  筛选元素
  //属性  样式  位置  事件
  //事件对象  ajax

  //jQuery



  // 选择器  筛选  ( 选取 )
  // 属性 css  文档处理  事件  事件对象  (对DOM的增删改查)
  // <s>核心</s>  工具 (封装了一些方便进行逻辑操作的函数)


  // 延迟对象 回调函数.................... 


  // 1.天猫页面
  // 2.文档中剩余的部分
  // 3.整站环境的搭建  ( XAMPP phpcmsv9 )




  //1.typeof NaN
  //2.var o = {a:1,b:2}    o.a instaceof o
  //3.var o = {a:1,b:2}    o.b in a
  //4.var f = function(){} f.prototype.mybind 实现
  //5.
  //



  var fn = function(){
    var a  = 10;b=2;
    console.log(a,b,c);
    var c = 0;
  }
  fn();
  //1.
  //2.javascript 中 在一个作用域内
  //           任何自由位置
  //           使用var 声明的变量
  //           会被提前到该作用域顶点

  var a = [1,2]  var b = [1,2]
  var f1 = function(){console.log(1);}
  var f2 = function(){console.log(1);}
  var a = {}, b ={};

  var a = 12  var b = 12
  a == b
  //js中   数组  函数 对象  是引用类型的

  //       数字 字符串 布尔 undefined  null


  // 'a' in o  in 运算符用来检测 对象中有没有某个属性  (全作用域链都检查)
  //  o.hasOwnProperty('a')

  //  hasOwnProperty方法也是用来检测对象中有没有某个属性
  //  这个方法不检测原型链

  // 'createElement' in document
  // document.hasOwnProperty('createElement');
  // [1,3,5,8,12,119,222,333,10001].sort(function(a,b){
  //   console.log(a,b);
  //   return a < b;
  // });
  Array.prototype.myMap = function(fn){
    var r = [];
    for ( var i = 0;  i < this.length;  i++){
      r.push( fn.apply(this, [this[i],i,this] ) );
    }
    return r;
  };
  var arr = [1,3,9,12,89];
  arr.filter(function(a,b,c){
    return a>9;
  });
  console.log(arr);






};

window.onload = function(){
  var ROW = 15;
  var width = Math.floor( (600 - ROW)/ROW ) + 'px';
  var sence = document.getElementById('sence');
  var div;
  var el,el2;

  for ( var i = 0;  i < ROW;  i++){
    el = document.createElement('div');
    el.setAttribute('class','hang');
    el.style.top = (600/ROW)/2 + (600/ROW)*i+'px';
    sence.appendChild(el);
    el2 = document.createElement('div');
    el2.setAttribute('class','lie');
    el2.style.left = (600/ROW)/2 +(600/ROW)*i+'px';
    sence.appendChild(el2);
  }


  for ( var i = 0;  i < ROW;  i++){
    for ( var j = 0;  j < ROW;  j++){
      div = document.createElement('div');
      div.setAttribute('class','block');
      div.setAttribute('id',i+'_'+j);
      div.style.width  = width;
      div.style.height = width;
      sence.appendChild(div);
    }
  }
  var blocks  = document.querySelectorAll('.block');
  var kaiguan = true;
  var dict1 = {};
  var dict2 = {};

  var panduan = function(id,dic){
    var x = Number(id.split('_')[0]);
    var y = Number(id.split('_')[1]);
    var tx,ty;

    var hang =1;
    tx = x; ty = y;
    while( dic[ tx + '_'+ (ty + 1) ] ){hang++;ty++;};
    tx = x; ty = y;
    while( dic[ tx + '_'+ (ty - 1) ] ){hang++;ty--;};
    if ( hang == 5 ){return true;}


    var lie = 1;
    tx = x; ty = y;
    while( dic[ (tx - 1) + '_'+ ty  ] ){lie++;tx--;};
    tx = x; ty = y;
    while( dic[ (tx + 1) + '_'+ ty  ] ){lie++;tx++;};
    if ( lie == 5 ) return true;

    var zx = 1;
    tx = x; ty = y;
    while( dic[ (tx - 1) + '_'+ (ty+1)  ] ){zx++;tx--;ty++;};
    tx = x; ty = y;
    while( dic[ (tx + 1) + '_'+ (ty-1)  ] ){zx++;tx++;ty--;};
    if ( zx == 5 ) return true;

    var yx = 1;
    tx = x; ty = y;
    while( dic[ (tx - 1) + '_'+ (ty-1)  ] ){yx++;tx--;ty--;};
    tx = x; ty = y;
    while( dic[ (tx + 1) + '_'+ (ty+1)  ] ){yx++;tx++;ty++;};
    if ( yx == 5 ) return true;
    return false;
  };

  for ( i = 0;  i < blocks.length;  i++){
    blocks[i].onclick = function(){
      if( this.hasAttribute('hasColor') ) return;

      var id = this.getAttribute('id');
      this.style.boxShadow = '0 4px 13px black';
      if(kaiguan){
        this.style.background = 'white';kaiguan = false;
        dict1[id] = true;
        if(panduan(id,dict1)){alert('red is winner!');}
      }else{
        this.style.background = 'black';kaiguan = true;
        dict2[id] = true;
        if(panduan(id,dict2)){alert('green is winner!');}
      }
      this.setAttribute('hasColor',true);
    };
  }
  // return null; //-----------------------------------------------
  // -----------思考---------
  // js如果会哪些处理文档结构的方法,会给我们带来很大的便捷?
  // ----增  删  改  查------
  // 查
  // var el = document.getElementById( 'string' );
  // 1.实参必须是一个字符串或求值得到字符串
  // 2.一定要检查自己的页面有没有这个id为实参的元素
  // 3.该方法的返回值为一个代表了id为实参的元素的对象
  //   这个对象有很长的原型链,链上的所有方法都可以调用.
  // var els = document.getElementsByClassName('string');
  // 1.该方法返回值 是一个类数组对象
  // 2.{ 0:div,  1:div, 2:div,  3:div,  length:4 }
  // 改
  // setAttribute('','')
  // var el = document.getElementById('u');
  // var tmpArr = el.getAttribute('class').split(' ');
  // tmpArr.push('bb');
  // el.setAttribute( 'class', tmpArr.join(' ') );
  // 习题: 写一个函数 addClass(el,class)
  // var ee = document.getElementById('u');
  // var class = 'cc dd ee ff';
  // addClass(ee,class);
  // 会给id为u的元素 加上 cc dd ee ff 四个class ,并且会保留原来的class
  // 如果原来的类名里本身就有 cc dd ee ff  要求我们的函数不会重复添加
  // 习题2: removeClass(el,class)
  // 'a b c d'  'a c'
  // 增
  // var li = document.createElement('li');
  // li.innerHTML = 4;
  // el.appendChild(li);
  //删除
  // var three = document.getElementById('three');
  // el.removeChild(three);
  // var n = document.createElement('li');
  // el.appendChild(n);
  // var s = document.getElementById('s');
  // el.removeChild(s)
  // el.setAttribute();
  // var el = document.getElementById  document.getElementsByClassName
  // el.getAttribute();
  // var el  = document.getElementById();
  // var div = document.createElement();
  // el.innerHTML('');
  // el.appendChild();
  // el.insertBefore();
  // el.removeChild();
  // el.setAttribute();
  // el.getAttribute();
  // el.hasAttribute();
  // el.removeAttribute();
  // 从一个元素开始 可以找到下一个,上一个和父元素
  // nextElementSibling
  // previousElementSibling
  // parentElement
  // 从一个元素开始,也可以找到子元素(子元素中的第一个,最后一个)
  // children
  // lastElementChild
  // firstElementChild
  // document.querySelector()
  // 参数是一个字符串 使用css的选择器语法  选取一个元素
  // document.querySelectorAll()
  // 参数是一个字符串 使用css的选择器语法  选取元素集合
  // document.getElementsByClassName();
  // 写一个函数  insertAfter(parent,insert,positionElement);
  // var u = document.getElementById('u');
  // var li = document.createElement('li');
  // li.innerHTML = 5;
  // var three = document.getElementById('cc');

  // var insertAfter = function(parent,insert,positionElement){
  //   if( positionElement.nextElementSibling ){
  //     parent.insertBefore(insert,positionElement.nextElementSibling);
  //   }else{
  //     parent.appendChild(insert);
  //   }
  // };
  // insertAfter(u,li,three);
  //-------------------------------------------------
  // document.getElmentById();
  // document.getElmentsByClassName();
  // document.querySelectorAll();
  // document.querySelector();

  // previousElementSibling nextElementSibling
  // parentElement
  // children  lastElementChild firstElementChild
  // appendChild()  insertBefore()
  // 获取当前滚动条的高度
  // document.body.scrollTop
  // document.body.scrollTop = 400;
  // var i = 1;

  // var top = 0;
  // var fn = function(){
  //   document.body.scrollTop = top;
  //   top = top + 1;
  //   if(top == 400){
  //     clearInterval(t);
  //   }
  // };
  // var t = setInterval(fn,30);


  // document.body.scrollTop
  // el.offsetWidth
  // el.offsetHeight





  var shang = document.getElementsByClassName('aa');
  var xia = document.getElementsByClassName('bb');
  for ( var i = 0;  i < shang.length;  i++){
    shang[i].index = i;
    shang[i].onmouseover = function(){
      xia[this.index].style.opacity = '1';
    };
    shang[i].onmouseout = function(){
      xia[this.index].style.opacity = '0';
    };
  }


  // shang[0].onmouseover = function(){
  //   xia[0].style.opacity = '1';
  // };
  // shang[0].onmouseout = function(){
  //   xia[0].style.opacity = '0';
  // };



  // for ( var i = 0;  i < shang.length;  i++){
  //   shang[i].index = i;
  //   shang[i].kaiguan = true;
  //   shang[i].onclick = function(){
  //     if(this.kaiguan){
  //       // this.style.background  = '#ad8';
  //       xia[this.index].style.opacity = '0';
  //       this.kaiguan  = false;
  //     }else{
  //       // this.style.background  = '#d3a212';
  //       xia[this.index].style.opacity = '1';
  //       this.kaiguan = true;
  //     }
  //   };
  // }


  // for ( var i = 0;  i < shang.length;  i++){
  //   shang[i].onclick =(function(x){
  //     return function(){
  //       this.style.background = '#ad8';
  //       xia[x].style.background = '#d3a212';
  //     };
  //   })(i);
  // }
};

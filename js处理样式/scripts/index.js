window.onload = function(){//time
  // time
  // var aa = function(){
  //   console.log(0);
  // };
  // setTimeout(aa,1000);
  // setInterval(aa,1000);
  // setInterval(aa,1000);
  // setInterval(aa,1000);
  // setInterval(aa,1000);
  // setInterval(aa,1000);
  // setInterval(aa,1000);

  // history
  // history.back();history.forward();history.go(-2);history.length;

  // loaction
  // location.href
  // location.port
  // location.assign('index.html')
  // location.replace('index.html')
  // location.reload();

  //document获取元素
  // var el = document.getElemetById('aa');
  // document.getElementsByClassName('aa');
  // document.querySelector('.aa span');
  // document.querySelectorAll('.aa span');

  //得到元素后继续根据逻辑关系获取元素
  // el.nextElementSibling;
  // el.previousElementSibling;
  // el.parentElement
  // el.children;
  // el.firstElementChild;
  // el.lastElementChild;

  //对得到的元素进行属性操作
  // el.setAttribute('ccc','adfa');
  // el.getAttribute('has-a');
  // el.removeAttribute('id');
  // el.hasAttribute('class');

  //插入元素 删除元素
  // insertBefore()
  // removeChild()
  // appendChild()
  // // <div class='bb' id= 'cc' >    </div> //
  // var el = document.getElementById('cc');
  // var span = document.createElement('span');
  // el.appendChild( span  );
  // 1

  // 获取元素的高度,宽度
  // el.offsetWidth
  // el.offsetHeight

  //获取页面滚动条位置 设置页面滚动条位置
  // document.body.scrollTop;
  // document.body.scrollTop = 340;
  // var body = document.getElementById('body'),
  //     sence = document.createElement('div');
  // sence.setAttribute('class','sence');
  // body.appendChild(sence);
  // var el;
  // for ( var i = 0;  i < 3;  i++){
  //   el = document.createElement('div');
  //   el.setAttribute('class','item');
  //   sence.appendChild(el);
  // }


  // setTimeout(function(){
  //   el = document.createElement('div');
  //   el.setAttribute('class','item item-red');
  //   sence.appendChild(el);
  // },1000);

  // setTimeout(function(){
  //   el = document.createElement('div');
  //   el.setAttribute('class','item item-circle');
  //   sence.insertBefore(el,sence.firstElementChild.nextElementSibling);
  // },2000);

  // setTimeout(function(){
  //   sence.removeChild( sence.lastElementChild.previousElementSibling );
  // },3000);

  // setTimeout( function(){
  //   location.reload();
  // }, 4000);

  var els = document.getElementsByClassName('item');

  //如果元素的行内样式上有某个css属性,我们可以通过  元素.style.属性 取出它
  // els[0].style.width = '300px';
  // console.log( els[0].style.width  );

  // console.log( els[0].offsetWidth );
  // console.log( els[0].offsetHeight );


  // getComputedStyle();


  // 获取元素的文档坐标
  // el.offsetTop;

  // 获取元素的视窗坐标
  // el.geBoundingClientRect();



  //对样式的操作
  //从元素身上查出样式




  // var ccc = document.getElementById('ccc');
  // console.log( ccc.getBoundingClientRect().top );
  // console.log( ccc.getBoundingClientRect().left );

  // getElementsByClassName()
  // getBoundingClientRect()
  // document.body.scrollTop
  // onclick =


  //选取元素
  var dians = document.getElementsByClassName('xiao');
  var kuais = document.getElementsByClassName('ccc');
  var tiao = document.getElementById('fix');
  var cha = tiao.getBoundingClientRect().top;
  var timerId,start,end,xishu;
  for ( var i = 0;  i < dians.length;  i++){
    dians[i].index = i;
    dians[i].onclick = function(){
      start = document.body.scrollTop;
      end =  kuais[this.index].offsetTop - cha;
      var off = Math.abs(start-end)/20;
      if(start < end){xishu = 1;}else{xishu = -1;}
      clearInterval(timerId);
      timerId = setInterval(function(){
        document.body.scrollTop = start;
        start += off*xishu;
        if( (xishu>0)?(start>end):(start<end)  ){
          clearInterval(timerId);
        }
      },1);//20ms
    };
  }


};

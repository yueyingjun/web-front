window.onload = function(){
  var more = document.getElementById('more');
  var navs = document.getElementById('navs');
  more.onclick = function(){
    if( !navs.getAttribute('class') ){
      navs.setAttribute('class','expand');
    }else{
      navs.removeAttribute('class');
    }
  };
  var items = document.getElementsByClassName('bottom-item');
  var ico = [];
  for(var i = 0; i < items.length; i++) {
    ico.push( new Hammer(items[i]) );
  }
  for(var i = 0; i < ico.length; i++) {
    ico[i].on('tap',(function(i){
      return function(ev){
        items[i].style.backgroundColor = 'red';
      };
    })(i) );
    ico[i].on('pressup',(function(i){
      return function(ev){
        items[i].style.backgroundColor = 'white';
      };
    })(i) );
  }
  // for(var i = 0; i < items.length; i++) {
  //   items[i].onmousedown = function(){
  //     this.style.backgroundColor = 'red';
  //   };
  //   items[i].onmouseup = function(){
  //     this.style.backgroundColor = 'white';
  //   };
  // }

  // var head = document.getElementById('header');
  // var height = head.offsetHeight;
  // var page = document.getElementById('page');
  // var mc = new Hammer(page);
  // var index = 1;
  // mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

  // mc.on('panstart',function(){
  //   mc.on('panup',function(){
  //     return false;
  //   });
  //   mc.on('pandown',function(ev){
  //     ev.preventDefault();
  //     if(window.scrollY == 0){
  //       // add = Math.min(ev.distance,400);
  //       index = Math.min(index,200);
  //       head.style.height = height + index + 'px';
  //       head.style.paddingTop = index-10 + 'px';
  //       index += 2;
  //     }else{
  //       return false;
  //     };
  //   });
  // });

  // mc.on('panend',function(ev){
  //   if(window.scrollY == 0){
  //     head.style.height = 'auto';
  //     head.style.paddingTop = '0px';
  //     index = 1;
  //     mc.off('pandown');
  //   }else{
  //     return false;
  //   };
  // });




  var plus = document.getElementsByClassName('plus');
  var co = [];
  for(var i = 0; i < plus.length; i++) {
    co.push( new Hammer(plus[i],{domEvents:true}) );
  }
  var left = 0;
  for(var i = 0; i < co.length; i++) {
    co[i].on( 'panmove',(function(i){
      return function(ev){
        plus[i].style.transition = 'none';
        if(ev.direction == 2){
          plus[i].style.marginLeft =  -ev.distance + 'px';
        }
        if(ev.direction == 4){
          plus[i].style.marginLeft =   ev.deltaX + 'px';
        }
      };
    })(i)  );

    co[i].on( 'panend',(function(i){
      return function(ev){
        if(ev.direction == 2){
          plus[i].style.transition = 'all .3s ease';
          plus[i].style.marginLeft = '-40%';
        }else if(ev.direction == 4){
          plus[i].style.marginLeft = '0%';
        }
      };
    })(i)  );
  }

};

$(function(){
  // javascript语言精粹(100页)  javascript权威指南
  var W = $(window).width();
  $('.slide').css({'left':function(i){
    return i*W;
  }});
  $(window).resize(function(){
    W = $(window).width();
    $('.slide').css({'left':function(i){
      return i*W;
    }});
  });
  //闭包  函数在定义的时候会记录下自己可见区域内的变量
  //      从近到远形成一个链条,称为作用域链
  //      函数在调用的时候,整个链条上的变量都是可见状态的
  //      链条近处的变量会覆盖远处的变量
  //常见用法: 消除全局变量
  //常见用法: 传递临时状态

  var move = (function(){
    var index = 1;
    return function (){
      //---------------------------------------
      $('.slides li').addClass(function(i,old){
        $(this).removeClass(old);
        if( i === index ){
          return 'current';
        }
      });
      //---------------------------------------
      var off = -index*W;
      index += 1;
      if( index === 3 ){
        index = 0;
      }
      $('.slide').css({'transform':'translateX('+off+'px)'});
    }
  })();
  $('.slides li').each(function(i){
    $(this).data('a',i);
  });
  $('.slides li').click(function(){
    clearInterval(timerId);
    $('.slides li').removeClass('current');
    $(this).addClass('current');
    var off = -$(this).data('a')*W;
    $('.slide').css({'transform':'translateX('+off+'px)'})
  });
  var timerId = setInterval(move,1000);
});




// document.addEventListener('readystatechange',function(){
//   if(document.readyState === 'complete'){
//     var slides = document.querySelectorAll('.slide');
//     var xiaodian = document.querySelectorAll('.slides li');
//     var W = document.documentElement.offsetWidth;
//     var curdian = xiaodian[0];
//     window.onresize = function(){
//       W = document.documentElement.offsetWidth;
//       for (var i = 0; i < slides.length; i++) {
//         slides[i].style.left = i*W + 'px';
//       }
//     }
//     window.onresize();
//
//     var move =(function(){
//       var index=1;
//       return function(){
//         curdian.classList.remove('current');
//         curdian = xiaodian[index];
//         curdian.classList.add('current');
//         //////////////////////////////////////
//         var off = -index*W;
//         index += 1;
//         if(index === 3){
//           index = 0;
//         }
//         for (var i = 0; i < slides.length; i++) {
//           slides[i].style.transform = 'translateX('+off+'px)'
//         }
//       }
//     })();
//
//     for (var i = 0; i < xiaodian.length; i++) {
//       xiaodian[i].index = i;
//       xiaodian[i].onclick = function() {
//         curdian.classList.remove('current');
//         this.classList.add('current');
//         curdian = this;
//         var off = -this.index*W;
//         for (var i = 0; i < slides.length; i++) {
//           slides[i].style.transform = 'translateX('+off+'px)'
//         }
//         clearInterval(timerId);
//       }
//     }
//     var timerId  = setInterval(move,2000);
//
//   }
// },false);

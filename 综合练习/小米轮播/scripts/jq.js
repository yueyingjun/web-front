$(function(){
  var links  = $('.ui-pager-link');
  var prev   = $('#prev');
  var next   = $('#next');
  var w = $('#w');
  var slides = $('.slide');

  var index = 1;
  var cur = 0;
  var move = function(){
    $(slides[cur]).animate({left:-1226},400,function(){
      $(this).css({left:1226});
    });
    $(slides[index]).animate({left:0},400);
    cur = index;
    index += 1;
    if(index == 5){
      index = 0;
    }
  }
  // var timerId = setInterval(move,1500);
  prev.click(function(){
    // clearInterval(timerId);
    $(slides[cur]).animate({left:-1226},400,function(){
      $(this).css({left:1226});
    });
    cur = cur + 1;
    if(cur == 5){ cur = 0 }
    $(slides[cur]).animate({left:0},400);
    index = cur;
  });
  next.click(function(){
    // clearInterval(timerId);
    $(slides[cur]).animate({left:-1226},400,function(){
      $(this).css({left:1226});
    });
    cur = cur - 1;
    if(cur == -1){ cur = 4 }
    $(slides[cur]).animate({left:0},400);
    index = cur;
  });


});

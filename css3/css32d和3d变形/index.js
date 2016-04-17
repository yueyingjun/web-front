$(function(){
  var arrs = ['slide-1','slide-2','slide-3','slide-4','slide-5'];
  var lunbo = function(){
    arrs.push(arrs.shift());
    $('#slides .sample').addClass(function(i,old){
      $(this).removeClass(old);
      return 'sample ' + arrs[i];
    });
  };
  // setInterval(lunbo,1000);
});

// $(function(){
  // var arr = [];
  // $('.list-item').each(function(i,el){
  //   arr.push({top:$(el).offset().top-400,index:i});
  // });
  // $(window).scroll(function(){
  //   var st = $(window).scrollTop();
  //   var t = arr.filter(function(data){
  //     return st >= data.top;
  //   });
  //   $.each(t,function(i,data){
  //     $( $('.list-item')[data.index] ).addClass('back');
  //   });
  //   if(t.length === arr.length){
  //     $(window).unbind();
  //   }
  // });
// });

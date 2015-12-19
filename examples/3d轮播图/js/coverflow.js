$(function(){
  /*页面中需要一个如下结构的html代码段
   <div id="coverflow">
   <div><img src="xxx" /></div>
   <div><img src="xxx" /></div>
   <div><img src="xxx" /></div>
   <div><img src="xxx" /></div>
   <div><img src="xxx" /></div>
   </div>
   将外层div的id作为参数传入构造函数
   */

  // function  coverflow( pid ){
  // }
  // var myCoverflow = new coverflow(2000);

  // return;
  $('.item').each(function(e){
    $(this).attr('data',e);
  });

  var aa = true;
  var bb;
  var pic_size_array = [120,160,188,160,120];
  var left_array = [100,200,320,510,700];
  //z-index 列表
  function get_z_index_array(pic_number){
    var z_index_array = new Array();
    for (var i = 1; i <= pic_number; i++) {
      if ( i < (pic_number/2 + 1) ){
        z_index_array.push(i*10);
      }
    };
    var z = z_index_array.slice(0,-1);
    var t = z_index_array.reverse();
    return z.concat(t);
  }
  var z_index_array = get_z_index_array($('.item').length);

  //初始化
  var pos = 3;
  display_data(pos);

  function reorder_data(position,data_array){
    var number = $('.item').length;
    var c = (Math.round(number/2)-1) - position;
    var t = data_array.slice(0,c);
    var z = data_array.slice(c);
    return z.concat(t);
  }

  function display_data(position){
    var left = reorder_data(position,left_array);
    var size = reorder_data(position,pic_size_array);
    var z_index = reorder_data(position,z_index_array);

    $('.lists').children().each(function(e){
      var $el = $(this);
      var margin_top = ( 300 - size[e])/2;
      var width = 377 * size[e]/188 + 'px';
      $el.css('z-index',z_index[e]);
      $el.animate({left:left[e],height:size[e],width:width,marginTop: margin_top},function(){
        if (e == $('.item').length - 1 )
          aa = true;
      });
    });
  }

  $('.item').click(function(){
    $('.item').stop();
    aa = false;
    var position = parseInt($(this).attr('data'));
    display_data(position);
    pos = parseInt($(this).attr('data'));
  });

  function auto_play(){
    if ( !aa ) return;
    if (pos>4) pos = 0;
    display_data(pos);
    pos++;
  }

  bb = setInterval(auto_play,2000);
});

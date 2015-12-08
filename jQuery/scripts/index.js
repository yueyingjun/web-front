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
  $('#addClass').click(function(){
    var arr = ['red','blue','orange','green'];
    $('#addClass .test').addClass(function(index){
      return arr[index];
    });
    $('#addClass .test').height(function(index){
      return 30*index + 10;
    });
  });
};

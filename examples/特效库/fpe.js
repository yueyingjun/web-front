/*
*
*
* FPE V1.0  (Fast Page Effects)
* 
* Copyright:山西优逸客科技有限公司 项目开发组 
*
* Date:2015-01-20 Time:01-14
*
*/
$.fn.extend({
	//手风琴
	accordion:function(l){
	var that=this;
	l.each(function  (index,obj) {
	  $(obj).css("left",function  () {
	   return (that.width()/l.length)*index;
	  })
	})
    var liW=l.width(); 
    l.hover(function  () {
	   l.stop();
	  var current=$(l).index(this);
	  var n=(that.width()-liW)/(l.length-1);
	  l.each(function  (index,obj) {
	     if(current>=index){
          $(obj).animate({left:index*n})	
		 }else	if(current<index){
          $(obj).animate({left:current*n+liW+(index-current-1)*n})
		 }
	  })
    })
	that.hover(function  () {
	},function  () {
	  l.stop();
	  l.each(function  (index,obj) {
	  $(obj).animate({left:(that.width()/l.length)*index})
	})
	})
	 },
	 //下拉导航
	navDown:function(lists,dlists){
		var that=this;
		var t;
		lists.hover(function(){
			var that2=this;
			clearTimeout(t);
			t=setTimeout(function(){
				$(that2).find(dlists).slideDown();
			},200)
		},function(){
			$(this).find(dlists).slideUp();
			})

		
	},
	//选项卡
	tab:function(links,lists,bgcolor,ftcolor){
		var bgcolor=bgcolor||"#ccc";
		var ftcolor=ftcolor||"#fff";
		links.click(function(){
			var index=links.index(this);
			lists.hide();
			lists.eq(index).show();
			links.removeAttr("style");
			$(this).css({
				background:bgcolor,color:ftcolor});
		})
	},
	//返回顶部
	backTop:function(oh){
		var oh=300||oh;
		var top;
		var t;
		var that=this;
		this.hide();
		$(window).scroll(function(){
		   if($(window).scrollTop()>oh){
				that.show();
				clearTimeout(t);
				t = setTimeout(function(){
					that.animate({bottom:120},200,function(){
							that.animate({bottom:102},200);
					});
				},200);
		   }else{
				that.hide();
		   }
		});
		this.click(function(){
		$({someValue: $(window).scrollTop() }).animate(
			{someValue: 0}, {
			duration:700,
			step: function() {
				$(window).scrollTop(this.someValue);
			}
		})
	})
	},
	//漂浮窗
	floatWindow:function(speedx,speedy,speed,closewindow){
		var that=this;
		$(this).css({
			zIndex:999,
			position:"fixed"	
			})	   
		var speed=speed||60;
		var float=$(this);
		var speedx=speedx||5;
		var speedy=speedy||5;
		float.hover(function(){
			clearInterval(t)
			},function(){ 
			t=setInterval(move,speed)
			});
		closewindow.click(function(){
			that.css("display","none");
			})   
		function move () {
			var left=float.offset().left;
			var top=float.offset().top-($(window).scrollTop());
			var widths=$(window).width();
			var heights=$(window).height();
			var newleft=left+speedx;
			var newtop=top+speedy;
			if (newleft>(widths-float.width())) {
			newleft=widths-float.width();
			speedx*=-1;
		}
		if (newleft<0) {
			newleft=0;
			speedx*=-1;
		}
		if (newtop>(heights-float.height())) {
			newtop=heights-float.height();
			speedy*=-1;
		}
		if (newtop<0) {
			newtop=0;
			speedy*=-1;
		}else{
		float.css({
			left: newleft,
			top: newtop  
		})
		}/*else结束*/
		}/*move函数结束*/
		var t=setInterval(move,speed);
	},/*function floatwindow结束*/
	//轮播图特效
	carousel:function(box,lists,btns,type,breaktime,movetime){
		var breaktime=breaktime||3000;
		var movetime=movetime||300;
		var type=type||one;
		if(type=="one"){
			var num=0;
			function moveone() {
				num++; 
				if(num==lists.length-1){
				box.animate({left:-num*lists.width()},movetime,function  () {
				box.css("left",0);
				});
				num=0;
				}else{
					box.animate({left:-num*lists.width()},movetime);  
				}
				btns.removeClass("uek_active");
				$(btns[num]).addClass("uek_active");
			}
		var ts=setInterval(moveone,breaktime)	 
		btns.hover(function  () {
			clearInterval(ts);
			box.stop();
			var index=btns.index(this);
			num=index;
			box.animate({left:-num*lists.width()},movetime);
			btns.removeClass("uek_active");
			$(btns[num]).addClass("uek_active");
			 },function  () {
			ts=setInterval(moveone,breaktime)
		 })
		}/*type one 结束*/	
		if(type=="two"){
			lists.css({
				position:"absolute",	
				left:0,
				top:0	
			})
			btns.css({
				position:"relative",
				zIndex:3	
			})	
			var numtwo=1;
			function movetwo(){
				if(numtwo==(lists.length-1)){numtwo=0}
				lists.css({
				zIndex:0,
				opacity:0	
				});	
				lists.animate({opacity:1},movetime)	
				lists[numtwo].style.zIndex=2;
				btns.removeClass("uek_active");
				$(btns[numtwo]).addClass("uek_active")
				numtwo++;		
			}
			var tt=setInterval(movetwo,breaktime);	
			btns.hover(function  () {
				clearInterval(tt);
				box.stop();
				var indexs=btns.index(this);
				numtwo=indexs+1;
				lists.css({
					display:"none"	
				})
				$(lists[indexs]).css({
					display:"block",
					zIndex:2,
					opacity:0	
				})	
				$(lists[indexs]).animate({opacity:1},movetime)
				btns.removeClass("uek_active");
				$(btns[indexs]).addClass("uek_active");
				},function  () {
					var indexs=btns.index(this);
					lists.css({
					display:"block",
					zIndex:1,
					opacity:1
					})
					$(lists[indexs]).css({
					zIndex:2
					})		 
					tt=setInterval(movetwo,breaktime)
				})
		}/*type two 结束*/  
	},/*function carousel结束*/
	//跑马灯特效
	marquee:function(box,list,left,right,num,movetime){
		var num=num||1;
		var aa=list;
		var leng=list.outerWidth()+parseInt(list.css("marginRight"));
		function move () {
			box.animate({left:num*-leng},function  () {
			for (var i=0; i<num; i++) {
			box.append($(".uek_lists").eq(0));
			}
			box.css("left",0);
			})
		}
		var t=setInterval(move,movetime);
		left.hover(function  () {
			clearInterval(t)
			},function  () {
			t=setInterval(move,movetime);
			})
		right.hover(function  () {
				clearInterval(t)
			},function  () {
				t=setInterval(move,movetime);
			})
		left.click(function  () {
			move();
			})
		right.click(function  () {
			box.css("left",-num*leng);
			for (var i=0; i<num; i++) {
				box.prepend($(".uek_lists").last());
			} 
			box.animate({left:0})
		})			
	}/*function marquee结束*/

})
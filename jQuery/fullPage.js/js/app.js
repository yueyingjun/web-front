$(function(){
	var fourIn = function (index) {
		move('.kuai')
    .set('opacity','0.8')
		.x(300)
		.end();
	}
  var fourLeave = function () {
    move('.kuai')
    .x(0)
    .set('opacity','0')
    .end();
  }
	$('#fullpage').fullpage({
		sectionsColor:['#345211','#123456','#543210','#897012','#786501'],
		controlArrows:false,
		verticalCentered:true,
		resize:false,
		scrollingSpeed:800,
		anchors:['s1','s2','s3','s4','s5'],
		// lockAnchors:true,
		// easing:'easeInBack',
		// loopTop:true,
		// loopHorizontal:false,
		// autoScrolling:false,
		// scrollBar:true,
		paddingTop:100,
		paddingBottom:100,
		fixedElements:'#header,#tips',
		// continuousVertical:true,
		// animateAnchor:false,
		// menu:'#menu',
		navigation:true,
		navigationPosition:'left',
		navigationTooltips:['11','22','33','44','55'],

		// showActiveTooltip:true,
		// slidesNavigation:true,
		// slidesNavPosition:'top',
		// scrollOverflow:true,
		// sectionSelector:'.aa',
		// slideSelector:'.slide',
		afterLoad:function(link,index){
			switch(link){
        case 's4':
        fourIn(index);
				break;
			}
		},
		onLeave:function (index,dindex) {
      switch (index) {
        case 4:
        fourLeave(index);
        break;
      }
		},
		afterRender:function () {
      move('#header').y(0).end();
		}
	});
})

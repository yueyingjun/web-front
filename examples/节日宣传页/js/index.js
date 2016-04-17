$(function () {
  $('.fullpage').fullpage({
    sectionsColor:['#987630','#123457','#109872'],
    afterLoad:function(mao,index){
      if(index == 2){
        move('#move4')
        .set('opacity',1)
        .x(200)
        .end();


        move('#move5')
        .set('background','#987010')
        .set('opacity',1)
        .x(600)
        .y(-100)
        .duration('1s')
          .then()
          .ease('linear')
          .x(-400)
          .duration('1s')
          .pop()
        .end();
      }
    },
    onLeave:function(index,dindex,dir){
      if(index == 2){
        move('#move4')
        .x(-200)
        .set('opacity',0)
        .end();
      }
    }
  })
})
// move(selector)
// .set().add().sub()
// .x().y().move().rotate().scale().skew()
// .then().pop()
// .ease('cubic-bezier(1,0,0,1)').duration('-1s')
// .end()

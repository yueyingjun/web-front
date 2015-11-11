window.onload = function(){
  //-----针对特定用途开发的功能------
  //-----基础的处理存储运算逻辑------

  //----数据操作-----------
  var aa = 1;
  console.log(aa);
  aa = 12;
  //number string array  object    function null undefined  boolean
  //1      '1'    [1,3]  {a:1,b:2} f n(){}  null undefined  t||f
  //----逻辑操作-----------
  // + - * /   > < >= <=  == ===  !=  !==  && || !
  if( 5 > 4 ){console.log(1);}else{console.log(2);}
  for ( var i = 0;  i < 10;  i++){
    console.log(i);
  }
  //---------对语言的扩充---------------
  function aa(我是千变万化的神仙,我会变成你给我的任何东西,我的名字叫雷锋,在下面函数体内部,当你写下雷锋的时候,你写的就是我){
    雷锋(这就是你给我的东西) + 赖宁;
    return 函数给我们的东西;
  }
  aa(我们给函数的东西);
  //从此以后,这门语言中就有了aa这个功能,可以随时取用;



};

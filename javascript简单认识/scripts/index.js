window.onload = function(){ //-----start------
  var el = document.getElementById('test');
  var el2 = document.getElementById('test2');
  window.ondblclick = function(){
    el.style.webkitAnimationName = 'fei';
    el2.style.webkitAnimationName = 'fanzhefei';
  };
};//注意!所有的代码都要放在这两个大括号中间,这里这个是结束的那个花括号;

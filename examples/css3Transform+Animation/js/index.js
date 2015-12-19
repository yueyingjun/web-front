window.onload = function(){
  var UP = 38,DOWN = 40,LEFT=37, RIGHT = 39;
  var el = document.getElementById('c');
  var deg = 0,ydeg=0;
  document.addEventListener('keydown',function(e){
    e.preventDefault();
    var shuffer = Math.floor( Math.random()*4 + 1);
    console.log(shuffer);
    if(e.keyCode == UP){
      deg = deg + 90*shuffer;
    }
    if(e.keyCode == DOWN){
      deg = deg - 90*shuffer;
    }
    if(e.keyCode == LEFT){
      ydeg = ydeg + 90*shuffer;
    }
    if(e.keyCode == RIGHT){
      ydeg = ydeg - 90*shuffer;
    }
    el.style.webkitTransform = 'rotateX('+deg+'deg) rotateY('+ydeg+'deg)';
  },false);


};

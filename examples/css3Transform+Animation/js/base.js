window.onload = function(){
  var
  el = document.getElementById('shaizi'),
  UP    = 38,
  DOWN  = 40,
  LEFT  = 37,
  RIGHT = 39,
  XDEG  = 0,
  YDEG  = 0;
  document.addEventListener('keydown',function(e){
    e.preventDefault();
    var shuffer = Math.floor(Math.random()*4 +1)*90;
    if(e.keyCode == UP)
      XDEG += shuffer;
    if(e.keyCode == DOWN)
      XDEG -= shuffer;
    if(e.keyCode == LEFT)
      YDEG += shuffer;
    if(e.keyCode == RIGHT)
      YDEG -= shuffer;
    el.style.webkitTransform = 'rotateX('+XDEG+'deg) rotateY('+YDEG+'deg)';
  },false);
};

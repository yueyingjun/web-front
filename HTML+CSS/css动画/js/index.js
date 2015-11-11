window.onload = function(){
  var
  els = document.getElementsByClassName('block'),
  P1 = [-390,-400], P2 = [-180,-200], P3 = [0,0], P4 = [180,-200], P5 = [390,-400],
  data = [P1,P2,P3,P4,P5];
  function draw(){
    for ( var i = 0;  i < els.length;  i++){
      els[i].setAttribute('index',i);
      els[i].style.cssText = '-webkit-transform:translate3d('+data[i][0]+'px,0,'+data[i][1]+'px)';
    }
  }
  draw();
  function update(){
    var tmp = [data.shift()];
    data  = data.concat(tmp);
    draw();
  }
  var timerId = window.setInterval(update,2000);
};

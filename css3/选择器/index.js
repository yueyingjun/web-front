document.addEventListener('readystatechange',function(){
  if(document.readyState==='complete'){
    var slides = document.querySelectorAll('.slide');
    var offsetWidthWindow = document.documentElement.offsetWidth;

    window.onresize = function(){
      offsetWidthWindow = document.documentElement.offsetWidth;
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.left = i*offsetWidthWindow + 'px';
      }
    }
    window.onresize();

    var index=1;
    var move = function(){
      var trans = -index*offsetWidthWindow;
      index += 1;
      if(index === 3){
        index = 0;
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.transform = 'translateX('+trans+'px)'
      }
    }
    // var timerid = setInterval(move,2000);

  }
},false);

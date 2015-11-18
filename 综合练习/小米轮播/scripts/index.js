window.onload = function(){
  var slides = document.getElementsByClassName('slide');
  var links = document.getElementsByClassName('ui-pager-link');
  var JHomeSlide = document.getElementById('J_homeSlider');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var kaiguan = true;

  var currentSlide = slides[0];
  var currentLink =  links[0];

  var fn  = (function(){
    var i = 1;
    var Limit = slides.length;
    return function(){
      currentSlide.setAttribute('class','slide');
      slides[i].setAttribute('class','slide show');
      currentSlide = slides[i];

      currentLink.setAttribute('class','ui-pager-link');
      links[i].setAttribute('class','ui-pager-link active');
      currentLink = links[i];

      i += 1;
      if( i  == Limit){i = 0;}
    };
  })();

  var timerId = setInterval(fn,2000);

  JHomeSlide.onmouseover = function(){
    clearInterval(timerId);
  };
  JHomeSlide.onmouseout = function(){
    if(kaiguan){
      clearInterval(timerId);
      timerId = setInterval(fn,2000);
    }
  };

  for(var i = 0; i<links.length; i++){
    links[i].index = i;
    links[i].onclick = function(e){
      kaiguan = false;
      clearInterval(timerId);

      currentSlide.setAttribute('class','slide');
      slides[this.index].setAttribute('class','slide show');
      currentSlide = slides[this.index];

      currentLink.setAttribute('class','ui-pager-link');
      this.setAttribute('class','ui-pager-link active');
      currentLink = this;

      return false;
    };
  }

  next.onclick = function(){
    clearInterval(timerId);

    currentLink.setAttribute('class','ui-pager-link');
    var nex = currentLink.nextElementSibling;
    nex = nex?nex :currentLink.parentElement.firstElementChild;
    nex.setAttribute('class','ui-pager-link active');
    currentLink = nex;

    currentSlide.setAttribute('class','slide');
    var n = currentSlide.nextElementSibling;
    n = n?n:currentSlide.parentElement.firstElementChild;
    n.setAttribute('class','slide show');
    currentSlide = n;

    kaiguan = false;
    return false;
  };
  prev.onclick = function(){
    clearInterval(timerId);

    currentLink.setAttribute('class','ui-pager-link');
    var nex = currentLink.previousElementSibling;
    nex = nex?nex :currentLink.parentElement.lastElementChild;
    nex.setAttribute('class','ui-pager-link active');
    currentLink = nex;

    currentSlide.setAttribute('class','slide');
    var n = currentSlide.previousElementSibling;
    n = n?n:currentSlide.parentElement.lastElementChild;
    n.setAttribute('class','slide show');
    currentSlide = n;

    kaiguan = false;
    return false;
  };
};

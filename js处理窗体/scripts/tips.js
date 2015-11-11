window.onload = function(){
  var n = 5,el=document.getElementById("span");
  var fn = function(){
    el.innerHTML = n--;
    if(n==-1){
    	clearInterval(timerId);
    	location.assign('index.html');
    }
  };
  var timerId = setInterval(fn,1000);
};

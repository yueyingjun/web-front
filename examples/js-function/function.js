(function(d){
  String.prototype.trim = function(){
    return this.replace(/^\s|\s$/g,this);
  };
  var jquery = function(query){
    this.el = d.querySelectorAll(query);
    console.log(this.el);
  };
  jquery.prototype.addClass = function(name){
    var r  = name.trim().split(' '),hasclass,el=this[0];
    for(var i = 0; i<r.length; i++){
      hasclass = new RegExp('\\b'+r[i]+'\\b','g');
      if( !hasclass.test( el.className) ){
        el.className += ' ' + r[i];
      }
    }
    return this;
  };
  jquery.prototype.removeClass = function(name){
    var r  = name.trim().split(' '),hasclass,el=this.el[0];
    for(var i = 0; i<r.length; i++){
      hasclass = new RegExp('\\b'+r[i]+'\\b','g');
      if( hasclass.test(el.className) ){
        el.className = el.className.replace(hasclass,' ');
      }
    }
    return this;
  };
  jquery.prototype.toggleClass = function(name){
    var el = this.el[0];
    var hasclass = new RegExp('\\b'+name+'\\b','g');
    if( hasclass.test( el.className) ){
      this.removeClass(name);
    }else{
      this.addClass(name);
    }
  };
  jquery.prototype.attr = function(name){
    var el = this.el[0];
    if (typeof name == 'string'){
      return el.getAttribute(name);
    }else if( typeof name == 'object' ){
      for(var i in name){
        el.setAttribute(i,name[i]);
      }
    }else{
      throw Error();
    }
    return this;
  };

  jquery.prototype.offset = function(){
    var el = this.el[0];
    var top     = el.offsetTop,
        left    = el.offsetLeft,
        width   = el.offsetWidth,
        height  = el.offsetHeight;
    var parent  = el;
    while( parent.offsetParent ){
      parent = parent.offsetParent;
      top  += parent.offsetTop;
      left += parent.offsetLeft;
    }
    return {offsetTop:top,osffsetLeft:left,offsetWidth:width,offsetHeight:height};
  };

  jquery.prototype.position = function(){
    var el = this.el[0];
    return el.getBoundingClientRect();
  };

  jquery.prototype.scrollTop = function(w){
    w = w || window;
    if(w.pageXOffset != null){
      return {x:w.pageXOffset,y:w.pageYOffset};
    }
    var d = w.document;
    if(document.compatMode == 'CSS1Compat'){
      return {x:d.documentElement.scrollLeft,y:d.documentElement.scrollTop};
    }
    return {x:d.body.scrollTop,y:d.body.scrollLeft};
  };

  jquery.prototype.scrollTo  = function(x){
    window.scrollTo(x);
  };

  jquery.prototype.innerWidth = function(w){
    w = w||window;
    if(w.innerWidth != null){
      return w.innerWidth;
    }
    var d = w.document;
    if(document.compatMode == 'CSS1Compat'){
      return d.documentElement.clientWidth;
    }
    return d.body.clientWidth;
  };
  jquery.prototype.innerHeight = function(w){
    w = w||window;
    if(w.innerHeigth != null){
      return w.innerHeigth;
    }
    var d = w.document;
    if(document.compatMode == 'CSS1Compat'){
      return d.documentElement.clientHeight;
    }
    return d.body.clientHeight;
  };

  var addEvent = function(element, type, handler){
    if (element.addEventListener){
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent){
      element.attachEvent("on" + type, handler);
    }
  };
  var removeEvent = function(element, type, handler){
    if (element.removeEventListener){
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent){
      element.detachEvent("on" + type, handler);
    }
  };
  var getEvent = function(event){
    return event ? event : window.event;
  };

  var getTarget = function(event){
    return event.target || event.srcElement;
  };

  var preventDefault = function(event){
    if (event.preventDefault){
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };
  var stopPropagation = function(event){
    if (event.stopPropagation){
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  };
  var mouseWheel  = function (obj,upCallback,downCallback){
    var fn = function(e){
      e  = getEvent(e);
      var num = e.detail?e.detail*(-40):e.wheelDelta;

      if(num>0){
        downCallback.call(obj);
      }else{
        upCallback.call(obj);
      }
      preventDefault(e);
      stopPropagation(e);
    };
    addEvent(obj,'mousewheel',fn);
    addEvent(obj,'DOMMouseScroll',fn);
  };
  var contains = function(p,c){
    return p.contains ?
      p != c && p.contains(c) :
      !!(p.compareDocumentPosition(c) & 16);
  };

  var pandan = function(e,el){
    return !contains(el,e.relatedTarget) &&
      !(el === e.relatedTarget);
  };

  var hover = function(el,over,out){
    addEvent(el,'mouseover',function(e){
      var r = e.relatedTarget||e.fromElement;
      if( pandan(e,r) ){
        over.call(el);
      }
    });
    addEvent(el,'mouseout',function(e){
      var r = e.relatedTarget||e.toElement;
      if(pandan(e,el)){
        out.call(el);
      }
    });
  };
  var removePlainTextNode = function (els){
    var r = [];
    for ( var i=0; i<els.length; i++){
      var type = els[i].nodeType;
      var value = els[i].nodeValue;
      if(type == 3 && value.trim() == '')
        continue;
      if(type == 3)
        els[i].nodeValue = value.trim();
      r.push(els[i]);
    }
    return r;
  };

  var my_childNodes = function(el){
    return removePlainTextNode(el.childNodes);
  };

  var my_nextSibling = function(el){
    var type = el.nextSibling.nodeType;
    var value = el.nextSibling.nodeValue;

    if (type == 3 &&  value.trim() == ''){
      return el.nextSibling.nextSibling;
    }else{
      el.nextSibling.nodeValue = value.trim();
      return el.nextSibling;
    }
  };

  var my_previousSibling  = function(el){
    var type = el.previousSibling.nodeType;
    var value = el.previousSibling.nodeValue;

    if (type == 3 && value.trim() == '' ){
      return el.previousSibling.previousSibling;
    }else{
      el.previousSibling.nodeValue = value.trim();
      return el.previousSibling;
    }
  };

  var my_firstChild  = function(el){
    var type = el.firstChild.nodeType;
    var value = el.firstChild.nodeValue;

    if (type == 3 && value.trim() == ''){
      return el.firstChild.nextSibling;
    }else{
      el.firstChild.nodeValue = value.trim();
      return el.firstChild;
    }
  };

  var my_lastChild = function(el){
    var type = el.lastChild.nodeType;
    var value = el.lastChild.nodeValue;

    if (type == 3 && value.trim() == ''){
      return el.lastChild.previousSibling;
    }else{
      el.lastChild.nodeValue = value.trim();
      return el.lastChild;
    }
  };

  jquery.prototype.bind = function(name,fn){
    for(var i = 0; i<this.el.length; i++){
      addEvent( this.el[i], name ,fn );
    }
  };
  jquery.prototype.click = function(fn){
    for(var i = 0; i<this.el.length; i++){
      addEvent( this.el[i], 'click' , fn );
    }
  };
  jquery.prototype.css = function(s){
    var o = this.el;
    if( typeof s == 'object'){
      if(o.length){
        for ( var i=0; i<o.length; i++){
          for(var j in s){
            o[i].style[j] = s[j];
          }
        }
      }else{
        for (var i in s){
          o.style[i] = s[i];
        }
      }
      return this;
    }else{
      return o.currentStyle?o.currentStyle[key]:getComputedStyle(o,null)[key];
    }
  };

  var Tween = {
    Linear:function(t,b,c,d){
      return  c * t / d + b;
    },
    Circ: {
      easeIn: function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOut: function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOut: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      }
    },
    Bounce: {
      easeIn: function (t, b, c, d) {
        return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
      },
      easeOut: function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
          return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
          return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
          return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
      },
      easeInOut: function (t, b, c, d) {
        if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
        else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
      }
    }
  };
  var attr = function (el,key){
    if(el.currentStyle){
      return el.currentStyle[key];
    }else{
      return getComputedStyle(el,null)[key];
    }
  };
  var animate  = function (el,styles,duration,gongShi){

    duration = duration||200;
    var move  = gongShi;

    var initWidth = parseInt(attr(el,'width'));
    var initHeight = parseInt(attr(el,'height'));
    var initTop = parseInt(attr(el,'top'))||0;
    var initLeft = parseInt(attr(el,'left'))||0;

    var targetWidth  = styles.width;
    var targetHeight  = styles.height;
    var targetTop  = styles.top;
    var targetLeft  = styles.left;

    var timer = 10;
    var timerId;

    var zongZhengShu = Math.ceil(duration/timer);
    var curZheng = 0;

    timerId = setInterval(function(){
      if(curZheng < zongZhengShu){

        curZheng++;
        if(targetWidth){
          var width = gongShi(curZheng,
                              initWidth,
                              targetWidth-initWidth,
                              zongZhengShu);
          el.style.width = parseFloat(width) + 'px';
        }
        if(targetHeight){
          var height = gongShi(curZheng,
                               initHeight,
                               targetHeight -initHeight,
                               zongZhengShu);
          el.style.height = parseFloat(height) + 'px';
        }

        if(targetTop){
          var top = gongShi(curZheng,
                            initTop,
                            targetTop -initTop,
                            zongZhengShu);
          el.style.top = parseFloat(top) + 'px';

        }
        if(targetLeft){
          var left =gongShi(curZheng,
                            initLeft,
                            targetLeft -initLeft,
                            zongZhengShu); ;
          el.style.left = parseFloat(left) + 'px';

        }

      }else{
        clearInterval(timerId);
      }
    },timer);
  };
  window.$ = function(query){
    return new jquery(query);
  };

  var  binarySearch = function(target,num){
    var min = 0,
        max = target.length - 1,
        middle = Math.floor((min+max)/2);
    while(  min <= max  ){
      if(num == target[middle]){
        return middle;
      }
      if(num > target[middle])
        min = middle + 1;
      if(num < target[middle])
        max = middle -1;
      middle = Math.floor((min+max)/2);
    }
    return -1;
  };

  var merge = function(left,right){
    var result=[];
    while(left.length>0&&right.length>0){
      if(left[0]<right[0]){
        result.push(left.shift());
      }else{
        result.push(right.shift());
      }
    }
    return result.concat(left).concat(right);
  };

  var mergeSort = function(items){
    if(items.length==1){
      return items;
    }
    var middle=Math.floor(items.length/2),
        left=items.slice(0,middle),
        right=items.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
  };

})(document);

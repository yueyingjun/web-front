window.onload = function(){

    var E = {
        addHandler: function(element, type, handler){
            if (element.addEventListener){
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent){
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        removeHandler: function(element, type, handler){
            if (element.removeEventListener){
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent){
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },
        getEvent: function(event){
            return event ? event : window.event;
        },
        getTarget: function(event){
            return event.target || event.srcElement;
        },
        preventDefault: function(event){
            if (event.preventDefault){
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        stopPropagation: function(event){
            if (event.stopPropagation){
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        }
    }

    var el = document.getElementById('input');
    var te = document.getElementById('area');
    var zishu = document.getElementById('zishu');

    te.onfocus = function(){
        el.style.border = '1px solid #73cff1';
        el.style.boxShadow = '1px 1px 3px #73cff1';
    }
    te.onblur = function(){
        el.style.border = '1px solid #ccc';
        el.style.boxShadow = 'none';
    }

    te.addEventListener('keydown',function(e){
        var shengYu =  140 - this.value.length;
        zishu.textContent = shengYu;

        if(shengYu > 0 ){
            zishu.style.color = 'black';
        }else{
            zishu.style.color = 'red';
        }
    },false)

    te.addEventListener('keyup',function(){
        var shengYu =  140 - this.value.length;
        zishu.textContent = shengYu;
        if(shengYu > 0 ){
            zishu.style.color = 'black';
        }else{
            zishu.style.color = 'red';
        }
    },false)

    var fabu = document.getElementById('fabu');
    E.addHandler(fabu,'click',function(){
        var el = document.createElement('div');
        el.setAttribute('class','item');
        el.textContent = te.value;
        document.getElementsByClassName('w')[0].appendChild(el);
        te.value = '';
        zishu.textContent = '140';
    })


    var items = document.getElementsByClassName('item');
    var w = document.getElementsByClassName('w')[0]; 

    
    E.addHandler(w,'mouseover',function(e){
        e.target.style.color = 'red';
    })

    E.addHandler(w,'mouseout',function(e){
        e.target.style.color = '#ccc';
    })




    

    // var hover = function(el,handler1,handler2){
    //     E.addHandler(el,'mouseover',handler1);
    //     E.addHandler(el,'mouseout',handler2);
    // }


    // hover(fabu,function(){
    //     this.style.background = '#ccc';
    // },function(){
    //     this.style.background = '#5f8ef3';
    // })

    // var img = document.getElementsByClassName('img-bao')[0];
    // var yulan = document.getElementById('yulan'); 
    


    // E.addHandler(img,'mouseover',function(e){
        // yulan.style.display = 'block';
        // yulan.innerHTML = '';
        // var i = document.createElement('img');
        // i.src = this.src;
        // i.width = 400;
        // i.setAttribute('id','iii');
        // yulan.appendChild(i);

    //     var el = document.createElement('div');
    //     el.setAttribute('class','hover');
    //     this.appendChild(el);

    //     var x =  e.layerX;
    //     var y =  e.layerY;
    //     el.style.left = x;
    //     el.style.top = y;
        
    // })

    // var hover = document.getElementsByClassName('hover')[0];

    // E.addHandler(hover,'mousemove',function(){
    // })
    

    // E.addHandler(img,'mouseout',function(){
    //     // yulan.style.display = 'none';
    //     var el = this.getElementsByClassName('hover')[0];
    //     this.removeChild(el);
    // })

    // E.addHandler(img,'mousemove',function(e){

    //     var x =  e.layerX - this.offsetLeft;
    //     var y =  e.layerY - this.offsetTop;

    //     var c = document.getElementById('iii');
    //     c.style.top = -x*2; 
    //     // c.style.left = -y*2;
    // })
}
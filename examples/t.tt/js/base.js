window.onload = function(){
    return;
    var $el = document.getElementsByClassName('wrapper')[0];
    var a = getComputedStyle($el,null);
    for ( var i in a ){
        if( isNaN(i) ){
            if( a.hasOwnProperty(i) ){
                console.log(i,':',a[i]);
            }
        }
    }


    
}
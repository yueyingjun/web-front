window.onload = function(){
  // 1  单选
  var fn = function(){
    a = 1;
    d = 2;
  }
  // console.log(d);

  // 2
  var name = 'zhangsan';
  var fn = (function(name){
    return function(){
      if( typeof name == 'undefined' ){
	var name = 'lisi';
	console.log('hello ' + name);
      }else{
	console.log('hello ' + name);
      }
    }
  })(name);
  fn();


  //3
  var o = {
    d:7,
    fn:function(){
      var fn = function(){
	console.log( this.d, arguments);
      }
      fn.apply(this,[this]);
    }
  }
  o.fn.apply({a:1,b:2,d:3});

  //4
  console.log(1);
  setTimeout(function(){
    console.log(2);
  },0)
  console.log(3);


  //5
  var fn = (function(){
    var limit = 0;
    return function(){
      limit += 1;
      if( limit > 3) return false;
      return '-------';
    }
  })();
  for ( var i = 0;  i < 10;  i++){
    console.log( fn() );
  }


  // 6
  var generatePoker = function(){
    var colors = ['ac','ad','ah','as'],
        dict  = {}, poker = [];
    while( poker.length !== 52 ){
      var  color  =  colors[ Math.floor(Math.random()*4) ];
      var  number =  Math.floor( Math.random()*13 + 1 );
      var key = color + number;
      if( !dict[key] ){
        poker.push( {color:color,number:number} );
        dict[key] = true;
      }
    }
    return poker;
  };
  console.table( generatePoker() );


  //7
  var a = {},b = {}, c = {};
  console.log( a == b );
  a = b = c = {};
  console.log( a == b );


  //8
  var o = {
    a:1,
    b:2,
    c:function(){}
  }
  var no = Object.create(o);
  no.c = 3;
  no.d = 4;
  no.e = function(){};

  console.log( no.hasOwnProperty('e') );
  console.log( no.hasOwnProperty('c') );
  console.log( no.hasOwnProperty('a') );


  //9
  var c = [1,2,3,4,5];
  c.length = 2;
  console.log(c);

  //10
  var fn = function(value){
    return Object.prototype.toString.apply(value) === '[object Array]';
  }


  //11
  Array.prototype.f = function(f,value){
    var i;
    for ( i = 0;  i < this.length;  i++){
      value = f( this[i],value );
    }
    return value;
  }
  var a = function(x,y){
    return x + y;
  }
  console.log(  [1,3,4,7,9].f(a,0)  );



  //12
  var a = /\d+/g;
  var b = /\d+/g;
  console.log(a == b);

  //13
  var d = 'root'
  var c = new RegExp('\\b' + d + '\\b');
  console.log( c.test('aa bb cc root dd') );



  //14
  Array.prototype.x = function(){
    this.splice.apply( this,  [0,0].concat(Array.prototype.slice.apply(arguments) ) )
    return this.length;
  };
  var arr = [1,3,5,6];
  console.log( arr.x( 1,2 ) );
  console.log( arr );


  //15
  var els = document.getElementsByClassName('cl');
  els[0].parentElement.removeChild( els[els.length-1] );
  console.log(els);
  
  //16
  var el = document.getElementById('id');
  el.onclick = (function(){
    var i = 0;
  	return function(){
  	  i += 1;
  	  if( i < 3 ){
  	    alert('click');
  	  }
  	}
  })();
  
  //17
  '1,2,3,4.5:6"7/'.replace(/([,.:"\/])/g,(function(){
    var dict = {',':'-','.':'--','"':'---','/':'----'};
    return function(r){
      return dict[ r[1] ];
    }
  })())
  
  //18
  var date = new Date(2015,2,32);
  console.log( date.getDate() );
  
  //19
  var s = 'woshi,zhong.guo,ren,wo-ai-zi.ji.de-zuo+guo';
  var t = s.split(/[,.\-\+]/);
  for(var i = 0; 10; i++){
    alert( t [ i % t.length ] );
  }
  
  //20
  for( var i in Array.prototype ){
    console.log(i);
  }
  
  //21
  //slice  subStr subString
  
  //22
  //splice  slice
  
  //23
  //parseInt  Number
  
  //24
  var o = {a:1};
  console.log( o.b.c );
  console.log( o.b && o.b.c )
  
  //25
  var num = (function(n){
    if(n === 0) return 1;
    return n * arguments.callee(n-1)
  })(4);
  
  //26
  setTimeout(function(){
    console.log(1);
    setTimeout(arguments.callee,10);
  },10)
  setInterval(function(){
    console.log(1);
  },10)
  
  //27
  var arr = [3,5,6,9,12,32,1,2];
  Array.prototype.y = function(){
    var arr = [], r = [], random, dict={};
    while(arr.length != this.length ){
      random = Math.floor(Math.random()*this.length);
      if( !dict[random] ){
        arr.push(random);
        dict[random] = true;
      }
    }
    for(var i = 0 ; i<arr.length; i++){
      r.push( this[ arr[i] ] );
    }
    return r;
  }
  var c = arr.y();
  console.log(c);
  
  //28
  var o = {a:1,b:2,c:3,d:{a:1,b:2,c:{a:1,b:2}}};
  Object.prototype.z = function(){
    var n = {};
    for( var i in this ){
      if( typeof i  == 'object' ){
        arguments.callee(i);
      }else{
        n[i] = this[i];
      }
    }
    return n;
  }
  var n = o.z();
  
}

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

}

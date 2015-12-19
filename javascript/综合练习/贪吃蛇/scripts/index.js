window.onload  = function(){
  var
  snake = [ {x:0,y:0}, {x:0,y:1}, {x:0,y:2} ],
  MAXSNAKE = 100, RIGHT = 68,LEFT = 65,UP = 87, DOWN = 83,
  SNAKECOLOR='#c4c4c4',FOODCOLOR='#ff0832',DEFAULTCOLOR = 'white',
  ROW = 10,
  defaultDirection = RIGHT,
  isInSnake = function(x,y){
    for ( var i = 0;  i < snake.length;  i++){
      if(  snake[i].x == x && snake[i].y == y){return true;}
    }
    return false;
  },
  random = function(){
    return Math.floor( Math.random()*ROW );
  },
  $ = function(id){
    return document.getElementById(id);
  },
  join =function(f,s){
    return f + '_' + s;
  },
  dropFood  = function(){
    var
    x = random(), y = random();
    if( snake.length == MAXSNAKE ){return null;}
    while( isInSnake(x,y) ){
      x = random();
      y = random();
    }
    $( join(x,y) ).style.background = FOODCOLOR;
    return {x:x,y:y};
  },
  food = dropFood(),
  zou = function(dir){
    var last  = snake.length -1,newHead,weiba;

    defaultDirection = dir;
    if( dir== RIGHT ){newHead = {x:snake[last].x, y:snake[last].y+1};}
    if( dir== LEFT  ){newHead = {x:snake[last].x, y:snake[last].y-1};}
    if( dir== DOWN  ){newHead = {x:snake[last].x+1, y:snake[last].y};}
    if( dir== UP    ){newHead = {x:snake[last].x-1, y:snake[last].y};}

    if( newHead.x >9 || newHead.x <0 || newHead.y>9 || newHead.y <0){
      alert('game over!'); return null;
    }
    if( isInSnake(newHead.x,newHead.y) ){
      alert('game over!'); return null;
    }

    snake.push(newHead);
    if(newHead.x == food.x && newHead.y == food.y){
      $( join( food.x,food.y) ).style.background = SNAKECOLOR;
      food = dropFood(); return null;
    }

    weiba = snake.shift();
    $( join( weiba.x , weiba.y) ) .style.background  = DEFAULTCOLOR;
    $( join( newHead.x , newHead.y) ).style.background = SNAKECOLOR;
    return null;
  };

  //-----------------------------------------------------------------
  (function(){
    for ( var i = 0;  i < snake.length;  i++){
      $(join(snake[i].x ,snake[i].y)).style.background = SNAKECOLOR;
    }
  })();
  document.onkeydown = function(e){
    console.log(e.keyCode);
    var direction = e.keyCode;
    if( ( direction==LEFT ||
          direction==UP   ||
          direction==RIGHT||
          direction==DOWN
        ) &&
        (Math.abs( direction - defaultDirection) !== 5 || 
         Math.abs( direction - defaultDirection) !== 3 
        )){

        zou(direction);
    }
  };

  var kaiguan = true;
  document.onclick = function(){
    if(kaiguan) {
      alert(1); kaiguan = false;
    }else{
      alert(2); kaiguan = true;
    } 
  };

};

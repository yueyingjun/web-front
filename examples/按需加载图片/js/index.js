window.onload = function(){
  var els = document.getElementsByClassName('img');
  var database = {};
  for ( var i = 0;  i < els.length;  i++){
    var pos = els[i].offsetTop;
    if( !database[pos]){
      database[pos] = [ els[i] ];
    }else{
      database[pos].push(els[i]);
    }
  }
  window.onscroll = function(){
    var timerId = setTimeout(function(){
      for ( var i = 0;  i < document.body.scrollTop+400;  i++){
        if( database[i] ){
          for ( var j = 0;  j < database[i].length;  j++){
            database[i][j].textContent = database[i][j].getAttribute('data-arial');
          }
        }
      }
    },200);
  };
  var majorityElement = function(nums) {
    var n = nums.length/2;
    var data = {};
    for(var  i = 0; i < nums.length; i++){
      if( data[ nums[i] ] !== undefined  ) data[ nums[i] ] ++;
      else data[ nums[i] ] = 1;
    }
    var count = 0;
    for (var c in data){
      if( data[c] > n ) count++;
    }
    return count;
  };
  var cc = [1,1,1,1,1,1,1,33,23];
  var ab = majorityElement(cc);
  console.log(ab);
};

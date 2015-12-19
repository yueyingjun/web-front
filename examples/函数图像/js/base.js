$(function(){
	function exp(  x  ) {
    	return x*x + 3;
    }
	
	function pow(x){
		return x*x;
	}
  
    var points = new Array();
    var hangZuoBiao = new Array();
    var pointsNumber = 20;

    for(var i = -pointsNumber ;i<pointsNumber+1;i++){
    	var zhi = exp(i);
    	points.push(zhi);
    	hangZuoBiao.push(i);
    }
    
	function max(arr){
		var max;
		for(var i = 0; i<arr.length; i++){
			if ( !max ){
				max = arr[i]
			}else if(max <arr[i]){
				max = arr[i];
			}
		}
		return max;
	}

	function min(arr) {
		var m;
		for(var i=0; i<arr.length;i++){
			if( !m ){
				m = arr[i];
			}else if( m > arr[i] ) {
				m = arr[i];
			}
		}
		return m;
	}

 	var hangJianJu = $('.biao').width()/points.length;
 	var zongGaoDu = hangJianJu*points.length;
 	$(".biao").css('height',zongGaoDu);

 	var zongJianJu = $('.biao').height()/(max(points) - min(points));
 	var zongGeShu = (max(points) - min(points));

 	for (var j=0; j < zongGeShu; j++){
 		var c = (zongGeShu/10 > 10)?zongGeShu/10:2;
 		if( j % c == 0){
 			var zong = '<div style="bottom:'+zongJianJu*j+'px" class="zuobiao">'+j+'</div>';
 		}else{
 			var zong = '<div style="bottom:'+zongJianJu*j+'px" class="zuobiao"></div>';
 		}
		$('.biao').append(zong);
 	}


	for (var i = 0 ; i< points.length ; i++){
		var width = Math.sqrt(pow((points[i+1] - points[i])*zongJianJu) + pow(hangJianJu));
		var jiaodu  = ( Math.atan( ( (points[i+1] - points[i])*zongJianJu/hangJianJu ) ))/Math.PI*180;
		jiaodu = -jiaodu;

		var div = '<div class="dian" style="width:'+width+'px;-webkit-transform-origin:0% 50%;-webkit-transform: rotate('+jiaodu+'deg);left:'+(hangJianJu*i )+'px; bottom:'+points[i]*zongJianJu+'px"></div>';
		$('.biao').append(div);

		var c = ( points.length/10 > 10) ?10:2;
		if( i % c == 0){
			var hang = '<div class="hang" style="left:'+hangJianJu*i+'px">'+hangZuoBiao[i]+'</div>';
 		}else{
 			var hang = '<div class="hang" style="left:'+hangJianJu*i+'px"></div>';
 		}
		$('.biao').append(hang);	
	}
	
	function suijiyanse( ){
		if( Math.random() > 0.8)	{
			return '#e27b1d';
		}
		if(Math.random() > 0.5){
			return '#6bb0fa';
		}
		if(Math.random() >0.3){
			return '#cb5953';
		}
		return '#c38d6e';
	}
	var color = suijiyanse();
	$('.dian').css('background-color',color);
})



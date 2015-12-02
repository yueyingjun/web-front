window.onload = function(){
	$('div').html();
	$('div').html('aaaa');
	$('div').html(function(b){
		return '警告' + b;
	})

	var fn = function(a,b){
		
	}
	fn(1)
	

	// $('div').addClass(function(i,c){
	// 	return this.getAttribute('beiyong');
	// });
	// 回调函数的概念

	// document.getElementSbyTagName();
	// el.onclick = function(){
	// };
	// el.addEventListener('',function(){},true);


	var ss = '@qq.com,@66.com,@cc.com';
	var reg = /@([\w.]+)/g;
	String.prototype.myreplace = function(reg,fn){
		var r = true;
		var ns= this,dict = {};
		while(r){
			r = reg.exec(this);
			if(r){  dict[ r[0] ] = fn.apply(r[0],r);	}
		}
		for( var name in dict){
			ns = ns.replace(name,dict[name]);
		}
		return ns;
	}
	var dd = ss.myreplace( reg,function(a,b,c){
		return '-' + b;
	} )
	console.log(dd);

	// $('div').addClass(function(){
	// 	return 'aa';
	// })
	var o = {
		b:function(fn){
			var aa = 11;
			for(var i = 0 ; i< 11; i++){
				fn.apply(this,[i,aa]);
			}
		}
	}
	o.b( function(i,aa){
		console.log(this,i,aa);
	} );

};

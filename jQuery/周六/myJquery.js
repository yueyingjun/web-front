(function(){
	var init = function(s){
		if( typeof s == 'string' && s[0] != '<'){
			for(var i=0; i<els.length;i++){
				this[i] = els[i];
			}
			this.length = els.length;
			return;
		}	
		if( s[0].childNode ){
			for(var i=0; i<s.length; i++){
				this[i] = s[i];
			}
			this.length = s.length;
			return;
		}
		if( s.childNode ){
			this.[0] = s;
			this.length = 1;
			return;
		}
		if( typeof s == 'string' && s[0] == '<'){
			var el = document.createElement(s.slice(1,-1));	
			this[0] = el;
			this.length = 1;
			return;
		}
	}
	init.prototype.addClass = function(fn){
		for(var i=0; i<this.length;i++){
			var a = fn.apply(this[i],[i,this[i].className]);
			this[i].classList.add(a);
		}
	}
	var jq = function(s){
		if( typeof s == 'function' ){
			s();
			return document;
		}
		return  new init(s);
	}
	window.$ = jq;
})();

// $('');   =>     
// {
// 	0: div
// 	1: span
// 	2: img
// 	3: div
// 	length:4
// 	__proto__:{
// 		addClass:fn(),
// 		removeClass:fn()
// 	}
// }
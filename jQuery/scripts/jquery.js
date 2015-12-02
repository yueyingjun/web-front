(function(){
	var jquery = function(selector){
		this.els = document.querySelectorAll(selector);
	}
	jquery.prototype.hasClass = function(c){
		var reg = new RegExp('\\b'+c+'\\b');
		return reg.test(this.els[0].className);
	};
	jquery.prototype.addClass = function(s){
		if( typeof s == 'string' ){
			var t = s.trim().split(' '),reg;
			for(var i=0; i<this.els.length; i++){
				for(var j = 0; j < t.length; j++){
					reg = new RegExp('\\b'+t[j]+'\\b');
					if( !reg.test(this.els[i].className) ){
						this.els[i].className += ' ' + t[j];
					}
				}
			}
		}else if( typeof s == 'function' ){
			var ns,reg;
			for(var i=0; i<this.els.length; i++){
				ns = s.apply(this.els[i],[i,this.els[i].className]);
				reg = new RegExp('\\b'+ns+'\\b');
				if( !reg.test(this.els[i].className) ){
					this.els[i].className += ' ' + ns;
				}
			}
		}else{
			throw Error();
		}
		return this;
	}
	jquery.prototype.removeClass = function(s){
		var t = s.trim().split(' '),reg;
		for(var i=0; i<this.els.length;i++){
			for(var j=0; j<t.length; j++){
				reg = new RegExp('\\s{0,1}\\b'+t[j]+'\\b');
				if( reg.test(this.els[i].className) ){
					this.els[i].className = this.els[i].className.replace(reg,'');
				}
			}
		}
		return this;
	}
	jquery.prototype.toggleClass = function(s){
		var t = s.trim().split(' '),reg;
		for(var i=0; i<this.els.length; i++){
			for(var j = 0; j<t.length; j++){
				reg = new RegExp('\\s{0,1}\\b'+t[j]+'\\b');
				if( reg.test(this.els[i].className) ){
					this.els[i].className = this.els[i].className.replace(reg,'');
				}else{
					this.els[i].className += ' '+t[j];
				}
			}
			
		}
		return this;
	}
	var $ = function(selector){
		return new jquery(selector);
	};
	window.$ = $;
})();

//   在函数内部this的指向
//   1. var fn  =  function(){}  fn括号调用的时候this指向window
//   2. var o = {
// 	        fn:function(){
// 		        var fn1 = funtion(){
// 		        }
// 	        }
//      }
//   fn1括号调用的时候其中的this指向 window
//   3. var o = {  fn:function(){}  }  o.fn() this指向o;
//   4. var fn = function(){} 
//      var o = new fn()
//      fn.prototype.fn1 = function(){}
//      fn1中this指向o
//   无论是对象中直接有的方法，还是对象原型链上的方法
//   在直接调用的时候this都是指向对象的。

//   函数对象的apply方法
//   var fn = function(){};
//   var o  = {};
//   fn.apply(o);
//   如果使用apply,那么函数会暂时作为o的方法来调用
//   这样 this 也就指向 o 这个对象
//   apply方法接受两个参数
//   第一个参数是一个对象，函数会暂时成为该对象的方法执行
//   第二个参数是一个数组，是函数的参数列表

//   Math.max()







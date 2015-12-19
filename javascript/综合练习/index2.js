window.onload = function(){
	var date = new Date();
	var meiyuetianshu = [31,28,31,30,31,30,31,31,30,31,30,31];



	//给它一个div  class= 'aaaa aa aaa'   给它一个字符串  'a'
	//aaaa  aa  aaa  a;
	addClass = function(el,s){
		var tmp = el.getAttribute('class').split(' ');
		var dict = {};
		for(var i = 0; i<tmp.length; i++){
			dict [  tmp[i] ]  = true;
		}
		if( !dict[s] ){
			el.setAttribute('class',el.getAttribute('class') + ' ' + s)
		}
	}
	removeClass = function(el,s){
		var tmp = el.getAttribute('class').split(' ');
		var dict = {};
		for(var i = 0; i<tmp.length; i++){
			dict [  tmp[i] ]  = true;
		}
		delete  dict[s];
		var ns  = '';
		for(var name in dict){
			ns += ' ' + name;
		}
		el.setAttribute('class',ns);
	}



	var isrunnian = function(year){
		if(  year%4 == 0 && year%100 !=0 || year%400 == 0){
			return true;
		}
		return false;
	}
	var previousDay = function(){
		var currentyear   =  date.getFullYear();
		var currentmonth  =  date.getMonth();
		var currentdate   =  date.getDate();
		var targetyear, targetmonth, targetdate;
		targetdate  = currentdate - 1;
		if( targetdate  == 0 ){
				targetyear  = currentyear;
				targetmonth = currentmonth - 1;
				if( targetmonth == -1 ){
					targetyear  = currentyear - 1;
					targetmonth = 11;
				}
				if(targetmonth == 1 && isrunnian(targetyear) ){
						meiyuetianshu[1] = 29;
				}
				targetdate = meiyuetianshu[targetmonth];
		}else{
				targetmonth = currentmonth; targetyear  = currentyear;
		}
		date = new Date( targetyear,targetmonth,targetdate );
	}
	var nextDay = function(){
		var currentyear   =  date.getFullYear();
		var currentmonth  =  date.getMonth();
		var currentdate   =  date.getDate();
		var targetyear, targetmonth, targetdate;
		targetdate  = currentdate + 1;
		if(currentmonth == 1 && isrunnian(currentyear) ){
			meiyuetianshu[1] = 29;
		}
		if( targetdate  > meiyuetianshu[currentmonth] ){
				targetyear  = currentyear;
				targetmonth = currentmonth  + 1;
				if( targetmonth == 12 ){
					targetyear  = currentyear + 1;
					targetmonth = 0;
				}
				targetdate = 1;
		}else{
				targetmonth = currentmonth; targetyear  = currentyear;
		}
		date = new Date( targetyear,targetmonth,targetdate );
	}

	var cc = ['日','一','二','三','四','五','六'];
	var shangyige;
	var ondatechange = function(){
		if(shangyige){
				removeClass(shangyige,'cell-hover');
		}
		var xx = date.getDate();
		var el = document.getElementById('d'+xx);
		addClass(el,'cell-hover');
		shangyige = el;

		daydate.innerHTML = date.getDate();
		var ss = date.getFullYear() + ' 年 '+ (date.getMonth() + 1)
		+ '月' + date.getDate() + '日'
		+ '星期' + cc[ date.getDay() ];
		fulldate.innerHTML = ss;
		titledate.innerHTML = ss.slice(0,-3);
	}; 
	

	var cells = document.getElementsByClassName('cell');
	var huarili = function(){
		var i = 0;
		//画前一个月的
		var tmp = date.getDate();   date.setDate(1);
		var xingqi = date.getDay(); date.setDate(tmp);
		L = xingqi == 0 ? 6 : xingqi - 1;
		if( date.getMonth() - 1 == -1){
			var shangyigeyuedetianshu = 31
		}else{
			var shangyigeyuedetianshu = meiyuetianshu[date.getMonth()-1];
		}
		for(; i<L; i++){
			cells[i].innerHTML =  shangyigeyuedetianshu - (L - i - 1);
			addClass(cells[i].parentElement,'off-month');
			cells[i].removeAttribute('id');
			cells[i].setAttribute('pr',true);
		}
		//画当月的
		for(;i < meiyuetianshu[date.getMonth()] + L ;i++){
			removeClass(cells[i].parentElement,'off-month');
			cells[i].setAttribute('id','d'+(i-L+1));
			cells[i].innerHTML = i - L + 1;
			cells[i].style.color = 'black';
			cells[i].removeAttribute('nx');cells[i].removeAttribute('pr');
		}
		//画下一个月的
		var D = i;
		for(;i < 42; i++ ){
			cells[i].setAttribute('nx',true);
			addClass(cells[i].parentElement,'off-month');
			cells[i].removeAttribute('id');
			cells[i].innerHTML = i - D + 1;
			cells[i].style.color = '#ccc';
		}
	};
	huarili();
	ondatechange();
	for(var i = 0 ; i<cells.length; i++){
		cells[i].onclick = function(){
			var a = date.getFullYear();
			var b = date.getMonth();
			var c = date.getDate();
			if( this.hasAttribute('id') ){
					date.setDate(this.innerHTML);
					ondatechange();
			}else if( this.hasAttribute('pr') ){
					//根据a b c 得到 逻辑正确的x y z
					date = new Date(x,y,z);
					huarili();
					ondatechange();
			}else if( this.hasAttribute('nx') ){
					//根据a b c 得到 逻辑正确的x y z
					date = new Date(x,y,z);
					huarili();
					ondatechange();
			}
		}
	}

	prev.onclick = function(){
		previousDay();
		huarili();
		ondatechange();//这个函数专门用来根据日期更新页面显示
	};
	next.onclick = function(){
		nextDay();
		huarili();
		ondatechange();
	}
	next.onmousedown = function(e){e.preventDefault();};
	


};
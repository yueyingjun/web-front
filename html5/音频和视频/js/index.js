window.onload=function () {
	var yinyueku = [
	{name:'my love',src:'009.mp3',geshou:'westlife',duration:'3:56'},
	{name:'yesterday once more',src:'006.mp3',geshou:'secon dean',duration:'3:58'},
	{name:'my heart will go on',src:'003.mp3',geshou:'secon dean',duration:'4:42'},
	{name:'4',src:'004.mp3',geshou:'secon dean',duration:'4:42'},
	{name:'5',src:'005.mp3',geshou:'secon dean',duration:'4:42'},
	{name:'7',src:'007.mp3',geshou:'secon dean',duration:'4:42'}
	];
	var currentsongindex;
	var LIEBIAO= 3,SHUNXU = 2, DANQU = 1,SUIJI=4;
	var currentbofangmoshi = LIEBIAO;

	var drawlist = function () {
		var el = '';
		for(var i = 0; i<yinyueku.length; i++){
			var ac = (i == currentsongindex)?'play_current':'';
			el += '<li mid="j0" class="'+ac+'"> <strong class="music_name"> '+yinyueku[i].name+' </strong> <strong class="singer_name"> '+yinyueku[i].geshou+' </strong> <strong class="play_time"> '+yinyueku[i].duration+'</strong> <div class="list_cp"> <strong class="btn_like" title="喜欢" name="myfav_0038RM350w8m1V" mid="0038RM350w8m1V"> <span> 我喜欢 </span> </strong> <strong class="btn_share" title="分享"> <span> 分享 </span> </strong> <strong class="btn_fav" title="收藏到歌单"> <span> 收藏 </span> </strong> <strong class="btn_del" title="从列表中删除"> <span> 删除 </span> </strong> </div> </li>';
		}
		divsonglist.firstElementChild.innerHTML = el;
		spansongnum1.innerHTML = '<span>'+yinyueku.length+'</span>';
		var lis = divsonglist.firstElementChild.children;
		for(var i = 0; i<lis.length; i++){
			lis[i].index  = i;
			lis[i].onclick = function(){
				audio.src = yinyueku[this.index].src;
				audio.play();
				currentsongindex = this.index;
				onsongchange();
			}
			lis[i].onmouseover = function () {
				this.classList.add('play_hover');
			}
			lis[i].onmouseout = function () {
				this.classList.remove('play_hover');
			}
		}
		var dels = document.querySelectorAll('.btn_del');
		for(var i = 0; i<dels.length; i++){
			dels[i].index = i;
			dels[i].onclick = function (e) {
				e.stopPropagation();
				var newarr = [];
				for(var i = 0; i<yinyueku.length; i++){
					if( yinyueku[this.index] != yinyueku[i] ){
						newarr.push(yinyueku[i]);
					}
				}
				yinyueku = newarr;

				if(this.index < currentsongindex) {currentsongindex -= 1};
				drawlist();
				if(this.index == currentsongindex){
					if(currentsongindex == yinyueku.length){
						audio.src = '';
						uireset();
					}else if(this.index != currentsongindex){
            audio.src = yinyueku[currentsongindex].src;
            audio.play();
            onsongchange();
          }
				}
			}
		}
	}
	drawlist();

	clear_list.onclick = function () {
		yinyueku = [];
		drawlist();
		uireset();
	}
	var uireset = function () {
		document.querySelector('.music_name').innerHTML = '<span>听我想听的歌</span>';
		document.querySelector('.singer_name').innerHTML = '<span>QQ音乐</span>';
		ptime.innerHTML = '';
		document.querySelector('.music_op').style.display = 'none';
		audio.src = '';
		spanprogress_op.style.left = '0%';
		spanplaybar.style.width = '0%';
		btnplay.className = 'play_bt';
	}

	var onsongchange = function(){
		var lis = divsonglist.firstElementChild.children;
		for(var i=0; i<lis.length; i++){
			lis[i].classList.remove('play_current');
		}
		lis[currentsongindex].classList.add('play_current');
		document.querySelector('.music_name').innerHTML = yinyueku[currentsongindex].name;
		document.querySelector('.singer_name').innerHTML = yinyueku[currentsongindex].geshou;
		document.querySelector('.play_date').innerHTML = yinyueku[currentsongindex].duration;
		document.querySelector('.music_op').style.display ='block';
	}

	var nextSong =  function () {
		if(currentsongindex == undefined){
			return;
		}
		if(currentbofangmoshi == SUIJI){
			randomSong();
			return;
		}

		currentsongindex += 1;
		currentsongindex = (currentsongindex==yinyueku.length)?0:currentsongindex;
		audio.src = yinyueku[currentsongindex].src;
		audio.play();
		onsongchange();
	}
	var prevSong = function () {
		if(currentsongindex == undefined){
			return;
		}
		if(currentbofangmoshi == SUIJI){
			randomSong();
			return;
		}
		currentsongindex -= 1;
		currentsongindex = (currentsongindex==-1)?(yinyueku.length-1):currentsongindex;
		audio.src = yinyueku[currentsongindex].src;
		audio.play();
		onsongchange();
	}
	document.querySelector('.next_bt').onclick = nextSong;
	document.querySelector('.prev_bt').onclick = prevSong;

	//处理播放模式
	btnPlayway.onclick = function () {
		divselect.style.display = 'block';
	}
	setbofangmoshi = function (num) {
		currentbofangmoshi = num;
		divselect.style.display = 'none';
		var data = {
			1:'cycle_single_bt', //单曲
			2:'ordered_bt',      //顺序播放
			3:'cycle_bt',        //列表循环
			4:'unordered_bt'     //随机播放
		};
		btnPlayway.className = data[num];
	}
	
	//---------公共函数
	var zhuanhuan = function (time) { 
		var min = parseInt(time/60);
		var sec = parseInt(time%60);
		min = (min<10)?('0'+ min):min;
		sec = (sec<10)?('0'+ sec):sec;
		return min + ':' + sec;
	}


	//---------播放进度的处理
	// state.onmousemove = function (ev) {
	// 	tips.style.left = ev.offsetX - tips.offsetWidth/2 + 'px';
	// 	var time = ev.offsetX/this.offsetWidth*audio.duration;
	// 	tips.innerHTML = zhuanhuan(time);
	// }
	// state.onmouseout = function () {
	// 	tips.style.display = 'none';
	// }
	// playerbar.onclick = function (ev) {
	// 	audio.currentTime  = ev.offsetX/this.offsetWidth*audio.duration;
	// }
	// state.onmouseover = function (ev) {
	// 	tips.style.display = 'block';
	// 	tips.style.left = ev.offsetX - tips.offsetWidth/2 + 'px';
	// 	var time = ev.offsetX/this.offsetWidth*audio.duration;
	// 	tips.innerHTML = zhuanhuan(time);
	// }
	// statePosition.onmouseover = function(ev){
	// 	ev.stopPropagation();
	// }
	// statePosition.onclick=function (ev) {
	// 	ev.stopPropagation();
	// }
	audio.ontimeupdate = function () {
		spanplaybar.style.width = this.currentTime/this.duration*100 + '%';
		spanprogress_op.style.left =  this.currentTime/this.duration*100 + '%';
		if(audio.ended){
			if(currentbofangmoshi == DANQU){
				audio.play();
			}else if(currentbofangmoshi == LIEBIAO){
				nextSong();
			}else if(currentbofangmoshi == SUIJI){
				randomSong();
			}else if(currentsongindex == SHUNXU){
				if(currentsongindex != yinyueku.length-1){
					nextSong();
				}
			}
		}
	}
	var randomSong = function () {
		currentsongindex =  Math.floor(Math.random()*yinyueku.length);
		audio.src = yinyueku[currentsongindex].src;
		audio.play();
		onsongchange();
	}

	//---------处理音量的部分
	spanmute.onclick  = (function(){
		var oldvolume;
		return function () {
			if(audio.volume){
				oldvolume = audio.volume;
				audio.volume = 0;
			}else{
				audio.volume = oldvolume;
			}
		}
	})()
	spanvolume.onclick = function (ev) {
		var v = ev.offsetX/this.offsetWidth;
		audio.volume = v;
	}
	spanvolumeop.onclick = function (ev) {
		ev.stopPropagation();
	}
	audio.onvolumechange = function(){
		if(audio.volume === 0){
			spanmute.className = 'volume_mute';
		}else{
			spanmute.className = 'volume_icon';
		}
		spanvolumeop.style.left = audio.volume*100 + '%';
		spanvolumebar.style.width = audio.volume*100 + '%';
	}

	//处理播放暂停的部分
	btnplay.onclick = function(){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
	}
	audio.onplay= function(){
		btnplay.className = 'pause_bt';
	}
	audio.onpause = function () {
		btnplay.className = 'play_bt';
	}
}

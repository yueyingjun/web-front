var canvas = document.querySelector('#canvas1');
ctx = canvas.getContext('2d'); //相当于画笔
// fill    stroke
// canvas中关于矩形的
ctx.save();
ctx.fillStyle = 'rgb(255,0,0)'
ctx.fillRect(150,150,100,100);

ctx.fillStyle = 'rgba(0,255,0,0.4)';
ctx.fillRect(200,200,100,100);

ctx.strokeStyle = 'rgb(0,0,255)';
ctx.strokeRect(3.5,3.5,100,300);

ctx.clearRect(200,200,50,50);
ctx.clearRect(0,0,400,400);

//关于线条的
ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(400,200);
ctx.lineTo(300,400);
ctx.fill();
ctx.clearRect(0,0,400,400);

ctx.beginPath();
ctx.arc(200,200,100,0,Math.PI*2);
ctx.moveTo(270,200);
ctx.arc(200,200,70,0,Math.PI);
ctx.moveTo(170,160);
ctx.arc(160,160,10,0,Math.PI*2);
ctx.stroke();

ctx.clearRect(0,0,400,400);


//stroke以线条的形式填充路径
//fill  以色块的形式填充路径

//fillRect  strokeRect  clearRect
//beginPath moveTo   lineTo  arc




ctx.fillRect(100,340,40,50);
ctx.strokeRect(10.5,10.5,100,100);
ctx.clearRect(20,20,100,100);


ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(250,200);
ctx.moveTo(350,200);
ctx.arc(300,200,50,0,Math.PI*2,true);
ctx.bezierCurveTo(297,82,219,359,200,200);
ctx.stroke();


//画布和程序的结合
ctx.clearRect(0,0,400,400);

//添加阴影
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

for(var i = 0; i<20; i++){
	ctx.beginPath();
	var xinx = Math.floor(Math.random()*1000);
	var xiny = Math.floor(Math.random()*600);
	var radius = Math.floor(Math.random()*12 + 2);
	ctx.arc(xinx,xiny,radius,0,Math.PI*2);
	ctx.fillStyle = 'rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',1)';
	ctx.fill();
}

ctx.clearRect(0,0,1000,600);
// var img = new Image();
// img.src = 'imgs/superman.jpg';
// img.onload = function(){
// 	ctx.drawImage(img,0,0);
// }
var img = document.querySelector('#aa');
// img.onload = function () {
	// ctx.drawImage(img,0,0);
// }
ctx.clearRect(0,0,600,600);

// ctx.drawImage();
//画布叠加
// var x = 40;
// var y = 30;
// draw = function () {
// 	ctx.clearRect(0,0,1000,600);
// 	x += 2;
// 	if(x == 1000){
// 		x = 0;
// 	}
// 	ctx.beginPath();
// 	ctx.arc(x,y,10,0,Math.PI*2);
// 	ctx.fill();

// }
// setInterval(draw,20);


// var canvas2 = document.querySelector('#canvas2');
// var ctx2 = canvas2.getContext('2d');
// for(var i = 0; i<10; i++){
// 		ctx2.fillRect(i*150,0,100,100);
// }
//http://www.victoriakirst.com/beziertool/
ctx.restore();

// ctx.save()  ctx.restore()
// ctx.translate() ctx.rotate();
ctx.save();
ctx.beginPath();
ctx.translate(300,300);
ctx.arc(0,0,34,0,Math.PI*2);
for(var i = 0; i<12; i++){
	ctx.rotate(Math.PI/6);
	ctx.moveTo(72,0);
	ctx.arc(60,0,12,0,Math.PI*2);
}
ctx.stroke();
ctx.restore();

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(500,100);
ctx.moveTo(100,100);
ctx.lineTo(100,500);
ctx.stroke();

ctx.save();
ctx.translate(100,100);
ctx.rotate(Math.PI/3);
ctx.fillRect(0,0,30,30);
ctx.fillRect(100,0,30,30);
ctx.stroke();
ctx.restore();


ctx.clearRect(0,0,600,600);

// var x;
// var i = 0;
// setInterval(function(){
// 	x = Math.PI/30 * i; 
// 	i++;
// 	drawClock();
// },1000)


var drawClock = function(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	ctx.clearRect(0,0,600,600);
	//保存一个干净的画布状态
	ctx.save();

	//移动画布圆点到中心
	ctx.translate(300,300);

	//画最外层的表盘
	ctx.save();
	ctx.strokeStyle = 'black';
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.shadowBlur = 5;
	ctx.shadowColor = 'black'

	ctx.lineWidth = 6; 
	ctx.beginPath();
	ctx.arc(0,0,280,0,Math.PI*2);
	ctx.stroke();
	ctx.restore();

	//画时间刻度
	ctx.save();
	ctx.lineWidth = 4;
	ctx.lineCap  = 'round';
	for(var i = 1 ; i<61; i++){
		ctx.rotate(Math.PI/30);
		ctx.beginPath();
		if(i%5 == 0 ){
			ctx.lineWidth = 6;
			ctx.moveTo(238,0);
		}else{
			ctx.lineWidth = 4;
			ctx.moveTo(248,0);
		}
		ctx.lineTo(256,0);
		ctx.stroke();
	}
	ctx.restore();


	//画时针	
	ctx.save();
	ctx.beginPath();
	var r = 360*((h*3600+m*60+s)/(12*3600))/180*Math.PI;
	ctx.rotate(r);
	ctx.lineWidth = 15;
	ctx.lineCap = 'round';
	ctx.moveTo(0,40);
	ctx.lineTo(0,-105);
	ctx.stroke();
	ctx.restore();


	//画分针
	ctx.save();
	ctx.beginPath();
	var r = (360*((m*60 + s)/3600))/180*Math.PI;
	ctx.rotate(r);
	ctx.lineWidth = 10;
	ctx.lineCap = 'round';
	ctx.strokeStyle  = '#a2845e';
	ctx.moveTo(0,60);
	ctx.lineTo(0,-125);
	ctx.stroke();
	ctx.restore();

	//画秒针
	ctx.save();
	var sec = d.getSeconds();
	ctx.rotate(Math.PI/30*s);
	ctx.beginPath();
	ctx.lineWidth = 4;
	ctx.strokeStyle = '#ff7f00';
	ctx.moveTo(0,80);
	ctx.lineTo(0,-185);
	ctx.moveTo(10,-195);
	ctx.arc(0,-195,10,0,Math.PI*2);
	ctx.moveTo(0,-165);
	ctx.stroke();
	ctx.restore();

	//画中心的小圆点
	ctx.beginPath();
	ctx.fillStyle = '#ff7f00';
	ctx.arc(0,0,10,0,Math.PI*2);
	ctx.fill();

	//复原一开始保存的那个干净的画布状态
	ctx.restore();
	requestAnimationFrame(drawClock);
}
requestAnimationFrame(drawClock);

// document.onclick = function(){
// 	location.href=(canvas.toDataURL().replace("data:image/png","data:stream/octet"));
// }
var link = document.createElement('a');
link.innerHTML = 'download image';
link.addEventListener('click', function(ev) {
    link.href = canvas.toDataURL();
    link.download = "mypainting.png";
}, false);
document.body.appendChild(link);

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// var multer = require('multer');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer());
app.use(express.static('public'));

//让public这个文件夹中的内容可以通过  / 直接访问
var data = [
  {id:0,name:1,src:2},
  {id:1,name:1,src:2},
  {id:2,name:1,src:2},
  {id:3,name:1,src:2},
  {id:4,name:1,src:2},
  {id:5,name:1,src:2},
  {id:6,name:1,src:2},
  {id:7,name:1,src:2},
  {id:8,name:1,src:2},
  {id:9,name:1,src:2},
  {id:10,name:1,src:2}
];
var pics = {
  1448380800000:['1.JPG','2,JPG','3.JPG'],
  1448523675099:['4.JPG','5,JPG','6.JPG']
};

app.get('/testget', function(req, res){
  res.json(req.query);
});
app.post('/testpost', function(req, res){
  res.json(req.body);
});


app.get('/data', function(req, res){
  res.json(data);
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
var http = require('http').Server(app);
http.listen(80, function(){
  console.log('listening on *:80');
});

// 上面这些代码实质上做了些什么事
// 所谓的web服务器软件,就是让电脑上的某个文件夹变成公开的
// 任何人都可以通过ip地址请求这个文件夹里的内容
// 前提是请求的时候要描述清楚双方交流的语言(采用http协议)


//

// node.js  就是一个应用程序  和浏览器和qq和sublime一样
// 浏览器能干嘛  能上网      能解析Js代码
// node.js       解析js代码

// 可以把node.js理解为系统级别的应用程序
// 它让我们的操作系统从现在开始可以解析js代码

// node.js 在自己的运行环境中添加了很多特定的API
// 比如对文件的操作  比如对网络请求的操作
// 对时间的操作等等

//----------------数据存储 和 逻辑操作 --------------
//浏览器      window  setInterval  setTimeout  document.
//node        http  file




// 客户端  服务器  这种模式有什么好处
// 网络的好处.
// 服务器模式服务范围是无限的.


// 浏览器根据url发起http请求
// 服务器()根据请求的内容作出回应


// js发起http请求

window.onload = function(){
  var ajax = function(o){
    if(!o.url){
      throw Error();
    }
    var req = new XMLHttpRequest();
    var type = o.type||'get';
    if(type == 'get'){
      o.url += '?';
      for ( var d in o.data){
        o.url +=  d + '=' + o.data[d] + '&';
      }
      req.open('get',o.url);
      req.send();
    }else if(type == 'post'){
      req.open('post',o.url);
      req.setRequestHeader('Content-Type','application/x-www-form-urlencode');
      var data = '';
      for ( var d in o.data){
        data += d + '=' + o.data[d] + '&';
      }
      console.log(data.slice(0,-1));
      req.send(data.slice(0,-1));
    }else{
      throw Error();
    }
    req.onreadystatechange = function(){
      if(this.readyState == this.DONE&&this.status == 200){
        o.onsuccess(this.response);
      }
    };
  };
  ajax({
    url:'/testpost',
    data:{a:1,b:2,c:2},
    type:'post',
    onsuccess:function(data){
      console.log(data);
    }
  });






  // setTimeout(function(){
  //   ajax('http://localhost/data',function(){
  //   });
  // },3000);
  // $0.onclick = function(){
  //   var req = new XMLHttpRequest();
  //   req.onreadystatechange = function(){
  //     if(this.readyState == this.DONE && this.status == 200){
  //       console.log(this.response);
  //     }
  //   };
  //   req.open('get','http://localhost/data');
  //   req.send();
  // };
  // 浏览器发送http请求的条件
  // 1.当写下url敲回车的时候
  // 2.页面刷新的时候 根据Url发送请求
  // 3.当请求的返回结果为html文件且该文件中有
  // link  script img  audio  这些标签
  // 并且这些标签的 href  src 指向一个服务器上的资源
  // 浏览器就会根据 href src的值再次发起http请求;
  // 4.a 标签被点击的时候 会换掉url 根据新的url发起请求;
  // 在不考虑js的情况下  浏览器发送请求的时间都是在页面刷新的时候
  // 如果js通过操作dom元素给页面添加了
  // img  script  link  audio
  //------js处理网络请求---------
  // 4个属性
  // readyState//准备状态 4 完成
  // status // 200  拿到结果了
  // response  // 服务器返回的结果
  // DONE  //值为4
  // //两个方法
  // open('','')  接受两个参数,  1.请求的方式  2.url
  // send()       发送这个请求
  // //一个事件
  // onreadystatechange  当readyState改变的时候触发
};

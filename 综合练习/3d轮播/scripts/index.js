window.onload = function(){
  // 基础部分的 数据存储 逻辑操作
  // -----------------------------------------------------
  // javascript特定用途部分 必须能做到的事
  // 能表达页面中的任何元素
  // (所有的页面元素对象都定义在window这个对象中)
  // 选取页面中的元素
  // els现在是一个类数组
  // 和浏览器配合通过对元素的属性进行操作改变元素的样式
  //并不是所有的对象都有style这个属性
  // 和浏览器配合监测用户行为(事件)
  var
  els = document.getElementsByClassName('mian'),

  data =  [
    {translateX:'-500px',translateZ:'-400px'},
    {translateX:'-230px',translateZ:'-200px'},
    {translateX:'0',translateZ:'0'},
    {translateX:'230px',translateZ:'-200px'},
    {translateX:'500px',translateZ:'-400px'}
  ],
  draw = function(){
    for ( var i = 0;  i < els.length;  i++){
      els[i].style.webkitTransform = 'translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
    }
    data.unshift(data.pop());
  };

  // setInterval( draw , 3000);

  //程序 = 数据结构 + 算法
  //这个函数接受两个参数,  第一个参数是一个回调函数, 第二个参数是时间s
  //这个函数的功能是 每隔s就自动帮我们调用一次传入的回调函数
  //  var el  =  document.getElementById()
  //  var els = document.getElementsByClassName()
  //  el.style.marginLeft = '';
  //  el.innerHTML = 'xx';
  //  setInterval( fn, 1000 )
  //  el.onclick = function(){ console.log(this.innerHTML); };
  // 1. id = 'screen'
  // 2. var sc = document.getElementById('screen');
  // 3. 给所有的数字加上 class    num
  // 4. var nums = document.getElementsByClassName('num');
  // 5. 给所有的代表数字的div加上一个onclick方法
  //    nums[0].onclick = function(){}
  //    for( var i =0; i<nums.length; i++){
  //      nums[i].onclick = function(){
  //         alert(this.innerHTML);
  //      };
  //    }
  // 6. 把上一步函数中的 alert(this.innerHTML)
  //    =>  sc.innderHTML = this.innerHTML

  // --------------------------------------
  // 给运算符加上class  oprator
  // var ops = document.getElementsByClassName('oprator')

  // 给等号加上id  var equl = document.getElementById('denghao')
  // 定义两个变量  firstNumber=''  secondNumber= 6;

  // 把nums[i].onclick 的那个 fuction改成
  // nums[i].onclick = function(){
  //     firstNumber = Number(this.innerHTML);
  // }

  // 给等号添加onclick
  // equl.onclick = function(){
  //      sc.innerHTML = firstNumber + secondNumber;
  // }












  var cc = document.getElementsByClassName('mian');
  cc[0].style.width =  '400px';
  cc[0].innerHTML = 'aaa';
  cc[1].onclick = function(){
    alert(this.innerHTML);
  };




};

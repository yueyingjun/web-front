jQuery概述
==========

优点
----
* 全面解决了DOM API中的兼容问题
* 框架设计优秀  sizzle.js 选择器部分已经成为各种js库的基础
* 语法精炼

```javascript
  var els = document.querySelectorAll('.box');
  var fn  = function () {
    console.log(1);
  }
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('mousedown',fn,false);
  }
```

```javascript
  var fn  = function () {
    console.log(1);
  }
  $('.box').bind('mousedown',fn);
```

```javascript
  var el = document.querySelectorAll('.box');
  el[3].style.width = '100px';
  el.className = 'add';
  el.setAttribute('attr','aa');
```

```javascript
  $('.box').eq(3).css('width',100).addClass('add').attr('attr','a');
```

```javascript
  var ul = document.querySelector('ul');
  var lis = ul.querySelectorAll('li');
  lis[lis.length] = ul;
  for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = funtion(){
      console.log(1);
    }
  }
```

```javascript
  $('ul').find('li').addClass('xxx').find('span').attr('a',1).end().css({background:'red'});
  $('ul').find('li').addBack().click(function () {
    console.log(1);
  })
```

```javascript
  var xx = new Event('aaa');
  var ul = document.querySelector('#id');
  ul.addEventListener('xx',fn,false)
  ul.dispatchEvent(xx);
```

```javascript
  $('#id').bind('xx',fn);
  $('#id').one('click',fn)
  $('#id').trigger('xx');
  $('da').delegate('xiao','click',fn);
  $('da').delegate('xiao span[zan]','click',fn);
```

```javascript
  $.ajax()
  $.each()
  $.queue()
  $.parseJSON()
```

通过选择器选取jquery对象
----------------------

### DOM对象和jQuery对象的区别

```javascript
  DOM = {
    className:'box',
    id:'id',
    offsetX:200,
    nodeType:1,
    __proto__:Element
      {
        getAttribute:fn,
        setAttribute:fn,
        querySelector:fn,
        querySelectorAll:fn
      }
    __proto__:Node
      {
        appendChild:fn,
        insertBefore:fn
      }
    __proto__:eventtarget
      {
        addEventListener:fn,
        removeEventListener:fn,
        dispatchEvent:fn
      }
  }
```

```javascript
  HTMLCOLLECTION = {
    0: DOM,
    1: DOM,
    2: DOM,
    3: DOM,
    length:4,
    __proto__:
    {

    }
    __proto__:Object
  }
```

```javascript
  jQuery对象 = {
    0: DOM,
    1: DOM,
    2: DOM,
    3: DOM,
    length:4,
    __proto__:
    {
      css:fn,
      attr:fn,
      addClass:fn,
      click:fn,
      delegate:fn,
      bind:fn,
      position:fn
    }
    __proto__:Object
  }
```

### 基本选择器

  * 标签选择器 `$('ul')`   
  * 类名选择器 `$('.box')`
  * id选择器　 `$('#id')`
  * 交叉选择器 `$('.box#id')`
  * 后代选择器 `$('.box span li')`
  * 群组选择器 `$('.box span li,.box div ul')`
  * 子选择器   `$('.box>div')`
  * `$('.box ul + dl')`
  * `$('.box ul ~ dl')`

### 筛选类选择器

  * 筛选已中范围中的首元素     `$('.box:first')`
  * 筛选已中范围中的尾元素     `$('.box:last')`
  * 已中范围中的偶数元素       `$('ul li:odd')`
  * 已中范围中的奇数元素       `$('ul li:even')`
  * 已中范围中的某一个元素     `$('ul li:eq(3)')`
  * 已中范围中大于某个数的元素  `$('ul li:gt(4)')`
  * 已中范围中小于某个数的元素  `$('ul li:lt(4)')`

  * 已中范围内包含某些元素的元素   `$('div:has(p)')`
  * 从已中范围中排除某类元素       `$('.box:not(span)')`
  * 已中范围内包含某些文字的元素   `$('div:contains(你好)')`
  * 已中范围内内容为空的元素       `$('#id.box:empty')`
  * 已中范围内可见的元素           `$('ul:visible')`
  * 已中范围内不可见的元素         `$('ul:hidden')`
  * 某个范围内的所有标题元素       `$('#footer *:header')`

  * 某个范围内获取焦点的元素       `$('#loginbox *:focus')`
  * 某个范围内所有正在执行动画的元素 `$('li:animated')`
  * 页面内链接跳转选择器            `$('p:target')`

### 属性类选择器

  * 已中范围内拥有某个属性的元素   `$('ul[data-role]')`

  * 已中范围内属性值为x的元素      `$('ul[data-role=12]')`
  * 已中范围内属性值不为x的元素    `$('ul[data-role!=12]')`
  * 已中范围内属性值以x开头的元素  `$('ul[data-role^=12]')`
  * 已中范围内属性值以x结尾的元素  `$('ul[data-role$=12]')`
  * 已中范围内属性值中包含x的元素  `$('ul[data-role*=12]')`
  * 组合使用属性选择器            `$('ul[id][data-role=12][a*=12]')`

### css3中的选择器
  * `$('ul li:nth-child(3)')`
  * `$('ul li:nth-of-type(3)')`

  * `$('ul li:nth-last-child(3)')`
  * `$('ul li:nth-last-of-type(3)')`

  * `$('ul li:first-child')`
  * `$('ul li:last-child')`
  * `$('ul li:first-of-type')`
  * `$('ul li:last-of-type')`

  * `$('ul li:only-child')`
  * `$('ul li:only-of-type')`

### 快速选取表单元素

  * 表单选择很常用 这组选择器是对属性选择器的简写
  * :password 相当于 `*[type=password]`
  * `$(':input')`
  * `$(':text')`
  * `$(':password')`
  * `$(':radio')`
  * `$(':checkbox')`
  * `$(':submit')`
  * `$(':image')`
  * `$(':reset')`
  * `$(':button')`
  * `$(':file')`

### 快速选取表单中具有某种状态的元素

  * `$('input:text:enabled')`
  * `$('input:text:disable')`
  * `$('input:radio:checked')`
  * `$('select:selected')`


### 经过以上步骤,我们得到一个jQuery对象
在实际项目中,经常需要对得到的jQuery对象做二次筛选
我们下一步为了得到一个范围更精准的jQuery对象

```javascript
  var fn = function () {
    var i = $(this).data('index');
    $el.eq(i).css('color','red');
  }
  var $el = $('.dian');
  $el.each(function(index){
    $(this).data('index',index);
  });
  $el.bind('click',fn);
```


### jQuery中的过滤函数
$函数返回一个jQuery对象
该对象类似一个dom元素的集合
过滤函数干嘛的?  
从上一步得到的jQuery对象中删除或添加若干个dom对象;
得到一个范围更精准的jQuery对象

* $el.hasClass()  返回值为布尔值
* $el.is() 接受选择器 dom对象 jq对象  回调函数

* var jieguo  = $('ul li').map(function(){
    return 'a';
  })


* $el.eq() 正数或负数

* $el.first()  
* $el.last()

* $('ul li').filter('.c')

* $el.has()  接受一个选择器 或者一个dom对象
* $el.not()  接受三种类型的参数   选择器||dom对象|| 回调函数
* $el.slice()


* $el.find();

* $el.children();  会把jquery中对象中所有dom元素的子元素都取出
* $el.closest();
* $el.next();
* $el.nextAll();
* $el.nextUntil();
* $el.offsetParent();
* $el.parent();
* $el.parents();
* $el.parentsUntil();
* $el.prev();
* $el.prevall();
* $el.prevUntil();
* $el.siblings();

* $el.add()

* $el.contents()
* $el.addBack()  
* $el.end()


$('ul').find('li').filter('.c').addBack()
* 每一个jQuery对象身上都有一个prevObject属性
  addback 和 end 都是利用了这个属性

```javascript

  $('ul li:first')
  $('ul li:nth-child(1)')

```


### 属性

```javascript
el.setAttribute
el.getAttribute
el.hasAttribute
el.removeAttribute
```

> // $('ul li').attr('a','b')  设置一个属性
> // 遍历jQuery对象中的没一个dom对象,全部设置 'a' 属性为 'b'
> // $('ul li').attr('a')
>   只会取jQuery对象中那个dom集合中的第一个dom对象的'a'属性
> // $('ul li').attr('a',function(){
    retrun Math.random();
   })

* $el.attr()  
* $el.removeAttr()  

* $el.prop(); 常用在对表单属性的操作
* $el.removeProp()

* $el.addClass()
// addClass的回调函数中的两个参数   (index  原来的类名)

* $el.removeClass()
* $el.toggleClass('aa bb cc')

* $el.html()
* $el.text()
* $el.val()

```javascript
  var els = document.getElementsByClassName('dian');
  for (var i = 0; i < els.length; i++) {
    els[i].index = i;
    els[i].onclick =  function () {
      alert(this.index);
    }
  }

```

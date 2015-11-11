/*
 *  客户端阶段兼容性问题解决的函数
 */

//通过id查找多个元素
var getElements = function(){
  var elements = {};
  for ( var i = 0;  i < arguments.length;  i++){
    var id = arguments[i];
    var elt = document.getElementById(id);
    elements[id] = elt;
  }
  return elements;
};

//解决ie8没有document.getElementsByClassName 问题
( function(){
  if(!document.getElementsByClassName){
    document.getElementsByClassName = function(className){
      document.querySelectorAll('.'+className);
    };
  }
})();
//解决ie8没有 nextElementSibling 问题
Element.prototype.next = function(){
  if(this.nextElementSibling) return this.nextElementSibling;
  var sib = this.nextSibling;
  while( sib && sib.nodeType!==1) sib = sib.nextSibling;
  return sib;
};
Element.prototype.previous = function(){
  if(this.previousElementSibling) return this.previousElementSibling;
  var sib = this.previousSibling;
  while( sib && sib.nodeType!==1) sib = sib.previousSibling;
  return sib;
};

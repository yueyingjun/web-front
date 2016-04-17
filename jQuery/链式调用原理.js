var obj  =  {
  a:1,
  b:2,
  ajiajia:function(){
    this.a += 1;
    return this;
  },
  bjiajia:function () {
    this.b += 1;
    return this;
  }
}
obj.ajiajia().bjiajia().ajiajia();

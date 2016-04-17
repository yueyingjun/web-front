(function () {
  var Q = function (selector) {
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      this[i] = els[i];
    }
    this.length  = els.length;
  }
  Q.prototype.attr = function(shuxing,zhi){
    if(zhi){
      for (var i = 0; i < this.length; i++) {
        var val = (typeof zhi === 'function')?(zhi()):zhi;
        this[i].setAttribute(shuxing,val);
      }
      return this;
    }
    return this[0] && this[0].getAttribute(shuxing);
  }
  var $ = function (selector) {
    return  new Q(selector);
  }
  window.jq = $;
})();

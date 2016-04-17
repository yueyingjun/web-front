$(function(){
  setTimeout(function(){
    $.ajax({
      url:'/php/selectStudent.php',
    });
  },0);
  

  $(document).ajaxSuccess(function(){
    console.log('success');
  })
  .ajaxStart(function(){
    console.log('start')
  })
  .ajaxSend(function(){
    console.log('send')
  })
  .ajaxStop(function(){
    console.log('stop')
  })
  .ajaxComplete(function(){
    console.log('complete')
  })
})

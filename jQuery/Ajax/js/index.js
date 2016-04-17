$(function(){
  $.ajaxSetup({
    // async:false
  })

  var $table = $('.table');
  var stuRestful = {
    c:'php/addStudent.php',   // create
    u:'php/updateStudent.php',// update
    r:'php/selectStudent.php',// read
    d:'php/deleteStudent.php' // delete
  }
  $table.bind('xuanran',function(){
    $(this).find('tbody').empty().html(
      database.map(function(v){
        return '<tr><th scope="row"><input type="text" name="xuehao" data-role="'+v.id+'" value="'+v.xuehao+'"></th> <td><input type="text"  data-role="'+v.id+'" name="name" value="'+v.name+'"></td> <td> 男<input data-role="'+v.id+'" type="radio" name="sex'+v.id+'" value="nan"> 女<input type="radio" data-role="'+v.id+'" name="sex'+v.id+'" value="nv"> </td><td>'+v.age+'</td> <td>'+v.score+'</td> <td><input type="checkbox" name="item" value="'+v.id+'"></td> </tr>'
      }).join('')
    );
    var x = $table.find('input[name^=sex]');
    x.prop('checked',true);
    database.forEach(function(value,i){
      if( value.sex == "nan" ){
        x.eq(i*2).prop('checked',true);
      }
    })
  })
  var getData = function(){
    $.ajax({
      url:stuRestful.r,
      dataType:'json'
    }).done( function (data) {
      database = data;
      $table.trigger('xuanran');
    })
  }
  setTimeout(function(){
    getData();
  },0);

  $('#add').click(function () {
    $.ajax({
      url:stuRestful.c
    }).done(function(){
      getData();
    })
  })

  var $xuanze = $('#xuanze');

  $xuanze.click(function () {
    $table.find('input[name=item]')
    .prop('checked',$(this).prop('checked'));
  })

  $table.delegate('input[name=item]','click',function(){
    if($table.find('input[name=item]:checked').length == database.length){
      $xuanze.prop('checked',true);
    }
    if( !$(this).prop('checked') ){
      $xuanze.prop('checked',false);
    }
  })
  var timerId;
  $table.delegate('input[name=name],input[name=xuehao]','keyup',function(){
    var that =  this;
    var id = $(this).attr('data-role');
    clearTimeout(timerId);
    timerId = setTimeout(function(){
      $.ajax({
        url:stuRestful.u,
        type:'post',
        data:{shuxing:$(that).prop('name'),value:$(that).val(),id:id}
      }).done(function(){
      })
    },1000)
  })

  $table.delegate('input[name^=sex]','click',function(){
    var id = $(this).attr('data-role');
    $.ajax({
      url:stuRestful.u,
      type:'post',
      data:{shuxing:'sex',value:$(this).val(),id:id}
    }).done(function(){
    })
  })

  $('#shanchu').click(function () {
    var ids = $table.find('input[name=item]:checked').map(function () {
      return $(this).val();
    }).get();

    $.ajax({
      url:stuRestful.d,
      type:'post',
      data:{x:ids}
    }).done(function () {
      $xuanze.prop('checked',false);
      // $table.find('input[name=item]:checked')
      // .parent().parent().detach();
      database = database.filter(function(v){
        return  $.inArray(v.id,ids) == -1;
      })
      $table.trigger('xuanran');
    })
  })

  $(document).ajaxSend(function(){
    $('#tongbu').text('同步中.....')
  })
  $(document).ajaxSuccess(function(){
    $('#tongbu').text('同步完成')
  })
  // setInterval(function(){
  //   $.ajax({
  //     url:stuRestful.r,
  //     dataType:'json'
  //   }).done(function (d){
  //     if(database.length != d.length){
  //       database = d;
  //       $table.trigger('xuanruan');
  //     }
  //   })
  // },2000);
})

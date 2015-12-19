$(function(){
    $(".item").hover(function(){
        $(this).find('.im').addClass('im-hover');
    },function(){
        $(this).find('.im').removeClass('im-hover');
    });

    $('.i-image-2,.i-image-3').hover(function(){
        $(this).css('z-index',100);
    },function(){
        $(this).css('z-index',10);

    });

    var src;
    var z_index;
    $('.ff').css('opacity',0);
    $('.zz').css('opacity',0);
    $('.i-image-4,.i-image-5,.i-image-6,.i-image-7,.i-image-8').hover(function(){
        src = $(this).find('img').attr('src');
        z_index = $(this).find('img').attr('z_index');
        $(this).css('transform','rotate(360deg)');
        $(this).css('transition','0.6s');
        $(this).css('transition-style','preserve-3d');
        $(this).find('img').attr('src','./image/hover_small.png');
        $(this).css('z-index','99');
        $(this).find('.ff').css('opacity','0.9');


    },function(){
        $(this).css('transform','rotate(0deg)');
        $(this).css('transition','0.1s');
        $(this).css('transition-style','preserve-3d');
        $(this).find('img').attr('src',src);
        $(this).css('z-index',z_index);
        $(this).find('.ff').css('opacity','0');

        //$(this).find('.f').hide();
    });

    $('.i-image-2,.i-image-3').hover(function(){
        src = $(this).find('img').attr('src');
        z_index = $(this).find('img').attr('z_index');
        $(this).css('transform','rotate(360deg)');
        $(this).css('transition','0.6s');
        $(this).css('transition-style','preserve-3d');
        $(this).css('z_index','99');
        $(this).find('img').attr('src','./image/hover_big.png');
        $(this).find('.zz').css('opacity','0.9');


    },function(){
        $(this).css('transform','rotate(0deg)');
        $(this).css('transition','0.1s');
        $(this).css('transition-style','preserve-3d');
        $(this).find('img').attr('src',src);
        $(this).css('z-index',z_index);
        $(this).find('.zz').css('opacity','0');


    });



})

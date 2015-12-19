$(function(){
    function mineSweep(row,mode){
        //二维数组
        this.data = [];
        //一纬数组方便遍历 
        this._data = [];
        //主题颜色 
        this.colors = ['#444444','#b9d486','#e28a80','#6cb5f4','#efc83d','#da5254','#5087e1','#689e4e','#e9b02a','#3c64bc','#5c8d44','#9c2220'];
        //行数 
        this.row = row || 4; 
        //难度 
        this.mode = mode || 0.8;
        //界面
        this.container = $('.saolei');
        this.init();
    }

    mineSweep.prototype = {
        init:function(){
            var b_width = $('#block').outerWidth(true);
            this.container.css({
                width: this.row*b_width + 'px',
                height: this.row*b_width + 'px',
                paddingRight:$('#block').css('margin-left'),
                paddingBottom:$('#block').css('margin-top')
            })
            $('.wrapper').css('width',$('.saolei').outerWidth() + 'px');
            $('.wrapper').css('margin-top',( $(window).outerHeight() - $('.wrapper').outerHeight())/2 + 'px' );
            $(window).resize(function(){
                $('.wrapper').css('margin-top',( $(window).outerHeight() - $('.wrapper').outerHeight())/2 + 'px' );
            })
            this.animateShowMine();
            this.addEvent();
        },
        animateShowMine:function(){
            this.generateMine();
            this.countNumber();
            var _Totale = this.row * this.row;
            var that = this;
            var i = 0;
            var t = setInterval(function(){
                var text  = that._data[i++];
                if (text == 'lei')
                    var $block = $('<div/>').html('').addClass('block lei').appendTo(that.container);
                else
                    var $block = $('<div/>').html('').addClass('block').appendTo(that.container);
                $block.attr('text',text);
                var color = that.colors[Math.round(Math.random()*(that.colors.length-1))];
                setTimeout(function(){
                    $block.css({
                        backgroundColor:color,
                    });
                },10)
                if( i == _Totale )  clearInterval(t);
                
            },10);
        },
        generateMine:function(){
            for ( var i = 0;  i < this.row;  i++){
                this.data[i] = [];
                for ( var j = 0;  j < this.row;  j++){
                    if( Math.random() > this.mode )
                        this.data[i].push(1);
                    else
                        this.data[i].push(0);
                }
            }
        },
        countNumber:function(){
            var t = this.data;
	        for(var i= 0; i < this.row; i++){
		        for(var j = 0; j < this.row; j++){
			        if( t[i][j] == 1 ){
                        this._data.push('lei');
                    }else{
				        var
                        d1 = (j>0)?t[i][j-1]:0,
				        d2 = (j<this.row-1)?t[i][j+1]:0,
				        d3 = (i<this.row-1 && j>0)?t[i+1][j-1]:0,
				        d4 = (i<this.row-1)?t[i+1][j]:0,
				        d5 = (i<this.row-1 && j<this.row-1)?t[i+1][j+1]:0,
				        d6 = (i>0 && j>0)?t[i-1][j-1]:0,
				        d7 = (i>0)?t[i-1][j]:0,
				        d8 = (i>0 && j<this.row-1)?t[i-1][j+1]:0;
				        this._data.push( d1+d2+d3+d4+d5+d6+d7+d8 );
                    }
		        }
	        }
        },
        addEvent:function(){
	        $(document).bind('contextmenu',function(e){ 
                return false;
	        }); 	
	        $(document).bind('selectstart',function(e){ 
                return false;
	        }); 	

            $('#restart').click(function(){
                window.location.reload();
            })
            $(document).mousedown(function(e){
                e.preventDefault();
            })
            $(document).mouseup(function(e){
                e.preventDefault();
            })

            $('.wrapper').delegate('.block','dblclick',function(e){
                alert(1);
            })
            $('.wrapper').delegate('.block','mousedown',function(e){
                e.preventDefault();
                if(e.which == 1){
                    $(this).text($(this).attr('text'));
                    $(this).css({
                        background:'white',
                        boxShadow:'1px 1px 1px black inset,-1px -1px 1px black inset,0 0 4px #ccc inset',
                        transition:'0.5s ease',
                        color:'black'
                    })
                    if($(this).attr('text') == 'lei'){
                        $('.tips').show();
                        var i = 0;
                        var t = setInterval(function(){
                            var $el = $( $('.lei')[i++] );
                            $el.css({
                                background:'white',
                                color:'black',
                                boxShadow:'1px 1px 1px black inset,-1px -1px 1px black inset,0 0 4px #ccc inset',
                                webkitTransform:'rotateZ(720deg)'
                                
                            });
                            $el.text($el.attr('text'));
                            
                            if( i == $('.lei').length ){
                                clearInterval(t);
                                setTimeout(function(){
                                    setTimeout(function(){
                                        $('.tips').css({
                                            backgroundColor: 'black',
                                            opacity:'0.8',
                                            color:'white',
                                            textAlign: 'center',
                                            lineHeight:$('.saolei').outerWidth()+'px', 
                                            fontSize:'3em'
                                        });
                                        $('.tips p').show();
                                    },10)
                                },1200)
                            }
                        },100)
                    }
                }else{
                    $(this).text($(this).attr('text'));
			        $(this).toggleClass('biaoji');
			        if( $(this).hasClass('lei') && $(this).hasClass('biaoji') ){
				        $(this).addClass('dui');
			        }else{
				        $(this).removeClass('dui');
			        }
			        if($(this).hasClass('biaoji')){
				        $(this).text('🚩');		
			        }else{
                        if($(this).attr('text') !== 'lei')
				            $(this).text($(this).attr('text'));
			        }
			        $(".dingwei").text( $('.lei').length - $('.biaoji').length);
			        if( $('.dui').length == $('.lei').length ) {
                        $('.tips').show()
                        setTimeout(function(){
                            $('.tips').css({
                                backgroundColor: 'black',
                                opacity:'0.8',
                                color:'white',
                                textAlign: 'center',
                                lineHeight:$('.saolei').outerWidth()+'px', 
                                fontSize:'3em'
                            });
                        },10)
				        $(".tips span").text("aowsome!!");
				        $(".tips p").show();
			        }
                    
                }
            })
        }
    }
    new mineSweep(6,0.8);
});






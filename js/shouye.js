
$(function() {
	var $pic = $('#pic');
	var $aLi = $pic.find('li');
	$aLi.eq(0).clone().appendTo($pic);
	var len = $aLi.length + 1;
	var perWidth = $pic.outerWidth();
	console.log(perWidth);
	$pic.css('width', len * perWidth);
	var i = 0;

	function move() {
		i++;
		if(i == len) {
			$pic.css('left', 0);
			i = 1;
		}
		if(i == -1){
			$pic.css("left",-(len-1)*perWidth);
			i = len -2;
		}
		console.log(i);
		$pic.stop().animate({
			'left': -i * perWidth
		}, 500,function(){
		/*	clearInterval(timer);
			timer = setInterval(function(){
				move();
			},1000);*/
		});
		//角标匹配
		if(i == len - 1) {
			$('#nav li').eq(0).addClass('active').siblings().removeClass('active');
		}else{
			$('#nav li').eq(i).addClass('active').siblings().removeClass('active');
			
		}
	}
	var timer = setInterval(function() {
		move();
	}, 2000)
	
	//鼠标划入小圆点
	$('#nav li').hover(function(){
		clearInterval(timer);
		i = $(this).index()-1;
		move();
	},function(){
		clearInterval(timer);
		move();
	})
	
	
	
	//左右点击
	/*$pic.hover(function(){
		$('.btn').css('display',"block");
		return false;
	},function(){
		$('.btn').css('display','none');
	})*/
	
	$('.btn:last').click(function(){
		clearInterval(timer);
		move();
		timer = setInterval(function(){
			move()
		},3000)
	})
	$('.btn:first').click(function(){
		clearInterval(timer);
		i = i-2;
		move();
	})
})


/*function GetRTime(){
    var EndTime= new Date('2017/08/04 00:00:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
      d=Math.floor(t/1000/60/60/24);
      h=Math.floor(t/1000/60/60%24);
      m=Math.floor(t/1000/60%60);
      s=Math.floor(t/1000%60);
    }
 
 
    document.getElementById("t_d").innerHTML = d + "天";
    document.getElementById("t_h").innerHTML = h + "时";
    document.getElementById("t_m").innerHTML = m + "分";
    document.getElementById("t_s").innerHTML = s + "秒";
  }
  setInterval(GetRTime,0);*/
 

 $(function(){
    $('img').hover(function(){
      $(this).animate({
        'left' : '-1px'
      },'normal');
    },function(){
      $(this).animate({
        'left' : '0px'
      },'normal');      
    });
  })



$(function(){
 $(".gw").hover(function(){
  $(".gwn").show();
 },function(){
  $(".gwn").hide();
 });
});

$(function(){
 $("#lm .lms .lms1 ul li").hover(function(){
  $(".lms1n").show();
 },function(){
  $(".lms1n").hide();
 });
});




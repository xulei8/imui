$(function(){
	resizeMain();
	$(window).resize(function() {
        resizeMain();
    });

	//展开、隐藏分组
    $(".main-box .contacts > li").click(function(){
        var $this = $(this),
            $show = $this.attr('is_show'),
            $next = $this.next();
        if( $show == 1 ){
            $this.addClass('current');
            $next.addClass('show');
            $this.attr('is_show',0);
        }else{
            $this.removeClass('current');
            $next.removeClass('show');
            $this.attr('is_show',1);
        }
	});
	
	//联系人 分组 聊天记录切换
	$(".options > li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var index = $(this).index();
		$(".main-box > ul").eq(index).addClass('show').siblings().removeClass('show');
	});
	
});

//监控窗口变化，中间main的高度随之变化
function resizeMain(){
	var wHeight   = $(window).height();
	var tHeight   = 142;  //头部高度
	var fHeight   = 60;   //底部高度
	var mHeight   = parseInt( wHeight - tHeight - fHeight - 37 - 8 );
	if( mHeight < 100 ){
		mHeight = 100;
	}
	$('.main-box').css('height',mHeight+'px');
}


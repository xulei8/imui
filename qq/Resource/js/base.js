$(function(){
	resizeMain();
	$(window).resize(function() {
        resizeMain();
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
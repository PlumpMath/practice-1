/*搜索框置顶隐藏，下滑显示*/
$(function(){
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if(top>=500){
			$("#sbox").show();
		}else{
			$("#sbox").hide();
		}
	});
});

/*banner轮播*/
$(function(){
	var index = 0;
	$("#c_btn").find("li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var _index = $(this).index();
		index = _index;
		$("#b1").find("li").eq(_index).fadeIn().siblings().hide();
	});

	setInterval(function(){
		index++;
		var length = $("#b1").find("li").length;
		if(index>=length){
			index = 0;
		}
		$("#c_btn").find("li").eq(index).addClass("on").siblings().removeClass("on");
		$("#b1").find("li").eq(index).fadeIn().siblings().hide();
	},3000);
});
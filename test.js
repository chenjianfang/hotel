$(".myclick").click(function(){
	$(".firstpart").hide();
	$(".question").show();
});
$(".que img").click(function(){
	$(this).parents(".que").hide();
	$(this).parents(".que").next().show();
});
/*控制音乐播放暂停*/
var musicBack = document.getElementById("musicBack");
$(".music").click(function(){
	if(musicBack.paused){
		musicBack.play();
	}
	else{
		musicBack.pause();
	}
});
$(function(){
	musicBack.play();
});
var number=0;
$(".check").click(function(){
	number+=10;
});

function fxcg(){
	$(".question").hide();
	if (number>=90) {		/*90分以上显示的页面*/
		$(".blank_a").hide();/*让空白隐藏*/
		$(".mathnum").text(number);/*添加分数*/
		$(".secondpart").css("z-index","9");/*大于90的面显示出来*/
		$(".thirdpart").hide();/*隐藏小于90分页面*/
	}
	if (number<90) {		/*90分一下的页面*/
		$(".blank_b").hide();/*让空白隐藏*/
		$(".minnum").text(number);/*添加分数*/
		$(".thirdpart").css("z-index","9");/*低于90分的页面显示出来*/
		$("secondpart").hide();/*隐藏高于90分页面*/
	};
}

$(function(){
	$(".music").addClass("addMusic");
	$(".music").click(function(){
		$(".music").toggleClass("addMusic");
	});
});


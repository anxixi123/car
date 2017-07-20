$(function(){
	var index = -4;
	$("#lun_zuo").click(function(){
		index--;
		if(index==-8){
			index=-4;
			$(".section ul").css("left","-642px")
		}
		$(".section ul").stop(true).animate({"left":index*214+"px"},1000)
	})
	$("#lun_you").click(function(){
		index++;
		if(index==1){
			index=-3;
			$(".section ul").css("left","-856px")
		}
		$(".section ul").stop(true).animate({"left":index*214+"px"},1000)
	})

})

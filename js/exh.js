$(".ex_bottom>ul>li").on("click", function() {
	$(this).addClass("ass").siblings().removeClass("ass");
})
$.ajax({
	url:"data/json2.json",
	dataType:"json",
	success:function(e){
		var list = e.list;
		var car = "";
		for(var i in list){
			car += "<li><a href='#'><img src='images/"+list[i].src+"'/><p>"+list[i].name+"</p></a></li>"
		};
		$('.car_uu').html(car);
		
		var hC_img = e.hC_img;
		var hall = "";
		for (var h in hC_img) {
			hall += "<img src='images/"+hC_img[h].src+"'/>"
		}
		$(".hC_left>a").html(hall);
		
		var hC_minImg = e.hC_minImg;
		var hallMin = "";
		for (var hall in hC_minImg) {
			hallMin += "<li><a href='#'><img src='images/"+hC_minImg[hall].src+"'/></a></li>"
		}
		$(".hC_minImg").html(hallMin);
		
		
		for(var i in e.hC_right){
			$(".hC_right p span").eq(i).html(e.hC_right[i])
		}
		
		var hall_Bo = e.hall_Bo;
		var hallBo = "";
		for (var h in hC_img) {
			hallBo += "<img src='images/"+hall_Bo[h].src+"'/>"
		}
		$(".hall_bottom>a").html(hallBo);
		
		
		
	}
})
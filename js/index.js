$(function() {
	$.ajax({
		type: "get",
		url: "data/json.json",
		async: true,
		dataType: "json",
		success: function(data) {
			for(var i in data.p) {
				$(".news_down a").eq(i).html(data.p[i])
			};
			for(var i in data.img) {
				$(".section a>img").eq(i).attr("src", data.img[i])
			}
		}
	});
	
	
	$.ajax({
		type: "get",
		url: "data/feed.json",
		async: true,
		success: function(data) {

			var one = data.one;
			for (var i in one) {
				$('.num').html(one[i].num);
				$('.content_1').html(one[i].content_1);
				$('.content_2').html(one[i].content_2);
				$('.rep_con').html(one[i].replay);
			}
			
			
			var two = data.two;
			for (var i in two) {
				$('.num_1').html(two[i].num);
				$('.content_3').html(two[i].content_1);
				$('.content_4').html(two[i].content_2);
				$('.rep_con_1').html(two[i].replay);
			}
		}
	});
	
	
	
	$.ajax({
		type: "get",
		url: "data/contact.json",
		async: true,
		success: function(data) {

			var contact = data.contact;
			for (var i in contact) {
				$('.contact_contact>li span').eq(i).html(contact[i].text)
			}

		}
	});
	
	
	$.ajax({
					type:"get",
					url:"data/data.json",
					dataType:"json",
					success:function(data){
						for(var i in data[0].banner_wz){
							$(".banner_wz").append($("<p>"+data[0].banner_wz[i]+"</p>"))
						}
						$(".banner_box").append("<img src='img/"+data[1].banner_box+"'/>")
						
					}
				})
	
	
	
	$.ajax({
				type:"get",
				url:"data/coupon.json",
				async:true,
				dataType:"json",
				success:function(data){
					for(var i in data.img){
						$(".banner_img img:eq("+i+")").attr("src",data.img[i]);
					}
					for(var i in data.span){
						$(".menu span:eq("+i+")").html(data.span[i]);
					}				
				}
			});
			
	$.ajax({
				type:"get",
				url:"data/json.json",
				async:true,
				dataType:"json",
				success:function(data){
					for(var i in data.imgs){
						$(".top_one img:eq("+i+")").attr("src",data.imgs[i]);
					}
					for(var i in data.spans){
						$(".top_two span:eq("+i+")").html(data.spans[i]);
					}
				}
			})
	
	
	
	$.ajax({
				type:"get",
				url:"data/car.json",
				async:true,
				dataType:"json",
				success:function(data){
					console.log(data)
					for (var i in data.p){
						$(".news_down a").eq(i).html(data.p[i])
					};
					for (var i in data.img){
						$(".section a>img").eq(i).attr("src",data.img[i])
					}
				}
			});

	var index = -4;
	$("#lun_zuo").click(function() {
		index--;
		if(index == -8) {
			index = -4;
			$(".section ul").css("left", "-642px")
		}
		$(".section ul").stop(true).animate({
			"left": index * 214 + "px"
		}, 1000)
	})
	$("#lun_you").click(function() {
		index++;
		if(index == 1) {
			index = -3;
			$(".section ul").css("left", "-856px")
		}
		$(".section ul").stop(true).animate({
			"left": index * 214 + "px"
		}, 1000)
	})
	
	$(".l-cont ol li").click(function(){
		$(".l-cont ol li a").css("color","black");
		var index = $(this).index();
		
		$(".xiaokuai").eq(index).css("display","block").siblings().css("display","none");
		$(this).find("a").css("color","#62C9f1");
	})
	
	
	
	$(".l-nav").on("click", "a", function() {
			$(this).parents("li").index()>0?$(".quanbu").css({"display":"none"}):$(".quanbu").css({"display":"block"})
			$(this).parents("li").index()>0?$(".quanbu2").css({"display":"block"}):$(".quanbu2").css({"display":"none"})
			$(this).parents("li").index()>0?$(".content").css({"background":"#ffffff"}):$(".content").css({"background":"#6F767E"})
		})
	
	
	$(".nav-box li:gt(0)").on("click",function(){
		var index =$(this).index()-1;
		$(".r-cont>div").hide();
		$(".r-cont>div").eq(index).show();
		
	})

	
})
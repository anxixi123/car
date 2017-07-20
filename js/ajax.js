	$.ajax({
				type:"GET",
				url:"data/data1.json",
				async:true,
				
				success:function(data){
					
				
					var main = data.mains;
					for(var i in main){
						$('.lista>ul p').eq(i).html(main[i].text)
					}
					for(var i in main){
						$('.lista>ul span').eq(i).html(main[i].time)
					}
					for(var i in main){
						$('.listb>ul p').eq(i).html(main[i].text)
					}
					for(var i in main){
						$('.listb>ul span').eq(i).html(main[i].time)
					}				
				}
			})	
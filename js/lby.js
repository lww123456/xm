$(function(){
	$.ajax({
			 		type:"get",
			 		url:"lby.json",
			 		async:true,
			 		dataType:"json",
			 		success:function(data){
			 			console.log(data)
			 			var str="";
			 			
			 			$.each(data.title, function(i,val) {
			 				console.log(val)
			 				str+="<li><img src='"+val.imgurl+"'/><div class='nrz52-11'><span>"+val.span+"</span></div><p><a href='#'>"+val.a1+"</a></p><div class='nrz52-12'><div class='nrz-zh'><a href='#'>"+val.a2+"</a></div></div></li>"
			 				console.log(str);
			 			});
			 			$(".nrz52").append(str);
			 		}
			 	});
	
	

	
})




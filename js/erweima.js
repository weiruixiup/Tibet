//二维码与返回顶部的出现与隐藏
	var setTop=document.getElementById("setTop");
	var erweima=document.getElementById("erweima");
	var erweima_click=document.getElementById("erweima_click");
	window.onscroll=function(){
		var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollH>400){
			erweima.style.transform="translateY(-160px)";
			erweima.style.visibility = "visible";
			setTop.style.cssText="visibility: visible;transform: translateY(-120px);";
		}
		else{
			erweima.style.cssText="visibility: hidden;";
			setTop.style.cssText="visibility: hidden;";
		}
	}
//二维码的点击隐藏
	erweima_click.onclick=function(){
		erweima.style.display="none";
	}
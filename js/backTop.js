//返回顶部
	var nowScroll;
	var mytop;
	function gotop(){
		nowScroll=document.documentElement.scrollTop||document.body.scrollTop;
		if(nowScroll>0){
			document.documentElement.scrollTop=document.body.scrollTop=nowScroll-nowScroll/10;
		}else{
			clearInterval(mytop);
			setTop.onclick = gogogo;
		}
	}
	var setTop=document.getElementById("setTop");
	function gogogo(){
		mytop=setInterval(gotop,30);
		setTop.onclick = null;
	}
	setTop.onclick = gogogo;
	
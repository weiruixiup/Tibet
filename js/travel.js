
//导航
	var move=document.getElementById("move");
	var nav=document.getElementById("nav");
	var mya=nav.getElementsByTagName("a");
	move.style.width=mya[1].offsetWidth+"px";
	mya[1].style.color="white";
	move.style.left=mya[1].offsetLeft+"px";
	for(var i=0;i<mya.length;i++){
		mya[i].index=i;
		mya[i].onmouseover=function(){
			move.style.left=this.offsetLeft+"px";
			move.style.width=this.offsetWidth+"px";
			this.style.color="white";
			if(this.index!=1){
				mya[1].style.color="#000000";
			}
		}
		mya[i].onmouseout=function(){
			move.style.width=mya[1].offsetWidth+"px";
			move.style.left=mya[1].offsetLeft+"px";
			this.style.color="#000000";	
			mya[1].style.color="white";
		}
	}

//飞机票
	var mytext1=document.getElementById("mytext1");
	var mytext2=document.getElementById("mytext2");
	var mytext3=document.getElementById("mytext3");
	var cfcs=document.getElementsByClassName("cfcs")[0];
	var a=cfcs.getElementsByTagName("a");
	var ddcs=document.getElementsByClassName("ddcs")[0];
	var b=ddcs.getElementsByTagName("a");
	var d=new Date();
	mytext1.value=d.toLocaleDateString();
	mytext1.onclick=function(){
		mytext1.type="date";
	}
	mytext2.onfocus=function(){
		cfcs.style.display="block";
	}
	mytext2.onblur=function(){
		setTimeout(function(){cfcs.style.display="none";},150);
	}
	for(var i=0;i<a.length;i++){
		a[i].index = i;
		a[i].onclick=function(){
			mytext2.value=a[this.index].innerHTML;
			cfcs.style.display="none";
		}
	}
	mytext3.onfocus=function(){
		ddcs.style.display="block";	
	}
	mytext3.onblur=function(){
		setTimeout(function(){ddcs.style.display="none";},150);
	}
	for(var j=0;j<b.length;j++){
		b[j].index=j;
		b[j].onclick=function(){
			mytext3.value=b[this.index].innerHTML;
			ddcs.style.display="none";
		}
	}


	
//登录显示
	var mengban=document.getElementById("mengban");
	var denglu=document.getElementById("denglu");
	var close=document.getElementById("close");
	denglu.onclick=function(){
		mengban.style.display="block";
	}
	close.onclick=function(){
		mengban.style.display="none";
	}
	
	

//二维码与返回顶部的出现与隐藏
	var setTop=document.getElementById("setTop");
	var erweima=document.getElementById("erweima");
	var erweima_click=document.getElementById("erweima_click");
	window.onscroll=function(){
		var scrollH = document.documentElement.scrollTop||document.body.scrollTop;
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
	


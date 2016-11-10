

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
	
	
//最下面的点击转换
	var t_body=document.getElementsByClassName("t_body")[0];
	var likeul_list=t_body.getElementsByTagName("ul");
	var huanyihuan=document.getElementById("huanyihuan");
	var m=1;
	huanyihuan.onclick=function(){
		for(var i=0;i<likeul_list.length;i++){
			likeul_list[i].style.display="none";
		}
		likeul_list[m].style.display="block";
		m++;
		if(m>2){
			m=0;
		}
	}
	
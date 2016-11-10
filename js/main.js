
//导航
	var move=document.getElementById("move");
	var nav=document.getElementById("nav");
	var mya=nav.getElementsByTagName("a");
	move.style.width=mya[0].offsetWidth+"px";
	mya[0].style.color="white";
	for(var i=0;i<mya.length;i++){
		mya[i].index=i;
		mya[i].onmouseover=function(){
			move.style.left=this.offsetLeft+"px";
			move.style.width=this.offsetWidth+"px";
			this.style.color="white";
			if(this.index!=0){
				mya[0].style.color="#000000";
			}
		}
		mya[i].onmouseout=function(){
			this.style.color="#000000";
			mya[0].style.color="white";
			move.style.width=mya[0].offsetWidth+"px";
			move.style.left=0+"px";
		}
	}





//实现轮播

window.onload = function () {
//  var lunbo_photo_left = document.getElementById('lunbo_photo_left');
//  var lunbo = document.getElementById('lunbo');
//  var lunbo2 = document.getElementById('lunbo2');
//  var btnLi = document.getElementById('buttons').getElementsByTagName('li');
//  var lunbo1Left = 0,lunbo2Left = 2220;
//  var index = 1;
//  var timer = 1;
//  lunbo2.innerHTML = lunbo.innerHTML;
//	function imgChange(){
//          lunbo1Left = lunbo1Left - 740;
//          lunbo2Left = lunbo2Left - 740;
//          
//          if(lunbo1Left < -2220){
//              lunbo.style.left = 1480 + "px"; 
//              lunbo1Left = 1480;
//          }else{
//              lunbo.style.left = lunbo1Left + "px";
//          }
//          
//          if(lunbo2Left < -2220){
//              lunbo2.style.left = 1480+"px";
//              lunbo2Left = 1480;
//              lunbo2.style.display = "none";
//          }else{
//              lunbo2.style.left = lunbo2Left +"px";
//              lunbo2.style.display = "block";
//          }
//          redBtn(timer);
//      }
//	
//	function redBtn(num){
//		for(var i=0;i<btnLi.length;i++){
//			btnLi[i].className = "";
//		}
//		if(timer<3){
//			btnLi[num].className = "on";
//			timer++;
//		}else{
//			btnLi[0].className = "on";
//			timer=1;
//		}
//		
//	}
//	
//	
//	
//	lunbo.onmouseover = function(){
//		clearInterval(lun);
//	}
//	lunbo.onmouseout = function(){
//		lun = setInterval(imgChange,3000);
//	}
//	
//	var lun = setInterval(imgChange,3000);
	
	
	
//第二个轮播
	var tsxzLunbo =document.getElementById("tsxz_lunbo");
	var tsxzText = tsxzLunbo.getElementsByTagName("p")[0];
	var imgList = tsxzLunbo.getElementsByTagName("li");
	var m = 2;
	var textList = ["第126期：嘘！这里都是西藏的秘密","醉美尼洋河","幸福吉祥-格桑梅朵","废墟里的曾经","别羡慕我在西藏工作，我的苦，你不懂|上","色彩斑斓-林芝"];
	function exchange(){
		if(m<7){
			tsxzLunbo.style.backgroundImage = "url(img/fa" + m +".jpg)";
			tsxzText.innerHTML = textList[m-1];
			borderLi(m-1);
			m++;
		}else{
			tsxzLunbo.style.backgroundImage = "url(img/fa1.jpg)";
			tsxzText.innerHTML = textList[0];
			borderLi(0);
			m = 1;
		}
	}
	function borderLi(num){
		for(var i=0;i<imgList.length;i++){
			imgList[i].className = "";
		}
		imgList[num].className = "iborder";
	}
	
	for(var i=0;i<imgList.length;i++){
		imgList[i].index = i+1;
		imgList[i].onclick = function(){
			tsxzLunbo.style.backgroundImage = "url(img/t" + this.index +".jpg)";
			m = this.index;
			borderLi(this.index-1);
		}
	}
	
	
	setInterval(exchange,3000);
}
	


//音乐盒子跳转
	function change_music(){
		var music_change=document.getElementById("music_change");
		var change_item=music_change.getElementsByTagName("a");
		var musicbox1=document.getElementById("music_box1");
		var musicbox2=document.getElementById("music_box2");
		var musicbox3=document.getElementById("music_box3");
		change_item[0].onclick=function(){
			musicbox1.style.display="block";
			musicbox2.style.display="none";
			musicbox3.style.display="none";
			change_item[0].style.color="red";
			change_item[1].style.color="darkgrey";
			change_item[2].style.color="darkgrey";
		}
		change_item[1].onclick=function(){
			musicbox2.style.display="block";
			musicbox1.style.display="none";
			musicbox3.style.display="none";
			change_item[1].style.color="red";
			change_item[0].style.color="darkgrey";
			change_item[2].style.color="darkgrey";
		}
		change_item[2].onclick=function(){
			musicbox3.style.display="block";
			musicbox1.style.display="none";
			musicbox2.style.display="none";
			change_item[2].style.color="red";
			change_item[1].style.color="darkgrey";
			change_item[0].style.color="darkgrey";
		}
	}
	change_music();




	
//登录显示
	var mengban=document.getElementById("mengban");
	var denglu=document.getElementById("denglu");
	var close=document.getElementById("close");
	denglu.onclick=function(){
		mengban.style.display="block";
	};
	close.onclick=function(){  
		mengban.style.display="none";
	};



/*carousel
 *参数
 *轮播的父级，轮播的块，按钮的父级，按钮，轮播块的宽度，执行时间，需要给按钮添加的类名
 ***************************************************************/
function carousel(carousel_fa, carousel_items, carousel_btn_fa, carousel_btns, item_width, setTime, className) {
	var index = 0;
	var timer = null;
	var carousel_fa = document.getElementById(carousel_fa);
	var carousel_items = carousel_fa.getElementsByClassName(carousel_items);
	var carousel_btn_fa = document.getElementById(carousel_btn_fa);
	var carousel_btns = carousel_btn_fa.getElementsByTagName(carousel_btns);
	var item_width = item_width;
	var outTime = setTime || 3000;
	var className = className || "focus";

	/*按钮点击的事情
	 *********************************************************************/
	for (var j = 0; j < carousel_btns.length; j++) {
		carousel_btns[j].index = j;
		carousel_btns[j].onclick = function () {
			clearInterval(timer);
			carousel_fa.style.transform = "translateX(" + (this.index * -item_width) + "px)";
			for (var n = 0; n < carousel_btns.length; n++) {
				carousel_btns[n].removeAttribute("class");
			}
			carousel_btns[this.index].setAttribute("class", className);
			index = this.index;
			timer = setInterval(carousel_1, outTime);
		};
	}

	/*鼠标移上和移除
	 *********************************************************************/
	for (var i = 0; i < carousel_items.length; i++) {
		carousel_items[i].onmouseover = function () {
			clearInterval(timer);
		}
		carousel_items[i].onmouseout = function () {
			timer = setInterval(carousel_1, outTime);
		}
	}

	/*轮播滚动
	 *********************************************************************/
	function carousel_1() {
		if (index == carousel_btns.length - 1) {
			carousel_fa.style.transform = "translateX(0px)";
			for (var j = 0; j < carousel_btns.length; j++) {
				carousel_btns[j].removeAttribute("class");
			}
			carousel_btns[0].setAttribute("class", className);
			index = -1;
		} else {
			carousel_fa.style.transform = "translateX(" + ((index + 1) * -item_width) + "px)";
			for (var j = 0; j < carousel_btns.length; j++) {
				carousel_btns[j].removeAttribute("class");
			}
			carousel_btns[index + 1].setAttribute("class", className);
		}
		index++;
	}
	timer = setInterval(carousel_1, outTime);
}

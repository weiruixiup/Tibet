
//登录
	var mytext=document.getElementById("text");
	var mypassword=document.getElementById("password");
	var check=document.getElementById("check");
	var mybutton=document.getElementById("button");
	var myform = document.getElementsByTagName("form")[0];
	
	mybutton.onclick=function(){
		if(mytext.value==""){
			alert("账号不能为空");
			mytext.focus();
		}else if(mypassword.value==""){
			alert("密码不能为空");
			mypassword.focus();
		}else{
			myform.onsubmit = "return true;";
		}
	}
	














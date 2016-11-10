
//注册
	var myemail=document.getElementById("email");
	var mytext=document.getElementById("text");
	var mypassword=document.getElementById("password");
	var mypassword2=document.getElementById("password2");
	var check=document.getElementById("chcek");
	var mybutton=document.getElementById("button");
	var myform=document.getElementsByTagName("form")[0];
	var emailPd=/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
	var ncPd=/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/;
	var passwordPd=/^[A-Za-z0-9_-]+$/;
	mybutton.onclick=function(){
		if(myemail.value==""){
			alert("邮箱不能为空");
		}else if(!emailPd.test(myemail.value)){
			alert("邮箱格式错误");
		}
		else if(mytext.value==""){
			alert("昵称不能为空");
		}else if(!ncPd.test(mytext.value)){
			alert("昵称格式错误");
		}
		else if(mypassword.value==""){
			alert("密码不能为空");
		}else if(!passwordPd.test(mypassword.value)){
			alert("密码格式错误");
		}
		else if(mypassword2.value!=mypassword.value){
			alert("两次密码不一致");
		}
		else if(check.checked==false){
			alert("接受协议");
		}
		else{
			myform.onsubmit="return true";
		}
	}
	mypassword2.onblur=function(){
		if(mypassword.value!=""){
			if(mypassword.value!=mypassword2.value){
				alert("两次密码不一致");
			}
		}
	}

/*登录用户名和密码判断及页面跳转*/
function check(){
	var name = $("#name").val();
	var pass = $("#pass").val();
	if(name=="admin" && pass=="admin"){
		alert("信息正确");
		window.location="index.html";
	}else if(name=="" || pass==""){
		alert("用户名或密码不能为空");
	}else{
		alert("用户名或密码错误");
	}
	
}
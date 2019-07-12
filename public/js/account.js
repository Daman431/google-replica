function next_press() {
	var f_name = document.getElementById('first_name').value;
	var l_name = document.getElementById('last_name').value;
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	var c_pass = document.getElementById('confirm_password').value;
	if(pass===c_pass){
		var xhr = new XMLHttpRequest();
		var data = {
			name:f_name,
			lastName:l_name,
			password:pass,
			email:user
		}
		var dataJson = JSON.stringify(data);
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			  if(this.responseText === "success"){
				alert("You have signed in Succesfully!")
				window.location = "/login"
			  }
			  else if(this.responseText === "error"){
				  if(pass.length<8){
					  alert("Password must have at least 8 characters!")
				  }
				  else{
					  alert("Please fill all the fields!");
				  }
			  }
			  else{
				  alert("user already exist!")
			  }
			}
		  };
		xhr.open("POST","/user",true);
		xhr.setRequestHeader("content-type","application/json");
		xhr.send(dataJson);
		
	}
	else{
		alert("Passwords do not match!")
	}

}
var toggle_value = "show";
function toggle() {
	if(toggle_value === "show"){
	document.getElementById("toggle_image").src = "\\Media\\show_password.png";
	document.getElementById("password").type = "text";
	document.getElementById("confirm_password").type = "text";
	toggle_value = "hide";
		}
	else if(toggle_value === "hide"){
			document.getElementById("toggle_image").src = "\\Media\\hide_password.png";
			document.getElementById("password").type = "password";
			document.getElementById("confirm_password").type = "password";
			toggle_value = "show";
		}
}
var mail = "gamil";
function email_toggle() {
	if(mail === "gamil"){
	document.getElementById("email_change").innerHTML = "Create a Gmail account instead";
	document.getElementById("info").innerHTML = "You'll need to confirm that this email belongs to you.";
	var input_area = document.getElementById("input_area");	//parent
	var uname = document.getElementById("username");	//child
	var sub_uname = document.getElementById("sub_username");	//child
	input_area.removeChild(uname);
	input_area.removeChild(sub_uname);


	var new_field = document.createElement("input");
	input_area.insertBefore(new_field,input_area.childNodes[6])
	new_field.setAttribute("id","new_username_field");
	new_field.setAttribute("placeholder","Your email username");
	mail = "other";


	}
	else if(mail === "other"){
		document.getElementById("email_change").innerHTML = "Create a Gmail account instead";
		document.getElementById("info").innerHTML = "You can use letters, numbers & periods";
	
		var input_area = document.getElementById("input_area");//parent
		var uname = document.getElementById("new_username_field");//child
		input_area.removeChild(uname);


		var new_field = document.createElement("input");
		input_area.insertBefore(new_field,input_area.childNodes[6])
		new_field.setAttribute("id","username");
		new_field.setAttribute("placeholder","Username");

		var new_sub_field = document.createElement("input");
			input_area.insertBefore(new_sub_field,input_area.childNodes[7]);
		new_sub_field.setAttribute("id","sub_username");
		new_sub_field.setAttribute("value","@gmail.com");
		new_sub_field.setAttribute("disabled","");
		mail = "gamil";
	}
}
function sign_in() {
	window.location.href = "/login"
}
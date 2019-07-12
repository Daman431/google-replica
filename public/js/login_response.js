function next_press() {
	var username = document.getElementById('username_field').value;
		xhr = new XMLHttpRequest();
		var data = {email:username}
		var dataJson = JSON.stringify(data)
		xhr.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var response = this.responseText;
				try{
				var objectdata = JSON.parse(response)
				var emailResponse = objectdata.email;
				window.localStorage.setItem("email",username);
				window.localStorage.setItem("name",objectdata.name);
				if(emailResponse.includes(username)){
					alert("Welcome " + objectdata.name)
					window.location = "/loginpass"
						}
					}
				catch(e){
					if(username == ''){
						return alert("please provide a username!")
					}
					alert(this.responseText);
				}
			}
		}
		xhr.open("POST","/emailcheck",true);
		xhr.setRequestHeader("content-type","application/json");
		xhr.send(dataJson);
	}
function learnMore() {
	window.location.href = "https://support.google.com/chrome/answer/6130773?hl=en";
}
function create() {
	window.location.href = "/New";
}
function next_press(){
    var password = document.getElementById("password_field").value;
    var email = localStorage.getItem("email");
    var data = {
        email:email,
        password:password
    };
    var dataJson = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            if(this.responseText === 'welcome'){
            alert(this.responseText)
            window.location = '/home'
            }
            else{
                alert("Wrong password!")
            }
        }
    }
    xhr.open("POST","/passcheck",true);
    xhr.setRequestHeader("content-type","application/json");
    xhr.send(dataJson);
}
var toggle_value = "show";
function toggle(){
    if(toggle_value === "show"){
    document.getElementById("toggle_image").src = "/media/show_password.png";
    document.getElementById("password_field").type = "text";
    toggle_value = "hide";
    }
    else if(toggle_value === "hide"){
        document.getElementById("password_field").type = "password";
        document.getElementById("toggle_image").src = "/media/hide_password.png";
        toggle_value = "show";
    }
}

var x = true;
function myfunction(){
	if(x){
		document.getElementById('password').type = "text";
		x = false;
	}else{
		document.getElementById('password').type = "password";
		x = true;
    }
}
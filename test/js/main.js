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

const data = [
    {
        username : "trung",
        password : "123456",
        full_name : "Le Trung"
    },
    {
        username : "dung",
        password : "dung123",
        full_name : "Nguyen Xuan Dung"
    },
    {
        username : "lanhuong",
        password : "20102000",
        full_name : "Lan Huong"
    },
    {
        username : "admin",
        password : "admin123",
        full_name : "Admin"
    }
]


const btn = document.getElementsByClassName("button");
btn[0].addEventListener('click', ()=> {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = data.find(el => el.username == username);
    if(user){
        if(user.password ==password){
            alert("dang nhap thanh cong `${data.full_name}`");
        }
        else{
            alert("sai mat khau");
        }
    }
    else{
        alert("sai username");
    }
});
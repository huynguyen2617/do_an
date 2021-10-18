const btnClick = document.getElementsByClassName("btnClick");
console.log(btnClick);
btnClick[0].addEventListener("click", () => {
    var register = document.getElementById('id01');
    var hello = document.getElementById('hello');
    register.style.display = 'block';
    // hello.style.display = 'none';
})
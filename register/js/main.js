const btnClick = document.getElementsByClassName("btnClick");
const hello = document.getElementById('hello');
btnClick[0].addEventListener("click", () => {
    var register = document.getElementById('id01');

    register.style.display = 'block';
    hello.style.display = 'none';
})
// 
// hello.addEventListener("click", ()=>{
//     hello.style.display = 'block';
//     register.style.display = 'none';
// })
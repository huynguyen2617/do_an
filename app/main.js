
function CreateElement(tag_name, class_name, value, parend_el){
    const element = document.createElement(tag_name);
    element.setAttribute("class", class_name);
    element.innerHTML = value;
    parend_el.appendChild(element);
    return element;
}
var Arr = [];

document.getElementById("add-new-task").addEventListener("click", ()=>{
    const input = document.getElementById("new-task").value;
    const ul = document.getElementsByClassName("collection");
    const li = CreateElement("li", "collection-item", input, ul[0]);
    const editBtn = CreateElement("button", "btn", "Edit", li);
    const DelBtn = CreateElement("button", "btn", "Delete", li);
    DelBtn.addEventListener("click", ()=> RemoveTask(li));
    editBtn.addEventListener("click", ()=> UpdateTask()); 
    Arr.push(input);
    
});

let sortLi = true;
const sortBtn = document.getElementById("sort-task");
sortBtn.addEventListener("click", ()=>{
    if(sortLi){
        Arr.sort(function BtnSort(a,b){
            return a-b;
        });
        RemoveLi();
        SortArr();
        return sortLi = false;
    }
    else{
        // Arr.sort(function BtnSort(a,b){
        //     return b-a;
        // });
        Arr.reverse();
        RemoveLi();
        SortArr();
        return sortLi = true;
    }
       
        
});
 
function SortArr(){
    const ul = document.getElementsByClassName("collection");
    for(let i=0; i < Arr.length; i++){
        const li = CreateElement("li", "collection-item", Arr[i], ul[0]);
        const editBtn = CreateElement("button", "btn", "Edit", li);
        const DelBtn = CreateElement("button", "btn", "Delete", li);
    }
}
 
function RemoveLi(){
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = '';
}


//remomve
const RemoveTask = (li) =>{
    li.remove();
    
}

const UpdateTask = () =>{
    const data = prompt("adas");
    // console.log(data);
}

/***********tao the li************/

// const btnAdd = document.getElementById("add-new-task");
// btnAdd.addEventListener('click', ()=>{
//     const input = document.getElementById("new-task").value;
//     // alert(input);

//     // tao the 'li'
//     const li = document.createElement('li');
//     li.setAttribute("class", "collection-item");
//     li.innerHTML = input;
//     const ul = document.getElementsByClassName("collection");
//     ul[0].appendChild(li);
//     const btn = document.createElement('button');
//     btn.setAttribute("class","btn");
//     // btn.setAttribute("id","btn-clear");
//     btn.innerHTML = "Delete";
//     li.appendChild(btn);
//     ul[0].prepend(li);
//     btn.addEventListener('click', ()=>{
//         li.remove();
//     })
// });



const btnClear = document.getElementById("delete-all");
btnClear.addEventListener('click', ()=>{
    const ul = document.getElementsByClassName("collection");
    ul[0].innerHTML = '';
    Arr.length ='';
    

    // const li = document.getElementsByClassName("collection-item");
    // if(li.length ==0){

    // }else{
    //     for(let i =0, i<li.length, i++){
    //         li[i].remove();
    //     }
    // }
});





/*const additem=()=>{
    let userinput =document.querySelector    
    ('#inp').value;
    //create list item
    // console.log(userinput)
    let listitem=document.createElement("li")
    listitem.textContent=userinput
    //target the list
    let list=document.querySelector("#todo")
    //add item to list
    list.appendChild(listitem)
    /*insert before append.appendChild
    console.log(listitem);
}*/
//let btn=document.querySelector("#btn");
//btn.addEventListener('click',additem)
//console.log()
let btn = document.querySelector("#btn");
function additem(){
    //get the value
    let userinput = document.querySelector("#input").value;

    //create a li
    let listitem = document.createElement("li");

    //add value as content to the li
    listitem.textContent=userinput;

    console.log(listitem);
    console.log(userinput);

    //target the list
    let list = document.querySelector("#todo");
    //append the item to the list
    list.appendChild(listitem);


}
//btn.addEventListener("click", additem);
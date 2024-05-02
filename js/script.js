
const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click",()=>{
    hund1eMenu();

} )

function hund1eMenu(){
    menu.classList.toggle("is-active");
   action.classList.toggle("is-active");
}

   
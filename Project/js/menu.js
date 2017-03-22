const menu = document.querySelector(".main-nav__list--responsive").classList;
const trigger = document.querySelector(".main-nav__trigger");

function menuOpen(){
    menu.toggle("main-nav__list--responsive--open");
}

trigger.addEventListener("click", menuOpen);

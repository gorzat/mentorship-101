const menu = document.querySelector(".main-nav__list--responsive");
const trigger = document.querySelector(".main-nav__trigger");

function menuOpen(){
    menu.classList.toggle("main-nav__list--responsive--open");
}

trigger.addEventListener("click", menuOpen);

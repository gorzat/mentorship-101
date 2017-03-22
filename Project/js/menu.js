function menuOpen(){
    document.querySelector(".main-nav__list--responsive").classList.toggle("main-nav__list--responsive--open");
}

document.querySelector(".main-nav__trigger").addEventListener("click", menuOpen);

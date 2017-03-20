let list = document.getElementsByClassName("cities-list__element");

function search() {
    let input = document.getElementsByClassName("content-search__field")[0].value.toLowerCase();
    for (i = 0; i < list.length; i++) {
        if (list[i].getElementsByClassName("city-box__title")[0].innerHTML.toLowerCase().indexOf(input) > -1) {
            list[i].style.display = "";
        }
        else {
            list[i].style.display = "none";
        }
    }
}

document.getElementsByClassName("content-search__field")[0].addEventListener("keyup", search);

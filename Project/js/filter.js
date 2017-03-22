const list = document.getElementsByClassName("cities-list__element");
const input = document.querySelector(".content-search__field");

function search() {
    let inputValue = input.value.toLowerCase();
    console.log(inputValue);
    for (let i = 0; i < list.length; i++) {
        if (list[i].querySelector(".city-box__title").innerHTML.toLowerCase().indexOf(inputValue) > -1) {
            list[i].style.display = "";
        }
        else {
            list[i].style.display = "none";
        }
    }
}

document.querySelector(".content-search__field").addEventListener("keyup", search);

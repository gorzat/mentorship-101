const bikeAPI = new URL('https://api.citybik.es/v2/networks');
const wikipediaAPI = new URL("https://simple.wikipedia.org/w/api.php?action=opensearch&origin=*");
const locations = [];
const limit = 10;
const overlay = document.querySelector(".js-overlay");

fetch(bikeAPI)
    .then(response => response.json())
    .then(data => displayCities(data.networks))
    .then(hideOverlay)
    .catch(error => console.error(error.message));

function displayCities(data) {
    const list = document.querySelector('.cities-list');
    const frag = document.createDocumentFragment();

    for (let i = 0; i < limit; i++) {
        const currentLocation = {};

        currentLocation.lat = Math.round(data[i].location.latitude * 1000) / 1000;
        currentLocation.lng = Math.round(data[i].location.longitude * 1000) / 1000;
        locations.push(currentLocation);
        frag.appendChild(createItem(data[i]));
    }
    list.appendChild(frag);
    initMap(locations);
}

function initMap() {
    const start = locations[0];
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: start
    });

    for (let j = 0; j < locations.length; j++) {
        new google.maps.Marker({
            position: locations[j],
            map: map
        });
    }
}

function createItem(itemData) {
    const elLi = document.createElement('li');
    const elArticle = document.createElement('article');
    const elHeader = document.createElement('header');
    const elH = document.createElement('h3');

    elLi.classList.add('cities-list__element');
    elArticle.classList.add('city-box')
    elHeader.classList.add('city-box__top');
    elH.classList.add('city-box__title');

    elLi.appendChild(elArticle);
    elArticle.appendChild(elHeader);
    elHeader.appendChild(elH);
    const text = itemData.location.city;
    const cityName = document.createTextNode(text);
    elH.appendChild(cityName);

    getArticleList(text, elLi);
    return elLi;
}

function appendArticle(dataWiki, listEl) {
    const articleEl = listEl.firstChild;
    const elP = document.createElement('p');
    const wikiText = dataWiki[2];
    const cityDesc = document.createTextNode(wikiText[0]);

    articleEl.appendChild(elP);
    elP.appendChild(cityDesc);
    elP.classList.add('city-box__description');
}

function hideOverlay(){
    overlay.addEventListener("transitionend", deleteOverlay);
    overlay.classList.add("overlay--hidden");
};

function deleteOverlay(){
    overlay.parentNode.removeChild(overlay);
}

function getArticleList(searchFor, listEl) {
    wikipediaAPI.searchParams.append('search', searchFor);

    fetch(wikipediaAPI)
        .then(response => response.json())
        .then(dataWiki => appendArticle(dataWiki, listEl))
        .catch(error => console.error(error.message));
}

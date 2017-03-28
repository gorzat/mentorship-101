const bikeAPI = new URL('https://api.citybik.es/v2/networks');
const wikipediaAPI = new URL("https://simple.wikipedia.org/w/api.php?action=opensearch&origin=*");
const locations = [];

bikeAPI.searchParams;

fetch(bikeAPI)
    .then(response => response.json())
    .then(data => displayCities(data.networks))
    .catch(error => console.error(error.message));

function displayCities(data) {
    const list = document.getElementsByClassName('cities-list')[0];
    for (let i = 0; i < 10; i++) {
        const elLi = document.createElement('li');
        const elArticle = document.createElement('article');
        const elHeader = document.createElement('header');
        const elH = document.createElement('h3');

        elLi.classList.add('cities-list__element');
        elArticle.classList.add('city-box')
        elHeader.classList.add('city-box__top');
        elH.classList.add('city-box__title');

        const listEl = list.appendChild(elLi);
        const listCurrentLi= list.getElementsByTagName('li')[i];
        listCurrentLi.appendChild(elArticle);
        elArticle.appendChild(elHeader);
        elHeader.appendChild(elH);
        let text = data[i].location.city;
        let cityName = document.createTextNode(text);
        elH.appendChild(cityName);

        getArticleList(text, listEl);

        let currentLocation = new Object();
        currentLocation.lat = Math.round(data[i].location.latitude * 1000) / 1000;
        currentLocation.lng = Math.round(data[i].location.longitude * 1000) / 1000;
        locations.push(currentLocation);
    }
    initMap(locations);
};


function initMap() {
    var start = locations[0];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: start
    });

    const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (j = 0; j < locations.length; j++) {
        new google.maps.Marker({
            position: locations[j],
            label: labels[j],
            map: map
        });
    }
}

function getArticleList(searchFor, listEl) {
    wikipediaAPI.searchParams.append("search", searchFor);

    fetch(wikipediaAPI)
        .then(response => response.json())
        .then(dataWiki => {
            const articleEl = listEl.firstChild;
            const elP = document.createElement('p');
            let wikiText = dataWiki[2];
            let cityDesc = document.createTextNode(wikiText[0]);

            articleEl.appendChild(elP);
            elP.appendChild(cityDesc);
            elP.classList.add('city-box__description');
        })
        .catch(error => console.error(error.message));
};

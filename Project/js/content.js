const b = new URL('https://api.citybik.es/v2/networks');
const w = new URL("https://simple.wikipedia.org/w/api.php?action=opensearch&origin=*");
//let searchFor = [];

let locations = new Array;


b.searchParams;

fetch(b)
    .then(response => response.json())
    //.then(data => console.log(data.networks[0].location.city))
    .then(data => displayCities(data.networks))
    .catch(error => console.error(error.message));

function displayCities(data) {
    //console.log(locations);
    for (let i = 0; i < 10; i++) {
        const list = document.getElementsByClassName('cities-list')[0];
        const el = document.createElement('li');
        const ela = document.createElement('article');
        const elhe = document.createElement('header');
        const elh = document.createElement('h3');

        el.classList.add('cities-list__element');
        ela.classList.add('city-box')
        elhe.classList.add('city-box__top');
        elh.classList.add('city-box__title');

        const lel = list.appendChild(el);
        const listli = list.getElementsByTagName('li')[i];
        listli.appendChild(ela);
        ela.appendChild(elhe);
        elhe.appendChild(elh);
        let text = data[i].location.city;
        let cityName = document.createTextNode(text);
        elh.appendChild(cityName);

        //elp.classList.add('test2');
        //searchFor.push(text);
        getArticleList(text, listli);

        let currentLocation = new Object();
        currentLocation.lat = Math.round(data[i].location.latitude * 1000)/1000;
        //console.log(currentLocation.lat);
        currentLocation.lng = Math.round(data[i].location.longitude*1000)/1000;


        locations.push(currentLocation);
    }
    //console.log(locations);
    initMap(locations);
};

//console.log(locations[0]);

function initMap() {

    var start = locations[0];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: start
    });

const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(j=0; j<locations.length; j++) {
        // console.log(locations[j]);
        new google.maps.Marker({
        position: locations[j],
        label: labels[j],
        map: map
    });
    }
}


function getArticleList(searchFor2, listli) {
    w.searchParams.append("search", searchFor2);

    fetch(w)
        .then(response => response.json())
        .then(data2 => {
            const articleEl = listli.firstChild;
            const elp = document.createElement('p');
            let newT = data2[2];
            let cityDesc = document.createTextNode(newT[0]);

            articleEl.appendChild(elp);
            elp.appendChild(cityDesc);
            elp.classList.add('city-box__description');
        })
        .catch(error => console.error(error.message));
};

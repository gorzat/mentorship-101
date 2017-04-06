const poslowieApi = new URL("https://api-v3.mojepanstwo.pl/dane/poslowie/");
const okreg = "conditions[poslowie.sejm_okreg_id]";
const krakow = 13;

class Rebels{
    constructor(api, conditions, param) {
        this.api = api;
        this.conditions = conditions;
        this.param = param;
    }
    
   	displayRebels(data) {
        this.poslowie = data.map(val => (val.data["poslowie.zbuntowanie"] + "," + val.data["poslowie.nazwa"])).sort().map(val => val.split(","));
        this.poslowie.forEach(i => console.log(i[1] + " wskaźnik zbuntowania: " + i[0]));
    }

    getRebels() {
        (this.api).searchParams.append(this.conditions, this.param);

        fetch(this.api)
        .then(response => response.json())
        .then(data => this.displayRebels(data.Dataobject))
        .catch(error => console.error(error.message));
    }
}

const rebelsKrakow = new Rebels(poslowieApi, okreg, krakow);
rebelsKrakow.getRebels();

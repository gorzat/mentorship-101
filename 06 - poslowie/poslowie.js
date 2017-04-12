const poslowieApi = new URL("https://api-v3.mojepanstwo.pl/dane/poslowie/");
const okreg = "conditions[poslowie.sejm_okreg_id]";
const krakow = 13;

class Rebels {
    constructor(api, conditions, param) {
        this.api = api;
        this.conditions = conditions;
        this.param = param;
    }

    displayRebels(data) {
        this.poslowie = data
            .sort((a, b) => a.data["poslowie.zbuntowanie"] - b.data["poslowie.zbuntowanie"])
            .forEach(row => console.log(row.data["poslowie.nazwa"] + " wskaźnik zbuntowania " + row.data["poslowie.zbuntowanie"]));
    }

    showRebels() {
        (this.api).searchParams.append(this.conditions, this.param);

        fetch(this.api)
            .then(response => response.json())
            .then(data => this.displayRebels(data.Dataobject))
            .catch(error => console.error(error.message));
    }
}

const rebelsKrakow = new Rebels(poslowieApi, okreg, krakow);
rebelsKrakow.showRebels();

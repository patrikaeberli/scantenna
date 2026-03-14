let dataset = null

async function loadDataset(){

let url="https://data.geo.admin.ch/ch.bakom.standorte-mobilfunkanlagen/standorte-mobilfunkanlagen/standorte-mobilfunkanlagen_2056.json"

let res=await fetch(url)
dataset=await res.json()

console.log("Daten geladen:",dataset.features.length)

}

loadDataset()

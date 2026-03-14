let map = L.map('map').setView([46.8,8.3],8)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

let markers = []

function clearMarkers(){
    markers.forEach(m=>map.removeLayer(m))
    markers=[]
}

function addMarker(lat,lon,popup){

    let m=L.marker([lat,lon]).addTo(map)

    if(popup) m.bindPopup(popup)

    markers.push(m)

}

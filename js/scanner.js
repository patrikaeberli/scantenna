function scan(){

if(!dataset){
alert("Daten werden geladen")
return
}

if(userLat===null){
alert("Standort wählen")
return
}

let lang=document.getElementById("lang").value
let radius=parseFloat(document.getElementById("radius").value)*1000

clearMarkers()

let antennas=[]

dataset.features.forEach(f=>{

let p=f.properties
if(!p.koord) return

let parts=p.koord.split(",")

let E=parseFloat(parts[0])
let N=parseFloat(parts[1])

let [lat,lon]=transform2056to4326(E,N)

let d=haversine(userLat,userLon,lat,lon)

if(d<=radius){

antennas.push({
distance:d,
lat,
lon,
station:p.station,
typ:p["typ_"+lang],
tech:p["techno_"+lang],
power:p["power_"+lang],
limit:p["agw_"+lang],
approval:p["bewilligung_"+lang]
})

}

})

antennas.sort((a,b)=>a.distance-b.distance)

let html=""

antennas.forEach(a=>{

let popup=
"<b>"+a.station+"</b><br>"+
a.typ+"<br>"+
a.tech+"<br>"+
a.power+"<br>"+
a.limit+"<br>"+
a.approval+"<br>"+
Math.round(a.distance)+" m"

addMarker(a.lat,a.lon,popup)

html+="<tr>"+
"<td>"+(a.distance/1000).toFixed(2)+"</td>"+
"<td>"+a.station+"</td>"+
"<td>"+a.typ+"</td>"+
"<td>"+a.tech+"</td>"+
"<td>"+a.power+"</td>"+
"<td>"+a.limit+"</td>"+
"<td>"+a.approval+"</td>"+
"</tr>"

})

document.getElementById("antennalist").innerHTML=html

document.getElementById("result").innerHTML=
antennas.length+" Antennen gefunden"

}

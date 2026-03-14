function transform2056to4326(E,N){

let E_aux=(E-2600000)/1000000
let N_aux=(N-1200000)/1000000

let lat=
16.9023892
+3.238272*N_aux
-0.270978*Math.pow(E_aux,2)
-0.002528*Math.pow(N_aux,2)
-0.0447*Math.pow(E_aux,2)*N_aux
-0.0140*Math.pow(N_aux,3)

let lon=
2.6779094
+4.728982*E_aux
+0.791484*E_aux*N_aux
+0.1306*E_aux*Math.pow(N_aux,2)
-0.0436*Math.pow(E_aux,3)

lat=lat*100/36
lon=lon*100/36

return[lat,lon]

}


function haversine(lat1,lon1,lat2,lon2){

let R=6371000

let φ1=lat1*Math.PI/180
let φ2=lat2*Math.PI/180
let Δφ=(lat2-lat1)*Math.PI/180
let Δλ=(lon2-lon1)*Math.PI/180

let a=
Math.sin(Δφ/2)**2+
Math.cos(φ1)*Math.cos(φ2)*
Math.sin(Δλ/2)**2

return R*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))

}

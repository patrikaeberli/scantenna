let userLat = null
let userLon = null

function initLanguageSelector() {
  const langSelect = document.getElementById("lang")
  const languages = {en:"English", de:"Deutsch", fr:"Français", it:"Italiano"}

  for (const code in languages) {
    const option = document.createElement("option")
    option.value = code
    option.innerHTML = languages[code]
    langSelect.appendChild(option)
  }
  applyTranslations()

  langSelect.addEventListener("change", applyTranslations)
}

function applyTranslations() {
  const lang = document.getElementById("lang").value

  // Titlles
  document.getElementById("title").innerHTML = t("title")
  document.getElementById("languagetitle").innerHTML = t("languagetitle")
  document.getElementById("languageinfo").innerHTML = t("languageinfo")
  document.getElementById("locationtitle").innerHTML = t("locationtitle")
  document.getElementById("locationinfo").innerHTML = t("locationinfo")
  document.getElementById("scantitle").innerHTML = t("scantitle")
  document.getElementById("scaninfo").innerHTML = t("scaninfo")
  document.getElementById("radiuslabel").innerHTML = t("radiuslabel")
  document.getElementById("antennalisttitle").innerHTML = t("antennalisttitle")
  document.getElementById("addressguide").innerHTML = t("addressguide")

  // Buttons
  document.getElementById("scanlocation").innerHTML = "📍 " + t("scanlocation")
  document.getElementById("searchaddress").innerHTML = t("searchaddress")
  document.getElementById("scan").innerHTML = "🔎 " + t("scan")

  // Antennen Liste
  document.getElementById("thdistance").innerHTML = t("thdistance")
  document.getElementById("thstation").innerHTML = t("thstation")
  document.getElementById("thtype").innerHTML = t("thtype")
  document.getElementById("thtechnology").innerHTML = t("thtechnology")
  document.getElementById("thpower").innerHTML = t("thpower")
  document.getElementById("thlimit").innerHTML = t("thlimit")
  document.getElementById("thapproval").innerHTML = t("thapproval")

  const warningElem = document.getElementById("langwarning")
  if (warningElem) {
    warningElem.innerHTML = getLangWarning(lang)
  }
}




// Geolocation
function useLocation() {
  navigator.geolocation.getCurrentPosition(pos => {
    userLat = pos.coords.latitude
    userLon = pos.coords.longitude

    map.setView([userLat, userLon], 13)
    addMarker(userLat, userLon, t("scanlocation"))
  })
}





// Addresse bei API einfügen
async function searchAddress() {
  let address = document.getElementById("address").value
  let url = "https://api3.geo.admin.ch/rest/services/api/SearchServer?searchText="
            + encodeURIComponent(address)
            + "&type=locations"
  let res = await fetch(url)
  let data = await res.json()
  
  if (!data.results || data.results.length === 0) {
    alert(t("searchaddress") + " " + t("notfound"))
    return
  }

  let coord = data.results[0].attrs
  userLat = coord.lat
  userLon = coord.lon

  map.setView([userLat, userLon], 13)
  addMarker(userLat, userLon, t("searchaddress"))
}

initLanguageSelector()

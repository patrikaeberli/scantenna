const translations = {
  en: {
    title: "Scantenna",
    languagetitle: "Languages",
    languageinfo: "choose your language",
    locationtitle: "Location",
    locationinfo: "choose your location",
    scanlocation: "scan current location",
    addressguide: "Search for your location as specific as possible using: Cantons, Cities, street, housenumber etc. <br> more info here: <a target='_blank' href='https://docs.geo.admin.ch/access-data/search.html'>docs.geo.admin.ch/access-data/search.html</a>",
    searchaddress: "Search address",
    scantitle: "Scan settings",
    scaninfo: "start scanning",
    radiuslabel: "Radius (km)",
    scan: "Scan antennas",
    result: "antennas found",
    antennalisttitle: "Found antennas",
    thdistance: "Distance (km)",
    thstation: "Station",
    thtype: "Type",
    thtechnology: "Technology",
    thpower: "Power",
    thlimit: "Limit value",
    thapproval: "Approval"
  },
  de: {
    title: "Scantenna",
    languagetitle: "Sprachen",
    languageinfo: "",
    locationtitle: "",
    locationinfo: "",
    scanlocation: "",
    addressguide: "",
    searchaddress: "",
    scantitle: "",
    scaninfo: "",
    radiuslabel: "Radius (km)",
    scan: "",
    result: "",
    antennalisttitle: "",
    thdistance: "",
    thstation: "",
    thtype: "",
    thtechnology: "",
    thpower: "",
    thlimit: "",
    thapproval: ""
  },
  fr: {
    title: "Scantenna",
    languagetitle: "",
    languageinfo: "",
    locationtitle: "",
    locationinfo: "",
    scanlocation: "",
    searchaddress: "",
    scantitle: "",
    scaninfo: "",
    radiuslabel: "Radius (km)",
    scan: "",
    result: "",
    antennalisttitle: "",
    thdistance: "",
    thstation: "",
    thtype: "",
    thtechnology: "",
    thpower: "",
    thlimit: "",
    thapproval: ""
  },
  it: {
    title: "Scantenna",
    languagetitle: "",
    languageinfo: "",
    locationtitle: "",
    locationinfo: "",
    scanlocation: "",
    searchaddress: "",
    scantitle: "",
    scaninfo: "",
    radiuslabel: "Radius (km)",
    scan: "",
    result: "",
    antennalisttitle: "",
    thdistance: "",
    thstation: "",
    thtype: "",
    thtechnology: "",
    thpower: "",
    thlimit: "",
    thapproval: ""
  }
}


function t(key) {
  const lang = document.getElementById("lang")?.value || "de"

  if (translations[lang] && translations[lang][key] && translations[lang][key].trim() !== "") {
    return translations[lang][key]
  }

  if (translations.en && translations.en[key] && translations.en[key].trim() !== "") {
    return translations.en[key]
  }

  return key
}

function getLangWarning(lang){
  if(lang === "en") return ""

  const keys = Object.keys(translations.en)
  const missingOrEmpty = keys.filter(key => {
    return !translations[lang] || !translations[lang][key] || translations[lang][key].trim() === ""
  })

  if(missingOrEmpty.length > 0){
    const langNames = {de:"German", fr:"French", it:"Italian", en:"English"}
    return `${langNames[lang] || lang} is not fully supported yet`
  }

  return ""
}

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
    languageinfo: "Wählen Sie Ihre Sprache",
    locationtitle: "Standort",
    locationinfo: "Wählen Sie Ihren Standort",
    scanlocation: "Aktuellen Standort scannen",
    addressguide: "Suchen Sie Ihren Standort so genau wie möglich nach: Kantonen, Städten, Strasse, Hausnummer etc. <br> Mehr Infos hier: <a target='_blank' href='https://docs.geo.admin.ch/access-data/search.html'>docs.geo.admin.ch/access-data/search.html</a>",
    searchaddress: "Adresse suchen",
    scantitle: "Scan-Einstellungen",
    scaninfo: "Scan starten",
    radiuslabel: "Radius (km)",
    scan: "Antennen scannen",
    result: "Antennen gefunden",
    antennalisttitle: "Gefundene Antennen",
    thdistance: "Distanz (km)",
    thstation: "Station",
    thtype: "Typ",
    thtechnology: "Technologie",
    thpower: "Leistung",
    thlimit: "Grenzwert",
    thapproval: "Bewilligung"
  },
  fr: {
    title: "Scantenna",
    languagetitle: "Langues",
    languageinfo: "choisissez votre langue",
    locationtitle: "Emplacement",
    locationinfo: "choisissez votre emplacement",
    scanlocation: "scanner l'emplacement actuel",
    addressguide: "Recherchez votre emplacement de la manière la plus précise possible en utilisant : Cantons, Villes, rue, numéro de maison etc. <br> plus d'infos ici : <a target='_blank' href='https://docs.geo.admin.ch/access-data/search.html'>docs.geo.admin.ch/access-data/search.html</a>",
    searchaddress: "Rechercher une adresse",
    scantitle: "Paramètres de scan",
    scaninfo: "lancer le scan",
    radiuslabel: "Rayon (km)",
    scan: "Scanner les antennes",
    result: "antennes trouvées",
    antennalisttitle: "Antennes trouvées",
    thdistance: "Distance (km)",
    thstation: "Station",
    thtype: "Type",
    thtechnology: "Technologie",
    thpower: "Puissance",
    thlimit: "Valeur limite",
    thapproval: "Autorisation"
  },
  it: {
    title: "Scantenna",
    languagetitle: "Lingue",
    languageinfo: "scegli la tua lingua",
    locationtitle: "Posizione",
    locationinfo: "scegli la tua posizione",
    scanlocation: "scansiona la posizione attuale",
    addressguide: "Cerca la tua posizione nel modo più specifico possibile utilizzando: Cantoni, Città, via, numero civico ecc. <br> maggiori informazioni qui: <a target='_blank' href='https://docs.geo.admin.ch/access-data/search.html'>docs.geo.admin.ch/access-data/search.html</a>",
    searchaddress: "Cerca indirizzo",
    scantitle: "Impostazioni di scansione",
    scaninfo: "inizia la scansione",
    radiuslabel: "Raggio (km)",
    scan: "Scansiona antenne",
    result: "antenne trovate",
    antennalisttitle: "Antenne trovate",
    thdistance: "Distanza (km)",
    thstation: "Stazione",
    thtype: "Tipo",
    thtechnology: "Tecnologia",
    thpower: "Potenza",
    thlimit: "Valore limite",
    thapproval: "Approvazione"
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

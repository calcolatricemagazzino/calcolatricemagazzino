function calcola() {
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;
  dataora = document.getElementById("dataora").value;
  stackzainodesert = document.getElementById("zainodesert").value;
  stackzainocamo = document.getElementById("zainocamo").value;
  stackglock18 = document.getElementById("glock18").value;
  stackpdwcamo = document.getElementById("pdwcamo").value;
  stackfucilem16 = document.getElementById("fucilem16").value;
  stacksacchettodipallini = document.getElementById("sacchettodipallini").value;
  stacksacchettodipallini023 = document.getElementById(
    "sacchettodipallini023"
  ).value;
  stackcaricatoreco2 = document.getElementById("caricatoreco2").value;
  stackcaricatoregreengas = document.getElementById("caricatoregreengas").value;
  stackzainotiratore = document.getElementById("zainotiratore").value;
  stackpistolaantica = document.getElementById("pistolaantica").value;
  stackenervit = document.getElementById("enervit").value;
  stackmedagliasouvenir = document.getElementById("medagliasouvenir").value;
  nfattura = document.getElementById("nfattura").value;
  zainodesert = 90;
  zainocamo = 90;
  glock18 = 1960;
  pdwcamo = 2240;
  fucilem16 = 2800;
  sacchettodipallini = 360;
  sacchettodipallini023 = 520;
  caricatoreco2 = 160;
  caricatoregreengas = 240;
  zainotiratore = 1960;
  pistolaantica = 7500;
  enervit = 160;
  medagliasouvenir = 560;

  totale =
    stackzainodesert * zainodesert +
    stackzainocamo * zainocamo +
    stackglock18 * glock18 +
    stackpdwcamo * pdwcamo +
    stackfucilem16 * fucilem16 +
    stacksacchettodipallini * sacchettodipallini +
    stacksacchettodipallini023 * sacchettodipallini023 +
    stackcaricatoreco2 * caricatoreco2 +
    stackcaricatoregreengas * caricatoregreengas +
    stackzainotiratore * zainotiratore +
    stackpistolaantica * pistolaantica +
    stackenervit * enervit +
    stackmedagliasouvenir * medagliasouvenir;

  if (stackzainodesert == 0) {
    zainodeserttext = "";
  } else {
    zainodeserttext = "- " + stackzainodesert + "x1 Zaino Desert" + "<br>";
  }

  if (stackzainocamo == 0) {
    zainocamotext = "";
  } else {
    zainocamotext = "- " + stackzainocamo + "x1 Zaino Camo" + "<br>";
  }

  if (stackglock18 == 0) {
    glock18text = "";
  } else {
    glock18text = "- " + stackglock18 + "x1 Glock 18" + "<br>";
  }

  if (stackpdwcamo == 0) {
    pdwcamotext = "";
  } else {
    pdwcamotext = "- " + stackpdwcamo + "x1 PDW Camo" + "<br>";
  }

  if (stackfucilem16 == 0) {
    fucilem16text = "";
  } else {
    fucilem16text = "- " + stackfucilem16 + "x1 Fucile M16" + "<br>";
  }

  if (stacksacchettodipallini == 0) {
    sacchettodipallinitext = "";
  } else {
    sacchettodipallinitext =
      "- " + stacksacchettodipallini + "x64 Sacchetto di Pallini" + "<br>";
  }

  if (stacksacchettodipallini023 == 0) {
    sacchettodipallini023text = "";
  } else {
    sacchettodipallini023text =
      "- " +
      stacksacchettodipallini023 +
      "x64 sacchetto di pallini 0.23" +
      "<br>";
  }

  if (stackcaricatoreco2 == 0) {
    caricatoreco2text = "";
  } else {
    caricatoreco2text =
      "- " + stackcaricatoreco2 + "x64 Caricatore CO2" + "<br>";
  }

  if (stackcaricatoregreengas == 0) {
    caricatoregreengastext = "";
  } else {
    caricatoregreengastext =
      "- " + stackcaricatoregreengas + "x64 Caricatore Green Gas" + "<br>";
  }

  if (stackzainotiratore == 0) {
    zainotiratoretext = "";
  } else {
    zainotiratoretext =
      "- " + stackzainotiratore + "x1 Zaino Tiratore" + "<br>";
  }

  if (stackpistolaantica == 0) {
    pistolaanticatext = "";
  } else {
    pistolaanticatext =
      "- " + stackpistolaantica + "x1 Pistola Antica" + "<br>";
  }

  if (stackenervit == 0) {
    enervittext = "";
  } else {
    enervittext = "- " + stackenervit + "x64 Enervit" + "<br>";
  }

  if (stackmedagliasouvenir == 0) {
    medagliasouvenirtext = "";
  } else {
    medagliasouvenirtext = "- " + stackmedagliasouvenir + "x1 Enervit" + "<br>";
  }

  document.getElementById("output").innerHTML =
    "<br>" +
    "<br>" +
    "(Pagina 1)" +
    "<br>" +
    "<br>" +
    "§1§lFATTURA" +
    "<br>" +
    "§1§oMagazzini" +
    "<br>" +
    "<br>" +
    "§8Cliente§0" +
    "<br>" +
    cliente +
    "<br>" +
    "<br>" +
    "§8Azienda§0" +
    "<br>" +
    azienda +
    "<br>" +
    "<br>" +
    "§8Data§0" +
    "<br>" +
    dataora +
    "<br>" +
    "(Pagina 2)" +
    "<br>" +
    "<br>" +
    "§1§lFATTURA" +
    "<br>" +
    "§1§oMagazzini" +
    "<br>" +
    "<br>" +
    "§8Prodotti acquistati§0" +
    "<br>" +
    zainodeserttext +
    zainocamotext +
    glock18text +
    pdwcamotext +
    fucilem16text +
    sacchettodipallinitext +
    sacchettodipallini023text +
    caricatoreco2text +
    caricatoregreengastext +
    zainotiratoretext +
    pistolaanticatext +
    enervittext +
    medagliasouvenirtext +
    "<br>" +
    "§9Importo totale" +
    "<br>" +
    "§9$ §9§l" +
    totale +
    "<br>" +
    "<br>" +
    "<br>" +
    "<br>" +
    "SCONTRINO" +
    "<br>" +
    "/scontrino Magazzini " +
    totale +
    " " +
    cliente +
    " Rifornimento #" +
    nfattura +
    " " +
    "(" +
    dataora +
    ")";
}

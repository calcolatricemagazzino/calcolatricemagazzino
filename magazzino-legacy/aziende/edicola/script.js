function calcola() {
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;
  dataora = document.getElementById("dataora").value;
  stackerbaccia = document.getElementById("erbaccia").value;
  stackradiceerrata = document.getElementById("radiceerrata").value;
  stackradicelumna = document.getElementById("radicelumna").value;
  stackpipa = document.getElementById("pipa").value;
  stackgrinder = document.getElementById("grinder").value;
  stackaccendino = document.getElementById("accendino").value;
  stacksigarette = document.getElementById("sigarette").value;
  nfattura = document.getElementById("nfattura").value;
  erbaccia = 480;
  radiceerrata = 720;
  radicelumna = 800;
  pipa = 64;
  grinder = 1000;
  accendino = 80;
  sigarette = 20;

  totale =
    stackerbaccia * erbaccia +
    stackradiceerrata * radiceerrata +
    stackradicelumna * radicelumna +
    stackpipa * pipa +
    stackgrinder * grinder +
    stackaccendino * accendino +
    stakcsigarette * sigarette;

  if (stackerbaccia == 0) {
    erbacciatext = "";
  } else {
    erbacciatext = "- " + stackerbaccia + "x64 Erbaccia" + "<br>";
  }

  if (stackradiceerrata == 0) {
    radiceerratatext = "";
  } else {
    radiceerratatext = "- " + stackradiceerrata + "x64 Radice Errata" + "<br>";
  }

  if (stackradicelumna == 0) {
    radicelumnatext = "";
  } else {
    radicelumnatext = "- " + stackradicelumna + "x64 Radice Lumna" + "<br>";
  }

  if (stackpipa == 0) {
    pipatext = "";
  } else {
    pipatext = "- " + stackpipa + "x1 Pipa" + "<br>";
  }

  if (stackaccendino == 0) {
    accendinotext = "";
  } else {
    accendinotext = "- " + stackaccendino + "x1 Accendino" + "<br>";
  }

  if (stackgrinder == 0) {
    grindertext = "";
  } else {
    grindertext = "- " + stackgrinder + "x1 Grinder" + "<br>";
  }

  if (stacksigarette == 0) {
    sigarettetext = "";
  } else {
    sigarettetext = "- " + stacksigarette + "x1 Sigarette" + "<br>";
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
    erbacciatext +
    radiceerratatext +
    radicelumnatext +
    pipatext +
    accendinotext +
    grindertext +
    sigarettetext +
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
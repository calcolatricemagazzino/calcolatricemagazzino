function calcola() {
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;
  dataora = document.getElementById("dataora").value;
  stackstendardosemplice = document.getElementById("stendardosemplice").value;
  stackstendardomodificato = document.getElementById(
    "stendardomodificato"
  ).value;
  stackfuochiartificio = document.getElementById("fuochiartificio").value;

  nfattura = document.getElementById("nfattura").value;
  stendardosemplice = 260;
  stendardomodificato = 415;
  fuochiartificio = 400;

  totale =
    stackstendardosemplice * stendardosemplice +
    stackstendardomodificato * stendardomodificato +
    stackfuochiartificio * fuochiartificio;

  if (stackstendardosemplice == 0) {
    stendardosemplicetext = "";
  } else {
    stendardosemplicetext =
      "- " + stackstendardosemplice + "x8 Stendardo Semplice" + "<br>";
  }

  if (stackstendardomodificato == 0) {
    stendardomodificatotext = "";
  } else {
    stendardomodificatotext =
      "- " + stackstendardomodificato + "x8 Stendardo Modificato" + "<br>";
  }

  if (stackfuochiartificio == 0) {
    fuochiartificiotext = "";
  } else {
    fuochiartificiotext =
      "- " + stackfuochiartificio + "x64 Fuochi d'Artificio" + "<br>";
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
    stendardosemplicetext +
    stendardomodificatotext +
    fuochiartificiotext +
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

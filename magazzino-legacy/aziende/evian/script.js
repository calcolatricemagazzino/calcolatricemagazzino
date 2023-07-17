function calcola() {
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;
  dataora = document.getElementById("dataora").value;
  stackbottiglietteplastica = document.getElementById(
    "bottiglietteplastica"
  ).value;
  stackevianenergy = document.getElementById("evianenergy").value;
  nfattura = document.getElementById("nfattura").value;
  bottiglietteplastica = 24;
  evianenergy = 176;

  totale =
    stackbottiglietteplastica * bottiglietteplastica +
    stackevianenergy * evianenergy;

  if (stackbottiglietteplastica == 0) {
    bottiglietteplasticatext = "";
  } else {
    bottiglietteplasticatext =
      "- " +
      stackbottiglietteplastica +
      "x64 Bottigliette in Plastica" +
      "<br>";
  }

  if (stackevianenergy == 0) {
    evianenergytext = "";
  } else {
    evianenergytext = "- " + stackevianenergy + "x64 Evian Energy" + "<br>";
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
    bottiglietteplasticatext +
    evianenergytext +
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

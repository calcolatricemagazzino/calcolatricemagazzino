function calcola() {
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;
  dataora = document.getElementById("dataora").value;
  pezziiphone4s = document.getElementById("iphone4s").value;
  pezziiphone7 = document.getElementById("iphone7").value;
  pezziipadpro = document.getElementById("ipadpro").value;
  pezzimac = document.getElementById("mac").value;
  pezzimacpro = document.getElementById("macpro").value;
  nfattura = document.getElementById("nfattura").value;
  iphone4s = 280;
  iphone7 = 560;
  ipadpro = 800;
  mac = 1920;
  macpro = 2800;

  totale =
    pezziiphone4s * iphone4s +
    pezziiphone7 * iphone7 +
    pezziipadpro * ipadpro +
    pezzimac * mac +
    pezzimacpro * macpro;

  if (pezziiphone4s == 0) {
    iphone4stext = "";
  } else {
    iphone4stext = "- " + pezziiphone4s + "x1 iPhone 4S" + "<br>";
  }

  if (pezziiphone7 == 0) {
    iphone7text = "";
  } else {
    iphone7text = "- " + pezziiphone7 + "x1 iPhone 7" + "<br>";
  }

  if (pezziipadpro == 0) {
    ipadprotext = "";
  } else {
    ipadprotext = "- " + pezziipadpro + "x1 iPad PRO" + "<br>";
  }

  if (pezzimac == 0) {
    mactext = "";
  } else {
    mactext = "- " + pezzimac + "x1 Mac" + "<br>";
  }

  if (pezzimacpro == 0) {
    macprotext = "";
  } else {
    macprotext = "- " + pezzimacpro + "x1 Mac PRO" + "<br>";
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
    iphone4stext +
    iphone7text +
    ipadprotext +
    mactext +
    macprotext +
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

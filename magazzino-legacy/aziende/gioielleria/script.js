function calcola() {
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;
  dataora = document.getElementById("dataora").value;
  pezzifedenunziale = document.getElementById("fedenunziale").value;
  pezziorologio = document.getElementById("orologio").value;
  pezzibraccialeargento = document.getElementById("braccialeargento").value;
  pezzianellodiamante = document.getElementById("anellodiamante").value;
  pezzibraccialeoro = document.getElementById("braccialeoro").value;
  pezzirolexcuoio = document.getElementById("rolexcuoio").value;
  pezzirolexoro = document.getElementById("rolexoro").value;
  pezzidivinorosso = document.getElementById("divinorosso").value;
  pezzidivinonero = document.getElementById("divinonero").value;
  pezzidivinoazzurro = document.getElementById("divinoazzurro").value;
  pezzilgbt = document.getElementById("lgbt").value;
  pezzibraccialivittoriani = document.getElementById(
    "braccialevittoriano"
  ).value;
  nfattura = document.getElementById("nfattura").value;
  fedenunziale = 2320;
  orologio = 4960;
  braccialeargento = 4960;
  anellodiamante = 5760;
  braccialeoro = 13200;
  rolexcuoio = 13200;
  rolexoro = 19200;
  divinorosso = 25000;
  divinonero = 35200;
  divinoazzurro = 49600;
  lgbt = 3360;
  braccialivittoriani = 560;

  totale =
    pezzifedenunziale * fedenunziale +
    pezziorologio * orologio +
    pezzibraccialeargento * braccialeargento +
    pezzianellodiamante * anellodiamante +
    pezzibraccialeoro * braccialeoro +
    pezzirolexcuoio * rolexcuoio +
    pezzirolexoro * rolexoro +
    pezzidivinorosso * divinorosso +
    pezzidivinonero * divinonero +
    pezzidivinoazzurro * divinoazzurro +
    pezzilgbt * lgbt +
    pezzibraccialivittoriani * braccialivittoriani;

  if (pezzifedenunziale == 0) {
    fedenunzialetext = "";
  } else {
    fedenunzialetext = "- " + pezzifedenunziale + "x1 Fede Nunziale" + "<br>";
  }

  if (pezziorologio == 0) {
    orologiotext = "";
  } else {
    orologiotext = "- " + pezziorologio + "x1 Orologio" + "<br>";
  }

  if (pezzibraccialeargento == 0) {
    braccialeargentotext = "";
  } else {
    braccialeargentotext =
      "- " + pezzibraccialeargento + "x1 Bracciale Argento" + "<br>";
  }

  if (pezzianellodiamante == 0) {
    anellodiamantetext = "";
  } else {
    anellodiamantetext =
      "- " + pezzianellodiamante + "x1 Anello in Diamante" + "<br>";
  }

  if (pezzibraccialeoro == 0) {
    braccialeorotext = "";
  } else {
    braccialeorotext = "- " + pezzibraccialeoro + "x1 Bracciale Oro" + "<br>";
  }

  if (pezzirolexcuoio == 0) {
    rolexcuoiotext = "";
  } else {
    rolexcuoiotext = "- " + pezzirolexcuoio + "x1 Rolex Cuoio" + "<br>";
  }

  if (pezzirolexoro == 0) {
    rolexorotext = "";
  } else {
    rolexorotext = "- " + pezzirolexoro + "x1 Rolex Oro" + "<br>";
  }

  if (pezzidivinorosso == 0) {
    divinorossotext = "";
  } else {
    divinorossotext = "- " + pezzidivinorosso + "x1 C. Divino Rosso" + "<br>";
  }

  if (pezzidivinonero == 0) {
    divinonerotext = "";
  } else {
    divinonerotext = "- " + pezzidivinonero + "x1 C. Divino Nero" + "<br>";
  }

  if (pezzidivinoazzurro == 0) {
    divinoazzurrotext = "";
  } else {
    divinoazzurrotext =
      "- " + pezzidivinoazzurro + "x1 C. Divino Azzurro" + "<br>";
  }

  if (pezzilgbt == 0) {
    lgbttext = "";
  } else {
    lgbttext = "- " + pezzilgbt + "x1 C. LGBT 1/2/3/4" + "<br>";
  }

  if (pezzibraccialivittoriani == 0) {
    braccialivittorianitext = "";
  } else {
    braccialivittorianitext =
      "- " + pezzibraccialivittoriani + "x1 Bracciale Vittoriano" + "<br>";
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
    fedenunzialetext +
    orologiotext +
    braccialeargentotext +
    anellodiamantetext +
    braccialeorotext +
    rolexcuoiotext +
    rolexorotext +
    divinorossotext +
    divinonerotext +
    divinoazzurrotext +
    lgbttext +
    braccialivittorianitext +
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

function calcola() {
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;
  dataora = document.getElementById("dataora").value;
  stackhotdog = document.getElementById("hotdog").value;
  stacksushi = document.getElementById("sushi").value;
  stackhamburger = document.getElementById("hamburger").value;
  stackpane = document.getElementById("pane").value;
  stackcaffe = document.getElementById("caffe").value;
  stackpepsi = document.getElementById("pepsi").value;
  stackpringles = document.getElementById("pringles").value;
  stackmilkshake = document.getElementById("milkshake").value;
  stackgin = document.getElementById("gin").value;
  stackwhisky = document.getElementById("whisky").value;
  stackvodka = document.getElementById("vodka").value;
  stackbirra = document.getElementById("birra").value;
  stackcodeina = document.getElementById("codeina").value;
  stackblueangel = document.getElementById("blueangel").value;
  stacktacos = document.getElementById("tacos").value;
  stacksucchi = document.getElementById("succhi").value;
  stackgelati = document.getElementById("gelati").value;
  stackmojito = document.getElementById("mojito").value;
  stackghiaccioli = document.getElementById("ghiaccioli").value;
  stackzuppafunghi = document.getElementById("zuppafunghi").value;
  stacksalmone = document.getElementById("salmone").value;
  stackoreo = document.getElementById("oreo").value;

  nfattura = document.getElementById("nfattura").value;
  hotdog = 48;
  sushi = 200;
  hamburger = 200;
  pane = 200;
  caffe = 104;
  pepsi = 304;
  pringles = 256;
  milkshake = 250;
  gin = 256;
  whisky = 768;
  vodka = 768;
  birra = 440;
  codeina = 768;
  blueangel = 512;
  tacos = 200;
  succhi = 256;
  gelati = 200;
  ghiaccioli = 200;
  mojito = 512;
  zuppafunghi = 560;
  salmone = 560;
  oreo = 320;

  totale =
    stackhotdog * hotdog +
    stacksushi * sushi +
    stackhamburger * hamburger +
    stackpane * pane +
    stackcaffe * caffe +
    stackpepsi * pepsi +
    stackpringles * pringles +
    stackmilkshake * milkshake +
    stackgin * gin +
    stackwhisky * whisky +
    stackvodka * vodka +
    stackbirra * birra +
    stackcodeina * codeina +
    stackblueangel * blueangel +
    stacktacos * tacos +
    stacksucchi * succhi +
    stackgelati * gelati +
    stackmojito * mojito +
    stackghiaccioli * ghiaccioli +
    stackzuppafunghi * zuppafunghi +
    stacksalmone * salmone +
    stackoreo * oreo;

  if (stackhotdog == 0) {
    hotdogtext = "";
  } else {
    hotdogtext = "- " + stackhotdog + "x64 HotDog" + "<br>";
  }

  if (stacksushi == 0) {
    sushitext = "";
  } else {
    sushitext = "- " + stacksushi + "x64 Sushi" + "<br>";
  }

  if (stackhamburger == 0) {
    hamburgertext = "";
  } else {
    hamburgertext = "- " + stackhamburger + "x64 Hamburger" + "<br>";
  }

  if (stackpane == 0) {
    panetext = "";
  } else {
    panetext = "- " + stackpane + "x64 Pane" + "<br>";
  }

  if (stackcaffe == 0) {
    caffetext = "";
  } else {
    caffetext = "- " + stackcaffe + "x64 Caffè/C. Macchiato" + "<br>";
  }

  if (stackpepsi == 0) {
    pepsitext = "";
  } else {
    pepsitext = "- " + stackpepsi + "x64 Pepsi" + "<br>";
  }

  if (stackpringles == 0) {
    pringlestext = "";
  } else {
    pringlestext = "- " + stackpringles + "x64 Pringles" + "<br>";
  }

  if (stackmilkshake == 0) {
    milkshaketext = "";
  } else {
    milkshaketext = "- " + stackmilkshake + "x64 MilkShake" + "<br>";
  }

  if (stackgin == 0) {
    gintext = "";
  } else {
    gintext = "- " + stackgin + "x64 Gin Lemon" + "<br>";
  }

  if (stackwhisky == 0) {
    whiskytext = "";
  } else {
    whiskytext = "- " + stackwhisky + "x64 Whisky" + "<br>";
  }

  if (stackvodka == 0) {
    vodkatext = "";
  } else {
    vodkatext = "- " + stackvodka + "x64 Vodka" + "<br>";
  }

  if (stackbirra == 0) {
    birratext = "";
  } else {
    birratext = "- " + stackbirra + "x64 Birra" + "<br>";
  }

  if (stackcodeina == 0) {
    codeinatext = "";
  } else {
    codeinatext = "- " + stackcodeina + "x64 Codeina" + "<br>";
  }
  if (stackblueangel == 0) {
    blueangeltext = "";
  } else {
    blueangeltext = "- " + stackblueangel + "x64 Blue Angel" + "<br>";
  }
  if (stacktacos == 0) {
    tacostext = "";
  } else {
    tacostext = "- " + stacktacos + "x64 Tacos" + "<br>";
  }
  if (stacksucchi == 0) {
    succhitext = "";
  } else {
    succhitext = "- " + stacksucchi + "x64 Succhi di Frutta" + "<br>";
  }
  if (stackgelati == 0) {
    gelatitext = "";
  } else {
    gelatitext = "- " + stackgelati + "x64 Gelati" + "<br>";
  }
  if (stackghiaccioli == 0) {
    ghiacciolitext = "";
  } else {
    ghiacciolitext = "- " + stackghiaccioli + "x64 Ghiaccioli" + "<br>";
  }
  if (stackmojito == 0) {
    mojitotext = "";
  } else {
    mojitotext = "- " + stackmojito + "x64 Mojito" + "<br>";
  }
  if (stackzuppafunghi == 0) {
    zuppafunghitext = "";
  } else {
    zuppafunghitext = "- " + stackzuppafunghi + "x64 Zuppa di Funghi" + "<br>";
  }
  if (stacksalmone == 0) {
    salmonetext = "";
  } else {
    salmonetext = "- " + stacksalmone + "x64 Salmone" + "<br>";
  }
  if (stackoreo == 0) {
    oreotext = "";
  } else {
    oreotext = "- " + stackoreo + "x64 Oreo" + "<br>";
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
    hotdogtext +
    sushitext +
    hamburgertext +
    panetext +
    caffetext +
    pepsitext +
    pringlestext +
    milkshaketext +
    gintext +
    whiskytext +
    vodkatext +
    birratext +
    codeinatext +
    blueangeltext +
    tacostext +
    succhitext +
    gelatitext +
    ghiacciolitext +
    mojitotext +
    zuppafunghitext +
    salmonetext +
    oreotext +
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

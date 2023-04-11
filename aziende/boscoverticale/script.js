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
  stackzuppadifunghi = document.getElementById("zuppadifunghi").value;
  stacksalmone = document.getElementById("salmone").value;
  stackoreo = document.getElementById("oreo").value;
  stackmoet = document.getElementById("moet").value;
  stackdomperignom = document.getElementById("domperignom").value;
  stackprosecco = document.getElementById("prosecco").value;
  stackchampagne = document.getElementById("champagne").value;
  stackmartini = document.getElementById("martini").value;
  stackjackspisporks = document.getElementById("jackspisporks").value;
  stackrosenerodavola = document.getElementById("rosenerodavola").value;
  stackdongiovanni = document.getElementById("dongiovanni").value;
  stackovettokinder = document.getElementById("ovettokinder").value;
  nfattura = document.getElementById("nfattura").value;
  hotdog = 40;
  sushi = 160;
  hamburger = 160;
  pane = 160;
  caffe = 80;
  pepsi = 280;
  pringles = 240;
  milkshake = 160;
  gin = 240;
  whisky = 760;
  vodka = 760;
  birra = 400;
  codeina = 760;
  blueangel = 480;
  tacos = 160;
  succhi = 240;
  gelati = 160;
  ghiaccioli = 160;
  mojito = 480;
  zuppadifunghi = 560;
  salmone = 560;
  oreo = 320;
  moet = 700;
  domperignom = 700;
  prosecco = 700;
  champagne = 700;
  martini = 700;
  jackspisporks = 700;
  rosenerodavola = 700;
  dongiovanni = 700;
  ovettokinder = 320;

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
    stackzuppadifunghi * zuppadifunghi +
    stacksalmone * salmone +
    stackoreo * oreo +
    stackmoet * moet +
    stackdomperignom * domperignom +
    stackprosecco * prosecco +
    stackchampagne * champagne +
    stackmartini * martini +
    stackjackspisporks * jackspisporks +
    stackrosenerodavola * rosenerodavola +
    stackdongiovanni * dongiovanni +
    stackovettokinder * ovettokinder;

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
  if (stackzuppadifunghi == 0) {
    zuppadifunghitext = "";
  } else {
    zuppadifunghitext =
      "- " + stackzuppadifunghi + "x64 Zuppa di Funghi" + "<br>";
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
  if (stackmoet == 0) {
    moettext = "";
  } else {
    moettext = "- " + stackmoet + "x64 Moet" + "<br>";
  }
  if (stackdomperignom == 0) {
    domperignomtext = "";
  } else {
    domperignomtext = "- " + stackdomperignom + "x64 Dom Perignom" + "<br>";
  }
  if (stackprosecco == 0) {
    proseccotext = "";
  } else {
    proseccotext = "- " + stackprosecco + "x64 Prosecco" + "<br>";
  }
  if (stackchampagne == 0) {
    champagnetext = "";
  } else {
    champagnetext = "- " + stackchampagne + "x64 Champagne" + "<br>";
  }
  if (stackmartini == 0) {
    martinitext = "";
  } else {
    martinitext = "- " + stackmartini + "x64 Martini" + "<br>";
  }
  if (stackjackspisporks == 0) {
    jackspisporkstext = "";
  } else {
    jackspisporkstext =
      "- " + stackjackspisporks + "x64 Jack Spisporks" + "<br>";
  }
  if (stackrosenerodavola == 0) {
    rosenerodavolatext = "";
  } else {
    rosenerodavolatext =
      "- " + stackrosenerodavola + "x64 Rose' Nero D'Avola" + "<br>";
  }
  if (stackdongiovanni == 0) {
    dongiovannitext = "";
  } else {
    dongiovannitext = "- " + stackdongiovanni + "x64 Don Giovanni" + "<br>";
  }
  if (stackovettokinder == 0) {
    ovettokindertext = "";
  } else {
    ovettokindertext = "- " + stackovettokinder + "x64 Ovetto Kinder" + "<br>";
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
    zuppadifunghitext +
    salmonetext +
    oreotext +
    moettext +
    domperignomtext +
    proseccotext +
    champagnetext +
    martinitext +
    jackspisporkstext +
    rosenerodavolatext +
    dongiovannitext +
    ovettokindertext +
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

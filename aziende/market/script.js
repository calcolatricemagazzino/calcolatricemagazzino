function calcola() {
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;
  dataora = document.getElementById("dataora").value;
  stackcompletoadidas = document.getElementById("completoadidas").value;
  stackcompletolellykelly = document.getElementById("completolellykelly").value;
  stackcompletovetemens = document.getElementById("completovetemens").value;
  stackcompletosupreme = document.getElementById("completosupreme").value;
  stackcompletolouisvuitton = document.getElementById(
    "completolouisvuitton"
  ).value;
  stackcompletogucci = document.getElementById("completogucci").value;
  stackcompletooctopus = document.getElementById("completooctopus").value;
  stackcompletoscheletro = document.getElementById("completoscheletro").value;
  stackcompletocreeper = document.getElementById("completocreeper").value;
  stackcompletochanel = document.getElementById("completochanel").value;
  stackcappelloelegante = document.getElementById("cappelloelegante").value;
  stackgiaccaburberry = document.getElementById("giaccaburberry").value;
  stackjeanszara = document.getElementById("jeanszara").value;
  stackpantalonicargo = document.getElementById("pantalonicargo").value;
  stackpantalonidenimlevis = document.getElementById(
    "pantalonidenimlevis"
  ).value;
  stackstivalidrmartens = document.getElementById("stivalidrmartens").value;
  stackscarpefila = document.getElementById("scarpefila").value;
  stackscarpegoldengoose = document.getElementById("scarpegoldengoose").value;
  stackscarpebalenciaga = document.getElementById("scarpebalenciaga").value;
  stackscarpegolflefleur = document.getElementById("scarpegolflefleur").value;
  stackzainoadidas = document.getElementById("zainoadidas").value;
  stackzainosupreme = document.getElementById("zainosupreme").value;
  stackzainogucci = document.getElementById("zainogucci").value;
  stackzainolellykelly = document.getElementById("zainolellykelly").value;
  stackzainoeastpack = document.getElementById("zainoeastpack").value;
  stackzainonormale = document.getElementById("zainonormale").value;
  stackzainoarcobaleno = document.getElementById("zainoarcobaleno").value;
  stackinmymind = document.getElementById("inmymind").value;
  stackguardacomeflexo = document.getElementById("guardacomeflexo").value;
  stackbulldozzer = document.getElementById("bulldozzer").value;
  stacksad = document.getElementById("sad").value;
  stackpanda = document.getElementById("panda").value;
  stackmorethanyouknow = document.getElementById("morethanyouknow").value;
  stacklosingit = document.getElementById("losingit").value;
  stackyoshi = document.getElementById("yoshi").value;
  stackpicconepotenziato = document.getElementById("picconepotenziato").value;
  stackasciapotenziata = document.getElementById("asciapotenziata").value;
  stackpalapotenziata = document.getElementById("palapotenziata").value;
  stackswich = document.getElementById("swich").value;
  stackportapregiata = document.getElementById("portapregiata").value;
  stackquadro = document.getElementById("quadro").value;
  stacktelevisione = document.getElementById("televisione").value;
  stackorologioantico = document.getElementById("orologioantico").value;
  stackgiradischiantico = document.getElementById("giradischiantico").value;
  stackcuffiegaming = document.getElementById("cuffiegaming").value;
  stackbloccodilapislazuli = document.getElementById(
    "bloccodilapislazuli"
  ).value;
  stackbloccodidiamante = document.getElementById("bloccodidiamante").value;
  stackbloccodismeraldo = document.getElementById("bloccodismeraldo").value;
  stackcappello = document.getElementById("cappello").value;
  stackmaglia = document.getElementById("maglia").value;
  stackpantaloni = document.getElementById("pantaloni").value;
  stackscarpe = document.getElementById("scarpe").value;
  stackmazzadacollezione = document.getElementById("mazzadacollezione").value;
  stackkatanadacollezione = document.getElementById("katanadacollezione").value;
  stackcoltellinodacollezione = document.getElementById(
    "coltellinodacollezione"
  ).value;
  stackpistoladacollezione = document.getElementById(
    "pistoladacollezione"
  ).value;
  stackzainocalcioseriea = document.getElementById("zainocalcioseriea").value;
  stackzainotrapstar = document.getElementById("zainotrapstar").value;
  stackzainonike = document.getElementById("zainonike").value;
  stackzainolanvin = document.getElementById("zainolanvin").value;
  nfattura = document.getElementById("nfattura").value;

  completoadidas = 3360;
  completolellykelly = 3360;
  completovetemens = 4000;
  completosupreme = 6720;
  completolouisvuitton = 10100;
  completogucci = 13440;
  completooctopus = 13440;
  completoscheletro = 13440;
  completocreeper = 13440;
  completochanel = 13400;
  cappelloelegante = 1345;
  giaccaburberry = 560;
  jeanszara = 560;
  pantalonicargo = 560;
  pantalonidenimlevis = 560;
  stivalidrmartens = 560;
  scarpefila = 560;
  scarpebalenciaga = 560;
  scarpegoldengoose = 560;
  scarpegolflefleur = 560;
  zainoadidas = 560;
  zainosupreme = 1345;
  zainogucci = 2016;
  zainolellykelly = 1100;
  zainoeastpack = 560;
  zainonormale = 40;
  zainoarcobaleno = 64;
  inmymind = 1345;
  guardacomeflexo = 1345;
  bulldozzer = 1345;
  sad = 1345;
  panda = 1345;
  morethanyouknow = 1345;
  losingit = 1345;
  yoshi = 1345;
  picconepotenziato = 560;
  asciapotenziata = 560;
  palapotenziata = 560;
  portapregiata = 560;
  swich = 1345;
  quadro = 1345;
  televisione = 960;
  orologioantico = 1400;
  giradischiantico = 5375;
  cuffiegaming = 560;
  bloccodilapislazuli = 1280;
  bloccodidiamante = 2240;
  bloccodismeraldo = 2560;
  cappello = 12000;
  maglia = 40000;
  pantaloni = 32000;
  scarpe = 24000;
  mazzadacollezione = 280;
  katanadacollezione = 3360;
  coltellinodacollezione = 4360;
  pistoladacollezione = 5700;
  zainocalcioseriea = 1120;
  zainotrapstar = 2240;
  zainonike = 2240;
  zainolanvin = 2240;

  totale =
    stackcompletoadidas * completoadidas +
    stackcompletolellykelly * completolellykelly +
    stackcompletovetemens * completovetemens +
    stackcompletosupreme * completosupreme +
    stackcompletolouisvuitton * completolouisvuitton +
    stackcompletogucci * completogucci +
    stackcompletooctopus * completooctopus +
    stackcompletoscheletro * completoscheletro +
    stackcompletocreeper * completocreeper +
    stackcompletochanel * completochanel +
    stackcappelloelegante * cappelloelegante +
    stackgiaccaburberry * giaccaburberry +
    stackjeanszara * jeanszara +
    stackpantalonicargo * pantalonicargo +
    stackpantalonidenimlevis * pantalonidenimlevis +
    stackstivalidrmartens * stivalidrmartens +
    stackscarpefila * scarpefila +
    stackscarpegoldengoose * scarpegoldengoose +
    stackscarpebalenciaga * scarpebalenciaga +
    stackzainoadidas * zainoadidas +
    stackscarpegolflefleur * scarpegolflefleur +
    stackzainosupreme * zainosupreme +
    stackzainogucci * zainogucci +
    stackzainolellykelly * zainolellykelly +
    stackzainoeastpack * zainoeastpack +
    stackzainonormale * zainonormale +
    stackzainoarcobaleno * zainoarcobaleno +
    stackinmymind * inmymind +
    stackguardacomeflexo * guardacomeflexo +
    stackbulldozzer * bulldozzer +
    stacksad * sad +
    stackpanda * panda +
    stackmorethanyouknow * morethanyouknow +
    stacklosingit * losingit +
    stackyoshi * yoshi +
    stackpicconepotenziato * picconepotenziato +
    stackasciapotenziata * asciapotenziata +
    stackpalapotenziata * palapotenziata +
    stackswich * swich +
    stackportapregiata * portapregiata +
    stacktelevisione * televisione +
    stackquadro * quadro +
    stackorologioantico * orologioantico +
    stackgiradischiantico * giradischiantico +
    stackcuffiegaming * cuffiegaming +
    stackbloccodilapislazuli * bloccodilapislazuli +
    stackbloccodidiamante * bloccodidiamante +
    stackbloccodismeraldo * bloccodismeraldo +
    stackcappello * cappello +
    stackmaglia * maglia +
    stackpantaloni * pantaloni +
    stackscarpe * scarpe +
    stackmazzadacollezione * mazzadacollezione +
    stackkatanadacollezione * katanadacollezione +
    stackcoltellinodacollezione * coltellinodacollezione +
    stackpistoladacollezione * pistoladacollezione +
    stackzainocalcioseriea * zainocalcioseriea +
    stackzainotrapstar * zainotrapstar +
    stackzainonike * zainonike +
    stackzainolanvin * zainolanvin;

  if (stackcompletoadidas == 0) {
    completoadidastext = "";
  } else {
    completoadidastext =
      "- " + stackcompletoadidas + "x1 Completo Adidas" + "<br>";
  }

  if (stackcompletolellykelly == 0) {
    completolellykellytext = "";
  } else {
    completolellykellytext =
      "- " + stackcompletolellykelly + "x1 Completo Lelly Kelly" + "<br>";
  }

  if (stackcompletovetemens == 0) {
    completovetemenstext = "";
  } else {
    completovetemenstext =
      "- " + stackcompletovetemens + "x1 Completo Vetemens" + "<br>";
  }

  if (stackcompletosupreme == 0) {
    completosupremetext = "";
  } else {
    completosupremetext =
      "- " + stackcompletosupreme + "x1 Completo Supreme" + "<br>";
  }

  if (stackcompletolouisvuitton == 0) {
    completolouisvuittontext = "";
  } else {
    completolouisvuittontext =
      "- " + stackcompletolouisvuitton + "x1 Completo Louis Vuitton" + "<br>";
  }

  if (stackcompletogucci == 0) {
    completoguccitext = "";
  } else {
    completoguccitext =
      "- " + stackcompletogucci + "x1 Completo Gucci" + "<br>";
  }

  if (stackcompletooctopus == 0) {
    completooctopustext = "";
  } else {
    completooctopustext =
      "- " + stackcompletooctopus + "x1 Completo Octopus" + "<br>";
  }

  if (stackcompletoscheletro == 0) {
    completoscheletrotext = "";
  } else {
    completoscheletrotext =
      "- " + stackcompletoscheletro + "x1 Completo Scheletro" + "<br>";
  }

  if (stackcompletocreeper == 0) {
    completocreepertext = "";
  } else {
    completocreepertext =
      "- " + stackcompletocreeper + "x1 Completo Creeper" + "<br>";
  }

  if (stackcompletochanel == 0) {
    completochaneltext = "";
  } else {
    completochaneltext =
      "- " + stackcompletochanel + "x1 Completo Chanel" + "<br>";
  }

  if (stackcappelloelegante == 0) {
    cappelloelegantetext = "";
  } else {
    cappelloelegantetext =
      "- " + stackcappelloelegante + "x1 Cappello Elegante" + "<br>";
  }

  if (stackgiaccaburberry == 0) {
    giaccaburberrytext = "";
  } else {
    giaccaburberrytext =
      "- " + stackgiaccaburberry + "x1 Giacca Burberry" + "<br>";
  }

  if (stackjeanszara == 0) {
    jeanszaratext = "";
  } else {
    jeanszaratext = "- " + stackjeanszara + "x1 Jeans Zara" + "<br>";
  }
  if (stackpantalonicargo == 0) {
    pantalonicargotext = "";
  } else {
    pantalonicargotext =
      "- " + stackpantalonicargo + "x1 Pantaloni Cargo" + "<br>";
  }
  if (stackpantalonidenimlevis == 0) {
    pantalonidenimlevistext = "";
  } else {
    pantalonidenimlevistext =
      "- " + stackpantalonidenimlevis + "x1 Pandaloni Denim Levi's" + "<br>";
  }
  if (stackstivalidrmartens == 0) {
    stivalidrmartenstext = "";
  } else {
    stivalidrmartenstext =
      "- " + stackstivalidrmartens + "x1 Stivali Dr Martens" + "<br>";
  }
  if (stackscarpefila == 0) {
    scarpefilatext = "";
  } else {
    scarpefilatext = "- " + stackscarpefila + "x1 Scarpe Fila" + "<br>";
  }
  if (stackscarpebalenciaga == 0) {
    scarpebalenciagatext = "";
  } else {
    scarpebalenciagatext =
      "- " + stackscarpebalenciaga + "x1 Scarpe Balenciaga" + "<br>";
  }
  if (stackscarpegoldengoose == 0) {
    scarpegoldengoosetext = "";
  } else {
    scarpegoldengoosetext =
      "- " + stackscarpegoldengoose + "x1 Scarpe Golden Goose" + "<br>";
  }
  if (stackscarpegolflefleur == 0) {
    scarpegolflefleurtext = "";
  } else {
    scarpegolflefleurtext =
      "- " + stackscarpegolflefleur + "x1 Scarpe Golf Le Fleur" + "<br>";
  }
  if (stackzainoadidas == 0) {
    zainoadidastext = "";
  } else {
    zainoadidastext = "- " + stackzainoadidas + "x1 Zaino Adidas" + "<br>";
  }
  if (stackzainosupreme == 0) {
    zainosupremetext = "";
  } else {
    zainosupremetext = "- " + stackzainosupreme + "x1 Zaino Supreme" + "<br>";
  }

  if (stackzainogucci == 0) {
    zainoguccitext = "";
  } else {
    zainoguccitext = "- " + stackzainogucci + "x1 Zaino Gucci" + "<br>";
  }

  if (stackzainolellykelly == 0) {
    zainolellykellytext = "";
  } else {
    zainolellykellytext =
      "- " + stackzainolellykelly + "x1 Zaino Lelly Kelly" + "<br>";
  }

  if (stackzainoeastpack == 0) {
    zainoeastpacktext = "";
  } else {
    zainoeastpacktext =
      "- " + stackzainoeastpack + "x1 Zaino Eastpack" + "<br>";
  }

  if (stackzainonormale == 0) {
    zainonormaletext = "";
  } else {
    zainonormaletext = "- " + stackzainonormale + "x1 Zaino Normale" + "<br>";
  }

  if (stackzainoarcobaleno == 0) {
    zainoarcobalenotext = "";
  } else {
    zainoarcobalenotext =
      "- " + stackzainoarcobaleno + "x1 Zaino Arcobaleno" + "<br>";
  }

  if (stackinmymind == 0) {
    inmymindtext = "";
  } else {
    inmymindtext = "- " + stackinmymind + "x1 In My Mind" + "<br>";
  }

  if (stackguardacomeflexo == 0) {
    guardacomeflexotext = "";
  } else {
    guardacomeflexotext =
      "- " + stackguardacomeflexo + "x1 Guarda Come Flexo" + "<br>";
  }

  if (stackbulldozzer == 0) {
    bulldozzertext = "";
  } else {
    bulldozzertext = "- " + stackbulldozzer + "x1 Bulldozzer" + "<br>";
  }

  if (stacksad == 0) {
    sadtext = "";
  } else {
    sadtext = "- " + stacksad + "x1 Sad!" + "<br>";
  }

  if (stackpanda == 0) {
    pandatext = "";
  } else {
    pandatext = "- " + stackpanda + "x1 Panda" + "<br>";
  }

  if (stackmorethanyouknow == 0) {
    morethanyouknowtext = "";
  } else {
    morethanyouknowtext =
      "- " + stackmorethanyouknow + "x1 More Than You Know" + "<br>";
  }

  if (stacklosingit == 0) {
    losingittext = "";
  } else {
    losingittext = "- " + stacklosingit + "x1 Losing It" + "<br>";
  }
  if (stackyoshi == 0) {
    yoshitext = "";
  } else {
    yoshitext = "- " + stackyoshi + "x1 Yoshi" + "<br>";
  }
  if (stackpicconepotenziato == 0) {
    picconepotenziatotext = "";
  } else {
    picconepotenziatotext =
      "- " + stackpicconepotenziato + "x1 Piccone Potenziato" + "<br>";
  }
  if (stackasciapotenziata == 0) {
    asciapotenziatatext = "";
  } else {
    asciapotenziatatext =
      "- " + stackasciapotenziata + "x1 Ascia Potenziata" + "<br>";
  }
  if (stackpalapotenziata == 0) {
    palapotenziatatext = "";
  } else {
    palapotenziatatext =
      "- " + stackpalapotenziata + "x1 Pala Potenziata" + "<br>";
  }
  if (stackportapregiata == 0) {
    portapregiatatext = "";
  } else {
    portapregiatatext =
      "- " + stackportapregiata + "x1 Porta Pregiata" + "<br>";
  }
  if (stackswich == 0) {
    swichtext = "";
  } else {
    swichtext = "- " + stackswich + "x1 Switch" + "<br>";
  }
  if (stackquadro == 0) {
    quadrotext = "";
  } else {
    quadrotext = "- " + stackquadro + "x1 Quadro" + "<br>";
  }
  if (stacktelevisione == 0) {
    televisionetext = "";
  } else {
    televisionetext = "- " + stacktelevisione + "x1 Televisione" + "<br>";
  }
  if (stackorologioantico == 0) {
    orologioanticotext = "";
  } else {
    orologioanticotext =
      "- " + stackorologioantico + "x1 Orologio Antico" + "<br>";
  }

  if (stackgiradischiantico == 0) {
    giradischianticotext = "";
  } else {
    giradischianticotext =
      "- " + stackgiradischiantico + "x1 Giradischi Antico" + "<br>";
  }

  if (stackcuffiegaming == 0) {
    cuffiegamingtext = "";
  } else {
    cuffiegamingtext =
      "- " + stackcuffiegaming + "x1 Cuffie da Gaming" + "<br>";
  }

  if (stackbloccodilapislazuli == 0) {
    bloccodilapislazulitext = "";
  } else {
    bloccodilapislazulitext =
      "- " + stackbloccodilapislazuli + "x1 Blocco di Lapislazzuli" + "<br>";
  }

  if (stackbloccodidiamante == 0) {
    bloccodidiamantetext = "";
  } else {
    bloccodidiamantetext =
      "- " + stackbloccodidiamante + "x1 Blocco di Diamante" + "<br>";
  }

  if (stackbloccodismeraldo == 0) {
    bloccodismeraldotext = "";
  } else {
    bloccodismeraldotext =
      "- " + stackbloccodismeraldo + "x1 Blocco di Smeraldo" + "<br>";
  }

  if (stackcappello == 0) {
    cappellotext = "";
  } else {
    cappellotext = "- " + stackcappello + "x64 Cappello" + "<br>";
  }

  if (stackmaglia == 0) {
    magliatext = "";
  } else {
    magliatext = "- " + stackmaglia + "x64 Maglia" + "<br>";
  }

  if (stackpantaloni == 0) {
    pantalonitext = "";
  } else {
    pantalonitext = "- " + stackpantaloni + "x64 Pantaloni" + "<br>";
  }

  if (stackscarpe == 0) {
    scarpetext = "";
  } else {
    scarpetext = "- " + stackscarpe + "x64 Scarpe" + "<br>";
  }

  if (stackmazzadacollezione == 0) {
    mazzadacollezionetext = "";
  } else {
    mazzadacollezionetext =
      "- " + stackmazzadacollezione + "x1 Mazza da Collezione" + "<br>";
  }

  if (stackkatanadacollezione == 0) {
    katanadacollezionetext = "";
  } else {
    katanadacollezionetext =
      "- " + stackkatanadacollezione + "x1 Katana da Collezione" + "<br>";
  }

  if (stackcoltellinodacollezione == 0) {
    coltellinodacollezionetext = "";
  } else {
    coltellinodacollezionetext =
      "- " +
      stackcoltellinodacollezione +
      "x1 Coltellino Da Collezione" +
      "<br>";
  }
  if (stackpistoladacollezione == 0) {
    pistoladacollezionetext = "";
  } else {
    pistoladacollezionetext =
      "- " + stackpistoladacollezione + "x1 Pistola da Collezione" + "<br>";
  }

  if (stackzainocalcioseriea == 0) {
    zainocalcioserieatext = "";
  } else {
    zainocalcioserieatext =
      "- " + stackzainocalcioseriea + "x1 Zaino Calcio Serie A" + "<br>";
  }

  if (stackzainotrapstar == 0) {
    zainotrapstartext = "";
  } else {
    zainotrapstartext =
      "- " + stackzainotrapstar + "x1 Zaino Trapstar" + "<br>";
  }

  if (stackzainonike == 0) {
    zainoniketext = "";
  } else {
    zainoniketext = "- " + stackzainonike + "x1 Zaino Nike" + "<br>";
  }

  if (stackzainolanvin == 0) {
    zainolanvintext = "";
  } else {
    zainolanvintext = "- " + stackzainolanvin + "x1 Zaino Lanvin" + "<br>";
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
    completoadidastext +
    completolellykellytext +
    completovetemenstext +
    completosupremetext +
    completolouisvuittontext +
    completoguccitext +
    completooctopustext +
    completoscheletrotext +
    completocreepertext +
    completochaneltext +
    cappelloelegantetext +
    giaccaburberrytext +
    jeanszaratext +
    pantalonicargotext +
    pantalonidenimlevistext +
    stivalidrmartenstext +
    scarpefilatext +
    scarpebalenciagatext +
    scarpegoldengoosetext +
    scarpegolflefleurtext +
    zainoadidastext +
    zainosupremetext +
    zainoguccitext +
    zainolellykellytext +
    zainoeastpacktext +
    zainonormaletext +
    zainoarcobalenotext +
    inmymindtext +
    guardacomeflexotext +
    bulldozzertext +
    sadtext +
    pandatext +
    morethanyouknowtext +
    losingittext +
    yoshitext +
    picconepotenziatotext +
    asciapotenziatatext +
    palapotenziatatext +
    portapregiatatext +
    swichtext +
    televisionetext +
    quadrotext +
    orologioanticotext +
    giradischianticotext +
    cuffiegamingtext +
    bloccodilapislazulitext +
    bloccodidiamantetext +
    bloccodismeraldotext +
    cappellotext +
    magliatext +
    pantalonitext +
    scarpetext +
    mazzadacollezionetext +
    katanadacollezionetext +
    coltellinodacollezionetext +
    pistoladacollezionetext +
    zainocalcioserieatext +
    zainotrapstartext +
    zainoniketext +
    zainolanvintext +
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

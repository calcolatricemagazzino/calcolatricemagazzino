// Funzione per bloccare lo scrolling su input number
function bloccaScrollInputNumber() {
  window.addEventListener(
    "wheel",
    function (e) {
      if (e.target.type === "number") {
        e.preventDefault();
      }
    },
    { passive: false }
  );
}

var TRange = null;
function findString(str) {
  if (parseInt(navigator.appVersion) < 4) return;
  var strFound;
  if (window.find) {
    strFound = self.find(str);
    if (strFound && self.getSelection && !self.getSelection().anchorNode) {
      strFound = self.find(str);
    }
    if (!strFound) {
      strFound = self.find(str, 0, 1);
      while (self.find(str, 0, 1)) continue;
    }
  } else if (navigator.appName.indexOf("Microsoft") != -1) {
    if (TRange != null) {
      TRange.collapse(false);
      strFound = TRange.findText(str);
      if (strFound) TRange.select();
    }
    if (TRange == null || strFound == 0) {
      TRange = self.document.body.createTextRange();
      strFound = TRange.findText(str);
      if (strFound) TRange.select();
    }
  } else if (navigator.appName == "Opera") {
    alert("Il tuo browser non è supportato.");
    return;
  }
}

function dataOra() {
  var dataora = new Date();
  var formattedDateTime = dataora
    .toLocaleString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(/\./g, " ");
  return formattedDateTime;
}

function calcolaTotale(oggetti, prezzi) {
  var totale = 0;
  for (var i = 0; i < oggetti.length; i++) {
    if (!isNaN(oggetti[i]) && oggetti[i] != 0) {
      totale += oggetti[i] * prezzi[i].prezzo;
    }
  }

  return totale;
}

function costruisciFattura(dataora, oggetti, prezzi, totale, azienda) {
  var opzioni = {
    style: "decimal",
    maximumFractionDigits: 0,
    useGrouping: true,
  };
  var numeroFormattato = totale
    .toLocaleString("it-IT", opzioni)
    .replace(/\./g, " ");

  azienda = "";
  azienda = document.getElementById("azienda").value;
  if (azienda !== "") {
  } else {
    azienda = document.getElementById("aziendaText").textContent;
  }

  var cliente = document.getElementById("cliente").value;

  var messaggioTotale =
    totale > 5000
      ? "Il totale è: " + numeroFormattato + "€"
      : "Il totale è: " +
        numeroFormattato +
        "€<br><br>ATTENZIONE!! IL TOTALE NON SUPERA I 5000€";
  document.getElementById("totale").innerHTML = messaggioTotale;

  var fattura =
    "<b>(Pagina 1)</b> <br><br> FATTURA <Br> Magazzini<br><br>Cliente<br>" +
    cliente +
    "<br><br>Azienda<br>" +
    azienda +
    "<br><br>Data e Ora<br>" +
    dataora +
    "<br><br><br><b>(Pagina 2)</b><br><br>FATTURA <br> Magazzini <br><br>Prodotti acquistati<br>";

  for (var i = 0; i < oggetti.length; i++) {
    if (!isNaN(oggetti[i]) && oggetti[i] != 0) {
      fattura += "- " + oggetti[i] + "x " + prezzi[i].nome + "<br>";
    }
  }

  fattura += "<br>Importo totale<br>&#8364; " + numeroFormattato;

  document.getElementById("copia").innerHTML =
    '<div class="buttonBox"> <button onclick="Copia()">COPIA FATTURA</button> </div>';

  return fattura;
}

function Copia() {
  var div = document.getElementById("fattura");
  var content = div.innerHTML;

  var textarea = document.createElement("textarea");
  textarea.value = content;

  document.body.appendChild(textarea);

  textarea.select();

  document.execCommand("copy");

  document.body.removeChild(textarea);

  alert("Fattura Copiata!");
}

function iterazione(oggetti, prezzi) {
  var dataora = dataOra();

  var totale = calcolaTotale(oggetti, prezzi);

  document.getElementById("fattura").innerHTML = costruisciFattura(
    dataora,
    oggetti,
    prezzi,
    totale,
    azienda
  );
}

function Wind() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("nokia").value);
  oggetti[1] = parseInt(document.getElementById("xiaomi").value);
  oggetti[2] = parseInt(document.getElementById("lg").value);
  oggetti[3] = parseInt(document.getElementById("poco").value);
  oggetti[4] = parseInt(document.getElementById("realme").value);
  oggetti[5] = parseInt(document.getElementById("oneplus").value);
  oggetti[6] = parseInt(document.getElementById("huawei").value);
  oggetti[7] = parseInt(document.getElementById("samsung").value);
  oggetti[8] = parseInt(document.getElementById("iphone").value);
  oggetti[9] = parseInt(document.getElementById("mac").value);
  oggetti[10] = parseInt(document.getElementById("macpro").value);
  oggetti[11] = parseInt(document.getElementById("applewatch").value);

  var prezzi = [
    { nome: "Nokia 3310", prezzo: 280 },
    { nome: "Xiaomi Mi 10", prezzo: 350 },
    { nome: "LG V60 Thinq 5G", prezzo: 560 },
    { nome: "POCO F2 Pro", prezzo: 560 },
    { nome: "Realme x50 Pro", prezzo: 800 },
    { nome: "OnePlus 8", prezzo: 800 },
    { nome: "Huawei Mate 40 Pro", prezzo: 1000 },
    { nome: "Samsung Galaxy S20", prezzo: 1500 },
    { nome: "iPhone 12", prezzo: 1500 },
    { nome: "Mac", prezzo: 1500 },
    { nome: "Mac PRO", prezzo: 2500 },
    { nome: "Apple Watch", prezzo: 3000 },
  ];
  iterazione(oggetti, prezzi);
}

function Softair() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("zainodesert").value);
  oggetti[1] = parseInt(document.getElementById("zainocamo").value);
  oggetti[2] = parseInt(document.getElementById("glock18").value);
  oggetti[3] = parseInt(document.getElementById("pdwdesert").value);
  oggetti[4] = parseInt(document.getElementById("assaltocamo").value);
  oggetti[5] = parseInt(document.getElementById("sacchettodipallini").value);
  oggetti[6] = parseInt(document.getElementById("sacchettodipallini023").value);
  oggetti[7] = parseInt(document.getElementById("caricatoreco2").value);
  oggetti[8] = parseInt(document.getElementById("caricatoregreengas").value);
  oggetti[9] = parseInt(document.getElementById("zainotiratore").value);
  oggetti[10] = parseInt(document.getElementById("pistolaantica").value);
  oggetti[11] = parseInt(document.getElementById("medagliasouvenir").value);
  oggetti[12] = parseInt(document.getElementById("peluche").value);

  var prezzi = [
    { nome: "Zaino Desert", prezzo: 90 },
    { nome: "Zaino Camo", prezzo: 90 },
    { nome: "Glock 18", prezzo: 1960 },
    { nome: "PDW Desert", prezzo: 2240 },
    { nome: "Assalto Camo", prezzo: 2800 },
    { nome: "Sacchetto di Pallini", prezzo: 360 },
    { nome: "Sacchetto di Pallini 0.23", prezzo: 520 },
    { nome: "Caricatore CO2", prezzo: 160 },
    { nome: "Caricatore Green Gas", prezzo: 240 },
    { nome: "Zaino Tiratore", prezzo: 1960 },
    { nome: "Pistola Antica", prezzo: 7500 },
    { nome: "Medaglia Souvenir", prezzo: 560 },
    { nome: "Peluche", prezzo: 380 },
  ];

  iterazione(oggetti, prezzi);
}

function Bar() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("cupcakefragola").value);
  oggetti[3] = parseInt(document.getElementById("cupcakecioccolato").value);
  oggetti[4] = parseInt(document.getElementById("cupcakevaniglia").value);
  oggetti[5] = parseInt(document.getElementById("tacos").value);
  oggetti[6] = parseInt(document.getElementById("pane").value);
  oggetti[7] = parseInt(document.getElementById("hamburger").value);
  oggetti[8] = parseInt(document.getElementById("succodifrutta").value);
  oggetti[9] = parseInt(document.getElementById("chickenbox").value);
  oggetti[10] = parseInt(document.getElementById("pizza").value);
  oggetti[11] = parseInt(document.getElementById("pepsi").value);
  oggetti[12] = parseInt(document.getElementById("sprite").value);
  oggetti[13] = parseInt(document.getElementById("fanta").value);
  oggetti[14] = parseInt(document.getElementById("cocacola").value);
  oggetti[15] = parseInt(document.getElementById("cioccolatacalda").value);
  oggetti[16] = parseInt(document.getElementById("pandizenzero").value);

  var prezzi = [
    { nome: "Hot Dog", prezzo: 40 },
    { nome: "Sushi", prezzo: 120 },
    { nome: "Cupcake alla Fragola", prezzo: 120 },
    { nome: "Cupcake al Cioccolato", prezzo: 120 },
    { nome: "Cupcake alla Vaniglia", prezzo: 120 },
    { nome: "Tacos", prezzo: 160 },
    { nome: "Pane", prezzo: 160 },
    { nome: "Hamburger", prezzo: 160 },
    { nome: "Succo di Frutta", prezzo: 240 },
    { nome: "Chicken Box", prezzo: 240 },
    { nome: "Pizza", prezzo: 240 },
    { nome: "Pepsi", prezzo: 160 },
    { nome: "Sprite", prezzo: 160 },
    { nome: "Fanta", prezzo: 280 },
    { nome: "Coca-Cola", prezzo: 280 },
    { nome: "Cioccolata Calda", prezzo: 160 },
    { nome: "Pan di Zenzero", prezzo: 160 },
  ];

  iterazione(oggetti, prezzi);
}
function Masseria() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("cupcakefragola").value);
  oggetti[3] = parseInt(document.getElementById("cupcakecioccolato").value);
  oggetti[4] = parseInt(document.getElementById("cupcakevaniglia").value);
  oggetti[5] = parseInt(document.getElementById("tacos").value);
  oggetti[6] = parseInt(document.getElementById("pane").value);
  oggetti[7] = parseInt(document.getElementById("hamburger").value);
  oggetti[8] = parseInt(document.getElementById("succodifrutta").value);
  oggetti[9] = parseInt(document.getElementById("chickenbox").value);
  oggetti[10] = parseInt(document.getElementById("pizza").value);
  oggetti[11] = parseInt(document.getElementById("pepsi").value);
  oggetti[12] = parseInt(document.getElementById("sprite").value);
  oggetti[13] = parseInt(document.getElementById("fanta").value);
  oggetti[14] = parseInt(document.getElementById("cocacola").value);
  oggetti[15] = parseInt(
    document.getElementById("ciambellaalciocciolato").value
  );
  oggetti[16] = parseInt(document.getElementById("ciambellarosa").value);
  oggetti[17] = parseInt(document.getElementById("ciambellaallamenta").value);

  var prezzi = [
    { nome: "Hot Dog", prezzo: 40 },
    { nome: "Sushi", prezzo: 120 },
    { nome: "Cupcake alla Fragola", prezzo: 120 },
    { nome: "Cupcake al Cioccolato", prezzo: 120 },
    { nome: "Cupcake alla Vaniglia", prezzo: 120 },
    { nome: "Tacos", prezzo: 160 },
    { nome: "Pane", prezzo: 160 },
    { nome: "Hamburger", prezzo: 160 },
    { nome: "Succo di Frutta", prezzo: 240 },
    { nome: "Chicken Box", prezzo: 240 },
    { nome: "Pizza", prezzo: 240 },
    { nome: "Pepsi", prezzo: 160 },
    { nome: "Sprite", prezzo: 160 },
    { nome: "Fanta", prezzo: 280 },
    { nome: "Coca-Cola", prezzo: 280 },
    { nome: "Ciambella al Cioccolato", prezzo: 160 },
    { nome: "Ciambella Rosa", prezzo: 160 },
    { nome: "Ciambella alla Menta", prezzo: 160 },
  ];

  iterazione(oggetti, prezzi);
}

function McDonalds() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("cupcakefragola").value);
  oggetti[3] = parseInt(document.getElementById("cupcakecioccolato").value);
  oggetti[4] = parseInt(document.getElementById("cupcakevaniglia").value);
  oggetti[5] = parseInt(document.getElementById("tacos").value);
  oggetti[6] = parseInt(document.getElementById("pane").value);
  oggetti[7] = parseInt(document.getElementById("hamburger").value);
  oggetti[8] = parseInt(document.getElementById("succodifrutta").value);
  oggetti[9] = parseInt(document.getElementById("chickenbox").value);
  oggetti[10] = parseInt(document.getElementById("pizza").value);
  oggetti[11] = parseInt(document.getElementById("pepsi").value);
  oggetti[12] = parseInt(document.getElementById("sprite").value);
  oggetti[13] = parseInt(document.getElementById("fanta").value);
  oggetti[14] = parseInt(document.getElementById("cocacola").value);
  oggetti[15] = parseInt(document.getElementById("kebabdipollo").value);
  oggetti[16] = parseInt(document.getElementById("kebabdiagnello").value);

  var prezzi = [
    { nome: "Hot Dog", prezzo: 40 },
    { nome: "Sushi", prezzo: 120 },
    { nome: "Cupcake alla Fragola", prezzo: 120 },
    { nome: "Cupcake al Cioccolato", prezzo: 120 },
    { nome: "Cupcake alla Vaniglia", prezzo: 120 },
    { nome: "Tacos", prezzo: 160 },
    { nome: "Pane", prezzo: 160 },
    { nome: "Hamburger", prezzo: 160 },
    { nome: "Succo di Frutta", prezzo: 240 },
    { nome: "Chicken Box", prezzo: 240 },
    { nome: "Pizza", prezzo: 240 },
    { nome: "Pepsi", prezzo: 160 },
    { nome: "Sprite", prezzo: 160 },
    { nome: "Fanta", prezzo: 280 },
    { nome: "Coca-Cola", prezzo: 280 },
    { nome: "Kebab di Pollo", prezzo: 120 },
    { nome: "Kebab di Agnello", prezzo: 120 },
  ];

  iterazione(oggetti, prezzi);
}

function Mirabilandia() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("cupcakefragola").value);
  oggetti[3] = parseInt(document.getElementById("cupcakecioccolato").value);
  oggetti[4] = parseInt(document.getElementById("cupcakevaniglia").value);
  oggetti[5] = parseInt(document.getElementById("tacos").value);
  oggetti[6] = parseInt(document.getElementById("pane").value);
  oggetti[7] = parseInt(document.getElementById("hamburger").value);
  oggetti[8] = parseInt(document.getElementById("succodifrutta").value);
  oggetti[9] = parseInt(document.getElementById("chickenbox").value);
  oggetti[10] = parseInt(document.getElementById("pizza").value);
  oggetti[11] = parseInt(document.getElementById("pepsi").value);
  oggetti[12] = parseInt(document.getElementById("sprite").value);
  oggetti[13] = parseInt(document.getElementById("fanta").value);
  oggetti[14] = parseInt(document.getElementById("cocacola").value);
  oggetti[15] = parseInt(document.getElementById("peluche").value);

  var prezzi = [
    { nome: "Hot Dog", prezzo: 40 },
    { nome: "Sushi", prezzo: 120 },
    { nome: "Cupcake alla Fragola", prezzo: 120 },
    { nome: "Cupcake al Cioccolato", prezzo: 120 },
    { nome: "Cupcake alla Vaniglia", prezzo: 120 },
    { nome: "Tacos", prezzo: 160 },
    { nome: "Pane", prezzo: 160 },
    { nome: "Hamburger", prezzo: 160 },
    { nome: "Succo di Frutta", prezzo: 240 },
    { nome: "Chicken Box", prezzo: 240 },
    { nome: "Pizza", prezzo: 240 },
    { nome: "Pepsi", prezzo: 160 },
    { nome: "Sprite", prezzo: 160 },
    { nome: "Fanta", prezzo: 280 },
    { nome: "Coca-Cola", prezzo: 280 },
    { nome: "Peluche", prezzo: 280 },
  ];

  iterazione(oggetti, prezzi);
}
function Pubblica() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("cupcakefragola").value);
  oggetti[3] = parseInt(document.getElementById("cupcakecioccolato").value);
  oggetti[4] = parseInt(document.getElementById("cupcakevaniglia").value);
  oggetti[5] = parseInt(document.getElementById("tacos").value);
  oggetti[6] = parseInt(document.getElementById("pane").value);
  oggetti[7] = parseInt(document.getElementById("hamburger").value);
  oggetti[8] = parseInt(document.getElementById("succodifrutta").value);
  oggetti[9] = parseInt(document.getElementById("chickenbox").value);
  oggetti[10] = parseInt(document.getElementById("pizza").value);
  oggetti[11] = parseInt(document.getElementById("pepsi").value);
  oggetti[12] = parseInt(document.getElementById("sprite").value);
  oggetti[13] = parseInt(document.getElementById("fanta").value);
  oggetti[14] = parseInt(document.getElementById("cocacola").value);
  oggetti[15] = parseInt(document.getElementById("peluche").value);

  var prezzi = [
    { nome: "Hot Dog", prezzo: 40 },
    { nome: "Sushi", prezzo: 120 },
    { nome: "Cupcake alla Fragola", prezzo: 120 },
    { nome: "Cupcake al Cioccolato", prezzo: 120 },
    { nome: "Cupcake alla Vaniglia", prezzo: 120 },
    { nome: "Tacos", prezzo: 160 },
    { nome: "Pane", prezzo: 160 },
    { nome: "Hamburger", prezzo: 160 },
    { nome: "Succo di Frutta", prezzo: 240 },
    { nome: "Chicken Box", prezzo: 240 },
    { nome: "Pizza", prezzo: 240 },
    { nome: "Pepsi", prezzo: 160 },
    { nome: "Sprite", prezzo: 160 },
    { nome: "Fanta", prezzo: 280 },
    { nome: "Coca-Cola", prezzo: 280 },
    { nome: "Peluche", prezzo: 280 },
  ];

  iterazione(oggetti, prezzi);
}

function Privata() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("cupcakefragola").value);
  oggetti[3] = parseInt(document.getElementById("cupcakecioccolato").value);
  oggetti[4] = parseInt(document.getElementById("cupcakevaniglia").value);
  oggetti[5] = parseInt(document.getElementById("tacos").value);
  oggetti[6] = parseInt(document.getElementById("pane").value);
  oggetti[7] = parseInt(document.getElementById("hamburger").value);
  oggetti[8] = parseInt(document.getElementById("succodifrutta").value);
  oggetti[9] = parseInt(document.getElementById("chickenbox").value);
  oggetti[10] = parseInt(document.getElementById("pizza").value);
  oggetti[11] = parseInt(document.getElementById("pepsi").value);
  oggetti[12] = parseInt(document.getElementById("sprite").value);
  oggetti[13] = parseInt(document.getElementById("fanta").value);
  oggetti[14] = parseInt(document.getElementById("cocacola").value);
  oggetti[15] = parseInt(document.getElementById("oreo").value);
  oggetti[16] = parseInt(document.getElementById("peluche").value);

  var prezzi = [
    { nome: "Hot Dog", prezzo: 48 },
    { nome: "Sushi", prezzo: 160 },
    { nome: "Cupcake alla Fragola", prezzo: 180 },
    { nome: "Cupcake al Cioccolato", prezzo: 180 },
    { nome: "Cupcake alla Vaniglia", prezzo: 180 },
    { nome: "Tacos", prezzo: 200 },
    { nome: "Pane", prezzo: 200 },
    { nome: "Hamburger", prezzo: 240 },
    { nome: "Succo di Frutta", prezzo: 260 },
    { nome: "Chicken Box", prezzo: 280 },
    { nome: "Pizza", prezzo: 280 },
    { nome: "Pepsi", prezzo: 180 },
    { nome: "Sprite", prezzo: 180 },
    { nome: "Fanta", prezzo: 300 },
    { nome: "Coca-Cola", prezzo: 300 },
    { nome: "Oreo", prezzo: 320 },
    { nome: "Peluche", prezzo: 280 },
  ];
  iterazione(oggetti, prezzi);
}

function Market() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("completoadidas").value);
  oggetti[1] = parseInt(document.getElementById("completolellykelly").value);
  oggetti[2] = parseInt(document.getElementById("completovetemens").value);
  oggetti[3] = parseInt(document.getElementById("completosupreme").value);
  oggetti[4] = parseInt(document.getElementById("completolouisvuitton").value);
  oggetti[5] = parseInt(document.getElementById("completogucci").value);
  oggetti[6] = parseInt(document.getElementById("completooctopus").value);
  oggetti[7] = parseInt(document.getElementById("completoscheletro").value);
  oggetti[8] = parseInt(document.getElementById("completocreeper").value);
  oggetti[9] = parseInt(document.getElementById("completochanel").value);
  oggetti[10] = parseInt(document.getElementById("cappelloelegante").value);
  oggetti[11] = parseInt(document.getElementById("giaccaburberry").value);
  oggetti[12] = parseInt(document.getElementById("jeanszara").value);
  oggetti[13] = parseInt(document.getElementById("pantalonicargo").value);
  oggetti[14] = parseInt(document.getElementById("pantalonidenimlevis").value);
  oggetti[15] = parseInt(document.getElementById("stivalidrmartens").value);
  oggetti[16] = parseInt(document.getElementById("scarpefila").value);
  oggetti[17] = parseInt(document.getElementById("scarpebalenciaga").value);
  oggetti[18] = parseInt(document.getElementById("scarpegoldengoose").value);
  oggetti[19] = parseInt(document.getElementById("scarpegolflefleur").value);
  oggetti[20] = parseInt(document.getElementById("zainoadidas").value);
  oggetti[21] = parseInt(document.getElementById("zainosupreme").value);
  oggetti[22] = parseInt(document.getElementById("zainogucci").value);
  oggetti[23] = parseInt(document.getElementById("zainolellykelly").value);
  oggetti[24] = parseInt(document.getElementById("zainoeastpack").value);
  oggetti[25] = parseInt(document.getElementById("zainonormale").value);
  oggetti[26] = parseInt(document.getElementById("zainoarcobaleno").value);
  oggetti[27] = parseInt(document.getElementById("portapregiata").value);
  oggetti[28] = parseInt(document.getElementById("switch").value);
  oggetti[29] = parseInt(document.getElementById("quadro").value);
  oggetti[30] = parseInt(document.getElementById("televisione").value);
  oggetti[31] = parseInt(document.getElementById("orologioantico").value);
  oggetti[32] = parseInt(document.getElementById("giradischiantico").value);
  oggetti[33] = parseInt(document.getElementById("cuffiegaming").value);
  oggetti[34] = parseInt(document.getElementById("bloccodilapislazuli").value);
  oggetti[35] = parseInt(document.getElementById("bloccodidiamante").value);
  oggetti[36] = parseInt(document.getElementById("bloccodismeraldo").value);
  oggetti[37] = parseInt(document.getElementById("cappello").value);
  oggetti[38] = parseInt(document.getElementById("maglia").value);
  oggetti[39] = parseInt(document.getElementById("pantaloni").value);
  oggetti[40] = parseInt(document.getElementById("scarpe").value);
  oggetti[41] = parseInt(document.getElementById("mazzadacollezione").value);
  oggetti[42] = parseInt(document.getElementById("katanadacollezione").value);
  oggetti[43] = parseInt(
    document.getElementById("coltellinodacollezione").value
  );
  oggetti[44] = parseInt(document.getElementById("pistoladacollezione").value);
  oggetti[45] = parseInt(document.getElementById("zainocalcioseriea").value);
  oggetti[46] = parseInt(document.getElementById("zainotrapstar").value);
  oggetti[47] = parseInt(document.getElementById("zainonike").value);
  oggetti[48] = parseInt(document.getElementById("zainolanvin").value);
  oggetti[49] = parseInt(document.getElementById("portanether").value);
  oggetti[50] = parseInt(document.getElementById("portacremisi").value);
  oggetti[51] = parseInt(document.getElementById("settimino").value);
  oggetti[52] = parseInt(document.getElementById("armadio").value);
  oggetti[53] = parseInt(document.getElementById("mascherageisha").value);
  oggetti[54] = parseInt(document.getElementById("mascherayokay").value);
  oggetti[55] = parseInt(document.getElementById("mascherasensei").value);
  oggetti[56] = parseInt(document.getElementById("peluche").value);
  oggetti[57] = parseInt(document.getElementById("divano").value);
  oggetti[58] = parseInt(document.getElementById("poltrona").value);
  oggetti[59] = parseInt(document.getElementById("letto").value);
  oggetti[60] = parseInt(document.getElementById("sgabello").value);
  oggetti[61] = parseInt(document.getElementById("sedia").value);
  oggetti[62] = parseInt(document.getElementById("tavolo").value);
  oggetti[63] = parseInt(document.getElementById("sveglia").value);
  oggetti[64] = parseInt(document.getElementById("libreria").value);
  oggetti[65] = parseInt(document.getElementById("giochi").value);
  oggetti[66] = parseInt(document.getElementById("ombrello").value);
  oggetti[67] = parseInt(document.getElementById("cestini").value);

  var prezzi = [
    { nome: "Completo Adidas", prezzo: 3360 },
    { nome: "Scarpe Lelly Kelly", prezzo: 3360 },
    { nome: "Completo Vetemens", prezzo: 4000 },
    { nome: "Completo Supreme", prezzo: 6720 },
    { nome: "Completo Louis Vuitton", prezzo: 10100 },
    { nome: "Completo Gucci", prezzo: 13440 },
    { nome: "Completo Octopus", prezzo: 13440 },
    { nome: "Completo Scheletro", prezzo: 13440 },
    { nome: "Completo Creeper", prezzo: 13440 },
    { nome: "Completo Chanel", prezzo: 13440 },
    { nome: "Cappello Elegante", prezzo: 1345 },
    { nome: "Giacca Burberry", prezzo: 560 },
    { nome: "Jeans Zara", prezzo: 560 },
    { nome: "Pantaloni Cargo", prezzo: 560 },
    { nome: "Pantaloni Denim Levi's", prezzo: 560 },
    { nome: "Stivali Dr Martens", prezzo: 560 },
    { nome: "Scarpe Fila", prezzo: 560 },
    { nome: "Scarpe Balenciaga", prezzo: 560 },
    { nome: "Scarpe Golden Goose", prezzo: 560 },
    { nome: "Scarpe Golf le Fleur", prezzo: 560 },
    { nome: "Zaino Adidas", prezzo: 560 },
    { nome: "Zaino Supreme", prezzo: 1345 },
    { nome: "Zaino Gucci", prezzo: 2016 },
    { nome: "Zaino Lelly Kelly", prezzo: 1100 },
    { nome: "Zaino Eastpack", prezzo: 560 },
    { nome: "Zaino Normale", prezzo: 40 },
    { nome: "Zaino Arcobaleno", prezzo: 64 },
    { nome: "Porta Pregiata", prezzo: 560 },
    { nome: "Switch", prezzo: 1345 },
    { nome: "Quadro", prezzo: 650 },
    { nome: "Televisione", prezzo: 960 },
    { nome: "Orologio Antico", prezzo: 1400 },
    { nome: "Giradischi Antico", prezzo: 5375 },
    { nome: "Cuffie Da Gaming", prezzo: 560 },
    { nome: "Blocco di Lapislazzuli", prezzo: 1280 },
    { nome: "Blocco di Diamante", prezzo: 2240 },
    { nome: "Blocco di Smeraldo", prezzo: 2560 },
    { nome: "Cappello", prezzo: 12000 },
    { nome: "Maglia", prezzo: 40000 },
    { nome: "Pantaloni", prezzo: 32000 },
    { nome: "Scarpe", prezzo: 24000 },
    { nome: "Mazza da Collezione", prezzo: 280 },
    { nome: "Katana da Collezione", prezzo: 3360 },
    { nome: "Coltellino da Collezione", prezzo: 4360 },
    { nome: "Pistola da Collezione", prezzo: 5700 },
    { nome: "Zaino Calcio Serie A", prezzo: 560 },
    { nome: "Zaino Trapstar", prezzo: 1120 },
    { nome: "Zaino Nike", prezzo: 1120 },
    { nome: "Zaino Lanvin", prezzo: 1120 },
    { nome: "Porta Nether", prezzo: 560 },
    { nome: "Porta Cremisi", prezzo: 560 },
    { nome: "Settimino", prezzo: 700 },
    { nome: "Armadio", prezzo: 700 },
    { nome: "Maschera Geisha", prezzo: 560 },
    { nome: "Maschera Yokay", prezzo: 560 },
    { nome: "Maschera Sensei", prezzo: 6000 },
    { nome: "Peluche", prezzo: 280 },
    { nome: "Divano", prezzo: 750 },
    { nome: "Poltrona", prezzo: 300 },
    { nome: "Letto", prezzo: 900 },
    { nome: "Sgabello", prezzo: 150 },
    { nome: "Sedia", prezzo: 400 },
    { nome: "Tavolo", prezzo: 900 },
    { nome: "Sveglia", prezzo: 150 },
    { nome: "Libreria", prezzo: 750 },
    { nome: "Giochi", prezzo: 400 },
    { nome: "Ombrello", prezzo: 60 },
    { nome: "Cestini", prezzo: 40 },
  ];

  iterazione(oggetti, prezzi);
}

function Luxury() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("cupcakefragola").value);
  oggetti[3] = parseInt(document.getElementById("cupcakecioccolato").value);
  oggetti[4] = parseInt(document.getElementById("cupcakevaniglia").value);
  oggetti[5] = parseInt(document.getElementById("tacos").value);
  oggetti[6] = parseInt(document.getElementById("pane").value);
  oggetti[7] = parseInt(document.getElementById("hamburger").value);
  oggetti[8] = parseInt(document.getElementById("succodifrutta").value);
  oggetti[9] = parseInt(document.getElementById("chickenbox").value);
  oggetti[10] = parseInt(document.getElementById("pizza").value);
  oggetti[11] = parseInt(document.getElementById("pepsi").value);
  oggetti[12] = parseInt(document.getElementById("sprite").value);
  oggetti[13] = parseInt(document.getElementById("fanta").value);
  oggetti[14] = parseInt(document.getElementById("cocacola").value);
  oggetti[15] = parseInt(document.getElementById("oreo").value);

  var prezzi = [
    { nome: "Hot Dog", prezzo: 44 },
    { nome: "Sushi", prezzo: 140 },
    { nome: "Cupcake alla Fragola", prezzo: 160 },
    { nome: "Cupcake al Cioccolato", prezzo: 160 },
    { nome: "Cupcake alla Vaniglia", prezzo: 160 },
    { nome: "Tacos", prezzo: 180 },
    { nome: "Pane", prezzo: 180 },
    { nome: "Hamburger", prezzo: 200 },
    { nome: "Succo di Frutta", prezzo: 250 },
    { nome: "Chicken Box", prezzo: 260 },
    { nome: "Pizza", prezzo: 260 },
    { nome: "Pepsi", prezzo: 180 },
    { nome: "Sprite", prezzo: 180 },
    { nome: "Fanta", prezzo: 290 },
    { nome: "Coca-Cola", prezzo: 290 },
    { nome: "Oreo", prezzo: 320 },
  ];

  iterazione(oggetti, prezzi);
}

function Libreria() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("zainodisney").value);
  oggetti[1] = parseInt(document.getElementById("zainoinvicta").value);
  oggetti[2] = parseInt(document.getElementById("zainonapapijri").value);
  oggetti[3] = parseInt(document.getElementById("zainovans").value);
  oggetti[4] = parseInt(document.getElementById("zainocomix").value);
  oggetti[5] = parseInt(document.getElementById("zainoseven").value);

  var prezzi = [
    { nome: "Zaino Disney", prezzo: 500 },
    { nome: "Zaino Invicta", prezzo: 700 },
    { nome: "Zaino Napapijri", prezzo: 700 },
    { nome: "Zaino Vans", prezzo: 700 },
    { nome: "Zaino Comix", prezzo: 700 },
    { nome: "Zaino Seven", prezzo: 700 },
  ];
  iterazione(oggetti, prezzi);
}

function Gioielleria() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("bloccodicalcite").value);
  oggetti[1] = parseInt(document.getElementById("ametistapiccola").value);
  oggetti[2] = parseInt(document.getElementById("ametistamedia").value);
  oggetti[3] = parseInt(document.getElementById("ametistagrande").value);
  oggetti[4] = parseInt(document.getElementById("ametistaenorme").value);
  oggetti[5] = parseInt(document.getElementById("ametistagemmante").value);
  oggetti[6] = parseInt(document.getElementById("bloccodiametista").value);
  oggetti[7] = parseInt(document.getElementById("braccialevittoriano").value);
  oggetti[8] = parseInt(document.getElementById("fedenunziale").value);
  oggetti[9] = parseInt(document.getElementById("orologio").value);
  oggetti[10] = parseInt(document.getElementById("braccialeargento").value);
  oggetti[11] = parseInt(document.getElementById("anelloindiamante").value);
  oggetti[12] = parseInt(document.getElementById("braccialeoro").value);
  oggetti[13] = parseInt(document.getElementById("rolexcuoio").value);
  oggetti[14] = parseInt(document.getElementById("rolexoro").value);
  oggetti[15] = parseInt(document.getElementById("completolgbt").value);
  oggetti[16] = parseInt(document.getElementById("completodivinorosso").value);
  oggetti[17] = parseInt(document.getElementById("completodivinonero").value);
  oggetti[18] = parseInt(
    document.getElementById("completodivinoazzurro").value
  );
  oggetti[19] = parseInt(document.getElementById("cannocchiale").value);

  var prezzi = [
    { nome: "Blocco di Calcite", prezzo: 25 },
    { nome: "Ametista Piccola", prezzo: 50 },
    { nome: "Ametista Media", prezzo: 75 },
    { nome: "Ametista Grande", prezzo: 100 },
    { nome: "Ametista Enorme", prezzo: 125 },
    { nome: "Ametista Gemmante", prezzo: 175 },
    { nome: "Blocco di Ametista", prezzo: 175 },
    { nome: "Bracciale Vittoriano", prezzo: 560 },
    { nome: "Fede Nunziale", prezzo: 2320 },
    { nome: "Orologio", prezzo: 4960 },
    { nome: "Bracciale Argento", prezzo: 4960 },
    { nome: "Anello in Diamante", prezzo: 5760 },
    { nome: "Bracciale Oro", prezzo: 13200 },
    { nome: "Rolex Cuoio", prezzo: 13200 },
    { nome: "Rolex Oro", prezzo: 19200 },
    { nome: "Completo LGBT", prezzo: 3360 },
    { nome: "Completo Divino Rosso", prezzo: 25000 },
    { nome: "Completo Divino Nero", prezzo: 35200 },
    { nome: "Completo Divino Azzurro", prezzo: 49600 },
    { nome: "Cannocchiale", prezzo: 1500 },
  ];
  iterazione(oggetti, prezzi);
}

function Evian() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("bottiglietteplastica").value);
  oggetti[1] = parseInt(document.getElementById("evianenergy").value);

  var prezzi = [
    { nome: "Bottigliette in Plastica", prezzo: 24 },
    { nome: "Evian Energy", prezzo: 176 },
  ];
  iterazione(oggetti, prezzi);
}

function Edicola() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("erbaccia").value);
  oggetti[1] = parseInt(document.getElementById("radiceerrata").value);
  oggetti[2] = parseInt(document.getElementById("radicelumna").value);
  oggetti[3] = parseInt(document.getElementById("pipa").value);
  oggetti[4] = parseInt(document.getElementById("accendino").value);
  oggetti[5] = parseInt(document.getElementById("grinder").value);
  oggetti[6] = parseInt(document.getElementById("sigarette").value);

  var prezzi = [
    { nome: "Erbaccia", prezzo: 480 },
    { nome: "Radice Errata", prezzo: 720 },
    { nome: "Radice Lumna", prezzo: 800 },
    { nome: "Pipa", prezzo: 64 },
    { nome: "Accendino", prezzo: 80 },
    { nome: "Grinder", prezzo: 1000 },
    { nome: "Sigarette", prezzo: 20 },
  ];
  iterazione(oggetti, prezzi);
}

function Discoteca() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("7up").value);
  oggetti[1] = parseInt(document.getElementById("drpepper").value);
  oggetti[2] = parseInt(document.getElementById("mountaindew").value);
  oggetti[3] = parseInt(document.getElementById("spritz").value);
  oggetti[4] = parseInt(document.getElementById("amarolucano").value);
  oggetti[5] = parseInt(document.getElementById("cubalibre").value);
  oggetti[6] = parseInt(document.getElementById("longisland").value);
  oggetti[7] = parseInt(document.getElementById("crodino").value);

  var prezzi = [
    { nome: "7Up", prezzo: 160 },
    { nome: "DrPepper", prezzo: 240 },
    { nome: "Mountain Dew", prezzo: 240 },
    { nome: "Spritz", prezzo: 700 },
    { nome: "Amaro Lucano", prezzo: 700 },
    { nome: "Cuba Libre", prezzo: 700 },
    { nome: "Long Island", prezzo: 700 },
    { nome: "Crodino", prezzo: 700 },
  ];
  iterazione(oggetti, prezzi);
}

function Boutique() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("stendardosemplice").value);
  oggetti[1] = parseInt(document.getElementById("stendardomodificato").value);
  oggetti[2] = parseInt(document.getElementById("fuochidartificio").value);
  oggetti[3] = parseInt(document.getElementById("colorante").value);
  oggetti[4] = parseInt(document.getElementById("peluche").value);
  oggetti[5] = parseInt(document.getElementById("casco").value);
  oggetti[6] = parseInt(document.getElementById("portafoglio").value);
  oggetti[7] = parseInt(document.getElementById("borsa").value);

  var prezzi = [
    { nome: "Stendardo Semplice", prezzo: 260 },
    { nome: "Stendardo Modificato", prezzo: 415 },
    { nome: "Fuochi D'Artificio", prezzo: 400 },
    { nome: "Colorante", prezzo: 400 },
    { nome: "Peluche", prezzo: 280 },
    { nome: "Casco", prezzo: 160 },
    { nome: "Portafoglio", prezzo: 200 },
    { nome: "Borsa", prezzo: 480 },
  ];
  iterazione(oggetti, prezzi);
}

function BoscoVerticale() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("uomofocaccina").value);
  oggetti[1] = parseInt(document.getElementById("oreo").value);
  oggetti[2] = parseInt(document.getElementById("champagne").value);
  oggetti[3] = parseInt(document.getElementById("domperignom").value);
  oggetti[4] = parseInt(document.getElementById("dongiovanni").value);
  oggetti[5] = parseInt(document.getElementById("jackspisporks").value);
  oggetti[6] = parseInt(document.getElementById("martini").value);
  oggetti[7] = parseInt(document.getElementById("moet").value);
  oggetti[8] = parseInt(document.getElementById("prosecco").value);
  oggetti[9] = parseInt(document.getElementById("rosenerodavola").value);

  var prezzi = [
    { nome: "Uomo Focaccina", prezzo: 160 },
    { nome: "Oreo", prezzo: 320 },
    { nome: "Champagne", prezzo: 700 },
    { nome: "Dom Perignom", prezzo: 700 },
    { nome: "Don Giovanni", prezzo: 700 },
    { nome: "Jack Spisporks", prezzo: 700 },
    { nome: "Martini", prezzo: 700 },
    { nome: "Moet", prezzo: 700 },
    { nome: "Prosecco", prezzo: 700 },
    { nome: "Rose' Nero D'avola", prezzo: 700 },
  ];
  iterazione(oggetti, prezzi);
}

function StudiTecnici() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("stampante").value);
  oggetti[1] = parseInt(document.getElementById("atm").value);

  var prezzi = [
    { nome: "Stampante", prezzo: 1250 },
    { nome: "ATM", prezzo: 600 },
  ];
  iterazione(oggetti, prezzi);
}

function MetroTravels() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("valigia").value);

  var prezzi = [{ nome: "Valigia", prezzo: 1200 }];
  iterazione(oggetti, prezzi);
}

function Hotel() {
  var oggetti = [];
  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("cupcakefragola").value);
  oggetti[3] = parseInt(document.getElementById("cupcakecioccolato").value);
  oggetti[4] = parseInt(document.getElementById("cupcakevaniglia").value);
  oggetti[5] = parseInt(document.getElementById("tacos").value);
  oggetti[6] = parseInt(document.getElementById("pane").value);
  oggetti[7] = parseInt(document.getElementById("hamburger").value);
  oggetti[8] = parseInt(document.getElementById("succodifrutta").value);
  oggetti[9] = parseInt(document.getElementById("chickenbox").value);
  oggetti[10] = parseInt(document.getElementById("pizza").value);
  oggetti[11] = parseInt(document.getElementById("pepsi").value);
  oggetti[12] = parseInt(document.getElementById("sprite").value);
  oggetti[13] = parseInt(document.getElementById("fanta").value);
  oggetti[14] = parseInt(document.getElementById("cocacola").value);

  var prezzi = [
    { nome: "Hot Dog", prezzo: 40 },
    { nome: "Sushi", prezzo: 120 },
    { nome: "Cupcake alla Fragola", prezzo: 120 },
    { nome: "Cupcake al Cioccolato", prezzo: 120 },
    { nome: "Cupcake alla Vaniglia", prezzo: 120 },
    { nome: "Tacos", prezzo: 160 },
    { nome: "Pane", prezzo: 160 },
    { nome: "Hamburger", prezzo: 160 },
    { nome: "Succo di Frutta", prezzo: 240 },
    { nome: "Chicken Box", prezzo: 240 },
    { nome: "Pizza", prezzo: 240 },
    { nome: "Pepsi", prezzo: 160 },
    { nome: "Sprite", prezzo: 160 },
    { nome: "Fanta", prezzo: 280 },
    { nome: "Coca-Cola", prezzo: 280 },
  ];

  iterazione(oggetti, prezzi);
}

// Blocca lo scrolling su input number
bloccaScrollInputNumber();

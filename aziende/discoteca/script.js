window.addEventListener(
  "wheel",
  function (e) {
    if (e.target.type === "number") {
      e.preventDefault();
    }
  },
  { passive: false }
);

// listino con nomi e prezzi

var prezzi = [
  { nome: "Hot Dog", prezzo: 40 },
  { nome: "Sushi", prezzo: 160 },
  { nome: "Hamburger", prezzo: 160 },
  { nome: "Pane", prezzo: 160 },
  { nome: "Caffe'", prezzo: 80 },
  { nome: "Pepsi", prezzo: 280 },
  { nome: "Pringles", prezzo: 240 },
  { nome: "Milkshake", prezzo: 160 },
  { nome: "Gin Lemon", prezzo: 240 },
  { nome: "Whisky", prezzo: 760 },
  { nome: "Vodka", prezzo: 760 },
  { nome: "Birra", prezzo: 400 },
  { nome: "Codeina", prezzo: 760 },
  { nome: "Blue Angel", prezzo: 480 },
  { nome: "Tacos", prezzo: 160 },
  { nome: "Succhi di Frutta", prezzo: 240 },
  { nome: "Gelati", prezzo: 160 },
  { nome: "Ghiaccioli", prezzo: 160 },
  { nome: "Mojito", prezzo: 480 },
  { nome: "Spritz", prezzo: 700 },
  { nome: "Amaro Lucano", prezzo: 700 },
  { nome: "Cuba Libre", prezzo: 700 },
  { nome: "Sprite", prezzo: 240 },
  { nome: "Fanta", prezzo: 240 },
  { nome: "Monster", prezzo: 240 },
  { nome: "Schweppes", prezzo: 240 },
  { nome: "Long Island", prezzo: 700 },
  { nome: "Crodino", prezzo: 700 },
];
var totale = 0;
var cliente;
var azienda;

// prelievo data e ora
var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dataora = date + " " + time;

//
var nfattura = "";
var oggetti = [];

function calcola() {
  totale = 0;
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;
  nfattura = document.getElementById("nfattura").value;

  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("hamburger").value);
  oggetti[3] = parseInt(document.getElementById("pane").value);
  oggetti[4] = parseInt(document.getElementById("caffe").value);
  oggetti[5] = parseInt(document.getElementById("pepsi").value);
  oggetti[6] = parseInt(document.getElementById("pringles").value);
  oggetti[7] = parseInt(document.getElementById("milkshake").value);
  oggetti[8] = parseInt(document.getElementById("gin").value);
  oggetti[9] = parseInt(document.getElementById("whisky").value);
  oggetti[10] = parseInt(document.getElementById("vodka").value);
  oggetti[11] = parseInt(document.getElementById("birra").value);
  oggetti[12] = parseInt(document.getElementById("codeina").value);
  oggetti[13] = parseInt(document.getElementById("blueangel").value);
  oggetti[14] = parseInt(document.getElementById("tacos").value);
  oggetti[15] = parseInt(document.getElementById("succhi").value);
  oggetti[16] = parseInt(document.getElementById("gelati").value);
  oggetti[17] = parseInt(document.getElementById("ghiaccioli").value);
  oggetti[18] = parseInt(document.getElementById("mojito").value);
  oggetti[19] = parseInt(document.getElementById("spritz").value);
  oggetti[20] = parseInt(document.getElementById("amarolucano").value);
  oggetti[21] = parseInt(document.getElementById("cubalibre").value);
  oggetti[22] = parseInt(document.getElementById("sprite").value);
  oggetti[23] = parseInt(document.getElementById("fanta").value);
  oggetti[24] = parseInt(document.getElementById("monster").value);
  oggetti[25] = parseInt(document.getElementById("schweppes").value);
  oggetti[26] = parseInt(document.getElementById("longisland").value);
  oggetti[27] = parseInt(document.getElementById("crodino").value);
  // ... (aggiungi gli altri oggetti qui)

  // calcolo totale
  for (i = 0; i < oggetti.length; i++) {
    if (!isNaN(oggetti[i]) && oggetti[i] != 0) {
      totale += oggetti[i] * prezzi[i].prezzo;
    }
  }

  // avviso se il totale non raggiunge il minimo di 5000
  if (totale < 5000) {
    window.alert("L'ordine non raggiunge il minimo di 5000$");
  }

  // creazione contenuto fattura
  var fattura = "";

  fattura =
    "(Pagina 1) <br> §1§lFATTURA <Br> §1§oMagazzini<br><br>§8Cliente§0<br>" +
    cliente +
    "<br><br>§8Azienda§0<br>" +
    azienda +
    "<br><br>Data e Ora<br>" +
    dataora +
    "<br><br>(Pagina 2)<br>§1§lFATTURA§1 <br> §oMagazzini <br><br>§8Prodotti acquistati§0<br>";

  for (i = 0; i < oggetti.length; i++) {
    if (!isNaN(oggetti[i]) && oggetti[i] != 0) {
      fattura += "- " + oggetti[i] + "x64 " + prezzi[i].nome + "<br>";
    } else {
    }
  }
  fattura += "<br>§9Importo totale<br>§9$ §9§l" + totale;

  // numero fattura
  if (nfattura.length === 2) {
    nfattura = "0" + nfattura;
  } else if (nfattura.length === 1) {
    nfattura = "00" + nfattura;
  }

  //creazione scontrino

  var scontrino = "";

  scontrino =
    "/scontrino Magazzini " +
    totale +
    " " +
    cliente +
    " Rifornimento #" +
    nfattura +
    " (" +
    dataora +
    ")";

  textotale = "Il totale e': " + totale + "$";
  document.getElementById("totale").innerHTML = textotale;
  document.getElementById("fattura").innerHTML = fattura;
  document.getElementById("scontrino").innerHTML = scontrino;
}

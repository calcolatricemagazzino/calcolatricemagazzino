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
  { nome: "Zuppa di Funghi", prezzo: 560 },
  { nome: "Salmone", prezzo: 560 },
  { nome: "Oreo", prezzo: 320 },
  { nome: "Moet", prezzo: 700 },
  { nome: "Dom Perignon", prezzo: 700 },
  { nome: "Prosecco", prezzo: 700 },
  { nome: "Champagne", prezzo: 700 },
  { nome: "Martini", prezzo: 700 },
  { nome: "Jack Spisporks", prezzo: 700 },
  { nome: "Rose' Nero D'avola", prezzo: 700 },
  { nome: "Don Giovanni", prezzo: 700 },
  { nome: "Ovetto Kinder", prezzo: 320 },
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
  { nome: "Succhi", prezzo: 240 },
  { nome: "Gelati", prezzo: 160 },
  { nome: "Ghiaccioli", prezzo: 160 },
  { nome: "Mojito", prezzo: 480 },
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

  oggetti[0] = parseInt(document.getElementById("zuppadifunghi").value);
  oggetti[1] = parseInt(document.getElementById("salmone").value);
  oggetti[2] = parseInt(document.getElementById("oreo").value);
  oggetti[3] = parseInt(document.getElementById("moet").value);
  oggetti[4] = parseInt(document.getElementById("domperignom").value);
  oggetti[5] = parseInt(document.getElementById("prosecco").value);
  oggetti[6] = parseInt(document.getElementById("champagne").value);
  oggetti[7] = parseInt(document.getElementById("martini").value);
  oggetti[8] = parseInt(document.getElementById("jackspisporks").value);
  oggetti[9] = parseInt(document.getElementById("rosenerodavola").value);
  oggetti[10] = parseInt(document.getElementById("dongiovanni").value);
  oggetti[11] = parseInt(document.getElementById("ovettokinder").value);
  oggetti[12] = parseInt(document.getElementById("hotdog").value);
  oggetti[13] = parseInt(document.getElementById("sushi").value);
  oggetti[14] = parseInt(document.getElementById("hamburger").value);
  oggetti[15] = parseInt(document.getElementById("pane").value);
  oggetti[16] = parseInt(document.getElementById("caffe").value);
  oggetti[17] = parseInt(document.getElementById("pepsi").value);
  oggetti[18] = parseInt(document.getElementById("pringles").value);
  oggetti[19] = parseInt(document.getElementById("milkshake").value);
  oggetti[20] = parseInt(document.getElementById("gin").value);
  oggetti[21] = parseInt(document.getElementById("whisky").value);
  oggetti[22] = parseInt(document.getElementById("vodka").value);
  oggetti[23] = parseInt(document.getElementById("birra").value);
  oggetti[24] = parseInt(document.getElementById("codeina").value);
  oggetti[25] = parseInt(document.getElementById("blueangel").value);
  oggetti[26] = parseInt(document.getElementById("tacos").value);
  oggetti[27] = parseInt(document.getElementById("succhi").value);
  oggetti[28] = parseInt(document.getElementById("gelati").value);
  oggetti[29] = parseInt(document.getElementById("ghiaccioli").value);
  oggetti[30] = parseInt(document.getElementById("mojito").value);
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

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
var totale = 0;
var cliente;
var azienda;

// prelievo data e ora
var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dataora = date + " " + time;


var oggetti = [];

function calcola() {
  totale = 0;
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;

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

  
  textotale = "Il totale e': " + totale + "$";
  document.getElementById("totale").innerHTML = textotale;
  document.getElementById("fattura").innerHTML = fattura;

}

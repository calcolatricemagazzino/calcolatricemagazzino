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
  { nome: "7Up", prezzo: 160 },
  { nome: "DrPepper", prezzo: 240 },
  { nome: "Mountain Dew", prezzo: 240 },
  { nome: "Spritz", prezzo: 700 },
  { nome: "Amaro Lucano", prezzo: 700 },
  { nome: "Cuba Libre", prezzo: 700 },
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

var oggetti = [];

function calcola() {
  totale = 0;
  cliente = document.getElementById("cliente").value;
  azienda = document.getElementById("azienda").value;

  oggetti[0] = parseInt(document.getElementById("7up").value);
  oggetti[1] = parseInt(document.getElementById("drpepper").value);
  oggetti[2] = parseInt(document.getElementById("mountaindew").value);
  oggetti[3] = parseInt(document.getElementById("spritz").value);
  oggetti[4] = parseInt(document.getElementById("amarolucano").value);
  oggetti[5] = parseInt(document.getElementById("cubalibre").value);
  oggetti[6] = parseInt(document.getElementById("longisland").value);
  oggetti[7] = parseInt(document.getElementById("crodino").value);
 

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

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
  { nome: "Nokia 3310", prezzo: 260 },
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
      fattura += "- " + oggetti[i] + "x1 " + prezzi[i].nome + "<br>";
    } else {
    }
  }
  fattura += "<br>§9Importo totale<br>§9$ §9§l" + totale;


  textotale = "Il totale e': " + totale + "$";
  document.getElementById("totale").innerHTML = textotale;
  document.getElementById("fattura").innerHTML = fattura;
}

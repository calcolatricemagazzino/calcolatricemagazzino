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
  { nome: "Evian Energy", prezzo: 176 },
  { nome: "Fede Nunziale", prezzo: 2320 },
  { nome: "Orologio", prezzo: 4960 },
  { nome: "Bracciale Argento", prezzo: 4960 },
  { nome: "Anello in Diamante", prezzo: 5760 },
  { nome: "Bracciale Oro", prezzo: 13200 },
  { nome: "Rolex Cuoio", prezzo: 13200 },
  { nome: "Rolex Oro", prezzo: 19200 },
  { nome: "C. Divino Rosso", prezzo: 25000 },
  { nome: "C. Divino Nero", prezzo: 35200 },
  { nome: "C. Divino Azzurro", prezzo: 49600 },
  { nome: "C. LGBT", prezzo: 3360 },
  { nome: "Bracciale Vittoriano", prezzo: 560 },
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

  oggetti[0] = parseInt(document.getElementById("fedenunziale").value);
  oggetti[1] = parseInt(document.getElementById("orologio").value);
  oggetti[2] = parseInt(document.getElementById("braccialeargento").value);
  oggetti[3] = parseInt(document.getElementById("anellodiamante").value);
  oggetti[4] = parseInt(document.getElementById("braccialeoro").value);
  oggetti[5] = parseInt(document.getElementById("rolexcuoio").value);
  oggetti[6] = parseInt(document.getElementById("rolexoro").value);
  oggetti[7] = parseInt(document.getElementById("divinorosso").value);
  oggetti[8] = parseInt(document.getElementById("divinonero").value);
  oggetti[9] = parseInt(document.getElementById("divinoazzurro").value);
  oggetti[10] = parseInt(document.getElementById("lgbt").value);
  oggetti[11] = parseInt(document.getElementById("braccialevittoriano").value);

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

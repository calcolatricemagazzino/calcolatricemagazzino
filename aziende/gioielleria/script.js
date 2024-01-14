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
  {nome: "Blocco di Calcite", prezzo: 25 },
  {nome: "Ametista Piccola", prezzo: 50 },
  {nome: "Ametista Media", prezzo: 75},
  {nome: "Ametista Grande", prezzo: 100},
  {nome: "Ametista Enorme", prezzo: 125},
  {nome: "Ametista Gemmante", prezzo: 175},
  {nome: "Blocco di Ametista", prezzo: 175},
  {nome: "Bracciale Vittoriano", prezzo: 560},
  {nome: "Fede Nunziale", prezzo: 2320},
  {nome: "Orologio", prezzo: 4960},
  {nome: "Bracciale Argento", prezzo: 4960},
  {nome: "Anello in Diamante", prezzo: 5760},
  {nome: "Bracciale Oro", prezzo: 13200},
  {nome: "Rolex Cuoio", prezzo: 13200},
  {nome: "Rolex Oro", prezzo: 19200},
  {nome: "Completo LGBT", prezzo: 3360},
  {nome: "Completo Divino Rosso", prezzo: 25000},
  {nome: "Completo Divino Nero", prezzo: 35200},
  {nome: "Completo Divino Azzurro", prezzo: 49600}
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
  oggetti[18] = parseInt(document.getElementById("completodivinoazzurro").value);
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

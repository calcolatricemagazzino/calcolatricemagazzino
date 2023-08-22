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
  { nome: "Quadro", prezzo: 1345 },
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
  oggetti[28] = parseInt(document.getElementById("swich").value);
  oggetti[29] = parseInt(document.getElementById("televisione").value);
  oggetti[30] = parseInt(document.getElementById("quadro").value);
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

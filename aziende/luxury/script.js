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
  {nome: "Hot Dog", prezzo: 44 },
  {nome: "Sushi", prezzo: 140 },
  {nome: "Cupcake alla Fragola", prezzo: 160},
  {nome: "Cupcake al Cioccolato", prezzo: 160},
  {nome: "Cupcake alla Vaniglia", prezzo: 160},
  {nome: "Tacos", prezzo: 180},
  {nome: "Pane", prezzo: 180},
  {nome: "Hamburger", prezzo: 200},
  {nome: "Succo di Frutta", prezzo: 250 },
  {nome: "Patatine Fritte", prezzo: 250 },
  {nome: "Chicken Box", prezzo: 260 },
  {nome: "Pizza", prezzo: 260},
  {nome: "Pepsi", prezzo: 180},
  {nome: "Sprite", prezzo: 180 },
  {nome: "Fanta", prezzo: 290 },
  {nome: "Coca-Cola", prezzo: 290},
  {nome: "Oreo", prezzo: 320}
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

  oggetti[0] = parseInt(document.getElementById("hotdog").value);
  oggetti[1] = parseInt(document.getElementById("sushi").value);
  oggetti[2] = parseInt(document.getElementById("cupcakefragola").value);
  oggetti[3] = parseInt(document.getElementById("cupcakecioccolato").value);
  oggetti[4] = parseInt(document.getElementById("cupcakevaniglia").value);
  oggetti[5] = parseInt(document.getElementById("tacos").value);
  oggetti[6] = parseInt(document.getElementById("pane").value);
  oggetti[7] = parseInt(document.getElementById("hamburger").value);
  oggetti[8] = parseInt(document.getElementById("succodifrutta").value);
  oggetti[9] = parseInt(document.getElementById("patatinefritte").value);
  oggetti[10] = parseInt(document.getElementById("chickenbox").value);
  oggetti[11] = parseInt(document.getElementById("pizza").value);
  oggetti[12] = parseInt(document.getElementById("pepsi").value);
  oggetti[13] = parseInt(document.getElementById("sprite").value);
  oggetti[14] = parseInt(document.getElementById("fanta").value);
  oggetti[15] = parseInt(document.getElementById("cocacola").value);
  oggetti[16] = parseInt(document.getElementById("oreo").value);

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

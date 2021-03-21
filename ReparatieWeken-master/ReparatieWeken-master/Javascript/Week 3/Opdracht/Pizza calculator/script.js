//Pizza calculator.

//2 Alerts om de gebruiker te verwelkomen.
alert('Welkom bij de pizza calculator.');
alert('Uw bestelling volgt nu.');

//Prompt waar de aantal waardes per pizza worden opgeslagen.
var smallPizza = prompt('Hoeveel small pizza wilt u bestellen?');
var mediumPizza = prompt('Hoeveel medium pizza wilt u bestellen?');
var largePizza = prompt('Hoeveel large pizza wilt u bestellen?');

//Prijzen per afmeting van de pizza's.
const SMALLPRICE = 2.99;
const MEDIUMPRICE = 3.50;
const LARGEPRICE = 4.00;

//Waardes erin de totale prijzen per pizza bestelling.
var smallTotaal = smallPizza * SMALLPRICE;
var mediumTotaal = mediumPizza * MEDIUMPRICE;
var largeTotaal = largePizza * LARGEPRICE;

//Uiteindelijk worden hieronder de gehele bestelling op het scherm getoond.
document.write('Aantal small pizza: ' + smallPizza + ' x ' +  SMALLPRICE + ' = ' + smallTotaal + "<br>");
document.write('Aantal medium pizza: ' + mediumPizza + ' x ' +  MEDIUMPRICE + ' = ' + mediumTotaal + "<br>");
document.write('Aantal large pizza: ' + largePizza + ' x ' +  LARGEPRICE + ' = ' + largeTotaal);
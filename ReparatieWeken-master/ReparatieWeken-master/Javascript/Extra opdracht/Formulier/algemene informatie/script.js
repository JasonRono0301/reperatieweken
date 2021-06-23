var container = document.getElementById('container');
var inputVoornaam = document.getElementById('voornaam');
var inputAchternaam = document.getElementById('achternaam');
var inputLeeftijd = document.getElementById('leeftijd');
var knop = document.getElementById('submit');

knop.onclick = formulier;

function formulier(){
    var voornaamValue = inputVoornaam.value;
    var achternaamValue = inputAchternaam.value;
    var leeftijdValue = inputLeeftijd.value;
    console.log('Voornaam: ' + voornaamValue + ' ' + 'Achternaam: ' + achternaamValue + ' ' + 'Leeftijd: ' + leeftijdValue);

    var result = document.getElementById('resultaat');
    result.innerHTML = 
    '<h2> Voornaam: ' + voornaamValue + '<br>' + 
    'Achternaam: ' + achternaamValue + '<br>' +
    'Leeftijd: ' + leeftijdValue;
}
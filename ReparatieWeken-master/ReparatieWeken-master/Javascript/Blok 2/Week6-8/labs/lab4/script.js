var woord = document.getElementById('naam');
var check = document.getElementById('check');
var knop = document.getElementById('knop');
var uitkomst = "";
var games = ['Fiets'];

knop.onclick = split;

function split(){ 
    var woordValue = woord.value;
    var split = woordValue.split('');
    console.log(split); 
}






var woord = document.getElementById('naam');
var check = document.getElementById('check');
var knop = document.getElementById('knop');
var uitkomst = "";
var games = ['fiets'];

knop.onclick = split;

function split(){ 
    var correctWord = games[0];
    var correctWordSplit = correctWord.split('');
    console.log(correctWordSplit);

    var woordValue = woord.value;
    var inputSplit = woordValue.split('');
    console.log(inputSplit); 
}






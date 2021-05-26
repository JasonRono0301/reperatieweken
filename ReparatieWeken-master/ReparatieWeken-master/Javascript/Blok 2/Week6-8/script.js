var woord = document.getElementById('naam');
var check = document.getElementById('check');
var knop = document.getElementById('knop');
var uitkomst = "";
var games = ['Call of Duty','Apex Legends', 'FIFA', 'Battlefield'];

knop.onclick = function(){
    for(i = 0; i < games.length; i++){
        if(woord.value == games[i]){
            uitkomst = 'Correct';
            i = games.length;
        } else{
            uitkomst = 'Niet gevonden.';
        }
    }

    var splitwoord = woord.value;
    var split = splitwoord.split('');
    console.log(split);

    check.innerHTML = "<h1>" + split;
}







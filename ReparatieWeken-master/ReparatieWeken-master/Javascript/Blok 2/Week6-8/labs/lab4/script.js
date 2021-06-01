var woord = document.getElementById('naam');
var check = document.getElementById('check');
var knop = document.getElementById('knop');
var uitkomst = "";
var games = ['Fiets','Speen','breuk','bomen','draai'];

knop.onclick = function(){
    for(i = 0; i < games.length; i++){
        if(woord.value == games[i]){
            uitkomst = 'Correct';
            i = games.length;
        } else {
            uitkomst = 'Niet gevonden.';
        }
        check.innerHTML = "<h1>" + uitkomst;
    }

    var splitwoord = woord.value;
    var split = splitwoord.split('');
    console.log(split);

    for(i=0; i < games.length; i++){
        var button = document.createElement('button');
            check.appendChild(button);
            button.innerHTML = split[i];
    }
}







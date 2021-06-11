var woord = document.getElementById('naam');
var check = document.getElementById('check');
var knop = document.getElementById('knop');
var uitkomst = "";
var games = ['Fiets','Speen','breuk','bomen','draai'];

knop.onclick = split;

function split(){
    var woordValue = woord.value;
    var split = woordValue.split('');
    console.log(split);

    for(i = 0; i < games.length; i++){
        var letters = document.createElement('button');
        check.appendChild(letters);
        letters.innerHTML = split[i];
    }    

}






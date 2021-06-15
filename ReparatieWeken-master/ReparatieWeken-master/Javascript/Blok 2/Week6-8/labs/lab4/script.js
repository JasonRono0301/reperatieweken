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
    
    for(i = 0; i < correctWordSplit.length; i++){
        var buttons = document.createElement('button');
        check.appendChild(buttons);
        buttons.innerHTML = woordValue[i];

        if(buttons.innerHTML == 'undefined'){
            buttons.style.backgroundColor = 'red';
            buttons.innerHTML = '.';
        } 
    }
}






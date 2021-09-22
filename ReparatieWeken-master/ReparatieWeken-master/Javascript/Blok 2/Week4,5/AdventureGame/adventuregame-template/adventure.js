//Adventure game.

var title = document.getElementById('title');
var description = document.getElementById('description');
var inventory = document.getElementById('inventoryItem');
var buttonLayout = document.getElementById('game-buttons');

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var background = document.getElementById('game-container');

function theGame(){
    
    var levelTitles = [
        'Intro',
    ];

    var levelDescription = [
        'Welkom bij de game'
    ];

    function intro(){
        title.innerHTML = levelTitles[0];
        description.innerHTML = levelDescription[0];
    }
    intro();
}

theGame();






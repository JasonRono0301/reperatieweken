//Adventure game.

var title = document.getElementById('title');
var description = document.getElementById('description');
var inventory = document.getElementById('inventoryItem');
var buttonLayout = document.getElementById('game-buttons');

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var background = document.getElementById('game-container');

function TheGame(){
    var titles = [
        'Intro',
        'Level 1'

    ];
    var descriptions = [
        'Druk op de knop',
        'Open de deur'
    ];

    function intro(){
        title.innerHTML = titles[0];
        description.innerHTML = descriptions[0];
        button1.innerHTML = 'Start';
        button1.addEventListener('click',level1);
        button2.style.visibility = 'hidden';
        button3.style.visibility = 'hidden';
        inventory.style.visibility = 'hidden';

    }
    intro();

    function level1(){
        title.innerHTML = titles[1];
        description.innerHTML = descriptions[1];
        button1.addEventListener('click', intro);
        button1.innerHTML = 'Open';
    }

}

TheGame();







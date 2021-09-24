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
        'Intro:',
        'Level 1:'
    ];

    var levelDescription = [
        'Welkom bij de game',
        'Open de deur'
    ];

    title.innerHTML = levelTitles[0];
    description.innerHTML = levelDescription[0];
    inventory.innerHTML = 'Druk op start';
    button1.innerHTML = '>>>';
    button2.innerHTML = 'Start';
    button3.innerHTML = '<<<';

    function level1(){
        title.innerHTML = levelTitles[1];
        description.innerHTML = levelDescription[1];
    }

}

theGame();






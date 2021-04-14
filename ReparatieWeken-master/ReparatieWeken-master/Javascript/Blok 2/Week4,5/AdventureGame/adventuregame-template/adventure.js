//Adventure game.

var title = document.getElementById('title');
var description = document.getElementById('description');
var inventory = document.getElementById('inventoryItem');
var buttonLayout = document.getElementById('game-buttons');

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var background = document.getElementById('game-container');

var titels = [
    'Intro van het verhaal.',
    'Verlaat het huis',
    'Zoek de sleutel voor het poort'
];

var stories = [
    'Welkom bij de adventure game waarbij jij het gouden wapen moet gaan vinden. En het Goblin rijk moet vernietigen.',
    'Ga door de deur heen om het huis te verlaten.'
];

function TheGame(){

    function start(){
        title.innerHTML = titels[0];
        description.innerHTML = stories[0];
        inventory.style.display = 'none';
            button1.innerHTML = ">>>";
            button2.onclick = function() {level1()};
            button3.innerHTML = "<<<";
    } start();
    
    function level1(){
        title.innerHTML = titels[1];
        description.innerHTML = stories[1];
    }


}

TheGame();







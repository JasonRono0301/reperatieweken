//Adventure game.

var title = document.getElementById('title');
var description = document.getElementById('description');
var inventory = document.getElementById('inventoryItem');
var buttonLayout = document.getElementById('game-buttons');

var buttons = [];
buttons[0] = document.getElementById('button1');
buttons[1] = document.getElementById('button2');
buttons[2] = document.getElementById('button3');

var background = document.getElementById('game-container');

var titels = [
    'Welkom',
    'Test'
];

var stories = [
    'Welkom bij de Adventure game'
];

function testLevel(){
    title.innerHTML = titels[0];
    description.innerHTML = stories[0];
}

testLevel();





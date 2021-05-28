var container = document.getElementById('container');

for(i=1; i <= 3; i++){
    var buttons = document.createElement('button');
    container.appendChild(buttons);
    buttons.innerHTML = 'Button ' + i;
    buttons.setAttribute('id','button'+ i);
}

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

button1.onclick = function(){
    document.body.style.backgroundColor = 'green'; 
}

button2.onclick = function(){
    document.body.style.backgroundColor = 'red'; 
}

button3.onclick = function(){
    document.body.style.backgroundColor = 'blue'; 
}
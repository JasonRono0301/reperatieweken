var container = document.getElementById('container');

for(i = 0; i < 1; i++){
    var button = document.createElement('button');
    var hamburger = 0;
    button.innerHTML = 'Aantal hamburgers:';
    container.appendChild(button);
}

button.onclick = function(){
    hamburger++;
    var hamburgerOrder = document.getElementById('order');
    hamburgerOrder.innerHTML = 'Aantal hamburgers: ' + hamburger;
}
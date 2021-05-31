var container = document.getElementById('container');

for(i=1; i <= 30; i++){
    var buttons = document.createElement('button');
    container.appendChild(buttons);
    buttons.innerHTML = i;
    buttons.setAttribute('id','button'+ i);
}


var container = document.getElementById('container');

for(i=1; i <= 30; i++){
    var buttons = document.createElement('button');
    container.appendChild(buttons);
    buttons.innerHTML = i;

    if(i == 5 || 6){
        buttons.onclick = function(){
            alert('Yo');
        }
    }
}
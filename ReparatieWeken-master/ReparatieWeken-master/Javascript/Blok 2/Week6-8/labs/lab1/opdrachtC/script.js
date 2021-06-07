var container = document.getElementById('container');

for(i = 1; i <= 30; i++){
    var button = document.createElement('button');
        container.appendChild(button);
        button.innerHTML = i;
        button.style.backgroundColor = 'green';

    button.onclick = function(){
        var buttonColor = this.style.backgroundColor;
        if(buttonColor == 'green'){
            this.style.backgroundColor = 'red';
        }
        if(buttonColor == 'red'){
            this.style.backgroundColor = 'purple';
        }
        if(buttonColor == 'purple'){
            this.style.backgroundColor = 'black';
        }
        if(buttonColor == 'black'){
            this.style.visibility = 'hidden';
        }
    }
}





var container = document.getElementById('container');
var count = 0;

for(i=1; i <= 30; i++){
    var buttons = document.createElement('button');
    container.appendChild(buttons);
    buttons.innerHTML = i;

    if(i == 5){
        buttons.onclick = function(){
            count++;
            console.log(count);
            if(count > 0){
                this.style.backgroundColor = "red";
                if(count > 1){
                    this.style.backgroundColor = "purple";
                    if(count > 2){
                        this.style.backgroundColor = "blue";
                        if(count > 3){
                            this.style.backgroundColor = "black";
                            if(count > 4){
                                this.style.visibility = "hidden";
                            }
                        }
                    }
                }
            }
        }
    }
}

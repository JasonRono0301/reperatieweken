//Dynamische stoplicht.

var colors = ['red','orange','green'];//Array met de kleuren van het stoplicht.
var content = document.getElementById('container');

function verkeerslicht(){
    var random = Math.floor(Math.random() * colors.length);//Pakt een random index cijfer uit de array.
    var trafficLight = colors[random];
    console.log(trafficLight);//Laat in de console zien welke string de code gepakt uit de array.

    if(trafficLight == 'red'){
        content.style.backgroundColor = "red";
        alert('Je moet stoppen want het verkeerslicht geeft rood aan.');
    } if(trafficLight == 'orange'){
        content.style.backgroundColor = "orange";
        alert('Je begint af te remmen want het verkeerslicht geeft oranje aan.');
    } if(trafficLight == "green"){
        content.style.backgroundColor = "green";
        alert('Je mag doorrijden want het is groen.');
    }
}

var timer = setInterval(verkeerslicht,3000);
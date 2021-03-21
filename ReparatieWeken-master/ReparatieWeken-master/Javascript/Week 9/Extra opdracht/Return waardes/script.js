//Return waardes.

function sommen(){
    var getal1;
    var getal2;
    var vraag = prompt('wat voor som wil je zien? \n Type A voor een keer som.\n Type B voor een deel som\n Type C voor een min som.');
    
    if(vraag == 'a'){
        getal1 = prompt('Type een getal in');
        getal2 = prompt('Type een getal in');
        alert(getal1*getal2);
    } else if(vraag == 'b'){
        getal1 = prompt('Type een getal in');java
        getal2 = prompt('Type een getal in');
        alert(getal1/getal2);
    } else if(vraag == 'c'){
        getal1 = prompt('Type een getal in');
        getal2 = prompt('Type een getal in');
        alert(getal1-getal2);
    } 
}

sommen();
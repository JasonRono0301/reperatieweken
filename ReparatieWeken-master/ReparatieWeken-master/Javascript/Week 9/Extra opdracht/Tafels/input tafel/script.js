//Input tafel

function tafels(){

    var input = prompt('Welke tafel wilt u zien?');

    for(i = 0; i <= 10; i++){
        var antwoord = i * input;
        console.log(antwoord);
    }

    for(i = 10; i >= 0; i--){
        var antwoord2 = i * input;
         console.log(antwoord2);
    }


    if(input == ''){
        alert('U dient een getal in te vullen!');
    } 
}

tafels();





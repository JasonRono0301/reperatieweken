//Week 3 reperatie.

document.write('<h1> Tafel van 6 </h1>');
    var tafel6 = 6;//Alle getallen die worden vermedigvuldigd met 6.
        for(i = 0; i <= 10; i++){
            var antwoord = i*tafel6;
            document.write(tafel6,' x ',i,' = ', antwoord,'<br/>');
        }

document.write('<h1> Tafel van 3 </h1>');
    var tafel3 = 3;//Alle getallen die worden vermedigvuldigd met 3.
        for(a = 0; a <= 10; a++){
            var antwoord2 = a*tafel3;
            document.write(tafel3,' x ',a, ' = ', antwoord2,'<br/>');
        }

document.write('<h1> Input tafel </h1>');
    var randomtafel = Number(prompt('Welke tafel wilt u zien?'));
       if(randomtafel > ''){//Zodra er een nummer word ingevuld in de prompt. Dan word de for loop ingevuld.
            for(c = 0; c <= 10; c++){
                var antwoordTafels = c*randomtafel;
                    document.write(c, ' x ', randomtafel, ' = ', antwoordTafels, '<br/>');
            }
       } else{
           alert('Type alleen een nummer in.');//Geeft een alert aan zodra er iets anders word ingetypt dan een nummer.
       }

document.write('<h1> Berekeningen uitvoeren </h1>');
    var antwoord3 = 12+6*10/5-12;//De berekening.
        console.log(antwoord3);//Laat het antwoord van regel 19 zien in de console.
        document.write('12 + 6 * 10 / 5 - 12 =', antwoord3);

document.write('<h1> Berekeningen uitvoeren met invoer van getal </h1>');
        var input1 = prompt('Voer een getal in');
        var input2 = prompt('Voer een getal in');
        var input3 = prompt('Voer een getal in');
        var input4 = prompt('Voer een getal in');
    document.write(12+input1*input2/input3-input4); 
//Het valt me op bij deze opdracht dat het antwoord hetzelfde blijft.
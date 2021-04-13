//Horeca App.

function order(){

    while(drank != 'stop'){
        var drank = prompt('Welke drank wilt u toevoegen? \n fris of bier of wijn.');

        if(drank == 'fris'){
            var frisAantal = Number(prompt('Hoeveel fris wilt u bestellen?'));
        } if(drank == 'bier'){
            var bierAantal = Number(prompt('Hoeveel bier wilt u bestellen?'));
        } if(drank == 'wijn'){
            var wijnAantal = Number(prompt('Hoeveel wijn wilt u bestellen?'));
        } 
    }

    document.write('Aantal bestelde frisdrank: ' + frisAantal + "<br>");
    document.write('Aantal bestelde bier dranken: ' + bierAantal + "<br>");
    document.write('Aantal bestelde wijn dranken:' + wijnAantal);
}

order();
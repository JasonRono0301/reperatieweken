var container = document.getElementById('container');
var namen = [];

function arrayNames(){
    var vraag = prompt('Hoeveel namen wilt u in de array stoppen? (minimaal 3)');
    if(vraag < 3){
        alert('U moet minimaal 3 namen invoeren.');
    } if(vraag >= 3){
        for(i = 0; i < vraag; i++){
            var antwoord = prompt('Type hier de namen in:');
            namen.push(antwoord);
            document.write(namen[i] + "<br>");
        }

        for(i = namen.length-1; i>= 0; i--){
            document.write(namen[i] + "<br>");
        }
        console.log(namen);
    }


}

arrayNames();












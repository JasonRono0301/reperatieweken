//Array.push(Extra opdracht).

var auto = [];

while(vraag != 'stop'){
    var vraag = prompt('Welke auto wilt u toevoegen.');

    if(vraag != 'stop'){
        auto.push(vraag);
    }
}

document.write(auto + "<br>");

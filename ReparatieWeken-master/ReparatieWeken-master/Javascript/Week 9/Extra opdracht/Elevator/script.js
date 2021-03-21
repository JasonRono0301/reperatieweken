//Elevator

var inCheck = prompt('Naar welk verdieping wil je gaan');
var section = document.getElementById('section');
var image = document.getElementById('door');

//De if statements om naar een verdieping te gaan.
if(inCheck > 1){
    alert('Welkom op de ' + inCheck + 'e verdieping');
} else{
    alert('Type een verdieping in');
}

//De functie voor the elevator zelf.
function elevator(inCheck){
    if(inCheck > 1){
        return true;
    } else {
        return false;
    }
}


//De if statements voor de functie met daarin de parameter die word meegestuurd en output true or false eruit.

if(elevator(inCheck)){//Geeft een true condition terug zodra regel 7&15 groter is dan 1.
    section.innerHTML = 'Welkom op de ' + inCheck + 'e verdieping';
    section.style.backgroundColor = "green";
    image.src = 'gif/door.gif';
} else{//Geeft een false condition terug zodra er een onjuiste input word gedaan.
    section.innerHTML = 'Je hebt een onjuiste verdieping ingedrukt.';
    section.style.backgroundColor = "red";
}
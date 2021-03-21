// jullie mogen hier niets aanpassen.
var age = prompt("Hoe oud ben je?");
var access = document.getElementById("access");

/****************************************************************
 Challenge:

 Jullie mogen alleen tussen de {} van de functie code toevoegen

 1) Als de persoon 18 jaar of ouder is dan mag hij naar binnen
 2) Als de persoon jonger is dan 18, krijgt hij de vraag:
    Heb je toestemming van je ouders? (denk aan confirm)
 3) Als hij wel toestemming heeft, mag hij naar binnen
 4) Heeft hij geen toestemming, mar hij dus niet naar binnen

 ***************************************************************/


// LET OP !! Alleen tussen de {} mag je jullie code plaatsen. 

function checkAge(age){
 // hier dus jullie code !!
  if(age >= 18){
    return true;
  } else{
    var check = confirm('Heb je toestemming van je ouders?');//Text in de alert box.
    if(check == true){//Zodra ik op ok druk geeft het true terug.
    } else{
        return false;//Zodra ik op cancel druk geeft het false terug.
    }
  }
}

// jullie mogen hieronder niets aanpassen.

if(checkAge(age)){//Geeft als waarde true terug.
  access.innerHTML = "Je mag naar binnen.";
  access.style.backgroundColor = "green";
} else {//Geeft als waarde false terug.
  access.innerHTML = "Je bent te jong, en mag niet naar binnen.";
  access.style.backgroundColor = "red";
}
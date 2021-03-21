//Week 5 reparatie.

var keuzeKaas = prompt('Is de kaas geel?');

if(keuzeKaas == 'Ja'){
    keuzeKaas = prompt('Zitten er gaten in?');
} if(keuzeKaas == 'Ja'){
    keuzeKaas = prompt('Is de kaas belachelijk duur?');
} if(keuzeKaas == 'Ja'){
    alert('Het antwoord is Emmenthaler');
} else{
    alert('Je kan alleen Ja of nee invullen?');
}

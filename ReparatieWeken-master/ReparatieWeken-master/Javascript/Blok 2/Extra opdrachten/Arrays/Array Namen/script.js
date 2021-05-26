//Array namen.

var naam = document.getElementById('naam');
var knop = document.getElementById('knop');
var resultaat = document.getElementById('resultaat');


knop.addEventListener('click', function(){
    var waarde = naam.value;
    alert(waarde);
    resultaat.innerHTML = waarde;
})

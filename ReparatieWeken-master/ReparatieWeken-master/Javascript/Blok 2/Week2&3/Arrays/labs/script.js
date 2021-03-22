//Lab arrays.

function opdrachtA(){//Functie voor array opdracht A.
    var weekDagen = ["maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag","zondag"];
    document.write(weekDagen + "<br>");

    var werkDagen = ["maandag","dinsdag","woensdag","donderdag","vrijdag"];
    document.write(werkDagen + "<br>");

    var weekendDagen = ["zaterdag","zondag"];
    document.write(weekendDagen + "<br>");

    for(i=6; i >= 0; i--){
        document.write("," + weekDagen[i]);
    }

    document.write("<br>");

    for(i=4; i >=0; i--){
        document.write("," + werkDagen[i]);
    }

    document.write("<br>");

    for(i=1; i >=0; i--){
        document.write("," + weekendDagen[i]);
    }

    document.write("<br>");
}


function opdrachtB(){
    var arrayEen = [1,2,3,4,5,6,7,8,9,10];
    var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

    function optellen(){
        for(i=0; i < arrayEen.length && arrayTwee.length; i++){
            console.log(arrayEen[i] + arrayTwee[i]);
            var antwoordOptel = arrayEen[i] + arrayTwee[i];
                document.write(arrayEen[i] + " + " + arrayTwee[i] + ' = ' + antwoordOptel + "<br>");
        }

        document.write('<br>');
    }

    function aftrekken(){
        for(i=0; i < arrayEen.length && arrayTwee.length; i++){
            console.log(arrayTwee[i] - arrayEen[i]);
            var antwoordMin = arrayTwee[i] - arrayEen[i];
                document.write(arrayTwee[i] + " - " + arrayEen[i] + ' = ' + antwoordMin + "<br>");
        }
        document.write('<br>');
    }

    function vermenigvuldigen(){
        for(i=0; i < arrayEen.length && arrayTwee.length; i++){
            console.log(arrayTwee[i] * arrayEen[i]);
            var antwoordVermenig = arrayTwee[i] * arrayEen[i];
                document.write(arrayTwee[i] + " * " + arrayEen[i] + ' = ' + antwoordVermenig + "<br>");
        }
    }

    //Oproep van nested functies.
    optellen();
    aftrekken();
    vermenigvuldigen();
}




//Oproepen van de functies.
opdrachtA();
opdrachtB();
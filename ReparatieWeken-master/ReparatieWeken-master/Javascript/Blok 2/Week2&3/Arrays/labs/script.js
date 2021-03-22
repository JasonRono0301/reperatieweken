//Lab arrays.

function opdrachtA(){//Opdracht A van array lab.
    document.write("<h2> Opdracht A </h2>");

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


function opdrachtB(){//Opdracht B van array lab.
    document.write("<h2> Opdracht B </h2>");

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
        document.write("<br>");
    }

    function delen(){
        for(i=0; i < arrayEen.length && arrayTwee.length; i++){
            console.log(arrayTwee[i] / arrayEen[i]);
                var antwoordDelen = arrayTwee[i] / arrayEen[i];
                    document.write(arrayTwee[i] + " / " + arrayEen[i] + ' = ' + antwoordDelen + "<br>");
        }
        document.write("<br>");
    }

    //Oproep van nested functies in opdracht B.
    optellen();
    aftrekken();
    vermenigvuldigen();
    delen();
}


function opdrachtC(){//Opdracht C van array lab.
    document.write("<h2> Opdracht C </h2>");

    var tafels = [2,4,6,8];
    
    for(i=0; i < tafels.length; i++){
        for(a=0; a <= 10; a++){
            console.log(tafels[i] * a);
                var antwoordTafels = tafels[i] * a;
                    document.write(tafels[i] + " x " + a + " = " + antwoordTafels + "<br>");
        }
        document.write("<br>")
    }   
}


function opdrachtD(){//Opdracht D van array lab.
    document.write("<h2> Opdracht D </h2>");
    
    var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];

    var random = Math.floor(Math.random() * spellen.length);
        console.log(spellen[random]);
            document.write(spellen[random]);
}


//Oproep van de functies per opdracht.
opdrachtA();
opdrachtB();
opdrachtC();
opdrachtD();
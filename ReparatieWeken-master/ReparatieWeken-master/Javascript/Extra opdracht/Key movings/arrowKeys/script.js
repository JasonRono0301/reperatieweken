   var container = document.getElementById('container');
   var blokje = document.getElementById('blokje');

   var posTop = 200;
   var posRight = 450;

   window.onkeydown = function (event){
       switch(event.key){
           case 'ArrowUp'://Key event = UP.
               if(posTop > 0){
                   posTop = posTop - 10;
                } else{
                   posTop = 200;
                }
               blokje.style.top = posTop + "px";
                    console.log('Het blokje gaat met 10 pixels omhoog');//Direction text when going up.
                    console.log(posTop);
               break;
           case 'ArrowLeft'://Key event = LEFT.
                if(posRight > 0){
                    posRight = posRight - 10;
                } else{
                    posRight = 450;
                }
                blokje.style.left = posRight + "px";
                    console.log(posRight);
                    console.log('het blokje gaat met 10 pixels naar links');//Direction text when going left.
                break;
           case 'ArrowDown'://Key event = DOWN.
                if(posTop < 400){
                    posTop = posTop + 10;
                } else{
                    posTop = 200;
                }
                blokje.style.top = posTop + "px";
                    console.log(posTop);
                    console.log('Het blokje gaat met 10 pixels naar beneden');//Direction text when going down.
               break;
           case 'ArrowRight'://Key event = RIGHT.
               if(posRight < 900){
                   posRight = posRight + 10;
                } else{
                   posRight = 450;
                }
                blokje.style.left = posRight + "px";
                    console.log(posRight);
                    console.log('Het blokje gaat met 10 pixels naar rechts');//Direction text when going right.
               break;
       } 
   }
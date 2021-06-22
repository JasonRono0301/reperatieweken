
   var container = document.getElementById('container');
   var blokje = document.getElementById('blokje');

   var posTop = 200;
   var posRight = 450;

   window.onkeydown = function (event){
       switch(event.key){
           case 'w':
               if(posTop > 0){
                   posTop = posTop - 10;
               } else{
                   posTop = 200;
               }
               console.log('Het blokje gaat met 10 pixels omhoog');
               console.log(posTop);
               blokje.style.top = posTop + "px";
               break;
           case 'a':
            if(posRight > 0){
                posRight = posRight - 10;
            } else{
                posRight = 450;
            }
            blokje.style.left = posRight + "px";
                console.log(posRight);
               console.log('het blokje gaat met 10 pixels naar links');
               break;
           case 's':
            if(posTop < 400){
                posTop = posTop + 10;
            } else{
                posTop = 200;
            }
            console.log(posTop);
            blokje.style.top = posTop + "px";
               console.log('Het blokje gaat met 10 pixels naar beneden');
               break;
           case 'd':
               if(posRight < 900){
                   posRight = posRight + 10;
               } else{
                   posRight = 450;
               }
               console.log(posRight);
               blokje.style.left = posRight + "px";
               console.log('Het blokje gaat met 10 pixels naar rechts');
               break;
       } 
   }
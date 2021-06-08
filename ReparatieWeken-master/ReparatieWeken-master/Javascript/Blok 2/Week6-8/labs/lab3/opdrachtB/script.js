var knop = document.getElementById('knop');
var getallen = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

knop.onclick = pyramide;

function pyramide(){
   var inputVeld = document.getElementById('inputVeld');
   var inputValue = inputVeld.value;

   for(i = getallen.length; i >= 0; i--){
      for(j = inputValue; j < i; j++){
          console.log(j);
          document.write(j);
      }
      console.log("\n");
      document.write("<br>");
  }
}
 
//Lab buttons.

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var count1 = 0;

button1.onclick = function image1(){
    count1 += 1;
    document.getElementById('text1').innerHTML = count1;
    document.getElementById('container').style.backgroundImage = "url(images/bg1.jpg)";
    
}
//lab functies.

function addition(number1,number2){
    document.write(number1 + " + " + number2 + " = ");
    return number1 + number2;
}
var uitkomst = addition(10,12);
document.write(uitkomst + "<br>");

function subtraction(number1,number2){
    document.write(number1 + " - " + number2 + " = ");
    return number1 - number2;
}
var uitkomst2 = subtraction(58,34);
document.write(uitkomst2 + "<br>");

function multiplication(number1,number2){
    document.write(number1 + " x " + number2 + " = ");
    return number1 * number2;
}
var uitkomst3 = multiplication(6,7);
document.write(uitkomst3 + "<br>");

function division(number1,number2){
    document.write(number1 + " / " + number2 + " = ");
    return number1 / number2;
}
var uitkomst4 = division(144,12);
document.write(uitkomst4 + "<br>");

function increment(number){
    var plusPlus = 0;
    document.write(number + " + " + ++plusPlus + " = ");
    return number + plusPlus;
}
var uitkomst5 = increment(12);
document.write(uitkomst5 + "<br>");

function decrement(number){
    var minMin = 2;
    document.write(number + " - " + --minMin + " = ");
    return number - minMin;
}
var uitkomst6 = decrement(34);
document.write(uitkomst6 + "<br>");


let firstNumber = 5;
let secondNumber = 15;
let currencyNumber = firstNumber;
let intervalTime = (secondNumber + 2 - firstNumber) * 1000;

const intervalId = setInterval(function () {
    console.log(currencyNumber);
    currencyNumber++;
}, 1000);

setTimeout(function() {
    clearInterval((intervalId));
}, intervalTime);

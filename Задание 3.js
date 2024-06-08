function first(number1) {
    return function(number2) {
        return number1 + number2;
    }
}

let firstNumber = 2;
let secondNumber = 4;
const resultFunc = first(firstNumber);
console.log(resultFunc(secondNumber));


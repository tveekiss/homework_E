function numberCounter(arr) {
    let zeroNumbers = 0;
    let evensNumbers = 0;
    let oddsNumbers = 0;
    for (let item of arr) {
        if (typeof item == "number" && ! isNaN(item)) {
            if (item === 0) {
                zeroNumbers++;
            } else if (item % 2 === 0) {
                evensNumbers++;
            } else {
                oddsNumbers++;
            }
        }
    }
    console.log('Нулевых чисел: ' + zeroNumbers,);
    console.log('Четных чисел: ' + evensNumbers,);
    console.log('Нечетных чисел: ' + oddsNumbers,);
}


let arr = [1, 45, 2, 3, null, 0, NaN, '123']
numberCounter(arr);

function checkSample(number) {
    if (number > 1000) {
        return 'Данные не верны';
    }
    let sample = true;
    if (number in [0, 1]) sample = false;
    else for (let i = 2, sqrt = Math.sqrt(number); i < sqrt; i++){
        if (number % i === 0) {
            sample = false;
            break;
        }
    }
    return sample ? 'Число простое' : 'Число не простое'
}
const primeNumbers = [
    1, 0, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,
    97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223,
    227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
    283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
    367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433,
    439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,

// Дополнительные числа можно продолжить добавлять здесь...

];
for (let num of primeNumbers) {
    console.log(num, checkSample(num));
}

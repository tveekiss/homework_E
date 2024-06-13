function checkObj(str, obj) {
    return str in obj;
}

obj = {
    name: 'egor',
    age: 18,
    city: 'New York',
}

console.log(checkObj('name', obj)); // true
console.log(checkObj('names', obj)); // false

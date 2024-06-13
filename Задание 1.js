function checkOwnKeys(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ = ${key}, Значение = ${obj[key]}`);
        }
    }
}


prototypeObj = {
    key1: 'value1',
    key2: 'value2',
}

realObj = Object.create(prototypeObj);
realObj.key3 = 'value3';
realObj.key4 = 'value4';
realObj.key5 = 'value5';
checkOwnKeys(realObj);

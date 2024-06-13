class Electrodevice {
    constructor(power, included) {
        this.power = power;
        this.included = included;
        this.currencyPower = this.included ? this.power : 0;
    }

    on () {
        this.included = true;
        this.currencyPower = this.power;
    }

    off () {
       this.included = false;
       this.currencyPower = 0;
    }
}

class Computer extends Electrodevice {
    constructor(power, included) {
        super(power, included);
    }
    surfEthernet (url) {
        console.log(`surfing in site ${url}...`);
    }
    playGame (game) {
        console.log(`playing game ${game}...`);
    }
}

class Fan extends Electrodevice {
    constructor(power, included) {
        super(power, included);
        this.speed = included ? 500 : 0;
    }
    firstSpeed () {
        this.speed = 500;
        this.currencyPower = this.power;
    }

    secondSpeed () {
        this.speed = 1000;
        this.currencyPower = this.power * 2;
    }

    thirdSpeed () {
        this.speed = 1500;
        this.currencyPower = this.power * 3;
    }
}

const computer1 = new Computer(500, true)
const computer2 = new Computer(530, false)
const fan1 = new Fan(25, false);
const fan2 = new Fan(20, true);

computer1.surfEthernet('http://www.yandex.ru/');
computer2.on();
computer2.playGame('Counter Strike 2');
fan1.on();
fan2.off();
fan2.thirdSpeed();

const devices = [computer1, computer2, fan1, fan2];

let generalPower = 0;

devices.forEach(device => {
    generalPower += device.currencyPower;
})

console.log(generalPower);
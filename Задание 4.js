function Electrodevice (power, included) {
    this.power = power;
    this.included = included;
    this.on = function () {
        this.included = true;
        this.currencyPower = this.power;
    }
    this.off = function () {
        this.included = false;
        this.currencyPower = 0;
    }
}

function Computer (power, included) {
    this.power = power;
    this.included = included;
    this.currencyPower = this.included ? this.power : 0;
    this.surfEthernet = function (url) {
        console.log(`surfing in site ${url}...`)
    }
    this.playGame = function (game) {
        console.log(`playing game ${game}...`);
    }
}

function Fan (power, included) {
    this.power = power;
    this.included = included;
    this.currencyPower = this.included ? this.power : 0;
    this.speed = included ? 500 : 0;
    this.firstSpeed = function () {
        this.speed = 500;
        this.currencyPower = this.power;
    }
    this.secondSpeed = function () {
        this.speed = 1000;
        this.currencyPower = this.power * 2;
    }
    this.thirdSpeed = function () {
        this.speed = 1500;
        this.currencyPower = this.power * 3;
    }
}

Computer.prototype = new Electrodevice()
Fan.prototype = new Electrodevice()

const computer1 = new Computer(500, true)
const computer2 = new Computer(530, false)
const fan1 = new Fan(25, false);
const fan2 = new Fan(20, true);

computer1.surfEthernet('http://www.google.com/');
computer2.on();
computer2.playGame('Dota 2');
fan1.on();
fan2.off();
fan2.thirdSpeed();

const devices = [computer1, computer2, fan1, fan2];

let generalPower = 0;

devices.forEach(device => {
    generalPower += device.currencyPower;
})

console.log(generalPower);
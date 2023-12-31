// Program do tworzenia samochodów
// samochód ma nazwę, prędkość, silnik , max prędkość
// samochod może przyspieszać, zwalniać, odpalać silnik i gasić



// function createAuto(brand, maxSpeed) {
//     return {
//         brand,
//         speed: 0,
//         maxSpeed,
//         engine: false
//     }
// }
//
// const bmw = createAuto('bmw', 140);
// const mercedes = createAuto('mercedes', 190);
//
// function startEngine(car) {
//     if (!car.engine) {
//         car.engine = true;
//         console.log('silnik odpalony');
//     } else {
//         console.log('silnik już był odpalony');
//     }
// }
//
// function stopEngine(car) {
//     if (car.speed === 0) {
//         car.engine = false;
//         console.log('silnik zgaszony')
//     } else {
//         console.log('zatrzymaj się wpierw, zanim zgasisz silnik');
//     }
// }
//
// function speedUp(car, amount) {
//     if (car.engine) {
//         car.speed = Math.min(car.speed + amount, car.maxSpeed);
//         console.log(`Twoja prędkość to: ${car.speed}`);
//     } else {
//         console.log('odpal silnik wpierw');
//     }
// }
//
// function  slowDown(car, amount) {
//     car.speed = Math.max(car.speed - amount, 0);
//     console.log(`Twoja prędkość to: ${car.speed}`);
// }
//
// speedUp(bmw, 200);
// startEngine(bmw);
// speedUp(bmw, 40);
// speedUp(bmw, 40);
// speedUp(bmw, 240);
// stopEngine(bmw);
// slowDown(bmw, 50);
// slowDown(bmw, 250);
// stopEngine(bmw);

// Tak się piszę kod profesjonalnie
// Tak też piszę się w pythonie
// Paradygmat funkcyjny jest coraz bardziej funkcjonalny,
// React jest tak zbudowany, żeby

// 2 opcja w której używamy this. Ten kod jest cięzki
// function Auto(brand, maxSpeed) {
//     this.brand = brand;
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.engine = false;
// }
//
//
//
// Auto.prototype.startEngine = function () {
//     if (!this.engine) {
//         this.engine = true;
//         console.log('silnik odpalony');
//     } else {
//         console.log('silnik już był odpalony');
//     }
// }
//
// Auto.prototype.stopEngine = function () {
//     if (this.speed === 0) {
//         this.engine = false;
//         console.log('silnik zgaszony')
//     } else {
//         console.log('zatrzymaj się wpierw, zanim zgasisz silnik');
//     }
// }
//
// Auto.prototype.speedUp = function (amount) {
//     if (this.engine) {
//         this.speed = Math.min(this.speed + amount, this.maxSpeed);
//         console.log(`Twoja prędkość to: ${this.speed}`);
//     } else {
//         console.log('odpal silnik wpierw');
//     }
// }
//
// Auto.prototype.slowDown = function (amount) {
//     this.speed = Math.max(this.speed - amount, 0);
//     console.log(`Twoja prędkość to: ${this.speed}`);
// }
//
// const bmw = new Auto('bmw', 140);
// const mercedes = new Auto('mercedes', 190);
//
// bmw.speedUp(200);
// bmw.speedUp(200);
// bmw.startEngine();
// bmw.speedUp(40);
// bmw.speedUp(40);
// bmw.speedUp(240);
// bmw.stopEngine();
// bmw.slowDown(50);
// bmw.slowDown(250);
// bmw.stopEngine();

//classy
class Auto {
    constructor(brand, maxSpeed) {
    this.brand = brand;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.engine = false;
    }

    startEngine() {
        if (!this.engine) {
            this.engine = true;
            console.log('silnik odpalony');
        } else {
            console.log('silnik już był odpalony');
        }
    }

    stopEngine() {
        if (this.speed === 0) {
            this.engine = false;
            console.log('silnik zgaszony')
        } else {
            console.log('zatrzymaj się wpierw, zanim zgasisz silnik');
        }
    }

    speedUp(amount) {
        if (this.engine) {
            this.speed = Math.min(this.speed + amount, this.maxSpeed);
            console.log(`Twoja prędkość to: ${this.speed}`);
        } else {
            console.log('odpal silnik wpierw');
        }
    }

    slowDown(amount) {
        this.speed = Math.max(this.speed - amount, 0);
        console.log(`Twoja prędkość to: ${this.speed}`);
    }

}

const bmw = new Auto('bmw', 140);
const mercedes = new Auto('mercedes', 190);

bmw.speedUp(200);
bmw.speedUp(200);
bmw.startEngine();
bmw.speedUp(40);
bmw.speedUp(40);
bmw.speedUp(240);
bmw.stopEngine();
bmw.slowDown(50);
bmw.slowDown(250);
bmw.stopEngine();
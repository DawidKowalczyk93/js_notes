const user = {
    name: 'Jarosław',
    score: 0,
    updateScore: function (newScore) {
        user.score += newScore;
    }
}

// drugi sposób

// const user1 = {
//     name: 'Jarosław',
//     score: 0,
//     updateScore(newScore) {
//         user1.score += newScore;
//     }
// }
// Problem jak stworzyć wielu użytkowników, nie duplikując kody (factory design pattern)
// DRY - don't repeat yourself
function user1(name) {
    return {
        name: name,
        score: 0,
        updateScore(newScore) {
            this.score += newScore;
        }
    }
}

const u1 = user1('Lech');
const u2 = user1('Mateusz');
//this wskazuje na obiekt, przed kropką, to znaczy, że obiekt jest kontekstem metody fn
// u1.updateScore(42);

// Problem 2, funkcja updateScore, dla każdego uzytkownika jest taka sama, nie ma sensu jej deklarować
// dla każdego użytkownika osobno

function User(name) {
    this.name = name;
    this.score = 0;

}
// Funkcja konstruktora /\
User.prototype.updateScore = function(newScore) {
    this.score += newScore; // tutaj musimy wskazać na ten nowo powstały obiekt
}

const u3 = new User('Antoni');
const u4 = new User('Jacek');

String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.slice(1);
}

// dupa debugging - pisze w wielu miejscach console.log('dupa') i patrze gdzie się pojawi
// stworzyliśmy własnego mapa, który działa tak samo jak oryginalny map
Array.prototype.myMap = function(cb) {
    const temp = [];

    for (let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this));
    }

    return temp;
}
const arr = [1, 2, 3, 4];
const result = arr.myMap((item, id, coll) => item * id);

Array.prototype.myFilter = function (cb) {
    const temp = [];

    for (let i = 0; i < this.length; i++){
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }

    return temp;

}
// const r = [1, 2, 3].myFilter((element), idx, arr) => element > 2);
// acc - acumulator, ce- current element, idx, arr -> agregacja tablicy,
// reduce => cb, ?initialValue

Array.prototype.myReduce = function (fn , initialValue = undefined) {
    let accumulator = initialValue !== undefined ? initialValue: this[0];

    for (let i = intialValue !== undefined ? 0 : 1; i < this.length; i++){
        accumulator = fn(accumulator, this[i], i, this);
    }

    return accumulator;
}

// stwórz zmienną do akumulacji wartości
// przeiteruje po wszystkich wartościach
// wywowałaj callback, pamiętaj, żeby przekazać 4 wartości
// wynik callback to nowa wartość do zmiennej do akumulacji
// pamiętaj, że opcjonalny incitialvalue to pierwszy acc, jeżeli nie ma acc to pierwszy element tablicy
// zwróc wynik zmienną do akumulacji

//syntactic sugar - lukier składniowy, <- to są klasy
// Same klasy w sobie to są syntactic sugar

// class User1 {
//     constructor(name) {
//         this.name = name;
//         this.score = 0;
//     }
//
//     updateScore(newScore) {
//         this.score += newScore;
//     }
// }
// // new wywyołuje constructor
// const u5 = new User1('Zbigniew');


// function magic() {
//     console.log(this);
// }
//
// const context = {
//     a: 1, b: 2
// }
//
// magic.call(context, "ala ma kota");
// magic.apply(context, ["ala ma kota i ejc"]);
// const magic2 = magic.bind(context);
// magic2();


// \/ pewniaczek na rozmowie kwalifikacyjnej
const h1Ref = document.querySelector('#title');
class Magic{

    constructor() {
        this.counter = 0;
    }

    click() {
        // this - object klasy magic

        // this - object klasy magic
        // h1Ref.addEventListener('click', (function () {
        //     this.counter++;
        //     console.log(this.counter);
        // }).bind(this));

        // this - object klasy magic

        //janusz programowania takzrobi \/
        // const that = this;
        // h1Ref.addEventListener('click', (function () {
        //     this.counter++;
        //     console.log(that.counter);
        // })
        //janusz programowania takzrobi /\

        const that = this;
        h1Ref.addEventListener('click', () => {
            this.counter++;
            console.log(that.counter);
        })
        // arrow function nie ma this, dlatego program sobie weźmie thisa z góry
        // tak można rozwiązać na rowmowie kwal
    }
}

const m = new Magic();
m.click();
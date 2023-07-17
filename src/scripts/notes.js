    // Tworzenie zmiennej
// var, let, const

    // Redeklaracja
// var x = 42;
// var x = 2137;
// console.log(x);

    // Reinicjalizacja
// var x = 42;
// x = 2137;
// console.log(x);

// let x = 42;
// x = 2137;
// console.log(x);

    // // Const się nie da
// const x = 42;
// x = 2137;
// console.log(x);

// Hoisting - przenoszenie deklaracji zmiennych, funkcji i klas na
//              górę, aktualnie przetwarzanego zasięgu.

// console.log(x);
// var x = 42;
// //    \/
//     var y;
//     console(x);
//     x = 42;

// console.log(add(1, 2));
//
// function  add(a, b) {
//     return a + b;
// }

// console.log(x);
// let x = 42;

// Zasięg (Scope) - widoczność, dostępność indentyfikatorów
    // (nazwy zmiennych, funkcji i klas,
    //  tzn. gdzie to można używać

// Zasięg funkcyjny - ograniczony przez ciało funkcji (var)
// Zasięg blokowy - ograniczony przez parę klamerek (curly braces) (let i const)

// const x = 10;
//
// if (x) {
//     var y = 42;
//     let y1 = 42;
//     const y2 = 42;
// }
// console.log(y);
// console.log(y1);
// console.log(y2);

//     function magic() {
//         var y = 42;
//         let y1 = 42;
//         const y2 = 42;
//     }
//
// magic();
// console.log(y, y1, y2);

 // Functions

 // named functions
 function addDigits(digit1, digit2) {
    return digit1 + digit2;
 }
 addDigits(1, 2);

// anonymous function
// classic
// function expression (wyrażenie funkcyjne) - przypisanie deklaracji fn do zmiennej
const addDigits2 = function (digit1, digit2) {
    return digit1 + digit2;
}

console.log(addDigits2(1, 2));


// arrow function - funkcja strzałkowa, fat arrow function (nie ma this ani arguments)
const addDigit3 = (digit1, digit2) => {
        return digit1 + digit2;
    }
addDigit3(1, 2);

// wariancje arrow function
    const  add = () => { return 42; }
    const add1 = a => { return a + 42; }  // nie pisać tak, zawsze pisać okrągłe nawiasy

    const add2 = (a, b) => { return a + b; }

    const add3 = (a, b) => a + b; // implicit return, jak nie ma klamerek to automatycznie wraca wynik wyrażenia
    // często jest to używane, tzw. one liner

const magic = a => a <= 0; // (a) => (a <= 0), (a) => { return a <= 0 }
const magic2 = () => {
    return { a: 42 }
}

// to samo co wyżej
const magic3 = () => ({a: 42})




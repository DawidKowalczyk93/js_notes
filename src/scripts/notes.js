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


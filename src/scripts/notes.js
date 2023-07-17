//     // Tworzenie zmiennej
// // var, let, const
//
//     // Redeklaracja
// // var x = 42;
// // var x = 2137;
// // console.log(x);
//
//     // Reinicjalizacja
// // var x = 42;
// // x = 2137;
// // console.log(x);
//
// // let x = 42;
// // x = 2137;
// // console.log(x);
//
//     // // Const się nie da
// // const x = 42;
// // x = 2137;
// // console.log(x);
//
// // Hoisting - przenoszenie deklaracji zmiennych, funkcji i klas na
// //              górę, aktualnie przetwarzanego zasięgu.
//
// // console.log(x);
// // var x = 42;
// // //    \/
// //     var y;
// //     console(x);
// //     x = 42;
//
// // console.log(add(1, 2));
// //
// // function  add(a, b) {
// //     return a + b;
// // }
//
// // console.log(x);
// // let x = 42;
//
// // Zasięg (Scope) - widoczność, dostępność indentyfikatorów
//     // (nazwy zmiennych, funkcji i klas,
//     //  tzn. gdzie to można używać
//
// // Zasięg funkcyjny - ograniczony przez ciało funkcji (var)
// // Zasięg blokowy - ograniczony przez parę klamerek (curly braces) (let i const)
//
// // const x = 10;
// //
// // if (x) {
// //     var y = 42;
// //     let y1 = 42;
// //     const y2 = 42;
// // }
// // console.log(y);
// // console.log(y1);
// // console.log(y2);
//
// //     function magic() {
// //         var y = 42;
// //         let y1 = 42;
// //         const y2 = 42;
// //     }
// //
// // magic();
// // console.log(y, y1, y2);
//
//  // Functions
//
//  // named functions
//  function addDigits(digit1, digit2) {
//     return digit1 + digit2;
//  }
//  addDigits(1, 2);
//
// // anonymous function
// // classic
// // function expression (wyrażenie funkcyjne) - przypisanie deklaracji fn do zmiennej
// const addDigits2 = function (digit1, digit2) {
//     return digit1 + digit2;
// }
//
// console.log(addDigits2(1, 2));
//
//
// // arrow function - funkcja strzałkowa, fat arrow function (nie ma this ani arguments)
// const addDigit3 = (digit1, digit2) => {
//         return digit1 + digit2;
//     }
// addDigit3(1, 2);
//
// // wariancje arrow function
//     const  add = () => { return 42; }
//     const add1 = a => { return a + 42; }  // nie pisać tak, zawsze pisać okrągłe nawiasy
//
//     const add2 = (a, b) => { return a + b; }
//
//     const add3 = (a, b) => a + b; // implicit return, jak nie ma klamerek to automatycznie wraca wynik wyrażenia
//     // często jest to używane, tzw. one liner
//
// const magic = a => a <= 0; // (a) => (a <= 0), (a) => { return a <= 0 }
// const magic2 = () => {
//     return { a: 42 }
// }
//
// // to samo co wyżej
// const magic3 = () => ({a: 42})
//
// // Control Flow
// if (condition) {
//     //true
// } else if (condition2) {
//     //true if conditon false and condition 2 true
// } else {
//     //default
// }
//     }
//
//     //switch
// // const value = 2;
// //
// // switch (value) {
// //     case 1:
// //         //logic
// //         break;
// //     case 2:
// //         //logic
// //         break;
// //     default:
// //         //logic
// // }
//     // Bez breaka sprawdza po kolei wszystyko
//     // const value = 2;
//     //
//     // switch (value) {
//     //     case 1:
//     //         //logic
//     //     case 2:
//     //         //logic
//     //     default:
//     //         //logic
//     // }
// // const value = 2;
// //     switch (value) {
// //         case 1:
// //             //logic
// //             break;
// //         case 2:
// //             //logic
// //             break;
// //         default:
// //             //logic
// //     }

const x = [1, 2, 3];
const y = [];

// for (let i = 0; i < x.length; i++) {
//     y.push(x[i] * 2);
// }
// console.log(y);
// // for jest najszybszą pętlą w JS

// for of
// for (const item of x) {
//     y.push(item * 2);
// }
// while jeżeli nie wiem ile iteracji, for jeżeli wiemy
// while (condition) {
//     // logic
// }
// let index = 0;
// while (index < 3) {
//     y.push(x[index] * 2);
//     index++;
// }

// do {} while (condition)

// exercises

// napisz funkcję, która zwraca z tablicy najwyższą wartość



// console.log(max([1, 2, 3, 4, 5, 2, 43]));
//
// function max(collection) {
//     let maxValue = collection[0];
//
//     for (const digit of collection){
//         if(digit > maxValue) {
//             maxValue = digit;
//         }
//     }
//     return maxValue;
// }

// napisz funkcje która zwraca dnia tygodnia, na podstawie liczby, 1 - sunday 7- saturday

// function getDayName(dayDigit) {
//     switch (dayDigit) {
//         case 1:
//             return 'Sunday';
//         case 2:
//             return 'Monday';
//         case 3:
//             return 'Tuesday';
//         case 4:
//             return 'Wednesday';
//         case 5:
//             return 'Thursday';
//         case 6:
//             return 'Friday';
//         case 7:
//             return 'Saturday';
//         default:
//             throw new Error('invalid index day');
//     }
// }

// const getDayName = (dayIndex) => {
//     if( dayIndex < 0 || day)
//     const days = ['Sunday', 'Monday', 'Tueasdy', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//
//     return days[dayIndex - 1];
// }
//
// console.log(getDayName(7));

// Policz średnią elementów z tablicy

// function calculateAvg(collection) {
//     let sum = 0;
//     for(const digit of collection) {
//         sum += digit;
//     }
//     return sum / collection.length;
// }

// console.log(calculateAvg([1,2,3,4,5]));


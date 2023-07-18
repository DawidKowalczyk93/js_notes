const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'jacek',
        city: 'jelenia_gora',
        age: 30,
        hobbies: ['trekking', 'cars', 'martial arts'],
    },
    {
        name: 'marcin',
        city: 'lublin',
        age: 43,
        hobbies: ['css', 'speedway', 'history']
    },
    {
        name: 'dawid',
        city: 'bielskobiala',
        age: 30,
        hobbies: ['football', 'snowboard', 'boxing']
    },
    {
        name: 'sebastian',
        city: 'golkowice',
        age: 20,
        hobbies: ['drugs', 'hookers', 'Js']
    },
    {
        name: "karolina",
        city: "dubaj",
        age: 32,
        hobbies: ["książki", "gotowanie", "filmy"]
    },
    {
        name: 'patryk',
        city: 'tarnow',
        age: 26,
        hobbies: ['anime', 'rts', 'lol']
    },
    {
        name: 'aleksander',
        city: 'warsaw',
        age: 23,
        hobbies: ['philosophy', 'art', 'music']
    },
    {
        name: 'Kamil',
        city: 'walcz',
        age: 34,
        hobbies: ['js', 'html', 'Mac']
    },
    {
        name: 'Alex',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'franek',
        city: 'warszawa',
        age: 18,
        hobbies: ['js', 'bastkeball', 'cars']
    },
    {
        name: 'marcin',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'bike', 'jogging']
    }
]

// policz srednia wieku

// function calculateAvgAge(elements) {
//     let sum = 0;
//
//     // for (let i = 0; i < elements.length; i++) {
//     //     sum += elements[i].age;
//     // }
//     for (const element of elements) {
//         sum += element.age;
//     }
//     return sum / elements.length;
// }

// function calculateAvgAge(elements) {
//     const ages = elements.map((element) => element.age);
//     const sum = ages.reduce((acc, ce) => acc + ce );
//     return sum / elements.length;
//
// }
//      /\   \/ to samo
// function calculateAvgAge(elements) {
//     return elements
//      .map((element) => element.age)
//      .reduce((acc, ce) => acc + ce ) / elements.length;
//
// }

// const calculatedAvgAge = (elements) => elements
//     .reduce((acc, ce) => acc + ce.age, 0) / elements.length;
//
// result = calculatedAvgAge(data);
// console.log(result);

// policz średnia wieku ludzi spoza warszawa
// function calculatedAvgAge(items) {
//     // zmienna gdzie będziemy zliczać wiek
//     let sumAge = 0;
//     //zmienna gdzie będziemy liczyć ile jest osób
//     let personCount = 0;
//     //iteracja po wszystkich elementach
//     for (const item of items) {
//         if (item.city !== 'warszawa') {
//             sumAge += item.age;
//             personCount++;
//         }
//     }
//     return sumAge / personCount;
// }


// function calculatedAvgAge(items) {
//     const result = items.filter((item) => item.city !== 'warszawa');
//     return result.reduce((acc, ce) => acc + ce.age, 0) / result.length;
// }

// sprawdź, czy wszyscy są młodsi niż 30 lat
// function checkAge(items) {
//     for (const item of items) {
//         if (item.age >= 30) return false;
//     }
//     return true;
// }

// result = checkAge(data);
// console.log(result);

//czy ktokolwiek pochodz z krakowa

// const checkCity = (items) => items.every((item) => item.city !== 'krakow');

// function checkCity(data) {
//     for (const item of data) {
//         if (item.city === 'krakow') {
//             return true;
//         }
//     }
//     return false;
// }

// zwroc tablice imion osób, które kochają js

// function getNamesWhoLoveJS(elements) {
//     const nameLoveJS = [];
//     for (const element of elements) {
//         if (element.hobbies.includes('js')) {
//             nameLoveJS.push(element.name);
//         }
//     }
//     return nameLoveJS;
// }
// const getNamesWhoLoveJS = (elements) => elements
//     .filter((element) => element.hobbies.includes('js'))
//     .map((element) => element.name);

//policz ile jest unikalnych hobby
//algorytm
    //zrób tablice do dodawania pojedyńczych hobby
    //przeiteruj po wszystkich elementach
//wewnątrz iteracji po items przeiteruj po hobbies poszczególnych elementów
// sprawdź czy dane hobby jeszcze nie jest w tablicy do dodawania hobby i go dodaj
//zwróć długość tablicy z hobby
// function countUniqueHobbies(items) {
//     const UniqueHobbies = [];
//
//     for (const item of items) {
//         for(const element of item.hobbies) {
//             if(!UniqueHobbies.includes(element)) {
//                 UniqueHobbies.push(element);
//             }
//         }
//     }
//     return UniqueHobbies.length;
// }


result = countUniqueHobbies(data);
console.log(result);

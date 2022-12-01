let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

let sum = 0;;
for (let item of users) {

    let num = parseFloat(item.balance.replace('$', '').replaceAll(',', ''));
    if (num > 2000) {
        console.log(`тел:${item.phone}, баланс більше 2000 доларів.`.trim()); 
    }
    sum += num;
    sum = Number(sum.toFixed(2));

}
 console.log(` сумма всіх балансів користувачів:${sum}$`);

// =====================================================================

// let arrLength = prompt('напишіть довжину масиву');

// if (isNaN(arrLength) || arrLength === "") {
//     arrLength = alert('Ви ввели строку ,введіть число більше 5');

// }
// if (!arrLength && !isNaN(arrLength) || arrLength < 5) {
//     alert('введіть число більше 5');
// }


// let newArr = [];
// for (let i = 1; i <= arrLength; i++) {
//     let getValue = prompt('Добавте значення ');
//     if (!getValue) {
//         alert('Шкода,але значення потрібно вводити');
//         break;
//     }
//     newArr.push(getValue);
// }
// console.log(newArr);



// function Isnamber(elem) {
//     return isNaN(elem);
// }

// if (newArr.every(Isnamber) === false) {
//     newArr.sort(function (a, b) {
//         return a - b;
//     });
// } else {
//     newArr.sort(function (a, b) {
//         return a.length - b.length;
//     });
// }


// console.log(newArr);

// newArr.splice(1, 3);

// console.log(newArr);


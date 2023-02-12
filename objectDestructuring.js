"use strict";   // Use strict mode
console.log("object destructuring");
//creating an object
const restaurant = {
    name: "Classics Italiane",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Brochette", "Garlic Bread", "Capers Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto", "wings"],
    //function inside an object
    //ES6 enhanced object literals
    openingHours: {
        thu: {
            open: 12,
            close: 22,

        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // open 24 hours
            close: 24,
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // orderDelivery: function ({ starterIndex = 0, mainIndex, time, address }) {
    //     console.log(`Address:${address}\nTime:${time}\nMain Course:${mainIndex}\nStarter: ${starterIndex}`)
    // }

    orderDelivery: function (obj) {
        console.log(obj);
    },
    orderDelivery2: function ({ time, address, starterIndex, mainIndex }) {
        console.log(`time: ${time}\nAddress: ${address}\n${this.starterMenu[starterIndex]}\n${this.mainMenu[mainIndex]}`);

    }
};



restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 1
});

restaurant.orderDelivery2({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 1
});


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//to change the name of the variable
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);
// console.log(restaurant);

//default values
// we will get an empty array menu as default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
let obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
//nested objects
const { fri: { open, close } } = openingHours;

console.log(open, close);
'use strict';

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

    orderDelivery: function (obj) {
        console.log(obj);
    },
    orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
        console.log(`time: ${time}\nAddress: ${address}\n${this.starterMenu[starterIndex]}\n${this.mainMenu[mainIndex]}`);

    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, andchess ${ing3}`);
    }
};

const arr = [7, 8, 9];
//using spread ... operator to move the element of one array to the  new array
const newArr = [1, 3, ...arr];
console.log(newArr)

//we can also use spread operator to join two arrays
//we can use spread operator to use array's elements individually.
console.log(...newArr);//we can see the difference in output of these two lines

//writing a new array based on the other array and expanding it.
const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);

//copy of an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
//join two or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterables: arrays, strings, maps, sets. NOT objects
const str = "Baktash";
const letters = [...str, " ", "S."];
console.log(letters);

//real world example

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);


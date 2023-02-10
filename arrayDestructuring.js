
"use strict"
console.log("Array and object's destructuring");

//creating an object
const restaurant = {
    name: "Classics Italiane",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Brochette", "Garlic Bread", "Capers Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto", "wings"],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

//destructuring is a way to extract data from an array or object and store it in a variable
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
//destructuring array
//destructuring assignment
//destructuring will not work if the array is empty
//destructuring does  not mutate the original array, it copies its elements to the variables
const [x, y, z] = arr;
console.log(x, y, z);
//we can also use destructuring to assign values to variables. This is called destructuring assignment
//destructuring object's property categories in to variables first and second
let [first, second] = restaurant.categories;
console.log(first, second);
//to copy the first and third element of the array
[first, , second] = restaurant.categories;
//we notice that the second element is skipped. This is because we have an empty space in the array
console.log(first, second);

//switching variables using destructuring
[first, second] = [second, first];
console.log(first, second);

let [start, maim] = restaurant.order(2, 3);
console.log(start, maim);

let nested = [2, 4, [5, 6]];
let [i, , j] = nested;
console.log(i, j);
//destructuring nested array
let [p, , [q, r]] = nested;
console.log(p, q, r);

//Default values
//if the array has less elements than the variables, the variables will be undefined
//to avoid this, we can set default values
const [k = 1, l = 1, m = 1] = [8, 9];
console.log(k, l, m);


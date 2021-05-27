'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex - 1], this.mainMenu[mainIndex - 1]];
  },

  orderDelivery: function ({ name, starterIndex, mainIndex, time, address }) {
    console.log(
      `    Hi! ${name},
    Your Order: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will deliver at: ${address} 
    on: ${time}`
    );
  },

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
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const firstArr = [...restaurant.starterMenu];
console.log(firstArr);
const secondArr = [...restaurant.mainMenu];
console.log(secondArr);
const newArry = [...firstArr, ...secondArr];
console.log(newArry);
// restaurant.orderDelivery({
//   name: 'Geetha',
//   starterIndex: 3,
//   mainIndex: 2,
//   time: '1:14 pm',
//   address: '544,Muniyappan Kovil Street,Lawly Road,coimbatore',
// });

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// const [order1, order2] = restaurant.order(1, 1);
// console.log(order1);
// console.log(order2);
// const arr = [1, 3, 4, 5];
// console.log(arr);
// const [a, b, c, d] = arr;
// console.log(a, b, c, d, order1, order2);

const { name, categories, openingHours } = restaurant;
// console.log(name);
// console.log(categories);
// console.log(openingHours);

const {
  name: FreakMart,
  categories: Mens,
  openingHours: startTime,
} = restaurant;

// console.log(FreakMart);
// console.log(Mens);
// console.log(a21);
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
const {
  fri: { open: o, close: c },
} = startTime;
// console.log(o);
// console.log(c);

/*
'use strict'

function marraige() {
    console.log("Ramki Weds Geetha");

}

marraige();
marraige();
marraige();
marraige();
marraige();
*/

// function diclaration:
function calcAge1(year) {
    return 2021 - year;
}

const age1 = calcAge1(1994);
console.log(age1);

//function expression:
calAge2 = function (year) {
    return 2021 - year;
}
const age2 = calcAge1(1999);
console.log(age2);

const calAge3 = year => 2021 - year;

const age3 = calAge2(2019);
console.log(age3);
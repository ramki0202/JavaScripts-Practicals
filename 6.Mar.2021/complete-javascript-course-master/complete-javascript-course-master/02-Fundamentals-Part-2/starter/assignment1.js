
/*let country = "India";
const continent = "Asia";
let population = 30000000;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = true;
const language = "Tamil";

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

console.log(language);

population = population / 2;
console.log(population);
const finlandPopulation = 6000000;

console.log(finlandPopulation > population);

let discription = "Tamilnadu is in" + " " + country + " " + "and its" + " " + population + " of people speaking" + " " + language + " " + "Language";

console.log(discription);

discription = `Tamilnadu is in ${country} and its ${population} of people speaking ${language} language 🎂`;

console.log(discription);

if (population < finlandPopulation) {
    console.log(`Your ${country} population( ${population}) is normal`);
} else {
    console.log(`Your ${country} population( ${population}) is above finladnd population`);
}


const language = prompt("Enter your language.!");

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "Tamil":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break
    default:
        console.log("'Great language too :D");
}


let country = "India";
let population = parseInt(prompt("enter Your Population..!"));
let print = population >= 3000015 ? `${country}'s population is above average` : `${country}'s population is bellow average`

alert(print);*/



// Funamental2:
/*
function describeCountry(country, population, capitalCity) {
    const countryStatus = `${country} has ${population} people and its capital city is ${capitalCity}`;
    return countryStatus;
}

let countryReturn;

countryReturn = describeCountry("India", "3000000", "Chennai");
alert(countryReturn);

countryReturn = describeCountry("Srilanka", "100000", "kolumbu");
alert(countryReturn);

countryReturn = describeCountry("USA", "520000", "NewYork");
alert(countryReturn);*/

//function declaration
function percentageOfWorld1(population) {
    let worldPopulation = 7900;
    return (population / worldPopulation) * 100;
}

const country1 = percentageOfWorld1(250);
console.log(country1);

//function expression
const percentageOfWorld2 = function (population) {
    let worldPopulation = 7900;
    return (population / worldPopulation) * 100;
}
const country2 = percentageOfWorld2(450);
console.log(country2);

//Aero function

const percentageOfWorld3 = population => {
    let worldPopulation = 7900;
    return (population / worldPopulation) * 100;
}
const country3 = percentageOfWorld3(350);
console.log(country3);
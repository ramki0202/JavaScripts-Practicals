
let country = "India";
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

// 4, 617,23,false,45,



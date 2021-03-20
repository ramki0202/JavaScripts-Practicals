
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
alert(countryReturn);

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

let describePopulation = (country, population) => `${country} has ${population} Million people, which is about ${percentageOfWorld1(population)}% of the world`;

console.log(describePopulation("India", 1114));
console.log(describePopulation("china", 1441));
console.log(describePopulation("USA", 332));
*/



/* // Basic Array
const country = "India";
function percentageOfWorld1(population) {
    let worldPopulation = 7900;
    return (population / worldPopulation) * 100;
}

const populations = [203, 1234, 134, 532];
console.log(populations.length === 4);

console.log(populations);
const percentages = percentageOfWorld1(populations[0]);
console.log(percentages);
const percentages1 = percentageOfWorld1(populations[1]);
console.log(percentages1);
const percentages2 = percentageOfWorld1(populations[2]);
console.log(percentages2);
const percentages3 = percentageOfWorld1(populations[3]);
console.log(percentages3);

const neighbours = ['Srilanka', 'Bangaladesh', 'Nepal'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf('Srilanka')] = 'Republic of Sweden';

console.log(neighbours);*/


/*
// Object Methods with Perosn discribe

const person = {
    firstName: 'Ramki',
    lastName: 'Yogalingam',
    birthYeah: 1994,
    gender: true,
    job: 'Web Developer',
    friends: ['Ramesh', 'Eniya', 'Jamal'],
    driverLicense: true,


    calcAge: function () {
        this.age = 2021 - this.birthYeah;
        return this.age;
    },
    JobStatus: function () {
        if (this.driverLicense) {
            return this.jobPAss = "a driver's lisence"
        } else {
            return this.jobPAss = "no driver's license"
        }
    },
    genderStatus: function () {
        if (this.gender) {
            return this.genderpass = "he";
        }
        else {
            return this.genderpass = "she"
        }
    }
}



// Output: Ramki is 27 years old Web Developer, and he has a driver's lisence.


console.log(`${person.firstName} is ${person.calcAge()} years old ${person.job}, and ${person.genderStatus()} has ${person.JobStatus()}`);
*/


//LECTURE: Introduction to Objects
myCountry = {
    country: 'India',
    capital: 'Chennai',
    language: 'Tamil',
    population: 110,
    neighbour: ['Srilanka', 'Mianmar', 'Nepal'],
    describe: function () {
        return this.countryDescribe = `${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbour.length} neighboring countries and a capital called ${this.capital}`
    },
    checkIsland: function () {
        return this.isIsland = this.neighbour ? true : false
    }
}
/*Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
//output:
India has 110 million Tamil-speaking people,3 neighboring countries and a capital called Chennai*/

console.log(myCountry.checkIsland());
// console.log(myCountry.describe());


/* console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbour.length} neighboring countries and a capital called ${myCountry.capital}`)
 myCountry['population'] = 118;
 console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbour.length} neighboring countries and a capital called ${myCountry.capital}`)*/
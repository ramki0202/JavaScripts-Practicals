
/*let markMass = 78;
let markHeight = 1.69;
const markHigherBMI = (markMass) / (markHeight ** 2);

let johnMass = 92;
let johnHeight = 1.95;
const johnHigherBMI = (johnMass) / (johnHeight ** 2);

if (markHigherBMI > johnHigherBMI) {
    console.log(`Mark's BMI(${markHigherBMI}) is higher than John's BMI(${johnHigherBMI})`);
}
else {
    console.log(`John's BMI(${johnHigherBMI}) is higher than Mark's BMI(${markHigherBMI})`);
}

const dolpinScore1 = 97;
const dolpinScore2 = 112;
const dolpinScore3 = 106;

const kollasScore1 = 109;
const kollasScore2 = 95;
const kollasScore3 = 86;

const dolpinScrore = dolpinScore1 + dolpinScore2 + dolpinScore3;
const kollasScore = kollasScore1 + kollasScore2 + kollasScore3;

const dolpinsScroreAvg = dolpinScrore / 3;
const kollasScoreAvg = kollasScore / 3;

const minimumScore = 100;
console.log(dolpinsScroreAvg, kollasScoreAvg);

if ((dolpinsScroreAvg > kollasScoreAvg) && (dolpinsScroreAvg > minimumScore) && (dolpinsScroreAvg !== minimumScore)) {
    console.log(`The Winner of this competion is Dolpins it has ${dolpinsScroreAvg} points`);

} else if ((kollasScoreAvg > dolpinsScroreAvg) && (kollasScoreAvg > minimumScore) && (kollasScoreAvg !== minimumScore)
) {
    console.log(`The Winner of this competion is Kollas it has ${kollasScoreAvg} points`);
} else if ((dolpinsScroreAvg === minimumScore) || (kollasScoreAvg === minimumScore)) {
    console.log("Draw this Match..!")
}

else if ((dolpinsScroreAvg === kollasScoreAvg) > 100) {
    console.log("both are win..!");
}
else {
    console.log("No one Win this competion...");
}

let billValue = parseInt(prompt("Enter your Bill Value"));
let tip;
let totalBillvalue;

if (billValue >= 50 || billValue <= 300) {
    tip = billValue - (billValue * 85) / 100;
    totalBillvalue = billValue + tip;
    alert(`The bill was ${billValue}, the tip was ${tip}, and the total value
    ${totalBillvalue}`);
} else {
    tip = billValue - (billValue * 80) / 100;
    totalBillvalue = billValue + tip;
    alert(`The bill was ${billValue}, the tip was ${tip}, and the total value
    ${totalBillvalue}`);
}


let billValue = parseInt(prompt("Enter your Bill Value"));
let tip = (billValue >= 50 && billValue <= 300) ? (billValue - (billValue * 85) / 100) : (billValue - (billValue * 80) / 100);

console.log(tip);

let percent;
if (tip === (billValue - (billValue * 85) / 100)) {
    percent = "15%";
} else {
    percent = "20%";
}

let totalBillvalue = billValue + tip;

alert(`The bill was ${billValue}, the tip was ${tip} ${percent}, and the total value
${totalBillvalue}`);
*/

const dolphinsScore1 = 44;
const dolphinsScore2 = 23;
const dolphinsScore3 = 71;
const kollasScore1 = 65;
const kollasScore2 = 54;
const kollasScore3 = 49;

const calcAverage = (Score1, Score2, Score3) => (Score1 + Score2 + Score3) / 3;

const dolphinsAvgScore = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3)
const kollasAvgScore = calcAverage(kollasScore1, kollasScore2, kollasScore3)

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolhins} vs ${avgKoalas}`);
    }
    else {
        console.log(`kollas win ${avgKoalas} vs ${avgDolhins}`);
    }

}

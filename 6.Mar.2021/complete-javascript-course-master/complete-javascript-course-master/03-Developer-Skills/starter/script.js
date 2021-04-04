// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
/*
const forcast1 = [17, 21, 23];
const forcast2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  console.log(
    `....${arr[0]}ºC in 1days ... ${arr[1]}ºC in 2 days ... ${arr[2]}ºC in 3 days`
  );
};

printForecast(forcast);

const forcast1 = [17, 21, 23];
const forcast2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let days = arr.length;
  return days;
  //   for (var i = 0; i < arr.lenth; i++) {}
};
console.log(printForecast(forcast2));*/

const forcast1 = [17, 21, 23];
const forcast2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let sum = '';
  let days = arr.length;
  for (let i = 0; i < days; i++) {
    sum = sum + ` .... ${arr[i]}ºC in ${i + 1}days`;
  }
  console.log(sum);
};

printForecast(forcast1);

//Under stand the problems
// 1) easy to work with model string but problem with more than 3 data.
//2)

//break out sub problem
//1) need day conunter
//2) day counter done :)
//3) consol log for day numger;

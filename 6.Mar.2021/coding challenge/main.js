"use strict";

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //task1
// const [players1, players2] = game.players;
// // console.log(players1);
// // console.log(players2);
// // task2
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk);
// // console.log(fieldPlayers);
// // task3
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);
// ///task4
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// // console.log(players1Final);
// //task5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // console.log(team1, draw, team2);
// //task6
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(players.length);
// };

// // printGoals(...game.scored);
// // team1 < team2 && console.log("Team 1 is more likely to win");
// // team1 > team2 && console.log("Team 2 is more likely to win");
// for (const [i, j] of game.scored.entries()) {
//   console.log(`Game Score ${i + 1} of the player ${j}`);
// }
// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "� Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "� Substitution"],
//   [64, "� Yellow card"],
//   [69, "� Red card"],
//   [70, "� Substitution"],
//   [72, "� Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "� Yellow card"],
// ]);
// const events = new Set(gameEvents.values());
// console.log(events);
const greet = (greeting) => {
  return (name) => console.log(`${greeting} ${name}`);
};
greet("Hello")("Geetha");

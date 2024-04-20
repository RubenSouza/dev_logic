const input = require("fs").readFileSync("stdin", "utf8");
let number = parseInt(input);

let odds = [];

let sixOdds = () => {
  let i = number;

  while (odds.length < 6) {
    if (i % 2 === 1) {
      odds.push(i);
    }
    if (i % 2 === -1) {
      odds.push(i);
    }
    i++;
  }

  for (let i of odds) {
    console.log(`${i}`);
  }
};

sixOdds();

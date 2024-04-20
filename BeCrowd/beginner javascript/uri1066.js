const input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r\n");

let pairs = [];
let odds = [];
let positives = [];
let negatives = [];

const calcNumber = () => {
  lines.map(number => {
    let n = parseFloat(number);
    if (n % 2 === 0) {
      pairs.push(n);
    }
    if (n % 2 === -1) {
      odds.push(n);
    }
    if (n % 2 === 1) {
      odds.push(n);
    }

    if (n > 0) {
      positives.push(n);
    }
    if (n < 0) {
      negatives.push(n);
    }
  });

  console.log(`${pairs.length} valor(es) par(es)`);
  console.log(`${odds.length} valor(es) impar(es)`);
  console.log(`${positives.length} valor(es) positivo(s)`);
  console.log(`${negatives.length} valor(es) negativo(s)`);
};

calcNumber();

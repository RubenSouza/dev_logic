const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\r\n");

// In the uri / beecrowd remove the \r because it will cause error

lines.shift();

let numberIsIn = 0;
let numberIsOut = 0;

const calcInterval = () => {
  lines.map(number => {
    let n = parseInt(number);
    if (n >= 10 && n <= 20) {
      numberIsIn += 1;
    } else if (n < 10 || n > 20) {
      numberIsOut += 1;
    }
  });
};

calcInterval();

console.log(`${numberIsIn} in`);
console.log(`${numberIsOut} out`);

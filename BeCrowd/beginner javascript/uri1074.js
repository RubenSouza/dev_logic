const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\r\n");

// In the uri / beecrowd remove the \r because it will cause error

const calcOddOrEven = () => {
  for (let index = 1; index <= lines[0]; index++) {
    const element = parseInt(lines[index]);

    if (element === 0) {
      console.log("NULL");
    }
    if (element < 0 && element % 2 === 0) {
      console.log("EVEN NEGATIVE");
    }
    if (element < 0 && element % 2 !== 0) {
      console.log("ODD NEGATIVE");
    }
    if (element > 0 && element % 2 === 0) {
      console.log("EVEN POSITIVE");
    }
    if (element > 0 && element % 2 !== 0) {
      console.log("ODD POSITIVE");
    }
  }
};

calcOddOrEven();

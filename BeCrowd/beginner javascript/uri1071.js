const input = require("fs").readFileSync("stdin", "utf8");
let [A, B] = input.split("\r\n").map(line => parseInt(line));

// In the uri remove the \r because it will cause error

let result = 0;

const odds = () => {
  if (A < B) {
    for (let i = A + 1; i < B; i++) {
      if (i % 2 !== 0) {
        result += i;
      }
    }
  } else {
    for (let i = B + 1; i < A; i++) {
      if (i % 2 !== 0) {
        result += i;
      }
    }
  }
};

odds();

console.log(result);

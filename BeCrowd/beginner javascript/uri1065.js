const input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r\n");

const isPair = () => {
  let pairs = [];

  lines.map(number => {
    let n = parseInt(number);
    if (n % 2 === 0) {
      pairs.push(n);
    }
  });

  console.log(`${pairs.length} valores pares`);
};

isPair();

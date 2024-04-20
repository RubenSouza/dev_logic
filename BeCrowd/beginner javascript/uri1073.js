const input = require("fs").readFileSync("stdin", "utf8");
const number = parseInt(input);

const calcEven = () => {
  for (let n = 1; n <= number; n++) {
    if (n % 2 === 0) {
      console.log(`${n}^2 = ${n * n}`);
    }
  }
};

calcEven();

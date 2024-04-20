const input = require("fs").readFileSync("stdin", "utf8");
const number = parseInt(input);

const calc2 = () => {
  i = 0;

  while (i <= 10000) {
    i++;

    if (i % number === 2) {
      console.log(i);
    }
  }
};

calc2();

const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\r\n");

// There is no input in this exercise, so I will not use the snippet above.

const sequence2 = () => {
  for (let i = 1; i <= 9; i += 2) {
    for (let j = 7; j >= 5; j--) {
      console.log(`I=${i} J=${j}`);
    }
  }
};

sequence2();

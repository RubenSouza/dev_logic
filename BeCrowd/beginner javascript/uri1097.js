const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\r\n");

// There is no input in this exercise, so I will not use the snippet above.

const sequence3 = () => {
  let j = 7;

  for (let i = 1; i <= 9; i += 2) {
    let baseNumber = j;
    for (let n = 0; n < 3; n++) {
      console.log(`I=${i} J=${j}`);
      j--;
    }
    j = baseNumber + 2;
  }
};

sequence3();
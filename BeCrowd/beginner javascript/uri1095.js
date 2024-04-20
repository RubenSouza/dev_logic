const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\r\n");

// There is no input in this exercise, so I will not use the snippet above.

const sequence1 = () => {
  let i = 1;
  let j = 60;
  while (j >= 0) {
    console.log(`I=${i} J=${j}`);
    i += 3;
    j -= 5;
  }
};

sequence1();

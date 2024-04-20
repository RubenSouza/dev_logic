const input = require("fs").readFileSync("stdin", "utf8");
let number = parseInt(input);

const odds = () => {
  let i = 0;

  while (i < number) {
    i++;
    if (i % 2 === 1) {
      console.log(i);
    }
    if (i % 2 === -1) {
      console.log(i);
    }
  }
};

odds();

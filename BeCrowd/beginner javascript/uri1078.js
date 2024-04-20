const input = require("fs").readFileSync("stdin", "utf8");
const number = parseInt(input);

const table = () => {
  i = 1;

  while (i <= 10) {
    console.log(`${i} x ${number} = ${i * number}`);
    i++;
  }
};

table();

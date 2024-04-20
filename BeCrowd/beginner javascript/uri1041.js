var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let X = Number(lines[0]);
let Y = Number(lines[1]);

const table = (x, y) => {
  switch (true) {
    case x > 0 && y > 0:
      console.log("Q1");
      break;

    case x < 0 && y > 0:
      console.log("Q2");
      break;

    case x < 0 && y < 0:
      console.log("Q3");
      break;

    case x > 0 && y < 0:
      console.log("Q4");
      break;

    case x === 0 && y === 0:
      console.log("Origem");
      break;

    case (x === 0 && y > 0) || y < 0:
      console.log("Eixo Y");
      break;

    case (y === 0 && x > 0) || x < 0:
      console.log("Eixo X");
      break;

    default:
      break;
  }
};

table(X, Y);

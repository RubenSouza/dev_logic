var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split(" ");

let A = Number(lines[0]);
let B = Number(lines[1]);

function isMultiple(A, B) {
  if (A > B) {
    if (A / B === 0) {
      console.log("Sao Multiplos");
    } else if (Number.isInteger(A / B)) {
      console.log("Sao Multiplos");
    } else {
      console.log("Nao sao Multiplos");
    }
  }
  if (B > A) {
    if (B / A === 0) {
      console.log("Sao Multiplos");
    } else if (Number.isInteger(B / A)) {
      console.log("Sao Multiplos");
    } else {
      console.log("Nao sao Multiplos");
    }
  }
}

isMultiple(A, B);

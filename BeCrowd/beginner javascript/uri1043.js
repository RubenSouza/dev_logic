var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split(" ");

let A = Number(lines[0]);
let B = Number(lines[1]);
let C = Number(lines[2]);

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    return true;
  } else {
    return false;
  }
}

let result = isTriangle(A, B, C);

function isArea() {
  if (result) {
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
  } else if (A > B) {
    let X = ((A + B) * C) / 2;
    console.log(`Area = ${X.toFixed(1)}`);
  } else {
    let X = ((B + A) * C) / 2;
    console.log(`Area = ${X.toFixed(1)}`);
  }
}

isArea();

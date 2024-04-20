var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split(" ");

let sorted = lines.map(line => parseFloat(line));

sorted.sort(function (a, b) {
  return b - a;
});

let [A, B, C] = sorted;

const triangleType = (a, b, c) => {
  if (a >= b + c) {
    console.log("NAO FORMA TRIANGULO");
  } else {
    if (a * a === b * b + c * c) {
      console.log("TRIANGULO RETANGULO");
    }
    if (a * a > b * b + c * c) {
      console.log("TRIANGULO OBTUSANGULO");
    }
    if (a * a < b * b + c * c) {
      console.log("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
      console.log("TRIANGULO EQUILATERO");
    } else if (a === b || b === c || a === c) {
      console.log("TRIANGULO ISOSCELES");
    }
  }
};

triangleType(A, B, C);

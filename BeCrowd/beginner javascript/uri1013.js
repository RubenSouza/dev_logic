var input = require("fs").readFileSync("stdin", "utf8");

let [a, b, c] = input.split(" ").map(item => parseInt(item));

let maiorAB = (a + b + Math.abs(a - b)) / 2;
let maiorXC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maiorXC, "eh o maior");

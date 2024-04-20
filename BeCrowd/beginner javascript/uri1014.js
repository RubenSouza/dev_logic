let input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

let [A, B] = lines.map(item => Number(item));

let consumo = A / B;

console.log(consumo.toFixed(3), "km/l");

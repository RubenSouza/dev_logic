var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [A, B] = lines;

let litros = (A * B) / 12;

console.log(litros.toFixed(3));

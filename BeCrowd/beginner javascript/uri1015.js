var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [x1, y1] = lines[0].split(" ").map(item => parseFloat(item));
let [x2, y2] = lines[1].split(" ").map(item => parseFloat(item));

let calculo = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(calculo.toFixed(4));

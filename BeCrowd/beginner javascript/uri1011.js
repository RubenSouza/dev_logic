let input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

let resultado = (4.0 / 3) * 3.14159 * input * input * input;

let message = "VOLUME = ";

console.log(message + resultado.toFixed(3));

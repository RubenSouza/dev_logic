let input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

let [objeto1, quantidade1, valor1] = lines.shift().split(" ");
let [objeto2, quantidade2, valor2] = lines.shift().split(" ");

let resultado1 = quantidade1 * valor1;
let resultado2 = quantidade2 * valor2;

let resultado = resultado1 + resultado2;

let message = "VALOR A PAGAR: R$ ";

console.log(message + resultado.toFixed(2));

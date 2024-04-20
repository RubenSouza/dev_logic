let input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numero1 = lines[0];
let numero2 = lines[1];

let x = Number(numero1) + Number(numero2);

console.log("X =" + " " + x);

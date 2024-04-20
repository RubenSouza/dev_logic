let input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let numero1 = lines[0];
let numero2 = lines[1];

let media = (Number(numero1) * 3.5 + Number(numero2) * 7.5) / 11;

console.log(media);

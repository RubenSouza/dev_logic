var input = require("fs").readFileSync("stdin", "utf8");
let valor = parseInt(input);

let hour = parseInt(valor / 3600);
let resto1 = valor % 3600;
let minute = parseInt(resto1 / 60);
let seconds = resto1 % 60;

console.log(`${hour}:${minute}:${seconds}`);

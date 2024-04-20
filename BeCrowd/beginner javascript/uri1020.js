var input = require("fs").readFileSync("stdin", "utf8");
let valor = parseInt(input);

let anos = parseInt(valor / 365);
let resto1 = valor % 365;
let meses = parseInt(resto1 / 30);
let dias = resto1 % 30;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);

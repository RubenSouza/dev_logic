// var input = require("fs").readFileSync("stdin", "utf8");
// let valor = parseFloat(input.replace(",", "."));

// let notas = [100, 50, 20, 10, 5, 2];
// let moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

// console.log("NOTAS:");

// for (let nota of notas) {
//   let divisao = parseInt(valor / nota);
//   console.log(`${divisao} nota(s) de R$ ${nota.toFixed(2)}`);
//   valor = valor % nota;
// }

// console.log("MOEDAS:");

// for (let moeda of moedas) {
//   let divisao = parseInt(valor / moeda);
//   console.log(`${divisao} moeda(s) de R$ ${moeda.toFixed(2)}`);
//   valor = valor % moeda;
// }

var input = require("fs").readFileSync("stdin", "utf8");
let valor = parseFloat(input.replace(",", ".")) * 100;

let notas = [10000, 5000, 2000, 1000, 500, 200];
let moedas = [100, 50, 25, 10, 5, 1];

console.log("NOTAS:");

for (let nota of notas) {
  let divisao = parseInt(valor / nota);
  console.log(`${divisao} nota(s) de R$ ${(nota / 100).toFixed(2)}`);
  valor = valor % nota;
}

console.log("MOEDAS:");

for (let moeda of moedas) {
  let divisao = parseInt(valor / moeda);
  console.log(`${divisao} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
  valor = valor % moeda;
}

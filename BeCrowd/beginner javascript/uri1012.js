let input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n");

let [A, B, C] = lines.shift().split(" ");

let numberA = Number.parseFloat(A);
let numberB = Number.parseFloat(B);
let numberC = Number.parseFloat(C);

let TRIANGULO = (numberA * numberC) / 2;
let CIRCULO = 3.14159 * C * C;
let TRAPEZIO = (numberC * (numberA + numberB)) / 2;
let QUADRADO = numberB * numberB;
let RETANGULO = numberA * numberB;

let message =
  "TRIANGULO: " +
  TRIANGULO.toFixed(3) +
  "\n" +
  "CIRCULO: " +
  CIRCULO.toFixed(3) +
  "\n" +
  "TRAPEZIO: " +
  TRAPEZIO.toFixed(3) +
  "\n" +
  "QUADRADO: " +
  QUADRADO.toFixed(3) +
  "\n" +
  "RETANGULO: " +
  RETANGULO.toFixed(3);

console.log(message);

var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r\n");

let valores_positivos = [];

lines.forEach(line => {
  if (line > 0) {
    valores_positivos.push(line);
  }
});

console.log(`${valores_positivos.length} valores positivos`);

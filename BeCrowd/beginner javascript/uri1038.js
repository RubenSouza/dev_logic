var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let codigo = Number(lines[0]);
let qtd = Number(lines[1]);

function value(codigo) {
  switch (codigo) {
    case 1:
      console.log(`Total: R$ ${(4.0 * qtd).toFixed(2)}`);
      break;
    case 2:
      console.log(`Total: R$ ${(4.5 * qtd).toFixed(2)}`);
      break;
    case 3:
      console.log(`Total: R$ ${(5.0 * qtd).toFixed(2)}`);
      break;
    case 4:
      console.log(`Total: R$ ${(2.0 * qtd).toFixed(2)}`);
      break;
    case 5:
      console.log(`Total: R$ ${(1.5 * qtd).toFixed(2)}`);
      break;
  }
}

value(codigo);

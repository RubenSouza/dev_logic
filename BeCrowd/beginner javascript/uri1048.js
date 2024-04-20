let input = require("fs").readFileSync("stdin", "utf8");

let salario = Number(input);

let novo_salario, reajuste_ganho, percentual;

switch (true) {
  case salario > 0 && salario <= 400.0:
    reajuste_ganho = (salario * 15) / 100;
    novo_salario = salario + reajuste_ganho;
    percentual = 15;

    break;
  case salario > 400.0 && salario <= 800.0:
    reajuste_ganho = (salario * 12) / 100;
    novo_salario = salario + reajuste_ganho;
    percentual = 12;

    break;
  case salario > 800.0 && salario <= 1200.0:
    reajuste_ganho = (salario * 10) / 100;
    novo_salario = salario + reajuste_ganho;
    percentual = 10;

    break;
  case salario > 1200.0 && salario <= 2000.0:
    reajuste_ganho = (salario * 7) / 100;
    novo_salario = salario + reajuste_ganho;
    percentual = 7;

    break;
  case salario > 2000:
    reajuste_ganho = (salario * 4) / 100;
    novo_salario = salario + reajuste_ganho;
    percentual = 4;

    break;

  default:
    break;
}

console.log(`Novo salario: ${novo_salario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste_ganho.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);

let input = require("fs").readFileSync("stdin", "utf8");
let salario = Number(input);

let imposto_a_pagar;

const imposto = () => {
  if (salario > 0 && salario <= 2000.0) {
    console.log("Isento");
  }

  if (salario > 2000.0 && salario <= 3000.0) {
    let livre = salario - 2000.0;
    let oito = (livre * 8) / 100;
    imposto_a_pagar = oito;
    console.log(`R$ ${imposto_a_pagar.toFixed(2)}`);
  }
  if (salario > 3000.0 && salario <= 4500.0) {
    let livre = salario - 2000.0;
    let oito = livre - 1000.0;
    imposto_a_pagar = (1000.0 * 8) / 100;
    let dezoito = (oito * 18) / 100;
    imposto_a_pagar += dezoito;
    console.log(`R$ ${imposto_a_pagar.toFixed(2)}`);
  }

  if (salario > 4500.0) {
    let livre = salario - 2000.0;
    let oito = livre - 1000.0;
    imposto_a_pagar = (1000.0 * 8) / 100;
    let dezoito = oito - 1500;
    imposto_a_pagar += (1500.0 * 18) / 100;
    let vinte_oito = (dezoito * 28) / 100;
    imposto_a_pagar += vinte_oito;
    console.log(`R$ ${imposto_a_pagar.toFixed(2)}`);
  }
};

imposto();

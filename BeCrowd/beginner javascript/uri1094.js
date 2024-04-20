const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\r\n");

// In the uri use:
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let ratos = 0;
let sapos = 0;
let coelhos = 0;
let total;
let percentualCoelhos, percentualRatos, percentualSapos;

const experiences = () => {
  for (let index = 1; index <= lines[0]; index++) {
    const element = lines[index];
    let animalType = element.split(" ")[1];
    let animalNumber = parseInt(element.split(" ")[0]);

    if (animalType === "R") {
      ratos += animalNumber;
    }
    if (animalType === "S") {
      sapos += animalNumber;
    }
    if (animalType === "C") {
      coelhos += animalNumber;
    }
  }

  total = ratos + coelhos + sapos;

  percentualCoelhos = (coelhos * 100) / total;
  percentualRatos = (ratos * 100) / total;
  percentualSapos = (sapos * 100) / total;

  console.log(`Total: ${total} cobaias`);
  console.log(`Total de coelhos: ${coelhos}`);
  console.log(`Total de ratos: ${ratos}`);
  console.log(`Total de sapos: ${sapos}`);
  console.log(`Percentual de coelhos: ${percentualCoelhos.toFixed(2)} %`);
  console.log(`Percentual de ratos: ${percentualRatos.toFixed(2)} %`);
  console.log(`Percentual de sapos: ${percentualSapos.toFixed(2)} %`);
};

experiences();

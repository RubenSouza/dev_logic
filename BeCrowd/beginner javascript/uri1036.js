var input = require("fs").readFileSync("stdin", "utf8");
let [A, B, C] = input.split(" ").map(item => parseFloat(item));

const bhaskara = () => {
  if (A === 0) {
    console.log("Impossivel calcular");
  } else {
    let delta = B * B - 4 * A * C;
    if (delta < 0) {
      console.log("Impossivel calcular");
    } else {
      let x1 = (-B + Math.sqrt(delta)) / (2 * A);
      let x2 = (-B - Math.sqrt(delta)) / (2 * A);
      console.log(`R1 = ${x1.toFixed(5)}`);
      console.log(`R2 = ${x2.toFixed(5)}`);
    }
  }
};

bhaskara();

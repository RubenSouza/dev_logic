var input = require("fs").readFileSync("stdin", "utf8");
let number = parseFloat(input);

const interval = () => {
  switch (true) {
    case number >= 0 && number <= 25.0:
      console.log(`Intervalo [0,25]`);
      break;

    case number > 25.0 && number <= 50.0:
      console.log("Intervalo (25,50]");
      break;

    case number > 50.0 && number <= 75.0:
      console.log("Intervalo (50,75]");
      break;

    case number > 65.0 && number <= 100.0:
      console.log("Intervalo (75,100]");
      break;

    default:
      console.log("Fora de intervalo");
      break;
  }
};

interval();

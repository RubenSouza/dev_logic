const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\r\n");

// In the uri / beecrowd remove the \r because it will cause error

const weightedAverage = () => {
  for (let index = 1; index <= lines[0]; index++) {
    let element = lines[index];
    let arrayyNumbers = element.split(" ").map(n => {
      return parseFloat(n);
    });
    let [A, B, C] = arrayyNumbers;

    let media = (A * 2 + B * 3 + C * 5) / 10;
    console.log(media.toFixed(1));
  }
};

weightedAverage();

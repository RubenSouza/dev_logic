const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\r\n");

// In the uri / beecrowd remove the \r because it will cause error

let major = 0;
let majorIndex = 0;

const majorPosition = () => {
  for (let index = 0; index < lines.length; index++) {
    const element = parseInt(lines[index]);
    if (element > major) {
      major = element;
      majorIndex = index + 1;
    }
  }
  console.log(major);
  console.log(majorIndex);
};

majorPosition();

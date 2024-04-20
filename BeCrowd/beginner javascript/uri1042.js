var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let original = [...lines];

lines.sort(function (a, b) {
  return a - b;
});

lines.map(line => console.log(parseInt(line)));
console.log("");
original.map(line => console.log(parseInt(line)));

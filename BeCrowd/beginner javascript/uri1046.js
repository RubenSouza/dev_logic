var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split(" ");

let start = Number(lines[0]);
let end = Number(lines[1]);

if (start > end) {
  let result = end + 24 - start;
  console.log(`O JOGO DUROU ${result} HORA(S)`);
} else if (end > start) {
  let result = end - start;
  console.log(`O JOGO DUROU ${result} HORA(S)`);
} else {
  console.log("O JOGO DUROU 24 HORA(S)");
}

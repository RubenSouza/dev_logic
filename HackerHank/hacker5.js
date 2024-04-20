//Lonely Integer

let input = require("fs").readFileSync("stdin", "utf8");

// let array = input.split(" ");
let a = [1, 2, 3, 4, 3, 2, 1];
let integer;

function lonelyInteger(a) {
  for (let number of a) {
    if (a.indexOf(number) === a.lastIndexOf(number)) {
      integer = number;
    }
  }
  return integer;
}

lonelyInteger(a);

var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split(" ");

let startHour = Number(lines[0]);
let startMin = Number(lines[1]);
let endHour = Number(lines[2]);
let endMin = Number(lines[3]);

let finalHour, finalMinute;

if (startHour > endHour) {
  finalHour = endHour + 24 - startHour;
  finalMinute = endMin - startMin;
}
if (startHour < endHour) {
  finalHour = endHour - startHour;
  finalMinute = endMin - startMin;
}

if ((startHour === endHour) & (startMin < endMin)) {
  finalHour = 0;
  finalMinute = endMin - startMin;
}

if ((startHour === endHour) & (startMin > endMin)) {
  finalHour = 24;
  finalMinute = endMin - startMin;
}

if (finalMinute < 0) {
  finalHour = finalHour - 1;
  let result = finalMinute + 60;
  finalMinute = result;
}

if (startHour == endHour && startMin == endMin) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  console.log(`O JOGO DUROU ${finalHour} HORA(S) E ${finalMinute} MINUTO(S)`);
}

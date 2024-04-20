var input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r\n");

let line1 = lines[0].split(" ");
let line2 = lines[1].split(" ");
let line3 = lines[2].split(" ");
let line4 = lines[3].split(" ");

let diaInicio = Number(line1[1]);
let horasInicio = Number(line2[0]);
let minutosInicio = Number(line2[2]);
let segundosInicio = Number(line2[4]);

let diaTermino = Number(line3[1]);
let horasTermino = Number(line4[0]);
let minutosTermino = Number(line4[2]);
let segundosTermino = Number(line4[4]);

let segundosTotal, tempoDias, tempoHoras, tempoMinutos, tempoSegundos;

const jogo = () => {
  let diasEmSegundos = (diaTermino - diaInicio) * 86400;

  segundosTotal = diasEmSegundos;

  let horasEmSegundos = (horasTermino - horasInicio) * 3600;

  segundosTotal += horasEmSegundos;

  let minutosEmSegundos = (minutosTermino - minutosInicio) * 60;

  segundosTotal += minutosEmSegundos;

  let segundos = segundosTermino - segundosInicio;

  segundosTotal += segundos;

  tempoDias = segundosTotal / 86400;
  let restoSegundos = segundosTotal % 86400;
  tempoHoras = restoSegundos / 3600;
  let restoMinutosEmSegundos = restoSegundos % 3600;
  tempoMinutos = restoMinutosEmSegundos / 60;
  tempoSegundos = restoMinutosEmSegundos % 60;

  console.log(`${parseInt(tempoDias)} dia(s)`);
  console.log(`${parseInt(tempoHoras)} hora(s)`);
  console.log(`${parseInt(tempoMinutos)} minuto(s)`);
  console.log(`${parseInt(tempoSegundos)} segundo(s)`);
};

jogo();

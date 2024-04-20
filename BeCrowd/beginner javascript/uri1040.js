var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [n1, n2, n3, n4] = lines[0].split(" ");
let n5 = lines[1];

let media = Number((n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10);

function approved(media) {
  switch (true) {
    case media >= 7:
      console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`);

      break;

    case media >= 5.0 && media <= 6.9:
      console.log(`Media: ${media.toFixed(1)}`);
      console.log("Aluno em exame.");
      console.log(`Nota do exame: ${n5}`);

      let final = (Number(media) + Number(n5)) / 2;

      if (final >= 5.0) {
        console.log("Aluno aprovado.");
      } else {
        console.log("Aluno reprovado.");
      }

      console.log(`Media final: ${final.toFixed(1)}`);

      break;
    case media < 5.0:
      console.log(`Media: ${media.toFixed(1)}`);
      console.log("Aluno reprovado.");

      break;
  }
}

approved(media);

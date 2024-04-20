const input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\r\n");

const integers = () => {
  let array = [];
  let media;

  lines.map(n => {
    let number = parseFloat(n);
    if (number > 0) {
      array.push(number);
    }
  });

  console.log(`${array.length} valores positivos`);

  const calcMedia = () => {
    array.map(value => {
      !media ? (media = value) : (media += value);
    });

    media = media / array.length;

    console.log(media.toFixed(1));
  };

  calcMedia();
};

integers();

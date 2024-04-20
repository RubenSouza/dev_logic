var input = require("fs").readFileSync("stdin", "utf-8");
let lines = input.split("\r\n");

let line1 = lines[0];
let line2 = lines[1];
let line3 = lines[2];

const Animal = () => {
  if (line1 === "vertebrado") {
    if (line2 === "ave") {
      if (line3 === "carnivoro") {
        console.log("aguia");
      }
      if (line3 === "onivoro") {
        console.log("pomba");
      }
    }
    if (line2 === "mamifero") {
      if (line3 === "onivoro") {
        console.log("homem");
      }
      if (line3 === "herbivoro") {
        console.log("vaca");
      }
    }
  }

  if (line1 === "invertebrado") {
    if (line2 === "inseto") {
      if (line3 === "hematofago") {
        console.log("pulga");
      }
      if (line3 === "herbivoro") {
        console.log("lagarta");
      }
    }
    if (line2 === "anelideo") {
      if (line3 === "hematofago") {
        console.log("sanguessuga");
      }
      if (line3 === "onivoro") {
        console.log("minhoca");
      }
    }
  }
};

Animal();

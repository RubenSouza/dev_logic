//Criando vetores;
let vetorA = [1, 2, 3, 4, 3, 2, 1];
console.log("VetorA original ==>", vetorA);
let vetorB = [];

//retirando elementos iguais do vetorA[];
let teste = vetorA.forEach(elemem => {
  if (!vetorB.includes(elemem)) {
    vetorB.push(elemem);
  }
});

console.log(vetorA, "and", vetorB, "and", teste);

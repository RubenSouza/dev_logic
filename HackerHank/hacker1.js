myArr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  // Write your code here

  const positivo = arr.filter(item => item > 0);

  let positivoDiv = positivo.length / arr.length;

  console.log(positivoDiv.toFixed(6));

  const negativo = arr.filter(item => item < 0);
  let negativoDiv = negativo.length / arr.length;

  console.log(negativoDiv.toFixed(6));

  const zero = arr.filter(item => item === 0);
  let zeroDiv = zero.length / arr.length;
  console.log(zeroDiv.toFixed(6));
}

plusMinus(myArr);

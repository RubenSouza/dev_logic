let arr = [1, 2, 3, 4, 5];

soma1 = arr[1] + arr[2] + arr[3] + arr[4];
soma2 = arr[0] + arr[2] + arr[3] + arr[4];
soma3 = arr[0] + arr[1] + arr[3] + arr[4];
soma4 = arr[0] + arr[1] + arr[2] + arr[4];
soma5 = arr[0] + arr[1] + arr[2] + arr[3];

let newArray = [
  [arr[1] + arr[2] + arr[3] + arr[4]],
  [arr[0] + arr[2] + arr[3] + arr[4]],
  [arr[0] + arr[1] + arr[3] + arr[4]],
  [arr[0] + arr[1] + arr[2] + arr[4]],
  [arr[0] + arr[1] + arr[2] + arr[3]],
];

let values = newArray;

const maxValue = values.reduce(function (prev, current) {
  return prev > current ? prev : current;
});

const minValue = values.reduce(function (prev, current) {
  return prev < current ? prev : current;
});

let string1 = maxValue.toString();
let string2 = minValue.toString();

console.log(parseInt(string2), parseInt(string1));

// let sum = 0;

// for (let i = 0; i < arr.length; ++i) {
//   console.log((sum += arr[i]));
// }

// function miniMaxSum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; ++i) {
//       sum += arr[i];
//   }

//   let min = sum - arr[0];
//   let max = min;

//   for (let i = 1; i < arr.length; ++i) {
//       let tmp = sum - arr[i];
//       if (tmp < min) min = tmp;
//       else if (tmp > max) max = tmp;
//   }

//   console.log(min + " " + max);
// }

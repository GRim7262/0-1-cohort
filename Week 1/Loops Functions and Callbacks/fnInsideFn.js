// function square(n) {
//   return n * n;
// }

// function cube(n) {
//   return n * n * n;
// }

// function sumOfSquares(a, b) {
//   const val1 = square(a);
//   const val2 = square(b);
//   return val1 + val2;
// }

// function sumOfCube(a, b) {
//   const val1 = cube(a);
//   const val2 = cube(b);
//   return val1 + val2;
// }
// const ans = sumOfCube(2, 2);
// console.log(ans);

// *************************************************************** //

// function square(a) {
//   return a * a;
// }

// function cube(a) {
//   return a * a * a;
// }

// function sumOfSomething(a, b, fnToCall) {
//   console.log("First argument: " + a);
//   console.log("Second argument: " + b);
//   console.log("Function argument / Callback: ", fnToCall);
//   const val1 = fnToCall(a);
//   const val2 = fnToCall(b);
//   return val1 + val2;
// }

// const ans = sumOfSomething(2, 2, cube);
// console.log("Final answer: " + ans);

// *************************************************************** //

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function sumOfSomething(a, b, fnToCall) {
  console.log(a);
  console.log(fnToCall);
  const val1 = fnToCall(a);
  const val2 = fnToCall(b);
  return val1 + val2;
}

const ans = sumOfSomething(2, 2, function (a) {
  return a * a * a;
});

console.log(ans);

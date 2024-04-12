// Function that takes this som and prints it in passive tense

function sum(a, b, fnToCall) {
  let result = a + b;
  fnToCall(result);
}

function simpleTenseSum(data) {
  console.log("Result of sum is: " + data);
}
function passiveTenseSum(data) {
  console.log("Sum's result is: " + data);
}
const ans = sum(1, 2, simpleTenseSum);

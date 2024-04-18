function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, fnToCall) {
  const val1 = fnToCall(a);
  const val2 = fnToCall(b);
  return val1 + val2;
}

const ans = sumOfSomething(1, 2, square);
console.log(ans);

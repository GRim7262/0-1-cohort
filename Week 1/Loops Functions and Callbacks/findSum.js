function findSum(n) {
  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans += i;
  }
  return ans;
}
const value = findSum(100);
console.log(value);

// const currentDate = new Date();
// console.log(currentDate.getDate());
// console.log(currentDate.getMonth() + 1);
// console.log(currentDate.getFullYear());

// const currentDate = new Date();
// console.log("Time in milliseconds since 1970:", currentDate.getTime());

function calculateSum() {
  let a = 0;
  for (let i = 0; i < 1000000; i++) {
    a = a + i;
  }
  return a;
}
const beforeDate = new Date();
const beforTimeInMs = beforeDate.getTime();
calculateSum();
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforTimeInMs);

// Normal syntax
// function kiratAsyncFunction() {
//   let p = new Promise(function (resolve) {
//     resolve("Hi there");
//   });
//   return p;
// }

// function main() {
//   kiratAsyncFunction().then(function (data) {
//     console.log(data);
//   });
// }

// main();

// Async/await syntax
function kiratAsyncFunction() {
  let p = new Promise(function (resolve) {
    resolve("Hi there");
  });
  return p;
}

// async function main() {
//   const data = await kiratAsyncFunction();
//   console.log(data);
// }

async function main() {
  const value = await kiratAsyncFunction();
  console.log(value);
}

// let p = new Promise(function (resolve) {
//   resolve("Hi there");
// });

// p.then(function () {
//   console.log(p);
// });

// function kiratAsyncFunction() {
//   let p = new Promise(function (resolve) {
//     resolve("Hi there");
//   });
//   return p;
// }

// const value = kiratAsyncFunction();
// value.then(function (data) {
//   console.log(data);
// });

function kiratAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
  return p;
}

const value = kiratAsyncFunction();
value.then(function () {
  console.log("Hi there");
});

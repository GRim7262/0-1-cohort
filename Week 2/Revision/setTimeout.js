// setTimeout(function () {
//   console.log("Hi there");
//   setTimeout(function () {
//     console.log("Hi there 2");
//   }, 2000);
// }, 1000);

// function myOwnSetTimeout(fn, duration) {
//   setTimeout(fn, duration);
// }

// myOwnSetTimeout(function () {
//   console.log("Hi there");
// }, 1000);

function myOwnSetTimeout(callback, duration) {
  setTimeout(callback, duration);
}

function promisifiedMyOwnSetTimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
  return p;
}

const ans = promisifiedMyOwnSetTimeout(1000);
console.log(ans);
ans.then(function () {
  console.log("Timeout is done");
});

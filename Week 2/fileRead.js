// const fs = require("fs");

// function readFile() {
//   fs.readFile("a.txt", "utf-8", function (err, data) {
//     console.log(data);
//   });
// }
// readFile();

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

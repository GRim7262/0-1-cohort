const fs = require("fs");

function kiratReadsFile(fnToCall) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    fnToCall(data);
  });
}

function onDone(data) {
  console.log(data);
}

kiratReadsFile(onDone);

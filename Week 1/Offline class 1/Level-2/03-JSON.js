const users = { name: "harkirat", age: 24, gender: "male" };
const finalString = JSON.stringify(users);
console.log(finalString);

function jsonMethods(jsonString) {
  console.log("Original JSON String: ", jsonString);

  let parseObject = JSON.parse(jsonString);
  console.log("After JSON.parse(): ", parseObject);

  let jsonStringified = JSON.stringify(jsonString);
  console.log("After JSON.stringify(): ", jsonStringified);
}

const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);

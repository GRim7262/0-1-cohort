// Original array containing numbers
const input = [1, 2, 3, 4, 5];
const newArray = [];

// Using a traditional for loop to iterate over the array and multiply each element by 2.
for (let i = 0; i < input.length; i++) {
  newArray.push(input[i] * 2);
}
console.log(newArray);

// Using the map() method to create a new array by applying the transform() function to each element.
const input2 = [1, 2, 3, 4, 5];
function transform(i) {
  return i * 2;
}
const ans2 = input.map(transform);
console.log(ans2);

// Using an anonymous function directly inside the map() method to achieve the same result as above.
const input3 = [1, 2, 3, 4, 5];
const ans3 = input3.map(function transform(i) {
  return i * 2;
});
console.log(ans3);

// Using an arrow function to define the transformation logic directly inside the map() method.
const input4 = [1, 2, 3, 4, 5];
const ans4 = input4.map(
  (transform = (i) => {
    return i * 2;
  })
);
console.log(ans4);

// Using an arrow function to define the transformation logic directly inside the map() method.
const input5 = [1, 2, 3, 4, 5];
const ans5 = input5.map((i) => {
  return i * 2;
});
console.log(ans5);

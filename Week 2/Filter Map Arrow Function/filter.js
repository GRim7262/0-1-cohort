// Original array containing numbers
const arr = [1, 2, 3, 4, 5];
const newArr = [];

// Using a traditional for loop to iterate over the array and push even numbers to a new array.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

// Defining a separate function filterLogic() to check if a number is even.
function filterLogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// Then using the filter() method to create a new array with only even numbers.
const ans2 = arr.filter(filterLogic);
console.log(ans2);

// Using an anonymous function directly inside the filter() method to achieve the same result as above.
const ans3 = arr.filter(function filterLogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans3);

// Simplifying the anonymous function even further by removing unnecessary code.
const ans4 = arr.filter(function (n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans4);

// Using an arrow function to define the filtering logic.
// The arrow function implicitly returns true or false based on the condition.
// The filter() method then uses this function to create a new array with only even numbers.
const ans5 = arr.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans5);

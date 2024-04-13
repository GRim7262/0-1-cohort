// push
// function pushExample(arr, element) {
//   console.log("Original Array: ", arr);
//   arr.push(element);
//   console.log("After Push: ", arr);
// }
// pushExample([1, 2, 3], 4);

// pop
// function popExample(arr) {
//   console.log("Original Array: ", arr);
//   arr.pop();
//   console.log("After Pop: ", arr);
// }
// popExample([1, 2, 3]);

// shift
// function shiftExample(arr) {
//   console.log("Original Array: ", arr);
//   arr.shift();
//   console.log("After Shift: ", arr);
// }
// shiftExample([1, 2, 3]);

// unshift
// function unshiftExample(arr, element) {
//   console.log("Original Array: ", arr);
//   arr.unshift(element);
//   console.log("After unshift: ", arr);
// }
// unshiftExample([1, 2, 3], 0);

// concat
// function concatExample(arr1, arr2) {
//   console.log("Original Array: ", arr1, arr2);
//   let arr3 = arr1.concat(arr2);
//   console.log("After concat: ", arr3);
// }
// concatExample([1, 2, 3], [4, 5, 6]);

// forEach
// function forEachExample(arr) {
//   console.log("Original Array: ", arr);
//   arr.forEach(function (item, index) {
//     console.log(item, index);
//   });
// }
// forEachExample([1, 2, 3]);

// map
// function mapExample(arr) {
//   console.log("Original Array: ", arr);
//   let newArr = arr.map(function (item) {
//     return item * 2;
//   });
//   console.log("After Map: ", newArr);
// }
// mapExample([1, 2, 3]);

// filter
// function filterExample(arr) {
//   console.log("Original Array: ", arr);
//   let newArr = arr.filter(function (item) {
//     return item > 3;
//   });
//   console.log("After filter: ", newArr);
// }
// filterExample([1, 2, 3, 4, 5, 6]);

// find
// function findExample(arr) {
//   console.log("Original Array: ", arr);
//   let newArr = arr.find(function (item) {
//     return item > 3;
//   });
//   console.log("After Find: ", newArr);
// }
// findExample([1, 2, 4, 5, 6]);

// sort
function sort(arr) {
  console.log("Original Array: ", arr);
  let newArr = arr.sort(function (a, b) {
    return a - b;
  });
  console.log("After Sort: ", newArr);
}
sort([5, 4, 3, 2, 1]);

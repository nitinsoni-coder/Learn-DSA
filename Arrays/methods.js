// using array() constructor
let arr = new Array(5);
console.log(arr.length);
console.log(arr);

//using apply() method
let arr1 = Array.apply(null, Array(5));
console.log(arr1.length);
console.log(arr1);

//using Array.from() method
let arr2 = Array.from(Array(5));
console.log(arr2.length);
console.log(arr2);

//using for loop
const size = 5;
let arr3 = [];

for (let i = 0; i < size; i++) {
  arr3.push(i);
}
console.log(arr3);

//using Array.fill() method
let arr4 = Array(5).fill(0);
console.log(arr4);

//using Array.prototype.keys() method
let arr5 = Array.from(Array(5).keys());
console.log(arr5);

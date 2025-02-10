// brute force approach
function largest(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

let arr = [-1, 45, 2, 80, 7, 10];
console.log("Largest element in the array :", largest(arr));

//brute force approach
function isArraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}

const arr = [3, 7, 23, 90];
console.log(isArraySorted(arr));

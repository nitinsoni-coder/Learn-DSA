/*
 Time complexity : O(²)
 space complexity : O(1)
*/

function sortArrayInWave(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  for (let i = 0; i < arr.length - 1; i += 2) {
    let tmp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tmp;
  }
  return arr;
}

let arr = [10, 90, 49, 2, 1, 5, 23];
// console.log(sortArrayInWave(arr));

/*
 Time complexity : O(n)
 space complexity : O(1)
*/

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function sortArray(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i += 2) {
    if (i > 0 && arr[i - 1] > arr[i]) {
      swap(arr, i - 1, i);
    }

    if (i < n - 1 && arr[i] < arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }

  return arr;
}

let arr1 = [10, 90, 49, 2, 1, 5, 23];
console.log(sortArray(arr1));

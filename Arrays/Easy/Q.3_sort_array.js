/*
   Time complexity : O(n²)
*/
function sortUsingBubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

let arr = [64, 34, 25, 12, 22, -11, 90];
// console.log(sortUsingBubbleSort(arr));

/*
   Time complexity : O(n Log n)
*/

function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];

  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left[left.length] = arr[i];
    else if (arr[i] > pivot) right[right.length] = arr[i];
    else equal[equal.length] = arr[i];
  }

  return [...sort(left), ...equal, ...sort(right)];
}

let arr1 = [64, 34, 25, 12, 22, -11, 90];
console.log(sort(arr1));

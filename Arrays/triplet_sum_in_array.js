/*
   Time complexity : O(n³)
   space complexity : O(1)
*/

function triplet(arr, n, sum) {
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[j] === sum) {
          console.log(arr[i], arr[j], arr[k]);
          return true;
        }
      }
    }
  }
  return false;
}

const arr = [12, 3, 4, 1, 6, 9];
const sum = 24;
const n = arr.length;
// triplet(arr, n, sum);

/*
   Time complexity : O(n²)
   space complexity : O(1)
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

function tripletUsingTwoPointer(arr, sum) {
  const newArr = sort(arr);

  let n = newArr.length;

  for (let i = 0; i < n - 2; i++) {
    let start = i + 1;
    let end = n - 1;

    while (start < end) {
      const current_sum = newArr[i] + newArr[start] + newArr[end];

      if (current_sum == sum) {
        console.log(newArr[i], newArr[start], newArr[end]);
        return true;
      } else if (current_sum < sum) {
        start++;
      } else {
        end--;
      }
    }
  }

  return false;
}

const arr1 = [12, 3, 4, 1, 6, 9];
const sum1 = 24;
console.log(tripletUsingTwoPointer(arr1, sum1));

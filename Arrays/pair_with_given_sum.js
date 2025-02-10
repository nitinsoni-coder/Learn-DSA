/* 
   Time complexity : O(n²)
   space complexity : O(1)
*/

function twoSum(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        if (arr[i] + arr[j] === target) {
          console.log(arr[j], arr[i]);
          return true;
        }
      }
    }
  }

  return false;
}

const arr = [0, -1, 2, -3, 1];
const target = -2;
console.log(twoSum(arr, target));

/* 
   Time complexity : O(NLogN)
   space complexity : O(1)
*/
function twoSumUsingTwoPointer(arr, target) {
  let left = 0,
    right = arr.length - 1;

  arr.sort((a, b) => a - b);

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      console.log(arr[left], arr[right]);
      return true;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

const arr1 = [0, -1, 2, -3, 1];
const target1 = -2;
console.log(twoSumUsingTwoPointer(arr1, target1));

/* 
   Time complexity : O(n)
   space complexity : O(1)
*/
function twoSumUsingHash(arr, target) {
  let hash = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (hash.has(complement)) {
      console.log(arr[i], complement);
      return true;
    } else {
      hash.add(arr[i]);
    }
  }

  return false;
}

const arr2 = [0, -1, 2, -3, 1];
const target2 = -2;
console.log(twoSumUsingHash(arr2, target2));

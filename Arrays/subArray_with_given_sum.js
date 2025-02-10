/*
   Time complexity : O(n²)
   space complexity : O(1)
*/

function subArray(arr, sum) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let currentSum = arr[i];

    if (currentSum === sum) {
      res.push(i + 1);
      res.push(i + 1);
      return res;
    } else {
      for (let j = i + 1; j < arr.length; j++) {
        currentSum += arr[j];

        if (currentSum === sum) {
          res.push(i + 1);
          res.push(j + 1);
          return res;
        }
      }
    }
  }

  return [-1];
}

let arr = [15, 23, 4, 8, 9, 5, 10, 23];
const sum = 23;

console.log(subArray(arr, sum));

/* 
   Time complexity : O(n)
   space complexity : O(1)
*/

function subArrayUsingHash(arr, n, sum) {
  let cur_sum = 0;
  let start = 0;
  let end = -1;
  let hashMap = new Map();

  for (let i = 0; i < n; i++) {
    cur_sum += arr[i];

    if (cur_sum - sum == 0) {
      start = 0;
      end = i;
      break;
    }

    if (hashMap.has(cur_sum - sum)) {
      start = hashMap.get(cur_sum - sum) + 1;
      end = i;
      break;
    }

    hashMap.set(cur_sum, i);
  }

  if (end == -1) {
    console.log("No subarray with given sum exists");
  } else {
    console.log("Sum found between indexes " + start + " to " + end);
  }
}

let arr1 = [2, 12, -2, -20, 10];
let n = arr1.length;
const sum1 = 14;

console.log(subArrayUsingHash(arr1, n, sum1));

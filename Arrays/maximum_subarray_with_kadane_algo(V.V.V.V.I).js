/* 
  Time complexity : O(n²)
  space complexity : O(1)
*/

function maxSubArray(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      res = res > sum ? res : sum;
    }
  }

  return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubArray(arr));

/* 
  Time complexity : O(n)
  space complexity : O(1)
*/

function maxSubArrayUsingKadane(arr) {
  let res = arr[0];
  let maxEle = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let sum = maxEle + arr[i];
    maxEle = sum > arr[i] ? sum : arr[i];

    res = maxEle > res ? maxEle : res;
  }

  return res;
}

const arr1 = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubArrayUsingKadane(arr1));

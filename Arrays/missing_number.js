/*
  Time complexity : O(n)
  space complexity : O(1)
*/

function missingNum(arr, n) {
  let sum = 0;

  for (let i = 0; i < n - 1; i++) {
    sum += arr[i];
  }

  const executableSum = (n * (n + 1)) / 2;

  return executableSum - sum;
}

const arr = [1, 2, 3, 5];
const n = 5;
console.log(missingNum(arr, n));

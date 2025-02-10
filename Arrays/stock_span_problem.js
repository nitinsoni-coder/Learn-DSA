/*
   Time complexity : O(n²)
   space complexity : O(n)
*/

function calculateSpan(arr) {
  let res = [];

  res[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    let span = 1;
    if (arr[i - 1] >= arr[i]) {
      res[i] = span;
    } else {
      let j = i - 1;

      while (arr[i] >= arr[j]) {
        span++;
        j--;
      }

      res[i] = span;
    }
  }

  return res;
}

const arr = [100, 80, 60, 70, 60, 75, 85];
console.log(calculateSpan(arr));

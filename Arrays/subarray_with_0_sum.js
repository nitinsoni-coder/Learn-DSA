/* 
  Time complexity : O(n²)
  space complexity : O(1)
*/

function subArrayWithZeroSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];

    if (sum === 0) return true;

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];

      if (sum === 0) return true;
    }
  }

  return false;
}

const arr = [4, 2, -3, 1, 6];
console.log(subArrayWithZeroSum(arr));

/* 
  Time complexity : O(n)
  space complexity : O(1)
*/

function subArrayWithZeroSumUsingHash(arr) {
  let s = new Set();

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0 || s.has(sum)) return true;

    s.add(sum);
  }

  return false;
}

const arr1 = [4, 2, -3, 1, 6];
console.log(subArrayWithZeroSumUsingHash(arr1));

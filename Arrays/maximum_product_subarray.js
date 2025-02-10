/* 
  Time complexity : O(n²)
  space complexity : O(1)
*/

function maxProductSubArray(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = i; j < arr.length; j++) {
      product *= arr[j];

      res = res > product ? res : product;
    }
  }

  return res;
}

const arr = [-2, 6, -3, -10, 0, 2];
console.log(maxProductSubArray(arr));

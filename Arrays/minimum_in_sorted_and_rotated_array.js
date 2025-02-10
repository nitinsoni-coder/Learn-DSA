/* 
  Time complexity : O(n)
  space complexity : O(1)
*/

function minEleInArray(arr) {
  let res = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) res = arr[i + 1];
  }

  return res;
}

const arr = [2, 6, 1, 8, 9];
console.log(minEleInArray(arr));

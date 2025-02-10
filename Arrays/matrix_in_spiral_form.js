/*
   Time complexity : O(m*n)
   space complexity : O(1)
*/
function matrixSpiral(arr) {
  let top = 0;
  let bottom = arr.length - 1;
  let left = 0;
  let right = arr[0].length - 1;

  let str = "";

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      str += arr[top][i] + " ";
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      str += arr[i][right] + " ";
    }
    right--;

    for (let i = right; i >= left; i--) {
      str += arr[bottom][i] + " ";
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      str += arr[i][left] + " ";
    }
    left++;
  }

  return str;
}

const arr = [
  [1, 2, 3, 4, 9],
  [5, 6, 7, 8, 10],
  [9, 10, 11, 12, 13],
  [13, 14, 15, 16, 90],
];

console.log(matrixSpiral(arr));

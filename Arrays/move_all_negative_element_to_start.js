/*
   Time complexity : O(n)
   space complexity : O(1)
*/
function move(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    if (arr[left] < 0 && arr[right] < 0) {
      left++;
    } else if (arr[left] > 0 && arr[right] < 0) {
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;

      left++;
      right--;
    } else if (arr[left] > 0 && arr[right] > 0) {
      right--;
    } else {
      left++;
      right--;
    }
  }

  return arr;
}

let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
console.log(move(arr));

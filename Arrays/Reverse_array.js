let arr = [2, 6, -1, 9, 10];

// Time complexity = O(n)
// space complexity = O(n)
let reversedArr = [];
let j = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr[j] = arr[i];
  j++;
}

console.log(reversedArr);

/* using two pointer approach 
   Time complexity  = O(n)
   space complexity = O(1)
*/
function reverseArr(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr;
}

console.log(reverseArr(arr));

function reverseArrUsingThirdVar(arr) {
  let n = arr.length;

  for (let i = 0; i < n / 2; i++) {
    let tmp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = tmp;
  }

  return arr;
}

console.log(reverseArrUsingThirdVar(arr));

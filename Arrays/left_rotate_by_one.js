/* 
   Time complexity : O(n)
   space complexity : O(1)
*/
function leftRotateByOne(arr) {
  let first_elem = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = first_elem;

  return arr;
}

let arr = [1, 2, 3, 4, 5];
// console.log(leftRotateByOne(arr));

/* using two pointer approach
   Time complexity : O(n)
   space complexity : O(1)
*/
function leftRotation(arr) {
  let i = 0;
  j = arr.length - 1;

  while (i !== j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
  }

  return arr;
}

console.log(leftRotation(arr));

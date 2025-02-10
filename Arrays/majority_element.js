/*
 Time complexity : O(n²)
 space complexity : O(1)
*/

function majorityElement(arr) {
  const half = arr.length / 2;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }

    if (count > half) return arr[i];
  }

  return max;
}

const arr = [1, 1, 2, 1, 3, 5, 1];
// console.log(majorityElement(arr));

/*
 Time complexity : O(n)
 space complexity : O(n)
*/

function majElement(arr) {
  let obj = {};

  for (let key of arr) {
    obj[key] = (obj[key] || 0) + 1;
  }

  for (const key in obj) {
    if (obj[key] > arr.length / 2) return key;
  }

  return -1;
}

const arr1 = [1, 1, 2, 1, 3, 5, 1];
console.log(majElement(arr1));

/*
 Time complexity : O(n)
 space complexity : O(1)
*/
function majorityEle(arr) {
  const half = arr.length;
  let candidate = -1;
  let count = 0;

  for (const num of arr) {
    if (count === 0) {
      candidate = num;
      count++;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;
  for (const num of arr) {
    if (candidate === num) count++;
  }

  if (count > half) {
    return candidate;
  } else {
    return -1;
  }
}

const arr2 = [1, 1, 2, 1, 3, 5, 1];
console.log(majElement(arr2));

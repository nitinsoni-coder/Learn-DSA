/* 
  Time complexity : O(n²)
  space complexity : O(1)
*/

function rearrange(arr, n) {
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) i++;

    for (let j = i; j < n; j++) {
      if (arr[i] > 0 && i !== j && arr[j] < 0) {
        let tmp = arr[j];
        arr[j] = arr[i + 1];
        arr[i + 1] = tmp;
        break;
      }
    }
  }

  return arr;
}

const arr = [3, 9, -4, -1, 90, 23, 12, -7];
const n = arr.length;
console.log(rearrange(arr, n));

/* 
  Time complexity : O(n)
  space complexity : O(1)
*/

function rearrangeUsingTwoPointer(arr, n) {
  let pos = [];
  let neg = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) pos[pos.length] = arr[i];
    else neg[neg.length] = arr[i];
  }

  let posIndex = 0,
    negIndex = 0;
  let i = 0;

  while (pos.length > posIndex && neg.length > negIndex) {
    if (i % 2 == 0) {
      arr[i++] = pos[posIndex++];
    } else {
      arr[i++] = neg[negIndex++];
    }
  }

  return arr;
}

const arr1 = [3, 9, -4, -1, 90, 23, 12, -7, 88, 90, 345];
const n1 = arr1.length;
console.log(rearrangeUsingTwoPointer(arr1, n1));

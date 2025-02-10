/*
  Time complexity : O(m * n)
  space complexity : O(1)
*/

function isSubsetOfArray(arr, arr1) {
  for (let i = 0; i < arr1.length; i++) {
    let found = false;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == arr1[i]) {
        found = true;
        break;
      }
    }

    if (!found) return false;
  }

  return true;
}

const arr = [11, 5, 7, 3, 1, 0];
const arr1 = [5, 0, 11];

console.log(isSubsetOfArray(arr, arr1));

/*
  Time complexity : O(m + n)
  space complexity : O(m)
*/
function isSubsetUsingHash(arr2, arr3) {
  const hashSet = new Set(arr2);

  for (const num of arr3) {
    if (!hashSet.has(num)) return false;
  }

  return true;
}

const arr2 = [11, 5, 7, 3, 1, 0];
const arr3 = [5, 0, 11];

console.log(isSubsetUsingHash(arr2, arr3));

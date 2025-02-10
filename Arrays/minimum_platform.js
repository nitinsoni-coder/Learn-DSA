/* 
  Time complexity : O(n²)
  space complexity : O(1)
*/

function findPlatform(arr, dep, n) {
  let plat_needed = 1;
  let result = 1;

  for (let i = 0; i < n; i++) {
    plat_needed = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        if (arr[i] >= arr[j] && dep[j] >= arr[i]) {
          plat_needed++;
        }
      }
    }

    result = plat_needed > result ? plat_needed : result;
  }

  return result;
}

const arr = [800, 915, 1100, 1200];
const dep = [1030, 1045, 1110, 1300];
const n = arr.length;

console.log(findPlatform(arr, dep, n));

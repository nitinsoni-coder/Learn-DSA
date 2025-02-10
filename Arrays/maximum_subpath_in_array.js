function maximum(a, b) {
  return a > b ? a : b;
}

function maxSubPath(arr1, arr2, m, n) {
  let i = 0,
    j = 0,
    sum1 = 0,
    sum2 = 0,
    result = 0;

  while (i < m && j < n) {
    if (arr1[i] > arr2[j]) {
      sum2 += arr2[j];
      j++;
    } else if (arr1[i] < arr2[j]) {
      sum1 += arr1[i];
      i++;
    } else {
      result += maximum(sum1, sum2) + arr1[i];
      sum1 = 0;
      sum2 = 0;
      i++;
      j++;
    }
  }

  while (i < m) {
    sum1 += arr1[i++];
  }

  while (j < n) {
    sum2 += arr2[j++];
  }

  result += maximum(sum1, sum2);

  return result;
}

const arr1 = [2, 3, 7, 10, 12];
const arr2 = [1, 5, 7, 8];
const m = arr1.length;
const n = arr2.length;

console.log(maxSubPath(arr1, arr2, m, n));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = [];
  let right = [];

  for (let i = 0; i < mid; i++) left[left.length] = arr[i];

  for (let i = mid; i < arr.length; i++) right[right.length] = arr[i];

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result[result.length] = left[i];
      i++;
    } else {
      result[result.length] = right[j];
      j++;
    }
  }

  while (i < left.length) {
    result[result.length] = left[i];
    i++;
  }

  while (j < right.length) {
    result[result.length] = right[j];
    j++;
  }

  return result;
}

console.log(mergeSort([12, 3, 10, 25, 6, 1]));

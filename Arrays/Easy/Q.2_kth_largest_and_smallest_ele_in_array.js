function sort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];

  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left[left.length] = arr[i];
    else if (arr[i] > pivot) right[right.length] = arr[i];
    else equal[equal.length] = arr[i];
  }

  return [...sort(left), ...equal, ...sort(right)];
}

function largest(arr, k) {
  const newArr = sort(arr);

  //   return newArr[k - 1]; kth smallest element
  return newArr[k + 1];
}

const arr = [2, 56, 89, 23, 90];
console.log(largest(arr, 2));

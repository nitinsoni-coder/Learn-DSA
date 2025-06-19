function quickSort(arr) {
  console.log("arr", arr)
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let right = [];
  let left = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left[left.length] = arr[i];
    else right[right.length] = arr[i];
  }

  console.log("pivot", pivot);
  console.log("left", left);
  console.log("right", right);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, -11, 9, 2, 1]));

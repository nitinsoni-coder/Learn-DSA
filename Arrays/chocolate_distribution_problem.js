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

function minDifference(arr, m) {
  const newArr = sort(arr);
  console.log(newArr);

  //   let minDiff = Infinity;
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i + m - 1 < newArr.length; i++) {
    let diff = newArr[i + m - 1] - newArr[i];

    if (diff < minDiff) minDiff = diff;
  }

  return minDiff;
}

let arr = [7, 3, 2, 4, 9, 12, 56];
let m = 3;
console.log(minDifference(arr, m));

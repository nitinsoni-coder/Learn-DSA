function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

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

function missingNum(arr) {
  const newArr = sort(arr);

  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr[i] > 0 &&
      newArr[i + 1] !== newArr[i] &&
      newArr[i + 1] - newArr[i] !== newArr[i]
    ) {
      return newArr[i] - 1;
    }
  }
}

const arr = [2, -3, 4, 1, 1, 7];
console.log(missingNum(arr));

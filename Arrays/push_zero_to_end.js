function pushZeroToEnd(arr) {
  let count = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  while (count < n) {
    arr[count++] = 0;
  }

  return arr;
}

let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
console.log(pushZeroToEnd(arr));

function longestSubsequence(arr) {
  let n = arr.length;
  let inc = 1,
    dec = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      inc = dec + 1;
    }

    if (arr[i] < arr[i - 1]) {
      dec = inc + 1;
    }
  }

  return inc > dec ? inc : dec;
}

const arr = [10, 22, 9, 33, 49, 50, 31, 60];
console.log(longestSubsequence(arr));

function peakEle(arr) {
  let n = arr.length;
  if (n === 1) return 0;

  for (let i = 1; i < n; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) return i;
  }
}

const arr = [1, 3, 20, 4, 1, 0];
console.log(peakEle(arr));

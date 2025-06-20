function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([15, 6, 2, 3, 1]));

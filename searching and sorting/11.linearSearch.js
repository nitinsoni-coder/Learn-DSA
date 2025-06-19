function linearSearch(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return i;
  }
}

console.log(linearSearch([4, 7, 1, 3, 0], 3));

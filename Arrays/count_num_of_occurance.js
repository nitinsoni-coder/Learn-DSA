function numOfOccurance(arr, key) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) count++;
  }

  return count;
}

const arr = [3, 5, 2, 7, 2, 8, 5, 2];
console.log(numOfOccurance(arr, 2));
    
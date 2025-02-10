function minDifference(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] -= k;
  }

  console.log(arr);

  let max = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (max < arr[i]) max = arr[i];
  }

  console.log(max);
}

const arr = [12, 6, 4, 15, 17, 10];
const k = 6;

console.log(minDifference(arr, k));

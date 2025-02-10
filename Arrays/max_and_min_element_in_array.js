function max(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

function min(arr) {
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

function main() {
  let arr = [34, 6, -1, 0, 4];

  console.log("max element :", max(arr));
  console.log("min element :", min(arr));
}

main();

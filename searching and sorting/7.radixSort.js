function countingSortForRadix(arr, place) {
  const n = arr.length;
  let output = new Array(n).fill(0);
  let count = new Array(10).fill(0);

  // Count occurrences of each digit at "place"
  for (let i = 0; i < n; i++) {
    let digit = Math.floor(arr[i] / place) % 10;

    count[digit]++;
  }

  // Compute cumulative count
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array (placing elements in sorted order)
  for (let i = n - 1; i >= 0; i--) {
    let digit = Math.floor(arr[i] / place) % 10;

    output[count[digit] - 1] = arr[i];

    count[digit]--;
  }

  // Copy sorted values back to arr
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  let max = Math.max(...arr);

  // Apply counting sort for each digit place (1s, 10s, 100s, etc.)
  for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
    countingSortForRadix(arr, place);
  }

  return arr;
}

// Example Usage
const inputArray = [321, 232, 464, 45, 0, 55, 689];
console.log('Sorted Array:', radixSort(inputArray));

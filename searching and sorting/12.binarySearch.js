// function binarySearch(arr, k) {
//   let low = 0;
//   let high = arr.length - 1;
//   let mid;

//   while (high >= low) {
//     mid = Math.floor((high + low) / 2);

//     if (arr[mid] === k) return mid;
//     else if (arr[mid] > k) high = mid - 1;
//     else low = mid + 1;
//   }

//   return -1;
// }

// console.log(binarySearch([3, 8, 12, 18, 34], 18));

function binarySearch(arr, k, low = 0, high = arr.length - 1) {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === k) return mid;
  else if (arr[mid] > k) return binarySearch(arr, k, low, mid - 1);
  else return binarySearch(arr, k, mid + 1, high);
}

console.log(binarySearch([3, 8, 12, 18, 34], 18));

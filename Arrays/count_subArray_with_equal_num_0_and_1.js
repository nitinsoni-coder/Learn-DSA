function countSubarrayWithEqualNum(arr, n) {
  let m = new Map();
  let count = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) arr[i] = -1;

    sum += arr[i]; // 1 => 0 => -1 => 0 => -1 => 0

    if (sum === 0) count += 1;  // 1 => 2  => 5

    if (!m.has(sum)) {
      m.set(sum, 1); //  {["1", 1, "0" : 1, "-1" : 1]}
    } else {
      count += m.get(sum); // 2 => 3 => 4
      m.set(sum, m.get(sum) + 1);  //  {["1", 1, "0" : 2, "-1" : 2]}
    }
  }

  console.log(arr);
  return count;
}

const arr = [1, 0, 0, 1, 0, 1, 1]; // [1, -1, -1, 1, -1, 1, 1]
const n = arr.length;

console.log(countSubarrayWithEqualNum(arr, n));

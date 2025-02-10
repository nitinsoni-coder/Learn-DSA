function countPairs(arr, target) {
  let freq = new Map();
  let n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let deducedNum = target - arr[i];

    if (freq.has(deducedNum)) {
      count += freq.get(deducedNum);
    }

    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
  }

  return count;
}

const arr = [1, 5, 7, -1, 5];
const target = 6;
console.log(countPairs(arr, target));

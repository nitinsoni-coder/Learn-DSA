function minimumJump(arr) {
  const n = arr.length;

  if (arr[0] === 0) return -1;

  if (n <= 1) return 0;

  let jumps = 0;
  let currentEnd = 0;
  let furthest = 0;

  for (let i = 0; i < n - 1; i++) {
    furthest = Math.max(furthest, i + arr[i]);

    if (currentEnd === i) {
      jumps++;
      currentEnd = furthest;

      if (currentEnd >= n - 1) break;
    }
  }

  return jumps++;
}

const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
console.log(minimumJump(arr));

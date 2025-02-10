function nonRepeatingElement(arr) {
  const a = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (a.has(arr[i])) {
      a.set(arr[i], a.get(arr[i]) + 1);
    } else {
      a.set(arr[i], 1);
    }
  }

  console.log(a);

  for (let i = 0; i < arr.length; i++) {
    if (a.get(arr[i]) === 1) return arr[i];
  }

  return -1;
}

const arr = [3, 6, 3, 8, 1, 0];
console.log(nonRepeatingElement(arr));

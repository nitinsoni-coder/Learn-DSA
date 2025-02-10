function missingAndRepeatingElement(arr) {
  let n = arr.length;
  let missing = (n * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    let absValue = Math.abs(arr[i]);

    if (arr[absValue - 1] > 0) {
      arr[absValue - 1] = -arr[absValue - 1];
      missing -= absValue;
    } else {
      console.log("repeating : ", absValue);
    }
  }

  console.log("missing : ", missing);
}

const arr = [3, 1, 3];
missingAndRepeatingElement(arr);

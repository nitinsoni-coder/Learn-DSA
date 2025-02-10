function equalSubstring(str) {
  let count = 0;
  let n = str.length;

  let arr = [];

  for (let i = 0; i < n - 2; i++) {
    let tmp = "";
    let j = i + 1;
    let k = j + 1;
    tmp += str[i] + str[j] + str[k];
    arr.push(tmp);
  }

  for (let i = 0; i < arr.length; i++) {
    let zero = 0,
      one = 0,
      two = 0;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "0" || arr[i][j] === "1" || arr[i][j] === "2") {
        if (arr[i][j] === "0") zero++;
        if (arr[i][j] === "1") one++;
        if (arr[i][j] === "2") two++;
      } else {
        break;
      }
    }

    if (zero == 1 && one == 1 && two == 1) count++;
  }

  console.log(arr);

  return count;
}

const str = "102100211";
console.log(equalSubstring(str));

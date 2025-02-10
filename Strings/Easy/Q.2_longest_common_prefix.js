function join(arr) {
  let tmp = "";
  for (let i = 0; i < arr.length; i++) {
    tmp += arr[i];
  }

  return tmp;
}

function longestCommonPrefix(arr) {
  let minLength = arr[0].length;

  for (let str of arr)
    minLength = str.length < minLength ? str.length : minLength;

  let res = [];

  for (let i = 0; i < minLength; i++) {
    let ch = arr[0][i];

    for (let str of arr) {
      if (str[i] !== ch) return join(res);
    }

    res[res.length] = ch;
  }

  return join(res);
}

const arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(arr));

function reverse(str, start, end) {
  while (start < end) {
    let tmp = str[start];
    str[start] = str[end];
    str[end] = tmp;
    start++;
    end--;
  }
}

function reverseString(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    res[res.length] = str[i];
  }

  reverse(res, 0, res.length - 1);

  console.log(res);

  let i = 0;
  let n = res.length;
  for (let l = 0; l < res.length; l++) {
    if (res[l] !== ".") {
      // go to the beginning of the word
      if (i !== 0) res[i++] = ".";

      // go to the end of the word
      let r = l;
      while (r < n && res[r] !== ".") {
        res[i] = res[r];
        i++;
        r++;
      }

      //reverse the word
      reverse(res, i - (r - l), i - 1);

      //move to next word
      l = r;
    }
  }

  console.log(res);

  let tmp = "";
  for (let i = 0; i < res.length; i++) {
    tmp += res[i];
  }

  return tmp;
}

let str = "i.like.this.program.very.much";
console.log(reverseString(str));

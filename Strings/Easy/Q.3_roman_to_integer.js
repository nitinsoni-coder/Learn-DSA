function value(num) {
  if (num === "I") return 1;
  if (num === "V") return 5;
  if (num === "X") return 10;
  if (num === "L") return 50;
  if (num === "C") return 100;
  if (num === "D") return 500;
  if (num === "M") return 1000;
}

function romanToInteger(str) {
  let res = 0;

  let n = str.length;

  for (let i = 0; i < n; i++) {
    let s1 = value(str[i]);

    if (i + 1 < n) {
      let s2 = value(str[i + 1]);
      if (s1 >= s2) res += s1;
      else {
        res += s2 - s1;
        i++;
      }
    }
  }

  return res;
}

console.log(romanToInteger("MCMIV"));

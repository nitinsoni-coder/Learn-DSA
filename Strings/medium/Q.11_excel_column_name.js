let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function findColumnName(num) {
  if (num < 26) {
    return alpha[num - 1];
  } else {
    let q = Math.floor(num / 26),
      r = num % 26;
    if (r == 0) {
      if (q == 1) {
        return alpha[26 + r - 1];
      } else {
        return findColumnName(q - 1) + alpha[26 + r - 1];
      }
    } else {
      return findColumnName(q) + alpha[r - 1];
    }
  }
}

console.log(findColumnName(26));
console.log(findColumnName(51));
console.log(findColumnName(52));
console.log(findColumnName(101));

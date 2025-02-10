function minRepeats(s1, s2) {
  let n = s1.length,
    m = s2.length;

  for (let i = 0; i < n; i++) {
    let rep = 1;
    let found = true;

    for (let j = 0; j < m; j++) {
      if (s1[i] !== s2[j]) {
        found = false;
        break;
      }
    }

    if (found) return found;
  }

  return -1;
}

const s1 = "abcd";
const s2 = "cdabcdab";
console.log(minRepeats(s1, s2));

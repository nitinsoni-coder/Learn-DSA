function isIsomorphic(s1, s2) {
  if (s1.length !== s2.length) return false;

  const m1 = {};
  const m2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (!(s1[i] in m1)) m1[s1[i]] = i;
    if (!(s2[i] in m2)) m2[s2[i]] = i;

    if (m1[s1[i]] !== m2[s2[i]]) return false;
  }

  console.log(m1, m2);

  return true;
}

const s1 = "abc";
const s2 = "xyz";
console.log(isIsomorphic(s1, s2));

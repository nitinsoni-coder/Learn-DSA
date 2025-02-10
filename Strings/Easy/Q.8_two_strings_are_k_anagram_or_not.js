let MAX_CHAR = 26;

function arekAnagrams(str1, str2, k) {
  let n = str1.length;
  if (str2.length != n) return false;

  let count1 = new Array(MAX_CHAR);
  let count2 = new Array(MAX_CHAR);
  let count = 0;

  for (let i = 0; i < n; i++) {
    count1[str1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < n; i++)
    count2[str2[i].charCodeAt(0) - "a".charCodeAt(0)]++;

  for (let i = 0; i < MAX_CHAR; i++) {
    if (count1[i] > count2[i]) count = count + Math.abs(count1[i] - count2[i]);
  }

  return count <= k;
}

// Driver code
let str1 = "anagram";
let str2 = "grammar";
let k = 2;

console.log(arekAnagrams(str1, str2, k));

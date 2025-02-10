function minDistance(arr, word1, word2) {
  let d1 = -1,
    d2 = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word1) d1 = i;
    if (arr[i] === word2) d2 = i;
  }
  return Math.abs(d1 - d2);
}

const arr = ["the", "quick", "brown", "fox", "quick"];
const word1 = "the";
const word2 = "fox";
console.log(minDistance(arr, word1, word2));

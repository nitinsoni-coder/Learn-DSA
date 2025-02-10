function maxChar(d, s) {
  let i = 0;
  let j = 0;
  let match = 0;

  while (i < d.length && j < s.length) {
    if (d[i] === s[i]) {
      i++;
      j++;
      match++;
    } else {
      j++;
    }   
  }

  return match;
}

function largestWord(dic, str) {
  let max = 0;

  for (const word of dic) {
    const match = maxChar(word, str);

    if (max < match) max = match;
  }

  return dic[max];
}

const dic = ["ale", "apple", "monkey", "plea"];
const str = "abpcplea";

console.log(largestWord(dic, str));

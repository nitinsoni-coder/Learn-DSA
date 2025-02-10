function checkPanagram(str) {
  let mark = new Array(26).fill(false);

  let index;

  for (let i = 0; i < str.length; i++) {
    if ("A" <= str[i] && str[i] <= "Z") {
      index = str[i].charCodeAt() - "A".charCodeAt();
    } else if ("a" <= str[i] && str[i] <= "z") {
      index = str[i].charCodeAt() - "a".charCodeAt();
    } else continue;

    mark[index] = true;
  }

  for (let i = 0; i < mark.length; i++) {
    if (mark[i] === false) return false;
  }

  return true;
}

let str = "The quick brown fox jumps over the lazy dog";

console.log(checkPanagram(str));

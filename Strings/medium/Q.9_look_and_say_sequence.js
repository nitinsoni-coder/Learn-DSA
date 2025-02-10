function countAndSay(n) {
  if (n === 1) return "1";

  let strToCount = countAndSay(n - 1);
  let ret = "";
  let stack = [];

  for (let i = 0; i <= strToCount.length; ++i) {
    if (
      i === strToCount.length ||
      (stack.length !== 0 && stack[stack.length - 1] !== strToCount[i])
    ) {
      ret += stack.length + stack[stack.length - 1];
      stack = [];
    }
    if (i !== strToCount.length) stack.push(strToCount[i]);
  }
  return ret;
}

let n = 3;
console.log(countAndSay(n));

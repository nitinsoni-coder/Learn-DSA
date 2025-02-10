function equalBracket(str) {
  let cntClose = 0;
  let len = str.length;

  for (let i = 0; i < len; i++) {
    if (str[i] === ")") cntClose++;
  }

  return cntClose;
}

const str = "(())))(";
console.log(equalBracket(str));

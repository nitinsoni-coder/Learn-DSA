function validate(str) {
  if (str.length < 7) return false;

  let dotCount = 0;

  for (let i = 0; i < str.length; i++) if (str[i] === ".") dotCount++;

  if (dotCount > 3) return false;

  for (let i = 0; i < str.length; i++) {
    let tmp = "";

    tmp += str[i];

    if (
      (isNaN(str[i]) && str[i] !== ".") ||
      (tmp.length > 1 && tmp[0] === "0") ||
      parseInt(tmp) > 255
    )
      return false;
  }

  return true;
}

const str = "192.168.0.0";

console.log(validate(str));

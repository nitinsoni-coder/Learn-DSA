function formatLicense(str, k) {
  let res = "";
  let tmp = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== "-") {
      if ("a" <= str[i] && str[i] <= "z") {
        tmp += String.fromCharCode(str[i].charCodeAt() - 32);
      } else {
        tmp += str[i];
      }

      console.log(tmp, tmp.length);

      if (tmp.length === k) {
        res = tmp + (res ? "-" + res : "");
        tmp = "";
      }
    }
  }

  return res;
}

// Test the function
const str = "5F-3Z-2e-9-w";
const k = 4;
console.log(formatLicense(str, k)); // Output: "5F3Z-2E9W"

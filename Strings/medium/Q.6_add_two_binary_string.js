function addTwoBinaryString(s1, s2) {
  let i = s1.length - 1,
    j = s2.length - 1,
    carry = 0,
    res = [];
  let out = "";

  while (i >= 0 || j >= 0 || carry) {
    let bit1 = i >= 0 ? parseInt(s1[i]) : 0;
    let bit2 = j >= 0 ? parseInt(s2[j]) : 0;

    const total = bit1 + bit2 + carry;
    res[res.length] = total % 2;
    carry = Math.floor(total / 2);

    i--;
    j--;
  }

  let start = 0;
  let end = res.length - 1;

  while (start < end) {
    let tmp = res[start];
    res[start] = res[end];
    res[end] = tmp;
    start++;
    end--;
  }

  for (let i = 0; i < res.length; i++) {
    out += res[i];
  }

  return out;
}

const s1 = "1101";
const s2 = "111";

console.log(addTwoBinaryString(s1, s2));

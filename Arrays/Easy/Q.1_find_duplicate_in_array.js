function findDuplicate(arr) {
  let freq = {};

  let res = [];
  for (let x of arr) {
    freq[x] = freq[x] ? freq[x] + 1 : 1;
  }

  for (let entry in freq) {
    if (freq[entry] > 1) {
      res[res.length] = +entry;
    }
  }

  return res;
}

let arr = [12, 11, 40, 12, 5, 6, 5, 12, 11];
console.log(findDuplicate(arr));

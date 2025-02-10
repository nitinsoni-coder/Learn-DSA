function intersection(a, b) {
  const arr1 = new Set(a);
  let res = [];

  console.log(arr1);

  for (let i = 0; i < b.length; i++) {
    if (arr1.has(b[i])) {
      res[res.length] = b[i];
      arr1.delete(b[i]);
    }
  }

  return res;
}

let a = [1, 2, 3, 2, 1]; 
let b = [3, 2, 2, 3, 3, 2];

let res = intersection(a, b);

console.log(res);

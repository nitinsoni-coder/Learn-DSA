function commonElem(arr1, arr2, arr3) {
  const a = new Set(arr1);
  const b = new Set(arr2);
  const c = new Set(arr3);
  let res = [];

  for (const num of a) {
    if (b.has(num) && c.has(num)) {
      res[res.length] = num;
    }
  }

  return res;
}

const arr1 = [2, 5, 6, 7, 2, 67];
const arr2 = [22, 5, 75, 2, 5, 90, 88];
const arr3 = [67, 8, 5, 2, 8, 5];

console.log(commonElem(arr1, arr2, arr3));

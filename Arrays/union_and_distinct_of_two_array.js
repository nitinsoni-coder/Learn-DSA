Array.prototype.Includes = function (ele) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === ele) return true;
  }

  return false;
};

function unionAndDistinct(a, b) {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    if (!res.Includes(a[i])) res.push(a[i]);
  }

  for (let j = 0; j < b.length; j++) {
    if (!res.Includes(b[j])) res.push(b[j]);
  }

  return res;
}

const a = [1, 1, 2, 2, 2, 4];
const b = [2, 2, 4, 4];

console.log(unionAndDistinct(a, b));

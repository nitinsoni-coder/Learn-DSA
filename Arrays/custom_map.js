Array.prototype.customMap = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("Argument must be function");
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[result.length] = callback(this[i], i, this);
    }
  }

  return result;
};

const arr = [1, 5, 7, 7];

const doubled = arr.customMap((item) => item * 2);

console.log(doubled);

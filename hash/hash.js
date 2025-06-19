class Hash {
  constructor() {
    this.table = new Array(10);
    this.size = 0;
  }

  _setKey(key) {
    return key % 10;
  }

  insert(value) {
    const index = this._setKey(value);
    this.table[index] = value;
    this.size++;
  }

  get(key) {
    const target = this._setKey(key);
    return this.table[target];
  }

  search(value) {
    const index = this._setKey(value);

    if (this.table[index] === value) {
      console.log("The value is find at index : ", index);
    } else {
      console.log("Not found");
    }
  }

  delete(key) {
    const index = this._setKey(key);

    if (this.table[index]) {
      this.table[index] = [];
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

const hash = new Hash();
hash.insert(100);
hash.insert(87);
hash.insert(45);
hash.insert(23);

console.log(hash.table);

hash.search(45);
hash.search(458);

hash.delete(23);
console.log(hash.table);

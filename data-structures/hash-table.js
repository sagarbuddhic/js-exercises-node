class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // O(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = []; // O(1)
      this.data[address].push([key, value]); // O(1)
    } else {
      this.data[address].push([key, value]); // O(1)
    }
  }

  // O(1) || O(n)
  get(key) {
    let address = this._hash(key); // O(1)
    let current = this.data[address]; // O(1)
    if (current) {
      for (let i = 0; i < current.length; i++) {
        // O(n)
        // O(1) if current.length === 1
        // or the ele is found in the first index
        if (current[i][0] === key) {
          return current[i][1];
        }
      }
    } else {
      // O(1)
      return undefined;
    }
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length === 1) {
          keys.push(this.data[i][0][0]);
        }
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keys.push(this.data[i][j][0]);
          }
        }
      }
    }
    return keys;
  }
}

const ht = new HashTable(10);
ht.set("a", 1);
ht.set("b", 2);
ht.set("c", 3);
ht.set("d", 4);
ht.set("e", 5);
ht.set("f", 6);
ht.set("g", 7);
ht.set("h", 8);
ht.set("i", 9);
ht.set("j", 10);

console.log(ht.get("a"));

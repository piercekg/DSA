class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weirdPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i ++) {
      total = (total * weirdPrime + key[i].charCodeAt()) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    for (let pair of this.keyMap[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let pair of this.keyMap[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i ++) {
      if (this.keyMap[i]) {
        for (let pair of this.keyMap[i]) {
          if (!keys.includes(pair[0]))
          keys.push(pair[0]);
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i <this.keyMap.length; i ++) {
      if (this.keyMap[i]) {
        for (let pair of this.keyMap[i]) {
          if (!values.includes(pair[1])) {
            values.push(pair[1]);
          }
        }
      }
    }
    return values;
  }
}

let table = new HashTable();
console.log(table.set('pizza', 'forty-seven'));
console.log(table.set('pizza', 'forty'));
console.log(table.get('pizza'));
console.log(table.values());
/*
function hash(key, size) {
  let total = 0;
  let weirdPrime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i ++) {
    total = (total * weirdPrime + key[i].charCodeAt()) % size;
  }
  return total;
};
*/
/*
function hash(input, size) {
  let total = 0;
  for (let char of input) {
    total = (total + char.charCodeAt()) % size;
  }
  return total;
};
*/

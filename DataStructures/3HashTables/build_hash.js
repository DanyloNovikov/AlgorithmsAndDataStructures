class HashTableFirstSolution {
  constructor(size){
    this.data = [];
  };

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    };
    return hash;
  };

  set(key, value) {
    this.data.push([key, value]);
  };

  get(key) {
    for (let i = 0; i < this.data.length; i++) {
      if (key === this.data[i][0]) {
        this.data[i][1];
        console.log(this.data[i]);
        break;
      };
    };
  };
};

class HashTableSecondSolution {
  constructor(size){
    this.data = new Array(50);
    // this.data = [];
  };

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    };
    return hash;
  };

// I forghot that hash create id for storage in memory.
  set(key, value) {
    let address = this._hash(key);
// if in memory this address not exist we create new storage with id
    if (!this.data[address]) {
      this.data[address] = [];
    };
// push to the memor
    this.data[address].push([key, value]);
    return this.data;
  };

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        };
      };
    };

    return undefined;
  };

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      };
    };

    return keysArray;
  };
};

const myHashTable = new HashTableSecondSolution(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 9);
myHashTable.set('oranges', 54);
console.log(myHashTable.keys());

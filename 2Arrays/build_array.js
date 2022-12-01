class MyArray {
  constructor() {
    // how many item inside array
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);

  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
  }
}

const newArray = new MyArray();
newArray.push(21);
newArray.push('!');
newArray.push('new string');
// newArray.pop();
newArray.delete(1);
console.log(newArray);
// console.log(newArray.get(0));

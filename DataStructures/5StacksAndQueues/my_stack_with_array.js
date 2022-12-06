class Stack {
  constructor() {
    this.data = [];
  };

  add(value) {
    this.data.push(value);
  };

  remove() {
    this.data.pop();
  };

  peek() {
    console.log(this.data[-1]);
  };
};

let stack = new Stack;
stack.add('google');
stack.add('amazone');
stack.add('apple');

console.log(stack.data);

stack.remove();
stack.peek();
console.log(stack.data);

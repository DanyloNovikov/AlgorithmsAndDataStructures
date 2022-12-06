class Queue {
  constructor() {
    this.head = null;
    this.tail = this.head;
  };
};

class Stack {
  constructor() {
    this.head = null;
    this.tail = this.head;
  };
};

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
    };
};

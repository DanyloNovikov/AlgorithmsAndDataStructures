// Stack

// google
// youtube
// udemy

// Array
// Linked List

// think for stack enaf simple Array but i want to try
class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next  = next;
    this.prev  = prev;
  };
};


class Stack {
  constructor() {
      this.head = null;
      this.tail = this.head;
      this.length = 0;
  };

  add(value) {
    let node = new Node(value, null, null);

    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
      this.length++;
    } else {

      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    };
  };

  remove() {
    let currentNode = this.tail;
    let storage = null;

    if (this.length === 0) {
      console.log('Stack is empty');
      return;
    };

    if (this.tail.prev != null) {

      storage = this.tail;
      this.tail.prev.next = null;
      this.length--;

      this.tail = currentNode.prev;
    } else {

      storage = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
    };

    return storage;
  };

  printList() {
    let array = [];
    let currentNode = this.head;

    while (currentNode != null) {
      array.push(currentNode.value);

      currentNode = currentNode.next;
    };

    console.log(array);
  };
};

let stack = new Stack;
stack.add(5);
stack.add(8);
stack.add(14);
stack.add(7);
stack.remove();
stack.remove();
stack.remove();
stack.remove();
stack.printList();

class LinkedList {
  constructor(value) {
    this.head = new Node(value, null, null);
    this.tail = this.head;
    this.length = 1;
  };

  append(value) {
    let newNode = new Node(value, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  };

  prepend(value) {
    let newNode = new Node(value, this.head, null);
    this.head.previous = newNode;
    this.head = newNode;

    this.length++;
  };

  reverse() {
    if (!this.head.next) {
      return this.head;
    };

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    };

    this.head.next = null;
    this.head = first;
  };

  printList() {
    let array = [];
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (currentNode != null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      };
    };

    console.log(array);
  };
};

class Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  };
};

let myList = new LinkedList(4);
myList.append(12);
myList.append(7);
myList.prepend(14);
myList.prepend(9);
myList.printList();
myList.reverse();
myList.printList();

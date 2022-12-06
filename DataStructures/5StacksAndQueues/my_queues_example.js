// Queues

// Matt -- Joy -- Samir -- Pavel

// Array
// Linked List

class Queues {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  };

  add(value) {
    let node = new Node(value, null, null);
    if (this.head != null) {

      let storage = this.head;
      this.head.prev = node;
      this.head = node;
      this.head.next = storage;
      this.length++;
    } else {

      this.head = node;
      this.tail = this.head;
      this.length++;
    };

    console.log(this.head);
    return this.head;
  };

  remove() {

    if (this.length <= 0 ) {
      console.log('Queues is empty');
      return;
    };

    let storage = this.tail;

    if (this.length == 1) {
      this.tail = null;
      this.head = null;
      this.length--;
    } else {
      this.tail.prev.next = null
      this.length--;
    };

    console.log(storage);
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
    return array;
  };
};

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  };
};

let queues = new Queues;
queues.add('google');
queues.add('amazone');
queues.add('yahoo');
queues.add('apple');
queues.remove();

queues.printList();

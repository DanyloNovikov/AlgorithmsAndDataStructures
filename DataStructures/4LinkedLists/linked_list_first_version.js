// how list is work ?
// what I want to release ?
// first we create List
// List must be empty
// then we must add value

class LinkedList {
  constructor(value) {
    this.head = new Node(value, null);
    this.tail = this.head;
    this.length = 1;
  };

// add to the tail
  append(value) {
    const newNode = new Node(value, null)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  };

// add to the head
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
    return this;
  };

// find in the List
  lookup(value) {
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if ( currentNode.value === value ) {
        console.log(`index of this value is ${i + 1}`)
      };

      currentNode = currentNode.next;
    };
  };
// add after in this index some value
  insert(value, index) {
    if (typeof(index) !== 'number' || index > this.length) {
      console.log('something wrong');
    };

    let newNode = new Node(value);

    let currentNode = this.head;
    for ( let i = 0; i < this.length; i++ ) {
      if ( i + 1 === index ) {
        let storage = currentNode.next;
        currentNode.next = newNode;
        newNode.next = storage;
        this.length++;
      };

      currentNode = currentNode.next;
    };
  };

// delete Node with this index
  delete(index) {
    if (typeof(index) !== 'number' || index > this.length) {
      console.log('something wrong');
    };

    let currentNode = this.head;
    let storageNode = currentNode;

// maybe something can be wrong with iteration logic
    for ( let i = 0; i < this.length; i++ ) {
      if ( i + 1 === index ) {
        storageNode = currentNode;
      };

      if ( i === index ) {
        storageNode.next = currentNode.next;
        currentNode.next;
        this.length--;
      };

      currentNode = currentNode.next;
    };
  };

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    };

    console.log(array);
  };
};

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(8);
myLinkedList.append(21);
myLinkedList.prepend(1);
myLinkedList.insert(12, 3);
myLinkedList.delete(4);
myLinkedList.lookup(12);
myLinkedList.printList();

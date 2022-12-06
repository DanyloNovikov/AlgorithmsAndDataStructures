// how tree is must looks
// BinaryTree have this name because we have only 2 nodes
class Tree {
  constructor(value) {
    this.mainNode = new Node(value, null, null, null);
  };

  insert(value) {

    if (typeof(value) !== 'number') {
      console.log('incorrect type of value');
      return value; 
    };

    let node = new Node(value, null, null, null);
    let currentNode = this.mainNode;

    // iteration node
    while (currentNode != null) {
      if (currentNode.value > node.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
          currentNode.left.parent = currentNode;
          return;

        } else {
          currentNode = currentNode.left;
        }
      } else if (currentNode.value < node.value){
        if (currentNode.right === null) {

          currentNode.right = node;
          currentNode.right.parent = currentNode;
          return;

        } else {
          currentNode = currentNode.right;
        };
      } else {
        console.log('value already exit');
        return;
      };
    };
  };

  lookup(value) {
    let currentNode = this.mainNode;

    if(typeof(value) !== 'number') {
      console.log('incorect input');
      return;
    };

    while (currentNode !== null) {
      if (currentNode.value > value) {
        if (currentNode.left === null) {
          
          console.log('nothing found');
          return;

        } else {
          currentNode = currentNode.left;
        }
      } else if (currentNode.value < value) {
        if (currentNode.righ === null) {
         
          console.log('nothing found');
          return;

        } else {
          currentNode = currentNode.right;
        }
      } else {
        console.log('We are found this node');
        console.log(currentNode);
        return currentNode;
      };
    };
  };

  remove(value) {
    let currentNode = this.mainNode;

    if (typeof(value) !== 'number') {
      console.log('input is incorect');
      return;
    };

    while (currentNode !== null) {
      if (currentNode.value > value) {
        if (currentNode.left === null) {

          console.log('not found');
          return;

        } else {
          currentNode = currentNode.left;
        }
      } else if (currentNode.value < value) {
        if (currentNode.right === null) {

          console.log('not found');
          return;

        } else {
          currentNode = currentNode.right;
        }
      } else {
        currentNode.parent.left = null;
        currentNode.parent.right = null;
        return;
      };
    };
  };

  // tree another implantation
  anotherRemove() {
    if (!this.mainNode) {
      return false;
    };

    let currentNode = this.mainNode;
    let parentNode = null;

    while(currentNode) {
      if(value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if(currentNode.value < parentNode.left) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value < parentNode.value) {
            }
          }
        } else if (currentNode.right.left === null) {

        } else {
        }
      }
    };
  };
};

class Node {
  constructor(value, left, right, parent) {
    this.value  = value;
    this.left   = left;
    this.right  = right;
    this.parent = parent;
  };
};

let tree = new Tree(100);
tree.insert(50);
tree.insert(25);
tree.insert(75);
tree.insert(200);
tree.insert(150);
tree.insert(300);

tree.lookup(300);
tree.remove(300);
tree.lookup(300);
// console.log(tree);
// console.log(tree.mainNode.left);
// must looks like;
//           100
//         /     \
//       50      200
//      /  \    /   \
//    25   75 150  300

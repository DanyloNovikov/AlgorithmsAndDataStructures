// trees similar with List
// technicle linkedList is tree but with only one path

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
// Binary search tree O:
// lookup O(log N)
// insert O(log N)
// delete O(log N)

// Perfect BinaryTree
//               O
//            /    \
//           O      O
//         /  \   /  \
//        O   O  O    O

// Full BinaryTree
//              O
//            /  \
//           O    O
//         /  \
//        O    O
//           /  \
//          O    O

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
//
// AVL Trees:
// https://www.cs.usfca.edu/~galles/visualization/AVLtree.html -- Animation
// https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7 -- How it work
//
// Red Black Trees:
// https://www.cs.usfca.edu/~galles/visualization/RedBlack.html -- Animation
// https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5 -- How it work
//
// About Binary Heap:
// When we talk about Heap it is mean Binary Heap
// another name is minimal tree
// how it is work
//         101
//        /    \
//      72      33
//     /  \    /  \ 
//    2   45  5    1
//
//    it storage minimal value
//
// About O(n) binary heap
// lookup: O(n)
// insert: O(log n)
// delete: O(log n)
//
// lookup O(n) not O(log n) because we must iterate element
//
// heap in memory and tree heap they different thinght
//
// Priority Queue: in heap tree priority is not exist because we have only left and right
//
// Binary Heap Positive:
// Better than O(n)
// Priority
// Flexible Size
// Fast Insert
//
// Binary Heap Negative:
// slow lookup

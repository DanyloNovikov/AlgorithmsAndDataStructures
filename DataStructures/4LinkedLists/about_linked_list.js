// Type of LinkedList:
// 1. single
// 2. double
//
// What problem do we encounter with a race ?
// With static arrays, we only had a certain amount of data or memory that can be allocated next
// But the both dynamic arrays and static arrays can increase their memory once it hits a
// certain limit.
//
// What is a LinkedList ?
// It is List of Links
// Links are nodes
// Nodes has two element value of the data that we want to store,
// and node to the next the next node.
// the first node have name head
// the last node have name tail

// simple alrray have only value
// example:
// const basket = ['apple', 'grapes', 'pears'];

// list:
// linked list: apples --> grapes --> pears --> null
//  point of memory:        8947       8742      372

// O
// prepend: O(1)
// append: O(1)
// lookup: O(n)
// insert: O(n)
// delete: O(n)

// point is a reference to another place in memory or another object or another node

const obj1 = { a: true };
const obj2 = obj1;

// we just create point a reference to an object
// point it is simple reference
// in memory we have only 1 object

// another example
let obj1 = { a: true };
let obj2 = obj1;
obj2.a = 'booya';
console.log('2', obj2);

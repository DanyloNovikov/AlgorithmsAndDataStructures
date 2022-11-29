// Given 2 arrays, create a function that let`s a user know (true/false)
// whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'd', 'e']
// const array2 = ['z', 'y', 'x', 'f']
// should return false
// ----------------------------------------------------------------
// const array1 = ['a', 'b', 'c', 'd', 'e']
// const array2 = ['z', 'y', 'x', 'e']
// should return true

const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = ['z', 'y', 'x', 'e'];

const checkArray = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      };
    };
  };

  return false;
};

// console.log(checkArray(array1, array2)); // O(n^2)
// how we can update this methods ?

// firstly we can convert first array to object

// array1 ==> obj {
//   a: true,
//   b: true,
//   c: true,
//   d: true,
//   e: true
// }
// array2[index] === obj.properties

const checkArray2 = (array1, array2) => {
  // loop though first array and create object
  // where properties === items in the array
  // loop second array and check if item
  // in second array exists on created object.

  let map = {};

  for (let i = 0; i < array1.length; i++) {
    // map[i] == map.a
    if(!map[i]) {
      const item = array1[i];
      map[item] = true;
    };
  };

  for (let i = 0; i < array2.length; i++) {
    if (map[array2[i]]) {
      return true;
    };
  };

  return false;
}

// console.log(checkArray2(array1, array2));// O(a + b)

// most easily solytion
const checkArray3 = (array1, array2) {
  return array1.some(item => array2.includes(items));
}

checkArray3(array1, array2);

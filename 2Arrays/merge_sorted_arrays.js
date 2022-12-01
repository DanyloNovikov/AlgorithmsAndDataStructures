class ArraysHelper {
  merge(arr1, arr2) {
    const newArray = [];

    for (let i = 0; i < arr1.length; i++) {
      newArray.push(arr1[i]);
    };

    for (let j = 0; j < arr2.length; j++) {
      newArray.push(arr2[j]);
    };

    return newArray;
  }

  mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    if (array1.length === 0) {
      return array2;
    };

    if (array2.length === 0) {
      return array1;
    };

    while (array1Item ||  array2Item) {
      if (array1Item < array2Item) {
        mergedArray.push(array1Item);
        array1Item = array1[i];
        i++;
      } else {
        mergedArray.push(array2Item);
        array2Item = array2[j];
        j++;
      };
    };

    return mergedArray;
  }
}

const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8, 9];

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];


const exampleArraysHelper = new ArraysHelper();
// console.log(exampleArraysHelper.merge(firstArray, secondArray));
console.log(exampleArraysHelper.mergeSortedArrays(arr1, arr2));

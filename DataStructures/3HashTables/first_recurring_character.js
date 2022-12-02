// Google Question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// It should return 2
//
// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
// It should return 1

// Given an array = [2, 3, 4, 5]
// It should return undefined

const searchRecurring = (array) => {
  if (!Array.isArray(array)) {
    console.log('params must be array')
  }

  sorted = {};

  for (let i = 0; i < array.length; i++) {
    if (typeof(array[i]) !== 'number' ) {
      console.log('all value must be string');
      return;
    };

    if (sorted[array[i]]) {
      console.log(array[i]);
      return;
    } else {
      sorted[array[i]] = true;
    };
  };

  console.log(undefined);
};

firstArray = [2, 5, 1, 2, 3, 5, 1, 2, 4];
secondArray = [2, 1, 1, 2, 3, 5, 1, 2, 4];
thirdArray = [2, 3, 4, 5];

searchRecurring(firstArray);
// console.log(typeof(4));

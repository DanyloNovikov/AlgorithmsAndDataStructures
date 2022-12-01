class StringHelper {

  reversFirstWay(string) {
    const array = this.toArray(string);
    const reversArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
      reversArray.push(array[i]);
    };

    let reversString = '';
    for (let i = 0; i < reversArray.length; i++) {
      reversString += reversArray[i];
    };

    return reversString;
  };

  reversSecondWay(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
      return 'params incorrect';
    };

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
      backwards.push(str[i]);
    };

    return backwards.join('');
  };

  toArray(string) {
    let array = [];

    for(let i = 0; i < string.length; i++) {
      array.push(string[i])
    };

    return array;
  };
};

const string = 'Hi! My name Danylo.';
const newStringHelper = new StringHelper();
console.log(newStringHelper.revers(string));

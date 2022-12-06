// What is program ?

// allocate memory where our variable
// parse and execute what means read and write commands

// call stack
console.log('1');
console.log('2');
console.log('3');

const one = 0 => {
  const two = () => {
    console.log('4');
  };

  two();
};

// CALL STACK
two();
one();

// top of the call stack one function as we entry into the one function then we
// exicute two methods and now two is on the top call stack

// Syncprogramming means --

console.log('1'); // line first exicute
console.log('2'); // line second exicute
console.log('3'); // line trird exicute

// how we can make stack overflow: recursive
function foo() {
  foo();
};

foo();

// asyncprogramming means --
console.log('1'); //line first

setTimeout(() => { // continue exicute but now wait
  console.log(console.log('2'));
}, 2000);

console.log('3'); //line third

// we do not need wait when console.log('2') will be exicute because js async

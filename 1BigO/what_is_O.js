// What is good code ?
// Good code must be readable and Scalable
const ocean_with_only_nemo = ['nemo']
const ocean = [
  'dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel',
  'squirt', 'darla', 'hank'
]
const large = new Array(100000).fill('nemo');

function findNemo(array) {
  // timers for chekking speed
  let t0 = performance.now()

  for (let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log(array[i])
      break
    }
  }

  let t1 = performance.now()
  console.log('Call to find Nemo took: ' + (t0 + t1) + ' milliseconds')
}

findNemo(large) // O(n) --> Linear time

// we can see that our function worked slower and slower
// Big O is notation is the language we use for talking about how long an
// algorithm takes to run


// the number operations is 1 not matter who is long array
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]) // O(1)
  console.log(boxes[1]) // O(2)
}

compressFirstBox(ocean) // O(2) --> Constant time because they always run only
// 2 command

function compressBoxesTwice(boxes) {
  boxes.forEach(function(box) {
    console.log(box)
  })

  boxes.forEach(function(box) {
    console.log(box)
  })
}

compressBoxeesTwice(ocean) // O(2n) because we run 2 iterations
 // but we skip constant 2 so we have only O(n)

// BUT !
function compressBoxesTwiceSecond(boxes, boxes2) {
  boxes.forEach(function(box) {
    console.log(box)
  })

  boxes2.forEach(function(box) {
    console.log(box)
  })
}

compressBoxesTwiceSecond() // it will be O(a + b) because it be different arrays
// in the params

// Homework

function anotherFunction() {
  let someResponse = 1;
  return someResponse;
}

function funChallenge(input) {
  let a = 10; // O(1) call only one time
  a = 50 + 3; // O(1) call only one time

  for (let i = 0;  i < input.lenght; 1++) { // O(n) call each iteration
    anotherFunction(); // O(n) call each iteration
    let stranger = true; // O(n) call each iteration
    a++; // O(n) call each iteration
  }

  return a; // O(1) call only one time
}

// BIG O(3 + 4n)

function anotherFunChallenge(input) {
  let a = 5; // O(1) call only one time
  let b = 10; // O(1) call only one time
  let c = 50; // O(1) call only one time

  for (let i = 0; i < input; i++) { // O(n) call each iteration (init iteration)
    let x = i + 1; // O(n) call each iteration
    let y = i + 2; // O(n) call each iteration
    let z = i + 3; // O(n) call each iteration

  }
  for (let j = 0; j < input; j++) { // O(n) call each iteration (init iteration)
    let p = j * 2; // O(n) call each iteration
    let q = j * 2; // O(n) call each iteration
  }
  let whoAmI = "I don't know";  // O(1) call only one time
}

// BIG O(4 + 7n)

// About Big O(n^2)
const boxes = ['a', 'b', 'c', 'd', 'e']

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes) // O(n^2) --> Quadratic Time

// About Big O(n!)(Factorial)

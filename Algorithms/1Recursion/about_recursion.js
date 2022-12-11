// recursive also algorithms
//
// example:
let counter = 0;

function inception() {
    console.log(counter);
    if (counter > 3) {
        return 'done';
    };

    counter++;
    inception();
};

inception();

// 1. Inentify the base case.
// 2. Identify the recursive case.
// 3. Get closer and closer and return when needed.

// Anything you do with a recursion CAN be done iteratively(loop)
// 
// Recursion
// Positive:
// DRY
// Readability
//
// Negative:
// Large Stack
//
// if you dont know how deep call much better to use iteration
//
// When we should use recursion ?
//
// Search and Depth for search recursion is really useful
//
// Every time you are using a tree or converting
// Something into a tree, consider recursion
//
// 1. Divided into a number of subproblems that a smaller of the same problem.
// 2. Each instance of the subproblem is identical in nature.
// 3. The solutions of each suproblem can be combined to solve the problem at hand.
//
// Divide and Conquer using Recursion
//
//

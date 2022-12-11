// Write two functions that finds the factorial
//
// With Iteration
function findFactorialFirst(number) {
    if (number === 2) {
        return 2;
    }
    ;
    return number * findFactorialFirst(number - 1);
};

function findFactorialSecond(number) {
    let answer = 1;

    for (let i = 1; i <= number; i++) {
        answer = answer * i;
    }
    ;

    console.log(answer);
};

console.log(findFactorialFirst(5));
findFactorialSecond(5);

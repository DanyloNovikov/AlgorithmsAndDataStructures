function fibonacciWithIterative(count) { // O(n)
	let answer = [1, 1];
	
	for (let i = 0; i <= count - 1; i++) {
		answer.push(answer[i] + answer[i + 1]);
	};

	console.log(answer);
};

function fibonacciWithRecursive(n) { // O(2^n)
	if (n < 2) {
		return n;
	};

	return fibonacciWithRecursive(n - 1) + fibonacciWithRecursive(n - 2)
};

fibonacciWithIterative(12);
console.log(fibonacciWithRecursive(5));


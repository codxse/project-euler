/*
 * By considering the terms in the Fibonacci sequence
 * whose values do not exceed four million,
 * find the sum of the even-valued terms.
 */

// The Global Variable
var fibonacci = [];

function fib1(n, before, current) {
	typeof n === 'undefined' ? n = 100 : n = n; 
	typeof before === 'undefined' ? before = 1 : before = before;
	typeof current === 'undefined' ? current = 2 : current = current;

	if (current > n) { return before; }
	else {
		//console.log(current + ' ');
		fibonacci.push(current);
		return before + fib1(n, current, current + before);
	}
}

//console.log('1');
fibonacci.push(1);
var totalFib = fib1(4000000, 1, 2);

// Print fibonacci array
//console.log(fibonacci);

// Find fibonacci < 4M
var evenVal = 0;
for (i = 1; i <= fibonacci.length; i += 3) { evenVal += fibonacci[i]; }
console.log(evenVal);
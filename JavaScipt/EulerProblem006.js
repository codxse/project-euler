/*
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)^2 = 552 = 3025
 * Hence the difference between the sum of
 * the squares of the first ten natural numbers
 * and the square of the sum is 3025 − 385 = 2640.
 * Find the difference between the sum of
 * the squares of the first one hundred natural numbers and
 * the square of the sum.
 */

function sumOfSquares(max) {
	if (max === 1) { return 1; }
	else {
		var temp = Math.pow(max, 2);
		return temp + sumOfSquares(max-1);
	}
}

function sequareOfSum(max) {
	return Math.pow(((Math.pow(max, 2) + max) / 2), 2);
}

console.log(sequareOfSum(100) - sumOfSquares(100));
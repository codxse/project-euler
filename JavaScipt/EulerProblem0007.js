/*
 * By listing the first six prime numbers:
 * 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

function isPrime(n) {
	if (n == 1) { return false; }
	if (n == 2) { return true; }
	
	var i = Math.floor(Math.sqrt(n));
	while (i > 1) {
		if (n % i == 0) { return false; }
		i -= 1;
	}
	return true;
}

function primeTo(n) {
	var i = 1;
	var primes = new Array();
	do {
		if (isPrime(i)) { primes.push(i); }
		i += 1;
	} while (primes.length <= n-1); 
	return primes;
}

var primes = primeTo(10001);
console.log(primes);
console.log(primes[primes.length-1]);
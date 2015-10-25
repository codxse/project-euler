/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143
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

function possiblePrimeList(n) {
	var n = Math.floor(Math.sqrt(n));
	var primes = new Array();

	while (n > 1) {
		if (isPrime(n)) { primes.push(n); }
		n -= 1;
	}
	return primes;
}

function primeFactorOf(n) {
	var primes = possiblePrimeList(n);
	var primeFactor = new Array();

	for (i = 0; i <= primes.length; i++) {
		if (n % primes[i] == 0) {
			primeFactor.push(primes[i])
		}
	}

	return primeFactor;
}

//console.log(sieve(600851475143));
console.log(primeFactorOf(600851475143));

//console.log(possiblePrimeList(600851475143).length);
/*console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(131));
console.log(isPrime(991));
*/
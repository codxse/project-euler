/* A Pythagorean triplet is a set of
 * three natural numbers, a < b < c, for which
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4*2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean
 * triplet for which a + b + c = 1000.
 * Find the product abc.
 */

function IsPythagorean(number) {
	var a = 0;
	var b = 0;
	var c = 0;
	for (a = 1; a < number/3; a++) {
		for (b = a; b < number/2; b++) {
			c = number - a - b;
			if (a * a + b * b == c * c) {
				console.log(a + ',' + b + ',' + c);
				return a * b * c;
			}
		} 
	}
	return 0;
}

console.log(IsPythagorean(1000));
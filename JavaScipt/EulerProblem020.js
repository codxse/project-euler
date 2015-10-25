/* n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 * Find the sum of the digits in the number 100!
 */

// Just ignore the code below, JavaScript can't handle large number

function toFixed(x) {
	if (Math.abs(x) < 1.0) {
		var e = parseInt(x.toString().split('e-')[1]);
		if (e) {
			x *= Math.pow(10, e-1);
			x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
		}
	} else {
		var e = parseInt(x.toString().split('+')[1]);
		if (e > 20) {
			e -= 20;
			x /= Math.pow(10, e);
			x += (new Array(e + 1).join('0'));
		}
	}
	return x;
}

function factorial(n) {
	if (n === 0) { return 1; }
	else {
		return n * factorial(n-1);
	}
}

var fstring = toFixed(factorial(100));
fstring =  fstring.toString();
var total = 0;

for (var i = 0; i < fstring.length; i++) {
	total += parseInt(fstring[i]);
}

console.log(total);
/*
 * A palindromic number reads the same both ways.
 * The largest palindrome made
 * from the product of two 2-digit numbersis 9009 = 91 × 99.
 * Find the largest palindrome made from
 * the product of two 3-digit numbers.
 */

function isPalindrom(s){
		if (typeof(s) === 'number') { s = s.toString(); }
    var strRvr = s.split("").reverse().join("");

    if (strRvr === s) { return true; }
    else { return false; }
}

function getMaxOfArray(arr) {
	return Math.max.apply(null, arr);
}

var palindrom = new Array();
max = 0;
for (i = 900; i <= 999; i++) {
	for (j = 900; j <= 999; j++ ) {
		product = i * j;
		if (isPalindrom(product)) {
			palindrom.push([i,j,product]);
			if (product > max) { max = product; }
		}
	}
}

var lvl1 = palindrom.length - 1;
var lvl2 = palindrom[lvl1].length - 1;
console.log(palindrom[lvl1][lvl2]);
console.log(palindrom);
console.log(max);
/*
console.log(isPalindrom(100));
console.log(isPalindrom(100001));
console.log(isPalindrom(8781));
*/
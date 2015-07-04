/*
 * The problem can't be solved using recursive
 *
 *function fibDigit(count, j, k) {
 *  var numberStr = k;
 *	numberStr = numberStr.toString();
 *	if (numberStr.length === 1000) {
 *		return count;
 *	} else {
 *		return fibDigit(count+1, k, j+k);
 *	}
 *}
 */

// Just ignore it, still can't be solve with brutefore looping too
function fibDigit(count, j, k) {
	var numberStr = k.toString();
	while (numberStr.length < 1000) {
		var temp = j;
		j = k;
		k += temp;
		numberStr = k.toString();
		count++;
	}
	return count;
}

console.log(fibDigit(2, 1, 1));
/*
 * If we list all the natural numbers below 10
 * that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

// The brutefoce way
function natural(target) {
	function foo(flag) {
		if (flag === true) { return target } else { return 0 }
	}
	
	typeof target === 'undefined' ? target = 999 : target = target; 	
	var flag = false;

	(target % 5 === 0) || (target % 3 === 0) ? flag = true : flag = flag;
	bar = foo(flag);
	if (target < 3) {
		//console.log(target);
		return 0;
	} else {
		//console.log(target + '    ' + bar);
		target -= 1;
		return bar + natural(target); 
	}
}

// The science way
function natural2(n, target) {
	typeof target === 'undefined' ? target = 999 : target = target;

	var p = Math.floor(target / n);
	return n * (Math.pow(p, 2) + p) / 2;
}

console.log(natural());
console.log(natural2(3) + natural2(5) - natural2(15));
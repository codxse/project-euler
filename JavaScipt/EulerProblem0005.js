/*
 * 2520 is the smallest number that can be divided
 * by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number
 * that is evenly divisible by all of the numbers from 1 to 20?
 */

function devisor(up) {
	var step = up;
	
	while (true) {
		var flag = true;
		for (var i = 1; i < step; i++) {
			if (up % i === 0) { flag = flag && true; }
			else { 
				flag = flag && false;
				break;
			}
		}
		if (flag === true) { break; }
		up += step;
	}
	return up;
}

console.log(devisor(20));
/* The four adjacent digits in the 1000-digit number that have
 * the greatest product are 9 × 9 × 8 × 9 = 5832.
 * Open EulerProble0008.txt
 * Find the thirteen adjacent digits in the 1000-digit number
 * that have the greatest product.
 * What is the value of this product?
 */

function processFile(data, step) {
	var leng = data.length;
	var max = 1;
	var temp = 1;

	for (var inc = 0; inc <= leng - step; inc++) {
		var limit = inc + step;
		for (var j = inc; j < limit; j++) {
			if (data[j] == 0) { break; }
			temp *= data[j];
			//console.log(data[j] + ',' + temp);
		}
		//console.log('-----');
		if (temp > max) {
			max = temp;
		}
		temp = 1;
	}
	return max;
}

var file = 'EulerProblem0008.txt';
var fs = require('fs');
data = fs.readFile(file, 'utf8', function(err, data) {
	if (err) { throw err; }
	data = data.replace(/(\r\n|\n|\r)/gm,'');
	console.log(data);
	console.log(processFile(data, 13));
});
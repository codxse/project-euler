# Work out the first ten digits of the sum
# of the following one-hundred 50-digit numbers.

def sumOfBigNumber(data):
	bigNumber = 0
	data = open(data)
	for line in data:
		line = long(line)
		bigNumber += line

	return str(bigNumber)[0:10]


print sumOfBigNumber('EulerProblem0013.txt')
# 2^15 = 32768 and the sum of its
# digits is 3 + 2 + 7 + 6 + 8 = 26.
# What is the sum of the digits of the number 2^1000?

def sumOfPower(number=2, power=1000):
	theSum = 0
	longPow = str(2 ** 1000)
	for digit in longPow:
		theSum += int(digit)
	return theSum

print sumOfPower()
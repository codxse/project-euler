# By considering the terms in the Fibonacci sequence
# whose values do not exceed four million,
# find the sum of the even-valued terms.

import time

def genFib(num1, num2):
	while True:
		fib = num1 + num2
		yield fib
		num1 = num2
		num2 = fib

def fibEven4M():
	generator = genFib(1, 2)
	total = 0
	x = 2
	while x <= 4000000:
		#print x
		if x % 2 == 0:
			total += x
		x = generator.next()
	return total

time_now = time.time()
print 'Total Even Fibonacci < 4M: ' + str(fibEven4M())
print 'Excecution time: ' + str(time.time() - time_now) + 's'

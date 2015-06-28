# If we list all the natural numbers below 10
# that are multiples of 3 or 5, we get 3, 5, 6 and 9.
# The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

import time

def multiple(n=999, p=1):
	i = n / p;
	return p * (i ** 2 + i) / 2

time_now = time.time();
print multiple(999, 5) + multiple(999, 3) - multiple(999, 15)
print 'Excecution time: ' + str(time.time() - time_now) + 's'
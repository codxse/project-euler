# The problem Can't be solved using recursive
#def fibDigit(count=2, j=1, k=1):
#	numberStr = str(k)
#	if len(numberStr) > 999:
#		return count, j, k
#	else:
#		return fibDigit(count+1, k, j+k)

def fibDigit(count=2, j=1, k=1):
	numberStr = str(k)
	while len(numberStr) < 1000:
		count += 1
		temp = j
		j = k
		k = temp+k
		numberStr = str(k)

	return count

print fibDigit();
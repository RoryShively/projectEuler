import itertools
import operator
import functools

i = 2
x = 1
y = 1

list = []

while x > 4000000:
    z = x + y
    x = y
    y = z
    i += 1
    if i % 3 == 0:
        append.list(z)

print(list)

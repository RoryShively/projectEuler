i = 2
x = 1
y = 1
a = []

while x < 4000000:
    z = x + y
    x = y
    y = z
    i += 1
    if i % 3 == 0:
        a.append(z)

b = sum(a)
print(b)
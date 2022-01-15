def creteTree(n):
    for i in range(n):
        white_space = (2*i+1)
        print ' ' * (n - (i + 1)),'*' * white_space
    print ' ' * (white_space/2), '|'

creteTree(input("Enter tree height:"))

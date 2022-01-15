def isPalindrome(s):
    return s == s[::-1]
  
check = isPalindrome(raw_input('Enter string: '))
print(bool(check))


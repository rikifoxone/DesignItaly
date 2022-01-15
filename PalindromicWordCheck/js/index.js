var args = process.argv.slice(2);

isPalindrome = (s) => {
    return s == Array.from(s).reverse().join('');  
}

check = isPalindrome(args[0])
console.log(check)

  

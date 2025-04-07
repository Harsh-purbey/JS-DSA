const isPalindrome = function (x) {
  // negative number is not palindrome -121 <-> 121-
  if (x < 0) {
    return false;
  }
  //reverse function works on array only
  return x === Number(x.toString().split("").reverse().join(""));
};

console.log(isPalindrome(121));
console.log(isPalindrome(10));

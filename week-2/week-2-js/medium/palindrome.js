/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()
  str = str.match(/\w/g)
  if (str === null) {
    return true
  }
  str = str.join("")
  if (str == str.split("").reverse().join("")) {
    return true
  }
  return false;
}

module.exports = isPalindrome;

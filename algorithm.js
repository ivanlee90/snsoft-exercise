function findLongestString(stringArray) {

  let longestString = ''
  for (let i=0 ; i<stringArray.length ; i++) {
    if (stringArray[i].length > longestString.length) longestString = stringArray[i]
  }
  return longestString
}

function sumAll(number) {
  let sum = 0
  for (let i=0 ; i<=number ; i++) sum += i
  return sum
}

module.exports = { findLongestString, sumAll }

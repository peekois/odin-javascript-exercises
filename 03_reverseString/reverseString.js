const reverseString = function (string) {
  let stringToReverse = string;
  let resultString = '';

  for (let i = 1; i <= string.length; i++) {
    lastLetter = stringToReverse.slice(-1);
    resultString += lastLetter;
    stringToReverse = stringToReverse.slice(0, -1);
  }
  return resultString;
};

// Do not edit below this line
module.exports = reverseString;

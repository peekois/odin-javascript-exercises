const palindromes = function (input) {
  var inputString = input
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s/g, '');
  var reverseString = inputString.split('').reverse().join('');
  return inputString == reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;

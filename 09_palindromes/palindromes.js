const palindromes = function (input) {
  let string = input.toLowerCase();
  let array = Array.from(string);
  let reverseArray = array.reverse();

  if (reverseArray.toString() != array.toString()) {
    return false;
  }

  if (reverseArray.toString() == array.toString()) {
    return true;
  }
};

// Do not edit below this line
module.exports = palindromes;

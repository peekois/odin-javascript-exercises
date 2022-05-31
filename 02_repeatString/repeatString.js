const repeatString = function (string, num) {
  let stringToReturn = '';

  if (num < 0) {
    return 'ERROR';
  } else {
    for (let i = 0; i < num; i++) {
      stringToReturn += string;
    }
    return stringToReturn;
  }
};

// Do not edit below this line
module.exports = repeatString;

const sumAll = function (num1, num2) {
  if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
    return 'ERROR';
  }
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  if (num1 > num2) {
    biggerNum = num1;
    smallerNum = num2;
  } else {
    biggerNum = num2;
    smallerNum = num1;
  }

  let sum = 0;
  for (let i = smallerNum; i <= biggerNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

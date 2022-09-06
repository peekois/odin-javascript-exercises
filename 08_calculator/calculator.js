const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((total, item) => {
    return total * item;
  });
};

const power = (a, b) => a ** b;

const factorial = function (num) {
  const array = [];
  for (i = 1; i <= num; i++) {
    array.push(i);
  }
  return array.reduce(function (a, b) {
    return a * b;
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

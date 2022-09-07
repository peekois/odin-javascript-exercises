const findTheOldest = function (input) {
  const sortedArray = input.sort(function (a, b) {
    const currentYear = new Date().getFullYear();
    const lastPerson = a.yearOfDeath !== undefined ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;
    const nextPerson = b.yearOfDeath !== undefined ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  return sortedArray[0];
};
// RAY, JANE, CARLY
// Do not edit below this line
module.exports = findTheOldest;

const removeFromArray = function (array, ...toRemove) {
  arrayLen = array.length;
  toRemoveLen = toRemove.length;
  for (let i = 0; i < toRemoveLen; i++) {
    if (array.indexOf(toRemove[i]) != -1) {
      let index = array.indexOf(toRemove[i]);
      array.splice(index, 1);
    } else {
      continue;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  // throw new CustomError('Not implemented');
  let cat = []
  let arr = matrix.flat()

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '^^') {
      cat.push([i])
    }
  }
  return cat.length

};
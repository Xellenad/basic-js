const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) throw new CustomError('Not implemented');


    let long = 0

    for (let subArr of arr) {
      if (Array.isArray(subArr)) {
        long = Math.max(this.calculateDepth(subArr), long);
      }
    }
    return long + 1;
  }
}
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  if (typeof (sampleActivity) !== 'string' || +sampleActivity < 1 || +sampleActivity > 15 || !sampleActivity) {
    return false;
  }

  const i = Math.log(2) / HALF_LIFE_PERIOD;
  const j = Math.log(MODERN_ACTIVITY / sampleActivity) / i;

  return j;

};
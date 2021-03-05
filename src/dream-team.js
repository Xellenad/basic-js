const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let box = [];
    members.forEach((item) => {
      if (typeof item === 'string') {
        box.push(item.trim().substring(0, 1).toLocaleUpperCase());
      }
    });
    if (box.length === 0) return false;
    return box.sort().join().replace(/,/g, '');
  } else {
    return false
  }
};
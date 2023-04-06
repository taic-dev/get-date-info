const { formatObj } = require("./formatObj");
const { initialObj } = require("./initialObj");

function getDateInfo(initial: string, format: string) {
  if(initial === "w" || initial === "m") {
    return formatObj[format][initial][initialObj[initial]];
  }
  return initialObj[initial];
}

module.exports = getDateInfo;
module.exports.default = getDateInfo;
function getDateInfo(initial: string, format: string) {
  const { formatObj } = require("./formatObj");

  console.log(formatObj);

  // const date = new Date();

  // date.getFullYear();
  // date.getMonth();
  // date.getDate();
  // date.getHours();
  // date.getMinutes();
  // date.getSeconds();
  // date.getMilliseconds();
  // date.getDay();
}

getDateInfo("","");

module.exports = getDateInfo;
module.exports.default = getDateInfo;

const { formatObj } = require("./formatObj");

function getDateInfo(initial: string, format?: string) {
  const date = new Date();

  if(initial === "y") {
    return date.getFullYear();
  }

  if(initial === "m") {
    return date.getMonth();
  }

  if(initial === "d") {
    return date.getDate();
  }

  if(initial === "h") {
    return date.getHours();
  }

  if(initial === "i") {
    return date.getMinutes();
  }
  
  if(initial === "s") {
    return date.getSeconds();
  }

  if(initial === "w") {
    return date.getDay();
  }
  
  if(initial === "ms") {
    return date.getMilliseconds();
  }
}

getDateInfo("");

module.exports = getDateInfo;
module.exports.default = getDateInfo;

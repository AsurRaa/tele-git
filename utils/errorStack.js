const chalk = require("chalk");
errorStack = (mess) => {
  message = mess;
  let messageLength = message.length;
  let borderString = "-";
  let borderDotLength = borderString.repeat(messageLength);
  let errorMess = chalk.red.bold(
    `${borderDotLength}\n${message}\n${borderDotLength}`
  );
  return errorMess;
};

module.exports = errorStack;

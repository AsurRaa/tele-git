// author: @lyhourchhen
// copyright: @asurraa
// date: 11/10/2020
// descriptive: cli-script or module to alert to telegram-group.

const { Telegraf } = require("telegraf");
const { argv } = require("yargs");
const config = require("./telegit.json");
const chalk = require("chalk");
// constant
const telegram_to = config.telegram_to;
const telegram_token = config.telegram_token;
let message = "";

if (argv.message) {
  console.log(
    chalk.blue.bold("your message:\n-------------\n"),
    chalk.red(`| ${argv.message}`)
  );
  message = argv.message;
} else {
  // null
  throw "message can't be null.";
}

// process & function
const sendToGroup = () => {
  bot.telegram.sendMessage(telegram_to, message);
};
const bot = new Telegraf(telegram_token);
sendToGroup();
bot.launch();
setTimeout(() => {
  process.exit();
}, 1000);

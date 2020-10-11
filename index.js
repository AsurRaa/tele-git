#!/usr/bin/env node

// author: @lyhourchhen
// copyright: @asurraa
// date: 11/10/2020
// descriptive: cli-script or module to alert to telegram-group.

// import
const fs = require("fs");
const { Telegraf } = require("telegraf");
const { argv } = require("yargs");

const chalk = require("chalk");
const errorStack = require("./utils/errorStack.js");

// Check for config file is found or not
const path = "./teleConfig.json";
try {
  if (fs.existsSync(path)) {
    console.log(chalk.green.bold("Config file found."));
  }
  if (fs.existsSync(path) === false) {
    throw errorStack(
      "You must initate your config file before preceed this cli"
    );
  }
} catch (err) {
  throw errorStack("You must initate your config file before preceed this cli");
}
const config = require("./teleConfig.json");
// constant
const telegram_to = config.telegram_to;
const telegram_token = config.telegram_token;
let message = "";

if (argv[2] == null) {
  throw errorStack("Argument must not be null.");
}
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

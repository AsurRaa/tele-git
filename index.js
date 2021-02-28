#!/usr/bin/env node

// author: @lyhourchhen
// copyright: @asurraa
// date: 11/10/2020
// descriptive: cli-script or module to alert to telegram-group.

const fs = require("fs");
const { Telegraf } = require("telegraf");
const { argv } = require("yargs");
const chalk = require("chalk");
const errorStack = require("./utils/errorStack.js");

try {
  if (fs.existsSync(path)) {
    console.log(chalk.green.bold("Config file found."));
  }
  if (fs.existsSync(path) === false) {
    throw errorStack(
      "You must initiate your config file before precede this cli"
    );
  }
} catch (err) {
  throw errorStack(
    "You must initiate your config file before precede this cli"
  );
}
const config = require("./teleConfig.json");
const telegram_to = process.env.telegram_to;
const telegram_token = process.env.telegram_token;
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
  throw "message can't be null.";
}

const sendToGroup = () => {
  bot.telegram.sendMessage(telegram_to, message);
};
const bot = new Telegraf(telegram_token);
sendToGroup();
bot.launch();
setTimeout(() => {
  process.exit();
}, 1000);

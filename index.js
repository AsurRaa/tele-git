// author: @lyhourchhen
// copyright: @asurraa
// date: 11/10/2020
// descriptive: cli-script or module to alert to telegram-group.

const { Telegraf } = require('telegraf')
const { argv } = require('yargs')

// constant
const telegram_to = '-1001417035739'
const telegram_token = '1399320990:AAHv4eFAO1qoGLTYLXnKJeUdSZbY2HE2TDE'
let message = ''

if (argv.message) {
  console.log('arge', argv.message)
  message = argv.message
} else {
  // null
  throw "message can't be null."
}

// process & function
const sendToGroup = () => {
  bot.telegram.sendMessage(telegram_to, message)
}
const bot = new Telegraf(telegram_token)
sendToGroup()
bot.launch()
setTimeout(() => {
  process.exit()
}, 1000)

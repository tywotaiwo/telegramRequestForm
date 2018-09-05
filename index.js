'use strict'

const Telegram = require('telegram-node-bot')
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('625951230:AAHqQH5GzwS5dwLDlzh7RVrGuK6xONMAKCY')
const messageController = require('./messages/message.Controller');
const OtherwiseController = require('./controllers/OtherwiseController');



const msgController  = new messageController();
tg.router
    .when(
        new TextCommand('start', 'messageCommand'), msgController)
        .when(new TextCommand('Start', 'messageCommand'), msgController)
        .otherwise(new OtherwiseController());
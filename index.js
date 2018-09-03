'use strict'

const mongoose = require('mongoose');
const config = require('./config/config');
const Telegram = require('telegram-node-bot')
const TextCommand = Telegram.TextCommand
const tg = new Telegram.Telegram('625951230:AAHqQH5GzwS5dwLDlzh7RVrGuK6xONMAKCY')
const messageController = require('./messages/message.Controller');
const OtherwiseController = require('./controllers/OtherwiseController');

mongoose.connect(config.mongo.host);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("connected to database");
});

const msgController  = new messageController();
tg.router
    .when(
        new TextCommand('start', 'messageCommand'), msgController)
        .when(new TextCommand('Start', 'messageCommand'), msgController)
        .otherwise(new OtherwiseController());
'use strict';

const sendMail = require('./mailer');
const Telegram = require('telegram-node-bot');
//const runform = require('./form')
//const Message = require('./message.model');
const TelegramBaseController = Telegram.TelegramBaseController;
class messageController extends TelegramBaseController {
    messageHandler($) {
/**
      const keys = Object.keys($._message._text);
        var messageId = null;
      // console.log(keys);
      // console.log($._message._text);
        console.log($._message._messageId);
        $.sendMessage('Send me your name')
        $.waitForRequest
            .then($ => {
            $._chatId = 637189924;
            $.forwardMessage($._message._from._id, $._message._messageId);
         })
 **/
       var messageId = $._message._messageId;
        var chatId = $._chatId;
        var fromId = $._message._from._id;


        const form = {
            name: {
                q: 'Send me your name',
                error: 'sorry, wrong input',
                validator: (message, callback) => {
                if(message.text) {

            $._chatId = -1001397257968;
            $.forwardMessage($._message._from._id, message.messageId);
            $._chatId = chatId;
            callback(true, message.text) //you must pass the result also
            return
        }

        callback(false)
    }
    },
        phone: {
            q: 'Send me your phone number',
                error: 'sorry, wrong input',
                validator: (message, callback) => {
                if(message.text) {
                    $._chatId = -1001397257968;
                    $.forwardMessage($._message._from._id, message.messageId);
                    $._chatId = chatId;
                    callback(true, message.text)
                    return
                }

                callback(false)
            }
        },

        request: {
            q: 'What is your request?',
                error: 'sorry, wrong input',
                validator: (message, callback) => {
                if(message.text) {
                    $._chatId = -1001397257968;
                    $.forwardMessage($._message._from._id, message.messageId);
                    $._chatId = chatId;
                    callback(true, message.text)
                    return
                }
                callback(false)
            }
        }
    }
    $.runForm(form, (result) => {
            var msg = "Name: " + result.name + "\n\n" + "Phone Number: " + result.phone + "\n\n" + "Request: " + result.request;
            sendMail(msg);
    });

    }


    get routes() {
        return {
            'messageCommand': 'messageHandler',
        }
    }
}

module.exports = messageController;

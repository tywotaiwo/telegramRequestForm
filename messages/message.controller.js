'use strict';

const nodemailer = require('nodemailer');
const Telegram = require('telegram-node-bot');

const Message = require('./message.model');

const TelegramBaseController = Telegram.TelegramBaseController;

class messageController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    messageHandler($) {

        const form = {
            name: {
                q: 'Send me your name',
                error: 'sorry, wrong input',
                validator: (message, callback) => {
                    if(message.text) {
                        console.log(message.chat.id);
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
            			    callback(true, message.text)
            			    return
            		    }

            		    callback(false)
            	    }
                }
}

        $.runForm(form, (result) => {
          var request = result.name + "\n\n" + result.phone + "\n\n" + result.request;
          var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'youremail@gmail.com',
            pass: 'your password'
          },
          tls: {
                  rejectUnauthorized: false
              }
        });

        var mailOptions = {
          from: 'Datateam Request',
          to: 'tywotaiwo@gmail.com',
          subject: 'New Request',
          text: request
        };

        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        });

            }

    get routes() {
        return {
            'messageCommand': 'messageHandler',
        }
    }
}

module.exports = messageController;

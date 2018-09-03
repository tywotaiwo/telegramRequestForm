'use strict';

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
            const message = new Message({
                                name: result.name,
                                phone: result.phone,
                                request:  result.request
                              });
            message.save(function (err, message) {
                                 if (err) return console.error(err);
                                 console.log(message);
                                 $.sendMessage("Your request has been submitted");
                               });

            console.log(result)
        });
          /**  let msg = $.message.text.split(' ').slice(1).join(' ');


                  console.log("done");
               **/
            }

    get routes() {
        return {
            'messageCommand': 'messageHandler',
        }
    }
}

module.exports = messageController;

'use strict';

const Telegram = require('telegram-node-bot');

const TelegramBaseController = Telegram.TelegramBaseController;

class OtherwiseController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    handle($) {
        $.sendMessage('Enter "Start" to begin');
    }

}

module.exports = OtherwiseController;

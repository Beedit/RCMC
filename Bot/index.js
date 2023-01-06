require('dotenv').config();
const ws = require('./websocket/websocket.js');
const Bot = require('./discord/bot.js');

const bot = new Bot;
const websocket = new ws;


websocket.init(bot);
bot.init(websocket);


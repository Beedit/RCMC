require('dotenv').config();
const websocket = require('./websocket/websocket.js');
const Bot = require('./discord/bot.js');

const bot = new Bot;
const ws = new websocket;


ws.init(bot);
bot.init(ws);


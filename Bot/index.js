require('dotenv').config();
const ws = require('./websocket/websocket.js');
const Bot = require('./discord/bot.js');

const bot = new Bot;
const websocket = new ws;

bot.init(process.env.TOKEN);

websocket.init();

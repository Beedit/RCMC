require('dotenv').config();
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT });
const Bot = require('./bot.js');

const bot = new Bot;

bot.init(process.env.TOKEN);

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        data = JSON.parse(data);
        if (data.method == "testConnection"){
            wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({method: "message", data: "Connection Successful"}));
                console.log("Connection Successful");
            }
            });
        }
    });
});

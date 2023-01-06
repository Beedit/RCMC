const WebSocket = require('ws');

class ws {
    constructor() {
        this.wss = new WebSocket.Server({ port: process.env.PORT });
        this.bot = null;
    }

    init(bot) {
        this.bot = bot;

        this.wss.on('connection', function connection(ws) {
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
    }
}

module.exports = ws;
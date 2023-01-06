const WebSocket = require('ws');

class ws {
    constructor() {
        this.wss = new WebSocket.Server({ port: process.env.PORT });
    }

    init() {
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
    test() {
        console.log("Test");
    }
}

module.exports = ws;
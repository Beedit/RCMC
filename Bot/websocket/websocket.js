const WebSocket = require('ws');

class ws {
    constructor() {
        this.wss = new WebSocket.Server({ port: process.env.PORT });
        this.bot = null;
    }

    init(bot) {
        this.bot = bot;
        // This is here because in line 18, it says that this.wss is undefined and I don't know why.
        let wss = this.wss;
        
        wss.on('connection', function connection(ws) {
            ws.on('message', function message(data) {
                data = JSON.parse(data);
                if (data.method == "testConnection"){
                    wss.clients.forEach(function each(client) {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(JSON.stringify({method: "testConnectionResponse"}));
                            console.log("Connection Successful");
                        }
                    });
                }
                else if (data.method == "statusUpdate"){
                    info = JSON.parse(data.data)
                    bot.send(`${info.gametype}`)
                }
            });
        });
    }
    send(data) {
        this.wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    }
}

module.exports = ws;
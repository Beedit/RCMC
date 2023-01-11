import WebSocket from "WebSocket";
import Settings from "./config";

let ws = new WebSocket(`ws://${Settings.host}:${Settings.port}`);
const mc = Client.getMinecraft()
const mcDir = mc.field_71412_D


let unload = false
let connected = false

const chat = (message) => {
    ChatLib.chat("&dRCMC >>&f " + message);
}

const log = (thing) => {
    console.log(thing)
    ChatLib.chat(thing)
}

if(Settings.enabled){
    ws.connect();
}

ws.onMessage = (msg) => {
    msg = JSON.parse(msg);
    if (msg.method == "testConnectionResponse"){
        chat("Connection Successful");
    }
    if (msg.method == "command") {
        ChatLib.say(`/${msg.data}`)
    }
    if (msg.method == "statusGet"){
        log("statusGet")
        ws.send(JSON.stringify({method: "statusUpdate", data: "test"}))
    }
}

ws.onOpen = () => {
    console.log("Socket opened");
    chat("Connection established with the websocket.");
    ws.send(JSON.stringify({method: "playerData", data: Player.getName()}));
}

ws.onClose = () => {
    if(Settings.enabled){
        connected = false
        if (!connected && !unload){
            chat("There has been a connection issue with the websocket. Attempting to reconnect")
        } else if(unload) {
            return;
        } else {
            return chat("Reconnect Failed. Try reloading with /ct reload");
        }
        connected = true
        setTimeout(() => ws.reconnect(), 5000);
    }
}

register("command", (...args) => {
    if(args[0] == "settings"){
        Settings.openGUI();
    }
    else if(args[0] == "testconnection"){
        ws.send(JSON.stringify({ method: "testConnection" }));
    }
    else if (args[0] == "help"){
        ChatLib.chat("RCMC Help\nIl get around to doing this soon")
    } else if (args[0] == "shot"){
        Client.scheduleTask(() => {
            net.minecraft.util.ScreenShotHelper.func_148259_a(
                Client.getMinecraft().field_71412_D,
                "statusImage.png",
                Client.getMinecraft().field_71443_c,
                Client.getMinecraft().field_71440_d,
                Client.getMinecraft().func_147110_a()
            );
        });
    
        let image = FileLib.read(mcDir + "/pxl.png")
        let test = java.util.Base64.getEncoder().encodeToString(image)
        log(test)
    }
}).setName("rcmc").setTabCompletions(["settings", "testconnection"]);

register("gameunload", () => {
    unload = true;
    ws.close();
    chat("Disconnected from the websocket server.");
});

register("serverDisconnect", (...args) => {
    ws.send(JSON.stringify({method: "statusUpdate", data : "Server Disconnect"}))
})
import WebSocket from "WebSocket";
import Settings from "./config";

let ws = new WebSocket(`ws://${Settings.host}:${Settings.port}`);
const mc = mc = Player.getMinecraft()


let unload = false
let connected = false

function chat(message){
    ChatLib.chat("&dRCMC >>&f " + message);
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
    else if (args[0] == "t"){
        mc.ScreenshotHelper().func_148259_a()
    }
}).setName("rcmc").setTabCompletions(["settings", "testconnection"]);

register("gameunload", () => {
    unload = true;
    ws.close();
    chat("Disconnected from the websocket server.");
});
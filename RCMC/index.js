import WebSocket from "WebSocket";
import Settings from "./config";

let ws = new WebSocket(`ws://${Settings.host}:${Settings.port}`);

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
        ChatLib.say(msg.data)
    }
}

register("command", (...args) => {
    if(args[0] == "settings" || args[0] == "s"){
        Settings.openGUI();
    }
    else if(args[0] == "testconnection"){
        ws.send(JSON.stringify({ method: "testConnection" }));
    }
}).setName("rcmc").setTabCompletions(["settings", "s"]);

register("worldUnload", () =>{
    chat("Connection stopped.")
    ws.close();
})
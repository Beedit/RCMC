const Discord = require('discord.js');

class Bot {
    constructor(token) {
        this.client = new Discord.Client({intents: []});
    }

    login(token) {
        this.client.login(token);
    }

    init() {
        this.login(process.env.TOKEN);
        this.client.on('ready', () => {
            console.log(`Bot logged in as ${this.client.user.tag}!`);
        });
    }
}

module.exports = Bot;
const { GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const registerCommands = require('./registerCommands.js')

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


class Bot {
    constructor() {
        this.client = new Discord.Client({intents: []});
        this.commands = new Discord.Collection();
    }

    login(token) {
        this.client.login(token);
    }

    init() {
        this.login(process.env.TOKEN);
        this.client.on('ready', () => {
            console.log(`Bot logged in as ${this.client.user.tag}!`);
        });

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            let command = require(filePath);
            if(command && command.data) {this.commands.set(command.data.name, command)} else {console.error(`The command at ${filePath} does not work as it is missing something.`);}
        }

        registerCommands();
    }
}

module.exports = Bot;
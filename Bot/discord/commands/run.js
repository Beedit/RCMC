const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("run")
		.setDescription("run")
		.addStringOption(option => option.setName("command").setDescription("Command to run").setRequired(true)),
	async execute(interaction, ws) {
		let data = interaction.options.getString("command");

		if(data[0] == "/") {
			data = data.slice(1);
		}
		ws.send(JSON.stringify({method: "command", data : data}))
		await interaction.reply("run");
	},
};
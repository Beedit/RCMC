const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("status")
		.setDescription("Gets the status of the connected account."),
        async execute(interaction, ws) {
		await interaction.reply("Getting status");
        await ws.send(JSON.stringify({method : "status", data : ""}))
	},
};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("test")
		.setDescription("test"),
	async execute(interaction, websocket) {
		await interaction.reply("");
	},
};

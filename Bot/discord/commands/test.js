const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Test command to check if the bot is working.'),
	async execute(interaction) {
		await interaction.reply('test');
	},
};

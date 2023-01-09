const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("stop")
		.setDescription("stop"),
        async execute(interaction, ws) {
		await interaction.reply("stopping bot");
        process.exit();
	},
};
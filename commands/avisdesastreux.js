const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("avisdesastreux")
        .setDescription("Un avis posté qui est désastreux ? Voici la solution !"),
    async execute(interaction) {
        const file = new AttachmentBuilder("https://i.imgur.com/NzAL3dG.mp4");
        const embed4 = new EmbedBuilder()
            .setAuthor({ name: "🚨 ALERTE AVIS DÉSASTREUX 🚨" })
            .setColor("#fa2525");
        await interaction.reply({ files: [file], embeds: [embed4] });
    },
};

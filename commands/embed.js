const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription(
            "Explication sur le raffraichissement des images présentes dans les embeds."
        ),

    async execute(interaction) {
        const embed2 = new EmbedBuilder()
            .setAuthor({ name: "🖼️ Embed (image sur les liens)" })
            .setColor("#196ffa")
            .setDescription(
                "Les images présentes dans les embeds de liens sont générés sur serveur dès le partage du lien en question. Suivant où le lien est partagé (Twitter, Discord..), l'image peut-être mise en cache et ne peut donc s'actualiser durant plusieurs heures ou plusieurs jours."
            )
            .setTimestamp();
        await interaction.reply({ embeds: [embed2] });
    },
};

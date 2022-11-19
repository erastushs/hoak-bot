const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "f",
  description: "give a respect",
  execute(interaction) {
    const f = new MessageEmbed().setImage(
      "https://media.discordapp.net/attachments/504866474289135616/1043564697309421659/r2i52Vu.gif"
    );
    interaction.reply({ embeds: [f] });
  },
};

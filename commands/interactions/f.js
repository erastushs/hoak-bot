const { MessageEmbed, Collection } = require("discord.js");
const cooldown = new Collection();

module.exports = {
  name: "f",
  description: "give a respect",
  execute(interaction) {
    const f = new MessageEmbed().setImage("https://i.imgur.com/r2i52Vu.gif");
    interaction.reply({ embeds: [f] });
  },
};

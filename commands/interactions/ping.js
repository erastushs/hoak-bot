const { Collection } = require("discord.js");
const cooldown = new Collection();

module.exports = {
  name: "ping",
  description: "ping command",
  execute(interaction) {
    if (cooldown.has(interaction.id)) {
      interaction.reply("Please dont spam. Wait 10 seconds");
    } else {
      interaction.reply(`My latency is ${Date.now() - interaction.createdTimestamp}ms.`);
      cooldown.set(interaction.id);
      setTimeout(() => {
        cooldown.delete(interaction.id);
      }, 1000 * 10);
    }
  },
};

const { MessageEmbed, Collection } = require("discord.js");
const cooldown = new Collection();
const botInfo = require("./bot-info.json");

module.exports = {
  name: "info",
  description: "Information about me",
  execute(msg) {
    if (cooldown.has(msg.author.id)) {
      msg.reply("Please dont spam. Wait 10 seconds");
    } else {
      const info = new MessageEmbed()
        .setTitle(" Hoak Fam Information")
        .addField("Author", botInfo.creator)
        .addField("Version", botInfo.version)
        .addField("Library", botInfo.library)
        .setColor("#34ebe8");
      msg.channel.send(info);
      cooldown.set(msg.author.id);
      setTimeout(() => {
        cooldown.delete(msg.author.id);
      }, 1000 * 10);
    }
  },
};

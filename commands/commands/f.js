const { MessageEmbed, Collection } = require("discord.js");
const cooldown = new Collection();

module.exports = {
  name: "f",
  description: "give a respect",
  execute(msg) {
    msg.channel.bulkDelete(1);
    if (cooldown.has(msg.author.id)) {
      msg.reply("Please dont spam. Wait 10 seconds to use this command again");
    } else {
      const f = new MessageEmbed().setImage("https://i.imgur.com/r2i52Vu.gif");
      msg.channel.send(f);
      cooldown.set(msg.author.id);
      setTimeout(() => {
        cooldown.delete(msg.author.id);
      }, 1000 * 10);
    }
  },
};

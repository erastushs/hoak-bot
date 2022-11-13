const { Collection } = require("discord.js");
const cooldown = new Collection();

module.exports = {
  name: "fam",
  description: "motto of hoakfamily",
  execute(msg, args) {
    msg.channel.bulkDelete(1);

    let member = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]) || msg.author;

    msg.channel.send(`${member} **HOAK! HOAK! HOAK! SEMUANYA HOAK!**`);
    cooldown.set(msg.author.id);
    setTimeout(() => {
      cooldown.delete(msg.author.id);
    }, 1000 * 10);
  },
};

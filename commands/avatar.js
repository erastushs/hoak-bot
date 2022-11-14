const { MessageEmbed, Collection } = require("discord.js");
const cooldown = new Collection();

module.exports = {
  name: "avatar",
  description: "check avatar",
  execute(msg, args) {
    msg.channel.bulkDelete(1);
    if (cooldown.has(msg.author.id)) {
      msg.reply("Please dont spam. Wait 10 seconds to use this command again");
    } else {
      let member = msg.mentions.users.first() || msg.guild.members.cache.get(args[0]) || msg.author;
      let img = member.displayAvatarURL({ size: 1024, dynamic: true });

      const avatar = new MessageEmbed()
        .setImage(img)
        .setColor("#202225")
        .setAuthor({ name: `${member.username}`, url: `${img}`, iconURL: `${img}` });
      msg.channel.send({ embeds: [avatar] });
      cooldown.set(msg.author.id);
      setTimeout(() => {
        cooldown.delete(msg.author.id);
      }, 1000 * 10);
    }
  },
};

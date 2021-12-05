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
      let member =
        msg.mentions.users.first() ||
        msg.guild.members.cache.get(args[0]) ||
        msg.author;
      let gambar = member.displayAvatarURL({ size: 1024, dynamic: true });

      const avatar = new MessageEmbed()
        .setAuthor(gambar, msg.username)
        .setImage(gambar)
        .setColor("#d303fc")
        .setAuthor(member.username, gambar, gambar);
      msg.channel.send(avatar);
      cooldown.set(msg.author.id);
      setTimeout(() => {
        cooldown.delete(msg.author.id);
      }, 1000 * 10);
    }
  },
};

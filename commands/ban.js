const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  description: "command ban member",
  execute(msg) {
    const role = msg.member.permissions.has("ADMINISTRATOR");
    if (role) {
      const userban = msg.mentions.users.first();

      if (userban) {
        msg.guild.members
          .ban(userban, "You are baned from the server")
          .then(() => {
            console.log("sukses ");
            const ban = new MessageEmbed()
              .setAuthor("Banned BY ADMIN", "https://i.imgur.com/AXLGdp1.jpg")
              .setDescription(`**${userban.tag}** has been successfully baned from this server`)
              .setColor("#ff0000");
            msg.channel.bulkDelete(1);
            msg.channel.send({ embeds: [ban] });
          })
          .catch((err) => {
            msg.channel.bulkDelete(1);
            msg.reply(`I cant ban **${userban.tag}**`);
          });
      } else {
        msg.reply("Please mention the member you want to ban");
      }
    } else {
      return msg.reply("**You don't have permission to use this command**");
    }
  },
};

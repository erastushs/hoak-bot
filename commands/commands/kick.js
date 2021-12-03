const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  description: "command kick member",
  execute(msg) {
    var role = msg.member.roles.cache.some((r) =>
      ["🔱Assistant of Hoak🔱", "⚜️Father of Hoak⚜️"].includes(r.name)
    );
    if (role) {
      const userKick = msg.mentions.users.first();

      if (userKick) {
        memberKick = msg.guild.member(userKick);

        if (memberKick) {
          memberKick
            .kick("You are kicked from the server")
            .then(() => {
              const kick = new MessageEmbed()
                .setAuthor("KICKED BY ADMIN", "https://i.imgur.com/AXLGdp1.jpg")
                .setDescription(
                  `**${userKick.tag}** has been successfully kicked from this server`
                )
                .setColor("#ff0000");
              msg.channel.bulkDelete(1);
              msg.channel.send(kick);
            })
            .catch((err) => {
              msg.channel.bulkDelete(1);
              msg.reply(`I cant kick **${userKick.tag}**`);
            });
        }
      } else {
        msg.reply("Please mention the member you want to kick");
      }
    } else {
      return msg.reply("**You don't have permission to use this command**");
    }
  },
};

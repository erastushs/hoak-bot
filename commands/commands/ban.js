const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Banned member from server",
  execute(msg) {
    var role = msg.member.roles.cache.some((r) =>
      ["🔱Assistant of Hoak🔱", "⚜️Father of Hoak⚜️"].includes(r.name)
    );
    if (!role) {
      return msg.reply("**You don't have permission to use this command**");
    } else {
      const userBan = msg.mentions.users.first();

      if (userBan) {
        const memberBan = msg.guild.member(userBan);

        if (memberBan) {
          memberBan
            .ban({
              reason: "Breaking server rules ",
            })
            .then(() => {
              const ban = new MessageEmbed()
                .setAuthor("BANNED BY ADMIN", "https://i.imgur.com/AXLGdp1.jpg")
                .setDescription(
                  `**${userBan.tag}** has been successfully banned from this server`
                )
                .setColor("#ff0000");
              msg.channel.bulkDelete(1);
              msg.channel.send(ban);
            })
            .catch((err) => {
              msg.channel.bulkDelete(1);
              msg.reply(`I cant ban **${userBan.tag}**`);
            });
        } else {
          msg.reply("The member you tagged is not in this server");
        }
      } else {
        msg.reply("Please mention the member you want to ban");
      }
    }
  },
};

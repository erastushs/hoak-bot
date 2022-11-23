const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  description: "ban a member",
  async execute(msg) {
    const role = msg.member.permissions.has("ADMINISTRATOR");
    if (role) {
      const userBan = msg.mentions.users.first();

      if (userBan) {
        await msg.guild.members
          .ban(userBan, { reason: "You are banned from the server" })
          .then(async () => {
            const ban = new MessageEmbed()
              .setAuthor({
                name: `Banned by ${msg.author.username}`,
                iconURL:
                  "https://media.discordapp.net/attachments/915469705219829771/1045041557990015036/f05852ae9e50c02a6b1d97d9f44cea41.jpg?width=1216&height=946",
              })
              .setDescription(`**${userBan.tag}** has been successfully baned from this server`)
              .setColor("#ff0000");
            msg.channel.bulkDelete(1);
            await msg.channel.send({ embeds: [ban] });
          })
          .catch(async (err) => {
            console.log(err);
            await msg.reply(`I cant ban **${userBan.tag}**`);
          });
      } else {
        await msg.reply("Please mention the member you want to ban");
      }
    } else {
      await msg.reply("**You don't have permission to use this command**");
    }
  },
};

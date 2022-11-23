const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  description: "ban a member",
  option: [
    {
      name: "user",
      description: "Get a User",
      type: 6,
      required: true,
    },
  ],
  async execute(interaction) {
    const role = interaction.member.permissions.has("ADMINISTRATOR");
    await interaction.deferReply();
    if (role) {
      const userBan = interaction.options.getUser("user");

      if (userBan) {
        await interaction.guild.members
          .ban(userBan, { reason: "You are banned from the server" })
          .then(async () => {
            const ban = new MessageEmbed()
              .setAuthor({
                name: `banned by ${interaction.user.username}`,
                iconURL:
                  "https://media.discordapp.net/attachments/915469705219829771/1045041557990015036/f05852ae9e50c02a6b1d97d9f44cea41.jpg?width=1216&height=946",
              })
              .setDescription(`**${userBan.tag}** has been successfully banned from this server`)
              .setColor("#ff0000");
            await interaction.editReply({ embeds: [ban] });
          })
          .catch(async (err) => {
            console.log(err);
            await interaction.editReply(`I cant ban **${userBan.tag}**`);
          });
      } else {
        await interaction.editReply("Please mention the member you want to ban");
      }
    } else {
      return interaction.editReply("**You don't have permission to use this command**");
    }
  },
};

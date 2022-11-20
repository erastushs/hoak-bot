const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "check avatar",
  option: [
    {
      name: "user",
      description: "Get a User",
      type: 6,
      required: true,
    },
  ],
  execute(interaction) {
    const member = interaction.options.getUser("user") || interaction.user;
    const img = member.displayAvatarURL({ size: 1024, dynamic: true });

    const avatar = new MessageEmbed()
      .setImage(img)
      .setColor("#202225")
      .setAuthor({ name: `${member.tag}`, url: `${img}`, iconURL: `${img}` });
    interaction.reply({ embeds: [avatar] });
  },
};

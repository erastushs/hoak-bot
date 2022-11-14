const { MessageEmbed, Collection } = require("discord.js");
const cooldown = new Collection();

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
    if (cooldown.has(interaction.id)) {
      interaction.reply("Please dont spam. Wait 10 seconds to use this command again");
    } else {
      const member = interaction.options.getUser("user") || interaction.user;
      const img = member.displayAvatarURL({ size: 1024, dynamic: true });

      const avatar = new MessageEmbed()
        .setImage(img)
        .setColor("#202225")
        .setAuthor({ name: `${member.tag}`, url: `${img}`, iconURL: `${img}` });
      interaction.reply({ embeds: [avatar] });
      cooldown.set(interaction.id);
      setTimeout(() => {
        cooldown.delete(interaction.id);
      }, 1000 * 10);
    }
  },
};

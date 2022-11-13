const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guildMemberRemove",
  description: "greeting leave",
  execute(member) {
    const goodbyeEmbed = new MessageEmbed();

    goodbyeEmbed.setColor("#f00000");
    goodbyeEmbed.setTitle("Good Bye:(");
    goodbyeEmbed.setDescription(`We will miss you **${member.user.tag}**`);
    goodbyeEmbed.setThumbnail(member.displayAvatarURL({ size: 1024, dynamic: true }));
    goodbyeEmbed.setImage("https://i.imgur.com/UMoeRlr.gif");

    member.guild.channels.cache.find((ch) => ch.name === "👋-welcome-leave").send({ embeds: [goodbyeEmbed] });
  },
};

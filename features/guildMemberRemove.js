const { MessageEmbed } = require("discord.js");
const moment = require("moment");

const config = require("../utils/config.json");

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
    goodbyeEmbed.setFooter({
      text: `${member.user.tag} Leave ${moment().calendar()}`,
    });

    member.guild.channels.cache.get(config.leaveChannelId).send({ embeds: [goodbyeEmbed] });
  },
};

const { MessageEmbed } = require("discord.js");
const moment = require("moment");

const leaveChannelId = "523371374279131156";

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
      text: `${member.user.tag} Leave at ${moment().format("L")} ${moment().format("LT")}`,
    });

    member.guild.channels.cache.get(leaveChannelId).send({ embeds: [goodbyeEmbed] });
  },
};

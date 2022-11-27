const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const config = require("../utils/config.json");
const logs = require("discord-logs");
const { inlineCode } = require("@discordjs/builders");

module.exports = {
  name: "logs",
  description: "logs announcement",
  execute(bot) {
    logs(bot);

    bot.on("voiceChannelJoin", (member, channel) => {
      const LogChannel = bot.channels.cache.get(config.logChannelId); // Replace with your channel id
      const VCJoined = new MessageEmbed()
        .setAuthor({
          name: "Voice Channel Joined",
          iconURL:
            "https://images-ext-2.discordapp.net/external/UE-DXFkEkiDwnom0gGoI-uEwcg_sYS1_Yvf9nHXnlGk/%3Fv%3D1/https/cdn.discordapp.com/emojis/679580097690599425.png",
        })
        .setDescription(`${member} has ${inlineCode("joined")} the voice channel ${channel} `)
        .setColor("#9D8009")
        .setFooter({
          text: `User Voice Channel Join • ${moment().calendar()}`,
          iconURL: member.displayAvatarURL({ size: 256, dynamic: true }),
        });

      return LogChannel.send({
        embeds: [VCJoined],
      });
    });

    bot.on("voiceChannelLeave", (member, channel) => {
      const LogChannel = bot.channels.cache.get(config.logChannelId); // Replace with your channel id
      const VCLeft = new MessageEmbed()
        .setAuthor({
          name: "Voice Channel Leave",
          iconURL:
            "https://images-ext-1.discordapp.net/external/SalNla9Auw4bMennd-mhjJnu7OToYAXWYjQ3uIaw06k/%3Fv%3D1/https/cdn.discordapp.com/emojis/679580097497530408.png",
        })
        .setDescription(`${member} has ${inlineCode("left")} the voice channel ${channel} `)
        .setColor("#D35513")
        .setFooter({
          text: `User Voice Channel Leave • ${moment().calendar()}`,
          iconURL: member.displayAvatarURL({ size: 256, dynamic: true }),
        });

      return LogChannel.send({
        embeds: [VCLeft],
      });
    });

    bot.on("voiceChannelSwitch", (member, oldChannel, newChannel) => {
      const LogChannel = bot.channels.cache.get(config.logChannelId); // Replace with your channel id
      const VCSwitch = new MessageEmbed()
        .setAuthor({
          name: "Voice Channel Switch",
          iconURL:
            "https://images-ext-1.discordapp.net/external/tXch7ttkRhf_HRhX5ObK2OI7yio9s4A1XUYZzboWwJQ/%3Fv%3D1/https/cdn.discordapp.com/emojis/679580097535017021.png",
        })
        .setDescription(`${member} has ${inlineCode("switched")} from voice channel ${oldChannel} to ${newChannel} `)
        .setColor("#9D8009")
        .setFooter({
          text: `User Voice Channel Switch • ${moment().calendar()}`,
          iconURL: member.displayAvatarURL({ size: 256, dynamic: true }),
        });
      return LogChannel.send({
        embeds: [VCSwitch],
      });
    });
  },
};

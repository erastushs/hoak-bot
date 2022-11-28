const { MessageEmbed } = require('discord.js')
const config = require('../utils/config.json')

module.exports = {
  name: 'guildMemberRemove',
  description: 'greeting leave',
  execute(member) {
    if (config.leaveChannelId === '') return
    const goodbyeEmbed = new MessageEmbed()

    goodbyeEmbed.setColor('#f00000')
    goodbyeEmbed.setTitle('Good Bye:(')
    goodbyeEmbed.setDescription(`We will miss you **${member.user.tag}**`)
    goodbyeEmbed.setThumbnail(member.displayAvatarURL({ size: 1024, dynamic: true }))
    goodbyeEmbed.setImage('https://i.imgur.com/UMoeRlr.gif')
    goodbyeEmbed.setTimestamp(Date.now())
    goodbyeEmbed.setFooter({
      text: `${member.user.tag} Leave `
    })

    member.guild.channels.cache.get(config.leaveChannelId).send({ embeds: [goodbyeEmbed] })
  }
}

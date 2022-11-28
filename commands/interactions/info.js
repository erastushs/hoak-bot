const { MessageEmbed } = require('discord.js')
const config = require('../../utils/config.json')

module.exports = {
  name: 'info',
  description: 'Information about me',
  execute(interaction, bot) {
    const info = new MessageEmbed()
      .setAuthor({
        name: `${bot.user.username}`,
        url: 'https://discord.io/HoakFamily',
        iconURL: `${bot.user.displayAvatarURL({ size: 1024, dynamic: true })}`
      })

      .addFields(
        {
          name: 'Author',
          value: config.creator
        },
        {
          name: 'Version',
          value: config.version
        },
        {
          name: 'Library',
          value: config.library
        }
      )
      .setColor('#34ebe8')
    interaction.reply({ embeds: [info] })
  }
}

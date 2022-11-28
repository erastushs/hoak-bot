const { MessageEmbed, Collection } = require('discord.js')
const cooldown = new Collection()
const config = require('../utils/config.json')

module.exports = {
  name: 'info',
  description: 'Information about me',
  execute(msg, args, bot) {
    if (cooldown.has(msg.author.id)) {
      msg.reply('Please dont spam. Wait 10 seconds')
    } else {
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
      msg.reply({ embeds: [info] })
      cooldown.set(msg.author.id)
      setTimeout(() => {
        cooldown.delete(msg.author.id)
      }, 1000 * 10)
    }
  }
}

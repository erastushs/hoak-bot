const commands = require('../config/commandHandler')
const config = require('../utils/config.json')
const { MessageEmbed } = require('discord.js')
const { bold, inlineCode } = require('@discordjs/builders')

module.exports = {
  name: 'messageCreate',
  execute(msg, bot) {
    if (msg.author.bot) return

    let prefixChoose = ''
    config.prefixes.forEach((prefix) => {
      if (msg.content.startsWith(prefix)) {
        prefixChoose = prefix
      }
    })

    if (!prefixChoose) return
    const args = msg.content.substring(prefixChoose.length).split(' ')

    if (args === '') return
    if (!commands.has(args[0].toLowerCase())) {
      const unknownCommand = new MessageEmbed()
        .setTitle(`:x: ${bold('Unknown Command')}, Try ${inlineCode(`${config.prefixes[0]}help`)}`)
        .setColor('#DE4717')
      return msg.reply({ embeds: [unknownCommand] }).then((msg) => {
        setTimeout(() => {
          msg.delete()
        }, 4000)
      })
    }
    commands.get(args[0].toLowerCase()).execute(msg, args, bot)
  }
}

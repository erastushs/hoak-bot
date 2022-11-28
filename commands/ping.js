const { Collection } = require('discord.js')
const cooldown = new Collection()

module.exports = {
  name: 'ping',
  description: 'ping command',
  execute(msg) {
    if (cooldown.has(msg.author.id)) {
      msg.reply('Please dont spam. Wait 10 seconds')
    } else {
      msg.reply(`My latency is ${Date.now() - msg.createdTimestamp}ms.`)
      cooldown.set(msg.author.id)
      setTimeout(() => {
        cooldown.delete(msg.author.id)
      }, 1000 * 10)
    }
  }
}

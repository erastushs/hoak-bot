const {
    client
} = require('discord.js')

module.exports = {
    name: 'ping',
    description: 'ping command',
    usage: "ping",
    run: (client, Message) => {
        Message.channel.bulkDelete(1)
        Message.reply(`🏓Latency is ${Date.now() - Message.createdTimestamp}ms.`)
    }
}

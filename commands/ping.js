module.exports = {
    name: 'ping',
    description: 'ping command',
    execute(Message) {
        Message.channel.bulkDelete(1)
        Message.reply(`🏓Latency is ${Date.now() - Message.createdTimestamp}ms.`)
    }
}

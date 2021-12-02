module.exports = {
    name: 'ping',
    description: 'ping command',
    execute(Message) {
        Message.channel.bulkDelete(1)
        Message.reply(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
    }
}

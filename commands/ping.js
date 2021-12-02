module.exports = {
    name: 'ping',
    description: 'ping command',
    execute(Message) {
        Message.channel.bulkDelete(1)
        Message.channel.send(`Bot latency: ${Date.now() - Message.createdTimestamp}ms.`)
    }
}

module.exports = {
    name: 'ping',
    description: 'ping command',
    execute(Message) {
        Message.channel.bulkDelete(1)
        Message.reply(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    }
}

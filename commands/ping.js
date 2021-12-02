module.exports = {
    name: 'fam',
    description: 'easter egg',
    execute(Message) {
        Message.channel.bulkDelete(1)
        Message.reply(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    }
}

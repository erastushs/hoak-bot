module.exports = {
    name: 'ping',
    description: 'ini adalah command ping',
    execute(Message) {
        Message.channel.bulkDelete(1)
        Message.reply('HOAK! HOAK! HOAK! SEMUANYA HOAK!')
    }
}
module.exports = {
    name: 'fam',
    description: 'easter egg',
    execute(Message) {
        Message.channel.bulkDelete(1)
        Message.reply('HOAK! HOAK! HOAK! SEMUANYA HOAK!')
    }
}

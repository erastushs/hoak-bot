const {
    MessageEmbed
} = require ('discord.js')
const botInfo = require('./bot-info.json')
module.exports = {
    name: 'info',
    description: 'Kolom informasi',
    execute(Message) {
        const info = new MessageEmbed()
        .setTitle(' Hoak Fam Information')
        .addField('Author',  botInfo.creator)
        .addField('Version', botInfo.version)
        .addField('Library', botInfo.library)
        .setColor('#34ebe8')
    Message.channel.send(info)
    }
}
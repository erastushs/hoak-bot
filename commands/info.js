const {
    MessageEmbed,
    Collection
} = require ('discord.js')
const cooldown = new Collection()
const botInfo = require('./bot-info.json')

module.exports = {
    name: 'info',
    description: 'Kolom informasi',
    execute(Message) {
        if (cooldown.has(Message.author.id)){
            Message.reply('Tolong jangan spam. Tunggu 10 detik')
        } else {
        const info = new MessageEmbed()
        .setTitle(' Hoak Fam Information')
        .addField('Author',  botInfo.creator)
        .addField('Version', botInfo.version)
        .addField('Library', botInfo.library)
        .setColor('#34ebe8')
    Message.channel.send(info)
    cooldown.set(Message.author.id)
    setTimeout(() => {
        cooldown.delete(Message.author.id)
    }, 1000 * 10);
        }
    }
}
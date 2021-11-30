const {
    MessageEmbed
} = require ('discord.js')
const botInfo = require('./bot-info.json')
module.exports = {
    name: 'help',
    description: 'daftar commands',
    execute(Message) {
        const help = new MessageEmbed()
        .setTitle(' Hoak Fam Help Menu')
        .addField('My prefix is `hoak`. Use `hoak<command>` to call me ', '[hoakinfo](https://s.id/HoakFam) : untuk informasi bot\n[hoakclear[amount]](https://s.id/HoakFam) : untuk menghapus pesan dalam text channel')
        .setColor('#eb3434')
    Message.channel.send(help)
    }
}
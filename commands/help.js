const {
    MessageEmbed,
    Collection
} = require ('discord.js')
const cooldown = new Collection()
const botInfo = require('./bot-info.json')

module.exports = {
    name: 'help',
    description: 'daftar commands',
    execute(Message) {
        if (cooldown.has(Message.author.id)){
            Message.reply('Tolong jangan spam. Tunggu 10 detik')
        } else {
        const help = new MessageEmbed()
        .setTitle(' Hoak Fam Help Menu')
        .addField('My prefix is `hoak`. Use `hoak<command>` to call me ', '[hoakinfo](https://s.id/HoakFam) : untuk informasi bot\n[hoakclear [count]](https://s.id/HoakFam) : untuk menghapus pesan dalam text channel')
        .setColor('#eb3434')
    Message.channel.send(help)
    cooldown.set(Message.author.id)
    setTimeout(() => {
        cooldown.delete(Message.author.id)
    }, 1000 * 10);
        }
    }
}
const {
    Collection
} = require('discord.js')
const cooldown = new Collection()

module.exports = {
    name: 'ping',
    description: 'ini adalah command ping',
    execute(Message) {
        if (cooldown.has(Message.author.id)){
            Message.reply('Tolong jangan spam. Tunggu 10 detik')
        } else {
        Message.channel.bulkDelete(1)
        Message.reply('HOAK! HOAK! HOAK! SEMUANYA HOAK!')
        cooldown.set(Message.author.id)
        setTimeout(() => {
            cooldown.delete(Message.author.id)
        }, 1000 * 10);
    }
    }
}

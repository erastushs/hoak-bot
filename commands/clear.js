const { Permissions } = require('discord.js')

module.exports = {
    name: 'clear',
    description: 'menghapus pesan dalam text channel',
    execute(Message, args) {
        if (Messege.member.cache.has(Permissions.FLAGS.ADMINISTRATOR)) {
            if (!args[1]) {
                return Message.reply('masukan jumlah chat yang akan dihapus')
            } else {
            Message.channel.bulkDelete(args[1])
            }
        } else {
            Message.channel.send('Kamu tidak punya akses ini')
        }
    }
}